import * as React from 'react'
import { CopyButton } from './CopyableText'
import { cn } from '../../utils/cn'

export interface CodeBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 代码文本内容（同时作为一键复制的数据源） */
  code: string
  /** 顶部标题或接口路径说明 */
  title?: React.ReactNode
  /** 语言或格式标识（如 bash / json / ts） */
  language?: string
  /** 是否显示一键复制按钮，默认开启 */
  copyable?: boolean
  /** 未复制时的按钮文案 */
  copyLabel?: string
  /** 复制成功后的按钮文案 */
  copiedLabel?: string
  /** 复制按钮的无障碍名称 */
  copyAriaLabel?: string
  /** 顶部右侧附加操作区插槽 */
  headerAction?: React.ReactNode
  /** pre 元素附加样式（如高度限制 max-h-96） */
  preClassName?: string
  /** pre 元素最大高度限制类名（兼容别名） */
  maxHeightClassName?: string
  /** 是否展示行号列（仅在未传自定义 children 时生效） */
  showLineNumbers?: boolean
  /** 是否允许长行自动折行 */
  wrapLongLines?: boolean
  /** 自定义渲染子节点 */
  children?: React.ReactNode
}

/**
 * 统一深色终端/代码块展示组件 (CodeBlock)
 */
export function CodeBlock({
  code,
  title,
  language,
  copyable = true,
  copyLabel = 'Copy',
  copiedLabel = 'Copied',
  copyAriaLabel,
  headerAction,
  preClassName,
  maxHeightClassName,
  showLineNumbers = false,
  wrapLongLines = false,
  className,
  children,
  ...props
}: CodeBlockProps) {
  const showHeader = Boolean(title || language || headerAction || copyable)
  const lines = React.useMemo(() => code.split('\n'), [code])

  return (
    <div
      data-slot="code-block"
      className={cn(
        'min-w-0 max-w-full overflow-hidden rounded-xl border border-slate-800/90 bg-slate-950 text-slate-100 shadow-sm ring-1 ring-inset ring-white/5',
        className
      )}
      {...props}
    >
      {showHeader && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/90 bg-slate-900/95 px-4 py-2 text-xs text-slate-300">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex items-center gap-1" aria-hidden="true">
              <span className="size-2 rounded-full bg-slate-700" />
              <span className="size-2 rounded-full bg-slate-700" />
              <span className="size-2 rounded-full bg-slate-700" />
            </span>
            {title && <span className="truncate font-mono text-slate-200">{title}</span>}
            {language && (
              <span className="rounded-md border border-slate-700/80 bg-slate-800/90 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-300">
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
                className="border-slate-700 bg-slate-800/90 text-slate-100 hover:border-slate-600 hover:bg-slate-700 hover:text-white"
              />
            )}
          </div>
        </div>
      )}
      <pre
        className={cn(
          'overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-100',
          wrapLongLines && 'whitespace-pre-wrap break-words',
          preClassName,
          maxHeightClassName
        )}
      >
        {children ? (
          <code>{children}</code>
        ) : showLineNumbers ? (
          <code className="grid grid-cols-[auto_1fr] gap-x-4">
            {lines.map((line, idx) => (
              <React.Fragment key={idx}>
                <span
                  aria-hidden="true"
                  className="select-none text-right font-mono text-[11px] text-slate-600 tabular-nums"
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
    </div>
  )
}
