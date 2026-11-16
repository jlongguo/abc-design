import React, { useId } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { HelpCircle } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { Tooltip } from '../display/Overlays'
import { cn } from '../../utils/cn'
import { Input, type InputProps } from './Input'

export interface FormFieldProps
  extends Omit<InputProps, 'size' | 'error'> {
  /** 字段名称标签 */
  label?: React.ReactNode
  /** 标签右侧附加内容（兼容 extra 语义别名） */
  labelExtra?: React.ReactNode
  /** 关联表单控件的 htmlFor ID */
  htmlFor?: string
  /** 是否必填标识 */
  required?: boolean
  /** 标签右侧悬浮说明提示 */
  tooltip?: React.ReactNode
  /** 校验错误提示文本 */
  error?: React.ReactNode
  /** 底部辅助说明信息 */
  helperText?: React.ReactNode
  /** 辅助说明文本（传入独立输入模式时渲染于输入框上方并关联 aria-describedby） */
  hint?: React.ReactNode
  /** 右上角附加信息（如字数统计、快捷填充链接） */
  extra?: React.ReactNode
  /** 排版方向 */
  layout?: 'vertical' | 'horizontal'
  /** 控件标签与间距规格（xs | sm | md | lg） */
  size?: AbcSize
  /** 组件交互动效规格 */
  motion?: AbcMotionPreset
  /** 暗色背景外观（用于认证页等深色容器） */
  dark?: boolean
  /** 外层容器附加类名 */
  containerClassName?: string
  className?: string
  children?: React.ReactNode
}

const LABEL_SIZE_CLASS: Record<AbcSize, string> = {
  xs: 'text-[11px]',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
}

/**
 * 标准表单项包装容器
 * 既支持包裹自定义控件 children，也支持直接作为带 Label / Hint / Error 的独立输入框使用
 */
export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      label,
      labelExtra,
      htmlFor,
      required = false,
      tooltip,
      error,
      helperText,
      hint,
      extra,
      layout = 'vertical',
      size,
      motion,
      dark = false,
      id,
      className,
      containerClassName,
      children,
      'aria-describedby': ariaDescribedByProp,
      ...inputProps
    },
    ref
  ) => {
    const resolvedSize = useAbcSize(size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const generatedId = useId()
    const controlId = id ?? htmlFor ?? (children === undefined ? generatedId : undefined)
    const hintId = controlId ? `${controlId}-hint` : undefined
    const errorId = controlId ? `${controlId}-error` : undefined
    const resolvedExtra = extra ?? labelExtra

    const describedByIds = [
      ariaDescribedByProp,
      hint && hintId ? hintId : undefined,
      error && errorId ? errorId : undefined,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div
        data-slot="form-field"
        data-motion={resolvedMotion}
        className={cn(
          layout === 'horizontal'
            ? 'grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4'
            : 'flex flex-col gap-1.5',
          containerClassName,
          children !== undefined ? className : undefined
        )}
      >
        {(label || resolvedExtra) && (
          <div
            className={cn(
              'flex items-center justify-between gap-2',
              layout === 'horizontal' && 'sm:pt-2'
            )}
          >
            {label && (
              <label
                htmlFor={controlId}
                className={cn(
                  'inline-flex items-center gap-1 font-medium select-none',
                  dark ? 'text-slate-300' : 'text-[var(--abc-fg-secondary)]',
                  LABEL_SIZE_CLASS[resolvedSize]
                )}
              >
                <span>{label}</span>
                {required && (
                  <span aria-hidden="true" className="text-[var(--abc-danger)]">
                    *
                  </span>
                )}
                {tooltip && (
                  <Tooltip content={tooltip}>
                    <HelpCircle className="h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" />
                  </Tooltip>
                )}
              </label>
            )}
            {resolvedExtra && (
              <div className="text-[11px] text-[var(--abc-fg-muted)]">{resolvedExtra}</div>
            )}
          </div>
        )}

        <div className="min-w-0 flex-1 space-y-1.5">
          {hint ? (
            <p
              id={hintId}
              className={cn(
                'text-xs',
                dark ? 'text-slate-400' : 'text-[var(--abc-fg-muted)]'
              )}
            >
              {hint}
            </p>
          ) : null}
          {children !== undefined ? (
            children
          ) : (
            <Input
              ref={ref}
              id={controlId}
              invalid={Boolean(error)}
              aria-invalid={error ? true : undefined}
              aria-describedby={describedByIds || undefined}
              showPasswordLabel={inputProps.showPasswordLabel ?? 'Show plaintext'}
              hidePasswordLabel={inputProps.hidePasswordLabel ?? 'Hide plaintext'}
              clearLabel={inputProps.clearLabel ?? 'Clear input'}
              className={cn(
                dark &&
                  'h-10 rounded-lg border-white/10 bg-white/[0.04] px-3.5 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/30',
                error && dark && 'border-rose-500/70',
                className
              )}
              {...inputProps}
            />
          )}
          {error ? (
            <p
              id={errorId}
              role="alert"
              className={cn(
                'text-[11px] font-medium',
                dark ? 'text-rose-400' : 'text-[var(--abc-danger)]'
              )}
            >
              {error}
            </p>
          ) : (
            helperText && (
              <p className="text-[11px] leading-relaxed text-[var(--abc-fg-muted)]">
                {helperText}
              </p>
            )
          )}
        </div>
      </div>
    )
  }
)
FormField.displayName = 'FormField'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: AbcSize
  required?: boolean
}

/**
 * 独立的表单控件文本标签 (Label)
 * 语义化 label 标签，保持与 FormField 完全一致的字体规范、必填星号与色值
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size = 'sm', required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none',
        LABEL_SIZE_CLASS[size] || 'text-xs',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden="true" className="text-[var(--abc-danger)] font-bold">
          *
        </span>
      )}
    </label>
  )
)
Label.displayName = 'Label'

export default FormField
