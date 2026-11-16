import {
Loader2
} from 'lucide-react'
import { cn } from '../../../utils/cn'

import { TableBodySection } from './TableBodySection'
import { TableContextMenu } from './TableContextMenu'
import { TableHeadSection } from './TableHeadSection'
import type { TableCoreProps } from './types'
import { useTableCoreState } from './useTableCoreState'

export function TableCore<T extends Record<string, any> = Record<string, any>>(props: TableCoreProps<T>) {
  const state = useTableCoreState(props)
  const {
    wrapperRef,
    className,
    colWidthMeta,
    resolvedMotion,
    loading,
    flattenedRows,
    ariaLabel,
    updateScrollEdge,
    maxHeight,
    selectable,
    hasExpandColumn,
    orderedColumns,
  } = state

  return (
    <div className="relative">
      {loading && flattenedRows.length > 0 && (
        <div
          aria-live="polite"
          aria-busy="true"
          className="pointer-events-auto absolute inset-0 z-30 flex items-center justify-center rounded-[var(--abc-radius-lg)] bg-[var(--abc-bg-surface)]/60 backdrop-blur-[1px] transition-opacity"
        >
          <Loader2 className="h-6 w-6 animate-spin text-[var(--abc-primary)]" />
        </div>
      )}

      <div
        ref={wrapperRef}
        tabIndex={0}
        role="region"
        aria-label={ariaLabel}
        data-motion={resolvedMotion}
        onScroll={updateScrollEdge}
        style={
          maxHeight !== undefined
            ? { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }
            : undefined
        }
        className={cn(
          'abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
          className
        )}
      >
        <table
          style={{
            width: colWidthMeta.resolvedTableWidth ? `${colWidthMeta.resolvedTableWidth}px` : '100%',
            tableLayout: 'fixed',
          }}
          className="w-full border-separate border-spacing-0 text-left text-xs"
        >
          <colgroup>
            {selectable && <col style={{ width: '44px' }} />}
            {hasExpandColumn && <col style={{ width: '40px' }} />}
            {orderedColumns.map((col) => (
              <col
                key={col.key}
                data-col-width-key={col.key}
                style={{ width: `${colWidthMeta.resolvedWidths[col.key]}px` }}
              />
            ))}
          </colgroup>
          <TableHeadSection state={state} />
          <TableBodySection state={state} />
        </table>
      </div>

      <TableContextMenu state={state} />
    </div>
  )
}

export default TableCore
