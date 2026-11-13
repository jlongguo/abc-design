import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Maximize2, Minimize2, X } from 'lucide-react'
import { usePresence } from '../../hooks/usePresence'
import { cn } from '../../utils/cn'

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

export interface DialogProps {
  /** 控制模态框显隐（兼容 open / visible / isOpen 三种命名习惯） */
  open?: boolean
  visible?: boolean
  isOpen?: boolean
  /** 请求关闭回调 */
  onClose: () => void
  /** 标题内容 */
  title?: React.ReactNode
  /** 副标题或辅助描述 */
  description?: React.ReactNode
  /** 主体内容 */
  children: React.ReactNode
  /** 底部操作区 */
  footer?: React.ReactNode
  /** 预设宽度规格 */
  size?: DialogSize | string
  /** size 语义别名 */
  maxWidth?: DialogSize | string
  /** 自定义宽度 CSS 值（如 '680px'） */
  width?: string
  /** 点击遮罩空白处是否允许关闭（默认 true） */
  closeOnClickModal?: boolean
  /** 是否支持按住标题栏拖拽位移（默认 true） */
  draggable?: boolean
  /** 是否显示最大化/还原全屏按钮（默认 true） */
  fullscreenable?: boolean
  /** 受控全屏状态 */
  fullscreen?: boolean
  /** 全屏状态变化回调 */
  onFullscreenChange?: (fullscreen: boolean) => void
  /** 是否启用焦点锁定（原生 showModal 天然支持，保留字段兼容既有调用） */
  focusTrap?: boolean
  /** 面板附加类名 */
  className?: string
}

const SIZE_WIDTH_MAP: Record<string, string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-3xl',
  '2xl': 'max-w-4xl',
  '3xl': 'max-w-5xl',
  '4xl': 'max-w-6xl',
  '5xl': 'max-w-7xl',
}

/**
 * 企业级模态对话框
 * 采用原生 HTML <dialog> + showModal() 顶层渲染，天然具备背景 inert 隔离、焦点锁与归还能力；
 * 结合 CSS overscroll-behavior: contain 杜绝滚动穿透且不篡改 body overflow 导致页面滚动条跳动。
 */
export const Dialog: React.FC<DialogProps> = ({
  open,
  visible,
  isOpen: isOpenProp,
  onClose,
  title,
  description,
  children,
  footer,
  size,
  maxWidth = 'md',
  width,
  closeOnClickModal = true,
  draggable = true,
  fullscreenable = true,
  fullscreen: controlledFullscreen,
  onFullscreenChange,
  className,
}) => {
  const isOpen = open ?? visible ?? isOpenProp ?? false
  const { isMounted, isVisible } = usePresence(isOpen, 180)
  const titleId = useId()
  const descId = useId()

  const dialogRef = useRef<HTMLDialogElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const pressedOutsideRef = useRef(false)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  const [internalFullscreen, setInternalFullscreen] = useState(false)
  const isFullscreen = controlledFullscreen !== undefined ? controlledFullscreen : internalFullscreen

  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragStateRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(
    null
  )

  const toggleFullscreen = useCallback(() => {
    const next = !isFullscreen
    if (controlledFullscreen === undefined) {
      setInternalFullscreen(next)
    }
    onFullscreenChange?.(next)
  }, [isFullscreen, controlledFullscreen, onFullscreenChange])

  // 打开时进入原生顶层模态栈，卸载前安全关闭
  useEffect(() => {
    if (!isMounted) return
    const dialogEl = dialogRef.current
    if (!dialogEl) return

    let usedNativeModal = false
    if (typeof dialogEl.showModal === 'function') {
      if (!dialogEl.open) {
        try {
          dialogEl.showModal()
          usedNativeModal = true
        } catch {
          dialogEl.setAttribute('open', '')
        }
      } else {
        usedNativeModal = true
      }
    } else {
      dialogEl.setAttribute('open', '')
    }

    const handleCancel = (e: Event) => {
      e.preventDefault()
      onCloseRef.current()
    }

    // 兼容 jsdom 或不支持原生 cancel 事件的环境，监听 Escape 关闭弹窗
    const handleFallbackKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onCloseRef.current()
      }
    }

    dialogEl.addEventListener('cancel', handleCancel)
    if (!usedNativeModal || (typeof navigator !== 'undefined' && /jsdom/i.test(navigator.userAgent))) {
      window.addEventListener('keydown', handleFallbackKeyDown)
    }

    return () => {
      dialogEl.removeEventListener('cancel', handleCancel)
      window.removeEventListener('keydown', handleFallbackKeyDown)
      if (dialogEl.open && typeof dialogEl.close === 'function') {
        try {
          dialogEl.close()
        } catch {
          dialogEl.removeAttribute('open')
        }
      }
    }
  }, [isMounted])

  // 关闭时复位拖拽偏移与非受控全屏态
  useEffect(() => {
    if (!isOpen) {
      setOffset({ x: 0, y: 0 })
      if (controlledFullscreen === undefined) {
        setInternalFullscreen(false)
      }
    }
  }, [isOpen, controlledFullscreen])

  // 判断指针坐标是否落在面板矩形外部（防止框选文字拖拽至遮罩松手时误关弹窗，并豁免挂载在 dialog 顶层内的浮层）
  const isPointerOutsidePanel = (e: React.PointerEvent<HTMLDialogElement>): boolean => {
    const targetEl = e.target as Element | null
    if (targetEl?.closest?.('[data-abc-floating]')) {
      return false
    }
    const panel = panelRef.current
    if (!panel) return false
    const rect = panel.getBoundingClientRect()
    if (rect.width === 0 && rect.height === 0) {
      return !panel.contains(e.target as Node)
    }
    return (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    )
  }

  const handleHeaderMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggable || isFullscreen || e.button !== 0) return
    if ((e.target as HTMLElement).closest('button, a, input, [role="button"]')) return
    dragStateRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: offset.x,
      origY: offset.y,
    }

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragStateRef.current) return
      setOffset({
        x: dragStateRef.current.origX + (ev.clientX - dragStateRef.current.startX),
        y: dragStateRef.current.origY + (ev.clientY - dragStateRef.current.startY),
      })
    }

    const onMouseUp = () => {
      dragStateRef.current = null
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  if (!isMounted || typeof document === 'undefined') return null

  const sizeKey = size || maxWidth
  const sizeClass = SIZE_WIDTH_MAP[sizeKey] || sizeKey

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby={title ? titleId : undefined}
      aria-label={!title ? '对话框' : undefined}
      aria-describedby={description ? descId : undefined}
      onPointerDown={(e) => {
        pressedOutsideRef.current = closeOnClickModal && isPointerOutsidePanel(e)
      }}
      onPointerUp={(e) => {
        if (closeOnClickModal && pressedOutsideRef.current && isPointerOutsidePanel(e)) {
          onClose()
        }
        pressedOutsideRef.current = false
      }}
      onClick={(e) => {
        // 兼容测试脚本直接对 dialog 根遮罩触发 click 事件
        if (closeOnClickModal && e.target === dialogRef.current && !pressedOutsideRef.current) {
          onClose()
        }
      }}
      className={cn(
        'fixed inset-0 z-[1000] m-0 h-dvh max-h-none w-dvw max-w-none border-0 bg-transparent p-4 open:flex items-center justify-center',
        isFullscreen && 'p-0',
        isVisible ? 'abc-animate-fade-in' : 'abc-animate-fade-out'
      )}
    >
      <div
        ref={panelRef}
        data-dialog-panel=""
        style={{
          width: !isFullscreen && width ? width : undefined,
          transform:
            !isFullscreen && (offset.x !== 0 || offset.y !== 0)
              ? `translate3d(${offset.x}px, ${offset.y}px, 0)`
              : undefined,
        }}
        className={cn(
          'relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)]',
          isFullscreen
            ? 'h-dvh w-dvw rounded-none'
            : cn('max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]', !width && sizeClass),
          isVisible ? 'abc-animate-modal-in' : 'abc-animate-modal-out',
          className
        )}
      >
        {(title !== undefined || fullscreenable) && (
          <div
            onMouseDown={handleHeaderMouseDown}
            onDoubleClick={fullscreenable ? toggleFullscreen : undefined}
            className={cn(
              'flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none',
              draggable && !isFullscreen && 'cursor-move'
            )}
          >
            <div className="min-w-0 flex-1">
              {title && (
                <h2 id={titleId} className="text-sm font-semibold text-[var(--abc-fg)] leading-snug">
                  {title}
                </h2>
              )}
              {description && (
                <p id={descId} className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">
                  {description}
                </p>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-1">
              {fullscreenable && (
                <button
                  type="button"
                  aria-label={isFullscreen ? '还原窗口' : '全屏'}
                  title={isFullscreen ? '退出全屏' : '全屏显示'}
                  onClick={toggleFullscreen}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
                </button>
              )}
              <button
                type="button"
                aria-label="关闭"
                title="关闭弹窗"
                onClick={onClose}
                className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        <div
          data-dialog-body=""
          className="flex-1 overflow-y-auto px-5 py-4 text-xs text-[var(--abc-fg-secondary)]"
        >
          {children}
        </div>

        {footer && (
          <div className="flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3">
            {footer}
          </div>
        )}
      </div>
    </dialog>,
    document.body
  )
}

export default Dialog
