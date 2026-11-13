import { useCallback, useState } from 'react'

/**
 * 表单草稿持久化存储 Hook
 * 用于新建弹窗/长表单意外关闭时保留用户输入，并在正式提交后一键清理
 */
export function useDraftStorage<T extends Record<string, unknown>>(storageKey?: string) {
  const fullKey = storageKey ? `abc_draft_${storageKey}` : ''

  const readDraft = useCallback((): T | null => {
    if (!fullKey || typeof window === 'undefined') return null
    try {
      const raw = window.localStorage.getItem(fullKey)
      if (!raw) return null
      return JSON.parse(raw) as T
    } catch {
      return null
    }
  }, [fullKey])

  const [hasDraft, setHasDraft] = useState<boolean>(() => Boolean(readDraft()))

  const saveDraft = useCallback(
    (values: T) => {
      if (!fullKey || typeof window === 'undefined') return
      try {
        window.localStorage.setItem(fullKey, JSON.stringify(values))
        setHasDraft(true)
      } catch {
        // 本地配额已满时安全降级，不阻断表单正常输入
      }
    },
    [fullKey]
  )

  const clearDraft = useCallback(() => {
    if (!fullKey || typeof window === 'undefined') return
    try {
      window.localStorage.removeItem(fullKey)
      setHasDraft(false)
    } catch {
      // 忽略无痕模式异常
    }
  }, [fullKey])

  return {
    hasDraft,
    readDraft,
    saveDraft,
    clearDraft,
  }
}
