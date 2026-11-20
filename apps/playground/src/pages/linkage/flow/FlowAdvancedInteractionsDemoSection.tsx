import React, { useMemo, useState } from 'react'
import {
  FLOW_MARKER_TYPE,
  FLOW_POSITION,
  FlowCanvasSurface,
  FlowFloatingEdge,
  FlowHandle,
  FlowMiniMapNode,
  FlowNodeCard,
  FlowProvider,
  useFlowEdgesState,
  useFlowNodesState,
  type FlowEdge,
  type FlowEdgeTypes,
  type FlowFloatingEdgeProps,
  type FlowFloatingEdgeRouteStyle,
  type FlowGesturePreset,
  type FlowNode,
  type FlowNodeProps,
  type FlowNodeTypes,
  type FlowTone,
} from '@abc-design/flow'
import type { MiniMapNodeProps } from '@xyflow/react'
import { Cpu, Database, Globe, Server } from 'lucide-react'
import { ComponentDocPreview } from '../../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../../components/PropKnobs'
import { FlowAdvancedInteractiveCanvas } from './FlowAdvancedInteractiveCanvas'

interface TopologyNodeData extends Record<string, unknown> {
  title: string
  subtitle: string
  tone: FlowTone
  status?: 'idle' | 'running' | 'success' | 'error'
}

type TopologyNodeType = FlowNode<TopologyNodeData, 'topology-hub'>

const TopologyHubNode: React.FC<FlowNodeProps<TopologyNodeType>> = ({ data, selected }) => {
  const icon =
    data.tone === 'blue' ? (
      <Globe size={13} />
    ) : data.tone === 'green' ? (
      <Server size={13} />
    ) : data.tone === 'rose' ? (
      <Cpu size={13} />
    ) : (
      <Database size={13} />
    )

  return (
    <FlowNodeCard
      tone={data.tone}
      title={data.title}
      subtitle={data.subtitle}
      status={data.status}
      icon={icon}
      selected={selected}
      width={172}
      inputHandle={<FlowHandle id="in" type="target" position={FLOW_POSITION.Left} tone="info" />}
      outputs={[
        {
          id: 'out',
          label: '关联',
          tone: 'info',
          handle: (
            <FlowHandle id="out" type="source" position={FLOW_POSITION.Right} tone="info" />
          ),
        },
      ]}
    />
  )
}

const FloatingEdgeWrapper: React.FC<FlowFloatingEdgeProps> = (props) => (
  <FlowFloatingEdge {...props} />
)

const CustomMiniMapNodePreview: React.FC<MiniMapNodeProps> = (props) => (
  <FlowMiniMapNode {...props} />
)

function buildFloatingNodes(): TopologyNodeType[] {
  return [
    {
      id: 'hub-gateway',
      type: 'topology-hub',
      position: { x: 240, y: 24 },
      data: { title: 'API Gateway', subtitle: '入口路由', tone: 'blue', status: 'running' },
    },
    {
      id: 'hub-auth',
      type: 'topology-hub',
      position: { x: 36, y: 150 },
      data: { title: 'Auth Enclave', subtitle: '令牌鉴权', tone: 'green', status: 'success' },
    },
    {
      id: 'hub-worker',
      type: 'topology-hub',
      position: { x: 240, y: 205 },
      data: { title: 'Runner Pool', subtitle: '沙箱执行', tone: 'rose', status: 'running' },
    },
    {
      id: 'hub-db',
      type: 'topology-hub',
      position: { x: 454, y: 145 },
      data: { title: 'Artifact S3', subtitle: '产物存储', tone: 'amber', status: 'error' },
    },
  ]
}

function buildFloatingEdges(routeStyle: FlowFloatingEdgeRouteStyle, animated: boolean): FlowEdge[] {
  return [
    {
      id: 'fe-1',
      source: 'hub-gateway',
      target: 'hub-auth',
      type: 'flow-floating',
      markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
      data: { label: 'JWT 校验', tone: 'primary', routeStyle, animated },
    },
    {
      id: 'fe-2',
      source: 'hub-gateway',
      target: 'hub-worker',
      type: 'flow-floating',
      markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
      data: { label: '任务派发', tone: 'success', routeStyle, animated },
    },
    {
      id: 'fe-3',
      source: 'hub-worker',
      target: 'hub-db',
      type: 'flow-floating',
      markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
      data: { label: '写产物', tone: 'warning', routeStyle, animated },
    },
    {
      id: 'fe-4',
      source: 'hub-gateway',
      target: 'hub-db',
      type: 'flow-floating',
      markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
      data: { label: '直读缓存', tone: 'default', routeStyle, dashed: true },
    },
  ]
}

const FloatingTopologyCanvas: React.FC<{
  routeStyle: FlowFloatingEdgeRouteStyle
  animated: boolean
}> = ({ routeStyle, animated }) => {
  const [nodes, , onNodesChange] = useFlowNodesState<TopologyNodeType>(buildFloatingNodes())
  const [edges, setEdges, onEdgesChange] = useFlowEdgesState<FlowEdge>(
    buildFloatingEdges(routeStyle, animated)
  )

  React.useEffect(() => {
    setEdges(buildFloatingEdges(routeStyle, animated))
  }, [routeStyle, animated, setEdges])

  const nodeTypes = useMemo<FlowNodeTypes>(
    () => ({ 'topology-hub': TopologyHubNode }) as unknown as FlowNodeTypes,
    []
  )
  const edgeTypes = useMemo<FlowEdgeTypes>(
    () => ({ 'flow-floating': FloatingEdgeWrapper }) as unknown as FlowEdgeTypes,
    []
  )

  return (
    <div className="space-y-3">
      <div className="h-[340px] w-full">
        <FlowCanvasSurface
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          backgroundVariant="dots"
          secondaryBackground={{ variant: 'lines', gap: 96 }}
          showMiniMap
          enhancedMiniMap
          miniMapProps={{ nodeComponent: CustomMiniMapNodePreview }}
        />
      </div>
      {/* MiniMap 自定义节点状态放大图例（直观展示 FlowMiniMapNode 的圆角、状态点与选中环） */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs text-[var(--abc-fg-secondary)]">
        <span className="font-medium text-[var(--abc-fg)]">
          FlowMiniMapNode 状态预览图例（自由拖动上方 4 个节点观察浮动连线沿边框滑移）
        </span>
        <svg width="236" height="32" viewBox="0 0 236 32" aria-label="FlowMiniMapNode 图例">
          <CustomMiniMapNodePreview
            id="demo-running"
            className=""
            x={4}
            y={5}
            width={50}
            height={22}
            color="var(--abc-primary)"
            strokeColor="var(--abc-primary)"
            strokeWidth={1.5}
            borderRadius={6}
            shapeRendering="auto"
            selected
          />
          <CustomMiniMapNodePreview
            id="demo-success"
            className=""
            x={64}
            y={5}
            width={50}
            height={22}
            color="#22c55e"
            strokeColor="#16a34a"
            strokeWidth={1}
            borderRadius={6}
            shapeRendering="auto"
            selected={false}
          />
          <CustomMiniMapNodePreview
            id="demo-warn"
            className=""
            x={124}
            y={5}
            width={50}
            height={22}
            color="#f59e0b"
            strokeColor="#d97706"
            strokeWidth={1}
            borderRadius={6}
            shapeRendering="auto"
            selected={false}
          />
          <CustomMiniMapNodePreview
            id="demo-err"
            className=""
            x={184}
            y={5}
            width={48}
            height={22}
            color="#ef4444"
            strokeColor="#dc2626"
            strokeWidth={1}
            borderRadius={6}
            shapeRendering="auto"
            selected={false}
          />
        </svg>
      </div>
    </div>
  )
}

export const FlowAdvancedInteractionsDemoSection: React.FC = () => {
  const [gesturePreset, setGesturePreset] = useState<FlowGesturePreset>('default')
  const [dualGrid, setDualGrid] = useState(true)
  const [proximityEnabled, setProximityEnabled] = useState(true)
  const [looseMode, setLooseMode] = useState(false)
  const [onlyRenderVisible, setOnlyRenderVisible] = useState(false)

  const [floatingStyle, setFloatingStyle] = useState<FlowFloatingEdgeRouteStyle>('bezier')
  const [floatingAnimated, setFloatingAnimated] = useState(true)

  return (
    <>
      <ComponentDocPreview
        id="comp-FlowQuickConnectMenu"
        title="高阶交互编排：空白建点、磁吸连线、响应式计算流、多选对齐与内嵌交互隔离"
        pkg="@abc-design/flow"
        components={[
          'FlowQuickConnectMenu',
          'FlowAlignmentToolbar',
          'FlowInteractiveZone',
          'FlowCornerResizer',
        ]}
        description="一站式展示 React Flow v12 全部消费级高阶能力：拖端口至空白松手呼出 FlowQuickConnectMenu、节点靠近 Proximity Connect 磁吸直连、拖入/拖出 Sub-Flow 分组、useFlowComputing 实时上游计算 + useUpdateNodeInternals 动态加减端口、FlowInteractiveZone 隔离节点内表单、FlowCornerResizer 单角缩放、多选 FlowAlignmentToolbar 6 向对齐/等距分布、⌘C/⌘V 子图克隆、onBeforeDelete 核心节点拦截与 SVG 导出。"
        onResetKnobs={() => {
          setGesturePreset('default')
          setDualGrid(true)
          setProximityEnabled(true)
          setLooseMode(false)
          setOnlyRenderVisible(false)
        }}
        controls={
          <>
            <KnobSegmented
              label="手势预设"
              value={gesturePreset}
              options={[
                { label: '默认滚轮缩放', value: 'default' as const },
                { label: 'Figma 触控板', value: 'figma' as const },
              ]}
              onChange={setGesturePreset}
            />
            <KnobSwitch label="双层蓝图网格" checked={dualGrid} onChange={setDualGrid} />
            <KnobSwitch label="就近磁吸连线" checked={proximityEnabled} onChange={setProximityEnabled} />
            <KnobSwitch label="Loose 宽松连线" checked={looseMode} onChange={setLooseMode} />
            <KnobSwitch
              label="可视区虚拟化"
              checked={onlyRenderVisible}
              onChange={setOnlyRenderVisible}
            />
          </>
        }
        code={`import {
  FlowProvider, FlowCanvasSurface, FlowQuickConnectMenu, FlowAlignmentToolbar,
  FlowInteractiveZone, FlowCornerResizer, useFlowDropToConnect, useFlowComputing,
  useFlowClipboard, useFlowViewportFocus, alignFlowNodes, computeProximityEdge,
} from '@abc-design/flow'

<FlowProvider>
  <FlowCanvasSurface
    gesturePreset="${gesturePreset}"
    secondaryBackground={${dualGrid ? "{ variant: 'lines', gap: 96 }" : 'false'}}
    connectOnClick
    onConnectEnd={dropToConnect.handleConnectEnd}
    bottomCenterSlot={<FlowAlignmentToolbar selectedCount={selectedIds.length} onAlign={handleAlign} />}
    overlaySlot={<FlowQuickConnectMenu open={Boolean(pending)} items={catalog} onSelect={createNode} />}
  />
</FlowProvider>`}
        apiRows={[
          { prop: 'FlowQuickConnectMenu', type: 'React.FC<FlowQuickConnectMenuProps>', description: '配合 useFlowDropToConnect：拉线至空白处松手呼出可搜索、键盘导航的快捷建点菜单' },
          { prop: 'FlowAlignmentToolbar', type: 'React.FC<FlowAlignmentToolbarProps>', description: '多选 ≥2 节点时自动浮现的 6 向对齐、水平/垂直等距分布、克隆与批量删除工具栏' },
          { prop: 'FlowInteractiveZone', type: 'React.FC<FlowInteractiveZoneProps>', description: '自动注入 nodrag/nowheel/nopan 与防缩放属性，保护节点内表单、下拉与代码框交互' },
          { prop: 'FlowCornerResizer', type: 'React.FC<FlowCornerResizerProps>', description: '基于 NodeResizeControl 的右下角精致单角缩放手柄（适合便签、媒体与注释节点）' },
          { prop: 'useFlowComputing / useFlowClipboard', type: 'React Hooks', description: '响应式上游数据计算、动态 Handle 坐标刷新 (useUpdateNodeInternals) 与 ⌘C/⌘V 子图克隆' },
        ]}
      >
        <FlowProvider>
          <FlowAdvancedInteractiveCanvas
            gesturePreset={gesturePreset}
            dualGrid={dualGrid}
            proximityEnabled={proximityEnabled}
            looseMode={looseMode}
            onlyRenderVisible={onlyRenderVisible}
          />
        </FlowProvider>
      </ComponentDocPreview>

      <ComponentDocPreview
        id="comp-FlowFloatingEdge"
        title="FlowFloatingEdge 浮动最短边界连线 & FlowMiniMapNode 定制缩略图节点"
        pkg="@abc-design/flow"
        components={['FlowFloatingEdge', 'FlowMiniMapNode']}
        description="FlowFloatingEdge 基于 useInternalNode 动态计算两节点矩形外框交点，拖动任意节点时连线沿边框 360° 丝滑滑移并附带原生 SVG EdgeText 标签；FlowMiniMapNode 为缩略图提供语义圆角、状态色点与选中外环。"
        onResetKnobs={() => {
          setFloatingStyle('bezier')
          setFloatingAnimated(true)
        }}
        controls={
          <>
            <KnobSegmented
              label="routeStyle"
              value={floatingStyle}
              options={[
                { label: 'bezier', value: 'bezier' as const },
                { label: 'straight', value: 'straight' as const },
                { label: 'smoothstep', value: 'smoothstep' as const },
              ]}
              onChange={setFloatingStyle}
            />
            <KnobSwitch label="流光虚线" checked={floatingAnimated} onChange={setFloatingAnimated} />
          </>
        }
        code={`import { FlowProvider, FlowCanvasSurface, FlowFloatingEdge, FlowMiniMapNode } from '@abc-design/flow'

<FlowProvider>
  <FlowCanvasSurface
    nodes={nodes}
    edges={edges}
    edgeTypes={{ 'flow-floating': FlowFloatingEdge }}
    showMiniMap
    enhancedMiniMap
    miniMapProps={{ nodeComponent: FlowMiniMapNode }}
  />
</FlowProvider>`}
        apiRows={[
          { prop: 'FlowFloatingEdge', type: 'EdgeComponent<FlowFloatingEdgeType>', description: '基于 useInternalNode 计算矩形交点的浮动最短边界连线，内置原生 SVG EdgeText 标签' },
          { prop: 'FlowMiniMapNode', type: 'React.FC<MiniMapNodeProps>', description: 'ReactFlow MiniMap 自定义节点渲染器，支持运行/成功/异常状态圆点、分组虚线框与选中高亮环' },
        ]}
      >
        <FlowProvider>
          <FloatingTopologyCanvas routeStyle={floatingStyle} animated={floatingAnimated} />
        </FlowProvider>
      </ComponentDocPreview>
    </>
  )
}
