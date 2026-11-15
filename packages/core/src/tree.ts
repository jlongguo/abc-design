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

/* ==================== TreeSelect 归一化与策略计算内核 ==================== */

/** TreeSelect 自定义字段映射配置 */
export interface AbcTreeFieldNames {
  label?: string
  value?: string
  children?: string
}

/** 扁平数组自动构树模式配置（id/pId 关联） */
export interface AbcTreeSimpleModeConfig {
  id?: string
  pId?: string
  rootPId?: string | number | null
}

/** 多选复选模式下受控值与胶囊标签回填策略 */
export type AbcCheckedStrategy = 'SHOW_ALL' | 'SHOW_PARENT' | 'SHOW_CHILD'

/** 归一化后的 TreeSelect 标准树节点 */
export interface AbcTreeSelectNode extends AbcTreeNode {
  key: string | number
  value: string | number
  title: string
  /** 保留原始非纯文本 label（如 ReactNode），搜索时统一使用字符串 title */
  rawLabel?: unknown
  disabled?: boolean
  selectable?: boolean
  checkable?: boolean
  isLeaf?: boolean
  icon?: string
  badge?: string | number
  children?: AbcTreeSelectNode[]
  raw?: Record<string, unknown>
}

/** 展平后的可见树节点行（用于虚拟滚动切片与键盘导航） */
export interface AbcFlattenedTreeNode {
  node: AbcTreeSelectNode
  keyStr: string
  depth: number
  posInSet: number
  setSize: number
  hasChildren: boolean
  isExpanded: boolean
  parentKey: string | number | null
}

export interface NormalizeTreeSelectResult {
  treeNodes: AbcTreeSelectNode[]
  nodeMap: Map<string, AbcTreeSelectNode>
  parentMap: Map<string, string | null>
}

function extractNodeText(raw: Record<string, unknown>, labelKey: string, fallbackValue: string | number): {
  title: string
  rawLabel: unknown
} {
  const candidate =
    raw[labelKey] !== undefined
      ? raw[labelKey]
      : raw.label !== undefined
        ? raw.label
        : raw.title
  if (typeof candidate === 'string' || typeof candidate === 'number') {
    return { title: String(candidate), rawLabel: candidate }
  }
  if (typeof raw.title === 'string' || typeof raw.title === 'number') {
    return { title: String(raw.title), rawLabel: candidate ?? raw.title }
  }
  return { title: String(fallbackValue), rawLabel: candidate ?? String(fallbackValue) }
}

/**
 * 将嵌套 treeData（含自定义 fieldNames）或扁平 simpleMode 数组归一化为标准树形索引结构
 */
export function normalizeTreeSelectData(
  rawData: ReadonlyArray<Record<string, unknown>> = [],
  options?: {
    fieldNames?: AbcTreeFieldNames
    treeDataSimpleMode?: boolean | AbcTreeSimpleModeConfig
  }
): NormalizeTreeSelectResult {
  const fieldNames = options?.fieldNames ?? {}
  const labelField = fieldNames.label ?? 'label'
  const valueField = fieldNames.value ?? 'value'
  const childrenField = fieldNames.children ?? 'children'

  const nodeMap = new Map<string, AbcTreeSelectNode>()
  const parentMap = new Map<string, string | null>()

  const simpleModeCfg = options?.treeDataSimpleMode
  if (simpleModeCfg) {
    const idKey = (typeof simpleModeCfg === 'object' ? simpleModeCfg.id : undefined) ?? 'id'
    const pIdKey = (typeof simpleModeCfg === 'object' ? simpleModeCfg.pId : undefined) ?? 'pId'
    const rootPId =
      typeof simpleModeCfg === 'object' && 'rootPId' in simpleModeCfg ? simpleModeCfg.rootPId : null

    interface TempSimpleEntry {
      idStr: string
      pIdRaw: unknown
      pIdStr: string | null
      node: AbcTreeSelectNode
    }

    const entries: TempSimpleEntry[] = []
    const idMap = new Map<string, TempSimpleEntry>()

    rawData.forEach((raw, idx) => {
      const idVal =
        raw[valueField] !== undefined
          ? raw[valueField]
          : raw[idKey] !== undefined
            ? raw[idKey]
            : raw.value !== undefined
              ? raw.value
              : raw.key !== undefined
                ? raw.key
                : idx
      const normalizedVal =
        typeof idVal === 'string' || typeof idVal === 'number' ? idVal : String(idVal ?? idx)
      const { title, rawLabel } = extractNodeText(raw, labelField, normalizedVal)
      const idFieldVal = raw[idKey] !== undefined ? raw[idKey] : normalizedVal
      const pIdRaw = raw[pIdKey]

      const node: AbcTreeSelectNode = {
        key: normalizedVal,
        value: normalizedVal,
        title,
        rawLabel,
        disabled: Boolean(raw.disabled),
        selectable: raw.selectable as boolean | undefined,
        checkable: raw.checkable as boolean | undefined,
        isLeaf: raw.isLeaf as boolean | undefined,
        icon: typeof raw.icon === 'string' ? raw.icon : undefined,
        badge:
          typeof raw.badge === 'string' || typeof raw.badge === 'number' ? raw.badge : undefined,
        raw,
      }

      const idStr = String(idFieldVal)
      const nodeKeyStr = String(node.key)
      nodeMap.set(nodeKeyStr, node)

      const entry: TempSimpleEntry = {
        idStr,
        pIdRaw,
        pIdStr: pIdRaw === null || pIdRaw === undefined || pIdRaw === '' ? null : String(pIdRaw),
        node,
      }
      entries.push(entry)
      idMap.set(idStr, entry)
    })

    const roots: AbcTreeSelectNode[] = []
    const rootPIdStr = rootPId === null || rootPId === undefined ? null : String(rootPId)

    for (const entry of entries) {
      const parentEntry =
        entry.pIdStr !== null && entry.pIdStr !== rootPIdStr ? idMap.get(entry.pIdStr) : undefined

      // 防范自指向或祖先环：仅当父节点存在且不指向自身时挂入父节点 children
      if (parentEntry && parentEntry !== entry) {
        if (!parentEntry.node.children) {
          parentEntry.node.children = []
        }
        parentEntry.node.children.push(entry.node)
        parentMap.set(String(entry.node.key), String(parentEntry.node.key))
      } else {
        roots.push(entry.node)
        parentMap.set(String(entry.node.key), null)
      }
    }

    return { treeNodes: roots, nodeMap, parentMap }
  }

  function convertList(
    list: ReadonlyArray<Record<string, unknown>>,
    parentKeyStr: string | null,
    pathPrefix: string
  ): AbcTreeSelectNode[] {
    return list.map((raw, idx) => {
      const hasCustomVal = fieldNames.value !== undefined && raw[valueField] !== undefined
      const rawVal = hasCustomVal
        ? raw[valueField]
        : raw.value !== undefined
          ? raw.value
          : raw.key !== undefined
            ? raw.key
            : `${pathPrefix}-${idx}`
      const normalizedVal =
        typeof rawVal === 'string' || typeof rawVal === 'number' ? rawVal : String(rawVal)
      const { title, rawLabel } = extractNodeText(raw, labelField, normalizedVal)
      const keyStr = String(normalizedVal)

      const rawChildren = raw[childrenField] ?? raw.children
      const children = Array.isArray(rawChildren)
        ? convertList(rawChildren as ReadonlyArray<Record<string, unknown>>, keyStr, `${pathPrefix}-${idx}`)
        : undefined

      const node: AbcTreeSelectNode = {
        key: normalizedVal,
        value: normalizedVal,
        title,
        rawLabel,
        disabled: Boolean(raw.disabled),
        selectable: raw.selectable as boolean | undefined,
        checkable: raw.checkable as boolean | undefined,
        isLeaf: raw.isLeaf as boolean | undefined,
        icon: typeof raw.icon === 'string' ? raw.icon : undefined,
        badge:
          typeof raw.badge === 'string' || typeof raw.badge === 'number' ? raw.badge : undefined,
        children,
        raw,
      }

      nodeMap.set(keyStr, node)
      parentMap.set(keyStr, parentKeyStr)
      return node
    })
  }

  const treeNodes = convertList(rawData, null, 'root')
  return { treeNodes, nodeMap, parentMap }
}

function collectSeedKeysFromParent(node: AbcTreeSelectNode, out: Array<string | number>) {
  if (!node.disabled && node.checkable !== false) {
    out.push(node.key)
  }
  if (node.children) {
    for (const child of node.children) {
      collectSeedKeysFromParent(child, out)
    }
  }
}

/**
 * 从外部受控 value 解析完整的复选态（含父节点 value 自动向下传播子孙与半选态推导）
 */
export function resolveTreeCheckedStateFromValue(
  nodes: AbcTreeSelectNode[],
  valueKeys: ReadonlyArray<string | number>,
  checkStrictly = false
): AbcTreeCheckResult {
  const inputStrSet = new Set<string>(valueKeys.map((k) => String(k)))
  if (checkStrictly) {
    const matchedInTree = new Set<string>()
    const resolved: Array<string | number> = []
    function walkStrict(list: AbcTreeSelectNode[]) {
      for (const node of list) {
        const keyStr = String(node.key)
        if (inputStrSet.has(keyStr) && !matchedInTree.has(keyStr)) {
          matchedInTree.add(keyStr)
          resolved.push(node.key)
        }
        if (node.children) walkStrict(node.children)
      }
    }
    walkStrict(nodes)
    // 保留异步懒加载尚未挂载入树的外部受控 key
    for (const ext of valueKeys) {
      if (!matchedInTree.has(String(ext))) {
        resolved.push(ext)
      }
    }
    return { checkedKeys: resolved, halfCheckedKeys: [] }
  }

  const expandedSeedKeys: Array<string | number> = []
  const matchedInTree = new Set<string>()

  function propagateDown(list: AbcTreeSelectNode[]) {
    for (const node of list) {
      const keyStr = String(node.key)
      if (inputStrSet.has(keyStr) && !node.disabled && node.checkable !== false) {
        matchedInTree.add(keyStr)
        collectSeedKeysFromParent(node, expandedSeedKeys)
      } else if (node.children && node.children.length > 0) {
        propagateDown(node.children)
      }
    }
  }
  propagateDown(nodes)

  const state = computeTreeCheckState(nodes, expandedSeedKeys, false)
  // 保留暂未进入当前树视图（例如未加载的异步子节点）的受控 key，防止外部值丢失
  const resultStrSet = new Set<string>(state.checkedKeys.map((k) => String(k)))
  const externalKeys: Array<string | number> = []
  for (const ext of valueKeys) {
    const extStr = String(ext)
    if (!matchedInTree.has(extStr) && !resultStrSet.has(extStr)) {
      // 只有当节点完全不在当前树中时才保留
      let foundInTree = false
      function existsInTree(list: AbcTreeSelectNode[]): boolean {
        for (const n of list) {
          if (String(n.key) === extStr) return true
          if (n.children && existsInTree(n.children)) return true
        }
        return false
      }
      foundInTree = existsInTree(nodes)
      if (!foundInTree) {
        externalKeys.push(ext)
      }
    }
  }

  return {
    checkedKeys: [...state.checkedKeys, ...externalKeys],
    halfCheckedKeys: state.halfCheckedKeys,
  }
}

/**
 * 按指定策略（SHOW_ALL / SHOW_PARENT / SHOW_CHILD）收敛全选节点集合为对外输出数组
 */
export function formatTreeCheckedStrategy(
  nodes: AbcTreeSelectNode[],
  checkedKeys: ReadonlyArray<string | number>,
  strategy: AbcCheckedStrategy = 'SHOW_ALL',
  checkStrictly = false
): Array<string | number> {
  const checkedStrSet = new Set<string>(checkedKeys.map((k) => String(k)))
  const seenOutput = new Set<string>()
  const output: Array<string | number> = []

  const knownTreeKeys = new Set<string>()
  function collectKnown(list: AbcTreeSelectNode[]) {
    for (const n of list) {
      knownTreeKeys.add(String(n.key))
      if (n.children) collectKnown(n.children)
    }
  }
  collectKnown(nodes)

  if (checkStrictly || strategy === 'SHOW_ALL') {
    function walkAll(list: AbcTreeSelectNode[]) {
      for (const n of list) {
        const keyStr = String(n.key)
        if (checkedStrSet.has(keyStr) && !seenOutput.has(keyStr)) {
          seenOutput.add(keyStr)
          output.push(n.key)
        }
        if (n.children) walkAll(n.children)
      }
    }
    walkAll(nodes)
  } else if (strategy === 'SHOW_PARENT') {
    function walkParent(list: AbcTreeSelectNode[]) {
      for (const n of list) {
        const keyStr = String(n.key)
        if (!n.disabled && n.checkable !== false && checkedStrSet.has(keyStr)) {
          if (!seenOutput.has(keyStr)) {
            seenOutput.add(keyStr)
            output.push(n.key)
          }
          continue
        }
        if (n.children && n.children.length > 0) {
          walkParent(n.children)
        }
      }
    }
    walkParent(nodes)
  } else {
    // SHOW_CHILD：仅收敛输出没有可用子节点的末级选中节点
    function walkChild(list: AbcTreeSelectNode[]) {
      for (const n of list) {
        const enabledChildren = (n.children ?? []).filter(
          (c) => !c.disabled && c.checkable !== false
        )
        if (enabledChildren.length === 0) {
          const keyStr = String(n.key)
          if (
            !n.disabled &&
            n.checkable !== false &&
            checkedStrSet.has(keyStr) &&
            !seenOutput.has(keyStr)
          ) {
            seenOutput.add(keyStr)
            output.push(n.key)
          }
        } else {
          walkChild(n.children ?? [])
        }
      }
    }
    walkChild(nodes)
  }

  for (const key of checkedKeys) {
    const keyStr = String(key)
    if (!knownTreeKeys.has(keyStr) && !seenOutput.has(keyStr)) {
      seenOutput.add(keyStr)
      output.push(key)
    }
  }

  return output
}

/**
 * 过滤归一化后的 TreeSelect 节点，支持按标题（含拼音首字母）与节点值匹配并自动推导需展开祖先 key
 */
export function filterTreeSelectNodes(
  nodes: AbcTreeSelectNode[],
  keyword: string,
  filterProp: 'title' | 'value' | 'both' = 'both'
): { filteredNodes: AbcTreeSelectNode[]; autoExpandedKeys: Array<string | number> } {
  const kw = keyword.trim()
  if (!kw) {
    return { filteredNodes: nodes, autoExpandedKeys: [] }
  }

  const kwLower = kw.toLowerCase()
  const expanded: Array<string | number> = []

  function walk(list: AbcTreeSelectNode[]): AbcTreeSelectNode[] {
    const out: AbcTreeSelectNode[] = []
    for (const node of list) {
      const childMatches = node.children ? walk(node.children) : []
      const titleMatch = filterProp !== 'value' && matchKeywordWithPinyin(node.title, kw)
      const valueMatch =
        filterProp !== 'title' && String(node.value).toLowerCase().includes(kwLower)
      if (titleMatch || valueMatch || childMatches.length > 0) {
        if (childMatches.length > 0) {
          expanded.push(node.key)
        }
        out.push({
          ...node,
          children:
            childMatches.length > 0
              ? childMatches
              : node.children && (titleMatch || valueMatch)
                ? node.children
                : undefined,
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

/**
 * 将当前处于展开链路上的可见树节点前序展平，直接驱动固定行高虚拟滚动与键盘焦点移动
 */
export function flattenVisibleTreeNodes(
  nodes: AbcTreeSelectNode[],
  expandedKeyStrSet: ReadonlySet<string>,
  isNodeExpandable?: (node: AbcTreeSelectNode) => boolean
): AbcFlattenedTreeNode[] {
  const result: AbcFlattenedTreeNode[] = []

  function walk(list: AbcTreeSelectNode[], depth: number, parentKey: string | number | null) {
    const setSize = list.length
    list.forEach((node, idx) => {
      const keyStr = String(node.key)
      const hasChildren = isNodeExpandable
        ? isNodeExpandable(node)
        : Boolean(node.children && node.children.length > 0)
      const isExpanded = hasChildren && expandedKeyStrSet.has(keyStr)

      result.push({
        node,
        keyStr,
        depth,
        posInSet: idx + 1,
        setSize,
        hasChildren,
        isExpanded,
        parentKey,
      })

      if (isExpanded && node.children && node.children.length > 0) {
        walk(node.children, depth + 1, node.key)
      }
    })
  }

  walk(nodes, 0, null)
  return result
}
