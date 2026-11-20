import React from 'react'
import { cn } from '@abc-design/react'
import { NodeResizer, type NodeResizerProps } from '@xyflow/react'
import type { FlowTone } from './flowTokens'

export interface FlowNodeResizerProps extends NodeResizerProps {
  /** 语义色调（未传时使用主题主色 --abc-primary） */
  tone?: FlowTone
}

const RESIZER_COLOR_BY_TONE: Record<FlowTone, string> = {
  blue: 'var(--abc-flow-blue-ring, #3b82f6)',
  green: 'var(--abc-flow-green-ring, #10b981)',
  amber: 'var(--abc-flow-amber-ring, #f59e0b)',
  rose: 'var(--abc-flow-rose-ring, #f43f5e)',
  slate: 'var(--abc-primary, #4f46e5)',
}

/**
 * 主题化 ReactFlow 节点拖拽调尺寸器 (FlowNodeResizer)
 * 封装 @xyflow/react 的 NodeResizer，对齐 ABC Design 语义边框线与圆角控制手柄，适配亮暗主题。
 */
export const FlowNodeResizer: React.FC<FlowNodeResizerProps> = ({
  tone = 'slate',
  color,
  minWidth = 180,
  minHeight = 96,
  isVisible = true,
  handleClassName,
  lineClassName,
  handleStyle,
  lineStyle,
  ...rest
}) => {
  const resolvedColor = color ?? RESIZER_COLOR_BY_TONE[tone]

  return (
    <NodeResizer
      isVisible={isVisible}
      minWidth={minWidth}
      minHeight={minHeight}
      color={resolvedColor}
      lineClassName={cn('!border-[1.5px]', lineClassName)}
      handleClassName={cn(
        '!h-2.5 !w-2.5 !rounded-sm !border-2 !border-[var(--abc-bg-surface)] !shadow-xs',
        handleClassName
      )}
      lineStyle={{
        borderColor: resolvedColor,
        ...lineStyle,
      }}
      handleStyle={{
        backgroundColor: resolvedColor,
        ...handleStyle,
      }}
      {...rest}
    />
  )
}
