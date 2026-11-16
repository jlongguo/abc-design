import {
MoreHorizontal
} from 'lucide-react'
import React,{ useLayoutEffect,useRef,useState } from 'react'
import Button,{ type ButtonVariant } from '../../components/button/Button'
import { Dropdown } from '../../components/display/Overlays'
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

export const ProRowActionsOverflow: React.FC<{
  actions: ResolvedRowActionItem[]
  maxInline?: number
  /** 在真实浏览器列宽受限时动态测量子按钮实际宽度自适应收纳（jsdom 宽度为 0 时回退至 maxInline） */
  autoFit?: boolean
  align?: 'left' | 'right'
}> = ({ actions, maxInline = 3, autoFit = true, align = 'right' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)
  const [measuredVisibleCount, setMeasuredVisibleCount] = useState<number | null>(null)

  const actionKeysSig = actions.map((a) => a.key).join('|')

  useLayoutEffect(() => {
    if (!autoFit || actions.length <= 1) {
      setMeasuredVisibleCount(null)
      return
    }
    const containerEl = containerRef.current
    const measureEl = measureRef.current
    if (!containerEl || !measureEl) return

    const recalculate = () => {
      const availableWidth = containerEl.clientWidth
      // 无布局引擎的测试环境（clientWidth === 0）回退到固定 maxInline 逻辑
      if (availableWidth <= 0) {
        setMeasuredVisibleCount(null)
        return
      }
      const children = Array.from(measureEl.children) as HTMLElement[]
      if (children.length === 0) return

      const gap = 4
      const moreBtnWidth = 30
      const widths = children.map((el) => el.offsetWidth)
      const totalWidth =
        widths.reduce((acc, w) => acc + w, 0) + Math.max(0, widths.length - 1) * gap

      if (totalWidth <= availableWidth) {
        setMeasuredVisibleCount(Math.min(actions.length, maxInline))
        return
      }

      let used = 0
      let fitCount = 0
      for (let i = 0; i < widths.length; i++) {
        const nextUsed = (i > 0 ? used + gap : 0) + widths[i]
        if (nextUsed + gap + moreBtnWidth <= availableWidth) {
          used = nextUsed
          fitCount = i + 1
        } else {
          break
        }
      }
      setMeasuredVisibleCount(Math.min(fitCount, Math.max(1, maxInline - 1)))
    }

    recalculate()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => recalculate())
    observer.observe(containerEl)
    return () => observer.disconnect()
  }, [autoFit, actionKeysSig, actions.length, maxInline])

  if (actions.length === 0) return <span className="text-[var(--abc-fg-placeholder)]">-</span>

  const renderInlineBtn = (act: ResolvedRowActionItem) => (
    <Button
      key={act.key}
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
  )

  const defaultInlineCount =
    actions.length <= maxInline ? actions.length : Math.max(1, maxInline - 1)
  const effectiveVisibleCount = measuredVisibleCount ?? defaultInlineCount
  const inlineList = actions.slice(0, effectiveVisibleCount)
  const overflowList = actions.slice(effectiveVisibleCount)

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex w-full min-w-0 items-center gap-1 whitespace-nowrap',
        align === 'right' ? 'justify-end' : 'justify-start'
      )}
    >
      {autoFit && actions.length > 1 && (
        <div
          ref={measureRef}
          aria-hidden="true"
          className="pointer-events-none invisible fixed -top-[9999px] -left-[9999px] flex items-center gap-1 whitespace-nowrap"
        >
          {actions.map(renderInlineBtn)}
        </div>
      )}

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
            onClick: act.onClick,
          }))}
        >
          <button
            type="button"
            aria-label="更多操作"
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
          >
            <MoreHorizontal className="h-3.5 w-3.5" />
          </button>
        </Dropdown>
      )}
    </div>
  )
}

/* ==================== 5. 悬浮毛玻璃批量操作胶囊栏 ==================== */

