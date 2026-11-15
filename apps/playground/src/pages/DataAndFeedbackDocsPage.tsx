import React, { useState } from 'react'
import {
  Alert,
  AttentionList,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Collapse,
  ConfirmDialog,
  CopyableCode,
  CopyableText,
  DescriptionList,
  Descriptions,
  Dialog,
  Drawer,
  EmptyState,
  ErrorBoundary,
  FormField,
  IconBadge,
  ImagePreview,
  Input,
  NotificationBanner,
  OneTimeSecretDialog,
  PageContainer,
  Pagination,
  Popover,
  Progress,
  RadioGroup,
  Result,
  SkeletonCard,
  SkeletonTable,
  StatusTag,
  Steps,
  Switch,
  Tabs,
  Timeline,
  Tooltip,
  abcConfirm,
  abcToast,
  useAbcConfig,
} from '@abc-design/react'
import {
  AlertTriangle,
  Bell,
  KeyRound,
  Layers,
  Shield,
  ShieldAlert,
  Sparkles,
  Zap,
} from 'lucide-react'
import { ComponentDocPreview } from '../components/ComponentDocPreview'

const DEMO_SVG = `<svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="16" fill="#4f46e5"/><circle cx="32" cy="26" r="10" fill="#a5b4fc"/><path d="M16 50c3-9 11-13 16-13s13 4 16 13" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none"/></svg>`

const CrashTriggerDemo: React.FC<{ shouldCrash: boolean }> = ({ shouldCrash }) => {
  if (shouldCrash) {
    throw new Error('模拟子模块渲染期空指针异常 (TypeError: Cannot read properties of null)')
  }
  return (
    <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-3 text-xs text-[var(--abc-success)]">
      当前子模块运行健康，点击上方按钮可模拟局部渲染崩溃并观察 ErrorBoundary 自愈重挂载。
    </div>
  )
}

export const DataAndFeedbackDocsPage: React.FC = () => {
  const { toast } = useAbcConfig()
  const [tabVariant, setTabVariant] = useState<'line' | 'segmented' | 'pills'>('line')
  const [stepIdx, setStepIdx] = useState(1)
  const [progressPct, setProgressPct] = useState(76)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [drawerL1, setDrawerL1] = useState(false)
  const [drawerL2, setDrawerL2] = useState(false)
  const [cascadeMode, setCascadeMode] = useState<'adjacent' | 'stack'>('adjacent')
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [oneTimeSecret, setOneTimeSecret] = useState<string | null>(null)
  const [bannerVisible, setBannerVisible] = useState(true)
  const [descVariant, setDescVariant] = useState<'default' | 'cards' | 'divided' | 'compact'>('cards')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [crash, setCrash] = useState(false)

  return (
    <PageContainer
      title="数据展示与交互反馈组件文档"
      subtitle="涵盖原生无障碍手风琴、屏幕阅读器友好面包屑、原生顶层模态框、多级层叠抽屉与局部错误自愈边界"
    >
      <div className="space-y-5">
        {/* 1. 导航与分组容器：Breadcrumb + Steps + Tabs + Collapse */}
        <ComponentDocPreview
          title="Tabs / Collapse / Breadcrumb / Steps 导航与折叠容器"
          description="严格遵循现代 Web 无障碍标准：Breadcrumb 使用 CSS ::before 注入对读屏器静默的分隔符；Tabs 使用伪元素边框绘制高对比度激活底线与 hidden='until-found'；Collapse 基于原生 <details name='...'> 实现零脚本互斥手风琴。"
          controls={
            <RadioGroup
              variant="segmented"
              value={tabVariant}
              onChange={(v) => setTabVariant(v as any)}
              options={[
                { label: 'line (下划线)', value: 'line' },
                { label: 'segmented (分段胶囊)', value: 'segmented' },
                { label: 'pills (实心胶囊)', value: 'pills' },
              ]}
            />
          }
          code={`import { Breadcrumb, Steps, Tabs, Collapse } from '@abc-design/react'

<Breadcrumb items={[{ label: '系统中心', href: '#' }, { label: '网关策略详情' }]} />
<Steps current={${stepIdx}} onChange={setStep} items={[{ title: '基础配置' }, { title: '流量灰度' }, { title: '发布上线' }]} />
<Tabs variant="${tabVariant}" items={[{ key: 'a', label: '概览', children: '...' }]} />`}
          apiRows={[
            { prop: 'Tabs.variant', type: "'line' | 'segmented' | 'pills'", defaultValue: "'line'", description: '选项卡视觉形态，超出宽度自动单行不折行滚动' },
            { prop: 'Collapse.accordion', type: 'boolean', defaultValue: 'false', description: '利用原生 <details name> 属性实现同组互斥展开' },
            { prop: 'Steps.current', type: 'number', defaultValue: '0', description: '当前激活步骤索引（从 0 开始），支持点击切换' },
          ]}
        >
          <div className="space-y-5">
            <Breadcrumb
              items={[
                { label: '多租户控制台', onClick: () => toast.info('点击面包屑根节点') },
                { label: '网关治理中心', onClick: () => toast.info('点击二级节点') },
                { label: '灰度路由规则详情' },
              ]}
            />

            <Steps
              current={stepIdx}
              onChange={setStepIdx}
              items={[
                { title: '填写租户配额', description: '设定 QPS 与带宽上限' },
                { title: '绑定专属证书', description: '自动签发 TLS 1.3' },
                { title: '全网节点下发', description: '秒级热加载生效' },
              ]}
            />

            <Tabs
              variant={tabVariant}
              items={[
                {
                  key: 'spec',
                  label: '原生互斥手风琴 (Collapse)',
                  badge: 3,
                  children: (
                    <Collapse
                      accordion
                      defaultActiveKeys={['c1']}
                      items={[
                        {
                          key: 'c1',
                          label: '为什么采用原生 <details> 而非手写高度测量动画？',
                          extra: <StatusTag tone="success">Zero JS</StatusTag>,
                          children:
                            '原生 <details> + ::details-content 支持浏览器页内 Ctrl+F 搜索自动展开命中项，且摘要内不包裹 h1-h6 标题以保障读屏器焦点语义纯净。',
                        },
                        {
                          key: 'c2',
                          label: '多租户品牌色如何做到无闪烁切换？',
                          children:
                            '通过在根节点动态覆写 --abc-brand-50 ~ --abc-brand-950 CSS 变量，所有按钮、边框与图表直接消费变量而无需重新生成样式表。',
                        },
                      ]}
                    />
                  ),
                },
                {
                  key: 'tags',
                  label: '状态标签与图形灯箱',
                  children: (
                    <div className="flex flex-wrap items-center gap-4">
                      <StatusTag tone="success" pulse>运行健康</StatusTag>
                      <StatusTag status="warning">灰度观察中</StatusTag>
                      <StatusTag color="purple">旗舰企业版</StatusTag>
                      <CopyableText text="ORD-20261114-99812" />
                      <Badge count={12}>
                        <Button variant="secondary" size="xs" icon={<Bell className="h-3.5 w-3.5" />}>
                          待审批工单
                        </Button>
                      </Badge>
                      <Avatar name="BytesFlows" size="md" />
                      <ImagePreview src={DEMO_SVG} alt="租户矢量徽标" width={42} height={42} />
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </ComponentDocPreview>

        {/* 2. 结构化详情与时间轴：Descriptions + Timeline + Popover */}
        <ComponentDocPreview
          title="Descriptions / Timeline / Popover 详情描述与审计轨迹"
          description="高频用于订单抽屉、用户画像与审批流：Descriptions 支持响应式多列网格与跨列；Timeline 清晰还原状态流转。"
          code={`import { Descriptions, Timeline, Popover } from '@abc-design/react'

<Descriptions
  title="租户实例规格"
  bordered
  column={2}
  items={[
    { label: '实例编号', children: 'TN-2026-001' },
    { label: '计费周期', children: '包年企业版' },
  ]}
/>`}
          apiRows={[
            { prop: 'Descriptions.column', type: '1 | 2 | 3 | 4', defaultValue: '2', description: '大屏下的键值网格列数（小屏自动流式降级为单列）' },
            { prop: 'Descriptions.bordered', type: 'boolean', defaultValue: 'true', description: '是否启用企业后台经典带边框灰底标签样式' },
            { prop: 'Timeline.items', type: 'TimelineItem[]', required: true, description: '时间轴节点列表（title, time, description, tone）' },
          ]}
        >
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Descriptions
                title="企业专有实例元数据"
                extra={
                  <Popover
                    title="SLA 服务等级说明"
                    content={
                      <p className="leading-relaxed">
                        旗舰版实例享受跨三可用区热备与 99.99% 可用性赔付保障。
                      </p>
                    }
                  >
                    <Button size="xs" variant="ghost">
                      查看 SLA 说明
                    </Button>
                  </Popover>
                }
                column={2}
                items={[
                  { label: '实例 ID', children: <CopyableText text="ins-prod-shanghai-0192" /> },
                  { label: '运行状态', children: <StatusTag tone="success" pulse>主备同步正常</StatusTag> },
                  { label: '所属地域', children: '华东 2（上海金融专区）' },
                  { label: '峰值带宽', children: '2,000 Mbps 独享' },
                  {
                    label: '白名单 CIDR',
                    span: 2,
                    children: <span className="font-mono">10.24.0.0/16, 172.18.12.0/24</span>,
                  },
                ]}
              />
            </div>

            <div>
              <div className="mb-2.5 text-xs font-semibold text-[var(--abc-fg)]">变更审计时间轴</div>
              <Timeline
                items={[
                  {
                    key: '1',
                    title: '架构师提交配额扩容申请',
                    time: '10:15:22',
                    tone: 'primary',
                    description: '申请将峰值 QPS 由 5,000 提升至 12,000',
                  },
                  {
                    key: '2',
                    title: '风控引擎自动合规校验通过',
                    time: '10:15:24',
                    tone: 'success',
                  },
                  {
                    key: '3',
                    title: '全网 16 个边缘节点热更新完毕',
                    time: '10:15:29',
                    tone: 'primary',
                  },
                ]}
              />
            </div>
          </div>
        </ComponentDocPreview>

        {/* 3. 大表单与小表单分流规范：Dialog vs Drawer (并排平级展开与层叠) */}
        <ComponentDocPreview
          title="大小表单容器分流规范：Drawer (大表单/二级抽屉并排) vs Dialog (小表单/居中)"
          description="核心设计规范：大表单交互展示必须使用右侧全高抽屉（Drawer），避免居中 Modal 因绝对定位挤出视口顶部被截断；大表单内嵌套大表单必须使用二级抽屉（支持 cascadeMode='adjacent' 并排平级比对或 'stack' 层叠）；小表单与轻量确认使用居中 Dialog。"
          controls={
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[var(--abc-fg-secondary)]">二级抽屉级联模式:</span>
              <RadioGroup
                variant="segmented"
                size="xs"
                value={cascadeMode}
                onChange={(v) => setCascadeMode(v as any)}
                options={[
                  { label: 'adjacent (平级并排展开)', value: 'adjacent' },
                  { label: 'stack (向左层叠推挤)', value: 'stack' },
                ]}
              />
            </div>
          }
          code={`import { Dialog, Drawer, Button } from '@abc-design/react'

// 1. 大表单：必须使用右侧全高抽屉，多级嵌套使用 cascadeMode="adjacent" 并排平级比对
<Drawer
  open={drawerL1}
  onClose={() => setDrawerL1(false)}
  title="企业集群配额设置 (大表单 L1)"
  size="lg"
  cascadeMode="${cascadeMode}"
>
  {/* 大表单复杂配置卡片与字段流 */}
  <Button onClick={() => setDrawerL2(true)}>打开关联安全凭证 (二级大表单 L2) →</Button>
</Drawer>

<Drawer
  open={drawerL2}
  onClose={() => setDrawerL2(false)}
  title="安全密钥凭证详情 (二级大表单 L2)"
  size="md"
  cascadeMode="${cascadeMode}"
>
  {/* 子级复杂大表单 */}
</Drawer>

// 2. 小表单与轻量确认：居中 Dialog
<Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} title="快速修改别名" size="sm">
  <Input label="新别名" placeholder="输入名称" />
</Dialog>`}
          apiRows={[
            { prop: 'Drawer.cascadeMode', type: "'adjacent' | 'stack'", defaultValue: "'stack'", description: '二级抽屉展开拓扑：adjacent 并排平移展开（两级表单同时可视比对）；stack 向左层叠推挤' },
            { prop: 'Drawer.size', type: "'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'", defaultValue: "'md'", description: '抽屉宽度档位，全高贴合右侧，支持 resizable 自由拖拽调宽' },
            { prop: 'Dialog.size', type: "'sm' | 'md' | 'lg' | 'xl' | 'full'", defaultValue: "'md'", description: '专用于小表单（1~3 个字段）与轻量即时操作，居中弹出支持多级遮罩堆叠' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              leftIcon={<Layers className="h-3.5 w-3.5" />}
              onClick={() => setDrawerL1(true)}
            >
              打开大表单抽屉 (体验 L1 → L2 {cascadeMode === 'adjacent' ? '并排平移' : '层叠'})
            </Button>
            <Button variant="secondary" onClick={() => setDialogOpen(true)}>
              打开小表单 Dialog
            </Button>
            <Button
              variant="danger"
              onClick={async () => {
                const ok = await abcConfirm({
                  title: '确认吊销访问密钥？',
                  message: '吊销后线上网关将在 3 秒内阻断该密钥流量，确认继续吗？',
                  tone: 'danger',
                  confirmText: '确认吊销',
                })
                toast.info(ok ? '已执行吊销动作' : '已安全取消')
              }}
            >
              命令式 abcConfirm
            </Button>
            <Tooltip content="同时支持鼠标悬停与键盘 Tab 聚焦触发">
              <Button variant="ghost" leftIcon={<Sparkles className="h-3.5 w-3.5" />}>
                悬浮提示 Tooltip
              </Button>
            </Tooltip>
          </div>

          {/* 小表单 Dialog 演示 */}
          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title="快捷修改租户别名（小表单场景）"
            description="仅包含极少数输入项，居中弹出，支持拖拽标题栏与全屏"
            size="sm"
            footer={
              <>
                <Button variant="secondary" onClick={() => setDialogOpen(false)}>
                  取消
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    toast.success('别名修改成功')
                    setDialogOpen(false)
                  }}
                >
                  保存
                </Button>
              </>
            }
          >
            <div className="space-y-3 py-1">
              <FormField label="租户别名" required>
                <Input defaultValue="星河跨境外贸专线" />
              </FormField>
              <FormField label="备注说明">
                <Input defaultValue="2026 核心直连网关" />
              </FormField>
            </div>
          </Dialog>

          {/* 大表单 Drawer L1 演示 */}
          <Drawer
            open={drawerL1}
            onClose={() => setDrawerL1(false)}
            title="企业集群配额设置（大表单一级抽屉 L1）"
            description={`全高贴合右侧，支持原生垂直滚动；当前二级级联拓扑: ${cascadeMode}`}
            size="lg"
            cascadeMode={cascadeMode}
            footer={
              <div className="flex items-center justify-between w-full">
                <Button variant="ghost" onClick={() => setDrawerL1(false)}>
                  取消
                </Button>
                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={() => setDrawerL2(true)}>
                    打开安全凭证 (L2 子表单) →
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      toast.success('大表单配额配置已保存！')
                      setDrawerL1(false)
                      setDrawerL2(false)
                    }}
                  >
                    保存生效
                  </Button>
                </div>
              </div>
            }
          >
            <div className="space-y-5">
              <Alert
                tone="info"
                title="大表单与子表单级联设计规范"
                description={`当前处于 ${cascadeMode === 'adjacent' ? 'adjacent (并排平级展开比对)' : 'stack (层叠推挤)'} 模式。当打开 L2 时，两级大表单协同工作，无遮挡裁剪风险。`}
              />

              <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 space-y-3">
                <h4 className="text-xs font-semibold text-[var(--abc-fg)]">节点算力与流量上限</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <FormField label="并发 QPS 上限">
                    <Input defaultValue="15,000" />
                  </FormField>
                  <FormField label="突发峰值乘数">
                    <Input defaultValue="2.5x" />
                  </FormField>
                </div>
              </div>

              <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 space-y-3">
                <h4 className="text-xs font-semibold text-[var(--abc-fg)]">高防与安全策略</h4>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--abc-fg-secondary)]">开启 CC 攻击智能限流清洗</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--abc-fg-secondary)]">跨可用区高可用热备路由</span>
                  <Switch defaultChecked />
                </div>
              </div>

              <Button
                variant="outline"
                block
                leftIcon={<KeyRound className="h-3.5 w-3.5" />}
                onClick={() => setDrawerL2(true)}
              >
                在侧边唤起关联安全凭证与审计明细 (打开 L2 二级大表单) →
              </Button>
            </div>
          </Drawer>

          {/* 大表单 Drawer L2 演示 */}
          <Drawer
            open={drawerL2}
            onClose={() => setDrawerL2(false)}
            title="关联安全凭证与密钥明细（二级大表单 L2）"
            description="L2 子抽屉，支持与 L1 并排比对数据"
            size="md"
            cascadeMode={cascadeMode}
            footer={
              <Button variant="primary" block onClick={() => setDrawerL2(false)}>
                完成确认并返回 L1
              </Button>
            }
          >
            <div className="space-y-4">
              <div className="rounded-lg border border-amber-500/30 bg-amber-50/40 dark:bg-amber-950/20 p-3 text-xs text-amber-800 dark:text-amber-300">
                <div className="font-semibold mb-1">注意：二级大表单数据直接关联主配置</div>
                在 {cascadeMode === 'adjacent' ? '并排模式下，左侧主表单与右侧凭证表单同时可见' : '层叠模式下，主抽屉向左平移'}。
              </div>

              <DescriptionList
                columns={1}
                variant="cards"
                items={[
                  { label: '密钥标识', value: 'KEY-2026-PROD-9812', copyValue: 'KEY-2026-PROD-9812' },
                  { label: '签名算法', value: 'HMAC-SHA256 (256 bits)' },
                  { label: '签发时间', value: '2026-11-15 14:20:00' },
                  { label: '关联凭据 Hash', value: '7f9c...4a2b', copyValue: '7f9c8d1e2a3b4c5d6e7f8a9b0c1d2e3f' },
                ]}
              />
            </div>
          </Drawer>
        </ComponentDocPreview>

        {/* 3.1 结构化二次确认与一次性密钥安全弹窗 */}
        <ComponentDocPreview
          title="ConfirmDialog / OneTimeSecretDialog 结构化安全二次确认与密钥下发"
          description="相比简易命令式 confirm，ConfirmDialog 支持破坏性警告、加载中状态与结构化表单；OneTimeSecretDialog 专用于 API Key、Token 仅下发一次的强安全场景，强制提示管理员复制保存。"
          controls={
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="danger"
                size="xs"
                leftIcon={<ShieldAlert className="h-3 w-3" />}
                onClick={() => setConfirmOpen(true)}
              >
                唤起结构化 ConfirmDialog
              </Button>
              <Button
                variant="outline"
                size="xs"
                leftIcon={<KeyRound className="h-3 w-3" />}
                onClick={() => setOneTimeSecret('sk_live_enterprise_9812379182379182379182')}
              >
                唤起 OneTimeSecretDialog (一次性密钥)
              </Button>
            </div>
          }
          code={`import { ConfirmDialog, OneTimeSecretDialog } from '@abc-design/react'

// 1. 结构化高危确认弹窗
<ConfirmDialog
  open={confirmOpen}
  title="确认永久下线该网关集群？"
  description="下线后全部接入域名将立即中断流量，释放底层容器与弹性 IP，此操作无法撤销！"
  variant="destructive"
  confirmLabel="确认下线"
  loading={loading}
  onCancel={() => setConfirmOpen(false)}
  onConfirm={handleDelete}
/>

// 2. 一次性敏感密钥展示弹窗
<OneTimeSecretDialog
  open={Boolean(secret)}
  title="集群访问专用 API Key 已生成"
  secret={secret}
  metadata={[
    { label: '所属租户', value: '星河跨境云' },
    { label: '权限范围', value: 'gateway:read, billing:write' },
  ]}
  onClose={() => setSecret(null)}
/>`}
          apiRows={[
            { prop: 'ConfirmDialog.variant', type: "'default' | 'destructive'", defaultValue: "'default'", description: '破坏性危险操作渲染醒目红盾与警示按钮' },
            { prop: 'ConfirmDialog.loading', type: 'boolean', defaultValue: 'false', description: '异步确认中锁定弹窗与关闭交互，防止重复触发' },
            { prop: 'OneTimeSecretDialog.secret', type: 'string', description: '待展示的一次性密钥原文，内置一键复制、脱敏与下载' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="danger"
              leftIcon={<ShieldAlert className="h-3.5 w-3.5" />}
              onClick={() => setConfirmOpen(true)}
            >
              模拟高危操作 ConfirmDialog
            </Button>
            <Button
              variant="secondary"
              leftIcon={<KeyRound className="h-3.5 w-3.5" />}
              onClick={() => setOneTimeSecret('sk_live_enterprise_9812379182379182379182')}
            >
              生成一次性密钥 OneTimeSecretDialog
            </Button>
          </div>

          <ConfirmDialog
            open={confirmOpen}
            title="确认永久释放集群弹性公网 IP？"
            description="释放后该 IP 将立即进入资源回收池，关联的白名单解析与安全组规则将同步失效。"
            variant="destructive"
            confirmLabel="确认释放并下线"
            loading={confirmLoading}
            onCancel={() => setConfirmOpen(false)}
            onConfirm={() => {
              setConfirmLoading(true)
              setTimeout(() => {
                setConfirmLoading(false)
                setConfirmOpen(false)
                toast.success('弹性 IP 已安全释放')
              }, 1200)
            }}
          />

          <OneTimeSecretDialog
            open={Boolean(oneTimeSecret)}
            title="旗舰专网集群通信凭据已生成"
            secret={oneTimeSecret}
            metadata={[
              { label: '所属项目', value: 'ABC Design Enterprise' },
              { label: '有效期限', value: '永久（直至手动吊销）' },
              { label: '鉴权机制', value: 'Bearer Token (Header Authorization)' },
            ]}
            onClose={() => setOneTimeSecret(null)}
          />
        </ComponentDocPreview>

        {/* 3.2 NotificationBanner & AttentionList */}
        <ComponentDocPreview
          title="NotificationBanner & AttentionList 全局/局部通知横幅与重点告警清单"
          description="NotificationBanner 提供多状态（error/warning/success/info）自适应通告横幅，支持标题、状态码、RequestId、操作按钮与关闭；AttentionList 用于在控制台/大盘顶部聚合运营风险信号与待办清单。"
          controls={
            <div className="flex items-center gap-2">
              <Button size="xs" variant="outline" onClick={() => setBannerVisible((v) => !v)}>
                {bannerVisible ? '隐藏通知横幅' : '显示通知横幅'}
              </Button>
            </div>
          }
          code={`import { NotificationBanner, AttentionList } from '@abc-design/react'

// 1. 通知横幅
<NotificationBanner
  variant="warning"
  title="灰度网关证书即将于 3 天后过期"
  description="请尽快上传全新泛域名证书，逾期将导致 HTTPS 连接报错。"
  code="CERT_EXPIRING_SOON"
  requestId="REQ-981203"
  action={<Button size="xs" variant="primary">立即更新证书</Button>}
  onDismiss={() => setVisible(false)}
/>

// 2. 运营重点待办清单
<AttentionList
  items={[
    { kind: 'quota', severity: 'critical', count: 3, label: '租户存储空间已达 95% 警戒水位', href: '#' },
    { kind: 'cert', severity: 'high', count: 1, label: '边缘证书待续签', href: '#' },
  ]}
/>`}
          apiRows={[
            { prop: 'NotificationBanner.variant', type: "'error' | 'warning' | 'success' | 'info'", defaultValue: "'info'", description: '通知条视觉色调与语义图标' },
            { prop: 'NotificationBanner.code / requestId', type: 'string', description: '用于排障的系统错误码与分布式链路 Request ID' },
            { prop: 'AttentionList.items', type: 'AttentionEntry[]', description: '告警条目数组，包含 severity (critical/high/medium/low)、数量与跳转链接' },
          ]}
        >
          <div className="space-y-4">
            {bannerVisible && (
              <NotificationBanner
                variant="warning"
                title="BGP 专线调度网关证书将于 3 天后过期"
                description="请在到期前上传新签发的泛域名证书，逾期未更新将自动触发证书阻断策略。"
                code="TLS_CERT_WARN_72H"
                requestId="req_20261115_bgp_001"
                action={
                  <Button size="xs" variant="primary" onClick={() => toast.info('跳转至证书管理')}>
                    立即上传更新
                  </Button>
                }
                onDismiss={() => setBannerVisible(false)}
              />
            )}

            <div className="text-xs font-medium text-[var(--abc-fg-secondary)] pt-2">
              运营重点待办与聚合告警清单 (AttentionList):
            </div>
            <AttentionList
              items={[
                {
                  kind: 'quota',
                  severity: 'critical',
                  count: 2,
                  label: '华东金融区节点 QPS 持续超载（已触发临时限流）',
                  href: '#',
                  onClick: () => toast.warning('点击紧急处理超载节点'),
                },
                {
                  kind: 'audit',
                  severity: 'high',
                  count: 5,
                  label: '待复核的高危提现审批单据',
                  href: '#',
                  onClick: () => toast.info('进入审批工单流'),
                },
                {
                  kind: 'backup',
                  severity: 'medium',
                  count: 1,
                  label: '跨区域异地灾备演练计划待确认',
                  href: '#',
                  onClick: () => toast.info('查看演练方案'),
                },
              ]}
            />
          </div>
        </ComponentDocPreview>

        {/* 3.3 DescriptionList & CopyableCode */}
        <ComponentDocPreview
          title="DescriptionList & CopyableCode 结构化元数据列表与只读代码块"
          description="基于语义化 <dl>/<dt>/<dd> 标签，支持 cards (卡片网格)、divided (分割线)、compact (紧凑) 与 default 四种排版，完美结合 CopyableCode 实现敏感参数一键复制与复制成功状态反馈。"
          controls={
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[var(--abc-fg-secondary)]">排版风格:</span>
              <RadioGroup
                variant="segmented"
                size="xs"
                value={descVariant}
                onChange={(v) => setDescVariant(v as any)}
                options={[
                  { label: 'cards (卡片)', value: 'cards' },
                  { label: 'divided (分隔线)', value: 'divided' },
                  { label: 'compact (紧凑)', value: 'compact' },
                  { label: 'default', value: 'default' },
                ]}
              />
            </div>
          }
          code={`import { DescriptionList, CopyableCode } from '@abc-design/react'

<DescriptionList
  columns={2}
  variant="${descVariant}"
  items={[
    { label: '网关实例 ID', value: 'GW-PROD-EAST-01', copyValue: 'GW-PROD-EAST-01' },
    { label: '内网解析 IP', value: <CopyableCode value="10.240.18.92" /> },
    { label: '健康检查端点', value: '/healthz/ready', mono: true },
    { label: '部署可用区', value: 'cn-shanghai-finance-b', span: 2 },
  ]}
/>`}
          apiRows={[
            { prop: 'DescriptionList.variant', type: "'default' | 'cards' | 'divided' | 'compact'", defaultValue: "'default'", description: '元数据排列视觉形态' },
            { prop: 'DescriptionList.columns', type: '1 | 2 | 3 | 4', defaultValue: '2', description: '响应式栅格列数' },
            { prop: 'CopyableCode.value', type: 'string', description: '内联代码文字与一键复制的值，复制后自动切绿标 1.6 秒' },
          ]}
        >
          <DescriptionList
            columns={2}
            variant={descVariant}
            items={[
              { label: '网关集群 ID', value: 'GW-EAST-FINANCE-001', copyValue: 'GW-EAST-FINANCE-001' },
              { label: '内网 VIP 调度地址', value: <CopyableCode value="10.240.18.92:8443" /> },
              { label: 'SLA 保障等级', value: <StatusTag tone="success">99.99% Tier-1</StatusTag> },
              { label: '当前拓扑模式', value: '多活 BGP + Anycast 弹性专线', span: 'full' },
            ]}
          />
        </ComponentDocPreview>

        {/* 3.4 IconBadge & ToastContainer 多通道通知 */}
        <ComponentDocPreview
          title="IconBadge / ToastContainer 全局多通道通知与富文本卡片"
          description="IconBadge 提供轻量图标文字徽标；ToastContainer 允许在全屏 6 个方位弹出带 title、description 与 action 按钮的富文本通知卡片，支持悬停暂停倒计时。"
          controls={
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="xs"
                variant="outline"
                onClick={() => {
                  abcToast.success({
                    title: '发布完成',
                    description: '新网关路由规则已全网广播同步至 12 个边缘机房。',
                    action: (
                      <button
                        type="button"
                        className="text-xs font-semibold text-blue-600 hover:underline"
                        onClick={() => toast.info('前往链路追踪大盘')}
                      >
                        查看监控
                      </button>
                    ),
                  })
                }}
              >
                发出 Success 富文本通知
              </Button>
              <Button
                size="xs"
                variant="outline"
                onClick={() => {
                  abcToast.error({
                    title: '同步异常',
                    description: '边缘节点 TLS 握手握手超时 (Error 504 Gateway Timeout)',
                    action: (
                      <button
                        type="button"
                        className="text-xs font-semibold text-red-600 hover:underline"
                        onClick={() => toast.info('已重新下发同步任务')}
                      >
                        重试
                      </button>
                    ),
                  })
                }}
              >
                发出 Error 异常通知
              </Button>
            </div>
          }
          code={`import { IconBadge, abcToast } from '@abc-design/react'

// 1. 图标组合徽标
<IconBadge icon={<Shield className="h-3 w-3" />} label="WAF 阻断保护" variant="success" size="sm" />

// 2. 发出带操作按钮的富文本 Toast
abcToast.success('更新成功', {
  description: '配置已广播至 12 个边缘可用区。',
  action: { label: '查看监控', onClick: () => jump() },
})`}
          apiRows={[
            { prop: 'IconBadge.variant', type: "'default' | 'success' | 'warning' | 'error' | 'info'", defaultValue: "'default'", description: '徽标颜色变体' },
            { prop: 'IconBadge.size', type: "'xs' | 'sm' | 'md'", defaultValue: "'sm'", description: '徽标紧凑度尺寸' },
            { prop: 'abcToast.success / error / info / warning / loading', type: '函数', description: '命令式触发通知，选项支持 title, description, action, duration, pauseOnHover' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <IconBadge icon={<Shield className="h-3.5 w-3.5" />} label="WAF 专网防护" variant="success" size="sm" />
              <IconBadge icon={<Zap className="h-3.5 w-3.5" />} label="BGP Anycast 加速" variant="info" size="sm" />
              <IconBadge icon={<AlertTriangle className="h-3.5 w-3.5" />} label="高负载警戒" variant="warning" size="sm" />
              <IconBadge icon={<ShieldAlert className="h-3.5 w-3.5" />} label="证书阻断" variant="error" size="sm" />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="sm"
                variant="primary"
                onClick={() => {
                  abcToast.success({
                    title: '租户配置下发成功',
                    description: '已向 24 个服务实例下发最新配额参数，耗时 128ms。',
                    action: (
                      <button
                        type="button"
                        className="text-xs font-semibold text-blue-600 hover:underline"
                        onClick={() => toast.info('已调阅 24 个节点的回执日志')}
                      >
                        查看节点回执
                      </button>
                    ),
                  })
                }}
              >
                触发带操作按钮的 Success 卡片通知
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => {
                  abcToast.info({
                    title: '系统自动备份完毕',
                    description: '已向异地冷备份存储归档 4.8 GB 数据库快照。',
                  })
                }}
              >
                触发带描述的 Info 通知
              </Button>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 4. 反馈、进度、骨架屏、分页与错误边界 */}
        <ComponentDocPreview
          title="Alert / Progress / Result / Skeleton / Pagination / ErrorBoundary"
          description="完整覆盖加载态骨架屏（零内联 <style> 注入）、阈值进度条、快速跳页器与单页签异常隔离边界。"
          controls={
            <div className="flex items-center gap-3">
              <Button size="xs" variant="secondary" onClick={() => setProgressPct((p) => Math.max(0, p - 15))}>
                进度 -15%
              </Button>
              <Button size="xs" variant="secondary" onClick={() => setProgressPct((p) => Math.min(100, p + 15))}>
                进度 +15%
              </Button>
              <Button size="xs" variant="danger" onClick={() => setCrash(true)}>
                模拟子组件崩溃
              </Button>
            </div>
          }
          code={`import { Alert, Progress, Pagination, ErrorBoundary, SkeletonCard } from '@abc-design/react'

<Alert tone="warning" title="证书即将到期" description="距离 SSL 证书过期仅剩 7 天" closable />
<Progress percent={${progressPct}} tone="primary" />
<Pagination current={${page}} pageSize={${pageSize}} total={128} onChange={(p, s) => { setPage(p); setPageSize(s) }} />`}
          apiRows={[
            { prop: 'Alert.tone', type: "'info' | 'success' | 'warning' | 'danger'", defaultValue: "'info'", description: '页内横幅语义等级，支持 closable 关闭' },
            { prop: 'Progress.percent', type: 'number', required: true, description: '0 ~ 100 百分比数值，支持条形与仪表盘双形态' },
            { prop: 'Pagination.showQuickJumper', type: 'boolean', defaultValue: 'true', description: '开启快速输入页码跳转并自动执行边界 Clamp' },
            { prop: 'ErrorBoundary.resetKey', type: 'string | number', description: '路由或页签切换时自动重置内部异常状态' },
          ]}
        >
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <Alert
                tone="info"
                title="灰度策略提示"
                description="当前金丝雀节点承接 15% 生产流量，核心指标平稳。"
                closable
              />
              <Alert
                tone="warning"
                title="配额水位预警"
                description="上海金融区集群连接池使用率已达 76%。"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-2">
                <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">连接池水位与任务进度</div>
                <Progress percent={progressPct} tone={progressPct >= 90 ? 'danger' : 'primary'} />
              </div>
              <div className="flex items-center justify-center">
                <Progress percent={progressPct} type="circle" size={68} />
              </div>
            </div>

            <ErrorBoundary onReset={() => setCrash(false)}>
              <CrashTriggerDemo shouldCrash={crash} />
            </ErrorBoundary>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <SkeletonCard />
              <SkeletonTable rows={2} columns={3} />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <EmptyState
                size="sm"
                onReset={() => toast.info('已触发重置筛选回调')}
              />
              <Result
                status="success"
                title="节点扩容任务已提交"
                subTitle="预计 30 秒内完成全网边缘网关配置同步"
                className="py-4"
              />
            </div>

            <Pagination
              current={page}
              pageSize={pageSize}
              total={128}
              onChange={(nextP, nextS) => {
                setPage(nextP)
                setPageSize(nextS)
              }}
            />
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
