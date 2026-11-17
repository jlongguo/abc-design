import React from 'react'
import type { AbcSize } from '@abc-design/tokens'
import Icon from '../../components/icon/Icon'
import { cn } from '../../utils/cn'
import type { AbcMenuItem } from '../types'

export interface NavSizeMetric {
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
export const NAV_SIZE_METRICS: Record<AbcSize, NavSizeMetric> = {
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

export const NAV_BTN_MOTION_CLASS =
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

export function renderMenuIcon(
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
export const SubmenuFlyoutItems: React.FC<{
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
