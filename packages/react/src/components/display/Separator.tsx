import * as React from 'react'
import { cn } from '../../utils/cn'

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
}

/**
 * 语义分割线组件 (Separator)
 */
export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <div
      ref={ref}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      data-slot="separator"
      data-orientation={orientation}
      className={cn(
        'shrink-0 bg-[var(--abc-border)]',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = 'Separator'
