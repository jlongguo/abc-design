import React, { useState } from 'react'
import {
  ActionCard,
  Button,
  CheckCard,
  CheckCardGroup,
  CollapsibleCard,
  MetricCard,
  PageContainer,
  StatusTag,
  abcToast,
  type AbcMotionPreset,
  type AbcSize,
  type CheckCardValue,
} from '@abc-design/react'
import { Activity, Cpu, Layers, Server, ShieldCheck, Zap } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'
import { PricingAndBentoSection } from './PricingAndBentoSection'

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

const TREND_OPTIONS: { label: 'up' | 'down' | 'flat'; value: 'up' | 'down' | 'flat' }[] = [
  { label: 'up', value: 'up' },
  { label: 'down', value: 'down' },
  { label: 'flat', value: 'flat' },
]

export const BusinessCardsAndBentoPage: React.FC = () => {
  // 卡片 01：MetricCard
  const [metricSize, setMetricSize] = useState<AbcSize>('md')
  const [trendDir, setTrendDir] = useState<'up' | 'down' | 'flat'>('up')
  const [showSparkline, setShowSparkline] = useState(true)
  const [metricLoading, setMetricLoading] = useState(false)
  const [metricHover, setMetricHover] = useState(true)

  // 卡片 02：CheckCardGroup & CheckCard
  const [multiple, setMultiple] = useState(false)
  const [checkCols, setCheckCols] = useState<1 | 2 | 3>(3)
  const [checkSize, setCheckSize] = useState<AbcSize>('md')
  const [disableDedicated, setDisableDedicated] = useState(true)
  const [singleChoice, setSingleChoice] = useState<string>('pro')
  const [multiChoices, setMultiChoices] = useState<string[]>(['starter', 'pro'])

  // 卡片 03：ActionCard（含新增 selected 激活态）
  const [acSize, setAcSize] = useState<AbcSize>('md')
  const [acMotion, setAcMotion] = useState<AbcMotionPreset>('smooth')
  const [showTags, setShowTags] = useState(true)
  const [selectedPreset, setSelectedPreset] = useState<'fast' | 'slim'>('fast')

  // 卡片 04：CollapsibleCard
  const [ccSize, setCcSize] = useState<AbcSize>('md')
  const [ccMotion, setCcMotion] = useState<AbcMotionPreset>('smooth')
  const [collapseOpen, setCollapseOpen] = useState(true)

  const trendMap = {
    up: { value: '+14.8%', direction: 'up' as const, label: '较昨日同期', spark: [42, 58, 51, 74, 68, 92, 108] },
    down: { value: '-6.2%', direction: 'down' as const, label: 'P99 耗时回落', spark: [96, 88, 84, 72, 68, 61, 52] },
    flat: { value: '0.0%', direction: 'flat' as const, label: '流量平稳', spark: [64, 65, 63, 64, 65, 64, 64] },
  }[trendDir]

  const handleCheckChange = (next: CheckCardValue | CheckCardValue[]) => {
    if (multiple) {
      setMultiChoices((Array.isArray(next) ? next : [next]).map(String))
    } else {
      setSingleChoice(String(next))
    }
  }

  return (
    <PageContainer
      title="指标卡、选择卡、动作预设卡、折叠卡、定价与便当网格"
      subtitle="按单一卡片职责拆分为 6 组独立演练画布：MetricCard、CheckCardGroup、ActionCard (含选中态)、CollapsibleCard、PricingCard 与 BentoGrid。"
      breadcrumbs={[{ label: '数据展示与卡片动效' }, { label: '指标卡、选择卡与 Bento' }]}
    >
      <div className="space-y-6">
        {/* 卡片 01：MetricCard */}
        <ComponentDocPreview
          title="MetricCard 数据指标与微趋势走势卡片"
          description="内置等宽 tabular-nums 数值排版、前后缀、涨跌趋势徽标与纯内联 SVG 迷你走势折线（sparkline），无需加载 ECharts 即可构建密集运营驾驶舱。"
          components={['MetricCard']}
          onResetKnobs={() => {
            setMetricSize('md')
            setTrendDir('up')
            setShowSparkline(true)
            setMetricLoading(false)
            setMetricHover(true)
          }}
          controls={
            <>
              <KnobSegmented label="size" value={metricSize} options={SIZE_OPTIONS} onChange={setMetricSize} />
              <KnobSegmented label="trendDirection" value={trendDir} options={TREND_OPTIONS} onChange={setTrendDir} />
              <KnobSwitch label="showSparkline" checked={showSparkline} onChange={setShowSparkline} />
              <KnobSwitch label="loading" checked={metricLoading} onChange={setMetricLoading} />
              <KnobSwitch label="hoverable" checked={metricHover} onChange={setMetricHover} />
            </>
          }
          code={`import { MetricCard } from '@abc-design/react'

<MetricCard
  title="今日全网结算净额"
  prefix="¥"
  value="1,284,920"
  size="${metricSize}"
  hoverable={${metricHover}}
  loading={${metricLoading}}
  trend={{ value: '${trendMap.value}', direction: '${trendDir}', label: '${trendMap.label}' }}${showSparkline ? `\n  sparkline={[${trendMap.spark.join(', ')}]}` : ''}
/>`}
          apiRows={[
            { prop: 'title / value', type: 'ReactNode / ReactNode', required: true, description: '指标标签名与等宽对齐核心数值' },
            { prop: 'trend / sparkline', type: 'Trend / number[]', description: '趋势徽标与纯 SVG 迷你折线走势数值序列' },
            { prop: 'size / hoverable / loading', type: 'AbcSize / boolean / boolean', defaultValue: "'md' / true / false", description: '四档规格、悬停浮起与骨架加载态' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <MetricCard
              title="今日全网结算净额"
              prefix="¥"
              value="1,284,920"
              size={metricSize}
              hoverable={metricHover}
              loading={metricLoading}
              trend={{ value: trendMap.value, direction: trendMap.direction, label: trendMap.label }}
              sparkline={showSparkline ? trendMap.spark : undefined}
              icon={<Activity className="h-4 w-4" />}
              footer="统计窗口：今日 00:00 ~ 实时聚合"
            />
            <MetricCard
              title="网关 P99 响应时延"
              value="18.4"
              suffix="ms"
              size={metricSize}
              hoverable={metricHover}
              loading={metricLoading}
              trend={{ value: '-1.6ms', direction: 'down', label: '优于基线' }}
              sparkline={showSparkline ? [28, 25, 24, 21, 20, 19, 18] : undefined}
              icon={<Cpu className="h-4 w-4" />}
              footer="覆盖节点：42 个边缘 POP"
            />
          </div>
        </ComponentDocPreview>

        {/* 卡片 02：CheckCardGroup & CheckCard */}
        <ComponentDocPreview
          title="CheckCardGroup & CheckCard 卡片式单选 / 多选器"
          description="底层使用原生 radio / checkbox 保障键盘可达性；选中态采用 box-shadow ring 而不修改 border-width 或 padding，彻底杜绝点击重排抖动。"
          components={['CheckCardGroup', 'CheckCard']}
          onResetKnobs={() => {
            setMultiple(false)
            setCheckCols(3)
            setCheckSize('md')
            setDisableDedicated(true)
            setSingleChoice('pro')
            setMultiChoices(['starter', 'pro'])
          }}
          controls={
            <>
              <KnobSwitch label="multiple" checked={multiple} onChange={setMultiple} />
              <KnobSegmented label="columns" value={checkCols} options={[{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }]} onChange={setCheckCols} />
              <KnobSegmented label="size" value={checkSize} options={SIZE_OPTIONS} onChange={setCheckSize} />
              <KnobSwitch label="disableDedicated" checked={disableDedicated} onChange={setDisableDedicated} />
            </>
          }
          code={`import { CheckCardGroup, CheckCard } from '@abc-design/react'

<CheckCardGroup multiple={${multiple}} columns={${checkCols}} size="${checkSize}" value={value} onChange={setValue}>
  <CheckCard value="starter" title="标准共享集群" description="适合开发联调" />
  <CheckCard value="pro" title="企业高可用集群" description="多可用区自动主备切换" />
</CheckCardGroup>`}
          apiRows={[
            { prop: 'CheckCardGroup.multiple', type: 'boolean', defaultValue: 'false', description: '切换单选（radio）或复选（checkbox）模式' },
            { prop: 'CheckCardGroup.columns / size', type: '1 | 2 | 3 | 4 / AbcSize', defaultValue: "2 / 'md'", description: '栅格列数与子卡片统一规格' },
          ]}
        >
          <CheckCardGroup
            multiple={multiple}
            columns={checkCols}
            size={checkSize}
            value={multiple ? multiChoices : singleChoice}
            onChange={handleCheckChange}
          >
            <CheckCard
              value="starter"
              title="标准共享集群"
              description="适合开发联调与轻量级 Web 作业执行。"
              icon={<Layers className="h-4 w-4" />}
              extra={<StatusTag tone="neutral" size="xs">10 Gbps</StatusTag>}
            />
            <CheckCard
              value="pro"
              title="企业高可用集群"
              description="多可用区自动主备切换与独立流控队列。"
              icon={<ShieldCheck className="h-4 w-4" />}
              extra={<StatusTag tone="primary" size="xs">推荐</StatusTag>}
            />
            <CheckCard
              value="dedicated"
              title="金融级物理隔离"
              description={disableDedicated ? '当前可用区暂无空余宿主机（已禁用）。' : '支持专属物理机托管与独立 KMS 加密。'}
              icon={<Server className="h-4 w-4" />}
              disabled={disableDedicated}
            />
          </CheckCardGroup>
        </ComponentDocPreview>

        {/* 卡片 03：ActionCard（独立卡片，含新增 selected 高亮状态） */}
        <ComponentDocPreview
          title="ActionCard 整卡热区与可选中预设卡片"
          description="基于 ::after Stretched Link 将点击热区扩至整卡，同时用 z-10 隔离右上角 extra 次要动作；支持 selected 激活高亮环与 aria-pressed 语义，适合引擎预设与导航入口卡片。"
          components={['ActionCard']}
          onResetKnobs={() => {
            setAcSize('md')
            setAcMotion('smooth')
            setShowTags(true)
            setSelectedPreset('fast')
          }}
          controls={
            <>
              <KnobSegmented label="size" value={acSize} options={SIZE_OPTIONS} onChange={setAcSize} />
              <KnobSegmented label="motion" value={acMotion} options={MOTION_OPTIONS} onChange={setAcMotion} />
              <KnobSwitch label="showTags" checked={showTags} onChange={setShowTags} />
            </>
          }
          code={`import { ActionCard, Button } from '@abc-design/react'

<ActionCard
  title="Fast-CDP 极速无头引擎"
  description="亚秒级冷启动，适合结构化抓取与 API 探针。"
  selected={selected === 'fast'}
  size="${acSize}"
  motion="${acMotion}"${showTags ? "\n  tags={['亚秒启动', '低配额消耗']}" : ''}
  extra={<Button size="xs" variant="outline" onClick={onEdit}>参数微调</Button>}
  onClick={() => setSelected('fast')}
/>`}
          apiRows={[
            { prop: 'onClick / href', type: '() => void / string', description: '整卡主热区动作（语义化 button 或 a 标签）' },
            { prop: 'selected', type: 'boolean', defaultValue: 'false', description: '选中激活态（渲染品牌色边框光环并附加 aria-pressed）' },
            { prop: 'extra', type: 'ReactNode', description: '右上角独立按钮槽（z-10 隔离，不触发整卡主点击）' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ActionCard
              title="Fast-CDP 极速无头引擎"
              description="点击整卡切换 selected 激活态；点击右上角按钮测试事件冒泡隔离。"
              icon={<Zap className="h-4 w-4" />}
              selected={selectedPreset === 'fast'}
              tags={showTags ? ['亚秒启动', '低配额消耗'] : undefined}
              size={acSize}
              motion={acMotion}
              extra={
                <Button
                  size="xs"
                  variant="outline"
                  onClick={() => abcToast.success('触发了 extra 独立按钮（未改变整卡选中项）')}
                >
                  独立配置
                </Button>
              }
              onClick={() => setSelectedPreset('fast')}
            />
            <ActionCard
              title="Chromium-Slim 均衡渲染引擎"
              description="完整支持 SPA 水合执行、截图归档与页面快照捕获。"
              icon={<Layers className="h-4 w-4" />}
              selected={selectedPreset === 'slim'}
              tags={showTags ? ['完整 DOM', 'Page Bundle'] : undefined}
              size={acSize}
              motion={acMotion}
              onClick={() => setSelectedPreset('slim')}
            />
          </div>
        </ComponentDocPreview>

        {/* 卡片 04：CollapsibleCard（独立卡片） */}
        <ComponentDocPreview
          title="CollapsibleCard 平滑高度过渡折叠详情卡"
          description="采用 CSS Grid 0fr -> 1fr 实现零测量抖动的平滑展开收起，支持受控与非受控模式。"
          components={['CollapsibleCard']}
          onResetKnobs={() => {
            setCcSize('md')
            setCcMotion('smooth')
            setCollapseOpen(true)
          }}
          controls={
            <>
              <KnobSwitch label="open" checked={collapseOpen} onChange={setCollapseOpen} />
              <KnobSegmented label="size" value={ccSize} options={SIZE_OPTIONS} onChange={setCcSize} />
              <KnobSegmented label="motion" value={ccMotion} options={MOTION_OPTIONS} onChange={setCcMotion} />
            </>
          }
          code={`import { CollapsibleCard } from '@abc-design/react'

<CollapsibleCard
  title="高阶合规与加密策略说明"
  size="${ccSize}"
  motion="${ccMotion}"
  open={${collapseOpen}}
  onOpenChange={setCollapseOpen}
>
  所有落盘凭据均采用零知识信封加密托管。
</CollapsibleCard>`}
          apiRows={[
            { prop: 'open / onOpenChange', type: 'boolean / (open: boolean) => void', description: '受控展开状态与切换回调' },
            { prop: 'size / motion', type: 'AbcSize / AbcMotionPreset', defaultValue: "'md' / 全局", description: '四档密度缩放与动效曲线控制' },
          ]}
        >
          <CollapsibleCard
            title="高阶合规与加密策略说明"
            subtitle="支持受控 open / onOpenChange 双向状态同步"
            icon={<ShieldCheck className="h-4 w-4" />}
            size={ccSize}
            motion={ccMotion}
            open={collapseOpen}
            onOpenChange={setCollapseOpen}
            extra={
              <StatusTag tone={collapseOpen ? 'success' : 'neutral'} size="xs">
                {collapseOpen ? '已展开' : '已收起'}
              </StatusTag>
            }
          >
            <p className="text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
              所有落盘敏感凭据均采用信封加密托管，并在传输链路强制开启 TLS 1.3 双向证书校验。点击标题栏或上方 Knob 开关均可同步展开收起。
            </p>
          </CollapsibleCard>
        </ComponentDocPreview>

        {/* 卡片 05 & 06：PricingCard 与 BentoGrid */}
        <PricingAndBentoSection />
      </div>
    </PageContainer>
  )
}

export default BusinessCardsAndBentoPage
