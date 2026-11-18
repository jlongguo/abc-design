import React from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import {
  ChevronRight,
  Menu,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  SlidersHorizontal,
  Sun,
} from 'lucide-react'
import { Dropdown, Tooltip } from '../components/display/Overlays'
import { Avatar } from '../components/display/StatusTag'
import { Kbd } from '../components/typography/CopyableText'
import { cn } from '../utils/cn'
import { BrandLogoBlock, TopHorizontalNav } from './NavRenderers'
import type { AbcBrandInfo, AbcLayoutSettings, AbcMenuItem, AbcUserInfo } from './types'

export const HEADER_SIZE_METRICS: Record<
  AbcSize,
  {
    headerPad: string
    iconBtn: string
    iconCls: string
    searchBtn: string
    searchIcon: string
    breadcrumb: string
    mobileDrawerWidth: number
    avatarSize: 'xs' | 'sm' | 'md'
  }
> = {
  xs: {
    headerPad: 'px-3',
    iconBtn: 'h-7 w-7',
    iconCls: 'h-3.5 w-3.5',
    searchBtn: 'h-7 gap-1.5 px-2 text-[11px]',
    searchIcon: 'h-3 w-3',
    breadcrumb: 'text-[11px]',
    mobileDrawerWidth: 236,
    avatarSize: 'xs',
  },
  sm: {
    headerPad: 'px-4',
    iconBtn: 'h-8 w-8',
    iconCls: 'h-4 w-4',
    searchBtn: 'h-8 gap-2 px-2.5 text-xs',
    searchIcon: 'h-3.5 w-3.5',
    breadcrumb: 'text-xs',
    mobileDrawerWidth: 260,
    avatarSize: 'sm',
  },
  md: {
    headerPad: 'px-4',
    iconBtn: 'h-9 w-9',
    iconCls: 'h-4 w-4',
    searchBtn: 'h-9 gap-2 px-3 text-xs',
    searchIcon: 'h-3.5 w-3.5',
    breadcrumb: 'text-[13px]',
    mobileDrawerWidth: 276,
    avatarSize: 'sm',
  },
  lg: {
    headerPad: 'px-5',
    iconBtn: 'h-10 w-10',
    iconCls: 'h-[18px] w-[18px]',
    searchBtn: 'h-10 gap-2.5 px-3.5 text-sm',
    searchIcon: 'h-4 w-4',
    breadcrumb: 'text-sm',
    mobileDrawerWidth: 296,
    avatarSize: 'md',
  },
}

export interface ProLayoutHeaderProps {
  brand: AbcBrandInfo
  menuItems: AbcMenuItem[]
  mixSideItems: AbcMenuItem[]
  mixRootKey: string
  trail: AbcMenuItem[]
  pathname: string
  layoutSettings: AbcLayoutSettings
  resolvedSize: AbcSize
  resolvedMotion: AbcMotionPreset
  resolvedTheme: 'light' | 'dark'
  user?: AbcUserInfo
  headerExtra?: React.ReactNode
  showCustomizerTrigger: boolean
  searchPlaceholder: string
  onOpenMobileMenu: () => void
  onToggleSidebarCollapsed: () => void
  onSelectMixRoot: (root: AbcMenuItem) => void
  onNavigate: (path: string, item?: AbcMenuItem) => void
  onOpenCommand: () => void
  onToggleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void
  onOpenCustomizer: () => void
}

export const ProLayoutHeader: React.FC<ProLayoutHeaderProps> = ({
  brand,
  menuItems,
  mixSideItems,
  mixRootKey,
  trail,
  pathname,
  layoutSettings,
  resolvedSize,
  resolvedMotion,
  resolvedTheme,
  user,
  headerExtra,
  showCustomizerTrigger,
  searchPlaceholder,
  onOpenMobileMenu,
  onToggleSidebarCollapsed,
  onSelectMixRoot,
  onNavigate,
  onOpenCommand,
  onToggleTheme,
  onOpenCustomizer,
}) => {
  const hm = HEADER_SIZE_METRICS[resolvedSize]
  const isSidebarMode = layoutSettings.mode === 'sidebar'
  const isTopMode = layoutSettings.mode === 'top'
  const isMixMode = layoutSettings.mode === 'mix'
  const isDualMode = layoutSettings.mode === 'dual-column'

  return (
    <header
      className={cn(
        'flex h-[var(--abc-header-h)] z-10 shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors',
        hm.headerPad,
        layoutSettings.headerBlur !== false
          ? 'bg-[var(--abc-bg-surface)]/85 backdrop-blur-md'
          : 'bg-[var(--abc-bg-surface)]'
      )}
    >
      {/* 左侧：移动端汉堡菜单 / 品牌（顶栏与混合模式） / 侧栏折叠开关 / 面包屑或水平导航 */}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <button
          type="button"
          aria-label="展开移动端菜单"
          onClick={onOpenMobileMenu}
          className={cn(
            'inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer',
            hm.iconBtn
          )}
        >
          <Menu className={hm.iconCls} />
        </button>

        {(isTopMode || isMixMode) && (
          <div className="hidden shrink-0 md:block">
            <BrandLogoBlock brand={brand} size={resolvedSize} className="px-0 pr-3" />
          </div>
        )}

        {(isSidebarMode || (isMixMode && mixSideItems.length > 0)) && (
          <button
            type="button"
            aria-label={layoutSettings.sidebarCollapsed ? '展开侧边栏' : '收起侧边栏'}
            onClick={onToggleSidebarCollapsed}
            className={cn(
              'hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer',
              hm.iconBtn
            )}
          >
            {layoutSettings.sidebarCollapsed ? (
              <PanelLeftOpen className={hm.iconCls} />
            ) : (
              <PanelLeftClose className={hm.iconCls} />
            )}
          </button>
        )}

        {isTopMode && (
          <div className="hidden min-w-0 flex-1 md:block">
            <TopHorizontalNav
              items={menuItems}
              pathname={pathname}
              size={resolvedSize}
              motion={resolvedMotion}
              onNavigate={(p, it) => onNavigate(p, it)}
            />
          </div>
        )}

        {isMixMode && (
          <div className="hidden min-w-0 flex-1 md:block">
            <TopHorizontalNav
              items={menuItems}
              pathname={pathname}
              topLevelOnly
              activeRootKey={mixRootKey}
              size={resolvedSize}
              motion={resolvedMotion}
              onSelectRoot={onSelectMixRoot}
              onNavigate={(p, it) => onNavigate(p, it)}
            />
          </div>
        )}

        {(isSidebarMode || isDualMode) && layoutSettings.showBreadcrumb !== false && trail.length > 0 && (
          <nav
            aria-label="当前位置"
            className={cn(
              'hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex',
              hm.breadcrumb
            )}
          >
            {trail.map((node, idx) => {
              const last = idx === trail.length - 1
              return (
                <React.Fragment key={node.key}>
                  {idx > 0 && <ChevronRight className="h-3 w-3 shrink-0 opacity-50" />}
                  <span className={cn('truncate', last && 'font-semibold text-[var(--abc-fg)]')}>
                    {node.label}
                  </span>
                </React.Fragment>
              )
            })}
          </nav>
        )}
      </div>

      {/* 右侧：⌘K 搜索唤醒器 + 宿主扩展槽 + 主题切换 + 定制抽屉 + 用户信息 */}
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={onOpenCommand}
          className={cn(
            'inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer',
            hm.searchBtn
          )}
        >
          <Search className={hm.searchIcon} />
          <span className="hidden lg:inline">{searchPlaceholder}</span>
          <Kbd className="hidden sm:inline-flex">⌘K</Kbd>
        </button>

        {headerExtra}

        <Tooltip content="切换亮色 / 暗黑模式">
          <button
            type="button"
            aria-label="切换亮暗模式"
            onClick={onToggleTheme}
            className={cn(
              'inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer',
              hm.iconBtn
            )}
          >
            {resolvedTheme === 'dark' ? <Sun className={hm.iconCls} /> : <Moon className={hm.iconCls} />}
          </button>
        </Tooltip>

        {showCustomizerTrigger && (
          <Tooltip content="设计系统与布局实时定制">
            <button
              type="button"
              aria-label="打开主题与布局配置抽屉"
              onClick={onOpenCustomizer}
              className={cn(
                'inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer',
                hm.iconBtn
              )}
            >
              <SlidersHorizontal className={hm.iconCls} />
            </button>
          </Tooltip>
        )}

        {user && (
          <Dropdown
            items={
              user.menuItems ?? [
                { key: 'profile', label: `当前账号：${user.name}`, disabled: true },
              ]
            }
          >
            <div className="flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]">
              <Avatar src={user.avatar} name={user.name} size={hm.avatarSize} />
              <div className="hidden text-left md:block">
                <div className="max-w-24 truncate text-xs font-semibold text-[var(--abc-fg)] leading-tight">
                  {user.name}
                </div>
                {user.role && (
                  <div className="max-w-24 truncate text-[10px] text-[var(--abc-fg-muted)] leading-tight">
                    {user.role}
                  </div>
                )}
              </div>
            </div>
          </Dropdown>
        )}
      </div>
    </header>
  )
}
