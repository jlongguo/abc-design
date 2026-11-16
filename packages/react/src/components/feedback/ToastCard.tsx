import * as React from 'react'
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from 'lucide-react'
import { CopyButton } from '../typography/CopyableText'
import type { NotificationVariant } from './NotificationBanner'
import { cn } from '../../utils/cn'

export interface ToastCardProps {
  id: string
  variant: NotificationVariant
  title: string
  message: string
  code?: string
  status?: number
  requestId?: string
  actionHint?: string
  durationMs: number | null
  paused?: boolean
  requestIdLabel?: string
  copyIdLabel?: string
  copiedIdLabel?: string
  dismissLabel?: string
  onDismiss: (id: string) => void
}

const toastStyles: Record<
  NotificationVariant,
  {
    container: string
    iconWrap: string
    badge: string
    Icon: typeof AlertCircle
  }
> = {
  error: {
    container:
      'border-red-500/35 bg-[var(--abc-bg-elevated,var(--abc-bg-surface))]/95 text-[var(--abc-fg)] shadow-lg ring-1 ring-red-500/15',
    iconWrap: 'bg-red-500/15 text-red-600 dark:text-red-400 ring-1 ring-red-500/30',
    badge: 'bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/30',
    Icon: AlertCircle,
  },
  warning: {
    container:
      'border-amber-500/35 bg-[var(--abc-bg-elevated,var(--abc-bg-surface))]/95 text-[var(--abc-fg)] shadow-lg ring-1 ring-amber-500/15',
    iconWrap: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/30',
    badge: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    Icon: AlertTriangle,
  },
  success: {
    container:
      'border-emerald-500/35 bg-[var(--abc-bg-elevated,var(--abc-bg-surface))]/95 text-[var(--abc-fg)] shadow-lg ring-1 ring-emerald-500/15',
    iconWrap: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30',
    badge: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    Icon: CheckCircle2,
  },
  info: {
    container:
      'border-blue-500/35 bg-[var(--abc-bg-elevated,var(--abc-bg-surface))]/95 text-[var(--abc-fg)] shadow-lg ring-1 ring-blue-500/15',
    iconWrap: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/30',
    badge: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
    Icon: Info,
  },
}

/**
 * 结构化诊断通知卡片 (ToastCard)
 */
export function ToastCard({
  id,
  variant,
  title,
  message,
  code,
  status,
  requestId,
  actionHint,
  durationMs,
  paused = false,
  requestIdLabel = 'Request ID:',
  copyIdLabel = 'Copy ID',
  copiedIdLabel = 'Copied',
  dismissLabel,
  onDismiss,
}: ToastCardProps) {
  const { container, iconWrap, badge, Icon } = toastStyles[variant]

  React.useEffect(() => {
    if (durationMs === null || paused) return
    const timer = window.setTimeout(() => {
      onDismiss(id)
    }, durationMs)
    return () => window.clearTimeout(timer)
  }, [id, durationMs, paused, onDismiss])

  return (
    <div
      data-slot="toast-card"
      data-testid={`console-toast-${variant}`}
      className={cn(
        'pointer-events-auto flex w-full max-w-md items-start gap-3 rounded-xl border p-4 backdrop-blur-md transition-all duration-200',
        container
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg',
          iconWrap
        )}
      >
        <Icon size={16} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1 space-y-1 text-xs leading-5">
        <div className="flex flex-wrap items-center gap-1.5">
          <p className="text-sm font-semibold text-[var(--abc-fg)]">{title}</p>
          {typeof status === 'number' ? (
            <span
              className={cn(
                'rounded border px-1.5 py-0.5 font-mono text-[10px] font-semibold tabular-nums',
                badge
              )}
            >
              HTTP {status}
            </span>
          ) : null}
          {code ? (
            <code className={cn('rounded border px-1.5 py-0.5 font-mono text-[10px]', badge)}>
              {code}
            </code>
          ) : null}
        </div>
        <p className="break-words text-xs text-[var(--abc-fg-muted)]">{message}</p>
        {actionHint ? (
          <p className="text-[11px] font-medium text-[var(--abc-fg)]/90">{actionHint}</p>
        ) : null}
        {requestId ? (
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5 font-mono text-[11px] text-[var(--abc-fg-muted)]">
            <span>{requestIdLabel}</span>
            <code className="select-all rounded bg-[var(--abc-bg-subtle)] px-1.5 py-0.5 text-[10px] text-[var(--abc-fg)] tabular-nums">
              {requestId}
            </code>
            <CopyButton
              value={requestId}
              copyLabel={copyIdLabel}
              copiedLabel={copiedIdLabel}
              className="h-5 px-1.5 text-[10px]"
            />
          </div>
        ) : null}
      </div>
      <button
        type="button"
        onClick={() => onDismiss(id)}
        aria-label={dismissLabel ?? `Dismiss ${title}`}
        className="shrink-0 rounded-lg p-1 text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] cursor-pointer"
      >
        <X size={15} aria-hidden="true" />
      </button>
    </div>
  )
}
