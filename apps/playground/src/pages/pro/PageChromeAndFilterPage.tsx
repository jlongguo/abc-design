import React, { useState } from 'react'
import {
  Button,
  ContextQuickBar,
  DescriptionItem,
  DescriptionList,
  FilterPillGroup,
  FilterToolbar,
  PageContainer,
  PageHeader,
  PageSection,
  ProPageHeader,
  QuickSelectBar,
  SearchInput,
  Section,
  StatusBadge,
  StatusTag,
  WorkflowStepBanner,
  abcToast,
} from '@abc-design/react'
import { ArrowLeft, BookOpen, Play, RefreshCw, ShieldCheck } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch, KnobText } from '../../components/PropKnobs'

const RECENT_JOBS = [
  { key: 'job_01JX9A', label: <code>job_01JX9A</code>, code: 'SUCCEEDED', count: 14 },
  { key: 'job_01JX9B', label: <code>job_01JX9B</code>, code: 'RUNNING', count: 3 },
  { key: 'job_01JX9C', label: <code>job_01JX9C</code>, code: 'WAITING_HUMAN', count: 1 },
]

const DEMO_TENANTS = [
  { id: 't1', name: '星河跨境云', status: 'active', region: '华东-上海' },
  { id: 't2', name: '深海智算中心', status: 'active', region: '华北-北京' },
  { id: 't3', name: '极光零售数科', status: 'pending', region: '华南-深圳' },
  { id: 't4', name: '远航物流枢纽', status: 'suspended', region: '华东-上海' },
]

export const PageChromeAndFilterPage: React.FC<{ onJump?: (path: string) => void }> = ({ onJump }) => {
  // Card 01: PageHeader / ProPageHeader / PageSection Knobs
  const [eyebrow, setEyebrow] = useState('CONTROL PLANE · TENANT GOVERNANCE')
  const [noPadding, setNoPadding] = useState(false)
  const [showBackLink, setShowBackLink] = useState(true)
  const [guideOpen, setGuideOpen] = useState(false)

  // Card 02: FilterToolbar & FilterPillGroup (single + multiple)
  const [toolbarSurface, setToolbarSurface] = useState(true)
  const [pillMultiple, setPillMultiple] = useState(false)
  const [pillSize, setPillSize] = useState<'xs' | 'sm' | 'md'>('sm')
  const [showReset, setShowReset] = useState(true)
  const [singleStatus, setSingleStatus] = useState<string>('active')
  const [multiStatuses, setMultiStatuses] = useState<string[]>(['active', 'pending'])
  const [filterKeyword, setFilterKeyword] = useState('')

  // Card 03: QuickSelectBar
  const [selectedJobId, setSelectedJobId] = useState<string | null>('job_01JX9A')

  // Card 04: WorkflowStepBanner & ContextQuickBar
  const [bannerCollapsible, setBannerCollapsible] = useState(true)
  const [bannerBadge, setBannerBadge] = useState('标准作业流程 (SOP)')

  const filteredTenants = DEMO_TENANTS.filter((t) => {
    if (pillMultiple) {
      if (multiStatuses.length > 0 && !multiStatuses.includes(t.status)) return false
    } else if (singleStatus !== 'all' && t.status !== singleStatus) {
      return false
    }
    if (filterKeyword.trim() && !t.name.toLowerCase().includes(filterKeyword.toLowerCase())) return false
    return true
  })

  const hasFilters =
    (pillMultiple ? multiStatuses.length > 0 : singleStatus !== 'all') || Boolean(filterKeyword.trim())

  return (
    <PageContainer
      title="页面页头、多选筛选胶囊、快选条与工作流引导"
      subtitle="按职责拆分为 4 组独立组件画布：PageHeader/PageSection 页面骨架、支持单/多选的 FilterToolbar/FilterPillGroup、QuickSelectBar 与 SOP 引导条。"
      breadcrumbs={[{ label: '壳层布局与导航' }, { label: '页头、筛选与引导' }]}
    >
      <div className="space-y-6">
        {/* Card 01: PageHeader / ProPageHeader / PageSection (Section) */}
        <ComponentDocPreview
          title="PageHeader / ProPageHeader / PageSection (Section) 页面骨架原语"
          components={['PageHeader', 'ProPageHeader', 'PageSection', 'Section']}
          description="PageHeader 负责前导 eyebrow 眉标、回退导航与动作槽；ProPageHeader 内置右侧滑出分步操作指南抽屉 (guide)；PageSection / Section 提供统一圆角区块与零内边距直通模式。"
          onResetKnobs={() => {
            setEyebrow('CONTROL PLANE · TENANT GOVERNANCE')
            setNoPadding(false)
            setShowBackLink(true)
            setGuideOpen(false)
          }}
          controls={
            <>
              <KnobText label="eyebrow" value={eyebrow} onChange={setEyebrow} widthClass="w-56" />
              <KnobSwitch label="Section.noPadding" checked={noPadding} onChange={setNoPadding} />
              <KnobSwitch label="showBackLink" checked={showBackLink} onChange={setShowBackLink} />
              <Button
                size="xs"
                variant="secondary"
                icon={<BookOpen className="h-3 w-3" />}
                onClick={() => setGuideOpen(true)}
              >
                打开 ProPageHeader 说明抽屉
              </Button>
            </>
          }
          code={`import { PageHeader, ProPageHeader, PageSection, Section } from '@abc-design/react'

<PageHeader eyebrow="${eyebrow}" title="多租户运行时与商业化治理" actions={<Button variant="primary">发布策略</Button>} />
<ProPageHeader title="Webhook 投递监控" guideOpen={${guideOpen}} guide={{ badge: '运维指南', title: '排查步骤', steps: [...] }} />
<Section title="租户主控元数据" noPadding={${noPadding}}>{children}</Section>`}
          apiRows={[
            { prop: 'PageHeader.eyebrow / backLink', type: 'ReactNode / ReactNode', description: '页头顶部等宽眉标与返回上级链接槽位' },
            { prop: 'ProPageHeader.guide / guideOpen', type: 'ProPageGuide / boolean', description: '右侧滑出分步操作指南抽屉配置及受控显隐开关' },
            { prop: 'PageSection (Section).noPadding', type: 'boolean', defaultValue: 'false', description: '移除内容区内边距，适合嵌套通栏表格或代码块' },
          ]}
        >
          <div className="space-y-4">
            <PageHeader
              backLink={
                showBackLink ? (
                  <button
                    type="button"
                    onClick={() => onJump?.('/overview')}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-muted)] hover:text-[var(--abc-primary)] cursor-pointer"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    返回总览
                  </button>
                ) : undefined
              }
              eyebrow={eyebrow || undefined}
              title="多租户运行时与商业化治理"
              badge={<StatusBadge status="active" />}
              description="通过 PageHeader 统一主标题层级感，与右侧主操作动作组形成清晰的视觉锚点。"
              actions={
                <>
                  <Button size="sm" variant="secondary" icon={<RefreshCw className="h-3.5 w-3.5" />} onClick={() => abcToast.info('已刷新台账')}>
                    刷新台账
                  </Button>
                  <Button size="sm" variant="primary" icon={<Play className="h-3.5 w-3.5" />} onClick={() => abcToast.success('已触发策略下发')}>
                    发布治理策略
                  </Button>
                </>
              }
            />

            <ProPageHeader
              title="Webhook 投递审计 (ProPageHeader)"
              description="点击右侧「操作说明」按钮从右侧滑出结构化排障指引抽屉。"
              tags={<StatusTag tone="success">实时同步</StatusTag>}
              guideOpen={guideOpen}
              onGuideOpenChange={setGuideOpen}
              guide={{
                badge: '运维指南',
                title: '回调超时排查步骤',
                subtitle: '遵循以下三步定位生产 Webhook 投递异常',
                steps: [
                  { title: '检查目标端点签章校验', description: '确认 HMAC-SHA256 时间窗在 5 分钟内且密钥未轮换过期。' },
                  { title: '观察退避重试时间轴', description: '连续 5 次 5xx 响应将进入死信队列等待人工重放。' },
                ],
              }}
            />

            <PageSection
              title="PageSection / Section 区块容器示例"
              badge={<StatusTag tone="info">noPadding={String(noPadding)}</StatusTag>}
              noPadding={noPadding}
              className="mt-0"
            >
              <Section title="租户主控元数据" className="mt-0 border-0 shadow-none" noPadding={noPadding}>
                <DescriptionList columns={2} bordered>
                  <DescriptionItem label="路由节点" mono copyValue="cluster-apac-sg-01">cluster-apac-sg-01</DescriptionItem>
                  <DescriptionItem label="沙箱隔离等级">
                    <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-[var(--abc-success)]" />
                    gVisor + Egress Policy
                  </DescriptionItem>
                </DescriptionList>
              </Section>
            </PageSection>
          </div>
        </ComponentDocPreview>

        {/* Card 02: FilterToolbar & FilterPillGroup (新增 multiple 多选模式演示) */}
        <ComponentDocPreview
          title="FilterToolbar & FilterPillGroup 筛选工具栏与单/多选胶囊组"
          components={['FilterToolbar', 'FilterPillGroup']}
          description="FilterToolbar 统一容纳快速搜索框、过滤胶囊组与激活态重置按钮；FilterPillGroup 同时支持单选互斥模式与新增的 multiple 多选叠加模式（点击已选胶囊取消选中）。"
          onResetKnobs={() => {
            setToolbarSurface(true)
            setPillMultiple(false)
            setPillSize('sm')
            setShowReset(true)
            setSingleStatus('active')
            setMultiStatuses(['active', 'pending'])
            setFilterKeyword('')
          }}
          controls={
            <>
              <KnobSwitch label="FilterPillGroup.multiple (多选)" checked={pillMultiple} onChange={setPillMultiple} />
              <KnobSegmented
                label="size"
                value={pillSize}
                onChange={setPillSize}
                options={[
                  { label: 'xs', value: 'xs' },
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                ]}
              />
              <KnobSwitch label="surface" checked={toolbarSurface} onChange={setToolbarSurface} />
              <KnobSwitch label="showReset" checked={showReset} onChange={setShowReset} />
            </>
          }
          code={`import { FilterToolbar, FilterPillGroup, SearchInput } from '@abc-design/react'

<FilterToolbar
  surface={${toolbarSurface}}
  hasActiveFilters={${showReset && hasFilters}}
  onReset={handleReset}
  search={<SearchInput value={keyword} onChange={(e) => setKeyword(e.target.value)} />}
  filters={
    <FilterPillGroup${pillMultiple ? '\n      multiple' : ''}
      size="${pillSize}"
      value={${pillMultiple ? JSON.stringify(multiStatuses) : `'${singleStatus}'`}}
      onValueChange={${pillMultiple ? 'setMultiStatuses' : 'setSingleStatus'}}
      options={options}
    />
  }
/>`}
          apiRows={[
            { prop: 'FilterPillGroup.multiple', type: 'boolean', defaultValue: 'false', description: '开启多选模式后 value 接收 string[]，点击胶囊切换勾选并带 aria-pressed 语义' },
            { prop: 'FilterPillGroup.size', type: "'xs' | 'sm' | 'md'", defaultValue: "'sm'", description: '三档过滤胶囊高度与字号规格' },
            { prop: 'FilterToolbar.hasActiveFilters / onReset', type: 'boolean / () => void', description: '激活过滤条件时自动在右侧展示「重置筛选」动作' },
          ]}
        >
          <div className="space-y-3">
            <FilterToolbar
              surface={toolbarSurface}
              hasActiveFilters={showReset && hasFilters}
              onReset={
                showReset
                  ? () => {
                      setSingleStatus('all')
                      setMultiStatuses([])
                      setFilterKeyword('')
                      abcToast.info('已重置筛选条件')
                    }
                  : undefined
              }
              search={
                <SearchInput
                  placeholder="检索租户名称..."
                  value={filterKeyword}
                  onChange={(e) => setFilterKeyword(e.target.value)}
                  onClear={() => setFilterKeyword('')}
                  className="w-56"
                />
              }
              filters={
                pillMultiple ? (
                  <FilterPillGroup
                    multiple
                    size={pillSize}
                    value={multiStatuses}
                    onValueChange={setMultiStatuses}
                    options={[
                      { value: 'active', label: '运行中', count: 2 },
                      { value: 'pending', label: '待开通', count: 1 },
                      { value: 'suspended', label: '已冻结', count: 1 },
                    ]}
                  />
                ) : (
                  <FilterPillGroup
                    size={pillSize}
                    value={singleStatus}
                    onValueChange={setSingleStatus}
                    options={[
                      { value: 'all', label: '全部状态', count: DEMO_TENANTS.length },
                      { value: 'active', label: '运行中', count: 2 },
                      { value: 'pending', label: '待开通', count: 1 },
                      { value: 'suspended', label: '已冻结', count: 1 },
                    ]}
                  />
                )
              }
              trailing={<StatusTag tone="neutral">匹配 {filteredTenants.length} 条</StatusTag>}
            />

            <div className="flex flex-wrap gap-2">
              {filteredTenants.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center gap-2 rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-1.5 text-xs"
                >
                  <span className="font-medium text-[var(--abc-fg)]">{t.name}</span>
                  <span className="text-[var(--abc-fg-muted)]">{t.region}</span>
                  <StatusTag tone={t.status === 'active' ? 'success' : t.status === 'pending' ? 'warning' : 'danger'} size="xs">
                    {t.status}
                  </StatusTag>
                </div>
              ))}
            </div>
          </div>
        </ComponentDocPreview>

        {/* Card 03: QuickSelectBar（独立卡片） */}
        <ComponentDocPreview
          title="QuickSelectBar 近期任务/实体快捷切换条"
          components={['QuickSelectBar']}
          description="放置在监控日志页或产物详情页顶部，无需返回列表页即可在近期高频实体之间一键切换或清空过滤。"
          onResetKnobs={() => setSelectedJobId('job_01JX9A')}
          code={`import { QuickSelectBar } from '@abc-design/react'

<QuickSelectBar
  label="近期任务快捷切换"
  items={RECENT_JOBS}
  selectedId={${selectedJobId ? `'${selectedJobId}'` : 'null'}}
  onSelect={setSelectedJobId}
  onClear={() => setSelectedJobId(null)}
/>`}
          apiRows={[
            { prop: 'items', type: 'Array<{ key, label, code?, count? }>', required: true, description: '快捷切换实体集合' },
            { prop: 'selectedId / onSelect / onClear', type: 'string | null', description: '当前高亮实体键及切换、清空回调' },
          ]}
        >
          <QuickSelectBar
            label="近期任务快捷选择"
            allLabel="全部任务"
            selectedId={selectedJobId}
            onSelect={(id) => {
              setSelectedJobId(id)
              abcToast.info(id ? `已切换至 ${id}` : '已查看全部任务')
            }}
            onClear={() => setSelectedJobId(null)}
            items={RECENT_JOBS}
          />
        </ComponentDocPreview>

        {/* Card 04: WorkflowStepBanner & ContextQuickBar */}
        <ComponentDocPreview
          title="WorkflowStepBanner & ContextQuickBar 工作流指引与上下文联动条"
          components={['WorkflowStepBanner', 'ContextQuickBar']}
          description="WorkflowStepBanner 用于审批/排障多阶段标准作业流程引导（支持折叠开关）；ContextQuickBar 在跨模块排障时传递上下文标签与直达深链动作。"
          onResetKnobs={() => {
            setBannerCollapsible(true)
            setBannerBadge('标准作业流程 (SOP)')
          }}
          controls={
            <>
              <KnobSwitch label="collapsible" checked={bannerCollapsible} onChange={setBannerCollapsible} />
              <KnobText label="badge" value={bannerBadge} onChange={setBannerBadge} widthClass="w-44" />
            </>
          }
          code={`import { WorkflowStepBanner, ContextQuickBar } from '@abc-design/react'

<WorkflowStepBanner badge="${bannerBadge}" title="生产工单人工干预闭环指引" collapsible={${bannerCollapsible}} steps={steps} />
<ContextQuickBar badge="CTX · 诊断联动" title="已定位异常沙箱会话上下文" contextTags={tags} actions={actions} />`}
          apiRows={[
            { prop: 'WorkflowStepBanner.collapsible', type: 'boolean', defaultValue: 'false', description: '是否允许操作员折叠/展开指南步骤' },
            { prop: 'ContextQuickBar.contextTags / actions', type: 'Tag[] / Action[]', required: true, description: '上下文追踪徽章数组与直达跨页操作链接数组' },
          ]}
        >
          <div className="space-y-4">
            <WorkflowStepBanner
              badge={bannerBadge || 'SOP'}
              title="生产工单人工干预闭环指引"
              collapsible={bannerCollapsible}
              steps={[
                { step: '01', title: '冻结并发租赁', description: '核对租户配额持有锁与未完成结算记录，防止重入放行。' },
                { step: '02', title: '核对 HITL 重认证回执', description: '确认操作员在无头浏览器流窗口完成双因子核验。' },
                { step: '03', title: '恢复自动调度', description: '写入操作审计原由并释放租户熔断保护状态。' },
              ]}
            />
            <ContextQuickBar
              badge="CTX · 诊断联动"
              title="已定位异常沙箱会话上下文（与上方 QuickSelectBar 实时联动）"
              contextTags={[
                { key: 'org', label: 'Org', value: 'org_acme_01' },
                { key: 'job', label: 'Job', value: selectedJobId ?? '全部任务' },
              ]}
              actions={[
                { key: 'logs', href: '#top', label: '打开完整日志流 →' },
                { key: 'artifacts', href: '#top', label: '检视页面快照产物 →' },
              ]}
            />
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
export default PageChromeAndFilterPage
