import React, { useMemo, useState } from 'react'
import {
  EditableProTable,
  PageContainer,
  ProgressBar,
  StatCard,
  StatusTag,
  abcToast,
  type EditableProColumn,
} from '@abc-design/react'
import { Activity, Cpu, ShieldCheck } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'
import { SortableCardsDemoSection } from './SortableCardsDemoSection'

interface GatewayPolicyRow {
  id: string
  service: string
  enabled: boolean
  nodeTier: 'edge' | 'standard' | 'dedicated'
  minQps: number
  maxQps: number
}

const INITIAL_POLICIES: GatewayPolicyRow[] = [
  { id: 'GW-01', service: 'checkout-payment-api', enabled: true, nodeTier: 'dedicated', minQps: 2000, maxQps: 8000 },
  { id: 'GW-02', service: 'user-auth-oauth', enabled: true, nodeTier: 'standard', minQps: 1200, maxQps: 5000 },
  { id: 'GW-03', service: 'catalog-search-edge', enabled: true, nodeTier: 'edge', minQps: 800, maxQps: 3500 },
  { id: 'GW-04', service: 'webhook-dispatch-worker', enabled: false, nodeTier: 'standard', minQps: 500, maxQps: 2000 },
]

const CLUSTER_QPS_CAPACITY = 25000

const TIER_LABEL_MAP: Record<GatewayPolicyRow['nodeTier'], { label: string; tone: 'neutral' | 'primary' | 'purple' }> = {
  edge: { label: '边缘节点', tone: 'neutral' },
  standard: { label: '标准网关', tone: 'primary' },
  dedicated: { label: '独享高防', tone: 'purple' },
}

/**
 * 可编辑表格与实时汇总联动演练页
 * 覆盖 EditableProTable 双模式编辑、跨列数字大小约束校验、summaryRender 与外侧配额 ProgressBar / StatCard 实时联动
 */
export const EditableTableLinkagePage: React.FC = () => {
  const [mode, setMode] = useState<'row' | 'table'>('row')
  const [deletable, setDeletable] = useState(true)
  const [creatorPos, setCreatorPos] = useState<'top' | 'bottom' | 'none'>('bottom')
  const [rows, setRows] = useState<GatewayPolicyRow[]>(INITIAL_POLICIES)

  const columns = useMemo<EditableProColumn<GatewayPolicyRow>[]>(
    () => [
      {
        key: 'service',
        title: '网关服务标识',
        dataIndex: 'service',
        width: 210,
        placeholder: '输入服务名',
        validator: (val) => (!String(val ?? '').trim() ? '服务名不能为空' : undefined),
      },
      {
        key: 'enabled',
        title: '启用限流',
        dataIndex: 'enabled',
        width: 100,
        valueType: 'switch',
      },
      {
        key: 'nodeTier',
        title: '节点等级',
        dataIndex: 'nodeTier',
        width: 150,
        valueType: 'select',
        options: [
          { label: '边缘节点 (edge)', value: 'edge' },
          { label: '标准网关 (standard)', value: 'standard' },
          { label: '独享高防 (dedicated)', value: 'dedicated' },
        ],
        render: (val) => {
          const meta = TIER_LABEL_MAP[val as GatewayPolicyRow['nodeTier']] ?? TIER_LABEL_MAP.standard
          return (
            <StatusTag tone={meta.tone} size="xs">
              {meta.label}
            </StatusTag>
          )
        },
      },
      {
        key: 'minQps',
        title: '保底 QPS (minQps)',
        dataIndex: 'minQps',
        width: 145,
        align: 'right',
        valueType: 'number',
        min: 0,
        max: 20000,
        step: 100,
        validator: (val, row) => {
          const n = Number(val)
          if (Number.isNaN(n) || n < 0) return 'minQps 须大于等于 0'
          if (n >= Number(row.maxQps)) return 'minQps 必须严格小于 maxQps'
          return undefined
        },
      },
      {
        key: 'maxQps',
        title: '峰值上限 (maxQps)',
        dataIndex: 'maxQps',
        width: 145,
        align: 'right',
        valueType: 'number',
        min: 100,
        max: 30000,
        step: 200,
        validator: (val, row) => {
          const n = Number(val)
          if (Number.isNaN(n) || n <= 0) return 'maxQps 须大于 0'
          if (n <= Number(row.minQps)) return `需大于 minQps (${row.minQps})`
          return undefined
        },
      },
    ],
    []
  )

  const metrics = useMemo(() => {
    const activeRows = rows.filter((r) => r.enabled)
    const activeMinSum = activeRows.reduce((s, r) => s + Number(r.minQps || 0), 0)
    const activeMaxSum = activeRows.reduce((s, r) => s + Number(r.maxQps || 0), 0)
    const invalidCount = rows.filter((r) => Number(r.maxQps) <= Number(r.minQps) || !r.service.trim()).length
    const utilPct = Math.round((activeMaxSum / CLUSTER_QPS_CAPACITY) * 100)
    return { activeCount: activeRows.length, activeMinSum, activeMaxSum, invalidCount, utilPct }
  }, [rows])

  const code = `import { EditableProTable, ProgressBar, StatCard } from '@abc-design/react'

<EditableProTable<GatewayPolicyRow>
  value={rows}
  onChange={setRows}
  rowKey="id"
  mode="${mode}"
  deletable={${deletable}}
  recordCreatorProps={${
    creatorPos === 'none'
      ? 'false'
      : `{ position: '${creatorPos}', label: '新增网关限流策略', maxRows: 8, record: () => ({ ... }) }`
  }}
  columns={columns} // 含 minQps / maxQps 跨列联动校验
  summaryRender={(list) => <div>汇总总峰值 QPS: ...</div>}
/>`

  return (
    <PageContainer
      title="可编辑表格与实时汇总联动"
      subtitle="演示 EditableProTable 行编辑/整表实时编辑双模式、跨列数字比较校验与外侧集群配额水位联动"
      breadcrumbs={[{ label: '复杂联动' }, { label: '可编辑表格与汇总联动' }]}
    >
      <div className="space-y-6">
        <ComponentDocPreview
        title="EditableProTable × 跨列校验 × 外侧配额汇总联动"
        components={['EditableProTable', 'StatCard', 'ProgressBar', 'StatusTag']}
        description="支持单行编辑保存回滚 (row) 与整表实时响应 (table)；尝试把 minQps 调至大于 maxQps 触发跨列红色校验，或启停节点开关观察外侧 StatCard 与集群水位进度条同步跃迁。"
        controls={
          <>
            <KnobSegmented
              label="mode"
              value={mode}
              onChange={setMode}
              options={[
                { label: 'row', value: 'row' },
                { label: 'table', value: 'table' },
              ]}
            />
            <KnobSwitch label="deletable" checked={deletable} onChange={setDeletable} />
            <KnobSegmented
              label="creatorPos"
              value={creatorPos}
              onChange={setCreatorPos}
              options={[
                { label: 'top', value: 'top' },
                { label: 'bottom', value: 'bottom' },
                { label: 'none', value: 'none' },
              ]}
            />
          </>
        }
        onResetKnobs={() => {
          setMode('row')
          setDeletable(true)
          setCreatorPos('bottom')
          setRows(INITIAL_POLICIES)
        }}
        code={code}
        apiRows={[
          { prop: 'mode', type: "'row' | 'table'", defaultValue: "'row'", description: 'row 为单行点击编辑/保存校验/取消回滚；table 为整表即时联动' },
          { prop: 'deletable', type: 'boolean', defaultValue: 'true', description: '是否允许删除表格行' },
          { prop: 'recordCreatorProps', type: 'false | { position, record, label, maxRows }', description: '顶部或底部新建行按钮配置，传 false 关闭新建' },
          { prop: 'columns[].validator', type: '(val, row, rows) => string | undefined', description: '列级校验函数，可读取整行字段实现跨列比较（如 maxQps > minQps）' },
          { prop: 'summaryRender', type: '(rows: T[]) => ReactNode', description: '表格底部汇总行渲染函数，随编辑态实时重算' },
        ]}
      >
        <div className="space-y-4">
          {/* 外侧实时汇总 KPI 联动卡片 */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <StatCard
              label="已启用限流策略"
              value={`${metrics.activeCount} / ${rows.length}`}
              icon={<ShieldCheck className="h-4 w-4" />}
              tone={metrics.invalidCount > 0 ? 'warning' : 'success'}
              hint={metrics.invalidCount > 0 ? `存在 ${metrics.invalidCount} 行跨列校验异常` : '全表跨列校验均已通过'}
            />
            <StatCard
              label="已启保底 / 峰值总 QPS"
              value={`${metrics.activeMinSum.toLocaleString()} ~ ${metrics.activeMaxSum.toLocaleString()}`}
              icon={<Activity className="h-4 w-4" />}
              tone="primary"
              hint="仅统计启用状态为开启的规则"
            />
            <StatCard
              label="集群总容量水位"
              value={`${metrics.utilPct}%`}
              icon={<Cpu className="h-4 w-4" />}
              tone={metrics.utilPct >= 90 ? 'danger' : metrics.utilPct >= 75 ? 'warning' : 'default'}
              hint={`上限 ${CLUSTER_QPS_CAPACITY.toLocaleString()} QPS`}
            >
              <ProgressBar
                className="mt-2"
                value={metrics.activeMaxSum}
                max={CLUSTER_QPS_CAPACITY}
                warningThreshold={75}
                dangerThreshold={90}
                size="sm"
              />
            </StatCard>
          </div>

          <EditableProTable<GatewayPolicyRow>
            value={rows}
            onChange={setRows}
            rowKey="id"
            mode={mode}
            deletable={deletable}
            recordCreatorProps={
              creatorPos === 'none'
                ? false
                : {
                    position: creatorPos,
                    label: '新增限流策略',
                    maxRows: 8,
                    record: () => ({
                      id: `GW-0${rows.length + 1}-${Date.now().toString().slice(-3)}`,
                      service: `edge-route-${rows.length + 1}`,
                      enabled: true,
                      nodeTier: 'standard',
                      minQps: 500,
                      maxQps: 2000,
                    }),
                  }
            }
            columns={columns}
            onSaveRow={async (row) => {
              await new Promise((r) => window.setTimeout(r, 250))
              abcToast.success(`已保存策略 ${row.service} (${row.minQps}~${row.maxQps} QPS)`)
            }}
            summaryRender={(list) => {
              const active = list.filter((r) => r.enabled)
              const sumMax = active.reduce((acc, r) => acc + Number(r.maxQps || 0), 0)
              const hasErr = list.some((r) => Number(r.maxQps) <= Number(r.minQps))
              return (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span>
                    表格汇总：有效规则 <strong>{active.length}</strong> 条 · 合计峰值配额{' '}
                    <strong className="font-mono text-[var(--abc-primary)]">{sumMax.toLocaleString()} QPS</strong>
                  </span>
                  <StatusTag tone={hasErr ? 'danger' : sumMax > CLUSTER_QPS_CAPACITY ? 'warning' : 'success'} size="xs">
                    {hasErr
                      ? '存在 maxQps <= minQps 跨列错误'
                      : sumMax > CLUSTER_QPS_CAPACITY
                        ? '总配额超出集群推荐阈值'
                        : '跨列及配额水位校验正常'}
                  </StatusTag>
                </div>
              )
            }}
          />
        </div>
      </ComponentDocPreview>

      <SortableCardsDemoSection />
      </div>
    </PageContainer>
  )
}

export default EditableTableLinkagePage
