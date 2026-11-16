import React, { useId, useRef, useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  FileText,
  Loader2,
  RotateCcw,
  Trash2,
  UploadCloud,
} from 'lucide-react'
import { useControllableState } from '../../hooks/useControllableState'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'
import { Progress } from '../feedback/FeedbackExtras'

export type FileUploadStatus = 'uploading' | 'done' | 'error'

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
 * 严格遵循原生按钮焦点触发、类型/大小/数量前置校验、上传进度展示与无障碍错误广播。
 */
export const FileUpload: React.FC<FileUploadProps> = ({
  value,
  defaultValue = [],
  onChange,
  customUpload,
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
      typeof maxCount === 'number' ? Math.max(0, maxCount - latestFilesRef.current.length) : incoming.length

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

  return (
    <div className={cn('w-full', className)}>
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

      <div
        onDragOver={(e) => {
          e.preventDefault()
          if (!disabled) setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          ingestFileList(e.dataTransfer.files)
        }}
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
          className="flex w-full flex-col items-center justify-center gap-1.5 rounded py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]"
        >
          <UploadCloud className="h-7 w-7 text-[var(--abc-primary)]" aria-hidden="true" />
          <span className="text-xs font-medium text-[var(--abc-fg-primary)]">{dragTitle}</span>
          {computedHint ? (
            <span className="text-[11px] text-[var(--abc-fg-muted)]">{computedHint}</span>
          ) : null}
        </button>
      </div>

      {files.length > 0 ? (
        <ul className="mt-2.5 space-y-1.5" aria-label="已上传文件列表">
          {files.map((item) => (
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
                  {item.status === 'uploading' ? (
                    <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-[var(--abc-primary)]" />
                  ) : item.status === 'error' ? (
                    <AlertCircle className="h-3.5 w-3.5 shrink-0 text-[var(--abc-danger)]" />
                  ) : (
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" />
                  )}
                  <FileText className="h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" />
                  <span className="truncate font-medium text-[var(--abc-fg)]">{item.name}</span>
                  <span className="shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)]">
                    {formatFileSize(item.size)}
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-1">
                  {item.status === 'error' && rawFilesRef.current.has(item.uid) ? (
                    <button
                      type="button"
                      disabled={disabled}
                      aria-label={`重试上传 ${item.name}`}
                      onClick={() => handleRetry(item.uid)}
                      className="rounded p-1 text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)]"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                  ) : null}
                  <button
                    type="button"
                    disabled={disabled}
                    aria-label={`删除文件 ${item.name}`}
                    onClick={() => handleRemove(item.uid)}
                    className="rounded p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-danger-soft)] hover:text-[var(--abc-danger)] disabled:opacity-40"
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
          ))}
        </ul>
      ) : null}

      {effectiveError ? (
        <p id={feedbackId} role="alert" className="mt-1.5 text-xs text-[var(--abc-danger)]">
          {effectiveError}
        </p>
      ) : helperText ? (
        <p id={feedbackId} className="mt-1.5 text-xs text-[var(--abc-fg-muted)]">
          {helperText}
        </p>
      ) : null}
    </div>
  )
}

FileUpload.displayName = 'FileUpload'
export default FileUpload
