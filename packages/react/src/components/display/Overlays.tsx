import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset } from '@abc-design/tokens'
import { useAbcMotion } from '../../hooks'
import { useControllableState } from '../../hooks/useControllableState'
import { useFloatingPosition, type FloatingPlacement } from '../../hooks/useFloatingPosition'
import { usePresence } from '../../hooks/usePresence'
import { cn } from '../../utils/cn'

export interface TooltipProps {
  content?: React.ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
  disabled?: boolean
  /** 悬停延迟毫秒数（默认 80ms，避免光标快速划过密集工具栏时频繁闪烁） */
  delay?: number
  motion?: AbcMotionPreset
  children: React.ReactNode
  className?: string
}

/**
 * 视口感知顶层悬浮文字提示 (Tooltip)
 * 通过 Portal 逃逸任意 overflow:hidden 卡片或滚动容器裁剪，支持视口边缘自动翻转与动态箭头对齐
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = 'top',
  disabled = false,
  delay = 0,
  motion,
  children,
  className,
}) => {
  const resolvedMotion = useAbcMotion(motion)
  const [open, setOpen] = useState(false)
  const [instantHide, setInstantHide] = useState(false)
  const tooltipId = useId()
  const triggerRef = useRef<HTMLSpanElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)
  const openTimerRef = useRef<number | null>(null)
  const closeTimerRef = useRef<number | null>(null)

  const clearTimers = useCallback(() => {
    if (typeof window === 'undefined') return
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  useEffect(() => () => clearTimers(), [clearTimers])

  const showTooltip = useCallback(
    (immediate = false) => {
      if (disabled || !content) return
      clearTimers()
      setInstantHide(false)
      if (immediate || delay <= 0 || typeof window === 'undefined') {
        setOpen(true)
      } else {
        openTimerRef.current = window.setTimeout(() => {
          setOpen(true)
          openTimerRef.current = null
        }, delay)
      }
    },
    [disabled, content, delay, clearTimers]
  )

  const hideTooltip = useCallback(() => {
    clearTimers()
    // 短暂移出防抖，防止光标擦边轻微震颤触发“关-开”重播闪烁
    if (typeof window === 'undefined') {
      setOpen(false)
      return
    }
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false)
      closeTimerRef.current = null
    }, 60)
  }, [clearTimers])

  const hideTooltipImmediately = useCallback(() => {
    clearTimers()
    setInstantHide(true)
    setOpen(false)
  }, [clearTimers])

  const { isMounted, isVisible } = usePresence(
    open && !disabled && Boolean(content),
    resolvedMotion === 'none' || instantHide ? 0 : 100
  )

  const { style, actualSide, arrowOffset, portalContainer } = useFloatingPosition({
    open: isMounted,
    triggerRef,
    floatingRef,
    placement,
    offset: 8,
  })

  useEffect(() => {
    if (!open) return
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') hideTooltipImmediately()
    }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open, hideTooltipImmediately])

  if (!content || disabled) return <>{children}</>

  const arrowPositionStyle: React.CSSProperties =
    actualSide === 'top'
      ? { left: `${arrowOffset}px`, bottom: '-4px', transform: 'translateX(-50%) rotate(45deg)' }
      : actualSide === 'bottom'
        ? { left: `${arrowOffset}px`, top: '-4px', transform: 'translateX(-50%) rotate(45deg)' }
        : actualSide === 'left'
          ? { top: `${arrowOffset}px`, right: '-4px', transform: 'translateY(-50%) rotate(45deg)' }
          : { top: `${arrowOffset}px`, left: '-4px', transform: 'translateY(-50%) rotate(45deg)' }

  return (
    <>
      <span
        ref={triggerRef}
        data-motion={resolvedMotion}
        aria-describedby={open ? tooltipId : undefined}
        onMouseEnter={() => showTooltip(false)}
        onMouseLeave={hideTooltip}
        onFocus={() => showTooltip(true)}
        onBlur={hideTooltipImmediately}
        onPointerDown={hideTooltipImmediately}
        className={cn('inline-flex items-center', className)}
      >
        {children}
      </span>
      {isMounted &&
        portalContainer &&
        createPortal(
          <div
            ref={floatingRef}
            id={tooltipId}
            role="tooltip"
            data-abc-floating=""
            data-motion={resolvedMotion}
            data-placement={actualSide}
            style={style}
            className={cn(
              'pointer-events-none select-none z-[1400] max-w-xs rounded-[var(--abc-radius-sm)] bg-slate-900 px-2.5 py-1.5 text-[11px] leading-snug font-medium text-white shadow-lg dark:border dark:border-slate-700 dark:bg-slate-800',
              resolvedMotion !== 'none' &&
                (isVisible ? 'abc-animate-tooltip-in' : 'abc-animate-tooltip-out')
            )}
          >
            <span className="relative z-10 block">{content}</span>
            <span
              aria-hidden="true"
              style={arrowPositionStyle}
              className="pointer-events-none absolute h-2 w-2 bg-slate-900 dark:border-slate-700 dark:bg-slate-800"
            />
          </div>,
          portalContainer
        )}
    </>
  )
}

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCompoundItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from './DropdownMenuCompound'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
}
export const DropdownMenuItem = DropdownMenuCompoundItem

export interface DropdownMenuItem {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  danger?: boolean
  disabled?: boolean
  /** 独立分割线菜单项 */
  divider?: boolean
  dividerAbove?: boolean
  onClick?: () => void
}

export interface DropdownProps {
  items?: DropdownMenuItem[]
  /** 自定义弹层面板内容（未传 items 或需要复杂布局时使用） */
  content?: React.ReactNode
  align?: 'left' | 'right'
  /** 弹出方位（兼容 bottomLeft / bottomRight / topLeft / topRight） */
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
  trigger?: 'click' | 'hover'
  /** 受控打开状态 */
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  motion?: AbcMotionPreset
  children: React.ReactNode
  className?: string
  panelClassName?: string
}

/**
 * 视口感知顶层下拉菜单与气泡浮层组件 (Dropdown / Popover)
 * 遵循无障碍规范：
 * 1. 当使用 hover 触发时，同时保留点击、触控与键盘激活能力，并配备安全悬停桥接延迟与 Esc 关闭（WCAG 2.1.1 / 1.4.13）；
 * 2. 声明式菜单模式完整实现上下方向键、Home/End 焦点巡航契约；自定义面板模式不滥用 role="menu"。
 */
export const Dropdown: React.FC<DropdownProps> = ({
  items = [],
  content,
  align,
  placement,
  trigger = 'click',
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  motion,
  children,
  className,
  panelClassName,
}) => {
  const resolvedMotion = useAbcMotion(motion)
  const [open, setOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  })
  const { isMounted, isVisible } = usePresence(open, resolvedMotion === 'none' ? 0 : 140)
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const hoverTimerRef = useRef<number | null>(null)
  const menuId = useId()

  const resolvedPlacement: FloatingPlacement =
    placement ?? (align === 'left' ? 'bottomLeft' : 'bottomRight')

  const { style, actualSide, portalContainer } = useFloatingPosition({
    open: isMounted,
    triggerRef: rootRef,
    floatingRef: panelRef,
    placement: resolvedPlacement,
    offset: 6,
  })

  const clearHoverTimer = useCallback(() => {
    if (hoverTimerRef.current !== null && typeof window !== 'undefined') {
      window.clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }
  }, [])

  useEffect(() => () => clearHoverTimer(), [clearHoverTimer])

  const scheduleHoverOpen = useCallback(() => {
    if (trigger !== 'hover') return
    clearHoverTimer()
    setOpen(true)
  }, [trigger, clearHoverTimer, setOpen])

  const scheduleHoverClose = useCallback(() => {
    if (trigger !== 'hover') return
    clearHoverTimer()
    if (typeof window !== 'undefined') {
      hoverTimerRef.current = window.setTimeout(() => {
        setOpen(false)
        hoverTimerRef.current = null
      }, 140)
    }
  }, [trigger, clearHoverTimer, setOpen])

  const focusMenuItemByIndex = useCallback((targetIndex: number) => {
    const panel = panelRef.current
    if (!panel) return
    const nodes = Array.from(
      panel.querySelectorAll<HTMLButtonElement>('[role="menuitem"]:not(:disabled)')
    )
    if (nodes.length === 0) return
    const normalized = ((targetIndex % nodes.length) + nodes.length) % nodes.length
    nodes[normalized]?.focus()
  }, [])

  useEffect(() => {
    if (!open) return
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (rootRef.current?.contains(target)) return
      if (panelRef.current?.contains(target)) return
      setOpen(false)
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        setOpen(false)
        const triggerBtn = rootRef.current?.querySelector<HTMLElement>(
          'button, [tabindex]:not([tabindex="-1"])'
        )
        triggerBtn?.focus()
      }
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEsc, true)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEsc, true)
    }
  }, [open, setOpen])

  const isMenuMode = !content

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
      if (isMenuMode && typeof window !== 'undefined') {
        window.requestAnimationFrame(() => focusMenuItemByIndex(0))
      }
    } else if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
      e.preventDefault()
      setOpen(!open)
    }
  }

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isMenuMode) return
    const panel = panelRef.current
    if (!panel) return
    const nodes = Array.from(
      panel.querySelectorAll<HTMLButtonElement>('[role="menuitem"]:not(:disabled)')
    )
    if (nodes.length === 0) return
    const currentIdx = nodes.indexOf(document.activeElement as HTMLButtonElement)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      focusMenuItemByIndex(currentIdx < 0 ? 0 : currentIdx + 1)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      focusMenuItemByIndex(currentIdx <= 0 ? nodes.length - 1 : currentIdx - 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      focusMenuItemByIndex(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      focusMenuItemByIndex(nodes.length - 1)
    }
  }

  const hoverBridgeClass =
    trigger === 'hover'
      ? actualSide === 'top'
        ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5"
        : actualSide === 'left'
          ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3"
          : actualSide === 'right'
            ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3"
            : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5"
      : undefined

  return (
    <>
      <div
        ref={rootRef}
        data-motion={resolvedMotion}
        onMouseEnter={scheduleHoverOpen}
        onMouseLeave={scheduleHoverClose}
        className={cn('inline-flex', className)}
      >
        <div
          aria-expanded={open}
          aria-controls={open ? menuId : undefined}
          aria-haspopup={isMenuMode ? 'menu' : undefined}
          onClick={() => setOpen(!open)}
          onKeyDown={handleTriggerKeyDown}
          className="inline-flex cursor-pointer items-center"
        >
          {children}
        </div>
      </div>

      {isMounted &&
        portalContainer &&
        createPortal(
          <div
            ref={panelRef}
            id={menuId}
            role={isMenuMode ? 'menu' : 'dialog'}
            data-abc-floating=""
            data-motion={resolvedMotion}
            data-placement={actualSide}
            style={style}
            onMouseEnter={scheduleHoverOpen}
            onMouseLeave={scheduleHoverClose}
            onKeyDown={handleMenuKeyDown}
            className={cn(
              'z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]',
              hoverBridgeClass,
              resolvedMotion !== 'none' &&
                (isVisible ? 'abc-animate-popover-in' : 'abc-animate-popover-out'),
              panelClassName
            )}
          >
            {content ? (
              content
            ) : (
              items.map((item) =>
                item.divider ? (
                  <div key={item.key} role="separator" className="my-1 h-px bg-[var(--abc-border)]" />
                ) : (
                  <React.Fragment key={item.key}>
                    {item.dividerAbove && (
                      <div role="separator" className="my-1 h-px bg-[var(--abc-border)]" />
                    )}
                    <button
                      type="button"
                      role="menuitem"
                      disabled={item.disabled}
                      onClick={() => {
                        if (item.disabled) return
                        item.onClick?.()
                        setOpen(false)
                      }}
                      className={cn(
                        'abc-motion-control flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]',
                        item.danger
                          ? 'text-[var(--abc-danger)] enabled:hover:bg-[var(--abc-danger-soft)]'
                          : 'text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]',
                        item.disabled && 'opacity-45 cursor-not-allowed'
                      )}
                    >
                      {item.icon && <span className="shrink-0">{item.icon}</span>}
                      <span className="flex-1 truncate">{item.label}</span>
                    </button>
                  </React.Fragment>
                )
              )
            )}
          </div>,
          portalContainer
        )}
    </>
  )
}

export interface PopoverProps extends Omit<DropdownProps, 'items' | 'align' | 'content'> {
  title?: React.ReactNode
  content: React.ReactNode
  align?: 'left' | 'right' | 'start' | 'end'
}

/** 气泡卡片组件（基于顶层视口感知 Portal 引擎，承载富交互面板、筛选器或说明卡片） */
export const Popover: React.FC<PopoverProps> = ({
  title,
  content,
  align,
  placement,
  panelClassName,
  ...rest
}) => {
  const mappedAlign: 'left' | 'right' | undefined =
    align === 'start' ? 'left' : align === 'end' ? 'right' : align
  const resolvedPlacement =
    placement ??
    (mappedAlign ? (mappedAlign === 'right' ? 'bottomRight' : 'bottomLeft') : 'bottomLeft')

  return (
    <Dropdown
      {...rest}
      placement={resolvedPlacement}
      panelClassName={cn(
        title ? 'min-w-[220px] p-3 text-xs text-[var(--abc-fg)]' : undefined,
        panelClassName
      )}
      content={
        title ? (
          <div>
            <div className="mb-2 border-b border-[var(--abc-border-subtle)] pb-1.5 font-semibold text-[var(--abc-fg)]">
              {title}
            </div>
            <div>{content}</div>
          </div>
        ) : (
          content
        )
      }
    />
  )
}

export default Tooltip
