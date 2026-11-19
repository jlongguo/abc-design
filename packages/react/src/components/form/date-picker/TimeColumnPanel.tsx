import { buildTimeUnitOptions, type AbcTimeParts } from '@abc-design/core'
import React, { useEffect, useMemo, useRef } from 'react'
import { cn } from '../../../utils/cn'

export interface TimeColumnPanelProps {
  value: AbcTimeParts
  onChange: (next: AbcTimeParts) => void
  showSecond?: boolean
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  /** 面板标题（如区间选择器的“开始时间 / 结束时间”） */
  title?: string
  /** 是否限制列高度以适配内嵌日历旁栏 */
  compact?: boolean
  className?: string
}

interface TimeUnitColumnProps {
  label: string
  options: number[]
  selected: number
  onSelect: (val: number) => void
  compact?: boolean
}

const TimeUnitColumn: React.FC<TimeUnitColumnProps> = ({
  label,
  options,
  selected,
  onSelect,
  compact = false,
}) => {
  const listRef = useRef<HTMLDivElement>(null)

  // 展开或选中值切换时自动居中滚动到对应刻度（仅操作局部列 scrollTop，避免页面抖动）
  useEffect(() => {
    const host = listRef.current
    if (!host) return
    const activeBtn = host.querySelector<HTMLButtonElement>('[data-time-selected="true"]')
    if (!activeBtn) return
    const targetTop = activeBtn.offsetTop - host.clientHeight / 2 + activeBtn.clientHeight / 2
    host.scrollTop = Math.max(0, targetTop)
  }, [selected])

  return (
    <div className="flex w-13 flex-col">
      <div className="border-b border-[var(--abc-border)] py-1 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]">
        {label}
      </div>
      <div
        ref={listRef}
        role="listbox"
        aria-label={label}
        className={cn(
          'overflow-y-auto px-1 py-1 [scrollbar-width:thin]',
          compact ? 'h-[212px]' : 'h-[208px]'
        )}
      >
        {options.map((num) => {
          const isSelected = num === selected
          const padded = String(num).padStart(2, '0')
          return (
            <button
              key={num}
              type="button"
              role="option"
              aria-selected={isSelected}
              data-time-selected={isSelected ? 'true' : undefined}
              onClick={() => onSelect(num)}
              className={cn(
                'mb-0.5 flex h-7 w-full items-center justify-center rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer',
                isSelected
                  ? 'bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]'
                  : 'text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]'
              )}
            >
              {padded}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/**
 * 通用时/分[/秒]滚轮列选择器（供 DatePicker showTime、DateRangePicker showTime、TimePicker 与 TimeRangePicker 复用）
 */
export const TimeColumnPanel: React.FC<TimeColumnPanelProps> = ({
  value,
  onChange,
  showSecond = true,
  hourStep = 1,
  minuteStep = 1,
  secondStep = 1,
  title,
  compact = false,
  className,
}) => {
  const hours = useMemo(() => buildTimeUnitOptions(24, hourStep), [hourStep])
  const minutes = useMemo(() => buildTimeUnitOptions(60, minuteStep), [minuteStep])
  const seconds = useMemo(() => buildTimeUnitOptions(60, secondStep), [secondStep])

  return (
    <div
      data-slot="time-column-panel"
      className={cn('flex flex-col select-none', className)}
    >
      {title && (
        <div className="mb-1.5 text-center text-[11px] font-semibold text-[var(--abc-fg-secondary)]">
          {title}
        </div>
      )}
      <div className="flex divide-x divide-[var(--abc-border)] rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] overflow-hidden">
        <TimeUnitColumn
          label="时"
          options={hours}
          selected={value.hour}
          compact={compact}
          onSelect={(hour) => onChange({ ...value, hour })}
        />
        <TimeUnitColumn
          label="分"
          options={minutes}
          selected={value.minute}
          compact={compact}
          onSelect={(minute) => onChange({ ...value, minute })}
        />
        {showSecond && (
          <TimeUnitColumn
            label="秒"
            options={seconds}
            selected={value.second}
            compact={compact}
            onSelect={(second) => onChange({ ...value, second })}
          />
        )}
      </div>
    </div>
  )
}
