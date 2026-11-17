/** 规则字段数据类型 */
export type AbcRuleFieldType = 'string' | 'number' | 'boolean' | 'enum' | 'date'

/** 规则条件支持的操作符枚举 */
export type AbcRuleOperator =
  | 'eq'
  | 'neq'
  | 'contains'
  | 'not_contains'
  | 'starts_with'
  | 'ends_with'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'between'
  | 'in'
  | 'not_in'
  | 'is_empty'
  | 'is_not_empty'

/** 运算符元信息：arity 表示右值输入项个数（0=无需输入，1=单值/多选数组，2=起止区间） */
export interface AbcRuleOperatorOption {
  value: AbcRuleOperator
  label: string
  arity: 0 | 1 | 2
}

/** 规则构建器可选字段 Schema */
export interface AbcRuleFieldSchema {
  name: string
  label: string
  type: AbcRuleFieldType
  options?: Array<{ label: string; value: string | number }>
  unit?: string
  placeholder?: string
}

/** 单条原子规则条件节点 */
export interface AbcRuleCondition {
  id: string
  type: 'condition'
  field: string
  operator: AbcRuleOperator
  value?: any
  valueTo?: any
  disabled?: boolean
}

/** 嵌套 AND / OR / NOT 条件组节点 */
export interface AbcRuleGroup {
  id: string
  type: 'group'
  combinator: 'AND' | 'OR'
  not?: boolean
  disabled?: boolean
  children: Array<AbcRuleCondition | AbcRuleGroup>
}

const OPERATOR_DICT: Record<AbcRuleOperator, AbcRuleOperatorOption> = {
  eq: { value: 'eq', label: '等于 (=)', arity: 1 },
  neq: { value: 'neq', label: '不等于 (≠)', arity: 1 },
  contains: { value: 'contains', label: '包含', arity: 1 },
  not_contains: { value: 'not_contains', label: '不包含', arity: 1 },
  starts_with: { value: 'starts_with', label: '前缀匹配', arity: 1 },
  ends_with: { value: 'ends_with', label: '后缀匹配', arity: 1 },
  gt: { value: 'gt', label: '大于 (>)', arity: 1 },
  gte: { value: 'gte', label: '大于等于 (≥)', arity: 1 },
  lt: { value: 'lt', label: '小于 (<)', arity: 1 },
  lte: { value: 'lte', label: '小于等于 (≤)', arity: 1 },
  between: { value: 'between', label: '介于区间', arity: 2 },
  in: { value: 'in', label: '属于任一', arity: 1 },
  not_in: { value: 'not_in', label: '不属于', arity: 1 },
  is_empty: { value: 'is_empty', label: '为空', arity: 0 },
  is_not_empty: { value: 'is_not_empty', label: '不为空', arity: 0 },
}

const OPERATORS_BY_TYPE: Record<AbcRuleFieldType, AbcRuleOperator[]> = {
  string: ['contains', 'not_contains', 'eq', 'neq', 'starts_with', 'ends_with', 'is_empty', 'is_not_empty'],
  number: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte', 'between', 'is_empty', 'is_not_empty'],
  date: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte', 'between', 'is_empty', 'is_not_empty'],
  enum: ['in', 'not_in', 'eq', 'neq', 'is_empty', 'is_not_empty'],
  boolean: ['eq', 'neq'],
}

let autoSeq = 0
function nextRuleNodeId(prefix: string): string {
  autoSeq += 1
  return `${prefix}_${autoSeq}`
}

/** 按字段数据类型返回匹配的有效运算符列表 */
export function getOperatorsForFieldType(fieldType: AbcRuleFieldType): AbcRuleOperatorOption[] {
  const keys = OPERATORS_BY_TYPE[fieldType] ?? OPERATORS_BY_TYPE.string
  return keys.map((k) => OPERATOR_DICT[k])
}

/** 查询运算符的输入元信息 */
export function getRuleOperatorMeta(operator: AbcRuleOperator): AbcRuleOperatorOption {
  return OPERATOR_DICT[operator] ?? OPERATOR_DICT.eq
}

/** 创建一条合法的初始单条条件（默认取首字段及其类型下的默认运算符） */
export function createDefaultCondition(fields: AbcRuleFieldSchema[], id?: string): AbcRuleCondition {
  const first = fields[0]
  const ops = getOperatorsForFieldType(first?.type ?? 'string')
  const defaultOp = ops[0]?.value ?? 'eq'
  return {
    id: id ?? nextRuleNodeId('cond'),
    type: 'condition',
    field: first?.name ?? '',
    operator: defaultOp,
    value: first?.type === 'boolean' ? true : first?.type === 'enum' && (defaultOp === 'in' || defaultOp === 'not_in') ? [] : '',
  }
}

/** 创建带有一条默认条件的嵌套规则组 */
export function createDefaultRuleGroup(fields: AbcRuleFieldSchema[], id?: string): AbcRuleGroup {
  return {
    id: id ?? nextRuleNodeId('grp'),
    type: 'group',
    combinator: 'AND',
    children: fields.length > 0 ? [createDefaultCondition(fields)] : [],
  }
}

function readRecordField(record: Record<string, any>, fieldPath: string): any {
  if (!fieldPath) return undefined
  if (Object.prototype.hasOwnProperty.call(record, fieldPath)) {
    return record[fieldPath]
  }
  const parts = fieldPath.split('.')
  let cur: any = record
  for (const part of parts) {
    if (cur == null || typeof cur !== 'object') return undefined
    cur = cur[part]
  }
  return cur
}

function isEmptyVal(val: any): boolean {
  if (val === null || val === undefined) return true
  if (typeof val === 'string') return val.trim() === ''
  if (Array.isArray(val)) return val.length === 0
  return false
}

function toComparable(val: any, fieldType?: AbcRuleFieldType): number | string | boolean | null {
  if (val === null || val === undefined || val === '') return null
  if (fieldType === 'number') {
    const n = Number(val)
    return Number.isNaN(n) ? null : n
  }
  if (fieldType === 'boolean') {
    if (typeof val === 'boolean') return val
    if (val === 'true' || val === '1' || val === 1) return true
    if (val === 'false' || val === '0' || val === 0) return false
    return Boolean(val)
  }
  if (fieldType === 'date') {
    const ts = typeof val === 'number' ? val : Date.parse(String(val))
    return Number.isNaN(ts) ? String(val) : ts
  }
  return String(val)
}

function evaluateCondition(
  record: Record<string, any>,
  cond: AbcRuleCondition,
  fieldMap?: Map<string, AbcRuleFieldSchema>
): boolean {
  if (cond.disabled) return true
  const raw = readRecordField(record, cond.field)
  const schema = fieldMap?.get(cond.field)
  const fieldType = schema?.type

  switch (cond.operator) {
    case 'is_empty':
      return isEmptyVal(raw)
    case 'is_not_empty':
      return !isEmptyVal(raw)
    case 'contains': {
      const target = String(cond.value ?? '').trim().toLowerCase()
      if (!target) return true
      return String(raw ?? '').toLowerCase().includes(target)
    }
    case 'not_contains': {
      const target = String(cond.value ?? '').trim().toLowerCase()
      if (!target) return true
      return !String(raw ?? '').toLowerCase().includes(target)
    }
    case 'starts_with': {
      const target = String(cond.value ?? '').trim().toLowerCase()
      if (!target) return true
      return String(raw ?? '').toLowerCase().startsWith(target)
    }
    case 'ends_with': {
      const target = String(cond.value ?? '').trim().toLowerCase()
      if (!target) return true
      return String(raw ?? '').toLowerCase().endsWith(target)
    }
    case 'eq': {
      if (fieldType === 'boolean') {
        return toComparable(raw, 'boolean') === toComparable(cond.value, 'boolean')
      }
      if (isEmptyVal(cond.value)) return true
      return toComparable(raw, fieldType) === toComparable(cond.value, fieldType)
    }
    case 'neq': {
      if (fieldType === 'boolean') {
        return toComparable(raw, 'boolean') !== toComparable(cond.value, 'boolean')
      }
      if (isEmptyVal(cond.value)) return true
      return toComparable(raw, fieldType) !== toComparable(cond.value, fieldType)
    }
    case 'gt':
    case 'gte':
    case 'lt':
    case 'lte': {
      const cmp = toComparable(raw, fieldType ?? 'number')
      const rhs = toComparable(cond.value, fieldType ?? 'number')
      if (cmp === null || rhs === null) return false
      if (cond.operator === 'gt') return cmp > rhs
      if (cond.operator === 'gte') return cmp >= rhs
      if (cond.operator === 'lt') return cmp < rhs
      return cmp <= rhs
    }
    case 'between': {
      const cmp = toComparable(raw, fieldType ?? 'number')
      const low = toComparable(cond.value, fieldType ?? 'number')
      const high = toComparable(cond.valueTo, fieldType ?? 'number')
      if (cmp === null) return false
      if (low !== null && high !== null) return cmp >= low && cmp <= high
      if (low !== null) return cmp >= low
      if (high !== null) return cmp <= high
      return true
    }
    case 'in':
    case 'not_in': {
      const list = Array.isArray(cond.value)
        ? cond.value.map(String)
        : isEmptyVal(cond.value)
          ? []
          : [String(cond.value)]
      if (list.length === 0) return true
      const hit = Array.isArray(raw)
        ? raw.some((item) => list.includes(String(item)))
        : list.includes(String(raw ?? ''))
      return cond.operator === 'in' ? hit : !hit
    }
    default:
      return true
  }
}

/**
 * 对单条业务记录执行嵌套 AND / OR / NOT 规则树求值
 * @param fields 可选字段 Schema（用于精确对齐数值、日期与布尔比较语义）
 */
export function evaluateRuleGroup(
  record: Record<string, any>,
  group: AbcRuleGroup,
  fields?: AbcRuleFieldSchema[]
): boolean {
  const fieldMap = fields ? new Map(fields.map((f) => [f.name, f])) : undefined
  const runGroup = (node: AbcRuleGroup): boolean => {
    if (node.disabled) return true
    const activeChildren = node.children.filter((ch) => !ch.disabled)
    if (activeChildren.length === 0) return true
    const rawResult =
      node.combinator === 'OR'
        ? activeChildren.some((ch) =>
            ch.type === 'group' ? runGroup(ch) : evaluateCondition(record, ch, fieldMap)
          )
        : activeChildren.every((ch) =>
            ch.type === 'group' ? runGroup(ch) : evaluateCondition(record, ch, fieldMap)
          )
    return node.not ? !rawResult : rawResult
  }
  return runGroup(group)
}

/** 将规则 AST 树格式化为面向审核/日志查看器的可读逻辑表达式摘要 */
export function formatRuleGroupSummary(
  group: AbcRuleGroup,
  fields: AbcRuleFieldSchema[]
): string {
  const fieldMap = new Map(fields.map((f) => [f.name, f]))

  const fmtCond = (c: AbcRuleCondition): string => {
    const schema = fieldMap.get(c.field)
    const fieldName = schema?.label ?? c.field
    const opMeta = getRuleOperatorMeta(c.operator)
    if (opMeta.arity === 0) return `${fieldName} ${opMeta.label}`
    if (opMeta.arity === 2) {
      return `${fieldName} ${opMeta.label} [${c.value ?? '∞'} ~ ${c.valueTo ?? '∞'}]`
    }
    const displayVal = Array.isArray(c.value)
      ? `[${c.value.join(', ')}]`
      : JSON.stringify(c.value ?? '')
    return `${fieldName} ${opMeta.label} ${displayVal}`
  }

  const fmtGroup = (g: AbcRuleGroup, depth: number): string => {
    const active = g.children.filter((c) => !c.disabled)
    if (active.length === 0) return '(无激活条件)'
    const parts = active.map((ch) =>
      ch.type === 'group' ? fmtGroup(ch, depth + 1) : fmtCond(ch)
    )
    const joined = parts.join(` ${g.combinator} `)
    const wrapped = depth > 0 || g.not ? `(${joined})` : joined
    return g.not ? `NOT ${wrapped}` : wrapped
  }

  return fmtGroup(group, 0)
}
