import React, { useId, useRef, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { Camera, Eye, Loader2, Plus, RefreshCw, Trash2, Upload, UploadCloud } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'
import Dialog from '../feedback/Dialog'

export type ImageUploadVariant = 'dropzone' | 'avatar' | 'card' | 'button'
export type ImageUploadShape = 'rounded' | 'circle'

export interface ImageUploadProps {
  /** 当前图片 URL 或内联 <svg> 字符串 */
  value?: string
  /** 上传成功或清空后的回调 */
  onChange?: (nextUrl: string) => void
  /** 展示交互模式：拖拽面板 (dropzone) / 头像上传 (avatar) / 照片卡片 (card) / 紧凑按钮 (button) */
  variant?: ImageUploadVariant
  /** 预览容器圆角形态（在 avatar / card 模式下尤为明显，avatar 模式默认 circle） */
  shape?: ImageUploadShape
  /** button 模式的触发按钮文案 */
  buttonText?: React.ReactNode
  /** 可选内联表单标签 */
  label?: React.ReactNode
  /** 底部辅助说明文案 */
  helperText?: React.ReactNode
  /** 校验错误信息 */
  error?: string
  /** 允许的 MIME 类型 */
  accept?: string
  /** 最大单文件体积（MB） */
  maxSizeMB?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 局部自定义上传函数（优先级高于 AbcProvider.uploadAdapter；若均未注入则自动转 DataURL 预览用于原型演练） */
  customUpload?: (file: File) => Promise<string>
  size?: AbcSize
  motion?: AbcMotionPreset
  placeholder?: string
  className?: string
}

const UPLOAD_BOX_SIZE: Record<AbcSize, string> = {
  xs: 'min-h-[82px] w-full p-2.5',
  sm: 'min-h-[108px] w-full p-3.5',
  md: 'min-h-[124px] w-full p-4',
  lg: 'min-h-[144px] w-full p-5',
}

const PREVIEW_THUMB_SIZE: Record<AbcSize, string> = {
  xs: 'h-14 w-14',
  sm: 'h-20 w-20',
  md: 'h-24 w-24',
  lg: 'h-28 w-28',
}

const AVATAR_SIZE: Record<AbcSize, string> = {
  xs: 'h-16 w-16',
  sm: 'h-20 w-20',
  md: 'h-24 w-24',
  lg: 'h-28 w-28',
}

const CARD_SIZE: Record<AbcSize, string> = {
  xs: 'h-20 w-20',
  sm: 'h-24 w-24',
  md: 'h-28 w-28',
  lg: 'h-32 w-32',
}

function isInlineSvgMarkup(raw?: string): boolean {
  return Boolean(raw && raw.trim().startsWith('<svg'))
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(new Error('文件读取失败'))
    reader.readAsDataURL(file)
  })
}

/**
 * 零业务耦合图片/SVG 上传组件
 * 支持 dropzone（拖拽大面板）、avatar（头像）、card（照片卡片）与 button（紧凑按钮）四种交互展示模式
 */
export const ImageUpload: React.FC<ImageUploadProps> = ({
  value = '',
  onChange,
  variant = 'dropzone',
  shape,
  buttonText = '选择图片',
  label,
  helperText,
  error,
  accept = 'image/*,.svg',
  maxSizeMB = 5,
  disabled = false,
  customUpload,
  size,
  motion,
  placeholder = '点击或拖拽图片至此处上传',
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const resolvedShape: ImageUploadShape = shape ?? (variant === 'avatar' ? 'circle' : 'rounded')
  const inputId = useId()
  const fileRef = useRef<HTMLInputElement>(null)
  const { uploadAdapter, toast } = useAbcConfig()
  const [uploading, setUploading] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)

  const handleFile = async (file?: File) => {
    if (!file || disabled || uploading) return
    const isImageOrSvg =
      file.type.startsWith('image/') ||
      /\.(png|jpe?g|gif|webp|avif|bmp|ico|svg)$/i.test(file.name)
    if (!isImageOrSvg) {
      toast.error('只能上传图片或 SVG 格式文件')
      return
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`上传图片大小不能超过 ${maxSizeMB}MB`)
      return
    }

    setUploading(true)
    try {
      const uploader = customUpload ?? uploadAdapter ?? readFileAsDataUrl
      const url = await uploader(file)
      if (url) {
        onChange?.(url)
        toast.success('上传成功')
      } else {
        toast.error('上传失败，未获取到图片地址')
      }
    } catch (err: any) {
      toast.error(err?.message || '上传图片失败，请重试')
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  const trimmed = value?.trim() ?? ''
  const isSvg = isInlineSvgMarkup(trimmed)
  const shapeRadiusClass =
    resolvedShape === 'circle' ? 'rounded-full' : 'rounded-[var(--abc-radius-lg)]'

  const dragHandlers = {
    onDragOver: (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!disabled && !uploading) setIsDragOver(true)
    },
    onDragLeave: (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragOver(false)
    },
    onDrop: (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragOver(false)
      if (!disabled && !uploading) void handleFile(e.dataTransfer.files?.[0])
    },
  }

  const renderPreviewMedia = (imgClassName = 'h-full w-full object-contain p-1') =>
    isSvg ? (
      <div
        className="flex h-full w-full items-center justify-center p-2 [&>svg]:max-h-full [&>svg]:max-w-full"
        dangerouslySetInnerHTML={{ __html: trimmed }}
      />
    ) : (
      <img src={trimmed} alt="凭证预览" className={imgClassName} />
    )

  return (
    <div
      data-slot="image-upload"
      data-variant={variant}
      data-motion={resolvedMotion}
      className="w-full"
    >
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]"
        >
          {label}
        </label>
      )}

      <input
        ref={fileRef}
        id={inputId}
        type="file"
        accept={accept}
        disabled={disabled || uploading}
        onChange={(e) => void handleFile(e.target.files?.[0])}
        className="sr-only"
      />

      {/* 模式 A：Avatar 头像上传 */}
      {variant === 'avatar' && (
        <div className={cn('flex items-center gap-3.5', className)}>
          <div
            {...dragHandlers}
            onClick={() => {
              if (!disabled && !uploading) fileRef.current?.click()
            }}
            className={cn(
              'group relative flex shrink-0 items-center justify-center overflow-hidden border border-dashed bg-[var(--abc-bg-muted)]/70 transition-all',
              AVATAR_SIZE[resolvedSize],
              shapeRadiusClass,
              isDragOver
                ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]'
                : 'border-[var(--abc-border-strong)]',
              !disabled && 'cursor-pointer hover:border-[var(--abc-primary)]',
              disabled && 'opacity-60 cursor-not-allowed',
              error && 'border-[var(--abc-danger)]'
            )}
          >
            {trimmed ? (
              <>
                {renderPreviewMedia('h-full w-full object-cover')}
                {!disabled && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 bg-slate-950/55 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <Camera className="h-4 w-4" />
                    <span className="text-[10px] font-medium">更换</span>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-1 text-[var(--abc-fg-muted)]">
                <Camera className="h-5 w-5" />
                <span className="text-[10px]">上传头像</span>
              </div>
            )}
            {uploading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--abc-bg-surface)]/80">
                <Loader2 className="h-4 w-4 animate-spin text-[var(--abc-primary)]" />
              </div>
            )}
          </div>

          <div className="min-w-0 space-y-1.5 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                disabled={disabled || uploading}
                onClick={() => fileRef.current?.click()}
                className="inline-flex items-center gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)] disabled:opacity-50 cursor-pointer"
              >
                <Upload className="h-3 w-3" />
                <span>{trimmed ? '更换头像' : '上传头像'}</span>
              </button>
              {trimmed && (
                <>
                  <button
                    type="button"
                    onClick={() => setPreviewOpen(true)}
                    className="inline-flex items-center gap-1 text-xs text-[var(--abc-primary)] hover:underline cursor-pointer"
                  >
                    <Eye className="h-3 w-3" />
                    <span>预览</span>
                  </button>
                  {!disabled && (
                    <button
                      type="button"
                      onClick={() => onChange?.('')}
                      className="inline-flex items-center gap-1 text-xs text-[var(--abc-danger)] hover:underline cursor-pointer"
                    >
                      <Trash2 className="h-3 w-3" />
                      <span>移除</span>
                    </button>
                  )}
                </>
              )}
            </div>
            <p className="text-[11px] text-[var(--abc-fg-muted)]">
              支持拖拽或点击上传，单文件不超过 {maxSizeMB}MB
            </p>
          </div>
        </div>
      )}

      {/* 模式 B：Card 照片卡片单图框 */}
      {variant === 'card' && (
        <div
          {...dragHandlers}
          onClick={() => {
            if (!trimmed && !disabled && !uploading) fileRef.current?.click()
          }}
          className={cn(
            'group relative inline-flex items-center justify-center overflow-hidden border-2 border-dashed bg-[var(--abc-bg-muted)]/60 transition-all',
            CARD_SIZE[resolvedSize],
            shapeRadiusClass,
            isDragOver
              ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]'
              : trimmed
                ? 'border-solid border-[var(--abc-border)] bg-[var(--abc-bg-surface)]'
                : 'border-[var(--abc-border-strong)] hover:border-[var(--abc-primary)]',
            !trimmed && !disabled && 'cursor-pointer',
            disabled && 'opacity-60 cursor-not-allowed',
            error && 'border-[var(--abc-danger)]',
            className
          )}
        >
          {trimmed ? (
            <>
              {renderPreviewMedia('h-full w-full object-cover')}
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 bg-slate-950/55 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <button
                  type="button"
                  aria-label="查看大图"
                  title="查看大图"
                  onClick={(e) => {
                    e.stopPropagation()
                    setPreviewOpen(true)
                  }}
                  className="rounded-full bg-white/15 p-1.5 hover:bg-white/25 cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                </button>
                {!disabled && (
                  <>
                    <button
                      type="button"
                      aria-label="更换图片"
                      title="更换图片"
                      onClick={(e) => {
                        e.stopPropagation()
                        fileRef.current?.click()
                      }}
                      className="rounded-full bg-white/15 p-1.5 hover:bg-white/25 cursor-pointer"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="删除"
                      title="删除"
                      onClick={(e) => {
                        e.stopPropagation()
                        onChange?.('')
                      }}
                      className="rounded-full bg-rose-500/80 p-1.5 hover:bg-rose-500 cursor-pointer"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </>
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-1 text-[var(--abc-fg-muted)] select-none">
              <Plus className="h-5 w-5" />
              <span className="text-[11px]">上传图片</span>
            </div>
          )}

          {uploading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--abc-bg-surface)]/80">
              <Loader2 className="h-4 w-4 animate-spin text-[var(--abc-primary)]" />
            </div>
          )}
        </div>
      )}

      {/* 模式 C：Button 紧凑按钮触发模式 */}
      {variant === 'button' && (
        <div
          {...dragHandlers}
          className={cn(
            'flex flex-wrap items-center gap-2.5 rounded-[var(--abc-radius-md)] transition-colors',
            isDragOver && 'ring-2 ring-[var(--abc-ring)]',
            className
          )}
        >
          <button
            type="button"
            disabled={disabled || uploading}
            onClick={() => fileRef.current?.click()}
            className="inline-flex h-[var(--abc-control-h-sm)] items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 text-xs font-medium text-[var(--abc-fg)] shadow-2xs transition-colors hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {uploading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin text-[var(--abc-primary)]" />
            ) : (
              <Upload className="h-3.5 w-3.5" />
            )}
            <span>{uploading ? '上传中...' : buttonText}</span>
          </button>

          {trimmed && (
            <div className="inline-flex items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 py-1 pr-2 pl-1.5 text-xs">
              <div className="h-6 w-6 shrink-0 overflow-hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]">
                {renderPreviewMedia('h-full w-full object-cover')}
              </div>
              <span className="max-w-36 truncate text-[11px] font-medium text-[var(--abc-fg-secondary)]">
                已上传图片
              </span>
              <button
                type="button"
                aria-label="查看大图"
                onClick={() => setPreviewOpen(true)}
                className="rounded p-0.5 text-[var(--abc-fg-muted)] hover:text-[var(--abc-primary)] cursor-pointer"
              >
                <Eye className="h-3.5 w-3.5" />
              </button>
              {!disabled && (
                <button
                  type="button"
                  aria-label="删除"
                  onClick={() => onChange?.('')}
                  className="rounded p-0.5 text-[var(--abc-fg-muted)] hover:text-[var(--abc-danger)] cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* 模式 D：Dropzone 默认拖拽大面板 */}
      {variant === 'dropzone' && (
        <div
          onClick={() => {
            if (!trimmed && !disabled && !uploading) {
              fileRef.current?.click()
            }
          }}
          {...dragHandlers}
          className={cn(
            'group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all',
            isDragOver
              ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]'
              : 'border-[var(--abc-border-strong)]',
            !disabled && !isDragOver && 'hover:border-[var(--abc-primary)]',
            !trimmed && !disabled && 'cursor-pointer',
            disabled && 'opacity-60 cursor-not-allowed',
            error && 'border-[var(--abc-danger)]',
            UPLOAD_BOX_SIZE[resolvedSize],
            className
          )}
        >
          {trimmed ? (
            <div className="flex flex-col items-center gap-3.5 sm:flex-row">
              <div
                className={cn(
                  'relative flex shrink-0 items-center justify-center overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]',
                  PREVIEW_THUMB_SIZE[resolvedSize],
                  resolvedShape === 'circle' ? 'rounded-full' : 'rounded-[var(--abc-radius-md)]'
                )}
              >
                {renderPreviewMedia('h-full w-full object-contain p-1')}
                <button
                  type="button"
                  aria-label="查看大图"
                  title="查看大图"
                  onClick={(e) => {
                    e.stopPropagation()
                    setPreviewOpen(true)
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-slate-950/55 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-1 flex-col items-center space-y-1 text-center sm:items-start sm:text-left">
                <div className="text-xs font-medium text-[var(--abc-fg)]">已上传图片资源</div>
                <p className="text-[11px] text-[var(--abc-fg-muted)]">
                  支持点击放大预览、重新选择或移除
                </p>
                {!disabled && (
                  <div className="flex items-center gap-2.5 pt-1">
                    <button
                      type="button"
                      disabled={uploading}
                      onClick={(e) => {
                        e.stopPropagation()
                        fileRef.current?.click()
                      }}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer"
                    >
                      <RefreshCw className={cn('h-3 w-3', uploading && 'animate-spin')} />
                      <span>更换图片</span>
                    </button>
                    <span className="text-[var(--abc-border-strong)]">|</span>
                    <button
                      type="button"
                      disabled={uploading}
                      onClick={(e) => {
                        e.stopPropagation()
                        onChange?.('')
                      }}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-danger)] hover:underline cursor-pointer"
                    >
                      <Trash2 className="h-3 w-3" />
                      <span>删除</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-2 text-center select-none">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]">
                <UploadCloud className="h-4.5 w-4.5" />
              </div>
              <p className="text-xs font-medium text-[var(--abc-fg-secondary)]">{placeholder}</p>
              <p className="mt-0.5 text-[11px] text-[var(--abc-fg-muted)]">
                支持 JPG / PNG / WEBP / SVG，单文件不超过 {maxSizeMB}MB
              </p>
            </div>
          )}

          {uploading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs">
              <Loader2 className="h-5 w-5 animate-spin text-[var(--abc-primary)]" />
              <span className="text-xs font-medium text-[var(--abc-fg-secondary)]">正在上传中...</span>
            </div>
          )}
        </div>
      )}

      {error && <p className="mt-1.5 text-xs text-[var(--abc-danger)]">{error}</p>}
      {helperText && !error && (
        <p className="mt-1.5 text-[11px] text-[var(--abc-fg-muted)]">{helperText}</p>
      )}

      <Dialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        title="图形资源预览"
        size="lg"
      >
        <div className="flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4">
          {isSvg ? (
            <div
              className="flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto"
              dangerouslySetInnerHTML={{ __html: trimmed }}
            />
          ) : (
            <img src={trimmed} alt="大图预览" className="max-h-96 max-w-full object-contain" />
          )}
        </div>
      </Dialog>
    </div>
  )
}

export default ImageUpload
