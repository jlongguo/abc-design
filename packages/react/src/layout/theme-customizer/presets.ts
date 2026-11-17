import type { AbcPageTransition, AbcThemeConfig } from '@abc-design/tokens'
import type { AbcLayoutMode, AbcLayoutSettings } from '../types'

export interface ThemeCustomizerProps {
  open: boolean
  onClose: () => void
  layoutSettings: AbcLayoutSettings
  onLayoutChange: (patch: Partial<AbcLayoutSettings>) => void
  onResetAll?: () => void
}

export const LAYOUT_MODE_CARDS: Array<{
  mode: AbcLayoutMode
  title: string
  desc: string
}> = [
  { mode: 'sidebar', title: '经典侧边栏', desc: '左侧树形导航 + 右侧工作区' },
  { mode: 'top', title: '顶部水平导航', desc: '全宽视野，含顶层子菜单' },
  { mode: 'mix', title: '混合分栏导航', desc: '顶栏一级域 + 侧栏子菜单' },
  { mode: 'dual-column', title: '双栏紧凑侧栏', desc: '窄主轨 + 二级菜单面板' },
  { mode: 'auth', title: '认证分屏页', desc: '登录 / SSO 品牌分屏模式' },
]

export interface QuickScenePreset {
  id: string
  name: string
  badge: string
  swatch: string
  theme: Partial<AbcThemeConfig>
  layout: Partial<AbcLayoutSettings>
  transition: AbcPageTransition
}

export const QUICK_SCENE_PRESETS: QuickScenePreset[] = [
  {
    id: 'enterprise',
    name: '标准企业工作台',
    badge: '默认推荐',
    swatch: '#2563eb',
    theme: {
      mode: 'light',
      brand: 'blue',
      customBrandColor: undefined,
      density: 'default',
      radius: 'md',
      fontScale: 'md',
      visualMode: 'default',
    },
    layout: {
      mode: 'sidebar',
      sidebarTone: 'dark',
      tabStyle: 'card',
      contentWidth: 'fluid',
      sidebarWidth: undefined,
      headerHeight: undefined,
      headerBlur: true,
    },
    transition: 'fade-slide',
  },
  {
    id: 'devops-dark',
    name: '高密运维监控台',
    badge: '高信息密度',
    swatch: '#4f46e5',
    theme: {
      mode: 'dark',
      brand: 'indigo',
      customBrandColor: undefined,
      density: 'compact',
      radius: 'sm',
      fontScale: 'sm',
      visualMode: 'default',
    },
    layout: {
      mode: 'dual-column',
      sidebarTone: 'dark',
      tabStyle: 'underline',
      contentWidth: 'fluid',
      headerHeight: 48,
      headerBlur: true,
    },
    transition: 'fade',
  },
  {
    id: 'analytics-top',
    name: '大屏数据驾驶舱',
    badge: '宽屏沉浸',
    swatch: '#059669',
    theme: {
      mode: 'light',
      brand: 'emerald',
      customBrandColor: undefined,
      density: 'comfortable',
      radius: 'lg',
      fontScale: 'md',
      visualMode: 'default',
    },
    layout: {
      mode: 'top',
      tabStyle: 'pill',
      contentWidth: 'fluid',
      headerHeight: 58,
      headerBlur: true,
    },
    transition: 'zoom',
  },
  {
    id: 'airy-violet',
    name: '极简通透白昼',
    badge: '柔和呼吸感',
    swatch: '#7c3aed',
    theme: {
      mode: 'light',
      brand: 'violet',
      customBrandColor: undefined,
      density: 'default',
      radius: 'lg',
      fontScale: 'md',
      visualMode: 'default',
    },
    layout: {
      mode: 'sidebar',
      sidebarTone: 'light',
      tabStyle: 'pill',
      contentWidth: 'fixed',
      sidebarWidth: 244,
      headerHeight: 56,
      headerBlur: true,
    },
    transition: 'slide-left',
  },
]

export const TRANSITION_ANIM_MAP: Record<AbcPageTransition, string> = {
  'fade-slide': 'abc-page-fade-slide',
  fade: 'abc-page-fade',
  zoom: 'abc-page-zoom',
  'slide-left': 'abc-page-slide-left',
  none: '',
}
