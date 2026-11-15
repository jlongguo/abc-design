/**
 * Pro 全局命令中枢与实体直达面板 (ProCommandPalette / CommandTriggerButton)
 * 零外部重依赖实现：
 * - 基于 Top-Layer 原生 Dialog 与 @abc-design/core 拼音首字母匹配引擎；
 * - 支持 Cmd+K / Ctrl+K 全局快捷键绑定、受控与非受控模式；
 * - 支持前缀实体智能精准定位 (entityMatchers，如 job_xxx / org_xxx / prj_xxx)；
 * - 支持多分组页面导航与系统偏好快捷动作，完整支持键盘上下键选择与回车执行。
 */
import { CornerDownLeft, Search } from 'lucide-react'
import * as React from 'react'
import { Dialog } from '../components/feedback/Dialog'
import { cn } from '../utils/cn'
import { matchKeywordWithPinyin } from '../utils/pinyin'

export type ProCommandEntityTone = 'blue' | 'emerald' | 'purple' | 'amber'

export interface ProCommandEntityMatcher {
  /** 匹配规则唯一标识 */
  id: string
  /** 前缀匹配规则（例如 "job_" / "org_"） */
  prefix?: string
  /** 自定义匹配谓词（存在时覆盖 prefix） */
  match?: (trimmedQuery: string) => boolean
  /** 左侧图标 */
  icon?: React.ReactNode
  /** 高亮标签前缀文案 */
  labelPrefix?: string
  /** 自定义高亮渲染函数 */
  renderLabel?: (trimmedQuery: string) => React.ReactNode
  /** 高亮色调 */
  tone?: ProCommandEntityTone
  /** 命中回车或点击时的回调 */
  onSelect: (trimmedQuery: string) => void
}

export interface ProCommandPageItem {
  id?: string
  to: string
  label: string
  group?: string
  icon?: React.ReactNode
  keywords?: string
  onSelect?: () => void
}

export interface ProCommandActionItem {
  id: string
  label: string
  group?: string
  icon?: React.ReactNode
  keywords?: string
  danger?: boolean
  onSelect: () => void
}

export interface ProCommandPaletteLabels {
  dialogLabel?: string
  searchPlaceholder?: string
  emptyText?: string
  entityGroupHeading?: string
  pagesGroupHeading?: string
  actionsGroupHeading?: string
  navigateHint?: string
  openHint?: string
  footerBrand?: string
  enterKeyLabel?: string
}

export interface ProCommandPaletteProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  /** 是否注册全局 Cmd+K / Ctrl+K 快捷键（默认 true） */
  enableShortcut?: boolean
  /** 实体 ID 直达规则集合 */
  entityMatchers?: ProCommandEntityMatcher[]
  /** 页面导航候选项 */
  pages?: ProCommandPageItem[]
  /** 选中页面时的默认导航处理 */
  onNavigate?: (to: string, page: ProCommandPageItem) => void
  /** 系统快捷动作列表 */
  actions?: ProCommandActionItem[]
  /** 多语言与文案定制 */
  labels?: ProCommandPaletteLabels
  /** 可选外部同步搜索词 */
  searchQuery?: string
  onSearchQueryChange?: (query: string) => void
}

const DEFAULT_LABELS: Required<ProCommandPaletteLabels> = {
  dialogLabel: '全局命令面板',
  searchPlaceholder: '搜索页面，或输入实体 ID (如 job_ / org_)…',
  emptyText: '未找到匹配的页面或快捷操作。',
  entityGroupHeading: '实体智能精准定位',
  pagesGroupHeading: '后台功能模块直达',
  actionsGroupHeading: '常用系统偏好与操作',
  navigateHint: '选择',
  openHint: '打开',
  footerBrand: 'ABC Design Command',
  enterKeyLabel: 'Enter ↵',
}

const TONE_BADGE_CLASSES: Record<ProCommandEntityTone, string> = {
  blue: 'bg-blue-500/15 text-blue-500 dark:text-blue-300',
  emerald: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300',
  purple: 'bg-purple-500/15 text-purple-600 dark:text-purple-300',
  amber: 'bg-amber-500/15 text-amber-600 dark:text-amber-300',
}

interface FlattenedCommandOption {
  key: string
  trigger: () => void
}

export function ProCommandPalette({
  open: controlledOpen,
  onOpenChange,
  enableShortcut = true,
  entityMatchers = [],
  pages = [],
  onNavigate,
  actions = [],
  labels,
  searchQuery: controlledSearch,
  onSearchQueryChange,
}: ProCommandPaletteProps) {
  const mergedLabels = { ...DEFAULT_LABELS, ...labels }
  const [internalOpen, setInternalOpen] = React.useState(false)
  const [internalSearch, setInternalSearch] = React.useState('')
  const [activeIndex, setActiveIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([])

  const isControlled = typeof controlledOpen === 'boolean'
  const isOpen = isControlled ? controlledOpen : internalOpen

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next)
      onOpenChange?.(next)
    },
    [isControlled, onOpenChange]
  )

  const search = controlledSearch !== undefined ? controlledSearch : internalSearch
  const setSearch = React.useCallback(
    (next: string) => {
      if (controlledSearch === undefined) setInternalSearch(next)
      onSearchQueryChange?.(next)
    },
    [controlledSearch, onSearchQueryChange]
  )

  // 全局 Cmd+K / Ctrl+K 快捷键调度
  React.useEffect(() => {
    if (!enableShortcut || typeof window === 'undefined') return
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen(!isOpen)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [enableShortcut, isOpen, setOpen])

  React.useEffect(() => {
    if (!isOpen) return
    setActiveIndex(0)
    const timer = setTimeout(() => {
      inputRef.current?.focus()
    }, 10)
    return () => clearTimeout(timer)
  }, [isOpen])

  const trimmedSearch = search.trim()

  const matchedEntities = React.useMemo(() => {
    if (!trimmedSearch) return []
    return entityMatchers.filter((matcher) => {
      if (matcher.match) return matcher.match(trimmedSearch)
      if (matcher.prefix) return trimmedSearch.startsWith(matcher.prefix)
      return false
    })
  }, [entityMatchers, trimmedSearch])

  const filteredPages = React.useMemo(() => {
    if (!trimmedSearch) return pages
    return pages.filter((p) =>
      matchKeywordWithPinyin(`${p.label} ${p.group ?? ''} ${p.to} ${p.keywords ?? ''}`, trimmedSearch)
    )
  }, [pages, trimmedSearch])

  const filteredActions = React.useMemo(() => {
    if (!trimmedSearch) return actions
    return actions.filter((a) =>
      matchKeywordWithPinyin(`${a.label} ${a.group ?? ''} ${a.keywords ?? ''}`, trimmedSearch)
    )
  }, [actions, trimmedSearch])

  const runCommand = React.useCallback(
    (action: () => void) => {
      setOpen(false)
      setSearch('')
      action()
    },
    [setOpen, setSearch]
  )

  // 扁平化可见候选项索引以统一支持键盘上下切换
  const flatOptions = React.useMemo<FlattenedCommandOption[]>(() => {
    const list: FlattenedCommandOption[] = []
    for (const matcher of matchedEntities) {
      list.push({
        key: `entity-${matcher.id}-${trimmedSearch}`,
        trigger: () => runCommand(() => matcher.onSelect(trimmedSearch)),
      })
    }
    for (const page of filteredPages) {
      list.push({
        key: `page-${page.id ?? page.to}`,
        trigger: () =>
          runCommand(() => {
            if (page.onSelect) page.onSelect()
            else onNavigate?.(page.to, page)
          }),
      })
    }
    for (const action of filteredActions) {
      list.push({
        key: `action-${action.id}`,
        trigger: () => runCommand(action.onSelect),
      })
    }
    return list
  }, [matchedEntities, filteredPages, filteredActions, trimmedSearch, runCommand, onNavigate])

  React.useEffect(() => {
    setActiveIndex(0)
  }, [trimmedSearch])

  React.useEffect(() => {
    const el = itemRefs.current[activeIndex]
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIndex])

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (flatOptions.length > 0) {
        setActiveIndex((prev) => (prev + 1) % flatOptions.length)
      }
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (flatOptions.length > 0) {
        setActiveIndex((prev) => (prev - 1 + flatOptions.length) % flatOptions.length)
      }
      return
    }
    if (e.key === 'Enter') {
      const target = flatOptions[activeIndex]
      if (target) {
        e.preventDefault()
        target.trigger()
      }
    }
  }

  let cursor = 0

  return (
    <Dialog
      open={isOpen}
      onClose={() => setOpen(false)}
      closable={false}
      draggable={false}
      fullscreenable={false}
      width="min(680px, 92vw)"
      aria-label={mergedLabels.dialogLabel}
      className="overflow-hidden [&>[data-dialog-body]]:p-0"
    >
      <div
        data-slot="pro-command-palette"
        className="flex flex-col bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)]"
      >
        {/* 顶部搜索栏 */}
        <div className="flex items-center border-b border-[var(--abc-border)] px-4">
          <Search className="mr-2.5 h-4 w-4 shrink-0 text-[var(--abc-fg-muted)]" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder={mergedLabels.searchPlaceholder}
            aria-label={mergedLabels.searchPlaceholder}
            className="h-12 w-full bg-transparent text-sm text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
          />
          <kbd className="hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] sm:inline-block">
            ESC
          </kbd>
        </div>

        {/* 候选列表区 */}
        <div role="listbox" className="max-h-96 space-y-2 overflow-y-auto p-2">
          {flatOptions.length === 0 ? (
            <div className="py-8 text-center text-xs text-[var(--abc-fg-muted)]">
              {mergedLabels.emptyText}
            </div>
          ) : (
            <>
              {/* 1. 实体直达匹配组 */}
              {matchedEntities.length > 0 && (
                <div>
                  <div className="px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-primary)]">
                    {mergedLabels.entityGroupHeading}
                  </div>
                  <div className="space-y-0.5">
                    {matchedEntities.map((matcher) => {
                      const idx = cursor++
                      const selected = idx === activeIndex
                      const toneClass = TONE_BADGE_CLASSES[matcher.tone ?? 'blue']
                      return (
                        <button
                          key={`entity-${matcher.id}`}
                          ref={(el) => {
                            itemRefs.current[idx] = el
                          }}
                          type="button"
                          role="option"
                          aria-selected={selected}
                          data-selected={selected ? 'true' : undefined}
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => runCommand(() => matcher.onSelect(trimmedSearch))}
                          className={cn(
                            'flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors',
                            selected
                              ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                              : 'text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]'
                          )}
                        >
                          {matcher.icon && <span className="shrink-0">{matcher.icon}</span>}
                          <span className="flex-1 truncate font-mono">
                            {matcher.renderLabel ? (
                              matcher.renderLabel(trimmedSearch)
                            ) : (
                              <>
                                {matcher.labelPrefix ? `${matcher.labelPrefix} ` : ''}
                                <strong className="font-semibold">{trimmedSearch}</strong>
                              </>
                            )}
                          </span>
                          <span className={cn('rounded px-1.5 py-0.5 text-[10px] font-mono', toneClass)}>
                            {mergedLabels.enterKeyLabel}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* 2. 页面模块直达组 */}
              {filteredPages.length > 0 && (
                <div>
                  <div className="px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]">
                    {mergedLabels.pagesGroupHeading}
                  </div>
                  <div className="space-y-0.5">
                    {filteredPages.map((page) => {
                      const idx = cursor++
                      const selected = idx === activeIndex
                      return (
                        <button
                          key={`page-${page.id ?? page.to}`}
                          ref={(el) => {
                            itemRefs.current[idx] = el
                          }}
                          type="button"
                          role="option"
                          aria-selected={selected}
                          data-selected={selected ? 'true' : undefined}
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() =>
                            runCommand(() => {
                              if (page.onSelect) page.onSelect()
                              else onNavigate?.(page.to, page)
                            })
                          }
                          className={cn(
                            'flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors',
                            selected
                              ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                              : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                          )}
                        >
                          {page.icon && (
                            <span className="shrink-0 text-[var(--abc-fg-muted)]">{page.icon}</span>
                          )}
                          <span className="flex-1 truncate">{page.label}</span>
                          {page.group && (
                            <span className="shrink-0 text-[10px] text-[var(--abc-fg-muted)]">
                              {page.group}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* 3. 系统快捷动作组 */}
              {filteredActions.length > 0 && (
                <div>
                  <div className="px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]">
                    {mergedLabels.actionsGroupHeading}
                  </div>
                  <div className="space-y-0.5">
                    {filteredActions.map((action) => {
                      const idx = cursor++
                      const selected = idx === activeIndex
                      return (
                        <button
                          key={`action-${action.id}`}
                          ref={(el) => {
                            itemRefs.current[idx] = el
                          }}
                          type="button"
                          role="option"
                          aria-selected={selected}
                          data-selected={selected ? 'true' : undefined}
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => runCommand(action.onSelect)}
                          className={cn(
                            'flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors',
                            action.danger
                              ? selected
                                ? 'bg-red-500/15 text-[var(--abc-danger)]'
                                : 'text-[var(--abc-danger)] hover:bg-red-500/10'
                              : selected
                                ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                                : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                          )}
                        >
                          {action.icon && <span className="shrink-0">{action.icon}</span>}
                          <span className="flex-1 truncate">{action.label}</span>
                          {selected && (
                            <CornerDownLeft className="h-3.5 w-3.5 shrink-0 opacity-70" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* 底部快捷键提示栏 */}
        <div className="flex items-center justify-between border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-4 py-2 text-[11px] text-[var(--abc-fg-muted)]">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono">
                ↑
              </kbd>{' '}
              <kbd className="rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono">
                ↓
              </kbd>{' '}
              {mergedLabels.navigateHint}
            </span>
            <span>
              <kbd className="rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono">
                ↵
              </kbd>{' '}
              {mergedLabels.openHint}
            </span>
          </div>
          <span>{mergedLabels.footerBrand}</span>
        </div>
      </div>
    </Dialog>
  )
}

export interface CommandTriggerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  placeholder?: string
  mobilePlaceholder?: string
  ariaLabel?: string
}

/**
 * 放置在顶部 Header 栏的全局命令唤醒按钮
 */
export function CommandTriggerButton({
  onClick,
  placeholder = '快速搜索页面、实体 ID…',
  mobilePlaceholder = '搜索…',
  ariaLabel = '打开全局命令面板',
  className,
  ...props
}: CommandTriggerButtonProps) {
  const isMac =
    typeof navigator !== 'undefined' && /mac|iphone|ipad|ipod/i.test(navigator.userAgent)

  return (
    <button
      type="button"
      data-slot="command-trigger-button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'group inline-flex h-8.5 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs text-[var(--abc-fg-muted)] shadow-2xs transition cursor-pointer',
        'hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]',
        className
      )}
      {...props}
    >
      <Search className="h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)]" aria-hidden="true" />
      <span className="hidden sm:inline">{placeholder}</span>
      <span className="sm:hidden">{mobilePlaceholder}</span>
      <kbd className="ml-1 hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)] sm:inline-block">
        {isMac ? '⌘K' : 'Ctrl+K'}
      </kbd>
    </button>
  )
}

export default ProCommandPalette
