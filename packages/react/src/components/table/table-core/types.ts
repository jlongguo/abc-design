import type { AbcMotionPreset } from '@abc-design/tokens'
import type React from 'react'
import type { AbcTableDensity } from '../../../hooks/useTableSettings'
import type { StatusTone } from '../../display/StatusTag'
import type { SelectOption } from '../../form/Select'

export function getNestedValue(obj: any, path: string | string[] | undefined): any {
  if (!obj || path == null || path === '') return undefined
  if (Array.isArray(path)) return path.reduce((current, key) => current?.[key], obj)
  if (typeof path === 'string' && path.includes('.')) {
    return path.split('.').reduce((current, key) => current?.[key], obj)
  }
  return obj[path]
}

export type SortDirection = 'asc' | 'desc' | null

export type AbcColumnValueType =
  | 'text'
  | 'status'
  | 'tag'
  | 'badge'
  | 'money'
  | 'number'
  | 'date'
  | 'datetime'
  | 'image'
  | 'progress'
  | 'code'
  | 'copy'
  | 'link'
  | 'switch'

export interface AbcColumnOption {
  label: string
  value: string | number | boolean
  status?: StatusTone | 'error' | 'default'
  color?: string
}

export interface AbcColumnTypeConfig<T = Record<string, any>> {
  type: AbcColumnValueType
  options?: AbcColumnOption[]
  format?: string
  imageWidth?: number | string
  imageHeight?: number | string
  target?: '_blank' | '_self'
  progressColor?: string
  checkedValue?: any
  checkedChildren?: React.ReactNode
  unCheckedChildren?: React.ReactNode
  onChange?: (checked: boolean, record: T) => void | Promise<void>
}

export interface AbcColumnRenderMeta {
  depth: number
  rowIndex: number
  isExpanded: boolean
}

export interface AbcColumnSearchConfig {
  key?: string
  label?: string
  type?: 'input' | 'select' | 'date' | 'datetimePicker' | 'dateRange'
  placeholder?: string
  options?: AbcColumnOption[]
  searchable?: boolean
  multiple?: boolean
  span?: number
  order?: number
  format?: string
  clearable?: boolean
  [key: string]: any
}

export interface AbcColumnFormConfig {
  key?: string
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean | ((isEdit: any, form?: any) => boolean)
  hidden?: boolean | ((isEdit: boolean, form: any) => boolean)
  options?:
    | Array<{ label: React.ReactNode; value: string | number; disabled?: boolean }>
    | ((form: any, isEdit: boolean) => Array<{ label: React.ReactNode; value: string | number; disabled?: boolean }>)
  searchable?: boolean
  multiple?: boolean
  span?: number
  order?: number
  tooltip?: React.ReactNode
  defaultValue?: any
  onChange?: (value: any, form: any) => void
  onFormReady?: (form: any, isEdit: boolean) => void
  render?: (form: any, isEdit: boolean) => React.ReactNode
  [key: string]: any
}

export function parseNumericWidth(w?: number | string, fallback = 150): number {
  if (typeof w === 'number' && Number.isFinite(w)) return w
  if (typeof w === 'string') {
    const parsed = parseFloat(w)
    if (Number.isFinite(parsed) && !w.trim().endsWith('%')) return parsed
  }
  return fallback
}

export interface AbcColumn<T = any> {
  key: string
  title: string
  dataIndex?: (NoInfer<keyof T> & string) | string | string[]
  width?: number | string
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'
  sortable?: boolean
  /** 兼容排序配置别名 */
  sorter?: boolean | ((a: T, b: T) => number)
  /** 表头问号提示文案 */
  tooltip?: React.ReactNode
  /** 是否支持表头快速过滤 */
  filterable?: boolean
  filterType?: 'text' | 'select'
  filterOptions?: SelectOption[]
  /** 内置格式化语义类型（未传自定义 render 时自动格式化） */
  valueType?: AbcColumnValueType
  /** 扩展声明式列类型配置（支持字符串简写或对象精细化配置，如交互式行内 switch） */
  type?: AbcColumnValueType | AbcColumnTypeConfig<T>
  /** 状态/枚举映射字典选项（未传自定义 render 时自动渲染 StatusTag） */
  options?: AbcColumnOption[]
  /** 点击单元格直接唤起详情查看回调（传字符串时可作为跳转路径透传） */
  linkToView?: boolean | string
  /** 超长文本单行省略并展示悬浮完整值 */
  ellipsis?: boolean
  /** 点击一键复制单元格内容 */
  copyable?: boolean
  /** 是否默认显示该列（默认 true） */
  visible?: boolean
  hideInTable?: boolean
  /** 列与派生字段排序权重（数值越小越靠前） */
  order?: number
  /** 单源列派生搜索配置 */
  search?: boolean | AbcColumnSearchConfig
  /** 快捷开启列搜索别名 */
  searchable?: boolean
  /** 单源列派生新增/编辑表单配置 */
  form?: boolean | AbcColumnFormConfig
  /** 单源列是否在详情弹窗中显示（默认 true） */
  view?: boolean
  /** 详情弹窗中的列跨度 */
  viewSpan?: 1 | 2
  /** 详情弹窗自定义渲染函数 */
  viewRender?: (value: any, record: T) => React.ReactNode
  render?: (
    value: any,
    record: T,
    index: number,
    meta?: AbcColumnRenderMeta
  ) => React.ReactNode
}

export interface AbcTableExpandableConfig<T = Record<string, any>> {
  /** 自定义展开子面板渲染函数 */
  expandedRowRender?: (
    record: T,
    index: number,
    depth?: number,
    expanded?: boolean
  ) => React.ReactNode
  /** 判断某行是否允许展开 */
  rowExpandable?: (record: T) => boolean
  /** 树形子级属性名（默认 'children'） */
  childrenColumnName?: string
  /** 树形缩进像素步长（默认 18px） */
  indentSize?: number
  /** 初始默认展开全部可展开行 */
  defaultExpandAllRows?: boolean
  /** 受控展开行主键集合 */
  expandedRowKeys?: Array<string | number>
  /** 展开行变更回调 */
  onExpandedRowsChange?: (keys: Array<string | number>) => void
  /** 单行展开/收起触发回调（可用于异步懒加载子节点） */
  onExpand?: (expanded: boolean, record: T) => void
}

export interface AbcRowSelectionConfig<T = Record<string, any>> {
  selectedRowKeys?: Array<string | number>
  onChange?: (keys: Array<string | number>, rows: T[]) => void
  getCheckboxProps?: (record: T) => { disabled?: boolean; name?: string }
}

export interface TableCoreProps<T = Record<string, any>> {
  columns: AbcColumn<T>[]
  data?: T[]
  /** 兼容 dataSource 属性名 */
  dataSource?: T[]
  rowKey?: keyof T | ((record: T) => string | number)
  loading?: boolean
  density?: AbcTableDensity
  /** 选中行主键数组 */
  selectedKeys?: Array<string | number>
  onSelectionChange?: (keys: Array<string | number>, rows: T[]) => void
  /** 兼容对象式多选配置 */
  rowSelection?: AbcRowSelectionConfig<T>
  /** 排序状态与回调 */
  sortState?: { key: string; direction: SortDirection }
  onSortChange?: (key: string, direction: SortDirection) => void
  /** 是否开启表头内联筛选行 */
  headerFilterMode?: boolean
  headerFilters?: Record<string, any>
  onHeaderFilterChange?: (key: string, value: any) => void
  /** 表头单列气泡筛选器插槽 */
  headerFilterRender?: (col: AbcColumn<T>) => React.ReactNode
  /** 当前处于激活筛选状态的列键列表（用于表头底色高亮提示） */
  activeFilterKeys?: string[]
  /** 当前处于激活筛选状态的列摘要标签映射 */
  activeFilterLabels?: Record<string, string>
  /** 表头筛选激活态高亮色 */
  filterHighlightColor?: string
  /** 右键菜单切换筛选高亮色回调 */
  onFilterHighlightColorChange?: (color: string) => void
  /** 全量可配置列定义（用于右键菜单级联勾选显示/隐藏列） */
  allColumns?: AbcColumn<T>[]
  /** 当前已隐藏的列 key 集合 */
  hiddenColumnKeys?: string[]
  /** 右键级联子菜单切换任意列显隐回调 */
  onToggleColumnVisible?: (key: string) => void
  /** 个性化列宽覆盖 */
  columnWidths?: Record<string, number>
  onColumnResize?: (key: string, width: number) => void
  /** 是否允许表头边缘拖拽调节列宽（默认传入 onColumnResize 时开启，也可显式 true 启用内部自适应列宽） */
  resizable?: boolean
  /** 交互动效规格 */
  motion?: AbcMotionPreset
  /** 个性化列左右固定覆盖（null 表示显式取消固定） */
  columnFixed?: Record<string, 'left' | 'right' | null>
  onColumnPin?: (key: string, fixed: 'left' | 'right' | null) => void
  /** 右键隐藏单列回调 */
  onColumnHide?: (key: string) => void
  /** 右键重置列配置回调 */
  onResetColumns?: () => void
  /** 拖拽调整列顺序回调 */
  onColumnReorder?: (nextOrder: string[]) => void
  /** 行展开与树形 children 子行配置 */
  expandable?: AbcTableExpandableConfig<T>
  /** 是否以树形层级模式渲染（开启后向 col.render 第三参数透传层级深度 depth，并支持异步懒加载子行展开） */
  treeData?: boolean
  /** 是否开启行拖拽重排 */
  rowDraggable?: boolean
  /** 兼容 draggable 属性名 */
  draggable?: boolean
  /** 行拖拽放置排序完成回调 */
  onRowDragEnd?: (activeKey: string | number, overKey: string | number) => void
  /** 兼容 onDragEnd 属性名 */
  onDragEnd?: (activeId: string, overId: string) => void
  /** linkToView 列点击触发查看详情回调 */
  onRowView?: (record: T, linkTarget?: string) => void
  /** 受控单行高亮键值（如与抽屉详情联动） */
  activeRowKey?: string | number | null
  /** 行点击回调（单行点击唤起 Drawer 或选中） */
  onRowClick?: (record: T, event: React.MouseEvent<HTMLTableRowElement>) => void
  /** 自定义行原生属性注入 */
  onRow?: (record: T, index: number) => React.HTMLAttributes<HTMLTableRowElement>
  /** 空状态下一键清空筛选条件回调 */
  onEmptyReset?: () => void
  /** 表格滚动区域最大高度（开启后表头纵向吸顶） */
  maxHeight?: number | string
  ariaLabel?: string
  emptyText?: string
  className?: string
}

export const DENSITY_CELL_PY: Record<AbcTableDensity, string> = {
  compact: 'py-2 px-3',
  default: 'py-3 px-4',
  comfortable: 'py-3.5 px-4',
}

export interface FlattenedRow<T> {
  record: T
  key: string | number
  rowIdx: number
  depth: number
  hasTreeChildren: boolean
}

export const COLOR_ALIAS_TO_TONE: Record<string, StatusTone> = {
  green: 'success',
  emerald: 'success',
  success: 'success',
  red: 'danger',
  rose: 'danger',
  error: 'danger',
  danger: 'danger',
  yellow: 'warning',
  amber: 'warning',
  warning: 'warning',
  orange: 'orange',
  blue: 'info',
  info: 'info',
  primary: 'primary',
  cyan: 'cyan',
  purple: 'purple',
  violet: 'purple',
  teal: 'teal',
  pink: 'pink',
  gray: 'neutral',
  slate: 'neutral',
  default: 'neutral',
  neutral: 'neutral',
}

export const AUTO_OPTION_TONES: StatusTone[] = [
  'info',
  'success',
  'warning',
  'danger',
  'purple',
  'cyan',
  'orange',
  'teal',
  'pink',
]

export const FILTER_HIGHLIGHT_SWATCHES = [
  { color: '#3b82f6', label: '经典蓝' },
  { color: '#10b981', label: '翡翠绿' },
  { color: '#f59e0b', label: '琥珀橙' },
  { color: '#f43f5e', label: '珊瑚红' },
  { color: '#8b5cf6', label: '极光紫' },
]

