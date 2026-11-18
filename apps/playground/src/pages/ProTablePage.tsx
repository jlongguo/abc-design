import React from 'react'
import { PageContainer } from '@abc-design/react'
import { ProTableCrudModalsAndExtrasDemo } from './pro/pro-table/ProTableCrudModalsAndExtrasDemo'
import { ProTableMainShowcase } from './pro/pro-table/ProTableMainShowcase'
import { ProTableRowActionsDemo } from './pro/pro-table/ProTableRowActionsDemo'

export const ProTablePage: React.FC = () => {
  return (
    <PageContainer
      title="ProTable 全生命周期 CRUD、自适应操作列折叠与拆解子件"
      subtitle="按职责拆分为 4 组独立组件画布：全功能 ProTable 台账、操作列随宽度自适应缩略 ProRowActionsOverflow、Schema 表单弹窗与独立工具栏子件。"
      breadcrumbs={[{ label: '表格、Pro 套件与图表' }, { label: 'ProTable 与行操作折叠' }]}
    >
      <div className="space-y-6">
        <ProTableMainShowcase />
        <ProTableRowActionsDemo />
        <ProTableCrudModalsAndExtrasDemo />
      </div>
    </PageContainer>
  )
}

export default ProTablePage
