import { useCallback, useState } from 'react'
import {
  useReactFlow,
  type FinalConnectionState,
  type HandleType,
  type OnConnectEnd,
} from '@xyflow/react'

export interface FlowDropConnectPending {
  /** 相对于画布容器左上角的屏幕坐标（用于锚定 FlowQuickConnectMenu） */
  screenPosition: { x: number; y: number }
  /** 转换后的 ReactFlow 画布世界坐标（用于直接放置新建节点） */
  flowPosition: { x: number; y: number }
  /** 发起连线的源节点 ID */
  fromNodeId: string
  /** 发起连线的端口 ID */
  fromHandleId: string | null
  /** 发起连线的端口方向（source 或 target） */
  fromHandleType: HandleType
}

export interface UseFlowDropToConnectOptions {
  /** 画布外层容器 ref（用于换算相对容器坐标，防止弹出菜单错位） */
  containerRef: React.RefObject<HTMLElement | null>
  /** 是否禁用拖到空白处松手建点（例如画布只读或流程运行中） */
  disabled?: boolean
}

export interface UseFlowDropToConnectReturn {
  /** 当前等待用户选择新节点的挂起态（null 表示菜单关闭） */
  pendingDrop: FlowDropConnectPending | null
  /** 直接传给 FlowCanvasSurface / ReactFlow 的 onConnectEnd 回调 */
  handleConnectEnd: OnConnectEnd
  /** 关闭快速建点浮层 */
  dismissDrop: () => void
}

function extractClientPoint(event: MouseEvent | TouchEvent): { clientX: number; clientY: number } | null {
  if ('changedTouches' in event && event.changedTouches.length > 0) {
    const touch = event.changedTouches[0]!
    return { clientX: touch.clientX, clientY: touch.clientY }
  }
  if ('clientX' in event && typeof event.clientX === 'number') {
    return { clientX: event.clientX, clientY: event.clientY }
  }
  return null
}

/**
 * 拖到空白处松手自动弹出建点菜单 Hook (useFlowDropToConnect)
 * 对齐 Dify / Coze / n8n 消费级交互范式：从任意端口拉出连线并在画布空白处松手时，
 * 自动借助 ReactFlow connectionState.isValid 与 screenToFlowPosition 精准唤起 FlowQuickConnectMenu。
 */
export function useFlowDropToConnect({
  containerRef,
  disabled = false,
}: UseFlowDropToConnectOptions): UseFlowDropToConnectReturn {
  const { screenToFlowPosition } = useReactFlow()
  const [pendingDrop, setPendingDrop] = useState<FlowDropConnectPending | null>(null)

  const dismissDrop = useCallback(() => {
    setPendingDrop(null)
  }, [])

  const handleConnectEnd = useCallback<OnConnectEnd>(
    (event: MouseEvent | TouchEvent, connectionState: FinalConnectionState) => {
      if (disabled) return
      // 若已成功吸附到有效目标端口，则由常规 onConnect 处理，不弹出空白建点菜单
      if (connectionState.isValid) return
      const fromNode = connectionState.fromNode
      if (!fromNode?.id) return

      const point = extractClientPoint(event)
      if (!point) return

      const rect = containerRef.current?.getBoundingClientRect()
      const screenPosition = rect
        ? {
            x: Math.round(point.clientX - rect.left),
            y: Math.round(point.clientY - rect.top),
          }
        : { x: Math.round(point.clientX), y: Math.round(point.clientY) }

      const flowPos = screenToFlowPosition({ x: point.clientX, y: point.clientY })
      setPendingDrop({
        screenPosition,
        flowPosition: { x: Math.round(flowPos.x), y: Math.round(flowPos.y) },
        fromNodeId: fromNode.id,
        fromHandleId: connectionState.fromHandle?.id ?? null,
        fromHandleType: connectionState.fromHandle?.type ?? 'source',
      })
    },
    [containerRef, disabled, screenToFlowPosition]
  )

  return {
    pendingDrop,
    handleConnectEnd,
    dismissDrop,
  }
}
