import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset } from '@abc-design/tokens'
import dayjs from 'dayjs'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpDown,
  Check,
  ChevronRight,
  Columns,
  EyeOff,
  GripVertical,
  HelpCircle,
  Loader2,
  Palette,
  Pin,
  PinOff,
  RotateCcw,
} from 'lucide-react'
import { useAbcMotion } from '../../hooks'
import { useControllableState } from '../../hooks/useControllableState'
import { getOverlayPortalContainer } from '../../hooks/useFloatingPosition'
import type { AbcTableDensity } from '../../hooks/useTableSettings'
import { cn } from '../../utils/cn'
import { EmptyState, Skeleton } from '../display/FeedbackStates'
import { ImagePreview } from '../display/ImagePreview'
import { Tooltip } from '../display/Overlays'
import { StatusTag, type StatusTone } from '../display/StatusTag'
import { Progress } from '../feedback/FeedbackExtras'
import { Checkbox, Switch } from '../form/Controls'
import { Input } from '../form/Input'
import { Select, type SelectOption } from '../form/Select'
import { CopyableText } from '../typography/CopyableText'
import { useAbcConfig } from '../../provider/AbcProvider'

/**
 * 安全解析对象的嵌套属性路径（支持 'a.b.c' 或 ['a', 'b', 'c']）
 */
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

function parseNumericWidth(w?: number | string, fallback = 150): number {
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

const DENSITY_CELL_PY: Record<AbcTableDensity, string> = {
  compact: 'py-2 px-3',
  default: 'py-3 px-4',
  comfortable: 'py-3.5 px-4',
}

interface FlattenedRow<T> {
  record: T
  key: string | number
  rowIdx: number
  depth: number
  hasTreeChildren: boolean
}

const COLOR_ALIAS_TO_TONE: Record<string, StatusTone> = {
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

const AUTO_OPTION_TONES: StatusTone[] = [
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

const FILTER_HIGHLIGHT_SWATCHES = [
  { color: '#3b82f6', label: '经典蓝' },
  { color: '#10b981', label: '翡翠绿' },
  { color: '#f59e0b', label: '琥珀橙' },
  { color: '#f43f5e', label: '珊瑚红' },
  { color: '#8b5cf6', label: '极光紫' },
]

function parseDayjsValue(rawVal: any) {
  if (typeof rawVal === 'number') {
    return dayjs(rawVal < 1e11 ? rawVal * 1000 : rawVal)
  }
  const str = String(rawVal).trim()
  if (/^\d{10}$/.test(str)) return dayjs(Number(str) * 1000)
  if (/^\d{13}$/.test(str)) return dayjs(Number(str))
  return dayjs(rawVal)
}

/**
 * 行内交互式拨动开关单元格（支持乐观响应、异步防重入与报错自动回滚）
 */
function AbcSwitchCell<T extends Record<string, any>>({
  value,
  record,
  config,
}: {
  value: any
  record: T
  config: AbcColumnTypeConfig<T>
}) {
  const { toast } = useAbcConfig()
  const deriveChecked = (v: any) =>
    config.checkedValue !== undefined
      ? String(v) === String(config.checkedValue)
      : v === true || v === 1 || v === '1'
  const [optimistic, setOptimistic] = useState(() => deriveChecked(value))
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setOptimistic(deriveChecked(value))
  }, [value, config.checkedValue])

  const handleToggle = async (next: boolean) => {
    if (!config.onChange || loading) return
    const prev = optimistic
    setOptimistic(next)
    setLoading(true)
    try {
      await config.onChange(next, record)
    } catch (err: any) {
      setOptimistic(prev)
      toast.error(err?.message || '更新状态失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <span className="inline-flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
      <Switch
        size="sm"
        checked={optimistic}
        loading={loading}
        disabled={!config.onChange}
        onChange={handleToggle}
      />
      {(config.checkedChildren || config.unCheckedChildren) && (
        <span className="text-xs text-[var(--abc-fg-secondary)]">
          {optimistic ? config.checkedChildren : config.unCheckedChildren}
        </span>
      )}
    </span>
  )
}

export function renderBuiltInValue<T extends Record<string, any>>(
  rawVal: any,
  record: T,
  col: AbcColumn<T>,
  onRowView?: (record: T, linkTarget?: string) => void
): React.ReactNode {
  const hasExplicitSwitchType =
    col.type === 'switch' ||
    (typeof col.type === 'object' && col.type !== null && col.type.type === 'switch')

  const typeCfg: AbcColumnTypeConfig<T> | undefined =
    typeof col.type === 'object' && col.type !== null
      ? col.type
      : col.type
        ? { type: col.type }
        : col.valueType
          ? { type: col.valueType }
          : undefined

  // 交互式行内开关即使值为 0 / false 也必须正常渲染，不可落入空值占位
  if (
    typeCfg?.type === 'switch' &&
    (hasExplicitSwitchType || typeCfg.onChange || typeCfg.checkedValue !== undefined)
  ) {
    return <AbcSwitchCell value={rawVal} record={record} config={typeCfg} />
  }

  if (rawVal === undefined || rawVal === null || rawVal === '') {
    return <span className="text-[var(--abc-fg-placeholder)]">-</span>
  }

  const effectiveOptions = typeCfg?.options ?? col.options
  // 枚举 / 状态标签映射（兼容大小写无关匹配与无显式配色时的 9 色板自动轮换）
  if (effectiveOptions && effectiveOptions.length > 0) {
    const rawStr = String(rawVal)
    let matchedIdx = effectiveOptions.findIndex((opt) => String(opt.value) === rawStr)
    if (matchedIdx < 0) {
      const lower = rawStr.toLowerCase()
      matchedIdx = effectiveOptions.findIndex((opt) => String(opt.value).toLowerCase() === lower)
    }
    if (matchedIdx >= 0) {
      const matched = effectiveOptions[matchedIdx]
      const statusKey = matched.status ? String(matched.status).toLowerCase() : ''
      const colorKey = matched.color ? String(matched.color).toLowerCase() : ''
      const resolvedTone: StatusTone | undefined =
        (statusKey ? COLOR_ALIAS_TO_TONE[statusKey] : undefined) ??
        (colorKey ? COLOR_ALIAS_TO_TONE[colorKey] : undefined) ??
        (!matched.status && !matched.color
          ? AUTO_OPTION_TONES[matchedIdx % AUTO_OPTION_TONES.length]
          : undefined)
      const showDot = (col as any).__autoOptionsFromSearch ? false : true
      return (
        <StatusTag
          tone={resolvedTone}
          status={matched.status}
          color={matched.color}
          dot={showDot}
        >
          {matched.label}
        </StatusTag>
      )
    }
  }

  const effectiveType = typeCfg?.type
  let formatted: React.ReactNode
  switch (effectiveType) {
    case 'money': {
      const num = Number(rawVal)
      formatted = Number.isNaN(num) ? (
        String(rawVal)
      ) : (
        <span className="font-mono font-semibold text-[var(--abc-fg)] tabular-nums">
          ¥{num.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      )
      break
    }
    case 'number': {
      const num = Number(rawVal)
      formatted = Number.isNaN(num) ? (
        String(rawVal)
      ) : (
        <span className="font-mono tabular-nums">{num.toLocaleString('zh-CN')}</span>
      )
      break
    }
    case 'date': {
      const parsed = parseDayjsValue(rawVal)
      const fmt = typeCfg?.format || 'YYYY-MM-DD'
      formatted = (
        <span className="font-mono text-[var(--abc-fg-muted)] tabular-nums">
          {parsed.isValid() ? parsed.format(fmt) : String(rawVal)}
        </span>
      )
      break
    }
    case 'datetime': {
      const parsed = parseDayjsValue(rawVal)
      const fmt = typeCfg?.format || 'YYYY-MM-DD HH:mm:ss'
      formatted = (
        <span className="font-mono text-[var(--abc-fg-muted)] tabular-nums">
          {parsed.isValid() ? parsed.format(fmt) : String(rawVal)}
        </span>
      )
      break
    }
    case 'image':
      return (
        <ImagePreview
          src={String(rawVal)}
          width={typeCfg?.imageWidth ?? 32}
          height={typeCfg?.imageHeight ?? 32}
        />
      )
    case 'progress':
      return (
        <Progress
          percent={Number(rawVal) || 0}
          strokeColor={typeCfg?.progressColor}
          className="min-w-[92px]"
        />
      )
    case 'code':
      formatted = (
        <code className="rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg)]">
          {String(rawVal)}
        </code>
      )
      break
    case 'copy':
      return <CopyableText text={String(rawVal)} />
    case 'link':
      return (
        <a
          href={String(rawVal)}
          target={typeCfg?.target ?? '_blank'}
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-[var(--abc-primary)] hover:underline"
        >
          {String(rawVal)}
        </a>
      )
    case 'switch':
      return (
        <StatusTag tone={rawVal ? 'success' : 'neutral'} dot>
          {rawVal ? '已启用' : '已停用'}
        </StatusTag>
      )
    case 'status':
    case 'tag':
    case 'badge':
      return <StatusTag dot>{String(rawVal)}</StatusTag>
    default:
      formatted = String(rawVal)
  }

  if (col.linkToView && onRowView) {
    const linkTarget = typeof col.linkToView === 'string' ? col.linkToView : undefined
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onRowView(record, linkTarget)
        }}
        className="max-w-full truncate text-left font-medium text-[var(--abc-primary)] hover:underline cursor-pointer"
      >
        {formatted}
      </button>
    )
  }

  if (col.copyable) {
    return <CopyableText text={String(rawVal)} displayText={formatted} />
  }

  if (col.ellipsis) {
    return (
      <span title={String(rawVal)} className="block max-w-full truncate">
        {formatted}
      </span>
    )
  }

  return formatted
}

/**
 * 企业级核心数据表格引擎 (TableCore)
 * 支持多列累加粘性左/右固定列、表头右键快捷菜单、拖拽调节列宽、拖拽交换列序、
 * 排序、表头气泡/内联双模筛选、可展开子面板与树形数据、语义化 valueType 渲染及键盘可访问滚动区
 */
export function TableCore<T extends Record<string, any> = Record<string, any>>({
  columns,
  data,
  dataSource,
  rowKey = 'id',
  loading = false,
  density = 'default',
  selectedKeys,
  onSelectionChange,
  rowSelection,
  sortState,
  onSortChange,
  headerFilterMode = false,
  headerFilters = {},
  onHeaderFilterChange,
  headerFilterRender,
  activeFilterKeys,
  activeFilterLabels,
  filterHighlightColor,
  onFilterHighlightColorChange,
  allColumns,
  hiddenColumnKeys = [],
  onToggleColumnVisible,
  columnWidths = {},
  onColumnResize,
  resizable,
  motion,
  columnFixed = {},
  onColumnPin,
  onColumnHide,
  onResetColumns,
  onColumnReorder,
  expandable,
  treeData = false,
  rowDraggable,
  draggable,
  onRowDragEnd,
  onDragEnd,
  onRowView,
  activeRowKey,
  onRowClick,
  onRow,
  onEmptyReset,
  maxHeight,
  ariaLabel = '数据表格',
  emptyText = '暂无符合条件的数据',
  className,
}: TableCoreProps<T>) {
  const resolvedData = data ?? dataSource ?? []
  const isRowDraggable = Boolean(rowDraggable ?? draggable)
  const emitRowDragEnd = useMemo(() => {
    if (onRowDragEnd) return onRowDragEnd
    if (onDragEnd) {
      return (activeKey: string | number, overKey: string | number) =>
        onDragEnd(String(activeKey), String(overKey))
    }
    return undefined
  }, [onRowDragEnd, onDragEnd])
  const resolvedMotion = useAbcMotion(motion)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contextMenuRef = useRef<HTMLDivElement>(null)
  const [draggingKey, setDraggingKey] = useState<string | null>(null)
  const [liveDragOrder, setLiveDragOrder] = useState<string[] | null>(null)
  const preDragOrderRef = useRef<string[] | null>(null)
  const hasLiveSwappedRef = useRef(false)
  const prevColRectsRef = useRef<Map<string, number> | null>(null)
  const [localWidths, setLocalWidths] = useState<Record<string, number>>({})
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const [scrollEdge, setScrollEdge] = useState({ left: false, right: false })
  const [visibilitySubmenuOpen, setVisibilitySubmenuOpen] = useState(false)
  const [contextMenu, setContextMenu] = useState<{
    col: AbcColumn<T>
    x: number
    y: number
  } | null>(null)

  const effectiveColumnWidths = useMemo(
    () => ({ ...localWidths, ...columnWidths }),
    [localWidths, columnWidths]
  )
  const isResizable = resizable ?? Boolean(onColumnResize)

  const emitColumnResize = (key: string, nextWidth: number) => {
    setLocalWidths((prev) => ({ ...prev, [key]: nextWidth }))
    onColumnResize?.(key, nextWidth)
  }

  const updateScrollEdge = () => {
    const el = wrapperRef.current
    if (!el) return
    const left = el.scrollLeft > 1
    const right = el.scrollWidth - el.clientWidth - el.scrollLeft > 1
    setScrollEdge((prev) => (prev.left === left && prev.right === right ? prev : { left, right }))
  }

  useLayoutEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const syncWidth = () => {
      if (el.clientWidth > 0) {
        setWrapperWidth(el.clientWidth)
      }
      updateScrollEdge()
    }
    syncWidth()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver((entries) => {
      const entryWidth = entries[0]?.contentRect?.width
      if (typeof entryWidth === 'number' && entryWidth > 0) {
        setWrapperWidth(Math.floor(entryWidth))
      } else {
        syncWidth()
      }
      updateScrollEdge()
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const resolveKey = (record: T, idx: number): string | number => {
    if (typeof rowKey === 'function') return rowKey(record)
    return (record?.[rowKey] as string | number) ?? idx
  }

  const getEffectiveFixed = (col: AbcColumn<T>): 'left' | 'right' | undefined => {
    if (col.key in columnFixed) {
      return columnFixed[col.key] ?? undefined
    }
    return col.fixed
  }

  // 按 [左侧固定列, 常规滚动列, 右侧固定列] 规整排列，并支持拖拽过程实时重排映射
  const orderedColumns = useMemo(() => {
    const baseCols =
      liveDragOrder && liveDragOrder.length > 0
        ? [...columns].sort((a, b) => {
            const ia = liveDragOrder.indexOf(a.key)
            const ib = liveDragOrder.indexOf(b.key)
            if (ia === -1 && ib === -1) return 0
            if (ia === -1) return 1
            if (ib === -1) return -1
            return ia - ib
          })
        : columns

    const leftCols: AbcColumn<T>[] = []
    const centerCols: AbcColumn<T>[] = []
    const rightCols: AbcColumn<T>[] = []
    for (const col of baseCols) {
      const fx = getEffectiveFixed(col)
      if (fx === 'left') leftCols.push(col)
      else if (fx === 'right') rightCols.push(col)
      else centerCols.push(col)
    }
    return [...leftCols, ...centerCols, ...rightCols]
  }, [columns, columnFixed, liveDragOrder])

  const effectiveSelectedKeys = selectedKeys ?? rowSelection?.selectedRowKeys
  const effectiveOnSelectionChange = onSelectionChange ?? rowSelection?.onChange
  const selectable =
    Array.isArray(effectiveSelectedKeys) && typeof effectiveOnSelectionChange === 'function'
  const hasExpandColumn = Boolean(expandable)
  const childrenColumnName = expandable?.childrenColumnName || 'children'
  const indentPx = expandable?.indentSize ?? 18

  const collectAllExpandableKeys = (rows: T[]): Array<string | number> => {
    const keys: Array<string | number> = []
    const collect = (list: T[]) => {
      list.forEach((r, idx) => {
        const k = resolveKey(r, idx)
        const childRows = r?.[childrenColumnName]
        const hasChildren = Array.isArray(childRows) && childRows.length > 0
        if (hasChildren || (expandable?.expandedRowRender && (!expandable.rowExpandable || expandable.rowExpandable(r)))) {
          keys.push(k)
        }
        if (hasChildren) {
          collect(childRows as T[])
        }
      })
    }
    collect(rows)
    return Array.from(new Set(keys))
  }

  const initialExpandedKeys = useMemo<Array<string | number>>(() => {
    if (!expandable?.defaultExpandAllRows) return []
    return collectAllExpandableKeys(resolvedData)
  }, [])

  const [expandedKeys, setExpandedKeys] = useControllableState<Array<string | number>>({
    value: expandable?.expandedRowKeys,
    defaultValue: initialExpandedKeys,
    onChange: expandable?.onExpandedRowsChange,
  })

  const hasAutoExpandedRef = useRef(initialExpandedKeys.length > 0)

  useEffect(() => {
    if (
      !expandable?.defaultExpandAllRows ||
      expandable?.expandedRowKeys !== undefined ||
      hasAutoExpandedRef.current ||
      resolvedData.length === 0
    ) {
      return
    }
    const keys = collectAllExpandableKeys(resolvedData)
    if (keys.length > 0) {
      hasAutoExpandedRef.current = true
      setExpandedKeys(keys)
    }
  }, [expandable?.defaultExpandAllRows, expandable?.expandedRowKeys, resolvedData, childrenColumnName])

  const toggleExpandRow = (key: string | number, record?: T) => {
    const wasExpanded = expandedKeys.includes(key)
    setExpandedKeys(
      wasExpanded
        ? expandedKeys.filter((k) => k !== key)
        : [...expandedKeys, key]
    )
    if (record) {
      expandable?.onExpand?.(!wasExpanded, record)
    }
  }

  // 展平树形 children 结构（当某节点处于展开态时递归插入子行）
  const flattenedRows = useMemo<FlattenedRow<T>[]>(() => {
    const list: FlattenedRow<T>[] = []
    const walk = (rows: T[], depth: number) => {
      rows.forEach((record, idx) => {
        const key = resolveKey(record, idx)
        const children = Array.isArray(record?.[childrenColumnName])
          ? (record[childrenColumnName] as T[])
          : []
        const hasTreeChildren =
          children.length > 0 || Boolean(treeData && expandable?.rowExpandable?.(record))
        list.push({ record, key, rowIdx: idx, depth, hasTreeChildren })
        if (children.length > 0 && expandedKeys.includes(key)) {
          walk(children, depth + 1)
        }
      })
    }
    walk(resolvedData, 0)
    return list
  }, [resolvedData, expandedKeys, rowKey, childrenColumnName, treeData, expandable?.rowExpandable])

  const colWidthMeta = useMemo(() => {
    const prefixW = (selectable ? 44 : 0) + (hasExpandColumn ? 40 : 0)
    const baseWidths: Record<string, number> = {}
    let sumBase = 0
    for (const col of orderedColumns) {
      const titleFallback = Math.max(120, Array.from(col.title || '').length * 14 + 76)
      const w = effectiveColumnWidths[col.key] ?? parseNumericWidth(col.width, titleFallback)
      baseWidths[col.key] = w
      sumBase += w
    }

    const resolvedWidths: Record<string, number> = { ...baseWidths }
    const availW = wrapperWidth
    const slack = availW > prefixW + sumBase ? availW - (prefixW + sumBase) : 0

    if (slack > 0) {
      const isLocked = (col: AbcColumn<T>) =>
        col.key === '__abc_actions__' ||
        col.key === '__actions__' ||
        col.key === '__drag_handle__' ||
        col.key in effectiveColumnWidths ||
        Boolean(getEffectiveFixed(col))

      const flexCols = orderedColumns.filter((c) => !isLocked(c))
      const fallbackTargets = orderedColumns.filter(
        (c) => c.key !== '__abc_actions__' && c.key !== '__actions__' && c.key !== '__drag_handle__'
      )
      const targets = flexCols.length > 0 ? flexCols : fallbackTargets

      if (targets.length > 0) {
        const targetSum = targets.reduce((acc, c) => acc + baseWidths[c.key], 0) || targets.length
        let allocated = 0
        targets.forEach((col, idx) => {
          const share =
            idx === targets.length - 1
              ? slack - allocated
              : Math.floor((slack * baseWidths[col.key]) / targetSum)
          allocated += share
          resolvedWidths[col.key] = baseWidths[col.key] + Math.max(0, share)
        })
      }
    }

    const totalResolved =
      prefixW + orderedColumns.reduce((acc, col) => acc + (resolvedWidths[col.key] ?? 150), 0)

    return {
      resolvedWidths,
      resolvedTableWidth: availW > 0 ? Math.max(availW, totalResolved) : undefined,
    }
  }, [orderedColumns, effectiveColumnWidths, columnFixed, wrapperWidth, selectable, hasExpandColumn])

  const stickyMeta = useMemo(() => {
    const leftOffsets: Record<string, number> = {}
    const rightOffsets: Record<string, number> = {}
    let lastLeftKey = ''
    let firstRightKey = ''

    let accLeft = (selectable ? 44 : 0) + (hasExpandColumn ? 40 : 0)
    for (const col of orderedColumns) {
      if (getEffectiveFixed(col) === 'left') {
        leftOffsets[col.key] = accLeft
        accLeft += colWidthMeta.resolvedWidths[col.key] ?? 150
        lastLeftKey = col.key
      }
    }

    let accRight = 0
    for (let i = orderedColumns.length - 1; i >= 0; i--) {
      const col = orderedColumns[i]
      if (getEffectiveFixed(col) === 'right') {
        rightOffsets[col.key] = accRight
        accRight += colWidthMeta.resolvedWidths[col.key] ?? 150
        firstRightKey = col.key
      }
    }

    return {
      leftOffsets,
      rightOffsets,
      lastLeftKey,
      firstRightKey,
      hasAnyLeftFixed: Boolean(lastLeftKey),
    }
  }, [orderedColumns, colWidthMeta, columnFixed, selectable, hasExpandColumn])

  useEffect(() => {
    updateScrollEdge()
  }, [colWidthMeta.resolvedTableWidth, resolvedData.length])

  const selectablePageItems = useMemo(
    () =>
      flattenedRows.filter(
        (item) => !rowSelection?.getCheckboxProps?.(item.record)?.disabled
      ),
    [flattenedRows, rowSelection]
  )

  const allPageKeys = useMemo(
    () => selectablePageItems.map((item) => item.key),
    [selectablePageItems]
  )

  const allSelected =
    selectable &&
    allPageKeys.length > 0 &&
    allPageKeys.every((k) => effectiveSelectedKeys.includes(k))
  const someSelected =
    selectable && !allSelected && allPageKeys.some((k) => effectiveSelectedKeys.includes(k))

  const toggleAll = (checked: boolean) => {
    if (!selectable) return
    const shouldSelectAll = someSelected ? true : checked
    if (shouldSelectAll) {
      const merged = Array.from(new Set([...effectiveSelectedKeys, ...allPageKeys]))
      effectiveOnSelectionChange(
        merged,
        flattenedRows.filter((item) => merged.includes(item.key)).map((item) => item.record)
      )
    } else {
      const next = effectiveSelectedKeys.filter((k) => !allPageKeys.includes(k))
      effectiveOnSelectionChange(next, [])
    }
  }

  const toggleOne = (key: string | number) => {
    if (!selectable) return
    const exists = effectiveSelectedKeys.includes(key)
    const next = exists
      ? effectiveSelectedKeys.filter((k) => k !== key)
      : [...effectiveSelectedKeys, key]
    effectiveOnSelectionChange(
      next,
      flattenedRows.filter((item) => next.includes(item.key)).map((item) => item.record)
    )
  }

  const startResizeColumn = (
    e: React.MouseEvent,
    col: AbcColumn<T>,
    edge: 'left' | 'right' = 'right'
  ) => {
    if (!isResizable) return
    e.preventDefault()
    e.stopPropagation()
    const startX = e.clientX
    const thEl = (e.currentTarget as HTMLElement).parentElement
    const startW =
      effectiveColumnWidths[col.key] ??
      (typeof col.width === 'number' ? col.width : undefined) ??
      colWidthMeta.resolvedWidths[col.key] ??
      thEl?.offsetWidth ??
      140
    const minW = col.key === '__abc_actions__' ? 80 : 72

    const prevCursor = typeof document !== 'undefined' ? document.body.style.cursor : ''
    const prevUserSelect = typeof document !== 'undefined' ? document.body.style.userSelect : ''
    if (typeof document !== 'undefined') {
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
    }

    const onMove = (ev: MouseEvent) => {
      const delta = ev.clientX - startX
      const nextW =
        edge === 'left'
          ? Math.max(minW, Math.round(startW - delta))
          : Math.max(minW, Math.round(startW + delta))
      emitColumnResize(col.key, nextW)
    }
    const onUp = () => {
      if (typeof document !== 'undefined') {
        document.body.style.cursor = prevCursor
        document.body.style.userSelect = prevUserSelect
      }
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  // 拖拽表头列序时按 Escape 立即中止并回滚至拖拽前排列
  useEffect(() => {
    if (!draggingKey) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const origOrder = preDragOrderRef.current
        setDraggingKey(null)
        setLiveDragOrder(null)
        preDragOrderRef.current = null
        prevColRectsRef.current = null
        hasLiveSwappedRef.current = false
        if (origOrder && onColumnReorder) {
          onColumnReorder(origOrder)
        }
      }
    }
    document.addEventListener('keydown', onKeyDown, true)
    return () => document.removeEventListener('keydown', onKeyDown, true)
  }, [draggingKey, onColumnReorder])

  // WAAPI FLIP 列重排位移动画：采样旧坐标并在重排提交后平滑滑向新槽位
  const orderedKeySig = orderedColumns.map((c) => c.key).join('|')
  useLayoutEffect(() => {
    const prevMap = prevColRectsRef.current
    if (!prevMap) return
    prevColRectsRef.current = null

    const wrapper = wrapperRef.current
    if (!wrapper || resolvedMotion === 'none') return
    const reducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const duration = resolvedMotion === 'subtle' ? 140 : 220
    const easing = 'cubic-bezier(0.22, 1, 0.36, 1)'

    wrapper.querySelectorAll<HTMLElement>('[data-col-key]').forEach((thEl) => {
      const k = thEl.dataset.colKey
      if (!k) return
      const prevLeft = prevMap.get(k)
      if (prevLeft === undefined) return
      const nextLeft = thEl.getBoundingClientRect().left
      const deltaX = prevLeft - nextLeft
      if (Math.abs(deltaX) <= 1) return

      if (typeof thEl.animate === 'function') {
        thEl.animate([{ translate: `${deltaX}px 0` }, { translate: '0 0' }], {
          duration,
          easing,
        })
      }

      const escapedKey =
        typeof CSS !== 'undefined' && typeof CSS.escape === 'function' ? CSS.escape(k) : k
      const cellEls = wrapper.querySelectorAll<HTMLElement>(`[data-col-cell="${escapedKey}"]`)
      const limit = Math.min(cellEls.length, 20)
      for (let i = 0; i < limit; i++) {
        const cell = cellEls[i]
        if (typeof cell.animate === 'function') {
          cell.animate([{ translate: `${deltaX}px 0` }, { translate: '0 0' }], {
            duration,
            easing,
          })
        }
      }
    })
  }, [orderedKeySig, resolvedMotion])

  const isColSortable = (col: AbcColumn<T>) => Boolean(col.sortable || col.sorter)

  const handleSortClick = (col: AbcColumn<T>) => {
    if (!isColSortable(col) || !onSortChange) return
    const currentDir = sortState?.key === col.key ? sortState.direction : null
    const nextDir: SortDirection =
      currentDir === null ? 'asc' : currentDir === 'asc' ? 'desc' : null
    onSortChange(col.key, nextDir)
  }

  // 右键表头上下文菜单外部点击 / Esc / 滚动关闭
  useEffect(() => {
    if (!contextMenu) return
    const close = (e?: Event) => {
      if (
        e &&
        e.type === 'mousedown' &&
        contextMenuRef.current?.contains(e.target as Node)
      ) {
        return
      }
      setContextMenu(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setContextMenu(null)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', onKey, true)
    window.addEventListener('scroll', close, true)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', onKey, true)
      window.removeEventListener('scroll', close, true)
    }
  }, [contextMenu])

  const handleHeaderContextMenu = (e: React.MouseEvent, col: AbcColumn<T>) => {
    if (col.key === '__abc_actions__' || col.key === '__actions__' || col.key === '__drag_handle__') {
      return
    }
    const hasActions = Boolean(
      (isColSortable(col) && onSortChange) ||
        onColumnPin ||
        onColumnReorder ||
        onColumnHide ||
        onToggleColumnVisible ||
        onFilterHighlightColorChange ||
        onResetColumns
    )
    if (!hasActions) return
    e.preventDefault()
    setVisibilitySubmenuOpen(false)
    const vw = typeof window !== 'undefined' ? window.innerWidth : 1024
    const vh = typeof window !== 'undefined' ? window.innerHeight : 768
    const menuW = 208
    const menuH = 340
    setContextMenu({
      col,
      x: Math.max(8, Math.min(e.clientX, vw - menuW - 8)),
      y: Math.max(8, Math.min(e.clientY, vh - menuH - 8)),
    })
  }

  const movableColumns = useMemo(
    () =>
      orderedColumns.filter(
        (c) => c.key !== '__abc_actions__' && c.key !== '__actions__' && c.key !== '__drag_handle__'
      ),
    [orderedColumns]
  )

  const submenuConfigurableCols = useMemo(
    () =>
      (allColumns ?? movableColumns).filter(
        (c) =>
          !c.hideInTable &&
          c.key !== '__abc_actions__' &&
          c.key !== '__actions__' &&
          c.key !== '__drag_handle__'
      ),
    [allColumns, movableColumns]
  )

  const handleMoveColumnStep = (colKey: string, direction: 'left' | 'right') => {
    if (!onColumnReorder) return
    const keys = movableColumns.map((c) => c.key)
    const idx = keys.indexOf(colKey)
    if (idx < 0) return
    const targetIdx = direction === 'left' ? idx - 1 : idx + 1
    if (targetIdx < 0 || targetIdx >= keys.length) return
    const next = [...keys]
    ;[next[idx], next[targetIdx]] = [next[targetIdx], next[idx]]
    onColumnReorder(next)
    setContextMenu(null)
  }

  const totalColSpan =
    orderedColumns.length + (selectable ? 1 : 0) + (hasExpandColumn ? 1 : 0)

  const portalTarget = contextMenu ? getOverlayPortalContainer(wrapperRef.current) : null
  const hasInlineHeaderFilterRow = Boolean(
    headerFilterMode && orderedColumns.some((col) => col.filterable)
  )

  return (
    <div className="relative">
      {loading && flattenedRows.length > 0 && (
        <div
          aria-live="polite"
          aria-busy="true"
          className="pointer-events-auto absolute inset-0 z-30 flex items-center justify-center rounded-[var(--abc-radius-lg)] bg-[var(--abc-bg-surface)]/60 backdrop-blur-[1px] transition-opacity"
        >
          <Loader2 className="h-6 w-6 animate-spin text-[var(--abc-primary)]" />
        </div>
      )}

      <div
        ref={wrapperRef}
        tabIndex={0}
        role="region"
        aria-label={ariaLabel}
        data-motion={resolvedMotion}
        onScroll={updateScrollEdge}
        style={
          maxHeight !== undefined
            ? { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }
            : undefined
        }
        className={cn(
          'abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
          className
        )}
      >
        <table
          style={{
            width: colWidthMeta.resolvedTableWidth ? `${colWidthMeta.resolvedTableWidth}px` : '100%',
            tableLayout: 'fixed',
          }}
          className="w-full border-separate border-spacing-0 text-left text-xs"
        >
          <colgroup>
            {selectable && <col style={{ width: '44px' }} />}
            {hasExpandColumn && <col style={{ width: '40px' }} />}
            {orderedColumns.map((col) => (
              <col
                key={col.key}
                data-col-width-key={col.key}
                style={{ width: `${colWidthMeta.resolvedWidths[col.key]}px` }}
              />
            ))}
          </colgroup>
          <thead className="sticky top-0 z-20 bg-[var(--abc-bg-muted)]">
            <tr>
              {selectable && (
                <th
                  style={{ left: 0 }}
                  className={cn(
                    'sticky z-30 w-11 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2.5 py-3 text-center',
                    !stickyMeta.hasAnyLeftFixed &&
                      scrollEdge.left &&
                      'shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]'
                  )}
                >
                  <Checkbox
                    checked={allSelected}
                    indeterminate={someSelected}
                    onChange={toggleAll}
                  />
                </th>
              )}
              {hasExpandColumn && (
                <th
                  style={
                    stickyMeta.hasAnyLeftFixed
                      ? { left: selectable ? 44 : 0 }
                      : undefined
                  }
                  aria-label="展开列"
                  className={cn(
                    'w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3',
                    stickyMeta.hasAnyLeftFixed && 'sticky z-20'
                  )}
                />
              )}
              {orderedColumns.map((col, colIndex) => {
                const colW = colWidthMeta.resolvedWidths[col.key]
                const fx = getEffectiveFixed(col)
                const sortableCol = isColSortable(col)
                const currentDir = sortState?.key === col.key ? sortState.direction : null
                const isDraggingThis = draggingKey === col.key
                const isFilterHighlighted = Boolean(activeFilterKeys?.includes(col.key))
                const filterSummaryLabel = activeFilterLabels?.[col.key]
                const nextCol = orderedColumns[colIndex + 1]
                const nextFx = nextCol ? getEffectiveFixed(nextCol) : undefined
                const showRightDivider = Boolean(nextCol && nextFx !== 'right')
                const showLeftDivider = col.key === stickyMeta.firstRightKey
                const headerFilterNode =
                  headerFilterRender && (col.filterable || headerFilterMode)
                    ? headerFilterRender(col)
                    : null
                const stickyStyle: React.CSSProperties = {
                  width: colW ? `${colW}px` : undefined,
                  ...(fx === 'left' ? { left: `${stickyMeta.leftOffsets[col.key] ?? 0}px` } : {}),
                  ...(fx === 'right' ? { right: `${stickyMeta.rightOffsets[col.key] ?? 0}px` } : {}),
                  ...(isFilterHighlighted
                    ? {
                        backgroundColor: filterHighlightColor || '#3b82f6',
                        color: '#ffffff',
                      }
                    : {}),
                }

                const commitReorderAt = (targetColKey: string) => {
                  if (!draggingKey || !onColumnReorder) return
                  const currentKeys =
                    liveDragOrder && liveDragOrder.length > 0
                      ? liveDragOrder
                      : orderedColumns
                          .filter((c) => c.key !== '__abc_actions__' && c.key !== '__actions__')
                          .map((c) => c.key)
                  const fromIdx = currentKeys.indexOf(draggingKey)
                  const toIdx = currentKeys.indexOf(targetColKey)
                  if (fromIdx < 0 || toIdx < 0 || fromIdx === toIdx) return

                  if (wrapperRef.current) {
                    const map = new Map<string, number>()
                    wrapperRef.current
                      .querySelectorAll<HTMLElement>('[data-col-key]')
                      .forEach((el) => {
                        const k = el.dataset.colKey
                        if (k) map.set(k, el.getBoundingClientRect().left)
                      })
                    prevColRectsRef.current = map
                  }

                  const reordered = [...currentKeys]
                  const [moved] = reordered.splice(fromIdx, 1)
                  reordered.splice(toIdx, 0, moved)
                  hasLiveSwappedRef.current = true
                  setLiveDragOrder(reordered)
                  onColumnReorder(reordered)
                }

                return (
                  <th
                    key={col.key}
                    data-col-key={col.key}
                    data-dragging={isDraggingThis ? 'true' : undefined}
                    draggable={Boolean(
                      onColumnReorder &&
                        !fx &&
                        col.key !== '__abc_actions__' &&
                        col.key !== '__actions__' &&
                        col.key !== '__drag_handle__'
                    )}
                    onContextMenu={(e) => handleHeaderContextMenu(e, col)}
                    onDragStart={(e) => {
                      const initialKeys = orderedColumns
                        .filter((c) => c.key !== '__abc_actions__' && c.key !== '__actions__')
                        .map((c) => c.key)
                      preDragOrderRef.current = initialKeys
                      hasLiveSwappedRef.current = false
                      setDraggingKey(col.key)
                      setLiveDragOrder(initialKeys)
                      if (e.dataTransfer) {
                        e.dataTransfer.effectAllowed = 'move'
                      }
                    }}
                    onDragOver={(e) => {
                      if (
                        !draggingKey ||
                        draggingKey === col.key ||
                        fx ||
                        col.key === '__abc_actions__' ||
                        col.key === '__actions__' ||
                        !onColumnReorder
                      ) {
                        return
                      }
                      e.preventDefault()

                      const currentKeys =
                        liveDragOrder && liveDragOrder.length > 0
                          ? liveDragOrder
                          : orderedColumns
                              .filter((c) => c.key !== '__abc_actions__' && c.key !== '__actions__')
                              .map((c) => c.key)
                      const fromIdx = currentKeys.indexOf(draggingKey)
                      const toIdx = currentKeys.indexOf(col.key)
                      if (fromIdx < 0 || toIdx < 0 || fromIdx === toIdx) return

                      // 宽度不等列之间加入 35%/65% 越界防抖阈值，避免边界高频往返抖动；jsdom (width=0) 直接放行
                      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                      if (rect.width > 0) {
                        if (fromIdx < toIdx && e.clientX < rect.left + rect.width * 0.35) return
                        if (fromIdx > toIdx && e.clientX > rect.left + rect.width * 0.65) return
                      }
                      commitReorderAt(col.key)
                    }}
                    onDrop={() => {
                      if (
                        draggingKey &&
                        draggingKey !== col.key &&
                        !hasLiveSwappedRef.current &&
                        !fx &&
                        col.key !== '__abc_actions__' &&
                        col.key !== '__actions__'
                      ) {
                        commitReorderAt(col.key)
                      }
                      setDraggingKey(null)
                      setLiveDragOrder(null)
                      preDragOrderRef.current = null
                      hasLiveSwappedRef.current = false
                    }}
                    onDragEnd={() => {
                      setDraggingKey(null)
                      setLiveDragOrder(null)
                      preDragOrderRef.current = null
                      hasLiveSwappedRef.current = false
                    }}
                    style={stickyStyle}
                    className={cn(
                      'group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]',
                      fx === 'right' ? 'overflow-visible' : 'overflow-hidden',
                      DENSITY_CELL_PY[density],
                      col.align === 'center' && 'text-center',
                      col.align === 'right' && 'text-right',
                      fx === 'left' && 'sticky z-30',
                      fx === 'right' && 'sticky z-30',
                      isDraggingThis &&
                        'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]',
                      col.key === stickyMeta.lastLeftKey &&
                        scrollEdge.left &&
                        'shadow-[3px_0_6px_-2px_rgba(15,23,42,0.14)]',
                      col.key === stickyMeta.firstRightKey &&
                        scrollEdge.right &&
                        'shadow-[-3px_0_6px_-2px_rgba(15,23,42,0.14)]'
                    )}
                  >
                    {showLeftDivider && (
                      <span className="pointer-events-none absolute top-1/2 left-0 z-10 h-4 w-px -translate-y-1/2 bg-[var(--abc-border-strong)]/65" />
                    )}
                    {showRightDivider && (
                      <span className="pointer-events-none absolute top-1/2 right-0 z-10 h-4 w-px -translate-y-1/2 bg-[var(--abc-border-strong)]/65" />
                    )}

                    <div
                      className={cn(
                        'flex min-w-0 items-center gap-1',
                        col.align === 'right' && 'justify-end',
                        col.align === 'center' && 'justify-center'
                      )}
                    >
                      <span
                        className={cn(
                          'inline-flex min-w-0 items-center gap-1',
                          sortableCol &&
                            (isFilterHighlighted
                              ? 'cursor-pointer opacity-95 hover:opacity-100'
                              : 'cursor-pointer hover:text-[var(--abc-primary)]')
                        )}
                        onClick={() => handleSortClick(col)}
                      >
                        {onColumnReorder &&
                          !fx &&
                          col.key !== '__abc_actions__' &&
                          col.key !== '__actions__' &&
                          col.key !== '__drag_handle__' && (
                            <GripVertical
                              className={cn(
                                'h-3 w-3 shrink-0 -ml-0.5 cursor-grab opacity-0 transition-opacity group-hover:opacity-100',
                                isFilterHighlighted
                                  ? 'text-white/80'
                                  : 'text-[var(--abc-fg-placeholder)]'
                              )}
                            />
                          )}
                        <span
                          className="min-w-0 truncate whitespace-nowrap"
                          title={filterSummaryLabel ? col.title : undefined}
                        >
                          {filterSummaryLabel || col.title}
                        </span>
                        {col.tooltip && (
                          <Tooltip content={col.tooltip}>
                            <span
                              onClick={(e) => e.stopPropagation()}
                              className={cn(
                                'inline-flex shrink-0',
                                isFilterHighlighted
                                  ? 'text-white/85 hover:text-white'
                                  : 'text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]'
                              )}
                            >
                              <HelpCircle className="h-3 w-3" />
                            </span>
                          </Tooltip>
                        )}
                        {sortableCol && (
                          <span
                            className={cn(
                              'inline-flex shrink-0',
                              isFilterHighlighted ? 'text-white' : 'text-[var(--abc-fg-muted)]'
                            )}
                          >
                            {currentDir === 'asc' ? (
                              <ArrowUp
                                className={cn(
                                  'h-3 w-3',
                                  isFilterHighlighted ? 'text-white' : 'text-[var(--abc-primary)]'
                                )}
                              />
                            ) : currentDir === 'desc' ? (
                              <ArrowDown
                                className={cn(
                                  'h-3 w-3',
                                  isFilterHighlighted ? 'text-white' : 'text-[var(--abc-primary)]'
                                )}
                              />
                            ) : (
                              <ArrowUpDown className="h-3 w-3 opacity-55" />
                            )}
                          </span>
                        )}
                      </span>

                      {headerFilterNode && (
                        <span
                          data-header-filter=""
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex shrink-0 items-center"
                        >
                          {headerFilterNode}
                        </span>
                      )}
                    </div>

                    {isResizable &&
                      (fx === 'right' ? (
                        <span
                          role="separator"
                          aria-orientation="vertical"
                          aria-label={`拖拽调节 ${col.title} 列宽`}
                          onMouseDown={(e) => startResizeColumn(e, col, 'left')}
                          className="absolute top-0 bottom-0 -left-1 z-30 w-2.5 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                        />
                      ) : (
                        <span
                          role="separator"
                          aria-orientation="vertical"
                          aria-label={`拖拽调节 ${col.title} 列宽`}
                          onMouseDown={(e) => startResizeColumn(e, col, 'right')}
                          className="absolute top-0 right-0 bottom-0 z-20 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                        />
                      ))}
                  </th>
                )
              })}
            </tr>

            {/* 表头内联筛选行（仅在列声明了显式 filterable 时渲染） */}
            {hasInlineHeaderFilterRow && (
              <tr className="bg-[var(--abc-bg-surface)]">
                {selectable && <th className="border-b border-[var(--abc-border)] px-2.5 py-1.5" />}
                {hasExpandColumn && (
                  <th className="border-b border-[var(--abc-border)] px-2 py-1.5" />
                )}
                {orderedColumns.map((col) => {
                  const fx = getEffectiveFixed(col)
                  return (
                    <th
                      key={`${col.key}_filter`}
                      style={{
                        ...(fx === 'left'
                          ? { left: `${stickyMeta.leftOffsets[col.key] ?? 0}px` }
                          : {}),
                        ...(fx === 'right'
                          ? { right: `${stickyMeta.rightOffsets[col.key] ?? 0}px` }
                          : {}),
                      }}
                      className={cn(
                        'border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal',
                        fx === 'left' && 'sticky z-20',
                        fx === 'right' && 'sticky z-20'
                      )}
                    >
                      {col.filterable ? (
                        col.filterType === 'select' && col.filterOptions ? (
                          <Select
                            size="xs"
                            allowClear
                            placeholder="全部"
                            options={col.filterOptions}
                            value={headerFilters[col.key] ?? ''}
                            onChange={(val) => onHeaderFilterChange?.(col.key, val)}
                          />
                        ) : (
                          <Input
                            size="xs"
                            allowClear
                            placeholder={`筛选${col.title}`}
                            value={headerFilters[col.key] ?? ''}
                            onChange={(e) => onHeaderFilterChange?.(col.key, e.target.value)}
                          />
                        )
                      ) : null}
                    </th>
                  )
                })}
              </tr>
            )}
          </thead>

          <tbody>
            {loading && flattenedRows.length === 0 ? (
              Array.from({ length: 5 }).map((_, rowIdx) => (
                <tr key={`sk_${rowIdx}`}>
                  {selectable && (
                    <td className="border-b border-[var(--abc-border)] px-2.5 py-3 text-center">
                      <Skeleton width={16} height={16} />
                    </td>
                  )}
                  {hasExpandColumn && (
                    <td className="border-b border-[var(--abc-border)] px-2 py-3" />
                  )}
                  {orderedColumns.map((col) => (
                    <td
                      key={col.key}
                      className={cn('border-b border-[var(--abc-border)]', DENSITY_CELL_PY[density])}
                    >
                      <Skeleton variant="text" className="w-4/5" />
                    </td>
                  ))}
                </tr>
              ))
            ) : flattenedRows.length === 0 ? (
              <tr>
                <td colSpan={totalColSpan}>
                  <EmptyState title={emptyText} onReset={onEmptyReset} />
                </td>
              </tr>
            ) : (
              flattenedRows.map(({ record, key, rowIdx, depth, hasTreeChildren }) => {
                const isSelected = Boolean(selectable && effectiveSelectedKeys.includes(key))
                const checkboxDisabled = Boolean(
                  rowSelection?.getCheckboxProps?.(record)?.disabled
                )
                const isRowActive =
                  activeRowKey !== undefined &&
                  activeRowKey !== null &&
                  String(activeRowKey) === String(key)
                const isExpanded = expandedKeys.includes(key)
                const canExpandRow = hasExpandColumn
                  ? treeData
                    ? hasTreeChildren
                    : Boolean(
                        expandable?.expandedRowRender &&
                          (!expandable.rowExpandable || expandable.rowExpandable(record))
                      ) || Boolean(expandable?.rowExpandable?.(record))
                  : false
                const customRowProps = onRow?.(record, rowIdx) ?? {}

                return (
                  <React.Fragment key={String(key)}>
                    <tr
                      {...customRowProps}
                      draggable={isRowDraggable || customRowProps.draggable}
                      onDragStart={(e) => {
                        customRowProps.onDragStart?.(e)
                        if (!isRowDraggable) return
                        if (e.dataTransfer) {
                          e.dataTransfer.setData('text/plain', String(key))
                          e.dataTransfer.effectAllowed = 'move'
                        }
                      }}
                      onDragOver={(e) => {
                        customRowProps.onDragOver?.(e)
                        if (!isRowDraggable) return
                        e.preventDefault()
                      }}
                      onDrop={(e) => {
                        customRowProps.onDrop?.(e)
                        if (!isRowDraggable || !emitRowDragEnd) return
                        e.preventDefault()
                        const activeId = e.dataTransfer?.getData('text/plain')
                        if (activeId && activeId !== String(key)) {
                          emitRowDragEnd(activeId, key)
                        }
                      }}
                      data-state={isRowActive ? 'selected' : isSelected ? 'selected' : undefined}
                      tabIndex={onRowClick ? 0 : customRowProps.tabIndex}
                      onClick={(e) => {
                        customRowProps.onClick?.(e)
                        if (!onRowClick) return
                        const target = e.target as HTMLElement | null
                        if (
                          target &&
                          target.closest(
                            'button, a, input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], details'
                          )
                        ) {
                          return
                        }
                        onRowClick(record, e)
                      }}
                      onKeyDown={(e) => {
                        customRowProps.onKeyDown?.(e)
                        if (!onRowClick) return
                        if (e.target !== e.currentTarget) return
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          onRowClick(record, e as any)
                        }
                      }}
                      className={cn(
                        'group transition-colors duration-150',
                        isRowDraggable && 'cursor-grab active:cursor-grabbing',
                        depth === 1 &&
                          'border-l-4 border-l-blue-400 bg-blue-50/75 dark:border-l-blue-500 dark:bg-blue-950/30',
                        depth >= 2 &&
                          'border-l-4 border-l-amber-400 bg-amber-50/75 dark:border-l-amber-500 dark:bg-amber-950/20',
                        onRowClick &&
                          'cursor-pointer focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]',
                        isSelected || isRowActive
                          ? 'bg-[var(--abc-primary-soft)]/60'
                          : 'hover:bg-[var(--abc-bg-muted)]/85',
                        customRowProps.className
                      )}
                    >
                      {selectable && (
                        <td
                          style={{ left: 0 }}
                          className={cn(
                            'sticky z-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-2.5 text-center group-hover:bg-[var(--abc-bg-muted)]',
                            (isSelected || isRowActive) && 'bg-[var(--abc-primary-soft)]/60',
                            !stickyMeta.hasAnyLeftFixed &&
                              scrollEdge.left &&
                              'shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]'
                          )}
                        >
                          <Checkbox
                            checked={isSelected}
                            disabled={checkboxDisabled}
                            onChange={() => toggleOne(key)}
                          />
                        </td>
                      )}

                      {hasExpandColumn && (
                        <td
                          style={
                            stickyMeta.hasAnyLeftFixed
                              ? { left: selectable ? 44 : 0 }
                              : undefined
                          }
                          className={cn(
                            'border-b border-[var(--abc-border)] px-2 py-2.5 text-center whitespace-nowrap',
                            stickyMeta.hasAnyLeftFixed &&
                              'sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]'
                          )}
                        >
                          {canExpandRow ? (
                            <button
                              type="button"
                              aria-label={isExpanded ? '收起详情行' : '展开详情行'}
                              aria-expanded={isExpanded}
                              onClick={() => toggleExpandRow(key, record)}
                              className="inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                            >
                              <ChevronRight
                                className={cn(
                                  'h-3.5 w-3.5 transition-transform duration-150',
                                  isExpanded && 'rotate-90 text-[var(--abc-primary)]'
                                )}
                              />
                            </button>
                          ) : (
                            <span className="inline-block w-4" />
                          )}
                        </td>
                      )}

                      {orderedColumns.map((col, colIdx) => {
                        const fieldPath = (col.dataIndex ?? col.key) as string | string[]
                        const rawVal = getNestedValue(record, fieldPath)
                        const fx = getEffectiveFixed(col)
                        const isActionCol =
                          col.key === '__abc_actions__' || col.key === '__actions__'
                        const cellContent = col.render
                          ? col.render(rawVal, record, treeData ? depth : rowIdx, {
                              depth,
                              rowIndex: rowIdx,
                              isExpanded,
                            })
                          : renderBuiltInValue(rawVal, record, col, onRowView)

                        const showInlineTreeChevron =
                          !hasExpandColumn && colIdx === 0 && (depth > 0 || hasTreeChildren)
                        const applyExpandColIndent =
                          hasExpandColumn && colIdx === 0 && depth > 0

                        return (
                          <td
                            key={col.key}
                            data-col-cell={col.key}
                            style={{
                              ...(fx === 'left'
                                ? { left: `${stickyMeta.leftOffsets[col.key] ?? 0}px` }
                                : {}),
                              ...(fx === 'right'
                                ? { right: `${stickyMeta.rightOffsets[col.key] ?? 0}px` }
                                : {}),
                              ...(applyExpandColIndent
                                ? { paddingLeft: `${12 + depth * indentPx}px` }
                                : {}),
                            }}
                            className={cn(
                              'overflow-hidden border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]',
                              DENSITY_CELL_PY[density],
                              col.align === 'center' && 'text-center',
                              col.align === 'right' && 'text-right',
                              draggingKey === col.key && 'bg-[var(--abc-primary-soft)]/30',
                              fx === 'left' &&
                                'sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]',
                              fx === 'right' &&
                                'sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]',
                              (isSelected || isRowActive) &&
                                (fx === 'left' || fx === 'right') &&
                                'bg-[var(--abc-primary-soft)]/60',
                              col.key === stickyMeta.lastLeftKey &&
                                scrollEdge.left &&
                                'shadow-[6px_0_8px_-6px_rgba(15,23,42,0.22)]',
                              col.key === stickyMeta.firstRightKey &&
                                scrollEdge.right &&
                                'shadow-[-6px_0_8px_-6px_rgba(15,23,42,0.22)]'
                            )}
                          >
                            {showInlineTreeChevron ? (
                              <div
                                style={{ paddingLeft: `${depth * indentPx}px` }}
                                className="inline-flex max-w-full items-center gap-1"
                              >
                                {hasTreeChildren ? (
                                  <button
                                    type="button"
                                    aria-label={isExpanded ? '收起子项' : '展开子项'}
                                    aria-expanded={isExpanded}
                                    onClick={() => toggleExpandRow(key, record)}
                                    className="inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                                  >
                                    <ChevronRight
                                      className={cn(
                                        'h-3 w-3 transition-transform duration-150',
                                        isExpanded && 'rotate-90 text-[var(--abc-primary)]'
                                      )}
                                    />
                                  </button>
                                ) : (
                                  <span className="inline-block w-4.5 shrink-0" />
                                )}
                                <span className="min-w-0 truncate">{cellContent}</span>
                              </div>
                            ) : col.ellipsis === false ? (
                              cellContent
                            ) : (
                              <div
                                title={
                                  isActionCol ||
                                  rawVal === undefined ||
                                  rawVal === null ||
                                  typeof rawVal === 'object'
                                    ? undefined
                                    : String(rawVal)
                                }
                                className={cn(
                                  'overflow-hidden text-ellipsis whitespace-nowrap',
                                  isActionCol ? 'w-full min-w-0' : 'w-0 min-w-full'
                                )}
                              >
                                {cellContent}
                              </div>
                            )}
                          </td>
                        )
                      })}
                    </tr>

                    {canExpandRow && isExpanded && expandable?.expandedRowRender && (
                      <tr className="bg-[var(--abc-bg-muted)]/45">
                        <td
                          colSpan={totalColSpan}
                          className="border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]"
                        >
                          {expandable.expandedRowRender(record, rowIdx, depth, isExpanded)}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {/* 表头右键快捷控制菜单 */}
      {contextMenu &&
        portalTarget &&
        (() => {
          const fx = getEffectiveFixed(contextMenu.col)
          const movableIdx = movableColumns.findIndex((c) => c.key === contextMenu.col.key)
          const canMoveLeft = movableIdx > 0 && !fx
          const canMoveRight = movableIdx >= 0 && movableIdx < movableColumns.length - 1 && !fx
          const canHideThis = movableColumns.length > 1
          const currentHighlight = filterHighlightColor || '#3b82f6'

          return createPortal(
            <div
              ref={contextMenuRef}
              role="menu"
              aria-label={`${contextMenu.col.title} 列操作菜单`}
              data-abc-floating=""
              data-motion={resolvedMotion}
              style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
              className={cn(
                'fixed z-[1350] w-50 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none',
                resolvedMotion !== 'none' && 'abc-animate-popover-in'
              )}
            >
              <div className="flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5">
                <span className="truncate font-semibold text-[var(--abc-fg)]">
                  {contextMenu.col.title}
                </span>
                <span className="shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]">
                  列属性
                </span>
              </div>

              {isColSortable(contextMenu.col) && onSortChange && (
                <div className="border-b border-[var(--abc-border)] py-1">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onSortChange(contextMenu.col.key, 'asc')
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2">
                      <ArrowUp className="h-3.5 w-3.5" /> 升序排列
                    </span>
                    {sortState?.key === contextMenu.col.key && sortState.direction === 'asc' && (
                      <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                    )}
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onSortChange(contextMenu.col.key, 'desc')
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2">
                      <ArrowDown className="h-3.5 w-3.5" /> 降序排列
                    </span>
                    {sortState?.key === contextMenu.col.key && sortState.direction === 'desc' && (
                      <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                    )}
                  </button>
                  {sortState?.key === contextMenu.col.key && sortState.direction && (
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        onSortChange(contextMenu.col.key, null)
                        setContextMenu(null)
                      }}
                      className="flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                    >
                      <ArrowUpDown className="h-3.5 w-3.5" /> 清除排序
                    </button>
                  )}
                </div>
              )}

              {onColumnPin && (
                <div className="border-b border-[var(--abc-border)] py-1">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onColumnPin(contextMenu.col.key, fx === 'left' ? null : 'left')
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Pin className="h-3.5 w-3.5 -rotate-45" /> 固定到左侧
                    </span>
                    {fx === 'left' && <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />}
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onColumnPin(contextMenu.col.key, fx === 'right' ? null : 'right')
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Pin className="h-3.5 w-3.5 rotate-45" /> 固定到右侧
                    </span>
                    {fx === 'right' && <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />}
                  </button>
                  {fx && (
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        onColumnPin(contextMenu.col.key, null)
                        setContextMenu(null)
                      }}
                      className="flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                    >
                      <PinOff className="h-3.5 w-3.5" /> 取消固定
                    </button>
                  )}
                </div>
              )}

              {onColumnReorder && (
                <div className="border-b border-[var(--abc-border)] py-1">
                  <button
                    type="button"
                    role="menuitem"
                    disabled={!canMoveLeft}
                    onClick={() => handleMoveColumnStep(contextMenu.col.key, 'left')}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left',
                      canMoveLeft
                        ? 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer'
                        : 'text-[var(--abc-fg-placeholder)] cursor-not-allowed'
                    )}
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> 向左移动
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    disabled={!canMoveRight}
                    onClick={() => handleMoveColumnStep(contextMenu.col.key, 'right')}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left',
                      canMoveRight
                        ? 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer'
                        : 'text-[var(--abc-fg-placeholder)] cursor-not-allowed'
                    )}
                  >
                    <ArrowRight className="h-3.5 w-3.5" /> 向右移动
                  </button>
                </div>
              )}

              {(onColumnHide || (onToggleColumnVisible && submenuConfigurableCols.length > 0)) && (
                <div className="border-b border-[var(--abc-border)] py-1">
                  {onColumnHide && (
                    <button
                      type="button"
                      role="menuitem"
                      disabled={!canHideThis}
                      onClick={() => {
                        if (!canHideThis) return
                        onColumnHide(contextMenu.col.key)
                        setContextMenu(null)
                      }}
                      className={cn(
                        'flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left',
                        canHideThis
                          ? 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer'
                          : 'text-[var(--abc-fg-placeholder)] cursor-not-allowed'
                      )}
                    >
                      <EyeOff className="h-3.5 w-3.5" /> 隐藏当前列
                    </button>
                  )}

                  {onToggleColumnVisible && submenuConfigurableCols.length > 0 && (
                    <div
                      className="relative"
                      onMouseEnter={() => setVisibilitySubmenuOpen(true)}
                      onMouseLeave={() => setVisibilitySubmenuOpen(false)}
                    >
                      <button
                        type="button"
                        role="menuitem"
                        aria-haspopup="menu"
                        aria-expanded={visibilitySubmenuOpen}
                        onClick={() => setVisibilitySubmenuOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Columns className="h-3.5 w-3.5" /> 显示 / 隐藏列
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 text-[var(--abc-fg-muted)]" />
                      </button>

                      {visibilitySubmenuOpen && (
                        <div
                          role="menu"
                          aria-label="显示与隐藏列清单"
                          style={{
                            left:
                              typeof window !== 'undefined' &&
                              contextMenu.x + 208 + 196 > window.innerWidth
                                ? undefined
                                : '100%',
                            right:
                              typeof window !== 'undefined' &&
                              contextMenu.x + 208 + 196 > window.innerWidth
                                ? '100%'
                                : undefined,
                            top: -4,
                          }}
                          className="absolute z-[1360] mx-1 max-h-64 w-46 overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]"
                        >
                          <div className="px-2 py-1 text-[10px] font-medium text-[var(--abc-fg-muted)]">
                            勾选以显示列
                          </div>
                          {submenuConfigurableCols.map((c) => {
                            const isVisible = !hiddenColumnKeys.includes(c.key)
                            const isLastVisible = isVisible && movableColumns.length <= 1
                            return (
                              <button
                                key={c.key}
                                type="button"
                                role="menuitemcheckbox"
                                aria-checked={isVisible}
                                disabled={isLastVisible}
                                onClick={() => {
                                  if (!isLastVisible) onToggleColumnVisible(c.key)
                                }}
                                className={cn(
                                  'flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left',
                                  isLastVisible
                                    ? 'text-[var(--abc-fg-placeholder)] cursor-not-allowed'
                                    : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer'
                                )}
                              >
                                <span className="truncate">{c.title}</span>
                                <span
                                  className={cn(
                                    'inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border transition-colors',
                                    isVisible
                                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white'
                                      : 'border-[var(--abc-border-strong)] bg-transparent'
                                  )}
                                >
                                  {isVisible && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {onFilterHighlightColorChange && (
                <div className="border-b border-[var(--abc-border)] px-2.5 py-2">
                  <div className="mb-1.5 flex items-center gap-1.5 text-[11px] text-[var(--abc-fg-muted)]">
                    <Palette className="h-3 w-3" />
                    <span>筛选高亮颜色</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {FILTER_HIGHLIGHT_SWATCHES.map((item) => {
                      const active = currentHighlight === item.color
                      return (
                        <button
                          key={item.color}
                          type="button"
                          title={item.label}
                          aria-label={`筛选高亮颜色 ${item.label}`}
                          onClick={() => onFilterHighlightColorChange(item.color)}
                          style={{ backgroundColor: item.color }}
                          className={cn(
                            'h-4 w-4 rounded-full transition-transform cursor-pointer',
                            active
                              ? 'scale-110 ring-2 ring-slate-900 ring-offset-1 dark:ring-white dark:ring-offset-slate-900'
                              : 'opacity-80 hover:scale-110 hover:opacity-100'
                          )}
                        />
                      )
                    })}
                  </div>
                </div>
              )}

              {onResetColumns && (
                <div className="pt-1">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onResetColumns()
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> 重置列配置
                  </button>
                </div>
              )}
            </div>,
            portalTarget
          )
        })()}
    </div>
  )
}

export default TableCore
