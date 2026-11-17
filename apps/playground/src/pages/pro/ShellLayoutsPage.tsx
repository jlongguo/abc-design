import React, { useRef, useState } from 'react'
import {
  AuthLayout,
  Button,
  Card,
  FormField,
  Input,
  KeepAliveContainer,
  PageContainer,
  PageTransition,
  StatusTag,
  abcProgress,
  abcToast,
  type AbcLayoutMode,
  type AbcLayoutSettings,
  type AbcPageTransition,
} from '@abc-design/react'
import { AlertTriangle, Check, Lock, Play, RefreshCw, ScrollText, User } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSelect, KnobSwitch, KnobText } from '../../components/PropKnobs'

const MODES: Array<{ mode: AbcLayoutMode; name: string; scene: string }> = [
  { mode: 'sidebar', name: '1. 经典侧边栏 (Sidebar)', scene: '适合 2~3 级菜单较多的综合管理后台，支持深浅侧栏与折叠悬浮菜单。' },
  { mode: 'top', name: '2. 顶部水平导航 (Top)', scene: '释放全部横向宽度，适合数据分析看板、监控大屏与中轻量 SaaS 应用。' },
  { mode: 'mix', name: '3. 混合分栏导航 (Mix)', scene: '顶栏承载一级业务域切换，侧栏自动联动当前域的二三级菜单。' },
  { mode: 'dual-column', name: '4. 双栏紧凑侧栏 (Dual-Column)', scene: '左侧 64px 图标主轨 + 右侧二级面板，兼顾模块密度与跳转效率。' },
  { mode: 'auth', name: '5. 登录认证分屏 (Auth)', scene: '支持左侧极光品牌叙事屏 + 右侧流光表单卡片，或极简居中认证卡片。' },
]

const TRANSITION_CLASS_MAP: Record<AbcPageTransition, string> = {
  'fade-slide': 'abc-page-fade-slide',
  fade: 'abc-page-fade',
  zoom: 'abc-page-zoom',
  'slide-left': 'abc-page-slide-left',
  none: '',
}

const KeepAlivePaneDemo: React.FC<{
  routePath: string
  title: string
  isolateError: boolean
}> = ({ routePath, title, isolateError }) => {
  const [draft, setDraft] = useState(`${title} 筛选关键字`)
  const [counter, setCounter] = useState(1)
  const [crashed, setCrashed] = useState(false)

  if (crashed) {
    throw new Error(`[${routePath}] 模拟页签渲染期异常：KeepAliveContainer 已隔离故障页签`)
  }

  return (
    <div className="space-y-3 p-3.5 text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3">
        <div className="space-y-1">
          <div className="font-semibold text-[var(--abc-fg)]">
            {title} <code className="ml-1 font-mono text-[11px] text-[var(--abc-primary)]">{routePath}</code>
          </div>
          <div className="text-[var(--abc-fg-muted)]">输入草稿并向下滚动列表，切到其他页签再切回，观察输入状态与滚动像素精准复原。</div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="xs" variant="secondary" onClick={() => setCounter((c) => c + 1)}>状态计数：{counter}</Button>
          <Button size="xs" variant="danger" disabled={!isolateError} icon={<AlertTriangle className="h-3 w-3" />} onClick={() => setCrashed(true)}>
            {isolateError ? '触发异常隔离' : '需开启 isolateError'}
          </Button>
        </div>
      </div>
      <Input value={draft} onChange={(e) => setDraft(e.target.value)} />
      <div className="space-y-2">
        {Array.from({ length: 12 }, (_, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-2 text-[var(--abc-fg-secondary)]">
            <span>{title} · 长列表滚动锚点行 #{idx + 1}</span>
            <span className="font-mono text-[11px] text-[var(--abc-fg-muted)]">offset ≈ {(idx + 1) * 38}px</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * 壳层布局拓扑、认证分屏、KeepAlive 缓存池与页面过渡文档页
 */
export const ShellLayoutsPage: React.FC<{
  layoutSettings: AbcLayoutSettings
  onChangeLayout: (patch: Partial<AbcLayoutSettings>) => void
}> = ({ layoutSettings, onChangeLayout }) => {
  // Card 1: PageContainer.footer 吸底操作栏
  const [stickyFooterDemo, setStickyFooterDemo] = useState(true)

  // Card 2: AuthLayout 沙箱 Knobs
  const [authVariant, setAuthVariant] = useState<'split' | 'centered'>('split')
  const [authLoading, setAuthLoading] = useState(false)
  const [authShowFooter, setAuthShowFooter] = useState(true)
  const [authHeadline, setAuthHeadline] = useState('高密度、高可靠的企业级数字工作台')

  // Card 3: KeepAliveContainer & PageTransition Knobs
  const scrollBoxRef = useRef<HTMLDivElement>(null)
  const [kaActive, setKaActive] = useState('/orders')
  const [kaEnabled, setKaEnabled] = useState(true)
  const [kaMaxCached, setKaMaxCached] = useState(3)
  const [kaIsolateError, setKaIsolateError] = useState(true)
  const [kaShowProgress, setKaShowProgress] = useState(true)
  const [kaRefreshKeys, setKaRefreshKeys] = useState<Record<string, number>>({})
  const [liveScrollTop, setLiveScrollTop] = useState(0)
  const [transitionPreset, setTransitionPreset] = useState<AbcPageTransition>('fade-slide')
  const [transitionSeed, setTransitionSeed] = useState(1)

  const handleSwitchTab = (path: string) => {
    setKaActive(path)
    if (kaShowProgress) {
      abcProgress.start()
      window.setTimeout(() => abcProgress.done(), 180)
    }
  }

  return (
    <PageContainer
      title="ProLayout 五模态壳层、AuthLayout 与页面保活基建"
      subtitle="统一管理 5 种企业布局拓扑、独立认证容器、PageContainer 吸底动作栏，以及 KeepAlive 滚动记忆与切页过渡动画"
      breadcrumbs={[{ label: 'Pro 企业套件与模板' }, { label: '壳层与保活容器' }]}
      footer={
        stickyFooterDemo ? (
          <>
            <span className="mr-auto text-xs text-[var(--abc-fg-muted)]">
              PageContainer.footer 吸底固定操作栏演示（可通过 Card 1 开关实时控制）
            </span>
            <Button variant="secondary" onClick={() => setStickyFooterDemo(false)}>
              隐藏吸底栏
            </Button>
            <Button variant="primary" onClick={() => onChangeLayout({ mode: 'sidebar' })}>
              切回经典侧边栏
            </Button>
          </>
        ) : undefined
      }
    >
      <div className="space-y-6">
        {/* Card 1: ProLayout & PageContainer.footer */}
        <ComponentDocPreview
          title="ProLayout 五模态完整壳层 & PageContainer 吸底动作栏"
          components={['ProLayout', 'PageContainer']}
          description="一套统一配置实时驱动整个控制台的 5 大布局拓扑（sidebar / top / mix / dual-column / auth）、侧栏明暗色调、定宽/流式画布、多页签栏与吸底固定栏。"
          onResetKnobs={() => {
            onChangeLayout({ mode: 'sidebar', sidebarTone: 'dark', contentWidth: 'fluid', showTabs: false })
            setStickyFooterDemo(true)
          }}
          controls={
            <>
              <KnobSegmented
                label="mode"
                value={layoutSettings.mode}
                onChange={(v) => onChangeLayout({ mode: v })}
                options={[{ label: 'sidebar', value: 'sidebar' }, { label: 'top', value: 'top' }, { label: 'mix', value: 'mix' }, { label: 'dual-column', value: 'dual-column' }, { label: 'auth', value: 'auth' }]}
              />
              <KnobSegmented label="sidebarTone" value={layoutSettings.sidebarTone} onChange={(v) => onChangeLayout({ sidebarTone: v })} options={[{ label: 'dark', value: 'dark' }, { label: 'light', value: 'light' }]} />
              <KnobSegmented label="contentWidth" value={layoutSettings.contentWidth} onChange={(v) => onChangeLayout({ contentWidth: v })} options={[{ label: 'fluid', value: 'fluid' }, { label: 'fixed', value: 'fixed' }]} />
              <KnobSwitch label="showTabs" checked={layoutSettings.showTabs} onChange={(v) => onChangeLayout({ showTabs: v })} />
              <KnobSwitch label="PageContainer.footer" checked={stickyFooterDemo} onChange={setStickyFooterDemo} />
            </>
          }
          code={`import { ProLayout, PageContainer } from '@abc-design/react'

<ProLayout
  menuItems={menuItems}
  pathname={pathname}
  onNavigate={setPathname}
  settings={{
    mode: '${layoutSettings.mode}',
    sidebarTone: '${layoutSettings.sidebarTone}',
    contentWidth: '${layoutSettings.contentWidth}',
    showTabs: ${layoutSettings.showTabs},
  }}
>
  <PageContainer
    title="业务工作台"
    footer={${stickyFooterDemo ? '<><Button variant="secondary">取消</Button><Button variant="primary">保存</Button></>' : 'undefined'}}
  >
    {children}
  </PageContainer>
</ProLayout>`}
          apiRows={[
            { prop: 'ProLayout.settings.mode', type: "'sidebar' | 'top' | 'mix' | 'dual-column' | 'auth'", defaultValue: "'sidebar'", description: '5 大企业级壳层布局拓扑模式' },
            { prop: 'ProLayout.settings.sidebarTone', type: "'dark' | 'light'", defaultValue: "'dark'", description: '侧边导航栏深色专业或浅色通透色调' },
            { prop: 'ProLayout.settings.contentWidth', type: "'fluid' | 'fixed'", defaultValue: "'fluid'", description: '流式全宽或 1280px 定宽居中内容区' },
            { prop: 'ProLayout.settings.showTabs', type: 'boolean', defaultValue: 'false', description: '是否在主内容区顶部挂载多页签导航栏 (MultiTabBar)' },
            { prop: 'PageContainer.footer', type: 'ReactNode', description: '底部 sticky 吸底操作栏插槽，适用于长表单提交与全局动作' },
          ]}
        >
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {MODES.map((m) => {
              const active = layoutSettings.mode === m.mode
              return (
                <Card
                  key={m.mode}
                  hoverable
                  onClick={() => onChangeLayout({ mode: m.mode })}
                  className={`cursor-pointer ${active ? 'border-[var(--abc-primary)] ring-1 ring-[var(--abc-primary)]' : ''}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs font-bold text-[var(--abc-fg)]">{m.name}</div>
                    {active ? (
                      <StatusTag tone="primary">当前生效</StatusTag>
                    ) : (
                      <span className="text-[11px] text-[var(--abc-primary)]">点击切换 →</span>
                    )}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--abc-fg-muted)]">{m.scene}</p>
                </Card>
              )
            })}
          </div>
        </ComponentDocPreview>

        {/* Card 2: AuthLayout */}
        <ComponentDocPreview
          title="AuthLayout 独立认证页容器沙箱"
          components={['AuthLayout']}
          description="专用于登录、SSO 认证与租户入驻的独立外壳：支持分屏视觉叙事 ('split') 与极简居中卡片 ('centered')，可自定义品牌主标题、页脚版权栏与表单加载提交态。"
          onResetKnobs={() => {
            setAuthVariant('split')
            setAuthLoading(false)
            setAuthShowFooter(true)
            setAuthHeadline('高密度、高可靠的企业级数字工作台')
          }}
          controls={
            <>
              <KnobSegmented label="variant" value={authVariant} onChange={setAuthVariant} options={[{ label: 'split', value: 'split' }, { label: 'centered', value: 'centered' }]} />
              <KnobSwitch label="loading(表单提交态)" checked={authLoading} onChange={setAuthLoading} />
              <KnobSwitch label="footer(页脚版权)" checked={authShowFooter} onChange={setAuthShowFooter} />
              <KnobText label="headline" value={authHeadline} onChange={setAuthHeadline} widthClass="w-52" />
            </>
          }
          code={`import { AuthLayout, Button, FormField, Input } from '@abc-design/react'

<AuthLayout
  variant="${authVariant}"
  headline="${authHeadline}"${authShowFooter ? '\n  copyright="© 2026 ABC Design System. All rights reserved."' : '\n  copyright={null}'}
>
  <FormField label="管理员账号" required><Input defaultValue="admin@abc-design.io" /></FormField>
  <FormField label="登录密码" required><Input type="password" defaultValue="Enterprise#2026" /></FormField>
  <Button variant="primary" block loading={${authLoading}}>安全登录</Button>
</AuthLayout>`}
          apiRows={[
            { prop: 'variant', type: "'split' | 'centered'", defaultValue: "'split'", description: '左侧深色极光叙事分屏或极简居中认证卡片' },
            { prop: 'headline / subheadline', type: 'ReactNode', description: 'split 模式下左侧品牌区的核心标语与副标题' },
            { prop: 'highlights', type: 'string[]', description: 'split 模式下左侧特性清单列表' },
            { prop: 'copyright', type: 'ReactNode', description: '页面底部页脚版权信息（传 null 或空值可隐藏）' },
            { prop: 'topRightExtra', type: 'ReactNode', description: '右上角扩展槽位（如主题切换或语言切换按钮）' },
          ]}
        >
          <div className="overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]">
            <AuthLayout
              variant={authVariant}
              headline={authHeadline}
              copyright={authShowFooter ? '© 2026 ABC Design System. All rights reserved.' : null}
              className="!min-h-[430px]"
            >
              <div className="space-y-4">
                <div>
                  <h2 className="text-base font-bold text-[var(--abc-fg)]">登录企业控制台</h2>
                  <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">请输入您的组织域账号与安全口令</p>
                </div>
                <FormField label="管理员账号" required>
                  <Input prefix={<User className="h-3.5 w-3.5" />} defaultValue="admin@abc-design.io" />
                </FormField>
                <FormField label="登录密码" required>
                  <Input type="password" prefix={<Lock className="h-3.5 w-3.5" />} defaultValue="Enterprise#2026" />
                </FormField>
                <Button
                  variant="primary"
                  block
                  loading={authLoading}
                  icon={<Check className="h-3.5 w-3.5" />}
                  onClick={() => abcToast.success('认证请求已提交')}
                >
                  {authLoading ? '正在核验凭证...' : '安全登录'}
                </Button>
                {authShowFooter && (
                  <div className="flex items-center justify-between border-t border-[var(--abc-border)] pt-3 text-[11px] text-[var(--abc-fg-muted)]">
                    <span>支持企业 OIDC 单点登录</span>
                    <span className="text-[var(--abc-primary)]">忘记密码?</span>
                  </div>
                )}
              </div>
            </AuthLayout>
          </div>
        </ComponentDocPreview>

        {/* Card 3: KeepAliveContainer & PageTransition */}
        <ComponentDocPreview
          title="KeepAliveContainer 实时滚动记忆 & PageTransition 切页动画"
          components={['KeepAliveContainer', 'PageTransition', 'TopProgressBar']}
          description="原生 passive scroll 监听 + useLayoutEffect 同步复原滚动高度，支持 LRU 最大缓存淘汰 (maxCached)、单页签异常隔离 (isolateError) 与 5 种切页过渡动画。"
          onResetKnobs={() => {
            setTransitionPreset('fade-slide')
            setKaEnabled(true)
            setKaMaxCached(3)
            setKaIsolateError(true)
            setKaShowProgress(true)
          }}
          controls={
            <>
              <KnobSelect
                label="transition"
                value={transitionPreset}
                onChange={(v) => {
                  setTransitionPreset(v)
                  setTransitionSeed((s) => s + 1)
                }}
                options={[{ label: 'fade-slide', value: 'fade-slide' }, { label: 'fade', value: 'fade' }, { label: 'zoom', value: 'zoom' }, { label: 'slide-left', value: 'slide-left' }, { label: 'none', value: 'none' }]}
              />
              <KnobSwitch label="enabled" checked={kaEnabled} onChange={setKaEnabled} />
              <KnobNumber label="maxCached" value={kaMaxCached} onChange={setKaMaxCached} min={1} max={6} />
              <KnobSwitch label="isolateError" checked={kaIsolateError} onChange={setKaIsolateError} />
              <KnobSwitch label="showProgress" checked={kaShowProgress} onChange={setKaShowProgress} />
            </>
          }
          code={`import { KeepAliveContainer, PageTransition } from '@abc-design/react'

<KeepAliveContainer
  enabled={${kaEnabled}}
  activeKey="${kaActive}"
  maxCached={${kaMaxCached}}
  isolateError={${kaIsolateError}}
  aliveKeys={['/orders', '/clusters', '/audit']}
  refreshKeys={refreshKeys}
  scrollContainerRef={scrollContainerRef}
>
  <PageTransition activeKey="${kaActive}" transition="${transitionPreset}" showProgress={${kaShowProgress}}>
    {currentView}
  </PageTransition>
</KeepAliveContainer>`}
          apiRows={[
            { prop: 'KeepAliveContainer.enabled', type: 'boolean', defaultValue: 'true', description: '是否启用 DOM 节点保活；关闭后每次切换销毁重挂载' },
            { prop: 'KeepAliveContainer.maxCached', type: 'number', defaultValue: '12', description: '最大缓存实例上限，超出按 LRU 策略淘汰最久未访问页签' },
            { prop: 'KeepAliveContainer.isolateError', type: 'boolean', defaultValue: 'false', description: '为每个页签独立包裹 TabErrorBoundary 防止单页签崩溃波及全局' },
            { prop: 'PageTransition.transition', type: "'fade-slide' | 'fade' | 'zoom' | 'slide-left' | 'none'", defaultValue: "'fade-slide'", description: '页面切换过渡动效模式（对应 AbcPageTransition）' },
            { prop: 'PageTransition.showProgress', type: 'boolean', defaultValue: 'true', description: '切换 activeKey 时自动驱动顶部 TopProgressBar 进度条' },
          ]}
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                {[{ path: '/orders', title: '订单履约中心' }, { path: '/clusters', title: '边缘算力集群' }, { path: '/audit', title: '安全审计流水' }].map((tab) => {
                  const active = kaActive === tab.path
                  return (
                    <button
                      key={tab.path}
                      type="button"
                      onClick={() => handleSwitchTab(tab.path)}
                      className={`inline-flex items-center gap-1.5 rounded-[var(--abc-radius-md)] border px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                        active ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]' : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]'
                      }`}
                    >
                      <ScrollText className="h-3.5 w-3.5" />
                      <span>{tab.title}</span>
                    </button>
                  )
                })}
                <Button size="xs" variant="secondary" icon={<RefreshCw className="h-3 w-3" />} onClick={() => { setKaRefreshKeys((p) => ({ ...p, [kaActive]: (p[kaActive] ?? 0) + 1 })); abcToast.info(`已重建缓存页签 ${kaActive}`) }}>
                  重建当前页签
                </Button>
                <Button size="xs" variant="ghost" icon={<Play className="h-3 w-3" />} onClick={() => { abcProgress.start(); window.setTimeout(() => abcProgress.done(), 320) }}>
                  预览进度条
                </Button>
              </div>
              <StatusTag tone="info" className="font-mono">scrollTop: {Math.round(liveScrollTop)}px · maxCached: {kaMaxCached}</StatusTag>
            </div>
            <div
              ref={scrollBoxRef}
              onScroll={(e) => setLiveScrollTop(e.currentTarget.scrollTop)}
              className="h-60 overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/60"
            >
              <KeepAliveContainer
                enabled={kaEnabled}
                maxCached={kaMaxCached}
                isolateError={kaIsolateError}
                activeKey={kaActive}
                aliveKeys={['/orders', '/clusters', '/audit']}
                refreshKeys={kaRefreshKeys}
                scrollContainerRef={scrollBoxRef}
                activeClassName={TRANSITION_CLASS_MAP[transitionPreset]}
                onTabReload={(p) => setKaRefreshKeys((prev) => ({ ...prev, [p]: (prev[p] ?? 0) + 1 }))}
                onNavigateHome={() => handleSwitchTab('/orders')}
              >
                <PageTransition
                  activeKey={`${kaActive}_${transitionSeed}`}
                  transition={transitionPreset}
                  showProgress={kaShowProgress}
                >
                  {kaActive === '/orders' && <KeepAlivePaneDemo routePath="/orders" title="订单履约中心" isolateError={kaIsolateError} />}
                  {kaActive === '/clusters' && <KeepAlivePaneDemo routePath="/clusters" title="边缘算力集群" isolateError={kaIsolateError} />}
                  {kaActive === '/audit' && <KeepAlivePaneDemo routePath="/audit" title="安全审计流水" isolateError={kaIsolateError} />}
                </PageTransition>
              </KeepAliveContainer>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
export default ShellLayoutsPage
