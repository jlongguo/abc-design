import React, { useRef, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { ChevronLeft, ChevronRight, FolderSearch, RotateCcw } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks'
import { cn } from '../../utils/cn'
import Button from '../button/Button'

export interface EmptyStateProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  action?: React.ReactNode
  /** 快捷重置筛选回调（未传自定义 action 时自动渲染重置按钮） */
  onReset?: () => void
  /** 重置按钮文案 */
  resetText?: string
  size?: AbcSize
  motion?: AbcMotionPreset
  compact?: boolean
  className?: string
}

/** 空状态占位组件（支持多尺寸层级与一键重置筛选交互） */
export const EmptyState: React.FC<EmptyStateProps> = ({
  title = '暂无匹配数据',
  description = '未检索到符合条件的数据记录，建议调整筛选或搜索关键词',
  icon,
  action,
  onReset,
  resetText = '重置筛选条件',
  size,
  motion,
  compact = false,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const effectiveSize = compact ? 'sm' : resolvedSize
  const sizeStyles: Record<
    AbcSize,
    { container: string; iconBox: string; iconSize: string; title: string; desc: string; btnSize: AbcSize }
  > = {
    xs: {
      container: 'py-4 px-3',
      iconBox: 'h-8 w-8 rounded-lg',
      iconSize: 'h-4 w-4',
      title: 'text-[11px] font-semibold',
      desc: 'mt-0.5 text-[10px]',
      btnSize: 'xs',
    },
    sm: {
      container: 'py-6 px-4',
      iconBox: 'h-10 w-10 rounded-xl',
      iconSize: 'h-5 w-5',
      title: 'text-xs font-semibold',
      desc: 'mt-1 text-[11px]',
      btnSize: 'xs',
    },
    md: {
      container: 'py-10 px-4',
      iconBox: 'h-14 w-14 rounded-2xl',
      iconSize: 'h-6 w-6',
      title: 'text-sm font-semibold',
      desc: 'mt-1.5 text-xs',
      btnSize: 'sm',
    },
    lg: {
      container: 'py-16 px-6',
      iconBox: 'h-20 w-20 rounded-3xl',
      iconSize: 'h-8 w-8',
      title: 'text-base font-semibold',
      desc: 'mt-2 text-xs',
      btnSize: 'md',
    },
  }
  const activeStyle = sizeStyles[effectiveSize]

  return (
    <div
      data-testid="empty-state"
      data-motion={resolvedMotion}
      className={cn(
        'flex flex-col items-center justify-center text-center select-none',
        activeStyle.container,
        resolvedMotion !== 'none' && 'abc-animate-fade-in',
        className
      )}
    >
      <div
        data-testid="empty-state-icon"
        className={cn(
          'flex items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]',
          activeStyle.iconBox
        )}
      >
        {icon ?? <FolderSearch className={activeStyle.iconSize} />}
      </div>
      {title && (
        <h4
          data-testid="empty-state-title"
          className={cn('mt-3 text-[var(--abc-fg)]', activeStyle.title)}
        >
          {title}
        </h4>
      )}
      {description && (
        <p
          data-testid="empty-state-description"
          className={cn('max-w-sm leading-relaxed text-[var(--abc-fg-muted)]', activeStyle.desc)}
        >
          {description}
        </p>
      )}
      {(action || onReset) && (
        <div data-testid="empty-state-action" className="mt-4 flex items-center justify-center gap-2">
          {action ?? (
            <Button
              variant="secondary"
              size={activeStyle.btnSize}
              motion={resolvedMotion}
              icon={<RotateCcw className="h-3.5 w-3.5" />}
              onClick={onReset}
            >
              {resetText}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export interface PaginationCursorMeta {
  /** 游标模式：是否包含下一页数据 */
  hasNext?: boolean
  /** 游标模式：是否包含上一页数据 */
  hasPrev?: boolean
  /** 下一页游标标识符 */
  nextCursor?: string | null
  /** 上一页游标标识符 */
  prevCursor?: string | null
  /** 当前游标标识符 */
  currentCursor?: string | null
  /** 已加载累计记录数 */
  loadedCount?: number
  /** 点击下一页游标回调 */
  onNext?: () => void
  /** 点击上一页游标回调 */
  onPrev?: () => void
  /** 重置游标返回第一批/最新数据 */
  onResetCursor?: () => void
}

export interface PaginationProps extends Partial<PaginationCursorMeta> {
  /** 分页模式：'offset' 页码偏移模式（默认） | 'cursor' 游标时间线模式 */
  mode?: 'offset' | 'cursor'
  current?: number
  currentPage?: number
  page?: number
  pageSize?: number
  /** 每页条数（数字）或控件尺寸规格（xs/sm/md/lg） */
  size?: number | AbcSize
  /** 分页器控件尺寸规格（避免与数字型 pageSize 冲突时的显式指定入口） */
  controlSize?: AbcSize
  motion?: AbcMotionPreset
  total?: number
  pageSizeOptions?: number[]
  onChange?: (page: number, pageSize: number) => void
  onPageChange?: (page: number) => void
  onSizeChange?: (size: number) => void
  onPageSizeChange?: (size: number) => void
  showTotal?: boolean | ((total: number) => React.ReactNode)
  showQuickJumper?: boolean
  className?: string
  loading?: boolean
}

const PAGINATION_SIZE_MAP: Record<
  AbcSize,
  { wrap: string; select: string; navBtn: string; pageBtn: string; input: string }
> = {
  xs: {
    wrap: 'text-[11px]',
    select: 'h-6 px-1.5 text-[11px]',
    navBtn: 'h-6 w-6',
    pageBtn: 'h-6 min-w-6 px-1.5 text-[11px]',
    input: 'h-6 w-9 text-[11px]',
  },
  sm: {
    wrap: 'text-xs',
    select: 'h-7 px-2 text-xs',
    navBtn: 'h-7 w-7',
    pageBtn: 'h-7 min-w-7 px-2 text-xs',
    input: 'h-7 w-11 text-xs',
  },
  md: {
    wrap: 'text-sm',
    select: 'h-8 px-2.5 text-xs',
    navBtn: 'h-8 w-8',
    pageBtn: 'h-8 min-w-8 px-2.5 text-xs',
    input: 'h-8 w-12 text-xs',
  },
  lg: {
    wrap: 'text-sm',
    select: 'h-9 px-3 text-sm',
    navBtn: 'h-9 w-9',
    pageBtn: 'h-9 min-w-9 px-3 text-sm',
    input: 'h-9 w-14 text-sm',
  },
}

/** 企业级紧凑数据分页器（支持快速页码跳转、边界自动 Clamp、双模游标流水与零数据优雅提示） */
export const Pagination: React.FC<PaginationProps> = ({
  mode,
  current,
  currentPage,
  page,
  pageSize,
  size,
  controlSize,
  motion,
  total,
  pageSizeOptions = [10, 20, 50, 100],
  onChange,
  onPageChange,
  onSizeChange,
  onPageSizeChange,
  showTotal = true,
  showQuickJumper = true,
  className,
  hasNext,
  hasPrev,
  nextCursor: _nextCursor,
  prevCursor: _prevCursor,
  currentCursor: _currentCursor,
  loadedCount,
  onNext,
  onPrev,
  onResetCursor,
  loading = false,
}) => {
  const activePage = current ?? currentPage ?? page ?? 1
  const activeSize = pageSize ?? (typeof size === 'number' ? size : undefined) ?? 10
  const resolvedControlSize = useAbcSize(
    controlSize ?? (typeof size === 'string' ? size : undefined),
    'sm'
  )
  const resolvedMotion = useAbcMotion(motion)
  const sizeCls = PAGINATION_SIZE_MAP[resolvedControlSize]

  const resolvedMode: 'offset' | 'cursor' =
    mode ??
    (total === undefined && (hasNext !== undefined || hasPrev !== undefined || onNext !== undefined)
      ? 'cursor'
      : 'offset')

  const triggerSize = (nextSize: number) => {
    onChange?.(1, nextSize)
    onSizeChange?.(nextSize)
    onPageSizeChange?.(nextSize)
  }

  // 游标流水模式渲染
  if (resolvedMode === 'cursor') {
    return (
      <div
        data-testid="pagination-cursor"
        data-motion={resolvedMotion}
        className={cn(
          'flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none',
          sizeCls.wrap,
          className
        )}
      >
        <div className="flex items-center gap-2 font-mono tabular-nums">
          {showTotal === false ? null : typeof showTotal === 'function' ? (
            showTotal(loadedCount ?? 0)
          ) : loadedCount !== undefined ? (
            <span>
              已连续加载 <strong className="font-semibold text-[var(--abc-fg)]">{loadedCount}</strong> 条记录
            </span>
          ) : (
            <span className="text-xs text-[var(--abc-fg-muted)]">流水式游标分页</span>
          )}
          {onResetCursor && (
            <button
              type="button"
              onClick={onResetCursor}
              disabled={loading || !hasPrev}
              className="text-xs text-[var(--abc-primary)] hover:underline disabled:opacity-40 disabled:hover:no-underline cursor-pointer"
            >
              返回最新
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {pageSizeOptions && pageSizeOptions.length > 0 && onSizeChange && (
            <select
              aria-label="每页条数"
              value={activeSize}
              onChange={(e) => triggerSize(Number(e.target.value))}
              disabled={loading}
              className={cn(
                'rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none cursor-pointer',
                sizeCls.select
              )}
            >
              {pageSizeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt} 条/页
                </option>
              ))}
            </select>
          )}

          <button
            type="button"
            aria-label="上一页"
            disabled={!hasPrev || loading}
            onClick={onPrev}
            className={cn(
              'abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer',
              sizeCls.navBtn
            )}
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="text-xs">上一页</span>
          </button>

          <button
            type="button"
            aria-label="下一页"
            disabled={!hasNext || loading}
            onClick={onNext}
            className={cn(
              'abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer',
              sizeCls.navBtn
            )}
          >
            <span className="text-xs">下一页</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    )
  }

  // 标准 Offset 模式
  const safeTotal = total ?? 0
  const totalPages = Math.max(1, Math.ceil(safeTotal / Math.max(1, activeSize)))

  const [jumperVal, setJumperVal] = useState('')
  const lastJumpedRef = useRef<string | null>(null)

  if (safeTotal <= 0) {
    return (
      <div
        data-testid="pagination-empty"
        data-motion={resolvedMotion}
        className={cn(
          'flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none',
          sizeCls.wrap,
          className
        )}
      >
        <div>
          {showTotal === false ? null : typeof showTotal === 'function' ? (
            showTotal(0)
          ) : (
            <span>
              共 <strong className="font-mono font-semibold text-[var(--abc-fg)] tabular-nums">0</strong> 条记录
            </span>
          )}
        </div>
      </div>
    )
  }

  const triggerPage = (nextPage: number) => {
    const clamped = Math.min(Math.max(1, nextPage), totalPages)
    if (clamped === activePage) return
    onChange?.(clamped, activeSize)
    onPageChange?.(clamped)
  }

  const commitJump = () => {
    const raw = jumperVal.trim()
    if (!raw) {
      lastJumpedRef.current = null
      return
    }
    if (raw === lastJumpedRef.current) return
    const parsed = parseInt(raw, 10)
    if (Number.isNaN(parsed)) {
      setJumperVal('')
      lastJumpedRef.current = null
      return
    }
    const target = Math.min(Math.max(1, parsed), totalPages)
    lastJumpedRef.current = raw
    setJumperVal(String(target))
    triggerPage(target)
  }

  const pageItems: Array<number | '...'> = []
  if (totalPages <= 7) {
    for (let p = 1; p <= totalPages; p++) pageItems.push(p)
  } else {
    pageItems.push(1)
    if (activePage > 3) pageItems.push('...')
    const start = Math.max(2, activePage - 1)
    const end = Math.min(totalPages - 1, activePage + 1)
    for (let p = start; p <= end; p++) pageItems.push(p)
    if (activePage < totalPages - 2) pageItems.push('...')
    pageItems.push(totalPages)
  }

  return (
    <div
      data-motion={resolvedMotion}
      className={cn(
        'flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none',
        sizeCls.wrap,
        className
      )}
    >
      <div className="font-mono tabular-nums">
        {showTotal === false ? null : typeof showTotal === 'function' ? (
          showTotal(safeTotal)
        ) : (
          <span>
            共 <strong className="font-semibold text-[var(--abc-fg)]">{safeTotal}</strong> 条记录
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <select
          aria-label="每页条数"
          value={activeSize}
          onChange={(e) => triggerSize(Number(e.target.value))}
          className={cn(
            'rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none cursor-pointer',
            sizeCls.select
          )}
        >
          {pageSizeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt} 条/页
            </option>
          ))}
        </select>

        <button
          type="button"
          aria-label="上一页"
          disabled={activePage <= 1}
          onClick={() => triggerPage(activePage - 1)}
          className={cn(
            'abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer',
            sizeCls.navBtn
          )}
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>

        {pageItems.map((item, idx) =>
          item === '...' ? (
            <span key={`dots-${idx}`} className="px-1 text-[var(--abc-fg-muted)]">
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => triggerPage(item)}
              className={cn(
                'abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer',
                sizeCls.pageBtn,
                item === activePage
                  ? 'bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]'
                  : 'border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]'
              )}
            >
              {item}
            </button>
          )
        )}

        <button
          type="button"
          aria-label="下一页"
          disabled={activePage >= totalPages}
          onClick={() => triggerPage(activePage + 1)}
          className={cn(
            'abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer',
            sizeCls.navBtn
          )}
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>

        {showQuickJumper && (
          <div
            data-testid="pagination-quick-jumper"
            className="ml-1 flex items-center gap-1.5 text-[var(--abc-fg-muted)]"
          >
            <span>跳至</span>
            <input
              type="text"
              inputMode="numeric"
              aria-label="快速跳转页码"
              data-testid="pagination-quick-jumper-input"
              value={jumperVal}
              onChange={(e) => {
                lastJumpedRef.current = null
                setJumperVal(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  commitJump()
                }
              }}
              onBlur={commitJump}
              className={cn(
                'rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:outline-none',
                sizeCls.input
              )}
            />
            <span>页</span>
          </div>
        )}
      </div>
    </div>
  )
}

/** 游标流式分页器（专用于 CDP 抓包、高频作业队列等无深总数的大数据场景） */
export const CursorPagination: React.FC<PaginationProps> = (props) => (
  <Pagination mode="cursor" {...props} />
)

/** 智能双模分页器（自动根据是否提供 total 或游标属性平滑降级切换） */
export const SmartPagination: React.FC<PaginationProps> = (props) => <Pagination {...props} />

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded'
export type SkeletonAnimation = 'wave' | 'pulse' | 'none'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant
  animation?: SkeletonAnimation
  motion?: AbcMotionPreset
  width?: number | string
  height?: number | string
}

/**
 * 骨架屏占位原语
 * 复用 @abc-design/tokens 全局声明的 .abc-skeleton-wave，零运行时内联 <style> 注入
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  animation = 'pulse',
  motion,
  width,
  height,
  className,
  style,
  children,
  ...rest
}) => {
  const resolvedMotion = useAbcMotion(motion)
  const effectiveAnimation = resolvedMotion === 'none' ? 'none' : animation
  const computedStyle: React.CSSProperties = {
    ...style,
    ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    ...(height !== undefined ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
  }

  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      data-motion={resolvedMotion}
      style={computedStyle}
      className={cn(
        'bg-[var(--abc-bg-subtle)] bg-slate-200 dark:bg-slate-800',
        variant === 'circular' && 'rounded-full',
        variant === 'rectangular' && 'rounded-none',
        variant === 'rounded' && 'rounded-lg',
        variant === 'text' && cn('rounded-md', height === undefined && 'h-4'),
        effectiveAnimation === 'wave' && 'abc-skeleton-wave skeleton-wave',
        effectiveAnimation === 'pulse' && 'animate-pulse',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: SkeletonAnimation
}

/** 指标卡预设骨架屏（消除首屏 KPI 卡片 CLS 跳动） */
export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  animation = 'wave',
  className,
  ...rest
}) => (
  <div
    role="status"
    aria-busy="true"
    data-testid="skeleton-card"
    className={cn(
      'rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]',
      className
    )}
    {...rest}
  >
    <div className="flex items-center justify-between">
      <Skeleton variant="text" width="45%" height={15} animation={animation} data-testid="skeleton-card-title" />
      <Skeleton variant="rounded" width={34} height={34} animation={animation} data-testid="skeleton-card-icon" />
    </div>
    <div className="mt-2.5">
      <Skeleton variant="rounded" width="65%" height={30} animation={animation} data-testid="skeleton-card-value" />
    </div>
    <div className="mt-2">
      <Skeleton variant="text" width="50%" height={13} animation={animation} data-testid="skeleton-card-hint" />
    </div>
  </div>
)

export interface SkeletonTableProps extends React.HTMLAttributes<HTMLDivElement> {
  rows?: number
  columns?: number
  showHeader?: boolean
  animation?: SkeletonAnimation
}

/** 数据表格预设骨架屏 */
export const SkeletonTable: React.FC<SkeletonTableProps> = ({
  rows = 5,
  columns = 4,
  showHeader = true,
  animation = 'wave',
  className,
  ...rest
}) => (
  <div
    role="status"
    aria-busy="true"
    data-testid="skeleton-table"
    className={cn(
      'overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]',
      className
    )}
    {...rest}
  >
    <table className="w-full border-collapse">
      {showHeader && (
        <thead className="border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]">
          <tr>
            {Array.from({ length: columns }).map((_, cIdx) => (
              <th key={cIdx} className="px-4 py-3">
                <Skeleton
                  variant="text"
                  width={cIdx === 0 ? '60%' : '75%'}
                  height={14}
                  animation={animation}
                  data-testid="skeleton-table-head-cell"
                />
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody className="divide-y divide-[var(--abc-border)]">
        {Array.from({ length: rows }).map((_, rIdx) => (
          <tr key={rIdx} data-testid="skeleton-table-row">
            {Array.from({ length: columns }).map((_, cIdx) => (
              <td key={cIdx} className="px-4 py-3">
                <Skeleton
                  variant="text"
                  width={`${Math.max(40, 85 - ((rIdx + cIdx) % 4) * 15)}%`}
                  height={14}
                  animation={animation}
                  data-testid="skeleton-table-cell"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export interface SkeletonChartProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number | string
  animation?: SkeletonAnimation
}

/** 图表容器预设骨架屏（用于报表页异步加载阶段防 CLS） */
export const SkeletonChart: React.FC<SkeletonChartProps> = ({
  height = 288,
  animation = 'wave',
  className,
  style,
  ...rest
}) => (
  <div
    role="status"
    aria-busy="true"
    data-testid="skeleton-chart"
    style={{ ...style, height: typeof height === 'number' ? `${height}px` : height }}
    className={cn(
      'relative flex w-full flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 p-4',
      className
    )}
    {...rest}
  >
    <div className="flex items-center justify-end gap-3">
      <Skeleton variant="text" width={60} height={12} animation={animation} />
      <Skeleton variant="text" width={60} height={12} animation={animation} />
    </div>
    <div className="flex h-44 items-end justify-between gap-2 px-2 pt-4">
      {[45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((pct, idx) => (
        <div key={idx} className="flex h-full flex-1 flex-col items-center justify-end">
          <Skeleton
            variant="rounded"
            height={`${pct}%`}
            width="80%"
            animation={animation}
            className="rounded-t-md"
          />
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between border-t border-[var(--abc-border)] pt-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} variant="text" width={36} height={10} animation={animation} />
      ))}
    </div>
  </div>
)
