import React, { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset } from '@abc-design/tokens'
import { Maximize2, Minimize2, X } from 'lucide-react'
import { useAbcMotion } from '../../hooks'
import { usePresence } from '../../hooks/usePresence'
import { cn } from '../../utils/cn'

export interface DialogContextValue {
  isOpen: boolean
  handleClose: () => void
  closeDisabled: boolean
  hasHeader: boolean
  titleId: string
}

export const DialogContext = createContext<DialogContextValue | null>(null)

export function useDialog() {
  return useContext(DialogContext)
}

/**
 * 企业级高保真模态弹窗组件 (Dialog / Modal)
 *
 * 【容器交互选型与多级交互铁律】
 * 1. 对于大表单交互操作展示必须使用抽屉（Drawer），全高右侧贴合具备吸附 Header/Footer 与原生垂直滚动流，避免居中 Modal 在大表单下顶部被顶出可视区。
 * 2. 打开一层抽屉是大表单、在该表单上需要打开另一个表单也是大表单的情况，必须使用子级抽屉（二级抽屉 L1 -> L2），优先使用 cascadeMode="adjacent"（平级并排对比展示），避免多层遮罩覆盖与内容割裂。
 * 3. 如果是小表单或轻量确认操作（操作项较小、步骤简单），使用 Modal/Dialog，支持多级堆叠展示（z-index 自动高于抽屉）。
 * 4. Dialog 内部采用显式绝对居中规范，彻底避免在非标准视口或长内容下被顶出可视区。
 */
export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

export interface DialogProps
  extends Omit<
    React.DialogHTMLAttributes<HTMLDialogElement>,
    'title' | 'open' | 'onClose' | 'onCancel' | 'children'
  > {
  /** 允许透传自定义 data-* 属性至原生 <dialog> 节点 */
  [dataAttr: `data-${string}`]: string | number | boolean | undefined
  /** 控制模态框显隐（兼容 open / visible / isOpen 三种命名习惯） */
  open?: boolean
  visible?: boolean
  isOpen?: boolean
  /** 请求关闭回调（兼容 onClose / onCancel） */
  onClose?: () => void
  onCancel?: () => void
  /** 兼容 onOpenChange 签名 */
  onOpenChange?: (open: boolean) => void
  /** 是否展示右上角关闭按钮（默认 true） */
  closable?: boolean
  /** 是否禁用关闭按钮（如表单提交中） */
  closeDisabled?: boolean
  /** 关闭按钮无障碍文案，默认 '关闭' */
  closeLabel?: string
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
  /** 面板显隐动效规格 */
  motion?: AbcMotionPreset
  /** 面板附加类名 */
  className?: string
}

const SIZE_WIDTH_MAP: Record<string, string> = {
  xs: 'max-w-sm',
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
 *
 * 【交互与容器选型规范】
 * 1. 专用于小表单操作与轻量确认（如重命名、状态流转、单字段修改、二次确认等少字段场景），居中聚焦单一任务。
 * 2. 天然支持多级遮罩堆叠（通过多层 Dialog 依次弹出与关闭）。
 * 3. 严禁承载大表单或复杂长表单（大表单必须使用 Drawer，避免顶部被顶出视口）。
 *
 * 采用原生 HTML <dialog> + showModal() 顶层渲染，天然具备背景 inert 隔离、焦点锁与归还能力；
 * 结合 CSS overscroll-behavior: contain 杜绝滚动穿透且不篡改 body overflow 导致页面滚动条跳动。
 */
export const Dialog: React.FC<DialogProps> = ({
  open,
  visible,
  isOpen: isOpenProp,
  onClose,
  onCancel,
  onOpenChange,
  closable = true,
  closeDisabled = false,
  closeLabel = '关闭',
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
  motion,
  className,
  ...dialogHtmlProps
}) => {
  const isOpen = open ?? visible ?? isOpenProp ?? false
  const resolvedMotion = useAbcMotion(motion)
  const { isMounted, isVisible } = usePresence(isOpen, resolvedMotion === 'none' ? 0 : 180)
  const titleId = useId()
  const descId = useId()

  const dialogRef = useRef<HTMLDialogElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const pressedOutsideRef = useRef(false)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const restorePreviousFocus = useCallback(() => {
    const prev = previousFocusRef.current
    previousFocusRef.current = null
    if (prev && prev.isConnected && typeof prev.focus === 'function') {
      prev.focus({ preventScroll: true })
    }
  }, [])
  const handleClose = useCallback(() => {
    if (closeDisabled) return
    if (onClose) {
      onClose()
    } else if (onCancel) {
      onCancel()
    } else if (onOpenChange) {
      onOpenChange(false)
    }
  }, [closeDisabled, onClose, onCancel, onOpenChange])
  const onCloseRef = useRef(handleClose)
  onCloseRef.current = handleClose

  const hasHeader = Boolean(title !== undefined || fullscreenable)

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

    if (!previousFocusRef.current && typeof document !== 'undefined') {
      const active = document.activeElement
      if (active instanceof HTMLElement && !dialogEl.contains(active)) {
        previousFocusRef.current = active
      }
    }

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

    // 兼容 jsdom 或 showModal 未移动焦点的场景，自动聚焦弹窗关闭按钮/首个交互元素
    if (isOpen && typeof document !== 'undefined' && !dialogEl.contains(document.activeElement)) {
      const focusTarget =
        dialogEl.querySelector<HTMLElement>('[autofocus]') ??
        dialogEl.querySelector<HTMLElement>('[data-dialog-close]:not([disabled])') ??
        dialogEl.querySelector<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      focusTarget?.focus({ preventScroll: true })
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
      restorePreviousFocus()
    }
  }, [isMounted, restorePreviousFocus])

  // 关闭时复位拖拽偏移与非受控全屏态，并立即归还焦点
  useEffect(() => {
    if (!isOpen) {
      setOffset({ x: 0, y: 0 })
      if (controlledFullscreen === undefined) {
        setInternalFullscreen(false)
      }
      restorePreviousFocus()
    }
  }, [isOpen, controlledFullscreen, restorePreviousFocus])

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
      {...dialogHtmlProps}
      ref={dialogRef}
      data-motion={resolvedMotion}
      aria-labelledby={titleId}
      aria-describedby={description ? descId : undefined}
      style={{
        ...dialogHtmlProps.style,
        display: isOpen ? 'flex' : 'none',
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100dvh',
        maxWidth: '100vw',
        maxHeight: '100dvh',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: isFullscreen ? 0 : '1rem',
        border: 'none',
        backgroundColor: 'rgba(2, 6, 23, 0.5)',
        backdropFilter: 'blur(2px)',
        zIndex: 1100,
      }}
      onPointerDown={(e) => {
        pressedOutsideRef.current = closeOnClickModal && isPointerOutsidePanel(e)
      }}
      onPointerUp={(e) => {
        if (closeOnClickModal && pressedOutsideRef.current && isPointerOutsidePanel(e)) {
          onCloseRef.current()
        }
        pressedOutsideRef.current = false
      }}
      onClick={(e) => {
        // 兼容测试脚本直接对 dialog 根遮罩触发 click 事件
        if (closeOnClickModal && e.target === dialogRef.current && !pressedOutsideRef.current) {
          onCloseRef.current()
        }
      }}
      className={cn(
        'fixed inset-0 z-[1100] m-0 h-dvh max-h-none w-dvw max-w-none border-0 p-4 flex items-center justify-center',
        (dialogHtmlProps['data-abc-theme'] ?? dialogHtmlProps['data-playground-theme']) === 'dark' &&
          'dark',
        (dialogHtmlProps['data-abc-theme'] ?? dialogHtmlProps['data-playground-theme']) === 'light' &&
          'light',
        isFullscreen && 'p-0',
        resolvedMotion !== 'none' && (isVisible ? 'abc-animate-fade-in' : 'abc-animate-fade-out')
      )}
    >
      <div
        ref={panelRef}
        data-dialog-panel=""
        data-motion={resolvedMotion}
        style={{
          width: !isFullscreen && width ? width : undefined,
          transform:
            !isFullscreen && (offset.x !== 0 || offset.y !== 0)
              ? `translate3d(${offset.x}px, ${offset.y}px, 0)`
              : undefined,
        }}
        className={cn(
          'relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)] m-auto',
          isFullscreen
            ? 'h-dvh w-dvw rounded-none'
            : cn('max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]', !width && sizeClass),
          resolvedMotion !== 'none' && (isVisible ? 'abc-animate-modal-in' : 'abc-animate-modal-out'),
          className
        )}
      >
        <DialogContext.Provider value={{ isOpen, handleClose, closeDisabled, hasHeader, titleId }}>
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
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFullscreen()
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
                  </button>
                )}
                {closable && (
                  <button
                    type="button"
                    data-dialog-close=""
                    aria-label={closeLabel}
                    title={closeLabel}
                    disabled={closeDisabled}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleClose()
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer',
                      closeDisabled && 'cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]'
                    )}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
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
        </DialogContext.Provider>
      </div>
    </dialog>,
    document.body
  )
}

export const Modal = Dialog
export type ModalProps = DialogProps

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  closeLabel?: string
  closeDisabled?: boolean
  closable?: boolean
  onClose?: () => void
}

export function DialogContent({
  className,
  children,
  closeLabel = '关闭',
  closeDisabled,
  closable,
  onClose: contentOnClose,
  ...props
}: DialogContentProps) {
  const dialogCtx = useContext(DialogContext)
  const isClosable = closable ?? (dialogCtx ? !dialogCtx.hasHeader : false)
  const isDisabled = closeDisabled ?? dialogCtx?.closeDisabled ?? false

  return (
    <div data-slot="dialog-content" className={cn('relative space-y-4', className)} {...props}>
      {isClosable && (
        <button
          type="button"
          data-dialog-close=""
          aria-label={closeLabel}
          title={closeLabel}
          disabled={isDisabled}
          onClick={(e) => {
            e.stopPropagation()
            if (contentOnClose) {
              contentOnClose()
            } else if (dialogCtx) {
              dialogCtx.handleClose()
            }
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          className={cn(
            'absolute right-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer z-10',
            isDisabled && 'cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]'
          )}
        >
          <X className="h-4 w-4" />
        </button>
      )}
      {children}
    </div>
  )
}

export function DialogHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="dialog-header" className={cn('flex flex-col space-y-1.5 text-left', className)} {...props}>
      {children}
    </div>
  )
}

export function DialogFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="dialog-footer" className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2', className)} {...props}>
      {children}
    </div>
  )
}

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, id, ...props }, ref) => {
  const ctx = useDialog()
  return (
    <h2
      ref={ref}
      id={id ?? ctx?.titleId}
      data-slot="dialog-title"
      className={cn(
        'text-base font-semibold leading-none tracking-tight text-[var(--abc-fg)]',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
})
DialogTitle.displayName = 'DialogTitle'

export function DialogDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p data-slot="dialog-description" className={cn('text-xs text-[var(--abc-fg-muted)]', className)} {...props}>
      {children}
    </p>
  )
}

export default Dialog
