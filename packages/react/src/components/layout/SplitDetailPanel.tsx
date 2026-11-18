import {
  ChevronDown,
  ChevronUp,
  GripVertical,
  Loader2,
  Maximize2,
  Minimize2,
  X,
} from 'lucide-react'
import * as React from 'react'
import { useAbcMotion } from '../../hooks/useAbcDefaults'
import { cn } from '../../utils/cn'

export interface SplitDetailLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 是否在右侧挤出详情容器；关闭时左侧主区域占满 100% 宽度 */
  open: boolean
  /** 沉浸全宽模式：开启且 open=true 时隐藏左侧主内容，详情面板占满 100% 宽度 */
  expanded?: boolean
  /** 右侧挤出的详情容器节点 */
  panel?: React.ReactNode
  /** 桌面端右侧详情容器初始宽度（数字按 px 处理，默认 480） */
  panelWidth?: number | string
  /** 拖拽调节的最小宽度（px，默认 360） */
  minPanelWidth?: number
  /** 拖拽调节的最大宽度（px，默认 760） */
  maxPanelWidth?: number
  /** 是否允许通过左边缘拖拽及键盘方向键调整详情宽度（默认 true） */
  resizable?: boolean
  /** 本地持久化记忆调节宽度的存储键 */
  storageKey?: string
  /** 桌面端右侧详情面板是否粘性随滚（默认 true） */
  stickyPanel?: boolean
  /** 左右分栏间距（默认 'md'） */
  gap?: 'sm' | 'md' | 'lg'
  /** 左侧主容器附加类名 */
  masterClassName?: string
  /** 右侧详情容器外层包装附加类名 */
  asideClassName?: string
}

const GAP_CLASSES: Record<NonNullable<SplitDetailLayoutProps['gap']>, string> = {
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
}

const RESIZER_WIDTH_CLASSES: Record<NonNullable<SplitDetailLayoutProps['gap']>, string> = {
  sm: 'lg:w-4',
  md: 'lg:w-5',
  lg: 'lg:w-6',
}

function clampWidth(val: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, val))
}

/**
 * 主从内联挤压分栏布局 (SplitDetailLayout)
 *
 * 用于替代传统带全屏暗化遮罩的 Drawer，在表格或列表右侧挤出非阻塞式详情容器，
 * 使操作员可直接单击左侧不同行即时切换右侧详情，关闭后自动释放全部横向宽度。
 */
export const SplitDetailLayout = React.forwardRef<HTMLDivElement, SplitDetailLayoutProps>(
  (
    {
      open,
      expanded = false,
      panel,
      panelWidth = 480,
      minPanelWidth = 360,
      maxPanelWidth = 760,
      resizable = true,
      storageKey,
      stickyPanel = true,
      gap = 'md',
      children,
      className,
      masterClassName,
      asideClassName,
      ...props
    },
    ref
  ) => {
    const resolvedMotion = useAbcMotion()
    const [isDragging, setIsDragging] = React.useState(false)
    const [customWidth, setCustomWidth] = React.useState<number | null>(() => {
      if (!storageKey || typeof window === 'undefined') return null
      try {
        const saved = Number(window.localStorage.getItem(`abc_split_w_${storageKey}`))
        return Number.isFinite(saved) ? clampWidth(saved, minPanelWidth, maxPanelWidth) : null
      } catch {
        return null
      }
    })

    const persistWidth = React.useCallback(
      (nextPx: number) => {
        if (!storageKey || typeof window === 'undefined') return
        try {
          window.localStorage.setItem(`abc_split_w_${storageKey}`, String(Math.round(nextPx)))
        } catch {
          // 忽略浏览器隐私模式或配额导致的存储异常
        }
      },
      [storageKey]
    )

    const clearSavedWidth = React.useCallback(() => {
      if (!storageKey || typeof window === 'undefined') return
      try {
        window.localStorage.removeItem(`abc_split_w_${storageKey}`)
      } catch {
        // 忽略存储移除异常
      }
    }, [storageKey])

    const effectiveWidthCss = React.useMemo(() => {
      if (customWidth !== null) return `${clampWidth(customWidth, minPanelWidth, maxPanelWidth)}px`
      if (typeof panelWidth === 'number') return `${clampWidth(panelWidth, minPanelWidth, maxPanelWidth)}px`
      return panelWidth
    }, [customWidth, panelWidth, minPanelWidth, maxPanelWidth])

    const currentNumericWidth =
      customWidth ??
      (typeof panelWidth === 'number' ? clampWidth(panelWidth, minPanelWidth, maxPanelWidth) : 480)

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
      const startWidth = currentNumericWidth
      const prevCursor = document.body.style.cursor
      const prevUserSelect = document.body.style.userSelect
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
      setIsDragging(true)

      const onMove = (ev: MouseEvent) => {
        const deltaX = startX - ev.clientX
        const nextWidth = clampWidth(startWidth + deltaX, minPanelWidth, maxPanelWidth)
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
      const nextWidth = clampWidth(currentNumericWidth + delta, minPanelWidth, maxPanelWidth)
      setCustomWidth(nextWidth)
      persistWidth(nextWidth)
    }

    const handleResizeDoubleClick = () => {
      setCustomWidth(null)
      clearSavedWidth()
    }

    const showMaster = !(open && expanded)
    const showAside = open && Boolean(panel)
    const showResizer = showMaster && showAside && resizable && !expanded

    return (
      <div
        ref={ref}
        data-slot="split-detail-layout"
        data-open={open ? 'true' : 'false'}
        data-expanded={expanded ? 'true' : 'false'}
        data-dragging={isDragging ? 'true' : 'false'}
        className={cn(
          'flex flex-col lg:flex-row lg:items-start',
          GAP_CLASSES[gap],
          showResizer && 'lg:gap-0',
          className
        )}
        {...props}
      >
        {showMaster && (
          <div
            data-slot="split-detail-master"
            className={cn(
              'min-w-0 flex-1',
              !isDragging && resolvedMotion !== 'none' && 'transition-[flex,width] duration-200',
              masterClassName
            )}
          >
            {children}
          </div>
        )}

        {showResizer && (
          <div
            role="separator"
            tabIndex={0}
            data-slot="split-detail-resizer"
            aria-orientation="vertical"
            aria-label="拖拽或使用左右方向键调节详情面板宽度"
            aria-valuemin={minPanelWidth}
            aria-valuemax={maxPanelWidth}
            aria-valuenow={Math.round(currentNumericWidth)}
            title="左右拖拽调节宽度占比（双击恢复默认宽度）"
            onMouseDown={handleResizeStart}
            onKeyDown={handleResizeKeyDown}
            onDoubleClick={handleResizeDoubleClick}
            className={cn(
              'group relative z-20 hidden shrink-0 cursor-col-resize select-none flex-col items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] lg:flex lg:self-stretch',
              RESIZER_WIDTH_CLASSES[gap]
            )}
          >
            {/* 常驻纵向分隔线：平时以边框色清晰提示分栏边界，悬停或拖拽时高亮为主品牌色 */}
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
            {/* 常驻胶囊拖拽手柄按钮：随视口粘性居中，让用户一眼感知可左右拖拽调整占比 */}
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

        {showAside && (
          <div
            data-slot="split-detail-aside"
            data-motion={resolvedMotion}
            style={
              !expanded
                ? ({ '--abc-split-panel-w': effectiveWidthCss } as React.CSSProperties)
                : undefined
            }
            className={cn(
              'relative min-w-0 shrink-0',
              expanded ? 'w-full flex-1' : 'w-full lg:w-[var(--abc-split-panel-w)]',
              stickyPanel && !expanded && 'lg:sticky lg:top-4',
              resolvedMotion !== 'none' && 'abc-animate-fade-in',
              asideClassName
            )}
          >
            {panel}
          </div>
        )}
      </div>
    )
  }
)
SplitDetailLayout.displayName = 'SplitDetailLayout'

export interface SplitDetailNavigation {
  /** 当前条目位置（1-based，若无匹配则 <= 0） */
  current: number
  /** 总条目数 */
  total: number
  onPrev: () => void
  onNext: () => void
  prevLabel?: string
  nextLabel?: string
}

export interface SplitDetailPanelProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  'aria-label'?: string
  /** 面板标题 */
  title?: React.ReactNode
  /** 标题下方副标题 */
  subtitle?: React.ReactNode
  /** 标题右侧状态徽标 */
  badge?: React.ReactNode
  /** 可选行上下切换器（上一条 / 下一条 与位置指示） */
  navigation?: SplitDetailNavigation
  /** 是否支持沉浸展开切换（与 SplitDetailLayout expanded 状态配合） */
  expandable?: boolean
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  expandLabel?: string
  restoreLabel?: string
  /** 顶部扩展操作区（如“清除选择”或快捷操作） */
  headerActions?: React.ReactNode
  /** 是否渲染右上角关闭按钮（默认 true） */
  closable?: boolean
  /** 关闭回调 */
  onClose?: () => void
  closeLabel?: string
  /** 加载中状态 */
  loading?: boolean
  loadingText?: React.ReactNode
  /** 底部吸底操作栏 */
  footer?: React.ReactNode
  bodyClassName?: string
  headerClassName?: string
}

/**
 * 右侧内联挤压详情容器 (SplitDetailPanel)
 *
 * 采用单层紧凑顶栏与独立滚动正文设计，内置上下条目切换、沉浸全宽切换与一键关闭收起。
 */
export const SplitDetailPanel = React.forwardRef<HTMLElement, SplitDetailPanelProps>(
  (
    {
      title,
      subtitle,
      badge,
      navigation,
      expandable = false,
      expanded = false,
      onExpandedChange,
      expandLabel = '沉浸展开',
      restoreLabel = '还原分栏',
      headerActions,
      closable = true,
      onClose,
      closeLabel = '关闭详情面板',
      loading = false,
      loadingText = '正在加载详情…',
      footer,
      children,
      className,
      bodyClassName,
      headerClassName,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const hasHeader = Boolean(
      title ||
        subtitle ||
        badge ||
        navigation ||
        expandable ||
        headerActions ||
        (closable && onClose)
    )

    return (
      <aside
        ref={ref}
        data-slot="split-detail-panel"
        aria-label={ariaLabel ?? (typeof title === 'string' ? title : '详情面板')}
        className={cn(
          'flex flex-col overflow-hidden rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
          className
        )}
        {...props}
      >
        {hasHeader && (
          <SplitDetailHeader className={headerClassName}>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {typeof title === 'string' ? (
                  <SplitDetailTitle>{title}</SplitDetailTitle>
                ) : (
                  title
                )}
                {badge}
              </div>
              {subtitle && (
                <div className="mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]">{subtitle}</div>
              )}
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-1">
              {navigation && navigation.total > 0 && (
                <div className="mr-0.5 inline-flex items-center gap-0.5 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-1 py-0.5 text-xs text-[var(--abc-fg-muted)]">
                  <button
                    type="button"
                    onClick={navigation.onPrev}
                    title={navigation.prevLabel ?? '上一条'}
                    aria-label={navigation.prevLabel ?? '上一条'}
                    className="inline-flex h-5 w-5 items-center justify-center rounded text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-surface)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={navigation.onNext}
                    title={navigation.nextLabel ?? '下一条'}
                    aria-label={navigation.nextLabel ?? '下一条'}
                    className="inline-flex h-5 w-5 items-center justify-center rounded text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-surface)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <span className="px-1 font-mono text-[11px] tabular-nums text-[var(--abc-fg-secondary)]">
                    {navigation.current > 0 ? navigation.current : '—'} / {navigation.total}
                  </span>
                </div>
              )}

              {expandable && onExpandedChange && (
                <button
                  type="button"
                  onClick={() => onExpandedChange(!expanded)}
                  title={expanded ? restoreLabel : expandLabel}
                  aria-label={expanded ? restoreLabel : expandLabel}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]"
                >
                  {expanded ? (
                    <Minimize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </button>
              )}

              {headerActions}

              {closable && onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  title={closeLabel}
                  aria-label={closeLabel}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </SplitDetailHeader>
        )}

        <SplitDetailBody
          className={cn(!expanded && 'lg:max-h-[calc(100dvh-7rem)]', bodyClassName)}
        >
          {loading ? (
            <div className="flex min-h-[200px] flex-col items-center justify-center gap-2.5 py-8 text-center text-xs text-[var(--abc-fg-muted)]">
              <Loader2 className="h-5 w-5 animate-spin text-[var(--abc-primary)]" aria-hidden="true" />
              <span>{loadingText}</span>
            </div>
          ) : (
            children
          )}
        </SplitDetailBody>

        {footer && <SplitDetailFooter>{footer}</SplitDetailFooter>}
      </aside>
    )
  }
)
SplitDetailPanel.displayName = 'SplitDetailPanel'

export function SplitDetailHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      data-slot="split-detail-header"
      className={cn(
        'flex shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/35 px-4 py-3',
        className
      )}
      {...props}
    />
  )
}

export function SplitDetailTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="split-detail-title"
      className={cn('text-sm font-semibold tracking-tight text-[var(--abc-fg)]', className)}
      {...props}
    />
  )
}

export function SplitDetailBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="split-detail-body"
      className={cn('flex-1 space-y-4 overflow-y-auto overscroll-contain p-5 text-sm', className)}
      {...props}
    />
  )
}

export function SplitDetailFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      data-slot="split-detail-footer"
      className={cn(
        'flex shrink-0 flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/30 px-4 py-3',
        className
      )}
      {...props}
    />
  )
}

export default SplitDetailPanel
