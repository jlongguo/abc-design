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

  const renderWatermarkLayer = useCallback(() => {
    const host = containerRef.current
    if (!host) return

    if (!enabled || !content || (Array.isArray(content) && content.length === 0)) {
      if (watermarkRef.current && watermarkRef.current.parentNode === host) {
        host.removeChild(watermarkRef.current)
      }
      watermarkRef.current = null
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
    markEl.setAttribute('data-watermark-overlay', 'true')

    markEl.setAttribute(
      'style',
      [
        'position: absolute',
        'inset: 0',
        'pointer-events: none',
        'z-index: 40',
        `background-image: url(${dataUrl})`,
        'background-repeat: repeat',
        `background-size: ${tileW}px ${tileH}px`,
      ].join(' !important; ') + ' !important;'
    )

    if (markEl.parentNode !== host) {
      host.appendChild(markEl)
    }
  }, [content, enabled, gap, resolvedTheme, rotate])

  useEffect(() => {
    renderWatermarkLayer()
    const host = containerRef.current
    if (!host || !enabled || typeof MutationObserver === 'undefined') return

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'childList') {
          const removed = Array.from(m.removedNodes)
          if (watermarkRef.current && removed.includes(watermarkRef.current)) {
            watermarkRef.current = null
            renderWatermarkLayer()
            break
          }
        } else if (m.type === 'attributes' && m.target === watermarkRef.current) {
          renderWatermarkLayer()
          break
        }
      }
    })

    observer.observe(host, {
      childList: true,
      attributes: true,
      subtree: true,
      attributeFilter: ['style', 'class', 'hidden'],
    })

    return () => observer.disconnect()
  }, [enabled, renderWatermarkLayer])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {children}
    </div>
  )
}

export default Watermark
