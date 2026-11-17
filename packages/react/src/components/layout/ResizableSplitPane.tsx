import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  GripHorizontal,
  GripVertical,
} from 'lucide-react'
import * as React from 'react'
import { useAbcMotion } from '../../hooks/useAbcDefaults'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'

export interface ResizableSplitPaneProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 分栏方向：horizontal 为左右分栏，vertical 为上下分栏（默认 horizontal） */
  direction?: 'horizontal' | 'vertical'
  /** 非受控初始尺寸（px，默认 260） */
  defaultSize?: number
  /** 受控尺寸（px） */
  size?: number
  /** 尺寸变更回调 */
  onSizeChange?: (next: number) => void
  /** 最小尺寸限制（px，默认 180） */
  minSize?: number
  /** 最大尺寸限制（px，默认 560） */
  maxSize?: number
  /** 是否允许折叠主面板（默认 true） */
  collapsible?: boolean
  /** 受控折叠状态 */
  collapsed?: boolean
  /** 非受控初始折叠状态 */
  defaultCollapsed?: boolean
  /** 折叠状态变更回调 */
  onCollapsedChange?: (collapsed: boolean) => void
  /** 本地持久化记忆尺寸的存储键（自动捕获隐私模式等存储异常） */
  storageKey?: string
  /** 第一分栏内容（左侧或上方） */
  firstPane: React.ReactNode
  /** 第二分栏内容（右侧或下方，自动占满剩余空间） */
  secondPane: React.ReactNode
  /** 折叠按钮无障碍文案 */
  collapseLabel?: string
  /** 展开按钮无障碍文案 */
  expandLabel?: string
  /** 第一分栏容器附加类名 */
  firstPaneClassName?: string
  /** 第二分栏容器附加类名 */
  secondPaneClassName?: string
}

const KEYBOARD_STEP_PX = 16
const STORAGE_PREFIX = 'abc_resizable_split_size_'

function clampPaneSize(value: number, min: number, max: number): number {
  const safeMax = Math.max(min, max)
  return Math.min(safeMax, Math.max(min, value))
}

function readStoredPaneSize(storageKey: string | undefined, min: number, max: number): number | null {
  if (!storageKey || typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${storageKey}`)
    if (raw === null) return null
    const parsed = Number(raw)
    return Number.isFinite(parsed) ? clampPaneSize(parsed, min, max) : null
  } catch {
    // 隐私模式或受限存储上下文中静默回退默认值
    return null
  }
}

function writeStoredPaneSize(storageKey: string | undefined, nextSize: number): void {
  if (!storageKey || typeof window === 'undefined') return
  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}${storageKey}`, String(Math.round(nextSize)))
  } catch {
    // 忽略配额超限或禁用存储导致的异常，避免阻断拖拽交互
  }
}

/**
 * 可拖拽调节与折叠的双栏分割容器 (ResizableSplitPane)
 *
 * 支持水平/垂直方向拖拽、键盘方向键与 Home/End 调节、双击复位、
 * localStorage 尺寸记忆，并在窄屏（<768px）水平模式下自动退化为上下堆叠以保障可读性。
 */
export const ResizableSplitPane = React.forwardRef<HTMLDivElement, ResizableSplitPaneProps>(
  (
    {
      direction = 'horizontal',
      defaultSize = 260,
      size,
      onSizeChange,
      minSize = 180,
      maxSize = 560,
      collapsible = true,
      collapsed,
      defaultCollapsed = false,
      onCollapsedChange,
      storageKey,
      firstPane,
      secondPane,
      collapseLabel = '折叠面板',
      expandLabel = '展开面板',
      className,
      firstPaneClassName,
      secondPaneClassName,
      ...rest
    },
    ref
  ) => {
    const resolvedMotion = useAbcMotion()
    const safeMax = Math.max(minSize, maxSize)
    const clampedDefault = clampPaneSize(defaultSize, minSize, safeMax)

    // 仅在首次挂载读取本地存储，避免每次重渲染触发同步 I/O
    const [initialSize] = React.useState<number>(
      () => readStoredPaneSize(storageKey, minSize, safeMax) ?? clampedDefault
    )
    const [isDragging, setIsDragging] = React.useState(false)
    const dragCleanupRef = React.useRef<(() => void) | null>(null)

    const [currentSize, setCurrentSize] = useControllableState<number>({
      value: size !== undefined ? clampPaneSize(size, minSize, safeMax) : undefined,
      defaultValue: initialSize,
      onChange: (next) => {
        const clamped = clampPaneSize(next, minSize, safeMax)
        writeStoredPaneSize(storageKey, clamped)
        onSizeChange?.(clamped)
      },
    })

    const [rawCollapsed, setRawCollapsed] = useControllableState<boolean>({
      value: collapsed,
      defaultValue: defaultCollapsed,
      onChange: onCollapsedChange,
    })

    // 若未开启折叠能力且未受控强制折叠，则始终保持展开
    const isCollapsed = collapsible || collapsed !== undefined ? rawCollapsed : false
    const clampedSize = clampPaneSize(currentSize, minSize, safeMax)
    const isHorizontal = direction === 'horizontal'

    React.useEffect(() => {
      return () => {
        dragCleanupRef.current?.()
      }
    }, [])

    const handleSeparatorMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.button !== 0 || isCollapsed) return
      e.preventDefault()
      dragCleanupRef.current?.()

      const startCoord = isHorizontal ? e.clientX : e.clientY
      const startSize = clampedSize
      setIsDragging(true)

      const onMouseMove = (moveEvent: MouseEvent) => {
        const currentCoord = isHorizontal ? moveEvent.clientX : moveEvent.clientY
        const delta = currentCoord - startCoord
        setCurrentSize(clampPaneSize(startSize + delta, minSize, safeMax))
      }

      const cleanup = () => {
        setIsDragging(false)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', cleanup)
        dragCleanupRef.current = null
      }

      dragCleanupRef.current = cleanup
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', cleanup)
    }

    const handleSeparatorKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (isCollapsed) return
      const decKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp'
      const incKey = isHorizontal ? 'ArrowRight' : 'ArrowDown'

      if (e.key === decKey) {
        e.preventDefault()
        setCurrentSize(clampPaneSize(clampedSize - KEYBOARD_STEP_PX, minSize, safeMax))
      } else if (e.key === incKey) {
        e.preventDefault()
        setCurrentSize(clampPaneSize(clampedSize + KEYBOARD_STEP_PX, minSize, safeMax))
      } else if (e.key === 'Home') {
        e.preventDefault()
        setCurrentSize(minSize)
      } else if (e.key === 'End') {
        e.preventDefault()
        setCurrentSize(safeMax)
      }
    }

    const handleSeparatorDoubleClick = () => {
      if (isCollapsed) return
      setCurrentSize(clampedDefault)
    }

    const firstPaneStyle: React.CSSProperties | undefined = isCollapsed
      ? { display: 'none' }
      : isHorizontal
        ? ({ '--abc-split-pane-size': `${clampedSize}px` } as React.CSSProperties)
        : ({
            '--abc-split-pane-size': `${clampedSize}px`,
            height: `${clampedSize}px`,
          } as React.CSSProperties)

    const ToggleIcon = isHorizontal
      ? isCollapsed
        ? ChevronRight
        : ChevronLeft
      : isCollapsed
        ? ChevronDown
        : ChevronUp

    return (
      <div
        ref={ref}
        data-slot="resizable-split-pane"
        data-direction={direction}
        data-collapsed={isCollapsed ? 'true' : 'false'}
        data-dragging={isDragging ? 'true' : 'false'}
        data-motion={resolvedMotion}
        className={cn(
          'flex min-h-0 min-w-0',
          isHorizontal ? 'flex-col md:flex-row' : 'flex-col',
          isDragging && 'select-none',
          className
        )}
        {...rest}
      >
        {/* 保持第一分栏在折叠时继续挂载 DOM（以 display:none 隐藏），避免反复折叠或拖拽调节尺寸时丢失滚动位置与内部检索状态 */}
        <div
          data-slot="resizable-split-first-pane"
          data-size={Math.round(clampedSize)}
          aria-hidden={isCollapsed ? true : undefined}
          style={firstPaneStyle}
          className={cn(
            'min-h-0 min-w-0 shrink-0 overflow-auto',
            !isDragging && resolvedMotion !== 'none' && 'transition-[width,height] duration-150',
            isCollapsed
              ? 'hidden'
              : isHorizontal
                ? 'w-full md:w-[var(--abc-split-pane-size)]'
                : 'w-full h-[var(--abc-split-pane-size)]',
            firstPaneClassName
          )}
        >
          {firstPane}
        </div>

        {/* 分隔条与折叠按钮分离为兄弟节点，避免在可聚焦 role="separator" 内嵌套交互按钮引发无障碍冲突 */}
        <div
          data-slot="resizable-split-gutter"
          className={cn(
            'relative flex shrink-0 items-center justify-center',
            isHorizontal
              ? isCollapsed
                ? 'my-1 h-7 w-full md:my-0 md:h-auto md:w-5'
                : 'my-2 h-px w-full bg-[var(--abc-border)] md:my-0 md:h-auto md:w-3 md:bg-transparent'
              : isCollapsed
                ? 'my-1 h-6 w-full'
                : 'h-3 w-full'
          )}
        >
          {!isCollapsed && (
            <div
              role="separator"
              tabIndex={0}
              aria-orientation={isHorizontal ? 'vertical' : 'horizontal'}
              aria-label={isHorizontal ? '拖拽或使用左右方向键调节面板宽度' : '拖拽或使用上下方向键调节面板高度'}
              aria-valuemin={minSize}
              aria-valuemax={safeMax}
              aria-valuenow={Math.round(clampedSize)}
              onMouseDown={handleSeparatorMouseDown}
              onKeyDown={handleSeparatorKeyDown}
              onDoubleClick={handleSeparatorDoubleClick}
              className={cn(
                'group items-center justify-center rounded-full outline-none select-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                isHorizontal
                  ? 'hidden h-full w-full cursor-col-resize md:flex'
                  : 'flex h-full w-full cursor-row-resize'
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'rounded-full bg-[var(--abc-border)] transition-colors group-hover:bg-[var(--abc-primary)] group-focus-visible:bg-[var(--abc-primary)]',
                  isHorizontal ? 'h-full w-px group-hover:w-0.5' : 'h-px w-full group-hover:h-0.5'
                )}
              />
              {isHorizontal ? (
                <GripVertical
                  aria-hidden="true"
                  className="pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                />
              ) : (
                <GripHorizontal
                  aria-hidden="true"
                  className="pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                />
              )}
            </div>
          )}

          {collapsible && (
            <button
              type="button"
              aria-label={isCollapsed ? expandLabel : collapseLabel}
              aria-expanded={!isCollapsed}
              title={isCollapsed ? expandLabel : collapseLabel}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => setRawCollapsed((prev) => !prev)}
              className={cn(
                'z-10 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] shadow-2xs transition-colors cursor-pointer',
                'hover:border-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)]',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                !isCollapsed && 'md:absolute'
              )}
            >
              <ToggleIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
        </div>

        <div
          data-slot="resizable-split-second-pane"
          className={cn('min-h-0 min-w-0 flex-1 overflow-auto', secondPaneClassName)}
        >
          {secondPane}
        </div>
      </div>
    )
  }
)

ResizableSplitPane.displayName = 'ResizableSplitPane'

export default ResizableSplitPane
