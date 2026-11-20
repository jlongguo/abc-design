import {
  getConnectedEdges,
  getIncomers,
  getOutgoers,
  type Connection,
  type Edge,
  type Node,
  type Viewport,
} from '@xyflow/react'

export type FlowLayoutDirection = 'LR' | 'TB' | 'RL' | 'BT'

export interface LayoutFlowGraphOptions {
  /** 排版方向：LR（从左到右）、TB（从上到下）、RL、BT，默认 'LR' */
  direction?: FlowLayoutDirection
  /** 层级间距（像素，默认 96） */
  rankSep?: number
  /** 同层节点间距（像素，默认 48） */
  nodeSep?: number
  /** 默认节点估算宽度（节点未测量时使用，默认 230） */
  defaultNodeWidth?: number
  /** 默认节点估算高度（节点未测量时使用，默认 116） */
  defaultNodeHeight?: number
  /** 起始坐标偏移 X（默认 32） */
  originX?: number
  /** 起始坐标偏移 Y（默认 32） */
  originY?: number
}

function getNodeSize(
  node: Node,
  defaultWidth: number,
  defaultHeight: number
): { width: number; height: number } {
  const width =
    node.measured?.width ??
    (typeof node.width === 'number' ? node.width : undefined) ??
    (typeof node.style?.width === 'number' ? node.style.width : undefined) ??
    defaultWidth
  const height =
    node.measured?.height ??
    (typeof node.height === 'number' ? node.height : undefined) ??
    (typeof node.style?.height === 'number' ? node.style.height : undefined) ??
    defaultHeight
  return { width, height }
}

/**
 * 零外部依赖分层拓扑自动排版引擎 (layoutFlowGraph)
 * - 基于 Kahn 拓扑分层 + 环路安全兜底，支持 LR / TB / RL / BT 四向排布；
 * - 自动保持 parentId 子流分组容器的父子相对坐标，不破坏子流程嵌套结构。
 */
export function layoutFlowGraph<N extends Node = Node, E extends Edge = Edge>(
  nodes: ReadonlyArray<N>,
  edges: ReadonlyArray<E>,
  options: LayoutFlowGraphOptions = {}
): N[] {
  const {
    direction = 'LR',
    rankSep = 96,
    nodeSep = 48,
    defaultNodeWidth = 230,
    defaultNodeHeight = 116,
    originX = 32,
    originY = 32,
  } = options

  if (nodes.length === 0) return []

  // 顶层节点参与全局拓扑排布；带 parentId 的子流节点保持相对父容器坐标
  const topLevelNodes = nodes.filter((n) => !n.parentId)
  const topLevelSet = new Set(topLevelNodes.map((n) => n.id))
  const parentOf = new Map<string, string>()
  for (const n of nodes) {
    if (n.parentId) parentOf.set(n.id, n.parentId)
  }

  // 将涉及子节点的边映射到其所属顶层祖先，确保子流分组容器能按数据流顺序排列
  const resolveTopId = (id: string): string => {
    let cur = id
    const visited = new Set<string>()
    while (parentOf.has(cur) && !visited.has(cur)) {
      visited.add(cur)
      cur = parentOf.get(cur)!
    }
    return cur
  }

  const adj = new Map<string, Set<string>>()
  const inDegree = new Map<string, number>()
  for (const n of topLevelNodes) {
    adj.set(n.id, new Set())
    inDegree.set(n.id, 0)
  }

  for (const edge of edges) {
    const src = resolveTopId(edge.source)
    const tgt = resolveTopId(edge.target)
    if (src === tgt || !topLevelSet.has(src) || !topLevelSet.has(tgt)) continue
    const neighbors = adj.get(src)!
    if (!neighbors.has(tgt)) {
      neighbors.add(tgt)
      inDegree.set(tgt, (inDegree.get(tgt) ?? 0) + 1)
    }
  }

  // Kahn 拓扑层级推导（遇到环路时按剩余节点入度最小值破环继续分层）
  const rankMap = new Map<string, number>()
  const placed = new Set<string>()
  const queue: string[] = []
  for (const n of topLevelNodes) {
    if ((inDegree.get(n.id) ?? 0) === 0) {
      queue.push(n.id)
      rankMap.set(n.id, 0)
    }
  }

  while (placed.size < topLevelNodes.length) {
    if (queue.length === 0) {
      // 存在环路：选取未排布节点中入度最小者破环
      let fallbackId = ''
      let minDeg = Number.POSITIVE_INFINITY
      for (const n of topLevelNodes) {
        if (placed.has(n.id)) continue
        const deg = inDegree.get(n.id) ?? 0
        if (deg < minDeg) {
          minDeg = deg
          fallbackId = n.id
        }
      }
      if (!fallbackId) break
      queue.push(fallbackId)
      if (!rankMap.has(fallbackId)) rankMap.set(fallbackId, 0)
    }

    const cur = queue.shift()!
    if (placed.has(cur)) continue
    placed.add(cur)
    const curRank = rankMap.get(cur) ?? 0

    for (const next of adj.get(cur) ?? []) {
      if (placed.has(next)) continue
      rankMap.set(next, Math.max(rankMap.get(next) ?? 0, curRank + 1))
      const nextDeg = (inDegree.get(next) ?? 1) - 1
      inDegree.set(next, nextDeg)
      if (nextDeg <= 0) {
        queue.push(next)
      }
    }
  }

  // 按层聚合节点并计算每层最大主轴跨度
  const layers = new Map<number, N[]>()
  for (const n of topLevelNodes) {
    const r = rankMap.get(n.id) ?? 0
    const bucket = layers.get(r) ?? []
    bucket.push(n)
    layers.set(r, bucket)
  }

  const sortedRanks = Array.from(layers.keys()).sort((a, b) => a - b)
  const isHorizontal = direction === 'LR' || direction === 'RL'
  const isReversed = direction === 'RL' || direction === 'BT'
  const orderedRanks = isReversed ? [...sortedRanks].reverse() : sortedRanks

  const posMap = new Map<string, { x: number; y: number }>()
  let cursorPrimary = isHorizontal ? originX : originY

  for (const rank of orderedRanks) {
    const layerNodes = layers.get(rank) ?? []
    let maxPrimarySpan = 0
    let cursorCross = isHorizontal ? originY : originX

    for (const node of layerNodes) {
      const { width, height } = getNodeSize(node, defaultNodeWidth, defaultNodeHeight)
      if (isHorizontal) {
        posMap.set(node.id, { x: Math.round(cursorPrimary), y: Math.round(cursorCross) })
        cursorCross += height + nodeSep
        maxPrimarySpan = Math.max(maxPrimarySpan, width)
      } else {
        posMap.set(node.id, { x: Math.round(cursorCross), y: Math.round(cursorPrimary) })
        cursorCross += width + nodeSep
        maxPrimarySpan = Math.max(maxPrimarySpan, height)
      }
    }

    cursorPrimary += maxPrimarySpan + rankSep
  }

  return nodes.map((node) => {
    const nextPos = posMap.get(node.id)
    if (!nextPos) return node
    return {
      ...node,
      position: nextPos,
    }
  })
}

export interface FlowLineageResult {
  nodeIds: Set<string>
  edgeIds: Set<string>
}

/** 递归查找指定节点的全部上游祖先节点与关联连线（基于 ReactFlow getIncomers / getConnectedEdges） */
export function getFlowUpstream<N extends Node = Node, E extends Edge = Edge>(
  nodeId: string,
  nodes: N[],
  edges: E[]
): FlowLineageResult {
  const visitedNodes = new Set<string>([nodeId])
  const visitedEdges = new Set<string>()
  const nodeMap = new Map(nodes.map((n) => [n.id, n]))
  const stack: string[] = [nodeId]

  while (stack.length > 0) {
    const currentId = stack.pop()!
    const currentNode = nodeMap.get(currentId)
    if (!currentNode) continue
    const incomers = getIncomers(currentNode, nodes, edges)
    const connected = getConnectedEdges([currentNode], edges)
    for (const edge of connected) {
      if (edge.target === currentId) {
        visitedEdges.add(edge.id)
      }
    }
    for (const inc of incomers) {
      if (!visitedNodes.has(inc.id)) {
        visitedNodes.add(inc.id)
        stack.push(inc.id)
      }
    }
  }

  return { nodeIds: visitedNodes, edgeIds: visitedEdges }
}

/** 递归查找指定节点的全部下游后继节点与关联连线（基于 ReactFlow getOutgoers / getConnectedEdges） */
export function getFlowDownstream<N extends Node = Node, E extends Edge = Edge>(
  nodeId: string,
  nodes: N[],
  edges: E[]
): FlowLineageResult {
  const visitedNodes = new Set<string>([nodeId])
  const visitedEdges = new Set<string>()
  const nodeMap = new Map(nodes.map((n) => [n.id, n]))
  const stack: string[] = [nodeId]

  while (stack.length > 0) {
    const currentId = stack.pop()!
    const currentNode = nodeMap.get(currentId)
    if (!currentNode) continue
    const outgoers = getOutgoers(currentNode, nodes, edges)
    const connected = getConnectedEdges([currentNode], edges)
    for (const edge of connected) {
      if (edge.source === currentId) {
        visitedEdges.add(edge.id)
      }
    }
    for (const out of outgoers) {
      if (!visitedNodes.has(out.id)) {
        visitedNodes.add(out.id)
        stack.push(out.id)
      }
    }
  }

  return { nodeIds: visitedNodes, edgeIds: visitedEdges }
}

/**
 * 环路检测辅助函数（配合 ReactFlow isValidConnection 阻止形成循环依赖）
 * 返回 true 表示加入候选连线后将形成环路或自环。
 */
export function hasFlowCycle<E extends Edge = Edge>(
  edges: ReadonlyArray<E>,
  candidate: Pick<Connection, 'source' | 'target'>
): boolean {
  if (!candidate.source || !candidate.target) return false
  if (candidate.source === candidate.target) return true

  const adj = new Map<string, string[]>()
  for (const e of edges) {
    const list = adj.get(e.source) ?? []
    list.push(e.target)
    adj.set(e.source, list)
  }

  // 从 candidate.target 出发能否抵达 candidate.source
  const visited = new Set<string>()
  const stack = [candidate.target]
  while (stack.length > 0) {
    const cur = stack.pop()!
    if (cur === candidate.source) return true
    if (visited.has(cur)) continue
    visited.add(cur)
    for (const next of adj.get(cur) ?? []) {
      stack.push(next)
    }
  }
  return false
}

export interface FlowHelperLines {
  horizontal?: number
  vertical?: number
  snapPosition?: { x: number; y: number }
}

/**
 * 计算拖拽节点相对于画布其余节点的磁吸对齐参考线（左缘 / 中线 / 右缘、上缘 / 中线 / 下缘）
 */
export function computeFlowHelperLines<N extends Node = Node>(
  draggingNode: N,
  allNodes: ReadonlyArray<N>,
  threshold = 6
): FlowHelperLines {
  const dragSize = getNodeSize(draggingNode, 220, 110)
  const dragLeft = draggingNode.position.x
  const dragRight = dragLeft + dragSize.width
  const dragCenterX = dragLeft + dragSize.width / 2
  const dragTop = draggingNode.position.y
  const dragBottom = dragTop + dragSize.height
  const dragCenterY = dragTop + dragSize.height / 2

  let bestVDist = threshold + 1
  let bestHDist = threshold + 1
  let vertical: number | undefined
  let horizontal: number | undefined
  let snapX = dragLeft
  let snapY = dragTop

  for (const other of allNodes) {
    if (other.id === draggingNode.id || other.parentId !== draggingNode.parentId) continue
    const size = getNodeSize(other, 220, 110)
    const oLeft = other.position.x
    const oRight = oLeft + size.width
    const oCenterX = oLeft + size.width / 2
    const oTop = other.position.y
    const oBottom = oTop + size.height
    const oCenterY = oTop + size.height / 2

    const vCandidates: Array<[number, number, number]> = [
      [Math.abs(dragLeft - oLeft), oLeft, oLeft],
      [Math.abs(dragRight - oRight), oRight, oRight - dragSize.width],
      [Math.abs(dragCenterX - oCenterX), oCenterX, oCenterX - dragSize.width / 2],
    ]
    for (const [dist, linePos, targetX] of vCandidates) {
      if (dist < bestVDist) {
        bestVDist = dist
        vertical = linePos
        snapX = targetX
      }
    }

    const hCandidates: Array<[number, number, number]> = [
      [Math.abs(dragTop - oTop), oTop, oTop],
      [Math.abs(dragBottom - oBottom), oBottom, oBottom - dragSize.height],
      [Math.abs(dragCenterY - oCenterY), oCenterY, oCenterY - dragSize.height / 2],
    ]
    for (const [dist, linePos, targetY] of hCandidates) {
      if (dist < bestHDist) {
        bestHDist = dist
        horizontal = linePos
        snapY = targetY
      }
    }
  }

  return {
    horizontal,
    vertical,
    snapPosition:
      horizontal !== undefined || vertical !== undefined ? { x: snapX, y: snapY } : undefined,
  }
}

export interface FlowSnapshotPayload<N extends Node = Node, E extends Edge = Edge> {
  version: 1
  exportedAt: string
  nodes: N[]
  edges: E[]
  viewport?: Viewport
}

/** 序列化 ReactFlow 图谱快照为格式化 JSON */
export function serializeFlowSnapshot<N extends Node = Node, E extends Edge = Edge>(
  nodes: N[],
  edges: E[],
  viewport?: Viewport
): string {
  const payload: FlowSnapshotPayload<N, E> = {
    version: 1,
    exportedAt: new Date().toISOString(),
    nodes,
    edges,
    viewport,
  }
  return JSON.stringify(payload, null, 2)
}

/** 反序列化并基础校验 ReactFlow 图谱快照 JSON */
export function parseFlowSnapshot<N extends Node = Node, E extends Edge = Edge>(
  rawJson: string
): FlowSnapshotPayload<N, E> {
  const parsed = JSON.parse(rawJson) as Partial<FlowSnapshotPayload<N, E>>
  if (!parsed || !Array.isArray(parsed.nodes) || !Array.isArray(parsed.edges)) {
    throw new Error('无效的流程图快照格式：缺少 nodes 或 edges 数组')
  }
  return {
    version: 1,
    exportedAt: typeof parsed.exportedAt === 'string' ? parsed.exportedAt : new Date().toISOString(),
    nodes: parsed.nodes,
    edges: parsed.edges,
    viewport: parsed.viewport,
  }
}
