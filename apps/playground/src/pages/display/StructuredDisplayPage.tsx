import React, { useState } from 'react'
import {
  Collapse,
  CopyableCode,
  DescriptionItem,
  DescriptionList,
  DescriptionListItem,
  Descriptions,
  PageContainer,
  StatusTag,
  Timeline,
  type AbcMotionPreset,
  type AbcSize,
  type CollapseItem,
  type TimelineItem,
} from '@abc-design/react'
import { CheckCircle2, Clock } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'
import { JsonTreeViewerDemoSection } from './JsonTreeViewerDemoSection'

type DescVariant = 'default' | 'cards' | 'divided' | 'compact'
type ColCount = 1 | 2 | 3 | 4
type TimelineTone = NonNullable<TimelineItem['tone']>

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

const COL_OPTIONS: { label: string; value: ColCount }[] = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
]

const VARIANT_OPTIONS: { label: DescVariant; value: DescVariant }[] = [
  { label: 'default', value: 'default' },
  { label: 'cards', value: 'cards' },
  { label: 'divided', value: 'divided' },
  { label: 'compact', value: 'compact' },
]

const TONE_OPTIONS: { label: TimelineTone; value: TimelineTone }[] = [
  { label: 'primary', value: 'primary' },
  { label: 'success', value: 'success' },
  { label: 'warning', value: 'warning' },
  { label: 'danger', value: 'danger' },
  { label: 'neutral', value: 'neutral' },
]

const COLLAPSE_ITEMS: CollapseItem[] = [
  {
    key: 'native',
    label: '为什么基于原生 <details> 与 <summary> 构建手风琴？',
    extra: <StatusTag tone="success" size="xs">Zero JS Layout</StatusTag>,
    children:
      '原生 <details name="..."> 无需计算 DOM 高度即可在浏览器内实现同组互斥展开，并天然兼容页面 Ctrl+F 搜索自动展开命中内容。',
  },
  {
    key: 'a11y',
    label: '无障碍与键盘焦点语义做了哪些增强？',
    extra: <span className="text-[11px]">WCAG AA</span>,
    children:
      '摘要槽避免嵌套 h1~h6 标题以防读屏器吞掉交互语义，Chevron 箭头紧随左侧并受 data-motion 控制平滑旋转。',
  },
  {
    key: 'disabled-item',
    label: '禁用折叠项（需要系统管理员权限解冻）',
    disabled: true,
    children: '受保护的配置审计策略说明。',
  },
]

/**
 * 描述列表、JSON 树形检视、手风琴与时间轴文档页（5 组独立解耦卡片）
 */
export const StructuredDisplayPage: React.FC = () => {
  // 卡片 01：DescriptionList & DescriptionItem
  const [dlVariant, setDlVariant] = useState<DescVariant>('cards')
  const [dlCols, setDlCols] = useState<ColCount>(2)
  const [dlBordered, setDlBordered] = useState(false)
  const [enableCopy, setEnableCopy] = useState(true)

  // 卡片 02：Descriptions
  const [descCol, setDescCol] = useState<ColCount>(2)
  const [descBordered, setDescBordered] = useState(true)
  const [descSize, setDescSize] = useState<AbcSize>('sm')
  const [descMotion, setDescMotion] = useState<AbcMotionPreset>('smooth')

  // 卡片 04：Collapse
  const [accordion, setAccordion] = useState(true)
  const [activeKeys, setActiveKeys] = useState<string[]>(['native'])
  const [collapseSize, setCollapseSize] = useState<AbcSize>('sm')
  const [collapseMotion, setCollapseMotion] = useState<AbcMotionPreset>('smooth')

  // 卡片 05：Timeline
  const [tlSize, setTlSize] = useState<AbcSize>('sm')
  const [tlMotion, setTlMotion] = useState<AbcMotionPreset>('smooth')
  const [highlightTone, setHighlightTone] = useState<TimelineTone>('success')

  const handleAccordionToggle = (next: boolean) => {
    setAccordion(next)
    if (next && activeKeys.length > 1) {
      setActiveKeys(activeKeys.slice(0, 1))
    }
  }

  const timelineItems: TimelineItem[] = [
    {
      key: 'step-1',
      title: '架构师提交配额扩容工单',
      time: '10:15:22',
      tone: 'primary',
      description: '申请将华东集群峰值并发上限由 5,000 调整为 12,000 QPS',
    },
    {
      key: 'step-2',
      title: '风控策略自动校验状态',
      time: '10:15:24',
      tone: highlightTone,
      description: `当前聚焦节点色调：tone="${highlightTone}"（支持 primary / success / warning / danger / neutral）`,
      icon: highlightTone === 'success' ? <CheckCircle2 className="h-3.5 w-3.5 text-[var(--abc-success)]" /> : undefined,
    },
    {
      key: 'step-3',
      title: '全网边缘网关热加载灰度',
      time: '10:15:29',
      tone: 'warning',
      description: '已覆盖 14/16 可用区节点，剩余 2 节点处于排空切换窗口',
    },
    {
      key: 'step-4',
      title: '定时巡检归档等待中',
      time: '10:20:00',
      tone: 'neutral',
      icon: <Clock className="h-3.5 w-3.5 text-[var(--abc-fg-muted)]" />,
    },
  ]

  return (
    <PageContainer
      title="描述列表、JSON 树形检视、手风琴与时间轴"
      subtitle="按单一组件职责拆分为 5 组独立演练画布：DescriptionList、Descriptions、JsonTreeViewer、Collapse 与 Timeline。"
      breadcrumbs={[{ label: '数据展示与卡片动效' }, { label: '描述、JSON 树与时间轴' }]}
    >
      <div className="space-y-6">
        {/* 卡片 01：DescriptionList & DescriptionItem */}
        <ComponentDocPreview
          title="DescriptionList 结构化元数据网格"
          description="基于语义化 <dl>/<dt>/<dd> 渲染，支持四种视觉变体（default / cards / divided / compact）、1~4 列或 full 跨列、空值回退 emptyText 以及 copyValue 一键复制。"
          components={['DescriptionList', 'DescriptionItem', 'DescriptionListItem', 'CopyableCode']}
          onResetKnobs={() => {
            setDlVariant('cards')
            setDlCols(2)
            setDlBordered(false)
            setEnableCopy(true)
          }}
          controls={
            <>
              <KnobSegmented label="variant" value={dlVariant} options={VARIANT_OPTIONS} onChange={setDlVariant} />
              <KnobSegmented label="columns" value={dlCols} options={COL_OPTIONS} onChange={setDlCols} />
              <KnobSwitch label="bordered" checked={dlBordered} onChange={setDlBordered} />
              <KnobSwitch label="enableCopy" checked={enableCopy} onChange={setEnableCopy} />
            </>
          }
          code={`import { DescriptionList, DescriptionItem, CopyableCode } from '@abc-design/react'

<DescriptionList columns={${dlCols}} variant="${dlVariant}" bordered={${dlBordered}}>
  <DescriptionItem label="网关集群 ID" variant="${dlVariant}" mono${enableCopy ? ' copyValue="GW-PROD-EAST-01"' : ''}>
    GW-PROD-EAST-01
  </DescriptionItem>
  <DescriptionItem label="内网 VIP 地址" variant="${dlVariant}">
    <CopyableCode value="10.240.18.92:8443" hideCopyButton={${!enableCopy}} />
  </DescriptionItem>
  <DescriptionItem label="路由拓扑策略" variant="${dlVariant}" span="full">
    多活 BGP + Anycast 弹性专线
  </DescriptionItem>
</DescriptionList>`}
          apiRows={[
            { prop: 'DescriptionList.variant', type: "'default' | 'cards' | 'divided' | 'compact'", defaultValue: "'default'", description: '排版视觉风格；子项支持 DescriptionItem 或等价别名 DescriptionListItem' },
            { prop: 'DescriptionList.columns', type: '1 | 2 | 3 | 4', defaultValue: '2', description: '大屏下网格列数，小屏自动降级响应式排布' },
            { prop: 'DescriptionList.emptyText', type: 'ReactNode', defaultValue: "'-'", description: '当 value 为空串/null/undefined 时的统一占位符' },
            { prop: 'DescriptionItem.span', type: "1 | 2 | 3 | 4 | 'full'", defaultValue: '1', description: '控制单项在栅格中跨越的列数' },
          ]}
        >
          <DescriptionList columns={dlCols} variant={dlVariant} bordered={dlBordered}>
            <DescriptionItem
              label="网关集群 ID"
              variant={dlVariant}
              mono
              copyValue={enableCopy ? 'GW-PROD-EAST-01' : undefined}
            >
              GW-PROD-EAST-01
            </DescriptionItem>
            <DescriptionItem label="内网 VIP 地址" variant={dlVariant}>
              <CopyableCode value="10.240.18.92:8443" hideCopyButton={!enableCopy} />
            </DescriptionItem>
            <DescriptionListItem
              label="签名校验密钥"
              variant={dlVariant}
              mono
              copyValue={enableCopy ? 'hmac_sha256_9f8a7b6c' : undefined}
            >
              hmac_sha256_9f8a7b6c
            </DescriptionListItem>
            <DescriptionItem label="SLA 保障等级" variant={dlVariant}>
              <StatusTag tone="success" size="xs">99.99% Tier-1</StatusTag>
            </DescriptionItem>
            <DescriptionItem label="路由拓扑策略" variant={dlVariant} span="full">
              多活 BGP + Anycast 就近接入（支持跨可用区自动故障摘除）
            </DescriptionItem>
          </DescriptionList>
        </ComponentDocPreview>

        {/* 卡片 02：Descriptions */}
        <ComponentDocPreview
          title="Descriptions 表格化详情键值对面板"
          description="适用于详情抽屉与配置核对弹窗，支持带边框表格布局（bordered）与无边框轻量化布局切换，注意子项使用 children 传值。"
          components={['Descriptions']}
          onResetKnobs={() => {
            setDescCol(2)
            setDescBordered(true)
            setDescSize('sm')
            setDescMotion('smooth')
          }}
          controls={
            <>
              <KnobSegmented label="column" value={descCol} options={COL_OPTIONS} onChange={setDescCol} />
              <KnobSwitch label="bordered" checked={descBordered} onChange={setDescBordered} />
              <KnobSegmented label="size" value={descSize} options={SIZE_OPTIONS} onChange={setDescSize} />
              <KnobSegmented label="motion" value={descMotion} options={MOTION_OPTIONS} onChange={setDescMotion} />
            </>
          }
          code={`import { Descriptions, StatusTag } from '@abc-design/react'

<Descriptions
  title="企业专有实例配置"
  column={${descCol}}
  bordered={${descBordered}}
  size="${descSize}"
  items={[
    { label: '实例编号', children: 'ins-prod-sh-0192' },
    { label: '运行状态', children: <StatusTag tone="success">主备正常</StatusTag> },
  ]}
/>`}
          apiRows={[
            { prop: 'items', type: 'Array<{ key?, label, children, span? }>', required: true, description: '键值对条目（注意字段名为 children）' },
            { prop: 'column', type: '1 | 2 | 3 | 4', defaultValue: '2', description: '桌面端每行分配的网格列数' },
            { prop: 'bordered', type: 'boolean', defaultValue: 'true', description: '开启 1px 网格线及灰底标签列模式' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '控制单元格内边距与文字密度' },
          ]}
        >
          <Descriptions
            title="企业专有实例元数据"
            extra={<StatusTag tone="info" size="xs">实时同步</StatusTag>}
            column={descCol}
            bordered={descBordered}
            size={descSize}
            motion={descMotion}
            items={[
              { key: 'id', label: '实例编号', children: <CopyableCode value="ins-prod-sh-0192" /> },
              { key: 'status', label: '运行状态', children: <StatusTag tone="success" pulse>主备同步正常</StatusTag> },
              { key: 'region', label: '所属可用区', children: '华东 2（上海金融专区）' },
              { key: 'bw', label: '独享带宽上限', children: '2,000 Mbps' },
              {
                key: 'cidr',
                label: '白名单 CIDR',
                span: descCol >= 2 ? 2 : 1,
                children: <span className="font-mono">10.24.0.0/16, 172.18.12.0/24</span>,
              },
            ]}
          />
        </ComponentDocPreview>

        {/* 卡片 03：JsonTreeViewer（新增同步组件） */}
        <JsonTreeViewerDemoSection />

        {/* 卡片 04：Collapse（独立卡片） */}
        <ComponentDocPreview
          title="Collapse 原生无障碍折叠手风琴"
          description="基于原生 HTML <details> 实现单选互斥或自由多展开模式，支持禁用项与右侧附加标签，天然兼容浏览器页内查找自动展开。"
          components={['Collapse']}
          onResetKnobs={() => {
            setAccordion(true)
            setActiveKeys(['native'])
            setCollapseSize('sm')
            setCollapseMotion('smooth')
          }}
          controls={
            <>
              <KnobSwitch label="accordion (互斥)" checked={accordion} onChange={handleAccordionToggle} />
              <KnobSegmented label="size" value={collapseSize} options={SIZE_OPTIONS} onChange={setCollapseSize} />
              <KnobSegmented label="motion" value={collapseMotion} options={MOTION_OPTIONS} onChange={setCollapseMotion} />
            </>
          }
          code={`import { Collapse } from '@abc-design/react'

<Collapse
  accordion={${accordion}}
  size="${collapseSize}"
  motion="${collapseMotion}"
  activeKeys={activeKeys}
  onChange={setActiveKeys}
  items={collapseItems}
/>`}
          apiRows={[
            { prop: 'accordion', type: 'boolean', defaultValue: 'false', description: '手风琴互斥模式（开启时一次仅允许展开一项）' },
            { prop: 'activeKeys / onChange', type: 'string[] / (keys: string[]) => void', description: '受控展开面板 key 数组及变更回调' },
            { prop: 'size / motion', type: 'AbcSize / AbcMotionPreset', defaultValue: "'sm' / 全局", description: '折叠标题与正文密度及动效预设' },
          ]}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-[var(--abc-fg-muted)]">
              <span>当前模式：{accordion ? '互斥手风琴模式' : '自由多展开模式'}</span>
              <span className="font-mono">activeKeys: [{activeKeys.join(', ') || 'none'}]</span>
            </div>
            <Collapse
              accordion={accordion}
              size={collapseSize}
              motion={collapseMotion}
              activeKeys={activeKeys}
              onChange={setActiveKeys}
              items={COLLAPSE_ITEMS}
            />
          </div>
        </ComponentDocPreview>

        {/* 卡片 05：Timeline（独立卡片） */}
        <ComponentDocPreview
          title="Timeline 五色语义事件时间轴"
          description="面向审批流转、发布变更与审计溯源场景，支持 5 种语义圆点色调、自定义节点图标与四档纵向间距刻度。"
          components={['Timeline']}
          onResetKnobs={() => {
            setTlSize('sm')
            setTlMotion('smooth')
            setHighlightTone('success')
          }}
          controls={
            <>
              <KnobSegmented label="highlightTone" value={highlightTone} options={TONE_OPTIONS} onChange={setHighlightTone} />
              <KnobSegmented label="size" value={tlSize} options={SIZE_OPTIONS} onChange={setTlSize} />
              <KnobSegmented label="motion" value={tlMotion} options={MOTION_OPTIONS} onChange={setTlMotion} />
            </>
          }
          code={`import { Timeline } from '@abc-design/react'

<Timeline
  size="${tlSize}"
  motion="${tlMotion}"
  items={[
    { title: '提交配额扩容工单', time: '10:15:22', tone: 'primary' },
    { title: '风控策略自动校验状态', time: '10:15:24', tone: '${highlightTone}' },
  ]}
/>`}
          apiRows={[
            { prop: 'items', type: 'TimelineItem[]', required: true, description: '时间线条目（title, time, description, tone, icon）' },
            { prop: 'TimelineItem.tone', type: "'primary' | 'success' | 'warning' | 'danger' | 'neutral'", defaultValue: "'primary'", description: '节点圆点语义色调' },
            { prop: 'size / motion', type: 'AbcSize / AbcMotionPreset', defaultValue: "'sm' / 全局", description: '调整节点纵向间距与文字尺码' },
          ]}
        >
          <Timeline size={tlSize} motion={tlMotion} items={timelineItems} />
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default StructuredDisplayPage
