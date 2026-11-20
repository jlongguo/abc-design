import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  FloatingIconRail,
  FlowCanvasSurface,
  FlowConnectionLine,
  FlowContextMenu,
  FlowGroupNode,
  FlowLabeledEdge,
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
  type FloatingIconRailItem,
  type FlowBackgroundStyle,
  type FlowEdgeRouteStyle,
  type FlowGroupNodeType,
  type FlowInteractionMode,
  type FlowLabeledEdgeProps,
  type FlowLabeledEdgeType,
  type FlowLayoutDirection,
  type FlowTone,
} from '@abc-design/flow'
import { Button, StatusTag, abcToast } from '@abc-design/react'
import {
  ConnectionMode,
  MarkerType,
  addEdge,
  reconnectEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
  useViewport,
  type Connection,
  type Edge,
  type EdgeTypes,
  type NodeProps,
  type NodeTypes,
} from '@xyflow/react'
import { Download, Layers, Play, Plus, Trash2, Upload } from 'lucide-react'
import {
  KIND_ICON,
  PALETTE_TEMPLATES,
  StudioCardNode,
  buildInitialEdges,
  buildInitialNodes,
  buildStudioContextMenuItems,
  resolveConnectionLineType,
  type ContextMenuState,
  type PaletteTemplate,
  type StudioAnyNode,
  type StudioCardNodeType,
  type StudioNodeData,
} from './flowStudioFixtures'

export interface FlowStudioCanvasProps {
  bgVariant: FlowBackgroundStyle
  routeStyle: FlowEdgeRouteStyle
  animatedEdges: boolean
  layoutDir: FlowLayoutDirection
  preventCycle: boolean
  showOrigin: boolean
  showMiniMap: boolean
  setShowMiniMap: React.Dispatch<React.SetStateAction<boolean>>
}

export const FlowStudioCanvas: React.FC<FlowStudioCanvasProps> = ({
  bgVariant,
  routeStyle,
  animatedEdges,
  layoutDir,
  preventCycle,
  showOrigin,
  showMiniMap,
  setShowMiniMap,
}) => {
  const stageRef = useRef<HTMLDivElement>(null)
  const { zoomIn, zoomOut, setViewport, fitView, screenToFlowPosition, toObject } = useReactFlow()
  const viewport = useViewport()
  const [interactionMode, setInteractionMode] = useState<FlowInteractionMode>('pan')
  const [interactive, setInteractive] = useState(true)
  const [snapToGrid, setSnapToGrid] = useState(true)
  const [helperLines, setHelperLines] = useState<{ horizontal?: number; vertical?: number }>({})
  const [lineageNodeId, setLineageNodeId] = useState<string | null>(null)
  const [savedJson, setSavedJson] = useState<string>('')
  const [ctxMenu, setCtxMenu] = useState<ContextMenuState>({ open: false, x: 0, y: 0, kind: 'pane' })

  const [nodes, setNodes, onNodesChange] = useNodesState<StudioAnyNode>(buildInitialNodes())
  const [edges, setEdges, onEdgesChange] = useEdgesState<FlowLabeledEdgeType>(
    buildInitialEdges(routeStyle, animatedEdges)
  )
  const history = useFlowHistory<StudioAnyNode, FlowLabeledEdgeType>()

  const handleDuplicateNode = useCallback(
    (nodeId: string) => {
      history.takeSnapshot(nodes, edges)
      const src = nodes.find((n) => n.id === nodeId)
      if (!src) return
      const cloneId = `n-${Date.now().toString(36)}`
      const cloned: StudioAnyNode = {
        ...src,
        id: cloneId,
        selected: false,
        position: { x: src.position.x + 36, y: src.position.y + 36 },
      }
      setNodes((prev) => [...prev, cloned])
      abcToast.success(`已复制节点 ${cloneId}`)
    },
    [nodes, edges, history, setNodes]
  )

  const handleDeleteNode = useCallback(
    (nodeId: string) => {
      history.takeSnapshot(nodes, edges)
      setNodes((prev) => prev.filter((n) => n.id !== nodeId && n.parentId !== nodeId))
      setEdges((prev) => prev.filter((e) => e.source !== nodeId && e.target !== nodeId))
      setLineageNodeId((cur) => (cur === nodeId ? null : cur))
    },
    [nodes, edges, history, setNodes, setEdges]
  )

  const handleCycleGroupTone = useCallback(
    (groupId: string, nextTone: FlowTone) => {
      history.takeSnapshot(nodes, edges)
      setNodes((prev) =>
        prev.map((n) =>
          n.id === groupId && n.type === 'flow-group'
            ? { ...n, data: { ...n.data, tone: nextTone } }
            : n
        )
      )
    },
    [nodes, edges, history, setNodes]
  )

  const handleAddNodeAt = useCallback(
    (tpl: PaletteTemplate, pos?: { x: number; y: number }) => {
      history.takeSnapshot(nodes, edges)
      const newId = `n-${Date.now().toString(36)}`
      const nextNode: StudioCardNodeType = {
        id: newId,
        type: 'studio-card',
        position: pos ?? { x: 160 + (nodes.length % 5) * 44, y: 260 + (nodes.length % 3) * 32 },
        data: { title: tpl.title, tone: tpl.tone, meta: tpl.meta, kind: tpl.kind },
      }
      setNodes((prev) => [...prev, nextNode])
      abcToast.success(`已添加节点「${tpl.title}」`)
    },
    [nodes, edges, history, setNodes]
  )

  const lineage = useMemo(() => {
    if (!lineageNodeId) return null
    const up = getFlowUpstream(lineageNodeId, nodes, edges)
    const down = getFlowDownstream(lineageNodeId, nodes, edges)
    return {
      nodeIds: new Set([...up.nodeIds, ...down.nodeIds]),
      edgeIds: new Set([...up.edgeIds, ...down.edgeIds]),
    }
  }, [lineageNodeId, nodes, edges])

  const renderedNodes = useMemo<StudioAnyNode[]>(
    () =>
      nodes.map((n) => {
        if (n.type === 'flow-group') {
          const childCount = nodes.filter((c) => c.parentId === n.id).length
          return {
            ...n,
            data: {
              ...n.data,
              badge: `${childCount} 节点`,
              onCycleTone: handleCycleGroupTone,
              onDelete: handleDeleteNode,
            },
          }
        }
        const isInLineage = !lineage || lineage.nodeIds.has(n.id)
        return {
          ...n,
          data: {
            ...n.data,
            highlighted: Boolean(lineage && lineage.nodeIds.has(n.id)),
            dimmed: Boolean(lineage && !isInLineage),
            onDuplicate: handleDuplicateNode,
            onDelete: handleDeleteNode,
            onTraceLineage: (id: string) => setLineageNodeId((cur) => (cur === id ? null : id)),
          },
        }
      }),
    [nodes, lineage, handleCycleGroupTone, handleDeleteNode, handleDuplicateNode]
  )

  const renderedEdges = useMemo<FlowLabeledEdgeType[]>(
    () =>
      edges.map((e) => ({
        ...e,
        data: {
          ...e.data,
          routeStyle,
          animated: animatedEdges || Boolean(e.data?.animated),
          dimmed: Boolean(lineage && !lineage.edgeIds.has(e.id)),
          onActionClick: (edgeId: string) => abcToast.info(`点击了连线 ${edgeId} 的中点插入按钮`),
          renderToolbar: (edgeId: string) => (
            <div className="flex items-center gap-1 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 py-1 shadow-md">
              <Button
                size="xs"
                variant="ghost"
                onClick={() => {
                  history.takeSnapshot(nodes, edges)
                  setEdges((prev) =>
                    prev.map((item) =>
                      item.id === edgeId
                        ? { ...item, data: { ...item.data, animated: !item.data?.animated } }
                        : item
                    )
                  )
                }}
              >
                <Play size={11} /> 流光
              </Button>
              <Button
                size="xs"
                variant="ghost"
                onClick={() => {
                  history.takeSnapshot(nodes, edges)
                  setEdges((prev) => prev.filter((item) => item.id !== edgeId))
                }}
              >
                <Trash2 size={11} /> 删除
              </Button>
            </div>
          ),
        },
      })),
    [edges, routeStyle, animatedEdges, lineage, nodes, history, setEdges]
  )

  const nodeTypes = useMemo<NodeTypes>(
    () => ({
      'studio-card': StudioCardNode,
      'flow-group': (props) => <FlowGroupNode {...(props as NodeProps<FlowGroupNodeType>)} />,
    }),
    []
  )

  const edgeTypes = useMemo<EdgeTypes>(
    () => ({
      'flow-labeled': (props) => <FlowLabeledEdge {...(props as FlowLabeledEdgeProps)} />,
    }),
    []
  )

  const isValidConnection = useCallback(
    (connection: Edge | Connection) => {
      if (!preventCycle) return connection.source !== connection.target
      return !hasFlowCycle(edges, connection)
    },
    [edges, preventCycle]
  )

  const onConnect = useCallback(
    (connection: Connection) => {
      if (preventCycle && hasFlowCycle(edges, connection)) {
        abcToast.warning('DAG 防环校验已拦截：不允许形成循环连接')
        return
      }
      history.takeSnapshot(nodes, edges)
      setEdges((eds) =>
        addEdge<FlowLabeledEdgeType>(
          {
            ...connection,
            type: 'flow-labeled',
            markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
            data: { tone: 'primary', label: 'Next', routeStyle, animated: animatedEdges },
          },
          eds
        )
      )
    },
    [preventCycle, edges, nodes, history, setEdges, routeStyle, animatedEdges]
  )

  const onReconnect = useCallback(
    (oldEdge: FlowLabeledEdgeType, newConnection: Connection) => {
      history.takeSnapshot(nodes, edges)
      setEdges((eds) => reconnectEdge(oldEdge, newConnection, eds))
      abcToast.info('已完成连线端点重连 (onReconnect)')
    },
    [nodes, edges, history, setEdges]
  )

  const handleAutoLayout = useCallback(() => {
    history.takeSnapshot(nodes, edges)
    const nextNodes = layoutFlowGraph(nodes, edges, { direction: layoutDir })
    setNodes(nextNodes)
    window.requestAnimationFrame(() => void fitView({ padding: 0.2, duration: 240 }))
    abcToast.success(`已执行 ${layoutDir} 拓扑自动排版`)
  }, [nodes, edges, layoutDir, history, setNodes, fitView])

  const handleUndo = useCallback(() => {
    const snap = history.undo(nodes, edges)
    if (!snap) return
    setNodes(snap.nodes)
    setEdges(snap.edges)
  }, [history, nodes, edges, setNodes, setEdges])

  const handleRedo = useCallback(() => {
    const snap = history.redo(nodes, edges)
    if (!snap) return
    setNodes(snap.nodes)
    setEdges(snap.edges)
  }, [history, nodes, edges, setNodes, setEdges])

  const handleExportSnapshot = useCallback(() => {
    const obj = toObject()
    const json = serializeFlowSnapshot(
      obj.nodes as StudioAnyNode[],
      obj.edges as FlowLabeledEdgeType[],
      obj.viewport
    )
    setSavedJson(json)
    abcToast.success(`已导出快照（${obj.nodes.length} 节点 / ${obj.edges.length} 连线）`)
  }, [toObject])

  const handleRestoreSnapshot = useCallback(() => {
    if (!savedJson) {
      abcToast.info('请先点击“导出 JSON 快照”生成一份备份')
      return
    }
    const parsed = parseFlowSnapshot<StudioAnyNode, FlowLabeledEdgeType>(savedJson)
    history.takeSnapshot(nodes, edges)
    setNodes(parsed.nodes)
    setEdges(parsed.edges)
    if (parsed.viewport) void setViewport(parsed.viewport, { duration: 220 })
    abcToast.success('已从 JSON 快照无损还原画布')
  }, [savedJson, history, nodes, edges, setNodes, setEdges, setViewport])

  const railItems = useMemo<FloatingIconRailItem[]>(
    () => [
      {
        key: 'palette',
        label: '拖放节点面板',
        icon: <Plus size={15} />,
        content: (
          <div className="space-y-1.5">
            <p className="text-[11px] text-[var(--abc-fg-muted)]">点击或拖拽节点卡片到右侧画布</p>
            {PALETTE_TEMPLATES.map((tpl) => (
              <div
                key={tpl.kind}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('application/abc-flow-node', JSON.stringify(tpl))
                  e.dataTransfer.effectAllowed = 'move'
                }}
                onClick={() => handleAddNodeAt(tpl)}
                className="flex cursor-grab items-center justify-between rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-2 text-xs hover:border-[var(--abc-primary)] active:cursor-grabbing"
              >
                <span className="flex items-center gap-1.5 font-medium text-[var(--abc-fg)]">
                  {KIND_ICON[tpl.kind]}
                  <span>{tpl.title}</span>
                </span>
                <span className="font-mono text-[10px] text-[var(--abc-fg-muted)]">+</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        key: 'lineage',
        label: '血缘与拓扑',
        icon: <Layers size={15} />,
        content: (
          <div className="space-y-2 text-xs">
            <p className="text-[11px] text-[var(--abc-fg-muted)]">
              选择任意节点查看其上下游完整血缘链路
            </p>
            <div className="flex flex-wrap gap-1">
              {nodes
                .filter((n) => n.type === 'studio-card')
                .map((n) => (
                  <Button
                    key={n.id}
                    size="xs"
                    variant={lineageNodeId === n.id ? 'primary' : 'secondary'}
                    onClick={() => setLineageNodeId((cur) => (cur === n.id ? null : n.id))}
                  >
                    {(n.data as StudioNodeData).title}
                  </Button>
                ))}
            </div>
            {lineageNodeId && (
              <Button size="xs" variant="ghost" onClick={() => setLineageNodeId(null)}>
                清除血缘高亮
              </Button>
            )}
          </div>
        ),
      },
    ],
    [handleAddNodeAt, nodes, lineageNodeId]
  )

  const openContextAt = (
    event: React.MouseEvent | MouseEvent,
    kind: ContextMenuState['kind'],
    targetId?: string
  ) => {
    event.preventDefault()
    const rect = stageRef.current?.getBoundingClientRect()
    const x = rect ? event.clientX - rect.left : 120
    const y = rect ? event.clientY - rect.top : 120
    setCtxMenu({ open: true, x, y, kind, targetId })
  }

  const contextItems = useMemo(
    () =>
      buildStudioContextMenuItems({
        ctxMenu,
        layoutDir,
        onTraceLineage: (id) => setLineageNodeId((cur) => (cur === id ? null : id)),
        onDuplicateNode: handleDuplicateNode,
        onDeleteNode: handleDeleteNode,
        onToggleEdgeAnimated: (edgeId) =>
          setEdges((prev) =>
            prev.map((e) =>
              e.id === edgeId ? { ...e, data: { ...e.data, animated: !e.data?.animated } } : e
            )
          ),
        onDeleteEdge: (edgeId) => {
          history.takeSnapshot(nodes, edges)
          setEdges((prev) => prev.filter((e) => e.id !== edgeId))
        },
        onAddNodeAtCursor: () => {
          const rect = stageRef.current?.getBoundingClientRect()
          const flowPos = rect
            ? screenToFlowPosition({ x: rect.left + ctxMenu.x, y: rect.top + ctxMenu.y })
            : { x: 260, y: 180 }
          handleAddNodeAt(PALETTE_TEMPLATES[1]!, flowPos)
        },
        onAutoLayout: handleAutoLayout,
        onFitView: () => void fitView({ padding: 0.2, duration: 220 }),
      }),
    [
      ctxMenu,
      layoutDir,
      handleDuplicateNode,
      handleDeleteNode,
      history,
      nodes,
      edges,
      setEdges,
      screenToFlowPosition,
      handleAddNodeAt,
      handleAutoLayout,
      fitView,
    ]
  )

  const stageRect = stageRef.current?.getBoundingClientRect()

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-xl border border-[var(--abc-border)]">
      <FlowCanvasSurface<StudioAnyNode, FlowLabeledEdgeType>
        containerRef={stageRef}
        nodes={renderedNodes}
        edges={renderedEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onReconnect={onReconnect}
        isValidConnection={isValidConnection}
        connectionMode={ConnectionMode.Strict}
        connectionLineType={resolveConnectionLineType(routeStyle)}
        connectionLineComponent={(props) => <FlowConnectionLine {...props} />}
        backgroundVariant={bgVariant}
        interactionMode={interactionMode}
        interactive={interactive}
        snapToGrid={snapToGrid}
        snapGrid={[16, 16]}
        helperLines={helperLines}
        showMiniMap={showMiniMap}
        deleteKeyCode={['Backspace', 'Delete']}
        onNodeDrag={(_, draggingNode) => {
          const guides = computeFlowHelperLines(draggingNode, nodes, 6)
          setHelperLines({ horizontal: guides.horizontal, vertical: guides.vertical })
        }}
        onNodeDragStop={() => setHelperLines({})}
        onPaneContextMenu={(e) => openContextAt(e, 'pane')}
        onNodeContextMenu={(e, node) => openContextAt(e, 'node', node.id)}
        onEdgeContextMenu={(e, edge) => openContextAt(e, 'edge', edge.id)}
        onPaneClick={() => setCtxMenu((prev) => (prev.open ? { ...prev, open: false } : prev))}
        onDragOver={(e) => {
          e.preventDefault()
          e.dataTransfer.dropEffect = 'move'
        }}
        onDrop={(e) => {
          e.preventDefault()
          const raw = e.dataTransfer.getData('application/abc-flow-node')
          if (!raw) return
          const tpl = JSON.parse(raw) as PaletteTemplate
          const flowPos = screenToFlowPosition({ x: e.clientX, y: e.clientY })
          handleAddNodeAt(tpl, flowPos)
        }}
        fitView
        fitViewOptions={{ padding: 0.16 }}
        leftRailSlot={<FloatingIconRail items={railItems} size="sm" />}
        topCenterSlot={
          <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-3 py-1 text-[11px] shadow-xs backdrop-blur">
            <StatusTag tone="info" size="xs" dot={false}>
              节点 {nodes.length} · 连线 {edges.length}
            </StatusTag>
            <span className="text-[var(--abc-fg-muted)]">
              右键画布/节点/连线唤起菜单 · 拖拽端点可重连 · 选中分组可拖边缩放
            </span>
          </div>
        }
        bottomLeftSlot={
          <FlowViewportControls
            zoomPercent={Math.round(viewport.zoom * 100)}
            onZoomOut={() => void zoomOut({ duration: 160 })}
            onZoomReset={() => void setViewport({ x: viewport.x, y: viewport.y, zoom: 1 }, { duration: 160 })}
            onZoomIn={() => void zoomIn({ duration: 160 })}
            onFitView={() => void fitView({ padding: 0.18, duration: 220 })}
            onAutoLayout={handleAutoLayout}
            showMiniMap={showMiniMap}
            onToggleMiniMap={() => setShowMiniMap((v) => !v)}
            interactionMode={interactionMode}
            onInteractionModeChange={setInteractionMode}
            interactive={interactive}
            onToggleInteractive={() => setInteractive((v) => !v)}
            snapToGrid={snapToGrid}
            onToggleSnapToGrid={() => setSnapToGrid((v) => !v)}
            onUndo={handleUndo}
            onRedo={handleRedo}
            canUndo={history.canUndo}
            canRedo={history.canRedo}
            extraActions={[
              {
                key: 'export-json',
                icon: <Download size={13} />,
                label: '导出 JSON 快照',
                onClick: handleExportSnapshot,
              },
              {
                key: 'restore-json',
                icon: <Upload size={13} />,
                label: '从 JSON 快照还原',
                disabled: !savedJson,
                onClick: handleRestoreSnapshot,
              },
            ]}
            primaryAction={{
              label: '添加节点',
              onClick: () => handleAddNodeAt(PALETTE_TEMPLATES[nodes.length % PALETTE_TEMPLATES.length]!),
            }}
          />
        }
        overlaySlot={
          <FlowContextMenu
            open={ctxMenu.open}
            x={ctxMenu.x}
            y={ctxMenu.y}
            title={
              ctxMenu.kind === 'node'
                ? '节点操作'
                : ctxMenu.kind === 'edge'
                  ? '连线操作'
                  : '画布操作'
            }
            items={contextItems}
            containerBounds={
              stageRect ? { width: stageRect.width, height: stageRect.height } : undefined
            }
            onClose={() => setCtxMenu((prev) => ({ ...prev, open: false }))}
          />
        }
      >
        <FlowViewportOverlay showOriginBadge={showOrigin} />
      </FlowCanvasSurface>
    </div>
  )
}
