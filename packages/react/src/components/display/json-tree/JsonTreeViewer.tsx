import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  collectJsonExpandablePaths,
  formatJsonCopyValue,
  formatJsonPath,
  getJsonValueType,
  parseJsonTreeInput,
  searchJsonTree,
} from '@abc-design/core'
import type { AbcSize } from '@abc-design/tokens'
import { AlertTriangle, Check, ChevronsDownUp, ChevronsUpDown, Copy, Search, X } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../../hooks/useAbcDefaults'
import { useControllableState } from '../../../hooks/useControllableState'
import { cn } from '../../../utils/cn'
import { copyToClipboard } from '../../typography/CopyableText'
import { JsonTreeNodeRow } from './JsonTreeNodeRow'
import {
  DEFAULT_JSON_TREE_LABELS,
  type FlattenedJsonRow,
  type JsonTreeViewerProps,
} from './types'

const SIZE_TEXT_CLASS: Record<AbcSize, string> = {
  xs: 'text-[11px]',
  sm: 'text-xs',
  md: 'text-[13px]',
  lg: 'text-sm',
}

function isPlainContainer(value: unknown): value is Record<string, unknown> | unknown[] {
  return value !== null && typeof value === 'object'
}

/**
 * 通用结构化 JSON 树形检视与路径/值复制组件 (JsonTreeViewer)
 * 支持字符串自动解析与错误兜底、搜索高亮与祖先自动展开、路径/值一键复制、大列表分批展开与键盘无障碍树导航
 */
export const JsonTreeViewer: React.FC<JsonTreeViewerProps> = ({
  data,
  parseString = true,
  rootLabel,
  defaultExpandDepth = 2,
  expandedPaths: controlledExpandedPaths,
  defaultExpandedPaths,
  onExpandedPathsChange,
  showToolbar = true,
  toolbarExtra,
  searchable = true,
  searchQuery: controlledSearchQuery,
  defaultSearchQuery = '',
  onSearchQueryChange,
  filterOnSearch = true,
  pathFormat = 'jsonpath',
  copyable = true,
  onCopy,
  maxChildren = 100,
  maxStringLength = 240,
  maxDepth = 20,
  maxHeight,
  showItemCount = true,
  emptyText,
  labels: propLabels,
  bordered = true,
  size,
  motion,
  ariaLabel = 'JSON 数据树形视图',
  className,
  style,
  ...rest
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const labels = useMemo(() => ({ ...DEFAULT_JSON_TREE_LABELS, ...propLabels }), [propLabels])

  const parsed = useMemo(() => parseJsonTreeInput(data, parseString), [data, parseString])
  const parsedValue = parsed.ok && !parsed.isEmptyInput ? parsed.value : undefined

  const initialExpanded = useMemo(() => {
    if (defaultExpandedPaths !== undefined) return defaultExpandedPaths
    if (parsedValue === undefined) return []
    return collectJsonExpandablePaths(parsedValue, { maxDepth: defaultExpandDepth })
  }, [defaultExpandedPaths, parsedValue, defaultExpandDepth])

  const [manualExpandedList, setManualExpandedList] = useControllableState<string[]>({
    value: controlledExpandedPaths,
    defaultValue: initialExpanded,
    onChange: onExpandedPathsChange,
  })

  const prevDataRef = useRef<unknown>(data)
  useEffect(() => {
    // 非受控模式下，仅当 data 引用或原始值实际切换时才重新计算默认展开态，避免搜索或交互覆盖手动折叠态
    if (Object.is(prevDataRef.current, data)) return
    prevDataRef.current = data
    if (controlledExpandedPaths !== undefined) return
    const nextExpanded =
      defaultExpandedPaths !== undefined
        ? defaultExpandedPaths
        : parsedValue !== undefined
          ? collectJsonExpandablePaths(parsedValue, { maxDepth: defaultExpandDepth })
          : []
    setManualExpandedList(nextExpanded)
  }, [
    data,
    controlledExpandedPaths,
    defaultExpandedPaths,
    parsedValue,
    defaultExpandDepth,
    setManualExpandedList,
  ])

  const [searchQuery, setSearchQuery] = useControllableState<string>({
    value: controlledSearchQuery,
    defaultValue: defaultSearchQuery,
    onChange: onSearchQueryChange,
  })

  const [childLimits, setChildLimits] = useState<Record<string, number>>({})
  const [expandedStrings, setExpandedStrings] = useState<Set<string>>(() => new Set())
  const [focusedPath, setFocusedPath] = useState<string>('$')
  const [copiedActionKey, setCopiedActionKey] = useState<string | null>(null)
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mountedRef = useRef(true)
  const rowRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  useEffect(() => {
    setChildLimits({})
    setExpandedStrings(new Set())
  }, [data])

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
    }
  }, [])

  const trimmedQuery = searchQuery.trim()
  const searchResult = useMemo(() => {
    if (!parsed.ok || parsed.isEmptyInput || !trimmedQuery) {
      return {
        matchedPaths: new Set<string>(),
        visiblePaths: new Set<string>(),
        autoExpandedPaths: new Set<string>(),
        matchCount: 0,
        truncated: false,
      }
    }
    return searchJsonTree(parsed.value, trimmedQuery, { maxDepth })
  }, [parsed, trimmedQuery, maxDepth])

  const effectiveExpandedSet = useMemo(() => {
    const next = new Set(manualExpandedList)
    if (trimmedQuery) {
      searchResult.autoExpandedPaths.forEach((p) => next.add(p))
    }
    return next
  }, [manualExpandedList, trimmedQuery, searchResult.autoExpandedPaths])

  const toggleExpandPath = useCallback(
    (path: string) => {
      const next = new Set(manualExpandedList)
      if (next.has(path)) {
        next.delete(path)
      } else {
        next.add(path)
      }
      setManualExpandedList(Array.from(next))
    },
    [manualExpandedList, setManualExpandedList]
  )

  const handleExpandAll = useCallback(() => {
    if (!parsed.ok || parsed.isEmptyInput) return
    setManualExpandedList(collectJsonExpandablePaths(parsed.value, { maxDepth }))
  }, [parsed, maxDepth, setManualExpandedList])

  const handleCollapseAll = useCallback(() => {
    setManualExpandedList([])
  }, [setManualExpandedList])

  const toggleStringExpand = useCallback((path: string) => {
    setExpandedStrings((prev) => {
      const next = new Set(prev)
      if (next.has(path)) next.delete(path)
      else next.add(path)
      return next
    })
  }, [])

  const markCopiedKey = useCallback((key: string) => {
    if (!mountedRef.current) return
    setCopiedActionKey(key)
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
    copyTimerRef.current = setTimeout(() => {
      if (!mountedRef.current) return
      setCopiedActionKey(null)
      copyTimerRef.current = null
    }, 1600)
  }, [])

  const handleCopyRoot = useCallback(async () => {
    const rawText = parsed.ok
      ? parsed.isEmptyInput
        ? ''
        : formatJsonCopyValue(parsed.value)
      : parsed.raw
    const ok = await copyToClipboard(rawText)
    if (ok && mountedRef.current) {
      markCopiedKey('root')
      onCopy?.({ kind: 'root', text: rawText, path: '$' })
    }
  }, [parsed, markCopiedKey, onCopy])

  const handleCopyPath = useCallback(
    async (row: Extract<FlattenedJsonRow, { kind: 'node' }>, formattedPath: string) => {
      const ok = await copyToClipboard(formattedPath)
      if (ok && mountedRef.current) {
        markCopiedKey(`path:${row.path}`)
        onCopy?.({ kind: 'path', text: formattedPath, path: row.path })
      }
    },
    [markCopiedKey, onCopy]
  )

  const handleCopyValue = useCallback(
    async (row: Extract<FlattenedJsonRow, { kind: 'node' }>) => {
      const text = formatJsonCopyValue(row.value)
      const ok = await copyToClipboard(text)
      if (ok && mountedRef.current) {
        markCopiedKey(`val:${row.path}`)
        onCopy?.({ kind: 'value', text, path: row.path })
      }
    },
    [markCopiedKey, onCopy]
  )

  const flattenedRows = useMemo<FlattenedJsonRow[]>(() => {
    if (!parsed.ok || parsed.isEmptyInput) return []
    if (trimmedQuery && filterOnSearch && searchResult.matchCount === 0) {
      return []
    }

    const rows: FlattenedJsonRow[] = []
    const activeAncestors = new Set<object>()

    const walk = (
      node: unknown,
      keyName: string | number | null,
      segments: Array<string | number>,
      parentPath: string | null,
      depth: number,
      parentMatchedByQuery: boolean
    ) => {
      const path = formatJsonPath(segments, 'jsonpath')
      const valueType = getJsonValueType(node)
      const container = isPlainContainer(node)
      const isCircular = container && activeAncestors.has(node)
      const rawEntries: Array<[string | number, unknown]> =
        container && !isCircular
          ? Array.isArray(node)
            ? node.map((v, i) => [i, v])
            : Object.entries(node)
          : []
      const childCount = rawEntries.length
      const isExpandable = container && !isCircular && childCount > 0
      const isExpanded = isExpandable && effectiveExpandedSet.has(path)
      const isDepthLimited = isExpandable && depth >= maxDepth

      rows.push({
        kind: 'node',
        path,
        parentPath,
        segments,
        keyName,
        value: node,
        valueType,
        depth,
        level: depth + 1,
        isContainer: container,
        isExpandable,
        isExpanded,
        isCircular,
        isDepthLimited,
        childCount,
      })

      if (!isExpanded || !isExpandable) return

      if (isDepthLimited) {
        rows.push({
          kind: 'depth-limit',
          rowKey: `__abc_depth_limit__:${path}`,
          parentPath: path,
          depth: depth + 1,
        })
        return
      }

      const selfMatched = searchResult.matchedPaths.has(path)
      const visibleEntries =
        trimmedQuery && filterOnSearch && !selfMatched && !parentMatchedByQuery
          ? rawEntries.filter(([k]) =>
              searchResult.visiblePaths.has(formatJsonPath([...segments, k], 'jsonpath'))
            )
          : rawEntries

      const limit = childLimits[path] ?? maxChildren
      const sliced = visibleEntries.slice(0, limit)

      activeAncestors.add(node)
      for (const [k, childVal] of sliced) {
        walk(
          childVal,
          k,
          [...segments, k],
          path,
          depth + 1,
          parentMatchedByQuery || selfMatched
        )
      }
      activeAncestors.delete(node)

      if (visibleEntries.length > sliced.length) {
        rows.push({
          kind: 'show-more',
          rowKey: `__abc_show_more__:${path}`,
          parentPath: path,
          depth: depth + 1,
          remaining: visibleEntries.length - sliced.length,
        })
      }
    }

    walk(parsed.value, null, [], null, 0, false)
    return rows
  }, [
    parsed,
    trimmedQuery,
    filterOnSearch,
    searchResult,
    effectiveExpandedSet,
    maxDepth,
    childLimits,
    maxChildren,
  ])

  const nodeRows = useMemo(
    () =>
      flattenedRows.filter(
        (r): r is Extract<FlattenedJsonRow, { kind: 'node' }> => r.kind === 'node'
      ),
    [flattenedRows]
  )

  const activeFocusPath = useMemo(() => {
    if (nodeRows.some((r) => r.path === focusedPath)) return focusedPath
    return nodeRows[0]?.path ?? '$'
  }, [nodeRows, focusedPath])

  const registerRef = useCallback((path: string, el: HTMLDivElement | null) => {
    if (el) rowRefs.current.set(path, el)
    else rowRefs.current.delete(path)
  }, [])

  const focusNodePath = useCallback((path: string) => {
    setFocusedPath(path)
    rowRefs.current.get(path)?.focus()
  }, [])

  const handleTreeKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>, currentPath: string) => {
      const target = e.target as HTMLElement | null
      if (target && target.closest('button')) return

      const idx = nodeRows.findIndex((r) => r.path === currentPath)
      if (idx === -1) return
      const currentRow = nodeRows[idx]

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        const nextRow = nodeRows[idx + 1]
        if (nextRow) focusNodePath(nextRow.path)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        const prevRow = nodeRows[idx - 1]
        if (prevRow) focusNodePath(prevRow.path)
      } else if (e.key === 'Home') {
        e.preventDefault()
        if (nodeRows[0]) focusNodePath(nodeRows[0].path)
      } else if (e.key === 'End') {
        e.preventDefault()
        if (nodeRows[nodeRows.length - 1]) focusNodePath(nodeRows[nodeRows.length - 1].path)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        if (currentRow.isExpandable) {
          if (!currentRow.isExpanded) {
            toggleExpandPath(currentRow.path)
          } else {
            const firstChild = nodeRows[idx + 1]
            if (firstChild && firstChild.parentPath === currentRow.path) {
              focusNodePath(firstChild.path)
            }
          }
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (currentRow.isExpandable && currentRow.isExpanded) {
          toggleExpandPath(currentRow.path)
        } else if (currentRow.parentPath) {
          focusNodePath(currentRow.parentPath)
        }
      } else if (e.key === 'Enter' || e.key === ' ') {
        if (currentRow.isExpandable) {
          e.preventDefault()
          toggleExpandPath(currentRow.path)
        }
      }
    },
    [nodeRows, focusNodePath, toggleExpandPath]
  )

  const scrollStyle =
    maxHeight !== undefined
      ? { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }
      : undefined

  const isTreeReady = parsed.ok && !parsed.isEmptyInput
  const rootCopied = copiedActionKey === 'root'

  return (
    <div
      data-slot="json-tree-viewer"
      data-motion={resolvedMotion}
      style={style}
      className={cn(
        'min-w-0 max-w-full overflow-hidden text-[var(--abc-fg)]',
        bordered &&
          'rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]',
        className
      )}
      {...rest}
    >
      {showToolbar && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-2">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            {searchable && isTreeReady && (
              <div className="relative flex min-w-[160px] max-w-xs flex-1 items-center">
                <Search className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-[var(--abc-fg-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={labels.searchPlaceholder}
                  aria-label={labels.searchPlaceholder}
                  className="h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pr-7 pl-8 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--abc-ring)]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    aria-label={labels.clearSearchLabel}
                    onClick={() => setSearchQuery('')}
                    className="absolute right-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            )}
            {trimmedQuery && isTreeReady && (
              <>
                <span
                  data-testid="json-tree-match-count"
                  className="shrink-0 rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-subtle)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] tabular-nums"
                >
                  {labels.matchCountLabel(searchResult.matchCount)}
                </span>
                {searchResult.truncated && (
                  <span
                    data-testid="json-tree-search-truncated"
                    className="shrink-0 rounded-[var(--abc-radius-xs)] bg-[var(--abc-warning-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-warning)]"
                  >
                    {labels.searchTruncatedLabel}
                  </span>
                )}
              </>
            )}
            {toolbarExtra}
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            {isTreeReady && (
              <>
                <button
                  type="button"
                  onClick={handleExpandAll}
                  className="inline-flex h-7 items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-xs font-medium text-[var(--abc-fg-secondary)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <ChevronsUpDown className="h-3.5 w-3.5" />
                  <span>{labels.expandAllLabel}</span>
                </button>
                <button
                  type="button"
                  onClick={handleCollapseAll}
                  className="inline-flex h-7 items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-xs font-medium text-[var(--abc-fg-secondary)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <ChevronsDownUp className="h-3.5 w-3.5" />
                  <span>{labels.collapseAllLabel}</span>
                </button>
              </>
            )}
            {copyable && (!parsed.ok || !parsed.isEmptyInput) && (
              <button
                type="button"
                onClick={handleCopyRoot}
                className={cn(
                  'inline-flex h-7 items-center gap-1 rounded-[var(--abc-radius-sm)] border px-2 text-xs font-medium transition-colors cursor-pointer',
                  rootCopied
                    ? 'border-[var(--abc-success)]/40 bg-[var(--abc-success-soft)] text-[var(--abc-success)]'
                    : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]'
                )}
              >
                {rootCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{rootCopied ? labels.copiedLabel : labels.copyJsonLabel}</span>
              </button>
            )}
          </div>
        </div>
      )}

      <div style={scrollStyle} className="overflow-auto p-2">
        {!parsed.ok ? (
          <div className="space-y-2 p-1">
            <div
              role="alert"
              className="flex items-start gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-warning)]/35 bg-[var(--abc-warning-soft)] px-3 py-2 text-xs text-[var(--abc-warning)]"
            >
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <div className="min-w-0">
                <div className="font-medium text-[var(--abc-fg)]">{labels.parseErrorTitle}</div>
                <div className="mt-0.5 font-mono text-[11px] text-[var(--abc-fg-muted)]">
                  {parsed.error}
                </div>
              </div>
            </div>
            <pre className="overflow-x-auto rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-3 font-mono text-xs text-[var(--abc-fg)] whitespace-pre-wrap break-words">
              {parsed.raw}
            </pre>
          </div>
        ) : parsed.isEmptyInput ? (
          <div className="py-8 text-center text-xs text-[var(--abc-fg-muted)]">
            {emptyText ?? labels.emptyText}
          </div>
        ) : flattenedRows.length === 0 ? (
          <div className="py-8 text-center text-xs text-[var(--abc-fg-muted)]">
            {labels.noMatchText}
          </div>
        ) : (
          <div role="tree" aria-label={ariaLabel} className="space-y-0.5">
            {flattenedRows.map((row) => {
              if (row.kind === 'show-more') {
                return (
                  <div
                    key={row.rowKey}
                    style={{ paddingLeft: `${row.depth * 16 + 28}px` }}
                    className="py-1"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setChildLimits((prev) => ({
                          ...prev,
                          [row.parentPath]: (prev[row.parentPath] ?? maxChildren) + maxChildren,
                        }))
                      }
                      className="rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer"
                    >
                      {labels.showMoreItemsLabel(row.remaining)}
                    </button>
                  </div>
                )
              }

              if (row.kind === 'depth-limit') {
                return (
                  <div
                    key={row.rowKey}
                    style={{ paddingLeft: `${row.depth * 16 + 28}px` }}
                    className="py-0.5 font-mono text-[11px] italic text-[var(--abc-fg-muted)]"
                  >
                    {labels.maxDepthNotice}
                  </div>
                )
              }

              return (
                <JsonTreeNodeRow
                  key={row.path}
                  row={row}
                  rootLabel={rootLabel}
                  searchNeedle={trimmedQuery}
                  isMatched={searchResult.matchedPaths.has(row.path)}
                  isFocused={activeFocusPath === row.path}
                  showItemCount={showItemCount}
                  copyable={copyable}
                  pathFormat={pathFormat}
                  maxStringLength={maxStringLength}
                  isStringExpanded={expandedStrings.has(row.path)}
                  copiedActionKey={copiedActionKey}
                  labels={labels}
                  compactTextClass={SIZE_TEXT_CLASS[resolvedSize]}
                  onToggleExpand={toggleExpandPath}
                  onToggleStringExpand={toggleStringExpand}
                  onCopyPath={handleCopyPath}
                  onCopyValue={handleCopyValue}
                  onKeyDown={handleTreeKeyDown}
                  onFocusPath={setFocusedPath}
                  registerRef={registerRef}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

JsonTreeViewer.displayName = 'JsonTreeViewer'

export default JsonTreeViewer
