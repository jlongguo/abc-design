import React, { useState } from 'react'
import {
  Alert,
  Button,
  Card,
  Descriptions,
  Drawer,
  RadioGroup,
  Result,
  TableCore,
  Timeline,
  useAbcConfig,
  type AbcColumn,
} from '@abc-design/react'
import { Eye, ShieldAlert } from 'lucide-react'
import { INITIAL_TENANTS, type VipTenantRow } from './templatesData'

export interface AuditDrawerTemplateProps {
  tenants: VipTenantRow[]
  columns: AbcColumn<VipTenantRow>[]
}

/**
 * 模板 4：主从详情与两级叠层审计抽屉
 */
export const AuditDrawerTemplate: React.FC<AuditDrawerTemplateProps> = ({ tenants, columns }) => {
  const [l1DrawerOpen, setL1DrawerOpen] = useState(false)
  const [l2DrawerOpen, setL2DrawerOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<VipTenantRow>(tenants[0] ?? INITIAL_TENANTS[0])

  return (
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
            ...columns,
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
              { label: '月度订阅净额', children: `¥${selectedOrder.mrr.toLocaleString()}` },
              { label: '当月 SLA 达成率', children: selectedOrder.sla },
              { label: '专属客户成功经理', children: selectedOrder.owner },
              { label: '首次签约日期', children: selectedOrder.createdAt },
            ]}
          />

          <div>
            <h4 className="mb-3 text-xs font-semibold text-[var(--abc-fg)]">近期合规变更轨迹</h4>
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
  )
}

export interface ExceptionResultTemplateProps {
  onGoDashboard: () => void
}

/**
 * 模板 5：全局异常状态页
 */
export const ExceptionResultTemplate: React.FC<ExceptionResultTemplateProps> = ({ onGoDashboard }) => {
  const { toast } = useAbcConfig()
  const [exceptionCode, setExceptionCode] = useState<'403' | '404' | '500'>('403')

  return (
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
              <Button variant="secondary" onClick={onGoDashboard}>
                返回经营大盘
              </Button>
              <Button variant="primary" onClick={() => toast.info('已向租户管理员发送权限申请通知')}>
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
            <Button variant="primary" onClick={onGoDashboard}>
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
            <Button variant="primary" onClick={() => toast.success('探活重试成功，链路已恢复')}>
              立即重试连接
            </Button>
          }
        />
      )}
    </Card>
  )
}
