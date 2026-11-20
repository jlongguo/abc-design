import React, { useEffect, useMemo, useRef, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import {
  AlertCircle,
  Download,
  Eye,
  Image as ImageIcon,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks'
import { useControllableState } from '../../hooks/useControllableState'
import { getInheritedAbcTheme } from '../../hooks/useFloatingPosition'
import { cn } from '../../utils/cn'
import Dialog, { type DialogSize } from '../feedback/Dialog'

export interface ImagePreviewLabels {
  zoomOut?: string
  zoomIn?: string
  rotate?: string
  reset?: string
  resetAriaLabel?: string
}

export interface ImagePreviewProps {
  /** 支持远程图片直链、DataURL 或原始内联 <svg>...</svg> 代码 */
  src?: string | null
  alt?: string
  size?: AbcSize
  motion?: AbcMotionPreset
  width?: number | string
  height?: number | string
  rounded?: boolean
  fit?: 'cover' | 'contain'
  placeholder?: React.ReactNode
  className?: string
  /** 是否允许点击打开灯箱放大旋转查看（默认开启） */
  zoomable?: boolean
  /** 受控灯箱打开状态 */
  open?: boolean
  /** 灯箱打开/关闭状态变更回调 */
  onOpenChange?: (open: boolean) => void
  /** 仅渲染受控灯箱模式（用于外部自定义缩略图或视口帧容器触发大图检视） */
  lightboxOnly?: boolean
  /** 灯箱标题（默认使用 alt） */
  lightboxTitle?: React.ReactNode
  /** 灯箱弹窗宽度规格（默认 lg；全景截图可使用 2xl/3xl） */
  lightboxSize?: DialogSize
  /** 是否在灯箱底部工具栏展示下载原图按钮 */
  downloadable?: boolean
  /** 下载文件名（默认 image.png） */
  downloadFileName?: string
  /** 下载按钮文案（默认「下载原图」） */
  downloadLabel?: React.ReactNode
  /** 显式指定灯箱主题（不传时自动从挂载点祖先树继承亮暗主题） */
  theme?: 'light' | 'dark'
  /** 灯箱底部说明文案 */
  footerHint?: React.ReactNode
  /** 当灯箱已开启且 src 动态更新（如实时截图帧流）时保留当前缩放与旋转视角 */
  preserveTransformOnSrcChange?: boolean
  /** 灯箱工具栏多语言按钮文案 */
  labels?: ImagePreviewLabels
}

const IMAGE_PREVIEW_SIZE_PX: Record<AbcSize, number> = {
  xs: 28,
  sm: 40,
  md: 52,
  lg: 64,
}

export function isSvgSource(src?: string | null): boolean {
  if (!src) return false
  return src.trim().startsWith('<svg')
}

/**
 * 统一图形缩略图与灯箱预览组件
 * 原生兼容常规图片 URL 与内联 SVG 源码字符串，支持受控/非受控灯箱、缩放/旋转/复位/下载与主题自动继承
 */
export const ImagePreview: React.FC<ImagePreviewProps> = ({
  src,
  alt = '图片预览',
  size,
  motion,
  width,
  height,
  rounded = false,
  fit = 'contain',
  placeholder,
  className,
  zoomable = true,
  open: controlledOpen,
  onOpenChange,
  lightboxOnly = false,
  lightboxTitle,
  lightboxSize = 'lg',
  downloadable = false,
  downloadFileName = 'image.png',
  downloadLabel = '下载原图',
  theme,
  footerHint = '按 ESC 或点击背景任意处关闭大图预览',
  preserveTransformOnSrcChange = false,
  labels,
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const resolvedWidth = width ?? IMAGE_PREVIEW_SIZE_PX[resolvedSize]
  const resolvedHeight = height ?? IMAGE_PREVIEW_SIZE_PX[resolvedSize]
  const [hasError, setHasError] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: false,
    onChange: onOpenChange,
  })
  const [inheritedTheme, setInheritedTheme] = useState<'light' | 'dark' | undefined>(undefined)
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const thumbRef = useRef<HTMLDivElement>(null)
  const anchorRef = useRef<HTMLSpanElement>(null)
  const zoomOutLabel = labels?.zoomOut ?? '缩小'
  const zoomInLabel = labels?.zoomIn ?? '放大'
  const rotateLabel = labels?.rotate ?? '旋转'
  const resetLabel = labels?.reset ?? '重置'
  const resetAriaLabel = labels?.resetAriaLabel ?? '重置视图'

  const trimmed = typeof src === 'string' ? src.trim() : ''
  const isInlineSvg = isSvgSource(trimmed)

  const resolvedImgSrc = useMemo(() => {
    if (!trimmed) return ''
    if (isInlineSvg && trimmed.endsWith('</svg>')) {
      return `data:image/svg+xml;utf8,${encodeURIComponent(trimmed)}`
    }
    return trimmed
  }, [trimmed, isInlineSvg])

  // 当外部绑定的图片直链或 SVG 代码修改时，立即重置错误标记；非实时流保活模式下同步复位缩放与角度
  useEffect(() => {
    setHasError(false)
    if (!preserveTransformOnSrcChange) {
      setScale(1)
      setRotate(0)
    }
  }, [trimmed, preserveTransformOnSrcChange])

  // 无论受控还是点击缩略图打开灯箱，均同步继承当前子树主题并复位初始视角
  useEffect(() => {
    if (!lightboxOpen) return
    const hostEl = thumbRef.current ?? anchorRef.current
    setInheritedTheme(getInheritedAbcTheme(hostEl))
    setScale(1)
    setRotate(0)
  }, [lightboxOpen])

  const effectiveTheme = theme ?? inheritedTheme
  const isDefaultView = scale === 1 && rotate === 0

  const lightboxDialog = (
    <Dialog
      open={Boolean(lightboxOpen && resolvedImgSrc)}
      onClose={() => setLightboxOpen(false)}
      data-abc-theme={effectiveTheme}
      data-playground-theme={effectiveTheme}
      title={lightboxTitle ?? alt}
      size={lightboxSize}
      motion={resolvedMotion}
      footer={
        <div
          data-abc-no-press-scale="true"
          className="flex w-full flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            aria-label={zoomOutLabel}
            onClick={() => setScale((s) => Math.max(0.4, Number((s - 0.2).toFixed(2))))}
            className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer"
          >
            <ZoomOut className="h-3.5 w-3.5" /> {zoomOutLabel}
          </button>
          <span className="min-w-14 text-center font-mono text-xs tabular-nums text-[var(--abc-fg-muted)]">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            aria-label={zoomInLabel}
            onClick={() => setScale((s) => Math.min(3, Number((s + 0.2).toFixed(2))))}
            className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer"
          >
            <ZoomIn className="h-3.5 w-3.5" /> {zoomInLabel}
          </button>
          <button
            type="button"
            aria-label={rotateLabel}
            onClick={() => setRotate((r) => (r + 90) % 360)}
            className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer"
          >
            <RotateCw className="h-3.5 w-3.5" /> {rotateLabel}
          </button>
          <button
            type="button"
            aria-label={resetAriaLabel}
            disabled={isDefaultView}
            onClick={() => {
              setScale(1)
              setRotate(0)
            }}
            className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" /> {resetLabel}
          </button>
          {downloadable && resolvedImgSrc && (
            <a
              href={resolvedImgSrc}
              download={downloadFileName}
              className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary)] px-2.5 py-1 text-xs font-medium text-[var(--abc-primary-fg)] hover:bg-[var(--abc-primary-hover)]"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{downloadLabel}</span>
            </a>
          )}
        </div>
      }
    >
      <div className="flex min-h-72 max-h-[72vh] flex-col items-center justify-center overflow-auto rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4 sm:p-6">
        <div
          style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
          className="transition-transform duration-150"
        >
          <img
            src={resolvedImgSrc}
            alt={alt}
            className="max-h-[66vh] max-w-full rounded object-contain"
          />
        </div>
      </div>
      {footerHint && (
        <p className="mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]">{footerHint}</p>
      )}
    </Dialog>
  )

  if (lightboxOnly) {
    return (
      <>
        <span ref={anchorRef} aria-hidden="true" className="hidden" />
        {lightboxDialog}
      </>
    )
  }

  if (!trimmed || hasError) {
    if (placeholder) return <>{placeholder}</>
    return (
      <div
        data-motion={resolvedMotion}
        title={hasError ? '图片加载失败，请检查 URL 是否有效' : '暂无图片'}
        style={{
          width: resolvedWidth,
          height: resolvedHeight,
          minWidth: typeof resolvedWidth === 'number' ? resolvedWidth : undefined,
        }}
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
    setInheritedTheme(getInheritedAbcTheme(thumbRef.current))
    setScale(1)
    setRotate(0)
    setLightboxOpen(true)
  }

  return (
    <>
      <div
        ref={thumbRef}
        role={zoomable ? 'button' : undefined}
        tabIndex={zoomable ? 0 : undefined}
        data-motion={resolvedMotion}
        data-abc-no-press-scale="true"
        title="点击预览大图 / 矢量图"
        aria-label={zoomable ? `预览 ${alt}` : undefined}
        onClick={openPreview}
        onKeyDown={(e) => {
          if (zoomable && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            openPreview(e as unknown as React.MouseEvent)
          }
        }}
        style={{
          width: resolvedWidth,
          height: resolvedHeight,
          minWidth: typeof resolvedWidth === 'number' ? resolvedWidth : undefined,
        }}
        className={cn(
          'group relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] transition-colors',
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

      {lightboxDialog}
    </>
  )
}

export default ImagePreview
