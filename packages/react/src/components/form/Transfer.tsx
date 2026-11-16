import React, { useId, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Search, Trash2 } from 'lucide-react'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'
import { matchKeywordWithPinyin } from '../../utils/pinyin'
import { Button } from '../button/Button'
import { Checkbox } from './Controls'

export interface TransferItem {
  key: string
  title: string
  description?: string
  disabled?: boolean
}

export interface TransferProps {
  dataSource: TransferItem[]
  targetKeys?: string[]
  defaultTargetKeys?: string[]
  onChange?: (
    nextTargetKeys: string[],
    direction: 'left' | 'right',
    moveKeys: string[]
  ) => void
  selectedKeys?: string[]
  onSelectChange?: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void
  titles?: [React.ReactNode, React.ReactNode]
  searchable?: boolean
  searchPlaceholder?: string
  showSelectAll?: boolean
  /** 当单项列表超过 40 条时自动启用轻量虚拟滚动窗口 */
  virtual?: boolean
  listHeight?: number
  itemHeight?: number
  disabled?: boolean
  /** 单向穿梭模式（右侧列表仅保留快捷移除） */
  oneWay?: boolean
  emptyText?: React.ReactNode
  label?: React.ReactNode
  error?: string
  helperText?: React.ReactNode
  required?: boolean
  id?: string
  className?: string
}

const VIRTUAL_THRESHOLD = 40
const VIRTUAL_OVERSCAN = 6

interface PaneProps {
  paneId: string
  title: React.ReactNode
  items: TransferItem[]
  selectedSet: Set<string>
  onToggleKey: (key: string) => void
  onToggleAll: (keys: string[], checkAll: boolean) => void
  onInvertSelection: (keys: string[]) => void
  searchable: boolean
  searchPlaceholder: string
  keyword: string
  onKeywordChange: (val: string) => void
  showSelectAll: boolean
  virtual: boolean
  listHeight: number
  itemHeight: number
  disabled: boolean
  emptyText: React.ReactNode
  oneWayRemove?: (key: string) => void
}

const TransferPane: React.FC<PaneProps> = ({
  paneId,
  title,
  items,
  selectedSet,
  onToggleKey,
  onToggleAll,
  onInvertSelection,
  searchable,
  searchPlaceholder,
  keyword,
  onKeywordChange,
  showSelectAll,
  virtual,
  listHeight,
  itemHeight,
  disabled,
  emptyText,
  oneWayRemove,
}) => {
  const [scrollTop, setScrollTop] = useState(0)

  const filtered = useMemo(() => {
    const q = keyword.trim()
    if (!q) return items
    return items.filter(
      (item) =>
        matchKeywordWithPinyin(item.title, q) ||
        (item.description ? matchKeywordWithPinyin(item.description, q) : false)
    )
  }, [items, keyword])

  const enabledKeys = useMemo(
    () => filtered.filter((item) => !item.disabled).map((item) => item.key),
    [filtered]
  )
  const selectedInPaneCount = useMemo(
    () => enabledKeys.filter((k) => selectedSet.has(k)).length,
    [enabledKeys, selectedSet]
  )

  const allChecked = enabledKeys.length > 0 && selectedInPaneCount === enabledKeys.length
  const indeterminate = selectedInPaneCount > 0 && selectedInPaneCount < enabledKeys.length

  const useVirtual = virtual && filtered.length > VIRTUAL_THRESHOLD
  const totalHeight = filtered.length * itemHeight
  const startIdx = useVirtual
    ? Math.max(0, Math.floor(scrollTop / itemHeight) - VIRTUAL_OVERSCAN)
    : 0
  const visibleCount = useVirtual ? Math.ceil(listHeight / itemHeight) + VIRTUAL_OVERSCAN * 2 : filtered.length
  const endIdx = useVirtual ? Math.min(filtered.length, startIdx + visibleCount) : filtered.length
  const visibleRows = filtered.slice(startIdx, endIdx)

  return (
    <section
      aria-labelledby={`${paneId}-title`}
      className="flex min-w-[220px] flex-1 flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]"
    >
      <div className="flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/70 px-3 py-2">
        <div className="flex min-w-0 items-center gap-2">
          {showSelectAll && !oneWayRemove ? (
            <Checkbox
              size="xs"
              checked={allChecked}
              indeterminate={indeterminate}
              disabled={disabled || enabledKeys.length === 0}
              onChange={(checked) => onToggleAll(enabledKeys, checked)}
              aria-label={`全选 ${typeof title === 'string' ? title : '列表'}`}
            />
          ) : null}
          <span
            id={`${paneId}-title`}
            className="truncate text-xs font-semibold text-[var(--abc-fg-primary)]"
          >
            {title}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-[11px] text-[var(--abc-fg-muted)]">
          {showSelectAll && !oneWayRemove && enabledKeys.length > 0 ? (
            <button
              type="button"
              disabled={disabled}
              onClick={() => onInvertSelection(enabledKeys)}
              className="rounded px-1 py-0.5 text-[11px] text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] disabled:opacity-40"
            >
              反选
            </button>
          ) : null}
          <span className="font-mono tabular-nums">
            {oneWayRemove ? `${filtered.length}` : `${selectedInPaneCount}/${filtered.length}`}
          </span>
        </div>
      </div>

      {searchable ? (
        <div className="border-b border-[var(--abc-border)] p-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-muted)]" />
            <input
              type="text"
              value={keyword}
              disabled={disabled}
              onChange={(e) => {
                onKeywordChange(e.target.value)
                setScrollTop(0)
              }}
              placeholder={searchPlaceholder}
              aria-label={`${typeof title === 'string' ? title : '列表'}搜索`}
              className="h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-8 pr-2.5 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none disabled:bg-[var(--abc-bg-muted)]"
            />
          </div>
        </div>
      ) : null}

      <div
        role="listbox"
        aria-multiselectable={!oneWayRemove || undefined}
        style={{ height: listHeight }}
        onScroll={useVirtual ? (e) => setScrollTop(e.currentTarget.scrollTop) : undefined}
        className="overflow-y-auto p-1"
      >
        {filtered.length === 0 ? (
          <div className="flex h-full items-center justify-center text-xs text-[var(--abc-fg-muted)]">
            {emptyText}
          </div>
        ) : (
          <div
            style={
              useVirtual
                ? { height: totalHeight, position: 'relative' }
                : undefined
            }
          >
            {visibleRows.map((item, localIdx) => {
              const absIdx = startIdx + localIdx
              const checked = selectedSet.has(item.key)
              const rowDisabled = disabled || Boolean(item.disabled)

              return (
                <div
                  key={item.key}
                  style={
                    useVirtual
                      ? {
                          position: 'absolute',
                          top: absIdx * itemHeight,
                          left: 0,
                          right: 0,
                          height: itemHeight,
                        }
                      : undefined
                  }
                  className={cn(
                    'flex items-center justify-between gap-2 rounded px-2 py-1.5 text-xs transition-colors',
                    rowDisabled
                      ? 'cursor-not-allowed opacity-50'
                      : 'hover:bg-[var(--abc-bg-muted)]',
                    checked && !oneWayRemove && 'bg-[var(--abc-primary-soft)]/50'
                  )}
                >
                  {oneWayRemove ? (
                    <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="truncate font-medium text-[var(--abc-fg)]">{item.title}</div>
                        {item.description ? (
                          <div className="truncate text-[11px] text-[var(--abc-fg-muted)]">
                            {item.description}
                          </div>
                        ) : null}
                      </div>
                      <button
                        type="button"
                        disabled={rowDisabled}
                        aria-label={`移除 ${item.title}`}
                        onClick={() => oneWayRemove(item.key)}
                        className="rounded p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-danger-soft)] hover:text-[var(--abc-danger)] disabled:opacity-40"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    <Checkbox
                      size="xs"
                      checked={checked}
                      disabled={rowDisabled}
                      onChange={() => onToggleKey(item.key)}
                      label={item.title}
                      description={item.description}
                      className="w-full"
                    />
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

/**
 * 企业级双栏穿梭框 (Transfer)
 * 支持拼音首字母检索、40+ 条目自动虚拟滚动、反选、禁用项跳过与单向模式。
 */
export const Transfer: React.FC<TransferProps> = ({
  dataSource,
  targetKeys,
  defaultTargetKeys = [],
  onChange,
  selectedKeys: controlledSelectedKeys,
  onSelectChange,
  titles = ['待选列表', '已选列表'],
  searchable = true,
  searchPlaceholder = '搜索名称或拼音首字母...',
  showSelectAll = true,
  virtual = true,
  listHeight = 280,
  itemHeight = 40,
  disabled = false,
  oneWay = false,
  emptyText = '暂无数据',
  label,
  error,
  helperText,
  required = false,
  id,
  className,
}) => {
  const generatedId = useId()
  const baseId = id || `abc-transfer-${generatedId}`
  const feedbackId = `${baseId}-feedback`

  const [activeTargetKeys, setActiveTargetKeys] = useControllableState<string[]>({
    value: targetKeys,
    defaultValue: defaultTargetKeys,
  })
  const [innerSelectedKeys, setInnerSelectedKeys] = useControllableState<string[]>({
    value: controlledSelectedKeys,
    defaultValue: [],
  })
  const [leftKeyword, setLeftKeyword] = useState('')
  const [rightKeyword, setRightKeyword] = useState('')

  const targetKeySet = useMemo(() => new Set(activeTargetKeys), [activeTargetKeys])
  const selectedKeySet = useMemo(() => new Set(innerSelectedKeys), [innerSelectedKeys])

  const leftItems = useMemo(
    () => dataSource.filter((item) => !targetKeySet.has(item.key)),
    [dataSource, targetKeySet]
  )
  const rightItems = useMemo(
    () => dataSource.filter((item) => targetKeySet.has(item.key)),
    [dataSource, targetKeySet]
  )

  const emitSelection = (nextKeys: string[]) => {
    setInnerSelectedKeys(nextKeys)
    const nextSet = new Set(nextKeys)
    const srcSel = leftItems.filter((i) => nextSet.has(i.key)).map((i) => i.key)
    const dstSel = rightItems.filter((i) => nextSet.has(i.key)).map((i) => i.key)
    onSelectChange?.(srcSel, dstSel)
  }

  const toggleKey = (key: string) => {
    const next = selectedKeySet.has(key)
      ? innerSelectedKeys.filter((k) => k !== key)
      : [...innerSelectedKeys, key]
    emitSelection(next)
  }

  const toggleAll = (keys: string[], checkAll: boolean) => {
    const keySet = new Set(keys)
    const remaining = innerSelectedKeys.filter((k) => !keySet.has(k))
    const next = checkAll ? [...remaining, ...keys] : remaining
    emitSelection(next)
  }

  const invertSelection = (keys: string[]) => {
    const keySet = new Set(keys)
    const preserved = innerSelectedKeys.filter((k) => !keySet.has(k))
    const inverted = keys.filter((k) => !selectedKeySet.has(k))
    emitSelection([...preserved, ...inverted])
  }

  const moveRightKeys = useMemo(
    () => leftItems.filter((i) => !i.disabled && selectedKeySet.has(i.key)).map((i) => i.key),
    [leftItems, selectedKeySet]
  )
  const moveLeftKeys = useMemo(
    () => rightItems.filter((i) => !i.disabled && selectedKeySet.has(i.key)).map((i) => i.key),
    [rightItems, selectedKeySet]
  )

  const moveToRight = () => {
    if (moveRightKeys.length === 0 || disabled) return
    const nextTargets = [...activeTargetKeys, ...moveRightKeys]
    setActiveTargetKeys(nextTargets)
    const movedSet = new Set(moveRightKeys)
    emitSelection(innerSelectedKeys.filter((k) => !movedSet.has(k)))
    onChange?.(nextTargets, 'right', moveRightKeys)
  }

  const moveToLeft = (explicitKeys?: string[]) => {
    const keysToMove = explicitKeys ?? moveLeftKeys
    if (keysToMove.length === 0 || disabled) return
    const removeSet = new Set(keysToMove)
    const nextTargets = activeTargetKeys.filter((k) => !removeSet.has(k))
    setActiveTargetKeys(nextTargets)
    emitSelection(innerSelectedKeys.filter((k) => !removeSet.has(k)))
    onChange?.(nextTargets, 'left', keysToMove)
  }

  return (
    <div id={baseId} className={cn('w-full', className)} aria-describedby={error || helperText ? feedbackId : undefined}>
      {label ? (
        <div className="mb-1.5 text-xs font-medium text-[var(--abc-fg-secondary)]">
          {label}
          {required ? <span className="ml-0.5 text-[var(--abc-danger)]">*</span> : null}
        </div>
      ) : null}

      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        <TransferPane
          paneId={`${baseId}-left`}
          title={titles[0]}
          items={leftItems}
          selectedSet={selectedKeySet}
          onToggleKey={toggleKey}
          onToggleAll={toggleAll}
          onInvertSelection={invertSelection}
          searchable={searchable}
          searchPlaceholder={searchPlaceholder}
          keyword={leftKeyword}
          onKeywordChange={setLeftKeyword}
          showSelectAll={showSelectAll}
          virtual={virtual}
          listHeight={listHeight}
          itemHeight={itemHeight}
          disabled={disabled}
          emptyText={emptyText}
        />

        <div className="flex shrink-0 flex-row items-center justify-center gap-2 md:flex-col">
          <Button
            type="button"
            size="sm"
            variant="secondary"
            aria-label="移至右侧已选列表"
            disabled={disabled || moveRightKeys.length === 0}
            onClick={moveToRight}
            icon={<ChevronRight className="h-4 w-4" />}
            iconOnly
          />
          {!oneWay ? (
            <Button
              type="button"
              size="sm"
              variant="secondary"
              aria-label="移回左侧待选列表"
              disabled={disabled || moveLeftKeys.length === 0}
              onClick={() => moveToLeft()}
              icon={<ChevronLeft className="h-4 w-4" />}
              iconOnly
            />
          ) : null}
        </div>

        <TransferPane
          paneId={`${baseId}-right`}
          title={titles[1]}
          items={rightItems}
          selectedSet={selectedKeySet}
          onToggleKey={toggleKey}
          onToggleAll={toggleAll}
          onInvertSelection={invertSelection}
          searchable={searchable}
          searchPlaceholder={searchPlaceholder}
          keyword={rightKeyword}
          onKeywordChange={setRightKeyword}
          showSelectAll={showSelectAll}
          virtual={virtual}
          listHeight={listHeight}
          itemHeight={itemHeight}
          disabled={disabled}
          emptyText={emptyText}
          oneWayRemove={oneWay ? (key) => moveToLeft([key]) : undefined}
        />
      </div>

      {error ? (
        <p id={feedbackId} role="alert" className="mt-1.5 text-xs text-[var(--abc-danger)]">
          {error}
        </p>
      ) : helperText ? (
        <p id={feedbackId} className="mt-1.5 text-xs text-[var(--abc-fg-muted)]">
          {helperText}
        </p>
      ) : null}
    </div>
  )
}

Transfer.displayName = 'Transfer'
export default Transfer
