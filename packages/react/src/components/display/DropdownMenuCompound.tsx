import React, { createContext, useContext, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useControllableState } from '../../hooks/useControllableState'
import { useFloatingPosition } from '../../hooks/useFloatingPosition'
import { cn } from '../../utils/cn'

interface DropdownMenuContextValue {
  open: boolean
  setOpen: (next: boolean) => void
  triggerRef: React.RefObject<HTMLElement | null>
}

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(null)

export interface DropdownMenuProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

/**
 * 复合下拉菜单容器 (DropdownMenu)
 */
export function DropdownMenu({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: DropdownMenuProps) {
  const [open, setOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  })
  const triggerRef = useRef<HTMLElement | null>(null)

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen, triggerRef }}>
      <div data-slot="dropdown-menu" className="relative inline-block">
        {children}
      </div>
    </DropdownMenuContext.Provider>
  )
}

export interface DropdownMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const DropdownMenuTrigger = React.forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ asChild = false, className, children, onClick, ...props }, ref) => {
    const ctx = useContext(DropdownMenuContext)
    const setRefs = (el: HTMLElement | null) => {
      if (ctx) ctx.triggerRef.current = el
      if (typeof ref === 'function') ref(el as HTMLButtonElement | null)
      else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = el
    }

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{
        className?: string
        onClick?: React.MouseEventHandler<HTMLElement>
      }>
      return React.cloneElement(child, {
        ...props,
        ref: setRefs,
        'aria-haspopup': 'menu',
        'aria-expanded': ctx?.open ?? false,
        'data-slot': 'dropdown-menu-trigger',
        'data-state': ctx?.open ? 'open' : 'closed',
        className: cn(child.props.className, className),
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onClick?.(e)
          onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>)
          if (!e.defaultPrevented) {
            ctx?.setOpen(!ctx.open)
          }
        },
      } as Record<string, unknown>)
    }

    return (
      <button
        ref={setRefs}
        type="button"
        aria-haspopup="menu"
        aria-expanded={ctx?.open ?? false}
        data-slot="dropdown-menu-trigger"
        data-state={ctx?.open ? 'open' : 'closed'}
        onClick={(e) => {
          onClick?.(e)
          if (!e.defaultPrevented) {
            ctx?.setOpen(!ctx.open)
          }
        }}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-xs font-medium cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger'

export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end'
  sideOffset?: number
}

export const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className, align = 'end', sideOffset = 4, children, style: propStyle, ...props }, ref) => {
    const ctx = useContext(DropdownMenuContext)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const { style: floatStyle, portalContainer } = useFloatingPosition({
      open: Boolean(ctx?.open),
      triggerRef: ctx?.triggerRef as React.RefObject<HTMLElement | null>,
      floatingRef: contentRef,
      placement: align === 'start' ? 'bottomLeft' : 'bottomRight',
      offset: sideOffset,
    })

    useEffect(() => {
      if (!ctx?.open) return
      const onEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') ctx.setOpen(false)
      }
      const onOutside = (e: MouseEvent) => {
        const t = e.target as Node
        if (ctx.triggerRef.current?.contains(t) || contentRef.current?.contains(t)) return
        ctx.setOpen(false)
      }
      document.addEventListener('keydown', onEsc)
      document.addEventListener('mousedown', onOutside)
      return () => {
        document.removeEventListener('keydown', onEsc)
        document.removeEventListener('mousedown', onOutside)
      }
    }, [ctx])

    if (!ctx?.open) return null
    const container = portalContainer || (typeof document !== 'undefined' ? document.body : null)
    if (!container) return null

    return createPortal(
      <div
        ref={(el) => {
          contentRef.current = el
          if (typeof ref === 'function') ref(el)
          else if (ref) ref.current = el
        }}
        role="menu"
        data-slot="dropdown-menu-content"
        data-state="open"
        style={{ ...floatStyle, ...propStyle, pointerEvents: 'auto' }}
        className={cn(
          'z-[1400] min-w-[8rem] overflow-hidden rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-elevated,var(--abc-bg-surface))] p-1.5 text-[var(--abc-fg)] shadow-xl backdrop-blur-md pointer-events-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>,
      container
    )
  }
)
DropdownMenuContent.displayName = 'DropdownMenuContent'

export interface DropdownMenuCompoundItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inset?: boolean
}

export const DropdownMenuCompoundItem = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuCompoundItemProps
>(({ className, inset, children, onClick, disabled, ...props }, ref) => {
  const ctx = useContext(DropdownMenuContext)
  return (
    <button
      ref={ref}
      type="button"
      role="menuitem"
      disabled={disabled}
      data-slot="dropdown-menu-item"
      data-disabled={disabled ? '' : undefined}
      onClick={(e) => {
        if (disabled) return
        onClick?.(e)
        ctx?.setOpen(false)
      }}
      className={cn(
        'relative flex w-full cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-left text-xs outline-none transition-colors hover:bg-[var(--abc-bg-subtle)] focus:bg-[var(--abc-bg-subtle)] disabled:pointer-events-none disabled:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})
DropdownMenuCompoundItem.displayName = 'DropdownMenuItem'

export const DropdownMenuGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <div role="group" data-slot="dropdown-menu-group" {...props}>
    {children}
  </div>
)

export const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="dropdown-menu-label"
    className={cn('px-2 py-1.5 text-xs font-semibold text-[var(--abc-fg-muted)]', inset && 'pl-8', className)}
    {...props}
  />
))
DropdownMenuLabel.displayName = 'DropdownMenuLabel'

export const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    data-slot="dropdown-menu-separator"
    className={cn('-mx-1 my-1 h-px bg-[var(--abc-border)]', className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator'

export const DropdownMenuShortcut: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => (
  <span
    data-slot="dropdown-menu-shortcut"
    className={cn('ml-auto text-[11px] tracking-widest opacity-60', className)}
    {...props}
  />
)

