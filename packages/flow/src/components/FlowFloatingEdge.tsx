import React from 'react'
import {
  BaseEdge,
  EdgeText,
  Position,
  getBezierPath,
  getSmoothStepPath,
  getStraightPath,
  useInternalNode,
  type Edge,
  type EdgeProps,
  type InternalNode,
} from '@xyflow/react'
import type { FlowEdgeTone } from './FlowLabeledEdge'

export type FlowFloatingEdgeRouteStyle = 'bezier' | 'straight' | 'smoothstep'

export interface FlowFloatingEdgeData extends Record<string, unknown> {
  /** 连线语义色阶 */
  tone?: FlowEdgeTone
  /** 路径曲线风格（默认 bezier） */
  routeStyle?: FlowFloatingEdgeRouteStyle
  /** 原生 SVG EdgeText 短标签 */
  label?: string
  /** 是否虚线绘制 */
  dashed?: boolean
  /** 是否启用流动虚线动画 */
  animated?: boolean
  /** 线宽 */
  strokeWidth?: number
  /** 自定义 data-testid */
  testId?: string
}

export type FlowFloatingEdgeType = Edge<FlowFloatingEdgeData, 'flow-floating'>

const FLOATING_STROKE_BY_TONE: Record<FlowEdgeTone, string> = {
  default: 'var(--abc-flow-edge-default-stroke, #94a3b8)',
  primary: 'var(--abc-flow-edge-primary-stroke, #6366f1)',
  success: 'var(--abc-flow-edge-success-stroke, #22c55e)',
  warning: 'var(--abc-flow-edge-warning-stroke, #f59e0b)',
  danger: 'var(--abc-flow-edge-danger-stroke, #e11d48)',
  muted: 'var(--abc-flow-edge-muted-stroke, #cbd5e1)',
}

function getNodeIntersection(intersectionNode: InternalNode, targetNode: InternalNode) {
  const w = (intersectionNode.measured.width ?? 200) / 2
  const h = (intersectionNode.measured.height ?? 90) / 2
  const x2 = intersectionNode.internals.positionAbsolute.x + w
  const y2 = intersectionNode.internals.positionAbsolute.y + h

  const tw = (targetNode.measured.width ?? 200) / 2
  const th = (targetNode.measured.height ?? 90) / 2
  const x1 = targetNode.internals.positionAbsolute.x + tw
  const y1 = targetNode.internals.positionAbsolute.y + th

  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h)
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h)
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1) || 1)
  const xx3 = a * xx1
  const yy3 = a * yy1
  return {
    x: w * (xx3 + yy3) + x2,
    y: h * (-xx3 + yy3) + y2,
  }
}

function getEdgePosition(node: InternalNode, intersectionPoint: { x: number; y: number }): Position {
  const nx = Math.round(node.internals.positionAbsolute.x)
  const ny = Math.round(node.internals.positionAbsolute.y)
  const px = Math.round(intersectionPoint.x)
  const py = Math.round(intersectionPoint.y)
  const w = node.measured.width ?? 200
  const h = node.measured.height ?? 90

  if (px <= nx + 1) return Position.Left
  if (px >= nx + w - 1) return Position.Right
  if (py <= ny + 1) return Position.Top
  if (py >= ny + h - 1) return Position.Bottom
  return Position.Top
}

export interface FlowFloatingEdgeProps extends EdgeProps<FlowFloatingEdgeType> {
  /** 选中态高亮描边色 */
  selectedStroke?: string
}

/**
 * 浮动最短边界连线 (FlowFloatingEdge)
 * 基于 ReactFlow v12 `useInternalNode` 动态计算两节点矩形边框交点，
 * 连线随节点拖动沿边框丝滑自动滑移（ER 图、思维导图、拓扑网络），并内置原生 `<EdgeText>` SVG 标签。
 */
export const FlowFloatingEdge: React.FC<FlowFloatingEdgeProps> = ({
  id,
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerStart,
  markerEnd,
  data,
  selected,
  selectedStroke = 'var(--abc-primary, #4f46e5)',
}) => {
  const sourceNode = useInternalNode(source)
  const targetNode = useInternalNode(target)

  let sx = sourceX
  let sy = sourceY
  let tx = targetX
  let ty = targetY
  let sPos = sourcePosition
  let tPos = targetPosition

  if (sourceNode && targetNode) {
    const sInter = getNodeIntersection(sourceNode, targetNode)
    const tInter = getNodeIntersection(targetNode, sourceNode)
    sx = sInter.x
    sy = sInter.y
    tx = tInter.x
    ty = tInter.y
    sPos = getEdgePosition(sourceNode, sInter)
    tPos = getEdgePosition(targetNode, tInter)
  }

  const routeStyle: FlowFloatingEdgeRouteStyle = data?.routeStyle ?? 'bezier'
  const tone: FlowEdgeTone = data?.tone ?? 'primary'

  let edgePath: string
  let labelX: number
  let labelY: number

  if (routeStyle === 'straight') {
    ;[edgePath, labelX, labelY] = getStraightPath({ sourceX: sx, sourceY: sy, targetX: tx, targetY: ty })
  } else if (routeStyle === 'smoothstep') {
    ;[edgePath, labelX, labelY] = getSmoothStepPath({
      sourceX: sx,
      sourceY: sy,
      sourcePosition: sPos,
      targetX: tx,
      targetY: ty,
      targetPosition: tPos,
      borderRadius: 14,
    })
  } else {
    ;[edgePath, labelX, labelY] = getBezierPath({
      sourceX: sx,
      sourceY: sy,
      sourcePosition: sPos,
      targetX: tx,
      targetY: ty,
      targetPosition: tPos,
    })
  }

  const stroke = selected
    ? selectedStroke
    : (FLOATING_STROKE_BY_TONE[tone] ?? FLOATING_STROKE_BY_TONE.primary)
  const strokeWidth = selected ? Math.max(2.2, (data?.strokeWidth ?? 1.8) + 0.5) : (data?.strokeWidth ?? 1.8)

  return (
    <g data-slot="flow-floating-edge" data-testid={data?.testId} data-route-style={routeStyle}>
      <BaseEdge
        id={id}
        path={edgePath}
        markerStart={markerStart}
        markerEnd={markerEnd}
        className={data?.animated ? 'abc-flow-edge-animated' : undefined}
        style={{
          stroke,
          strokeWidth,
          strokeDasharray: data?.dashed ? '6 4' : undefined,
          transition: 'stroke 150ms ease, stroke-width 150ms ease',
        }}
      />
      {data?.label && (
        <EdgeText
          x={labelX}
          y={labelY}
          label={data.label}
          labelStyle={{
            fill: 'var(--abc-fg, #0f172a)',
            fontSize: 10.5,
            fontWeight: 600,
          }}
          labelShowBg
          labelBgPadding={[6, 3]}
          labelBgBorderRadius={999}
          labelBgStyle={{
            fill: 'var(--abc-bg-surface, #ffffff)',
            stroke: 'var(--abc-border, #cbd5e1)',
            strokeWidth: 1,
          }}
        />
      )}
    </g>
  )
}
