import { useCallback, useEffect, useRef, useState } from 'react'
import type { Edge, Node } from '@xyflow/react'
import { duplicateFlowSubgraph } from '../utils/flowAdvancedGraph'

export interface UseFlowClipboardOptions<N extends Node = Node, E extends Edge = Edge> {
  nodes: ReadonlyArray<N>
  edges: ReadonlyArray<E>
  /** 粘贴成功后由调用方写回节点与连线（可先触发 history.takeSnapshot） */
  onPaste: (clonedNodes: N[], clonedEdges: E[]) => void
  /** 是否监听 ⌘C / ⌘V 快捷键（默认 false，按需开启） */
  enableKeyboardShortcuts?: boolean
  /** 是否禁用粘贴（如只读/运行态） */
  disabled?: boolean
}

export interface UseFlowClipboardReturn<N extends Node = Node, E extends Edge = Edge> {
  /** 复制当前选中节点（或显式传入节点 ID 集合）及其内部连线 */
  copy: (nodeIds?: ReadonlyArray<string>) => number
  /** 粘贴已复制的子图（连续粘贴自动递进错位偏移） */
  paste: () => { nodes: N[]; edges: E[] } | null
  /** 当前剪贴板内缓存的节点数量 */
  copiedCount: number
  /** 清空剪贴板 */
  clear: () => void
}

/**
 * 画布多选子图复制 / 粘贴 Hook (useFlowClipboard)
 * 支持同时复制多个选中节点及其相互间的内部连线，自动重映射 ID 并递增错位偏移。
 */
export function useFlowClipboard<N extends Node = Node, E extends Edge = Edge>({
  nodes,
  edges,
  onPaste,
  enableKeyboardShortcuts = false,
  disabled = false,
}: UseFlowClipboardOptions<N, E>): UseFlowClipboardReturn<N, E> {
  const bufferRef = useRef<{ nodes: N[]; edges: E[]; pasteStep: number }>({
    nodes: [],
    edges: [],
    pasteStep: 0,
  })
  const [copiedCount, setCopiedCount] = useState(0)

  const copy = useCallback(
    (explicitIds?: ReadonlyArray<string>) => {
      const targetIds =
        explicitIds && explicitIds.length > 0
          ? explicitIds
          : nodes.filter((n) => n.selected).map((n) => n.id)
      if (targetIds.length === 0) return 0
      const selectedSet = new Set(targetIds)
      for (const n of nodes) {
        if (n.parentId && selectedSet.has(n.parentId)) {
          selectedSet.add(n.id)
        }
      }
      const pickedNodes = nodes.filter((n) => selectedSet.has(n.id))
      const pickedEdges = edges.filter(
        (e) => selectedSet.has(e.source) && selectedSet.has(e.target)
      )
      bufferRef.current = { nodes: pickedNodes, edges: pickedEdges, pasteStep: 0 }
      setCopiedCount(pickedNodes.length)
      return pickedNodes.length
    },
    [nodes, edges]
  )

  const paste = useCallback(() => {
    if (disabled || bufferRef.current.nodes.length === 0) return null
    bufferRef.current.pasteStep += 1
    const step = bufferRef.current.pasteStep
    const { nodes: clonedNodes, edges: clonedEdges } = duplicateFlowSubgraph(
      bufferRef.current.nodes,
      bufferRef.current.edges,
      bufferRef.current.nodes.map((n) => n.id),
      { x: 36 * step, y: 36 * step }
    )
    if (clonedNodes.length === 0) return null
    onPaste(clonedNodes, clonedEdges)
    return { nodes: clonedNodes, edges: clonedEdges }
  }, [disabled, onPaste])

  const clear = useCallback(() => {
    bufferRef.current = { nodes: [], edges: [], pasteStep: 0 }
    setCopiedCount(0)
  }, [])

  useEffect(() => {
    if (!enableKeyboardShortcuts || typeof window === 'undefined') return
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return
      }
      const mod = event.metaKey || event.ctrlKey
      if (!mod) return
      const key = event.key.toLowerCase()
      if (key === 'c') {
        const count = copy()
        if (count > 0) event.preventDefault()
      } else if (key === 'v') {
        if (bufferRef.current.nodes.length > 0 && !disabled) {
          event.preventDefault()
          paste()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [enableKeyboardShortcuts, copy, paste, disabled])

  return { copy, paste, copiedCount, clear }
}
