import React, { useEffect, useId, useImperativeHandle, useRef } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { Check, Loader2, Minus } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
  label?: React.ReactNode
  description?: React.ReactNode
  wrapperClassName?: string
  className?: string
}

const CHECKBOX_BOX_SIZE: Record<AbcSize, string> = {
  xs: 'h-3.5 w-3.5',
  sm: 'h-4 w-4',
  md: 'h-4.5 w-4.5',
  lg: 'h-5 w-5',
}

const CHECKBOX_ICON_SIZE: Record<AbcSize, string> = {
  xs: 'h-2.5 w-2.5',
  sm: 'h-3 w-3',
  md: 'h-3.5 w-3.5',
  lg: 'h-3.5 w-3.5',
}

const CHECKBOX_LABEL_TEXT: Record<AbcSize, string> = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
}

/** 复选框组件（支持四档尺寸、动效规格、半选态 indeterminate、辅助描述与键盘无障碍操作） */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id: externalId,
      checked,
      defaultChecked = false,
      indeterminate = false,
      onChange,
      onCheckedChange,
      disabled = false,
      size,
      motion,
      label,
      description,
      wrapperClassName,
      className,
      ...rest
    },
    ref
  ) => {
    const resolvedSize = useAbcSize(size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
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
        data-motion={resolvedMotion}
        className={cn(
          'inline-flex text-[var(--abc-fg-secondary)] select-none',
          CHECKBOX_LABEL_TEXT[resolvedSize],
          hasContent ? 'items-start gap-2' : 'items-center justify-center',
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          wrapperClassName,
          className
        )}
      >
        <span
          className={cn(
            'relative inline-flex shrink-0 items-center justify-center',
            CHECKBOX_BOX_SIZE[resolvedSize],
            hasContent && 'mt-0.5'
          )}
        >
          <input
            {...rest}
            ref={innerRef}
            id={id}
            type="checkbox"
            data-slot="checkbox"
            checked={isChecked}
            disabled={disabled}
            onChange={(e) => {
              if (disabled) return
              const next = e.target.checked
              setIsChecked(next)
              onChange?.(next, e)
              onCheckedChange?.(next)
            }}
            className="peer sr-only"
          />
          <span
            className={cn(
              'flex items-center justify-center rounded-[var(--abc-radius-xs)] border transition-colors duration-[var(--abc-motion-fast,140ms)]',
              CHECKBOX_BOX_SIZE[resolvedSize],
              'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]',
              isChecked || indeterminate
                ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                : 'border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]'
            )}
          >
            {indeterminate ? (
              <Minus className={cn(CHECKBOX_ICON_SIZE[resolvedSize], 'stroke-[2.5] abc-motion-pop')} />
            ) : (
              isChecked && (
                <Check className={cn(CHECKBOX_ICON_SIZE[resolvedSize], 'stroke-[2.5] abc-motion-pop')} />
              )
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
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  loading?: boolean
  size?: AbcSize | 'small' | 'default'
  motion?: AbcMotionPreset
  label?: React.ReactNode
  description?: React.ReactNode
  checkedLabel?: React.ReactNode
  uncheckedLabel?: React.ReactNode
  checkedChildren?: React.ReactNode
  unCheckedChildren?: React.ReactNode
  ariaLabel?: string
  'aria-label'?: string
  className?: string
}

const SWITCH_TRACK_CLASS: Record<AbcSize, string> = {
  xs: 'h-4 w-7',
  sm: 'h-4.5 w-8',
  md: 'h-5.5 w-10',
  lg: 'h-6.5 w-12',
}

const SWITCH_THUMB_ON: Record<AbcSize, string> = {
  xs: 'h-3 w-3 translate-x-3',
  sm: 'h-3.5 w-3.5 translate-x-3.5',
  md: 'h-4.5 w-4.5 translate-x-4.5',
  lg: 'h-5.5 w-5.5 translate-x-5.5',
}

const SWITCH_THUMB_OFF: Record<AbcSize, string> = {
  xs: 'h-3 w-3 translate-x-0.5',
  sm: 'h-3.5 w-3.5 translate-x-0.5',
  md: 'h-4.5 w-4.5 translate-x-0.5',
  lg: 'h-5.5 w-5.5 translate-x-0.5',
}

/** 拨动开关组件（支持四档尺寸规格、动效规格、异步 loading 防重入态、无障碍标签描述与旧尺寸别名兼容） */
export const Switch: React.FC<SwitchProps> = ({
  id: externalId,
  checked,
  defaultChecked = false,
  onChange,
  onCheckedChange,
  disabled = false,
  loading = false,
  size,
  motion,
  label,
  description,
  checkedLabel,
  uncheckedLabel,
  checkedChildren,
  unCheckedChildren,
  ariaLabel,
  'aria-label': ariaLabelAttr,
  className,
}) => {
  const mappedPropSize: AbcSize | undefined =
    size === 'small' ? 'sm' : size === 'default' ? 'md' : size
  const resolvedSize = useAbcSize(mappedPropSize, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const generatedId = useId()
  const switchId = externalId || generatedId

  const [isOn, setIsOn] = useControllableState({
    value: checked,
    defaultValue: defaultChecked,
    onChange: (next) => {
      onChange?.(next)
      onCheckedChange?.(next)
    },
  })

  const isDisabled = Boolean(disabled || loading)
  const onText = checkedLabel ?? checkedChildren
  const offText = uncheckedLabel ?? unCheckedChildren

  const control = (
    <button
      id={switchId}
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label={ariaLabelAttr ?? ariaLabel}
      aria-labelledby={!ariaLabelAttr && !ariaLabel && label ? `${switchId}-label` : undefined}
      disabled={isDisabled}
      data-slot="switch"
      data-motion={resolvedMotion}
      onClick={() => {
        if (!isDisabled) setIsOn(!isOn)
      }}
      className={cn(
        'relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--abc-motion-base,220ms)] cursor-pointer select-none',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        SWITCH_TRACK_CLASS[resolvedSize],
        isOn ? 'bg-[var(--abc-primary)]' : 'bg-[var(--abc-border-strong)]',
        className
      )}
    >
      <span
        style={{
          transitionDuration: 'var(--abc-motion-base, 220ms)',
          transitionTimingFunction: 'var(--abc-ease-active, cubic-bezier(0.16, 1, 0.3, 1))',
        }}
        className={cn(
          'pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-xs transition-transform',
          isOn ? SWITCH_THUMB_ON[resolvedSize] : SWITCH_THUMB_OFF[resolvedSize]
        )}
      >
        {loading && <Loader2 className="h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" />}
      </span>
      {(onText || offText) && (
        <span className="sr-only">{isOn ? onText : offText}</span>
      )}
    </button>
  )

  if (!label && !description) {
    return control
  }

  return (
    <div className="flex items-start gap-2.5">
      {control}
      <div className="flex flex-col">
        {label ? (
          <label
            id={`${switchId}-label`}
            htmlFor={switchId}
            className="text-sm font-medium text-[var(--abc-fg)] cursor-pointer"
          >
            {label}
          </label>
        ) : null}
        {description ? (
          <span className="text-xs text-[var(--abc-fg-muted)]">{description}</span>
        ) : null}
      </div>
    </div>
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
  size?: AbcSize
  motion?: AbcMotionPreset
  disabled?: boolean
  className?: string
}

const SEGMENTED_CONTAINER_CLASS: Record<AbcSize, string> = {
  xs: 'p-0.5 gap-0.5',
  sm: 'p-0.5 gap-0.5',
  md: 'p-1 gap-1',
  lg: 'p-1 gap-1',
}

const SEGMENTED_ITEM_CLASS: Record<AbcSize, string> = {
  xs: 'px-2 py-0.5 text-[11px]',
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3.5 py-1.5 text-sm',
  lg: 'px-4 py-2 text-sm',
}

const RADIO_CIRCLE_CLASS: Record<AbcSize, string> = {
  xs: 'h-3.5 w-3.5',
  sm: 'h-4 w-4',
  md: 'h-4.5 w-4.5',
  lg: 'h-5 w-5',
}

const RADIO_DOT_CLASS: Record<AbcSize, string> = {
  xs: 'h-1.5 w-1.5',
  sm: 'h-2 w-2',
  md: 'h-2 w-2',
  lg: 'h-2.5 w-2.5',
}

const RADIO_TEXT_CLASS: Record<AbcSize, string> = {
  xs: 'text-xs gap-1.5',
  sm: 'text-xs gap-2',
  md: 'text-sm gap-2',
  lg: 'text-sm gap-2.5',
}

/** 单选组（支持常规圆点与分段胶囊卡片双样式、全四档尺寸规格及动效规格） */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  variant = 'default',
  size,
  motion,
  disabled = false,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)

  const [current, setCurrent] = useControllableState<string | number>({
    value,
    defaultValue: defaultValue ?? options[0]?.value ?? '',
    onChange,
  })

  if (variant === 'segmented') {
    return (
      <div
        role="radiogroup"
        data-slot="radio-group"
        data-motion={resolvedMotion}
        className={cn(
          'inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]',
          SEGMENTED_CONTAINER_CLASS[resolvedSize],
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
                'rounded-[var(--abc-radius-sm)] font-medium transition-colors duration-[var(--abc-motion-fast,140ms)] cursor-pointer select-none',
                SEGMENTED_ITEM_CLASS[resolvedSize],
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
    <div
      role="radiogroup"
      data-slot="radio-group"
      data-motion={resolvedMotion}
      className={cn('inline-flex flex-wrap items-center gap-4', className)}
    >
      {options.map((opt) => {
        const active = String(current) === String(opt.value)
        const isDisabled = Boolean(disabled || opt.disabled)
        return (
          <label
            key={String(opt.value)}
            className={cn(
              'inline-flex items-center text-[var(--abc-fg-secondary)] select-none',
              RADIO_TEXT_CLASS[resolvedSize],
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
                'flex items-center justify-center rounded-full border transition-colors duration-[var(--abc-motion-fast,140ms)]',
                RADIO_CIRCLE_CLASS[resolvedSize],
                active
                  ? 'border-[var(--abc-primary)]'
                  : 'border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]'
              )}
            >
              {active && (
                <span
                  className={cn(
                    'rounded-full bg-[var(--abc-primary)] abc-motion-pop',
                    RADIO_DOT_CLASS[resolvedSize]
                  )}
                />
              )}
            </span>
            <span>{opt.label}</span>
          </label>
        )
      })}
    </div>
  )
}

export interface CheckableTagProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  mono?: boolean
  size?: 'sm' | 'md'
  labelClassName?: string
}

/** 可勾选胶囊标签 (CheckableTag) */
export const CheckableTag = React.forwardRef<HTMLInputElement, CheckableTagProps>(
  (
    {
      checked = false,
      disabled = false,
      label,
      children,
      mono = true,
      size = 'md',
      className,
      labelClassName,
      onChange,
      onCheckedChange,
      ...props
    },
    ref
  ) => (
    <label
      data-slot="checkable-tag"
      data-state={checked ? 'checked' : 'unchecked'}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border font-medium transition-all duration-150 select-none',
        'focus-within:outline-none focus-within:ring-2 focus-within:ring-[var(--abc-ring)]',
        size === 'sm' ? 'px-2 py-1 text-[11px]' : 'px-2.5 py-1.5 text-xs',
        mono && 'font-mono',
        checked
          ? 'border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs'
          : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        labelClassName,
        className
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className="sr-only"
        onChange={(event) => {
          onChange?.(event)
          onCheckedChange?.(event.target.checked)
        }}
        {...props}
      />
      <Check
        aria-hidden="true"
        strokeWidth={2.75}
        className={cn(
          'shrink-0 transition-all duration-150',
          checked
            ? 'size-3.5 scale-100 opacity-100 text-[var(--abc-primary)]'
            : 'size-0 scale-0 opacity-0'
        )}
      />
      <span>{children ?? label}</span>
    </label>
  )
)
CheckableTag.displayName = 'CheckableTag'

export interface CheckableTagOption<T extends string = string> {
  value: T
  label?: React.ReactNode
  disabled?: boolean
}

export interface CheckableTagGroupProps<T extends string = string>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ReadonlyArray<T | CheckableTagOption<T>>
  value?: ReadonlyArray<T>
  values?: ReadonlyArray<T>
  onValueChange?: (next: T[]) => void
  onValuesChange?: (next: T[]) => void
  mono?: boolean
  size?: 'sm' | 'md'
}

/** 声明式多选胶囊标签组 (CheckableTagGroup) */
export function CheckableTagGroup<T extends string = string>({
  options,
  value,
  values,
  onValueChange,
  onValuesChange,
  mono = true,
  size = 'md',
  className,
  ...props
}: CheckableTagGroupProps<T>) {
  const activeValues = value ?? values ?? []
  const handleChange = onValueChange ?? onValuesChange ?? (() => {})
  return (
    <div
      data-slot="checkable-tag-group"
      className={cn('flex flex-wrap gap-2', className)}
      {...props}
    >
      {options.map((raw) => {
        const option: CheckableTagOption<T> =
          typeof raw === 'string' ? { value: raw, label: raw } : raw
        const isChecked = activeValues.includes(option.value)
        return (
          <CheckableTag
            key={option.value}
            checked={isChecked}
            disabled={option.disabled}
            mono={mono}
            size={size}
            onCheckedChange={(checked) => {
              if (checked) {
                handleChange([...activeValues, option.value])
              } else {
                handleChange(activeValues.filter((item) => item !== option.value))
              }
            }}
          >
            {option.label ?? option.value}
          </CheckableTag>
        )
      })}
    </div>
  )
}

