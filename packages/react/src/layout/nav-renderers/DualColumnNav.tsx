import React, { useEffect, useMemo, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { ChevronRight } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'
import type { AbcBrandInfo, AbcMenuItem, AbcSidebarTone } from '../types'
import { BrandLogoBlock } from './BrandLogoBlock'
import {
  menuContainsPath,
  NAV_BTN_MOTION_CLASS,
  NAV_SIZE_METRICS,
  renderMenuIcon,
} from './shared'

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
