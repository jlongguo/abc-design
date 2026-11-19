import { useEffect, useMemo, useRef, useState } from 'react'
import { BookmarkPlus, Check, Lock, RefreshCw, X } from 'lucide-react'
import { Button } from '../components/button/Button'
import { Input } from '../components/form/Input'
import { cn } from '../utils/cn'

export interface SavedFilterViewItem<TFilter = any> {
  id: string
  name: string
  filter: TFilter
  builtIn?: boolean
  count?: number
}

export interface SavedFilterViewsProps<TFilter = any> {
  /** 受控视图列表 */
  views?: SavedFilterViewItem<TFilter>[]
  /** 非受控初始视图列表 */
  defaultViews?: SavedFilterViewItem<TFilter>[]
  /** 视图列表变更回调 */
  onViewsChange?: (views: SavedFilterViewItem<TFilter>[]) => void
  /** 当前激活视图 ID（受控） */
  activeViewId?: string
  /** 选中或新建激活视图回调 */
  onSelectView?: (view: SavedFilterViewItem<TFilter>) => void
  /** 当前业务筛选器状态 */
  currentFilter: TFilter
  /** 显式脏状态覆盖；省略时自动深度比对 currentFilter 与激活视图 */
  isDirty?: boolean
  /** 非空时自动将自定义视图持久化到 localStorage */
  storageKey?: string
  /** 另存为新视图回调 */
  onSaveAsView?: (name: string, filter: TFilter) => void
  /** 更新当前自定义视图回调 */
  onUpdateView?: (viewId: string, filter: TFilter) => void
  /** 删除自定义视图回调 */
  onDeleteView?: (viewId: string) => void
  /** 无障碍区域标签 */
  ariaLabel?: string
  className?: string
}

let savedViewSeq = 0
function nextSavedViewId(): string {
  savedViewSeq += 1
  return `view_${Date.now()}_${savedViewSeq}`
}

function cloneFilterValue<T>(val: T): T {
  if (val === null || val === undefined || typeof val !== 'object') return val
  try {
    if (typeof structuredClone === 'function') {
      return structuredClone(val)
    }
    return JSON.parse(JSON.stringify(val)) as T
  } catch {
    return Array.isArray(val) ? ([...val] as unknown as T) : ({ ...val } as T)
  }
}

function isDeepEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true
  if (a === null || b === null || a === undefined || b === undefined) return a === b
  if (typeof a !== typeof b) return false
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((item, idx) => isDeepEqual(item, b[idx]))
  }
  if (typeof a === 'object' && typeof b === 'object') {
    const objA = a as Record<string, unknown>
    const objB = b as Record<string, unknown>
    const keysA = Object.keys(objA).filter((k) => objA[k] !== undefined)
    const keysB = Object.keys(objB).filter((k) => objB[k] !== undefined)
    if (keysA.length !== keysB.length) return false
    return keysA.every((k) => Object.prototype.hasOwnProperty.call(objB, k) && isDeepEqual(objA[k], objB[k]))
  }
  return false
}

function readCustomViewsFromStorage<TFilter>(storageKey?: string): SavedFilterViewItem<TFilter>[] | null {
  const key = storageKey?.trim()
  if (!key || typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(key)
    if (raw === null) return null
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return null
    return parsed
      .filter(
        (item): item is SavedFilterViewItem<TFilter> =>
          Boolean(item && typeof item === 'object' && typeof item.id === 'string' && typeof item.name === 'string')
      )
      .map((item) => ({ ...item, builtIn: false }))
  } catch {
    return null
  }
}

function writeCustomViewsToStorage<TFilter>(storageKey: string | undefined, list: SavedFilterViewItem<TFilter>[]) {
  const key = storageKey?.trim()
  if (!key || typeof window === 'undefined') return
  try {
    const customOnly = list.filter((v) => !v.builtIn).map((v) => ({ ...v, builtIn: false }))
    window.localStorage.setItem(key, JSON.stringify(customOnly))
  } catch {
    // 忽略无痕模式或存储配额异常
  }
}

function mergeDefaultAndStoredViews<TFilter>(
  defaultViews: SavedFilterViewItem<TFilter>[] | undefined,
  storageKey: string | undefined
): SavedFilterViewItem<TFilter>[] {
  const base = defaultViews ?? []
  const stored = readCustomViewsFromStorage<TFilter>(storageKey)
  if (stored === null) return base
  const builtIns = base.filter((v) => v.builtIn)
  const builtInIds = new Set(builtIns.map((v) => v.id))
  return [...builtIns, ...stored.filter((v) => !builtInIds.has(v.id))]
}

/**
 * 常用筛选视图管理栏 (SavedFilterViews)
 * 支持内置锁定视图、自定义视图持久化（localStorage）、脏状态提示及内联另存为确认流。
 */
export function SavedFilterViews<TFilter = any>({
  views,
  defaultViews,
  onViewsChange,
  activeViewId,
  onSelectView,
  currentFilter,
  isDirty,
  storageKey,
  onSaveAsView,
  onUpdateView,
  onDeleteView,
  ariaLabel = '筛选视图',
  className,
}: SavedFilterViewsProps<TFilter>) {
  const isViewsControlled = views !== undefined
  const isActiveControlled = activeViewId !== undefined

  const [internalViews, setInternalViews] = useState<SavedFilterViewItem<TFilter>[]>(() =>
    mergeDefaultAndStoredViews(defaultViews, storageKey)
  )
  const [internalActiveId, setInternalActiveId] = useState<string | undefined>(
    () => (views ?? internalViews).find((v) => isDeepEqual(v.filter, currentFilter))?.id
  )

  const prevStorageKeyRef = useRef(storageKey)
  useEffect(() => {
    if (prevStorageKeyRef.current === storageKey) return
    prevStorageKeyRef.current = storageKey
    if (!isViewsControlled) {
      setInternalViews(mergeDefaultAndStoredViews(defaultViews, storageKey))
    }
  }, [storageKey, isViewsControlled, defaultViews])

  const [savingAs, setSavingAs] = useState(false)
  const [draftName, setDraftName] = useState('')

  const resolvedViews = views ?? internalViews
  const resolvedActiveId = isActiveControlled ? activeViewId : internalActiveId

  const activeView = useMemo(
    () => resolvedViews.find((v) => v.id === resolvedActiveId),
    [resolvedViews, resolvedActiveId]
  )

  const effectiveDirty = useMemo(() => {
    if (isDirty !== undefined) return isDirty
    if (!activeView) return false
    return !isDeepEqual(currentFilter, activeView.filter)
  }, [isDirty, activeView, currentFilter])

  const commitViews = (nextViews: SavedFilterViewItem<TFilter>[]) => {
    if (!isViewsControlled) {
      setInternalViews(nextViews)
    }
    writeCustomViewsToStorage(storageKey, nextViews)
    onViewsChange?.(nextViews)
  }

  const handleSelect = (view: SavedFilterViewItem<TFilter>) => {
    if (!isActiveControlled) {
      setInternalActiveId(view.id)
    }
    setSavingAs(false)
    onSelectView?.(view)
  }

  const handleUpdateCurrent = () => {
    if (!activeView || activeView.builtIn) return
    const snapshot = cloneFilterValue(currentFilter)
    const nextViews = resolvedViews.map((v) =>
      v.id === activeView.id ? { ...v, filter: snapshot } : v
    )
    commitViews(nextViews)
    onUpdateView?.(activeView.id, snapshot)
  }

  const handleDelete = (view: SavedFilterViewItem<TFilter>) => {
    if (view.builtIn) return
    const nextViews = resolvedViews.filter((v) => v.id !== view.id)
    commitViews(nextViews)
    if (!isActiveControlled && resolvedActiveId === view.id) {
      setInternalActiveId(undefined)
    }
    onDeleteView?.(view.id)
  }

  const confirmSaveAs = () => {
    const trimmed = draftName.trim()
    if (!trimmed) return
    const snapshot = cloneFilterValue(currentFilter)
    const created: SavedFilterViewItem<TFilter> = {
      id: nextSavedViewId(),
      name: trimmed,
      filter: snapshot,
      builtIn: false,
    }
    const nextViews = [...resolvedViews, created]
    commitViews(nextViews)
    if (!isActiveControlled) {
      setInternalActiveId(created.id)
    }
    setDraftName('')
    setSavingAs(false)
    onSaveAsView?.(trimmed, snapshot)
    onSelectView?.(created)
  }

  const cancelSaveAs = () => {
    setDraftName('')
    setSavingAs(false)
  }

  const canUpdateActive = Boolean(effectiveDirty && activeView && !activeView.builtIn)
  const showSaveAsTrigger = !savingAs && (effectiveDirty || !activeView)

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      data-slot="saved-filter-views"
      className={cn(
        'flex flex-wrap items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-2 text-xs',
        className
      )}
    >
      {/* 视图胶囊列表 */}
      <div role="tablist" aria-label="已保存筛选视图" className="flex flex-wrap items-center gap-1.5">
        {resolvedViews.map((view) => {
          const isActive = view.id === resolvedActiveId
          return (
            <div
              key={view.id}
              data-slot="saved-view-pill"
              data-active={isActive ? 'true' : 'false'}
              className={cn(
                'group inline-flex items-center rounded-full border transition-all',
                isActive
                  ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs'
                  : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)]'
              )}
            >
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelect(view)}
                className={cn(
                  'inline-flex cursor-pointer items-center gap-1.5 rounded-full py-1 text-xs font-medium outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                  view.builtIn ? 'px-2.5' : 'pl-2.5 pr-1.5',
                  isActive && 'font-semibold'
                )}
              >
                {view.builtIn && (
                  <Lock className="h-3 w-3 shrink-0 opacity-65" aria-hidden="true" />
                )}
                <span>{view.name}</span>
                {view.count !== undefined && (
                  <span
                    className={cn(
                      'rounded-full px-1.5 py-0.2 font-mono text-[10px] tabular-nums',
                      isActive
                        ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                        : 'bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]'
                    )}
                  >
                    {view.count}
                  </span>
                )}
                {isActive && effectiveDirty && (
                  <span
                    aria-hidden="true"
                    title="当前筛选已修改"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--abc-warning)]"
                  />
                )}
              </button>

              {!view.builtIn && (
                <button
                  type="button"
                  aria-label={`删除视图 ${view.name}`}
                  title="删除视图"
                  onClick={() => handleDelete(view)}
                  className={cn(
                    'mr-1 inline-flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors',
                    isActive
                      ? 'text-[var(--abc-primary)]/75 hover:bg-[var(--abc-primary)]/15 hover:text-[var(--abc-danger)]'
                      : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-danger-soft)] hover:text-[var(--abc-danger)]'
                  )}
                >
                  <X className="h-2.5 w-2.5" aria-hidden="true" />
                </button>
              )}
            </div>
          )
        })}
      </div>

      {/* 脏状态提示与更新/另存为操作 */}
      {(effectiveDirty || savingAs || showSaveAsTrigger) && (
        <div className="ml-auto flex flex-wrap items-center gap-1.5">
          {effectiveDirty && (
            <span
              role="status"
              data-slot="saved-views-dirty"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--abc-warning)]/35 bg-[var(--abc-warning-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-warning)] select-none"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[var(--abc-warning)]"
              />
              已修改
            </span>
          )}

          {canUpdateActive && (
            <Button
              type="button"
              variant="secondary"
              size="xs"
              icon={<RefreshCw className="h-3 w-3" aria-hidden="true" />}
              onClick={handleUpdateCurrent}
            >
              更新当前视图
            </Button>
          )}

          {showSaveAsTrigger && (
            <Button
              type="button"
              variant="outline"
              size="xs"
              icon={<BookmarkPlus className="h-3 w-3" aria-hidden="true" />}
              onClick={() => setSavingAs(true)}
            >
              另存为视图
            </Button>
          )}

          {savingAs && (
            <div
              role="group"
              aria-label="另存为新视图"
              className="inline-flex items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1"
            >
              <Input
                size="xs"
                autoFocus
                value={draftName}
                onChange={(e) => setDraftName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    confirmSaveAs()
                  } else if (e.key === 'Escape') {
                    e.preventDefault()
                    cancelSaveAs()
                  }
                }}
                placeholder="输入视图名称…"
                aria-label="新视图名称"
                className="w-36"
              />
              <Button
                type="button"
                variant="primary"
                size="xs"
                pressScale={false}
                disabled={!draftName.trim()}
                icon={<Check className="h-3 w-3" aria-hidden="true" />}
                onClick={confirmSaveAs}
              >
                保存
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="xs"
                pressScale={false}
                onClick={cancelSaveAs}
              >
                取消
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

SavedFilterViews.displayName = 'SavedFilterViews'
