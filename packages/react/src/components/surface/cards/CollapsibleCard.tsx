import React, { useId } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { ChevronDown } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../../hooks'
import { useControllableState } from '../../../hooks/useControllableState'
import { cn } from '../../../utils/cn'
import { SURFACE_PAD, TITLE_TEXT } from './shared'

export interface CollapsibleCardProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  icon?: React.ReactNode
  extra?: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
  bodyClassName?: string
  children: React.ReactNode
}

const HEADER_BTN_PAD: Record<AbcSize, string> = {
  xs: 'px-3 py-2',
  sm: 'px-3.5 py-2.5',
  md: 'px-4 py-3',
  lg: 'px-5 py-3.5',
}

/**
 * 可折叠详情分组卡片 (CollapsibleCard)
 * 使用 CSS Grid 0fr -> 1fr 平滑高度过渡，适合参数配置高级选项与多区块巡检详情
 */
export const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  title,
  subtitle,
  icon,
  extra,
  defaultOpen = true,
  open: controlledOpen,
  onOpenChange,
  size,
  motion,
  className,
  bodyClassName,
  children,
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const panelId = useId()
  const [isOpen, setIsOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  })

  return (
    <section
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      className={cn(
        '@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        className
      )}
    >
      <div className={cn('flex items-center justify-between gap-3', HEADER_BTN_PAD[resolvedSize])}>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}
          className="flex min-w-0 flex-1 items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)]"
        >
          <ChevronDown
            data-open={isOpen ? 'true' : 'false'}
            className={cn(
              'abc-chevron-disclosure h-4 w-4 shrink-0 text-[var(--abc-fg-muted)]',
              isOpen && 'text-[var(--abc-primary)]'
            )}
          />
          {icon && <span className="shrink-0 text-[var(--abc-primary)]">{icon}</span>}
          <div className="min-w-0 flex-1">
            <div className={cn('truncate font-semibold text-[var(--abc-fg)]', TITLE_TEXT[resolvedSize])}>
              {title}
            </div>
            {subtitle && (
              <div className="truncate text-[11px] text-[var(--abc-fg-muted)]">{subtitle}</div>
            )}
          </div>
        </button>

        {extra && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex shrink-0 items-center gap-2"
          >
            {extra}
          </div>
        )}
      </div>

      <div id={panelId} className="abc-collapse-grid" data-open={isOpen}>
        <div className="abc-collapse-inner">
          <div
            className={cn(
              'border-t border-[var(--abc-border)]',
              SURFACE_PAD[resolvedSize],
              bodyClassName
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
