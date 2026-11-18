import React, { useMemo, useRef, useState } from 'react'
import {
  Alert,
  Button,
  Input,
  InputNumber,
  KeyValueInput,
  PageContainer,
  ProFormDependency,
  ProFormList,
  ProFormProvider,
  ProgressBar,
  Select,
  StatusTag,
  serializeKeyValueEntries,
  useProForm,
  type AbcKeyValueEntry,
  type AbcKeyValueFormat,
} from '@abc-design/react'
import { RefreshCw } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

interface CloudRegionData {
  regions: Array<{ label: string; value: string }>
  specs: Array<{ label: string; value: string; unitPrice: number }>
}

const CLOUD_CATALOG: Record<'aws' | 'aliyun', CloudRegionData> = {
  aws: {
    regions: [
      { label: '美东弗吉尼亚 (us-east-1)', value: 'us-east-1' },
      { label: '新加坡亚太 (ap-southeast-1)', value: 'ap-southeast-1' },
      { label: '法兰克福 (eu-central-1)', value: 'eu-central-1' },
    ],
    specs: [
      { label: 'c6i.large (2C4G · ¥680/月)', value: 'c6i.large', unitPrice: 680 },
      { label: 'c6i.xlarge (4C8G · ¥1,320/月)', value: 'c6i.xlarge', unitPrice: 1320 },
      { label: 'm6i.2xlarge (8C32G · ¥2,950/月)', value: 'm6i.2xlarge', unitPrice: 2950 },
    ],
  },
  aliyun: {
    regions: [
      { label: '华东 2（上海）cn-shanghai', value: 'cn-shanghai' },
      { label: '华北 2（北京）cn-beijing', value: 'cn-beijing' },
      { label: '华南 1（深圳）cn-shenzhen', value: 'cn-shenzhen' },
    ],
    specs: [
      { label: 'ecs.c7.large (2C4G · ¥540/月)', value: 'ecs.c7.large', unitPrice: 540 },
      { label: 'ecs.c7.xlarge (4C8G · ¥1,080/月)', value: 'ecs.c7.xlarge', unitPrice: 1080 },
      { label: 'ecs.g7.2xlarge (8C32G · ¥2,420/月)', value: 'ecs.g7.2xlarge', unitPrice: 2420 },
    ],
  },
}

interface RouteItem {
  upstream: string
  zone: string
  weight: number
}

const INITIAL_ROUTES: RouteItem[] = [
  { upstream: 'svc-core-blue', zone: '华东-上海', weight: 70 },
  { upstream: 'svc-canary-green', zone: '华东-上海', weight: 30 },
]

const INITIAL_KV: AbcKeyValueEntry[] = [
  { id: 'kv_1', key: 'UPSTREAM_TIMEOUT_MS', value: '4500', enabled: true, secret: false },
  { id: 'kv_2', key: 'GATEWAY_SIGNING_SECRET', value: 'sk_live_99a4f8b2c1', enabled: true, secret: true },
  { id: 'kv_3', key: 'GATEWAY_SIGNING_SECRET', value: 'sk_backup_1102', enabled: true, secret: true },
  { id: 'kv_4', key: 'DEBUG_TRACE_HEADER', value: 'x-abc-trace', enabled: false, secret: false },
]

const MONTHLY_BUDGET_CAP = 12000

const FieldBox: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="space-y-1">
    <label className="text-xs font-medium text-[var(--abc-fg-secondary)]">{label}</label>
    {children}
  </div>
)

/**
 * 动态表单级联编排演练页
 * 覆盖 ProFormProvider × ProFormDependency 异步竞态取消、ProFormList 权重分配表校验、KeyValueInput 多格式编辑
 */
export const DynamicFormOrchestrationPage: React.FC = () => {
  const [debounceMs, setDebounceMs] = useState<0 | 300>(0)
  const [simulateFail, setSimulateFail] = useState(false)
  const simulateFailRef = useRef(simulateFail)
  simulateFailRef.current = simulateFail
  const [abortLogs, setAbortLogs] = useState<string[]>([])

  const form = useProForm<{ provider: 'aws' | 'aliyun'; region: string; spec: string; replicas: number }>({
    defaultValues: { provider: 'aws', region: 'us-east-1', spec: 'c6i.xlarge', replicas: 3 },
  })

  const [listVariant, setListVariant] = useState<'card' | 'inline'>('card')
  const [copyable, setCopyable] = useState(true)
  const [sortable, setSortable] = useState(true)
  const [minItems, setMinItems] = useState(1)
  const [maxItems, setMaxItems] = useState(5)
  const [routes, setRoutes] = useState<RouteItem[]>(INITIAL_ROUTES)

  const [allowEnableToggle, setAllowEnableToggle] = useState(true)
  const [allowSecretMask, setAllowSecretMask] = useState(true)
  const [allowBulkEdit, setAllowBulkEdit] = useState(true)
  const [defaultBulkFormat, setDefaultBulkFormat] = useState<AbcKeyValueFormat>('dotenv')
  const [kvSize, setKvSize] = useState<'xs' | 'sm' | 'md' | 'lg'>('sm')
  const [kvEntries, setKvEntries] = useState<AbcKeyValueEntry[]>(INITIAL_KV)

  const pushLog = (msg: string) => {
    const stamp = new Date().toLocaleTimeString('zh-CN', { hour12: false })
    setAbortLogs((prev) => [`[${stamp}] ${msg}`, ...prev].slice(0, 5))
  }

  // 异步拉取云厂商地域与实例规格，监听 AbortSignal 记录竞态取消日志
  const loadCloudCatalog = useMemo(
    () => async (deps: Record<string, any>, signal: AbortSignal): Promise<CloudRegionData> => {
      const provider = (deps.provider === 'aliyun' ? 'aliyun' : 'aws') as 'aws' | 'aliyun'
      pushLog(`发起 ${provider.toUpperCase()} 地域与规格异步拉取...`)
      return new Promise<CloudRegionData>((resolve, reject) => {
        const timer = window.setTimeout(() => {
          if (simulateFailRef.current) {
            pushLog(`加载失败：${provider.toUpperCase()} 节点元数据接口返回 503`)
            reject(new Error(`${provider.toUpperCase()} 控制面探测超时，请检查开关或重试`))
            return
          }
          const payload = CLOUD_CATALOG[provider]
          if (!form.getValues('region')) {
            form.setValue('region', payload.regions[0].value)
            form.setValue('spec', payload.specs[0].value)
          }
          pushLog(`拉取成功：${provider.toUpperCase()} 返回 ${payload.regions.length} 个地域`)
          resolve(payload)
        }, 360)

        signal.addEventListener('abort', () => {
          window.clearTimeout(timer)
          pushLog(`AbortSignal 已中止过期请求 (${provider.toUpperCase()})`)
          reject(new DOMException('Aborted', 'AbortError'))
        })
      })
    },
    [form]
  )

  const serializedPreview = useMemo(
    () => serializeKeyValueEntries(kvEntries, defaultBulkFormat, { onlyEnabled: true }),
    [kvEntries, defaultBulkFormat]
  )

  return (
    <PageContainer
      title="动态表单级联编排"
      subtitle="演示 ProFormProvider 跨层实例透传、ProFormDependency 竞态取消与级联清空、ProFormList 行级/汇总校验及 KeyValueInput 多格式双向编辑"
      breadcrumbs={[{ label: '复杂联动' }, { label: '动态表单级联编排' }]}
    >
      <div className="space-y-6">
        <ComponentDocPreview
          title="ProFormProvider × ProFormDependency × ProgressBar 级联异步编排"
          components={['ProFormProvider', 'ProFormDependency', 'ProgressBar', 'useProForm']}
          description="切换云厂商自动通过 resetFieldsOnChange 清空下游地域与规格，使用 debounceMs 防抖与 AbortSignal 中止过期请求，并联动计算月度预算水位 ProgressBar。"
          controls={
            <>
              <KnobSegmented label="debounceMs" value={debounceMs} onChange={setDebounceMs} options={[{ label: '0ms', value: 0 }, { label: '300ms', value: 300 }]} />
              <KnobSwitch label="模拟节点加载失败" checked={simulateFail} onChange={setSimulateFail} />
            </>
          }
          onResetKnobs={() => {
            setDebounceMs(0)
            setSimulateFail(false)
            setAbortLogs([])
            form.reset({ provider: 'aws', region: 'us-east-1', spec: 'c6i.xlarge', replicas: 3 })
          }}
          code={`<ProFormProvider form={form}>
  <ProFormDependency deps={['provider']} resetFieldsOnChange={['region', 'spec']} debounceMs={${debounceMs}} asyncLoader={loadCloudCatalog}>
    {(_deps, { loading, data, error, reload }) => ...}
  </ProFormDependency>
  <ProFormDependency deps={['provider', 'spec', 'replicas']}>
    {({ spec, replicas }) => <ProgressBar value={cost} max={${MONTHLY_BUDGET_CAP}} variant="auto" />}
  </ProFormDependency>
</ProFormProvider>`}
          apiRows={[
            { prop: 'ProFormProvider.form', type: 'ProFormInstance<any>', required: true, description: '向下注入响应式表单实例，免除深层组件逐层透传' },
            { prop: 'deps', type: 'string[]', required: true, description: '声明监听的依赖字段键名列表，仅依赖变动时重渲染' },
            { prop: 'resetFieldsOnChange', type: 'string[]', description: '依赖字段变化时自动清空重置的下游字段列表' },
            { prop: 'asyncLoader / debounceMs', type: '(deps, signal) => Promise<T> / number', description: '内置 AbortSignal 竞态取消与防抖延迟的异步数据源加载器' },
            { prop: 'ProgressBar.variant', type: "'default' | 'success' | 'warning' | 'danger' | 'auto'", defaultValue: "'auto'", description: '超过 warningThreshold/dangerThreshold 自动切换警告/危险色' },
          ]}
        >
          <ProFormProvider form={form}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <FieldBox label="1. 选择云厂商 (Provider)">
                  <Select
                    size="sm"
                    value={form.watch('provider')}
                    onChange={(v) => form.setValue('provider', String(v) as 'aws' | 'aliyun')}
                    options={[{ label: 'Amazon Web Services (AWS)', value: 'aws' }, { label: '阿里云 (Aliyun)', value: 'aliyun' }]}
                  />
                </FieldBox>
                <FieldBox label="节点副本数 (Replicas)">
                  <InputNumber size="sm" min={1} max={20} value={form.watch('replicas')} onChange={(v) => form.setValue('replicas', Number(v ?? 1))} />
                </FieldBox>
              </div>

              <ProFormDependency<CloudRegionData>
                deps={['provider']}
                resetFieldsOnChange={['region', 'spec']}
                debounceMs={debounceMs}
                asyncLoader={loadCloudCatalog}
              >
                {(depValues, meta) => (
                  <div className="space-y-3 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/50 p-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-[var(--abc-fg)]">
                        2. 下游级联地域与规格（厂商: {String(depValues.provider).toUpperCase()}）
                      </span>
                      <div className="flex items-center gap-2">
                        {meta.loading && <StatusTag tone="info" pulse size="xs">异步拉取中...</StatusTag>}
                        <Button size="xs" variant="secondary" icon={<RefreshCw className="h-3 w-3" />} onClick={meta.reload}>手动重拉</Button>
                      </div>
                    </div>

                    {meta.error && (
                      <Alert tone="danger" title="地域列表加载失败" description={meta.error.message} action={<Button size="xs" variant="danger" onClick={meta.reload}>立即重试</Button>} />
                    )}

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <FieldBox label="目标地域 (Region)">
                        <Select
                          size="sm"
                          disabled={meta.loading || Boolean(meta.error)}
                          placeholder={meta.loading ? '正在拉取地域...' : '请选择地域'}
                          value={form.watch('region') ?? ''}
                          onChange={(v) => form.setValue('region', String(v))}
                          options={meta.data?.regions ?? []}
                        />
                      </FieldBox>
                      <FieldBox label="实例规格 (Spec)">
                        <Select
                          size="sm"
                          disabled={meta.loading || Boolean(meta.error)}
                          placeholder={meta.loading ? '正在拉取规格...' : '请选择规格'}
                          value={form.watch('spec') ?? ''}
                          onChange={(v) => form.setValue('spec', String(v))}
                          options={meta.data?.specs.map((s) => ({ label: s.label, value: s.value })) ?? []}
                        />
                      </FieldBox>
                    </div>
                  </div>
                )}
              </ProFormDependency>

              <ProFormDependency deps={['provider', 'region', 'spec', 'replicas']}>
                {({ provider, region, spec, replicas }) => {
                  const catalog = CLOUD_CATALOG[provider === 'aliyun' ? 'aliyun' : 'aws']
                  const unit = catalog.specs.find((s) => s.value === spec)?.unitPrice ?? 0
                  const totalCost = unit * Number(replicas || 0)
                  const pct = Math.round((totalCost / MONTHLY_BUDGET_CAP) * 100)
                  return (
                    <div className="space-y-2 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3.5 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[var(--abc-fg-secondary)]">
                          实时计费汇总：<strong className="font-mono text-[var(--abc-fg)]">{provider} / {region || '待选'} / {spec || '待选'}</strong> × {replicas} 节点
                        </span>
                        <span className="font-mono font-bold text-[var(--abc-primary)]">¥{totalCost.toLocaleString()} / 月（预算占比 {pct}%）</span>
                      </div>
                      <ProgressBar value={totalCost} max={MONTHLY_BUDGET_CAP} warningThreshold={75} dangerThreshold={95} size="md" />
                    </div>
                  )
                }}
              </ProFormDependency>

              {abortLogs.length > 0 && (
                <div className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2 font-mono text-[11px] text-[var(--abc-fg-muted)]">
                  {abortLogs.map((line, i) => <div key={`${line}-${i}`}>{line}</div>)}
                </div>
              )}
            </div>
          </ProFormProvider>
        </ComponentDocPreview>

        <ComponentDocPreview
          title="ProFormList 上游路由权重分配表（行校验 + 100% 权重闭环）"
          components={['ProFormList', 'StatusTag']}
          description="支持卡片/紧凑行内双形态、复制、排序及上下限约束；通过 rowValidator 逐行检查并由 summaryRender 实时汇总校验权重总和是否等于 100%。"
          controls={
            <>
              <KnobSegmented label="variant" value={listVariant} onChange={setListVariant} options={[{ label: 'card', value: 'card' }, { label: 'inline', value: 'inline' }]} />
              <KnobSwitch label="copyable" checked={copyable} onChange={setCopyable} />
              <KnobSwitch label="sortable" checked={sortable} onChange={setSortable} />
              <KnobNumber label="minItems" value={minItems} onChange={setMinItems} min={0} max={3} />
              <KnobNumber label="maxItems" value={maxItems} onChange={setMaxItems} min={2} max={8} />
            </>
          }
          onResetKnobs={() => {
            setListVariant('card')
            setCopyable(true)
            setSortable(true)
            setMinItems(1)
            setMaxItems(5)
            setRoutes(INITIAL_ROUTES)
          }}
          code={`<ProFormList<RouteItem>
  value={routes}
  onChange={setRoutes}
  variant="${listVariant}"
  copyable={${copyable}}
  sortable={${sortable}}
  minItems={${minItems}}
  maxItems={${maxItems}}
  rowValidator={(item) => (!item.upstream ? '集群名称必填' : item.weight <= 0 ? '权重须大于 0' : undefined)}
  summaryRender={(items) => <StatusTag tone={sum === 100 ? 'success' : 'danger'}>总权重 {sum}%</StatusTag>}
/>`}
          apiRows={[
            { prop: 'variant', type: "'card' | 'inline'", defaultValue: "'card'", description: '独立卡片式或紧凑单行式布局风格' },
            { prop: 'copyable / sortable', type: 'boolean', defaultValue: 'true / false', description: '允许行复制与上移/下移排序控制' },
            { prop: 'minItems / maxItems', type: 'number', defaultValue: '0 / undefined', description: '条目最小保留数与最大允许数约束' },
            { prop: 'rowValidator / summaryRender', type: 'Function', description: '行级校验反馈与底部汇总区实时联动渲染' },
          ]}
        >
          <ProFormList<RouteItem>
            label="上游灰度集群权重分配"
            value={routes}
            onChange={setRoutes}
            variant={listVariant}
            copyable={copyable}
            sortable={sortable}
            minItems={minItems}
            maxItems={Math.max(minItems, maxItems)}
            addLabel="新增上游目标"
            initialItem={() => ({ upstream: `svc-node-${routes.length + 1}`, zone: '华东-上海', weight: 0 })}
            rowValidator={(item) => {
              if (!item.upstream.trim()) return '上游服务标识不能为空'
              if (item.weight <= 0 || item.weight > 100) return '单路权重须在 1% ~ 100% 之间'
              return undefined
            }}
            summaryRender={(items) => {
              const total = items.reduce((acc, r) => acc + Number(r.weight || 0), 0)
              return (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span>当前共配置 {items.length} 条上游路由分支</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold">累计权重：{total}%</span>
                    <StatusTag tone={total === 100 ? 'success' : total > 100 ? 'danger' : 'warning'} size="xs">
                      {total === 100 ? '权重校验通过 (100%)' : total > 100 ? '总权重溢出 (>100%)' : `还需分配 ${100 - total}%`}
                    </StatusTag>
                  </div>
                </div>
              )
            }}
          >
            {(item, _index, helpers) => (
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <Input size="sm" placeholder="上游服务名" value={item.upstream} onChange={(e) => helpers.update({ upstream: e.target.value })} />
                <Select size="sm" value={item.zone} onChange={(val) => helpers.update({ zone: String(val) })} options={[{ label: '华东-上海', value: '华东-上海' }, { label: '华北-北京', value: '华北-北京' }, { label: '华南-深圳', value: '华南-深圳' }]} />
                <InputNumber size="sm" min={0} max={100} step={5} value={item.weight} onChange={(v) => helpers.update({ weight: Number(v ?? 0) })} />
              </div>
            )}
          </ProFormList>
        </ComponentDocPreview>

        <ComponentDocPreview
          title="KeyValueInput 智能粘贴、重复键检测与多格式互转"
          components={['KeyValueInput']}
          description="内置重复 Key 实时红框告警、smartPaste（在 Key 输入框直接粘贴多行 .env / Headers / JSON 自动拆分为多行）、单行启用开关、密文遮罩以及三格式双向互转。"
          controls={
            <>
              <KnobSwitch label="allowEnableToggle" checked={allowEnableToggle} onChange={setAllowEnableToggle} />
              <KnobSwitch label="allowSecretMask" checked={allowSecretMask} onChange={setAllowSecretMask} />
              <KnobSwitch label="allowBulkEdit" checked={allowBulkEdit} onChange={setAllowBulkEdit} />
              <KnobSegmented label="defaultBulkFormat" value={defaultBulkFormat} onChange={setDefaultBulkFormat} options={[{ label: 'dotenv', value: 'dotenv' }, { label: 'headers', value: 'headers' }, { label: 'json', value: 'json' }]} />
              <KnobSegmented label="size" value={kvSize} onChange={setKvSize} options={[{ label: 'xs', value: 'xs' }, { label: 'sm', value: 'sm' }, { label: 'md', value: 'md' }, { label: 'lg', value: 'lg' }]} />
            </>
          }
          onResetKnobs={() => {
            setAllowEnableToggle(true)
            setAllowSecretMask(true)
            setAllowBulkEdit(true)
            setDefaultBulkFormat('dotenv')
            setKvSize('sm')
            setKvEntries(INITIAL_KV)
          }}
          code={`<KeyValueInput value={entries} onChange={setEntries} smartPaste allowEnableToggle={${allowEnableToggle}} allowSecretMask={${allowSecretMask}} allowBulkEdit={${allowBulkEdit}} defaultBulkFormat="${defaultBulkFormat}" size="${kvSize}" />`}
          apiRows={[
            { prop: 'smartPaste', type: 'boolean', defaultValue: 'true', description: '在任意 Key 输入框粘贴多行 .env / Headers / JSON 时自动解析并追加行' },
            { prop: 'allowEnableToggle / allowSecretMask', type: 'boolean / boolean', defaultValue: 'true / false', description: '行级启用开关与敏感值掩码查看' },
            { prop: 'allowBulkEdit / defaultBulkFormat', type: 'boolean / AbcKeyValueFormat', defaultValue: "true / 'dotenv'", description: '开启批量文本编辑模式及默认序列化格式 (dotenv/headers/json)' },
            { prop: 'readOnly / size', type: "boolean / 'xs' | 'sm' | 'md' | 'lg'", defaultValue: "false / 'sm'", description: '只读锁定态与高度规格' },
          ]}
        >
          <div className="space-y-3">
            <KeyValueInput key={`kv-fmt-${defaultBulkFormat}`} value={kvEntries} onChange={setKvEntries} allowEnableToggle={allowEnableToggle} allowSecretMask={allowSecretMask} allowBulkEdit={allowBulkEdit} defaultBulkFormat={defaultBulkFormat} size={kvSize} />
            <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 p-3">
              <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium text-[var(--abc-fg-secondary)]">
                <span>实时生效输出预览（仅含已启用条目，格式：{defaultBulkFormat}）</span>
                <span className="font-mono text-[var(--abc-fg-muted)]">已启用 {kvEntries.filter((e) => e.enabled !== false && e.key.trim()).length} / {kvEntries.length}</span>
              </div>
              <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-[var(--abc-fg)]">{serializedPreview || '(暂无已启用键值)'}</pre>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default DynamicFormOrchestrationPage
