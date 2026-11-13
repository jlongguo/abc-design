import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowDown, ArrowUp, Clock, CornerDownLeft, Search, Sparkles, Trash2, X } from 'lucide-react'
import Dialog from '../components/feedback/Dialog'
import Icon from '../components/icon/Icon'
import { Kbd } from '../components/typography/CopyableText'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import { matchKeywordWithPinyin } from '../utils/pinyin'
import type { AbcMenuItem } from './types'

export interface CommandActionItem {
  id: string
  title: string
  group?: string
  subtitle?: string
  icon?: string | React.ReactNode
  keywords?: string
  onTrigger: () => void
}

export interface CommandPaletteProps {
  open: boolean
  onClose: () => void
  menuItems?: AbcMenuItem[]
  onNavigate?: (path: string, item: AbcMenuItem) => void
  extraActions?: CommandActionItem[]
}

const RECENT_STORAGE_KEY = 'abc_cmd_recent_v1'
const MAX_RECENT_COUNT = 5

function readRecentIds(): string[] {
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

function saveRecentIds(ids: string[]) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(ids.slice(0, MAX_RECENT_COUNT)))
  } catch {
    // 忽略隐私存储限制
  }
}

function flattenMenus(
  items: AbcMenuItem[],
  parents: string[] = []
): Array<{ item: AbcMenuItem; trail: string }> {
  const result: Array<{ item: AbcMenuItem; trail: string }> = []
  for (const item of items) {
    const currentTrail = [...parents, item.label]
    if (item.path && (!item.children || item.children.length === 0)) {
      result.push({ item, trail: currentTrail.join(' / ') })
    }
    if (item.children?.length) {
      result.push(...flattenMenus(item.children, currentTrail))
    }
  }
  return result
}

function highlightSubstring(text: string, query: string): React.ReactNode {
  const q = query.trim()
  if (!q) return text
  const lowerText = text.toLowerCase()
  const lowerQ = q.toLowerCase()
  const hitIdx = lowerText.indexOf(lowerQ)
  if (hitIdx < 0) return text
  const before = text.slice(0, hitIdx)
  const mid = text.slice(hitIdx, hitIdx + q.length)
  const after = text.slice(hitIdx + q.length)
  return (
    <>
      {before}
      <mark className="rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold">
        {mid}
      </mark>
      {after}
    </>
  )
}

/**
 * 企业级 Spotlight 全局指令与菜单快速跳转中心（支持 ⌘K / Ctrl+K 唤醒、中文拼音首字母检索、分组筛选与最近访问记忆）
 */
export const CommandPalette: React.FC<CommandPaletteProps> = ({
  open,
  onClose,
  menuItems = [],
  onNavigate,
  extraActions = [],
}) => {
  const { iconRegistry } = useAbcConfig()
  const [query, setQuery] = useState('')
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
      setRecentIds(readRecentIds())
    }
  }, [open])

  const allEntries = useMemo<CommandActionItem[]>(() => {
    const navEntries: CommandActionItem[] = flattenMenus(menuItems).map(({ item, trail }) => ({
      id: `nav_${item.key}`,
      title: item.label,
      subtitle: `${trail}${item.path ? ` · ${item.path}` : ''}`,
      group: '页面导航',
      icon: item.icon ?? 'file',
      keywords: item.path,
      onTrigger: () => {
        if (item.path) onNavigate?.(item.path, item)
      },
    }))
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

  // 组装展示列表：无关键字且处于“全部”分类时，将最近访问置顶为独立分组
  const displaySections = useMemo(() => {
    const trimmed = query.trim()
    const filterFn = (entry: CommandActionItem) => {
      if (activeGroup !== 'all' && activeGroup !== '__recent__' && entry.group !== activeGroup) {
        return false
      }
      if (!trimmed) return true
      return (
        matchKeywordWithPinyin(entry.title, trimmed) ||
        Boolean(entry.subtitle && matchKeywordWithPinyin(entry.subtitle, trimmed)) ||
        Boolean(entry.keywords && matchKeywordWithPinyin(entry.keywords, trimmed))
      )
    }

    const sections: Array<{ groupName: string; isRecent?: boolean; items: CommandActionItem[] }> = []

    if (activeGroup === '__recent__') {
      const recents = recentIds
        .map((id) => allEntries.find((e) => e.id === id))
        .filter((e): e is CommandActionItem => e !== undefined && filterFn(e))
      if (recents.length > 0) {
        sections.push({ groupName: '最近访问', isRecent: true, items: recents })
      }
      return sections
    }

    const recentSet = new Set<string>()
    if (!trimmed && activeGroup === 'all' && recentIds.length > 0) {
      const recents = recentIds
        .map((id) => allEntries.find((e) => e.id === id))
        .filter((e): e is CommandActionItem => e !== undefined)
      if (recents.length > 0) {
        recents.forEach((r) => recentSet.add(r.id))
        sections.push({ groupName: '最近访问', isRecent: true, items: recents })
      }
    }

    const groupedMap = new Map<string, CommandActionItem[]>()
    for (const entry of allEntries) {
      if (recentSet.has(entry.id)) continue
      if (!filterFn(entry)) continue
      const g = entry.group || '其他'
      const arr = groupedMap.get(g) ?? []
      arr.push(entry)
      groupedMap.set(g, arr)
    }

    for (const [groupName, items] of groupedMap.entries()) {
      if (items.length > 0) {
        sections.push({ groupName, items })
      }
    }

    return sections
  }, [allEntries, query, activeGroup, recentIds])

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
            placeholder="搜索菜单名称、路由路径、快捷指令或输入拼音首字母（如 yhgl）..."
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
                全部 ({allEntries.length})
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

              {availableGroups.map((group) => (
                <button
                  key={group}
                  type="button"
                  onClick={() => setActiveGroup(group)}
                  className={cn(
                    'rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer',
                    activeGroup === group
                      ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                      : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  {group}
                </button>
              ))}
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
                未找到与 “{query}” 匹配的菜单或快捷指令
              </p>
              <p className="mt-1 text-xs text-[var(--abc-fg-muted)]">
                支持直接输入中文名称、URL 路径片段或拼音首字母（例如：yhgl、ddgl）
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
                    <span className="font-mono text-[10px] opacity-75">{section.items.length}</span>
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
          <span className="font-mono">
            共 {flatMatched.length} 项结果
          </span>
        </div>
      </div>
    </Dialog>
  )
}

export default CommandPalette
