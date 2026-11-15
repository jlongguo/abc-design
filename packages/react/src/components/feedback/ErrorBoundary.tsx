import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle, ChevronDown, ChevronRight, Home, RefreshCw, X } from 'lucide-react'
import { cn } from '../../utils/cn'

export interface TabErrorBoundaryProps {
  /** 当前页签对应的路由路径标识 */
  path?: string
  /** 路由或状态变更时自动复位异常边界的重置键 */
  resetKey?: string | number
  /** 子视图组件 */
  children: ReactNode
  /** 触发重新加载当前页签的回调 */
  onReload?: () => void
  /** 兼容 onReset 回调命名 */
  onReset?: () => void
  /** 关闭当前页签的回调 */
  onClose?: () => void
  /** 返回首页/大盘的回调 */
  onNavigateHome?: () => void
  /** 捕获到异常时的上报钩子 */
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  /** 自定义标题文案 */
  title?: string
  /** 自定义描述文案 */
  description?: string
  /** 重载按钮文案 */
  reloadText?: string
  /** 关闭页签按钮文案 */
  closeText?: string
  /** 返回首页按钮文案 */
  homeText?: string
  className?: string
}

interface TabErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  showDetails: boolean
}

/**
 * 单页签异常隔离边界 (TabErrorBoundary)
 * 将渲染期运行时错误封闭在故障页签内，避免穿透击毁整个应用壳层或丢失其他页签状态。
 */
export class TabErrorBoundary extends Component<TabErrorBoundaryProps, TabErrorBoundaryState> {
  public state: TabErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null,
    showDetails: false,
  }

  public static getDerivedStateFromError(error: Error): Partial<TabErrorBoundaryState> {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[TabErrorBoundary] 页面异常 [${this.props.path || 'unknown'}]:`, error, errorInfo)
    this.setState({ errorInfo })
    this.props.onError?.(error, errorInfo)
  }

  public componentDidUpdate(prevProps: TabErrorBoundaryProps) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        showDetails: false,
      })
    }
  }

  public reset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    })
    this.props.onReload?.()
    this.props.onReset?.()
  }

  public render() {
    if (this.state.hasError) {
      const {
        path,
        onClose,
        onNavigateHome,
        title = '当前页面渲染发生异常',
        description = '该页签在加载或交互时遭遇未捕获错误。此故障已被安全隔离在当前页签内，其他已打开的页签与导航系统依然正常可用。',
        reloadText = '重新加载本页',
        closeText = '关闭此页签',
        homeText = '返回仪表盘',
        className,
      } = this.props
      const { error, errorInfo, showDetails } = this.state

      return (
        <div
          className={cn(
            'flex min-h-[500px] w-full items-center justify-center p-6 md:p-10',
            className
          )}
        >
          <div className="w-full max-w-xl space-y-6 rounded-[var(--abc-radius-xl,1rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-8 text-center shadow-[var(--abc-shadow-popover)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-500 shadow-xs dark:border-amber-800 dark:bg-amber-950/40">
              <AlertTriangle className="h-7 w-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-tight text-[var(--abc-fg)]">
                {title}
              </h3>
              <p className="mx-auto max-w-md text-xs leading-relaxed text-[var(--abc-fg-muted)]">
                {description}
              </p>
              {path && (
                <div className="inline-block rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg-muted)]">
                  {path}
                </div>
              )}
            </div>

            {error && (
              <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 text-left text-xs">
                <button
                  type="button"
                  onClick={() => this.setState((prev) => ({ showDetails: !prev.showDetails }))}
                  className="flex cursor-pointer items-center gap-1.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] select-none hover:text-[var(--abc-fg)]"
                >
                  {showDetails ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  <span>{showDetails ? '收起技术排查详情' : '展开技术排查详情'}</span>
                </button>

                {showDetails && (
                  <div className="mt-2.5 space-y-1.5">
                    <p className="font-mono font-semibold break-all text-rose-600 select-all dark:text-rose-400">
                      {error.name}: {error.message}
                    </p>
                    {errorInfo?.componentStack && (
                      <pre className="max-h-40 overflow-auto font-mono text-[10px] whitespace-pre-wrap text-[var(--abc-fg-muted)] select-all">
                        {errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.reset}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-[var(--abc-radius-lg)] bg-[var(--abc-primary)] px-4 py-2 text-xs font-medium text-[var(--abc-primary-fg)] shadow-xs transition-colors hover:bg-[var(--abc-primary-hover)]"
              >
                <RefreshCw size={14} />
                <span>{reloadText}</span>
              </button>

              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-4 py-2 text-xs font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                >
                  <X size={14} />
                  <span>{closeText}</span>
                </button>
              )}

              {onNavigateHome && (
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-4 py-2 text-xs font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                >
                  <Home size={14} />
                  <span>{homeText}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export interface ErrorBoundaryProps {
  children: ReactNode
  /** 展示形态：全屏兜底或局部容器兜底 */
  variant?: 'fullscreen' | 'panel'
  /** 路由或模块标识变更时自动复位异常状态 */
  resetKey?: string | number
  title?: string
  /** 兼容模块级标题配置 */
  tabTitle?: string
  description?: string
  reloadText?: string
  homeText?: string
  /** 自定义重试回调；与 onReset 均未传时默认刷新当前浏览器页面 */
  onReload?: () => void
  /** 模块内局部重置回调（传入时不触发整页 window.location.reload） */
  onReset?: () => void
  /** 自定义返回首页回调；未传时默认跳转至 '/' */
  onNavigateHome?: () => void
  /** 是否隐藏返回首页按钮（局部模块边界默认不展示全站跳转） */
  showHomeButton?: boolean
  /** 异常上报钩子 */
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  /** 自定义降级渲染节点或函数 */
  fallback?: ReactNode | ((error: Error, reset: () => void, errorInfo: ErrorInfo | null) => ReactNode)
  className?: string
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

/**
 * 全局或容器级应用异常兜底边界 (ErrorBoundary)
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
    this.setState({ error, errorInfo })
    this.props.onError?.(error, errorInfo)
  }

  public componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false, error: null, errorInfo: null })
    }
  }

  public reset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    if (this.props.onReload || this.props.onReset) {
      this.props.onReload?.()
      this.props.onReset?.()
    } else if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  private handleHome = () => {
    if (this.props.onNavigateHome) {
      this.setState({ hasError: false, error: null, errorInfo: null })
      this.props.onNavigateHome()
    } else if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }

  public render() {
    if (this.state.hasError && this.state.error) {
      const isLocalScoped = Boolean(
        this.props.onReset || this.props.resetKey !== undefined || this.props.tabTitle
      )
      const {
        variant = isLocalScoped ? 'panel' : 'fullscreen',
        title,
        tabTitle,
        description = '应用程序在运行过程中遇到未预期的错误，您可以尝试刷新页面或返回首页。',
        reloadText = isLocalScoped ? '重新加载此模块' : '刷新页面',
        homeText = '返回首页',
        showHomeButton = !isLocalScoped,
        fallback,
        className,
      } = this.props

      if (fallback !== undefined) {
        return typeof fallback === 'function'
          ? fallback(this.state.error, this.reset, this.state.errorInfo)
          : fallback
      }

      const resolvedTitle =
        title ?? (tabTitle ? `${tabTitle}加载或渲染发生异常` : '页面运行遇到异常')

      return (
        <div
          className={cn(
            'flex items-center justify-center p-6 text-[var(--abc-fg)]',
            variant === 'fullscreen'
              ? 'min-h-screen bg-[var(--abc-bg-canvas)]'
              : 'min-h-[260px] w-full',
            className
          )}
        >
          <div className="w-full max-w-xl space-y-6 rounded-[var(--abc-radius-xl,1rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-8 text-center shadow-[var(--abc-shadow-popover)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-500 dark:border-rose-800 dark:bg-rose-950/40">
              <AlertTriangle className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--abc-fg)]">
                {resolvedTitle}
              </h2>
              <p className="text-sm text-[var(--abc-fg-muted)]">{description}</p>
            </div>

            <div className="max-h-48 overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 text-left font-mono text-xs text-rose-600 dark:text-rose-400">
              <div className="mb-1 font-semibold">{this.state.error.toString()}</div>
              {this.state.errorInfo?.componentStack && (
                <pre className="mt-2 text-[11px] whitespace-pre-wrap text-[var(--abc-fg-muted)]">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.reset}
                className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--abc-radius-lg)] bg-[var(--abc-primary)] px-5 py-2.5 text-sm font-medium text-[var(--abc-primary-fg)] shadow-xs transition-all hover:bg-[var(--abc-primary-hover)] active:scale-95"
              >
                <RefreshCw className="h-4 w-4" />
                {reloadText}
              </button>
              {showHomeButton && (
                <button
                  type="button"
                  onClick={this.handleHome}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-5 py-2.5 text-sm font-medium text-[var(--abc-fg-secondary)] transition-all hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] active:scale-95"
                >
                  <Home className="h-4 w-4" />
                  {homeText}
                </button>
              )}
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
