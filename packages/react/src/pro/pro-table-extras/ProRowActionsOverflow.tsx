import { MoreHorizontal } from 'lucide-react'
import React, { useLayoutEffect, useRef, useState } from 'react'
import Button, { type ButtonVariant } from '../../components/button/Button'
import { Dropdown, type DropdownMenuItem } from '../../components/display/Overlays'
import { cn } from '../../utils/cn'

export interface ResolvedRowActionItem {
  key: string
  label?: React.ReactNode
  icon?: React.ReactNode
  danger?: boolean
  disabled?: boolean
  title?: string
  variant?: ButtonVariant
  className?: string
  onClick: () => void
}

const ACTION_GAP_PX = 4
const MORE_TRIGGER_WIDTH_PX = 28

/**
 * 根据操作列当前可用像素宽度与各按钮自然宽度，计算可内联展示的按钮数量（0..N）：
 * - 当所有按钮总宽 <= availableWidth 且未超出 maxInline 时，全量内联展示（不渲染三个点）；
 * - 当宽度不足时，预留三个点按钮宽度（28px），随列宽逐一展示可容纳的前 K 项，极限窄宽返回 0（仅展示三个点）。
 */
export function computeAutoFitVisibleCount(
  availableWidth: number,
  widths: number[],
  maxInline?: number
): number {
  const count = widths.length
  if (count === 0) return 0
  const cap = maxInline !== undefined ? Math.max(0, maxInline) : count
  const totalWidth =
    widths.reduce((acc, w) => acc + w, 0) + Math.max(0, count - 1) * ACTION_GAP_PX

  if (count <= cap && totalWidth <= availableWidth) {
    return count
  }

  const maxWithEllipsis =
    maxInline !== undefined ? Math.min(count - 1, Math.max(0, maxInline - 1)) : count - 1

  let used = 0
  let fitCount = 0
  for (let i = 0; i < maxWithEllipsis; i++) {
    const nextUsed = (i === 0 ? 0 : used + ACTION_GAP_PX) + widths[i]
    if (nextUsed + ACTION_GAP_PX + MORE_TRIGGER_WIDTH_PX <= availableWidth) {
      used = nextUsed
      fitCount = i + 1
    } else {
      break
    }
  }
  return fitCount
}

function extractNodeTextSignature(node: React.ReactNode): string {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractNodeTextSignature).join('')
  if (React.isValidElement(node)) {
    const props = node.props as Record<string, unknown>
    return extractNodeTextSignature(props.children as React.ReactNode)
  }
  return ''
}

function flattenActionChildren(node: React.ReactNode, acc: React.ReactElement[] = []): React.ReactElement[] {
  React.Children.forEach(node, (child) => {
    if (!React.isValidElement(child)) return
    if (child.type === React.Fragment) {
      const fragProps = child.props as { children?: React.ReactNode }
      flattenActionChildren(fragProps.children, acc)
    } else {
      acc.push(child)
    }
  })
  return acc
}

function unwrapActionElements(children: React.ReactNode): React.ReactElement[] | null {
  if (children == null || typeof children === 'boolean') return []
  if (typeof children === 'string' || typeof children === 'number') return null

  if (React.isValidElement(children)) {
    if (children.type === ProRowActionsOverflow || children.type === ProAdaptiveActionCell) {
      return null
    }
    if (
      children.type === React.Fragment ||
      (typeof children.type === 'string' && (children.type === 'div' || children.type === 'span'))
    ) {
      const containerProps = children.props as { children?: React.ReactNode }
      const rawArray = React.Children.toArray(containerProps.children)
      const hasPlainText = rawArray.some(
        (item) => typeof item === 'string' && item.trim().length > 0
      )
      if (hasPlainText) return null
      return flattenActionChildren(containerProps.children)
    }
    return [children]
  }

  if (Array.isArray(children)) {
    return flattenActionChildren(children)
  }

  return null
}

function MoreActionsTrigger({ label = '更多操作' }: { label?: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
    >
      <MoreHorizontal className="h-3.5 w-3.5" />
    </button>
  )
}

export const ProRowActionsOverflow: React.FC<{
  actions: ResolvedRowActionItem[]
  maxInline?: number
  /** 在真实浏览器列宽受限时动态测量子按钮实际宽度自适应收纳（jsdom 宽度为 0 时回退至 jsdomFallbackMax） */
  autoFit?: boolean
  jsdomFallbackMax?: number
  align?: 'left' | 'right'
  moreLabel?: string
}> = ({
  actions,
  maxInline,
  autoFit = true,
  jsdomFallbackMax = 3,
  align = 'right',
  moreLabel = '更多操作',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const widthsCacheRef = useRef<{ sig: string; widths: number[] } | null>(null)
  const lastWidthRef = useRef<number | null>(null)
  const remeasureGuardRef = useRef<{ sig: string; attempts: number }>({ sig: '', attempts: 0 })
  const [measured, setMeasured] = useState<{ sig: string; count: number } | null>(null)

  const actionSig = actions
    .map((a) => `${a.key}:${extractNodeTextSignature(a.label)}:${a.disabled ? '1' : '0'}`)
    .join('|')

  const effectiveFallbackMax = maxInline ?? jsdomFallbackMax
  const defaultInlineCount =
    actions.length <= effectiveFallbackMax
      ? actions.length
      : Math.max(1, effectiveFallbackMax - 1)
  const needsRemeasure = measured === null

  useLayoutEffect(() => {
    if (!autoFit || actions.length === 0) {
      widthsCacheRef.current = null
      lastWidthRef.current = null
      return
    }
    if (remeasureGuardRef.current.sig !== actionSig) {
      remeasureGuardRef.current = { sig: actionSig, attempts: 0 }
      lastWidthRef.current = null
    }
    const containerEl = containerRef.current
    if (!containerEl) return

    const syncLayout = (fromResizeObserver: boolean) => {
      const availableWidth = containerEl.clientWidth
      if (
        fromResizeObserver &&
        lastWidthRef.current !== null &&
        Math.abs(availableWidth - lastWidthRef.current) <= 1
      ) {
        return
      }
      lastWidthRef.current = availableWidth

      if (availableWidth <= 0) {
        setMeasured((prev) =>
          prev?.sig === actionSig && prev.count === defaultInlineCount
            ? prev
            : { sig: actionSig, count: defaultInlineCount }
        )
        return
      }

      let widths =
        widthsCacheRef.current?.sig === actionSig ? widthsCacheRef.current.widths : null

      if (!widths) {
        const nodes = Array.from(
          containerEl.querySelectorAll<HTMLElement>('[data-action-item]')
        )
        if (nodes.length < actions.length) {
          // 从隐藏容器恢复可见时触发最多 2 次完整测量渲染，彻底杜绝布局抖动死循环
          if (remeasureGuardRef.current.attempts < 2) {
            remeasureGuardRef.current.attempts += 1
            setMeasured(null)
          }
          return
        }
        const rawWidths = nodes.map((el) => el.offsetWidth)
        widths = rawWidths.map((w) => (w > 0 ? w : 48))
        widthsCacheRef.current = { sig: actionSig, widths }
      }

      const nextCount = computeAutoFitVisibleCount(availableWidth, widths, maxInline)
      setMeasured((prev) =>
        prev?.sig === actionSig && prev.count === nextCount
          ? prev
          : { sig: actionSig, count: nextCount }
      )
    }

    syncLayout(false)
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => syncLayout(true))
    observer.observe(containerEl)
    return () => observer.disconnect()
  }, [autoFit, actionSig, actions.length, maxInline, defaultInlineCount, needsRemeasure])

  if (actions.length === 0) return <span className="text-[var(--abc-fg-placeholder)]">-</span>

  const renderInlineBtn = (act: ResolvedRowActionItem) => (
    <span key={act.key} data-action-item="" className="inline-flex shrink-0">
      <Button
        variant={act.variant ?? 'text'}
        size="xs"
        disabled={act.disabled}
        title={act.title}
        icon={act.icon}
        onClick={act.onClick}
        className={cn(
          act.danger && 'text-[var(--abc-danger)] enabled:hover:text-[var(--abc-danger)]',
          act.className
        )}
      >
        {act.label}
      </Button>
    </span>
  )

  const isMeasuredCurrent = measured?.sig === actionSig
  const effectiveVisibleCount = !autoFit
    ? defaultInlineCount
    : isMeasuredCurrent
      ? measured.count
      : actions.length

  const inlineList = actions.slice(0, effectiveVisibleCount)
  const overflowList = isMeasuredCurrent || !autoFit ? actions.slice(effectiveVisibleCount) : []

  return (
    <div
      ref={containerRef}
      data-slot="row-actions-overflow"
      onClick={(e) => e.stopPropagation()}
      className={cn(
        'relative flex w-full min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap',
        align === 'right' ? 'justify-end' : 'justify-start'
      )}
    >
      {inlineList.map(renderInlineBtn)}

      {overflowList.length > 0 && (
        <Dropdown
          placement="bottomRight"
          items={overflowList.map((act) => ({
            key: act.key,
            label: act.label ?? act.title ?? act.key,
            icon: act.icon,
            danger: act.danger,
            disabled: act.disabled,
            onClick: () => act.onClick(),
          }))}
        >
          <MoreActionsTrigger label={moreLabel} />
        </Dropdown>
      )}
    </div>
  )
}

/**
 * 自适应 JSX 操作列容器 (ProAdaptiveActionCell)
 * 自动接管自定义 `render` 操作列返回的按钮组，当列宽不足时逐一折叠至 `...` 下拉菜单，最小仅保留 `...`。
 */
export const ProAdaptiveActionCell: React.FC<{
  children: React.ReactNode
  align?: 'left' | 'right' | 'center'
  maxInline?: number
  moreLabel?: string
}> = ({ children, align = 'right', maxInline, moreLabel = '更多操作' }) => {
  const elements = unwrapActionElements(children)
  const hasElements = elements !== null
  const containerRef = useRef<HTMLDivElement>(null)
  const widthsCacheRef = useRef<{ sig: string; widths: number[] } | null>(null)
  const lastWidthRef = useRef<number | null>(null)
  const remeasureGuardRef = useRef<{ sig: string; attempts: number }>({ sig: '', attempts: 0 })
  const [measured, setMeasured] = useState<{ sig: string; count: number } | null>(null)

  const elementCount = elements?.length ?? 0
  const actionSig = elements
    ? elements
        .map((el, idx) => {
          const p = el.props as Record<string, unknown>
          const labelSig =
            extractNodeTextSignature(p.children as React.ReactNode) ||
            String(p['aria-label'] ?? p.title ?? '')
          return `${el.key ?? idx}:${labelSig}:${p.disabled ? '1' : '0'}`
        })
        .join('|')
    : ''

  const jsdomFallbackCount =
    maxInline !== undefined && elementCount > maxInline
      ? Math.max(1, maxInline - 1)
      : elementCount
  const needsRemeasure = measured === null

  useLayoutEffect(() => {
    if (!hasElements || elementCount === 0) {
      widthsCacheRef.current = null
      lastWidthRef.current = null
      return
    }
    if (remeasureGuardRef.current.sig !== actionSig) {
      remeasureGuardRef.current = { sig: actionSig, attempts: 0 }
      lastWidthRef.current = null
    }
    const containerEl = containerRef.current
    if (!containerEl) return

    const syncLayout = (fromResizeObserver: boolean) => {
      const availableWidth = containerEl.clientWidth
      if (
        fromResizeObserver &&
        lastWidthRef.current !== null &&
        Math.abs(availableWidth - lastWidthRef.current) <= 1
      ) {
        return
      }
      lastWidthRef.current = availableWidth

      if (availableWidth <= 0) {
        setMeasured((prev) =>
          prev?.sig === actionSig && prev.count === jsdomFallbackCount
            ? prev
            : { sig: actionSig, count: jsdomFallbackCount }
        )
        return
      }

      let widths =
        widthsCacheRef.current?.sig === actionSig ? widthsCacheRef.current.widths : null

      if (!widths) {
        const nodes = Array.from(
          containerEl.querySelectorAll<HTMLElement>('[data-action-item]')
        )
        if (nodes.length < elementCount) {
          // 仅在隐藏容器恢复可见时触发最多 2 次重测，防止 table-layout:auto 单元格收缩导致 REACT_INVARIANT_185
          if (remeasureGuardRef.current.attempts < 2) {
            remeasureGuardRef.current.attempts += 1
            setMeasured(null)
          }
          return
        }
        const rawWidths = nodes.map((el) => el.offsetWidth)
        widths = rawWidths.map((w) => (w > 0 ? w : 48))
        widthsCacheRef.current = { sig: actionSig, widths }
      }

      const nextCount = computeAutoFitVisibleCount(availableWidth, widths, maxInline)
      setMeasured((prev) =>
        prev?.sig === actionSig && prev.count === nextCount
          ? prev
          : { sig: actionSig, count: nextCount }
      )
    }

    syncLayout(false)
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => syncLayout(true))
    observer.observe(containerEl)
    return () => observer.disconnect()
  }, [actionSig, elementCount, hasElements, jsdomFallbackCount, maxInline, needsRemeasure])

  if (elements === null) {
    return <>{children}</>
  }

  if (elements.length === 0) {
    return null
  }

  const isMeasuredCurrent = measured?.sig === actionSig
  const effectiveVisibleCount = isMeasuredCurrent ? measured.count : elements.length
  const inlineElements = elements.slice(0, effectiveVisibleCount)
  const overflowElements = isMeasuredCurrent ? elements.slice(effectiveVisibleCount) : []

  const dropdownItems: DropdownMenuItem[] = overflowElements.map((el, idx) => {
    const props = el.props as {
      children?: React.ReactNode
      icon?: React.ReactNode
      leftIcon?: React.ReactNode
      variant?: string
      className?: string
      disabled?: boolean
      asChild?: boolean
      title?: string
      'aria-label'?: string
      onClick?: (e: React.MouseEvent<HTMLElement>) => void
    }
    const key = String(el.key ?? `overflow_${effectiveVisibleCount + idx}`)
    const isDanger =
      props.variant === 'danger' ||
      props.variant === 'destructive' ||
      (typeof props.className === 'string' &&
        /text-(destructive|red-|rose-)|abc-danger/.test(props.className))
    const hasText = extractNodeTextSignature(props.children).trim().length > 0
    const fallbackLabel = props['aria-label'] || props.title || key

    if (props.asChild && React.isValidElement(props.children)) {
      const childLink = props.children as React.ReactElement<{
        className?: string
        onClick?: (e: React.MouseEvent<HTMLElement>) => void
      }>
      return {
        key,
        label: fallbackLabel,
        render: (close) =>
          React.cloneElement(childLink, {
            className: cn(
              'abc-motion-control flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs no-underline transition-colors cursor-pointer hover:bg-[var(--abc-bg-subtle)]',
              isDanger ? 'text-[var(--abc-danger)]' : 'text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]'
            ),
            onClick: (e: React.MouseEvent<HTMLElement>) => {
              e.stopPropagation()
              childLink.props.onClick?.(e)
              close()
            },
          }),
      }
    }

    return {
      key,
      icon: props.icon ?? props.leftIcon,
      danger: isDanger,
      disabled: Boolean(props.disabled),
      label: hasText ? (
        <span className="inline-flex items-center gap-1.5">{props.children}</span>
      ) : (
        <span className="inline-flex items-center gap-2">
          {props.children}
          <span>{fallbackLabel}</span>
        </span>
      ),
      onClick: (e) => {
        props.onClick?.(e)
      },
    }
  })

  return (
    <div
      ref={containerRef}
      data-slot="row-actions-overflow"
      onClick={(e) => e.stopPropagation()}
      className={cn(
        'relative flex w-full min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap',
        align === 'right' ? 'justify-end' : align === 'center' ? 'justify-center' : 'justify-start'
      )}
    >
      {inlineElements.map((el, idx) => (
        <span key={el.key ?? idx} data-action-item="" className="inline-flex shrink-0">
          {el}
        </span>
      ))}

      {dropdownItems.length > 0 && (
        <Dropdown placement="bottomRight" items={dropdownItems}>
          <MoreActionsTrigger label={moreLabel} />
        </Dropdown>
      )}
    </div>
  )
}
