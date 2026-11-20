import React from 'react'
import {
  FLOW_MARKER_TYPE,
  FLOW_POSITION,
  FlowCornerResizer,
  FlowHandle,
  FlowInteractiveZone,
  FlowNodeCard,
  useFlowComputing,
  type FlowEdge,
  type FlowNode,
  type FlowNodeProps,
  type FlowQuickConnectItem,
  type FlowTone,
} from '@abc-design/flow'
import { Button, Input, StatusTag } from '@abc-design/react'
import { Calculator, Cpu, Globe, Plus, Sparkles, Terminal, Trash2 } from 'lucide-react'

export interface ComputeInputData extends Record<string, unknown> {
  label: string
  value: number
  tone: FlowTone
  lockedCore?: boolean
}

export interface ComputeProcessorData extends Record<string, unknown> {
  label: string
  multiplier: number
  extraPorts: string[]
  computedValue?: number
  upstreamCount?: number
  tone: FlowTone
}

export interface QuickCreatedData extends Record<string, unknown> {
  label: string
  kind: string
  tone: FlowTone
  note?: string
}

export type ComputeInputNodeType = FlowNode<ComputeInputData, 'compute-input'>
export type ComputeProcessorNodeType = FlowNode<ComputeProcessorData, 'compute-processor'>
export type QuickCreatedNodeType = FlowNode<QuickCreatedData, 'quick-node'>

export type AdvancedDemoNode =
  | ComputeInputNodeType
  | ComputeProcessorNodeType
  | QuickCreatedNodeType
  | FlowNode<Record<string, unknown>, 'flow-group'>

/**
 * 响应式数据源节点：演示 FlowInteractiveZone (nodrag/nowheel/nopan) 内嵌输入 + FlowCornerResizer 单角缩放
 */
export const ComputeInputNode: React.FC<FlowNodeProps<ComputeInputNodeType>> = ({
  id,
  data,
  selected,
}) => {
  const { patchSelfData } = useFlowComputing<Record<string, unknown>, ComputeInputData>(id)

  return (
    <div
      className="relative flex h-full w-full flex-col justify-between rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-xs"
      style={{ minWidth: 210, minHeight: 118 }}
    >
      <FlowCornerResizer
        visible={Boolean(selected)}
        minWidth={210}
        minHeight={118}
        tone={data.tone}
      />
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)]">
          <Calculator size={13} className="text-[var(--abc-primary)]" />
          <span className="truncate">{data.label}</span>
        </div>
        {data.lockedCore && <StatusTag tone="warning" label="核心受保护" />}
      </div>

      <FlowInteractiveZone className="mt-2 space-y-1">
        <label className="block text-[10px] font-medium text-[var(--abc-fg-muted)]">
          数值输入 (已隔离拖拽/滚轮)
        </label>
        <Input
          size="sm"
          type="number"
          value={String(data.value)}
          onChange={(e) => {
            const parsed = Number(e.target.value)
            patchSelfData({ value: Number.isFinite(parsed) ? parsed : 0 })
          }}
        />
      </FlowInteractiveZone>

      <FlowHandle id="out" type="source" position={FLOW_POSITION.Right} tone="info" size="md" />
    </div>
  )
}

/**
 * 响应式计算节点：基于 useFlowComputing (useNodeConnections + useNodesData + updateNodeData)
 * 实时汇总上游数值，并支持动态增删输出端口（调用 useUpdateNodeInternals 刷新端口坐标）。
 */
export const ComputeProcessorNode: React.FC<FlowNodeProps<ComputeProcessorNodeType>> = ({
  id,
  data,
  selected,
}) => {
  const { upstreamRecords, patchSelfData, refreshHandles } = useFlowComputing<
    ComputeInputData,
    ComputeProcessorData
  >(id)

  const upstreamSum = upstreamRecords.reduce((acc, item) => {
    const raw = item.data?.value
    return acc + (typeof raw === 'number' && Number.isFinite(raw) ? raw : 0)
  }, 0)
  const total = upstreamSum * (data.multiplier || 1)
  const extraPorts = Array.isArray(data.extraPorts) ? data.extraPorts : []

  const handleAddPort = () => {
    const nextPort = `branch-${extraPorts.length + 1}`
    patchSelfData({ extraPorts: [...extraPorts, nextPort] })
    refreshHandles()
  }

  const handleRemovePort = () => {
    if (extraPorts.length === 0) return
    patchSelfData({ extraPorts: extraPorts.slice(0, -1) })
    refreshHandles()
  }

  return (
    <FlowNodeCard
      tone={data.tone}
      title={data.label}
      subtitle="useFlowComputing 实时联动"
      icon={<Cpu size={13} />}
      selected={selected}
      width={252}
      metaRows={[
        { label: '上游连接', value: `${upstreamRecords.length} 路 (和 ${upstreamSum})` },
        { label: '实时计算结果', value: `${upstreamSum} × ${data.multiplier} = ${total}` },
      ]}
      inputHandle={
        <FlowHandle id="in" type="target" position={FLOW_POSITION.Left} tone="info" size="md" />
      }
      outputs={[
        {
          id: 'result',
          label: `输出 = ${total}`,
          tone: 'success',
          handle: (
            <FlowHandle id="result" type="source" position={FLOW_POSITION.Right} tone="success" />
          ),
        },
        ...extraPorts.map((portId) => ({
          id: portId,
          label: `动态端口 · ${portId}`,
          tone: 'warning' as const,
          handle: (
            <FlowHandle
              id={portId}
              type="source"
              position={FLOW_POSITION.Right}
              tone="warning"
            />
          ),
        })),
      ]}
    >
      <FlowInteractiveZone className="mt-1 flex items-center justify-between gap-1.5 border-t border-[var(--abc-border-subtle)] pt-1.5">
        <span className="text-[10px] text-[var(--abc-fg-muted)]">动态 Handle</span>
        <div className="flex items-center gap-1">
          <Button
            size="xs"
            variant="outline"
            pressScale={false}
            icon={<Plus size={11} />}
            onClick={handleAddPort}
          >
            加端口
          </Button>
          {extraPorts.length > 0 && (
            <Button
              size="xs"
              variant="ghost"
              pressScale={false}
              icon={<Trash2 size={11} />}
              onClick={handleRemovePort}
            >
              减端口
            </Button>
          )}
        </div>
      </FlowInteractiveZone>
    </FlowNodeCard>
  )
}

/**
 * 拖到空白松手后快速创建的动作节点
 */
export const QuickCreatedNode: React.FC<FlowNodeProps<QuickCreatedNodeType>> = ({
  data,
  selected,
}) => (
  <FlowNodeCard
    tone={data.tone}
    title={data.label}
    subtitle={data.kind}
    icon={<Sparkles size={13} />}
    selected={selected}
    width={208}
    metaRows={data.note ? [{ label: '说明', value: data.note }] : undefined}
    inputHandle={<FlowHandle id="in" type="target" position={FLOW_POSITION.Left} tone="info" />}
    outputs={[
      {
        id: 'out',
        label: '继续流转',
        tone: 'info',
        handle: <FlowHandle id="out" type="source" position={FLOW_POSITION.Right} tone="info" />,
      },
    ]}
  />
)

export const QUICK_CONNECT_CATALOG: FlowQuickConnectItem[] = [
  {
    key: 'http-fetch',
    label: 'HTTP 请求节点',
    description: '调用外部 Webhook 或 REST API',
    group: '数据接入',
    keywords: 'http api fetch webhook 请求',
    icon: <Globe size={13} />,
    tone: 'blue',
  },
  {
    key: 'compute-processor',
    label: '响应式计算节点',
    description: '自动读取上游数值并支持动态端口',
    group: '计算与转换',
    keywords: 'compute calc processor 动态端口 计算',
    icon: <Cpu size={13} />,
    tone: 'green',
  },
  {
    key: 'script-eval',
    label: '表达式清洗节点',
    description: '字段映射、正则提取与脱敏',
    group: '计算与转换',
    keywords: 'script transform regex 清洗 脚本',
    icon: <Terminal size={13} />,
    tone: 'amber',
  },
]

export function buildInitialAdvancedNodes(): AdvancedDemoNode[] {
  return [
    {
      id: 'grp-compute',
      type: 'flow-group',
      position: { x: 270, y: 24 },
      style: { width: 320, height: 248 },
      data: {
        title: '计算子流分组（可拖入/拖出节点）',
        badge: 'Sub-Flow',
        tone: 'blue',
        dashed: true,
        resizable: true,
      },
    },
    {
      id: 'in-base',
      type: 'compute-input',
      position: { x: 20, y: 40 },
      style: { width: 214, height: 122 },
      data: { label: '输入 A（受保护）', value: 12, tone: 'blue', lockedCore: true },
    },
    {
      id: 'in-bonus',
      type: 'compute-input',
      position: { x: 20, y: 186 },
      style: { width: 214, height: 122 },
      data: { label: '输入 B（可拖入分组）', value: 8, tone: 'green' },
    },
    {
      id: 'proc-1',
      type: 'compute-processor',
      parentId: 'grp-compute',
      position: { x: 26, y: 46 },
      data: {
        label: '聚合计算器',
        multiplier: 2,
        extraPorts: [],
        tone: 'rose',
      },
    },
    {
      id: 'out-sink',
      type: 'quick-node',
      position: { x: 642, y: 102 },
      data: {
        label: '结果输出槽',
        kind: 'sink · 可拖拉空处建点',
        tone: 'amber',
        note: '从任意端口拉线至空白处松手试试',
      },
    },
  ]
}

export function buildInitialAdvancedEdges(): FlowEdge[] {
  return [
    {
      id: 'e-a-proc',
      source: 'in-base',
      sourceHandle: 'out',
      target: 'proc-1',
      targetHandle: 'in',
      type: 'flow-labeled',
      markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
      data: { label: '输入流', tone: 'primary', animated: true },
    },
    {
      id: 'e-b-proc',
      source: 'in-bonus',
      sourceHandle: 'out',
      target: 'proc-1',
      targetHandle: 'in',
      type: 'flow-labeled',
      markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
      data: { svgLabel: '附加量', tone: 'success' },
    },
    {
      id: 'e-proc-sink',
      source: 'proc-1',
      sourceHandle: 'result',
      target: 'out-sink',
      targetHandle: 'in',
      type: 'flow-labeled',
      markerEnd: { type: FLOW_MARKER_TYPE.ArrowClosed, width: 14, height: 14 },
      data: { label: '聚合输出', tone: 'warning' },
    },
  ]
}
