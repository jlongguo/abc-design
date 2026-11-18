import React, { useState } from 'react'
import {
  Button,
  DescriptionList,
  Descriptions,
  DictTag,
  InspectorPanel,
  ProTable,
  SplitInspectorLayout,
  useAbcConfig,
  type AbcColumn,
  type ProTableFieldSchema,
} from '@abc-design/react'
import { Eye, Lock } from 'lucide-react'
import { ComponentDocPreview } from '../../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../../components/PropKnobs'

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
  { id: 'TN-1001', tenantName: '星河跨境云', domain: 'api.galaxy-cloud.io', region: '上海金融区', qpsLimit: 5000, slaScore: 99, createdAt: '2026-10-12', status: 'active', remark: '多活 BGP 骨干专线接入，已完成年度灾备切换演练。' },
  { id: 'TN-1002', tenantName: '深海智算中心', domain: 'api.deepcompute.cn', region: '北京核心区', qpsLimit: 12000, slaScore: 100, createdAt: '2026-10-25', status: 'active', remark: 'A800 算力推理网关，开启动态熔断限流保护。' },
  { id: 'TN-1003', tenantName: '极光零售数科', domain: 'api.aurora-retail.com', region: '深圳可用区', qpsLimit: 3200, slaScore: 86, createdAt: '2026-11-03', status: 'pending', remark: '泛域名 SSL 证书正在自动签发校准中。' },
  { id: 'TN-1004', tenantName: '远航物流枢纽', domain: 'api.voyage-hub.net', region: '上海金融区', qpsLimit: 1500, slaScore: 62, createdAt: '2026-11-11', status: 'suspended', remark: '触发月度流量包超额阈值，已自动限速保护。' },
]

const FIELDS: ProTableFieldSchema[] = [
  { name: 'tenantName', label: '租户名称', required: true, placeholder: '支持中文或拼音首字母' },
  { name: 'domain', label: 'API 专属域名', required: true, placeholder: '如 api.example.com' },
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
  { name: 'qpsLimit', label: '峰值 QPS 配额', type: 'number', required: true, defaultValue: 5000, hideInSearch: true },
  { name: 'remark', label: '网关调度备注', type: 'textarea', hideInSearch: true },
]

export const ProTableMainShowcase: React.FC = () => {
  const { toast } = useAbcConfig()
  const [rows, setRows] = useState<TenantNodeRecord[]>(INITIAL_DATA)
  const [formContainer, setFormContainer] = useState<'drawer' | 'dialog'>('drawer')
  const [headerFilterMode, setHeaderFilterMode] = useState(false)
  const [viewable, setViewable] = useState(true)
  const [exportable, setExportable] = useState(true)
  const [selectedRecord, setSelectedRecord] = useState<TenantNodeRecord | null>(INITIAL_DATA[0])

  const columns: AbcColumn<TenantNodeRecord>[] = [
    { key: 'id', title: '租户实例 ID', width: 120, fixed: 'left', copyable: true },
    { key: 'tenantName', title: '租户名称', sortable: true, filterable: true, linkToView: true },
    { key: 'domain', title: '专属域名', filterable: true, copyable: true },
    {
      key: 'region',
      title: '可用区',
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { label: '上海金融区', value: '上海金融区' },
        { label: '北京核心区', value: '北京核心区' },
        { label: '深圳可用区', value: '深圳可用区' },
      ],
    },
    { key: 'qpsLimit', title: '峰值 QPS', align: 'right', sortable: true, valueType: 'number' },
    { key: 'slaScore', title: '健康度', width: 136, sortable: true, valueType: 'progress' },
    {
      key: 'status',
      title: '状态',
      width: 108,
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

  return (
    <ComponentDocPreview
      title="ProTable (别名 ProCrudTable / CrudTable) 全生命周期 CRUD 表格"
      components={['ProTable', 'ProCrudTable', 'CrudTable']}
      description="Schema 驱动全栈企业级表格：一行配置即可获得高级折叠搜索栏、新建/编辑抽屉大表单、只读详情抽查、列宽拖拽记忆、表头内联漏斗筛选、行展开子面板、批量悬浮栏与 CSV 导出。"
      onResetKnobs={() => {
        setFormContainer('drawer')
        setHeaderFilterMode(false)
        setViewable(true)
        setExportable(true)
      }}
      controls={
        <>
          <KnobSegmented
            label="formContainer"
            value={formContainer}
            options={[
              { label: 'drawer (大表单推荐)', value: 'drawer' },
              { label: 'dialog', value: 'dialog' },
            ]}
            onChange={setFormContainer}
          />
          <KnobSwitch label="headerFilterMode" checked={headerFilterMode} onChange={setHeaderFilterMode} />
          <KnobSwitch label="viewable" checked={viewable} onChange={setViewable} />
          <KnobSwitch label="exportable" checked={exportable} onChange={setExportable} />
        </>
      }
      code={`import { ProTable } from '@abc-design/react'

<ProTable
  storageKey="tenant_ledger_v1"
  title="多租户网关实例台账"
  columns={columns}
  fields={fields}
  dataSource={rows}
  clientFilter
  formContainer="${formContainer}"
  headerFilterMode={${headerFilterMode}}
  viewable={${viewable}}
  exportable={${exportable}}
  onSaveRecord={handleSave}
  onDeleteRecords={handleDelete}
/>`}
      apiRows={[
        { prop: 'columns / fields', type: 'AbcColumn<T>[] / ProTableFieldSchema[]', required: true, description: '列定义与查询/表单 Schema（亦支持直接在 columns 上内联声明 search 与 form）' },
        { prop: 'api / dataSource', type: 'ProTableApi<T> / T[]', description: '支持远程异步 API 自动管理分页查询，或受控本地 dataSource + clientFilter' },
        { prop: 'formContainer', type: "'drawer' | 'dialog'", defaultValue: "'dialog'", description: '新建与编辑表单承载容器（多字段大表单推荐使用 drawer）' },
        { prop: 'headerFilterMode', type: 'boolean', defaultValue: 'false', description: '将顶部查询区下沉融合进表头漏斗与 8 色筛选高亮调色盘' },
        { prop: 'emptyText / onEmptyReset', type: 'ReactNode / () => void', description: '筛选无结果时渲染自定义空态并提供一键清空筛选按钮' },
      ]}
    >
      <SplitInspectorLayout
        ratio="wide-master"
        inspector={
          <InspectorPanel
            title="节点属性检视"
            subtitle={selectedRecord ? `实例: ${selectedRecord.id}` : '点击行查看'}
            badge={selectedRecord ? <DictTag dictCode="tenant_status" value={selectedRecord.status} /> : undefined}
            isEmpty={!selectedRecord}
            showClear={Boolean(selectedRecord)}
            onClear={() => setSelectedRecord(null)}
          >
            {selectedRecord && (
              <div className="space-y-3">
                <DescriptionList
                  columns={1}
                  variant="cards"
                  items={[
                    { label: '签约企业', value: selectedRecord.tenantName },
                    { label: '专属域名', value: selectedRecord.domain, copyValue: selectedRecord.domain },
                    { label: '峰值配额', value: `${selectedRecord.qpsLimit.toLocaleString()} QPS` },
                    { label: '调度备注', value: selectedRecord.remark || '-' },
                  ]}
                />
                <Button
                  size="xs"
                  variant="danger"
                  block
                  leftIcon={<Lock className="h-3 w-3" />}
                  onClick={() => {
                    setRows((prev) =>
                      prev.map((r) => (r.id === selectedRecord.id ? { ...r, status: 'suspended' } : r))
                    )
                    toast.warning(`已冻结实例 ${selectedRecord.id}`)
                  }}
                >
                  模拟快捷冻结该节点
                </Button>
              </div>
            )}
          </InspectorPanel>
        }
      >
        <ProTable<TenantNodeRecord>
          storageKey="playground_tenants_v4"
          title="多租户网关实例台账"
          columns={columns}
          fields={FIELDS}
          dataSource={rows}
          clientFilter
          showClientFilterSwitch
          showHeaderFilterToggle
          headerFilterMode={headerFilterMode}
          onHeaderFilterModeChange={setHeaderFilterMode}
          viewable={viewable}
          exportable={exportable}
          formContainer={formContainer}
          expandable={{
            expandedRowRender: (record) => (
              <Descriptions
                column={3}
                items={[
                  { label: '实例标识', children: record.id },
                  { label: '开通日期', children: record.createdAt },
                  { label: '运维说明', children: record.remark || '暂无备注' },
                ]}
              />
            ),
          }}
          rowActions={[
            {
              key: 'inspect',
              label: '检视',
              icon: <Eye className="h-3 w-3" />,
              onClick: (record) => setSelectedRecord(record),
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
                { id: nextId, createdAt: '2026-11-18', slaScore: 100, ...(vals as any) },
                ...prev,
              ])
            }
          }}
          onDeleteRecords={(keys) => {
            setRows((prev) => prev.filter((r) => !keys.includes(r.id)))
          }}
        />
      </SplitInspectorLayout>
    </ComponentDocPreview>
  )
}
