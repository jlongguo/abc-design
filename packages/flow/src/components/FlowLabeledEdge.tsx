import React, { useState } from 'react'
import { Button, cn } from '@abc-design/react'
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeText,
  EdgeToolbar,
  type Edge,
  type EdgeProps,
  getBezierPath,
  getSimpleBezierPath,
  getSmoothStepPath,
  getStraightPath,
} from '@xyflow/react'
import { Plus } from 'lucide-react'

export type FlowEdgeTone = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'muted'
export type FlowEdgeRouteStyle = 'bezier' | 'smoothstep' | 'step' | 'straight' | 'simplebezier'

export interface FlowLabeledEdgeData extends Record<string, unknown> {
  /** 连线语义色阶 */
  tone?: FlowEdgeTone
  /** 路径曲线风格：支持 ReactFlow 全部 5 种边算法（bezier / smoothstep / step / straight / simplebezier） */
  routeStyle?: FlowEdgeRouteStyle
  /** 反向回环时是否自动切圆角正交避障路径（默认 true；显式选 straight/step 时尊重用户选择） */
  autoAvoidBackward?: boolean
  /** 连线中点短标签（HTML 徽章，如 Found / Else / Next） */
  label?: string
  /** 原生 SVG EdgeText 短标签（零 HTML DOM 叠加，适合轻量大图） */
  svgLabel?: string
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
  /** 选中该连线时通过 ReactFlow EdgeToolbar 渲染的浮动快捷工具条 */
  renderToolbar?: (edgeId: string) => React.ReactNode
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

const CAN_USE_SVG_EDGE_TEXT =
  typeof SVGElement !== 'undefined' &&
  typeof (SVGElement.prototype as unknown as { getBBox?: unknown }).getBBox === 'function'

export interface FlowLabeledEdgeProps extends EdgeProps<FlowLabeledEdgeType> {
  /** 选中态高亮线条颜色（默认 #4f46e5） */
  selectedStroke?: string
  /** 连线点击热区宽度（默认 24px，便于精准点击选中与右键呼出菜单） */
  interactionWidth?: number
  /** 覆盖中点菜单渲染（优先于 data.renderActionMenu） */
  renderActionMenu?: (helpers: { close: () => void }) => React.ReactNode
  /** 覆盖选中态 EdgeToolbar 渲染（优先于 data.renderToolbar） */
  renderToolbar?: (edgeId: string) => React.ReactNode
}

/**
 * 通用语义标签连线 (FlowLabeledEdge)
 * - 完整覆盖 ReactFlow 5 种曲线路径算法（bezier / smoothstep / step / straight / simplebezier）；
 * - 支持 6 套语义色阶、起止箭头 Marker、流光动画、中点 [+] 菜单插槽与选中态原生 EdgeToolbar。
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
  markerStart,
  markerEnd,
  selectedStroke = '#4f46e5',
  interactionWidth = 24,
  renderActionMenu: renderActionMenuProp,
  renderToolbar: renderToolbarProp,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const tone: FlowEdgeTone = data?.tone ?? 'default'
  const routeStyle: FlowEdgeRouteStyle = data?.routeStyle ?? 'bezier'
  const autoAvoidBackward = data?.autoAvoidBackward ?? true
  const isBackward = targetX < sourceX + 24

  let edgePath: string
  let labelX: number
  let labelY: number

  if (routeStyle === 'straight') {
    ;[edgePath, labelX, labelY] = getStraightPath({ sourceX, sourceY, targetX, targetY })
  } else if (routeStyle === 'step') {
    ;[edgePath, labelX, labelY] = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      borderRadius: 0,
      offset: isBackward ? 34 : 20,
    })
  } else if (routeStyle === 'simplebezier') {
    ;[edgePath, labelX, labelY] = getSimpleBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    })
  } else if (routeStyle === 'smoothstep' || (autoAvoidBackward && isBackward)) {
    ;[edgePath, labelX, labelY] = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      borderRadius: 16,
      offset: isBackward ? 34 : 20,
    })
  } else {
    ;[edgePath, labelX, labelY] = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      curvature: 0.35,
    })
  }

  const visual = EDGE_TONE_STYLES[tone] ?? EDGE_TONE_STYLES.default
  const strokeWidth = selected
    ? Math.max(2.2, (data?.strokeWidth ?? 1.7) + 0.5)
    : (data?.strokeWidth ?? (tone === 'muted' ? 1.25 : 1.7))

  const menuRenderer = renderActionMenuProp ?? data?.renderActionMenu
  const toolbarRenderer = renderToolbarProp ?? data?.renderToolbar
  const hasActionButton = Boolean(
    data?.showActionTrigger && (menuRenderer || data?.onActionClick),
  )

  return (
    <>
      <g data-testid={data?.testId} data-route-style={routeStyle}>
        <BaseEdge
          id={id}
          path={edgePath}
          markerStart={markerStart}
          markerEnd={markerEnd}
          interactionWidth={interactionWidth}
          className={data?.animated ? 'abc-flow-edge-animated' : undefined}
          style={{
            stroke: selected ? selectedStroke : visual.stroke,
            strokeWidth,
            strokeDasharray: data?.dashed ? '5 4' : undefined,
            opacity: data?.dimmed ? 0.55 : 0.92,
            transition: 'stroke 150ms ease, stroke-width 150ms ease',
          }}
        />
        {data?.svgLabel &&
          !data?.label &&
          (CAN_USE_SVG_EDGE_TEXT ? (
            <EdgeText
              x={labelX}
              y={labelY}
              label={data.svgLabel}
              labelStyle={{
                fill: 'var(--abc-fg-secondary, #334155)',
                fontSize: 10,
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
          ) : (
            <text
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={10}
              fontWeight={600}
              fill="var(--abc-fg-secondary, #334155)"
            >
              {data.svgLabel}
            </text>
          ))}
      </g>

      {toolbarRenderer && (
        <EdgeToolbar
          edgeId={id}
          x={labelX}
          y={labelY - 26}
          isVisible={Boolean(selected)}
          alignX="center"
          alignY="bottom"
        >
          <div
            data-testid="flow-edge-toolbar"
            onClick={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.stopPropagation()}
            className="nodrag nopan relative z-30"
          >
            {toolbarRenderer(id)}
          </div>
        </EdgeToolbar>
      )}

      {(data?.label || hasActionButton) && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              // 标签容器透传点击至下方 SVG 连线热区，避免点击“命中/未命中”胶囊时无法选中或右键连线
              pointerEvents: 'none',
            }}
            className="nodrag nopan z-10 flex items-center gap-1"
          >
            {data?.label && (
              <span
                className={cn(
                  'pointer-events-none select-none rounded-full border px-2 py-0.5 text-[10px] font-medium leading-tight shadow-2xs',
                  selected && 'ring-1 ring-[var(--abc-primary)]',
                  visual.labelClass,
                )}
              >
                {data.label}
              </span>
            )}

            {hasActionButton && (
              <div className="pointer-events-auto relative">
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  pressScale={false}
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
