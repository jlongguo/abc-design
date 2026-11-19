import React, { useState } from 'react'
import {
  DatePicker,
  DateRangePicker,
  Label,
  TimePicker,
  TimeRangePicker,
  type AbcMotionPreset,
  type AbcSize,
  type DatePickerMode,
} from '@abc-design/react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

const SIZE_OPTIONS = [
  { label: 'xs', value: 'xs' as const },
  { label: 'sm', value: 'sm' as const },
  { label: 'md', value: 'md' as const },
  { label: 'lg', value: 'lg' as const },
]

const MOTION_OPTIONS = [
  { label: 'none', value: 'none' as const },
  { label: 'subtle', value: 'subtle' as const },
  { label: 'smooth', value: 'smooth' as const },
  { label: 'spring', value: 'spring' as const },
]

const PICKER_MODE_OPTIONS: ReadonlyArray<{ label: string; value: DatePickerMode }> = [
  { label: 'date (日)', value: 'date' },
  { label: 'week (周)', value: 'week' },
  { label: 'month (月)', value: 'month' },
  { label: 'quarter (季)', value: 'quarter' },
  { label: 'year (年)', value: 'year' },
]

const TIME_FORMAT_OPTIONS = [
  { label: 'HH:mm:ss', value: 'HH:mm:ss' as const },
  { label: 'HH:mm', value: 'HH:mm' as const },
]

const MINUTE_STEP_OPTIONS = [
  { label: '1 分', value: 1 },
  { label: '5 分', value: 5 },
  { label: '15 分', value: 15 },
]

const SAMPLE_SINGLE_BY_MODE: Record<DatePickerMode, string> = {
  date: '2026-11-18',
  week: '2026-W47',
  month: '2026-11',
  quarter: '2026-Q4',
  year: '2026',
}

const SAMPLE_RANGE_BY_MODE: Record<DatePickerMode, [string, string]> = {
  date: ['2026-11-01', '2026-11-18'],
  week: ['2026-W44', '2026-W47'],
  month: ['2026-08', '2026-11'],
  quarter: ['2026-Q1', '2026-Q4'],
  year: ['2024', '2026'],
}

/**
 * 多维度日期与时刻选择演练区块（含 DatePicker / DateRangePicker 五维切换 + showTime，以及独立 TimePicker / TimeRangePicker）
 */
export const DateTimeShowcaseSection: React.FC = () => {
  // Card 01: DatePicker & DateRangePicker 多维度
  const [dateSize, setDateSize] = useState<AbcSize>('sm')
  const [dateMotion, setDateMotion] = useState<AbcMotionPreset>('smooth')
  const [pickerMode, setPickerMode] = useState<DatePickerMode>('date')
  const [showTime, setShowTime] = useState<boolean>(false)
  const [dateClearable, setDateClearable] = useState(true)
  const [dateDisabled, setDateDisabled] = useState(false)
  const [singleDate, setSingleDate] = useState('2026-11-18')
  const [rangeDate, setRangeDate] = useState<[string, string]>(['2026-11-01', '2026-11-18'])

  // Card 02: TimePicker & TimeRangePicker
  const [timeSize, setTimeSize] = useState<AbcSize>('sm')
  const [timeFormat, setTimeFormat] = useState<'HH:mm:ss' | 'HH:mm'>('HH:mm:ss')
  const [minuteStep, setMinuteStep] = useState<number>(5)
  const [timeClearable, setTimeClearable] = useState(true)
  const [timeDisabled, setTimeDisabled] = useState(false)
  const [singleTime, setSingleTime] = useState('09:30:00')
  const [rangeTime, setRangeTime] = useState<[string, string]>(['09:00:00', '18:00:00'])

  const handleModeChange = (nextMode: DatePickerMode) => {
    setPickerMode(nextMode)
    if (nextMode !== 'date') {
      setShowTime(false)
      setSingleDate(SAMPLE_SINGLE_BY_MODE[nextMode])
      setRangeDate(SAMPLE_RANGE_BY_MODE[nextMode])
    } else {
      setSingleDate(showTime ? '2026-11-18 14:30:00' : SAMPLE_SINGLE_BY_MODE.date)
      setRangeDate(
        showTime
          ? ['2026-11-01 00:00:00', '2026-11-18 23:59:59']
          : SAMPLE_RANGE_BY_MODE.date
      )
    }
  }

  const handleShowTimeChange = (next: boolean) => {
    setShowTime(next)
    if (next) {
      setPickerMode('date')
      setSingleDate('2026-11-18 14:30:00')
      setRangeDate(['2026-11-01 09:00:00', '2026-11-18 18:00:00'])
    } else {
      setSingleDate(SAMPLE_SINGLE_BY_MODE.date)
      setRangeDate(SAMPLE_RANGE_BY_MODE.date)
    }
  }

  const handleTimeFormatChange = (nextFmt: 'HH:mm:ss' | 'HH:mm') => {
    setTimeFormat(nextFmt)
    if (nextFmt === 'HH:mm') {
      setSingleTime('09:30')
      setRangeTime(['09:00', '18:00'])
    } else {
      setSingleTime('09:30:00')
      setRangeTime(['09:00:00', '18:00:00'])
    }
  }

  const effectiveShowTime = pickerMode === 'date' && showTime

  return (
    <>
      {/* 卡片 01：DatePicker & DateRangePicker 多维度 */}
      <ComponentDocPreview
        title="DatePicker & DateRangePicker 多维度日期与区间选择器"
        components={['DatePicker', 'DateRangePicker']}
        description="基于 @abc-design/core 日历引擎与视口感知 Portal 定位，支持日 (date)、周 (week)、月 (month)、季度 (quarter)、年 (year) 五种时间维度以及 date 模式下的 showTime 日期时间联动选择。"
        onResetKnobs={() => {
          setDateSize('sm')
          setDateMotion('smooth')
          setPickerMode('date')
          setShowTime(false)
          setDateClearable(true)
          setDateDisabled(false)
          setSingleDate(SAMPLE_SINGLE_BY_MODE.date)
          setRangeDate(SAMPLE_RANGE_BY_MODE.date)
        }}
        controls={
          <>
            <KnobSegmented label="picker" value={pickerMode} options={PICKER_MODE_OPTIONS} onChange={handleModeChange} />
            <KnobSwitch label="showTime" checked={effectiveShowTime} onChange={handleShowTimeChange} />
            <KnobSegmented label="size" value={dateSize} options={SIZE_OPTIONS} onChange={setDateSize} />
            <KnobSegmented label="motion" value={dateMotion} options={MOTION_OPTIONS} onChange={setDateMotion} />
            <KnobSwitch label="clearable" checked={dateClearable} onChange={setDateClearable} />
            <KnobSwitch label="disabled" checked={dateDisabled} onChange={setDateDisabled} />
          </>
        }
        code={`import { DatePicker, DateRangePicker } from '@abc-design/react'

<DatePicker
  picker="${pickerMode}"${effectiveShowTime ? '\n  showTime' : ''}
  size="${dateSize}"
  motion="${dateMotion}"
  clearable={${dateClearable}}
  disabled={${dateDisabled}}
  value={value}
  onChange={setValue}
/>

<DateRangePicker
  picker="${pickerMode}"${effectiveShowTime ? '\n  showTime' : ''}
  size="${dateSize}"
  motion="${dateMotion}"
  clearable={${dateClearable}}
  disabled={${dateDisabled}}
  value={range}
  onChange={setRange}
/>`}
        apiRows={[
          { prop: 'picker', type: "'date' | 'week' | 'month' | 'quarter' | 'year'", defaultValue: "'date'", description: '时间选择维度，自动切换面板网格、默认格式与快捷预设' },
          { prop: 'showTime', type: 'boolean | DatePickerShowTimeConfig', defaultValue: 'false', description: "在 picker='date' 下开启时:分[:秒]滚轮与确认栏，支持步进与自定义格式" },
          { prop: 'DatePicker.value / onChange', type: 'string / (dateStr: string) => void', description: '按当前维度格式化后的受控值（如 YYYY-MM-DD / YYYY-Www / YYYY-MM / YYYY-Q4 / YYYY）' },
          { prop: 'DateRangePicker.value / onChange', type: '[string, string] | { start?, end? }', description: '双栏联动选择区间，反向点击自动排序并按传入形态回传' },
          { prop: 'shortcuts', type: 'boolean | Shortcut[]', defaultValue: 'true', description: '随 picker 维度自动匹配常用预设胶囊，传入 false 隐藏' },
        ]}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label size={dateSize}>
              单值选择 (DatePicker · {pickerMode}
              {effectiveShowTime ? ' + showTime' : ''})
            </Label>
            <DatePicker
              picker={pickerMode}
              showTime={effectiveShowTime}
              size={dateSize}
              motion={dateMotion}
              clearable={dateClearable}
              disabled={dateDisabled}
              value={singleDate}
              onChange={setSingleDate}
            />
            <p className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
              当前值：{singleDate || '(未选)'}
            </p>
          </div>
          <div className="space-y-1.5">
            <Label size={dateSize}>
              双栏区间选择 (DateRangePicker · {pickerMode}
              {effectiveShowTime ? ' + showTime' : ''})
            </Label>
            <DateRangePicker
              picker={pickerMode}
              showTime={effectiveShowTime}
              size={dateSize}
              motion={dateMotion}
              clearable={dateClearable}
              disabled={dateDisabled}
              value={rangeDate}
              onChange={setRangeDate}
            />
            <p className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
              当前区间：{JSON.stringify(rangeDate)}
            </p>
          </div>
        </div>
      </ComponentDocPreview>

      {/* 卡片 02：TimePicker & TimeRangePicker */}
      <ComponentDocPreview
        title="TimePicker & TimeRangePicker 独立时刻与时段选择器"
        components={['TimePicker', 'TimeRangePicker']}
        description="面向定时调度、维护窗口与告警静默时段的独立时/分[/秒]选择套件，支持自定义步进刻度、HH:mm:ss / HH:mm 双格式、常用时段预设与起止时刻自动排序。"
        onResetKnobs={() => {
          setTimeSize('sm')
          setTimeFormat('HH:mm:ss')
          setMinuteStep(5)
          setTimeClearable(true)
          setTimeDisabled(false)
          setSingleTime('09:30:00')
          setRangeTime(['09:00:00', '18:00:00'])
        }}
        controls={
          <>
            <KnobSegmented label="format" value={timeFormat} options={TIME_FORMAT_OPTIONS} onChange={handleTimeFormatChange} />
            <KnobSegmented label="minuteStep" value={minuteStep} options={MINUTE_STEP_OPTIONS} onChange={setMinuteStep} />
            <KnobSegmented label="size" value={timeSize} options={SIZE_OPTIONS} onChange={setTimeSize} />
            <KnobSwitch label="clearable" checked={timeClearable} onChange={setTimeClearable} />
            <KnobSwitch label="disabled" checked={timeDisabled} onChange={setTimeDisabled} />
          </>
        }
        code={`import { TimePicker, TimeRangePicker } from '@abc-design/react'

<TimePicker
  format="${timeFormat}"
  minuteStep={${minuteStep}}
  size="${timeSize}"
  clearable={${timeClearable}}
  disabled={${timeDisabled}}
  value={time}
  onChange={setTime}
/>

<TimeRangePicker
  format="${timeFormat}"
  minuteStep={${minuteStep}}
  size="${timeSize}"
  clearable={${timeClearable}}
  disabled={${timeDisabled}}
  value={timeRange}
  onChange={setTimeRange}
/>`}
        apiRows={[
          { prop: 'format', type: "'HH:mm:ss' | 'HH:mm' | string", defaultValue: "'HH:mm:ss'", description: '时间展示与输出格式，省略秒时自动收起秒列' },
          { prop: 'hourStep / minuteStep / secondStep', type: 'number', defaultValue: '1', description: '各时间滚轮列的步进间隔（如 minuteStep={15}）' },
          { prop: 'TimePicker.value / onChange', type: 'string / (timeStr: string) => void', description: '单时刻受控值与变更回调' },
          { prop: 'TimeRangePicker.value / onChange', type: '[string, string] | { start?, end? }', description: '时段区间受控值，确认时自动纠正起止顺序' },
          { prop: 'shortcuts', type: 'boolean | Shortcut[]', defaultValue: 'true', description: '内置此刻、工作时段等快捷预设，传入 false 隐藏' },
        ]}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label size={timeSize}>单时刻选择 (TimePicker)</Label>
            <TimePicker
              format={timeFormat}
              minuteStep={minuteStep}
              size={timeSize}
              clearable={timeClearable}
              disabled={timeDisabled}
              value={singleTime}
              onChange={setSingleTime}
            />
            <p className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
              当前时刻：{singleTime || '(未选)'}
            </p>
          </div>
          <div className="space-y-1.5">
            <Label size={timeSize}>起止时段选择 (TimeRangePicker)</Label>
            <TimeRangePicker
              format={timeFormat}
              minuteStep={minuteStep}
              size={timeSize}
              clearable={timeClearable}
              disabled={timeDisabled}
              value={rangeTime}
              onChange={setRangeTime}
            />
            <p className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
              当前时段：{JSON.stringify(rangeTime)}
            </p>
          </div>
        </div>
      </ComponentDocPreview>
    </>
  )
}
