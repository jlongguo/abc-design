import type { AbcMotionPreset } from '@abc-design/tokens'
import {
GripVertical,
Pin,
RotateCcw,
Search,
Settings2,
X
} from 'lucide-react'
import { useEffect,useMemo,useRef,useState } from 'react'
import Button from '../../components/button/Button'
import { Popover,Tooltip } from '../../components/display/Overlays'
import { Checkbox } from '../../components/form/Controls'
import { type AbcColumn } from '../../components/table/TableCore'
import { useAbcMotion } from '../../hooks'
import type { AbcTablePersistedSettings } from '../../hooks/useTableSettings'
import { cn } from '../../utils/cn'

export interface ProColumnSettingsPopoverProps<T = Record<string, any>> {
  columns: AbcColumn<T>[]
  searchableFieldNames: Set<string>
  settings: AbcTablePersistedSettings
  hasActionColumn?: boolean
  defaultActionWidth?: number
  motion?: AbcMotionPreset
  onToggleVisible: (key: string) => void
  onSetAllVisible: (allKeys: string[], visible: boolean) => void
  onSetFixed: (key: string, fixed: 'left' | 'right' | null | undefined) => void
  onSetWidth: (key: string, width: number) => void
  onSetOrder: (order: string[]) => void
  onSetSearchVisible: (key: string, visible: boolean) => void
  onReset: () => void
}

export function ProColumnSettingsPopover<T = Record<string, any>>({
  columns,
  searchableFieldNames,
  settings,
  hasActionColumn,
  defaultActionWidth = 184,
  motion,
  onToggleVisible,
  onSetAllVisible,
  onSetFixed,
  onSetWidth,
  onSetOrder,
  onSetSearchVisible,
  onReset,
}: ProColumnSettingsPopoverProps<T>) {
  const resolvedMotion = useAbcMotion(motion)
  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [tab, setTab] = useState<'all' | 'fixed' | 'hidden'>('all')
  const [dragKey, setDragKey] = useState<string | null>(null)
  const preDragOrderRef = useRef<string[] | null>(null)
  const hasLiveSwappedRef = useRef(false)

  useEffect(() => {
    if (!dragKey) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const origOrder = preDragOrderRef.current
        setDragKey(null)
        preDragOrderRef.current = null
        hasLiveSwappedRef.current = false
        if (origOrder) {
          onSetOrder(origOrder)
        }
      }
    }
    document.addEventListener('keydown', onKeyDown, true)
    return () => document.removeEventListener('keydown', onKeyDown, true)
  }, [dragKey, onSetOrder])

  const configurableCols = useMemo(
    () =>
      columns.filter(
        (c) =>
          !c.hideInTable &&
          c.key !== '__abc_actions__' &&
          c.key !== '__actions__' &&
          c.key !== '__drag_handle__'
      ),
    [columns]
  )

  const orderedCols = useMemo(() => {
    if (settings.columnOrder.length === 0) return configurableCols
    return [...configurableCols].sort((a, b) => {
      const ia = settings.columnOrder.indexOf(a.key)
      const ib = settings.columnOrder.indexOf(b.key)
      if (ia === -1 && ib === -1) return 0
      if (ia === -1) return 1
      if (ib === -1) return -1
      return ia - ib
    })
  }, [configurableCols, settings.columnOrder])

  const getEffectiveFixed = (col: AbcColumn<T>): 'left' | 'right' | undefined => {
    if (col.key in settings.columnFixed) {
      return settings.columnFixed[col.key] ?? undefined
    }
    return col.fixed
  }

  const filteredCols = useMemo(() => {
    const q = keyword.trim().toLowerCase()
    return orderedCols.filter((col) => {
      if (q && !col.title.toLowerCase().includes(q) && !col.key.toLowerCase().includes(q)) {
        return false
      }
      const isHidden = settings.hiddenKeys.includes(col.key)
      const fx = getEffectiveFixed(col)
      if (tab === 'fixed') return Boolean(fx)
      if (tab === 'hidden') return isHidden
      return true
    })
  }, [orderedCols, keyword, tab, settings.hiddenKeys, settings.columnFixed])

  const allKeys = useMemo(() => configurableCols.map((c) => c.key), [configurableCols])
  const actionCol = useMemo(
    () => columns.find((c) => c.key === '__abc_actions__'),
    [columns]
  )
  const showActionWidthControl = Boolean(hasActionColumn || actionCol)
  const actionWidthVal =
    settings.columnWidths['__abc_actions__'] ??
    (typeof actionCol?.width === 'number' ? actionCol.width : undefined) ??
    defaultActionWidth

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      placement="bottomRight"
      motion={resolvedMotion}
      panelClassName="w-[356px] overflow-hidden p-0"
      content={
        <div className="text-xs select-none">
          {/* 顶部栏 */}
          <div className="flex items-center justify-between border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3.5 py-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[var(--abc-fg)]">列设置与偏好</span>
              <span className="rounded bg-[var(--abc-bg-subtle)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]">
                {configurableCols.length} 列
              </span>
            </div>
            <Button
              variant="secondary"
              size="xs"
              icon={<RotateCcw className="h-3 w-3" />}
              onClick={onReset}
            >
              重置
            </Button>
          </div>

          {/* 检索与快捷分类 */}
          <div className="space-y-2 border-b border-[var(--abc-border)] p-3">
            <div className="relative">
              <Search className="pointer-events-none absolute inset-y-0 left-2.5 my-auto h-3.5 w-3.5 text-[var(--abc-fg-placeholder)]" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="搜索列名称或字段标识..."
                className="h-7 w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] pr-7 pl-8 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none"
              />
              {keyword && (
                <button
                  type="button"
                  aria-label="清空列搜索"
                  onClick={() => setKeyword('')}
                  className="absolute inset-y-0 right-2 my-auto flex items-center text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px]">
              <div className="inline-flex items-center gap-0.5 rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] p-0.5">
                {[
                  { key: 'all', label: '全部' },
                  { key: 'fixed', label: '已固定' },
                  { key: 'hidden', label: '已隐藏' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setTab(item.key as 'all' | 'fixed' | 'hidden')}
                    className={cn(
                      'rounded-[var(--abc-radius-xs)] px-2 py-0.5 transition-colors cursor-pointer',
                      tab === item.key
                        ? 'bg-[var(--abc-bg-surface)] font-medium text-[var(--abc-primary)] shadow-2xs'
                        : 'text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onSetAllVisible(allKeys, true)}
                  className="text-[var(--abc-primary)] hover:underline cursor-pointer"
                >
                  全显
                </button>
                <span className="text-[var(--abc-border-strong)]">|</span>
                <button
                  type="button"
                  onClick={() => onSetAllVisible(allKeys, false)}
                  className="text-[var(--abc-fg-muted)] hover:text-[var(--abc-danger)] cursor-pointer"
                >
                  全隐
                </button>
              </div>
            </div>
          </div>

          {/* 可拖拽列清单 */}
          <div className="max-h-72 space-y-1 overflow-y-auto p-2">
            {filteredCols.length === 0 ? (
              <div className="py-6 text-center text-xs text-[var(--abc-fg-muted)]">
                未匹配到相关列字段
              </div>
            ) : (
              filteredCols.map((col) => {
                const isVisible = !settings.hiddenKeys.includes(col.key)
                const fx = getEffectiveFixed(col)
                const fieldName = Array.isArray(col.dataIndex)
                  ? col.dataIndex.join('.')
                  : String(col.dataIndex ?? col.key)
                const defaultSearchable =
                  searchableFieldNames.has(fieldName) || searchableFieldNames.has(col.key)
                const isSearchShown =
                  settings.searchVisible[fieldName] !== undefined
                    ? Boolean(settings.searchVisible[fieldName])
                    : settings.searchVisible[col.key] !== undefined
                      ? Boolean(settings.searchVisible[col.key])
                      : defaultSearchable
                const currentWidth =
                  settings.columnWidths[col.key] ??
                  (typeof col.width === 'number' ? col.width : '')

                return (
                  <div
                    key={col.key}
                    data-dragging={dragKey === col.key ? 'true' : undefined}
                    draggable
                    onDragStart={() => {
                      preDragOrderRef.current = orderedCols.map((c) => c.key)
                      hasLiveSwappedRef.current = false
                      setDragKey(col.key)
                    }}
                    onDragOver={(e) => {
                      if (!dragKey || dragKey === col.key) return
                      e.preventDefault()
                      const keys = orderedCols.map((c) => c.key)
                      const from = keys.indexOf(dragKey)
                      const to = keys.indexOf(col.key)
                      if (from < 0 || to < 0 || from === to) return

                      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                      if (rect.height > 0) {
                        if (from < to && e.clientY < rect.top + rect.height * 0.35) return
                        if (from > to && e.clientY > rect.top + rect.height * 0.65) return
                      }

                      const next = [...keys]
                      const [moved] = next.splice(from, 1)
                      next.splice(to, 0, moved)
                      hasLiveSwappedRef.current = true
                      onSetOrder(next)
                    }}
                    onDrop={() => {
                      if (dragKey && dragKey !== col.key && !hasLiveSwappedRef.current) {
                        const keys = orderedCols.map((c) => c.key)
                        const from = keys.indexOf(dragKey)
                        const to = keys.indexOf(col.key)
                        if (from >= 0 && to >= 0) {
                          const next = [...keys]
                          const [moved] = next.splice(from, 1)
                          next.splice(to, 0, moved)
                          onSetOrder(next)
                        }
                      }
                      setDragKey(null)
                      preDragOrderRef.current = null
                      hasLiveSwappedRef.current = false
                    }}
                    onDragEnd={() => {
                      setDragKey(null)
                      preDragOrderRef.current = null
                      hasLiveSwappedRef.current = false
                    }}
                    className={cn(
                      'flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70',
                      dragKey === col.key &&
                        'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90'
                    )}
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-1.5">
                      <GripVertical className="h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" />
                      <Checkbox checked={isVisible} onChange={() => onToggleVisible(col.key)} />
                      <span
                        className={cn(
                          'truncate text-xs',
                          isVisible
                            ? 'font-medium text-[var(--abc-fg)]'
                            : 'text-[var(--abc-fg-muted)] line-through'
                        )}
                      >
                        {col.title}
                      </span>
                      {fx && (
                        <span className="shrink-0 rounded bg-[var(--abc-primary-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-primary)]">
                          {fx === 'left' ? '左固' : '右固'}
                        </span>
                      )}
                    </div>

                    <div className="flex shrink-0 items-center gap-1">
                      <input
                        type="number"
                        min={64}
                        max={800}
                        aria-label={`${col.title} 列宽`}
                        placeholder="宽px"
                        defaultValue={currentWidth}
                        key={`${col.key}_${currentWidth}`}
                        onBlur={(e) => {
                          const parsed = parseInt(e.target.value, 10)
                          if (!Number.isNaN(parsed) && parsed >= 64) {
                            onSetWidth(col.key, parsed)
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            const parsed = parseInt((e.target as HTMLInputElement).value, 10)
                            if (!Number.isNaN(parsed) && parsed >= 64) {
                              onSetWidth(col.key, parsed)
                            }
                          }
                        }}
                        className="h-6 w-13 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                      />

                      <button
                        type="button"
                        title={isSearchShown ? '从筛选条件中移除' : '加入筛选条件'}
                        aria-label={`切换 ${col.title} 筛选项显示`}
                        onClick={() => onSetSearchVisible(fieldName, !isSearchShown)}
                        className={cn(
                          'inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer',
                          isSearchShown
                            ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                            : 'text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                        )}
                      >
                        <Search className="h-3 w-3" />
                      </button>

                      <button
                        type="button"
                        title={fx === 'left' ? '取消左侧固定' : '固定到左侧'}
                        aria-label={`固定 ${col.title} 到左侧`}
                        onClick={() => onSetFixed(col.key, fx === 'left' ? null : 'left')}
                        className={cn(
                          'inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer',
                          fx === 'left'
                            ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                            : 'text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                        )}
                      >
                        <Pin className="h-3 w-3 -rotate-45" />
                      </button>

                      <button
                        type="button"
                        title={fx === 'right' ? '取消右侧固定' : '固定到右侧'}
                        aria-label={`固定 ${col.title} 到右侧`}
                        onClick={() => onSetFixed(col.key, fx === 'right' ? null : 'right')}
                        className={cn(
                          'inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer',
                          fx === 'right'
                            ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                            : 'text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                        )}
                      >
                        <Pin className="h-3 w-3 rotate-45" />
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {showActionWidthControl && (
            <div className="flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2">
              <div className="min-w-0">
                <div className="text-[11px] font-medium text-[var(--abc-fg)]">操作列固定宽度</div>
                <div className="text-[10px] text-[var(--abc-fg-muted)]">
                  可在表头左缘拖拽或直接设置
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <input
                  type="number"
                  min={80}
                  max={600}
                  aria-label="操作 列宽"
                  placeholder="宽px"
                  defaultValue={actionWidthVal}
                  key={`__abc_actions___${actionWidthVal}`}
                  onBlur={(e) => {
                    const parsed = parseInt(e.target.value, 10)
                    if (!Number.isNaN(parsed) && parsed >= 80) {
                      onSetWidth('__abc_actions__', parsed)
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const parsed = parseInt((e.target as HTMLInputElement).value, 10)
                      if (!Number.isNaN(parsed) && parsed >= 80) {
                        onSetWidth('__abc_actions__', parsed)
                      }
                    }
                  }}
                  className="h-6 w-14 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                />
                <span className="font-mono text-[10px] text-[var(--abc-fg-muted)]">px</span>
              </div>
            </div>
          )}
        </div>
      }
    >
      <Tooltip content="列设置与筛选偏好">
        <button
          type="button"
          aria-label="列与密度设置"
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer',
            open
              ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
              : 'border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
          )}
        >
          <Settings2 className="h-3.5 w-3.5" />
        </button>
      </Tooltip>
    </Popover>
  )
}

/* ==================== 4. 行内操作自动溢出收起菜单 ==================== */

