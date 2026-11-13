import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'

/**
 * 写入文本至系统剪贴板（优先使用 Clipboard API，非安全上下文下自动回退至隐藏 textarea）
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined') return false

  if (
    typeof navigator !== 'undefined' &&
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === 'function'
  ) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // 权限拒绝或非 HTTPS 环境自动走兼容降级路径
    }
  }

  try {
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.top = '0'
    area.style.left = '0'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.focus()
    area.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(area)
    return ok
  } catch {
    return false
  }
}

export interface CopyableTextProps {
  /** 实际要写入剪贴板的文本 */
  text: string
  /** 可选自定义展示内容（例如脱敏或截断显示），默认展示 text */
  displayText?: React.ReactNode
  children?: React.ReactNode
  /** 是否显示右侧复制状态图标（默认 true） */
  showIcon?: boolean
  /** 是否仅渲染复制图标按钮 */
  iconOnly?: boolean
  /** 是否等宽字体渲染（适合订单号、ID、IP） */
  mono?: boolean
  /** 复制成功提示文案 */
  successMessage?: string
  /** successMessage 别名 */
  successText?: string
  /** 悬停 title 文案 */
  tooltip?: string
  /** 复制成功回调 */
  onCopy?: (text: string) => void
  className?: string
}

/**
 * 一键点击复制文本组件
 * 通过 AbcProvider.toast 发送反馈，阻止事件冒泡避免误触表格行点击
 */
export const CopyableText: React.FC<CopyableTextProps> = ({
  text,
  displayText,
  children,
  showIcon = true,
  iconOnly = false,
  mono = true,
  successMessage,
  successText,
  tooltip,
  onCopy,
  className,
}) => {
  const { toast } = useAbcConfig()
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resolvedSuccessMsg = successText ?? successMessage ?? '已复制到剪贴板'

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleCopy = useCallback(
    async (e: React.MouseEvent | React.KeyboardEvent) => {
      e.stopPropagation()
      e.preventDefault()
      const ok = await copyToClipboard(text)
      if (ok) {
        setCopied(true)
        toast.success(resolvedSuccessMsg)
        onCopy?.(text)
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
          setCopied(false)
          timerRef.current = null
        }, 1500)
      } else {
        toast.error('复制失败，请手动复制')
      }
    },
    [text, resolvedSuccessMsg, onCopy, toast]
  )

  const titleText = tooltip !== undefined ? tooltip : copied ? resolvedSuccessMsg : '点击复制'

  const iconNode = copied ? (
    <Check
      data-testid="copy-icon-check"
      className="h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]"
      aria-hidden="true"
    />
  ) : (
    <Copy
      data-testid="copy-icon-copy"
      className="h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] transition-colors group-hover:text-[var(--abc-primary)]"
      aria-hidden="true"
    />
  )

  if (iconOnly) {
    return (
      <button
        type="button"
        title={titleText}
        aria-label={tooltip || '复制'}
        onClick={handleCopy}
        className={cn(
          'inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none',
          className
        )}
      >
        {iconNode}
      </button>
    )
  }

  return (
    <span
      role="button"
      tabIndex={0}
      title={titleText}
      onClick={handleCopy}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleCopy(e)
      }}
      className={cn(
        'group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] px-1 py-0.5 text-xs text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none',
        mono && 'font-mono tabular-nums',
        className
      )}
    >
      <span className="min-w-0 truncate">{displayText ?? children ?? text}</span>
      {showIcon && iconNode}
    </span>
  )
}

/** 键盘快捷键徽标 */
export const Kbd: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...rest
}) => (
  <kbd
    className={cn(
      'inline-flex h-5 min-w-5 items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 font-mono text-[10px] font-medium text-[var(--abc-fg-muted)]',
      className
    )}
    {...rest}
  >
    {children}
  </kbd>
)

export default CopyableText
