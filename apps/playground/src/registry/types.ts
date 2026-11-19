export type AbcPackageName =
  | '@abc-design/react'
  | '@abc-design/charts'
  | '@abc-design/markdown'
  | '@abc-design/flow'
  | '@abc-design/core'
  | '@abc-design/tokens'

export interface PlaygroundComponentEntry {
  /** 精确导出符号名（如 'JsonTreeViewer'、'ProRowActionsOverflow'） */
  symbol: string
  /** 中文组件名称 */
  zhName: string
  /** 一句话场景定位摘要（展示在 ⌘K 搜索副标题与全景目录） */
  summary: string
  /** 所属 npm 包 */
  pkg: AbcPackageName
  /** 页面内锚点卡片对应的主符号（对应 id="comp-${anchorSymbol}"） */
  anchorSymbol: string
  /** 同卡片下的复合子组件或兼容别名（同样纳入导出覆盖率门禁与 ⌘K 组件检索） */
  subSymbols?: string[]
  /** 附加检索关键词（英文同义词、拼音、高频场景词） */
  keywords?: string
  /** 是否为近期新增或重点增强组件 */
  isNew?: boolean
}

export interface PlaygroundRouteEntry {
  key: string
  path: string
  label: string
  title: string
  icon: string
  badge?: string | number
  description: string
  components: PlaygroundComponentEntry[]
}

export interface PlaygroundCategoryEntry {
  key: string
  label: string
  enLabel: string
  icon: string
  description: string
  routes: PlaygroundRouteEntry[]
}

export interface ResolvedComponentSearchHit {
  symbol: string
  isSubSymbol: boolean
  parentSymbol: string
  zhName: string
  summary: string
  pkg: AbcPackageName
  anchorId: string
  routePath: string
  routeLabel: string
  categoryKey: string
  categoryLabel: string
  icon: string
  keywords: string
  isNew?: boolean
}
