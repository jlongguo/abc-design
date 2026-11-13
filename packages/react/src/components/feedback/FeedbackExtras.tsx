import React, { useState } from 'react'
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  FileSearch,
  Info,
  RefreshCw,
  ServerCrash,
  ShieldAlert,
  X,
} from 'lucide-react'
import Button from '../button/Button'
import { cn } from '../../utils/cn'

/* ==================== 1. Alert 页内通告横幅 ==================== */

export type AlertTone = 'info' | 'success' | 'warning' | 'danger'

export interface AlertProps {
  tone?: AlertTone
  title?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  showIcon?: boolean
  closable?: boolean
  onClose?: () => void
  action?: React.ReactNode
  className?: string
}

const ALERT_STYLES: Record<AlertTone, { box: string; icon: React.ReactNode }> = {
  info: {
    box: 'border-[var(--abc-info)]/25 bg-[var(--abc-info-soft)] text-[var(--abc-fg)]',
    icon: <Info className="h-4 w-4 text-[var(--abc-info)]" />,
  },
  success: {
    box: 'border-[var(--abc-success)]/25 bg-[var(--abc-success-soft)] text-[var(--abc-fg)]',
    icon: <CheckCircle2 className="h-4 w-4 text-[var(--abc-success)]" />,
  },
  warning: {
    box: 'border-[var(--abc-warning)]/25 bg-[var(--abc-warning-soft)] text-[var(--abc-fg)]',
    icon: <AlertTriangle className="h-4 w-4 text-[var(--abc-warning)]" />,
  },
  danger: {
    box: 'border-[var(--abc-danger)]/25 bg-[var(--abc-danger-soft)] text-[var(--abc-fg)]',
    icon: <AlertCircle className="h-4 w-4 text-[var(--abc-danger)]" />,
  },
}

/**
 * 页内提示横幅组件 (Alert)
 */
export const Alert: React.FC<AlertProps> = ({
  tone = 'info',
  title,
  description,
  children,
  showIcon = true,
  closable = false,
  onClose,
  action,
  className,
}) => {
  const [closed, setClosed] = useState(false)
  if (closed) return null

  const cfg = ALERT_STYLES[tone]
  const body = description ?? children

  return (
    <div
      role="alert"
      className={cn(
        'flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border px-3.5 py-2.5 text-xs',
        cfg.box,
        className
      )}
    >
      {showIcon && <span className="mt-0.5 shrink-0">{cfg.icon}</span>}
      <div className="min-w-0 flex-1 space-y-0.5">
        {title && <div className="font-semibold text-[var(--abc-fg)]">{title}</div>}
        {body && <div className="leading-relaxed text-[var(--abc-fg-secondary)]">{body}</div>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
      {closable && (
        <button
          type="button"
          aria-label="关闭提示"
          onClick={() => {
            setClosed(true)
            onClose?.()
          }}
          className="shrink-0 rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  )
}

/* ==================== 2. Progress 线性与环形进度指示器 ==================== */

export interface ProgressProps {
  /** 0 ~ 100 进度百分比 */
  percent: number
  type?: 'line' | 'circle'
  tone?: 'primary' | 'success' | 'warning' | 'danger'
  showInfo?: boolean
  /** 环形直径（默认 68px）或线性条高度（默认 8px） */
  size?: number
  className?: string
}

const PROGRESS_FILL_COLOR: Record<NonNullable<ProgressProps['tone']>, string> = {
  primary: 'var(--abc-primary)',
  success: 'var(--abc-success)',
  warning: 'var(--abc-warning)',
  danger: 'var(--abc-danger)',
}

/**
 * 线性与 SVG 环形进度条 (Progress)
 */
export const Progress: React.FC<ProgressProps> = ({
  percent,
  type = 'line',
  tone = 'primary',
  showInfo = true,
  size,
  className,
}) => {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)))
  const strokeColor = PROGRESS_FILL_COLOR[tone]

  if (type === 'circle') {
    const diameter = size ?? 68
    const strokeWidth = Math.max(4, Math.round(diameter * 0.09))
    const radius = (diameter - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const dashOffset = circumference - (clamped / 100) * circumference

    return (
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn('relative inline-flex items-center justify-center', className)}
        style={{ width: diameter, height: diameter }}
      >
        <svg width={diameter} height={diameter} className="-rotate-90">
          <circle
            cx={diameter / 2}
            cy={diameter / 2}
            r={radius}
            fill="none"
            stroke="var(--abc-bg-subtle)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={diameter / 2}
            cy={diameter / 2}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="transition-all duration-300"
          />
        </svg>
        {showInfo && (
          <span className="absolute font-mono text-xs font-semibold text-[var(--abc-fg)] tabular-nums">
            {clamped}%
          </span>
        )}
      </div>
    )
  }

  const barHeight = size ?? 7
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn('flex w-full items-center gap-2.5', className)}
    >
      <div
        className="flex-1 overflow-hidden rounded-full bg-[var(--abc-bg-subtle)]"
        style={{ height: barHeight }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${clamped}%`, backgroundColor: strokeColor }}
        />
      </div>
      {showInfo && (
        <span className="w-9 shrink-0 text-right font-mono text-xs text-[var(--abc-fg-secondary)] tabular-nums">
          {clamped}%
        </span>
      )}
    </div>
  )
}

/* ==================== 3. Result 页面状态反馈组件 ==================== */

export type ResultStatus = 'success' | 'info' | 'warning' | 'error' | '403' | '404' | '500'

export interface ResultProps {
  status?: ResultStatus
  title: React.ReactNode
  subTitle?: React.ReactNode
  extra?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

const RESULT_ICONS: Record<ResultStatus, { icon: React.ReactNode; badgeClass: string }> = {
  success: {
    icon: <CheckCircle2 className="h-8 w-8 text-[var(--abc-success)]" />,
    badgeClass: 'bg-[var(--abc-success-soft)]',
  },
  info: {
    icon: <Info className="h-8 w-8 text-[var(--abc-info)]" />,
    badgeClass: 'bg-[var(--abc-info-soft)]',
  },
  warning: {
    icon: <AlertTriangle className="h-8 w-8 text-[var(--abc-warning)]" />,
    badgeClass: 'bg-[var(--abc-warning-soft)]',
  },
  error: {
    icon: <AlertCircle className="h-8 w-8 text-[var(--abc-danger)]" />,
    badgeClass: 'bg-[var(--abc-danger-soft)]',
  },
  '403': {
    icon: <ShieldAlert className="h-8 w-8 text-[var(--abc-warning)]" />,
    badgeClass: 'bg-[var(--abc-warning-soft)]',
  },
  '404': {
    icon: <FileSearch className="h-8 w-8 text-[var(--abc-primary)]" />,
    badgeClass: 'bg-[var(--abc-primary-soft)]',
  },
  '500': {
    icon: <ServerCrash className="h-8 w-8 text-[var(--abc-danger)]" />,
    badgeClass: 'bg-[var(--abc-danger-soft)]',
  },
}

/**
 * 企业级结果与异常状态反馈页 (Result: 403 / 404 / 500 / 成功 / 失败)
 */
export const Result: React.FC<ResultProps> = ({
  status = 'info',
  title,
  subTitle,
  extra,
  children,
  className,
}) => {
  const visual = RESULT_ICONS[status]
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center px-6 py-12 text-center',
        className
      )}
    >
      <div
        className={cn(
          'mb-4 flex h-16 w-16 items-center justify-center rounded-2xl',
          visual.badgeClass
        )}
      >
        {visual.icon}
      </div>
      <h3 className="text-base font-bold text-[var(--abc-fg)]">{title}</h3>
      {subTitle && (
        <p className="mt-1.5 max-w-md text-xs leading-relaxed text-[var(--abc-fg-muted)]">
          {subTitle}
        </p>
      )}
      {extra && <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">{extra}</div>}
      {children && (
        <div className="mt-6 w-full max-w-xl rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-4 text-left text-xs">
          {children}
        </div>
      )}
    </div>
  )
}

/* ==================== 4. ErrorBoundary 页签与全局异常隔离容器 ==================== */

export interface ErrorBoundaryProps {
  children: React.ReactNode
  /** 路由或页签标识变更时自动重置错误状态 */
  resetKey?: string | number
  /** 自定义标题（兼容 TabErrorBoundary tabTitle 用法） */
  title?: string
  tabTitle?: string
  /** 自定义降级渲染节点 */
  fallback?: React.ReactNode | ((error: Error, reset: () => void) => React.ReactNode)
  onReset?: () => void
}

interface ErrorBoundaryState {
  error: Error | null
}

/**
 * 页面与多页签级异常隔离边界 (ErrorBoundary / TabErrorBoundary)
 * 防止单个子模块渲染崩溃导致整个管理后台白屏，支持重试自愈与切换路由自动复位
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    if (this.state.error && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ error: null })
    }
  }

  handleReset = (): void => {
    this.setState({ error: null })
    this.props.onReset?.()
  }

  render(): React.ReactNode {
    const { error } = this.state
    if (!error) return this.props.children

    if (typeof this.props.fallback === 'function') {
      return this.props.fallback(error, this.handleReset)
    }
    if (this.props.fallback) {
      return this.props.fallback
    }

    const label = this.props.tabTitle || this.props.title || '当前页面模块'

    return (
      <Result
        status="500"
        title={`${label}加载或渲染发生异常`}
        subTitle={error.message || '捕获到未知运行时渲染错误，其他工作区页签不受影响。'}
        extra={
          <Button
            variant="primary"
            icon={<RefreshCw className="h-3.5 w-3.5" />}
            onClick={this.handleReset}
          >
            重新加载此模块
          </Button>
        }
      />
    )
  }
}

export const TabErrorBoundary = ErrorBoundary
