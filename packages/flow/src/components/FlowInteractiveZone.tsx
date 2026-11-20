import React from 'react'
import { cn } from '@abc-design/react'

export interface FlowInteractiveZoneProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 是否阻止拖拽冒泡至节点（默认 true，附加 nodrag） */
  preventDrag?: boolean
  /** 是否阻止滚轮事件缩放画布（默认 true，附加 nowheel，便于内部列表/代码框自由滚动） */
  preventWheelZoom?: boolean
  /** 是否阻止平移捕获（默认 true，附加 nopan） */
  preventPan?: boolean
  /** 是否同时屏蔽内部小按钮与输入控件的 active 缩放漂移（默认 true） */
  disablePressScale?: boolean
}

/**
 * 节点内嵌交互隔离区 (FlowInteractiveZone)
 * 封装 ReactFlow `nodrag` / `nowheel` / `nopan` 隔离类与防按压缩放标记，
 * 确保节点内嵌 `<textarea>`、代码编辑器、滚动列表或表单输入时，文本选中不拖走节点、滚轮滚动不误缩放画布。
 */
export const FlowInteractiveZone = React.forwardRef<HTMLDivElement, FlowInteractiveZoneProps>(
  (
    {
      preventDrag = true,
      preventWheelZoom = true,
      preventPan = true,
      disablePressScale = true,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="flow-interactive-zone"
        data-abc-no-press-scale={disablePressScale ? '' : undefined}
        className={cn(
          preventDrag && 'nodrag',
          preventWheelZoom && 'nowheel',
          preventPan && 'nopan',
          'select-text',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

FlowInteractiveZone.displayName = 'FlowInteractiveZone'
