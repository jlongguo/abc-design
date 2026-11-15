import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { AbcMotionPreset } from '@abc-design/tokens'
import {
  cleanQueryObject,
  filterAndSortClientRows,
  readQueryFromUrlSearch,
  writeQueryToUrlSearch,
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
  ListFilter,
  Maximize2,
  Minimize2,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  Trash2,
} from 'lucide-react'
import Button from '../components/button/Button'
import { Pagination, type PaginationProps } from '../components/display/FeedbackStates'
import { Dropdown, Tooltip } from '../components/display/Overlays'
import { Descriptions } from '../components/display/StructuredDisplay'
import { abcConfirm } from '../components/feedback/Confirm'
import Dialog from '../components/feedback/Dialog'
import Drawer from '../components/feedback/Drawer'
import { TagInput } from '../components/form/AdvancedControls'
import { Switch } from '../components/form/Controls'
import { DatePicker, DateRangePicker } from '../components/form/DatePicker'
import FormField from '../components/form/FormField'
import { Input, InputNumber, Textarea } from '../components/form/Input'
import { Select, type SelectOption } from '../components/form/Select'
import { IconPicker } from '../components/icon/IconPicker'
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
  HeaderColumnFilterPopover,
  ProColumnSettingsPopover,
  ProFloatingBatchBar,
  ProRowActionsOverflow,
  downloadTableCsv,
  type ProTableBatchAction,
  type ResolvedRowActionItem,
} from './ProTableExtras'

export interface ProTableFieldSchema {
  name: string
  label: string
  type?:
    | 'text'
    | 'number'
    | 'select'
    | 'textarea'
    | 'switch'
    | 'date'
    | 'dateRange'
    | 'tags'
    | 'icon'
  options?: SelectOption[]
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

export interface ProTableRowAction<T = Record<string, any>> {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  danger?: boolean
  permission?: string
  hidden?: (record: T) => boolean
  onClick: (record: T) => void
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

export interface ProTableProps<T extends Record<string, any> = Record<string, any>> {
  /** 表格标识键（用于本地持久化列宽、列序、固定列、显隐与新建表单草稿） */
  storageKey?: string
  title?: React.ReactNode
  columns: AbcColumn<T>[]
  /** 搜索与新建/编辑弹窗共用的字段定义 */
  fields?: ProTableFieldSchema[]
  /** 静态数据源（纯前端模式或外层受控数据） */
  dataSource?: T[]
  /** 是否处于加载状态（支持受控外部 loading，默认在 request 查询期间自驱动） */
  loading?: boolean
  /** 异步服务端查询函数 */
  request?: (params: ProTableRequestParams) => Promise<ProTableRequestResult<T>>
  rowKey?: keyof T | ((record: T) => string | number)
  defaultPageSize?: number
  /** 自定义分页器配置：传 false 隐藏底栏分页，或传具体 Pagination 配置，或完全由 request 自动推导 */
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
  /** 搜索面板展示形态：'card' 默认多维折叠卡片 | 'toolbar' 紧凑水平工具条 | 'none' 不展示搜索面板 */
  searchVariant?: 'card' | 'toolbar' | 'none'
  /** 搜索条件实时变更时的受控回调 */
  onSearchChange?: (filters: Record<string, any>) => void
  /** 点击搜索按钮或提交检索时的回调 */
  onSearchSubmit?: (filters: Record<string, any>) => void
  /** 点击重置按钮时的回调 */
  onSearchReset?: () => void
  /**
   * 是否启用当前数据本地前端筛选模式（默认自动判断：无 request 时开启；后端接口不支持搜索时亦可开启）
   */
  clientFilter?: boolean
  /** 是否在工具栏展示“前端筛选 / 接口筛选”实时切换开关 */
  showClientFilterSwitch?: boolean
  /** 搜索面板超出 3 项时初始是否自动折叠为单行（默认 true） */
  defaultSearchCollapsed?: boolean
  /** 是否在工具栏显示定时自动轮询控件（默认在传入 request 时开启） */
  autoRefresh?: boolean
  /** 是否启用 CSV 数据导出按钮（默认 true） */
  exportable?: boolean
  /** 自定义导出回调（未传时默认导出当前可见列与过滤后数据的 UTF-8 CSV） */
  onExport?: (rows: T[]) => void
  /** 是否将当前页码与筛选条件双向同步至浏览器 URL 查询参数 */
  syncToUrl?: boolean
  /** 是否自动开启操作列“详情”只读查看弹窗（基于 Descriptions 渲染） */
  viewable?: boolean
  /** 新建/编辑表单承载容器形态：模态弹窗 ('dialog') 或侧滑抽屉 ('drawer') */
  formContainer?: 'dialog' | 'drawer'
  /** 新建/编辑表单栅格列数（1 单列 / 2 双列并排，默认字段 >= 6 时自动采用 2 列） */
  formColumns?: 1 | 2
  /** 操作列扩展自定义按钮 */
  rowActions?: ProTableRowAction<T>[]
  /** 操作列最多平铺按钮数，超出自动收纳至 `...` 下拉菜单（默认 3） */
  maxInlineActions?: number
  /** 是否强制开启多选框（默认当配置 onDeleteRecords 或 batchActions 时自动开启） */
  rowSelection?: boolean
  /** 悬浮批量操作栏扩展动作 */
  batchActions?: ProTableBatchAction<T>[]
  /** 展开详情子面板与树形数据配置 */
  expandable?: AbcTableExpandableConfig<T>
  /** 表格纵向最大高度（开启后表头吸顶内滚） */
  maxHeight?: number | string
  /** 细粒度 CRUD 权限码绑定 */
  permissions?: {
    create?: string
    update?: string
    delete?: string
  }
  /** 工具栏左侧附加按钮插槽 */
  toolbarExtra?: React.ReactNode
  /** 表格整体交互动效规格 */
  motion?: AbcMotionPreset
  /** 新建/编辑保存回调 */
  onSaveRecord?: (values: Record<string, any>, editingRecord: T | null) => void | Promise<void>
  /** 单行或批量删除回调 */
  onDeleteRecords?: (keys: Array<string | number>) => void | Promise<void>
}

/**
 * Schema 驱动的企业级全功能 CRUD 数据表格 (ProTable)
 * 完整对齐并融合 CrudTable 交互范式：
 * - 可折叠多维搜索卡片（支持文本、数值、多选、单日期、双月日期区间）
 * - 表头单列气泡筛选 + 表头内联筛选行双模式 + 表头右键快捷菜单
 * - 服务端接口检索与客户端本地拼音检索一键切换
 * - 定时自动轮询、UTF-8 CSV 导出、沉浸全屏工作台、列宽/列序/左右冻结/筛选项持久化
 * - 行操作自动溢出折叠、毛玻璃悬浮批量操作胶囊栏、草稿自动记忆与字段级校验
 */
export function ProTable<T extends Record<string, any> = Record<string, any>>({
  storageKey,
  title,
  columns,
  fields = [],
  dataSource,
  loading: propLoading,
  request,
  rowKey = 'id',
  defaultPageSize = 10,
  pagination,
  renderPagination,
  selectedRowKey,
  onRowClick,
  searchVariant = 'card',
  onSearchChange,
  onSearchSubmit,
  onSearchReset,
  clientFilter: initialClientFilter,
  showClientFilterSwitch = false,
  defaultSearchCollapsed = true,
  autoRefresh,
  exportable = true,
  onExport,
  syncToUrl = false,
  viewable = false,
  formContainer = 'dialog',
  formColumns,
  rowActions = [],
  maxInlineActions = 3,
  rowSelection,
  batchActions = [],
  expandable,
  maxHeight,
  permissions,
  toolbarExtra,
  motion,
  onSaveRecord,
  onDeleteRecords,
}: ProTableProps<T>) {
  const { toast } = useAbcConfig()
  const resolvedMotion = useAbcMotion(motion)
  const { hasPermission } = useAbcPermission()
  const {
    settings,
    toggleColumnVisible,
    setAllColumnsVisible,
    setColumnFixed,
    setColumnWidth,
    setColumnOrder,
    setSearchFieldVisible,
    setDensity,
    resetSettings,
  } = useTableSettings(storageKey)

  const initialUrlParams = useMemo(() => {
    if (!syncToUrl || typeof window === 'undefined') return {}
    return readQueryFromUrlSearch(window.location.search)
  }, [syncToUrl])

  const [isClientFilter, setIsClientFilter] = useState<boolean>(
    () => initialClientFilter ?? !request
  )
  const [headerFilterMode, setHeaderFilterMode] = useState(false)
  const [searchPanelExpanded, setSearchPanelExpanded] = useState(true)
  const [searchFieldsCollapsed, setSearchFieldsCollapsed] = useState(defaultSearchCollapsed)

  const [searchInputs, setSearchInputs] = useState<Record<string, any>>(() => {
    const { page: _p, pageSize: _ps, ...rest } = initialUrlParams
    return rest
  })
  const [appliedFilters, setAppliedFilters] = useState<Record<string, any>>(() => {
    const { page: _p, pageSize: _ps, ...rest } = initialUrlParams
    return rest
  })
  const [quickKeyword, setQuickKeyword] = useState('')
  const [sortState, setSortState] = useState<{ key: string; direction: SortDirection }>({
    key: '',
    direction: null,
  })

  const [current, setCurrent] = useState<number>(() => Number(initialUrlParams.page) || 1)
  const [pageSize, setPageSize] = useState<number>(
    () => Number(initialUrlParams.pageSize) || defaultPageSize
  )
  const [internalLoading, setInternalLoading] = useState(false)
  const loading = propLoading !== undefined ? propLoading : internalLoading
  const [remoteRows, setRemoteRows] = useState<T[]>([])
  const [remoteTotal, setRemoteTotal] = useState(0)
  const [selectedKeys, setSelectedKeys] = useState<Array<string | number>>([])
  const [selectedRows, setSelectedRows] = useState<T[]>([])
  const [isFullScreen, setIsFullScreen] = useState(false)

  // 自动轮询控制
  const showAutoRefreshControl = autoRefresh ?? Boolean(request)
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(false)
  const [autoRefreshInterval, setAutoRefreshInterval] = useState(10000)

  // 异步请求竞态序列号防卫，杜绝慢响应覆盖最新筛选结果
  const requestSeqRef = useRef(0)

  // 详情查看弹窗状态
  const [viewingRecord, setViewingRecord] = useState<T | null>(null)

  // 新建 / 编辑弹窗与草稿记忆
  const draft = useDraftStorage<Record<string, any>>(storageKey ? `${storageKey}_form` : undefined)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingRecord, setEditingRecord] = useState<T | null>(null)
  const [formValues, setFormValues] = useState<Record<string, any>>({})
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)

  const canCreate = !permissions?.create || hasPermission(permissions.create)
  const canUpdate = !permissions?.update || hasPermission(permissions.update)
  const canDelete = !permissions?.delete || hasPermission(permissions.delete)

  useEffect(() => {
    if (!syncToUrl || typeof window === 'undefined') return
    const managedKeys = [
      ...fields.filter((f) => !f.hideInSearch).map((f) => f.name),
      ...columns.map((c) => String(c.dataIndex ?? c.key)),
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
  }, [syncToUrl, fields, columns, appliedFilters, current, pageSize, defaultPageSize])

  // 全屏模式下按 Esc 退出全屏（仅在无打开弹窗时生效）
  useEffect(() => {
    if (!isFullScreen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !modalOpen && !viewingRecord) {
        setIsFullScreen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isFullScreen, modalOpen, viewingRecord])

  const resolveRowKey = useCallback(
    (record: T, idx: number): string | number => {
      if (typeof rowKey === 'function') return rowKey(record)
      return (record?.[rowKey] as string | number) ?? idx
    },
    [rowKey]
  )

  const fetchServerData = useCallback(async () => {
    if (!request) return
    const seq = ++requestSeqRef.current
    setInternalLoading(true)
    try {
      const res = await request({
        current,
        pageSize,
        filters: isClientFilter ? {} : cleanQueryObject(appliedFilters),
        sortField: sortState.direction ? sortState.key : undefined,
        sortOrder: sortState.direction,
      })
      if (seq !== requestSeqRef.current) return
      setRemoteRows(res.data)
      setRemoteTotal(res.total)
    } catch (err: any) {
      if (seq === requestSeqRef.current) {
        toast.error(err?.message || '加载表格数据失败')
      }
    } finally {
      if (seq === requestSeqRef.current) {
        setInternalLoading(false)
      }
    }
  }, [request, current, pageSize, isClientFilter, appliedFilters, sortState, toast])

  useEffect(() => {
    if (request) {
      fetchServerData()
    }
  }, [request, fetchServerData])

  // 定时轮询器
  useEffect(() => {
    if (!autoRefreshEnabled || !request || typeof window === 'undefined') return
    const timer = window.setInterval(() => {
      fetchServerData()
    }, autoRefreshInterval)
    return () => window.clearInterval(timer)
  }, [autoRefreshEnabled, autoRefreshInterval, request, fetchServerData])

  // 计算可见且按用户拖拽排序后的列集合
  const visibleColumns = useMemo(() => {
    const base = columns.filter(
      (c) => !c.hideInTable && !settings.hiddenKeys.includes(c.key)
    )
    if (settings.columnOrder.length === 0) return base
    return [...base].sort((a, b) => {
      const ia = settings.columnOrder.indexOf(a.key)
      const ib = settings.columnOrder.indexOf(b.key)
      if (ia === -1 && ib === -1) return 0
      if (ia === -1) return 1
      if (ib === -1) return -1
      return ia - ib
    })
  }, [columns, settings.hiddenKeys, settings.columnOrder])

  const rawRows = dataSource ?? remoteRows

  // 客户端本地过滤与排序管道（支持汉字拼音首字母、多选数组与日期区间）
  const processedClientRows = useMemo<T[]>(() => {
    if (!isClientFilter && request) return rawRows
    const searchableKeys = columns.map((c) => String(c.dataIndex ?? c.key))
    return filterAndSortClientRows<T>({
      rows: rawRows,
      quickKeyword,
      searchableKeys,
      fieldFilters: appliedFilters,
      sortField: sortState.key,
      sortOrder: sortState.direction,
    })
  }, [isClientFilter, request, rawRows, quickKeyword, appliedFilters, columns, sortState])

  const displayRows = useMemo(() => {
    if (!request) {
      const start = (current - 1) * pageSize
      return processedClientRows.slice(start, start + pageSize)
    }
    return isClientFilter ? processedClientRows : remoteRows
  }, [request, isClientFilter, processedClientRows, remoteRows, current, pageSize])

  const displayTotal = !request
    ? processedClientRows.length
    : isClientFilter
      ? processedClientRows.length
      : remoteTotal

  const allSearchFields = useMemo(
    () => fields.filter((f) => !f.hideInSearch),
    [fields]
  )
  const searchableFieldNames = useMemo(
    () => new Set(allSearchFields.map((f) => f.name)),
    [allSearchFields]
  )
  const visibleSearchFields = useMemo(
    () => allSearchFields.filter((f) => settings.searchVisible[f.name] !== false),
    [allSearchFields, settings.searchVisible]
  )
  const displayedSearchFields = useMemo(() => {
    if (!searchFieldsCollapsed || visibleSearchFields.length <= 3) {
      return visibleSearchFields
    }
    return visibleSearchFields.slice(0, 3)
  }, [visibleSearchFields, searchFieldsCollapsed])

  const formFields = useMemo(
    () => fields.filter((f) => !f.hideInForm),
    [fields]
  )

  const activeFilterCount = useMemo(() => {
    return Object.keys(cleanQueryObject(appliedFilters)).length + (quickKeyword.trim() ? 1 : 0)
  }, [appliedFilters, quickKeyword])

  const resetAllFilters = useCallback(() => {
    setSearchInputs({})
    setAppliedFilters({})
    setQuickKeyword('')
    setCurrent(1)
    onSearchReset?.()
    onSearchChange?.({})
  }, [onSearchReset, onSearchChange])

  const buildDefaultFormValues = useCallback(() => {
    const defaults: Record<string, any> = {}
    for (const f of formFields) {
      if (f.defaultValue !== undefined) {
        defaults[f.name] = f.defaultValue
      }
    }
    return defaults
  }, [formFields])

  const openCreateModal = () => {
    setEditingRecord(null)
    setFieldErrors({})
    const cached = draft.readDraft()
    setFormValues(cached ?? buildDefaultFormValues())
    setModalOpen(true)
  }

  const openEditModal = (record: T) => {
    setEditingRecord(record)
    setFieldErrors({})
    setFormValues({ ...record })
    setModalOpen(true)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!onSaveRecord) return

    const nextErrors: Record<string, string> = {}
    for (const f of formFields) {
      const v = formValues[f.name]
      const isEmpty =
        v === undefined ||
        v === null ||
        (typeof v === 'string' && v.trim() === '') ||
        (Array.isArray(v) && v.length === 0)

      if (f.required && isEmpty) {
        nextErrors[f.name] = `请填写${f.label}`
        continue
      }
      if (f.validator) {
        const customErr = f.validator(v, formValues)
        if (customErr) {
          nextErrors[f.name] = customErr
        }
      }
    }

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors)
      const firstError = Object.values(nextErrors)[0]
      toast.warning(firstError)
      return
    }

    setFieldErrors({})
    setSaving(true)
    try {
      await onSaveRecord(formValues, editingRecord)
      if (!editingRecord) draft.clearDraft()
      setModalOpen(false)
      toast.success(editingRecord ? '更新成功' : '创建成功')
      if (request) fetchServerData()
    } catch (err: any) {
      toast.error(err?.message || '提交失败')
    } finally {
      setSaving(false)
    }
  }

  const handleBatchDelete = async (keys: Array<string | number>) => {
    if (!onDeleteRecords || keys.length === 0) return
    const ok = await abcConfirm({
      title: '确认删除选中记录',
      message: `即将删除 ${keys.length} 条数据，删除后不可恢复，是否继续？`,
      tone: 'danger',
      confirmText: '确认删除',
    })
    if (!ok) return
    await onDeleteRecords(keys)
    setSelectedKeys([])
    setSelectedRows([])
    toast.success(`已删除 ${keys.length} 条记录`)
    if (request) fetchServerData()
  }

  const permittedBatchActions = useMemo(
    () =>
      batchActions.filter((act) => !act.permission || hasPermission(act.permission)),
    [batchActions, hasPermission]
  )

  const selectionEnabled =
    rowSelection ??
    Boolean((onDeleteRecords && canDelete) || permittedBatchActions.length > 0)

  // 操作列聚合：内置详情/编辑/删除 + 业务自定义动作 + 权限守卫 + 溢出折叠
  const hasAnyRowAction =
    viewable ||
    (Boolean(onSaveRecord) && canUpdate) ||
    (Boolean(onDeleteRecords) && canDelete) ||
    rowActions.length > 0

  const finalColumns = useMemo<AbcColumn<T>[]>(() => {
    if (!hasAnyRowAction) return visibleColumns
    return [
      ...visibleColumns,
      {
        key: '__abc_actions__',
        title: '操作',
        fixed: 'right',
        width: viewable || rowActions.length > 0 ? 184 : 136,
        align: 'right',
        render: (_, record, idx) => {
          const rk = resolveRowKey(record, idx)
          const resolved: ResolvedRowActionItem[] = []

          if (viewable) {
            resolved.push({
              key: '__view__',
              label: '详情',
              icon: <Eye className="h-3 w-3" />,
              onClick: () => setViewingRecord(record),
            })
          }
          if (onSaveRecord && canUpdate) {
            resolved.push({
              key: '__edit__',
              label: '编辑',
              icon: <Edit3 className="h-3 w-3" />,
              onClick: () => openEditModal(record),
            })
          }
          for (const custom of rowActions) {
            if (custom.permission && !hasPermission(custom.permission)) continue
            if (custom.hidden?.(record)) continue
            resolved.push({
              key: custom.key,
              label: custom.label,
              icon: custom.icon,
              danger: custom.danger,
              onClick: () => custom.onClick(record),
            })
          }
          if (onDeleteRecords && canDelete) {
            resolved.push({
              key: '__delete__',
              label: '删除',
              icon: <Trash2 className="h-3 w-3" />,
              danger: true,
              onClick: () => handleBatchDelete([rk]),
            })
          }

          return <ProRowActionsOverflow actions={resolved} maxInline={maxInlineActions} />
        },
      },
    ]
  }, [
    visibleColumns,
    hasAnyRowAction,
    viewable,
    onSaveRecord,
    canUpdate,
    onDeleteRecords,
    canDelete,
    rowActions,
    maxInlineActions,
    hasPermission,
    resolveRowKey,
  ])

  const handleExportCsv = () => {
    const exportTargetRows = isClientFilter || !request ? processedClientRows : remoteRows
    if (onExport) {
      onExport(exportTargetRows)
      return
    }
    const baseName = typeof title === 'string' && title.trim() ? title.trim() : storageKey || 'table-export'
    downloadTableCsv(baseName, visibleColumns, exportTargetRows)
    toast.success(`已导出 ${exportTargetRows.length} 条记录`)
  }

  const renderSearchControl = (
    f: ProTableFieldSchema,
    extraCls?: { input?: string; select?: string }
  ) => {
    const val = searchInputs[f.name]
    const setVal = (nextVal: any) => {
      setSearchInputs((prev) => {
        const next = { ...prev, [f.name]: nextVal }
        onSearchChange?.(next)
        return next
      })
    }

    if (f.type === 'select') {
      return (
        <Select
          allowClear
          searchable
          multiple={f.multiple}
          options={f.options ?? []}
          placeholder={f.placeholder ?? `全部${f.label}`}
          value={val ?? (f.multiple ? [] : '')}
          onChange={setVal}
          className={extraCls?.select}
        />
      )
    }
    if (f.type === 'date') {
      return (
        <DatePicker
          value={val ?? ''}
          placeholder={f.placeholder ?? `选择${f.label}`}
          onChange={setVal}
        />
      )
    }
    if (f.type === 'dateRange') {
      return (
        <DateRangePicker
          value={val ?? null}
          onChange={setVal}
        />
      )
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
        allowClear
        placeholder={f.placeholder ?? `搜索${f.label}`}
        value={val ?? ''}
        onChange={(e) => setVal(e.target.value)}
        wrapperClassName={extraCls?.input}
      />
    )
  }

  const renderFieldInput = (field: ProTableFieldSchema) => {
    const val = formValues[field.name]
    const isDisabled =
      typeof field.disabled === 'function' ? field.disabled(editingRecord) : Boolean(field.disabled)

    const update = (nextVal: any) => {
      const nextAll = { ...formValues, [field.name]: nextVal }
      setFormValues(nextAll)
      if (fieldErrors[field.name]) {
        setFieldErrors((prev) => {
          const copy = { ...prev }
          delete copy[field.name]
          return copy
        })
      }
      if (!editingRecord) {
        draft.saveDraft(nextAll)
      }
    }

    if (field.type === 'select') {
      return (
        <Select
          searchable
          multiple={field.multiple}
          disabled={isDisabled}
          options={field.options ?? []}
          value={val ?? (field.multiple ? [] : '')}
          placeholder={field.placeholder}
          onChange={update}
        />
      )
    }
    if (field.type === 'number') {
      return (
        <InputNumber
          disabled={isDisabled}
          value={val ?? null}
          placeholder={field.placeholder}
          onChange={update}
        />
      )
    }
    if (field.type === 'textarea') {
      return (
        <Textarea
          disabled={isDisabled}
          value={val ?? ''}
          placeholder={field.placeholder}
          onChange={(e) => update(e.target.value)}
        />
      )
    }
    if (field.type === 'switch') {
      return <Switch disabled={isDisabled} checked={Boolean(val)} onChange={update} />
    }
    if (field.type === 'date') {
      return (
        <DatePicker
          disabled={isDisabled}
          value={val ?? ''}
          placeholder={field.placeholder}
          onChange={update}
        />
      )
    }
    if (field.type === 'dateRange') {
      return (
        <DateRangePicker
          disabled={isDisabled}
          value={val ?? null}
          onChange={update}
        />
      )
    }
    if (field.type === 'tags') {
      return (
        <TagInput
          disabled={isDisabled}
          value={Array.isArray(val) ? val : []}
          placeholder={field.placeholder}
          onChange={update}
        />
      )
    }
    if (field.type === 'icon') {
      return <IconPicker value={val ?? ''} onChange={update} />
    }
    return (
      <Input
        disabled={isDisabled}
        value={val ?? ''}
        placeholder={field.placeholder}
        onChange={(e) => update(e.target.value)}
      />
    )
  }

  const effectiveFormColumns = formColumns ?? (formFields.length >= 6 ? 2 : 1)

  const formFooterNode = (
    <>
      {!editingRecord && draft.hasDraft && (
        <Button
          variant="ghost"
          onClick={() => {
            draft.clearDraft()
            setFormValues(buildDefaultFormValues())
          }}
        >
          清空草稿
        </Button>
      )}
      <Button variant="secondary" onClick={() => setModalOpen(false)}>
        取消
      </Button>
      <Button variant="primary" loading={saving} onClick={handleFormSubmit}>
        确认提交
      </Button>
    </>
  )

  const formBodyNode = (
    <form onSubmit={handleFormSubmit} className="space-y-3.5">
      {!editingRecord && draft.hasDraft && (
        <div className="flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-primary)]/25 bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-fg-secondary)]">
          <span>已自动为您恢复上次未提交的本地表单草稿</span>
          <button
            type="button"
            onClick={() => {
              draft.clearDraft()
              setFormValues(buildDefaultFormValues())
            }}
            className="shrink-0 font-medium text-[var(--abc-primary)] hover:underline cursor-pointer"
          >
            丢弃草稿
          </button>
        </div>
      )}

      <div
        className={cn(
          'grid gap-3.5',
          effectiveFormColumns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
        )}
      >
        {formFields.map((field) => {
          const isFullSpan =
            effectiveFormColumns === 2 && (field.span === 2 || field.type === 'textarea')
          return (
            <FormField
              key={field.name}
              label={field.label}
              required={field.required}
              helperText={field.helperText}
              error={fieldErrors[field.name]}
              className={isFullSpan ? 'sm:col-span-2' : undefined}
            >
              {renderFieldInput(field)}
            </FormField>
          )
        })}
      </div>
    </form>
  )

  const currentIntervalLabel =
    AUTO_REFRESH_INTERVALS.find((o) => o.key === autoRefreshInterval)?.label ?? '10秒'

  return (
    <div
      data-motion={resolvedMotion}
      className={cn(
        'relative space-y-3',
        isFullScreen && 'fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4'
      )}
    >
      {/* 紧凑水平工具条搜索模式 (toolbar) */}
      {searchVariant === 'toolbar' && visibleSearchFields.length > 0 && !headerFilterMode && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setCurrent(1)
              setAppliedFilters({ ...searchInputs })
              onSearchSubmit?.(searchInputs)
            }}
            className="flex flex-wrap items-center gap-2.5"
          >
            {displayedSearchFields.map((f) => (
              <div key={f.name} className="flex items-center">
                {renderSearchControl(f, {
                  input: f.span === 2 ? 'w-80 sm:w-96' : 'w-72 sm:w-80',
                  select: 'w-40',
                })}
              </div>
            ))}
            <Button size="sm" type="submit" variant="primary" icon={<Search className="h-3.5 w-3.5" />}>
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
      {searchVariant === 'card' && visibleSearchFields.length > 0 && !headerFilterMode && (
        <Card padding="none">
          <div className="flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <Filter className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
              <span className="text-xs font-semibold text-[var(--abc-fg)]">筛选检索</span>
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
              className="inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              <span>{searchPanelExpanded ? '收起面板' : '展开面板'}</span>
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
                  setCurrent(1)
                  setAppliedFilters({ ...searchInputs })
                  onSearchSubmit?.(searchInputs)
                }}
                className="grid grid-cols-1 items-end gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {displayedSearchFields.map((f) => (
                  <FormField
                    key={f.name}
                    label={f.label}
                    className={f.span === 2 || f.type === 'dateRange' ? 'sm:col-span-2' : undefined}
                  >
                    {renderSearchControl(f)}
                  </FormField>
                ))}

                <div className="flex flex-wrap items-center gap-2">
                  <Button type="submit" variant="primary" icon={<Search className="h-3.5 w-3.5" />}>
                    搜索
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    icon={<RotateCcw className="h-3.5 w-3.5" />}
                    onClick={resetAllFilters}
                  >
                    重置
                  </Button>
                  {visibleSearchFields.length > 3 && (
                    <button
                      type="button"
                      onClick={() => setSearchFieldsCollapsed((v) => !v)}
                      className="inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer"
                    >
                      <span>
                        {searchFieldsCollapsed
                          ? `展开 (${visibleSearchFields.length - 3})`
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
      )}

      {/* 表格主卡片与工具栏 */}
      <Card padding="none">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {title && <h3 className="mr-1 text-sm font-semibold text-[var(--abc-fg)]">{title}</h3>}
            {onSaveRecord && formFields.length > 0 && canCreate && (
              <Button
                variant="primary"
                icon={<Plus className="h-3.5 w-3.5" />}
                onClick={openCreateModal}
              >
                新建记录
              </Button>
            )}
            {toolbarExtra}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {isClientFilter && (
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

            {showClientFilterSwitch && (
              <Tooltip
                content={
                  isClientFilter
                    ? '当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询'
                    : '当前为【服务端接口查询】：点击切换为前端本地即时筛选模式'
                }
              >
                <button
                  type="button"
                  role="switch"
                  aria-checked={isClientFilter}
                  aria-label="切换前端本地筛选模式"
                  onClick={() => {
                    const next = !isClientFilter
                    setIsClientFilter(next)
                    setCurrent(1)
                    toast.info(next ? '已切换至前端本地筛选模式' : '已切换至服务端接口查询模式')
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

            {/* 自动定时轮询组合键 */}
            {showAutoRefreshControl && request && (
              <div className="inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]">
                <Tooltip
                  content={
                    autoRefreshEnabled
                      ? `定时轮询运行中：每 ${currentIntervalLabel} 自动刷新（点击暂停）`
                      : '点击开启自动定时轮询刷新'
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

                <Dropdown
                  placement="bottomRight"
                  items={AUTO_REFRESH_INTERVALS.map((opt) => ({
                    key: String(opt.key),
                    label: (
                      <span className="flex items-center justify-between gap-3">
                        <span>每 {opt.label} 刷新</span>
                        {autoRefreshInterval === opt.key && (
                          <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                        )}
                      </span>
                    ),
                    onClick: () => {
                      setAutoRefreshInterval(opt.key)
                      setAutoRefreshEnabled(true)
                    },
                  }))}
                >
                  <button
                    type="button"
                    aria-label="选择轮询频率"
                    className="inline-flex h-full w-5 items-center justify-center rounded-r-[var(--abc-radius-sm)] border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </Dropdown>
              </div>
            )}

            <Tooltip content={headerFilterMode ? '关闭表头内联筛选行' : '开启表头内联筛选行'}>
              <button
                type="button"
                aria-label="切换表头内联筛选"
                onClick={() => setHeaderFilterMode((v) => !v)}
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

            {exportable && (
              <Tooltip content="导出当前数据 (CSV)">
                <button
                  type="button"
                  aria-label="导出数据"
                  onClick={handleExportCsv}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>
              </Tooltip>
            )}

            {request && (
              <Tooltip content="刷新表格数据">
                <button
                  type="button"
                  aria-label="刷新数据"
                  onClick={fetchServerData}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <RefreshCw className={cn('h-3.5 w-3.5', loading && 'animate-spin')} />
                </button>
              </Tooltip>
            )}

            {/* 独立行密度菜单（Portal 下拉，绝不与 Tooltip 冲突或被裁剪） */}
            <Dropdown
              placement="bottomRight"
              items={[
                {
                  key: 'comfortable',
                  label: (
                    <span className="flex items-center justify-between gap-4">
                      <span>宽松密度</span>
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
                      <span>标准密度</span>
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
                      <span>紧凑密度</span>
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
                onClick={() => setIsFullScreen((v) => !v)}
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
            <ProColumnSettingsPopover
              columns={columns}
              searchableFieldNames={searchableFieldNames}
              settings={settings}
              hasActionColumn={hasAnyRowAction}
              defaultActionWidth={viewable || rowActions.length > 0 ? 184 : 136}
              motion={resolvedMotion}
              onToggleVisible={toggleColumnVisible}
              onSetAllVisible={setAllColumnsVisible}
              onSetFixed={setColumnFixed}
              onSetWidth={setColumnWidth}
              onSetOrder={setColumnOrder}
              onSetSearchVisible={setSearchFieldVisible}
              onReset={resetSettings}
            />
          </div>
        </div>

        <TableCore<T>
          columns={finalColumns}
          data={displayRows}
          rowKey={rowKey}
          loading={loading}
          density={settings.density}
          motion={resolvedMotion}
          selectedKeys={selectionEnabled ? selectedKeys : undefined}
          onSelectionChange={
            selectionEnabled
              ? (keys, rows) => {
                  setSelectedKeys(keys)
                  setSelectedRows(rows)
                }
              : undefined
          }
          sortState={sortState}
          onSortChange={(key, direction) => setSortState({ key, direction })}
          headerFilterMode={headerFilterMode}
          headerFilters={appliedFilters}
          onHeaderFilterChange={(k, val) => {
            setCurrent(1)
            setSearchInputs((prev) => ({ ...prev, [k]: val }))
            setAppliedFilters((prev) => ({ ...prev, [k]: val }))
          }}
          headerFilterRender={
            !headerFilterMode
              ? (col) => {
                  const filterKey = String(col.dataIndex ?? col.key)
                  return (
                    <HeaderColumnFilterPopover
                      title={col.title}
                      filterType={col.filterType}
                      filterOptions={col.filterOptions}
                      value={appliedFilters[filterKey]}
                      onApply={(nextVal) => {
                        setCurrent(1)
                        setSearchInputs((prev) => ({ ...prev, [filterKey]: nextVal }))
                        setAppliedFilters((prev) => ({ ...prev, [filterKey]: nextVal }))
                      }}
                    />
                  )
                }
              : undefined
          }
          columnWidths={settings.columnWidths}
          onColumnResize={setColumnWidth}
          columnFixed={settings.columnFixed}
          onColumnPin={setColumnFixed}
          onColumnHide={toggleColumnVisible}
          onResetColumns={resetSettings}
          onColumnReorder={setColumnOrder}
          expandable={expandable}
          activeRowKey={selectedRowKey}
          onRowClick={onRowClick}
          onRowView={viewable ? (record) => setViewingRecord(record) : undefined}
          onEmptyReset={activeFilterCount > 0 ? resetAllFilters : undefined}
          maxHeight={maxHeight}
          className="rounded-none border-0"
        />

        {pagination !== false && (
          <div className="border-t border-[var(--abc-border)] px-4 py-3">
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
          motion={resolvedMotion}
          onBatchDelete={
            onDeleteRecords && canDelete ? () => handleBatchDelete(selectedKeys) : undefined
          }
          onClear={() => {
            setSelectedKeys([])
            setSelectedRows([])
          }}
        />
      )}

      {/* 详情只读查看弹窗 */}
      <Dialog
        open={Boolean(viewingRecord)}
        onClose={() => setViewingRecord(null)}
        title="记录详情"
        size="lg"
        footer={
          <>
            {viewingRecord && onSaveRecord && canUpdate && (
              <Button
                variant="secondary"
                icon={<Edit3 className="h-3.5 w-3.5" />}
                onClick={() => {
                  const target = viewingRecord
                  setViewingRecord(null)
                  openEditModal(target)
                }}
              >
                编辑此记录
              </Button>
            )}
            <Button variant="primary" onClick={() => setViewingRecord(null)}>
              关闭
            </Button>
          </>
        }
      >
        {viewingRecord && (
          <Descriptions
            bordered
            column={2}
            items={columns
              .filter((c) => !c.hideInTable)
              .map((c) => {
                const rawVal = viewingRecord[(c.dataIndex ?? c.key) as string]
                return {
                  key: c.key,
                  label: c.title,
                  children: c.render ? c.render(rawVal, viewingRecord, 0) : String(rawVal ?? '-'),
                }
              })}
          />
        )}
      </Dialog>

      {/* 带草稿防丢失记忆的新建 / 编辑容器（支持模态窗或侧边抽屉双形态，双列栅格自适应） */}
      {formContainer === 'drawer' ? (
        <Drawer
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={editingRecord ? '编辑记录' : '新建记录'}
          size={effectiveFormColumns === 2 ? 'lg' : 'md'}
          footer={formFooterNode}
        >
          {formBodyNode}
        </Drawer>
      ) : (
        <Dialog
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={editingRecord ? '编辑记录' : '新建记录'}
          size={effectiveFormColumns === 2 ? 'lg' : 'md'}
          footer={formFooterNode}
        >
          {formBodyNode}
        </Dialog>
      )}
    </div>
  )
}

export default ProTable
