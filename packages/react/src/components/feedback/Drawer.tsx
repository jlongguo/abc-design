import React, { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset } from '@abc-design/tokens'
import { GripVertical, Layers, Maximize2, Minimize2, X } from 'lucide-react'
import { useAbcMotion } from '../../hooks'
import { usePresence } from '../../hooks/usePresence'
import { cn } from '../../utils/cn'

/** 全局活跃抽屉栈：支撑多级抽屉（L1 -> L2 -> L3）自动向左层叠推挤与缩放 */
let activeDrawerIds: string[] = []
const drawerSubscribers = new Set<() => void>()

function notifyDrawerStack() {
  drawerSubscribers.forEach((fn) => fn())
}

function pushDrawerId(id: string) {
  if (!activeDrawerIds.includes(id)) {
    activeDrawerIds = [...activeDrawerIds, id]
    notifyDrawerStack()
  }
}

function removeDrawerId(id: string) {
  if (activeDrawerIds.includes(id)) {
    activeDrawerIds = activeDrawerIds.filter((item) => item !== id)
    notifyDrawerStack()
  }
}

export type DrawerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface DrawerProps {
  open?: boolean
  visible?: boolean
  onClose: () => void
  title?: React.ReactNode
  description?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  size?: DrawerSize
  motion?: AbcMotionPreset
  width?: number | string
  placement?: 'right' | 'left'
  closeOnClickModal?: boolean
  /** 是否允许拖拽边缘调节宽度（默认开启） */
  resizable?: boolean
  /** 拖拽调节的最小像素宽度 */
  minWidth?: number
  /** 持久化记忆抽屉宽度的存储键 */
  storageKey?: string
  /** 打开子抽屉时当前抽屉是否自动向左层叠推移（默认开启） */
  push?: boolean
  /** 每层子抽屉推移像素值 */
  pushDistance?: number
  bodyClassName?: string
}

const DEFAULT_WIDTH_PX: Record<DrawerSize, number> = {
  xs: 320,
  sm: 380,
  md: 480,
  lg: 620,
  xl: 780,
  '2xl': 960,
}

/**
 * 企业级多级可调宽抽屉组件
 * 支持多抽屉栈层叠推挤（L1/L2 层级角标）、拖拽边缘无级调宽、宽度预设切换与本地记忆
 */
export const Drawer: React.FC<DrawerProps> = ({
  open,
  visible,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  motion,
  width,
  placement = 'right',
  closeOnClickModal = true,
  resizable = true,
  minWidth = 340,
  storageKey,
  push = true,
  pushDistance = 140,
  bodyClassName,
}) => {
  const drawerId = useId()
  const titleId = useId()
  const isOpen = open ?? visible ?? false
  const resolvedMotion = useAbcMotion(motion)
  const { isMounted, isVisible } = usePresence(isOpen, resolvedMotion === 'none' ? 0 : 220)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  const [, forceStackRender] = useState(0)
  const [isFullWidth, setIsFullWidth] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const [customWidth, setCustomWidth] = useState<number | null>(() => {
    if (!storageKey || typeof window === 'undefined') return null
    try {
      const saved = Number(window.localStorage.getItem(`abc_drawer_w_${storageKey}`))
      return Number.isFinite(saved) && saved >= minWidth ? saved : null
    } catch {
      return null
    }
  })

  // 维护全局抽屉层叠栈
  useEffect(() => {
    const listener = () => forceStackRender((n) => n + 1)
    drawerSubscribers.add(listener)
    return () => {
      drawerSubscribers.delete(listener)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      pushDrawerId(drawerId)
      return () => removeDrawerId(drawerId)
    }
    removeDrawerId(drawerId)
  }, [isOpen, drawerId])

  // 仅最顶层抽屉响应 Escape 键，避免多层同时关闭
  useEffect(() => {
    if (!isMounted) return
    const handleKeyDown = (e: KeyboardEvent) => {
      const topId = activeDrawerIds[activeDrawerIds.length - 1]
      if (e.key === 'Escape' && (!topId || topId === drawerId)) {
        e.stopPropagation()
        onCloseRef.current()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMounted, drawerId])

  const stackIndex = activeDrawerIds.indexOf(drawerId)
  const depthFromTop =
    stackIndex >= 0 ? Math.max(0, activeDrawerIds.length - 1 - stackIndex) : 0
  const levelNumber = stackIndex >= 0 ? stackIndex + 1 : 1

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)

    const onMove = (ev: MouseEvent) => {
      const maxAllowed = Math.max(minWidth, window.innerWidth - 32)
      const rawWidth =
        placement === 'right' ? window.innerWidth - ev.clientX : ev.clientX
      const clamped = Math.min(maxAllowed, Math.max(minWidth, rawWidth))
      setIsFullWidth(false)
      setCustomWidth(clamped)
      if (storageKey) {
        try {
          window.localStorage.setItem(`abc_drawer_w_${storageKey}`, String(Math.round(clamped)))
        } catch {
          // 忽略存储限制
        }
      }
    }

    const onUp = () => {
      setIsDragging(false)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  if (!isMounted || typeof document === 'undefined') return null

  const baseWidthStyle = isFullWidth
    ? '100dvw'
    : customWidth
      ? `${customWidth}px`
      : typeof width === 'number'
        ? `${width}px`
        : width ?? `min(${DEFAULT_WIDTH_PX[size]}px, 92dvw)`

  const pushOffsetPx = push && depthFromTop > 0 ? depthFromTop * pushDistance : 0
  const pushScale = push && depthFromTop > 0 ? Math.max(0.92, 1 - depthFromTop * 0.025) : 1
  const pushSign = placement === 'right' ? -1 : 1

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      aria-label={!title ? '侧边抽屉面板' : undefined}
      style={{ zIndex: 1020 + Math.max(0, stackIndex) * 10 }}
      className="fixed inset-0 flex overflow-hidden"
    >
      {/* 遮罩背景 */}
      <div
        onClick={() => {
          if (closeOnClickModal) onClose()
        }}
        data-motion={resolvedMotion}
        className={cn(
          'fixed inset-0 bg-slate-950/45 backdrop-blur-[1.5px] overscroll-contain',
          resolvedMotion !== 'none' && (isVisible ? 'abc-animate-fade-in' : 'abc-animate-fade-out')
        )}
      />

      {/* 抽屉主面板 */}
      <div
        data-motion={resolvedMotion}
        style={{
          width: baseWidthStyle,
          transform:
            pushOffsetPx > 0
              ? `translate3d(${pushSign * pushOffsetPx}px, 0, 0) scale(${pushScale})`
              : undefined,
        }}
        className={cn(
          'relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)]',
          !isDragging && resolvedMotion !== 'none' && 'transition-transform duration-[var(--abc-motion-base)] ease-out',
          placement === 'right' ? 'ml-auto border-l' : 'mr-auto border-r',
          resolvedMotion !== 'none' &&
            (placement === 'right'
              ? isVisible
                ? 'abc-animate-drawer-right-in'
                : 'abc-animate-drawer-right-out'
              : isVisible
                ? 'abc-animate-drawer-left-in'
                : 'abc-animate-drawer-left-out')
        )}
      >
        {/* 边缘拖拽调宽手柄 */}
        {resizable && !isFullWidth && (
          <div
            role="separator"
            aria-orientation="vertical"
            aria-label="拖拽调节抽屉宽度"
            onMouseDown={handleResizeStart}
            className={cn(
              'group absolute top-0 bottom-0 z-20 flex w-2 items-center justify-center cursor-col-resize select-none',
              placement === 'right' ? '-left-1' : '-right-1'
            )}
          >
            <div className="h-12 w-1 rounded-full bg-transparent transition-colors group-hover:bg-[var(--abc-primary)]/60" />
            <GripVertical className="pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        )}

        {/* 顶栏 */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] px-5 py-3.5">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              {activeDrawerIds.length > 1 && (
                <span className="inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--abc-primary)]">
                  <Layers className="h-2.5 w-2.5" />
                  L{levelNumber}
                </span>
              )}
              {title && (
                <h2 id={titleId} className="truncate text-sm font-semibold text-[var(--abc-fg)]">
                  {title}
                </h2>
              )}
            </div>
            {description && (
              <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">{description}</p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {resizable && (
              <button
                type="button"
                aria-label={isFullWidth ? '还原默认宽度' : '全宽展开'}
                onClick={() => setIsFullWidth((v) => !v)}
                className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                {isFullWidth ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
              </button>
            )}
            <button
              type="button"
              aria-label="关闭抽屉"
              onClick={onClose}
              className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 内容区 */}
        <div className={cn('flex-1 overflow-y-auto px-5 py-4 text-xs', bodyClassName)}>
          {children}
        </div>

        {/* 底栏 */}
        {footer && (
          <div className="flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

export default Drawer
