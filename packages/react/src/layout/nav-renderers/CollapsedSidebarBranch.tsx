import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { useFloatingPosition } from '../../hooks/useFloatingPosition'
import { usePresence } from '../../hooks/usePresence'
import { cn } from '../../utils/cn'
import type { AbcMenuItem } from '../types'
import {
  menuContainsPath,
  NAV_BTN_MOTION_CLASS,
  NAV_SIZE_METRICS,
  renderMenuIcon,
  SubmenuFlyoutItems,
} from './shared'

/** 折叠态侧边栏带 Portal 右侧浮出面板的父节点 */
export const CollapsedSidebarBranch: React.FC<{
  item: AbcMenuItem
  pathname: string
  isDark: boolean
  registry: Record<string, any>
  size: AbcSize
  motion: AbcMotionPreset
  onNavigate: (path: string, item: AbcMenuItem) => void
}> = ({ item, pathname, isDark, registry, size, motion, onNavigate }) => {
  const m = NAV_SIZE_METRICS[size]
  const [open, setOpen] = useState(false)
  const { isMounted, isVisible } = usePresence(open, motion === 'none' ? 0 : 140)
  const btnRef = useRef<HTMLButtonElement>(null)
  const flyoutRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number | null>(null)
  const menuId = useId()
  const activeBranch = menuContainsPath(item, pathname)

  const { style, actualSide, portalContainer } = useFloatingPosition({
    open: isMounted,
    triggerRef: btnRef,
    floatingRef: flyoutRef,
    placement: 'rightStart',
    offset: 8,
  })

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null && typeof window !== 'undefined') {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => () => clearTimer(), [clearTimer])

  const openFlyout = () => {
    clearTimer()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearTimer()
    if (typeof window !== 'undefined') {
      timerRef.current = window.setTimeout(() => {
        setOpen(false)
        timerRef.current = null
      }, 140)
    }
  }

  useEffect(() => {
    if (!open) return
    const onOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (btnRef.current?.contains(target)) return
      if (flyoutRef.current?.contains(target)) return
      setOpen(false)
    }
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        setOpen(false)
        btnRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', onOutside)
    document.addEventListener('keydown', onEsc, true)
    return () => {
      document.removeEventListener('mousedown', onOutside)
      document.removeEventListener('keydown', onEsc, true)
    }
  }, [open])

  return (
    <>
      <div onMouseEnter={openFlyout} onMouseLeave={scheduleClose}>
        <button
          ref={btnRef}
          type="button"
          aria-label={item.label}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-controls={open ? menuId : undefined}
          onClick={() => setOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
              e.preventDefault()
              setOpen(true)
              window.requestAnimationFrame(() => {
                flyoutRef.current
                  ?.querySelector<HTMLButtonElement>('[role="menuitem"]:not(:disabled)')
                  ?.focus()
              })
            }
          }}
          className={cn(
            'flex w-full items-center justify-center rounded-[var(--abc-radius-md)] text-xs font-medium cursor-pointer',
            NAV_BTN_MOTION_CLASS,
            m.collapsedBtn,
            activeBranch
              ? isDark
                ? 'bg-white/12 text-white'
                : 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
              : isDark
                ? 'text-slate-300 hover:bg-white/8 hover:text-white'
                : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
          )}
        >
          {renderMenuIcon(item.icon ?? 'folder', registry, m.collapsedIcon)}
        </button>
      </div>

      {isMounted &&
        portalContainer &&
        createPortal(
          <div
            ref={flyoutRef}
            id={menuId}
            role="menu"
            aria-label={item.label}
            data-abc-floating=""
            data-size={size}
            data-motion={motion}
            data-placement={actualSide}
            style={style}
            onMouseEnter={openFlyout}
            onMouseLeave={scheduleClose}
            onKeyDown={(e) => {
              const nodes = Array.from(
                flyoutRef.current?.querySelectorAll<HTMLButtonElement>(
                  '[role="menuitem"]:not(:disabled)'
                ) ?? []
              )
              if (!nodes.length) return
              const idx = nodes.indexOf(document.activeElement as HTMLButtonElement)
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                nodes[(idx + 1) % nodes.length]?.focus()
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                nodes[(idx - 1 + nodes.length) % nodes.length]?.focus()
              }
            }}
            className={cn(
              'z-[1250] max-w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]',
              // 在触发器与 Portal 浮层 8px 间隙之间铺设透明悬停桥接，防止移入子菜单瞬间断触
              actualSide === 'right'
                ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3"
                : "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3",
              m.flyoutPanel,
              motion !== 'none' && (isVisible ? 'abc-animate-popover-in' : 'abc-animate-popover-out')
            )}
          >
            <div
              className={cn(
                'mb-1 border-b border-[var(--abc-border)] font-semibold text-[var(--abc-fg)]',
                m.flyoutHeader
              )}
            >
              {item.label}
            </div>
            <SubmenuFlyoutItems
              items={item.children ?? []}
              pathname={pathname}
              registry={registry}
              size={size}
              onSelect={(path, subItem) => {
                onNavigate(path, subItem)
                setOpen(false)
              }}
            />
          </div>,
          portalContainer
        )}
    </>
  )
}
