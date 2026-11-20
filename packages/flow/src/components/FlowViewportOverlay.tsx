import React from 'react'
import { cn } from '@abc-design/react'
import { ViewportPortal } from '@xyflow/react'

export interface FlowViewportOverlayProps {
  /** 磁吸水平对齐参考线世界 Y 坐标（画布坐标系） */
  horizontalLine?: number
  /** 磁吸垂直对齐参考线世界 X 坐标（画布坐标系） */
  verticalLine?: number
  /** 是否显示画布世界坐标原点 (0, 0) 参考徽标 */
  showOriginBadge?: boolean
  /** 随画布平移缩放同步移动的自定义世界坐标系覆盖元素 */
  children?: React.ReactNode
  className?: string
}

/**
 * 画布世界坐标系浮层容器 (FlowViewportOverlay)
 * 封装 ReactFlow ViewportPortal，支持磁吸对齐辅助线（Helper Lines）、原点标记与随画布缩放同步的世界坐标标注层。
 */
export const FlowViewportOverlay: React.FC<FlowViewportOverlayProps> = ({
  horizontalLine,
  verticalLine,
  showOriginBadge = false,
  children,
  className,
}) => {
  return (
    <ViewportPortal>
      <div
        data-slot="flow-viewport-overlay"
        className={cn('pointer-events-none relative', className)}
      >
        {typeof horizontalLine === 'number' && (
          <div
            data-testid="flow-helper-line-horizontal"
            style={{
              position: 'absolute',
              left: -5000,
              width: 10000,
              top: horizontalLine,
              height: 1,
            }}
            className="border-t border-dashed border-[var(--abc-primary)]/85"
          />
        )}

        {typeof verticalLine === 'number' && (
          <div
            data-testid="flow-helper-line-vertical"
            style={{
              position: 'absolute',
              top: -5000,
              height: 10000,
              left: verticalLine,
              width: 1,
            }}
            className="border-l border-dashed border-[var(--abc-primary)]/85"
          />
        )}

        {showOriginBadge && (
          <div
            style={{ position: 'absolute', left: 0, top: 0 }}
            className="rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/85 px-1.5 py-0.5 font-mono text-[9px] text-[var(--abc-fg-muted)] shadow-2xs"
          >
            (0, 0)
          </div>
        )}

        {children}
      </div>
    </ViewportPortal>
  )
}
