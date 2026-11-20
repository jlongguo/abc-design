import React from 'react'
import {
  FlowHandle,
  FlowNodeCard,
  FlowNodeToolbar,
  type FlowContextMenuItem,
  type FlowEdgeRouteStyle,
  type FlowGroupNodeType,
  type FlowLabeledEdgeType,
  type FlowLayoutDirection,
  type FlowTone,
} from '@abc-design/flow'
import {
  ConnectionLineType,
  MarkerType,
  NodeToolbar,
  Position,
  type Node,
  type NodeProps,
} from '@xyflow/react'
import {
  Bot,
  Copy,
  GitBranch,
  Globe,
  Layers,
  Network,
  Plus,
  RotateCcw,
  Sparkles,
  Trash2,
  Zap,
} from 'lucide-react'

export interface StudioNodeData extends Record<string, unknown> {
  title: string
  tone: FlowTone
  meta: string
  kind: 'trigger' | 'llm' | 'branch' | 'http'
  highlighted?: boolean
  dimmed?: boolean
  onDuplicate?: (id: string) => void
  onDelete?: (id: string) => void
  onTraceLineage?: (id: string) => void
}

export type StudioCardNodeType = Node<StudioNodeData, 'studio-card'>
export type StudioAnyNode = StudioCardNodeType | FlowGroupNodeType

export interface ContextMenuState {
  open: boolean
  x: number
  y: number
  kind: 'pane' | 'node' | 'edge'
  targetId?: string
}

export interface PaletteTemplate {
  kind: StudioNodeData['kind']
  title: string
  tone: FlowTone
  meta: string
}

export const KIND_ICON: Record<StudioNodeData['kind'], React.ReactNode> = {
  trigger: <Zap size={13} />,
  llm: <Bot size={13} />,
  branch: <GitBranch size={13} />,
  http: <Globe size={13} />,
}

export const PALETTE_TEMPLATES: readonly PaletteTemplate[] = [
  { kind: 'trigger', title: 'Webhook 入口', tone: 'blue', meta: 'POST /v1/hook' },
  { kind: 'llm', title: 'LLM 推理节点', tone: 'green', meta: 'gemini-2.5-pro' },
  { kind: 'branch', title: '意图路由分支', tone: 'amber', meta: 'score >= 0.85' },
  { kind: 'http', title: '外部回调通知', tone: 'rose', meta: 'timeout: 5s' },
]

export const StudioCardNode: React.FC<NodeProps<StudioCardNodeType>> = ({ id, data, selected }) => (
  <div className={data.dimmed ? 'opacity-40 transition-opacity' : 'transition-opacity'}>
    <NodeToolbar isVisible={Boolean(selected)} position={Position.Top} offset={8}>
      <FlowNodeToolbar
        size="xs"
        items={[
          {
            key: 'lineage',
            icon: <Network size={13} />,
            label: '高亮上下游血缘链路',
            onClick: () => data.onTraceLineage?.(id),
          },
          {
            key: 'duplicate',
            icon: <Copy size={13} />,
            label: '复制节点',
            onClick: () => data.onDuplicate?.(id),
          },
          {
            key: 'delete',
            icon: <Trash2 size={13} />,
            label: '删除节点',
            danger: true,
            dividerBefore: true,
            onClick: () => data.onDelete?.(id),
          },
        ]}
      />
    </NodeToolbar>
    <FlowNodeCard
      tone={data.tone}
      title={data.title}
      icon={KIND_ICON[data.kind]}
      selected={selected || data.highlighted}
      width={208}
      inputHandle={<FlowHandle type="target" position={Position.Left} tone="info" />}
      metaRows={[{ label: 'Config', value: data.meta, mono: true }]}
      outputs={
        data.kind === 'branch'
          ? [
              {
                id: 'yes',
                label: 'Hit',
                tone: 'success',
                handle: <FlowHandle id="yes" type="source" position={Position.Right} tone="success" />,
              },
              {
                id: 'no',
                label: 'Fallback',
                tone: 'warning',
                handle: <FlowHandle id="no" type="source" position={Position.Right} tone="warning" />,
              },
            ]
          : [
              {
                id: 'out',
                label: 'Next',
                tone: 'neutral',
                handle: <FlowHandle id="out" type="source" position={Position.Right} tone="neutral" />,
              },
            ]
      }
    />
  </div>
)

export function buildInitialNodes(): StudioAnyNode[] {
  return [
    {
      id: 'n-trigger',
      type: 'studio-card',
      position: { x: 40, y: 120 },
      data: { title: '用户提问触发', tone: 'blue', meta: '{{event.query}}', kind: 'trigger' },
    },
    {
      id: 'g-rag',
      type: 'flow-group',
      position: { x: 300, y: 36 },
      style: { width: 520, height: 276 },
      data: {
        title: 'RAG 检索增强子流（Sub-Flow · 可拖边调大小）',
        tone: 'blue',
        badge: '2 节点',
        resizable: true,
      },
    },
    {
      id: 'n-branch',
      type: 'studio-card',
      parentId: 'g-rag',
      extent: 'parent',
      position: { x: 24, y: 76 },
      data: { title: '知识库置信判断', tone: 'amber', meta: 'threshold >= 0.8', kind: 'branch' },
    },
    {
      id: 'n-llm',
      type: 'studio-card',
      parentId: 'g-rag',
      extent: 'parent',
      position: { x: 284, y: 54 },
      data: { title: '上下文合成回复', tone: 'green', meta: '{{kb.chunks}}', kind: 'llm' },
    },
    {
      id: 'n-notify',
      type: 'studio-card',
      position: { x: 880, y: 120 },
      data: { title: '审计回执入库', tone: 'rose', meta: 'POST /audit', kind: 'http' },
    },
  ]
}

export function buildInitialEdges(
  routeStyle: FlowEdgeRouteStyle,
  animated: boolean
): FlowLabeledEdgeType[] {
  return [
    {
      id: 'e-1',
      type: 'flow-labeled',
      source: 'n-trigger',
      sourceHandle: 'out',
      target: 'n-branch',
      markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
      data: { tone: 'primary', label: 'Query', routeStyle, animated },
    },
    {
      id: 'e-2',
      type: 'flow-labeled',
      source: 'n-branch',
      sourceHandle: 'yes',
      target: 'n-llm',
      markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
      data: { tone: 'success', label: 'Hit', routeStyle, animated, showActionTrigger: true },
    },
    {
      id: 'e-3',
      type: 'flow-labeled',
      source: 'n-llm',
      sourceHandle: 'out',
      target: 'n-notify',
      markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
      data: { tone: 'default', label: 'Emit', routeStyle, animated },
    },
  ]
}

export function resolveConnectionLineType(routeStyle: FlowEdgeRouteStyle): ConnectionLineType {
  if (routeStyle === 'straight') return ConnectionLineType.Straight
  if (routeStyle === 'step') return ConnectionLineType.Step
  if (routeStyle === 'smoothstep') return ConnectionLineType.SmoothStep
  if (routeStyle === 'simplebezier') return ConnectionLineType.SimpleBezier
  return ConnectionLineType.Bezier
}

export function buildStudioContextMenuItems(params: {
  ctxMenu: ContextMenuState
  layoutDir: FlowLayoutDirection
  onTraceLineage: (id: string) => void
  onDuplicateNode: (id: string) => void
  onDeleteNode: (id: string) => void
  onToggleEdgeAnimated: (id: string) => void
  onDeleteEdge: (id: string) => void
  onAddNodeAtCursor: () => void
  onAutoLayout: () => void
  onFitView: () => void
}): FlowContextMenuItem[] {
  const { ctxMenu } = params
  if (ctxMenu.kind === 'node' && ctxMenu.targetId) {
    const targetId = ctxMenu.targetId
    return [
      {
        key: 'trace',
        label: '高亮上下游血缘',
        icon: <Network size={13} />,
        onClick: () => params.onTraceLineage(targetId),
      },
      {
        key: 'dup',
        label: '复制节点',
        icon: <Copy size={13} />,
        shortcut: '⌘D',
        onClick: () => params.onDuplicateNode(targetId),
      },
      {
        key: 'del',
        label: '删除节点',
        icon: <Trash2 size={13} />,
        shortcut: 'Del',
        danger: true,
        dividerBefore: true,
        onClick: () => params.onDeleteNode(targetId),
      },
    ]
  }
  if (ctxMenu.kind === 'edge' && ctxMenu.targetId) {
    const edgeId = ctxMenu.targetId
    return [
      {
        key: 'anim',
        label: '切换连线流光动画',
        icon: <Sparkles size={13} />,
        onClick: () => params.onToggleEdgeAnimated(edgeId),
      },
      {
        key: 'del-edge',
        label: '删除该连线',
        icon: <Trash2 size={13} />,
        danger: true,
        dividerBefore: true,
        onClick: () => params.onDeleteEdge(edgeId),
      },
    ]
  }
  return [
    {
      key: 'add-llm',
      label: '在此处添加 LLM 节点',
      icon: <Plus size={13} />,
      onClick: params.onAddNodeAtCursor,
    },
    {
      key: 'layout',
      label: `执行 ${params.layoutDir} 自动排版`,
      icon: <Layers size={13} />,
      onClick: params.onAutoLayout,
    },
    {
      key: 'fit',
      label: '自适应居中画布',
      icon: <RotateCcw size={13} />,
      dividerBefore: true,
      onClick: params.onFitView,
    },
  ]
}
