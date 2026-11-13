/**
 * ABC Design 品牌色预设、密度档位与圆角规格定义
 * 提供 JS/TS 运行时访问与 CSS 自定义属性的一一映射
 */

/** 支持的内置品牌主色标识 */
export type AbcBrandColor = 'blue' | 'indigo' | 'violet' | 'emerald' | 'amber' | 'rose'

/** 颜色模式：亮色、暗色或跟随系统 */
export type AbcThemeMode = 'light' | 'dark' | 'system'

/** 实际解析生效的明暗模式 */
export type AbcResolvedTheme = 'light' | 'dark'

/** 界面信息密度档位 */
export type AbcDensity = 'compact' | 'default' | 'comfortable'

/** 圆角视觉风格档位 */
export type AbcRadius = 'none' | 'sm' | 'md' | 'lg'

/** 页面切换过渡动效类型 */
export type AbcPageTransition = 'fade-slide' | 'fade' | 'zoom' | 'slide-left' | 'none'

/** 全局字号缩放档位 */
export type AbcFontScale = 'sm' | 'md' | 'lg'

/** 无障碍与特殊视觉色彩模式 */
export type AbcVisualMode = 'default' | 'color-weak' | 'gray'

/** 品牌色板阶梯结构 */
export interface AbcPaletteScale {
  label: string
  swatch: string
  scale: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    950: string
  }
}

/** 6 套企业级高对比度品牌色板 */
export const ABC_BRAND_PRESETS: Record<AbcBrandColor, AbcPaletteScale> = {
  blue: {
    label: '科技蓝 (Blue)',
    swatch: '#2563eb',
    scale: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
  },
  indigo: {
    label: '深邃靛 (Indigo)',
    swatch: '#4f46e5',
    scale: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
      950: '#1e1b4b',
    },
  },
  violet: {
    label: '极光紫 (Violet)',
    swatch: '#7c3aed',
    scale: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    },
  },
  emerald: {
    label: '翡翠绿 (Emerald)',
    swatch: '#059669',
    scale: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22',
    },
  },
  amber: {
    label: '琥珀金 (Amber)',
    swatch: '#d97706',
    scale: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
  },
  rose: {
    label: '绯红 (Rose)',
    swatch: '#e11d48',
    scale: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
      950: '#4c0519',
    },
  },
}

/** 信息密度规格说明 */
export const ABC_DENSITY_PRESETS: Record<
  AbcDensity,
  { label: string; controlHeightSm: string; controlHeightMd: string; cellPaddingY: string }
> = {
  compact: {
    label: '紧凑 (30px)',
    controlHeightSm: '30px',
    controlHeightMd: '34px',
    cellPaddingY: '0.5rem',
  },
  default: {
    label: '标准企业 (34px)',
    controlHeightSm: '34px',
    controlHeightMd: '38px',
    cellPaddingY: '0.75rem',
  },
  comfortable: {
    label: '宽松舒适 (38px)',
    controlHeightSm: '38px',
    controlHeightMd: '42px',
    cellPaddingY: '0.95rem',
  },
}

/** 圆角档位规格说明 */
export const ABC_RADIUS_PRESETS: Record<AbcRadius, { label: string; controlRadius: string; panelRadius: string }> = {
  none: { label: '直角硬朗 (0px)', controlRadius: '0px', panelRadius: '0px' },
  sm: { label: '微圆角 (6px)', controlRadius: '6px', panelRadius: '8px' },
  md: { label: '标准圆角 (8px)', controlRadius: '8px', panelRadius: '12px' },
  lg: { label: '柔和圆角 (12px)', controlRadius: '12px', panelRadius: '16px' },
}
