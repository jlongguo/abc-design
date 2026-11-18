import React, { useState } from 'react'
import {
  Button,
  HeaderColumnFilterPopover,
  MultiImageFieldControl,
  ProColumnSettingsPopover,
  ProCrudFormFieldControl,
  ProCrudFormLayout,
  ProCrudFormModal,
  ProCrudSearchForm,
  ProCrudViewModal,
  ProFloatingBatchBar,
  ProIconFieldControl,
  StatusTag,
  abcToast,
  useProForm,
  useTableSettings,
  type AbcColumn,
  type ProCrudFormField,
} from '@abc-design/react'
import { Eye, Plus, Sparkles } from 'lucide-react'
import { ComponentDocPreview } from '../../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../../components/PropKnobs'

const DEMO_FIELDS: ProCrudFormField[] = [
  { key: 'routeName', label: '网关路由名称', type: 'input', required: true, formGroup: 'left' },
  { key: 'iconName', label: '菜单矢量图标', type: 'icon', formGroup: 'right' },
  {
    key: 'envTier',
    label: '部署环境等级',
    type: 'select',
    formGroup: 'left',
    options: [
      { label: '生产主环境 (prod)', value: 'prod' },
      { label: '灰度预发 (staging)', value: 'staging' },
    ],
  },
  { key: 'snapshots', label: '巡检拓扑截图', type: 'image', formGroup: 'bottom' },
]

const DEMO_COLS: AbcColumn<any>[] = [
  { key: 'routeName', title: '网关路由名称', width: 180 },
  { key: 'iconName', title: '菜单图标', width: 120 },
  { key: 'envTier', title: '部署环境', width: 140 },
]

export const ProTableCrudModalsAndExtrasDemo: React.FC = () => {
  // Card 03: ProCrudFormModal / ProCrudViewModal / Field Controls
  const [containerMode, setContainerMode] = useState<'drawer' | 'dialog'>('drawer')
  const [layoutType, setLayoutType] = useState<'split' | 'grid'>('split')
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [viewModalOpen, setViewModalOpen] = useState(false)
  const [iconVal, setIconVal] = useState('ShieldCheck')
  const [imgsVal, setImgsVal] = useState<string>('')

  const form = useProForm<Record<string, any>>({
    defaultValues: {
      routeName: 'checkout-gateway-v2',
      iconName: 'ShieldCheck',
      envTier: 'prod',
      snapshots: '',
    },
  })

  // Card 04: ProFloatingBatchBar / ProColumnSettingsPopover / HeaderColumnFilterPopover / ProCrudSearchForm
  const [showFloatingBar, setShowFloatingBar] = useState(false)
  const [headerRegionFilter, setHeaderRegionFilter] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<Record<string, any>>({ keyword: '', tier: '' })
  const colSettings = useTableSettings('pg_standalone_col_settings_demo')

  return (
    <>
      {/* 卡片 03：ProCrudFormModal & ProCrudViewModal & 字段渲染控件 */}
      <ComponentDocPreview
        title="ProCrudFormModal / ProCrudViewModal & Schema 字段控件拆解"
        components={[
          'ProCrudFormModal',
          'ProCrudViewModal',
          'ProCrudFormLayout',
          'CrudFormLayout',
          'ProCrudFormFieldControl',
          'MultiImageFieldControl',
          'ProIconFieldControl',
        ]}
        description="当业务列表并非标准表格（如卡片墙或树视图）却希望复用 ProTable 同款 Schema 动态表单抽屉、草稿恢复横幅、只读详情框及图标/多图字段控件时，可直接按需拼装此层组件。"
        onResetKnobs={() => {
          setContainerMode('drawer')
          setLayoutType('split')
          setFormModalOpen(false)
          setViewModalOpen(false)
        }}
        controls={
          <>
            <KnobSegmented
              label="container"
              value={containerMode}
              options={[
                { label: 'drawer', value: 'drawer' },
                { label: 'dialog', value: 'dialog' },
              ]}
              onChange={setContainerMode}
            />
            <KnobSegmented
              label="formLayout"
              value={layoutType}
              options={[
                { label: 'split (五区分栏)', value: 'split' },
                { label: 'grid (双列网格)', value: 'grid' },
              ]}
              onChange={setLayoutType}
            />
          </>
        }
        code={`import { ProCrudFormModal, ProCrudViewModal, useProForm } from '@abc-design/react'

const form = useProForm({ defaultValues })

<ProCrudFormModal
  open={open}
  onClose={() => setOpen(false)}
  container="${containerMode}"
  formLayout="${layoutType}"
  formFields={fields}
  form={form}
  isEdit={false}
  currentRecord={null}
  formSubmitting={false}
  onSubmit={handleSubmit}
/>`}
        apiRows={[
          { prop: 'ProCrudFormModal.container', type: "'drawer' | 'dialog'", defaultValue: "'dialog'", description: '一键切换右侧全高抽屉或居中弹窗承载 Schema 表单' },
          { prop: 'ProCrudFormLayout.layout', type: "'grid' | 'split'", defaultValue: "'grid'", description: '支持常规网格或 top/left/right/bottom 四向分栏排版' },
          { prop: 'ProCrudViewModal', type: 'React.FC<ProCrudViewModalProps>', description: '自动按 columns/fields 渲染结构化只读详情核对视图' },
          { prop: 'ProIconFieldControl / MultiImageFieldControl', type: 'Field Control', description: '独立导出的菜单图标选择与多图列表字段适配器' },
        ]}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              size="sm"
              variant="primary"
              leftIcon={<Plus className="h-3.5 w-3.5" />}
              onClick={() => setFormModalOpen(true)}
            >
              唤起 ProCrudFormModal ({containerMode} · {layoutType})
            </Button>
            <Button
              size="sm"
              variant="secondary"
              leftIcon={<Eye className="h-3.5 w-3.5" />}
              onClick={() => setViewModalOpen(true)}
            >
              唤起 ProCrudViewModal 只读详情
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/45 p-3.5 md:grid-cols-2">
            <div className="space-y-1.5 text-xs">
              <div className="font-semibold text-[var(--abc-fg-secondary)]">
                独立字段控件：ProIconFieldControl
              </div>
              <ProIconFieldControl value={iconVal} onChange={setIconVal} />
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="font-semibold text-[var(--abc-fg-secondary)]">
                独立字段控件：MultiImageFieldControl
              </div>
              <MultiImageFieldControl value={imgsVal} onChange={setImgsVal} maxCount={3} />
            </div>
          </div>

          <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3.5">
            <div className="mb-2.5 flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--abc-fg)]">
                内联排版实时预览：ProCrudFormLayout + ProCrudFormFieldControl ({layoutType})
              </span>
              <StatusTag tone="neutral" size="xs" dot={false}>
                随上方 formLayout 切换
              </StatusTag>
            </div>
            <ProCrudFormLayout
              layout={layoutType}
              fields={DEMO_FIELDS.slice(0, 3)}
              isEdit={false}
              form={form}
              renderFormField={(f) => (
                <ProCrudFormFieldControl field={f} form={form} isEdit={false} editingRecord={null} />
              )}
            />
          </div>

          <ProCrudFormModal
            open={formModalOpen}
            onClose={() => setFormModalOpen(false)}
            container={containerMode}
            formLayout={layoutType}
            formFields={DEMO_FIELDS}
            form={form}
            columns={DEMO_COLS}
            isEdit={false}
            currentRecord={null}
            formSubmitting={false}
            onSubmit={(e) => {
              e?.preventDefault?.()
              setFormModalOpen(false)
              abcToast.success(`已保存路由：${form.getValues().routeName}`)
            }}
          />

          <ProCrudViewModal
            open={viewModalOpen}
            onClose={() => setViewModalOpen(false)}
            columns={DEMO_COLS}
            record={{
              routeName: 'checkout-gateway-v2',
              iconName: iconVal,
              envTier: 'prod',
            }}
          />
        </div>
      </ComponentDocPreview>

      {/* 卡片 04：ProFloatingBatchBar / ProColumnSettingsPopover / HeaderColumnFilterPopover / ProCrudSearchForm */}
      <ComponentDocPreview
        title="ProTable 高阶工具栏与批量悬浮子件独立拼装"
        components={[
          'ProFloatingBatchBar',
          'ProColumnSettingsPopover',
          'HeaderColumnFilterPopover',
          'ProCrudSearchForm',
          'CrudSearchForm',
        ]}
        description="将 ProTable 内部的折叠查询栏 ProCrudSearchForm、表头漏斗浮层 HeaderColumnFilterPopover、列显隐/固定/排序设置浮层 ProColumnSettingsPopover 与底部多选胶囊条 ProFloatingBatchBar 全部公开导出，供自定义数据视图按需组合。"
        onResetKnobs={() => {
          setShowFloatingBar(false)
          setHeaderRegionFilter('')
          setSearchQuery({ keyword: '', tier: '' })
          colSettings.resetSettings()
        }}
        controls={
          <KnobSwitch
            label="预览底部 ProFloatingBatchBar 悬浮栏"
            checked={showFloatingBar}
            onChange={setShowFloatingBar}
          />
        }
        code={`import {
  HeaderColumnFilterPopover,
  ProColumnSettingsPopover,
  ProCrudSearchForm,
  ProFloatingBatchBar,
} from '@abc-design/react'

<ProCrudSearchForm searchFields={searchFields} query={query} onQueryChange={update} onSearch={run} onReset={reset} />
<HeaderColumnFilterPopover title="可用区" filterType="select" filterOptions={opts} value={region} onApply={setRegion} />
<ProColumnSettingsPopover columns={cols} searchableFieldNames={new Set()} settings={settings} ... />
<ProFloatingBatchBar selectedKeys={['row_1', 'row_2']} selectedRows={rows} onClear={clear} batchActions={actions} />`}
        apiRows={[
          { prop: 'ProCrudSearchForm.searchFields', type: 'ProCrudSearchFieldItem[]', required: true, description: '超过首行容量自动收纳展开的响应式多字段查询表单' },
          { prop: 'HeaderColumnFilterPopover', type: 'React.FC<HeaderColumnFilterPopoverProps>', description: '挂载在自定义表头单元格右侧的轻量筛选气泡' },
          { prop: 'ProColumnSettingsPopover', type: 'React.FC<ProColumnSettingsPopoverProps>', description: '支持拖拽排顺、左右固定 Pin 与列宽数值微调的设置浮层' },
          { prop: 'ProFloatingBatchBar.selectedKeys', type: 'Array<string | number>', required: true, description: '非空时在视口底部居中浮出毛玻璃批量动作胶囊栏' },
        ]}
      >
        <div className="space-y-4">
          <ProCrudSearchForm
            searchFields={[
              { key: 'keyword', label: '节点关键字', type: 'input', placeholder: '输入网关名...' },
              {
                key: 'tier',
                label: '环境等级',
                type: 'select',
                options: [
                  { label: '生产主环境', value: 'prod' },
                  { label: '灰度预发', value: 'staging' },
                ],
              },
            ]}
            query={searchQuery}
            onQueryChange={(k, v) => setSearchQuery((prev) => ({ ...prev, [k]: v }))}
            onSearch={() => abcToast.info(`执行独立查询: ${JSON.stringify(searchQuery)}`)}
            onReset={() => setSearchQuery({ keyword: '', tier: '' })}
          />

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/50 px-3.5 py-2.5 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 font-medium text-[var(--abc-fg)]">
                <span>表头列漏斗 (HeaderColumnFilterPopover):</span>
                <HeaderColumnFilterPopover
                  title="所属可用区"
                  filterType="select"
                  filterOptions={[
                    { label: '华东-上海', value: 'sh' },
                    { label: '亚太-新加坡', value: 'sg' },
                  ]}
                  value={headerRegionFilter}
                  onApply={setHeaderRegionFilter}
                />
              </span>
              <StatusTag tone="neutral" dot={false} className="font-mono">
                列筛选值: {headerRegionFilter || '(全部)'}
              </StatusTag>
            </div>

            <div className="flex items-center gap-2">
              <ProColumnSettingsPopover
                columns={DEMO_COLS}
                searchableFieldNames={new Set(['routeName'])}
                settings={colSettings.settings}
                onToggleVisible={colSettings.toggleColumnVisible}
                onSetAllVisible={colSettings.setAllColumnsVisible}
                onSetFixed={colSettings.setColumnFixed}
                onSetWidth={colSettings.setColumnWidth}
                onSetOrder={colSettings.setColumnOrder}
                onSetSearchVisible={colSettings.setSearchFieldVisible}
                onReset={colSettings.resetSettings}
              />
              <Button
                size="xs"
                variant={showFloatingBar ? 'primary' : 'outline'}
                leftIcon={<Sparkles className="h-3 w-3" />}
                onClick={() => setShowFloatingBar((v) => !v)}
              >
                {showFloatingBar ? '收起底部批量栏' : '唤起底部批量悬浮栏'}
              </Button>
            </div>
          </div>

          <ProFloatingBatchBar
            selectedKeys={showFloatingBar ? ['TN-1001', 'TN-1002', 'TN-1003'] : []}
            selectedRows={[]}
            batchActions={[
              {
                key: 'reload',
                label: '批量热重载配置',
                variant: 'primary',
                onClick: (keys) => {
                  abcToast.success(`已向 ${keys.length} 个节点下发热重载`)
                },
              },
            ]}
            onBatchDelete={() => {
              setShowFloatingBar(false)
              abcToast.warning('已触发批量移除回调')
            }}
            onClear={() => setShowFloatingBar(false)}
          />
        </div>
      </ComponentDocPreview>
    </>
  )
}
