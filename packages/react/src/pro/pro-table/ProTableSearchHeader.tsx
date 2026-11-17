import {
ChevronDown,
Filter,
RotateCcw,
Search
} from 'lucide-react'
import Button from '../../components/button/Button'
import FormField from '../../components/form/FormField'
import { Card } from '../../components/surface/Card'

/* ==================== 1. 搜索、表单、操作与工具栏模型定义 ==================== */

import type { ProTableColumnsState } from './useProTableColumns'
import type { ProTableDataActionsState } from './useProTableDataAndActions'
import type { ProTableSetupState } from './useProTableSetup'

export type ProTableFullCtx<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
> = ProTableSetupState<T, Q, F> & ProTableDataActionsState<T, Q, F> & ProTableColumnsState<T, Q, F>

export function ProTableSearchHeader<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
>({ ctx }: { ctx: ProTableFullCtx<T, Q, F> }) {
  const {
    title,
    subTitle,
    searchVariant,
    renderSearchExtra,
    settings,
    headerFilterMode,
    searchPanelExpanded,
    setSearchPanelExpanded,
    searchFieldsCollapsed,
    setSearchFieldsCollapsed,
    searchInputs,
    searchCardMeasureRef,
    visibleSearchFields,
    searchCollapseMeta,
    displayedSearchFields,
    activeFilterCount,
    resetAllFilters,
    updateSearchInput,
    submitSearch,
    renderSearchControl,
    showTopPageHeader,
    resolvedHeaderExtra,
    resolvedCardExtra,
  } = ctx

  return (
    <>
      {/* 顶部页面标题与扩展操作区 */}
      {showTopPageHeader && (title || subTitle || resolvedHeaderExtra) && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            {title && (
              <h2 className="text-lg font-bold tracking-tight text-[var(--abc-fg)]">{title}</h2>
            )}
            {subTitle && (
              <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">{subTitle}</p>
            )}
          </div>
          {resolvedHeaderExtra && <div>{resolvedHeaderExtra}</div>}
        </div>
      )}

      {resolvedCardExtra}

      {/* 紧凑水平工具条搜索模式 (toolbar) */}
      {searchVariant === 'toolbar' &&
        (visibleSearchFields.length > 0 || Boolean(renderSearchExtra)) &&
        !headerFilterMode && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                submitSearch()
              }}
              className="flex flex-wrap items-center gap-2.5"
            >
              {displayedSearchFields.map((f) => (
                <div key={f.key} className="flex items-center">
                  {renderSearchControl(f, {
                    input: f.span === 2 ? 'w-80 sm:w-96' : 'w-72 sm:w-80',
                    select: 'w-40',
                  })}
                </div>
              ))}
              {renderSearchExtra?.({
                query: searchInputs,
                onQueryChange: updateSearchInput,
                isSearchVisible: (colKey) => settings.searchVisible[colKey] !== false,
              })}
              <Button
                size="sm"
                type="submit"
                variant="primary"
                icon={<Search className="h-3.5 w-3.5" />}
              >
                搜索
              </Button>
              <Button
                size="sm"
                type="button"
                variant="secondary"
                icon={<RotateCcw className="h-3.5 w-3.5" />}
                onClick={resetAllFilters}
              >
                重置
              </Button>
              {activeFilterCount > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]">
                  已生效 {activeFilterCount} 项
                </span>
              )}
            </form>
          </div>
        )}

      {/* 顶部高级可折叠条件检索面板 */}
      {searchVariant === 'card' &&
        (visibleSearchFields.length > 0 || Boolean(renderSearchExtra)) &&
        !headerFilterMode && (
          <div ref={searchCardMeasureRef}>
            <Card padding="none">
              <div className="flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <Filter className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                  <span className="text-xs font-semibold text-[var(--abc-fg)]">筛选条件</span>
                  {activeFilterCount > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]">
                      已生效 {activeFilterCount} 项
                      <button
                        type="button"
                        aria-label="一键清空已生效筛选"
                        onClick={resetAllFilters}
                        className="ml-0.5 hover:underline cursor-pointer"
                      >
                        清空
                      </button>
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  aria-expanded={searchPanelExpanded}
                  onClick={() => setSearchPanelExpanded((v) => !v)}
                  className="inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer select-none"
                >
                  <span>{searchPanelExpanded ? '收起' : '展开'}</span>
                  <ChevronDown
                    data-open={searchPanelExpanded ? 'true' : 'false'}
                    className="abc-chevron h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="abc-collapse-grid" data-open={searchPanelExpanded}>
                <div className="abc-collapse-inner">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      submitSearch()
                    }}
                    className="grid grid-cols-1 items-end gap-3.5 p-4 sm:grid-cols-2 lg:grid-cols-4"
                  >
                    {displayedSearchFields.map((f) => (
                      <FormField
                        key={f.key}
                        label={f.label}
                        className={
                          f.span === 2 || f.type === 'dateRange' ? 'sm:col-span-2' : undefined
                        }
                      >
                        {renderSearchControl(f)}
                      </FormField>
                    ))}

                    {(!searchFieldsCollapsed ||
                      !searchCollapseMeta.canCollapse ||
                      searchCollapseMeta.extraFitsFirstRow) &&
                      renderSearchExtra?.({
                        query: searchInputs,
                        onQueryChange: updateSearchInput,
                        isSearchVisible: (colKey) => settings.searchVisible[colKey] !== false,
                      })}

                    <div className="flex flex-wrap items-center gap-2 lg:col-start-4 lg:justify-end">
                      <Button
                        size="sm"
                        type="submit"
                        variant="primary"
                        icon={<Search className="h-3.5 w-3.5" />}
                      >
                        搜索
                      </Button>
                      <Button
                        size="sm"
                        type="button"
                        variant="secondary"
                        icon={<RotateCcw className="h-3.5 w-3.5" />}
                        onClick={resetAllFilters}
                      >
                        重置
                      </Button>
                      {searchCollapseMeta.canCollapse && (
                        <button
                          type="button"
                          onClick={() => setSearchFieldsCollapsed((v) => !v)}
                          className="inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:underline cursor-pointer select-none"
                        >
                          <span>
                            {searchFieldsCollapsed
                              ? `展开 (${searchCollapseMeta.hiddenCount})`
                              : '收起'}
                          </span>
                          <ChevronDown
                            data-open={!searchFieldsCollapsed ? 'true' : 'false'}
                            className="abc-chevron h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        )}
    </>
  )
}
