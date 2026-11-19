import {
  ArrowLeft,
  ArrowRight,
  ImagePlus,
  Loader2,
  Plus,
  Trash2,
  UploadCloud,
} from 'lucide-react'
import React, { useMemo, useRef, useState } from 'react'
import Button from '../../components/button/Button'
import { ImagePreview } from '../../components/display/ImagePreview'
import { Input } from '../../components/form/Input'
import Icon from '../../components/icon/Icon'
import { IconPicker } from '../../components/icon/IconPicker'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'

/* ==================== 1. 图片 URL 列表安全解析（彻底兼容含逗号的 DataURL） ==================== */
const URL_START_PATTERN = /^(https?:\/\/|\/|\.\.?\/|data:|blob:|<svg)/i

/**
 * 解析多图值（兼容数组、换行分隔或逗号分隔字符串，且完整保留 data:image/*;base64,... 等内含逗号的 DataURL）
 */
export function parseMultiImageValue(value: string | string[] | null | undefined): string[] {
  if (!value) return []
  if (Array.isArray(value)) {
    return value.map((s) => String(s ?? '').trim()).filter(Boolean)
  }
  const raw = String(value).trim()
  if (!raw) return []

  const tokens = raw.includes('\n') ? raw.split(/\r?\n/) : raw.split(',')
  const result: string[] = []

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].trim()
    if (!token) continue

    // 遇到 DataURL 头部（如 data:image/png;base64）时，持续缝合其 payload，直至下一个独立 URL 起始
    if (/^data:[^,\s]*$/i.test(token) && i + 1 < tokens.length) {
      let stitched = `${token},${tokens[i + 1].trim()}`
      i += 1
      while (i + 1 < tokens.length && !URL_START_PATTERN.test(tokens[i + 1].trim())) {
        stitched += `,${tokens[i + 1].trim()}`
        i += 1
      }
      result.push(stitched)
      continue
    }

    result.push(token)
  }

  return result
}

function readFileAsDataUrlFallback(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(new Error('文件读取失败'))
    reader.readAsDataURL(file)
  })
}

function isImageOrSvgFile(file: File): boolean {
  return (
    file.type.startsWith('image/') ||
    /\.(png|jpe?g|gif|webp|avif|bmp|ico|svg)$/i.test(file.name)
  )
}

export type ProMultiImageUploadVariant = 'picture-card' | 'picture-list' | 'compact-grid'

export interface ProMultiImageUploadProps {
  /** 图片 URL 列表（兼容逗号分隔字符串、DataURL 串或字符串数组） */
  value: string | string[]
  disabled?: boolean
  maxCount?: number
  /** 单张图片大小上限（MB，默认 10） */
  maxSizeMB?: number
  /** 允许的 MIME / 扩展名（默认 image/*,.svg） */
  accept?: string
  /** 展示交互模式：照片墙 (picture-card) / 图文列表 (picture-list) / 紧凑缩略网格 (compact-grid) */
  variant?: ProMultiImageUploadVariant
  /** 是否支持拖拽文件至上传区直接上传（默认 true） */
  draggable?: boolean
  /** 是否开启图片前后调序按钮（默认 false） */
  reorderable?: boolean
  /** 是否在首张图片左上角显示「封面」角标（默认 false） */
  showCoverBadge?: boolean
  customUpload?: (file: File) => Promise<{ url: string } | string | undefined>
  onChange: (val: string) => void
  className?: string
}

/**
 * 零业务耦合多图上传控件：通过 customUpload 或 AbcProvider.uploadAdapter 完成上传，
 * 支持照片墙 / 图文列表 / 紧凑网格三态模式、拖拽上传、灯箱预览、调序与移除。
 */
export const ProMultiImageUpload: React.FC<ProMultiImageUploadProps> = ({
  value,
  disabled = false,
  maxCount = 9,
  maxSizeMB = 10,
  accept = 'image/*,.svg',
  variant = 'picture-card',
  draggable = true,
  reorderable = false,
  showCoverBadge = false,
  customUpload,
  onChange,
  className,
}) => {
  const { uploadAdapter, toast } = useAbcConfig()
  const [uploading, setUploading] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const list = useMemo(() => parseMultiImageValue(value), [value])

  const processFiles = async (fileList: FileList | File[] | null) => {
    if (!fileList || fileList.length === 0 || disabled || uploading) return
    const files = Array.from(fileList)
    const nextList = [...list]
    const maxBytes = maxSizeMB * 1024 * 1024
    let addedCount = 0

    setUploading(true)
    try {
      for (let i = 0; i < files.length; i++) {
        if (nextList.length >= maxCount) {
          toast.error(`最多支持上传 ${maxCount} 张图片`)
          break
        }
        const file = files[i]
        if (!isImageOrSvgFile(file)) {
          toast.error(`${file.name} 不是有效的图片或 SVG 文件`)
          continue
        }
        if (file.size > maxBytes) {
          toast.error(`${file.name} 大小超过 ${maxSizeMB}MB 上限`)
          continue
        }

        let url = ''
        if (customUpload) {
          const res = await customUpload(file)
          url = typeof res === 'string' ? res : res?.url || ''
        } else if (uploadAdapter) {
          url = await uploadAdapter(file)
        } else {
          url = await readFileAsDataUrlFallback(file)
        }
        if (url) {
          nextList.push(url)
          addedCount += 1
        }
      }
      if (addedCount > 0) {
        onChange(nextList.join(','))
      }
    } catch (err: any) {
      toast.error(err?.message || '上传图片失败')
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const handleUploadFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    void processFiles(e.target.files)
  }

  const handleRemove = (index: number) => {
    if (disabled) return
    const nextList = list.filter((_, i) => i !== index)
    onChange(nextList.join(','))
  }

  const handleMove = (index: number, delta: -1 | 1) => {
    if (disabled) return
    const target = index + delta
    if (target < 0 || target >= list.length) return
    const nextList = [...list]
    const [moved] = nextList.splice(index, 1)
    nextList.splice(target, 0, moved)
    onChange(nextList.join(','))
  }

  const dragProps = draggable
    ? {
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
          if (!disabled && !uploading) void processFiles(e.dataTransfer.files)
        },
      }
    : {}

  const fileInputNode = (
    <input
      ref={fileInputRef}
      type="file"
      accept={accept}
      multiple
      className="hidden"
      disabled={disabled || uploading}
      onChange={handleUploadFiles}
    />
  )

  // 模式 2：图文列表模式 (picture-list)
  if (variant === 'picture-list') {
    return (
      <div
        data-slot="pro-multi-image-upload"
        data-variant={variant}
        className={cn('space-y-2.5', className)}
      >
        {list.length < maxCount && !disabled && (
          <label
            {...dragProps}
            className={cn(
              'flex cursor-pointer items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-dashed px-3.5 py-2.5 transition-colors',
              isDragOver
                ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/40'
                : 'border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)]/40 hover:border-[var(--abc-primary)]'
            )}
          >
            <div className="flex items-center gap-2.5 text-xs">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]">
                {uploading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <UploadCloud className="h-4 w-4" />
                )}
              </span>
              <div className="text-left">
                <div className="font-medium text-[var(--abc-fg)]">
                  {uploading ? '正在上传图片...' : '点击或拖拽图片到此添加'}
                </div>
                <div className="text-[11px] text-[var(--abc-fg-muted)]">
                  已上传 {list.length}/{maxCount} 张 · 单图不超过 {maxSizeMB}MB
                </div>
              </div>
            </div>
            <span className="shrink-0 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--abc-fg-secondary)]">
              选择图片
            </span>
            {fileInputNode}
          </label>
        )}

        {list.length > 0 && (
          <ul className="space-y-1.5" aria-label="已上传图片列表">
            {list.map((url, idx) => (
              <li
                key={`img-list-${idx}`}
                className="flex items-center justify-between gap-2.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2"
              >
                <div className="flex min-w-0 flex-1 items-center gap-2.5">
                  <div className="h-11 w-11 shrink-0 overflow-hidden rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]">
                    <ImagePreview
                      src={url}
                      width={44}
                      height={44}
                      fit="cover"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="truncate text-xs font-medium text-[var(--abc-fg)]">
                        图片资源 #{idx + 1}
                      </span>
                      {showCoverBadge && idx === 0 && (
                        <span className="shrink-0 rounded bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]">
                          封面
                        </span>
                      )}
                    </div>
                    <p className="truncate font-mono text-[10px] text-[var(--abc-fg-muted)]">
                      {url.startsWith('data:') ? `${url.slice(0, 32)}…` : url}
                    </p>
                  </div>
                </div>

                {!disabled && (
                  <div className="flex shrink-0 items-center gap-1">
                    {reorderable && (
                      <>
                        <button
                          type="button"
                          disabled={idx === 0}
                          aria-label="前移图片"
                          title="前移"
                          onClick={() => handleMove(idx, -1)}
                          className="rounded p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] disabled:opacity-35 cursor-pointer"
                        >
                          <ArrowLeft className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === list.length - 1}
                          aria-label="后移图片"
                          title="后移"
                          onClick={() => handleMove(idx, 1)}
                          className="rounded p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] disabled:opacity-35 cursor-pointer"
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      aria-label="移除图片"
                      title="移除图片"
                      onClick={() => handleRemove(idx)}
                      className="rounded p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-danger-soft)] hover:text-[var(--abc-danger)] cursor-pointer"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  // 模式 1 & 3：照片墙 (picture-card) 与 紧凑网格 (compact-grid)
  const isCompact = variant === 'compact-grid'
  const tileBoxClass = isCompact ? 'h-16 w-16' : 'h-24 w-24'
  const thumbPx = isCompact ? 64 : 96

  return (
    <div
      data-slot="pro-multi-image-upload"
      data-variant={variant}
      className={cn('flex flex-wrap', isCompact ? 'gap-2' : 'gap-3', className)}
    >
      {list.map((url, idx) => (
        <div
          key={`img-tile-${idx}`}
          className={cn(
            'group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]',
            tileBoxClass
          )}
        >
          <ImagePreview
            src={url}
            width={thumbPx}
            height={thumbPx}
            fit="cover"
            className="h-full w-full"
          />

          {showCoverBadge && idx === 0 && (
            <span className="pointer-events-none absolute top-1 left-1 rounded bg-[var(--abc-primary)] px-1.5 py-0.5 text-[9px] font-semibold text-[var(--abc-primary-fg)] shadow-2xs">
              封面
            </span>
          )}

          {!disabled && (
            <button
              type="button"
              onClick={() => handleRemove(idx)}
              aria-label="移除图片"
              title="移除图片"
              className="absolute top-1 right-1 rounded-full bg-[var(--abc-danger)]/90 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 cursor-pointer"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          )}

          {!disabled && reorderable && list.length > 1 && (
            <div className="absolute inset-x-1 bottom-1 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
              <button
                type="button"
                disabled={idx === 0}
                aria-label="前移图片"
                title="前移"
                onClick={(e) => {
                  e.stopPropagation()
                  handleMove(idx, -1)
                }}
                className="rounded bg-slate-950/70 p-0.5 text-white hover:bg-slate-950 disabled:opacity-30 cursor-pointer"
              >
                <ArrowLeft className="h-3 w-3" />
              </button>
              <button
                type="button"
                disabled={idx === list.length - 1}
                aria-label="后移图片"
                title="后移"
                onClick={(e) => {
                  e.stopPropagation()
                  handleMove(idx, 1)
                }}
                className="rounded bg-slate-950/70 p-0.5 text-white hover:bg-slate-950 disabled:opacity-30 cursor-pointer"
              >
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      ))}

      {list.length < maxCount && !disabled && (
        <label
          {...dragProps}
          className={cn(
            'flex cursor-pointer flex-col items-center justify-center gap-1 rounded-[var(--abc-radius-lg)] border-2 border-dashed text-[var(--abc-fg-muted)] transition-colors',
            tileBoxClass,
            isDragOver
              ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/40 text-[var(--abc-primary)]'
              : 'border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)]/40 hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]'
          )}
        >
          {uploading ? (
            <Loader2 className={cn(isCompact ? 'h-4 w-4' : 'h-5 w-5', 'animate-spin text-[var(--abc-primary)]')} />
          ) : isCompact ? (
            <ImagePlus className="h-4 w-4" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
          <span className={cn(isCompact ? 'text-[10px]' : 'text-[11px]')}>
            {uploading ? '上传中...' : isCompact ? `${list.length}/${maxCount}` : `上传(${list.length}/${maxCount})`}
          </span>
          {fileInputNode}
        </label>
      )}
    </div>
  )
}

export const MultiImageFieldControl = ProMultiImageUpload

export interface ProIconFieldControlProps {
  value: string
  disabled?: boolean
  placeholder?: string
  presetIcons?: string[]
  onChange: (val: string) => void
}

/**
 * 表单图标选择器增强控件：同时支持手动输入图标名、常用预设胶囊点选与唤起可视化图标库
 */
export const ProIconFieldControl: React.FC<ProIconFieldControlProps> = ({
  value,
  disabled = false,
  placeholder,
  presetIcons,
  onChange,
}) => {
  const [pickerOpen, setPickerOpen] = useState(false)

  if (!presetIcons || presetIcons.length === 0) {
    return (
      <IconPicker
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
      />
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]">
          <Icon name={value || 'Sparkles'} size={16} />
        </div>
        <div className="flex-1">
          <Input
            placeholder={placeholder || '输入或从右侧选择图标'}
            disabled={disabled}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          pressScale={false}
          disabled={disabled}
          onClick={() => setPickerOpen(true)}
        >
          打开图标库
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[11px] text-[var(--abc-fg-muted)]">常用推荐:</span>
        {presetIcons.map((preset) => (
          <button
            key={preset}
            type="button"
            disabled={disabled}
            onClick={() => onChange(preset)}
            className={cn(
              'inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border px-2 py-1 text-[11px] transition-colors cursor-pointer',
              value === preset
                ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                : 'border-[var(--abc-border)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]'
            )}
          >
            <Icon name={preset} size={12} />
            <span>{preset}</span>
          </button>
        ))}
      </div>
      <IconPicker
        open={pickerOpen}
        current={value}
        onClose={() => setPickerOpen(false)}
        onSelect={onChange}
      />
    </div>
  )
}
