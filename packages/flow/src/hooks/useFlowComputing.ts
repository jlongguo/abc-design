import { useCallback, useMemo } from 'react'
import {
  useNodeConnections,
  useNodesData,
  useReactFlow,
  useUpdateNodeInternals,
  type Node,
} from '@xyflow/react'

export interface FlowUpstreamRecord<TData extends Record<string, unknown> = Record<string, unknown>> {
  nodeId: string
  sourceHandle: string | null
  targetHandle: string | null
  data: TData | undefined
}

/**
 * 响应式数据流计算 Hook (useFlowComputing)
 * 整合 ReactFlow v12 的 useNodeConnections + useNodesData + updateNodeData + useUpdateNodeInternals：
 * - 上游节点数据变化时仅精准触发本节点局部重算，零全图重渲染；
 * - 提供 refreshHandles()，在节点动态增删/移位 Handle 时通知 ReactFlow 即时校准连线锚点。
 */
export function useFlowComputing<
  TUpstreamData extends Record<string, unknown> = Record<string, unknown>,
  TSelfData extends Record<string, unknown> = Record<string, unknown>,
>(nodeId: string, targetHandleId?: string) {
  const { updateNodeData } = useReactFlow()
  const updateNodeInternals = useUpdateNodeInternals()

  const incomingConnections = useNodeConnections({
    id: nodeId,
    handleType: 'target',
    handleId: targetHandleId,
  })

  const upstreamIds = useMemo(
    () => Array.from(new Set(incomingConnections.map((conn) => conn.source))),
    [incomingConnections]
  )

  const upstreamNodes = useNodesData<Node<TUpstreamData>>(upstreamIds)

  const upstreamRecords = useMemo<FlowUpstreamRecord<TUpstreamData>[]>(() => {
    const dataById = new Map<string, TUpstreamData>()
    for (const item of upstreamNodes) {
      if (item?.id) dataById.set(item.id, item.data)
    }
    return incomingConnections.map((conn) => ({
      nodeId: conn.source,
      sourceHandle: conn.sourceHandle ?? null,
      targetHandle: conn.targetHandle ?? null,
      data: dataById.get(conn.source),
    }))
  }, [incomingConnections, upstreamNodes])

  const patchSelfData = useCallback(
    (patch: Partial<TSelfData> | ((prev: TSelfData) => Partial<TSelfData>)) => {
      updateNodeData(nodeId, patch as Record<string, unknown>)
    },
    [nodeId, updateNodeData]
  )

  const refreshHandles = useCallback(() => {
    updateNodeInternals(nodeId)
  }, [nodeId, updateNodeInternals])

  return {
    incomingConnections,
    upstreamRecords,
    patchSelfData,
    refreshHandles,
  }
}
