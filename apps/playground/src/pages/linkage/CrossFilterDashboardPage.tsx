import React, { useMemo, useState } from 'react'
import { AbcChart, StatCard, type EChartsOption } from '@abc-design/charts'
import {
  ActiveFilterBar,
  Button,
  DataTable,
  PageContainer,
  StatusTag,
  type ActiveFilterChip,
} from '@abc-design/react'
import { Activity, AlertTriangle, Cpu, Server } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSwitch } from '../../components/PropKnobs'

type NodeHealth = 'healthy' | 'degraded' | 'offline'

interface ClusterNodeRow {
  id: string
  zone: string
  status: NodeHealth
  qps: number
  p99Ms: number
  cpuPct: number
}

const ZONES = ['华东-上海', '华北-北京', '华南-深圳', '新加坡'] as const

const STATUS_LABEL: Record<NodeHealth, string> = {
  healthy: '健康运行',
  degraded: '性能降级',
  offline: '节点离线',
}

const STATUS_BY_LABEL: Record<string, NodeHealth> = {
  健康运行: 'healthy',
  性能降级: 'degraded',
  节点离线: 'offline',
}

const CLUSTER_NODES: ClusterNodeRow[] = [
  { id: 'ND-SH-01', zone: '华东-上海', status: 'healthy', qps: 4200, p99Ms: 14, cpuPct: 46 },
  { id: 'ND-SH-02', zone: '华东-上海', status: 'healthy', qps: 3950, p99Ms: 16, cpuPct: 51 },
  { id: 'ND-SH-03', zone: '华东-上海', status: 'degraded', qps: 1850, p99Ms: 92, cpuPct: 84 },
  { id: 'ND-BJ-01', zone: '华北-北京', status: 'healthy', qps: 3600, p99Ms: 19, cpuPct: 44 },
  { id: 'ND-BJ-02', zone: '华北-北京', status: 'degraded', qps: 1420, p99Ms: 118, cpuPct: 89 },
  { id: 'ND-BJ-03', zone: '华北-北京', status: 'offline', qps: 0, p99Ms: 0, cpuPct: 0 },
  { id: 'ND-SZ-01', zone: '华南-深圳', status: 'healthy', qps: 3100, p99Ms: 17, cpuPct: 41 },
  { id: 'ND-SZ-02', zone: '华南-深圳', status: 'healthy', qps: 2980, p99Ms: 18, cpuPct: 39 },
  { id: 'ND-SZ-03', zone: '华南-深圳', status: 'degraded', qps: 1120, p99Ms: 105, cpuPct: 78 },
  { id: 'ND-SG-01', zone: '新加坡', status: 'healthy', qps: 2740, p99Ms: 28, cpuPct: 48 },
  { id: 'ND-SG-02', zone: '新加坡', status: 'offline', qps: 0, p99Ms: 0, cpuPct: 0 },
  { id: 'ND-SG-03', zone: '新加坡', status: 'healthy', qps: 2560, p99Ms: 25, cpuPct: 45 },
]

/**
 * 图表交叉下钻与多源筛选栏联动演练页
 * 覆盖 AbcChart × ActiveFilterBar × StatCard × DataTable 双向交互下钻与一键全局重置
 */
export const CrossFilterDashboardPage: React.FC = () => {
  const [hideWhenEmpty, setHideWhenEmpty] = useState(false)
  const [showZoneBar, setShowZoneBar] = useState(true)
  const [selectedZone, setSelectedZone] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<NodeHealth | null>(null)

  const filteredNodes = useMemo(
    () =>
      CLUSTER_NODES.filter((n) => {
        if (selectedZone && n.zone !== selectedZone) return false
        if (selectedStatus && n.status !== selectedStatus) return false
        return true
      }),
    [selectedZone, selectedStatus]
  )

  const chips = useMemo<ActiveFilterChip[]>(() => {
    const list: ActiveFilterChip[] = []
    if (selectedZone) {
      list.push({
        key: 'zone',
        label: '可用区',
        valueText: selectedZone,
        source: 'chart',
        onRemove: () => setSelectedZone(null),
      })
    }
    if (selectedStatus) {
      list.push({
        key: 'status',
        label: '运行状态',
        valueText: STATUS_LABEL[selectedStatus],
        source: 'chart',
        onRemove: () => setSelectedStatus(null),
      })
    }
    return list
  }, [selectedZone, selectedStatus])

  const stats = useMemo(() => {
    const totalQps = filteredNodes.reduce((acc, n) => acc + n.qps, 0)
    const activeNodes = filteredNodes.filter((n) => n.status !== 'offline')
    const avgP99 = activeNodes.length
      ? Math.round(activeNodes.reduce((acc, n) => acc + n.p99Ms, 0) / activeNodes.length)
      : 0
    const abnormalCount = filteredNodes.filter((n) => n.status !== 'healthy').length
    const abnormalRate = filteredNodes.length
      ? Math.round((abnormalCount / filteredNodes.length) * 100)
      : 0
    return { totalQps, avgP99, abnormalCount, abnormalRate }
  }, [filteredNodes])

  const barOption = useMemo<EChartsOption>(() => {
    const base = selectedStatus ? CLUSTER_NODES.filter((n) => n.status === selectedStatus) : CLUSTER_NODES
    return {
      tooltip: { trigger: 'axis' },
      grid: { left: 16, right: 16, top: 28, bottom: 12, containLabel: true },
      xAxis: { type: 'category', data: [...ZONES] },
      yAxis: { type: 'value', name: '总吞吐 QPS' },
      series: [
        {
          name: '可用区吞吐',
          type: 'bar',
          barMaxWidth: 32,
          data: ZONES.map((zone) => ({
            value: base.filter((n) => n.zone === zone).reduce((s, n) => s + n.qps, 0),
            itemStyle: selectedZone && selectedZone !== zone ? { opacity: 0.35 } : undefined,
          })),
        },
      ],
    }
  }, [selectedZone, selectedStatus])

  const pieOption = useMemo<EChartsOption>(() => {
    const base = selectedZone ? CLUSTER_NODES.filter((n) => n.zone === selectedZone) : CLUSTER_NODES
    const counts = {
      healthy: base.filter((n) => n.status === 'healthy').length,
      degraded: base.filter((n) => n.status === 'degraded').length,
      offline: base.filter((n) => n.status === 'offline').length,
    }
    return {
      tooltip: { trigger: 'item' },
      legend: { bottom: 0 },
      series: [
        {
          name: '节点状态分布',
          type: 'pie',
          radius: ['42%', '68%'],
          center: ['50%', '44%'],
          itemStyle: { borderRadius: 6, borderWidth: 2 },
          data: (['healthy', 'degraded', 'offline'] as NodeHealth[]).map((st) => ({
            name: STATUS_LABEL[st],
            value: counts[st],
            itemStyle: selectedStatus && selectedStatus !== st ? { opacity: 0.35 } : undefined,
          })),
        },
      ],
    }
  }, [selectedZone, selectedStatus])

  const barEvents = useMemo(
    () => ({
      click: (params: any) => {
        const zoneName = String(params?.name ?? '')
        if (!ZONES.includes(zoneName as (typeof ZONES)[number])) return
        setSelectedZone((prev) => (prev === zoneName ? null : zoneName))
      },
    }),
    []
  )

  const pieEvents = useMemo(
    () => ({
      click: (params: any) => {
        const nextStatus = STATUS_BY_LABEL[String(params?.name ?? '')]
        if (!nextStatus) return
        setSelectedStatus((prev) => (prev === nextStatus ? null : nextStatus))
      },
    }),
    []
  )

  const clearAll = () => {
    setSelectedZone(null)
    setSelectedStatus(null)
  }

  const code = `import { AbcChart, StatCard } from '@abc-design/charts'
import { ActiveFilterBar, DataTable } from '@abc-design/react'

<ActiveFilterBar
  chips={chips} // source: 'chart'
  totalCount={CLUSTER_NODES.length}
  filteredCount={filteredNodes.length}
  hideWhenEmpty={${hideWhenEmpty}}
  onClearAll={clearAll}
/>
${showZoneBar ? '<AbcChart option={barOption} height={240} onEvents={{ click: (p) => toggleZone(p.name) }} />\n' : ''}<AbcChart option={pieOption} height={240} onEvents={{ click: (p) => toggleStatus(p.name) }} />
<DataTable data={filteredNodes} keyExtractor={(r) => r.id} />`

  return (
    <PageContainer
      title="图表交叉下钻与多源筛选联动"
      subtitle="演示 AbcChart 点击下钻注入 ActiveFilterBar 来源标记胶囊，并同步联动统计指标卡 StatCard、兄弟图表与明细 DataTable"
      breadcrumbs={[{ label: '复杂联动' }, { label: '图表交叉下钻大盘' }]}
    >
      <ComponentDocPreview
        title="AbcChart × ActiveFilterBar × StatCard × DataTable 交叉下钻大盘"
        components={['AbcChart', 'ActiveFilterBar', 'StatCard', 'DataTable']}
        description="直接点击柱状图（可用区）或饼图（状态占比）触发交叉过滤，上方 ActiveFilterBar 自动记录来源图标 (source='chart') 并允许单条移除或一键重置全盘。"
        controls={
          <>
            <KnobSwitch label="hideWhenEmpty" checked={hideWhenEmpty} onChange={setHideWhenEmpty} />
            <KnobSwitch label="显示区域对比柱状图" checked={showZoneBar} onChange={setShowZoneBar} />
            <Button size="xs" variant="secondary" onClick={() => setSelectedZone('华东-上海')}>
              模拟下钻：华东-上海
            </Button>
            <Button size="xs" variant="secondary" onClick={() => setSelectedStatus('degraded')}>
              模拟下钻：性能降级
            </Button>
          </>
        }
        onResetKnobs={() => {
          setHideWhenEmpty(false)
          setShowZoneBar(true)
          clearAll()
        }}
        code={code}
        apiRows={[
          { prop: 'ActiveFilterBar.chips', type: 'ActiveFilterChip[]', required: true, description: '汇总各交互来源的生效条件胶囊，source="chart" 自动渲染图表图标' },
          { prop: 'ActiveFilterBar.hideWhenEmpty', type: 'boolean', defaultValue: 'true', description: '无任何筛选条件时是否自动折叠隐藏整条状态摘要栏' },
          { prop: 'AbcChart.onEvents', type: 'Record<string, (params, instance) => void>', description: 'ECharts 交互事件钩子，通过 click 回调提取类目与状态驱动交叉筛选' },
          { prop: 'StatCard', type: 'StatCardProps (@abc-design/charts)', description: '大盘核心指标卡，随交叉过滤结果实时重算总吞吐与异常占比' },
        ]}
      >
        <div className="space-y-4">
          <ActiveFilterBar
            chips={chips}
            totalCount={CLUSTER_NODES.length}
            filteredCount={filteredNodes.length}
            hideWhenEmpty={hideWhenEmpty}
            onClearAll={clearAll}
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="命中节点规模"
              value={filteredNodes.length}
              suffix={`/ ${CLUSTER_NODES.length} 台`}
              icon={<Server className="h-4 w-4" />}
              footer={selectedZone ? `限定可用区：${selectedZone}` : '覆盖全部 4 个可用区'}
            />
            <StatCard
              title="实时汇总吞吐"
              value={stats.totalQps.toLocaleString()}
              suffix="QPS"
              icon={<Activity className="h-4 w-4" />}
              footer="跨节点汇总处理能力"
            />
            <StatCard
              title="在线节点平均 P99"
              value={stats.avgP99}
              suffix="ms"
              icon={<Cpu className="h-4 w-4" />}
              footer="剔除离线节点的均值"
            />
            <StatCard
              title="异常节点占比"
              value={stats.abnormalRate}
              suffix="%"
              trend={stats.abnormalCount > 0 ? stats.abnormalCount : 0}
              trendLabel={stats.abnormalCount > 0 ? '台降级或离线' : '全部健康'}
              icon={<AlertTriangle className="h-4 w-4" />}
              footer={`降级/离线共 ${stats.abnormalCount} 台`}
            />
          </div>

          <div className={showZoneBar ? 'grid grid-cols-1 gap-4 lg:grid-cols-2' : 'grid grid-cols-1 gap-4'}>
            {showZoneBar && (
              <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3">
                <div className="mb-1 text-xs font-semibold text-[var(--abc-fg-secondary)]">
                  可用区吞吐分布（点击柱子切换下钻）
                </div>
                <AbcChart option={barOption} height={240} onEvents={barEvents} />
              </div>
            )}
            <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3">
              <div className="mb-1 text-xs font-semibold text-[var(--abc-fg-secondary)]">
                节点健康状态占比（点击扇区切换下钻）
              </div>
              <AbcChart option={pieOption} height={240} onEvents={pieEvents} />
            </div>
          </div>

          <DataTable<ClusterNodeRow>
            columns={[
              { key: 'id', header: '节点 ID', mono: true },
              { key: 'zone', header: '所属可用区' },
              {
                key: 'status',
                header: '健康状态',
                render: (r) => (
                  <StatusTag
                    tone={r.status === 'healthy' ? 'success' : r.status === 'degraded' ? 'warning' : 'danger'}
                    size="xs"
                  >
                    {STATUS_LABEL[r.status]}
                  </StatusTag>
                ),
              },
              { key: 'qps', header: '实时 QPS', align: 'right', render: (r) => r.qps.toLocaleString() },
              { key: 'p99Ms', header: 'P99 延迟', align: 'right', render: (r) => `${r.p99Ms} ms` },
              { key: 'cpuPct', header: 'CPU 使用率', align: 'right', render: (r) => `${r.cpuPct}%` },
            ]}
            data={filteredNodes}
            keyExtractor={(r) => r.id}
            keepHeaderWhenEmpty
            emptyTitle="当前交叉条件无匹配节点"
            emptyAction={
              <Button size="xs" variant="secondary" onClick={clearAll}>
                清空全部图表下钻筛选
              </Button>
            }
          />
        </div>
      </ComponentDocPreview>
    </PageContainer>
  )
}

export default CrossFilterDashboardPage
