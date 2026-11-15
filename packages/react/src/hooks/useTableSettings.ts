import { useCallback, useEffect, useState } from 'react'

export type AbcTableDensity = 'compact' | 'default' | 'comfortable'

export interface AbcTablePersistedSettings {
  hiddenKeys: string[]
  columnOrder: string[]
  columnWidths: Record<string, number>
  /** 用户自定义列左右固定覆盖（null 表示显式取消列默认固定，未设置则沿用列定义） */
  columnFixed: Record<string, 'left' | 'right' | null>
  /** 用户自定义顶部检索字段显隐（false 表示从筛选栏隐藏） */
  searchVisible: Record<string, boolean>
  density: AbcTableDensity
}

const DEFAULT_SETTINGS: AbcTablePersistedSettings = {
  hiddenKeys: [],
  columnOrder: [],
  columnWidths: {},
  columnFixed: {},
  searchVisible: {},
  density: 'default',
}

/**
 * 数据表格个性化配置（列显隐、列宽、列序、左右固定冻结、筛选项显隐、行密度）本地持久化 Hook
 */
export function useTableSettings(
  storageKey?: string,
  initialDensity: AbcTableDensity = 'default',
  defaultHiddenKeys: string[] = []
) {
  const fullKey = storageKey ? `abc_table_${storageKey}` : ''

  const [settings, setSettings] = useState<AbcTablePersistedSettings>(() => {
    const fallback: AbcTablePersistedSettings = {
      ...DEFAULT_SETTINGS,
      hiddenKeys: defaultHiddenKeys,
      density: initialDensity,
    }
    if (!fullKey || typeof window === 'undefined') return fallback
    try {
      const raw = window.localStorage.getItem(fullKey)
      if (!raw) return fallback
      const parsed = JSON.parse(raw) as Partial<AbcTablePersistedSettings>
      return {
        hiddenKeys: Array.isArray(parsed.hiddenKeys) ? parsed.hiddenKeys : defaultHiddenKeys,
        columnOrder: Array.isArray(parsed.columnOrder) ? parsed.columnOrder : [],
        columnWidths:
          parsed.columnWidths && typeof parsed.columnWidths === 'object'
            ? parsed.columnWidths
            : {},
        columnFixed:
          parsed.columnFixed && typeof parsed.columnFixed === 'object'
            ? parsed.columnFixed
            : {},
        searchVisible:
          parsed.searchVisible && typeof parsed.searchVisible === 'object'
            ? parsed.searchVisible
            : {},
        density: parsed.density ?? initialDensity,
      }
    } catch {
      return fallback
    }
  })

  useEffect(() => {
    if (!fullKey || typeof window === 'undefined') return
    try {
      window.localStorage.setItem(fullKey, JSON.stringify(settings))
    } catch {
      // 忽略存储配额限制或隐私无痕模式拒绝写入
    }
  }, [fullKey, settings])

  const toggleColumnVisible = useCallback((key: string) => {
    setSettings((prev) => ({
      ...prev,
      hiddenKeys: prev.hiddenKeys.includes(key)
        ? prev.hiddenKeys.filter((k) => k !== key)
        : [...prev.hiddenKeys, key],
    }))
  }, [])

  const setAllColumnsVisible = useCallback((allColumnKeys: string[], visible: boolean) => {
    setSettings((prev) => ({
      ...prev,
      hiddenKeys: visible ? [] : Array.from(new Set(allColumnKeys)),
    }))
  }, [])

  const setColumnFixed = useCallback(
    (key: string, fixed: 'left' | 'right' | null | undefined) => {
      setSettings((prev) => {
        const nextFixed = { ...prev.columnFixed }
        if (fixed === undefined) {
          delete nextFixed[key]
        } else {
          nextFixed[key] = fixed
        }
        return {
          ...prev,
          columnFixed: nextFixed,
        }
      })
    },
    []
  )

  const setColumnWidth = useCallback((key: string, width: number) => {
    setSettings((prev) => ({
      ...prev,
      columnWidths: { ...prev.columnWidths, [key]: Math.max(64, Math.round(width)) },
    }))
  }, [])

  const setColumnOrder = useCallback((order: string[]) => {
    setSettings((prev) => ({ ...prev, columnOrder: order }))
  }, [])

  const setSearchFieldVisible = useCallback((key: string, visible: boolean) => {
    setSettings((prev) => ({
      ...prev,
      searchVisible: { ...prev.searchVisible, [key]: visible },
    }))
  }, [])

  const setDensity = useCallback((density: AbcTableDensity) => {
    setSettings((prev) => ({ ...prev, density }))
  }, [])

  const resetSettings = useCallback(() => {
    setSettings({ ...DEFAULT_SETTINGS, hiddenKeys: defaultHiddenKeys, density: initialDensity })
  }, [initialDensity, defaultHiddenKeys])

  return {
    settings,
    toggleColumnVisible,
    setAllColumnsVisible,
    setColumnFixed,
    setColumnWidth,
    setColumnOrder,
    setSearchFieldVisible,
    setDensity,
    resetSettings,
  }
}
