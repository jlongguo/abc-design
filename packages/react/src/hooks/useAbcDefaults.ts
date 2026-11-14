import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { useAbcConfig } from '../provider/AbcProvider'

/**
 * 解析组件最终生效的尺寸规格（xs | sm | md | lg）
 * 优先级：组件显式 size prop > AbcProvider 全局 componentSize 覆盖 > 组件自身语义默认 fallback
 */
export function useAbcSize(propSize?: AbcSize, fallback: AbcSize = 'sm'): AbcSize {
  const { theme } = useAbcConfig()
  return propSize ?? theme.componentSize ?? fallback
}

/**
 * 解析组件最终生效的微交互动效规格（none | subtle | smooth | spring）
 * 优先级：组件显式 motion prop > AbcProvider 全局 motion > 'smooth'
 */
export function useAbcMotion(propMotion?: AbcMotionPreset): AbcMotionPreset {
  const { theme } = useAbcConfig()
  return propMotion ?? theme.motion ?? 'smooth'
}
