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
  | 'default'
  | 'destructive'
  | 'link'

export type ButtonSize = AbcSize | 'default' | 'icon' | 'icon-sm'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 视觉语义变体 */
  variant?: ButtonVariant
  /** 控件高度规格（默认对齐企业紧凑基线 sm = var(--abc-control-h-sm)，支持全局 componentSize 继承） */
  size?: ButtonSize
  /** 组件交互动效规格（默认继承 AbcProvider.theme.motion） */
  motion?: AbcMotionPreset
  /** 加载中状态 */
  loading?: boolean
  /** 加载中文案 */
  loadingText?: React.ReactNode
  /** 左侧前置图标 */
  icon?: React.ReactNode
  /** icon 语义别名 */
  leftIcon?: React.ReactNode
  /** 右侧后置图标 */
  rightIcon?: React.ReactNode
  /** 正方形纯图标按钮（需配合 aria-label） */
  iconOnly?: boolean
  /** 是否撑满父容器宽度 */
  block?: boolean
  /** 是否将样式透传给子元素 */
  asChild?: boolean
  /** 是否启用按压缩放微交互（默认 true；表单输入内嵌按钮与微小图标按钮建议设为 false 避免点击热区漂移） */
  pressScale?: boolean
}

const VARIANT_CLASSES: Record<string, string> = {
  primary:
    'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs enabled:hover:bg-[var(--abc-primary-hover)] enabled:hover:shadow-sm enabled:active:bg-[var(--abc-primary-active)]',
  default:
    'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs enabled:hover:bg-[var(--abc-primary-hover)] enabled:hover:shadow-sm enabled:active:bg-[var(--abc-primary-active)]',
  secondary:
    'bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] border border-[var(--abc-border)] enabled:hover:bg-[var(--abc-bg-muted)] enabled:hover:border-[var(--abc-border-strong)] enabled:hover:shadow-2xs enabled:active:bg-[var(--abc-bg-subtle)]',
  outline:
    'bg-transparent border border-[var(--abc-primary)] text-[var(--abc-primary)] enabled:hover:bg-[var(--abc-primary-soft)] enabled:hover:shadow-2xs',
  danger:
    'bg-[var(--abc-danger)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90',
  destructive:
    'bg-[var(--abc-danger)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90',
  success:
    'bg-[var(--abc-success)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90',
  warning:
    'bg-[var(--abc-warning)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90',
  ghost:
    'bg-transparent text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]',
  text:
    'bg-transparent text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-primary)]',
  link:
    'bg-transparent text-[var(--abc-primary)] underline-offset-4 hover:underline enabled:hover:bg-transparent',
}

const SIZE_CLASSES: Record<string, string> = {
  xs: 'h-[var(--abc-control-h-xs)] px-2.5 text-xs',
  sm: 'h-[var(--abc-control-h-sm)] px-3 text-xs',
  default: 'h-[var(--abc-control-h-sm)] px-3 text-xs',
  md: 'h-[var(--abc-control-h-md)] px-4 text-sm',
  lg: 'h-[var(--abc-control-h-lg)] px-5 text-sm',
  icon: 'h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0',
  'icon-sm': 'h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0',
}

const ICON_ONLY_SIZE_CLASSES: Record<string, string> = {
  xs: 'h-[var(--abc-control-h-xs)] w-[var(--abc-control-h-xs)] p-0',
  sm: 'h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0',
  default: 'h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0',
  md: 'h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0',
  lg: 'h-[var(--abc-control-h-lg)] w-[var(--abc-control-h-lg)] p-0',
}

const BUTTON_FLAT_TRANSITION_CLASS =
  'transition-[color,background-color,border-color,box-shadow,opacity] duration-[var(--abc-motion-fast,140ms)] ease-out'

export function buttonVariants({
  variant = 'primary',
  size = 'sm',
  iconOnly = false,
  pressScale = false,
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  iconOnly?: boolean
  pressScale?: boolean
  className?: string
} = {}): string {
  const vClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary
  const sClass = iconOnly
    ? ICON_ONLY_SIZE_CLASSES[size] || ICON_ONLY_SIZE_CLASSES.sm
    : SIZE_CLASSES[size] || SIZE_CLASSES.sm
  return cn(
    'inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer',
    pressScale ? 'abc-motion-control' : BUTTON_FLAT_TRANSITION_CLASS,
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]',
    'disabled:opacity-45 disabled:cursor-not-allowed',
    vClass,
    sClass,
    className
  )
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
      loadingText,
      disabled,
      icon,
      leftIcon,
      rightIcon,
      iconOnly = false,
      block = false,
      asChild = false,
      pressScale = false,
      type,
      children,
      ...rest
    },
    ref
  ) => {
    const isIconSize = size === 'icon' || size === 'icon-sm'
    const normalizedSize = size === 'default' ? 'sm' : size
    const effectiveAbcSize = isIconSize ? undefined : (normalizedSize as AbcSize | undefined)
    const resolvedSize = useAbcSize(effectiveAbcSize, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const isDisabled = Boolean(disabled || loading)
    const activeIcon = leftIcon ?? icon

    const computedClass = cn(
      'inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer',
      pressScale ? 'abc-motion-control' : BUTTON_FLAT_TRANSITION_CLASS,
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]',
      'disabled:opacity-45 disabled:cursor-not-allowed',
      VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
      isIconSize
        ? SIZE_CLASSES[size]
        : iconOnly
          ? ICON_ONLY_SIZE_CLASSES[resolvedSize]
          : SIZE_CLASSES[resolvedSize],
      block && 'w-full',
      className
    )

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>
      return React.cloneElement(child, {
        className: cn(computedClass, child.props.className),
        ...rest,
      })
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        data-slot="button"
        data-motion={resolvedMotion}
        className={computedClass}
        {...rest}
      >
        {loading ? (
          <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin" aria-hidden="true" />
        ) : (
          activeIcon && <span className="inline-flex shrink-0 items-center">{activeIcon}</span>
        )}
        {loading && loadingText !== undefined ? loadingText : children}
        {!loading && rightIcon && (
          <span className="inline-flex shrink-0 items-center">{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
