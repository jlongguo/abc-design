import React from 'react'
import type { AbcDiffKind, AbcFieldDiffEntry } from '@abc-design/core'
import { Lock } from 'lucide-react'
import { StatusTag, type StatusTone } from '../../components/display/StatusTag'
import { cn } from '../../utils/cn'

export interface FieldDiffTableProps {
  entries: AbcFieldDiffEntry[]
}

const KIND_META: Record<AbcDiffKind, { label: string; tone: StatusTone }> = {
  added: { label: '新增', tone: 'success' },
  modified: { label: '修改', tone: 'warning' },
  removed: { label: '删除', tone: 'danger' },
  unchanged: { label: '未变更', tone: 'neutral' },
}

/**
 * 结构化配置对象字段级语义对比表格
 */
export const FieldDiffTable: React.FC<FieldDiffTableProps> = ({ entries }) => {
  return (
    <div className="overflow-x-auto">
      <table
        data-slot="config-diff-field-table"
        className="w-full border-collapse text-left text-xs"
      >
        <thead>
          <tr className="border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[11px] font-semibold text-[var(--abc-fg-muted)]">
            <th scope="col" className="px-3.5 py-2.5 w-48">
              字段
            </th>
            <th scope="col" className="px-3 py-2.5 w-24">
              变更类型
            </th>
            <th scope="col" className="px-3.5 py-2.5">
              变更前 (Before)
            </th>
            <th scope="col" className="px-3.5 py-2.5">
              变更后 (After)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--abc-border)]">
          {entries.map((entry) => {
            const meta = KIND_META[entry.kind]
            const hasDistinctLabel = entry.label !== entry.key

            return (
              <tr
                key={entry.key}
                data-diff-kind={entry.kind}
                className={cn(
                  'align-top transition-colors',
                  entry.kind === 'added' && 'bg-[var(--abc-success-soft)]/40',
                  entry.kind === 'removed' && 'bg-[var(--abc-danger-soft)]/40',
                  entry.kind === 'modified' && 'bg-[var(--abc-warning-soft)]/30'
                )}
              >
                <td className="px-3.5 py-2.5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-medium text-[var(--abc-fg)]">{entry.label}</span>
                    {entry.masked && (
                      <span
                        title="敏感字段已自动脱敏"
                        className="inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] border border-[var(--abc-info)]/30 bg-[var(--abc-info-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-info)]"
                      >
                        <Lock className="h-2.5 w-2.5" aria-hidden="true" />
                        脱敏
                      </span>
                    )}
                  </div>
                  {hasDistinctLabel && (
                    <div className="mt-0.5 font-mono text-[11px] text-[var(--abc-fg-muted)]">
                      {entry.key}
                    </div>
                  )}
                </td>

                <td className="px-3 py-2.5">
                  <StatusTag size="xs" tone={meta.tone} text={meta.label} />
                </td>

                <td className="px-3.5 py-2.5">
                  {entry.kind === 'added' ? (
                    <span className="font-mono text-xs text-[var(--abc-fg-placeholder)]">—</span>
                  ) : entry.kind === 'removed' || entry.kind === 'modified' ? (
                    <span className="inline-block rounded-[var(--abc-radius-xs)] bg-[var(--abc-danger-soft)] px-1.5 py-0.5 font-mono text-xs text-[var(--abc-danger)] line-through break-all">
                      {entry.beforeText}
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-[var(--abc-fg-muted)] break-all">
                      {entry.beforeText}
                    </span>
                  )}
                </td>

                <td className="px-3.5 py-2.5">
                  {entry.kind === 'removed' ? (
                    <span className="font-mono text-xs text-[var(--abc-fg-placeholder)]">—</span>
                  ) : entry.kind === 'added' || entry.kind === 'modified' ? (
                    <span className="inline-block rounded-[var(--abc-radius-xs)] bg-[var(--abc-success-soft)] px-1.5 py-0.5 font-mono text-xs font-semibold text-[var(--abc-success)] break-all">
                      {entry.afterText}
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-[var(--abc-fg-secondary)] break-all">
                      {entry.afterText}
                    </span>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
