import React, { createContext, useContext, useId } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { useAbcMotion, useAbcSize } from '../../hooks'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'

interface TabsCompoundContextValue {
  baseId: string
  currentValue: string
  onSelect: (nextValue: string) => void
  size: AbcSize
  motion: AbcMotionPreset
}

const TabsCompoundContext = createContext<TabsCompoundContextValue | null>(null)

export interface TabItem<K extends string = string> {
  key: K
  label: React.ReactNode
  icon?: React.ReactNode
  badge?: React.ReactNode
  disabled?: boolean
  children?: React.ReactNode
}

export interface TabsProps<K extends string = string> {
  items?: TabItem<K>[]
  activeKey?: K
  /** activeKey 受控别名 */
  value?: K
  defaultActiveKey?: K
  defaultValue?: K
  onChange?: (key: K) => void
  onValueChange?: (key: K) => void
  variant?: 'line' | 'pills' | 'segmented'
  size?: AbcSize
  motion?: AbcMotionPreset
  ariaLabel?: string
  extra?: React.ReactNode
  className?: string
  panelClassName?: string
  children?: React.ReactNode
}

/**
 * 响应式无障碍标签页组件
 * 同时支持声明式 items 模式与复合子组件 (TabsList / TabsTrigger / TabsContent) 模式
 */
export function Tabs<K extends string = string>({
  items,
  activeKey,
  value,
  defaultActiveKey,
  defaultValue,
  onChange,
  onValueChange,
  variant = 'line',
  size,
  motion,
  ariaLabel = '内容切换标签',
  extra,
  className,
  panelClassName,
  children,
}: TabsProps<K>) {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const baseId = useId()
  const handleSelect = (next: K) => {
    onChange?.(next)
    onValueChange?.(next)
  }
  const [currentKey, setCurrentKey] = useControllableState<K>({
    value: activeKey ?? value,
    defaultValue: defaultActiveKey ?? defaultValue ?? ((items?.[0]?.key as K) ?? ('' as K)),
    onChange: handleSelect,
  })

  if (!items && children !== undefined) {
    return (
      <TabsCompoundContext.Provider
        value={{
          baseId,
          currentValue: String(currentKey ?? ''),
          onSelect: (next) => setCurrentKey(next as K),
          size: resolvedSize,
          motion: resolvedMotion,
        }}
      >
        <div data-slot="tabs" data-motion={resolvedMotion} className={cn('w-full', className)}>
          {children}
        </div>
      </TabsCompoundContext.Provider>
    )
  }

  const safeItems = items ?? []
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const enabledItems = safeItems.filter((item) => !item.disabled)
    if (enabledItems.length === 0) return
    const currentEnabledIdx = enabledItems.findIndex((item) => item.key === safeItems[index]?.key)
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const next = enabledItems[(currentEnabledIdx + 1) % enabledItems.length]
      if (next) setCurrentKey(next.key)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev =
        enabledItems[(currentEnabledIdx - 1 + enabledItems.length) % enabledItems.length]
      if (prev) setCurrentKey(prev.key)
    }
  }

  const hasAnyPanelContent = safeItems.some((item) => item.children !== undefined)

  const paddingBySize =
    resolvedSize === 'xs'
      ? 'px-2.5 py-1 text-[11px]'
      : resolvedSize === 'sm'
        ? 'px-3 py-1.5 text-xs'
        : resolvedSize === 'lg'
          ? 'px-4.5 py-2.5 text-sm'
          : variant === 'line'
            ? 'px-3.5 py-2.5 text-xs'
            : 'px-3.5 py-1.5 text-xs'

  return (
    <div data-motion={resolvedMotion} className={cn('w-full', className)}>
      <div
        className={cn(
          'flex items-center justify-between gap-3',
          variant === 'line' && 'border-b border-[var(--abc-border)]'
        )}
      >
        <div
          role="tablist"
          aria-label={ariaLabel}
          className={cn(
            'flex flex-nowrap items-center overflow-x-auto [scrollbar-width:none]',
            variant === 'segmented'
              ? 'gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1'
              : variant === 'pills'
                ? 'gap-1.5'
                : 'gap-1'
          )}
        >
          {safeItems.map((item, idx) => {
            const selected = item.key === currentKey
            const tabId = `${baseId}-tab-${item.key}`
            return (
              <button
                key={item.key}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                disabled={item.disabled}
                onClick={() => !item.disabled && setCurrentKey(item.key)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={cn(
                  'abc-motion-control relative inline-flex flex-none items-center gap-1.5 font-medium whitespace-nowrap transition-colors cursor-pointer select-none',
                  'disabled:opacity-45 disabled:cursor-not-allowed',
                  paddingBySize,
                  variant === 'line'
                    ? cn(
                        'abc-tab-trigger',
                        selected
                          ? 'font-semibold text-[var(--abc-primary)]'
                          : 'text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]'
                      )
                    : variant === 'segmented'
                      ? cn(
                          'rounded-[var(--abc-radius-sm)]',
                          selected
                            ? 'bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs'
                            : 'text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]'
                        )
                      : cn(
                          'rounded-[var(--abc-radius-md)] border',
                          selected
                            ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                            : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:border-[var(--abc-border-strong)]'
                        )
                )}
              >
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                <span>{item.label}</span>
                {item.badge !== undefined &&
                  (typeof item.badge === 'number' || typeof item.badge === 'string' ? (
                    <span className="rounded-full bg-[var(--abc-bg-subtle)] px-1.5 py-0.2 font-mono text-[10px] tabular-nums">
                      {item.badge}
                    </span>
                  ) : (
                    item.badge
                  ))}
              </button>
            )
          })}
        </div>

        {extra && <div className="shrink-0">{extra}</div>}
      </div>

      {hasAnyPanelContent && (
        <div>
          {safeItems.map((item) => {
            const selected = item.key === currentKey
            const tabId = `${baseId}-tab-${item.key}`
            return (
              <div
                key={item.key}
                role="tabpanel"
                aria-labelledby={tabId}
                tabIndex={selected ? 0 : undefined}
                {...(!selected ? ({ hidden: 'until-found' } as any) : {})}
              >
                {selected && (
                  <div className={cn('pt-4', resolvedMotion !== 'none' && 'abc-animate-fade-in', panelClassName)}>
                    {item.children}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="tablist"
      data-slot="tabs-list"
      className={cn(
        'inline-flex items-center gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1 text-[var(--abc-fg-muted)]',
        className
      )}
      {...props}
    />
  )
)
TabsList.displayName = 'TabsList'

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, className, children, onClick, disabled, ...props }, ref) => {
    const ctx = useContext(TabsCompoundContext)
    const selected = ctx?.currentValue === value
    const tabId = ctx ? `${ctx.baseId}-tab-${value}` : undefined

    return (
      <button
        ref={ref}
        id={tabId}
        type="button"
        role="tab"
        data-slot="tabs-trigger"
        data-state={selected ? 'active' : 'inactive'}
        aria-selected={selected}
        disabled={disabled}
        onClick={(e) => {
          onClick?.(e)
          if (!disabled) ctx?.onSelect(value)
        }}
        className={cn(
          'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-[var(--abc-radius-sm)] px-3 py-1.5 text-xs font-medium transition-all cursor-pointer select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] disabled:pointer-events-none disabled:opacity-50',
          selected
            ? 'bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-2xs'
            : 'text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = 'TabsTrigger'

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, children, ...props }, ref) => {
    const ctx = useContext(TabsCompoundContext)
    const selected = !ctx || ctx.currentValue === value
    const tabId = ctx ? `${ctx.baseId}-tab-${value}` : undefined

    return (
      <div
        ref={ref}
        role="tabpanel"
        data-slot="tabs-content"
        aria-labelledby={tabId}
        hidden={!selected}
        className={cn('mt-2 focus-visible:outline-none', !selected && 'hidden', className)}
        {...props}
      >
        {selected ? children : null}
      </div>
    )
  }
)
TabsContent.displayName = 'TabsContent'

export default Tabs
