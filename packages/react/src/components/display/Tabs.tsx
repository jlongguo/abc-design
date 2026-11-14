import React, { useId } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { useAbcMotion, useAbcSize } from '../../hooks'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'

export interface TabItem<K extends string = string> {
  key: K
  label: React.ReactNode
  icon?: React.ReactNode
  badge?: React.ReactNode
  disabled?: boolean
  children?: React.ReactNode
}

export interface TabsProps<K extends string = string> {
  items: TabItem<K>[]
  activeKey?: K
  /** activeKey 受控别名 */
  value?: K
  defaultActiveKey?: K
  onChange?: (key: K) => void
  variant?: 'line' | 'pills' | 'segmented'
  size?: AbcSize
  motion?: AbcMotionPreset
  ariaLabel?: string
  extra?: React.ReactNode
  className?: string
  panelClassName?: string
}

/**
 * 响应式无障碍标签页组件
 * 遵循规范：单行不换行横向滚动、基于 [aria-selected="true"] 伪元素底边线提供非纯色形状指示、
 * 非激活面板采用 hidden="until-found" 并在内层子容器施加内边距避免空白占高。
 */
export function Tabs<K extends string = string>({
  items,
  activeKey,
  value,
  defaultActiveKey,
  onChange,
  variant = 'line',
  size,
  motion,
  ariaLabel = '内容切换标签',
  extra,
  className,
  panelClassName,
}: TabsProps<K>) {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const baseId = useId()
  const [currentKey, setCurrentKey] = useControllableState<K>({
    value: activeKey ?? value,
    defaultValue: defaultActiveKey ?? (items[0]?.key as K) ?? ('' as K),
    onChange,
  })

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const enabledItems = items.filter((item) => !item.disabled)
    if (enabledItems.length === 0) return
    const currentEnabledIdx = enabledItems.findIndex((item) => item.key === items[index]?.key)
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

  const hasAnyPanelContent = items.some((item) => item.children !== undefined)

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
          {items.map((item, idx) => {
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
          {items.map((item) => {
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

export default Tabs
