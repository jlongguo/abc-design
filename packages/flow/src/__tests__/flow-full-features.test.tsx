import { act, fireEvent, render, renderHook, screen } from '@testing-library/react'
import { ConnectionLineType, Position, ReactFlowProvider, type Edge, type Node } from '@xyflow/react'
import { describe, expect, it, vi } from 'vitest'
import {
  FlowCanvasSurface,
  FlowConnectionLine,
  FlowContextMenu,
  FlowGroupNode,
  FlowHandle,
  FlowLabeledEdge,
  FlowNodeResizer,
  FlowViewportControls,
  FlowViewportOverlay,
  computeFlowHelperLines,
  getFlowDownstream,
  getFlowUpstream,
  hasFlowCycle,
  layoutFlowGraph,
  parseFlowSnapshot,
  serializeFlowSnapshot,
  useFlowHistory,
} from '../index'

describe('@abc-design/flow 全量 React Flow 能力集成测试', () => {
  it('1. layoutFlowGraph 支持 LR / TB / RL / BT 四向拓扑自动排版且保留子流程父子相对坐标', () => {
    const nodes: Node[] = [
      { id: 'a', position: { x: 0, y: 0 }, data: {} },
      { id: 'grp', type: 'flow-group', position: { x: 0, y: 0 }, style: { width: 300, height: 180 }, data: {} },
      { id: 'child', parentId: 'grp', position: { x: 20, y: 60 }, data: {} },
      { id: 'c', position: { x: 0, y: 0 }, data: {} },
    ]
    const edges: Edge[] = [
      { id: 'e1', source: 'a', target: 'child' },
      { id: 'e2', source: 'child', target: 'c' },
    ]

    const lr = layoutFlowGraph(nodes, edges, { direction: 'LR' })
    const lrA = lr.find((n) => n.id === 'a')!
    const lrGrp = lr.find((n) => n.id === 'grp')!
    const lrChild = lr.find((n) => n.id === 'child')!
    const lrC = lr.find((n) => n.id === 'c')!
    expect(lrA.position.x).toBeLessThan(lrGrp.position.x)
    expect(lrGrp.position.x).toBeLessThan(lrC.position.x)
    // 子节点保持父容器内相对坐标不被覆盖
    expect(lrChild.position).toEqual({ x: 20, y: 60 })

    const tb = layoutFlowGraph(nodes, edges, { direction: 'TB' })
    expect(tb.find((n) => n.id === 'a')!.position.y).toBeLessThan(
      tb.find((n) => n.id === 'c')!.position.y
    )

    const rl = layoutFlowGraph(nodes, edges, { direction: 'RL' })
    expect(rl.find((n) => n.id === 'a')!.position.x).toBeGreaterThan(
      rl.find((n) => n.id === 'c')!.position.x
    )
  })

  it('2. getFlowUpstream / getFlowDownstream / hasFlowCycle / computeFlowHelperLines / 快照序列化精确工作', () => {
    const nodes: Node[] = [
      { id: 'n1', position: { x: 0, y: 100 }, width: 200, height: 100, data: {} },
      { id: 'n2', position: { x: 300, y: 103 }, width: 200, height: 100, data: {} },
      { id: 'n3', position: { x: 600, y: 100 }, width: 200, height: 100, data: {} },
    ]
    const edges: Edge[] = [
      { id: 'e1', source: 'n1', target: 'n2' },
      { id: 'e2', source: 'n2', target: 'n3' },
    ]

    const up = getFlowUpstream('n3', nodes, edges)
    expect(Array.from(up.nodeIds).sort()).toEqual(['n1', 'n2', 'n3'])
    expect(Array.from(up.edgeIds).sort()).toEqual(['e1', 'e2'])

    const down = getFlowDownstream('n1', nodes, edges)
    expect(Array.from(down.nodeIds).sort()).toEqual(['n1', 'n2', 'n3'])

    // 环路检测：n3 -> n1 会构成环路，n1 -> n3 合法
    expect(hasFlowCycle(edges, { source: 'n3', target: 'n1' })).toBe(true)
    expect(hasFlowCycle(edges, { source: 'n2', target: 'n2' })).toBe(true)
    expect(hasFlowCycle(edges, { source: 'n1', target: 'n3' })).toBe(false)

    // 磁吸对齐参考线：n2 与 n1 顶部仅差 3px（在 threshold=6 内）
    const guides = computeFlowHelperLines(nodes[1]!, nodes, 6)
    expect(guides.horizontal).toBe(100)
    expect(guides.snapPosition?.y).toBe(100)

    // JSON 快照序列化与反序列化
    const raw = serializeFlowSnapshot(nodes, edges, { x: 10, y: 20, zoom: 1.25 })
    const parsed = parseFlowSnapshot(raw)
    expect(parsed.nodes).toHaveLength(3)
    expect(parsed.edges).toHaveLength(2)
    expect(parsed.viewport).toEqual({ x: 10, y: 20, zoom: 1.25 })
    expect(() => parseFlowSnapshot('{"bad":true}')).toThrow()
  })

  it('3. useFlowHistory 支持多步快照撤销 (undo) 与重做 (redo)', () => {
    const { result } = renderHook(() => useFlowHistory())
    const s0: Node[] = [{ id: 'a', position: { x: 0, y: 0 }, data: {} }]
    const s1: Node[] = [...s0, { id: 'b', position: { x: 100, y: 0 }, data: {} }]
    const s2: Node[] = [...s1, { id: 'c', position: { x: 200, y: 0 }, data: {} }]

    expect(result.current.canUndo).toBe(false)
    act(() => {
      result.current.takeSnapshot(s0, [])
      result.current.takeSnapshot(s1, [])
    })
    expect(result.current.canUndo).toBe(true)
    expect(result.current.pastCount).toBe(2)

    let undone: ReturnType<typeof result.current.undo> = null
    act(() => {
      undone = result.current.undo(s2, [])
    })
    expect(undone!.nodes).toHaveLength(2)
    expect(result.current.canRedo).toBe(true)

    let redone: ReturnType<typeof result.current.redo> = null
    act(() => {
      redone = result.current.redo(s1, [])
    })
    expect(redone!.nodes).toHaveLength(3)
  })

  it('4. FlowCanvasSurface 多态背景、平移/框选模式、锁定状态、磁吸参考线与右键上下文菜单', () => {
    const onDelete = vi.fn()
    const onClose = vi.fn()
    render(
      <FlowCanvasSurface
        withProvider
        backgroundVariant="cross"
        interactionMode="select"
        interactive={false}
        helperLines={{ horizontal: 120, vertical: 240 }}
        nodes={[{ id: 'n1', position: { x: 10, y: 10 }, data: { label: 'Node 1' } }]}
        edges={[]}
        overlaySlot={
          <FlowContextMenu
            open
            x={80}
            y={90}
            title="节点操作"
            items={[{ key: 'del', label: '删除节点', danger: true, onClick: onDelete }]}
            onClose={onClose}
          />
        }
      >
        <FlowViewportOverlay showOriginBadge />
      </FlowCanvasSurface>
    )

    const surface = screen.getByTestId('abc-flow-canvas-surface')
    expect(surface).toHaveAttribute('data-interaction-mode', 'select')
    expect(surface).toHaveAttribute('data-interactive', 'false')
    expect(screen.getByTestId('flow-helper-line-horizontal')).toBeInTheDocument()
    expect(screen.getByTestId('flow-helper-line-vertical')).toBeInTheDocument()
    expect(screen.getByText('(0, 0)')).toBeInTheDocument()

    const menu = screen.getByRole('menu', { name: '节点操作' })
    expect(menu).toBeInTheDocument()
    fireEvent.click(screen.getByRole('menuitem', { name: '删除节点' }))
    expect(onDelete).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('5. FlowConnectionLine、FlowGroupNode、FlowNodeResizer、FlowHandle、FlowLabeledEdge 五态与 FlowViewportControls 全能按钮', () => {
    const onMode = vi.fn()
    const onLock = vi.fn()
    const onSnap = vi.fn()
    const onUndo = vi.fn()
    const onRedo = vi.fn()

    const { container } = render(
      <div>
        <svg>
          <FlowConnectionLine
            fromX={0}
            fromY={0}
            toX={120}
            toY={60}
            fromPosition={Position.Right}
            toPosition={Position.Left}
            connectionLineType={ConnectionLineType.SmoothStep}
            connectionStatus="valid"
            fromNode={{} as any}
            fromHandle={{} as any}
            toNode={null}
            toHandle={null}
            pointer={{ x: 120, y: 60 }}
          />
        </svg>

        <ReactFlowProvider>
          <div style={{ width: 400, height: 300 }}>
            <FlowGroupNode
              id="g1"
              type="flow-group"
              data={{ title: '测试子流分组', tone: 'green', badge: '2 节点' }}
              selected
              dragging={false}
              draggable
              selectable
              deletable
              isConnectable
              zIndex={0}
              positionAbsoluteX={0}
              positionAbsoluteY={0}
            />
            <FlowNodeResizer tone="amber" isVisible minWidth={160} minHeight={90} />
            <FlowHandle id="p1" type="source" position={Position.Right} tone="success" connectionLimit={2} />
            <svg>
              <FlowLabeledEdge
                id="edge-step"
                source="a"
                target="b"
                sourceX={0}
                sourceY={20}
                targetX={200}
                targetY={100}
                sourcePosition={Position.Right}
                targetPosition={Position.Left}
                selected
                data={{
                  tone: 'primary',
                  routeStyle: 'step',
                  label: 'Step 折线',
                  renderToolbar: () => <div data-testid="edge-toolbar-slot">工具条</div>,
                }}
              />
            </svg>
          </div>
        </ReactFlowProvider>

        <FlowViewportControls
          zoomPercent={100}
          onZoomOut={() => {}}
          onZoomReset={() => {}}
          onZoomIn={() => {}}
          interactionMode="pan"
          onInteractionModeChange={onMode}
          interactive
          onToggleInteractive={onLock}
          snapToGrid={false}
          onToggleSnapToGrid={onSnap}
          onUndo={onUndo}
          onRedo={onRedo}
          canUndo
          canRedo
        />
      </div>
    )

    expect(container.querySelector('[data-slot="flow-connection-line"]')).toHaveAttribute(
      'data-status',
      'valid'
    )
    expect(screen.getByText('测试子流分组')).toBeInTheDocument()
    expect(container.querySelector('[data-slot="flow-handle"]')).toHaveAttribute('data-tone', 'success')
    expect(container.querySelector('[data-route-style="step"]')).not.toBeNull()

    fireEvent.click(screen.getByLabelText('框选多节点模式'))
    fireEvent.click(screen.getByLabelText('锁定画布禁止编辑'))
    fireEvent.click(screen.getByLabelText('开关网格磁吸对齐'))
    fireEvent.click(screen.getByLabelText('撤销操作'))
    fireEvent.click(screen.getByLabelText('重做操作'))
    expect(onMode).toHaveBeenCalledWith('select')
    expect(onLock).toHaveBeenCalledTimes(1)
    expect(onSnap).toHaveBeenCalledTimes(1)
    expect(onUndo).toHaveBeenCalledTimes(1)
    expect(onRedo).toHaveBeenCalledTimes(1)
  })

  it('6. FlowHandle 在真实 FlowCanvasSurface 自定义节点内准确统计连接数并锁定 connectionLimit', () => {
    const TestLimitNode = () => (
      <div>
        <FlowHandle id="out" type="source" position={Position.Right} tone="success" connectionLimit={1} />
        <FlowHandle id="in" type="target" position={Position.Left} tone="info" />
      </div>
    )
    const nodes: Node[] = [
      { id: 'n1', type: 'limit-node', position: { x: 0, y: 0 }, data: {} },
      { id: 'n2', type: 'limit-node', position: { x: 240, y: 0 }, data: {} },
    ]
    const edges: Edge[] = [
      { id: 'e1', source: 'n1', sourceHandle: 'out', target: 'n2', targetHandle: 'in' },
    ]
    const { container } = render(
      <div style={{ width: 640, height: 360 }}>
        <FlowCanvasSurface
          nodes={nodes}
          edges={edges}
          nodeTypes={{ 'limit-node': TestLimitNode }}
        />
      </div>
    )
    const n1Source = container.querySelector(
      '[data-id="n1"] [data-slot="flow-handle"][data-handleid="out"]'
    )
    const n2Source = container.querySelector(
      '[data-id="n2"] [data-slot="flow-handle"][data-handleid="out"]'
    )
    expect(n1Source).toHaveAttribute('data-connection-count', '1')
    expect(n1Source).toHaveAttribute('data-limit-reached', 'true')
    expect(n2Source).toHaveAttribute('data-connection-count', '0')
    expect(n2Source).toHaveAttribute('data-limit-reached', 'false')
  })
})
