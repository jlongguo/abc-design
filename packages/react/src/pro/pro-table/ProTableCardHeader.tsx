import {
AlignJustify,
Check,
ChevronDown,
Clock,
Download,
Filter,
ListFilter,
Maximize2,
Minimize2,
Plus,
RefreshCw,
RotateCcw,
Search,
Trash2,
Upload
} from 'lucide-react'
import Button from '../../components/button/Button'
import { Dropdown,Popover,Tooltip } from '../../components/display/Overlays'
import { Switch } from '../../components/form/Controls'
import { Input } from '../../components/form/Input'
import { type AbcTableDensity } from '../../hooks/useTableSettings'
import { cn } from '../../utils/cn'
import {
ProColumnSettingsPopover
} from '../ProTableExtras'

/* ==================== 1. 搜索、表单、操作与工具栏模型定义 ==================== */

import type { ProTableFullCtx } from './ProTableSearchHeader'
import { AUTO_REFRESH_INTERVALS } from './types'

export function ProTableCardHeader<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
>({ ctx }: { ctx: ProTableFullCtx<T, Q, F> }) {
  const {
    title,
    columns,
    showExport,
    showImport,
    onImport,
    showBatchDelete,
    columnSettingsEnabled,
    toolbarButtons,
    onDeleteRecords,
    toast,
    resolvedMotion,
    checkPermission,
    resolvedApi,
    settings,
    toggleColumnVisible,
    setAllColumnsVisible,
    setColumnFixed,
    setColumnWidth,
    setColumnOrder,
    setSearchFieldVisible,
    setDensity,
    resetSettings,
    hasRemoteSource,
    isClientFilter,
    setIsClientFilter,
    headerFilterMode,
    updateHeaderFilterMode,
    extraFilterCollapsed,
    setExtraFilterCollapsed,
    quickKeyword,
    setQuickKeyword,
    setCurrent,
    exporting,
    loading,
    selectedKeys,
    isFullScreen,
    autoRefreshPopoverOpen,
    setAutoRefreshPopoverOpen,
    showAutoRefreshControl,
    autoRefreshEnabled,
    setAutoRefreshEnabled,
    autoRefreshInterval,
    setAutoRefreshInterval,
    searchableFieldNames,
    allSearchFields,
    visibleSearchFields,
    extraFilterFields,
    canBatchDelete,
    effectiveExportable,
    canOpenAdd,
    toggleFullScreen,
    fetchServerData,
    updateSelectedState,
    resetAllFilters,
    openCreateModal,
    handleBatchDelete,
    selectionEnabled,
    hasAnyRowAction,
    defaultActionColWidth,
    handleExportAction,
    submitSearch,
    renderSearchControl,
    effectiveShowClientFilterSwitch,
    currentIntervalLabel,
    showHeaderFilterToggle,
    showTopPageHeader,
    resolvedToolbarExtra,
    resolvedAddText,
  } = ctx

  return (
    <>
        {/* 表头筛选模式下未绑定具体表格列的附加筛选项条 */}
        {headerFilterMode && extraFilterCollapsed && extraFilterFields.length > 0 && (
          <div className="border-b border-[var(--abc-border)] px-4 py-2.5">
            <div className="flex flex-wrap items-end gap-3">
              {extraFilterFields.map((field) => (
                <div key={field.key} className="w-48">
                  <div className="mb-1 text-[11px] text-[var(--abc-fg-muted)]">{field.label}</div>
                  {renderSearchControl(field)}
                </div>
              ))}
              <Button
                variant="primary"
                size="sm"
                onClick={() => submitSearch()}
                icon={<Search className="h-3.5 w-3.5" />}
              >
                查询
              </Button>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {!showTopPageHeader && title && (
              <h3 className="mr-1 text-sm font-semibold text-[var(--abc-fg)]">{title}</h3>
            )}
            {canOpenAdd && (
              <Button
                variant="primary"
                size="sm"
                icon={<Plus className="h-3.5 w-3.5" />}
                onClick={() => void openCreateModal()}
              >
                {resolvedAddText}
              </Button>
            )}
            {showBatchDelete && canBatchDelete && (onDeleteRecords || resolvedApi?.delete) && (
              <Button
                variant="danger"
                size="sm"
                disabled={selectedKeys.length === 0}
                icon={<Trash2 className="h-3.5 w-3.5" />}
                onClick={() => void handleBatchDelete(selectedKeys)}
              >
                批量删除
              </Button>
            )}
            {showExport && effectiveExportable && (
              <Button
                variant="secondary"
                size="sm"
                loading={exporting}
                icon={<Download className="h-3.5 w-3.5" />}
                onClick={() => void handleExportAction()}
              >
                导出
              </Button>
            )}
            {showImport && (
              <Button
                variant="secondary"
                size="sm"
                icon={<Upload className="h-3.5 w-3.5" />}
                onClick={() => void onImport?.()}
              >
                导入
              </Button>
            )}
            {toolbarButtons
              .filter((btn) => checkPermission(btn.permission))
              .map((btn) => (
                <Button
                  key={btn.key}
                  variant={btn.variant ?? btn.type ?? 'secondary'}
                  size="sm"
                  icon={btn.icon}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </Button>
              ))}
            {resolvedToolbarExtra}
            {headerFilterMode && extraFilterFields.length > 0 && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setExtraFilterCollapsed((v) => !v)}
              >
                {extraFilterCollapsed ? '收起筛选' : '展开筛选'}
              </Button>
            )}
            {headerFilterMode && visibleSearchFields.length > 0 && (
              <Button
                variant="secondary"
                size="sm"
                icon={<RotateCcw className="h-3.5 w-3.5" />}
                onClick={resetAllFilters}
              >
                重置
              </Button>
            )}
            {selectionEnabled && selectedKeys.length > 0 && (
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--abc-primary-soft)] px-3 py-1 text-xs font-medium text-[var(--abc-primary)]">
                <span>已选择 {selectedKeys.length} 项</span>
                <button
                  type="button"
                  onClick={() => updateSelectedState([], [])}
                  className="hover:underline cursor-pointer"
                >
                  取消
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {isClientFilter && allSearchFields.length === 0 && (
              <Input
                size="xs"
                allowClear
                prefix={<Filter className="h-3 w-3" />}
                placeholder="当前数据即时检索（支持拼音）..."
                value={quickKeyword}
                onChange={(e) => {
                  setQuickKeyword(e.target.value)
                  setCurrent(1)
                }}
                wrapperClassName="w-52"
              />
            )}

            {/* 自动定时轮询气泡面板（带开关与间隔切换） */}
            {showAutoRefreshControl && hasRemoteSource && (
              <div className="inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]">
                <Tooltip
                  content={
                    autoRefreshEnabled
                      ? `自动刷新运行中：每 ${currentIntervalLabel} 轮询（点击暂停）`
                      : '点击开启自动刷新'
                  }
                >
                  <button
                    type="button"
                    aria-label="切换定时自动刷新"
                    onClick={() => setAutoRefreshEnabled((v) => !v)}
                    className={cn(
                      'inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer',
                      autoRefreshEnabled
                        ? 'bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]'
                        : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                    )}
                  >
                    <Clock
                      className={cn('h-3.5 w-3.5', autoRefreshEnabled && 'animate-pulse')}
                    />
                    {autoRefreshEnabled && <span>{currentIntervalLabel}</span>}
                  </button>
                </Tooltip>

                <Popover
                  open={autoRefreshPopoverOpen}
                  onOpenChange={setAutoRefreshPopoverOpen}
                  placement="bottomRight"
                  panelClassName="w-44 p-2.5"
                  content={
                    <div className="space-y-2 text-xs text-[var(--abc-fg)]">
                      <div className="flex items-center justify-between border-b border-[var(--abc-border)] pb-2">
                        <span className="font-semibold">自动刷新</span>
                        <Switch
                          size="xs"
                          checked={autoRefreshEnabled}
                          onChange={(checked) => setAutoRefreshEnabled(checked)}
                        />
                      </div>
                      <div className="space-y-0.5">
                        <div className="px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]">
                          刷新间隔
                        </div>
                        {AUTO_REFRESH_INTERVALS.map((opt) => (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => {
                              setAutoRefreshInterval(opt.key)
                              setAutoRefreshEnabled(true)
                              setAutoRefreshPopoverOpen(false)
                            }}
                            className={cn(
                              'flex w-full items-center justify-between rounded-[var(--abc-radius-xs)] px-2 py-1 text-left text-xs transition-colors cursor-pointer',
                              autoRefreshInterval === opt.key
                                ? 'bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]'
                                : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]'
                            )}
                          >
                            <span>{opt.label}</span>
                            {autoRefreshInterval === opt.key && (
                              <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  }
                >
                  <button
                    type="button"
                    aria-label="选择轮询频率"
                    className="inline-flex h-full w-5 items-center justify-center rounded-r-[var(--abc-radius-sm)] border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </Popover>
              </div>
            )}

            {effectiveShowClientFilterSwitch && (
              <Tooltip
                content={
                  isClientFilter
                    ? '当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询'
                    : '当前为【服务端接口查询】：点击切换为前端本地即时筛选模式'
                }
              >
                <button
                  type="button"
                  aria-pressed={isClientFilter}
                  aria-label="切换前端本地筛选模式"
                  onClick={() => {
                    const next = !isClientFilter
                    setIsClientFilter(next)
                    setCurrent(1)
                    toast.info(
                      next ? '已切换至前端本地筛选模式' : '已切换至服务端接口查询模式'
                    )
                  }}
                  className={cn(
                    'inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none',
                    isClientFilter
                      ? 'border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  <Filter className="h-3 w-3" />
                  <span>{isClientFilter ? '前端筛选' : '接口筛选'}</span>
                </button>
              </Tooltip>
            )}

            {showHeaderFilterToggle && (
              <Tooltip content={headerFilterMode ? '关闭表头内联筛选' : '开启表头内联筛选'}>
                <button
                  type="button"
                  aria-label="切换表头内联筛选"
                  onClick={() => updateHeaderFilterMode(!headerFilterMode)}
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer',
                    headerFilterMode
                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                      : 'border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  <ListFilter className="h-3.5 w-3.5" />
                </button>
              </Tooltip>
            )}

            {effectiveExportable && !showExport && (
              <Tooltip content="导出当前数据 (CSV)">
                <button
                  type="button"
                  aria-label="导出数据"
                  onClick={() => void handleExportAction()}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>
              </Tooltip>
            )}

            {hasRemoteSource && (
              <Tooltip content="刷新表格数据">
                <button
                  type="button"
                  aria-label="刷新数据"
                  onClick={() => void fetchServerData()}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <RefreshCw className={cn('h-3.5 w-3.5', loading && 'animate-spin')} />
                </button>
              </Tooltip>
            )}

            {/* 独立行密度菜单 */}
            <Dropdown
              placement="bottomRight"
              items={[
                {
                  key: 'comfortable',
                  label: (
                    <span className="flex items-center justify-between gap-4">
                      <span>宽松</span>
                      {settings.density === 'comfortable' && (
                        <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                      )}
                    </span>
                  ),
                  onClick: () => setDensity('comfortable' as AbcTableDensity),
                },
                {
                  key: 'default',
                  label: (
                    <span className="flex items-center justify-between gap-4">
                      <span>默认</span>
                      {settings.density === 'default' && (
                        <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                      )}
                    </span>
                  ),
                  onClick: () => setDensity('default' as AbcTableDensity),
                },
                {
                  key: 'compact',
                  label: (
                    <span className="flex items-center justify-between gap-4">
                      <span>紧凑</span>
                      {settings.density === 'compact' && (
                        <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                      )}
                    </span>
                  ),
                  onClick: () => setDensity('compact' as AbcTableDensity),
                },
              ]}
            >
              <Tooltip content="表格行密度">
                <button
                  type="button"
                  aria-label="表格行密度"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <AlignJustify className="h-3.5 w-3.5" />
                </button>
              </Tooltip>
            </Dropdown>

            {/* 全屏沉浸展示 */}
            <Tooltip content={isFullScreen ? '退出全屏 (Esc)' : '全屏展示表格'}>
              <button
                type="button"
                aria-label={isFullScreen ? '退出全屏' : '全屏展示'}
                onClick={toggleFullScreen}
                className={cn(
                  'inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer',
                  isFullScreen
                    ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                    : 'border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                )}
              >
                {isFullScreen ? (
                  <Minimize2 className="h-3.5 w-3.5" />
                ) : (
                  <Maximize2 className="h-3.5 w-3.5" />
                )}
              </button>
            </Tooltip>

            {/* 高级列设置与筛选项管理气泡面板 */}
            {columnSettingsEnabled && (
              <ProColumnSettingsPopover
                columns={columns}
                searchableFieldNames={searchableFieldNames}
                settings={settings}
                hasActionColumn={hasAnyRowAction}
                defaultActionWidth={defaultActionColWidth}
                motion={resolvedMotion}
                onToggleVisible={toggleColumnVisible}
                onSetAllVisible={setAllColumnsVisible}
                onSetFixed={setColumnFixed}
                onSetWidth={setColumnWidth}
                onSetOrder={setColumnOrder}
                onSetSearchVisible={setSearchFieldVisible}
                onReset={resetSettings}
              />
            )}
          </div>
        </div>

    </>
  )
}
