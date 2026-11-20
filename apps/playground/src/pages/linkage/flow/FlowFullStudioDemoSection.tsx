import React, { useState } from 'react'
import type {
  FlowBackgroundStyle,
  FlowEdgeRouteStyle,
  FlowLayoutDirection,
} from '@abc-design/flow'
import { ReactFlowProvider } from '@xyflow/react'
import { ComponentDocPreview } from '../../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../../components/PropKnobs'
import { FlowStudioCanvas } from './FlowStudioCanvas'

export const FlowFullStudioDemoSection: React.FC = () => {
  const [bgVariant, setBgVariant] = useState<FlowBackgroundStyle>('dots')
  const [routeStyle, setRouteStyle] = useState<FlowEdgeRouteStyle>('bezier')
  const [layoutDir, setLayoutDir] = useState<FlowLayoutDirection>('LR')
  const [animatedEdges, setAnimatedEdges] = useState(false)
  const [preventCycle, setPreventCycle] = useState(true)
  const [showOrigin, setShowOrigin] = useState(true)
  const [showMiniMap, setShowMiniMap] = useState(true)

  return (
    <ComponentDocPreview
      id="comp-FlowCanvasSurface"
      title="FlowCanvasSurface 全量 React Flow v12 交互编排工作台"
      pkg="@abc-design/flow"
      components={[
        'FlowCanvasSurface',
        'FlowConnectionLine',
        'FlowContextMenu',
        'FlowViewportOverlay',
      ]}
      description="完整集成 React Flow v12 全部核心能力：多态网格背景（Dots/Lines/Cross）、左栏拖放建点、Sub-Flow 父子分组与拖拽缩放、连线拖拽预览与环路校验、边端点重连 (onReconnect)、EdgeToolbar/NodeToolbar、右键上下文菜单、磁吸对齐参考线 (ViewportPortal)、四向拓扑自动排版 (layoutFlowGraph)、Undo/Redo 历史栈与 JSON 快照导出还原。"
      onResetKnobs={() => {
        setBgVariant('dots')
        setRouteStyle('bezier')
        setLayoutDir('LR')
        setAnimatedEdges(false)
        setPreventCycle(true)
        setShowOrigin(true)
        setShowMiniMap(true)
      }}
      controls={
        <>
          <KnobSegmented
            label="backgroundVariant"
            value={bgVariant}
            options={[
              { label: 'dots', value: 'dots' as const },
              { label: 'lines', value: 'lines' as const },
              { label: 'cross', value: 'cross' as const },
              { label: 'none', value: 'none' as const },
            ]}
            onChange={setBgVariant}
          />
          <KnobSegmented
            label="edgeStyle"
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
            label="autoLayout方向"
            value={layoutDir}
            options={[
              { label: 'LR', value: 'LR' as const },
              { label: 'TB', value: 'TB' as const },
              { label: 'RL', value: 'RL' as const },
              { label: 'BT', value: 'BT' as const },
            ]}
            onChange={setLayoutDir}
          />
          <KnobSwitch label="流光连线" checked={animatedEdges} onChange={setAnimatedEdges} />
          <KnobSwitch label="DAG 防环校验" checked={preventCycle} onChange={setPreventCycle} />
          <KnobSwitch label="世界坐标原点" checked={showOrigin} onChange={setShowOrigin} />
          <KnobSwitch label="MiniMap" checked={showMiniMap} onChange={setShowMiniMap} />
        </>
      }
      code={`import {
  FlowCanvasSurface, FlowConnectionLine, FlowContextMenu, FlowGroupNode,
  FlowHandle, FlowLabeledEdge, FlowViewportControls, FlowViewportOverlay,
  layoutFlowGraph, useFlowHistory, hasFlowCycle, computeFlowHelperLines,
} from '@abc-design/flow'

<FlowCanvasSurface
  backgroundVariant="${bgVariant}"
  interactionMode={interactionMode}
  interactive={interactive}
  snapToGrid
  showMiniMap={${showMiniMap}}
  connectionLineComponent={FlowConnectionLine}
  isValidConnection={(conn) => !hasFlowCycle(edges, conn)}
  onReconnect={handleReconnect}
  helperLines={helperLines}
  overlaySlot={<FlowContextMenu open={menu.open} x={menu.x} y={menu.y} items={items} onClose={close} />}
>
  <FlowViewportOverlay showOriginBadge={${showOrigin}} />
</FlowCanvasSurface>`}
      apiRows={[
        { prop: 'FlowCanvasSurface.backgroundVariant', type: "'dots' | 'lines' | 'cross' | 'none'", defaultValue: "'dots'", description: '覆盖 ReactFlow 全系网格背景样式' },
        { prop: 'FlowCanvasSurface.interactionMode / interactive', type: "'pan' | 'select' / boolean", defaultValue: "'pan' / true", description: '一键切换手形平移 / 左键框选模式，以及只读锁定状态' },
        { prop: 'FlowConnectionLine', type: 'ConnectionLineComponent', description: '默认注入的拖拽连线预览组件，随 connectionStatus 实时反馈合法/非法色阶' },
        { prop: 'FlowContextMenu', type: 'React.FC<FlowContextMenuProps>', description: '画布 / 节点 / 连线右键上下文菜单，支持容器防溢出定位与快捷键' },
        { prop: 'FlowViewportOverlay', type: 'React.FC<FlowViewportOverlayProps>', description: '封装 ViewportPortal，绘制磁吸对齐辅助线与世界坐标系浮标' },
        { prop: 'layoutFlowGraph / useFlowHistory / hasFlowCycle', type: 'Headless Utilities & Hook', description: '四向拓扑自动排版、Undo/Redo 历史栈、环路检测与上下游血缘追踪' },
      ]}
    >
      <ReactFlowProvider>
        <FlowStudioCanvas
          bgVariant={bgVariant}
          routeStyle={routeStyle}
          animatedEdges={animatedEdges}
          layoutDir={layoutDir}
          preventCycle={preventCycle}
          showOrigin={showOrigin}
          showMiniMap={showMiniMap}
          setShowMiniMap={setShowMiniMap}
        />
      </ReactFlowProvider>
    </ComponentDocPreview>
  )
}
