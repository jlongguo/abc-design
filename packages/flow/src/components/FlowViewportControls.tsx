import React from 'react'
import { Button, cn } from '@abc-design/react'
import {
  BoxSelect,
  Hand,
  ImageDown,
  LayoutGrid,
  Lock,
  Magnet,
  Map as MapIcon,
  Maximize,
  Minus,
  MousePointerClick,
  Plus,
  Redo2,
  Undo2,
  Unlock,
} from 'lucide-react'
import type { FlowGesturePreset, FlowInteractionMode } from './FlowCanvasSurface'

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
  panMode?: string
  selectMode?: string
  lockCanvas?: string
  unlockCanvas?: string
  snapToGrid?: string
  undo?: string
  redo?: string
  gesturePreset?: string
  exportImage?: string
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
  /** 画布交互模式（平移 pan vs 框选 select） */
  interactionMode?: FlowInteractionMode
  /** 切换交互模式回调（提供时渲染平移/框选切换按钮） */
  onInteractionModeChange?: (mode: FlowInteractionMode) => void
  /** 画布是否允许编辑（默认 true） */
  interactive?: boolean
  /** 切换画布只读锁定状态回调 */
  onToggleInteractive?: () => void
  /** 是否启用网格吸附 */
  snapToGrid?: boolean
  /** 切换网格吸附回调 */
  onToggleSnapToGrid?: () => void
  /** 撤销回调（提供时渲染撤销按钮） */
  onUndo?: () => void
  /** 重做回调（提供时渲染重做按钮） */
  onRedo?: () => void
  /** 是否可撤销 */
  canUndo?: boolean
  /** 是否可重做 */
  canRedo?: boolean
  /** 触控板手势模式（default 滚轮缩放 vs figma 滚轮平移+捏合缩放） */
  gesturePreset?: FlowGesturePreset
  /** 切换触控板手势模式回调 */
  onToggleGesturePreset?: () => void
  /** 导出画布图像回调（提供时渲染导出图片按钮） */
  onExportImage?: () => void
  /** 附加扩展图标操作（如便签、导出 JSON 等由业务注入） */
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
 * 画布左下角悬浮视口与交互控制胶囊 (FlowViewportControls)
 * 覆盖缩放、居中、拓扑自动排版、MiniMap、平移/框选模式切换、画布锁定、网格吸附、撤销/重做与业务扩展槽。
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
  interactionMode = 'pan',
  onInteractionModeChange,
  interactive = true,
  onToggleInteractive,
  snapToGrid = false,
  onToggleSnapToGrid,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false,
  gesturePreset = 'default',
  onToggleGesturePreset,
  onExportImage,
  extraActions,
  primaryAction,
  labels,
  className,
  testId = 'abc-flow-viewport-controls',
}) => {
  const hasModeGroup = Boolean(
    onInteractionModeChange || onToggleInteractive || onToggleSnapToGrid || onToggleGesturePreset
  )
  const hasHistoryGroup = Boolean(onUndo || onRedo)
  const hasMiddleGroup = Boolean(
    onFitView ||
      onAutoLayout ||
      onToggleMiniMap ||
      onExportImage ||
      (extraActions && extraActions.length > 0),
  )

  const iconButtonClass =
    'h-7 w-7 text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'

  return (
    <div
      data-slot="flow-viewport-controls"
      data-abc-no-press-scale=""
      data-testid={testId}
      className={cn(
        'nodrag nopan flex flex-wrap items-center gap-1 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 p-1 text-xs text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)] backdrop-blur',
        className,
      )}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        pressScale={false}
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
        pressScale={false}
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
        pressScale={false}
        aria-label={labels?.zoomIn ?? '放大画布'}
        title={labels?.zoomInTitle ?? labels?.zoomIn ?? '放大画布 (+)'}
        onClick={onZoomIn}
        className={iconButtonClass}
      >
        <Plus size={13} />
      </Button>

      {hasModeGroup && (
        <>
          <span className="mx-0.5 h-4 w-px bg-[var(--abc-border)]" aria-hidden="true" />
          {onInteractionModeChange && (
            <>
              <Button
                type="button"
                variant={interactionMode === 'pan' ? 'secondary' : 'ghost'}
                size="icon-sm"
                pressScale={false}
                aria-pressed={interactionMode === 'pan'}
                aria-label={labels?.panMode ?? '拖拽平移模式'}
                title={labels?.panMode ?? '拖拽平移模式 (Hand)'}
                onClick={() => onInteractionModeChange('pan')}
                className={iconButtonClass}
              >
                <Hand size={13} />
              </Button>
              <Button
                type="button"
                variant={interactionMode === 'select' ? 'secondary' : 'ghost'}
                size="icon-sm"
                pressScale={false}
                aria-pressed={interactionMode === 'select'}
                aria-label={labels?.selectMode ?? '框选多节点模式'}
                title={labels?.selectMode ?? '左键框选模式 (Select)'}
                onClick={() => onInteractionModeChange('select')}
                className={iconButtonClass}
              >
                <BoxSelect size={13} />
              </Button>
            </>
          )}
          {onToggleInteractive && (
            <Button
              type="button"
              variant={!interactive ? 'secondary' : 'ghost'}
              size="icon-sm"
              pressScale={false}
              aria-pressed={!interactive}
              aria-label={
                interactive
                  ? (labels?.lockCanvas ?? '锁定画布禁止编辑')
                  : (labels?.unlockCanvas ?? '解锁画布恢复编辑')
              }
              title={
                interactive
                  ? (labels?.lockCanvas ?? '锁定画布')
                  : (labels?.unlockCanvas ?? '已锁定，点击解锁')
              }
              onClick={onToggleInteractive}
              className={iconButtonClass}
            >
              {interactive ? <Unlock size={13} /> : <Lock size={13} />}
            </Button>
          )}
          {onToggleSnapToGrid && (
            <Button
              type="button"
              variant={snapToGrid ? 'secondary' : 'ghost'}
              size="icon-sm"
              pressScale={false}
              aria-pressed={snapToGrid}
              aria-label={labels?.snapToGrid ?? '开关网格磁吸对齐'}
              title={labels?.snapToGrid ?? '网格磁吸对齐 (Snap to Grid)'}
              onClick={onToggleSnapToGrid}
              className={iconButtonClass}
            >
              <Magnet size={13} />
            </Button>
          )}
          {onToggleGesturePreset && (
            <Button
              type="button"
              variant={gesturePreset === 'figma' ? 'secondary' : 'ghost'}
              size="icon-sm"
              pressScale={false}
              aria-pressed={gesturePreset === 'figma'}
              aria-label={labels?.gesturePreset ?? '切换触控板平移手势 (Figma 模式)'}
              title={
                gesturePreset === 'figma'
                  ? (labels?.gesturePreset ?? '当前：Figma 触控板双指平移 + 捏合缩放')
                  : (labels?.gesturePreset ?? '切换至 Figma 触控板平移手势')
              }
              onClick={onToggleGesturePreset}
              className={iconButtonClass}
            >
              <MousePointerClick size={13} />
            </Button>
          )}
        </>
      )}

      {hasHistoryGroup && (
        <>
          <span className="mx-0.5 h-4 w-px bg-[var(--abc-border)]" aria-hidden="true" />
          {onUndo && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              pressScale={false}
              disabled={!canUndo}
              aria-label={labels?.undo ?? '撤销操作'}
              title={labels?.undo ?? '撤销 (⌘Z)'}
              onClick={onUndo}
              className={iconButtonClass}
            >
              <Undo2 size={13} />
            </Button>
          )}
          {onRedo && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              pressScale={false}
              disabled={!canRedo}
              aria-label={labels?.redo ?? '重做操作'}
              title={labels?.redo ?? '重做 (⇧⌘Z)'}
              onClick={onRedo}
              className={iconButtonClass}
            >
              <Redo2 size={13} />
            </Button>
          )}
        </>
      )}

      {hasMiddleGroup && (
        <span className="mx-0.5 h-4 w-px bg-[var(--abc-border)]" aria-hidden="true" />
      )}

      {onFitView && (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          pressScale={false}
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
          pressScale={false}
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
          pressScale={false}
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

      {onExportImage && (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          pressScale={false}
          data-testid="export-flow-image-btn"
          aria-label={labels?.exportImage ?? '导出流程图矢量图像 (SVG)'}
          title={labels?.exportImage ?? '导出完整画布图像 (SVG)'}
          onClick={onExportImage}
          className={iconButtonClass}
        >
          <ImageDown size={13} />
        </Button>
      )}

      {extraActions?.map((action) => (
        <Button
          key={action.key}
          type="button"
          variant={action.active ? 'secondary' : 'ghost'}
          size="icon-sm"
          pressScale={false}
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
          <span className="mx-0.5 h-4 w-px bg-[var(--abc-border)]" aria-hidden="true" />
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
