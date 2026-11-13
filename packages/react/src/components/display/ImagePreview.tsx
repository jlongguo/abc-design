import React, { useEffect, useMemo, useState } from 'react'
import { AlertCircle, Eye, Image as ImageIcon, RotateCw, ZoomIn, ZoomOut } from 'lucide-react'
import { cn } from '../../utils/cn'
import Dialog from '../feedback/Dialog'

export interface ImagePreviewProps {
  /** 支持远程图片直链、DataURL 或原始内联 <svg>...</svg> 代码 */
  src?: string | null
  alt?: string
  width?: number | string
  height?: number | string
  rounded?: boolean
  fit?: 'cover' | 'contain'
  placeholder?: React.ReactNode
  className?: string
  /** 是否允许点击打开灯箱放大旋转查看（默认开启） */
  zoomable?: boolean
}

export function isSvgSource(src?: string | null): boolean {
  if (!src) return false
  return src.trim().startsWith('<svg')
}

/**
 * 统一图形缩略图与灯箱预览组件
 * 原生兼容常规图片 URL 与内联 SVG 源码字符串，并在 src 变更时自动复位加载异常状态
 */
export const ImagePreview: React.FC<ImagePreviewProps> = ({
  src,
  alt = '图片预览',
  width = 40,
  height = 40,
  rounded = false,
  fit = 'contain',
  placeholder,
  className,
  zoomable = true,
}) => {
  const [hasError, setHasError] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)

  const trimmed = typeof src === 'string' ? src.trim() : ''
  const isInlineSvg = isSvgSource(trimmed)

  const resolvedImgSrc = useMemo(() => {
    if (!trimmed) return ''
    if (isInlineSvg && trimmed.endsWith('</svg>')) {
      return `data:image/svg+xml;utf8,${encodeURIComponent(trimmed)}`
    }
    return trimmed
  }, [trimmed, isInlineSvg])

  // 当外部绑定的图片直链或 SVG 代码修改时，立即重置错误标记以重新尝试渲染
  useEffect(() => {
    setHasError(false)
  }, [trimmed])

  if (!trimmed || hasError) {
    if (placeholder) return <>{placeholder}</>
    return (
      <div
        title={hasError ? '图片加载失败，请检查 URL 是否有效' : '暂无图片'}
        style={{ width, height, minWidth: typeof width === 'number' ? width : undefined }}
        className={cn(
          'inline-flex shrink-0 items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] select-none',
          rounded ? 'rounded-full' : 'rounded-[var(--abc-radius-md)]',
          hasError && 'border-[var(--abc-danger)]/40 bg-[var(--abc-danger-soft)]/50 text-[var(--abc-danger)]',
          className
        )}
      >
        {hasError ? <AlertCircle className="h-4 w-4" /> : <ImageIcon className="h-4 w-4" />}
      </div>
    )
  }

  const openPreview = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!zoomable) return
    setScale(1)
    setRotate(0)
    setLightboxOpen(true)
  }

  return (
    <>
      <div
        role={zoomable ? 'button' : undefined}
        tabIndex={zoomable ? 0 : undefined}
        title="点击预览大图 / 矢量图"
        aria-label={zoomable ? `预览 ${alt}` : undefined}
        onClick={openPreview}
        onKeyDown={(e) => {
          if (zoomable && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            openPreview(e as unknown as React.MouseEvent)
          }
        }}
        style={{ width, height, minWidth: typeof width === 'number' ? width : undefined }}
        className={cn(
          'group relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]',
          rounded ? 'rounded-full' : 'rounded-[var(--abc-radius-md)]',
          zoomable && 'cursor-zoom-in hover:border-[var(--abc-primary)]',
          className
        )}
      >
        <img
          src={resolvedImgSrc}
          alt={alt}
          onError={() => setHasError(true)}
          className={cn(
            'h-full w-full transition-transform duration-150 group-hover:scale-105',
            isInlineSvg || fit === 'contain' ? 'object-contain p-1' : 'object-cover'
          )}
        />

        {zoomable && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <Eye className="h-3.5 w-3.5" />
          </span>
        )}
      </div>

      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={alt}
        size="lg"
        footer={
          <div className="flex w-full items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setScale((s) => Math.max(0.4, Number((s - 0.2).toFixed(2))))}
              className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer"
            >
              <ZoomOut className="h-3.5 w-3.5" /> 缩小
            </button>
            <span className="min-w-14 text-center font-mono text-xs tabular-nums text-[var(--abc-fg-muted)]">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setScale((s) => Math.min(3, Number((s + 0.2).toFixed(2))))}
              className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer"
            >
              <ZoomIn className="h-3.5 w-3.5" /> 放大
            </button>
            <button
              type="button"
              onClick={() => setRotate((r) => (r + 90) % 360)}
              className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer"
            >
              <RotateCw className="h-3.5 w-3.5" /> 旋转
            </button>
          </div>
        }
      >
        <div className="flex min-h-72 flex-col items-center justify-center overflow-auto rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-6">
          <div
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            className="transition-transform duration-150"
          >
            <img src={resolvedImgSrc} alt={alt} className="max-h-96 max-w-full object-contain" />
          </div>
        </div>
        <p className="mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]">
          按 ESC 或点击背景任意处关闭大图预览
        </p>
      </Dialog>
    </>
  )
}

export default ImagePreview
