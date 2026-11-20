import React from 'react'
import { useNodes, type MiniMapNodeProps } from '@xyflow/react'
import type { FlowTone } from './flowTokens'

const TONE_FILL: Record<FlowTone, string> = {
  blue: '#3b82f6',
  green: '#10b981',
  amber: '#f59e0b',
  rose: '#f43f5e',
  slate: '#64748b',
}

/**
 * 语义状态感知自定义 MiniMap 缩略图节点 (FlowMiniMapNode)
 * 可直接传入 ReactFlow MiniMap 的 `nodeComponent`，在缩略图上区分分组虚线框、运行/成功/异常状态角标与选中高亮环。
 */
export const FlowMiniMapNode: React.FC<MiniMapNodeProps> = ({
  id,
  x,
  y,
  width,
  height,
  borderRadius = 6,
  color,
  selected,
  onClick,
}) => {
  const nodes = useNodes()
  const matched = nodes.find((n) => n.id === id)
  const data = matched?.data as
    | { tone?: FlowTone; status?: string; execution?: { status?: string } }
    | undefined
  const isGroup = matched?.type === 'flow-group' || matched?.type === 'sectionFrameNode'
  const tone = data?.tone
  const resolvedFill =
    tone && tone in TONE_FILL ? TONE_FILL[tone] : (color ?? '#94a3b8')

  const execStatus = data?.status ?? data?.execution?.status
  const statusDotColor =
    execStatus === 'running' || execStatus === 'queued'
      ? '#3b82f6'
      : execStatus === 'failed' || execStatus === 'error'
        ? '#f43f5e'
        : execStatus === 'completed' || execStatus === 'succeeded' || execStatus === 'success'
          ? '#10b981'
          : null

  return (
    <g
      data-slot="flow-minimap-node"
      onClick={onClick ? (event) => onClick(event, id) : undefined}
      style={{ cursor: onClick ? 'pointer' : undefined }}
    >
      <rect
        x={x}
        y={y}
        width={Math.max(4, width)}
        height={Math.max(4, height)}
        rx={borderRadius}
        ry={borderRadius}
        fill={isGroup ? 'transparent' : resolvedFill}
        fillOpacity={isGroup ? 0 : selected ? 0.92 : 0.72}
        stroke={selected ? 'var(--abc-primary, #4f46e5)' : resolvedFill}
        strokeWidth={selected ? 4 : isGroup ? 2.5 : 1.5}
        strokeDasharray={isGroup ? '8 5' : undefined}
      />
      {statusDotColor && width >= 28 && height >= 20 && (
        <circle
          cx={x + width - 12}
          cy={y + 12}
          r={5.5}
          fill={statusDotColor}
          stroke="var(--abc-bg-surface, #ffffff)"
          strokeWidth={2}
        />
      )}
    </g>
  )
}
