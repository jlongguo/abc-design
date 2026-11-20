import React from 'react'
import { Button, cn } from '@abc-design/react'
import {
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignHorizontalSpaceAround,
  AlignStartHorizontal,
  AlignStartVertical,
  AlignVerticalSpaceAround,
  Copy,
  FolderPlus,
  Trash2,
} from 'lucide-react'
import type { FlowNodeAlignment } from '../utils/flowAdvancedGraph'

export interface FlowAlignmentToolbarLabels {
  selectedCount?: (count: number) => string
  left?: string
  centerX?: string
  right?: string
  top?: string
  centerY?: string
  bottom?: string
  distributeH?: string
  distributeV?: string
  group?: string
  duplicate?: string
  delete?: string
}

export interface FlowAlignmentToolbarProps {
  /** 当前已选中节点数量（< 2 时自动隐藏） */
  selectedCount: number
  /** 对齐或等距分布回调 */
  onAlign: (alignment: FlowNodeAlignment) => void
  /** 可选：将选中节点合并为子流程分组 */
  onGroupSelected?: () => void
  /** 可选：复制选中子图 */
  onDuplicateSelected?: () => void
  /** 可选：批量删除选中节点 */
  onDeleteSelected?: () => void
  /** 附加自定义操作节点 */
  extraActions?: React.ReactNode
  /** 禁用状态（例如流程运行中或锁定态） */
  disabled?: boolean
  /** 国际化文案 */
  labels?: FlowAlignmentToolbarLabels
  className?: string
  testId?: string
}

/**
 * 多选节点对齐与批量编辑悬浮工具条 (FlowAlignmentToolbar)
 * 选中 ≥ 2 个画布节点时自动浮现，提供 Figma 级 6 向对齐、水平/垂直等距分布、合并分组与批量编辑能力。
 */
export const FlowAlignmentToolbar: React.FC<FlowAlignmentToolbarProps> = ({
  selectedCount,
  onAlign,
  onGroupSelected,
  onDuplicateSelected,
  onDeleteSelected,
  extraActions,
  disabled = false,
  labels,
  className,
  testId = 'abc-flow-alignment-toolbar',
}) => {
  if (selectedCount < 2) return null

  const iconBtnCls =
    'h-7 w-7 text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
  const canDistribute = selectedCount >= 3

  const alignButtons: Array<{
    key: FlowNodeAlignment
    label: string
    icon: React.ReactNode
    requiresThree?: boolean
  }> = [
    { key: 'left', label: labels?.left ?? '左对齐', icon: <AlignStartVertical size={13} /> },
    {
      key: 'centerX',
      label: labels?.centerX ?? '水平居中对齐',
      icon: <AlignCenterVertical size={13} />,
    },
    { key: 'right', label: labels?.right ?? '右对齐', icon: <AlignEndVertical size={13} /> },
    { key: 'top', label: labels?.top ?? '顶对齐', icon: <AlignStartHorizontal size={13} /> },
    {
      key: 'centerY',
      label: labels?.centerY ?? '垂直居中对齐',
      icon: <AlignCenterHorizontal size={13} />,
    },
    { key: 'bottom', label: labels?.bottom ?? '底对齐', icon: <AlignEndHorizontal size={13} /> },
    {
      key: 'distributeH',
      label: labels?.distributeH ?? '水平等距分布',
      icon: <AlignHorizontalSpaceAround size={13} />,
      requiresThree: true,
    },
    {
      key: 'distributeV',
      label: labels?.distributeV ?? '垂直等距分布',
      icon: <AlignVerticalSpaceAround size={13} />,
      requiresThree: true,
    },
  ]

  const hasBatchGroup = Boolean(
    onGroupSelected || onDuplicateSelected || onDeleteSelected || extraActions
  )

  return (
    <div
      role="toolbar"
      aria-label="多选节点对齐与批量操作"
      data-slot="flow-alignment-toolbar"
      data-abc-no-press-scale=""
      data-testid={testId}
      onMouseDown={(e) => e.stopPropagation()}
      className={cn(
        'nodrag nopan inline-flex flex-wrap items-center gap-0.5 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/96 px-1.5 py-1 text-xs text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)] backdrop-blur abc-animate-popover-in',
        className
      )}
    >
      <span className="px-1.5 font-mono text-[11px] font-semibold text-[var(--abc-primary)]">
        {labels?.selectedCount ? labels.selectedCount(selectedCount) : `已选 ${selectedCount} 项`}
      </span>
      <span className="mx-0.5 h-4 w-px bg-[var(--abc-border)]" aria-hidden="true" />

      {alignButtons.map((btn) => (
        <Button
          key={btn.key}
          type="button"
          variant="ghost"
          size="icon-sm"
          pressScale={false}
          disabled={disabled || (btn.requiresThree && !canDistribute)}
          aria-label={btn.label}
          title={
            btn.requiresThree && !canDistribute ? `${btn.label}（至少需选中 3 个节点）` : btn.label
          }
          onClick={() => onAlign(btn.key)}
          className={iconBtnCls}
        >
          {btn.icon}
        </Button>
      ))}

      {hasBatchGroup && (
        <>
          <span className="mx-0.5 h-4 w-px bg-[var(--abc-border)]" aria-hidden="true" />
          {onGroupSelected && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              pressScale={false}
              disabled={disabled}
              aria-label={labels?.group ?? '合并为子流程分组'}
              title={labels?.group ?? '合并为子流程分组'}
              onClick={onGroupSelected}
              className={iconBtnCls}
            >
              <FolderPlus size={13} />
            </Button>
          )}
          {onDuplicateSelected && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              pressScale={false}
              disabled={disabled}
              aria-label={labels?.duplicate ?? '复制选中子图'}
              title={labels?.duplicate ?? '复制选中子图 (⌘C / ⌘V)'}
              onClick={onDuplicateSelected}
              className={iconBtnCls}
            >
              <Copy size={13} />
            </Button>
          )}
          {extraActions}
          {onDeleteSelected && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              pressScale={false}
              disabled={disabled}
              aria-label={labels?.delete ?? '批量删除选中节点'}
              title={labels?.delete ?? '批量删除选中节点'}
              onClick={onDeleteSelected}
              className="h-7 w-7 text-[var(--abc-danger)] hover:bg-[var(--abc-danger-soft)]"
            >
              <Trash2 size={13} />
            </Button>
          )}
        </>
      )}
    </div>
  )
}
