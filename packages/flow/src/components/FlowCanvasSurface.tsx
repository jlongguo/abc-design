import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@abc-design/react'
import {
  Background,
  BackgroundVariant,
  MiniMap,
  PanOnScrollMode,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  SelectionMode,
  type ColorMode,
  type Edge,
  type MiniMapProps,
  type Node,
  type ReactFlowProps,
} from '@xyflow/react'
import { FLOW_ARIA_LABELS_EN, FLOW_ARIA_LABELS_ZH } from '../utils/flowAdvancedGraph'
import { FlowConnectionLine } from './FlowConnectionLine'
import { FlowMiniMapNode } from './FlowMiniMapNode'
import { FlowViewportOverlay } from './FlowViewportOverlay'
import type { FlowTone } from './flowTokens'

export type FlowBackgroundStyle = 'dots' | 'lines' | 'cross' | 'none'
export type FlowInteractionMode = 'pan' | 'select'
export type FlowGesturePreset = 'default' | 'figma'

export interface FlowSecondaryBackgroundConfig {
  variant?: FlowBackgroundStyle
  gap?: number
  size?: number
  color?: string
}

/** 统一封装的 ReactFlowProvider，供业务端按需在外层包裹以调用 useFlowInstance */
export const FlowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ReactFlowProvider>{children}</ReactFlowProvider>
)

const MINIMAP_TONE_COLOR: Record<FlowTone, string> = {
  blue: '#3b82f6',
  green: '#10b981',
  amber: '#f59e0b',
  rose: '#f43f5e',
  slate: '#64748b',
}

export interface FlowCanvasSurfaceProps<
  NodeType extends Node = Node,
  EdgeType extends Edge = Edge,
> extends Omit<ReactFlowProps<NodeType, EdgeType>, 'children'> {
  /** 是否内置包裹 ReactFlowProvider（外部已包 Provider 且调用 useReactFlow 时保持 false） */
  withProvider?: boolean
  /** 外层舞台容器类名 */
  containerClassName?: string
  /** 外层舞台容器 data-testid */
  testId?: string
  /** 外层舞台容器 ref（用于拖拽坐标换算或尺寸测量） */
  containerRef?: React.Ref<HTMLDivElement>
  /** 外层舞台拖拽悬停事件 */
  onDragOver?: React.DragEventHandler<HTMLDivElement>
  /** 外层舞台拖放事件 */
  onDrop?: React.DragEventHandler<HTMLDivElement>
  /** 背景网格形态：dots（点阵）/ lines（网格线）/ cross（十字）/ none（无背景），优先于 showDotsBackground */
  backgroundVariant?: FlowBackgroundStyle
  /** 背景点阵样式开关（默认 true，向后兼容） */
  showDotsBackground?: boolean
  /** 网格间距（默认 18） */
  backgroundGap?: number
  /** 点阵圆点半径或线条尺寸（默认 1.25） */
  backgroundDotSize?: number
  /** 背景网格颜色（默认柔和浅灰，支持传入 CSS 变量） */
  backgroundColor?: string
  /** 次级叠加网格配置（开启后在同一画布渲染主/次双层工程图纸背景） */
  secondaryBackground?: FlowSecondaryBackgroundConfig
  /** 交互模式：pan（拖拽平移，默认）或 select（左键框选多节点，中/右键平移） */
  interactionMode?: FlowInteractionMode
  /** 触控板/鼠标手势预设：default（滚轮缩放）或 figma（滚轮自由平移 + 捏合缩放） */
  gesturePreset?: FlowGesturePreset
  /** 无障碍提示语种（自动注入中/英文 ariaLabelConfig 默认文案，默认 'zh'） */
  locale?: 'zh' | 'en'
  /** 是否允许编辑交互（设为 false 时锁定节点拖拽、连线与选中） */
  interactive?: boolean
  /** 磁吸对齐辅助线世界坐标（非空时通过 ViewportPortal 自动绘制） */
  helperLines?: { horizontal?: number; vertical?: number }
  /** 左上角悬浮插槽（如 FloatingIconRail） */
  leftRailSlot?: React.ReactNode
  /** 顶部居中悬浮插槽（如环境摘要胶囊） */
  topCenterSlot?: React.ReactNode
  /** 右上角悬浮插槽 */
  topRightSlot?: React.ReactNode
  /** 左下角悬浮插槽（如 FlowViewportControls） */
  bottomLeftSlot?: React.ReactNode
  /** 底部居中悬浮插槽（如多选对齐工具条 FlowAlignmentToolbar） */
  bottomCenterSlot?: React.ReactNode
  /** 右下角悬浮插槽 */
  bottomRightSlot?: React.ReactNode
  /** 是否展示缩略图（默认关闭保持画布清爽） */
  showMiniMap?: boolean
  /** 是否启用带执行状态角标与分组虚线框的增强型 FlowMiniMapNode（默认 true） */
  enhancedMiniMap?: boolean
  /** MiniMap 附加类名 */
  miniMapClassName?: string
  /** 透传给 MiniMap 的扩展配置 */
  miniMapProps?: Partial<MiniMapProps<NodeType>>
  /** 画布加载态遮罩 */
  loading?: boolean
  /** 加载态提示文案 */
  loadingText?: string
  /** 画布内自定义子元素（额外 Panel / SVG defs / ViewportOverlay 等） */
  children?: React.ReactNode
  /** 舞台外层浮层插槽（如右键上下文菜单 FlowContextMenu 或画中画小窗） */
  overlaySlot?: React.ReactNode
}

function resolveBackgroundVariant(
  variant: FlowBackgroundStyle | undefined,
  showDotsBackground: boolean
): BackgroundVariant | null {
  const effective: FlowBackgroundStyle = variant ?? (showDotsBackground ? 'dots' : 'none')
  if (effective === 'none') return null
  if (effective === 'lines') return BackgroundVariant.Lines
  if (effective === 'cross') return BackgroundVariant.Cross
  return BackgroundVariant.Dots
}

/**
 * 当拥有嵌套子节点（parentId）的分组父节点处于选中态时，ReactFlow 默认会将连向其子节点的边抬升至 parentZ + 1 (1001)，
 * 使 24px 宽的隐形边交互热区覆盖在父分组节点 (z=1000) 之上，拦截四边四角 FlowNodeResizer 手柄的拖拽事件。
 * 仅在宿主父节点被选中且该边本身未被选中/未显式指定 zIndex 时将边 zIndex 微调为 -1（最终生效 z = parentZ），
 * 借助 DOM 中 NodeRenderer 位于 EdgeRenderer 之后的层叠顺序，确保分组缩放手柄永不被边热区截胡，
 * 同时保持未选中态连线位于分组背景之上且子节点 (parentZ + 1) 仍高于父分组。
 */
export function resolveFlowEdgesForSelectedGroups<
  NodeType extends Node = Node,
  EdgeType extends Edge = Edge,
>(
  nodes: ReadonlyArray<NodeType> | undefined,
  edges: ReadonlyArray<EdgeType> | undefined,
): EdgeType[] | undefined {
  if (!edges || edges.length === 0 || !nodes || nodes.length === 0) {
    return edges as EdgeType[] | undefined
  }
  const selectedNodeIds = new Set<string>()
  const childToParent = new Map<string, string>()
  for (const node of nodes) {
    if (node.parentId) {
      childToParent.set(node.id, node.parentId)
    }
    if (node.selected) {
      selectedNodeIds.add(node.id)
    }
  }
  if (selectedNodeIds.size === 0 || childToParent.size === 0) {
    return edges as EdgeType[]
  }
  let changed = false
  const next = edges.map((edge) => {
    if (edge.selected || typeof edge.zIndex === 'number') {
      return edge
    }
    const srcParent = childToParent.get(edge.source)
    const tgtParent = childToParent.get(edge.target)
    const touchesSelectedParent =
      (srcParent !== undefined && selectedNodeIds.has(srcParent)) ||
      (tgtParent !== undefined && selectedNodeIds.has(tgtParent))
    if (!touchesSelectedParent) {
      return edge
    }
    changed = true
    return { ...edge, zIndex: -1 }
  })
  return changed ? next : (edges as EdgeType[])
}

function detectElementFlowColorMode(el: HTMLElement | null): 'light' | 'dark' {
  if (typeof document === 'undefined') return 'light'
  const readThemeOn = (node: Element | null): 'light' | 'dark' | null => {
    if (!node) return null
    const pg = node.getAttribute('data-playground-theme')
    if (pg === 'dark' || pg === 'light') return pg
    const abc = node.getAttribute('data-abc-theme')
    if (abc === 'dark' || abc === 'light') return abc
    if (node.classList.contains('dark')) return 'dark'
    if (node.classList.contains('light')) return 'light'
    return null
  }
  const nearest = el?.closest('[data-playground-theme], [data-abc-theme], .dark, .light') ?? null
  const fromNearest = readThemeOn(nearest)
  if (fromNearest) return fromNearest
  const fromRoot = readThemeOn(document.documentElement)
  if (fromRoot) return fromRoot
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

/**
 * 解析 ReactFlow 根节点 colorMode，防止 @xyflow/react 默认注入 `.react-flow.light`
 * 覆盖外部暗色主题（含全局暗色与局部 `[data-playground-theme="dark"]` 子树）的 `--abc-bg-surface` 与 `--abc-flow-*` 变量。
 */
function useResolvedFlowColorMode(
  explicitColorMode: ColorMode | undefined,
  internalRef: React.RefObject<HTMLDivElement | null>,
): ColorMode {
  const [detected, setDetected] = useState<'light' | 'dark'>(() => detectElementFlowColorMode(null))

  useEffect(() => {
    if (explicitColorMode !== undefined) return
    const sync = () => {
      setDetected(detectElementFlowColorMode(internalRef.current))
    }
    sync()
    if (typeof document === 'undefined') return

    const observedTargets = new Set<Element>([document.documentElement])
    const nearest =
      internalRef.current?.closest('[data-playground-theme], [data-abc-theme], .dark, .light') ??
      null
    if (nearest) observedTargets.add(nearest)

    let observer: MutationObserver | null = null
    if (typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver(sync)
      observedTargets.forEach((target) => {
        observer?.observe(target, {
          attributes: true,
          attributeFilter: ['data-abc-theme', 'data-abc-theme-mode', 'data-playground-theme', 'class'],
        })
      })
    }
    const media = typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null
    media?.addEventListener?.('change', sync)
    window.addEventListener?.('abc:color-scheme-change', sync)
    window.addEventListener?.('bp:color-scheme-change', sync)

    return () => {
      observer?.disconnect()
      media?.removeEventListener?.('change', sync)
      window.removeEventListener?.('abc:color-scheme-change', sync)
      window.removeEventListener?.('bp:color-scheme-change', sync)
    }
  }, [explicitColorMode, internalRef])

  return explicitColorMode ?? detected
}

function assignMergedRef<T>(
  externalRef: React.Ref<T> | undefined,
  internalRef: React.MutableRefObject<T | null>,
) {
  return (node: T | null) => {
    internalRef.current = node
    if (typeof externalRef === 'function') {
      externalRef(node)
    } else if (externalRef && typeof externalRef === 'object') {
      ;(externalRef as React.MutableRefObject<T | null>).current = node
    }
  }
}

/**
 * ABC Design 主题化 ReactFlow 全能画布舞台容器 (FlowCanvasSurface)
 * 集成多态网格背景（dots/lines/cross）、平移/框选双模式、画布编辑锁、磁吸网格与辅助参考线、
 * 语义着色 MiniMap、自定义拖拽连线、四角 Panel 插槽与加载遮罩，保持 100% 业务无关。
 */
export function FlowCanvasSurface<
  NodeType extends Node = Node,
  EdgeType extends Edge = Edge,
>({
  withProvider = false,
  containerClassName,
  testId = 'abc-flow-canvas-surface',
  containerRef,
  onDragOver,
  onDrop,
  backgroundVariant,
  showDotsBackground = true,
  backgroundGap = 18,
  backgroundDotSize = 1.25,
  backgroundColor = 'rgba(148, 163, 184, 0.35)',
  secondaryBackground,
  interactionMode = 'pan',
  gesturePreset = 'default',
  locale = 'zh',
  interactive = true,
  helperLines,
  leftRailSlot,
  topCenterSlot,
  topRightSlot,
  bottomLeftSlot,
  bottomCenterSlot,
  bottomRightSlot,
  showMiniMap = false,
  enhancedMiniMap = true,
  miniMapClassName,
  miniMapProps,
  loading = false,
  loadingText = '正在加载画布...',
  children,
  overlaySlot,
  className,
  proOptions,
  connectionLineComponent,
  nodesDraggable,
  nodesConnectable,
  elementsSelectable,
  edgesReconnectable,
  reconnectRadius,
  panOnDrag,
  panActivationKeyCode,
  panOnScroll,
  panOnScrollMode,
  zoomOnPinch,
  selectionOnDrag,
  selectionMode,
  selectionKeyCode,
  autoPanOnNodeDrag,
  autoPanOnConnect,
  ariaLabelConfig,
  ...reactFlowProps
}: FlowCanvasSurfaceProps<NodeType, EdgeType>) {
  const resolvedBgVariant = resolveBackgroundVariant(backgroundVariant, showDotsBackground)
  const resolvedSecondaryBg = secondaryBackground
    ? resolveBackgroundVariant(secondaryBackground.variant ?? 'lines', true)
    : null
  const isSelectMode = interactionMode === 'select'
  const isFigmaGesture = gesturePreset === 'figma'
  const mergedAriaLabels = {
    ...(locale === 'en' ? FLOW_ARIA_LABELS_EN : FLOW_ARIA_LABELS_ZH),
    ...ariaLabelConfig,
  }

  const defaultMiniMapNodeColor = (node: NodeType) => {
    const tone = (node.data as { tone?: FlowTone } | undefined)?.tone
    if (tone && tone in MINIMAP_TONE_COLOR) {
      return MINIMAP_TONE_COLOR[tone]
    }
    return node.type === 'flow-group' ? 'rgba(99, 102, 241, 0.22)' : '#94a3b8'
  }

  const internalContainerRef = useRef<HTMLDivElement | null>(null)
  const mergedContainerRef = React.useMemo(
    () => assignMergedRef(containerRef, internalContainerRef),
    [containerRef],
  )
  const resolvedColorMode = useResolvedFlowColorMode(reactFlowProps.colorMode, internalContainerRef)

  const resolvedEdges = React.useMemo(
    () => resolveFlowEdgesForSelectedGroups(reactFlowProps.nodes, reactFlowProps.edges),
    [reactFlowProps.edges, reactFlowProps.nodes],
  )

  const inner = (
    <div
      ref={mergedContainerRef}
      data-testid={testId}
      data-interaction-mode={interactionMode}
      data-interactive={interactive ? 'true' : 'false'}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={cn(
        'relative flex-1 h-full w-full overflow-hidden select-none bg-[var(--abc-bg-canvas)]',
        containerClassName,
      )}
    >
      <ReactFlow<NodeType, EdgeType>
        proOptions={{ hideAttribution: true, ...proOptions }}
        connectionLineComponent={connectionLineComponent ?? FlowConnectionLine}
        nodesDraggable={nodesDraggable ?? interactive}
        nodesConnectable={nodesConnectable ?? interactive}
        elementsSelectable={elementsSelectable ?? interactive}
        edgesReconnectable={edgesReconnectable ?? interactive}
        reconnectRadius={reconnectRadius ?? 20}
        // 框选模式下仅中键拖拽平移（配合空格拖拽），避免右键被 d3-zoom 拦截导致画布右键菜单失效
        panOnDrag={panOnDrag ?? (isSelectMode ? [1] : true)}
        panActivationKeyCode={panActivationKeyCode ?? 'Space'}
        panOnScroll={panOnScroll ?? isFigmaGesture}
        panOnScrollMode={panOnScrollMode ?? (isFigmaGesture ? PanOnScrollMode.Free : undefined)}
        zoomOnPinch={zoomOnPinch ?? true}
        autoPanOnNodeDrag={autoPanOnNodeDrag ?? true}
        autoPanOnConnect={autoPanOnConnect ?? true}
        selectionOnDrag={selectionOnDrag ?? (isSelectMode && interactive)}
        selectionMode={selectionMode ?? SelectionMode.Partial}
        selectionKeyCode={selectionKeyCode ?? 'Shift'}
        ariaLabelConfig={mergedAriaLabels}
        className={cn(
          loading
            ? 'opacity-20 transition-opacity duration-300'
            : 'opacity-100 transition-opacity duration-300',
          className,
        )}
        {...reactFlowProps}
        colorMode={resolvedColorMode}
        edges={resolvedEdges}
      >
        {resolvedBgVariant && (
          <Background
            id="abc-flow-bg-primary"
            variant={resolvedBgVariant}
            gap={backgroundGap}
            size={backgroundDotSize}
            color={backgroundColor}
          />
        )}

        {resolvedSecondaryBg && secondaryBackground && (
          <Background
            id="abc-flow-bg-secondary"
            variant={resolvedSecondaryBg}
            gap={secondaryBackground.gap ?? backgroundGap * 5}
            size={secondaryBackground.size ?? 1}
            color={secondaryBackground.color ?? 'rgba(148, 163, 184, 0.22)'}
          />
        )}

        {(helperLines?.horizontal !== undefined || helperLines?.vertical !== undefined) && (
          <FlowViewportOverlay
            horizontalLine={helperLines.horizontal}
            verticalLine={helperLines.vertical}
          />
        )}

        {leftRailSlot && (
          <Panel position="top-left" className="!m-3.5 !z-20">
            {leftRailSlot}
          </Panel>
        )}

        {topCenterSlot && (
          <Panel position="top-center" className="!mt-3 !z-20">
            {topCenterSlot}
          </Panel>
        )}

        {topRightSlot && (
          <Panel position="top-right" className="!m-3.5 !z-20">
            {topRightSlot}
          </Panel>
        )}

        {bottomLeftSlot && (
          <Panel position="bottom-left" className="!m-3.5 !z-20">
            {bottomLeftSlot}
          </Panel>
        )}

        {bottomCenterSlot && (
          <Panel position="bottom-center" className="!mb-3.5 !z-20">
            {bottomCenterSlot}
          </Panel>
        )}

        {bottomRightSlot && (
          <Panel position="bottom-right" className="!m-3.5 !z-20">
            {bottomRightSlot}
          </Panel>
        )}

        {showMiniMap && (
          <MiniMap<NodeType>
            pannable
            zoomable
            nodeStrokeWidth={2}
            maskStrokeColor="var(--abc-primary, #4f46e5)"
            maskStrokeWidth={1.5}
            nodeColor={miniMapProps?.nodeColor ?? defaultMiniMapNodeColor}
            nodeComponent={
              miniMapProps?.nodeComponent ?? (enhancedMiniMap ? FlowMiniMapNode : undefined)
            }
            {...miniMapProps}
            style={{
              width: 184,
              height: 124,
              ...miniMapProps?.style,
            }}
            className={cn(
              '!rounded-xl !border !border-[var(--abc-border)] !bg-[var(--abc-bg-surface)]/95 !shadow-md',
              miniMapClassName,
              miniMapProps?.className,
            )}
          />
        )}

        {children}
      </ReactFlow>

      {overlaySlot}

      {loading && (
        <div
          data-testid="canvas-loading-overlay"
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-[var(--abc-bg-canvas)]/70 backdrop-blur-[1px]"
        >
          <div className="animate-pulse rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 px-4 py-2 text-xs font-medium text-[var(--abc-fg-muted)] shadow-sm">
            {loadingText}
          </div>
        </div>
      )}
    </div>
  )

  return withProvider ? <ReactFlowProvider>{inner}</ReactFlowProvider> : inner
}
