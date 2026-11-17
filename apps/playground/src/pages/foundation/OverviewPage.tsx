import React, { useState } from 'react'
import {
  ABC_BRAND_PRESETS,
  ABC_DENSITY_PRESETS,
  ABC_MOTION_PRESETS,
  ABC_RADIUS_PRESETS,
  ABC_SURFACE_PRESETS,
  Button,
  Card,
  CopyableText,
  Input,
  PageContainer,
  RadioGroup,
  SpotlightCard,
  StatusTag,
  useAbcConfig,
  type AbcBrandColor,
  type AbcDensity,
  type AbcFontScale,
  type AbcMotionPreset,
  type AbcRadius,
  type AbcSize,
  type AbcSurfaceProfile,
  type AbcThemeMode,
  type AbcVisualMode,
} from '@abc-design/react'
import { BarChart3, Compass, Cpu, FileCode2, Layers, LayoutGrid, Palette, RotateCcw, Sparkles } from 'lucide-react'

const PKG_CARDS = [
  { icon: Palette, pkg: '@abc-design/tokens', val: '3 层语义 Token', desc: '6 大品牌色 · 自定义 Hex · 3 档密度 · 4 档圆角与动效', target: '/overview' },
  { icon: Cpu, pkg: '@abc-design/core', val: '纯 TS 无头内核', desc: '零框架耦合：拼音首字母检索、树形级联与月历矩阵', target: '/form/tree-cascader' },
  { icon: Layers, pkg: '@abc-design/react', val: '65+ 企业组件', desc: '覆盖基础原语、导航、表单、反馈、ProTable 与 5 套布局', target: '/nav/buttons' },
  { icon: BarChart3, pkg: '@abc-design/charts', val: '自适应可视化', desc: 'ECharts Tree-shaking 容器，随主题色阶与明暗自动同步', target: '/charts/echarts' },
  { icon: FileCode2, pkg: '@abc-design/markdown', val: '双栏 Markdown', desc: '外部化编辑器依赖，支持光标插值与三态分屏预览', target: '/form/uploads-markdown' },
]

/** 9 大领域全量文档路由索引（对应 Playground 全部 30 个路由节点） */
const DOMAIN_INDEX_GROUPS = [
  {
    domain: '1. 基础原语 (Foundation)',
    badge: '4 页',
    routes: [
      { path: '/overview', title: 'Design Tokens 总览', symbols: ['AbcProvider', 'useAbcConfig', 'SpotlightCard'] },
      { path: '/foundation/typography', title: '排版代码与复制原语', symbols: ['CodeBlock', 'CopyableText', 'CopyableCode', 'CopyButton', 'Kbd', 'RichIconText'] },
      { path: '/foundation/icons-locale', title: '图标引擎、主题与多语言', symbols: ['Icon', 'SemanticIcon', 'BrandIcon', 'ThemeSwitcher', 'LocaleSwitcher', 'useColorScheme'] },
      { path: '/foundation/spacing-classes', title: '间距分隔与令牌样式类', symbols: ['Space', 'Divider', 'Separator', 'abcUiClasses'] },
    ],
  },
  {
    domain: '2. 通用导航 (Navigation)',
    badge: '3 页',
    routes: [
      { path: '/nav/buttons', title: '按钮与分段控制器', symbols: ['Button', 'buttonVariants', 'SegmentedControl'] },
      { path: '/nav/tabs-steps', title: '页签、步骤条与子导航', symbols: ['Tabs', 'Steps', 'Breadcrumb', 'HubNavBar'] },
      { path: '/nav/dropdown-command', title: '下拉菜单与全局命令面板', symbols: ['Dropdown', 'DropdownMenu', 'ProCommandPalette', 'CommandTriggerButton'] },
    ],
  },
  {
    domain: '3. 表单录入 (Form Inputs)',
    badge: '3 页',
    routes: [
      { path: '/form/inputs', title: '文本、数值、搜索与配额输入', symbols: ['Input', 'FormField', 'Label', 'InputNumber', 'Textarea', 'SearchInput', 'ByteQuotaInput', 'DurationQuotaInput'] },
      { path: '/form/controls', title: '开关、单复选与可选标签', symbols: ['Switch', 'Checkbox', 'RadioGroup', 'CheckableTag', 'CheckableTagGroup'] },
      { path: '/form/select', title: 'Select、字典与复合选择器', symbols: ['Select', 'SelectField', 'DictSelect', 'DictTag', 'RadixSelect'] },
    ],
  },
  {
    domain: '4. 树与上传 (Tree & Upload)',
    badge: '3 页',
    routes: [
      { path: '/form/tree-cascader', title: '树形控件、TreeSelect 与级联', symbols: ['Tree', 'TreeSelect', 'TreeSelectField', 'Cascader'] },
      { path: '/form/pickers-transfer', title: '日期区间、标签、图标与穿梭框', symbols: ['DatePicker', 'DateRangePicker', 'TagInput', 'IconPicker', 'Transfer'] },
      { path: '/form/uploads-markdown', title: '文件图片上传、验证码与 Markdown', symbols: ['ImageUpload', 'ProMultiImageUpload', 'FileUpload', 'SliderVerify', 'MarkdownEditor'] },
    ],
  },
  {
    domain: '5. 数据展示 (Data Display)',
    badge: '3 页',
    routes: [
      { path: '/display/badges-media', title: '状态标签、徽章、头像与灯箱', symbols: ['StatusTag', 'StatusBadge', 'Tag', 'Badge', 'IconBadge', 'Avatar', 'ImagePreview'] },
      { path: '/display/structured', title: '描述列表、手风琴与时间轴', symbols: ['DescriptionList', 'DescriptionItem', 'CopyableCode', 'Descriptions', 'Collapse', 'Timeline'] },
      { path: '/display/pagination-empty', title: '双模分页、空状态与骨架屏', symbols: ['Pagination', 'OffsetPagination', 'SmartPagination', 'CursorPagination', 'EmptyState', 'SkeletonTable'] },
    ],
  },
  {
    domain: '6. 卡片动效 (Surfaces & Motion)',
    badge: '2 页',
    routes: [
      { path: '/surfaces/base-cards', title: '基础容器卡、聚光灯与流光极光', symbols: ['Card', 'CardHeader', 'SpotlightCard', 'BorderBeam', 'AuroraBackground'] },
      { path: '/surfaces/pro-cards', title: '指标卡、选择卡、定价与便当网格', symbols: ['MetricCard', 'CheckCardGroup', 'ActionCard', 'CollapsibleCard', 'PricingCard', 'BentoGrid'] },
    ],
  },
  {
    domain: '7. 反馈审计 (Feedback & Audit)',
    badge: '4 页',
    routes: [
      { path: '/feedback/banners-errors', title: '通知横幅、错误恢复与结果页', symbols: ['Alert', 'NotificationBanner', 'ReadErrorBanner', 'AsyncInlineError', 'AttentionList', 'Result'] },
      { path: '/feedback/toast-progress', title: 'Toast 通知、加载态与进度条', symbols: ['abcToast', 'ToastCard', 'Loading', 'LoadingStateCard', 'abcProgress', 'Progress', 'ProgressBar'] },
      { path: '/feedback/overlays-audit', title: '抽屉、模态框、密钥与强制审计', symbols: ['Dialog', 'Drawer', 'Tooltip', 'Popover', 'ProFormContainer', 'ConfirmDialog', 'ReasonedActionDialog', 'OneTimeSecretDialog'] },
      { path: '/feedback/security-resilience', title: '数字水印、权限守卫与异常边界', symbols: ['Watermark', 'PermissionGuard', 'Permission', 'ErrorBoundary', 'TabErrorBoundary'] },
    ],
  },
  {
    domain: '8. 图表大盘 (Charts)',
    badge: '1 页',
    routes: [
      { path: '/charts/echarts', title: '自适应图表、指标卡与色盘', symbols: ['StatCard', 'AbcChart', 'SkeletonChart', 'getAbcChartPalette', 'buildAbcBaseChartOption'] },
    ],
  },
  {
    domain: '9. 壳层套件 (Layouts & Pro)',
    badge: '7 页',
    routes: [
      { path: '/layouts/shell', title: '5 模态布局、认证页与路由保活', symbols: ['ProLayout', 'AuthLayout', 'PageContainer', 'KeepAliveContainer', 'PageTransition'] },
      { path: '/pro/page-chrome', title: '页面页头、筛选栏与工作流引导', symbols: ['PageHeader', 'ProPageHeader', 'PageSection', 'FilterToolbar', 'QuickSelectBar', 'WorkflowStepBanner', 'ContextQuickBar'] },
      { path: '/pro/tables-split', title: '基础表格、DataTable 与主从检视', symbols: ['Table', 'TableCore', 'DataTable', 'SplitDetailPanel', 'SplitInspectorLayout', 'InspectorPanel'] },
      { path: '/pro/table', title: 'ProTable 全生命周期 CRUD', symbols: ['ProTable', 'useProTable', 'ProCrudForm', 'ReasonedActionDrawer'] },
      { path: '/pro/config', title: '分组表单排版与声明式配置页', symbols: ['ProFormLayout', 'ProConfigForm', 'ProConfigPage'] },
      { path: '/pro/logs', title: 'ProLogViewer 虚拟滚动日志', symbols: ['ProLogViewer'] },
      { path: '/templates', title: '5 套开箱企业业务页模板', symbols: ['Dashboard', 'CrudList', 'WizardForm', 'AuditDrawer', 'ExceptionResult'] },
    ],
  },
]

export const OverviewPage: React.FC<{ onJump: (path: string) => void }> = ({ onJump }) => {
  const {
    theme,
    resolvedTheme,
    setBrand,
    setCustomBrandColor,
    setThemeMode,
    setDensity,
    setRadius,
    setSurface,
    setFontScale,
    setVisualMode,
    setComponentSize,
    setMotion,
    resetTheme,
  } = useAbcConfig()

  const [hexDraft, setHexDraft] = useState(theme.customBrandColor ?? '#0ea5e9')
  const activeScale = ABC_BRAND_PRESETS[theme.brand].scale

  const tokenMatrix = [
    {
      label: '明暗外观 (mode)',
      value: theme.mode,
      onChange: (v: string | number) => setThemeMode(v as AbcThemeMode),
      options: [{ value: 'light', label: '亮色' }, { value: 'dark', label: '暗色' }, { value: 'system', label: '系统' }],
    },
    {
      label: '信息密度 (density)',
      value: theme.density,
      onChange: (v: string | number) => setDensity(v as AbcDensity),
      options: (Object.keys(ABC_DENSITY_PRESETS) as AbcDensity[]).map((d) => ({ value: d, label: ABC_DENSITY_PRESETS[d].label.split(' ')[0] })),
    },
    {
      label: '圆角档位 (radius)',
      value: theme.radius,
      onChange: (v: string | number) => setRadius(v as AbcRadius),
      options: (Object.keys(ABC_RADIUS_PRESETS) as AbcRadius[]).map((r) => ({ value: r, label: ABC_RADIUS_PRESETS[r].label.split(' ')[0] })),
    },
    {
      label: '表面质感 (surface)',
      value: theme.surface ?? 'enterprise',
      onChange: (v: string | number) => setSurface(v as AbcSurfaceProfile),
      options: (Object.keys(ABC_SURFACE_PRESETS) as AbcSurfaceProfile[]).map((s) => ({ value: s, label: ABC_SURFACE_PRESETS[s].label.split(' ')[0] })),
    },
    {
      label: '全局字号 (fontScale)',
      value: theme.fontScale ?? 'md',
      onChange: (v: string | number) => setFontScale(v as AbcFontScale),
      options: [{ value: 'sm', label: '94% 紧凑' }, { value: 'md', label: '100% 标准' }, { value: 'lg', label: '106% 舒适' }],
    },
    {
      label: '视觉辅助 (visualMode)',
      value: theme.visualMode ?? 'default',
      onChange: (v: string | number) => setVisualMode(v as AbcVisualMode),
      options: [{ value: 'default', label: '原色' }, { value: 'color-weak', label: '色弱' }, { value: 'gray', label: '灰阶' }],
    },
    {
      label: '全局尺寸 (componentSize)',
      value: theme.componentSize ?? 'auto',
      onChange: (v: string | number) => setComponentSize(v === 'auto' ? undefined : (v as AbcSize)),
      options: [{ value: 'auto', label: '自动' }, { value: 'xs', label: 'xs' }, { value: 'sm', label: 'sm' }, { value: 'md', label: 'md' }, { value: 'lg', label: 'lg' }],
    },
    {
      label: '微交互动效 (motion)',
      value: theme.motion ?? 'smooth',
      onChange: (v: string | number) => setMotion(v as AbcMotionPreset),
      options: (Object.keys(ABC_MOTION_PRESETS) as AbcMotionPreset[]).map((m) => ({ value: m, label: ABC_MOTION_PRESETS[m].label.slice(0, 2) })),
    },
  ]

  return (
    <PageContainer
      title="ABC Design 企业级设计系统与官方预览站"
      subtitle="5 包协同架构（Tokens + Headless Core + React UI/ProLayout + Charts + Markdown）· 全量交互文档矩阵"
      tags={
        <StatusTag tone="primary" dot pulse>
          v0.1.0 Public Release Ready
        </StatusTag>
      }
      extra={
        <>
          <Button variant="secondary" onClick={() => onJump('/foundation/typography')}>
            基础原语文档
          </Button>
          <Button variant="secondary" onClick={() => onJump('/nav/buttons')}>
            通用导航文档
          </Button>
          <Button variant="primary" onClick={() => onJump('/pro/table')}>
            ProTable 全栈套件
          </Button>
        </>
      }
      headerContent={
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {PKG_CARDS.map((item) => {
            const IconComp = item.icon
            return (
              <SpotlightCard
                key={item.pkg}
                onClick={() => onJump(item.target)}
                className="cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold text-[var(--abc-primary)]">{item.pkg}</span>
                  <IconComp className="h-4 w-4 text-[var(--abc-primary)]" />
                </div>
                <div className="mt-2 text-base font-bold text-[var(--abc-fg)]">{item.val}</div>
                <p className="mt-1 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]">{item.desc}</p>
              </SpotlightCard>
            )
          })}
        </div>
      }
    >
      <div className="space-y-5">
        {/* Design Tokens 全维度实时控制矩阵 */}
        <Card
          title="Design Tokens 全维度实时控制矩阵"
          subtitle={`当前生效明暗态: ${resolvedTheme} · 动态覆写 --abc-* CSS 变量实现零重绘全站同步`}
          extra={
            <Button size="xs" variant="ghost" leftIcon={<RotateCcw className="h-3 w-3" />} onClick={resetTheme}>
              恢复默认令牌
            </Button>
          }
        >
          <div className="space-y-4">
            {/* 1. 品牌色与自定义 Hex */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {(Object.keys(ABC_BRAND_PRESETS) as AbcBrandColor[]).map((key) => {
                  const preset = ABC_BRAND_PRESETS[key]
                  const selected = !theme.customBrandColor && theme.brand === key
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setBrand(key)}
                      className={`inline-flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                        selected
                          ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                          : 'border-[var(--abc-border)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]'
                      }`}
                    >
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: preset.swatch }} />
                      <span>{preset.label}</span>
                    </button>
                  )
                })}
              </div>

              <div className="flex items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-2.5 py-1">
                <span className="text-[11px] font-medium text-[var(--abc-fg-secondary)]">自定义 Hex:</span>
                <input
                  type="color"
                  aria-label="拾取自定义品牌色"
                  value={theme.customBrandColor || hexDraft}
                  onChange={(e) => {
                    setHexDraft(e.target.value)
                    setCustomBrandColor(e.target.value)
                  }}
                  className="h-5 w-6 cursor-pointer border-0 bg-transparent p-0"
                />
                <div className="w-24">
                  <Input
                    size="xs"
                    value={theme.customBrandColor ?? hexDraft}
                    onChange={(e) => {
                      const val = e.target.value
                      setHexDraft(val)
                      if (/^#[0-9a-fA-F]{6}$/.test(val)) setCustomBrandColor(val)
                    }}
                    placeholder="#0ea5e9"
                  />
                </div>
                {theme.customBrandColor && (
                  <Button size="xs" variant="ghost" onClick={() => setCustomBrandColor(undefined)}>
                    清除
                  </Button>
                )}
              </div>
            </div>

            {/* 2. 50-950 语义色阶实时取色条 */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-6 lg:grid-cols-11">
              {Object.entries(activeScale).map(([shade, hex]) => (
                <div key={shade} className="flex flex-col overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)]">
                  <div className="h-9 w-full" style={{ backgroundColor: theme.customBrandColor ? `var(--abc-brand-${shade})` : hex }} />
                  <div className="bg-[var(--abc-bg-surface)] p-1.5 text-center">
                    <div className="font-mono text-[10px] font-semibold text-[var(--abc-fg)]">--abc-brand-{shade}</div>
                    <CopyableText text={theme.customBrandColor ? `var(--abc-brand-${shade})` : hex} displayText={theme.customBrandColor && shade === '600' ? theme.customBrandColor : hex} className="justify-center text-[10px]" />
                  </div>
                </div>
              ))}
            </div>

            {/* 3. 多维 Token 参数控制矩阵 */}
            <div className="grid grid-cols-1 gap-3.5 border-t border-[var(--abc-border)] pt-4 md:grid-cols-2 xl:grid-cols-4 text-xs">
              {tokenMatrix.map((ctrl) => (
                <div key={ctrl.label} className="space-y-1.5">
                  <div className="font-medium text-[var(--abc-fg-secondary)]">{ctrl.label}</div>
                  <RadioGroup variant="segmented" size="xs" value={ctrl.value} onChange={ctrl.onChange} options={ctrl.options} />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* 9 大领域 × 27 个文档页全景索引 */}
        <Card
          title="9 大领域 × 27 个文档页全景索引"
          subtitle="点击任意模块卡片即可直达对应交互式组件文档（共覆盖 9 大业务领域与全量路由节点）"
          extra={<Compass className="h-4 w-4 text-[var(--abc-primary)]" />}
        >
          <div className="space-y-5">
            {DOMAIN_INDEX_GROUPS.map((group) => (
              <div key={group.domain} className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-[var(--abc-border)] pb-1.5">
                  <span className="text-xs font-bold text-[var(--abc-fg)]">{group.domain}</span>
                  <StatusTag tone="neutral" size="xs" dot={false}>
                    {group.badge}
                  </StatusTag>
                </div>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.routes.map((route) => (
                    <button
                      key={route.path}
                      type="button"
                      onClick={() => onJump(route.path)}
                      className="group flex flex-col justify-between rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/50 p-3 text-left transition-all hover:border-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)]/30 cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]">
                            {route.title}
                          </span>
                          <span className="font-mono text-[10px] text-[var(--abc-fg-muted)]">→</span>
                        </div>
                        <div className="mt-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]">{route.path}</div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {route.symbols.map((sym) => (
                          <code
                            key={sym}
                            className="rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono text-[10px] text-[var(--abc-fg-secondary)]"
                          >
                            {sym}
                          </code>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* 快速接入指南与 AI Agent 体系 */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card title="新项目 30 秒快速接入指南" extra={<LayoutGrid className="h-4 w-4 text-[var(--abc-primary)]" />}>
            <div className="space-y-2 text-xs text-[var(--abc-fg-secondary)]">
              <p>
                <strong>方式 A（标准 React 工程）</strong>：直接引入{' '}
                <code className="rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono">import &apos;@abc-design/react/styles.css&apos;</code>{' '}
                并在根节点包裹 <code className="font-mono">AbcProvider</code>。
              </p>
              <p>
                <strong>方式 B（Tailwind CSS v4 工程）</strong>：引入{' '}
                <code className="rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono">@import &quot;@abc-design/tokens/styles/index.css&quot;;</code>{' '}
                并配置 <code className="font-mono">@source</code> 合并原子类。
              </p>
            </div>
          </Card>

          <Card title="AI Agent 原生友好体系 (Agent-Ready)" extra={<Sparkles className="h-4 w-4 text-[var(--abc-primary)]" />}>
            <p className="text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
              仓库内置 <code className="font-mono font-semibold">AGENTS.md</code>、全量上下文{' '}
              <code className="font-mono font-semibold">llms-full.txt</code>、分层文档{' '}
              <code className="font-mono font-semibold">docs/agent/*</code> 与技能包{' '}
              <code className="font-mono font-semibold">skills/abc-design/SKILL.md</code>，确保编码 Agent 零幻觉精准对接。
            </p>
          </Card>
        </div>
      </div>
    </PageContainer>
  )
}
export default OverviewPage
