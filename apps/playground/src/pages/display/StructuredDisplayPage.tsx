import React, { useState } from 'react'
import {
  Collapse,
  CopyableCode,
  DescriptionItem,
  DescriptionList,
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
 * 描述列表、手风琴与时间轴文档页
 */
export const StructuredDisplayPage: React.FC = () => {
  // 卡片 1：DescriptionList & DescriptionItem
  const [dlVariant, setDlVariant] = useState<DescVariant>('cards')
  const [dlCols, setDlCols] = useState<ColCount>(2)
  const [dlBordered, setDlBordered] = useState(false)
  const [enableCopy, setEnableCopy] = useState(true)

  // 卡片 2：Descriptions
  const [descCol, setDescCol] = useState<ColCount>(2)
  const [descBordered, setDescBordered] = useState(true)
  const [descSize, setDescSize] = useState<AbcSize>('sm')
  const [descMotion, setDescMotion] = useState<AbcMotionPreset>('smooth')

  // 卡片 3：Collapse & Timeline
  const [accordion, setAccordion] = useState(true)
  const [activeKeys, setActiveKeys] = useState<string[]>(['native'])
  const [ctSize, setCtSize] = useState<AbcSize>('sm')
  const [ctMotion, setCtMotion] = useState<AbcMotionPreset>('smooth')
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
      title="描述列表、手风琴与时间轴"
      subtitle="展示语义化结构数据排版（DescriptionList / Descriptions）、原生 <details> 手风琴（Collapse）与事件轨迹时间轴（Timeline）。"
      breadcrumbs={[{ label: '数据展示' }, { label: '描述列表、手风琴与时间轴' }]}
    >
      <div className="space-y-5">
        {/* 卡片 1：DescriptionList & DescriptionItem */}
        <ComponentDocPreview
          title="DescriptionList & DescriptionItem 结构化元数据网格"
          description="基于语义化 <dl>/<dt>/<dd> 渲染，支持四种视觉变体（default / cards / divided / compact）、多列栅格以及内置 copyValue 与独立 CopyableCode 一键复制。"
          components={['DescriptionList', 'DescriptionItem', 'CopyableCode']}
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
  <DescriptionItem
    label="网关集群 ID"
    variant="${dlVariant}"
    mono${enableCopy ? '\n    copyValue="GW-PROD-EAST-01"' : ''}
  >
    GW-PROD-EAST-01
  </DescriptionItem>
  <DescriptionItem label="内网 VIP 地址" variant="${dlVariant}">
    <CopyableCode value="10.240.18.92:8443" hideCopyButton={${!enableCopy}} />
  </DescriptionItem>
  <DescriptionItem label="拓扑模式" variant="${dlVariant}" span="full">
    多活 BGP + Anycast 弹性专线
  </DescriptionItem>
</DescriptionList>`}
          apiRows={[
            { prop: 'DescriptionList.variant', type: "'default' | 'cards' | 'divided' | 'compact'", defaultValue: "'default'", description: '排版视觉风格；声明式子项需同步传递 variant' },
            { prop: 'DescriptionList.columns', type: '1 | 2 | 3 | 4', defaultValue: '2', description: '大屏下网格列数，小屏自动降级响应式排布' },
            { prop: 'DescriptionList.bordered', type: 'boolean', defaultValue: 'false', description: '是否为整个描述列表外层包裹浅底边框容器' },
            { prop: 'DescriptionItem.copyValue / mono', type: 'string / boolean', description: '内置复制按钮的值及等宽字体开关' },
            { prop: 'DescriptionItem.span', type: "1 | 2 | 3 | 'full'", defaultValue: '1', description: '控制单项在栅格中跨越的列数' },
            { prop: 'CopyableCode.value / hideCopyButton', type: 'string / boolean', description: '行内代码段文本及一键复制按钮显隐控制' },
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
            <DescriptionItem
              label="签名校验密钥"
              variant={dlVariant}
              mono
              copyValue={enableCopy ? 'hmac_sha256_9f8a7b6c' : undefined}
            >
              hmac_sha256_9f8a7b6c
            </DescriptionItem>
            <DescriptionItem label="SLA 保障等级" variant={dlVariant}>
              <StatusTag tone="success" size="xs">99.99% Tier-1</StatusTag>
            </DescriptionItem>
            <DescriptionItem label="路由拓扑策略" variant={dlVariant} span="full">
              多活 BGP + Anycast 就近接入（支持跨可用区自动故障摘除）
            </DescriptionItem>
          </DescriptionList>
        </ComponentDocPreview>

        {/* 卡片 2：Descriptions */}
        <ComponentDocPreview
          title="Descriptions 表格化详情键值对面板"
          description="适用于详情抽屉与配置核对弹窗，支持带边框表格布局（bordered）与无边框轻量化布局切换，并跟随 size 与 motion 规格自适应内边距。"
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
  motion="${descMotion}"
  items={[
    { label: '实例编号', children: 'ins-prod-sh-0192' },
    { label: '运行状态', children: <StatusTag tone="success">主备正常</StatusTag> },
    { label: '所属可用区', children: '华东 2（上海金融区）' },
    { label: '白名单 CIDR', span: 2, children: '10.24.0.0/16, 172.18.12.0/24' },
  ]}
/>`}
          apiRows={[
            { prop: 'items', type: 'DescriptionItem[]', required: true, description: '键值对条目（label, children, span）' },
            { prop: 'column', type: '1 | 2 | 3 | 4', defaultValue: '2', description: '桌面端每行分配的网格列数' },
            { prop: 'bordered', type: 'boolean', defaultValue: 'true', description: '开启 1px 网格线及灰底标签列模式' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '控制单元格内边距与文字密度' },
            { prop: 'motion', type: "'none' | 'subtle' | 'smooth' | 'spring'", defaultValue: '全局继承', description: '透传到容器 data-motion 属性' },
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

        {/* 卡片 3：Collapse & Timeline */}
        <ComponentDocPreview
          title="Collapse & Timeline 折叠手风琴与事件时间轴"
          description="Collapse 基于原生 <details> 实现单选/多选展开，支持禁用项与右侧附加标签；Timeline 支持 5 种语义节点色调（含自定义图标）与四档尺寸刻度。"
          components={['Collapse', 'Timeline']}
          onResetKnobs={() => {
            setAccordion(true)
            setActiveKeys(['native'])
            setCtSize('sm')
            setCtMotion('smooth')
            setHighlightTone('success')
          }}
          controls={
            <>
              <KnobSwitch label="Collapse.accordion" checked={accordion} onChange={handleAccordionToggle} />
              <KnobSegmented label="size" value={ctSize} options={SIZE_OPTIONS} onChange={setCtSize} />
              <KnobSegmented label="motion" value={ctMotion} options={MOTION_OPTIONS} onChange={setCtMotion} />
              <KnobSegmented label="Timeline.tone" value={highlightTone} options={TONE_OPTIONS} onChange={setHighlightTone} />
            </>
          }
          code={`import { Collapse, Timeline } from '@abc-design/react'

<Collapse
  accordion={${accordion}}
  size="${ctSize}"
  motion="${ctMotion}"
  activeKeys={activeKeys}
  onChange={setActiveKeys}
  items={collapseItems}
/>

<Timeline
  size="${ctSize}"
  motion="${ctMotion}"
  items={[
    { title: '提交配额扩容工单', time: '10:15:22', tone: 'primary' },
    { title: '风控策略校验', time: '10:15:24', tone: '${highlightTone}' },
  ]}
/>`}
          apiRows={[
            { prop: 'Collapse.accordion', type: 'boolean', defaultValue: 'false', description: '手风琴互斥模式（开启时一次仅允许展开一项）' },
            { prop: 'Collapse.activeKeys / onChange', type: 'string[] / (keys) => void', description: '受控展开面板 key 数组及变更回调' },
            { prop: 'Collapse.size / motion', type: 'AbcSize / AbcMotionPreset', defaultValue: "'sm' / 全局", description: '折叠标题与正文密度及动效预设' },
            { prop: 'Timeline.items', type: 'TimelineItem[]', required: true, description: '时间线条目（title, time, description, tone, icon）' },
            { prop: 'TimelineItem.tone', type: "'primary' | 'success' | 'warning' | 'danger' | 'neutral'", defaultValue: "'primary'", description: '节点圆点语义色调' },
            { prop: 'Timeline.size / motion', type: 'AbcSize / AbcMotionPreset', defaultValue: "'sm' / 全局", description: '调整节点纵向间距与文字尺码' },
          ]}
        >
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[var(--abc-fg-muted)]">
                <span>Collapse（{accordion ? '互斥手风琴模式' : '自由多展开模式'}）</span>
                <span className="font-mono">activeKeys: [{activeKeys.join(', ') || 'none'}]</span>
              </div>
              <Collapse
                accordion={accordion}
                size={ctSize}
                motion={ctMotion}
                activeKeys={activeKeys}
                onChange={setActiveKeys}
                items={COLLAPSE_ITEMS}
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs text-[var(--abc-fg-muted)]">
                Timeline（第 2 节点动态演示 <code className="font-mono">{highlightTone}</code> 色调）
              </div>
              <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/40 p-4">
                <Timeline size={ctSize} motion={ctMotion} items={timelineItems} />
              </div>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default StructuredDisplayPage
