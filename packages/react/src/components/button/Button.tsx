import React from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { Loader2 } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { cn } from '../../utils/cn'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'success'
  | 'warning'
  | 'ghost'
  | 'text'

export type ButtonSize = AbcSize

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 视觉语义变体 */
  variant?: ButtonVariant
  /** 控件高度规格（默认对齐企业紧凑基线 sm = var(--abc-control-h-sm)，支持全局 componentSize 继承） */
  size?: ButtonSize
  /** 组件交互动效规格（默认继承 AbcProvider.theme.motion） */
  motion?: AbcMotionPreset
  /** 加载中状态 */
  loading?: boolean
  /** 左侧前置图标 */
  icon?: React.ReactNode
  /** 右侧后置图标 */
  rightIcon?: React.ReactNode
  /** 是否撑满父容器宽度 */
  block?: boolean
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs enabled:hover:bg-[var(--abc-primary-hover)] enabled:hover:shadow-sm enabled:active:bg-[var(--abc-primary-active)]',
  secondary:
    'bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] border border-[var(--abc-border)] enabled:hover:bg-[var(--abc-bg-muted)] enabled:hover:border-[var(--abc-border-strong)] enabled:hover:shadow-2xs enabled:active:bg-[var(--abc-bg-subtle)]',
  outline:
    'bg-transparent border border-[var(--abc-primary)] text-[var(--abc-primary)] enabled:hover:bg-[var(--abc-primary-soft)] enabled:hover:shadow-2xs',
  danger:
    'bg-[var(--abc-danger)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90',
  success:
    'bg-[var(--abc-success)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90',
  warning:
    'bg-[var(--abc-warning)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90',
  ghost:
    'bg-transparent text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]',
  text:
    'bg-transparent text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-primary)]',
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: 'h-[var(--abc-control-h-xs)] px-2.5 text-xs',
  sm: 'h-[var(--abc-control-h-sm)] px-3 text-xs',
  md: 'h-[var(--abc-control-h-md)] px-4 text-sm',
  lg: 'h-[var(--abc-control-h-lg)] px-5 text-sm',
}

/**
 * 企业级通用按钮组件
 * 完全基于 --abc-* 语义化 Token 驱动，随品牌色、密度与圆角档位实时响应
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size,
      motion,
      loading = false,
      disabled,
      icon,
      rightIcon,
      block = false,
      type = 'button',
      children,
      ...rest
    },
    ref
  ) => {
    const resolvedSize = useAbcSize(size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const isDisabled = Boolean(disabled || loading)

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        data-motion={resolvedMotion}
        className={cn(
          'inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]',
          'disabled:opacity-45 disabled:cursor-not-allowed',
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[resolvedSize],
          block && 'w-full',
          className
        )}
        {...rest}
      >
        {loading ? (
          <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin" aria-hidden="true" />
        ) : (
          icon && <span className="inline-flex shrink-0 items-center">{icon}</span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className="inline-flex shrink-0 items-center">{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
