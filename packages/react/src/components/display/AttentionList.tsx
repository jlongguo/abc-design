import { ArrowUpRight, CircleAlert } from 'lucide-react'
import { NotificationBanner } from '../feedback/NotificationBanner'
import { cn } from '../../utils/cn'

export interface AttentionEntry {
  kind: string
  severity: 'critical' | 'high' | 'medium' | 'low' | string
  count: number
  label: string
  href?: string
  restriction?: string
  onClick?: () => void
}

export interface AttentionListProps {
  items: AttentionEntry[]
  emptyMessage?: string
  className?: string
}

/**
 * 重点待办与告警关注清单 (AttentionList)
 * 用于控制台仪表盘、运营概览中展示聚合的高危与中危告警信号
 */
export function AttentionList({
  items,
  emptyMessage = '当前无活动运营告警。任务队列、Runner 集群与投递状态均符合策略阈值。',
  className,
}: AttentionListProps) {
  if (items.length === 0) {
    return (
      <NotificationBanner
        variant="success"
        role="status"
        message={emptyMessage}
        className={className}
      />
    )
  }

  return (
    <div
      data-slot="attention-list"
      className={cn(
        'divide-y divide-[var(--abc-border)] rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs',
        className
      )}
    >
      {items.map((item, idx) => {
        const rowClass = 'flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[var(--abc-bg-subtle)]'
        const isRestricted = Boolean(item.restriction)
        const content = (
          <>
            <span
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                item.severity === 'critical' && 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400',
                item.severity === 'high' && 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
                !['critical', 'high'].includes(item.severity) && 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
              )}
            >
              <CircleAlert aria-hidden="true" className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-[var(--abc-fg)]">{item.label}</span>
              {item.restriction ? (
                <span className="block text-xs text-[var(--abc-fg-muted)]">{item.restriction}</span>
              ) : (
                <span
                  aria-hidden="true"
                  className="font-mono text-[11px] uppercase tracking-wider text-[var(--abc-fg-muted)]"
                >
                  {item.severity} · {item.kind}
                </span>
              )}
            </span>
            <span className="flex shrink-0 items-center gap-2">
              <span className="rounded-full bg-[var(--abc-bg-muted)] px-2.5 py-0.5 font-mono text-xs font-semibold text-[var(--abc-fg-secondary)]">
                {item.count}
              </span>
              {!isRestricted && (item.href || item.onClick) && (
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[var(--abc-fg-muted)]" />
              )}
            </span>
          </>
        )

        if (!isRestricted && item.href) {
          return (
            <a key={item.kind || idx} href={item.href} className={rowClass}>
              {content}
            </a>
          )
        }

        if (!isRestricted && item.onClick) {
          return (
            <button
              key={item.kind || idx}
              type="button"
              onClick={item.onClick}
              className={cn(rowClass, 'w-full text-left cursor-pointer')}
            >
              {content}
            </button>
          )
        }

        return (
          <div key={item.kind || idx} className={rowClass}>
            {content}
          </div>
        )
      })}
    </div>
  )
}
