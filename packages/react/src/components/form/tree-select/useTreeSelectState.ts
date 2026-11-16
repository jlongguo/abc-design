import {
collectAllExpandableKeys,
filterTreeSelectNodes,
flattenVisibleTreeNodes,
formatTreeCheckedStrategy,
normalizeTreeSelectData,
resolveTreeCheckedStateFromValue,
toggleTreeNodeChecked,
type AbcCheckedStrategy,
type AbcTreeSelectNode
} from '@abc-design/core'
import React,{ useCallback,useEffect,useId,useMemo,useRef,useState } from 'react'
import { useAbcMotion,useAbcSize } from '../../../hooks/useAbcDefaults'
import { useFloatingPosition } from '../../../hooks/useFloatingPosition'
import { usePresence } from '../../../hooks/usePresence'
import { flattenNodeText } from '../Select'

import {
VIRTUAL_OVERSCAN,
VIRTUAL_SCROLL_THRESHOLD,
renderNodeDisplayLabel,
toKeyArray,
type TreeSelectChangeExtra,
type TreeSelectProps,
type TreeSelectValue,
} from './types'

export function useTreeSelectState(
  props: TreeSelectProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
  const {
treeData = [],
      fieldNames,
      treeDataSimpleMode = false,
      loadData,
      treeLoadedKeys,
      value,
      defaultValue,
      onChange,
      onValueChange,
      multiple = false,
      treeCheckable = false,
      treeCheckStrictly = false,
      showCheckedStrategy,
      selectableLeafOnly = false,
      maxTagCount,
      treeDefaultExpandAll = false,
      treeDefaultExpandedKeys,
      treeExpandedKeys,
      onTreeExpand,
      showToolbar,
      searchable,
      showSearch,
      searchValue,
      onSearch,
      searchPlaceholder = '搜索节点或输入拼音首字母...',
      treeNodeFilterProp = 'both',
      virtual = true,
      listHeight = 280,
      itemHeight = 30,
      label,
      error,
      invalid = false,
      helperText,
      required = false,
      placeholder = '请选择',
      allowClear,
      clearable,
      disabled = false,
      id,
      name,
      size,
      motion,
      className,
      wrapperClassName,
      dropdownClassName,
      matchWidth = true,
      portalContainer: portalContainerProp,
      container: containerProp,
      emptyText = '暂无匹配节点',
      'aria-label': ariaLabel,
      'aria-describedby': externalDescribedBy,
      ...restTriggerProps
    } = props
    const resolvedSize = useAbcSize(size === 'ghost' ? 'sm' : size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const generatedId = useId()
    const triggerId = id || `abc-treeselect-${generatedId}`
    const treeId = `${triggerId}-tree`
    const feedbackId = `${triggerId}-feedback`

    const isTestEnv =
      (typeof process !== 'undefined' && process.env?.NODE_ENV === 'test') ||
      (typeof import.meta !== 'undefined' &&
        Boolean((import.meta as unknown as { env?: { MODE?: string } }).env?.MODE === 'test'))

    const isCheckable = Boolean(treeCheckable)
    const isMultiMode = Boolean(multiple || isCheckable)
    const effectiveStrategy: AbcCheckedStrategy =
      showCheckedStrategy ?? (isCheckable && !treeCheckStrictly ? 'SHOW_PARENT' : 'SHOW_ALL')
    const isSearchable = Boolean(searchable ?? showSearch)
    const isClearable = Boolean(allowClear ?? clearable)
    const isInvalid = Boolean(invalid || error)
    const resolvedShowToolbar = showToolbar ?? (isMultiMode || isSearchable)

    // 1. 归一化数据源，生成唯一树与 O(1) 映射表
    const normalized = useMemo(
      () =>
        normalizeTreeSelectData(treeData, {
          fieldNames,
          treeDataSimpleMode,
        }),
      [treeData, fieldNames, treeDataSimpleMode]
    )

    // 2. 受控 / 非受控值状态
    const isControlled = value !== undefined
    const [uncontrolledValue, setUncontrolledValue] = useState<TreeSelectValue>(() => {
      if (defaultValue !== undefined) return defaultValue
      return isMultiMode ? [] : ''
    })
    const activeValue = isControlled ? value : uncontrolledValue

    // 3. 复选或选中计算
    const selectedRawKeys = useMemo(
      () => toKeyArray(activeValue, isMultiMode),
      [activeValue, isMultiMode]
    )

    const checkedState = useMemo(() => {
      if (!isCheckable) {
        return {
          checkedKeys: selectedRawKeys,
          halfCheckedKeys: [] as Array<string | number>,
        }
      }
      return resolveTreeCheckedStateFromValue(
        normalized.treeNodes,
        selectedRawKeys,
        treeCheckStrictly
      )
    }, [isCheckable, normalized.treeNodes, selectedRawKeys, treeCheckStrictly])

    const checkedKeyStrSet = useMemo(
      () => new Set(checkedState.checkedKeys.map((k) => String(k))),
      [checkedState.checkedKeys]
    )
    const halfCheckedKeyStrSet = useMemo(
      () => new Set(checkedState.halfCheckedKeys.map((k) => String(k))),
      [checkedState.halfCheckedKeys]
    )

    // 触发器展示与胶囊集合：复选模式下按 showCheckedStrategy 收敛显示，单选/非复选多选按原值展示
    const displayTagKeys = useMemo(() => {
      if (!isMultiMode) return selectedRawKeys.slice(0, 1)
      if (!isCheckable) return selectedRawKeys
      return formatTreeCheckedStrategy(
        normalized.treeNodes,
        checkedState.checkedKeys,
        effectiveStrategy,
        treeCheckStrictly
      )
    }, [
      isMultiMode,
      isCheckable,
      selectedRawKeys,
      normalized.treeNodes,
      checkedState.checkedKeys,
      effectiveStrategy,
      treeCheckStrictly,
    ])

    const displayItems = useMemo(
      () =>
        displayTagKeys.map((key) => {
          const node = normalized.nodeMap.get(String(key))
          const labelNode = node ? renderNodeDisplayLabel(node) : String(key)
          const textTitle = node
            ? node.title
            : typeof labelNode === 'string' || typeof labelNode === 'number'
              ? String(labelNode)
              : flattenNodeText(labelNode) || String(key)
          return {
            key,
            keyStr: String(key),
            node,
            label: labelNode,
            title: textTitle,
          }
        }),
      [displayTagKeys, normalized.nodeMap]
    )

    // 4. 展开状态 & 懒加载状态
    const isExpandControlled = treeExpandedKeys !== undefined
    const [uncontrolledExpandedKeys, setUncontrolledExpandedKeys] = useState<Array<string | number>>(
      () => {
        if (treeDefaultExpandedKeys && treeDefaultExpandedKeys.length > 0) {
          return treeDefaultExpandedKeys
        }
        if (treeDefaultExpandAll) {
          return collectAllExpandableKeys(normalized.treeNodes)
        }
        return []
      }
    )

    // 非受控且配置了 treeDefaultExpandAll 时，若后续数据异步填充，确保初次拥有父节点时可同步全展开
    const initializedExpandAllRef = useRef(
      Boolean(treeDefaultExpandedKeys?.length) || normalized.treeNodes.length > 0
    )
    useEffect(() => {
      if (isExpandControlled || !treeDefaultExpandAll) return
      if (!initializedExpandAllRef.current && normalized.treeNodes.length > 0) {
        initializedExpandAllRef.current = true
        setUncontrolledExpandedKeys(collectAllExpandableKeys(normalized.treeNodes))
      }
    }, [isExpandControlled, treeDefaultExpandAll, normalized.treeNodes])

    const [internalLoadedKeys, setInternalLoadedKeys] = useState<Set<string>>(() => new Set())
    const [loadingKeys, setLoadingKeys] = useState<Set<string>>(() => new Set())

    const loadedKeyStrSet = useMemo(() => {
      if (treeLoadedKeys !== undefined) {
        return new Set(treeLoadedKeys.map((k) => String(k)))
      }
      return internalLoadedKeys
    }, [treeLoadedKeys, internalLoadedKeys])

    // 5. 搜索词与下拉开合状态
    const [open, setOpen] = useState(false)
    const [internalKeyword, setInternalKeyword] = useState('')
    const effectiveKeyword = searchValue !== undefined ? searchValue : internalKeyword
    const [activeIndex, setActiveIndex] = useState(0)
    const [scrollTop, setScrollTop] = useState(0)

    const { isMounted, isVisible } = usePresence(
      open,
      resolvedMotion === 'none' || isTestEnv ? 0 : 140
    )

    const wrapperRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const popoverRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const scrollHostRef = useRef<HTMLDivElement>(null)
    const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

    const mergeTriggerRef = useCallback(
      (node: HTMLDivElement | null) => {
        triggerRef.current = node
        if (typeof forwardedRef === 'function') {
          forwardedRef(node)
        } else if (forwardedRef) {
          ;(forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node
        }
      },
      [forwardedRef]
    )

    const { style: floatingStyle, actualSide, portalContainer } = useFloatingPosition({
      open: isMounted,
      triggerRef,
      floatingRef: popoverRef,
      placement: 'bottomLeft',
      offset: 6,
      matchWidth,
    })

    const effectivePortalContainer = portalContainerProp ?? containerProp ?? portalContainer

    // 6. 搜索过滤与展平可见节点列表
    const { filteredNodes, autoExpandedKeys } = useMemo(
      () => filterTreeSelectNodes(normalized.treeNodes, effectiveKeyword, treeNodeFilterProp),
      [normalized.treeNodes, effectiveKeyword, treeNodeFilterProp]
    )

    const activeExpandedKeys = isExpandControlled ? treeExpandedKeys! : uncontrolledExpandedKeys
    const expandedKeyStrSet = useMemo(() => {
      const base = new Set<string>(activeExpandedKeys.map((k) => String(k)))
      if (effectiveKeyword.trim()) {
        autoExpandedKeys.forEach((k) => base.add(String(k)))
      }
      return base
    }, [activeExpandedKeys, effectiveKeyword, autoExpandedKeys])

    const isNodeExpandable = useCallback(
      (node: AbcTreeSelectNode) => {
        if (node.children && node.children.length > 0) return true
        if (loadData && node.isLeaf !== true && !loadedKeyStrSet.has(String(node.key))) {
          return true
        }
        return false
      },
      [loadData, loadedKeyStrSet]
    )

    const flattenedRows = useMemo(
      () => flattenVisibleTreeNodes(filteredNodes, expandedKeyStrSet, isNodeExpandable),
      [filteredNodes, expandedKeyStrSet, isNodeExpandable]
    )

    const isNodeLeafForSelection = useCallback(
      (node: AbcTreeSelectNode) => !isNodeExpandable(node),
      [isNodeExpandable]
    )

    const isRowSelectionBlocked = useCallback(
      (node: AbcTreeSelectNode) => {
        if (node.disabled) return true
        if (isCheckable) return node.checkable === false
        if (node.selectable === false) return true
        if (selectableLeafOnly && !isNodeLeafForSelection(node)) return true
        return false
      },
      [isCheckable, selectableLeafOnly, isNodeLeafForSelection]
    )

    // 更新展开键值（同步支持受控与非受控）
    const commitExpandedKeys = useCallback(
      (nextKeys: Array<string | number>) => {
        if (!isExpandControlled) {
          setUncontrolledExpandedKeys(nextKeys)
        }
        onTreeExpand?.(nextKeys)
      },
      [isExpandControlled, onTreeExpand]
    )

    const toggleExpandNode = useCallback(
      async (node: AbcTreeSelectNode) => {
        const keyStr = String(node.key)
        const currentlyExpanded = expandedKeyStrSet.has(keyStr)

        if (currentlyExpanded) {
          commitExpandedKeys(activeExpandedKeys.filter((k) => String(k) !== keyStr))
          return
        }

        // 若配置了 loadData 且当前无子节点且未加载过，先触发异步懒加载
        if (
          loadData &&
          (!node.children || node.children.length === 0) &&
          node.isLeaf !== true &&
          !loadedKeyStrSet.has(keyStr)
        ) {
          if (loadingKeys.has(keyStr)) return
          setLoadingKeys((prev) => {
            const next = new Set(prev)
            next.add(keyStr)
            return next
          })
          try {
            await loadData(node)
            if (treeLoadedKeys === undefined) {
              setInternalLoadedKeys((prev) => {
                const next = new Set(prev)
                next.add(keyStr)
                return next
              })
            }
          } finally {
            setLoadingKeys((prev) => {
              const next = new Set(prev)
              next.delete(keyStr)
              return next
            })
          }
        }

        commitExpandedKeys([...activeExpandedKeys, node.key])
      },
      [
        expandedKeyStrSet,
        activeExpandedKeys,
        commitExpandedKeys,
        loadData,
        loadedKeyStrSet,
        loadingKeys,
        treeLoadedKeys,
      ]
    )

    // 7. 值提交逻辑（统一计算回传 labels & extra）
    const emitValueChange = useCallback(
      (
        nextVal: TreeSelectValue,
        extra: TreeSelectChangeExtra = {}
      ) => {
        if (!isControlled) {
          setUncontrolledValue(nextVal)
        }
        const keyList = toKeyArray(nextVal, isMultiMode)
        const labels = keyList.map((k) => {
          const hit = normalized.nodeMap.get(String(k))
          return hit ? renderNodeDisplayLabel(hit) : String(k)
        })
        onValueChange?.(nextVal)
        onChange?.(nextVal, labels, extra)
      },
      [isControlled, isMultiMode, normalized.nodeMap, onValueChange, onChange]
    )

    const handleToggleCheck = useCallback(
      (node: AbcTreeSelectNode, forceNextChecked?: boolean) => {
        if (node.disabled || node.checkable === false) return
        const keyStr = String(node.key)
        const currentChecked = checkedKeyStrSet.has(keyStr)
        const nextChecked = forceNextChecked !== undefined ? forceNextChecked : !currentChecked

        const nextState = toggleTreeNodeChecked(
          normalized.treeNodes,
          checkedState.checkedKeys,
          node,
          nextChecked,
          treeCheckStrictly
        )
        const outputKeys = formatTreeCheckedStrategy(
          normalized.treeNodes,
          nextState.checkedKeys,
          effectiveStrategy,
          treeCheckStrictly
        )
        emitValueChange(outputKeys, {
          triggerNode: node,
          checked: nextChecked,
          halfCheckedKeys: nextState.halfCheckedKeys,
        })
      },
      [
        checkedKeyStrSet,
        normalized.treeNodes,
        checkedState.checkedKeys,
        treeCheckStrictly,
        effectiveStrategy,
        emitValueChange,
      ]
    )

    const handleSelectRow = useCallback(
      (node: AbcTreeSelectNode) => {
        if (node.disabled) return

        // 复选模式下点击整行即切换勾选状态
        if (isCheckable) {
          if (node.checkable === false) {
            if (isNodeExpandable(node)) void toggleExpandNode(node)
            return
          }
          handleToggleCheck(node)
          return
        }

        // 若仅允许选叶子节点，点击父节点仅负责展开/收起
        if (selectableLeafOnly && !isNodeLeafForSelection(node)) {
          void toggleExpandNode(node)
          return
        }

        if (node.selectable === false) {
          if (isNodeExpandable(node)) void toggleExpandNode(node)
          return
        }

        if (isMultiMode) {
          const keyStr = String(node.key)
          const exists = selectedRawKeys.some((k) => String(k) === keyStr)
          const nextKeys = exists
            ? selectedRawKeys.filter((k) => String(k) !== keyStr)
            : [...selectedRawKeys, node.value]
          emitValueChange(nextKeys, { triggerNode: node, checked: !exists })
          return
        }

        emitValueChange(node.value, { triggerNode: node, checked: true })
        setOpen(false)
        triggerRef.current?.focus()
      },
      [
        isCheckable,
        isNodeExpandable,
        toggleExpandNode,
        handleToggleCheck,
        selectableLeafOnly,
        isNodeLeafForSelection,
        isMultiMode,
        selectedRawKeys,
        emitValueChange,
      ]
    )

    // 8. 外部点击与 Escape 关闭控制
    useEffect(() => {
      if (!open) {
        if (searchValue === undefined) setInternalKeyword('')
        setScrollTop(0)
        return
      }
      const handleOutside = (e: MouseEvent | TouchEvent) => {
        const target = e.target as Node | null
        if (!target) return
        if (wrapperRef.current?.contains(target)) return
        if (popoverRef.current?.contains(target)) return
        setOpen(false)
      }
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          e.stopPropagation()
          setOpen(false)
          triggerRef.current?.focus()
        }
      }
      document.addEventListener('mousedown', handleOutside)
      document.addEventListener('touchstart', handleOutside, { passive: true })
      document.addEventListener('keydown', handleEsc, true)
      return () => {
        document.removeEventListener('mousedown', handleOutside)
        document.removeEventListener('touchstart', handleOutside)
        document.removeEventListener('keydown', handleEsc, true)
      }
    }, [open, searchValue])

    // 确保 activeIndex 始终不越界
    useEffect(() => {
      if (flattenedRows.length === 0) {
        if (activeIndex !== 0) setActiveIndex(0)
        return
      }
      if (activeIndex >= flattenedRows.length) {
        setActiveIndex(flattenedRows.length - 1)
      }
    }, [flattenedRows.length, activeIndex])

    const useVirtualWindow = virtual && flattenedRows.length > VIRTUAL_SCROLL_THRESHOLD

    // 键盘移动时自动保证高亮行落入滚动可视窗口
    useEffect(() => {
      if (!open || flattenedRows.length === 0) return
      const host = scrollHostRef.current
      if (!host) return

      if (useVirtualWindow) {
        const rowTop = activeIndex * itemHeight
        const rowBottom = rowTop + itemHeight
        if (rowTop < host.scrollTop) {
          host.scrollTop = rowTop
          setScrollTop(rowTop)
        } else if (rowBottom > host.scrollTop + listHeight) {
          const nextTop = rowBottom - listHeight
          host.scrollTop = nextTop
          setScrollTop(nextTop)
        }
        return
      }

      const activeRow = flattenedRows[activeIndex]
      if (!activeRow) return
      const el = rowRefs.current[activeRow.keyStr]
      if (!el) return
      const top = el.offsetTop
      const bottom = top + el.offsetHeight
      if (top < host.scrollTop) {
        host.scrollTop = top
      } else if (bottom > host.scrollTop + host.clientHeight) {
        host.scrollTop = bottom - host.clientHeight
      }
    }, [open, activeIndex, useVirtualWindow, itemHeight, listHeight, flattenedRows])

    const openMenu = () => {
      if (disabled) return
      const selectedSet = new Set(selectedRawKeys.map((k) => String(k)))
      const hitIdx = flattenedRows.findIndex(
        (r) => !r.node.disabled && selectedSet.has(r.keyStr)
      )
      if (hitIdx >= 0) {
        setActiveIndex(hitIdx)
      } else {
        const firstEnabled = flattenedRows.findIndex((r) => !r.node.disabled)
        setActiveIndex(firstEnabled >= 0 ? firstEnabled : 0)
      }
      setOpen(true)
    }

    const moveActive = (delta: number) => {
      if (flattenedRows.length === 0) return
      let next = activeIndex
      for (let i = 0; i < flattenedRows.length; i++) {
        next = (next + delta + flattenedRows.length) % flattenedRows.length
        if (!flattenedRows[next]?.node.disabled) {
          setActiveIndex(next)
          return
        }
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      if (disabled) return
      const inSearchInput = e.target === searchInputRef.current

      if (e.key === 'Escape') {
        if (open) {
          e.preventDefault()
          e.stopPropagation()
          setOpen(false)
          triggerRef.current?.focus()
        }
        return
      }

      if (e.key === 'Tab') {
        if (open) setOpen(false)
        return
      }

      if (!open) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openMenu()
          return
        }
        if (e.key === 'Backspace' && isMultiMode && displayItems.length > 0) {
          const lastItem = displayItems[displayItems.length - 1]
          if (lastItem && !lastItem.node?.disabled) {
            e.preventDefault()
            if (isCheckable && lastItem.node) {
              handleToggleCheck(lastItem.node, false)
            } else {
              emitValueChange(selectedRawKeys.filter((k) => String(k) !== lastItem.keyStr))
            }
          }
        }
        return
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        moveActive(1)
        return
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        moveActive(-1)
        return
      }

      const currentItem = flattenedRows[activeIndex]
      if (!currentItem) return

      if (e.key === 'ArrowRight' && !inSearchInput) {
        e.preventDefault()
        if (currentItem.hasChildren && !currentItem.isExpanded) {
          void toggleExpandNode(currentItem.node)
        } else if (currentItem.hasChildren && currentItem.isExpanded) {
          moveActive(1)
        }
        return
      }

      if (e.key === 'ArrowLeft' && !inSearchInput) {
        e.preventDefault()
        if (currentItem.hasChildren && currentItem.isExpanded) {
          void toggleExpandNode(currentItem.node)
        } else if (currentItem.parentKey !== null) {
          const pStr = String(currentItem.parentKey)
          const parentIdx = flattenedRows.findIndex((r) => r.keyStr === pStr)
          if (parentIdx >= 0) setActiveIndex(parentIdx)
        }
        return
      }

      if (e.key === 'Enter' || (e.key === ' ' && !inSearchInput)) {
        e.preventDefault()
        handleSelectRow(currentItem.node)
      }
    }

    // 9. 多选胶囊超出 maxTagCount 折叠计算
    const effectiveMaxTags =
      maxTagCount === 'responsive'
        ? 3
        : typeof maxTagCount === 'number' && maxTagCount >= 0
          ? maxTagCount
          : Number.POSITIVE_INFINITY
    const visibleTags = isMultiMode ? displayItems.slice(0, effectiveMaxTags) : displayItems
    const hiddenTags = isMultiMode ? displayItems.slice(effectiveMaxTags) : []

    // 10. 虚拟滚动窗口切片
    const totalVirtualHeight = flattenedRows.length * itemHeight
    const virtualStartIndex = useVirtualWindow
      ? Math.max(0, Math.floor(scrollTop / itemHeight) - VIRTUAL_OVERSCAN)
      : 0
    const virtualVisibleCount = useVirtualWindow
      ? Math.ceil(listHeight / itemHeight) + VIRTUAL_OVERSCAN * 2
      : flattenedRows.length
    const virtualEndIndex = useVirtualWindow
      ? Math.min(flattenedRows.length, virtualStartIndex + virtualVisibleCount)
      : flattenedRows.length
    const renderedRows = useVirtualWindow
      ? flattenedRows.slice(virtualStartIndex, virtualEndIndex)
      : flattenedRows

    const describedByIds = [
      externalDescribedBy,
      error || helperText ? feedbackId : undefined,
    ]
      .filter(Boolean)
      .join(' ')


  return {
    resolvedSize,
    resolvedMotion,
    triggerId,
    treeId,
    feedbackId,
    isCheckable,
    isMultiMode,
    isSearchable,
    isClearable,
    isInvalid,
    resolvedShowToolbar,
    normalized,
    selectedRawKeys,
    checkedKeyStrSet,
    halfCheckedKeyStrSet,
    displayTagKeys,
    displayItems,
    loadedKeyStrSet,
    effectiveKeyword,
    setInternalKeyword,
    wrapperRef,
    triggerRef,
    popoverRef,
    searchInputRef,
    scrollHostRef,
    rowRefs,
    mergeTriggerRef,
    effectivePortalContainer,
    flattenedRows,
    isRowSelectionBlocked,
    commitExpandedKeys,
    toggleExpandNode,
    emitValueChange,
    handleToggleCheck,
    handleSelectRow,
    loadingKeys,
    activeIndex,
    setActiveIndex,
    open,
    setOpen,
    openMenu,
    handleKeyDown,
    effectiveMaxTags,
    visibleTags,
    hiddenTags,
    totalVirtualHeight,
    virtualStartIndex,
    renderedRows,
    useVirtualWindow,
    describedByIds,
    actualSide,
    floatingStyle,
    isMounted,
    isVisible,
    setScrollTop,
    wrapperClassName,
    label,
    required,
    name,
    restTriggerProps,
    disabled,
    ariaLabel,
    placeholder,
    size,
    className,
    matchWidth,
    dropdownClassName,
    searchValue,
    onSearch,
    searchPlaceholder,
    listHeight,
    emptyText,
    itemHeight,
    error,
    helperText,
    selectableLeafOnly
  }
}

export type TreeSelectState = ReturnType<typeof useTreeSelectState>
