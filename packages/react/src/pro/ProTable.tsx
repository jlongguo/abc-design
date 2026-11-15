import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { AbcMotionPreset } from '@abc-design/tokens'
import {
  cleanQueryObject,
  filterAndSortClientRows,
  readQueryFromUrlSearch,
  writeQueryToUrlSearch,
  type AbcCheckedStrategy,
  type AbcTreeFieldNames,
  type AbcTreeSimpleModeConfig,
} from '@abc-design/core'
import {
  AlignJustify,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Download,
  Edit3,
  Eye,
  Filter,
  GripVertical,
  ListFilter,
  Maximize2,
  Minimize2,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  Trash2,
  Upload,
} from 'lucide-react'
import Button, { type ButtonVariant } from '../components/button/Button'
import { Pagination, type PaginationProps } from '../components/display/FeedbackStates'
import { Dropdown, Popover, Tooltip } from '../components/display/Overlays'
import { abcConfirm } from '../components/feedback/Confirm'
import type { DialogSize } from '../components/feedback/Dialog'
import { Switch } from '../components/form/Controls'
import { DatePicker, DateRangePicker } from '../components/form/DatePicker'
import FormField from '../components/form/FormField'
import { Input, InputNumber } from '../components/form/Input'
import { Select, type SelectOption } from '../components/form/Select'
import { TreeSelect } from '../components/form/TreeSelect'
import Icon from '../components/icon/Icon'
import { Card } from '../components/surface/Card'
import TableCore, {
  type AbcColumn,
  type AbcTableExpandableConfig,
  type SortDirection,
} from '../components/table/TableCore'
import { useAbcMotion } from '../hooks'
import { useDraftStorage } from '../hooks/useDraftStorage'
import { useTableSettings, type AbcTableDensity } from '../hooks/useTableSettings'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import { useAbcPermission } from './PermissionAndDict'
import {
  ProCrudFormModal,
  ProCrudViewModal,
  resolveFieldKey,
  useProForm,
  type ProCrudFieldType,
  type ProCrudFormField,
  type ProFormInstance,
  type ProSchemaLike,
} from './ProCrudForm'
import {
  HeaderColumnFilterPopover,
  ProColumnSettingsPopover,
  ProFloatingBatchBar,
  ProRowActionsOverflow,
  downloadTableCsv,
  type ProTableBatchAction,
  type ResolvedRowActionItem,
} from './ProTableExtras'
import {
  createProTableApi,
  isProApiFailure,
  normalizeProListResponse,
  type ProCrudApiConfig,
  type ProTableApiInput,
} from './useProTable'

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

const AUTO_REFRESH_INTERVALS = [
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
  /** 新建/编辑保存回调（无 api 时的轻量直连模式） */
  onSaveRecord?: (values: Record<string, any>, editingRecord: T | null) => void | Promise<void>
  /** 单行或批量删除回调（无 api 时的轻量直连模式） */
  onDeleteRecords?: (keys: Array<string | number>) => void | Promise<void>
}

const EMPTY_SERVER_FILTERS: Record<string, any> = {}

export type ProCrudTableProps<
  T extends Record<string, any> = any,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
> = ProTableProps<T, Q, F>

function hasActiveFilterValue(val: unknown): boolean {
  if (val === undefined || val === null || val === '') return false
  if (Array.isArray(val)) return val.length > 0
  if (typeof val === 'object' && ('start' in (val as any) || 'end' in (val as any))) {
    return Boolean((val as any).start || (val as any).end)
  }
  return true
}

function formatFilterBadgeText(field: ProSearchFieldConfig, rawVal: any): string {
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
export function ProTable<
  T extends Record<string, any> = any,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
>({
  storageKey: propStorageKey,
  tableId,
  title,
  subTitle,
  columns,
  fields = [],
  searchFields: propSearchFields,
  formFields: propFormFields,
  formSchema,
  defaultFormValues,
  dialogTitle,
  dialogSize,
  formLayout = 'grid',
  draftConfig,
  dataSource,
  loading: propLoading,
  request,
  api: apiProp,
  defaultQuery,
  onListLoaded,
  rowKey = 'id',
  defaultPageSize = 10,
  pageSizeOptions,
  hidePagination = false,
  pagination,
  renderPagination,
  selectedRowKey,
  onRowClick,
  onRow,
  searchVariant = 'card',
  onSearchChange,
  onSearchSubmit,
  onSearchReset,
  headerFilterMode: controlledHeaderFilterMode,
  onHeaderFilterModeChange,
  showHeaderFilterToggle: propShowHeaderFilterToggle,
  clientFilter: initialClientFilter,
  showClientFilterSwitch,
  defaultSearchCollapsed = true,
  autoRefresh,
  autoRefreshConfig,
  refetchInterval,
  exportable,
  showExport,
  onExport,
  showImport = false,
  onImport,
  syncToUrl = false,
  viewable,
  showView,
  viewTitle,
  viewSize = 'lg',
  renderViewExtra,
  renderViewFooter,
  onNavigate,
  formContainer = 'dialog',
  formColumns,
  showAdd,
  addButtonText,
  showEdit,
  showDelete,
  showBatchDelete,
  rowActions = [],
  actionButtons = [],
  actionColumnWidth,
  maxInlineActions,
  rowSelection,
  showRowSelection,
  selectedRowKeys: controlledSelectedRowKeys,
  onRowSelectionChange,
  batchActions = [],
  renderBatchActions,
  treeData = false,
  expandable,
  sortable,
  columnSettingsEnabled = true,
  maxHeight,
  autoFitHeight = false,
  permissions,
  permission,
  hasPermission: customHasPermission,
  toolbarButtons = [],
  toolbarExtra,
  renderToolbarExtra,
  headerExtra,
  renderExtra,
  cardExtra,
  renderCardExtra,
  renderSearchExtra,
  renderFormExtra,
  renderCustomForm,
  onRefreshRef,
  onAddWithValuesRef,
  openEditRef,
  onAdd,
  onEdit,
  onDelete,
  onBeforeAdd,
  onBeforeEdit,
  onBeforeSubmit,
  onBeforeDelete,
  onBeforeBatchDelete,
  onAfterSave,
  onAfterDelete,
  onAfterBatchDelete,
  motion,
  onSaveRecord,
  onDeleteRecords,
}: ProTableProps<T, Q, F>) {
  const storageKey = propStorageKey ?? tableId
  const { toast } = useAbcConfig()
  const resolvedMotion = useAbcMotion(motion)
  const { hasPermission: abcHasPermission } = useAbcPermission()

  const checkPermission = useCallback(
    (code?: string): boolean => {
      if (!code) return true
      return customHasPermission ? customHasPermission(code) : abcHasPermission(code)
    },
    [customHasPermission, abcHasPermission]
  )

  const resolvedApi = useMemo<ProCrudApiConfig<T, Q, F> | undefined>(() => {
    if (!apiProp) return undefined
    if (typeof apiProp === 'function') {
      return createProTableApi<T>(apiProp) as ProCrudApiConfig<T, Q, F>
    }
    return apiProp
  }, [apiProp])

  const apiRef = useRef(resolvedApi)
  apiRef.current = resolvedApi
  const onListLoadedRef = useRef(onListLoaded)
  onListLoadedRef.current = onListLoaded

  const defaultHiddenKeys = useMemo(
    () => columns.filter((c) => c.visible === false).map((c) => c.key),
    [columns]
  )

  const {
    settings,
    toggleColumnVisible,
    setAllColumnsVisible,
    setColumnFixed,
    setColumnWidth,
    setColumnOrder,
    setSearchFieldVisible,
    setDensity,
    setFilterHighlightColor,
    resetSettings,
  } = useTableSettings(columnSettingsEnabled ? storageKey : undefined, 'default', defaultHiddenKeys)

  const hasRemoteSource = Boolean(request || resolvedApi?.list)

  const initialUrlParams = useMemo(() => {
    if (!syncToUrl || typeof window === 'undefined') return {}
    return readQueryFromUrlSearch(window.location.search)
  }, [syncToUrl])

  const [isClientFilter, setIsClientFilter] = useState<boolean>(
    () => initialClientFilter ?? !hasRemoteSource
  )
  const [internalHeaderFilterMode, setInternalHeaderFilterMode] = useState(false)
  const headerFilterMode = controlledHeaderFilterMode ?? internalHeaderFilterMode
  const updateHeaderFilterMode = (next: boolean) => {
    if (controlledHeaderFilterMode === undefined) {
      setInternalHeaderFilterMode(next)
    }
    onHeaderFilterModeChange?.(next)
  }

  const [extraFilterCollapsed, setExtraFilterCollapsed] = useState(true)
  const [searchPanelExpanded, setSearchPanelExpanded] = useState(true)
  const [searchFieldsCollapsed, setSearchFieldsCollapsed] = useState(defaultSearchCollapsed)

  const [searchInputs, setSearchInputs] = useState<Record<string, any>>(() => {
    const { page: _p, pageSize: _ps, ...rest } = initialUrlParams
    return { ...(defaultQuery as Record<string, any>), ...rest }
  })
  const searchInputsRef = useRef(searchInputs)
  searchInputsRef.current = searchInputs

  const [appliedFilters, setAppliedFilters] = useState<Record<string, any>>(() => {
    const { page: _p, pageSize: _ps, ...rest } = initialUrlParams
    return { ...(defaultQuery as Record<string, any>), ...rest }
  })
  const [quickKeyword, setQuickKeyword] = useState('')
  const [sortState, setSortState] = useState<{ key: string; direction: SortDirection }>(() => ({
    key: String((defaultQuery as any)?.orderBy ?? ''),
    direction: ((defaultQuery as any)?.orderType as SortDirection) ?? null,
  }))

  const [current, setCurrent] = useState<number>(() => Number(initialUrlParams.page) || 1)
  const [pageSize, setPageSize] = useState<number>(
    () => Number(initialUrlParams.pageSize) || defaultPageSize
  )
  const [internalLoading, setInternalLoading] = useState(false)
  const [exporting, setExporting] = useState(false)
  const loading = propLoading !== undefined ? propLoading : internalLoading
  const [remoteRows, setRemoteRows] = useState<T[]>([])
  const [remoteTotal, setRemoteTotal] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const searchCardMeasureRef = useRef<HTMLDivElement>(null)
  const tableScrollMeasureRef = useRef<HTMLDivElement>(null)
  const paginationWrapRef = useRef<HTMLDivElement>(null)
  const [computedScrollY, setComputedScrollY] = useState<number | undefined>(undefined)

  const [internalSelectedKeys, setInternalSelectedKeys] = useState<Array<string | number>>([])
  const selectedKeys = controlledSelectedRowKeys ?? internalSelectedKeys
  const [cachedSelectedRows, setCachedSelectedRows] = useState<T[]>([])
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [autoRefreshPopoverOpen, setAutoRefreshPopoverOpen] = useState(false)

  // 树形/子表异步懒加载缓存状态
  const [childrenData, setChildrenData] = useState<Record<string | number, T[]>>({})
  const [childrenLoading, setChildrenLoading] = useState<Record<string | number, boolean>>({})
  const [childrenError, setChildrenError] = useState<Record<string | number, string>>({})

  // 自动轮询控制
  const showAutoRefreshControl =
    autoRefresh ?? (autoRefreshConfig ? autoRefreshConfig.show !== false : hasRemoteSource)
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(
    autoRefreshConfig?.defaultEnabled ?? false
  )
  const [autoRefreshInterval, setAutoRefreshInterval] = useState(
    refetchInterval ?? autoRefreshConfig?.defaultInterval ?? (apiProp ? 5000 : 10000)
  )

  // 异步请求竞态序列号防卫，杜绝慢响应覆盖最新筛选结果
  const requestSeqRef = useRef(0)

  // 详情查看弹窗状态
  const [viewingRecord, setViewingRecord] = useState<T | null>(null)
  const [viewLoading, setViewLoading] = useState(false)

  // 聚合声明式搜索字段（兼容 fields + columns.search/searchable + searchFields + 列设置动态勾选加入筛选）
  const baseSearchFields = useMemo<ProSearchFieldConfig[]>(() => {
    const merged = new Map<string, ProSearchFieldConfig>()

    fields
      .filter((f) => !f.hideInSearch)
      .forEach((f) => {
        merged.set(f.name, {
          key: f.name,
          columnKey: f.name,
          label: f.label,
          type: (f.type as ProSearchFieldConfig['type']) ?? 'text',
          placeholder: f.placeholder,
          options: f.options,
          treeData: f.treeData,
          treeCheckable: f.treeCheckable,
          treeCheckStrictly: f.treeCheckStrictly,
          showCheckedStrategy: f.showCheckedStrategy,
          selectableLeafOnly: f.selectableLeafOnly,
          fieldNames: f.fieldNames,
          treeDataSimpleMode: f.treeDataSimpleMode,
          maxTagCount: f.maxTagCount,
          treeDefaultExpandAll: f.treeDefaultExpandAll,
          multiple: f.multiple,
          span: f.span,
          __fromFieldSchema: true,
        })
      })

    columns.forEach((col) => {
      const enabled =
        col.search === true ||
        (typeof col.search === 'object' && col.search !== null) ||
        col.searchable === true
      if (!enabled) return
      const searchCfg =
        typeof col.search === 'object' && col.search !== null ? (col.search as Record<string, any>) : {}
      if (searchCfg.custom) return
      const typeCfg = typeof col.type === 'object' ? col.type : undefined
      const selectOptions = searchCfg.options ?? typeCfg?.options ?? col.options
      const resolvedType: ProSearchFieldConfig['type'] =
        searchCfg.type ?? (selectOptions ? 'select' : 'input')
      const fieldKey = String(
        searchCfg.key ??
          (Array.isArray(col.dataIndex) ? col.dataIndex.join('.') : col.dataIndex) ??
          col.key
      )
      merged.set(fieldKey, {
        key: fieldKey,
        columnKey: col.key,
        label: col.title,
        type: resolvedType,
        placeholder: searchCfg.placeholder,
        options: selectOptions,
        treeData: searchCfg.treeData,
        treeCheckable: searchCfg.treeCheckable,
        treeCheckStrictly: searchCfg.treeCheckStrictly,
        showCheckedStrategy: searchCfg.showCheckedStrategy,
        selectableLeafOnly: searchCfg.selectableLeafOnly,
        fieldNames: searchCfg.fieldNames,
        treeDataSimpleMode: searchCfg.treeDataSimpleMode,
        maxTagCount: searchCfg.maxTagCount,
        treeDefaultExpandAll: searchCfg.treeDefaultExpandAll,
        searchable: searchCfg.searchable,
        multiple: searchCfg.multiple,
        span: searchCfg.span,
        order: searchCfg.order,
        format: searchCfg.format,
        clearable: searchCfg.clearable,
        __fromFieldSchema: false,
      })
    })

    ;(propSearchFields ?? []).forEach((sf) => {
      const prev = merged.get(sf.key)
      merged.set(sf.key, {
        ...prev,
        ...sf,
        __fromFieldSchema: false,
      })
    })

    return Array.from(merged.values()).sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  }, [fields, columns, propSearchFields])

  const searchableFieldNames = useMemo(
    () => new Set(baseSearchFields.map((f) => f.key)),
    [baseSearchFields]
  )

  const allSearchFields = useMemo<ProSearchFieldConfig[]>(() => {
    const merged = new Map<string, ProSearchFieldConfig>()
    baseSearchFields.forEach((f) => merged.set(f.key, f))

    // 支持用户在列设置中将任意普通列动态开启为筛选条件
    columns.forEach((col) => {
      if (
        col.hideInTable ||
        col.key === '__abc_actions__' ||
        col.key === '__actions__' ||
        col.key === '__drag_handle__'
      ) {
        return
      }
      const fieldKey = Array.isArray(col.dataIndex)
        ? col.dataIndex.join('.')
        : String(col.dataIndex ?? col.key)
      if (merged.has(fieldKey)) return
      if (settings.searchVisible[fieldKey] === true || settings.searchVisible[col.key] === true) {
        const typeCfg = typeof col.type === 'object' ? col.type : undefined
        const rawOptions = typeCfg?.options ?? col.options
        const selectOptions = rawOptions?.map((opt) => ({
          label: opt.label,
          value: typeof opt.value === 'boolean' ? String(opt.value) : opt.value,
        }))
        merged.set(fieldKey, {
          key: fieldKey,
          columnKey: col.key,
          label: col.title,
          type: selectOptions && selectOptions.length > 0 ? 'select' : 'input',
          options: selectOptions,
          order: col.order,
          __fromFieldSchema: false,
        })
      }
    })

    return Array.from(merged.values()).sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  }, [baseSearchFields, columns, settings.searchVisible])

  const visibleSearchFields = useMemo(
    () =>
      allSearchFields.filter((f) => {
        if (settings.searchVisible[f.key] === false) return false
        if (f.columnKey && settings.searchVisible[f.columnKey] === false) return false
        return true
      }),
    [allSearchFields, settings.searchVisible]
  )

  const extraFilterFields = useMemo(
    () =>
      visibleSearchFields.filter(
        (field) => !columns.some((col) => col.key === (field.columnKey || field.key))
      ),
    [visibleSearchFields, columns]
  )

  const searchCollapseMeta = useMemo(() => {
    let usedSpan = 0
    const firstRow: ProSearchFieldConfig[] = []
    for (const f of visibleSearchFields) {
      const sp = f.span === 2 || f.type === 'dateRange' ? 2 : 1
      if (usedSpan + sp <= 3) {
        usedSpan += sp
        firstRow.push(f)
      } else {
        break
      }
    }
    const hasExtra = Boolean(renderSearchExtra)
    const extraFitsFirstRow = hasExtra && usedSpan < 3
    const hiddenCount =
      visibleSearchFields.length - firstRow.length + (hasExtra && !extraFitsFirstRow ? 1 : 0)
    return {
      firstRow,
      extraFitsFirstRow,
      canCollapse: hiddenCount > 0,
      hiddenCount,
    }
  }, [visibleSearchFields, renderSearchExtra])

  const displayedSearchFields = useMemo(() => {
    if (!searchFieldsCollapsed || !searchCollapseMeta.canCollapse) {
      return visibleSearchFields
    }
    return searchCollapseMeta.firstRow
  }, [visibleSearchFields, searchFieldsCollapsed, searchCollapseMeta])

  // 聚合声明式表单字段（兼容 fields + columns.form + formFields）
  const resolvedFormFields = useMemo<ProCrudFormField<T>[]>(() => {
    const merged = new Map<string, ProCrudFormField<T>>()

    fields
      .filter((f) => !f.hideInForm)
      .forEach((f) => {
        merged.set(f.name, {
          key: f.name,
          name: f.name,
          label: f.label,
          type: (f.type as ProCrudFieldType) ?? 'text',
          options: f.options,
          treeData: f.treeData,
          treeCheckable: f.treeCheckable,
          treeCheckStrictly: f.treeCheckStrictly,
          showCheckedStrategy: f.showCheckedStrategy,
          selectableLeafOnly: f.selectableLeafOnly,
          fieldNames: f.fieldNames,
          treeDataSimpleMode: f.treeDataSimpleMode,
          maxTagCount: f.maxTagCount,
          treeDefaultExpandAll: f.treeDefaultExpandAll,
          multiple: f.multiple,
          placeholder: f.placeholder,
          helperText: f.helperText,
          defaultValue: f.defaultValue,
          span: f.span,
          required: f.required,
          disabled: f.disabled,
          validator: f.validator,
          __fromFieldSchema: true,
        })
      })

    columns
      .filter((col) => col.form === true || (typeof col.form === 'object' && col.form !== null))
      .forEach((col) => {
        const formCfg =
          typeof col.form === 'object' && col.form !== null
            ? (col.form as Partial<ProCrudFormField<T>>)
            : {}
        const fieldKey = String(
          formCfg.key ??
            formCfg.name ??
            (Array.isArray(col.dataIndex) ? col.dataIndex[0] : col.dataIndex) ??
            col.key
        )
        merged.set(fieldKey, {
          ...formCfg,
          key: fieldKey,
          label: formCfg.label ?? col.title,
          tooltip: formCfg.tooltip ?? col.tooltip,
          type: formCfg.type ?? 'input',
        })
      })

    ;(propFormFields ?? []).forEach((ff) => {
      const fk = resolveFieldKey(ff)
      if (!fk) return
      const prev = merged.get(fk)
      merged.set(fk, {
        ...prev,
        ...ff,
        key: fk,
      })
    })

    return Array.from(merged.values()).sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  }, [fields, columns, propFormFields])

  const buildDefaultFormValues = useCallback((): Record<string, any> => {
    const defaults: Record<string, any> = { ...(defaultFormValues as Record<string, any>) }
    for (const f of resolvedFormFields) {
      const fk = resolveFieldKey(f)
      if (fk && f.defaultValue !== undefined && defaults[fk] === undefined) {
        defaults[fk] = f.defaultValue
      }
    }
    return defaults
  }, [defaultFormValues, resolvedFormFields])

  const form = useProForm<Record<string, any>>({
    defaultValues: buildDefaultFormValues(),
    schema: formSchema,
    fields: resolvedFormFields,
  })

  // 新建 / 编辑弹窗与草稿记忆
  const draftEnabled = draftConfig ? Boolean(draftConfig.enabled) : Boolean(storageKey && !apiProp)
  const autoRestoreDraft = !draftConfig && Boolean(storageKey && !apiProp)
  const draft = useDraftStorage<Record<string, any>>(
    draftEnabled && storageKey ? `${storageKey}_form` : undefined
  )
  const [modalOpen, setModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [editingRecord, setEditingRecord] = useState<T | null>(null)
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formDetailLoading, setFormDetailLoading] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [showDraftBanner, setShowDraftBanner] = useState(false)

  // 权限断言计算
  const addPermCode = permission?.add ?? permissions?.create
  const editPermCode = permission?.edit ?? permissions?.update
  const deletePermCode = permission?.delete ?? permissions?.delete
  const batchDeletePermCode = permission?.batchDelete ?? deletePermCode
  const exportPermCode = permission?.export
  const viewPermCode = permission?.view

  const canCreate = (showAdd ?? true) && checkPermission(addPermCode)
  const canUpdate = (showEdit ?? true) && checkPermission(editPermCode)
  const canDelete = (showDelete ?? true) && checkPermission(deletePermCode)
  const canBatchDelete =
    (showBatchDelete ?? Boolean(onDeleteRecords)) && checkPermission(batchDeletePermCode)
  const effectiveExportable =
    (showExport ?? exportable ?? !Boolean(apiProp)) && checkPermission(exportPermCode)
  const effectiveViewable = (showView ?? viewable ?? false) && checkPermission(viewPermCode)

  const canOpenAdd =
    canCreate &&
    Boolean(
      onAdd ||
        renderCustomForm ||
        (onSaveRecord && resolvedFormFields.length > 0) ||
        resolvedApi?.add ||
        resolvedApi?.create
    )
  const canOpenEdit =
    canUpdate &&
    Boolean(
      onEdit || renderCustomForm || onSaveRecord || resolvedApi?.update || resolvedApi?.edit
    )
  const canOpenDelete =
    canDelete && Boolean(onDelete || onDeleteRecords || resolvedApi?.delete)

  useEffect(() => {
    if (!syncToUrl || typeof window === 'undefined') return
    const managedKeys = [
      ...allSearchFields.map((f) => f.key),
      ...columns.map((c) =>
        Array.isArray(c.dataIndex) ? c.dataIndex.join('.') : String(c.dataIndex ?? c.key)
      ),
      'page',
      'pageSize',
    ]
    const nextSearch = writeQueryToUrlSearch(window.location.search, managedKeys, {
      ...appliedFilters,
      page: current > 1 ? current : undefined,
      pageSize: pageSize !== defaultPageSize ? pageSize : undefined,
    })
    const nextUrl = `${window.location.pathname}${nextSearch}${window.location.hash}`
    window.history.replaceState(null, '', nextUrl)
  }, [syncToUrl, allSearchFields, columns, appliedFilters, current, pageSize, defaultPageSize])

  const toggleFullScreen = useCallback(() => {
    if (typeof document === 'undefined') {
      setIsFullScreen((v) => !v)
      return
    }
    const next = !isFullScreen
    if (next && containerRef.current && typeof containerRef.current.requestFullscreen === 'function') {
      containerRef.current.requestFullscreen().catch(() => {
        // 浏览器策略拦截原生全屏时平滑降级为 CSS 视口全屏
      })
    } else if (!next && document.fullscreenElement && typeof document.exitFullscreen === 'function') {
      document.exitFullscreen().catch(() => {
        // 忽略退出原生全屏异常
      })
    }
    setIsFullScreen(next)
  }, [isFullScreen])

  // 监听浏览器原生全屏变化与 Esc 退出全屏（仅在无打开弹窗时生效）
  useEffect(() => {
    if (typeof document === 'undefined') return
    const onFsChange = () => {
      if (!document.fullscreenElement && isFullScreen) {
        setIsFullScreen(false)
      }
    }
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [isFullScreen])

  useEffect(() => {
    if (!isFullScreen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !modalOpen && !viewingRecord) {
        if (typeof document !== 'undefined' && document.fullscreenElement && typeof document.exitFullscreen === 'function') {
          document.exitFullscreen().catch(() => {})
        }
        setIsFullScreen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isFullScreen, modalOpen, viewingRecord])

  // 视口自适应纵向滚动高度锁定（表头吸顶、底部分页常驻）
  useEffect(() => {
    if (!autoFitHeight || maxHeight !== undefined || typeof window === 'undefined') {
      setComputedScrollY(undefined)
      return
    }
    let rafId = 0
    const measure = () => {
      const scrollEl = tableScrollMeasureRef.current
      if (!scrollEl) return
      const rect = scrollEl.getBoundingClientRect()
      // jsdom 等无真实排版环境跳过测量，避免污染单元测试样式
      if (rect.top === 0 && rect.height === 0 && scrollEl.clientWidth === 0) return
      const paginationHeight =
        !hidePagination && pagination !== false
          ? (paginationWrapRef.current?.offsetHeight ?? 52)
          : 0
      const available = window.innerHeight - rect.top - paginationHeight - 16
      setComputedScrollY(Math.max(Math.floor(available), 240))
    }
    const scheduleMeasure = () => {
      window.cancelAnimationFrame(rafId)
      rafId = window.requestAnimationFrame(measure)
    }
    scheduleMeasure()
    window.addEventListener('resize', scheduleMeasure)
    let observer: ResizeObserver | undefined
    if (typeof ResizeObserver !== 'undefined' && searchCardMeasureRef.current) {
      observer = new ResizeObserver(scheduleMeasure)
      observer.observe(searchCardMeasureRef.current)
    }
    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', scheduleMeasure)
      observer?.disconnect()
    }
  }, [
    autoFitHeight,
    maxHeight,
    isFullScreen,
    headerFilterMode,
    searchPanelExpanded,
    searchFieldsCollapsed,
    extraFilterCollapsed,
    hidePagination,
    pagination,
  ])

  const resolveRowKey = useCallback(
    (record: T, idx = 0): string | number => {
      if (typeof rowKey === 'function') return rowKey(record)
      return (record?.[rowKey as keyof T] as string | number) ?? idx
    },
    [rowKey]
  )

  // 前端本地筛选模式下屏蔽筛选条件变化引发的远程重复请求；切回服务端模式时自动同步最新条件重新拉取
  const effectiveServerFilters = useMemo(
    () => (isClientFilter ? EMPTY_SERVER_FILTERS : appliedFilters),
    [isClientFilter, appliedFilters]
  )

  const fetchServerData = useCallback(async () => {
    if (!request && !apiRef.current?.list) return
    const seq = ++requestSeqRef.current
    setInternalLoading(true)
    try {
      if (request) {
        const res = await request({
          current,
          pageSize,
          filters: cleanQueryObject(effectiveServerFilters),
          sortField: sortState.direction ? sortState.key : undefined,
          sortOrder: sortState.direction,
        })
        if (seq !== requestSeqRef.current) return
        setRemoteRows(res.data)
        setRemoteTotal(res.total)
        onListLoadedRef.current?.(res.data)
        return
      }

      const activeApi = apiRef.current
      if (!activeApi?.list) return
      const query = cleanQueryObject({
        ...(defaultQuery as Record<string, any>),
        ...effectiveServerFilters,
        pageNum: current,
        pageSize,
        ...(sortState.direction
          ? {
              orderBy: sortState.key,
              orderType: sortState.direction,
              sortField: sortState.key,
              sortOrder: sortState.direction,
            }
          : {}),
      }) as Q

      const res = await activeApi.list(query)
      if (seq !== requestSeqRef.current) return

      if (isProApiFailure(res) && !res?.data && !res?.list) {
        toast.error(res?.msg || '获取表格数据失败')
        setRemoteRows([])
        setRemoteTotal(0)
        return
      }
      const { list, total } = normalizeProListResponse<T>(res)
      setRemoteRows(list)
      setRemoteTotal(total)
      onListLoadedRef.current?.(list)
    } catch (err: any) {
      if (seq === requestSeqRef.current) {
        toast.error(err?.message || '加载表格数据失败')
      }
    } finally {
      if (seq === requestSeqRef.current) {
        setInternalLoading(false)
      }
    }
  }, [
    request,
    defaultQuery,
    current,
    pageSize,
    effectiveServerFilters,
    sortState,
    toast,
  ])

  useEffect(() => {
    if (hasRemoteSource) {
      void fetchServerData()
    }
  }, [hasRemoteSource, fetchServerData])

  // 绑定外部命令式刷新句柄
  useEffect(() => {
    if (!onRefreshRef) return
    onRefreshRef.current = (resetToFirstPage = false) => {
      if (resetToFirstPage && current !== 1) {
        setCurrent(1)
      } else {
        void fetchServerData()
      }
    }
    return () => {
      onRefreshRef.current = null
    }
  }, [onRefreshRef, current, fetchServerData])

  // 定时轮询器
  useEffect(() => {
    if (!autoRefreshEnabled || !hasRemoteSource || autoRefreshInterval <= 0 || typeof window === 'undefined') {
      return
    }
    const timer = window.setInterval(() => {
      void fetchServerData()
    }, autoRefreshInterval)
    return () => window.clearInterval(timer)
  }, [autoRefreshEnabled, autoRefreshInterval, hasRemoteSource, fetchServerData])

  // 表单打开时触发字段 onFormReady 钩子与草稿实时自动保存订阅
  useEffect(() => {
    if (!modalOpen) return
    resolvedFormFields.forEach((f) => f.onFormReady?.(form, isEdit))
  }, [modalOpen, isEdit, resolvedFormFields, form])

  useEffect(() => {
    if (!modalOpen || !draftEnabled) return
    if (autoRestoreDraft && !isEdit) {
      const sub = form.watch((vals) => {
        draft.saveDraft(vals)
      })
      return () => sub.unsubscribe()
    }
    if (draftConfig?.autoSave) {
      let timer: number | undefined
      const schedule = () => {
        if (timer !== undefined) window.clearTimeout(timer)
        timer = window.setTimeout(() => {
          draft.saveDraft(form.getValues())
          setShowDraftBanner(false)
        }, draftConfig.autoSaveInterval || 30000)
      }
      schedule()
      const sub = form.watch(() => {
        schedule()
      })
      return () => {
        if (timer !== undefined) window.clearTimeout(timer)
        sub.unsubscribe()
      }
    }
  }, [
    modalOpen,
    draftEnabled,
    autoRestoreDraft,
    isEdit,
    draftConfig?.autoSave,
    draftConfig?.autoSaveInterval,
    form,
    draft,
  ])

  const updateSelectedState = useCallback(
    (nextKeys: Array<string | number>, nextRows?: T[]) => {
      if (controlledSelectedRowKeys === undefined) {
        setInternalSelectedKeys(nextKeys)
      }
      const rawPool = dataSource ?? remoteRows
      const resolvedRows =
        nextRows ?? rawPool.filter((item, idx) => nextKeys.includes(resolveRowKey(item, idx)))
      setCachedSelectedRows(resolvedRows)
      onRowSelectionChange?.(nextKeys, resolvedRows)
    },
    [controlledSelectedRowKeys, dataSource, remoteRows, resolveRowKey, onRowSelectionChange]
  )

  const selectedRows = useMemo(() => {
    if (cachedSelectedRows.length > 0 && cachedSelectedRows.length === selectedKeys.length) {
      return cachedSelectedRows
    }
    const rawPool = dataSource ?? remoteRows
    return rawPool.filter((item, idx) => selectedKeys.includes(resolveRowKey(item, idx)))
  }, [cachedSelectedRows, selectedKeys, dataSource, remoteRows, resolveRowKey])

  // 计算可见且按 order / 用户拖拽排序后的列集合
  const visibleColumns = useMemo<AbcColumn<T>[]>(() => {
    const base = columns
      .filter((c) => !c.hideInTable && !settings.hiddenKeys.includes(c.key))
      .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
      .map((col) => {
        const typeCfg = typeof col.type === 'object' && col.type !== null ? col.type : undefined
        const searchOpts =
          typeof col.search === 'object' && col.search !== null && Array.isArray((col.search as any).options)
            ? (col.search as any).options.filter((o: any) => o.value !== '')
            : undefined
        const derivedFromSearch = Boolean(!col.options && !typeCfg?.options && searchOpts)
        return {
          ...col,
          options: col.options ?? searchOpts,
          ...(derivedFromSearch ? { __autoOptionsFromSearch: true } : {}),
          sorter:
            col.sorter !== undefined
              ? col.sorter
              : apiProp && col.sortable === undefined
                ? true
                : col.sorter,
        } as AbcColumn<T>
      })

    if (settings.columnOrder.length === 0) return base
    return [...base].sort((a, b) => {
      const ia = settings.columnOrder.indexOf(a.key)
      const ib = settings.columnOrder.indexOf(b.key)
      if (ia === -1 && ib === -1) return 0
      if (ia === -1) return 1
      if (ib === -1) return -1
      return ia - ib
    })
  }, [columns, settings.hiddenKeys, settings.columnOrder, apiProp])

  const rawRows = dataSource ?? remoteRows

  // 客户端本地过滤与排序管道（支持汉字拼音首字母、嵌套路径、多选数组与日期区间）
  const processedClientRows = useMemo<T[]>(() => {
    if (!isClientFilter && hasRemoteSource) return rawRows
    const searchableKeys = columns.map((c) =>
      Array.isArray(c.dataIndex) ? c.dataIndex.join('.') : String(c.dataIndex ?? c.key)
    )
    return filterAndSortClientRows<T>({
      rows: rawRows,
      quickKeyword,
      searchableKeys,
      fieldFilters: appliedFilters,
      sortField: sortState.key,
      sortOrder: sortState.direction,
    })
  }, [isClientFilter, hasRemoteSource, rawRows, quickKeyword, appliedFilters, columns, sortState])

  const displayRows = useMemo(() => {
    if (!hasRemoteSource || isClientFilter) {
      if (hidePagination || pagination === false) return processedClientRows
      if (processedClientRows.length > pageSize || !hasRemoteSource) {
        const start = (current - 1) * pageSize
        return processedClientRows.slice(start, start + pageSize)
      }
      return processedClientRows
    }
    return remoteRows
  }, [
    hasRemoteSource,
    isClientFilter,
    hidePagination,
    pagination,
    processedClientRows,
    remoteRows,
    current,
    pageSize,
  ])

  const displayTotal =
    !hasRemoteSource || isClientFilter ? processedClientRows.length : remoteTotal

  const activeFilterCount = useMemo(() => {
    const defaultKeys = defaultQuery ? new Set(Object.keys(defaultQuery)) : null
    const userFilterEntries = Object.entries(cleanQueryObject(appliedFilters)).filter(([k, v]) => {
      if (defaultKeys && defaultKeys.has(k) && (defaultQuery as any)[k] === v) return false
      return true
    })
    return userFilterEntries.length + (quickKeyword.trim() ? 1 : 0)
  }, [appliedFilters, quickKeyword, defaultQuery])

  const resetAllFilters = useCallback(() => {
    const base = { ...(defaultQuery as Record<string, any>) }
    searchInputsRef.current = base
    setSearchInputs(base)
    setAppliedFilters(base)
    setQuickKeyword('')
    setSortState({ key: '', direction: null })
    setCurrent(1)
    onSearchReset?.()
    onSearchChange?.(base)
  }, [defaultQuery, onSearchReset, onSearchChange])

  const openCreateModal = useCallback(
    async (preset?: Partial<F>) => {
      if (onAdd && !preset) {
        onAdd()
        return
      }
      let initialVals: Record<string, any> = {
        ...buildDefaultFormValues(),
        ...(preset as Record<string, any>),
      }
      if (onBeforeAdd) {
        const res = await onBeforeAdd(initialVals as F)
        if (res === false) return
        if (res && typeof res === 'object') {
          initialVals = { ...initialVals, ...res }
        }
      }
      setEditingRecord(null)
      setIsEdit(false)
      setFormError(null)
      form.clearErrors()

      const cached = draftEnabled ? draft.readDraft() : null
      if (cached && autoRestoreDraft && !preset) {
        form.reset({ ...initialVals, ...cached })
        setShowDraftBanner(true)
      } else {
        form.reset(initialVals)
        setShowDraftBanner(Boolean(cached && draftEnabled && !preset))
      }
      setModalOpen(true)
    },
    [
      onAdd,
      buildDefaultFormValues,
      onBeforeAdd,
      form,
      draftEnabled,
      draft,
      autoRestoreDraft,
    ]
  )

  const openEditModal = useCallback(
    async (record: T) => {
      if (onEdit) {
        onEdit(record)
        return
      }
      let initialVals: Record<string, any> = { ...buildDefaultFormValues(), ...record }
      if (onBeforeEdit) {
        const res = await onBeforeEdit(record as unknown as F, record)
        if (res === false) return
        if (res && typeof res === 'object') {
          initialVals = { ...buildDefaultFormValues(), ...res }
        }
      }
      const id = resolveRowKey(record)
      setEditingRecord(record)
      setIsEdit(true)
      setFormError(null)
      setShowDraftBanner(false)
      form.clearErrors()
      form.reset(initialVals)
      setModalOpen(true)

      if (apiRef.current?.get && id !== undefined && id !== null) {
        setFormDetailLoading(true)
        try {
          const res = await apiRef.current.get(id)
          const detail = res?.data && !Array.isArray(res.data) ? res.data : res
          if (!isProApiFailure(res) && detail && typeof detail === 'object') {
            let merged: Record<string, any> = { ...initialVals, ...detail }
            if (onBeforeEdit) {
              const transformed = await onBeforeEdit(merged as F, record)
              if (transformed && typeof transformed === 'object') {
                merged = { ...buildDefaultFormValues(), ...transformed }
              }
            }
            form.reset(merged)
          }
        } catch {
          // 保持已预填的当前行快照数据，不阻断编辑操作
        } finally {
          setFormDetailLoading(false)
        }
      }
    },
    [onEdit, buildDefaultFormValues, onBeforeEdit, resolveRowKey, form]
  )

  useEffect(() => {
    if (!onAddWithValuesRef) return
    onAddWithValuesRef.current = (presetValues: Partial<F>) => {
      void openCreateModal(presetValues)
    }
    return () => {
      onAddWithValuesRef.current = null
    }
  }, [onAddWithValuesRef, openCreateModal])

  useEffect(() => {
    if (!openEditRef) return
    openEditRef.current = (record: T) => {
      void openEditModal(record)
    }
    return () => {
      openEditRef.current = null
    }
  }, [openEditRef, openEditModal])

  const openViewModal = useCallback(
    async (record: T, linkTarget?: string) => {
      if (linkTarget) {
        if (linkTarget.startsWith('/') || linkTarget.startsWith('http')) {
          onNavigate?.(linkTarget, record)
          return
        }
        const customAction = apiRef.current?.[linkTarget]
        if (typeof customAction === 'function') {
          await customAction(record)
          return
        }
      }
      setViewingRecord(record)
      if (apiRef.current?.view) {
        setViewLoading(true)
        try {
          const res = await apiRef.current.view(resolveRowKey(record))
          const detail = res?.data && !Array.isArray(res.data) ? res.data : res
          if (!isProApiFailure(res) && detail && typeof detail === 'object') {
            setViewingRecord({ ...record, ...detail } as T)
          }
        } catch {
          // 保留行快照展示
        } finally {
          setViewLoading(false)
        }
      }
    },
    [onNavigate, resolveRowKey]
  )

  const handleValidFormSubmit = async (values: Record<string, any>) => {
    setFormSubmitting(true)
    setFormError(null)
    try {
      let submitValues: Record<string, any> = values
      let hasCustomSubmitPayload = false
      if (onBeforeSubmit) {
        const transformed = await onBeforeSubmit(values as F, isEdit, editingRecord)
        if (transformed === false) {
          setFormSubmitting(false)
          return
        }
        if (transformed && typeof transformed === 'object') {
          submitValues = transformed
          hasCustomSubmitPayload = true
        }
      }

      if (onSaveRecord) {
        await onSaveRecord(submitValues, editingRecord)
      } else if (apiRef.current) {
        const recordKeyName = typeof rowKey === 'string' ? rowKey : 'id'
        const recordId = editingRecord ? resolveRowKey(editingRecord) : undefined
        const payload = hasCustomSubmitPayload
          ? {
              ...submitValues,
              ...(isEdit && recordId != null ? { [recordKeyName]: recordId } : {}),
            }
          : {
              ...(editingRecord || {}),
              ...submitValues,
              ...(isEdit && recordId != null ? { [recordKeyName]: recordId } : {}),
            }
        const res = isEdit
          ? await (apiRef.current.update || apiRef.current.edit || apiRef.current.add)?.(
              payload as F
            )
          : await (apiRef.current.add || apiRef.current.create)?.(submitValues as F)

        if (isProApiFailure(res)) {
          setFormError(res?.msg || '保存失败')
          return
        }
      }

      if (draftEnabled) {
        draft.clearDraft()
        setShowDraftBanner(false)
      }
      setModalOpen(false)
      toast.success(isEdit ? '更新成功' : apiProp ? '新增成功' : '创建成功')
      onAfterSave?.(submitValues)
      if (hasRemoteSource) void fetchServerData()
    } catch (err: any) {
      const msg = err?.message || '提交失败'
      setFormError(msg)
      if (!apiProp) toast.error(msg)
    } finally {
      setFormSubmitting(false)
    }
  }

  const handleFormSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    const ok = await form.trigger()
    if (!ok) {
      const firstErr = Object.values(form.formState.errors).find((item) => item?.message)?.message
      if (firstErr && !apiProp) {
        toast.warning(firstErr)
      }
      return
    }
    await handleValidFormSubmit(form.getValues())
  }

  const handleSingleDelete = useCallback(
    async (record: T, idx = 0) => {
      if (onDelete) {
        onDelete(record)
        return
      }
      if (onBeforeDelete) {
        const canProceed = await onBeforeDelete(record)
        if (canProceed === false) return
      }
      const rk = resolveRowKey(record, idx)
      if (!onDeleteRecords && !apiRef.current?.delete) return

      const ok = await abcConfirm({
        title: '确认删除',
        message: '确定要删除这条数据吗？此操作无法撤销。',
        tone: 'danger',
        confirmText: '确认删除',
      })
      if (!ok) return

      try {
        if (onDeleteRecords) {
          await onDeleteRecords([rk])
        } else if (apiRef.current?.delete) {
          const res = await apiRef.current.delete([rk])
          if (isProApiFailure(res)) {
            toast.error(res?.msg || '删除失败')
            return
          }
        }
        updateSelectedState(selectedKeys.filter((k) => k !== rk))
        toast.success('删除成功')
        onAfterDelete?.()
        if (hasRemoteSource) void fetchServerData()
      } catch (err: any) {
        toast.error(err?.message || '删除失败')
      }
    },
    [
      onDelete,
      onBeforeDelete,
      resolveRowKey,
      onDeleteRecords,
      selectedKeys,
      updateSelectedState,
      toast,
      onAfterDelete,
      hasRemoteSource,
      fetchServerData,
    ]
  )

  const handleBatchDelete = useCallback(
    async (keys: Array<string | number>) => {
      if (keys.length === 0) {
        toast.warning('请先选择要删除的数据行')
        return
      }
      if (onBeforeBatchDelete) {
        const canProceed = await onBeforeBatchDelete(keys)
        if (canProceed === false) return
      }
      if (!onDeleteRecords && !apiRef.current?.delete) return

      const ok = await abcConfirm({
        title: '确认删除选中记录',
        message: `即将删除 ${keys.length} 条数据，删除后不可恢复，是否继续？`,
        tone: 'danger',
        confirmText: '确认删除',
      })
      if (!ok) return

      try {
        if (onDeleteRecords) {
          await onDeleteRecords(keys)
        } else if (apiRef.current?.delete) {
          const res = await apiRef.current.delete(keys)
          if (isProApiFailure(res)) {
            toast.error(res?.msg || '批量删除失败')
            return
          }
        }
        updateSelectedState([], [])
        toast.success(`已删除 ${keys.length} 条记录`)
        onAfterBatchDelete?.()
        if (hasRemoteSource) void fetchServerData()
      } catch (err: any) {
        toast.error(err?.message || '批量删除失败')
      }
    },
    [
      onBeforeBatchDelete,
      onDeleteRecords,
      updateSelectedState,
      toast,
      onAfterBatchDelete,
      hasRemoteSource,
      fetchServerData,
    ]
  )

  const handleExpandRow = useCallback(
    async (expanded: boolean, record: T) => {
      const rk = resolveRowKey(record)
      if (expanded && apiRef.current?.children) {
        const cached = childrenData[rk]
        if (!cached || cached.length === 0) {
          setChildrenLoading((prev) => ({ ...prev, [rk]: true }))
          setChildrenError((prev) => ({ ...prev, [rk]: '' }))
          try {
            const res = await apiRef.current.children(record)
            if (isProApiFailure(res)) {
              setChildrenError((prev) => ({ ...prev, [rk]: res?.msg || '加载失败' }))
            } else {
              const { list } = normalizeProListResponse<T>(res)
              setChildrenData((prev) => ({ ...prev, [rk]: list }))
              if (treeData) {
                setRemoteRows((prevRows) => {
                  const injectTree = (nodes: T[]): T[] =>
                    nodes.map((item) => {
                      if (resolveRowKey(item) === rk) return { ...item, children: list }
                      if (Array.isArray((item as any).children)) {
                        return { ...item, children: injectTree((item as any).children) }
                      }
                      return item
                    })
                  return injectTree(prevRows)
                })
              }
            }
          } catch {
            setChildrenError((prev) => ({ ...prev, [rk]: '加载失败' }))
          } finally {
            setChildrenLoading((prev) => ({ ...prev, [rk]: false }))
          }
        }
      }
      expandable?.onExpand?.(expanded, record)
    },
    [resolveRowKey, childrenData, treeData, expandable]
  )

  const handleRowReorder = useCallback(
    (activeId: string | number, overId: string | number) => {
      const pool = [...rawRows]
      const oldIdx = pool.findIndex(
        (item, idx) => String(resolveRowKey(item, idx)) === String(activeId)
      )
      const newIdx = pool.findIndex(
        (item, idx) => String(resolveRowKey(item, idx)) === String(overId)
      )
      if (oldIdx < 0 || newIdx < 0 || oldIdx === newIdx) return
      const [moved] = pool.splice(oldIdx, 1)
      pool.splice(newIdx, 0, moved)
      if (!dataSource) {
        setRemoteRows(pool)
      }
      void sortable?.onSort?.(pool)
    },
    [rawRows, resolveRowKey, dataSource, sortable]
  )

  const permittedBatchActions = useMemo(
    () => batchActions.filter((act) => checkPermission(act.permission)),
    [batchActions, checkPermission]
  )

  const selectionEnabled =
    rowSelection ??
    showRowSelection ??
    Boolean(
      (canBatchDelete && (onDeleteRecords || resolvedApi?.delete)) ||
        permittedBatchActions.length > 0 ||
        renderBatchActions
    )

  const effectiveMaxInlineActions =
    maxInlineActions ?? (actionButtons.length > 0 && rowActions.length === 0 ? 6 : 3)

  const hasAnyRowAction =
    effectiveViewable ||
    canOpenEdit ||
    canOpenDelete ||
    rowActions.length > 0 ||
    actionButtons.length > 0

  const defaultActionColWidth =
    actionColumnWidth !== undefined
      ? actionButtons.length > 0
        ? Math.max(actionColumnWidth, 220)
        : actionColumnWidth
      : actionButtons.length > 0 || apiProp
        ? 220
        : effectiveViewable || rowActions.length > 0
          ? 184
          : 136

  const actionColAlign: 'left' | 'right' =
    actionButtons.length > 0 || Boolean(apiProp) ? 'left' : 'right'

  const finalColumns = useMemo<AbcColumn<T>[]>(() => {
    const cols: AbcColumn<T>[] = [...visibleColumns]

    if (sortable?.enabled) {
      cols.unshift({
        key: '__drag_handle__',
        title: '排序',
        width: 68,
        align: 'center',
        sortable: false,
        sorter: false,
        render: () => (
          <GripVertical className="mx-auto h-4 w-4 cursor-grab text-[var(--abc-fg-placeholder)]" />
        ),
      })
    }

    if (!hasAnyRowAction) return cols

    cols.push({
      key: '__abc_actions__',
      title: '操作',
      fixed: 'right',
      width: defaultActionColWidth,
      align: actionColAlign,
      sortable: false,
      sorter: false,
      render: (_, record, idx) => {
        const resolved: ResolvedRowActionItem[] = []
        let editHandled = false
        let deleteHandled = false

        if (effectiveViewable) {
          resolved.push({
            key: '__view__',
            label: apiProp ? '查看' : '详情',
            icon: <Eye className="h-3 w-3" />,
            onClick: () => void openViewModal(record),
          })
        }

        for (const btn of actionButtons) {
          if (btn.key === 'edit' && !btn.onClick) {
            editHandled = true
            if (canOpenEdit) {
              resolved.push({
                key: '__edit__',
                label: btn.label ?? '编辑',
                icon: <Edit3 className="h-3 w-3" />,
                onClick: () => void openEditModal(record),
              })
            }
            continue
          }
          if (btn.key === 'delete' && !btn.onClick) {
            deleteHandled = true
            if (canOpenDelete) {
              resolved.push({
                key: '__delete__',
                label: btn.label ?? '删除',
                icon: <Trash2 className="h-3 w-3" />,
                danger: true,
                onClick: () => void handleSingleDelete(record, idx),
              })
            }
            continue
          }
          if (btn.key === 'edit') editHandled = true
          if (btn.key === 'delete') deleteHandled = true

          const shown = typeof btn.show === 'function' ? btn.show(record) : btn.show !== false
          if (!shown || !checkPermission(btn.permission)) continue
          const isBtnDisabled =
            typeof btn.disabled === 'function' ? btn.disabled(record) : Boolean(btn.disabled)
          const titleText = typeof btn.title === 'function' ? btn.title(record) : btn.title
          const iconNode =
            typeof btn.icon === 'string' ? <Icon name={btn.icon} size={13} /> : btn.icon

          resolved.push({
            key: btn.key,
            label: btn.label,
            icon: iconNode,
            variant: btn.variant ?? btn.type ?? 'text',
            danger: (btn.variant ?? btn.type) === 'danger',
            disabled: isBtnDisabled,
            title: titleText,
            className: btn.className,
            onClick: async () => {
              if (isBtnDisabled) return
              const result = btn.onClick?.(record)
              if (result && typeof (result as Promise<any>).then === 'function') {
                await result
                if (hasRemoteSource) void fetchServerData()
              }
            },
          })
        }

        if (!editHandled && canOpenEdit && actionButtons.length === 0) {
          resolved.push({
            key: '__edit__',
            label: '编辑',
            icon: <Edit3 className="h-3 w-3" />,
            onClick: () => void openEditModal(record),
          })
        }

        for (const custom of rowActions) {
          if (!checkPermission(custom.permission)) continue
          if (custom.hidden?.(record)) continue
          resolved.push({
            key: custom.key,
            label: custom.label,
            icon: custom.icon,
            danger: custom.danger,
            onClick: async () => {
              const res = custom.onClick(record)
              if (res && typeof (res as Promise<any>).then === 'function') {
                await res
                if (hasRemoteSource) void fetchServerData()
              }
            },
          })
        }

        if (!editHandled && canOpenEdit && actionButtons.length > 0) {
          resolved.push({
            key: '__edit__',
            label: '编辑',
            icon: <Edit3 className="h-3 w-3" />,
            onClick: () => void openEditModal(record),
          })
        }

        if (!deleteHandled && canOpenDelete) {
          resolved.push({
            key: '__delete__',
            label: '删除',
            icon: <Trash2 className="h-3 w-3" />,
            danger: true,
            onClick: () => void handleSingleDelete(record, idx),
          })
        }

        return (
          <ProRowActionsOverflow
            actions={resolved}
            maxInline={effectiveMaxInlineActions}
            autoFit={maxInlineActions === undefined}
            align={actionColAlign}
          />
        )
      },
    })

    return cols
  }, [
    visibleColumns,
    sortable?.enabled,
    hasAnyRowAction,
    defaultActionColWidth,
    actionColAlign,
    effectiveViewable,
    apiProp,
    actionButtons,
    canOpenEdit,
    canOpenDelete,
    rowActions,
    effectiveMaxInlineActions,
    maxInlineActions,
    checkPermission,
    openViewModal,
    openEditModal,
    handleSingleDelete,
    hasRemoteSource,
    fetchServerData,
  ])

  const resolvedExpandable = useMemo<AbcTableExpandableConfig<T> | undefined>(() => {
    if (!expandable && !resolvedApi?.children) return undefined
    const renderLazySubTable = (
      record: T,
      idx: number,
      depth = 0,
      isExpanded = true
    ): React.ReactNode => {
      if (expandable?.expandedRowRender) {
        return expandable.expandedRowRender(record, idx, depth, isExpanded)
      }
      const rk = resolveRowKey(record, idx)
      if (childrenLoading[rk]) {
        return <div className="py-5 text-center text-xs text-[var(--abc-fg-muted)]">加载中...</div>
      }
      if (childrenError[rk]) {
        return (
          <div className="py-5 text-center text-xs text-[var(--abc-danger)]">
            <span>{childrenError[rk]}</span>
            <button
              type="button"
              onClick={() => void handleExpandRow(true, record)}
              className="ml-2 text-[var(--abc-primary)] hover:underline cursor-pointer"
            >
              重试
            </button>
          </div>
        )
      }
      const subRows = childrenData[rk] || []
      if (subRows.length === 0) {
        return <div className="py-5 text-center text-xs text-[var(--abc-fg-muted)]">暂无子项数据</div>
      }
      return (
        <TableCore<T>
          columns={visibleColumns}
          data={subRows}
          rowKey={rowKey}
          density={settings.density}
        />
      )
    }

    return {
      ...expandable,
      rowExpandable:
        expandable?.rowExpandable ?? (resolvedApi?.children ? () => true : undefined),
      expandedRowRender: treeData
        ? undefined
        : resolvedApi?.children || expandable?.expandedRowRender
          ? renderLazySubTable
          : undefined,
      onExpand: handleExpandRow,
    }
  }, [
    expandable,
    resolvedApi?.children,
    treeData,
    resolveRowKey,
    childrenLoading,
    childrenError,
    childrenData,
    handleExpandRow,
    visibleColumns,
    rowKey,
    settings.density,
  ])

  const handleExportAction = async () => {
    const exportTargetRows = isClientFilter || !hasRemoteSource ? processedClientRows : remoteRows
    if (apiProp) {
      setExporting(true)
      try {
        const query = cleanQueryObject({
          ...(defaultQuery as Record<string, any>),
          ...appliedFilters,
          pageNum: current,
          pageSize,
        })
        if (onExport) {
          await onExport(query)
        } else if (apiRef.current?.export) {
          await apiRef.current.export(query as Q)
        } else {
          const baseName =
            typeof title === 'string' && title.trim()
              ? title.trim()
              : storageKey || 'table-export'
          downloadTableCsv(baseName, visibleColumns, exportTargetRows)
        }
        toast.success('导出成功')
      } catch (err: any) {
        toast.error(err?.message || '导出失败')
      } finally {
        setExporting(false)
      }
      return
    }

    if (onExport) {
      await onExport(exportTargetRows)
      return
    }
    const baseName =
      typeof title === 'string' && title.trim() ? title.trim() : storageKey || 'table-export'
    downloadTableCsv(baseName, visibleColumns, exportTargetRows)
    toast.success(`已导出 ${exportTargetRows.length} 条记录`)
  }

  const updateSearchInput = useCallback(
    (fieldKey: string, nextVal: any) => {
      setSearchInputs((prev) => {
        const next = { ...prev, [fieldKey]: nextVal }
        searchInputsRef.current = next
        onSearchChange?.(next)
        return next
      })
    },
    [onSearchChange]
  )

  const submitSearch = useCallback(
    (patch?: Record<string, any>) => {
      const next = { ...searchInputsRef.current, ...(patch || {}) }
      searchInputsRef.current = next
      setSearchInputs(next)
      setAppliedFilters(next)
      setCurrent(1)
      onSearchSubmit?.(next)
    },
    [onSearchSubmit]
  )

  const renderSearchControl = (
    f: ProSearchFieldConfig,
    extraCls?: { input?: string; select?: string }
  ) => {
    const val = searchInputs[f.key]
    const setVal = (nextVal: any) => updateSearchInput(f.key, nextVal)

    if (f.type === 'select') {
      return (
        <Select
          allowClear={f.clearable !== false}
          searchable={f.searchable ?? true}
          multiple={f.multiple}
          options={f.options ?? []}
          placeholder={
            f.placeholder ?? (f.__fromFieldSchema ? `全部${f.label}` : `请选择${f.label}`)
          }
          value={val ?? (f.multiple ? [] : '')}
          onChange={(v: any) => {
            const nextVal = v && typeof v === 'object' && 'target' in v ? v.target.value : v
            setVal(nextVal)
          }}
          className={extraCls?.select}
        />
      )
    }
    if (f.type === 'treeSelect') {
      const isMultiTree = Boolean(f.multiple || f.treeCheckable)
      return (
        <TreeSelect
          aria-label={f.label}
          allowClear={f.clearable !== false}
          searchable={f.searchable ?? true}
          multiple={f.multiple}
          treeCheckable={f.treeCheckable}
          treeCheckStrictly={f.treeCheckStrictly}
          showCheckedStrategy={f.showCheckedStrategy}
          selectableLeafOnly={f.selectableLeafOnly}
          fieldNames={f.fieldNames}
          treeDataSimpleMode={f.treeDataSimpleMode}
          maxTagCount={f.maxTagCount}
          treeDefaultExpandAll={f.treeDefaultExpandAll}
          treeData={f.treeData ?? []}
          placeholder={
            f.placeholder ?? (f.__fromFieldSchema ? `全部${f.label}` : `请选择${f.label}`)
          }
          value={val ?? (isMultiTree ? [] : '')}
          onChange={(nextVal) => setVal(nextVal)}
          className={extraCls?.select}
        />
      )
    }
    if (f.type === 'date' || f.type === 'datetimePicker') {
      return (
        <DatePicker
          value={val ?? ''}
          placeholder={
            f.placeholder ?? (f.__fromFieldSchema ? `选择${f.label}` : `请选择${f.label}`)
          }
          onChange={setVal}
        />
      )
    }
    if (f.type === 'dateRange') {
      return <DateRangePicker value={val ?? null} onChange={setVal} />
    }
    if (f.type === 'number') {
      return (
        <InputNumber
          value={val ?? null}
          placeholder={f.placeholder ?? `输入${f.label}`}
          onChange={setVal}
          className={extraCls?.input}
        />
      )
    }
    return (
      <Input
        allowClear={f.clearable !== false}
        placeholder={
          f.placeholder ?? (f.__fromFieldSchema ? `搜索${f.label}` : `请输入${f.label}`)
        }
        value={val ?? ''}
        onChange={(e) => setVal(e.target.value)}
        wrapperClassName={extraCls?.input}
      />
    )
  }

  const effectiveFormColumns =
    formColumns ?? (apiProp ? 2 : resolvedFormFields.length >= 6 ? 2 : 1)
  const effectiveShowClientFilterSwitch =
    showClientFilterSwitch ?? Boolean(apiProp && allSearchFields.length > 0)

  const currentIntervalLabel =
    AUTO_REFRESH_INTERVALS.find((o) => o.key === autoRefreshInterval)?.label ?? '5秒'
  const showHeaderFilterToggle =
    propShowHeaderFilterToggle ?? controlledHeaderFilterMode === undefined

  const showTopPageHeader = Boolean(
    subTitle || headerExtra || renderExtra || (apiProp && title)
  )
  const resolvedHeaderExtra = headerExtra ?? renderExtra?.()
  const resolvedCardExtra = cardExtra ?? renderCardExtra?.()
  const resolvedToolbarExtra = toolbarExtra ?? renderToolbarExtra?.()
  const resolvedAddText = addButtonText ?? (apiProp ? '新增' : '新建记录')

  const activeFilterKeys = useMemo(
    () =>
      allSearchFields
        .filter((f) => hasActiveFilterValue(appliedFilters[f.key]))
        .map((f) => f.columnKey || f.key),
    [allSearchFields, appliedFilters]
  )

  const activeFilterLabels = useMemo(
    () =>
      Object.fromEntries(
        allSearchFields
          .filter((f) => hasActiveFilterValue(appliedFilters[f.key]))
          .map((f) => [f.columnKey || f.key, formatFilterBadgeText(f, appliedFilters[f.key])])
      ),
    [allSearchFields, appliedFilters]
  )

  return (
    <div
      ref={containerRef}
      data-motion={resolvedMotion}
      className={cn(
        'relative space-y-3',
        isFullScreen && 'fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4'
      )}
    >
      {/* 顶部页面标题与扩展操作区 */}
      {showTopPageHeader && (title || subTitle || resolvedHeaderExtra) && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            {title && (
              <h2 className="text-lg font-bold tracking-tight text-[var(--abc-fg)]">{title}</h2>
            )}
            {subTitle && (
              <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">{subTitle}</p>
            )}
          </div>
          {resolvedHeaderExtra && <div>{resolvedHeaderExtra}</div>}
        </div>
      )}

      {resolvedCardExtra}

      {/* 紧凑水平工具条搜索模式 (toolbar) */}
      {searchVariant === 'toolbar' &&
        (visibleSearchFields.length > 0 || Boolean(renderSearchExtra)) &&
        !headerFilterMode && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                submitSearch()
              }}
              className="flex flex-wrap items-center gap-2.5"
            >
              {displayedSearchFields.map((f) => (
                <div key={f.key} className="flex items-center">
                  {renderSearchControl(f, {
                    input: f.span === 2 ? 'w-80 sm:w-96' : 'w-72 sm:w-80',
                    select: 'w-40',
                  })}
                </div>
              ))}
              {renderSearchExtra?.({
                query: searchInputs,
                onQueryChange: updateSearchInput,
                isSearchVisible: (colKey) => settings.searchVisible[colKey] !== false,
              })}
              <Button
                size="sm"
                type="submit"
                variant="primary"
                icon={<Search className="h-3.5 w-3.5" />}
              >
                搜索
              </Button>
              <Button
                size="sm"
                type="button"
                variant="secondary"
                icon={<RotateCcw className="h-3.5 w-3.5" />}
                onClick={resetAllFilters}
              >
                重置
              </Button>
              {activeFilterCount > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]">
                  已生效 {activeFilterCount} 项
                </span>
              )}
            </form>
          </div>
        )}

      {/* 顶部高级可折叠条件检索面板 */}
      {searchVariant === 'card' &&
        (visibleSearchFields.length > 0 || Boolean(renderSearchExtra)) &&
        !headerFilterMode && (
          <div ref={searchCardMeasureRef}>
            <Card padding="none">
              <div className="flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <Filter className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                  <span className="text-xs font-semibold text-[var(--abc-fg)]">筛选条件</span>
                  {activeFilterCount > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]">
                      已生效 {activeFilterCount} 项
                      <button
                        type="button"
                        aria-label="一键清空已生效筛选"
                        onClick={resetAllFilters}
                        className="ml-0.5 hover:underline cursor-pointer"
                      >
                        清空
                      </button>
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  aria-expanded={searchPanelExpanded}
                  onClick={() => setSearchPanelExpanded((v) => !v)}
                  className="inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer select-none"
                >
                  <span>{searchPanelExpanded ? '收起' : '展开'}</span>
                  {searchPanelExpanded ? (
                    <ChevronUp className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronDown className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              <div className="abc-collapse-grid" data-open={searchPanelExpanded}>
                <div className="abc-collapse-inner">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      submitSearch()
                    }}
                    className="grid grid-cols-1 items-end gap-3.5 p-4 sm:grid-cols-2 lg:grid-cols-4"
                  >
                    {displayedSearchFields.map((f) => (
                      <FormField
                        key={f.key}
                        label={f.label}
                        className={
                          f.span === 2 || f.type === 'dateRange' ? 'sm:col-span-2' : undefined
                        }
                      >
                        {renderSearchControl(f)}
                      </FormField>
                    ))}

                    {(!searchFieldsCollapsed ||
                      !searchCollapseMeta.canCollapse ||
                      searchCollapseMeta.extraFitsFirstRow) &&
                      renderSearchExtra?.({
                        query: searchInputs,
                        onQueryChange: updateSearchInput,
                        isSearchVisible: (colKey) => settings.searchVisible[colKey] !== false,
                      })}

                    <div className="flex flex-wrap items-center gap-2 lg:col-start-4 lg:justify-end">
                      <Button
                        size="sm"
                        type="submit"
                        variant="primary"
                        icon={<Search className="h-3.5 w-3.5" />}
                      >
                        搜索
                      </Button>
                      <Button
                        size="sm"
                        type="button"
                        variant="secondary"
                        icon={<RotateCcw className="h-3.5 w-3.5" />}
                        onClick={resetAllFilters}
                      >
                        重置
                      </Button>
                      {searchCollapseMeta.canCollapse && (
                        <button
                          type="button"
                          onClick={() => setSearchFieldsCollapsed((v) => !v)}
                          className="inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:underline cursor-pointer select-none"
                        >
                          <span>
                            {searchFieldsCollapsed
                              ? `展开 (${searchCollapseMeta.hiddenCount})`
                              : '收起'}
                          </span>
                          {searchFieldsCollapsed ? (
                            <ChevronDown className="h-3.5 w-3.5" />
                          ) : (
                            <ChevronUp className="h-3.5 w-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        )}

      {/* 表格主卡片与工具栏 */}
      <Card padding="none">
        {/* 表头筛选模式下未绑定具体表格列的附加筛选项条 */}
        {headerFilterMode && extraFilterCollapsed && extraFilterFields.length > 0 && (
          <div className="border-b border-[var(--abc-border)] px-4 py-2.5">
            <div className="flex flex-wrap items-end gap-3">
              {extraFilterFields.map((field) => (
                <div key={field.key} className="w-48">
                  <div className="mb-1 text-[11px] text-[var(--abc-fg-muted)]">{field.label}</div>
                  {renderSearchControl(field)}
                </div>
              ))}
              <Button
                variant="primary"
                size="sm"
                onClick={() => submitSearch()}
                icon={<Search className="h-3.5 w-3.5" />}
              >
                查询
              </Button>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {!showTopPageHeader && title && (
              <h3 className="mr-1 text-sm font-semibold text-[var(--abc-fg)]">{title}</h3>
            )}
            {canOpenAdd && (
              <Button
                variant="primary"
                size="sm"
                icon={<Plus className="h-3.5 w-3.5" />}
                onClick={() => void openCreateModal()}
              >
                {resolvedAddText}
              </Button>
            )}
            {showBatchDelete && canBatchDelete && (onDeleteRecords || resolvedApi?.delete) && (
              <Button
                variant="danger"
                size="sm"
                disabled={selectedKeys.length === 0}
                icon={<Trash2 className="h-3.5 w-3.5" />}
                onClick={() => void handleBatchDelete(selectedKeys)}
              >
                批量删除
              </Button>
            )}
            {showExport && effectiveExportable && (
              <Button
                variant="secondary"
                size="sm"
                loading={exporting}
                icon={<Download className="h-3.5 w-3.5" />}
                onClick={() => void handleExportAction()}
              >
                导出
              </Button>
            )}
            {showImport && (
              <Button
                variant="secondary"
                size="sm"
                icon={<Upload className="h-3.5 w-3.5" />}
                onClick={() => void onImport?.()}
              >
                导入
              </Button>
            )}
            {toolbarButtons
              .filter((btn) => checkPermission(btn.permission))
              .map((btn) => (
                <Button
                  key={btn.key}
                  variant={btn.variant ?? btn.type ?? 'secondary'}
                  size="sm"
                  icon={btn.icon}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </Button>
              ))}
            {resolvedToolbarExtra}
            {headerFilterMode && extraFilterFields.length > 0 && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setExtraFilterCollapsed((v) => !v)}
              >
                {extraFilterCollapsed ? '收起筛选' : '展开筛选'}
              </Button>
            )}
            {headerFilterMode && visibleSearchFields.length > 0 && (
              <Button
                variant="secondary"
                size="sm"
                icon={<RotateCcw className="h-3.5 w-3.5" />}
                onClick={resetAllFilters}
              >
                重置
              </Button>
            )}
            {selectionEnabled && selectedKeys.length > 0 && (
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--abc-primary-soft)] px-3 py-1 text-xs font-medium text-[var(--abc-primary)]">
                <span>已选择 {selectedKeys.length} 项</span>
                <button
                  type="button"
                  onClick={() => updateSelectedState([], [])}
                  className="hover:underline cursor-pointer"
                >
                  取消
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {isClientFilter && allSearchFields.length === 0 && (
              <Input
                size="xs"
                allowClear
                prefix={<Filter className="h-3 w-3" />}
                placeholder="当前数据即时检索（支持拼音）..."
                value={quickKeyword}
                onChange={(e) => {
                  setQuickKeyword(e.target.value)
                  setCurrent(1)
                }}
                wrapperClassName="w-52"
              />
            )}

            {/* 自动定时轮询气泡面板（带开关与间隔切换） */}
            {showAutoRefreshControl && hasRemoteSource && (
              <div className="inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]">
                <Tooltip
                  content={
                    autoRefreshEnabled
                      ? `自动刷新运行中：每 ${currentIntervalLabel} 轮询（点击暂停）`
                      : '点击开启自动刷新'
                  }
                >
                  <button
                    type="button"
                    aria-label="切换定时自动刷新"
                    onClick={() => setAutoRefreshEnabled((v) => !v)}
                    className={cn(
                      'inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer',
                      autoRefreshEnabled
                        ? 'bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]'
                        : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                    )}
                  >
                    <Clock
                      className={cn('h-3.5 w-3.5', autoRefreshEnabled && 'animate-pulse')}
                    />
                    {autoRefreshEnabled && <span>{currentIntervalLabel}</span>}
                  </button>
                </Tooltip>

                <Popover
                  open={autoRefreshPopoverOpen}
                  onOpenChange={setAutoRefreshPopoverOpen}
                  placement="bottomRight"
                  panelClassName="w-44 p-2.5"
                  content={
                    <div className="space-y-2 text-xs text-[var(--abc-fg)]">
                      <div className="flex items-center justify-between border-b border-[var(--abc-border)] pb-2">
                        <span className="font-semibold">自动刷新</span>
                        <Switch
                          size="xs"
                          checked={autoRefreshEnabled}
                          onChange={(checked) => setAutoRefreshEnabled(checked)}
                        />
                      </div>
                      <div className="space-y-0.5">
                        <div className="px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]">
                          刷新间隔
                        </div>
                        {AUTO_REFRESH_INTERVALS.map((opt) => (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => {
                              setAutoRefreshInterval(opt.key)
                              setAutoRefreshEnabled(true)
                              setAutoRefreshPopoverOpen(false)
                            }}
                            className={cn(
                              'flex w-full items-center justify-between rounded-[var(--abc-radius-xs)] px-2 py-1 text-left text-xs transition-colors cursor-pointer',
                              autoRefreshInterval === opt.key
                                ? 'bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]'
                                : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]'
                            )}
                          >
                            <span>{opt.label}</span>
                            {autoRefreshInterval === opt.key && (
                              <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  }
                >
                  <button
                    type="button"
                    aria-label="选择轮询频率"
                    className="inline-flex h-full w-5 items-center justify-center rounded-r-[var(--abc-radius-sm)] border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </Popover>
              </div>
            )}

            {effectiveShowClientFilterSwitch && (
              <Tooltip
                content={
                  isClientFilter
                    ? '当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询'
                    : '当前为【服务端接口查询】：点击切换为前端本地即时筛选模式'
                }
              >
                <button
                  type="button"
                  aria-pressed={isClientFilter}
                  aria-label="切换前端本地筛选模式"
                  onClick={() => {
                    const next = !isClientFilter
                    setIsClientFilter(next)
                    setCurrent(1)
                    toast.info(
                      next ? '已切换至前端本地筛选模式' : '已切换至服务端接口查询模式'
                    )
                  }}
                  className={cn(
                    'inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none',
                    isClientFilter
                      ? 'border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  <Filter className="h-3 w-3" />
                  <span>{isClientFilter ? '前端筛选' : '接口筛选'}</span>
                </button>
              </Tooltip>
            )}

            {showHeaderFilterToggle && (
              <Tooltip content={headerFilterMode ? '关闭表头内联筛选' : '开启表头内联筛选'}>
                <button
                  type="button"
                  aria-label="切换表头内联筛选"
                  onClick={() => updateHeaderFilterMode(!headerFilterMode)}
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer',
                    headerFilterMode
                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                      : 'border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  <ListFilter className="h-3.5 w-3.5" />
                </button>
              </Tooltip>
            )}

            {effectiveExportable && !showExport && (
              <Tooltip content="导出当前数据 (CSV)">
                <button
                  type="button"
                  aria-label="导出数据"
                  onClick={() => void handleExportAction()}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>
              </Tooltip>
            )}

            {hasRemoteSource && (
              <Tooltip content="刷新表格数据">
                <button
                  type="button"
                  aria-label="刷新数据"
                  onClick={() => void fetchServerData()}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <RefreshCw className={cn('h-3.5 w-3.5', loading && 'animate-spin')} />
                </button>
              </Tooltip>
            )}

            {/* 独立行密度菜单 */}
            <Dropdown
              placement="bottomRight"
              items={[
                {
                  key: 'comfortable',
                  label: (
                    <span className="flex items-center justify-between gap-4">
                      <span>宽松</span>
                      {settings.density === 'comfortable' && (
                        <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                      )}
                    </span>
                  ),
                  onClick: () => setDensity('comfortable' as AbcTableDensity),
                },
                {
                  key: 'default',
                  label: (
                    <span className="flex items-center justify-between gap-4">
                      <span>默认</span>
                      {settings.density === 'default' && (
                        <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                      )}
                    </span>
                  ),
                  onClick: () => setDensity('default' as AbcTableDensity),
                },
                {
                  key: 'compact',
                  label: (
                    <span className="flex items-center justify-between gap-4">
                      <span>紧凑</span>
                      {settings.density === 'compact' && (
                        <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                      )}
                    </span>
                  ),
                  onClick: () => setDensity('compact' as AbcTableDensity),
                },
              ]}
            >
              <Tooltip content="表格行密度">
                <button
                  type="button"
                  aria-label="表格行密度"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <AlignJustify className="h-3.5 w-3.5" />
                </button>
              </Tooltip>
            </Dropdown>

            {/* 全屏沉浸展示 */}
            <Tooltip content={isFullScreen ? '退出全屏 (Esc)' : '全屏展示表格'}>
              <button
                type="button"
                aria-label={isFullScreen ? '退出全屏' : '全屏展示'}
                onClick={toggleFullScreen}
                className={cn(
                  'inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer',
                  isFullScreen
                    ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                    : 'border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                )}
              >
                {isFullScreen ? (
                  <Minimize2 className="h-3.5 w-3.5" />
                ) : (
                  <Maximize2 className="h-3.5 w-3.5" />
                )}
              </button>
            </Tooltip>

            {/* 高级列设置与筛选项管理气泡面板 */}
            {columnSettingsEnabled && (
              <ProColumnSettingsPopover
                columns={columns}
                searchableFieldNames={searchableFieldNames}
                settings={settings}
                hasActionColumn={hasAnyRowAction}
                defaultActionWidth={defaultActionColWidth}
                motion={resolvedMotion}
                onToggleVisible={toggleColumnVisible}
                onSetAllVisible={setAllColumnsVisible}
                onSetFixed={setColumnFixed}
                onSetWidth={setColumnWidth}
                onSetOrder={setColumnOrder}
                onSetSearchVisible={setSearchFieldVisible}
                onReset={resetSettings}
              />
            )}
          </div>
        </div>

        <div ref={tableScrollMeasureRef}>
          <TableCore<T>
            columns={finalColumns}
            allColumns={columns}
            hiddenColumnKeys={settings.hiddenKeys}
            onToggleColumnVisible={columnSettingsEnabled ? toggleColumnVisible : undefined}
            data={displayRows}
            rowKey={rowKey}
            loading={loading}
            density={settings.density}
            motion={resolvedMotion}
            selectedKeys={selectionEnabled ? selectedKeys : undefined}
            onSelectionChange={
              selectionEnabled
                ? (keys, rows) => {
                    updateSelectedState(keys, rows)
                  }
                : undefined
            }
            sortState={sortState}
            onSortChange={(key, direction) => {
              setSortState({ key, direction })
              setCurrent(1)
            }}
            headerFilterMode={headerFilterMode}
            headerFilters={appliedFilters}
            onHeaderFilterChange={(k, val) => {
              setCurrent(1)
              updateSearchInput(k, val)
              setAppliedFilters((prev) => ({ ...prev, [k]: val }))
            }}
            headerFilterRender={(col) => {
              const filterKey = Array.isArray(col.dataIndex)
                ? col.dataIndex.join('.')
                : String(col.dataIndex ?? col.key)
              const matchedSearch = visibleSearchFields.find(
                (sf) => sf.columnKey === col.key || sf.key === filterKey
              )
              if (headerFilterMode) {
                if (!matchedSearch && !col.filterable) return null
              } else {
                if (!col.filterable) return null
              }
              const filterOpts = col.filterOptions ?? matchedSearch?.options
              const filterType =
                matchedSearch?.type ??
                col.filterType ??
                (filterOpts && filterOpts.length > 0 ? 'select' : 'text')
              const targetKey = matchedSearch?.key ?? filterKey
              const isHighlighted = activeFilterKeys.includes(col.key)
              return (
                <HeaderColumnFilterPopover
                  title={col.title}
                  filterType={filterType}
                  filterOptions={filterOpts}
                  treeData={matchedSearch?.treeData}
                  multiple={matchedSearch?.multiple}
                  searchable={matchedSearch?.searchable}
                  placeholder={matchedSearch?.placeholder}
                  format={matchedSearch?.format}
                  highlighted={isHighlighted}
                  iconType={headerFilterMode ? 'search' : 'filter'}
                  value={appliedFilters[targetKey]}
                  onApply={(nextVal) => {
                    setCurrent(1)
                    updateSearchInput(targetKey, nextVal)
                    setAppliedFilters((prev) => ({ ...prev, [targetKey]: nextVal }))
                  }}
                />
              )
            }}
            activeFilterKeys={activeFilterKeys}
            activeFilterLabels={activeFilterLabels}
            filterHighlightColor={settings.filterHighlightColor}
            onFilterHighlightColorChange={
              columnSettingsEnabled ? setFilterHighlightColor : undefined
            }
            columnWidths={settings.columnWidths}
            onColumnResize={setColumnWidth}
            columnFixed={settings.columnFixed}
            onColumnPin={setColumnFixed}
            onColumnHide={columnSettingsEnabled ? toggleColumnVisible : undefined}
            onResetColumns={columnSettingsEnabled ? resetSettings : undefined}
            onColumnReorder={columnSettingsEnabled ? setColumnOrder : undefined}
            treeData={treeData}
            expandable={resolvedExpandable}
            rowDraggable={Boolean(sortable?.enabled)}
            onRowDragEnd={sortable?.enabled ? handleRowReorder : undefined}
            activeRowKey={selectedRowKey}
            onRowClick={onRowClick}
            onRow={onRow}
            onRowView={(record, linkTarget) => void openViewModal(record, linkTarget)}
            onEmptyReset={activeFilterCount > 0 ? resetAllFilters : undefined}
            maxHeight={maxHeight ?? computedScrollY}
            className="rounded-none border-0"
          />
        </div>

        {!hidePagination && pagination !== false && (
          <div ref={paginationWrapRef} className="border-t border-[var(--abc-border)] px-4 py-3">
            {renderPagination ? (
              renderPagination({
                current,
                pageSize,
                total: displayTotal,
                mode:
                  typeof pagination === 'object' && pagination.mode
                    ? pagination.mode
                    : 'offset',
              })
            ) : typeof pagination === 'object' ? (
              <Pagination
                current={current}
                pageSize={pageSize}
                pageSizeOptions={pageSizeOptions}
                motion={resolvedMotion}
                total={displayTotal}
                onChange={(nextPage, nextSize) => {
                  setCurrent(nextPage)
                  setPageSize(nextSize)
                }}
                {...pagination}
              />
            ) : (
              <Pagination
                current={current}
                pageSize={pageSize}
                pageSizeOptions={pageSizeOptions}
                motion={resolvedMotion}
                total={displayTotal}
                onChange={(nextPage, nextSize) => {
                  setCurrent(nextPage)
                  setPageSize(nextSize)
                }}
              />
            )}
          </div>
        )}
      </Card>

      {/* 悬浮底部毛玻璃批量操作栏 */}
      {selectionEnabled && selectedKeys.length > 0 && (
        <ProFloatingBatchBar<T>
          selectedKeys={selectedKeys}
          selectedRows={selectedRows}
          batchActions={permittedBatchActions}
          extraContent={renderBatchActions?.(selectedKeys, selectedRows)}
          motion={resolvedMotion}
          onBatchDelete={
            canBatchDelete && (onDeleteRecords || resolvedApi?.delete)
              ? () => void handleBatchDelete(selectedKeys)
              : undefined
          }
          onClear={() => updateSelectedState([], [])}
        />
      )}

      {/* 详情只读查看弹窗 */}
      <ProCrudViewModal<T>
        open={Boolean(viewingRecord)}
        onClose={() => setViewingRecord(null)}
        record={viewingRecord}
        columns={columns}
        viewTitle={viewTitle ?? (apiProp ? '详情' : '记录详情')}
        viewSize={viewSize}
        viewLoading={viewLoading}
        canEdit={canOpenEdit}
        onEditRecord={(rec) => void openEditModal(rec)}
        renderViewExtra={renderViewExtra}
        renderViewFooter={renderViewFooter}
      />

      {/* 新建 / 编辑弹窗与侧滑抽屉容器 */}
      <ProCrudFormModal<T>
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        isEdit={isEdit}
        currentRecord={editingRecord}
        container={formContainer}
        dialogTitle={
          dialogTitle ??
          (apiProp ? { add: '新增', edit: '编辑' } : { add: '新建记录', edit: '编辑记录' })
        }
        dialogSize={dialogSize}
        formLayout={formLayout}
        formColumns={effectiveFormColumns}
        formFields={resolvedFormFields}
        form={form}
        formSchema={formSchema}
        columns={columns}
        formSubmitting={formSubmitting}
        formDetailLoading={formDetailLoading}
        formError={formError}
        onSubmit={handleFormSubmit}
        draftEnabled={draftEnabled}
        showDraftButton={Boolean(draftConfig?.showDraftButton && draftEnabled)}
        showDraftBanner={showDraftBanner}
        draftBannerMode={autoRestoreDraft ? 'auto-restored' : 'prompt'}
        onSaveDraft={
          draftEnabled
            ? () => {
                draft.saveDraft(form.getValues())
                toast.success('草稿已保存')
              }
            : undefined
        }
        onRestoreDraft={() => {
          const cached = draft.readDraft()
          if (cached) form.reset({ ...buildDefaultFormValues(), ...cached })
          setShowDraftBanner(false)
        }}
        onDiscardDraft={() => {
          draft.clearDraft()
          if (autoRestoreDraft) {
            form.reset(buildDefaultFormValues())
          }
          setShowDraftBanner(false)
        }}
        submitButtonText={apiProp ? '保存' : '确认提交'}
        renderFormExtra={renderFormExtra}
        renderCustomForm={renderCustomForm}
        onSuccessFetch={() => {
          if (hasRemoteSource) void fetchServerData()
        }}
      />
    </div>
  )
}

export const ProCrudTable = ProTable
export const CrudTable = ProTable
export default ProTable
