import React, { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@abc-design/react'
import { Search, Sparkles } from 'lucide-react'
import type { FlowTone } from './flowTokens'

export interface FlowQuickConnectItem {
  key: string
  label: string
  description?: string
  group?: string
  icon?: React.ReactNode
  tone?: FlowTone
  keywords?: string
  disabled?: boolean
}

export interface FlowQuickConnectMenuProps {
  /** 是否打开 */
  open: boolean
  /** 相对于画布容器左上角的 X 坐标 */
  x: number
  /** 相对于画布容器左上角的 Y 坐标 */
  y: number
  /** 顶部标题 */
  title?: string
  /** 搜索占位文案 */
  searchPlaceholder?: string
  /** 空态文案 */
  emptyText?: string
  /** 可选节点列表 */
  items: ReadonlyArray<FlowQuickConnectItem>
  /** 容器尺寸（用于自动边缘防裁切） */
  containerBounds?: { width: number; height: number }
  /** 选中某节点项 */
  onSelect: (item: FlowQuickConnectItem) => void
  /** 关闭菜单 */
  onClose: () => void
  className?: string
}

const TONE_DOT_CLASS: Record<FlowTone, string> = {
  blue: 'bg-[var(--abc-flow-port-info-dot)]',
  green: 'bg-[var(--abc-flow-port-success-dot)]',
  amber: 'bg-[var(--abc-flow-port-warning-dot)]',
  rose: 'bg-[var(--abc-flow-port-danger-dot)]',
  slate: 'bg-[var(--abc-flow-port-neutral-dot)]',
}

/**
 * 拖到空白处松手快捷建点菜单 (FlowQuickConnectMenu)
 * 对齐 Dify / Coze / n8n 交互体验：支持即时关键字过滤、分组浏览、键盘 ↑/↓/Enter/Esc 导航与边界防溢出定位。
 */
export const FlowQuickConnectMenu: React.FC<FlowQuickConnectMenuProps> = ({
  open,
  x,
  y,
  title = '添加下游节点并自动连线',
  searchPlaceholder = '搜索动作或节点类型...',
  emptyText = '无匹配节点',
  items,
  containerBounds,
  onSelect,
  onClose,
  className,
}) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!open) {
      setQuery('')
      setActiveIndex(0)
      return
    }
    const raf = window.requestAnimationFrame(() => inputRef.current?.focus())
    const handleOutside = (event: MouseEvent) => {
      if (menuRef.current?.contains(event.target as Node)) return
      onClose()
    }
    document.addEventListener('mousedown', handleOutside)
    return () => {
      window.cancelAnimationFrame(raf)
      document.removeEventListener('mousedown', handleOutside)
    }
  }, [open, onClose])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((item) => {
      const hay = `${item.label} ${item.description ?? ''} ${item.group ?? ''} ${item.keywords ?? ''}`.toLowerCase()
      return hay.includes(q)
    })
  }, [items, query])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  if (!open) return null

  const menuW = 264
  const menuH = 312
  const clampedX = containerBounds
    ? Math.max(10, Math.min(x, Math.max(10, containerBounds.width - menuW - 10)))
    : x
  const clampedY = containerBounds
    ? Math.max(10, Math.min(y, Math.max(10, containerBounds.height - menuH - 10)))
    : y

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      onClose()
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((prev) => (filtered.length > 0 ? (prev + 1) % filtered.length : 0))
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((prev) =>
        filtered.length > 0 ? (prev - 1 + filtered.length) % filtered.length : 0
      )
      return
    }
    if (event.key === 'Enter') {
      const target = filtered[activeIndex]
      if (target && !target.disabled) {
        event.preventDefault()
        onSelect(target)
        onClose()
      }
    }
  }

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-label={title}
      data-slot="flow-quick-connect-menu"
      data-abc-no-press-scale=""
      style={{ left: clampedX, top: clampedY, width: menuW }}
      onMouseDown={(e) => e.stopPropagation()}
      onKeyDown={handleKeyDown}
      className={cn(
        'nodrag nowheel nopan absolute z-50 overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)] select-none abc-animate-popover-in',
        className
      )}
    >
      <div className="border-b border-[var(--abc-border)] px-3 py-2">
        <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-[var(--abc-fg)]">
          <Sparkles size={12} className="shrink-0 text-[var(--abc-primary)]" />
          <span className="truncate">{title}</span>
        </div>
        <div className="relative">
          <Search
            size={13}
            className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[var(--abc-fg-placeholder)]"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-7 pr-2 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--abc-ring)]"
          />
        </div>
      </div>

      <div className="max-h-56 overflow-y-auto p-1.5">
        {filtered.length === 0 ? (
          <div className="py-5 text-center text-xs text-[var(--abc-fg-muted)]">{emptyText}</div>
        ) : (
          filtered.map((item, idx) => {
            const prevGroup = idx > 0 ? filtered[idx - 1]?.group : undefined
            const showGroup = Boolean(item.group && item.group !== prevGroup)
            const isHighlighted = idx === activeIndex
            return (
              <React.Fragment key={item.key}>
                {showGroup && (
                  <div className="px-2 pb-0.5 pt-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--abc-fg-muted)]">
                    {item.group}
                  </div>
                )}
                <button
                  type="button"
                  disabled={item.disabled}
                  data-quick-connect-key={item.key}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => {
                    if (item.disabled) return
                    onSelect(item)
                    onClose()
                  }}
                  className={cn(
                    'flex w-full items-start gap-2 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-45',
                    isHighlighted
                      ? 'bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]'
                      : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center text-[var(--abc-primary)]">
                    {item.icon ?? (
                      <span
                        className={cn(
                          'h-2 w-2 rounded-full',
                          TONE_DOT_CLASS[item.tone ?? 'blue']
                        )}
                      />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-medium text-[var(--abc-fg)]">
                      {item.label}
                    </span>
                    {item.description && (
                      <span className="block truncate text-[10.5px] text-[var(--abc-fg-muted)]">
                        {item.description}
                      </span>
                    )}
                  </span>
                </button>
              </React.Fragment>
            )
          })
        )}
      </div>
    </div>
  )
}
