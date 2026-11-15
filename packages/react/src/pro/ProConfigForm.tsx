import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CheckCircle, HelpCircle, RotateCcw, Save, Upload } from 'lucide-react'
import Button from '../components/button/Button'
import ImagePreview from '../components/display/ImagePreview'
import Loading from '../components/feedback/Loading'
import { Switch } from '../components/form/Controls'
import FormField from '../components/form/FormField'
import ImageUpload from '../components/form/ImageUpload'
import { Input, InputNumber, Textarea } from '../components/form/Input'
import { Select, type SelectOption } from '../components/form/Select'
import { TreeSelect } from '../components/form/TreeSelect'
import type {
  AbcCheckedStrategy,
  AbcTreeFieldNames,
  AbcTreeSimpleModeConfig,
} from '@abc-design/core'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import { useAbcPermission } from './PermissionAndDict'
import ProFormLayout from './ProFormLayout'
import { isProApiFailure } from './useProTable'

/* ==================== 1. ProConfigForm（紧凑分组配置表单） ==================== */

export type ProConfigFieldType =
  | 'text'
  | 'password'
  | 'number'
  | 'textarea'
  | 'switch'
  | 'select'
  | 'treeSelect'
  | 'image'

export interface ProConfigFieldSchema {
  name: string
  label: string
  type?: ProConfigFieldType
  placeholder?: string
  helperText?: string
  required?: boolean
  options?: SelectOption[]
  treeData?: Record<string, any>[]
  multiple?: boolean
  treeCheckable?: boolean
  treeCheckStrictly?: boolean
  showCheckedStrategy?: AbcCheckedStrategy
  selectableLeafOnly?: boolean
  fieldNames?: AbcTreeFieldNames
  treeDataSimpleMode?: boolean | AbcTreeSimpleModeConfig
  maxTagCount?: number | 'responsive'
  /** image 类型：支持同时直接粘贴 URL/内联 SVG 源码并实时在左侧缩略框预览 */
  allowDirectUrlInput?: boolean
}

export interface ProConfigGroupSchema {
  key: string
  title: string
  description?: string
  columns?: 1 | 2
  fields: ProConfigFieldSchema[]
}

export interface ProConfigFormProps<T extends Record<string, any> = Record<string, any>> {
  groups: ProConfigGroupSchema[]
  initialValues: T
  layoutMode?: 'split' | 'grid'
  onSubmit: (values: T) => void | Promise<void>
  submitText?: string
}

/**
 * Schema 驱动的企业级分组参数配置页组件 (ProConfigForm)
 * 原生支持图片直链、文件上传与内联 <svg> 源码的实时灯箱预览及脏数据重置
 */
export function ProConfigForm<T extends Record<string, any> = Record<string, any>>({
  groups,
  initialValues,
  layoutMode = 'split',
  onSubmit,
  submitText = '保存配置',
}: ProConfigFormProps<T>) {
  const { toast } = useAbcConfig()
  const [values, setValues] = useState<T>(initialValues)
  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  const updateField = (name: string, val: any) => {
    setValues((prev) => ({ ...prev, [name]: val }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    const nextErrors: Record<string, string> = {}
    for (const grp of groups) {
      for (const field of grp.fields) {
        if (field.required) {
          const val = values[field.name]
          if (val === undefined || val === null || String(val).trim() === '') {
            nextErrors[field.name] = `请填写${field.label}`
          }
        }
      }
    }
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      toast.warning('请完善必填配置项后再提交')
      return
    }

    setSaving(true)
    try {
      await onSubmit(values)
      toast.success('配置已保存生效')
    } catch (err: any) {
      toast.error(err?.message || '保存失败')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <ProFormLayout
        mode={layoutMode}
        sections={groups.map((grp) => ({
          key: grp.key,
          title: grp.title,
          description: grp.description,
          columns: grp.columns ?? 1,
          children: grp.fields.map((field) => {
            const val = values[field.name]
            const err = errors[field.name]
            const type = field.type ?? 'text'

            return (
              <FormField
                key={field.name}
                label={field.label}
                required={field.required}
                helperText={field.helperText}
                error={err}
              >
                {type === 'switch' ? (
                  <Switch
                    checked={Boolean(val)}
                    onChange={(checked) => updateField(field.name, checked)}
                  />
                ) : type === 'number' ? (
                  <InputNumber
                    value={val ?? null}
                    placeholder={field.placeholder}
                    invalid={Boolean(err)}
                    onChange={(num) => updateField(field.name, num)}
                  />
                ) : type === 'textarea' ? (
                  <Textarea
                    value={val ?? ''}
                    placeholder={field.placeholder}
                    invalid={Boolean(err)}
                    onChange={(e) => updateField(field.name, e.target.value)}
                  />
                ) : type === 'select' ? (
                  <Select
                    options={field.options ?? []}
                    value={val ?? ''}
                    placeholder={field.placeholder}
                    invalid={Boolean(err)}
                    onChange={(v) => updateField(field.name, v)}
                  />
                ) : type === 'treeSelect' ? (
                  <TreeSelect
                    aria-label={field.label}
                    treeData={field.treeData ?? []}
                    value={val ?? (field.multiple || field.treeCheckable ? [] : '')}
                    multiple={field.multiple}
                    treeCheckable={field.treeCheckable}
                    treeCheckStrictly={field.treeCheckStrictly}
                    showCheckedStrategy={field.showCheckedStrategy}
                    selectableLeafOnly={field.selectableLeafOnly}
                    fieldNames={field.fieldNames}
                    treeDataSimpleMode={field.treeDataSimpleMode}
                    maxTagCount={field.maxTagCount}
                    searchable
                    allowClear={!field.required}
                    placeholder={field.placeholder}
                    invalid={Boolean(err)}
                    onChange={(v) => updateField(field.name, v)}
                  />
                ) : type === 'image' ? (
                  field.allowDirectUrlInput !== false ? (
                    <div className="flex items-center gap-3">
                      <ImagePreview
                        src={String(val ?? '')}
                        alt={field.label}
                        width={42}
                        height={42}
                      />
                      <Input
                        allowClear
                        value={val ?? ''}
                        placeholder={
                          field.placeholder ?? '输入图片 https:// 直链或粘贴 <svg>...</svg> 代码'
                        }
                        onChange={(e) => updateField(field.name, e.target.value)}
                      />
                    </div>
                  ) : (
                    <ImageUpload
                      value={String(val ?? '')}
                      onChange={(url) => updateField(field.name, url)}
                    />
                  )
                ) : (
                  <Input
                    type={type === 'password' ? 'password' : 'text'}
                    allowClear
                    value={val ?? ''}
                    placeholder={field.placeholder}
                    invalid={Boolean(err)}
                    onChange={(e) => updateField(field.name, e.target.value)}
                  />
                )}
              </FormField>
            )
          }),
        }))}
      />

      <div className="flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] pt-4">
        <Button
          type="button"
          variant="secondary"
          icon={<RotateCcw className="h-3.5 w-3.5" />}
          onClick={() => {
            setValues(initialValues)
            setErrors({})
            toast.info('已还原初始配置值')
          }}
        >
          重置更改
        </Button>
        <Button
          type="submit"
          variant="primary"
          loading={saving}
          icon={<Save className="h-3.5 w-3.5" />}
        >
          {submitText}
        </Button>
      </div>
    </form>
  )
}

/* ==================== 2. ProConfigPage（多选项卡声明式远程配置页框架） ==================== */

export interface ProConfigOptionItem {
  label: string
  value: string | number
  /** 是否锁定勾选不可取消（如默认必选登录方式） */
  locked?: boolean
}

export type ConfigOptionItem = ProConfigOptionItem

export interface ProConfigPageFieldSchema<T extends Record<string, any> = Record<string, any>> {
  /** 对应配置对象的字段名 */
  key: keyof T & string
  /** 字段标题 */
  label: string
  /** 控件类型 */
  type?:
    | 'input'
    | 'password'
    | 'number'
    | 'textarea'
    | 'select'
    | 'switch'
    | 'radio'
    | 'checkbox-csv'
    | 'image-url'
    | 'custom'
  /** 占位提示 */
  placeholder?: string
  /** 帮助提示文案 */
  tooltip?: string
  /** 栅格跨度：1 占半行，2 占整行 */
  span?: 1 | 2
  /** Textarea 行数 */
  rows?: number
  /** 附加样式类 */
  className?: string
  /** 单选/下拉/多选选项列表 */
  options?: ProConfigOptionItem[]
  /** 图片直链预览形状 */
  previewShape?: 'rounded' | 'circle'
  /** 是否允许点击上传按钮直接上传文件填入直链 */
  allowUpload?: boolean
  /** 自定义渲染器 */
  render?: (
    values: T,
    setFieldValue: (key: keyof T & string, val: any) => void,
    setValues: React.Dispatch<React.SetStateAction<T>>
  ) => React.ReactNode
}

export type ConfigFieldSchema<T extends Record<string, any> = Record<string, any>> =
  ProConfigPageFieldSchema<T>

export interface ProConfigTabSchema<T extends Record<string, any> = Record<string, any>> {
  /** Tab 唯一标识 */
  key: string
  /** 左侧导航显示名称 */
  label: string
  /** 左侧导航图标组件 */
  icon?: React.ComponentType<{ className?: string }>
  /** 右侧面板顶部区块标题 */
  sectionTitle: string
  /** 右侧面板顶部区块副标题说明 */
  sectionDescription?: string
  /** 表单栅格列数（默认 2 列） */
  columns?: 1 | 2
  /** 当前 Tab 包含的表单字段声明 */
  fields: ProConfigPageFieldSchema<T>[]
}

export type ConfigTabSchema<T extends Record<string, any> = Record<string, any>> =
  ProConfigTabSchema<T>

export interface ProConfigPageProps<T extends Record<string, any> = Record<string, any>> {
  /** 页面主标题 */
  title: string
  /** 页面副标题描述 */
  subTitle?: string
  /** 保存按钮权限标识 */
  permission?: string
  /** 可选自定义权限断言器（未传时默认消费 AbcProvider.permissionAdapter） */
  hasPermission?: (code?: string) => boolean
  /** 可选自定义文件上传适配器（未传时默认消费 AbcProvider.uploadAdapter） */
  customUpload?: (file: File) => Promise<{ url: string } | string | undefined>
  /** 保存按钮文案 */
  saveButtonText?: string
  /** 表单初始默认值 */
  defaultValues: T
  /** 获取配置接口 */
  fetchConfig: () => Promise<any>
  /** 保存配置接口 */
  saveConfig: (payload: any) => Promise<any>
  /** 保存前的数据转换钩子 */
  transformBeforeSave?: (values: T) => any
  /** Tab 与字段声明列表 */
  tabs: ProConfigTabSchema<T>[]
}

export type CrudConfigPageProps<T extends Record<string, any> = Record<string, any>> =
  ProConfigPageProps<T>

/**
 * 声明式多选项卡配置页面框架组件 (ProConfigPage / CrudConfigPage)
 * 统一封装：垂直导航切换、远程配置拉取、Loading 遮罩、权限校验、保存成功状态反馈及全类型配置控件渲染
 */
export function ProConfigPage<T extends Record<string, any> = Record<string, any>>({
  title,
  subTitle,
  permission,
  hasPermission: customHasPermission,
  customUpload,
  saveButtonText = '保存当前配置',
  defaultValues,
  fetchConfig,
  saveConfig,
  transformBeforeSave,
  tabs,
}: ProConfigPageProps<T>) {
  const { toast, uploadAdapter } = useAbcConfig()
  const { hasPermission: abcHasPermission } = useAbcPermission()
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.key || '')
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [uploadingKey, setUploadingKey] = useState<string | null>(null)
  const [form, setForm] = useState<T>(defaultValues)
  const successTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (successTimerRef.current !== null && typeof window !== 'undefined') {
        window.clearTimeout(successTimerRef.current)
      }
    }
  }, [])

  const loadConfig = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetchConfig()
      if (isProApiFailure(res) && !res?.data) {
        toast.error(res?.msg || '获取配置数据失败')
        return
      }
      const data = res?.data && typeof res.data === 'object' ? res.data : res
      if (data && typeof data === 'object') {
        setForm((prev) => ({ ...prev, ...data }))
      }
    } catch {
      toast.error('获取配置数据失败')
    } finally {
      setLoading(false)
    }
  }, [fetchConfig, toast])

  useEffect(() => {
    void loadConfig()
  }, [loadConfig])

  const setFieldValue = useCallback((key: keyof T & string, val: any) => {
    setForm((prev) => ({ ...prev, [key]: val }))
  }, [])

  const handleSubmit = async () => {
    setSaving(true)
    try {
      const payload = transformBeforeSave ? transformBeforeSave(form) : form
      const res = await saveConfig(payload)
      if (isProApiFailure(res)) {
        toast.error(res?.msg || '保存配置失败')
        return
      }
      setSaveSuccess(true)
      toast.success('配置保存成功')
      if (typeof window !== 'undefined') {
        if (successTimerRef.current !== null) {
          window.clearTimeout(successTimerRef.current)
        }
        successTimerRef.current = window.setTimeout(() => {
          setSaveSuccess(false)
          successTimerRef.current = null
        }, 3000)
      }
    } catch {
      toast.error('保存配置失败')
    } finally {
      setSaving(false)
    }
  }

  const currentTab = tabs.find((t) => t.key === activeTab) || tabs[0]
  const canSave = !permission
    ? true
    : customHasPermission
      ? customHasPermission(permission)
      : abcHasPermission(permission)

  const handleUploadImageField = async (fieldKey: keyof T & string, file: File) => {
    setUploadingKey(fieldKey)
    try {
      let resolvedUrl: string | undefined
      if (customUpload) {
        const res = await customUpload(file)
        resolvedUrl = typeof res === 'string' ? res : res?.url
      } else if (uploadAdapter) {
        resolvedUrl = await uploadAdapter(file)
      }
      if (resolvedUrl) {
        setFieldValue(fieldKey, resolvedUrl)
      }
    } catch (err: any) {
      toast.error(err?.message || '图片上传失败')
    } finally {
      setUploadingKey(null)
    }
  }

  const renderField = (field: ProConfigPageFieldSchema<T>) => {
    const val = form[field.key]
    const type = field.type || 'input'

    if (type === 'custom' && field.render) {
      return field.render(form, setFieldValue, setForm)
    }

    switch (type) {
      case 'switch':
        return (
          <Switch
            checked={Boolean(val)}
            onChange={(checked) => setFieldValue(field.key, checked)}
          />
        )

      case 'radio':
        return (
          <div className="flex flex-wrap items-center gap-4 pt-0.5">
            {(field.options || []).map((opt) => {
              const isChecked =
                typeof opt.value === 'number'
                  ? Number(val) === opt.value
                  : String(val ?? '') === String(opt.value)
              return (
                <label
                  key={String(opt.value)}
                  className="flex cursor-pointer items-center gap-2 text-sm text-[var(--abc-fg-secondary)]"
                >
                  <input
                    type="radio"
                    name={field.key}
                    checked={isChecked}
                    onChange={() => setFieldValue(field.key, opt.value)}
                  />
                  {opt.label}
                </label>
              )
            })}
          </div>
        )

      case 'checkbox-csv': {
        const currentSet = new Set(
          String(val || '')
            .split(',')
            .filter(Boolean)
        )
        return (
          <div className="flex flex-wrap gap-3 pt-0.5 text-xs text-[var(--abc-fg-secondary)]">
            {(field.options || []).map((opt) => {
              const strVal = String(opt.value)
              const selected = currentSet.has(strVal)
              const locked = Boolean(opt.locked)
              return (
                <label
                  key={strVal}
                  className={cn(
                    'flex items-center gap-1.5',
                    locked ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'
                  )}
                >
                  <input
                    type="checkbox"
                    disabled={locked}
                    checked={selected || locked}
                    onChange={() => {
                      if (locked) return
                      const nextSet = new Set(currentSet)
                      if (nextSet.has(strVal)) nextSet.delete(strVal)
                      else nextSet.add(strVal)
                      setFieldValue(field.key, Array.from(nextSet).join(','))
                    }}
                  />
                  <span>{opt.label}</span>
                </label>
              )
            })}
          </div>
        )
      }

      case 'select':
        return (
          <Select
            value={val ?? ''}
            options={field.options || []}
            onChange={(nextVal: any) => {
              const resolved =
                nextVal && typeof nextVal === 'object' && 'target' in nextVal
                  ? nextVal.target.value
                  : nextVal
              setFieldValue(field.key, resolved)
            }}
          />
        )

      case 'textarea':
        return (
          <Textarea
            rows={field.rows || 4}
            value={val || ''}
            onChange={(e) => setFieldValue(field.key, e.target.value)}
            placeholder={field.placeholder}
            className={field.className}
          />
        )

      case 'image-url': {
        const isCircle = field.previewShape === 'circle'
        const hasUploadSupport = Boolean(
          field.allowUpload && (customUpload || uploadAdapter)
        )
        return (
          <div className="flex items-center gap-3">
            <ImagePreview
              src={val ? String(val) : undefined}
              alt={field.label}
              width={isCircle ? 44 : 40}
              height={isCircle ? 44 : 40}
              rounded={isCircle}
              className={cn(
                'shrink-0 overflow-hidden border border-[var(--abc-border)] shadow-2xs',
                isCircle ? 'rounded-full' : 'rounded-[var(--abc-radius-lg)]'
              )}
            />
            <div className="flex-1">
              <Input
                value={val || ''}
                onChange={(e) => setFieldValue(field.key, e.target.value)}
                placeholder={field.placeholder || '请输入图片完整直链 URL 或 SVG 矢量代码'}
              />
            </div>
            {hasUploadSupport && (
              <label className="inline-flex shrink-0 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      void handleUploadImageField(field.key, file)
                    }
                    e.target.value = ''
                  }}
                />
                <span className="inline-flex h-[var(--abc-control-h-sm)] items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 text-xs font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]">
                  <Upload className="h-3.5 w-3.5" />
                  <span>{uploadingKey === field.key ? '上传中...' : '上传'}</span>
                </span>
              </label>
            )}
          </div>
        )
      }

      case 'password':
      case 'number':
      case 'input':
      default:
        return (
          <Input
            type={type === 'password' ? 'password' : type === 'number' ? 'number' : 'text'}
            value={val ?? ''}
            onChange={(e) => setFieldValue(field.key, e.target.value)}
            placeholder={field.placeholder}
            className={field.className}
          />
        )
    }
  }

  return (
    <div className="space-y-6">
      {/* 顶部标题与保存动作 */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-[var(--abc-shadow-card)]">
        <div>
          <h2 className="text-lg font-bold text-[var(--abc-fg)]">{title}</h2>
          {subTitle && <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">{subTitle}</p>}
        </div>

        <div className="flex items-center gap-3">
          {saveSuccess && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-success)]">
              <CheckCircle className="h-4 w-4" />
              配置保存成功
            </span>
          )}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => void loadConfig()}
            disabled={loading || saving}
            icon={<RotateCcw className="h-3.5 w-3.5" />}
          >
            刷新
          </Button>
          {canSave && (
            <Button
              onClick={() => void handleSubmit()}
              loading={saving}
              icon={<Save className="h-4 w-4" />}
            >
              {saveButtonText}
            </Button>
          )}
        </div>
      </div>

      {/* 主体选项卡与配置表单容器 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* 左侧垂直导航 Tab */}
        <div className="h-fit space-y-1.5 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-[var(--abc-shadow-card)] lg:col-span-1">
          {tabs.map((tab) => {
            const TabIcon = tab.icon
            const isActive = currentTab?.key === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  'flex w-full cursor-pointer items-center gap-3 rounded-[var(--abc-radius-lg)] px-4 py-3 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs'
                    : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]'
                )}
              >
                {TabIcon && (
                  <TabIcon
                    className={cn(
                      'h-4 w-4',
                      isActive ? 'text-[var(--abc-primary)]' : 'text-[var(--abc-fg-muted)]'
                    )}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* 右侧配置面板卡片 */}
        <div className="relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-6 shadow-[var(--abc-shadow-card)] lg:col-span-3">
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[var(--abc-radius-xl)] bg-[var(--abc-bg-surface)]/65 backdrop-blur-xs">
              <Loading />
            </div>
          )}

          {currentTab && (
            <div className="space-y-6">
              <div className="border-b border-[var(--abc-border)] pb-4">
                <h3 className="text-base font-semibold text-[var(--abc-fg)]">
                  {currentTab.sectionTitle}
                </h3>
                {currentTab.sectionDescription && (
                  <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">
                    {currentTab.sectionDescription}
                  </p>
                )}
              </div>

              <div
                className={cn(
                  'grid grid-cols-1 gap-4',
                  (currentTab.columns ?? 2) === 2 && 'sm:grid-cols-2'
                )}
              >
                {currentTab.fields.map((field) => {
                  const isFullSpan = (currentTab.columns ?? 2) === 1 || field.span === 2
                  return (
                    <div
                      key={field.key}
                      className={cn(
                        isFullSpan && (currentTab.columns ?? 2) === 2 && 'sm:col-span-2'
                      )}
                    >
                      {field.label && (
                        <div className="mb-1.5 flex items-center gap-1.5">
                          <label className="block text-xs font-medium text-[var(--abc-fg-secondary)]">
                            {field.label}
                          </label>
                          {field.tooltip && (
                            <span
                              title={field.tooltip}
                              className="cursor-help text-[var(--abc-fg-muted)]"
                            >
                              <HelpCircle className="h-3.5 w-3.5" />
                            </span>
                          )}
                        </div>
                      )}
                      {renderField(field)}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const CrudConfigPage = ProConfigPage
export default ProConfigForm
