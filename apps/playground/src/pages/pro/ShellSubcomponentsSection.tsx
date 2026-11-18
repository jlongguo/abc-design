import React, { useState } from 'react'
import {
  BrandLogoBlock,
  Button,
  DEFAULT_ABC_LAYOUT_SETTINGS,
  DualColumnNav,
  MultiTabBar,
  SidebarNav,
  ThemeCustomizer,
  TopHorizontalNav,
  abcToast,
  type AbcLayoutSettings,
  type AbcMenuItem,
  type AbcTabItem,
  type AbcTabStyle,
} from '@abc-design/react'
import { Plus, SlidersHorizontal } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

const MINI_MENUS: AbcMenuItem[] = [
  {
    key: 'ops',
    label: '集群治理',
    icon: 'Server',
    children: [
      { key: 'nodes', label: '边缘节点池', path: '/ops/nodes', icon: 'layers', keywords: 'node pool cluster' },
      { key: 'quotas', label: '弹性配额表', path: '/ops/quotas', icon: 'Sliders', keywords: 'quota limit byte' },
    ],
  },
  {
    key: 'sec',
    label: '安全审计',
    icon: 'ShieldCheck',
    children: [
      { key: 'vault', label: '凭据保险箱', path: '/sec/vault', icon: 'key', keywords: 'enclave secret vault' },
    ],
  },
]

const INITIAL_TABS: AbcTabItem[] = [
  { path: '/ops/nodes', title: '边缘节点池', icon: 'layers', pinned: true },
  { path: '/ops/quotas', title: '弹性配额表', icon: 'Sliders' },
  { path: '/sec/vault', title: '凭据保险箱', icon: 'key' },
]

export const ShellSubcomponentsSection: React.FC<{
  layoutSettings: AbcLayoutSettings
  onChangeLayout: (patch: Partial<AbcLayoutSettings>) => void
}> = ({ layoutSettings, onChangeLayout }) => {
  const [tabStyle, setTabStyle] = useState<AbcTabStyle>('card')
  const [navRenderer, setNavRenderer] = useState<'sidebar' | 'top' | 'dual'>('sidebar')
  const [sidebarSearch, setSidebarSearch] = useState(true)
  const [activePath, setActivePath] = useState('/ops/nodes')
  const [tabs, setTabs] = useState<AbcTabItem[]>(INITIAL_TABS)
  const [customizerOpen, setCustomizerOpen] = useState(false)

  return (
    <ComponentDocPreview
      title="MultiTabBar / 导航渲染器家族 / ThemeCustomizer 壳层拆解子件"
      components={[
        'MultiTabBar',
        'SidebarNav',
        'TopHorizontalNav',
        'DualColumnNav',
        'BrandLogoBlock',
        'ThemeCustomizer',
      ]}
      description="当宿主具有存量自研顶栏或微前端子应用框架，不需要挂载整套 ProLayout 时，可独立按需组合 MultiTabBar 多页签栏、三种导航渲染器（SidebarNav 支持内联组件/关键词过滤）、BrandLogoBlock 与 ThemeCustomizer 定制抽屉。"
      onResetKnobs={() => {
        setTabStyle('card')
        setNavRenderer('sidebar')
        setSidebarSearch(true)
        setTabs(INITIAL_TABS)
        setActivePath('/ops/nodes')
      }}
      controls={
        <>
          <KnobSegmented
            label="MultiTabBar.variant"
            value={tabStyle}
            onChange={setTabStyle}
            options={[
              { label: 'card', value: 'card' },
              { label: 'pill', value: 'pill' },
              { label: 'underline', value: 'underline' },
            ]}
          />
          <KnobSegmented
            label="导航渲染器预览"
            value={navRenderer}
            onChange={setNavRenderer}
            options={[
              { label: 'SidebarNav', value: 'sidebar' },
              { label: 'TopHorizontalNav', value: 'top' },
              { label: 'DualColumnNav', value: 'dual' },
            ]}
          />
          <KnobSwitch label="SidebarNav.searchable" checked={sidebarSearch} onChange={setSidebarSearch} />
          <Button
            size="xs"
            variant="secondary"
            leftIcon={<SlidersHorizontal className="h-3 w-3" />}
            onClick={() => setCustomizerOpen(true)}
          >
            唤起 ThemeCustomizer
          </Button>
        </>
      }
      code={`import { BrandLogoBlock, MultiTabBar, SidebarNav, ThemeCustomizer } from '@abc-design/react'

<MultiTabBar tabs={tabs} activePath="${activePath}" variant="${tabStyle}" onSelect={setActivePath} onClose={handleClose} />
<SidebarNav brand={{ name: 'SubApp' }} items={menus} pathname="${activePath}" searchable={${sidebarSearch}} onNavigate={setActivePath} />
<ThemeCustomizer open={open} onClose={close} layoutSettings={settings} onLayoutChange={update} onResetAll={reset} />`}
      apiRows={[
        { prop: 'MultiTabBar.variant', type: "'card' | 'pill' | 'underline'", defaultValue: "'card'", description: '支持图钉固定、关闭右侧/其他与刷新回调的多页签栏' },
        { prop: 'SidebarNav.searchable', type: 'boolean', defaultValue: 'false', description: '在展开态侧边栏顶部开启实时检索框，同步匹配菜单标题、路径与 keywords' },
        { prop: 'TopHorizontalNav / DualColumnNav', type: 'Nav Renderer', description: '水平弹出子菜单与 64px 主轨双栏导航独立渲染器' },
        { prop: 'ThemeCustomizer', type: 'React.FC<ThemeCustomizerProps>', description: '可视化令牌/布局实时定制抽屉，支持导出与粘贴导入 JSON 配置' },
      ]}
    >
      <div className="space-y-4">
        <div className="overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]">
          <div className="flex items-center justify-between border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 px-3 py-1.5">
            <BrandLogoBlock brand={{ name: 'Acme SubConsole', subtitle: 'Micro-Frontend' }} size="xs" />
            <Button
              size="xs"
              variant="ghost"
              leftIcon={<Plus className="h-3 w-3" />}
              onClick={() => setTabs(INITIAL_TABS)}
            >
              重置示例页签
            </Button>
          </div>
          <MultiTabBar
            tabs={tabs}
            activePath={activePath}
            variant={tabStyle}
            onSelect={setActivePath}
            onClose={(p) => setTabs((prev) => prev.filter((t) => t.path !== p || t.pinned))}
            onTogglePin={(p) =>
              setTabs((prev) => prev.map((t) => (t.path === p ? { ...t, pinned: !t.pinned } : t)))
            }
            onRefresh={(p) => abcToast.info(`已刷新页签 ${p}`)}
          />
        </div>

        <div className="overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/40">
          {navRenderer === 'top' ? (
            <div className="bg-[var(--abc-bg-surface)] px-4 py-2">
              <TopHorizontalNav
                items={MINI_MENUS}
                pathname={activePath}
                onNavigate={(p) => setActivePath(p)}
              />
            </div>
          ) : (
            <div className="flex h-64">
              {navRenderer === 'sidebar' ? (
                <SidebarNav
                  items={MINI_MENUS}
                  pathname={activePath}
                  tone="light"
                  searchable={sidebarSearch}
                  searchPlaceholder="输入 vault 或 quota 过滤..."
                  onNavigate={(p) => setActivePath(p)}
                />
              ) : (
                <DualColumnNav
                  items={MINI_MENUS}
                  pathname={activePath}
                  tone="light"
                  onNavigate={(p) => setActivePath(p)}
                />
              )}
              <div className="flex flex-1 items-center justify-center p-4 text-xs text-[var(--abc-fg-muted)]">
                当前激活子路由：<code className="ml-1 font-mono text-[var(--abc-primary)]">{activePath}</code>
              </div>
            </div>
          )}
        </div>

        <ThemeCustomizer
          open={customizerOpen}
          onClose={() => setCustomizerOpen(false)}
          layoutSettings={layoutSettings}
          onLayoutChange={onChangeLayout}
          onResetAll={() => onChangeLayout(DEFAULT_ABC_LAYOUT_SETTINGS)}
        />
      </div>
    </ComponentDocPreview>
  )
}
