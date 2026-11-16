import type {
AbcCheckedStrategy,
AbcTreeFieldNames,
AbcTreeSelectNode,
AbcTreeSimpleModeConfig,
} from '@abc-design/core'
import type React from 'react'
import type { CascaderOption } from '../../components/form/Cascader'
import type { TransferItem } from '../../components/form/Transfer'

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
  | 'treeSelect'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'date'
  | 'datetime'
  | 'datetimePicker'
  | 'dateRange'
  | 'image'
  | 'file'
  | 'upload'
  | 'cascader'
  | 'transfer'
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
  /** file / upload 专属：允许的文件扩展名或 MIME 类型（如 ".pdf,.json"） */
  accept?: string
  /** cascader 专属：级联选项树 */
  cascaderOptions?:
    | CascaderOption[]
    | ((form: ProFormInstance<any>, isEdit: boolean) => CascaderOption[])
  /** transfer 专属：穿梭框列表项 */
  transferItems?:
    | TransferItem[]
    | ((form: ProFormInstance<any>, isEdit: boolean) => TransferItem[])
  width?: number | string
  height?: number | string
  presetIcons?: string[]
  formGroup?: ProCrudFormGroup
  /** 标识该字段是否源自 ProTableFieldSchema（用于精确分派单参 disabled(editingRecord) 签名） */
  __fromFieldSchema?: boolean
  options?:
    | ProCrudSelectOption[]
    | ((form: ProFormInstance<any>, isEdit: boolean) => ProCrudSelectOption[])
  /** treeSelect 专属：静态或动态树形数据源 */
  treeData?:
    | Record<string, any>[]
    | ((form: ProFormInstance<any>, isEdit: boolean) => Record<string, any>[])
  treeCheckable?: boolean
  treeCheckStrictly?: boolean
  showCheckedStrategy?: AbcCheckedStrategy
  selectableLeafOnly?: boolean
  fieldNames?: AbcTreeFieldNames
  treeDataSimpleMode?: boolean | AbcTreeSimpleModeConfig
  maxTagCount?: number | 'responsive'
  treeDefaultExpandAll?: boolean
  loadData?: (node: AbcTreeSelectNode) => Promise<void>
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

