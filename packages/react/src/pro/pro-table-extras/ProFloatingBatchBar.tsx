import type { AbcMotionPreset } from '@abc-design/tokens'
import {
Trash2,
X
} from 'lucide-react'
import React from 'react'
import Button,{ type ButtonVariant } from '../../components/button/Button'
import { useAbcMotion } from '../../hooks'
import { cn } from '../../utils/cn'

export interface ProTableBatchAction<T = Record<string, any>> {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  variant?: ButtonVariant
  /** 兼容 CrudTable BatchActionConfig 的 type 属性别名 */
  type?: ButtonVariant
  permission?: string
  onClick: (selectedKeys: Array<string | number>, selectedRows: T[]) => void | Promise<void>
}

export function ProFloatingBatchBar<T = Record<string, any>>({
  selectedKeys,
  selectedRows,
  batchActions = [],
  extraContent,
  onBatchDelete,
  onClear,
  motion,
}: {
  selectedKeys: Array<string | number>
  selectedRows: T[]
  batchActions?: ProTableBatchAction<T>[]
  extraContent?: React.ReactNode
  onBatchDelete?: () => void
  onClear: () => void
  motion?: AbcMotionPreset
}) {
  const resolvedMotion = useAbcMotion(motion)
  if (selectedKeys.length === 0) return null

  return (
    <div
      role="region"
      aria-label="批量操作栏"
      data-motion={resolvedMotion}
      className={cn(
        'fixed bottom-6 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-3 rounded-full border border-[var(--abc-border-strong)] bg-[var(--abc-bg-elevated)]/95 px-4 py-2 shadow-[var(--abc-shadow-modal)] backdrop-blur-md',
        resolvedMotion !== 'none' && 'abc-floating-bar-in'
      )}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--abc-primary-soft)] px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)]">
        已选择 <strong className="font-mono font-bold tabular-nums">{selectedKeys.length}</strong> 项
      </span>

      <span className="h-4 w-px bg-[var(--abc-border)]" />

      <div className="flex flex-wrap items-center gap-1.5">
        {extraContent}
        {batchActions.map((act) => (
          <Button
            key={act.key}
            variant={act.variant ?? act.type ?? 'secondary'}
            size="xs"
            icon={act.icon}
            className="rounded-full"
            onClick={() => act.onClick(selectedKeys, selectedRows)}
          >
            {act.label}
          </Button>
        ))}

        {onBatchDelete && (
          <Button
            variant="danger"
            size="xs"
            icon={<Trash2 className="h-3 w-3" />}
            className="rounded-full"
            onClick={onBatchDelete}
          >
            批量删除 ({selectedKeys.length})
          </Button>
        )}

        <span className="mx-0.5 h-4 w-px bg-[var(--abc-border)]" />

        <button
          type="button"
          aria-label="取消多选"
          onClick={onClear}
          className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
        >
          <span>取消选择</span>
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}

/* ==================== 6. 独立声明式筛选表单面板 (ProCrudSearchForm / CrudSearchForm) ==================== */

