import {
cleanQueryObject
} from '@abc-design/core'
import {
Edit3,
Eye,
GripVertical,
Trash2
} from 'lucide-react'
import React,{ useCallback,useMemo } from 'react'
import { DatePicker,DateRangePicker } from '../../components/form/DatePicker'
import { Input,InputNumber } from '../../components/form/Input'
import { Select } from '../../components/form/Select'
import { TreeSelect } from '../../components/form/TreeSelect'
import Icon from '../../components/icon/Icon'
import TableCore,{
type AbcColumn,
type AbcTableExpandableConfig
} from '../../components/table/TableCore'
import {
ProRowActionsOverflow,
downloadTableCsv,
type ResolvedRowActionItem
} from '../ProTableExtras'

/* ==================== 1. 搜索、表单、操作与工具栏模型定义 ==================== */

import {
  AUTO_REFRESH_INTERVALS,
  formatFilterBadgeText,
  hasActiveFilterValue,
  type ProSearchFieldConfig,
} from './types'
import type { ProTableDataActionsState } from './useProTableDataAndActions'
import type { ProTableSetupState } from './useProTableSetup'

export function useProTableColumns<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
>(setup: ProTableSetupState<T, Q, F>, dataActions: ProTableDataActionsState<T, Q, F>) {
  const {
    title,
    storageKey,
    subTitle,
    apiProp,
    defaultQuery,
    rowKey,
    onSearchChange,
    onSearchSubmit,
    controlledHeaderFilterMode,
    propShowHeaderFilterToggle,
    showClientFilterSwitch,
    onExport,
    formColumns,
    addButtonText,
    rowActions,
    actionButtons,
    actionColumnWidth,
    maxInlineActions,
    rowSelection,
    showRowSelection,
    batchActions,
    renderBatchActions,
    treeData,
    expandable,
    sortable,
    toolbarExtra,
    renderToolbarExtra,
    headerExtra,
    renderExtra,
    cardExtra,
    renderCardExtra,
    onDeleteRecords,
    toast,
    checkPermission,
    resolvedApi,
    apiRef,
    settings,
    hasRemoteSource,
    isClientFilter,
    searchInputs,
    setSearchInputs,
    searchInputsRef,
    appliedFilters,
    setAppliedFilters,
    current,
    setCurrent,
    pageSize,
    setExporting,
    remoteRows,
    childrenData,
    childrenLoading,
    childrenError,
    autoRefreshInterval,
    allSearchFields,
    resolvedFormFields,
    canBatchDelete,
    effectiveViewable,
    canOpenEdit,
    canOpenDelete,
    resolveRowKey
  } = setup
  const {
    fetchServerData,
    visibleColumns,
    processedClientRows,
    openEditModal,
    openViewModal,
    handleSingleDelete,
    handleExpandRow,
  } = dataActions

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
            maxInline={maxInlineActions}
            jsdomFallbackMax={effectiveMaxInlineActions}
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


  return {
    selectionEnabled,
    effectiveMaxInlineActions,
    permittedBatchActions,
    hasAnyRowAction,
    defaultActionColWidth,
    actionColAlign,
    finalColumns,
    resolvedExpandable,
    handleExportAction,
    updateSearchInput,
    submitSearch,
    renderSearchControl,
    effectiveFormColumns,
    effectiveShowClientFilterSwitch,
    currentIntervalLabel,
    showHeaderFilterToggle,
    showTopPageHeader,
    resolvedHeaderExtra,
    resolvedCardExtra,
    resolvedToolbarExtra,
    resolvedAddText,
    activeFilterKeys,
    activeFilterLabels
  }
}

export type ProTableColumnsState<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
> = ReturnType<typeof useProTableColumns<T, Q, F>>
