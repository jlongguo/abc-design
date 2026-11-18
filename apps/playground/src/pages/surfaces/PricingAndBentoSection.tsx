import React, { useState } from 'react'
import {
  BentoCard,
  BentoGrid,
  PricingCard,
  StatusTag,
  abcToast,
  type AbcSize,
} from '@abc-design/react'
import { Activity, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

const SIZE_OPTIONS: { label: AbcSize; value: AbcSize }[] = [
  { label: 'xs', value: 'xs' },
  { label: 'sm', value: 'sm' },
  { label: 'md', value: 'md' },
  { label: 'lg', value: 'lg' },
]

export const PricingAndBentoSection: React.FC = () => {
  const [yearlyBilling, setYearlyBilling] = useState(false)
  const [highlightPro, setHighlightPro] = useState(true)
  const [bentoColumns, setBentoColumns] = useState<2 | 3 | 4>(3)
  const [bentoGap, setBentoGap] = useState<AbcSize>('md')

  return (
    <>
      {/* 卡片 05：PricingCard（独立卡片） */}
      <ComponentDocPreview
        title="PricingCard 商业化订阅定价卡片"
        description="支持月付/年付计费周期切换、主推套餐品牌光环高亮与未包含权益删除线对比展示。"
        components={['PricingCard']}
        onResetKnobs={() => {
          setYearlyBilling(false)
          setHighlightPro(true)
        }}
        controls={
          <>
            <KnobSwitch label="yearlyBilling (年付优惠)" checked={yearlyBilling} onChange={setYearlyBilling} />
            <KnobSwitch label="recommended" checked={highlightPro} onChange={setHighlightPro} />
          </>
        }
        code={`import { PricingCard } from '@abc-design/react'

<PricingCard
  tier="企业旗舰版"
  price="${yearlyBilling ? '¥12,470' : '¥1,299'}"
  period="${yearlyBilling ? '/ 年 (省 ¥3,118)' : '/ 月'}"
  recommended={${highlightPro}}
  features={['不限管理员席位', { text: '独立专用 VPC 网关与 99.99% SLA', included: true }]}
  onSelect={() => selectPlan('pro')}
/>`}
        apiRows={[
          { prop: 'tier / price / period', type: 'ReactNode / ReactNode / ReactNode', description: '套餐等级名、价格数字与周期说明' },
          { prop: 'recommended / badge', type: 'boolean / ReactNode', defaultValue: "false / '推荐方案'", description: '主推套餐边框光环与右上角徽标' },
          { prop: 'features', type: 'Array<{ text: ReactNode; included?: boolean } | string>', description: '功能清单（included=false 自动渲染删除线对比）' },
        ]}
      >
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
      </ComponentDocPreview>

      {/* 卡片 06：BentoGrid & BentoCard（独立卡片） */}
      <ComponentDocPreview
        title="BentoGrid & BentoCard 非对称便当特性网格"
        description="支持 2~4 列响应式栅格与 colSpan / rowSpan 异构跨格，适合产品总览页、空状态引导屏与核心能力矩阵。"
        components={['BentoGrid', 'BentoCard']}
        onResetKnobs={() => {
          setBentoColumns(3)
          setBentoGap('md')
        }}
        controls={
          <>
            <KnobSegmented
              label="columns"
              value={bentoColumns}
              options={[
                { label: '2 列', value: 2 },
                { label: '3 列', value: 3 },
                { label: '4 列', value: 4 },
              ]}
              onChange={setBentoColumns}
            />
            <KnobSegmented label="gap" value={bentoGap} options={SIZE_OPTIONS} onChange={setBentoGap} />
          </>
        }
        code={`import { BentoGrid, BentoCard } from '@abc-design/react'

<BentoGrid columns={${bentoColumns}} gap="${bentoGap}">
  <BentoCard colSpan={2} eyebrow="核心引擎" title="智能流量编排与实时回滚" description="毫秒级异常熔断保护" />
  <BentoCard eyebrow="安全基线" title="全链路零信任校验" description="自动签名轮换与细粒度权限拦截" />
</BentoGrid>`}
        apiRows={[
          { prop: 'BentoGrid.columns / gap', type: '2 | 3 | 4 / AbcSize', defaultValue: "3 / 'md'", description: '网格列数与单元格间距档位' },
          { prop: 'BentoCard.colSpan / rowSpan', type: '1 | 2 | 3 / 1 | 2', defaultValue: '1 / 1', description: '单元格跨列与跨行比例配置' },
        ]}
      >
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
      </ComponentDocPreview>
    </>
  )
}
