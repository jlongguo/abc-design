import {
ArrowDown,
ArrowUp,
ArrowUpDown,
GripVertical,
HelpCircle
} from 'lucide-react'
import React from 'react'
import { cn } from '../../../utils/cn'
import { Tooltip } from '../../display/Overlays'
import { Checkbox } from '../../form/Controls'
import { Input } from '../../form/Input'
import { Select } from '../../form/Select'

import { DENSITY_CELL_PY } from './types'
import type { TableCoreState } from './useTableCoreState'

export function TableHeadSection<T extends Record<string, any>>({ state }: { state: TableCoreState<T> }) {
  const {
    selectable,
    stickyMeta,
    scrollEdge,
    allSelected,
    someSelected,
    toggleAll,
    hasExpandColumn,
    orderedColumns,
    colWidthMeta,
    getEffectiveFixed,
    isColSortable,
    sortState,
    draggingKey,
    activeFilterKeys,
    activeFilterLabels,
    headerFilterRender,
    headerFilterMode,
    filterHighlightColor,
    onColumnReorder,
    liveDragOrder,
    wrapperRef,
    prevColRectsRef,
    hasLiveSwappedRef,
    setLiveDragOrder,
    handleHeaderContextMenu,
    preDragOrderRef,
    setDraggingKey,
    density,
    handleSortClick,
    isResizable,
    startResizeColumn,
    hasInlineHeaderFilterRow,
    headerFilters,
    onHeaderFilterChange,
  } = state

  return (
          <thead className="sticky top-0 z-20 bg-[var(--abc-bg-muted)]">
            <tr>
              {selectable && (
                <th
                  style={{ left: 0 }}
                  className={cn(
                    'sticky z-30 w-11 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2.5 py-3 text-center',
                    !stickyMeta.hasAnyLeftFixed &&
                      scrollEdge.left &&
                      'shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]'
                  )}
                >
                  <Checkbox
                    checked={allSelected}
                    indeterminate={someSelected}
                    onChange={toggleAll}
                  />
                </th>
              )}
              {hasExpandColumn && (
                <th
                  style={
                    stickyMeta.hasAnyLeftFixed
                      ? { left: selectable ? 44 : 0 }
                      : undefined
                  }
                  aria-label="展开列"
                  className={cn(
                    'w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3',
                    stickyMeta.hasAnyLeftFixed && 'sticky z-20'
                  )}
                />
              )}
              {orderedColumns.map((col, colIndex) => {
                const colW = colWidthMeta.resolvedWidths[col.key]
                const fx = getEffectiveFixed(col)
                const sortableCol = isColSortable(col)
                const currentDir = sortState?.key === col.key ? sortState.direction : null
                const isDraggingThis = draggingKey === col.key
                const isFilterHighlighted = Boolean(activeFilterKeys?.includes(col.key))
                const filterSummaryLabel = activeFilterLabels?.[col.key]
                const nextCol = orderedColumns[colIndex + 1]
                const nextFx = nextCol ? getEffectiveFixed(nextCol) : undefined
                const showRightDivider = Boolean(nextCol && nextFx !== 'right')
                const showLeftDivider = col.key === stickyMeta.firstRightKey
                const headerFilterNode =
                  headerFilterRender && (col.filterable || headerFilterMode)
                    ? headerFilterRender(col)
                    : null
                const stickyStyle: React.CSSProperties = {
                  width: colW ? `${colW}px` : undefined,
                  ...(fx === 'left' ? { left: `${stickyMeta.leftOffsets[col.key] ?? 0}px` } : {}),
                  ...(fx === 'right' ? { right: `${stickyMeta.rightOffsets[col.key] ?? 0}px` } : {}),
                  ...(isFilterHighlighted
                    ? {
                        backgroundColor: filterHighlightColor || '#3b82f6',
                        color: '#ffffff',
                      }
                    : {}),
                }

                const commitReorderAt = (targetColKey: string) => {
                  if (!draggingKey || !onColumnReorder) return
                  const currentKeys =
                    liveDragOrder && liveDragOrder.length > 0
                      ? liveDragOrder
                      : orderedColumns
                          .filter((c) => c.key !== '__abc_actions__' && c.key !== '__actions__')
                          .map((c) => c.key)
                  const fromIdx = currentKeys.indexOf(draggingKey)
                  const toIdx = currentKeys.indexOf(targetColKey)
                  if (fromIdx < 0 || toIdx < 0 || fromIdx === toIdx) return

                  if (wrapperRef.current) {
                    const map = new Map<string, number>()
                    wrapperRef.current
                      .querySelectorAll<HTMLElement>('[data-col-key]')
                      .forEach((el) => {
                        const k = el.dataset.colKey
                        if (k) map.set(k, el.getBoundingClientRect().left)
                      })
                    prevColRectsRef.current = map
                  }

                  const reordered = [...currentKeys]
                  const [moved] = reordered.splice(fromIdx, 1)
                  reordered.splice(toIdx, 0, moved)
                  hasLiveSwappedRef.current = true
                  setLiveDragOrder(reordered)
                  onColumnReorder(reordered)
                }

                return (
                  <th
                    key={col.key}
                    data-col-key={col.key}
                    data-dragging={isDraggingThis ? 'true' : undefined}
                    draggable={Boolean(
                      onColumnReorder &&
                        !fx &&
                        col.key !== '__abc_actions__' &&
                        col.key !== '__actions__' &&
                        col.key !== '__drag_handle__'
                    )}
                    onContextMenu={(e) => handleHeaderContextMenu(e, col)}
                    onDragStart={(e) => {
                      const initialKeys = orderedColumns
                        .filter((c) => c.key !== '__abc_actions__' && c.key !== '__actions__')
                        .map((c) => c.key)
                      preDragOrderRef.current = initialKeys
                      hasLiveSwappedRef.current = false
                      setDraggingKey(col.key)
                      setLiveDragOrder(initialKeys)
                      if (e.dataTransfer) {
                        e.dataTransfer.effectAllowed = 'move'
                      }
                    }}
                    onDragOver={(e) => {
                      if (
                        !draggingKey ||
                        draggingKey === col.key ||
                        fx ||
                        col.key === '__abc_actions__' ||
                        col.key === '__actions__' ||
                        !onColumnReorder
                      ) {
                        return
                      }
                      e.preventDefault()

                      const currentKeys =
                        liveDragOrder && liveDragOrder.length > 0
                          ? liveDragOrder
                          : orderedColumns
                              .filter((c) => c.key !== '__abc_actions__' && c.key !== '__actions__')
                              .map((c) => c.key)
                      const fromIdx = currentKeys.indexOf(draggingKey)
                      const toIdx = currentKeys.indexOf(col.key)
                      if (fromIdx < 0 || toIdx < 0 || fromIdx === toIdx) return

                      // 宽度不等列之间加入 35%/65% 越界防抖阈值，避免边界高频往返抖动；jsdom (width=0) 直接放行
                      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                      if (rect.width > 0) {
                        if (fromIdx < toIdx && e.clientX < rect.left + rect.width * 0.35) return
                        if (fromIdx > toIdx && e.clientX > rect.left + rect.width * 0.65) return
                      }
                      commitReorderAt(col.key)
                    }}
                    onDrop={() => {
                      if (
                        draggingKey &&
                        draggingKey !== col.key &&
                        !hasLiveSwappedRef.current &&
                        !fx &&
                        col.key !== '__abc_actions__' &&
                        col.key !== '__actions__'
                      ) {
                        commitReorderAt(col.key)
                      }
                      setDraggingKey(null)
                      setLiveDragOrder(null)
                      preDragOrderRef.current = null
                      hasLiveSwappedRef.current = false
                    }}
                    onDragEnd={() => {
                      setDraggingKey(null)
                      setLiveDragOrder(null)
                      preDragOrderRef.current = null
                      hasLiveSwappedRef.current = false
                    }}
                    style={stickyStyle}
                    className={cn(
                      'group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]',
                      fx === 'right' ? 'overflow-visible' : 'overflow-hidden',
                      DENSITY_CELL_PY[density],
                      col.align === 'center' && 'text-center',
                      col.align === 'right' && 'text-right',
                      fx === 'left' && 'sticky z-30',
                      fx === 'right' && 'sticky z-30',
                      isDraggingThis &&
                        'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]',
                      col.key === stickyMeta.lastLeftKey &&
                        scrollEdge.left &&
                        'shadow-[3px_0_6px_-2px_rgba(15,23,42,0.14)]',
                      col.key === stickyMeta.firstRightKey &&
                        scrollEdge.right &&
                        'shadow-[-3px_0_6px_-2px_rgba(15,23,42,0.14)]'
                    )}
                  >
                    {showLeftDivider && (
                      <span className="pointer-events-none absolute inset-y-0 left-0 z-10 my-auto h-3.5 w-px bg-[var(--abc-border-strong)]/65" />
                    )}
                    {showRightDivider && (
                      <span className="pointer-events-none absolute inset-y-0 right-0 z-10 my-auto h-3.5 w-px bg-[var(--abc-border-strong)]/65" />
                    )}

                    <div
                      className={cn(
                        'flex min-w-0 items-center gap-1',
                        col.align === 'right' && 'justify-end',
                        col.align === 'center' && 'justify-center'
                      )}
                    >
                      <span
                        className={cn(
                          'inline-flex min-w-0 items-center gap-1',
                          sortableCol &&
                            (isFilterHighlighted
                              ? 'cursor-pointer opacity-95 hover:opacity-100'
                              : 'cursor-pointer hover:text-[var(--abc-primary)]')
                        )}
                        onClick={() => handleSortClick(col)}
                      >
                        {onColumnReorder &&
                          !fx &&
                          col.key !== '__abc_actions__' &&
                          col.key !== '__actions__' &&
                          col.key !== '__drag_handle__' && (
                            <GripVertical
                              className={cn(
                                'h-3 w-3 shrink-0 -ml-0.5 cursor-grab opacity-0 transition-opacity group-hover:opacity-100',
                                isFilterHighlighted
                                  ? 'text-white/80'
                                  : 'text-[var(--abc-fg-placeholder)]'
                              )}
                            />
                          )}
                        <span
                          className="min-w-0 truncate whitespace-nowrap"
                          title={filterSummaryLabel ? col.title : undefined}
                        >
                          {filterSummaryLabel || col.title}
                        </span>
                        {col.tooltip && (
                          <Tooltip content={col.tooltip}>
                            <span
                              onClick={(e) => e.stopPropagation()}
                              className={cn(
                                'inline-flex shrink-0',
                                isFilterHighlighted
                                  ? 'text-white/85 hover:text-white'
                                  : 'text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]'
                              )}
                            >
                              <HelpCircle className="h-3 w-3" />
                            </span>
                          </Tooltip>
                        )}
                        {sortableCol && (
                          <span
                            className={cn(
                              'inline-flex shrink-0',
                              isFilterHighlighted ? 'text-white' : 'text-[var(--abc-fg-muted)]'
                            )}
                          >
                            {currentDir === 'asc' ? (
                              <ArrowUp
                                className={cn(
                                  'h-3 w-3',
                                  isFilterHighlighted ? 'text-white' : 'text-[var(--abc-primary)]'
                                )}
                              />
                            ) : currentDir === 'desc' ? (
                              <ArrowDown
                                className={cn(
                                  'h-3 w-3',
                                  isFilterHighlighted ? 'text-white' : 'text-[var(--abc-primary)]'
                                )}
                              />
                            ) : (
                              <ArrowUpDown className="h-3 w-3 opacity-55" />
                            )}
                          </span>
                        )}
                      </span>

                      {headerFilterNode && (
                        <span
                          data-header-filter=""
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex shrink-0 items-center"
                        >
                          {headerFilterNode}
                        </span>
                      )}
                    </div>

                    {isResizable &&
                      (fx === 'right' ? (
                        <span
                          role="separator"
                          aria-orientation="vertical"
                          aria-label={`拖拽调节 ${col.title} 列宽`}
                          onMouseDown={(e) => startResizeColumn(e, col, 'left')}
                          className="absolute top-0 bottom-0 -left-1 z-30 w-2.5 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                        />
                      ) : (
                        <span
                          role="separator"
                          aria-orientation="vertical"
                          aria-label={`拖拽调节 ${col.title} 列宽`}
                          onMouseDown={(e) => startResizeColumn(e, col, 'right')}
                          className="absolute top-0 right-0 bottom-0 z-20 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                        />
                      ))}
                  </th>
                )
              })}
            </tr>

            {/* 表头内联筛选行（仅在列声明了显式 filterable 时渲染） */}
            {hasInlineHeaderFilterRow && (
              <tr className="bg-[var(--abc-bg-surface)]">
                {selectable && <th className="border-b border-[var(--abc-border)] px-2.5 py-1.5" />}
                {hasExpandColumn && (
                  <th className="border-b border-[var(--abc-border)] px-2 py-1.5" />
                )}
                {orderedColumns.map((col) => {
                  const fx = getEffectiveFixed(col)
                  return (
                    <th
                      key={`${col.key}_filter`}
                      style={{
                        ...(fx === 'left'
                          ? { left: `${stickyMeta.leftOffsets[col.key] ?? 0}px` }
                          : {}),
                        ...(fx === 'right'
                          ? { right: `${stickyMeta.rightOffsets[col.key] ?? 0}px` }
                          : {}),
                      }}
                      className={cn(
                        'border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal',
                        fx === 'left' && 'sticky z-20',
                        fx === 'right' && 'sticky z-20'
                      )}
                    >
                      {col.filterable ? (
                        col.filterType === 'select' && col.filterOptions ? (
                          <Select
                            size="xs"
                            allowClear
                            placeholder="全部"
                            options={col.filterOptions}
                            value={headerFilters[col.key] ?? ''}
                            onChange={(val) => onHeaderFilterChange?.(col.key, val)}
                          />
                        ) : (
                          <Input
                            size="xs"
                            allowClear
                            placeholder={`筛选${col.title}`}
                            value={headerFilters[col.key] ?? ''}
                            onChange={(e) => onHeaderFilterChange?.(col.key, e.target.value)}
                          />
                        )
                      ) : null}
                    </th>
                  )
                })}
              </tr>
            )}
          </thead>
  )
}
