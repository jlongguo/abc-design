import React, { useRef, useState } from 'react'
import {
  BrandIcon,
  Button,
  ErrorBoundary,
  Input,
  KeepAliveContainer,
  PageContainer,
  PageTransition,
  RadioGroup,
  StatusTag,
  Switch,
  TabErrorBoundary,
  abcProgress,
  abcToast,
  buttonClass,
  dangerButtonClass,
  inputClass,
  labelClass,
  pageHeaderClass,
  pageSubTitleClass,
  pageTitleClass,
  panelClass,
  secondaryClass,
  tableCardClass,
  tableCellClass,
  tableHeadClass,
  tableHeaderCellClass,
  textareaClass,
  textButtonClass,
  type AbcPageTransition,
  type BrandIconPreset,
} from '@abc-design/react'
import { MarkdownEditor, type MarkdownEditorHandle } from '@abc-design/markdown'
import {
  AlertTriangle,
  Code2,
  FileCode2,
  Layers,
  Play,
  RefreshCw,
  ScrollText,
  Sparkles,
} from 'lucide-react'
import { ComponentDocPreview } from '../components/ComponentDocPreview'

const VECTOR_LOGO_A = `<svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="16" fill="#2563eb"/><path d="M18 44L32 16L46 44H38.5L32 30L25.5 44H18Z" fill="#ffffff"/></svg>`
const VECTOR_MASK_GLYPH = `<svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 6L56 18V46L32 58L8 46V18L32 6ZM32 18L20 24V40L32 46L44 40V24L32 18Z" fill="#000000"/></svg>`

const BRAND_PRESETS: Record<string, BrandIconPreset> = {
  bytesflows: {
    mode: 'image',
    src: `data:image/svg+xml;utf8,${encodeURIComponent(VECTOR_LOGO_A)}`,
    alt: 'BytesFlows',
  },
  ipapex: {
    mode: 'mask',
    src: `data:image/svg+xml;utf8,${encodeURIComponent(VECTOR_MASK_GLYPH)}`,
    maskClassName: 'bg-[var(--abc-primary)]',
  },
  'broken-cdn': {
    mode: 'image',
    src: 'https://invalid.abc-design.local/non-existent-logo.png',
    alt: 'Broken Logo',
  },
}

const INITIAL_MARKDOWN = `## ABC Design 企业级发版通告模板

> 独立子包 \`@abc-design/markdown\` 将重型编辑器解耦在 \`@abc-design/react\` 核心体积之外，按需引入。

### 1. 本次变更清单
- **零闪烁主题同步**：自动订阅 \`AbcProvider\` 与根文档 \`data-abc-theme\` / \`html.dark\`；
- **命令式光标插值**：通过 \`editorRef.current?.insertText(snippet)\` 向当前选区注入模板；
- **三态分屏切换**：支持 \`live\`（双栏同步预览）、\`edit\`（专注编辑）、\`preview\`（只读审阅）。

\`\`\`tsx
import { MarkdownEditor } from '@abc-design/markdown'

export function ArticleField({ value, onChange }) {
  return <MarkdownEditor value={value} onChange={onChange} height={320} />
}
\`\`\`
`

const CrashSimulator: React.FC<{ crash: boolean; label: string }> = ({ crash, label }) => {
  if (crash) {
    throw new Error(`[${label}] 模拟渲染期未捕获异常：Cannot read properties of undefined (reading 'nodes')`)
  }
  return (
    <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 text-xs">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[var(--abc-success)]">{label} · 运行健康</span>
        <StatusTag tone="success" dot>
          Isolated OK
        </StatusTag>
      </div>
      <p className="mt-1.5 text-[var(--abc-fg-muted)]">
        在此页签中输入草稿或切换参数，即使相邻页签发生运行时崩溃也不会丢失状态。
      </p>
      <Input className="mt-2.5" defaultValue={`${label} 未保存的表单草稿内容`} />
    </div>
  )
}

const KeepAlivePaneDemo: React.FC<{ routePath: string; title: string }> = ({ routePath, title }) => {
  const [draft, setDraft] = useState(`${title} 筛选关键字`)
  const [counter, setCounter] = useState(1)

  return (
    <div className="space-y-3 p-3.5 text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3">
        <div className="space-y-1">
          <div className="font-semibold text-[var(--abc-fg)]">
            {title} <code className="ml-1 font-mono text-[11px] text-[var(--abc-primary)]">{routePath}</code>
          </div>
          <div className="text-[var(--abc-fg-muted)]">
            修改下方输入框并将列表向下滚动，切换到其他页签再切回，观察输入状态与滚动像素精准复原。
          </div>
        </div>
        <Button size="xs" variant="secondary" onClick={() => setCounter((c) => c + 1)}>
          本地状态计数：{counter}
        </Button>
      </div>

      <Input value={draft} onChange={(e) => setDraft(e.target.value)} />

      <div className="space-y-2">
        {Array.from({ length: 14 }, (_, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-2 text-[var(--abc-fg-secondary)]"
          >
            <span>
              {title} · 长列表滚动锚点行 #{idx + 1}
            </span>
            <span className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
              offset ≈ {(idx + 1) * 38}px
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const MarkdownAndShellDocsPage: React.FC = () => {
  // 1. MarkdownEditor Knobs
  const mdRef = useRef<MarkdownEditorHandle>(null)
  const [mdValue, setMdValue] = useState(INITIAL_MARKDOWN)
  const [mdPreview, setMdPreview] = useState<'live' | 'edit' | 'preview'>('live')
  const [mdColorMode, setMdColorMode] = useState<'auto' | 'light' | 'dark'>('auto')
  const [mdHideToolbar, setMdHideToolbar] = useState(false)
  const [mdDisabled, setMdDisabled] = useState(false)

  // 2. BrandIcon / TenantIcon Knobs
  const [tenantCode, setTenantCode] = useState<string>('ipapex')
  const [iconSizeClass, setIconSizeClass] = useState<'h-4 w-4' | 'h-6 w-6' | 'h-9 w-9'>('h-6 w-6')

  // 3. TabErrorBoundary & ErrorBoundary Knobs
  const [activeIsoTab, setActiveIsoTab] = useState<'/ops/nodes' | '/ops/billing'>('/ops/nodes')
  const [crashNodesTab, setCrashNodesTab] = useState(false)
  const [crashPanelModule, setCrashPanelModule] = useState(false)

  // 4. KeepAliveContainer + PageTransition + TopProgressBar Knobs
  const scrollBoxRef = useRef<HTMLDivElement>(null)
  const [kaActive, setKaActive] = useState<string>('/orders')
  const [kaEnabled, setKaEnabled] = useState(true)
  const [kaAliveKeys, setKaAliveKeys] = useState<string[]>(['/orders', '/clusters', '/audit'])
  const [kaRefreshKeys, setKaRefreshKeys] = useState<Record<string, number>>({})
  const [liveScrollTop, setLiveScrollTop] = useState(0)
  const [transitionPreset, setTransitionPreset] = useState<AbcPageTransition>('fade-slide')
  const [transitionSeed, setTransitionSeed] = useState(1)

  // 5. abcUiClasses Knobs
  const [nativeHostName, setNativeHostName] = useState('edge-gw-shanghai-01')
  const [nativeRemark, setNativeRemark] = useState('BGP 多线接入，自动同步全局圆角与亮暗色板')

  return (
    <PageContainer
      title="Markdown 编辑器与通用壳层基建预览"
      subtitle="涵盖独立子包 @abc-design/markdown、多租户图标 BrandIcon、单页签异常隔离 TabErrorBoundary、KeepAlive 实时滚动记忆、零依赖进度条 TopProgressBar 与语义类名系统 abcUiClasses"
      tags={
        <StatusTag tone="primary" dot pulse>
          New Abstractions
        </StatusTag>
      }
    >
      <div className="space-y-6">
        {/* 1. @abc-design/markdown 独立子包 */}
        <ComponentDocPreview
          title="MarkdownEditor 企业级双栏 Markdown 编辑器"
          pkg="@abc-design/markdown"
          description="独立子包封装 @uiw/react-md-editor（将编辑器依赖外部化，零污染 @abc-design/react 核心体积）。支持跟随 AbcProvider 亮暗主题自动切换、三态预览模式切换，以及通过 ref.current.insertText() 在当前光标选区精准插入模板片段。"
          controls={
            <div className="flex flex-wrap items-center gap-3">
              <RadioGroup
                variant="segmented"
                size="xs"
                value={mdPreview}
                onChange={(v) => setMdPreview(v as 'live' | 'edit' | 'preview')}
                options={[
                  { label: '双栏分屏 (live)', value: 'live' },
                  { label: '仅编辑 (edit)', value: 'edit' },
                  { label: '仅预览 (preview)', value: 'preview' },
                ]}
              />
              <RadioGroup
                variant="segmented"
                size="xs"
                value={mdColorMode}
                onChange={(v) => setMdColorMode(v as 'auto' | 'light' | 'dark')}
                options={[
                  { label: '跟随主题 (auto)', value: 'auto' },
                  { label: '强制亮色', value: 'light' },
                  { label: '强制暗色', value: 'dark' },
                ]}
              />
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <Switch size="sm" checked={mdHideToolbar} onChange={setMdHideToolbar} />
                <span>隐藏工具栏</span>
              </label>
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <Switch size="sm" checked={mdDisabled} onChange={setMdDisabled} />
                <span>只读禁用</span>
              </label>
              <Button
                size="xs"
                variant="secondary"
                icon={<FileCode2 className="h-3 w-3" />}
                onClick={() => {
                  mdRef.current?.insertText(
                    '\n| 节点区域 | 峰值带宽 | 状态 |\n| :--- | :--- | :--- |\n| 上海金融区 | 10 Gbps | 正常 |\n'
                  )
                  abcToast.success('已向当前光标处插入 Markdown 表格模板')
                }}
              >
                光标处插入表格
              </Button>
            </div>
          }
          code={`import { useRef, useState } from 'react'
import { MarkdownEditor, type MarkdownEditorHandle } from '@abc-design/markdown'

export function ReleaseNoteEditor() {
  const editorRef = useRef<MarkdownEditorHandle>(null)
  const [content, setContent] = useState('# Hello ABC Design')

  return (
    <MarkdownEditor
      ref={editorRef}
      value={content}
      onChange={(val) => setContent(val ?? '')}
      preview="${mdPreview}"
      colorMode="${mdColorMode}"
      hideToolbar={${mdHideToolbar}}
      disabled={${mdDisabled}}
      height={320}
    />
  )
}`}
          apiRows={[
            { prop: 'value', type: 'string', defaultValue: "''", description: '受控 Markdown 文本内容' },
            { prop: 'onChange', type: '(val?: string) => void', description: '文本编辑或调用 insertText 时的变更回调' },
            { prop: 'preview', type: "'live' | 'edit' | 'preview'", defaultValue: "'live'", description: '双栏实时对照、纯源码编辑或纯渲染预览' },
            { prop: 'colorMode', type: "'auto' | 'light' | 'dark'", defaultValue: "'auto'", description: 'auto 模式下自动联动 AbcProvider 及 html.dark 主题' },
            { prop: 'hideToolbar', type: 'boolean', defaultValue: 'false', description: '是否隐藏顶部快捷排版工具栏' },
            { prop: 'ref.insertText', type: '(text: string) => void', description: '在当前 textarea 光标选区插入文本（未聚焦时自动追加至末尾）' },
          ]}
        >
          <MarkdownEditor
            ref={mdRef}
            value={mdValue}
            onChange={(val) => setMdValue(val ?? '')}
            preview={mdPreview}
            colorMode={mdColorMode}
            hideToolbar={mdHideToolbar}
            disabled={mdDisabled}
            height={320}
          />
        </ComponentDocPreview>

        {/* 2. BrandIcon / TenantIcon 多品牌前缀图标 */}
        <ComponentDocPreview
          title="BrandIcon / TenantIcon 多租户品牌前缀图标"
          description="解耦多租户/多工作区图标渲染：支持 image 常规图片（加载失败自动降级矢量图标且切换租户自动复位错误态）与 CSS mask-image 矢量蒙版（自动跟随当前主题品牌色 --abc-primary 动态着色）。"
          controls={
            <div className="flex flex-wrap items-center gap-3">
              <RadioGroup
                variant="segmented"
                size="xs"
                value={tenantCode}
                onChange={(v) => setTenantCode(String(v))}
                options={[
                  { label: 'CSS Mask 主题着色 (ipapex)', value: 'ipapex' },
                  { label: 'Image 正常图标 (bytesflows)', value: 'bytesflows' },
                  { label: 'Image 断链自动降级', value: 'broken-cdn' },
                  { label: '未注册租户默认兜底', value: 'unknown-tenant' },
                ]}
              />
              <RadioGroup
                variant="segmented"
                size="xs"
                value={iconSizeClass}
                onChange={(v) => setIconSizeClass(v as 'h-4 w-4' | 'h-6 w-6' | 'h-9 w-9')}
                options={[
                  { label: '16px 紧凑', value: 'h-4 w-4' },
                  { label: '24px 标准', value: 'h-6 w-6' },
                  { label: '36px 醒目', value: 'h-9 w-9' },
                ]}
              />
            </div>
          }
          code={`import { BrandIcon, type BrandIconPreset } from '@abc-design/react'

const PRESETS: Record<string, BrandIconPreset> = {
  bytesflows: { mode: 'image', src: 'https://bytesflows.com/icon.png' },
  ipapex: { mode: 'mask', src: 'https://ipapex.com/icons/icon.svg', maskClassName: 'bg-[var(--abc-primary)]' },
}

<BrandIcon code="${tenantCode}" presets={PRESETS} className="${iconSizeClass}" />`}
          apiRows={[
            { prop: 'code / tenantCode', type: 'string', description: '品牌或租户标识码（自动忽略大小写与首尾空格匹配 presets）' },
            { prop: 'presets', type: 'Record<string, BrandIconPreset>', description: '多品牌渲染策略字典（支持 image 与 mask 两种渲染模式）' },
            { prop: 'maskSrc / maskClassName', type: 'string', description: '单图标直接开启 CSS mask-image 矢量主题色渲染' },
            { prop: 'fallbackIcon', type: 'ReactNode', description: '未命中预设或远程图片 onError 时的自定义兜底图标' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs">
                <BrandIcon code={tenantCode} presets={BRAND_PRESETS} className={iconSizeClass} />
              </div>
              <div className="space-y-1 text-xs">
                <div className="font-semibold text-[var(--abc-fg)]">
                  当前激活租户编码：<code className="font-mono text-[var(--abc-primary)]">{tenantCode}</code>
                </div>
                <p className="text-[var(--abc-fg-muted)]">
                  可点击右上角主题定制器切换 6 种品牌色，观察 <code className="font-mono">mask</code> 模式图标随{' '}
                  <code className="font-mono">--abc-primary</code> 实时变色。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              {[
                { key: 'ipapex', label: 'Mask 品牌色联动' },
                { key: 'bytesflows', label: 'Image 原色直出' },
                { key: 'broken-cdn', label: '断链 Layers 回退' },
                { key: 'other', label: '未知租户 Building2' },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setTenantCode(item.key)}
                  className={`flex items-center gap-2.5 rounded-[var(--abc-radius-md)] border px-3 py-2.5 text-left transition-colors cursor-pointer ${
                    tenantCode === item.key
                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]'
                  }`}
                >
                  <BrandIcon code={item.key} presets={BRAND_PRESETS} className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </ComponentDocPreview>

        {/* 3. TabErrorBoundary & ErrorBoundary 异常隔离边界 */}
        <ComponentDocPreview
          title="TabErrorBoundary & ErrorBoundary 分级崩溃自愈边界"
          description="将渲染期异常严格封闭在故障页签或局部业务卡片内：TabErrorBoundary 提供可折叠技术堆栈、重载当前页签、关闭页签与返回大盘操作；ErrorBoundary 支持 fullscreen 全屏兜底与 panel 局部模块兜底。"
          controls={
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                size="xs"
                variant={crashNodesTab ? 'primary' : 'danger'}
                icon={<AlertTriangle className="h-3 w-3" />}
                onClick={() => {
                  setActiveIsoTab('/ops/nodes')
                  setCrashNodesTab((v) => !v)
                }}
              >
                {crashNodesTab ? '修复「节点调度页签」' : '触发「节点调度页签」崩溃'}
              </Button>
              <Button
                size="xs"
                variant={crashPanelModule ? 'primary' : 'secondary'}
                onClick={() => setCrashPanelModule((v) => !v)}
              >
                {crashPanelModule ? '修复右侧计费卡片' : '触发右侧 ErrorBoundary 崩溃'}
              </Button>
            </div>
          }
          code={`import { TabErrorBoundary, ErrorBoundary } from '@abc-design/react'

// 1. 多页签级异常隔离（ProLayout 默认内置开启）
<TabErrorBoundary
  path="/ops/nodes"
  onReload={() => refreshTab('/ops/nodes')}
  onClose={() => closeTab('/ops/nodes')}
  onNavigateHome={() => navigate('/dashboard')}
>
  <NodeClusterPage />
</TabErrorBoundary>

// 2. 局部容器或应用级根边界
<ErrorBoundary variant="panel" tabTitle="实时计费模块" onReset={resetBilling}>
  <BillingWidget />
</ErrorBoundary>`}
          apiRows={[
            { prop: 'TabErrorBoundary.path', type: 'string', description: '故障页签对应的路由路径徽标，便于研发快速定位异常模块' },
            { prop: 'TabErrorBoundary.onReload / onClose', type: '() => void', description: '点击“重新加载本页”自动清空边界错误态并触发回调；点击“关闭此页签”移除故障标签' },
            { prop: 'ErrorBoundary.variant', type: "'fullscreen' | 'panel'", defaultValue: '自适应', description: '顶层包裹默认全屏兜底，传入 onReset / tabTitle / resetKey 时自动切换为局部面板形态' },
            { prop: 'resetKey', type: 'string | number', description: '路由参数或数据源标识变化时自动复位异常捕获状态' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/50 p-3.5 space-y-3">
              <div className="flex items-center justify-between border-b border-[var(--abc-border)] pb-2.5">
                <div className="flex items-center gap-1.5">
                  {[
                    { path: '/ops/nodes' as const, label: '节点调度页签' },
                    { path: '/ops/billing' as const, label: '财务对账页签 (不受波及)' },
                  ].map((tab) => (
                    <button
                      key={tab.path}
                      type="button"
                      onClick={() => setActiveIsoTab(tab.path)}
                      className={`rounded-[var(--abc-radius-sm)] px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        activeIsoTab === tab.path
                          ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                          : 'bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <span className="font-mono text-[11px] text-[var(--abc-fg-muted)]">TabErrorBoundary</span>
              </div>

              <div className={activeIsoTab === '/ops/nodes' ? 'block' : 'hidden'}>
                <TabErrorBoundary
                  path="/ops/nodes"
                  resetKey={String(crashNodesTab)}
                  onReload={() => {
                    setCrashNodesTab(false)
                    abcToast.success('节点调度页签已原地重挂载恢复')
                  }}
                  onClose={() => {
                    setCrashNodesTab(false)
                    setActiveIsoTab('/ops/billing')
                    abcToast.info('已关闭故障页签并切回健康页签')
                  }}
                  onNavigateHome={() => {
                    setCrashNodesTab(false)
                    setActiveIsoTab('/ops/billing')
                  }}
                  className="!min-h-[260px] !p-2"
                >
                  <CrashSimulator crash={crashNodesTab} label="节点调度页签" />
                </TabErrorBoundary>
              </div>

              <div className={activeIsoTab === '/ops/billing' ? 'block' : 'hidden'}>
                <TabErrorBoundary path="/ops/billing" className="!min-h-[260px] !p-2">
                  <CrashSimulator crash={false} label="财务对账页签" />
                </TabErrorBoundary>
              </div>
            </div>

            <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/50 p-3.5 space-y-3">
              <div className="flex items-center justify-between border-b border-[var(--abc-border)] pb-2.5 text-xs">
                <span className="font-semibold text-[var(--abc-fg)]">容器级 ErrorBoundary (variant=&quot;panel&quot;)</span>
                <span className="font-mono text-[11px] text-[var(--abc-fg-muted)]">ErrorBoundary</span>
              </div>
              <ErrorBoundary
                variant="panel"
                tabTitle="实时计费引擎卡片"
                resetKey={String(crashPanelModule)}
                onReset={() => {
                  setCrashPanelModule(false)
                  abcToast.success('计费引擎模块已重置恢复')
                }}
                className="!min-h-[240px] !p-2"
              >
                <CrashSimulator crash={crashPanelModule} label="计费引擎子模块" />
              </ErrorBoundary>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 4. KeepAliveContainer + TopProgressBar + PageTransition */}
        <ComponentDocPreview
          title="KeepAliveContainer 实时滚动记忆 & TopProgressBar / PageTransition"
          description="复刻生产级多页签缓存体验：通过 passive scroll 监听 + useLayoutEffect 同步复原各页签滚动偏移，支持 refreshKeys 单页签强制刷新与 aliveKeys 关闭销毁内存；配合零第三方依赖的 TopProgressBar / abcProgress 与 4 种切页动画。"
          controls={
            <div className="flex flex-wrap items-center gap-3">
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <Switch size="sm" checked={kaEnabled} onChange={setKaEnabled} />
                <span>开启 KeepAlive</span>
              </label>
              <RadioGroup
                variant="segmented"
                size="xs"
                value={transitionPreset}
                onChange={(v) => {
                  setTransitionPreset(v as AbcPageTransition)
                  setTransitionSeed((s) => s + 1)
                }}
                options={[
                  { label: 'fade-slide', value: 'fade-slide' },
                  { label: 'fade', value: 'fade' },
                  { label: 'zoom', value: 'zoom' },
                  { label: 'slide-left', value: 'slide-left' },
                ]}
              />
              <Button
                size="xs"
                variant="secondary"
                icon={<Play className="h-3 w-3" />}
                onClick={() => {
                  abcProgress.start()
                  window.setTimeout(() => abcProgress.set(0.68), 160)
                  window.setTimeout(() => abcProgress.done(), 460)
                }}
              >
                触发顶部进度条 (abcProgress)
              </Button>
              <Button
                size="xs"
                variant="secondary"
                icon={<RefreshCw className="h-3 w-3" />}
                onClick={() => {
                  setKaRefreshKeys((prev) => ({
                    ...prev,
                    [kaActive]: (prev[kaActive] ?? 0) + 1,
                  }))
                  abcToast.info(`已通过 refreshKeys 强制重建页签 ${kaActive}`)
                }}
              >
                强制刷新当前缓存页签
              </Button>
            </div>
          }
          code={`import { KeepAliveContainer, PageTransition, abcProgress } from '@abc-design/react'

// 命令式触发顶部加载条（无需额外安装 nprogress）
abcProgress.start()
await fetchPageBundle()
abcProgress.done()

// 多页签 DOM 保活 + 实时滚动位置记忆 + 单页签错误边界
<KeepAliveContainer
  enabled={${kaEnabled}}
  activeKey="${kaActive}"
  aliveKeys={['/orders', '/clusters', '/audit']}
  refreshKeys={refreshKeys}
  scrollContainerRef={scrollContainerRef}
  isolateError
>
  <PageTransition activeKey="${kaActive}" transition="${transitionPreset}">
    {currentOutlet}
  </PageTransition>
</KeepAliveContainer>`}
          apiRows={[
            { prop: 'KeepAliveContainer.scrollContainerRef', type: 'RefObject<HTMLElement | null>', description: '绑定外层滚动容器后，实时记录每个路由键的 scrollTop 并在切回时零闪烁复原' },
            { prop: 'KeepAliveContainer.refreshKeys', type: 'Record<string, number>', description: '按路由键递增数值即可精准销毁并重建单个缓存页签，不影响其余缓存页' },
            { prop: 'KeepAliveContainer.aliveKeys', type: 'string[]', description: '当前打开的页签路径集合，移除路径后立即回收已关闭页签的缓存节点与滚动记录' },
            { prop: 'PageTransition.transition', type: "'fade-slide' | 'fade' | 'zoom' | 'slide-left' | 'none'", defaultValue: "'fade-slide'", description: '切页过渡动效预设，可选自动联动顶部进度条' },
            { prop: 'abcProgress', type: '{ start, set, done }', description: '全局命令式顶部进度控制器，ProLayout 默认已挂载 TopProgressBar' },
          ]}
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { path: '/orders', title: '订单履约中心' },
                  { path: '/clusters', title: '边缘算力集群' },
                  { path: '/audit', title: '安全审计流水' },
                ].map((tab) => {
                  const isAlive = kaAliveKeys.includes(tab.path)
                  const active = kaActive === tab.path
                  return (
                    <div key={tab.path} className="inline-flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => {
                          if (!isAlive) setKaAliveKeys((prev) => [...prev, tab.path])
                          setKaActive(tab.path)
                        }}
                        className={`inline-flex items-center gap-1.5 rounded-[var(--abc-radius-md)] border px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                          active
                            ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                            : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]'
                        }`}
                      >
                        <ScrollText className="h-3.5 w-3.5" />
                        <span>{tab.title}</span>
                      </button>
                    </div>
                  )
                })}
              </div>

              <StatusTag tone="info" className="font-mono">
                当前容器 scrollTop: {Math.round(liveScrollTop)}px
              </StatusTag>
            </div>

            <div
              ref={scrollBoxRef}
              onScroll={(e) => setLiveScrollTop(e.currentTarget.scrollTop)}
              className="h-60 overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/60"
            >
              <KeepAliveContainer
                enabled={kaEnabled}
                activeKey={kaActive}
                aliveKeys={kaAliveKeys}
                refreshKeys={kaRefreshKeys}
                scrollContainerRef={scrollBoxRef}
                isolateError
              >
                <PageTransition
                  activeKey={`${kaActive}_${transitionSeed}`}
                  transition={transitionPreset}
                  showProgress
                >
                  {kaActive === '/orders' && (
                    <KeepAlivePaneDemo routePath="/orders" title="订单履约中心" />
                  )}
                  {kaActive === '/clusters' && (
                    <KeepAlivePaneDemo routePath="/clusters" title="边缘算力集群" />
                  )}
                  {kaActive === '/audit' && (
                    <KeepAlivePaneDemo routePath="/audit" title="安全审计流水" />
                  )}
                </PageTransition>
              </KeepAliveContainer>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 5. abcUiClasses 语义化类名预设 */}
        <ComponentDocPreview
          title="abcUiClasses 设计令牌语义化样式预设矩阵"
          description="面向大盘自定义面板、轻量原生表单或第三方库桥接场景，提供 16 项绑定 --abc-* CSS 变量的语义化 Tailwind 类名常量（panelClass / inputClass / buttonClass / tableCardClass 等），零 JS 开销即可跟随主题色、暗黑模式与圆角档位。"
          code={`import {
  panelClass,
  pageHeaderClass,
  pageTitleClass,
  labelClass,
  inputClass,
  buttonClass,
  secondaryClass,
  tableCardClass,
  tableHeadClass,
  tableHeaderCellClass,
  tableCellClass,
} from '@abc-design/react'

<div className={panelClass}>
  <div className={pageHeaderClass}>
    <h4 className={pageTitleClass}>原生节点快速注册面板</h4>
  </div>
  <label className={labelClass}>网关主机名</label>
  <input className={inputClass} value={host} onChange={...} />
  <button className={buttonClass}>立即提交</button>
</div>`}
          apiRows={[
            { prop: 'panelClass / filterCardClass / tableCardClass', type: 'string', description: '通用卡片容器、搜索筛选面板与表格外框标准圆角/边框/阴影类名' },
            { prop: 'inputClass / textareaClass / labelClass', type: 'string', description: '与设计系统高度、焦点光环、禁用态严格对齐的原生表单控件类名' },
            { prop: 'buttonClass / secondaryClass / dangerButtonClass / textButtonClass', type: 'string', description: '主按钮、次要描边按钮、危险按钮与轻量文本按钮语义类名' },
            { prop: 'tableHeadClass / tableHeaderCellClass / tableCellClass', type: 'string', description: '原生 <table> 表头行、表头单元格与表体单元格排版类名' },
            { prop: 'abcUiClasses', type: 'Readonly<Record<string, string>>', description: '聚合全部 16 项语义类名的命名空间对象' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className={panelClass}>
              <div className={pageHeaderClass}>
                <div>
                  <div className={pageTitleClass}>原生 HTML 控件语义类名直出</div>
                  <div className={pageSubTitleClass}>
                    以下控件均为原生 &lt;input&gt; / &lt;textarea&gt; / &lt;button&gt;，完全通过 abcUiClasses 着色
                  </div>
                </div>
                <Code2 className="h-4 w-4 text-[var(--abc-primary)]" />
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <label className={labelClass}>边缘网关标识 (inputClass)</label>
                  <input
                    className={inputClass}
                    value={nativeHostName}
                    onChange={(e) => setNativeHostName(e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>路由策略说明 (textareaClass)</label>
                  <textarea
                    rows={2}
                    className={textareaClass}
                    value={nativeRemark}
                    onChange={(e) => setNativeRemark(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    className={buttonClass}
                    onClick={() => abcToast.success(`已保存节点 ${nativeHostName}`)}
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    主操作 (buttonClass)
                  </button>
                  <button
                    type="button"
                    className={secondaryClass}
                    onClick={() => setNativeHostName('edge-gw-shanghai-01')}
                  >
                    次要重置 (secondaryClass)
                  </button>
                  <button
                    type="button"
                    className={dangerButtonClass}
                    onClick={() => abcToast.warning('已触发危险按钮样式预览')}
                  >
                    熔断下线 (dangerButtonClass)
                  </button>
                  <button
                    type="button"
                    className={textButtonClass}
                    onClick={() => abcToast.info('轻量文本动作')}
                  >
                    文本按钮
                  </button>
                </div>
              </div>
            </div>

            <div className={tableCardClass}>
              <div className="flex items-center justify-between border-b border-[var(--abc-border)] px-4 py-3 text-xs">
                <span className="font-semibold text-[var(--abc-fg)]">
                  原生 &lt;table&gt; 套用 tableCardClass / tableHeadClass
                </span>
                <Layers className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
              </div>
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className={tableHeadClass}>
                    <th className={tableHeaderCellClass}>语义常量名</th>
                    <th className={tableHeaderCellClass}>绑定核心 Token</th>
                    <th className={tableHeaderCellClass}>典型场景</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--abc-border)]">
                  {[
                    { name: 'panelClass', token: '--abc-bg-surface / --abc-border', usage: '大盘自定义统计面板' },
                    { name: 'inputClass', token: '--abc-control-height / --abc-primary', usage: '高性能原生输入筛选框' },
                    { name: 'buttonClass', token: '--abc-primary / --abc-radius-md', usage: '工具栏主动作按钮' },
                    { name: 'tableCellClass', token: '--abc-fg-secondary', usage: '嵌入式轻量明细表' },
                  ].map((row) => (
                    <tr key={row.name}>
                      <td className={`${tableCellClass} font-mono font-semibold text-[var(--abc-primary)]`}>
                        {row.name}
                      </td>
                      <td className={`${tableCellClass} font-mono text-[11px]`}>{row.token}</td>
                      <td className={tableCellClass}>{row.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default MarkdownAndShellDocsPage
