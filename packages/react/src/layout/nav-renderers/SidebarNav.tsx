import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { ChevronDown } from 'lucide-react'
import { Tooltip } from '../../components/display/Overlays'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { useFloatingPosition } from '../../hooks/useFloatingPosition'
import { usePresence } from '../../hooks/usePresence'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'
import type { AbcBrandInfo, AbcMenuItem, AbcSidebarTone } from '../types'
import { BrandLogoBlock } from './BrandLogoBlock'
import {
  menuContainsPath,
  NAV_BTN_MOTION_CLASS,
  NAV_SIZE_METRICS,
  renderMenuIcon,
  SubmenuFlyoutItems,
} from './shared'

/** 折叠态侧边栏带 Portal 右侧浮出面板的父节点 */
const CollapsedSidebarBranch: React.FC<{
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

/** 经典侧边栏树形菜单渲染器（支持深浅双色、四档尺寸与动效、折叠 Portal 悬浮子菜单与平滑网格手风琴展开） */
export const SidebarNav: React.FC<{
  brand?: AbcBrandInfo
  items: AbcMenuItem[]
  pathname: string
  collapsed?: boolean
  accordion?: boolean
  tone?: AbcSidebarTone
  size?: AbcSize
  motion?: AbcMotionPreset
  onNavigate: (path: string, item: AbcMenuItem) => void
  className?: string
}> = ({
  brand,
  items,
  pathname,
  collapsed = false,
  accordion = true,
  tone = 'dark',
  size,
  motion,
  onNavigate,
  className,
}) => {
  const { iconRegistry } = useAbcConfig()
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const m = NAV_SIZE_METRICS[resolvedSize]
  const isDark = tone === 'dark'

  const [openKeys, setOpenKeys] = useState<string[]>(() =>
    items.filter((it) => it.children?.length && menuContainsPath(it, pathname)).map((it) => it.key)
  )

  useEffect(() => {
    const matchedParents = items
      .filter((it) => it.children?.length && menuContainsPath(it, pathname))
      .map((it) => it.key)
    if (matchedParents.length > 0) {
      setOpenKeys((prev) =>
        accordion ? [matchedParents[0]] : Array.from(new Set([...prev, ...matchedParents]))
      )
    }
  }, [pathname, items, accordion])

  const toggleGroup = (key: string) => {
    setOpenKeys((prev) => {
      if (prev.includes(key)) return prev.filter((k) => k !== key)
      return accordion ? [key] : [...prev, key]
    })
  }

  return (
    <aside
      aria-label="侧边主导航"
      data-size={resolvedSize}
      data-motion={resolvedMotion}
      style={{
        width: collapsed ? 'var(--abc-sidebar-collapsed-w)' : 'var(--abc-sidebar-w)',
      }}
      className={cn(
        'flex h-full shrink-0 flex-col border-r transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)] select-none',
        isDark
          ? 'border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]'
          : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]',
        className
      )}
    >
      {brand && (
        <div
          className={cn(
            'flex h-[var(--abc-header-h)] z-10 shrink-0 items-center border-b',
            isDark ? 'border-[var(--abc-sidebar-dark-border)]' : 'border-[var(--abc-border)]'
          )}
        >
          <BrandLogoBlock
            brand={brand}
            collapsed={collapsed}
            tone={tone}
            size={resolvedSize}
            className="w-full"
          />
        </div>
      )}

      <nav className={cn('flex-1 overflow-y-auto', m.navPadding)}>
        {items.map((item) => {
          const hasChildren = Boolean(item.children && item.children.length > 0)
          const activeSelf = item.path === pathname
          const activeBranch = menuContainsPath(item, pathname)
          const expanded = openKeys.includes(item.key)

          if (!hasChildren) {
            const btnNode = (
              <button
                key={item.key}
                type="button"
                disabled={item.disabled}
                aria-label={collapsed ? item.label : undefined}
                onClick={() => item.path && onNavigate(item.path, item)}
                className={cn(
                  'flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer',
                  NAV_BTN_MOTION_CLASS,
                  m.itemButton,
                  collapsed && cn('justify-center px-0', m.collapsedBtn),
                  activeSelf
                    ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                    : isDark
                      ? 'text-slate-300 hover:bg-white/8 hover:text-white'
                      : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]',
                  item.disabled && 'opacity-40 cursor-not-allowed'
                )}
              >
                {renderMenuIcon(item.icon, iconRegistry, collapsed ? m.collapsedIcon : m.itemIcon)}
                {!collapsed && <span className="flex-1 truncate text-left">{item.label}</span>}
                {!collapsed && item.badge !== undefined && (
                  <span className={cn('rounded-full bg-white/15 font-mono', m.badge)}>
                    {item.badge}
                  </span>
                )}
              </button>
            )

            return collapsed ? (
              <Tooltip
                key={item.key}
                content={item.label}
                placement="right"
                motion={resolvedMotion}
                className="flex w-full"
              >
                {btnNode}
              </Tooltip>
            ) : (
              btnNode
            )
          }

          if (collapsed) {
            return (
              <CollapsedSidebarBranch
                key={item.key}
                item={item}
                pathname={pathname}
                isDark={isDark}
                registry={iconRegistry}
                size={resolvedSize}
                motion={resolvedMotion}
                onNavigate={onNavigate}
              />
            )
          }

          return (
            <div key={item.key} className="relative">
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => toggleGroup(item.key)}
                className={cn(
                  'flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer',
                  NAV_BTN_MOTION_CLASS,
                  m.itemButton,
                  activeBranch
                    ? isDark
                      ? 'bg-white/10 text-white'
                      : 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                    : isDark
                      ? 'text-slate-300 hover:bg-white/8 hover:text-white'
                      : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                )}
              >
                {renderMenuIcon(item.icon, iconRegistry, m.itemIcon)}
                <span className="flex-1 truncate text-left">{item.label}</span>
                <ChevronDown
                  data-open={expanded ? 'true' : 'false'}
                  className={cn('abc-chevron-disclosure shrink-0 opacity-70', m.chevron)}
                />
              </button>

              {/* 展开态平滑网格高度过渡二级子菜单 */}
              <div
                inert={!expanded ? ('' as any) : undefined}
                className={cn(
                  'grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]',
                  expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <div
                    className={cn(
                      'border-l',
                      m.subWrap,
                      isDark ? 'border-slate-700/80' : 'border-[var(--abc-border)]'
                    )}
                  >
                    {item.children!.map((sub) => {
                      const subActive = sub.path === pathname
                      return (
                        <button
                          key={sub.key}
                          type="button"
                          disabled={sub.disabled}
                          onClick={() => sub.path && onNavigate(sub.path, sub)}
                          className={cn(
                            'flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer',
                            NAV_BTN_MOTION_CLASS,
                            m.subButton,
                            subActive
                              ? 'bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]'
                              : isDark
                                ? 'text-slate-400 hover:bg-white/8 hover:text-white'
                                : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]',
                            sub.disabled && 'opacity-40 cursor-not-allowed'
                          )}
                        >
                          {renderMenuIcon(sub.icon, iconRegistry, m.subIcon)}
                          <span className="flex-1 truncate">{sub.label}</span>
                          {sub.badge !== undefined && (
                            <span
                              className={cn(
                                'rounded-full font-mono',
                                m.badge,
                                subActive ? 'bg-white/20' : 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                              )}
                            >
                              {sub.badge}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
