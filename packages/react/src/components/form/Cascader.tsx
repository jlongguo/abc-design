import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { Check, ChevronDown, ChevronRight, Loader2, Search, X } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { useControllableState } from '../../hooks/useControllableState'
import { useFloatingPosition } from '../../hooks/useFloatingPosition'
import { usePresence } from '../../hooks/usePresence'
import { cn } from '../../utils/cn'
import { matchKeywordWithPinyin } from '../../utils/pinyin'
import { Checkbox } from './Controls'
import { baseFieldControlClass } from './Input'

export interface CascaderOption {
  value: string | number
  label: React.ReactNode
  disabled?: boolean
  children?: CascaderOption[]
  isLeaf?: boolean
}

export type CascaderSingleValue = Array<string | number>
export type CascaderMultipleValue = Array<CascaderSingleValue>
export type CascaderValue = CascaderSingleValue | CascaderMultipleValue

export interface CascaderProps {
  options: CascaderOption[]
  value?: CascaderValue
  defaultValue?: CascaderValue
  onChange?: (
    value: CascaderValue,
    selectedOptions?: CascaderOption[] | CascaderOption[][]
  ) => void
  multiple?: boolean
  /** 单选模式下允许点击非叶子节点直接选中（默认 false） */
  changeOnSelect?: boolean
  /** 开启搜索与拼音首字母路径匹配 */
  searchable?: boolean
  clearable?: boolean
  expandTrigger?: 'click' | 'hover'
  separator?: string
  showFullPath?: boolean
  maxTagCount?: number
  loadData?: (selectedOptions: CascaderOption[]) => Promise<void>
  label?: React.ReactNode
  error?: string
  helperText?: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
  size?: AbcSize
  motion?: AbcMotionPreset
  matchWidth?: boolean
  emptyText?: React.ReactNode
  ariaLabel?: string
  id?: string
  className?: string
}

const SIZE_H: Record<AbcSize, string> = {
  xs: 'min-h-[var(--abc-control-h-xs)] text-xs',
  sm: 'min-h-[var(--abc-control-h-sm)] text-xs',
  md: 'min-h-[var(--abc-control-h-md)] text-sm',
  lg: 'min-h-[var(--abc-control-h-lg)] text-sm',
}

function toTextLabel(node: React.ReactNode, fallback: string | number): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  return String(fallback)
}

function samePath(a: CascaderSingleValue, b: CascaderSingleValue): boolean {
  return a.length === b.length && a.every((v, idx) => String(v) === String(b[idx]))
}

function resolveOptionPath(
  options: CascaderOption[],
  path: CascaderSingleValue
): CascaderOption[] {
  const result: CascaderOption[] = []
  let list = options
  for (const val of path) {
    const found = list.find((opt) => String(opt.value) === String(val))
    if (!found) break
    result.push(found)
    list = found.children ?? []
  }
  return result
}

interface FlatCascaderPath {
  path: CascaderSingleValue
  options: CascaderOption[]
  text: string
  disabled: boolean
}

function flattenPaths(
  options: CascaderOption[],
  separator: string,
  changeOnSelect: boolean,
  prefixPath: CascaderSingleValue = [],
  prefixOpts: CascaderOption[] = [],
  parentDisabled = false
): FlatCascaderPath[] {
  const acc: FlatCascaderPath[] = []
  for (const opt of options) {
    const nextPath = [...prefixPath, opt.value]
    const nextOpts = [...prefixOpts, opt]
    const disabled = parentDisabled || Boolean(opt.disabled)
    const hasChildren = Boolean(opt.children && opt.children.length > 0)
    if (!hasChildren || changeOnSelect) {
      acc.push({
        path: nextPath,
        options: nextOpts,
        text: nextOpts.map((o) => toTextLabel(o.label, o.value)).join(separator),
        disabled,
      })
    }
    if (hasChildren) {
      acc.push(
        ...flattenPaths(opt.children!, separator, changeOnSelect, nextPath, nextOpts, disabled)
      )
    }
  }
  return acc
}

/**
 * 多列级联选择器 (Cascader)
 * 支持单选/多选、changeOnSelect、悬停或点击展开、异步懒加载 children、拼音全路径检索与键盘多列游走。
 */
export const Cascader: React.FC<CascaderProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  multiple = false,
  changeOnSelect = false,
  searchable = false,
  clearable = false,
  expandTrigger = 'click',
  separator = ' / ',
  showFullPath = true,
  maxTagCount = 3,
  loadData,
  label,
  error,
  helperText,
  required = false,
  placeholder = '请选择',
  disabled = false,
  size,
  motion,
  matchWidth = false,
  emptyText = '暂无匹配项',
  ariaLabel,
  id,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const generatedId = useId()
  const triggerId = id || `abc-cascader-${generatedId}`
  const panelId = `${triggerId}-panel`
  const feedbackId = `${triggerId}-feedback`

  const defaultVal: CascaderValue = multiple ? [] : []
  const [innerValue, setInnerValue] = useControllableState<CascaderValue>({
    value,
    defaultValue: defaultValue ?? defaultVal,
  })

  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [activePath, setActivePath] = useState<CascaderSingleValue>([])
  const [loadingValues, setLoadingValues] = useState<Set<string>>(() => new Set())
  const [focusedCol, setFocusedCol] = useState(0)
  const [searchActiveIndex, setSearchActiveIndex] = useState(0)

  const triggerRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const { isMounted, isVisible } = usePresence(open, resolvedMotion === 'none' ? 0 : 180)
  const { style: floatingStyle, actualSide, portalContainer } = useFloatingPosition({
    open: isMounted,
    triggerRef,
    floatingRef: popoverRef,
    placement: 'bottomLeft',
    offset: 6,
    matchWidth,
  })

  const selectedPaths = useMemo<CascaderMultipleValue>(() => {
    if (multiple) {
      return Array.isArray(innerValue)
        ? (innerValue as unknown[]).filter((item): item is CascaderSingleValue => Array.isArray(item))
        : []
    }
    const single = Array.isArray(innerValue)
      ? (innerValue as unknown[]).filter(
          (item): item is string | number => typeof item === 'string' || typeof item === 'number'
        )
      : []
    return single.length > 0 ? [single] : []
  }, [innerValue, multiple])

  const columns = useMemo(() => {
    const cols: CascaderOption[][] = [options]
    let current = options
    for (const val of activePath) {
      const hit = current.find((opt) => String(opt.value) === String(val))
      if (!hit || !hit.children || hit.children.length === 0) break
      cols.push(hit.children)
      current = hit.children
    }
    return cols
  }, [options, activePath])

  const flatSearchPaths = useMemo(() => {
    if (!searchable || !keyword.trim()) return []
    const q = keyword.trim()
    return flattenPaths(options, separator, multiple ? false : changeOnSelect).filter((item) =>
      matchKeywordWithPinyin(item.text, q)
    )
  }, [searchable, keyword, options, separator, multiple, changeOnSelect])

  useEffect(() => {
    if (!open) {
      setKeyword('')
      setSearchActiveIndex(0)
      return
    }
    if (!multiple && selectedPaths[0]) {
      setActivePath(selectedPaths[0])
    } else if (!multiple || selectedPaths.length === 0) {
      setActivePath([])
    }
    setFocusedCol(0)
    setSearchActiveIndex(0)
    if (searchable) {
      window.setTimeout(() => searchRef.current?.focus(), 0)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (triggerRef.current?.contains(target) || popoverRef.current?.contains(target)) return
      setOpen(false)
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEsc, true)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEsc, true)
    }
  }, [open])

  const commitSingle = (path: CascaderSingleValue) => {
    const opts = resolveOptionPath(options, path)
    setInnerValue(path)
    onChange?.(path, opts)
    setOpen(false)
    triggerRef.current?.focus()
  }

  const toggleMultiplePath = (path: CascaderSingleValue) => {
    const exists = selectedPaths.some((p) => samePath(p, path))
    const next = exists ? selectedPaths.filter((p) => !samePath(p, path)) : [...selectedPaths, path]
    setInnerValue(next)
    onChange?.(
      next,
      next.map((p) => resolveOptionPath(options, p))
    )
  }

  const handleOptionActivate = async (opt: CascaderOption, colIdx: number) => {
    if (opt.disabled) return
    const nextPath = [...activePath.slice(0, colIdx), opt.value]
    setActivePath(nextPath)
    setFocusedCol(colIdx)

    const hasChildren = Boolean(opt.children && opt.children.length > 0)
    const shouldLoad = Boolean(loadData && !hasChildren && opt.isLeaf === false)
    if (shouldLoad && loadData) {
      const key = nextPath.map(String).join('>')
      setLoadingValues((prev) => new Set(prev).add(key))
      try {
        await loadData(resolveOptionPath(options, nextPath))
      } finally {
        setLoadingValues((prev) => {
          const next = new Set(prev)
          next.delete(key)
          return next
        })
      }
      return
    }

    if (multiple) {
      if (!hasChildren) toggleMultiplePath(nextPath)
      return
    }

    if (!hasChildren || changeOnSelect) {
      commitSingle(nextPath)
    }
  }

  const handleOptionHover = (opt: CascaderOption, colIdx: number) => {
    if (expandTrigger !== 'hover' || opt.disabled) return
    if (opt.children && opt.children.length > 0) {
      setActivePath([...activePath.slice(0, colIdx), opt.value])
    }
  }

  const formatPathLabel = useCallback(
    (path: CascaderSingleValue) => {
      const resolved = resolveOptionPath(options, path)
      if (resolved.length === 0) return path.join(separator)
      if (!showFullPath) {
        const leaf = resolved[resolved.length - 1]
        return toTextLabel(leaf.label, leaf.value)
      }
      return resolved.map((o) => toTextLabel(o.label, o.value)).join(separator)
    },
    [options, separator, showFullPath]
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setOpen(true)
      }
      return
    }

    if (e.key === 'Escape') {
      e.preventDefault()
      e.stopPropagation()
      setOpen(false)
      triggerRef.current?.focus()
      return
    }

    if (e.key === 'Tab') {
      setOpen(false)
      return
    }

    const inSearchInput = e.target === searchRef.current
    if (inSearchInput && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      return
    }

    if (searchable && keyword.trim()) {
      const enabledSearchItems = flatSearchPaths
        .map((item, idx) => ({ item, idx }))
        .filter(({ item }) => !item.disabled)

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (enabledSearchItems.length === 0) return
        const curPos = enabledSearchItems.findIndex(({ idx }) => idx === searchActiveIndex)
        const nextEntry = enabledSearchItems[(curPos + 1) % enabledSearchItems.length]
        if (nextEntry) setSearchActiveIndex(nextEntry.idx)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (enabledSearchItems.length === 0) return
        const curPos = enabledSearchItems.findIndex(({ idx }) => idx === searchActiveIndex)
        const prevPos = curPos <= 0 ? enabledSearchItems.length - 1 : curPos - 1
        const prevEntry = enabledSearchItems[prevPos]
        if (prevEntry) setSearchActiveIndex(prevEntry.idx)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const activeEntry = flatSearchPaths[searchActiveIndex]
        const targetEntry =
          activeEntry && !activeEntry.disabled ? activeEntry : enabledSearchItems[0]?.item
        if (targetEntry) {
          if (multiple) toggleMultiplePath(targetEntry.path)
          else commitSingle(targetEntry.path)
        }
      }
      return
    }

    const colOptions = (columns[focusedCol] ?? []).filter((o) => !o.disabled)
    if (colOptions.length === 0) return
    const currentVal = activePath[focusedCol]
    const curIdx = colOptions.findIndex((o) => String(o.value) === String(currentVal))

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const nextOpt = colOptions[(curIdx + 1 + colOptions.length) % colOptions.length]
      setActivePath([...activePath.slice(0, focusedCol), nextOpt.value])
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (colOptions.length === 0) return
      const prevIdx = curIdx <= 0 ? colOptions.length - 1 : curIdx - 1
      const prevOpt = colOptions[prevIdx]
      if (prevOpt) setActivePath([...activePath.slice(0, focusedCol), prevOpt.value])
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      const current = colOptions[Math.max(0, curIdx)]
      if (current?.children?.length) {
        const child = current.children.find((c) => !c.disabled)
        setActivePath(
          child
            ? [...activePath.slice(0, focusedCol), current.value, child.value]
            : [...activePath.slice(0, focusedCol), current.value]
        )
        setFocusedCol((c) => c + 1)
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      if (focusedCol > 0) {
        setActivePath((prev) => prev.slice(0, focusedCol))
        setFocusedCol((c) => Math.max(0, c - 1))
      }
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const current = colOptions[Math.max(0, curIdx)]
      if (current) void handleOptionActivate(current, focusedCol)
    }
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    const emptyVal: CascaderValue = multiple ? [] : []
    setInnerValue(emptyVal)
    setActivePath([])
    onChange?.(emptyVal, [])
  }

  const hasValue = selectedPaths.length > 0
  const visibleTags = multiple ? selectedPaths.slice(0, maxTagCount) : []
  const hiddenTagCount = multiple ? Math.max(0, selectedPaths.length - maxTagCount) : 0

  return (
    <div data-slot="cascader" className={cn('w-full', className)}>
      {label ? (
        <label
          htmlFor={triggerId}
          className="mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]"
        >
          {label}
          {required ? <span className="ml-0.5 text-[var(--abc-danger)]">*</span> : null}
        </label>
      ) : null}

      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        role="combobox"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls={isMounted ? panelId : undefined}
        aria-haspopup="listbox"
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error || helperText ? feedbackId : undefined}
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={cn(
          baseFieldControlClass,
          SIZE_H[resolvedSize],
          'flex items-center justify-between gap-2 px-2.5 py-1 text-left',
          error && 'border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20'
        )}
      >
        <span className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
          {!hasValue ? (
            <span className="truncate text-[var(--abc-fg-placeholder)]">{placeholder}</span>
          ) : multiple ? (
            <>
              {visibleTags.map((path) => {
                const key = path.map(String).join('>')
                return (
                  <span
                    key={key}
                    className="inline-flex max-w-[180px] items-center gap-1 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg)]"
                  >
                    <span className="truncate">{formatPathLabel(path)}</span>
                    {!disabled ? (
                      <span
                        role="button"
                        tabIndex={-1}
                        aria-label={`移除 ${formatPathLabel(path)}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleMultiplePath(path)
                        }}
                        className="rounded hover:text-[var(--abc-danger)]"
                      >
                        <X className="h-3 w-3" />
                      </span>
                    ) : null}
                  </span>
                )
              })}
              {hiddenTagCount > 0 ? (
                <span className="rounded bg-[var(--abc-primary-soft)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--abc-primary)]">
                  +{hiddenTagCount}
                </span>
              ) : null}
            </>
          ) : (
            <span className="truncate text-[var(--abc-fg)]">{formatPathLabel(selectedPaths[0])}</span>
          )}
        </span>

        <span className="flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]">
          {clearable && hasValue && !disabled ? (
            <span
              role="button"
              tabIndex={-1}
              aria-label="清空级联选择"
              onClick={handleClear}
              className="rounded p-0.5 hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
            >
              <X className="h-3.5 w-3.5" />
            </span>
          ) : null}
          <ChevronDown
            data-open={open ? 'true' : 'false'}
            className={cn(
              'abc-chevron h-3.5 w-3.5 shrink-0',
              open && 'text-[var(--abc-primary)]'
            )}
          />
        </span>
      </button>

      {isMounted &&
        portalContainer &&
        createPortal(
          <div
            ref={popoverRef}
            id={panelId}
            role="listbox"
            data-abc-floating=""
            aria-multiselectable={multiple || undefined}
            data-side={actualSide}
            data-motion={resolvedMotion}
            onMouseDown={(e) => e.stopPropagation()}
            style={floatingStyle}
            onKeyDown={handleKeyDown}
            className={cn(
              'abc-motion-popover z-[1500] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-xl',
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
          >
            {searchable ? (
              <div className="border-b border-[var(--abc-border)] p-2">
                <div className="relative">
                  <Search className="pointer-events-none absolute inset-y-0 left-2.5 my-auto h-3.5 w-3.5 text-[var(--abc-fg-muted)]" />
                  <input
                    ref={searchRef}
                    type="text"
                    value={keyword}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      setKeyword(e.target.value)
                      setSearchActiveIndex(0)
                    }}
                    placeholder="搜索全路径或输入拼音首字母..."
                    aria-label="搜索级联选项"
                    className="h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-8 pr-2.5 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none"
                  />
                </div>
              </div>
            ) : null}

            {searchable && keyword.trim() ? (
              <div className="max-h-60 min-w-[240px] overflow-y-auto p-1">
                {flatSearchPaths.length === 0 ? (
                  <div className="py-6 text-center text-xs text-[var(--abc-fg-muted)]">{emptyText}</div>
                ) : (
                  flatSearchPaths.map((item, idx) => {
                    const key = item.path.map(String).join('>')
                    const isSelected = selectedPaths.some((p) => samePath(p, item.path))
                    const isActiveSearch = idx === searchActiveIndex
                    return (
                      <button
                        key={key}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        data-active={isActiveSearch ? 'true' : undefined}
                        disabled={item.disabled}
                        onMouseEnter={() => {
                          if (!item.disabled) setSearchActiveIndex(idx)
                        }}
                        onClick={() =>
                          multiple ? toggleMultiplePath(item.path) : commitSingle(item.path)
                        }
                        className={cn(
                          'flex w-full items-center justify-between gap-2 rounded px-2.5 py-1.5 text-left text-xs transition-colors',
                          item.disabled
                            ? 'cursor-not-allowed opacity-50'
                            : isActiveSearch && !isSelected
                              ? 'bg-[var(--abc-bg-muted)]'
                              : 'hover:bg-[var(--abc-bg-muted)]',
                          isSelected && 'bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]'
                        )}
                      >
                        <span className="truncate">{item.text}</span>
                        {isSelected ? <Check className="h-3.5 w-3.5 shrink-0" /> : null}
                      </button>
                    )
                  })
                )}
              </div>
            ) : (
              <div className="flex max-h-64 divide-x divide-[var(--abc-border)] overflow-x-auto">
                {columns.map((col, colIdx) => (
                  <ul
                    key={colIdx}
                    className="min-w-[160px] max-w-[220px] flex-shrink-0 overflow-y-auto p-1"
                  >
                    {col.length === 0 ? (
                      <li className="py-6 text-center text-xs text-[var(--abc-fg-muted)]">{emptyText}</li>
                    ) : (
                      col.map((opt) => {
                        const isActiveInCol = String(activePath[colIdx] ?? '') === String(opt.value)
                        const fullPath = [...activePath.slice(0, colIdx), opt.value]
                        const isSelected = selectedPaths.some((p) => samePath(p, fullPath))
                        const hasChildren = Boolean(opt.children && opt.children.length > 0)
                        const isLoading = loadingValues.has(fullPath.map(String).join('>'))

                        return (
                          <li key={String(opt.value)}>
                            <div
                              onMouseEnter={() => handleOptionHover(opt, colIdx)}
                              className={cn(
                                'flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-xs transition-colors',
                                opt.disabled
                                  ? 'cursor-not-allowed opacity-50'
                                  : 'cursor-pointer hover:bg-[var(--abc-bg-muted)]',
                                isActiveInCol && 'bg-[var(--abc-bg-muted)] font-medium',
                                isSelected && 'bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]'
                              )}
                            >
                              {multiple && !hasChildren ? (
                                <Checkbox
                                  size="xs"
                                  checked={isSelected}
                                  disabled={opt.disabled}
                                  onChange={() => toggleMultiplePath(fullPath)}
                                  aria-label={toTextLabel(opt.label, opt.value)}
                                />
                              ) : null}
                              <button
                                type="button"
                                role="option"
                                aria-selected={isSelected || isActiveInCol}
                                disabled={opt.disabled}
                                onClick={() => void handleOptionActivate(opt, colIdx)}
                                className="flex min-w-0 flex-1 items-center justify-between gap-2 text-left"
                              >
                                <span className="truncate">{opt.label}</span>
                                <span className="shrink-0 text-[var(--abc-fg-muted)]">
                                  {isLoading ? (
                                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                  ) : hasChildren || opt.isLeaf === false ? (
                                    <ChevronRight className="h-3.5 w-3.5" />
                                  ) : isSelected && !multiple ? (
                                    <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                                  ) : null}
                                </span>
                              </button>
                            </div>
                          </li>
                        )
                      })
                    )}
                  </ul>
                ))}
              </div>
            )}
          </div>,
          portalContainer
        )}

      {error ? (
        <p id={feedbackId} role="alert" className="mt-1 text-xs text-[var(--abc-danger)]">
          {error}
        </p>
      ) : helperText ? (
        <p id={feedbackId} className="mt-1 text-xs text-[var(--abc-fg-muted)]">
          {helperText}
        </p>
      ) : null}
    </div>
  )
}

Cascader.displayName = 'Cascader'
export default Cascader
