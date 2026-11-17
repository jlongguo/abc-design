import type {
  AbcRuleCondition,
  AbcRuleFieldSchema,
  AbcRuleFieldType,
  AbcRuleGroup,
  AbcRuleOperator,
  AbcRuleOperatorOption,
} from '@abc-design/core'

export type {
  AbcRuleFieldType,
  AbcRuleOperator,
  AbcRuleOperatorOption,
  AbcRuleFieldSchema,
  AbcRuleCondition,
  AbcRuleGroup,
}

export interface FilterBuilderProps {
  /** 可用字段 Schema 定义列表 */
  fields: AbcRuleFieldSchema[]
  /** 受控规则组树 */
  value?: AbcRuleGroup
  /** 非受控初始规则组树 */
  defaultValue?: AbcRuleGroup
  /** 规则树任意节点变更时触发 */
  onChange?: (next: AbcRuleGroup) => void
  /** 最大嵌套深度（默认 2；0 表示不允许添加子条件组） */
  maxDepth?: number
  /** 是否在底部展示只读逻辑表达式摘要与复制按钮（默认 true） */
  showSummary?: boolean
  /** 全局禁用态 */
  disabled?: boolean
  /** 无障碍区域标签 */
  ariaLabel?: string
  className?: string
}

export type RuleBuilderProps = FilterBuilderProps
