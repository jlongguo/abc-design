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
  parseDimensionToDayjs,
  resolveDateFormat,
  resolveShowTimeConfig,
  resolveSinglePlaceholder,
  type DatePickerProps,
  type DatePickerShortcut,
} from './types'

/**
 * 企业级多维度日期/时间选择器 (DatePicker)
 * 支持日 (date)、周 (week)、月 (month)、季度 (quarter)、年 (year) 五大时间维度，
 * 以及 date 模式下的 showTime 日期时间联动选择，内置视口感知 Portal 定位与快捷预设。
 */
export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      value,
      defaultValue = '',
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
      name,
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
    const resolvedPlaceholder = resolveSinglePlaceholder(
      picker,
      picker === 'date' ? showTime : false,
      placeholder
    )

    const generatedId = useId()
    const pickerId = id || generatedId
    const rootRef = useRef<HTMLDivElement>(null)
    const panelRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => rootRef.current as HTMLDivElement, [])

    const isControlled = value !== undefined
    const [internalVal, setInternalVal] = useState<string>(defaultValue)
    const currentValue = isControlled ? (value ?? '') : internalVal

    const [open, setOpen] = useState(false)
    const [hoverWeek, setHoverWeek] = useState<string | null>(null)
    const [viewMonth, setViewMonth] = useState<dayjs.Dayjs>(
      () => parseDimensionToDayjs(currentValue, picker) ?? dayjs()
    )
    const [draftDateIso, setDraftDateIso] = useState<string>(() => {
      const parsed = parseDimensionToDayjs(currentValue, 'date')
      return parsed ? parsed.format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')
    })
    const [draftTime, setDraftTime] = useState<AbcTimeParts>(
      () =>
        parseTimeParts(currentValue) ??
        parseTimeParts(showTimeCfg.defaultValue) ?? { hour: 0, minute: 0, second: 0 }
    )

    const isClearable = allowClear ?? clearable ?? true
    const showClear = Boolean(isClearable && currentValue && !disabled)

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
        const parsed = parseDimensionToDayjs(currentValue, picker) ?? dayjs()
        setViewMonth(parsed)
        setDraftDateIso(parsed.format('YYYY-MM-DD'))
        setDraftTime(
          parseTimeParts(currentValue) ??
            parseTimeParts(showTimeCfg.defaultValue) ?? { hour: 0, minute: 0, second: 0 }
        )
        setHoverWeek(null)
      }
    }, [open, currentValue, picker, showTimeCfg.defaultValue])

    const shortcutsList = useMemo<DatePickerShortcut[]>(() => {
      if (shortcuts === false) return []
      if (Array.isArray(shortcuts)) return shortcuts
      if (picker === 'year') {
        return [
          { label: '今年', value: () => String(dayjs().year()) },
          { label: '去年', value: () => String(dayjs().subtract(1, 'year').year()) },
          { label: '明年', value: () => String(dayjs().add(1, 'year').year()) },
        ]
      }
      if (picker === 'quarter') {
        return [
          { label: '本季度', value: () => formatDayjsByPicker(dayjs(), 'quarter', resolvedFormat) },
          {
            label: '上季度',
            value: () => formatDayjsByPicker(dayjs().subtract(3, 'month'), 'quarter', resolvedFormat),
          },
          {
            label: '下季度',
            value: () => formatDayjsByPicker(dayjs().add(3, 'month'), 'quarter', resolvedFormat),
          },
        ]
      }
      if (picker === 'month') {
        return [
          { label: '本月', value: () => formatDayjsByPicker(dayjs(), 'month', resolvedFormat) },
          {
            label: '上月',
            value: () => formatDayjsByPicker(dayjs().subtract(1, 'month'), 'month', resolvedFormat),
          },
          {
            label: '下月',
            value: () => formatDayjsByPicker(dayjs().add(1, 'month'), 'month', resolvedFormat),
          },
        ]
      }
      if (picker === 'week') {
        return [
          { label: '本周', value: () => formatDayjsByPicker(dayjs(), 'week', resolvedFormat) },
          {
            label: '上周',
            value: () => formatDayjsByPicker(dayjs().subtract(7, 'day'), 'week', resolvedFormat),
          },
          {
            label: '下周',
            value: () => formatDayjsByPicker(dayjs().add(7, 'day'), 'week', resolvedFormat),
          },
        ]
      }
      if (showTimeCfg.enabled) {
        return [
          { label: '此刻', value: () => dayjs().format(resolvedFormat) },
          { label: '今日零点', value: () => dayjs().startOf('day').format(resolvedFormat) },
          { label: '1 小时前', value: () => dayjs().subtract(1, 'hour').format(resolvedFormat) },
          { label: '24 小时前', value: () => dayjs().subtract(24, 'hour').format(resolvedFormat) },
        ]
      }
      return [
        { label: '今天', value: () => dayjs().format(resolvedFormat) },
        { label: '昨天', value: () => dayjs().subtract(1, 'day').format(resolvedFormat) },
        { label: '明天', value: () => dayjs().add(1, 'day').format(resolvedFormat) },
        { label: '一周前', value: () => dayjs().subtract(7, 'day').format(resolvedFormat) },
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

    const commitValue = (next: string) => {
      if (!isControlled) setInternalVal(next)
      onChange?.(next)
    }

    const cells = useMemo(
      () => buildCalendarMonthGrid(viewMonth.year(), viewMonth.month()),
      [viewMonth]
    )
    const weekRows = useMemo(() => {
      const rows: Array<{ weekInfo: ReturnType<typeof getIsoWeekInfo>; days: typeof cells }> = []
      for (let i = 0; i < cells.length; i += 7) {
        const slice = cells.slice(i, i + 7)
        const midDay = slice[3] ?? slice[0]
        rows.push({ weekInfo: getIsoWeekInfo(midDay.iso), days: slice })
      }
      return rows
    }, [cells])
    const monthCells = useMemo(() => buildCalendarYearMonths(viewMonth.year()), [viewMonth])
    const quarterCells = useMemo(() => buildCalendarYearQuarters(viewMonth.year()), [viewMonth])
    const decadeGrid = useMemo(() => buildCalendarDecadeGrid(viewMonth.year()), [viewMonth])

    const selectedDateIso = useMemo(() => {
      if (showTimeCfg.enabled) return draftDateIso
      if (!currentValue) return ''
      const parsed = parseDimensionToDayjs(currentValue, 'date')
      return parsed ? parsed.format('YYYY-MM-DD') : currentValue
    }, [currentValue, showTimeCfg.enabled, draftDateIso])

    const selectedWeekVal = useMemo(() => {
      if (picker !== 'week' || !currentValue) return ''
      const parsed = parseDimensionToDayjs(currentValue, 'week')
      return parsed ? getIsoWeekInfo(parsed.format('YYYY-MM-DD')).value : currentValue
    }, [picker, currentValue])

    const minDay = useMemo(
      () => (minDate ? parseDimensionToDayjs(minDate, picker) : null),
      [minDate, picker]
    )
    const maxDay = useMemo(
      () => (maxDate ? parseDimensionToDayjs(maxDate, picker) : null),
      [maxDate, picker]
    )

    const confirmDateTime = (isoDate: string, time: AbcTimeParts) => {
      const timeStr = formatTimeParts(time.hour, time.minute, time.second, showTimeCfg.showSecond)
      const combined = dayjs(`${isoDate} ${timeStr}`)
      commitValue(combined.isValid() ? combined.format(resolvedFormat) : `${isoDate} ${timeStr}`)
      setOpen(false)
    }

    return (
      <>
        <div
          ref={rootRef}
          id={pickerId}
          data-datepicker-trigger=""
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
            'relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none',
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
            placeholder={resolvedPlaceholder}
            value={currentValue}
            name={name}
            tabIndex={-1}
            className="w-full min-w-0 flex-1 bg-transparent p-0 font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
          />
          {showClear && (
            <button
              type="button"
              aria-label="清空日期"
              onClick={(e) => {
                e.stopPropagation()
                commitValue('')
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
              aria-label="日期选择面板"
              style={floatingStyle}
              className={cn(
                portalTheme === 'dark' && 'dark',
                portalTheme === 'light' && 'light',
                'z-[1300] max-w-[calc(100vw-16px)] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] select-none',
                showTimeCfg.enabled ? 'w-auto' : picker === 'week' ? 'w-[308px]' : 'w-[280px]',
                resolvedMotion !== 'none' && 'abc-animate-popover-in'
              )}
            >
              {shortcutsList.length > 0 && (
                <div className="mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2">
                  {shortcutsList.map((sc) => (
                    <button
                      key={sc.label}
                      type="button"
                      onClick={() => {
                        const next = typeof sc.value === 'function' ? sc.value() : sc.value
                        commitValue(next)
                        setOpen(false)
                      }}
                      className="rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer"
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              )}

              <div className={cn(showTimeCfg.enabled && 'flex flex-col gap-3 sm:flex-row')}>
                <div className={cn(showTimeCfg.enabled && 'w-[256px]')}>
                  {/* 顶部年月/年代导航栏 */}
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      <button
                        type="button"
                        aria-label={picker === 'year' ? '上一个十年' : '上一年'}
                        onClick={() =>
                          setViewMonth((m) => m.subtract(picker === 'year' ? 10 : 1, 'year'))
                        }
                        className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                      >
                        <ChevronsLeft className="h-3.5 w-3.5" />
                      </button>
                      {(picker === 'date' || picker === 'week') && (
                        <button
                          type="button"
                          aria-label="上一月"
                          onClick={() => setViewMonth((m) => m.subtract(1, 'month'))}
                          className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                        >
                          <ChevronLeft className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>

                    <span className="text-xs font-semibold text-[var(--abc-fg)] tabular-nums">
                      {picker === 'year'
                        ? `${decadeGrid.startYear} - ${decadeGrid.endYear}`
                        : picker === 'month' || picker === 'quarter'
                          ? `${viewMonth.year()} 年`
                          : viewMonth.format('YYYY 年 M 月')}
                    </span>

                    <div className="flex items-center gap-0.5">
                      {(picker === 'date' || picker === 'week') && (
                        <button
                          type="button"
                          aria-label="下一月"
                          onClick={() => setViewMonth((m) => m.add(1, 'month'))}
                          className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                        >
                          <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                      )}
                      <button
                        type="button"
                        aria-label={picker === 'year' ? '下一个十年' : '下一年'}
                        onClick={() =>
                          setViewMonth((m) => m.add(picker === 'year' ? 10 : 1, 'year'))
                        }
                        className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                      >
                        <ChevronsRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* 维度 1：年份面板 (12 格年代网格) */}
                  {picker === 'year' && (
                    <div className="mt-2 grid grid-cols-3 gap-1.5">
                      {decadeGrid.cells.map((cell) => {
                        const isSelected = currentValue === cell.value
                        const cellDay = dayjs(`${cell.year}-01-01`)
                        const isDisabled = Boolean(
                          (minDay && cellDay.isBefore(minDay, 'year')) ||
                            (maxDay && cellDay.isAfter(maxDay, 'year'))
                        )
                        return (
                          <button
                            key={cell.value}
                            type="button"
                            aria-label={cell.value}
                            disabled={isDisabled}
                            onClick={() => {
                              if (isDisabled) return
                              commitValue(cell.value)
                              setOpen(false)
                            }}
                            className={cn(
                              'h-9 rounded-[var(--abc-radius-sm)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed',
                              isSelected
                                ? 'bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]'
                                : cell.inDecade
                                  ? 'text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]'
                                  : 'text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]',
                              cell.isCurrent &&
                                !isSelected &&
                                'border border-[var(--abc-primary)] text-[var(--abc-primary)]'
                            )}
                          >
                            {cell.year}
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {/* 维度 2：季度面板 (Q1 - Q4) */}
                  {picker === 'quarter' && (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {quarterCells.map((cell) => {
                        const isSelected = currentValue === cell.value
                        const cellDay = dayjs(
                          `${cell.year}-${String(cell.startMonth).padStart(2, '0')}-01`
                        )
                        const isDisabled = Boolean(
                          (minDay && cellDay.isBefore(minDay, 'month')) ||
                            (maxDay && cellDay.isAfter(maxDay, 'month'))
                        )
                        return (
                          <button
                            key={cell.value}
                            type="button"
                            aria-label={cell.value}
                            disabled={isDisabled}
                            onClick={() => {
                              if (isDisabled) return
                              commitValue(cell.value)
                              setOpen(false)
                            }}
                            className={cn(
                              'flex flex-col items-center justify-center rounded-[var(--abc-radius-md)] border px-2 py-2.5 transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed',
                              isSelected
                                ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                                : cell.isCurrent
                                  ? 'border-[var(--abc-primary)] text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)]'
                                  : 'border-[var(--abc-border)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]'
                            )}
                          >
                            <span className="font-mono text-xs font-semibold">{cell.label}</span>
                            <span
                              className={cn(
                                'mt-0.5 text-[10px]',
                                isSelected ? 'opacity-85' : 'text-[var(--abc-fg-muted)]'
                              )}
                            >
                              {cell.monthsLabel}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {/* 维度 3：月份面板 (1月 - 12月) */}
                  {picker === 'month' && (
                    <div className="mt-2 grid grid-cols-3 gap-1.5">
                      {monthCells.map((cell) => {
                        const formatted =
                          resolvedFormat === 'YYYY-MM'
                            ? cell.value
                            : dayjs(`${cell.value}-01`).format(resolvedFormat)
                        const isSelected = currentValue === formatted || currentValue === cell.value
                        const cellDay = dayjs(`${cell.value}-01`)
                        const isDisabled = Boolean(
                          (minDay && cellDay.isBefore(minDay, 'month')) ||
                            (maxDay && cellDay.isAfter(maxDay, 'month'))
                        )
                        return (
                          <button
                            key={cell.value}
                            type="button"
                            aria-label={formatted}
                            disabled={isDisabled}
                            onClick={() => {
                              if (isDisabled) return
                              commitValue(formatted)
                              setOpen(false)
                            }}
                            className={cn(
                              'h-9 rounded-[var(--abc-radius-sm)] text-xs font-medium transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed',
                              isSelected
                                ? 'bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]'
                                : 'text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]',
                              cell.isCurrent &&
                                !isSelected &&
                                'border border-[var(--abc-primary)] text-[var(--abc-primary)]'
                            )}
                          >
                            {cell.label}
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {/* 维度 4：周面板 (左侧 ISO 周号 + 整行高亮) */}
                  {picker === 'week' && (
                    <>
                      <div className="grid grid-cols-8 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]">
                        <span className="py-1">周</span>
                        {WEEK_DAYS.map((d) => (
                          <span key={d} className="py-1">
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="mt-1 space-y-0.5" onMouseLeave={() => setHoverWeek(null)}>
                        {weekRows.map((row) => {
                          const isSelectedRow = row.weekInfo.value === selectedWeekVal
                          const isHoveredRow = row.weekInfo.value === hoverWeek
                          return (
                            <div
                              key={row.weekInfo.value}
                              onMouseEnter={() => setHoverWeek(row.weekInfo.value)}
                              className={cn(
                                'grid grid-cols-8 items-center rounded-[var(--abc-radius-xs)] transition-colors',
                                isSelectedRow
                                  ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                                  : isHoveredRow
                                    ? 'bg-[var(--abc-primary-soft)]'
                                    : ''
                              )}
                            >
                              <button
                                type="button"
                                aria-label={row.weekInfo.value}
                                onClick={() => {
                                  commitValue(row.weekInfo.value)
                                  setOpen(false)
                                }}
                                className={cn(
                                  'h-7 font-mono text-[10px] font-semibold tabular-nums cursor-pointer',
                                  isSelectedRow
                                    ? 'text-[var(--abc-primary-fg)]'
                                    : 'text-[var(--abc-primary)]'
                                )}
                              >
                                W{String(row.weekInfo.week).padStart(2, '0')}
                              </button>
                              {row.days.map((cell) => (
                                <button
                                  key={cell.iso}
                                  type="button"
                                  aria-label={`${row.weekInfo.value} (${cell.iso})`}
                                  onClick={() => {
                                    commitValue(row.weekInfo.value)
                                    setOpen(false)
                                  }}
                                  className={cn(
                                    'h-7 font-mono text-xs tabular-nums cursor-pointer',
                                    isSelectedRow
                                      ? 'font-semibold text-[var(--abc-primary-fg)]'
                                      : cell.inCurrentMonth
                                        ? 'text-[var(--abc-fg)]'
                                        : 'text-[var(--abc-fg-muted)]/50'
                                  )}
                                >
                                  {cell.day}
                                </button>
                              ))}
                            </div>
                          )
                        })}
                      </div>
                    </>
                  )}

                  {/* 维度 5：日历面板 (42 格标准月历，可选右侧 showTime 滚轮) */}
                  {picker === 'date' && (
                    <>
                      <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]">
                        {WEEK_DAYS.map((d) => (
                          <span key={d} className="py-1">
                            {d}
                          </span>
                        ))}
                      </div>

                      <div className="mt-1 grid grid-cols-7 gap-0.5">
                        {cells.map((cell) => {
                          const cellDay = dayjs(cell.iso)
                          const formatted =
                            resolvedFormat === 'YYYY-MM-DD'
                              ? cell.iso
                              : cellDay.format(resolvedFormat)
                          const isSelected = cell.iso === selectedDateIso
                          const isDisabled = Boolean(
                            (minDay && cellDay.isBefore(minDay, 'day')) ||
                              (maxDay && cellDay.isAfter(maxDay, 'day'))
                          )
                          return (
                            <button
                              key={cell.iso}
                              type="button"
                              aria-label={showTimeCfg.enabled ? cell.iso : formatted}
                              disabled={isDisabled}
                              onClick={() => {
                                if (isDisabled) return
                                if (showTimeCfg.enabled) {
                                  setDraftDateIso(cell.iso)
                                } else {
                                  commitValue(formatted)
                                  setOpen(false)
                                }
                              }}
                              className={cn(
                                'h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed',
                                isSelected
                                  ? 'bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]'
                                  : cell.inCurrentMonth
                                    ? 'text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]'
                                    : 'text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]',
                                cell.isToday &&
                                  !isSelected &&
                                  'border border-[var(--abc-primary)] text-[var(--abc-primary)]'
                              )}
                            >
                              {cell.day}
                            </button>
                          )
                        })}
                      </div>
                    </>
                  )}
                </div>

                {showTimeCfg.enabled && (
                  <div className="border-t border-[var(--abc-border)] pt-2.5 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
                    <TimeColumnPanel
                      title={formatTimeParts(
                        draftTime.hour,
                        draftTime.minute,
                        draftTime.second,
                        showTimeCfg.showSecond
                      )}
                      value={draftTime}
                      onChange={setDraftTime}
                      showSecond={showTimeCfg.showSecond}
                      hourStep={showTimeCfg.hourStep}
                      minuteStep={showTimeCfg.minuteStep}
                      secondStep={showTimeCfg.secondStep}
                      compact
                    />
                  </div>
                )}
              </div>

              {showTimeCfg.enabled && (
                <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-[var(--abc-border)] pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      const now = dayjs()
                      const nowTime = { hour: now.hour(), minute: now.minute(), second: now.second() }
                      setDraftDateIso(now.format('YYYY-MM-DD'))
                      setDraftTime(nowTime)
                      confirmDateTime(now.format('YYYY-MM-DD'), nowTime)
                    }}
                    className="text-[11px] font-medium text-[var(--abc-primary)] hover:underline cursor-pointer"
                  >
                    此刻
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums">
                      {draftDateIso}{' '}
                      {formatTimeParts(
                        draftTime.hour,
                        draftTime.minute,
                        draftTime.second,
                        showTimeCfg.showSecond
                      )}
                    </span>
                    <button
                      type="button"
                      onClick={() => confirmDateTime(draftDateIso, draftTime)}
                      className="rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary)] px-2.5 py-1 text-[11px] font-medium text-[var(--abc-primary-fg)] hover:opacity-90 cursor-pointer"
                    >
                      确定
                    </button>
                  </div>
                </div>
              )}
            </div>,
            portalContainer
          )}
      </>
    )
  }
)
DatePicker.displayName = 'DatePicker'

export default DatePicker
