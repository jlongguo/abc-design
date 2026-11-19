import { formatTimeParts, parseTimeParts, type AbcTimeParts } from '@abc-design/core'
import { Clock, X } from 'lucide-react'
import React, { useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useAbcMotion, useAbcSize } from '../../../hooks/useAbcDefaults'
import { useFloatingPosition } from '../../../hooks/useFloatingPosition'
import { cn } from '../../../utils/cn'
import { baseFieldControlClass, type ControlSize } from '../Input'
import { TimeColumnPanel } from './TimeColumnPanel'
import {
  SIZE_H,
  normalizeRangeObj,
  type TimePickerProps,
  type TimePickerShortcut,
  type TimeRange,
  type TimeRangePickerProps,
  type TimeRangeShortcut,
} from './types'

function getNowParts(): AbcTimeParts {
  const now = new Date()
  return { hour: now.getHours(), minute: now.getMinutes(), second: now.getSeconds() }
}

function toSeconds(p: AbcTimeParts): number {
  return p.hour * 3600 + p.minute * 60 + p.second
}

/**
 * 企业级单时刻选择器 (TimePicker)
 * 支持时:分:秒 / 时:分双格式、自定义步进刻度、快捷时刻预设与视口感知 Portal 定位
 */
export const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      value,
      defaultValue = '',
      onChange,
      placeholder = '请选择时间',
      format = 'HH:mm:ss',
      hourStep = 1,
      minuteStep = 1,
      secondStep = 1,
      allowClear,
      clearable,
      disabled = false,
      shortcuts = true,
      id,
      name,
      size,
      motion,
      className,
    },
    ref
  ) => {
    const resolvedSize = useAbcSize(size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const showSecond = /s/i.test(format)
    const generatedId = useId()
    const pickerId = id || generatedId
    const rootRef = useRef<HTMLDivElement>(null)
    const panelRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => rootRef.current as HTMLDivElement, [])

    const isControlled = value !== undefined
    const [internalVal, setInternalVal] = useState<string>(defaultValue)
    const currentValue = isControlled ? (value ?? '') : internalVal

    const [open, setOpen] = useState(false)
    const [draft, setDraft] = useState<AbcTimeParts>(
      () => parseTimeParts(currentValue) ?? { hour: 9, minute: 0, second: 0 }
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
        setDraft(parseTimeParts(currentValue) ?? getNowParts())
      }
    }, [open, currentValue])

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

    const shortcutsList = useMemo<TimePickerShortcut[]>(() => {
      if (shortcuts === false) return []
      if (Array.isArray(shortcuts)) return shortcuts
      return [
        {
          label: '此刻',
          value: () => {
            const p = getNowParts()
            return formatTimeParts(p.hour, p.minute, p.second, showSecond)
          },
        },
        { label: '09:00', value: formatTimeParts(9, 0, 0, showSecond) },
        { label: '12:00', value: formatTimeParts(12, 0, 0, showSecond) },
        { label: '18:00', value: formatTimeParts(18, 0, 0, showSecond) },
      ]
    }, [shortcuts, showSecond])

    const handleDraftChange = (next: AbcTimeParts) => {
      setDraft(next)
      commitValue(formatTimeParts(next.hour, next.minute, next.second, showSecond))
    }

    return (
      <>
        <div
          ref={rootRef}
          id={pickerId}
          data-timepicker-trigger=""
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
          <Clock className="h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" />
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
              aria-label="清空时间"
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
              data-slot="time-picker-panel"
              data-abc-floating=""
              data-abc-theme={portalTheme}
              data-playground-theme={portalTheme}
              data-motion={resolvedMotion}
              aria-label="时间选择面板"
              style={floatingStyle}
              className={cn(
                portalTheme === 'dark' && 'dark',
                portalTheme === 'light' && 'light',
                'z-[1300] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] select-none',
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

              <TimeColumnPanel
                value={draft}
                onChange={handleDraftChange}
                showSecond={showSecond}
                hourStep={hourStep}
                minuteStep={minuteStep}
                secondStep={secondStep}
              />

              <div className="mt-2.5 flex items-center justify-between border-t border-[var(--abc-border)] pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const p = getNowParts()
                    setDraft(p)
                    commitValue(formatTimeParts(p.hour, p.minute, p.second, showSecond))
                    setOpen(false)
                  }}
                  className="text-[11px] font-medium text-[var(--abc-primary)] hover:underline cursor-pointer"
                >
                  此刻
                </button>
                <button
                  type="button"
                  onClick={() => {
                    commitValue(formatTimeParts(draft.hour, draft.minute, draft.second, showSecond))
                    setOpen(false)
                  }}
                  className="rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary)] px-2.5 py-1 text-[11px] font-medium text-[var(--abc-primary-fg)] hover:opacity-90 cursor-pointer"
                >
                  确定
                </button>
              </div>
            </div>,
            portalContainer
          )}
      </>
    )
  }
)
TimePicker.displayName = 'TimePicker'

/**
 * 企业级起止时间区间选择器 (TimeRangePicker)
 * 左右双列同步调节开始与结束时刻，确认时自动纠正起止顺序，兼容 [start, end] 与 { start, end } 双形态
 */
export const TimeRangePicker = React.forwardRef<HTMLDivElement, TimeRangePickerProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      placeholder = ['开始时间', '结束时间'],
      format = 'HH:mm:ss',
      hourStep = 1,
      minuteStep = 1,
      secondStep = 1,
      allowClear,
      clearable,
      disabled = false,
      shortcuts = true,
      id,
      size,
      motion,
      className,
    },
    ref
  ) => {
    const resolvedSize = useAbcSize(size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const showSecond = /s/i.test(format)
    const generatedId = useId()
    const pickerId = id || generatedId
    const rootRef = useRef<HTMLDivElement>(null)
    const panelRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => rootRef.current as HTMLDivElement, [])

    const prefersTuple =
      Array.isArray(value) || (value === undefined && Array.isArray(defaultValue))
    const isControlled = value !== undefined
    const [internalRange, setInternalRange] = useState<TimeRange>(() =>
      normalizeRangeObj(defaultValue)
    )
    const currentRange = isControlled ? normalizeRangeObj(value) : internalRange

    const [startPlaceholder, endPlaceholder] = Array.isArray(placeholder)
      ? [placeholder[0] || '开始时间', placeholder[1] || '结束时间']
      : [placeholder || '开始时间', placeholder || '结束时间']

    const [open, setOpen] = useState(false)
    const [startDraft, setStartDraft] = useState<AbcTimeParts>(
      () => parseTimeParts(currentRange.start) ?? { hour: 9, minute: 0, second: 0 }
    )
    const [endDraft, setEndDraft] = useState<AbcTimeParts>(
      () => parseTimeParts(currentRange.end) ?? { hour: 18, minute: 0, second: 0 }
    )

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
        setStartDraft(parseTimeParts(currentRange.start) ?? { hour: 9, minute: 0, second: 0 })
        setEndDraft(parseTimeParts(currentRange.end) ?? { hour: 18, minute: 0, second: 0 })
      }
    }, [open, currentRange.start, currentRange.end])

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

    const emitRange = (next: TimeRange) => {
      if (!isControlled) setInternalRange(next)
      if (prefersTuple) {
        onChange?.([next.start, next.end])
      } else {
        onChange?.(next)
      }
    }

    const shortcutsList = useMemo<TimeRangeShortcut[]>(() => {
      if (shortcuts === false) return []
      if (Array.isArray(shortcuts)) return shortcuts
      return [
        {
          label: '上午 (09:00-12:00)',
          getValue: () => ({
            start: formatTimeParts(9, 0, 0, showSecond),
            end: formatTimeParts(12, 0, 0, showSecond),
          }),
        },
        {
          label: '工作时段 (09:00-18:00)',
          getValue: () => ({
            start: formatTimeParts(9, 0, 0, showSecond),
            end: formatTimeParts(18, 0, 0, showSecond),
          }),
        },
        {
          label: '全天 (00:00-23:59)',
          getValue: () => ({
            start: formatTimeParts(0, 0, 0, showSecond),
            end: formatTimeParts(23, 59, 59, showSecond),
          }),
        },
      ]
    }, [shortcuts, showSecond])

    const handleConfirm = () => {
      const [first, second] =
        toSeconds(startDraft) <= toSeconds(endDraft)
          ? [startDraft, endDraft]
          : [endDraft, startDraft]
      emitRange({
        start: formatTimeParts(first.hour, first.minute, first.second, showSecond),
        end: formatTimeParts(second.hour, second.minute, second.second, showSecond),
      })
      setOpen(false)
    }

    return (
      <>
        <div
          ref={rootRef}
          id={pickerId}
          data-timerangepicker-trigger=""
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
          <Clock className="h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" />
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
              aria-label="清空时间范围"
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
              data-slot="time-picker-panel"
              data-abc-floating=""
              data-abc-theme={portalTheme}
              data-playground-theme={portalTheme}
              data-motion={resolvedMotion}
              aria-label="时间范围选择面板"
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
                        emitRange(normalizeRangeObj(sc.getValue()))
                        setOpen(false)
                      }}
                      className="rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer"
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row">
                <TimeColumnPanel
                  title="开始时间"
                  value={startDraft}
                  onChange={setStartDraft}
                  showSecond={showSecond}
                  hourStep={hourStep}
                  minuteStep={minuteStep}
                  secondStep={secondStep}
                />
                <TimeColumnPanel
                  title="结束时间"
                  value={endDraft}
                  onChange={setEndDraft}
                  showSecond={showSecond}
                  hourStep={hourStep}
                  minuteStep={minuteStep}
                  secondStep={secondStep}
                />
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 border-t border-[var(--abc-border)] pt-2.5">
                <span className="font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums">
                  {formatTimeParts(startDraft.hour, startDraft.minute, startDraft.second, showSecond)}{' '}
                  至{' '}
                  {formatTimeParts(endDraft.hour, endDraft.minute, endDraft.second, showSecond)}
                </span>
                <button
                  type="button"
                  onClick={handleConfirm}
                  className="rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary)] px-3 py-1 text-[11px] font-medium text-[var(--abc-primary-fg)] hover:opacity-90 cursor-pointer"
                >
                  确定
                </button>
              </div>
            </div>,
            portalContainer
          )}
      </>
    )
  }
)
TimeRangePicker.displayName = 'TimeRangePicker'
