import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { AlertCircle, AlertTriangle, CheckCircle2, Info, Loader2, X } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks'
import type { AbcToastAdapter } from '../../provider/types'
import { cn } from '../../utils/cn'

export type ToastTone = 'success' | 'error' | 'warning' | 'info' | 'loading' | 'danger'

export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center'

export interface ToastOptions {
  /** 提示类型（success | error | warning | info | loading | danger） */
  tone?: ToastTone
  /** 标题文本或自定义节点 */
  title?: React.ReactNode
  /** 正文内容 */
  message?: React.ReactNode
  /** message 语义别名 */
  content?: React.ReactNode
  /** 辅助描述信息 */
  description?: React.ReactNode
  /** 自定义显示时长（毫秒），0 为不自动关闭 */
  duration?: number
  /** 是否展示关闭按钮（默认 true） */
  closable?: boolean
  /** 自定义左侧图标（覆盖 tone 默认图标） */
  icon?: React.ReactNode
  /** 操作区节点（如撤销按钮、详情链接等） */
  action?: React.ReactNode
  /** 自定义指定挂载位置 */
  position?: ToastPosition
  /** 目标容器 ID（用于多容器分流） */
  containerId?: string
  /** 自定义类名 */
  className?: string
  /** 自定义行内样式 */
  style?: React.CSSProperties
  /** 关闭时触发的回调 */
  onClose?: () => void
}

export interface ToastItem extends ToastOptions {
  id: string
  tone: ToastTone
  message: React.ReactNode
  duration: number
  createdAt: number
}

interface ActiveTimer {
  timerId?: number | ReturnType<typeof setTimeout>
  startedAt: number
  remaining: number
  isPaused: boolean
  onExpire: () => void
}

type ToastListener = (items: ToastItem[]) => void

let toastQueue: ToastItem[] = []
const listeners = new Set<ToastListener>()
const timerMap = new Map<string, ActiveTimer>()
let toastSeq = 0

function notifyToastListeners() {
  const snapshot = [...toastQueue]
  listeners.forEach((fn) => fn(snapshot))
}

/** 暂停指定 Toast 的自动关闭倒计时 */
export function pauseToast(id: string): void {
  const timer = timerMap.get(id)
  if (!timer || timer.isPaused || timer.remaining <= 0) return
  if (timer.timerId) {
    clearTimeout(timer.timerId)
    timer.timerId = undefined
  }
  const elapsed = Date.now() - timer.startedAt
  timer.remaining = Math.max(0, timer.remaining - elapsed)
  timer.isPaused = true
}

/** 恢复指定 Toast 的自动关闭倒计时 */
export function resumeToast(id: string): void {
  const timer = timerMap.get(id)
  if (!timer || !timer.isPaused || timer.remaining <= 0) return
  timer.isPaused = false
  timer.startedAt = Date.now()
  if (typeof window !== 'undefined') {
    timer.timerId = window.setTimeout(timer.onExpire, timer.remaining)
  }
}

/** 关闭并销毁指定 ID 的 Toast 通知 */
export function dismissToast(id: string): void {
  const timer = timerMap.get(id)
  if (timer?.timerId) {
    clearTimeout(timer.timerId)
  }
  timerMap.delete(id)

  const item = toastQueue.find((t) => t.id === id)
  if (item) {
    item.onClose?.()
  }

  toastQueue = toastQueue.filter((t) => t.id !== id)
  notifyToastListeners()
}

/** 清空当前所有进行中的 Toast 通知 */
export function clearToasts(): void {
  timerMap.forEach((timer) => {
    if (timer.timerId) clearTimeout(timer.timerId)
  })
  timerMap.clear()

  toastQueue.forEach((item) => item.onClose?.())
  toastQueue = []
  notifyToastListeners()
}

/** 向全局队列推送一条 Toast 消息 */
export function pushToast(
  tone: ToastTone,
  messageOrOptions: React.ReactNode | ToastOptions,
  duration?: number
): string {
  const id = `abc_toast_${++toastSeq}_${Date.now()}`

  let options: ToastOptions = {}
  if (
    messageOrOptions !== null &&
    typeof messageOrOptions === 'object' &&
    !React.isValidElement(messageOrOptions)
  ) {
    options = messageOrOptions as ToastOptions
  } else {
    options = { message: messageOrOptions }
  }

  const rawTone = options.tone ?? tone
  const resolvedTone: ToastTone = rawTone === 'danger' ? 'error' : rawTone
  const resolvedMessage = options.content ?? options.message ?? options.description ?? ''
  const defaultDuration =
    resolvedTone === 'error' ? 4200 : resolvedTone === 'warning' ? 3600 : resolvedTone === 'loading' ? 0 : 3000
  const resolvedDuration = options.duration ?? duration ?? defaultDuration

  const item: ToastItem = {
    ...options,
    id,
    tone: resolvedTone,
    message: resolvedMessage,
    duration: resolvedDuration,
    createdAt: Date.now(),
  }

  // 维持队列容量上限，清理过量积压的计时器以防内存泄露
  if (toastQueue.length >= 30) {
    const overflow = toastQueue.slice(0, toastQueue.length - 29)
    overflow.forEach((old) => {
      const t = timerMap.get(old.id)
      if (t?.timerId) clearTimeout(t.timerId)
      timerMap.delete(old.id)
    })
    toastQueue = toastQueue.slice(-29)
  }

  toastQueue = [...toastQueue, item]
  notifyToastListeners()

  if (resolvedDuration > 0 && typeof window !== 'undefined') {
    const activeTimer: ActiveTimer = {
      startedAt: Date.now(),
      remaining: resolvedDuration,
      isPaused: false,
      onExpire: () => dismissToast(id),
    }
    activeTimer.timerId = window.setTimeout(activeTimer.onExpire, resolvedDuration)
    timerMap.set(id, activeTimer)
  }

  return id
}

export interface AbcToastMethods extends AbcToastAdapter {
  success: (messageOrOptions: React.ReactNode | ToastOptions, duration?: number) => string
  error: (messageOrOptions: React.ReactNode | ToastOptions, duration?: number) => string
  info: (messageOrOptions: React.ReactNode | ToastOptions, duration?: number) => string
  warning: (messageOrOptions: React.ReactNode | ToastOptions, duration?: number) => string
  loading: (messageOrOptions: React.ReactNode | ToastOptions, duration?: number) => string
  push: (tone: ToastTone, messageOrOptions: React.ReactNode | ToastOptions, duration?: number) => string
  dismiss: (id: string) => void
  clear: () => void
}

/** 零外部依赖的内置全局轻量消息通知实例 */
export const abcToast: AbcToastMethods = {
  success: (msg, dur) => pushToast('success', msg, dur),
  error: (msg, dur) => pushToast('error', msg, dur ?? 4200),
  info: (msg, dur) => pushToast('info', msg, dur),
  warning: (msg, dur) => pushToast('warning', msg, dur ?? 3600),
  loading: (msg, dur = 0) => pushToast('loading', msg, dur),
  push: (tone, msg, dur) => pushToast(tone, msg, dur),
  dismiss: (id) => dismissToast(id),
  clear: () => clearToasts(),
}

/** 兼容简短别名 */
export const toast = abcToast

export const TONE_ICONS: Record<string, React.ReactNode> = {
  success: <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--abc-success)]" />,
  error: <AlertCircle className="h-4 w-4 shrink-0 text-[var(--abc-danger)]" />,
  danger: <AlertCircle className="h-4 w-4 shrink-0 text-[var(--abc-danger)]" />,
  warning: <AlertTriangle className="h-4 w-4 shrink-0 text-[var(--abc-warning)]" />,
  info: <Info className="h-4 w-4 shrink-0 text-[var(--abc-info)]" />,
  loading: <Loader2 className="h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]" />,
}

const TOAST_SIZE_CLASS: Record<AbcSize, string> = {
  xs: 'px-2.5 py-1.5 text-[11px]',
  sm: 'px-3.5 py-2.5 text-xs',
  md: 'px-4 py-3 text-sm',
  lg: 'px-5 py-3.5 text-sm',
}

const POSITION_CLASS_MAP: Record<ToastPosition, string> = {
  'top-right': 'top-4 right-4 items-end',
  'top-left': 'top-4 left-4 items-start',
  'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'bottom-4 right-4 items-end',
  'bottom-left': 'bottom-4 left-4 items-start',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
}

export interface ToastItemViewProps {
  item: ToastItem
  resolvedSize: AbcSize
  resolvedMotion: AbcMotionPreset
  closable: boolean
  pauseOnHover: boolean
  toastClassName?: string
  toastStyle?: React.CSSProperties
  onDismiss: (id: string) => void
}

/** 单条 Toast 视图呈现组件 */
export const ToastItemView: React.FC<ToastItemViewProps> = ({
  item,
  resolvedSize,
  resolvedMotion,
  closable,
  pauseOnHover,
  toastClassName,
  toastStyle,
  onDismiss,
}) => {
  const isClosable = item.closable ?? closable
  const hasHeader = Boolean(item.title)

  return (
    <div
      role={item.tone === 'error' || item.tone === 'warning' ? 'alert' : 'status'}
      aria-live={item.tone === 'error' ? 'assertive' : 'polite'}
      data-motion={resolvedMotion}
      onMouseEnter={() => {
        if (pauseOnHover) pauseToast(item.id)
      }}
      onMouseLeave={() => {
        if (pauseOnHover) resumeToast(item.id)
      }}
      style={{ ...toastStyle, ...item.style }}
      className={cn(
        'pointer-events-auto flex gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]',
        'bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]',
        hasHeader ? 'items-start' : 'items-center',
        TOAST_SIZE_CLASS[resolvedSize],
        resolvedMotion !== 'none' && 'abc-animate-popover-in',
        toastClassName,
        item.className
      )}
    >
      <span className={cn('shrink-0', hasHeader && 'mt-0.5')}>
        {item.icon ?? TONE_ICONS[item.tone] ?? TONE_ICONS.info}
      </span>

      <div className="min-w-0 flex-1 space-y-0.5">
        {item.title && (
          <div className="font-semibold text-[var(--abc-fg)] leading-snug">
            {item.title}
          </div>
        )}
        {item.message && (
          <div
            className={cn(
              'leading-relaxed break-words',
              hasHeader ? 'text-xs text-[var(--abc-fg-secondary)]' : 'font-medium'
            )}
          >
            {item.message}
          </div>
        )}
        {item.action && (
          <div className="mt-1.5 flex items-center gap-2">
            {item.action}
          </div>
        )}
      </div>

      {isClosable && (
        <button
          type="button"
          aria-label="关闭通知"
          onClick={(e) => {
            e.stopPropagation()
            onDismiss(item.id)
          }}
          className="rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer transition-colors"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  )
}

export interface ToastContainerProps {
  /**
   * 挂载屏幕位置
   * @default 'top-right'
   */
  position?: ToastPosition
  /**
   * 尺寸规格（xs | sm | md | lg），默认继承全局配置或 'sm'
   */
  size?: AbcSize
  /**
   * 动效预设（none | subtle | smooth | spring），默认继承全局 motion
   */
  motion?: AbcMotionPreset
  /**
   * 屏幕同屏最大展示数量
   * @default 5
   */
  maxCount?: number
  /**
   * 鼠标悬停时是否暂停自动关闭计时
   * @default true
   */
  pauseOnHover?: boolean
  /**
   * 是否新通知展示在最上方
   * @default false
   */
  newestOnTop?: boolean
  /**
   * 是否默认显示关闭图标
   * @default true
   */
  closable?: boolean
  /**
   * 外层悬浮定位容器类名
   */
  className?: string
  /**
   * 外层悬浮定位容器样式
   */
  style?: React.CSSProperties
  /**
   * 单条 Toast 附加类名
   */
  toastClassName?: string
  /**
   * 单条 Toast 附加样式
   */
  toastStyle?: React.CSSProperties
  /**
   * Portal 挂载目标 DOM 节点，默认 document.body
   */
  container?: HTMLElement | (() => HTMLElement | null) | null
  /**
   * 容器隔离标识 ID（配合 ToastOptions.containerId 使用）
   */
  containerId?: string
  /**
   * 自定义单项渲染器
   */
  renderItem?: (item: ToastItem, dismiss: (id: string) => void) => React.ReactNode
  /**
   * 独立受控数据源（提供时脱离内置全局队列）
   */
  items?: ToastItem[]
  /**
   * 配合受控 items 时的关闭回调
   */
  onDismiss?: (id: string) => void
}

/**
 * ToastContainer — 企业级轻量通知挂载容器
 * 支持 6 种视口定位、悬停倒计时暂停、图文/操作卡片排版、Portal 目标自定义与多容器隔离
 */
export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  size,
  motion,
  maxCount = 5,
  pauseOnHover = true,
  newestOnTop = false,
  closable = true,
  className,
  style,
  toastClassName,
  toastStyle,
  container,
  containerId,
  renderItem,
  items: controlledItems,
  onDismiss: controlledOnDismiss,
}) => {
  const [queueItems, setQueueItems] = useState<ToastItem[]>(() => [...toastQueue])
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)

  useEffect(() => {
    if (controlledItems !== undefined) return
    const listener: ToastListener = (next) => setQueueItems(next)
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }, [controlledItems])

  const sourceItems = controlledItems ?? queueItems

  // 过滤当前容器归属项
  const matchedItems = sourceItems.filter((item) => {
    if (item.containerId && containerId && item.containerId !== containerId) {
      return false
    }
    if (item.position && item.position !== position) {
      return false
    }
    return true
  })

  // 按数量与先后顺序切片
  let visibleItems = matchedItems
  if (newestOnTop) {
    visibleItems = [...matchedItems].reverse().slice(0, maxCount)
  } else if (maxCount > 0) {
    visibleItems = matchedItems.slice(-maxCount)
  }

  const handleDismiss = (id: string) => {
    if (controlledOnDismiss) {
      controlledOnDismiss(id)
    } else {
      dismissToast(id)
    }
  }

  if (typeof document === 'undefined' || visibleItems.length === 0) {
    return null
  }

  const targetNode =
    typeof container === 'function'
      ? container()
      : container !== undefined
        ? container
        : typeof document !== 'undefined'
          ? document.body
          : null

  if (!targetNode) return null

  const content = (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'pointer-events-none fixed z-[10050] flex max-w-sm flex-col gap-2',
        POSITION_CLASS_MAP[position],
        className
      )}
      style={style}
    >
      {visibleItems.map((item) => {
        if (renderItem) {
          return (
            <React.Fragment key={item.id}>
              {renderItem(item, () => handleDismiss(item.id))}
            </React.Fragment>
          )
        }
        return (
          <ToastItemView
            key={item.id}
            item={item}
            resolvedSize={resolvedSize}
            resolvedMotion={resolvedMotion}
            closable={closable}
            pauseOnHover={pauseOnHover}
            toastClassName={toastClassName}
            toastStyle={toastStyle}
            onDismiss={handleDismiss}
          />
        )
      })}
    </div>
  )

  return createPortal(content, targetNode)
}

/** 兼容导出命名 */
export interface AbcToastViewportProps extends ToastContainerProps {}

/** 全局消息队列挂载宿主（由 AbcProvider 默认渲染，底层基于 ToastContainer） */
export const AbcToastViewport: React.FC<AbcToastViewportProps> = (props) => {
  return <ToastContainer {...props} />
}

export default ToastContainer
