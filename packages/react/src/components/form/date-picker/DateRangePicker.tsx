import {
  buildCalendarDecadeGrid,
  buildCalendarMonthGrid,
  buildCalendarYearMonths,
  buildCalendarYearQuarters,
  formatTimeParts,
  getIsoWeekInfo,
  parseTimeParts,
  type AbcTimeParts,
} from '@abc-design/core'
import dayjs from 'dayjs'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Clock,
  X,
} from 'lucide-react'
import React, { useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useAbcMotion, useAbcSize } from '../../../hooks/useAbcDefaults'
import { useFloatingPosition } from '../../../hooks/useFloatingPosition'
import { cn } from '../../../utils/cn'
import { baseFieldControlClass, type ControlSize } from '../Input'
import { TimeColumnPanel } from './TimeColumnPanel'
import {
  SIZE_H,
  WEEK_DAYS,
  formatDayjsByPicker,
  normalizeRangeObj,
  parseDimensionToDayjs,
  resolveDateFormat,
  resolveRangePlaceholders,
  resolveShowTimeConfig,
  toComparablePeriodKey,
  type DateRange,
  type DateRangePickerProps,
  type DateRangeShortcut,
} from './types'

/**
 * 企业级多维度双栏区间选择器 (DateRangePicker)
 * 支持日 / 周 / 月 / 季度 / 年五种区间维度及 date 模式下的起止日期时间选择，
 * 具备悬停区间预览、反向点击自动排序与 { start, end } / [start, end] 双形态回传。
 */
export const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      picker = 'date',
      showTime = false,
      placeholder,
      allowClear,
      clearable,
      disabled = false,
      format,
      shortcuts = true,
      id,
      minDate,
      maxDate,
      size,
      motion,
      className,
    },
    ref
  ) => {
    const resolvedSize = useAbcSize(size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const showTimeCfg = useMemo(
      () => resolveShowTimeConfig(picker === 'date' ? showTime : false),
      [picker, showTime]
    )
    const resolvedFormat = useMemo(
      () => resolveDateFormat(picker, picker === 'date' ? showTime : false, format),
      [picker, showTime, format]
    )
    const [startPlaceholder, endPlaceholder] = resolveRangePlaceholders(
      picker,
      picker === 'date' ? showTime : false,
      placeholder
    )

    const generatedId = useId()
    const pickerId = id || generatedId
    const rootRef = useRef<HTMLDivElement>(null)
    const panelRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => rootRef.current as HTMLDivElement, [])

    const prefersTuple =
      Array.isArray(value) || (value === undefined && Array.isArray(defaultValue))
    const isControlled = value !== undefined
    const [internalRange, setInternalRange] = useState<DateRange>(() =>
      normalizeRangeObj(defaultValue)
    )
    const currentRange = isControlled ? normalizeRangeObj(value) : internalRange

    const [open, setOpen] = useState(false)
    const [selectingStart, setSelectingStart] = useState<string | null>(null)
    const [hoverVal, setHoverVal] = useState<string | null>(null)
    const [showTimePane, setShowTimePane] = useState(false)
    const [draftRangeDate, setDraftRangeDate] = useState<DateRange>({ start: '', end: '' })
    const [startTime, setStartTime] = useState<AbcTimeParts>({ hour: 0, minute: 0, second: 0 })
    const [endTime, setEndTime] = useState<AbcTimeParts>({ hour: 23, minute: 59, second: 59 })

    const [leftAnchor, setLeftAnchor] = useState<dayjs.Dayjs>(
      () => parseDimensionToDayjs(currentRange.start, picker) ?? dayjs()
    )
    const rightAnchor = useMemo(() => {
      if (picker === 'year') return leftAnchor.add(10, 'year')
      if (picker === 'month' || picker === 'quarter') return leftAnchor.add(1, 'year')
      return leftAnchor.add(1, 'month')
    }, [leftAnchor, picker])

    const isClearable = allowClear ?? clearable ?? true
    const showClear = Boolean(
      isClearable && (currentRange.start || currentRange.end) && !disabled
    )

    const { style: floatingStyle, portalContainer, portalTheme } = useFloatingPosition({
      open,
      triggerRef: rootRef,
      floatingRef: panelRef,
      placement: 'bottomLeft',
      offset: 4,
      rightAnchorOnOverflow: true,
    })

    useEffect(() => {
      if (open) {
        setSelectingStart(null)
        setHoverVal(null)
        setShowTimePane(false)
        const parsedStart = parseDimensionToDayjs(currentRange.start, picker)
        const parsedEnd = parseDimensionToDayjs(currentRange.end, picker)
        setLeftAnchor(parsedStart ?? dayjs())
        setDraftRangeDate({
          start: parsedStart ? parsedStart.format('YYYY-MM-DD') : '',
          end: parsedEnd ? parsedEnd.format('YYYY-MM-DD') : '',
        })
        setStartTime(parseTimeParts(currentRange.start) ?? { hour: 0, minute: 0, second: 0 })
        setEndTime(parseTimeParts(currentRange.end) ?? { hour: 23, minute: 59, second: 59 })
      } else {
        setSelectingStart(null)
        setHoverVal(null)
        setShowTimePane(false)
      }
    }, [open, currentRange.start, currentRange.end, picker])

    const shortcutsList = useMemo<DateRangeShortcut[]>(() => {
      if (shortcuts === false) return []
      if (Array.isArray(shortcuts)) return shortcuts
      if (picker === 'year') {
        const y = dayjs().year()
        return [
          { label: '今年', getValue: () => ({ start: String(y), end: String(y) }) },
          { label: '近 3 年', getValue: () => ({ start: String(y - 2), end: String(y) }) },
          { label: '近 5 年', getValue: () => ({ start: String(y - 4), end: String(y) }) },
        ]
      }
      if (picker === 'quarter') {
        return [
          {
            label: '本季度',
            getValue: () => {
              const q = formatDayjsByPicker(dayjs(), 'quarter', resolvedFormat)
              return { start: q, end: q }
            },
          },
          {
            label: '近 2 季度',
            getValue: () => ({
              start: formatDayjsByPicker(dayjs().subtract(3, 'month'), 'quarter', resolvedFormat),
              end: formatDayjsByPicker(dayjs(), 'quarter', resolvedFormat),
            }),
          },
          {
            label: '本年度',
            getValue: () => ({
              start: `${dayjs().year()}-Q1`,
              end: `${dayjs().year()}-Q4`,
            }),
          },
        ]
      }
      if (picker === 'month') {
        return [
          {
            label: '本月',
            getValue: () => {
              const m = formatDayjsByPicker(dayjs(), 'month', resolvedFormat)
              return { start: m, end: m }
            },
          },
          {
            label: '近 3 个月',
            getValue: () => ({
              start: formatDayjsByPicker(dayjs().subtract(2, 'month'), 'month', resolvedFormat),
              end: formatDayjsByPicker(dayjs(), 'month', resolvedFormat),
            }),
          },
          {
            label: '近 6 个月',
            getValue: () => ({
              start: formatDayjsByPicker(dayjs().subtract(5, 'month'), 'month', resolvedFormat),
              end: formatDayjsByPicker(dayjs(), 'month', resolvedFormat),
            }),
          },
          {
            label: '今年至今',
            getValue: () => ({
              start: formatDayjsByPicker(dayjs().startOf('year'), 'month', resolvedFormat),
              end: formatDayjsByPicker(dayjs(), 'month', resolvedFormat),
            }),
          },
        ]
      }
      if (picker === 'week') {
        return [
          {
            label: '本周',
            getValue: () => {
              const w = formatDayjsByPicker(dayjs(), 'week', resolvedFormat)
              return { start: w, end: w }
            },
          },
          {
            label: '近 4 周',
            getValue: () => ({
              start: formatDayjsByPicker(dayjs().subtract(21, 'day'), 'week', resolvedFormat),
              end: formatDayjsByPicker(dayjs(), 'week', resolvedFormat),
            }),
          },
          {
            label: '近 12 周',
            getValue: () => ({
              start: formatDayjsByPicker(dayjs().subtract(77, 'day'), 'week', resolvedFormat),
              end: formatDayjsByPicker(dayjs(), 'week', resolvedFormat),
            }),
          },
        ]
      }
      return [
        {
          label: '今天',
          getValue: () => ({
            start: showTimeCfg.enabled
              ? dayjs().startOf('day').format(resolvedFormat)
              : dayjs().format(resolvedFormat),
            end: showTimeCfg.enabled
              ? dayjs().endOf('day').format(resolvedFormat)
              : dayjs().format(resolvedFormat),
          }),
        },
        {
          label: '近 7 天',
          getValue: () => ({
            start: (showTimeCfg.enabled
              ? dayjs().subtract(6, 'day').startOf('day')
              : dayjs().subtract(6, 'day')
            ).format(resolvedFormat),
            end: (showTimeCfg.enabled ? dayjs().endOf('day') : dayjs()).format(resolvedFormat),
          }),
        },
        {
          label: '近 30 天',
          getValue: () => ({
            start: (showTimeCfg.enabled
              ? dayjs().subtract(29, 'day').startOf('day')
              : dayjs().subtract(29, 'day')
            ).format(resolvedFormat),
            end: (showTimeCfg.enabled ? dayjs().endOf('day') : dayjs()).format(resolvedFormat),
          }),
        },
        {
          label: '本月',
          getValue: () => ({
            start: dayjs().startOf('month').format(resolvedFormat),
            end: (showTimeCfg.enabled ? dayjs().endOf('day') : dayjs()).format(resolvedFormat),
          }),
        },
      ]
    }, [shortcuts, picker, resolvedFormat, showTimeCfg.enabled])

    useEffect(() => {
      if (!open) return
      const onDown = (e: MouseEvent) => {
        const target = e.target as Node
        if (rootRef.current?.contains(target) || panelRef.current?.contains(target)) return
        setOpen(false)
      }
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          e.stopPropagation()
          setOpen(false)
        }
      }
      document.addEventListener('mousedown', onDown)
      document.addEventListener('keydown', onKey, true)
      return () => {
        document.removeEventListener('mousedown', onDown)
        document.removeEventListener('keydown', onKey, true)
      }
    }, [open])

    const emitRange = (next: DateRange) => {
      if (!isControlled) setInternalRange(next)
      if (prefersTuple) {
        onChange?.([next.start, next.end])
      } else {
        onChange?.(next)
      }
    }

    // 统一以可比较键计算当前高亮区间 [startKey, endKey]
    const activeKeys = useMemo(() => {
      if (selectingStart) {
        const sKey = toComparablePeriodKey(selectingStart, picker)
        const hKey = hoverVal ? toComparablePeriodKey(hoverVal, picker) : null
        if (!sKey) return { startKey: null, endKey: null }
        if (!hKey) return { startKey: sKey, endKey: null }
        return hKey < sKey ? { startKey: hKey, endKey: sKey } : { startKey: sKey, endKey: hKey }
      }
      if (showTimeCfg.enabled && (draftRangeDate.start || draftRangeDate.end)) {
        return {
          startKey: draftRangeDate.start || null,
          endKey: draftRangeDate.end || null,
        }
      }
      return {
        startKey: toComparablePeriodKey(currentRange.start, picker),
        endKey: toComparablePeriodKey(currentRange.end, picker),
      }
    }, [selectingStart, hoverVal, currentRange, picker, showTimeCfg.enabled, draftRangeDate])

    const handlePeriodPick = (valueStr: string) => {
      if (!selectingStart) {
        setSelectingStart(valueStr)
        setHoverVal(null)
        if (showTimeCfg.enabled) {
          setDraftRangeDate({ start: valueStr, end: '' })
        }
        return
      }
      const k1 = toComparablePeriodKey(selectingStart, picker) ?? selectingStart
      const k2 = toComparablePeriodKey(valueStr, picker) ?? valueStr
      const [first, second] = k2 < k1 ? [valueStr, selectingStart] : [selectingStart, valueStr]
      if (showTimeCfg.enabled) {
        setDraftRangeDate({ start: first, end: second })
        setSelectingStart(null)
        setHoverVal(null)
        return
      }
      emitRange({ start: first, end: second })
      setSelectingStart(null)
      setHoverVal(null)
      setOpen(false)
    }

    const handleConfirmDateTimeRange = () => {
      const sDate = draftRangeDate.start || dayjs().format('YYYY-MM-DD')
      const eDate = draftRangeDate.end || sDate
      const sTimeStr = formatTimeParts(
        startTime.hour,
        startTime.minute,
        startTime.second,
        showTimeCfg.showSecond
      )
      const eTimeStr = formatTimeParts(
        endTime.hour,
        endTime.minute,
        endTime.second,
        showTimeCfg.showSecond
      )
      const sObj = dayjs(`${sDate} ${sTimeStr}`)
      const eObj = dayjs(`${eDate} ${eTimeStr}`)
      const [first, second] =
        sObj.isValid() && eObj.isValid() && eObj.isBefore(sObj) ? [eObj, sObj] : [sObj, eObj]
      emitRange({
        start: first.isValid() ? first.format(resolvedFormat) : `${sDate} ${sTimeStr}`,
        end: second.isValid() ? second.format(resolvedFormat) : `${eDate} ${eTimeStr}`,
      })
      setOpen(false)
    }

    const minDay = useMemo(
      () => (minDate ? parseDimensionToDayjs(minDate, picker) : null),
      [minDate, picker]
    )
    const maxDay = useMemo(
      () => (maxDate ? parseDimensionToDayjs(maxDate, picker) : null),
      [maxDate, picker]
    )

    const leftCells = useMemo(
      () => buildCalendarMonthGrid(leftAnchor.year(), leftAnchor.month()),
      [leftAnchor]
    )
    const rightCells = useMemo(
      () => buildCalendarMonthGrid(rightAnchor.year(), rightAnchor.month()),
      [rightAnchor]
    )

    const renderRangeHeader = (anchor: dayjs.Dayjs, side: 'left' | 'right') => {
      const decade = buildCalendarDecadeGrid(anchor.year())
      const title =
        picker === 'year'
          ? `${decade.startYear} - ${decade.endYear}`
          : picker === 'month' || picker === 'quarter'
            ? `${anchor.year()} 年`
            : anchor.format('YYYY 年 M 月')
      const bigStep = picker === 'year' ? 10 : 1

      return (
        <div className="mb-2 flex items-center justify-between">
          {side === 'left' ? (
            <div className="flex items-center gap-0.5">
              <button
                type="button"
                aria-label={picker === 'year' ? '上一个十年' : '上一年'}
                onClick={() => setLeftAnchor((m) => m.subtract(bigStep, 'year'))}
                className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <ChevronsLeft className="h-3.5 w-3.5" />
              </button>
              {(picker === 'date' || picker === 'week') && (
                <button
                  type="button"
                  aria-label="上一月"
                  onClick={() => setLeftAnchor((m) => m.subtract(1, 'month'))}
                  className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          ) : (
            <span className="w-12" />
          )}

          <span className="text-xs font-semibold text-[var(--abc-fg)] tabular-nums">{title}</span>

          {side === 'right' ? (
            <div className="flex items-center gap-0.5">
              {(picker === 'date' || picker === 'week') && (
                <button
                  type="button"
                  aria-label="下一月"
                  onClick={() => setLeftAnchor((m) => m.add(1, 'month'))}
                  className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              )}
              <button
                type="button"
                aria-label={picker === 'year' ? '下一个十年' : '下一年'}
                onClick={() => setLeftAnchor((m) => m.add(bigStep, 'year'))}
                className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <ChevronsRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <span className="w-12" />
          )}
        </div>
      )
    }

    const renderPane = (anchor: dayjs.Dayjs, side: 'left' | 'right') => {
      if (picker === 'year') {
        const grid = buildCalendarDecadeGrid(anchor.year())
        return (
          <div className="w-[236px]">
            {renderRangeHeader(anchor, side)}
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {grid.cells.map((cell) => {
                const isStart = activeKeys.startKey === cell.value
                const isEnd = activeKeys.endKey === cell.value
                const inRange = Boolean(
                  activeKeys.startKey &&
                    activeKeys.endKey &&
                    cell.value > activeKeys.startKey &&
                    cell.value < activeKeys.endKey
                )
                return (
                  <button
                    key={`${side}-${cell.value}`}
                    type="button"
                    aria-label={cell.value}
                    onMouseEnter={() => selectingStart && setHoverVal(cell.value)}
                    onClick={() => handlePeriodPick(cell.value)}
                    className={cn(
                      'h-9 rounded-[var(--abc-radius-sm)] font-mono text-xs tabular-nums transition-colors cursor-pointer',
                      isStart || isEnd
                        ? 'bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]'
                        : inRange
                          ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                          : cell.inDecade
                            ? 'text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]'
                            : 'text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]'
                    )}
                  >
                    {cell.year}
                  </button>
                )
              })}
            </div>
          </div>
        )
      }

      if (picker === 'quarter') {
        const quarters = buildCalendarYearQuarters(anchor.year())
        return (
          <div className="w-[228px]">
            {renderRangeHeader(anchor, side)}
            <div className="mt-2 grid grid-cols-2 gap-2">
              {quarters.map((cell) => {
                const isStart = activeKeys.startKey === cell.value
                const isEnd = activeKeys.endKey === cell.value
                const inRange = Boolean(
                  activeKeys.startKey &&
                    activeKeys.endKey &&
                    cell.value > activeKeys.startKey &&
                    cell.value < activeKeys.endKey
                )
                return (
                  <button
                    key={`${side}-${cell.value}`}
                    type="button"
                    aria-label={cell.value}
                    onMouseEnter={() => selectingStart && setHoverVal(cell.value)}
                    onClick={() => handlePeriodPick(cell.value)}
                    className={cn(
                      'flex flex-col items-center justify-center rounded-[var(--abc-radius-md)] border px-2 py-2.5 transition-colors cursor-pointer',
                      isStart || isEnd
                        ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                        : inRange
                          ? 'border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                          : 'border-[var(--abc-border)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]'
                    )}
                  >
                    <span className="font-mono text-xs font-semibold">{cell.label}</span>
                    <span className={cn('mt-0.5 text-[10px]', isStart || isEnd ? 'opacity-85' : 'text-[var(--abc-fg-muted)]')}>
                      {cell.monthsLabel}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )
      }

      if (picker === 'month') {
        const months = buildCalendarYearMonths(anchor.year())
        return (
          <div className="w-[236px]">
            {renderRangeHeader(anchor, side)}
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {months.map((cell) => {
                const formatted =
                  resolvedFormat === 'YYYY-MM'
                    ? cell.value
                    : dayjs(`${cell.value}-01`).format(resolvedFormat)
                const isStart = activeKeys.startKey === cell.value
                const isEnd = activeKeys.endKey === cell.value
                const inRange = Boolean(
                  activeKeys.startKey &&
                    activeKeys.endKey &&
                    cell.value > activeKeys.startKey &&
                    cell.value < activeKeys.endKey
                )
                return (
                  <button
                    key={`${side}-${cell.value}`}
                    type="button"
                    aria-label={formatted}
                    onMouseEnter={() => selectingStart && setHoverVal(formatted)}
                    onClick={() => handlePeriodPick(formatted)}
                    className={cn(
                      'h-9 rounded-[var(--abc-radius-sm)] text-xs font-medium transition-colors cursor-pointer',
                      isStart || isEnd
                        ? 'bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]'
                        : inRange
                          ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                          : 'text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]'
                    )}
                  >
                    {cell.label}
                  </button>
                )
              })}
            </div>
          </div>
        )
      }

      const cells = side === 'left' ? leftCells : rightCells

      if (picker === 'week') {
        const rows: Array<{ weekInfo: ReturnType<typeof getIsoWeekInfo>; days: typeof cells }> = []
        for (let i = 0; i < cells.length; i += 7) {
          const slice = cells.slice(i, i + 7)
          rows.push({ weekInfo: getIsoWeekInfo((slice[3] ?? slice[0]).iso), days: slice })
        }
        return (
          <div className="w-[276px]">
            {renderRangeHeader(anchor, side)}
            <div className="grid grid-cols-8 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]">
              <span className="py-1">周</span>
              {WEEK_DAYS.map((d) => (
                <span key={d} className="py-1">
                  {d}
                </span>
              ))}
            </div>
            <div className="mt-1 space-y-0.5">
              {rows.map((row) => {
                const rowKey = row.weekInfo.startIso
                const isStart = activeKeys.startKey === rowKey
                const isEnd = activeKeys.endKey === rowKey
                const inRange = Boolean(
                  activeKeys.startKey &&
                    activeKeys.endKey &&
                    rowKey > activeKeys.startKey &&
                    rowKey < activeKeys.endKey
                )
                return (
                  <div
                    key={`${side}-${row.weekInfo.value}`}
                    onMouseEnter={() => selectingStart && setHoverVal(row.weekInfo.value)}
                    className={cn(
                      'grid grid-cols-8 items-center rounded-[var(--abc-radius-xs)] transition-colors',
                      isStart || isEnd
                        ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                        : inRange
                          ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                          : 'hover:bg-[var(--abc-bg-subtle)]'
                    )}
                  >
                    <button
                      type="button"
                      aria-label={row.weekInfo.value}
                      onClick={() => handlePeriodPick(row.weekInfo.value)}
                      className={cn(
                        'h-7 font-mono text-[10px] font-semibold tabular-nums cursor-pointer',
                        isStart || isEnd ? 'text-[var(--abc-primary-fg)]' : 'text-[var(--abc-primary)]'
                      )}
                    >
                      W{String(row.weekInfo.week).padStart(2, '0')}
                    </button>
                    {row.days.map((cell) => (
                      <button
                        key={`${side}-${cell.iso}`}
                        type="button"
                        aria-label={`${row.weekInfo.value} (${cell.iso})`}
                        onClick={() => handlePeriodPick(row.weekInfo.value)}
                        className={cn(
                          'h-7 font-mono text-xs tabular-nums cursor-pointer',
                          isStart || isEnd
                            ? 'font-semibold text-[var(--abc-primary-fg)]'
                            : inRange
                              ? 'text-[var(--abc-primary)]'
                              : cell.inCurrentMonth
                                ? 'text-[var(--abc-fg)]'
                                : 'text-[var(--abc-fg-muted)]/45'
                        )}
                      >
                        {cell.day}
                      </button>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
        )
      }

      // 默认日维度面板
      return (
        <div className="w-[252px]">
          {renderRangeHeader(anchor, side)}

          <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]">
            {WEEK_DAYS.map((d) => (
              <span key={d} className="py-1">
                {d}
              </span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-y-0.5">
            {cells.map((cell) => {
              const d = dayjs(cell.iso)
              const formatted =
                showTimeCfg.enabled || resolvedFormat === 'YYYY-MM-DD'
                  ? cell.iso
                  : d.format(resolvedFormat)
              const isStart = activeKeys.startKey === cell.iso
              const isEnd = activeKeys.endKey === cell.iso
              const inRange = Boolean(
                activeKeys.startKey &&
                  activeKeys.endKey &&
                  cell.iso > activeKeys.startKey &&
                  cell.iso < activeKeys.endKey
              )
              const isDisabled = Boolean(
                (minDay && d.isBefore(minDay, 'day')) || (maxDay && d.isAfter(maxDay, 'day'))
              )

              return (
                <button
                  key={`${side}-${cell.iso}`}
                  type="button"
                  aria-label={formatted}
                  disabled={isDisabled}
                  onMouseEnter={() => selectingStart && setHoverVal(formatted)}
                  onClick={() => !isDisabled && handlePeriodPick(formatted)}
                  className={cn(
                    'h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed',
                    isStart || isEnd
                      ? 'rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]'
                      : inRange
                        ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                        : cell.inCurrentMonth
                          ? 'rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]'
                          : 'rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]',
                    cell.isToday &&
                      !isStart &&
                      !isEnd &&
                      'border border-[var(--abc-primary)] text-[var(--abc-primary)]'
                  )}
                >
                  {cell.day}
                </button>
              )
            })}
          </div>
        </div>
      )
    }

    return (
      <>
        <div
          ref={rootRef}
          id={pickerId}
          data-daterangepicker-trigger=""
          data-picker-mode={picker}
          data-motion={resolvedMotion}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="dialog"
          tabIndex={disabled ? -1 : 0}
          onClick={() => !disabled && setOpen((v) => !v)}
          onKeyDown={(e) => {
            if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault()
              setOpen((v) => !v)
            }
          }}
          className={cn(
            'relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none',
            baseFieldControlClass,
            SIZE_H[resolvedSize as ControlSize],
            open && 'border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]',
            disabled && 'opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]',
            className
          )}
        >
          <Calendar className="h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" />
          <input
            type="text"
            readOnly
            disabled={disabled}
            placeholder={startPlaceholder}
            value={currentRange.start}
            tabIndex={-1}
            className="w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
          />
          <span className="shrink-0 text-xs text-[var(--abc-fg-muted)]">至</span>
          <input
            type="text"
            readOnly
            disabled={disabled}
            placeholder={endPlaceholder}
            value={currentRange.end}
            tabIndex={-1}
            className="w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
          />
          {showClear && (
            <button
              type="button"
              aria-label="清空日期范围"
              onClick={(e) => {
                e.stopPropagation()
                emitRange({ start: '', end: '' })
              }}
              className="shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>

        {open &&
          portalContainer &&
          createPortal(
            <div
              ref={panelRef}
              role="dialog"
              data-slot="date-picker-panel"
              data-abc-floating=""
              data-abc-theme={portalTheme}
              data-playground-theme={portalTheme}
              data-motion={resolvedMotion}
              aria-label="日期范围选择面板"
              style={floatingStyle}
              className={cn(
                portalTheme === 'dark' && 'dark',
                portalTheme === 'light' && 'light',
                'z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] select-none',
                resolvedMotion !== 'none' && 'abc-animate-popover-in'
              )}
            >
              {shortcutsList.length > 0 && (
                <div className="mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5">
                  {shortcutsList.map((sc) => (
                    <button
                      key={sc.label}
                      type="button"
                      onClick={() => {
                        const raw = sc.getValue()
                        const resolved = normalizeRangeObj(raw)
                        emitRange(resolved)
                        setSelectingStart(null)
                        setHoverVal(null)
                        setOpen(false)
                      }}
                      className="rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer"
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              )}

              {showTimeCfg.enabled && showTimePane ? (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <TimeColumnPanel
                    title={`开始时间 (${draftRangeDate.start || '未选日期'})`}
                    value={startTime}
                    onChange={setStartTime}
                    showSecond={showTimeCfg.showSecond}
                    hourStep={showTimeCfg.hourStep}
                    minuteStep={showTimeCfg.minuteStep}
                    secondStep={showTimeCfg.secondStep}
                  />
                  <TimeColumnPanel
                    title={`结束时间 (${draftRangeDate.end || draftRangeDate.start || '未选日期'})`}
                    value={endTime}
                    onChange={setEndTime}
                    showSecond={showTimeCfg.showSecond}
                    hourStep={showTimeCfg.hourStep}
                    minuteStep={showTimeCfg.minuteStep}
                    secondStep={showTimeCfg.secondStep}
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]">
                  <div>{renderPane(leftAnchor, 'left')}</div>
                  <div className="sm:pl-4">{renderPane(rightAnchor, 'right')}</div>
                </div>
              )}

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]">
                <span>
                  {selectingStart
                    ? `已选起始：${selectingStart}，请继续点击截止项`
                    : showTimeCfg.enabled && draftRangeDate.start && draftRangeDate.end
                      ? `${draftRangeDate.start} ${formatTimeParts(startTime.hour, startTime.minute, startTime.second, showTimeCfg.showSecond)} 至 ${draftRangeDate.end} ${formatTimeParts(endTime.hour, endTime.minute, endTime.second, showTimeCfg.showSecond)}`
                      : currentRange.start && currentRange.end
                        ? `已选区间：${currentRange.start} 至 ${currentRange.end}`
                        : '请依次点击选择起始与截止项'}
                </span>

                {showTimeCfg.enabled && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowTimePane((v) => !v)}
                      className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer"
                    >
                      <Clock className="h-3 w-3" />
                      <span>{showTimePane ? '返回选日期' : '选择时间'}</span>
                    </button>
                    <button
                      type="button"
                      disabled={!draftRangeDate.start}
                      onClick={handleConfirmDateTimeRange}
                      className="rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary-fg)] hover:opacity-90 disabled:opacity-45 cursor-pointer"
                    >
                      确定
                    </button>
                  </div>
                )}
              </div>
            </div>,
            portalContainer
          )}
      </>
    )
  }
)
DateRangePicker.displayName = 'DateRangePicker'
