import React from 'react'
import {
  ABC_BRAND_PRESETS,
  ABC_DENSITY_PRESETS,
  ABC_RADIUS_PRESETS,
  Button,
  Card,
  CopyableText,
  PageContainer,
  RadioGroup,
  SpotlightCard,
  StatusTag,
  useAbcConfig,
  type AbcBrandColor,
  type AbcDensity,
  type AbcRadius,
} from '@abc-design/react'
import { BarChart3, Cpu, FileCode2, Layers, LayoutGrid, Palette, Sparkles } from 'lucide-react'

export const OverviewPage: React.FC<{
  onJump: (path: string) => void
}> = ({ onJump }) => {
  const { theme, setBrand, setDensity, setRadius } = useAbcConfig()
  const activeScale = ABC_BRAND_PRESETS[theme.brand].scale

  return (
    <PageContainer
      title="ABC Design 企业级设计系统与官方预览站"
      subtitle="5 包协同架构（Tokens + Headless Core + React UI/ProLayout + Charts + Markdown）· 65+ 生产级组件 · 大小表单分流规范 · Pro 全栈套件"
      tags={
        <StatusTag tone="primary" dot pulse>
          v0.1.0 Public Release Ready
        </StatusTag>
      }
      extra={
        <>
          <Button variant="secondary" onClick={() => onJump('/docs/markdown-shell')}>
            预览最新 Markdown 与壳层组件
          </Button>
          <Button variant="primary" onClick={() => onJump('/docs/form')}>
            进入交互式组件文档
          </Button>
        </>
      }
      headerContent={
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {[
            {
              icon: <Palette className="h-4 w-4 text-[var(--abc-primary)]" />,
              pkg: '@abc-design/tokens',
              val: '3 层语义 Token',
              desc: '6 大品牌色 · 3 档密度 · 4 档圆角 · View Transition 明暗切换',
              target: '/overview',
            },
            {
              icon: <Cpu className="h-4 w-4 text-[var(--abc-primary)]" />,
              pkg: '@abc-design/core',
              val: '纯 TS 无头内核',
              desc: '零框架耦合：拼音首字母检索、树形半选级联、URL Query 双向同步、月历矩阵',
              target: '/docs/form',
            },
            {
              icon: <Layers className="h-4 w-4 text-[var(--abc-primary)]" />,
              pkg: '@abc-design/react',
              val: '65+ 组件 + 5 布局',
              desc: 'ProTable API 引擎、BrandIcon、TabErrorBoundary、KeepAlive 滚动记忆、TopProgressBar、abcUiClasses',
              target: '/docs/display',
            },
            {
              icon: <BarChart3 className="h-4 w-4 text-[var(--abc-primary)]" />,
              pkg: '@abc-design/charts',
              val: '自适应可视化套件',
              desc: 'ECharts 按需 Tree-shaking 容器与 StatCard，自动跟随明暗主题与品牌色阶',
              target: '/docs/charts',
            },
            {
              icon: <FileCode2 className="h-4 w-4 text-[var(--abc-primary)]" />,
              pkg: '@abc-design/markdown',
              val: '双栏 Markdown 子包',
              desc: '外部化编辑器依赖零体积膨胀，自动同步 AbcProvider 主题并支持 insertText 光标插值',
              target: '/docs/markdown-shell',
            },
          ].map((item) => (
            <SpotlightCard
              key={item.pkg}
              onClick={() => onJump(item.target)}
              className="cursor-pointer transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold text-[var(--abc-primary)]">
                  {item.pkg}
                </span>
                {item.icon}
              </div>
              <div className="mt-2 text-base font-bold text-[var(--abc-fg)]">{item.val}</div>
              <p className="mt-1 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]">
                {item.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      }
    >
      <div className="space-y-4">
        <Card
          title="实时品牌色阶与语义化 Token 演练台"
          subtitle="点击切换品牌主色、控件密度或圆角档位，全站所有控件、ECharts 图表与布局壳层将通过 CSS 自定义属性零重绘同步"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {(Object.keys(ABC_BRAND_PRESETS) as AbcBrandColor[]).map((key) => {
                const preset = ABC_BRAND_PRESETS[key]
                const selected = theme.brand === key
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
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: preset.swatch }}
                    />
                    <span>{preset.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-6 lg:grid-cols-11">
              {Object.entries(activeScale).map(([shade, hex]) => (
                <div
                  key={shade}
                  className="flex flex-col overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)]"
                >
                  <div className="h-11 w-full" style={{ backgroundColor: hex }} />
                  <div className="bg-[var(--abc-bg-surface)] p-1.5 text-center">
                    <div className="font-mono text-[10px] font-semibold text-[var(--abc-fg)]">
                      --abc-brand-{shade}
                    </div>
                    <CopyableText text={hex} className="justify-center text-[10px]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-[var(--abc-border)] pt-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">
                  全局信息密度档位 (data-abc-density)
                </div>
                <RadioGroup
                  variant="segmented"
                  value={theme.density}
                  onChange={(v) => setDensity(v as AbcDensity)}
                  options={(Object.keys(ABC_DENSITY_PRESETS) as AbcDensity[]).map((d) => ({
                    value: d,
                    label: ABC_DENSITY_PRESETS[d].label,
                  }))}
                />
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">
                  全局圆角风格档位 (data-abc-radius)
                </div>
                <RadioGroup
                  variant="segmented"
                  value={theme.radius}
                  onChange={(v) => setRadius(v as AbcRadius)}
                  options={(Object.keys(ABC_RADIUS_PRESETS) as AbcRadius[]).map((r) => ({
                    value: r,
                    label: ABC_RADIUS_PRESETS[r].label,
                  }))}
                />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card
            title="新项目 30 秒快速接入指南"
            extra={<LayoutGrid className="h-4 w-4 text-[var(--abc-primary)]" />}
          >
            <div className="space-y-2.5 text-xs text-[var(--abc-fg-secondary)]">
              <p>
                <strong>方式 A（未配置 Tailwind v4 的普通 React 项目）</strong>：直接引入预构建样式包{' '}
                <code className="rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono">
                  import &apos;@abc-design/react/styles.css&apos;
                </code>
                ，开箱即用。
              </p>
              <p>
                <strong>方式 B（Tailwind CSS v4 工程）</strong>：在主样式表引入{' '}
                <code className="rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono">
                  @import &quot;@abc-design/tokens/styles/index.css&quot;;
                </code>{' '}
                并配置 <code className="font-mono">@source</code>，实现原子类极致去重合并。
              </p>
            </div>
          </Card>

          <Card
            title="AI Agent 原生友好体系 (Agent-Ready)"
            extra={<Sparkles className="h-4 w-4 text-[var(--abc-primary)]" />}
          >
            <div className="space-y-2 text-xs text-[var(--abc-fg-secondary)]">
              <p>
                仓库根目录内置 <code className="font-mono font-semibold">AGENTS.md</code>、单文件全量上下文{' '}
                <code className="font-mono font-semibold">llms-full.txt</code>、分层文档{' '}
                <code className="font-mono font-semibold">docs/agent/*</code> 与可挂载技能包{' '}
                <code className="font-mono font-semibold">skills/abc-design/SKILL.md</code>，让任意编码 Agent 零幻觉对接。
              </p>
            </div>
          </Card>
        </div>

        {/* 最近几轮组件库演进亮点 */}
        <Card
          title="最新架构演进与设计规范特性 (Recent Enhancements)"
          subtitle="已在组件库与 Playground 全面落地，规范驱动开发与高质量企业级交互"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs">
            <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3.5 space-y-1.5">
              <div className="font-semibold text-[var(--abc-fg)]">大小表单分流规范</div>
              <p className="text-[var(--abc-fg-muted)] leading-relaxed">
                复杂大表单必须使用右侧全高抽屉 (Drawer)；大表单嵌套大表单使用二级抽屉 (adjacent 并排比对或 stack 层叠)；小表单与轻量确认使用 Dialog。
              </p>
            </div>

            <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3.5 space-y-1.5">
              <div className="font-semibold text-[var(--abc-fg)]">强制审计与凭据安全</div>
              <p className="text-[var(--abc-fg-muted)] leading-relaxed">
                ReasonedActionDialog / Drawer 强制操作原因审计留痕；OneTimeSecretDialog 提供 API Key 一次性展示、脱敏与安全复制下载。
              </p>
            </div>

            <div
              onClick={() => onJump('/docs/markdown-shell')}
              className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3.5 space-y-1.5 cursor-pointer transition-colors hover:border-[var(--abc-primary)]"
            >
              <div className="flex items-center justify-between font-semibold text-[var(--abc-fg)]">
                <span>@abc-design/markdown 与壳层基建</span>
                <StatusTag tone="primary" size="xs">
                  New →
                </StatusTag>
              </div>
              <p className="text-[var(--abc-fg-muted)] leading-relaxed">
                独立 MarkdownEditor 子包、多租户 BrandIcon（Image 降级 + SVG Mask 主题着色）、单页签崩溃隔离 TabErrorBoundary、KeepAlive 实时滚动记忆、TopProgressBar 与 abcUiClasses。
              </p>
            </div>

            <div
              onClick={() => onJump('/pro/table')}
              className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3.5 space-y-1.5 cursor-pointer transition-colors hover:border-[var(--abc-primary)]"
            >
              <div className="flex items-center justify-between font-semibold text-[var(--abc-fg)]">
                <span>ProTable 1:1 全生命周期 CRUD</span>
                <StatusTag tone="info" size="xs">
                  Updated →
                </StatusTag>
              </div>
              <p className="text-[var(--abc-fg-muted)] leading-relaxed">
                支持 api 异步 CRUD 驱动、列内 search/form 一体化派生、表头内联筛选与 8 色筛选高亮调色盘、Switch 字符串状态值及右键表头菜单。
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  )
}
