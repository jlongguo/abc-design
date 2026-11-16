import * as React from 'react'
import { Badge, type BadgeProps } from './StatusTag'
import { cn } from '../../utils/cn'

export type StatusBadgeVariant = NonNullable<BadgeProps['variant']>

export const STATUS_VARIANTS: Record<string, StatusBadgeVariant> = {
  // 成功 / 活跃 / 已就绪
  active: 'success',
  approved: 'success',
  authorized: 'success',
  available: 'success',
  completed: 'success',
  delivered: 'success',
  enabled: 'success',
  healthy: 'success',
  published: 'success',
  ready: 'success',
  schedulable: 'success',
  settled: 'success',
  succeeded: 'success',

  // 运行中 / 信息态
  creating: 'info',
  in_progress: 'info',
  investigating: 'info',
  processing: 'info',
  running: 'info',
  starting: 'info',
  verified: 'info',

  // 等待 / 警告 / 需对账
  admitted: 'warning',
  awaiting_evidence: 'warning',
  closing: 'warning',
  degraded: 'warning',
  draining: 'warning',
  escalated: 'warning',
  incomplete: 'warning',
  pending: 'warning',
  provisional: 'warning',
  queued: 'warning',
  reconciliation_required: 'warning',
  retry_wait: 'warning',

  // 失败 / 拒绝 / 超时 / 争议
  disputed: 'destructive',
  error: 'destructive',
  failed: 'destructive',
  failed_permanently: 'destructive',
  rejected: 'destructive',
  revoked: 'destructive',
  suspended: 'destructive',
  timed_out: 'destructive',
  timeout: 'destructive',
  unavailable: 'destructive',

  // 终态 / 已关闭 / 归档
  archived: 'neutral',
  cancelled: 'neutral',
  closed: 'neutral',
  disabled: 'neutral',
  inactive: 'neutral',
  paused: 'neutral',
  stopped: 'neutral',
  terminated: 'neutral',
}

const PULSING_STATUSES = new Set([
  'creating',
  'draining',
  'in_progress',
  'investigating',
  'processing',
  'running',
  'starting',
])

const DOT_COLOR_MAP: Record<string, string> = {
  success: 'bg-emerald-500',
  info: 'bg-sky-500',
  warning: 'bg-amber-500',
  destructive: 'bg-red-500',
  danger: 'bg-red-500',
  primary: 'bg-blue-500',
  default: 'bg-blue-500',
  secondary: 'bg-slate-400',
  outline: 'bg-slate-400',
  neutral: 'bg-slate-400',
}

export function resolveStatusBadgeVariant(status: string): StatusBadgeVariant {
  const normalized = status.trim().toLowerCase()
  return STATUS_VARIANTS[normalized] ?? 'neutral'
}

function formatStatusLabel(status: string): string {
  return status.trim().replace(/[_-]+/g, ' ')
}

export interface StatusBadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  status: string
  label?: React.ReactNode
  variant?: StatusBadgeVariant
  dot?: boolean
  pulse?: boolean
  humanize?: boolean
}

/**
 * 统一语义状态徽章组件 (StatusBadge)
 */
export function StatusBadge({
  status,
  label,
  variant,
  dot = true,
  pulse,
  humanize = true,
  className,
  ...props
}: StatusBadgeProps) {
  const normalized = status.trim().toLowerCase()
  const resolvedVariant = variant ?? resolveStatusBadgeVariant(normalized)
  const shouldPulse = pulse ?? PULSING_STATUSES.has(normalized)
  const dotColor = DOT_COLOR_MAP[resolvedVariant] ?? 'bg-slate-400'
  const content = label ?? (humanize ? formatStatusLabel(status) : status)

  return (
    <Badge
      data-slot="status-badge"
      data-status={normalized}
      variant={resolvedVariant}
      className={cn(
        'gap-1.5 whitespace-nowrap font-medium capitalize',
        resolvedVariant === 'destructive' &&
          'border-red-500/30 bg-red-50/80 text-red-700 dark:bg-red-950/35 dark:text-red-300',
        className
      )}
      {...props}
    >
      {dot && (
        <span aria-hidden="true" className="relative flex size-1.5 shrink-0">
          {shouldPulse ? (
            <span
              className={cn(
                'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 motion-reduce:hidden',
                dotColor
              )}
            />
          ) : null}
          <span className={cn('relative inline-flex size-1.5 rounded-full', dotColor)} />
        </span>
      )}
      {content}
    </Badge>
  )
}
