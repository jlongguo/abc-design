import React, { useCallback, useId, useImperativeHandle, useRef, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { Eye, EyeOff, Minus, Plus, X } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { cn } from '../../utils/cn'

export type ControlSize = AbcSize

const HEIGHT_BY_SIZE: Record<ControlSize, string> = {
  xs: 'h-[var(--abc-control-h-xs)] text-xs',
  sm: 'h-[var(--abc-control-h-sm)] text-xs',
  md: 'h-[var(--abc-control-h-md)] text-sm',
  lg: 'h-[var(--abc-control-h-lg)] text-sm',
}

const TEXTAREA_SIZE_CLASSES: Record<ControlSize, string> = {
  xs: 'px-2 py-1 text-xs min-h-[60px]',
  sm: 'px-2.5 py-1.5 text-xs min-h-[72px]',
  md: 'px-3 py-2 text-sm min-h-[84px]',
  lg: 'px-3.5 py-2.5 text-sm min-h-[98px]',
}

export const baseFieldControlClass =
  'w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: ControlSize
  /** 组件交互动效规格 */
  motion?: AbcMotionPreset
  /** 内联字段标签（亦可配合外层 FormField 使用） */
  label?: React.ReactNode
  /** 校验错误提示文案，存在时自动开启危险态高亮 */
  error?: string
  /** 底部辅助提示说明 */
  helperText?: React.ReactNode
  /** 前置插槽 */
  prefix?: React.ReactNode
  /** 前置图标别名 */
  prefixIcon?: React.ReactNode
  /** 后置插槽 */
  suffix?: React.ReactNode
  /** 后置图标别名 */
  suffixIcon?: React.ReactNode
  /** 是否支持一键清空 */
  allowClear?: boolean
  /** allowClear 语义别名 */
  clearable?: boolean
  /** 当 type="password" 时是否展示明密文切换按钮（默认开启） */
  passwordToggle?: boolean
  /** 切换显示明文时的提示或无障碍标签 */
  showPasswordLabel?: string
  /** 切换隐藏明文时的提示或无障碍标签 */
  hidePasswordLabel?: string
  /** 是否展示底部字数统计 */
  showCount?: boolean
  onClear?: () => void
  invalid?: boolean
  wrapperClassName?: string
}

/**
 * 企业级文本输入框
 * 支持受控/非受控、前置/后置插槽、一键清空并自动回焦、密码明密文切换、字数统计与内联校验提示
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size,
      motion,
      label,
      error,
      helperText,
      prefix,
      prefixIcon,
      suffix,
      suffixIcon,
      allowClear,
      clearable,
      passwordToggle = true,
      showPasswordLabel,
      hidePasswordLabel,
      showCount = false,
      onClear,
      invalid = false,
      id,
      type = 'text',
      value,
      defaultValue,
      maxLength,
      onChange,
      disabled,
      readOnly,
      className,
      wrapperClassName,
      ...rest
    },
    ref
  ) => {
    const resolvedSize = useAbcSize(size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const generatedId = useId()
    const inputId = id || generatedId
    const innerRef = useRef<HTMLInputElement | null>(null)
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement, [])

    const isControlled = value !== undefined
    const [uncontrolledVal, setUncontrolledVal] = useState<string>(() =>
      defaultValue !== undefined && defaultValue !== null ? String(defaultValue) : ''
    )

    const [revealPwd, setRevealPwd] = useState(false)
    const isPassword = type === 'password'
    const canTogglePwd = isPassword && passwordToggle !== false
    const actualType = canTogglePwd && revealPwd ? 'text' : type

    const currentStr = isControlled ? String(value ?? '') : uncontrolledVal
    const charCount = currentStr.length
    const hasValue = charCount > 0
    const isClearable = Boolean((allowClear ?? clearable) && hasValue && !disabled && !readOnly)
    const isInvalid = Boolean(invalid || error)
    const leadingNode = prefix ?? prefixIcon
    const trailingNode = suffix ?? suffixIcon

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setUncontrolledVal(e.target.value)
      }
      onChange?.(e)
    }

    const handleClear = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (disabled || readOnly) return
        if (!isControlled) {
          setUncontrolledVal('')
        }
        onClear?.()
        const inputEl = innerRef.current
        if (inputEl) {
          inputEl.value = ''
          inputEl.focus()
        }
        if (onChange) {
          const targetEl = (inputEl ?? { value: '' }) as HTMLInputElement
          const synthetic = {
            target: targetEl,
            currentTarget: targetEl,
            type: 'change',
            preventDefault: () => {},
            stopPropagation: () => {},
          } as React.ChangeEvent<HTMLInputElement>
          onChange(synthetic)
        }
      },
      [disabled, readOnly, isControlled, onClear, onChange]
    )

    // 按右侧槽位数量自适应右侧内边距，确保长文本与自动填充不与图标重叠
    const rightSlotCount =
      (isClearable ? 1 : 0) + (canTogglePwd ? 1 : 0) + (trailingNode ? 1 : 0)
    const rightPaddingClass =
      rightSlotCount >= 3
        ? 'pr-20'
        : rightSlotCount === 2
          ? 'pr-14'
          : rightSlotCount === 1
            ? 'pr-9'
            : 'pr-3'

    const hasExplicitWidth = /\bw-(?!full\b)\S+/.test(className || '')

    const controlBox = (
      <div
        className={cn(
          'relative flex items-center',
          !hasExplicitWidth && 'w-full',
          wrapperClassName
        )}
      >
        {leadingNode && (
          <div className="pointer-events-none absolute left-3 z-10 flex items-center text-[var(--abc-fg-muted)]">
            {leadingNode}
          </div>
        )}
        <input
          ref={innerRef}
          id={inputId}
          type={actualType}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          onChange={handleInputChange}
          disabled={disabled}
          readOnly={readOnly}
          data-motion={resolvedMotion}
          aria-invalid={isInvalid || undefined}
          className={cn(
            baseFieldControlClass,
            HEIGHT_BY_SIZE[resolvedSize],
            leadingNode ? 'pl-9' : 'pl-3',
            rightPaddingClass,
            '[&::-ms-reveal]:hidden [&::-ms-clear]:hidden',
            actualType === 'number' &&
              rightSlotCount > 0 &&
              '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
            isInvalid &&
              'border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20',
            disabled && 'opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]',
            className
          )}
          {...rest}
        />
        {(isClearable || canTogglePwd || trailingNode) && (
          <div className="absolute right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]">
            {isClearable && (
              <button
                type="button"
                tabIndex={-1}
                data-testid="input-clear"
                aria-label="清空输入"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleClear}
                className="inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
            {canTogglePwd && (
              <button
                type="button"
                tabIndex={-1}
                disabled={disabled}
                data-testid="password-toggle"
                aria-label={revealPwd ? (hidePasswordLabel ?? '隐藏密码') : (showPasswordLabel ?? '显示密码')}
                title={revealPwd ? (hidePasswordLabel ?? '隐藏密码') : (showPasswordLabel ?? '显示密码')}
                onMouseDown={(e) => e.preventDefault()}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  if (disabled) return
                  setRevealPwd((v) => !v)
                }}
                className="inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {revealPwd ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
              </button>
            )}
            {trailingNode && (
              <span className="inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]">
                {trailingNode}
              </span>
            )}
          </div>
        )}
      </div>
    )

    if (!label && !error && !helperText && !showCount) {
      return controlBox
    }

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]"
          >
            {label}
          </label>
        )}
        {controlBox}
        {(error || helperText || showCount) && (
          <div className="mt-1 flex items-center justify-between gap-2 text-xs">
            <div className="min-w-0 flex-1">
              {error ? (
                <p className="text-[var(--abc-danger)]">{error}</p>
              ) : helperText ? (
                <p className="text-[var(--abc-fg-muted)]">{helperText}</p>
              ) : null}
            </div>
            {showCount && (
              <span
                data-testid="input-count"
                className="ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none"
              >
                {maxLength !== undefined ? `${charCount}/${maxLength}` : charCount}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export interface InputNumberProps {
  value?: number | null
  defaultValue?: number
  onChange?: (val: number | null) => void
  min?: number
  max?: number
  step?: number
  size?: ControlSize
  motion?: AbcMotionPreset
  disabled?: boolean
  placeholder?: string
  invalid?: boolean
  className?: string
}

/** 步进数值输入框（等宽数字对齐） */
export const InputNumber: React.FC<InputNumberProps> = ({
  value,
  defaultValue,
  onChange,
  min,
  max,
  step = 1,
  size,
  motion,
  disabled = false,
  placeholder,
  invalid = false,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const inputId = useId()
  const [internal, setInternal] = useState<number | null>(defaultValue ?? null)
  const current = value !== undefined ? value : internal

  const commit = (next: number | null) => {
    let resolved = next
    if (resolved !== null && Number.isFinite(resolved)) {
      if (min !== undefined) resolved = Math.max(min, resolved)
      if (max !== undefined) resolved = Math.min(max, resolved)
    } else {
      resolved = null
    }
    if (value === undefined) setInternal(resolved)
    onChange?.(resolved)
  }

  return (
    <div
      data-motion={resolvedMotion}
      className={cn(
        'inline-flex w-full items-center overflow-hidden',
        baseFieldControlClass,
        HEIGHT_BY_SIZE[resolvedSize],
        invalid && 'border-[var(--abc-danger)]',
        disabled && 'opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]',
        className
      )}
    >
      <button
        type="button"
        aria-label="减少数值"
        disabled={disabled || (min !== undefined && (current ?? 0) <= min)}
        onClick={() => commit((current ?? 0) - step)}
        className="flex h-full w-7 shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control"
      >
        <Minus className="h-3 w-3" />
      </button>
      <input
        id={inputId}
        type="number"
        value={current ?? ''}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => {
          const raw = e.target.value
          commit(raw === '' ? null : Number(raw))
        }}
        className="h-full w-full min-w-0 flex-1 bg-transparent px-2.5 text-center font-mono tabular-nums focus:outline-none"
      />
      <button
        type="button"
        aria-label="增加数值"
        disabled={disabled || (max !== undefined && (current ?? 0) >= max)}
        onClick={() => commit((current ?? 0) + step)}
        className="flex h-full w-7 shrink-0 items-center justify-center border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  )
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: ControlSize
  motion?: AbcMotionPreset
  label?: React.ReactNode
  error?: string
  helperText?: React.ReactNode
  showCount?: boolean
  invalid?: boolean
}

/** 多行文本域组件（支持四档尺寸、动效规格、内联标签、错误文案与实时字数统计） */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size,
      motion,
      label,
      error,
      helperText,
      showCount = false,
      invalid = false,
      id,
      value,
      defaultValue,
      maxLength,
      onChange,
      rows = 3,
      className,
      ...rest
    },
    ref
  ) => {
    const resolvedSize = useAbcSize(size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const generatedId = useId()
    const textareaId = id || generatedId
    const [uncontrolledLength, setUncontrolledLength] = useState(
      () => String(defaultValue ?? '').length
    )

    const currentLength = value !== undefined ? String(value ?? '').length : uncontrolledLength
    const isInvalid = Boolean(invalid || error)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (value === undefined) {
        setUncontrolledLength(e.target.value.length)
      }
      onChange?.(e)
    }

    const areaNode = (
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        value={value}
        defaultValue={defaultValue}
        maxLength={maxLength}
        onChange={handleChange}
        data-motion={resolvedMotion}
        aria-invalid={isInvalid || undefined}
        className={cn(
          baseFieldControlClass,
          TEXTAREA_SIZE_CLASSES[resolvedSize],
          'leading-relaxed resize-y',
          isInvalid && 'border-[var(--abc-danger)] focus:border-[var(--abc-danger)]',
          className
        )}
        {...rest}
      />
    )

    if (!label && !error && !helperText && !showCount) {
      return areaNode
    }

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]"
          >
            {label}
          </label>
        )}
        {areaNode}
        {(error || helperText || showCount) && (
          <div className="mt-1 flex items-center justify-between gap-2 text-xs">
            <div className="min-w-0 flex-1">
              {error ? (
                <p className="text-[var(--abc-danger)]">{error}</p>
              ) : helperText ? (
                <p className="text-[var(--abc-fg-muted)]">{helperText}</p>
              ) : null}
            </div>
            {showCount && (
              <span
                data-testid="textarea-count"
                className="ml-2 shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums"
              >
                {maxLength !== undefined ? `${currentLength}/${maxLength}` : currentLength}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export default Input
