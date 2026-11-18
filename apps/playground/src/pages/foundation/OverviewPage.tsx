import React, { useState } from 'react'
import {
  ABC_BRAND_PRESETS,
  ABC_DENSITY_PRESETS,
  ABC_MOTION_PRESETS,
  ABC_RADIUS_PRESETS,
  ABC_SURFACE_PRESETS,
  Button,
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
import { BarChart3, Cpu, FileCode2, Layers, Palette } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { TOTAL_REGISTERED_SYMBOLS } from '../../registry'
import { OverviewComponentExplorer } from './OverviewComponentExplorer'

const PKG_CARDS = [
  { icon: Palette, pkg: '@abc-design/tokens', val: '3 层语义 Token', desc: '6 大品牌色 · 自定义 Hex · 3 档密度 · 4 档圆角与动效', target: '/overview' },
  { icon: Cpu, pkg: '@abc-design/core', val: '纯 TS 无头内核', desc: '拼音检索、树级联、规则 AST、JSON 树搜索、标签分词与 Diff', target: '/linkage/query-builder' },
  { icon: Layers, pkg: '@abc-design/react', val: `${TOTAL_REGISTERED_SYMBOLS} 导出组件符号`, desc: '基础原语、5 模态壳层、ProTable 与 8 大复杂联动套件', target: '/pro/table' },
  { icon: BarChart3, pkg: '@abc-design/charts', val: '自适应可视化', desc: 'ECharts Tree-shaking 容器，随主题色阶与明暗自动同步', target: '/charts/echarts' },
  { icon: FileCode2, pkg: '@abc-design/markdown', val: '双栏 Markdown', desc: '外部化编辑器依赖，支持光标插值与三态分屏预览', target: '/form/uploads-markdown' },
]

export const OverviewPage: React.FC<{
  onJump: (path: string) => void
  onJumpToComponent: (routePath: string, anchorId: string, symbol: string) => void
}> = ({ onJump, onJumpToComponent }) => {
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
      title="ABC Design 企业级设计系统与官方组件预览中心"
      subtitle="5 包协同架构 · 7 大清晰业务分类 · 页内支持「分段全览 + 大纲目录」与「单卡独立聚焦」双视图切换 · ⌘K 全组件搜索直达"
      tags={
        <StatusTag tone="primary" dot pulse>
          Playground 100% Sync Enforced
        </StatusTag>
      }
      extra={
        <>
          <Button variant="secondary" onClick={() => onJump('/display/structured')}>
            查看 JsonTreeViewer
          </Button>
          <Button variant="secondary" onClick={() => onJump('/linkage/editable-table')}>
            查看拖拽分栏卡片
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
      <div className="space-y-6">
        {/* AbcProvider & Design Tokens 实时控制矩阵 */}
        <ComponentDocPreview
          title="AbcProvider 全局适配器容器 & Design Tokens 实时控制矩阵"
          components={['AbcProvider']}
          description={`当前生效明暗态: ${resolvedTheme} · AbcProvider 在根部一次性注入主题令牌、上传/字典/权限/验证码 Adapter 与全局水印，动态覆写 --abc-* CSS 变量实现零重绘全站联动。`}
          onResetKnobs={resetTheme}
          code={`import { AbcProvider } from '@abc-design/react'

<AbcProvider
  defaultTheme={{
    mode: '${theme.mode}',
    brand: '${theme.brand}',
    density: '${theme.density}',
    radius: '${theme.radius}',
    motion: '${theme.motion ?? 'smooth'}',
  }}
  defaultDrawerCascadeMode="adjacent"
  dictAdapter={fetchDictOptions}
  permissionAdapter={hasPermission}
  uploadAdapter={uploadFile}
>
  <App />
</AbcProvider>`}
          apiRows={[
            { prop: 'defaultTheme', type: 'Partial<AbcThemeState>', description: '配置初始 mode / brand / customBrandColor / density / radius / motion / componentSize' },
            { prop: 'defaultDrawerCascadeMode', type: "'adjacent' | 'stack'", defaultValue: "'adjacent'", description: '多级大表单抽屉默认展开交互策略' },
            { prop: 'dictAdapter / permissionAdapter / uploadAdapter', type: 'Adapter Functions', description: '与宿主 HTTP/RBAC 解耦的依赖注入适配器' },
          ]}
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
                  <div className="h-8 w-full" style={{ backgroundColor: theme.customBrandColor ? `var(--abc-brand-${shade})` : hex }} />
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
        </ComponentDocPreview>

        {/* 全量可检索组件与分类导航矩阵 */}
        <OverviewComponentExplorer onJump={onJump} onJumpToComponent={onJumpToComponent} />
      </div>
    </PageContainer>
  )
}

export default OverviewPage
