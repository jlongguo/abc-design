import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Select } from '../components/form/select/Select'
import { TreeSelect } from '../components/form/tree-select/TreeSelect'
import { SplitDetailLayout, SplitDetailPanel } from '../components/layout/SplitDetailPanel'
import { TableHeadSection } from '../components/table/table-core/TableHeadSection'
import type { AbcColumn } from '../components/table/TableCore'
import { TopHorizontalNav } from '../layout/nav-renderers/TopHorizontalNav'
import { ProTable } from '../pro/ProTable'

interface DemoRow {
  id: string
  name: string
  role: string
}

const DEMO_ROWS: DemoRow[] = [
  { id: '1', name: 'Alice', role: 'Owner' },
  { id: '2', name: 'Bob', role: 'Operator' },
]

describe('SplitDetailLayout / SplitDetailPanel 与视觉指示器回归测试', () => {
  it('1. ProTable 支持点击行在右侧挤出可关闭详情容器，直接点击其他行即时切换且关闭恢复满宽', () => {
    function Demo() {
      const [selectedId, setSelectedId] = useState<string | null>(null)
      const [expanded, setExpanded] = useState(false)
      const idx = DEMO_ROWS.findIndex((r) => r.id === selectedId)
      const current = idx >= 0 ? DEMO_ROWS[idx] : null
      const columns: AbcColumn<DemoRow>[] = [
        { key: 'name', title: '成员', dataIndex: 'name' },
        { key: 'role', title: '角色', dataIndex: 'role' },
      ]

      return (
        <ProTable<DemoRow>
          columns={columns}
          dataSource={DEMO_ROWS}
          rowKey="id"
          hidePagination
          columnSettingsEnabled={false}
          selectedRowKey={selectedId}
          onRowClick={(row) => setSelectedId(row.id)}
          splitPanelOpen={Boolean(current)}
          splitPanelExpanded={expanded}
          splitPanel={
            current ? (
              <SplitDetailPanel
                title="成员详情"
                navigation={{
                  current: idx + 1,
                  total: DEMO_ROWS.length,
                  onPrev: () => setSelectedId(DEMO_ROWS[(idx - 1 + DEMO_ROWS.length) % DEMO_ROWS.length].id),
                  onNext: () => setSelectedId(DEMO_ROWS[(idx + 1) % DEMO_ROWS.length].id),
                }}
                expandable
                expanded={expanded}
                onExpandedChange={setExpanded}
                onClose={() => {
                  setExpanded(false)
                  setSelectedId(null)
                }}
              >
                <div data-testid="detail-content">
                  <h4>{current.name}</h4>
                  <span>{current.role}</span>
                </div>
              </SplitDetailPanel>
            ) : null
          }
        />
      )
    }

    const { container } = render(<Demo />)

    // 初始关闭：无遮罩、无详情面板，仅展示主容器
    expect(container.querySelector('[data-slot="split-detail-panel"]')).toBeNull()
    expect(container.querySelector('[data-slot="split-detail-master"]')).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).toBeNull()

    // 单击第一行 Alice：右侧挤出详情面板
    fireEvent.click(screen.getByText('Alice'))
    expect(container.querySelector('[data-slot="split-detail-panel"]')).toBeInTheDocument()
    expect(screen.getByTestId('detail-content')).toHaveTextContent('Alice')
    expect(screen.getByText('1 / 2')).toBeInTheDocument()

    // 不关闭面板，直接单击第二行 Bob：右侧即时切换，无遮罩阻挡
    fireEvent.click(screen.getByText('Bob'))
    expect(screen.getByTestId('detail-content')).toHaveTextContent('Bob')
    expect(screen.getByText('2 / 2')).toBeInTheDocument()

    // 点击上一条：切回 Alice
    fireEvent.click(screen.getByRole('button', { name: '上一条' }))
    expect(screen.getByTestId('detail-content')).toHaveTextContent('Alice')

    // 点击沉浸展开：隐藏左侧主表格，详情占满全宽
    fireEvent.click(screen.getByRole('button', { name: '沉浸展开' }))
    expect(container.querySelector('[data-slot="split-detail-master"]')).toBeNull()
    expect(screen.getByRole('button', { name: '还原分栏' })).toBeInTheDocument()

    // 点击还原分栏：左侧主表格重新出现
    fireEvent.click(screen.getByRole('button', { name: '还原分栏' }))
    expect(container.querySelector('[data-slot="split-detail-master"]')).toBeInTheDocument()

    // 点击关闭详情面板按钮：收起右侧容器并恢复满宽表格
    fireEvent.click(screen.getByRole('button', { name: '关闭详情面板' }))
    expect(container.querySelector('[data-slot="split-detail-panel"]')).toBeNull()
  })

  it('2. SplitDetailLayout 支持独立调用并在 open=false 时不渲染 aside 分栏', () => {
    const { container, rerender } = render(
      <SplitDetailLayout open={false} panel={<SplitDetailPanel title="详情">内容</SplitDetailPanel>}>
        <div>主列表</div>
      </SplitDetailLayout>
    )
    expect(container.querySelector('[data-slot="split-detail-aside"]')).toBeNull()

    rerender(
      <SplitDetailLayout open={true} panel={<SplitDetailPanel title="详情" onClose={vi.fn()}>内容</SplitDetailPanel>}>
        <div>主列表</div>
      </SplitDetailLayout>
    )
    expect(container.querySelector('[data-slot="split-detail-aside"]')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '关闭详情面板' })).toBeInTheDocument()
  })

  it('3. Select 触发器不附加过宽右内边距与 active scale，且展开态指示箭头携带 abc-chevron 与 data-open="true"', () => {
    const { container } = render(
      <>
        <Select
          aria-label="Template"
          defaultValue="compat"
          options={[
            { value: 'compat', label: '组织全局配额模板（兼容模式）' },
            { value: 'prod', label: 'product_1 · 云浏览器底座算力' },
          ]}
        />
        <TreeSelect
          aria-label="Dept"
          treeData={[{ key: 'root', value: 'root', title: '平台部门' }]}
        />
      </>
    )
    const trigger = container.querySelector('[data-slot="select-trigger"]') as HTMLElement
    expect(trigger.className).not.toContain('pr-7')
    expect(trigger.className).not.toContain('pr-8')
    expect(trigger.className).toContain('pr-2.5')
    expect(trigger.className).not.toContain('abc-motion-control')
    expect(trigger.className).not.toContain('active:scale')

    const treeTrigger = container.querySelector('[data-slot="tree-select-trigger"]') as HTMLElement
    expect(treeTrigger.className).not.toContain('abc-motion-control')
    expect(treeTrigger.className).not.toContain('active:scale')

    const chevron = trigger.querySelector('svg.abc-chevron') as SVGElement
    expect(chevron).toBeInTheDocument()
    expect(chevron).toHaveAttribute('data-open', 'false')

    fireEvent.click(trigger)
    expect(chevron).toHaveAttribute('data-open', 'true')
  })

  it('4. TopHorizontalNav 下拉菜单展开态的指示箭头携带 abc-chevron 与 data-open="true"', () => {
    render(
      <TopHorizontalNav
        pathname="/governance/announcements"
        onNavigate={() => {}}
        items={[
          {
            key: 'gov',
            label: '治理与审计',
            children: [{ key: 'ann', label: '内部公告', path: '/governance/announcements' }],
          },
        ]}
      />
    )
    const btn = screen.getByRole('button', { name: /治理与审计/ })
    const chevron = btn.querySelector('svg.abc-chevron') as SVGElement
    expect(chevron).toBeInTheDocument()
    expect(chevron).toHaveAttribute('data-open', 'false')

    fireEvent.click(btn)
    expect(chevron).toHaveAttribute('data-open', 'true')
  })

  it('5. TableHeadSection 列分隔线使用 inset-y-0 my-auto 居中，不依赖易冲突的 -translate-y-1/2', () => {
    const { container } = render(
      <table>
        <TableHeadSection
          state={{
            selectable: false,
            stickyMeta: { hasAnyLeftFixed: false, leftOffsets: {}, rightOffsets: {}, lastLeftKey: null, firstRightKey: null },
            scrollEdge: { left: false, right: false },
            allSelected: false,
            someSelected: false,
            toggleAll: vi.fn(),
            hasExpandColumn: false,
            orderedColumns: [
              { key: 'lifecycle', title: '生命周期' },
              { key: 'effective', title: '生效时间' },
            ],
            colWidthMeta: { resolvedWidths: {} },
            getEffectiveFixed: () => undefined,
            isColSortable: () => false,
            sortState: null,
            draggingKey: null,
            activeFilterKeys: [],
            activeFilterLabels: {},
            headerFilterRender: undefined,
            headerFilterMode: false,
            filterHighlightColor: '',
            onColumnReorder: undefined,
            liveDragOrder: null,
            wrapperRef: { current: null },
            prevColRectsRef: { current: new Map() },
            hasLiveSwappedRef: { current: false },
            setLiveDragOrder: vi.fn(),
            handleHeaderContextMenu: vi.fn(),
            preDragOrderRef: { current: null },
            setDraggingKey: vi.fn(),
            density: 'default',
            handleSortClick: vi.fn(),
            isResizable: false,
            startResizeColumn: vi.fn(),
            hasInlineHeaderFilterRow: false,
            headerFilters: {},
            onHeaderFilterChange: undefined,
          } as any}
        />
      </table>
    )
    const divider = container.querySelector('th span.inset-y-0.my-auto') as HTMLElement
    expect(divider).toBeInTheDocument()
    expect(divider.className).not.toContain('-translate-y-1/2')
  })
})
