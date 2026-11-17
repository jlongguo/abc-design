import type React from 'react'
import type { AbcDiffKind, AbcFieldDiffEntry, AbcLineDiffEntry } from '@abc-design/core'

export type { AbcDiffKind, AbcFieldDiffEntry, AbcLineDiffEntry }

export interface ConfigDiffViewerProps {
  /** 变更前配置对象 */
  before?: Record<string, any> | null
  /** 变更后配置对象 */
  after?: Record<string, any> | null
  /** 变更前源码/配置文件文本 */
  beforeCode?: string
  /** 变更后源码/配置文件文本 */
  afterCode?: string
  /** 字段键名到中文语义展示名称的映射表 */
  labels?: Record<string, string>
  /** 展示模式：字段对比 / 源码对比 / 双标签切换 */
  mode?: 'fields' | 'code' | 'tabs'
  /** 源码逐行对比布局（默认 unified） */
  codeLayout?: 'unified' | 'split'
  /** 是否默认仅显示存在变更的条目（默认 true） */
  onlyChanges?: boolean
  /** 是否对敏感字段（password/secret/token/api_key 等）自动脱敏（默认 true） */
  maskSecrets?: boolean
  /** 顶部标题 */
  title?: React.ReactNode
  /** 无变更时的空状态提示文案 */
  emptyText?: React.ReactNode
  /** 无障碍区域标签 */
  ariaLabel?: string
  className?: string
}
