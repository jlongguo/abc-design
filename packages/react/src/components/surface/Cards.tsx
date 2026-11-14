import React, { createContext, useContext, useId } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, Minus, Sparkles, X } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'
import Button from '../button/Button'
import { Skeleton } from '../display/FeedbackStates'

const SURFACE_PAD: Record<AbcSize, string> = {
  xs: 'p-2.5',
  sm: 'p-3.5',
  md: 'p-4',
  lg: 'p-5',
}

const TITLE_TEXT: Record<AbcSize, string> = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

const DESC_TEXT: Record<AbcSize, string> = {
  xs: 'text-[11px]',
  sm: 'text-xs',
  md: 'text-xs',
  lg: 'text-sm',
}

const METRIC_VALUE_TEXT: Record<AbcSize, string> = {
  xs: 'text-lg',
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
}

const ICON_BOX_SIZE: Record<AbcSize, string> = {
  xs: 'h-7 w-7',
  sm: 'h-8 w-8',
  md: 'h-9 w-9',
  lg: 'h-11 w-11',
}

/* ==================== 1. MetricCard 轻量级 KPI 指标卡 ==================== */

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

/* ==================== 2. CheckCard / CheckCardGroup 选择卡片 ==================== */

export type CheckCardValue = string | number

interface CheckCardGroupContextValue {
  multiple: boolean
  value: CheckCardValue | CheckCardValue[] | undefined
  disabled?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
  name: string
  toggleValue: (itemVal: CheckCardValue) => void
}

const CheckCardGroupContext = createContext<CheckCardGroupContextValue | null>(null)

export interface CheckCardGroupProps {
  multiple?: boolean
  value?: CheckCardValue | CheckCardValue[]
  defaultValue?: CheckCardValue | CheckCardValue[]
  onChange?: (nextValue: CheckCardValue | CheckCardValue[]) => void
  disabled?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
  columns?: 1 | 2 | 3 | 4
  className?: string
  children: React.ReactNode
}

const GROUP_COLS_CLASS: Record<NonNullable<CheckCardGroupProps['columns']>, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

/**
 * 表单选择卡片组 (CheckCardGroup)
 * 支持单选与多选模式，通过原生语义 input 保证键盘方向键/空格操作与读屏器兼容
 */
export const CheckCardGroup: React.FC<CheckCardGroupProps> = ({
  multiple = false,
  value: controlledValue,
  defaultValue,
  onChange,
  disabled = false,
  size,
  motion,
  columns = 2,
  className,
  children,
}) => {
  const groupName = useId()
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)

  const [value, setValue] = useControllableState<CheckCardValue | CheckCardValue[]>({
    value: controlledValue,
    defaultValue: defaultValue ?? (multiple ? [] : ''),
    onChange,
  })

  const toggleValue = (itemVal: CheckCardValue) => {
    if (disabled) return
    if (multiple) {
      const currentArr = Array.isArray(value) ? value : []
      const exists = currentArr.includes(itemVal)
      const next = exists ? currentArr.filter((v) => v !== itemVal) : [...currentArr, itemVal]
      setValue(next)
    } else {
      setValue(itemVal)
    }
  }

  return (
    <CheckCardGroupContext.Provider
      value={{
        multiple,
        value,
        disabled,
        size: resolvedSize,
        motion: resolvedMotion,
        name: groupName,
        toggleValue,
      }}
    >
      <div
        role={multiple ? 'group' : 'radiogroup'}
        data-motion={resolvedMotion}
        className={cn('grid gap-3', GROUP_COLS_CLASS[columns], className)}
      >
        {children}
      </div>
    </CheckCardGroupContext.Provider>
  )
}

export interface CheckCardProps {
  value?: CheckCardValue
  title: React.ReactNode
  description?: React.ReactNode
  avatar?: React.ReactNode
  icon?: React.ReactNode
  extra?: React.ReactNode
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
  children?: React.ReactNode
}

/**
 * 可勾选卡片 (CheckCard)
 * 选中态仅改变边框颜色与微阴影/背景，绝不改变 border-width、padding 或 font-weight 以彻底消除重排抖动
 */
export const CheckCard: React.FC<CheckCardProps> = ({
  value,
  title,
  description,
  avatar,
  icon,
  extra,
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  disabled: disabledProp = false,
  size,
  motion,
  className,
  children,
}) => {
  const group = useContext(CheckCardGroupContext)
  const resolvedSize = useAbcSize(size ?? group?.size, 'md')
  const resolvedMotion = useAbcMotion(motion ?? group?.motion)
  const isDisabled = Boolean(disabledProp || group?.disabled)
  const isGrouped = Boolean(group && value !== undefined)
  const inputType = group && !group.multiple ? 'radio' : 'checkbox'

  const [standaloneChecked, setStandaloneChecked] = useControllableState<boolean>({
    value: controlledChecked,
    defaultValue: defaultChecked,
    onChange,
  })

  const isChecked = isGrouped
    ? group!.multiple
      ? Array.isArray(group!.value) && group!.value.includes(value!)
      : group!.value === value
    : standaloneChecked

  const handleToggle = (next: boolean) => {
    if (isDisabled) return
    if (isGrouped) {
      group!.toggleValue(value!)
    } else {
      setStandaloneChecked(next)
    }
  }

  return (
    <label
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      data-checked={isChecked ? 'true' : 'false'}
      className={cn(
        '@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none',
        SURFACE_PAD[resolvedSize],
        isChecked
          ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-primary)]/20'
          : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)]',
        !isDisabled && !isChecked && 'hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/50',
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        'has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--abc-ring)] has-[:focus-visible]:ring-offset-1',
        className
      )}
    >
      <input
        type={inputType}
        name={group?.name}
        value={value !== undefined ? String(value) : undefined}
        checked={Boolean(isChecked)}
        disabled={isDisabled}
        onChange={(e) => handleToggle(e.target.checked)}
        className="sr-only"
      />

      {(avatar || icon) && (
        <span
          className={cn(
            'inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]',
            ICON_BOX_SIZE[resolvedSize]
          )}
        >
          {avatar ?? icon}
        </span>
      )}

      <div className="min-w-0 flex-1 pr-5">
        <div className="flex items-center justify-between gap-2">
          <span className={cn('font-semibold text-[var(--abc-fg)]', TITLE_TEXT[resolvedSize])}>
            {title}
          </span>
          {extra && <span className="shrink-0">{extra}</span>}
        </div>
        {description && (
          <p className={cn('mt-1 leading-relaxed text-[var(--abc-fg-muted)]', DESC_TEXT[resolvedSize])}>
            {description}
          </p>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>

      {/* 右上角选中状态徽标（仅绝对定位出现，不挤压任何文字宽度） */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-2.5 right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors',
          isChecked
            ? 'abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
            : 'border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent'
        )}
      >
        <Check className="h-3 w-3" />
      </span>
    </label>
  )
}

/* ==================== 3. ActionCard 语义化快捷入口卡 ==================== */

export interface ActionCardProps {
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  tags?: string[]
  /** 独立右上角次要动作插槽（z-10 独立捕获点击，不触发整卡主跳转） */
  extra?: React.ReactNode
  href?: string
  target?: string
  disabled?: boolean
  onClick?: () => void
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
}

/**
 * 快捷入口与工作台导航卡片 (ActionCard)
 * 基于 ::after 拉伸点击热区实现语义化整卡可点击（主动作落在真实 <a> / <button> 上，次要按钮通过 z-10 隔离冒泡）
 */
export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  icon,
  tags,
  extra,
  href,
  target,
  disabled = false,
  onClick,
  size,
  motion,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const isInteractive = Boolean((href || onClick) && !disabled)

  const triggerClass =
    'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]'

  return (
    <article
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      className={cn(
        '@container relative flex flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        SURFACE_PAD[resolvedSize],
        isInteractive &&
          'abc-motion-surface cursor-pointer transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-primary)]/60 hover:shadow-sm',
        disabled && 'opacity-55 cursor-not-allowed',
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex min-w-0 items-center gap-2.5">
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
            <h3 className={cn('min-w-0 truncate', TITLE_TEXT[resolvedSize])}>
              {href && !disabled ? (
                <a
                  href={href}
                  target={target}
                  rel={target === '_blank' ? 'noreferrer' : undefined}
                  onClick={() => onClick?.()}
                  className={cn(triggerClass, 'hover:text-[var(--abc-primary)]')}
                >
                  {title}
                </a>
              ) : onClick && !disabled ? (
                <button
                  type="button"
                  onClick={onClick}
                  className={cn(triggerClass, 'cursor-pointer hover:text-[var(--abc-primary)]')}
                >
                  {title}
                </button>
              ) : (
                title
              )}
            </h3>
          </div>

          {extra && <div className="relative z-10 flex shrink-0 items-center gap-1">{extra}</div>}
        </div>

        {description && (
          <p className={cn('mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]', DESC_TEXT[resolvedSize])}>
            {description}
          </p>
        )}
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--abc-radius-xs)] border border-[var(--abc-border-subtle)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--abc-fg-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

/* ==================== 4. CollapsibleCard 可折叠详情分组卡 ==================== */

export interface CollapsibleCardProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  icon?: React.ReactNode
  extra?: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
  bodyClassName?: string
  children: React.ReactNode
}

const HEADER_BTN_PAD: Record<AbcSize, string> = {
  xs: 'px-3 py-2',
  sm: 'px-3.5 py-2.5',
  md: 'px-4 py-3',
  lg: 'px-5 py-3.5',
}

/**
 * 可折叠详情分组卡片 (CollapsibleCard)
 * 使用 CSS Grid 0fr -> 1fr 平滑高度过渡，适合参数配置高级选项与多区块巡检详情
 */
export const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  title,
  subtitle,
  icon,
  extra,
  defaultOpen = true,
  open: controlledOpen,
  onOpenChange,
  size,
  motion,
  className,
  bodyClassName,
  children,
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const panelId = useId()
  const [isOpen, setIsOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  })

  return (
    <section
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      className={cn(
        '@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        className
      )}
    >
      <div className={cn('flex items-center justify-between gap-3', HEADER_BTN_PAD[resolvedSize])}>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}
          className="flex min-w-0 flex-1 items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)]"
        >
          <ChevronDown
            className={cn(
              'h-4 w-4 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-base)]',
              isOpen ? 'rotate-0 text-[var(--abc-primary)]' : '-rotate-90'
            )}
          />
          {icon && <span className="shrink-0 text-[var(--abc-primary)]">{icon}</span>}
          <div className="min-w-0 flex-1">
            <div className={cn('truncate font-semibold text-[var(--abc-fg)]', TITLE_TEXT[resolvedSize])}>
              {title}
            </div>
            {subtitle && (
              <div className="truncate text-[11px] text-[var(--abc-fg-muted)]">{subtitle}</div>
            )}
          </div>
        </button>

        {extra && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex shrink-0 items-center gap-2"
          >
            {extra}
          </div>
        )}
      </div>

      <div id={panelId} className="abc-collapse-grid" data-open={isOpen}>
        <div className="abc-collapse-inner">
          <div
            className={cn(
              'border-t border-[var(--abc-border)]',
              SURFACE_PAD[resolvedSize],
              bodyClassName
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==================== 5. PricingCard SaaS 套餐订阅对比卡 ==================== */

export interface PricingFeatureItem {
  text: React.ReactNode
  included?: boolean
}

export interface PricingCardProps {
  tier: React.ReactNode
  price: React.ReactNode
  period?: React.ReactNode
  description?: React.ReactNode
  features: Array<PricingFeatureItem | string>
  recommended?: boolean
  badge?: React.ReactNode
  ctaText?: string
  disabled?: boolean
  loading?: boolean
  onSelect?: () => void
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
}

/**
 * SaaS 租户套餐订阅对比卡 (PricingCard)
 */
export const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  price,
  period = '/ 月',
  description,
  features,
  recommended = false,
  badge = '推荐方案',
  ctaText = '选择此方案',
  disabled = false,
  loading = false,
  onSelect,
  size,
  motion,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)

  return (
    <article
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      className={cn(
        '@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]',
        SURFACE_PAD[resolvedSize],
        recommended
          ? 'border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15'
          : 'border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]',
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className={cn('font-bold text-[var(--abc-fg)]', TITLE_TEXT[resolvedSize])}>{tier}</h3>
          {recommended && badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]">
              <Sparkles className="h-2.5 w-2.5" />
              {badge}
            </span>
          )}
        </div>

        {description && (
          <p className={cn('mt-1.5 text-[var(--abc-fg-muted)]', DESC_TEXT[resolvedSize])}>
            {description}
          </p>
        )}

        <div className="mt-4 flex items-baseline gap-1 font-mono tabular-nums">
          <span className={cn('font-extrabold text-[var(--abc-fg)]', METRIC_VALUE_TEXT[resolvedSize])}>
            {price}
          </span>
          {period && <span className="text-xs text-[var(--abc-fg-muted)]">{period}</span>}
        </div>

        <ul className="mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4">
          {features.map((item, idx) => {
            const norm: PricingFeatureItem =
              typeof item === 'string' ? { text: item, included: true } : item
            const included = norm.included !== false
            return (
              <li
                key={idx}
                className={cn(
                  'flex items-start gap-2 text-xs',
                  included ? 'text-[var(--abc-fg-secondary)]' : 'text-[var(--abc-fg-placeholder)] line-through'
                )}
              >
                {included ? (
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" />
                ) : (
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" />
                )}
                <span>{norm.text}</span>
              </li>
            )
          })}
        </ul>
      </div>

      {onSelect && (
        <div className="mt-5">
          <Button
            variant={recommended ? 'primary' : 'secondary'}
            size={resolvedSize}
            motion={resolvedMotion}
            block
            disabled={disabled}
            loading={loading}
            onClick={onSelect}
          >
            {ctaText}
          </Button>
        </div>
      )}
    </article>
  )
}

/* ==================== 6. BentoGrid / BentoCard 异构网格系统 ==================== */

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4
  gap?: AbcSize
}

const BENTO_COLS: Record<NonNullable<BentoGridProps['columns']>, string> = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

/** 现代 Bento 异构仪表盘网格容器 */
export const BentoGrid: React.FC<BentoGridProps> = ({
  columns = 3,
  gap,
  className,
  children,
  ...rest
}) => {
  const resolvedGap = useAbcSize(gap, 'md')
  return (
    <div
      className={cn(
        'grid auto-rows-[minmax(148px,auto)]',
        BENTO_COLS[columns],
        GAP_MAP_LOCAL[resolvedGap],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

const GAP_MAP_LOCAL: Record<AbcSize, string> = {
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-5',
}

export interface BentoCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  graphic?: React.ReactNode
  footer?: React.ReactNode
  hoverable?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
}

/** Bento 网格单卡（支持跨列/跨行特性视觉呈现与微交互上浮） */
export const BentoCard: React.FC<BentoCardProps> = ({
  colSpan = 1,
  rowSpan = 1,
  eyebrow,
  title,
  description,
  icon,
  graphic,
  footer,
  hoverable = true,
  size,
  motion,
  className,
  children,
  ...rest
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)

  const colSpanClass =
    colSpan === 2
      ? 'md:col-span-2'
      : colSpan === 3
        ? 'md:col-span-2 lg:col-span-3'
        : ''
  const rowSpanClass = rowSpan === 2 ? 'row-span-2' : ''

  return (
    <article
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      className={cn(
        '@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        SURFACE_PAD[resolvedSize],
        colSpanClass,
        rowSpanClass,
        hoverable &&
          'abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md',
        className
      )}
      {...rest}
    >
      <div>
        {(eyebrow || icon) && (
          <div className="mb-2 flex items-center justify-between gap-2">
            {eyebrow ? (
              <span className="text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase">
                {eyebrow}
              </span>
            ) : (
              <span />
            )}
            {icon && <span className="text-[var(--abc-fg-muted)]">{icon}</span>}
          </div>
        )}
        <h3 className={cn('font-bold text-[var(--abc-fg)]', TITLE_TEXT[resolvedSize])}>{title}</h3>
        {description && (
          <p className={cn('mt-1 leading-relaxed text-[var(--abc-fg-muted)]', DESC_TEXT[resolvedSize])}>
            {description}
          </p>
        )}
      </div>

      {graphic && <div className="my-3 overflow-hidden rounded-[var(--abc-radius-md)]">{graphic}</div>}
      {children}

      {footer && (
        <div className="mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]">
          {footer}
        </div>
      )}
    </article>
  )
}
