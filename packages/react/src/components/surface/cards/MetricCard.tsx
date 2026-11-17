import React, { useId } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../../hooks'
import { cn } from '../../../utils/cn'
import { Skeleton } from '../../display/FeedbackStates'
import { ICON_BOX_SIZE, METRIC_VALUE_TEXT, SURFACE_PAD } from './shared'

export interface MetricCardTrend {
  value: string | number
  direction?: 'up' | 'down' | 'flat'
  label?: string
}

export interface MetricCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'prefix'> {
  title: React.ReactNode
  value: React.ReactNode
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  trend?: MetricCardTrend
  /** 轻量迷你走势折线数值序列（零 ECharts 依赖，直接渲染响应式内联 SVG） */
  sparkline?: number[]
  icon?: React.ReactNode
  footer?: React.ReactNode
  loading?: boolean
  hoverable?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
}

/**
 * 轻量级 KPI 指标卡 (MetricCard)
 * 内置趋势箭头徽标与纯 SVG 迷你折线走势图，无需加载重量级图表库即可用于密集仪表盘网格
 */
export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  trend,
  sparkline,
  icon,
  footer,
  loading = false,
  hoverable = true,
  size,
  motion,
  className,
  ...rest
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const gradId = useId().replace(/:/g, '')

  const sparkMeta = React.useMemo(() => {
    if (!sparkline || sparkline.length < 2) return null
    const min = Math.min(...sparkline)
    const max = Math.max(...sparkline)
    const span = max - min || 1
    const width = 120
    const height = 32
    const pts = sparkline.map((v, idx) => {
      const x = (idx / (sparkline.length - 1)) * width
      const y = height - 4 - ((v - min) / span) * (height - 8)
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    const linePath = `M ${pts.join(' L ')}`
    const areaPath = `${linePath} L ${width},${height} L 0,${height} Z`
    return { linePath, areaPath, width, height }
  }, [sparkline])

  const trendColor =
    trend?.direction === 'up'
      ? 'bg-[var(--abc-success-soft)] text-[var(--abc-success)]'
      : trend?.direction === 'down'
        ? 'bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]'
        : 'bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]'

  return (
    <article
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      className={cn(
        '@container relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        SURFACE_PAD[resolvedSize],
        hoverable &&
          'abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm',
        className
      )}
      {...rest}
    >
      {loading ? (
        <div className="space-y-2.5" aria-busy="true">
          <div className="flex items-center justify-between">
            <Skeleton width="45%" height={13} motion={resolvedMotion} />
            <Skeleton variant="rounded" width={30} height={30} motion={resolvedMotion} />
          </div>
          <Skeleton width="60%" height={26} motion={resolvedMotion} />
          <Skeleton width="80%" height={18} motion={resolvedMotion} />
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-2">
            <span className="truncate text-xs font-medium text-[var(--abc-fg-muted)]">{title}</span>
            {icon && (
              <span
                className={cn(
                  'inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]',
                  ICON_BOX_SIZE[resolvedSize]
                )}
              >
                {icon}
              </span>
            )}
          </div>

          <div className="mt-2 flex items-baseline gap-1.5 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums">
            {prefix && <span className="text-sm font-medium text-[var(--abc-fg-muted)]">{prefix}</span>}
            <span className={METRIC_VALUE_TEXT[resolvedSize]}>{value}</span>
            {suffix && <span className="text-xs font-medium text-[var(--abc-fg-muted)]">{suffix}</span>}
          </div>

          {(trend || sparkMeta) && (
            <div className="mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between">
              {trend && (
                <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                  <span
                    className={cn(
                      'inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono font-semibold tabular-nums',
                      trendColor
                    )}
                  >
                    {trend.direction === 'up' ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : trend.direction === 'down' ? (
                      <ArrowDownRight className="h-3 w-3" />
                    ) : (
                      <Minus className="h-3 w-3" />
                    )}
                    {trend.value}
                  </span>
                  {trend.label && <span className="text-[var(--abc-fg-muted)]">{trend.label}</span>}
                </div>
              )}

              {sparkMeta && (
                <svg
                  viewBox={`0 0 ${sparkMeta.width} ${sparkMeta.height}`}
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="h-7 w-24 shrink-0 overflow-visible"
                >
                  <defs>
                    <linearGradient id={`abc-spark-${gradId}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--abc-primary)" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="var(--abc-primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={sparkMeta.areaPath} fill={`url(#abc-spark-${gradId})`} />
                  <path
                    d={sparkMeta.linePath}
                    fill="none"
                    stroke="var(--abc-primary)"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          )}

          {footer && (
            <div className="mt-3 border-t border-[var(--abc-border-subtle)] pt-2 text-[11px] text-[var(--abc-fg-muted)]">
              {footer}
            </div>
          )}
        </>
      )}
    </article>
  )
}
