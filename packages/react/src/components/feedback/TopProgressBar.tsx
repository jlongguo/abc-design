import React, { useEffect, useRef, useState } from 'react'
import type { AbcPageTransition } from '@abc-design/tokens'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'

type ProgressListener = (event: { action: 'start' | 'done' | 'set'; value?: number }) => void

const listeners = new Set<ProgressListener>()

/**
 * 零外部依赖的全局顶部路由加载进度条命令式控制器
 */
export const abcProgress = {
  start() {
    listeners.forEach((fn) => fn({ action: 'start' }))
  },
  done() {
    listeners.forEach((fn) => fn({ action: 'done' }))
  },
  set(value: number) {
    listeners.forEach((fn) =>
      fn({ action: 'set', value: Math.max(0, Math.min(100, value)) })
    )
  },
  subscribe(fn: ProgressListener) {
    listeners.add(fn)
    return () => {
      listeners.delete(fn)
    }
  },
}

export interface TopProgressBarProps {
  /** 路由路径或视图激活键；变化时自动触发顶部过渡进度条 */
  activeKey?: string
  /** 受控加载状态 */
  loading?: boolean
  /** 首次挂载时是否跳过触发（默认 true，避免首屏重复闪烁） */
  skipInitial?: boolean
  /** 进度条高度（px，默认 2） */
  height?: number
  /** 自定义颜色（默认读取 --abc-primary） */
  color?: string
  /** 层级 z-index（默认 9999） */
  zIndex?: number
  className?: string
}

/**
 * 顶部轻量加载与路由切换进度条 (TopProgressBar)
 * 同时支持监听 activeKey 自动过渡、受控 loading 以及 abcProgress.start()/done() 命令式调用。
 */
export const TopProgressBar: React.FC<TopProgressBarProps> = ({
  activeKey,
  loading,
  skipInitial = true,
  height = 2,
  color = 'var(--abc-primary)',
  zIndex = 9999,
  className,
}) => {
  const [visible, setVisible] = useState(false)
  const [percent, setPercent] = useState(0)
  const isFirstRenderRef = useRef(true)
  const trickleTimerRef = useRef<number | null>(null)
  const hideTimerRef = useRef<number | null>(null)

  const clearTimers = () => {
    if (trickleTimerRef.current !== null && typeof window !== 'undefined') {
      window.clearInterval(trickleTimerRef.current)
      trickleTimerRef.current = null
    }
    if (hideTimerRef.current !== null && typeof window !== 'undefined') {
      window.clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
  }

  const startBar = () => {
    clearTimers()
    setVisible(true)
    setPercent(22)
    if (typeof window !== 'undefined') {
      trickleTimerRef.current = window.setInterval(() => {
        setPercent((prev) => {
          if (prev >= 88) return prev
          return prev + Math.max(2, (90 - prev) * 0.18)
        })
      }, 120)
    }
  }

  const finishBar = () => {
    if (trickleTimerRef.current !== null && typeof window !== 'undefined') {
      window.clearInterval(trickleTimerRef.current)
      trickleTimerRef.current = null
    }
    setPercent(100)
    if (typeof window !== 'undefined') {
      hideTimerRef.current = window.setTimeout(() => {
        setVisible(false)
        setPercent(0)
      }, 220)
    }
  }

  useEffect(() => {
    return abcProgress.subscribe((evt) => {
      if (evt.action === 'start') {
        startBar()
      } else if (evt.action === 'done') {
        finishBar()
      } else if (evt.action === 'set' && typeof evt.value === 'number') {
        clearTimers()
        setVisible(true)
        setPercent(evt.value)
        if (evt.value >= 100) finishBar()
      }
    })
  }, [])

  useEffect(() => {
    if (loading === undefined) return
    if (loading) {
      startBar()
    } else if (visible) {
      finishBar()
    }
    return () => clearTimers()
  }, [loading])

  useEffect(() => {
    if (activeKey === undefined) return
    if (skipInitial && isFirstRenderRef.current) {
      isFirstRenderRef.current = false
      return
    }
    isFirstRenderRef.current = false
    startBar()
    const doneTimer =
      typeof window !== 'undefined'
        ? window.setTimeout(() => {
            finishBar()
          }, 160)
        : null

    return () => {
      if (doneTimer !== null && typeof window !== 'undefined') {
        window.clearTimeout(doneTimer)
      }
    }
  }, [activeKey, skipInitial])

  useEffect(() => () => clearTimers(), [])

  if (!visible) return null

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(percent)}
      aria-label="页面加载进度"
      style={{ zIndex, height }}
      className={cn('pointer-events-none fixed top-0 right-0 left-0 overflow-hidden', className)}
    >
      <div
        style={{
          width: `${percent}%`,
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}`,
          transition:
            percent === 100
              ? 'width 160ms ease-out, opacity 200ms ease-out'
              : 'width 220ms cubic-bezier(0.22, 1, 0.36, 1)',
          opacity: percent === 100 ? 0.85 : 1,
        }}
        className="h-full"
      />
    </div>
  )
}

const PAGE_TRANSITION_CLASSES: Record<AbcPageTransition, string> = {
  'fade-slide': 'abc-page-fade-slide',
  fade: 'abc-page-fade',
  zoom: 'abc-page-zoom',
  'slide-left': 'abc-page-slide-left',
  none: '',
}

export interface PageTransitionProps {
  /** 当前路由标识（如 location.pathname） */
  activeKey?: string
  /** 过渡动效模式（默认继承 AbcProvider.pageTransition） */
  transition?: AbcPageTransition
  /** 是否在切换 activeKey 时自动显示顶部加载进度条（默认 true） */
  showProgress?: boolean
  className?: string
  children: React.ReactNode
}

/**
 * 路由无关的页面切换过渡容器与顶部进度条联动组件 (PageTransition)
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  activeKey,
  transition,
  showProgress = true,
  className,
  children,
}) => {
  const { pageTransition } = useAbcConfig()
  const effectiveTransition = transition ?? pageTransition
  const animClass = PAGE_TRANSITION_CLASSES[effectiveTransition] ?? ''

  return (
    <>
      {showProgress && activeKey !== undefined && <TopProgressBar activeKey={activeKey} />}
      <div key={activeKey} className={cn('w-full min-w-0', animClass, className)}>
        {children}
      </div>
    </>
  )
}

export default TopProgressBar
