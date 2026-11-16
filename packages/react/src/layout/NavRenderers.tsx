import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { ChevronDown, ChevronRight, Pencil } from 'lucide-react'
import { isSvgSource } from '../components/display/ImagePreview'
import { Tooltip } from '../components/display/Overlays'
import Icon from '../components/icon/Icon'
import { useAbcMotion, useAbcSize } from '../hooks/useAbcDefaults'
import { useFloatingPosition } from '../hooks/useFloatingPosition'
import { usePresence } from '../hooks/usePresence'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import type { AbcBrandInfo, AbcMenuItem, AbcSidebarTone } from './types'

interface NavSizeMetric {
  brandWrapExpanded: string
  brandWrapCollapsed: string
  brandGap: string
  brandLogoBox: string
  brandTitle: string
  brandSubtitle: string
  brandEditIcon: string
  navPadding: string
  itemButton: string
  itemIcon: number
  chevron: string
  badge: string
  collapsedBtn: string
  collapsedIcon: number
  subWrap: string
  subButton: string
  subIcon: number
  flyoutPanel: string
  flyoutHeader: string
  flyoutHeadingIcon: number
  flyoutHeadingText: string
  flyoutItem: string
  flyoutIcon: number
  flyoutSubIndent: string
  topItem: string
  topIcon: number
  topChevron: string
  dualRailWrap: string
  dualRailItem: string
  dualRailIcon: number
  dualRailLabelMaxW: string
  dualPanelHeader: string
  dualPanelTitle: string
  dualPanelWrap: string
  dualPanelItem: string
  dualPanelIcon: number
}

/** 四档全局/局部组件尺寸 (xs | sm | md | lg) 对应的侧栏与导航度量字典 */
const NAV_SIZE_METRICS: Record<AbcSize, NavSizeMetric> = {
  xs: {
    brandWrapExpanded: 'px-3',
    brandWrapCollapsed: 'px-1.5',
    brandGap: 'gap-2',
    brandLogoBox: 'h-7 w-7 text-xs',
    brandTitle: 'text-xs',
    brandSubtitle: 'text-[10px]',
    brandEditIcon: 'h-2.5 w-2.5',
    navPadding: 'space-y-0.5 p-1.5',
    itemButton: 'min-h-[var(--abc-control-h-xs)] gap-2 px-2.5 py-1 text-[11px]',
    itemIcon: 14,
    chevron: 'h-3 w-3',
    badge: 'px-1 py-0 text-[9px]',
    collapsedBtn: 'min-h-0 h-8 py-0',
    collapsedIcon: 15,
    subWrap: 'mt-0.5 ml-3 space-y-0.5 pl-2 pb-0.5',
    subButton: 'min-h-6.5 gap-1.5 px-2 py-1 text-[11px]',
    subIcon: 12,
    flyoutPanel: 'min-w-[168px] p-1',
    flyoutHeader: 'px-2 py-1 text-[10px]',
    flyoutHeadingIcon: 12,
    flyoutHeadingText: 'px-2 py-1 text-[10px]',
    flyoutItem: 'gap-1.5 px-2 py-1 text-[11px]',
    flyoutIcon: 12,
    flyoutSubIndent: 'mt-0.5 ml-2.5 pl-1.5',
    topItem: 'h-[var(--abc-control-h-xs)] gap-1 px-2.5 text-[11px]',
    topIcon: 13,
    topChevron: 'h-2.5 w-2.5',
    dualRailWrap: 'gap-1 px-1',
    dualRailItem: 'gap-0.5 py-1.5 text-[9px]',
    dualRailIcon: 15,
    dualRailLabelMaxW: 'max-w-10',
    dualPanelHeader: 'px-3',
    dualPanelTitle: 'text-[11px]',
    dualPanelWrap: 'space-y-0.5 p-1.5',
    dualPanelItem: 'min-h-[var(--abc-control-h-xs)] gap-1.5 px-2.5 py-1 text-[11px]',
    dualPanelIcon: 13,
  },
  sm: {
    brandWrapExpanded: 'px-4',
    brandWrapCollapsed: 'px-2',
    brandGap: 'gap-2.5',
    brandLogoBox: 'h-8 w-8 text-sm',
    brandTitle: 'text-sm',
    brandSubtitle: 'text-[10px]',
    brandEditIcon: 'h-3 w-3',
    navPadding: 'space-y-1 p-2.5',
    itemButton: 'min-h-[var(--abc-control-h-sm)] gap-2.5 px-3 py-1.5 text-xs',
    itemIcon: 16,
    chevron: 'h-3.5 w-3.5',
    badge: 'px-1.5 py-0.2 text-[10px]',
    collapsedBtn: 'min-h-0 h-9 py-0',
    collapsedIcon: 16,
    subWrap: 'mt-1 ml-4 space-y-0.5 pl-2.5 pb-0.5',
    subButton: 'min-h-7.5 gap-2 px-2.5 py-1.5 text-xs',
    subIcon: 14,
    flyoutPanel: 'min-w-[184px] p-1.5',
    flyoutHeader: 'px-2.5 py-1.5 text-[11px]',
    flyoutHeadingIcon: 13,
    flyoutHeadingText: 'px-2.5 py-1 text-[11px]',
    flyoutItem: 'gap-2 px-2.5 py-1.5 text-xs',
    flyoutIcon: 14,
    flyoutSubIndent: 'mt-0.5 ml-3 pl-2',
    topItem: 'h-[var(--abc-control-h-sm)] gap-1.5 px-3 text-xs',
    topIcon: 15,
    topChevron: 'h-3 w-3',
    dualRailWrap: 'gap-1.5 px-1.5',
    dualRailItem: 'gap-1 py-2 text-[10px]',
    dualRailIcon: 17,
    dualRailLabelMaxW: 'max-w-12',
    dualPanelHeader: 'px-3.5',
    dualPanelTitle: 'text-xs',
    dualPanelWrap: 'space-y-1 p-2',
    dualPanelItem: 'min-h-[var(--abc-control-h-sm)] gap-2 px-3 py-1.5 text-xs',
    dualPanelIcon: 15,
  },
  md: {
    brandWrapExpanded: 'px-4',
    brandWrapCollapsed: 'px-2',
    brandGap: 'gap-3',
    brandLogoBox: 'h-9 w-9 text-sm',
    brandTitle: 'text-[15px]',
    brandSubtitle: 'text-[11px]',
    brandEditIcon: 'h-3.5 w-3.5',
    navPadding: 'space-y-1 p-3',
    itemButton: 'min-h-[var(--abc-control-h-md)] gap-2.5 px-3.5 py-2 text-[13px]',
    itemIcon: 18,
    chevron: 'h-4 w-4',
    badge: 'px-1.5 py-0.5 text-[11px]',
    collapsedBtn: 'min-h-0 h-10 py-0',
    collapsedIcon: 18,
    subWrap: 'mt-1 ml-4.5 space-y-1 pl-3 pb-1',
    subButton: 'min-h-8.5 gap-2.5 px-3 py-1.5 text-[13px]',
    subIcon: 15,
    flyoutPanel: 'min-w-[204px] p-1.5',
    flyoutHeader: 'px-3 py-1.5 text-xs',
    flyoutHeadingIcon: 14,
    flyoutHeadingText: 'px-3 py-1 text-xs',
    flyoutItem: 'gap-2.5 px-3 py-2 text-[13px]',
    flyoutIcon: 15,
    flyoutSubIndent: 'mt-1 ml-3.5 pl-2.5',
    topItem: 'h-[var(--abc-control-h-md)] gap-2 px-3.5 text-[13px]',
    topIcon: 16,
    topChevron: 'h-3.5 w-3.5',
    dualRailWrap: 'gap-2 px-1.5',
    dualRailItem: 'gap-1 py-2.5 text-[11px]',
    dualRailIcon: 19,
    dualRailLabelMaxW: 'max-w-13',
    dualPanelHeader: 'px-4',
    dualPanelTitle: 'text-[13px]',
    dualPanelWrap: 'space-y-1 p-2.5',
    dualPanelItem: 'min-h-[var(--abc-control-h-md)] gap-2.5 px-3.5 py-2 text-[13px]',
    dualPanelIcon: 16,
  },
  lg: {
    brandWrapExpanded: 'px-4.5',
    brandWrapCollapsed: 'px-2.5',
    brandGap: 'gap-3',
    brandLogoBox: 'h-10 w-10 text-base',
    brandTitle: 'text-base',
    brandSubtitle: 'text-xs',
    brandEditIcon: 'h-3.5 w-3.5',
    navPadding: 'space-y-1.5 p-3.5',
    itemButton: 'min-h-[var(--abc-control-h-lg)] gap-3 px-4 py-2.5 text-sm',
    itemIcon: 20,
    chevron: 'h-4 w-4',
    badge: 'px-2 py-0.5 text-xs',
    collapsedBtn: 'min-h-0 h-11 py-0',
    collapsedIcon: 20,
    subWrap: 'mt-1.5 ml-5 space-y-1 pl-3.5 pb-1',
    subButton: 'min-h-9.5 gap-3 px-3.5 py-2 text-sm',
    subIcon: 16,
    flyoutPanel: 'min-w-[224px] p-2',
    flyoutHeader: 'px-3.5 py-2 text-[13px]',
    flyoutHeadingIcon: 15,
    flyoutHeadingText: 'px-3.5 py-1.5 text-xs',
    flyoutItem: 'gap-2.5 px-3.5 py-2.5 text-sm',
    flyoutIcon: 16,
    flyoutSubIndent: 'mt-1 ml-4 pl-2.5',
    topItem: 'h-[var(--abc-control-h-lg)] gap-2 px-4 text-sm',
    topIcon: 17,
    topChevron: 'h-3.5 w-3.5',
    dualRailWrap: 'gap-2 px-2',
    dualRailItem: 'gap-1.5 py-3 text-xs',
    dualRailIcon: 21,
    dualRailLabelMaxW: 'max-w-14',
    dualPanelHeader: 'px-4',
    dualPanelTitle: 'text-sm',
    dualPanelWrap: 'space-y-1.5 p-3',
    dualPanelItem: 'min-h-[var(--abc-control-h-lg)] gap-3 px-4 py-2.5 text-sm',
    dualPanelIcon: 18,
  },
}

const NAV_BTN_MOTION_CLASS =
  'transition-[background-color,color,box-shadow,transform] duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-active)] motion-safe:enabled:active:scale-[var(--abc-press-scale)]'

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
  size: AbcSize
  onSelect: (path: string, item: AbcMenuItem) => void
  depth?: number
}> = ({ items, pathname, registry, size, onSelect, depth = 0 }) => {
  const m = NAV_SIZE_METRICS[size]

  return (
    <div
      className={cn(
        'space-y-0.5',
        depth > 0 && cn('border-l border-[var(--abc-border)]', m.flyoutSubIndent)
      )}
    >
      {items.map((sub) => {
        const hasSubChildren = Boolean(sub.children && sub.children.length > 0)
        const subActive = sub.path === pathname
        const subBranchActive = hasSubChildren && menuContainsPath(sub, pathname)

        if (hasSubChildren) {
          return (
            <div key={sub.key} className="py-0.5">
              <div
                className={cn(
                  'flex items-center gap-1.5 font-semibold select-none',
                  m.flyoutHeadingText,
                  subBranchActive ? 'text-[var(--abc-primary)]' : 'text-[var(--abc-fg-muted)]'
                )}
              >
                {renderMenuIcon(sub.icon, registry, m.flyoutHeadingIcon)}
                <span className="truncate">{sub.label}</span>
              </div>
              <SubmenuFlyoutItems
                items={sub.children!}
                pathname={pathname}
                registry={registry}
                size={size}
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
              'flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]',
              NAV_BTN_MOTION_CLASS,
              m.flyoutItem,
              subActive
                ? 'bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]'
                : 'text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]',
              sub.disabled && 'opacity-45 cursor-not-allowed'
            )}
          >
            {renderMenuIcon(sub.icon, registry, m.flyoutIcon)}
            <span className="flex-1 truncate">{sub.label}</span>
            {sub.badge !== undefined && (
              <span
                className={cn(
                  'rounded-full bg-[var(--abc-primary-soft)] font-mono text-[var(--abc-primary)]',
                  m.badge
                )}
              >
                {sub.badge}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

/** 品牌 Logo 与项目名展示块（支持直链图片、内联 SVG、四档尺寸联动及多租户品牌快捷编辑按钮） */
export const BrandLogoBlock: React.FC<{
  brand: AbcBrandInfo
  collapsed?: boolean
  tone?: 'dark' | 'light'
  size?: AbcSize
  className?: string
}> = ({ brand, collapsed = false, tone = 'light', size, className }) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const m = NAV_SIZE_METRICS[resolvedSize]
  const isDark = tone === 'dark'

  const logoNode = useMemo(() => {
    if (!brand.logo) {
      return (
        <div
          className={cn(
            'flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)] font-bold text-[var(--abc-primary-fg)] shadow-xs transition-transform duration-[var(--abc-motion-fast)] group-hover:scale-[1.03]',
            m.brandLogoBox
          )}
        >
          {brand.name.slice(0, 1).toUpperCase()}
        </div>
      )
    }
    if (typeof brand.logo === 'string') {
      if (isSvgSource(brand.logo)) {
        return (
          <div
            className={cn(
              'flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)]/15 p-1 text-[var(--abc-primary)] [&>svg]:max-h-full [&>svg]:max-w-full',
              m.brandLogoBox
            )}
            dangerouslySetInnerHTML={{ __html: brand.logo }}
          />
        )
      }
      return (
        <img
          src={brand.logo}
          alt={brand.name}
          className={cn('shrink-0 rounded-[var(--abc-radius-md)] object-contain', m.brandLogoBox)}
        />
      )
    }
    return <div className="shrink-0">{brand.logo}</div>
  }, [brand.logo, brand.name, m.brandLogoBox])

  return (
    <div
      data-size={resolvedSize}
      className={cn(
        'group flex items-center select-none',
        m.brandGap,
        collapsed ? cn('justify-center', m.brandWrapCollapsed) : m.brandWrapExpanded,
        className
      )}
    >
      <div
        onClick={brand.onClick}
        className={cn(
          'flex min-w-0 flex-1 items-center',
          m.brandGap,
          brand.onClick && 'cursor-pointer'
        )}
      >
        {logoNode}
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <div
              className={cn(
                'truncate font-bold tracking-tight',
                m.brandTitle,
                isDark ? 'text-white' : 'text-[var(--abc-fg)]'
              )}
            >
              {brand.name}
            </div>
            {brand.subtitle && (
              <div
                className={cn(
                  'truncate',
                  m.brandSubtitle,
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
          <Pencil className={m.brandEditIcon} />
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
                  className={cn(
                    'shrink-0 opacity-70 transition-transform duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-out)]',
                    m.chevron,
                    !expanded && '-rotate-90'
                  )}
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
            className={cn(
              'opacity-70 transition-transform duration-[var(--abc-motion-fast)]',
              m.topChevron,
              open && 'rotate-180 text-[var(--abc-primary)] opacity-100'
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

/** 双栏紧凑导航（左侧极窄主轨 Rail + 右侧二级子菜单面板，同步响应四档尺寸与动效规格） */
export const DualColumnNav: React.FC<{
  brand?: AbcBrandInfo
  items: AbcMenuItem[]
  pathname: string
  tone?: AbcSidebarTone
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
  onNavigate: (path: string, item: AbcMenuItem) => void
}> = ({ brand, items, pathname, tone = 'dark', size, motion, className, onNavigate }) => {
  const { iconRegistry } = useAbcConfig()
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const m = NAV_SIZE_METRICS[resolvedSize]
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
    <div
      aria-label="双栏侧边导航"
      data-size={resolvedSize}
      data-motion={resolvedMotion}
      className={cn('flex h-full shrink-0 select-none', className)}
    >
      {/* 第一栏：紧凑主图标轨 */}
      <div
        style={{ width: 'var(--abc-dual-rail-w)' }}
        className={cn(
          'flex h-full flex-col items-center border-r py-2.5 transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]',
          isDark
            ? 'border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300'
            : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]'
        )}
      >
        {brand && (
          <div className="mb-3">
            <BrandLogoBlock brand={brand} collapsed tone={tone} size={resolvedSize} />
          </div>
        )}
        <div className={cn('flex w-full flex-1 flex-col items-center overflow-y-auto', m.dualRailWrap)}>
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
                  'flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer',
                  NAV_BTN_MOTION_CLASS,
                  m.dualRailItem,
                  active
                    ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                    : isDark
                      ? 'text-slate-400 hover:bg-white/10 hover:text-white'
                      : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                )}
              >
                {renderMenuIcon(item.icon ?? 'folder', iconRegistry, m.dualRailIcon)}
                <span className={cn('truncate', m.dualRailLabelMaxW)}>{item.label.slice(0, 4)}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 第二栏：当前主模块的子级面板 */}
      {subItems.length > 0 && (
        <div
          style={{ width: 'var(--abc-dual-panel-w)' }}
          className="flex h-full flex-col border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)] transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]"
        >
          <div
            className={cn(
              'flex h-[var(--abc-header-h)] items-center justify-between border-b border-[var(--abc-border)]',
              m.dualPanelHeader
            )}
          >
            <span className={cn('truncate font-bold text-[var(--abc-fg)]', m.dualPanelTitle)}>
              {activeRoot?.label}
            </span>
            <ChevronRight className={cn('text-[var(--abc-fg-muted)]', m.chevron)} />
          </div>
          <div className={cn('flex-1 overflow-y-auto', m.dualPanelWrap)}>
            {subItems.map((sub) => {
              const active = sub.path === pathname
              return (
                <button
                  key={sub.key}
                  type="button"
                  disabled={sub.disabled}
                  onClick={() => !sub.disabled && sub.path && onNavigate(sub.path, sub)}
                  className={cn(
                    'flex w-full items-center rounded-[var(--abc-radius-md)] text-left font-medium cursor-pointer',
                    NAV_BTN_MOTION_CLASS,
                    m.dualPanelItem,
                    active
                      ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                      : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]',
                    sub.disabled && 'opacity-40 cursor-not-allowed'
                  )}
                >
                  {renderMenuIcon(sub.icon, iconRegistry, m.dualPanelIcon)}
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
