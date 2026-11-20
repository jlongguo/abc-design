import React from 'react'
import { NodeToolbar, Position } from '@xyflow/react'
import type { AbcMotionPreset } from '@abc-design/tokens'
import { Tooltip, cn, useAbcMotion } from '@abc-design/react'

export type FlowNodeToolbarSize = 'xs' | 'sm'

export interface FlowNodeToolbarItem {
  /** 操作项唯一键 */
  key: string
  /** 图标节点 */
  icon: React.ReactNode
  /** 按钮无障碍名称与默认提示文案 */
  label: string
  /** 自定义 Tooltip 浮层内容（默认回退 label） */
  tooltip?: React.ReactNode
  /** 点击回调 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** 是否禁用 */
  disabled?: boolean
  /** 是否处于激活/选中高亮态 */
  active?: boolean
  /** 是否为危险操作（悬停红色语义高亮） */
  danger?: boolean
  /** 在该按钮前插入轻量分隔竖线/横线 */
  dividerBefore?: boolean
  /** 自定义按钮无障碍标签（默认取 label） */
  'aria-label'?: string
  /** 单项按钮附加类名 */
  className?: string
}

export interface FlowNodeToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 图标微操作按钮集合 */
  items: ReadonlyArray<FlowNodeToolbarItem>
  /** 排列方向（默认水平 'horizontal'） */
  orientation?: 'horizontal' | 'vertical'
  /** 按钮紧凑尺寸（默认 'sm'） */
  size?: FlowNodeToolbarSize
  /** 控制工具条是否显示（为 false 时不渲染，便于绑定节点 selected / hovered 态） */
  visible?: boolean
  /** Tooltip 弹出方向（默认 'top'） */
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
  /** 是否关闭内置 Tooltip 提示 */
  disableTooltips?: boolean
  /** 点击按钮时是否阻止事件冒泡到画布节点（默认 true，防止误触发节点拖拽或取消选中） */
  stopPropagation?: boolean
  /** 是否在 ReactFlow 节点内部自动挂载原生 `<NodeToolbar>` 悬浮定位容器（默认 false） */
  floating?: boolean
  /** 当 floating=true 时的停靠方位（默认 Position.Top） */
  floatingPosition?: Position
  /** 当 floating=true 时距离节点边框的像素间距（默认 8） */
  floatingOffset?: number
  /** 当 floating=true 时的对齐方式（默认 'center'） */
  floatingAlign?: 'start' | 'center' | 'end'
  /** 微交互动效预设 */
  motion?: AbcMotionPreset
  /** 尾部可选自定义扩展节点（如嵌套 Dropdown 更多菜单） */
  children?: React.ReactNode
}

const TOOLBAR_BUTTON_SIZE: Record<FlowNodeToolbarSize, string> = {
  xs: 'h-6 w-6',
  sm: 'h-7 w-7',
}

/**
 * Flow 节点顶部紧凑悬浮微操作条 (FlowNodeToolbar)
 * 圆角白底阴影容器 + 图标按钮组 + 视口感知 Tooltip，默认附加 `nodrag nopan` 防止画布拖拽冲突。
 */
export const FlowNodeToolbar = React.forwardRef<HTMLDivElement, FlowNodeToolbarProps>(
  (
    {
      items,
      orientation = 'horizontal',
      size = 'sm',
      visible = true,
      tooltipPlacement = 'top',
      disableTooltips = false,
      stopPropagation = true,
      floating = false,
      floatingPosition = Position.Top,
      floatingOffset = 8,
      floatingAlign = 'center',
      motion,
      className,
      children,
      'aria-label': ariaLabel = '节点快捷操作条',
      ...rest
    },
    ref
  ) => {
    const resolvedMotion = useAbcMotion(motion)

    if (!visible && !floating) return null

    const isVertical = orientation === 'vertical'
    const btnSizeClass = TOOLBAR_BUTTON_SIZE[size]

    const toolbarContent = (
      <div
        ref={ref}
        role="toolbar"
        data-slot="flow-node-toolbar"
        data-abc-no-press-scale=""
        aria-label={ariaLabel}
        aria-orientation={orientation}
        data-motion={resolvedMotion}
        data-orientation={orientation}
        onMouseDown={stopPropagation ? (e) => e.stopPropagation() : undefined}
        onClick={stopPropagation ? (e) => e.stopPropagation() : undefined}
        className={cn(
          'nodrag nopan inline-flex items-center gap-0.5 rounded-[10px] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-0.5 shadow-[var(--abc-shadow-popover)] select-none',
          isVertical ? 'flex-col' : 'flex-row',
          resolvedMotion !== 'none' && 'abc-animate-popover-in',
          className
        )}
        {...rest}
      >
        {items.map((item) => {
          const buttonNode = (
            <button
              type="button"
              disabled={item.disabled}
              aria-label={item['aria-label'] ?? item.label}
              aria-pressed={item.active !== undefined ? item.active : undefined}
              data-toolbar-key={item.key}
              data-active={item.active ? 'true' : 'false'}
              onClick={(event) => {
                if (stopPropagation) {
                  event.stopPropagation()
                }
                if (item.disabled) return
                item.onClick?.(event)
              }}
              className={cn(
                'inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-sm)] transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                btnSizeClass,
                item.disabled
                  ? 'cursor-not-allowed text-[var(--abc-fg-placeholder)] opacity-45'
                  : 'cursor-pointer',
                item.active
                  ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                  : item.danger
                    ? 'text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-danger-soft)] enabled:hover:text-[var(--abc-danger)]'
                    : 'text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]',
                item.className
              )}
            >
              <span className="inline-flex h-3.5 w-3.5 items-center justify-center">
                {item.icon}
              </span>
            </button>
          )

          return (
            <React.Fragment key={item.key}>
              {item.dividerBefore && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'shrink-0 bg-[var(--abc-border)]',
                    isVertical ? 'my-0.5 h-px w-4' : 'mx-0.5 h-4 w-px'
                  )}
                />
              )}
              {disableTooltips || item.disabled ? (
                buttonNode
              ) : (
                <Tooltip
                  content={item.tooltip ?? item.label}
                  placement={tooltipPlacement}
                  delay={80}
                  motion={resolvedMotion}
                >
                  {buttonNode}
                </Tooltip>
              )}
            </React.Fragment>
          )
        })}

        {children && (
          <>
            {items.length > 0 && (
              <span
                aria-hidden="true"
                className={cn(
                  'shrink-0 bg-[var(--abc-border)]',
                  isVertical ? 'my-0.5 h-px w-4' : 'mx-0.5 h-4 w-px'
                )}
              />
            )}
            {children}
          </>
        )}
      </div>
    )

    if (floating) {
      return (
        <NodeToolbar
          isVisible={visible}
          position={floatingPosition}
          offset={floatingOffset}
          align={floatingAlign}
        >
          {toolbarContent}
        </NodeToolbar>
      )
    }

    return toolbarContent
  }
)

FlowNodeToolbar.displayName = 'FlowNodeToolbar'
export default FlowNodeToolbar
