import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { CopyButton } from './CopyableText'
import { cn } from '../../utils/cn'

export interface CodeBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 代码文本内容（同时作为一键复制的数据源） */
  code: string
  /** 顶部标题或接口路径说明 */
  title?: React.ReactNode
  /** 语言或格式标识（如 bash / json / ts） */
  language?: string
  /** 外观变体：'terminal' 深色终端（默认） | 'surface' 跟随亮/暗语义表面 */
  variant?: 'terminal' | 'surface'
  /** 是否显示一键复制按钮，默认开启 */
  copyable?: boolean
  /** 未复制时的按钮文案 */
  copyLabel?: string
  /** 复制成功后的按钮文案 */
  copiedLabel?: string
  /** 复制按钮的无障碍名称 */
  copyAriaLabel?: string
  /** 复制成功回调 */
  onCopySuccess?: () => void
  /** 复制失败回调 */
  onCopyError?: () => void
  /** 顶部右侧附加操作区插槽 */
  headerAction?: React.ReactNode
  /** pre 元素附加样式（如高度限制 max-h-96） */
  preClassName?: string
  /** pre 元素最大高度限制类名（兼容别名） */
  maxHeightClassName?: string
  /** 代码区最大滚动高度（数字按 px 处理） */
  maxHeight?: number | string
  /** 是否支持折叠/展开代码块内容 */
  collapsible?: boolean
  /** 初始是否折叠（配合 collapsible 使用） */
  defaultCollapsed?: boolean
  /** code 为空字符串且未传 children 时的占位内容 */
  emptyText?: React.ReactNode
  /** 是否展示行号列（仅在未传自定义 children 时生效） */
  showLineNumbers?: boolean
  /** 是否允许长行自动折行 */
  wrapLongLines?: boolean
  /** 自定义渲染子节点 */
  children?: React.ReactNode
}

/**
 * 统一终端/代码块展示组件 (CodeBlock)
 * 支持深色终端风格与亮/暗双主题语义表面风格、行号、折行、折叠与一键复制
 */
export function CodeBlock({
  code,
  title,
  language,
  variant = 'terminal',
  copyable = true,
  copyLabel = 'Copy',
  copiedLabel = 'Copied',
  copyAriaLabel,
  onCopySuccess,
  onCopyError,
  headerAction,
  preClassName,
  maxHeightClassName,
  maxHeight,
  collapsible = false,
  defaultCollapsed = false,
  emptyText,
  showLineNumbers = false,
  wrapLongLines = false,
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [collapsed, setCollapsed] = React.useState(Boolean(defaultCollapsed))
  const isSurface = variant === 'surface'
  const showHeader = Boolean(title || language || headerAction || copyable || collapsible)
  const lines = React.useMemo(() => code.split('\n'), [code])
  const isEmptyCode = !children && code === '' && emptyText !== undefined
  const preStyle =
    maxHeight !== undefined
      ? { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }
      : undefined

  return (
    <div
      data-slot="code-block"
      data-variant={variant}
      className={cn(
        'min-w-0 max-w-full overflow-hidden rounded-xl border',
        isSurface
          ? 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]'
          : 'border-slate-800/90 bg-slate-950 text-slate-100 shadow-sm ring-1 ring-inset ring-white/5',
        className
      )}
      {...props}
    >
      {showHeader && (
        <div
          className={cn(
            'flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 text-xs',
            isSurface
              ? 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]'
              : 'border-slate-800/90 bg-slate-900/95 text-slate-300'
          )}
        >
          <div className="flex min-w-0 items-center gap-2">
            {collapsible && (
              <button
                type="button"
                aria-expanded={!collapsed}
                aria-label={collapsed ? '展开代码' : '收起代码'}
                onClick={() => setCollapsed((v) => !v)}
                className={cn(
                  'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded transition-colors cursor-pointer',
                  isSurface
                    ? 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                )}
              >
                <ChevronDown
                  data-open={!collapsed ? 'true' : 'false'}
                  className="abc-chevron h-3.5 w-3.5"
                  aria-hidden="true"
                />
              </button>
            )}
            {!isSurface && (
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="size-2 rounded-full bg-slate-700" />
                <span className="size-2 rounded-full bg-slate-700" />
                <span className="size-2 rounded-full bg-slate-700" />
              </span>
            )}
            {title && (
              <span
                className={cn(
                  'truncate font-mono',
                  isSurface ? 'text-[var(--abc-fg)]' : 'text-slate-200'
                )}
              >
                {title}
              </span>
            )}
            {language && (
              <span
                className={cn(
                  'rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider',
                  isSurface
                    ? 'border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]'
                    : 'border-slate-700/80 bg-slate-800/90 text-slate-300'
                )}
              >
                {language}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {headerAction}
            {copyable && (
              <CopyButton
                value={code}
                copyLabel={copyLabel}
                copiedLabel={copiedLabel}
                aria-label={copyAriaLabel}
                onCopySuccess={onCopySuccess}
                onCopyError={onCopyError}
                className={
                  isSurface
                    ? undefined
                    : 'border-slate-700 bg-slate-800/90 text-slate-100 hover:border-slate-600 hover:bg-slate-700 hover:text-white'
                }
              />
            )}
          </div>
        </div>
      )}
      {!collapsed && (
        <pre
          style={preStyle}
          className={cn(
            'overflow-auto p-4 font-mono text-xs leading-relaxed',
            isSurface ? 'text-[var(--abc-fg)]' : 'text-slate-100',
            wrapLongLines && 'whitespace-pre-wrap break-words',
            preClassName,
            maxHeightClassName
          )}
        >
          {children ? (
            <code>{children}</code>
          ) : isEmptyCode ? (
            <span className={isSurface ? 'text-[var(--abc-fg-muted)]' : 'text-slate-400'}>
              {emptyText}
            </span>
          ) : showLineNumbers ? (
            <code className="grid grid-cols-[auto_1fr] gap-x-4">
              {lines.map((line, idx) => (
                <React.Fragment key={idx}>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'select-none text-right font-mono text-[11px] tabular-nums',
                      isSurface ? 'text-[var(--abc-fg-muted)]' : 'text-slate-600'
                    )}
                  >
                    {idx + 1}
                  </span>
                  <span>{line || ' '}</span>
                </React.Fragment>
              ))}
            </code>
          ) : (
            <code>{code}</code>
          )}
        </pre>
      )}
    </div>
  )
}
