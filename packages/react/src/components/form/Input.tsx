import React, { useCallback, useId, useImperativeHandle, useRef, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { Eye, EyeOff, Minus, Plus, X } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { cn } from '../../utils/cn'

export type ControlSize = AbcSize | 'default'

const HEIGHT_BY_SIZE: Record<ControlSize, string> = {
  xs: 'h-[var(--abc-control-h-xs)] text-xs',
  sm: 'h-[var(--abc-control-h-sm)] text-xs',
  default: 'h-[var(--abc-control-h-sm)] text-xs',
  md: 'h-[var(--abc-control-h-md)] text-sm',
  lg: 'h-[var(--abc-control-h-lg)] text-sm',
}

const TEXTAREA_SIZE_CLASSES: Record<ControlSize, string> = {
  xs: 'px-2 py-1 text-xs min-h-[60px]',
  sm: 'px-2.5 py-1.5 text-xs min-h-[72px]',
  default: 'px-2.5 py-1.5 text-xs min-h-[72px]',
  md: 'px-3 py-2 text-sm min-h-[84px]',
  lg: 'px-3.5 py-2.5 text-sm min-h-[98px]',
}

export const baseFieldControlClass =
  'w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] leading-normal py-0 transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed'

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
  /** 清空按钮的无障碍标签 */
  clearLabel?: string
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
      clearLabel = '清空输入',
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
        data-slot="input-wrapper"
        className={cn(
          'relative flex items-center',
          !hasExplicitWidth && 'w-full',
          wrapperClassName
        )}
      >
        {leadingNode && (
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 z-10 flex items-center justify-center text-[var(--abc-fg-muted)] [&>svg]:shrink-0",
              resolvedSize === 'xs' ? 'left-2 [&>svg]:h-3.5 [&>svg]:w-3.5' : 'left-2.5 [&>svg]:h-4 [&>svg]:w-4'
            )}
          >
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
            leadingNode ? (resolvedSize === 'xs' ? 'pl-7' : 'pl-8') : (resolvedSize === 'xs' ? 'pl-2' : 'pl-3'),
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
          <div className="absolute inset-y-0 right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]">
            {isClearable && (
              <button
                type="button"
                tabIndex={-1}
                data-testid="input-clear"
                aria-label={clearLabel}
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
                aria-pressed={revealPwd}
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
  id?: string
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
  /** 单位后缀标识（如 ms / px / s） */
  suffix?: React.ReactNode
  'aria-label'?: string
  'aria-labelledby'?: string
  'data-testid'?: string
  'data-draft-field'?: string
  /** 开启内容驱动动态宽度：在 minWidth 与 maxWidth 区间内随数字位数自动伸缩，避免窄框遮挡 */
  autoWidth?: boolean
  /** 最小宽度（支持像素数字或 CSS 长度值，autoWidth 开启时默认按尺寸档位提供安全下限） */
  minWidth?: number | string
  /** 最大宽度（支持像素数字或 CSS 长度值，autoWidth 开启时默认 220px 防止无限撑爆布局） */
  maxWidth?: number | string
  style?: React.CSSProperties
  className?: string
}

const INPUT_NUMBER_DEFAULT_MIN_WIDTH: Record<ControlSize, number> = {
  xs: 88,
  sm: 96,
  default: 96,
  md: 112,
  lg: 120,
}

function toCssLength(val?: number | string): string | undefined {
  if (val === undefined) return undefined
  return typeof val === 'number' ? `${val}px` : val
}

/** 精确提取小数位数（兼容 1e-7 / 2.5e-4 等科学计数法，防止步进浮点漂移） */
function getDecimalDigits(num: number): number {
  if (!Number.isFinite(num)) return 0
  const str = String(num).toLowerCase()
  const expIdx = str.indexOf('e')
  if (expIdx !== -1) {
    const mantissa = str.slice(0, expIdx)
    const exp = Number(str.slice(expIdx + 1))
    const mantissaDecimals = mantissa.includes('.') ? mantissa.split('.')[1]!.length : 0
    return Math.max(0, mantissaDecimals - exp)
  }
  const dotIdx = str.indexOf('.')
  return dotIdx === -1 ? 0 : str.length - dotIdx - 1
}

/** 仅在 +/- 步进计算时修正 IEEE 754 浮点误差，绝不截断用户直接键入的高精度小数 */
function roundStepArithmetic(val: number, base: number, step: number): number {
  const digits = Math.min(12, Math.max(getDecimalDigits(base), getDecimalDigits(step)))
  return digits > 0 ? Number(val.toFixed(digits)) : val
}

/** 步进数值输入框（等宽数字对齐，内置隐藏浏览器原生微调按钮、聚焦态防抢先钳制编辑缓冲、可选单位后缀与内容自适应宽度） */
export const InputNumber: React.FC<InputNumberProps> = ({
  id: externalId,
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
  suffix,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'data-testid': dataTestId,
  'data-draft-field': dataDraftField,
  autoWidth = false,
  minWidth,
  maxWidth,
  style,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const generatedId = useId()
  const inputId = externalId ?? generatedId
  const [internal, setInternal] = useState<number | null>(defaultValue ?? null)
  const current = value !== undefined ? value : internal
  const [isFocused, setIsFocused] = useState(false)
  const isFocusedRef = useRef(false)
  const [draftText, setDraftText] = useState<string>(
    current !== null && current !== undefined ? String(current) : ''
  )

  const clampValue = (next: number | null): number | null => {
    if (next === null || !Number.isFinite(next)) return null
    let resolved = next
    if (min !== undefined) resolved = Math.max(min, resolved)
    if (max !== undefined) resolved = Math.min(max, resolved)
    return resolved
  }

  const commitImmediate = (next: number | null) => {
    const resolved = next !== null && Number.isFinite(next) ? next : null
    if (value === undefined) setInternal(resolved)
    onChange?.(resolved)
  }

  const commitClamped = (next: number | null) => {
    const resolved = clampValue(next)
    if (value === undefined) setInternal(resolved)
    onChange?.(resolved)
    return resolved
  }

  const handleStep = (delta: number) => {
    const draftNum =
      isFocusedRef.current && draftText.trim() !== '' && Number.isFinite(Number(draftText))
        ? Number(draftText)
        : (current ?? 0)
    const stepped = roundStepArithmetic(draftNum + delta, draftNum, step)
    const resolved = commitClamped(stepped)
    setDraftText(resolved === null ? '' : String(resolved))
  }

  const finalizeDraft = () => {
    const trimmed = draftText.trim()
    if (trimmed === '') {
      if (current !== null) {
        commitImmediate(null)
      }
      setDraftText(current !== null && current !== undefined ? String(current) : '')
      return
    }
    const parsed = Number(trimmed)
    if (Number.isFinite(parsed)) {
      const resolved = commitClamped(parsed)
      setDraftText(resolved === null ? '' : String(resolved))
    } else {
      setDraftText(current !== null && current !== undefined ? String(current) : '')
    }
  }

  const displayedValue = isFocused ? draftText : (current ?? '')
  const isCompact = resolvedSize === 'xs'
  const stepperBtnWidth = isCompact ? 'w-5' : 'w-7'
  const displayCharLength = Math.max(
    2,
    String(displayedValue !== '' ? displayedValue : (placeholder ?? '')).length
  )

  const resolvedMinInlineSize = toCssLength(
    minWidth ?? (autoWidth ? INPUT_NUMBER_DEFAULT_MIN_WIDTH[resolvedSize] : undefined)
  )
  const resolvedMaxInlineSize = toCssLength(maxWidth ?? (autoWidth ? 220 : undefined))

  const containerStyle: React.CSSProperties = {
    ...(resolvedMinInlineSize ? { minInlineSize: resolvedMinInlineSize } : {}),
    ...(resolvedMaxInlineSize ? { maxInlineSize: resolvedMaxInlineSize } : {}),
    ...style,
  }

  const inputStyle = {
    appearance: 'textfield',
    MozAppearance: 'textfield',
    WebkitAppearance: 'none',
    ...(autoWidth ? { '--abc-input-ch': String(displayCharLength) } : {}),
  } as React.CSSProperties

  return (
    <div
      data-slot="input-number"
      data-testid={dataTestId}
      data-motion={resolvedMotion}
      data-auto-width={autoWidth ? 'true' : undefined}
      style={Object.keys(containerStyle).length > 0 ? containerStyle : undefined}
      className={cn(
        'inline-flex items-center overflow-hidden',
        baseFieldControlClass,
        autoWidth ? 'w-auto max-w-full' : 'w-full',
        HEIGHT_BY_SIZE[resolvedSize],
        invalid && 'border-[var(--abc-danger)]',
        disabled && 'opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]',
        className
      )}
    >
      <button
        type="button"
        data-abc-no-press-scale="true"
        aria-label="减少数值"
        disabled={disabled || (min !== undefined && (current ?? 0) <= min)}
        onClick={() => handleStep(-step)}
        className={cn(
          'flex h-full shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] transition-colors duration-[var(--abc-motion-fast,140ms)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer',
          stepperBtnWidth
        )}
      >
        <Minus className="h-3 w-3" />
      </button>
      <input
        id={inputId}
        type="number"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        data-draft-field={dataDraftField}
        value={displayedValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={() => {
          isFocusedRef.current = true
          setIsFocused(true)
          setDraftText(current !== null && current !== undefined ? String(current) : '')
        }}
        onBlur={() => {
          isFocusedRef.current = false
          setIsFocused(false)
          finalizeDraft()
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            finalizeDraft()
          }
        }}
        onChange={(e) => {
          const raw = e.target.value
          if (!isFocusedRef.current) {
            // 非聚焦态合成变更（兼容自动化测试直接 fireEvent.change）立即钳制提交，且保留高精度小数
            const resolved = commitClamped(raw === '' ? null : Number(raw))
            setDraftText(resolved === null ? '' : String(resolved))
            return
          }
          setDraftText(raw)
          if (raw === '') {
            // 正在输入 '-' 或 '37.' 期间浏览器返回空串且标记 badInput，等待用户继续输入而不触发父级回弹
            if (!e.target.validity?.badInput && current !== null) {
              commitImmediate(null)
            }
            return
          }
          const parsed = Number(raw)
          if (!Number.isFinite(parsed)) return
          const inRange =
            (min === undefined || parsed >= min) && (max === undefined || parsed <= max)
          // 仅在合法区间内实时同步，避免用户输入多位数（如 min=320 时键入 "1" 准备输 "1440"）被中途强行改写
          if (inRange) {
            commitImmediate(parsed)
          }
        }}
        className={cn(
          'h-full min-w-0 flex-1 bg-transparent text-center font-mono tabular-nums focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
          autoWidth ? 'w-auto' : 'w-full',
          isCompact ? 'px-1' : 'px-2.5'
        )}
      />
      {suffix && (
        <span className="shrink-0 select-none pr-1.5 font-mono text-[10px] text-[var(--abc-fg-muted)]">
          {suffix}
        </span>
      )}
      <button
        type="button"
        data-abc-no-press-scale="true"
        aria-label="增加数值"
        disabled={disabled || (max !== undefined && (current ?? 0) >= max)}
        onClick={() => handleStep(step)}
        className={cn(
          'flex h-full shrink-0 items-center justify-center border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] transition-colors duration-[var(--abc-motion-fast,140ms)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer',
          stepperBtnWidth
        )}
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
  mono?: boolean
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
      mono = false,
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
          mono && 'font-mono',
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
