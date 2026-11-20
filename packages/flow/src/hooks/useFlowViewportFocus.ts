import { useCallback, useEffect, useRef } from 'react'
import { useNodesInitialized, useReactFlow } from '@xyflow/react'

export interface FocusFlowNodeOptions {
  /** 平滑飞行动画时长（毫秒，默认 280） */
  duration?: number
  /** 目标缩放倍率（默认保持当前缩放且不低于 0.9） */
  zoom?: number
  /** 右侧滑出抽屉/属性面板占用宽度（像素），镜头会自动左偏一半宽度确保节点完全可见 */
  rightInsetPx?: number
}

export interface UseFlowViewportFocusOptions {
  /** 首次所有节点完成 DOM 尺寸测量后是否自动 fitView（默认 false） */
  autoFitOnInitialized?: boolean
  /** 自动 fitView 内边距比例（默认 0.2） */
  autoFitPadding?: number
}

/**
 * 视口动画聚焦与首次测量自动适配 Hook (useFlowViewportFocus)
 * 集成 ReactFlow setCenter / fitView / useNodesInitialized，支持右侧属性面板避让偏移。
 */
export function useFlowViewportFocus(options: UseFlowViewportFocusOptions = {}) {
  const { autoFitOnInitialized = false, autoFitPadding = 0.2 } = options
  const reactFlow = useReactFlow()
  const nodesInitialized = useNodesInitialized()
  const didInitialFitRef = useRef(false)

  useEffect(() => {
    if (!autoFitOnInitialized || !nodesInitialized || didInitialFitRef.current) return
    didInitialFitRef.current = true
    reactFlow.fitView({ padding: autoFitPadding, duration: 240, maxZoom: 1 }).catch(() => {})
  }, [autoFitOnInitialized, autoFitPadding, nodesInitialized, reactFlow])

  const focusNode = useCallback(
    (nodeId: string, focusOptions: FocusFlowNodeOptions = {}) => {
      const node = reactFlow.getNode(nodeId)
      if (!node) return false
      const width =
        node.measured?.width ??
        (typeof node.width === 'number' ? node.width : 240)
      const height =
        node.measured?.height ??
        (typeof node.height === 'number' ? node.height : 120)
      const currentZoom = reactFlow.getZoom()
      const targetZoom = focusOptions.zoom ?? Math.max(0.9, Math.min(1.15, currentZoom || 1))
      const insetOffsetWorld = focusOptions.rightInsetPx
        ? focusOptions.rightInsetPx / (2 * targetZoom)
        : 0
      const centerX = node.position.x + width / 2 + insetOffsetWorld
      const centerY = node.position.y + height / 2
      reactFlow
        .setCenter(centerX, centerY, {
          zoom: targetZoom,
          duration: focusOptions.duration ?? 280,
        })
        .catch(() => {})
      return true
    },
    [reactFlow]
  )

  const focusNodes = useCallback(
    (nodeIds: ReadonlyArray<string>, padding = 0.22, duration = 260) => {
      const targets = nodeIds
        .map((id) => ({ id }))
        .filter((item) => Boolean(reactFlow.getNode(item.id)))
      if (targets.length === 0) return false
      reactFlow.fitView({ nodes: targets, padding, duration, maxZoom: 1.2 }).catch(() => {})
      return true
    },
    [reactFlow]
  )

  return {
    nodesInitialized,
    focusNode,
    focusNodes,
  }
}
