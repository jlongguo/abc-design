import {
  BarChart3,
  Filter,
  FolderTree,
  RotateCcw,
  Search,
  Table2,
  Tag,
  X,
} from 'lucide-react'
import * as React from 'react'
import { Button } from '../components/button/Button'
import { cn } from '../utils/cn'

export type ActiveFilterSource = 'chart' | 'toolbar' | 'table' | 'tree' | 'rule' | 'custom'

export interface ActiveFilterChip {
  /** 筛选条件唯一标识 */
  key: string
  /** 筛选字段名 */
  label: string
  /** 当前生效值展示文本 */
  valueText: React.ReactNode
  /** 筛选条件来源（用于自动匹配语义图标） */
  source?: ActiveFilterSource
  /** 单条筛选移除回调（优先于 ActiveFilterBar.onRemove 执行） */
  onRemove?: () => void
}

export interface ActiveFilterBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 当前生效的筛选胶囊列表 */
  chips: ReadonlyArray<ActiveFilterChip>
  /** 全量数据条数 */
  totalCount?: number
  /** 筛选后命中条数 */
  filteredCount?: number
  /** 统一移除回调（当单条 chip 未自带 onRemove 时回退触发） */
  onRemove?: (key: string) => void
  /** 一键清空全部筛选回调 */
  onClearAll?: () => void
  /** 清空按钮文案（默认 '清空筛选'） */
  clearAllLabel?: string
  /** 无任何筛选胶囊时是否自动隐藏整条状态栏（默认 true） */
  hideWhenEmpty?: boolean
  /** 右侧附加操作或统计内容 */
  extra?: React.ReactNode
}

const SOURCE_ICON_MAP: Record<ActiveFilterSource, React.ComponentType<{ className?: string }>> = {
  chart: BarChart3,
  toolbar: Search,
  table: Table2,
  tree: FolderTree,
  rule: Filter,
  custom: Tag,
}

/**
 * 多源联动筛选状态摘要栏 (ActiveFilterBar)
 *
 * 将来自图表下钻、左侧目录树、顶部工具栏、表头列筛选及规则引擎的激活条件
 * 汇总为统一可读胶囊条，支持单条精准撤销与一键全局重置。
 */
export const ActiveFilterBar = React.forwardRef<HTMLDivElement, ActiveFilterBarProps>(
  (
    {
      chips,
      totalCount,
      filteredCount,
      onRemove,
      onClearAll,
      clearAllLabel = '清空筛选',
      hideWhenEmpty = true,
      extra,
      className,
      ...rest
    },
    ref
  ) => {
    if (hideWhenEmpty && chips.length === 0) {
      return null
    }

    const hasTotal = typeof totalCount === 'number'
    const hasFiltered = typeof filteredCount === 'number'

    return (
      <div
        ref={ref}
        data-slot="active-filter-bar"
        role="region"
        aria-label="当前生效筛选条件"
        className={cn(
          'flex flex-wrap items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2 text-xs text-[var(--abc-fg)]',
          className
        )}
        {...rest}
      >
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
          {(hasFiltered || hasTotal) && (
            <span className="mr-1 inline-flex items-center gap-1 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums">
              {hasFiltered && hasTotal ? (
                <>
                  <span>命中</span>
                  <strong className="font-semibold text-[var(--abc-fg)]">{filteredCount}</strong>
                  <span>/ {totalCount}</span>
                </>
              ) : hasFiltered ? (
                <>
                  <span>命中</span>
                  <strong className="font-semibold text-[var(--abc-fg)]">{filteredCount}</strong>
                  <span>条</span>
                </>
              ) : (
                <>
                  <span>共</span>
                  <strong className="font-semibold text-[var(--abc-fg)]">{totalCount}</strong>
                  <span>条</span>
                </>
              )}
            </span>
          )}

          {chips.length > 0 ? (
            chips.map((chip) => {
              const source = chip.source ?? 'custom'
              const SourceIcon = SOURCE_ICON_MAP[source] ?? Tag
              const handleChipRemove = () => {
                if (chip.onRemove) {
                  chip.onRemove()
                } else {
                  onRemove?.(chip.key)
                }
              }

              return (
                <span
                  key={chip.key}
                  data-slot="active-filter-chip"
                  data-source={source}
                  className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] py-0.5 pr-1 pl-2.5 text-xs shadow-2xs transition-colors hover:border-[var(--abc-primary)]/45"
                >
                  <SourceIcon
                    aria-hidden="true"
                    className="h-3 w-3 shrink-0 text-[var(--abc-primary)]"
                  />
                  <span className="shrink-0 text-[var(--abc-fg-muted)]">{chip.label}:</span>
                  <span className="truncate font-medium text-[var(--abc-fg)]">{chip.valueText}</span>
                  <button
                    type="button"
                    aria-label={`移除筛选 ${chip.label}`}
                    onClick={handleChipRemove}
                    className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] cursor-pointer"
                  >
                    <X className="h-3 w-3" aria-hidden="true" />
                  </button>
                </span>
              )
            })
          ) : (
            <span className="text-[11px] text-[var(--abc-fg-muted)]">暂无生效筛选条件</span>
          )}
        </div>

        {(chips.length > 0 && onClearAll) || extra ? (
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            {chips.length > 0 && onClearAll && (
              <Button
                type="button"
                variant="ghost"
                size="xs"
                onClick={onClearAll}
                icon={<RotateCcw className="h-3 w-3" aria-hidden="true" />}
                className="text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
              >
                {clearAllLabel}
              </Button>
            )}
            {extra}
          </div>
        ) : null}
      </div>
    )
  }
)

ActiveFilterBar.displayName = 'ActiveFilterBar'

export default ActiveFilterBar
