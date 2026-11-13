import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../../utils/cn'

export interface LoadingProps {
  /** 是否处于加载态（包裹 children 时作为遮罩开关） */
  spinning?: boolean
  /** 提示文字 */
  tip?: string
  /** tip 语义别名 */
  text?: string
  /** 尺寸规格 */
  size?: 'sm' | 'md' | 'lg'
  /** 是否铺满全屏居中 */
  fullscreen?: boolean
  /** fullscreen 驼峰别名 */
  fullScreen?: boolean
  className?: string
  children?: React.ReactNode
}

const ICON_SIZE = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
}

/** 轻量加载指示器与局部容器遮罩组件 */
export const Loading: React.FC<LoadingProps> = ({
  spinning = true,
  tip,
  text,
  size = 'md',
  fullscreen = false,
  fullScreen = false,
  className,
  children,
}) => {
  const message = tip ?? text
  const isFull = Boolean(fullscreen || fullScreen)

  const indicator = (
    <div
      role="status"
      aria-live="polite"
      className="inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]"
    >
      <Loader2 className={cn('animate-spin', ICON_SIZE[size])} />
      {message && <span className="text-xs font-medium text-[var(--abc-fg-muted)]">{message}</span>}
    </div>
  )

  if (isFull) {
    if (!spinning) return null
    return (
      <div className="fixed inset-0 z-[1040] flex items-center justify-center bg-[var(--abc-bg-canvas)]/75 backdrop-blur-xs">
        {indicator}
      </div>
    )
  }

  if (children !== undefined) {
    return (
      <div className={cn('relative', className)}>
        {children}
        {spinning && (
          <div className="absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-[var(--abc-bg-surface)]/70 backdrop-blur-[1px]">
            {indicator}
          </div>
        )}
      </div>
    )
  }

  if (!spinning) return null
  return <div className={cn('flex items-center justify-center py-8', className)}>{indicator}</div>
}

export default Loading
