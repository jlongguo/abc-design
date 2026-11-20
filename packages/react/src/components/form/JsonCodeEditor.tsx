import * as React from 'react'
import {
  AlertTriangle,
  Braces,
  Check,
  CheckCircle2,
  Code2,
  Columns2,
  Copy,
  Download,
  FileUp,
  Minimize2,
  Network,
  Sparkles,
  WrapText,
} from 'lucide-react'
import { cn } from '../../utils/cn'
import { SegmentedControl, type SegmentedOption } from '../navigation/SegmentedControl'
import { JsonTreeViewer } from '../display/json-tree/JsonTreeViewer'
import { copyToClipboard } from '../typography/CopyableText'

export type JsonCodeEditorViewMode = 'code' | 'split' | 'tree'

export interface JsonCodeEditorExtraView {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  render: (parsedValue: unknown | null, rawText: string) => React.ReactNode
}

export interface JsonCodeEditorLabels {
  valid?: string
  invalid?: string
  schemaInvalid?: string
  format?: string
  minify?: string
  copy?: string
  copied?: string
  download?: string
  importFile?: string
  wrap?: string
  codeView?: string
  splitView?: string
  treeView?: string
  viewModeAriaLabel?: string
  treeUnavailable?: string
  linesUnit?: string
  charsUnit?: string
  fileTooLargeError?: string
  importReadError?: string
}

export interface JsonCodeEditorProps {
  /** 受控 JSON 文本值 */
  value: string
  /** 文本变更回调 */
  onChange: (nextValue: string) => void
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用编辑 */
  disabled?: boolean
  /** 顶部左侧标题/文件名 */
  title?: React.ReactNode
  /** 导出下载的默认文件名 */
  fileName?: string
  /** 外部 Schema 或业务校验错误文案（优先或并行展示于语法错误条） */
  externalError?: string | null
  /** 外部错误条右侧恢复/修复动作插槽（如“恢复最近有效草稿”） */
  errorAction?: React.ReactNode
  /** 顶部工具栏右侧自定义扩展操作 */
  toolbarExtra?: React.ReactNode
  /** 默认视图模式（默认 'code'，允许切至 'split' / 'tree'） */
  defaultViewMode?: JsonCodeEditorViewMode | string
  /** 是否允许在 Code / Split / Tree 之间切换（默认 true） */
  allowViewSwitch?: boolean
  /** 可选扩展视图标签页（例如挂接 ConfigDiffViewer 与基线对比） */
  extraViews?: ReadonlyArray<JsonCodeEditorExtraView>
  /** 是否显示行号槽（默认 true） */
  showLineNumbers?: boolean
  /** 是否允许文件导入与下载（默认 true） */
  allowFileTransfer?: boolean
  /** 编辑器区域最小高度（px，默认 320） */
  minHeight?: number
  /** 编辑器区域最大高度（px，默认 600） */
  maxHeight?: number
  /** 文本域占位提示 */
  placeholder?: string
  /** 文本域无障碍标签（直接挂接在底层 textarea 上） */
  ariaLabel?: string
  /** 文本域 id */
  id?: string
  /** 文本域 name */
  name?: string
  /** 多语言文案覆盖 */
  labels?: JsonCodeEditorLabels
  /** 容器自定义类名 */
  className?: string
}

const MAX_IMPORT_BYTES = 5 * 1024 * 1024

const DEFAULT_LABELS: Required<JsonCodeEditorLabels> = {
  valid: 'JSON 有效',
  invalid: '语法错误',
  schemaInvalid: '校验异常',
  format: '格式化',
  minify: '压缩',
  copy: '复制',
  copied: '已复制',
  download: '导出',
  importFile: '导入',
  wrap: '折行',
  codeView: '源码',
  splitView: '分栏',
  treeView: '树视图',
  viewModeAriaLabel: 'JSON 编辑器视图模式',
  treeUnavailable: '修复 JSON 语法错误后即可实时预览结构树。',
  linesUnit: '行',
  charsUnit: '字符',
  fileTooLargeError: '导入文件超过 5MB 上限，请精简后再试。',
  importReadError: '读取本地 JSON 文件失败，请检查文件编码与权限。',
}

interface JsonSyntaxResult {
  ok: boolean
  value: unknown | null
  errorMessage: string | null
  errorLine: number | null
}

function analyzeJsonSyntax(source: string): JsonSyntaxResult {
  const trimmed = source.trim()
  if (!trimmed) {
    return { ok: false, value: null, errorMessage: 'Empty JSON input', errorLine: 1 }
  }
  try {
    const parsed = JSON.parse(source) as unknown
    return { ok: true, value: parsed, errorMessage: null, errorLine: null }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid JSON'
    // 从 V8/SpiderMonkey/JavaScriptCore 报错信息提取行号或字符偏移，便于行号槽高亮定位
    let errorLine: number | null = null
    const lineMatch = /line\s+(\d+)/i.exec(message)
    if (lineMatch) {
      errorLine = Number(lineMatch[1])
    } else {
      const posMatch = /position\s+(\d+)/i.exec(message)
      if (posMatch) {
        const pos = Math.min(source.length, Math.max(0, Number(posMatch[1])))
        errorLine = source.slice(0, pos).split('\n').length
      }
    }
    return { ok: false, value: null, errorMessage: message, errorLine }
  }
}

function formatByteSize(text: string): string {
  const bytes =
    typeof TextEncoder !== 'undefined' ? new TextEncoder().encode(text).length : text.length
  if (bytes < 1024) return `${bytes} B`
  return `${(bytes / 1024).toFixed(1)} KB`
}

/**
 * IDE 级 JSON 源码与结构树一体化编辑器 (JsonCodeEditor)
 *
 * 为什么在设计系统层沉淀为独立轮子：
 * 业务中直接用裸 Textarea 编辑 JSON 缺乏行号定位、缩进体验、实时合法性指示、一键格式化/压缩与树视图互看；
 * 本组件零重型编辑器依赖（不引入 Monaco/CodeMirror 巨型包体），同时转发 ref/aria-label 至底层 textarea，
 * 兼顾 60FPS 响应、完整无障碍表单语义与亮/暗双主题统一视觉。
 */
export const JsonCodeEditor = React.forwardRef<HTMLTextAreaElement, JsonCodeEditorProps>(
  function JsonCodeEditor(
    {
      value,
      onChange,
      readOnly = false,
      disabled = false,
      title,
      fileName = 'payload.json',
      externalError,
      errorAction,
      toolbarExtra,
      defaultViewMode = 'code',
      allowViewSwitch = true,
      extraViews = [],
      showLineNumbers = true,
      allowFileTransfer = true,
      minHeight = 320,
      maxHeight = 600,
      placeholder = '{\n  "key": "value"\n}',
      ariaLabel = 'JSON editor',
      id,
      name,
      labels: customLabels,
      className,
    },
    ref
  ) {
    const labels = React.useMemo(
      () => ({ ...DEFAULT_LABELS, ...customLabels }),
      [customLabels]
    )
    const [viewMode, setViewMode] = React.useState<string>(defaultViewMode)
    const [wrapLines, setWrapLines] = React.useState(false)
    const [copied, setCopied] = React.useState(false)
    const [importError, setImportError] = React.useState<string | null>(null)

    const internalTextareaRef = React.useRef<HTMLTextAreaElement | null>(null)
    const gutterRef = React.useRef<HTMLDivElement | null>(null)
    const fileInputRef = React.useRef<HTMLInputElement | null>(null)
    const copyTimerRef = React.useRef<number | null>(null)

    React.useEffect(() => {
      return () => {
        if (copyTimerRef.current !== null && typeof window !== 'undefined') {
          window.clearTimeout(copyTimerRef.current)
          copyTimerRef.current = null
        }
      }
    }, [])

    React.useEffect(() => {
      setImportError(null)
    }, [value])

    const mergedTextareaRef = React.useCallback(
      (node: HTMLTextAreaElement | null) => {
        internalTextareaRef.current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      },
      [ref]
    )

    const syntax = React.useMemo(() => analyzeJsonSyntax(value), [value])
    const lineCount = React.useMemo(() => Math.max(1, value.split('\n').length), [value])
    const lineNumbers = React.useMemo(
      () => Array.from({ length: lineCount }, (_, idx) => idx + 1),
      [lineCount]
    )
    const byteSizeLabel = React.useMemo(() => formatByteSize(value), [value])

    const handleFormat = React.useCallback(() => {
      if (readOnly || disabled || !syntax.ok) return
      onChange(JSON.stringify(syntax.value, null, 2))
    }, [disabled, onChange, readOnly, syntax.ok, syntax.value])

    const handleMinify = React.useCallback(() => {
      if (readOnly || disabled || !syntax.ok) return
      onChange(JSON.stringify(syntax.value))
    }, [disabled, onChange, readOnly, syntax.ok, syntax.value])

    const handleCopy = React.useCallback(async () => {
      const ok = await copyToClipboard(value)
      if (ok) {
        setCopied(true)
        if (typeof window !== 'undefined') {
          if (copyTimerRef.current !== null) {
            window.clearTimeout(copyTimerRef.current)
          }
          copyTimerRef.current = window.setTimeout(() => {
            setCopied(false)
            copyTimerRef.current = null
          }, 1800)
        }
      }
    }, [value])

    const handleDownload = React.useCallback(() => {
      if (typeof document === 'undefined' || typeof URL === 'undefined') return
      const blob = new Blob([value], { type: 'application/json;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName.endsWith('.json') ? fileName : `${fileName}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }, [fileName, value])

    const handleImportFile = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        event.target.value = ''
        if (!file || readOnly || disabled) return
        if (file.size > MAX_IMPORT_BYTES) {
          setImportError(labels.fileTooLargeError)
          return
        }
        setImportError(null)
        const reader = new FileReader()
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            onChange(reader.result)
          }
        }
        reader.onerror = () => {
          setImportError(labels.importReadError)
        }
        reader.readAsText(file)
      },
      [disabled, labels.fileTooLargeError, labels.importReadError, onChange, readOnly]
    )

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (readOnly || disabled) return
        // 支持单行/多行选区 Tab 2 空格缩进与 Shift+Tab 反向退格，避免多行选区被覆盖销毁
        if (event.key === 'Tab') {
          event.preventDefault()
          const el = event.currentTarget
          const start = el.selectionStart
          const end = el.selectionEnd
          const isMultiLine = start !== end && value.slice(start, end).includes('\n')

          if (isMultiLine) {
            const blockStart = value.lastIndexOf('\n', start - 1) + 1
            const nextNewline = value.indexOf('\n', end)
            const blockEnd = nextNewline === -1 ? value.length : nextNewline
            const block = value.slice(blockStart, blockEnd)
            const lines = block.split('\n')

            if (event.shiftKey) {
              let firstLineRemoved = 0
              let totalRemoved = 0
              const updated = lines
                .map((line, idx) => {
                  const removeCount = line.startsWith('  ') ? 2 : line.startsWith(' ') || line.startsWith('\t') ? 1 : 0
                  if (idx === 0) firstLineRemoved = removeCount
                  totalRemoved += removeCount
                  return line.slice(removeCount)
                })
                .join('\n')
              if (totalRemoved > 0) {
                const next = value.slice(0, blockStart) + updated + value.slice(blockEnd)
                onChange(next)
                window.requestAnimationFrame(() => {
                  el.selectionStart = Math.max(blockStart, start - firstLineRemoved)
                  el.selectionEnd = Math.max(blockStart, end - totalRemoved)
                })
              }
            } else {
              const updated = lines.map((line) => `  ${line}`).join('\n')
              const next = value.slice(0, blockStart) + updated + value.slice(blockEnd)
              onChange(next)
              window.requestAnimationFrame(() => {
                el.selectionStart = start + 2
                el.selectionEnd = end + lines.length * 2
              })
            }
            return
          }

          if (event.shiftKey) {
            const lineStart = value.lastIndexOf('\n', start - 1) + 1
            const linePrefix = value.slice(lineStart, lineStart + 2)
            const removeCount = linePrefix === '  ' ? 2 : linePrefix.startsWith(' ') || linePrefix.startsWith('\t') ? 1 : 0
            if (removeCount > 0) {
              const next = value.slice(0, lineStart) + value.slice(lineStart + removeCount)
              onChange(next)
              window.requestAnimationFrame(() => {
                el.selectionStart = Math.max(lineStart, start - removeCount)
                el.selectionEnd = Math.max(lineStart, end - removeCount)
              })
            }
          } else {
            const next = `${value.slice(0, start)}  ${value.slice(end)}`
            onChange(next)
            window.requestAnimationFrame(() => {
              el.selectionStart = start + 2
              el.selectionEnd = start + 2
            })
          }
          return
        }
        // Cmd/Ctrl + Shift + F 快捷格式化
        if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key.toLowerCase() === 'f') {
          event.preventDefault()
          handleFormat()
        }
      },
      [disabled, handleFormat, onChange, readOnly, value]
    )

    const handleScroll = React.useCallback((event: React.UIEvent<HTMLTextAreaElement>) => {
      if (gutterRef.current) {
        gutterRef.current.scrollTop = event.currentTarget.scrollTop
      }
    }, [])

    const viewOptions = React.useMemo<SegmentedOption<string>[]>(() => {
      const base: SegmentedOption<string>[] = [
        {
          value: 'code',
          label: labels.codeView,
          icon: <Code2 className="h-3 w-3" aria-hidden="true" />,
        },
        {
          value: 'split',
          label: labels.splitView,
          icon: <Columns2 className="h-3 w-3" aria-hidden="true" />,
        },
        {
          value: 'tree',
          label: labels.treeView,
          icon: <Network className="h-3 w-3" aria-hidden="true" />,
        },
      ]
      for (const extra of extraViews) {
        base.push({
          value: extra.key,
          label: extra.label,
          icon: extra.icon,
        })
      }
      return base
    }, [extraViews, labels.codeView, labels.splitView, labels.treeView])

    const activeExtraView = extraViews.find((v) => v.key === viewMode)
    const effectiveViewMode =
      viewMode === 'code' || viewMode === 'split' || viewMode === 'tree' || activeExtraView
        ? viewMode
        : 'code'
    const showCodePane = effectiveViewMode === 'code' || effectiveViewMode === 'split'
    const showTreePane = effectiveViewMode === 'tree' || effectiveViewMode === 'split'
    const hasError = !syntax.ok || Boolean(externalError) || Boolean(importError)
    const effectiveErrorText = importError || externalError || syntax.errorMessage
    const statusBadgeText = !syntax.ok
      ? `${labels.invalid}${syntax.errorLine ? ` · L${syntax.errorLine}` : ''}`
      : hasError
        ? labels.schemaInvalid
        : labels.valid

    const paneStyle: React.CSSProperties = {
      height: `${minHeight}px`,
      minHeight: `${minHeight}px`,
      maxHeight: `${maxHeight}px`,
    }

    return (
      <div
        data-slot="json-code-editor"
        data-invalid={hasError ? 'true' : 'false'}
        className={cn(
          'flex min-w-0 flex-col overflow-hidden rounded-[var(--abc-radius-lg,12px)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-colors',
          hasError ? 'border-rose-500/60' : 'border-[var(--abc-border)]',
          className
        )}
      >
        {/* 顶部 IDE 工具栏 */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/75 px-3 py-2">
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)]">
              <Braces className="h-3.5 w-3.5 text-[var(--abc-primary)] shrink-0" aria-hidden="true" />
              {title ?? 'JSON'}
            </span>
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold',
                hasError
                  ? 'border-rose-500/35 bg-rose-500/10 text-rose-600 dark:text-rose-300'
                  : 'border-emerald-500/35 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
              )}
            >
              {hasError ? (
                <AlertTriangle className="h-3 w-3 shrink-0" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="h-3 w-3 shrink-0" aria-hidden="true" />
              )}
              <span>{statusBadgeText}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-[var(--abc-fg-muted)] tabular-nums">
              <span>
                {lineCount} {labels.linesUnit}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {value.length} {labels.charsUnit}
              </span>
              <span aria-hidden="true">·</span>
              <span>{byteSizeLabel}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {allowViewSwitch && (
              <SegmentedControl
                size="xs"
                value={effectiveViewMode}
                onChange={setViewMode}
                options={viewOptions}
                aria-label={labels.viewModeAriaLabel}
              />
            )}

            <div className="flex items-center gap-1">
              {!readOnly && (
                <>
                  <button
                    type="button"
                    data-abc-no-press-scale="true"
                    disabled={disabled || !syntax.ok}
                    onClick={handleFormat}
                    title={`${labels.format} (⇧⌘F)`}
                    className="inline-flex h-6 items-center gap-1 rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[11px] font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] disabled:cursor-not-allowed disabled:opacity-45 cursor-pointer"
                  >
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    <span>{labels.format}</span>
                  </button>
                  <button
                    type="button"
                    data-abc-no-press-scale="true"
                    disabled={disabled || !syntax.ok}
                    onClick={handleMinify}
                    title={labels.minify}
                    aria-label={labels.minify}
                    className="inline-flex h-6 items-center gap-1 rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[11px] font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] disabled:cursor-not-allowed disabled:opacity-45 cursor-pointer"
                  >
                    <Minimize2 className="h-3 w-3" aria-hidden="true" />
                    <span className="hidden md:inline">{labels.minify}</span>
                  </button>
                </>
              )}

              {showCodePane && (
                <button
                  type="button"
                  data-abc-no-press-scale="true"
                  aria-pressed={wrapLines}
                  aria-label={labels.wrap}
                  onClick={() => setWrapLines((v) => !v)}
                  title={labels.wrap}
                  className={cn(
                    'inline-flex h-6 items-center gap-1 rounded-[var(--abc-radius-sm,6px)] border px-2 text-[11px] font-medium transition-colors cursor-pointer',
                    wrapLines
                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  <WrapText className="h-3 w-3" aria-hidden="true" />
                </button>
              )}

              <button
                type="button"
                data-abc-no-press-scale="true"
                onClick={() => void handleCopy()}
                title={labels.copy}
                aria-label={copied ? labels.copied : labels.copy}
                className="inline-flex h-6 items-center gap-1 rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[11px] font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                    <span className="text-emerald-600 dark:text-emerald-300">{labels.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" aria-hidden="true" />
                    <span className="hidden sm:inline">{labels.copy}</span>
                  </>
                )}
              </button>

              {allowFileTransfer && (
                <>
                  <button
                    type="button"
                    data-abc-no-press-scale="true"
                    onClick={handleDownload}
                    title={labels.download}
                    aria-label={labels.download}
                    className="inline-flex h-6 items-center gap-1 rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[11px] font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <Download className="h-3 w-3" aria-hidden="true" />
                  </button>
                  {!readOnly && (
                    <>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".json,application/json"
                        onChange={handleImportFile}
                        className="sr-only"
                        tabIndex={-1}
                        aria-hidden="true"
                      />
                      <button
                        type="button"
                        data-abc-no-press-scale="true"
                        disabled={disabled}
                        onClick={() => fileInputRef.current?.click()}
                        title={labels.importFile}
                        aria-label={labels.importFile}
                        className="inline-flex h-6 items-center gap-1 rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[11px] font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] disabled:cursor-not-allowed disabled:opacity-45 cursor-pointer"
                      >
                        <FileUp className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </>
                  )}
                </>
              )}
              {toolbarExtra}
            </div>
          </div>
        </div>

        {/* 主体编辑/预览区 */}
        {activeExtraView ? (
          <div style={paneStyle} className="overflow-auto p-3">
            {activeExtraView.render(syntax.ok ? syntax.value : null, value)}
          </div>
        ) : (
          <div
            className={cn(
              'grid min-w-0',
              effectiveViewMode === 'split'
                ? 'grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--abc-border)]'
                : 'grid-cols-1'
            )}
          >
            {showCodePane && (
              <div
                className="relative flex min-w-0 resize-y overflow-hidden bg-[var(--abc-bg-surface)]"
                style={paneStyle}
              >
                {showLineNumbers && (
                  <div
                    ref={gutterRef}
                    data-slot="json-code-gutter"
                    aria-hidden="true"
                    className="h-full w-11 shrink-0 select-none overflow-hidden border-r border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 pt-3 pb-7 pr-2.5 text-right font-mono text-xs leading-5 text-[var(--abc-fg-muted)] tabular-nums"
                  >
                    {lineNumbers.map((num) => (
                      <div
                        key={num}
                        className={cn(
                          'h-5 leading-5',
                          syntax.errorLine === num &&
                            'rounded-r bg-rose-500/20 font-semibold text-rose-600 dark:text-rose-300'
                        )}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                )}
                <textarea
                  ref={mergedTextareaRef}
                  id={id}
                  name={name}
                  value={value}
                  readOnly={readOnly}
                  disabled={disabled}
                  placeholder={placeholder}
                  aria-label={ariaLabel}
                  aria-invalid={hasError}
                  spellCheck={false}
                  autoCapitalize="off"
                  autoCorrect="off"
                  onScroll={handleScroll}
                  onKeyDown={handleKeyDown}
                  onChange={(event) => onChange(event.target.value)}
                  className={cn(
                    'block h-full w-full flex-1 resize-none overflow-y-auto border-0 bg-transparent px-3 py-3 font-mono text-xs leading-5 text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] outline-none',
                    wrapLines ? 'whitespace-pre-wrap break-words' : 'whitespace-pre overflow-x-auto',
                    disabled && 'cursor-not-allowed opacity-60'
                  )}
                />
              </div>
            )}

            {showTreePane && (
              <div
                style={paneStyle}
                className="min-w-0 overflow-auto bg-[var(--abc-bg-canvas)]/40 p-2.5"
              >
                {syntax.ok ? (
                  <JsonTreeViewer
                    data={syntax.value}
                    bordered={false}
                    defaultExpandDepth={3}
                    size="xs"
                    className="bg-transparent"
                  />
                ) : (
                  <div className="flex h-full min-h-[160px] flex-col items-center justify-center gap-2 p-6 text-center text-xs text-[var(--abc-fg-muted)]">
                    <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" />
                    <span>{labels.treeUnavailable}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 底部内联校验错误条 */}
        {hasError && effectiveErrorText && (
          <div
            role="alert"
            className="flex flex-wrap items-center justify-between gap-2 border-t border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-700 dark:text-rose-200"
          >
            <div className="flex min-w-0 flex-1 items-start gap-2">
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-500" aria-hidden="true" />
              <span className="min-w-0 break-words font-mono text-[11px]">{effectiveErrorText}</span>
            </div>
            {errorAction && <div className="shrink-0">{errorAction}</div>}
          </div>
        )}
      </div>
    )
  }
)

JsonCodeEditor.displayName = 'JsonCodeEditor'
export default JsonCodeEditor
