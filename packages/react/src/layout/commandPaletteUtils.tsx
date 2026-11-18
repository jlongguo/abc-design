import React from 'react'
import { matchKeywordWithPinyin } from '../utils/pinyin'
import type { CommandActionItem } from './CommandPalette'
import type { AbcMenuItem } from './types'

const RECENT_STORAGE_KEY = 'abc_cmd_recent_v1'
export const MAX_RECENT_COUNT = 6

export function readRecentIds(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(RECENT_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : []
  } catch {
    return []
  }
}

export function saveRecentIds(ids: string[]) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(ids.slice(0, MAX_RECENT_COUNT)))
  } catch {
    // 忽略隐私存储限制
  }
}

export function normalizeMenuKeywords(keywords?: string | string[]): string {
  if (!keywords) return ''
  return Array.isArray(keywords) ? keywords.filter(Boolean).join(' ') : keywords
}

export function flattenMenus(
  items: AbcMenuItem[],
  parents: string[] = [],
  parentKeywords: string[] = []
): Array<{ item: AbcMenuItem; trail: string; inheritedKeywords: string }> {
  const result: Array<{ item: AbcMenuItem; trail: string; inheritedKeywords: string }> = []
  for (const item of items) {
    const currentTrail = [...parents, item.label]
    const ownKw = normalizeMenuKeywords(item.keywords)
    const nextParentKeywords = ownKw ? [...parentKeywords, ownKw] : parentKeywords
    if (item.path && (!item.children || item.children.length === 0)) {
      result.push({
        item,
        trail: currentTrail.join(' / '),
        inheritedKeywords: [item.path, ...nextParentKeywords].filter(Boolean).join(' '),
      })
    }
    if (item.children?.length) {
      result.push(...flattenMenus(item.children, currentTrail, nextParentKeywords))
    }
  }
  return result
}

/**
 * 从条目标题或显式 symbol 字段提取核心组件/指令词元
 * 例如 "<Select /> — 单选下拉框" -> "select"，"useAbcConfig() — 主题 Hook" -> "useabcconfig"
 */
export function extractPrimarySymbol(title: string, explicitSymbol?: string): string {
  if (explicitSymbol && explicitSymbol.trim()) {
    return explicitSymbol.trim().toLowerCase()
  }
  const lower = title.trim().toLowerCase()
  const stripped = lower.replace(/^[<'"`(\s]+/, '')
  return stripped.split(/[\s/>—·()]+/)[0] ?? stripped
}

/**
 * 计算候选项与多分词查询的相关度得分；未命中返回 -1。
 * 支持空格多词组合检索（如 "json tree"、"drawer 级联"、"table overflow"）与精确符号/前缀优先排序。
 */
export function scoreCommandEntry(entry: CommandActionItem, rawQuery: string): number {
  const trimmed = rawQuery.trim()
  if (!trimmed) return entry.priority ?? 0

  const tokens = trimmed.split(/\s+/).filter(Boolean)
  const hayTitle = entry.title
  const haySymbol = entry.symbol ?? ''
  const haySubtitle = entry.subtitle ?? ''
  const hayKeywords = entry.keywords ?? ''
  const hayBadge = entry.badge ?? ''

  let totalScore = entry.priority ?? 0
  const lowerFullQuery = trimmed.toLowerCase()
  const cleanFullQuery = lowerFullQuery.replace(/^[<'"`(\s]+|[/>)'"`\s]+$/g, '')
  const lowerTitle = hayTitle.toLowerCase()
  const lowerExplicitSym = haySymbol.trim().toLowerCase()
  const primaryToken = extractPrimarySymbol(hayTitle, entry.symbol)

  if (lowerExplicitSym && cleanFullQuery && lowerExplicitSym === cleanFullQuery) {
    totalScore += 340
  } else if (
    lowerTitle === lowerFullQuery ||
    (cleanFullQuery.length > 0 && primaryToken === cleanFullQuery)
  ) {
    totalScore += 280
  } else if (
    (cleanFullQuery.length > 0 && primaryToken.startsWith(cleanFullQuery)) ||
    lowerTitle.startsWith(lowerFullQuery)
  ) {
    totalScore += 110 + Math.max(0, 24 - primaryToken.length)
  }

  for (const token of tokens) {
    const cleanTok = token.toLowerCase().replace(/^[<'"`]+|[/>)'"`]+$/g, '') || token.toLowerCase()
    const inSymbol = Boolean(haySymbol && matchKeywordWithPinyin(haySymbol, cleanTok))
    const inTitle = matchKeywordWithPinyin(hayTitle, token) || (cleanTok !== token.toLowerCase() && matchKeywordWithPinyin(hayTitle, cleanTok))
    const inKeywords = Boolean(hayKeywords && matchKeywordWithPinyin(hayKeywords, token))
    const inBadge = Boolean(hayBadge && matchKeywordWithPinyin(hayBadge, token))
    const inSubtitle = Boolean(haySubtitle && matchKeywordWithPinyin(haySubtitle, token))

    if (!inSymbol && !inTitle && !inKeywords && !inBadge && !inSubtitle) {
      return -1
    }

    if (primaryToken === cleanTok) {
      totalScore += 90
    } else if (primaryToken.startsWith(cleanTok)) {
      totalScore += 55
    } else if (inSymbol || inTitle) {
      totalScore += 35
    } else if (inKeywords) {
      totalScore += 22
    } else if (inSubtitle) {
      totalScore += 14
    } else {
      totalScore += 8
    }
  }

  return totalScore
}

export function highlightSubstring(text: string, query: string): React.ReactNode {
  const tokens = Array.from(
    new Set(
      query
        .trim()
        .split(/\s+/)
        .map((t) => t.toLowerCase())
        .filter(Boolean)
    )
  )
  if (tokens.length === 0) return text

  const lowerText = text.toLowerCase()
  const ranges: Array<[number, number]> = []

  for (const tok of tokens) {
    let from = 0
    while (from < lowerText.length) {
      const idx = lowerText.indexOf(tok, from)
      if (idx < 0) break
      ranges.push([idx, idx + tok.length])
      from = idx + tok.length
    }
  }

  if (ranges.length === 0) return text
  ranges.sort((a, b) => a[0] - b[0] || b[1] - a[1])

  const merged: Array<[number, number]> = []
  for (const [start, end] of ranges) {
    const last = merged[merged.length - 1]
    if (!last || start > last[1]) {
      merged.push([start, end])
    } else if (end > last[1]) {
      last[1] = end
    }
  }

  const nodes: React.ReactNode[] = []
  let cursor = 0
  merged.forEach(([start, end], idx) => {
    if (start > cursor) {
      nodes.push(text.slice(cursor, start))
    }
    nodes.push(
      <mark
        key={`hl_${idx}_${start}`}
        className="rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 font-semibold text-[var(--abc-primary)]"
      >
        {text.slice(start, end)}
      </mark>
    )
    cursor = end
  })
  if (cursor < text.length) {
    nodes.push(text.slice(cursor))
  }
  return <>{nodes}</>
}
