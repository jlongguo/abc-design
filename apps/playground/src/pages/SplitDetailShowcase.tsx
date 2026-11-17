import React, { useState } from 'react'
import {
  Card,
  DescriptionList,
  ProTable,
  SplitDetailPanel,
  StatusTag,
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

  const selectedIndex = DEMO_ROWS.findIndex((r) => r.id === selectedId)
  const selectedRow = selectedIndex >= 0 ? DEMO_ROWS[selectedIndex] : null

  return (
    <Card
      title="表格行联动 · 右侧内联挤压详情容器 (SplitDetailLayout + SplitDetailPanel)"
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
  )
}
