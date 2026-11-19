import React from 'react'
import { createPortal } from 'react-dom'
import type { AbcMotionPreset } from '@abc-design/tokens'
import { Search } from 'lucide-react'
import type { FloatingSide } from '../../hooks/useFloatingPosition'
import { cn } from '../../utils/cn'
import type { TemplateVariableOption } from './TemplateVariableInput'

export interface TemplateVariablePickerPopoverProps {
  /** 浮层 DOM 引用 */
  floatingRef: React.RefObject<HTMLDivElement | null>
  /** Portal 挂载宿主容器 */
  portalContainer: HTMLElement | null
  /** 是否处于挂载渲染周期 */
  isMounted: boolean
  /** 进出场动画可见态 */
  isVisible: boolean
  /** 浮层 DOM ID（供 trigger aria-controls 绑定） */
  popoverId: string
  /** 浮层定位样式 */
  floatingStyle: React.CSSProperties
  /** 实际展开方位 */
  actualSide: FloatingSide
  /** 动效预设 */
  resolvedMotion: AbcMotionPreset
  /** 标题文案 */
  pickerTitle: React.ReactNode
  /** 回退无障碍名称 */
  pickerTriggerLabel: string
  /** 搜索框占位文案 */
  pickerPlaceholder: string
  /** 空态文案 */
  emptyVariablesText: React.ReactNode
  /** 是否允许搜索过滤 */
  searchable: boolean
  /** 原始变量总数（用于判断是否显示搜索栏） */
  totalVariablesCount: number
  /** 当前搜索词 */
  query: string
  /** 搜索词变更回调 */
  onQueryChange: (next: string) => void
  /** 按分组归类且已过滤的变量列表 */
  groupedVariables: ReadonlyArray<readonly [string, ReadonlyArray<TemplateVariableOption>]>
  /** 选中某个变量项 */
  onSelect: (option: TemplateVariableOption) => void
  /** 浮层附加类名 */
  popoverClassName?: string
}

/**
 * TemplateVariableInput 内部专用 {} 变量选择器浮层（不对外公开导出）
 * 通过 Portal 挂载到顶层容器，避免被右侧属性检查器或抽屉的 overflow 裁切。
 */
export const TemplateVariablePickerPopover: React.FC<TemplateVariablePickerPopoverProps> = ({
  floatingRef,
  portalContainer,
  isMounted,
  isVisible,
  popoverId,
  floatingStyle,
  actualSide,
  resolvedMotion,
  pickerTitle,
  pickerTriggerLabel,
  pickerPlaceholder,
  emptyVariablesText,
  searchable,
  totalVariablesCount,
  query,
  onQueryChange,
  groupedVariables,
  onSelect,
  popoverClassName,
}) => {
  if (!isMounted || !portalContainer) return null

  return createPortal(
    <div
      ref={floatingRef}
      id={popoverId}
      role="dialog"
      aria-label={typeof pickerTitle === 'string' ? pickerTitle : pickerTriggerLabel}
      data-abc-floating=""
      data-template-picker-popover="open"
      data-placement={actualSide}
      data-motion={resolvedMotion}
      style={floatingStyle}
      className={cn(
        'nodrag nopan z-[1350] w-[280px] max-w-[calc(100vw-16px)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]',
        resolvedMotion !== 'none' &&
          (isVisible ? 'abc-animate-popover-in' : 'abc-animate-popover-out'),
        popoverClassName
      )}
    >
      <div className="border-b border-[var(--abc-border)] px-3 py-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-[var(--abc-fg)]">{pickerTitle}</span>
          <span className="font-mono text-[10px] text-[var(--abc-fg-muted)]">{'{{var}}'}</span>
        </div>

        {searchable && totalVariablesCount > 0 && (
          <div className="relative mt-2">
            <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder={pickerPlaceholder}
              aria-label={pickerPlaceholder}
              className="h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-7 pr-2 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--abc-ring)]"
            />
          </div>
        )}
      </div>

      <div className="max-h-60 overflow-y-auto p-1.5">
        {groupedVariables.length === 0 ? (
          <div className="px-2 py-5 text-center text-xs text-[var(--abc-fg-muted)]">
            {emptyVariablesText}
          </div>
        ) : (
          <div className="space-y-2">
            {groupedVariables.map(([groupName, groupItems]) => (
              <div key={groupName}>
                <div className="px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-[var(--abc-fg-muted)]">
                  {groupName}
                </div>
                <div className="mt-0.5 space-y-0.5">
                  {groupItems.map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      disabled={option.disabled}
                      data-variable-option={option.key}
                      onClick={() => onSelect(option)}
                      className={cn(
                        'flex w-full flex-col gap-0.5 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left transition-colors focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)]',
                        option.disabled
                          ? 'cursor-not-allowed opacity-45'
                          : 'cursor-pointer hover:bg-[var(--abc-bg-subtle)]'
                      )}
                    >
                      <div className="flex w-full items-center justify-between gap-2">
                        <span className="truncate font-mono text-[11.5px] font-medium text-[var(--abc-primary)]">
                          {`{{${option.key}}}`}
                        </span>
                        {option.type && (
                          <span className="shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0 font-mono text-[10px] text-[var(--abc-fg-muted)]">
                            {option.type}
                          </span>
                        )}
                      </div>
                      {(option.label || option.description || option.sampleValue) && (
                        <div className="flex w-full items-center justify-between gap-2 text-[11px] text-[var(--abc-fg-muted)]">
                          <span className="truncate">{option.label ?? option.description}</span>
                          {option.sampleValue && (
                            <span className="max-w-[90px] shrink-0 truncate font-mono text-[10px] text-[var(--abc-fg-secondary)]">
                              {option.sampleValue}
                            </span>
                          )}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>,
    portalContainer
  )
}
