import React, { useState } from 'react'
import { AbcChart, StatCard } from '@abc-design/charts'
import {
  Alert,
  Button,
  Card,
  Descriptions,
  Drawer,
  FormField,
  Input,
  InputNumber,
  PageContainer,
  ProTable,
  RadioGroup,
  Result,
  Select,
  StatusTag,
  Steps,
  Switch,
  TableCore,
  Tabs,
  TagInput,
  Textarea,
  Timeline,
  useAbcConfig,
  type AbcColumn,
  type ProTableFieldSchema,
} from '@abc-design/react'
import {
  Activity,
  Check,
  Coins,
  Copy,
  Eye,
  ShieldAlert,
  TrendingUp,
  Users,
} from 'lucide-react'

interface VipTenantRow {
  id: string
  tenantName: string
  plan: string
  mrr: number
  sla: string
  status: 'active' | 'warning' | 'frozen'
  owner: string
  createdAt: string
}

const INITIAL_TENANTS: VipTenantRow[] = [
  {
    id: 'TNT-1001',
    tenantName: '星海跨境供应链集团',
    plan: '旗舰集群版',
    mrr: 68000,
    sla: '99.99%',
    status: 'active',
    owner: '林哲远',
    createdAt: '2026-03-12',
  },
  {
    id: 'TNT-1002',
    tenantName: '云鲸智能制造股份',
    plan: '企业独享版',
    mrr: 42000,
    sla: '99.95%',
    status: 'active',
    owner: '陈思琪',
    createdAt: '2026-05-19',
  },
  {
    id: 'TNT-1003',
    tenantName: '极光数科清分中心',
    plan: '企业独享版',
    mrr: 35000,
    sla: '99.82%',
    status: 'warning',
    owner: '周牧野',
    createdAt: '2026-07-04',
  },
  {
    id: 'TNT-1004',
    tenantName: '瀚海医疗影像云',
    plan: '标准专业版',
    mrr: 16800,
    sla: '99.96%',
    status: 'active',
    owner: '唐婉清',
    createdAt: '2026-09-21',
  },
]

const TEMPLATE_SNIPPETS: Record<string, string> = {
  dashboard: `import { AbcChart, StatCard } from '@abc-design/charts'
import { Card, PageContainer, TableCore, StatusTag } from '@abc-design/react'

export default function AnalyticsDashboardPage() {
  return (
    <PageContainer title="SaaS 经营分析看板" subtitle="多维度实时汇总核心营收、活跃租户与大客户履约健康度">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="月度经常性收入 (MRR)" prefix="¥" value="1,628,400" trend={16.4} />
        <StatCard title="净收入留存率 (NDR)" value="118.5" suffix="%" trend={3.2} />
        <StatCard title="活跃付费租户" value="426" suffix="家" trend={8.1} />
        <StatCard title="工单平均首响耗时" value="4.2" suffix="分钟" trend={-18.0} />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card title="近 7 日清分营收趋势" className="lg:col-span-2">
          <AbcChart height={280} option={{ xAxis: { type: 'category', data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] }, yAxis: { type: 'value' }, series: [{ type: 'line', smooth: true, areaStyle: { opacity: 0.15 }, data: [120, 138, 162, 154, 189, 210, 198] }] }} />
        </Card>
        <Card title="版本订阅收入占比">
          <AbcChart height={280} option={{ series: [{ type: 'pie', radius: ['45%', '72%'], data: [{ name: '旗舰版', value: 68 }, { name: '企业版', value: 24 }, { name: '标准版', value: 8 }] }] }} />
        </Card>
      </div>
    </PageContainer>
  )
}`,
  crud: `import { PageContainer, ProTable, StatusTag } from '@abc-design/react'

export default function TenantCrudPage() {
  return (
    <PageContainer title="企业租户全生命周期管理">
      <ProTable
        storageKey="tpl_vip_tenants"
        title="签约企业租户列表"
        viewable
        showClientFilterSwitch
        formContainer="drawer"
        columns={[
          { key: 'id', title: '租户编号', dataIndex: 'id', width: 120 },
          { key: 'tenantName', title: '企业名称', dataIndex: 'tenantName', sortable: true },
          { key: 'mrr', title: '月度订阅额', dataIndex: 'mrr', align: 'right', sortable: true },
        ]}
        fields={[
          { name: 'tenantName', label: '企业名称', required: true },
          { name: 'plan', label: '订阅版本', type: 'select', options: [{ label: '旗舰集群版', value: '旗舰集群版' }] },
        ]}
        request={async ({ current, pageSize, filters }) => ({ data: [], total: 0 })}
        onSaveRecord={async (values, editing) => { /* 调用新增/更新接口 */ }}
        onDeleteRecords={async (keys) => { /* 调用批量删除接口 */ }}
      />
    </PageContainer>
  )
}`,
  wizard: `import { useState } from 'react'
import { Button, Card, FormField, Input, PageContainer, Result, Select, Steps } from '@abc-design/react'

export default function TenantProvisionWizardPage() {
  const [step, setStep] = useState(0)
  return (
    <PageContainer title="多租户专属集群开通向导">
      <Card>
        <Steps
          current={step}
          items={[
            { title: '主体资质核验', description: '录入企业名称与专属域名' },
            { title: '算力与配额规格', description: '配置数据库与网关限流' },
            { title: '交付完成', description: '自动下发初始化管理员凭证' },
          ]}
        />
      </Card>
    </PageContainer>
  )
}`,
  audit: `import { useState } from 'react'
import { Button, Descriptions, Drawer, PageContainer, Timeline } from '@abc-design/react'

export default function WithdrawalAuditDetailPage() {
  const [detailOpen, setDetailOpen] = useState(false)
  const [secondReviewOpen, setSecondReviewOpen] = useState(false)
  return (
    <PageContainer title="主从详情与两级叠层风控审计抽屉">
      <Button onClick={() => setDetailOpen(true)}>查看提现工单详情 (L1)</Button>
      <Drawer open={detailOpen} onClose={() => setDetailOpen(false)} title="提现单 #WD-99201 详情" size="lg">
        <Descriptions bordered column={2} items={[{ label: '申请商户', children: '星海跨境' }]} />
        <Button onClick={() => setSecondReviewOpen(true)}>调阅底层风控命中流水 (L2 叠层抽屉)</Button>
      </Drawer>
      <Drawer open={secondReviewOpen} onClose={() => setSecondReviewOpen(false)} title="风控规则引擎明细" size="md">
        <Timeline items={[{ title: '反洗钱名单核验通过', tone: 'success' }]} />
      </Drawer>
    </PageContainer>
  )
}`,
  exception: `import { Button, PageContainer, Result } from '@abc-design/react'

export default function ForbiddenPage() {
  return (
    <PageContainer>
      <Result
        status="403"
        title="403 暂无当前数据域访问权限"
        subTitle="您的账号尚未绑定『财务清结算复核员』角色，请联系租户超级管理员授权。"
        extra={<Button variant="primary">返回工作台首页</Button>}
      />
    </PageContainer>
  )
}`,
}

export const TemplatesPage: React.FC = () => {
  const { toast } = useAbcConfig()
  const [activeTpl, setActiveTpl] = useState('dashboard')
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  // Template 2: CRUD state
  const [tenants, setTenants] = useState<VipTenantRow[]>(INITIAL_TENANTS)
  const [crudFormContainer, setCrudFormContainer] = useState<'dialog' | 'drawer'>('drawer')

  // Template 3: Wizard state
  const [wizardStep, setWizardStep] = useState(0)
  const [wizardForm, setWizardForm] = useState({
    company: '星辰智算科技有限公司',
    subdomain: 'xingchen-ai',
    region: 'cn-east-hangzhou',
    maxQps: 5000,
    tags: ['独享RDS', '高防IP'],
    enableWaf: true,
    remark: '签约年框 VIP 客户，需开启双活容灾。',
  })

  // Template 4: Master-Detail + L1/L2 Stacked Drawer
  const [l1DrawerOpen, setL1DrawerOpen] = useState(false)
  const [l2DrawerOpen, setL2DrawerOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<VipTenantRow>(INITIAL_TENANTS[0])

  // Template 5: Exception status switcher
  const [exceptionCode, setExceptionCode] = useState<'403' | '404' | '500'>('403')

  const handleCopyTemplate = async () => {
    const code = TEMPLATE_SNIPPETS[activeTpl] ?? ''
    if (!code) return
    await navigator.clipboard.writeText(code)
    setCopiedKey(activeTpl)
    toast.success('已复制当前业务页面模板骨架代码')
    window.setTimeout(() => setCopiedKey(null), 1600)
  }

  const crudColumns: AbcColumn<VipTenantRow>[] = [
    { key: 'id', title: '租户编号', dataIndex: 'id', width: 120 },
    { key: 'tenantName', title: '企业名称', dataIndex: 'tenantName', sortable: true },
    { key: 'plan', title: '订阅版本', dataIndex: 'plan', width: 130 },
    {
      key: 'mrr',
      title: '月度订阅额 (MRR)',
      dataIndex: 'mrr',
      align: 'right',
      sortable: true,
      render: (v) => <span className="font-mono font-semibold">¥{Number(v).toLocaleString()}</span>,
    },
    { key: 'sla', title: '本月 SLA', dataIndex: 'sla', width: 105, align: 'right' },
    {
      key: 'status',
      title: '运行状态',
      dataIndex: 'status',
      width: 110,
      render: (v) => {
        const map = {
          active: { tone: 'success' as const, label: '正常履约' },
          warning: { tone: 'warning' as const, label: '负载预警' },
          frozen: { tone: 'danger' as const, label: '欠费冻结' },
        }
        const item = map[v as VipTenantRow['status']] ?? map.active
        return (
          <StatusTag tone={item.tone} dot>
            {item.label}
          </StatusTag>
        )
      },
    },
    { key: 'owner', title: '客户成功经理', dataIndex: 'owner', width: 120 },
  ]

  const crudFields: ProTableFieldSchema[] = [
    { name: 'tenantName', label: '企业名称', required: true, placeholder: '请输入签约企业全称' },
    {
      name: 'plan',
      label: '订阅版本',
      type: 'select',
      required: true,
      options: [
        { label: '旗舰集群版', value: '旗舰集群版' },
        { label: '企业独享版', value: '企业独享版' },
        { label: '标准专业版', value: '标准专业版' },
      ],
    },
    { name: 'mrr', label: '月度订阅额 (元)', type: 'number', required: true, hideInSearch: true },
    {
      name: 'status',
      label: '运行状态',
      type: 'select',
      options: [
        { label: '正常履约', value: 'active' },
        { label: '负载预警', value: 'warning' },
        { label: '欠费冻结', value: 'frozen' },
      ],
    },
    { name: 'owner', label: '客户成功经理', placeholder: '负责人姓名' },
  ]

  return (
    <PageContainer
      title="5 套企业级开箱业务页面模板"
      subtitle="新项目或 AI Agent 可直接复制以下标准页面蓝图，零样式拼凑快速交付核心业务模块"
      extra={
        <Button
          variant="primary"
          icon={
            copiedKey === activeTpl ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )
          }
          onClick={handleCopyTemplate}
        >
          {copiedKey === activeTpl ? '已复制模板源码' : '复制当前模板源码'}
        </Button>
      }
    >
      <div className="space-y-4">
        <Tabs
          activeKey={activeTpl}
          onChange={setActiveTpl}
          items={[
            { key: 'dashboard', label: '1. SaaS 经营分析看板' },
            { key: 'crud', label: '2. 标准 Schema CRUD 页' },
            { key: 'wizard', label: '3. 分步开通向导表单' },
            { key: 'audit', label: '4. 主从详情与叠层审计抽屉' },
            { key: 'exception', label: '5. 异常状态页 (403/404/500)' },
          ]}
        />

        {/* 模板 1：SaaS 经营分析看板 */}
        {activeTpl === 'dashboard' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="月度经常性收入 (MRR)"
                prefix="¥"
                value="1,628,400"
                trend={16.4}
                footer="年度 ARR 约 ¥1,954 万"
                icon={<Coins className="h-4 w-4" />}
              />
              <StatCard
                title="净收入留存率 (NDR)"
                value="118.5"
                suffix="%"
                trend={3.2}
                footer="大客户增购贡献显著"
                icon={<TrendingUp className="h-4 w-4" />}
              />
              <StatCard
                title="活跃付费企业租户"
                value="426"
                suffix="家"
                trend={8.1}
                footer="旗舰版占比 34%"
                icon={<Users className="h-4 w-4" />}
              />
              <StatCard
                title="全局 API 可用率"
                value="99.98"
                suffix="%"
                trend={0.1}
                footer="近 30 天零 P1 故障"
                icon={<Activity className="h-4 w-4" />}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Card
                title="近 7 日清结算交易额与同期对比"
                subtitle="切换右上角主题定制器品牌色，图表将实时同步色板"
                className="lg:col-span-2"
              >
                <AbcChart
                  height={270}
                  option={{
                    tooltip: { trigger: 'axis' },
                    legend: { top: 0 },
                    grid: { left: 12, right: 12, top: 34, bottom: 8, containLabel: true },
                    xAxis: {
                      type: 'category',
                      boundaryGap: false,
                      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    },
                    yAxis: { type: 'value', name: '万元' },
                    series: [
                      {
                        name: '本周实收净额',
                        type: 'line',
                        smooth: true,
                        areaStyle: { opacity: 0.16 },
                        data: [120, 138, 162, 154, 189, 210, 198],
                      },
                      {
                        name: '上周同期净额',
                        type: 'line',
                        smooth: true,
                        data: [98, 115, 130, 141, 160, 172, 168],
                      },
                    ],
                  }}
                />
              </Card>

              <Card title="版本订阅收入结构" subtitle="按当前在约客户 MRR 统计">
                <AbcChart
                  height={270}
                  option={{
                    tooltip: { trigger: 'item' },
                    legend: { bottom: 0 },
                    series: [
                      {
                        type: 'pie',
                        radius: ['46%', '72%'],
                        center: ['50%', '44%'],
                        itemStyle: { borderRadius: 6, borderWidth: 2 },
                        data: [
                          { name: '旗舰集群版', value: 68 },
                          { name: '企业独享版', value: 24 },
                          { name: '标准专业版', value: 8 },
                        ],
                      },
                    ],
                  }}
                />
              </Card>
            </div>

            <Card title="重点 KA 客户实时履约监控" padding="none">
              <TableCore
                columns={crudColumns}
                data={tenants}
                rowKey="id"
                className="rounded-none border-0"
              />
            </Card>
          </div>
        )}

        {/* 模板 2：标准 Schema CRUD 列表页 */}
        {activeTpl === 'crud' && (
          <div className="space-y-3">
            <Alert
              tone="info"
              title="内置本地过滤开关 + 详情只读查看 + 弹窗/抽屉双容器切换"
              description="当后端旧接口尚未支持模糊搜索参数时，开启 showClientFilterSwitch 即可零后端改造获得汉字拼音首字母即时检索能力。"
              action={
                <RadioGroup
                  variant="segmented"
                  value={crudFormContainer}
                  onChange={(v) => setCrudFormContainer(v as 'dialog' | 'drawer')}
                  options={[
                    { label: '抽屉表单 (Drawer)', value: 'drawer' },
                    { label: '模态窗表单 (Dialog)', value: 'dialog' },
                  ]}
                />
              }
            />

            <ProTable<VipTenantRow>
              storageKey="abc_playground_tpl_crud"
              title="签约企业租户台账"
              columns={crudColumns}
              fields={crudFields}
              dataSource={tenants}
              rowKey="id"
              clientFilter
              showClientFilterSwitch
              viewable
              formContainer={crudFormContainer}
              onSaveRecord={(values, editing) => {
                if (editing) {
                  setTenants((prev) =>
                    prev.map((item) =>
                      item.id === editing.id ? ({ ...item, ...values } as VipTenantRow) : item
                    )
                  )
                } else {
                  const nextRow: VipTenantRow = {
                    id: `TNT-${1005 + tenants.length}`,
                    tenantName: String(values.tenantName),
                    plan: String(values.plan || '企业独享版'),
                    mrr: Number(values.mrr || 20000),
                    sla: '100.00%',
                    status: (values.status as VipTenantRow['status']) || 'active',
                    owner: String(values.owner || '待分配'),
                    createdAt: '2026-11-14',
                  }
                  setTenants((prev) => [nextRow, ...prev])
                }
              }}
              onDeleteRecords={(keys) => {
                setTenants((prev) => prev.filter((item) => !keys.includes(item.id)))
              }}
            />
          </div>
        )}

        {/* 模板 3：分步创建向导表单页 */}
        {activeTpl === 'wizard' && (
          <Card title="多租户专属资源池开通向导" subtitle="适用于复杂云资源编排、渠道入驻签约、分步计费配置">
            <div className="space-y-6">
              <Steps
                current={wizardStep}
                onChange={(idx) => idx < 2 && setWizardStep(idx)}
                items={[
                  { title: '主体与域名信息', description: '配置企业主体与二级子域名' },
                  { title: '算力配额与风控策略', description: '设定网关并发上限与安全防线' },
                  { title: '集群编排完成', description: '生成租户初始化凭证' },
                ]}
              />

              {wizardStep === 0 && (
                <div className="mx-auto max-w-xl space-y-4 pt-2">
                  <FormField label="签约企业全称" required>
                    <Input
                      value={wizardForm.company}
                      clearable
                      onChange={(e) =>
                        setWizardForm((p) => ({ ...p, company: e.target.value }))
                      }
                    />
                  </FormField>
                  <FormField label="专属控制台二级域名" required helperText="开通后可通过 https://<子域名>.bytesflows.com 访问">
                    <Input
                      value={wizardForm.subdomain}
                      suffix=".bytesflows.com"
                      onChange={(e) =>
                        setWizardForm((p) => ({ ...p, subdomain: e.target.value }))
                      }
                    />
                  </FormField>
                  <FormField label="主数据中心地域" required>
                    <Select
                      value={wizardForm.region}
                      onChange={(v) => setWizardForm((p) => ({ ...p, region: String(v) }))}
                      options={[
                        { label: '华东 1（杭州金融可用区）', value: 'cn-east-hangzhou' },
                        { label: '华北 2（北京政企可用区）', value: 'cn-north-beijing' },
                        { label: '亚太东南 1（新加坡国际区）', value: 'ap-southeast-sg' },
                      ]}
                    />
                  </FormField>
                  <div className="flex justify-end pt-2">
                    <Button
                      variant="primary"
                      onClick={() => {
                        if (!wizardForm.company.trim() || !wizardForm.subdomain.trim()) {
                          toast.warning('请填写完整的企业名称与专属域名')
                          return
                        }
                        setWizardStep(1)
                      }}
                    >
                      下一步：配置算力配额
                    </Button>
                  </div>
                </div>
              )}

              {wizardStep === 1 && (
                <div className="mx-auto max-w-xl space-y-4 pt-2">
                  <FormField label="网关峰值限流阈值 (QPS)" required>
                    <InputNumber
                      value={wizardForm.maxQps}
                      min={500}
                      max={100000}
                      step={500}
                      onChange={(v) => setWizardForm((p) => ({ ...p, maxQps: v ?? 1000 }))}
                    />
                  </FormField>
                  <FormField label="附加资源特性标签">
                    <TagInput
                      value={wizardForm.tags}
                      onChange={(tags) => setWizardForm((p) => ({ ...p, tags }))}
                    />
                  </FormField>
                  <FormField label="开启云原生 WAF 注入防护">
                    <Switch
                      checked={wizardForm.enableWaf}
                      onChange={(checked) => setWizardForm((p) => ({ ...p, enableWaf: checked }))}
                    />
                  </FormField>
                  <FormField label="交付实施备注">
                    <Textarea
                      value={wizardForm.remark}
                      showCount
                      maxLength={200}
                      onChange={(e) => setWizardForm((p) => ({ ...p, remark: e.target.value }))}
                    />
                  </FormField>
                  <div className="flex justify-between pt-2">
                    <Button variant="secondary" onClick={() => setWizardStep(0)}>
                      上一步
                    </Button>
                    <Button variant="primary" onClick={() => setWizardStep(2)}>
                      确认编排并立即交付
                    </Button>
                  </div>
                </div>
              )}

              {wizardStep === 2 && (
                <Result
                  status="success"
                  title={`『${wizardForm.company}』专属租户集群已交付就绪`}
                  subTitle={`控制台入口 https://${wizardForm.subdomain}.bytesflows.com 已完成泛域名签发，峰值配额 ${wizardForm.maxQps} QPS。`}
                  extra={
                    <>
                      <Button variant="secondary" onClick={() => setWizardStep(0)}>
                        继续开通新租户
                      </Button>
                      <Button variant="primary" onClick={() => setActiveTpl('crud')}>
                        前往租户台账查看
                      </Button>
                    </>
                  }
                />
              )}
            </div>
          </Card>
        )}

        {/* 模板 4：主从详情与两级叠层审计抽屉 */}
        {activeTpl === 'audit' && (
          <div className="space-y-4">
            <Card
              title="大额清结算工单与多层风控审计台"
              subtitle="点击右侧『调阅风控抽屉』体验一级详情抽屉 (L1) 内部无缝唤起二级规则引擎抽屉 (L2)，且底层具备独立拖拽调宽能力"
              padding="none"
            >
              <TableCore<VipTenantRow>
                rowKey="id"
                data={tenants}
                className="rounded-none border-0"
                columns={[
                  ...crudColumns,
                  {
                    key: 'audit_action',
                    title: '审计操作',
                    fixed: 'right',
                    width: 150,
                    align: 'right',
                    render: (_, row) => (
                      <Button
                        variant="outline"
                        size="xs"
                        icon={<Eye className="h-3 w-3" />}
                        onClick={() => {
                          setSelectedOrder(row)
                          setL1DrawerOpen(true)
                        }}
                      >
                        调阅风控抽屉
                      </Button>
                    ),
                  },
                ]}
              />
            </Card>

            <Drawer
              open={l1DrawerOpen}
              onClose={() => setL1DrawerOpen(false)}
              title={`企业客户档案与履约审计 · ${selectedOrder.tenantName}`}
              description="支持拖拽左侧边缘自由调节抽屉宽度"
              size="lg"
              resizable
              footer={
                <>
                  <Button variant="secondary" onClick={() => setL1DrawerOpen(false)}>
                    关闭
                  </Button>
                  <Button
                    variant="primary"
                    icon={<ShieldAlert className="h-3.5 w-3.5" />}
                    onClick={() => setL2DrawerOpen(true)}
                  >
                    打开二级底层风控流水 (L2 叠层抽屉)
                  </Button>
                </>
              }
            >
              <div className="space-y-5">
                <Descriptions
                  title="基础签约主体信息"
                  bordered
                  column={2}
                  items={[
                    { label: '租户唯一标识', children: selectedOrder.id },
                    { label: '签约套餐规格', children: selectedOrder.plan },
                    {
                      label: '月度订阅净额',
                      children: `¥${selectedOrder.mrr.toLocaleString()}`,
                    },
                    { label: '当月 SLA 达成率', children: selectedOrder.sla },
                    { label: '专属客户成功经理', children: selectedOrder.owner },
                    { label: '首次签约日期', children: selectedOrder.createdAt },
                  ]}
                />

                <div>
                  <h4 className="mb-3 text-xs font-semibold text-[var(--abc-fg)]">
                    近期合规变更轨迹
                  </h4>
                  <Timeline
                    items={[
                      {
                        title: '完成季度高可用容灾演练',
                        time: '2026-11-12 03:15',
                        description: '主备跨可用区切换耗时 1.8 秒，零丢包通过验收。',
                        tone: 'success',
                      },
                      {
                        title: '企业实名公章与结算账户年审通过',
                        time: '2026-10-28 14:40',
                        description: '复核人：财务风控组-张铭',
                        tone: 'primary',
                      },
                    ]}
                  />
                </div>
              </div>
            </Drawer>

            <Drawer
              open={l2DrawerOpen}
              onClose={() => setL2DrawerOpen(false)}
              title={`L2 实时风控规则引擎堆栈 · ${selectedOrder.id}`}
              description="叠层抽屉自动递增 z-index，按 Esc 仅关闭最顶层抽屉，不会误关底层详情"
              size="md"
              footer={
                <Button variant="primary" onClick={() => setL2DrawerOpen(false)}>
                  确认核验无误
                </Button>
              }
            >
              <div className="space-y-4">
                <Alert
                  tone="success"
                  title="全部 14 项反洗钱与接口异常频次规则均绿灯放行"
                  description="最近一次扫描批次号：RISK-20261114-8831"
                />
                <Timeline
                  items={[
                    {
                      title: '规则 R-01：企业法人黑名单交叉比对',
                      time: '耗时 4ms',
                      description: '未命中任何受限实体清单',
                      tone: 'success',
                    },
                    {
                      title: '规则 R-08：异地高频提现突变检测',
                      time: '耗时 11ms',
                      description: '近 24h 提现离散度 0.12（安全阈值 < 0.75）',
                      tone: 'success',
                    },
                    {
                      title: '规则 R-14：Webhook 签名验签成功率核查',
                      time: '耗时 6ms',
                      description: '验签通过率 100.0%',
                      tone: 'primary',
                    },
                  ]}
                />
              </div>
            </Drawer>
          </div>
        )}

        {/* 模板 5：全局异常状态页 */}
        {activeTpl === 'exception' && (
          <Card
            title="标准 HTTP 与业务异常兜底页模板"
            extra={
              <RadioGroup
                variant="segmented"
                value={exceptionCode}
                onChange={(v) => setExceptionCode(v as '403' | '404' | '500')}
                options={[
                  { label: '403 无权限', value: '403' },
                  { label: '404 页面不存在', value: '404' },
                  { label: '500 服务异常', value: '500' },
                ]}
              />
            }
          >
            {exceptionCode === '403' && (
              <Result
                status="403"
                title="403 暂无当前业务域访问权限"
                subTitle="您当前登录的角色尚未分配『核心清结算复核』权限码，请联系所属租户管理员开通授权。"
                extra={
                  <>
                    <Button variant="secondary" onClick={() => setActiveTpl('dashboard')}>
                      返回经营大盘
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => toast.info('已向租户管理员发送权限申请通知')}
                    >
                      一键申请权限
                    </Button>
                  </>
                }
              />
            )}
            {exceptionCode === '404' && (
              <Result
                status="404"
                title="404 访问的页面路由不存在或已下线"
                subTitle="请检查浏览器地址栏 URL 拼写，或使用顶部 Cmd/Ctrl + K 全局命令面板快速检索菜单。"
                extra={
                  <Button variant="primary" onClick={() => setActiveTpl('dashboard')}>
                    回到控制台首页
                  </Button>
                }
              />
            )}
            {exceptionCode === '500' && (
              <Result
                status="500"
                title="500 上游微服务集群响应超时"
                subTitle="网关追踪号 Trace-ID: 9f81c2e0a4b12099，运维值班告警已自动触发，请稍后重试。"
                extra={
                  <Button
                    variant="primary"
                    onClick={() => toast.success('探活重试成功，链路已恢复')}
                  >
                    立即重试连接
                  </Button>
                }
              />
            )}
          </Card>
        )}
      </div>
    </PageContainer>
  )
}
