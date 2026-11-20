import { useCallback, useEffect, useRef, useState } from 'react'
import type { Edge, Node } from '@xyflow/react'

export interface FlowHistorySnapshot<N extends Node = Node, E extends Edge = Edge> {
  nodes: N[]
  edges: E[]
}

export interface UseFlowHistoryOptions {
  /** 最大保留历史步数（默认 40） */
  maxSteps?: number
  /** 是否自动监听全局 ⌘Z / Ctrl+Z 与 ⇧⌘Z / Ctrl+Y 撤销重做快捷键（默认 false，避免多画布冲突） */
  enableKeyboardShortcuts?: boolean
}

export interface UseFlowHistoryReturn<N extends Node = Node, E extends Edge = Edge> {
  /** 推入一条变更前的快照（供后续撤销） */
  takeSnapshot: (nodes: N[], edges: E[]) => void
  /** 撤销到上一快照，需传入当前最新状态以压入重做栈 */
  undo: (currentNodes: N[], currentEdges: E[]) => FlowHistorySnapshot<N, E> | null
  /** 重做下一快照，需传入当前最新状态以压入撤销栈 */
  redo: (currentNodes: N[], currentEdges: E[]) => FlowHistorySnapshot<N, E> | null
  /** 清空撤销/重做栈 */
  clear: () => void
  canUndo: boolean
  canRedo: boolean
  pastCount: number
  futureCount: number
}

function cloneSnapshot<N extends Node, E extends Edge>(
  nodes: N[],
  edges: E[]
): FlowHistorySnapshot<N, E> {
  return {
    nodes: nodes.map((n) => ({
      ...n,
      position: { ...n.position },
      data: n.data ? { ...n.data } : n.data,
    })),
    edges: edges.map((e) => ({
      ...e,
      data: e.data ? { ...e.data } : e.data,
    })),
  }
}

/**
 * ReactFlow 撤销 / 重做快照历史 Hook (useFlowHistory)
 * 在执行新增节点、删除、自动排版或连线重连前调用 takeSnapshot(nodes, edges)，即可随时无损回退或重做。
 */
export function useFlowHistory<N extends Node = Node, E extends Edge = Edge>(
  options: UseFlowHistoryOptions = {},
  shortcutHandlers?: {
    onUndo?: () => void
    onRedo?: () => void
  }
): UseFlowHistoryReturn<N, E> {
  const { maxSteps = 40, enableKeyboardShortcuts = false } = options
  const pastRef = useRef<Array<FlowHistorySnapshot<N, E>>>([])
  const futureRef = useRef<Array<FlowHistorySnapshot<N, E>>>([])
  const [, setVersion] = useState(0)

  const notify = useCallback(() => setVersion((v) => v + 1), [])

  const takeSnapshot = useCallback(
    (nodes: N[], edges: E[]) => {
      pastRef.current = [...pastRef.current.slice(-(maxSteps - 1)), cloneSnapshot(nodes, edges)]
      futureRef.current = []
      notify()
    },
    [maxSteps, notify]
  )

  const undo = useCallback(
    (currentNodes: N[], currentEdges: E[]): FlowHistorySnapshot<N, E> | null => {
      if (pastRef.current.length === 0) return null
      const previous = pastRef.current[pastRef.current.length - 1]!
      pastRef.current = pastRef.current.slice(0, -1)
      futureRef.current = [
        ...futureRef.current.slice(-(maxSteps - 1)),
        cloneSnapshot(currentNodes, currentEdges),
      ]
      notify()
      return cloneSnapshot(previous.nodes, previous.edges)
    },
    [maxSteps, notify]
  )

  const redo = useCallback(
    (currentNodes: N[], currentEdges: E[]): FlowHistorySnapshot<N, E> | null => {
      if (futureRef.current.length === 0) return null
      const next = futureRef.current[futureRef.current.length - 1]!
      futureRef.current = futureRef.current.slice(0, -1)
      pastRef.current = [
        ...pastRef.current.slice(-(maxSteps - 1)),
        cloneSnapshot(currentNodes, currentEdges),
      ]
      notify()
      return cloneSnapshot(next.nodes, next.edges)
    },
    [maxSteps, notify]
  )

  const clear = useCallback(() => {
    pastRef.current = []
    futureRef.current = []
    notify()
  }, [notify])

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
      if (key === 'z' && !event.shiftKey) {
        event.preventDefault()
        shortcutHandlers?.onUndo?.()
      } else if ((key === 'z' && event.shiftKey) || key === 'y') {
        event.preventDefault()
        shortcutHandlers?.onRedo?.()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [enableKeyboardShortcuts, shortcutHandlers])

  return {
    takeSnapshot,
    undo,
    redo,
    clear,
    canUndo: pastRef.current.length > 0,
    canRedo: futureRef.current.length > 0,
    pastCount: pastRef.current.length,
    futureCount: futureRef.current.length,
  }
}
