import React, { useEffect, useMemo, useState } from 'react'
import {
  Button,
  Card,
  CommandTriggerButton,
  DataTable,
  Input,
  PageContainer,
  ProCommandPalette,
  ProFormContainer,
  ProLogViewer,
  ProPageHeader,
  SelectField,
  StatusTag,
  Switch,
  abcToast,
  useCursorStack,
  type LogEntry,
  type ProCommandActionItem,
  type ProCommandEntityMatcher,
  type ProCommandPageItem,
} from '@abc-design/react'
import {
  Activity,
  Globe,
  Hash,
  Layers,
  Play,
  Plus,
  RefreshCw,
  Terminal,
  Trash2,
  Zap,
} from 'lucide-react'
import { ComponentDocPreview } from '../components/ComponentDocPreview'

interface CursorDemoRow {
  id: string
  endpoint: string
  status: string
}

const CURSOR_DEMO_PAGES: Record<string, { rows: CursorDemoRow[]; next: string | null }> = {
  ROOT: {
    rows: [
      { id: 'del_01', endpoint: 'https://hooks.acme.dev/events', status: '200 OK' },
      { id: 'del_02', endpoint: 'https://ops.internal/billing', status: '200 OK' },
    ],
    next: 'cursor_p2',
  },
  cursor_p2: {
    rows: [
      { id: 'del_03', endpoint: 'https://audit.corp/sink', status: '502 Bad Gateway' },
    ],
    next: null,
  },
}

const ProPageHeaderAndDataTableSection: React.FC = () => {
  const [tableLoading, setTableLoading] = useState(false)
  const cursor = useCursorStack()
  const pageKey = cursor.currentCursor ?? 'ROOT'
  const currentPage = CURSOR_DEMO_PAGES[pageKey] ?? CURSOR_DEMO_PAGES.ROOT

  return (
    <ComponentDocPreview
      title="ProPageHeader / DataTable / useCursorStack 企业中后台底座"
      description="沉淀自管理台多页面统一页头与骨架表格：ProPageHeader 内置右侧操作说明抽屉及屏幕阅读器无障碍摘要；DataTable 支持结构化骨架行与双模游标分页栈。"
      controls={
        <div className="flex items-center gap-2">
          <Button size="xs" variant="outline" onClick={() => setTableLoading((v) => !v)}>
            {tableLoading ? '退出骨架加载态' : '预览骨架加载态'}
          </Button>
          <StatusTag tone="info">当前游标: {pageKey}</StatusTag>
        </div>
      }
      code={`import { ProPageHeader, DataTable, useCursorStack } from '@abc-design/react'

const cursor = useCursorStack()

<ProPageHeader
  title="Webhook 投递审计"
  description="监控异步回调投递延迟与重试退避"
  guide={{ badge: '排障指南', title: '投递排障流程', steps: [{ title: '核对签章' }] }}
/>
<DataTable
  loading={loading}
  columns={[{ key: 'endpoint', header: '回调地址', render: (r) => r.endpoint }]}
  data={rows}
  keyExtractor={(r) => r.id}
  pagination={{
    hasPrev: cursor.hasPrev,
    hasMore: Boolean(nextCursor),
    onPrevCursor: cursor.popCursor,
    onNextCursor: () => nextCursor && cursor.pushCursor(nextCursor),
  }}
/>`}
      apiRows={[
        { prop: 'ProPageHeader.guide', type: 'ProPageGuide', description: '右侧滑出分步操作说明抽屉与 sr-only 语义摘要' },
        { prop: 'DataTable.skeletonRows', type: 'number', defaultValue: '5', description: '加载态自动渲染的结构化骨架行数' },
        { prop: 'useCursorStack()', type: '{ currentCursor, hasPrev, pushCursor, popCursor, resetCursor }', description: '单向游标历史栈，支持上一页出栈回溯' },
      ]}
    >
      <div className="space-y-4">
        <ProPageHeader
          title="Webhook 投递监控"
          description="实时追踪所有出站事件投递状态、响应码与重试历史"
          tags={<StatusTag tone="success">实时同步</StatusTag>}
          guide={{
            badge: '运维指南',
            title: '回调超时排查步骤',
            steps: [
              { title: '1. 检查目标端点签章校验', description: '确认 HMAC-SHA256 时间窗在 5 分钟内' },
              { title: '2. 观察退避重试时间轴', description: '连续 5 次 5xx 将进入死信等待人工重放' },
            ],
          }}
        />
        <DataTable<CursorDemoRow>
          loading={tableLoading}
          skeletonRows={2}
          columns={[
            { key: 'id', header: '投递 ID', mono: true, render: (r) => r.id },
            { key: 'endpoint', header: '回调地址', render: (r) => r.endpoint },
            { key: 'status', header: '响应状态', render: (r) => <StatusTag tone={r.status.startsWith('2') ? 'success' : 'danger'}>{r.status}</StatusTag> },
          ]}
          data={currentPage.rows}
          keyExtractor={(r) => r.id}
          pagination={{
            hasPrev: cursor.hasPrev,
            hasMore: Boolean(currentPage.next),
            onPrevCursor: cursor.popCursor,
            onNextCursor: () => currentPage.next && cursor.pushCursor(currentPage.next),
          }}
        />
      </div>
    </ComponentDocPreview>
  )
}

export interface ProOpsSuitePageProps {
  onJump?: (path: string) => void
}

/** 生成用于压测虚拟滚动的大规模仿真日志 */
function buildInitialLogs(count = 5000): LogEntry[] {
  const levels: Array<'info' | 'warn' | 'error'> = ['info', 'info', 'info', 'info', 'warn', 'error']
  const messages = [
    'CDP 会话握手成功，注入防指纹运行时策略',
    '调度器已续约节点 runner-cn-east-04 租约 (TTL 30s)',
    '代理通道 socks5://gateway-02 RTT 波动至 280ms，已切换备用线路',
    '脚本步骤 #4 extract_html 完成，产物体积 184.2 KB',
    '目标站点返回 HTTP 429 速率限制，自动退避重试 #1',
    '页面导航超时 (timeout=15000ms)，已保存现场错误截图与 DOM 快照',
  ]
  const baseTs = Date.now() - count * 1200
  return Array.from({ length: count }, (_, idx) => {
    const level = levels[idx % levels.length]
    const seq = idx + 1
    return {
      seq,
      level,
      message: `[#${String(seq).padStart(4, '0')}] ${messages[idx % messages.length]}`,
      created_at: new Date(baseTs + idx * 1200).toISOString(),
      detail:
        level === 'error'
          ? { runner: `runner-${(idx % 5) + 1}`, code: 'ERR_NAV_TIMEOUT', retryable: true }
          : undefined,
    }
  })
}

export const ProOpsSuitePage: React.FC<ProOpsSuitePageProps> = ({ onJump }) => {
  // 1. ProCommandPalette 状态
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [paletteQuery, setPaletteQuery] = useState('')
  const [lastCommandHit, setLastCommandHit] = useState<string>('尚未触发命令或实体跳转')

  const openPaletteWithPreset = (preset: string) => {
    setPaletteQuery(preset)
    setPaletteOpen(true)
  }

  const commandEntityMatchers = useMemo<ProCommandEntityMatcher[]>(
    () => [
      {
        id: 'job-lookup',
        prefix: 'job_',
        labelPrefix: '精准定位任务日志: ',
        tone: 'blue',
        icon: <Hash className="h-4 w-4 text-blue-500" />,
        onSelect: (q) => {
          setLastCommandHit(`实体匹配 [Job]: 直达任务 ${q} 控制台与日志追踪视图`)
          abcToast.success(`已定位任务实体 ${q}`)
        },
      },
      {
        id: 'org-lookup',
        prefix: 'org_',
        labelPrefix: '切换至租户空间: ',
        tone: 'purple',
        icon: <Globe className="h-4 w-4 text-purple-500" />,
        onSelect: (q) => {
          setLastCommandHit(`实体匹配 [Organization]: 检视组织 ${q} 配额与账单`)
          abcToast.info(`已检视组织空间 ${q}`)
        },
      },
      {
        id: 'ticket-lookup',
        match: (q) => /^tn-\d+/i.test(q),
        labelPrefix: '打开审计工单号: ',
        tone: 'amber',
        icon: <Zap className="h-4 w-4 text-amber-500" />,
        onSelect: (q) => {
          setLastCommandHit(`正则实体匹配 [Ticket]: 打开审批工单 ${q.toUpperCase()}`)
          abcToast.warning(`打开审批工单 ${q.toUpperCase()}`)
        },
      },
    ],
    []
  )

  const commandPages = useMemo<ProCommandPageItem[]>(
    () => [
      {
        to: '/',
        label: '组件库总览与包架构',
        group: '设计系统文档',
        keywords: 'overview zonglan 架构',
        icon: <Layers className="h-4 w-4 text-slate-500" />,
      },
      {
        to: '/docs/general-form',
        label: '通用表单与主题切换文档',
        group: '设计系统文档',
        keywords: 'button select themeswitcher biaodan zhuti',
        icon: <Activity className="h-4 w-4 text-slate-500" />,
      },
      {
        to: '/docs/data-feedback',
        label: '数据反馈与水印权限文档',
        group: '设计系统文档',
        keywords: 'watermark permission pagination shuiyin quanxian',
        icon: <Activity className="h-4 w-4 text-slate-500" />,
      },
      {
        to: '/pro/table',
        label: 'ProTable 企业级数据表格',
        group: 'Pro 套件',
        keywords: 'table biaoge liebiao',
        icon: <Terminal className="h-4 w-4 text-slate-500" />,
      },
    ],
    []
  )

  const commandActions = useMemo<ProCommandActionItem[]>(
    () => [
      {
        id: 'action-append-log',
        label: '向下方日志流注入一条模拟告警 (warn)',
        group: '快捷调试动作',
        keywords: 'zhuru jinggao log warn',
        icon: <Zap className="h-4 w-4 text-amber-500" />,
        onSelect: () => {
          appendCustomLog('warn', '通过全局命令面板注入：上游 DNS 解析延迟升高 (>320ms)')
          setLastCommandHit('执行快捷动作: 已注入一条 warn 级别模拟日志')
        },
      },
      {
        id: 'action-open-form',
        label: '打开并发策略 ProFormContainer 配置抽屉',
        group: '快捷调试动作',
        keywords: 'form drawer peizhi dakai',
        icon: <Plus className="h-4 w-4 text-blue-500" />,
        onSelect: () => {
          setFormDrawerOpen(true)
          setLastCommandHit('执行快捷动作: 已拉起 ProFormContainer 配置表单')
        },
      },
    ],
    []
  )

  // 2. ProLogViewer 状态（默认 5000 条虚拟列表）
  const [logs, setLogs] = useState<LogEntry[]>(() => buildInitialLogs(5000))
  const [streaming, setStreaming] = useState(false)

  const appendCustomLog = (level: 'info' | 'warn' | 'error', message: string) => {
    setLogs((prev) => {
      const nextSeq = (prev[prev.length - 1]?.seq ?? prev.length) + 1
      return [
        ...prev,
        {
          seq: nextSeq,
          level,
          message: `[#${String(nextSeq).padStart(4, '0')}] ${message}`,
          created_at: new Date().toISOString(),
          detail: level === 'error' ? { code: 'ERR_POOL_EXHAUSTED', worker: 'w-09' } : undefined,
        },
      ]
    })
  }

  useEffect(() => {
    if (!streaming) return
    const timer = window.setInterval(() => {
      appendCustomLog('info', '实时心跳上报：当前并发浏览器上下文 42 个，内存占用 61%')
    }, 900)
    return () => window.clearInterval(timer)
  }, [streaming])

  // 3. ProFormContainer 状态
  const [formMode, setFormMode] = useState<'drawer' | 'modal'>('drawer')
  const [formSize, setFormSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg')
  const [formDrawerOpen, setFormDrawerOpen] = useState(false)
  const [policyName, setPolicyName] = useState('production-headless-pool')
  const [policyEnv, setPolicyEnv] = useState('prod')
  const [policyMaxConc, setPolicyMaxConc] = useState('64')
  const [policyAutoScale, setPolicyAutoScale] = useState(true)

  return (
    <PageContainer
      title="Pro 命令面板、虚拟日志与表单容器套件"
      subtitle="零重依赖企业级基础设施组件（ProCommandPalette / ProLogViewer / ProFormContainer），直接覆盖跨后台高频操作场景"
      tags={<StatusTag tone="primary">New Pro Suite</StatusTag>}
    >
      <div className="space-y-6">
        {/* 1. ProCommandPalette 演示 */}
        <ComponentDocPreview
          title="ProCommandPalette & CommandTriggerButton 全局命令中枢"
          description="基于原生 Top-Layer Dialog 与 @abc-design/core 中文拼音首字母检索引擎，支持 Cmd+K / Ctrl+K 全局唤醒、前缀实体规则匹配直达（如 job_ / org_ / TN-）以及多分组页面/动作键盘导航。"
          code={`import { ProCommandPalette, CommandTriggerButton } from '@abc-design/react'

<CommandTriggerButton onClick={() => setOpen(true)} />

<ProCommandPalette
  open={open}
  onOpenChange={setOpen}
  entityMatchers={[
    { prefix: 'job_', labelPrefix: '定位任务: ', tone: 'blue', onSelect: (id) => navigate(\`/jobs/\${id}\`) },
  ]}
  pages={[{ to: '/pro/table', label: 'ProTable 数据表格', keywords: 'table biaoge' }]}
  actions={[{ id: 'purge', label: '清理缓存', onSelect: handlePurge }]}
  onNavigate={(to) => router.push(to)}
/>`}
          apiRows={[
            { prop: 'open / onOpenChange', type: 'boolean / (open: boolean) => void', description: '受控或非受控弹窗显隐状态' },
            { prop: 'enableShortcut', type: 'boolean', defaultValue: 'true', description: '是否自动绑定全局 Cmd+K / Ctrl+K 快捷键' },
            { prop: 'entityMatchers', type: 'ProCommandEntityMatcher[]', description: '按前缀或正则函数直达业务实体 ID 的匹配规则集' },
            { prop: 'pages / onNavigate', type: 'ProCommandPageItem[] / (to, page) => void', description: '支持中文拼音首字母匹配的菜单导航条目' },
            { prop: 'actions', type: 'ProCommandActionItem[]', description: '与系统动作联动的高优先级可执行快捷指令' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <CommandTriggerButton onClick={() => openPaletteWithPreset('')} />
              <Button
                size="sm"
                variant="outline"
                onClick={() => openPaletteWithPreset('job_98210')}
              >
                预填实体 job_98210
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => openPaletteWithPreset('org_galaxy')}
              >
                预填实体 org_galaxy
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => openPaletteWithPreset('TN-1002')}
              >
                预填工单 TN-1002
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => openPaletteWithPreset('bg')}
              >
                拼音首字母搜 "bg" (表格)
              </Button>
            </div>

            <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3.5 py-2.5 text-xs text-[var(--abc-fg-secondary)]">
              最近命令命中回显：<strong className="font-mono text-[var(--abc-fg)]">{lastCommandHit}</strong>
            </div>

            <ProCommandPalette
              open={paletteOpen}
              onOpenChange={setPaletteOpen}
              searchQuery={paletteQuery}
              onSearchQueryChange={setPaletteQuery}
              entityMatchers={commandEntityMatchers}
              pages={commandPages}
              actions={commandActions}
              onNavigate={(to, page) => {
                setLastCommandHit(`页面导航命中: ${page.label} (${to})`)
                abcToast.success(`正在跳转至「${page.label}」`)
                onJump?.(to)
              }}
            />
          </div>
        </ComponentDocPreview>

        {/* 2. ProLogViewer 演示 */}
        <ComponentDocPreview
          title="ProLogViewer (别名 VirtualLogViewer) 高性能虚拟滚动日志查看器"
          description="原生 ResizeObserver 可视窗口切片计算，无需引入重型第三方虚拟列表库即可流畅渲染数万条日志；集成关键字查找、级别筛选胶囊、详情 JSON 折叠展开、自动贴底追踪与一键复制。"
          controls={
            <label className="inline-flex items-center gap-2 text-xs text-[var(--abc-fg-secondary)] cursor-pointer select-none">
              <Switch
                size="sm"
                checked={streaming}
                onChange={setStreaming}
                ariaLabel="实时流式推送 (每 900ms 追加)"
              />
              <span>实时流式推送 (每 900ms 追加)</span>
            </label>
          }
          code={`import { ProLogViewer } from '@abc-design/react'

<ProLogViewer
  logs={logs}
  heightClass="h-[360px]"
  defaultStickBottom={false}
/>`}
          apiRows={[
            { prop: 'logs', type: 'Array<LogEntry | string>', required: true, description: '结构化日志对象或纯文本行数组' },
            { prop: 'heightClass', type: 'string', defaultValue: "'h-[440px]'", description: '固定视口高度的 Tailwind 工具类' },
            { prop: 'estimateSize / overscan', type: 'number', defaultValue: '26 / 12', description: '虚拟行高预估值与缓冲区上下文条数' },
            { prop: 'defaultStickBottom', type: 'boolean', defaultValue: 'false', description: '有新日志追加时是否自动滚动贴底' },
            { prop: 'labels', type: 'ProLogViewerLabels', description: '支持全量自定义占位符、复制/空状态文案用于多语言 i18n' },
          ]}
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  size="xs"
                  variant="primary"
                  leftIcon={<Play className="h-3.5 w-3.5" />}
                  onClick={() =>
                    setLogs((prev) => [
                      ...prev,
                      ...buildInitialLogs(1000).map((item, idx) => ({
                        ...item,
                        seq: prev.length + idx + 1,
                        message: `[#${prev.length + idx + 1}] 批量追加压力测试日志条目`,
                      })),
                    ])
                  }
                >
                  追加 1,000 条压测日志
                </Button>
                <Button
                  size="xs"
                  variant="danger"
                  leftIcon={<Zap className="h-3.5 w-3.5" />}
                  onClick={() =>
                    appendCustomLog('error', 'Runner 资源池连接耗尽，等待队列已超出上限')
                  }
                >
                  注入 1 条 Error 告警
                </Button>
                <Button
                  size="xs"
                  variant="outline"
                  leftIcon={<RefreshCw className="h-3.5 w-3.5" />}
                  onClick={() => setLogs(buildInitialLogs(5000))}
                >
                  重置为 5,000 条
                </Button>
                <Button
                  size="xs"
                  variant="ghost"
                  leftIcon={<Trash2 className="h-3.5 w-3.5" />}
                  onClick={() => setLogs([])}
                >
                  清空全部日志
                </Button>
              </div>
              <StatusTag tone={streaming ? 'success' : 'neutral'}>
                {streaming ? `流式追尾中 · 共 ${logs.length.toLocaleString()} 条` : `静态视图 · 共 ${logs.length.toLocaleString()} 条`}
              </StatusTag>
            </div>

            <ProLogViewer
              logs={logs}
              heightClass="h-[360px]"
              defaultStickBottom={streaming}
            />
          </div>
        </ComponentDocPreview>

        {/* 3. ProFormContainer 演示 */}
        <ComponentDocPreview
          title="ProFormContainer (别名 FormDrawerDialog) 大小表单自适应抽屉/模态容器"
          description="将表单外层容器、只读摘要卡槽 (summarySlot)、大/小表单 Drawer/Modal 双模切换及受控开关沉淀为一处；支持通过 inlineInTestEnv 控制自动化单测内联降级。"
          controls={
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-40">
                <SelectField
                  aria-label="表单展现模式"
                  size="xs"
                  value={formMode}
                  onValueChange={(val) => setFormMode(val as 'drawer' | 'modal')}
                  options={[
                    { label: 'Drawer 右侧抽屉 (推荐)', value: 'drawer' },
                    { label: 'Modal 居中弹窗', value: 'modal' },
                  ]}
                />
              </div>
              <div className="w-36">
                <SelectField
                  aria-label="抽屉宽度档位"
                  size="xs"
                  value={formSize}
                  onValueChange={(val) => setFormSize(val as 'sm' | 'md' | 'lg' | 'xl')}
                  options={[
                    { label: 'size="sm"', value: 'sm' },
                    { label: 'size="md"', value: 'md' },
                    { label: 'size="lg"', value: 'lg' },
                    { label: 'size="xl"', value: 'xl' },
                  ]}
                />
              </div>
            </div>
          }
          code={`import { ProFormContainer, Button } from '@abc-design/react'

<ProFormContainer
  title="编辑集群资源池策略"
  triggerLabel="配置资源池"
  mode="${formMode}"
  size="${formSize}"
  open={open}
  onOpenChange={setOpen}
  summarySlot={<div>当前策略：{policyName}</div>}
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="outline" onClick={() => setOpen(false)}>取消</Button>
      <Button variant="primary" onClick={handleSave}>保存配置</Button>
    </div>
  }
>
  <Input label="资源池名称" value={policyName} onChange={(e) => setPolicyName(e.target.value)} />
</ProFormContainer>`}
          apiRows={[
            { prop: 'mode', type: "'drawer' | 'modal'", defaultValue: "'modal'", description: '在右侧全高抽屉或居中模态框之间一键切换' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", defaultValue: "'lg'", description: 'Drawer 预设宽度档位（支持从 maxWidthClass 自动推导）' },
            { prop: 'summarySlot', type: 'ReactNode', description: '关闭状态时展示在页面卡片上的只读摘要快照' },
            { prop: 'footer', type: 'ReactNode', description: '抽屉或模态框底部固底提交/取消按钮栏' },
            { prop: 'inlineInTestEnv', type: 'boolean', defaultValue: 'true', description: 'Vitest/JSDOM 下允许按需就地平铺以降低 DOM Portal 测试成本' },
          ]}
        >
          <ProFormContainer
            title="集群并发资源池策略"
            description="遵循《大小表单分流规范》：多字段策略配置默认落入右侧全高抽屉 (Drawer)，关闭时在页内保留核心摘要"
            triggerLabel="编辑资源池配置"
            mode={formMode}
            size={formSize}
            open={formDrawerOpen}
            onOpenChange={setFormDrawerOpen}
            inlineInTestEnv={false}
            summarySlot={
              <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-4">
                <div>
                  <div className="text-[var(--abc-fg-muted)]">资源池标识</div>
                  <div className="mt-0.5 font-mono font-medium text-[var(--abc-fg)]">{policyName}</div>
                </div>
                <div>
                  <div className="text-[var(--abc-fg-muted)]">目标集群环境</div>
                  <div className="mt-0.5 font-medium text-[var(--abc-fg)]">{policyEnv.toUpperCase()}</div>
                </div>
                <div>
                  <div className="text-[var(--abc-fg-muted)]">最大并发上下文</div>
                  <div className="mt-0.5 font-mono font-medium text-[var(--abc-fg)]">{policyMaxConc} 路</div>
                </div>
                <div>
                  <div className="text-[var(--abc-fg-muted)]">弹性扩缩容</div>
                  <div className="mt-0.5">
                    <StatusTag tone={policyAutoScale ? 'success' : 'neutral'}>
                      {policyAutoScale ? '自动弹性开启' : '固定容量'}
                    </StatusTag>
                  </div>
                </div>
              </div>
            }
            footer={
              <div className="flex items-center justify-end gap-2">
                <Button variant="outline" onClick={() => setFormDrawerOpen(false)}>
                  取消
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setFormDrawerOpen(false)
                    abcToast.success(`已保存资源池「${policyName}」策略 (${formMode}/${formSize})`)
                  }}
                >
                  保存策略配置
                </Button>
              </div>
            }
          >
            <div className="space-y-4">
              <Input
                label="资源池标识"
                value={policyName}
                onChange={(e) => setPolicyName(e.target.value)}
                helperText="全局唯一的调度池名称，仅支持小写字母与连字符"
              />
              <SelectField
                label="所属集群环境"
                value={policyEnv}
                onValueChange={setPolicyEnv}
                options={[
                  { label: 'Production 生产主集群', value: 'prod' },
                  { label: 'Staging 预发灰度集群', value: 'staging' },
                  { label: 'Sandbox 沙箱压测集群', value: 'sandbox' },
                ]}
              />
              <Input
                label="单节点最大并发上下文数"
                value={policyMaxConc}
                onChange={(e) => setPolicyMaxConc(e.target.value)}
              />
              <Card className="p-3.5">
                <label className="inline-flex items-center gap-2 text-xs text-[var(--abc-fg-secondary)] cursor-pointer select-none">
                  <Switch
                    size="sm"
                    checked={policyAutoScale}
                    onChange={setPolicyAutoScale}
                    ariaLabel="启用基于队列水位的自动弹缩 (HPA)"
                  />
                  <span>启用基于队列水位的自动弹缩 (HPA)</span>
                </label>
              </Card>
            </div>
          </ProFormContainer>
        </ComponentDocPreview>

        <ProPageHeaderAndDataTableSection />
      </div>
    </PageContainer>
  )
}
