import {
type AbcCheckedStrategy,
type AbcTreeFieldNames,
type AbcTreeSimpleModeConfig
} from '@abc-design/core'
import type { AbcMotionPreset } from '@abc-design/tokens'
import React from 'react'
import { type ButtonVariant } from '../../components/button/Button'
import { type PaginationProps } from '../../components/display/FeedbackStates'
import type { DialogSize } from '../../components/feedback/Dialog'
import { type SelectOption } from '../../components/form/Select'
import {
type AbcColumn,
type AbcTableExpandableConfig,
type SortDirection,
} from '../../components/table/TableCore'
import {
type ProCrudFormField,
type ProFormInstance,
type ProSchemaLike
} from '../ProCrudForm'
import {
type ProTableBatchAction
} from '../ProTableExtras'
import {
type ProCrudApiConfig,
type ProTableApiInput
} from '../useProTable'

/* ==================== 1. 搜索、表单、操作与工具栏模型定义 ==================== */


export interface ProTableFieldSchema {
  name: string
  label: string
  type?:
    | 'text'
    | 'number'
    | 'select'
    | 'treeSelect'
    | 'textarea'
    | 'switch'
    | 'date'
    | 'dateRange'
    | 'tags'
    | 'icon'
    | 'password'
    | 'image'
    | 'color'
  options?: SelectOption[]
  treeData?: Record<string, any>[]
  treeCheckable?: boolean
  treeCheckStrictly?: boolean
  showCheckedStrategy?: AbcCheckedStrategy
  selectableLeafOnly?: boolean
  fieldNames?: AbcTreeFieldNames
  treeDataSimpleMode?: boolean | AbcTreeSimpleModeConfig
  maxTagCount?: number | 'responsive'
  treeDefaultExpandAll?: boolean
  /** 下拉选择器是否启用多选模式 */
  multiple?: boolean
  placeholder?: string
  helperText?: string
  defaultValue?: any
  /** 栅格跨度（在双列表单或 4 列检索面板中可跨 2 列） */
  span?: 1 | 2
  required?: boolean
  disabled?: boolean | ((editingRecord: Record<string, any> | null) => boolean)
  /** 自定义同步校验器，返回错误提示字符串即拦截提交 */
  validator?: (value: any, allValues: Record<string, any>) => string | undefined
  hideInSearch?: boolean
  hideInForm?: boolean
}

export interface ProSearchFieldConfig {
  key: string
  label: string
  type?: 'text' | 'input' | 'number' | 'select' | 'treeSelect' | 'date' | 'datetimePicker' | 'dateRange'
  /** 关联表格列 key（用于表头筛选状态联动与高亮） */
  columnKey?: string
  placeholder?: string
  options?: SelectOption[]
  treeData?: Record<string, any>[]
  treeCheckable?: boolean
  treeCheckStrictly?: boolean
  showCheckedStrategy?: AbcCheckedStrategy
  selectableLeafOnly?: boolean
  fieldNames?: AbcTreeFieldNames
  treeDataSimpleMode?: boolean | AbcTreeSimpleModeConfig
  maxTagCount?: number | 'responsive'
  treeDefaultExpandAll?: boolean
  searchable?: boolean
  multiple?: boolean
  span?: number
  order?: number
  format?: string
  clearable?: boolean
  /** 内部标记：是否源自 ProTableFieldSchema */
  __fromFieldSchema?: boolean
}

export type SearchFieldConfig = ProSearchFieldConfig

export interface ProTableRowAction<T = Record<string, any>> {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  danger?: boolean
  permission?: string
  hidden?: (record: T) => boolean
  onClick: (record: T) => void | Promise<any>
}

export interface ProActionButtonConfig<T = Record<string, any>> {
  key: string
  label?: React.ReactNode
  icon?: React.ReactNode | string
  className?: string
  variant?: ButtonVariant
  type?: ButtonVariant
  show?: boolean | ((record: T) => boolean)
  disabled?: boolean | ((record: T) => boolean)
  title?: string | ((record: T) => string | undefined)
  permission?: string
  onClick?: (record: T) => void | Promise<any>
}

export type ActionButtonConfig<T = Record<string, any>> = ProActionButtonConfig<T>

export interface ProToolbarButtonConfig {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  variant?: ButtonVariant
  type?: ButtonVariant
  permission?: string
  onClick: () => void
}

export type ToolbarButtonConfig = ProToolbarButtonConfig

export interface ProDraftConfig {
  enabled?: boolean
  autoSave?: boolean
  autoSaveInterval?: number
  showDraftButton?: boolean
  enableVersions?: boolean
  maxVersions?: number
  showDraftList?: boolean
}

export interface ProTableRequestParams {
  current: number
  pageSize: number
  filters: Record<string, any>
  sortField?: string
  sortOrder?: SortDirection
}

export interface ProTableRequestResult<T> {
  data: T[]
  total: number
}

export const AUTO_REFRESH_INTERVALS = [
  { key: 5000, label: '5秒' },
  { key: 10000, label: '10秒' },
  { key: 30000, label: '30秒' },
  { key: 60000, label: '1分钟' },
  { key: 300000, label: '5分钟' },
]

export type ProTablePaginationConfig =
  | boolean
  | (PaginationProps & {
      mode?: 'offset' | 'cursor'
    })

export interface ProTableProps<
  T extends Record<string, any> = any,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
> {
  /** 表格标识键（用于本地持久化列宽、列序、固定列、显隐与新建表单草稿） */
  storageKey?: string
  /** storageKey 语义别名（兼容 CrudTable） */
  tableId?: string
  title?: React.ReactNode
  subTitle?: React.ReactNode
  columns: AbcColumn<T>[]
  /** 搜索与新建/编辑弹窗共用的紧凑字段定义 */
  fields?: ProTableFieldSchema[]
  /** 独立声明的检索字段列表（自动与列定义 col.search 合并并按 order 排序） */
  searchFields?: ProSearchFieldConfig[]
  /** 独立声明的弹窗表单字段列表（自动与列定义 col.form 合并并按 order 排序） */
  formFields?: ProCrudFormField<T>[]
  /** 表单外部 Schema 校验器（鸭子类型兼容 Zod safeParse / shape） */
  formSchema?: ProSchemaLike<F>
  /** 表单初始默认值 */
  defaultFormValues?: Partial<F>
  /** 表单弹窗标题配置 */
  dialogTitle?: { add?: string; edit?: string }
  /** 表单弹窗尺寸 */
  dialogSize?: DialogSize | string
  /** 表单布局形态：自适应网格 ('grid') 或五区左右分栏 ('split') */
  formLayout?: 'grid' | 'split'
  /** 草稿缓存策略配置 */
  draftConfig?: ProDraftConfig
  /** 静态数据源（纯前端模式或外层受控数据） */
  dataSource?: T[]
  /** 是否处于加载状态（支持受控外部 loading，默认在异步查询期间自驱动） */
  loading?: boolean
  /** 异步服务端查询函数 */
  request?: (params: ProTableRequestParams) => Promise<ProTableRequestResult<T>>
  /** 全生命周期 CRUD 接口集合或分页查询函数（支持 list/get/view/create/add/update/delete/export/children） */
  api?: ProCrudApiConfig<T, Q, F> | ProTableApiInput<T>
  /** 默认固定附加查询参数 */
  defaultQuery?: Partial<NoInfer<Q>>
  /** 列表加载完成回调 */
  onListLoaded?: (list: T[]) => void
  rowKey?: (NoInfer<keyof T> & string) | string | ((record: T) => string | number)
  defaultPageSize?: number
  pageSizeOptions?: number[]
  /** 是否隐藏底部分页栏 */
  hidePagination?: boolean
  /** 自定义分页器配置：传 false 隐藏底栏分页，或传具体 Pagination 配置 */
  pagination?: ProTablePaginationConfig
  /** 自定义底部分页插槽渲染函数 */
  renderPagination?: (paginationMeta: {
    current: number
    pageSize: number
    total: number
    mode: 'offset' | 'cursor'
  }) => React.ReactNode
  /** 受控单行高亮键值（与 Drawer 抽屉详情联动） */
  selectedRowKey?: string | number | null
  /** 行点击回调（单行点击唤起 Drawer 或选中） */
  onRowClick?: (record: T, event: React.MouseEvent<HTMLTableRowElement>) => void
  /** 自定义行原生属性钩子 */
  onRow?: (record: T, rowIndex: number) => React.HTMLAttributes<HTMLTableRowElement>
  /** 搜索面板展示形态：'card' 默认多维折叠卡片 | 'toolbar' 紧凑水平工具条 | 'none' 不展示搜索面板 */
  searchVariant?: 'card' | 'toolbar' | 'none'
  /** 搜索条件实时变更时的受控回调 */
  onSearchChange?: (filters: Record<string, any>) => void
  /** 点击搜索按钮或提交检索时的回调 */
  onSearchSubmit?: (filters: Record<string, any>) => void
  /** 点击重置按钮时的回调 */
  onSearchReset?: () => void
  /** 受控表头内联筛选模式（不传则组件内部自管理） */
  headerFilterMode?: boolean
  onHeaderFilterModeChange?: (enabled: boolean) => void
  /** 是否在工具栏右侧显示表头筛选模式切换按钮（外部受控 headerFilterMode 时默认隐藏以避免重复） */
  showHeaderFilterToggle?: boolean
  /** 是否启用当前数据本地前端筛选模式 */
  clientFilter?: boolean
  /** 是否在工具栏展示“前端筛选 / 接口筛选”实时切换开关 */
  showClientFilterSwitch?: boolean
  /** 搜索面板超出 3 项时初始是否自动折叠为单行（默认 true） */
  defaultSearchCollapsed?: boolean
  /** 是否在工具栏显示定时自动轮询控件 */
  autoRefresh?: boolean
  /** 细粒度自动轮询配置（兼容 CrudTable） */
  autoRefreshConfig?: {
    show?: boolean
    defaultEnabled?: boolean
    defaultInterval?: number
  }
  /** 默认轮询间隔毫秒数 */
  refetchInterval?: number
  /** 是否启用导出按钮 */
  exportable?: boolean
  /** exportable 语义别名 */
  showExport?: boolean
  /** 自定义导出回调（无 api 时接收当前可见数据行数组，传入 api 时接收清洗后的查询参数） */
  onExport?: (rowsOrQuery: any) => void | Promise<void>
  /** 是否显示导入按钮 */
  showImport?: boolean
  onImport?: () => void | Promise<void>
  /** 是否将当前页码与筛选条件双向同步至浏览器 URL 查询参数 */
  syncToUrl?: boolean
  /** 是否开启操作列“详情/查看”只读弹窗 */
  viewable?: boolean
  /** viewable 语义别名 */
  showView?: boolean
  viewTitle?: string | ((record: T) => React.ReactNode)
  viewSize?: DialogSize | string
  renderViewExtra?: (record: T) => React.ReactNode
  renderViewFooter?: (record: T, closeView: () => void) => React.ReactNode
  /** 当列配置 linkToView 为路由路径时触发的外部导航回调 */
  onNavigate?: (path: string, record?: T) => void
  /** 新建/编辑表单承载容器形态：模态弹窗 ('dialog') 或侧滑抽屉 ('drawer') */
  formContainer?: 'dialog' | 'drawer'
  /** 新建/编辑表单栅格列数（1 单列 / 2 双列并排） */
  formColumns?: 1 | 2
  /** 是否允许展示新增按钮 */
  showAdd?: boolean
  /** 新增按钮文案 */
  addButtonText?: string
  /** 是否允许展示编辑按钮 */
  showEdit?: boolean
  /** 是否允许展示删除按钮 */
  showDelete?: boolean
  /** 是否在工具栏与悬浮栏启用批量删除 */
  showBatchDelete?: boolean
  /** 操作列扩展自定义按钮（ProTable 风格） */
  rowActions?: ProTableRowAction<T>[]
  /** 操作列扩展自定义按钮（兼容 CrudTable 风格，支持覆盖内置 edit/delete、返回 Promise 自动刷新） */
  actionButtons?: ProActionButtonConfig<T>[]
  /** 操作列默认宽度 */
  actionColumnWidth?: number
  /** 操作列最多平铺按钮数，超出自动收纳至 `...` 下拉菜单 */
  maxInlineActions?: number
  /** 是否开启行多选框 */
  rowSelection?: boolean
  /** rowSelection 语义别名 */
  showRowSelection?: boolean
  /** 受控选中行主键列表 */
  selectedRowKeys?: Array<string | number>
  /** 选中行变更回调 */
  onRowSelectionChange?: (keys: Array<string | number>, rows: T[]) => void
  /** 悬浮批量操作栏扩展动作 */
  batchActions?: ProTableBatchAction<T>[]
  /** 自定义批量操作插槽 */
  renderBatchActions?: (selectedRowKeys: Array<string | number>, selectedRows: T[]) => React.ReactNode
  /** 是否开启树形层级表格渲染 */
  treeData?: boolean
  /** 展开详情子面板与树形数据配置 */
  expandable?: AbcTableExpandableConfig<T>
  /** 行拖拽重排配置 */
  sortable?: {
    enabled: boolean
    onSort: (items: T[]) => void | Promise<any>
    handle?: boolean
  }
  /** 是否展示列设置按钮（默认 true） */
  columnSettingsEnabled?: boolean
  /** 表格纵向最大高度（开启后表头吸顶内滚） */
  maxHeight?: number | string
  /** 是否根据当前视口剩余高度自动锁定表格内部纵向滚动区（使表头吸顶、底部分页常驻视口内） */
  autoFitHeight?: boolean
  /** 细粒度 CRUD 权限码绑定（ProTable 风格） */
  permissions?: {
    create?: string
    update?: string
    delete?: string
  }
  /** 细粒度 CRUD 权限码绑定（CrudTable 风格） */
  permission?: {
    add?: string
    edit?: string
    delete?: string
    batchDelete?: string
    query?: string
    export?: string
    view?: string
  }
  /** 可选自定义权限断言器（未传时默认消费 AbcProvider.permissionAdapter） */
  hasPermission?: (code?: string) => boolean
  /** 工具栏左侧附加按钮列表 */
  toolbarButtons?: ProToolbarButtonConfig[]
  /** 工具栏左侧附加节点插槽 */
  toolbarExtra?: React.ReactNode
  renderToolbarExtra?: () => React.ReactNode
  /** 页面顶部标题右侧扩展区 */
  headerExtra?: React.ReactNode
  renderExtra?: () => React.ReactNode
  /** 搜索卡片上方自定义统计或提示横幅插槽 */
  cardExtra?: React.ReactNode
  renderCardExtra?: () => React.ReactNode
  /** 搜索表单自定义扩展筛选项插槽 */
  renderSearchExtra?: (ctx: {
    query: Record<string, any>
    onQueryChange: (key: string, value: any) => void
    isSearchVisible: (columnKey: string) => boolean
  }) => React.ReactNode
  /** 表单弹窗底部扩展内容插槽 */
  renderFormExtra?: (form: ProFormInstance<any>, isEdit: boolean) => React.ReactNode
  /** 完全接管新建/编辑表单弹窗渲染 */
  renderCustomForm?: (props: {
    open: boolean
    onClose: () => void
    record: T | null
    isEdit: boolean
    onSuccess: () => void
  }) => React.ReactNode
  /** 外部命令式控制引用 */
  onRefreshRef?: React.MutableRefObject<((resetToFirstPage?: boolean) => void) | null>
  onAddWithValuesRef?: React.MutableRefObject<((values: Partial<F>) => void) | null>
  openEditRef?: React.MutableRefObject<((record: T) => void) | null>
  /** CRUD 生命周期拦截与回调钩子 */
  onAdd?: () => void
  onEdit?: (record: T) => void
  onDelete?: (record: T) => void
  onBeforeAdd?: (values: F) => boolean | F | Promise<boolean | F>
  onBeforeEdit?: (values: F, record: T) => boolean | F | Promise<boolean | F>
  onBeforeSubmit?: (
    values: F,
    isEdit: boolean,
    record: T | null
  ) => boolean | Record<string, any> | Promise<boolean | Record<string, any>>
  onBeforeDelete?: (record: T) => boolean | Promise<boolean>
  onBeforeBatchDelete?: (ids: Array<string | number>) => boolean | Promise<boolean>
  onAfterSave?: (record: any) => void
  onAfterDelete?: () => void
  onAfterBatchDelete?: () => void
  /** 表格整体交互动效规格 */
  motion?: AbcMotionPreset
  /** 右侧内联挤压式详情容器节点（通常传入 <SplitDetailPanel>） */
  splitPanel?: React.ReactNode
  /** 是否在表格右侧挤出详情容器；关闭时表格自动恢复 100% 宽度 */
  splitPanelOpen?: boolean
  /** 是否进入右侧详情沉浸全宽视图（同步隐藏搜索区与主表） */
  splitPanelExpanded?: boolean
  /** 右侧挤压容器默认宽度（数字按 px 处理，默认 480） */
  splitPanelWidth?: number | string
  splitPanelMinWidth?: number
  splitPanelMaxWidth?: number
  splitPanelResizable?: boolean
  splitPanelStorageKey?: string
  splitPanelSticky?: boolean
  /** 新建/编辑保存回调（无 api 时的轻量直连模式） */
  onSaveRecord?: (values: Record<string, any>, editingRecord: T | null) => void | Promise<void>
  /** 单行或批量删除回调（无 api 时的轻量直连模式） */
  onDeleteRecords?: (keys: Array<string | number>) => void | Promise<void>
  /** 空状态主标题 */
  emptyText?: React.ReactNode
  /** 空状态副标题描述 */
  emptyDescription?: React.ReactNode
  /** 空状态底部操作区 */
  emptyAction?: React.ReactNode
  /** 自定义空状态节点（覆盖内置 EmptyState） */
  emptyNode?: React.ReactNode
  /** 空状态重置回调 */
  onEmptyReset?: () => void
}

export const EMPTY_SERVER_FILTERS: Record<string, any> = {}

export type ProCrudTableProps<
  T extends Record<string, any> = any,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
> = ProTableProps<T, Q, F>

export function hasActiveFilterValue(val: unknown): boolean {
  if (val === undefined || val === null || val === '') return false
  if (Array.isArray(val)) return val.length > 0
  if (typeof val === 'object' && ('start' in (val as any) || 'end' in (val as any))) {
    return Boolean((val as any).start || (val as any).end)
  }
  return true
}

export function formatFilterBadgeText(field: ProSearchFieldConfig, rawVal: any): string {
  const resolveOptLabel = (optLabel: React.ReactNode, fallback: any): string =>
    typeof optLabel === 'string' || typeof optLabel === 'number'
      ? String(optLabel)
      : String(fallback ?? '')

  if (Array.isArray(rawVal)) {
    return rawVal
      .map((item) => {
        const hit = field.options?.find((o) => String(o.value) === String(item))
        return hit ? resolveOptLabel(hit.label, item) : String(item)
      })
      .join(', ')
  }
  if (rawVal && typeof rawVal === 'object' && ('start' in rawVal || 'end' in rawVal)) {
    return `${rawVal.start || '...'} ~ ${rawVal.end || '...'}`
  }
  if (field.options && field.options.length > 0) {
    const hit = field.options.find((o) => String(o.value) === String(rawVal))
    if (hit) return resolveOptLabel(hit.label, rawVal)
  }
  return String(rawVal ?? '')
}

/**
 * Schema 驱动的企业级全功能 CRUD 数据表格 (ProTable / ProCrudTable)
 * 完整统一声明式 API 引擎、响应式联动表单、列驱动搜索/详情、树表懒加载与拖拽排序
 */
