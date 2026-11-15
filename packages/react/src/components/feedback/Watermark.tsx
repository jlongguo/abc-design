import React, { useCallback, useEffect, useRef } from 'react'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'

export interface WatermarkProps {
  /** 水印单行或多行文案 */
  content?: string | string[]
  /** 是否启用渲染 */
  enabled?: boolean
  /** 旋转角度（度） */
  rotate?: number
  /** 横纵向间距 */
  gap?: [number, number]
  children?: React.ReactNode
  className?: string
}

/**
 * Retina 高清 Canvas 防篡改水印容器
 * 内置 MutationObserver 守护：当水印节点在控制台被删除或 style 属性被恶意隐藏时自动重建恢复
 * 严格防自激闭环：更新前主动切断监听、仅监听直接子节点与自身属性，杜绝微任务死循环
 */
export const Watermark: React.FC<WatermarkProps> = ({
  content,
  enabled = true,
  rotate = -22,
  gap = [110, 96],
  children,
  className,
}) => {
  const { resolvedTheme } = useAbcConfig()
  const containerRef = useRef<HTMLDivElement>(null)
  const watermarkRef = useRef<HTMLDivElement | null>(null)
  const expectedStyleRef = useRef<string>('')
  const observerRef = useRef<MutationObserver | null>(null)

  const renderWatermarkLayer = useCallback(() => {
    const host = containerRef.current
    if (!host) return

    // 1. 内部进行 DOM 变更前，主动断开 MutationObserver，防止自身修改 style/node 触发死循环
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }

    if (!enabled || !content || (Array.isArray(content) && content.length === 0)) {
      if (watermarkRef.current && watermarkRef.current.parentNode === host) {
        host.removeChild(watermarkRef.current)
      }
      watermarkRef.current = null
      expectedStyleRef.current = ''
      return
    }

    if (typeof document === 'undefined') return
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const lines = Array.isArray(content) ? content : [content]
    const ratio = Math.max(window.devicePixelRatio || 1, 1)
    const tileW = 210 + gap[0]
    const tileH = 90 + gap[1]
    canvas.width = tileW * ratio
    canvas.height = tileH * ratio

    let dataUrl = ''
    try {
      ctx.scale(ratio, ratio)
      ctx.translate(tileW / 2, tileH / 2)
      ctx.rotate((rotate * Math.PI) / 180)
      ctx.font = '500 12px Inter, -apple-system, sans-serif'
      ctx.fillStyle =
        resolvedTheme === 'dark' ? 'rgba(226, 232, 240, 0.065)' : 'rgba(15, 23, 42, 0.055)'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      lines.forEach((line, idx) => {
        const yOffset = (idx - (lines.length - 1) / 2) * 18
        ctx.fillText(line, 0, yOffset)
      })
      dataUrl = canvas.toDataURL()
    } catch {
      return
    }

    if (!dataUrl) return

    let markEl = watermarkRef.current
    if (!markEl) {
      markEl = document.createElement('div')
      watermarkRef.current = markEl
    }
    if (markEl.getAttribute('data-watermark-overlay') !== 'true') {
      markEl.setAttribute('data-watermark-overlay', 'true')
    }

    const expectedStyle = [
      'position: absolute',
      'inset: 0',
      'pointer-events: none',
      'z-index: 40',
      `background-image: url(${dataUrl})`,
      'background-repeat: repeat',
      `background-size: ${tileW}px ${tileH}px`,
    ].join(' !important; ') + ' !important;'

    expectedStyleRef.current = expectedStyle

    if (markEl.getAttribute('style') !== expectedStyle) {
      markEl.setAttribute('style', expectedStyle)
    }

    if (markEl.parentNode !== host) {
      host.appendChild(markEl)
    }

    // 2. 仅在支持 MutationObserver 环境下挂载安全防篡改监听
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver((mutations) => {
        const currentHost = containerRef.current
        const currentMark = watermarkRef.current
        if (!currentHost || !currentMark) return

        let needsRestore = false
        for (const m of mutations) {
          if (m.type === 'childList') {
            const removed = Array.from(m.removedNodes)
            // 只有当水印节点本身被外部恶意移除时才需要重新挂载
            if (removed.includes(currentMark)) {
              needsRestore = true
              break
            }
          } else if (m.type === 'attributes' && m.target === currentMark) {
            // 只有当水印节点的样式或显隐属性被篡改偏离 expectedStyle 时才恢复
            const currentStyle = currentMark.getAttribute('style') || ''
            if (currentStyle !== expectedStyleRef.current || currentMark.hidden) {
              needsRestore = true
              break
            }
          }
        }

        if (needsRestore) {
          renderWatermarkLayer()
        }
      })

      observerRef.current = observer
      // 精确监听：仅监听 host 的直接子节点变化（subtree: false 防止监听内部复杂组件产生微任务风暴）
      observer.observe(host, { childList: true, subtree: false })
      // 精确监听：仅监听水印节点自身的 style/class/hidden 属性篡改
      observer.observe(markEl, {
        attributes: true,
        attributeFilter: ['style', 'class', 'hidden'],
      })
    }
  }, [content, enabled, gap, resolvedTheme, rotate])

  useEffect(() => {
    renderWatermarkLayer()
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [renderWatermarkLayer])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {children}
    </div>
  )
}

export default Watermark
