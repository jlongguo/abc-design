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
import { BarChart3, Cpu, Layers, LayoutGrid, Palette, Sparkles } from 'lucide-react'

export const OverviewPage: React.FC<{
  onJump: (path: string) => void
}> = ({ onJump }) => {
  const { theme, setBrand, setDensity, setRadius } = useAbcConfig()
  const activeScale = ABC_BRAND_PRESETS[theme.brand].scale

  return (
    <PageContainer
      title="ABC Design 企业级设计系统与官方预览站"
      subtitle="4 包协同架构（Tokens + Headless Core + React UI/ProLayout + Charts）· 45+ 生产级组件 · AI Agent 零幻觉对接规范"
      tags={
        <StatusTag tone="primary" dot pulse>
          v0.1.0 Public Release Ready
        </StatusTag>
      }
      extra={
        <>
          <Button variant="secondary" onClick={() => onJump('/templates')}>
            浏览 5 套开箱页面模板
          </Button>
          <Button variant="primary" onClick={() => onJump('/docs/form')}>
            进入交互式组件文档
          </Button>
        </>
      }
      headerContent={
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
              val: '45+ 组件 + 5 布局',
              desc: 'Adapter 注入上传/字典/权限/验证码/Toast，ProLayout + ProTable 全栈覆盖',
              target: '/docs/display',
            },
            {
              icon: <BarChart3 className="h-4 w-4 text-[var(--abc-primary)]" />,
              pkg: '@abc-design/charts',
              val: '自适应可视化套件',
              desc: 'ECharts 按需 Tree-shaking 容器与 StatCard，自动跟随明暗主题与品牌色阶',
              target: '/docs/charts',
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
      </div>
    </PageContainer>
  )
}
