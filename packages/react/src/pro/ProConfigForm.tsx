import React, { useEffect, useState } from 'react'
import { RotateCcw, Save } from 'lucide-react'
import Button from '../components/button/Button'
import ImagePreview from '../components/display/ImagePreview'
import { Switch } from '../components/form/Controls'
import FormField from '../components/form/FormField'
import ImageUpload from '../components/form/ImageUpload'
import { Input, InputNumber, Textarea } from '../components/form/Input'
import { Select, type SelectOption } from '../components/form/Select'
import { useAbcConfig } from '../provider/AbcProvider'
import ProFormLayout from './ProFormLayout'

export type ProConfigFieldType =
  | 'text'
  | 'password'
  | 'number'
  | 'textarea'
  | 'switch'
  | 'select'
  | 'image'

export interface ProConfigFieldSchema {
  name: string
  label: string
  type?: ProConfigFieldType
  placeholder?: string
  helperText?: string
  required?: boolean
  options?: SelectOption[]
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

export default ProConfigForm
