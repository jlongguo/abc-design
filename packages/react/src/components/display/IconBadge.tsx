import * as React from 'react'
import { cn } from '../../utils/cn'
import {
  extractLeadingEmojiToken,
  resolveSemanticLucideIcon,
  stripLeadingEmoji,
  tokenizeEmojiSegments,
} from './semanticIcons'

export { extractLeadingEmojiToken, resolveSemanticLucideIcon, stripLeadingEmoji, tokenizeEmojiSegments }

export interface SemanticIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  token?: string
  icon?: string
  size?: number
  strokeWidth?: number
  srText?: string
}

/**
 * 矢量语义图标组件 (SemanticIcon)
 */
export function SemanticIcon({
  token,
  icon,
  size = 14,
  strokeWidth = 1.9,
  className,
  srText,
  ...props
}: SemanticIconProps) {
  const resolvedToken = token ?? icon ?? ''
  const IconComponent = resolveSemanticLucideIcon(resolvedToken)
  return (
    <>
      <IconComponent
        data-slot="semantic-icon"
        data-icon-token={resolvedToken}
        size={size}
        strokeWidth={strokeWidth}
        aria-hidden="true"
        className={cn('shrink-0 select-none', className)}
        {...props}
      />
      {srText ? <span className="sr-only">{srText}</span> : null}
    </>
  )
}

export type IconBadgeTone =
  | 'indigo'
  | 'emerald'
  | 'violet'
  | 'sky'
  | 'amber'
  | 'cyan'
  | 'fuchsia'
  | 'rose'
  | 'teal'
  | 'slate'

export interface IconBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  token?: string
  icon?: React.ReactNode
  label?: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  tone?: IconBadgeTone
  size?: 'xs' | 'sm' | 'md' | 'lg'
  iconSize?: number
  iconClassName?: string
  srText?: string
}

const variantStyles: Record<NonNullable<IconBadgeProps['variant']>, string> = {
  default: 'border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]',
  success: 'border-emerald-500/30 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300',
  warning: 'border-amber-500/30 bg-amber-50/60 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300',
  error: 'border-red-500/30 bg-red-50/60 text-red-700 dark:bg-red-950/30 dark:text-red-300',
  info: 'border-blue-500/30 bg-blue-50/60 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300',
}

const toneStyles: Record<IconBadgeTone, string> = {
  indigo: 'bg-gradient-to-br from-indigo-500/20 via-indigo-500/12 to-indigo-600/5 text-indigo-500 ring-indigo-500/30',
  emerald: 'bg-gradient-to-br from-emerald-500/20 via-emerald-500/12 to-emerald-600/5 text-emerald-500 ring-emerald-500/30',
  violet: 'bg-gradient-to-br from-violet-500/20 via-violet-500/12 to-violet-600/5 text-violet-500 ring-violet-500/30',
  sky: 'bg-gradient-to-br from-sky-500/20 via-sky-500/12 to-sky-600/5 text-sky-500 ring-sky-500/30',
  amber: 'bg-gradient-to-br from-amber-500/20 via-amber-500/12 to-amber-600/5 text-amber-500 ring-amber-500/30',
  cyan: 'bg-gradient-to-br from-cyan-500/20 via-cyan-500/12 to-cyan-600/5 text-cyan-500 ring-cyan-500/30',
  fuchsia: 'bg-gradient-to-br from-fuchsia-500/20 via-fuchsia-500/12 to-fuchsia-600/5 text-fuchsia-500 ring-fuchsia-500/30',
  rose: 'bg-gradient-to-br from-rose-500/20 via-rose-500/12 to-rose-600/5 text-rose-500 ring-rose-500/30',
  teal: 'bg-gradient-to-br from-teal-500/20 via-teal-500/12 to-teal-600/5 text-teal-500 ring-teal-500/30',
  slate: 'bg-gradient-to-br from-slate-500/15 via-slate-500/10 to-slate-600/5 text-slate-500 ring-slate-500/25',
}

const pillSizeStyles: Record<NonNullable<IconBadgeProps['size']>, string> = {
  xs: 'px-1.5 py-0.5 text-[10px] gap-1',
  sm: 'px-2 py-0.5 text-xs gap-1.5',
  md: 'px-2.5 py-1 text-xs gap-2',
  lg: 'px-3 py-1.5 text-sm gap-2',
}

const squareSizeStyles: Record<NonNullable<IconBadgeProps['size']>, string> = {
  xs: 'h-5 w-5 rounded-md',
  sm: 'h-6 w-6 rounded-lg',
  md: 'h-7 w-7 rounded-lg',
  lg: 'h-8 w-8 rounded-xl',
}

/**
 * 图标徽标组件 (IconBadge)
 */
export function IconBadge({
  token,
  icon,
  label,
  variant = 'default',
  tone = 'indigo',
  size = 'md',
  iconSize,
  iconClassName,
  srText,
  className,
  ...props
}: IconBadgeProps) {
  if (label !== undefined) {
    return (
      <span
        data-slot="icon-badge"
        className={cn(
          'inline-flex items-center rounded-[var(--abc-radius-xs,4px)] border font-medium leading-none select-none',
          variantStyles[variant],
          pillSizeStyles[size],
          className
        )}
        {...props}
      >
        {icon ? <span className="shrink-0">{icon}</span> : null}
        <span>{label}</span>
      </span>
    )
  }

  const resolvedToken = token ?? (typeof icon === 'string' ? icon : '')
  const defaultIconSize = size === 'xs' ? 11 : size === 'sm' ? 13 : size === 'lg' ? 16 : 14

  return (
    <span
      data-slot="icon-badge"
      data-icon-token={resolvedToken}
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center select-none transition-all duration-200 ring-1 ring-inset shadow-[0_1px_2px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.22)]',
        toneStyles[tone],
        squareSizeStyles[size],
        className
      )}
      {...props}
    >
      {typeof icon === 'string' || !icon ? (
        <SemanticIcon
          token={resolvedToken}
          size={iconSize ?? defaultIconSize}
          className={iconClassName}
          srText={srText}
        />
      ) : (
        icon
      )}
    </span>
  )
}

function flattenRichChildrenText(node: React.ReactNode): string | null {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) {
    const mapped = node.map(flattenRichChildrenText)
    if (mapped.some((item) => item === null)) return null
    return mapped.join('')
  }
  return null
}

export interface RichIconTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text?: string
  token?: string
  icon?: string
  iconSize?: number
  size?: number
  iconClassName?: string
  preserveSrToken?: boolean
}

/**
 * 智能矢量图标文本解析组件 (RichIconText)
 */
export function RichIconText({
  text,
  token,
  icon,
  iconSize,
  size,
  iconClassName,
  preserveSrToken = true,
  className,
  children,
  ...props
}: RichIconTextProps) {
  const flattenedChildren = React.useMemo(() => flattenRichChildrenText(children), [children])
  const rawText = text ?? flattenedChildren ?? ''
  const resolvedIconSize = size ?? iconSize ?? 13
  const segments = React.useMemo(
    () => tokenizeEmojiSegments(rawText, preserveSrToken),
    [rawText, preserveSrToken]
  )
  const hasEmojiSegments = segments.some((seg) => seg.type === 'emoji')
  const explicitToken = token ?? icon
  const shouldTruncateText = Boolean(
    className && /\b(truncate|text-ellipsis|overflow-hidden)\b/.test(className)
  )

  if (!hasEmojiSegments && !explicitToken) {
    const cleaned = rawText.replace(/\[icon:[^\]]+\]/g, '').trim()
    return (
      <span className={cn('inline-flex items-center gap-1.5', className)} {...props}>
        <span>{text !== undefined ? cleaned || text : children}</span>
      </span>
    )
  }

  return (
    <span
      data-slot="rich-icon-text"
      className={cn('inline-flex max-w-full items-center gap-1 align-middle', className)}
      {...props}
    >
      {!hasEmojiSegments && explicitToken ? (
        <SemanticIcon
          token={explicitToken}
          size={resolvedIconSize}
          className={iconClassName}
        />
      ) : null}
      {hasEmojiSegments ? (
        segments.map((seg, idx) =>
          seg.type === 'emoji' ? (
            <SemanticIcon
              key={`emoji-${idx}-${seg.value}`}
              token={seg.value}
              size={resolvedIconSize}
              className={iconClassName}
              srText={seg.srText}
            />
          ) : (
            <span key={`text-${idx}`} className={cn('min-w-0', shouldTruncateText && 'truncate')}>
              {seg.value}
            </span>
          )
        )
      ) : (
        <span className={cn('min-w-0', shouldTruncateText && 'truncate')}>
          {rawText || children}
        </span>
      )}
    </span>
  )
}
