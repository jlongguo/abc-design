import React from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { useAbcMotion, useAbcSize } from '../../../hooks'
import { cn } from '../../../utils/cn'
import { DESC_TEXT, SURFACE_PAD, TITLE_TEXT } from './shared'

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4
  gap?: AbcSize
}

const BENTO_COLS: Record<NonNullable<BentoGridProps['columns']>, string> = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

const GAP_MAP_LOCAL: Record<AbcSize, string> = {
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-5',
}

/** 现代 Bento 异构仪表盘网格容器 */
export const BentoGrid: React.FC<BentoGridProps> = ({
  columns = 3,
  gap,
  className,
  children,
  ...rest
}) => {
  const resolvedGap = useAbcSize(gap, 'md')
  return (
    <div
      className={cn(
        'grid auto-rows-[minmax(148px,auto)]',
        BENTO_COLS[columns],
        GAP_MAP_LOCAL[resolvedGap],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface BentoCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  graphic?: React.ReactNode
  footer?: React.ReactNode
  hoverable?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
}

/** Bento 网格单卡（支持跨列/跨行特性视觉呈现与微交互上浮） */
export const BentoCard: React.FC<BentoCardProps> = ({
  colSpan = 1,
  rowSpan = 1,
  eyebrow,
  title,
  description,
  icon,
  graphic,
  footer,
  hoverable = true,
  size,
  motion,
  className,
  children,
  ...rest
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)

  const colSpanClass =
    colSpan === 2
      ? 'md:col-span-2'
      : colSpan === 3
        ? 'md:col-span-2 lg:col-span-3'
        : ''
  const rowSpanClass = rowSpan === 2 ? 'row-span-2' : ''

  return (
    <article
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      className={cn(
        '@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        SURFACE_PAD[resolvedSize],
        colSpanClass,
        rowSpanClass,
        hoverable &&
          'abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md',
        className
      )}
      {...rest}
    >
      <div>
        {(eyebrow || icon) && (
          <div className="mb-2 flex items-center justify-between gap-2">
            {eyebrow ? (
              <span className="text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase">
                {eyebrow}
              </span>
            ) : (
              <span />
            )}
            {icon && <span className="text-[var(--abc-fg-muted)]">{icon}</span>}
          </div>
        )}
        <h3 className={cn('font-bold text-[var(--abc-fg)]', TITLE_TEXT[resolvedSize])}>{title}</h3>
        {description && (
          <p className={cn('mt-1 leading-relaxed text-[var(--abc-fg-muted)]', DESC_TEXT[resolvedSize])}>
            {description}
          </p>
        )}
      </div>

      {graphic && <div className="my-3 overflow-hidden rounded-[var(--abc-radius-md)]">{graphic}</div>}
      {children}

      {footer && (
        <div className="mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]">
          {footer}
        </div>
      )}
    </article>
  )
}
