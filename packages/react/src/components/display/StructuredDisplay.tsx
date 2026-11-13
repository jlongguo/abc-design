import React, { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

/* ==================== 1. Descriptions 详情键值列表 ==================== */

export interface DescriptionItem {
  key?: string
  label: React.ReactNode
  children: React.ReactNode
  /** 占据的网格列数（默认 1） */
  span?: number
}

export interface DescriptionsProps {
  title?: React.ReactNode
  extra?: React.ReactNode
  items: DescriptionItem[]
  column?: 1 | 2 | 3 | 4
  bordered?: boolean
  size?: 'sm' | 'md'
  className?: string
}

/**
 * 详情键值对描述列表 (Descriptions)
 * 用于用户画像抽屉、订单详情弹窗与配置参数核对面板
 */
export const Descriptions: React.FC<DescriptionsProps> = ({
  title,
  extra,
  items,
  column = 2,
  bordered = true,
  size = 'sm',
  className,
}) => {
  const gridColsClass =
    column === 1
      ? 'grid-cols-1'
      : column === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : column === 3
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'

  const padClass = size === 'sm' ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 text-sm'

  return (
    <div className={cn('space-y-2.5', className)}>
      {(title || extra) && (
        <div className="flex items-center justify-between gap-2">
          {title && <h4 className="text-xs font-semibold text-[var(--abc-fg)]">{title}</h4>}
          {extra && <div className="flex items-center gap-2">{extra}</div>}
        </div>
      )}

      <dl
        className={cn(
          'm-0 grid',
          gridColsClass,
          bordered
            ? 'overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-border)] gap-px'
            : 'gap-x-6 gap-y-3'
        )}
      >
        {items.map((item, idx) => {
          const spanClass =
            item.span && item.span >= column
              ? 'sm:col-span-full'
              : item.span === 2
                ? 'sm:col-span-2'
                : item.span === 3
                  ? 'lg:col-span-3'
                  : undefined

          if (bordered) {
            return (
              <div
                key={item.key ?? idx}
                className={cn('flex min-w-0 bg-[var(--abc-bg-surface)]', spanClass)}
              >
                <dt
                  className={cn(
                    'w-28 shrink-0 border-r border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg-secondary)] flex items-center',
                    padClass
                  )}
                >
                  {item.label}
                </dt>
                <dd className={cn('m-0 min-w-0 flex-1 break-words text-[var(--abc-fg)] flex items-center', padClass)}>
                  {item.children ?? '-'}
                </dd>
              </div>
            )
          }

          return (
            <div key={item.key ?? idx} className={cn('min-w-0 space-y-0.5', spanClass)}>
              <dt className="text-[11px] font-medium text-[var(--abc-fg-muted)]">{item.label}</dt>
              <dd className="m-0 text-xs font-medium text-[var(--abc-fg)] break-words">
                {item.children ?? '-'}
              </dd>
            </div>
          )
        })}
      </dl>
    </div>
  )
}

/* ==================== 2. Collapse 原生无障碍折叠面板 ==================== */

export interface CollapseItem {
  key: string
  label: React.ReactNode
  extra?: React.ReactNode
  children: React.ReactNode
  disabled?: boolean
}

export interface CollapseProps {
  items: CollapseItem[]
  /** 是否开启排他手风琴模式（一次仅允许展开一项） */
  accordion?: boolean
  defaultActiveKeys?: string[]
  activeKeys?: string[]
  onChange?: (activeKeys: string[]) => void
  className?: string
}

/**
 * 原生 <details> + <summary> 手风琴/折叠面板 (Collapse)
 * 遵循现代 Web 标准：指示箭头紧邻标题文本左侧便于视觉垂直扫读，不在 <summary> 内嵌套标题标签避免读屏器吞语义
 */
export const Collapse: React.FC<CollapseProps> = ({
  items,
  accordion = false,
  defaultActiveKeys = [],
  activeKeys: controlledKeys,
  onChange,
  className,
}) => {
  const groupName = useId()
  const [internalKeys, setInternalKeys] = useState<string[]>(defaultActiveKeys)
  const openKeys = controlledKeys !== undefined ? controlledKeys : internalKeys

  const handleToggle = (key: string, nextOpen: boolean) => {
    let next: string[]
    if (accordion) {
      next = nextOpen ? [key] : []
    } else {
      next = nextOpen
        ? Array.from(new Set([...openKeys, key]))
        : openKeys.filter((k) => k !== key)
    }
    if (controlledKeys === undefined) {
      setInternalKeys(next)
    }
    onChange?.(next)
  }

  return (
    <div
      className={cn(
        'divide-y divide-[var(--abc-border)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]',
        className
      )}
    >
      {items.map((item) => {
        const isOpen = openKeys.includes(item.key)
        return (
          <details
            key={item.key}
            name={accordion ? groupName : undefined}
            open={isOpen}
            className="abc-collapse-item group"
          >
            <summary
              aria-disabled={item.disabled || undefined}
              onClick={(e) => {
                e.preventDefault()
                if (item.disabled) return
                handleToggle(item.key, !isOpen)
              }}
              className={cn(
                'flex items-center justify-between gap-3 px-4 py-2.5 text-xs font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]',
                item.disabled
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer hover:bg-[var(--abc-bg-muted)]'
              )}
            >
              <span className="inline-flex min-w-0 items-center gap-2">
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-200',
                    isOpen ? 'rotate-0' : '-rotate-90'
                  )}
                />
                <span className="truncate">{item.label}</span>
              </span>
              {item.extra && <span className="shrink-0 text-[var(--abc-fg-muted)]">{item.extra}</span>}
            </summary>

            <div className="border-t border-[var(--abc-border-subtle)] bg-[var(--abc-bg-surface)] px-4 py-3 text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
              {item.children}
            </div>
          </details>
        )
      })}
    </div>
  )
}

/* ==================== 3. Timeline 垂直时间轴 ==================== */

export interface TimelineItem {
  key?: string
  title: React.ReactNode
  time?: React.ReactNode
  description?: React.ReactNode
  tone?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral'
  icon?: React.ReactNode
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const TIMELINE_DOT_CLASSES: Record<NonNullable<TimelineItem['tone']>, string> = {
  primary: 'border-[var(--abc-primary)] bg-[var(--abc-primary)]',
  success: 'border-[var(--abc-success)] bg-[var(--abc-success)]',
  warning: 'border-[var(--abc-warning)] bg-[var(--abc-warning)]',
  danger: 'border-[var(--abc-danger)] bg-[var(--abc-danger)]',
  neutral: 'border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]',
}

/**
 * 操作审计与工单流转垂直时间轴 (Timeline)
 */
export const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <ol className={cn('m-0 list-none space-y-0 p-0', className)}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1
        const tone = item.tone ?? 'primary'
        return (
          <li key={item.key ?? idx} className="relative flex gap-3 pb-4 last:pb-0">
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute top-3.5 bottom-0 left-[5px] w-px bg-[var(--abc-border)]"
              />
            )}
            <span className="relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center">
              {item.icon ? (
                item.icon
              ) : (
                <span
                  className={cn(
                    'h-2.5 w-2.5 rounded-full border-2 ring-2 ring-[var(--abc-bg-surface)]',
                    TIMELINE_DOT_CLASSES[tone]
                  )}
                />
              )}
            </span>

            <div className="min-w-0 flex-1 space-y-0.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-xs font-medium text-[var(--abc-fg)]">{item.title}</span>
                {item.time && (
                  <time className="font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums">
                    {item.time}
                  </time>
                )}
              </div>
              {item.description && (
                <div className="text-xs leading-relaxed text-[var(--abc-fg-muted)]">
                  {item.description}
                </div>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
