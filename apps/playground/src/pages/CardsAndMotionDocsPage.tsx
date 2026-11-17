import { useState } from 'react'
import {
  ActionCard,
  BentoCard,
  BentoGrid,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CheckCard,
  CheckCardGroup,
  Checkbox,
  CollapsibleCard,
  Dialog,
  Input,
  MetricCard,
  PageContainer,
  PricingCard,
  Select,
  SpotlightCard,
  StatusTag,
  Switch,
  Tabs,
  useAbcConfig,
  type AbcMotionPreset,
  type AbcSize,
} from '@abc-design/react'
import { SurfaceAndVisualEffectsDocs } from '../components/SurfaceAndVisualEffectsDocs'
import {
  Activity,
  ArrowUpRight,
  Cpu,
  Database,
  Layers,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'
import { ComponentDocPreview } from '../components/ComponentDocPreview'

const SIZE_OPTIONS: AbcSize[] = ['xs', 'sm', 'md', 'lg']
const MOTION_OPTIONS: AbcMotionPreset[] = ['none', 'subtle', 'smooth', 'spring']
const VARIANT_OPTIONS = ['default', 'bordered', 'ghost', 'elevated', 'glass'] as const

type CardVariantOption = (typeof VARIANT_OPTIONS)[number]

/**
 * 卡片矩阵与多规格动效体系交互文档页
 */
export function CardsAndMotionDocsPage() {
  const { theme, setComponentSize, setMotion, toast } = useAbcConfig()

  // 局部规格与动效沙箱状态（也可一键同步全局主题）
  const [sandboxSize, setSandboxSize] = useState<AbcSize>('md')
  const [sandboxMotion, setSandboxMotion] = useState<AbcMotionPreset>('smooth')
  const [motionDialogOpen, setMotionDialogOpen] = useState(false)

  // Card 增强能力控制项
  const [cardVariant, setCardVariant] = useState<CardVariantOption>('default')
  const [cardSize, setCardSize] = useState<AbcSize>('md')
  const [cardHoverable, setCardHoverable] = useState(true)
  const [cardLoading, setCardLoading] = useState(false)
  const [cardWithCover, setCardWithCover] = useState(true)
  const [cardWithRibbon, setCardWithRibbon] = useState(true)

  // CheckCardGroup 受控状态（单选 + 多选）
  const [planChoice, setPlanChoice] = useState<string>('pro')
  const [capabilityChoices, setCapabilityChoices] = useState<string[]>(['waf', 'autoscaling'])

  // CollapsibleCard 受控示例
  const [collapseOpen, setCollapseOpen] = useState(true)

  return (
    <PageContainer
      title="卡片矩阵与多规格动效体系"
      subtitle="提供 xs / sm / md / lg 全域四档规格与 none / subtle / smooth / spring 四档物理动效，覆盖 Metric、CheckCard、Action、Collapsible、Pricing 与 Bento 非对称网格。"
    >
      <div className="space-y-5">
        {/* 1. 多规格与动效交互体验台 */}
        <Card
          title="全局 / 局部规格与动效体感实验室"
          subtitle="基于 CSS @property 物理曲线 tokens 与 prefers-reduced-motion 降级策略；opacity 与色彩过渡绝不使用过冲曲线。"
          size={sandboxSize}
          motion={sandboxMotion}
          extra={
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="xs"
                variant="outline"
                onClick={() => {
                  setComponentSize(sandboxSize)
                  setMotion(sandboxMotion)
                  toast.success(`已同步至全局：size=${sandboxSize}，motion=${sandboxMotion}`)
                }}
              >
                应用到全局 AbcProvider
              </Button>
              <Button
                size="xs"
                variant="ghost"
                onClick={() => {
                  setComponentSize(undefined)
                  setMotion('smooth')
                  setSandboxSize('md')
                  setSandboxMotion('smooth')
                }}
              >
                恢复默认
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[var(--abc-fg-secondary)]">规格 (Size):</span>
                <div className="inline-flex rounded-lg border border-[var(--abc-border)] bg-[var(--abc-surface-subtle)] p-0.5">
                  {SIZE_OPTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSandboxSize(s)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                        sandboxSize === s
                          ? 'bg-[var(--abc-bg-elevated)] text-[var(--abc-primary)] shadow-sm'
                          : 'text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium text-[var(--abc-fg-secondary)]">动效 (Motion):</span>
                <div className="inline-flex rounded-lg border border-[var(--abc-border)] bg-[var(--abc-surface-subtle)] p-0.5">
                  {MOTION_OPTIONS.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setSandboxMotion(m)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                        sandboxMotion === m
                          ? 'bg-[var(--abc-bg-elevated)] text-[var(--abc-primary)] shadow-sm'
                          : 'text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <StatusTag tone="info" size={sandboxSize} motion={sandboxMotion}>
                全局生效: size={theme.componentSize ?? 'inherit(各组件默认)'} · motion={theme.motion ?? 'smooth'}
              </StatusTag>
            </div>

            <div className="grid gap-3 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-surface-subtle)]/60 p-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">按钮与标签联动</div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size={sandboxSize} motion={sandboxMotion} icon={<Zap className="h-3.5 w-3.5" />}>
                    触发点击回弹
                  </Button>
                  <StatusTag tone="success" size={sandboxSize} motion={sandboxMotion}>
                    在线
                  </StatusTag>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">输入框与下拉菜单</div>
                <div className="flex items-center gap-2">
                  <Input
                    size={sandboxSize}
                    motion={sandboxMotion}
                    placeholder={`size=${sandboxSize}`}
                    defaultValue="网关节点"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">选择器与开关</div>
                <div className="flex items-center gap-3">
                  <Select
                    size={sandboxSize}
                    motion={sandboxMotion}
                    defaultValue="cn-sh"
                    options={[
                      { label: '上海金融区', value: 'cn-sh' },
                      { label: '北京核心区', value: 'cn-bj' },
                    ]}
                  />
                  <Switch size={sandboxSize} motion={sandboxMotion} defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">浮层与弹窗动效体验</div>
                <div className="flex items-center gap-2">
                  <Button
                    size={sandboxSize}
                    variant="outline"
                    motion={sandboxMotion}
                    onClick={() => setMotionDialogOpen(true)}
                  >
                    打开 {sandboxMotion} 弹窗
                  </Button>
                </div>
              </div>
            </div>

            <Tabs
              size={sandboxSize}
              motion={sandboxMotion}
              variant="line"
              items={[
                { key: 'tab1', label: '物理微交互', children: <span className="text-xs text-[var(--abc-fg-secondary)]">切换页签与悬停卡片可观察 {sandboxMotion} 曲线响应。</span> },
                { key: 'tab2', label: '无障碍降级', children: <span className="text-xs text-[var(--abc-fg-secondary)]">motion=&quot;none&quot; 或系统开启减少动态效果时，所有浮层即时卸载且位移降级。</span> },
                { key: 'tab3', label: '容器查询适配', children: <span className="text-xs text-[var(--abc-fg-secondary)]">Card 默认开启 @container 上下文，内容根据容器宽度响应排布。</span> },
              ]}
            />
          </div>
        </Card>

        {/* 2. 增强 Card 与 SpotlightCard */}
        <ComponentDocPreview
          title="Card & SpotlightCard 基础与聚光灯容器卡片"
          description="新增 variant（default / bordered / ghost / elevated / glass）、size（xs~lg）、cover 顶部封面插槽、statusRibbon 角标丝带、loading 骨架屏态与统一动效配置。"
          controls={
            <>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[var(--abc-fg-secondary)]">variant:</span>
                <Select
                  size="xs"
                  value={cardVariant}
                  onChange={(val) => setCardVariant(val as CardVariantOption)}
                  options={VARIANT_OPTIONS.map((v) => ({ label: v, value: v }))}
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[var(--abc-fg-secondary)]">size:</span>
                <Select
                  size="xs"
                  value={cardSize}
                  onChange={(val) => setCardSize(val as AbcSize)}
                  options={SIZE_OPTIONS.map((s) => ({ label: s, value: s }))}
                />
              </div>
              <Checkbox label="hoverable" checked={cardHoverable} onChange={setCardHoverable} />
              <Checkbox label="cover" checked={cardWithCover} onChange={setCardWithCover} />
              <Checkbox label="statusRibbon" checked={cardWithRibbon} onChange={setCardWithRibbon} />
              <Checkbox label="loading" checked={cardLoading} onChange={setCardLoading} />
            </>
          }
          code={`import { Card, SpotlightCard } from '@abc-design/react'

export function Demo() {
  return (
    <Card
      as="article"
      variant="${cardVariant}"
      size="${cardSize}"
      hoverable={${cardHoverable}}
      loading={${cardLoading}}${cardWithRibbon ? `\n      statusRibbon={{ text: 'SLA 99.99%', tone: 'primary' }}` : ''}
      title="边缘计算调度节点"
      subtitle="CN-South 深圳高性能可用区"
    >
      多租户隔离与自动弹性扩缩容已开启。
    </Card>
  )
}`}
          apiRows={[
            { prop: 'variant', type: "'default' | 'bordered' | 'ghost' | 'elevated' | 'glass'", defaultValue: "'default'", description: '卡片容器表面材质与边框层次' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: '统一尺寸规格（内边距、标题字号与间距按档位缩放）' },
            { prop: 'as', type: "'div' | 'article' | 'section'", defaultValue: "'div'", description: '语义化 HTML 容器标签' },
            { prop: 'cover', type: 'ReactNode', description: '顶部全宽封面图或插画区' },
            { prop: 'statusRibbon', type: '{ text: string; tone?: StatusTone }', description: '右上角浮动状态丝带配置' },
            { prop: 'loading', type: 'boolean', defaultValue: 'false', description: '切换内容区为脉冲骨架占位态' },
            { prop: 'motion', type: "'none' | 'subtle' | 'smooth' | 'spring'", defaultValue: '全局继承', description: '覆写卡片悬停抬升与按压动效' },
          ]}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card
              as="article"
              variant={cardVariant}
              size={cardSize}
              motion={sandboxMotion}
              hoverable={cardHoverable}
              loading={cardLoading}
              statusRibbon={
                cardWithRibbon
                  ? { text: 'SLA 99.99%', tone: 'primary' }
                  : undefined
              }
              cover={
                cardWithCover ? (
                  <div className="flex h-24 items-center justify-between bg-gradient-to-r from-blue-600/90 via-indigo-600/85 to-violet-600/90 px-5 text-white">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider opacity-80">Edge Mesh</div>
                      <div className="text-sm font-semibold">实时流式路由网关</div>
                    </div>
                    <Server className="h-7 w-7 opacity-85" />
                  </div>
                ) : undefined
              }
              title="边缘计算调度节点"
              subtitle="CN-South 深圳高性能可用区"
              extra={<Button size="xs" variant="ghost">控制台</Button>}
            >
              <p className="text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
                支持零停机滚动升级与租户级配额隔离，内置连接池健康探针。
              </p>
            </Card>

            <SpotlightCard
              size={cardSize}
              motion={sandboxMotion}
              hoverable={cardHoverable}
              className="flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--abc-fg)]">
                  <Sparkles className="h-4 w-4 text-[var(--abc-primary)]" />
                  SpotlightCard 鼠标光斑追踪
                </div>
                <p className="text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
                  鼠标滑过时随指针坐标渲染径向聚光灯效果，适合特性高亮区、AI 能力介绍与关键入口展示。
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[var(--abc-border)] pt-3 text-xs text-[var(--abc-fg-secondary)]">
                <span>支持 size &amp; motion 预设</span>
                <StatusTag tone="info" size="xs">交互响应</StatusTag>
              </div>
            </SpotlightCard>
          </div>
        </ComponentDocPreview>

        {/* 2.1 Card 复合子组件 (CardHeader / CardTitle / CardDescription / CardContent / CardFooter) */}
        <ComponentDocPreview
          title="Card 复合子组件 (CardHeader / CardTitle / CardDescription / CardContent / CardFooter)"
          description="遵循现代原子化组件库设计规范，提供模块化分拆插槽，满足更精细排版、多栏嵌套以及自定义图表与操作栏的复杂卡片需求。"
          code={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from '@abc-design/react'

<Card variant="bordered" className="max-w-md">
  <CardHeader>
    <CardTitle>多活集群自动化巡检</CardTitle>
    <CardDescription>系统每 15 分钟执行一次健康探活与故障自愈演练</CardDescription>
  </CardHeader>
  <CardContent className="text-xs text-[var(--abc-fg-secondary)]">
    最近一次巡检报告已生成，全部 128 个微服务 Pod 均处于 Healthy 状态。
  </CardContent>
  <CardFooter className="justify-between">
    <span className="text-xs text-[var(--abc-fg-muted)]">调度周期: T+15m</span>
    <Button size="xs" variant="primary">查看明细</Button>
  </CardFooter>
</Card>`}
          apiRows={[
            { prop: 'CardHeader', type: 'HTMLAttributes<HTMLDivElement>', description: '卡片头部容器，内置上下间距与下边框' },
            { prop: 'CardTitle', type: 'HTMLAttributes<HTMLHeadingElement>', description: '卡片一级标题 h3 语义标签' },
            { prop: 'CardDescription', type: 'HTMLAttributes<HTMLParagraphElement>', description: '卡片副标题说明文字' },
            { prop: 'CardContent', type: 'HTMLAttributes<HTMLDivElement>', description: '卡片核心内容插槽' },
            { prop: 'CardFooter', type: 'HTMLAttributes<HTMLDivElement>', description: '卡片吸底操作条，内置上边框' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card variant="bordered" hoverable>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>微服务网格拓扑治理</CardTitle>
                  <StatusTag tone="success" size="xs">已纳管</StatusTag>
                </div>
                <CardDescription>
                  自动同步 Envoy 路由规则与服务发现注册中心（Consul / Nacos）
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--abc-fg-secondary)]">健康度评分:</span>
                  <span className="font-mono font-semibold text-[var(--abc-success)]">99.8% (Tier-0)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--abc-fg-secondary)]">跨机房 RTT 延迟:</span>
                  <span className="font-mono text-[var(--abc-fg)]">0.82ms</span>
                </div>
              </CardContent>
              <CardFooter className="justify-between pt-4">
                <span className="text-[11px] text-[var(--abc-fg-muted)]">同步协议: gRPC TLS</span>
                <Button size="xs" variant="outline">
                  管理网格
                </Button>
              </CardFooter>
            </Card>

            <Card variant="elevated" hoverable>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>弹性算力自动扩缩容</CardTitle>
                  <StatusTag tone="primary" size="xs">运行中</StatusTag>
                </div>
                <CardDescription>
                  依据 CPU / 内存及实时 QPS 突发流量自动弹性伸缩
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--abc-fg-secondary)]">当前副本数:</span>
                  <span className="font-mono font-semibold text-[var(--abc-fg)]">12 / 64 Pods</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--abc-fg-secondary)]">预热冷启动耗时:</span>
                  <span className="font-mono text-[var(--abc-primary)]">&lt; 1.2s</span>
                </div>
              </CardContent>
              <CardFooter className="justify-between pt-4">
                <span className="text-[11px] text-[var(--abc-fg-muted)]">伸缩算法: PID 控制器</span>
                <Button size="xs" variant="primary">
                  配置规则
                </Button>
              </CardFooter>
            </Card>
          </div>
        </ComponentDocPreview>

        {/* 3. MetricCard */}
        <ComponentDocPreview
          title="MetricCard 数据指标与微趋势卡片"
          description="面向后台工作台与运营驾驶舱，支持前后缀数值展示、涨跌趋势方向徽标、原生 SVG Sparkline 微趋势折线与加载骨架态。"
          code={`import { MetricCard } from '@abc-design/react'
import { Activity } from 'lucide-react'

export function Demo() {
  return (
    <MetricCard
      title="今日全网结算净额"
      prefix="¥"
      value="1,284,920"
      trend={{ value: '+14.8%', direction: 'up', label: '较昨日同期' }}
      sparkline={[42, 58, 51, 74, 68, 92, 108]}
      icon={<Activity className="h-4 w-4" />}
      hoverable
    />
  )
}`}
          apiRows={[
            { prop: 'title', type: 'ReactNode', description: '指标名称' },
            { prop: 'value', type: 'ReactNode', description: '核心主数值（建议搭配 tabular-nums 对齐）' },
            { prop: 'prefix / suffix', type: 'ReactNode', description: '数值前缀（如 ¥ / $）与后缀单位' },
            { prop: 'trend', type: "{ value: string | number; direction?: 'up' | 'down' | 'flat'; label?: string }", description: '涨跌对比数据与辅助说明' },
            { prop: 'sparkline', type: 'number[]', description: '轻量内置 SVG 折线与渐变面积微图数组' },
            { prop: 'loading', type: 'boolean', defaultValue: 'false', description: '是否展示骨架占位' },
          ]}
        >
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard
              title="今日结算净额"
              prefix="¥"
              value="1,284,920"
              trend={{ value: '+14.8%', direction: 'up', label: '较昨日' }}
              sparkline={[42, 58, 51, 74, 68, 92, 108]}
              icon={<Activity className="h-4 w-4" />}
              size={sandboxSize}
              motion={sandboxMotion}
              hoverable
            />
            <MetricCard
              title="网关 P99 响应时延"
              value="18.4"
              suffix="ms"
              trend={{ value: '-6.2%', direction: 'down', label: '性能改善' }}
              sparkline={[30, 27, 26, 22, 21, 19, 18]}
              icon={<Cpu className="h-4 w-4" />}
              size={sandboxSize}
              motion={sandboxMotion}
              hoverable
            />
            <MetricCard
              title="活跃专线租户"
              value="3,412"
              trend={{ value: '0.0%', direction: 'flat', label: '持平' }}
              footer="统计周期：近 24 小时实时聚合"
              icon={<Database className="h-4 w-4" />}
              size={sandboxSize}
              motion={sandboxMotion}
              hoverable
            />
          </div>
        </ComponentDocPreview>

        {/* 4. CheckCardGroup & CheckCard */}
        <ComponentDocPreview
          title="CheckCardGroup & CheckCard 卡片式单选 / 多选器"
          description="底层使用原生 label + checkbox / radio 确保无障碍键盘焦距可达；选中态采用 box-shadow ring 而非加粗边框或修改内边距，杜绝零布局抖动。"
          code={`import { useState } from 'react'
import { CheckCard, CheckCardGroup } from '@abc-design/react'

export function Demo() {
  const [plan, setPlan] = useState('pro')
  return (
    <CheckCardGroup value={plan} onChange={(v) => setPlan(String(v))} columns={3}>
      <CheckCard value="starter" title="标准版" description="适用中小型项目" />
      <CheckCard value="pro" title="企业旗舰版" description="高可用多区容灾" />
      <CheckCard value="custom" title="专属私有云" description="支持独立 VPC" disabled />
    </CheckCardGroup>
  )
}`}
          apiRows={[
            { prop: 'multiple', type: 'boolean', defaultValue: 'false', description: '是否启用多选模式（对应 value 为 string[]）' },
            { prop: 'value / defaultValue', type: 'string | string[]', description: '受控或非受控当前选中值' },
            { prop: 'columns', type: '1 | 2 | 3 | 4', defaultValue: '2', description: '响应式栅格列数' },
            { prop: 'CheckCard.extra', type: 'ReactNode', description: '标题右侧补充徽标（如价格或标签）' },
            { prop: 'CheckCard.disabled', type: 'boolean', description: '禁用单个选项卡片交互' },
          ]}
        >
          <div className="space-y-4">
            <div>
              <div className="mb-2 text-xs font-medium text-[var(--abc-fg-secondary)]">
                单选部署规格（当前选择：{planChoice}）：
              </div>
              <CheckCardGroup
                columns={3}
                size={sandboxSize}
                motion={sandboxMotion}
                value={planChoice}
                onChange={(v) => setPlanChoice(String(v))}
              >
                <CheckCard
                  value="starter"
                  title="标准共享集群"
                  description="适合开发联调与轻量级 Web 服务。"
                  icon={<Layers className="h-4 w-4" />}
                  extra={<StatusTag tone="neutral" size="xs">10 Gbps</StatusTag>}
                />
                <CheckCard
                  value="pro"
                  title="企业高可用集群"
                  description="多可用区自动主备切换与独立流控队列。"
                  icon={<ShieldCheck className="h-4 w-4" />}
                  extra={<StatusTag tone="primary" size="xs">推荐</StatusTag>}
                />
                <CheckCard
                  value="dedicated"
                  title="金融级物理隔离"
                  description="当前可用区暂无空余宿主机，请联系销售预约。"
                  icon={<Server className="h-4 w-4" />}
                  disabled
                />
              </CheckCardGroup>
            </div>

            <div>
              <div className="mb-2 text-xs font-medium text-[var(--abc-fg-secondary)]">
                多选安全插件（已开启：{capabilityChoices.join(', ') || '无'}）：
              </div>
              <CheckCardGroup
                multiple
                columns={2}
                size={sandboxSize}
                motion={sandboxMotion}
                value={capabilityChoices}
                onChange={(v) => setCapabilityChoices((Array.isArray(v) ? v : [v]).map(String))}
              >
                <CheckCard
                  value="waf"
                  title="智能 WAF 防护网关"
                  description="实时识别 CC、SQL 注入及异常爬虫流量。"
                />
                <CheckCard
                  value="autoscaling"
                  title="毫秒级弹性扩缩容"
                  description="根据并发连接数与 CPU 水位自动调节副本。"
                />
              </CheckCardGroup>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 5. ActionCard & CollapsibleCard */}
        <ComponentDocPreview
          title="ActionCard 动作卡片 & CollapsibleCard 折叠卡片"
          description="ActionCard 基于 Stretched Link 伪元素扩大整个卡片点击热区，同时通过 z-10 隔离右上角 extra 次级按钮，避免误触；CollapsibleCard 内置平滑 grid 高度展开。"
          code={`<ActionCard
  title="查看租户账单审计流水"
  description="全卡片热区可点击跳转，右上角导出按钮事件完全隔离。"
  tags={['财务审计', '只读']}
  extra={<Button size="xs" variant="outline">导出 CSV</Button>}
  onClick={() => toast.info('打开审计详情')}
/>`}
          apiRows={[
            { prop: 'ActionCard.href / onClick', type: 'string / () => void', description: '整卡主动作（渲染为语义化 <a> 或 <button>）' },
            { prop: 'ActionCard.extra', type: 'ReactNode', description: '右上角次级操作区（与整卡主点击事件互斥隔离）' },
            { prop: 'ActionCard.tags', type: 'string[]', description: '底部关键词标签列表' },
            { prop: 'CollapsibleCard.open / defaultOpen', type: 'boolean', description: '受控或非受控展开状态' },
          ]}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <ActionCard
              title="网关异常告警自动处置策略"
              description="当上游节点连续 3 次健康检查超时，自动摘除流量并推送飞书/钉钉群通知。"
              icon={<Zap className="h-4 w-4" />}
              tags={['自动故障转移', '告警联动']}
              size={sandboxSize}
              motion={sandboxMotion}
              extra={
                <Button
                  size="xs"
                  variant="outline"
                  onClick={() => toast.success('已点击隔离按钮 extra（未触发整卡动作）')}
                >
                  独立配置
                </Button>
              }
              onClick={() => toast.info('触发了 ActionCard 主点击热区')}
            />

            <CollapsibleCard
              title="高阶合规与加密策略说明"
              subtitle="支持受控 open / onOpenChange 状态同步"
              icon={<ShieldCheck className="h-4 w-4" />}
              size={sandboxSize}
              motion={sandboxMotion}
              open={collapseOpen}
              onOpenChange={setCollapseOpen}
              extra={
                <StatusTag tone={collapseOpen ? 'success' : 'neutral'} size="xs">
                  {collapseOpen ? '已展开' : '已收起'}
                </StatusTag>
              }
            >
              <p className="text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
                所有落盘敏感凭据均采用信封加密托管，并在传输链路强制开启 TLS 1.3 双向证书校验。点击右上角折叠图标可测试 CSS Grid 顺滑过渡。
              </p>
            </CollapsibleCard>
          </div>
        </ComponentDocPreview>

        {/* 6. PricingCard & BentoGrid */}
        <ComponentDocPreview
          title="PricingCard 定价套餐卡 & BentoGrid 非对称便当网格"
          description="PricingCard 面向 SaaS 计费与版本升级对比；BentoGrid 支持 2~4 列自适应与跨行跨列 colSpan / rowSpan，适合工作台能力矩阵与控制台概览。"
          code={`<BentoGrid columns={3} gap="md">
  <BentoCard colSpan={2} eyebrow="核心引擎" title="分布式边缘调度" description="全球 42 个节点低延迟转发" />
  <BentoCard eyebrow="安全隔离" title="零信任 mTLS" description="自动签发与轮换工作负载证书" />
</BentoGrid>`}
          apiRows={[
            { prop: 'PricingCard.tier / price / period', type: 'ReactNode / ReactNode / string', description: '套餐等级名、价格主体与计费周期' },
            { prop: 'PricingCard.features', type: 'Array<{ text: ReactNode; included?: boolean } | string>', description: '功能清单列表（included=false 自动灰色划掉对比）' },
            { prop: 'PricingCard.recommended', type: 'boolean', description: '高亮主推方案边框与顶部徽标' },
            { prop: 'BentoGrid.columns / gap', type: '2 | 3 | 4 / AbcSize', description: '网格列数与间距档位' },
            { prop: 'BentoCard.colSpan / rowSpan', type: '1 | 2 | 3 / 1 | 2', description: '单个单元格横向与纵向跨度' },
          ]}
        >
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <PricingCard
                tier="团队标准版"
                price="¥299"
                period="/ 月"
                description="满足成长型研发团队的常规管理与权限审计需求。"
                size={sandboxSize}
                motion={sandboxMotion}
                features={[
                  '最多 25 名管理员席位',
                  '90 天完整操作审计日志',
                  { text: '跨区容灾与自定义 SLA 保障', included: false },
                ]}
                ctaText="选择标准版"
                onSelect={() => toast.info('已选择团队标准版')}
              />
              <PricingCard
                tier="企业旗舰版"
                price="¥1,299"
                period="/ 月"
                badge="最受欢迎"
                recommended
                description="为大规模多租户商用系统提供金融级高可用支撑。"
                size={sandboxSize}
                motion={sandboxMotion}
                features={[
                  '不限管理员与细粒度 RBAC 角色',
                  '365 天实时审计检索与归档导出',
                  { text: '独立专用 VPC 网关与 99.99% SLA', included: true },
                ]}
                ctaText="立即升级旗舰版"
                onSelect={() => toast.success('已选择企业旗舰版')}
              />
            </div>

            <BentoGrid columns={3} gap={sandboxSize}>
              <BentoCard
                colSpan={2}
                eyebrow="核心引擎"
                title="智能流量编排与实时回滚"
                description="支持基于租户、区域与请求头的灰度放量策略，毫秒级异常熔断保护。"
                icon={<ArrowUpRight className="h-4 w-4" />}
                size={sandboxSize}
                motion={sandboxMotion}
                hoverable
                footer={<span className="text-xs text-[var(--abc-fg-secondary)]">覆盖 42 个边缘接入点</span>}
              />
              <BentoCard
                eyebrow="安全基线"
                title="全链路零信任校验"
                description="自动签名轮换与细粒度操作权限拦截。"
                icon={<ShieldCheck className="h-4 w-4" />}
                size={sandboxSize}
                motion={sandboxMotion}
                hoverable
                footer={<StatusTag tone="success" size="xs">已合规</StatusTag>}
              />
            </BentoGrid>
          </div>
        </ComponentDocPreview>

        <SurfaceAndVisualEffectsDocs />
      </div>

      {/* 体验各种 Motion 预设的 Dialog */}
      <Dialog
        open={motionDialogOpen}
        onClose={() => setMotionDialogOpen(false)}
        title={`动效规格预览 (${sandboxMotion})`}
        description="观察弹出与关闭关闭瞬间的动画曲线与时长反馈。"
        motion={sandboxMotion}
        footer={
          <div className="flex justify-end gap-2">
            <Button size={sandboxSize} variant="outline" onClick={() => setMotionDialogOpen(false)}>
              关闭
            </Button>
          </div>
        }
      >
        <p className="text-sm text-[var(--abc-fg-secondary)]">
          当前正在使用 <code className="rounded bg-[var(--abc-surface-subtle)] px-1.5 py-0.5 font-mono text-xs">{sandboxMotion}</code> 预设渲染弹窗入场与离场动画。
        </p>
      </Dialog>
    </PageContainer>
  )
}
