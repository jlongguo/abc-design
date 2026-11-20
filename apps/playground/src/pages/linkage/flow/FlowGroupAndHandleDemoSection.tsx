import React, { useCallback, useMemo, useState } from 'react'
import {
  FlowCanvasSurface,
  FlowGroupNode,
  FlowHandle,
  FlowLabeledEdge,
  FlowNodeCard,
  FlowNodeResizer,
  type FlowGroupNodeType,
  type FlowLabeledEdgeProps,
  type FlowLabeledEdgeType,
  type FlowTone,
} from '@abc-design/flow'
import { StatusTag, abcToast } from '@abc-design/react'
import {
  ConnectionMode,
  MarkerType,
  Position,
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type EdgeTypes,
  type Node,
  type NodeProps,
  type NodeTypes,
} from '@xyflow/react'
import { Box, Cpu, ShieldCheck } from 'lucide-react'
import { ComponentDocPreview } from '../../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../../components/PropKnobs'

interface ResizableDemoData extends Record<string, unknown> {
  label: string
  tone: FlowTone
  keepAspectRatio: boolean
}

type ResizableDemoNode = Node<ResizableDemoData, 'resizable-box'>
type ChildDemoNode = Node<{ title: string; tone: FlowTone }, 'child-card'>

const ResizableBoxNode: React.FC<NodeProps<ResizableDemoNode>> = ({ data, selected }) => (
  <div className="relative flex h-full w-full flex-col justify-between rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-xs">
    <FlowNodeResizer
      tone={data.tone}
      isVisible={Boolean(selected)}
      minWidth={170}
      minHeight={92}
      keepAspectRatio={data.keepAspectRatio}
    />
    <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)]">
      <Box size={13} className="text-[var(--abc-primary)]" />
      <span>{data.label}</span>
    </div>
    <p className="text-[11px] text-[var(--abc-fg-muted)]">
      点击选中我，拖动四角或边缘句柄自由调整宽高
    </p>
    <FlowHandle type="target" position={Position.Left} tone="info" />
    <FlowHandle type="source" position={Position.Right} tone="success" />
  </div>
)

const ChildCardNode: React.FC<NodeProps<ChildDemoNode>> = ({ data, selected }) => (
  <FlowNodeCard
    tone={data.tone}
    title={data.title}
    icon={<Cpu size={13} />}
    selected={selected}
    width={176}
    inputHandle={<FlowHandle type="target" position={Position.Left} tone="info" />}
    outputs={[
      {
        id: 'out',
        label: 'Out',
        tone: 'success',
        handle: <FlowHandle id="out" type="source" position={Position.Right} tone="success" />,
      },
    ]}
  />
)

interface HandleLimitNodeData extends Record<string, unknown> {
  title: string
  tone: FlowTone
  limit: number
  isSource?: boolean
}

type HandleLimitNodeType = Node<HandleLimitNodeData, 'handle-limit'>

const HandleLimitNode: React.FC<NodeProps<HandleLimitNodeType>> = ({ data, selected }) => (
  <FlowNodeCard
    tone={data.tone}
    title={data.title}
    icon={<ShieldCheck size={13} />}
    selected={selected}
    width={212}
    metaRows={[
      {
        label: 'Limit',
        value: data.isSource ? `每个输出端口上限 ${data.limit} 条` : `输入端口上限 ${data.limit} 条`,
      },
    ]}
    inputHandle={
      !data.isSource ? (
        <FlowHandle
          id="in"
          type="target"
          position={Position.Left}
          tone="info"
          size="md"
          connectionLimit={data.limit}
        />
      ) : undefined
    }
    outputs={
      data.isSource
        ? [
            {
              id: 'success',
              label: 'Primary Out',
              tone: 'success',
              handle: (
                <FlowHandle
                  id="success"
                  type="source"
                  position={Position.Right}
                  tone="success"
                  size="md"
                  connectionLimit={data.limit}
                />
              ),
            },
            {
              id: 'error',
              label: 'Error Out',
              tone: 'danger',
              handle: (
                <FlowHandle
                  id="error"
                  type="source"
                  position={Position.Right}
                  tone="danger"
                  size="md"
                  connectionLimit={data.limit}
                />
              ),
            },
          ]
        : []
    }
  />
)

export const FlowGroupAndHandleDemoSection: React.FC = () => {
  // Card A: FlowGroupNode + FlowNodeResizer
  const [groupTone, setGroupTone] = useState<FlowTone>('blue')
  const [groupDashed, setGroupDashed] = useState(true)
  const [keepAspect, setKeepAspect] = useState(false)

  const [subNodes, , onSubNodesChange] = useNodesState<
    FlowGroupNodeType | ChildDemoNode | ResizableDemoNode
  >([
    {
      id: 'sub-group-1',
      type: 'flow-group',
      position: { x: 24, y: 24 },
      selected: true,
      style: { width: 420, height: 210 },
      data: {
        title: '审批子流程容器 (FlowGroupNode)',
        description: '子节点带 parentId + extent="parent"，拖不出父容器边界',
        tone: 'blue',
        badge: '2 子节点',
        dashed: true,
        resizable: true,
      },
    },
    {
      id: 'sub-child-1',
      type: 'child-card',
      parentId: 'sub-group-1',
      extent: 'parent',
      position: { x: 20, y: 84 },
      data: { title: '风控预检', tone: 'green' },
    },
    {
      id: 'sub-child-2',
      type: 'child-card',
      parentId: 'sub-group-1',
      extent: 'parent',
      position: { x: 224, y: 84 },
      data: { title: '人工复核', tone: 'amber' },
    },
    {
      id: 'free-resizable',
      type: 'resizable-box',
      position: { x: 484, y: 56 },
      style: { width: 200, height: 120 },
      data: { label: '独立可调尺寸节点', tone: 'rose', keepAspectRatio: false },
    },
  ])

  const [subEdges, setSubEdges, onSubEdgesChange] = useEdgesState<FlowLabeledEdgeType>([
    {
      id: 'se-1',
      type: 'flow-labeled',
      source: 'sub-child-1',
      sourceHandle: 'out',
      target: 'sub-child-2',
      markerEnd: { type: MarkerType.ArrowClosed, width: 15, height: 15 },
      data: { tone: 'success', label: 'Pass' },
    },
    {
      id: 'se-2',
      type: 'flow-labeled',
      source: 'sub-child-2',
      sourceHandle: 'out',
      target: 'free-resizable',
      markerEnd: { type: MarkerType.ArrowClosed, width: 15, height: 15 },
      data: { tone: 'primary', label: 'Output' },
    },
  ])

  const syncedSubNodes = useMemo(
    () =>
      subNodes.map((n) => {
        if (n.type === 'flow-group') {
          return {
            ...n,
            data: {
              ...n.data,
              tone: groupTone,
              dashed: groupDashed,
              onCycleTone: (_id: string, nextTone: FlowTone) => setGroupTone(nextTone),
            },
          }
        }
        if (n.type === 'resizable-box') {
          return { ...n, data: { ...n.data, keepAspectRatio: keepAspect } }
        }
        return n
      }),
    [subNodes, groupTone, groupDashed, keepAspect]
  )

  const subNodeTypes = useMemo<NodeTypes>(
    () => ({
      'flow-group': (props) => <FlowGroupNode {...(props as NodeProps<FlowGroupNodeType>)} />,
      'child-card': ChildCardNode,
      'resizable-box': ResizableBoxNode,
    }),
    []
  )

  const edgeTypes = useMemo<EdgeTypes>(
    () => ({
      'flow-labeled': (props) => <FlowLabeledEdge {...(props as FlowLabeledEdgeProps)} />,
    }),
    []
  )

  // Card B: FlowHandle 连接数限额与 ConnectionMode
  const [connLimit, setConnLimit] = useState<number>(1)
  const [connMode, setConnMode] = useState<'strict' | 'loose'>('strict')
  const [hNodes, , onHNodesChange] = useNodesState<HandleLimitNodeType>([
    {
      id: 'h-src',
      type: 'handle-limit',
      position: { x: 36, y: 58 },
      data: { title: '上游派发器 (Source)', tone: 'blue', limit: 1, isSource: true },
    },
    {
      id: 'h-t1',
      type: 'handle-limit',
      position: { x: 340, y: 20 },
      data: { title: '下游消费 A (Target)', tone: 'green', limit: 1 },
    },
    {
      id: 'h-t2',
      type: 'handle-limit',
      position: { x: 340, y: 140 },
      data: { title: '下游消费 B (Target)', tone: 'amber', limit: 1 },
    },
  ])
  const [hEdges, setHEdges, onHEdgesChange] = useEdgesState<FlowLabeledEdgeType>([
    {
      id: 'he-1',
      type: 'flow-labeled',
      source: 'h-src',
      sourceHandle: 'success',
      target: 'h-t1',
      targetHandle: 'in',
      markerEnd: { type: MarkerType.ArrowClosed, width: 15, height: 15 },
      data: { tone: 'success', label: '1/1' },
    },
  ])

  const syncedHNodes = useMemo(
    () => hNodes.map((n) => ({ ...n, data: { ...n.data, limit: connLimit } })),
    [hNodes, connLimit]
  )

  const hNodeTypes = useMemo<NodeTypes>(() => ({ 'handle-limit': HandleLimitNode }), [])

  const onHandleConnect = useCallback(
    (conn: Connection) => {
      setHEdges((eds) =>
        addEdge<FlowLabeledEdgeType>(
          {
            ...conn,
            type: 'flow-labeled',
            markerEnd: { type: MarkerType.ArrowClosed, width: 15, height: 15 },
            data: { tone: 'primary', label: 'Connected' },
          },
          eds
        )
      )
      abcToast.success('新建连线成功')
    },
    [setHEdges]
  )

  return (
    <div className="space-y-6">
      <ComponentDocPreview
        title="FlowGroupNode & FlowNodeResizer 子流程嵌套分组与拖拽缩放"
        pkg="@abc-design/flow"
        components={['FlowGroupNode', 'FlowNodeResizer']}
        description="基于 React Flow parentId + extent='parent' 的原生 Sub-Flow 分组容器节点与主题化 NodeResizer 缩放器，支持选中拖边调尺寸、保持纵横比与顶部 NodeToolbar 切色。"
        onResetKnobs={() => {
          setGroupTone('blue')
          setGroupDashed(true)
          setKeepAspect(false)
        }}
        controls={
          <>
            <KnobSegmented
              label="group.tone"
              value={groupTone}
              options={[
                { label: 'blue', value: 'blue' as const },
                { label: 'green', value: 'green' as const },
                { label: 'amber', value: 'amber' as const },
                { label: 'rose', value: 'rose' as const },
                { label: 'slate', value: 'slate' as const },
              ]}
              onChange={setGroupTone}
            />
            <KnobSwitch label="虚线边框" checked={groupDashed} onChange={setGroupDashed} />
            <KnobSwitch label="缩放锁定纵横比" checked={keepAspect} onChange={setKeepAspect} />
          </>
        }
        code={`import { FlowGroupNode, FlowNodeResizer } from '@abc-design/flow'

// 1. 注册子流分组容器节点
const nodeTypes = { 'flow-group': FlowGroupNode }
const nodes = [
  { id: 'grp', type: 'flow-group', style: { width: 420, height: 210 }, data: { title: '审批子流程', tone: '${groupTone}' } },
  { id: 'c1', parentId: 'grp', extent: 'parent', position: { x: 20, y: 80 }, data: { ... } },
]

// 2. 自定义节点内置拖拽缩放器
<FlowNodeResizer tone="${groupTone}" isVisible={selected} minWidth={170} minHeight={92} keepAspectRatio={${keepAspect}} />`}
        apiRows={[
          { prop: 'FlowGroupNode.data.tone / dashed / resizable', type: 'FlowTone / boolean / boolean', defaultValue: "'blue' / true / true", description: '分组框语义色阶、虚线样式与选中态缩放器开关' },
          { prop: 'FlowGroupNode.data.onCycleTone / onAddChild / onDelete', type: 'Callbacks', description: '传入后在选中态 ReactFlow NodeToolbar 自动渲染快捷操作按钮' },
          { prop: 'FlowNodeResizer.minWidth / minHeight / keepAspectRatio', type: 'number / number / boolean', defaultValue: '180 / 96 / false', description: '封装 ReactFlow NodeResizer 的最小尺寸与等比缩放约束' },
        ]}
      >
        <div className="h-[290px] w-full overflow-hidden rounded-xl border border-[var(--abc-border)]">
          <FlowCanvasSurface
            withProvider
            nodes={syncedSubNodes}
            edges={subEdges}
            nodeTypes={subNodeTypes}
            edgeTypes={edgeTypes}
            onNodesChange={onSubNodesChange}
            onEdgesChange={onSubEdgesChange}
            onConnect={(c) => setSubEdges((eds) => addEdge({ ...c, type: 'flow-labeled' }, eds))}
            fitView
            fitViewOptions={{ padding: 0.16 }}
          />
        </div>
      </ComponentDocPreview>

      <ComponentDocPreview
        title="FlowHandle 语义端口与连接数限额控制 (useNodeConnections)"
        pkg="@abc-design/flow"
        components={['FlowHandle']}
        description="封装 React Flow Handle + useNodeConnections：支持 5 套语义端口色、自动统计当前已连边数并在触达 connectionLimit 时自动禁用端口连线，同时兼容 Strict / Loose 双连接模式。"
        onResetKnobs={() => {
          setConnLimit(1)
          setConnMode('strict')
        }}
        controls={
          <>
            <KnobSegmented
              label="connectionLimit"
              value={connLimit}
              options={[
                { label: '上限 1 条', value: 1 },
                { label: '上限 2 条', value: 2 },
                { label: '上限 3 条', value: 3 },
              ]}
              onChange={setConnLimit}
            />
            <KnobSegmented
              label="connectionMode"
              value={connMode}
              options={[
                { label: 'Strict (源→目标)', value: 'strict' as const },
                { label: 'Loose (自由互联)', value: 'loose' as const },
              ]}
              onChange={setConnMode}
            />
          </>
        }
        code={`import { FlowHandle } from '@abc-design/flow'
import { Position } from '@xyflow/react'

<FlowHandle
  id="success"
  type="source"
  position={Position.Right}
  tone="success"
  size="md"
  connectionLimit={${connLimit}}
/>`}
        apiRows={[
          { prop: 'tone', type: "'success' | 'danger' | 'warning' | 'info' | 'neutral'", defaultValue: "'neutral'", description: '端口语义色阶，自动同步亮暗主题描边' },
          { prop: 'size', type: "'sm' | 'md'", defaultValue: "'sm'", description: '端口视觉尺寸（10px / 12px）' },
          { prop: 'connectionLimit', type: 'number', description: '最大允许连接数，基于 useNodeConnections 实时拦截超限连线并置灰端口' },
        ]}
      >
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <StatusTag tone="info" size="xs" dot={false}>
              当前连线数：{hEdges.length} · 端口上限：{connLimit}（达上限时绿点自动变淡禁止拖线，调大上限即可再连 B 节点）
            </StatusTag>
          </div>
          <div className="h-[260px] w-full overflow-hidden rounded-xl border border-[var(--abc-border)]">
            <FlowCanvasSurface
              withProvider
              nodes={syncedHNodes}
              edges={hEdges}
              nodeTypes={hNodeTypes}
              edgeTypes={edgeTypes}
              onNodesChange={onHNodesChange}
              onEdgesChange={onHEdgesChange}
              onConnect={onHandleConnect}
              connectionMode={connMode === 'loose' ? ConnectionMode.Loose : ConnectionMode.Strict}
              fitView
              fitViewOptions={{ padding: 0.22 }}
            />
          </div>
        </div>
      </ComponentDocPreview>
    </div>
  )
}
