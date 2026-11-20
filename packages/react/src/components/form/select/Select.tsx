import { Check,ChevronDown,Search,X } from 'lucide-react'
import React,{ useEffect,useId,useMemo,useRef,useState } from 'react'
import { createPortal } from 'react-dom'
import { useAbcMotion,useAbcSize } from '../../../hooks/useAbcDefaults'
import { useFloatingPosition } from '../../../hooks/useFloatingPosition'
import { usePresence } from '../../../hooks/usePresence'
import { cn } from '../../../utils/cn'
import { matchKeywordWithPinyin } from '../../../utils/pinyin'
import { baseFieldControlClass } from '../Input'

import {
MULTI_SIZE_H,
SINGLE_SIZE_H,
flattenNodeText,
parseSelectChildren,
renderOptionContent,
type ParsedSelectOption,
type SelectProps
} from './types'

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options: optionsProp,
      children,
      value,
      defaultValue,
      onChange,
      onValueChange,
      onBlur,
      onKeyDown,
      label,
      error,
      helperText,
      id,
      name,
      title,
      placeholder,
      multiple = false,
      searchable = false,
      allowClear,
      clearable,
      disabled = false,
      invalid = false,
      size,
      motion,
      className,
      wrapperClassName,
      containerClassName,
      dropdownClassName,
      popoverClassName,
      matchWidth = true,
      placement = 'bottomLeft',
      hideChevron = false,
      container: containerProp,
      'aria-label': ariaLabel,
      ...nativeSelectRest
    },
    forwardedRef
  ) => {
    const isLegacyChildrenMode = optionsProp === undefined && children !== undefined

    const resolvedSize = useAbcSize(size === 'ghost' ? 'sm' : size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const generatedId = useId()
    const selectId = id || generatedId

    const isTestEnv =
      (typeof process !== 'undefined' && process.env?.NODE_ENV === 'test') ||
      (typeof import.meta !== 'undefined' &&
        Boolean((import.meta as unknown as { env?: { MODE?: string } }).env?.MODE === 'test'))

    // 归一化选项列表（保留 rawValue 以维持数字/字符串原始值类型契约）
    const options = useMemo<ParsedSelectOption[]>(() => {
      if (optionsProp !== undefined) {
        return optionsProp.map((opt) => ({
          value: String(opt.value),
          rawValue: opt.value,
          label: opt.label,
          textLabel: typeof opt.label === 'string' ? opt.label : flattenNodeText(opt.label),
          disabled: Boolean(opt.disabled),
          description: opt.description,
          group: opt.group,
        }))
      }
      return parseSelectChildren(children)
    }, [optionsProp, children])

    // 识别显式提供的空值选项（如 <option value="">全部</option> 或 <option value="" disabled>请选择…</option>），
    // 避免受控 value="" 时触发器空白。
    const emptyValueOption = useMemo(() => options.find((opt) => opt.value === ''), [options])
    const resolvedPlaceholder =
      placeholder !== undefined
        ? placeholder
        : isLegacyChildrenMode
          ? emptyValueOption?.disabled
            ? emptyValueOption.textLabel
            : ''
          : '请选择'

    const isControlled = value !== undefined
    const [uncontrolledValue, setUncontrolledValue] = useState<any>(() => {
      if (defaultValue !== undefined) return defaultValue
      if (isLegacyChildrenMode && !multiple && !placeholder) {
        const firstEnabled = options.find((opt) => !opt.disabled) ?? options[0]
        return firstEnabled ? firstEnabled.value : ''
      }
      return multiple ? [] : ''
    })

    // 原生 <option> 子节点在非受控且无 placeholder 时跟随异步加载的选项自动兜底首项
    useEffect(() => {
      if (isControlled || !isLegacyChildrenMode || multiple || placeholder) return
      if (options.length === 0) return
      const exists = options.some((opt) => opt.value === String(uncontrolledValue ?? ''))
      if (!exists) {
        if (
          defaultValue !== undefined &&
          options.some((opt) => opt.value === String(defaultValue))
        ) {
          setUncontrolledValue(defaultValue)
        } else {
          const fallback = options.find((opt) => !opt.disabled) ?? options[0]
          if (fallback) setUncontrolledValue(fallback.value)
        }
      }
    }, [isControlled, isLegacyChildrenMode, multiple, placeholder, options, uncontrolledValue, defaultValue])

    const selected = isControlled ? value : uncontrolledValue

    const [open, setOpen] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)
    const { isMounted, isVisible } = usePresence(
      open,
      resolvedMotion === 'none' || isTestEnv ? 0 : 140
    )

    const rootRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const listboxRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const selectRef = useRef<HTMLSelectElement | null>(null)
    const optionRefs = useRef<Array<HTMLButtonElement | null>>([])

    const setSelectRefs = React.useCallback(
      (node: HTMLSelectElement | null) => {
        selectRef.current = node
        if (typeof forwardedRef === 'function') {
          forwardedRef(node)
        } else if (forwardedRef) {
          ;(forwardedRef as React.MutableRefObject<HTMLSelectElement | null>).current = node
        }
      },
      [forwardedRef]
    )

    const isClearable = Boolean(allowClear ?? clearable)
    const isInvalid = Boolean(invalid || error)

    const { style, actualSide, portalContainer, portalTheme } = useFloatingPosition({
      open: isMounted,
      triggerRef,
      fallbackTriggerRef: rootRef,
      floatingRef: listboxRef,
      placement,
      offset: 4,
      matchWidth,
      rightAnchorOnOverflow: true,
    })

    const effectivePortalContainer = containerProp ?? portalContainer

    useEffect(() => {
      if (!open) {
        setKeyword('')
        return
      }
      const handleOutside = (e: MouseEvent | TouchEvent) => {
        const target = e.target as Node | null
        if (!target) return
        if (rootRef.current?.contains(target)) return
        if (listboxRef.current?.contains(target)) return
        setOpen(false)
      }
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          e.stopPropagation()
          setOpen(false)
          if (isLegacyChildrenMode) {
            selectRef.current?.focus()
          } else {
            triggerRef.current?.focus()
          }
        }
      }
      document.addEventListener('mousedown', handleOutside)
      document.addEventListener('touchstart', handleOutside, { passive: true })
      document.addEventListener('keydown', handleEsc, true)
      return () => {
        document.removeEventListener('mousedown', handleOutside)
        document.removeEventListener('touchstart', handleOutside)
        document.removeEventListener('keydown', handleEsc, true)
      }
    }, [open, isLegacyChildrenMode])

    // 键盘移动时自动确保高亮选项在列表可视区内
    useEffect(() => {
      if (!open) return
      const targetOption = optionRefs.current[activeIndex]
      const scrollHost = listboxRef.current?.querySelector<HTMLDivElement>('[data-select-scroll-host]')
      if (!targetOption || !scrollHost) return
      const optionTop = targetOption.offsetTop
      const optionBottom = optionTop + targetOption.offsetHeight
      if (optionTop < scrollHost.scrollTop) {
        scrollHost.scrollTop = optionTop
      } else if (optionBottom > scrollHost.scrollTop + scrollHost.clientHeight) {
        scrollHost.scrollTop = optionBottom - scrollHost.clientHeight
      }
    }, [open, activeIndex])

    const filteredOptions = useMemo(() => {
      const q = keyword.trim()
      if (!q) return options
      return options.filter(
        (opt) =>
          matchKeywordWithPinyin(opt.textLabel, q) ||
          opt.value.toLowerCase().includes(q.toLowerCase())
      )
    }, [options, keyword])

    const selectedArray: Array<string | number> = useMemo(() => {
      if (multiple) {
        if (Array.isArray(selected)) return selected
        if (selected !== undefined && selected !== null && selected !== '') return [selected]
        return []
      }
      if (selected === '' && emptyValueOption && !emptyValueOption.disabled) {
        return ['']
      }
      return selected !== undefined && selected !== null && selected !== '' ? [selected] : []
    }, [multiple, selected, emptyValueOption])

    const selectedItems = useMemo(() => {
      return selectedArray.map((val) => {
        const hit = options.find((o) => o.value === String(val))
        return {
          value: val,
          option: hit,
          label: hit ? hit.label : String(val),
          textLabel: hit ? hit.textLabel : String(val),
        }
      })
    }, [options, selectedArray])

    const commitValueChange = (nextVal: string | number | Array<string | number>) => {
      if (!isControlled) {
        setUncontrolledValue(nextVal)
      }

      if (isLegacyChildrenMode) {
        const strVal = Array.isArray(nextVal) ? String(nextVal[0] ?? '') : String(nextVal ?? '')
        onValueChange?.(strVal)
        const selectEl = selectRef.current
        if (selectEl) {
          selectEl.value = strVal
          selectEl.dispatchEvent(new Event('change', { bubbles: true }))
        }
        return
      }

      if (!Array.isArray(nextVal)) {
        onValueChange?.(String(nextVal ?? ''))
      }
      onChange?.(nextVal)
    }

    const openMenuWithInitialActive = () => {
      const firstSelectedIdx = filteredOptions.findIndex(
        (opt) => !opt.disabled && selectedArray.some((v) => String(v) === opt.value)
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

    const handleToggleOption = (opt: ParsedSelectOption) => {
      if (opt.disabled) return
      if (multiple) {
        const exists = selectedArray.some((v) => String(v) === opt.value)
        const next = exists
          ? selectedArray.filter((v) => String(v) !== opt.value)
          : [...selectedArray, opt.rawValue]
        commitValueChange(next)
      } else {
        commitValueChange(opt.rawValue)
        setOpen(false)
        if (isLegacyChildrenMode) {
          selectRef.current?.focus()
        } else {
          triggerRef.current?.focus()
        }
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      onKeyDown?.(e)
      if (disabled) return
      if (e.key === 'Escape') {
        if (open) {
          e.preventDefault()
          e.stopPropagation()
          setOpen(false)
        }
        return
      }
      if (e.key === 'Tab') {
        if (open) setOpen(false)
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

    const effectiveWrapperClass = wrapperClassName || containerClassName
    const effectiveDropdownClass = dropdownClassName || popoverClassName

    // 检查是否需要渲染分组标题（若存在 group 属性）
    const hasGroups = useMemo(() => filteredOptions.some((o) => Boolean(o.group)), [filteredOptions])

    // 子节点迁移模式下由原生 <select> 承接 id/label/a11y 焦点，避免重复 id 与重复 combobox
    const triggerA11yProps = isLegacyChildrenMode
      ? ({ 'aria-hidden': true } as const)
      : ({
          id: selectId,
          title,
          role: 'combobox',
          'aria-label': ariaLabel,
          'aria-expanded': open,
          'aria-haspopup': 'listbox',
          'aria-controls': `${selectId}-listbox`,
          'aria-activedescendant': open ? `${selectId}-opt-${activeIndex}` : undefined,
          'aria-disabled': disabled || undefined,
          tabIndex: disabled ? -1 : 0,
          onBlur: (e: React.FocusEvent<HTMLDivElement>) => {
            const nextFocused = e.relatedTarget as Node | null
            if (nextFocused && listboxRef.current?.contains(nextFocused)) return
            onBlur?.(e)
          },
          onKeyDown: handleKeyDown,
        } as const)

    const hasExplicitInlineWidth =
      !effectiveWrapperClass &&
      Boolean(
        className &&
          /\bw-(?!full\b)(?:auto|fit|min|max|\d+(?:\.\d+)?|\[[^\]]+\])\b/.test(className)
      )

    return (
      <div
        ref={rootRef}
        data-slot="select-wrapper"
        data-state={open ? 'open' : 'closed'}
        className={cn(
          'relative min-w-0',
          size === 'ghost'
            ? cn('inline-flex w-auto', effectiveWrapperClass)
            : effectiveWrapperClass
              ? effectiveWrapperClass
              : hasExplicitInlineWidth
                ? 'inline-flex w-auto shrink-0'
                : 'w-full'
        )}
      >
        {label && (
          <label
            htmlFor={selectId}
            className="mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]"
          >
            {label}
          </label>
        )}

        {/* 原生 <option> 子节点迁移模式下挂载原生 <select> 以承接 label 关联、ChangeEvent 与 FormData */}
        {isLegacyChildrenMode ? (
          <select
            {...nativeSelectRest}
            ref={setSelectRefs}
            id={selectId}
            name={name}
            title={title}
            aria-label={ariaLabel}
            aria-hidden={open ? 'true' : undefined}
            aria-invalid={nativeSelectRest['aria-invalid'] ?? (isInvalid || undefined)}
            disabled={disabled}
            multiple={multiple || undefined}
            value={
              isControlled
                ? Array.isArray(value)
                  ? value.map(String)
                  : String(value ?? '')
                : String(uncontrolledValue ?? '')
            }
            onBlur={(e) => {
              const nextFocused = e.relatedTarget as Node | null
              if (nextFocused && listboxRef.current?.contains(nextFocused)) return
              onBlur?.(e)
            }}
            onClick={(e) => {
              nativeSelectRest.onClick?.(e)
              if (e.defaultPrevented) return
              e.stopPropagation()
              if (disabled) return
              if (open) setOpen(false)
              else openMenuWithInitialActive()
            }}
            onKeyDown={handleKeyDown}
            onChange={(event) => {
              if (!isControlled) {
                setUncontrolledValue(event.target.value)
              }
              onValueChange?.(event.target.value)
              onChange?.(event)
            }}
            className="peer pointer-events-none absolute inset-0 h-full w-full appearance-none opacity-0"
          >
            {resolvedPlaceholder && !emptyValueOption && (
              <option value="" disabled>
                {resolvedPlaceholder}
              </option>
            )}
            {options.map((opt, idx) => (
              <option key={`${opt.value}-${idx}`} value={opt.value} disabled={opt.disabled}>
                {opt.textLabel}
              </option>
            ))}
          </select>
        ) : name ? (
          <input
            type="hidden"
            name={name}
            value={multiple ? selectedArray.join(',') : String(selectedArray[0] ?? '')}
          />
        ) : null}

        <div
          ref={triggerRef}
          data-slot="select-trigger"
          data-state={open ? 'open' : 'closed'}
          {...triggerA11yProps}
          onClick={(e) => {
            if (isLegacyChildrenMode) {
              e.preventDefault()
              selectRef.current?.focus()
            }
            e.stopPropagation()
            if (disabled) return
            if (open) setOpen(false)
            else openMenuWithInitialActive()
          }}
          data-motion={resolvedMotion}
          className={cn(
            'flex items-center justify-between gap-1.5 cursor-pointer select-none',
            size === 'ghost'
              ? 'h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none'
              : cn(
                  !hideChevron ? 'w-full pl-2.5 py-1' : 'w-full px-2.5 py-1',
                  baseFieldControlClass,
                  multiple ? MULTI_SIZE_H[resolvedSize] : SINGLE_SIZE_H[resolvedSize],
                  open && 'border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]',
                  isInvalid && 'border-[var(--abc-danger)]',
                  disabled && 'opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]'
                ),
            !hideChevron && size !== 'ghost' && className
              ? className.replace(/\bpx-(\S+)/g, 'pl-$1')
              : className,
            !hideChevron &&
              size !== 'ghost' &&
              (resolvedSize === 'xs' ? 'pr-2' : resolvedSize === 'lg' ? 'pr-3' : 'pr-2.5')
          )}
        >
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
            {selectedItems.length === 0 ? (
              isLegacyChildrenMode ? (
                <output aria-hidden="true" className="truncate text-[var(--abc-fg-placeholder)]">
                  {resolvedPlaceholder}
                </output>
              ) : (
                <span className="truncate text-[var(--abc-fg-placeholder)]">
                  {resolvedPlaceholder}
                </span>
              )
            ) : multiple ? (
              selectedItems.map((item) => (
                <span
                  key={String(item.value)}
                  data-testid="select-tag"
                  className="inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]"
                >
                  <span className="max-w-28 truncate">{item.label}</span>
                  {!disabled && (
                    <button
                      type="button"
                      aria-label={`移除 ${item.textLabel}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        commitValueChange(
                          selectedArray.filter((v) => String(v) !== String(item.value))
                        )
                      }}
                      className="inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer"
                    >
                      <X className="h-2.5 w-2.5" />
                    </button>
                  )}
                </span>
              ))
            ) : isLegacyChildrenMode ? (
              <output aria-hidden="true" className="truncate text-[var(--abc-fg)]">
                {selectedItems[0]?.option
                  ? renderOptionContent(selectedItems[0].option, false)
                  : selectedItems[0]?.label}
              </output>
            ) : (
              <span className="truncate text-[var(--abc-fg)]">
                {selectedItems[0]?.option
                  ? renderOptionContent(selectedItems[0].option, false)
                  : selectedItems[0]?.label}
              </span>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]">
            {isClearable &&
              selectedItems.length > 0 &&
              !(selectedItems.length === 1 && String(selectedItems[0]?.value) === '') &&
              !disabled && (
              <button
                type="button"
                data-testid="select-clear"
                aria-label="清空"
                onClick={(e) => {
                  e.stopPropagation()
                  commitValueChange(multiple ? [] : '')
                }}
                className="rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
            {!hideChevron && (
              <ChevronDown
                data-open={open ? 'true' : 'false'}
                className={cn(
                  'abc-chevron h-3.5 w-3.5 shrink-0',
                  open && 'text-[var(--abc-primary)]'
                )}
              />
            )}
          </div>
        </div>

        {isMounted &&
          effectivePortalContainer &&
          createPortal(
            <div
              ref={listboxRef}
              id={`${selectId}-listbox`}
              role="listbox"
              data-slot="select-popover"
              data-abc-floating=""
              data-abc-theme={portalTheme}
              data-playground-theme={portalTheme}
              data-motion={resolvedMotion}
              data-placement={actualSide}
              aria-multiselectable={multiple || undefined}
              onMouseDown={(e) => e.stopPropagation()}
              style={{ ...style, pointerEvents: 'auto' }}
              className={cn(
                portalTheme === 'dark' && 'dark',
                portalTheme === 'light' && 'light',
                'pointer-events-auto z-[1500] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]',
                matchWidth ? 'min-w-full' : 'min-w-[140px]',
                isVisible ? 'abc-animate-popover-in' : 'abc-animate-popover-out',
                effectiveDropdownClass
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
                              matchKeywordWithPinyin(opt.textLabel, nextKw) ||
                              opt.value.toLowerCase().includes(nextKw.toLowerCase())
                          )
                      const firstValid = nextList.findIndex((o) => !o.disabled)
                      setActiveIndex(firstValid >= 0 ? firstValid : 0)
                    }}
                    placeholder="搜索或输入拼音首字母..."
                    className="w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                  />
                </div>
              )}

              <div data-select-scroll-host="" className="max-h-56 overflow-y-auto p-1">
                {filteredOptions.length === 0 ? (
                  <div className="py-4 text-center text-xs text-[var(--abc-fg-muted)]">
                    无匹配选项
                  </div>
                ) : (
                  filteredOptions.map((opt, idx) => {
                    const isChecked = selectedArray.some((v) => String(v) === opt.value)
                    const isActive = idx === activeIndex
                    const prevGroup = idx > 0 ? filteredOptions[idx - 1]?.group : undefined
                    const showGroupHeader = hasGroups && opt.group && opt.group !== prevGroup

                    return (
                      <React.Fragment key={`${opt.value}-${idx}`}>
                        {showGroupHeader && (
                          <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]">
                            {opt.group}
                          </div>
                        )}
                        <button
                          ref={(el) => {
                            optionRefs.current[idx] = el
                          }}
                          id={`${selectId}-opt-${idx}`}
                          type="button"
                          role="option"
                          data-slot="select-option"
                          aria-selected={isChecked}
                          disabled={opt.disabled}
                          onMouseEnter={() => {
                            if (!opt.disabled) setActiveIndex(idx)
                          }}
                          onMouseDown={(e) => e.stopPropagation()}
                          onClick={(e) => {
                            e.preventDefault()
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
                            <div className="truncate">{renderOptionContent(opt, true)}</div>
                            {opt.description && (
                              <div className="truncate text-[10px] text-[var(--abc-fg-muted)]">
                                {opt.description}
                              </div>
                            )}
                          </div>
                          {isChecked && <Check className="h-3.5 w-3.5 shrink-0" />}
                        </button>
                      </React.Fragment>
                    )
                  })
                )}
              </div>
            </div>,
            effectivePortalContainer
          )}

        {error && <p className="mt-1 text-xs text-[var(--abc-danger)]">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-xs text-[var(--abc-fg-muted)]">{helperText}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'


export default Select
