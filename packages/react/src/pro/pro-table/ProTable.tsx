import { Pagination } from '../../components/display/FeedbackStates'
import { SplitDetailLayout } from '../../components/layout/SplitDetailPanel'
import { Card } from '../../components/surface/Card'
import TableCore from '../../components/table/TableCore'
import { cn } from '../../utils/cn'
import {
HeaderColumnFilterPopover
} from '../ProTableExtras'

/* ==================== 1. 搜索、表单、操作与工具栏模型定义 ==================== */

import { ProTableCardHeader } from './ProTableCardHeader'
import { ProTableOverlays } from './ProTableOverlays'
import { ProTableSearchHeader,type ProTableFullCtx } from './ProTableSearchHeader'
import type { ProTableProps } from './types'
import { useProTableColumns } from './useProTableColumns'
import { useProTableDataAndActions } from './useProTableDataAndActions'
import { useProTableSetup } from './useProTableSetup'

export function ProTable<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
>(props: ProTableProps<T, Q, F>) {
  const setup = useProTableSetup(props)
  const dataActions = useProTableDataAndActions(setup)
  const columnsState = useProTableColumns(setup, dataActions)
  const ctx: ProTableFullCtx<T, Q, F> = { ...setup, ...dataActions, ...columnsState }
  const {
    columns,
    rowKey,
    pageSizeOptions,
    hidePagination,
    pagination,
    renderPagination,
    selectedRowKey,
    onRowClick,
    onRow,
    treeData,
    sortable,
    columnSettingsEnabled,
    maxHeight,
    resolvedMotion,
    settings,
    toggleColumnVisible,
    setColumnFixed,
    setColumnWidth,
    setColumnOrder,
    setFilterHighlightColor,
    resetSettings,
    headerFilterMode,
    appliedFilters,
    setAppliedFilters,
    sortState,
    setSortState,
    current,
    setCurrent,
    pageSize,
    setPageSize,
    loading,
    containerRef,
    tableScrollMeasureRef,
    paginationWrapRef,
    computedScrollY,
    selectedKeys,
    isFullScreen,
    visibleSearchFields,
    updateSelectedState,
    displayRows,
    displayTotal,
    activeFilterCount,
    resetAllFilters,
    openViewModal,
    handleRowReorder,
    selectionEnabled,
    finalColumns,
    resolvedExpandable,
    updateSearchInput,
    activeFilterKeys,
    activeFilterLabels,
    emptyText,
    emptyDescription,
    emptyAction,
    emptyNode,
    onEmptyReset,
  } = ctx

  const hasSplitPanel = props.splitPanel !== undefined
  const isSplitExpanded = Boolean(props.splitPanelOpen && props.splitPanelExpanded)

  const tableCardNode = (
    <Card padding="none" className="overflow-hidden">
      <ProTableCardHeader ctx={ctx} />
      <div ref={tableScrollMeasureRef}>
        <TableCore<T>
          columns={finalColumns}
          allColumns={columns}
          hiddenColumnKeys={settings.hiddenKeys}
          onToggleColumnVisible={columnSettingsEnabled ? toggleColumnVisible : undefined}
          data={displayRows}
          rowKey={rowKey}
          loading={loading}
          density={settings.density}
          motion={resolvedMotion}
          selectedKeys={selectionEnabled ? selectedKeys : undefined}
          onSelectionChange={
            selectionEnabled
              ? (keys, rows) => {
                  updateSelectedState(keys, rows)
                }
              : undefined
          }
          sortState={sortState}
          onSortChange={(key, direction) => {
            setSortState({ key, direction })
            setCurrent(1)
          }}
          headerFilterMode={headerFilterMode}
          headerFilters={appliedFilters}
          onHeaderFilterChange={(k, val) => {
            setCurrent(1)
            updateSearchInput(k, val)
            setAppliedFilters((prev) => ({ ...prev, [k]: val }))
          }}
          headerFilterRender={(col) => {
            const filterKey = Array.isArray(col.dataIndex)
              ? col.dataIndex.join('.')
              : String(col.dataIndex ?? col.key)
            const matchedSearch = visibleSearchFields.find(
              (sf) => sf.columnKey === col.key || sf.key === filterKey
            )
            if (headerFilterMode) {
              if (!matchedSearch && !col.filterable) return null
            } else {
              if (!col.filterable) return null
            }
            const filterOpts = col.filterOptions ?? matchedSearch?.options
            const filterType =
              matchedSearch?.type ??
              col.filterType ??
              (filterOpts && filterOpts.length > 0 ? 'select' : 'text')
            const targetKey = matchedSearch?.key ?? filterKey
            const isHighlighted = activeFilterKeys.includes(col.key)
            return (
              <HeaderColumnFilterPopover
                title={col.title}
                filterType={filterType}
                filterOptions={filterOpts}
                treeData={matchedSearch?.treeData}
                multiple={matchedSearch?.multiple}
                searchable={matchedSearch?.searchable}
                placeholder={matchedSearch?.placeholder}
                format={matchedSearch?.format}
                highlighted={isHighlighted}
                iconType={headerFilterMode ? 'search' : 'filter'}
                value={appliedFilters[targetKey]}
                onApply={(nextVal) => {
                  setCurrent(1)
                  updateSearchInput(targetKey, nextVal)
                  setAppliedFilters((prev) => ({ ...prev, [targetKey]: nextVal }))
                }}
              />
            )
          }}
          activeFilterKeys={activeFilterKeys}
          activeFilterLabels={activeFilterLabels}
          filterHighlightColor={settings.filterHighlightColor}
          onFilterHighlightColorChange={
            columnSettingsEnabled ? setFilterHighlightColor : undefined
          }
          columnWidths={settings.columnWidths}
          onColumnResize={setColumnWidth}
          columnFixed={settings.columnFixed}
          onColumnPin={setColumnFixed}
          onColumnHide={columnSettingsEnabled ? toggleColumnVisible : undefined}
          onResetColumns={columnSettingsEnabled ? resetSettings : undefined}
          onColumnReorder={columnSettingsEnabled ? setColumnOrder : undefined}
          treeData={treeData}
          expandable={resolvedExpandable}
          rowDraggable={Boolean(sortable?.enabled)}
          onRowDragEnd={sortable?.enabled ? handleRowReorder : undefined}
          activeRowKey={selectedRowKey}
          onRowClick={onRowClick}
          onRow={onRow}
          onRowView={(record, linkTarget) => void openViewModal(record, linkTarget)}
          emptyText={emptyText}
          emptyDescription={emptyDescription}
          emptyAction={emptyAction}
          emptyNode={emptyNode}
          onEmptyReset={onEmptyReset ?? (activeFilterCount > 0 ? resetAllFilters : undefined)}
          maxHeight={maxHeight ?? computedScrollY}
          className="rounded-none border-0"
        />
      </div>

      {!hidePagination && pagination !== false && (
        <div ref={paginationWrapRef} className="border-t border-[var(--abc-border)] px-4 py-3">
          {renderPagination ? (
            renderPagination({
              current,
              pageSize,
              total: displayTotal,
              mode:
                typeof pagination === 'object' && pagination.mode
                  ? pagination.mode
                  : 'offset',
            })
          ) : typeof pagination === 'object' ? (
            <Pagination
              current={current}
              pageSize={pageSize}
              pageSizeOptions={pageSizeOptions}
              motion={resolvedMotion}
              total={displayTotal}
              onChange={(nextPage, nextSize) => {
                setCurrent(nextPage)
                setPageSize(nextSize)
              }}
              {...pagination}
            />
          ) : (
            <Pagination
              current={current}
              pageSize={pageSize}
              pageSizeOptions={pageSizeOptions}
              motion={resolvedMotion}
              total={displayTotal}
              onChange={(nextPage, nextSize) => {
                setCurrent(nextPage)
                setPageSize(nextSize)
              }}
            />
          )}
        </div>
      )}
    </Card>
  )

  return (
    <div
      ref={containerRef}
      data-motion={resolvedMotion}
      className={cn(
        'relative space-y-3',
        isFullScreen && 'fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4'
      )}
    >
      {!isSplitExpanded && <ProTableSearchHeader ctx={ctx} />}

      {hasSplitPanel ? (
        <SplitDetailLayout
          open={Boolean(props.splitPanelOpen)}
          expanded={props.splitPanelExpanded}
          panel={props.splitPanel}
          panelWidth={props.splitPanelWidth}
          minPanelWidth={props.splitPanelMinWidth}
          maxPanelWidth={props.splitPanelMaxWidth}
          resizable={props.splitPanelResizable}
          storageKey={props.splitPanelStorageKey}
          stickyPanel={props.splitPanelSticky}
        >
          {tableCardNode}
        </SplitDetailLayout>
      ) : (
        tableCardNode
      )}

      <ProTableOverlays ctx={ctx} />
    </div>
  )
}

export const ProCrudTable = ProTable
export const CrudTable = ProTable
export default ProTable
