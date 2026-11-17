import React, { useState } from 'react'
import {
  Button,
  Card,
  DescriptionList,
  Descriptions,
  DictTag,
  FilterPillGroup,
  FilterToolbar,
  Icon,
  InspectorPanel,
  PageContainer,
  ProTable,
  RadioGroup,
  ReasonedActionDialog,
  ReasonedActionDrawer,
  SearchInput,
  SplitInspectorLayout,
  StatusTag,
  Switch,
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

interface ApiMenuRouteItem {
  id: number
  menuName: string
  routePath: string
  deptId: string
  iconName: string
  status: string // '0' 启用 | '1' 停用（演示 Switch 字符串映射）
  orderNum: number
}

const INITIAL_API_MENUS: ApiMenuRouteItem[] = [
  {
    id: 101,
    menuName: '边缘网关控制台',
    routePath: '/edge/gateway',
    deptId: 'cloud',
    iconName: 'globe',
    status: '0',
    orderNum: 1,
  },
  {
    id: 102,
    menuName: '租户配额策略',
    routePath: '/tenant/quota',
    deptId: 'sec',
    iconName: 'shield',
    status: '0',
    orderNum: 2,
  },
  {
    id: 103,
    menuName: '审计归档任务',
    routePath: '/ops/audit-job',
    deptId: 'hq',
    iconName: 'layers',
    status: '1',
    orderNum: 3,
  },
]

const DEPT_TREE_OPTIONS = [
  {
    key: 'hq',
    title: '集团技术总部',
    children: [
      { key: 'cloud', title: '云原生网关事业部' },
      { key: 'sec', title: '零信任安全合规部' },
    ],
  },
]

export const ProTablePage: React.FC = () => {
  const { toast } = useAbcConfig()
  const [rows, setRows] = useState<TenantNodeRecord[]>(INITIAL_DATA)
  // 遵循大表单选型规范：大表单默认使用 drawer，全高贴合无视口裁切风险
  const [formContainer, setFormContainer] = useState<'dialog' | 'drawer'>('drawer')

  // API 驱动 + 列内派生演练台状态
  const [apiMenus, setApiMenus] = useState<ApiMenuRouteItem[]>(INITIAL_API_MENUS)
  const [headerFilterDemo, setHeaderFilterDemo] = useState(true)
  const [apiFormLayout, setApiFormLayout] = useState<'split' | 'grid'>('split')

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
                onClick={() => toast.info('可通过下方 ProTable 新建按钮触发大表单抽屉')}
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

        {/* 3. ProTable 全生命周期 API 驱动与列内 search/form 一体化派生演练台 */}
        <Card
          variant="bordered"
          title="ProTable API 全生命周期驱动 + 列内 search/form 派生 + 表头内联筛选调色盘"
          subtitle="无需拆写冗余 fields 数组：直接在 columns 上声明 search 与 form（含 Switch checkedValue='0' 字符串映射、TreeSelect 组织树、IconPicker 图标选择器、五区左右分栏 split 表单），并在工具栏体验表头内联筛选与 8 色筛选高亮色板。"
          extra={
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <Switch size="sm" checked={headerFilterDemo} onChange={setHeaderFilterDemo} />
                <span>表头内联筛选模式 (点击表头漏斗 + 右上角 8 色调色盘)</span>
              </label>
              <RadioGroup
                variant="segmented"
                size="xs"
                value={apiFormLayout}
                onChange={(v) => setApiFormLayout(v as 'split' | 'grid')}
                options={[
                  { label: '五区分栏表单 (split)', value: 'split' },
                  { label: '网格表单 (grid)', value: 'grid' },
                ]}
              />
            </div>
          }
        >
          <ProTable<ApiMenuRouteItem>
            tableId="playground_api_crud_parity_v1"
            title="动态权限路由注册表（模拟异步 API CRUD）"
            rowKey="id"
            headerFilterMode={headerFilterDemo}
            onHeaderFilterModeChange={setHeaderFilterDemo}
            showHeaderFilterToggle
            formLayout={apiFormLayout}
            viewable
            exportable
            autoRefreshConfig={{ show: true, defaultInterval: 30000 }}
            api={{
              list: async (query: Record<string, any>) => {
                const kw = String(query.menuName ?? '').trim().toLowerCase()
                const statusFilter = query.status !== undefined && query.status !== '' ? String(query.status) : ''
                const deptFilter = query.deptId ? String(query.deptId) : ''
                const filtered = apiMenus.filter((item) => {
                  if (kw && !item.menuName.toLowerCase().includes(kw)) return false
                  if (statusFilter && item.status !== statusFilter) return false
                  if (deptFilter && item.deptId !== deptFilter) return false
                  return true
                })
                return { list: filtered, total: filtered.length }
              },
              create: async (payload: Partial<ApiMenuRouteItem>) => {
                const created: ApiMenuRouteItem = {
                  id: Date.now(),
                  menuName: String(payload.menuName || '新注册菜单'),
                  routePath: String(payload.routePath || '/new/module'),
                  deptId: String(payload.deptId || 'hq'),
                  iconName: String(payload.iconName || 'layers'),
                  status: String(payload.status ?? '0'),
                  orderNum: Number(payload.orderNum ?? apiMenus.length + 1),
                }
                setApiMenus((prev) => [created, ...prev])
                return { code: 200, data: created }
              },
              update: async (payload: Partial<ApiMenuRouteItem>) => {
                setApiMenus((prev) =>
                  prev.map((item) =>
                    item.id === payload.id ? ({ ...item, ...payload } as ApiMenuRouteItem) : item
                  )
                )
                return { code: 200 }
              },
              delete: async (id: string | number) => {
                const ids = String(id)
                  .split(',')
                  .map((s) => Number(s))
                setApiMenus((prev) => prev.filter((item) => !ids.includes(item.id)))
                return { code: 200 }
              },
            }}
            columns={[
              {
                key: 'menuName',
                title: '菜单名称',
                sortable: true,
                linkToView: true,
                search: { placeholder: '搜索菜单名称' },
                form: { required: true, placeholder: '请输入权限菜单名称' },
              },
              {
                key: 'iconName',
                title: '菜单图标',
                width: 110,
                render: (val) => (
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs">
                    <Icon name={String(val || 'layers')} className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                    <span>{String(val || '-')}</span>
                  </span>
                ),
                form: { type: 'icon', label: '导航图标' },
              },
              {
                key: 'routePath',
                title: '前端路由路径',
                copyable: true,
                form: { required: true, placeholder: '如 /edge/gateway' },
              },
              {
                key: 'deptId',
                title: '归属技术部门',
                search: {
                  type: 'select',
                  options: [
                    { label: '集团技术总部', value: 'hq' },
                    { label: '云原生网关事业部', value: 'cloud' },
                    { label: '零信任安全合规部', value: 'sec' },
                  ],
                  placeholder: '按部门筛选',
                },
                form: {
                  type: 'treeSelect',
                  treeData: DEPT_TREE_OPTIONS,
                  required: true,
                },
                render: (val) => {
                  const map: Record<string, string> = {
                    hq: '集团技术总部',
                    cloud: '云原生网关事业部',
                    sec: '零信任安全合规部',
                  }
                  return map[String(val)] ?? String(val)
                },
              },
              {
                key: 'orderNum',
                title: '显示排序',
                width: 100,
                align: 'right',
                sortable: true,
                form: { type: 'number', defaultValue: 1 },
              },
              {
                key: 'status',
                title: '启用状态',
                width: 120,
                search: {
                  type: 'select',
                  options: [
                    { label: '正常启用 (0)', value: '0' },
                    { label: '维护停用 (1)', value: '1' },
                  ],
                },
                form: {
                  type: 'switch',
                  checkedValue: '0',
                  uncheckedValue: '1',
                  defaultValue: '0',
                  switchText: '启用 (status="0")',
                },
                render: (val) => (
                  <StatusTag tone={String(val) === '0' ? 'success' : 'neutral'} dot>
                    {String(val) === '0' ? '正常启用' : '已停用'}
                  </StatusTag>
                ),
              },
            ]}
          />
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
