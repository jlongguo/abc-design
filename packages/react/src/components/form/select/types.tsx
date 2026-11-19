import type { AbcMotionPreset } from '@abc-design/tokens'
import React from 'react'
import { RichIconText } from '../../display/IconBadge'
import { tokenizeEmojiSegments } from '../../display/semanticIcons'
import type { ControlSize } from '../Input'

export interface SelectOption {
  label: React.ReactNode
  value: string | number
  disabled?: boolean
  description?: string
  group?: string
}

export interface ParsedSelectOption {
  value: string
  rawValue: string | number
  label: React.ReactNode
  textLabel: string
  disabled: boolean
  description?: string
  group?: string
}

export function flattenNodeText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(flattenNodeText).join('')
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return flattenNodeText(node.props.children)
  }
  return ''
}

export function parseSelectChildren(
  children: React.ReactNode,
  groupLabel?: string
): ParsedSelectOption[] {
  const result: ParsedSelectOption[] = []
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return
    if (child.type === React.Fragment) {
      const fragProps = child.props as { children?: React.ReactNode }
      result.push(...parseSelectChildren(fragProps.children, groupLabel))
      return
    }
    if (child.type === 'optgroup') {
      const groupProps = child.props as { label?: string; children?: React.ReactNode }
      result.push(...parseSelectChildren(groupProps.children, groupProps.label ?? ''))
      return
    }
    if (child.type === 'option') {
      const optProps = child.props as {
        value?: string | number
        disabled?: boolean
        children?: React.ReactNode
      }
      const textLabel = flattenNodeText(optProps.children)
      const rawValue = optProps.value !== undefined ? optProps.value : textLabel
      result.push({
        value: String(rawValue),
        rawValue,
        label: optProps.children,
        textLabel,
        disabled: Boolean(optProps.disabled),
        group: groupLabel,
      })
    }
  })
  return result
}

export type SelectSize = ControlSize | 'ghost'

export interface SelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'size' | 'onChange' | 'value' | 'defaultValue' | 'onBlur' | 'onKeyDown'
  > {
  options?: ReadonlyArray<SelectOption>
  value?: string | number | Array<string | number>
  defaultValue?: string | number | Array<string | number>
  onChange?: (valOrEvent: any) => void
  onValueChange?: (value: string) => void
  onBlur?: React.FocusEventHandler<HTMLElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>
  label?: React.ReactNode
  error?: string
  helperText?: React.ReactNode
  placeholder?: string
  multiple?: boolean
  searchable?: boolean
  allowClear?: boolean
  clearable?: boolean
  invalid?: boolean
  size?: SelectSize
  motion?: AbcMotionPreset
  /** 外层容器扩展样式类名（如控制宽度 w-32 或 shrink-0 等） */
  wrapperClassName?: string
  /** wrapperClassName 语义别名 */
  containerClassName?: string
  /** 下拉浮层容器扩展样式类名 */
  dropdownClassName?: string
  /** dropdownClassName 语义别名 */
  popoverClassName?: string
  /** 是否同步触发器宽度至下拉菜单最小宽度（默认 true） */
  matchWidth?: boolean
  /** 下拉面板相对触发器的默认对齐方位（默认 bottomLeft，窄后缀选择器可设为 bottomRight 防止向右溢出父容器） */
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
  /** 是否隐藏右侧下拉箭头 */
  hideChevron?: boolean
  /** 自定义 Portal 挂载容器（未传时自动探测祖先 dialog[open] 或 document.body） */
  container?: HTMLElement | null
  children?: React.ReactNode
}

export const SINGLE_SIZE_H: Record<ControlSize, string> = {
  xs: 'h-[var(--abc-control-h-xs)] text-xs',
  sm: 'h-[var(--abc-control-h-sm)] text-xs',
  default: 'h-[var(--abc-control-h-sm)] text-xs',
  md: 'h-[var(--abc-control-h-md)] text-sm',
  lg: 'h-[var(--abc-control-h-lg)] text-sm',
}

export const MULTI_SIZE_H: Record<ControlSize, string> = {
  xs: 'min-h-[var(--abc-control-h-xs)] text-xs',
  sm: 'min-h-[var(--abc-control-h-sm)] text-xs',
  default: 'min-h-[var(--abc-control-h-sm)] text-xs',
  md: 'min-h-[var(--abc-control-h-md)] text-sm',
  lg: 'min-h-[var(--abc-control-h-lg)] text-sm',
}

function isTextOnlyLabel(node: React.ReactNode): boolean {
  if (node === null || node === undefined || typeof node === 'boolean') return true
  if (typeof node === 'string' || typeof node === 'number') return true
  if (Array.isArray(node)) return node.every(isTextOnlyLabel)
  return false
}

export function renderOptionContent(opt: ParsedSelectOption, preserveSrToken = true): React.ReactNode {
  const hasRichEmoji =
    isTextOnlyLabel(opt.label) &&
    tokenizeEmojiSegments(opt.textLabel, preserveSrToken).some((seg) => seg.type === 'emoji')
  if (opt.textLabel.includes('[icon:') || hasRichEmoji) {
    return (
      <RichIconText
        text={opt.textLabel}
        iconSize={13}
        preserveSrToken={preserveSrToken}
      />
    )
  }
  return opt.label
}

/**
 * 企业级选择器组件
 * 统一融合声明式 options 模式与原生 <option> children 平滑迁移模式，
 * 内置多选胶囊、拼音首字母检索、Top-Layer 弹窗防遮挡 Portal 及无障碍键盘导航。
 */
