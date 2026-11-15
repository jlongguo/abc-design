import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
import Drawer from '../components/feedback/Drawer'
import TopProgressBar from '../components/feedback/TopProgressBar'
import Watermark from '../components/feedback/Watermark'
import { Kbd } from '../components/typography/CopyableText'
import { useAbcMotion, useAbcSize } from '../hooks/useAbcDefaults'
import { useControllableState } from '../hooks/useControllableState'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import AuthLayout, { type AuthLayoutProps } from './AuthLayout'
import CommandPalette, { type CommandActionItem } from './CommandPalette'
import KeepAliveContainer from './KeepAliveContainer'
import MultiTabBar from './MultiTabBar'
import {
  BrandLogoBlock,
  DualColumnNav,
  SidebarNav,
  TopHorizontalNav,
  findBreadcrumbChain,
  menuContainsPath,
} from './NavRenderers'
import ThemeCustomizer from './ThemeCustomizer'
import {
  DEFAULT_ABC_LAYOUT_SETTINGS,
  type AbcBrandInfo,
  type AbcLayoutSettings,
  type AbcMenuItem,
  type AbcTabItem,
  type AbcUserInfo,
} from './types'

export interface ProLayoutProps {
  /** 品牌标识与项目名称 */
  brand?: AbcBrandInfo
  /** 树形菜单数据（路由无关） */
  menuItems: AbcMenuItem[]
  /** 当前路由路径 */
  pathname: string
  /** 路由跳转处理回调 */
  onNavigate: (path: string, item?: AbcMenuItem) => void
  /** 受控布局设置 */
  settings?: Partial<AbcLayoutSettings>
  /** 默认初始布局设置 */
  defaultSettings?: Partial<AbcLayoutSettings>
  /** 布局设置变更回调 */
  onSettingsChange?: (next: AbcLayoutSettings) => void
  /** 当前登录用户信息与下拉菜单项 */
  user?: AbcUserInfo
  /** 顶栏右侧扩展插槽（如多租户切换器、消息中心铃铛） */
  headerExtra?: React.ReactNode
  /** 注入全局指令面板的自定义快捷动作 */
  commandActions?: CommandActionItem[]
  /** 受控页签列表（若不传则由 ProLayout 根据访问轨迹自动维护） */
  tabs?: AbcTabItem[]
  onTabsChange?: (tabs: AbcTabItem[]) => void
  /** 当切换至 auth 模式时的认证卡片内容（若未提供则渲染当前 children） */
  authRender?: React.ReactNode
  authProps?: Partial<AuthLayoutProps>
  /** 是否显示右上角主题与布局配置触发器（默认开启） */
  showCustomizerTrigger?: boolean
  /** 是否自动为多页签视图包裹 TabErrorBoundary 单页签异常隔离（默认 true） */
  isolateTabError?: boolean
  /** 单页签异常边界点击“返回仪表盘”时的目标路径（默认 '/'） */
  homePath?: string
  /** 覆写壳层、侧栏与导航控件尺寸规格（默认继承 AbcProvider.theme.componentSize） */
  size?: AbcSize
  /** 覆写壳层交互动效规格（默认继承 AbcProvider.theme.motion） */
  motion?: AbcMotionPreset
  children: React.ReactNode
}

const TRANSITION_CLASS_MAP: Record<string, string> = {
  'fade-slide': 'abc-page-fade-slide',
  fade: 'abc-page-fade',
  zoom: 'abc-page-zoom',
  'slide-left': 'abc-page-slide-left',
  none: '',
}

const HEADER_SIZE_METRICS: Record<
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

/**
 * ABC Design 企业级全功能自适应壳层 (ProLayout)
 * 一套统一 API 支持 5 种主流中后台布局拓扑（sidebar / top / mix / dual-column / auth）
 * 并内置移动端抽屉导航、多页签栏、KeepAlive 保活、⌘K 拼音指令面板、防篡改水印与实时定制中心。
 */
export const ProLayout: React.FC<ProLayoutProps> = ({
  brand = { name: 'ABC Console', subtitle: 'Enterprise UI' },
  menuItems,
  pathname,
  onNavigate,
  settings: controlledSettings,
  defaultSettings,
  onSettingsChange,
  user,
  headerExtra,
  commandActions = [],
  tabs: controlledTabs,
  onTabsChange,
  authRender,
  authProps,
  showCustomizerTrigger = true,
  isolateTabError = true,
  homePath = '/',
  size,
  motion,
  children,
}) => {
  const {
    resolvedTheme,
    toggleTheme,
    pageTransition,
    watermarkEnabled,
    watermarkText,
  } = useAbcConfig()
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const hm = HEADER_SIZE_METRICS[resolvedSize]

  const initialMergedSettings = useMemo<AbcLayoutSettings>(
    () => ({ ...DEFAULT_ABC_LAYOUT_SETTINGS, ...defaultSettings }),
    [defaultSettings]
  )

  const [layoutSettings, setLayoutSettings] = useControllableState<AbcLayoutSettings>({
    value: controlledSettings
      ? { ...initialMergedSettings, ...controlledSettings }
      : undefined,
    defaultValue: initialMergedSettings,
    onChange: onSettingsChange,
  })

  const patchSettings = useCallback(
    (patch: Partial<AbcLayoutSettings>) => {
      setLayoutSettings((prev) => ({ ...prev, ...patch }))
    },
    [setLayoutSettings]
  )

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [customizerOpen, setCustomizerOpen] = useState(false)
  const [refreshSeeds, setRefreshSeeds] = useState<Record<string, number>>({})
  const mainScrollRef = useRef<HTMLElement>(null)

  // 自动收集并维护多页签状态（支持外部受控接管）
  const [autoTabs, setAutoTabs] = useControllableState<AbcTabItem[]>({
    value: controlledTabs,
    defaultValue: [],
    onChange: onTabsChange,
  })

  const trail = useMemo(
    () => findBreadcrumbChain(menuItems, pathname),
    [menuItems, pathname]
  )

  useEffect(() => {
    const leaf = trail[trail.length - 1]
    if (!leaf || !leaf.path) return
    setAutoTabs((prev) => {
      if (prev.some((t) => t.path === leaf.path)) return prev
      return [
        ...prev,
        {
          path: leaf.path!,
          title: leaf.label,
          icon: leaf.icon,
          pinned: prev.length === 0,
        },
      ]
    })
  }, [trail, setAutoTabs])

  // 全局监听 ⌘K / Ctrl+K 快捷键打开指令搜索面板
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCommandOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Mix 混合布局下：顶栏选中一级分类，侧边栏联动展示其二级菜单
  const matchedMixRoot = useMemo(
    () => menuItems.find((item) => menuContainsPath(item, pathname)) ?? menuItems[0],
    [menuItems, pathname]
  )
  const [mixRootKey, setMixRootKey] = useState<string>(matchedMixRoot?.key ?? '')

  useEffect(() => {
    if (matchedMixRoot?.key) setMixRootKey(matchedMixRoot.key)
  }, [matchedMixRoot?.key])

  const mixSideItems = useMemo(() => {
    const root = menuItems.find((it) => it.key === mixRootKey) ?? matchedMixRoot
    return root?.children ?? []
  }, [menuItems, mixRootKey, matchedMixRoot])

  const handleCloseTab = (targetPath: string) => {
    const idx = autoTabs.findIndex((t) => t.path === targetPath)
    const nextTabs = autoTabs.filter((t) => t.path !== targetPath || t.pinned)
    setAutoTabs(nextTabs)
    if (targetPath === pathname && nextTabs.length > 0) {
      const fallback = nextTabs[Math.max(0, idx - 1)] ?? nextTabs[0]
      if (fallback) onNavigate(fallback.path)
    }
  }

  const resolvedWatermark = useMemo(() => {
    if (watermarkText) return watermarkText
    return [user?.name || brand.name, new Date().toISOString().slice(0, 10)]
  }, [watermarkText, user?.name, brand.name])

  // 模式 5：Auth 认证分屏独立布局
  if (layoutSettings.mode === 'auth') {
    return (
      <>
        <AuthLayout
          brand={brand}
          topRightExtra={
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="切换明暗主题"
                onClick={(e) => toggleTheme({ clientX: e.clientX, clientY: e.clientY })}
                className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              {showCustomizerTrigger && (
                <button
                  type="button"
                  aria-label="打开布局与主题配置"
                  onClick={() => setCustomizerOpen(true)}
                  className="inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                  <span>切换布局</span>
                </button>
              )}
            </div>
          }
          {...authProps}
        >
          {authRender ?? children}
        </AuthLayout>

        <ThemeCustomizer
          open={customizerOpen}
          onClose={() => setCustomizerOpen(false)}
          layoutSettings={layoutSettings}
          onLayoutChange={patchSettings}
          onResetAll={() => setLayoutSettings(initialMergedSettings)}
        />
      </>
    )
  }

  const isSidebarMode = layoutSettings.mode === 'sidebar'
  const isTopMode = layoutSettings.mode === 'top'
  const isMixMode = layoutSettings.mode === 'mix'
  const isDualMode = layoutSettings.mode === 'dual-column'

  const headerNode = (
    <header
      className={cn(
        'flex h-[var(--abc-header-h)] shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors',
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
          onClick={() => setMobileMenuOpen(true)}
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
            onClick={() =>
              patchSettings({ sidebarCollapsed: !layoutSettings.sidebarCollapsed })
            }
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
              onSelectRoot={(root) => {
                setMixRootKey(root.key)
                if (root.path && (!root.children || root.children.length === 0)) {
                  onNavigate(root.path, root)
                } else if (root.children?.[0]?.path) {
                  onNavigate(root.children[0].path, root.children[0])
                }
              }}
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
                  <span
                    className={cn(
                      'truncate',
                      last && 'font-semibold text-[var(--abc-fg)]'
                    )}
                  >
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
          onClick={() => setCommandOpen(true)}
          className={cn(
            'inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer',
            hm.searchBtn
          )}
        >
          <Search className={hm.searchIcon} />
          <span className="hidden lg:inline">搜索菜单...</span>
          <Kbd className="hidden sm:inline-flex">⌘K</Kbd>
        </button>

        {headerExtra}

        <Tooltip content="切换亮色 / 暗黑模式">
          <button
            type="button"
            aria-label="切换亮暗模式"
            onClick={(e) => toggleTheme({ clientX: e.clientX, clientY: e.clientY })}
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
              onClick={() => setCustomizerOpen(true)}
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

  const mainViewport = (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      {!isMixMode && headerNode}

      {layoutSettings.showTabs && (
        <MultiTabBar
          tabs={autoTabs}
          activePath={pathname}
          variant={layoutSettings.tabStyle ?? 'card'}
          size={resolvedSize}
          motion={resolvedMotion}
          onSelect={(p) => onNavigate(p)}
          onClose={handleCloseTab}
          onTogglePin={(targetPath) =>
            setAutoTabs((prev) =>
              prev.map((t) => (t.path === targetPath ? { ...t, pinned: !t.pinned } : t))
            )
          }
          onCloseOthers={(keepPath) =>
            setAutoTabs((prev) => prev.filter((t) => t.pinned || t.path === keepPath))
          }
          onCloseRight={(pivotPath) => {
            const pivotIdx = autoTabs.findIndex((t) => t.path === pivotPath)
            if (pivotIdx < 0) return
            setAutoTabs((prev) => prev.filter((t, i) => i <= pivotIdx || t.pinned))
          }}
          onCloseAll={() => {
            const pinnedOnly = autoTabs.filter((t) => t.pinned)
            setAutoTabs(pinnedOnly)
            if (pinnedOnly[0] && pinnedOnly[0].path !== pathname) {
              onNavigate(pinnedOnly[0].path)
            }
          }}
          onRefresh={(p) =>
            setRefreshSeeds((prev) => ({ ...prev, [p]: (prev[p] ?? 0) + 1 }))
          }
        />
      )}

      <main
        ref={mainScrollRef}
        className="flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5"
      >
        <Watermark
          enabled={watermarkEnabled}
          content={resolvedWatermark}
          className={cn(
            'min-h-full',
            layoutSettings.contentWidth === 'fixed' && 'mx-auto max-w-7xl'
          )}
        >
          <KeepAliveContainer
            activeKey={pathname}
            enabled={layoutSettings.keepAlive}
            aliveKeys={autoTabs.map((t) => t.path)}
            scrollContainerRef={mainScrollRef}
            refreshSeed={refreshSeeds[pathname] ?? 0}
            refreshKeys={refreshSeeds}
            activeClassName={TRANSITION_CLASS_MAP[pageTransition]}
            isolateError={isolateTabError}
            onTabReload={(p) =>
              setRefreshSeeds((prev) => ({ ...prev, [p]: (prev[p] ?? 0) + 1 }))
            }
            onTabClose={layoutSettings.showTabs ? (p) => handleCloseTab(p) : undefined}
            onNavigateHome={() => onNavigate(homePath)}
          >
            {children}
          </KeepAliveContainer>

          {layoutSettings.showFooter && (
            <footer className="mt-8 border-t border-[var(--abc-border)] pt-4 pb-2 text-center text-[11px] text-[var(--abc-fg-muted)]">
              © {new Date().getFullYear()} {brand.name} · Powered by ABC Design System
            </footer>
          )}
        </Watermark>
      </main>
    </div>
  )

  const layoutInlineVars = {
    '--abc-sidebar-w': layoutSettings.sidebarWidth ? `${layoutSettings.sidebarWidth}px` : undefined,
    '--abc-header-h': layoutSettings.headerHeight ? `${layoutSettings.headerHeight}px` : undefined,
  } as React.CSSProperties

  return (
    <div
      data-size={resolvedSize}
      data-motion={resolvedMotion}
      style={layoutInlineVars}
      className="flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]"
    >
      {layoutSettings.routeProgress !== false && <TopProgressBar activeKey={pathname} />}
      {isMixMode && headerNode}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {isMixMode && mixSideItems.length > 0 && (
          <div className="hidden md:block">
            <SidebarNav
              items={mixSideItems}
              pathname={pathname}
              collapsed={layoutSettings.sidebarCollapsed}
              accordion={layoutSettings.sidebarAccordion}
              tone={layoutSettings.sidebarTone}
              size={resolvedSize}
              motion={resolvedMotion}
              onNavigate={(p, it) => onNavigate(p, it)}
            />
          </div>
        )}

        {isSidebarMode && (
          <div className="hidden md:block">
            <SidebarNav
              brand={brand}
              items={menuItems}
              pathname={pathname}
              collapsed={layoutSettings.sidebarCollapsed}
              accordion={layoutSettings.sidebarAccordion}
              tone={layoutSettings.sidebarTone}
              size={resolvedSize}
              motion={resolvedMotion}
              onNavigate={(p, it) => onNavigate(p, it)}
            />
          </div>
        )}

        {isDualMode && (
          <div className="hidden md:flex">
            <DualColumnNav
              brand={brand}
              items={menuItems}
              pathname={pathname}
              tone={layoutSettings.sidebarTone}
              size={resolvedSize}
              motion={resolvedMotion}
              onNavigate={(p, it) => onNavigate(p, it)}
            />
          </div>
        )}

        {mainViewport}
      </div>

      {/* 移动端响应式侧滑导航抽屉 */}
      <Drawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        placement="left"
        width={hm.mobileDrawerWidth}
        resizable={false}
        title={brand.name}
        bodyClassName="p-0"
      >
        <SidebarNav
          items={menuItems}
          pathname={pathname}
          tone="light"
          size={resolvedSize}
          motion={resolvedMotion}
          onNavigate={(p, it) => {
            onNavigate(p, it)
            setMobileMenuOpen(false)
          }}
          className="!w-full border-r-0"
        />
      </Drawer>

      {/* ⌘K 全局指令与拼音导航搜索面板 */}
      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
        menuItems={menuItems}
        onNavigate={(p, it) => onNavigate(p, it)}
        extraActions={[
          {
            id: 'cmd_toggle_theme',
            title: resolvedTheme === 'dark' ? '切换为亮色模式' : '切换为暗黑模式',
            group: '系统偏好',
            icon: 'palette',
            onTrigger: () => toggleTheme(),
          },
          {
            id: 'cmd_open_customizer',
            title: '打开设计系统与布局定制抽屉',
            group: '系统偏好',
            icon: 'config',
            onTrigger: () => setCustomizerOpen(true),
          },
          ...commandActions,
        ]}
      />

      {/* 实时主题与多布局配置抽屉 */}
      <ThemeCustomizer
        open={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        layoutSettings={layoutSettings}
        onLayoutChange={patchSettings}
        onResetAll={() => setLayoutSettings(initialMergedSettings)}
      />
    </div>
  )
}

export default ProLayout
