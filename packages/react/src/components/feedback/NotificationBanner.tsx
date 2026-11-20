import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Loader2,
  RefreshCw,
  WifiOff,
  X,
} from 'lucide-react'
import * as React from 'react'
import { Button } from '../button/Button'
import { cn } from '../../utils/cn'

export type NotificationVariant = 'error' | 'warning' | 'success' | 'info'

export interface NotificationBannerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: NotificationVariant
  title?: React.ReactNode
  message?: React.ReactNode
  description?: React.ReactNode
  code?: string
  status?: number
  requestId?: string
  actionHint?: React.ReactNode
  action?: React.ReactNode
  onDismiss?: () => void
  dismissLabel?: string
  hideIcon?: boolean
}

const variantConfig: Record<
  NotificationVariant,
  {
    container: string
    badge: string
    iconWrap: string
    Icon: typeof AlertCircle
    defaultRole: React.AriaRole
  }
> = {
  error: {
    container: 'border-red-500/25 bg-red-50/50 text-red-950 dark:bg-red-950/20 dark:text-red-200 dark:border-red-500/30',
    badge: 'border-red-500/30 bg-white/80 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    iconWrap: 'bg-red-500/15 text-red-600 dark:text-red-400',
    Icon: AlertCircle,
    defaultRole: 'alert',
  },
  warning: {
    container: 'border-amber-500/25 bg-amber-50/50 text-amber-950 dark:bg-amber-950/20 dark:text-amber-200 dark:border-amber-500/30',
    badge: 'border-amber-500/30 bg-white/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    iconWrap: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
    Icon: AlertTriangle,
    defaultRole: 'alert',
  },
  success: {
    container: 'border-emerald-500/25 bg-emerald-50/50 text-emerald-950 dark:bg-emerald-950/20 dark:text-emerald-200 dark:border-emerald-500/30',
    badge: 'border-emerald-500/30 bg-white/80 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    iconWrap: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
    Icon: CheckCircle2,
    defaultRole: 'status',
  },
  info: {
    container: 'border-blue-500/25 bg-blue-50/50 text-blue-950 dark:bg-blue-950/20 dark:text-blue-200 dark:border-blue-500/30',
    badge: 'border-blue-500/30 bg-white/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    iconWrap: 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
    Icon: Info,
    defaultRole: 'status',
  },
}

/**
 * 统一页内通知横幅
 * 支持 4 种语义状态、状态码与请求 ID 追踪徽章、操作按钮与关闭能力
 */
export const NotificationBanner = React.forwardRef<HTMLDivElement, NotificationBannerProps>(
  function NotificationBanner(
    {
      variant = 'error',
      title,
      message,
      description,
      code,
      status,
      requestId,
      actionHint,
      action,
      onDismiss,
      dismissLabel = 'Dismiss notification',
      hideIcon = false,
      role,
      className,
      children,
      ...props
    },
    ref,
  ) {
    const config = variantConfig[variant]
    const Icon = config.Icon
    const primaryMessage = message ?? children

    return (
      <div
        ref={ref}
        role={role ?? config.defaultRole}
        data-slot="notification-banner"
        data-variant={variant}
        className={cn(
          'relative flex flex-col gap-2 rounded-[var(--abc-radius-lg,0.625rem)] border p-3.5 text-xs shadow-2xs transition-colors sm:flex-row sm:items-start sm:justify-between sm:gap-3',
          config.container,
          className,
        )}
        {...props}
      >
        <div className="flex min-w-0 flex-1 items-start gap-2.5">
          {!hideIcon && (
            <span
              className={cn(
                'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                config.iconWrap,
              )}
              aria-hidden="true"
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
          )}

          <div className="min-w-0 flex-1 space-y-1">
            {(title || code || status != null || requestId) && (
              <div className="flex flex-wrap items-center gap-1.5 font-medium">
                {status != null && (
                  <span
                    className={cn(
                      'rounded px-1.5 py-0.2 font-mono text-[10px] border',
                      config.badge,
                    )}
                  >
                    HTTP {status}
                  </span>
                )}
                {code && (
                  <span
                    className={cn(
                      'rounded px-1.5 py-0.2 font-mono text-[10px] border',
                      config.badge,
                    )}
                  >
                    {code}
                  </span>
                )}
                {requestId && (
                  <span
                    className="font-mono text-[10px] opacity-75 truncate max-w-[200px]"
                    title={`Request ID: ${requestId}`}
                  >
                    req: {requestId}
                  </span>
                )}
                {title && <span className="font-semibold text-foreground">{title}</span>}
              </div>
            )}

            {primaryMessage && (
              <div className="leading-relaxed font-normal text-foreground/90 break-words">
                {primaryMessage}
              </div>
            )}

            {description && (
              <div className="text-[11px] leading-normal opacity-85">{description}</div>
            )}

            {actionHint && (
              <div className="pt-0.5 text-[11px] font-medium text-primary">{actionHint}</div>
            )}
          </div>
        </div>

        {(action || onDismiss) && (
          <div className="flex shrink-0 items-center gap-2 self-end sm:self-start">
            {action}
            {onDismiss && (
              <button
                type="button"
                data-abc-no-press-scale="true"
                aria-label={dismissLabel}
                onClick={onDismiss}
                className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        )}
      </div>
    )
  },
)
NotificationBanner.displayName = 'NotificationBanner'

export interface AsyncInlineErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  error: unknown
  fallbackTitle?: React.ReactNode
  fallbackMessage?: React.ReactNode
  action?: React.ReactNode
  retry?: () => void
  retryLabel?: React.ReactNode
  isRetrying?: boolean
}

export function AsyncInlineError({
  error,
  fallbackTitle = '加载失败',
  fallbackMessage = '无法加载该区块数据，请重试。',
  action,
  retry,
  retryLabel = '重试',
  isRetrying = false,
  className,
  ...props
}: AsyncInlineErrorProps) {
  if (!error) return null

  const errObj = error as { message?: string; status?: number; code?: string; requestId?: string }
  const message = errObj?.message || fallbackMessage

  return (
    <NotificationBanner
      variant="error"
      title={fallbackTitle}
      message={message}
      status={errObj?.status}
      code={errObj?.code}
      requestId={errObj?.requestId}
      className={className}
      action={
        action ??
        (retry ? (
          <Button
            size="xs"
            variant="outline"
            onClick={retry}
            disabled={isRetrying}
            className="h-7 text-xs bg-white/70 dark:bg-slate-900/60"
          >
            {isRetrying ? (
              <Loader2 className="mr-1 h-3 w-3 animate-spin" aria-hidden="true" />
            ) : (
              <RefreshCw className="mr-1 h-3 w-3" aria-hidden="true" />
            )}
            <span>{retryLabel}</span>
          </Button>
        ) : null)
      }
      {...props}
    />
  )
}

export interface ReadErrorBannerProps extends Omit<NotificationBannerProps, 'action' | 'variant'> {
  onRetry?: () => void
  retryLabel?: string
  pendingLabel?: string
  retryAriaLabel?: string
  pending?: boolean
  action?: React.ReactNode
}

export function ReadErrorBanner({
  message,
  code,
  status,
  requestId,
  onRetry,
  retryLabel = '重试读取',
  pendingLabel,
  retryAriaLabel,
  pending = false,
  action,
  ...props
}: ReadErrorBannerProps) {
  const resolvedAction =
    action ??
    (onRetry ? (
      <Button
        variant="outline"
        size="sm"
        disabled={pending}
        onClick={onRetry}
        aria-label={retryAriaLabel}
      >
        <RefreshCw
          aria-hidden="true"
          className={cn(
            'mr-1 h-3 w-3',
            pending && 'animate-spin motion-reduce:animate-[spin_6s_linear_infinite]',
          )}
        />
        <span>{pending && pendingLabel ? pendingLabel : retryLabel}</span>
      </Button>
    ) : undefined)

  return (
    <NotificationBanner
      variant="error"
      role="alert"
      message={message}
      code={code}
      status={status}
      requestId={requestId}
      action={resolvedAction}
      {...props}
    />
  )
}

export interface LoadingStateCardProps extends React.HTMLAttributes<HTMLDivElement> {
  message: React.ReactNode
  paused?: boolean
  size?: 'sm' | 'md'
}

export function LoadingStateCard({
  message,
  paused = false,
  size = 'md',
  className,
  ...props
}: LoadingStateCardProps) {
  return (
    <div
      role="status"
      data-slot="loading-state-card"
      className={cn(
        'flex items-center gap-3 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-xs text-[var(--abc-fg-muted)] shadow-2xs',
        size === 'sm' ? 'px-3 py-2 text-[11px]' : 'p-3.5',
        paused && 'border-amber-500/30 bg-amber-50/50 text-amber-900 dark:bg-amber-950/20 dark:text-amber-200',
        className,
      )}
      {...props}
    >
      {paused ? (
        <WifiOff aria-hidden="true" className="h-4 w-4 shrink-0 text-amber-600" />
      ) : (
        <Loader2
          aria-hidden="true"
          className="h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]"
        />
      )}
      <span>{message}</span>
    </div>
  )
}
