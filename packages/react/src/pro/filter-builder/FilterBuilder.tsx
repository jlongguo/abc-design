import React, { useMemo, useState } from 'react'
import { createDefaultRuleGroup, formatRuleGroupSummary, type AbcRuleGroup } from '@abc-design/core'
import { CopyButton } from '../../components/typography/CopyableText'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'
import { RuleGroupNode } from './RuleGroupNode'
import type { FilterBuilderProps } from './types'

/**
 * 嵌套可视化规则筛选构建器 (FilterBuilder / RuleBuilder)
 * 驱动 @abc-design/core AST 节点树，支持三段式联动、多级嵌套与只读逻辑表达式预览。
 */
export const FilterBuilder: React.FC<FilterBuilderProps> = ({
  fields,
  value,
  defaultValue,
  onChange,
  maxDepth = 2,
  showSummary = true,
  disabled = false,
  ariaLabel = '规则筛选构建器',
  className,
}) => {
  // 使用惰性初始态保证未传受控值时节点 ID 序列稳定不递增
  const [fallbackDefault] = useState<AbcRuleGroup>(
    () => defaultValue ?? createDefaultRuleGroup(fields)
  )

  const [currentGroup, setCurrentGroup] = useControllableState<AbcRuleGroup>({
    value,
    defaultValue: fallbackDefault,
    onChange,
  })

  const fieldMap = useMemo(
    () => new Map(fields.map((f) => [f.name, f])),
    [fields]
  )

  const summaryText = useMemo(
    () => formatRuleGroupSummary(currentGroup, fields),
    [currentGroup, fields]
  )

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      data-slot="filter-builder"
      className={cn(
        'overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        className
      )}
    >
      <div className="p-2.5">
        <RuleGroupNode
          group={currentGroup}
          fields={fields}
          fieldMap={fieldMap}
          depth={0}
          maxDepth={Math.max(0, maxDepth)}
          disabled={disabled}
          onChange={setCurrentGroup}
        />
      </div>

      {showSummary && (
        <div
          data-slot="filter-builder-summary"
          className="flex items-center justify-between gap-2.5 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-2"
        >
          <span className="shrink-0 text-[11px] font-medium text-[var(--abc-fg-muted)]">
            逻辑表达式
          </span>
          <code
            title={summaryText}
            className="min-w-0 flex-1 truncate rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-surface)] px-2 py-1 font-mono text-xs text-[var(--abc-fg-secondary)] border border-[var(--abc-border)]"
          >
            {summaryText}
          </code>
          <CopyButton
            value={summaryText}
            copyLabel="复制逻辑表达式"
            copiedLabel="已复制逻辑表达式"
            title="复制逻辑表达式"
          />
        </div>
      )}
    </div>
  )
}

FilterBuilder.displayName = 'FilterBuilder'

export const RuleBuilder = FilterBuilder
