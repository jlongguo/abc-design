import React from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { Check, Sparkles, X } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../../hooks'
import { cn } from '../../../utils/cn'
import Button from '../../button/Button'
import { DESC_TEXT, METRIC_VALUE_TEXT, SURFACE_PAD, TITLE_TEXT } from './shared'

export interface PricingFeatureItem {
  text: React.ReactNode
  included?: boolean
}

export interface PricingCardProps {
  tier: React.ReactNode
  price: React.ReactNode
  period?: React.ReactNode
  description?: React.ReactNode
  features: Array<PricingFeatureItem | string>
  recommended?: boolean
  badge?: React.ReactNode
  ctaText?: string
  disabled?: boolean
  loading?: boolean
  onSelect?: () => void
  size?: AbcSize
  motion?: AbcMotionPreset
  className?: string
}

/**
 * SaaS 租户套餐订阅对比卡 (PricingCard)
 */
export const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  price,
  period = '/ 月',
  description,
  features,
  recommended = false,
  badge = '推荐方案',
  ctaText = '选择此方案',
  disabled = false,
  loading = false,
  onSelect,
  size,
  motion,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)

  return (
    <article
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      className={cn(
        '@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]',
        SURFACE_PAD[resolvedSize],
        recommended
          ? 'border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15'
          : 'border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]',
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className={cn('font-bold text-[var(--abc-fg)]', TITLE_TEXT[resolvedSize])}>{tier}</h3>
          {recommended && badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]">
              <Sparkles className="h-2.5 w-2.5" />
              {badge}
            </span>
          )}
        </div>

        {description && (
          <p className={cn('mt-1.5 text-[var(--abc-fg-muted)]', DESC_TEXT[resolvedSize])}>
            {description}
          </p>
        )}

        <div className="mt-4 flex items-baseline gap-1 font-mono tabular-nums">
          <span className={cn('font-extrabold text-[var(--abc-fg)]', METRIC_VALUE_TEXT[resolvedSize])}>
            {price}
          </span>
          {period && <span className="text-xs text-[var(--abc-fg-muted)]">{period}</span>}
        </div>

        <ul className="mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4">
          {features.map((item, idx) => {
            const norm: PricingFeatureItem =
              typeof item === 'string' ? { text: item, included: true } : item
            const included = norm.included !== false
            return (
              <li
                key={idx}
                className={cn(
                  'flex items-start gap-2 text-xs',
                  included ? 'text-[var(--abc-fg-secondary)]' : 'text-[var(--abc-fg-placeholder)] line-through'
                )}
              >
                {included ? (
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" />
                ) : (
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" />
                )}
                <span>{norm.text}</span>
              </li>
            )
          })}
        </ul>
      </div>

      {onSelect && (
        <div className="mt-5">
          <Button
            variant={recommended ? 'primary' : 'secondary'}
            size={resolvedSize}
            motion={resolvedMotion}
            block
            disabled={disabled}
            loading={loading}
            onClick={onSelect}
          >
            {ctaText}
          </Button>
        </div>
      )}
    </article>
  )
}
