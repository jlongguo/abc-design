import * as React from 'react'
import { cn } from '../../utils/cn'

export type StatCardTone =
  | 'default'
  | 'surface'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'

export type StatCardSize = 'sm' | 'default' | 'lg'

export interface StatCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 指标或属性名称（渲染为语义化的 dt 标签，兼容嵌入 dl 描述列表） */
  label: React.ReactNode
  /** 指标主数值或内容（渲染为 dd 标签） */
  value: React.ReactNode
  /** 左侧装饰图标 */
  icon?: React.ReactNode
  /** 底部辅助说明或次要提示 */
  hint?: React.ReactNode
  /** 右上角徽标或附加标签 */
  badge?: React.ReactNode
  /** 数值右侧趋势或对比说明 */
  trend?: React.ReactNode
  /** 数值是否使用等宽字体（默认开启以保证 tabular-nums 垂直对齐） */
  mono?: boolean
  /** 卡片语义色调 */
  tone?: StatCardTone
  /** 尺寸规格 */
  size?: StatCardSize
  /** 数值容器附加类名 */
  valueClassName?: string
  /** 卡片底部扩展插槽（如进度条或补充指标） */
  children?: React.ReactNode
}

const TONE_CLASS: Record<StatCardTone, string> = {
  default:
    'border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 text-[var(--abc-fg)] hover:border-[var(--abc-border-strong)]',
  surface:
    'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] hover:border-[var(--abc-primary)]/40',
  primary:
    'border-[var(--abc-info-border,var(--abc-border))] bg-[var(--abc-info-soft,var(--abc-primary-soft))] text-[var(--abc-fg)]',
  success:
    'border-[var(--abc-success-border,var(--abc-border))] bg-[var(--abc-success-soft)] text-[var(--abc-fg)]',
  warning:
    'border-[var(--abc-warning-border,var(--abc-border))] bg-[var(--abc-warning-soft)] text-[var(--abc-fg)]',
  danger:
    'border-[var(--abc-danger-border,var(--abc-border))] bg-[var(--abc-danger-soft)] text-[var(--abc-fg)]',
}

const SIZE_CLASS: Record<StatCardSize, string> = {
  sm: 'p-3',
  default: 'p-4',
  lg: 'p-5',
}

/**
 * 统一指标与键值摘要卡片组件 (StatCard)
 * 零三方图表依赖，兼容嵌套在 <dl> 描述列表与网格布局中
 */
export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  hint,
  badge,
  trend,
  mono = true,
  tone = 'default',
  size = 'default',
  className,
  valueClassName,
  children,
  ...props
}) => {
  return (
    <div
      data-slot="stat-card"
      className={cn(
        'min-w-0 rounded-xl border shadow-xs transition-all duration-150',
        TONE_CLASS[tone],
        SIZE_CLASS[size],
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 text-[var(--abc-fg-muted)]">
          {icon && <span className="shrink-0 opacity-80">{icon}</span>}
          <dt className="text-xs font-medium text-[var(--abc-fg-muted)]">{label}</dt>
        </div>
        {badge}
      </div>
      <dd
        className={cn(
          'mt-2 flex flex-wrap items-baseline gap-2 break-all font-semibold tracking-tight text-[var(--abc-fg)] tabular-nums',
          size === 'lg' ? 'text-xl sm:text-2xl' : size === 'sm' ? 'text-sm' : 'text-base',
          mono && 'font-mono',
          valueClassName
        )}
      >
        <span>{value}</span>
        {trend && <span className="text-xs font-medium text-[var(--abc-fg-muted)]">{trend}</span>}
      </dd>
      {hint && (
        <div className="mt-1.5 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]">{hint}</div>
      )}
      {children}
    </div>
  )
}

StatCard.displayName = 'StatCard'
export default StatCard
