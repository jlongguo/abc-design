import React, { useState } from 'react'
import {
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Collapse,
  CopyableText,
  Descriptions,
  Dialog,
  Drawer,
  EmptyState,
  ErrorBoundary,
  ImagePreview,
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
  Tabs,
  Timeline,
  Tooltip,
  abcConfirm,
  useAbcConfig,
} from '@abc-design/react'
import { Bell, Layers, Sparkles } from 'lucide-react'
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

        {/* 3. 原生模态框、多级层叠抽屉与命令式确认框 */}
        <ComponentDocPreview
          title="Dialog / Drawer (L1→L2 层叠推挤) / abcConfirm"
          description="Dialog 基于原生 <dialog>.showModal() 实现焦点自锁且不锁死 body 滚动条；Drawer 支持边缘无级调宽与打开二级子抽屉时底层自动左移缩放。"
          code={`import { Dialog, Drawer, abcConfirm } from '@abc-design/react'

const accepted = await abcConfirm({
  title: '确认吊销该密钥？',
  message: '吊销后关联调用将立即返回 401，不可撤销。',
  tone: 'danger',
})`}
          apiRows={[
            { prop: 'Dialog.open / visible', type: 'boolean', defaultValue: 'false', description: '控制模态弹窗显隐（支持按住标题栏拖拽与双击全屏）' },
            { prop: 'Drawer.push', type: 'boolean', defaultValue: 'true', description: '打开下级子抽屉时，当前抽屉是否自动向左层叠推移并显示 L1/L2 角标' },
            { prop: 'Drawer.resizable', type: 'boolean', defaultValue: 'true', description: '允许拖拽抽屉侧边缘自由调整宽度并支持 storageKey 本地记忆' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" onClick={() => setDialogOpen(true)}>
              打开可拖拽/全屏 Dialog
            </Button>
            <Button
              variant="secondary"
              icon={<Layers className="h-3.5 w-3.5" />}
              onClick={() => setDrawerL1(true)}
            >
              体验多级层叠抽屉 (L1 → L2)
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
                toast.info(ok ? '已执行吊销动作' : '已安全取消（默认焦点在取消按钮防误触）')
              }}
            >
              触发高危操作确认框
            </Button>
            <Tooltip content="同时支持鼠标悬停与键盘 Tab 聚焦触发">
              <Button variant="ghost" icon={<Sparkles className="h-3.5 w-3.5" />}>
                悬浮提示 Tooltip
              </Button>
            </Tooltip>
          </div>

          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title="原生顶层 <dialog> 模态框"
            description="尝试按住标题栏拖拽位置，或双击标题栏切换全屏"
            footer={
              <>
                <Button variant="secondary" onClick={() => setDialogOpen(false)}>
                  关闭
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    toast.success('配置已保存')
                    setDialogOpen(false)
                  }}
                >
                  确定
                </Button>
              </>
            }
          >
            <p className="leading-relaxed">
              遵循现代 Web 规范：使用 CSS <code>overscroll-behavior: contain</code> 隔离滚动链，绝不粗暴给{' '}
              <code>body</code> 注入 <code>overflow: hidden</code>，彻底根治弹窗开关时的页面横向抖动；遮罩支持按下与抬起双重点外判定，防止框选文字误触关闭。
            </p>
          </Dialog>

          <Drawer
            open={drawerL1}
            onClose={() => setDrawerL1(false)}
            title="客户全生命周期档案（一级主抽屉）"
            description="拖拽左边缘可无级调宽；点击下方按钮打开二级关联抽屉"
            size="lg"
          >
            <div className="space-y-4">
              <Alert
                tone="info"
                title="多级抽屉栈自动编排"
                description="当打开 L2 子抽屉时，当前 L1 抽屉会自动平滑向左推移并缩小比例，按 Esc 键仅关闭最顶层抽屉。"
              />
              <Button variant="primary" onClick={() => setDrawerL2(true)}>
                下钻查看单笔订单流水 (打开 L2 子抽屉) →
              </Button>
            </div>
          </Drawer>

          <Drawer
            open={drawerL2}
            onClose={() => setDrawerL2(false)}
            title="订单支付网关原始报文（二级子抽屉）"
            size="md"
          >
            <pre className="rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-3 font-mono text-[11px]">
              {JSON.stringify(
                { tradeNo: 'TXN_20261114_8821', channel: 'STRIPE_ENTERPRISE', amountCents: 129000 },
                null,
                2
              )}
            </pre>
          </Drawer>
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
