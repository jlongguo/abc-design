import React, { useEffect, useMemo, useState } from 'react'
import {
  Filter,
  GripVertical,
  MoreHorizontal,
  Pin,
  RotateCcw,
  Search,
  Settings2,
  Trash2,
  X,
} from 'lucide-react'
import Button from '../components/button/Button'
import { Dropdown, Popover, Tooltip } from '../components/display/Overlays'
import { Checkbox } from '../components/form/Controls'
import { Input } from '../components/form/Input'
import { Select, type SelectOption } from '../components/form/Select'
import type { AbcColumn } from '../components/table/TableCore'
import type { AbcTablePersistedSettings } from '../hooks/useTableSettings'
import { cn } from '../utils/cn'

/* ==================== 1. UTF-8 BOM CSV 导出工具 ==================== */

function escapeCsvCell(val: unknown): string {
  if (val === null || val === undefined) return ''
  const str = String(val)
  if (/[",\r\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

export function buildCsvContent<T extends Record<string, any>>(
  columns: AbcColumn<T>[],
  rows: T[]
): string {
  const exportCols = columns.filter((c) => !c.hideInTable && c.key !== '__abc_actions__')
  const headerLine = exportCols.map((c) => escapeCsvCell(c.title)).join(',')
  const bodyLines = rows.map((row) =>
    exportCols
      .map((col) => {
        const raw = row[(col.dataIndex ?? col.key) as string]
        if (col.options && col.options.length > 0) {
          const hit = col.options.find((o) => String(o.value) === String(raw))
          if (hit) return escapeCsvCell(hit.label)
        }
        return escapeCsvCell(raw)
      })
      .join(',')
  )
  return `\uFEFF${[headerLine, ...bodyLines].join('\r\n')}`
}

export function downloadTableCsv<T extends Record<string, any>>(
  filename: string,
  columns: AbcColumn<T>[],
  rows: T[]
): string {
  const csv = buildCsvContent(columns, rows)
  if (
    typeof window !== 'undefined' &&
    typeof Blob !== 'undefined' &&
    typeof URL !== 'undefined' &&
    typeof URL.createObjectURL === 'function'
  ) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename.endsWith('.csv') ? filename : `${filename}.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
  return csv
}

/* ==================== 2. 表头单列气泡筛选器 ==================== */

export interface HeaderColumnFilterPopoverProps {
  title: string
  filterType?: 'text' | 'select'
  filterOptions?: SelectOption[]
  value: any
  onApply: (nextValue: any) => void
}

export const HeaderColumnFilterPopover: React.FC<HeaderColumnFilterPopoverProps> = ({
  title,
  filterType = 'text',
  filterOptions,
  value,
  onApply,
}) => {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState<any>(value ?? '')

  useEffect(() => {
    if (open) setDraft(value ?? '')
  }, [open, value])

  const isActive = value !== undefined && value !== null && String(value).trim() !== ''

  const applyAndClose = (nextVal: any) => {
    onApply(nextVal)
    setOpen(false)
  }

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      placement="bottomRight"
      panelClassName="w-60 p-3"
      content={
        <div
          onClick={(e) => e.stopPropagation()}
          className="space-y-2.5 text-xs font-normal text-[var(--abc-fg)]"
        >
          <div className="font-semibold text-[var(--abc-fg-secondary)]">筛选：{title}</div>
          {filterType === 'select' && filterOptions ? (
            <Select
              size="xs"
              allowClear
              placeholder={`选择${title}`}
              options={filterOptions}
              value={draft ?? ''}
              onChange={(val) => setDraft(val)}
            />
          ) : (
            <Input
              size="xs"
              allowClear
              placeholder={`输入${title}关键字`}
              value={draft ?? ''}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  applyAndClose(draft)
                }
              }}
            />
          )}
          <div className="flex items-center justify-end gap-1.5 pt-0.5">
            <Button
              variant="secondary"
              size="xs"
              onClick={() => {
                setDraft('')
                applyAndClose('')
              }}
            >
              重置
            </Button>
            <Button variant="primary" size="xs" onClick={() => applyAndClose(draft)}>
              筛选
            </Button>
          </div>
        </div>
      }
    >
      <button
        type="button"
        aria-label={`筛选 ${title}`}
        title={`按${title}筛选`}
        className={cn(
          'inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer',
          isActive
            ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
            : 'text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
        )}
      >
        <Filter className="h-3 w-3" />
      </button>
    </Popover>
  )
}

/* ==================== 3. 高级列配置与筛选项管理弹层 ==================== */

export interface ProColumnSettingsPopoverProps<T = Record<string, any>> {
  columns: AbcColumn<T>[]
  searchableFieldNames: Set<string>
  settings: AbcTablePersistedSettings
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
  onToggleVisible,
  onSetAllVisible,
  onSetFixed,
  onSetWidth,
  onSetOrder,
  onSetSearchVisible,
  onReset,
}: ProColumnSettingsPopoverProps<T>) {
  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [tab, setTab] = useState<'all' | 'fixed' | 'hidden'>('all')
  const [dragKey, setDragKey] = useState<string | null>(null)

  const configurableCols = useMemo(
    () => columns.filter((c) => !c.hideInTable && c.key !== '__abc_actions__'),
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

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      placement="bottomRight"
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
              <Search className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" />
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
                  className="absolute top-1/2 right-2 -translate-y-1/2 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer"
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
                const fieldName = String(col.dataIndex ?? col.key)
                const hasSearchField = searchableFieldNames.has(fieldName)
                const isSearchShown = settings.searchVisible[fieldName] !== false
                const currentWidth = settings.columnWidths[col.key] ?? col.width ?? ''

                return (
                  <div
                    key={col.key}
                    draggable
                    onDragStart={() => setDragKey(col.key)}
                    onDragOver={(e) => {
                      if (dragKey && dragKey !== col.key) e.preventDefault()
                    }}
                    onDrop={() => {
                      if (!dragKey || dragKey === col.key) return
                      const keys = orderedCols.map((c) => c.key)
                      const from = keys.indexOf(dragKey)
                      const to = keys.indexOf(col.key)
                      if (from >= 0 && to >= 0) {
                        const next = [...keys]
                        const [moved] = next.splice(from, 1)
                        next.splice(to, 0, moved)
                        onSetOrder(next)
                      }
                      setDragKey(null)
                    }}
                    onDragEnd={() => setDragKey(null)}
                    className={cn(
                      'flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70',
                      dragKey === col.key && 'opacity-50'
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

                      {hasSearchField && (
                        <button
                          type="button"
                          title={isSearchShown ? '在筛选栏显示（点击隐藏）' : '已在筛选栏隐藏（点击显示）'}
                          aria-label={`切换 ${col.title} 筛选项显示`}
                          onClick={() => onSetSearchVisible(fieldName, !isSearchShown)}
                          className={cn(
                            'inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer',
                            isSearchShown
                              ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                              : 'text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)]'
                          )}
                        >
                          <Filter className="h-3 w-3" />
                        </button>
                      )}

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

export interface ResolvedRowActionItem {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  danger?: boolean
  onClick: () => void
}

export const ProRowActionsOverflow: React.FC<{
  actions: ResolvedRowActionItem[]
  maxInline?: number
}> = ({ actions, maxInline = 3 }) => {
  if (actions.length === 0) return <span className="text-[var(--abc-fg-placeholder)]">-</span>

  if (actions.length <= maxInline) {
    return (
      <div className="inline-flex items-center justify-end gap-1">
        {actions.map((act) => (
          <Button
            key={act.key}
            variant="text"
            size="xs"
            icon={act.icon}
            onClick={act.onClick}
            className={
              act.danger ? 'text-[var(--abc-danger)] enabled:hover:text-[var(--abc-danger)]' : undefined
            }
          >
            {act.label}
          </Button>
        ))}
      </div>
    )
  }

  const inlineList = actions.slice(0, Math.max(1, maxInline - 1))
  const overflowList = actions.slice(Math.max(1, maxInline - 1))

  return (
    <div className="inline-flex items-center justify-end gap-1">
      {inlineList.map((act) => (
        <Button
          key={act.key}
          variant="text"
          size="xs"
          icon={act.icon}
          onClick={act.onClick}
          className={
            act.danger ? 'text-[var(--abc-danger)] enabled:hover:text-[var(--abc-danger)]' : undefined
          }
        >
          {act.label}
        </Button>
      ))}

      <Dropdown
        placement="bottomRight"
        items={overflowList.map((act) => ({
          key: act.key,
          label: act.label,
          icon: act.icon,
          danger: act.danger,
          onClick: act.onClick,
        }))}
      >
        <button
          type="button"
          aria-label="更多操作"
          className="inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
        >
          <MoreHorizontal className="h-3.5 w-3.5" />
        </button>
      </Dropdown>
    </div>
  )
}

/* ==================== 5. 悬浮毛玻璃批量操作胶囊栏 ==================== */

export interface ProTableBatchAction<T = Record<string, any>> {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  permission?: string
  onClick: (selectedKeys: Array<string | number>, selectedRows: T[]) => void | Promise<void>
}

export function ProFloatingBatchBar<T = Record<string, any>>({
  selectedKeys,
  selectedRows,
  batchActions = [],
  onBatchDelete,
  onClear,
}: {
  selectedKeys: Array<string | number>
  selectedRows: T[]
  batchActions?: ProTableBatchAction<T>[]
  onBatchDelete?: () => void
  onClear: () => void
}) {
  if (selectedKeys.length === 0) return null

  return (
    <div
      role="region"
      aria-label="批量操作栏"
      className="fixed bottom-6 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-3 rounded-full border border-[var(--abc-border-strong)] bg-[var(--abc-bg-elevated)]/95 px-4 py-2 shadow-[var(--abc-shadow-modal)] backdrop-blur-md abc-floating-bar-in"
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--abc-primary-soft)] px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)]">
        已选择 <strong className="font-mono font-bold tabular-nums">{selectedKeys.length}</strong> 项
      </span>

      <div className="flex flex-wrap items-center gap-1.5">
        {batchActions.map((act) => (
          <Button
            key={act.key}
            variant={act.variant ?? 'secondary'}
            size="xs"
            icon={act.icon}
            onClick={() => act.onClick(selectedKeys, selectedRows)}
          >
            {act.label}
          </Button>
        ))}

        {onBatchDelete && (
          <Button
            variant="danger"
            size="xs"
            icon={<Trash2 className="h-3 w-3" />}
            onClick={onBatchDelete}
          >
            批量删除
          </Button>
        )}

        <button
          type="button"
          aria-label="取消多选"
          onClick={onClear}
          className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
        >
          <span>取消选择</span>
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}
