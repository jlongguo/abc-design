import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { ChevronDown } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { useFloatingPosition } from '../../hooks/useFloatingPosition'
import { usePresence } from '../../hooks/usePresence'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'
import type { AbcMenuItem } from '../types'
import {
  menuContainsPath,
  NAV_BTN_MOTION_CLASS,
  NAV_SIZE_METRICS,
  renderMenuIcon,
  SubmenuFlyoutItems,
} from './shared'

/** 顶部导航条单个带下拉子菜单的父级项（Portal 顶层逃逸 <nav> overflow-x-auto 裁剪，兼容 Hover + Click + 键盘巡航） */
const TopNavSubmenuItem: React.FC<{
  item: AbcMenuItem
  pathname: string
  isActive: boolean
  registry: Record<string, any>
  size: AbcSize
  motion: AbcMotionPreset
  onNavigate: (path: string, item: AbcMenuItem) => void
}> = ({ item, pathname, isActive, registry, size, motion, onNavigate }) => {
  const m = NAV_SIZE_METRICS[size]
  const [open, setOpen] = useState(false)
  const { isMounted, isVisible } = usePresence(open, motion === 'none' ? 0 : 140)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number | null>(null)
  const menuId = useId()

  const { style, actualSide, portalContainer } = useFloatingPosition({
    open: isMounted,
    triggerRef,
    floatingRef: menuRef,
    placement: 'bottomLeft',
    offset: 6,
  })

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null && typeof window !== 'undefined') {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => () => clearTimer(), [clearTimer])

  const openSubmenu = () => {
    clearTimer()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearTimer()
    if (typeof window !== 'undefined') {
      timerRef.current = window.setTimeout(() => {
        setOpen(false)
        timerRef.current = null
      }, 150)
    }
  }

  useEffect(() => {
    if (!open) return
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (triggerRef.current?.contains(target)) return
      if (menuRef.current?.contains(target)) return
      setOpen(false)
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEsc, true)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEsc, true)
    }
  }, [open])

  const focusFirstMenuItem = () => {
    if (typeof window === 'undefined') return
    window.requestAnimationFrame(() => {
      menuRef.current
        ?.querySelector<HTMLButtonElement>('[role="menuitem"]:not(:disabled)')
        ?.focus()
    })
  }

  return (
    <>
      <div
        onMouseEnter={openSubmenu}
        onMouseLeave={scheduleClose}
        className="relative flex-none"
      >
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={open}
          aria-haspopup="menu"
          aria-controls={open ? menuId : undefined}
          onClick={() => setOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setOpen(true)
              focusFirstMenuItem()
            }
          }}
          className={cn(
            'inline-flex items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
            NAV_BTN_MOTION_CLASS,
            m.topItem,
            isActive
              ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
              : open
                ? 'bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]'
                : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
          )}
        >
          {renderMenuIcon(item.icon, registry, m.topIcon)}
          <span>{item.label}</span>
          <ChevronDown
            data-open={open ? 'true' : 'false'}
            className={cn(
              'abc-chevron opacity-70',
              m.topChevron,
              open && 'text-[var(--abc-primary)] opacity-100'
            )}
          />
        </button>
      </div>

      {isMounted &&
        portalContainer &&
        createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label={`${item.label} 子菜单`}
            data-abc-floating=""
            data-size={size}
            data-motion={motion}
            data-placement={actualSide}
            style={style}
            onMouseEnter={openSubmenu}
            onMouseLeave={scheduleClose}
            onKeyDown={(e) => {
              const nodes = Array.from(
                menuRef.current?.querySelectorAll<HTMLButtonElement>(
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
              } else if (e.key === 'Home') {
                e.preventDefault()
                nodes[0]?.focus()
              } else if (e.key === 'End') {
                e.preventDefault()
                nodes[nodes.length - 1]?.focus()
              }
            }}
            className={cn(
              'z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]',
              actualSide === 'top'
                ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5"
                : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
              m.flyoutPanel,
              motion !== 'none' && (isVisible ? 'abc-animate-popover-in' : 'abc-animate-popover-out')
            )}
          >
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

/** 顶部水平菜单导航条（用于 top 与 mix 布局模式，同步响应四档尺寸与动效规格） */
export const TopHorizontalNav: React.FC<{
  items: AbcMenuItem[]
  pathname: string
  /** mix 模式下仅切换一级大类，不直接展开下拉浮层 */
  topLevelOnly?: boolean
  activeRootKey?: string
  size?: AbcSize
  motion?: AbcMotionPreset
  onSelectRoot?: (item: AbcMenuItem) => void
  onNavigate: (path: string, item: AbcMenuItem) => void
}> = ({
  items,
  pathname,
  topLevelOnly = false,
  activeRootKey,
  size,
  motion,
  onSelectRoot,
  onNavigate,
}) => {
  const { iconRegistry } = useAbcConfig()
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const m = NAV_SIZE_METRICS[resolvedSize]

  return (
    <nav
      aria-label="顶部主导航"
      data-size={resolvedSize}
      data-motion={resolvedMotion}
      className="flex min-w-0 items-center gap-1 overflow-x-auto py-0.5 [scrollbar-width:none]"
    >
      {items.map((item) => {
        const isActive = topLevelOnly
          ? activeRootKey === item.key
          : menuContainsPath(item, pathname)

        if (topLevelOnly || !item.children?.length) {
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => {
                if (topLevelOnly && onSelectRoot) {
                  onSelectRoot(item)
                } else if (item.path) {
                  onNavigate(item.path, item)
                }
              }}
              className={cn(
                'inline-flex flex-none items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                NAV_BTN_MOTION_CLASS,
                m.topItem,
                isActive
                  ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                  : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
              )}
            >
              {renderMenuIcon(item.icon, iconRegistry, m.topIcon)}
              <span>{item.label}</span>
            </button>
          )
        }

        return (
          <TopNavSubmenuItem
            key={item.key}
            item={item}
            pathname={pathname}
            isActive={isActive}
            registry={iconRegistry}
            size={resolvedSize}
            motion={resolvedMotion}
            onNavigate={onNavigate}
          />
        )
      })}
    </nav>
  )
}
