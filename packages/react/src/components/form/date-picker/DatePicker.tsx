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

import { type DatePickerProps,type DatePickerShortcut,SIZE_H,WEEK_DAYS } from './types'

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      value,
      defaultValue = '',
      onChange,
      placeholder = '请选择日期',
      allowClear,
      clearable,
      disabled = false,
      format = 'YYYY-MM-DD',
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
    const generatedId = useId()
    const pickerId = id || generatedId
    const rootRef = useRef<HTMLDivElement>(null)
    const panelRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => rootRef.current as HTMLDivElement, [])

    const isControlled = value !== undefined
    const [internalVal, setInternalVal] = useState<string>(defaultValue)
    const currentValue = isControlled ? (value ?? '') : internalVal

    const [open, setOpen] = useState(false)
    const [pos, setPos] = useState({ top: 0, left: 0 })
    const [viewMonth, setViewMonth] = useState(() =>
      currentValue && dayjs(currentValue).isValid() ? dayjs(currentValue) : dayjs()
    )

    const isClearable = allowClear ?? clearable ?? true
    const showClear = Boolean(isClearable && currentValue && !disabled)

    useEffect(() => {
      if (open) {
        setViewMonth(
          currentValue && dayjs(currentValue).isValid() ? dayjs(currentValue) : dayjs()
        )
      }
    }, [open, currentValue])

    const shortcutsList = useMemo<DatePickerShortcut[]>(() => {
      if (shortcuts === false) return []
      if (Array.isArray(shortcuts)) return shortcuts
      return [
        { label: '今天', value: () => dayjs().format(format) },
        { label: '昨天', value: () => dayjs().subtract(1, 'day').format(format) },
        { label: '明天', value: () => dayjs().add(1, 'day').format(format) },
        { label: '一周前', value: () => dayjs().subtract(7, 'day').format(format) },
      ]
    }, [shortcuts, format])

    useEffect(() => {
      if (!open) return
      const updatePosition = () => {
        if (!rootRef.current || typeof window === 'undefined') return
        const rect = rootRef.current.getBoundingClientRect()
        const panelHeight = shortcutsList.length > 0 ? 340 : 300
        const panelWidth = 280
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

    const commitValue = (next: string) => {
      if (!isControlled) setInternalVal(next)
      onChange?.(next)
    }

    const cells = useMemo(
      () => buildCalendarMonthGrid(viewMonth.year(), viewMonth.month()),
      [viewMonth]
    )

    const selectedFormatted = useMemo(() => {
      if (!currentValue) return ''
      const parsed = dayjs(currentValue)
      return parsed.isValid() ? parsed.format('YYYY-MM-DD') : currentValue
    }, [currentValue])

    return (
      <>
        <div
          ref={rootRef}
          id={pickerId}
          data-datepicker-trigger=""
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
            placeholder={placeholder}
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
          typeof document !== 'undefined' &&
          createPortal(
            <div
              ref={panelRef}
              role="dialog"
              data-abc-floating=""
              data-motion={resolvedMotion}
              aria-label="日期选择面板"
              style={{ top: pos.top, left: pos.left }}
              className="fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none"
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

              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  <button
                    type="button"
                    aria-label="上一年"
                    onClick={() => setViewMonth((m) => m.subtract(1, 'year'))}
                    className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <ChevronsLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    aria-label="上一月"
                    onClick={() => setViewMonth((m) => m.subtract(1, 'month'))}
                    className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                </div>

                <span className="text-xs font-semibold text-[var(--abc-fg)]">
                  {viewMonth.format('YYYY 年 M 月')}
                </span>

                <div className="flex items-center gap-0.5">
                  <button
                    type="button"
                    aria-label="下一月"
                    onClick={() => setViewMonth((m) => m.add(1, 'month'))}
                    className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    aria-label="下一年"
                    onClick={() => setViewMonth((m) => m.add(1, 'year'))}
                    className="rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                  >
                    <ChevronsRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

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
                  const formatted = format === 'YYYY-MM-DD' ? cell.iso : cellDay.format(format)
                  const isSelected = cell.iso === selectedFormatted
                  const isDisabled = Boolean(
                    (minDate && cellDay.isBefore(dayjs(minDate), 'day')) ||
                      (maxDate && cellDay.isAfter(dayjs(maxDate), 'day'))
                  )
                  return (
                    <button
                      key={cell.iso}
                      type="button"
                      aria-label={formatted}
                      disabled={isDisabled}
                      onClick={() => {
                        if (isDisabled) return
                        commitValue(formatted)
                        setOpen(false)
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
            </div>,
            getOverlayPortalContainer(rootRef.current) ?? document.body
          )}
      </>
    )
  }
)
DatePicker.displayName = 'DatePicker'


export default DatePicker
