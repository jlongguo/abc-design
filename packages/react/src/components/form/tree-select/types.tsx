import {
type AbcCheckedStrategy,
type AbcTreeFieldNames,
type AbcTreeSelectNode,
type AbcTreeSimpleModeConfig
} from '@abc-design/core'
import type { AbcMotionPreset } from '@abc-design/tokens'
import React from 'react'
import { type ControlSize } from '../Input'


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

export const SINGLE_SIZE_H: Record<ControlSize, string> = {
  xs: 'h-[var(--abc-control-h-xs)] text-xs',
  sm: 'h-[var(--abc-control-h-sm)] text-xs',
  default: 'h-[var(--abc-control-h-sm)] text-xs',
  md: 'h-[var(--abc-control-h-md)] text-sm',
  lg: 'h-[var(--abc-control-h-lg)] text-sm',
}

export const MULTI_SIZE_H: Record<ControlSize, string> = {
  xs: 'min-h-[var(--abc-control-h-xs)] text-xs',
  sm: 'min-h-[var(--abc-control-h-sm)] text-xs',
  default: 'min-h-[var(--abc-control-h-sm)] text-xs',
  md: 'min-h-[var(--abc-control-h-md)] text-sm',
  lg: 'min-h-[var(--abc-control-h-lg)] text-sm',
}

export const VIRTUAL_SCROLL_THRESHOLD = 40
export const VIRTUAL_OVERSCAN = 6

/** 合并并标准化选中值为数组形态（兼容受控单值、数组、null/undefined） */
export function toKeyArray(val: TreeSelectValue, multi: boolean): Array<string | number> {
  if (Array.isArray(val)) return val.filter((v) => v !== undefined && v !== null)
  if (val !== undefined && val !== null && val !== '') {
    return multi ? [val] : [val]
  }
  return []
}

export function renderNodeDisplayLabel(node: AbcTreeSelectNode): React.ReactNode {
  if (node.rawLabel !== undefined && node.rawLabel !== null && node.rawLabel !== '') {
    return node.rawLabel as React.ReactNode
  }
  return node.title
}

/**
 * 树形下拉选择器 (TreeSelect)
 */
