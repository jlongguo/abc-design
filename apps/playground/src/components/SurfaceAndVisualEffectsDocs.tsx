import React, { useState } from 'react'
import {
  AuroraBackground,
  BorderBeam,
  Button,
  Divider,
  InputNumber,
  RadioGroup,
  Separator,
  Space,
  StatusTag,
  Switch,
} from '@abc-design/react'
import { Sparkles, Zap } from 'lucide-react'
import { ComponentDocPreview } from './ComponentDocPreview'

/**
 * 表面容器、间距排版与视觉动效装饰层文档模块
 * 集成 BorderBeam、AuroraBackground、Divider、Separator 与 Space
 */
export const SurfaceAndVisualEffectsDocs: React.FC = () => {
  const [beamDuration, setBeamDuration] = useState(6)
  const [spaceDir, setSpaceDir] = useState<'horizontal' | 'vertical'>('horizontal')
  const [spaceSize, setSpaceSize] = useState<'xs' | 'sm' | 'md' | 'lg'>('md')
  const [spaceWrap, setSpaceWrap] = useState(true)

  return (
    <div className="space-y-5">
      {/* 1. BorderBeam & AuroraBackground */}
      <ComponentDocPreview
        title="BorderBeam / AuroraBackground 流光边框与柔和极光装饰层"
        description="专为企业级旗舰首屏、Auth 认证舞台与特性展示卡打造的合成器层零卡顿视觉氛围原语，开启全局 motion='none' 时自动静态降级。"
        controls={
          <div className="inline-flex items-center gap-2">
            <span>流光周期 (duration 秒):</span>
            <InputNumber
              size="xs"
              min={2}
              max={20}
              value={beamDuration}
              onChange={(v) => setBeamDuration(Number(v ?? 6))}
            />
          </div>
        }
        code={`import { AuroraBackground, BorderBeam } from '@abc-design/react'

<div className="relative overflow-hidden rounded-2xl border p-6">
  <AuroraBackground />
  <BorderBeam duration={${beamDuration}} />
  <div className="relative z-10">极光背景 + 流光绕边内容</div>
</div>`}
        apiRows={[
          { prop: 'BorderBeam.duration', type: 'number', defaultValue: '8', description: '沿容器外轮廓流光运行一圈的周期（秒）' },
          { prop: 'AuroraBackground.motion', type: 'AbcMotionPreset', description: '覆盖全局动效规格（none 时关闭漂移动画）' },
        ]}
      >
        <div className="relative overflow-hidden rounded-2xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-6 shadow-sm">
          <AuroraBackground />
          <BorderBeam duration={beamDuration} />
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/80 px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] backdrop-blur-xs">
                <Sparkles className="h-3 w-3" />
                Cloud Execution Plane v2.0
              </div>
              <h4 className="text-base font-bold text-[var(--abc-fg)]">
                零信任浏览器分布式执行算力底座
              </h4>
              <p className="max-w-xl text-xs leading-relaxed text-[var(--abc-fg-muted)]">
                AuroraBackground 提供弥散双极光底衬，BorderBeam 利用 CSS `offset-path` 实现绕边流光轨迹，支持一键随全局动效关闭。
              </p>
            </div>
            <Button variant="primary" size="sm" icon={<Zap className="h-3.5 w-3.5" />}>
              立即接入 SDK
            </Button>
          </div>
        </div>
      </ComponentDocPreview>

      {/* 2. Divider / Separator / Space */}
      <ComponentDocPreview
        title="Divider / Separator / Space 分隔线与弹性间距编排原语"
        description="覆盖文字分割线 Divider、语义无障碍 Separator（横/纵），以及统一响应全局组件间距映射的 Space 编排容器。"
        controls={
          <>
            <RadioGroup
              variant="segmented"
              value={spaceDir}
              onChange={(v) => setSpaceDir(v as 'horizontal' | 'vertical')}
              options={[
                { label: 'horizontal', value: 'horizontal' },
                { label: 'vertical', value: 'vertical' },
              ]}
            />
            <RadioGroup
              variant="segmented"
              value={spaceSize}
              onChange={(v) => setSpaceSize(v as 'xs' | 'sm' | 'md' | 'lg')}
              options={[
                { label: 'xs', value: 'xs' },
                { label: 'sm', value: 'sm' },
                { label: 'md', value: 'md' },
                { label: 'lg', value: 'lg' },
              ]}
            />
            <Switch size="xs" label="自动折行 (wrap)" checked={spaceWrap} onChange={setSpaceWrap} />
          </>
        }
        code={`import { Divider, Separator, Space, Button } from '@abc-design/react'

<Space direction="${spaceDir}" size="${spaceSize}" wrap={${spaceWrap}}>
  <Button>操作一</Button>
  <Separator orientation="vertical" className="h-5" />
  <Button variant="secondary">操作二</Button>
</Space>
<Divider label="区域分隔说明" />`}
        apiRows={[
          { prop: 'Divider.label', type: 'ReactNode', description: '带居中标题文字的水平分割线' },
          { prop: 'Divider.orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: '水平分隔或行内垂直竖线' },
          { prop: 'Separator.decorative', type: 'boolean', defaultValue: 'true', description: '为 false 时暴露 ARIA role="separator" 给读屏软件' },
          { prop: 'Space.direction / size / wrap', type: "'horizontal'|'vertical' / AbcSize / boolean", description: '弹性排布子元素间距，对齐组件系统间隔档位' },
        ]}
      >
        <div className="space-y-4">
          <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4">
            <Space direction={spaceDir} size={spaceSize} wrap={spaceWrap}>
              <Button size="sm" variant="primary">主动作按钮</Button>
              <Button size="sm" variant="secondary">次要操作</Button>
              <Button size="sm" variant="outline">导出记录</Button>
              <StatusTag tone="success">已就绪</StatusTag>
              <StatusTag tone="info">Region: Global</StatusTag>
            </Space>
          </div>

          <Divider label="行内垂直分隔线与 Separator 示例" />

          <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--abc-fg-secondary)]">
            <span>Control Plane</span>
            <Divider orientation="vertical" />
            <span>Runner Pool</span>
            <Separator orientation="vertical" decorative={false} className="mx-1.5 h-4" />
            <span>Egress Gateway</span>
          </div>

          <Separator decorative={false} />
        </div>
      </ComponentDocPreview>
    </div>
  )
}
