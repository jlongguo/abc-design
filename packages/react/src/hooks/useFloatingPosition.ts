import type React from 'react'
import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

export type FloatingPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'rightStart'

export type FloatingSide = 'top' | 'bottom' | 'left' | 'right'

export interface UseFloatingPositionOptions {
  /** 浮层是否处于挂载可见周期 */
  open: boolean
  /** 触发器元素引用 */
  triggerRef: React.RefObject<HTMLElement | null>
  /** 浮层面板元素引用 */
  floatingRef: React.RefObject<HTMLElement | null>
  /** 期望弹出方位 */
  placement?: FloatingPlacement
  /** 触发器与浮层间距像素（默认 6） */
  offset?: number
  /** 是否自动同步触发器宽度作为浮层最小宽度（用于 Select 等下拉选择器） */
  matchWidth?: boolean
  /** 距离视口边缘的安全留白像素（默认 8） */
  viewportPadding?: number
}

export interface FloatingPositionResult {
  style: React.CSSProperties
  actualSide: FloatingSide
  /** 箭头在主轴方向相对浮层左上角的像素偏移量 */
  arrowOffset: number
  portalContainer: HTMLElement | null
  update: () => void
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * 解析浮层挂载的顶层安全容器：
 * 当触发器位于通过 showModal() 晋升至浏览器 #top-layer 的原生 <dialog open> 内部时，
 * 若盲目 Portal 到 document.body，会被模态层的背景 inert 机制拦截点击且绘制在遮罩下方；
 * 挂载到最近的 dialog[open] 既能逃逸内部滚动区的 overflow 裁剪，又保留在同一个 #top-layer 中。
 */
export function getOverlayPortalContainer(anchor?: Element | null): HTMLElement | null {
  if (typeof document === 'undefined') return null
  const parentModalDialog = anchor?.closest?.('dialog[open]') as HTMLElement | null
  return parentModalDialog ?? document.body
}

function parsePlacement(placement: FloatingPlacement): {
  side: FloatingSide
  align: 'center' | 'start' | 'end'
} {
  switch (placement) {
    case 'bottomLeft':
      return { side: 'bottom', align: 'start' }
    case 'bottomRight':
      return { side: 'bottom', align: 'end' }
    case 'topLeft':
      return { side: 'top', align: 'start' }
    case 'topRight':
      return { side: 'top', align: 'end' }
    case 'rightStart':
      return { side: 'right', align: 'start' }
    case 'top':
    case 'bottom':
    case 'left':
    case 'right':
      return { side: placement, align: 'center' }
  }
}

function resolveTransformOrigin(
  side: FloatingSide,
  align: 'center' | 'start' | 'end'
): string {
  if (side === 'bottom') {
    if (align === 'start') return 'top left'
    if (align === 'end') return 'top right'
    return 'top center'
  }
  if (side === 'top') {
    if (align === 'start') return 'bottom left'
    if (align === 'end') return 'bottom right'
    return 'bottom center'
  }
  if (side === 'left') {
    return align === 'start' ? 'right top' : 'right center'
  }
  return align === 'start' ? 'left top' : 'left center'
}

/**
 * 视口感知的浮层坐标计算与碰撞翻转引擎
 * 自动监听窗口缩放、任意嵌套滚动容器滚动及浮层自身尺寸变化，实时翻转越界方向并修正 transform-origin。
 */
export function useFloatingPosition({
  open,
  triggerRef,
  floatingRef,
  placement = 'bottomLeft',
  offset = 6,
  matchWidth = false,
  viewportPadding = 8,
}: UseFloatingPositionOptions): FloatingPositionResult {
  const { side: preferredSide, align } = parsePlacement(placement)

  const [state, setState] = useState<{
    top: number
    left: number
    minWidth?: number
    actualSide: FloatingSide
    arrowOffset: number
    transformOrigin: string
    positioned: boolean
  }>(() => ({
    top: 0,
    left: 0,
    minWidth: undefined,
    actualSide: preferredSide,
    arrowOffset: 16,
    transformOrigin: resolveTransformOrigin(preferredSide, align),
    positioned: false,
  }))

  const update = useCallback(() => {
    if (typeof window === 'undefined' || !triggerRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const floatEl = floatingRef.current
    const floatRect = floatEl?.getBoundingClientRect()

    const vw = window.innerWidth || 1024
    const vh = window.innerHeight || 768
    const pad = viewportPadding

    // 优先读取不受 CSS scale 入场动画影响的布局宽高，防止缩放过程造成坐标二次跳变
    const layoutW = floatEl ? floatEl.offsetWidth : 0
    const layoutH = floatEl ? floatEl.offsetHeight : 0
    const rawFloatW = layoutW || floatRect?.width || (matchWidth ? triggerRect.width : 180)
    const floatW = matchWidth ? Math.max(rawFloatW, triggerRect.width) : rawFloatW
    const floatH = layoutH || floatRect?.height || 40

    // 在 jsdom 等零几何布局测试环境中保持稳定默认坐标
    if (
      triggerRect.width === 0 &&
      triggerRect.height === 0 &&
      triggerRect.top === 0 &&
      triggerRect.left === 0
    ) {
      setState({
        top: offset,
        left: pad,
        minWidth: matchWidth && triggerRect.width > 0 ? triggerRect.width : undefined,
        actualSide: preferredSide,
        arrowOffset: 16,
        transformOrigin: resolveTransformOrigin(preferredSide, align),
        positioned: true,
      })
      return
    }

    let actualSide: FloatingSide = preferredSide

    // 垂直或水平越界碰撞翻转判定
    if (preferredSide === 'bottom') {
      const spaceBelow = vh - triggerRect.bottom - offset - pad
      const spaceAbove = triggerRect.top - offset - pad
      if (floatH > spaceBelow && spaceAbove > spaceBelow) {
        actualSide = 'top'
      }
    } else if (preferredSide === 'top') {
      const spaceAbove = triggerRect.top - offset - pad
      const spaceBelow = vh - triggerRect.bottom - offset - pad
      if (floatH > spaceAbove && spaceBelow > spaceAbove) {
        actualSide = 'bottom'
      }
    } else if (preferredSide === 'left') {
      const spaceLeft = triggerRect.left - offset - pad
      const spaceRight = vw - triggerRect.right - offset - pad
      if (floatW > spaceLeft && spaceRight > spaceLeft) {
        actualSide = 'right'
      }
    } else if (preferredSide === 'right') {
      const spaceRight = vw - triggerRect.right - offset - pad
      const spaceLeft = triggerRect.left - offset - pad
      if (floatW > spaceRight && spaceLeft > spaceRight) {
        actualSide = 'left'
      }
    }

    let top = 0
    let left = 0

    if (actualSide === 'bottom' || actualSide === 'top') {
      top =
        actualSide === 'bottom'
          ? triggerRect.bottom + offset
          : triggerRect.top - floatH - offset

      if (align === 'start') {
        left = triggerRect.left
      } else if (align === 'end') {
        left = triggerRect.right - floatW
      } else {
        left = triggerRect.left + triggerRect.width / 2 - floatW / 2
      }
    } else {
      left =
        actualSide === 'right'
          ? triggerRect.right + offset
          : triggerRect.left - floatW - offset

      if (align === 'start') {
        top = triggerRect.top
      } else if (align === 'end') {
        top = triggerRect.bottom - floatH
      } else {
        top = triggerRect.top + triggerRect.height / 2 - floatH / 2
      }
    }

    // 钳制到安全视口内，防止贴边截断
    const maxLeft = Math.max(pad, vw - floatW - pad)
    const maxTop = Math.max(pad, vh - floatH - pad)
    const clampedLeft = Math.min(Math.max(pad, left), maxLeft)
    const clampedTop = Math.min(Math.max(pad, top), maxTop)

    // 计算箭头指向触发器中心点的相对偏移
    const arrowOffset =
      actualSide === 'top' || actualSide === 'bottom'
        ? Math.min(
            Math.max(10, triggerRect.left + triggerRect.width / 2 - clampedLeft),
            Math.max(10, floatW - 10)
          )
        : Math.min(
            Math.max(10, triggerRect.top + triggerRect.height / 2 - clampedTop),
            Math.max(10, floatH - 10)
          )

    const transformOrigin = resolveTransformOrigin(actualSide, align)
    const minWidth = matchWidth ? Math.round(triggerRect.width) : undefined

    setState((prev) => {
      if (
        prev.positioned &&
        Math.abs(prev.top - clampedTop) < 0.5 &&
        Math.abs(prev.left - clampedLeft) < 0.5 &&
        prev.minWidth === minWidth &&
        prev.actualSide === actualSide &&
        Math.abs(prev.arrowOffset - arrowOffset) < 0.5 &&
        prev.transformOrigin === transformOrigin
      ) {
        return prev
      }
      return {
        top: Math.round(clampedTop * 10) / 10,
        left: Math.round(clampedLeft * 10) / 10,
        minWidth,
        actualSide,
        arrowOffset: Math.round(arrowOffset),
        transformOrigin,
        positioned: true,
      }
    })
  }, [triggerRef, floatingRef, preferredSide, align, offset, matchWidth, viewportPadding])

  useIsomorphicLayoutEffect(() => {
    if (!open) {
      setState((prev) => (prev.positioned ? { ...prev, positioned: false } : prev))
      return
    }
    update()
    // 首帧渲染后二次校准真实浮层宽高
    const raf =
      typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function'
        ? window.requestAnimationFrame(update)
        : 0
    return () => {
      if (raf && typeof window !== 'undefined') {
        window.cancelAnimationFrame(raf)
      }
    }
  }, [open, update])

  useEffect(() => {
    if (!open || typeof window === 'undefined') return

    window.addEventListener('resize', update, { passive: true })
    window.addEventListener('scroll', update, true)

    let ro: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => update())
      if (floatingRef.current) ro.observe(floatingRef.current)
      if (triggerRef.current) ro.observe(triggerRef.current)
    }

    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update, true)
      ro?.disconnect()
    }
  }, [open, update, floatingRef, triggerRef])

  const portalContainer = open ? getOverlayPortalContainer(triggerRef.current) : null

  return {
    style: {
      position: 'fixed',
      top: `${state.top}px`,
      left: `${state.left}px`,
      minWidth: state.minWidth ? `${state.minWidth}px` : undefined,
      transformOrigin: state.transformOrigin,
      // 尚未完成首帧同步坐标测算前先隐藏，防止残影在 (0, 0) 或上次位置闪现一帧
      visibility: open && !state.positioned ? 'hidden' : undefined,
    },
    actualSide: state.actualSide,
    arrowOffset: state.arrowOffset,
    portalContainer,
    update,
  }
}
