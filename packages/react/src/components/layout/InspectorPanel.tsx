import { GripVertical, Loader2, Sparkles, X } from 'lucide-react'
import * as React from 'react'
import { Button } from '../button/Button'
import { cn } from '../../utils/cn'

export interface SplitInspectorLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  inspector?: React.ReactNode
  ratio?: 'default' | 'balanced' | 'wide-master'
  stickyInspector?: boolean
  /** 是否在主从面板中间展示常驻分隔线与胶囊拖拽手柄（默认 true） */
  resizable?: boolean
  /** 右侧检视面板最小像素宽度（默认 320） */
  minInspectorWidth?: number
  /** 右侧检视面板最大像素宽度（默认 720） */
  maxInspectorWidth?: number
  /** 本地持久化记忆调节宽度的存储键 */
  storageKey?: string
}

const DEFAULT_INSPECTOR_WIDTH_BY_RATIO: Record<NonNullable<SplitInspectorLayoutProps['ratio']>, number> = {
  default: 440,
  balanced: 500,
  'wide-master': 380,
}

function clampInspectorWidth(val: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, val))
}

/**
 * 主从分栏布局 (SplitInspectorLayout)
 * 广泛用于主表/右侧实时详情检视的工作台模式，默认常驻展示分隔线与拖拽胶囊手柄，支持自由拖拽宽度占比与双击复位
 */
export function SplitInspectorLayout({
  children,
  inspector,
  ratio = 'default',
  stickyInspector = true,
  resizable = true,
  minInspectorWidth = 320,
  maxInspectorWidth = 720,
  storageKey,
  className,
  ...props
}: SplitInspectorLayoutProps) {
  const childArray = React.Children.toArray(children)
  const primaryContent = inspector !== undefined ? children : childArray[0]
  const inspectorContent = inspector !== undefined ? inspector : childArray.slice(1)
  const hasInspector =
    inspector !== undefined
      ? Boolean(inspector)
      : childArray.length > 1

  const defaultWidth = DEFAULT_INSPECTOR_WIDTH_BY_RATIO[ratio]
  const [isDragging, setIsDragging] = React.useState(false)
  const [customWidth, setCustomWidth] = React.useState<number | null>(() => {
    if (!storageKey || typeof window === 'undefined') return null
    try {
      const saved = Number(window.localStorage.getItem(`abc_inspector_w_${storageKey}`))
      return Number.isFinite(saved)
        ? clampInspectorWidth(saved, minInspectorWidth, maxInspectorWidth)
        : null
    } catch {
      return null
    }
  })

  const persistWidth = React.useCallback(
    (nextPx: number) => {
      if (!storageKey || typeof window === 'undefined') return
      try {
        window.localStorage.setItem(`abc_inspector_w_${storageKey}`, String(Math.round(nextPx)))
      } catch {
        // 忽略本地存储写入异常
      }
    },
    [storageKey]
  )

  const clearSavedWidth = React.useCallback(() => {
    if (!storageKey || typeof window === 'undefined') return
    try {
      window.localStorage.removeItem(`abc_inspector_w_${storageKey}`)
    } catch {
      // 忽略本地存储移除异常
    }
  }, [storageKey])

  const effectiveNumericWidth = clampInspectorWidth(
    customWidth ?? defaultWidth,
    minInspectorWidth,
    maxInspectorWidth
  )

  const dragCleanupRef = React.useRef<(() => void) | null>(null)
  React.useEffect(() => {
    return () => {
      dragCleanupRef.current?.()
    }
  }, [])

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault()
    dragCleanupRef.current?.()
    const startX = e.clientX
    const startWidth = effectiveNumericWidth
    const prevCursor = document.body.style.cursor
    const prevUserSelect = document.body.style.userSelect
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    setIsDragging(true)

    const onMove = (ev: MouseEvent) => {
      const deltaX = startX - ev.clientX
      const nextWidth = clampInspectorWidth(startWidth + deltaX, minInspectorWidth, maxInspectorWidth)
      setCustomWidth(nextWidth)
      persistWidth(nextWidth)
    }

    const cleanup = () => {
      setIsDragging(false)
      document.body.style.cursor = prevCursor
      document.body.style.userSelect = prevUserSelect
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', cleanup)
      dragCleanupRef.current = null
    }

    dragCleanupRef.current = cleanup
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', cleanup)
  }

  const handleResizeKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    e.preventDefault()
    const step = e.shiftKey ? 32 : 16
    const delta = e.key === 'ArrowLeft' ? step : -step
    const nextWidth = clampInspectorWidth(
      effectiveNumericWidth + delta,
      minInspectorWidth,
      maxInspectorWidth
    )
    setCustomWidth(nextWidth)
    persistWidth(nextWidth)
  }

  const handleResizeDoubleClick = () => {
    setCustomWidth(null)
    clearSavedWidth()
  }

  if (!hasInspector) {
    return (
      <div
        data-slot="split-inspector-layout"
        className={cn('min-w-0 w-full', className)}
        {...props}
      >
        <div className="min-w-0">{primaryContent}</div>
      </div>
    )
  }

  return (
    <div
      data-slot="split-inspector-layout"
      data-dragging={isDragging ? 'true' : 'false'}
      className={cn(
        'flex flex-col gap-6 xl:flex-row xl:items-start',
        resizable && 'xl:gap-0',
        className
      )}
      {...props}
    >
      <div className="min-w-0 flex-1">{primaryContent}</div>

      {resizable && (
        <div
          role="separator"
          tabIndex={0}
          data-slot="split-inspector-resizer"
          aria-orientation="vertical"
          aria-label="拖拽或使用左右方向键调节检视面板宽度"
          aria-valuemin={minInspectorWidth}
          aria-valuemax={maxInspectorWidth}
          aria-valuenow={Math.round(effectiveNumericWidth)}
          title="左右拖拽调节宽度占比（双击恢复默认宽度）"
          onMouseDown={handleResizeStart}
          onKeyDown={handleResizeKeyDown}
          onDoubleClick={handleResizeDoubleClick}
          className="group relative z-20 hidden w-5 shrink-0 cursor-col-resize select-none flex-col items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] xl:flex xl:self-stretch"
        >
          <span
            aria-hidden="true"
            data-slot="split-resize-line"
            className={cn(
              'pointer-events-none absolute inset-y-1 left-1/2 -translate-x-1/2 rounded-full transition-all',
              isDragging
                ? 'w-0.5 bg-[var(--abc-primary)]'
                : 'w-px bg-[var(--abc-border)] group-hover:w-0.5 group-hover:bg-[var(--abc-primary)] group-focus-visible:w-0.5 group-focus-visible:bg-[var(--abc-primary)]'
            )}
          />
          <span
            aria-hidden="true"
            data-slot="split-resize-handle"
            className={cn(
              'pointer-events-none sticky top-28 bottom-28 z-10 my-auto inline-flex h-8 w-4 items-center justify-center rounded-full border shadow-xs transition-all',
              isDragging
                ? 'scale-105 border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#ffffff)] shadow-sm'
                : 'border-[var(--abc-border-strong,var(--abc-border))] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] group-hover:border-[var(--abc-primary)] group-hover:text-[var(--abc-primary)] group-hover:shadow-sm group-focus-visible:border-[var(--abc-primary)] group-focus-visible:text-[var(--abc-primary)]'
            )}
          >
            <GripVertical className="h-3.5 w-3.5" />
          </span>
        </div>
      )}

      <div
        style={{ '--abc-inspector-w': `${effectiveNumericWidth}px` } as React.CSSProperties}
        className={cn(
          'min-w-0 w-full shrink-0 xl:w-[var(--abc-inspector-w)]',
          stickyInspector && 'xl:sticky xl:top-20'
        )}
      >
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
