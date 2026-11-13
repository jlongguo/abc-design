import React, { useState } from 'react'
import {
  Descriptions,
  DictTag,
  PageContainer,
  ProTable,
  RadioGroup,
  useAbcConfig,
  type AbcColumn,
  type ProTableFieldSchema,
} from '@abc-design/react'
import { ShieldCheck, Zap } from 'lucide-react'

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
  const [formContainer, setFormContainer] = useState<'dialog' | 'drawer'>('dialog')

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
      title="ProTable 企业级全功能 CRUD 数据表格"
      subtitle="支持可折叠多维搜索、表头右键菜单与单列气泡筛选、列左右冻结/列宽/筛选项持久化、展开详情行、CSV 导出与悬浮批量胶囊栏"
      extra={
        <RadioGroup
          variant="segmented"
          value={formContainer}
          onChange={(v) => setFormContainer(v as 'dialog' | 'drawer')}
          options={[
            { label: '弹窗表单 (Dialog)', value: 'dialog' },
            { label: '抽屉表单 (Drawer)', value: 'drawer' },
          ]}
        />
      }
    >
      <ProTable<TenantNodeRecord>
        storageKey="playground_tenants_v2"
        title="多租户网关实例台账"
        columns={columns}
        fields={fields}
        dataSource={rows}
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
            key: 'warmup',
            label: '节点预热',
            icon: <Zap className="h-3 w-3" />,
            onClick: (record) => toast.success(`已向 ${record.tenantName} 下发边缘缓存预热指令`),
          },
          {
            key: 'audit',
            label: '安全巡检',
            icon: <ShieldCheck className="h-3 w-3" />,
            onClick: (record) => toast.info(`${record.domain} TLS 1.3 与 WAF 策略校验通过`),
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
                createdAt: '2026-11-14',
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
    </PageContainer>
  )
}
