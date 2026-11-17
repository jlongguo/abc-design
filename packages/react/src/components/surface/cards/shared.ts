import type { AbcSize } from '@abc-design/tokens'

export const SURFACE_PAD: Record<AbcSize, string> = {
  xs: 'p-2.5',
  sm: 'p-3.5',
  md: 'p-4',
  lg: 'p-5',
}

export const TITLE_TEXT: Record<AbcSize, string> = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

export const DESC_TEXT: Record<AbcSize, string> = {
  xs: 'text-[11px]',
  sm: 'text-xs',
  md: 'text-xs',
  lg: 'text-sm',
}

export const METRIC_VALUE_TEXT: Record<AbcSize, string> = {
  xs: 'text-lg',
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
}

export const ICON_BOX_SIZE: Record<AbcSize, string> = {
  xs: 'h-7 w-7',
  sm: 'h-8 w-8',
  md: 'h-9 w-9',
  lg: 'h-11 w-11',
}
