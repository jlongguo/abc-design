import {
collectAllExpandableKeys
} from '@abc-design/core'
import { Check,ChevronRight,FolderTree,Loader2,Search } from 'lucide-react'
import React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../../utils/cn'
import { Checkbox } from '../Controls'

import { renderNodeDisplayLabel } from './types'
import type { TreeSelectState } from './useTreeSelectState'

export const TreeSelectDropdown: React.FC<{ state: TreeSelectState }> = ({ state }) => {
  const {
    flattenedRows,
    loadingKeys,
    activeIndex,
    isCheckable,
    checkedKeyStrSet,
    selectedRawKeys,
    halfCheckedKeyStrSet,
    isRowSelectionBlocked,
    rowRefs,
    setActiveIndex,
    handleSelectRow,
    useVirtualWindow,
    selectableLeafOnly,
    toggleExpandNode,
    handleToggleCheck,
    isMounted,
    effectivePortalContainer,
    popoverRef,
    resolvedMotion,
    actualSide,
    floatingStyle,
    matchWidth,
    dropdownClassName,
    isVisible,
    isSearchable,
    resolvedShowToolbar,
    searchInputRef,
    effectiveKeyword,
    handleKeyDown,
    searchValue,
    setInternalKeyword,
    onSearch,
    setScrollTop,
    scrollHostRef,
    searchPlaceholder,
    normalized,
    commitExpandedKeys,
    treeId,
    ariaLabel,
    label,
    isMultiMode,
    listHeight,
    emptyText,
    totalVirtualHeight,
    renderedRows,
    virtualStartIndex,
    itemHeight,
  } = state

    const renderTreeRow = (
      item: (typeof flattenedRows)[number],
      flatIdx: number,
      rowStyle?: React.CSSProperties
    ) => {
      const { node, keyStr, depth, posInSet, setSize, hasChildren, isExpanded } = item
      const isLoading = loadingKeys.has(keyStr)
      const isActive = flatIdx === activeIndex
      const isChecked = isCheckable
        ? checkedKeyStrSet.has(keyStr)
        : selectedRawKeys.some((k) => String(k) === keyStr)
      const isHalf = isCheckable && halfCheckedKeyStrSet.has(keyStr)
      const rowBlocked = isRowSelectionBlocked(node)

      return (
        <div
          key={keyStr}
          ref={(el) => {
            rowRefs.current[keyStr] = el
          }}
          role="treeitem"
          aria-level={depth + 1}
          aria-posinset={posInSet}
          aria-setsize={setSize}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-selected={!isCheckable ? isChecked : undefined}
          aria-checked={
            isCheckable && node.checkable !== false ? (isHalf ? 'mixed' : isChecked) : undefined
          }
          aria-disabled={node.disabled || undefined}
          data-testid={`tree-select-node-${keyStr}`}
          data-active={isActive ? 'true' : undefined}
          style={{
            paddingLeft: `${depth * 18 + 8}px`,
            paddingRight: '8px',
            ...rowStyle,
          }}
          onMouseEnter={() => {
            if (!node.disabled) setActiveIndex(flatIdx)
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleSelectRow(node)
          }}
          className={cn(
            'flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] text-xs transition-colors',
            !useVirtualWindow && 'py-1.5',
            node.disabled
              ? 'opacity-45 cursor-not-allowed'
              : rowBlocked && selectableLeafOnly && hasChildren
                ? 'cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                : isChecked && !isCheckable
                  ? 'cursor-pointer bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]'
                  : isActive
                    ? 'cursor-pointer bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]'
                    : 'cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
          )}
        >
          {/* 展开 / 收起 / 异步加载箭头 */}
          {hasChildren ? (
            <button
              type="button"
              tabIndex={-1}
              data-testid={`tree-select-expand-${keyStr}`}
              aria-label={isExpanded ? `收起 ${node.title}` : `展开 ${node.title}`}
              onClick={(e) => {
                e.stopPropagation()
                void toggleExpandNode(node)
              }}
              className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              {isLoading ? (
                <Loader2 className="h-3 w-3 animate-spin text-[var(--abc-primary)]" aria-hidden="true" />
              ) : (
                <ChevronRight
                  className={cn(
                    'h-3.5 w-3.5 transition-transform duration-150',
                    isExpanded && 'rotate-90'
                  )}
                  aria-hidden="true"
                />
              )}
            </button>
          ) : (
            <span className="inline-block h-4 w-4 shrink-0" aria-hidden="true" />
          )}

          {/* 复选框（多选树模式） */}
          {isCheckable && node.checkable !== false && (
            <span
              className="inline-flex shrink-0 items-center"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <Checkbox
                size="xs"
                tabIndex={-1}
                aria-label={node.title}
                disabled={node.disabled}
                checked={isChecked}
                indeterminate={isHalf}
                onChange={(nextChecked) => handleToggleCheck(node, nextChecked)}
              />
            </span>
          )}

          {/* 节点展示文案 */}
          <span className="min-w-0 flex-1 truncate">{renderNodeDisplayLabel(node)}</span>

          {/* 节点附加徽标 */}
          {node.badge !== undefined && (
            <span className="shrink-0 rounded-full bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]">
              {node.badge}
            </span>
          )}

          {/* 单选 / 非复选多选选中对勾 */}
          {!isCheckable && isChecked && (
            <Check className="h-3.5 w-3.5 shrink-0 text-[var(--abc-primary)]" aria-hidden="true" />
          )}
        </div>
      )
    }


  return (
    <>
        {isMounted &&
          effectivePortalContainer &&
          createPortal(
            <div
              ref={popoverRef}
              data-slot="tree-select-popover"
              data-abc-floating=""
              data-motion={resolvedMotion}
              data-placement={actualSide}
              onMouseDown={(e) => e.stopPropagation()}
              style={floatingStyle}
              className={cn(
                'z-[1500] max-w-[min(520px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]',
                matchWidth ? 'min-w-full' : 'min-w-[240px]',
                isVisible ? 'abc-animate-popover-in' : 'abc-animate-popover-out',
                dropdownClassName
              )}
            >
              {(isSearchable || resolvedShowToolbar) && (
                <div className="flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5">
                  {isSearchable ? (
                    <div className="flex min-w-0 flex-1 items-center gap-1.5">
                      <Search
                        className="h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]"
                        aria-hidden="true"
                      />
                      <input
                        ref={searchInputRef}
                        type="text"
                        autoFocus
                        data-testid="tree-select-search-input"
                        value={effectiveKeyword}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => {
                          const nextKw = e.target.value
                          if (searchValue === undefined) setInternalKeyword(nextKw)
                          onSearch?.(nextKw)
                          setActiveIndex(0)
                          setScrollTop(0)
                          if (scrollHostRef.current) {
                            scrollHostRef.current.scrollTop = 0
                          }
                        }}
                        placeholder={searchPlaceholder}
                        className="w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                      />
                    </div>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--abc-fg-muted)]">
                      <FolderTree className="h-3 w-3" aria-hidden="true" />
                      <span>节点结构</span>
                    </span>
                  )}

                  {resolvedShowToolbar && normalized.treeNodes.length > 0 && (
                    <div className="flex shrink-0 items-center gap-1 text-[11px]">
                      <button
                        type="button"
                        data-testid="tree-select-expand-all"
                        onClick={(e) => {
                          e.stopPropagation()
                          commitExpandedKeys(collectAllExpandableKeys(normalized.treeNodes))
                        }}
                        className="rounded px-1.5 py-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                      >
                        展开全部
                      </button>
                      <button
                        type="button"
                        data-testid="tree-select-collapse-all"
                        onClick={(e) => {
                          e.stopPropagation()
                          commitExpandedKeys([])
                        }}
                        className="rounded px-1.5 py-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                      >
                        收起
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div
                ref={scrollHostRef}
                id={treeId}
                role="tree"
                aria-label={ariaLabel || (typeof label === 'string' ? label : '树形选项列表')}
                aria-multiselectable={isMultiMode || undefined}
                data-tree-scroll-host=""
                data-virtual={useVirtualWindow ? 'true' : 'false'}
                onScroll={(e) => {
                  if (useVirtualWindow) {
                    setScrollTop(e.currentTarget.scrollTop)
                  }
                }}
                style={{ maxHeight: `${listHeight}px` }}
                className="overflow-y-auto p-1"
              >
                {flattenedRows.length === 0 ? (
                  <div className="py-5 text-center text-xs text-[var(--abc-fg-muted)]">
                    {emptyText}
                  </div>
                ) : useVirtualWindow ? (
                  <div
                    data-testid="tree-select-virtual-spacer"
                    style={{
                      height: `${totalVirtualHeight}px`,
                      position: 'relative',
                    }}
                  >
                    {renderedRows.map((item, localIdx) => {
                      const absIdx = virtualStartIndex + localIdx
                      return renderTreeRow(item, absIdx, {
                        position: 'absolute',
                        top: `${absIdx * itemHeight}px`,
                        left: 0,
                        right: 0,
                        height: `${itemHeight}px`,
                      })
                    })}
                  </div>
                ) : (
                  renderedRows.map((item, idx) => renderTreeRow(item, idx))
                )}
              </div>
            </div>,
            effectivePortalContainer
          )}
    </>
  )
}
