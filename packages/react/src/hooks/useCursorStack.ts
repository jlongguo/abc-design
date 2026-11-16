import { useCallback, useState } from 'react'

export interface UseCursorStackReturn {
  /** 当前激活的游标值（首页通常为 null） */
  currentCursor: string | null
  /** 是否存在可回退的上一页游标 */
  hasPrev: boolean
  /** 翻入下一页时压入新的游标 */
  pushCursor: (nextCursor: string) => void
  /** 回退到上一页游标 */
  popCursor: () => void
  /** 查询条件/筛选重置时清空游标历史栈回到首页 */
  resetCursor: () => void
}

/**
 * 游标分页历史栈 hook
 * 适配基于 next_cursor / has_more 的前向游标接口，零额外依赖实现“上一页 / 下一页 / 重置”。
 */
export function useCursorStack(initialCursor: string | null = null): UseCursorStackReturn {
  const [stack, setStack] = useState<(string | null)[]>([initialCursor])
  const currentCursor = stack[stack.length - 1] ?? null
  const hasPrev = stack.length > 1

  const pushCursor = useCallback((nextCursor: string) => {
    setStack((prev) => [...prev, nextCursor])
  }, [])

  const popCursor = useCallback(() => {
    setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
  }, [])

  const resetCursor = useCallback(() => {
    setStack([null])
  }, [])

  return {
    currentCursor,
    hasPrev,
    pushCursor,
    popCursor,
    resetCursor,
  }
}
