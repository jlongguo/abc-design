import React, { useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
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
import { useAbcMotion, useAbcSize } from '../../hooks'
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
  size?: AbcSize
  motion?: AbcMotionPreset
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

const ALERT_SIZE_MAP: Record<AbcSize, string> = {
  xs: 'px-2.5 py-1.5 text-[11px]',
  sm: 'px-3.5 py-2.5 text-xs',
  md: 'px-4 py-3 text-sm',
  lg: 'px-5 py-3.5 text-sm',
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
  size,
  motion,
  className,
}) => {
  const [closed, setClosed] = useState(false)
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  if (closed) return null

  const cfg = ALERT_STYLES[tone]
  const body = description ?? children

  return (
    <div
      role="alert"
      data-motion={resolvedMotion}
      className={cn(
        'abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border',
        ALERT_SIZE_MAP[resolvedSize],
        resolvedMotion !== 'none' && 'abc-animate-fade-in',
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
  /** 自定义进度条填充颜色（覆盖默认 tone 色值） */
  strokeColor?: string
  showInfo?: boolean
  /** 环形直径 / 线性条高度（支持具体像素或通用 xs/sm/md/lg 规格） */
  size?: number | AbcSize
  motion?: AbcMotionPreset
  className?: string
}

const PROGRESS_CIRCLE_PX: Record<AbcSize, number> = {
  xs: 48,
  sm: 68,
  md: 84,
  lg: 104,
}

const PROGRESS_LINE_PX: Record<AbcSize, number> = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12,
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
  strokeColor: customStrokeColor,
  showInfo = true,
  size,
  motion,
  className,
}) => {
  const resolvedSize = useAbcSize(typeof size === 'string' ? size : undefined, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const clamped = Math.max(0, Math.min(100, Math.round(percent)))
  const strokeColor = customStrokeColor || PROGRESS_FILL_COLOR[tone]

  if (type === 'circle') {
    const diameter = typeof size === 'number' ? size : PROGRESS_CIRCLE_PX[resolvedSize]
    const strokeWidth = Math.max(4, Math.round(diameter * 0.09))
    const radius = (diameter - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const dashOffset = circumference - (clamped / 100) * circumference

    return (
      <div
        role="progressbar"
        data-motion={resolvedMotion}
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
            className="transition-all duration-[var(--abc-motion-slow)]"
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

  const barHeight = typeof size === 'number' ? size : PROGRESS_LINE_PX[resolvedSize]
  return (
    <div
      role="progressbar"
      data-motion={resolvedMotion}
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
          className="h-full rounded-full transition-all duration-[var(--abc-motion-slow)]"
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
  size?: AbcSize
  motion?: AbcMotionPreset
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
  size,
  motion,
  className,
}) => {
  const visual = RESULT_ICONS[status]
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const padSizeMap: Record<AbcSize, string> = {
    xs: 'px-4 py-6',
    sm: 'px-5 py-8',
    md: 'px-6 py-12',
    lg: 'px-8 py-16',
  }
  return (
    <div
      data-motion={resolvedMotion}
      className={cn(
        'flex flex-col items-center justify-center text-center',
        padSizeMap[resolvedSize],
        resolvedMotion !== 'none' && 'abc-animate-fade-in',
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
