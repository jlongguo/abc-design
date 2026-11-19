import React from 'react'
import { cn } from '@abc-design/react'
import {
  Background,
  BackgroundVariant,
  MiniMap,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  type Edge,
  type Node,
  type ReactFlowProps,
} from '@xyflow/react'

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
  /** 背景点阵样式开关（默认 true） */
  showDotsBackground?: boolean
  /** 点阵间距（默认 18） */
  backgroundGap?: number
  /** 点阵圆点半径（默认 1.25） */
  backgroundDotSize?: number
  /** 点阵颜色（默认柔和浅灰，支持传入 CSS 变量） */
  backgroundColor?: string
  /** 左上角悬浮插槽（如 FloatingIconRail） */
  leftRailSlot?: React.ReactNode
  /** 顶部居中悬浮插槽（如环境摘要胶囊） */
  topCenterSlot?: React.ReactNode
  /** 右上角悬浮插槽 */
  topRightSlot?: React.ReactNode
  /** 左下角悬浮插槽（如 FlowViewportControls） */
  bottomLeftSlot?: React.ReactNode
  /** 右下角悬浮插槽 */
  bottomRightSlot?: React.ReactNode
  /** 是否展示缩略图（默认关闭保持画布清爽） */
  showMiniMap?: boolean
  /** MiniMap 附加类名 */
  miniMapClassName?: string
  /** 画布加载态遮罩 */
  loading?: boolean
  /** 加载态提示文案 */
  loadingText?: string
  /** 画布内自定义子元素（额外 Panel / SVG defs 等） */
  children?: React.ReactNode
  /** 舞台外层浮层插槽（如画中画小窗） */
  overlaySlot?: React.ReactNode
}

/**
 * ABC Design 主题化 ReactFlow 画布容器 (FlowCanvasSurface)
 * 统一封装浅色/暗色点阵背景、四角 Panel 布局槽、按需 MiniMap、隐藏默认水印与加载遮罩，
 * 屏蔽重复的 ReactFlow 样板配置，保持 100% 业务无关。
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
  showDotsBackground = true,
  backgroundGap = 18,
  backgroundDotSize = 1.25,
  backgroundColor = 'rgba(148, 163, 184, 0.35)',
  leftRailSlot,
  topCenterSlot,
  topRightSlot,
  bottomLeftSlot,
  bottomRightSlot,
  showMiniMap = false,
  miniMapClassName,
  loading = false,
  loadingText = '正在加载画布...',
  children,
  overlaySlot,
  className,
  proOptions,
  ...reactFlowProps
}: FlowCanvasSurfaceProps<NodeType, EdgeType>) {
  const inner = (
    <div
      ref={containerRef}
      data-testid={testId}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={cn(
        'relative flex-1 h-full w-full overflow-hidden select-none bg-[var(--abc-bg-canvas)]',
        containerClassName,
      )}
    >
      <ReactFlow<NodeType, EdgeType>
        proOptions={{ hideAttribution: true, ...proOptions }}
        className={cn(
          loading
            ? 'opacity-20 transition-opacity duration-300'
            : 'opacity-100 transition-opacity duration-300',
          className,
        )}
        {...reactFlowProps}
      >
        {showDotsBackground && (
          <Background
            variant={BackgroundVariant.Dots}
            gap={backgroundGap}
            size={backgroundDotSize}
            color={backgroundColor}
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

        {bottomRightSlot && (
          <Panel position="bottom-right" className="!m-3.5 !z-20">
            {bottomRightSlot}
          </Panel>
        )}

        {showMiniMap && (
          <MiniMap
            pannable
            zoomable
            nodeStrokeWidth={2}
            className={cn(
              '!rounded-xl !border !border-[var(--abc-border)] !bg-[var(--abc-bg-surface)]/95 !shadow-md',
              miniMapClassName,
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
