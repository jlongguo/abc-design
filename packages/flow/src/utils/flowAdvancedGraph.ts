import {
  ConnectionMode,
  MarkerType,
  Position,
  getNodesBounds,
  getViewportForBounds,
  type AriaLabelConfig,
  type Edge,
  type Node,
  type Viewport,
} from '@xyflow/react'

/** 语义常量重导出，便于消费端统一从 @abc-design/flow 导入而无需零散直引 @xyflow/react */
export const FLOW_POSITION = Position
export const FLOW_MARKER_TYPE = MarkerType
export const FLOW_CONNECTION_MODE = ConnectionMode

/** React Flow 中文无障碍 ARIA 文案预设 */
export const FLOW_ARIA_LABELS_ZH: Partial<AriaLabelConfig> = {
  'node.a11yDescription.default': '按回车或空格选中节点，使用方向键微调位置，按退格键删除。',
  'node.a11yDescription.keyboardDisabled': '按回车或空格选中节点，按退格键删除。',
  'node.a11yDescription.ariaLiveMessage': ({ direction, x, y }) =>
    `已向${direction}移动节点至坐标 x=${Math.round(x)}, y=${Math.round(y)}`,
  'edge.a11yDescription.default': '按回车或空格选中连线，按退格键删除。',
  'controls.ariaLabel': '画布视口控制栏',
  'controls.fitView.ariaLabel': '自适应居中画布',
  'controls.interactive.ariaLabel': '切换画布编辑锁定',
  'controls.zoomIn.ariaLabel': '放大画布',
  'controls.zoomOut.ariaLabel': '缩小画布',
  'minimap.ariaLabel': '画布缩略图导航',
  'handle.ariaLabel': '节点连接端口',
}

/** React Flow 英文无障碍 ARIA 文案预设 */
export const FLOW_ARIA_LABELS_EN: Partial<AriaLabelConfig> = {
  'controls.ariaLabel': 'Canvas viewport controls',
  'controls.fitView.ariaLabel': 'Fit canvas to view',
  'controls.interactive.ariaLabel': 'Toggle canvas edit lock',
  'controls.zoomIn.ariaLabel': 'Zoom in canvas',
  'controls.zoomOut.ariaLabel': 'Zoom out canvas',
  'minimap.ariaLabel': 'Canvas minimap navigation',
  'handle.ariaLabel': 'Node connection handle',
}

export type FlowNodeAlignment =
  | 'left'
  | 'centerX'
  | 'right'
  | 'top'
  | 'centerY'
  | 'bottom'
  | 'distributeH'
  | 'distributeV'

function resolveNodeDimensions(node: Node, fallbackW = 220, fallbackH = 110) {
  const width =
    node.measured?.width ??
    (typeof node.width === 'number' ? node.width : undefined) ??
    (typeof node.style?.width === 'number' ? node.style.width : undefined) ??
    fallbackW
  const height =
    node.measured?.height ??
    (typeof node.height === 'number' ? node.height : undefined) ??
    (typeof node.style?.height === 'number' ? node.style.height : undefined) ??
    fallbackH
  return { width, height }
}

/**
 * 多节点批量对齐与等距分布算法 (alignFlowNodes)
 * - 至少选中 2 个同层级节点时生效（等距分布至少 3 个节点）；
 * - 返回新的节点数组（不可变更新），可直接提交至业务偏移栈或 ReactFlow 受控状态。
 */
export function alignFlowNodes<N extends Node = Node>(
  nodes: ReadonlyArray<N>,
  selectedIds: ReadonlyArray<string>,
  alignment: FlowNodeAlignment
): N[] {
  const selectedSet = new Set(selectedIds)
  const targets = nodes.filter((n) => selectedSet.has(n.id))
  if (targets.length < 2) return [...nodes]

  const rects = targets.map((node) => {
    const { width, height } = resolveNodeDimensions(node)
    return {
      node,
      x: node.position.x,
      y: node.position.y,
      width,
      height,
      right: node.position.x + width,
      bottom: node.position.y + height,
      cx: node.position.x + width / 2,
      cy: node.position.y + height / 2,
    }
  })

  const nextPosMap = new Map<string, { x: number; y: number }>()

  if (alignment === 'left') {
    const minX = Math.min(...rects.map((r) => r.x))
    for (const r of rects) nextPosMap.set(r.node.id, { x: Math.round(minX), y: r.y })
  } else if (alignment === 'right') {
    const maxRight = Math.max(...rects.map((r) => r.right))
    for (const r of rects) nextPosMap.set(r.node.id, { x: Math.round(maxRight - r.width), y: r.y })
  } else if (alignment === 'centerX') {
    const minX = Math.min(...rects.map((r) => r.x))
    const maxRight = Math.max(...rects.map((r) => r.right))
    const midX = (minX + maxRight) / 2
    for (const r of rects) nextPosMap.set(r.node.id, { x: Math.round(midX - r.width / 2), y: r.y })
  } else if (alignment === 'top') {
    const minY = Math.min(...rects.map((r) => r.y))
    for (const r of rects) nextPosMap.set(r.node.id, { x: r.x, y: Math.round(minY) })
  } else if (alignment === 'bottom') {
    const maxBottom = Math.max(...rects.map((r) => r.bottom))
    for (const r of rects) nextPosMap.set(r.node.id, { x: r.x, y: Math.round(maxBottom - r.height) })
  } else if (alignment === 'centerY') {
    const minY = Math.min(...rects.map((r) => r.y))
    const maxBottom = Math.max(...rects.map((r) => r.bottom))
    const midY = (minY + maxBottom) / 2
    for (const r of rects) nextPosMap.set(r.node.id, { x: r.x, y: Math.round(midY - r.height / 2) })
  } else if (alignment === 'distributeH' && rects.length >= 3) {
    const sorted = [...rects].sort((a, b) => a.x - b.x)
    const first = sorted[0]!
    const last = sorted[sorted.length - 1]!
    const totalWidths = sorted.reduce((sum, r) => sum + r.width, 0)
    const gap = (last.right - first.x - totalWidths) / (sorted.length - 1)
    let cursor = first.x
    for (const r of sorted) {
      nextPosMap.set(r.node.id, { x: Math.round(cursor), y: r.y })
      cursor += r.width + gap
    }
  } else if (alignment === 'distributeV' && rects.length >= 3) {
    const sorted = [...rects].sort((a, b) => a.y - b.y)
    const first = sorted[0]!
    const last = sorted[sorted.length - 1]!
    const totalHeights = sorted.reduce((sum, r) => sum + r.height, 0)
    const gap = (last.bottom - first.y - totalHeights) / (sorted.length - 1)
    let cursor = first.y
    for (const r of sorted) {
      nextPosMap.set(r.node.id, { x: r.x, y: Math.round(cursor) })
      cursor += r.height + gap
    }
  }

  return nodes.map((node) => {
    const nextPos = nextPosMap.get(node.id)
    if (!nextPos) return node
    return { ...node, position: nextPos }
  })
}

export interface FlowProximityCandidate {
  source: string
  target: string
  distance: number
}

/**
 * 就近磁吸连线探测 (computeProximityEdge)
 * 拖拽节点靠近另一节点且中心距小于 maxDistance 时，返回最近的候选连线方向（左→右或上→下自动判断源与目标）。
 */
export function computeProximityEdge<N extends Node = Node, E extends Edge = Edge>(
  draggingNode: N,
  allNodes: ReadonlyArray<N>,
  existingEdges: ReadonlyArray<E>,
  options: { maxDistance?: number; ignoreTypes?: ReadonlyArray<string> } = {}
): FlowProximityCandidate | null {
  const maxDistance = options.maxDistance ?? 170
  const ignoreTypes = new Set(options.ignoreTypes ?? ['flow-group', 'sectionFrameNode'])
  if (draggingNode.type && ignoreTypes.has(draggingNode.type)) return null

  const dragSize = resolveNodeDimensions(draggingNode)
  const dragCx = draggingNode.position.x + dragSize.width / 2
  const dragCy = draggingNode.position.y + dragSize.height / 2

  let best: FlowProximityCandidate | null = null

  for (const other of allNodes) {
    if (other.id === draggingNode.id) continue
    if (other.type && ignoreTypes.has(other.type)) continue
    if (other.parentId !== draggingNode.parentId) continue

    const otherSize = resolveNodeDimensions(other)
    const otherCx = other.position.x + otherSize.width / 2
    const otherCy = other.position.y + otherSize.height / 2
    const distance = Math.hypot(dragCx - otherCx, dragCy - otherCy)

    if (distance > maxDistance) continue
    const source = otherCx <= dragCx ? other.id : draggingNode.id
    const target = otherCx <= dragCx ? draggingNode.id : other.id
    const duplicate = existingEdges.some(
      (e) =>
        (e.source === source && e.target === target) ||
        (e.source === target && e.target === source)
    )
    if (duplicate) continue

    if (!best || distance < best.distance) {
      best = { source, target, distance }
    }
  }

  return best
}

export interface FlowGroupDropResult {
  groupId: string | null
  relativePosition: { x: number; y: number }
}

/**
 * 节点拖拽碰撞归组 / 拖出解绑计算 (findIntersectingGroupNode)
 * 检测拖拽节点中心点是否落入某个分组容器矩形内，并换算对应的父容器相对坐标或顶层世界坐标。
 */
export function findIntersectingGroupNode<N extends Node = Node>(
  draggingNode: N,
  allNodes: ReadonlyArray<N>,
  groupTypes: ReadonlyArray<string> = ['flow-group']
): FlowGroupDropResult {
  const groupTypeSet = new Set(groupTypes)
  const nodeMap = new Map(allNodes.map((n) => [n.id, n]))

  // 计算拖拽节点当前的世界坐标
  let absX = draggingNode.position.x
  let absY = draggingNode.position.y
  let parentCursor = draggingNode.parentId
  const guard = new Set<string>()
  while (parentCursor && !guard.has(parentCursor)) {
    guard.add(parentCursor)
    const parent = nodeMap.get(parentCursor)
    if (!parent) break
    absX += parent.position.x
    absY += parent.position.y
    parentCursor = parent.parentId
  }

  const dragSize = resolveNodeDimensions(draggingNode)
  const centerX = absX + dragSize.width / 2
  const centerY = absY + dragSize.height / 2

  for (const candidate of allNodes) {
    if (candidate.id === draggingNode.id) continue
    if (!candidate.type || !groupTypeSet.has(candidate.type)) continue
    const { width, height } = resolveNodeDimensions(candidate, 360, 240)
    const gx = candidate.position.x
    const gy = candidate.position.y
    if (centerX >= gx && centerX <= gx + width && centerY >= gy && centerY <= gy + height) {
      return {
        groupId: candidate.id,
        relativePosition: {
          x: Math.max(16, Math.round(absX - gx)),
          y: Math.max(44, Math.round(absY - gy)),
        },
      }
    }
  }

  return {
    groupId: null,
    relativePosition: {
      x: Math.round(absX),
      y: Math.round(absY),
    },
  }
}

export interface DuplicateFlowSubgraphResult<N extends Node = Node, E extends Edge = Edge> {
  nodes: N[]
  edges: E[]
  idMap: Record<string, string>
}

/**
 * 复制选中子图（多节点 + 内部连线完整克隆并重映射 ID）
 */
export function duplicateFlowSubgraph<N extends Node = Node, E extends Edge = Edge>(
  allNodes: ReadonlyArray<N>,
  allEdges: ReadonlyArray<E>,
  selectedNodeIds: ReadonlyArray<string>,
  offset: { x: number; y: number } = { x: 40, y: 40 }
): DuplicateFlowSubgraphResult<N, E> {
  const selectedSet = new Set(selectedNodeIds)
  if (selectedSet.size === 0) return { nodes: [], edges: [], idMap: {} }

  // 若选中了父分组，自动携带其所有子节点
  for (const n of allNodes) {
    if (n.parentId && selectedSet.has(n.parentId)) {
      selectedSet.add(n.id)
    }
  }

  const stamp = Date.now().toString(36)
  const idMap: Record<string, string> = {}
  let idx = 0
  for (const n of allNodes) {
    if (selectedSet.has(n.id)) {
      idx += 1
      idMap[n.id] = `${n.id}-copy-${stamp}-${idx}`
    }
  }

  const clonedNodes: N[] = allNodes
    .filter((n) => selectedSet.has(n.id))
    .map((n) => {
      const remappedParent = n.parentId && idMap[n.parentId] ? idMap[n.parentId] : undefined
      return {
        ...n,
        id: idMap[n.id]!,
        parentId: remappedParent ?? n.parentId,
        selected: true,
        position: remappedParent
          ? { ...n.position }
          : { x: Math.round(n.position.x + offset.x), y: Math.round(n.position.y + offset.y) },
        data: n.data ? { ...n.data } : n.data,
      }
    })

  const clonedEdges: E[] = allEdges
    .filter((e) => Boolean(idMap[e.source] && idMap[e.target]))
    .map((e, edgeIdx) => ({
      ...e,
      id: `${e.id}-copy-${stamp}-${edgeIdx + 1}`,
      source: idMap[e.source]!,
      target: idMap[e.target]!,
      selected: true,
      data: e.data ? { ...e.data } : e.data,
    }))

  return { nodes: clonedNodes, edges: clonedEdges, idMap }
}

export interface FlowExportViewportResult {
  viewport: Viewport
  bounds: { x: number; y: number; width: number; height: number }
  imageWidth: number
  imageHeight: number
}

/**
 * 基于 ReactFlow getNodesBounds + getViewportForBounds 计算全图无裁切导出视口参数
 */
export function computeFlowExportViewport<N extends Node = Node>(
  nodes: ReadonlyArray<N>,
  options: {
    width?: number
    height?: number
    padding?: number
    minZoom?: number
    maxZoom?: number
  } = {}
): FlowExportViewportResult {
  const imageWidth = options.width ?? 1280
  const imageHeight = options.height ?? 760
  const padding = options.padding ?? 0.14
  const minZoom = options.minZoom ?? 0.25
  const maxZoom = options.maxZoom ?? 2

  const bounds = getNodesBounds(nodes as N[])
  const safeBounds =
    bounds.width > 0 && bounds.height > 0
      ? bounds
      : { x: 0, y: 0, width: imageWidth, height: imageHeight }
  const viewport = getViewportForBounds(
    safeBounds,
    imageWidth,
    imageHeight,
    minZoom,
    maxZoom,
    padding
  )
  return {
    viewport,
    bounds: safeBounds,
    imageWidth,
    imageHeight,
  }
}

/**
 * 零外部依赖导出当前画布为清晰矢量 SVG Data URL（基于节点包围盒与连线路径生成，适配亮暗主题）
 */
export function exportFlowToSvgDataUrl<N extends Node = Node, E extends Edge = Edge>(
  nodes: ReadonlyArray<N>,
  edges: ReadonlyArray<E>,
  options: {
    width?: number
    height?: number
    backgroundColor?: string
    title?: string
    dark?: boolean
  } = {}
): string {
  const { viewport, imageWidth, imageHeight } = computeFlowExportViewport(nodes, {
    width: options.width ?? 1280,
    height: options.height ?? 720,
  })
  const isDark = Boolean(options.dark)
  const bg = options.backgroundColor ?? (isDark ? '#0b101b' : '#f8fafc')
  const cardBg = isDark ? '#141b2d' : '#ffffff'
  const cardBorder = isDark ? '#334155' : '#cbd5e1'
  const textFg = isDark ? '#f1f5f9' : '#0f172a'
  const subFg = isDark ? '#94a3b8' : '#64748b'
  const edgeStroke = isDark ? '#64748b' : '#94a3b8'

  const escapeXml = (str: string) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')

  const nodeMap = new Map(nodes.map((n) => [n.id, n]))
  const absPos = (node: N): { x: number; y: number } => {
    let x = node.position.x
    let y = node.position.y
    let p = node.parentId
    const seen = new Set<string>()
    while (p && !seen.has(p)) {
      seen.add(p)
      const parent = nodeMap.get(p)
      if (!parent) break
      x += parent.position.x
      y += parent.position.y
      p = parent.parentId
    }
    return { x, y }
  }

  const edgeSvg = edges
    .map((e) => {
      const src = nodeMap.get(e.source)
      const tgt = nodeMap.get(e.target)
      if (!src || !tgt) return ''
      const sPos = absPos(src)
      const tPos = absPos(tgt)
      const sSize = resolveNodeDimensions(src)
      const tSize = resolveNodeDimensions(tgt)
      const sx = sPos.x + sSize.width
      const sy = sPos.y + sSize.height / 2
      const tx = tPos.x
      const ty = tPos.y + tSize.height / 2
      const mx = (sx + tx) / 2
      return `<path d="M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${ty}, ${tx} ${ty}" fill="none" stroke="${edgeStroke}" stroke-width="2" />`
    })
    .join('')

  const nodeSvg = nodes
    .map((n) => {
      const pos = absPos(n)
      const { width, height } = resolveNodeDimensions(n)
      const rawTitle =
        (n.data as { title?: unknown; label?: unknown } | undefined)?.title ??
        (n.data as { label?: unknown } | undefined)?.label ??
        n.id
      const titleText = escapeXml(String(rawTitle).slice(0, 36))
      const isFrame = n.type === 'flow-group' || n.type === 'sectionFrameNode'
      if (isFrame) {
        return `<g transform="translate(${pos.x}, ${pos.y})">
          <rect width="${width}" height="${height}" rx="14" fill="none" stroke="${cardBorder}" stroke-width="1.5" stroke-dasharray="6 4" />
          <text x="14" y="24" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="600" fill="${subFg}">${titleText}</text>
        </g>`
      }
      return `<g transform="translate(${pos.x}, ${pos.y})">
        <rect width="${width}" height="${height}" rx="12" fill="${cardBg}" stroke="${cardBorder}" stroke-width="1.5" />
        <text x="14" y="28" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="${textFg}">${titleText}</text>
        <text x="14" y="48" font-family="monospace" font-size="10.5" fill="${subFg}">${escapeXml(n.id)}</text>
      </g>`
    })
    .join('')

  const headerSvg = options.title
    ? `<text x="20" y="28" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="${subFg}">${escapeXml(options.title)}</text>`
    : ''

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${imageWidth}" height="${imageHeight}" viewBox="0 0 ${imageWidth} ${imageHeight}">
    <rect width="100%" height="100%" fill="${bg}" />
    ${headerSvg}
    <g transform="translate(${viewport.x.toFixed(1)}, ${viewport.y.toFixed(1)}) scale(${viewport.zoom.toFixed(3)})">
      ${edgeSvg}
      ${nodeSvg}
    </g>
  </svg>`

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}
