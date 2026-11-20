import React from 'react'
import { cn } from '@abc-design/react'
import {
  NodeResizeControl,
  ResizeControlVariant,
  type ResizeControlProps,
} from '@xyflow/react'
import type { FlowTone } from './flowTokens'

export interface FlowCornerResizerProps
  extends Omit<ResizeControlProps, 'variant' | 'children'> {
  /** 语义色调 */
  tone?: FlowTone
  /** 是否可见（建议绑定节点 selected 状态，或始终显示微弱角落抓手） */
  visible?: boolean
  /** 自定义角落图标 */
  icon?: React.ReactNode
}

const CORNER_TONE_CLASS: Record<FlowTone, string> = {
  blue: 'text-[var(--abc-flow-blue-header-fg)]',
  green: 'text-[var(--abc-flow-green-header-fg)]',
  amber: 'text-[var(--abc-flow-amber-header-fg)]',
  rose: 'text-[var(--abc-flow-rose-header-fg)]',
  slate: 'text-[var(--abc-fg-muted)]',
}

/**
 * 单角精致拖拽调尺寸控制器 (FlowCornerResizer)
 * 基于 ReactFlow `NodeResizeControl`，仅在节点右下角呈现克制斜线拖拽手柄，
 * 专为画布便签、注释卡片与紧凑预览面板设计，避免四边八点框线的视觉噪点。
 */
export const FlowCornerResizer: React.FC<FlowCornerResizerProps> = ({
  tone = 'slate',
  visible = true,
  minWidth = 180,
  minHeight = 110,
  position = 'bottom-right',
  icon,
  className,
  style,
  ...rest
}) => {
  if (!visible) return null

  return (
    <NodeResizeControl
      variant={ResizeControlVariant.Handle}
      position={position}
      minWidth={minWidth}
      minHeight={minHeight}
      style={{
        background: 'transparent',
        border: 'none',
        width: 18,
        height: 18,
        right: 4,
        bottom: 4,
        ...style,
      }}
      className={cn(
        'nodrag nopan flex items-end justify-end rounded-sm p-0.5 opacity-65 transition-opacity hover:opacity-100',
        CORNER_TONE_CLASS[tone],
        className
      )}
      {...rest}
    >
      {icon ?? (
        <svg
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          data-slot="flow-corner-resizer-grip"
        >
          <path
            d="M10.5 3.5L3.5 10.5M10.5 7.5L7.5 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </NodeResizeControl>
  )
}
