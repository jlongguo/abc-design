import { getIsoWeekInfo, parseIsoWeekStart } from '@abc-design/core'
import type { AbcMotionPreset } from '@abc-design/tokens'
import dayjs from 'dayjs'
import type { ControlSize } from '../Input'

/** 日期选择器时间维度：日 / 周 / 月 / 季度 / 年 */
export type DatePickerMode = 'date' | 'week' | 'month' | 'quarter' | 'year'

/** DatePicker / DateRangePicker 携带时分秒选择配置 */
export interface DatePickerShowTimeConfig {
  /** 时间展示格式（如 'HH:mm:ss' 或 'HH:mm'，默认 'HH:mm:ss'） */
  format?: string
  /** 是否显示秒列（默认跟随 format 是否含 s） */
  showSecond?: boolean
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  /** 未选择时间时的默认初始时刻（如 '00:00:00'） */
  defaultValue?: string
}

export interface DatePickerShortcut {
  label: string
  value: string | (() => string)
}

export interface DatePickerProps {
  value?: string
  defaultValue?: string
  onChange?: (dateStr: string) => void
  /** 时间选择维度（默认 'date'，支持 'date' | 'week' | 'month' | 'quarter' | 'year'） */
  picker?: DatePickerMode
  /** 仅在 picker='date' 下生效：开启日期时间选择（时:分[:秒]） */
  showTime?: boolean | DatePickerShowTimeConfig
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
  /** 时间区间维度（默认 'date'，支持 'date' | 'week' | 'month' | 'quarter' | 'year'） */
  picker?: DatePickerMode
  /** 仅在 picker='date' 下生效：开启起止日期时间选择 */
  showTime?: boolean | DatePickerShowTimeConfig
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

export interface TimePickerShortcut {
  label: string
  value: string | (() => string)
}

export interface TimePickerProps {
  value?: string
  defaultValue?: string
  onChange?: (timeStr: string) => void
  placeholder?: string
  /** 时间格式：'HH:mm:ss'（默认）或 'HH:mm' */
  format?: string
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  allowClear?: boolean
  clearable?: boolean
  disabled?: boolean
  shortcuts?: boolean | TimePickerShortcut[]
  id?: string
  name?: string
  size?: ControlSize
  motion?: AbcMotionPreset
  className?: string
}

export interface TimeRange {
  start: string
  end: string
}

export type TimeRangeTuple = [string, string]
export type TimeRangeInput = TimeRangeTuple | { start?: string; end?: string } | null

export interface TimeRangeShortcut {
  label: string
  getValue: () => TimeRangeTuple | TimeRange
}

export interface TimeRangePickerProps {
  value?: TimeRangeInput
  defaultValue?: TimeRangeInput
  /** 按传入 value/defaultValue 形态自动回传 [start, end] 元组或 { start, end } 对象 */
  onChange?: (range: any) => void
  placeholder?: string | [string, string]
  /** 时间格式：'HH:mm:ss'（默认）或 'HH:mm' */
  format?: string
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  allowClear?: boolean
  clearable?: boolean
  disabled?: boolean
  shortcuts?: boolean | TimeRangeShortcut[]
  id?: string
  size?: ControlSize
  motion?: AbcMotionPreset
  className?: string
}

export function normalizeRangeObj(input?: DateRangeInput | TimeRangeInput): DateRange {
  if (!input) return { start: '', end: '' }
  if (Array.isArray(input)) return { start: input[0] ?? '', end: input[1] ?? '' }
  return { start: input.start ?? '', end: input.end ?? '' }
}

/** 归一化 showTime 配置 */
export function resolveShowTimeConfig(
  showTime?: boolean | DatePickerShowTimeConfig
): {
  enabled: boolean
  timeFormat: string
  showSecond: boolean
  hourStep: number
  minuteStep: number
  secondStep: number
  defaultValue: string
} {
  if (!showTime) {
    return {
      enabled: false,
      timeFormat: 'HH:mm:ss',
      showSecond: true,
      hourStep: 1,
      minuteStep: 1,
      secondStep: 1,
      defaultValue: '00:00:00',
    }
  }
  const cfg = typeof showTime === 'object' ? showTime : {}
  const timeFormat = cfg.format ?? (cfg.showSecond === false ? 'HH:mm' : 'HH:mm:ss')
  const showSecond = cfg.showSecond ?? /s/i.test(timeFormat)
  return {
    enabled: true,
    timeFormat,
    showSecond,
    hourStep: cfg.hourStep ?? 1,
    minuteStep: cfg.minuteStep ?? 1,
    secondStep: cfg.secondStep ?? 1,
    defaultValue: cfg.defaultValue ?? (showSecond ? '00:00:00' : '00:00'),
  }
}

/** 推导不同 picker 维度下的默认格式化模板 */
export function resolveDateFormat(
  picker: DatePickerMode,
  showTime: boolean | DatePickerShowTimeConfig | undefined,
  explicitFormat?: string
): string {
  if (explicitFormat) return explicitFormat
  if (picker === 'year') return 'YYYY'
  if (picker === 'quarter') return 'YYYY-[Q]Q'
  if (picker === 'month') return 'YYYY-MM'
  if (picker === 'week') return 'YYYY-[W]WW'
  const timeCfg = resolveShowTimeConfig(showTime)
  return timeCfg.enabled ? `YYYY-MM-DD ${timeCfg.timeFormat}` : 'YYYY-MM-DD'
}

/** 不同维度默认单选占位文案 */
export function resolveSinglePlaceholder(
  picker: DatePickerMode,
  showTime: boolean | DatePickerShowTimeConfig | undefined,
  explicitPlaceholder?: string
): string {
  if (explicitPlaceholder !== undefined) return explicitPlaceholder
  if (picker === 'year') return '请选择年份'
  if (picker === 'quarter') return '请选择季度'
  if (picker === 'month') return '请选择月份'
  if (picker === 'week') return '请选择周'
  return showTime ? '请选择日期时间' : '请选择日期'
}

/** 不同维度默认区间占位文案 */
export function resolveRangePlaceholders(
  picker: DatePickerMode,
  showTime: boolean | DatePickerShowTimeConfig | undefined,
  explicitPlaceholder?: string | [string, string]
): [string, string] {
  if (Array.isArray(explicitPlaceholder)) {
    return [explicitPlaceholder[0] || '开始', explicitPlaceholder[1] || '结束']
  }
  if (typeof explicitPlaceholder === 'string' && explicitPlaceholder) {
    return [explicitPlaceholder, explicitPlaceholder]
  }
  if (picker === 'year') return ['开始年份', '结束年份']
  if (picker === 'quarter') return ['开始季度', '结束季度']
  if (picker === 'month') return ['开始月份', '结束月份']
  if (picker === 'week') return ['开始周', '结束周']
  return showTime ? ['开始时间', '结束时间'] : ['开始日期', '结束日期']
}

/** 将任意维度的字符串值解析为用于日历定位的 dayjs 锚点日期 */
export function parseDimensionToDayjs(
  raw: string | undefined,
  picker: DatePickerMode
): dayjs.Dayjs | null {
  if (!raw || !raw.trim()) return null
  const text = raw.trim()
  if (picker === 'year') {
    const m = /^(\d{4})/.exec(text)
    return m ? dayjs(`${m[1]}-01-01`) : null
  }
  if (picker === 'quarter') {
    const m = /^(\d{4})-Q([1-4])$/i.exec(text)
    if (m) {
      const month = (Number(m[2]) - 1) * 3 + 1
      return dayjs(`${m[1]}-${String(month).padStart(2, '0')}-01`)
    }
  }
  if (picker === 'month') {
    const m = /^(\d{4})-(\d{2})/.exec(text)
    return m ? dayjs(`${m[1]}-${m[2]}-01`) : null
  }
  if (picker === 'week') {
    const monday = parseIsoWeekStart(text)
    if (monday) return dayjs(monday)
  }
  const d = dayjs(text)
  return d.isValid() ? d : null
}

/** 将 dayjs 按当前维度格式化为标准值 */
export function formatDayjsByPicker(
  d: dayjs.Dayjs,
  picker: DatePickerMode,
  resolvedFormat: string
): string {
  if (picker === 'year') return String(d.year())
  if (picker === 'quarter') {
    const q = Math.floor(d.month() / 3) + 1
    return `${d.year()}-Q${q}`
  }
  if (picker === 'month') {
    return resolvedFormat === 'YYYY-MM' ? d.format('YYYY-MM') : d.format(resolvedFormat)
  }
  if (picker === 'week') {
    return getIsoWeekInfo(d.format('YYYY-MM-DD')).value
  }
  return d.format(resolvedFormat)
}

/** 将任意维度的字符串值映射为可严格比较顺序的键（如用于区间起止排序与高亮判定） */
export function toComparablePeriodKey(
  raw: string | undefined,
  picker: DatePickerMode
): string | null {
  if (!raw || !raw.trim()) return null
  const text = raw.trim()
  if (picker === 'year') {
    const m = /^(\d{4})/.exec(text)
    return m ? m[1] : null
  }
  if (picker === 'quarter') {
    const m = /^(\d{4})-Q([1-4])$/i.exec(text)
    return m ? `${m[1]}-Q${m[2]}` : null
  }
  if (picker === 'month') {
    const m = /^(\d{4})-(\d{2})/.exec(text)
    return m ? `${m[1]}-${m[2]}` : null
  }
  if (picker === 'week') {
    const monday = parseIsoWeekStart(text)
    if (monday) return monday
    const d = dayjs(text)
    return d.isValid() ? getIsoWeekInfo(d.format('YYYY-MM-DD')).startIso : null
  }
  const d = dayjs(text)
  return d.isValid() ? d.format('YYYY-MM-DD') : null
}
