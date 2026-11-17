import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Maximize2,
  Minimize2,
  RotateCcw,
  Trash2,
  X,
} from 'lucide-react'
import * as React from 'react'
import { Button } from '../components/button/Button'
import { StatusTag, type StatusTone } from '../components/display/StatusTag'
import { ProgressBar } from '../components/feedback/FeedbackExtras'
import { useAbcMotion } from '../hooks/useAbcDefaults'
import { cn } from '../utils/cn'
import { FilterPillGroup, type FilterPillOption } from './FilterToolbar'

export type BatchTaskStatus = 'queued' | 'running' | 'succeeded' | 'failed'

export interface BatchTaskItem {
  /** 任务唯一标识 */
  id: string
  /** 任务标题 */
  title: string
  /** 次级说明文案（如目标资源 ID 或参数摘要） */
  subtitle?: string
  /** 当前执行状态 */
  status: BatchTaskStatus
  /** 失败原因详情（仅 failed 时高亮展示） */
  error?: string
  /** 耗时（毫秒） */
  durationMs?: number
}

export interface BatchActionTrackerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 队列面板标题（默认 '批量执行队列'） */
  title?: React.ReactNode
  /** 批量任务条目列表 */
  items: ReadonlyArray<BatchTaskItem>
  /** 展现形态：inline 内联卡片，floating 右下角悬浮可折叠浮窗（默认 'inline'） */
  variant?: 'inline' | 'floating'
  /** 是否显示队列面板（默认 true） */
  open?: boolean
  /** 关闭回调；传入时右上角显示关闭按钮 */
  onClose?: () => void
  /** 一键重试全部失败项回调 */
  onRetryFailed?: (failedIds: string[]) => void
  /** 单条失败任务重试回调 */
  onRetryItem?: (id: string) => void
  /** 清理已完成（succeeded）任务回调 */
  onClearSucceeded?: () => void
  /** 顶部重试失败项按钮文案（默认 '重试失败项'） */
  retryFailedLabel?: string
}

type FilterKey = 'all' | 'succeeded' | 'failed' | 'active'

const STATUS_META: Record<
  BatchTaskStatus,
  {
    label: string
    tone: StatusTone
    pulse: boolean
    Icon: React.ComponentType<{ className?: string }>
    iconClass: string
  }
> = {
  queued: {
    label: '排队中',
    tone: 'neutral',
    pulse: false,
    Icon: Clock,
    iconClass: 'text-[var(--abc-fg-muted)]',
  },
  running: {
    label: '执行中',
    tone: 'info',
    pulse: true,
    Icon: Loader2,
    iconClass: 'animate-spin text-[var(--abc-info)]',
  },
  succeeded: {
    label: '成功',
    tone: 'success',
    pulse: false,
    Icon: CheckCircle2,
    iconClass: 'text-[var(--abc-success)]',
  },
  failed: {
    label: '失败',
    tone: 'danger',
    pulse: false,
    Icon: AlertCircle,
    iconClass: 'text-[var(--abc-danger)]',
  },
}

function formatDuration(durationMs: number): string {
  if (durationMs < 1000) return `${Math.round(durationMs)}ms`
  return `${(durationMs / 1000).toFixed(2)}s`
}

/**
 * 批量任务执行追踪器 (BatchActionTracker)
 *
 * 适用于批量启停、批量审批、多资源导出与异步批处理反馈：
 * - 支持 inline 内联面板与 floating 右下角悬浮可最小化浮窗双模式；
 * - 实时汇总完成进度条、状态过滤胶囊、失败原因诊断及单条/全量一键重试。
 */
export const BatchActionTracker = React.forwardRef<HTMLDivElement, BatchActionTrackerProps>(
  (
    {
      title = '批量执行队列',
      items,
      variant = 'inline',
      open = true,
      onClose,
      onRetryFailed,
      onRetryItem,
      onClearSucceeded,
      retryFailedLabel = '重试失败项',
      className,
      ...rest
    },
    ref
  ) => {
    const resolvedMotion = useAbcMotion()
    const [activeFilter, setActiveFilter] = React.useState<FilterKey>('all')
    const [minimized, setMinimized] = React.useState(false)

    const stats = React.useMemo(() => {
      const failedIds: string[] = []
      let succeededCount = 0
      let activeCount = 0

      for (const item of items) {
        if (item.status === 'failed') {
          failedIds.push(item.id)
        } else if (item.status === 'succeeded') {
          succeededCount += 1
        } else {
          // 将 queued 与 running 归入进行中桶，保证四个筛选胶囊覆盖全部任务无遗漏
          activeCount += 1
        }
      }

      const total = items.length
      const completedCount = succeededCount + failedIds.length
      const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0

      return {
        total,
        succeededCount,
        failedIds,
        failedCount: failedIds.length,
        activeCount,
        completedCount,
        percent,
      }
    }, [items])

    const filterOptions = React.useMemo<FilterPillOption<FilterKey>[]>(
      () => [
        { value: 'all', label: '全部', count: stats.total },
        { value: 'succeeded', label: '成功', count: stats.succeededCount },
        { value: 'failed', label: '失败', count: stats.failedCount },
        { value: 'active', label: '执行中', count: stats.activeCount },
      ],
      [stats.total, stats.succeededCount, stats.failedCount, stats.activeCount]
    )

    const filteredItems = React.useMemo(() => {
      if (activeFilter === 'all') return items
      if (activeFilter === 'succeeded') return items.filter((item) => item.status === 'succeeded')
      if (activeFilter === 'failed') return items.filter((item) => item.status === 'failed')
      return items.filter((item) => item.status === 'running' || item.status === 'queued')
    }, [items, activeFilter])

    if (!open) return null

    const progressVariant: 'default' | 'success' | 'warning' | 'danger' =
      stats.failedCount > 0 && stats.completedCount === stats.total && stats.succeededCount === 0
        ? 'danger'
        : stats.failedCount > 0
          ? 'warning'
          : stats.total > 0 && stats.succeededCount === stats.total
            ? 'success'
            : 'default'

    const isFloating = variant === 'floating'
    const showBody = !(isFloating && minimized)

    return (
      <section
        ref={ref}
        data-slot="batch-action-tracker"
        data-variant={variant}
        data-minimized={isFloating && minimized ? 'true' : 'false'}
        data-motion={resolvedMotion}
        aria-label={typeof title === 'string' ? title : '批量执行队列'}
        className={cn(
          'flex flex-col overflow-hidden border border-[var(--abc-border)] text-[var(--abc-fg)]',
          isFloating
            ? 'fixed right-4 bottom-4 z-50 w-[min(440px,calc(100vw-2rem))] rounded-[var(--abc-radius-xl,16px)] bg-[var(--abc-bg-elevated,var(--abc-bg-surface))] shadow-[var(--abc-shadow-popover)]'
            : 'rounded-[var(--abc-radius-lg,12px)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]',
          resolvedMotion !== 'none' && 'abc-animate-fade-in',
          className
        )}
        {...rest}
      >
        <header className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <h3 className="truncate text-sm font-semibold text-[var(--abc-fg)]">{title}</h3>
            <span className="rounded-full bg-[var(--abc-bg-subtle)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--abc-fg-secondary)] tabular-nums">
              {stats.completedCount} / {stats.total}
            </span>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-1.5">
            {stats.failedCount > 0 && (
              <Button
                type="button"
                variant="outline"
                size="xs"
                disabled={!onRetryFailed}
                onClick={() => onRetryFailed?.(stats.failedIds)}
                icon={<RotateCcw className="h-3 w-3" aria-hidden="true" />}
                className="border-[var(--abc-danger)]/40 text-[var(--abc-danger)] hover:bg-[var(--abc-danger-soft)]"
              >
                {retryFailedLabel} ({stats.failedCount})
              </Button>
            )}

            {stats.succeededCount > 0 && onClearSucceeded && (
              <Button
                type="button"
                variant="ghost"
                size="xs"
                onClick={onClearSucceeded}
                icon={<Trash2 className="h-3 w-3" aria-hidden="true" />}
                className="text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
              >
                清理已完成
              </Button>
            )}

            {isFloating && (
              <button
                type="button"
                aria-label={minimized ? '还原队列面板' : '最小化队列面板'}
                aria-expanded={!minimized}
                title={minimized ? '还原' : '最小化'}
                onClick={() => setMinimized((prev) => !prev)}
                className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] cursor-pointer"
              >
                {minimized ? (
                  <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <Minimize2 className="h-3.5 w-3.5" aria-hidden="true" />
                )}
              </button>
            )}

            {onClose && (
              <button
                type="button"
                aria-label="关闭批量执行队列"
                title="关闭"
                onClick={onClose}
                className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] cursor-pointer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </header>

        <div className="space-y-2 border-b border-[var(--abc-border)] px-4 py-2.5">
          <div className="flex items-center gap-3">
            <ProgressBar
              value={stats.total > 0 ? stats.completedCount : 0}
              max={stats.total > 0 ? stats.total : 100}
              variant={progressVariant}
              size="md"
              aria-valuetext={`${stats.percent}% (${stats.completedCount}/${stats.total})`}
              className="flex-1"
            />
            <span className="shrink-0 font-mono text-xs font-semibold text-[var(--abc-fg-secondary)] tabular-nums">
              {stats.percent}%
            </span>
          </div>

          {showBody && (
            <FilterPillGroup<FilterKey>
              options={filterOptions}
              value={activeFilter}
              onValueChange={setActiveFilter}
              size="sm"
            />
          )}
        </div>

        {showBody && (
          <div className="max-h-72 overflow-y-auto overscroll-contain">
            {filteredItems.length > 0 ? (
              <ul className="m-0 divide-y divide-[var(--abc-border)] p-0">
                {filteredItems.map((item) => {
                  const meta = STATUS_META[item.status]
                  const StatusIcon = meta.Icon
                  return (
                    <li key={item.id} className="px-4 py-2.5 text-xs">
                      <div className="flex items-start justify-between gap-2.5">
                        <div className="flex min-w-0 flex-1 items-start gap-2">
                          <StatusIcon
                            aria-hidden="true"
                            className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', meta.iconClass)}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="truncate font-medium text-[var(--abc-fg)]">
                                {item.title}
                              </span>
                              <StatusTag
                                size="xs"
                                tone={meta.tone}
                                dot={false}
                                pulse={meta.pulse}
                                label={meta.label}
                              />
                            </div>
                            {item.subtitle && (
                              <p className="mt-0.5 truncate text-[11px] text-[var(--abc-fg-muted)]">
                                {item.subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          {typeof item.durationMs === 'number' && (
                            <span className="font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums">
                              {formatDuration(item.durationMs)}
                            </span>
                          )}
                          {item.status === 'failed' && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="xs"
                              disabled={!onRetryItem}
                              aria-label={`重试 ${item.title}`}
                              onClick={() => onRetryItem?.(item.id)}
                              icon={<RotateCcw className="h-3 w-3" aria-hidden="true" />}
                              className="text-[var(--abc-danger)] hover:bg-[var(--abc-danger-soft)] hover:text-[var(--abc-danger)]"
                            >
                              重试
                            </Button>
                          )}
                        </div>
                      </div>

                      {item.status === 'failed' && item.error && (
                        <p className="mt-1.5 rounded-[var(--abc-radius-sm)] bg-[var(--abc-danger-soft)] px-2.5 py-1.5 text-[11px] leading-relaxed text-[var(--abc-danger)]">
                          {item.error}
                        </p>
                      )}
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="py-8 text-center text-xs text-[var(--abc-fg-muted)]">
                暂无符合当前状态的任务
              </div>
            )}
          </div>
        )}
      </section>
    )
  }
)

BatchActionTracker.displayName = 'BatchActionTracker'

export default BatchActionTracker
