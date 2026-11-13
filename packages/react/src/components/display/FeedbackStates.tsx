import React, { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, FolderSearch, RotateCcw } from 'lucide-react'
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
  size?: 'sm' | 'md' | 'lg'
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
  size = 'md',
  compact = false,
  className,
}) => {
  const effectiveSize = compact ? 'sm' : size
  const sizeStyles = {
    sm: {
      container: 'py-6 px-4',
      iconBox: 'h-10 w-10 rounded-xl',
      iconSize: 'h-5 w-5',
      title: 'text-xs font-semibold',
      desc: 'mt-1 text-[11px]',
      btnSize: 'xs' as const,
    },
    md: {
      container: 'py-10 px-4',
      iconBox: 'h-14 w-14 rounded-2xl',
      iconSize: 'h-6 w-6',
      title: 'text-sm font-semibold',
      desc: 'mt-1.5 text-xs',
      btnSize: 'sm' as const,
    },
    lg: {
      container: 'py-16 px-6',
      iconBox: 'h-20 w-20 rounded-3xl',
      iconSize: 'h-8 w-8',
      title: 'text-base font-semibold',
      desc: 'mt-2 text-xs',
      btnSize: 'md' as const,
    },
  }[effectiveSize]

  return (
    <div
      data-testid="empty-state"
      className={cn(
        'flex flex-col items-center justify-center text-center select-none',
        sizeStyles.container,
        className
      )}
    >
      <div
        data-testid="empty-state-icon"
        className={cn(
          'flex items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]',
          sizeStyles.iconBox
        )}
      >
        {icon ?? <FolderSearch className={sizeStyles.iconSize} />}
      </div>
      {title && (
        <h4
          data-testid="empty-state-title"
          className={cn('mt-3 text-[var(--abc-fg)]', sizeStyles.title)}
        >
          {title}
        </h4>
      )}
      {description && (
        <p
          data-testid="empty-state-description"
          className={cn('max-w-sm leading-relaxed text-[var(--abc-fg-muted)]', sizeStyles.desc)}
        >
          {description}
        </p>
      )}
      {(action || onReset) && (
        <div data-testid="empty-state-action" className="mt-4 flex items-center justify-center gap-2">
          {action ?? (
            <Button
              variant="secondary"
              size={sizeStyles.btnSize}
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

export interface PaginationProps {
  current?: number
  currentPage?: number
  page?: number
  pageSize?: number
  size?: number
  total: number
  pageSizeOptions?: number[]
  onChange?: (page: number, pageSize: number) => void
  onPageChange?: (page: number) => void
  onSizeChange?: (size: number) => void
  onPageSizeChange?: (size: number) => void
  showTotal?: boolean | ((total: number) => React.ReactNode)
  showQuickJumper?: boolean
  className?: string
}

/** 企业级紧凑数据分页器（支持快速页码跳转、边界自动 Clamp 与零数据优雅提示） */
export const Pagination: React.FC<PaginationProps> = ({
  current,
  currentPage,
  page,
  pageSize,
  size,
  total,
  pageSizeOptions = [10, 20, 50, 100],
  onChange,
  onPageChange,
  onSizeChange,
  onPageSizeChange,
  showTotal = true,
  showQuickJumper = true,
  className,
}) => {
  const activePage = current ?? currentPage ?? page ?? 1
  const activeSize = pageSize ?? size ?? 10
  const totalPages = Math.max(1, Math.ceil(total / Math.max(1, activeSize)))

  const [jumperVal, setJumperVal] = useState('')
  const lastJumpedRef = useRef<string | null>(null)

  if (total <= 0) {
    return (
      <div
        data-testid="pagination-empty"
        className={cn(
          'flex flex-wrap items-center justify-between gap-3 py-1 text-xs text-[var(--abc-fg-muted)] select-none',
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

  const triggerSize = (nextSize: number) => {
    onChange?.(1, nextSize)
    onSizeChange?.(nextSize)
    onPageSizeChange?.(nextSize)
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
      className={cn(
        'flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--abc-fg-muted)] select-none',
        className
      )}
    >
      <div className="font-mono tabular-nums">
        {showTotal === false ? null : typeof showTotal === 'function' ? (
          showTotal(total)
        ) : (
          <span>
            共 <strong className="font-semibold text-[var(--abc-fg)]">{total}</strong> 条记录
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <select
          aria-label="每页条数"
          value={activeSize}
          onChange={(e) => triggerSize(Number(e.target.value))}
          className="h-7 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-xs text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none cursor-pointer"
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
          className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer"
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
                'inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--abc-radius-sm)] px-2 font-mono text-xs tabular-nums transition-colors cursor-pointer',
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
          className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer"
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
              className="h-7 w-11 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:outline-none"
            />
            <span>页</span>
          </div>
        )}
      </div>
    </div>
  )
}

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded'
export type SkeletonAnimation = 'wave' | 'pulse' | 'none'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant
  animation?: SkeletonAnimation
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
  width,
  height,
  className,
  style,
  children,
  ...rest
}) => {
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
      style={computedStyle}
      className={cn(
        'bg-[var(--abc-bg-subtle)] bg-slate-200 dark:bg-slate-800',
        variant === 'circular' && 'rounded-full',
        variant === 'rectangular' && 'rounded-none',
        variant === 'rounded' && 'rounded-lg',
        variant === 'text' && cn('rounded-md', height === undefined && 'h-4'),
        animation === 'wave' && 'abc-skeleton-wave skeleton-wave',
        animation === 'pulse' && 'animate-pulse',
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
