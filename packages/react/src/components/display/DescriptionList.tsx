import * as React from 'react'
import { Check, Copy } from 'lucide-react'
import { copyToClipboard } from '../typography/CopyableText'
import { cn } from '../../utils/cn'

export interface CopyableCodeProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: string
  displayValue?: React.ReactNode
  copyLabel?: string
  copiedLabel?: string
  hideCopyButton?: boolean
  codeClassName?: string
}

export const CopyableCode = React.forwardRef<HTMLSpanElement, CopyableCodeProps>(
  (
    {
      value,
      displayValue,
      copyLabel = '复制',
      copiedLabel = '已复制',
      hideCopyButton = false,
      className,
      codeClassName,
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      if (!value) return
      const ok = await copyToClipboard(value)
      if (ok) {
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
      }
    }

    return (
      <span
        ref={ref}
        data-slot="copyable-code"
        data-copied={copied ? 'true' : undefined}
        className={cn('inline-flex max-w-full items-center gap-1.5 align-baseline', className)}
        {...props}
      >
        <code
          title={value}
          className={cn(
            'break-all rounded bg-[var(--abc-bg-subtle,#f1f5f9)] px-1.5 py-0.5 font-mono text-xs text-[var(--abc-fg,#0f172a)]',
            codeClassName,
          )}
        >
          {displayValue ?? value}
        </code>
        {!hideCopyButton && value ? (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? copiedLabel : `${copyLabel}: ${value}`}
            title={copied ? copiedLabel : copyLabel}
            className={cn(
              'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-transparent text-[var(--abc-fg-muted,#64748b)] transition-all',
              'opacity-70 hover:border-[var(--abc-border,#e2e8f0)] hover:bg-[var(--abc-bg-muted,#f8fafc)] hover:text-[var(--abc-fg,#0f172a)] cursor-pointer',
              copied && 'border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 opacity-100',
            )}
          >
            {copied ? (
              <Check className="h-3 w-3 stroke-[2.5]" aria-hidden="true" />
            ) : (
              <Copy className="h-3 w-3 stroke-[2]" aria-hidden="true" />
            )}
          </button>
        ) : null}
      </span>
    )
  },
)
CopyableCode.displayName = 'CopyableCode'

export interface DescriptionItemData {
  key?: React.Key
  label: React.ReactNode
  value: React.ReactNode
  mono?: boolean
  copyValue?: string
  span?: 1 | 2 | 3 | 'full'
  className?: string
}

export interface DescriptionItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  label: React.ReactNode
  value?: React.ReactNode
  mono?: boolean
  copyValue?: string
  span?: 1 | 2 | 3 | 'full'
  variant?: 'default' | 'cards' | 'divided' | 'compact'
  valueClassName?: string
}

const spanClasses: Record<NonNullable<DescriptionItemProps['span']>, string> = {
  1: '',
  2: 'sm:col-span-2',
  3: 'sm:col-span-2 lg:col-span-3',
  full: 'col-span-full',
}

export const DescriptionItem = React.forwardRef<HTMLDivElement, DescriptionItemProps>(
  (
    {
      label,
      value,
      children,
      mono = false,
      copyValue,
      span = 1,
      variant = 'default',
      className,
      valueClassName,
      ...props
    },
    ref,
  ) => {
    const content = children ?? value
    return (
      <div
        ref={ref}
        data-slot="description-item"
        className={cn(
          'min-w-0',
          variant === 'cards' &&
            'rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-3 py-2.5 transition-colors hover:bg-[var(--abc-bg-muted,#f1f5f9)]',
          variant === 'divided' && 'border-b border-[var(--abc-border,#e2e8f0)] pb-2.5 last:border-b-0 last:pb-0',
          spanClasses[span],
          className,
        )}
        {...props}
      >
        <dt
          data-slot="description-term"
          className={cn(
            'text-xs font-medium text-[var(--abc-fg-muted,#64748b)]',
            variant === 'cards' && 'text-[11px] uppercase tracking-wider',
          )}
        >
          {label}
        </dt>
        <dd
          data-slot="description-details"
          className={cn(
            'mt-1 break-all text-xs text-[var(--abc-fg,#0f172a)]',
            variant === 'compact' && 'mt-0.5 text-xs',
            mono && 'font-mono text-xs',
            valueClassName,
          )}
        >
          {copyValue ? (
            <CopyableCode
              value={copyValue}
              displayValue={content}
              codeClassName="bg-transparent px-0 py-0 text-inherit"
            />
          ) : (
            content
          )}
        </dd>
      </div>
    )
  },
)
DescriptionItem.displayName = 'DescriptionItem'

export const DescriptionListItem = DescriptionItem
export type DescriptionListItemProps = DescriptionItemProps

export interface DescriptionListProps extends React.HTMLAttributes<HTMLDListElement> {
  columns?: 1 | 2 | 3 | 4
  variant?: 'default' | 'cards' | 'divided' | 'compact'
  density?: 'default' | 'compact'
  bordered?: boolean
  items?: DescriptionItemData[]
}

const columnClasses: Record<NonNullable<DescriptionListProps['columns']>, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

/**
 * 结构化元数据描述列表组件
 * 基于语义化 dl/dt/dd 标签，支持多列网格、卡片化、分隔线与紧凑排版
 */
export const DescriptionList = React.forwardRef<HTMLDListElement, DescriptionListProps>(
  ({ columns = 2, variant = 'default', density, bordered = false, items, children, className, ...props }, ref) => {
    const resolvedVariant = density === 'compact' && variant === 'default' ? 'compact' : variant
    return (
      <dl
        ref={ref}
        data-slot="description-list"
        className={cn(
          'grid',
          resolvedVariant === 'compact' ? 'gap-2.5' : 'gap-3.5',
          bordered && 'rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3',
          columnClasses[columns],
          className,
        )}
        {...props}
      >
        {items
          ? items.map((item, index) => (
              <DescriptionItem
                key={item.key ?? (typeof item.label === 'string' ? item.label : index)}
                label={item.label}
                value={item.value}
                mono={item.mono}
                copyValue={item.copyValue}
                span={item.span}
                variant={resolvedVariant}
                className={item.className}
              />
            ))
          : children}
      </dl>
    )
  },
)
DescriptionList.displayName = 'DescriptionList'
