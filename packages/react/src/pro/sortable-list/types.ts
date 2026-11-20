import type * as React from 'react'

export type SortableRowKey<T> = (keyof T & string) | ((item: T) => string | number)

export interface SortableMoveMeta {
  fromIndex: number
  toIndex: number
  key: string | number
  trigger: 'pointer' | 'keyboard' | 'button'
}

export interface SortableListLabels {
  /** 拖拽手柄无障碍标签 */
  dragHandleLabel?: (itemLabel: string, position: number, total: number) => string
  /** 键盘聚焦未抓取时的提示文案 */
  idleFocusHint?: string
  /** 键盘抓取态提示文案 */
  grabbedHint?: string
  /** 屏幕阅读器抓取播报 */
  grabbedAnnouncement?: (itemLabel: string, position: number, total: number) => string
  /** 屏幕阅读器移动后播报 */
  movedAnnouncement?: (itemLabel: string, position: number, total: number) => string
  /** 屏幕阅读器放下播报 */
  droppedAnnouncement?: (itemLabel: string, position: number, total: number) => string
  /** 屏幕阅读器取消重排播报 */
  cancelledAnnouncement?: (itemLabel: string) => string
  /** 显式上移按钮标签 */
  moveUpLabel?: (itemLabel: string) => string
  /** 显式下移按钮标签 */
  moveDownLabel?: (itemLabel: string) => string
}

export interface SortableItemRenderMeta {
  index: number
  total: number
  selected: boolean
  dragging: boolean
  grabbed: boolean
}

export interface SortableListProps<T>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect' | 'children'> {
  /** 列表数据源 */
  items: ReadonlyArray<T>
  /** 行唯一键字段名或提取器（默认 'id'） */
  rowKey?: SortableRowKey<T>
  /** 重排完成回调 */
  onReorder: (nextItems: T[], meta: SortableMoveMeta) => void
  /** 获取条目的纯文本名称（用于无障碍手柄命名与状态播报） */
  getItemLabel?: (item: T, index: number) => string
  /** 当前激活/选中的条目键（用于配合右侧详情面板高亮） */
  selectedKey?: string | number | null
  /** 点击条目主内容区触发选中回调 */
  onSelect?: (item: T, index: number) => void
  /** 渲染条目紧凑摘要内容 */
  renderItem: (item: T, meta: SortableItemRenderMeta) => React.ReactNode
  /** 渲染条目右侧独立快捷动作槽（点击不会触发行选中） */
  renderActions?: (item: T, meta: SortableItemRenderMeta) => React.ReactNode
  /** 是否在右侧同时显示显式上移/下移微按钮（默认 false） */
  showMoveButtons?: boolean
  /** 是否显示左侧序号徽标（默认 true） */
  showIndexBadge?: boolean
  /** 禁用拖拽与排序操作 */
  disabled?: boolean
  /** 空列表占位节点 */
  emptyNode?: React.ReactNode
  /** 多语言与无障碍文案覆写 */
  labels?: SortableListLabels
  /** 单条卡片附加类名 */
  itemClassName?: string
  /** 拖拽手柄附加类名 */
  handleClassName?: string
  /** 条目正文容器附加类名 */
  bodyClassName?: string
}

export interface SortableSplitEditorLabels extends SortableListLabels {
  /** 顺序变更待保存徽标文案 */
  unsavedOrderBadge?: string
  /** 保存排序按钮文案 */
  saveOrderButton?: string
  /** 重置排序按钮文案 */
  resetOrderButton?: string
  /** 新建按钮文案 */
  addButton?: string
  /** 新建态右侧面板默认标题 */
  createPanelTitle?: string
  /** 编辑态右侧面板默认标题 */
  editPanelTitle?: (itemLabel: string) => string
  /** 右侧面板关闭按钮无障碍标签 */
  closePanelLabel?: string
  /** 上一条按钮标签 */
  prevItemLabel?: string
  /** 下一条按钮标签 */
  nextItemLabel?: string
  /** 沉浸展开按钮标签 */
  expandPanelLabel?: string
  /** 还原分栏按钮标签 */
  restorePanelLabel?: string
}

export interface SortableSplitEditorRenderContext<T> {
  mode: 'edit' | 'create'
  item: T | null
  index: number
  total: number
  close: () => void
}

export interface SortableSplitEditorProps<T>
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'onSelect' | 'children'> {
  /** 已持久化的基准列表数据 */
  items: ReadonlyArray<T>
  /** 行唯一键（默认 'id'） */
  rowKey?: SortableRowKey<T>
  /** 区块标题 */
  title?: React.ReactNode
  /** 区块说明副标题 */
  description?: React.ReactNode
  /** 顶栏右侧自定义扩展节点 */
  headerExtra?: React.ReactNode
  /** 获取条目的纯文本名称 */
  getItemLabel?: (item: T, index: number) => string
  /** 渲染左侧单行紧凑摘要内容 */
  renderItem: (item: T, meta: SortableItemRenderMeta) => React.ReactNode
  /** 渲染左侧单行右侧独立动作区（如启停状态胶囊） */
  renderItemActions?: (item: T, meta: SortableItemRenderMeta) => React.ReactNode
  /** 渲染右侧 SplitDetailPanel 内的详情/表单内容 */
  renderEditor: (ctx: SortableSplitEditorRenderContext<T>) => React.ReactNode
  /** 渲染右侧 SplitDetailPanel 底部固定操作栏 */
  renderPanelFooter?: (ctx: SortableSplitEditorRenderContext<T>) => React.ReactNode
  /** 自定义右侧面板标题 */
  renderPanelTitle?: (ctx: SortableSplitEditorRenderContext<T>) => React.ReactNode
  /** 自定义右侧面板副标题 */
  renderPanelSubtitle?: (ctx: SortableSplitEditorRenderContext<T>) => React.ReactNode
  /** 自定义右侧面板徽标 */
  renderPanelBadge?: (ctx: SortableSplitEditorRenderContext<T>) => React.ReactNode
  /** 点击顶栏“保存排序”提交暂存顺序回调 */
  onSaveOrder?: (orderedItems: T[]) => void | Promise<void>
  /** 暂存顺序变化通知回调 */
  onStagedOrderChange?: (orderedItems: T[], orderDirty: boolean) => void
  /** 受控当前选中条目键 */
  selectedKey?: string | number | null
  /** 初始选中条目键 */
  defaultSelectedKey?: string | number | null
  /** 选中条目变更回调 */
  onSelectedKeyChange?: (key: string | number | null) => void
  /** 是否允许顶栏显示“新建”按钮并切入右侧新建模式（默认 false） */
  allowCreate?: boolean
  /** 受控新建模式开关 */
  creating?: boolean
  /** 新建模式变更回调 */
  onCreatingChange?: (creating: boolean) => void
  /** 是否显示左侧显式上下移微按钮（默认 false） */
  showMoveButtons?: boolean
  /** 是否显示左侧序号徽标（默认 true） */
  showIndexBadge?: boolean
  /** 禁用排序 */
  disabled?: boolean
  /** 列表加载态 */
  loading?: boolean
  /** 顶部错误提示节点 */
  errorNode?: React.ReactNode
  /** 空列表占位节点 */
  emptyNode?: React.ReactNode
  /** 右侧内联挤压详情面板初始宽度（默认 460） */
  panelWidth?: number | string
  /** 持久化右侧面板宽度的存储键 */
  storageKey?: string
  /** 多语言与无障碍文案覆写 */
  labels?: SortableSplitEditorLabels
}
