import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { Braces, X } from 'lucide-react'
import {
  Tooltip,
  baseFieldControlClass,
  cn,
  useAbcMotion,
  useAbcSize,
  useControllableState,
  useFloatingPosition,
  usePresence,
  type ControlSize,
} from '@abc-design/react'
import {
  extractTemplateVariables,
  insertTemplateVariableAt,
  removeTemplateVariableToken,
  type TemplateVariableToken,
} from './flowTokens'
import { TemplateVariablePickerPopover } from './TemplateVariablePickerPopover'

export interface TemplateVariableOption {
  /** 变量键名（插入时默认包裹为 {{key}}） */
  key: string
  /** 可读展示名称 */
  label?: string
  /** 变量分组名称（例如 Trigger / Step Output / Context） */
  group?: string
  /** 变量数据类型标签（例如 string / json / secret） */
  type?: string
  /** 变量用途说明 */
  description?: string
  /** 可选示例值或实时预览标签 */
  sampleValue?: string
  /** 是否禁用该变量选项 */
  disabled?: boolean
}

export interface TemplateVariableInputProps {
  /** 受控模板文本值（可包含任意数量 {{variable}}） */
  value?: string
  /** 非受控初始值 */
  defaultValue?: string
  /** 值变更回调 */
  onChange?: (value: string) => void
  /** 是否启用多行文本域模式（默认 false 为单行输入） */
  multiline?: boolean
  /** 多行模式默认行数（默认 3） */
  rows?: number
  /** 右下角 {} 变量选择器提供的可选变量字典 */
  variables?: ReadonlyArray<TemplateVariableOption>
  /**
   * 深色 {{variable}} 胶囊芯片展示模式：
   * - 'auto'（默认）：检测到 {{variable}} 时自动展示深色胶囊芯片区
   * - 'always'：始终保留芯片区（便于稳定布局或提示变量绑定）
   * - 'none'：仅使用文本输入与 {} 选择器，不渲染芯片条
   */
  chipDisplay?: 'auto' | 'always' | 'none'
  /** 胶囊芯片是否提供 × 移除按钮（默认 true） */
  removableChips?: boolean
  /** 匹配到变量字典时是否在芯片或提示中展示预览标签（默认 true） */
  showPreviewLabel?: boolean
  /** 选择变量时是否替换整个字段值（用于单变量输出绑定框，默认 false 在光标处插入） */
  replaceOnSelect?: boolean
  /** 自定义变量插入格式（默认 `(v) => \`{{${v.key}}}\``） */
  insertFormat?: (variable: TemplateVariableOption) => string
  /** 是否显示右下角 {} 变量选择器触发按钮（默认 true） */
  showPickerButton?: boolean
  /** 变量浮层内是否启用关键字搜索（默认 true） */
  searchable?: boolean
  /** 受控浮层展开状态 */
  pickerOpen?: boolean
  /** 非受控浮层默认展开状态 */
  defaultPickerOpen?: boolean
  /** 浮层开关状态变更回调 */
  onPickerOpenChange?: (open: boolean) => void
  /** 选择器浮层标题 */
  pickerTitle?: React.ReactNode
  /** 选择器浮层搜索框占位文案 */
  pickerPlaceholder?: string
  /** {} 按钮无障碍标签与提示文案 */
  pickerTriggerLabel?: string
  /** 无可用变量或无搜索匹配时的空态文案 */
  emptyVariablesText?: React.ReactNode
  /** 选中并插入变量后的回调 */
  onSelectVariable?: (variable: TemplateVariableOption, nextValue: string) => void
  /** 点击芯片移除某个变量后的回调 */
  onRemoveVariable?: (token: TemplateVariableToken, nextValue: string) => void

  /** 标准表单字段属性 */
  id?: string
  name?: string
  label?: React.ReactNode
  error?: React.ReactNode
  helperText?: React.ReactNode
  invalid?: boolean
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  size?: ControlSize
  mono?: boolean
  allowClear?: boolean
  clearLabel?: string
  motion?: AbcMotionPreset
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  className?: string
  wrapperClassName?: string
  inputClassName?: string
  popoverClassName?: string
}

const SINGLE_LINE_TEXT_SIZE: Record<AbcSize, string> = {
  xs: 'min-h-[var(--abc-control-h-xs)] text-xs',
  sm: 'min-h-[var(--abc-control-h-sm)] text-xs',
  md: 'min-h-[var(--abc-control-h-md)] text-sm',
  lg: 'min-h-[var(--abc-control-h-lg)] text-sm',
}

const MULTILINE_TEXT_SIZE: Record<AbcSize, string> = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
}

/**
 * 通用模板变量输入器 (TemplateVariableInput)
 * - 支持单行输入与多行文本域双形态，零业务耦合；
 * - 自动识别 `{{variable}}` 并展示深色胶囊芯片（带移除按钮与变量预览标签）；
 * - 右下角提供 `{}` 快捷变量选择器浮层（Portal 定位防裁切，支持分组与搜索过滤，按光标位置精确插值）。
 */
export const TemplateVariableInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TemplateVariableInputProps
>(
  (
    {
      value: controlledValue,
      defaultValue = '',
      onChange,
      multiline = false,
      rows = 3,
      variables = [],
      chipDisplay = 'auto',
      removableChips = true,
      showPreviewLabel = true,
      replaceOnSelect = false,
      insertFormat,
      showPickerButton = true,
      searchable = true,
      pickerOpen: controlledPickerOpen,
      defaultPickerOpen = false,
      onPickerOpenChange,
      pickerTitle = '插入模板变量',
      pickerPlaceholder = '搜索变量名、分组或说明...',
      pickerTriggerLabel = '插入变量',
      emptyVariablesText = '暂无可用变量',
      onSelectVariable,
      onRemoveVariable,
      id,
      name,
      label,
      error,
      helperText,
      invalid = false,
      required = false,
      disabled = false,
      readOnly = false,
      placeholder = '输入文本或点击右下角 {} 插入 {{variable}}...',
      size,
      mono = false,
      allowClear = false,
      clearLabel = '清空内容',
      motion,
      onFocus,
      onBlur,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      className,
      wrapperClassName,
      inputClassName,
      popoverClassName,
    },
    ref
  ) => {
    const resolvedSize = useAbcSize(size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const generatedId = useId()
    const inputId = id ?? generatedId
    const hintId = `${inputId}-hint`
    const popoverId = `${inputId}-vars`

    const [currentValue, setCurrentValue] = useControllableState<string>({
      value: controlledValue,
      defaultValue,
      onChange,
    })

    const [open, setOpen] = useControllableState<boolean>({
      value: controlledPickerOpen,
      defaultValue: defaultPickerOpen,
      onChange: onPickerOpenChange,
    })

    const [query, setQuery] = useState('')
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const floatingRef = useRef<HTMLDivElement | null>(null)
    const selectionRef = useRef<{ start: number | null; end: number | null }>({
      start: null,
      end: null,
    })

    const setMergedInputRef = useCallback(
      (node: HTMLInputElement | HTMLTextAreaElement | null) => {
        inputRef.current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>).current =
            node
        }
      },
      [ref]
    )

    const isInteractive = !disabled && !readOnly
    const isInvalid = Boolean(invalid || error)

    const variableMap = useMemo(() => {
      const map = new Map<string, TemplateVariableOption>()
      for (const item of variables) {
        if (!map.has(item.key)) map.set(item.key, item)
      }
      return map
    }, [variables])

    const tokens = useMemo(() => extractTemplateVariables(currentValue), [currentValue])

    const shouldRenderChips =
      chipDisplay === 'always' || (chipDisplay === 'auto' && tokens.length > 0)

    const { isMounted, isVisible } = usePresence(
      open && isInteractive,
      resolvedMotion === 'none' ? 0 : 130
    )

    const { style: floatingStyle, actualSide, portalContainer, portalTheme } = useFloatingPosition({
      open: isMounted,
      triggerRef,
      floatingRef,
      placement: 'bottomRight',
      offset: 6,
      rightAnchorOnOverflow: true,
    })

    // 浮层关闭时自动清空搜索词，确保下次打开展示全量分组
    useEffect(() => {
      if (!open) setQuery('')
    }, [open])

    // 点击外部或按 Escape 关闭变量选择器浮层
    useEffect(() => {
      if (!open) return
      const handleOutside = (event: MouseEvent) => {
        const target = event.target as Node | null
        if (!target) return
        if (triggerRef.current?.contains(target)) return
        if (floatingRef.current?.contains(target)) return
        setOpen(false)
      }
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          event.preventDefault()
          event.stopPropagation()
          setOpen(false)
          triggerRef.current?.focus()
        }
      }
      document.addEventListener('mousedown', handleOutside)
      document.addEventListener('keydown', handleKeyDown, true)
      return () => {
        document.removeEventListener('mousedown', handleOutside)
        document.removeEventListener('keydown', handleKeyDown, true)
      }
    }, [open, setOpen])

    const captureSelection = useCallback(() => {
      const el = inputRef.current
      if (!el) return
      selectionRef.current = {
        start: el.selectionStart,
        end: el.selectionEnd,
      }
    }, [])

    const handleSelectOption = useCallback(
      (option: TemplateVariableOption) => {
        if (!isInteractive || option.disabled) return
        const expr = insertFormat ? insertFormat(option) : `{{${option.key}}}`
        const { nextValue, nextCaret } = insertTemplateVariableAt(
          currentValue,
          expr,
          selectionRef.current.start,
          selectionRef.current.end,
          replaceOnSelect
        )
        setCurrentValue(nextValue)
        onSelectVariable?.(option, nextValue)
        setOpen(false)

        if (typeof window !== 'undefined') {
          window.requestAnimationFrame(() => {
            const el = inputRef.current
            if (!el) return
            el.focus()
            try {
              el.setSelectionRange(nextCaret, nextCaret)
            } catch {
              // 忽略不支持 selectionRange 的输入环境
            }
            selectionRef.current = { start: nextCaret, end: nextCaret }
          })
        }
      },
      [
        isInteractive,
        insertFormat,
        currentValue,
        replaceOnSelect,
        setCurrentValue,
        onSelectVariable,
        setOpen,
      ]
    )

    const handleRemoveToken = useCallback(
      (token: TemplateVariableToken) => {
        if (!isInteractive) return
        const nextValue = removeTemplateVariableToken(currentValue, token)
        setCurrentValue(nextValue)
        onRemoveVariable?.(token, nextValue)
      },
      [isInteractive, currentValue, setCurrentValue, onRemoveVariable]
    )

    const filteredGroupedVariables = useMemo(() => {
      const keyword = query.trim().toLowerCase()
      const filtered = keyword
        ? variables.filter((item) =>
            [item.key, item.label, item.group, item.description, item.type]
              .filter(Boolean)
              .some((part) => String(part).toLowerCase().includes(keyword))
          )
        : variables

      const groups = new Map<string, TemplateVariableOption[]>()
      for (const item of filtered) {
        const groupName = item.group?.trim() || '可用变量'
        const list = groups.get(groupName) ?? []
        list.push(item)
        groups.set(groupName, list)
      }
      return Array.from(groups.entries())
    }, [variables, query])

    const describedByIds =
      [ariaDescribedBy, error || helperText ? hintId : undefined].filter(Boolean).join(' ') ||
      undefined

    const showClearBtn = allowClear && isInteractive && currentValue.length > 0

    return (
      <div className={cn('w-full space-y-1', wrapperClassName)}>
        {label !== undefined && (
          <label
            htmlFor={inputId}
            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)]"
          >
            <span>{label}</span>
            {required && <span className="text-[var(--abc-danger)]">*</span>}
          </label>
        )}

        <div
          data-slot="template-variable-input"
          data-motion={resolvedMotion}
          data-multiline={multiline ? 'true' : 'false'}
          data-invalid={isInvalid ? 'true' : 'false'}
          className={cn(
            baseFieldControlClass,
            'nodrag nopan relative flex flex-col px-2.5 py-1.5',
            multiline ? MULTILINE_TEXT_SIZE[resolvedSize] : SINGLE_LINE_TEXT_SIZE[resolvedSize],
            isInvalid &&
              'border-[var(--abc-danger)] focus-within:border-[var(--abc-danger)] focus-within:ring-[var(--abc-danger)]/20',
            disabled && 'bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] cursor-not-allowed',
            className
          )}
        >
          {/* 深色 {{variable}} 胶囊芯片区 */}
          {shouldRenderChips && (
            <div
              data-template-chips=""
              className={cn(
                'flex flex-wrap items-center gap-1.5',
                tokens.length > 0 && 'mb-1.5',
                showPickerButton && !multiline && 'pr-8'
              )}
            >
              {tokens.map((token) => {
                const matched = variableMap.get(token.key)
                const previewHint = matched?.sampleValue ?? matched?.label
                const chipNode = (
                  <span
                    key={`${token.key}_${token.occurrenceIndex}`}
                    data-template-chip={token.key}
                    className="inline-flex max-w-full items-center gap-1 rounded-full bg-[var(--abc-flow-chip-bg)] px-2 py-0.5 text-[11px] font-medium leading-tight text-[var(--abc-flow-chip-fg)] shadow-2xs"
                  >
                    <span className="truncate font-mono">{token.key}</span>
                    {showPreviewLabel && previewHint && previewHint !== token.key && (
                      <span className="max-w-[110px] truncate rounded-full bg-[var(--abc-flow-chip-sub-bg)] px-1.5 py-0 text-[10px] font-normal text-[var(--abc-flow-chip-sub-fg)]">
                        {previewHint}
                      </span>
                    )}
                    {removableChips && isInteractive && (
                      <button
                        type="button"
                        aria-label={`移除变量 ${token.key}`}
                        onClick={(event) => {
                          event.stopPropagation()
                          handleRemoveToken(token)
                        }}
                        className="inline-flex h-3.5 w-3.5 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--abc-flow-chip-sub-bg)] text-[var(--abc-flow-chip-fg)] transition-colors hover:bg-[var(--abc-flow-chip-close-hover)] focus:outline-none focus-visible:ring-1 focus-visible:ring-current"
                      >
                        <X className="h-2.5 w-2.5" />
                      </button>
                    )}
                  </span>
                )

                return matched?.description ? (
                  <Tooltip
                    key={`${token.key}_${token.occurrenceIndex}`}
                    content={matched.description}
                    placement="top"
                    delay={100}
                  >
                    {chipNode}
                  </Tooltip>
                ) : (
                  chipNode
                )
              })}
            </div>
          )}

          {/* 主文本录入区（单行 input 或多行 textarea） */}
          <div className="relative flex w-full items-center">
            {multiline ? (
              <textarea
                ref={setMergedInputRef}
                id={inputId}
                name={name}
                rows={rows}
                value={currentValue}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                required={required}
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
                aria-describedby={describedByIds}
                aria-invalid={isInvalid || undefined}
                onChange={(e) => {
                  setCurrentValue(e.target.value)
                  captureSelection()
                }}
                onSelect={captureSelection}
                onKeyUp={captureSelection}
                onClick={captureSelection}
                onFocus={onFocus}
                onBlur={(e) => {
                  captureSelection()
                  onBlur?.(e)
                }}
                className={cn(
                  'w-full resize-y bg-transparent pb-5 pr-8 text-inherit leading-relaxed text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed',
                  mono && 'font-mono',
                  inputClassName
                )}
              />
            ) : (
              <input
                ref={setMergedInputRef}
                id={inputId}
                name={name}
                type="text"
                value={currentValue}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                required={required}
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
                aria-describedby={describedByIds}
                aria-invalid={isInvalid || undefined}
                onChange={(e) => {
                  setCurrentValue(e.target.value)
                  captureSelection()
                }}
                onSelect={captureSelection}
                onKeyUp={captureSelection}
                onClick={captureSelection}
                onFocus={onFocus}
                onBlur={(e) => {
                  captureSelection()
                  onBlur?.(e)
                }}
                className={cn(
                  'w-full bg-transparent text-inherit leading-normal text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed',
                  showPickerButton && (showClearBtn ? 'pr-14' : 'pr-8'),
                  !showPickerButton && showClearBtn && 'pr-7',
                  mono && 'font-mono',
                  inputClassName
                )}
              />
            )}
          </div>

          {/* 右下角清空与 {} 快捷变量选择器触发器 */}
          {(showClearBtn || showPickerButton) && (
            <div className="absolute bottom-1.5 right-1.5 flex items-center gap-1">
              {showClearBtn && (
                <button
                  type="button"
                  aria-label={clearLabel}
                  onClick={() => {
                    setCurrentValue('')
                    inputRef.current?.focus()
                  }}
                  className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]"
                >
                  <X className="h-3 w-3" />
                </button>
              )}

              {showPickerButton && (
                <button
                  ref={triggerRef}
                  type="button"
                  disabled={!isInteractive}
                  aria-label={pickerTriggerLabel}
                  aria-expanded={open}
                  aria-haspopup="dialog"
                  aria-controls={open ? popoverId : undefined}
                  data-template-picker-trigger=""
                  title={pickerTriggerLabel}
                  onMouseDown={(e) => {
                    // 防止点击 {} 抢占焦点导致丢失选区位置
                    e.preventDefault()
                    captureSelection()
                  }}
                  onClick={() => {
                    if (!isInteractive) return
                    setOpen(!open)
                  }}
                  className={cn(
                    'inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                    !isInteractive
                      ? 'cursor-not-allowed border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] opacity-55'
                      : open
                        ? 'cursor-pointer border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                        : 'cursor-pointer border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]/60 hover:text-[var(--abc-primary)]'
                  )}
                >
                  <Braces className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <div
            id={hintId}
            className={cn(
              'text-[11px] leading-snug',
              error ? 'text-[var(--abc-danger)]' : 'text-[var(--abc-fg-muted)]'
            )}
          >
            {error ?? helperText}
          </div>
        )}

        {/* Portal 渲染的 {} 快捷变量选择器浮层（逃逸 Inspector overflow 裁剪） */}
        <TemplateVariablePickerPopover
          floatingRef={floatingRef}
          portalContainer={portalContainer}
          portalTheme={portalTheme}
          isMounted={isMounted}
          isVisible={isVisible}
          popoverId={popoverId}
          floatingStyle={floatingStyle}
          actualSide={actualSide}
          resolvedMotion={resolvedMotion}
          pickerTitle={pickerTitle}
          pickerTriggerLabel={pickerTriggerLabel}
          pickerPlaceholder={pickerPlaceholder}
          emptyVariablesText={emptyVariablesText}
          searchable={searchable}
          totalVariablesCount={variables.length}
          query={query}
          onQueryChange={setQuery}
          groupedVariables={filteredGroupedVariables}
          onSelect={handleSelectOption}
          popoverClassName={popoverClassName}
        />
      </div>
    )
  }
)

TemplateVariableInput.displayName = 'TemplateVariableInput'
export default TemplateVariableInput
