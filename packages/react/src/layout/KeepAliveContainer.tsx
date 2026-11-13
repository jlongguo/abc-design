import React, { useEffect, useRef } from 'react'
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
  /** 外部滚动容器引用，用于在切换回旧页签时自动恢复之前的阅读滚动高度 */
  scrollContainerRef?: React.RefObject<HTMLElement | null>
  /** 强制刷新计数器：变化时销毁重建当前 activeKey 实例 */
  refreshSeed?: number
  /** 当前激活视图容器的附加过渡动效类名 */
  activeClassName?: string
  children: React.ReactNode
}

interface CachedEntry {
  key: string
  seed: number
  lastActiveTick: number
  node: React.ReactNode
}

/**
 * 路由无关的视图 DOM 保活与滚动位置记忆容器
 * 保持缓存子节点的稳定挂载顺序，避免路由切换时销毁重建组件树
 */
export const KeepAliveContainer: React.FC<KeepAliveContainerProps> = ({
  activeKey,
  enabled = true,
  maxCached = 12,
  aliveKeys,
  scrollContainerRef,
  refreshSeed = 0,
  activeClassName,
  children,
}) => {
  const cacheRef = useRef<Map<string, CachedEntry>>(new Map())
  const tickRef = useRef(0)
  const scrollMapRef = useRef<Map<string, number>>(new Map())
  const prevKeyRef = useRef<string>(activeKey)

  // 记录离开前的滚动偏移，并在激活新视图后还原其历史偏移
  useEffect(() => {
    const scroller = scrollContainerRef?.current
    if (!scroller) return

    if (prevKeyRef.current && prevKeyRef.current !== activeKey) {
      scrollMapRef.current.set(prevKeyRef.current, scroller.scrollTop)
    }
    prevKeyRef.current = activeKey

    const savedTop = scrollMapRef.current.get(activeKey) ?? 0
    requestAnimationFrame(() => {
      if (scrollContainerRef?.current) {
        scrollContainerRef.current.scrollTop = savedTop
      }
    })
  }, [activeKey, scrollContainerRef])

  // 切换激活页签后通知窗口自适应组件（如 ECharts 图表容器）重新计算尺寸
  useEffect(() => {
    if (typeof window === 'undefined') return
    const timer = window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 60)
    return () => window.clearTimeout(timer)
  }, [activeKey])

  if (!enabled) {
    cacheRef.current.clear()
    return (
      <div key={`${activeKey}_${refreshSeed}`} className={cn('min-h-full', activeClassName)}>
        {children}
      </div>
    )
  }

  // 若传入非空 aliveKeys 白名单，清理已被用户显式关闭的页签缓存
  if (aliveKeys && aliveKeys.length > 0) {
    const allowSet = new Set([...aliveKeys, activeKey])
    for (const k of Array.from(cacheRef.current.keys())) {
      if (!allowSet.has(k)) {
        cacheRef.current.delete(k)
        scrollMapRef.current.delete(k)
      }
    }
  }

  // 原地复用已挂载缓存节点（仅在首次访问或手动触发 refreshSeed 时更新节点），保持内部状态与 DOM 挂载稳定
  tickRef.current += 1
  const existing = cacheRef.current.get(activeKey)
  cacheRef.current.set(activeKey, {
    key: activeKey,
    seed: refreshSeed,
    lastActiveTick: tickRef.current,
    node: existing && existing.seed === refreshSeed ? existing.node : children,
  })

  // 超出容量上限时淘汰最久未访问的非当前页签
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
            className={cn('min-h-full', isCurrent && activeClassName)}
          >
            {entry.node}
          </div>
        )
      })}
    </>
  )
}

export default KeepAliveContainer
