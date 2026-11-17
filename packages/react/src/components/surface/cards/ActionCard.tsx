import React from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { useAbcMotion, useAbcSize } from '../../../hooks'
import { cn } from '../../../utils/cn'
import { DESC_TEXT, ICON_BOX_SIZE, SURFACE_PAD, TITLE_TEXT } from './shared'

export interface ActionCardProps {
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  tags?: string[]
  /** 独立右上角次要动作插槽（z-10 独立捕获点击，不触发整卡主跳转） */
  extra?: React.ReactNode
  href?: string
  target?: string
  disabled?: boolean
  onClick?: () => void
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
}

/**
 * 快捷入口与工作台导航卡片 (ActionCard)
 * 基于 ::after 拉伸点击热区实现语义化整卡可点击（主动作落在真实 <a> / <button> 上，次要按钮通过 z-10 隔离冒泡）
 */
export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  icon,
  tags,
  extra,
  href,
  target,
  disabled = false,
  onClick,
  size,
  motion,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const isInteractive = Boolean((href || onClick) && !disabled)

  const triggerClass =
    'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]'

  return (
    <article
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      className={cn(
        '@container relative flex flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        SURFACE_PAD[resolvedSize],
        isInteractive &&
          'abc-motion-surface cursor-pointer transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-primary)]/60 hover:shadow-sm',
        disabled && 'opacity-55 cursor-not-allowed',
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex min-w-0 items-center gap-2.5">
            {icon && (
              <span
                className={cn(
                  'inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]',
                  ICON_BOX_SIZE[resolvedSize]
                )}
              >
                {icon}
              </span>
            )}
            <h3 className={cn('min-w-0 truncate', TITLE_TEXT[resolvedSize])}>
              {href && !disabled ? (
                <a
                  href={href}
                  target={target}
                  rel={target === '_blank' ? 'noreferrer' : undefined}
                  onClick={() => onClick?.()}
                  className={cn(triggerClass, 'hover:text-[var(--abc-primary)]')}
                >
                  {title}
                </a>
              ) : onClick && !disabled ? (
                <button
                  type="button"
                  onClick={onClick}
                  className={cn(triggerClass, 'cursor-pointer hover:text-[var(--abc-primary)]')}
                >
                  {title}
                </button>
              ) : (
                title
              )}
            </h3>
          </div>

          {extra && <div className="relative z-10 flex shrink-0 items-center gap-1">{extra}</div>}
        </div>

        {description && (
          <p className={cn('mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]', DESC_TEXT[resolvedSize])}>
            {description}
          </p>
        )}
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--abc-radius-xs)] border border-[var(--abc-border-subtle)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--abc-fg-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
