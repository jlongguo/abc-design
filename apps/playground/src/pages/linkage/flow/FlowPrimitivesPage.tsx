import React from 'react'
import { PageContainer } from '@abc-design/react'
import { FloatingIconRailDemoSection } from './FloatingIconRailDemoSection'
import { FlowAdvancedInteractionsDemoSection } from './FlowAdvancedInteractionsDemoSection'
import { FlowCanvasAndEdgeDemoSection } from './FlowCanvasAndEdgeDemoSection'
import { FlowFullStudioDemoSection } from './FlowFullStudioDemoSection'
import { FlowGroupAndHandleDemoSection } from './FlowGroupAndHandleDemoSection'
import { FlowNodeAndToolbarDemoSection } from './FlowNodeAndToolbarDemoSection'
import { TemplateVariableAndSectionDemoSection } from './TemplateVariableAndSectionDemoSection'

/**
 * Flow 画布独立子包 (@abc-design/flow) 全量 React Flow v12 能力演练页
 * 收纳 21 个零业务耦合可视化流程编排组件与全套无头图谱引擎。
 */
export const FlowPrimitivesPage: React.FC = () => {
  return (
    <PageContainer
      title="@abc-design/flow 全量 React Flow 编排套件"
      subtitle="完整集成 @xyflow/react v12 全部消费级能力：双层蓝图网格、拉线到空白快捷建点、就近磁吸连线、拖入/拖出 Sub-Flow 分组、响应式计算流与动态 Handle、浮动最短边界连线、自定义 MiniMap 状态节点、多选 6 向对齐分布、⌘C/⌘V 子图克隆、核心节点防误删、Figma 触控板手势与整图 SVG 导出。"
      breadcrumbs={[{ label: '复杂联动' }, { label: 'Flow 画布套件 (@abc-design/flow)' }]}
    >
      <div className="space-y-6">
        <FlowFullStudioDemoSection />
        <FlowAdvancedInteractionsDemoSection />
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
