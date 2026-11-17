import React, { useState } from 'react'
import { AbcChart, StatCard } from '@abc-design/charts'
import {
  Alert,
  Button,
  Card,
  PageContainer,
  ProTable,
  RadioGroup,
  StatusTag,
  TableCore,
  Tabs,
  useAbcConfig,
  type AbcColumn,
  type ProTableFieldSchema,
} from '@abc-design/react'
import { Activity, Check, Coins, Copy, TrendingUp, Users } from 'lucide-react'
import { AuditDrawerTemplate, ExceptionResultTemplate } from './templates/AuditAndExceptionTemplates'
import { INITIAL_TENANTS, TEMPLATE_SNIPPETS, type VipTenantRow } from './templates/templatesData'
import { WizardFormTemplate } from './templates/WizardFormTemplate'

export const TemplatesPage: React.FC = () => {
  const { toast } = useAbcConfig()
  const [activeTpl, setActiveTpl] = useState('dashboard')
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [tenants, setTenants] = useState<VipTenantRow[]>(INITIAL_TENANTS)
  const [crudFormContainer, setCrudFormContainer] = useState<'dialog' | 'drawer'>('drawer')

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
          icon={copiedKey === activeTpl ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
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
                    xAxis: { type: 'category', boundaryGap: false, data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
                    yAxis: { type: 'value', name: '万元' },
                    series: [
                      { name: '本周实收净额', type: 'line', smooth: true, areaStyle: { opacity: 0.16 }, data: [120, 138, 162, 154, 189, 210, 198] },
                      { name: '上周同期净额', type: 'line', smooth: true, data: [98, 115, 130, 141, 160, 172, 168] },
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
              <TableCore columns={crudColumns} data={tenants} rowKey="id" className="rounded-none border-0" />
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
                    prev.map((item) => (item.id === editing.id ? ({ ...item, ...values } as VipTenantRow) : item))
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
              onDeleteRecords={(keys) => setTenants((prev) => prev.filter((item) => !keys.includes(item.id)))}
            />
          </div>
        )}

        {/* 模板 3：分步创建向导表单页 */}
        <div className={activeTpl === 'wizard' ? 'block' : 'hidden'}>
          <WizardFormTemplate onGoCrud={() => setActiveTpl('crud')} />
        </div>

        {/* 模板 4：主从详情与两级叠层审计抽屉 */}
        {activeTpl === 'audit' && <AuditDrawerTemplate tenants={tenants} columns={crudColumns} />}

        {/* 模板 5：全局异常状态页 */}
        <div className={activeTpl === 'exception' ? 'block' : 'hidden'}>
          <ExceptionResultTemplate onGoDashboard={() => setActiveTpl('dashboard')} />
        </div>
      </div>
    </PageContainer>
  )
}
export default TemplatesPage
