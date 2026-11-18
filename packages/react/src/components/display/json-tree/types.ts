import type React from 'react'
import type { AbcJsonPathFormat, AbcJsonValueType } from '@abc-design/core'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'

/** JsonTreeViewer 文案国际化覆盖接口 */
export interface JsonTreeViewerLabels {
  searchPlaceholder?: string
  clearSearchLabel?: string
  expandAllLabel?: string
  collapseAllLabel?: string
  copyJsonLabel?: string
  copyValueLabel?: string
  copyPathLabel?: string
  copiedLabel?: string
  parseErrorTitle?: string
  emptyText?: string
  noMatchText?: string
  expandTextLabel?: string
  collapseTextLabel?: string
  expandNodeLabel?: string
  collapseNodeLabel?: string
  maxDepthNotice?: string
  searchTruncatedLabel?: string
  showMoreItemsLabel?: (remaining: number) => string
  matchCountLabel?: (count: number) => string
}

/** JsonTreeViewer 复制事件回调载荷 */
export interface JsonTreeCopyInfo {
  kind: 'root' | 'value' | 'path'
  text: string
  path: string
}

export interface JsonTreeViewerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onCopy'> {
  /** 数据源：支持任意 JSON 值（对象/数组/原始值）或 JSON 原始字符串 */
  data: unknown
  /** 当 data 为字符串时是否自动 JSON.parse（默认 true；解析失败自动渲染错误提示与原文兜底） */
  parseString?: boolean
  /** 可选根节点展示键名（如 'root'），默认不显示根键名 */
  rootLabel?: string
  /** 默认展开层级（默认 2；0 表示全部折叠，Infinity 表示全展开） */
  defaultExpandDepth?: number
  /** 受控已展开路径集合（如 ['$', '$.items']） */
  expandedPaths?: string[]
  /** 非受控初始展开路径集合（传值时优先于 defaultExpandDepth） */
  defaultExpandedPaths?: string[]
  /** 展开路径变更回调 */
  onExpandedPathsChange?: (paths: string[]) => void
  /** 是否显示顶部工具栏（默认 true） */
  showToolbar?: boolean
  /** 工具栏扩展插槽 */
  toolbarExtra?: React.ReactNode
  /** 是否开启搜索框（默认 true，受 showToolbar 控制显示） */
  searchable?: boolean
  /** 受控搜索关键词 */
  searchQuery?: string
  /** 非受控初始搜索关键词 */
  defaultSearchQuery?: string
  /** 搜索关键词变更回调 */
  onSearchQueryChange?: (query: string) => void
  /** 搜索时是否仅显示匹配节点及其祖先路径（默认 true；false 时保留整树仅高亮并展开匹配分支） */
  filterOnSearch?: boolean
  /** 复制路径格式：'jsonpath'（$.a.b[0]）或 'dot'（a.b[0]），默认 'jsonpath' */
  pathFormat?: AbcJsonPathFormat
  /** 是否开启复制操作（工具栏复制整段 JSON + 行内复制值与复制路径，默认 true） */
  copyable?: boolean
  /** 复制成功回调 */
  onCopy?: (info: JsonTreeCopyInfo) => void
  /** 单容器默认最大渲染直接子节点数（默认 100，支持点击分批追加） */
  maxChildren?: number
  /** 长字符串默认折叠字符阈值（默认 240，超出显示展开/收起切换） */
  maxStringLength?: number
  /** 最大递归深度保护（默认 20） */
  maxDepth?: number
  /** 树内容滚动区域最大高度（数字按 px 处理，或传 CSS 长度如 '60dvh'） */
  maxHeight?: number | string
  /** 是否展示容器摘要计数（如 {4 keys} / Array(12)，默认 true） */
  showItemCount?: boolean
  /** 空数据提示文案（data === undefined 或空串时显示） */
  emptyText?: React.ReactNode
  /** 国际化文案覆盖 */
  labels?: JsonTreeViewerLabels
  /** 是否渲染外边框与卡片底色（默认 true） */
  bordered?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
  ariaLabel?: string
}

/** 内部展平渲染行模型 */
export type FlattenedJsonRow =
  | {
      kind: 'node'
      path: string
      parentPath: string | null
      segments: Array<string | number>
      keyName: string | number | null
      value: unknown
      valueType: AbcJsonValueType
      depth: number
      level: number
      isContainer: boolean
      isExpandable: boolean
      isExpanded: boolean
      isCircular: boolean
      isDepthLimited: boolean
      childCount: number
    }
  | {
      kind: 'show-more'
      rowKey: string
      parentPath: string
      depth: number
      remaining: number
    }
  | {
      kind: 'depth-limit'
      rowKey: string
      parentPath: string
      depth: number
    }

export const DEFAULT_JSON_TREE_LABELS: Required<JsonTreeViewerLabels> = {
  searchPlaceholder: '搜索键名或字段值…',
  clearSearchLabel: '清空搜索',
  expandAllLabel: '全部展开',
  collapseAllLabel: '全部收起',
  copyJsonLabel: '复制 JSON',
  copyValueLabel: '复制值',
  copyPathLabel: '复制路径',
  copiedLabel: '已复制',
  parseErrorTitle: 'JSON 解析失败，已回退原文展示',
  emptyText: '暂无 JSON 数据',
  noMatchText: '未检索到匹配节点',
  expandTextLabel: '展开全文',
  collapseTextLabel: '收起',
  expandNodeLabel: '展开节点',
  collapseNodeLabel: '折叠节点',
  maxDepthNotice: '已达最大嵌套深度',
  searchTruncatedLabel: '部分节点因数量限制未检索',
  showMoreItemsLabel: (remaining: number) => `显示更多 (+${remaining} 项)`,
  matchCountLabel: (count: number) => `${count} 处匹配`,
}
