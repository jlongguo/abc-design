import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Check, ChevronDown } from 'lucide-react'
import { useControllableState } from '../../hooks/useControllableState'
import { useFloatingPosition } from '../../hooks/useFloatingPosition'
import { cn } from '../../utils/cn'

interface RadixSelectContextValue {
  value: string
  setValue: (next: string, label?: React.ReactNode) => void
  open: boolean
  setOpen: (next: boolean) => void
  disabled: boolean
  triggerRef: React.RefObject<HTMLButtonElement | null>
  labelsMap: React.MutableRefObject<Map<string, React.ReactNode>>
  registerLabel: (val: string, label: React.ReactNode) => void
  labelTick: number
}

const RadixSelectContext = createContext<RadixSelectContextValue | null>(null)

export interface RadixSelectProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

/**
 * 零依赖复合下拉选择器 (RadixSelect / SelectTrigger / SelectValue / SelectContent / SelectItem)
 */
export function RadixSelect({
  value,
  defaultValue = '',
  onValueChange,
  disabled = false,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: RadixSelectProps) {
  const [selectedValue, setSelectedValue] = useControllableState<string>({
    value,
    defaultValue,
    onChange: onValueChange,
  })
  const [open, setOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  })
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const labelsMap = useRef<Map<string, React.ReactNode>>(new Map())
  const labelFingerprints = useRef<Map<string, string>>(new Map())
  const [labelTick, setLabelTick] = useState(0)

  const registerLabel = React.useCallback((val: string, label: React.ReactNode) => {
    const getFingerprint = (node: React.ReactNode): string => {
      if (node === null || node === undefined || typeof node === 'boolean') return ''
      if (typeof node === 'string' || typeof node === 'number') return String(node)
      if (Array.isArray(node)) return `[${node.map(getFingerprint).join('\u0000')}]`
      if (React.isValidElement(node)) {
        const typeName =
          typeof node.type === 'string'
            ? node.type
            : ((node.type as { displayName?: string; name?: string } | undefined)?.displayName ??
              (node.type as { name?: string } | undefined)?.name ??
              'el')
        const elProps = node.props as { children?: React.ReactNode } | null | undefined
        return `<${typeName}:${String(node.key ?? '')}>${getFingerprint(elProps?.children)}</${typeName}>`
      }
      return String(node)
    }

    if (labelsMap.current.get(val) === label) return
    const nextFingerprint = getFingerprint(label)
    const prevFingerprint = labelFingerprints.current.get(val)
    labelsMap.current.set(val, label)
    if (prevFingerprint !== nextFingerprint) {
      labelFingerprints.current.set(val, nextFingerprint)
      setLabelTick((t) => t + 1)
    }
  }, [])

  const setValue = React.useCallback(
    (next: string, label?: React.ReactNode) => {
      if (label !== undefined) labelsMap.current.set(next, label)
      setSelectedValue(next)
      setOpen(false)
    },
    [setOpen, setSelectedValue]
  )

  const contextValue = React.useMemo(
    () => ({
      value: selectedValue,
      setValue,
      open,
      setOpen,
      disabled,
      triggerRef,
      labelsMap,
      registerLabel,
      labelTick,
    }),
    [selectedValue, setValue, open, setOpen, disabled, registerLabel, labelTick]
  )

  return (
    <RadixSelectContext.Provider value={contextValue}>
      {children}
    </RadixSelectContext.Provider>
  )
}

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, disabled, onClick, ...props }, ref) => {
    const ctx = useContext(RadixSelectContext)
    const isDisabled = Boolean(disabled || ctx?.disabled)
    return (
      <button
        ref={(el) => {
          if (ctx) ctx.triggerRef.current = el
          if (typeof ref === 'function') ref(el)
          else if (ref) ref.current = el
        }}
        type="button"
        role="combobox"
        aria-expanded={ctx?.open ?? false}
        data-slot="radix-select-trigger"
        data-state={ctx?.open ? 'open' : 'closed'}
        disabled={isDisabled}
        onClick={(e) => {
          onClick?.(e)
          if (!isDisabled) ctx?.setOpen(!ctx.open)
        }}
        className={cn(
          'group flex h-9 w-full items-center justify-between gap-2 whitespace-nowrap rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-2 text-sm text-[var(--abc-fg)] shadow-2xs transition-colors hover:border-[var(--abc-border-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--abc-ring)] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          aria-hidden="true"
          data-open={ctx?.open ? 'true' : 'false'}
          className={cn(
            'abc-chevron h-4 w-4 shrink-0 text-[var(--abc-fg-muted)]',
            ctx?.open && 'text-[var(--abc-primary)]'
          )}
        />
      </button>
    )
  }
)
SelectTrigger.displayName = 'SelectTrigger'

export function SelectValue({ placeholder }: { placeholder?: React.ReactNode }) {
  const ctx = useContext(RadixSelectContext)
  if (!ctx) return <>{placeholder}</>
  void ctx.labelTick
  const label = ctx.labelsMap.current.get(ctx.value)
  return <span>{label ?? (ctx.value || placeholder || '')}</span>
}

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: 'popper' | 'item-aligned'
}

export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, style: propStyle, ...props }, ref) => {
    const ctx = useContext(RadixSelectContext)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const { style: floatStyle, portalContainer, portalTheme } = useFloatingPosition({
      open: Boolean(ctx?.open),
      triggerRef: ctx?.triggerRef as React.RefObject<HTMLElement | null>,
      floatingRef: contentRef,
      placement: 'bottomLeft',
      offset: 4,
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

    if (!ctx) return null
    const listBody = (
      <div
        ref={(el) => {
          contentRef.current = el
          if (typeof ref === 'function') ref(el)
          else if (ref) ref.current = el
        }}
        role="listbox"
        data-slot="radix-select-content"
        data-abc-theme={portalTheme}
        data-playground-theme={portalTheme}
        data-state={ctx.open ? 'open' : 'closed'}
        style={ctx.open ? { ...floatStyle, ...propStyle, pointerEvents: 'auto' } : undefined}
        className={cn(
          portalTheme === 'dark' && 'dark',
          portalTheme === 'light' && 'light',
          !ctx.open && 'hidden',
          'z-[1400] max-h-96 min-w-[8rem] overflow-auto rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-elevated,var(--abc-bg-surface))] p-1 text-[var(--abc-fg)] shadow-xl backdrop-blur-md pointer-events-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )

    if (!ctx.open) {
      return <div className="hidden">{children}</div>
    }
    const container = portalContainer || (typeof document !== 'undefined' ? document.body : null)
    return container ? createPortal(listBody, container) : listBody
  }
)
SelectContent.displayName = 'SelectContent'

export interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  disabled?: boolean
}

export const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(
  ({ value, disabled = false, className, children, onClick, ...props }, ref) => {
    const ctx = useContext(RadixSelectContext)
    const isSelected = ctx?.value === value
    const registerLabel = ctx?.registerLabel
    useEffect(() => {
      registerLabel?.(value, children)
    }, [registerLabel, value, children])

    return (
      <button
        ref={ref}
        type="button"
        role="option"
        aria-selected={isSelected}
        disabled={disabled}
        data-slot="radix-select-item"
        data-state={isSelected ? 'checked' : 'unchecked'}
        onClick={(e) => {
          if (disabled) return
          onClick?.(e)
          ctx?.setValue(value, children)
        }}
        className={cn(
          'relative flex w-full cursor-pointer select-none items-center rounded-md py-1.5 pl-2.5 pr-8 text-left text-sm outline-none transition-colors hover:bg-[var(--abc-bg-subtle)] disabled:pointer-events-none disabled:opacity-50',
          isSelected && 'font-medium text-[var(--abc-primary)]',
          className
        )}
        {...props}
      >
        <span className="truncate">{children}</span>
        {isSelected ? (
          <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center text-[var(--abc-primary)]">
            <Check className="h-4 w-4" aria-hidden="true" />
          </span>
        ) : null}
      </button>
    )
  }
)
SelectItem.displayName = 'SelectItem'

export const SelectGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <div role="group" data-slot="radix-select-group" {...props}>
    {children}
  </div>
)

export const SelectLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="radix-select-label"
    className={cn('px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]', className)}
    {...props}
  />
))
SelectLabel.displayName = 'SelectLabel'

export const SelectSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    data-slot="radix-select-separator"
    className={cn('-mx-1 my-1 h-px bg-[var(--abc-border)]', className)}
    {...props}
  />
))
SelectSeparator.displayName = 'SelectSeparator'

