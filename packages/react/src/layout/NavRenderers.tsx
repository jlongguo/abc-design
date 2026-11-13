import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, ChevronRight, Pencil } from 'lucide-react'
import { isSvgSource } from '../components/display/ImagePreview'
import { Tooltip } from '../components/display/Overlays'
import Icon from '../components/icon/Icon'
import { useFloatingPosition } from '../hooks/useFloatingPosition'
import { usePresence } from '../hooks/usePresence'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import type { AbcBrandInfo, AbcMenuItem, AbcSidebarTone } from './types'

export function menuContainsPath(item: AbcMenuItem, pathname: string): boolean {
  if (item.path && (pathname === item.path || pathname.startsWith(`${item.path}/`))) {
    return true
  }
  return Boolean(item.children?.some((child) => menuContainsPath(child, pathname)))
}

export function findBreadcrumbChain(
  items: AbcMenuItem[],
  pathname: string,
  acc: AbcMenuItem[] = []
): AbcMenuItem[] {
  for (const item of items) {
    const nextAcc = [...acc, item]
    if (item.path === pathname) return nextAcc
    if (item.children?.length) {
      const found = findBreadcrumbChain(item.children, pathname, nextAcc)
      if (found.length > 0) return found
    }
  }
  return []
}

function renderMenuIcon(
  icon: string | React.ReactNode | undefined,
  registry: Record<string, any>,
  size = 16
) {
  if (!icon) return null
  if (typeof icon === 'string') {
    return <Icon name={icon} size={size} registry={registry} />
  }
  return <span className="inline-flex shrink-0 items-center">{icon}</span>
}

/** 递归渲染二级及三级子菜单列表（用于顶栏下拉面板与折叠侧边栏浮出菜单） */
const SubmenuFlyoutItems: React.FC<{
  items: AbcMenuItem[]
  pathname: string
  registry: Record<string, any>
  onSelect: (path: string, item: AbcMenuItem) => void
  depth?: number
}> = ({ items, pathname, registry, onSelect, depth = 0 }) => {
  return (
    <div className={cn('space-y-0.5', depth > 0 && 'mt-0.5 ml-3 border-l border-[var(--abc-border)] pl-2')}>
      {items.map((sub) => {
        const hasSubChildren = Boolean(sub.children && sub.children.length > 0)
        const subActive = sub.path === pathname
        const subBranchActive = hasSubChildren && menuContainsPath(sub, pathname)

        if (hasSubChildren) {
          return (
            <div key={sub.key} className="py-0.5">
              <div
                className={cn(
                  'flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold select-none',
                  subBranchActive ? 'text-[var(--abc-primary)]' : 'text-[var(--abc-fg-muted)]'
                )}
              >
                {renderMenuIcon(sub.icon, registry, 13)}
                <span className="truncate">{sub.label}</span>
              </div>
              <SubmenuFlyoutItems
                items={sub.children!}
                pathname={pathname}
                registry={registry}
                onSelect={onSelect}
                depth={depth + 1}
              />
            </div>
          )
        }

        return (
          <button
            key={sub.key}
            type="button"
            role="menuitem"
            disabled={sub.disabled}
            onClick={() => {
              if (!sub.disabled && sub.path) {
                onSelect(sub.path, sub)
              }
            }}
            className={cn(
              'flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]',
              subActive
                ? 'bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]'
                : 'text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]',
              sub.disabled && 'opacity-45 cursor-not-allowed'
            )}
          >
            {renderMenuIcon(sub.icon, registry, 14)}
            <span className="flex-1 truncate">{sub.label}</span>
            {sub.badge !== undefined && (
              <span className="rounded-full bg-[var(--abc-primary-soft)] px-1.5 py-0.2 font-mono text-[10px] text-[var(--abc-primary)]">
                {sub.badge}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

/** 品牌 Logo 与项目名展示块（支持直链图片、内联 SVG 及多租户品牌快捷编辑按钮） */
export const BrandLogoBlock: React.FC<{
  brand: AbcBrandInfo
  collapsed?: boolean
  tone?: 'dark' | 'light'
  className?: string
}> = ({ brand, collapsed = false, tone = 'light', className }) => {
  const isDark = tone === 'dark'
  const logoNode = useMemo(() => {
    if (!brand.logo) {
      return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)] font-bold text-sm text-[var(--abc-primary-fg)] shadow-xs transition-transform duration-150 group-hover:scale-[1.03]">
          {brand.name.slice(0, 1).toUpperCase()}
        </div>
      )
    }
    if (typeof brand.logo === 'string') {
      if (isSvgSource(brand.logo)) {
        return (
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)]/15 p-1 text-[var(--abc-primary)] [&>svg]:max-h-full [&>svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: brand.logo }}
          />
        )
      }
      return (
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-8 w-8 shrink-0 rounded-[var(--abc-radius-md)] object-contain"
        />
      )
    }
    return <div className="shrink-0">{brand.logo}</div>
  }, [brand.logo, brand.name])

  return (
    <div
      className={cn(
        'group flex items-center gap-2.5 select-none',
        collapsed ? 'justify-center px-2' : 'px-4',
        className
      )}
    >
      <div
        onClick={brand.onClick}
        className={cn(
          'flex min-w-0 flex-1 items-center gap-2.5',
          brand.onClick && 'cursor-pointer'
        )}
      >
        {logoNode}
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <div
              className={cn(
                'truncate text-sm font-bold tracking-tight',
                isDark ? 'text-white' : 'text-[var(--abc-fg)]'
              )}
            >
              {brand.name}
            </div>
            {brand.subtitle && (
              <div
                className={cn(
                  'truncate text-[10px]',
                  isDark ? 'text-slate-400' : 'text-[var(--abc-fg-muted)]'
                )}
              >
                {brand.subtitle}
              </div>
            )}
          </div>
        )}
      </div>

      {!collapsed && brand.onEditBrand && (
        <button
          type="button"
          aria-label="编辑品牌信息"
          title="修改品牌 Logo 与名称"
          onClick={(e) => {
            e.stopPropagation()
            brand.onEditBrand?.()
          }}
          className={cn(
            'rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer',
            isDark
              ? 'text-slate-400 hover:bg-white/10 hover:text-white'
              : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
          )}
        >
          <Pencil className="h-3 w-3" />
        </button>
      )}
    </div>
  )
}

/** 折叠态侧边栏带 Portal 右侧浮出面板的父节点 */
const CollapsedSidebarBranch: React.FC<{
  item: AbcMenuItem
  pathname: string
  isDark: boolean
  registry: Record<string, any>
  onNavigate: (path: string, item: AbcMenuItem) => void
}> = ({ item, pathname, isDark, registry, onNavigate }) => {
  const [open, setOpen] = useState(false)
  const { isMounted, isVisible } = usePresence(open, 140)
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
          'flex w-full items-center justify-center rounded-[var(--abc-radius-md)] py-2 text-xs font-medium transition-colors cursor-pointer',
          activeBranch
            ? isDark
              ? 'bg-white/12 text-white'
              : 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
            : isDark
              ? 'text-slate-300 hover:bg-white/8 hover:text-white'
              : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
        )}
      >
        {renderMenuIcon(item.icon ?? 'folder', registry, 16)}
      </button>

      {isMounted &&
        portalContainer &&
        createPortal(
          <div
            ref={flyoutRef}
            id={menuId}
            role="menu"
            aria-label={item.label}
            data-abc-floating=""
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
              'z-[1250] min-w-[184px] max-w-[260px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1.5 text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]',
              isVisible ? 'abc-animate-popover-in' : 'abc-animate-popover-out'
            )}
          >
            <div className="mb-1 border-b border-[var(--abc-border)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--abc-fg)]">
              {item.label}
            </div>
            <SubmenuFlyoutItems
              items={item.children ?? []}
              pathname={pathname}
              registry={registry}
              onSelect={(path, subItem) => {
                onNavigate(path, subItem)
                setOpen(false)
              }}
            />
          </div>,
          portalContainer
        )}
    </div>
  )
}

/** 经典侧边栏树形菜单渲染器（支持深浅双色、折叠 Portal 悬浮子菜单与平滑网格手风琴展开） */
export const SidebarNav: React.FC<{
  brand?: AbcBrandInfo
  items: AbcMenuItem[]
  pathname: string
  collapsed?: boolean
  accordion?: boolean
  tone?: AbcSidebarTone
  onNavigate: (path: string, item: AbcMenuItem) => void
  className?: string
}> = ({
  brand,
  items,
  pathname,
  collapsed = false,
  accordion = true,
  tone = 'dark',
  onNavigate,
  className,
}) => {
  const { iconRegistry } = useAbcConfig()
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
      style={{
        width: collapsed ? 'var(--abc-sidebar-collapsed-w)' : 'var(--abc-sidebar-w)',
      }}
      className={cn(
        'flex h-full shrink-0 flex-col border-r transition-[width] duration-200 ease-out select-none',
        isDark
          ? 'border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]'
          : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]',
        className
      )}
    >
      {brand && (
        <div
          className={cn(
            'flex h-[var(--abc-header-h)] shrink-0 items-center border-b',
            isDark ? 'border-[var(--abc-sidebar-dark-border)]' : 'border-[var(--abc-border)]'
          )}
        >
          <BrandLogoBlock brand={brand} collapsed={collapsed} tone={tone} className="w-full" />
        </div>
      )}

      <nav className="flex-1 space-y-1 overflow-y-auto p-2.5">
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
                  'flex w-full items-center gap-2.5 rounded-[var(--abc-radius-md)] px-3 py-2 text-xs font-medium transition-colors cursor-pointer',
                  collapsed && 'justify-center px-0',
                  activeSelf
                    ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                    : isDark
                      ? 'text-slate-300 hover:bg-white/8 hover:text-white'
                      : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]',
                  item.disabled && 'opacity-40 cursor-not-allowed'
                )}
              >
                {renderMenuIcon(item.icon, iconRegistry, 16)}
                {!collapsed && <span className="flex-1 truncate text-left">{item.label}</span>}
                {!collapsed && item.badge !== undefined && (
                  <span className="rounded-full bg-white/15 px-1.5 py-0.2 font-mono text-[10px]">
                    {item.badge}
                  </span>
                )}
              </button>
            )

            return collapsed ? (
              <Tooltip key={item.key} content={item.label} placement="right" className="w-full">
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
                  'flex w-full items-center gap-2.5 rounded-[var(--abc-radius-md)] px-3 py-2 text-xs font-medium transition-colors cursor-pointer',
                  activeBranch
                    ? isDark
                      ? 'bg-white/10 text-white'
                      : 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                    : isDark
                      ? 'text-slate-300 hover:bg-white/8 hover:text-white'
                      : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                )}
              >
                {renderMenuIcon(item.icon, iconRegistry, 16)}
                <span className="flex-1 truncate text-left">{item.label}</span>
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5 shrink-0 opacity-70 transition-transform duration-200',
                    !expanded && '-rotate-90'
                  )}
                />
              </button>

              {/* 展开态平滑网格高度过渡二级子菜单 */}
              <div
                inert={!expanded}
                className={cn(
                  'grid transition-[grid-template-rows,opacity] duration-200 ease-out',
                  expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <div
                    className={cn(
                      'mt-1 ml-4 space-y-0.5 border-l pl-2.5 pb-0.5',
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
                            'flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer',
                            subActive
                              ? 'bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]'
                              : isDark
                                ? 'text-slate-400 hover:bg-white/8 hover:text-white'
                                : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                          )}
                        >
                          {renderMenuIcon(sub.icon, iconRegistry, 14)}
                          <span className="flex-1 truncate">{sub.label}</span>
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

/** 顶部导航条单个带下拉子菜单的父级项（Portal 顶层逃逸 <nav> overflow-x-auto 裁剪，兼容 Hover + Click + 键盘巡航） */
const TopNavSubmenuItem: React.FC<{
  item: AbcMenuItem
  pathname: string
  isActive: boolean
  registry: Record<string, any>
  onNavigate: (path: string, item: AbcMenuItem) => void
}> = ({ item, pathname, isActive, registry, onNavigate }) => {
  const [open, setOpen] = useState(false)
  const { isMounted, isVisible } = usePresence(open, 140)
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
          'inline-flex h-8.5 items-center gap-1.5 rounded-[var(--abc-radius-md)] px-3 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
          isActive
            ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
            : open
              ? 'bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]'
              : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
        )}
      >
        {renderMenuIcon(item.icon, registry, 15)}
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            'h-3 w-3 opacity-70 transition-transform duration-150',
            open && 'rotate-180 text-[var(--abc-primary)] opacity-100'
          )}
        />
      </button>

      {isMounted &&
        portalContainer &&
        createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label={`${item.label} 子菜单`}
            data-abc-floating=""
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
              'z-[1250] min-w-[188px] max-w-[280px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1.5 shadow-[var(--abc-shadow-popover)]',
              isVisible ? 'abc-animate-popover-in' : 'abc-animate-popover-out'
            )}
          >
            <SubmenuFlyoutItems
              items={item.children ?? []}
              pathname={pathname}
              registry={registry}
              onSelect={(path, subItem) => {
                onNavigate(path, subItem)
                setOpen(false)
              }}
            />
          </div>,
          portalContainer
        )}
    </div>
  )
}

/** 顶部水平菜单导航条（用于 top 与 mix 布局模式） */
export const TopHorizontalNav: React.FC<{
  items: AbcMenuItem[]
  pathname: string
  /** mix 模式下仅切换一级大类，不直接展开下拉浮层 */
  topLevelOnly?: boolean
  activeRootKey?: string
  onSelectRoot?: (item: AbcMenuItem) => void
  onNavigate: (path: string, item: AbcMenuItem) => void
}> = ({
  items,
  pathname,
  topLevelOnly = false,
  activeRootKey,
  onSelectRoot,
  onNavigate,
}) => {
  const { iconRegistry } = useAbcConfig()

  return (
    <nav
      aria-label="顶部主导航"
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
                'inline-flex h-8.5 flex-none items-center gap-1.5 rounded-[var(--abc-radius-md)] px-3 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                isActive
                  ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                  : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
              )}
            >
              {renderMenuIcon(item.icon, iconRegistry, 15)}
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
            onNavigate={onNavigate}
          />
        )
      })}
    </nav>
  )
}

/** 双栏紧凑导航（左侧极窄主轨 Rail + 右侧二级子菜单面板） */
export const DualColumnNav: React.FC<{
  brand?: AbcBrandInfo
  items: AbcMenuItem[]
  pathname: string
  tone?: AbcSidebarTone
  onNavigate: (path: string, item: AbcMenuItem) => void
}> = ({ brand, items, pathname, tone = 'dark', onNavigate }) => {
  const { iconRegistry } = useAbcConfig()
  const isDark = tone === 'dark'

  const matchedRoot = useMemo(
    () => items.find((it) => menuContainsPath(it, pathname)) ?? items[0],
    [items, pathname]
  )
  const [selectedRootKey, setSelectedRootKey] = useState<string>(matchedRoot?.key ?? '')

  useEffect(() => {
    if (matchedRoot?.key) setSelectedRootKey(matchedRoot.key)
  }, [matchedRoot?.key])

  const activeRoot = items.find((it) => it.key === selectedRootKey) ?? matchedRoot
  const subItems = activeRoot?.children ?? []

  return (
    <div className="flex h-full shrink-0 select-none">
      {/* 第一栏：紧凑主图标轨 */}
      <div
        style={{ width: 'var(--abc-dual-rail-w)' }}
        className={cn(
          'flex h-full flex-col items-center border-r py-2.5',
          isDark
            ? 'border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300'
            : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]'
        )}
      >
        {brand && (
          <div className="mb-3">
            <BrandLogoBlock brand={brand} collapsed tone={tone} />
          </div>
        )}
        <div className="flex w-full flex-1 flex-col items-center gap-1.5 overflow-y-auto px-1.5">
          {items.map((item) => {
            const active = item.key === activeRoot?.key
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  setSelectedRootKey(item.key)
                  if (!item.children?.length && item.path) {
                    onNavigate(item.path, item)
                  } else if (item.children?.[0]?.path) {
                    onNavigate(item.children[0].path, item.children[0])
                  }
                }}
                className={cn(
                  'flex w-full flex-col items-center justify-center gap-1 rounded-[var(--abc-radius-md)] py-2 text-[10px] font-medium transition-colors cursor-pointer',
                  active
                    ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                    : isDark
                      ? 'text-slate-400 hover:bg-white/10 hover:text-white'
                      : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                )}
              >
                {renderMenuIcon(item.icon ?? 'folder', iconRegistry, 17)}
                <span className="max-w-12 truncate">{item.label.slice(0, 4)}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 第二栏：当前主模块的子级面板 */}
      {subItems.length > 0 && (
        <div
          style={{ width: 'var(--abc-dual-panel-w)' }}
          className="flex h-full flex-col border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]"
        >
          <div className="flex h-[var(--abc-header-h)] items-center justify-between border-b border-[var(--abc-border)] px-3.5">
            <span className="truncate text-xs font-bold text-[var(--abc-fg)]">
              {activeRoot?.label}
            </span>
            <ChevronRight className="h-3.5 w-3.5 text-[var(--abc-fg-muted)]" />
          </div>
          <div className="flex-1 space-y-1 overflow-y-auto p-2">
            {subItems.map((sub) => {
              const active = sub.path === pathname
              return (
                <button
                  key={sub.key}
                  type="button"
                  onClick={() => sub.path && onNavigate(sub.path, sub)}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-[var(--abc-radius-md)] px-3 py-2 text-left text-xs font-medium transition-colors cursor-pointer',
                    active
                      ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                      : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  {renderMenuIcon(sub.icon, iconRegistry, 15)}
                  <span className="truncate">{sub.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
