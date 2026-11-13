import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from 'lucide-react'
import type { AbcToastAdapter } from '../../provider/types'
import { cn } from '../../utils/cn'

export type ToastTone = 'success' | 'error' | 'info' | 'warning'

export interface ToastItem {
  id: string
  tone: ToastTone
  message: string
  duration: number
}

type ToastListener = (items: ToastItem[]) => void

let toastQueue: ToastItem[] = []
const listeners = new Set<ToastListener>()
let toastSeq = 0

function notifyToastListeners() {
  const snapshot = [...toastQueue]
  listeners.forEach((fn) => fn(snapshot))
}

export function dismissToast(id: string): void {
  toastQueue = toastQueue.filter((item) => item.id !== id)
  notifyToastListeners()
}

export function pushToast(tone: ToastTone, message: string, duration = 3000): string {
  const id = `abc_toast_${++toastSeq}_${Date.now()}`
  toastQueue = [...toastQueue.slice(-4), { id, tone, message, duration }]
  notifyToastListeners()

  if (duration > 0 && typeof window !== 'undefined') {
    window.setTimeout(() => {
      dismissToast(id)
    }, duration)
  }
  return id
}

/** 零外部依赖的内置全局轻量消息通知实例 */
export const abcToast: AbcToastAdapter = {
  success: (msg) => pushToast('success', msg),
  error: (msg) => pushToast('error', msg, 4200),
  info: (msg) => pushToast('info', msg),
  warning: (msg) => pushToast('warning', msg, 3600),
}

const TONE_ICONS: Record<ToastTone, React.ReactNode> = {
  success: <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--abc-success)]" />,
  error: <AlertCircle className="h-4 w-4 shrink-0 text-[var(--abc-danger)]" />,
  warning: <AlertTriangle className="h-4 w-4 shrink-0 text-[var(--abc-warning)]" />,
  info: <Info className="h-4 w-4 shrink-0 text-[var(--abc-info)]" />,
}

/** 全局消息队列挂载宿主（由 AbcProvider 默认渲染） */
export const AbcToastViewport: React.FC = () => {
  const [items, setItems] = useState<ToastItem[]>(() => [...toastQueue])

  useEffect(() => {
    const listener: ToastListener = (next) => setItems(next)
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }, [])

  if (typeof document === 'undefined' || items.length === 0) return null

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed top-4 right-4 z-[10050] flex max-w-sm flex-col gap-2"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            'pointer-events-auto flex items-center gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]',
            'bg-[var(--abc-bg-elevated)] px-3.5 py-2.5 text-xs font-medium text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]',
            'abc-animate-popover-in'
          )}
        >
          {TONE_ICONS[item.tone]}
          <span className="flex-1 leading-relaxed break-words">{item.message}</span>
          <button
            type="button"
            aria-label="关闭通知"
            onClick={() => dismissToast(item.id)}
            className="rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
    </div>,
    document.body
  )
}
