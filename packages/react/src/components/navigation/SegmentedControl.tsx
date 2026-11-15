import * as React from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { cn } from '../../utils/cn'

export interface SegmentedOption<T extends string | number> {
  value: T
  label: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  badge?: React.ReactNode
}

export interface SegmentedControlProps<T extends string | number>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ReadonlyArray<SegmentedOption<T>>
  value: T
  onChange?: (value: T) => void
  onValueChange?: (value: T) => void
  disabled?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
  block?: boolean
}

const SIZE_CONTAINER: Record<AbcSize, string> = {
  xs: 'p-0.5 gap-0.5 rounded-[var(--abc-radius-sm,6px)]',
  sm: 'p-1 gap-1 rounded-[var(--abc-radius-md,8px)]',
  md: 'p-1 gap-1 rounded-[var(--abc-radius-md,8px)]',
  lg: 'p-1.5 gap-1.5 rounded-[var(--abc-radius-lg,10px)]',
}

const SIZE_BUTTON: Record<AbcSize, string> = {
  xs: 'px-2.5 py-0.5 text-[11px] h-6 rounded-[var(--abc-radius-xs,4px)]',
  sm: 'px-3 py-1 text-xs h-7 rounded-[var(--abc-radius-sm,6px)]',
  md: 'px-3.5 py-1.5 text-xs h-8 rounded-[var(--abc-radius-sm,6px)]',
  lg: 'px-4 py-2 text-sm h-9 rounded-[var(--abc-radius-md,8px)]',
}

/**
 * 分段选择器控件 (SegmentedControl)
 * 用于在多个互斥选项之间进行快捷切换，支持图标、角标、等宽/流式自适应布局
 */
export function SegmentedControl<T extends string | number>({
  options,
  value,
  onChange,
  onValueChange,
  disabled = false,
  size,
  motion,
  block = false,
  className,
  ...props
}: SegmentedControlProps<T>) {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const handleSelect = onChange ?? onValueChange

  return (
    <div
      role="group"
      data-slot="segmented-control"
      data-motion={resolvedMotion}
      className={cn(
        'inline-flex items-center border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)] shadow-2xs',
        block ? 'flex w-full' : 'inline-flex',
        SIZE_CONTAINER[resolvedSize],
        className
      )}
      {...props}
    >
      {options.map((option) => {
        const selected = option.value === value
        const isDisabled = disabled || Boolean(option.disabled)
        return (
          <button
            key={String(option.value)}
            type="button"
            aria-pressed={selected}
            disabled={isDisabled}
            onClick={() => handleSelect?.(option.value)}
            className={cn(
              'inline-flex cursor-pointer select-none items-center justify-center gap-1.5 font-medium transition-all outline-none',
              'focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40',
              block && 'flex-1',
              SIZE_BUTTON[resolvedSize],
              selected
                ? 'bg-[var(--abc-bg-surface)] font-semibold text-[var(--abc-primary)] shadow-2xs ring-1 ring-[var(--abc-border)]'
                : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]'
            )}
          >
            {option.icon}
            <span>{option.label}</span>
            {option.badge}
          </button>
        )
      })}
    </div>
  )
}
