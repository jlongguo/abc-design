import React from 'react'
import { Button, cn } from '@abc-design/react'
import { LayoutGrid, Map as MapIcon, Maximize, Minus, Plus } from 'lucide-react'

export interface FlowViewportControlAction {
  /** 唯一标识 */
  key: string
  /** 按钮图标 */
  icon: React.ReactNode
  /** 无障碍标签与悬停标题 */
  label: string
  /** 详细提示文案（未设时回退 label） */
  title?: string
  /** 点击回调 */
  onClick: () => void
  /** 是否禁用 */
  disabled?: boolean
  /** 是否处于激活高亮态 */
  active?: boolean
  /** 自定义测试属性 */
  testId?: string
}

export interface FlowViewportControlsPrimaryAction {
  /** 主按钮文案 */
  label: string
  /** 无障碍标签（未设时回退 label） */
  ariaLabel?: string
  /** 前置图标（默认 Plus） */
  icon?: React.ReactNode
  /** 点击回调 */
  onClick: () => void
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义测试属性 */
  testId?: string
}

export interface FlowViewportControlsLabels {
  zoomOut?: string
  zoomOutTitle?: string
  zoomReset?: string
  zoomResetTitle?: string
  zoomIn?: string
  zoomInTitle?: string
  fitView?: string
  fitViewTitle?: string
  autoLayout?: string
  autoLayoutTitle?: string
  toggleMiniMap?: string
  showMiniMapTitle?: string
  hideMiniMapTitle?: string
}

export interface FlowViewportControlsProps {
  /** 当前缩放百分比（例如 100） */
  zoomPercent: number
  /** 缩小回调 */
  onZoomOut: () => void
  /** 重置 100% 缩放回调 */
  onZoomReset: () => void
  /** 放大回调 */
  onZoomIn: () => void
  /** 自适应居中视口回调 */
  onFitView?: () => void
  /** 一键整理排版回调 */
  onAutoLayout?: () => void
  /** 缩略图是否显示 */
  showMiniMap?: boolean
  /** 切换缩略图回调（提供时才渲染 MiniMap 开关） */
  onToggleMiniMap?: () => void
  /** 附加扩展图标操作（如便签、批量延迟等由业务注入） */
  extraActions?: ReadonlyArray<FlowViewportControlAction>
  /** 右侧主行动按钮（如“添加步骤”） */
  primaryAction?: FlowViewportControlsPrimaryAction
  /** 国际化文案覆盖 */
  labels?: FlowViewportControlsLabels
  /** 控件整体自定义类名 */
  className?: string
  /** 自定义 data-testid（默认 abc-flow-viewport-controls） */
  testId?: string
}

/**
 * 画布左下角极简悬浮视口控制胶囊 (FlowViewportControls)
 * 仅保留高频视口操控（缩放、居中、整理、按需 MiniMap、可选扩展图标与主行动按钮），零业务耦合。
 */
export const FlowViewportControls: React.FC<FlowViewportControlsProps> = ({
  zoomPercent,
  onZoomOut,
  onZoomReset,
  onZoomIn,
  onFitView,
  onAutoLayout,
  showMiniMap = false,
  onToggleMiniMap,
  extraActions,
  primaryAction,
  labels,
  className,
  testId = 'abc-flow-viewport-controls',
}) => {
  const hasMiddleGroup = Boolean(
    onFitView || onAutoLayout || onToggleMiniMap || (extraActions && extraActions.length > 0),
  )

  const iconButtonClass =
    'h-7 w-7 text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'

  return (
    <div
      data-testid={testId}
      className={cn(
        'nodrag nopan flex items-center gap-1 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 p-1 text-xs text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)] backdrop-blur',
        className,
      )}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label={labels?.zoomOut ?? '缩小画布'}
        title={labels?.zoomOutTitle ?? labels?.zoomOut ?? '缩小画布 (-)'}
        onClick={onZoomOut}
        className={iconButtonClass}
      >
        <Minus size={13} />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="xs"
        aria-label={labels?.zoomReset ?? '重置画布缩放至 100%'}
        title={labels?.zoomResetTitle ?? labels?.zoomReset ?? '重置缩放比例 (0)'}
        onClick={onZoomReset}
        className="h-7 min-w-[44px] px-1.5 font-mono text-[11px] font-medium text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]"
      >
        {zoomPercent}%
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label={labels?.zoomIn ?? '放大画布'}
        title={labels?.zoomInTitle ?? labels?.zoomIn ?? '放大画布 (+)'}
        onClick={onZoomIn}
        className={iconButtonClass}
      >
        <Plus size={13} />
      </Button>

      {hasMiddleGroup && (
        <span
          className="mx-0.5 h-4 w-px bg-[var(--abc-border)]"
          aria-hidden="true"
        />
      )}

      {onFitView && (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={labels?.fitView ?? '自适应居中视口'}
          title={labels?.fitViewTitle ?? labels?.fitView ?? '自适应居中视口'}
          onClick={onFitView}
          className={iconButtonClass}
        >
          <Maximize size={13} />
        </Button>
      )}

      {onAutoLayout && (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={labels?.autoLayout ?? '一键整理排版'}
          title={labels?.autoLayoutTitle ?? labels?.autoLayout ?? '一键整理排版'}
          onClick={onAutoLayout}
          className={iconButtonClass}
        >
          <LayoutGrid size={13} />
        </Button>
      )}

      {onToggleMiniMap && (
        <Button
          type="button"
          variant={showMiniMap ? 'secondary' : 'ghost'}
          size="icon-sm"
          data-testid="toggle-minimap-btn"
          aria-pressed={showMiniMap}
          aria-label={labels?.toggleMiniMap ?? '开关缩略图导航'}
          title={
            showMiniMap
              ? (labels?.hideMiniMapTitle ?? '隐藏缩略图')
              : (labels?.showMiniMapTitle ?? '显示缩略图')
          }
          onClick={onToggleMiniMap}
          className={iconButtonClass}
        >
          <MapIcon size={13} />
        </Button>
      )}

      {extraActions?.map((action) => (
        <Button
          key={action.key}
          type="button"
          variant={action.active ? 'secondary' : 'ghost'}
          size="icon-sm"
          disabled={action.disabled}
          data-testid={action.testId}
          aria-label={action.label}
          title={action.title ?? action.label}
          onClick={action.onClick}
          className={iconButtonClass}
        >
          {action.icon}
        </Button>
      ))}

      {primaryAction && (
        <>
          <span
            className="mx-0.5 h-4 w-px bg-[var(--abc-border)]"
            aria-hidden="true"
          />
          <Button
            type="button"
            variant="primary"
            size="xs"
            disabled={primaryAction.disabled}
            data-testid={primaryAction.testId}
            aria-label={primaryAction.ariaLabel ?? primaryAction.label}
            onClick={primaryAction.onClick}
            className="h-7 gap-1 rounded-lg px-2.5 text-[11px] font-semibold"
          >
            {primaryAction.icon ?? <Plus size={12} />}
            <span>{primaryAction.label}</span>
          </Button>
        </>
      )}
    </div>
  )
}
