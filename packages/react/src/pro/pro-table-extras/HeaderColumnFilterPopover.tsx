import {
Check,
Filter,
Search
} from 'lucide-react'
import React,{ useEffect,useMemo,useState } from 'react'
import Button from '../../components/button/Button'
import { Popover } from '../../components/display/Overlays'
import { DatePicker,DateRangePicker } from '../../components/form/DatePicker'
import { Input,InputNumber } from '../../components/form/Input'
import { Select,type SelectOption } from '../../components/form/Select'
import { TreeSelect } from '../../components/form/TreeSelect'
import { cn } from '../../utils/cn'

export interface HeaderColumnFilterPopoverProps {
  title: string
  filterType?:
    | 'text'
    | 'input'
    | 'number'
    | 'select'
    | 'treeSelect'
    | 'date'
    | 'datetimePicker'
    | 'dateRange'
  filterOptions?: SelectOption[]
  treeData?: Record<string, any>[]
  multiple?: boolean
  searchable?: boolean
  placeholder?: string
  format?: string
  /** 当前列是否因存在激活筛选而处于实底高亮态（自动切换触发图标为反白高对比色） */
  highlighted?: boolean
  /** 触发器图标形态：'search' 用于表头筛选模式，'filter' 用于常规列过滤 */
  iconType?: 'filter' | 'search'
  confirmText?: string
  value: any
  onApply: (nextValue: any) => void
}

function isHeaderFilterValueActive(val: any): boolean {
  if (val === undefined || val === null || val === '') return false
  if (Array.isArray(val)) return val.length > 0
  if (typeof val === 'object' && ('start' in val || 'end' in val)) {
    return Boolean(val.start || val.end)
  }
  return String(val).trim() !== ''
}

export const HeaderColumnFilterPopover: React.FC<HeaderColumnFilterPopoverProps> = ({
  title,
  filterType = 'text',
  filterOptions,
  treeData,
  multiple = false,
  searchable = false,
  placeholder,
  format,
  highlighted = false,
  iconType = 'filter',
  confirmText,
  value,
  onApply,
}) => {
  const [open, setOpen] = useState(false)
  const emptyFallback = multiple ? [] : filterType === 'dateRange' ? {} : ''
  const [draft, setDraft] = useState<any>(value ?? emptyFallback)
  const [optionKeyword, setOptionKeyword] = useState('')

  useEffect(() => {
    if (open) {
      setDraft(value ?? (multiple ? [] : filterType === 'dateRange' ? {} : ''))
      setOptionKeyword('')
    }
  }, [open, value, multiple, filterType])

  const isActive = isHeaderFilterValueActive(value)

  const applyAndClose = (nextVal: any) => {
    onApply(nextVal)
    setOpen(false)
  }

  const filteredChecklistOptions = useMemo(() => {
    const list = (filterOptions ?? []).filter((opt) => opt.value !== '')
    const q = optionKeyword.trim().toLowerCase()
    if (!q) return list
    return list.filter(
      (opt) =>
        String(opt.label ?? '')
          .toLowerCase()
          .includes(q) ||
        String(opt.value ?? '')
          .toLowerCase()
          .includes(q)
    )
  }, [filterOptions, optionKeyword])

  const renderControl = () => {
    if (filterType === 'select' && filterOptions) {
      if (multiple) {
        const selectedArr: string[] = Array.isArray(draft) ? draft.map(String) : []
        const showSearch = searchable || filteredChecklistOptions.length > 6 || Boolean(optionKeyword)
        return (
          <div className="space-y-1.5">
            {showSearch && (
              <Input
                size="xs"
                allowClear
                placeholder="搜索选项..."
                value={optionKeyword}
                onChange={(e) => setOptionKeyword(e.target.value)}
              />
            )}
            <div className="max-h-48 space-y-0.5 overflow-y-auto rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 p-1">
              {filteredChecklistOptions.length === 0 ? (
                <div className="py-3 text-center text-[11px] text-[var(--abc-fg-muted)]">
                  无匹配选项
                </div>
              ) : (
                filteredChecklistOptions.map((opt) => {
                  const valStr = String(opt.value)
                  const checked = selectedArr.includes(valStr)
                  return (
                    <button
                      key={valStr}
                      type="button"
                      disabled={opt.disabled}
                      onClick={() => {
                        const next = checked
                          ? selectedArr.filter((v) => v !== valStr)
                          : [...selectedArr, valStr]
                        setDraft(next)
                      }}
                      className={cn(
                        'flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-xs)] px-2 py-1.5 text-left text-xs transition-colors cursor-pointer',
                        checked
                          ? 'bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]'
                          : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]'
                      )}
                    >
                      <span className="truncate">{opt.label}</span>
                      <span
                        className={cn(
                          'inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border',
                          checked
                            ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white'
                            : 'border-[var(--abc-border-strong)] bg-transparent'
                        )}
                      >
                        {checked && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                      </span>
                    </button>
                  )
                })
              )}
            </div>
          </div>
        )
      }

      return (
        <Select
          size="xs"
          allowClear
          searchable={searchable}
          placeholder={placeholder || `选择${title}`}
          options={filterOptions}
          value={draft ?? ''}
          onChange={(val: any) => {
            const nextVal = val && typeof val === 'object' && 'target' in val ? val.target.value : val
            setDraft(nextVal)
          }}
        />
      )
    }

    if (filterType === 'treeSelect') {
      return (
        <TreeSelect
          size="xs"
          allowClear
          searchable={searchable}
          multiple={multiple}
          treeData={treeData ?? []}
          placeholder={placeholder || `选择${title}`}
          value={draft ?? (multiple ? [] : '')}
          onChange={(val) => setDraft(val)}
        />
      )
    }

    if (filterType === 'date' || filterType === 'datetimePicker') {
      return (
        <DatePicker
          size="xs"
          value={draft ?? ''}
          format={format}
          placeholder={placeholder || `选择${title}`}
          onChange={(val) => setDraft(val)}
        />
      )
    }

    if (filterType === 'dateRange') {
      return (
        <DateRangePicker
          size="xs"
          value={draft && typeof draft === 'object' ? draft : null}
          format={format}
          onChange={(range) => setDraft(range)}
        />
      )
    }

    if (filterType === 'number') {
      return (
        <InputNumber
          size="xs"
          value={draft === '' ? null : draft}
          placeholder={placeholder || `输入${title}`}
          onChange={(val) => setDraft(val ?? '')}
        />
      )
    }

    return (
      <Input
        size="xs"
        allowClear
        placeholder={placeholder || `输入${title}关键字`}
        value={draft ?? ''}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            applyAndClose(draft)
          }
        }}
      />
    )
  }

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      placement="bottomRight"
      panelClassName="w-64 p-3"
      content={
        <div
          data-header-filter=""
          onClick={(e) => e.stopPropagation()}
          className="space-y-2.5 text-xs font-normal text-[var(--abc-fg)]"
        >
          <div className="font-semibold text-[var(--abc-fg-secondary)]">筛选：{title}</div>
          {renderControl()}
          <div className="flex items-center justify-end gap-1.5 pt-0.5">
            <Button
              variant="secondary"
              size="xs"
              onClick={() => {
                const cleared = multiple ? [] : filterType === 'dateRange' ? {} : ''
                setDraft(cleared)
                applyAndClose(cleared)
              }}
            >
              重置
            </Button>
            <Button variant="primary" size="xs" onClick={() => applyAndClose(draft)}>
              {confirmText ?? (iconType === 'search' ? '查询' : '筛选')}
            </Button>
          </div>
        </div>
      }
    >
      <button
        type="button"
        data-header-filter=""
        aria-label={`筛选 ${title}`}
        title={`筛选 ${title}`}
        className={cn(
          'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer',
          highlighted
            ? 'text-white/95 hover:bg-white/20 hover:text-white'
            : isActive
              ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
              : 'text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
        )}
      >
        {iconType === 'search' ? (
          <Search className="h-3.5 w-3.5" />
        ) : (
          <Filter className="h-3 w-3" />
        )}
      </button>
    </Popover>
  )
}

/* ==================== 3. 高级列配置与筛选项管理弹层 ==================== */

