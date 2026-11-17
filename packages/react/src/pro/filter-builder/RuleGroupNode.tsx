import React, { useId } from 'react'
import {
  createDefaultCondition,
  createDefaultRuleGroup,
  type AbcRuleFieldSchema,
  type AbcRuleGroup,
} from '@abc-design/core'
import { FolderPlus, Plus, Trash2 } from 'lucide-react'
import { Button } from '../../components/button/Button'
import { Switch } from '../../components/form/Controls'
import { SegmentedControl } from '../../components/navigation/SegmentedControl'
import { cn } from '../../utils/cn'
import { RuleConditionRow } from './RuleConditionRow'
import { removeGroupChild, replaceGroupChild } from './utils'

export interface RuleGroupNodeProps {
  group: AbcRuleGroup
  fields: AbcRuleFieldSchema[]
  fieldMap: Map<string, AbcRuleFieldSchema>
  depth: number
  maxDepth: number
  disabled?: boolean
  onChange: (next: AbcRuleGroup) => void
  onRemove?: () => void
}

const COMBINATOR_OPTIONS = [
  { value: 'AND' as const, label: 'AND' },
  { value: 'OR' as const, label: 'OR' },
]

/**
 * 递归规则条件组容器（支持 AND/OR 切换、NOT 取反、嵌套子条件组与条件行操作）
 */
export const RuleGroupNode: React.FC<RuleGroupNodeProps> = ({
  group,
  fields,
  fieldMap,
  depth,
  maxDepth,
  disabled = false,
  onChange,
  onRemove,
}) => {
  const notSwitchId = useId()
  const isNested = depth > 0
  const groupDisabled = Boolean(disabled || group.disabled)
  const canNest = depth < maxDepth

  const handleAddCondition = () => {
    if (fields.length === 0 || groupDisabled) return
    onChange({
      ...group,
      children: [...group.children, createDefaultCondition(fields)],
    })
  }

  const handleAddSubGroup = () => {
    if (!canNest || groupDisabled) return
    onChange({
      ...group,
      children: [...group.children, createDefaultRuleGroup(fields)],
    })
  }

  return (
    <div
      data-slot="rule-group-node"
      data-depth={depth}
      className={cn(
        'rounded-[var(--abc-radius-md)] border transition-colors',
        isNested
          ? 'border-[var(--abc-border)] border-l-2 border-l-[var(--abc-primary)] bg-[var(--abc-bg-muted)]/65 p-2.5'
          : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3',
        group.disabled && 'opacity-60'
      )}
    >
      {/* 组头控制栏 */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <SegmentedControl<'AND' | 'OR'>
            size="xs"
            disabled={groupDisabled}
            aria-label="逻辑连接符"
            options={COMBINATOR_OPTIONS}
            value={group.combinator}
            onChange={(combinator) => onChange({ ...group, combinator })}
          />

          <div
            className={cn(
              'inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2 transition-colors',
              group.not
                ? 'border-[var(--abc-warning)]/40 bg-[var(--abc-warning-soft)] text-[var(--abc-warning)]'
                : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]'
            )}
          >
            <Switch
              id={notSwitchId}
              size="xs"
              disabled={groupDisabled}
              checked={Boolean(group.not)}
              ariaLabel="规则组逻辑取反 NOT"
              onChange={(not) => onChange({ ...group, not })}
            />
            <label
              htmlFor={notSwitchId}
              className="cursor-pointer font-mono text-[11px] font-semibold select-none"
            >
              NOT
            </label>
          </div>

          {isNested && (
            <span className="rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-subtle)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]">
              L{depth}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <Button
            type="button"
            variant="secondary"
            size="xs"
            disabled={groupDisabled || fields.length === 0}
            icon={<Plus className="h-3.5 w-3.5" aria-hidden="true" />}
            onClick={handleAddCondition}
          >
            添加条件
          </Button>

          {canNest && (
            <Button
              type="button"
              variant="secondary"
              size="xs"
              disabled={groupDisabled || fields.length === 0}
              icon={<FolderPlus className="h-3.5 w-3.5" aria-hidden="true" />}
              onClick={handleAddSubGroup}
            >
              添加子条件组
            </Button>
          )}

          {isNested && onRemove && (
            <>
              <Switch
                size="xs"
                disabled={disabled}
                checked={!group.disabled}
                ariaLabel={group.disabled ? '启用条件组' : '禁用条件组'}
                onChange={(enabled) => onChange({ ...group, disabled: !enabled })}
              />
              <Button
                type="button"
                variant="ghost"
                size="xs"
                iconOnly
                disabled={disabled}
                aria-label="删除条件组"
                title="删除条件组"
                onClick={onRemove}
                className="text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-danger-soft)] enabled:hover:text-[var(--abc-danger)]"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </>
          )}
        </div>
      </div>

      {/* 子条件 / 子条件组列表 */}
      <div className="mt-2.5 space-y-2">
        {group.children.length === 0 ? (
          <div className="rounded-[var(--abc-radius-sm)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-3 text-center text-xs text-[var(--abc-fg-muted)]">
            当前组暂无条件，请点击“添加条件”构建规则
          </div>
        ) : (
          group.children.map((child, idx) =>
            child.type === 'group' ? (
              <RuleGroupNode
                key={child.id}
                group={child}
                fields={fields}
                fieldMap={fieldMap}
                depth={depth + 1}
                maxDepth={maxDepth}
                disabled={groupDisabled}
                onChange={(nextChild) => onChange(replaceGroupChild(group, idx, nextChild))}
                onRemove={() => onChange(removeGroupChild(group, idx))}
              />
            ) : (
              <RuleConditionRow
                key={child.id}
                condition={child}
                fields={fields}
                fieldMap={fieldMap}
                disabled={groupDisabled}
                onChange={(nextChild) => onChange(replaceGroupChild(group, idx, nextChild))}
                onRemove={() => onChange(removeGroupChild(group, idx))}
              />
            )
          )
        )}
      </div>
    </div>
  )
}
