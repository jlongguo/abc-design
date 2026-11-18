import React, { useState } from 'react'
import {
  Button,
  Card,
  DescriptionList,
  ProTable,
  SplitDetailBody,
  SplitDetailFooter,
  SplitDetailHeader,
  SplitDetailLayout,
  SplitDetailPanel,
  SplitDetailTitle,
  StatusTag,
  abcToast,
  type AbcColumn,
} from '@abc-design/react'

interface DemoTenantRow {
  id: string
  name: string
  email: string
  status: 'active' | 'suspended'
  orgs: string
  sandboxes: number
  browserSeconds: number
  workflowSteps: number
}

const DEMO_ROWS: DemoTenantRow[] = [
  {
    id: 'cust_101',
    name: 'FullStack E2E 1794664629',
    email: 'e2e-fullstack-1794664629@example.test',
    status: 'active',
    orgs: '0 / 1',
    sandboxes: 2,
    browserSeconds: 1840,
    workflowSteps: 215,
  },
  {
    id: 'cust_102',
    name: 'Live Probe Customer',
    email: 'probe_42da5485c350@probe.invalid',
    status: 'active',
    orgs: '1 / 1',
    sandboxes: 0,
    browserSeconds: 420,
    workflowSteps: 48,
  },
  {
    id: 'cust_103',
    name: 'Enterprise Crawler Labs',
    email: 'ops@enterprise-crawler.io',
    status: 'suspended',
    orgs: '3 / 5',
    sandboxes: 4,
    browserSeconds: 9520,
    workflowSteps: 1290,
  },
]

const COLUMNS: AbcColumn<DemoTenantRow>[] = [
  {
    key: 'name',
    title: '客户名称',
    dataIndex: 'name',
    render: (_v, row) => (
      <div>
        <div className="font-medium text-[var(--abc-primary)]">{row.name}</div>
        <div className="text-[11px] text-[var(--abc-fg-muted)]">{row.email}</div>
      </div>
    ),
  },
  {
    key: 'status',
    title: '状态',
    dataIndex: 'status',
    render: (_v, row) => (
      <StatusTag tone={row.status === 'active' ? 'success' : 'danger'}>
        {row.status}
      </StatusTag>
    ),
  },
  {
    key: 'orgs',
    title: '团队组织数',
    dataIndex: 'orgs',
  },
  {
    key: 'sandboxes',
    title: '活跃沙箱',
    dataIndex: 'sandboxes',
  },
]

export interface SplitDetailShowcaseProps {
  panelWidth?: number
  expandable?: boolean
}

/**
 * 表格右侧内联挤压详情容器演练示例
 *
 * 演示无全局遮罩的主从行联动：点击任意表格行立即在右侧挤出可关闭详情卡片，
 * 支持单次点击不同行快速切换、上下条目导航、拖拽边缘调宽、沉浸全宽及一键关闭还原满宽。
 */
export const SplitDetailShowcase: React.FC<SplitDetailShowcaseProps> = ({
  panelWidth = 420,
  expandable = true,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [standaloneId, setStandaloneId] = useState<string | null>(DEMO_ROWS[0].id)

  const selectedIndex = DEMO_ROWS.findIndex((r) => r.id === selectedId)
  const selectedRow = selectedIndex >= 0 ? DEMO_ROWS[selectedIndex] : null
  const standaloneRow = DEMO_ROWS.find((r) => r.id === standaloneId) ?? null

  return (
    <div className="space-y-4">
      <Card
        title="方式 A1：ProTable 内置右侧挤压详情容器 (SplitDetailPanel)"
        subtitle="点击任意客户行，在表格右侧平滑挤出非阻塞详情面板；可直接点击左侧其它行快捷切换，点击右上角 X 关闭恢复全宽表格"
      >
      <ProTable<DemoTenantRow>
        storageKey="playground-split-detail-demo"
        columns={COLUMNS}
        dataSource={DEMO_ROWS}
        rowKey="id"
        hidePagination
        columnSettingsEnabled={false}
        selectedRowKey={selectedId}
        onRowClick={(row) => setSelectedId(row.id)}
        splitPanelOpen={Boolean(selectedRow)}
        splitPanelExpanded={expandable ? expanded : false}
        splitPanelWidth={panelWidth}
        splitPanel={
          selectedRow ? (
            <SplitDetailPanel
              title="客户详情"
              subtitle={`${selectedRow.id} · ${selectedRow.email}`}
              badge={
                <StatusTag tone={selectedRow.status === 'active' ? 'success' : 'danger'}>
                  {selectedRow.status}
                </StatusTag>
              }
              navigation={{
                current: selectedIndex + 1,
                total: DEMO_ROWS.length,
                onPrev: () => {
                  const prevIdx =
                    selectedIndex > 0 ? selectedIndex - 1 : DEMO_ROWS.length - 1
                  setSelectedId(DEMO_ROWS[prevIdx].id)
                },
                onNext: () => {
                  const nextIdx =
                    selectedIndex < DEMO_ROWS.length - 1 ? selectedIndex + 1 : 0
                  setSelectedId(DEMO_ROWS[nextIdx].id)
                },
              }}
              expandable={expandable}
              expanded={expandable ? expanded : false}
              onExpandedChange={setExpanded}
              onClose={() => {
                setExpanded(false)
                setSelectedId(null)
              }}
            >
              <div className="space-y-4">
                <div>
                  <div className="text-base font-semibold text-[var(--abc-fg)]">
                    {selectedRow.name}
                  </div>
                  <div className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">
                    点击左侧表格其他行无需先关闭，即可即时切换展示内容
                  </div>
                </div>
                <DescriptionList
                  columns={2}
                  bordered
                  items={[
                    { label: '浏览器时长 · 30天', value: `${selectedRow.browserSeconds}s` },
                    { label: '工作流步数 · 30天', value: String(selectedRow.workflowSteps) },
                    { label: '活跃沙箱数', value: String(selectedRow.sandboxes) },
                    { label: '团队组织配额', value: selectedRow.orgs },
                  ]}
                />
              </div>
            </SplitDetailPanel>
          ) : null
        }
      />
      </Card>

      <Card
        title="方式 A2：SplitDetailLayout + 复合子组件独立拼装（面向自定义卡片墙 / 树列表）"
        subtitle="不依赖 ProTable：直接用 SplitDetailLayout 包裹任意左侧主视图，右侧由 SplitDetailHeader / Title / Body / Footer 自由组合，同样支持左边缘拖拽调宽"
      >
        <SplitDetailLayout
          open={Boolean(standaloneRow)}
          panelWidth={panelWidth}
          panel={
            standaloneRow ? (
              <div className="flex flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs">
                <SplitDetailHeader>
                  <div>
                    <SplitDetailTitle>{standaloneRow.name}</SplitDetailTitle>
                    <p className="mt-0.5 font-mono text-[11px] text-[var(--abc-fg-muted)]">
                      {standaloneRow.id} · 复合槽位组装
                    </p>
                  </div>
                  <Button size="xs" variant="ghost" onClick={() => setStandaloneId(null)}>
                    收起
                  </Button>
                </SplitDetailHeader>
                <SplitDetailBody className="p-4 text-xs">
                  <DescriptionList
                    columns={1}
                    variant="divided"
                    items={[
                      { label: '联系邮箱', value: standaloneRow.email, mono: true },
                      { label: '活跃沙箱实例', value: `${standaloneRow.sandboxes} 台` },
                      { label: '累计执行步数', value: standaloneRow.workflowSteps.toLocaleString() },
                    ]}
                  />
                </SplitDetailBody>
                <SplitDetailFooter>
                  <span className="text-[11px] text-[var(--abc-fg-muted)]">支持拖拽左侧分割线调整宽度</span>
                  <Button
                    size="xs"
                    variant="primary"
                    onClick={() => abcToast.success(`已同步 ${standaloneRow.name} 配额快照`)}
                  >
                    同步快照
                  </Button>
                </SplitDetailFooter>
              </div>
            ) : null
          }
        >
          <div className="space-y-2">
            {DEMO_ROWS.map((row) => {
              const active = row.id === standaloneId
              return (
                <button
                  key={row.id}
                  type="button"
                  onClick={() => setStandaloneId(active ? null : row.id)}
                  className={`flex w-full items-center justify-between rounded-[var(--abc-radius-md)] border px-3.5 py-2.5 text-left text-xs transition-colors cursor-pointer ${
                    active
                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/50'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/40 hover:border-[var(--abc-primary)]/40'
                  }`}
                >
                  <div>
                    <div className="font-semibold text-[var(--abc-fg)]">{row.name}</div>
                    <div className="mt-0.5 font-mono text-[11px] text-[var(--abc-fg-muted)]">{row.email}</div>
                  </div>
                  <StatusTag tone={row.status === 'active' ? 'success' : 'danger'} size="xs">
                    {active ? '检视中' : row.status}
                  </StatusTag>
                </button>
              )
            })}
          </div>
        </SplitDetailLayout>
      </Card>
    </div>
  )
}
