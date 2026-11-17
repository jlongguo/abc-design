import { ChevronDown, Sparkles } from 'lucide-react'
import * as React from 'react'
import { cn } from '../utils/cn'

export interface WorkflowBannerStep {
  step: string | number
  title: React.ReactNode
  description: React.ReactNode
}

export interface WorkflowStepBannerProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  badge: React.ReactNode
  title: React.ReactNode
  extra?: React.ReactNode
  steps: WorkflowBannerStep[]
  collapsible?: boolean
  defaultCollapsed?: boolean
}

export function WorkflowStepBanner({
  badge,
  title,
  extra,
  steps,
  collapsible = false,
  defaultCollapsed = false,
  className,
  ...props
}: WorkflowStepBannerProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

  return (
    <section
      data-slot="workflow-step-banner"
      className={cn(
        'rounded-xl border border-blue-500/25 bg-blue-50/60 dark:bg-blue-950/20 p-4 shadow-xs transition-all',
        className
      )}
      {...props}
    >
      <div
        className={cn('flex flex-wrap items-center justify-between gap-2', !collapsed && 'mb-3')}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-[var(--abc-primary)] px-2 py-0.5 text-[11px] font-semibold text-[var(--abc-primary-fg)] shadow-2xs">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {badge}
          </span>
          <h3 className="text-xs font-semibold text-[var(--abc-fg)]">{title}</h3>
        </div>
        {extra || collapsible ? (
          <div className="flex items-center gap-2">
            {extra}
            {collapsible ? (
              <button
                type="button"
                aria-expanded={!collapsed}
                onClick={() => setCollapsed((prev) => !prev)}
                className="inline-flex items-center gap-1 rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-muted)] transition-colors hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <ChevronDown
                  data-open={!collapsed ? 'true' : 'false'}
                  className="abc-chevron h-3 w-3"
                  aria-hidden="true"
                />
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
      {!collapsed && (
        <ol role="list" className="grid gap-2.5 md:grid-cols-3">
          {steps.map((item) => (
            <li
              key={item.step}
              className="group rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-2xs transition-all duration-150 hover:border-[var(--abc-primary)]/40 hover:shadow-xs"
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary)]/15 font-mono text-[11px] font-bold text-[var(--abc-primary)] transition-colors group-hover:bg-[var(--abc-primary)] group-hover:text-[var(--abc-primary-fg)]"
                >
                  {item.step}
                </span>
                <p className="text-xs font-semibold text-[var(--abc-fg)]">{item.title}</p>
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

export interface ContextQuickBarAction {
  key?: string
  href: string
  label: React.ReactNode
}

export interface ContextQuickBarTag {
  key?: string
  text?: React.ReactNode
  label?: React.ReactNode
  value?: React.ReactNode
}

export interface ContextQuickBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  badge: React.ReactNode
  title: React.ReactNode
  contextTags?: ContextQuickBarTag[]
  actions: ContextQuickBarAction[]
}

export function ContextQuickBar({
  badge,
  title,
  contextTags = [],
  actions,
  className,
  ...props
}: ContextQuickBarProps) {
  return (
    <div
      data-slot="context-quick-bar"
      className={cn(
        'space-y-2 rounded-xl border border-blue-500/25 bg-blue-50/60 dark:bg-blue-950/20 p-3 text-xs shadow-xs',
        className
      )}
      {...props}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-[var(--abc-primary)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--abc-primary-fg)]">
            {badge}
          </span>
          <span className="font-semibold text-[var(--abc-fg)]">{title}</span>
        </div>
        {contextTags.length > 0 ? (
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] tabular-nums">
            {contextTags.map((tag, idx) => (
              <span
                key={tag.key ?? idx}
                className="rounded border border-blue-500/30 bg-[var(--abc-bg-surface)] px-2 py-0.5 text-blue-600 dark:text-blue-400"
              >
                {tag.text ?? (tag.label ? `${tag.label}: ${tag.value ?? ''}` : tag.value)}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {actions.map((action) => (
          <a
            key={action.href}
            href={action.href}
            className="inline-flex items-center gap-1 rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--abc-fg)] shadow-2xs transition-all duration-150 hover:border-[var(--abc-primary)] hover:bg-[var(--abc-primary)] hover:text-[var(--abc-primary-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]"
          >
            {action.label}
          </a>
        ))}
      </div>
    </div>
  )
}
