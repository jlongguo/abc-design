import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowDown, ArrowUp, Clock, CornerDownLeft, Search, Sparkles, Trash2, X } from 'lucide-react'
import Dialog from '../components/feedback/Dialog'
import Icon from '../components/icon/Icon'
import { Kbd } from '../components/typography/CopyableText'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import {
  MAX_RECENT_COUNT,
  flattenMenus,
  highlightSubstring,
  readRecentIds,
  saveRecentIds,
  scoreCommandEntry,
} from './commandPaletteUtils'
import type { AbcMenuItem } from './types'

export interface CommandActionItem {
  id: string
  title: string
  /** 可选精确组件或 API 符号名（如 'Select'、'JsonTreeViewer'），用于精确符号搜索置顶提权与侧栏直达展示 */
  symbol?: string
  group?: string
  subtitle?: string
  /** 右侧附加胶囊角标（如所属 npm 包名或 New 标记） */
  badge?: string
  icon?: string | React.ReactNode
  keywords?: string
  /** 基础排序权重微调（数值越大越靠前） */
  priority?: number
  onTrigger: () => void
}

export interface CommandPaletteProps {
  open: boolean
  onClose: () => void
  menuItems?: AbcMenuItem[]
  onNavigate?: (path: string, item: AbcMenuItem) => void
  extraActions?: CommandActionItem[]
  /** 搜索输入框占位提示文案 */
  placeholder?: string
  /** 打开面板时预填的初始搜索词（如从侧边栏筛选框一键升级至全局精准搜索时透传） */
  initialQuery?: string
}

/**
 * 企业级 Spotlight 全局指令、组件与菜单快速跳转中心
 * 支持 ⌘K / Ctrl+K 唤醒、多分词中文拼音首字母检索、精确前缀相关度排序、分组筛选与最近访问记忆
 */
export const CommandPalette: React.FC<CommandPaletteProps> = ({
  open,
  onClose,
  menuItems = [],
  onNavigate,
  extraActions = [],
  placeholder = '搜索菜单名称、组件符号、路由路径、快捷指令或拼音首字母（如 yhgl）...',
  initialQuery,
}) => {
  const { iconRegistry } = useAbcConfig()
  const [query, setQuery] = useState(initialQuery ?? '')
  const [activeGroup, setActiveGroup] = useState<string>('all')
  const [activeIndex, setActiveIndex] = useState(0)
  const [recentIds, setRecentIds] = useState<string[]>(() => readRecentIds())
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) {
      setQuery('')
      setActiveGroup('all')
      setActiveIndex(0)
    } else {
      setQuery(initialQuery ?? '')
      setRecentIds(readRecentIds())
    }
  }, [open, initialQuery])

  const allEntries = useMemo<CommandActionItem[]>(() => {
    const navEntries: CommandActionItem[] = flattenMenus(menuItems).map(
      ({ item, trail, inheritedKeywords }) => ({
        id: `nav_${item.key}`,
        title: item.label,
        subtitle: `${trail}${item.path ? ` · ${item.path}` : ''}`,
        group: '页面导航',
        icon: item.icon ?? 'file',
        keywords: inheritedKeywords,
        onTrigger: () => {
          if (item.path) onNavigate?.(item.path, item)
        },
      })
    )
    return [
      ...navEntries,
      ...extraActions.map((act) => ({
        ...act,
        group: act.group || '快捷指令',
      })),
    ]
  }, [menuItems, onNavigate, extraActions])

  const availableGroups = useMemo(() => {
    const set = new Set<string>()
    for (const item of allEntries) {
      if (item.group) set.add(item.group)
    }
    return Array.from(set)
  }, [allEntries])

  // 单趟计算全部候选项匹配得分，供分组计数与分组排序列表共享复用
  const scoredEntries = useMemo(() => {
    const trimmed = query.trim()
    return allEntries.map((entry) => ({
      entry,
      score: scoreCommandEntry(entry, trimmed),
    }))
  }, [allEntries, query])

  const groupHitCounts = useMemo(() => {
    const counts = new Map<string, number>()
    let total = 0
    for (const { entry, score } of scoredEntries) {
      if (score < 0) continue
      total += 1
      const g = entry.group || '其他'
      counts.set(g, (counts.get(g) ?? 0) + 1)
    }
    counts.set('__all__', total)
    return counts
  }, [scoredEntries])

  // 组装展示列表：无关键字且处于“全部”分类时置顶最近访问；有关键字时按匹配得分降序排列分组与条目
  const displaySections = useMemo(() => {
    const trimmed = query.trim()
    const scoredById = new Map(scoredEntries.map((item) => [item.entry.id, item]))

    if (activeGroup === '__recent__') {
      const recents = recentIds
        .map((id) => scoredById.get(id))
        .filter((x): x is { entry: CommandActionItem; score: number } => x !== undefined && x.score >= 0)
        .map((x) => x.entry)
      return recents.length > 0
        ? [{ groupName: '最近访问', isRecent: true, totalCount: recents.length, items: recents }]
        : []
    }

    const sections: Array<{
      groupName: string
      isRecent?: boolean
      topScore: number
      totalCount: number
      items: CommandActionItem[]
    }> = []

    const recentSet = new Set<string>()
    if (!trimmed && activeGroup === 'all' && recentIds.length > 0) {
      const recents = recentIds
        .map((id) => scoredById.get(id)?.entry)
        .filter((e): e is CommandActionItem => e !== undefined)
      if (recents.length > 0) {
        recents.forEach((r) => recentSet.add(r.id))
        sections.push({
          groupName: '最近访问',
          isRecent: true,
          topScore: 9999,
          totalCount: recents.length,
          items: recents,
        })
      }
    }

    const groupedMap = new Map<string, Array<{ entry: CommandActionItem; score: number }>>()
    for (const { entry, score } of scoredEntries) {
      if (score < 0 || recentSet.has(entry.id)) continue
      if (activeGroup !== 'all' && entry.group !== activeGroup) continue
      const g = entry.group || '其他'
      const arr = groupedMap.get(g) ?? []
      arr.push({ entry, score })
      groupedMap.set(g, arr)
    }

    const maxPerGroup = trimmed ? 60 : 30
    const dynamicSections: typeof sections = []
    for (const [groupName, scored] of groupedMap.entries()) {
      if (scored.length === 0) continue
      if (trimmed) {
        scored.sort((a, b) => b.score - a.score)
      }
      const topScore = scored.reduce((max, s) => Math.max(max, s.score), 0)
      dynamicSections.push({
        groupName,
        topScore,
        totalCount: scored.length,
        items: scored.slice(0, maxPerGroup).map((s) => s.entry),
      })
    }

    if (trimmed) {
      dynamicSections.sort((a, b) => b.topScore - a.topScore)
    }

    return [...sections, ...dynamicSections]
  }, [scoredEntries, query, activeGroup, recentIds])

  const flatMatched = useMemo(
    () => displaySections.flatMap((sec) => sec.items),
    [displaySections]
  )

  useEffect(() => {
    setActiveIndex(0)
  }, [query, activeGroup])

  useEffect(() => {
    if (!open || !listRef.current) return
    const activeEl = listRef.current.querySelector<HTMLElement>(`[data-cmd-idx="${activeIndex}"]`)
    activeEl?.scrollIntoView?.({ block: 'nearest' })
  }, [activeIndex, open])

  const triggerEntry = (entry?: CommandActionItem) => {
    if (!entry) return
    const nextRecents = [entry.id, ...recentIds.filter((id) => id !== entry.id)].slice(
      0,
      MAX_RECENT_COUNT
    )
    setRecentIds(nextRecents)
    saveRecentIds(nextRecents)
    entry.onTrigger()
    onClose()
  }

  const clearRecent = () => {
    setRecentIds([])
    saveRecentIds([])
    if (activeGroup === '__recent__') {
      setActiveGroup('all')
    }
  }

  const filterTabKeys = useMemo(() => {
    const base = ['all']
    if (recentIds.length > 0) base.push('__recent__')
    return [...base, ...availableGroups]
  }, [recentIds.length, availableGroups])

  let runningIndex = -1

  return (
    <Dialog
      open={open}
      onClose={onClose}
      width="min(720px, 92vw)"
      draggable={false}
      fullscreenable={false}
      className="rounded-[var(--abc-radius-xl)]"
    >
      <div
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setActiveIndex((i) => (flatMatched.length ? (i + 1) % flatMatched.length : 0))
          } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setActiveIndex((i) =>
              flatMatched.length ? (i - 1 + flatMatched.length) % flatMatched.length : 0
            )
          } else if (e.key === 'Tab') {
            e.preventDefault()
            const curTabIdx = filterTabKeys.indexOf(activeGroup)
            const delta = e.shiftKey ? -1 : 1
            const nextTab =
              filterTabKeys[(curTabIdx + delta + filterTabKeys.length) % filterTabKeys.length]
            if (nextTab) setActiveGroup(nextTab)
          } else if (e.key === 'Enter' && flatMatched[activeIndex]) {
            e.preventDefault()
            triggerEntry(flatMatched[activeIndex])
          }
        }}
        className="-mx-5 -my-4 flex flex-col"
      >
        {/* 顶部宽幅搜索输入栏 */}
        <div className="flex items-center gap-3 border-b border-[var(--abc-border)] px-5 py-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]">
            <Search className="h-4.5 w-4.5" />
          </div>
          <input
            ref={inputRef}
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent text-[15px] font-medium text-[var(--abc-fg)] placeholder:font-normal placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              aria-label="清空搜索词"
              onClick={() => {
                setQuery('')
                inputRef.current?.focus()
              }}
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          <Kbd className="shrink-0">ESC</Kbd>
        </div>

        {/* 分类胶囊筛选条 */}
        {availableGroups.length > 0 && (
          <div className="flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2">
            <div className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]">
              <button
                type="button"
                onClick={() => setActiveGroup('all')}
                className={cn(
                  'rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer',
                  activeGroup === 'all'
                    ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                    : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                )}
              >
                全部 ({query.trim() ? (groupHitCounts.get('__all__') ?? 0) : allEntries.length})
              </button>

              {recentIds.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveGroup('__recent__')}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer',
                    activeGroup === '__recent__'
                      ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                      : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  <Clock className="h-3 w-3" />
                  <span>最近访问</span>
                </button>
              )}

              {availableGroups.map((group) => {
                const count = groupHitCounts.get(group) ?? 0
                return (
                  <button
                    key={group}
                    type="button"
                    onClick={() => setActiveGroup(group)}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer',
                      activeGroup === group
                        ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                        : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                    )}
                  >
                    <span>{group}</span>
                    <span aria-hidden="true" className="font-mono text-[10px] opacity-75">
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            {recentIds.length > 0 && (
              <button
                type="button"
                onClick={clearRecent}
                className="inline-flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-danger)] cursor-pointer"
              >
                <Trash2 className="h-3 w-3" />
                <span>清空历史</span>
              </button>
            )}
          </div>
        )}

        {/* 结果列表主视口 */}
        <div ref={listRef} className="max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5">
          {flatMatched.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-14 text-center">
              <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-[var(--abc-fg)]">
                未找到与 “{query}” 匹配的组件、菜单或快捷指令
              </p>
              <p className="mt-1 text-xs text-[var(--abc-fg-muted)]">
                支持输入组件名（如 JsonTreeViewer、Drawer）、中文描述、URL 路径或拼音首字母
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {displaySections.map((section) => (
                <div key={section.groupName} className="space-y-1">
                  <div className="flex items-center justify-between px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[var(--abc-fg-muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      {section.isRecent && <Clock className="h-3 w-3 text-[var(--abc-primary)]" />}
                      <span>{section.groupName}</span>
                    </span>
                    <span className="font-mono text-[10px] opacity-75">{section.totalCount}</span>
                  </div>

                  {section.items.map((entry) => {
                    runningIndex += 1
                    const itemIndex = runningIndex
                    const isFocused = itemIndex === activeIndex

                    return (
                      <button
                        key={`${section.isRecent ? 'recent' : 'std'}_${entry.id}`}
                        type="button"
                        data-cmd-idx={itemIndex}
                        onMouseEnter={() => setActiveIndex(itemIndex)}
                        onClick={() => triggerEntry(entry)}
                        className={cn(
                          'group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer',
                          isFocused
                            ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                            : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]'
                        )}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className={cn(
                              'flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors',
                              isFocused
                                ? 'border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs'
                                : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]'
                            )}
                          >
                            {entry.icon ? (
                              typeof entry.icon === 'string' ? (
                                <Icon name={entry.icon} size={17} registry={iconRegistry} />
                              ) : (
                                <span className="inline-flex shrink-0">{entry.icon}</span>
                              )
                            ) : (
                              <Search className="h-4 w-4" />
                            )}
                          </div>

                          <div className="min-w-0">
                            <div
                              className={cn(
                                'truncate text-sm font-semibold',
                                isFocused ? 'text-[var(--abc-primary)]' : 'text-[var(--abc-fg)]'
                              )}
                            >
                              {highlightSubstring(entry.title, query)}
                            </div>
                            {entry.subtitle && (
                              <div className="mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]">
                                {highlightSubstring(entry.subtitle, query)}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          {entry.badge && (
                            <span
                              className={cn(
                                'hidden rounded border px-1.5 py-0.5 font-mono text-[10px] sm:inline-block',
                                isFocused
                                  ? 'border-[var(--abc-primary)]/25 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)]'
                                  : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)]'
                              )}
                            >
                              {entry.badge}
                            </span>
                          )}
                          {entry.group && (
                            <span
                              className={cn(
                                'rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium',
                                isFocused
                                  ? 'bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]'
                                  : 'bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]'
                              )}
                            >
                              {entry.group}
                            </span>
                          )}
                          {isFocused && (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]">
                              <CornerDownLeft className="h-3.5 w-3.5" />
                            </span>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 底部快捷键提示状态栏 */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 px-5 py-2.5 text-[11px] text-[var(--abc-fg-muted)] select-none">
          <div className="flex flex-wrap items-center gap-3.5">
            <span className="inline-flex items-center gap-1">
              <Kbd>
                <ArrowUp className="h-2.5 w-2.5" />
              </Kbd>
              <Kbd>
                <ArrowDown className="h-2.5 w-2.5" />
              </Kbd>
              <span>上下选择</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Kbd>↵</Kbd>
              <span>立即跳转</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Kbd>Tab</Kbd>
              <span>切换分类</span>
            </span>
          </div>
          <span className="font-mono">共 {flatMatched.length} 项结果</span>
        </div>
      </div>
    </Dialog>
  )
}

export default CommandPalette
