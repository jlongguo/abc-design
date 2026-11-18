import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { Moon, SlidersHorizontal, Sun } from 'lucide-react'
import Drawer from '../components/feedback/Drawer'
import TopProgressBar from '../components/feedback/TopProgressBar'
import Watermark from '../components/feedback/Watermark'
import { useAbcMotion, useAbcSize } from '../hooks/useAbcDefaults'
import { useControllableState } from '../hooks/useControllableState'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import AuthLayout, { type AuthLayoutProps } from './AuthLayout'
import CommandPalette, { type CommandActionItem } from './CommandPalette'
import KeepAliveContainer from './KeepAliveContainer'
import MultiTabBar from './MultiTabBar'
import { DualColumnNav, SidebarNav, findBreadcrumbChain, menuContainsPath } from './NavRenderers'
import { HEADER_SIZE_METRICS, ProLayoutHeader } from './ProLayoutHeader'
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
  /** 注入全局指令面板的自定义快捷动作（如全量组件直达索引） */
  commandActions?: CommandActionItem[]
  /** 顶栏右侧 ⌘K 按钮文案（默认 '搜索菜单...'） */
  searchPlaceholder?: string
  /** ⌘K 全局指令面板输入框占位文案 */
  commandPlaceholder?: string
  /** 是否在展开态侧边栏顶部渲染快捷筛选输入框（默认读取 settings.sidebarSearch） */
  sidebarSearch?: boolean
  /** 侧边栏快捷筛选输入框占位文案 */
  sidebarSearchPlaceholder?: string
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

/**
 * ABC Design 企业级全功能自适应壳层 (ProLayout)
 * 一套统一 API 支持 5 种主流中后台布局拓扑（sidebar / top / mix / dual-column / auth）
 * 并内置移动端抽屉导航、多页签栏、KeepAlive 保活、⌘K 拼音/组件指令面板、防篡改水印与实时定制中心。
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
  searchPlaceholder = '搜索菜单...',
  commandPlaceholder,
  sidebarSearch,
  sidebarSearchPlaceholder,
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
  const [commandInitialQuery, setCommandInitialQuery] = useState('')
  const [customizerOpen, setCustomizerOpen] = useState(false)
  const [refreshSeeds, setRefreshSeeds] = useState<Record<string, number>>({})
  const mainScrollRef = useRef<HTMLElement>(null)

  const openCommandPalette = useCallback((prefill = '') => {
    setCommandInitialQuery(prefill)
    setCommandOpen(true)
  }, [])

  const enableSidebarSearch = sidebarSearch ?? layoutSettings.sidebarSearch ?? false

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
        setCommandInitialQuery('')
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
  const isMixMode = layoutSettings.mode === 'mix'
  const isDualMode = layoutSettings.mode === 'dual-column'

  const headerNode = (
    <ProLayoutHeader
      brand={brand}
      menuItems={menuItems}
      mixSideItems={mixSideItems}
      mixRootKey={mixRootKey}
      trail={trail}
      pathname={pathname}
      layoutSettings={layoutSettings}
      resolvedSize={resolvedSize}
      resolvedMotion={resolvedMotion}
      resolvedTheme={resolvedTheme}
      user={user}
      headerExtra={headerExtra}
      showCustomizerTrigger={showCustomizerTrigger}
      searchPlaceholder={searchPlaceholder}
      onOpenMobileMenu={() => setMobileMenuOpen(true)}
      onToggleSidebarCollapsed={() =>
        patchSettings({ sidebarCollapsed: !layoutSettings.sidebarCollapsed })
      }
      onSelectMixRoot={(root) => {
        setMixRootKey(root.key)
        if (root.path && (!root.children || root.children.length === 0)) {
          onNavigate(root.path, root)
        } else if (root.children?.[0]?.path) {
          onNavigate(root.children[0].path, root.children[0])
        }
      }}
      onNavigate={onNavigate}
      onOpenCommand={() => openCommandPalette('')}
      onToggleTheme={(e) => toggleTheme({ clientX: e.clientX, clientY: e.clientY })}
      onOpenCustomizer={() => setCustomizerOpen(true)}
    />
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
              searchable={enableSidebarSearch}
              searchPlaceholder={sidebarSearchPlaceholder}
              commandActions={commandActions}
              onOpenCommandPalette={(q) => openCommandPalette(q ?? '')}
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
              searchable={enableSidebarSearch}
              searchPlaceholder={sidebarSearchPlaceholder}
              commandActions={commandActions}
              onOpenCommandPalette={(q) => openCommandPalette(q ?? '')}
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
          searchable={enableSidebarSearch}
          searchPlaceholder={sidebarSearchPlaceholder}
          commandActions={commandActions}
          onOpenCommandPalette={(q) => {
            setMobileMenuOpen(false)
            openCommandPalette(q ?? '')
          }}
          onNavigate={(p, it) => {
            onNavigate(p, it)
            setMobileMenuOpen(false)
          }}
          className="!w-full border-r-0"
        />
      </Drawer>

      {/* ⌘K 全局指令与拼音/组件导航搜索面板 */}
      <CommandPalette
        open={commandOpen}
        onClose={() => {
          setCommandOpen(false)
          setCommandInitialQuery('')
        }}
        menuItems={menuItems}
        placeholder={commandPlaceholder}
        initialQuery={commandInitialQuery}
        onNavigate={(p, it) => onNavigate(p, it)}
        extraActions={[
          ...commandActions,
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
