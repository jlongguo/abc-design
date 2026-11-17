import React, { useState } from 'react'
import {
  ActionCard,
  BentoCard,
  BentoGrid,
  Button,
  CheckCard,
  CheckCardGroup,
  CollapsibleCard,
  MetricCard,
  PageContainer,
  PricingCard,
  StatusTag,
  abcToast,
  type AbcMotionPreset,
  type AbcSize,
  type CheckCardValue,
} from '@abc-design/react'
import { Activity, ArrowUpRight, Cpu, Layers, Server, ShieldCheck, Zap } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

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

/**
 * 指标卡、选择卡、定价与便当网格文档页
 */
export const BusinessCardsAndBentoPage: React.FC = () => {
  // 卡片 1：MetricCard
  const [metricSize, setMetricSize] = useState<AbcSize>('md')
  const [trendDir, setTrendDir] = useState<'up' | 'down' | 'flat'>('up')
  const [showSparkline, setShowSparkline] = useState(true)
  const [metricLoading, setMetricLoading] = useState(false)
  const [metricHover, setMetricHover] = useState(true)

  // 卡片 2：CheckCardGroup & CheckCard
  const [multiple, setMultiple] = useState(false)
  const [checkCols, setCheckCols] = useState<1 | 2 | 3>(3)
  const [checkSize, setCheckSize] = useState<AbcSize>('md')
  const [disableDedicated, setDisableDedicated] = useState(true)
  const [singleChoice, setSingleChoice] = useState<string>('pro')
  const [multiChoices, setMultiChoices] = useState<string[]>(['starter', 'pro'])

  // 卡片 3：ActionCard & CollapsibleCard
  const [acSize, setAcSize] = useState<AbcSize>('md')
  const [acMotion, setAcMotion] = useState<AbcMotionPreset>('smooth')
  const [collapseOpen, setCollapseOpen] = useState(true)
  const [showTags, setShowTags] = useState(true)

  // 卡片 4：PricingCard & BentoGrid / BentoCard
  const [yearlyBilling, setYearlyBilling] = useState(false)
  const [highlightPro, setHighlightPro] = useState(true)
  const [bentoColumns, setBentoColumns] = useState<2 | 3 | 4>(3)
  const [bentoGap, setBentoGap] = useState<AbcSize>('md')

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
      title="指标卡、选择卡、定价与便当网格"
      subtitle="涵盖业务高阶数据指标卡 MetricCard、零重排抖动 CheckCardGroup / CheckCard、整卡热区 ActionCard、平滑展开 CollapsibleCard、订阅定价 PricingCard 与 BentoGrid 异构网格。"
      breadcrumbs={[{ label: '卡片与动效' }, { label: '指标卡、选择卡、定价与便当网格' }]}
    >
      <div className="space-y-5">
        {/* 卡片 1：MetricCard */}
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
import { Activity } from 'lucide-react'

<MetricCard
  title="今日全网结算净额"
  prefix="¥"
  value="1,284,920"
  size="${metricSize}"
  hoverable={${metricHover}}
  loading={${metricLoading}}
  trend={{ value: '${trendMap.value}', direction: '${trendDir}', label: '${trendMap.label}' }}${showSparkline ? `\n  sparkline={[${trendMap.spark.join(', ')}]}` : ''}
  icon={<Activity className="h-4 w-4" />}
/>`}
          apiRows={[
            { prop: 'title / value', type: 'ReactNode / ReactNode', required: true, description: '指标标签名与等宽对齐核心数值' },
            { prop: 'prefix / suffix', type: 'ReactNode / ReactNode', description: '数值前缀符号（如 ¥）或后缀单位（如 ms / %）' },
            { prop: 'trend', type: "{ value: string | number; direction?: 'up' | 'down' | 'flat'; label?: string }", description: '趋势徽标与对比文案' },
            { prop: 'sparkline', type: 'number[]', description: '纯 SVG 迷你折线走势数值序列' },
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

        {/* 卡片 2：CheckCardGroup & CheckCard */}
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

<CheckCardGroup
  multiple={${multiple}}
  columns={${checkCols}}
  size="${checkSize}"
  value={${multiple ? JSON.stringify(multiChoices) : JSON.stringify(singleChoice)}}
  onChange={handleChange}
>
  <CheckCard value="starter" title="标准共享集群" description="适合开发联调与轻量服务" />
  <CheckCard value="pro" title="企业高可用集群" description="多可用区自动主备切换" />
  <CheckCard value="dedicated" title="金融级物理隔离" description="支持独立 VPC 专网"${disableDedicated ? ' disabled' : ''} />
</CheckCardGroup>`}
          apiRows={[
            { prop: 'CheckCardGroup.multiple', type: 'boolean', defaultValue: 'false', description: '切换单选（radio）或复选（checkbox）模式' },
            { prop: 'CheckCardGroup.columns / size', type: '1 | 2 | 3 | 4 / AbcSize', defaultValue: "2 / 'md'", description: '栅格列数与子卡片统一规格' },
            { prop: 'CheckCardGroup.value / onChange', type: 'CheckCardValue | CheckCardValue[]', description: '受控选值（单选为单值，多选为数组）' },
            { prop: 'CheckCard.value / disabled', type: 'string | number / boolean', description: '卡片唯一标识及独立禁用开关' },
            { prop: 'CheckCard.extra / icon', type: 'ReactNode / ReactNode', description: '标题右侧辅助标签与左侧图标槽' },
          ]}
        >
          <div className="space-y-3">
            <div className="text-xs text-[var(--abc-fg-muted)]">
              当前模式：<strong className="text-[var(--abc-fg)]">{multiple ? '多选 (multiple)' : '单选'}</strong> · 已选：
              <code className="ml-1 font-mono text-[var(--abc-primary)]">
                {multiple ? `[${multiChoices.join(', ') || '空'}]` : singleChoice}
              </code>
            </div>
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
          </div>
        </ComponentDocPreview>

        {/* 卡片 3：ActionCard & CollapsibleCard */}
        <ComponentDocPreview
          title="ActionCard 动作热区卡 & CollapsibleCard 折叠详情卡"
          description="ActionCard 基于 ::after Stretched Link 将点击热区扩至整卡同时用 z-10 隔离右上角 extra 次动作；CollapsibleCard 使用 CSS Grid 0fr->1fr 实现平滑展开过渡。"
          components={['ActionCard', 'CollapsibleCard']}
          onResetKnobs={() => {
            setAcSize('md')
            setAcMotion('smooth')
            setCollapseOpen(true)
            setShowTags(true)
          }}
          controls={
            <>
              <KnobSegmented label="size" value={acSize} options={SIZE_OPTIONS} onChange={setAcSize} />
              <KnobSegmented label="motion" value={acMotion} options={MOTION_OPTIONS} onChange={setAcMotion} />
              <KnobSwitch label="collapseOpen" checked={collapseOpen} onChange={setCollapseOpen} />
              <KnobSwitch label="showTags" checked={showTags} onChange={setShowTags} />
            </>
          }
          code={`import { ActionCard, CollapsibleCard, Button } from '@abc-design/react'

<ActionCard
  title="网关异常告警自动处置策略"
  description="连续 3 次健康检查超时后自动摘除故障节点。"
  size="${acSize}"
  motion="${acMotion}"${showTags ? "\n  tags={['自动故障转移', '告警联动']}" : ''}
  extra={<Button size="xs" variant="outline" onClick={onEdit}>独立配置</Button>}
  onClick={onCardClick}
/>

<CollapsibleCard
  title="高阶合规与加密策略说明"
  size="${acSize}"
  motion="${acMotion}"
  open={${collapseOpen}}
  onOpenChange={setCollapseOpen}
>
  所有落盘凭据均采用信封加密托管。
</CollapsibleCard>`}
          apiRows={[
            { prop: 'ActionCard.onClick / href', type: '() => void / string', description: '整卡主热区动作（语义化 button 或 a 标签）' },
            { prop: 'ActionCard.extra', type: 'ReactNode', description: '右上角独立按钮槽（z-10 隔离，不触发主点击）' },
            { prop: 'ActionCard.tags', type: 'string[]', description: '底部关键词标签集合' },
            { prop: 'CollapsibleCard.open / onOpenChange', type: 'boolean / (open: boolean) => void', description: '受控展开状态与切换回调' },
            { prop: 'size / motion', type: 'AbcSize / AbcMotionPreset', defaultValue: "'md' / 全局", description: '四档密度缩放与动效曲线控制' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ActionCard
              title="网关异常告警自动处置策略"
              description="当上游节点连续 3 次健康检查超时，自动摘除流量并推送通知（点击右上角按钮测试事件隔离）。"
              icon={<Zap className="h-4 w-4" />}
              tags={showTags ? ['自动故障转移', '告警联动', 'SLA 守卫'] : undefined}
              size={acSize}
              motion={acMotion}
              extra={
                <Button
                  size="xs"
                  variant="outline"
                  onClick={() => abcToast.success('点击了 extra 独立按钮（未触发整卡主跳转）')}
                >
                  独立配置
                </Button>
              }
              onClick={() => abcToast.info('触发了 ActionCard 整卡主点击热区')}
            />

            <CollapsibleCard
              title="高阶合规与加密策略说明"
              subtitle="支持受控 open / onOpenChange 双向状态同步"
              icon={<ShieldCheck className="h-4 w-4" />}
              size={acSize}
              motion={acMotion}
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
          </div>
        </ComponentDocPreview>

        {/* 卡片 4：PricingCard & BentoGrid / BentoCard */}
        <ComponentDocPreview
          title="PricingCard 订阅定价卡 & BentoGrid / BentoCard 非对称便当网格"
          description="PricingCard 支持月/年付切换、主推方案高亮边框与划掉未包含特性；BentoGrid 支持 2~4 列响应式布局与 colSpan/rowSpan 异构跨格。"
          components={['PricingCard', 'BentoGrid', 'BentoCard']}
          onResetKnobs={() => {
            setYearlyBilling(false)
            setHighlightPro(true)
            setBentoColumns(3)
            setBentoGap('md')
          }}
          controls={
            <>
              <KnobSwitch label="yearlyBilling" checked={yearlyBilling} onChange={setYearlyBilling} />
              <KnobSwitch label="highlightPro" checked={highlightPro} onChange={setHighlightPro} />
              <KnobSegmented label="bentoColumns" value={bentoColumns} options={[{ label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }]} onChange={setBentoColumns} />
              <KnobSegmented label="bentoGap" value={bentoGap} options={SIZE_OPTIONS} onChange={setBentoGap} />
            </>
          }
          code={`import { PricingCard, BentoGrid, BentoCard } from '@abc-design/react'

<PricingCard
  tier="企业旗舰版"
  price="${yearlyBilling ? '¥12,470' : '¥1,299'}"
  period="${yearlyBilling ? '/ 年 (省 20%)' : '/ 月'}"
  recommended={${highlightPro}}
  features={['不限管理员席位', { text: '专属 VPC 与 99.99% SLA', included: true }]}
  onSelect={() => selectPlan('pro')}
/>

<BentoGrid columns={${bentoColumns}} gap="${bentoGap}">
  <BentoCard colSpan={2} eyebrow="核心引擎" title="分布式边缘调度" description="全球 42 个节点低延迟转发" />
  <BentoCard eyebrow="安全隔离" title="零信任 mTLS" description="自动签发与轮换工作负载证书" />
</BentoGrid>`}
          apiRows={[
            { prop: 'PricingCard.tier / price / period', type: 'ReactNode / ReactNode / ReactNode', description: '套餐等级名、价格数字与周期说明' },
            { prop: 'PricingCard.recommended / badge', type: 'boolean / ReactNode', defaultValue: "false / '推荐方案'", description: '主推套餐边框光环与右上角徽标' },
            { prop: 'PricingCard.features', type: 'Array<{ text: ReactNode; included?: boolean } | string>', description: '功能清单（included=false 自动渲染删除线对比）' },
            { prop: 'BentoGrid.columns / gap', type: '2 | 3 | 4 / AbcSize', defaultValue: "3 / 'md'", description: '网格列数与单元格间距档位' },
            { prop: 'BentoCard.colSpan / rowSpan', type: '1 | 2 | 3 / 1 | 2', defaultValue: '1 / 1', description: '单元格跨列与跨行比例配置' },
          ]}
        >
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <PricingCard
                tier="团队标准版"
                price={yearlyBilling ? '¥2,870' : '¥299'}
                period={yearlyBilling ? '/ 年 (8折优惠)' : '/ 月'}
                description="满足成长型研发团队的常规管理与审计需求。"
                features={[
                  '最多 25 名管理员席位',
                  '90 天完整操作审计日志',
                  { text: '跨区容灾与自定义 SLA 保障', included: false },
                ]}
                ctaText="选择标准版"
                onSelect={() => abcToast.info('已选择团队标准版')}
              />
              <PricingCard
                tier="企业旗舰版"
                price={yearlyBilling ? '¥12,470' : '¥1,299'}
                period={yearlyBilling ? '/ 年 (省 ¥3,118)' : '/ 月'}
                badge="推荐方案"
                recommended={highlightPro}
                description="为大规模多租户商用系统提供金融级高可用支撑。"
                features={[
                  '不限管理员与细粒度 RBAC 角色',
                  '365 天实时审计检索与归档导出',
                  { text: '独立专用 VPC 网关与 99.99% SLA', included: true },
                ]}
                ctaText="立即升级旗舰版"
                onSelect={() => abcToast.success('已选择企业旗舰版')}
              />
            </div>

            <BentoGrid columns={bentoColumns} gap={bentoGap}>
              <BentoCard
                colSpan={2}
                eyebrow="核心引擎"
                title="智能流量编排与实时回滚"
                description="支持基于租户、区域与请求头的灰度放量策略，毫秒级异常熔断保护。"
                icon={<ArrowUpRight className="h-4 w-4" />}
                footer={<span>覆盖 42 个边缘接入点</span>}
              />
              <BentoCard
                eyebrow="安全基线"
                title="全链路零信任校验"
                description="自动签名轮换与细粒度权限拦截。"
                icon={<ShieldCheck className="h-4 w-4" />}
                footer={<StatusTag tone="success" size="xs">已合规</StatusTag>}
              />
              <BentoCard
                eyebrow="观测分析"
                title="全量链路追踪"
                description="实时采集网关请求延迟分布。"
                icon={<Activity className="h-4 w-4" />}
              />
              <BentoCard
                eyebrow="弹性扩展"
                title="秒级副本扩缩容"
                description="依据实时 QPS 脉冲自适应调整沙箱池。"
                icon={<Zap className="h-4 w-4" />}
              />
            </BentoGrid>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default BusinessCardsAndBentoPage
