import { matchKeywordWithPinyin } from './pinyin.js'

/** 通用树节点数据结构 */
export interface AbcTreeNode {
  key: string | number
  title: string
  disabled?: boolean
  icon?: string
  badge?: string | number
  children?: AbcTreeNode[]
  [extra: string]: unknown
}

export interface AbcTreeCheckResult {
  checkedKeys: Array<string | number>
  halfCheckedKeys: Array<string | number>
}

/** 递归收集节点及其全部未禁用后代节点的 key */
function collectDescendantKeys(node: AbcTreeNode, out: Array<string | number> = []): Array<string | number> {
  if (!node.disabled) {
    out.push(node.key)
  }
  if (node.children) {
    for (const child of node.children) {
      collectDescendantKeys(child, out)
    }
  }
  return out
}

/**
 * 计算树形结构在级联模式下的精确选中集与半选（indeterminate）祖先集
 */
export function computeTreeCheckState(
  nodes: AbcTreeNode[],
  rawCheckedKeys: ReadonlyArray<string | number>,
  checkStrictly = false
): AbcTreeCheckResult {
  const checkedSet = new Set<string | number>(rawCheckedKeys)
  const halfCheckedSet = new Set<string | number>()

  if (checkStrictly) {
    return {
      checkedKeys: Array.from(checkedSet),
      halfCheckedKeys: [],
    }
  }

  function visit(node: AbcTreeNode): { allChecked: boolean; someChecked: boolean } {
    if (!node.children || node.children.length === 0) {
      const isChecked = checkedSet.has(node.key)
      return { allChecked: isChecked, someChecked: isChecked }
    }

    const enabledChildren = node.children.filter((c) => !c.disabled)
    if (enabledChildren.length === 0) {
      const isChecked = checkedSet.has(node.key)
      return { allChecked: isChecked, someChecked: isChecked }
    }

    let all = true
    let some = false
    for (const child of enabledChildren) {
      const res = visit(child)
      if (!res.allChecked) all = false
      if (res.someChecked) some = true
    }

    if (all) {
      checkedSet.add(node.key)
      halfCheckedSet.delete(node.key)
    } else if (some) {
      checkedSet.delete(node.key)
      halfCheckedSet.add(node.key)
    } else {
      checkedSet.delete(node.key)
      halfCheckedSet.delete(node.key)
    }

    return { allChecked: all, someChecked: some }
  }

  for (const root of nodes) {
    visit(root)
  }

  return {
    checkedKeys: Array.from(checkedSet),
    halfCheckedKeys: Array.from(halfCheckedSet),
  }
}

/**
 * 切换指定树节点的勾选状态，并在非严格模式下自动级联更新子孙与祖先节点状态
 */
export function toggleTreeNodeChecked(
  nodes: AbcTreeNode[],
  currentCheckedKeys: ReadonlyArray<string | number>,
  targetNode: AbcTreeNode,
  nextChecked: boolean,
  checkStrictly = false
): AbcTreeCheckResult {
  const nextSet = new Set<string | number>(currentCheckedKeys)

  if (checkStrictly) {
    if (nextChecked) nextSet.add(targetNode.key)
    else nextSet.delete(targetNode.key)
    return { checkedKeys: Array.from(nextSet), halfCheckedKeys: [] }
  }

  const affected = collectDescendantKeys(targetNode)
  for (const k of affected) {
    if (nextChecked) nextSet.add(k)
    else nextSet.delete(k)
  }

  return computeTreeCheckState(nodes, Array.from(nextSet), false)
}

/**
 * 按关键字（含拼音首字母）过滤树形结构，并自动保留命中节点的祖先路径及需要自动展开的 key 列表
 */
export function filterTreeNodes(
  nodes: AbcTreeNode[],
  keyword: string
): { filteredNodes: AbcTreeNode[]; autoExpandedKeys: Array<string | number> } {
  const kw = keyword.trim()
  if (!kw) {
    return { filteredNodes: nodes, autoExpandedKeys: [] }
  }

  const expanded: Array<string | number> = []

  function walk(list: AbcTreeNode[]): AbcTreeNode[] {
    const out: AbcTreeNode[] = []
    for (const node of list) {
      const childMatches = node.children ? walk(node.children) : []
      const selfMatches = matchKeywordWithPinyin(node.title, kw)
      if (selfMatches || childMatches.length > 0) {
        if (childMatches.length > 0) {
          expanded.push(node.key)
        }
        out.push({
          ...node,
          children: childMatches.length > 0 ? childMatches : node.children && selfMatches ? node.children : undefined,
        })
      }
    }
    return out
  }

  return {
    filteredNodes: walk(nodes),
    autoExpandedKeys: expanded,
  }
}

/** 提取整棵树的全部可展开父节点 key（用于“展开全部”） */
export function collectAllExpandableKeys(nodes: AbcTreeNode[]): Array<string | number> {
  const keys: Array<string | number> = []
  function walk(list: AbcTreeNode[]) {
    for (const n of list) {
      if (n.children && n.children.length > 0) {
        keys.push(n.key)
        walk(n.children)
      }
    }
  }
  walk(nodes)
  return keys
}
