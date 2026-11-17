import {
  getOperatorsForFieldType,
  getRuleOperatorMeta,
  type AbcRuleCondition,
  type AbcRuleFieldSchema,
  type AbcRuleFieldType,
  type AbcRuleGroup,
  type AbcRuleOperator,
} from '@abc-design/core'

/** 将条件右值安全转换为 InputNumber 所需的 number | null */
export function toNullableNumber(val: unknown): number | null {
  if (val === null || val === undefined || val === '') return null
  const num = Number(val)
  return Number.isFinite(num) ? num : null
}

/** 按字段类型与运算符生成兼容的默认右值 */
export function resolveDefaultValueByFieldAndOperator(
  fieldType: AbcRuleFieldType,
  operator: AbcRuleOperator
): { value: any; valueTo?: any } {
  const meta = getRuleOperatorMeta(operator)
  if (meta.arity === 0) {
    return { value: undefined, valueTo: undefined }
  }
  if (fieldType === 'boolean') {
    return { value: true, valueTo: undefined }
  }
  if (fieldType === 'enum' && (operator === 'in' || operator === 'not_in')) {
    return { value: [], valueTo: undefined }
  }
  if (meta.arity === 2) {
    return { value: '', valueTo: '' }
  }
  return { value: '', valueTo: undefined }
}

/** 切换字段时自动校验并修正运算符及不兼容右值 */
export function resolveFieldChangeCondition(
  condition: AbcRuleCondition,
  nextFieldName: string,
  fieldMap: Map<string, AbcRuleFieldSchema>
): AbcRuleCondition {
  const prevSchema = fieldMap.get(condition.field)
  const nextSchema = fieldMap.get(nextFieldName)
  const prevType = prevSchema?.type ?? 'string'
  const nextType = nextSchema?.type ?? 'string'
  const validOps = getOperatorsForFieldType(nextType)
  const opSupported = validOps.some((op) => op.value === condition.operator)
  const nextOperator = opSupported ? condition.operator : (validOps[0]?.value ?? 'eq')

  const typeChanged = prevType !== nextType
  const enumFieldChanged = nextType === 'enum' && prevSchema?.name !== nextSchema?.name

  if (!opSupported || typeChanged || enumFieldChanged) {
    const defaults = resolveDefaultValueByFieldAndOperator(nextType, nextOperator)
    return {
      ...condition,
      field: nextFieldName,
      operator: nextOperator,
      value: defaults.value,
      valueTo: defaults.valueTo,
    }
  }

  return {
    ...condition,
    field: nextFieldName,
    operator: nextOperator,
  }
}

/** 切换运算符时根据 arity 与字段类型适配右值槽数据形态 */
export function resolveOperatorChangeCondition(
  condition: AbcRuleCondition,
  nextOperator: AbcRuleOperator,
  fieldType: AbcRuleFieldType
): AbcRuleCondition {
  const prevMeta = getRuleOperatorMeta(condition.operator)
  const nextMeta = getRuleOperatorMeta(nextOperator)

  if (nextMeta.arity === 0) {
    return {
      ...condition,
      operator: nextOperator,
      value: undefined,
      valueTo: undefined,
    }
  }

  if (nextMeta.arity === 2) {
    const nextValue =
      Array.isArray(condition.value) || typeof condition.value === 'boolean' || condition.value === undefined
        ? ''
        : condition.value
    const nextValueTo = prevMeta.arity === 2 ? (condition.valueTo ?? '') : ''
    return {
      ...condition,
      operator: nextOperator,
      value: nextValue,
      valueTo: nextValueTo,
    }
  }

  // arity === 1
  if (fieldType === 'enum') {
    const isMultiOp = nextOperator === 'in' || nextOperator === 'not_in'
    if (isMultiOp) {
      const nextArr = Array.isArray(condition.value)
        ? condition.value
        : condition.value !== undefined && condition.value !== null && condition.value !== ''
          ? [condition.value]
          : []
      return { ...condition, operator: nextOperator, value: nextArr, valueTo: undefined }
    }
    const nextSingle = Array.isArray(condition.value)
      ? (condition.value[0] ?? '')
      : (condition.value ?? '')
    return { ...condition, operator: nextOperator, value: nextSingle, valueTo: undefined }
  }

  if (fieldType === 'boolean') {
    return {
      ...condition,
      operator: nextOperator,
      value: typeof condition.value === 'boolean' ? condition.value : true,
      valueTo: undefined,
    }
  }

  const scalarValue =
    Array.isArray(condition.value) || typeof condition.value === 'boolean' || condition.value === undefined
      ? ''
      : condition.value

  return {
    ...condition,
    operator: nextOperator,
    value: scalarValue,
    valueTo: undefined,
  }
}

/** 不可变替换指定规则组节点 */
export function replaceGroupChild(
  group: AbcRuleGroup,
  index: number,
  nextChild: AbcRuleCondition | AbcRuleGroup
): AbcRuleGroup {
  const nextChildren = [...group.children]
  nextChildren[index] = nextChild
  return { ...group, children: nextChildren }
}

/** 不可变删除指定下标的子节点 */
export function removeGroupChild(group: AbcRuleGroup, index: number): AbcRuleGroup {
  return {
    ...group,
    children: group.children.filter((_, i) => i !== index),
  }
}
