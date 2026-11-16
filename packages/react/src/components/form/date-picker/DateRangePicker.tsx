import { buildCalendarMonthGrid } from '@abc-design/core'
import dayjs from 'dayjs'
import {
Calendar,
ChevronLeft,
ChevronRight,
ChevronsLeft,
ChevronsRight,
X,
} from 'lucide-react'
import React,{ useEffect,useId,useImperativeHandle,useMemo,useRef,useState } from 'react'
import { createPortal } from 'react-dom'
import { useAbcMotion,useAbcSize } from '../../../hooks/useAbcDefaults'
import { getOverlayPortalContainer } from '../../../hooks/useFloatingPosition'
import { cn } from '../../../utils/cn'
import { baseFieldControlClass,type ControlSize } from '../Input'

import { SIZE_H,WEEK_DAYS,normalizeRangeObj,type DateRange,type DateRangePickerProps,type DateRangeShortcut } from './types'

export const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      placeholder = ['开始日期', '结束日期'],
      allowClear,
      clearable,
      disabled = false,
      format = 'YYYY-MM-DD',
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

    const [startPlaceholder, endPlaceholder] = Array.isArray(placeholder)
      ? [placeholder[0] || '开始日期', placeholder[1] || '结束日期']
      : [placeholder || '开始日期', placeholder || '结束日期']

    const [open, setOpen] = useState(false)
    const [pos, setPos] = useState({ top: 0, left: 0 })
    const [selectingStart, setSelectingStart] = useState<string | null>(null)
    const [hoverDate, setHoverDate] = useState<string | null>(null)
    const [leftMonth, setLeftMonth] = useState(() =>
      currentRange.start && dayjs(currentRange.start).isValid()
        ? dayjs(currentRange.start)
        : dayjs()
    )
    const rightMonth = useMemo(() => leftMonth.add(1, 'month'), [leftMonth])

    const isClearable = allowClear ?? clearable ?? true
    const showClear = Boolean(
      isClearable && (currentRange.start || currentRange.end) && !disabled
    )

    useEffect(() => {
      if (open) {
        setSelectingStart(null)
        setHoverDate(null)
        setLeftMonth(
          currentRange.start && dayjs(currentRange.start).isValid()
            ? dayjs(currentRange.start)
            : dayjs()
        )
      } else {
        setSelectingStart(null)
        setHoverDate(null)
      }
    }, [open, currentRange.start])

    const shortcutsList = useMemo<DateRangeShortcut[]>(() => {
      if (shortcuts === false) return []
      if (Array.isArray(shortcuts)) return shortcuts
      return [
        {
          label: '今天',
          getValue: () => {
            const d = dayjs().format(format)
            return { start: d, end: d }
          },
        },
        {
          label: '近 7 天',
          getValue: () => ({
            start: dayjs().subtract(6, 'day').format(format),
            end: dayjs().format(format),
          }),
        },
        {
          label: '近 30 天',
          getValue: () => ({
            start: dayjs().subtract(29, 'day').format(format),
            end: dayjs().format(format),
          }),
        },
        {
          label: '本月',
          getValue: () => ({
            start: dayjs().startOf('month').format(format),
            end: dayjs().format(format),
          }),
        },
      ]
    }, [shortcuts, format])

    useEffect(() => {
      if (!open) return
      const updatePosition = () => {
        if (!rootRef.current || typeof window === 'undefined') return
        const rect = rootRef.current.getBoundingClientRect()
        const panelHeight = shortcutsList.length > 0 ? 370 : 330
        const panelWidth = 556
        const flip =
          window.innerHeight - rect.bottom < panelHeight && rect.top > panelHeight
        const top = flip ? rect.top - panelHeight - 4 : rect.bottom + 4
        let left = rect.left
        if (left + panelWidth > window.innerWidth - 8) {
          left = Math.max(8, window.innerWidth - panelWidth - 8)
        }
        setPos({ top: Math.max(8, top), left: Math.max(8, left) })
      }
      updatePosition()
      window.addEventListener('resize', updatePosition)
      window.addEventListener('scroll', updatePosition, true)
      return () => {
        window.removeEventListener('resize', updatePosition)
        window.removeEventListener('scroll', updatePosition, true)
      }
    }, [open, shortcutsList.length])

    useEffect(() => {
      if (!open) return
      const onDown = (e: MouseEvent) => {
        const target = e.target as Node
        if (rootRef.current?.contains(target)) return
        if (panelRef.current?.contains(target)) return
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

    const activeRange = useMemo(() => {
      if (selectingStart) {
        const s = dayjs(selectingStart)
        if (!hoverDate) return { start: s, end: null }
        const h = dayjs(hoverDate)
        return h.isBefore(s, 'day') ? { start: h, end: s } : { start: s, end: h }
      }
      return {
        start:
          currentRange.start && dayjs(currentRange.start).isValid()
            ? dayjs(currentRange.start)
            : null,
        end:
          currentRange.end && dayjs(currentRange.end).isValid()
            ? dayjs(currentRange.end)
            : null,
      }
    }, [selectingStart, hoverDate, currentRange])

    const leftCells = useMemo(
      () => buildCalendarMonthGrid(leftMonth.year(), leftMonth.month()),
      [leftMonth]
    )
    const rightCells = useMemo(
      () => buildCalendarMonthGrid(rightMonth.year(), rightMonth.month()),
      [rightMonth]
    )

    const handleCellClick = (iso: string) => {
      const clicked = dayjs(iso)
      const formatted = format === 'YYYY-MM-DD' ? iso : clicked.format(format)
      if (!selectingStart) {
        setSelectingStart(formatted)
        setHoverDate(null)
        return
      }
      const first = dayjs(selectingStart)
      const [s, e] = clicked.isBefore(first, 'day') ? [clicked, first] : [first, clicked]
      emitRange({ start: s.format(format), end: e.format(format) })
      setSelectingStart(null)
      setHoverDate(null)
      setOpen(false)
    }

    const renderMonthPane = (
      monthObj: dayjs.Dayjs,
      cells: ReturnType<typeof buildCalendarMonthGrid>,
      side: 'left' | 'right'
    ) => (
      <div className="w-[252px]">
        <div className="mb-2 flex items-center justify-between">
          {side === 'left' ? (
            <div className="flex items-center gap-0.5">
              <button
                type="button"
                aria-label="上一年"
                onClick={() => setLeftMonth((m) => m.subtract(1, 'year'))}
                className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <ChevronsLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label="上一月"
                onClick={() => setLeftMonth((m) => m.subtract(1, 'month'))}
                className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <span className="w-12" />
          )}

          <span className="text-xs font-semibold text-[var(--abc-fg)]">
            {monthObj.format('YYYY 年 M 月')}
          </span>

          {side === 'right' ? (
            <div className="flex items-center gap-0.5">
              <button
                type="button"
                aria-label="下一月"
                onClick={() => setLeftMonth((m) => m.add(1, 'month'))}
                className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label="下一年"
                onClick={() => setLeftMonth((m) => m.add(1, 'year'))}
                className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <ChevronsRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <span className="w-12" />
          )}
        </div>

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
            const formatted = format === 'YYYY-MM-DD' ? cell.iso : d.format(format)
            const isStart = Boolean(activeRange.start && d.isSame(activeRange.start, 'day'))
            const isEnd = Boolean(activeRange.end && d.isSame(activeRange.end, 'day'))
            const inRange = Boolean(
              activeRange.start &&
                activeRange.end &&
                d.isAfter(activeRange.start, 'day') &&
                d.isBefore(activeRange.end, 'day')
            )
            const isDisabled = Boolean(
              (minDate && d.isBefore(dayjs(minDate), 'day')) ||
                (maxDate && d.isAfter(dayjs(maxDate), 'day'))
            )

            return (
              <button
                key={`${side}-${cell.iso}`}
                type="button"
                aria-label={formatted}
                disabled={isDisabled}
                onMouseEnter={() => selectingStart && setHoverDate(formatted)}
                onClick={() => !isDisabled && handleCellClick(cell.iso)}
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

    return (
      <>
        <div
          ref={rootRef}
          id={pickerId}
          data-daterangepicker-trigger=""
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
            'relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none abc-motion-control',
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
          typeof document !== 'undefined' &&
          createPortal(
            <div
              ref={panelRef}
              role="dialog"
              data-abc-floating=""
              data-motion={resolvedMotion}
              aria-label="日期范围选择面板"
              style={{ top: pos.top, left: pos.left }}
              className="fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none"
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
                        setHoverDate(null)
                        setOpen(false)
                      }}
                      className="rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer"
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]">
                <div>{renderMonthPane(leftMonth, leftCells, 'left')}</div>
                <div className="sm:pl-4">{renderMonthPane(rightMonth, rightCells, 'right')}</div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]">
                <span>
                  {selectingStart
                    ? `已选起始日：${selectingStart}，请继续点击截止日期`
                    : currentRange.start && currentRange.end
                      ? `已选区间：${currentRange.start} 至 ${currentRange.end}`
                      : '请依次点击选择起始与截止日期'}
                </span>
              </div>
            </div>,
            getOverlayPortalContainer(rootRef.current) ?? document.body
          )}
      </>
    )
  }
)
DateRangePicker.displayName = 'DateRangePicker'

