import type { ConnectionMode, Position } from '@xyflow/react'

/**
 * React Flow v12 核心运行态 Hook 与状态变更工具统一重导出门面 (flowBindings)
 * 消费端（如 Console 工作台）可 100% 通过 @abc-design/flow 消费全部 ReactFlow 状态/交互原语，无需零散直引底层包。
 */
export type FlowConnectionModeType = ConnectionMode
export type FlowPositionType = Position

export {
  addEdge as addFlowEdge,
  applyEdgeChanges as applyFlowEdgeChanges,
  applyNodeChanges as applyFlowNodeChanges,
  getBezierPath as getFlowBezierPath,
  getSimpleBezierPath as getFlowSimpleBezierPath,
  getSmoothStepPath as getFlowSmoothStepPath,
  getStraightPath as getFlowStraightPath,
  reconnectEdge as reconnectFlowEdge,
  useConnection as useFlowConnection,
  useEdges as useFlowEdges,
  useEdgesState as useFlowEdgesState,
  useInternalNode as useFlowInternalNode,
  useKeyPress as useFlowKeyPress,
  useNodeConnections as useFlowNodeConnections,
  useNodeId as useFlowNodeId,
  useNodes as useFlowNodes,
  useNodesData as useFlowNodesData,
  useNodesInitialized as useFlowNodesInitialized,
  useNodesState as useFlowNodesState,
  useOnSelectionChange as useFlowOnSelectionChange,
  useOnViewportChange as useFlowOnViewportChange,
  useReactFlow as useFlowInstance,
  useStore as useFlowStore,
  useStoreApi as useFlowStoreApi,
  useUpdateNodeInternals as useFlowUpdateNodeInternals,
  useViewport as useFlowViewport,
} from '@xyflow/react'

export type {
  AriaLabelConfig as FlowAriaLabelConfig,
  Connection as FlowConnection,
  Edge as FlowEdge,
  EdgeChange as FlowEdgeChange,
  EdgeProps as FlowEdgeProps,
  EdgeTypes as FlowEdgeTypes,
  FinalConnectionState as FlowFinalConnectionState,
  Node as FlowNode,
  NodeChange as FlowNodeChange,
  NodeProps as FlowNodeProps,
  NodeTypes as FlowNodeTypes,
  OnBeforeDelete as FlowOnBeforeDelete,
  OnConnect as FlowOnConnect,
  OnConnectEnd as FlowOnConnectEnd,
  OnConnectStart as FlowOnConnectStart,
  OnNodeDrag as FlowOnNodeDrag,
  OnReconnect as FlowOnReconnect,
  Viewport as FlowViewport,
  XYPosition as FlowXYPosition,
  ZIndexMode as FlowZIndexMode,
} from '@xyflow/react'
