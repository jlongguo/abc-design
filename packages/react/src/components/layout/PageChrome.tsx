import { Compass } from 'lucide-react'
import * as React from 'react'
import { cn } from '../../utils/cn'

export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  backLink?: React.ReactNode
  eyebrow?: React.ReactNode
  title: React.ReactNode
  badge?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  actions?: React.ReactNode
}

/**
 * 通用页面头部组件 (PageHeader)
 */
export function PageHeader({
  backLink,
  eyebrow,
  title,
  badge,
  description,
  action,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  const resolvedAction = action ?? actions
  return (
    <header data-slot="page-header" className={cn('space-y-2', className)} {...props}>
      {backLink ? <div>{backLink}</div> : null}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-[min(100%,300px)] flex-1">
          {eyebrow ? (
            <p className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--abc-primary)]">
              {eyebrow}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center gap-2.5">
            <h1 className="break-words text-2xl font-semibold tracking-tight text-[var(--abc-fg)] sm:text-3xl">
              {title}
            </h1>
            {badge}
          </div>
          {description ? (
            <p className="mt-1.5 max-w-3xl text-sm leading-6 text-[var(--abc-fg-muted)]">
              {description}
            </p>
          ) : null}
        </div>
        {resolvedAction ? (
          <div className="flex min-w-0 max-w-full flex-wrap items-center gap-2">{resolvedAction}</div>
        ) : null}
      </div>
    </header>
  )
}

export interface PageSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title?: React.ReactNode
  badge?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  contentClassName?: string
  noPadding?: boolean
  children: React.ReactNode
}

/**
 * 统一页面卡片区块容器 (PageSection / Section)
 */
export function PageSection({
  title,
  badge,
  description,
  action,
  children,
  className,
  contentClassName,
  noPadding = false,
  ...props
}: PageSectionProps) {
  const hasHeader = Boolean(title || badge || description || action)
  return (
    <section
      data-slot="page-section"
      className={cn(
        'mt-6 min-w-0 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-xs',
        !noPadding && 'p-4 sm:p-6',
        className
      )}
      {...props}
    >
      {hasHeader && (
        <div
          className={cn(
            'flex flex-wrap items-start justify-between gap-4',
            noPadding && 'border-b border-[var(--abc-border)] px-4 py-4 sm:px-6'
          )}
        >
          <div className="min-w-0">
            {title || badge ? (
              <div className="flex flex-wrap items-center gap-2">
                {title ? (
                  <h2 className="text-base font-semibold text-[var(--abc-fg)]">{title}</h2>
                ) : null}
                {badge}
              </div>
            ) : null}
            {description ? (
              <p className="mt-1 text-sm text-[var(--abc-fg-muted)]">{description}</p>
            ) : null}
          </div>
          {action ? (
            <div className="flex min-w-0 max-w-full flex-wrap items-center gap-2">{action}</div>
          ) : null}
        </div>
      )}
      <div className={cn(hasHeader && !noPadding && 'mt-5', contentClassName)}>{children}</div>
    </section>
  )
}

export { PageSection as Section }

export interface HubNavBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  badge?: React.ReactNode
  layerBadge?: React.ReactNode
  badgeTone?: 'indigo' | 'slate' | 'primary' | 'dark'
  layerTone?: 'indigo' | 'slate' | 'primary' | 'dark'
  title?: React.ReactNode
  meta?: React.ReactNode
  navLabel?: string
  variant?: 'compact' | 'layered' | 'pill'
  children: React.ReactNode
}

export function hubNavTabClassName(
  active: boolean,
  variant: 'compact' | 'layered' | 'pill' = 'compact'
) {
  if (variant === 'layered') {
    return cn(
      'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
      active
        ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-xs'
        : 'border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
    )
  }
  return cn(
    'inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
    active
      ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-xs ring-1 ring-[var(--abc-primary)]/30'
      : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
  )
}

/**
 * 模块聚合子导航栏 (HubNavBar)
 */
export function HubNavBar({
  badge,
  layerBadge,
  badgeTone,
  layerTone,
  title,
  meta,
  navLabel,
  variant = 'compact',
  children,
  className,
  ...props
}: HubNavBarProps) {
  const resolvedBadge = badge ?? layerBadge
  const resolvedTone = badgeTone ?? layerTone ?? 'indigo'
  if (variant === 'layered') {
    return (
      <div
        data-slot="hub-nav-bar"
        className={cn(
          'rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/60 p-3 shadow-xs backdrop-blur-xs',
          className
        )}
        {...props}
      >
        {resolvedBadge || title || meta ? (
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 px-1">
            <div className="flex flex-wrap items-center gap-2">
              {resolvedBadge ? (
                <span
                  className={cn(
                    'inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold',
                    resolvedTone === 'indigo' && 'bg-indigo-600 text-white',
                    (resolvedTone === 'slate' || resolvedTone === 'dark') &&
                      'bg-slate-800 text-slate-100',
                    resolvedTone === 'primary' &&
                      'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                  )}
                >
                  {resolvedBadge}
                </span>
              ) : null}
              {title ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)]">
                  <Compass className="h-3.5 w-3.5 text-[var(--abc-primary)]" aria-hidden="true" />
                  {title}
                </span>
              ) : null}
            </div>
            {meta ? (
              <span className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums">
                {meta}
              </span>
            ) : null}
          </div>
        ) : null}
        <nav aria-label={navLabel} className="flex flex-wrap gap-1.5">
          {children}
        </nav>
      </div>
    )
  }

  return (
    <div
      data-slot="hub-nav-bar"
      className={cn(
        'rounded-2xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 px-3.5 py-2.5 text-[var(--abc-fg)] shadow-xs backdrop-blur',
        className
      )}
      {...props}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <nav aria-label={navLabel} className="flex flex-wrap items-center gap-1.5">
          {children}
        </nav>
        {meta ? (
          <span className="hidden rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-2.5 py-1 font-mono text-[11px] text-[var(--abc-fg-muted)] sm:inline-flex">
            {meta}
          </span>
        ) : null}
      </div>
    </div>
  )
}
