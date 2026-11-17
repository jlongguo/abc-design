import React, { useState } from 'react'
import {
  Button,
  ContextQuickBar,
  DescriptionItem,
  DescriptionList,
  HubNavBar,
  PageContainer,
  PageHeader,
  PageSection,
  QuickSelectBar,
  RadioGroup,
  Section,
  StatusBadge,
  StatusTag,
  WorkflowStepBanner,
  abcToast,
  hubNavTabClassName,
} from '@abc-design/react'
import { ArrowLeft, Layers, Play, RefreshCw, ShieldCheck } from 'lucide-react'
import { ComponentDocPreview } from '../components/ComponentDocPreview'

const HUB_TABS = [
  { key: 'customers', label: '客户账户' },
  { key: 'organizations', label: '组织管理' },
  { key: 'approvals', label: '配额审批 (3)' },
  { key: 'billing', label: '钱包流水' },
]

const RECENT_JOBS = [
  { key: 'job_01JX9A', label: <code>job_01JX9A</code>, code: '· SUCCEEDED', count: 14 },
  { key: 'job_01JX9B', label: <code>job_01JX9B</code>, code: '· RUNNING', count: 3 },
  { key: 'job_01JX9C', label: <code>job_01JX9C</code>, code: '· WAITING_HUMAN', count: 1 },
]

/**
 * 页面壳层编排与工作流引导套件文档页
 * 集成 PageHeader、PageSection / Section、HubNavBar / hubNavTabClassName、
 * WorkflowStepBanner、ContextQuickBar、QuickSelectBar 与 DescriptionItem
 */
export const PageChromeAndWorkflowPage: React.FC<{ onJump?: (path: string) => void }> = ({
  onJump,
}) => {
  const [hubVariant, setHubVariant] = useState<'compact' | 'layered'>('layered')
  const [activeHubTab, setActiveHubTab] = useState('customers')
  const [selectedJobId, setSelectedJobId] = useState<string | null>('job_01JX9A')
  const [noPaddingSection, setNoPaddingSection] = useState(false)

  return (
    <PageContainer
      title="页面壳层编排与工作流引导套件"
      subtitle="统一收敛中后台页面页头、Hub 多域子导航、区块卡片容器、多步骤指引横幅与跨页面上下文联动条。"
      breadcrumbs={[{ label: 'Pro 企业套件与模板' }, { label: '页面编排与引导套件' }]}
    >
      <div className="space-y-5">
        {/* 1. PageHeader / HubNavBar / PageSection */}
        <ComponentDocPreview
          title="PageHeader / HubNavBar / PageSection (Section) 页面骨架原语"
          description="PageHeader 提供面包屑回退链路、eyebrow 前导眉标、主标题徽章与右侧操作槽；HubNavBar 支持紧凑与层级双形态子导航栏。"
          controls={
            <>
              <RadioGroup
                variant="segmented"
                value={hubVariant}
                onChange={(v) => setHubVariant(v as 'compact' | 'layered')}
                options={[
                  { label: 'layered (分层带徽标)', value: 'layered' },
                  { label: 'compact (玻璃胶囊)', value: 'compact' },
                ]}
              />
              <button
                type="button"
                onClick={() => setNoPaddingSection((v) => !v)}
                className={`rounded px-2.5 py-0.5 text-xs border cursor-pointer ${
                  noPaddingSection
                    ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                    : 'border-[var(--abc-border)]'
                }`}
              >
                PageSection noPadding: {String(noPaddingSection)}
              </button>
            </>
          }
          code={`import { PageHeader, HubNavBar, hubNavTabClassName, PageSection, Section, DescriptionList, DescriptionItem } from '@abc-design/react'

<PageHeader
  eyebrow="CONTROL PLANE · GOVERNANCE"
  title="多租户运行治理中心"
  badge={<StatusBadge status="active" />}
  actions={<Button variant="primary">下发策略</Button>}
/>
<HubNavBar variant="${hubVariant}" badge="CUSTOMER HUB" title="客户与商业化域">
  <button className={hubNavTabClassName(active, '${hubVariant}')}>客户账户</button>
</HubNavBar>
<Section title="上下文详情">
  <DescriptionList><DescriptionItem label="集群状态" mono>schedulable</DescriptionItem></DescriptionList>
</Section>`}
          apiRows={[
            { prop: 'PageHeader.eyebrow / backLink / actions', type: 'ReactNode', description: '页头眉标、返回链接与右侧操作按钮槽位' },
            { prop: 'HubNavBar.variant', type: "'compact' | 'layered'", defaultValue: "'compact'", description: '玻璃胶囊单行或带分层徽标/元信息的两行结构' },
            { prop: 'PageSection (Section).noPadding', type: 'boolean', defaultValue: 'false', description: '适合内置整幅表格或全宽预览的零内边距卡片容器' },
            { prop: 'DescriptionItem', type: 'Props', description: 'DescriptionList 语义子节点写法，自带复制与等宽支持' },
          ]}
        >
          <div className="space-y-4">
            <PageHeader
              backLink={
                <button
                  type="button"
                  onClick={() => onJump?.('/overview')}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-muted)] hover:text-[var(--abc-primary)] cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  返回总览概览
                </button>
              }
              eyebrow="CONTROL PLANE · TENANT GOVERNANCE"
              title="多租户运行时与商业化治理"
              badge={<StatusBadge status="active" />}
              description="通过 PageHeader + HubNavBar + PageSection 组合快速搭建统一层级感与响应式中后台业务工作台。"
              actions={
                <>
                  <Button
                    size="sm"
                    variant="secondary"
                    icon={<RefreshCw className="h-3.5 w-3.5" />}
                    onClick={() => abcToast.info('已刷新工作台状态')}
                  >
                    刷新台账
                  </Button>
                  <Button
                    size="sm"
                    variant="primary"
                    icon={<Play className="h-3.5 w-3.5" />}
                    onClick={() => abcToast.success('已触发策略下发')}
                  >
                    发布治理策略
                  </Button>
                </>
              }
            />

            <HubNavBar
              variant={hubVariant}
              badge="CUSTOMER HUB"
              badgeTone="indigo"
              title="客户支撑与商业治理模块"
              meta={`当前激活: ${activeHubTab}`}
              navLabel="演示模块子导航"
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

            <PageSection
              title={`Section 区块示例 · ${HUB_TABS.find((t) => t.key === activeHubTab)?.label}`}
              badge={<StatusTag tone="info">声明式 DescriptionItem 子节点</StatusTag>}
              description="展示与 PageSection 等效导出的 Section 别名及 DescriptionList 子节点组合语法。"
              noPadding={noPaddingSection}
              action={
                <Button size="xs" variant="outline" onClick={() => setNoPaddingSection((v) => !v)}>
                  切换 Padding
                </Button>
              }
            >
              <Section title="租户主控元数据" className="mt-0 border-0 shadow-none" noPadding={noPaddingSection}>
                <DescriptionList columns={2} bordered>
                  <DescriptionItem label="路由节点" mono copyValue="cluster-apac-sg-01">
                    cluster-apac-sg-01
                  </DescriptionItem>
                  <DescriptionItem label="沙箱隔离等级">
                    <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-[var(--abc-success)]" />
                    gVisor + Egress Policy
                  </DescriptionItem>
                </DescriptionList>
              </Section>
            </PageSection>
          </div>
        </ComponentDocPreview>

        {/* 2. WorkflowStepBanner / ContextQuickBar / QuickSelectBar */}
        <ComponentDocPreview
          title="WorkflowStepBanner / ContextQuickBar / QuickSelectBar 工作流引导与上下文快捷条"
          description="专用于多阶段人工审批/排障指南（支持折叠收起）、跨模块深链上下文传参条，以及页面顶部近期作业/产物快捷切换栏。"
          code={`import { WorkflowStepBanner, ContextQuickBar, QuickSelectBar } from '@abc-design/react'

<WorkflowStepBanner
  badge="运维标准 SOP"
  title="受控生产发布三步闭环"
  collapsible
  steps={[
    { step: 1, title: '健康检查', description: '确认全部 Runner 心跳在线' },
    { step: 2, title: '灰度验证', description: '观察 5 分钟错误率 < 0.1%' },
    { step: 3, title: '全量切流', description: '归档发布工单与审计回执' },
  ]}
/>
<ContextQuickBar badge="上下文关联" title="当前正在检查 Job" contextTags={[{ label: 'Job', value: 'job_01JX9A' }]} actions={[{ href: '#logs', label: '查看日志' }]} />
<QuickSelectBar label="近期任务快捷切换" items={items} selectedId={selectedJobId} onSelect={setSelectedJobId} onClear={() => setSelectedJobId(null)} />`}
          apiRows={[
            { prop: 'WorkflowStepBanner.collapsible', type: 'boolean', defaultValue: 'false', description: '允许操作员折叠/展开指南步骤' },
            { prop: 'ContextQuickBar.contextTags / actions', type: 'Tag[] / Action[]', required: true, description: '上下文追踪徽章与跳转链接列表' },
            { prop: 'QuickSelectBar.selectedId / onSelect / onClear', type: 'string | null', description: '快捷胶囊单选与一键清空' },
          ]}
        >
          <div className="space-y-4">
            <WorkflowStepBanner
              badge="标准作业流程 (SOP)"
              title="生产工单人工干预闭环指引"
              collapsible
              steps={[
                {
                  step: '01',
                  title: '冻结并发租赁',
                  description: '核对租户配额持有锁与未完成结算记录，防止重入放行。',
                },
                {
                  step: '02',
                  title: '核对 HITL 重认证回执',
                  description: '确认操作员在无头浏览器流窗口完成双因子核验。',
                },
                {
                  step: '03',
                  title: '恢复自动调度',
                  description: '写入操作审计原由并释放租户熔断保护状态。',
                },
              ]}
            />

            <ContextQuickBar
              badge="CTX · 诊断联动"
              title="已定位异常沙箱会话上下文"
              contextTags={[
                { key: 'org', label: 'Org', value: 'org_acme_01' },
                { key: 'job', label: 'Job', value: selectedJobId ?? '全部任务' },
              ]}
              actions={[
                { key: 'pro-table', href: '#top', label: '打开完整日志流 →' },
                { key: 'artifacts', href: '#top', label: '检视页面快照产物 →' },
              ]}
            />

            <QuickSelectBar
              label="近期任务快捷选择栏"
              allLabel="全部任务"
              selectedId={selectedJobId}
              onSelect={(id) => {
                setSelectedJobId(id)
                abcToast.info(id ? `已切换至 ${id}` : '已查看全部任务')
              }}
              onClear={() => setSelectedJobId(null)}
              headerAction={
                <span className="text-[11px] text-[var(--abc-fg-muted)]">支持一键清空</span>
              }
              items={RECENT_JOBS}
            />
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
