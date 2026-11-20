import React from 'react'
import { cn } from '@abc-design/react'
import {
  Handle,
  useConnection,
  useNodeConnections,
  useNodeId,
  type HandleProps,
} from '@xyflow/react'
import { FLOW_PORT_TONE_STYLES, type FlowPortTone } from './flowTokens'

export type FlowHandleSize = 'sm' | 'md'

export interface FlowHandleProps extends Omit<HandleProps, 'isConnectable'> {
  /** 语义色调（默认 'neutral'） */
  tone?: FlowPortTone
  /** 连接点视觉尺寸（默认 'sm' = 10px，'md' = 12px） */
  size?: FlowHandleSize
  /** 最大允许连接数（借助 ReactFlow useNodeConnections 自动计数并限制超限连线） */
  connectionLimit?: number
  /** 显式指定节点 ID（在 ReactFlow 自定义节点内无需传入，自动通过 useNodeId 读取） */
  nodeId?: string
  /** 是否允许发起/接收连线（默认 true，与 connectionLimit 共同计算最终可连性） */
  isConnectable?: boolean
  /** 拖拽连线过程中是否通过 useConnection 全局感知并高亮可连目标端口（默认 true） */
  highlightOnConnect?: boolean
  /** 可选悬停提示文案 */
  title?: string
  /** 自定义类名 */
  className?: string
  style?: React.CSSProperties
}

const HANDLE_SIZE_CLASS: Record<FlowHandleSize, string> = {
  sm: '!h-2.5 !w-2.5',
  md: '!h-3 !w-3',
}

interface FlowHandleRendererProps extends Omit<FlowHandleProps, 'nodeId'> {
  connectionCount: number
  isConnectionCandidate?: boolean
  isConnectionDimmed?: boolean
}

const FlowHandleRenderer: React.FC<FlowHandleRendererProps> = ({
  id,
  type,
  position,
  tone = 'neutral',
  size = 'sm',
  connectionLimit,
  connectionCount,
  isConnectable = true,
  highlightOnConnect: _highlightOnConnect,
  isConnectionCandidate = false,
  isConnectionDimmed = false,
  title,
  className,
  style,
  ...rest
}) => {
  const limitReached =
    typeof connectionLimit === 'number' &&
    connectionLimit >= 0 &&
    connectionCount >= connectionLimit
  const resolvedConnectable = isConnectable && !limitReached
  const toneStyle = FLOW_PORT_TONE_STYLES[tone] ?? FLOW_PORT_TONE_STYLES.neutral

  return (
    <Handle
      id={id}
      type={type}
      position={position}
      isConnectable={resolvedConnectable}
      data-slot="flow-handle"
      data-tone={tone}
      data-connection-count={connectionCount}
      data-limit-reached={limitReached ? 'true' : 'false'}
      data-connection-candidate={isConnectionCandidate && resolvedConnectable ? 'true' : 'false'}
      title={
        title ??
        (typeof connectionLimit === 'number'
          ? `连接数 ${connectionCount}/${connectionLimit}`
          : undefined)
      }
      style={style}
      className={cn(
        '!border-2 !border-[var(--abc-bg-surface)] !shadow-2xs transition-[box-shadow,opacity,transform] duration-150',
        HANDLE_SIZE_CLASS[size],
        toneStyle.dot,
        resolvedConnectable
          ? 'hover:!ring-4 hover:!ring-[var(--abc-ring)]'
          : '!opacity-45 !cursor-not-allowed',
        isConnectionCandidate &&
          resolvedConnectable &&
          '!ring-4 !ring-[var(--abc-primary)]/55 !scale-125',
        isConnectionDimmed && '!opacity-35',
        className
      )}
      {...rest}
    />
  )
}

interface BoundFlowHandleProps extends Omit<FlowHandleProps, 'nodeId'> {
  resolvedNodeId: string
}

const BoundFlowHandle: React.FC<BoundFlowHandleProps> = ({
  resolvedNodeId,
  id,
  type,
  highlightOnConnect = true,
  ...rest
}) => {
  const connections = useNodeConnections({
    id: resolvedNodeId,
    handleType: type,
    handleId: id ?? undefined,
  })
  const activeConnection = useConnection()

  const isDraggingWire = Boolean(highlightOnConnect && activeConnection.inProgress)
  const fromNodeId = activeConnection.fromNode?.id
  const fromHandleType = activeConnection.fromHandle?.type
  const isDifferentNode = Boolean(fromNodeId && fromNodeId !== resolvedNodeId)
  const isOppositeType = Boolean(fromHandleType && fromHandleType !== type)
  const isConnectionCandidate = isDraggingWire && isDifferentNode && isOppositeType
  const isConnectionDimmed = isDraggingWire && (!isDifferentNode || !isOppositeType)

  return (
    <FlowHandleRenderer
      id={id}
      type={type}
      connectionCount={connections.length}
      isConnectionCandidate={isConnectionCandidate}
      isConnectionDimmed={isConnectionDimmed}
      {...rest}
    />
  )
}

/**
 * 主题化语义 ReactFlow 连接点 (FlowHandle)
 * 集成 5 套端口语义色、亮暗描边隔离、悬停放大提示以及基于 ReactFlow useNodeConnections 的最大连接数约束。
 * 当脱离 ReactFlow Node 上下文独立预览渲染时自动安全降级，避免触发 ReactFlow 无 nodeId 异常。
 */
export const FlowHandle: React.FC<FlowHandleProps> = ({ nodeId, ...rest }) => {
  const contextNodeId = useNodeId()
  const resolvedNodeId = nodeId ?? contextNodeId

  if (resolvedNodeId) {
    return <BoundFlowHandle resolvedNodeId={resolvedNodeId} {...rest} />
  }
  return <FlowHandleRenderer connectionCount={0} {...rest} />
}
