import React from 'react'
import { PageContainer } from '@abc-design/react'
import { FloatingIconRailDemoSection } from './FloatingIconRailDemoSection'
import { FlowNodeAndToolbarDemoSection } from './FlowNodeAndToolbarDemoSection'
import { TemplateVariableAndSectionDemoSection } from './TemplateVariableAndSectionDemoSection'

/**
 * Flow 画布通用原语套件演练页
 * 收纳 5 个零业务耦合的可视化流程编排基础原语（FloatingIconRail / FlowNodeCard / FlowNodeToolbar / TemplateVariableInput / FlowSectionFrame）。
 */
export const FlowPrimitivesPage: React.FC = () => {
  return (
    <PageContainer
      title="Flow 画布通用原语套件"
      subtitle="零业务耦合的可视化流程编排视觉原语：悬浮图标细条、柔和语义节点卡片、顶部微操作条、模板变量输入器与虚线分组注释框"
      breadcrumbs={[{ label: '复杂联动' }, { label: 'Flow 画布原语套件' }]}
    >
      <div className="space-y-6">
        <FloatingIconRailDemoSection />
        <FlowNodeAndToolbarDemoSection />
        <TemplateVariableAndSectionDemoSection />
      </div>
    </PageContainer>
  )
}

export default FlowPrimitivesPage
