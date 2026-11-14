import type React from 'react'
import type {
  AbcBrandColor,
  AbcDensity,
  AbcFontScale,
  AbcMotionPreset,
  AbcPageTransition,
  AbcRadius,
  AbcResolvedTheme,
  AbcSize,
  AbcThemeConfig,
  AbcThemeMode,
  AbcVisualMode,
} from '@abc-design/tokens'

/** 通用字典项数据结构 */
export interface AbcDictOption {
  label: string
  value: string | number
  tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  disabled?: boolean
}

export type AbcDictItem = AbcDictOption

/** 轻量消息提示适配器协议 */
export interface AbcToastAdapter {
  success: (message: string) => void
  error: (message: string) => void
  info: (message: string) => void
  warning: (message: string) => void
}

/** 图标组件渲染签名 */
export type AbcIconComponent = React.ComponentType<{
  size?: number | string
  className?: string
  strokeWidth?: number
}>

/** 文件上传适配器：接收 File 并返回可访问 URL */
export type AbcUploadAdapter = (file: File) => Promise<string>

/** 数据字典适配器：按字典编码同步或异步返回选项列表 */
export type AbcDictAdapter = (dictCode: string) => AbcDictOption[] | Promise<AbcDictOption[]>

/** 权限校验适配器：判断当前用户是否具备指定权限码 */
export type AbcPermissionAdapter = (
  permission: string | string[],
  mode?: 'any' | 'all'
) => boolean

/** 滑块拼图验证码后端载荷数据结构 */
export interface AbcCaptchaData {
  nonceStr: string
  blockSrc: string
  blockY: number
  canvasSrc: string
}

/** 验证码拉取适配器：由宿主接入后端 /get-captcha 接口，不传时 SliderVerify 自动启用内置矢量拼图挑战 */
export type AbcCaptchaAdapter = () => Promise<AbcCaptchaData>

/** AbcProvider 上下文暴露的完整能力接口 */
export interface AbcContextValue {
  theme: AbcThemeConfig
  resolvedTheme: AbcResolvedTheme
  pageTransition: AbcPageTransition
  watermarkText?: string | string[]
  watermarkEnabled: boolean
  setThemeMode: (mode: AbcThemeMode, origin?: { clientX: number; clientY: number }) => void
  toggleTheme: (origin?: { clientX: number; clientY: number }) => void
  setBrand: (brand: AbcBrandColor) => void
  setCustomBrandColor: (hex?: string) => void
  setDensity: (density: AbcDensity) => void
  setRadius: (radius: AbcRadius) => void
  setFontScale: (scale: AbcFontScale) => void
  setVisualMode: (mode: AbcVisualMode) => void
  setComponentSize: (size?: AbcSize) => void
  setMotion: (motion: AbcMotionPreset) => void
  updateTheme: (patch: Partial<AbcThemeConfig>) => void
  setPageTransition: (transition: AbcPageTransition) => void
  setWatermarkEnabled: (enabled: boolean) => void
  resetTheme: () => void
  toast: AbcToastAdapter
  uploadAdapter?: AbcUploadAdapter
  dictAdapter?: AbcDictAdapter
  permissionAdapter?: AbcPermissionAdapter
  captchaAdapter?: AbcCaptchaAdapter
  iconRegistry: Record<string, AbcIconComponent>
}
