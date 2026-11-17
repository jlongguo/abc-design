import { ChevronDown,X } from 'lucide-react'
import React from 'react'
import { cn } from '../../../utils/cn'
import { baseFieldControlClass } from '../Input'

import { TreeSelectDropdown } from './TreeSelectDropdown'
import { MULTI_SIZE_H,SINGLE_SIZE_H,type TreeSelectProps } from './types'
import { useTreeSelectState } from './useTreeSelectState'

const TreeSelectBase = React.forwardRef<HTMLDivElement, TreeSelectProps>((props, ref) => {
  const state = useTreeSelectState(props, ref)
  const {
    wrapperRef,
    wrapperClassName,
    label,
    triggerId,
    required,
    name,
    isMultiMode,
    displayTagKeys,
    selectedRawKeys,
    mergeTriggerRef,
    restTriggerProps,
    disabled,
    open,
    isMounted,
    treeId,
    isInvalid,
    describedByIds,
    ariaLabel,
    placeholder,
    resolvedMotion,
    handleKeyDown,
    setOpen,
    openMenu,
    size,
    resolvedSize,
    className,
    displayItems,
    visibleTags,
    isCheckable,
    handleToggleCheck,
    emitValueChange,
    hiddenTags,
    isClearable,
    error,
    feedbackId,
    helperText,
  } = state

    return (
      <div
        ref={wrapperRef}
        data-slot="tree-select-wrapper"
        className={cn('w-full', wrapperClassName)}
      >
        {label && (
          <label
            htmlFor={triggerId}
            className="mb-1.5 inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)] select-none"
          >
            <span>{label}</span>
            {required && (
              <span aria-hidden="true" className="text-[var(--abc-danger)]">
                *
              </span>
            )}
          </label>
        )}

        {/* 兼容原生 FormData / 表单序列化 */}
        {name && (
          <input
            type="hidden"
            name={name}
            value={isMultiMode ? displayTagKeys.join(',') : String(selectedRawKeys[0] ?? '')}
          />
        )}

        <div
          ref={mergeTriggerRef}
          {...restTriggerProps}
          id={triggerId}
          role="combobox"
          tabIndex={disabled ? -1 : 0}
          aria-expanded={open}
          aria-haspopup="tree"
          aria-controls={isMounted ? treeId : undefined}
          aria-invalid={isInvalid || undefined}
          aria-describedby={describedByIds || undefined}
          aria-disabled={disabled || undefined}
          aria-label={ariaLabel || (typeof label === 'string' ? label : placeholder)}
          data-slot="tree-select-trigger"
          data-state={open ? 'open' : 'closed'}
          data-motion={resolvedMotion}
          onKeyDown={handleKeyDown}
          onClick={(e) => {
            e.stopPropagation()
            if (disabled) return
            if (open) setOpen(false)
            else openMenu()
          }}
          className={cn(
            'flex items-center justify-between gap-1.5 cursor-pointer select-none',
            size === 'ghost'
              ? 'h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none'
              : cn(
                  'w-full px-2.5 py-1',
                  baseFieldControlClass,
                  isMultiMode ? MULTI_SIZE_H[resolvedSize] : SINGLE_SIZE_H[resolvedSize],
                  open && 'border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]',
                  isInvalid && 'border-[var(--abc-danger)]',
                  disabled && 'opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]'
                ),
            className
          )}
        >
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
            {displayItems.length === 0 ? (
              <span className="truncate text-[var(--abc-fg-placeholder)]">{placeholder}</span>
            ) : isMultiMode ? (
              <>
                {visibleTags.map((item) => (
                  <span
                    key={item.keyStr}
                    data-testid="tree-select-tag"
                    className="inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]"
                  >
                    <span className="max-w-32 truncate">{item.label}</span>
                    {!disabled && !item.node?.disabled && (
                      <button
                        type="button"
                        aria-label={`移除 ${item.title}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          if (isCheckable && item.node) {
                            handleToggleCheck(item.node, false)
                          } else {
                            emitValueChange(
                              selectedRawKeys.filter((k) => String(k) !== item.keyStr)
                            )
                          }
                        }}
                        className="inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer"
                      >
                        <X className="h-2.5 w-2.5" aria-hidden="true" />
                      </button>
                    )}
                  </span>
                ))}
                {hiddenTags.length > 0 && (
                  <span
                    data-testid="tree-select-max-tag"
                    title={hiddenTags.map((t) => t.title).join('、')}
                    className="inline-flex items-center rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)]"
                  >
                    +{hiddenTags.length}
                  </span>
                )}
              </>
            ) : (
              <span className="truncate text-[var(--abc-fg)]">{displayItems[0]?.label}</span>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]">
            {isClearable && displayItems.length > 0 && !disabled && (
              <button
                type="button"
                data-testid="tree-select-clear"
                aria-label="清空"
                onClick={(e) => {
                  e.stopPropagation()
                  emitValueChange(isMultiMode ? [] : '')
                }}
                className="rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
            <ChevronDown
              data-open={open ? 'true' : 'false'}
              className={cn(
                'abc-chevron h-3.5 w-3.5 shrink-0',
                open && 'text-[var(--abc-primary)]'
              )}
              aria-hidden="true"
            />
          </div>
        </div>


      <TreeSelectDropdown state={state} />

        {error && (
          <p id={feedbackId} className="mt-1 text-xs text-[var(--abc-danger)]">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={feedbackId} className="mt-1 text-xs text-[var(--abc-fg-muted)]">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

TreeSelectBase.displayName = 'TreeSelect'

/** 挂载策略静态常量，方便业务按 TreeSelect.SHOW_PARENT 等标准枚举调用 */
export const TreeSelect = Object.assign(TreeSelectBase, {
  SHOW_ALL: 'SHOW_ALL' as const,
  SHOW_PARENT: 'SHOW_PARENT' as const,
  SHOW_CHILD: 'SHOW_CHILD' as const,
})


export default TreeSelect
