import React,{ useEffect,useLayoutEffect,useMemo,useRef,useState } from 'react'
import { useAbcMotion } from '../../../hooks'
import { useControllableState } from '../../../hooks/useControllableState'
import { getOverlayPortalContainer } from '../../../hooks/useFloatingPosition'

import {
parseNumericWidth,
type AbcColumn,
type FlattenedRow,
type SortDirection,
type TableCoreProps
} from './types'

export function useTableCoreState<T extends Record<string, any> = Record<string, any>>(props: TableCoreProps<T>) {
  const {
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
} = props
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


  return {
    wrapperRef,
    contextMenuRef,
    prevColRectsRef,
    hasLiveSwappedRef,
    preDragOrderRef,
    resolvedMotion,
    liveDragOrder,
    setLiveDragOrder,
    draggingKey,
    setDraggingKey,
    contextMenu,
    setContextMenu,
    visibilitySubmenuOpen,
    setVisibilitySubmenuOpen,
    scrollEdge,
    isResizable,
    resolveKey,
    getEffectiveFixed,
    orderedColumns,
    effectiveSelectedKeys,
    selectable,
    hasExpandColumn,
    indentPx,
    flattenedRows,
    colWidthMeta,
    stickyMeta,
    allSelected,
    someSelected,
    toggleAll,
    toggleOne,
    startResizeColumn,
    isColSortable,
    handleSortClick,
    handleHeaderContextMenu,
    movableColumns,
    submenuConfigurableCols,
    handleMoveColumnStep,
    totalColSpan,
    portalTarget,
    hasInlineHeaderFilterRow,
    expandedKeys,
    toggleExpandRow,
    columns,
    allColumns,
    loading,
    emptyText,
    onEmptyReset,
    rowKey,
    rowSelection,
    activeRowKey,
    treeData,
    expandable,
    onRow,
    onRowClick,
    onRowView,
    isRowDraggable,
    emitRowDragEnd,
    updateScrollEdge,
    maxHeight,
    ariaLabel,
    onColumnReorder,
    onSortChange,
    sortState,
    headerFilterMode,
    headerFilterRender,
    headerFilters,
    onHeaderFilterChange,
    activeFilterKeys,
    activeFilterLabels,
    filterHighlightColor,
    onFilterHighlightColorChange,
    onColumnPin,
    onColumnHide,
    onToggleColumnVisible,
    hiddenColumnKeys,
    onResetColumns,
    density,
    scrollY,
    className,
  }
}

export type TableCoreState<T extends Record<string, any> = Record<string, any>> = ReturnType<typeof useTableCoreState<T>>
