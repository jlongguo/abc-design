import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import MDEditor, { type MDEditorProps } from '@uiw/react-md-editor'
import { useAbcConfig } from '@abc-design/react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface MarkdownEditorProps {
  /** 编辑器内容（Markdown 文本） */
  value?: string
  /** 内容变更回调 */
  onChange?: (val?: string) => void
  /** 编辑器高度（默认 450px） */
  height?: number
  /** 预览布局模式：live(双栏分屏) | edit(仅编辑) | preview(仅预览) */
  preview?: 'live' | 'edit' | 'preview'
  /** 主题颜色模式：'auto' 默认自动跟随 AbcProvider 及根文档深浅色状态 */
  colorMode?: 'light' | 'dark' | 'auto'
  /** 是否隐藏顶部快捷工具栏 */
  hideToolbar?: boolean
  /** 占位提示文案 */
  placeholder?: string
  /** 是否禁用输入 */
  disabled?: boolean
  /** 自定义外层容器样式类名 */
  className?: string
  /** 透传底层 @uiw/react-md-editor 的扩展属性 */
  editorProps?: Omit<
    MDEditorProps,
    'value' | 'onChange' | 'height' | 'preview' | 'hideToolbar'
  >
}

export interface MarkdownEditorHandle {
  /** 向当前光标选区插入文本（未聚焦时默认追加至末尾） */
  insertText: (text: string) => void
  /** 主动聚焦编辑区域 */
  focus: () => void
}

function detectDocumentTheme(): 'light' | 'dark' | null {
  if (typeof document === 'undefined') return null
  const root = document.documentElement
  const attrTheme = root.getAttribute('data-abc-theme') || root.getAttribute('data-color-mode')
  if (attrTheme === 'dark' || attrTheme === 'light') return attrTheme
  if (root.classList.contains('dark')) return 'dark'
  return null
}

/**
 * ABC Design 企业级 Markdown 编辑器 (@abc-design/markdown)
 * 独立子包封装 @uiw/react-md-editor，保持 @abc-design/react 核心包零重型编辑器依赖，
 * 并自动联动设计系统明暗主题与命令式光标文本插入。
 */
export const MarkdownEditor = React.forwardRef<MarkdownEditorHandle, MarkdownEditorProps>(
  function MarkdownEditor(
    {
      value = '',
      onChange,
      height = 450,
      preview = 'live',
      colorMode = 'auto',
      hideToolbar = false,
      placeholder,
      disabled = false,
      className,
      editorProps,
    },
    ref
  ) {
    const rootRef = useRef<HTMLDivElement>(null)
    const { resolvedTheme } = useAbcConfig()
    const [docTheme, setDocTheme] = useState<'light' | 'dark' | null>(() => detectDocumentTheme())

    // 监听根文档 html.dark / data-abc-theme 变化，确保脱离 AbcProvider 独立挂载时也能实时跟随宿主暗黑模式
    useEffect(() => {
      if (colorMode !== 'auto' || typeof document === 'undefined' || typeof MutationObserver === 'undefined') {
        return
      }
      setDocTheme(detectDocumentTheme())
      const observer = new MutationObserver(() => {
        setDocTheme(detectDocumentTheme())
      })
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class', 'data-abc-theme', 'data-color-mode'],
      })
      return () => observer.disconnect()
    }, [colorMode])

    const effectiveMode: 'light' | 'dark' =
      colorMode === 'dark' || colorMode === 'light'
        ? colorMode
        : resolvedTheme === 'dark' || docTheme === 'dark'
          ? 'dark'
          : 'light'

    useImperativeHandle(ref, () => ({
      insertText(text: string) {
        const textarea = rootRef.current?.querySelector('textarea')
        const isFocused = typeof document !== 'undefined' && document.activeElement === textarea
        const start = isFocused && textarea ? textarea.selectionStart : value.length
        const end = isFocused && textarea ? textarea.selectionEnd : value.length
        const nextValue = `${value.slice(0, start)}${text}${value.slice(end)}`
        onChange?.(nextValue)
      },
      focus() {
        rootRef.current?.querySelector('textarea')?.focus()
      },
    }))

    return (
      <div
        ref={rootRef}
        data-testid="markdown-editor-wrapper"
        data-color-mode={effectiveMode}
        className={twMerge(
          clsx(
            'w-full overflow-hidden rounded-[var(--abc-radius-lg,0.75rem)] border border-slate-200 bg-white shadow-xs transition-colors dark:border-slate-700 dark:bg-slate-900',
            disabled && 'pointer-events-none opacity-60',
            className
          )
        )}
      >
        <MDEditor
          value={value}
          onChange={disabled ? undefined : onChange}
          height={height}
          preview={preview}
          hideToolbar={hideToolbar}
          textareaProps={{
            placeholder,
            disabled,
            ...editorProps?.textareaProps,
          }}
          data-color-mode={effectiveMode}
          className="w-full"
          {...editorProps}
        />
      </div>
    )
  }
)

export default MarkdownEditor
