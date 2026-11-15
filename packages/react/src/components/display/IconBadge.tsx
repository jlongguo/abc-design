import * as React from 'react'
import { cn } from '../../utils/cn'

export interface IconBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode
  label: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'xs' | 'sm' | 'md'
}

const variantStyles: Record<NonNullable<IconBadgeProps['variant']>, string> = {
  default: 'border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]',
  success: 'border-emerald-500/30 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300',
  warning: 'border-amber-500/30 bg-amber-50/60 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300',
  error: 'border-red-500/30 bg-red-50/60 text-red-700 dark:bg-red-950/30 dark:text-red-300',
  info: 'border-blue-500/30 bg-blue-50/60 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300',
}

const sizeStyles: Record<NonNullable<IconBadgeProps['size']>, string> = {
  xs: 'px-1.5 py-0.2 text-[10px] gap-1',
  sm: 'px-2 py-0.5 text-xs gap-1.5',
  md: 'px-2.5 py-1 text-xs gap-2',
}

/**
 * 图标文字组合徽标 (IconBadge)
 */
export function IconBadge({
  icon,
  label,
  variant = 'default',
  size = 'sm',
  className,
  ...props
}: IconBadgeProps) {
  return (
    <span
      data-slot="icon-badge"
      className={cn(
        'inline-flex items-center rounded-[var(--abc-radius-xs,4px)] border font-medium leading-none select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{label}</span>
    </span>
  )
}

export interface RichIconTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  iconSize?: number
  preserveSrToken?: boolean
}

/**
 * 富图标文本解析组件 (RichIconText)
 * 兼容 `[icon:xxx]` 占位符解析
 */
export function RichIconText({
  text,
  iconSize = 14,
  preserveSrToken = false,
  className,
  ...props
}: RichIconTextProps) {
  const cleanedText = text ? text.replace(/\[icon:[^\]]+\]/g, '').trim() : ''

  return (
    <span className={cn('inline-flex items-center gap-1.5', className)} {...props}>
      <span>{cleanedText || text}</span>
    </span>
  )
}
