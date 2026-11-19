import React, { useMemo, useState } from 'react'
import {
  FlowCanvasSurface,
  FlowLabeledEdge,
  FlowNodeCard,
  FlowViewportControls,
  type FlowEdgeRouteStyle,
  type FlowLabeledEdgeProps,
  type FlowLabeledEdgeType,
} from '@abc-design/flow'
import { Button, abcToast } from '@abc-design/react'
import { Handle, Position, type EdgeTypes, type Node, type NodeProps, type NodeTypes } from '@xyflow/react'
import { BookOpen, Globe, StickyNote } from 'lucide-react'
import { ComponentDocPreview } from '../../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../../components/PropKnobs'

interface DemoFlowNodeData extends Record<string, unknown> {
  title: string
  tone: 'blue' | 'green' | 'amber'
  meta: string
  hasOutputs?: boolean
}

type DemoFlowNode = Node<DemoFlowNodeData, 'demo-card'>

const DemoCardNode: React.FC<NodeProps<DemoFlowNode>> = ({ data, selected }) => (
  <FlowNodeCard
    tone={data.tone}
    title={data.title}
    icon={data.tone === 'green' ? <Globe size={13} /> : <BookOpen size={13} />}
    selected={selected}
    width={210}
    inputHandle={<Handle type="target" position={Position.Left} className="!h-2.5 !w-2.5 !bg-slate-400" />}
    metaRows={[{ label: 'Target', value: data.meta }]}
    outputs={
      data.hasOutputs
        ? [
            {
              id: 'success',
              label: 'Success',
              tone: 'success',
              handle: <Handle id="success" type="source" position={Position.Right} className="!h-2.5 !w-2.5 !bg-emerald-500" />,
            },
            {
              id: 'else',
              label: 'Else',
              tone: 'danger',
              handle: <Handle id="else" type="source" position={Position.Right} className="!h-2.5 !w-2.5 !bg-rose-500" />,
            },
          ]
        : [
            {
              id: 'next',
              label: 'Next',
              tone: 'neutral',
              handle: <Handle id="next" type="source" position={Position.Right} className="!h-2.5 !w-2.5 !bg-slate-400" />,
            },
          ]
    }
  />
)

const DemoLabeledEdge: React.FC<FlowLabeledEdgeProps> = (props) => <FlowLabeledEdge {...props} />

const DEMO_NODE_TYPES: NodeTypes = { 'demo-card': DemoCardNode }
const DEMO_EDGE_TYPES: EdgeTypes = { 'flow-labeled': DemoLabeledEdge }

const DEMO_NODES: DemoFlowNode[] = [
  { id: 'kb', type: 'demo-card', position: { x: 24, y: 54 }, data: { title: 'Knowledge Lookup', tone: 'blue', meta: '{{lastUserText}}', hasOutputs: true } },
  { id: 'reply', type: 'demo-card', position: { x: 320, y: 12 }, data: { title: 'Send Reply', tone: 'green', meta: '{{kb_reply}}' } },
  { id: 'fallback', type: 'demo-card', position: { x: 320, y: 146 }, data: { title: 'Fallback Search', tone: 'amber', meta: 'Blog posts' } },
]

export const FlowCanvasAndEdgeDemoSection: React.FC = () => {
  const [showDots, setShowDots] = useState(true)
  const [showMiniMap, setShowMiniMap] = useState(false)
  const [loading, setLoading] = useState(false)
  const [zoomPercent, setZoomPercent] = useState(100)
  const [routeStyle, setRouteStyle] = useState<FlowEdgeRouteStyle>('bezier')
  const [animated, setAnimated] = useState(false)

  const demoEdges = useMemo<FlowLabeledEdgeType[]>(
    () => [
      {
        id: 'e-found',
        type: 'flow-labeled',
        source: 'kb',
        sourceHandle: 'success',
        target: 'reply',
        data: {
          tone: 'success',
          label: 'Found',
          routeStyle,
          animated,
          showActionTrigger: true,
          actionAriaLabel: '在命中分支插入节点',
          renderActionMenu: ({ close }) => (
            <div className="w-40 rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <Button
                type="button"
                variant="ghost"
                size="xs"
                onClick={() => {
                  abcToast.info('已在 Found 连线插入中间步骤')
                  close()
                }}
                className="h-7 w-full justify-start text-xs"
              >
                插入中间步骤
              </Button>
            </div>
          ),
        },
      },
      {
        id: 'e-else',
        type: 'flow-labeled',
        source: 'kb',
        sourceHandle: 'else',
        target: 'fallback',
        data: {
          tone: 'warning',
          label: 'Else',
          dashed: true,
          routeStyle,
          animated,
        },
      },
    ],
    [animated, routeStyle],
  )

  return (
    <div className="space-y-6">
      <ComponentDocPreview
        title="FlowCanvasSurface 主题化 ReactFlow 画布舞台"
        components={['FlowCanvasSurface']}
        description="独立子包 @abc-design/flow 封装的零业务 ReactFlow 容器：点阵背景、四角 Panel 插槽、按需 MiniMap 与加载遮罩。"
        controls={
          <div className="flex flex-wrap items-center gap-4">
            <KnobSwitch label="点阵背景" checked={showDots} onChange={setShowDots} />
            <KnobSwitch label="MiniMap" checked={showMiniMap} onChange={setShowMiniMap} />
            <KnobSwitch label="加载遮罩" checked={loading} onChange={setLoading} />
          </div>
        }
        code={`import { FlowCanvasSurface, FlowLabeledEdge } from '@abc-design/flow'
import '@abc-design/flow/styles.css'

<FlowCanvasSurface
  withProvider
  nodes={nodes}
  edges={edges}
  edgeTypes={{ 'flow-labeled': FlowLabeledEdge }}
  showDotsBackground
  showMiniMap={showMiniMap}
/>`}
        apiRows={[
          { prop: 'withProvider', type: 'boolean', defaultValue: 'false', description: '是否自动包裹 ReactFlowProvider（外部已包裹并调用 useReactFlow 时保持 false）' },
          { prop: 'leftRailSlot / topCenterSlot / bottomLeftSlot', type: 'ReactNode', description: '对应 ReactFlow 四角悬浮 Panel 标准布局插槽' },
          { prop: 'showDotsBackground / showMiniMap / loading', type: 'boolean', defaultValue: 'true / false / false', description: '点阵背景、按需缩略图与加载态遮罩开关' },
        ]}
      >
        <div className="h-[300px] w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <FlowCanvasSurface
            withProvider
            nodes={DEMO_NODES}
            edges={demoEdges}
            nodeTypes={DEMO_NODE_TYPES}
            edgeTypes={DEMO_EDGE_TYPES}
            showDotsBackground={showDots}
            showMiniMap={showMiniMap}
            loading={loading}
            fitView
            fitViewOptions={{ padding: 0.25 }}
          />
        </div>
      </ComponentDocPreview>

      <ComponentDocPreview
        title="FlowLabeledEdge 语义标签与中点菜单 ReactFlow 连线"
        components={['FlowLabeledEdge']}
        description="支持正向贝塞尔与反向圆角正交避障路径、6 套语义色阶、流动动画徽章以及点击中点 [+] 弹出的自定义菜单插槽。"
        controls={
          <div className="flex flex-wrap items-center gap-4">
            <KnobSwitch label="流光动画" checked={animated} onChange={setAnimated} />
            <KnobSegmented
              label="连线形态"
              value={routeStyle}
              options={[
                { label: 'bezier', value: 'bezier' },
                { label: 'smoothstep', value: 'smoothstep' },
              ]}
              onChange={setRouteStyle}
            />
          </div>
        }
        code={`import { FlowLabeledEdge, type FlowLabeledEdgeProps } from '@abc-design/flow'

const CustomEdge = (props: FlowLabeledEdgeProps) => <FlowLabeledEdge {...props} />`}
        apiRows={[
          { prop: 'data.tone', type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'muted'", defaultValue: "'default'", description: '连线与中点徽章的语义色阶' },
          { prop: 'data.routeStyle', type: "'bezier' | 'smoothstep'", defaultValue: "'bezier'", description: '曲线形态；目标位于源左侧时自动切换圆角正交避障路径' },
          { prop: 'data.label / showActionTrigger / renderActionMenu', type: 'string / boolean / renderProp', description: '中点短标签与可扩展的 [+] 菜单浮层渲染函数' },
        ]}
      >
        <div className="h-[240px] w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <FlowCanvasSurface
            withProvider
            nodes={DEMO_NODES}
            edges={demoEdges}
            nodeTypes={DEMO_NODE_TYPES}
            edgeTypes={DEMO_EDGE_TYPES}
            showDotsBackground
            fitView
            fitViewOptions={{ padding: 0.25 }}
          />
        </div>
      </ComponentDocPreview>

      <ComponentDocPreview
        title="FlowViewportControls 画布左下角极简悬浮视口控制胶囊"
        components={['FlowViewportControls']}
        description="轻量胶囊式视口操控条：内置缩放 - / % / +、自适应居中、一键排版、按需 MiniMap 开关、业务扩展图标槽与主行动按钮。"
        code={`import { FlowViewportControls } from '@abc-design/flow'

<FlowViewportControls
  zoomPercent={zoomPercent}
  showMiniMap={showMiniMap}
  onZoomOut={() => setZoomPercent((z) => Math.max(40, z - 10))}
  onZoomReset={() => setZoomPercent(100)}
  onZoomIn={() => setZoomPercent((z) => Math.min(200, z + 10))}
  onFitView={handleFitView}
  onAutoLayout={handleAutoLayout}
  onToggleMiniMap={() => setShowMiniMap((v) => !v)}
  primaryAction={{ label: '添加步骤', onClick: handleAddStep }}
/>`}
        apiRows={[
          { prop: 'zoomPercent', type: 'number', required: true, description: '当前视口缩放百分比（如 100）' },
          { prop: 'onZoomOut / onZoomReset / onZoomIn', type: '() => void', required: true, description: '缩放与 100% 重置回调' },
          { prop: 'onFitView / onAutoLayout / onToggleMiniMap', type: '() => void', description: '按需开启居中、整理与 MiniMap 开关按钮' },
          { prop: 'extraActions / primaryAction', type: 'FlowViewportControlAction[] / PrimaryAction', description: '零耦合扩展图标项与右侧主行动按钮' },
        ]}
      >
        <div className="flex flex-wrap items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-6 dark:border-slate-700 dark:bg-slate-900/50">
          <FlowViewportControls
            zoomPercent={zoomPercent}
            showMiniMap={showMiniMap}
            onZoomOut={() => setZoomPercent((z) => Math.max(40, z - 10))}
            onZoomReset={() => setZoomPercent(100)}
            onZoomIn={() => setZoomPercent((z) => Math.min(200, z + 10))}
            onFitView={() => abcToast.info('已触发自适应居中视口')}
            onAutoLayout={() => abcToast.info('已触发一键整理排版')}
            onToggleMiniMap={() => setShowMiniMap((v) => !v)}
            extraActions={[
              {
                key: 'sticky',
                icon: <StickyNote size={13} />,
                label: '添加画布便签',
                onClick: () => abcToast.info('已添加分组注释框'),
              },
            ]}
            primaryAction={{
              label: '添加步骤',
              onClick: () => abcToast.success('已添加新节点'),
            }}
          />
        </div>
      </ComponentDocPreview>
    </div>
  )
}
