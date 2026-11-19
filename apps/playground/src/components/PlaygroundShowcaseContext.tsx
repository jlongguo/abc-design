import { createContext, useContext } from 'react'

export type ShowcaseViewMode = 'segmented' | 'focus'

export interface RegisteredSectionMeta {
  sectionId: string
  title: string
  shortLabel: string
  pkg: string
  description: string
  components: string[]
  hasControls: boolean
  apiCount: number
}

export interface PlaygroundShowcaseContextValue {
  sections: RegisteredSectionMeta[]
  viewMode: ShowcaseViewMode
  focusedSectionId: string | null
  highlightedSectionId: string | null
  /** 当前在右侧动态检视面板中展示说明与全部属性的激活组件 ID */
  activeInspectorSectionId: string | null
  /** 右侧动态检视面板承接 Props 操作项的 Portal 宿主节点 */
  inspectorControlsHost: HTMLElement | null
  /** 当前视口是否启用宽屏右侧动态检视面板（>= 1280px） */
  isWideInspector: boolean
  registerSection: (meta: RegisteredSectionMeta) => void
  unregisterSection: (sectionId: string) => void
  focusSingleSection: (sectionId: string | null) => void
  /** 手动选中某张组件卡片在右侧检视面板展示（用户下次滚动时自动恢复跟随视口首卡） */
  selectInspectorSection: (sectionId: string) => void
}

export const PlaygroundShowcaseContext = createContext<PlaygroundShowcaseContextValue | null>(null)

export function usePlaygroundShowcase(): PlaygroundShowcaseContextValue | null {
  return useContext(PlaygroundShowcaseContext)
}
