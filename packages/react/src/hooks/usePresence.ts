import { useEffect, useState } from 'react'

/**
 * 浮层挂载与退场动画协调 Hook
 * 在 open 变为 false 时先触发退场 CSS 动画，待 durationMs 结束后再卸载 DOM，消除闪退跳变
 */
export function usePresence(open: boolean, durationMs = 200): {
  isMounted: boolean
  isVisible: boolean
} {
  const [isMounted, setIsMounted] = useState(open)
  const [isVisible, setIsVisible] = useState(open)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (open) {
      setIsMounted(true)
      if (prefersReduced) {
        setIsVisible(true)
        return
      }
      const raf = requestAnimationFrame(() => {
        setIsVisible(true)
      })
      return () => cancelAnimationFrame(raf)
    }

    setIsVisible(false)
    if (prefersReduced || durationMs <= 0) {
      setIsMounted(false)
      return
    }

    const timer = window.setTimeout(() => {
      setIsMounted(false)
    }, durationMs)
    return () => window.clearTimeout(timer)
  }, [open, durationMs])

  return { isMounted, isVisible }
}
