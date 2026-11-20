import React from 'react'
import { PageContainer } from '@abc-design/react'
import { FloatingIconRailDemoSection } from './FloatingIconRailDemoSection'
import { FlowCanvasAndEdgeDemoSection } from './FlowCanvasAndEdgeDemoSection'
import { FlowFullStudioDemoSection } from './FlowFullStudioDemoSection'
import { FlowGroupAndHandleDemoSection } from './FlowGroupAndHandleDemoSection'
import { FlowNodeAndToolbarDemoSection } from './FlowNodeAndToolbarDemoSection'
import { TemplateVariableAndSectionDemoSection } from './TemplateVariableAndSectionDemoSection'

/**
 * Flow 画布独立子包 (@abc-design/flow) 全量 React Flow v12 能力演练页
 * 收纳 14 个零业务耦合可视化流程编排组件与无头图谱引擎：
 * FlowCanvasSurface / FlowConnectionLine / FlowContextMenu / FlowViewportOverlay /
 * FlowGroupNode / FlowNodeResizer / FlowHandle / FlowLabeledEdge / FlowViewportControls /
 * FloatingIconRail / FlowNodeCard / FlowNodeToolbar / TemplateVariableInput / FlowSectionFrame。
 */
export const FlowPrimitivesPage: React.FC = () => {
  return (
    <PageContainer
      title="@abc-design/flow 全量 React Flow 编排套件"
      subtitle="完整集成 @xyflow/react v12 全部核心能力：多态网格背景、拖放建点、Sub-Flow 父子嵌套分组与拖拽缩放、连接数限额端口、五态曲线与 EdgeToolbar、连线重连与 DAG 防环校验、右键菜单、磁吸参考线、四向拓扑自动排版与 Undo/Redo 历史栈。"
      breadcrumbs={[{ label: '复杂联动' }, { label: 'Flow 画布套件 (@abc-design/flow)' }]}
    >
      <div className="space-y-6">
        <FlowFullStudioDemoSection />
        <FlowGroupAndHandleDemoSection />
        <FlowCanvasAndEdgeDemoSection />
        <FloatingIconRailDemoSection />
        <FlowNodeAndToolbarDemoSection />
        <TemplateVariableAndSectionDemoSection />
      </div>
    </PageContainer>
  )
}

export default FlowPrimitivesPage
