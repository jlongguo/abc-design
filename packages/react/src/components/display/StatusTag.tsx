import React, { useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { useAbcMotion, useAbcSize } from '../../hooks'
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
  size?: AbcSize
  motion?: AbcMotionPreset
}

const TONE_STYLES: Record<StatusTone, { tag: string; dot: string }> = {
  neutral: {
    tag: 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800/90 dark:text-slate-200 dark:border-slate-600 shadow-2xs font-semibold ring-1 ring-slate-400/20 dark:ring-slate-600/50',
    dot: 'bg-slate-500 dark:bg-slate-400',
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
  size,
  motion,
  className,
  children,
  ...rest
}) => {
  const resolved = resolveTone(tone, status, color)
  const palette = TONE_STYLES[resolved]
  const content = text ?? label ?? children
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)

  const sizeClasses: Record<AbcSize, string> = {
    xs: 'px-1.5 py-0 text-[10px]',
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
  }

  return (
    <span
      data-motion={resolvedMotion}
      className={cn(
        'abc-motion-pop inline-flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] border font-medium whitespace-nowrap',
        sizeClasses[resolvedSize],
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

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  count?: number
  maxCount?: number
  dot?: boolean
  tone?: 'danger' | 'primary' | 'success'
  variant?:
    | 'default'
    | 'secondary'
    | 'outline'
    | 'destructive'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'neutral'
  size?: AbcSize
  motion?: AbcMotionPreset
  children?: React.ReactNode
  className?: string
}

/** 数字/红点角标组件（兼具语义标签模式） */
export const Badge: React.FC<BadgeProps> = ({
  count = 0,
  maxCount = 99,
  dot = false,
  tone = 'danger',
  variant,
  size,
  motion,
  children,
  className,
  ...restProps
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)

  if (variant) {
    const variantClassMap: Record<string, string> = {
      default: 'border-transparent bg-[var(--abc-primary,#2563eb)] text-white',
      secondary: 'border-transparent bg-[var(--abc-bg-subtle,#f1f5f9)] text-[var(--abc-fg-secondary,#64748b)]',
      outline: 'border-[var(--abc-border,#e2e8f0)] text-[var(--abc-fg,#0f172a)] bg-transparent',
      destructive: 'border-transparent bg-[var(--abc-danger,#ef4444)] text-white',
      danger: TONE_STYLES.danger.tag,
      success: TONE_STYLES.success.tag,
      warning: TONE_STYLES.warning.tag,
      info: TONE_STYLES.info.tag,
      neutral: TONE_STYLES.neutral.tag,
    }
    const variantClass = variantClassMap[variant] ?? variantClassMap.default

    return (
      <span
        data-motion={resolvedMotion}
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--abc-primary)] focus:ring-offset-2',
          variantClass,
          className
        )}
        {...restProps}
      >
        {children}
      </span>
    )
  }

  const bgClass =
    tone === 'primary'
      ? 'bg-[var(--abc-primary)]'
      : tone === 'success'
        ? 'bg-[var(--abc-success)]'
        : 'bg-[var(--abc-danger)]'

  const show = dot || count > 0
  const text = count > maxCount ? `${maxCount}+` : String(count)

  const standaloneDotSize: Record<AbcSize, string> = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3 w-3',
  }
  const standalonePillSize: Record<AbcSize, string> = {
    xs: 'h-4 min-w-4 px-1 text-[9px]',
    sm: 'h-4.5 min-w-4.5 px-1.5 text-[10px]',
    md: 'h-5 min-w-5 px-1.5 text-[11px]',
    lg: 'h-6 min-w-6 px-2 text-xs',
  }
  const overlayDotSize: Record<AbcSize, string> = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3 w-3',
  }
  const overlayPillSize: Record<AbcSize, string> = {
    xs: 'h-3.5 min-w-3.5 px-1 text-[9px]',
    sm: 'h-4 min-w-4 px-1 text-[10px]',
    md: 'h-4.5 min-w-4.5 px-1.5 text-[11px]',
    lg: 'h-5 min-w-5 px-1.5 text-xs',
  }

  if (!children) {
    if (!show) return null
    return dot ? (
      <span
        data-motion={resolvedMotion}
        className={cn('abc-motion-pop inline-block rounded-full', standaloneDotSize[resolvedSize], bgClass, className)}
      />
    ) : (
      <span
        data-motion={resolvedMotion}
        className={cn(
          'abc-motion-pop inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums',
          standalonePillSize[resolvedSize],
          bgClass,
          className
        )}
      >
        {text}
      </span>
    )
  }

  return (
    <span data-motion={resolvedMotion} className={cn('relative inline-flex shrink-0', className)}>
      {children}
      {show &&
        (dot ? (
          <span
            className={cn(
              'abc-motion-pop absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-[var(--abc-bg-surface)]',
              overlayDotSize[resolvedSize],
              bgClass
            )}
          />
        ) : (
          <span
            className={cn(
              'abc-motion-pop absolute -top-1.5 -right-2 inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums ring-2 ring-[var(--abc-bg-surface)]',
              overlayPillSize[resolvedSize],
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
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
}

const AVATAR_SIZE: Record<AbcSize, string> = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-7 w-7 text-xs',
  md: 'h-9 w-9 text-sm',
  lg: 'h-11 w-11 text-base',
}

/** 用户/租户头像组件（图片加载失败时自动回退至名称首字符） */
export const Avatar: React.FC<AvatarProps> = ({ src, name = 'U', size, motion, className }) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const [failed, setFailed] = useState(false)
  const initial = name.trim().slice(0, 1).toUpperCase() || 'U'

  return (
    <span
      data-motion={resolvedMotion}
      className={cn(
        'abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none',
        AVATAR_SIZE[resolvedSize],
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

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info' | string
  dot?: boolean
}

export function tagVariants(_opts: { variant?: string } = {}) {
  return ''
}

/**
 * 语义化标签组件 (Tag)
 * 完全集成自 ABC Design 的 StatusTag 规范体系
 */
export const Tag: React.FC<TagProps> = ({
  variant = 'default',
  dot = false,
  className,
  children,
  ...props
}) => {
  const toneMap: Record<string, StatusTone> = {
    default: 'primary',
    secondary: 'neutral',
    destructive: 'danger',
    outline: 'neutral',
    success: 'success',
    warning: 'warning',
    info: 'info',
  }
  const tone = toneMap[variant] ?? 'neutral'

  return (
    <StatusTag
      tone={tone}
      dot={dot}
      className={cn(variant === 'outline' && 'bg-transparent border-[var(--abc-border)]', className)}
      {...props}
    >
      {children}
    </StatusTag>
  )
}
Tag.displayName = 'Tag'

export default StatusTag
