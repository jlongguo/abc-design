import React from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { AlertCircle, Check } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks'
import { cn } from '../../utils/cn'

export interface BreadcrumbItem {
  key?: string
  label: React.ReactNode
  href?: string
  icon?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  ariaLabel?: string
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
}

const BREADCRUMB_SIZE: Record<AbcSize, string> = {
  xs: 'text-[11px]',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

/**
 * 语义化面包屑导航 (Breadcrumb)
 * 遵循无障碍规范：<nav> + <ol> 有序层级列表，末项标记 aria-current="page"，
 * 分隔符通过 CSS ::before content: "/" / "" 注入，对读屏器静默无噪音。
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  ariaLabel = '面包屑导航',
  size,
  motion,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)
  if (!items || items.length === 0) return null

  return (
    <nav
      aria-label={ariaLabel}
      data-motion={resolvedMotion}
      className={cn('abc-breadcrumb', BREADCRUMB_SIZE[resolvedSize], className)}
    >
      <ol className="m-0 flex list-none flex-wrap items-center p-0">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={item.key ?? idx} className="inline-flex items-center">
              <a
                href={item.href ?? '#'}
                aria-current={isLast ? 'page' : undefined}
                onClick={(e) => {
                  if (!item.href || item.href === '#' || item.onClick) {
                    e.preventDefault()
                  }
                  if (!isLast) {
                    item.onClick?.(e)
                  }
                }}
                className={cn(
                  'abc-motion-control inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1 py-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                  isLast
                    ? 'font-semibold text-[var(--abc-fg)] cursor-default no-underline'
                    : 'text-[var(--abc-fg-muted)] underline-offset-4 hover:text-[var(--abc-primary)] hover:underline cursor-pointer'
                )}
              >
                {item.icon && <span className="inline-flex shrink-0">{item.icon}</span>}
                <span>{item.label}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export type StepStatus = 'wait' | 'process' | 'finish' | 'error'

export interface StepItem {
  key?: string
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  status?: StepStatus
  disabled?: boolean
}

export interface StepsProps {
  items: StepItem[]
  /** 当前激活步骤索引（从 0 开始） */
  current?: number
  /** 当前步骤整体状态 */
  status?: StepStatus
  direction?: 'horizontal' | 'vertical'
  size?: AbcSize
  motion?: AbcMotionPreset
  onChange?: (nextStepIndex: number) => void
  className?: string
}

const STEPS_CIRCLE_SIZE: Record<AbcSize, string> = {
  xs: 'h-5 w-5 text-[10px]',
  sm: 'h-6 w-6 text-xs',
  md: 'h-7 w-7 text-xs',
  lg: 'h-8 w-8 text-sm',
}

const STEPS_TITLE_SIZE: Record<AbcSize, string> = {
  xs: 'text-[11px] leading-5',
  sm: 'text-xs leading-6',
  md: 'text-sm leading-7',
  lg: 'text-base leading-8',
}

/**
 * 企业级分步引导条 (Steps)
 * 支持水平/垂直双向排布、错误中断态与可点击跳步
 */
export const Steps: React.FC<StepsProps> = ({
  items,
  current = 0,
  status = 'process',
  direction = 'horizontal',
  size,
  motion,
  onChange,
  className,
}) => {
  const isVertical = direction === 'vertical'
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)

  return (
    <ol
      data-motion={resolvedMotion}
      className={cn(
        'm-0 list-none p-0',
        isVertical ? 'flex flex-col gap-4' : 'flex flex-wrap items-start gap-3 sm:flex-nowrap',
        className
      )}
    >
      {items.map((item, idx) => {
        const resolvedStatus: StepStatus =
          item.status ??
          (idx < current ? 'finish' : idx === current ? status : 'wait')

        const isClickable = Boolean(onChange && !item.disabled)
        const isLast = idx === items.length - 1

        const circleClasses =
          resolvedStatus === 'finish'
            ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
            : resolvedStatus === 'process'
              ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
              : resolvedStatus === 'error'
                ? 'border-[var(--abc-danger)] bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]'
                : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]'

        return (
          <li
            key={item.key ?? idx}
            className={cn(
              'relative flex min-w-0',
              isVertical ? 'items-start gap-3' : 'flex-1 items-center gap-2.5'
            )}
          >
            <button
              type="button"
              disabled={!isClickable}
              onClick={() => isClickable && onChange?.(idx)}
              className={cn(
                'abc-motion-control group flex min-w-0 items-start gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-sm)]',
                isClickable ? 'cursor-pointer' : 'cursor-default'
              )}
            >
              <span
                className={cn(
                  'abc-motion-pop inline-flex shrink-0 items-center justify-center rounded-full border font-mono font-semibold transition-colors',
                  STEPS_CIRCLE_SIZE[resolvedSize],
                  circleClasses
                )}
              >
                {item.icon ? (
                  item.icon
                ) : resolvedStatus === 'finish' ? (
                  <Check className="h-3.5 w-3.5" />
                ) : resolvedStatus === 'error' ? (
                  <AlertCircle className="h-3.5 w-3.5" />
                ) : (
                  idx + 1
                )}
              </span>

              <span className="min-w-0">
                <span
                  className={cn(
                    'block font-semibold',
                    STEPS_TITLE_SIZE[resolvedSize],
                    resolvedStatus === 'wait'
                      ? 'text-[var(--abc-fg-muted)]'
                      : resolvedStatus === 'error'
                        ? 'text-[var(--abc-danger)]'
                        : 'text-[var(--abc-fg)]'
                  )}
                >
                  {item.title}
                </span>
                {item.description && (
                  <span className="mt-0.5 block text-[11px] leading-relaxed text-[var(--abc-fg-muted)]">
                    {item.description}
                  </span>
                )}
              </span>
            </button>

            {!isLast && !isVertical && (
              <span
                aria-hidden="true"
                className={cn(
                  'hidden h-px flex-1 sm:block',
                  idx < current ? 'bg-[var(--abc-primary)]' : 'bg-[var(--abc-border)]'
                )}
              />
            )}
          </li>
        )
      })}
    </ol>
  )
}
