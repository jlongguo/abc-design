import React from 'react'
import { NodeToolbar, Position, type Node, type NodeProps } from '@xyflow/react'
import { FolderKanban, Palette, Plus, Trash2 } from 'lucide-react'
import { FlowNodeResizer, type FlowNodeResizerProps } from './FlowNodeResizer'
import { FlowNodeToolbar, type FlowNodeToolbarItem } from './FlowNodeToolbar'
import { FlowSectionFrame } from './FlowSectionFrame'
import type { FlowTone } from './flowTokens'

export interface FlowGroupNodeData extends Record<string, unknown> {
  /** 分组标题 */
  title?: React.ReactNode
  /** 分组说明文案 */
  description?: React.ReactNode
  /** 自定义标题前置图标（默认 FolderKanban） */
  icon?: React.ReactNode
  /** 语义色调（默认 'blue'） */
  tone?: FlowTone
  /** 虚线边框开关（默认 true） */
  dashed?: boolean
  /** 选中时是否显示拖拽缩放器（默认 true） */
  resizable?: boolean
  /** 是否允许编辑交互（默认 true；false 时隐藏缩放器并禁用编辑操作） */
  interactive?: boolean
  /** 是否处于折叠态（折叠时隐藏缩放器并使用紧凑最小高度） */
  collapsed?: boolean
  /** 最小宽高约束 */
  minWidth?: number
  minHeight?: number
  /** 右上角徽标（如子节点数量） */
  badge?: React.ReactNode
  /** 右上角自定义操作区（如折叠/展开或快捷新增按钮） */
  headerExtra?: React.ReactNode
  /** 分组容器内部可选自定义正文内容（如便签表单） */
  bodyContent?: React.ReactNode
  /** 自定义 data-testid（挂载到内部 FlowSectionFrame 便于精准定位） */
  testId?: string
  /** 附加或自定义顶部悬浮工具条操作项 */
  toolbarItems?: ReadonlyArray<FlowNodeToolbarItem>
  /** 切换色调回调（提供时在 NodeToolbar 渲染切色按钮） */
  onCycleTone?: (nodeId: string, nextTone: FlowTone) => void
  /** 在分组内快捷新建子节点回调 */
  onAddChild?: (nodeId: string) => void
  /** 删除分组回调 */
  onDelete?: (nodeId: string) => void
  /** 拖拽调整尺寸结束回调（用于外部持久化容器宽高与坐标） */
  onResizeEnd?: FlowNodeResizerProps['onResizeEnd']
  /** 双击分组容器回调（如双击便签进入编辑态） */
  onDoubleClick?: React.MouseEventHandler<HTMLDivElement>
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
  const interactive = data?.interactive ?? true
  const collapsed = Boolean(data?.collapsed)
  const resizable = (data?.resizable ?? true) && interactive && !collapsed
  const minWidth = data?.minWidth ?? 260
  const minHeight = collapsed ? (data?.minHeight ?? 48) : (data?.minHeight ?? 180)

  const toolbarItems: FlowNodeToolbarItem[] = []
  if (data?.onAddChild && interactive) {
    toolbarItems.push({
      key: 'add-child',
      icon: <Plus size={13} />,
      label: '在分组内新增子节点',
      onClick: () => data.onAddChild?.(id),
    })
  }
  if (data?.onCycleTone && interactive) {
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
  if (data?.toolbarItems && data.toolbarItems.length > 0) {
    toolbarItems.push(...data.toolbarItems)
  }
  if (data?.onDelete && interactive) {
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
          onResizeEnd={data?.onResizeEnd}
        />
      )}

      {toolbarItems.length > 0 && (
        <NodeToolbar isVisible={selected} position={Position.Top} offset={10}>
          <FlowNodeToolbar items={toolbarItems} size="xs" aria-label="分组容器快捷操作" />
        </NodeToolbar>
      )}

      <FlowSectionFrame
        data-testid={data?.testId}
        title={data?.title !== undefined ? data.title : '子流程分组'}
        description={data?.description}
        icon={data?.icon !== undefined ? data.icon : <FolderKanban size={13} />}
        badge={
          data?.badge ? (
            <span className="rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/85 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[var(--abc-fg-secondary)]">
              {data.badge}
            </span>
          ) : undefined
        }
        headerExtra={data?.headerExtra}
        onDoubleClick={data?.onDoubleClick}
        tone={tone}
        align="top-left"
        dashed={dashed}
        selected={selected}
        width="100%"
        height="100%"
        minWidth={minWidth}
        minHeight={minHeight}
      >
        {data?.bodyContent}
      </FlowSectionFrame>
    </div>
  )
}
