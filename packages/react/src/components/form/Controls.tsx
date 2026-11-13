import React, { useEffect, useId, useImperativeHandle, useRef } from 'react'
import { Check, Loader2, Minus } from 'lucide-react'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  label?: React.ReactNode
  description?: React.ReactNode
  className?: string
}

/** 复选框组件（支持半选态 indeterminate、辅助描述与键盘无障碍操作） */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id: externalId,
      checked,
      defaultChecked = false,
      indeterminate = false,
      onChange,
      disabled = false,
      label,
      description,
      className,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId()
    const id = externalId || generatedId
    const innerRef = useRef<HTMLInputElement | null>(null)
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement, [])

    const [isChecked, setIsChecked] = useControllableState({
      value: checked,
      defaultValue: defaultChecked,
    })

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = Boolean(indeterminate)
      }
    }, [indeterminate])

    const hasContent = Boolean(label || description)

    return (
      <label
        htmlFor={id}
        className={cn(
          'inline-flex text-xs text-[var(--abc-fg-secondary)] select-none',
          hasContent ? 'items-start gap-2' : 'items-center justify-center',
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          className
        )}
      >
        <span className={cn('relative inline-flex h-4 w-4 shrink-0 items-center justify-center', hasContent && 'mt-0.5')}>
          <input
            {...rest}
            ref={innerRef}
            id={id}
            type="checkbox"
            checked={isChecked}
            disabled={disabled}
            onChange={(e) => {
              if (disabled) return
              const next = e.target.checked
              setIsChecked(next)
              onChange?.(next, e)
            }}
            className="peer sr-only"
          />
          <span
            className={cn(
              'flex h-4 w-4 items-center justify-center rounded-[var(--abc-radius-xs)] border transition-all duration-150',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]',
              isChecked || indeterminate
                ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                : 'border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]'
            )}
          >
            {indeterminate ? (
              <Minus className="h-3 w-3 stroke-[2.5]" />
            ) : (
              isChecked && <Check className="h-3 w-3 stroke-[2.5]" />
            )}
          </span>
        </span>
        {hasContent && (
          <span className="flex flex-col">
            {label && <span className="font-medium text-[var(--abc-fg)]">{label}</span>}
            {description && (
              <span className="text-[11px] text-[var(--abc-fg-muted)]">{description}</span>
            )}
          </span>
        )}
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'small' | 'default'
  checkedLabel?: React.ReactNode
  uncheckedLabel?: React.ReactNode
  checkedChildren?: React.ReactNode
  unCheckedChildren?: React.ReactNode
  ariaLabel?: string
  className?: string
}

/** 拨动开关组件（支持异步 loading 防重入态与双尺寸映射） */
export const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  loading = false,
  size = 'md',
  checkedLabel,
  uncheckedLabel,
  checkedChildren,
  unCheckedChildren,
  ariaLabel,
  className,
}) => {
  const [isOn, setIsOn] = useControllableState({
    value: checked,
    defaultValue: defaultChecked,
    onChange,
  })

  const isSmall = size === 'sm' || size === 'small'
  const isDisabled = Boolean(disabled || loading)
  const onText = checkedLabel ?? checkedChildren
  const offText = uncheckedLabel ?? unCheckedChildren

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label={ariaLabel}
      disabled={isDisabled}
      onClick={() => {
        if (!isDisabled) setIsOn(!isOn)
      }}
      className={cn(
        'relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-200 cursor-pointer select-none',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        isSmall ? 'h-4.5 w-8' : 'h-5.5 w-10',
        isOn ? 'bg-[var(--abc-primary)]' : 'bg-[var(--abc-border-strong)]',
        className
      )}
    >
      <span
        className={cn(
          'pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-xs transition-transform duration-200',
          isSmall
            ? cn('h-3.5 w-3.5', isOn ? 'translate-x-3.5' : 'translate-x-0.5')
            : cn('h-4.5 w-4.5', isOn ? 'translate-x-4.5' : 'translate-x-0.5')
        )}
      >
        {loading && <Loader2 className="h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" />}
      </span>
      {(onText || offText) && (
        <span className="sr-only">{isOn ? onText : offText}</span>
      )}
    </button>
  )
}

export interface RadioGroupOption {
  label: React.ReactNode
  value: string | number
  disabled?: boolean
}

export interface RadioGroupProps {
  options: RadioGroupOption[]
  value?: string | number
  defaultValue?: string | number
  onChange?: (val: string | number) => void
  variant?: 'default' | 'segmented'
  disabled?: boolean
  className?: string
}

/** 单选组（支持常规圆点与分段胶囊卡片双样式） */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  variant = 'default',
  disabled = false,
  className,
}) => {
  const [current, setCurrent] = useControllableState<string | number>({
    value,
    defaultValue: defaultValue ?? options[0]?.value ?? '',
    onChange,
  })

  if (variant === 'segmented') {
    return (
      <div
        role="radiogroup"
        className={cn(
          'inline-flex items-center gap-0.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-0.5',
          className
        )}
      >
        {options.map((opt) => {
          const active = String(current) === String(opt.value)
          const isDisabled = Boolean(disabled || opt.disabled)
          return (
            <button
              key={String(opt.value)}
              type="button"
              role="radio"
              aria-checked={active}
              disabled={isDisabled}
              onClick={() => setCurrent(opt.value)}
              className={cn(
                'rounded-[var(--abc-radius-sm)] px-2.5 py-1 text-xs font-medium transition-all cursor-pointer select-none',
                active
                  ? 'bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs'
                  : 'text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]',
                isDisabled && 'opacity-45 cursor-not-allowed'
              )}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div role="radiogroup" className={cn('inline-flex flex-wrap items-center gap-4', className)}>
      {options.map((opt) => {
        const active = String(current) === String(opt.value)
        const isDisabled = Boolean(disabled || opt.disabled)
        return (
          <label
            key={String(opt.value)}
            className={cn(
              'inline-flex items-center gap-2 text-xs text-[var(--abc-fg-secondary)] select-none',
              isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            )}
          >
            <input
              type="radio"
              checked={active}
              disabled={isDisabled}
              onChange={() => setCurrent(opt.value)}
              className="peer sr-only"
            />
            <span
              className={cn(
                'flex h-4 w-4 items-center justify-center rounded-full border transition-all',
                active
                  ? 'border-[var(--abc-primary)]'
                  : 'border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]'
              )}
            >
              {active && <span className="h-2 w-2 rounded-full bg-[var(--abc-primary)]" />}
            </span>
            <span>{opt.label}</span>
          </label>
        )
      })}
    </div>
  )
}
