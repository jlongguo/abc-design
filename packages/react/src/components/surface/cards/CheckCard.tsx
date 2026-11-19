import React, { createContext, useContext, useId } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { Check } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../../hooks'
import { useControllableState } from '../../../hooks/useControllableState'
import { cn } from '../../../utils/cn'
import { DESC_TEXT, ICON_BOX_SIZE, SURFACE_PAD, TITLE_TEXT } from './shared'

export type CheckCardValue = string | number

interface CheckCardGroupContextValue {
  multiple: boolean
  value: CheckCardValue | CheckCardValue[] | undefined
  disabled?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
  name: string
  toggleValue: (itemVal: CheckCardValue) => void
}

const CheckCardGroupContext = createContext<CheckCardGroupContextValue | null>(null)

export interface CheckCardGroupProps {
  multiple?: boolean
  value?: CheckCardValue | CheckCardValue[]
  defaultValue?: CheckCardValue | CheckCardValue[]
  onChange?: (nextValue: CheckCardValue | CheckCardValue[]) => void
  disabled?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
  columns?: 1 | 2 | 3 | 4
  className?: string
  children: React.ReactNode
}

const GROUP_COLS_CLASS: Record<NonNullable<CheckCardGroupProps['columns']>, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

/**
 * 表单选择卡片组 (CheckCardGroup)
 * 支持单选与多选模式，通过原生语义 input 保证键盘方向键/空格操作与读屏器兼容
 */
export const CheckCardGroup: React.FC<CheckCardGroupProps> = ({
  multiple = false,
  value: controlledValue,
  defaultValue,
  onChange,
  disabled = false,
  size,
  motion,
  columns = 2,
  className,
  children,
}) => {
  const groupName = useId()
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)

  const [value, setValue] = useControllableState<CheckCardValue | CheckCardValue[]>({
    value: controlledValue,
    defaultValue: defaultValue ?? (multiple ? [] : ''),
    onChange,
  })

  const toggleValue = (itemVal: CheckCardValue) => {
    if (disabled) return
    if (multiple) {
      const currentArr = Array.isArray(value) ? value : []
      const exists = currentArr.includes(itemVal)
      const next = exists ? currentArr.filter((v) => v !== itemVal) : [...currentArr, itemVal]
      setValue(next)
    } else {
      setValue(itemVal)
    }
  }

  return (
    <CheckCardGroupContext.Provider
      value={{
        multiple,
        value,
        disabled,
        size: resolvedSize,
        motion: resolvedMotion,
        name: groupName,
        toggleValue,
      }}
    >
      <div
        role={multiple ? 'group' : 'radiogroup'}
        data-motion={resolvedMotion}
        className={cn('grid gap-3', GROUP_COLS_CLASS[columns], className)}
      >
        {children}
      </div>
    </CheckCardGroupContext.Provider>
  )
}

export interface CheckCardProps {
  value?: CheckCardValue
  title: React.ReactNode
  description?: React.ReactNode
  avatar?: React.ReactNode
  icon?: React.ReactNode
  extra?: React.ReactNode
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
  children?: React.ReactNode
}

/**
 * 可勾选卡片 (CheckCard)
 * 选中态仅改变边框颜色与微阴影/背景，绝不改变 border-width、padding 或 font-weight 以彻底消除重排抖动
 */
export const CheckCard: React.FC<CheckCardProps> = ({
  value,
  title,
  description,
  avatar,
  icon,
  extra,
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  disabled: disabledProp = false,
  size,
  motion,
  className,
  children,
}) => {
  const group = useContext(CheckCardGroupContext)
  const resolvedSize = useAbcSize(size ?? group?.size, 'md')
  const resolvedMotion = useAbcMotion(motion ?? group?.motion)
  const isDisabled = Boolean(disabledProp || group?.disabled)
  const isGrouped = Boolean(group && value !== undefined)
  const inputType = group && !group.multiple ? 'radio' : 'checkbox'

  const [standaloneChecked, setStandaloneChecked] = useControllableState<boolean>({
    value: controlledChecked,
    defaultValue: defaultChecked,
    onChange,
  })

  const isChecked = isGrouped
    ? group!.multiple
      ? Array.isArray(group!.value) && group!.value.includes(value!)
      : group!.value === value
    : standaloneChecked

  const handleToggle = (next: boolean) => {
    if (isDisabled) return
    if (isGrouped) {
      group!.toggleValue(value!)
    } else {
      setStandaloneChecked(next)
    }
  }

  return (
    <label
      data-slot="check-card"
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      data-checked={isChecked ? 'true' : 'false'}
      className={cn(
        '@container group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none',
        SURFACE_PAD[resolvedSize],
        isChecked
          ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-primary)]/20'
          : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)]',
        !isDisabled && !isChecked && 'hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/50',
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        'has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--abc-ring)] has-[:focus-visible]:ring-offset-1',
        className
      )}
    >
      <input
        type={inputType}
        name={group?.name}
        value={value !== undefined ? String(value) : undefined}
        checked={Boolean(isChecked)}
        disabled={isDisabled}
        onChange={(e) => handleToggle(e.target.checked)}
        className="sr-only"
      />

      {(avatar || icon) && (
        <span
          className={cn(
            'inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]',
            ICON_BOX_SIZE[resolvedSize]
          )}
        >
          {avatar ?? icon}
        </span>
      )}

      <div className="min-w-0 flex-1 pr-5">
        <div className="flex items-center justify-between gap-2">
          <span className={cn('font-semibold text-[var(--abc-fg)]', TITLE_TEXT[resolvedSize])}>
            {title}
          </span>
          {extra && <span className="shrink-0">{extra}</span>}
        </div>
        {description && (
          <p className={cn('mt-1 leading-relaxed text-[var(--abc-fg-muted)]', DESC_TEXT[resolvedSize])}>
            {description}
          </p>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>

      {/* 右上角选中状态徽标（仅绝对定位出现，不挤压任何文字宽度） */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-2.5 right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors',
          isChecked
            ? 'abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
            : 'border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent'
        )}
      >
        <Check className="h-3 w-3" />
      </span>
    </label>
  )
}
