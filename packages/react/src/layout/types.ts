import type React from 'react'
import type { DropdownMenuItem } from '../components/display/Overlays'

/** 5 大标准企业级布局拓扑模式 */
export type AbcLayoutMode = 'sidebar' | 'top' | 'mix' | 'dual-column' | 'auth'

/** 侧边栏独立视觉色调（允许亮色工作区搭配深色专业侧栏，或全浅色通透侧栏） */
export type AbcSidebarTone = 'dark' | 'light'

/** 主内容区宽度策略 */
export type AbcContentWidth = 'fluid' | 'fixed'

/** 多页签导航栏视觉风格 */
export type AbcTabStyle = 'card' | 'pill' | 'underline'

/** 路由无关的树形导航菜单节点协议 */
export interface AbcMenuItem {
  key: string
  label: string
  path?: string
  icon?: string | React.ReactNode
  badge?: string | number
  disabled?: boolean
  groupTitle?: string
  children?: AbcMenuItem[]
}

/** 多页签项数据结构 */
export interface AbcTabItem {
  path: string
  title: string
  icon?: string | React.ReactNode
  closable?: boolean
  pinned?: boolean
}

/** 品牌信息协议（支持多租户动态 Logo/SVG/项目名与快捷编辑回调） */
export interface AbcBrandInfo {
  name: string
  subtitle?: string
  /** 支持图片 URL、内联 <svg> 字符串或自定义 React 节点 */
  logo?: string | React.ReactNode
  onClick?: () => void
  onEditBrand?: () => void
}

/** 顶栏登录用户信息协议 */
export interface AbcUserInfo {
  name: string
  role?: string
  avatar?: string
  menuItems?: DropdownMenuItem[]
}

/** 布局壳层运行时可调配置项 */
export interface AbcLayoutSettings {
  mode: AbcLayoutMode
  sidebarTone: AbcSidebarTone
  sidebarCollapsed: boolean
  sidebarAccordion: boolean
  showTabs: boolean
  tabStyle?: AbcTabStyle
  keepAlive: boolean
  contentWidth: AbcContentWidth
  /** 侧边栏展开像素宽度（默认 232，可调范围 196-288） */
  sidebarWidth?: number
  /** 顶栏像素高度（默认 54，可调范围 46-66） */
  headerHeight?: number
  /** 是否启用顶栏毛玻璃半透明模糊质感 */
  headerBlur?: boolean
  /** 是否在侧栏/双栏模式下显示顶栏面包屑路径 */
  showBreadcrumb?: boolean
  /** 是否在主内容区底部展示应用页脚 */
  showFooter?: boolean
}

export const DEFAULT_ABC_LAYOUT_SETTINGS: AbcLayoutSettings = {
  mode: 'sidebar',
  sidebarTone: 'dark',
  sidebarCollapsed: false,
  sidebarAccordion: true,
  showTabs: true,
  tabStyle: 'card',
  keepAlive: true,
  contentWidth: 'fluid',
  sidebarWidth: 232,
  headerHeight: 54,
  headerBlur: true,
  showBreadcrumb: true,
  showFooter: false,
}
