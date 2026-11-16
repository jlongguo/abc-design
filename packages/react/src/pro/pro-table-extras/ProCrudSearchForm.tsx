import {
ChevronDown,
ChevronUp,
RotateCcw,
Search
} from 'lucide-react'
import React,{ useMemo,useState } from 'react'
import Button from '../../components/button/Button'
import { DatePicker,DateRangePicker } from '../../components/form/DatePicker'
import { Input } from '../../components/form/Input'
import { Select,type SelectOption } from '../../components/form/Select'
import { cn } from '../../utils/cn'

export interface ProCrudSearchFieldItem {
  key: string
  label: string
  type: 'input' | 'text' | 'number' | 'select' | 'date' | 'datetimePicker' | 'dateRange'
  columnKey?: string
  placeholder?: string
  options?: SelectOption[]
  searchable?: boolean
  multiple?: boolean
  span?: number
  order?: number
  format?: string
  clearable?: boolean
}

export interface ProCrudSearchFormProps {
  searchFields: ProCrudSearchFieldItem[]
  query: Record<string, any>
  onQueryChange: (key: string, value: any) => void
  onSearch: () => void
  onReset: () => void
  renderSearchExtra?: (ctx: {
    query: Record<string, any>
    onQueryChange: (key: string, value: any) => void
    isSearchVisible: (columnKey: string) => boolean
  }) => React.ReactNode
  isSearchVisible?: (columnKey: string) => boolean
  defaultCollapsed?: boolean
  collapsed?: boolean
  onCollapseChange?: (collapsed: boolean) => void
  className?: string
}

export type CrudSearchFormProps = ProCrudSearchFormProps

export function formatFilterText(field: ProCrudSearchFieldItem, value: unknown): string {
  if (value == null || value === '') return ''
  if (Array.isArray(value)) {
    const options = field.options || []
    return value
      .map((item) => {
        const hit = options.find((opt) => String(opt.value) === String(item))
        return hit && (typeof hit.label === 'string' || typeof hit.label === 'number')
          ? String(hit.label)
          : String(item)
      })
      .filter(Boolean)
      .join('、')
  }
  if (typeof value === 'object') {
    const range = value as { start?: string; end?: string }
    return [range.start, range.end].filter(Boolean).join(' ~ ')
  }
  if (field.type === 'select' && field.options) {
    const hit = field.options.find((opt) => String(opt.value) === String(value))
    if (hit && (typeof hit.label === 'string' || typeof hit.label === 'number')) {
      return String(hit.label)
    }
  }
  return String(value)
}

const SEARCH_COLLAPSED_SPAN_LIMIT = 3

/**
 * 独立声明式多维筛选卡片：可单独挂载也可由 ProTable 内部统一编排，支持折叠、跨列与多类型日期/选择器
 */
export const ProCrudSearchForm: React.FC<ProCrudSearchFormProps> = ({
  searchFields,
  query,
  onQueryChange,
  onSearch,
  onReset,
  renderSearchExtra,
  isSearchVisible = () => true,
  defaultCollapsed = true,
  collapsed: propCollapsed,
  onCollapseChange,
  className,
}) => {
  const isControlled = propCollapsed !== undefined
  const [bodyCollapsed, setBodyCollapsed] = useState(false)
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)
  const collapsed = isControlled ? propCollapsed : internalCollapsed

  const handleToggleCollapse = () => {
    const next = !collapsed
    if (!isControlled) {
      setInternalCollapsed(next)
    }
    onCollapseChange?.(next)
  }

  const extraNode = renderSearchExtra
    ? renderSearchExtra({ query, onQueryChange, isSearchVisible })
    : null
  const hasExtraNode = Boolean(extraNode)

  const { firstRowKeys, hasExtraInFirstRow, canCollapse } = useMemo(() => {
    let currentSpan = 0
    const keys = new Set<string>()
    let extraInFirstRow = false

    for (const field of searchFields) {
      const span = field.span === 2 ? 2 : 1
      if (currentSpan + span <= SEARCH_COLLAPSED_SPAN_LIMIT) {
        currentSpan += span
        keys.add(field.key)
      } else {
        break
      }
    }

    if (hasExtraNode && currentSpan < SEARCH_COLLAPSED_SPAN_LIMIT) {
      extraInFirstRow = true
      currentSpan += 1
    }

    const hasMore = keys.size < searchFields.length || (hasExtraNode && !extraInFirstRow)
    return {
      firstRowKeys: keys,
      hasExtraInFirstRow: extraInFirstRow,
      canCollapse: hasMore,
    }
  }, [searchFields, hasExtraNode])

  if (!searchFields || searchFields.length === 0) {
    return null
  }

  const renderFieldControl = (field: ProCrudSearchFieldItem) => {
    const value = query[field.key] ?? ''
    switch (field.type) {
      case 'select':
        return (
          <Select
            value={value}
            multiple={field.multiple}
            searchable={field.searchable}
            options={field.options || []}
            placeholder={field.placeholder || `请选择${field.label}`}
            clearable={field.clearable !== false}
            onChange={(val: any) => onQueryChange(field.key, val?.target?.value ?? val)}
          />
        )
      case 'date':
        return (
          <DatePicker
            value={value}
            onChange={(val) => onQueryChange(field.key, val)}
            placeholder={field.placeholder || `请选择${field.label}`}
            format={field.format}
          />
        )
      case 'datetimePicker':
        return (
          <Input
            type="datetime-local"
            value={value ? String(value).replace(' ', 'T').slice(0, 16) : ''}
            onChange={(e) => {
              const val = e.target.value
              onQueryChange(field.key, val ? `${val.replace('T', ' ')}:00` : '')
            }}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            placeholder={field.placeholder}
            clearable={field.clearable !== false}
          />
        )
      case 'dateRange': {
        const rangeValue = query[field.key] || {}
        return (
          <DateRangePicker
            value={rangeValue}
            onChange={(range) => onQueryChange(field.key, range)}
            placeholder={
              field.placeholder ? [field.placeholder, field.placeholder] : ['开始日期', '结束日期']
            }
            format={field.format}
          />
        )
      }
      case 'input':
      default:
        return (
          <Input
            value={value}
            onChange={(e) => onQueryChange(field.key, e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            placeholder={field.placeholder || `请输入${field.label}`}
            clearable={field.clearable !== false}
          />
        )
    }
  }

  return (
    <div
      className={cn(
        'rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-2xs transition-all',
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-[var(--abc-fg)]">筛选条件</span>
        <button
          type="button"
          onClick={() => setBodyCollapsed((v) => !v)}
          className="inline-flex items-center text-xs font-medium text-[var(--abc-primary)] hover:opacity-85 cursor-pointer select-none"
        >
          <span>{bodyCollapsed ? '展开' : '收起'}</span>
          {bodyCollapsed ? (
            <ChevronDown className="ml-0.5 h-3.5 w-3.5" />
          ) : (
            <ChevronUp className="ml-0.5 h-3.5 w-3.5" />
          )}
        </button>
      </div>

      {!bodyCollapsed && (
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {searchFields.map((field) => {
            const isVisible = !collapsed || !canCollapse || firstRowKeys.has(field.key)
            return (
              <div
                key={field.key}
                className={cn(
                  field.span === 2 ? 'md:col-span-2' : 'flex flex-col justify-end',
                  !isVisible && 'hidden'
                )}
              >
                <label className="mb-1.5 block text-xs font-semibold tracking-wide text-[var(--abc-fg-secondary)]">
                  {field.label}
                </label>
                {renderFieldControl(field)}
              </div>
            )
          })}

          {extraNode && (
            <div
              className={cn(
                'flex flex-col justify-end',
                collapsed && canCollapse && !hasExtraInFirstRow && 'hidden'
              )}
            >
              {extraNode}
            </div>
          )}

          <div className="flex items-end gap-2 md:col-start-4 md:justify-end">
            <Button
              variant="primary"
              size="sm"
              onClick={onSearch}
              icon={<Search className="h-3.5 w-3.5" />}
              className="min-w-[76px] flex-1 md:flex-initial"
            >
              搜索
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={onReset}
              icon={<RotateCcw className="h-3.5 w-3.5" />}
              className="min-w-[76px] flex-1 md:flex-initial"
            >
              重置
            </Button>
            {canCollapse && (
              <button
                type="button"
                onClick={handleToggleCollapse}
                className="ml-1 inline-flex items-center justify-center px-1 py-2 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:opacity-85 cursor-pointer select-none"
              >
                <span>{collapsed ? '展开' : '收起'}</span>
                {collapsed ? (
                  <ChevronDown className="ml-0.5 h-3.5 w-3.5" />
                ) : (
                  <ChevronUp className="ml-0.5 h-3.5 w-3.5" />
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export const CrudSearchForm = ProCrudSearchForm
