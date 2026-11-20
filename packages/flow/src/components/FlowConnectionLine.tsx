import React from 'react'
import {
  ConnectionLineType,
  getBezierPath,
  getSimpleBezierPath,
  getSmoothStepPath,
  getStraightPath,
  type ConnectionLineComponentProps,
} from '@xyflow/react'

export interface FlowConnectionLineProps extends ConnectionLineComponentProps {
  /** 默认连接拖拽线颜色（默认 --abc-primary） */
  defaultStroke?: string
  /** 命中有效目标端口时的颜色（默认 emerald） */
  validStroke?: string
  /** 命中非法目标端口时的颜色（默认 rose） */
  invalidStroke?: string
}

/**
 * 主题化 ReactFlow 拖拽连线预览组件 (FlowConnectionLine)
 * 支持全部 5 种 ConnectionLineType 路径曲线，并根据 ReactFlow connectionStatus 实时反馈合法/非法连线颜色与终点光环。
 */
export const FlowConnectionLine: React.FC<FlowConnectionLineProps> = ({
  fromX,
  fromY,
  toX,
  toY,
  fromPosition,
  toPosition,
  connectionLineType = ConnectionLineType.Bezier,
  connectionStatus,
  defaultStroke = 'var(--abc-primary, #4f46e5)',
  validStroke = 'var(--abc-flow-edge-success-stroke, #22c55e)',
  invalidStroke = 'var(--abc-flow-edge-danger-stroke, #e11d48)',
}) => {
  const pathParams = {
    sourceX: fromX,
    sourceY: fromY,
    sourcePosition: fromPosition,
    targetX: toX,
    targetY: toY,
    targetPosition: toPosition,
  }

  let path = ''
  if (connectionLineType === ConnectionLineType.Straight) {
    ;[path] = getStraightPath(pathParams)
  } else if (connectionLineType === ConnectionLineType.Step) {
    ;[path] = getSmoothStepPath({ ...pathParams, borderRadius: 0 })
  } else if (connectionLineType === ConnectionLineType.SmoothStep) {
    ;[path] = getSmoothStepPath({ ...pathParams, borderRadius: 14 })
  } else if (connectionLineType === ConnectionLineType.SimpleBezier) {
    ;[path] = getSimpleBezierPath(pathParams)
  } else {
    ;[path] = getBezierPath(pathParams)
  }

  const stroke =
    connectionStatus === 'valid'
      ? validStroke
      : connectionStatus === 'invalid'
        ? invalidStroke
        : defaultStroke

  return (
    <g data-slot="flow-connection-line" data-status={connectionStatus ?? 'idle'}>
      <path
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeDasharray="6 4"
        className="abc-flow-edge-animated"
        d={path}
      />
      <circle
        cx={toX}
        cy={toY}
        r={4.5}
        fill="var(--abc-bg-surface, #ffffff)"
        stroke={stroke}
        strokeWidth={2}
      />
    </g>
  )
}
