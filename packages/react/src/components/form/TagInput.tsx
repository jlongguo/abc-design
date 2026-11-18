import React, { useCallback, useId, useImperativeHandle, useRef, useState } from 'react'
import {
  DEFAULT_TAG_SEPARATORS,
  buildTagSeparatorRegExp,
  mergeTagTokens,
  splitTagDraftOnInput,
  splitTagInputText,
  type RejectedTagItem,
} from '@abc-design/core'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { X } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'
import { baseFieldControlClass, type ControlSize } from './Input'

export type { RejectedTagItem, TagRejectReason } from '@abc-design/core'

export interface TagInputProps {
  /** 受控标签列表 */
  value?: string[]
  /** 非受控初始标签列表（默认 []） */
  defaultValue?: string[]
  /** 标签列表变更回调 */
  onChange?: (tags: string[]) => void
  /** onChange 语义别名 */
  onValueChange?: (tags: string[]) => void

  /** 字段标识与无障碍关联 */
  id?: string
  name?: string
  label?: React.ReactNode
  error?: React.ReactNode
  helperText?: React.ReactNode
  invalid?: boolean
  required?: boolean

  /** 占位提示文案 */
  placeholder?: string
  /** 是否使用等宽字体展示芯片与输入文本 */
  mono?: boolean
  /** 控件尺寸（兼容 ControlSize，默认继承上下文或 'sm'） */
  size?: ControlSize
  /** 微交互动效规格 */
  motion?: AbcMotionPreset

  /** 禁用与只读状态 */
  disabled?: boolean
  readOnly?: boolean

  /** 触发分词的分隔符（默认支持逗号、中文逗号、分号、换行、回车、Tab） */
  separators?: ReadonlyArray<string> | RegExp
  /** 失焦时是否自动提交当前输入草稿（默认 true） */
  addOnBlur?: boolean
  /** 粘贴含分隔符文本时是否自动批量拆解为多个标签（默认 true） */
  splitOnPaste?: boolean
  /** 是否允许重复标签（默认 false） */
  allowDuplicates?: boolean
  /** 最大标签数量限制（默认不设硬上限） */
  maxTags?: number
  /** 单个标签最大字符长度限制 */
  maxTagLength?: number
  /** 是否显示底部已选计数（配合 maxTags 显示 `N/M`） */
  showCount?: boolean

  /** 归一化转换函数（在去重与校验之前执行） */
  transformTag?: (raw: string) => string
  /** 自定义校验函数：返回 true / undefined / null 表示通过，返回 false 或错误文案表示拒绝 */
  validateTag?: (
    tag: string,
    currentTags: ReadonlyArray<string>
  ) => boolean | string | null | undefined
  /** 标签被拒绝时的回调 */
  onReject?: (rejected: RejectedTagItem[]) => void

  /** 清空控制 */
  allowClear?: boolean
  clearable?: boolean
  onClear?: () => void
  removeTagLabel?: (tag: string) => string
  clearLabel?: string

  /** 焦点与 ARIA 属性 */
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean | 'true' | 'false'

  className?: string
  wrapperClassName?: string
  chipClassName?: string
  inputClassName?: string
}

const TAG_INPUT_MIN_H: Record<AbcSize, string> = {
  xs: 'min-h-[var(--abc-control-h-xs)] text-xs',
  sm: 'min-h-[var(--abc-control-h-sm)] text-xs',
  md: 'min-h-[var(--abc-control-h-md)] text-sm',
  lg: 'min-h-[var(--abc-control-h-lg)] text-sm',
}

const TAG_CHIP_SIZE: Record<AbcSize, string> = {
  xs: 'px-1.5 py-0 text-[11px]',
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-xs',
  lg: 'px-2.5 py-1 text-sm',
}

/**
 * 企业级多标签胶囊输入框 (TagInput)
 * 支持四档规格、动效预设、多分隔符与粘贴批量导入、IME 组合防误触、去重/归一化/校验、只读与一键清空
 */
export const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      value: controlledValue,
      defaultValue = [],
      onChange,
      onValueChange,
      id,
      name,
      label,
      error,
      helperText,
      invalid = false,
      required = false,
      placeholder = '输入后按回车添加标签...',
      mono = false,
      size,
      motion,
      disabled = false,
      readOnly = false,
      separators = DEFAULT_TAG_SEPARATORS,
      addOnBlur = true,
      splitOnPaste = true,
      allowDuplicates = false,
      maxTags,
      maxTagLength,
      showCount = false,
      transformTag,
      validateTag,
      onReject,
      allowClear,
      clearable,
      onClear,
      removeTagLabel,
      clearLabel = '清空标签',
      onFocus,
      onBlur,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      className,
      wrapperClassName,
      chipClassName,
      inputClassName,
    },
    ref
  ) => {
    const resolvedSize = useAbcSize(size, 'sm')
    const resolvedMotion = useAbcMotion(motion)
    const generatedId = useId()
    const inputId = id || generatedId
    const hintId = `${inputId}-hint`

    const containerRef = useRef<HTMLDivElement | null>(null)
    const innerInputRef = useRef<HTMLInputElement | null>(null)
    useImperativeHandle(ref, () => innerInputRef.current as HTMLInputElement, [])

    const emitTagsChange = useCallback(
      (next: string[]) => {
        onChange?.(next)
        onValueChange?.(next)
      },
      [onChange, onValueChange]
    )

    const [tags, setTags] = useControllableState<string[]>({
      value: controlledValue,
      defaultValue,
      onChange: emitTagsChange,
    })

    const [draft, setDraft] = useState('')
    const [internalError, setInternalError] = useState<string | null>(null)

    const isInteractive = !disabled && !readOnly
    const isAtMax = typeof maxTags === 'number' && maxTags >= 0 && tags.length >= maxTags
    const showClear = Boolean((allowClear ?? clearable) && tags.length > 0 && isInteractive)
    const displayError = error ?? internalError
    const isInvalid = Boolean(
      invalid || displayError || ariaInvalid === true || ariaInvalid === 'true'
    )

    const applyCandidates = useCallback(
      (candidates: string[], preserveDraftOnValidationError: boolean) => {
        if (!isInteractive) return
        const result = mergeTagTokens(tags, candidates, {
          separators,
          transformTag,
          allowDuplicates,
          maxTags,
          maxTagLength,
          validateTag,
        })

        if (result.changed) {
          setTags(result.nextTags)
        }

        if (result.rejected.length > 0) {
          onReject?.(result.rejected)
          const errWithMessage = result.rejected.find(
            (item) => (item.reason === 'invalid' || item.reason === 'maxTagLength') && item.message
          )
          if (errWithMessage?.message) {
            setInternalError(errWithMessage.message)
          }
          const hasValidationFailure = result.rejected.some(
            (item) => item.reason === 'invalid' || item.reason === 'maxTagLength'
          )
          if (preserveDraftOnValidationError && !result.changed && hasValidationFailure) {
            return
          }
        } else {
          setInternalError(null)
        }

        setDraft('')
      },
      [
        isInteractive,
        tags,
        separators,
        transformTag,
        allowDuplicates,
        maxTags,
        maxTagLength,
        validateTag,
        setTags,
        onReject,
      ]
    )

    const commitDraft = useCallback(
      (rawText: string) => {
        const parts = splitTagInputText(rawText, { separators })
        if (parts.length === 0) {
          setDraft('')
          return
        }
        applyCandidates(parts, parts.length === 1)
      },
      [separators, applyCandidates]
    )

    const removeAt = useCallback(
      (idx: number) => {
        if (!isInteractive) return
        setInternalError(null)
        setTags(tags.filter((_, i) => i !== idx))
      },
      [isInteractive, tags, setTags]
    )

    const handleClear = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (!isInteractive) return
        setTags([])
        setDraft('')
        setInternalError(null)
        onClear?.()
        innerInputRef.current?.focus()
      },
      [isInteractive, setTags, onClear]
    )

    const isSeparatorKey = useCallback(
      (key: string): boolean => {
        if (key === 'Enter') return true
        if (separators instanceof RegExp) {
          if (key.length !== 1) return false
          const stateless = new RegExp(separators.source, separators.flags.replace(/g/g, ''))
          return stateless.test(key)
        }
        return separators.includes(key)
      },
      [separators]
    )

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isInteractive) return
      const nextVal = e.target.value
      if (internalError) setInternalError(null)

      const { committed, remainingDraft } = splitTagDraftOnInput(nextVal, { separators })
      if (committed.length > 0) {
        const result = mergeTagTokens(tags, committed, {
          separators,
          transformTag,
          allowDuplicates,
          maxTags,
          maxTagLength,
          validateTag,
        })
        if (result.changed) {
          setTags(result.nextTags)
        }
        if (result.rejected.length > 0) {
          onReject?.(result.rejected)
          const errItem = result.rejected.find(
            (item) => (item.reason === 'invalid' || item.reason === 'maxTagLength') && item.message
          )
          if (errItem?.message) {
            setInternalError(errItem.message)
          }
          if (
            committed.length === 1 &&
            !result.changed &&
            (result.rejected[0].reason === 'invalid' || result.rejected[0].reason === 'maxTagLength')
          ) {
            setDraft(remainingDraft ? `${committed[0]}${remainingDraft}` : committed[0])
            return
          }
        }
        setDraft(remainingDraft)
        return
      }

      setDraft(nextVal)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // 保护中文/日文等 IME 组合输入态，按 Enter 选词时不提前提交半成品标签
      if (e.nativeEvent.isComposing || e.keyCode === 229) return
      if (!isInteractive) return

      if (isSeparatorKey(e.key)) {
        e.preventDefault()
        commitDraft(draft)
        return
      }

      if (e.key === 'Backspace' && draft === '' && tags.length > 0) {
        e.preventDefault()
        removeAt(tags.length - 1)
      }
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      if (!isInteractive || !splitOnPaste) return
      const pastedText = e.clipboardData?.getData('text') ?? ''
      if (!pastedText) return

      const sepRe = buildTagSeparatorRegExp(separators)
      if (!sepRe || !sepRe.test(pastedText)) {
        return
      }

      e.preventDefault()
      const start = e.currentTarget.selectionStart ?? draft.length
      const end = e.currentTarget.selectionEnd ?? draft.length
      const combined = `${draft.slice(0, start)}${pastedText}${draft.slice(end)}`
      const parts = splitTagInputText(combined, { separators })
      if (parts.length === 0) {
        setDraft('')
        return
      }
      applyCandidates(parts, false)
    }

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const nextTarget = e.relatedTarget as Node | null
      const focusLeftContainer = !nextTarget || !containerRef.current?.contains(nextTarget)
      if (focusLeftContainer && addOnBlur && isInteractive && draft.trim() !== '') {
        commitDraft(draft)
      }
      onBlur?.(e)
    }

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isInteractive) return
      const target = e.target as HTMLElement | null
      if (target?.closest('button')) return
      innerInputRef.current?.focus()
    }

    const resolvedAriaLabel =
      ariaLabel !== undefined
        ? ariaLabel
        : ariaLabelledBy !== undefined || label !== undefined
          ? undefined
          : '添加标签输入'

    const hasHintArea = Boolean(displayError || helperText || showCount)
    const describedByValue =
      [ariaDescribedBy, hasHintArea ? hintId : undefined].filter(Boolean).join(' ') || undefined

    const controlBox = (
      <div
        ref={containerRef}
        data-slot="tag-input"
        data-motion={resolvedMotion}
        data-disabled={disabled ? 'true' : undefined}
        data-readonly={readOnly ? 'true' : undefined}
        onClick={handleContainerClick}
        className={cn(
          baseFieldControlClass,
          'flex flex-wrap items-center gap-1.5 h-auto px-2 py-1',
          TAG_INPUT_MIN_H[resolvedSize],
          isInvalid &&
            'border-[var(--abc-danger)] focus-within:border-[var(--abc-danger)] focus-within:ring-[var(--abc-danger)]/20',
          disabled && 'opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]',
          readOnly && !disabled && 'bg-[var(--abc-bg-muted)]/60 cursor-default',
          className
        )}
      >
        {tags.map((tag, idx) => (
          <span
            key={`${tag}_${idx}`}
            data-slot="tag-input-chip"
            className={cn(
              'inline-flex max-w-full items-center gap-1 rounded-[var(--abc-radius-xs)] border border-[var(--abc-primary)]/15 bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop',
              TAG_CHIP_SIZE[resolvedSize],
              mono && 'font-mono',
              chipClassName
            )}
          >
            <span className="break-all">{tag}</span>
            {isInteractive && (
              <button
                type="button"
                aria-label={removeTagLabel ? removeTagLabel(tag) : `移除标签 ${tag}`}
                onMouseDown={(e) => e.preventDefault()}
                onClick={(e) => {
                  e.stopPropagation()
                  removeAt(idx)
                }}
                className="inline-flex shrink-0 items-center justify-center rounded-full p-0.5 hover:opacity-75 cursor-pointer"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </span>
        ))}

        <input
          ref={innerInputRef}
          id={inputId}
          name={name}
          type="text"
          disabled={disabled}
          readOnly={readOnly}
          required={required && tags.length === 0}
          aria-label={resolvedAriaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={describedByValue}
          aria-invalid={isInvalid || undefined}
          value={draft}
          placeholder={
            tags.length === 0 ? placeholder : isAtMax ? `已达上限 (${maxTags})` : ''
          }
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onFocus={onFocus}
          onBlur={handleInputBlur}
          className={cn(
            'min-w-[110px] flex-1 bg-transparent text-inherit text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed',
            mono && 'font-mono',
            readOnly && !disabled && 'cursor-default',
            inputClassName
          )}
        />

        {showClear && (
          <button
            type="button"
            tabIndex={-1}
            data-testid="tag-input-clear"
            aria-label={clearLabel}
            title={clearLabel}
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleClear}
            className="ml-auto inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    )

    // 始终保持外层包裹节点稳定，避免错误提示出现/消失时销毁重挂 input 导致失焦
    return (
      <div className={cn('w-full', wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)]"
          >
            <span>{label}</span>
            {required && (
              <span aria-hidden="true" className="text-[var(--abc-danger)]">
                *
              </span>
            )}
          </label>
        )}
        {controlBox}
        {hasHintArea && (
          <div id={hintId} className="mt-1 flex items-center justify-between gap-2 text-xs">
            <div className="min-w-0 flex-1">
              {displayError ? (
                <p role="alert" className="text-[var(--abc-danger)]">
                  {displayError}
                </p>
              ) : helperText ? (
                <p className="text-[var(--abc-fg-muted)]">{helperText}</p>
              ) : null}
            </div>
            {showCount && (
              <span
                data-testid="tag-input-count"
                className="ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none"
              >
                {typeof maxTags === 'number' ? `${tags.length}/${maxTags}` : tags.length}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
)
TagInput.displayName = 'TagInput'

export default TagInput
