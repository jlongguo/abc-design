import * as React from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '../../utils/cn'

export interface SonnerCompatToastItem {
  id: string | number
  renderFn?: (id: string | number) => React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
  duration?: number
  delete?: boolean
}

type CompatListener = () => void

let compatToasts: SonnerCompatToastItem[] = []
const compatListeners = new Set<CompatListener>()
const compatTimers = new Map<string | number, ReturnType<typeof setTimeout>>()
let compatSeq = 0

function emitCompatChange() {
  compatListeners.forEach((listener) => listener())
}

function dismissCompatToast(id?: string | number) {
  if (id === undefined) {
    compatTimers.forEach((timer) => clearTimeout(timer))
    compatTimers.clear()
    if (compatToasts.length === 0) return
    compatToasts = []
    emitCompatChange()
    return
  }
  const existingTimer = compatTimers.get(id)
  if (existingTimer) {
    clearTimeout(existingTimer)
    compatTimers.delete(id)
  }
  const next = compatToasts.filter((item) => item.id !== id)
  if (next.length !== compatToasts.length) {
    compatToasts = next
    emitCompatChange()
  }
}

function scheduleCompatTimer(id: string | number, duration?: number) {
  const prev = compatTimers.get(id)
  if (prev) {
    clearTimeout(prev)
    compatTimers.delete(id)
  }
  if (duration === undefined || duration === Infinity || !Number.isFinite(duration) || duration <= 0) {
    return
  }
  const timer = setTimeout(() => {
    dismissCompatToast(id)
  }, duration)
  compatTimers.set(id, timer)
}

function upsertCompatToast(item: SonnerCompatToastItem): string | number {
  const idx = compatToasts.findIndex((t) => t.id === item.id)
  if (idx >= 0) {
    const next = [...compatToasts]
    next[idx] = item
    compatToasts = next
  } else {
    compatToasts = [item, ...compatToasts]
  }
  scheduleCompatTimer(item.id, item.duration)
  emitCompatChange()
  return item.id
}

function createTextCompatToast(
  variant: SonnerCompatToastItem['variant'],
  title: React.ReactNode,
  opts?: { id?: string | number; description?: React.ReactNode; duration?: number }
) {
  compatSeq += 1
  const id = opts?.id ?? `abc_sonner_${Date.now()}_${compatSeq}`
  return upsertCompatToast({
    id,
    variant,
    title,
    description: opts?.description,
    duration: opts?.duration ?? 4500,
  })
}

/**
 * 零三方依赖的 Sonner 兼容命令式 Toast 适配器
 */
export const sonnerToast = Object.assign(
  (title: React.ReactNode, opts?: { id?: string | number; description?: React.ReactNode; duration?: number }) =>
    createTextCompatToast('default', title, opts),
  {
    custom: (
      renderFn: (id: string | number) => React.ReactNode,
      opts?: { id?: string | number; duration?: number }
    ) => {
      compatSeq += 1
      const id = opts?.id ?? `abc_sonner_custom_${Date.now()}_${compatSeq}`
      return upsertCompatToast({
        id,
        renderFn,
        duration: opts?.duration,
      })
    },
    success: (title: React.ReactNode, opts?: { id?: string | number; description?: React.ReactNode; duration?: number }) =>
      createTextCompatToast('success', title, opts),
    error: (title: React.ReactNode, opts?: { id?: string | number; description?: React.ReactNode; duration?: number }) =>
      createTextCompatToast('error', title, opts),
    warning: (title: React.ReactNode, opts?: { id?: string | number; description?: React.ReactNode; duration?: number }) =>
      createTextCompatToast('warning', title, opts),
    info: (title: React.ReactNode, opts?: { id?: string | number; description?: React.ReactNode; duration?: number }) =>
      createTextCompatToast('info', title, opts),
    dismiss: (id?: string | number) => dismissCompatToast(id),
  }
)

function subscribeCompat(listener: CompatListener) {
  compatListeners.add(listener)
  return () => {
    compatListeners.delete(listener)
  }
}

function getCompatSnapshot() {
  return compatToasts
}

/**
 * 订阅当前活跃的自定义 Toast 队列状态
 */
export function useSonner(): { toasts: SonnerCompatToastItem[] } {
  const toasts = React.useSyncExternalStore(subscribeCompat, getCompatSnapshot, getCompatSnapshot)
  return { toasts }
}

export interface ToasterProps {
  position?: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'
  visibleToasts?: number
  gap?: number
  expand?: boolean
  richColors?: boolean
  theme?: 'light' | 'dark' | 'system'
  offset?: number | string | { top?: number; right?: number; bottom?: number; left?: number }
  toastOptions?: { unstyled?: boolean; classNames?: Record<string, string> }
  activeCount?: number
  onClearAll?: () => void
  clearAllLabel?: string
  stackCountLabel?: (count: number) => string
  clearAllThreshold?: number
  className?: string
}

const POSITION_CLASSES: Record<NonNullable<ToasterProps['position']>, string> = {
  'top-right': 'right-4 items-end',
  'top-left': 'left-4 items-start',
  'top-center': 'left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'bottom-4 right-4 items-end',
  'bottom-left': 'bottom-4 left-4 items-start',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
}

/**
 * 零外部依赖的 Toaster 视口组件
 * 支持多通知叠放顶栏一键全部清除与 custom ToastCard 渲染
 */
export function Toaster({
  position = 'top-right',
  visibleToasts = 4,
  activeCount,
  onClearAll,
  clearAllLabel = 'Clear All',
  clearAllThreshold = 2,
  className,
}: ToasterProps) {
  const { toasts } = useSonner()
  const activeItems = React.useMemo(
    () => toasts.filter((t) => !t.delete),
    [toasts]
  )
  const resolvedCount = activeCount ?? activeItems.length
  const showStackHeader = resolvedCount >= clearAllThreshold

  const handleClearAll = React.useCallback(() => {
    sonnerToast.dismiss()
    onClearAll?.()
  }, [onClearAll])

  if (typeof document === 'undefined') return null
  if (activeItems.length === 0 && !showStackHeader) return null

  const isTop = position.startsWith('top')
  const visible = activeItems.slice(0, visibleToasts)

  return createPortal(
    <>
      {showStackHeader ? (
        <div
          data-slot="toast-stack-header"
          className="pointer-events-none fixed top-3 right-4 z-[60] flex w-[calc(100vw-2rem)] max-w-md items-center justify-end gap-2"
        >
          <button
            type="button"
            data-slot="toast-clear-all"
            data-testid="toast-clear-all"
            aria-label={clearAllLabel}
            onClick={handleClearAll}
            className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1 text-xs font-medium text-[var(--abc-fg)] shadow-sm backdrop-blur-md transition-all hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] cursor-pointer"
          >
            <X size={12} aria-hidden="true" />
            <span>{clearAllLabel}</span>
          </button>
        </div>
      ) : null}
      {visible.length > 0 ? (
        <ol
          aria-label="Notifications"
          className={cn(
            'pointer-events-none fixed z-[59] flex w-[calc(100vw-2rem)] max-w-md flex-col gap-2.5',
            isTop ? (showStackHeader ? 'top-12' : 'top-4') : undefined,
            POSITION_CLASSES[position],
            className
          )}
        >
          {visible.map((item) => (
            <li key={item.id} className="pointer-events-auto w-full max-w-md list-none">
              {item.renderFn ? (
                item.renderFn(item.id)
              ) : (
                <div className="rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-xs text-[var(--abc-fg)] shadow-lg">
                  {item.title && <div className="font-semibold">{item.title}</div>}
                  {item.description && (
                    <div className="mt-0.5 text-[var(--abc-fg-muted)]">{item.description}</div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      ) : null}
    </>,
    document.body
  )
}
