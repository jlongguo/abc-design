import React from 'react'
import { PageContainer } from '@abc-design/react'
import { FloatingIconRailDemoSection } from './FloatingIconRailDemoSection'
import { FlowCanvasAndEdgeDemoSection } from './FlowCanvasAndEdgeDemoSection'
import { FlowNodeAndToolbarDemoSection } from './FlowNodeAndToolbarDemoSection'
import { TemplateVariableAndSectionDemoSection } from './TemplateVariableAndSectionDemoSection'

/**
 * Flow 画布独立子包 (@abc-design/flow) 全套组件演练页
 * 收纳 8 个零业务耦合的可视化流程编排组件：
 * FloatingIconRail / FlowNodeCard / FlowNodeToolbar / TemplateVariableInput / FlowSectionFrame / FlowCanvasSurface / FlowViewportControls / FlowLabeledEdge。
 */
export const FlowPrimitivesPage: React.FC = () => {
  return (
    <PageContainer
      title="@abc-design/flow 画布原语与 ReactFlow 套件"
      subtitle="独立按需安装的可视化流程编排子包：保持 @abc-design/react 核心包洁净，提供主题化 ReactFlow 画布、语义连线、视口控制胶囊、柔和节点卡与模板变量输入器"
      breadcrumbs={[{ label: '复杂联动' }, { label: 'Flow 画布原语套件' }]}
    >
      <div className="space-y-6">
        <FlowCanvasAndEdgeDemoSection />
        <FloatingIconRailDemoSection />
        <FlowNodeAndToolbarDemoSection />
        <TemplateVariableAndSectionDemoSection />
      </div>
    </PageContainer>
  )
}

export default FlowPrimitivesPage
