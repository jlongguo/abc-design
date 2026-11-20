import React from 'react'
import { NodeToolbar, Position, type Node, type NodeProps } from '@xyflow/react'
import { FolderKanban, Palette, Plus, Trash2 } from 'lucide-react'
import { FlowNodeResizer } from './FlowNodeResizer'
import { FlowNodeToolbar, type FlowNodeToolbarItem } from './FlowNodeToolbar'
import { FlowSectionFrame } from './FlowSectionFrame'
import type { FlowTone } from './flowTokens'

export interface FlowGroupNodeData extends Record<string, unknown> {
  /** 分组标题 */
  title?: React.ReactNode
  /** 分组说明文案 */
  description?: React.ReactNode
  /** 语义色调（默认 'blue'） */
  tone?: FlowTone
  /** 虚线边框开关（默认 true） */
  dashed?: boolean
  /** 选中时是否显示拖拽缩放器（默认 true） */
  resizable?: boolean
  /** 最小宽高约束 */
  minWidth?: number
  minHeight?: number
  /** 右上角徽标（如子节点数量） */
  badge?: React.ReactNode
  /** 切换色调回调（提供时在 NodeToolbar 渲染切色按钮） */
  onCycleTone?: (nodeId: string, nextTone: FlowTone) => void
  /** 在分组内快捷新建子节点回调 */
  onAddChild?: (nodeId: string) => void
  /** 删除分组回调 */
  onDelete?: (nodeId: string) => void
}

export type FlowGroupNodeType = Node<FlowGroupNodeData, 'flow-group'>

const TONE_CYCLE: readonly FlowTone[] = ['blue', 'green', 'amber', 'rose', 'slate']

/**
 * ReactFlow 原生子流程分组容器节点 (FlowGroupNode)
 * 集成 FlowSectionFrame + FlowNodeResizer 拖拽调尺寸 + ReactFlow NodeToolbar 顶部悬浮微操作条，
 * 原生支持 parentId / extent="parent" / expandParent 子流程嵌套交互。
 */
export const FlowGroupNode: React.FC<NodeProps<FlowGroupNodeType>> = ({
  id,
  data,
  selected = false,
}) => {
  const tone: FlowTone = data?.tone ?? 'blue'
  const dashed = data?.dashed ?? true
  const resizable = data?.resizable ?? true
  const minWidth = data?.minWidth ?? 260
  const minHeight = data?.minHeight ?? 180

  const toolbarItems: FlowNodeToolbarItem[] = []
  if (data?.onAddChild) {
    toolbarItems.push({
      key: 'add-child',
      icon: <Plus size={13} />,
      label: '在分组内新增子节点',
      onClick: () => data.onAddChild?.(id),
    })
  }
  if (data?.onCycleTone) {
    toolbarItems.push({
      key: 'cycle-tone',
      icon: <Palette size={13} />,
      label: '切换分组语义色调',
      onClick: () => {
        const idx = TONE_CYCLE.indexOf(tone)
        const nextTone = TONE_CYCLE[(idx + 1) % TONE_CYCLE.length]!
        data.onCycleTone?.(id, nextTone)
      },
    })
  }
  if (data?.onDelete) {
    toolbarItems.push({
      key: 'delete-group',
      icon: <Trash2 size={13} />,
      label: '移除分组',
      danger: true,
      dividerBefore: toolbarItems.length > 0,
      onClick: () => data.onDelete?.(id),
    })
  }

  return (
    <div data-slot="flow-group-node" className="relative h-full w-full">
      {resizable && (
        <FlowNodeResizer
          tone={tone}
          isVisible={selected}
          minWidth={minWidth}
          minHeight={minHeight}
        />
      )}

      {toolbarItems.length > 0 && (
        <NodeToolbar isVisible={selected} position={Position.Top} offset={10}>
          <FlowNodeToolbar items={toolbarItems} size="xs" aria-label="分组容器快捷操作" />
        </NodeToolbar>
      )}

      <FlowSectionFrame
        title={data?.title ?? '子流程分组'}
        description={data?.description}
        icon={<FolderKanban size={13} />}
        badge={
          data?.badge ? (
            <span className="rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/85 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[var(--abc-fg-secondary)]">
              {data.badge}
            </span>
          ) : undefined
        }
        tone={tone}
        align="top-left"
        dashed={dashed}
        selected={selected}
        width="100%"
        height="100%"
        minWidth={minWidth}
        minHeight={minHeight}
      />
    </div>
  )
}
