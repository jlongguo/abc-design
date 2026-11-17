export interface VipTenantRow {
  id: string
  tenantName: string
  plan: string
  mrr: number
  sla: string
  status: 'active' | 'warning' | 'frozen'
  owner: string
  createdAt: string
}

export const INITIAL_TENANTS: VipTenantRow[] = [
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

export const TEMPLATE_SNIPPETS: Record<string, string> = {
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
