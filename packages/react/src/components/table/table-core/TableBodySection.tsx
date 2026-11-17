import {
ChevronRight
} from 'lucide-react'
import React from 'react'
import { cn } from '../../../utils/cn'
import { EmptyState,Skeleton } from '../../display/FeedbackStates'
import { Checkbox } from '../../form/Controls'

import { DENSITY_CELL_PY,getNestedValue } from './types'
import type { TableCoreState } from './useTableCoreState'
import { renderBuiltInValue } from './valueRenderer'

export function TableBodySection<T extends Record<string, any>>({ state }: { state: TableCoreState<T> }) {
  const {
    loading,
    flattenedRows,
    selectable,
    hasExpandColumn,
    orderedColumns,
    density,
    totalColSpan,
    emptyText,
    onEmptyReset,
    effectiveSelectedKeys,
    rowSelection,
    activeRowKey,
    expandedKeys,
    treeData,
    expandable,
    onRow,
    isRowDraggable,
    emitRowDragEnd,
    onRowClick,
    stickyMeta,
    scrollEdge,
    toggleOne,
    toggleExpandRow,
    getEffectiveFixed,
    onRowView,
    indentPx,
    draggingKey,
  } = state

  return (
          <tbody>
            {loading && flattenedRows.length === 0 ? (
              Array.from({ length: 5 }).map((_, rowIdx) => (
                <tr key={`sk_${rowIdx}`}>
                  {selectable && (
                    <td className="border-b border-[var(--abc-border)] px-2.5 py-3 text-center">
                      <Skeleton width={16} height={16} />
                    </td>
                  )}
                  {hasExpandColumn && (
                    <td className="border-b border-[var(--abc-border)] px-2 py-3" />
                  )}
                  {orderedColumns.map((col) => (
                    <td
                      key={col.key}
                      className={cn('border-b border-[var(--abc-border)]', DENSITY_CELL_PY[density])}
                    >
                      <Skeleton variant="text" className="w-4/5" />
                    </td>
                  ))}
                </tr>
              ))
            ) : flattenedRows.length === 0 ? (
              <tr>
                <td colSpan={totalColSpan}>
                  <EmptyState title={emptyText} onReset={onEmptyReset} />
                </td>
              </tr>
            ) : (
              flattenedRows.map(({ record, key, rowIdx, depth, hasTreeChildren }) => {
                const isSelected = Boolean(selectable && effectiveSelectedKeys?.includes(key))
                const checkboxDisabled = Boolean(
                  rowSelection?.getCheckboxProps?.(record)?.disabled
                )
                const isRowActive =
                  activeRowKey !== undefined &&
                  activeRowKey !== null &&
                  String(activeRowKey) === String(key)
                const isExpanded = expandedKeys.includes(key)
                const canExpandRow = hasExpandColumn
                  ? treeData
                    ? hasTreeChildren
                    : Boolean(
                        expandable?.expandedRowRender &&
                          (!expandable.rowExpandable || expandable.rowExpandable(record))
                      ) || Boolean(expandable?.rowExpandable?.(record))
                  : false
                const customRowProps = onRow?.(record, rowIdx) ?? {}

                return (
                  <React.Fragment key={String(key)}>
                    <tr
                      {...customRowProps}
                      draggable={isRowDraggable || customRowProps.draggable}
                      onDragStart={(e) => {
                        customRowProps.onDragStart?.(e)
                        if (!isRowDraggable) return
                        if (e.dataTransfer) {
                          e.dataTransfer.setData('text/plain', String(key))
                          e.dataTransfer.effectAllowed = 'move'
                        }
                      }}
                      onDragOver={(e) => {
                        customRowProps.onDragOver?.(e)
                        if (!isRowDraggable) return
                        e.preventDefault()
                      }}
                      onDrop={(e) => {
                        customRowProps.onDrop?.(e)
                        if (!isRowDraggable || !emitRowDragEnd) return
                        e.preventDefault()
                        const activeId = e.dataTransfer?.getData('text/plain')
                        if (activeId && activeId !== String(key)) {
                          emitRowDragEnd(activeId, key)
                        }
                      }}
                      data-state={isRowActive ? 'selected' : isSelected ? 'selected' : undefined}
                      tabIndex={onRowClick ? 0 : customRowProps.tabIndex}
                      onClick={(e) => {
                        customRowProps.onClick?.(e)
                        if (!onRowClick) return
                        const target = e.target as HTMLElement | null
                        if (
                          target &&
                          target.closest(
                            'button, a, input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], details'
                          )
                        ) {
                          return
                        }
                        onRowClick(record, e)
                      }}
                      onKeyDown={(e) => {
                        customRowProps.onKeyDown?.(e)
                        if (!onRowClick) return
                        if (e.target !== e.currentTarget) return
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          onRowClick(record, e as any)
                        }
                      }}
                      className={cn(
                        'group transition-colors duration-150',
                        isRowDraggable && 'cursor-grab active:cursor-grabbing',
                        depth === 1 &&
                          'border-l-4 border-l-blue-400 bg-blue-50/75 dark:border-l-blue-500 dark:bg-blue-950/30',
                        depth >= 2 &&
                          'border-l-4 border-l-amber-400 bg-amber-50/75 dark:border-l-amber-500 dark:bg-amber-950/20',
                        onRowClick &&
                          'cursor-pointer focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]',
                        isRowActive && !isSelected
                          ? 'bg-[var(--abc-primary-soft)]/75 shadow-[inset_3px_0_0_0_var(--abc-primary)]'
                          : isSelected
                            ? 'bg-[var(--abc-primary-soft)]/60'
                            : 'hover:bg-[var(--abc-bg-muted)]/85',
                        customRowProps.className
                      )}
                    >
                      {selectable && (
                        <td
                          style={{ left: 0 }}
                          className={cn(
                            'sticky z-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-2.5 text-center group-hover:bg-[var(--abc-bg-muted)]',
                            (isSelected || isRowActive) && 'bg-[var(--abc-primary-soft)]/60',
                            !stickyMeta.hasAnyLeftFixed &&
                              scrollEdge.left &&
                              'shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]'
                          )}
                        >
                          <Checkbox
                            checked={isSelected}
                            disabled={checkboxDisabled}
                            onChange={() => toggleOne(key)}
                          />
                        </td>
                      )}

                      {hasExpandColumn && (
                        <td
                          style={
                            stickyMeta.hasAnyLeftFixed
                              ? { left: selectable ? 44 : 0 }
                              : undefined
                          }
                          className={cn(
                            'border-b border-[var(--abc-border)] px-2 py-2.5 text-center whitespace-nowrap',
                            stickyMeta.hasAnyLeftFixed &&
                              'sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]'
                          )}
                        >
                          {canExpandRow ? (
                            <button
                              type="button"
                              aria-label={isExpanded ? '收起详情行' : '展开详情行'}
                              aria-expanded={isExpanded}
                              onClick={() => toggleExpandRow(key, record)}
                              className="inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                            >
                              <ChevronRight
                                data-open={isExpanded ? 'true' : 'false'}
                                className={cn(
                                  'abc-chevron-expand h-3.5 w-3.5',
                                  isExpanded && 'text-[var(--abc-primary)]'
                                )}
                              />
                            </button>
                          ) : (
                            <span className="inline-block w-4" />
                          )}
                        </td>
                      )}

                      {orderedColumns.map((col, colIdx) => {
                        const fieldPath = (col.dataIndex ?? col.key) as string | string[]
                        const rawVal = getNestedValue(record, fieldPath)
                        const fx = getEffectiveFixed(col)
                        const isActionCol =
                          col.key === '__abc_actions__' || col.key === '__actions__'
                        const cellContent = col.render
                          ? col.render(rawVal, record, treeData ? depth : rowIdx, {
                              depth,
                              rowIndex: rowIdx,
                              isExpanded,
                            })
                          : renderBuiltInValue(rawVal, record, col, onRowView)

                        const showInlineTreeChevron =
                          !hasExpandColumn && colIdx === 0 && (depth > 0 || hasTreeChildren)
                        const applyExpandColIndent =
                          hasExpandColumn && colIdx === 0 && depth > 0

                        return (
                          <td
                            key={col.key}
                            data-col-cell={col.key}
                            style={{
                              ...(fx === 'left'
                                ? { left: `${stickyMeta.leftOffsets[col.key] ?? 0}px` }
                                : {}),
                              ...(fx === 'right'
                                ? { right: `${stickyMeta.rightOffsets[col.key] ?? 0}px` }
                                : {}),
                              ...(applyExpandColIndent
                                ? { paddingLeft: `${12 + depth * indentPx}px` }
                                : {}),
                            }}
                            className={cn(
                              'overflow-hidden border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]',
                              DENSITY_CELL_PY[density],
                              col.align === 'center' && 'text-center',
                              col.align === 'right' && 'text-right',
                              draggingKey === col.key && 'bg-[var(--abc-primary-soft)]/30',
                              fx === 'left' &&
                                'sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]',
                              fx === 'right' &&
                                'sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]',
                              (isSelected || isRowActive) &&
                                (fx === 'left' || fx === 'right') &&
                                'bg-[var(--abc-primary-soft)]/60',
                              col.key === stickyMeta.lastLeftKey &&
                                scrollEdge.left &&
                                'shadow-[6px_0_8px_-6px_rgba(15,23,42,0.22)]',
                              col.key === stickyMeta.firstRightKey &&
                                scrollEdge.right &&
                                'shadow-[-6px_0_8px_-6px_rgba(15,23,42,0.22)]'
                            )}
                          >
                            {showInlineTreeChevron ? (
                              <div
                                style={{ paddingLeft: `${depth * indentPx}px` }}
                                className="inline-flex max-w-full items-center gap-1"
                              >
                                {hasTreeChildren ? (
                                  <button
                                    type="button"
                                    aria-label={isExpanded ? '收起子项' : '展开子项'}
                                    aria-expanded={isExpanded}
                                    onClick={() => toggleExpandRow(key, record)}
                                    className="inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                                  >
                                    <ChevronRight
                                      data-open={isExpanded ? 'true' : 'false'}
                                      className={cn(
                                        'abc-chevron-expand h-3 w-3',
                                        isExpanded && 'text-[var(--abc-primary)]'
                                      )}
                                    />
                                  </button>
                                ) : (
                                  <span className="inline-block w-4.5 shrink-0" />
                                )}
                                <span className="min-w-0 truncate">{cellContent}</span>
                              </div>
                            ) : col.ellipsis === false ? (
                              cellContent
                            ) : (
                              <div
                                title={
                                  isActionCol ||
                                  rawVal === undefined ||
                                  rawVal === null ||
                                  typeof rawVal === 'object'
                                    ? undefined
                                    : String(rawVal)
                                }
                                className={cn(
                                  'overflow-hidden text-ellipsis whitespace-nowrap',
                                  isActionCol ? 'w-full min-w-0' : 'w-0 min-w-full'
                                )}
                              >
                                {cellContent}
                              </div>
                            )}
                          </td>
                        )
                      })}
                    </tr>

                    {canExpandRow && isExpanded && expandable?.expandedRowRender && (
                      <tr className="bg-[var(--abc-bg-muted)]/45">
                        <td
                          colSpan={totalColSpan}
                          className="border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]"
                        >
                          {expandable.expandedRowRender(record, rowIdx, depth, isExpanded)}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                )
              })
            )}
          </tbody>
  )
}
