import React, { useMemo } from 'react'
import {
  getOperatorsForFieldType,
  getRuleOperatorMeta,
  type AbcRuleCondition,
  type AbcRuleFieldSchema,
  type AbcRuleOperator,
} from '@abc-design/core'
import { Trash2 } from 'lucide-react'
import { Button } from '../../components/button/Button'
import { Switch } from '../../components/form/Controls'
import { DatePicker } from '../../components/form/DatePicker'
import { Input, InputNumber } from '../../components/form/Input'
import { Select } from '../../components/form/Select'
import { cn } from '../../utils/cn'
import {
  resolveFieldChangeCondition,
  resolveOperatorChangeCondition,
  toNullableNumber,
} from './utils'

export interface RuleConditionRowProps {
  condition: AbcRuleCondition
  fields: AbcRuleFieldSchema[]
  fieldMap: Map<string, AbcRuleFieldSchema>
  disabled?: boolean
  onChange: (next: AbcRuleCondition) => void
  onRemove: () => void
}

/**
 * 单条规则条件行：字段 -> 运算符 -> 自适应右值输入槽 + 启停与删除操作
 */
export const RuleConditionRow: React.FC<RuleConditionRowProps> = ({
  condition,
  fields,
  fieldMap,
  disabled = false,
  onChange,
  onRemove,
}) => {
  const schema = fieldMap.get(condition.field)
  const fieldType = schema?.type ?? 'string'
  const fieldLabel = schema?.label ?? (condition.field || '字段')
  const rowDisabled = Boolean(disabled || condition.disabled)

  const fieldOptions = useMemo(
    () => fields.map((f) => ({ value: f.name, label: f.label })),
    [fields]
  )

  const operatorOptions = useMemo(
    () => getOperatorsForFieldType(fieldType).map((op) => ({ value: op.value, label: op.label })),
    [fieldType]
  )

  const operatorMeta = getRuleOperatorMeta(condition.operator)

  const handleFieldChange = (nextField: unknown) => {
    const nextName = String(nextField ?? '')
    onChange(resolveFieldChangeCondition(condition, nextName, fieldMap))
  }

  const handleOperatorChange = (nextOpRaw: unknown) => {
    const nextOp = String(nextOpRaw ?? 'eq') as AbcRuleOperator
    onChange(resolveOperatorChangeCondition(condition, nextOp, fieldType))
  }

  const renderValueSlot = () => {
    if (operatorMeta.arity === 0) {
      return (
        <span
          role="status"
          data-slot="rule-no-value-badge"
          className="inline-flex h-[var(--abc-control-h-xs)] items-center rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)] px-2.5 text-xs text-[var(--abc-fg-muted)] select-none"
        >
          无需输入参数
        </span>
      )
    }

    if (operatorMeta.arity === 2) {
      if (fieldType === 'number') {
        return (
          <div
            role="group"
            aria-label={`${fieldLabel}数值区间`}
            className="flex min-w-0 flex-1 items-center gap-1.5"
          >
            <InputNumber
              size="xs"
              disabled={rowDisabled}
              value={toNullableNumber(condition.value)}
              onChange={(val) => onChange({ ...condition, value: val === null ? '' : val })}
              placeholder="起始值"
              className="min-w-24 flex-1"
            />
            <span className="shrink-0 text-xs text-[var(--abc-fg-muted)]">~</span>
            <InputNumber
              size="xs"
              disabled={rowDisabled}
              value={toNullableNumber(condition.valueTo)}
              onChange={(val) => onChange({ ...condition, valueTo: val === null ? '' : val })}
              placeholder="结束值"
              className="min-w-24 flex-1"
            />
            {schema?.unit && (
              <span className="shrink-0 text-xs text-[var(--abc-fg-muted)]">{schema.unit}</span>
            )}
          </div>
        )
      }

      if (fieldType === 'date') {
        return (
          <div
            role="group"
            aria-label={`${fieldLabel}日期区间`}
            className="flex min-w-0 flex-1 items-center gap-1.5"
          >
            <DatePicker
              size="xs"
              disabled={rowDisabled}
              value={String(condition.value ?? '')}
              onChange={(dateStr) => onChange({ ...condition, value: dateStr })}
              placeholder="开始日期"
              className="min-w-28 flex-1"
            />
            <span className="shrink-0 text-xs text-[var(--abc-fg-muted)]">~</span>
            <DatePicker
              size="xs"
              disabled={rowDisabled}
              value={String(condition.valueTo ?? '')}
              onChange={(dateStr) => onChange({ ...condition, valueTo: dateStr })}
              placeholder="结束日期"
              className="min-w-28 flex-1"
            />
          </div>
        )
      }

      return (
        <div
          role="group"
          aria-label={`${fieldLabel}文本区间`}
          className="flex min-w-0 flex-1 items-center gap-1.5"
        >
          <Input
            size="xs"
            disabled={rowDisabled}
            value={String(condition.value ?? '')}
            onChange={(e) => onChange({ ...condition, value: e.target.value })}
            placeholder="起始值"
            aria-label={`${fieldLabel}起始值`}
          />
          <span className="shrink-0 text-xs text-[var(--abc-fg-muted)]">~</span>
          <Input
            size="xs"
            disabled={rowDisabled}
            value={String(condition.valueTo ?? '')}
            onChange={(e) => onChange({ ...condition, valueTo: e.target.value })}
            placeholder="结束值"
            aria-label={`${fieldLabel}结束值`}
          />
        </div>
      )
    }

    // arity === 1
    if (fieldType === 'boolean') {
      const boolVal = Boolean(condition.value)
      return (
        <div className="inline-flex h-[var(--abc-control-h-xs)] items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5">
          <Switch
            size="xs"
            disabled={rowDisabled}
            checked={boolVal}
            ariaLabel={`${fieldLabel}布尔开关`}
            onChange={(checked) => onChange({ ...condition, value: checked })}
          />
          <span className="font-mono text-xs text-[var(--abc-fg-secondary)] select-none">
            {boolVal ? 'true (是)' : 'false (否)'}
          </span>
        </div>
      )
    }

    if (fieldType === 'enum') {
      const isMultiple = condition.operator === 'in' || condition.operator === 'not_in'
      const enumOptions = schema?.options ?? []
      const selectValue = isMultiple
        ? Array.isArray(condition.value)
          ? condition.value
          : []
        : Array.isArray(condition.value)
          ? (condition.value[0] ?? '')
          : (condition.value ?? '')

      return (
        <div className="min-w-40 flex-1">
          <Select
            size="xs"
            multiple={isMultiple}
            searchable={enumOptions.length > 6}
            disabled={rowDisabled}
            options={enumOptions}
            value={selectValue}
            onChange={(nextVal) =>
              onChange({
                ...condition,
                value: isMultiple ? (Array.isArray(nextVal) ? nextVal : []) : nextVal,
              })
            }
            placeholder={schema?.placeholder ?? (isMultiple ? '请选择（可多选）' : '请选择')}
            aria-label={`${fieldLabel}选项值`}
          />
        </div>
      )
    }

    if (fieldType === 'number') {
      return (
        <div className="flex min-w-32 flex-1 items-center gap-1.5">
          <InputNumber
            size="xs"
            disabled={rowDisabled}
            value={toNullableNumber(condition.value)}
            onChange={(val) => onChange({ ...condition, value: val === null ? '' : val })}
            placeholder={schema?.placeholder ?? '请输入数值'}
            className="min-w-24 flex-1"
          />
          {schema?.unit && (
            <span className="shrink-0 text-xs text-[var(--abc-fg-muted)]">{schema.unit}</span>
          )}
        </div>
      )
    }

    if (fieldType === 'date') {
      return (
        <div className="min-w-36 flex-1">
          <DatePicker
            size="xs"
            disabled={rowDisabled}
            value={String(condition.value ?? '')}
            onChange={(dateStr) => onChange({ ...condition, value: dateStr })}
            placeholder={schema?.placeholder ?? '请选择日期'}
          />
        </div>
      )
    }

    return (
      <div className="flex min-w-36 flex-1 items-center gap-1.5">
        <Input
          size="xs"
          allowClear
          disabled={rowDisabled}
          value={String(condition.value ?? '')}
          onChange={(e) => onChange({ ...condition, value: e.target.value })}
          placeholder={schema?.placeholder ?? '请输入值'}
          aria-label={`${fieldLabel}输入值`}
        />
        {schema?.unit && (
          <span className="shrink-0 text-xs text-[var(--abc-fg-muted)]">{schema.unit}</span>
        )}
      </div>
    )
  }

  return (
    <div
      data-slot="rule-condition-row"
      data-disabled={condition.disabled ? 'true' : 'false'}
      className={cn(
        'flex flex-wrap items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2 transition-opacity',
        condition.disabled && 'opacity-55 bg-[var(--abc-bg-muted)]'
      )}
    >
      {/* 1. 字段选择 */}
      <div className="w-36 shrink-0">
        <Select
          size="xs"
          searchable={fieldOptions.length > 6}
          disabled={rowDisabled}
          options={fieldOptions}
          value={condition.field}
          onChange={handleFieldChange}
          placeholder="选择字段"
          aria-label="条件字段"
        />
      </div>

      {/* 2. 运算符选择 */}
      <div className="w-32 shrink-0">
        <Select
          size="xs"
          disabled={rowDisabled}
          options={operatorOptions}
          value={condition.operator}
          onChange={handleOperatorChange}
          placeholder="选择运算符"
          aria-label="条件运算符"
        />
      </div>

      {/* 3. 动态右值输入槽 */}
      <div className="flex min-w-40 flex-1 items-center">{renderValueSlot()}</div>

      {/* 4. 启停与删除操作 */}
      <div className="ml-auto flex shrink-0 items-center gap-1.5">
        <Switch
          size="xs"
          disabled={disabled}
          checked={!condition.disabled}
          ariaLabel={condition.disabled ? '启用条件' : '禁用条件'}
          onChange={(enabled) => onChange({ ...condition, disabled: !enabled })}
        />
        <Button
          type="button"
          variant="ghost"
          size="xs"
          iconOnly
          disabled={disabled}
          aria-label="删除条件"
          title="删除条件"
          onClick={onRemove}
          className="text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-danger-soft)] enabled:hover:text-[var(--abc-danger)]"
        >
          <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
