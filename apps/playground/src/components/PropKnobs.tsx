import React from 'react'
import { Button, Input, InputNumber, RadioGroup, Select, Switch } from '@abc-design/react'
import { RotateCcw } from 'lucide-react'

export interface KnobOption<T extends string | number = string> {
  label: string
  value: T
  disabled?: boolean
}

export interface KnobBarProps {
  children: React.ReactNode
  onReset?: () => void
  extra?: React.ReactNode
}

/**
 * 统一交互属性控制条容器，支持多控件流式换行与右侧重置入口
 */
export const KnobBar: React.FC<KnobBarProps> = ({ children, onReset, extra }) => (
  <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2">
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">{children}</div>
    {(extra || onReset) && (
      <div className="flex shrink-0 items-center gap-2">
        {extra}
        {onReset && (
          <Button
            size="xs"
            variant="ghost"
            leftIcon={<RotateCcw className="h-3 w-3" />}
            onClick={onReset}
          >
            重置参数
          </Button>
        )}
      </div>
    )}
  </div>
)

export interface KnobSegmentedProps<T extends string | number = string> {
  label: string
  value: T
  options: ReadonlyArray<KnobOption<T>>
  onChange: (next: T) => void
}

/**
 * 枚举分段控制器；超过 5 个选项时建议改用 KnobSelect 防止工具栏溢出
 */
export function KnobSegmented<T extends string | number = string>({
  label,
  value,
  options,
  onChange,
}: KnobSegmentedProps<T>) {
  return (
    <div className="inline-flex flex-wrap items-center gap-1.5">
      <span className="font-mono text-[11px] font-medium text-[var(--abc-fg-secondary)]">
        {label}:
      </span>
      <RadioGroup
        variant="segmented"
        size="xs"
        value={value}
        onChange={(next) => onChange(next as T)}
        options={options.map((opt) => ({
          label: opt.label,
          value: opt.value,
          disabled: opt.disabled,
        }))}
      />
    </div>
  )
}

export interface KnobSelectProps<T extends string = string> {
  label: string
  value: T
  options: ReadonlyArray<KnobOption<T>>
  onChange: (next: T) => void
  widthClass?: string
}

/**
 * 下拉属性选择器，适合 6 项及以上枚举或长文案状态枚举
 */
export function KnobSelect<T extends string = string>({
  label,
  value,
  options,
  onChange,
  widthClass = 'w-36',
}: KnobSelectProps<T>) {
  return (
    <div className="inline-flex items-center gap-1.5">
      <span className="font-mono text-[11px] font-medium text-[var(--abc-fg-secondary)]">
        {label}:
      </span>
      <div className={widthClass}>
        <Select
          size="xs"
          value={value}
          onChange={(next) => onChange(String(next) as T)}
          options={options}
        />
      </div>
    </div>
  )
}

export interface KnobSwitchProps {
  label: string
  checked: boolean
  onChange: (next: boolean) => void
  disabled?: boolean
}

/**
 * 布尔开关调节项
 */
export const KnobSwitch: React.FC<KnobSwitchProps> = ({
  label,
  checked,
  onChange,
  disabled,
}) => (
  <label className="inline-flex cursor-pointer items-center gap-1.5 select-none">
    <Switch
      size="xs"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      ariaLabel={label}
    />
    <span className="font-mono text-[11px] text-[var(--abc-fg-secondary)]">{label}</span>
  </label>
)

export interface KnobNumberProps {
  label: string
  value: number
  onChange: (next: number) => void
  min?: number
  max?: number
  step?: number
  widthClass?: string
  minWidth?: number | string
  maxWidth?: number | string
}

/**
 * 数值步进调节项（默认开启内容驱动动态宽度，在 minWidth ~ maxWidth 间随数字位数自动伸缩）
 */
export const KnobNumber: React.FC<KnobNumberProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  widthClass,
  minWidth = 88,
  maxWidth = 176,
}) => (
  <div className="inline-flex items-center gap-1.5">
    <span className="font-mono text-[11px] font-medium text-[var(--abc-fg-secondary)]">
      {label}:
    </span>
    {widthClass ? (
      <div className={widthClass}>
        <InputNumber
          size="xs"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(v) => onChange(Number(v ?? min ?? 0))}
        />
      </div>
    ) : (
      <InputNumber
        size="xs"
        autoWidth
        minWidth={minWidth}
        maxWidth={maxWidth}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(v) => onChange(Number(v ?? min ?? 0))}
      />
    )}
  </div>
)

export interface KnobTextProps {
  label: string
  value: string
  onChange: (next: string) => void
  placeholder?: string
  widthClass?: string
}

/**
 * 文本字符串调节项
 */
export const KnobText: React.FC<KnobTextProps> = ({
  label,
  value,
  onChange,
  placeholder,
  widthClass = 'w-40',
}) => (
  <div className="inline-flex items-center gap-1.5">
    <span className="font-mono text-[11px] font-medium text-[var(--abc-fg-secondary)]">
      {label}:
    </span>
    <div className={widthClass}>
      <Input
        size="xs"
        aria-label={label}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
)
