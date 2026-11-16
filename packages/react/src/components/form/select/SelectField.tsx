import React from 'react'
import { Select } from './Select'
import type { SelectSize } from './types'

export interface SelectFieldProps {
  value?: string
  defaultValue?: string
  onValueChange?: (val: string) => void
  onChange?: (val: any) => void
  options: ReadonlyArray<{
    value: string | number
    label: React.ReactNode
    disabled?: boolean
    description?: string
  }>
  label?: React.ReactNode
  error?: string
  helperText?: React.ReactNode
  placeholder?: string
  searchable?: boolean
  allowClear?: boolean
  clearable?: boolean
  'aria-label'?: string
  id?: string
  disabled?: boolean
  triggerClassName?: string
  contentClassName?: string
  size?: SelectSize
}

/**
 * 声明式单选快捷字段封装 (SelectField)
 * 提供直接面向字符串的 onValueChange 回调与触发器/弹层类名透传
 */
export function SelectField({
  value,
  defaultValue,
  onValueChange,
  onChange,
  options,
  label,
  error,
  helperText,
  placeholder,
  searchable,
  allowClear,
  clearable,
  'aria-label': ariaLabel,
  id,
  disabled,
  triggerClassName,
  contentClassName,
  size,
}: SelectFieldProps) {
  return (
    <Select
      id={id}
      aria-label={ariaLabel}
      disabled={disabled}
      label={label}
      error={error}
      helperText={helperText}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      onChange={onChange}
      searchable={searchable}
      allowClear={allowClear}
      clearable={clearable}
      className={triggerClassName}
      dropdownClassName={contentClassName}
      size={size}
      placeholder={placeholder}
      options={[...options]}
    />
  )
}

