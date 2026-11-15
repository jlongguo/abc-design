import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { TabErrorBoundary } from '../components/feedback/ErrorBoundary'
import { cn } from '../utils/cn'

export interface KeepAliveContainerProps {
  /** 当前激活视图唯一键（通常为路由 pathname） */
  activeKey: string
  /** 是否开启缓存保活；为 false 时仅渲染当前视图 */
  enabled?: boolean
  /** 最大缓存实例上限（超出后按最近最少访问淘汰） */
  maxCached?: number
  /** 允许保留的活跃 key 白名单（如关闭页签后同步剔除缓存） */
  aliveKeys?: string[]
  /** 外部滚动容器引用，用于在切换回旧页签时精准恢复离开前的滚动高度 */
  scrollContainerRef?: React.RefObject<HTMLElement | null>
  /** 当前激活页签的强制刷新计数器：变化时销毁重建对应实例 */
  refreshSeed?: number
  /** 按路由键索引的刷新计数器字典（与 refreshSeed 兼容） */
  refreshKeys?: Record<string, number>
  /** 当前激活视图容器的附加过渡动效类名 */
  activeClassName?: string
  /** 是否自动为每个页签独立包裹 TabErrorBoundary 异常隔离边界（默认 false） */
  isolateError?: boolean
  /** 页签异常边界点击“重新加载本页”时的回调 */
  onTabReload?: (key: string) => void
  /** 页签异常边界点击“关闭此页签”时的回调 */
  onTabClose?: (key: string) => void
  /** 页签异常边界点击“返回仪表盘”时的回调 */
  onNavigateHome?: () => void
  children: React.ReactNode
}

interface CachedEntry {
  key: string
  seed: number
  lastActiveTick: number
  node: React.ReactNode
}

/**
 * 路由无关的视图 DOM 保活、实时滚动高度记忆与单页签异常隔离容器
 * 通过 passive scroll 实时记录各路由滚动偏移并在 useLayoutEffect 同步复原，防止切页后容器高度坍缩导致 scrollTop 丢失。
 */
export const KeepAliveContainer: React.FC<KeepAliveContainerProps> = ({
  activeKey,
  enabled = true,
  maxCached = 12,
  aliveKeys,
  scrollContainerRef,
  refreshSeed,
  refreshKeys,
  activeClassName,
  isolateError = false,
  onTabReload,
  onTabClose,
  onNavigateHome,
  children,
}) => {
  const cacheRef = useRef<Map<string, CachedEntry>>(new Map())
  const tickRef = useRef(0)
  const scrollMapRef = useRef<Map<string, number>>(new Map())

  const currentSeed = refreshKeys?.[activeKey] ?? refreshSeed ?? 0

  // 1. 实时被动监听滚动容器，避免在路由切换后因新视图较短导致浏览器提前将 scrollTop 归零
  useEffect(() => {
    const scroller = scrollContainerRef?.current
    if (!scroller) return

    const handleScroll = () => {
      if (activeKey) {
        scrollMapRef.current.set(activeKey, scroller.scrollTop)
      }
    }

    scroller.addEventListener('scroll', handleScroll, { passive: true })
    return () => scroller.removeEventListener('scroll', handleScroll)
  }, [activeKey, scrollContainerRef])

  // 2. 在浏览器绘制前同步还原目标页签的历史滚动位置
  useLayoutEffect(() => {
    const scroller = scrollContainerRef?.current
    if (!scroller) return

    if (enabled) {
      scroller.scrollTop = scrollMapRef.current.get(activeKey) ?? 0
    } else {
      scroller.scrollTop = 0
    }
  }, [activeKey, enabled, currentSeed, scrollContainerRef])

  // 3. 切换激活页签后广播窗口 resize 事件，使 ECharts 等自适应画布重算尺寸
  useEffect(() => {
    if (typeof window === 'undefined') return
    const timer = window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 60)
    return () => window.clearTimeout(timer)
  }, [activeKey])

  const wrapWithBoundary = (key: string, content: React.ReactNode) => {
    if (!isolateError) return content
    return (
      <TabErrorBoundary
        path={key}
        onReload={onTabReload ? () => onTabReload(key) : undefined}
        onClose={onTabClose ? () => onTabClose(key) : undefined}
        onNavigateHome={onNavigateHome}
      >
        {content}
      </TabErrorBoundary>
    )
  }

  if (!enabled) {
    cacheRef.current.clear()
    return (
      <div
        key={`${activeKey}_${currentSeed}`}
        className={cn('min-h-full w-full min-w-0', activeClassName)}
      >
        {wrapWithBoundary(activeKey, children)}
      </div>
    )
  }

  // 若传入非空 aliveKeys 白名单，清理已被用户显式关闭的页签缓存与滚动记忆
  if (aliveKeys && aliveKeys.length > 0) {
    const allowSet = new Set([...aliveKeys, activeKey])
    for (const k of Array.from(cacheRef.current.keys())) {
      if (!allowSet.has(k)) {
        cacheRef.current.delete(k)
        scrollMapRef.current.delete(k)
      }
    }
  }

  // 原地复用已挂载缓存节点（仅在首次访问或手动触发刷新计数器变化时更新节点）
  tickRef.current += 1
  const existing = cacheRef.current.get(activeKey)
  cacheRef.current.set(activeKey, {
    key: activeKey,
    seed: currentSeed,
    lastActiveTick: tickRef.current,
    node: existing && existing.seed === currentSeed ? existing.node : children,
  })

  // 超出容量上限时按 LRU 淘汰最久未访问的非当前页签
  while (cacheRef.current.size > maxCached) {
    let lruKey: string | null = null
    let lruTick = Infinity
    for (const [k, entry] of cacheRef.current.entries()) {
      if (k !== activeKey && entry.lastActiveTick < lruTick) {
        lruTick = entry.lastActiveTick
        lruKey = k
      }
    }
    if (lruKey) {
      cacheRef.current.delete(lruKey)
      scrollMapRef.current.delete(lruKey)
    } else {
      break
    }
  }

  return (
    <>
      {Array.from(cacheRef.current.values()).map((entry) => {
        const isCurrent = entry.key === activeKey
        return (
          <div
            key={`${entry.key}_${entry.seed}`}
            style={{ display: isCurrent ? 'block' : 'none' }}
            className={cn('min-h-full w-full min-w-0', isCurrent && activeClassName)}
          >
            {wrapWithBoundary(entry.key, entry.node)}
          </div>
        )
      })}
    </>
  )
}

export default KeepAliveContainer
