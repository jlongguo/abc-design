import React, { useMemo } from 'react'
import type { AbcLineDiffEntry } from '@abc-design/core'
import { cn } from '../../utils/cn'

export interface CodeDiffViewProps {
  lines: AbcLineDiffEntry[]
  layout: 'unified' | 'split'
}

interface SplitRow {
  left?: AbcLineDiffEntry
  right?: AbcLineDiffEntry
}

function buildSplitRows(lines: AbcLineDiffEntry[]): SplitRow[] {
  const rows: SplitRow[] = []
  let idx = 0

  while (idx < lines.length) {
    const line = lines[idx]
    if (!line) break

    if (line.type === 'context') {
      rows.push({ left: line, right: line })
      idx += 1
      continue
    }

    const removes: AbcLineDiffEntry[] = []
    const adds: AbcLineDiffEntry[] = []
    while (idx < lines.length && lines[idx]?.type === 'remove') {
      removes.push(lines[idx]!)
      idx += 1
    }
    while (idx < lines.length && lines[idx]?.type === 'add') {
      adds.push(lines[idx]!)
      idx += 1
    }

    const pairCount = Math.max(removes.length, adds.length)
    for (let k = 0; k < pairCount; k += 1) {
      rows.push({ left: removes[k], right: adds[k] })
    }
  }

  return rows
}

/**
 * 源码/多行文本逐行差异视图（支持 Unified 单栏与 Split 双栏并排对照）
 */
export const CodeDiffView: React.FC<CodeDiffViewProps> = ({ lines, layout }) => {
  const splitRows = useMemo(
    () => (layout === 'split' ? buildSplitRows(lines) : []),
    [lines, layout]
  )

  if (layout === 'split') {
    return (
      <div className="overflow-x-auto">
        <table
          data-slot="config-diff-code-split"
          className="w-full border-collapse font-mono text-xs"
        >
          <thead>
            <tr className="border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[11px] font-sans font-semibold text-[var(--abc-fg-muted)]">
              <th scope="col" className="w-11 px-2 py-2 text-right select-none">
                旧行
              </th>
              <th scope="col" className="w-1/2 border-r border-[var(--abc-border)] px-3 py-2 text-left">
                变更前 (Before)
              </th>
              <th scope="col" className="w-11 px-2 py-2 text-right select-none">
                新行
              </th>
              <th scope="col" className="w-1/2 px-3 py-2 text-left">
                变更后 (After)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--abc-border)]">
            {splitRows.map((row, idx) => {
              const leftRemoved = row.left?.type === 'remove'
              const rightAdded = row.right?.type === 'add'

              return (
                <tr key={idx} className="align-top">
                  <td
                    className={cn(
                      'w-11 select-none px-2 py-1 text-right text-[11px] tabular-nums',
                      leftRemoved
                        ? 'bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]'
                        : !row.left
                          ? 'bg-[var(--abc-bg-muted)]/60 text-transparent'
                          : 'bg-[var(--abc-bg-muted)]/40 text-[var(--abc-fg-muted)]'
                    )}
                  >
                    {row.left?.oldLineNumber ?? ''}
                  </td>
                  <td
                    className={cn(
                      'border-r border-[var(--abc-border)] px-3 py-1 whitespace-pre-wrap break-all',
                      leftRemoved
                        ? 'bg-[var(--abc-danger-soft)] text-[var(--abc-danger)] line-through'
                        : !row.left
                          ? 'bg-[var(--abc-bg-muted)]/60'
                          : 'text-[var(--abc-fg-secondary)]'
                    )}
                  >
                    {row.left ? (
                      <>
                        <span className="mr-2 inline-block w-3 select-none opacity-75">
                          {leftRemoved ? '-' : ' '}
                        </span>
                        <span>{row.left.content}</span>
                      </>
                    ) : null}
                  </td>

                  <td
                    className={cn(
                      'w-11 select-none px-2 py-1 text-right text-[11px] tabular-nums',
                      rightAdded
                        ? 'bg-[var(--abc-success-soft)] text-[var(--abc-success)]'
                        : !row.right
                          ? 'bg-[var(--abc-bg-muted)]/60 text-transparent'
                          : 'bg-[var(--abc-bg-muted)]/40 text-[var(--abc-fg-muted)]'
                    )}
                  >
                    {row.right?.newLineNumber ?? ''}
                  </td>
                  <td
                    className={cn(
                      'px-3 py-1 whitespace-pre-wrap break-all',
                      rightAdded
                        ? 'bg-[var(--abc-success-soft)] font-semibold text-[var(--abc-success)]'
                        : !row.right
                          ? 'bg-[var(--abc-bg-muted)]/60'
                          : 'text-[var(--abc-fg-secondary)]'
                    )}
                  >
                    {row.right ? (
                      <>
                        <span className="mr-2 inline-block w-3 select-none opacity-75">
                          {rightAdded ? '+' : ' '}
                        </span>
                        <span>{row.right.content}</span>
                      </>
                    ) : null}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table
        data-slot="config-diff-code-unified"
        className="w-full border-collapse font-mono text-xs"
      >
        <thead>
          <tr className="border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[11px] font-sans font-semibold text-[var(--abc-fg-muted)]">
            <th scope="col" className="w-11 px-2 py-2 text-right select-none">
              旧行
            </th>
            <th scope="col" className="w-11 border-r border-[var(--abc-border)] px-2 py-2 text-right select-none">
              新行
            </th>
            <th scope="col" className="px-3 py-2 text-left">
              差异内容
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--abc-border)]">
          {lines.map((line, idx) => {
            const isAdd = line.type === 'add'
            const isRemove = line.type === 'remove'
            return (
              <tr
                key={idx}
                data-line-type={line.type}
                className={cn(
                  'align-top',
                  isAdd && 'bg-[var(--abc-success-soft)] text-[var(--abc-success)]',
                  isRemove && 'bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]',
                  !isAdd && !isRemove && 'text-[var(--abc-fg-secondary)]'
                )}
              >
                <td className="w-11 select-none px-2 py-1 text-right text-[11px] opacity-75 tabular-nums">
                  {line.oldLineNumber ?? ''}
                </td>
                <td className="w-11 select-none border-r border-[var(--abc-border)] px-2 py-1 text-right text-[11px] opacity-75 tabular-nums">
                  {line.newLineNumber ?? ''}
                </td>
                <td
                  className={cn(
                    'px-3 py-1 whitespace-pre-wrap break-all',
                    isAdd && 'font-semibold',
                    isRemove && 'line-through'
                  )}
                >
                  <span className="mr-2 inline-block w-3 select-none opacity-80">
                    {isAdd ? '+' : isRemove ? '-' : ' '}
                  </span>
                  <span>{line.content}</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
