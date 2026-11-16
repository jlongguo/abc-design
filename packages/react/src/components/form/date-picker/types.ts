import type { AbcMotionPreset } from '@abc-design/tokens'
import type { ControlSize } from '../Input'

export interface DatePickerShortcut {
  label: string
  value: string | (() => string)
}

export interface DatePickerProps {
  value?: string
  defaultValue?: string
  onChange?: (dateStr: string) => void
  placeholder?: string
  allowClear?: boolean
  clearable?: boolean
  disabled?: boolean
  format?: string
  shortcuts?: boolean | DatePickerShortcut[]
  id?: string
  name?: string
  minDate?: string
  maxDate?: string
  size?: ControlSize
  motion?: AbcMotionPreset
  className?: string
}

export const WEEK_DAYS = ['日', '一', '二', '三', '四', '五', '六']

export const SIZE_H: Record<ControlSize, string> = {
  xs: 'h-[var(--abc-control-h-xs)] text-xs',
  sm: 'h-[var(--abc-control-h-sm)] text-xs',
  default: 'h-[var(--abc-control-h-sm)] text-xs',
  md: 'h-[var(--abc-control-h-md)] text-sm',
  lg: 'h-[var(--abc-control-h-lg)] text-sm',
}

/**
 * 企业级单日期选择器 (DatePicker)
 * 基于 @abc-design/core 42 格月历算法 + Portal 浮层定位，支持年/月四向切换、快捷预设与深色模式
 */

export interface DateRange {
  start: string
  end: string
}

export type DateRangeTuple = [string, string]
export type DateRangeInput = DateRangeTuple | { start?: string; end?: string } | null

export interface DateRangeShortcut {
  label: string
  getValue: () => DateRangeTuple | DateRange
}

export interface DateRangePickerProps {
  value?: DateRangeInput
  defaultValue?: DateRangeInput
  /** 根据传入 value/defaultValue 形态自动返回对象 { start, end } 或元组 [start, end] */
  onChange?: (range: any) => void
  placeholder?: string | [string, string]
  allowClear?: boolean
  clearable?: boolean
  disabled?: boolean
  format?: string
  shortcuts?: boolean | DateRangeShortcut[]
  id?: string
  minDate?: string
  maxDate?: string
  size?: ControlSize
  motion?: AbcMotionPreset
  className?: string
}

export function normalizeRangeObj(input?: DateRangeInput): DateRange {
  if (!input) return { start: '', end: '' }
  if (Array.isArray(input)) return { start: input[0] ?? '', end: input[1] ?? '' }
  return { start: input.start ?? '', end: input.end ?? '' }
}

/**
 * 企业级双月联动日期区间选择器 (DateRangePicker)
 * 支持双日历面板范围悬停高亮、反向点击自动排序、常用预设胶囊及 { start, end } / [start, end] 多态数据格式
 */
