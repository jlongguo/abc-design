import {
ArrowDown,
ArrowLeft,
ArrowRight,
ArrowUp,
ArrowUpDown,
Check,
ChevronRight,
Columns,
EyeOff,
Palette,
Pin,
PinOff,
RotateCcw
} from 'lucide-react'
import { createPortal } from 'react-dom'
import { cn } from '../../../utils/cn'

import { FILTER_HIGHLIGHT_SWATCHES } from './types'
import type { TableCoreState } from './useTableCoreState'

export function TableContextMenu<T extends Record<string, any>>({ state }: { state: TableCoreState<T> }) {
  const {
    contextMenu,
    portalTarget,
    getEffectiveFixed,
    movableColumns,
    filterHighlightColor,
    contextMenuRef,
    resolvedMotion,
    isColSortable,
    onSortChange,
    setContextMenu,
    sortState,
    onColumnPin,
    onColumnReorder,
    handleMoveColumnStep,
    onColumnHide,
    onToggleColumnVisible,
    submenuConfigurableCols,
    setVisibilitySubmenuOpen,
    visibilitySubmenuOpen,
    hiddenColumnKeys,
    onFilterHighlightColorChange,
    onResetColumns,
  } = state

  return (
    <>
      {/* 表头右键快捷控制菜单 */}
      {contextMenu &&
        portalTarget &&
        (() => {
          const fx = getEffectiveFixed(contextMenu.col)
          const movableIdx = movableColumns.findIndex((c) => c.key === contextMenu.col.key)
          const canMoveLeft = movableIdx > 0 && !fx
          const canMoveRight = movableIdx >= 0 && movableIdx < movableColumns.length - 1 && !fx
          const canHideThis = movableColumns.length > 1
          const currentHighlight = filterHighlightColor || '#3b82f6'

          return createPortal(
            <div
              ref={contextMenuRef}
              role="menu"
              aria-label={`${contextMenu.col.title} 列操作菜单`}
              data-abc-floating=""
              data-motion={resolvedMotion}
              style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
              className={cn(
                'fixed z-[1350] w-50 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none',
                resolvedMotion !== 'none' && 'abc-animate-popover-in'
              )}
            >
              <div className="flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5">
                <span className="truncate font-semibold text-[var(--abc-fg)]">
                  {contextMenu.col.title}
                </span>
                <span className="shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]">
                  列属性
                </span>
              </div>

              {isColSortable(contextMenu.col) && onSortChange && (
                <div className="border-b border-[var(--abc-border)] py-1">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onSortChange(contextMenu.col.key, 'asc')
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2">
                      <ArrowUp className="h-3.5 w-3.5" /> 升序排列
                    </span>
                    {sortState?.key === contextMenu.col.key && sortState.direction === 'asc' && (
                      <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                    )}
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onSortChange(contextMenu.col.key, 'desc')
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2">
                      <ArrowDown className="h-3.5 w-3.5" /> 降序排列
                    </span>
                    {sortState?.key === contextMenu.col.key && sortState.direction === 'desc' && (
                      <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                    )}
                  </button>
                  {sortState?.key === contextMenu.col.key && sortState.direction && (
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        onSortChange(contextMenu.col.key, null)
                        setContextMenu(null)
                      }}
                      className="flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                    >
                      <ArrowUpDown className="h-3.5 w-3.5" /> 清除排序
                    </button>
                  )}
                </div>
              )}

              {onColumnPin && (
                <div className="border-b border-[var(--abc-border)] py-1">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onColumnPin(contextMenu.col.key, fx === 'left' ? null : 'left')
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Pin className="h-3.5 w-3.5 -rotate-45" /> 固定到左侧
                    </span>
                    {fx === 'left' && <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />}
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onColumnPin(contextMenu.col.key, fx === 'right' ? null : 'right')
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Pin className="h-3.5 w-3.5 rotate-45" /> 固定到右侧
                    </span>
                    {fx === 'right' && <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />}
                  </button>
                  {fx && (
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        onColumnPin(contextMenu.col.key, null)
                        setContextMenu(null)
                      }}
                      className="flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                    >
                      <PinOff className="h-3.5 w-3.5" /> 取消固定
                    </button>
                  )}
                </div>
              )}

              {onColumnReorder && (
                <div className="border-b border-[var(--abc-border)] py-1">
                  <button
                    type="button"
                    role="menuitem"
                    disabled={!canMoveLeft}
                    onClick={() => handleMoveColumnStep(contextMenu.col.key, 'left')}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left',
                      canMoveLeft
                        ? 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer'
                        : 'text-[var(--abc-fg-placeholder)] cursor-not-allowed'
                    )}
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> 向左移动
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    disabled={!canMoveRight}
                    onClick={() => handleMoveColumnStep(contextMenu.col.key, 'right')}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left',
                      canMoveRight
                        ? 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer'
                        : 'text-[var(--abc-fg-placeholder)] cursor-not-allowed'
                    )}
                  >
                    <ArrowRight className="h-3.5 w-3.5" /> 向右移动
                  </button>
                </div>
              )}

              {(onColumnHide || (onToggleColumnVisible && submenuConfigurableCols.length > 0)) && (
                <div className="border-b border-[var(--abc-border)] py-1">
                  {onColumnHide && (
                    <button
                      type="button"
                      role="menuitem"
                      disabled={!canHideThis}
                      onClick={() => {
                        if (!canHideThis) return
                        onColumnHide(contextMenu.col.key)
                        setContextMenu(null)
                      }}
                      className={cn(
                        'flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left',
                        canHideThis
                          ? 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer'
                          : 'text-[var(--abc-fg-placeholder)] cursor-not-allowed'
                      )}
                    >
                      <EyeOff className="h-3.5 w-3.5" /> 隐藏当前列
                    </button>
                  )}

                  {onToggleColumnVisible && submenuConfigurableCols.length > 0 && (
                    <div
                      className="relative"
                      onMouseEnter={() => setVisibilitySubmenuOpen(true)}
                      onMouseLeave={() => setVisibilitySubmenuOpen(false)}
                    >
                      <button
                        type="button"
                        role="menuitem"
                        aria-haspopup="menu"
                        aria-expanded={visibilitySubmenuOpen}
                        onClick={() => setVisibilitySubmenuOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Columns className="h-3.5 w-3.5" /> 显示 / 隐藏列
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 text-[var(--abc-fg-muted)]" />
                      </button>

                      {visibilitySubmenuOpen && (
                        <div
                          role="menu"
                          aria-label="显示与隐藏列清单"
                          style={{
                            left:
                              typeof window !== 'undefined' &&
                              contextMenu.x + 208 + 196 > window.innerWidth
                                ? undefined
                                : '100%',
                            right:
                              typeof window !== 'undefined' &&
                              contextMenu.x + 208 + 196 > window.innerWidth
                                ? '100%'
                                : undefined,
                            top: -4,
                          }}
                          className="absolute z-[1360] mx-1 max-h-64 w-46 overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]"
                        >
                          <div className="px-2 py-1 text-[10px] font-medium text-[var(--abc-fg-muted)]">
                            勾选以显示列
                          </div>
                          {submenuConfigurableCols.map((c) => {
                            const isVisible = !hiddenColumnKeys.includes(c.key)
                            const isLastVisible = isVisible && movableColumns.length <= 1
                            return (
                              <button
                                key={c.key}
                                type="button"
                                role="menuitemcheckbox"
                                aria-checked={isVisible}
                                disabled={isLastVisible}
                                onClick={() => {
                                  if (!isLastVisible) onToggleColumnVisible(c.key)
                                }}
                                className={cn(
                                  'flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left',
                                  isLastVisible
                                    ? 'text-[var(--abc-fg-placeholder)] cursor-not-allowed'
                                    : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer'
                                )}
                              >
                                <span className="truncate">{c.title}</span>
                                <span
                                  className={cn(
                                    'inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border transition-colors',
                                    isVisible
                                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white'
                                      : 'border-[var(--abc-border-strong)] bg-transparent'
                                  )}
                                >
                                  {isVisible && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {onFilterHighlightColorChange && (
                <div className="border-b border-[var(--abc-border)] px-2.5 py-2">
                  <div className="mb-1.5 flex items-center gap-1.5 text-[11px] text-[var(--abc-fg-muted)]">
                    <Palette className="h-3 w-3" />
                    <span>筛选高亮颜色</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {FILTER_HIGHLIGHT_SWATCHES.map((item) => {
                      const active = currentHighlight === item.color
                      return (
                        <button
                          key={item.color}
                          type="button"
                          title={item.label}
                          aria-label={`筛选高亮颜色 ${item.label}`}
                          onClick={() => onFilterHighlightColorChange(item.color)}
                          style={{ backgroundColor: item.color }}
                          className={cn(
                            'h-4 w-4 rounded-full transition-transform cursor-pointer',
                            active
                              ? 'scale-110 ring-2 ring-slate-900 ring-offset-1 dark:ring-white dark:ring-offset-slate-900'
                              : 'opacity-80 hover:scale-110 hover:opacity-100'
                          )}
                        />
                      )
                    })}
                  </div>
                </div>
              )}

              {onResetColumns && (
                <div className="pt-1">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onResetColumns()
                      setContextMenu(null)
                    }}
                    className="flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> 重置列配置
                  </button>
                </div>
              )}
            </div>,
            portalTarget
          )
        })()}
    </>
  )
}
