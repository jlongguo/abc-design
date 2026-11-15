import { Loader2, Sparkles, X } from 'lucide-react'
import * as React from 'react'
import { Button } from '../button/Button'
import { cn } from '../../utils/cn'

export interface SplitInspectorLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  inspector?: React.ReactNode
  ratio?: 'default' | 'balanced' | 'wide-master'
  stickyInspector?: boolean
}

const ratioClasses: Record<NonNullable<SplitInspectorLayoutProps['ratio']>, string> = {
  default: 'xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]',
  balanced: 'xl:grid-cols-[minmax(0,1.2fr)_minmax(400px,0.8fr)]',
  'wide-master': 'xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.5fr)]',
}

/**
 * 主从分栏布局 (SplitInspectorLayout)
 * 广泛用于主表/右侧实时详情检视的经典工作台模式，支持自适应断点与粘性定位
 */
export function SplitInspectorLayout({
  children,
  inspector,
  ratio = 'default',
  stickyInspector = true,
  className,
  ...props
}: SplitInspectorLayoutProps) {
  const childArray = React.Children.toArray(children)
  const primaryContent = inspector !== undefined ? children : childArray[0]
  const inspectorContent = inspector !== undefined ? inspector : childArray.slice(1)
  return (
    <div
      data-slot="split-inspector-layout"
      className={cn('grid items-start gap-6', ratioClasses[ratio], className)}
      {...props}
    >
      <div className="min-w-0">{primaryContent}</div>
      <div className={cn('min-w-0', stickyInspector && 'xl:sticky xl:top-20')}>
        {inspectorContent}
      </div>
    </div>
  )
}

export interface InspectorPanelProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  'aria-label'?: string
  title?: React.ReactNode
  subtitle?: React.ReactNode
  badge?: React.ReactNode
  headerActions?: React.ReactNode
  showClear?: boolean
  onClear?: () => void
  clearLabel?: string
  loading?: boolean
  loadingText?: React.ReactNode
  error?: React.ReactNode
  isEmpty?: boolean
  hasSelection?: boolean
  emptyIcon?: React.ReactNode
  emptyMessage?: React.ReactNode
  emptyDescription?: React.ReactNode
  footer?: React.ReactNode
}

/**
 * 右侧检视面板 (InspectorPanel)
 * 用于承载右侧选定项的字段详情、状态流转和关联操作
 */
export const InspectorPanel = React.forwardRef<HTMLElement, InspectorPanelProps>(
  (
    {
      title,
      subtitle,
      badge,
      headerActions,
      showClear = false,
      onClear,
      clearLabel = '清除选中',
      loading = false,
      loadingText = '正在加载详情…',
      error,
      isEmpty = false,
      hasSelection,
      emptyIcon,
      emptyMessage = '请在左侧选择一项以检视详细信息',
      emptyDescription,
      footer,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const resolvedIsEmpty = hasSelection !== undefined ? !hasSelection : isEmpty
    const hasHeader = Boolean(title || subtitle || badge || headerActions)

    return (
      <aside
        ref={ref}
        data-slot="inspector-panel"
        className={cn(
          'flex flex-col rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-2xs transition-all',
          className
        )}
        {...props}
      >
        {hasHeader && (
          <header className="mb-4 flex items-start justify-between gap-3 border-b border-[var(--abc-border)] pb-3.5">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {typeof title === 'string' ? (
                  <h3 className="text-base font-semibold text-[var(--abc-fg)] tracking-tight">
                    {title}
                  </h3>
                ) : (
                  title
                )}
                {badge}
              </div>
              {subtitle && (
                <div className="mt-1 text-xs text-[var(--abc-fg-muted)]">{subtitle}</div>
              )}
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              {headerActions}
              {showClear && onClear && (
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={onClear}
                  aria-label={clearLabel}
                  title={clearLabel}
                  className="h-7 w-7 p-0 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              )}
            </div>
          </header>
        )}

        {loading ? (
          <div className="flex min-h-[220px] flex-col items-center justify-center gap-2.5 py-8 text-center text-xs text-[var(--abc-fg-muted)]">
            <Loader2 className="h-5 w-5 animate-spin text-[var(--abc-primary)]" aria-hidden="true" />
            <span>{loadingText}</span>
          </div>
        ) : error ? (
          <div className="my-2">{error}</div>
        ) : resolvedIsEmpty ? (
          <div className="flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-6 text-center">
            {emptyIcon ?? (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]">
                <Sparkles className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
              </div>
            )}
            <p className="text-xs font-medium text-[var(--abc-fg)]">{emptyMessage}</p>
            {emptyDescription && (
              <p className="max-w-[280px] text-[11px] text-[var(--abc-fg-muted)]">
                {emptyDescription}
              </p>
            )}
          </div>
        ) : (
          <div className="flex-1 space-y-4">{children}</div>
        )}

        {footer && (
          <footer className="mt-4 border-t border-[var(--abc-border)] pt-3.5">{footer}</footer>
        )}
      </aside>
    )
  }
)
InspectorPanel.displayName = 'InspectorPanel'
