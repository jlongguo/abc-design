import React from 'react'
import { TagInput } from '../../components/form/AdvancedControls'
import { Cascader } from '../../components/form/Cascader'
import { Switch } from '../../components/form/Controls'
import { DatePicker,DateRangePicker } from '../../components/form/DatePicker'
import { FileUpload } from '../../components/form/FileUpload'
import { ImageUpload } from '../../components/form/ImageUpload'
import { Input,InputNumber,Textarea } from '../../components/form/Input'
import { Select,type SelectOption } from '../../components/form/Select'
import { Transfer } from '../../components/form/Transfer'
import { TreeSelect } from '../../components/form/TreeSelect'
import { cn } from '../../utils/cn'

/* ==================== 1. 零外部依赖响应式表单控制器 (ProFormInstance) ==================== */
import { ProIconFieldControl,ProMultiImageUpload } from './extraControls'
import { resolveFieldKey,type ProCrudFormField,type ProFormInstance } from './types'

export interface ProCrudFormFieldRenderProps<T extends Record<string, any> = Record<string, any>> {
  field: ProCrudFormField<T>
  form: ProFormInstance<any>
  isEdit: boolean
  editingRecord: T | null
}

export function ProCrudFormFieldControl<T extends Record<string, any> = Record<string, any>>({
  field,
  form,
  isEdit,
  editingRecord,
}: ProCrudFormFieldRenderProps<T>): React.ReactElement | null {
  const fk = resolveFieldKey(field)
  const isHidden =
    typeof field.hidden === 'function' ? field.hidden(isEdit, form) : Boolean(field.hidden)
  if (isHidden || field.formGroup === 'hidden') return null

  if (field.type === 'custom' && field.render) {
    return <>{field.render(form, isEdit)}</>
  }

  const isDisabled =
    typeof field.disabled === 'function'
      ? field.__fromFieldSchema
        ? field.disabled(editingRecord)
        : field.disabled(isEdit, form)
      : Boolean(field.disabled)

  const currentVal = form.getValues(fk)

  const emitChange = (nextVal: any) => {
    form.setValue(fk, nextVal)
    field.onChange?.(nextVal, form)
  }

  switch (field.type) {
    case 'number':
      if (field.__fromFieldSchema) {
        return (
          <InputNumber
            disabled={isDisabled}
            min={field.min}
            max={field.max}
            step={field.step}
            value={currentVal ?? null}
            placeholder={field.placeholder}
            onChange={emitChange}
          />
        )
      }
      return (
        <Input
          type="number"
          disabled={isDisabled}
          min={field.min}
          max={field.max}
          step={field.step}
          prefix={field.prefix}
          suffix={field.suffix}
          maxLength={field.maxLength}
          value={currentVal ?? ''}
          placeholder={field.placeholder || `请输入${field.label}`}
          clearable={field.clearable !== false}
          onChange={(e) => {
            const raw = e.target.value
            // 保留小数点尾零（如 "1.0"）与负号输入过渡态，防止受控输入抹除正在键入的小数位
            const nextVal =
              raw === ''
                ? ''
                : /^-?\d*\.\d*0$/.test(raw) || raw === '-'
                  ? raw
                  : Number.isNaN(Number(raw))
                    ? raw
                    : Number(raw)
            emitChange(nextVal)
          }}
        />
      )

    case 'password':
      return (
        <Input
          type="password"
          disabled={isDisabled}
          maxLength={field.maxLength}
          value={currentVal ?? ''}
          placeholder={field.placeholder || `请输入${field.label}`}
          onChange={(e) => emitChange(e.target.value)}
        />
      )

    case 'textarea':
      return (
        <Textarea
          rows={field.rows || 3}
          disabled={isDisabled}
          maxLength={field.maxLength}
          value={currentVal ?? ''}
          placeholder={field.placeholder || `请输入${field.label}`}
          onChange={(e) => emitChange(e.target.value)}
        />
      )

    case 'select':
    case 'radio':
    case 'checkbox': {
      const resolvedOptions =
        typeof field.options === 'function' ? field.options(form, isEdit) : field.options ?? []

      if (field.type === 'radio' || field.type === 'checkbox') {
        return (
          <div className="flex flex-wrap gap-3 py-1">
            {resolvedOptions.map((opt) => (
              <label
                key={String(opt.value)}
                className={cn(
                  'inline-flex items-center gap-1.5 text-xs text-[var(--abc-fg-secondary)] select-none',
                  isDisabled || opt.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                )}
              >
                <input
                  type={field.type === 'radio' ? 'radio' : 'checkbox'}
                  disabled={isDisabled || opt.disabled}
                  checked={
                    field.type === 'radio'
                      ? String(currentVal ?? '') === String(opt.value)
                      : Array.isArray(currentVal) &&
                        currentVal.map(String).includes(String(opt.value))
                  }
                  onChange={(e) => {
                    if (field.type === 'radio') {
                      emitChange(opt.value)
                      return
                    }
                    const prevArr = Array.isArray(currentVal) ? [...currentVal] : []
                    const nextArr = e.target.checked
                      ? [...prevArr, opt.value]
                      : prevArr.filter((item) => String(item) !== String(opt.value))
                    emitChange(nextArr)
                  }}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        )
      }

      const selectOpts: SelectOption[] = resolvedOptions.map((o) => ({
        label: o.label,
        value: typeof o.value === 'boolean' ? String(o.value) : o.value,
        disabled: o.disabled,
      }))

      return (
        <Select
          value={currentVal ?? (field.multiple ? [] : '')}
          disabled={isDisabled}
          searchable={field.searchable ?? true}
          multiple={field.multiple}
          options={selectOpts}
          placeholder={field.placeholder || `请选择${field.label}`}
          allowClear={field.clearable !== false}
          onChange={(valOrEvent: any) => {
            const resolved =
              valOrEvent && typeof valOrEvent === 'object' && 'target' in valOrEvent
                ? valOrEvent.target.value
                : valOrEvent
            emitChange(resolved)
          }}
        />
      )
    }

    case 'treeSelect': {
      const resolvedTreeData =
        typeof field.treeData === 'function' ? field.treeData(form, isEdit) : field.treeData ?? []
      const isMultiTree = Boolean(field.multiple || field.treeCheckable)
      return (
        <TreeSelect
          aria-label={field.label}
          value={currentVal ?? (isMultiTree ? [] : '')}
          disabled={isDisabled}
          searchable={field.searchable ?? true}
          multiple={field.multiple}
          treeCheckable={field.treeCheckable}
          treeCheckStrictly={field.treeCheckStrictly}
          showCheckedStrategy={field.showCheckedStrategy}
          selectableLeafOnly={field.selectableLeafOnly}
          fieldNames={field.fieldNames}
          treeDataSimpleMode={field.treeDataSimpleMode}
          maxTagCount={field.maxTagCount}
          treeDefaultExpandAll={field.treeDefaultExpandAll}
          loadData={field.loadData}
          treeData={resolvedTreeData}
          placeholder={field.placeholder || `请选择${field.label}`}
          allowClear={field.clearable !== false}
          onChange={(nextVal) => emitChange(nextVal)}
        />
      )
    }

    case 'switch':
      return (
        <span className="inline-flex items-center gap-2 py-1">
          <Switch
            disabled={isDisabled}
            checked={Boolean(currentVal)}
            onChange={(checked) => emitChange(checked)}
          />
          {(field.checkedChildren || field.unCheckedChildren) && (
            <span className="text-xs text-[var(--abc-fg-secondary)]">
              {currentVal ? field.checkedChildren : field.unCheckedChildren}
            </span>
          )}
        </span>
      )

    case 'date':
      if (field.__fromFieldSchema) {
        return (
          <DatePicker
            disabled={isDisabled}
            value={currentVal ?? ''}
            placeholder={field.placeholder}
            onChange={emitChange}
          />
        )
      }
      return (
        <Input
          type="date"
          disabled={isDisabled}
          value={currentVal ?? ''}
          onChange={(e) => emitChange(e.target.value)}
        />
      )

    case 'datetime':
    case 'datetimePicker':
      return (
        <Input
          type="datetime-local"
          disabled={isDisabled}
          value={currentVal ? String(currentVal).replace(' ', 'T').slice(0, 16) : ''}
          onChange={(e) => {
            const val = e.target.value
            emitChange(val ? `${val.replace('T', ' ')}:00` : '')
          }}
        />
      )

    case 'dateRange': {
      if (field.__fromFieldSchema) {
        return (
          <DateRangePicker
            disabled={isDisabled}
            value={currentVal ?? null}
            onChange={emitChange}
          />
        )
      }
      const range = Array.isArray(currentVal) ? currentVal : ['', '']
      return (
        <div className="flex items-center gap-2">
          <Input
            type="date"
            disabled={isDisabled}
            value={range[0] || ''}
            onChange={(e) => emitChange([e.target.value, range[1] || ''])}
          />
          <span className="text-xs text-[var(--abc-fg-muted)]">至</span>
          <Input
            type="date"
            disabled={isDisabled}
            value={range[1] || ''}
            onChange={(e) => emitChange([range[0] || '', e.target.value])}
          />
        </div>
      )
    }

    case 'color':
      return (
        <div className="flex items-center gap-2">
          <input
            type="color"
            disabled={isDisabled}
            value={currentVal || '#2563eb'}
            onChange={(e) => emitChange(e.target.value)}
            className="h-8.5 w-11 shrink-0 cursor-pointer rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-0.5"
          />
          <div className="flex-1">
            <Input
              type="text"
              disabled={isDisabled}
              value={currentVal ?? ''}
              placeholder={field.placeholder || '#2563eb'}
              onChange={(e) => emitChange(e.target.value)}
            />
          </div>
        </div>
      )

    case 'icon':
      return (
        <ProIconFieldControl
          value={currentVal ? String(currentVal) : ''}
          disabled={isDisabled}
          placeholder={field.placeholder}
          presetIcons={field.presetIcons}
          onChange={emitChange}
        />
      )

    case 'tags':
      return (
        <TagInput
          disabled={isDisabled}
          value={Array.isArray(currentVal) ? currentVal : []}
          placeholder={field.placeholder}
          onChange={emitChange}
        />
      )

    case 'image': {
      const normalizedUpload = field.customUpload
        ? async (file: File) => {
            const res = await field.customUpload!(file)
            return typeof res === 'string' ? res : res?.url || ''
          }
        : undefined
      if (field.multiple) {
        return (
          <ProMultiImageUpload
            value={currentVal ?? ''}
            disabled={isDisabled}
            maxCount={field.maxCount}
            customUpload={field.customUpload}
            onChange={emitChange}
          />
        )
      }
      return (
        <ImageUpload
          value={currentVal ? String(currentVal) : ''}
          disabled={isDisabled}
          maxSizeMB={field.maxSize}
          customUpload={normalizedUpload}
          onChange={emitChange}
        />
      )
    }

    case 'file':
    case 'upload': {
      const normalizedFileUpload = field.customUpload
        ? async (file: File) => {
            const res = await field.customUpload!(file)
            return { url: typeof res === 'string' ? res : res?.url ?? '' }
          }
        : undefined
      return (
        <FileUpload
          value={Array.isArray(currentVal) ? currentVal : []}
          accept={field.accept}
          multiple={field.multiple}
          maxCount={field.maxCount}
          maxSizeMB={field.maxSize}
          disabled={isDisabled}
          customUpload={normalizedFileUpload}
          onChange={emitChange}
        />
      )
    }

    case 'cascader': {
      const resolvedCascaderOpts =
        typeof field.cascaderOptions === 'function'
          ? field.cascaderOptions(form, isEdit)
          : field.cascaderOptions ??
            ((typeof field.options === 'function'
              ? field.options(form, isEdit)
              : field.options) as any[]) ??
            []
      return (
        <Cascader
          options={resolvedCascaderOpts}
          ariaLabel={field.label}
          value={Array.isArray(currentVal) ? currentVal : []}
          multiple={field.multiple}
          searchable={field.searchable}
          clearable={field.clearable !== false}
          disabled={isDisabled}
          placeholder={field.placeholder}
          onChange={(val) => emitChange(val)}
        />
      )
    }

    case 'transfer': {
      const rawTransferItems =
        typeof field.transferItems === 'function'
          ? field.transferItems(form, isEdit)
          : field.transferItems
      const fallbackOpts =
        typeof field.options === 'function'
          ? field.options(form, isEdit)
          : field.options ?? []
      const resolvedTransferItems =
        rawTransferItems ??
        fallbackOpts.map((o) => ({
          key: String(o.value),
          title: typeof o.label === 'string' ? o.label : String(o.value),
          disabled: o.disabled,
        }))
      return (
        <Transfer
          dataSource={resolvedTransferItems}
          targetKeys={Array.isArray(currentVal) ? currentVal.map(String) : []}
          searchable={field.searchable !== false}
          disabled={isDisabled}
          onChange={(nextKeys) => emitChange(nextKeys)}
        />
      )
    }

    case 'text':
    case 'input':
    default:
      return (
        <Input
          type="text"
          disabled={isDisabled}
          maxLength={field.maxLength}
          value={currentVal ?? ''}
          placeholder={
            field.placeholder ?? (field.__fromFieldSchema ? undefined : `请输入${field.label}`)
          }
          clearable={field.__fromFieldSchema ? undefined : field.clearable !== false}
          onChange={(e) => emitChange(e.target.value)}
        />
      )
  }
}

/* ==================== 5. ProCrudFormLayout 网格与左右分栏布局 ==================== */

