import React from 'react'
import { Card, Skeleton, StatusTag } from '@abc-design/react'
import clsx from 'clsx'

export interface StatCardProps {
  /** 指标标题 */
  title: React.ReactNode
  /** 核心数值展示 */
  value: React.ReactNode
  /** 数值前缀（如 ¥ / $） */
  prefix?: React.ReactNode
  /** 数值后缀（如 % / 次 / GB） */
  suffix?: React.ReactNode
  /** 环比/同比趋势百分比（正数渲染上升绿标，负数渲染下降红标，0 渲染中性灰标） */
  trend?: number
  /** 趋势对比说明文字（如“较昨日”） */
  trendLabel?: React.ReactNode
  /** 右上角装饰图标 */
  icon?: React.ReactNode
  /** 底部补充信息或迷你趋势图插槽 */
  footer?: React.ReactNode
  /** 加载骨架态 */
  loading?: boolean
  className?: string
}

/**
 * 企业级大盘核心经营指标卡 (StatCard)
 * 内置等宽数字对齐 (tabular-nums)、同环比涨跌徽标与底部迷你图插槽
 */
export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  trend,
  trendLabel = '较上周期',
  icon,
  footer,
  loading = false,
  className,
}) => {
  if (loading) {
    return (
      <Card className={className}>
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-36" />
          <Skeleton className="h-3.5 w-28" />
        </div>
      </Card>
    )
  }

  const trendTone =
    trend === undefined ? 'neutral' : trend > 0 ? 'success' : trend < 0 ? 'danger' : 'neutral'
  const trendText =
    trend === undefined ? null : `${trend > 0 ? '+' : ''}${trend.toFixed(1)}%`

  return (
    <Card
      hoverable
      className={clsx('relative overflow-hidden transition-all', className)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 space-y-1.5">
          <div className="text-xs font-medium text-[var(--abc-fg-muted)]">{title}</div>
          <div className="flex items-baseline gap-1 font-mono text-2xl font-bold tracking-tight text-[var(--abc-fg)] tabular-nums">
            {prefix && <span className="text-sm font-medium text-[var(--abc-fg-muted)]">{prefix}</span>}
            <span>{value}</span>
            {suffix && <span className="text-xs font-normal text-[var(--abc-fg-muted)]">{suffix}</span>}
          </div>
        </div>
        {icon && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]">
            {icon}
          </div>
        )}
      </div>

      {(trendText || footer) && (
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs">
          {trendText ? (
            <div className="flex items-center gap-1.5">
              <StatusTag tone={trendTone}>{trendText}</StatusTag>
              <span className="text-[var(--abc-fg-muted)]">{trendLabel}</span>
            </div>
          ) : (
            <span />
          )}
          {footer && <div className="text-[var(--abc-fg-muted)] truncate">{footer}</div>}
        </div>
      )}
    </Card>
  )
}

export default StatCard
