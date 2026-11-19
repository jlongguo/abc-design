import React, { useState } from 'react'
import { Button, cn } from '@abc-design/react'
import {
  BaseEdge,
  EdgeLabelRenderer,
  type Edge,
  type EdgeProps,
  getBezierPath,
  getSmoothStepPath,
} from '@xyflow/react'
import { Plus } from 'lucide-react'

export type FlowEdgeTone = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'muted'
export type FlowEdgeRouteStyle = 'bezier' | 'smoothstep'

export interface FlowLabeledEdgeData extends Record<string, unknown> {
  /** 连线语义色阶 */
  tone?: FlowEdgeTone
  /** 路径曲线风格（反向/回环时自动切换圆角正交避障路径） */
  routeStyle?: FlowEdgeRouteStyle
  /** 连线中点短标签（如 Found / Else / Next） */
  label?: string
  /** 是否虚线绘制 */
  dashed?: boolean
  /** 是否启用流动虚线动画 */
  animated?: boolean
  /** 是否弱化半透明显示 */
  dimmed?: boolean
  /** 连线线宽（未设时按 tone 自动选择） */
  strokeWidth?: number
  /** 自定义 <g data-testid> */
  testId?: string
  /** 是否在中点展示快捷 [+] 操作触发按钮 */
  showActionTrigger?: boolean
  /** 中点 [+] 按钮无障碍标签 */
  actionAriaLabel?: string
  /** 直接点击中点按钮的回调（未提供 renderActionMenu 时触发） */
  onActionClick?: (edgeId: string) => void
  /** 中点按钮点击后弹出的自定义浮层菜单渲染函数 */
  renderActionMenu?: (helpers: { close: () => void }) => React.ReactNode
}

export type FlowLabeledEdgeType = Edge<FlowLabeledEdgeData, 'flow-labeled'>

const EDGE_TONE_STYLES: Record<FlowEdgeTone, { stroke: string; labelClass: string }> = {
  default: {
    stroke: 'var(--abc-flow-edge-default-stroke, #94a3b8)',
    labelClass:
      'border-[var(--abc-flow-edge-default-pill-border)] bg-[var(--abc-flow-edge-default-pill-bg)] text-[var(--abc-flow-edge-default-pill-fg)]',
  },
  primary: {
    stroke: 'var(--abc-flow-edge-primary-stroke, #6366f1)',
    labelClass:
      'border-[var(--abc-flow-edge-primary-pill-border)] bg-[var(--abc-flow-edge-primary-pill-bg)] text-[var(--abc-flow-edge-primary-pill-fg)]',
  },
  success: {
    stroke: 'var(--abc-flow-edge-success-stroke, #22c55e)',
    labelClass:
      'border-[var(--abc-flow-edge-success-pill-border)] bg-[var(--abc-flow-edge-success-pill-bg)] text-[var(--abc-flow-edge-success-pill-fg)]',
  },
  warning: {
    stroke: 'var(--abc-flow-edge-warning-stroke, #f59e0b)',
    labelClass:
      'border-[var(--abc-flow-edge-warning-pill-border)] bg-[var(--abc-flow-edge-warning-pill-bg)] text-[var(--abc-flow-edge-warning-pill-fg)]',
  },
  danger: {
    stroke: 'var(--abc-flow-edge-danger-stroke, #e11d48)',
    labelClass:
      'border-[var(--abc-flow-edge-danger-pill-border)] bg-[var(--abc-flow-edge-danger-pill-bg)] text-[var(--abc-flow-edge-danger-pill-fg)]',
  },
  muted: {
    stroke: 'var(--abc-flow-edge-muted-stroke, #cbd5e1)',
    labelClass:
      'border-[var(--abc-flow-edge-muted-pill-border)] bg-[var(--abc-flow-edge-muted-pill-bg)] text-[var(--abc-flow-edge-muted-pill-fg)]',
  },
}

export interface FlowLabeledEdgeProps extends EdgeProps<FlowLabeledEdgeType> {
  /** 选中态高亮线条颜色（默认 #4f46e5） */
  selectedStroke?: string
  /** 覆盖中点菜单渲染（优先于 data.renderActionMenu） */
  renderActionMenu?: (helpers: { close: () => void }) => React.ReactNode
}

/**
 * 通用语义标签连线 (FlowLabeledEdge)
 * - 正向连接采用流畅贝塞尔曲线，反向回环（目标位于源左侧）自动切换圆角正交路径防穿透节点卡片；
 * - 支持 6 套语义色阶、流动动画、中点语义徽章与可扩展的 [+] 菜单插槽。
 */
export const FlowLabeledEdge: React.FC<FlowLabeledEdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  selected,
  markerEnd,
  selectedStroke = '#4f46e5',
  renderActionMenu: renderActionMenuProp,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const tone: FlowEdgeTone = data?.tone ?? 'default'
  const routeStyle: FlowEdgeRouteStyle = data?.routeStyle ?? 'bezier'
  const isBackward = targetX < sourceX + 24
  const useSmoothStep = isBackward || routeStyle === 'smoothstep'

  const [edgePath, labelX, labelY] = useSmoothStep
    ? getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
        borderRadius: 16,
        offset: isBackward ? 34 : 20,
      })
    : getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
        curvature: 0.35,
      })

  const visual = EDGE_TONE_STYLES[tone] ?? EDGE_TONE_STYLES.default
  const strokeWidth = selected
    ? Math.max(2.2, (data?.strokeWidth ?? 1.7) + 0.5)
    : (data?.strokeWidth ?? (tone === 'muted' ? 1.25 : 1.7))

  const menuRenderer = renderActionMenuProp ?? data?.renderActionMenu
  const hasActionButton = Boolean(
    data?.showActionTrigger && (menuRenderer || data?.onActionClick),
  )

  return (
    <>
      <g data-testid={data?.testId}>
        <BaseEdge
          id={id}
          path={edgePath}
          markerEnd={markerEnd}
          className={data?.animated ? 'abc-flow-edge-animated' : undefined}
          style={{
            stroke: selected ? selectedStroke : visual.stroke,
            strokeWidth,
            strokeDasharray: data?.dashed ? '5 4' : undefined,
            opacity: data?.dimmed ? 0.55 : 0.92,
            transition: 'stroke 150ms ease, stroke-width 150ms ease',
          }}
        />
      </g>

      {(data?.label || hasActionButton) && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: 'all',
            }}
            className="nodrag nopan z-10 flex items-center gap-1"
          >
            {data?.label && (
              <span
                className={cn(
                  'select-none rounded-full border px-2 py-0.5 text-[10px] font-medium leading-tight shadow-2xs',
                  visual.labelClass,
                )}
              >
                {data.label}
              </span>
            )}

            {hasActionButton && (
              <div className="relative">
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  aria-label={data?.actionAriaLabel ?? '连线操作'}
                  title={data?.actionAriaLabel ?? '连线操作'}
                  onClick={(event) => {
                    event.stopPropagation()
                    if (menuRenderer) {
                      setMenuOpen((prev) => !prev)
                    } else {
                      data?.onActionClick?.(id)
                    }
                  }}
                  className={cn(
                    'h-5 w-5 rounded-full border p-0 shadow-xs transition',
                    menuOpen
                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 text-[var(--abc-fg-muted)] hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]',
                  )}
                >
                  <Plus size={11} />
                </Button>

                {menuOpen && menuRenderer && (
                  <div
                    onClick={(event) => event.stopPropagation()}
                    className="absolute left-1/2 top-6 z-50 -translate-x-1/2"
                  >
                    {menuRenderer({ close: () => setMenuOpen(false) })}
                  </div>
                )}
              </div>
            )}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  )
}
