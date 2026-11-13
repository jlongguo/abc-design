import React from 'react'
import { MoreHorizontal, Pin, RotateCw, X } from 'lucide-react'
import { Dropdown, Tooltip } from '../components/display/Overlays'
import Icon from '../components/icon/Icon'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import type { AbcTabItem, AbcTabStyle } from './types'

export interface MultiTabBarProps {
  tabs: AbcTabItem[]
  activePath: string
  variant?: AbcTabStyle
  onSelect: (path: string) => void
  onClose?: (path: string) => void
  onCloseOthers?: (path: string) => void
  onCloseRight?: (path: string) => void
  onCloseAll?: () => void
  onTogglePin?: (path: string) => void
  onRefresh?: (path: string) => void
  className?: string
}

/**
 * 企业级多页签导航栏
 * 支持卡片式 (card)、胶囊式 (pill)、极简下划线 (underline) 三种视觉风格，支持固定页签、当前页刷新与批量关闭
 */
export const MultiTabBar: React.FC<MultiTabBarProps> = ({
  tabs,
  activePath,
  variant = 'card',
  onSelect,
  onClose,
  onCloseOthers,
  onCloseRight,
  onCloseAll,
  onTogglePin,
  onRefresh,
  className,
}) => {
  const { iconRegistry } = useAbcConfig()

  if (tabs.length === 0) return null

  return (
    <div
      className={cn(
        'flex h-[var(--abc-tabbar-h)] shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 select-none',
        className
      )}
    >
      <div className="flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none]">
        {tabs.map((tab) => {
          const active = tab.path === activePath
          const canClose = tab.closable !== false && !tab.pinned

          const styleClass =
            variant === 'pill'
              ? active
                ? 'rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                : 'rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]'
              : variant === 'underline'
                ? active
                  ? 'relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold'
                  : 'relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]'
                : active
                  ? 'rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                  : 'rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]'

          return (
            <div
              key={tab.path}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(tab.path)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelect(tab.path)
                }
              }}
              className={cn(
                'group inline-flex h-7 flex-none items-center gap-1.5 border px-2.5 text-xs font-medium transition-[background-color,color,border-color,box-shadow] duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                styleClass
              )}
            >
              {tab.pinned && <Pin className="h-2.5 w-2.5 shrink-0 opacity-75" />}
              {tab.icon &&
                (typeof tab.icon === 'string' ? (
                  <Icon name={tab.icon} size={13} registry={iconRegistry} />
                ) : (
                  <span className="shrink-0">{tab.icon}</span>
                ))}
              <span className="max-w-36 truncate">{tab.title}</span>
              {canClose && onClose && (
                <button
                  type="button"
                  aria-label={`关闭 ${tab.title}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    onClose(tab.path)
                  }}
                  className={cn(
                    'ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 cursor-pointer',
                    variant === 'pill' && active
                      ? 'hover:bg-white/20'
                      : 'hover:bg-black/10 dark:hover:bg-white/15'
                  )}
                >
                  <X className="h-2.5 w-2.5" />
                </button>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex shrink-0 items-center gap-1">
        {onRefresh && (
          <Tooltip content="刷新当前页签">
            <button
              type="button"
              aria-label="刷新当前页签"
              onClick={() => onRefresh(activePath)}
              className="inline-flex h-6.5 w-6.5 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              <RotateCw className="h-3.5 w-3.5" />
            </button>
          </Tooltip>
        )}

        <Dropdown
          items={[
            ...(onTogglePin
              ? [
                  {
                    key: 'pin',
                    label: tabs.find((t) => t.path === activePath)?.pinned
                      ? '取消固定当前页签'
                      : '固定当前页签',
                    icon: <Pin className="h-3.5 w-3.5" />,
                    onClick: () => onTogglePin(activePath),
                  },
                ]
              : []),
            ...(onCloseOthers
              ? [
                  {
                    key: 'others',
                    label: '关闭其他页签',
                    onClick: () => onCloseOthers(activePath),
                  },
                ]
              : []),
            ...(onCloseRight
              ? [
                  {
                    key: 'right',
                    label: '关闭右侧页签',
                    onClick: () => onCloseRight(activePath),
                  },
                ]
              : []),
            ...(onCloseAll
              ? [
                  {
                    key: 'all',
                    label: '关闭全部可关页签',
                    danger: true,
                    dividerAbove: true,
                    onClick: () => onCloseAll(),
                  },
                ]
              : []),
          ]}
        >
          <button
            type="button"
            aria-label="页签批量操作"
            className="inline-flex h-6.5 w-6.5 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
          >
            <MoreHorizontal className="h-3.5 w-3.5" />
          </button>
        </Dropdown>
      </div>
    </div>
  )
}

export default MultiTabBar
