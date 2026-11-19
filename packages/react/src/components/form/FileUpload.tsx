import React, { useId, useRef, useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Eye,
  FileText,
  Loader2,
  Paperclip,
  Plus,
  RotateCcw,
  Trash2,
  Upload,
  UploadCloud,
  X,
} from 'lucide-react'
import { useControllableState } from '../../hooks/useControllableState'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'
import Dialog from '../feedback/Dialog'
import { Progress } from '../feedback/FeedbackExtras'

export type FileUploadStatus = 'uploading' | 'done' | 'error'
export type FileUploadVariant = 'dragger' | 'button' | 'card' | 'compact'
export type FileUploadListType = 'text' | 'picture'

export interface FileUploadItem {
  uid: string
  name: string
  size: number
  type?: string
  url?: string
  status?: FileUploadStatus
  percent?: number
  error?: string
}

export interface FileUploadProps {
  value?: FileUploadItem[]
  defaultValue?: FileUploadItem[]
  onChange?: (files: FileUploadItem[]) => void
  /** 自定义上传执行器（缺省时降级使用 AbcProvider.uploadAdapter 或本地对象 URL 预览） */
  customUpload?: (
    file: File,
    onProgress?: (percent: number) => void
  ) => Promise<string | { url: string }>
  /** 交互展示模式：拖拽大面板 (dragger) / 按钮触发 (button) / 卡片网格 (card) / 紧凑胶囊条 (compact) */
  variant?: FileUploadVariant
  /** 文件列表项视觉样式：纯文本列表 (text) 或图文缩略图列表 (picture) */
  listType?: FileUploadListType
  /** button / compact 模式的触发按钮文案 */
  buttonText?: React.ReactNode
  /** 点击图片/可预览项的回调（缺省时对带 url 的图片项自动打开内置灯箱预览） */
  onPreview?: (file: FileUploadItem) => void
  accept?: string
  multiple?: boolean
  maxCount?: number
  maxSizeMB?: number
  disabled?: boolean
  label?: React.ReactNode
  error?: string
  helperText?: React.ReactNode
  required?: boolean
  dragTitle?: React.ReactNode
  dragHint?: React.ReactNode
  id?: string
  className?: string
}

function formatFileSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 1024) return `${Math.max(0, bytes)} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function isPreviewableImage(item: FileUploadItem): boolean {
  if (!item.url) return false
  if (item.type?.startsWith('image/')) return true
  if (item.url.startsWith('data:image/')) return true
  return /\.(png|jpe?g|gif|webp|avif|bmp|svg)$/i.test(item.name)
}

function getFileExtBadge(name: string): string {
  const idx = name.lastIndexOf('.')
  if (idx < 0 || idx === name.length - 1) return 'FILE'
  return name.slice(idx + 1, idx + 5).toUpperCase()
}

function matchesAccept(file: File, accept?: string): boolean {
  if (!accept || !accept.trim()) return true
  const tokens = accept
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean)
  if (tokens.length === 0) return true

  const fileName = file.name.toLowerCase()
  const mime = (file.type || '').toLowerCase()
  return tokens.some((token) => {
    if (token.startsWith('.')) return fileName.endsWith(token)
    if (token.endsWith('/*')) {
      const prefix = token.slice(0, token.length - 1)
      return mime.startsWith(prefix)
    }
    return mime === token
  })
}

/**
 * 通用多文件拖拽上传与校验列表组件 (FileUpload)
 * 支持 dragger / button / card / compact 四种交互模式与 text / picture 双列表样式，
 * 遵循原生按钮焦点触发、类型/大小/数量前置校验、上传进度展示、图片灯箱预览与失败重试。
 */
export const FileUpload: React.FC<FileUploadProps> = ({
  value,
  defaultValue = [],
  onChange,
  customUpload,
  variant = 'dragger',
  listType = 'text',
  buttonText = '选择文件上传',
  onPreview,
  accept,
  multiple = true,
  maxCount,
  maxSizeMB = 20,
  disabled = false,
  label,
  error,
  helperText,
  required = false,
  dragTitle = '点击或拖拽文件至此处上传',
  dragHint,
  id,
  className,
}) => {
  const { uploadAdapter } = useAbcConfig()
  const generatedId = useId()
  const inputId = id || `abc-fileupload-${generatedId}`
  const feedbackId = `${inputId}-feedback`

  const [files, setFiles] = useControllableState<FileUploadItem[]>({
    value,
    defaultValue,
  })
  const [dragging, setDragging] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)
  const [previewItem, setPreviewItem] = useState<FileUploadItem | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const rawFilesRef = useRef<Map<string, File>>(new Map())
  const latestFilesRef = useRef<FileUploadItem[]>(files)
  latestFilesRef.current = files

  const updateFiles = (next: FileUploadItem[]) => {
    latestFilesRef.current = next
    setFiles(next)
    onChange?.(next)
  }

  const runUploadForUid = async (uid: string, file: File) => {
    const adapter = customUpload ?? uploadAdapter
    try {
      let resolvedUrl = ''
      if (adapter) {
        const res = await adapter(file, (percent: number) => {
          updateFiles(
            latestFilesRef.current.map((item) =>
              item.uid === uid ? { ...item, status: 'uploading', percent } : item
            )
          )
        })
        resolvedUrl = typeof res === 'string' ? res : res?.url ?? ''
      } else if (typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function') {
        resolvedUrl = URL.createObjectURL(file)
      }

      updateFiles(
        latestFilesRef.current.map((item) =>
          item.uid === uid
            ? { ...item, status: 'done', percent: 100, url: resolvedUrl, error: undefined }
            : item
        )
      )
    } catch (err) {
      const msg = err instanceof Error ? err.message : '文件上传失败'
      updateFiles(
        latestFilesRef.current.map((item) =>
          item.uid === uid ? { ...item, status: 'error', error: msg } : item
        )
      )
    }
  }

  const ingestFileList = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0 || disabled) return
    const incoming = Array.from(fileList)
    const maxBytes = maxSizeMB * 1024 * 1024
    const errors: string[] = []
    const acceptedFiles: File[] = []

    const availableSlots =
      typeof maxCount === 'number'
        ? Math.max(0, maxCount - latestFilesRef.current.length)
        : incoming.length

    for (const file of incoming) {
      if (!matchesAccept(file, accept)) {
        errors.push(`${file.name}: 不支持的文件格式（允许 ${accept}）`)
        continue
      }
      if (file.size > maxBytes) {
        errors.push(`${file.name}: 文件超过 ${maxSizeMB}MB 上限`)
        continue
      }
      if (multiple && acceptedFiles.length >= availableSlots) {
        errors.push(`最多上传 ${maxCount} 个文件`)
        break
      }
      acceptedFiles.push(file)
      if (!multiple) break
    }

    setValidationError(errors.length > 0 ? errors[0] : null)
    if (acceptedFiles.length === 0) return

    const newEntries: FileUploadItem[] = acceptedFiles.map((file, idx) => {
      const uid = `${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 8)}`
      rawFilesRef.current.set(uid, file)
      return {
        uid,
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading',
        percent: 25,
      }
    })

    const baseList = multiple ? latestFilesRef.current : []
    updateFiles([...baseList, ...newEntries])

    newEntries.forEach((entry, i) => {
      void runUploadForUid(entry.uid, acceptedFiles[i])
    })
  }

  const handleRemove = (uid: string) => {
    rawFilesRef.current.delete(uid)
    updateFiles(latestFilesRef.current.filter((item) => item.uid !== uid))
    setValidationError(null)
  }

  const handleRetry = (uid: string) => {
    const raw = rawFilesRef.current.get(uid)
    if (!raw) return
    updateFiles(
      latestFilesRef.current.map((item) =>
        item.uid === uid ? { ...item, status: 'uploading', percent: 25, error: undefined } : item
      )
    )
    void runUploadForUid(uid, raw)
  }

  const handlePreview = (item: FileUploadItem) => {
    if (onPreview) {
      onPreview(item)
      return
    }
    if (isPreviewableImage(item)) {
      setPreviewItem(item)
    }
  }

  const effectiveError = error || validationError || undefined
  const computedHint =
    dragHint ??
    [
      accept ? `支持格式: ${accept}` : null,
      maxSizeMB ? `单文件上限 ${maxSizeMB}MB` : null,
      typeof maxCount === 'number' ? `最多 ${maxCount} 个` : null,
    ]
      .filter(Boolean)
      .join(' · ')

  const reachedMax = typeof maxCount === 'number' && files.length >= maxCount

  const dropHandlers = {
    onDragOver: (e: React.DragEvent) => {
      e.preventDefault()
      if (!disabled) setDragging(true)
    },
    onDragLeave: () => setDragging(false),
    onDrop: (e: React.DragEvent) => {
      e.preventDefault()
      setDragging(false)
      ingestFileList(e.dataTransfer.files)
    },
  }

  const renderStandardList = () =>
    files.length > 0 ? (
      <ul className="mt-2.5 space-y-1.5" aria-label="已上传文件列表">
        {files.map((item) => {
          const canPreview = Boolean(onPreview || isPreviewableImage(item))
          return (
            <li
              key={item.uid}
              className={cn(
                'rounded-[var(--abc-radius-md)] border px-3 py-2 text-xs',
                item.status === 'error'
                  ? 'border-[var(--abc-danger)]/40 bg-[var(--abc-danger-soft)]/40'
                  : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)]'
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  {listType === 'picture' && isPreviewableImage(item) ? (
                    <img
                      src={item.url}
                      alt={item.name}
                      className="h-8 w-8 shrink-0 rounded border border-[var(--abc-border)] object-cover"
                    />
                  ) : item.status === 'uploading' ? (
                    <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-[var(--abc-primary)]" />
                  ) : item.status === 'error' ? (
                    <AlertCircle className="h-3.5 w-3.5 shrink-0 text-[var(--abc-danger)]" />
                  ) : (
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" />
                  )}
                  {!(listType === 'picture' && isPreviewableImage(item)) && (
                    <FileText className="h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" />
                  )}
                  <span className="truncate font-medium text-[var(--abc-fg)]">{item.name}</span>
                  <span className="shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)]">
                    {formatFileSize(item.size)}
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-1">
                  {canPreview && item.status !== 'error' && (
                    <button
                      type="button"
                      aria-label={`预览文件 ${item.name}`}
                      onClick={() => handlePreview(item)}
                      className="rounded p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                  )}
                  {item.status === 'error' && rawFilesRef.current.has(item.uid) ? (
                    <button
                      type="button"
                      disabled={disabled}
                      aria-label={`重试上传 ${item.name}`}
                      onClick={() => handleRetry(item.uid)}
                      className="rounded p-1 text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                  ) : null}
                  <button
                    type="button"
                    disabled={disabled}
                    aria-label={`删除文件 ${item.name}`}
                    onClick={() => handleRemove(item.uid)}
                    className="rounded p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-danger-soft)] hover:text-[var(--abc-danger)] disabled:opacity-40 cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {item.status === 'uploading' && typeof item.percent === 'number' ? (
                <div className="mt-1.5">
                  <Progress percent={item.percent} size="xs" showInfo={false} />
                </div>
              ) : null}

              {item.status === 'error' && item.error ? (
                <p role="alert" className="mt-1 text-[11px] text-[var(--abc-danger)]">
                  {item.error}
                </p>
              ) : null}
            </li>
          )
        })}
      </ul>
    ) : null

  return (
    <div data-slot="file-upload" data-variant={variant} className={cn('w-full', className)}>
      {label ? (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]"
        >
          {label}
          {required ? <span className="ml-0.5 text-[var(--abc-danger)]">*</span> : null}
        </label>
      ) : null}

      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="sr-only"
        onChange={(e) => {
          ingestFileList(e.target.files)
          e.currentTarget.value = ''
        }}
      />

      {/* 模式 1：Dragger 拖拽大面板（默认） */}
      {variant === 'dragger' && (
        <>
          <div
            {...dropHandlers}
            className={cn(
              'rounded-[var(--abc-radius-lg)] border border-dashed p-4 text-center transition-colors',
              dragging
                ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/50'
                : 'border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/40 hover:border-[var(--abc-border-strong)]',
              effectiveError && 'border-[var(--abc-danger)]',
              disabled && 'cursor-not-allowed opacity-60'
            )}
          >
            <button
              type="button"
              disabled={disabled}
              aria-describedby={effectiveError || helperText ? feedbackId : undefined}
              onClick={() => inputRef.current?.click()}
              className="flex w-full flex-col items-center justify-center gap-1.5 rounded py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] cursor-pointer disabled:cursor-not-allowed"
            >
              <UploadCloud className="h-7 w-7 text-[var(--abc-primary)]" aria-hidden="true" />
              <span className="text-xs font-medium text-[var(--abc-fg-primary)]">{dragTitle}</span>
              {computedHint ? (
                <span className="text-[11px] text-[var(--abc-fg-muted)]">{computedHint}</span>
              ) : null}
            </button>
          </div>
          {renderStandardList()}
        </>
      )}

      {/* 模式 2：Button 标准按钮触发模式 */}
      {variant === 'button' && (
        <div {...dropHandlers}>
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              disabled={disabled || (multiple && reachedMax)}
              aria-describedby={effectiveError || helperText ? feedbackId : undefined}
              onClick={() => inputRef.current?.click()}
              className={cn(
                'inline-flex h-[var(--abc-control-h-sm)] items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 text-xs font-medium text-[var(--abc-fg)] shadow-2xs transition-colors hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
                dragging && 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/40'
              )}
            >
              <Upload className="h-3.5 w-3.5" />
              <span>{buttonText}</span>
            </button>
            {computedHint ? (
              <span className="text-[11px] text-[var(--abc-fg-muted)]">{computedHint}</span>
            ) : null}
          </div>
          {renderStandardList()}
        </div>
      )}

      {/* 模式 3：Card 卡片网格模式 */}
      {variant === 'card' && (
        <div className="space-y-2">
          <div
            {...dropHandlers}
            className="grid grid-cols-2 gap-2.5 sm:grid-cols-3"
            aria-label="已上传文件列表"
          >
            {files.map((item) => {
              const isImg = isPreviewableImage(item)
              return (
                <div
                  key={item.uid}
                  className={cn(
                    'group relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-lg)] border p-2.5 text-xs',
                    item.status === 'error'
                      ? 'border-[var(--abc-danger)]/50 bg-[var(--abc-danger-soft)]/35'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)]'
                  )}
                >
                  <div className="mb-2 flex h-16 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)]">
                    {isImg ? (
                      <img
                        src={item.url}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 font-mono text-[10px] font-bold text-[var(--abc-fg-secondary)]">
                        {getFileExtBadge(item.name)}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      {item.status === 'uploading' ? (
                        <Loader2 className="h-3 w-3 shrink-0 animate-spin text-[var(--abc-primary)]" />
                      ) : item.status === 'error' ? (
                        <AlertCircle className="h-3 w-3 shrink-0 text-[var(--abc-danger)]" />
                      ) : (
                        <CheckCircle2 className="h-3 w-3 shrink-0 text-[var(--abc-success)]" />
                      )}
                      <span className="truncate font-medium text-[var(--abc-fg)]">{item.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]">
                      <span className="font-mono">{formatFileSize(item.size)}</span>
                      <div className="flex items-center gap-1">
                        {(onPreview || isImg) && item.status !== 'error' && (
                          <button
                            type="button"
                            aria-label={`预览文件 ${item.name}`}
                            onClick={() => handlePreview(item)}
                            className="rounded p-0.5 hover:text-[var(--abc-primary)] cursor-pointer"
                          >
                            <Eye className="h-3 w-3" />
                          </button>
                        )}
                        {item.status === 'error' && rawFilesRef.current.has(item.uid) && (
                          <button
                            type="button"
                            aria-label={`重试上传 ${item.name}`}
                            onClick={() => handleRetry(item.uid)}
                            className="rounded p-0.5 text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer"
                          >
                            <RotateCcw className="h-3 w-3" />
                          </button>
                        )}
                        <button
                          type="button"
                          disabled={disabled}
                          aria-label={`删除文件 ${item.name}`}
                          onClick={() => handleRemove(item.uid)}
                          className="rounded p-0.5 hover:text-[var(--abc-danger)] disabled:opacity-40 cursor-pointer"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    {item.status === 'uploading' && typeof item.percent === 'number' && (
                      <Progress percent={item.percent} size="xs" showInfo={false} />
                    )}
                    {item.status === 'error' && item.error && (
                      <p role="alert" className="truncate text-[10px] text-[var(--abc-danger)]">
                        {item.error}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}

            {(!multiple || !reachedMax) && !disabled && (
              <button
                type="button"
                aria-describedby={effectiveError || helperText ? feedbackId : undefined}
                onClick={() => inputRef.current?.click()}
                className={cn(
                  'flex min-h-[116px] flex-col items-center justify-center gap-1 rounded-[var(--abc-radius-lg)] border-2 border-dashed p-3 text-center text-xs text-[var(--abc-fg-muted)] transition-colors cursor-pointer',
                  dragging
                    ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/40 text-[var(--abc-primary)]'
                    : 'border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)]/35 hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]'
                )}
              >
                <Plus className="h-5 w-5" />
                <span className="font-medium">添加文件</span>
                {typeof maxCount === 'number' && (
                  <span className="font-mono text-[10px]">
                    ({files.length}/{maxCount})
                  </span>
                )}
              </button>
            )}
          </div>
          {computedHint && <p className="text-[11px] text-[var(--abc-fg-muted)]">{computedHint}</p>}
        </div>
      )}

      {/* 模式 4：Compact 紧凑单行附件胶囊条 */}
      {variant === 'compact' && (
        <div
          {...dropHandlers}
          className={cn(
            'flex flex-wrap items-center gap-1.5 rounded-[var(--abc-radius-md)] border px-2 py-1.5 transition-colors',
            dragging
              ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/40'
              : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)]',
            effectiveError && 'border-[var(--abc-danger)]',
            disabled && 'opacity-60 cursor-not-allowed'
          )}
        >
          <button
            type="button"
            disabled={disabled || (multiple && reachedMax)}
            aria-describedby={effectiveError || helperText ? feedbackId : undefined}
            onClick={() => inputRef.current?.click()}
            className="inline-flex h-6 shrink-0 items-center gap-1 rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary-soft)] px-2 text-[11px] font-medium text-[var(--abc-primary)] hover:opacity-90 disabled:opacity-45 cursor-pointer"
          >
            <Paperclip className="h-3 w-3" />
            <span>{buttonText}</span>
          </button>

          {files.length === 0 ? (
            <span className="text-[11px] text-[var(--abc-fg-muted)]">
              {computedHint || '点击或拖拽添加附件'}
            </span>
          ) : (
            files.map((item) => (
              <span
                key={item.uid}
                className={cn(
                  'inline-flex max-w-48 items-center gap-1 rounded-full border px-2 py-0.5 text-[11px]',
                  item.status === 'error'
                    ? 'border-[var(--abc-danger)]/50 bg-[var(--abc-danger-soft)]/50 text-[var(--abc-danger)]'
                    : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]'
                )}
              >
                {item.status === 'uploading' ? (
                  <Loader2 className="h-2.5 w-2.5 shrink-0 animate-spin text-[var(--abc-primary)]" />
                ) : item.status === 'error' ? (
                  <AlertCircle className="h-2.5 w-2.5 shrink-0 text-[var(--abc-danger)]" />
                ) : (
                  <CheckCircle2 className="h-2.5 w-2.5 shrink-0 text-[var(--abc-success)]" />
                )}
                <span className="truncate">{item.name}</span>
                {item.status === 'error' && rawFilesRef.current.has(item.uid) && (
                  <button
                    type="button"
                    aria-label={`重试上传 ${item.name}`}
                    onClick={() => handleRetry(item.uid)}
                    className="shrink-0 text-[var(--abc-primary)] cursor-pointer"
                  >
                    <RotateCcw className="h-2.5 w-2.5" />
                  </button>
                )}
                <button
                  type="button"
                  disabled={disabled}
                  aria-label={`删除文件 ${item.name}`}
                  onClick={() => handleRemove(item.uid)}
                  className="shrink-0 rounded-full hover:text-[var(--abc-danger)] disabled:opacity-40 cursor-pointer"
                >
                  <X className="h-2.5 w-2.5" />
                </button>
              </span>
            ))
          )}
        </div>
      )}

      {effectiveError ? (
        <p id={feedbackId} role="alert" className="mt-1.5 text-xs text-[var(--abc-danger)]">
          {effectiveError}
        </p>
      ) : helperText ? (
        <p id={feedbackId} className="mt-1.5 text-xs text-[var(--abc-fg-muted)]">
          {helperText}
        </p>
      ) : null}

      <Dialog
        open={Boolean(previewItem)}
        onClose={() => setPreviewItem(null)}
        title={previewItem?.name ?? '文件预览'}
        size="lg"
      >
        {previewItem?.url && (
          <div className="flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4">
            <img
              src={previewItem.url}
              alt={previewItem.name}
              className="max-h-96 max-w-full object-contain"
            />
          </div>
        )}
      </Dialog>
    </div>
  )
}

FileUpload.displayName = 'FileUpload'
export default FileUpload
