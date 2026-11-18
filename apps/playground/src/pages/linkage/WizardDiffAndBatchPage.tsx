import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  BatchActionTracker,
  Button,
  ConfigDiffViewer,
  Input,
  InputNumber,
  PageContainer,
  ProStepsForm,
  Select,
  StatusTag,
  Switch,
  TableCore,
  abcToast,
  type AbcColumn,
  type BatchTaskItem,
  type ProWizardStepConfig,
} from '@abc-design/react'
import { Play, RotateCcw } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

interface ReleaseWizardValues {
  releaseName: string
  namespace: string
  api_token: string
  canaryPercent: number
  healthPort: number
  failProbe: boolean
}

const BASELINE_CONFIG = {
  releaseName: 'gw-v2.4-stable',
  namespace: 'prod-ingress',
  api_token: 'tok_live_old_8821',
  canaryPercent: 10,
  healthPort: 8080,
}

const BASELINE_YAML = `release: gw-v2.4-stable\nnamespace: prod-ingress\ncanary_percent: 10\nhealth_port: 8080\ntls_strict: true`

const DIFF_LABELS: Record<string, string> = {
  releaseName: '发布单名称',
  namespace: '目标命名空间',
  api_token: '发布凭证 (api_token)',
  canaryPercent: '灰度切流比例 (%)',
  healthPort: '探活端口',
}

interface NodeInstance {
  id: string
  node: string
  zone: string
  version: string
  status: 'ready' | 'upgrading' | 'updated' | 'failed'
}

const INITIAL_INSTANCES: NodeInstance[] = [
  { id: 'inst-1', node: 'gw-sh-edge-01', zone: '华东-上海', version: 'v2.4.0', status: 'ready' },
  { id: 'inst-2', node: 'gw-sh-edge-02', zone: '华东-上海', version: 'v2.4.0', status: 'ready' },
  { id: 'inst-3', node: 'gw-bj-core-01', zone: '华北-北京', version: 'v2.4.0', status: 'ready' },
  { id: 'inst-4', node: 'gw-sz-edge-01', zone: '华南-深圳', version: 'v2.4.0', status: 'ready' },
  { id: 'inst-5', node: 'gw-sg-hub-01', zone: '新加坡', version: 'v2.4.0', status: 'ready' },
]

/**
 * 分步发布向导、配置差异对比与批量队列追踪演练页
 * 覆盖 ProStepsForm × ConfigDiffViewer 与多选 TableCore × BatchActionTracker 滚动升级闭环
 */
export const WizardDiffAndBatchPage: React.FC = () => {
  const [stepsDirection, setStepsDirection] = useState<'horizontal' | 'vertical'>('horizontal')
  const [diffLayout, setDiffLayout] = useState<'unified' | 'split'>('unified')
  const [maskSecrets, setMaskSecrets] = useState(true)
  const [onlyChanges, setOnlyChanges] = useState(true)
  const [wizardStep, setWizardStep] = useState(0)
  const [wizardValues, setWizardValues] = useState<ReleaseWizardValues>({
    releaseName: 'gw-v2.5-canary',
    namespace: 'prod-ingress',
    api_token: 'tok_live_new_9940',
    canaryPercent: 25,
    healthPort: 8443,
    failProbe: false,
  })
  const [publishedName, setPublishedName] = useState<string | null>(null)

  const [trackerVariant, setTrackerVariant] = useState<'inline' | 'floating'>('inline')
  const [failRate, setFailRate] = useState<0.3 | 0>(0.3)
  const [instances, setInstances] = useState<NodeInstance[]>(INITIAL_INSTANCES)
  const [selectedRowKeys, setSelectedRowKeys] = useState<Array<string | number>>(['inst-1', 'inst-2', 'inst-3'])
  const [tasks, setTasks] = useState<BatchTaskItem[]>([])
  const [trackerOpen, setTrackerOpen] = useState(true)
  const timersRef = useRef<number[]>([])

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id))
    timersRef.current = []
  }

  useEffect(() => () => clearTimers(), [])

  const steps = useMemo<ProWizardStepConfig<ReleaseWizardValues>[]>(
    () => [
      {
        key: 'basic',
        title: '基础信息',
        description: '配置发布单与鉴权凭证',
        validate: (v) => {
          if (!v.releaseName.trim()) return '发布单名称不能为空'
          if (!v.namespace.trim()) return '目标命名空间不能为空'
          return undefined
        },
        render: ({ values, setValue }) => (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-[var(--abc-fg-secondary)]">发布单名称 *</label>
              <Input size="sm" value={values.releaseName} onChange={(e) => setValue('releaseName', e.target.value)} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-[var(--abc-fg-secondary)]">命名空间 *</label>
              <Select size="sm" value={values.namespace} onChange={(val) => setValue('namespace', String(val))} options={[{ label: 'prod-ingress', value: 'prod-ingress' }, { label: 'staging-ingress', value: 'staging-ingress' }]} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-[var(--abc-fg-secondary)]">发布凭证 (api_token)</label>
              <Input size="sm" value={values.api_token} onChange={(e) => setValue('api_token', e.target.value)} />
            </div>
          </div>
        ),
      },
      {
        key: 'strategy',
        title: '发布策略',
        description: '灰度切流与异步探活校验',
        validate: async (v) => {
          await new Promise((r) => window.setTimeout(r, 320))
          return v.failProbe ? '异步节点探活失败：ingress-gateway-02 /healthz 返回 504，已阻断进入下一步' : undefined
        },
        render: ({ values, setValue }) => (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[var(--abc-fg-secondary)]">灰度切流比例 (%)</label>
                <InputNumber size="sm" min={5} max={100} step={5} value={values.canaryPercent} onChange={(val) => setValue('canaryPercent', Number(val ?? 5))} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-[var(--abc-fg-secondary)]">探活端口</label>
                <InputNumber size="sm" min={80} max={65535} value={values.healthPort} onChange={(val) => setValue('healthPort', Number(val ?? 8080))} />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-2 text-xs">
              <span className="text-[var(--abc-fg-secondary)]">模拟节点异步探活失败（开启后点击「下一步」将触发阻断提示）</span>
              <Switch size="xs" checked={values.failProbe} onChange={(c) => setValue('failProbe', c)} ariaLabel="模拟异步探活失败" />
            </div>
          </div>
        ),
      },
      {
        key: 'confirm',
        title: '变更对比确认',
        description: '字段与 YAML 文本双视图审阅',
        render: ({ values }) => {
          const afterYaml = `release: ${values.releaseName}\nnamespace: ${values.namespace}\ncanary_percent: ${values.canaryPercent}\nhealth_port: ${values.healthPort}\ntls_strict: true`
          return (
            <ConfigDiffViewer
              title="发布配置变更对比"
              mode="tabs"
              codeLayout={diffLayout}
              maskSecrets={maskSecrets}
              onlyChanges={onlyChanges}
              labels={DIFF_LABELS}
              before={BASELINE_CONFIG}
              after={{
                releaseName: values.releaseName,
                namespace: values.namespace,
                api_token: values.api_token,
                canaryPercent: values.canaryPercent,
                healthPort: values.healthPort,
              }}
              beforeCode={BASELINE_YAML}
              afterCode={afterYaml}
            />
          )
        },
      },
    ],
    [diffLayout, maskSecrets, onlyChanges]
  )

  const runTaskSimulation = (targetIds: string[], allowFail: boolean) => {
    targetIds.forEach((id, idx) => {
      const startTimer = window.setTimeout(() => {
        setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status: 'running', error: undefined } : t)))
        setInstances((prev) => prev.map((n) => (n.id === id ? { ...n, status: 'upgrading' } : n)))

        const endTimer = window.setTimeout(() => {
          const shouldFail = allowFail && idx % 3 === 1
          setTasks((prev) =>
            prev.map((t) =>
              t.id === id
                ? {
                    ...t,
                    status: shouldFail ? 'failed' : 'succeeded',
                    durationMs: 360 + idx * 90,
                    error: shouldFail ? '健康检查握手超时 (ERR_UPSTREAM_TIMEOUT)' : undefined,
                  }
                : t
            )
          )
          setInstances((prev) =>
            prev.map((n) =>
              n.id === id
                ? { ...n, version: shouldFail ? n.version : 'v2.5.0', status: shouldFail ? 'failed' : 'updated' }
                : n
            )
          )
        }, 400)
        timersRef.current.push(endTimer)
      }, idx * 240)
      timersRef.current.push(startTimer)
    })
  }

  const startBatchUpgrade = () => {
    if (selectedRowKeys.length === 0) {
      abcToast.warning('请先在左侧表格勾选至少一台待升级节点')
      return
    }
    clearTimers()
    const picked = instances.filter((n) => selectedRowKeys.includes(n.id))
    setTasks(picked.map((n) => ({ id: n.id, title: `${n.node} (${n.zone})`, subtitle: `目标版本 ${n.version} -> v2.5.0`, status: 'queued' })))
    setTrackerOpen(true)
    runTaskSimulation(picked.map((n) => n.id), failRate > 0)
  }

  const handleRetryIds = (ids: string[]) => {
    setTasks((prev) => prev.map((t) => (ids.includes(t.id) ? { ...t, status: 'queued', error: undefined } : t)))
    runTaskSimulation(ids, false)
  }

  const tableColumns: AbcColumn<NodeInstance>[] = [
    { key: 'node', title: '节点主机', dataIndex: 'node', width: 145 },
    { key: 'zone', title: '可用区', dataIndex: 'zone', width: 95 },
    { key: 'version', title: '当前版本', dataIndex: 'version', width: 85 },
    {
      key: 'status',
      title: '状态',
      dataIndex: 'status',
      width: 95,
      render: (val) => {
        const tone = val === 'updated' ? 'success' : val === 'failed' ? 'danger' : val === 'upgrading' ? 'info' : 'neutral'
        const text = val === 'updated' ? '已升级' : val === 'failed' ? '升级失败' : val === 'upgrading' ? '升级中' : '待升级'
        return <StatusTag tone={tone} pulse={val === 'upgrading'} size="xs">{text}</StatusTag>
      },
    },
  ]

  return (
    <PageContainer
      title="分步发布向导与批量队列追踪"
      subtitle="演示 ProStepsForm 跨步异步校验与 ConfigDiffViewer 双视图对比，以及多选 TableCore 驱动 BatchActionTracker 滚动升级与失败重试闭环"
      breadcrumbs={[{ label: '复杂联动' }, { label: '向导 Diff 与批量追踪' }]}
    >
      <div className="space-y-6">
        <ComponentDocPreview
          title="ProStepsForm × ConfigDiffViewer 分步发布向导与配置差异核验"
          components={['ProStepsForm', 'ConfigDiffViewer']}
          description="第 1 步校验必填字段，第 2 步支持异步节点探活阻断体验，第 3 步通过 ConfigDiffViewer 同时检视结构化字段与源码文本变更并自动脱敏敏感字段。"
          controls={
            <>
              <KnobSegmented label="stepsDirection" value={stepsDirection} onChange={setStepsDirection} options={[{ label: 'horizontal', value: 'horizontal' }, { label: 'vertical', value: 'vertical' }]} />
              <KnobSegmented label="diffLayout" value={diffLayout} onChange={setDiffLayout} options={[{ label: 'unified', value: 'unified' }, { label: 'split', value: 'split' }]} />
              <KnobSwitch label="maskSecrets" checked={maskSecrets} onChange={setMaskSecrets} />
              <KnobSwitch label="onlyChanges" checked={onlyChanges} onChange={setOnlyChanges} />
            </>
          }
          onResetKnobs={() => {
            setStepsDirection('horizontal')
            setDiffLayout('unified')
            setMaskSecrets(true)
            setOnlyChanges(true)
            setWizardStep(0)
            setPublishedName(null)
          }}
          code={`<ProStepsForm steps={steps} stepsDirection="${stepsDirection}" initialValues={initialValues} onFinish={publish} />
<ConfigDiffViewer mode="tabs" codeLayout="${diffLayout}" maskSecrets={${maskSecrets}} onlyChanges={${onlyChanges}} />`}
          apiRows={[
            { prop: 'stepsDirection', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: '步骤引导条排布方向，vertical 适合多字段配置向导' },
            { prop: 'steps[].validate', type: '(values) => boolean | string | Promise<...>', description: '支持异步探活校验，返回错误文案自动拦截跳转并在顶部展示 Alert' },
            { prop: 'ConfigDiffViewer.codeLayout', type: "'unified' | 'split'", defaultValue: "'unified'", description: '源码对比单栏统一视图或双栏左右并排视图' },
            { prop: 'ConfigDiffViewer.maskSecrets / onlyChanges', type: 'boolean', defaultValue: 'true / true', description: '敏感字段自动脱敏提示与仅看变更开关' },
          ]}
        >
          <div className="space-y-3">
            {publishedName && (
              <div className="flex items-center justify-between rounded-md border border-[var(--abc-success)]/35 bg-[var(--abc-success-soft)] px-3 py-2 text-xs">
                <span>发布单 <strong>{publishedName}</strong> 已提交至控制面流水线！</span>
                <Button size="xs" variant="ghost" onClick={() => { setWizardStep(0); setPublishedName(null) }}>重新发起向导</Button>
              </div>
            )}
            <ProStepsForm<ReleaseWizardValues>
              steps={steps}
              initialValues={wizardValues}
              values={wizardValues}
              onValuesChange={setWizardValues}
              current={wizardStep}
              onCurrentChange={setWizardStep}
              stepsDirection={stepsDirection}
              submitLabel="确认并下发发布单"
              onFinish={(vals) => {
                setPublishedName(vals.releaseName)
                abcToast.success(`发布单 ${vals.releaseName} 已成功提交`)
              }}
            />
          </div>
        </ComponentDocPreview>

        <ComponentDocPreview
          title="BatchActionTracker × TableCore 多选行批量滚动升级追踪"
          components={['BatchActionTracker', 'TableCore']}
          description="勾选左侧实例行触发批量滚动升级，实时观测 queued -> running -> succeeded/failed 进度演进；点击「重试失败项」可将被阻断节点补跑成功并同步刷新左侧版本。"
          controls={
            <>
              <KnobSegmented label="variant" value={trackerVariant} onChange={setTrackerVariant} options={[{ label: 'inline', value: 'inline' }, { label: 'floating', value: 'floating' }]} />
              <KnobSegmented label="模拟失败率" value={failRate} onChange={setFailRate} options={[{ label: '30% 失败', value: 0.3 }, { label: '0% 全成功', value: 0 }]} />
            </>
          }
          onResetKnobs={() => {
            clearTimers()
            setTrackerVariant('inline')
            setFailRate(0.3)
            setInstances(INITIAL_INSTANCES)
            setSelectedRowKeys(['inst-1', 'inst-2', 'inst-3'])
            setTasks([])
            setTrackerOpen(true)
          }}
          code={`<TableCore columns={columns} data={instances} rowSelection={{ selectedRowKeys, onChange: setSelectedRowKeys }} />
<BatchActionTracker variant="${trackerVariant}" items={tasks} open={trackerOpen} onRetryFailed={retryBatch} onRetryItem={(id) => retryBatch([id])} />`}
          apiRows={[
            { prop: 'TableCore.rowSelection', type: 'AbcRowSelectionConfig<T>', description: '开启多选复选框列并返回 selectedRowKeys 与选中行集合' },
            { prop: 'BatchActionTracker.variant', type: "'inline' | 'floating'", defaultValue: "'inline'", description: 'inline 内联队列面板或 floating 右下角可最小化悬浮窗' },
            { prop: 'BatchActionTracker.items', type: 'BatchTaskItem[]', required: true, description: '队列条目列表，支持 queued / running / succeeded / failed 四态流转' },
            { prop: 'onRetryFailed / onRetryItem', type: '(ids) => void / (id) => void', description: '全量失败项重试与单条失败任务定点重试回调' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm" variant="primary" icon={<Play className="h-3.5 w-3.5" />} onClick={startBatchUpgrade}>
                  执行批量滚动升级 ({selectedRowKeys.length})
                </Button>
                <Button size="sm" variant="secondary" icon={<RotateCcw className="h-3.5 w-3.5" />} onClick={() => { clearTimers(); setInstances(INITIAL_INSTANCES); setTasks([]) }}>
                  重置实例版本
                </Button>
              </div>
              {trackerVariant === 'floating' && !trackerOpen && tasks.length > 0 && (
                <Button size="xs" variant="outline" onClick={() => setTrackerOpen(true)}>重新打开悬浮队列 ({tasks.length})</Button>
              )}
            </div>

            <div className={trackerVariant === 'inline' ? 'grid grid-cols-1 gap-4 xl:grid-cols-12' : 'grid grid-cols-1 gap-4'}>
              <div className={trackerVariant === 'inline' ? 'xl:col-span-7' : ''}>
                <TableCore<NodeInstance>
                  columns={tableColumns}
                  data={instances}
                  rowKey="id"
                  rowSelection={{ selectedRowKeys, onChange: (keys) => setSelectedRowKeys(keys) }}
                />
              </div>

              {tasks.length > 0 && (
                <div className={trackerVariant === 'inline' ? 'xl:col-span-5' : ''}>
                  <BatchActionTracker
                    title="网关滚动升级队列"
                    variant={trackerVariant}
                    items={tasks}
                    open={trackerOpen}
                    onClose={() => setTrackerOpen(false)}
                    onRetryFailed={handleRetryIds}
                    onRetryItem={(id) => handleRetryIds([id])}
                    onClearSucceeded={() => setTasks((prev) => prev.filter((t) => t.status !== 'succeeded'))}
                  />
                </div>
              )}
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default WizardDiffAndBatchPage
