import React, { useState } from 'react'
import {
  Button,
  Card,
  DescriptionList,
  Descriptions,
  DictTag,
  FilterPillGroup,
  FilterToolbar,
  InspectorPanel,
  PageContainer,
  ProTable,
  RadioGroup,
  ReasonedActionDialog,
  ReasonedActionDrawer,
  SearchInput,
  SplitInspectorLayout,
  StatusTag,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  useAbcConfig,
  type AbcColumn,
  type ProTableFieldSchema,
} from '@abc-design/react'
import { Eye, Lock, Plus, RefreshCw, Sliders } from 'lucide-react'

interface TenantNodeRecord {
  id: string
  tenantName: string
  domain: string
  region: string
  qpsLimit: number
  slaScore: number
  createdAt: string
  status: string
  remark?: string
}

const INITIAL_DATA: TenantNodeRecord[] = [
  {
    id: 'TN-1001',
    tenantName: '星河跨境云',
    domain: 'api.galaxy-cloud.io',
    region: '上海金融区',
    qpsLimit: 5000,
    slaScore: 99,
    createdAt: '2026-10-12',
    status: 'active',
    remark: '多活 BGP 骨干专线接入，已完成年度灾备切换演练。',
  },
  {
    id: 'TN-1002',
    tenantName: '深海智算中心',
    domain: 'api.deepcompute.cn',
    region: '北京核心区',
    qpsLimit: 12000,
    slaScore: 100,
    createdAt: '2026-10-25',
    status: 'active',
    remark: 'A800 算力推理网关，开启动态熔断限流保护。',
  },
  {
    id: 'TN-1003',
    tenantName: '极光零售数科',
    domain: 'api.aurora-retail.com',
    region: '深圳可用区',
    qpsLimit: 3200,
    slaScore: 86,
    createdAt: '2026-11-03',
    status: 'pending',
    remark: '泛域名 SSL 证书正在自动签发校准中。',
  },
  {
    id: 'TN-1004',
    tenantName: '远航物流枢纽',
    domain: 'api.voyage-hub.net',
    region: '上海金融区',
    qpsLimit: 1500,
    slaScore: 62,
    createdAt: '2026-11-11',
    status: 'suspended',
    remark: '触发月度流量包超额阈值，已自动限速保护。',
  },
]

export const ProTablePage: React.FC = () => {
  const { toast } = useAbcConfig()
  const [rows, setRows] = useState<TenantNodeRecord[]>(INITIAL_DATA)
  // 遵循大表单选型规范：大表单默认使用 drawer，全高贴合无视口裁切风险
  const [formContainer, setFormContainer] = useState<'dialog' | 'drawer'>('drawer')

  // FilterToolbar 状态
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterKeyword, setFilterKeyword] = useState<string>('')

  // SplitInspectorLayout & InspectorPanel 状态
  const [selectedRecord, setSelectedRecord] = useState<TenantNodeRecord | null>(INITIAL_DATA[0])

  // ReasonedAction 审计弹窗与抽屉状态
  const [actionRecord, setActionRecord] = useState<TenantNodeRecord | null>(null)
  const [freezeDialogOpen, setFreezeDialogOpen] = useState(false)
  const [quotaDrawerOpen, setQuotaDrawerOpen] = useState(false)

  // 根据 FilterToolbar 进行本地即时筛选联动
  const displayedRows = rows.filter((r) => {
    if (filterStatus !== 'all' && r.status !== filterStatus) return false
    if (filterKeyword.trim()) {
      const q = filterKeyword.toLowerCase()
      const matchName = r.tenantName.toLowerCase().includes(q)
      const matchDomain = r.domain.toLowerCase().includes(q)
      const matchId = r.id.toLowerCase().includes(q)
      if (!matchName && !matchDomain && !matchId) return false
    }
    return true
  })

  const columns: AbcColumn<TenantNodeRecord>[] = [
    {
      key: 'id',
      title: '租户实例 ID',
      width: 132,
      fixed: 'left',
      copyable: true,
    },
    {
      key: 'tenantName',
      title: '租户名称',
      sortable: true,
      filterable: true,
      linkToView: true,
      tooltip: '点击租户名称可直接打开只读详情抽查',
    },
    {
      key: 'domain',
      title: 'API 专属域名',
      filterable: true,
      copyable: true,
    },
    {
      key: 'region',
      title: '所属可用区',
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { label: '上海金融区', value: '上海金融区' },
        { label: '北京核心区', value: '北京核心区' },
        { label: '深圳可用区', value: '深圳可用区' },
      ],
    },
    {
      key: 'qpsLimit',
      title: '峰值 QPS 配额',
      align: 'right',
      sortable: true,
      valueType: 'number',
    },
    {
      key: 'slaScore',
      title: '健康度评分',
      width: 148,
      sortable: true,
      valueType: 'progress',
    },
    {
      key: 'createdAt',
      title: '开通日期',
      width: 120,
      sortable: true,
      valueType: 'date',
    },
    {
      key: 'status',
      title: '运行状态',
      width: 116,
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { label: '运行中', value: 'active' },
        { label: '待开通', value: 'pending' },
        { label: '已冻结', value: 'suspended' },
      ],
      render: (val) => <DictTag dictCode="tenant_status" value={val} />,
    },
  ]

  const fields: ProTableFieldSchema[] = [
    {
      name: 'tenantName',
      label: '租户名称',
      required: true,
      placeholder: '支持中文或拼音首字母如 xhkjy',
    },
    {
      name: 'domain',
      label: 'API 专属域名',
      required: true,
      placeholder: '如 api.example.com',
    },
    {
      name: 'region',
      label: '所属可用区',
      type: 'select',
      required: true,
      options: [
        { label: '上海金融区', value: '上海金融区' },
        { label: '北京核心区', value: '北京核心区' },
        { label: '深圳可用区', value: '深圳可用区' },
      ],
    },
    {
      name: 'status',
      label: '运行状态',
      type: 'select',
      required: true,
      defaultValue: 'active',
      options: [
        { label: '运行中', value: 'active' },
        { label: '待开通', value: 'pending' },
        { label: '已冻结', value: 'suspended' },
      ],
    },
    {
      name: 'createdAt',
      label: '开通日期',
      type: 'dateRange',
      hideInForm: true,
    },
    {
      name: 'qpsLimit',
      label: '峰值 QPS 配额',
      type: 'number',
      required: true,
      defaultValue: 5000,
      hideInSearch: true,
    },
    {
      name: 'slaScore',
      label: '初始健康度评分',
      type: 'number',
      defaultValue: 100,
      hideInSearch: true,
    },
    {
      name: 'remark',
      label: '网关调度备注',
      type: 'textarea',
      placeholder: '记录专线拓扑或安全白名单策略...',
      hideInSearch: true,
    },
  ]

  return (
    <PageContainer
      title="ProTable 企业级 CRUD 表格与 Pro 业务套件"
      subtitle="结合 FilterToolbar 筛选栏、ReasonedAction 强制审计、SplitInspectorLayout 主从检视面板与大小表单分流规范"
      extra={
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-[var(--abc-fg-secondary)]">
            <span>表单容器准则:</span>
            <RadioGroup
              variant="segmented"
              size="xs"
              value={formContainer}
              onChange={(v) => setFormContainer(v as 'dialog' | 'drawer')}
              options={[
                { label: '抽屉表单 (大表单推荐 Drawer)', value: 'drawer' },
                { label: '弹窗表单 (轻量 Dialog)', value: 'dialog' },
              ]}
            />
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        {/* 1. FilterToolbar 复合筛选工具栏 */}
        <FilterToolbar
          surface
          hasActiveFilters={filterStatus !== 'all' || Boolean(filterKeyword)}
          onReset={() => {
            setFilterStatus('all')
            setFilterKeyword('')
          }}
          search={
            <SearchInput
              placeholder="快速检索租户名称、域名或 TN 编号..."
              value={filterKeyword}
              onChange={(e) => setFilterKeyword(e.target.value)}
              onClear={() => setFilterKeyword('')}
              className="w-72"
            />
          }
          filters={
            <FilterPillGroup
              value={filterStatus}
              onValueChange={setFilterStatus}
              options={[
                { value: 'all', label: '全部状态', count: rows.length },
                {
                  value: 'active',
                  label: '运行中',
                  count: rows.filter((r) => r.status === 'active').length,
                },
                {
                  value: 'pending',
                  label: '待开通',
                  count: rows.filter((r) => r.status === 'pending').length,
                },
                {
                  value: 'suspended',
                  label: '已冻结',
                  count: rows.filter((r) => r.status === 'suspended').length,
                },
              ]}
            />
          }
          trailing={
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="xs"
                leftIcon={<RefreshCw className="h-3 w-3" />}
                onClick={() => toast.info('已重新同步网关拓扑状态')}
              >
                刷新
              </Button>
              <Button
                variant="primary"
                size="xs"
                leftIcon={<Plus className="h-3 w-3" />}
                onClick={() => {
                  toast.info('可通过下方 ProTable 新建按钮触发大表单抽屉')
                }}
              >
                新增网关
              </Button>
            </div>
          }
        />

        {/* 2. SplitInspectorLayout 主从检视分栏布局 */}
        <SplitInspectorLayout
          ratio="default"
          inspector={
            selectedRecord ? (
              <InspectorPanel
                title="网关节点实时属性检视"
                subtitle={`实例: ${selectedRecord.id}`}
                badge={<DictTag dictCode="tenant_status" value={selectedRecord.status} />}
                onClear={() => setSelectedRecord(null)}
                clearLabel="收起属性栏"
                headerActions={
                  <Button
                    size="xs"
                    variant="outline"
                    leftIcon={<Sliders className="h-3 w-3" />}
                    onClick={() => {
                      setActionRecord(selectedRecord)
                      setQuotaDrawerOpen(true)
                    }}
                  >
                    配置配额
                  </Button>
                }
              >
                <div className="space-y-4">
                  <DescriptionList
                    columns={1}
                    variant="cards"
                    items={[
                      { label: '签约企业', value: selectedRecord.tenantName },
                      { label: 'API 专属域名', value: selectedRecord.domain, copyValue: selectedRecord.domain },
                      { label: '接入可用区', value: selectedRecord.region },
                      { label: '峰值 QPS 限额', value: `${selectedRecord.qpsLimit.toLocaleString()} QPS` },
                      { label: 'SLA 健康度', value: `${selectedRecord.slaScore}%` },
                      { label: '开通时间', value: selectedRecord.createdAt },
                      { label: '拓扑与安全备注', value: selectedRecord.remark || '无附加说明', span: 'full' },
                    ]}
                  />

                  <div className="flex items-center gap-2 pt-2">
                    <Button
                      size="xs"
                      variant="danger"
                      block
                      leftIcon={<Lock className="h-3 w-3" />}
                      onClick={() => {
                        setActionRecord(selectedRecord)
                        setFreezeDialogOpen(true)
                      }}
                    >
                      强制冻结 (必填审计说明)
                    </Button>
                  </div>
                </div>
              </InspectorPanel>
            ) : (
              <Card variant="bordered" className="p-6 text-center text-xs text-[var(--abc-fg-muted)]">
                点击表格任意行可开启右侧属性检视面板
              </Card>
            )
          }
        >
          <ProTable<TenantNodeRecord>
            storageKey="playground_tenants_v3"
            title="多租户网关实例台账"
            columns={columns}
            fields={fields}
            dataSource={displayedRows}
            clientFilter
            showClientFilterSwitch
            viewable
            exportable
            formContainer={formContainer}
            expandable={{
              expandedRowRender: (record) => (
                <Descriptions
                  column={3}
                  items={[
                    { label: '实例唯一标识', children: record.id },
                    { label: '接入可用区', children: record.region },
                    { label: '开通日期', children: record.createdAt },
                    {
                      label: '网关运维备注',
                      span: 3,
                      children: record.remark || '暂无附加运维说明',
                    },
                  ]}
                />
              ),
            }}
            rowActions={[
              {
                key: 'inspect',
                label: '侧边检视',
                icon: <Eye className="h-3 w-3" />,
                onClick: (record) => setSelectedRecord(record),
              },
              {
                key: 'quota',
                label: '调配配额',
                icon: <Sliders className="h-3 w-3" />,
                onClick: (record) => {
                  setActionRecord(record)
                  setQuotaDrawerOpen(true)
                },
              },
              {
                key: 'freeze',
                label: '审计冻结',
                icon: <Lock className="h-3 w-3" />,
                onClick: (record) => {
                  setActionRecord(record)
                  setFreezeDialogOpen(true)
                },
              },
            ]}
            batchActions={[
              {
                key: 'batch_activate',
                label: '批量恢复运行',
                variant: 'primary',
                onClick: (keys) => {
                  setRows((prev) =>
                    prev.map((r) => (keys.includes(r.id) ? { ...r, status: 'active' } : r))
                  )
                  toast.success(`已批量恢复 ${keys.length} 个租户实例`)
                },
              },
            ]}
            onSaveRecord={(vals, editing) => {
              if (editing) {
                setRows((prev) =>
                  prev.map((r) => (r.id === editing.id ? ({ ...r, ...vals } as TenantNodeRecord) : r))
                )
              } else {
                const nextId = `TN-${1000 + rows.length + 1}`
                setRows((prev) => [
                  {
                    id: nextId,
                    createdAt: '2026-11-15',
                    slaScore: 100,
                    ...(vals as any),
                  },
                  ...prev,
                ])
              }
            }}
            onDeleteRecords={(keys) => {
              setRows((prev) => prev.filter((r) => !keys.includes(r.id)))
            }}
          />
        </SplitInspectorLayout>

        {/* 3. TablePrimitives 复合基础表格骨架对照 */}
        <Card
          variant="bordered"
          title="TablePrimitives 基础复合表格骨架原语"
          subtitle="零业务依赖的语义化复合标签（Table / TableHeader / TableBody / TableRow / TableHead / TableCell），适用于轻量数据列表与嵌入式明细排版。"
        >
          <Table scrollLabel="专网路由节点简表">
            <TableHeader sticky>
              <TableRow>
                <TableHead>链路编号</TableHead>
                <TableHead>接入点物理机房</TableHead>
                <TableHead>承载协议</TableHead>
                <TableHead>双向抖动</TableHead>
                <TableHead className="text-right">健康状态</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { no: 'LK-SH-01', dc: '上海外高桥金融机房 A 栋', proto: 'BGP EVPN', jitter: '0.45ms', status: 'normal' },
                { no: 'LK-BJ-02', dc: '北京亦庄云计算中心 B 区', proto: 'OTN 100G', jitter: '0.62ms', status: 'normal' },
                { no: 'LK-SZ-03', dc: '深圳光明前海数据节点', proto: 'IPSec VPN', jitter: '1.28ms', status: 'degraded' },
              ].map((row) => (
                <TableRow key={row.no}>
                  <TableCell className="font-mono font-medium">{row.no}</TableCell>
                  <TableCell>{row.dc}</TableCell>
                  <TableCell><span className="font-mono text-xs">{row.proto}</span></TableCell>
                  <TableCell className="font-mono text-xs text-[var(--abc-fg-secondary)]">{row.jitter}</TableCell>
                  <TableCell className="text-right">
                    <StatusTag tone={row.status === 'normal' ? 'success' : 'warning'} size="xs">
                      {row.status === 'normal' ? '连通优良' : '链路微降级'}
                    </StatusTag>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* ReasonedActionDialog 冻结审计原因弹窗 */}
      <ReasonedActionDialog
        open={freezeDialogOpen}
        onOpenChange={setFreezeDialogOpen}
        title={`冻结租户实例：${actionRecord?.tenantName ?? ''}`}
        description="冻结后网关将立即阻断外部 API 流量请求并向管理员发送告警通告，此操作需计入运维审计合规日志。"
        confirmLabel="确认执行冻结"
        destructive
        onConfirm={(reason) => {
          if (!actionRecord) return
          setRows((prev) =>
            prev.map((r) =>
              r.id === actionRecord.id ? { ...r, status: 'suspended', remark: `[冻结审计] ${reason}` } : r
            )
          )
          setFreezeDialogOpen(false)
          toast.warning(`已冻结租户 ${actionRecord.tenantName}，审计原因已归档！`)
        }}
      />

      {/* ReasonedActionDrawer 配额变更审计抽屉 */}
      <ReasonedActionDrawer
        open={quotaDrawerOpen}
        onClose={() => setQuotaDrawerOpen(false)}
        title={`调配配额与安全参数：${actionRecord?.tenantName ?? ''}`}
        description="支持在右侧全高大表单中细粒度修改 QPS 突发上限，强制要求填入变更依据。"
        confirmLabel="提交配额审批并生效"
        cascadeMode="adjacent"
        onConfirm={(reason) => {
          if (!actionRecord) return
          setQuotaDrawerOpen(false)
          toast.success(`配额变更工单已提交：${reason}`)
        }}
      >
        <div className="space-y-4 py-2">
          <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 text-xs">
            <div className="font-semibold text-[var(--abc-fg)] mb-1">当前实例：{actionRecord?.id}</div>
            <div className="text-[var(--abc-fg-muted)]">域名：{actionRecord?.domain}</div>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-semibold text-[var(--abc-fg)]">配额与频次参数调整</div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[var(--abc-fg-secondary)] block mb-1">QPS 限额</label>
                <input
                  type="number"
                  defaultValue={actionRecord?.qpsLimit ?? 5000}
                  className="w-full rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1.5 text-xs font-mono"
                />
              </div>
              <div>
                <label className="text-xs text-[var(--abc-fg-secondary)] block mb-1">突发宽容度</label>
                <input
                  type="text"
                  defaultValue="200%"
                  className="w-full rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1.5 text-xs font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      </ReasonedActionDrawer>
    </PageContainer>
  )
}
