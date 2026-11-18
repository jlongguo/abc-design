import React, { useEffect, useMemo, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { ChevronDown, CornerDownLeft, Search, Sparkles, X } from 'lucide-react'
import { Tooltip } from '../../components/display/Overlays'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'
import { matchKeywordWithPinyin } from '../../utils/pinyin'
import type { CommandActionItem } from '../CommandPalette'
import { highlightSubstring, normalizeMenuKeywords, scoreCommandEntry } from '../commandPaletteUtils'
import type { AbcBrandInfo, AbcMenuItem, AbcSidebarTone } from '../types'
import { BrandLogoBlock } from './BrandLogoBlock'
import { CollapsedSidebarBranch } from './CollapsedSidebarBranch'
import {
  menuContainsPath,
  NAV_BTN_MOTION_CLASS,
  NAV_SIZE_METRICS,
  renderMenuIcon,
} from './shared'

function matchesMenuQuery(item: AbcMenuItem, rawQuery: string, ancestorText = ''): boolean {
  const tokens = rawQuery.trim().split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return true
  const haystack = [ancestorText, item.label, item.path ?? '', normalizeMenuKeywords(item.keywords)]
    .filter(Boolean)
    .join(' ')
  return tokens.every((tok) => matchKeywordWithPinyin(haystack, tok))
}

function filterMenuTree(
  items: AbcMenuItem[],
  rawQuery: string,
  ancestorText = ''
): AbcMenuItem[] {
  const trimmed = rawQuery.trim()
  if (!trimmed) return items
  const next: AbcMenuItem[] = []
  for (const item of items) {
    const selfMatched = matchesMenuQuery(item, trimmed, ancestorText)
    const nextAncestor = [ancestorText, item.label, normalizeMenuKeywords(item.keywords)]
      .filter(Boolean)
      .join(' ')
    if (item.children?.length) {
      const matchedChildren = filterMenuTree(item.children, trimmed, nextAncestor)
      if (matchedChildren.length > 0) {
        next.push({ ...item, children: matchedChildren })
      } else if (selfMatched) {
        next.push(item)
      }
    } else if (selfMatched) {
      next.push(item)
    }
  }
  return next
}

/** 经典侧边栏树形菜单渲染器（支持深浅双色、内联菜单/组件检索、四档尺寸与动效、折叠 Portal 悬浮子菜单与平滑网格手风琴展开） */
export const SidebarNav: React.FC<{
  brand?: AbcBrandInfo
  items: AbcMenuItem[]
  pathname: string
  collapsed?: boolean
  accordion?: boolean
  tone?: AbcSidebarTone
  size?: AbcSize
  motion?: AbcMotionPreset
  /** 是否在展开态侧边栏顶部渲染快捷筛选框（同时检索路由名、路径与 keywords 组件词） */
  searchable?: boolean
  searchPlaceholder?: string
  /** 可选注入全局组件/指令索引：在侧栏输入搜索词时直接展示匹配的组件直达列表，不再仅展示路由 */
  commandActions?: CommandActionItem[]
  /** 点击筛选区底部“全局定位 (⌘K)”时的回调（透传当前已输入的筛选词） */
  onOpenCommandPalette?: (prefillQuery?: string) => void
  onNavigate: (path: string, item: AbcMenuItem) => void
  className?: string
}> = ({
  brand,
  items,
  pathname,
  collapsed = false,
  accordion = true,
  tone = 'dark',
  size,
  motion,
  searchable = false,
  searchPlaceholder = '筛选分类或组件...',
  commandActions,
  onOpenCommandPalette,
  onNavigate,
  className,
}) => {
  const { iconRegistry } = useAbcConfig()
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const m = NAV_SIZE_METRICS[resolvedSize]
  const isDark = tone === 'dark'

  const [filterText, setFilterText] = useState('')
  const [openKeys, setOpenKeys] = useState<string[]>(() =>
    items.filter((it) => it.children?.length && menuContainsPath(it, pathname)).map((it) => it.key)
  )

  useEffect(() => {
    const matchedParents = items
      .filter((it) => it.children?.length && menuContainsPath(it, pathname))
      .map((it) => it.key)
    if (matchedParents.length > 0) {
      setOpenKeys((prev) =>
        accordion ? [matchedParents[0]] : Array.from(new Set([...prev, ...matchedParents]))
      )
    }
  }, [pathname, items, accordion])

  const filteredItems = useMemo(
    () => (searchable && !collapsed ? filterMenuTree(items, filterText) : items),
    [items, searchable, collapsed, filterText]
  )

  const isFiltering = searchable && !collapsed && filterText.trim().length > 0

  const matchedActions = useMemo(() => {
    if (!isFiltering || !commandActions || commandActions.length === 0) return []
    const scored: Array<{ entry: CommandActionItem; score: number }> = []
    for (const entry of commandActions) {
      const s = scoreCommandEntry(entry, filterText)
      if (s >= 0) scored.push({ entry, score: s })
    }
    scored.sort((a, b) => b.score - a.score)
    return scored.map((x) => x.entry)
  }, [isFiltering, commandActions, filterText])

  const toggleGroup = (key: string) => {
    setOpenKeys((prev) => {
      if (prev.includes(key)) return prev.filter((k) => k !== key)
      return accordion ? [key] : [...prev, key]
    })
  }

  return (
    <aside
      aria-label="侧边主导航"
      data-size={resolvedSize}
      data-motion={resolvedMotion}
      style={{
        width: collapsed ? 'var(--abc-sidebar-collapsed-w)' : 'var(--abc-sidebar-w)',
      }}
      className={cn(
        'flex h-full shrink-0 flex-col border-r transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)] select-none',
        isDark
          ? 'border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]'
          : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]',
        className
      )}
    >
      {brand && (
        <div
          className={cn(
            'flex h-[var(--abc-header-h)] z-10 shrink-0 items-center border-b',
            isDark ? 'border-[var(--abc-sidebar-dark-border)]' : 'border-[var(--abc-border)]'
          )}
        >
          <BrandLogoBlock
            brand={brand}
            collapsed={collapsed}
            tone={tone}
            size={resolvedSize}
            className="w-full"
          />
        </div>
      )}

      {searchable && !collapsed && (
        <div
          className={cn(
            'shrink-0 border-b px-2.5 py-2',
            isDark ? 'border-[var(--abc-sidebar-dark-border)]' : 'border-[var(--abc-border)]'
          )}
        >
          <div
            className={cn(
              'flex items-center gap-1.5 rounded-[var(--abc-radius-md)] border px-2.5 py-1.5 text-xs transition-colors',
              isDark
                ? 'border-slate-700/80 bg-white/6 text-slate-200 focus-within:border-[var(--abc-primary)]'
                : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/70 text-[var(--abc-fg)] focus-within:border-[var(--abc-primary)]'
            )}
          >
            <Search className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden="true" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (matchedActions[0]) {
                    e.preventDefault()
                    matchedActions[0].onTrigger()
                  } else if (filteredItems[0]) {
                    const firstLeaf = filteredItems[0].children?.[0] ?? filteredItems[0]
                    if (firstLeaf.path) {
                      e.preventDefault()
                      onNavigate(firstLeaf.path, firstLeaf)
                    }
                  }
                }
              }}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="w-full min-w-0 bg-transparent text-xs focus:outline-none placeholder:opacity-60"
            />
            {filterText && (
              <button
                type="button"
                aria-label="清空侧栏筛选"
                onClick={() => setFilterText('')}
                className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded opacity-65 hover:opacity-100 cursor-pointer"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
          {isFiltering && onOpenCommandPalette && (
            <button
              type="button"
              onClick={() => onOpenCommandPalette(filterText)}
              className={cn(
                'mt-1.5 flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2 py-1 text-[11px] font-medium transition-colors cursor-pointer',
                isDark
                  ? 'bg-white/8 text-sky-300 hover:bg-white/12'
                  : 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] hover:brightness-95'
              )}
            >
              <span className="inline-flex items-center gap-1 truncate">
                <Sparkles className="h-3 w-3 shrink-0" />
                <span>打开精准组件搜索</span>
              </span>
              <span className="font-mono text-[10px] opacity-80">⌘K</span>
            </button>
          )}
        </div>
      )}

      <nav className={cn('flex-1 overflow-y-auto', m.navPadding)}>
        {isFiltering && matchedActions.length > 0 && (
          <div
            role="region"
            aria-label="匹配组件直达"
            className={cn(
              'mb-2 rounded-[var(--abc-radius-md)] border p-1.5',
              isDark
                ? 'border-slate-700/80 bg-white/[0.04]'
                : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55'
            )}
          >
            <div className="mb-1 flex items-center justify-between px-1.5 py-0.5 text-[10px] font-semibold opacity-75">
              <span>匹配组件直达</span>
              <span className="font-mono">{matchedActions.length}</span>
            </div>
            <div className="space-y-0.5">
              {matchedActions.slice(0, 6).map((act) => {
                const [headLabel, tailLabel] = act.title.split(' — ')
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => act.onTrigger()}
                    className={cn(
                      'group flex w-full items-center justify-between gap-1.5 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left text-xs transition-colors cursor-pointer',
                      isDark
                        ? 'text-slate-200 hover:bg-white/10 hover:text-white'
                        : 'text-[var(--abc-fg)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)]'
                    )}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-mono text-[11px] font-semibold">
                        {highlightSubstring(headLabel || act.title, filterText)}
                      </div>
                      {tailLabel && (
                        <div className="truncate text-[10px] opacity-70">
                          {highlightSubstring(tailLabel, filterText)}
                        </div>
                      )}
                    </div>
                    <CornerDownLeft className="h-3 w-3 shrink-0 opacity-45 group-hover:opacity-100" />
                  </button>
                )
              })}
            </div>
            {matchedActions.length > 6 && onOpenCommandPalette && (
              <button
                type="button"
                onClick={() => onOpenCommandPalette(filterText)}
                className={cn(
                  'mt-1 w-full rounded-[var(--abc-radius-xs)] px-2 py-1 text-center text-[10px] font-medium cursor-pointer',
                  isDark
                    ? 'text-sky-300 hover:bg-white/8'
                    : 'text-[var(--abc-primary)] hover:bg-[var(--abc-bg-subtle)]'
                )}
              >
                查看全部 {matchedActions.length} 项匹配组件 (⌘K) →
              </button>
            )}
          </div>
        )}

        {filteredItems.length === 0 && matchedActions.length === 0 ? (
          <div className="px-3 py-8 text-center text-xs opacity-65">
            未找到与 “{filterText}” 匹配的分类或组件
          </div>
        ) : (
          filteredItems.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0)
            const activeSelf = item.path === pathname
            const activeBranch = menuContainsPath(item, pathname)
            const expanded = isFiltering || openKeys.includes(item.key)

            if (!hasChildren) {
              const btnNode = (
                <button
                  key={item.key}
                  type="button"
                  disabled={item.disabled}
                  aria-label={collapsed ? item.label : undefined}
                  onClick={() => item.path && onNavigate(item.path, item)}
                  className={cn(
                    'flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer',
                    NAV_BTN_MOTION_CLASS,
                    m.itemButton,
                    collapsed && cn('justify-center px-0', m.collapsedBtn),
                    activeSelf
                      ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                      : isDark
                        ? 'text-slate-300 hover:bg-white/8 hover:text-white'
                        : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]',
                    item.disabled && 'opacity-40 cursor-not-allowed'
                  )}
                >
                  {renderMenuIcon(item.icon, iconRegistry, collapsed ? m.collapsedIcon : m.itemIcon)}
                  {!collapsed && <span className="flex-1 truncate text-left">{item.label}</span>}
                  {!collapsed && item.badge !== undefined && (
                    <span className={cn('rounded-full bg-white/15 font-mono', m.badge)}>
                      {item.badge}
                    </span>
                  )}
                </button>
              )

              return collapsed ? (
                <Tooltip
                  key={item.key}
                  content={item.label}
                  placement="right"
                  motion={resolvedMotion}
                  className="flex w-full"
                >
                  {btnNode}
                </Tooltip>
              ) : (
                btnNode
              )
            }

            if (collapsed) {
              return (
                <CollapsedSidebarBranch
                  key={item.key}
                  item={item}
                  pathname={pathname}
                  isDark={isDark}
                  registry={iconRegistry}
                  size={resolvedSize}
                  motion={resolvedMotion}
                  onNavigate={onNavigate}
                />
              )
            }

            return (
              <div key={item.key} className="relative">
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => toggleGroup(item.key)}
                  className={cn(
                    'flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer',
                    NAV_BTN_MOTION_CLASS,
                    m.itemButton,
                    activeBranch
                      ? isDark
                        ? 'bg-white/10 text-white'
                        : 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                      : isDark
                        ? 'text-slate-300 hover:bg-white/8 hover:text-white'
                        : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  {renderMenuIcon(item.icon, iconRegistry, m.itemIcon)}
                  <span className="flex-1 truncate text-left">{item.label}</span>
                  {item.badge !== undefined && (
                    <span
                      className={cn(
                        'mr-1 rounded-full font-mono opacity-80',
                        m.badge,
                        isDark ? 'bg-white/10 text-slate-300' : 'bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]'
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown
                    data-open={expanded ? 'true' : 'false'}
                    className={cn('abc-chevron-disclosure shrink-0 opacity-70', m.chevron)}
                  />
                </button>

                {/* 展开态平滑网格高度过渡二级子菜单 */}
                <div
                  inert={!expanded}
                  className={cn(
                    'grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]',
                    expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <div
                      className={cn(
                        'border-l',
                        m.subWrap,
                        isDark ? 'border-slate-700/80' : 'border-[var(--abc-border)]'
                      )}
                    >
                      {item.children!.map((sub) => {
                        const subActive = sub.path === pathname
                        return (
                          <button
                            key={sub.key}
                            type="button"
                            disabled={sub.disabled}
                            onClick={() => sub.path && onNavigate(sub.path, sub)}
                            className={cn(
                              'flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer',
                              NAV_BTN_MOTION_CLASS,
                              m.subButton,
                              subActive
                                ? 'bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]'
                                : isDark
                                  ? 'text-slate-400 hover:bg-white/8 hover:text-white'
                                  : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]',
                              sub.disabled && 'opacity-40 cursor-not-allowed'
                            )}
                          >
                            {renderMenuIcon(sub.icon, iconRegistry, m.subIcon)}
                            <span className="flex-1 truncate">{sub.label}</span>
                            {sub.badge !== undefined && (
                              <span
                                className={cn(
                                  'rounded-full font-mono',
                                  m.badge,
                                  subActive
                                    ? 'bg-white/20'
                                    : 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                                )}
                              >
                                {sub.badge}
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </nav>
    </aside>
  )
}
