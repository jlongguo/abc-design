import React, { useState } from 'react'
import {
  Breadcrumb,
  HubNavBar,
  PageContainer,
  StatusTag,
  Steps,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  abcToast,
  hubNavTabClassName,
  type AbcMotionPreset,
  type AbcSize,
  type StepStatus,
} from '@abc-design/react'
import { Cpu, KeyRound, Layers, ShieldCheck } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSwitch, KnobText } from '../../components/PropKnobs'

const HUB_TABS = [
  { key: 'customers', label: '客户账户' },
  { key: 'organizations', label: '组织架构' },
  { key: 'approvals', label: '配额审批 (3)' },
  { key: 'billing', label: '钱包流水' },
]

export const TabsStepsBreadcrumbPage: React.FC = () => {
  // 1. Tabs Knobs
  const [tabVariant, setTabVariant] = useState<'line' | 'segmented' | 'pills'>('line')
  const [tabSize, setTabSize] = useState<AbcSize>('md')
  const [tabMotion, setTabMotion] = useState<AbcMotionPreset>('smooth')
  const [showTabBadges, setShowTabBadges] = useState(true)
  const [disableLastTab, setDisableLastTab] = useState(false)

  // 2. Steps Knobs
  const [stepCurrent, setStepCurrent] = useState(1)
  const [stepDir, setStepDir] = useState<'horizontal' | 'vertical'>('horizontal')
  const [stepStatus, setStepStatus] = useState<StepStatus>('process')
  const [stepSize, setStepSize] = useState<AbcSize>('sm')

  // 3. Breadcrumb & HubNavBar Knobs
  const [bcSize, setBcSize] = useState<AbcSize>('sm')
  const [hubVariant, setHubVariant] = useState<'compact' | 'layered'>('layered')
  const [badgeTone, setBadgeTone] = useState<'indigo' | 'slate' | 'dark' | 'primary'>('indigo')
  const [badgeText, setBadgeText] = useState('CUSTOMER HUB')
  const [metaText, setMetaText] = useState('4 个治理域')
  const [activeHubTab, setActiveHubTab] = useState('customers')

  return (
    <PageContainer
      title="页签、步骤条与子导航"
      subtitle="覆盖声明式/复合式选项卡 Tabs、分步引导条 Steps、语义面包屑 Breadcrumb 以及多模块聚合导航条 HubNavBar。"
    >
      <div className="space-y-5">
        {/* 卡片 1: Tabs */}
        <ComponentDocPreview
          title="Tabs 选项卡（声明式 & 复合子组件）"
          components={['Tabs', 'TabsList', 'TabsTrigger', 'TabsContent']}
          description="支持 line（下划线）、segmented（分段胶囊）、pills（实心药丸）三种视觉模式，内置键盘左右箭头巡航及 hidden='until-found' 无障碍内容面板。"
          controls={
            <>
              <KnobSegmented
                label="variant"
                value={tabVariant}
                onChange={setTabVariant}
                options={[
                  { label: 'line', value: 'line' },
                  { label: 'segmented', value: 'segmented' },
                  { label: 'pills', value: 'pills' },
                ]}
              />
              <KnobSegmented
                label="size"
                value={tabSize}
                onChange={setTabSize}
                options={[
                  { label: 'xs', value: 'xs' },
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                ]}
              />
              <KnobSegmented
                label="motion"
                value={tabMotion}
                onChange={setTabMotion}
                options={[
                  { label: 'none', value: 'none' },
                  { label: 'subtle', value: 'subtle' },
                  { label: 'smooth', value: 'smooth' },
                  { label: 'spring', value: 'spring' },
                ]}
              />
              <KnobSwitch label="显示角标" checked={showTabBadges} onChange={setShowTabBadges} />
              <KnobSwitch label="禁用末项" checked={disableLastTab} onChange={setDisableLastTab} />
            </>
          }
          onResetKnobs={() => {
            setTabVariant('line')
            setTabSize('md')
            setTabMotion('smooth')
            setShowTabBadges(true)
            setDisableLastTab(false)
          }}
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@abc-design/react'

{/* 1. 声明式 items 模式 */}
<Tabs
  variant="${tabVariant}"
  size="${tabSize}"
  motion="${tabMotion}"
  items={[
    { key: 'nodes', label: '集群节点配置'${showTabBadges ? ', badge: 12' : ''}, children: <div>节点内容</div> },
    { key: 'vault', label: '零信任凭证'${showTabBadges ? ', badge: 3' : ''}, children: <div>凭证内容</div> },
    { key: 'audit', label: '审计开关', disabled: ${disableLastTab}, children: <div>审计内容</div> },
  ]}
/>

{/* 2. 复合子组件模式 */}
<Tabs defaultValue="summary" size="${tabSize}">
  <TabsList>
    <TabsTrigger value="summary">实例概览</TabsTrigger>
    <TabsTrigger value="metrics">实时监控</TabsTrigger>
  </TabsList>
  <TabsContent value="summary">...</TabsContent>
</Tabs>`}
          apiRows={[
            { prop: 'variant', type: "'line' | 'segmented' | 'pills'", defaultValue: "'line'", description: '选项卡外观样式变体' },
            { prop: 'size / motion', type: 'AbcSize / AbcMotionPreset', defaultValue: "'md' / 'smooth'", description: '内边距与文字规格及切换淡入动效' },
            { prop: 'items', type: 'TabItem[]', description: '声明式配置数组（含 key, label, icon, badge, disabled, children）' },
            { prop: 'TabsList / TabsTrigger / TabsContent', type: 'Compound', description: '不传 items 时使用的 Radix 风格复合子组件写法' },
          ]}
        >
          <div className="space-y-5">
            <Tabs
              variant={tabVariant}
              size={tabSize}
              motion={tabMotion}
              items={[
                {
                  key: 'nodes',
                  label: '集群节点配置',
                  icon: <Cpu className="h-3.5 w-3.5" />,
                  badge: showTabBadges ? 12 : undefined,
                  children: (
                    <div className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 text-xs text-[var(--abc-fg-secondary)]">
                      当前共有 12 台在线 Runner 节点，支持 Chromium 沙箱热扩容与区域亲和调度。
                    </div>
                  ),
                },
                {
                  key: 'vault',
                  label: '零信任凭证 Vault',
                  icon: <KeyRound className="h-3.5 w-3.5" />,
                  badge: showTabBadges ? 3 : undefined,
                  children: (
                    <div className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 text-xs text-[var(--abc-fg-secondary)]">
                      已纳管 3 组 Enclave 加密登录凭据，支持工作流步骤 vault_fill 零明文注入。
                    </div>
                  ),
                },
                {
                  key: 'audit',
                  label: '合规审计开关',
                  icon: <ShieldCheck className="h-3.5 w-3.5" />,
                  disabled: disableLastTab,
                  children: (
                    <div className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 text-xs text-[var(--abc-fg-secondary)]">
                      全链路出站请求均受 SSRF 规则保护，所有终止作业自动写回不可篡改计量日志。
                    </div>
                  ),
                },
              ]}
            />

            <div className="border-t border-[var(--abc-border)] pt-4">
              <div className="mb-2 text-[11px] font-medium text-[var(--abc-fg-muted)]">复合子组件模式演示（TabsList + TabsTrigger + TabsContent）：</div>
              <Tabs defaultValue="summary" size={tabSize} motion={tabMotion}>
                <TabsList>
                  <TabsTrigger value="summary">实例规格概览</TabsTrigger>
                  <TabsTrigger value="quota">配额限制策略</TabsTrigger>
                </TabsList>
                <TabsContent value="summary" className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 text-xs text-[var(--abc-fg-secondary)]">
                  复合模式适合需要在多个子组件之间自由布局或自定义 TabsList 位置的场景。
                </TabsContent>
                <TabsContent value="quota" className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 text-xs text-[var(--abc-fg-secondary)]">
                  单租户并发默认上限 64 会话，超时自动触发租约回收。
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2: Steps */}
        <ComponentDocPreview
          title="Steps 分步引导条"
          components={['Steps']}
          description="适用于审批流、部署向导与多阶段作业追踪；支持水平与垂直双布局、四态状态枚举（wait/process/finish/error）以及点击跳步交互。"
          controls={
            <>
              <KnobNumber label="current" value={stepCurrent} onChange={setStepCurrent} min={0} max={2} />
              <KnobSegmented
                label="direction"
                value={stepDir}
                onChange={setStepDir}
                options={[
                  { label: 'horizontal', value: 'horizontal' },
                  { label: 'vertical', value: 'vertical' },
                ]}
              />
              <KnobSegmented
                label="status"
                value={stepStatus}
                onChange={setStepStatus}
                options={[
                  { label: 'wait', value: 'wait' },
                  { label: 'process', value: 'process' },
                  { label: 'finish', value: 'finish' },
                  { label: 'error', value: 'error' },
                ]}
              />
              <KnobSegmented
                label="size"
                value={stepSize}
                onChange={setStepSize}
                options={[
                  { label: 'xs', value: 'xs' },
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                ]}
              />
            </>
          }
          onResetKnobs={() => {
            setStepCurrent(1)
            setStepDir('horizontal')
            setStepStatus('process')
            setStepSize('sm')
          }}
          code={`import { Steps } from '@abc-design/react'

<Steps
  current={${stepCurrent}}
  status="${stepStatus}"
  direction="${stepDir}"
  size="${stepSize}"
  onChange={setCurrent}
  items={[
    { title: '填写租户配额', description: '设定 QPS 与并发会话上限' },
    { title: '签发边缘证书', description: '自动配置 TLS 1.3 双向校验' },
    { title: '全网节点下发', description: '秒级热更新至所有网关' },
  ]}
/>`}
          apiRows={[
            { prop: 'items', type: 'StepItem[]', required: true, description: '步骤配置列表（title, description, icon, status, disabled）' },
            { prop: 'current', type: 'number', defaultValue: '0', description: '当前所在步骤索引（从 0 开始）' },
            { prop: 'status', type: "'wait' | 'process' | 'finish' | 'error'", defaultValue: "'process'", description: '当前步骤节点的语义状态（error 时渲染警示红圈）' },
            { prop: 'direction / size', type: "'horizontal' | 'vertical' / AbcSize", defaultValue: "'horizontal' / 'sm'", description: '排布方向与圆圈/标题尺寸档位' },
            { prop: 'onChange', type: '(nextIndex: number) => void', description: '传入后步骤支持点击跳转' },
          ]}
        >
          <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4">
            <Steps
              current={stepCurrent}
              status={stepStatus}
              direction={stepDir}
              size={stepSize}
              onChange={setStepCurrent}
              items={[
                { title: '填写租户配额', description: '设定 QPS 与并发会话上限' },
                { title: '签发边缘证书', description: '自动配置 TLS 1.3 双向校验' },
                { title: '全网节点下发', description: '秒级热更新至所有网关' },
              ]}
            />
          </div>
        </ComponentDocPreview>

        {/* 卡片 3: Breadcrumb & HubNavBar / hubNavTabClassName */}
        <ComponentDocPreview
          title="Breadcrumb & HubNavBar 多模块子导航"
          components={['Breadcrumb', 'HubNavBar', 'hubNavTabClassName']}
          description="Breadcrumb 通过 CSS ::before 注入读屏器静默分隔符；HubNavBar 为复杂后台提供分层带徽标的 Hub 子域切换栏，配合 hubNavTabClassName 快速着色。"
          controls={
            <>
              <KnobSegmented
                label="Breadcrumb.size"
                value={bcSize}
                onChange={setBcSize}
                options={[
                  { label: 'xs', value: 'xs' },
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                ]}
              />
              <KnobSegmented
                label="HubNavBar.variant"
                value={hubVariant}
                onChange={setHubVariant}
                options={[
                  { label: 'compact', value: 'compact' },
                  { label: 'layered', value: 'layered' },
                ]}
              />
              <KnobSegmented
                label="badgeTone"
                value={badgeTone}
                onChange={setBadgeTone}
                options={[
                  { label: 'indigo', value: 'indigo' },
                  { label: 'slate', value: 'slate' },
                  { label: 'dark', value: 'dark' },
                  { label: 'primary', value: 'primary' },
                ]}
              />
              <KnobText label="badge" value={badgeText} onChange={setBadgeText} widthClass="w-32" />
              <KnobText label="meta" value={metaText} onChange={setMetaText} widthClass="w-28" />
            </>
          }
          onResetKnobs={() => {
            setBcSize('sm')
            setHubVariant('layered')
            setBadgeTone('indigo')
            setBadgeText('CUSTOMER HUB')
            setMetaText('4 个治理域')
          }}
          code={`import { Breadcrumb, HubNavBar, hubNavTabClassName } from '@abc-design/react'

<Breadcrumb
  size="${bcSize}"
  items={[{ label: '多租户控制台', onClick: goHome }, { label: '网关治理' }, { label: '路由规则详情' }]}
/>

<HubNavBar
  variant="${hubVariant}"
  badge="${badgeText}"
  badgeTone="${badgeTone}"
  title="客户与商业化治理模块"
  meta="${metaText}"
>
  <button className={hubNavTabClassName(active, '${hubVariant}')}>客户账户</button>
</HubNavBar>`}
          apiRows={[
            { prop: 'Breadcrumb.items / size', type: 'BreadcrumbItem[] / AbcSize', description: '有序导航路径条目及文字字号，末项自动标记 aria-current="page"' },
            { prop: 'HubNavBar.variant', type: "'compact' | 'layered' | 'pill'", defaultValue: "'compact'", description: '单行毛玻璃胶囊或带分层顶部标题栏的两段式结构' },
            { prop: 'HubNavBar.badge / badgeTone', type: "ReactNode / 'indigo' | 'slate' | 'dark' | 'primary'", defaultValue: "'indigo'", description: 'layered 模式下左上角模块域徽标与色调' },
            { prop: 'HubNavBar.meta', type: 'ReactNode', description: '右侧展示当前激活域数量或上下文元信息胶囊' },
            { prop: 'hubNavTabClassName(active, variant)', type: '(active: boolean, variant?) => string', description: '生成与 HubNavBar 视觉风格对齐的子标签按钮样式类' },
          ]}
        >
          <div className="space-y-4">
            <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3.5">
              <Breadcrumb
                size={bcSize}
                items={[
                  { label: '多租户控制台', onClick: () => abcToast.info('返回多租户控制台') },
                  { label: '网关治理中心', onClick: () => abcToast.info('返回网关治理中心') },
                  { label: '灰度路由规则详情' },
                ]}
              />
            </div>

            <HubNavBar
              variant={hubVariant}
              badge={badgeText || undefined}
              badgeTone={badgeTone}
              title="客户支撑与商业治理模块"
              meta={metaText || undefined}
              navLabel="子模块导航"
            >
              {HUB_TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveHubTab(tab.key)}
                  className={hubNavTabClassName(activeHubTab === tab.key, hubVariant)}
                >
                  <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </HubNavBar>

            <div className="flex items-center gap-2 text-xs text-[var(--abc-fg-muted)]">
              <span>当前激活子模块：</span>
              <StatusTag tone="primary" size="xs">
                {HUB_TABS.find((t) => t.key === activeHubTab)?.label}
              </StatusTag>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
export default TabsStepsBreadcrumbPage
