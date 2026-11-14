import React from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { MoreHorizontal, Pin, RotateCw, X } from 'lucide-react'
import { Dropdown, Tooltip } from '../components/display/Overlays'
import Icon from '../components/icon/Icon'
import { useAbcMotion, useAbcSize } from '../hooks/useAbcDefaults'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import type { AbcTabItem, AbcTabStyle } from './types'

export interface MultiTabBarProps {
  tabs: AbcTabItem[]
  activePath: string
  variant?: AbcTabStyle
  size?: AbcSize
  motion?: AbcMotionPreset
  onSelect: (path: string) => void
  onClose?: (path: string) => void
  onCloseOthers?: (path: string) => void
  onCloseRight?: (path: string) => void
  onCloseAll?: () => void
  onTogglePin?: (path: string) => void
  onRefresh?: (path: string) => void
  className?: string
}

interface TabBarSizeMetric {
  barPadding: string
  tabItem: string
  tabIcon: number
  pinIcon: string
  closeIcon: string
  actionBtn: string
  actionIcon: string
}

const TAB_BAR_SIZE_METRICS: Record<AbcSize, TabBarSizeMetric> = {
  xs: {
    barPadding: 'px-2.5',
    tabItem: 'h-6 gap-1 px-2 text-[11px]',
    tabIcon: 12,
    pinIcon: 'h-2.5 w-2.5',
    closeIcon: 'h-2 w-2',
    actionBtn: 'h-6 w-6',
    actionIcon: 'h-3 w-3',
  },
  sm: {
    barPadding: 'px-3',
    tabItem: 'h-7 gap-1.5 px-2.5 text-xs',
    tabIcon: 13,
    pinIcon: 'h-2.5 w-2.5',
    closeIcon: 'h-2.5 w-2.5',
    actionBtn: 'h-6.5 w-6.5',
    actionIcon: 'h-3.5 w-3.5',
  },
  md: {
    barPadding: 'px-3.5',
    tabItem: 'h-8 gap-1.5 px-3 text-[13px]',
    tabIcon: 14,
    pinIcon: 'h-3 w-3',
    closeIcon: 'h-3 w-3',
    actionBtn: 'h-7.5 w-7.5',
    actionIcon: 'h-3.5 w-3.5',
  },
  lg: {
    barPadding: 'px-4',
    tabItem: 'h-9 gap-2 px-3.5 text-sm',
    tabIcon: 15,
    pinIcon: 'h-3 w-3',
    closeIcon: 'h-3 w-3',
    actionBtn: 'h-8 w-8',
    actionIcon: 'h-4 w-4',
  },
}

/**
 * 企业级多页签导航栏
 * 支持卡片式 (card)、胶囊式 (pill)、极简下划线 (underline) 三种视觉风格，同步响应四档尺寸与动效规格
 */
export const MultiTabBar: React.FC<MultiTabBarProps> = ({
  tabs,
  activePath,
  variant = 'card',
  size,
  motion,
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
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const m = TAB_BAR_SIZE_METRICS[resolvedSize]

  if (tabs.length === 0) return null

  return (
    <div
      data-size={resolvedSize}
      data-motion={resolvedMotion}
      className={cn(
        'flex h-[var(--abc-tabbar-h)] shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] select-none',
        m.barPadding,
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
                'group inline-flex flex-none items-center border font-medium transition-[background-color,color,border-color,box-shadow] duration-[var(--abc-motion-fast)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                m.tabItem,
                styleClass
              )}
            >
              {tab.pinned && <Pin className={cn('shrink-0 opacity-75', m.pinIcon)} />}
              {tab.icon &&
                (typeof tab.icon === 'string' ? (
                  <Icon name={tab.icon} size={m.tabIcon} registry={iconRegistry} />
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
                  <X className={m.closeIcon} />
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
              className={cn(
                'inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer',
                m.actionBtn
              )}
            >
              <RotateCw className={m.actionIcon} />
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
            className={cn(
              'inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer',
              m.actionBtn
            )}
          >
            <MoreHorizontal className={m.actionIcon} />
          </button>
        </Dropdown>
      </div>
    </div>
  )
}

export default MultiTabBar
