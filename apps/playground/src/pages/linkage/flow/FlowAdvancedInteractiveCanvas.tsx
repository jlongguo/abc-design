import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  FLOW_CONNECTION_MODE,
  FLOW_MARKER_TYPE,
  FlowAlignmentToolbar,
  FlowCanvasSurface,
  FlowGroupNode,
  FlowLabeledEdge,
  FlowQuickConnectMenu,
  FlowViewportControls,
  addFlowEdge,
  alignFlowNodes,
  computeProximityEdge,
  exportFlowToSvgDataUrl,
  findIntersectingGroupNode,
  useFlowClipboard,
  useFlowDropToConnect,
  useFlowEdgesState,
  useFlowInstance,
  useFlowNodesState,
  useFlowViewport,
  useFlowViewportFocus,
  type FlowConnection,
  type FlowEdge,
  type FlowEdgeTypes,
  type FlowGesturePreset,
  type FlowInteractionMode,
  type FlowNodeAlignment,
  type FlowNodeTypes,
  type FlowOnBeforeDelete,
  type FlowOnNodeDrag,
  type FlowQuickConnectItem,
} from '@abc-design/flow'
import { Button, StatusTag, abcToast } from '@abc-design/react'
import { Copy, Crosshair, Download, RotateCcw } from 'lucide-react'
import {
  ComputeInputNode,
  ComputeProcessorNode,
  QUICK_CONNECT_CATALOG,
  QuickCreatedNode,
  buildInitialAdvancedEdges,
  buildInitialAdvancedNodes,
  type AdvancedDemoNode,
} from './flowAdvancedFixtures'

export interface FlowAdvancedInteractiveCanvasProps {
  gesturePreset: FlowGesturePreset
  dualGrid: boolean
  proximityEnabled: boolean
  looseMode: boolean
  onlyRenderVisible: boolean
}

export const FlowAdvancedInteractiveCanvas: React.FC<FlowAdvancedInteractiveCanvasProps> = ({
  gesturePreset,
  dualGrid,
  proximityEnabled,
  looseMode,
  onlyRenderVisible,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { zoomIn, zoomOut, zoomTo, fitView } = useFlowInstance()
  const viewport = useFlowViewport()
  const [nodes, setNodes, onNodesChange] = useFlowNodesState<AdvancedDemoNode>(
    buildInitialAdvancedNodes()
  )
  const [edges, setEdges, onEdgesChange] = useFlowEdgesState<FlowEdge>(buildInitialAdvancedEdges())
  const [interactionMode, setInteractionMode] = useState<FlowInteractionMode>('select')
  const [proximityPreview, setProximityPreview] = useState<FlowEdge | null>(null)
  const [lastExportUrl, setLastExportUrl] = useState<string | null>(null)

  const { focusNode } = useFlowViewportFocus({ autoFitOnInitialized: true })

  const nodeTypes = useMemo<FlowNodeTypes>(
    () =>
      ({
        'flow-group': FlowGroupNode,
        'compute-input': ComputeInputNode,
        'compute-processor': ComputeProcessorNode,
        'quick-node': QuickCreatedNode,
      }) as unknown as FlowNodeTypes,
    []
  )

  const edgeTypes = useMemo<FlowEdgeTypes>(
    () =>
      ({
        'flow-labeled': FlowLabeledEdge,
      }) as unknown as FlowEdgeTypes,
    []
  )

  const dropToConnect = useFlowDropToConnect({ containerRef })

  const clipboard = useFlowClipboard<AdvancedDemoNode, FlowEdge>({
    nodes,
    edges,
    enableKeyboardShortcuts: true,
    onPaste: (newNodes, newEdges) => {
      setNodes((prev) => [...prev.map((n) => ({ ...n, selected: false })), ...newNodes])
      setEdges((prev) => [...prev, ...newEdges])
      abcToast.success(`已粘贴 ${newNodes.length} 个节点与 ${newEdges.length} 条内部连线`)
    },
  })

  const selectedIds = useMemo(
    () => nodes.filter((n) => n.selected && n.type !== 'flow-group').map((n) => n.id),
    [nodes]
  )

  const handleConnect = useCallback(
    (conn: FlowConnection) => {
      setEdges((prev) =>
        addFlowEdge(
          {
            ...conn,
            type: 'flow-labeled',
            markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
            data: { label: '新连线', tone: 'primary' },
          },
          prev
        )
      )
    },
    [setEdges]
  )

  const handleQuickCreate = useCallback(
    (item: FlowQuickConnectItem) => {
      const pending = dropToConnect.pendingDrop
      if (!pending) return
      const newId = `quick-${Date.now().toString(36)}`
      const newNode: AdvancedDemoNode =
        item.key === 'compute-processor'
          ? {
              id: newId,
              type: 'compute-processor',
              position: pending.flowPosition,
              data: { label: item.label, multiplier: 1, extraPorts: [], tone: 'green' },
            }
          : {
              id: newId,
              type: 'quick-node',
              position: pending.flowPosition,
              data: {
                label: item.label,
                kind: item.group ?? 'quick',
                tone: item.tone ?? 'blue',
                note: item.description,
              },
            }

      setNodes((prev) => [...prev, newNode])
      if (pending.fromNodeId) {
        const edge: FlowEdge =
          pending.fromHandleType === 'target'
            ? {
                id: `e-${newId}-${pending.fromNodeId}`,
                source: newId,
                sourceHandle: item.key === 'compute-processor' ? 'result' : 'out',
                target: pending.fromNodeId,
                targetHandle: pending.fromHandleId ?? undefined,
                type: 'flow-labeled',
                markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
                data: { label: '快速建点', tone: 'primary' },
              }
            : {
                id: `e-${pending.fromNodeId}-${newId}`,
                source: pending.fromNodeId,
                sourceHandle: pending.fromHandleId ?? undefined,
                target: newId,
                targetHandle: 'in',
                type: 'flow-labeled',
                markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
                data: { label: '快速建点', tone: 'primary' },
              }
        setEdges((prev) => [...prev, edge])
      }
      dropToConnect.dismissDrop()
      abcToast.success(`已从空白松手处创建并自动连线：${item.label}`)
    },
    [dropToConnect, setEdges, setNodes]
  )

  const handleNodeDrag = useCallback<FlowOnNodeDrag<AdvancedDemoNode>>(
    (_event, draggedNode) => {
      if (!proximityEnabled || draggedNode.type === 'flow-group') {
        setProximityPreview(null)
        return
      }
      const cand = computeProximityEdge(draggedNode, nodes, edges, { maxDistance: 140 })
      if (cand) {
        setProximityPreview({
          id: '__proximity_preview__',
          source: cand.source,
          target: cand.target,
          type: 'flow-labeled',
          data: { label: '松手磁吸连线', tone: 'success', dashed: true, animated: true },
        })
      } else {
        setProximityPreview(null)
      }
    },
    [edges, nodes, proximityEnabled]
  )

  const handleNodeDragStop = useCallback<FlowOnNodeDrag<AdvancedDemoNode>>(
    (_event, draggedNode) => {
      if (proximityPreview) {
        setEdges((prev) =>
          addFlowEdge(
            {
              source: proximityPreview.source,
              target: proximityPreview.target,
              sourceHandle: 'out',
              targetHandle: 'in',
              type: 'flow-labeled',
              markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
              data: { label: '磁吸直连', tone: 'success' },
            },
            prev
          )
        )
        setProximityPreview(null)
        abcToast.success('Proximity Connect：已自动吸附连线')
      }

      if (draggedNode.type !== 'flow-group') {
        const hit = findIntersectingGroupNode(draggedNode, nodes)
        if (hit.groupId !== (draggedNode.parentId ?? null)) {
          setNodes((prev) =>
            prev.map((n) => {
              if (n.id !== draggedNode.id) return n
              if (hit.groupId) {
                return { ...n, parentId: hit.groupId, position: hit.relativePosition }
              }
              return { ...n, parentId: undefined, position: hit.relativePosition }
            })
          )
          abcToast.info(hit.groupId ? '节点已拖入计算子流分组' : '节点已拖出子流分组')
        }
      }
    },
    [nodes, proximityPreview, setEdges, setNodes]
  )

  const handleBeforeDelete = useCallback<FlowOnBeforeDelete<AdvancedDemoNode, FlowEdge>>(
    async ({ nodes: delNodes }) => {
      if (delNodes.some((n) => n.id === 'in-base')) {
        abcToast.warning('onBeforeDelete 拦截：核心数据源节点「输入 A」受保护不可删除')
        return false
      }
      return true
    },
    []
  )

  const handleAlign = useCallback(
    (alignment: FlowNodeAlignment) => {
      setNodes((prev) => alignFlowNodes(prev, selectedIds, alignment) as AdvancedDemoNode[])
      abcToast.info(`已对 ${selectedIds.length} 个选中节点执行对齐`)
    },
    [selectedIds, setNodes]
  )

  const handleExportSvg = useCallback(() => {
    const url = exportFlowToSvgDataUrl(nodes, edges, {
      title: 'ABC Flow Advanced Graph',
      dark: document.documentElement.classList.contains('dark'),
    })
    setLastExportUrl(url)
    abcToast.success('已生成整图矢量 SVG 快照（可在顶栏预览/下载）')
  }, [edges, nodes])

  const renderedEdges = useMemo(
    () => (proximityPreview ? [...edges, proximityPreview] : edges),
    [edges, proximityPreview]
  )

  return (
    <div className="space-y-2.5">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <StatusTag tone="info" label="拉端口到空白松手 → 快捷建点" />
          <StatusTag tone="success" label="靠近节点自动磁吸" />
          <StatusTag tone="warning" label="框选 ≥2 节点 → 底部对齐条" />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <Button
            size="xs"
            variant="outline"
            pressScale={false}
            icon={<Crosshair size={12} />}
            onClick={() => focusNode('proc-1', { zoom: 1.05 })}
          >
            聚焦计算器
          </Button>
          <Button
            size="xs"
            variant="outline"
            pressScale={false}
            icon={<Copy size={12} />}
            onClick={() => {
              clipboard.copy()
              clipboard.paste()
            }}
            disabled={selectedIds.length === 0}
          >
            克隆选中子图
          </Button>
          <Button
            size="xs"
            variant="outline"
            pressScale={false}
            icon={<Download size={12} />}
            onClick={handleExportSvg}
          >
            导出 SVG
          </Button>
          {lastExportUrl && (
            <a
              href={lastExportUrl}
              download="abc-flow-snapshot.svg"
              className="inline-flex items-center rounded-md border border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]"
            >
              下载快照
            </a>
          )}
          <Button
            size="xs"
            variant="ghost"
            pressScale={false}
            icon={<RotateCcw size={12} />}
            onClick={() => {
              setNodes(buildInitialAdvancedNodes())
              setEdges(buildInitialAdvancedEdges())
              setLastExportUrl(null)
            }}
          >
            重置
          </Button>
        </div>
      </div>

      <div ref={containerRef} className="h-[430px] w-full">
        <FlowCanvasSurface<AdvancedDemoNode, FlowEdge>
          nodes={nodes}
          edges={renderedEdges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={handleConnect}
          onConnectEnd={dropToConnect.handleConnectEnd}
          onNodeDrag={handleNodeDrag}
          onNodeDragStop={handleNodeDragStop}
          onBeforeDelete={handleBeforeDelete}
          interactionMode={interactionMode}
          gesturePreset={gesturePreset}
          connectOnClick
          connectionRadius={28}
          connectionMode={looseMode ? FLOW_CONNECTION_MODE.Loose : FLOW_CONNECTION_MODE.Strict}
          onlyRenderVisibleElements={onlyRenderVisible}
          backgroundVariant="dots"
          secondaryBackground={dualGrid ? { variant: 'lines', gap: 96, size: 1 } : undefined}
          showMiniMap
          enhancedMiniMap
          bottomCenterSlot={
            <FlowAlignmentToolbar
              selectedCount={selectedIds.length}
              onAlign={handleAlign}
              onDuplicateSelected={() => {
                clipboard.copy()
                clipboard.paste()
              }}
              onDeleteSelected={() => {
                const removable = selectedIds.filter((id) => id !== 'in-base')
                if (removable.length < selectedIds.length) {
                  abcToast.warning('已跳过受保护的核心数据源节点「输入 A」')
                }
                if (removable.length > 0) {
                  setNodes((prev) => prev.filter((n) => !removable.includes(n.id)))
                }
              }}
            />
          }
          bottomLeftSlot={
            <FlowViewportControls
              zoomPercent={Math.round(viewport.zoom * 100)}
              onZoomIn={() => zoomIn({ duration: 150 })}
              onZoomOut={() => zoomOut({ duration: 150 })}
              onZoomReset={() => zoomTo(1, { duration: 150 })}
              onFitView={() => fitView({ padding: 0.2, duration: 220 })}
              interactionMode={interactionMode}
              onInteractionModeChange={setInteractionMode}
              gesturePreset={gesturePreset}
              onExportImage={handleExportSvg}
            />
          }
          overlaySlot={
            <FlowQuickConnectMenu
              open={Boolean(dropToConnect.pendingDrop)}
              x={dropToConnect.pendingDrop?.screenPosition.x ?? 0}
              y={dropToConnect.pendingDrop?.screenPosition.y ?? 0}
              containerBounds={
                containerRef.current
                  ? {
                      width: containerRef.current.clientWidth,
                      height: containerRef.current.clientHeight,
                    }
                  : undefined
              }
              items={QUICK_CONNECT_CATALOG}
              onSelect={handleQuickCreate}
              onClose={dropToConnect.dismissDrop}
            />
          }
        />
      </div>
    </div>
  )
}
