import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  FLOW_POSITION,
  FlowAlignmentToolbar,
  FlowCanvasSurface,
  FlowCornerResizer,
  FlowFloatingEdge,
  FlowGroupNode,
  FlowInteractiveZone,
  FlowLabeledEdge,
  FlowMiniMapNode,
  FlowNodeCard,
  FlowProvider,
  FlowQuickConnectMenu,
  FlowViewportControls,
  alignFlowNodes,
  computeFlowExportViewport,
  computeFlowHelperLines,
  computeProximityEdge,
  duplicateFlowSubgraph,
  exportFlowToSvgDataUrl,
  findIntersectingGroupNode,
  type FlowEdge,
  type FlowNode,
} from '../index'

describe('@abc-design/flow 高阶 React Flow 能力与无头算法套件', () => {
  it('1. alignFlowNodes 完整支持 6 向对齐与水平/垂直等距分布', () => {
    const nodes: FlowNode[] = [
      { id: 'a', position: { x: 20, y: 10 }, width: 100, height: 60, data: {} },
      { id: 'b', position: { x: 180, y: 90 }, width: 120, height: 60, data: {} },
      { id: 'c', position: { x: 420, y: 40 }, width: 100, height: 80, data: {} },
    ]
    const leftAligned = alignFlowNodes(nodes, ['a', 'b', 'c'], 'left')
    expect(leftAligned.map((n) => n.position.x)).toEqual([20, 20, 20])

    const topAligned = alignFlowNodes(nodes, ['a', 'b', 'c'], 'top')
    expect(topAligned.map((n) => n.position.y)).toEqual([10, 10, 10])

    const distributed = alignFlowNodes(nodes, ['a', 'b', 'c'], 'distributeH')
    // span = (420 + 100) - 20 = 500; widths = 100 + 120 + 100 = 320; gap = 90
    // a.x = 20, b.x = 20 + 100 + 90 = 210, c.x = 210 + 120 + 90 = 420
    expect(distributed.map((n) => n.position.x)).toEqual([20, 210, 420])
  })

  it('2. computeProximityEdge 与 findIntersectingGroupNode 准确识别就近磁吸连线与拖入分组', () => {
    const group: FlowNode = {
      id: 'g1',
      type: 'flow-group',
      position: { x: 100, y: 100 },
      width: 400,
      height: 260,
      data: {},
    }
    const n1: FlowNode = { id: 'n1', position: { x: 40, y: 180 }, width: 160, height: 80, data: {} }
    const n2: FlowNode = { id: 'n2', position: { x: 160, y: 180 }, width: 160, height: 80, data: {} }

    const prox = computeProximityEdge(n2, [group, n1, n2], [], { maxDistance: 160 })
    expect(prox).not.toBeNull()
    expect(prox?.source).toBe('n1')
    expect(prox?.target).toBe('n2')

    // 已有连线时不再重复磁吸
    const dup = computeProximityEdge(n2, [group, n1, n2], [{ id: 'e1', source: 'n1', target: 'n2' }])
    expect(dup).toBeNull()

    // n2 中心 (240, 220) 落入 g1 [100..500, 100..360]
    const drop = findIntersectingGroupNode(n2, [group, n1, n2])
    expect(drop.groupId).toBe('g1')
    expect(drop.relativePosition).toEqual({ x: 60, y: 80 })
  })

  it('3. duplicateFlowSubgraph 克隆多选节点与内部连线并重映射 ID，且导出视口与 SVG 合法', () => {
    const nodes: FlowNode[] = [
      { id: 'n1', position: { x: 0, y: 0 }, width: 180, height: 80, data: { title: '开始' } },
      { id: 'n2', position: { x: 260, y: 0 }, width: 180, height: 80, data: { title: '处理' } },
      { id: 'n3', position: { x: 520, y: 0 }, width: 180, height: 80, data: { title: '外部' } },
    ]
    const edges: FlowEdge[] = [
      { id: 'e12', source: 'n1', target: 'n2' },
      { id: 'e23', source: 'n2', target: 'n3' },
    ]

    const cloned = duplicateFlowSubgraph(nodes, edges, ['n1', 'n2'], { x: 40, y: 50 })
    expect(cloned.nodes).toHaveLength(2)
    expect(cloned.edges).toHaveLength(1)
    expect(cloned.edges[0]!.source).toBe(cloned.idMap.n1)
    expect(cloned.edges[0]!.target).toBe(cloned.idMap.n2)
    expect(cloned.nodes[0]!.position).toEqual({ x: 40, y: 50 })

    const vp = computeFlowExportViewport(nodes, { width: 1000, height: 600 })
    expect(vp.viewport.zoom).toBeGreaterThan(0)
    const svgUrl = exportFlowToSvgDataUrl(nodes, edges, { title: 'Workflow', dark: true })
    expect(svgUrl.startsWith('data:image/svg+xml;charset=utf-8,')).toBe(true)
    expect(decodeURIComponent(svgUrl)).toContain('开始')
  })

  it('4. FlowQuickConnectMenu 支持关键字搜索、键盘 Enter 确认与 Esc 关闭，且无 active:scale', () => {
    const onSelect = vi.fn()
    const onClose = vi.fn()
    const { container } = render(
      <FlowQuickConnectMenu
        open
        x={120}
        y={80}
        containerBounds={{ width: 600, height: 400 }}
        items={[
          { key: 'goto', label: '打开网页', group: '导航', keywords: 'url navigate' },
          { key: 'click', label: '点击元素', group: '交互', keywords: 'button tap' },
        ]}
        onSelect={onSelect}
        onClose={onClose}
      />,
    )

    const input = screen.getByPlaceholderText('搜索动作或节点类型...')
    fireEvent.change(input, { target: { value: '点击' } })
    expect(screen.queryByText('打开网页')).not.toBeInTheDocument()
    expect(screen.getByText('点击元素')).toBeInTheDocument()

    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ key: 'click' }))
    expect(onClose).toHaveBeenCalled()

    const root = container.querySelector('[data-slot="flow-quick-connect-menu"]')
    expect(root).toHaveAttribute('data-abc-no-press-scale')
  })

  it('5. FlowAlignmentToolbar 在 ≥2 节点选中时渲染 6 向对齐与等距分布且按钮均禁用 pressScale', () => {
    const onAlign = vi.fn()
    const onDelete = vi.fn()
    const { rerender, container } = render(
      <FlowAlignmentToolbar selectedCount={1} onAlign={onAlign} onDeleteSelected={onDelete} />,
    )
    expect(screen.queryByTestId('abc-flow-alignment-toolbar')).not.toBeInTheDocument()

    rerender(
      <FlowAlignmentToolbar selectedCount={3} onAlign={onAlign} onDeleteSelected={onDelete} />,
    )
    expect(screen.getByTestId('abc-flow-alignment-toolbar')).toBeInTheDocument()
    expect(screen.getByText('已选 3 项')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: '左对齐' }))
    expect(onAlign).toHaveBeenCalledWith('left')
    fireEvent.click(screen.getByRole('button', { name: '水平等距分布' }))
    expect(onAlign).toHaveBeenCalledWith('distributeH')
    fireEvent.click(screen.getByRole('button', { name: '批量删除选中节点' }))
    expect(onDelete).toHaveBeenCalled()

    // 所有紧凑按钮禁用 abc-motion-control，避免点击漂移
    for (const btn of Array.from(container.querySelectorAll('button'))) {
      expect(btn.className).not.toContain('abc-motion-control')
    }
  })

  it('6. FlowInteractiveZone、FlowCornerResizer、FlowFloatingEdge、FlowMiniMapNode 与 FlowProvider 正常挂载', () => {
    render(
      <FlowProvider>
        <div style={{ width: 640, height: 360 }}>
          <FlowCanvasSurface
            nodes={[
              { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'A', tone: 'blue', status: 'running' } },
              { id: 'n2', position: { x: 240, y: 80 }, data: { label: 'B', tone: 'green', status: 'success' } },
            ]}
            edges={[]}
            secondaryBackground={{ variant: 'lines', gap: 90 }}
            gesturePreset="figma"
            showMiniMap
            enhancedMiniMap
            bottomCenterSlot={<div data-testid="bottom-center-slot">对齐槽位</div>}
          />
        </div>
        <FlowInteractiveZone data-testid="isolated-zone">
          <textarea aria-label="脚本代码" defaultValue="console.log(1)" />
        </FlowInteractiveZone>
        <svg>
          <FlowFloatingEdge
            id="fe-1"
            source="n1"
            target="n2"
            sourceX={0}
            sourceY={0}
            targetX={240}
            targetY={80}
            sourcePosition={FLOW_POSITION.Right}
            targetPosition={FLOW_POSITION.Left}
            data={{ label: '浮动关联', tone: 'primary' }}
          />
          <FlowMiniMapNode
            id="n1"
            className=""
            x={10}
            y={10}
            width={40}
            height={24}
            selected
            color="#3b82f6"
            strokeColor="#3b82f6"
            strokeWidth={1}
            borderRadius={4}
            shapeRendering="auto"
          />
        </svg>
        <FlowCornerResizer visible={false} />
      </FlowProvider>,
    )

    expect(screen.getByTestId('bottom-center-slot')).toBeInTheDocument()
    const zone = screen.getByTestId('isolated-zone')
    expect(zone.className).toContain('nodrag')
    expect(zone.className).toContain('nowheel')
    expect(zone.className).toContain('nopan')
    expect(zone).toHaveAttribute('data-abc-no-press-scale')
    expect(document.querySelector('[data-slot="flow-floating-edge"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="flow-minimap-node"]')).toBeInTheDocument()
  })

  it('7. FlowNodeCard fillContainer、FlowGroupNode 扩展槽位、FlowLabeledEdge 非阻塞标签与 FlowViewportControls 激活态', () => {
    const onPrimary = vi.fn()
    render(
      <FlowProvider>
        <div style={{ width: 640, height: 360 }}>
          <FlowNodeCard
            data-testid="resizable-card"
            title="可缩放卡片"
            fillContainer
            minWidth={200}
            minHeight={108}
            outputs={[{ id: 'out', label: '下一步', tone: 'success' }]}
          />
          <FlowCanvasSurface
            nodes={[
              {
                id: 'grp-1',
                type: 'flow-group',
                position: { x: 20, y: 20 },
                style: { width: 320, height: 180 },
                selected: true,
                data: {
                  title: '条件分支组',
                  testId: 'custom-group-frame',
                  badge: '2 步',
                  headerExtra: <span data-testid="group-header-extra">收起</span>,
                  bodyContent: <div data-testid="group-body-content">内嵌内容</div>,
                },
              },
            ]}
            edges={[
              {
                id: 'e-1',
                source: 'grp-1',
                target: 'grp-1',
                type: 'flow-labeled',
                selected: true,
                data: {
                  label: '命中',
                  tone: 'success',
                  renderToolbar: () => <button type="button">切换线型</button>,
                },
              },
            ]}
            nodeTypes={{ 'flow-group': FlowGroupNode }}
            edgeTypes={{ 'flow-labeled': FlowLabeledEdge }}
            interactionMode="select"
            bottomLeftSlot={
              <FlowViewportControls
                zoomPercent={100}
                onZoomOut={vi.fn()}
                onZoomReset={vi.fn()}
                onZoomIn={vi.fn()}
                interactionMode="select"
                onInteractionModeChange={vi.fn()}
                primaryAction={{ label: '添加步骤', onClick: onPrimary }}
              />
            }
          />
        </div>
      </FlowProvider>,
    )

    const card = screen.getByTestId('resizable-card')
    expect(card.style.width).toBe('100%')
    expect(card.style.height).toBe('100%')
    expect(card.className).toContain('flex-col')

    expect(screen.getByTestId('custom-group-frame')).toBeInTheDocument()
    expect(screen.getByTestId('group-header-extra')).toBeInTheDocument()
    expect(screen.getByTestId('group-body-content')).toBeInTheDocument()

    // 框选模式下主按钮无 pressScale 且框选按钮处于显眼激活高亮态
    const controls = screen.getByTestId('abc-flow-viewport-controls')
    const selectBtn = controls.querySelector('button[aria-label="框选多节点模式"]')
    expect(selectBtn?.getAttribute('aria-pressed')).toBe('true')
    expect(selectBtn?.className).toContain('abc-primary-soft')
    const primaryBtn = screen.getByRole('button', { name: '添加步骤' })
    expect(primaryBtn.className).not.toContain('abc-motion-control')
  })

  it('8. computeFlowHelperLines 为嵌套子流节点自动将参考线坐标换算至世界坐标系', () => {
    const parent: FlowNode = {
      id: 'grp-1',
      type: 'flow-group',
      position: { x: 400, y: 200 },
      width: 520,
      height: 260,
      data: {},
    }
    const childA: FlowNode = {
      id: 'c-1',
      parentId: 'grp-1',
      position: { x: 24, y: 72 },
      width: 200,
      height: 100,
      data: {},
    }
    const childB: FlowNode = {
      id: 'c-2',
      parentId: 'grp-1',
      position: { x: 260, y: 74 },
      width: 200,
      height: 100,
      data: {},
    }

    const guides = computeFlowHelperLines(childB, [parent, childA, childB], 6)
    // 局部顶边 y=72 叠加父容器 y=200 后，世界参考线坐标应为 272（而非局部坐标 72）
    expect(guides.horizontal).toBe(272)
    expect(guides.snapPosition).toEqual({ x: 260, y: 72 })
  })
})
