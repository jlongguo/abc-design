import React, { useEffect, useId, useMemo, useRef, useState } from 'react'
import type { AbcMotionPreset } from '@abc-design/tokens'
import { createPortal } from 'react-dom'
import { Check, ChevronDown, Search, X } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { useControllableState } from '../../hooks/useControllableState'
import { useFloatingPosition } from '../../hooks/useFloatingPosition'
import { usePresence } from '../../hooks/usePresence'
import { cn } from '../../utils/cn'
import { matchKeywordWithPinyin } from '../../utils/pinyin'
import { baseFieldControlClass, type ControlSize } from './Input'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
  description?: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: string | number | Array<string | number>
  defaultValue?: string | number | Array<string | number>
  onChange?: (val: any) => void
  onBlur?: React.FocusEventHandler<HTMLElement>
  label?: React.ReactNode
  error?: string
  helperText?: React.ReactNode
  id?: string
  name?: string
  title?: string
  placeholder?: string
  multiple?: boolean
  searchable?: boolean
  allowClear?: boolean
  clearable?: boolean
  disabled?: boolean
  invalid?: boolean
  size?: ControlSize
  motion?: AbcMotionPreset
  className?: string
}

const SINGLE_SIZE_H: Record<ControlSize, string> = {
  xs: 'h-[var(--abc-control-h-xs)] text-xs',
  sm: 'h-[var(--abc-control-h-sm)] text-xs',
  md: 'h-[var(--abc-control-h-md)] text-sm',
  lg: 'h-[var(--abc-control-h-lg)] text-sm',
}

const MULTI_SIZE_H: Record<ControlSize, string> = {
  xs: 'min-h-[var(--abc-control-h-xs)] text-xs',
  sm: 'min-h-[var(--abc-control-h-sm)] text-xs',
  md: 'min-h-[var(--abc-control-h-md)] text-sm',
  lg: 'min-h-[var(--abc-control-h-lg)] text-sm',
}

/**
 * 企业级选择器组件
 * 支持单选/多选胶囊标签、拼音首字母检索、Portal 顶层挂载（兼容原生 <dialog> Top-Layer 模态层）、
 * 视口碰撞上下翻转及无障碍键盘循环导航。
 */
export const Select: React.FC<SelectProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  onBlur,
  label,
  error,
  helperText,
  id,
  name,
  title,
  placeholder = '请选择',
  multiple = false,
  searchable = false,
  allowClear,
  clearable,
  disabled = false,
  invalid = false,
  size,
  motion,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  const generatedId = useId()
  const selectId = id || generatedId
  const [selected, setSelected] = useControllableState<any>({
    value,
    defaultValue: defaultValue ?? (multiple ? [] : ''),
    onChange,
  })

  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const { isMounted, isVisible } = usePresence(open, resolvedMotion === 'none' ? 0 : 140)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const listboxRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const isClearable = Boolean(allowClear ?? clearable)
  const isInvalid = Boolean(invalid || error)

  const { style, actualSide, portalContainer } = useFloatingPosition({
    open: isMounted,
    triggerRef,
    floatingRef: listboxRef,
    placement: 'bottomLeft',
    offset: 4,
    matchWidth: true,
  })

  useEffect(() => {
    if (!open) {
      setKeyword('')
      return
    }
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (rootRef.current?.contains(target)) return
      if (listboxRef.current?.contains(target)) return
      setOpen(false)
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEsc, true)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEsc, true)
    }
  }, [open])

  const filteredOptions = useMemo(() => {
    const q = keyword.trim()
    if (!q) return options
    return options.filter(
      (opt) =>
        matchKeywordWithPinyin(opt.label, q) ||
        String(opt.value).toLowerCase().includes(q.toLowerCase())
    )
  }, [options, keyword])

  const selectedArray: Array<string | number> = useMemo(() => {
    if (multiple) {
      if (Array.isArray(selected)) return selected
      if (selected !== undefined && selected !== null && selected !== '') return [selected]
      return []
    }
    return selected !== undefined && selected !== null && selected !== '' ? [selected] : []
  }, [multiple, selected])

  const selectedLabels = useMemo(() => {
    return selectedArray.map((val) => {
      const hit = options.find((o) => String(o.value) === String(val))
      return { value: val, label: hit?.label ?? String(val) }
    })
  }, [options, selectedArray])

  const openMenuWithInitialActive = () => {
    const firstSelectedIdx = filteredOptions.findIndex(
      (opt) => !opt.disabled && selectedArray.some((v) => String(v) === String(opt.value))
    )
    if (firstSelectedIdx >= 0) {
      setActiveIndex(firstSelectedIdx)
    } else {
      const firstValid = filteredOptions.findIndex((o) => !o.disabled)
      setActiveIndex(firstValid >= 0 ? firstValid : 0)
    }
    setOpen(true)
  }

  const moveActive = (delta: number) => {
    if (filteredOptions.length === 0) return
    let idx = activeIndex
    for (let step = 0; step < filteredOptions.length; step++) {
      idx = (idx + delta + filteredOptions.length) % filteredOptions.length
      if (!filteredOptions[idx]?.disabled) {
        setActiveIndex(idx)
        return
      }
    }
  }

  const handleToggleOption = (opt: SelectOption) => {
    if (opt.disabled) return
    if (multiple) {
      const exists = selectedArray.some((v) => String(v) === String(opt.value))
      const next = exists
        ? selectedArray.filter((v) => String(v) !== String(opt.value))
        : [...selectedArray, opt.value]
      setSelected(next)
    } else {
      setSelected(opt.value)
      setOpen(false)
      triggerRef.current?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (disabled) return
    if (e.key === 'Escape') {
      e.preventDefault()
      e.stopPropagation()
      setOpen(false)
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (open) moveActive(1)
      else openMenuWithInitialActive()
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (open) moveActive(-1)
      else openMenuWithInitialActive()
      return
    }
    if (e.key === 'Enter' || (e.key === ' ' && e.target !== searchInputRef.current)) {
      e.preventDefault()
      if (!open) {
        openMenuWithInitialActive()
      } else {
        const candidate = filteredOptions[activeIndex]
        if (candidate && !candidate.disabled) {
          handleToggleOption(candidate)
        }
      }
    }
  }

  return (
    <div ref={rootRef} className="relative min-w-0 w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]"
        >
          {label}
        </label>
      )}

      {name && (
        <input
          type="hidden"
          name={name}
          value={multiple ? selectedArray.join(',') : String(selectedArray[0] ?? '')}
        />
      )}

      <div
        ref={triggerRef}
        id={selectId}
        title={title}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={`${selectId}-listbox`}
        aria-activedescendant={open ? `${selectId}-opt-${activeIndex}` : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : 0}
        onBlur={(e) => {
          const nextFocused = e.relatedTarget as Node | null
          if (nextFocused && listboxRef.current?.contains(nextFocused)) return
          onBlur?.(e)
        }}
        onClick={() => {
          if (disabled) return
          if (open) setOpen(false)
          else openMenuWithInitialActive()
        }}
        onKeyDown={handleKeyDown}
        data-motion={resolvedMotion}
        className={cn(
          'flex w-full items-center justify-between gap-1.5 px-2.5 py-1 cursor-pointer select-none abc-motion-control',
          baseFieldControlClass,
          multiple ? MULTI_SIZE_H[resolvedSize] : SINGLE_SIZE_H[resolvedSize],
          open && 'border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]',
          isInvalid && 'border-[var(--abc-danger)]',
          disabled && 'opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]',
          className
        )}
      >
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
          {selectedLabels.length === 0 ? (
            <span className="truncate text-[var(--abc-fg-placeholder)]">{placeholder}</span>
          ) : multiple ? (
            selectedLabels.map((item) => (
              <span
                key={String(item.value)}
                data-testid="select-tag"
                className="inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]"
              >
                <span className="max-w-28 truncate">{item.label}</span>
                {!disabled && (
                  <button
                    type="button"
                    aria-label={`移除 ${item.label}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelected(selectedArray.filter((v) => String(v) !== String(item.value)))
                    }}
                    className="inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer"
                  >
                    <X className="h-2.5 w-2.5" />
                  </button>
                )}
              </span>
            ))
          ) : (
            <span className="truncate text-[var(--abc-fg)]">{selectedLabels[0]?.label}</span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]">
          {isClearable && selectedLabels.length > 0 && !disabled && (
            <button
              type="button"
              data-testid="select-clear"
              aria-label="清空"
              onClick={(e) => {
                e.stopPropagation()
                setSelected(multiple ? [] : '')
              }}
              className="rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          <ChevronDown
            className={cn('h-3.5 w-3.5 transition-transform duration-150', open && 'rotate-180')}
          />
        </div>
      </div>

      {isMounted &&
        portalContainer &&
        createPortal(
          <div
            ref={listboxRef}
            id={`${selectId}-listbox`}
            role="listbox"
            data-abc-floating=""
            data-motion={resolvedMotion}
            data-placement={actualSide}
            aria-multiselectable={multiple || undefined}
            style={style}
            className={cn(
              'z-[1300] min-w-[160px] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]',
              isVisible ? 'abc-animate-popover-in' : 'abc-animate-popover-out'
            )}
          >
            {searchable && (
              <div className="flex items-center gap-1.5 border-b border-[var(--abc-border)] px-2.5 py-1.5">
                <Search className="h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" />
                <input
                  ref={searchInputRef}
                  type="text"
                  autoFocus
                  data-testid="select-search-input"
                  value={keyword}
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => {
                    const nextKw = e.target.value
                    setKeyword(nextKw)
                    const nextList = !nextKw.trim()
                      ? options
                      : options.filter(
                          (opt) =>
                            matchKeywordWithPinyin(opt.label, nextKw) ||
                            String(opt.value).toLowerCase().includes(nextKw.toLowerCase())
                        )
                    const firstValid = nextList.findIndex((o) => !o.disabled)
                    setActiveIndex(firstValid >= 0 ? firstValid : 0)
                  }}
                  placeholder="搜索或输入拼音首字母..."
                  className="w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                />
              </div>
            )}

            <div className="max-h-56 overflow-y-auto p-1">
              {filteredOptions.length === 0 ? (
                <div className="py-4 text-center text-xs text-[var(--abc-fg-muted)]">无匹配选项</div>
              ) : (
                filteredOptions.map((opt, idx) => {
                  const isChecked = selectedArray.some((v) => String(v) === String(opt.value))
                  const isActive = idx === activeIndex
                  return (
                    <button
                      key={String(opt.value)}
                      id={`${selectId}-opt-${idx}`}
                      type="button"
                      role="option"
                      aria-selected={isChecked}
                      disabled={opt.disabled}
                      onMouseEnter={() => {
                        if (!opt.disabled) setActiveIndex(idx)
                      }}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleToggleOption(opt)
                      }}
                      className={cn(
                        'flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer',
                        isChecked
                          ? 'bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]'
                          : isActive && !opt.disabled
                            ? 'bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]'
                            : 'text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]',
                        opt.disabled && 'opacity-45 cursor-not-allowed'
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="truncate">{opt.label}</div>
                        {opt.description && (
                          <div className="truncate text-[10px] text-[var(--abc-fg-muted)]">
                            {opt.description}
                          </div>
                        )}
                      </div>
                      {isChecked && <Check className="h-3.5 w-3.5 shrink-0" />}
                    </button>
                  )
                })
              )}
            </div>
          </div>,
          portalContainer
        )}

      {error && <p className="mt-1 text-xs text-[var(--abc-danger)]">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-xs text-[var(--abc-fg-muted)]">{helperText}</p>
      )}
    </div>
  )
}

export default Select
