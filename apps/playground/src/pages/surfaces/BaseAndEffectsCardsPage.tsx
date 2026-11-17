import React, { useState } from 'react'
import {
  AuroraBackground,
  BorderBeam,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  PageContainer,
  SpotlightCard,
  StatusTag,
  type AbcMotionPreset,
  type AbcSize,
  type CardVariant,
} from '@abc-design/react'
import { Server, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

const VARIANT_OPTIONS: { label: CardVariant; value: CardVariant }[] = [
  { label: 'default', value: 'default' },
  { label: 'bordered', value: 'bordered' },
  { label: 'ghost', value: 'ghost' },
  { label: 'elevated', value: 'elevated' },
  { label: 'glass', value: 'glass' },
]

const SIZE_OPTIONS: { label: AbcSize; value: AbcSize }[] = [
  { label: 'xs', value: 'xs' },
  { label: 'sm', value: 'sm' },
  { label: 'md', value: 'md' },
  { label: 'lg', value: 'lg' },
]

const MOTION_OPTIONS: { label: AbcMotionPreset; value: AbcMotionPreset }[] = [
  { label: 'none', value: 'none' },
  { label: 'subtle', value: 'subtle' },
  { label: 'smooth', value: 'smooth' },
  { label: 'spring', value: 'spring' },
]

const EFFECT_MOTION_OPTIONS: { label: string; value: 'smooth' | 'none' }[] = [
  { label: 'smooth', value: 'smooth' },
  { label: 'none (静态降级)', value: 'none' },
]

/**
 * 基础容器卡、聚光灯与流光极光文档页
 */
export const BaseAndEffectsCardsPage: React.FC = () => {
  // 卡片 1：Card & 复合子组件
  const [variant, setVariant] = useState<CardVariant>('default')
  const [size, setSize] = useState<AbcSize>('md')
  const [motion, setMotion] = useState<AbcMotionPreset>('smooth')
  const [hoverable, setHoverable] = useState(true)
  const [loading, setLoading] = useState(false)
  const [withCover, setWithCover] = useState(true)
  const [withRibbon, setWithRibbon] = useState(true)

  // 卡片 2：SpotlightCard / BorderBeam / AuroraBackground
  const [spotSize, setSpotSize] = useState<AbcSize>('md')
  const [spotHoverable, setSpotHoverable] = useState(true)
  const [beamDuration, setBeamDuration] = useState(8)
  const [effectMotion, setEffectMotion] = useState<'smooth' | 'none'>('smooth')

  return (
    <PageContainer
      title="基础容器卡、聚光灯与流光极光"
      subtitle="展示 Card 五种表面材质与复合子组件拼装规范，以及高性能合成器层鼠标追踪光斑 SpotlightCard、流光边框 BorderBeam 与极光背景 AuroraBackground。"
      breadcrumbs={[{ label: '卡片与动效' }, { label: '基础容器卡、聚光灯与流光极光' }]}
    >
      <div className="space-y-5">
        {/* 卡片 1：Card 及复合子组件 */}
        <ComponentDocPreview
          title="Card & 复合子组件 (CardHeader / CardTitle / CardDescription / CardContent / CardFooter)"
          description="支持属性式声明（cover / statusRibbon / loading / footer）与语义化复合插槽并存，内置 @container 容器查询上下文与五种视觉表面材质。"
          components={['Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter']}
          onResetKnobs={() => {
            setVariant('default')
            setSize('md')
            setMotion('smooth')
            setHoverable(true)
            setLoading(false)
            setWithCover(true)
            setWithRibbon(true)
          }}
          controls={
            <>
              <KnobSegmented label="variant" value={variant} options={VARIANT_OPTIONS} onChange={setVariant} />
              <KnobSegmented label="size" value={size} options={SIZE_OPTIONS} onChange={setSize} />
              <KnobSegmented label="motion" value={motion} options={MOTION_OPTIONS} onChange={setMotion} />
              <KnobSwitch label="hoverable" checked={hoverable} onChange={setHoverable} />
              <KnobSwitch label="loading" checked={loading} onChange={setLoading} />
              <KnobSwitch label="withCover" checked={withCover} onChange={setWithCover} />
              <KnobSwitch label="withRibbon" checked={withRibbon} onChange={setWithRibbon} />
            </>
          }
          code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@abc-design/react'

// 1. 属性式配置 Card
<Card
  as="article"
  variant="${variant}"
  size="${size}"
  motion="${motion}"
  hoverable={${hoverable}}
  loading={${loading}}${withRibbon ? "\n  statusRibbon={{ text: 'SLA 99.99%', tone: 'primary' }}" : ''}${withCover ? '\n  cover={<div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600" />}' : ''}
  title="边缘计算调度节点"
  subtitle="CN-South 高可用专区"
>
  支持零停机滚动升级与租户级配额隔离。
</Card>

// 2. 复合子组件写法
<Card variant="${variant}" padding="none" motion="${motion}" hoverable={${hoverable}}>
  <CardHeader>
    <CardTitle>微服务网格拓扑治理</CardTitle>
    <CardDescription>自动同步路由规则与注册中心健康状态</CardDescription>
  </CardHeader>
  <CardContent className="pt-4">健康度评分: 99.8%</CardContent>
  <CardFooter className="justify-between pt-4">
    <span>协议: gRPC TLS</span>
    <Button size="xs" variant="outline">管理网格</Button>
  </CardFooter>
</Card>`}
          apiRows={[
            { prop: 'variant', type: "'default' | 'bordered' | 'ghost' | 'elevated' | 'glass'", defaultValue: "'default'", description: '五种容器表面材质与边框阴影质感' },
            { prop: 'size / padding', type: "AbcSize / 'none' | AbcSize", defaultValue: "'md' / size", description: '控制卡片头部、内容与底部的四档密度（复合模式建议 padding="none"）' },
            { prop: 'motion / hoverable', type: 'AbcMotionPreset / boolean', defaultValue: '全局 / false', description: '动效曲线覆写与悬停边框抬升响应' },
            { prop: 'loading', type: 'boolean', defaultValue: 'false', description: '自动在内容区渲染防 CLS 骨架占位线' },
            { prop: 'cover / statusRibbon', type: 'ReactNode / { text: string; tone?: StatusTone }', description: '顶部 16:9 封面槽与右上角丝带徽标' },
            { prop: 'CardHeader / CardTitle / CardDescription / CardContent / CardFooter', type: '复合插槽', description: '可自由编排多栏文本与吸底操作条的结构化子组件' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* 左侧：属性式 Card */}
            <Card
              as="article"
              variant={variant}
              size={size}
              motion={motion}
              hoverable={hoverable}
              loading={loading}
              statusRibbon={withRibbon ? { text: 'SLA 99.99%', tone: 'primary' } : undefined}
              cover={
                withCover ? (
                  <div className="flex h-full items-center justify-between bg-gradient-to-r from-blue-600/90 via-indigo-600/85 to-violet-600/90 px-5 text-white">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider opacity-80">Edge Mesh</div>
                      <div className="text-sm font-semibold">实时流式路由网关</div>
                    </div>
                    <Server className="h-7 w-7 opacity-85" />
                  </div>
                ) : undefined
              }
              title="边缘计算调度节点"
              subtitle="CN-South 深圳高性能可用区"
              extra={<Button size="xs" variant="ghost">控制台</Button>}
              footer={
                <div className="flex items-center justify-between text-xs text-[var(--abc-fg-muted)]">
                  <span>属性式声明 Card · variant={variant}</span>
                  <StatusTag tone="success" size="xs" dot={false}>已纳管</StatusTag>
                </div>
              }
            >
              <p className="text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
                支持零停机滚动升级与租户级配额隔离，内置连接池健康探针与自动熔断切换。
              </p>
            </Card>

            {/* 右侧：复合子组件写法 */}
            <Card
              variant={variant}
              padding="none"
              motion={motion}
              hoverable={hoverable}
              loading={loading}
              className="flex flex-col justify-between"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle>微服务网格拓扑治理</CardTitle>
                  <StatusTag tone="info" size="xs">复合子组件</StatusTag>
                </div>
                <CardDescription>
                  通过 CardHeader / CardTitle / CardDescription / CardContent / CardFooter 精细编排每个插槽
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5 pt-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--abc-fg-secondary)]">集群健康度评分</span>
                  <span className="font-mono font-semibold text-[var(--abc-success)]">99.8% (Tier-0)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--abc-fg-secondary)]">跨机房 RTT 延迟</span>
                  <span className="font-mono text-[var(--abc-fg)]">0.82 ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--abc-fg-secondary)]">双向 mTLS 状态</span>
                  <span className="inline-flex items-center gap-1 text-[var(--abc-primary)]">
                    <ShieldCheck className="h-3.5 w-3.5" /> 强制启用
                  </span>
                </div>
              </CardContent>
              <CardFooter className="justify-between pt-4">
                <span className="text-[11px] text-[var(--abc-fg-muted)]">同步协议: gRPC TLS</span>
                <Button size="xs" variant="outline">
                  管理网格
                </Button>
              </CardFooter>
            </Card>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2：SpotlightCard / BorderBeam / AuroraBackground */}
        <ComponentDocPreview
          title="SpotlightCard / BorderBeam / AuroraBackground 聚光灯与流光极光装饰层"
          description="SpotlightCard 随鼠标指针渲染径向高光；BorderBeam 利用 CSS offset-path 绘制绕边流光；AuroraBackground 提供弥散极光氛围，当 motion='none' 时全部自动降级为静止无障碍态。"
          components={['SpotlightCard', 'BorderBeam', 'AuroraBackground']}
          onResetKnobs={() => {
            setSpotSize('md')
            setSpotHoverable(true)
            setBeamDuration(8)
            setEffectMotion('smooth')
          }}
          controls={
            <>
              <KnobSegmented label="SpotlightCard.size" value={spotSize} options={SIZE_OPTIONS} onChange={setSpotSize} />
              <KnobSwitch label="hoverable" checked={spotHoverable} onChange={setSpotHoverable} />
              <KnobNumber label="BorderBeam.duration(s)" value={beamDuration} onChange={setBeamDuration} min={2} max={18} />
              <KnobSegmented label="motion" value={effectMotion} options={EFFECT_MOTION_OPTIONS} onChange={setEffectMotion} />
            </>
          }
          code={`import { SpotlightCard, BorderBeam, AuroraBackground, Button } from '@abc-design/react'

<SpotlightCard size="${spotSize}" hoverable={${spotHoverable}} motion="${effectMotion}">
  <h4>鼠标移动触发聚光灯追踪</h4>
</SpotlightCard>

<div className="relative overflow-hidden rounded-2xl border p-6">
  <AuroraBackground motion="${effectMotion}" />
  <BorderBeam duration={${beamDuration}} motion="${effectMotion}" />
  <div className="relative z-10">极光背景 + 流光绕边内容</div>
</div>`}
          apiRows={[
            { prop: 'SpotlightCard.spotlightColor', type: 'string', defaultValue: 'color-mix(primary 16%)', description: '跟随光标移动的径向光斑着色' },
            { prop: 'SpotlightCard.size / hoverable', type: 'AbcSize / boolean', defaultValue: "'md' / false", description: '容器内边距规格与悬停描边抬升' },
            { prop: 'BorderBeam.duration', type: 'number', defaultValue: '8', description: '绕边流光完整运行一圈的时长（秒）' },
            { prop: 'BorderBeam.motion', type: 'AbcMotionPreset', defaultValue: '全局继承', description: '为 none 时自动返回 null 停止流光动画' },
            { prop: 'AuroraBackground.motion', type: 'AbcMotionPreset', defaultValue: '全局继承', description: '为 none 时保留柔和静态极光背景而关闭漂移关键帧' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <SpotlightCard
              size={spotSize}
              hoverable={spotHoverable}
              motion={effectMotion}
              className="flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--abc-fg)]">
                  <Sparkles className="h-4 w-4 text-[var(--abc-primary)]" />
                  SpotlightCard 鼠标光斑追踪舞台
                </div>
                <p className="text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
                  在卡片表面滑动指针，实时跟踪坐标绘制柔和径向渐变高光；切换上方 <code className="font-mono">size</code> 与 <code className="font-mono">hoverable</code> 观察内边距与边缘反馈。
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[var(--abc-border)] pt-3 text-xs text-[var(--abc-fg-muted)]">
                <span>motion=&quot;{effectMotion}&quot;</span>
                <StatusTag tone="primary" size="xs" dot={false}>size={spotSize}</StatusTag>
              </div>
            </SpotlightCard>

            <div className="relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-6 shadow-[var(--abc-shadow-card)]">
              <AuroraBackground motion={effectMotion} />
              <BorderBeam duration={beamDuration} motion={effectMotion} />
              <div className="relative z-10 flex h-full flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/80 px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] backdrop-blur-xs">
                    <Zap className="h-3 w-3" />
                    {effectMotion === 'none' ? '静态无障碍降级模式' : `流光周期 ${beamDuration}s · 极光漂移运行中`}
                  </div>
                  <h4 className="text-base font-bold text-[var(--abc-fg)]">
                    AuroraBackground + BorderBeam 复合视觉容器
                  </h4>
                  <p className="text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
                    将 <code className="font-mono">motion</code> 切换为 <code className="font-mono">none</code> 时，极光停止漂移并保留柔光底衬，BorderBeam 自动卸载零动画消耗。
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
                    duration={beamDuration}s
                  </span>
                  <Button size="xs" variant="primary" icon={<Zap className="h-3 w-3" />}>
                    立即接入
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default BaseAndEffectsCardsPage
