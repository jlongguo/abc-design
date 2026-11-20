import React from 'react'
import { cn } from '@abc-design/react'
import { FLOW_TONE_STYLES, type FlowTone } from './flowTokens'

export type FlowSectionFrameAlign = 'center' | 'top-left'

export interface FlowSectionFrameProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 分组框标题（支持文本或自定义节点） */
  title?: React.ReactNode
  /** 可选辅助说明文案 */
  description?: React.ReactNode
  /** 标题前置图标 */
  icon?: React.ReactNode
  /** 标题旁徽标 */
  badge?: React.ReactNode
  /** 右上角附加操作区（仅在顶部对齐或存在 children 时展示在右上角） */
  headerExtra?: React.ReactNode
  /** 柔和语义色调（默认 'slate'） */
  tone?: FlowTone
  /** 标题排版对齐方式：无 children 默认 'center'（注释卡片风），有 children 默认 'top-left'（分组包裹框） */
  align?: FlowSectionFrameAlign
  /** 是否使用虚线边框（默认 true） */
  dashed?: boolean
  /** 画布选中态高亮边框 */
  selected?: boolean
  /** 自定义宽度（数字按 px 处理） */
  width?: number | string
  /** 自定义高度（数字按 px 处理） */
  height?: number | string
  /** 最小宽度 */
  minWidth?: number | string
  /** 最小高度 */
  minHeight?: number | string
  /** 标题区附加类名 */
  headerClassName?: string
  /** 内容区附加类名 */
  bodyClassName?: string
}

function toCssSize(value: number | string | undefined): string | undefined {
  if (value === undefined) return undefined
  return typeof value === 'number' ? `${value}px` : value
}

/**
 * Flow 画布圆角虚线视觉分组注释框 (FlowSectionFrame)
 * 支持空注释说明块（居中排版，如画布左下角分组标注）与包裹子节点的分区容器（左上角标题栏 + 内容区）双形态。
 */
export const FlowSectionFrame = React.forwardRef<HTMLDivElement, FlowSectionFrameProps>(
  (
    {
      title,
      description,
      icon,
      badge,
      headerExtra,
      tone = 'slate',
      align,
      dashed = true,
      selected = false,
      width,
      height,
      minWidth = 220,
      minHeight = 148,
      className,
      headerClassName,
      bodyClassName,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const hasChildren = React.Children.count(children) > 0
    const resolvedAlign: FlowSectionFrameAlign = align ?? (hasChildren ? 'top-left' : 'center')
    const toneTokens = FLOW_TONE_STYLES[tone]

    const mergedStyle: React.CSSProperties = {
      width: toCssSize(width),
      height: toCssSize(height),
      minWidth: toCssSize(minWidth),
      minHeight: toCssSize(minHeight),
      ...style,
    }

    const isCentered = resolvedAlign === 'center' && !hasChildren

    return (
      <div
        ref={ref}
        data-tone={tone}
        data-align={resolvedAlign}
        data-selected={selected ? 'true' : 'false'}
        style={mergedStyle}
        className={cn(
          'relative flex flex-col rounded-[var(--abc-radius-xl)] border-[1.5px] transition-[border-color,box-shadow,background-color] duration-[var(--abc-motion-fast,140ms)] ease-out',
          dashed ? 'border-dashed' : 'border-solid',
          toneTokens.sectionFrame,
          selected && 'ring-2 ring-[var(--abc-primary)] border-[var(--abc-primary)]',
          isCentered ? 'items-center justify-center p-5 text-center' : 'px-3.5 py-3 text-left',
          className
        )}
        {...rest}
      >
        {(title !== undefined || description !== undefined || icon || badge || headerExtra) && (
          <div
            className={cn(
              isCentered
                ? 'flex max-w-[260px] flex-col items-center gap-1.5'
                : cn(
                    'flex w-full justify-between gap-2',
                    description !== undefined ? 'items-start' : 'items-center',
                  ),
              headerClassName
            )}
          >
            <div
              className={cn(
                'min-w-0',
                isCentered ? 'flex flex-col items-center gap-1' : 'flex-1 space-y-0.5'
              )}
            >
              {(icon || title !== undefined || badge) && (
                <div
                  className={cn(
                    'flex min-w-0 items-center gap-1.5',
                    isCentered ? 'justify-center' : 'justify-start'
                  )}
                >
                  {icon && (
                    <span className={cn('inline-flex shrink-0 items-center', toneTokens.sectionTitle)}>
                      {icon}
                    </span>
                  )}
                  {title !== undefined && (
                    <div
                      title={typeof title === 'string' ? title : undefined}
                      className={cn(
                        'font-medium leading-snug',
                        isCentered
                          ? 'text-[15px]'
                          : 'min-w-0 truncate whitespace-nowrap text-xs font-semibold',
                        toneTokens.sectionTitle
                      )}
                    >
                      {title}
                    </div>
                  )}
                  {badge && <span className="shrink-0">{badge}</span>}
                </div>
              )}

              {description !== undefined && (
                <p
                  className={cn(
                    'm-0 text-xs leading-relaxed text-[var(--abc-fg-muted)]',
                    isCentered && 'max-w-[240px]'
                  )}
                >
                  {description}
                </p>
              )}
            </div>

            {headerExtra && (
              <div
                className={cn(
                  'nodrag nopan shrink-0',
                  isCentered && 'absolute right-3 top-3'
                )}
              >
                {headerExtra}
              </div>
            )}
          </div>
        )}

        {hasChildren && (
          <div className={cn('mt-3 min-h-0 flex-1', bodyClassName)}>{children}</div>
        )}
      </div>
    )
  }
)

FlowSectionFrame.displayName = 'FlowSectionFrame'
export default FlowSectionFrame
