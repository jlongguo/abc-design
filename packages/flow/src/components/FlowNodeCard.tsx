import React from 'react'
import type { AbcMotionPreset } from '@abc-design/tokens'
import { cn, useAbcMotion } from '@abc-design/react'
import {
  FLOW_PORT_TONE_STYLES,
  FLOW_TONE_STYLES,
  type FlowPortTone,
  type FlowTone,
} from './flowTokens'

/** FlowNodeCard 柔和卡头色调类型 */
export type FlowNodeTone = FlowTone

/** FlowNodeCard 运行状态枚举 */
export type FlowNodeStatus = 'idle' | 'running' | 'success' | 'error'

/** 节点正文紧凑元数据行（默认最多展示 3 行，保持画布卡片轻盈可读） */
export interface FlowNodeMetaRow {
  /** 行唯一键（未传时回退数组下标） */
  key?: string
  /** 行首小图标 */
  icon?: React.ReactNode
  /** 可选字段短标签（如 Model / URL） */
  label?: React.ReactNode
  /** 字段值内容（自动单行截断） */
  value: React.ReactNode
  /** 是否使用等宽字体 */
  mono?: boolean
  /** 悬停完整提示文本 */
  title?: string
}

/** 节点行内状态/分支出口定义（支持外部挂载 ReactFlow <Handle />） */
export interface FlowNodeOutputPort {
  /** 出口唯一 ID（建议与 ReactFlow Handle id 保持一致） */
  id: string
  /** 出口展示文案（如 Success / Else / Branch A） */
  label: React.ReactNode
  /** 状态圆点与文案语义色（默认 'neutral'） */
  tone?: FlowPortTone
  /** 文案前可选语义小图标 */
  icon?: React.ReactNode
  /** 出口旁辅助微标签 */
  hint?: React.ReactNode
  /**
   * 外部挂接的连接点元素（如 ReactFlow 的 <Handle type="source" position={Position.Right} id={port.id} />）。
   * 该节点会直接挂载在带 `relative` 且右边界贴齐卡片外缘的出口行内，确保连线坐标与该行垂直中心精准对齐且不被裁剪。
   */
  handle?: React.ReactNode
  /**
   * 是否在右侧展示内置语义状态圆点：
   * 未传入 handle 时默认 true；传入自定义 handle 时默认 false（可显式设为 true 实现透明 Handle 叠盖圆点）。
   */
  showDot?: boolean
  /** 是否置灰禁用该出口行 */
  disabled?: boolean
  /** 出口行附加类名 */
  className?: string
}

export interface FlowNodeCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 卡片顶部主标题 */
  title: React.ReactNode
  /** 可选标题旁副标题或短说明 */
  subtitle?: React.ReactNode
  /** 卡头左侧主图标 */
  icon?: React.ReactNode
  /** 卡头标题旁轻量徽标 */
  badge?: React.ReactNode
  /** 卡头右侧副图标/紧凑微操作区 */
  headerExtra?: React.ReactNode
  /** 柔和浅色语义卡头色调（默认 'blue'） */
  tone?: FlowNodeTone
  /** 白色正文区顶部副图标（例如类型标识） */
  subIcon?: React.ReactNode
  /** 白色正文区顶部副标题 */
  subTitle?: React.ReactNode
  /** 白色正文区顶部右侧扩展插槽（如拖拽把手 || 图标） */
  subExtra?: React.ReactNode
  /** 声明式紧凑元数据行列表（默认最多渲染 maxMetaRows=3 行） */
  metaRows?: ReadonlyArray<FlowNodeMetaRow>
  /** 最大展示元数据行数（默认 3，符合画布卡片 ≤3 行密度规范） */
  maxMetaRows?: number
  /** 行内状态/分支出口行列表（如绿点 Success / 红点 Else） */
  outputs?: ReadonlyArray<FlowNodeOutputPort>
  /** 统一为每个出口行生成外部连接点（如 ReactFlow <Handle />），优先级低于单项 port.handle */
  renderOutputHandle?: (port: FlowNodeOutputPort) => React.ReactNode
  /** 外部入参连接点插槽（如 ReactFlow <Handle type="target" position={Position.Left} />） */
  inputHandle?: React.ReactNode
  /** 卡片顶部悬浮微操作条插槽（推荐传入 <FlowNodeToolbar />） */
  toolbar?: React.ReactNode
  /** 白色正文区底部扩展插槽 */
  footer?: React.ReactNode
  /** 卡片是否处于选中态 */
  selected?: boolean
  /** 卡片是否处于运行中态（等价 status="running"） */
  running?: boolean
  /** 卡片是否处于异常错误态（等价 status="error"，优先级高于 running） */
  error?: boolean
  /** 统一状态枚举（与 running/error 布尔属性兼容） */
  status?: FlowNodeStatus
  /** 卡片宽度（数字按 px 处理，默认 256；fillContainer=true 时默认 '100%'） */
  width?: number | string
  /** 卡片高度（数字按 px 处理；fillContainer=true 时默认 '100%'） */
  height?: number | string
  /** 最小宽度约束（配合 FlowNodeResizer 使用） */
  minWidth?: number | string
  /** 最小高度约束（配合 FlowNodeResizer 使用） */
  minHeight?: number | string
  /** 是否撑满外层 ReactFlow 节点容器宽高以配合 FlowNodeResizer 自由拖拽调尺寸 */
  fillContainer?: boolean
  /** 微交互动效预设 */
  motion?: AbcMotionPreset
  /** 卡头附加类名 */
  headerClassName?: string
  /** 白色正文容器附加类名 */
  bodyClassName?: string
}

/**
 * Flow 画布通用柔和浅色语义节点卡片 (FlowNodeCard)
 * - 视觉结构：柔和浅色圆角外框 + 紧凑语义卡头 + 纯白内嵌正文面 + 行内右对齐状态出口行；
 * - 零业务耦合且外层保持 overflow-visible，允许外部直接挂接 ReactFlow <Handle /> 与 <FlowNodeToolbar />；
 * - 原生支持 5 套浅色语义 tone 与 selected / running / error 状态边框。
 */
export const FlowNodeCard = React.forwardRef<HTMLDivElement, FlowNodeCardProps>(
  (
    {
      title,
      subtitle,
      icon,
      badge,
      headerExtra,
      tone = 'blue',
      subIcon,
      subTitle,
      subExtra,
      metaRows,
      maxMetaRows = 3,
      outputs,
      renderOutputHandle,
      inputHandle,
      toolbar,
      footer,
      selected = false,
      running = false,
      error = false,
      status,
      width,
      height,
      minWidth,
      minHeight,
      fillContainer = false,
      motion,
      className,
      headerClassName,
      bodyClassName,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const resolvedMotion = useAbcMotion(motion)
    const toneTokens = FLOW_TONE_STYLES[tone]

    const resolvedStatus: FlowNodeStatus =
      error || status === 'error'
        ? 'error'
        : running || status === 'running'
          ? 'running'
          : status === 'success'
            ? 'success'
            : 'idle'

    const visibleMetaRows =
      metaRows && maxMetaRows > 0 ? metaRows.slice(0, maxMetaRows) : []
    const hasSubHeader = Boolean(subIcon || subTitle !== undefined || subExtra)
    const hasBodyContent =
      hasSubHeader ||
      visibleMetaRows.length > 0 ||
      React.Children.count(children) > 0 ||
      Boolean(outputs && outputs.length > 0) ||
      Boolean(footer)

    const statusRingClass =
      resolvedStatus === 'error'
        ? 'border-rose-500 ring-2 ring-rose-500/75 dark:border-rose-400 dark:ring-rose-400/70'
        : resolvedStatus === 'running'
          ? 'border-blue-500 ring-2 ring-blue-500/80 dark:border-blue-400 dark:ring-blue-400/75'
          : selected
            ? toneTokens.selectedRing
            : undefined

    const effectiveWidth = width !== undefined ? width : fillContainer ? '100%' : 256
    const effectiveHeight = height !== undefined ? height : fillContainer ? '100%' : undefined
    const resolvedWidth = typeof effectiveWidth === 'number' ? `${effectiveWidth}px` : effectiveWidth
    const resolvedHeight = typeof effectiveHeight === 'number' ? `${effectiveHeight}px` : effectiveHeight
    const resolvedMinWidth = typeof minWidth === 'number' ? `${minWidth}px` : minWidth
    const resolvedMinHeight = typeof minHeight === 'number' ? `${minHeight}px` : minHeight

    return (
      <div
        ref={ref}
        data-tone={tone}
        data-status={resolvedStatus}
        data-selected={selected ? 'true' : 'false'}
        data-motion={resolvedMotion}
        style={{
          width: resolvedWidth,
          height: resolvedHeight,
          minWidth: resolvedMinWidth,
          minHeight: resolvedMinHeight,
          ...style,
        }}
        className={cn(
          'relative overflow-visible rounded-[14px] border p-1 shadow-[var(--abc-shadow-card)] transition-[border-color,box-shadow,transform] duration-[var(--abc-motion-fast,140ms)] ease-out',
          fillContainer && 'flex flex-col',
          toneTokens.cardShell,
          statusRingClass,
          selected && 'shadow-md',
          className
        )}
        {...rest}
      >
        {/* 外部挂载的入口 Handle（如 ReactFlow target Handle） */}
        {inputHandle}

        {/* 节点顶部悬浮微操作条插槽 */}
        {toolbar && (
          <div className="nodrag nopan absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2">
            {toolbar}
          </div>
        )}

        {/* 柔和浅色卡头：主图标 + 单行标题 + 副图标/操作区 */}
        <div
          className={cn(
            'flex items-center justify-between gap-2 px-2 py-1.5',
            headerClassName
          )}
        >
          <div className="flex min-w-0 flex-1 items-center gap-1.5">
            {icon && (
              <span
                className={cn(
                  'inline-flex h-4 w-4 shrink-0 items-center justify-center',
                  toneTokens.headerText
                )}
              >
                {icon}
              </span>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span
                  className={cn(
                    'truncate text-xs font-semibold leading-tight',
                    toneTokens.headerText
                  )}
                >
                  {title}
                </span>
                {badge && <span className="shrink-0">{badge}</span>}
              </div>
              {subtitle !== undefined && (
                <div className="truncate text-[10.5px] leading-tight text-[var(--abc-fg-muted)]">
                  {subtitle}
                </div>
              )}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {resolvedStatus === 'running' && (
              <span
                aria-label="运行中"
                data-flow-status-indicator="running"
                className="relative inline-flex h-2 w-2 shrink-0"
              >
                {resolvedMotion !== 'none' && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
            )}
            {resolvedStatus === 'error' && (
              <span
                aria-label="执行异常"
                data-flow-status-indicator="error"
                className="inline-flex h-2 w-2 shrink-0 rounded-full bg-rose-500"
              />
            )}
            {resolvedStatus === 'success' && (
              <span
                aria-label="执行成功"
                data-flow-status-indicator="success"
                className="inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500"
              />
            )}
            {headerExtra && (
              <div className="nodrag nopan flex items-center gap-1">{headerExtra}</div>
            )}
          </div>
        </div>

        {/* 内嵌语义正文面：随 --abc-bg-surface / --abc-fg 自动适配亮暗双主题 */}
        {hasBodyContent && (
          <div
            className={cn(
              'overflow-visible rounded-[10px] border border-[var(--abc-border)]/70 bg-[var(--abc-bg-surface)] px-2.5 py-2 text-[var(--abc-fg)]',
              fillContainer && 'flex min-h-0 flex-1 flex-col justify-between',
              bodyClassName
            )}
          >
            {hasSubHeader && (
              <div className="mb-1.5 flex items-center justify-between gap-2 text-[11px] text-[var(--abc-fg-muted)]">
                <div className="flex min-w-0 items-center gap-1.5">
                  {subIcon && (
                    <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-[var(--abc-fg-secondary)]">
                      {subIcon}
                    </span>
                  )}
                  {subTitle !== undefined && (
                    <span className="truncate font-medium text-[var(--abc-fg-secondary)]">
                      {subTitle}
                    </span>
                  )}
                </div>
                {subExtra && (
                  <div className="flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]">
                    {subExtra}
                  </div>
                )}
              </div>
            )}

            {visibleMetaRows.length > 0 && (
              <div className="space-y-1">
                {visibleMetaRows.map((row, index) => (
                  <div
                    key={row.key ?? String(index)}
                    title={row.title}
                    className="flex min-w-0 items-center gap-1.5 text-[11.5px] leading-snug text-[var(--abc-fg-secondary)]"
                  >
                    {row.icon && (
                      <span className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center text-[var(--abc-fg-muted)]">
                        {row.icon}
                      </span>
                    )}
                    {row.label !== undefined && (
                      <span className="shrink-0 text-[var(--abc-fg-muted)]">{row.label}</span>
                    )}
                    <span
                      className={cn(
                        'min-w-0 flex-1 truncate text-[var(--abc-fg)]',
                        row.mono && 'font-mono text-[11px]'
                      )}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {children && (
              <div className={cn(visibleMetaRows.length > 0 && 'mt-2', 'text-xs')}>
                {children}
              </div>
            )}

            {outputs && outputs.length > 0 && (
              <div
                data-flow-outputs=""
                className={cn(
                  'space-y-0.5',
                  (visibleMetaRows.length > 0 || React.Children.count(children) > 0 || hasSubHeader) &&
                    'mt-2 border-t border-[var(--abc-border)]/70 pt-1.5'
                )}
              >
                {outputs.map((port) => {
                  const portTone: FlowPortTone = port.tone ?? 'neutral'
                  const portStyles = FLOW_PORT_TONE_STYLES[portTone]
                  const renderedHandle =
                    port.handle !== undefined ? port.handle : renderOutputHandle?.(port)
                  const shouldShowDot =
                    port.showDot !== undefined ? port.showDot : !renderedHandle

                  return (
                    <div
                      key={port.id}
                      data-port-id={port.id}
                      data-port-tone={portTone}
                      className={cn(
                        // 右侧外延 -mr-3.5 与外框 p-1 + 内层 px-2.5 (4+10=14px) 精准齐平卡片外右缘，
                        // 使直接挂载于本行的 ReactFlow <Handle position={Position.Right} /> 落点精确贴边
                        'relative -mr-3.5 flex items-center justify-end gap-1.5 py-0.5 pl-2 pr-3.5 text-[11.5px] leading-snug',
                        port.disabled && 'opacity-45',
                        port.className
                      )}
                    >
                      {port.hint && (
                        <span className="truncate text-[10.5px] text-[var(--abc-fg-muted)]">
                          {port.hint}
                        </span>
                      )}
                      {port.icon && (
                        <span className={cn('inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center', portStyles.text)}>
                          {port.icon}
                        </span>
                      )}
                      <span className="truncate font-medium text-[var(--abc-fg-secondary)]">
                        {port.label}
                      </span>

                      {shouldShowDot && (
                        <span
                          aria-hidden="true"
                          data-port-dot={portTone}
                          className={cn(
                            'pointer-events-none absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-[var(--abc-bg-surface)]',
                            portStyles.dot
                          )}
                        />
                      )}

                      {renderedHandle}
                    </div>
                  )
                })}
              </div>
            )}

            {footer && (
              <div className="mt-2 border-t border-[var(--abc-border)]/70 pt-1.5">
                {footer}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
)

FlowNodeCard.displayName = 'FlowNodeCard'
export default FlowNodeCard
