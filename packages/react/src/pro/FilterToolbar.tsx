import { RotateCcw } from 'lucide-react'
import * as React from 'react'
import { Button } from '../components/button/Button'
import { cn } from '../utils/cn'

export interface FilterToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  surface?: boolean
  hasActiveFilters?: boolean
  onReset?: () => void
  resetLabel?: React.ReactNode
  search?: React.ReactNode
  filters?: React.ReactNode
  trailing?: React.ReactNode
}

/**
 * 筛选工具栏 (FilterToolbar)
 * 用于统一容纳快速搜索框、筛选项下拉组、枚举胶囊组与全局重置按钮
 */
export const FilterToolbar = React.forwardRef<HTMLDivElement, FilterToolbarProps>(
  (
    {
      surface = false,
      hasActiveFilters = false,
      onReset,
      resetLabel = '重置筛选',
      search,
      filters,
      trailing,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="filter-toolbar"
        className={cn(
          'flex flex-wrap items-center justify-between gap-2.5',
          surface && 'rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3.5 shadow-2xs',
          className
        )}
        {...props}
      >
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
          {search}
          {filters}
          {children}
        </div>
        {(hasActiveFilters && onReset) || trailing ? (
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            {hasActiveFilters && onReset ? (
              <Button
                variant="ghost"
                size="xs"
                onClick={onReset}
                className="text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
              >
                <RotateCcw className="h-3 w-3 mr-1" aria-hidden="true" />
                <span>{resetLabel}</span>
              </Button>
            ) : null}
            {trailing}
          </div>
        ) : null}
      </div>
    )
  }
)
FilterToolbar.displayName = 'FilterToolbar'

export interface FilterPillOption<T extends string = string> {
  value: T
  label: React.ReactNode
  count?: number
  icon?: React.ReactNode
  disabled?: boolean
}

export interface FilterPillGroupProps<T extends string = string>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ReadonlyArray<FilterPillOption<T>>
  value: T
  onValueChange: (value: T) => void
  size?: 'sm' | 'md'
}

/**
 * 分类胶囊单选组 (FilterPillGroup)
 * 用于状态过滤（如 全部/待审批/已通过/已拒绝）的快速切换
 */
export function FilterPillGroup<T extends string = string>({
  options,
  value,
  onValueChange,
  size = 'sm',
  className,
  ...props
}: FilterPillGroupProps<T>) {
  return (
    <div
      role="group"
      data-slot="filter-pill-group"
      className={cn('inline-flex flex-wrap items-center gap-1.5', className)}
      {...props}
    >
      {options.map((option) => {
        const selected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            disabled={option.disabled}
            aria-pressed={selected}
            onClick={() => onValueChange(option.value)}
            className={cn(
              'inline-flex cursor-pointer select-none items-center gap-1.5 rounded-full border font-medium transition-all outline-none',
              'focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40',
              size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs',
              selected
                ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#ffffff)] shadow-2xs font-semibold'
                : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-border-hover,#cbd5e1)] hover:text-[var(--abc-fg)]'
            )}
          >
            {option.icon}
            <span>{option.label}</span>
            {option.count !== undefined && (
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.2 text-[10px] tabular-nums font-mono',
                  selected
                    ? 'bg-white/20 text-white'
                    : 'bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]'
                )}
              >
                {option.count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export interface QuickSelectBarItem {
  id?: string
  key?: string
  label: React.ReactNode
  code?: string
  active?: boolean
  count?: number
  onSelect?: () => void
}

export interface QuickSelectBarProps {
  label: string
  items: QuickSelectBarItem[]
  selectedId?: string | null
  headerAction?: React.ReactNode
  onSelect?: (id: string | null) => void
  onClear?: () => void
  allLabel?: string
  className?: string
}

/**
 * 快捷选择条 (QuickSelectBar)
 * 紧凑型水平快速筛选器
 */
export function QuickSelectBar({
  label,
  items,
  selectedId = null,
  headerAction,
  onSelect,
  onClear,
  allLabel = '全部',
  className,
}: QuickSelectBarProps) {
  return (
    <div
      data-slot="quick-select-bar"
      className={cn(
        'flex flex-wrap items-center gap-2 rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="font-medium text-[var(--abc-fg-secondary)]">{label}：</span>
        {headerAction}
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {onSelect && (
          <button
            type="button"
            onClick={() => onSelect(null)}
            className={cn(
              'cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors',
              selectedId === null
                ? 'bg-[var(--abc-primary)] font-semibold text-white'
                : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]'
            )}
          >
            {allLabel}
          </button>
        )}
        {items.map((item, index) => {
          const itemId = item.id ?? item.key ?? item.code ?? String(index)
          const isSelected = item.active !== undefined ? item.active : selectedId === itemId
          return (
            <button
              key={itemId}
              type="button"
              onClick={() => {
                if (item.onSelect) {
                  item.onSelect()
                } else if (onSelect) {
                  onSelect(itemId)
                }
              }}
              className={cn(
                'cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors',
                isSelected
                  ? 'bg-[var(--abc-primary)] font-semibold text-white'
                  : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]'
              )}
            >
              {item.label}
              {item.count !== undefined ? ` (${item.count})` : ''}
            </button>
          )
        })}
      </div>
      {selectedId !== null && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="ml-auto cursor-pointer text-xs text-[var(--abc-fg-muted)] underline underline-offset-2 hover:text-[var(--abc-fg)]"
        >
          清除
        </button>
      )}
    </div>
  )
}
