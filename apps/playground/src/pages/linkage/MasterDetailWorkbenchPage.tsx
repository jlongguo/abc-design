import React, { useMemo, useState } from 'react'
import {
  Button,
  ConfigDiffViewer,
  DataTable,
  DescriptionList,
  InputNumber,
  PageContainer,
  ProSplitWorkbench,
  ReasonedActionDrawer,
  ResizableSplitPane,
  Select,
  SplitDetailPanel,
  StatusTag,
  abcToast,
  type AbcTreeNode,
} from '@abc-design/react'
import { ArrowUpRight, Layers, Server } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSwitch } from '../../components/PropKnobs'
import { BottomDockPanelDemoSection } from './BottomDockPanelDemoSection'

type ClusterEnv = 'prod' | 'staging'
type QuotaTier = 'standard' | 'enterprise'

interface TenantClusterRow {
  id: string
  name: string
  env: ClusterEnv
  tier: QuotaTier
  region: string
  maxConcurrency: number
  monthlyBudget: number
  owner: string
}

const INITIAL_ROWS: TenantClusterRow[] = [
  { id: 'CL-101', name: '星河跨境支付网关', env: 'prod', tier: 'enterprise', region: '华东-上海', maxConcurrency: 1200, monthlyBudget: 48000, owner: '陈明哲' },
  { id: 'CL-102', name: '深海智算调度集群', env: 'prod', tier: 'standard', region: '华北-北京', maxConcurrency: 400, monthlyBudget: 16000, owner: '林若曦' },
  { id: 'CL-103', name: '极光零售实时数仓', env: 'staging', tier: 'standard', region: '华南-深圳', maxConcurrency: 200, monthlyBudget: 9000, owner: '赵子涵' },
  { id: 'CL-104', name: '远航物流轨迹引擎', env: 'prod', tier: 'standard', region: '华东-上海', maxConcurrency: 600, monthlyBudget: 24000, owner: '周文涛' },
  { id: 'CL-105', name: '云雀风控特征服务', env: 'staging', tier: 'enterprise', region: '新加坡', maxConcurrency: 800, monthlyBudget: 32000, owner: '苏晓晴' },
  { id: 'CL-106', name: '天枢多模态推理池', env: 'prod', tier: 'standard', region: '华北-北京', maxConcurrency: 350, monthlyBudget: 14000, owner: '许嘉诚' },
]

const TREE_DATA: AbcTreeNode[] = [
  {
    key: 'group-env',
    title: '按部署环境',
    children: [
      { key: 'env:prod', title: '生产主环境 (prod)' },
      { key: 'env:staging', title: '灰度预发 (staging)' },
    ],
  },
  {
    key: 'group-tier',
    title: '按配额等级',
    children: [
      { key: 'tier:standard', title: '标准配额 (standard)' },
      { key: 'tier:enterprise', title: '企业高配 (enterprise)' },
    ],
  },
]

const DIFF_LABELS: Record<string, string> = {
  tier: '配额等级',
  maxConcurrency: '最大并发路数',
  monthlyBudget: '月度预算上限 (元)',
}

/**
 * 主从工作台与审计闭环演练页
 * 覆盖 ResizableSplitPane 拖拽分割与 ProSplitWorkbench × DataTable × SplitDetailPanel × ReasonedActionDrawer × ConfigDiffViewer 四方数据闭环
 */
export const MasterDetailWorkbenchPage: React.FC = () => {
  const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal')
  const [minSize, setMinSize] = useState(160)
  const [maxSize, setMaxSize] = useState(440)
  const [collapsible, setCollapsible] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  const [paneSize, setPaneSize] = useState(240)

  const [sidebarWidth, setSidebarWidth] = useState<number>(260)
  const [detailWidth, setDetailWidth] = useState<number>(360)
  const [detailExpanded, setDetailExpanded] = useState(false)
  const [rows, setRows] = useState<TenantClusterRow[]>(INITIAL_ROWS)
  const [selectedTreeKey, setSelectedTreeKey] = useState<string | number | null>(null)
  const [page, setPage] = useState(1)
  const [selectedRowId, setSelectedRowId] = useState<string | null>(INITIAL_ROWS[0].id)

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [draftTier, setDraftTier] = useState<QuotaTier>('enterprise')
  const [draftConcurrency, setDraftConcurrency] = useState(800)
  const [draftBudget, setDraftBudget] = useState(32000)

  // 基于实时 rows 统计树角标，配额升配调整等级后左侧角标即时更新
  const treeCounts = useMemo<Record<string, number>>(() => ({
    'group-env': rows.length,
    'env:prod': rows.filter((r) => r.env === 'prod').length,
    'env:staging': rows.filter((r) => r.env === 'staging').length,
    'group-tier': rows.length,
    'tier:standard': rows.filter((r) => r.tier === 'standard').length,
    'tier:enterprise': rows.filter((r) => r.tier === 'enterprise').length,
  }), [rows])

  const filteredRows = useMemo(() => {
    const k = selectedTreeKey ? String(selectedTreeKey) : ''
    if (k.startsWith('env:')) return rows.filter((r) => `env:${r.env}` === k)
    if (k.startsWith('tier:')) return rows.filter((r) => `tier:${r.tier}` === k)
    return rows
  }, [rows, selectedTreeKey])

  const pageSize = 3
  const pagedRows = useMemo(() => filteredRows.slice((page - 1) * pageSize, page * pageSize), [filteredRows, page])
  const selectedIndex = filteredRows.findIndex((r) => r.id === selectedRowId)
  const selectedRow = selectedIndex >= 0 ? filteredRows[selectedIndex] : null

  const openUpgradeDrawer = (row: TenantClusterRow) => {
    setDraftTier(row.tier === 'standard' ? 'enterprise' : row.tier)
    setDraftConcurrency(row.maxConcurrency + 400)
    setDraftBudget(row.monthlyBudget + 16000)
    setDrawerOpen(true)
  }

  const handleConfirmUpgrade = (reason: string) => {
    if (!selectedRow) return
    setRows((prev) =>
      prev.map((item) =>
        item.id === selectedRow.id
          ? { ...item, tier: draftTier, maxConcurrency: draftConcurrency, monthlyBudget: draftBudget }
          : item
      )
    )
    setDrawerOpen(false)
    abcToast.success(`已为 ${selectedRow.name} 完成配额升配，审计原因：${reason}`)
  }

  const safeMax = Math.max(minSize, maxSize)
  const card1Code = `<ResizableSplitPane
  direction="${direction}"
  size={${paneSize}}
  onSizeChange={setPaneSize}
  minSize={${minSize}}
  maxSize={${safeMax}}
  collapsible={${collapsible}}
  collapsed={${collapsed}}
  onCollapsedChange={setCollapsed}
  firstPane={<div>导航面板 (${paneSize}px)</div>}
  secondPane={<div>主工作区</div>}
/>`

  const card2Code = `<ProSplitWorkbench
  treeData={TREE_DATA}
  counts={treeCounts}
  sidebarWidth={${sidebarWidth}}
  selectedKey={selectedTreeKey}
  onSelectKey={(k) => { setSelectedTreeKey(k); setPage(1) }}
  detailOpen={Boolean(selectedRow)}
  detailWidth={${detailWidth}}
  detailExpanded={${detailExpanded}}
  detailPanel={<SplitDetailPanel title={selectedRow?.name} footer={<Button onClick={openUpgrade}>配额升配</Button>} />}
>
  <DataTable data={pagedRows} onRowClick={(r) => setSelectedRowId(r.id)} />
</ProSplitWorkbench>`

  return (
    <PageContainer
      title="主从工作台与审计闭环"
      subtitle="演示 ResizableSplitPane 双向调宽与 ProSplitWorkbench × DataTable × SplitDetailPanel × ReasonedActionDrawer × ConfigDiffViewer 四方联动"
      breadcrumbs={[{ label: '复杂联动' }, { label: '主从工作台与审计闭环' }]}
    >
      <div className="space-y-6">
        <ComponentDocPreview
          title="ResizableSplitPane 双向可拖拽分割容器"
          components={['ResizableSplitPane']}
          description="支持水平/垂直切分、拖拽手柄调节像素尺寸、键盘方向键微调及一键折叠，实时回传当前像素尺寸。"
          controls={
            <>
              <KnobSegmented label="direction" value={direction} onChange={setDirection} options={[{ label: 'horizontal', value: 'horizontal' }, { label: 'vertical', value: 'vertical' }]} />
              <KnobNumber label="minSize" value={minSize} onChange={setMinSize} min={120} max={260} step={20} />
              <KnobNumber label="maxSize" value={maxSize} onChange={setMaxSize} min={300} max={540} step={20} />
              <KnobSwitch label="collapsible" checked={collapsible} onChange={setCollapsible} />
              <KnobSwitch label="collapsed" checked={collapsed} onChange={setCollapsed} />
            </>
          }
          onResetKnobs={() => {
            setDirection('horizontal')
            setMinSize(160)
            setMaxSize(440)
            setCollapsible(true)
            setCollapsed(false)
            setPaneSize(240)
          }}
          code={card1Code}
          apiRows={[
            { prop: 'direction', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: '分割方向：左右分栏或上下分栏' },
            { prop: 'size / onSizeChange', type: 'number / (next: number) => void', description: '受控像素尺寸与拖拽/键盘调节实时回调' },
            { prop: 'minSize / maxSize', type: 'number', defaultValue: '180 / 560', description: '分割面板允许拖拽的最小与最大像素限制' },
            { prop: 'collapsible / collapsed', type: 'boolean', defaultValue: 'true / false', description: '是否启用折叠开关及受控折叠状态' },
          ]}
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs">
              <span className="text-[var(--abc-fg-secondary)]">
                实时分割尺寸：
                <strong className="ml-1 font-mono text-[var(--abc-primary)]">
                  {collapsed ? '已折叠 (0px)' : `${Math.round(paneSize)}px`}
                </strong>
                <span className="ml-2 text-[var(--abc-fg-muted)]">（区间 {minSize}px ~ {safeMax}px，支持拖拽或方向键调节）</span>
              </span>
              <StatusTag tone={collapsed ? 'warning' : 'success'} size="xs">{direction} · {collapsed ? 'collapsed' : 'expanded'}</StatusTag>
            </div>

            <ResizableSplitPane
              direction={direction}
              size={paneSize}
              onSizeChange={setPaneSize}
              minSize={minSize}
              maxSize={safeMax}
              collapsible={collapsible}
              collapsed={collapsed}
              onCollapsedChange={setCollapsed}
              className="h-60 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]"
              firstPane={
                <div className="flex h-full flex-col justify-between bg-[var(--abc-bg-muted)]/40 p-3 text-xs">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 font-semibold text-[var(--abc-fg)]">
                      <Layers className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                      <span>第一分栏 (First Pane)</span>
                    </div>
                    <p className="text-[var(--abc-fg-muted)]">支持拖拽与双击复位，折叠后 DOM 仍保活。</p>
                  </div>
                  <div className="font-mono text-[11px] text-[var(--abc-fg-secondary)]">当前尺寸: {Math.round(paneSize)}px</div>
                </div>
              }
              secondPane={
                <div className="flex h-full flex-col justify-between p-4 text-xs">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 font-semibold text-[var(--abc-fg)]">
                      <Server className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                      <span>第二分栏自适应舞台 (Second Pane)</span>
                    </div>
                    <p className="text-[var(--abc-fg-secondary)]">第一分栏伸缩或折叠时，主工作区自动占满剩余空间。</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="xs" variant="secondary" onClick={() => setPaneSize(minSize)}>贴合最小值 ({minSize}px)</Button>
                    <Button size="xs" variant="secondary" onClick={() => setPaneSize(safeMax)}>贴合最大值 ({safeMax}px)</Button>
                  </div>
                </div>
              }
            />
          </div>
        </ComponentDocPreview>

        <ComponentDocPreview
          title="ProSplitWorkbench × DataTable × SplitDetailPanel × ReasonedActionDrawer × ConfigDiffViewer 四方闭环"
          components={['ProSplitWorkbench', 'DataTable', 'SplitDetailPanel', 'ReasonedActionDrawer', 'ConfigDiffViewer']}
          description="点击左侧分类树筛选中表并重置分页 -> 点击表行在右侧挤出详情 -> 点击「配额升配」通过 ConfigDiffViewer 预览变更并提交审计原因 -> 同步刷新表格、树统计角标与详情数据。"
          controls={
            <>
              <KnobSegmented label="sidebarWidth" value={sidebarWidth} onChange={setSidebarWidth} options={[{ label: '220px', value: 220 }, { label: '260px', value: 260 }, { label: '320px', value: 320 }]} />
              <KnobSegmented label="detailWidth" value={detailWidth} onChange={setDetailWidth} options={[{ label: '360px', value: 360 }, { label: '420px', value: 420 }]} />
              <KnobSwitch label="detailExpanded" checked={detailExpanded} onChange={setDetailExpanded} />
            </>
          }
          onResetKnobs={() => {
            setSidebarWidth(260)
            setDetailWidth(360)
            setDetailExpanded(false)
            setRows(INITIAL_ROWS)
            setSelectedTreeKey(null)
            setPage(1)
            setSelectedRowId(INITIAL_ROWS[0].id)
            setDrawerOpen(false)
          }}
          code={card2Code}
          apiRows={[
            { prop: 'treeData / counts', type: 'AbcTreeNode[] / Record<string, number>', description: '左侧分类导航树及其节点右侧统计角标映射' },
            { prop: 'sidebarWidth', type: 'number', defaultValue: '260', description: '左侧树侧边栏初始宽度（支持拖拽调整）' },
            { prop: 'detailOpen / detailWidth / detailExpanded', type: 'boolean / number / boolean', description: '右侧内联挤压详情容器显隐、宽度及沉浸全宽开关' },
            { prop: 'ReasonedActionDrawer', type: 'ReasonedActionDrawerProps', description: '强制填写审计原因的侧边抽屉，适合配额变更等高危操作' },
            { prop: 'ConfigDiffViewer', type: 'ConfigDiffViewerProps', description: '结构化前后对象语义 Diff 对比面板，嵌入抽屉预览变更影响' },
          ]}
        >
          <ProSplitWorkbench
            key={`wb-${sidebarWidth}`}
            sidebarTitle="集群维度导航"
            treeData={TREE_DATA}
            counts={treeCounts}
            allLabel="全部集群"
            allCount={rows.length}
            sidebarWidth={sidebarWidth}
            selectedKey={selectedTreeKey}
            onSelectKey={(nextKey) => {
              setSelectedTreeKey(nextKey)
              setPage(1)
            }}
            detailOpen={Boolean(selectedRow)}
            detailWidth={detailWidth}
            detailExpanded={detailExpanded}
            detailPanel={
              selectedRow ? (
                <SplitDetailPanel
                  title={selectedRow.name}
                  subtitle={`${selectedRow.id} · ${selectedRow.region}`}
                  badge={<StatusTag tone={selectedRow.tier === 'enterprise' ? 'primary' : 'neutral'} size="xs">{selectedRow.tier === 'enterprise' ? '企业高配' : '标准配额'}</StatusTag>}
                  navigation={{
                    current: selectedIndex + 1,
                    total: filteredRows.length,
                    onPrev: () => setSelectedRowId(filteredRows[selectedIndex > 0 ? selectedIndex - 1 : filteredRows.length - 1].id),
                    onNext: () => setSelectedRowId(filteredRows[selectedIndex < filteredRows.length - 1 ? selectedIndex + 1 : 0].id),
                  }}
                  expandable
                  expanded={detailExpanded}
                  onExpandedChange={setDetailExpanded}
                  onClose={() => { setDetailExpanded(false); setSelectedRowId(null) }}
                  footer={
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] text-[var(--abc-fg-muted)]">负责人：{selectedRow.owner}</span>
                      <Button size="xs" variant="primary" rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />} onClick={() => openUpgradeDrawer(selectedRow)}>
                        配额升配
                      </Button>
                    </div>
                  }
                >
                  <DescriptionList
                    columns={1}
                    variant="cards"
                    items={[
                      { label: '部署环境', value: selectedRow.env === 'prod' ? '生产主环境 (prod)' : '灰度预发 (staging)' },
                      { label: '配额等级', value: selectedRow.tier === 'enterprise' ? '企业高配 (enterprise)' : '标准配额 (standard)' },
                      { label: '最大并发路数', value: `${selectedRow.maxConcurrency.toLocaleString()} 路` },
                      { label: '月度预算上限', value: `¥${selectedRow.monthlyBudget.toLocaleString()}` },
                    ]}
                  />
                </SplitDetailPanel>
              ) : null
            }
          >
            <DataTable<TenantClusterRow>
              columns={[
                { key: 'id', header: '集群 ID', mono: true },
                { key: 'name', header: '业务集群' },
                { key: 'tier', header: '配额等级', render: (r) => <StatusTag tone={r.tier === 'enterprise' ? 'primary' : 'neutral'} size="xs">{r.tier}</StatusTag> },
                { key: 'maxConcurrency', header: '并发上限', align: 'right', render: (r) => <span className="font-mono">{r.maxConcurrency}</span> },
              ]}
              data={pagedRows}
              keyExtractor={(r) => r.id}
              selectedRowKey={selectedRowId}
              onRowClick={(r) => setSelectedRowId(r.id)}
              pagination={{ mode: 'offset', current: page, pageSize, total: filteredRows.length, onChange: setPage }}
            />
          </ProSplitWorkbench>

          <ReasonedActionDrawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            title={selectedRow ? `配额升配 · ${selectedRow.name}` : '配额升配'}
            description="请确认调整后的并发与预算上限，并填写至少 8 个字符的变更审计原因。"
            confirmLabel="确认升配并落库"
            cancelLabel="取消"
            reasonLabel="审计原因"
            reasonPlaceholder="例如：双十一大促压测扩容，经架构评审审批通过"
            minReasonLength={8}
            onConfirm={handleConfirmUpgrade}
          >
            {selectedRow && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[var(--abc-fg-secondary)]">目标等级</label>
                    <Select size="sm" value={draftTier} onChange={(val) => setDraftTier(String(val) as QuotaTier)} options={[{ label: 'standard', value: 'standard' }, { label: 'enterprise', value: 'enterprise' }]} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[var(--abc-fg-secondary)]">并发路数</label>
                    <InputNumber size="sm" min={100} max={10000} step={100} value={draftConcurrency} onChange={(v) => setDraftConcurrency(Number(v ?? 100))} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[var(--abc-fg-secondary)]">月度预算 (¥)</label>
                    <InputNumber size="sm" min={5000} max={200000} step={2000} value={draftBudget} onChange={(v) => setDraftBudget(Number(v ?? 5000))} />
                  </div>
                </div>
                <ConfigDiffViewer
                  title="配额变更对比预览"
                  mode="fields"
                  onlyChanges={false}
                  labels={DIFF_LABELS}
                  before={{ tier: selectedRow.tier, maxConcurrency: selectedRow.maxConcurrency, monthlyBudget: selectedRow.monthlyBudget }}
                  after={{ tier: draftTier, maxConcurrency: draftConcurrency, monthlyBudget: draftBudget }}
                />
              </div>
            )}
          </ReasonedActionDrawer>
        </ComponentDocPreview>

        {/* 卡片 03: BottomDockPanel DevTools 风格底部可拖拽停靠坞 */}
        <BottomDockPanelDemoSection />
      </div>
    </PageContainer>
  )
}

export default MasterDetailWorkbenchPage
