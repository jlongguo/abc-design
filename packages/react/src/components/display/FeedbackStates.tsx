import React from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { FolderSearch, RotateCcw } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks'
import { cn } from '../../utils/cn'
import Button from '../button/Button'
export {
  Pagination,
  CursorPagination,
  OffsetPagination,
  SmartPagination,
  type PaginationCursorMeta,
  type PaginationProps,
  type CursorPaginationProps,
  type OffsetPaginationProps,
} from './Pagination'

export interface EmptyStateProps {
  title?: React.ReactNode
  /** title 语义兼容别名 */
  message?: React.ReactNode
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
  title,
  message,
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
  const resolvedTitle = title !== undefined ? title : (message !== undefined ? message : '暂无匹配数据')
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
      {resolvedTitle && (
        <h4
          data-testid="empty-state-title"
          className={cn('mt-3 text-[var(--abc-fg)]', activeStyle.title)}
        >
          {resolvedTitle}
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
        'bg-[var(--abc-bg-subtle)]',
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
