import React, { useState } from 'react'
import {
  Button,
  DataTable,
  DescriptionList,
  InspectorPanel,
  PageContainer,
  SplitInspectorLayout,
  StatusTag,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableCore,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  abcToast,
  useCursorStack,
  type AbcColumn,
  type AbcTableDensity,
} from '@abc-design/react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'
import { SplitDetailShowcase } from '../SplitDetailShowcase'

interface LinkRow {
  id: string
  dc: string
  proto: string
  jitterMs: number
  qps: number
  status: 'normal' | 'degraded'
}

const LINK_ROWS: LinkRow[] = [
  { id: 'LK-SH-01', dc: '上海外高桥金融机房 A 栋', proto: 'BGP EVPN', jitterMs: 0.45, qps: 4200, status: 'normal' },
  { id: 'LK-BJ-02', dc: '北京亦庄云计算中心 B 区', proto: 'OTN 100G', jitterMs: 0.62, qps: 6800, status: 'normal' },
  { id: 'LK-SZ-03', dc: '深圳光明前海数据节点', proto: 'IPSec VPN', jitterMs: 1.28, qps: 2150, status: 'degraded' },
  { id: 'LK-HZ-04', dc: '杭州余杭灾备边缘站', proto: 'WireGuard', jitterMs: 0.51, qps: 3100, status: 'normal' },
  { id: 'LK-SG-05', dc: '新加坡亚太互联枢纽', proto: 'DirectPeering', jitterMs: 1.05, qps: 5400, status: 'normal' },
]

const CORE_COLUMNS: AbcColumn<LinkRow>[] = [
  { key: 'id', title: '链路编号', dataIndex: 'id', width: 110, copyable: true },
  { key: 'dc', title: '接入机房', dataIndex: 'dc', width: 200 },
  { key: 'proto', title: '承载协议', dataIndex: 'proto', width: 120 },
  { key: 'qps', title: '当前吞吐', dataIndex: 'qps', width: 100, align: 'right', sortable: true },
  {
    key: 'status',
    title: '状态',
    dataIndex: 'status',
    width: 100,
    render: (v) => <StatusTag tone={v === 'normal' ? 'success' : 'warning'} size="xs">{v === 'normal' ? '优良' : '降级'}</StatusTag>,
  },
]

const CURSOR_PAGES: Record<string, { rows: LinkRow[]; next: string | null }> = {
  ROOT: { rows: LINK_ROWS.slice(0, 3), next: 'cursor_p2' },
  cursor_p2: { rows: LINK_ROWS.slice(3), next: null },
}

/**
 * 基础表格原语、DataTable 通用表与主从分栏双范式文档页
 */
export const TablesAndSplitDetailPage: React.FC = () => {
  // Card 1: TablePrimitives & TableCore Knobs
  const [stickyHead, setStickyHead] = useState(true)
  const [showFooterSummary, setShowFooterSummary] = useState(true)
  const [coreDensity, setCoreDensity] = useState<AbcTableDensity>('default')
  const [coreLoading, setCoreLoading] = useState(false)

  // Card 2: DataTable Knobs
  const [dtLoading, setDtLoading] = useState(false)
  const [dtSkeletonRows, setDtSkeletonRows] = useState<number>(3)
  const [dtDensity, setDtDensity] = useState<'compact' | 'comfortable' | 'relaxed'>('comfortable')
  const [dtFramed, setDtFramed] = useState(true)
  const [dtStickyHeader, setDtStickyHeader] = useState(false)
  const [dtSimulateEmpty, setDtSimulateEmpty] = useState(false)
  const [dtKeepHeader, setDtKeepHeader] = useState(true)
  const [dtPageMode, setDtPageMode] = useState<'offset' | 'cursor'>('offset')
  const [offsetPage, setOffsetPage] = useState(1)
  const cursor = useCursorStack()

  // Card 3: SplitDetailPanel vs SplitInspectorLayout + InspectorPanel Knobs
  const [splitWidth, setSplitWidth] = useState<number>(420)
  const [splitExpandable, setSplitExpandable] = useState(true)
  const [inspectorRatio, setInspectorRatio] = useState<'default' | 'balanced' | 'wide-master'>('default')
  const [stickyInspector, setStickyInspector] = useState(true)
  const [inspectorLoading, setInspectorLoading] = useState(false)
  const [inspectorEmpty, setInspectorEmpty] = useState(false)
  const [showClear, setShowClear] = useState(true)
  const [inspectedRow, setInspectedRow] = useState<LinkRow | null>(LINK_ROWS[0])

  const totalQps = LINK_ROWS.reduce((acc, r) => acc + r.qps, 0)
  const cursorPageKey = cursor.currentCursor ?? 'ROOT'
  const cursorData = CURSOR_PAGES[cursorPageKey] ?? CURSOR_PAGES.ROOT
  const dtRows = dtSimulateEmpty ? [] : dtPageMode === 'cursor' ? cursorData.rows : LINK_ROWS.slice((offsetPage - 1) * 3, offsetPage * 3)

  return (
    <PageContainer
      title="基础表格原语、DataTable 与主从分栏双范式"
      subtitle="从语义化原子表格 TablePrimitives、轻量骨架 TableCore/DataTable，到无遮罩内联挤压与常驻分栏检视两种主从联动架构。"
      breadcrumbs={[{ label: 'Pro 企业套件与模板' }, { label: '表格原语与主从分栏' }]}
    >
      <div className="space-y-6">
        {/* Card 1: TablePrimitives & TableCore */}
        <ComponentDocPreview
          title="Table 复合表格原语 & TableCore 高性能表核"
          components={['Table', 'TableHeader', 'TableBody', 'TableFooter', 'TableRow', 'TableHead', 'TableCell', 'TableCaption', 'TableCore']}
          description="Table 族原语直接映射语义 HTML table（支持 sticky 吸顶表头、汇总行 TableFooter 与无障碍 TableCaption）；TableCore 则是 ProTable 底层共享表核，原生支持列宽拖拽、右键列菜单与行密度切换。"
          onResetKnobs={() => {
            setStickyHead(true)
            setShowFooterSummary(true)
            setCoreDensity('default')
            setCoreLoading(false)
          }}
          controls={
            <>
              <KnobSwitch label="TableHeader.sticky" checked={stickyHead} onChange={setStickyHead} />
              <KnobSwitch label="showFooterSummary" checked={showFooterSummary} onChange={setShowFooterSummary} />
              <KnobSegmented
                label="TableCore.density"
                value={coreDensity}
                onChange={setCoreDensity}
                options={[
                  { label: 'compact', value: 'compact' },
                  { label: 'default', value: 'default' },
                  { label: 'comfortable', value: 'comfortable' },
                ]}
              />
              <KnobSwitch label="TableCore.loading" checked={coreLoading} onChange={setCoreLoading} />
            </>
          }
          code={`import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption, TableCore } from '@abc-design/react'

<Table wrapperClassName="max-h-48" scrollLabel="专网路由节点表">
  <TableHeader sticky={${stickyHead}}>
    <TableRow><TableHead>链路编号</TableHead><TableHead className="text-right">吞吐 QPS</TableHead></TableRow>
  </TableHeader>
  <TableBody>{rows.map((r) => <TableRow key={r.id}><TableCell>{r.id}</TableCell><TableCell className="text-right">{r.qps}</TableCell></TableRow>)}</TableBody>${
    showFooterSummary ? '\n  <TableFooter><TableRow><TableCell>汇总合计</TableCell><TableCell className="text-right">21,650 QPS</TableCell></TableRow></TableFooter>\n  <TableCaption>共 5 条骨干专网链路实时探测数据</TableCaption>' : ''
  }
</Table>
<TableCore columns={columns} data={rows} rowKey="id" density="${coreDensity}" loading={${coreLoading}} resizable />`}
          apiRows={[
            { prop: 'TableHeader.sticky', type: 'boolean', defaultValue: 'false', description: '外层滚动容器设限高时，表头自动粘性吸顶定位' },
            { prop: 'TableFooter / TableCaption', type: 'HTMLSection / CaptionProps', description: '语义化汇总尾行 <tfoot> 与底部表注 <caption> 原语' },
            { prop: 'TableCore.density', type: "'compact' | 'default' | 'comfortable'", defaultValue: "'default'", description: '表格单元格垂直呼吸间距密度档位' },
            { prop: 'TableCore.resizable / loading', type: 'boolean', defaultValue: 'false', description: '启用表头边缘拖拽调宽及半透明磨砂加载遮罩' },
          ]}
        >
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)]">
              <Table wrapperClassName="max-h-48" scrollLabel="专网路由节点明细表">
                {showFooterSummary && <TableCaption className="pb-2">共 {LINK_ROWS.length} 条骨干专网链路实时遥测</TableCaption>}
                <TableHeader sticky={stickyHead}>
                  <TableRow>
                    <TableHead>链路编号</TableHead>
                    <TableHead>接入机房</TableHead>
                    <TableHead>承载协议</TableHead>
                    <TableHead className="text-right">双向抖动</TableHead>
                    <TableHead className="text-right">实时吞吐</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {LINK_ROWS.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-mono text-xs font-semibold">{row.id}</TableCell>
                      <TableCell className="text-xs">{row.dc}</TableCell>
                      <TableCell className="font-mono text-xs">{row.proto}</TableCell>
                      <TableCell className="text-right font-mono text-xs">{row.jitterMs}ms</TableCell>
                      <TableCell className="text-right font-mono text-xs">{row.qps.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                {showFooterSummary && (
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={4} className="text-xs font-semibold">全网汇总合计吞吐</TableCell>
                      <TableCell className="text-right font-mono text-xs font-bold">{totalQps.toLocaleString()} QPS</TableCell>
                    </TableRow>
                  </TableFooter>
                )}
              </Table>
            </div>
            <TableCore<LinkRow> columns={CORE_COLUMNS} data={LINK_ROWS.slice(0, 3)} rowKey="id" density={coreDensity} loading={coreLoading} resizable />
          </div>
        </ComponentDocPreview>

        {/* Card 2: DataTable */}
        <ComponentDocPreview
          title="DataTable 轻量骨架表格与双模分页集成"
          components={['DataTable', 'SmartPagination']}
          description="介于 TablePrimitives 与重型 ProTable 之间的轻量化数据表格：内置骨架行加载态、空态保留表头开关、行密度与开箱即用的 offset / cursor 双模分页。"
          onResetKnobs={() => {
            setDtLoading(false)
            setDtSkeletonRows(3)
            setDtDensity('comfortable')
            setDtFramed(true)
            setDtStickyHeader(false)
            setDtSimulateEmpty(false)
            setDtKeepHeader(true)
            setDtPageMode('offset')
            setOffsetPage(1)
            cursor.resetCursor()
          }}
          controls={
            <>
              <KnobSwitch label="loading" checked={dtLoading} onChange={setDtLoading} />
              <KnobSegmented label="skeletonRows" value={dtSkeletonRows} onChange={setDtSkeletonRows} options={[{ label: '3 行', value: 3 }, { label: '5 行', value: 5 }]} />
              <KnobSegmented label="density" value={dtDensity} onChange={setDtDensity} options={[{ label: 'compact', value: 'compact' }, { label: 'comfortable', value: 'comfortable' }, { label: 'relaxed', value: 'relaxed' }]} />
              <KnobSwitch label="framed" checked={dtFramed} onChange={setDtFramed} />
              <KnobSwitch label="stickyHeader" checked={dtStickyHeader} onChange={setDtStickyHeader} />
              <KnobSwitch label="模拟空数据" checked={dtSimulateEmpty} onChange={setDtSimulateEmpty} />
              <KnobSwitch label="keepHeaderWhenEmpty" checked={dtKeepHeader} onChange={setDtKeepHeader} />
              <KnobSegmented label="pagination" value={dtPageMode} onChange={setDtPageMode} options={[{ label: 'offset', value: 'offset' }, { label: 'cursor', value: 'cursor' }]} />
            </>
          }
          code={`import { DataTable } from '@abc-design/react'

<DataTable
  loading={${dtLoading}}
  skeletonRows={${dtSkeletonRows}}
  density="${dtDensity}"
  framed={${dtFramed}}
  stickyHeader={${dtStickyHeader}}
  keepHeaderWhenEmpty={${dtKeepHeader}}
  columns={columns}
  data={${dtSimulateEmpty ? '[]' : 'rows'}}
  keyExtractor={(r) => r.id}
  pagination={${dtPageMode === 'cursor' ? "{ mode: 'cursor', hasPrev: cursor.hasPrev, hasNext: Boolean(nextCursor), onPrev: cursor.popCursor, onNext: () => pushCursor(nextCursor) }" : '{ mode: "offset", current: page, pageSize: 3, total: 5, onChange: setPage }'}}
/>`}
          apiRows={[
            { prop: 'loading / skeletonRows', type: 'boolean / number', defaultValue: 'false / 5', description: '开启后渲染与列宽对齐的结构化骨架占位行' },
            { prop: 'density', type: "'compact' | 'comfortable' | 'relaxed' | AbcSize", defaultValue: "'comfortable'", description: '表头与数据单元格内边距密度' },
            { prop: 'framed / stickyHeader', type: 'boolean', defaultValue: 'true / false', description: '是否渲染外部圆角卡片边框及开启粘滞表头' },
            { prop: 'keepHeaderWhenEmpty', type: 'boolean', defaultValue: 'false', description: '空数据时是否在表体内展示 EmptyState 并保留表头列标题' },
            { prop: 'pagination', type: 'PaginationProps', description: '支持 offset 页码分页与 cursor 单向游标流水双模切换' },
          ]}
        >
          <DataTable<LinkRow>
            loading={dtLoading}
            skeletonRows={dtSkeletonRows}
            density={dtDensity}
            framed={dtFramed}
            stickyHeader={dtStickyHeader}
            keepHeaderWhenEmpty={dtKeepHeader}
            columns={[
              { key: 'id', header: '链路 ID', mono: true },
              { key: 'dc', header: '机房节点' },
              { key: 'proto', header: '协议', mono: true },
              { key: 'qps', header: 'QPS', align: 'right', render: (r) => r.qps.toLocaleString() },
              { key: 'status', header: '状态', render: (r) => <StatusTag tone={r.status === 'normal' ? 'success' : 'warning'} size="xs">{r.status}</StatusTag> },
            ]}
            data={dtRows}
            keyExtractor={(r) => r.id}
            emptyAction={
              <Button size="xs" variant="secondary" onClick={() => setDtSimulateEmpty(false)}>
                恢复示例数据
              </Button>
            }
            pagination={
              dtPageMode === 'cursor'
                ? {
                    mode: 'cursor',
                    hasPrev: cursor.hasPrev,
                    hasNext: Boolean(cursorData.next),
                    onPrev: cursor.popCursor,
                    onNext: () => cursorData.next && cursor.pushCursor(cursorData.next),
                    onResetCursor: cursor.resetCursor,
                  }
                : { mode: 'offset', current: offsetPage, pageSize: 3, total: LINK_ROWS.length, onChange: (p) => setOffsetPage(p) }
            }
          />
        </ComponentDocPreview>

        {/* Card 3: SplitDetailPanel vs SplitInspectorLayout + InspectorPanel */}
        <ComponentDocPreview
          title="主从联动双范式对比：SplitDetailPanel (按需挤压) vs SplitInspectorLayout + InspectorPanel (常驻检视)"
          components={['SplitDetailLayout', 'SplitDetailPanel', 'SplitInspectorLayout', 'InspectorPanel']}
          description="范式 A（上半部分）：点击表格行才在右侧滑出非阻塞详情面板，关闭即归还 100% 表格宽度；范式 B（下半部分）：右侧常驻检视面板，支持三档比例预设与加载/空态切换。"
          onResetKnobs={() => {
            setSplitWidth(420)
            setSplitExpandable(true)
            setInspectorRatio('default')
            setStickyInspector(true)
            setInspectorLoading(false)
            setInspectorEmpty(false)
            setShowClear(true)
            setInspectedRow(LINK_ROWS[0])
          }}
          controls={
            <>
              <KnobSegmented label="splitPanelWidth" value={splitWidth} onChange={setSplitWidth} options={[{ label: '360px', value: 360 }, { label: '420px', value: 420 }, { label: '480px', value: 480 }]} />
              <KnobSwitch label="expandable" checked={splitExpandable} onChange={setSplitExpandable} />
              <KnobSegmented label="ratio" value={inspectorRatio} onChange={setInspectorRatio} options={[{ label: 'default', value: 'default' }, { label: 'balanced', value: 'balanced' }, { label: 'wide-master', value: 'wide-master' }]} />
              <KnobSwitch label="stickyInspector" checked={stickyInspector} onChange={setStickyInspector} />
              <KnobSwitch label="Inspector.loading" checked={inspectorLoading} onChange={setInspectorLoading} />
              <KnobSwitch label="Inspector.isEmpty" checked={inspectorEmpty} onChange={setInspectorEmpty} />
              <KnobSwitch label="showClear" checked={showClear} onChange={setShowClear} />
            </>
          }
          code={`// 范式 A: ProTable + SplitDetailPanel 内联挤压
<ProTable splitPanelOpen={Boolean(row)} splitPanelWidth={${splitWidth}} splitPanel={<SplitDetailPanel expandable={${splitExpandable}} onClose={close} />} />

// 范式 B: SplitInspectorLayout + InspectorPanel 常驻分栏
<SplitInspectorLayout
  ratio="${inspectorRatio}"
  stickyInspector={${stickyInspector}}
  inspector={
    <InspectorPanel title="节点属性检视" loading={${inspectorLoading}} isEmpty={${inspectorEmpty}} showClear={${showClear}} onClear={clear}>
      <DescriptionList columns={1} items={items} />
    </InspectorPanel>
  }
>
  <DataTable onRowClick={setRow} ... />
</SplitInspectorLayout>`}
          apiRows={[
            { prop: 'SplitDetailLayout.panelWidth', type: 'number | string', defaultValue: '480', description: '右侧内联挤压详情容器默认宽度（支持左边缘拖拽调宽）' },
            { prop: 'SplitDetailPanel.expandable', type: 'boolean', defaultValue: 'false', description: '是否允许在分栏与全宽沉浸模式之间一键切换' },
            { prop: 'SplitInspectorLayout.ratio', type: "'default' | 'balanced' | 'wide-master'", defaultValue: "'default'", description: '主区域与右侧常驻检视区的网格比例预设' },
            { prop: 'SplitInspectorLayout.stickyInspector', type: 'boolean', defaultValue: 'true', description: '大屏下右侧检视面板是否随主列表滚动粘性吸顶' },
            { prop: 'InspectorPanel.loading / isEmpty / showClear', type: 'boolean', defaultValue: 'false', description: '检视器内置加载态、空选中态与右上角清除选择按钮' },
          ]}
        >
          <div className="space-y-6">
            <SplitDetailShowcase panelWidth={splitWidth} expandable={splitExpandable} />

            <div className="border-t border-[var(--abc-border)] pt-5">
              <div className="mb-3 text-xs font-semibold text-[var(--abc-fg-secondary)]">
                范式 B：SplitInspectorLayout + InspectorPanel 常驻双栏检视（点击左侧任意行切换右侧面板内容）
              </div>
              <SplitInspectorLayout
                ratio={inspectorRatio}
                stickyInspector={stickyInspector}
                inspector={
                  <InspectorPanel
                    title="链路节点实时检视"
                    subtitle={inspectedRow ? `节点: ${inspectedRow.id}` : '未选中节点'}
                    badge={inspectedRow ? <StatusTag tone={inspectedRow.status === 'normal' ? 'success' : 'warning'} size="xs">{inspectedRow.status}</StatusTag> : undefined}
                    loading={inspectorLoading}
                    isEmpty={inspectorEmpty || !inspectedRow}
                    showClear={showClear}
                    onClear={() => {
                      setInspectedRow(null)
                      abcToast.info('已清空当前检视选中项')
                    }}
                  >
                    {inspectedRow && (
                      <DescriptionList
                        columns={1}
                        variant="cards"
                        items={[
                          { label: '物理机房', value: inspectedRow.dc },
                          { label: '承载协议', value: inspectedRow.proto },
                          { label: '双向抖动', value: `${inspectedRow.jitterMs} ms` },
                          { label: '实时吞吐', value: `${inspectedRow.qps.toLocaleString()} QPS` },
                        ]}
                      />
                    )}
                  </InspectorPanel>
                }
              >
                <DataTable<LinkRow>
                  columns={[
                    { key: 'id', header: '链路 ID', mono: true },
                    { key: 'dc', header: '物理机房' },
                    { key: 'qps', header: 'QPS', align: 'right', render: (r) => r.qps.toLocaleString() },
                  ]}
                  data={LINK_ROWS}
                  keyExtractor={(r) => r.id}
                  selectedRowKey={inspectedRow?.id ?? null}
                  onRowClick={(r) => {
                    setInspectedRow(r)
                    setInspectorEmpty(false)
                  }}
                />
              </SplitInspectorLayout>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
export default TablesAndSplitDetailPage
