import { Search } from 'lucide-react'
import * as React from 'react'
import { Input, type InputProps } from './Input'
import { cn } from '../../utils/cn'

export interface SearchInputProps extends Omit<InputProps, 'prefix'> {
  containerClassName?: string
  wrapperClassName?: string
  onClear?: () => void
  clearLabel?: string
}

/**
 * 统一定制搜索框组件 (SearchInput)
 * 基于 Input 的原生 prefix/suffix 机制，图标垂直精确居中，支持一键清空与回车监听
 */
export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className,
      containerClassName,
      wrapperClassName,
      onClear,
      clearLabel = 'Clear search',
      size = 'sm',
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('relative block min-w-[200px]', containerClassName, wrapperClassName)}>
        <Input
          ref={ref}
          size={size}
          allowClear={Boolean(onClear)}
          clearLabel={clearLabel}
          onClear={onClear}
          prefix={
            <Search
              className="h-3.5 w-3.5 text-[var(--abc-fg-muted)] shrink-0"
              aria-hidden="true"
            />
          }
          className={cn('text-xs', className)}
          {...props}
        />
      </div>
    )
  }
)
SearchInput.displayName = 'SearchInput'
