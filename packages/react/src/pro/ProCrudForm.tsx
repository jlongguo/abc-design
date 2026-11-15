import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Loader2, Plus, Trash2 } from 'lucide-react'
import Button from '../components/button/Button'
import { ImagePreview } from '../components/display/ImagePreview'
import { StatusTag, type StatusTone } from '../components/display/StatusTag'
import Dialog, { type DialogSize } from '../components/feedback/Dialog'
import Drawer, { type DrawerSize } from '../components/feedback/Drawer'
import { TagInput } from '../components/form/AdvancedControls'
import { Switch } from '../components/form/Controls'
import { DatePicker, DateRangePicker } from '../components/form/DatePicker'
import { FormField } from '../components/form/FormField'
import { ImageUpload } from '../components/form/ImageUpload'
import { Input, InputNumber, Textarea } from '../components/form/Input'
import { Select, type SelectOption } from '../components/form/Select'
import Icon from '../components/icon/Icon'
import { IconPicker } from '../components/icon/IconPicker'
import { getNestedValue, type AbcColumn } from '../components/table/TableCore'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'

/* ==================== 1. 零外部依赖响应式表单控制器 (ProFormInstance) ==================== */

export interface ProFieldError {
  type?: string
  message?: string
}

export type ProFormErrors = Record<string, ProFieldError | undefined>

export interface ProFormWatchSubscription {
  unsubscribe: () => void
}

export interface ProFormInstance<T extends Record<string, any> = Record<string, any>> {
  getValues: {
    (): T
    <K extends keyof T & string>(name: K): T[K]
    (name: string): any
  }
  setValue: (
    name: string,
    value: any,
    options?: { shouldValidate?: boolean; shouldDirty?: boolean }
  ) => void
  watch: {
    (): T
    <K extends keyof T & string>(name: K): T[K]
    (names: string[]): any[]
    (callback: (values: T, info: { name?: string }) => void): ProFormWatchSubscription
  }
  reset: (nextValues?: Partial<T>) => void
  setError: (name: string, error: ProFieldError) => void
  clearErrors: (name?: string | string[]) => void
  trigger: (name?: string | string[]) => Promise<boolean>
  handleSubmit: (
    onValid: (values: T) => void | Promise<void>
  ) => (e?: React.FormEvent) => Promise<void>
  formState: {
    errors: ProFormErrors
    isDirty: boolean
  }
}

export interface ProSchemaLike<T = any> {
  safeParse?: (data: any) => {
    success: boolean
    data?: T
    error?: {
      issues?: ReadonlyArray<{ path?: ReadonlyArray<PropertyKey>; message?: string }>
      errors?: ReadonlyArray<{ path?: ReadonlyArray<PropertyKey>; message?: string }>
    }
  }
  shape?: Record<string, any> | (() => Record<string, any>)
  _def?: { shape?: () => Record<string, any> }
}

/**
 * 鸭子类型探测校验 Schema（兼容 Zod v3 / v4）中的字段是否为必填项，无需引入 zod 运行时依赖
 */
export function isSchemaFieldRequired(schema: ProSchemaLike | undefined, fieldKey: string): boolean {
  if (!schema || typeof schema !== 'object') return false
  try {
    const rawShape =
      typeof schema.shape === 'function'
        ? schema.shape()
        : schema.shape ?? schema._def?.shape?.()
    const fieldSchema = rawShape?.[fieldKey]
    if (!fieldSchema) return false
    const isOpt =
      typeof fieldSchema.isOptional === 'function' ? Boolean(fieldSchema.isOptional()) : false
    const isNull =
      typeof fieldSchema.isNullable === 'function' ? Boolean(fieldSchema.isNullable()) : false
    return !isOpt && !isNull
  } catch {
    return false
  }
}

export const isFieldRequired = isSchemaFieldRequired

/* ==================== 2. 统一 CRUD 表单字段模型 ==================== */

export type ProCrudFormGroup =
  | 'left'
  | 'right'
  | 'full'
  | 'hidden'
  | 'custom'
  | 'top'
  | 'bottom'
  | 'extra'

export type ProCrudFieldType =
  | 'text'
  | 'input'
  | 'password'
  | 'number'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'date'
  | 'datetime'
  | 'datetimePicker'
  | 'dateRange'
  | 'image'
  | 'color'
  | 'icon'
  | 'tags'
  | 'custom'

export interface ProCrudSelectOption {
  label: React.ReactNode
  value: string | number | boolean
  disabled?: boolean
}

export interface ProCrudFormField<T extends Record<string, any> = any> {
  /** 字段键名（与 name 互为别名） */
  key?: (NoInfer<keyof T> & string) | string
  /** 字段键名（兼容 ProTableFieldSchema） */
  name?: (NoInfer<keyof T> & string) | string
  label: string
  type?: ProCrudFieldType
  placeholder?: string
  helperText?: React.ReactNode
  tooltip?: React.ReactNode
  defaultValue?: any
  required?: boolean
  span?: number
  order?: number
  clearable?: boolean
  maxLength?: number
  rows?: number
  min?: number
  max?: number
  step?: number
  prefix?: string
  suffix?: string
  searchable?: boolean
  multiple?: boolean
  format?: string
  checkedChildren?: React.ReactNode
  unCheckedChildren?: React.ReactNode
  maxCount?: number
  maxSize?: number
  width?: number | string
  height?: number | string
  presetIcons?: string[]
  formGroup?: ProCrudFormGroup
  /** 标识该字段是否源自 ProTableFieldSchema（用于精确分派单参 disabled(editingRecord) 签名） */
  __fromFieldSchema?: boolean
  options?:
    | ProCrudSelectOption[]
    | ((form: ProFormInstance<any>, isEdit: boolean) => ProCrudSelectOption[])
  disabled?:
    | boolean
    | ((isEditOrRecord: any, form?: ProFormInstance<any>) => boolean)
  hidden?: boolean | ((isEdit: boolean, form: ProFormInstance<any>) => boolean)
  validator?: (value: any, allValues: Record<string, any>) => string | undefined
  onChange?: (value: any, form: ProFormInstance<any>) => void
  onFormReady?: (form: ProFormInstance<any>, isEdit: boolean) => void
  customUpload?: (file: File) => Promise<{ url: string } | string | undefined>
  render?: (form: ProFormInstance<any>, isEdit: boolean) => React.ReactNode
  /** 内部标识：是否优先使用原生文本数字输入以保留尾零过渡态 */
  useRawDateInput?: boolean
}

export function resolveFieldKey(field: { key?: string; name?: string }): string {
  return String(field.key ?? field.name ?? '')
}

export interface UseProFormOptions<T extends Record<string, any> = Record<string, any>> {
  defaultValues?: Partial<T>
  schema?: ProSchemaLike<T>
  fields?: ProCrudFormField<T>[]
  onValuesChange?: (values: T, changedName?: string) => void
}

/**
 * 轻量级响应式表单状态引擎：完整对齐 getValues / setValue / watch / reset / formState 交互契约
 */
export function useProForm<T extends Record<string, any> = Record<string, any>>({
  defaultValues,
  schema,
  fields = [],
  onValuesChange,
}: UseProFormOptions<T> = {}): ProFormInstance<T> {
  const defaultRef = useRef<Partial<T>>(defaultValues ?? {})
  defaultRef.current = defaultValues ?? {}

  const fieldsRef = useRef(fields)
  fieldsRef.current = fields

  const schemaRef = useRef(schema)
  schemaRef.current = schema

  const onValuesChangeRef = useRef(onValuesChange)
  onValuesChangeRef.current = onValuesChange

  const valuesRef = useRef<T>({ ...(defaultValues ?? {}) } as T)
  const errorsRef = useRef<ProFormErrors>({})
  const dirtyRef = useRef(false)
  const [, bumpVersion] = useState(0)
  const watchersRef = useRef<Set<(values: T, info: { name?: string }) => void>>(new Set())

  const notify = useCallback((changedName?: string) => {
    bumpVersion((v) => v + 1)
    const snapshot = { ...valuesRef.current }
    onValuesChangeRef.current?.(snapshot, changedName)
    watchersRef.current.forEach((cb) => cb(snapshot, { name: changedName }))
  }, [])

  const getValues = useCallback((name?: string): any => {
    if (name === undefined) {
      return { ...valuesRef.current }
    }
    if (name.includes('.')) {
      return getNestedValue(valuesRef.current, name)
    }
    return valuesRef.current[name]
  }, []) as ProFormInstance<T>['getValues']

  const setValue = useCallback(
    (name: string, value: any) => {
      valuesRef.current = {
        ...valuesRef.current,
        [name]: value,
      }
      dirtyRef.current = true
      if (errorsRef.current[name]) {
        const nextErr = { ...errorsRef.current }
        delete nextErr[name]
        errorsRef.current = nextErr
      }
      notify(name)
    },
    [notify]
  )

  const watch = useCallback((arg?: any): any => {
    if (typeof arg === 'function') {
      watchersRef.current.add(arg)
      return {
        unsubscribe: () => {
          watchersRef.current.delete(arg)
        },
      }
    }
    if (arg === undefined) {
      return { ...valuesRef.current }
    }
    if (Array.isArray(arg)) {
      return arg.map((k) => valuesRef.current[k])
    }
    return valuesRef.current[arg]
  }, []) as ProFormInstance<T>['watch']

  const reset = useCallback((nextValues?: Partial<T>) => {
    valuesRef.current = {
      ...(defaultRef.current ?? {}),
      ...(nextValues ?? {}),
    } as T
    errorsRef.current = {}
    dirtyRef.current = false
    bumpVersion((v) => v + 1)
  }, [])

  const setError = useCallback((name: string, error: ProFieldError) => {
    errorsRef.current = {
      ...errorsRef.current,
      [name]: error,
    }
    bumpVersion((v) => v + 1)
  }, [])

  const clearErrors = useCallback((name?: string | string[]) => {
    if (!name) {
      errorsRef.current = {}
    } else if (Array.isArray(name)) {
      const next = { ...errorsRef.current }
      name.forEach((k) => delete next[k])
      errorsRef.current = next
    } else {
      const next = { ...errorsRef.current }
      delete next[name]
      errorsRef.current = next
    }
    bumpVersion((v) => v + 1)
  }, [])

  const runValidation = useCallback((): { valid: boolean; data: T } => {
    const currentVals = { ...valuesRef.current }
    const nextErrors: ProFormErrors = {}

    for (const f of fieldsRef.current) {
      const fk = resolveFieldKey(f)
      if (!fk) continue
      const v = currentVals[fk]
      const isEmpty =
        v === undefined ||
        v === null ||
        (typeof v === 'string' && v.trim() === '') ||
        (Array.isArray(v) && v.length === 0)

      if (f.required && isEmpty) {
        nextErrors[fk] = { type: 'required', message: `请填写${f.label}` }
        continue
      }
      if (f.validator) {
        const msg = f.validator(v, currentVals)
        if (msg) {
          nextErrors[fk] = { type: 'validate', message: msg }
        }
      }
    }

    let finalData: T = currentVals
    const activeSchema = schemaRef.current
    if (activeSchema && typeof activeSchema.safeParse === 'function') {
      const parsed = activeSchema.safeParse(currentVals)
      if (!parsed.success) {
        const issues = parsed.error?.issues ?? parsed.error?.errors ?? []
        for (const issue of issues) {
          const pathKey =
            Array.isArray(issue.path) && issue.path.length > 0 ? String(issue.path[0]) : ''
          if (pathKey && !nextErrors[pathKey]) {
            nextErrors[pathKey] = {
              type: 'schema',
              message: issue.message || '字段格式不正确',
            }
          }
        }
      } else if (parsed.data && typeof parsed.data === 'object') {
        finalData = { ...currentVals, ...(parsed.data as Record<string, any>) } as T
      }
    }

    errorsRef.current = nextErrors
    bumpVersion((v) => v + 1)
    return {
      valid: Object.keys(nextErrors).length === 0,
      data: finalData,
    }
  }, [])

  const trigger = useCallback(async (): Promise<boolean> => {
    return runValidation().valid
  }, [runValidation])

  const handleSubmit = useCallback(
    (onValid: (values: T) => void | Promise<void>) => {
      return async (e?: React.FormEvent) => {
        e?.preventDefault?.()
        const { valid, data } = runValidation()
        if (!valid) return
        await onValid(data)
      }
    },
    [runValidation]
  )

  return {
    getValues,
    setValue,
    watch,
    reset,
    setError,
    clearErrors,
    trigger,
    handleSubmit,
    formState: {
      errors: errorsRef.current,
      isDirty: dirtyRef.current,
    },
  }
}

/* ==================== 3. 多图上传与图标快捷选择增强控件 ==================== */

function readFileAsDataUrlFallback(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(new Error('文件读取失败'))
    reader.readAsDataURL(file)
  })
}

export interface ProMultiImageUploadProps {
  /** 图片 URL 列表（兼容逗号分隔字符串或字符串数组） */
  value: string | string[]
  disabled?: boolean
  maxCount?: number
  customUpload?: (file: File) => Promise<{ url: string } | string | undefined>
  onChange: (val: string) => void
}

/**
 * 零业务耦合多图上传控件：通过 customUpload 或 AbcProvider.uploadAdapter 完成上传，支持灯箱预览与移除
 */
export const ProMultiImageUpload: React.FC<ProMultiImageUploadProps> = ({
  value,
  disabled = false,
  maxCount = 9,
  customUpload,
  onChange,
}) => {
  const { uploadAdapter, toast } = useAbcConfig()
  const [uploading, setUploading] = useState(false)

  const list = useMemo(() => {
    if (Array.isArray(value)) return value.filter(Boolean)
    return String(value || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  }, [value])

  const handleUploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0 || disabled || uploading) return
    const nextList = [...list]
    setUploading(true)
    try {
      for (let i = 0; i < files.length; i++) {
        if (nextList.length >= maxCount) {
          toast.error(`最多支持上传 ${maxCount} 张图片`)
          break
        }
        const file = files[i]
        let url = ''
        if (customUpload) {
          const res = await customUpload(file)
          url = typeof res === 'string' ? res : res?.url || ''
        } else if (uploadAdapter) {
          url = await uploadAdapter(file)
        } else {
          url = await readFileAsDataUrlFallback(file)
        }
        if (url) nextList.push(url)
      }
      onChange(nextList.join(','))
    } catch (err: any) {
      toast.error(err?.message || '上传图片失败')
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  const handleRemove = (index: number) => {
    if (disabled) return
    const nextList = list.filter((_, i) => i !== index)
    onChange(nextList.join(','))
  }

  return (
    <div className="flex flex-wrap gap-3">
      {list.map((url, idx) => (
        <div
          key={`${url}-${idx}`}
          className="group relative h-24 w-24 overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
        >
          <ImagePreview src={url} width={96} height={96} className="h-full w-full object-cover" />
          {!disabled && (
            <button
              type="button"
              onClick={() => handleRemove(idx)}
              aria-label="移除图片"
              title="移除图片"
              className="absolute top-1 right-1 rounded-full bg-[var(--abc-danger)]/90 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          )}
        </div>
      ))}
      {list.length < maxCount && !disabled && (
        <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-[var(--abc-radius-lg)] border-2 border-dashed border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)]/40 text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]">
          {uploading ? (
            <Loader2 className="h-5 w-5 animate-spin text-[var(--abc-primary)]" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
          <span className="text-[11px]">
            {uploading ? '上传中...' : `上传(${list.length}/${maxCount})`}
          </span>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            disabled={uploading}
            onChange={handleUploadFiles}
          />
        </label>
      )}
    </div>
  )
}

export const MultiImageFieldControl = ProMultiImageUpload

export interface ProIconFieldControlProps {
  value: string
  disabled?: boolean
  placeholder?: string
  presetIcons?: string[]
  onChange: (val: string) => void
}

/**
 * 表单图标选择器增强控件：同时支持手动输入图标名、常用预设胶囊点选与唤起可视化图标库
 */
export const ProIconFieldControl: React.FC<ProIconFieldControlProps> = ({
  value,
  disabled = false,
  placeholder,
  presetIcons,
  onChange,
}) => {
  const [pickerOpen, setPickerOpen] = useState(false)

  if (!presetIcons || presetIcons.length === 0) {
    return (
      <IconPicker
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
      />
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]">
          <Icon name={value || 'Sparkles'} size={16} />
        </div>
        <div className="flex-1">
          <Input
            placeholder={placeholder || '输入或从右侧选择图标'}
            disabled={disabled}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          disabled={disabled}
          onClick={() => setPickerOpen(true)}
        >
          打开图标库
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[11px] text-[var(--abc-fg-muted)]">常用推荐:</span>
        {presetIcons.map((preset) => (
          <button
            key={preset}
            type="button"
            disabled={disabled}
            onClick={() => onChange(preset)}
            className={cn(
              'inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border px-2 py-1 text-[11px] transition-colors cursor-pointer',
              value === preset
                ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                : 'border-[var(--abc-border)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]'
            )}
          >
            <Icon name={preset} size={12} />
            <span>{preset}</span>
          </button>
        ))}
      </div>
      <IconPicker
        open={pickerOpen}
        current={value}
        onClose={() => setPickerOpen(false)}
        onSelect={onChange}
      />
    </div>
  )
}

/* ==================== 4. ProCrudFormField 单字段渲染器 ==================== */

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

export interface ProCrudFormLayoutProps<F = any> {
  layout?: 'grid' | 'split'
  columnsCount?: 1 | 2
  fields: ProCrudFormField<any>[]
  isEdit: boolean
  form?: ProFormInstance<any>
  errors?: ProFormErrors
  formSchema?: ProSchemaLike<F>
  columns?: AbcColumn<any>[]
  isFieldRequired?: (schema: ProSchemaLike | undefined, fieldKey: string) => boolean
  renderFormField: (field: ProCrudFormField<any>) => React.ReactNode
}

/**
 * 声明式 CRUD 表单布局器：支持自适应网格 (grid) 与五区左右分栏 (split: top/left/right/bottom/extra)
 */
export function ProCrudFormLayout<F = any>({
  layout = 'grid',
  columnsCount = 2,
  fields,
  isEdit,
  form,
  errors = {},
  formSchema,
  columns = [],
  isFieldRequired: checkSchemaRequired = isSchemaFieldRequired,
  renderFormField,
}: ProCrudFormLayoutProps<F>) {
  const checkHidden = (field: ProCrudFormField<any>) => {
    if (field.formGroup === 'hidden') return true
    if (typeof field.hidden === 'function' && form) {
      return Boolean(field.hidden(isEdit, form))
    }
    return Boolean(field.hidden)
  }

  const renderField = (field: ProCrudFormField<any>) => {
    const fk = resolveFieldKey(field)
    const isReq = Boolean(field.required || checkSchemaRequired(formSchema, fk))
    const errObj = errors[fk]
    const errorMessage = typeof errObj === 'string' ? errObj : errObj?.message
    const matchedCol = columns.find((col) => {
      const colDataIdx = Array.isArray(col.dataIndex)
        ? col.dataIndex[0]
        : (col.dataIndex ?? col.key)
      return String(colDataIdx) === fk
    })
    const tooltip = field.tooltip ?? matchedCol?.tooltip

    return (
      <FormField
        key={fk}
        label={field.label}
        required={isReq}
        tooltip={tooltip}
        helperText={field.helperText}
        error={errorMessage}
      >
        {renderFormField(field)}
      </FormField>
    )
  }

  if (layout === 'split') {
    const visible = fields.filter((f) => !checkHidden(f))
    const topFields = visible.filter((f) => f.formGroup === 'top')
    const leftFields = visible.filter((f) => {
      const g = f.formGroup || 'left'
      return g === 'left' || g === 'full'
    })
    const rightFields = visible.filter((f) => f.formGroup === 'right')
    const bottomFields = visible.filter((f) => f.formGroup === 'bottom')
    const extraFields = visible.filter((f) => f.formGroup === 'extra')

    return (
      <div className="space-y-4">
        {topFields.length > 0 && (
          <div className="space-y-3.5">{topFields.map((f) => renderField(f))}</div>
        )}
        <div
          className={cn(
            'grid grid-cols-1 gap-5',
            rightFields.length > 0 && 'md:grid-cols-2'
          )}
        >
          <div className="space-y-3.5">{leftFields.map((f) => renderField(f))}</div>
          {rightFields.length > 0 && (
            <div className="space-y-3.5">{rightFields.map((f) => renderField(f))}</div>
          )}
        </div>
        {bottomFields.length > 0 && (
          <div className="space-y-3.5">{bottomFields.map((f) => renderField(f))}</div>
        )}
        {extraFields.length > 0 && (
          <div className="mt-4 space-y-3.5 border-t border-[var(--abc-border)] pt-4">
            {extraFields.map((f) => renderField(f))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'grid gap-3.5',
        columnsCount === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
      )}
    >
      {fields.map((field) => {
        if (checkHidden(field)) return null
        const fk = resolveFieldKey(field)
        const isFullSpan =
          columnsCount === 2 &&
          (field.span === 2 ||
            field.formGroup === 'full' ||
            (field.__fromFieldSchema && field.type === 'textarea'))
        return (
          <div key={fk} className={isFullSpan ? 'col-span-1 sm:col-span-2' : 'col-span-1'}>
            {renderField(field)}
          </div>
        )
      })}
    </div>
  )
}

export const CrudFormLayout = ProCrudFormLayout

/* ==================== 6. ProCrudFormModal 弹窗/抽屉双模态表单容器 ==================== */

export interface ProCrudFormModalProps<T extends Record<string, any> = Record<string, any>> {
  open: boolean
  onClose: () => void
  isEdit: boolean
  currentRecord: T | null
  container?: 'dialog' | 'drawer'
  dialogTitle?: { add?: string; edit?: string }
  dialogSize?: DialogSize | string
  formLayout?: 'grid' | 'split'
  formColumns?: 1 | 2
  formFields: ProCrudFormField<T>[]
  form: ProFormInstance<any>
  formSchema?: ProSchemaLike<any>
  columns: AbcColumn<T>[]
  formSubmitting: boolean
  formDetailLoading?: boolean
  formError?: string | null
  onSubmit: (e?: React.FormEvent) => void
  draftEnabled?: boolean
  showDraftButton?: boolean
  showDraftBanner?: boolean
  draftBannerMode?: 'auto-restored' | 'prompt'
  onSaveDraft?: () => void
  onRestoreDraft?: () => void
  onDiscardDraft?: () => void
  submitButtonText?: string
  renderFormExtra?: (form: ProFormInstance<any>, isEdit: boolean) => React.ReactNode
  renderCustomForm?: (props: {
    open: boolean
    onClose: () => void
    record: T | null
    isEdit: boolean
    onSuccess: () => void
  }) => React.ReactNode
  onSuccessFetch?: () => void
}

export function ProCrudFormModal<T extends Record<string, any> = Record<string, any>>({
  open,
  onClose,
  isEdit,
  currentRecord,
  container = 'dialog',
  dialogTitle,
  dialogSize,
  formLayout = 'grid',
  formColumns = 2,
  formFields,
  form,
  formSchema,
  columns,
  formSubmitting,
  formDetailLoading,
  formError,
  onSubmit,
  draftEnabled = false,
  showDraftButton = false,
  showDraftBanner = false,
  draftBannerMode = 'prompt',
  onSaveDraft,
  onRestoreDraft,
  onDiscardDraft,
  submitButtonText = '保存',
  renderFormExtra,
  renderCustomForm,
  onSuccessFetch,
}: ProCrudFormModalProps<T>) {
  if (renderCustomForm) {
    return (
      <>
        {renderCustomForm({
          open,
          onClose,
          record: currentRecord,
          isEdit,
          onSuccess: () => {
            onClose()
            onSuccessFetch?.()
          },
        })}
      </>
    )
  }

  const resolvedTitle = isEdit
    ? dialogTitle?.edit || '编辑'
    : dialogTitle?.add || '新增'

  const resolvedDialogSize = dialogSize ?? (formColumns === 2 ? 'lg' : 'md')

  const footerNode = (
    <div className="flex items-center justify-end gap-2.5">
      {draftEnabled && showDraftButton && onSaveDraft && (
        <Button variant="secondary" size="sm" type="button" onClick={onSaveDraft}>
          保存草稿
        </Button>
      )}
      {!isEdit && showDraftBanner && draftBannerMode === 'auto-restored' && onDiscardDraft && (
        <Button variant="ghost" size="sm" type="button" onClick={onDiscardDraft}>
          清空草稿
        </Button>
      )}
      <Button variant="secondary" size="sm" type="button" onClick={onClose} disabled={formSubmitting}>
        取消
      </Button>
      <Button variant="primary" size="sm" type="button" loading={formSubmitting} onClick={onSubmit}>
        {submitButtonText}
      </Button>
    </div>
  )

  const bodyNode = (
    <form onSubmit={onSubmit} className="space-y-3.5 py-1">
      {formDetailLoading && (
        <div className="flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]">
          <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin" />
          <span>正在同步最新完整数据...</span>
        </div>
      )}
      {formError && (
        <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-danger)]/30 bg-[var(--abc-danger-soft)] px-3 py-2 text-xs text-[var(--abc-danger)]">
          {formError}
        </div>
      )}
      {showDraftBanner && (
        <div className="flex items-center justify-between gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-warning)]/30 bg-[var(--abc-warning-soft)] px-3 py-2 text-xs text-[var(--abc-fg)]">
          <span>
            {draftBannerMode === 'auto-restored'
              ? '已自动为您恢复上次未提交的本地表单草稿'
              : '检测到未提交的草稿'}
          </span>
          <span className="inline-flex shrink-0 items-center gap-2.5">
            {draftBannerMode === 'prompt' && onRestoreDraft && (
              <button
                type="button"
                onClick={onRestoreDraft}
                className="font-medium text-[var(--abc-primary)] hover:underline cursor-pointer"
              >
                恢复
              </button>
            )}
            {onDiscardDraft && (
              <button
                type="button"
                onClick={onDiscardDraft}
                className="font-medium text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] hover:underline cursor-pointer"
              >
                {draftBannerMode === 'auto-restored' ? '丢弃草稿' : '丢弃'}
              </button>
            )}
          </span>
        </div>
      )}

      <ProCrudFormLayout
        layout={formLayout}
        columnsCount={formColumns}
        fields={formFields}
        isEdit={isEdit}
        form={form}
        errors={form.formState.errors}
        formSchema={formSchema}
        columns={columns}
        renderFormField={(field) => (
          <ProCrudFormFieldControl
            field={field}
            form={form}
            isEdit={isEdit}
            editingRecord={currentRecord}
          />
        )}
      />

      {renderFormExtra?.(form, isEdit)}
    </form>
  )

  if (container === 'drawer') {
    const drawerSizes: DrawerSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    const validDrawerSize: DrawerSize = drawerSizes.includes(resolvedDialogSize as DrawerSize)
      ? (resolvedDialogSize as DrawerSize)
      : 'lg'
    return (
      <Drawer
        open={open}
        onClose={onClose}
        title={resolvedTitle}
        size={validDrawerSize}
        footer={footerNode}
      >
        {bodyNode}
      </Drawer>
    )
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={resolvedTitle}
      size={resolvedDialogSize}
      footer={footerNode}
    >
      {bodyNode}
    </Dialog>
  )
}

/* ==================== 7. ProCrudViewModal 只读详情查看弹窗 ==================== */

const VIEW_COLOR_TO_TONE: Record<string, StatusTone> = {
  green: 'success',
  emerald: 'success',
  red: 'danger',
  rose: 'danger',
  yellow: 'warning',
  amber: 'warning',
  orange: 'warning',
  blue: 'info',
  cyan: 'info',
  purple: 'info',
  gray: 'neutral',
  slate: 'neutral',
}

export interface ProCrudViewModalProps<T extends Record<string, any> = Record<string, any>> {
  open: boolean
  onClose: () => void
  record: T | null
  columns: AbcColumn<T>[]
  viewTitle?: string | ((record: T) => React.ReactNode)
  viewSize?: DialogSize | string
  viewLoading?: boolean
  canEdit?: boolean
  onEditRecord?: (record: T) => void
  renderViewExtra?: (record: T) => React.ReactNode
  renderViewFooter?: (record: T, close: () => void) => React.ReactNode
}

export function ProCrudViewModal<T extends Record<string, any> = Record<string, any>>({
  open,
  onClose,
  record,
  columns,
  viewTitle = '详情',
  viewSize = 'lg',
  viewLoading = false,
  canEdit = false,
  onEditRecord,
  renderViewExtra,
  renderViewFooter,
}: ProCrudViewModalProps<T>) {
  const titleNode =
    typeof viewTitle === 'function' ? (record ? viewTitle(record) : '详情') : viewTitle

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={titleNode}
      size={viewSize}
      footer={
        renderViewFooter && record ? (
          renderViewFooter(record, onClose)
        ) : (
          <div className="flex items-center justify-end gap-2">
            {record && canEdit && onEditRecord && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  const target = record
                  onClose()
                  onEditRecord(target)
                }}
              >
                编辑此记录
              </Button>
            )}
            <Button variant="primary" size="sm" onClick={onClose}>
              关闭
            </Button>
          </div>
        )
      }
    >
      {viewLoading && (
        <div className="mb-3 flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]">
          <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin" />
          <span>正在更新详细数据...</span>
        </div>
      )}
      {record && (
        <div className="space-y-4 py-1">
          <div className="grid grid-cols-1 gap-3 text-xs md:grid-cols-2">
            {columns.map((col) => {
              if (
                col.view === false ||
                col.key === 'actions' ||
                col.key === '__actions__' ||
                col.key === '__abc_actions__' ||
                col.key === '__drag_handle__'
              ) {
                return null
              }
              const val = getNestedValue(record, (col.dataIndex ?? col.key) as string | string[])
              const typeCfg = typeof col.type === 'object' ? col.type : undefined
              const opts = typeCfg?.options ?? col.options
              const matchedOpt =
                opts && val !== undefined && val !== null && val !== ''
                  ? opts.find((o) => String(o.value) === String(val))
                  : undefined

              let renderedValue: React.ReactNode
              if (col.viewRender) {
                renderedValue = col.viewRender(val, record)
              } else if (col.render) {
                renderedValue = col.render(val, record, 0)
              } else if (matchedOpt) {
                const tone = matchedOpt.color ? VIEW_COLOR_TO_TONE[matchedOpt.color] : undefined
                renderedValue = (
                  <StatusTag status={matchedOpt.status ?? tone} dot>
                    {matchedOpt.label}
                  </StatusTag>
                )
              } else if (
                (col.type === 'image' || typeCfg?.type === 'image' || col.valueType === 'image') &&
                val
              ) {
                renderedValue = <ImagePreview src={String(val)} width={56} height={56} />
              } else {
                renderedValue = val === undefined || val === null || val === '' ? '-' : String(val)
              }

              return (
                <div
                  key={col.key}
                  className={cn(
                    'flex flex-col gap-1 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 p-3',
                    col.viewSpan === 2 && 'md:col-span-2'
                  )}
                >
                  <span className="font-semibold text-[var(--abc-fg-muted)]">{col.title}</span>
                  <div className="font-medium break-all text-[var(--abc-fg)]">{renderedValue}</div>
                </div>
              )
            })}
          </div>
          {renderViewExtra?.(record)}
        </div>
      )}
    </Dialog>
  )
}
