import React, { useMemo, useState } from 'react'
import {
  evaluateRuleGroup,
  type AbcRuleFieldSchema,
  type AbcRuleGroup,
} from '@abc-design/core'
import {
  Button,
  DataTable,
  FilterBuilder,
  PageContainer,
  SavedFilterViews,
  StatusTag,
  abcToast,
  type SavedFilterViewItem,
} from '@abc-design/react'
import { Filter } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

interface GatewayLogRow {
  id: string
  service: string
  env: 'prod' | 'staging' | 'qa'
  region: string
  statusCode: number
  p99Latency: number
  wafBlocked: boolean
  timestamp: string
}

const LOG_FIELDS: AbcRuleFieldSchema[] = [
  { name: 'service', label: '网关服务', type: 'string', placeholder: '如 payment / auth' },
  {
    name: 'env',
    label: '运行环境',
    type: 'enum',
    options: [
      { label: '生产 (prod)', value: 'prod' },
      { label: '预发 (staging)', value: 'staging' },
      { label: '测试 (qa)', value: 'qa' },
    ],
  },
  { name: 'p99Latency', label: 'P99 耗时', type: 'number', unit: 'ms' },
  { name: 'statusCode', label: 'HTTP 状态码', type: 'number' },
  { name: 'wafBlocked', label: 'WAF 拦截', type: 'boolean' },
]

const GATEWAY_LOGS: GatewayLogRow[] = [
  { id: 'REQ-9001', service: 'checkout-payment-api', env: 'prod', region: '华东-上海', statusCode: 504, p99Latency: 640, wafBlocked: false, timestamp: '14:02:11' },
  { id: 'REQ-9002', service: 'user-auth-oauth', env: 'prod', region: '华北-北京', statusCode: 200, p99Latency: 42, wafBlocked: false, timestamp: '14:02:19' },
  { id: 'REQ-9003', service: 'edge-webhook-proxy', env: 'prod', region: '新加坡', statusCode: 403, p99Latency: 18, wafBlocked: true, timestamp: '14:02:27' },
  { id: 'REQ-9004', service: 'order-settlement-core', env: 'prod', region: '华东-上海', statusCode: 200, p99Latency: 415, wafBlocked: false, timestamp: '14:02:35' },
  { id: 'REQ-9005', service: 'catalog-search-edge', env: 'staging', region: '华南-深圳', statusCode: 200, p99Latency: 128, wafBlocked: false, timestamp: '14:02:44' },
  { id: 'REQ-9006', service: 'risk-engine-scoring', env: 'prod', region: '华北-北京', statusCode: 502, p99Latency: 520, wafBlocked: false, timestamp: '14:02:51' },
  { id: 'REQ-9007', service: 'partner-open-gateway', env: 'staging', region: '华东-上海', statusCode: 403, p99Latency: 31, wafBlocked: true, timestamp: '14:03:02' },
  { id: 'REQ-9008', service: 'billing-invoice-sync', env: 'qa', region: '华南-深圳', statusCode: 200, p99Latency: 280, wafBlocked: false, timestamp: '14:03:15' },
]

const RULE_ALL: AbcRuleGroup = {
  id: 'grp_all',
  type: 'group',
  combinator: 'AND',
  children: [{ id: 'c_all_1', type: 'condition', field: 'statusCode', operator: 'gte', value: 100 }],
}

const RULE_HIGH_P99: AbcRuleGroup = {
  id: 'grp_p99',
  type: 'group',
  combinator: 'AND',
  children: [
    { id: 'c_p99_1', type: 'condition', field: 'env', operator: 'in', value: ['prod'] },
    { id: 'c_p99_2', type: 'condition', field: 'p99Latency', operator: 'gt', value: 300 },
  ],
}

const RULE_WAF_OR_5XX: AbcRuleGroup = {
  id: 'grp_waf',
  type: 'group',
  combinator: 'OR',
  children: [
    { id: 'c_waf_1', type: 'condition', field: 'wafBlocked', operator: 'eq', value: true },
    {
      id: 'grp_waf_sub',
      type: 'group',
      combinator: 'AND',
      children: [
        { id: 'c_waf_2', type: 'condition', field: 'statusCode', operator: 'gte', value: 500 },
        { id: 'c_waf_3', type: 'condition', field: 'env', operator: 'eq', value: 'prod' },
      ],
    },
  ],
}

const INITIAL_VIEWS: SavedFilterViewItem<AbcRuleGroup>[] = [
  { id: 'preset-all', name: '全部日志', filter: RULE_ALL, builtIn: true },
  { id: 'preset-p99', name: '高危 P99 超限', filter: RULE_HIGH_P99, builtIn: true },
  { id: 'preset-waf', name: '生产 5xx 或 WAF 拦截', filter: RULE_WAF_OR_5XX, builtIn: true },
]

function cloneRule(rule: AbcRuleGroup): AbcRuleGroup {
  return JSON.parse(JSON.stringify(rule)) as AbcRuleGroup
}

/**
 * 嵌套规则查询与持久化视图演练页
 * 覆盖 FilterBuilder (RuleBuilder) × SavedFilterViews × DataTable × @abc-design/core evaluateRuleGroup 全链路过滤闭环
 */
export const QueryBuilderAndViewsPage: React.FC = () => {
  const [maxDepth, setMaxDepth] = useState<0 | 1 | 2>(2)
  const [showSummary, setShowSummary] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const [views, setViews] = useState<SavedFilterViewItem<AbcRuleGroup>[]>(INITIAL_VIEWS)
  const [activeViewId, setActiveViewId] = useState<string>('preset-p99')
  const [ruleGroup, setRuleGroup] = useState<AbcRuleGroup>(() => cloneRule(RULE_HIGH_P99))

  const viewsWithCounts = useMemo(
    () =>
      views.map((view) => ({
        ...view,
        count: GATEWAY_LOGS.filter((row) => evaluateRuleGroup(row, view.filter, LOG_FIELDS)).length,
      })),
    [views]
  )

  const filteredLogs = useMemo(
    () => GATEWAY_LOGS.filter((row) => evaluateRuleGroup(row, ruleGroup, LOG_FIELDS)),
    [ruleGroup]
  )

  const handleReset = () => {
    setMaxDepth(2)
    setShowSummary(true)
    setDisabled(false)
    setViews(INITIAL_VIEWS)
    setActiveViewId('preset-p99')
    setRuleGroup(cloneRule(RULE_HIGH_P99))
  }

  const code = `import { evaluateRuleGroup } from '@abc-design/core'
import { FilterBuilder, SavedFilterViews, DataTable } from '@abc-design/react'

<SavedFilterViews
  views={views}
  onViewsChange={setViews}
  activeViewId={activeViewId}
  onSelectView={(v) => { setActiveViewId(v.id); setRuleGroup(v.filter) }}
  currentFilter={ruleGroup}
/>
<FilterBuilder
  fields={LOG_FIELDS}
  value={ruleGroup}
  onChange={setRuleGroup}
  maxDepth={${maxDepth}}
  showSummary={${showSummary}}
  disabled={${disabled}}
/>
<DataTable data={logs.filter((row) => evaluateRuleGroup(row, ruleGroup, LOG_FIELDS))} />`

  return (
    <PageContainer
      title="嵌套规则查询与持久化视图"
      subtitle="演示 FilterBuilder (RuleBuilder) 构建任意深度 AND/OR/NOT 逻辑树、SavedFilterViews 预设与自定义视图脏检测，以及 evaluateRuleGroup 实时求值过滤 DataTable"
      breadcrumbs={[{ label: '复杂联动' }, { label: '嵌套规则查询与视图' }]}
    >
      <ComponentDocPreview
        title="FilterBuilder (RuleBuilder) × SavedFilterViews × DataTable 规则引擎闭环"
        components={['FilterBuilder', 'RuleBuilder', 'SavedFilterViews', 'DataTable', 'evaluateRuleGroup']}
        description="点击上方系统只读视图切换预设规则；修改任意条件或添加嵌套子组后 SavedFilterViews 自动出现「已修改」脏标记并支持另存为自定义视图，下方表格实时求值命中日志。"
        controls={
          <>
            <KnobSegmented
              label="maxDepth"
              value={maxDepth}
              onChange={setMaxDepth}
              options={[
                { label: '0 (单层)', value: 0 },
                { label: '1 (两层)', value: 1 },
                { label: '2 (三层)', value: 2 },
              ]}
            />
            <KnobSwitch label="showSummary" checked={showSummary} onChange={setShowSummary} />
            <KnobSwitch label="disabled" checked={disabled} onChange={setDisabled} />
          </>
        }
        onResetKnobs={handleReset}
        code={code}
        apiRows={[
          { prop: 'FilterBuilder.fields', type: 'AbcRuleFieldSchema[]', required: true, description: '字段 Schema，自动决定可用操作符（eq/gt/between/in）及右值控件' },
          { prop: 'FilterBuilder.maxDepth', type: 'number', defaultValue: '2', description: '允许嵌套子条件组的最大深度，0 表示禁止新建嵌套子组' },
          { prop: 'FilterBuilder.showSummary / disabled', type: 'boolean', defaultValue: 'true / false', description: '底部逻辑表达式可读摘要条与全局禁用开关' },
          { prop: 'SavedFilterViews.isDirty', type: 'boolean', description: '缺省时自动深度比对 currentFilter 与激活视图快照，触发「已修改」与另存为入口' },
          { prop: 'evaluateRuleGroup(record, group, fields)', type: 'boolean', description: '来自 @abc-design/core 的纯函数 AST 规则求值引擎，支持前后端同构复用' },
        ]}
      >
        <div className="space-y-4">
          <SavedFilterViews<AbcRuleGroup>
            views={viewsWithCounts}
            onViewsChange={setViews}
            activeViewId={activeViewId}
            currentFilter={ruleGroup}
            onSelectView={(view) => {
              setActiveViewId(view.id)
              setRuleGroup(cloneRule(view.filter))
            }}
            onSaveAsView={(name) => abcToast.success(`已另存为自定义视图「${name}」`)}
            onUpdateView={() => abcToast.success('已覆盖更新当前自定义视图')}
            onDeleteView={() => {
              setActiveViewId('preset-all')
              setRuleGroup(cloneRule(RULE_ALL))
              abcToast.info('已删除自定义视图并回到全部日志')
            }}
          />

          <FilterBuilder
            fields={LOG_FIELDS}
            value={ruleGroup}
            onChange={setRuleGroup}
            maxDepth={maxDepth}
            showSummary={showSummary}
            disabled={disabled}
          />

          <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs">
            <div className="flex items-center gap-2">
              <Filter className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
              <span className="text-[var(--abc-fg-secondary)]">
                <code>evaluateRuleGroup</code> 实时求值命中：
              </span>
              <StatusTag tone={filteredLogs.length > 0 ? 'primary' : 'warning'} size="xs">
                {filteredLogs.length} / {GATEWAY_LOGS.length} 条记录
              </StatusTag>
            </div>
            <Button
              size="xs"
              variant="ghost"
              onClick={() => {
                setActiveViewId('preset-all')
                setRuleGroup(cloneRule(RULE_ALL))
              }}
            >
              重置为全部日志
            </Button>
          </div>

          <DataTable<GatewayLogRow>
            columns={[
              { key: 'id', header: '请求 ID', mono: true },
              { key: 'service', header: '网关服务', mono: true },
              {
                key: 'env',
                header: '环境',
                render: (r) => (
                  <StatusTag tone={r.env === 'prod' ? 'danger' : r.env === 'staging' ? 'warning' : 'neutral'} size="xs">
                    {r.env}
                  </StatusTag>
                ),
              },
              { key: 'statusCode', header: '状态码', align: 'right', mono: true },
              {
                key: 'p99Latency',
                header: 'P99 耗时',
                align: 'right',
                render: (r) => (
                  <StatusTag tone={r.p99Latency > 300 ? 'danger' : 'success'} size="xs">
                    {r.p99Latency} ms
                  </StatusTag>
                ),
              },
              {
                key: 'wafBlocked',
                header: 'WAF 拦截',
                render: (r) => (
                  <StatusTag tone={r.wafBlocked ? 'warning' : 'neutral'} size="xs">
                    {r.wafBlocked ? '已拦截' : '放行'}
                  </StatusTag>
                ),
              },
              { key: 'timestamp', header: '时间', mono: true },
            ]}
            data={filteredLogs}
            keyExtractor={(r) => r.id}
            keepHeaderWhenEmpty
            emptyTitle="没有符合当前组合规则的日志"
            emptyDescription="请调整上方 FilterBuilder 条件或切换回预设视图"
            emptyAction={
              <Button
                size="xs"
                variant="secondary"
                onClick={() => {
                  setActiveViewId('preset-all')
                  setRuleGroup(cloneRule(RULE_ALL))
                }}
              >
                恢复全部日志
              </Button>
            }
          />
        </div>
      </ComponentDocPreview>
    </PageContainer>
  )
}

export default QueryBuilderAndViewsPage
