import * as React from 'react'
import { ChevronDown, ChevronUp, GripHorizontal, Maximize2, Minimize2 } from 'lucide-react'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'
import { SegmentedControl, type SegmentedOption } from '../navigation/SegmentedControl'

export interface BottomDockTab<T extends string = string> {
  value: T
  label: React.ReactNode
  icon?: React.ReactNode
  badge?: React.ReactNode
  disabled?: boolean
  ariaLabel?: string
  testId?: string
}

export interface BottomDockPanelProps<T extends string = string> {
  /** 是否展开（受控） */
  open?: boolean
  /** 默认展开态（非受控，默认 true） */
  defaultOpen?: boolean
  /** 展开/折叠切换回调 */
  onOpenChange?: (open: boolean) => void
  /** 展开时的默认高度（px，默认 320） */
  defaultHeight?: number
  /** 最小可拖高度（px，默认 160） */
  minHeight?: number
  /** 最大可拖高度（px，默认 680） */
  maxHeight?: number
  /** 高视图（放大）高度（px，默认 540） */
  tallHeight?: number
  /** 受控高度（px） */
  height?: number
  /** 高度变化回调 */
  onHeightChange?: (nextHeight: number) => void
  /** 本地持久化高度的存储键 */
  storageKey?: string
  /** 头部左侧标题区（图标 + 标题） */
  title?: React.ReactNode
  /** 头部标题旁的运行状态徽标/指标插槽 */
  statusSlot?: React.ReactNode
  /** 内置选项卡配置（可选） */
  tabs?: ReadonlyArray<BottomDockTab<T>>
  /** 当前选中选项卡 */
  activeTab?: T
  /** 选项卡切换回调 */
  onTabChange?: (tab: T) => void
  /** 头部中部自定义扩展插槽 */
  headerCenter?: React.ReactNode
  /** 头部右侧自定义操作插槽（置于高视图/收起按钮左侧） */
  headerExtra?: React.ReactNode
  /** 是否显示高视图切换按钮（默认 true） */
  allowTallToggle?: boolean
  /** 是否显示折叠/展开按钮（默认 true） */
  collapsible?: boolean
  /** 区域无障碍名称（挂接在 <section aria-label>） */
  ariaLabel?: string
  /** 拖拽手柄无障碍文案 */
  resizeAriaLabel?: string
  /** 展开按钮文案 */
  expandLabel?: string
  /** 收起按钮文案 */
  collapseLabel?: string
  /** 高视图按钮文案 */
  tallLabel?: string
  /** 标准高度按钮文案 */
  standardHeightLabel?: string
  /** 面板主体内容 */
  children: React.ReactNode
  /** 折叠时是否保活子树 DOM（以 hidden 属性隐藏，适用于含实时查询/视频流的子面板，默认 false） */
  keepMounted?: boolean
  /** 额外强制隐藏主体区（例如尚未加载数据但停靠条需常驻时） */
  bodyHidden?: boolean
  /** 自定义主体容器 ID（供外部按钮 aria-controls 关联） */
  bodyId?: string
  /** 内置标签组无障碍名称 */
  tabsAriaLabel?: string
  /** 头部与主体之间的可选固定横幅插槽（如告警或加载条） */
  banner?: React.ReactNode
  /** 根容器类名 */
  className?: string
  /** 主体滚动区类名 */
  bodyClassName?: string
}

const STORAGE_PREFIX = 'abc_bottom_dock_h_'
const KEYBOARD_STEP_PX = 24

function clampHeight(value: number, min: number, max: number): number {
  const safeMax = Math.max(min, max)
  return Math.min(safeMax, Math.max(min, Math.round(value)))
}

function readStoredHeight(storageKey: string | undefined, min: number, max: number): number | null {
  if (!storageKey || typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${storageKey}`)
    if (raw === null) return null
    const parsed = Number(raw)
    return Number.isFinite(parsed) ? clampHeight(parsed, min, max) : null
  } catch {
    return null
  }
}

function writeStoredHeight(storageKey: string | undefined, next: number): void {
  if (!storageKey || typeof window === 'undefined') return
  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}${storageKey}`, String(Math.round(next)))
  } catch {
    // 忽略隐私模式或配额异常，确保拖拽交互不中断
  }
}

/**
 * DevTools / IDE 风格底部可拖拽调高停靠坞面板 (BottomDockPanel)
 *
 * 为什么抽离为通用布局轮子：
 * 工作台/调试器/日志控制台普遍需要底部吸底面板，带顶部拖拽调高、键盘无障碍高度调节、
 * 标准/高视图快速切换、本地高度记忆与单行折叠态；沉淀至 @abc-design/react 后，
 * 业务页面只需专注渲染头部状态与标签页主体，彻底消除手写 mousemove 监听与主题割裂。
 */
export function BottomDockPanel<T extends string = string>({
  open: controlledOpen,
  defaultOpen = true,
  onOpenChange,
  defaultHeight = 320,
  minHeight = 160,
  maxHeight = 680,
  tallHeight = 540,
  height: controlledHeight,
  onHeightChange,
  storageKey,
  title,
  statusSlot,
  tabs,
  activeTab,
  onTabChange,
  headerCenter,
  headerExtra,
  allowTallToggle = true,
  collapsible = true,
  ariaLabel = '底部停靠工作区',
  resizeAriaLabel = '拖拽调整底部面板高度',
  expandLabel = '展开面板',
  collapseLabel = '收起面板',
  tallLabel = '高视图',
  standardHeightLabel = '标准高度',
  keepMounted = false,
  bodyHidden = false,
  bodyId: customBodyId,
  tabsAriaLabel,
  banner,
  children,
  className,
  bodyClassName,
}: BottomDockPanelProps<T>) {
  const autoBodyId = React.useId()
  const bodyId = customBodyId ?? autoBodyId
  const safeMax = Math.max(minHeight, maxHeight)
  const clampedDefault = clampHeight(defaultHeight, minHeight, safeMax)
  const clampedTall = clampHeight(tallHeight, minHeight, safeMax)

  const [isOpen, setIsOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  })

  const [initialHeight] = React.useState<number>(
    () => readStoredHeight(storageKey, minHeight, safeMax) ?? clampedDefault
  )

  const [panelHeight, setPanelHeight] = useControllableState<number>({
    value: controlledHeight,
    defaultValue: initialHeight,
    onChange: (next) => {
      const clamped = clampHeight(next, minHeight, safeMax)
      writeStoredHeight(storageKey, clamped)
      onHeightChange?.(clamped)
    },
  })

  const [isDragging, setIsDragging] = React.useState(false)
  const lastStandardHeightRef = React.useRef<number>(clampedDefault)
  const dragCleanupRef = React.useRef<(() => void) | null>(null)
  const isTall = panelHeight >= clampedTall - 16
  const isExpandedBody = isOpen && !bodyHidden

  React.useEffect(() => {
    return () => {
      dragCleanupRef.current?.()
      dragCleanupRef.current = null
    }
  }, [])

  const updateHeight = React.useCallback(
    (next: number) => {
      setPanelHeight(clampHeight(next, minHeight, safeMax))
    },
    [minHeight, safeMax, setPanelHeight]
  )

  const handleToggleTall = React.useCallback(() => {
    if (!isOpen) {
      setIsOpen(true)
      updateHeight(clampedTall)
      return
    }
    if (isTall) {
      updateHeight(lastStandardHeightRef.current)
    } else {
      lastStandardHeightRef.current = panelHeight
      updateHeight(clampedTall)
    }
  }, [clampedTall, isOpen, isTall, panelHeight, setIsOpen, updateHeight])

  const startResizeDrag = React.useCallback(
    (
      startY: number,
      targetEl: HTMLDivElement | null,
      pointerId?: number
    ) => {
      // 防止 pointerdown + mousedown 双重触发重复挂载监听
      if (dragCleanupRef.current) return
      const startHeight = panelHeight
      setIsDragging(true)

      const prevCursor = typeof document !== 'undefined' ? document.body.style.cursor : ''
      const prevUserSelect = typeof document !== 'undefined' ? document.body.style.userSelect : ''
      if (typeof document !== 'undefined') {
        document.body.style.cursor = 'row-resize'
        document.body.style.userSelect = 'none'
      }

      if (pointerId !== undefined && targetEl && typeof targetEl.setPointerCapture === 'function') {
        try {
          targetEl.setPointerCapture(pointerId)
        } catch {
          // 忽略测试环境或非活动指针的 capture 异常
        }
      }

      const handleMove = (clientY: number) => {
        const delta = startY - clientY
        const viewportCap =
          typeof window !== 'undefined'
            ? Math.max(minHeight, Math.min(safeMax, window.innerHeight - 120))
            : safeMax
        updateHeight(Math.min(viewportCap, startHeight + delta))
      }

      const onPointerMove = (moveEvent: PointerEvent) => handleMove(moveEvent.clientY)
      const onMouseMove = (moveEvent: MouseEvent) => handleMove(moveEvent.clientY)

      const cleanup = () => {
        setIsDragging(false)
        if (typeof document !== 'undefined') {
          document.body.style.cursor = prevCursor
          document.body.style.userSelect = prevUserSelect
        }
        if (pointerId !== undefined && targetEl && typeof targetEl.releasePointerCapture === 'function') {
          try {
            if (targetEl.hasPointerCapture?.(pointerId)) {
              targetEl.releasePointerCapture(pointerId)
            }
          } catch {
            // 忽略已释放指针异常
          }
        }
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('pointerup', cleanup)
        window.removeEventListener('pointercancel', cleanup)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', cleanup)
        window.removeEventListener('blur', cleanup)
        dragCleanupRef.current = null
      }

      dragCleanupRef.current = cleanup
      window.addEventListener('pointermove', onPointerMove)
      window.addEventListener('pointerup', cleanup)
      window.addEventListener('pointercancel', cleanup)
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', cleanup)
      window.addEventListener('blur', cleanup)
    },
    [minHeight, panelHeight, safeMax, updateHeight]
  )

  const handleResizePointerDown = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.preventDefault()
      startResizeDrag(event.clientY, event.currentTarget, event.pointerId)
    },
    [startResizeDrag]
  )

  const handleResizeMouseDown = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault()
      startResizeDrag(event.clientY, event.currentTarget)
    },
    [startResizeDrag]
  )

  const handleResizeKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        updateHeight(panelHeight + KEYBOARD_STEP_PX)
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        updateHeight(panelHeight - KEYBOARD_STEP_PX)
      } else if (event.key === 'Home') {
        event.preventDefault()
        updateHeight(minHeight)
      } else if (event.key === 'End') {
        event.preventDefault()
        updateHeight(safeMax)
      } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        updateHeight(clampedDefault)
      }
    },
    [clampedDefault, minHeight, panelHeight, safeMax, updateHeight]
  )

  const segmentedOptions = React.useMemo<SegmentedOption<T>[] | null>(() => {
    if (!tabs || tabs.length === 0) return null
    return tabs.map((tab) => ({
      value: tab.value,
      label: tab.label,
      icon: tab.icon,
      badge: tab.badge,
      disabled: tab.disabled,
      ariaLabel: tab.ariaLabel,
      testId: tab.testId,
    }))
  }, [tabs])

  return (
    <section
      data-slot="bottom-dock-panel"
      data-open={isOpen ? 'true' : 'false'}
      aria-label={ariaLabel}
      style={isExpandedBody ? { height: `${panelHeight}px` } : undefined}
      className={cn(
        'relative flex shrink-0 flex-col border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[0_-6px_20px_-8px_rgba(15,23,42,0.12)]',
        !isDragging && 'transition-[height] duration-150 ease-out',
        className
      )}
    >
      {/* 顶部拖拽调高条（仅主体展开可见时激活） */}
      {isExpandedBody && (
        <div
          role="separator"
          tabIndex={0}
          aria-orientation="horizontal"
          aria-label={resizeAriaLabel}
          aria-controls={bodyId}
          aria-valuemin={minHeight}
          aria-valuemax={safeMax}
          aria-valuenow={panelHeight}
          onPointerDown={handleResizePointerDown}
          onMouseDown={handleResizeMouseDown}
          onDoubleClick={() => updateHeight(clampedDefault)}
          onKeyDown={handleResizeKeyDown}
          className={cn(
            'group flex h-2 w-full shrink-0 cursor-row-resize touch-none items-center justify-center border-b border-[var(--abc-border)]/70 bg-[var(--abc-bg-muted)]/60 transition-colors hover:bg-[var(--abc-primary-soft)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)]',
            isDragging && 'bg-[var(--abc-primary-soft)]'
          )}
        >
          <GripHorizontal
            className="h-3 w-4 text-[var(--abc-fg-muted)] transition-colors group-hover:text-[var(--abc-primary)]"
            aria-hidden="true"
          />
        </div>
      )}

      {/* 吸顶标题与控制栏 */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-3 py-1.5">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          {title && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)]">
              {title}
            </div>
          )}
          {statusSlot}
          {segmentedOptions && activeTab !== undefined && (
            <SegmentedControl
              size="xs"
              value={activeTab}
              aria-label={tabsAriaLabel}
              onChange={(next) => {
                if (!isOpen) setIsOpen(true)
                onTabChange?.(next)
              }}
              options={segmentedOptions}
            />
          )}
          {headerCenter}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {headerExtra}
          {allowTallToggle && isOpen && (
            <button
              type="button"
              data-abc-no-press-scale="true"
              onClick={handleToggleTall}
              title={isTall ? standardHeightLabel : tallLabel}
              aria-label={isTall ? standardHeightLabel : tallLabel}
              className="inline-flex h-6 items-center gap-1 rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[11px] font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              {isTall ? (
                <Minimize2 className="h-3 w-3" aria-hidden="true" />
              ) : (
                <Maximize2 className="h-3 w-3" aria-hidden="true" />
              )}
              <span className="hidden sm:inline">{isTall ? standardHeightLabel : tallLabel}</span>
            </button>
          )}
          {collapsible && (
            <button
              type="button"
              data-abc-no-press-scale="true"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls={bodyId}
              className="inline-flex h-6 items-center gap-1 rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[11px] font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              {isOpen ? (
                <>
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                  <span>{collapseLabel}</span>
                </>
              ) : (
                <>
                  <ChevronUp className="h-3 w-3" aria-hidden="true" />
                  <span>{expandLabel}</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* 可选固定通知横幅 + 可滚动内容主体（keepMounted 时以 hidden 保活子树） */}
      {(isOpen || keepMounted) && (
        <>
          {isOpen && banner}
          <div
            id={bodyId}
            hidden={!isOpen || bodyHidden}
            className={cn('min-h-0 flex-1 overflow-auto', bodyClassName)}
          >
            {children}
          </div>
        </>
      )}
    </section>
  )
}

export default BottomDockPanel
