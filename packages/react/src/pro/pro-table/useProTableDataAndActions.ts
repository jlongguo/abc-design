import {
cleanQueryObject,
filterAndSortClientRows
} from '@abc-design/core'
import React,{ useCallback,useEffect,useMemo } from 'react'
import { abcConfirm } from '../../components/feedback/Confirm'
import {
type AbcColumn
} from '../../components/table/TableCore'
import {
isProApiFailure,
normalizeProListResponse
} from '../useProTable'

/* ==================== 1. 搜索、表单、操作与工具栏模型定义 ==================== */

import { EMPTY_SERVER_FILTERS } from './types'
import type { ProTableSetupState } from './useProTableSetup'

export function useProTableDataAndActions<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
>(setup: ProTableSetupState<T, Q, F>) {
  const {
    columns,
    draftConfig,
    dataSource,
    request,
    apiProp,
    defaultQuery,
    rowKey,
    hidePagination,
    pagination,
    onSearchChange,
    onSearchReset,
    onNavigate,
    controlledSelectedRowKeys,
    onRowSelectionChange,
    treeData,
    expandable,
    sortable,
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
    onSaveRecord,
    onDeleteRecords,
    toast,
    apiRef,
    onListLoadedRef,
    settings,
    hasRemoteSource,
    isClientFilter,
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
    setInternalLoading,
    remoteRows,
    setRemoteRows,
    remoteTotal,
    setRemoteTotal,
    setInternalSelectedKeys,
    selectedKeys,
    cachedSelectedRows,
    setCachedSelectedRows,
    childrenData,
    setChildrenData,
    setChildrenLoading,
    setChildrenError,
    autoRefreshEnabled,
    autoRefreshInterval,
    requestSeqRef,
    setViewingRecord,
    setViewLoading,
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
    setFormSubmitting,
    setFormDetailLoading,
    setFormError,
    setShowDraftBanner,
    resolveRowKey
  } = setup

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


  return {
    fetchServerData,
    updateSelectedState,
    selectedRows,
    visibleColumns,
    rawRows,
    processedClientRows,
    displayRows,
    displayTotal,
    activeFilterCount,
    resetAllFilters,
    openCreateModal,
    openEditModal,
    openViewModal,
    handleValidFormSubmit,
    handleFormSubmit,
    handleSingleDelete,
    handleBatchDelete,
    handleExpandRow,
    handleRowReorder
  }
}

export type ProTableDataActionsState<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
> = ReturnType<typeof useProTableDataAndActions<T, Q, F>>
