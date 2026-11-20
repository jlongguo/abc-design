import React, { useMemo, useState } from 'react'
import {
  FlowCanvasSurface,
  FlowHandle,
  FlowLabeledEdge,
  FlowNodeCard,
  FlowViewportControls,
  type FlowEdgeRouteStyle,
  type FlowInteractionMode,
  type FlowLabeledEdgeProps,
  type FlowLabeledEdgeType,
} from '@abc-design/flow'
import { Button, abcToast } from '@abc-design/react'
import {
  MarkerType,
  Position,
  type EdgeTypes,
  type Node,
  type NodeProps,
  type NodeTypes,
} from '@xyflow/react'
import { BookOpen, Globe, StickyNote, Trash2 } from 'lucide-react'
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
    width={204}
    inputHandle={<FlowHandle type="target" position={Position.Left} tone="info" />}
    metaRows={[{ label: 'Target', value: data.meta }]}
    outputs={
      data.hasOutputs
        ? [
            {
              id: 'success',
              label: 'Success',
              tone: 'success',
              handle: <FlowHandle id="success" type="source" position={Position.Right} tone="success" />,
            },
            {
              id: 'else',
              label: 'Else',
              tone: 'danger',
              handle: <FlowHandle id="else" type="source" position={Position.Right} tone="danger" />,
            },
          ]
        : [
            {
              id: 'next',
              label: 'Next',
              tone: 'neutral',
              handle: <FlowHandle id="next" type="source" position={Position.Right} tone="neutral" />,
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
  // FlowLabeledEdge knobs
  const [routeStyle, setRouteStyle] = useState<FlowEdgeRouteStyle>('bezier')
  const [markerMode, setMarkerMode] = useState<'arrowclosed' | 'arrow' | 'none'>('arrowclosed')
  const [animated, setAnimated] = useState(true)
  const [dashed, setDashed] = useState(false)

  // FlowViewportControls knobs
  const [zoomPercent, setZoomPercent] = useState(100)
  const [showMiniMap, setShowMiniMap] = useState(false)
  const [interactionMode, setInteractionMode] = useState<FlowInteractionMode>('pan')
  const [interactive, setInteractive] = useState(true)
  const [snapToGrid, setSnapToGrid] = useState(true)
  const [canUndo, setCanUndo] = useState(true)
  const [canRedo, setCanRedo] = useState(false)

  const resolvedMarker =
    markerMode === 'none'
      ? undefined
      : {
          type: markerMode === 'arrow' ? MarkerType.Arrow : MarkerType.ArrowClosed,
          width: 16,
          height: 16,
        }

  const demoEdges = useMemo<FlowLabeledEdgeType[]>(
    () => [
      {
        id: 'e-found',
        type: 'flow-labeled',
        source: 'kb',
        sourceHandle: 'success',
        target: 'reply',
        markerEnd: resolvedMarker,
        data: {
          tone: 'success',
          label: 'Found',
          routeStyle,
          animated,
          dashed,
          showActionTrigger: true,
          actionAriaLabel: '在命中分支插入节点',
          renderToolbar: (edgeId) => (
            <div className="flex items-center gap-1 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 py-0.5 shadow-md">
              <Button size="xs" variant="ghost" onClick={() => abcToast.info(`选中连线工具条：${edgeId}`)}>
                <Trash2 size={11} /> 删除连线
              </Button>
            </div>
          ),
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
        markerEnd: resolvedMarker,
        data: {
          tone: 'warning',
          label: 'Else',
          dashed: true,
          routeStyle,
          animated,
        },
      },
    ],
    [animated, dashed, resolvedMarker, routeStyle],
  )

  return (
    <div className="space-y-6">
      <ComponentDocPreview
        title="FlowLabeledEdge 五态曲线、箭头 Marker 与选中 EdgeToolbar 连线"
        pkg="@abc-design/flow"
        components={['FlowLabeledEdge']}
        description="完整支持 React Flow 五大路径算法（bezier / smoothstep / step / straight / simplebezier）、反向回环避障、Arrow/ArrowClosed 箭头、6 套语义色阶、流光动画、中点 [+] 菜单与选中态 EdgeToolbar。"
        onResetKnobs={() => {
          setRouteStyle('bezier')
          setMarkerMode('arrowclosed')
          setAnimated(true)
          setDashed(false)
        }}
        controls={
          <>
            <KnobSegmented
              label="routeStyle"
              value={routeStyle}
              options={[
                { label: 'bezier', value: 'bezier' as const },
                { label: 'smoothstep', value: 'smoothstep' as const },
                { label: 'step', value: 'step' as const },
                { label: 'straight', value: 'straight' as const },
                { label: 'simplebezier', value: 'simplebezier' as const },
              ]}
              onChange={setRouteStyle}
            />
            <KnobSegmented
              label="markerEnd"
              value={markerMode}
              options={[
                { label: 'ArrowClosed', value: 'arrowclosed' as const },
                { label: 'Arrow', value: 'arrow' as const },
                { label: '无箭头', value: 'none' as const },
              ]}
              onChange={setMarkerMode}
            />
            <KnobSwitch label="流光动画" checked={animated} onChange={setAnimated} />
            <KnobSwitch label="虚线样式" checked={dashed} onChange={setDashed} />
          </>
        }
        code={`import { FlowLabeledEdge, type FlowLabeledEdgeProps } from '@abc-design/flow'
import { MarkerType } from '@xyflow/react'

const edge = {
  id: 'e-found',
  type: 'flow-labeled',
  source: 'kb',
  target: 'reply',${markerMode !== 'none' ? `\n  markerEnd: { type: MarkerType.${markerMode === 'arrow' ? 'Arrow' : 'ArrowClosed'} },` : ''}
  data: { tone: 'success', label: 'Found', routeStyle: '${routeStyle}', animated: ${animated}, dashed: ${dashed} },
}`}
        apiRows={[
          { prop: 'data.routeStyle', type: "'bezier' | 'smoothstep' | 'step' | 'straight' | 'simplebezier'", defaultValue: "'bezier'", description: '覆盖 React Flow 全部五种曲线路径算法；反向回环可自动切圆角正交避障' },
          { prop: 'data.tone / animated / dashed', type: 'FlowEdgeTone / boolean / boolean', defaultValue: "'default' / false / false", description: '6 套语义色阶、流光虚线动画与静态虚线控制' },
          { prop: 'data.renderToolbar', type: '(edgeId: string) => ReactNode', description: '选中该连线时通过 React Flow EdgeToolbar 渲染浮动操作条' },
          { prop: 'data.showActionTrigger / renderActionMenu', type: 'boolean / renderProp', description: '中点 [+] 按钮与可扩展菜单浮层渲染函数' },
        ]}
      >
        <div className="h-[250px] w-full overflow-hidden rounded-xl border border-[var(--abc-border)]">
          <FlowCanvasSurface
            withProvider
            nodes={DEMO_NODES}
            edges={demoEdges}
            nodeTypes={DEMO_NODE_TYPES}
            edgeTypes={DEMO_EDGE_TYPES}
            showDotsBackground
            fitView
            fitViewOptions={{ padding: 0.24 }}
          />
        </div>
      </ComponentDocPreview>

      <ComponentDocPreview
        title="FlowViewportControls 画布左下角全功能悬浮控制胶囊"
        pkg="@abc-design/flow"
        components={['FlowViewportControls']}
        description="覆盖缩放 -/%/+、平移/框选模式切换、编辑锁、网格磁吸开关、Undo/Redo 撤销重做、自适应居中、拓扑自动排版、MiniMap 开关、业务扩展槽与主行动按钮。"
        onResetKnobs={() => {
          setZoomPercent(100)
          setShowMiniMap(false)
          setInteractionMode('pan')
          setInteractive(true)
          setSnapToGrid(true)
          setCanUndo(true)
          setCanRedo(false)
        }}
        controls={
          <>
            <KnobSwitch label="可撤销 (canUndo)" checked={canUndo} onChange={setCanUndo} />
            <KnobSwitch label="可重做 (canRedo)" checked={canRedo} onChange={setCanRedo} />
            <KnobSwitch label="允许编辑 (interactive)" checked={interactive} onChange={setInteractive} />
            <KnobSwitch label="网格磁吸 (snapToGrid)" checked={snapToGrid} onChange={setSnapToGrid} />
          </>
        }
        code={`import { FlowViewportControls } from '@abc-design/flow'

<FlowViewportControls
  zoomPercent={${zoomPercent}}
  interactionMode="${interactionMode}"
  onInteractionModeChange={setInteractionMode}
  interactive={${interactive}}
  onToggleInteractive={() => setInteractive((v) => !v)}
  snapToGrid={${snapToGrid}}
  onToggleSnapToGrid={() => setSnapToGrid((v) => !v)}
  onUndo={handleUndo}
  onRedo={handleRedo}
  canUndo={${canUndo}}
  canRedo={${canRedo}}
  onZoomOut={zoomOut}
  onZoomReset={zoomReset}
  onZoomIn={zoomIn}
  onFitView={fitView}
  onAutoLayout={autoLayout}
  showMiniMap={${showMiniMap}}
  onToggleMiniMap={() => setShowMiniMap((v) => !v)}
  primaryAction={{ label: '添加步骤', onClick: handleAddStep }}
/>`}
        apiRows={[
          { prop: 'zoomPercent / onZoomOut / onZoomReset / onZoomIn', type: 'number / () => void', required: true, description: '视口缩放百分比显示与缩放回调' },
          { prop: 'interactionMode / onInteractionModeChange', type: "'pan' | 'select' / (m) => void", description: '手形拖拽平移与左键框选模式切换' },
          { prop: 'interactive / onToggleInteractive / snapToGrid / onToggleSnapToGrid', type: 'boolean / () => void', description: '画布只读编辑锁与网格磁吸对齐开关' },
          { prop: 'onUndo / onRedo / canUndo / canRedo', type: '() => void / boolean', description: '对接 useFlowHistory 的撤销与重做按钮组' },
          { prop: 'onFitView / onAutoLayout / onToggleMiniMap / extraActions / primaryAction', type: 'Callbacks / Actions', description: '居中、自动排版、缩略图开关及自定义扩展按钮槽' },
        ]}
      >
        <div className="flex flex-wrap items-center justify-center rounded-xl border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 p-6">
          <FlowViewportControls
            zoomPercent={zoomPercent}
            showMiniMap={showMiniMap}
            interactionMode={interactionMode}
            onInteractionModeChange={setInteractionMode}
            interactive={interactive}
            onToggleInteractive={() => setInteractive((v) => !v)}
            snapToGrid={snapToGrid}
            onToggleSnapToGrid={() => setSnapToGrid((v) => !v)}
            onUndo={() => abcToast.info('已触发 Undo 撤销')}
            onRedo={() => abcToast.info('已触发 Redo 重做')}
            canUndo={canUndo}
            canRedo={canRedo}
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
