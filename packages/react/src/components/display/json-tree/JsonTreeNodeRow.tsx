import React from 'react'
import { formatJsonPath, type AbcJsonPathFormat } from '@abc-design/core'
import { Check, ChevronRight, Copy, Link2 } from 'lucide-react'
import { cn } from '../../../utils/cn'
import type { FlattenedJsonRow, JsonTreeViewerLabels } from './types'

interface JsonTreeNodeRowProps {
  row: Extract<FlattenedJsonRow, { kind: 'node' }>
  rootLabel?: string
  searchNeedle: string
  isMatched: boolean
  isFocused: boolean
  showItemCount: boolean
  copyable: boolean
  pathFormat: AbcJsonPathFormat
  maxStringLength: number
  isStringExpanded: boolean
  copiedActionKey: string | null
  labels: Required<JsonTreeViewerLabels>
  compactTextClass: string
  onToggleExpand: (path: string) => void
  onToggleStringExpand: (path: string) => void
  onCopyPath: (row: Extract<FlattenedJsonRow, { kind: 'node' }>, formattedPath: string) => void
  onCopyValue: (row: Extract<FlattenedJsonRow, { kind: 'node' }>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>, path: string) => void
  onFocusPath: (path: string) => void
  registerRef: (path: string, el: HTMLDivElement | null) => void
}

function renderHighlightedText(text: string, needle: string): React.ReactNode {
  if (!needle) return text
  const lowerText = text.toLowerCase()
  const lowerNeedle = needle.toLowerCase()
  if (!lowerText.includes(lowerNeedle)) return text

  const parts: React.ReactNode[] = []
  let cursor = 0
  let matchIdx = lowerText.indexOf(lowerNeedle, cursor)
  let seq = 0
  while (matchIdx !== -1) {
    if (matchIdx > cursor) {
      parts.push(text.slice(cursor, matchIdx))
    }
    parts.push(
      <mark
        key={`m_${seq++}`}
        className="rounded bg-[var(--abc-json-match-bg)] px-0.5 font-semibold text-[var(--abc-fg)]"
      >
        {text.slice(matchIdx, matchIdx + needle.length)}
      </mark>
    )
    cursor = matchIdx + needle.length
    matchIdx = lowerText.indexOf(lowerNeedle, cursor)
  }
  if (cursor < text.length) {
    parts.push(text.slice(cursor))
  }
  return parts
}

export const JsonTreeNodeRow: React.FC<JsonTreeNodeRowProps> = React.memo(
  ({
    row,
    rootLabel,
    searchNeedle,
    isMatched,
    isFocused,
    showItemCount,
    copyable,
    pathFormat,
    maxStringLength,
    isStringExpanded,
    copiedActionKey,
    labels,
    compactTextClass,
    onToggleExpand,
    onToggleStringExpand,
    onCopyPath,
    onCopyValue,
    onKeyDown,
    onFocusPath,
    registerRef,
  }) => {
    const indentPx = row.depth * 16
    const formattedPath = formatJsonPath(row.segments, pathFormat)
    const pathCopied = copiedActionKey === `path:${row.path}`
    const valueCopied = copiedActionKey === `val:${row.path}`

    const renderKeyLabel = () => {
      if (row.keyName === null) {
        if (!rootLabel) return null
        return (
          <>
            <span className="font-medium text-[var(--abc-json-key)]">
              {renderHighlightedText(rootLabel, searchNeedle)}
            </span>
            <span className="mx-1 text-[var(--abc-fg-muted)]">:</span>
          </>
        )
      }
      if (typeof row.keyName === 'number') {
        return (
          <>
            <span className="font-mono text-[var(--abc-fg-muted)]">[{row.keyName}]</span>
            <span className="mx-1 text-[var(--abc-fg-muted)]">:</span>
          </>
        )
      }
      return (
        <>
          <span className="font-medium text-[var(--abc-json-key)]">
            &quot;{renderHighlightedText(row.keyName, searchNeedle)}&quot;
          </span>
          <span className="mr-1 text-[var(--abc-fg-muted)]">:</span>
        </>
      )
    }

    const renderValueContent = () => {
      if (row.isCircular) {
        return <span className="italic text-[var(--abc-warning)]">[Circular]</span>
      }

      if (row.isContainer) {
        const openBracket = row.valueType === 'array' ? '[' : '{'
        const closeBracket = row.valueType === 'array' ? ']' : '}'
        if (row.childCount === 0) {
          return (
            <span className="text-[var(--abc-fg-muted)]">
              {openBracket}
              {closeBracket}
            </span>
          )
        }
        return (
          <span className="inline-flex items-center gap-1.5 text-[var(--abc-fg-muted)]">
            <span>{row.isExpanded ? openBracket : `${openBracket}…${closeBracket}`}</span>
            {showItemCount && (
              <span className="rounded bg-[var(--abc-bg-muted)] px-1.5 py-0 text-[10px] tabular-nums text-[var(--abc-fg-muted)]">
                {row.valueType === 'array' ? `Array(${row.childCount})` : `{${row.childCount} keys}`}
              </span>
            )}
          </span>
        )
      }

      if (row.valueType === 'string') {
        const rawStr = String(row.value)
        const isLong = rawStr.length > maxStringLength
        const displayStr =
          isLong && !isStringExpanded ? `${rawStr.slice(0, maxStringLength)}…` : rawStr
        return (
          <span className="inline-flex flex-wrap items-baseline gap-1.5">
            <span className="break-all text-[var(--abc-json-string)]">
              &quot;{renderHighlightedText(displayStr, searchNeedle)}&quot;
            </span>
            {isLong && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onToggleStringExpand(row.path)
                }}
                className="rounded px-1 py-0 text-[10px] font-sans font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer"
              >
                {isStringExpanded ? labels.collapseTextLabel : labels.expandTextLabel}
              </button>
            )}
          </span>
        )
      }

      if (row.valueType === 'number') {
        return (
          <span className="text-[var(--abc-json-number)] tabular-nums">
            {renderHighlightedText(String(row.value), searchNeedle)}
          </span>
        )
      }

      if (row.valueType === 'boolean') {
        return (
          <span className="font-medium text-[var(--abc-json-boolean)]">
            {renderHighlightedText(String(row.value), searchNeedle)}
          </span>
        )
      }

      return (
        <span className="italic text-[var(--abc-json-null)]">
          {renderHighlightedText(row.value === undefined ? 'undefined' : 'null', searchNeedle)}
        </span>
      )
    }

    return (
      <div
        ref={(el) => registerRef(row.path, el)}
        role="treeitem"
        aria-level={row.level}
        aria-expanded={row.isExpandable ? row.isExpanded : undefined}
        aria-selected={isFocused}
        data-path={row.path}
        tabIndex={isFocused ? 0 : -1}
        onFocus={() => onFocusPath(row.path)}
        onKeyDown={(e) => onKeyDown(e, row.path)}
        onClick={() => {
          onFocusPath(row.path)
          if (row.isExpandable) {
            onToggleExpand(row.path)
          }
        }}
        style={{ paddingLeft: `${indentPx + 8}px` }}
        className={cn(
          'group flex min-h-6 items-start justify-between gap-2 rounded-[var(--abc-radius-xs)] pr-2 py-0.5 font-mono transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)]',
          compactTextClass,
          row.isExpandable ? 'cursor-pointer' : 'cursor-default',
          isMatched
            ? 'bg-[var(--abc-json-match-bg)]/45 hover:bg-[var(--abc-json-match-bg)]/65'
            : 'hover:bg-[var(--abc-bg-muted)]/85'
        )}
      >
        <div className="flex min-w-0 flex-1 items-start gap-1">
          {row.isExpandable ? (
            <button
              type="button"
              tabIndex={-1}
              aria-label={row.isExpanded ? labels.collapseNodeLabel : labels.expandNodeLabel}
              onClick={(e) => {
                e.stopPropagation()
                onToggleExpand(row.path)
              }}
              className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              <ChevronRight
                data-open={row.isExpanded ? 'true' : 'false'}
                className={cn('abc-chevron-expand h-3.5 w-3.5', row.isExpanded && 'text-[var(--abc-primary)]')}
              />
            </button>
          ) : (
            <span className="inline-block h-4 w-4 shrink-0" aria-hidden="true" />
          )}

          <div className="min-w-0 flex-1 leading-5">
            {renderKeyLabel()}
            {renderValueContent()}
          </div>
        </div>

        {copyable && (
          <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
            <button
              type="button"
              tabIndex={-1}
              aria-label={`${labels.copyPathLabel}: ${formattedPath}`}
              title={pathCopied ? labels.copiedLabel : `${labels.copyPathLabel} (${formattedPath})`}
              onClick={(e) => {
                e.stopPropagation()
                onCopyPath(row, formattedPath)
              }}
              className={cn(
                'inline-flex h-5 items-center gap-0.5 rounded px-1 text-[10px] font-sans transition-colors cursor-pointer',
                pathCopied
                  ? 'bg-[var(--abc-success-soft)] text-[var(--abc-success)]'
                  : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
              )}
            >
              {pathCopied ? <Check className="h-3 w-3" /> : <Link2 className="h-3 w-3" />}
            </button>
            <button
              type="button"
              tabIndex={-1}
              aria-label={`${labels.copyValueLabel}: ${formattedPath}`}
              title={valueCopied ? labels.copiedLabel : labels.copyValueLabel}
              onClick={(e) => {
                e.stopPropagation()
                onCopyValue(row)
              }}
              className={cn(
                'inline-flex h-5 items-center gap-0.5 rounded px-1 text-[10px] font-sans transition-colors cursor-pointer',
                valueCopied
                  ? 'bg-[var(--abc-success-soft)] text-[var(--abc-success)]'
                  : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
              )}
            >
              {valueCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            </button>
          </div>
        )}
      </div>
    )
  }
)
JsonTreeNodeRow.displayName = 'JsonTreeNodeRow'
