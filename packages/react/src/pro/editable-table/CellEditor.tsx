import React from 'react'
import { StatusTag } from '../../components/display/StatusTag'
import { Switch } from '../../components/form/Controls'
import { DatePicker } from '../../components/form/DatePicker'
import { Input, InputNumber } from '../../components/form/Input'
import { Select } from '../../components/form/Select'
import { cn } from '../../utils/cn'
import { resolveColumnField, type EditableProColumn } from './types'

export interface EditableCellProps<T = Record<string, any>> {
  column: EditableProColumn<T>
  row: T
  rowIndex: number
  isEditing: boolean
  error?: string
  onChange: (nextVal: any) => void
}

function renderDefaultDisplay<T>(value: any, column: EditableProColumn<T>): React.ReactNode {
  if (column.valueType === 'switch') {
    const active = Boolean(value)
    return (
      <StatusTag tone={active ? 'success' : 'neutral'} size="xs">
        {active ? '开启' : '关闭'}
      </StatusTag>
    )
  }

  if (column.valueType === 'select' && column.options) {
    const matched = column.options.find((opt) => String(opt.value) === String(value))
    if (matched) return matched.label
  }

  if (value === undefined || value === null || value === '') {
    return <span className="text-[var(--abc-fg-placeholder)]">-</span>
  }

  if (column.valueType === 'number' || column.valueType === 'date') {
    return <span className="font-mono tabular-nums">{String(value)}</span>
  }

  return <span>{String(value)}</span>
}

/**
 * 可编辑表格单元格渲染器
 * 按 column.editable 与编辑态在只读格式化展示与五类内置编辑控件间切换，并严格对齐各基础控件事件契约
 */
export function EditableCell<T = Record<string, any>>({
  column,
  row,
  rowIndex,
  isEditing,
  error,
  onChange,
}: EditableCellProps<T>): React.ReactElement {
  const fieldKey = resolveColumnField(column)
  const rawValue = (row as Record<string, any>)[fieldKey]
  const canEdit =
    typeof column.editable === 'function'
      ? column.editable(row, rowIndex)
      : column.editable !== false

  const columnAriaLabel = typeof column.title === 'string' ? column.title : column.key

  if (!isEditing || !canEdit) {
    const displayNode = column.render
      ? column.render(rawValue, row, rowIndex)
      : renderDefaultDisplay(rawValue, column)
    return (
      <div className="min-w-0">
        <div>{displayNode}</div>
        {error && (
          <p role="alert" className="mt-1 text-[11px] font-medium text-[var(--abc-danger)]">
            {error}
          </p>
        )}
      </div>
    )
  }

  let editorNode: React.ReactNode
  if (column.renderEditor) {
    editorNode = column.renderEditor(rawValue, row, onChange, rowIndex)
  } else {
    switch (column.valueType) {
      case 'number': {
        const numericValue =
          typeof rawValue === 'number'
            ? rawValue
            : rawValue === '' || rawValue === undefined || rawValue === null
              ? null
              : Number(rawValue)
        editorNode = (
          <InputNumber
            size="sm"
            value={Number.isNaN(numericValue) ? null : numericValue}
            min={column.min}
            max={column.max}
            step={column.step}
            placeholder={column.placeholder}
            invalid={Boolean(error)}
            onChange={(val) => onChange(val)}
          />
        )
        break
      }

      case 'select':
        editorNode = (
          <Select
            size="sm"
            aria-label={columnAriaLabel}
            value={rawValue ?? ''}
            options={column.options ?? []}
            placeholder={column.placeholder ?? '请选择'}
            invalid={Boolean(error)}
            onChange={(valOrEvent: any) => {
              const resolved =
                valOrEvent && typeof valOrEvent === 'object' && 'target' in valOrEvent
                  ? valOrEvent.target.value
                  : valOrEvent
              onChange(resolved)
            }}
          />
        )
        break

      case 'switch':
        editorNode = (
          <div className={cn('inline-flex items-center', error && 'rounded-full ring-1 ring-[var(--abc-danger)] p-0.5')}>
            <Switch
              size="sm"
              aria-label={columnAriaLabel}
              checked={Boolean(rawValue)}
              onChange={(checked) => onChange(checked)}
            />
          </div>
        )
        break

      case 'date':
        editorNode = (
          <DatePicker
            size="sm"
            value={rawValue ? String(rawValue) : ''}
            placeholder={column.placeholder}
            className={error ? 'border-[var(--abc-danger)]' : undefined}
            onChange={(dateStr) => onChange(dateStr)}
          />
        )
        break

      case 'text':
      default:
        editorNode = (
          <Input
            size="sm"
            aria-label={columnAriaLabel}
            value={rawValue ?? ''}
            placeholder={column.placeholder}
            invalid={Boolean(error)}
            onChange={(e) => onChange(e.target.value)}
          />
        )
        break
    }
  }

  return (
    <div className="min-w-0">
      {editorNode}
      {error && (
        <p role="alert" className="mt-1 text-[11px] font-medium text-[var(--abc-danger)]">
          {error}
        </p>
      )}
    </div>
  )
}
