import React, { useEffect, useRef } from 'react'
import { cn } from '@abc-design/react'

export interface FlowContextMenuItem {
  key: string
  label: string
  icon?: React.ReactNode
  shortcut?: string
  danger?: boolean
  disabled?: boolean
  dividerBefore?: boolean
  onClick: () => void
}

export interface FlowContextMenuProps {
  /** 是否打开 */
  open: boolean
  /** 相对于画布容器左上角的 X 坐标（像素） */
  x: number
  /** 相对于画布容器左上角的 Y 坐标（像素） */
  y: number
  /** 菜单标题（如“画布操作 / 节点操作 / 连线操作”） */
  title?: string
  /** 菜单项列表 */
  items: ReadonlyArray<FlowContextMenuItem>
  /** 关闭菜单回调 */
  onClose: () => void
  /** 容器宽高（用于自动防溢出贴边翻转，可选） */
  containerBounds?: { width: number; height: number }
  className?: string
}

/**
 * ReactFlow 画布 / 节点 / 连线右键上下文菜单 (FlowContextMenu)
 * 支持边界防裁切定位、快捷键提示、分组分隔线、危险操作高亮以及外部点击与 Esc 自动关闭。
 */
export const FlowContextMenu: React.FC<FlowContextMenuProps> = ({
  open,
  x,
  y,
  title,
  items,
  onClose,
  containerBounds,
  className,
}) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handlePointerDown = (event: MouseEvent) => {
      if (menuRef.current?.contains(event.target as Node)) return
      onClose()
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open || items.length === 0) return null

  const estimatedWidth = 196
  const estimatedHeight = items.length * 32 + (title ? 32 : 12)
  const clampedX = containerBounds
    ? Math.max(8, Math.min(x, Math.max(8, containerBounds.width - estimatedWidth - 8)))
    : x
  const clampedY = containerBounds
    ? Math.max(8, Math.min(y, Math.max(8, containerBounds.height - estimatedHeight - 8)))
    : y

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label={title ?? '画布上下文菜单'}
      data-slot="flow-context-menu"
      style={{ left: clampedX, top: clampedY }}
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={(e) => e.stopPropagation()}
      className={cn(
        'nodrag nopan absolute z-50 min-w-[184px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)] select-none abc-animate-popover-in',
        className
      )}
    >
      {title && (
        <div className="mb-1 border-b border-[var(--abc-border)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--abc-fg-muted)]">
          {title}
        </div>
      )}
      {items.map((item) => (
        <React.Fragment key={item.key}>
          {item.dividerBefore && (
            <div role="separator" className="my-1 h-px bg-[var(--abc-border)]" />
          )}
          <button
            type="button"
            role="menuitem"
            disabled={item.disabled}
            onClick={(e) => {
              e.stopPropagation()
              if (item.disabled) return
              item.onClick()
              onClose()
            }}
            className={cn(
              'flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-45',
              item.danger
                ? 'text-[var(--abc-danger)] enabled:hover:bg-[var(--abc-danger-soft)]'
                : 'text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]'
            )}
          >
            <span className="flex min-w-0 items-center gap-2">
              {item.icon && <span className="inline-flex shrink-0">{item.icon}</span>}
              <span className="truncate">{item.label}</span>
            </span>
            {item.shortcut && (
              <kbd className="shrink-0 font-mono text-[10px] text-[var(--abc-fg-muted)]">
                {item.shortcut}
              </kbd>
            )}
          </button>
        </React.Fragment>
      ))}
    </div>
  )
}
