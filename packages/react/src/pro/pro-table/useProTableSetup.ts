import {
readQueryFromUrlSearch,
writeQueryToUrlSearch
} from '@abc-design/core'
import { useCallback,useEffect,useMemo,useRef,useState } from 'react'
import {
type SortDirection
} from '../../components/table/TableCore'
import { useAbcMotion } from '../../hooks'
import { useDraftStorage } from '../../hooks/useDraftStorage'
import { useTableSettings } from '../../hooks/useTableSettings'
import { useAbcConfig } from '../../provider/AbcProvider'
import { useAbcPermission } from '../PermissionAndDict'
import {
resolveFieldKey,
useProForm,
type ProCrudFieldType,
type ProCrudFormField
} from '../ProCrudForm'
import {
createProTableApi,
type ProCrudApiConfig
} from '../useProTable'

/* ==================== 1. 搜索、表单、操作与工具栏模型定义 ==================== */

import {
type ProSearchFieldConfig,
type ProTableProps
} from './types'

export function useProTableSetup<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
>(props: ProTableProps<T, Q, F>) {
  const {
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
  emptyText,
  emptyDescription,
  emptyAction,
  emptyNode,
  onEmptyReset,
} = props
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

  return {
    propStorageKey,
    tableId,
    title,
    subTitle,
    columns,
    fields,
    propSearchFields,
    propFormFields,
    formSchema,
    defaultFormValues,
    dialogTitle,
    dialogSize,
    formLayout,
    draftConfig,
    dataSource,
    propLoading,
    request,
    apiProp,
    defaultQuery,
    onListLoaded,
    rowKey,
    defaultPageSize,
    pageSizeOptions,
    hidePagination,
    pagination,
    renderPagination,
    selectedRowKey,
    onRowClick,
    onRow,
    searchVariant,
    onSearchChange,
    onSearchSubmit,
    onSearchReset,
    controlledHeaderFilterMode,
    onHeaderFilterModeChange,
    propShowHeaderFilterToggle,
    initialClientFilter,
    showClientFilterSwitch,
    defaultSearchCollapsed,
    autoRefresh,
    autoRefreshConfig,
    refetchInterval,
    exportable,
    showExport,
    onExport,
    showImport,
    onImport,
    syncToUrl,
    viewable,
    showView,
    viewTitle,
    viewSize,
    renderViewExtra,
    renderViewFooter,
    onNavigate,
    formContainer,
    formColumns,
    showAdd,
    addButtonText,
    showEdit,
    showDelete,
    showBatchDelete,
    rowActions,
    actionButtons,
    actionColumnWidth,
    maxInlineActions,
    rowSelection,
    showRowSelection,
    controlledSelectedRowKeys,
    onRowSelectionChange,
    batchActions,
    renderBatchActions,
    treeData,
    expandable,
    sortable,
    columnSettingsEnabled,
    maxHeight,
    autoFitHeight,
    permissions,
    permission,
    customHasPermission,
    toolbarButtons,
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
    emptyText,
    emptyDescription,
    emptyAction,
    emptyNode,
    onEmptyReset,
    toast,
    resolvedMotion,
    abcHasPermission,
    checkPermission,
    resolvedApi,
    apiRef,
    onListLoadedRef,
    defaultHiddenKeys,
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
    hasRemoteSource,
    initialUrlParams,
    isClientFilter,
    setIsClientFilter,
    internalHeaderFilterMode,
    setInternalHeaderFilterMode,
    headerFilterMode,
    updateHeaderFilterMode,
    extraFilterCollapsed,
    setExtraFilterCollapsed,
    searchPanelExpanded,
    setSearchPanelExpanded,
    searchFieldsCollapsed,
    setSearchFieldsCollapsed,
    searchInputs,
    setSearchInputs,
    searchInputsRef,
    appliedFilters,
    setAppliedFilters,
    quickKeyword,
    setQuickKeyword,
    sortState,
    setSortState,
    current,
    setCurrent,
    pageSize,
    setPageSize,
    internalLoading,
    setInternalLoading,
    exporting,
    setExporting,
    loading,
    remoteRows,
    setRemoteRows,
    remoteTotal,
    setRemoteTotal,
    containerRef,
    searchCardMeasureRef,
    tableScrollMeasureRef,
    paginationWrapRef,
    computedScrollY,
    setComputedScrollY,
    internalSelectedKeys,
    setInternalSelectedKeys,
    selectedKeys,
    cachedSelectedRows,
    setCachedSelectedRows,
    isFullScreen,
    setIsFullScreen,
    autoRefreshPopoverOpen,
    setAutoRefreshPopoverOpen,
    childrenData,
    setChildrenData,
    childrenLoading,
    setChildrenLoading,
    childrenError,
    setChildrenError,
    showAutoRefreshControl,
    autoRefreshEnabled,
    setAutoRefreshEnabled,
    autoRefreshInterval,
    setAutoRefreshInterval,
    requestSeqRef,
    viewingRecord,
    setViewingRecord,
    viewLoading,
    setViewLoading,
    baseSearchFields,
    searchableFieldNames,
    allSearchFields,
    visibleSearchFields,
    extraFilterFields,
    searchCollapseMeta,
    displayedSearchFields,
    resolvedFormFields,
    buildDefaultFormValues,
    form,
    draftEnabled,
    autoRestoreDraft,
    draft,
    modalOpen,
    setModalOpen,
    isEdit,
    setIsEdit,
    editingRecord,
    setEditingRecord,
    formSubmitting,
    setFormSubmitting,
    formDetailLoading,
    setFormDetailLoading,
    formError,
    setFormError,
    showDraftBanner,
    setShowDraftBanner,
    addPermCode,
    editPermCode,
    deletePermCode,
    batchDeletePermCode,
    exportPermCode,
    viewPermCode,
    canCreate,
    canUpdate,
    canDelete,
    canBatchDelete,
    effectiveExportable,
    effectiveViewable,
    canOpenAdd,
    canOpenEdit,
    canOpenDelete,
    toggleFullScreen,
    resolveRowKey,
    storageKey
  }
}

export type ProTableSetupState<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
> = ReturnType<typeof useProTableSetup<T, Q, F>>
