import React from 'react'
import type { AbcSize } from '@abc-design/tokens'
import { EmptyState, Skeleton, SmartPagination, type PaginationProps } from '../display/FeedbackStates'
import { cn } from '../../utils/cn'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './TablePrimitives'

export interface DataTableColumn<T> {
  /** 列唯一标识 */
  key: string
  /** 列标题（与 title 等价，兼容两种写法） */
  header?: React.ReactNode
  /** 列标题别名 */
  title?: React.ReactNode
  /** 单元格自定义渲染（与 cell 等价，兼容两种写法） */
  render?: (item: T, index: number) => React.ReactNode
  /** 单元格自定义渲染别名 */
  cell?: (item: T, index: number) => React.ReactNode
  /** 对齐方式 */
  align?: 'left' | 'center' | 'right'
  /** 是否使用等宽字体展示单元格 */
  mono?: boolean
  /** 固定宽度或 Tailwind 宽度类名 */
  width?: string | number
  /** 最小宽度或 Tailwind 最小宽度类名 */
  minWidth?: string | number
  /** 单元格额外样式类 */
  className?: string
  /** 单元格内容额外样式类（className 别名） */
  cellClassName?: string
  /** 表头额外样式类 */
  headerClassName?: string
}

export interface DataTableProps<T> {
  /** 列定义 */
  columns: DataTableColumn<T>[]
  /** 数据行（与 rows 等价，兼容两种写法） */
  data?: T[]
  /** 数据行别名 */
  rows?: T[]
  /** 行主键提取函数（与 rowKey 等价） */
  keyExtractor?: (item: T, index: number) => string | number
  /** 行主键提取函数别名 */
  rowKey?: (item: T, index: number) => string | number
  /** 空状态自定义节点（传入后覆盖 emptyTitle / emptyDescription） */
  emptyNode?: React.ReactNode
  /** 默认空状态主标题 */
  emptyTitle?: React.ReactNode
  /** 默认空状态副标题 */
  emptyDescription?: React.ReactNode
  /** 默认空状态底部操作区 */
  emptyAction?: React.ReactNode
  /** 加载中状态（展示结构化骨架行并广播 aria-live 状态） */
  loading?: boolean
  /** 骨架行数（默认 5） */
  skeletonRows?: number
  /** 屏幕阅读器加载态提示文案 */
  loadingStatusText?: string
  /** 空数据时是否保留表头（默认 false） */
  keepHeaderWhenEmpty?: boolean
  /** 是否渲染外框与背景卡片（默认 true） */
  framed?: boolean
  /** 行点击回调（自动启用键盘 Enter / Space 激活支持） */
  onRowClick?: (item: T) => void
  /** 当前选中行主键值 */
  selectedRowKey?: string | number | null
  /** 横向滚动区域的无障碍标签 */
  scrollLabel?: string
  /** 是否开启吸顶表头 */
  stickyHeader?: boolean
  /** 表格行距密度 */
  density?: 'compact' | 'comfortable' | 'relaxed' | AbcSize
  /** 可选集成底部分页条（支持页码 / 游标双模 SmartPagination） */
  pagination?: PaginationProps
  /** 表格语义标题（sr-only） */
  caption?: string
  className?: string
}

const ALIGN_CLASS: Record<'left' | 'center' | 'right', string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const DENSITY_CELL_CLASS: Record<string, string> = {
  compact: 'px-3 py-2 text-xs',
  xs: 'px-3 py-2 text-xs',
  sm: 'px-3.5 py-2.5 text-sm',
  comfortable: 'px-3.5 py-2.5 text-sm',
  md: 'px-4 py-3 text-sm',
  relaxed: 'px-4 py-3.5 text-sm',
  lg: 'px-4 py-3.5 text-sm',
}

function toDimensionStyle(value?: string | number): React.CSSProperties | undefined {
  if (typeof value === 'number') return { width: `${value}px` }
  if (typeof value === 'string' && !value.includes('w-')) return { width: value }
  return undefined
}

function toDimensionClass(value?: string | number): string | undefined {
  if (typeof value === 'string' && value.includes('w-')) return value
  return undefined
}

/**
 * 轻量级通用数据表格 (DataTable)
 * 内置结构化骨架态加载、空状态表头保留开关、键盘可访问行选择以及可选双模分页条。
 */
export function DataTable<T>({
  columns,
  data,
  rows,
  keyExtractor,
  rowKey,
  emptyNode,
  emptyTitle = '暂无数据',
  emptyDescription,
  emptyAction,
  loading = false,
  skeletonRows = 5,
  loadingStatusText = '正在加载表格数据...',
  keepHeaderWhenEmpty = false,
  framed = true,
  onRowClick,
  selectedRowKey,
  scrollLabel = '数据表格内容',
  stickyHeader = false,
  density = 'comfortable',
  pagination,
  caption,
  className,
}: DataTableProps<T>) {
  const effectiveData = data ?? rows ?? []
  const resolveRowKey = keyExtractor ?? rowKey ?? ((_item: T, idx: number) => idx)
  const cellPadClass = DENSITY_CELL_CLASS[density] ?? DENSITY_CELL_CLASS.comfortable
  const containerClass = framed
    ? 'overflow-hidden rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs'
    : 'overflow-hidden'

  const renderEmptyContent = () =>
    emptyNode ?? (
      <EmptyState
        title={typeof emptyTitle === 'string' ? emptyTitle : '暂无数据'}
        description={typeof emptyDescription === 'string' ? emptyDescription : undefined}
        action={emptyAction}
        compact
      />
    )

  if (!loading && effectiveData.length === 0 && !keepHeaderWhenEmpty) {
    return (
      <div className={cn(containerClass, 'p-4', className)}>
        {renderEmptyContent()}
        {pagination ? (
          <div className="mt-3 border-t border-[var(--abc-border)] pt-3">
            <SmartPagination {...pagination} />
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div className={cn(containerClass, className)} aria-busy={loading || undefined}>
      {loading ? (
        <span className="sr-only" role="status" aria-live="polite">
          {loadingStatusText}
        </span>
      ) : null}

      <div
        role="region"
        aria-label={scrollLabel}
        tabIndex={0}
        className="w-full overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]"
      >
        <Table>
          {caption ? <caption className="sr-only">{caption}</caption> : null}
          <TableHeader
            className={cn(
              stickyHeader && 'sticky top-0 z-10 bg-[var(--abc-bg-subtle)]/95 backdrop-blur-sm'
            )}
          >
            <TableRow className="hover:bg-transparent">
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  style={{
                    ...toDimensionStyle(column.width),
                    ...(typeof column.minWidth === 'number'
                      ? { minWidth: `${column.minWidth}px` }
                      : typeof column.minWidth === 'string' && !column.minWidth.includes('w-')
                        ? { minWidth: column.minWidth }
                        : undefined),
                  }}
                  className={cn(
                    cellPadClass,
                    ALIGN_CLASS[column.align ?? 'left'],
                    toDimensionClass(column.width),
                    toDimensionClass(column.minWidth),
                    column.headerClassName
                  )}
                >
                  {column.header ?? column.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: Math.max(1, skeletonRows) }).map((_, rowIdx) => (
                <TableRow key={`skeleton-${rowIdx}`} className="hover:bg-transparent">
                  {columns.map((column, colIdx) => (
                    <TableCell
                      key={`${column.key}-skeleton-${colIdx}`}
                      className={cn(cellPadClass, ALIGN_CLASS[column.align ?? 'left'])}
                    >
                      <Skeleton
                        className={cn(
                          'h-4',
                          colIdx === 0 ? 'w-3/4' : colIdx === columns.length - 1 ? 'ml-auto w-14' : 'w-2/3'
                        )}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : effectiveData.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={Math.max(1, columns.length)} className="p-6 text-center">
                  {renderEmptyContent()}
                </TableCell>
              </TableRow>
            ) : (
              effectiveData.map((item, rowIndex) => {
                const resolvedKey = resolveRowKey(item, rowIndex)
                const isSelected = selectedRowKey !== undefined && selectedRowKey !== null && resolvedKey === selectedRowKey
                const isInteractive = Boolean(onRowClick)

                return (
                  <TableRow
                    key={resolvedKey}
                    data-state={isSelected ? 'selected' : undefined}
                    aria-selected={isInteractive ? isSelected : undefined}
                    tabIndex={isInteractive ? 0 : undefined}
                    onClick={isInteractive ? () => onRowClick?.(item) : undefined}
                    onKeyDown={
                      isInteractive
                        ? (event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault()
                              onRowClick?.(item)
                            }
                          }
                        : undefined
                    }
                    className={cn(
                      isInteractive &&
                        'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]',
                      isSelected && 'bg-[var(--abc-primary-soft)]/50'
                    )}
                  >
                    {columns.map((column) => {
                      const content = column.render
                        ? column.render(item, rowIndex)
                        : column.cell
                          ? column.cell(item, rowIndex)
                          : (item as Record<string, unknown>)[column.key]

                      return (
                        <TableCell
                          key={column.key}
                          className={cn(
                            cellPadClass,
                            ALIGN_CLASS[column.align ?? 'left'],
                            column.mono && 'font-mono text-xs',
                            column.className,
                            column.cellClassName
                          )}
                        >
                          {content as React.ReactNode}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      {pagination ? (
        <div className="border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-4 py-2.5">
          <SmartPagination {...pagination} />
        </div>
      ) : null}
    </div>
  )
}

DataTable.displayName = 'DataTable'
