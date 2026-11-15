/**
 * 企业级树形选择器组件 (TreeSelect / TreeSelectField)
 * 核心能力：
 * 1. 基于 @abc-design/core 无头树算法内核，同时支持单选、复选多选与父子级联/独立勾选；
 * 2. 支持 SHOW_PARENT / SHOW_CHILD / SHOW_ALL 三种受控回填与胶囊展示策略；
 * 3. 支持自定义 fieldNames 映射与扁平 id/pId 自动构树 (treeDataSimpleMode)；
 * 4. 内置中文拼音首字母与关键字检索（自动展开命中祖先链路）；
 * 5. 支持异步子节点懒加载 (loadData)、固定行高零外部依赖虚拟滚动，以及原生 <dialog[open]> Top-Layer 宿主穿透。
 */
import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  collectAllExpandableKeys,
  filterTreeSelectNodes,
  flattenVisibleTreeNodes,
  formatTreeCheckedStrategy,
  normalizeTreeSelectData,
  resolveTreeCheckedStateFromValue,
  toggleTreeNodeChecked,
  type AbcCheckedStrategy,
  type AbcTreeFieldNames,
  type AbcTreeSelectNode,
  type AbcTreeSimpleModeConfig,
} from '@abc-design/core'
import type { AbcMotionPreset } from '@abc-design/tokens'
import { Check, ChevronDown, ChevronRight, FolderTree, Loader2, Search, X } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { useFloatingPosition } from '../../hooks/useFloatingPosition'
import { usePresence } from '../../hooks/usePresence'
import { cn } from '../../utils/cn'
import { Checkbox } from './Controls'
import { baseFieldControlClass, type ControlSize } from './Input'
import { flattenNodeText } from './Select'

export type TreeSelectValue = string | number | Array<string | number> | null | undefined

export interface TreeSelectChangeExtra {
  triggerNode?: AbcTreeSelectNode
  checked?: boolean
  halfCheckedKeys?: Array<string | number>
}

export interface TreeSelectProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onChange' | 'defaultValue' | 'children'
  > {
  /** 树形数据源（支持嵌套结构或配合 treeDataSimpleMode 使用扁平数组） */
  treeData?: ReadonlyArray<Record<string, any>>
  /** 自定义节点字段名映射 */
  fieldNames?: AbcTreeFieldNames
  /** 开启扁平 id/pId 自动构树模式 */
  treeDataSimpleMode?: boolean | AbcTreeSimpleModeConfig
  /** 异步懒加载子节点回调 */
  loadData?: (node: AbcTreeSelectNode) => Promise<void>
  /** 受控已加载节点 key（配合 loadData） */
  treeLoadedKeys?: Array<string | number>

  /** 受控选中值：单选为标量，多选/复选为数组 */
  value?: TreeSelectValue
  /** 非受控默认值 */
  defaultValue?: TreeSelectValue
  /** 值变更回调 */
  onChange?: (
    value: any,
    labelList: React.ReactNode[],
    extra: TreeSelectChangeExtra
  ) => void
  /** 简化的值变更回调（单选返回标量，多选返回数组） */
  onValueChange?: (value: any) => void

  /** 是否多选（无复选框时的多选模式） */
  multiple?: boolean
  /** 是否显示节点复选框（自动开启多选） */
  treeCheckable?: boolean
  /** 开启后父子节点勾选状态完全独立，不做级联推算 */
  treeCheckStrictly?: boolean
  /** 复选模式下回填与展示标签的收敛策略 */
  showCheckedStrategy?: AbcCheckedStrategy
  /** 仅允许选中末级叶子节点（点击父节点仅切换展开） */
  selectableLeafOnly?: boolean
  /** 多选标签展示上限，超出自动折叠为 +N 胶囊 */
  maxTagCount?: number | 'responsive'

  /** 是否默认展开所有父节点 */
  treeDefaultExpandAll?: boolean
  /** 默认展开的节点 key 列表 */
  treeDefaultExpandedKeys?: Array<string | number>
  /** 受控展开节点 key 列表 */
  treeExpandedKeys?: Array<string | number>
  /** 展开状态变化回调 */
  onTreeExpand?: (expandedKeys: Array<string | number>) => void
  /** 是否在下拉头部展示展开/收起快捷栏 */
  showToolbar?: boolean

  /** 是否开启内置搜索过滤（支持拼音首字母） */
  searchable?: boolean
  /** searchable 语义别名 */
  showSearch?: boolean
  /** 受控搜索关键词 */
  searchValue?: string
  /** 搜索输入变更回调 */
  onSearch?: (keyword: string) => void
  /** 搜索框占位文本 */
  searchPlaceholder?: string
  /** 搜索匹配字段（标题 / 值 / 双匹配） */
  treeNodeFilterProp?: 'title' | 'value' | 'both'

  /** 是否启用大数据量固定行高虚拟滚动（可见行超过 40 行时自动生效） */
  virtual?: boolean
  /** 下拉树滚动区域最大高度（像素，默认 280） */
  listHeight?: number
  /** 单行节点高度（像素，虚拟滚动时用于窗口位置计算，默认 30） */
  itemHeight?: number

  label?: React.ReactNode
  error?: React.ReactNode
  invalid?: boolean
  helperText?: React.ReactNode
  required?: boolean
  placeholder?: string
  allowClear?: boolean
  clearable?: boolean
  disabled?: boolean
  name?: string
  size?: ControlSize | 'ghost'
  motion?: AbcMotionPreset
  wrapperClassName?: string
  dropdownClassName?: string
  matchWidth?: boolean
  portalContainer?: HTMLElement | null
  container?: HTMLElement | null
  emptyText?: string
}

const SINGLE_SIZE_H: Record<ControlSize, string> = {
  xs: 'h-[var(--abc-control-h-xs)] text-xs',
  sm: 'h-[var(--abc-control-h-sm)] text-xs',
  default: 'h-[var(--abc-control-h-sm)] text-xs',
  md: 'h-[var(--abc-control-h-md)] text-sm',
  lg: 'h-[var(--abc-control-h-lg)] text-sm',
}

const MULTI_SIZE_H: Record<ControlSize, string> = {
  xs: 'min-h-[var(--abc-control-h-xs)] text-xs',
  sm: 'min-h-[var(--abc-control-h-sm)] text-xs',
  default: 'min-h-[var(--abc-control-h-sm)] text-xs',
  md: 'min-h-[var(--abc-control-h-md)] text-sm',
  lg: 'min-h-[var(--abc-control-h-lg)] text-sm',
}

const VIRTUAL_SCROLL_THRESHOLD = 40
const VIRTUAL_OVERSCAN = 6

/** 合并并标准化选中值为数组形态（兼容受控单值、数组、null/undefined） */
function toKeyArray(val: TreeSelectValue, multi: boolean): Array<string | number> {
  if (Array.isArray(val)) return val.filter((v) => v !== undefined && v !== null)
  if (val !== undefined && val !== null && val !== '') {
    return multi ? [val] : [val]
  }
  return []
}

function renderNodeDisplayLabel(node: AbcTreeSelectNode): React.ReactNode {
  if (node.rawLabel !== undefined && node.rawLabel !== null && node.rawLabel !== '') {
    return node.rawLabel as React.ReactNode
  }
  return node.title
}

/**
 * 树形下拉选择器 (TreeSelect)
 */
const TreeSelectBase = React.forwardRef<HTMLDivElement, TreeSelectProps>(
  (
    {
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
    },
    forwardedRef
  ) => {
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

    const renderTreeRow = (
      item: (typeof flattenedRows)[number],
      flatIdx: number,
      rowStyle?: React.CSSProperties
    ) => {
      const { node, keyStr, depth, posInSet, setSize, hasChildren, isExpanded } = item
      const isLoading = loadingKeys.has(keyStr)
      const isActive = flatIdx === activeIndex
      const isChecked = isCheckable
        ? checkedKeyStrSet.has(keyStr)
        : selectedRawKeys.some((k) => String(k) === keyStr)
      const isHalf = isCheckable && halfCheckedKeyStrSet.has(keyStr)
      const rowBlocked = isRowSelectionBlocked(node)

      return (
        <div
          key={keyStr}
          ref={(el) => {
            rowRefs.current[keyStr] = el
          }}
          role="treeitem"
          aria-level={depth + 1}
          aria-posinset={posInSet}
          aria-setsize={setSize}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-selected={!isCheckable ? isChecked : undefined}
          aria-checked={
            isCheckable && node.checkable !== false ? (isHalf ? 'mixed' : isChecked) : undefined
          }
          aria-disabled={node.disabled || undefined}
          data-testid={`tree-select-node-${keyStr}`}
          data-active={isActive ? 'true' : undefined}
          style={{
            paddingLeft: `${depth * 18 + 8}px`,
            paddingRight: '8px',
            ...rowStyle,
          }}
          onMouseEnter={() => {
            if (!node.disabled) setActiveIndex(flatIdx)
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleSelectRow(node)
          }}
          className={cn(
            'flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] text-xs transition-colors',
            !useVirtualWindow && 'py-1.5',
            node.disabled
              ? 'opacity-45 cursor-not-allowed'
              : rowBlocked && selectableLeafOnly && hasChildren
                ? 'cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                : isChecked && !isCheckable
                  ? 'cursor-pointer bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]'
                  : isActive
                    ? 'cursor-pointer bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]'
                    : 'cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
          )}
        >
          {/* 展开 / 收起 / 异步加载箭头 */}
          {hasChildren ? (
            <button
              type="button"
              tabIndex={-1}
              data-testid={`tree-select-expand-${keyStr}`}
              aria-label={isExpanded ? `收起 ${node.title}` : `展开 ${node.title}`}
              onClick={(e) => {
                e.stopPropagation()
                void toggleExpandNode(node)
              }}
              className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              {isLoading ? (
                <Loader2 className="h-3 w-3 animate-spin text-[var(--abc-primary)]" aria-hidden="true" />
              ) : (
                <ChevronRight
                  className={cn(
                    'h-3.5 w-3.5 transition-transform duration-150',
                    isExpanded && 'rotate-90'
                  )}
                  aria-hidden="true"
                />
              )}
            </button>
          ) : (
            <span className="inline-block h-4 w-4 shrink-0" aria-hidden="true" />
          )}

          {/* 复选框（多选树模式） */}
          {isCheckable && node.checkable !== false && (
            <span
              className="inline-flex shrink-0 items-center"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <Checkbox
                size="xs"
                tabIndex={-1}
                aria-label={node.title}
                disabled={node.disabled}
                checked={isChecked}
                indeterminate={isHalf}
                onChange={(nextChecked) => handleToggleCheck(node, nextChecked)}
              />
            </span>
          )}

          {/* 节点展示文案 */}
          <span className="min-w-0 flex-1 truncate">{renderNodeDisplayLabel(node)}</span>

          {/* 节点附加徽标 */}
          {node.badge !== undefined && (
            <span className="shrink-0 rounded-full bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]">
              {node.badge}
            </span>
          )}

          {/* 单选 / 非复选多选选中对勾 */}
          {!isCheckable && isChecked && (
            <Check className="h-3.5 w-3.5 shrink-0 text-[var(--abc-primary)]" aria-hidden="true" />
          )}
        </div>
      )
    }

    return (
      <div
        ref={wrapperRef}
        data-slot="tree-select-wrapper"
        className={cn('w-full', wrapperClassName)}
      >
        {label && (
          <label
            htmlFor={triggerId}
            className="mb-1.5 inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)] select-none"
          >
            <span>{label}</span>
            {required && (
              <span aria-hidden="true" className="text-[var(--abc-danger)]">
                *
              </span>
            )}
          </label>
        )}

        {/* 兼容原生 FormData / 表单序列化 */}
        {name && (
          <input
            type="hidden"
            name={name}
            value={isMultiMode ? displayTagKeys.join(',') : String(selectedRawKeys[0] ?? '')}
          />
        )}

        <div
          ref={mergeTriggerRef}
          {...restTriggerProps}
          id={triggerId}
          role="combobox"
          tabIndex={disabled ? -1 : 0}
          aria-expanded={open}
          aria-haspopup="tree"
          aria-controls={isMounted ? treeId : undefined}
          aria-invalid={isInvalid || undefined}
          aria-describedby={describedByIds || undefined}
          aria-disabled={disabled || undefined}
          aria-label={ariaLabel || (typeof label === 'string' ? label : placeholder)}
          data-slot="tree-select-trigger"
          data-state={open ? 'open' : 'closed'}
          data-motion={resolvedMotion}
          onKeyDown={handleKeyDown}
          onClick={(e) => {
            e.stopPropagation()
            if (disabled) return
            if (open) setOpen(false)
            else openMenu()
          }}
          className={cn(
            'flex items-center justify-between gap-1.5 cursor-pointer select-none abc-motion-control',
            size === 'ghost'
              ? 'h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none focus:outline-none'
              : cn(
                  'w-full px-2.5 py-1',
                  baseFieldControlClass,
                  isMultiMode ? MULTI_SIZE_H[resolvedSize] : SINGLE_SIZE_H[resolvedSize],
                  open && 'border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]',
                  isInvalid && 'border-[var(--abc-danger)]',
                  disabled && 'opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]'
                ),
            className
          )}
        >
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
            {displayItems.length === 0 ? (
              <span className="truncate text-[var(--abc-fg-placeholder)]">{placeholder}</span>
            ) : isMultiMode ? (
              <>
                {visibleTags.map((item) => (
                  <span
                    key={item.keyStr}
                    data-testid="tree-select-tag"
                    className="inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]"
                  >
                    <span className="max-w-32 truncate">{item.label}</span>
                    {!disabled && !item.node?.disabled && (
                      <button
                        type="button"
                        aria-label={`移除 ${item.title}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          if (isCheckable && item.node) {
                            handleToggleCheck(item.node, false)
                          } else {
                            emitValueChange(
                              selectedRawKeys.filter((k) => String(k) !== item.keyStr)
                            )
                          }
                        }}
                        className="inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer"
                      >
                        <X className="h-2.5 w-2.5" aria-hidden="true" />
                      </button>
                    )}
                  </span>
                ))}
                {hiddenTags.length > 0 && (
                  <span
                    data-testid="tree-select-max-tag"
                    title={hiddenTags.map((t) => t.title).join('、')}
                    className="inline-flex items-center rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)]"
                  >
                    +{hiddenTags.length}
                  </span>
                )}
              </>
            ) : (
              <span className="truncate text-[var(--abc-fg)]">{displayItems[0]?.label}</span>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]">
            {isClearable && displayItems.length > 0 && !disabled && (
              <button
                type="button"
                data-testid="tree-select-clear"
                aria-label="清空"
                onClick={(e) => {
                  e.stopPropagation()
                  emitValueChange(isMultiMode ? [] : '')
                }}
                className="rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
            <ChevronDown
              className={cn(
                'h-3.5 w-3.5 transition-transform duration-150',
                open && 'rotate-180'
              )}
              aria-hidden="true"
            />
          </div>
        </div>

        {isMounted &&
          effectivePortalContainer &&
          createPortal(
            <div
              ref={popoverRef}
              data-slot="tree-select-popover"
              data-abc-floating=""
              data-motion={resolvedMotion}
              data-placement={actualSide}
              onMouseDown={(e) => e.stopPropagation()}
              style={floatingStyle}
              className={cn(
                'z-[1500] max-w-[min(520px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]',
                matchWidth ? 'min-w-full' : 'min-w-[240px]',
                isVisible ? 'abc-animate-popover-in' : 'abc-animate-popover-out',
                dropdownClassName
              )}
            >
              {(isSearchable || resolvedShowToolbar) && (
                <div className="flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5">
                  {isSearchable ? (
                    <div className="flex min-w-0 flex-1 items-center gap-1.5">
                      <Search
                        className="h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]"
                        aria-hidden="true"
                      />
                      <input
                        ref={searchInputRef}
                        type="text"
                        autoFocus
                        data-testid="tree-select-search-input"
                        value={effectiveKeyword}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => {
                          const nextKw = e.target.value
                          if (searchValue === undefined) setInternalKeyword(nextKw)
                          onSearch?.(nextKw)
                          setActiveIndex(0)
                          setScrollTop(0)
                          if (scrollHostRef.current) {
                            scrollHostRef.current.scrollTop = 0
                          }
                        }}
                        placeholder={searchPlaceholder}
                        className="w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                      />
                    </div>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--abc-fg-muted)]">
                      <FolderTree className="h-3 w-3" aria-hidden="true" />
                      <span>节点结构</span>
                    </span>
                  )}

                  {resolvedShowToolbar && normalized.treeNodes.length > 0 && (
                    <div className="flex shrink-0 items-center gap-1 text-[11px]">
                      <button
                        type="button"
                        data-testid="tree-select-expand-all"
                        onClick={(e) => {
                          e.stopPropagation()
                          commitExpandedKeys(collectAllExpandableKeys(normalized.treeNodes))
                        }}
                        className="rounded px-1.5 py-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                      >
                        展开全部
                      </button>
                      <button
                        type="button"
                        data-testid="tree-select-collapse-all"
                        onClick={(e) => {
                          e.stopPropagation()
                          commitExpandedKeys([])
                        }}
                        className="rounded px-1.5 py-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                      >
                        收起
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div
                ref={scrollHostRef}
                id={treeId}
                role="tree"
                aria-label={ariaLabel || (typeof label === 'string' ? label : '树形选项列表')}
                aria-multiselectable={isMultiMode || undefined}
                data-tree-scroll-host=""
                data-virtual={useVirtualWindow ? 'true' : 'false'}
                onScroll={(e) => {
                  if (useVirtualWindow) {
                    setScrollTop(e.currentTarget.scrollTop)
                  }
                }}
                style={{ maxHeight: `${listHeight}px` }}
                className="overflow-y-auto p-1"
              >
                {flattenedRows.length === 0 ? (
                  <div className="py-5 text-center text-xs text-[var(--abc-fg-muted)]">
                    {emptyText}
                  </div>
                ) : useVirtualWindow ? (
                  <div
                    data-testid="tree-select-virtual-spacer"
                    style={{
                      height: `${totalVirtualHeight}px`,
                      position: 'relative',
                    }}
                  >
                    {renderedRows.map((item, localIdx) => {
                      const absIdx = virtualStartIndex + localIdx
                      return renderTreeRow(item, absIdx, {
                        position: 'absolute',
                        top: `${absIdx * itemHeight}px`,
                        left: 0,
                        right: 0,
                        height: `${itemHeight}px`,
                      })
                    })}
                  </div>
                ) : (
                  renderedRows.map((item, idx) => renderTreeRow(item, idx))
                )}
              </div>
            </div>,
            effectivePortalContainer
          )}

        {error && (
          <p id={feedbackId} className="mt-1 text-xs text-[var(--abc-danger)]">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={feedbackId} className="mt-1 text-xs text-[var(--abc-fg-muted)]">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

TreeSelectBase.displayName = 'TreeSelect'

/** 挂载策略静态常量，方便业务按 TreeSelect.SHOW_PARENT 等标准枚举调用 */
export const TreeSelect = Object.assign(TreeSelectBase, {
  SHOW_ALL: 'SHOW_ALL' as const,
  SHOW_PARENT: 'SHOW_PARENT' as const,
  SHOW_CHILD: 'SHOW_CHILD' as const,
})

export interface TreeSelectFieldProps
  extends Omit<TreeSelectProps, 'className' | 'dropdownClassName'> {
  triggerClassName?: string
  contentClassName?: string
}

/**
 * 声明式快捷表单字段封装 (TreeSelectField)
 * 对齐 SelectField 参数风格，支持触发器与弹层类名分离透传
 */
export function TreeSelectField({
  triggerClassName,
  contentClassName,
  ...props
}: TreeSelectFieldProps) {
  return (
    <TreeSelect
      {...props}
      className={triggerClassName}
      dropdownClassName={contentClassName}
    />
  )
}

export default TreeSelect
