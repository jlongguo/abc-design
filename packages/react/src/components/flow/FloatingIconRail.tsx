import React, { useCallback, useEffect, useId, useMemo, useRef } from 'react'
import type { AbcMotionPreset } from '@abc-design/tokens'
import { X } from 'lucide-react'
import { useAbcMotion } from '../../hooks/useAbcDefaults'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'

export type FloatingIconRailSide = 'left' | 'right'
export type FloatingIconRailSize = 'sm' | 'md'

export interface FloatingIconRailItem {
  /** 类目唯一标识 */
  key: string
  /** 图标下方短标签（建议 1~2 词或 2~4 汉字） */
  label: React.ReactNode
  /** 类目图标节点 */
  icon: React.ReactNode
  /** 可选原生 title / 读屏完整说明 */
  title?: string
  /** 可选右上角轻量角标（如数字或小红点） */
  badge?: React.ReactNode
  /** 是否禁用该类目 */
  disabled?: boolean
  /** 该类目展开时的默认 Flyout 内容插槽（优先级低于 renderFlyout） */
  content?: React.ReactNode
}

export interface FloatingIconRailProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 左侧垂直类目图标项列表 */
  items: ReadonlyArray<FloatingIconRailItem>
  /** 受控当前展开的类目 key（null 表示收起 Flyout） */
  activeKey?: string | null
  /** 非受控初始展开的类目 key（默认 null 收起） */
  defaultActiveKey?: string | null
  /** 展开/切换/收起类目回调 */
  onActiveKeyChange?: (key: string | null) => void
  /** 自定义 Flyout 浮层内容渲染器（优先于 item.content 与 flyoutContent） */
  renderFlyout?: (
    activeItem: FloatingIconRailItem,
    helpers: { close: () => void }
  ) => React.ReactNode
  /** 通用 Flyout 浮层内容回退插槽 */
  flyoutContent?: React.ReactNode
  /** 自定义 Flyout 头部（传 null 可隐藏内置头部） */
  flyoutHeader?:
    | React.ReactNode
    | ((activeItem: FloatingIconRailItem, helpers: { close: () => void }) => React.ReactNode)
  /** 是否显示内置 Flyout 标题栏与关闭按钮（默认 true） */
  showFlyoutHeader?: boolean
  /** Flyout 面板宽度（数字按 px 处理，默认 264） */
  flyoutWidth?: number | string
  /** 悬浮条停靠侧：left 表示条在左、Flyout 向右滑出；right 反之（默认 'left'） */
  side?: FloatingIconRailSide
  /** 图标栏紧凑尺寸档位（默认 'md'） */
  size?: FloatingIconRailSize
  /** 图标栏底部附加插槽（如设置/快捷帮助按钮） */
  footer?: React.ReactNode
  /** 点击悬浮条与 Flyout 外部区域时是否自动收起 Flyout（默认 true） */
  closeOnOutsideClick?: boolean
  /** 按下 Escape 键时是否自动收起 Flyout（默认 true） */
  closeOnEscape?: boolean
  /** 关闭按钮无障碍文案 */
  closeLabel?: string
  /** 微交互动效预设 */
  motion?: AbcMotionPreset
  /** 图标细条容器附加类名 */
  railClassName?: string
  /** 滑出 Flyout 浮层附加类名 */
  flyoutClassName?: string
}

const RAIL_SIZE_CLASSES: Record<
  FloatingIconRailSize,
  { rail: string; button: string; iconWrap: string; label: string }
> = {
  sm: {
    rail: 'w-[58px] p-1 gap-0.5 rounded-[var(--abc-radius-lg)]',
    button: 'px-1 py-1.5 gap-1 rounded-[var(--abc-radius-md)]',
    iconWrap: 'h-4 w-4',
    label: 'text-[10px] leading-tight',
  },
  md: {
    rail: 'w-[68px] p-1.5 gap-1 rounded-[var(--abc-radius-xl)]',
    button: 'px-1 py-2 gap-1 rounded-[var(--abc-radius-lg)]',
    iconWrap: 'h-[18px] w-[18px]',
    label: 'text-[10.5px] leading-tight',
  },
}

/**
 * 极简圆角白底悬浮图标细条 + 按需滑出 Flyout 浮层 (FloatingIconRail)
 * 适用于可视化画布、流程编排器与设计工具左侧类目入口，点击激活类目平滑滑出内容浮层，再次点击收起。
 */
export const FloatingIconRail = React.forwardRef<HTMLDivElement, FloatingIconRailProps>(
  (
    {
      items,
      activeKey: controlledActiveKey,
      defaultActiveKey = null,
      onActiveKeyChange,
      renderFlyout,
      flyoutContent,
      flyoutHeader,
      showFlyoutHeader = true,
      flyoutWidth = 264,
      side = 'left',
      size = 'md',
      footer,
      closeOnOutsideClick = true,
      closeOnEscape = true,
      closeLabel = '收起面板',
      motion,
      className,
      railClassName,
      flyoutClassName,
      'aria-label': ariaLabel = '画布类目工具栏',
      ...rest
    },
    ref
  ) => {
    const resolvedMotion = useAbcMotion(motion)
    const rootRef = useRef<HTMLDivElement | null>(null)
    const flyoutId = useId()

    const [activeKey, setActiveKey] = useControllableState<string | null>({
      value: controlledActiveKey,
      defaultValue: defaultActiveKey,
      onChange: onActiveKeyChange,
    })

    const setMergedRef = useCallback(
      (node: HTMLDivElement | null) => {
        rootRef.current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        }
      },
      [ref]
    )

    const activeItem = useMemo(
      () => (activeKey ? items.find((item) => item.key === activeKey && !item.disabled) ?? null : null),
      [activeKey, items]
    )

    const closeFlyout = useCallback(() => {
      setActiveKey(null)
    }, [setActiveKey])

    const handleToggleItem = useCallback(
      (item: FloatingIconRailItem) => {
        if (item.disabled) return
        setActiveKey(activeKey === item.key ? null : item.key)
      },
      [activeKey, setActiveKey]
    )

    const resolvedFlyoutBody = useMemo(() => {
      if (!activeItem) return null
      if (renderFlyout) {
        return renderFlyout(activeItem, { close: closeFlyout })
      }
      if (activeItem.content !== undefined) {
        return activeItem.content
      }
      return flyoutContent ?? null
    }, [activeItem, renderFlyout, flyoutContent, closeFlyout])

    const isFlyoutOpen = Boolean(activeItem && resolvedFlyoutBody !== null && resolvedFlyoutBody !== undefined)

    useEffect(() => {
      if (!isFlyoutOpen) return
      const handlePointerDown = (event: MouseEvent) => {
        if (!closeOnOutsideClick) return
        const target = event.target as Node | null
        if (target && rootRef.current?.contains(target)) return
        closeFlyout()
      }
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!closeOnEscape || event.key !== 'Escape') return
        event.stopPropagation()
        closeFlyout()
      }
      document.addEventListener('mousedown', handlePointerDown)
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('mousedown', handlePointerDown)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [isFlyoutOpen, closeOnOutsideClick, closeOnEscape, closeFlyout])

    const sizeTokens = RAIL_SIZE_CLASSES[size]
    const resolvedFlyoutWidth =
      typeof flyoutWidth === 'number' ? `${flyoutWidth}px` : flyoutWidth

    const renderHeaderNode = () => {
      if (!activeItem) return null
      if (flyoutHeader === null || !showFlyoutHeader) return null
      if (typeof flyoutHeader === 'function') {
        return flyoutHeader(activeItem, { close: closeFlyout })
      }
      if (flyoutHeader !== undefined) {
        return flyoutHeader
      }
      return (
        <div className="flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-3 py-2.5">
          <div className="flex min-w-0 items-center gap-2">
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]">
              {activeItem.icon}
            </span>
            <span className="truncate text-xs font-semibold text-[var(--abc-fg)]">
              {activeItem.label}
            </span>
          </div>
          <button
            type="button"
            onClick={closeFlyout}
            aria-label={closeLabel}
            className="inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )
    }

    const railNode = (
      <nav
        aria-label={ariaLabel}
        data-motion={resolvedMotion}
        className={cn(
          'nodrag nopan flex shrink-0 flex-col items-stretch border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-popover)] select-none',
          sizeTokens.rail,
          railClassName
        )}
      >
        {items.map((item) => {
          const isActive = activeItem?.key === item.key
          const accessibleTitle =
            item.title ?? (typeof item.label === 'string' ? item.label : undefined)
          return (
            <button
              key={item.key}
              type="button"
              disabled={item.disabled}
              title={accessibleTitle}
              aria-pressed={isActive}
              aria-expanded={isActive && isFlyoutOpen}
              aria-controls={isActive && isFlyoutOpen ? flyoutId : undefined}
              data-rail-key={item.key}
              data-active={isActive ? 'true' : 'false'}
              onClick={() => handleToggleItem(item)}
              className={cn(
                'group relative flex w-full flex-col items-center justify-center text-center transition-[color,background-color,box-shadow,transform] duration-[var(--abc-motion-fast,140ms)] ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                sizeTokens.button,
                item.disabled
                  ? 'cursor-not-allowed opacity-40'
                  : 'cursor-pointer',
                isActive
                  ? 'bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs'
                  : 'text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]'
              )}
            >
              <span
                className={cn(
                  'inline-flex shrink-0 items-center justify-center transition-transform duration-[var(--abc-motion-fast,140ms)]',
                  sizeTokens.iconWrap,
                  !item.disabled && 'group-hover:scale-105'
                )}
              >
                {item.icon}
              </span>
              <span className={cn('max-w-full truncate font-medium', sizeTokens.label)}>
                {item.label}
              </span>
              {item.badge !== undefined && item.badge !== null && (
                <span className="pointer-events-none absolute right-1 top-1 inline-flex min-w-[14px] items-center justify-center rounded-full bg-[var(--abc-primary)] px-1 text-[9px] font-semibold leading-[14px] text-[var(--abc-primary-fg)]">
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}

        {footer && (
          <div className="mt-1 border-t border-[var(--abc-border)] pt-1.5">
            {footer}
          </div>
        )}
      </nav>
    )

    const flyoutNode = isFlyoutOpen ? (
      <div
        id={flyoutId}
        role="region"
        aria-label={
          typeof activeItem?.label === 'string'
            ? `${activeItem.label} 面板`
            : '展开内容面板'
        }
        data-flow-rail-flyout="open"
        data-active-key={activeItem?.key}
        data-motion={resolvedMotion}
        style={{ width: resolvedFlyoutWidth }}
        className={cn(
          'nodrag nopan flex max-h-[min(70vh,520px)] flex-col overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-popover)]',
          resolvedMotion !== 'none' && 'abc-animate-popover-in',
          flyoutClassName
        )}
      >
        {renderHeaderNode()}
        <div className="min-h-0 flex-1 overflow-y-auto p-3">{resolvedFlyoutBody}</div>
      </div>
    ) : null

    return (
      <div
        ref={setMergedRef}
        data-side={side}
        className={cn(
          'relative inline-flex items-start gap-2.5',
          side === 'right' && 'flex-row-reverse',
          className
        )}
        {...rest}
      >
        {railNode}
        {flyoutNode}
      </div>
    )
  }
)

FloatingIconRail.displayName = 'FloatingIconRail'
export default FloatingIconRail
