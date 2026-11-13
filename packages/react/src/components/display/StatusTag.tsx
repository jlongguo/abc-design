import React, { useState } from 'react'
import { cn } from '../../utils/cn'

export type StatusTone =
  | 'neutral'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'purple'
  | 'cyan'
  | 'orange'
  | 'teal'
  | 'pink'

export interface StatusTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: StatusTone
  /** tone 语义别名（如 'success' | 'warning' | 'error' | 'default' | 'info'） */
  status?: string
  /** 自定义色板别名（如 'purple' | 'cyan' | 'orange' | 'teal' | 'pink'） */
  color?: string
  /** 快捷文案属性（未传 children 时生效） */
  text?: React.ReactNode
  /** text 别名 */
  label?: React.ReactNode
  /** 是否显示前置圆点指示器 */
  dot?: boolean
  /** 圆点是否带呼吸脉冲（适合运行中/处理中） */
  pulse?: boolean
  size?: 'sm' | 'md'
}

const TONE_STYLES: Record<StatusTone, { tag: string; dot: string }> = {
  neutral: {
    tag: 'bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)] border-[var(--abc-border)]',
    dot: 'bg-[var(--abc-fg-muted)]',
  },
  primary: {
    tag: 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] border-transparent',
    dot: 'bg-[var(--abc-primary)]',
  },
  success: {
    tag: 'bg-[var(--abc-success-soft)] text-[var(--abc-success)] border-transparent',
    dot: 'bg-[var(--abc-success)]',
  },
  warning: {
    tag: 'bg-[var(--abc-warning-soft)] text-[var(--abc-warning)] border-transparent',
    dot: 'bg-[var(--abc-warning)]',
  },
  danger: {
    tag: 'bg-[var(--abc-danger-soft)] text-[var(--abc-danger)] border-transparent',
    dot: 'bg-[var(--abc-danger)]',
  },
  info: {
    tag: 'bg-[var(--abc-info-soft)] text-[var(--abc-info)] border-transparent',
    dot: 'bg-[var(--abc-info)]',
  },
  purple: {
    tag: 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300 border-violet-500/20',
    dot: 'bg-violet-500',
  },
  cyan: {
    tag: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300 border-cyan-500/20',
    dot: 'bg-cyan-500',
  },
  orange: {
    tag: 'bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 border-orange-500/20',
    dot: 'bg-orange-500',
  },
  teal: {
    tag: 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border-teal-500/20',
    dot: 'bg-teal-500',
  },
  pink: {
    tag: 'bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300 border-pink-500/20',
    dot: 'bg-pink-500',
  },
}

function resolveTone(tone?: StatusTone, status?: string, color?: string): StatusTone {
  if (tone) return tone
  const raw = (status ?? color ?? '').toLowerCase()
  if (!raw || raw === 'default') return 'neutral'
  if (raw === 'error') return 'danger'
  if (raw in TONE_STYLES) return raw as StatusTone
  return 'neutral'
}

/** 语义化状态标签（兼容 tone / status / color 与 text / label / children） */
export const StatusTag: React.FC<StatusTagProps> = ({
  tone,
  status,
  color,
  text,
  label,
  dot = true,
  pulse = false,
  size = 'sm',
  className,
  children,
  ...rest
}) => {
  const resolved = resolveTone(tone, status, color)
  const palette = TONE_STYLES[resolved]
  const content = text ?? label ?? children

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] border font-medium whitespace-nowrap',
        size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs',
        palette.tag,
        className
      )}
      {...rest}
    >
      {dot && (
        <span className="relative inline-flex h-1.5 w-1.5 shrink-0">
          {pulse && (
            <span
              className={cn(
                'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                palette.dot
              )}
            />
          )}
          <span className={cn('relative inline-flex h-1.5 w-1.5 rounded-full', palette.dot)} />
        </span>
      )}
      <span>{content}</span>
    </span>
  )
}

export interface BadgeProps {
  count?: number
  maxCount?: number
  dot?: boolean
  tone?: 'danger' | 'primary' | 'success'
  children?: React.ReactNode
  className?: string
}

/** 数字/红点角标组件 */
export const Badge: React.FC<BadgeProps> = ({
  count = 0,
  maxCount = 99,
  dot = false,
  tone = 'danger',
  children,
  className,
}) => {
  const bgClass =
    tone === 'primary'
      ? 'bg-[var(--abc-primary)]'
      : tone === 'success'
        ? 'bg-[var(--abc-success)]'
        : 'bg-[var(--abc-danger)]'

  const show = dot || count > 0
  const text = count > maxCount ? `${maxCount}+` : String(count)

  if (!children) {
    if (!show) return null
    return dot ? (
      <span className={cn('inline-block h-2 w-2 rounded-full', bgClass, className)} />
    ) : (
      <span
        className={cn(
          'inline-flex h-4.5 min-w-4.5 items-center justify-center rounded-full px-1.5 font-mono text-[10px] font-semibold text-white tabular-nums',
          bgClass,
          className
        )}
      >
        {text}
      </span>
    )
  }

  return (
    <span className={cn('relative inline-flex shrink-0', className)}>
      {children}
      {show &&
        (dot ? (
          <span
            className={cn(
              'absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full ring-2 ring-[var(--abc-bg-surface)]',
              bgClass
            )}
          />
        ) : (
          <span
            className={cn(
              'absolute -top-1.5 -right-2 inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 font-mono text-[10px] font-semibold text-white tabular-nums ring-2 ring-[var(--abc-bg-surface)]',
              bgClass
            )}
          >
            {text}
          </span>
        ))}
    </span>
  )
}

export interface AvatarProps {
  src?: string
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}

const AVATAR_SIZE = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-7 w-7 text-xs',
  md: 'h-9 w-9 text-sm',
  lg: 'h-11 w-11 text-base',
}

/** 用户/租户头像组件（图片加载失败时自动回退至名称首字符） */
export const Avatar: React.FC<AvatarProps> = ({ src, name = 'U', size = 'sm', className }) => {
  const [failed, setFailed] = useState(false)
  const initial = name.trim().slice(0, 1).toUpperCase() || 'U'

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none',
        AVATAR_SIZE[size],
        className
      )}
    >
      {src && !failed ? (
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span>{initial}</span>
      )}
    </span>
  )
}

export default StatusTag
