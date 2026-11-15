import { useEffect, useState } from 'react'

function getPrefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * 浮层挂载与退场动画协调 Hook
 * 1. 进入打开态时同步返回 isMounted=true 与 isVisible=true，直接启用入场关键帧，避免首帧误挂退场类造成闪烁；
 * 2. open 变为 false 时保留退场 DOM 直到 durationMs 结束（durationMs <= 0 或禁用动效时同步卸载）。
 */
export function usePresence(open: boolean, durationMs = 200): {
  isMounted: boolean
  isVisible: boolean
} {
  const [mounted, setMounted] = useState(open)
  const prefersReduced = getPrefersReducedMotion()

  // 在 open 刚变为 true 的同一次渲染内同步置为 mounted，确保不延迟产生退场状态帧
  if (open && !mounted) {
    setMounted(true)
  }

  useEffect(() => {
    if (open) {
      setMounted(true)
      return
    }

    const isTest = typeof process !== 'undefined' && process.env.NODE_ENV === 'test'
    if (isTest || prefersReduced || durationMs <= 0) {
      setMounted(false)
      return
    }

    const timer = window.setTimeout(() => {
      setMounted(false)
    }, durationMs)
    return () => window.clearTimeout(timer)
  }, [open, durationMs, prefersReduced])

  const isMounted = open ? true : prefersReduced || durationMs <= 0 ? false : mounted
  return { isMounted, isVisible: open }
}
