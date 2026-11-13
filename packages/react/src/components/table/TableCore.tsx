import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import dayjs from 'dayjs'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Check,
  ChevronRight,
  EyeOff,
  GripVertical,
  HelpCircle,
  Pin,
  PinOff,
  RotateCcw,
} from 'lucide-react'
import { useControllableState } from '../../hooks/useControllableState'
import { getOverlayPortalContainer } from '../../hooks/useFloatingPosition'
import type { AbcTableDensity } from '../../hooks/useTableSettings'
import { cn } from '../../utils/cn'
import { EmptyState, Skeleton } from '../display/FeedbackStates'
import { ImagePreview } from '../display/ImagePreview'
import { Tooltip } from '../display/Overlays'
import { StatusTag, type StatusTone } from '../display/StatusTag'
import { Progress } from '../feedback/FeedbackExtras'
import { Checkbox } from '../form/Controls'
import { Input } from '../form/Input'
import { Select, type SelectOption } from '../form/Select'
import { CopyableText } from '../typography/CopyableText'

export type SortDirection = 'asc' | 'desc' | null

export type AbcColumnValueType =
  | 'text'
  | 'status'
  | 'tag'
  | 'money'
  | 'number'
  | 'date'
  | 'datetime'
  | 'image'
  | 'progress'
  | 'code'
  | 'link'
  | 'switch'

export interface AbcColumnOption {
  label: string
  value: string | number | boolean
  status?: StatusTone | 'error' | 'default'
  color?: string
}

export interface AbcColumn<T = Record<string, any>> {
  key: string
  title: string
  dataIndex?: keyof T | string
  width?: number
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'
  sortable?: boolean
  /** 表头问号提示文案 */
  tooltip?: React.ReactNode
  /** 是否支持表头快速过滤 */
  filterable?: boolean
  filterType?: 'text' | 'select'
  filterOptions?: SelectOption[]
  /** 内置格式化语义类型（未传自定义 render 时自动格式化） */
  valueType?: AbcColumnValueType
  /** 状态/枚举映射字典选项（未传自定义 render 时自动渲染 StatusTag） */
  options?: AbcColumnOption[]
  /** 点击单元格直接唤起详情查看回调 */
  linkToView?: boolean
  /** 超长文本单行省略并展示悬浮完整值 */
  ellipsis?: boolean
  /** 点击一键复制单元格内容 */
  copyable?: boolean
  hideInTable?: boolean
  render?: (value: any, record: T, index: number) => React.ReactNode
}

export interface AbcTableExpandableConfig<T = Record<string, any>> {
  /** 自定义展开子面板渲染函数 */
  expandedRowRender?: (record: T, index: number) => React.ReactNode
  /** 判断某行是否允许展开 */
  rowExpandable?: (record: T) => boolean
  /** 初始默认展开全部可展开行 */
  defaultExpandAllRows?: boolean
  /** 受控展开行主键集合 */
  expandedRowKeys?: Array<string | number>
  /** 展开行变更回调 */
  onExpandedRowsChange?: (keys: Array<string | number>) => void
}

export interface TableCoreProps<T = Record<string, any>> {
  columns: AbcColumn<T>[]
  data: T[]
  rowKey?: keyof T | ((record: T) => string | number)
  loading?: boolean
  density?: AbcTableDensity
  /** 选中行主键数组 */
  selectedKeys?: Array<string | number>
  onSelectionChange?: (keys: Array<string | number>, rows: T[]) => void
  /** 排序状态与回调 */
  sortState?: { key: string; direction: SortDirection }
  onSortChange?: (key: string, direction: SortDirection) => void
  /** 是否开启表头内联筛选行 */
  headerFilterMode?: boolean
  headerFilters?: Record<string, any>
  onHeaderFilterChange?: (key: string, value: any) => void
  /** 表头单列气泡筛选器插槽 */
  headerFilterRender?: (col: AbcColumn<T>) => React.ReactNode
  /** 个性化列宽覆盖 */
  columnWidths?: Record<string, number>
  onColumnResize?: (key: string, width: number) => void
  /** 个性化列左右固定覆盖（null 表示显式取消固定） */
  columnFixed?: Record<string, 'left' | 'right' | null>
  onColumnPin?: (key: string, fixed: 'left' | 'right' | null) => void
  /** 右键隐藏单列回调 */
  onColumnHide?: (key: string) => void
  /** 右键重置列配置回调 */
  onResetColumns?: () => void
  /** 拖拽调整列顺序回调 */
  onColumnReorder?: (nextOrder: string[]) => void
  /** 行展开与树形 children 子行配置 */
  expandable?: AbcTableExpandableConfig<T>
  /** linkToView 列点击触发查看详情回调 */
  onRowView?: (record: T) => void
  /** 空状态下一键清空筛选条件回调 */
  onEmptyReset?: () => void
  /** 表格滚动区域最大高度（开启后表头纵向吸顶） */
  maxHeight?: number | string
  ariaLabel?: string
  emptyText?: string
  className?: string
}

const DENSITY_CELL_PY: Record<AbcTableDensity, string> = {
  compact: 'py-2 px-3',
  default: 'py-3 px-4',
  comfortable: 'py-3.5 px-4',
}

interface FlattenedRow<T> {
  record: T
  key: string | number
  rowIdx: number
  depth: number
  hasTreeChildren: boolean
}

function renderBuiltInValue<T extends Record<string, any>>(
  rawVal: any,
  record: T,
  col: AbcColumn<T>,
  onRowView?: (record: T) => void
): React.ReactNode {
  if (rawVal === undefined || rawVal === null || rawVal === '') {
    return <span className="text-[var(--abc-fg-placeholder)]">-</span>
  }

  // 枚举 / 状态标签映射
  if (col.options && col.options.length > 0) {
    const matched = col.options.find((opt) => String(opt.value) === String(rawVal))
    if (matched) {
      return (
        <StatusTag status={matched.status} color={matched.color} dot>
          {matched.label}
        </StatusTag>
      )
    }
  }

  let formatted: React.ReactNode
  switch (col.valueType) {
    case 'money': {
      const num = Number(rawVal)
      formatted = Number.isNaN(num) ? (
        String(rawVal)
      ) : (
        <span className="font-mono font-semibold text-[var(--abc-fg)] tabular-nums">
          ¥{num.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      )
      break
    }
    case 'number': {
      const num = Number(rawVal)
      formatted = Number.isNaN(num) ? (
        String(rawVal)
      ) : (
        <span className="font-mono tabular-nums">{num.toLocaleString('zh-CN')}</span>
      )
      break
    }
    case 'date': {
      const parsed = dayjs(rawVal)
      formatted = (
        <span className="font-mono text-[var(--abc-fg-muted)] tabular-nums">
          {parsed.isValid() ? parsed.format('YYYY-MM-DD') : String(rawVal)}
        </span>
      )
      break
    }
    case 'datetime': {
      const parsed = dayjs(rawVal)
      formatted = (
        <span className="font-mono text-[var(--abc-fg-muted)] tabular-nums">
          {parsed.isValid() ? parsed.format('YYYY-MM-DD HH:mm:ss') : String(rawVal)}
        </span>
      )
      break
    }
    case 'image':
      return <ImagePreview src={String(rawVal)} width={32} height={32} />
    case 'progress':
      return <Progress percent={Number(rawVal) || 0} className="min-w-[92px]" />
    case 'code':
      formatted = (
        <code className="rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg)]">
          {String(rawVal)}
        </code>
      )
      break
    case 'link':
      return (
        <a
          href={String(rawVal)}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-[var(--abc-primary)] hover:underline"
        >
          {String(rawVal)}
        </a>
      )
    case 'switch':
      return (
        <StatusTag tone={rawVal ? 'success' : 'neutral'} dot>
          {rawVal ? '已启用' : '已停用'}
        </StatusTag>
      )
    case 'status':
    case 'tag':
      return <StatusTag dot>{String(rawVal)}</StatusTag>
    default:
      formatted = String(rawVal)
  }

  if (col.linkToView && onRowView) {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onRowView(record)
        }}
        className="max-w-full truncate text-left font-medium text-[var(--abc-primary)] hover:underline cursor-pointer"
      >
        {formatted}
      </button>
    )
  }

  if (col.copyable) {
    return <CopyableText text={String(rawVal)} displayText={formatted} />
  }

  if (col.ellipsis) {
    return (
      <span title={String(rawVal)} className="block max-w-full truncate">
        {formatted}
      </span>
    )
  }

  return formatted
}

/**
 * 企业级核心数据表格引擎 (TableCore)
 * 支持多列累加粘性左/右固定列、表头右键快捷菜单、拖拽调节列宽、拖拽交换列序、
 * 排序、表头气泡/内联双模筛选、可展开子面板与树形数据、语义化 valueType 渲染及键盘可访问滚动区
 */
export function TableCore<T extends Record<string, any> = Record<string, any>>({
  columns,
  data,
  rowKey = 'id',
  loading = false,
  density = 'default',
  selectedKeys,
  onSelectionChange,
  sortState,
  onSortChange,
  headerFilterMode = false,
  headerFilters = {},
  onHeaderFilterChange,
  headerFilterRender,
  columnWidths = {},
  onColumnResize,
  columnFixed = {},
  onColumnPin,
  onColumnHide,
  onResetColumns,
  onColumnReorder,
  expandable,
  onRowView,
  onEmptyReset,
  maxHeight,
  ariaLabel = '数据表格',
  emptyText = '暂无符合条件的数据',
  className,
}: TableCoreProps<T>) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contextMenuRef = useRef<HTMLDivElement>(null)
  const [draggingKey, setDraggingKey] = useState<string | null>(null)
  const [contextMenu, setContextMenu] = useState<{
    col: AbcColumn<T>
    x: number
    y: number
  } | null>(null)

  const resolveKey = (record: T, idx: number): string | number => {
    if (typeof rowKey === 'function') return rowKey(record)
    return (record?.[rowKey] as string | number) ?? idx
  }

  const getEffectiveFixed = (col: AbcColumn<T>): 'left' | 'right' | undefined => {
    if (col.key in columnFixed) {
      return columnFixed[col.key] ?? undefined
    }
    return col.fixed
  }

  // 按 [左侧固定列, 常规滚动列, 右侧固定列] 规整排列，并计算多列粘性累加偏移
  const orderedColumns = useMemo(() => {
    const leftCols: AbcColumn<T>[] = []
    const centerCols: AbcColumn<T>[] = []
    const rightCols: AbcColumn<T>[] = []
    for (const col of columns) {
      const fx = getEffectiveFixed(col)
      if (fx === 'left') leftCols.push(col)
      else if (fx === 'right') rightCols.push(col)
      else centerCols.push(col)
    }
    return [...leftCols, ...centerCols, ...rightCols]
  }, [columns, columnFixed])

  const selectable = Array.isArray(selectedKeys) && typeof onSelectionChange === 'function'
  const hasExpandColumn = Boolean(expandable?.expandedRowRender)

  const initialExpandedKeys = useMemo<Array<string | number>>(() => {
    if (!expandable?.defaultExpandAllRows) return []
    const keys: Array<string | number> = []
    const collect = (rows: T[]) => {
      rows.forEach((r, idx) => {
        const k = resolveKey(r, idx)
        if (!expandable.rowExpandable || expandable.rowExpandable(r)) {
          keys.push(k)
        }
        if (Array.isArray(r.children) && r.children.length > 0) {
          keys.push(k)
          collect(r.children as T[])
        }
      })
    }
    collect(data)
    return keys
  }, [])

  const [expandedKeys, setExpandedKeys] = useControllableState<Array<string | number>>({
    value: expandable?.expandedRowKeys,
    defaultValue: initialExpandedKeys,
    onChange: expandable?.onExpandedRowsChange,
  })

  const toggleExpandRow = (key: string | number) => {
    setExpandedKeys(
      expandedKeys.includes(key)
        ? expandedKeys.filter((k) => k !== key)
        : [...expandedKeys, key]
    )
  }

  // 展平树形 children 结构（当某节点处于展开态时递归插入子行）
  const flattenedRows = useMemo<FlattenedRow<T>[]>(() => {
    const list: FlattenedRow<T>[] = []
    const walk = (rows: T[], depth: number) => {
      rows.forEach((record, idx) => {
        const key = resolveKey(record, idx)
        const children = Array.isArray(record.children) ? (record.children as T[]) : []
        const hasTreeChildren = children.length > 0
        list.push({ record, key, rowIdx: idx, depth, hasTreeChildren })
        if (hasTreeChildren && expandedKeys.includes(key)) {
          walk(children, depth + 1)
        }
      })
    }
    walk(data, 0)
    return list
  }, [data, expandedKeys, rowKey])

  const stickyMeta = useMemo(() => {
    const leftOffsets: Record<string, number> = {}
    const rightOffsets: Record<string, number> = {}
    let lastLeftKey = ''
    let firstRightKey = ''

    let accLeft = (selectable ? 40 : 0) + (hasExpandColumn ? 36 : 0)
    for (const col of orderedColumns) {
      if (getEffectiveFixed(col) === 'left') {
        leftOffsets[col.key] = accLeft
        accLeft += columnWidths[col.key] ?? col.width ?? 140
        lastLeftKey = col.key
      }
    }

    let accRight = 0
    for (let i = orderedColumns.length - 1; i >= 0; i--) {
      const col = orderedColumns[i]
      if (getEffectiveFixed(col) === 'right') {
        rightOffsets[col.key] = accRight
        accRight += columnWidths[col.key] ?? col.width ?? 140
        firstRightKey = col.key
      }
    }

    return {
      leftOffsets,
      rightOffsets,
      lastLeftKey,
      firstRightKey,
      hasAnyLeftFixed: Boolean(lastLeftKey),
    }
  }, [orderedColumns, columnWidths, columnFixed, selectable, hasExpandColumn])

  const allPageKeys = useMemo(
    () => flattenedRows.map((item) => item.key),
    [flattenedRows]
  )

  const allSelected =
    selectable &&
    allPageKeys.length > 0 &&
    allPageKeys.every((k) => selectedKeys.includes(k))
  const someSelected =
    selectable && !allSelected && allPageKeys.some((k) => selectedKeys.includes(k))

  const toggleAll = (checked: boolean) => {
    if (!selectable) return
    if (checked) {
      const merged = Array.from(new Set([...selectedKeys, ...allPageKeys]))
      onSelectionChange(
        merged,
        flattenedRows.filter((item) => merged.includes(item.key)).map((item) => item.record)
      )
    } else {
      const next = selectedKeys.filter((k) => !allPageKeys.includes(k))
      onSelectionChange(next, [])
    }
  }

  const toggleOne = (key: string | number) => {
    if (!selectable) return
    const exists = selectedKeys.includes(key)
    const next = exists ? selectedKeys.filter((k) => k !== key) : [...selectedKeys, key]
    onSelectionChange(
      next,
      flattenedRows.filter((item) => next.includes(item.key)).map((item) => item.record)
    )
  }

  const startResizeColumn = (e: React.MouseEvent, col: AbcColumn<T>) => {
    if (!onColumnResize) return
    e.preventDefault()
    e.stopPropagation()
    const startX = e.clientX
    const thEl = (e.currentTarget as HTMLElement).parentElement
    const startW = columnWidths[col.key] ?? col.width ?? thEl?.offsetWidth ?? 140

    const onMove = (ev: MouseEvent) => {
      onColumnResize(col.key, Math.max(72, startW + (ev.clientX - startX)))
    }
    const onUp = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const handleSortClick = (col: AbcColumn<T>) => {
    if (!col.sortable || !onSortChange) return
    const currentDir = sortState?.key === col.key ? sortState.direction : null
    const nextDir: SortDirection =
      currentDir === null ? 'asc' : currentDir === 'asc' ? 'desc' : null
    onSortChange(col.key, nextDir)
  }

  // 右键表头上下文菜单外部点击 / Esc / 滚动关闭
  useEffect(() => {
    if (!contextMenu) return
    const close = (e?: Event) => {
      if (
        e &&
        e.type === 'mousedown' &&
        contextMenuRef.current?.contains(e.target as Node)
      ) {
        return
      }
      setContextMenu(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setContextMenu(null)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', onKey, true)
    window.addEventListener('scroll', close, true)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', onKey, true)
      window.removeEventListener('scroll', close, true)
    }
  }, [contextMenu])

  const handleHeaderContextMenu = (e: React.MouseEvent, col: AbcColumn<T>) => {
    if (col.key === '__abc_actions__') return
    const hasActions = Boolean(
      (col.sortable && onSortChange) || onColumnPin || onColumnHide || onResetColumns
    )
    if (!hasActions) return
    e.preventDefault()
    const vw = typeof window !== 'undefined' ? window.innerWidth : 1024
    const vh = typeof window !== 'undefined' ? window.innerHeight : 768
    const menuW = 176
    const menuH = 220
    setContextMenu({
      col,
      x: Math.max(8, Math.min(e.clientX, vw - menuW - 8)),
      y: Math.max(8, Math.min(e.clientY, vh - menuH - 8)),
    })
  }

  const totalColSpan =
    orderedColumns.length + (selectable ? 1 : 0) + (hasExpandColumn ? 1 : 0)

  const portalTarget = contextMenu ? getOverlayPortalContainer(wrapperRef.current) : null

  return (
    <div
      ref={wrapperRef}
      tabIndex={0}
      role="region"
      aria-label={ariaLabel}
      style={
        maxHeight !== undefined
          ? { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }
          : undefined
      }
      className={cn(
        'abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
        className
      )}
    >
      <table className="w-full border-separate border-spacing-0 text-left text-xs">
        <thead className="sticky top-0 z-20 bg-[var(--abc-bg-muted)]">
          <tr>
            {selectable && (
              <th
                style={stickyMeta.hasAnyLeftFixed ? { left: 0 } : undefined}
                className={cn(
                  'w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-3 text-center',
                  stickyMeta.hasAnyLeftFixed && 'sticky z-20'
                )}
              >
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={toggleAll}
                />
              </th>
            )}
            {hasExpandColumn && (
              <th
                style={
                  stickyMeta.hasAnyLeftFixed
                    ? { left: selectable ? 40 : 0 }
                    : undefined
                }
                aria-label="展开列"
                className={cn(
                  'w-9 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3',
                  stickyMeta.hasAnyLeftFixed && 'sticky z-20'
                )}
              />
            )}
            {orderedColumns.map((col) => {
              const colW = columnWidths[col.key] ?? col.width
              const fx = getEffectiveFixed(col)
              const currentDir = sortState?.key === col.key ? sortState.direction : null
              const stickyStyle: React.CSSProperties = {
                width: colW ? `${colW}px` : undefined,
                ...(fx === 'left' ? { left: `${stickyMeta.leftOffsets[col.key] ?? 0}px` } : {}),
                ...(fx === 'right' ? { right: `${stickyMeta.rightOffsets[col.key] ?? 0}px` } : {}),
              }

              return (
                <th
                  key={col.key}
                  draggable={Boolean(onColumnReorder && !fx && col.key !== '__abc_actions__')}
                  onContextMenu={(e) => handleHeaderContextMenu(e, col)}
                  onDragStart={() => setDraggingKey(col.key)}
                  onDragOver={(e) => {
                    if (draggingKey && draggingKey !== col.key && !fx) {
                      e.preventDefault()
                    }
                  }}
                  onDrop={() => {
                    if (!draggingKey || draggingKey === col.key || !onColumnReorder) return
                    const keys = orderedColumns
                      .filter((c) => c.key !== '__abc_actions__')
                      .map((c) => c.key)
                    const fromIdx = keys.indexOf(draggingKey)
                    const toIdx = keys.indexOf(col.key)
                    if (fromIdx >= 0 && toIdx >= 0) {
                      const reordered = [...keys]
                      const [moved] = reordered.splice(fromIdx, 1)
                      reordered.splice(toIdx, 0, moved)
                      onColumnReorder(reordered)
                    }
                    setDraggingKey(null)
                  }}
                  style={stickyStyle}
                  className={cn(
                    'group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none',
                    DENSITY_CELL_PY[density],
                    col.align === 'center' && 'text-center',
                    col.align === 'right' && 'text-right',
                    fx === 'left' && 'sticky z-20',
                    fx === 'right' && 'sticky z-20',
                    col.key === stickyMeta.lastLeftKey &&
                      'shadow-[3px_0_6px_-3px_rgba(15,23,42,0.12)]',
                    col.key === stickyMeta.firstRightKey &&
                      'shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.12)]'
                  )}
                >
                  <div
                    className={cn(
                      'inline-flex items-center gap-1',
                      col.align === 'right' && 'justify-end',
                      col.align === 'center' && 'justify-center'
                    )}
                  >
                    <span
                      className={cn(
                        'inline-flex items-center gap-1',
                        col.sortable && 'cursor-pointer hover:text-[var(--abc-primary)]'
                      )}
                      onClick={() => handleSortClick(col)}
                    >
                      {onColumnReorder && !fx && col.key !== '__abc_actions__' && (
                        <GripVertical className="h-3 w-3 cursor-grab text-[var(--abc-fg-placeholder)] opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                      <span>{col.title}</span>
                      {col.tooltip && (
                        <Tooltip content={col.tooltip}>
                          <span
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                          >
                            <HelpCircle className="h-3 w-3" />
                          </span>
                        </Tooltip>
                      )}
                      {col.sortable && (
                        <span className="inline-flex text-[var(--abc-fg-muted)]">
                          {currentDir === 'asc' ? (
                            <ArrowUp className="h-3 w-3 text-[var(--abc-primary)]" />
                          ) : currentDir === 'desc' ? (
                            <ArrowDown className="h-3 w-3 text-[var(--abc-primary)]" />
                          ) : (
                            <ArrowUpDown className="h-3 w-3 opacity-50" />
                          )}
                        </span>
                      )}
                    </span>

                    {headerFilterRender && col.filterable && (
                      <span
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center"
                      >
                        {headerFilterRender(col)}
                      </span>
                    )}
                  </div>

                  {onColumnResize && col.key !== '__abc_actions__' && (
                    <span
                      role="separator"
                      aria-label={`拖拽调节 ${col.title} 列宽`}
                      onMouseDown={(e) => startResizeColumn(e, col)}
                      className="absolute top-0 right-0 bottom-0 w-1.5 cursor-col-resize hover:bg-[var(--abc-primary)]/50"
                    />
                  )}
                </th>
              )
            })}
          </tr>

          {/* 表头内联筛选行 */}
          {headerFilterMode && (
            <tr className="bg-[var(--abc-bg-surface)]">
              {selectable && <th className="border-b border-[var(--abc-border)] px-3 py-1.5" />}
              {hasExpandColumn && (
                <th className="border-b border-[var(--abc-border)] px-2 py-1.5" />
              )}
              {orderedColumns.map((col) => {
                const fx = getEffectiveFixed(col)
                return (
                  <th
                    key={`${col.key}_filter`}
                    style={{
                      ...(fx === 'left'
                        ? { left: `${stickyMeta.leftOffsets[col.key] ?? 0}px` }
                        : {}),
                      ...(fx === 'right'
                        ? { right: `${stickyMeta.rightOffsets[col.key] ?? 0}px` }
                        : {}),
                    }}
                    className={cn(
                      'border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal',
                      fx === 'left' && 'sticky z-20',
                      fx === 'right' && 'sticky z-20'
                    )}
                  >
                    {col.filterable ? (
                      col.filterType === 'select' && col.filterOptions ? (
                        <Select
                          size="xs"
                          allowClear
                          placeholder="全部"
                          options={col.filterOptions}
                          value={headerFilters[col.key] ?? ''}
                          onChange={(val) => onHeaderFilterChange?.(col.key, val)}
                        />
                      ) : (
                        <Input
                          size="xs"
                          allowClear
                          placeholder={`筛选${col.title}`}
                          value={headerFilters[col.key] ?? ''}
                          onChange={(e) => onHeaderFilterChange?.(col.key, e.target.value)}
                        />
                      )
                    ) : null}
                  </th>
                )
              })}
            </tr>
          )}
        </thead>

        <tbody>
          {loading ? (
            Array.from({ length: 5 }).map((_, rowIdx) => (
              <tr key={`sk_${rowIdx}`}>
                {selectable && (
                  <td className="border-b border-[var(--abc-border)] px-3 py-3 text-center">
                    <Skeleton width={16} height={16} />
                  </td>
                )}
                {hasExpandColumn && (
                  <td className="border-b border-[var(--abc-border)] px-2 py-3" />
                )}
                {orderedColumns.map((col) => (
                  <td
                    key={col.key}
                    className={cn('border-b border-[var(--abc-border)]', DENSITY_CELL_PY[density])}
                  >
                    <Skeleton variant="text" className="w-4/5" />
                  </td>
                ))}
              </tr>
            ))
          ) : flattenedRows.length === 0 ? (
            <tr>
              <td colSpan={totalColSpan}>
                <EmptyState title={emptyText} onReset={onEmptyReset} />
              </td>
            </tr>
          ) : (
            flattenedRows.map(({ record, key, rowIdx, depth, hasTreeChildren }) => {
              const isSelected = Boolean(selectable && selectedKeys.includes(key))
              const isExpanded = expandedKeys.includes(key)
              const canPanelExpand =
                hasExpandColumn &&
                (!expandable?.rowExpandable || expandable.rowExpandable(record))

              return (
                <React.Fragment key={String(key)}>
                  <tr
                    className={cn(
                      'group transition-colors duration-150',
                      isSelected
                        ? 'bg-[var(--abc-primary-soft)]/60'
                        : 'hover:bg-[var(--abc-bg-muted)]/85'
                    )}
                  >
                    {selectable && (
                      <td
                        style={stickyMeta.hasAnyLeftFixed ? { left: 0 } : undefined}
                        className={cn(
                          'border-b border-[var(--abc-border)] px-3 py-2.5 text-center',
                          stickyMeta.hasAnyLeftFixed &&
                            'sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]'
                        )}
                      >
                        <Checkbox checked={isSelected} onChange={() => toggleOne(key)} />
                      </td>
                    )}

                    {hasExpandColumn && (
                      <td
                        style={
                          stickyMeta.hasAnyLeftFixed
                            ? { left: selectable ? 40 : 0 }
                            : undefined
                        }
                        className={cn(
                          'border-b border-[var(--abc-border)] px-2 py-2.5 text-center',
                          stickyMeta.hasAnyLeftFixed &&
                            'sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]'
                        )}
                      >
                        {canPanelExpand && (
                          <button
                            type="button"
                            aria-label={isExpanded ? '收起详情行' : '展开详情行'}
                            aria-expanded={isExpanded}
                            onClick={() => toggleExpandRow(key)}
                            className="inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                          >
                            <ChevronRight
                              className={cn(
                                'h-3.5 w-3.5 transition-transform duration-150',
                                isExpanded && 'rotate-90 text-[var(--abc-primary)]'
                              )}
                            />
                          </button>
                        )}
                      </td>
                    )}

                    {orderedColumns.map((col, colIdx) => {
                      const fieldKey = (col.dataIndex ?? col.key) as string
                      const rawVal = record?.[fieldKey]
                      const fx = getEffectiveFixed(col)
                      const cellContent = col.render
                        ? col.render(rawVal, record, rowIdx)
                        : renderBuiltInValue(rawVal, record, col, onRowView)

                      const showTreeIndent = colIdx === 0 && (depth > 0 || hasTreeChildren)

                      return (
                        <td
                          key={col.key}
                          style={{
                            ...(fx === 'left'
                              ? { left: `${stickyMeta.leftOffsets[col.key] ?? 0}px` }
                              : {}),
                            ...(fx === 'right'
                              ? { right: `${stickyMeta.rightOffsets[col.key] ?? 0}px` }
                              : {}),
                          }}
                          className={cn(
                            'border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)]',
                            DENSITY_CELL_PY[density],
                            col.align === 'center' && 'text-center',
                            col.align === 'right' && 'text-right',
                            fx === 'left' &&
                              'sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]',
                            fx === 'right' &&
                              'sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]',
                            col.key === stickyMeta.lastLeftKey &&
                              'shadow-[3px_0_6px_-3px_rgba(15,23,42,0.08)]',
                            col.key === stickyMeta.firstRightKey &&
                              'shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.08)]'
                          )}
                        >
                          {showTreeIndent ? (
                            <div
                              style={{ paddingLeft: `${depth * 18}px` }}
                              className="inline-flex items-center gap-1"
                            >
                              {hasTreeChildren ? (
                                <button
                                  type="button"
                                  aria-label={isExpanded ? '收起子项' : '展开子项'}
                                  aria-expanded={isExpanded}
                                  onClick={() => toggleExpandRow(key)}
                                  className="inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                                >
                                  <ChevronRight
                                    className={cn(
                                      'h-3 w-3 transition-transform duration-150',
                                      isExpanded && 'rotate-90 text-[var(--abc-primary)]'
                                    )}
                                  />
                                </button>
                              ) : (
                                <span className="inline-block w-4.5 shrink-0" />
                              )}
                              <span className="min-w-0">{cellContent}</span>
                            </div>
                          ) : (
                            cellContent
                          )}
                        </td>
                      )
                    })}
                  </tr>

                  {canPanelExpand && isExpanded && expandable?.expandedRowRender && (
                    <tr className="bg-[var(--abc-bg-muted)]/45">
                      <td
                        colSpan={totalColSpan}
                        className="border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]"
                      >
                        {expandable.expandedRowRender(record, rowIdx)}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              )
            })
          )}
        </tbody>
      </table>

      {/* 表头右键快捷控制菜单 */}
      {contextMenu &&
        portalTarget &&
        createPortal(
          <div
            ref={contextMenuRef}
            role="menu"
            aria-label={`${contextMenu.col.title} 列操作菜单`}
            data-abc-floating=""
            style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
            className="fixed z-[1350] w-44 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none"
          >
            <div className="truncate border-b border-[var(--abc-border)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--abc-fg-muted)]">
              列：{contextMenu.col.title}
            </div>

            {contextMenu.col.sortable && onSortChange && (
              <div className="border-b border-[var(--abc-border)] py-1">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    onSortChange(contextMenu.col.key, 'asc')
                    setContextMenu(null)
                  }}
                  className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <ArrowUp className="h-3.5 w-3.5" /> 升序排列
                  </span>
                  {sortState?.key === contextMenu.col.key && sortState.direction === 'asc' && (
                    <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                  )}
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    onSortChange(contextMenu.col.key, 'desc')
                    setContextMenu(null)
                  }}
                  className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <ArrowDown className="h-3.5 w-3.5" /> 降序排列
                  </span>
                  {sortState?.key === contextMenu.col.key && sortState.direction === 'desc' && (
                    <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                  )}
                </button>
                {sortState?.key === contextMenu.col.key && sortState.direction && (
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onSortChange(contextMenu.col.key, null)
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <ArrowUpDown className="h-3.5 w-3.5" /> 清除排序
                  </button>
                )}
              </div>
            )}

            {onColumnPin && (
              <div className="border-b border-[var(--abc-border)] py-1">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    const fx = getEffectiveFixed(contextMenu.col)
                    onColumnPin(contextMenu.col.key, fx === 'left' ? null : 'left')
                    setContextMenu(null)
                  }}
                  className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Pin className="h-3.5 w-3.5 -rotate-45" /> 固定到左侧
                  </span>
                  {getEffectiveFixed(contextMenu.col) === 'left' && (
                    <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                  )}
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    const fx = getEffectiveFixed(contextMenu.col)
                    onColumnPin(contextMenu.col.key, fx === 'right' ? null : 'right')
                    setContextMenu(null)
                  }}
                  className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Pin className="h-3.5 w-3.5 rotate-45" /> 固定到右侧
                  </span>
                  {getEffectiveFixed(contextMenu.col) === 'right' && (
                    <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                  )}
                </button>
                {getEffectiveFixed(contextMenu.col) && (
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onColumnPin(contextMenu.col.key, null)
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <PinOff className="h-3.5 w-3.5" /> 取消固定
                  </button>
                )}
              </div>
            )}

            <div className="pt-1">
              {onColumnHide && (
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    onColumnHide(contextMenu.col.key)
                    setContextMenu(null)
                  }}
                  className="flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <EyeOff className="h-3.5 w-3.5" /> 隐藏此列
                </button>
              )}
              {onResetColumns && (
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    onResetColumns()
                    setContextMenu(null)
                  }}
                  className="flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> 重置列配置
                </button>
              )}
            </div>
          </div>,
          portalTarget
        )}
    </div>
  )
}

export default TableCore
