import { arrayMove } from '@abc-design/core'
import { ArrowDown, ArrowUp, GripVertical } from 'lucide-react'
import * as React from 'react'
import { useAbcMotion } from '../../hooks/useAbcDefaults'
import { cn } from '../../utils/cn'
import type { SortableListLabels, SortableListProps, SortableRowKey } from './types'

export function resolveSortableKey<T>(item: T, rowKey?: SortableRowKey<T>): string | number {
  if (typeof rowKey === 'function') return rowKey(item)
  const prop = (rowKey ?? 'id') as keyof T
  const raw = item?.[prop]
  return typeof raw === 'number' || typeof raw === 'string' ? raw : String(raw ?? '')
}

const DEFAULT_LABELS: Required<SortableListLabels> = {
  dragHandleLabel: (label, pos, total) => `拖拽或按空格键调整 ${label} 顺序（当前第 ${pos} / ${total} 项）`,
  idleFocusHint: 'Space 抓取排序',
  grabbedHint: '↑↓ 移动 · Space 放下 · Esc 取消',
  grabbedAnnouncement: (label, pos, total) =>
    `已抓取 ${label}，当前第 ${pos} / ${total} 项。按上下方向键移动，空格键放下，Esc 取消。`,
  movedAnnouncement: (label, pos, total) => `已将 ${label} 移至第 ${pos} 位，共 ${total} 项。`,
  droppedAnnouncement: (label, pos, total) => `已放下 ${label}，位于第 ${pos} / ${total} 项。`,
  cancelledAnnouncement: (label) => `已取消对 ${label} 的排序调整。`,
  moveUpLabel: (label) => `上移 ${label}`,
  moveDownLabel: (label) => `下移 ${label}`,
}

interface ActivePointerDrag {
  fromIndex: number
  pointerId: number
  startClientY: number
  startScrollTop: number
  deltaY: number
  targetSlot: number
}

function canUseViewTransition(motion: string, count: number): boolean {
  if (motion === 'none' || count > 120 || typeof document === 'undefined' || typeof window === 'undefined') {
    return false
  }
  if (typeof (document as any).startViewTransition !== 'function') return false
  if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false
  }
  return true
}

/**
 * 可拖拽重排紧凑卡片列表原语 (SortableList)
 *
 * 遵循现代 Web 拖拽与动态排序无障碍规范：
 * 1. 独立拖拽手柄（限定 touch-action: none 与 user-select: none，保留正文选择与滚屏）；
 * 2. 单指针捕获 + 布局中点计算落点 + CSS ::before/::after 缝隙落点指示线（拖拽中不抖动重排 DOM，松手一次性提交）；
 * 3. 完整支持键盘 Space 抓取 / 方向键移动 / Esc 取消回滚及单条 sr-only role="status" 礼貌播报。
 */
export function SortableList<T>({
  items,
  rowKey,
  onReorder,
  getItemLabel,
  selectedKey,
  onSelect,
  renderItem,
  renderActions,
  showMoveButtons = false,
  showIndexBadge = true,
  disabled = false,
  emptyNode,
  labels: customLabels,
  className,
  itemClassName,
  handleClassName,
  bodyClassName,
  ...rest
}: SortableListProps<T>) {
  const resolvedMotion = useAbcMotion()
  const labels = React.useMemo(() => ({ ...DEFAULT_LABELS, ...customLabels }), [customLabels])

  const listRef = React.useRef<HTMLDivElement | null>(null)
  const itemElsRef = React.useRef<Map<string, HTMLDivElement>>(new Map())
  const handleElsRef = React.useRef<Map<string, HTMLButtonElement>>(new Map())

  const [dragState, setDragState] = React.useState<ActivePointerDrag | null>(null)
  const dragRef = React.useRef<ActivePointerDrag | null>(null)
  const dragCleanupRef = React.useRef<(() => void) | null>(null)
  const [grabbedKey, setGrabbedKey] = React.useState<string | null>(null)
  const [focusedHandleKey, setFocusedHandleKey] = React.useState<string | null>(null)
  const preGrabSnapshotRef = React.useRef<T[] | null>(null)
  const isKeyboardMovingRef = React.useRef(false)
  const [announcement, setAnnouncement] = React.useState('')
  const announceTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const announce = React.useCallback((message: string) => {
    if (announceTimerRef.current) clearTimeout(announceTimerRef.current)
    setAnnouncement('')
    announceTimerRef.current = setTimeout(() => {
      setAnnouncement(message)
    }, 30)
  }, [])

  React.useEffect(
    () => () => {
      if (announceTimerRef.current) clearTimeout(announceTimerRef.current)
      dragCleanupRef.current?.()
      dragCleanupRef.current = null
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('abc-sortable-dragging')
      }
    },
    []
  )

  const resolveLabel = React.useCallback(
    (item: T, idx: number) => {
      if (getItemLabel) return getItemLabel(item, idx)
      return String(resolveSortableKey(item, rowKey))
    },
    [getItemLabel, rowKey]
  )

  const commitReorder = React.useCallback(
    (nextItems: T[], fromIndex: number, toIndex: number, key: string | number, trigger: 'pointer' | 'keyboard' | 'button') => {
      const run = () => onReorder(nextItems, { fromIndex, toIndex, key, trigger })
      if (trigger !== 'keyboard' && canUseViewTransition(resolvedMotion, nextItems.length)) {
        ;(document as any).startViewTransition(run)
      } else {
        run()
      }
    },
    [onReorder, resolvedMotion]
  )

  const clearDropMarker = React.useCallback(() => {
    const listEl = listRef.current
    if (!listEl) return
    listEl.removeAttribute('data-drop')
    listEl.style.removeProperty('--abc-drop-x')
    listEl.style.removeProperty('--abc-drop-y')
    listEl.style.removeProperty('--abc-drop-w')
  }, [])

  const updateDropMarker = React.useCallback(
    (fromIndex: number, targetSlot: number) => {
      const listEl = listRef.current
      if (!listEl) return
      if (targetSlot === fromIndex || targetSlot === fromIndex + 1) {
        clearDropMarker()
        return
      }
      const orderedEls = items
        .map((it) => itemElsRef.current.get(String(resolveSortableKey(it, rowKey))))
        .filter((el): el is HTMLDivElement => Boolean(el))
      if (orderedEls.length === 0) return

      const listRect = listEl.getBoundingClientRect()
      let gapY = listRect.top
      if (targetSlot <= 0) {
        gapY = orderedEls[0].getBoundingClientRect().top - 3
      } else if (targetSlot >= orderedEls.length) {
        gapY = orderedEls[orderedEls.length - 1].getBoundingClientRect().bottom + 3
      } else {
        const prevRect = orderedEls[targetSlot - 1].getBoundingClientRect()
        const nextRect = orderedEls[targetSlot].getBoundingClientRect()
        gapY = (prevRect.bottom + nextRect.top) / 2
      }

      listEl.setAttribute('data-drop', 'true')
      listEl.style.setProperty('--abc-drop-x', `${Math.round(listRect.left)}px`)
      listEl.style.setProperty('--abc-drop-y', `${Math.round(gapY)}px`)
      listEl.style.setProperty('--abc-drop-w', `${Math.round(listRect.width)}px`)
    },
    [clearDropMarker, items, rowKey]
  )

  const computeTargetSlot = React.useCallback(
    (clientY: number, fromIndex: number, deltaY: number): number => {
      const listEl = listRef.current
      if (!listEl) return fromIndex
      const orderedEls = items
        .map((it) => itemElsRef.current.get(String(resolveSortableKey(it, rowKey))))
        .filter((el): el is HTMLDivElement => Boolean(el))

      const hasRealLayout = orderedEls.some((el) => el.offsetHeight > 0)
      if (!hasRealLayout) {
        // 无真实布局引擎环境（如 jsdom 单元测试）按标准紧凑行高 44px 估算位移槽位
        const slotShift = Math.round(deltaY / 44)
        const rawTargetIndex = Math.max(0, Math.min(items.length - 1, fromIndex + slotShift))
        return rawTargetIndex > fromIndex ? rawTargetIndex + 1 : rawTargetIndex
      }

      const listRect = listEl.getBoundingClientRect()
      const clampedY = Math.max(listRect.top, Math.min(listRect.bottom, clientY))
      const pointerInList = clampedY - listRect.top - listEl.clientTop + listEl.scrollTop

      for (let idx = 0; idx < orderedEls.length; idx += 1) {
        const el = orderedEls[idx]
        const midpoint = el.offsetTop + el.offsetHeight / 2
        if (pointerInList < midpoint) {
          return idx
        }
      }
      return orderedEls.length
    },
    [items, rowKey]
  )

  const finishPointerDrag = React.useCallback(
    (commit: boolean) => {
      const current = dragRef.current
      if (!current) return
      dragRef.current = null
      dragCleanupRef.current?.()
      dragCleanupRef.current = null
      setDragState(null)
      clearDropMarker()
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('abc-sortable-dragging')
      }

      const movedItem = items[current.fromIndex]
      if (!movedItem) return
      const label = resolveLabel(movedItem, current.fromIndex)

      if (!commit) {
        announce(labels.cancelledAnnouncement(label))
        return
      }

      const toIndex =
        current.targetSlot > current.fromIndex ? current.targetSlot - 1 : current.targetSlot
      const clampedTo = Math.max(0, Math.min(items.length - 1, toIndex))
      if (clampedTo !== current.fromIndex) {
        const key = resolveSortableKey(movedItem, rowKey)
        const nextItems = arrayMove(items, current.fromIndex, clampedTo)
        commitReorder(nextItems, current.fromIndex, clampedTo, key, 'pointer')
        announce(labels.movedAnnouncement(label, clampedTo + 1, items.length))
      }
    },
    [announce, clearDropMarker, commitReorder, items, labels, resolveLabel, rowKey]
  )

  const finishPointerDragRef = React.useRef(finishPointerDrag)
  finishPointerDragRef.current = finishPointerDrag
  const computeTargetSlotRef = React.useRef(computeTargetSlot)
  computeTargetSlotRef.current = computeTargetSlot
  const updateDropMarkerRef = React.useRef(updateDropMarker)
  updateDropMarkerRef.current = updateDropMarker

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>, index: number) => {
    if (
      disabled ||
      items.length <= 1 ||
      (typeof e.button === 'number' && e.button !== 0) ||
      dragRef.current
    ) {
      return
    }
    e.stopPropagation()
    setGrabbedKey(null)
    const pid = typeof e.pointerId === 'number' ? e.pointerId : 1
    try {
      e.currentTarget.setPointerCapture?.(pid)
    } catch {
      // 忽略测试环境不支持 setPointerCapture 的异常
    }
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('abc-sortable-dragging')
    }
    const initial: ActivePointerDrag = {
      fromIndex: index,
      pointerId: pid,
      startClientY: typeof e.clientY === 'number' ? e.clientY : 0,
      startScrollTop: listRef.current?.scrollTop ?? 0,
      deltaY: 0,
      targetSlot: index,
    }
    dragRef.current = initial
    setDragState(initial)

    const onPointerMove = (ev: PointerEvent) => {
      const active = dragRef.current
      const evPid = typeof ev.pointerId === 'number' ? ev.pointerId : 1
      if (!active || evPid !== active.pointerId) return
      const scrollDelta = (listRef.current?.scrollTop ?? 0) - active.startScrollTop
      const deltaY = ev.clientY - active.startClientY + scrollDelta
      const targetSlot = computeTargetSlotRef.current(ev.clientY, active.fromIndex, deltaY)
      const next: ActivePointerDrag = { ...active, deltaY, targetSlot }
      dragRef.current = next
      setDragState(next)
      updateDropMarkerRef.current(active.fromIndex, targetSlot)
    }

    const onPointerUp = (ev: PointerEvent) => {
      const active = dragRef.current
      const evPid = typeof ev.pointerId === 'number' ? ev.pointerId : 1
      if (!active || evPid !== active.pointerId) return
      finishPointerDragRef.current(true)
    }

    const onPointerCancel = (ev: PointerEvent) => {
      const active = dragRef.current
      const evPid = typeof ev.pointerId === 'number' ? ev.pointerId : 1
      if (!active || evPid !== active.pointerId) return
      finishPointerDragRef.current(false)
    }

    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape' && dragRef.current) {
        ev.preventDefault()
        finishPointerDragRef.current(false)
      }
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerCancel)
    window.addEventListener('keydown', onKeyDown)
    dragCleanupRef.current = () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerCancel)
      window.removeEventListener('keydown', onKeyDown)
    }
  }

  const handleHandleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    item: T,
    index: number,
    keyStr: string
  ) => {
    if (disabled || items.length <= 1) return
    const rawKey = resolveSortableKey(item, rowKey)
    const label = resolveLabel(item, index)
    const isGrabbed = grabbedKey === keyStr

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      if (!isGrabbed) {
        preGrabSnapshotRef.current = items.slice()
        setGrabbedKey(keyStr)
        announce(labels.grabbedAnnouncement(label, index + 1, items.length))
      } else {
        preGrabSnapshotRef.current = null
        setGrabbedKey(null)
        announce(labels.droppedAnnouncement(label, index + 1, items.length))
      }
      return
    }

    if (!isGrabbed) return

    if (e.key === 'Escape') {
      e.preventDefault()
      const snapshot = preGrabSnapshotRef.current
      preGrabSnapshotRef.current = null
      setGrabbedKey(null)
      if (snapshot && snapshot.length === items.length) {
        onReorder(snapshot, { fromIndex: index, toIndex: index, key: rawKey, trigger: 'keyboard' })
      }
      announce(labels.cancelledAnnouncement(label))
      return
    }

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
      const toIndex = e.key === 'ArrowUp' ? index - 1 : index + 1
      if (toIndex < 0 || toIndex >= items.length) return
      isKeyboardMovingRef.current = true
      const nextItems = arrayMove(items, index, toIndex)
      commitReorder(nextItems, index, toIndex, rawKey, 'keyboard')
      announce(labels.movedAnnouncement(label, toIndex + 1, items.length))
      requestAnimationFrame(() => {
        const itemEl = itemElsRef.current.get(keyStr)
        itemEl?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' })
        handleElsRef.current.get(keyStr)?.focus({ preventScroll: true })
        isKeyboardMovingRef.current = false
      })
    }
  }

  const handleStepButton = (index: number, delta: -1 | 1) => {
    if (disabled) return
    const toIndex = index + delta
    if (toIndex < 0 || toIndex >= items.length) return
    const item = items[index]
    const rawKey = resolveSortableKey(item, rowKey)
    const label = resolveLabel(item, index)
    const nextItems = arrayMove(items, index, toIndex)
    commitReorder(nextItems, index, toIndex, rawKey, 'button')
    announce(labels.movedAnnouncement(label, toIndex + 1, items.length))
  }

  if (items.length === 0) {
    return (
      <div data-slot="sortable-list-empty" className={cn('rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] p-6 text-center text-xs text-[var(--abc-fg-muted)]', className)}>
        {emptyNode ?? '暂无可排序条目'}
      </div>
    )
  }

  return (
    <div className="relative">
      {/* 单一持久化礼貌播报区，避免在列表容器挂 aria-live 造成逐条刷屏播报 */}
      <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </p>

      <div
        ref={listRef}
        role="list"
        data-slot="sortable-list"
        className={cn('abc-sortable-list relative flex flex-col gap-1.5', className)}
        {...rest}
      >
        {items.map((item, index) => {
          const rawKey = resolveSortableKey(item, rowKey)
          const keyStr = String(rawKey)
          const label = resolveLabel(item, index)
          const isSelected = selectedKey !== null && selectedKey !== undefined && String(selectedKey) === keyStr
          const isPointerDragging = dragState?.fromIndex === index
          const isGrabbed = grabbedKey === keyStr
          const showKeyHint = isGrabbed || focusedHandleKey === keyStr
          const meta = {
            index,
            total: items.length,
            selected: isSelected,
            dragging: isPointerDragging,
            grabbed: isGrabbed,
          }

          return (
            <div
              key={keyStr}
              role="listitem"
              data-slot="sortable-item"
              data-selected={isSelected ? 'true' : 'false'}
              data-grabbed={isGrabbed || isPointerDragging ? 'true' : 'false'}
              ref={(node) => {
                if (node) itemElsRef.current.set(keyStr, node)
                else itemElsRef.current.delete(keyStr)
              }}
              style={
                isPointerDragging
                  ? { translate: `0 ${Math.round(dragState.deltaY)}px` }
                  : undefined
              }
              className={cn(
                'group relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-colors scroll-my-2',
                isSelected
                  ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-1 ring-inset ring-[var(--abc-primary)]/25'
                  : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-subtle)]/50',
                (isPointerDragging || isGrabbed) &&
                  'z-20 scale-[1.01] border-[var(--abc-primary)] bg-[var(--abc-bg-elevated,var(--abc-bg-surface))] shadow-lg',
                isPointerDragging && 'pointer-events-none opacity-95',
                'has-[[data-slot=sortable-handle]:focus-visible]:ring-2 has-[[data-slot=sortable-handle]:focus-visible]:ring-[var(--abc-ring)]',
                itemClassName
              )}
            >
              {/* 独立拖拽与键盘重排手柄 */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  data-slot="sortable-handle"
                  data-abc-no-press-scale="true"
                  ref={(node) => {
                    if (node) handleElsRef.current.set(keyStr, node)
                    else handleElsRef.current.delete(keyStr)
                  }}
                  disabled={disabled || items.length <= 1}
                  aria-pressed={isGrabbed}
                  aria-label={labels.dragHandleLabel(label, index + 1, items.length)}
                  onPointerDown={(e) => handlePointerDown(e, index)}
                  onKeyDown={(e) => handleHandleKeyDown(e, item, index, keyStr)}
                  onFocus={(e) => {
                    if (e.currentTarget.matches(':focus-visible')) {
                      setFocusedHandleKey(keyStr)
                    }
                  }}
                  onBlur={() => {
                    setFocusedHandleKey((prev) => (prev === keyStr ? null : prev))
                    if (grabbedKey === keyStr && !isKeyboardMovingRef.current) {
                      preGrabSnapshotRef.current = null
                      setGrabbedKey(null)
                    }
                  }}
                  className={cn(
                    'abc-sortable-handle inline-flex h-7 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] opacity-75 transition-colors focus:outline-none',
                    !disabled && items.length > 1
                      ? 'cursor-grab hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)] hover:opacity-100 focus-visible:bg-[var(--abc-bg-muted)] focus-visible:text-[var(--abc-fg)] focus-visible:opacity-100'
                      : 'cursor-not-allowed opacity-35',
                    isGrabbed && 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] opacity-100',
                    handleClassName
                  )}
                >
                  <GripVertical className="h-3.5 w-3.5" aria-hidden="true" />
                </button>

                {showIndexBadge && (
                  <span className="inline-flex min-w-5 items-center justify-center rounded bg-[var(--abc-bg-muted)] px-1 py-0.5 font-mono text-[10px] font-medium tabular-nums text-[var(--abc-fg-muted)]">
                    #{index + 1}
                  </span>
                )}
              </div>

              {/* 中间自适应可收缩摘要触发区 */}
              {onSelect ? (
                <button
                  type="button"
                  data-slot="sortable-item-body"
                  onClick={() => onSelect(item, index)}
                  className={cn(
                    'min-w-0 flex-1 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)] py-0.5',
                    bodyClassName
                  )}
                >
                  {renderItem(item, meta)}
                  {showKeyHint && (
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-block rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--abc-primary)]"
                    >
                      {isGrabbed ? labels.grabbedHint : labels.idleFocusHint}
                    </span>
                  )}
                </button>
              ) : (
                <div data-slot="sortable-item-body" className={cn('min-w-0 flex-1 py-0.5', bodyClassName)}>
                  {renderItem(item, meta)}
                  {showKeyHint && (
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-block rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--abc-primary)]"
                    >
                      {isGrabbed ? labels.grabbedHint : labels.idleFocusHint}
                    </span>
                  )}
                </div>
              )}

              {/* 右侧独立快捷操作区 */}
              {(renderActions || showMoveButtons) && (
                <div
                  data-slot="sortable-item-actions"
                  data-abc-no-press-scale="true"
                  onClick={(e) => e.stopPropagation()}
                  className="flex shrink-0 items-center gap-1.5"
                >
                  {showMoveButtons && (
                    <div className="inline-flex items-center gap-0.5">
                      <button
                        type="button"
                        disabled={disabled || index === 0}
                        aria-label={labels.moveUpLabel(label)}
                        onClick={() => handleStepButton(index, -1)}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)] disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
                      >
                        <ArrowUp className="h-3 w-3" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        disabled={disabled || index === items.length - 1}
                        aria-label={labels.moveDownLabel(label)}
                        onClick={() => handleStepButton(index, 1)}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)] disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
                      >
                        <ArrowDown className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                  {renderActions?.(item, meta)}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

SortableList.displayName = 'SortableList'
export default SortableList
