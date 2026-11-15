import React, { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset } from '@abc-design/tokens'
import { GripVertical, Layers, Maximize2, Minimize2, X } from 'lucide-react'
import { useAbcDrawerCascadeMode, useAbcMotion } from '../../hooks'
import { usePresence } from '../../hooks/usePresence'
import { cn } from '../../utils/cn'

/** 全局活跃抽屉栈项：支撑多级抽屉自动计算宽度与平级并排/层叠推挤 */
export interface ActiveDrawerEntry {
  id: string
  cascadeMode?: 'stack' | 'adjacent'
  widthPx: number
}

let activeDrawers: ActiveDrawerEntry[] = []
const drawerSubscribers = new Set<() => void>()

function notifyDrawerStack() {
  drawerSubscribers.forEach((fn) => fn())
}

function updateDrawerInStack(entry: ActiveDrawerEntry) {
  const existingIndex = activeDrawers.findIndex((item) => item.id === entry.id)
  if (existingIndex >= 0) {
    const existing = activeDrawers[existingIndex]
    if (existing.cascadeMode !== entry.cascadeMode || existing.widthPx !== entry.widthPx) {
      activeDrawers[existingIndex] = entry
      notifyDrawerStack()
    }
  } else {
    activeDrawers = [...activeDrawers, entry]
    notifyDrawerStack()
  }
}

function removeDrawerFromStack(id: string) {
  if (activeDrawers.some((item) => item.id === id)) {
    activeDrawers = activeDrawers.filter((item) => item.id !== id)
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
  /** 每层子抽屉推移像素值（stack 模式下生效，默认 140） */
  pushDistance?: number
  /** 多级抽屉展示交互模式：'stack' 为传统向左堆叠推挤缩放，'adjacent' 为平级并排展开以便两级同时清晰观测 */
  cascadeMode?: 'stack' | 'adjacent'
  /** 平级并排展示模式下的向左推移间距（默认 560px） */
  adjacentOffset?: number
  bodyClassName?: string
  className?: string
  role?: string
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
 *
 * 【容器交互选型与多级交互铁律】
 * 1. 对于大表单交互操作展示必须使用抽屉（Drawer），全高右侧贴合具备吸附 Header/Footer 与原生垂直滚动流，避免居中 Modal 在大表单下顶部被顶出可视区。
 * 2. 打开一层抽屉是大表单、在该表单上需要打开另一个表单也是大表单的情况，必须使用子级抽屉（二级抽屉 L1 -> L2），优先使用 cascadeMode="adjacent"（平级并排对比展示），避免多层遮罩覆盖与内容割裂。
 * 3. 如果是小表单或轻量确认操作（操作项较小、步骤简单），使用 Modal/Dialog，支持多级堆叠展示（z-index 自动高于抽屉）。
 * 4. 支持多抽屉栈自动协同管理、视口宽度碰撞自适应等比缩放、拖拽边缘无级调宽与本地记忆。
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
  cascadeMode,
  adjacentOffset,
  bodyClassName,
  className,
  role = 'dialog',
}) => {
  const globalCascadeMode = useAbcDrawerCascadeMode(cascadeMode)
  const resolvedCascadeMode = cascadeMode ?? globalCascadeMode
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

  const resolvedWidthPx =
    typeof width === 'number'
      ? width
      : customWidth ?? (size ? DEFAULT_WIDTH_PX[size] : 560) ?? 560

  useEffect(() => {
    if (isOpen) {
      updateDrawerInStack({
        id: drawerId,
        cascadeMode: resolvedCascadeMode,
        widthPx: resolvedWidthPx,
      })
      return () => removeDrawerFromStack(drawerId)
    }
    removeDrawerFromStack(drawerId)
  }, [isOpen, drawerId, resolvedCascadeMode, resolvedWidthPx])

  // 仅最顶层抽屉响应 Escape 键，避免多层同时关闭
  useEffect(() => {
    if (!isMounted) return
    const handleKeyDown = (e: KeyboardEvent) => {
      const topEntry = activeDrawers[activeDrawers.length - 1]
      if (e.key === 'Escape' && (!topEntry || topEntry.id === drawerId)) {
        e.stopPropagation()
        onCloseRef.current()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMounted, drawerId])

  // 视口宽度动态感知
  const [viewportW, setViewportW] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1440
  )
  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleResize = () => setViewportW(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const stackIndex = activeDrawers.findIndex((item) => item.id === drawerId)
  const depthFromTop =
    stackIndex >= 0 ? Math.max(0, activeDrawers.length - 1 - stackIndex) : 0
  const levelNumber = stackIndex >= 0 ? stackIndex + 1 : 1

  const higherDrawers = stackIndex >= 0 ? activeDrawers.slice(stackIndex + 1) : []
  // 只要栈内任意抽屉开启了 adjacent 模式，整个多级抽屉栈自动协同并排平级展开，杜绝由于单层未配置导致降级为遮挡堆叠
  const hasAnyAdjacentInStack = activeDrawers.some((item) => item.cascadeMode === 'adjacent')
  const isAdjacent = resolvedCascadeMode === 'adjacent' || hasAnyAdjacentInStack

  // 计算上方所有子抽屉的累加宽度（即右侧所有子抽屉的占位宽度）
  const childTotalWidthPx = higherDrawers.reduce((sum, item) => sum + (item.widthPx || 560), 0)

  // 视口保护自适应：当多级抽屉平级并排展开时，确保底层抽屉宽度适度自适应屏幕剩余可用空间，且左边界绝不超出可视区
  let effectiveWidthPx = resolvedWidthPx
  if (isAdjacent && depthFromTop > 0 && childTotalWidthPx > 0) {
    // 保留左侧安全边距 24px，若底层+顶层总宽超限，按比例动态压缩，确保 L1 完整展现
    const maxSafeWidth = Math.max(minWidth, viewportW - childTotalWidthPx - 24)
    if (effectiveWidthPx > maxSafeWidth) {
      effectiveWidthPx = maxSafeWidth
    }
  }

  const pushOffsetPx =
    push && depthFromTop > 0
      ? isAdjacent
        ? (adjacentOffset ?? childTotalWidthPx)
        : depthFromTop * pushDistance
      : 0
  const pushScale =
    push && depthFromTop > 0
      ? isAdjacent
        ? 1 // 并排模式严禁缩放，保持 100% 原始观测精度
        : Math.max(0.92, 1 - depthFromTop * 0.025)
      : 1
  const pushSign = placement === 'right' ? -1 : 1

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
        ? `${effectiveWidthPx}px`
        : `${effectiveWidthPx}px`

  return createPortal(
    <div
      role={role}
      aria-modal={role === 'dialog' ? 'true' : undefined}
      aria-labelledby={title ? titleId : undefined}
      aria-label={!title ? '侧边抽屉面板' : undefined}
      style={{ zIndex: 1020 + Math.max(0, stackIndex) * 10 }}
      className="fixed inset-0 flex overflow-hidden pointer-events-none"
    >
      {/* 遮罩背景：仅最底层的抽屉（stackIndex === 0）负责暗化主视图；并排 adjacent 模式下子级抽屉绝不渲染黑色遮罩盖死底层抽屉 */}
      {stackIndex === 0 ? (
        <div
          onClick={() => {
            if (closeOnClickModal) onClose()
          }}
          data-motion={resolvedMotion}
          className={cn(
            'fixed inset-0 overscroll-contain transition-opacity bg-slate-950/45 backdrop-blur-[1.5px] pointer-events-auto',
            resolvedMotion !== 'none' && (isVisible ? 'abc-animate-fade-in' : 'abc-animate-fade-out')
          )}
        />
      ) : null}

      {/* 抽屉主面板 */}
      <div
        data-motion={resolvedMotion}
        style={{
          width: baseWidthStyle,
          transform:
            resolvedMotion === 'none'
              ? (pushOffsetPx > 0 ? `translate3d(${pushSign * pushOffsetPx}px, 0, 0) scale(${pushScale})` : undefined)
              : !isVisible
                ? (placement === 'right' ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)')
                : pushOffsetPx > 0
                  ? `translate3d(${pushSign * pushOffsetPx}px, 0, 0) scale(${pushScale})`
                  : 'translate3d(0, 0, 0)',
          transitionProperty: 'transform, width',
          transitionDuration: resolvedMotion === 'none' || isDragging ? '0ms' : 'var(--abc-motion-base, 240ms)',
          transitionTimingFunction: 'var(--abc-ease-standard, cubic-bezier(0.16, 1, 0.3, 1))',
        }}
        className={cn(
          'relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] pointer-events-auto',
          // 并排模式下去除破坏性重阴影，使用更清晰的高对比度分割线
          isAdjacent && stackIndex > 0
            ? 'shadow-[-12px_0_28px_-6px_rgba(0,0,0,0.18)] border-l-2'
            : 'shadow-[var(--abc-shadow-dialog)]',
          placement === 'right' ? 'ml-auto border-l' : 'mr-auto border-r',
          className
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
              {activeDrawers.length > 1 && (
                <span
                  title={isAdjacent ? `并排抽屉层级: ${levelNumber} 级` : `抽屉栈深度: ${levelNumber} 级`}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono text-[10px] font-semibold transition-colors',
                    depthFromTop === 0
                      ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#fff)]'
                      : 'border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]'
                  )}
                >
                  <Layers className="h-2.5 w-2.5" />
                  L{levelNumber}
                  {isAdjacent && (
                    <span className="font-sans text-[9px] opacity-80">
                      {depthFromTop === 0 ? '(当前)' : '(参考)'}
                    </span>
                  )}
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

export function DrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn('flex items-start justify-between gap-4 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/30 px-6 py-5', className)}
      {...props}
    />
  )
}

export function DrawerTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="drawer-title"
      className={cn('text-lg font-semibold tracking-tight text-[var(--abc-fg)]', className)}
      {...props}
    />
  )
}

export function DrawerDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="drawer-description"
      className={cn('mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]', className)}
      {...props}
    />
  )
}

export function DrawerBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="drawer-body"
      className={cn('flex-1 space-y-6 overflow-y-auto px-6 py-5', className)}
      {...props}
    />
  )
}

export function DrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(
        'flex flex-wrap items-center justify-between gap-3 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 px-6 py-4',
        className
      )}
      {...props}
    />
  )
}

export default Drawer
