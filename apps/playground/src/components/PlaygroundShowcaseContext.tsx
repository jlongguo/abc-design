import { createContext, useContext } from 'react'

export type ShowcaseViewMode = 'segmented' | 'focus'

export interface RegisteredSectionMeta {
  sectionId: string
  title: string
  shortLabel: string
  pkg: string
  components: string[]
}

export interface PlaygroundShowcaseContextValue {
  sections: RegisteredSectionMeta[]
  viewMode: ShowcaseViewMode
  focusedSectionId: string | null
  highlightedSectionId: string | null
  registerSection: (meta: RegisteredSectionMeta) => void
  unregisterSection: (sectionId: string) => void
  focusSingleSection: (sectionId: string | null) => void
}

export const PlaygroundShowcaseContext = createContext<PlaygroundShowcaseContextValue | null>(null)

export function usePlaygroundShowcase(): PlaygroundShowcaseContextValue | null {
  return useContext(PlaygroundShowcaseContext)
}
