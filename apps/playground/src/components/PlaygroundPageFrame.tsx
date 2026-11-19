import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '@abc-design/react'
import { ArrowLeft, ArrowRight, Compass, Focus, Layers, ListTree } from 'lucide-react'
import { PLAYGROUND_ROUTE_MAP } from '../registry'
import { PlaygroundInspectorAside } from './PlaygroundInspectorAside'
import {
  PlaygroundShowcaseContext,
  type RegisteredSectionMeta,
  type ShowcaseViewMode,
} from './PlaygroundShowcaseContext'
import { findNearestScrollContainer, scrollIntoViewAsync } from './scrollHelpers'

export interface PendingComponentJump {
  routePath: string
  anchorId: string
  symbol: string
  nonce: number
}

export interface PlaygroundPageFrameProps {
  routePath: string
  viewMode: ShowcaseViewMode
  onViewModeChange: (next: ShowcaseViewMode) => void
  pendingJump: PendingComponentJump | null
  onConsumeJump: (nonce: number) => void
  children: React.ReactNode
}

function sortByDomPosition(list: RegisteredSectionMeta[]): RegisteredSectionMeta[] {
  if (typeof document === 'undefined' || list.length <= 1) return list
  return [...list].sort((a, b) => {
    const elA = document.getElementById(a.sectionId)
    const elB = document.getElementById(b.sectionId)
    if (!elA || !elB || elA === elB) return 0
    const mask = elA.compareDocumentPosition(elB)
    if (mask & Node.DOCUMENT_POSITION_FOLLOWING) return -1
    if (mask & Node.DOCUMENT_POSITION_PRECEDING) return 1
    return 0
  })
}

export const PlaygroundPageFrame: React.FC<PlaygroundPageFrameProps> = ({
  routePath,
  viewMode,
  onViewModeChange,
  pendingJump,
  onConsumeJump,
  children,
}) => {
  const [sections, setSections] = useState<RegisteredSectionMeta[]>([])
  const [focusedSectionId, setFocusedSectionId] = useState<string | null>(null)
  const [highlightedSectionId, setHighlightedSectionId] = useState<string | null>(null)
  const [activeSpyId, setActiveSpyId] = useState<string | null>(null)
  const [pinnedInspectorId, setPinnedInspectorId] = useState<string | null>(null)
  const [inspectorControlsHost, setInspectorControlsHost] = useState<HTMLDivElement | null>(null)
  const [isWideInspector, setIsWideInspector] = useState<boolean>(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
    return window.matchMedia('(min-width: 1280px)').matches
  })

  const navRef = useRef<HTMLElement>(null)
  const pillStripRef = useRef<HTMLDivElement>(null)
  const scrollTokenRef = useRef(0)
  const highlightTimerRef = useRef<number | undefined>(undefined)

  const routeInfo = PLAYGROUND_ROUTE_MAP.get(routePath)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
    const mql = window.matchMedia('(min-width: 1280px)')
    const onChange = (e: MediaQueryListEvent) => setIsWideInspector(e.matches)
    setIsWideInspector(mql.matches)
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    }
    mql.addListener(onChange)
    return () => mql.removeListener(onChange)
  }, [])

  const registerSection = useCallback((meta: RegisteredSectionMeta) => {
    setSections((prev) => {
      const idx = prev.findIndex((s) => s.sectionId === meta.sectionId)
      if (idx >= 0) {
        const existing = prev[idx]
        if (
          existing.title === meta.title &&
          existing.shortLabel === meta.shortLabel &&
          existing.pkg === meta.pkg &&
          existing.description === meta.description &&
          existing.hasControls === meta.hasControls &&
          existing.apiCount === meta.apiCount &&
          existing.components.join(',') === meta.components.join(',')
        ) {
          return prev
        }
        const updated = [...prev]
        updated[idx] = meta
        return sortByDomPosition(updated)
      }
      return sortByDomPosition([...prev, meta])
    })
  }, [])

  const unregisterSection = useCallback((sectionId: string) => {
    setSections((prev) => prev.filter((s) => s.sectionId !== sectionId))
  }, [])

  // 当全局浏览模式从「单卡聚焦」切回「分段全览」时，同步清空本页残留的局部聚焦锁
  const prevViewModeRef = useRef(viewMode)
  useEffect(() => {
    if (prevViewModeRef.current !== viewMode) {
      prevViewModeRef.current = viewMode
      if (viewMode === 'segmented') {
        setFocusedSectionId(null)
      }
    }
  }, [viewMode])

  // 在单卡聚焦偏好下若未显式选定子项，则默认展示第 01 个组件组
  const effectiveFocusedId = useMemo(() => {
    if (sections.length <= 1) return null
    if (focusedSectionId && sections.some((s) => s.sectionId === focusedSectionId)) {
      return focusedSectionId
    }
    if (viewMode === 'focus') {
      return sections[0]?.sectionId ?? null
    }
    return null
  }, [sections, focusedSectionId, viewMode])

  const flashHighlight = useCallback((sectionId: string) => {
    if (highlightTimerRef.current !== undefined) {
      window.clearTimeout(highlightTimerRef.current)
    }
    setHighlightedSectionId(sectionId)
    highlightTimerRef.current = window.setTimeout(() => {
      setHighlightedSectionId((cur) => (cur === sectionId ? null : cur))
    }, 2000)
  }, [])

  useEffect(
    () => () => {
      if (highlightTimerRef.current !== undefined) {
        window.clearTimeout(highlightTimerRef.current)
      }
    },
    []
  )

  const scrollToSectionAndHighlight = useCallback(
    async (sectionId: string) => {
      const token = ++scrollTokenRef.current
      if (highlightTimerRef.current !== undefined) {
        window.clearTimeout(highlightTimerRef.current)
        highlightTimerRef.current = undefined
      }
      setHighlightedSectionId(null)
      const targetEl = document.getElementById(sectionId)
      if (!targetEl) return
      setPinnedInspectorId(null)
      setActiveSpyId(sectionId)
      await scrollIntoViewAsync(targetEl, { behavior: 'smooth', block: 'start' })
      if (token !== scrollTokenRef.current) return
      targetEl.focus({ preventScroll: true })
      flashHighlight(sectionId)
    },
    [flashHighlight]
  )

  // 响应来自 ⌘K 全局组件搜索或总览页点击的精准深链跳转
  useEffect(() => {
    if (!pendingJump || pendingJump.routePath !== routePath) return
    if (sections.length === 0) return
    const matched =
      sections.find((s) => s.sectionId === pendingJump.anchorId) ??
      sections.find((s) => s.components.includes(pendingJump.symbol))

    onConsumeJump(pendingJump.nonce)
    if (!matched) return

    setPinnedInspectorId(null)
    if (viewMode === 'focus' || effectiveFocusedId !== null) {
      setFocusedSectionId(matched.sectionId)
      window.requestAnimationFrame(() => {
        const el = document.getElementById(matched.sectionId)
        if (el) {
          const scroller = findNearestScrollContainer(el)
          if (scroller instanceof HTMLElement) scroller.scrollTo({ top: 0, behavior: 'smooth' })
        }
        flashHighlight(matched.sectionId)
      })
    } else {
      window.requestAnimationFrame(() => {
        void scrollToSectionAndHighlight(matched.sectionId)
      })
    }
  }, [
    pendingJump,
    routePath,
    sections,
    viewMode,
    effectiveFocusedId,
    onConsumeJump,
    flashHighlight,
    scrollToSectionAndHighlight,
  ])

  // 精准测算当前视口中处于第一顺位的可见组件卡片，供右侧目录与动态组件检视面板实时联动
  const computeFirstVisibleSectionId = useCallback((): string | null => {
    if (sections.length === 0) return null
    const firstEl = document.getElementById(sections[0].sectionId)
    const scroller = findNearestScrollContainer(firstEl)
    const scrollerRect =
      scroller instanceof HTMLElement
        ? scroller.getBoundingClientRect()
        : { top: 0, bottom: window.innerHeight || 800 }
    // 越过顶部粘性工具栏约 72px 作为阅读视口上沿基线
    const baselineTop = scrollerRect.top + 72
    const viewportBottom = scrollerRect.bottom

    let firstVisible: string | null = null
    let lastAboveBaseline: string | null = null

    for (const sec of sections) {
      const el = document.getElementById(sec.sectionId)
      if (!el || el.hasAttribute('hidden')) continue
      const rect = el.getBoundingClientRect()
      if (rect.height === 0 && rect.width === 0) continue

      if (rect.bottom > baselineTop + 28 && rect.top <= viewportBottom) {
        firstVisible = sec.sectionId
        break
      }
      if (rect.top <= baselineTop + 28) {
        lastAboveBaseline = sec.sectionId
      }
    }

    return firstVisible ?? lastAboveBaseline ?? sections[0]?.sectionId ?? null
  }, [sections])

  // ScrollSpy：监听最近滚动容器与窗口滚动，实时将视口首个组件同步至目录与右侧属性面板
  useEffect(() => {
    if (effectiveFocusedId !== null || sections.length === 0) return

    const firstEl = document.getElementById(sections[0].sectionId)
    const scroller = findNearestScrollContainer(firstEl)
    let rafId = 0

    const syncViewportFirst = (fromScroll: boolean) => {
      rafId = 0
      const nextId = computeFirstVisibleSectionId()
      if (fromScroll) {
        setPinnedInspectorId(null)
      }
      if (nextId) {
        setActiveSpyId((prev) => (prev === nextId ? prev : nextId))
      }
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => syncViewportFirst(true))
    }

    const onResize = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => syncViewportFirst(false))
    }

    syncViewportFirst(false)

    scroller.addEventListener('scroll', onScroll, { passive: true })
    if (scroller !== window) {
      window.addEventListener('scroll', onScroll, { passive: true })
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      scroller.removeEventListener('scroll', onScroll)
      if (scroller !== window) {
        window.removeEventListener('scroll', onScroll)
      }
      window.removeEventListener('resize', onResize)
    }
  }, [sections, effectiveFocusedId, computeFirstVisibleSectionId])

  // 切换单卡聚焦项时，仅滚动顶部横向胶囊条自身使选中胶囊可见
  useEffect(() => {
    if (!effectiveFocusedId || !pillStripRef.current) return
    const activePill = pillStripRef.current.querySelector<HTMLElement>(
      `[data-pg-pill="${effectiveFocusedId}"]`
    )
    activePill?.scrollIntoView?.({
      block: 'nearest',
      inline: 'nearest',
      ...({ container: 'nearest' } as Record<string, unknown>),
    } as ScrollIntoViewOptions)
  }, [effectiveFocusedId])

  const focusSingleSection = useCallback(
    (nextId: string | null) => {
      setPinnedInspectorId(null)
      if (nextId === null) {
        setFocusedSectionId(null)
        if (viewMode === 'focus') {
          onViewModeChange('segmented')
        }
        return
      }
      setFocusedSectionId(nextId)
    },
    [viewMode, onViewModeChange]
  )

  const selectInspectorSection = useCallback((sectionId: string) => {
    setPinnedInspectorId(sectionId)
    setActiveSpyId(sectionId)
  }, [])

  const activeInspectorSectionId = useMemo(() => {
    if (sections.length === 0) return null
    if (effectiveFocusedId) return effectiveFocusedId
    if (pinnedInspectorId && sections.some((s) => s.sectionId === pinnedInspectorId)) {
      return pinnedInspectorId
    }
    if (activeSpyId && sections.some((s) => s.sectionId === activeSpyId)) {
      return activeSpyId
    }
    return sections[0]?.sectionId ?? null
  }, [sections, effectiveFocusedId, pinnedInspectorId, activeSpyId])

  const activeInspectorIndex = activeInspectorSectionId
    ? sections.findIndex((s) => s.sectionId === activeInspectorSectionId)
    : -1
  const activeInspectorSection =
    activeInspectorIndex >= 0 ? sections[activeInspectorIndex] : null

  const ctxValue = useMemo(
    () => ({
      sections,
      viewMode,
      focusedSectionId: effectiveFocusedId,
      highlightedSectionId,
      activeInspectorSectionId,
      inspectorControlsHost,
      isWideInspector,
      registerSection,
      unregisterSection,
      focusSingleSection,
      selectInspectorSection,
    }),
    [
      sections,
      viewMode,
      effectiveFocusedId,
      highlightedSectionId,
      activeInspectorSectionId,
      inspectorControlsHost,
      isWideInspector,
      registerSection,
      unregisterSection,
      focusSingleSection,
      selectInspectorSection,
    ]
  )

  const showMultiToolbar = sections.length >= 2
  const showTocNav = showMultiToolbar && effectiveFocusedId === null
  const showRightAside = sections.length >= 1
  const focusedIndex = effectiveFocusedId
    ? sections.findIndex((s) => s.sectionId === effectiveFocusedId)
    : -1
  const prevSection = focusedIndex > 0 ? sections[focusedIndex - 1] : null
  const nextSection =
    focusedIndex >= 0 && focusedIndex < sections.length - 1 ? sections[focusedIndex + 1] : null

  return (
    <PlaygroundShowcaseContext.Provider value={ctxValue}>
      {showMultiToolbar && (
        <div className="sticky -top-4 sm:-top-5 z-20 -mx-4 sm:-mx-5 mb-4 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-4 py-2.5 backdrop-blur-md sm:px-5">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            {/* 左侧：本页组件分组快捷切换胶囊条 */}
            <div
              ref={pillStripRef}
              className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none]"
            >
              {routeInfo && (
                <span className="mr-1 hidden shrink-0 items-center gap-1 rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] lg:inline-flex">
                  <Compass className="h-3 w-3 text-[var(--abc-primary)]" />
                  <span>{routeInfo.category.label}</span>
                </span>
              )}

              <button
                type="button"
                onClick={() => focusSingleSection(null)}
                className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${
                  effectiveFocusedId === null
                    ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs'
                    : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]/50 hover:text-[var(--abc-fg)]'
                }`}
              >
                <Layers className="h-3 w-3" />
                <span>全部展示 ({sections.length})</span>
              </button>

              {sections.map((sec, idx) => {
                const selected = effectiveFocusedId === sec.sectionId
                const num = String(idx + 1).padStart(2, '0')
                return (
                  <button
                    key={sec.sectionId}
                    type="button"
                    data-pg-pill={sec.sectionId}
                    onClick={() => setFocusedSectionId(sec.sectionId)}
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${
                      selected
                        ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] ring-1 ring-[var(--abc-primary)]/25'
                        : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]'
                    }`}
                  >
                    <span className="font-mono text-[10px] font-bold opacity-75">{num}</span>
                    <span className="max-w-44 truncate">{sec.shortLabel}</span>
                  </button>
                )
              })}
            </div>

            {/* 右侧：全站默认浏览模式切换（分段全览 vs 单卡聚焦） */}
            <div
              role="group"
              aria-label="组件展示布局模式"
              className="flex shrink-0 items-center gap-0.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-0.5 text-[11px]"
            >
              <button
                type="button"
                onClick={() => {
                  onViewModeChange('segmented')
                  setFocusedSectionId(null)
                }}
                className={`inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] px-2 py-1 font-medium transition-colors cursor-pointer ${
                  viewMode === 'segmented' && effectiveFocusedId === null
                    ? 'bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs'
                    : 'text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]'
                }`}
                title="同屏分段展示本页全部组件，并在宽屏右侧联动组件说明与全部属性面板"
              >
                <ListTree className="h-3 w-3" />
                <span>分段全览</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  onViewModeChange('focus')
                  if (!effectiveFocusedId && sections[0]) {
                    setFocusedSectionId(sections[0].sectionId)
                  }
                }}
                className={`inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] px-2 py-1 font-medium transition-colors cursor-pointer ${
                  viewMode === 'focus' || effectiveFocusedId !== null
                    ? 'bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs'
                    : 'text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]'
                }`}
                title="一次仅聚焦展示一组组件卡片，彻底告别多卡片堆叠干扰"
              >
                <Focus className="h-3 w-3" />
                <span>单卡聚焦</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className={
          showRightAside
            ? 'grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_320px] 2xl:grid-cols-[minmax(0,1fr)_344px]'
            : 'min-w-0'
        }
      >
        <div className="min-w-0">
          {children}

          {/* 单卡聚焦态底部前后组件快速步进条 */}
          {showMultiToolbar && effectiveFocusedId !== null && (
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-4 py-3">
              <div>
                {prevSection ? (
                  <Button
                    size="xs"
                    variant="secondary"
                    leftIcon={<ArrowLeft className="h-3.5 w-3.5" />}
                    onClick={() => setFocusedSectionId(prevSection.sectionId)}
                  >
                    上一组：{prevSection.shortLabel}
                  </Button>
                ) : (
                  <span className="text-xs text-[var(--abc-fg-muted)]">已是本页第 01 组组件</span>
                )}
              </div>

              <Button
                size="xs"
                variant="ghost"
                leftIcon={<Layers className="h-3.5 w-3.5" />}
                onClick={() => focusSingleSection(null)}
              >
                展开本页全部 ({sections.length} 组)
              </Button>

              <div>
                {nextSection ? (
                  <Button
                    size="xs"
                    variant="secondary"
                    rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                    onClick={() => setFocusedSectionId(nextSection.sectionId)}
                  >
                    下一组：{nextSection.shortLabel}
                  </Button>
                ) : (
                  <span className="text-xs text-[var(--abc-fg-muted)]">已达本页末尾组件</span>
                )}
              </div>
            </div>
          )}
        </div>

        {showRightAside && (
          <PlaygroundInspectorAside
            sections={sections}
            showTocNav={showTocNav}
            activeInspectorSectionId={activeInspectorSectionId}
            activeInspectorIndex={activeInspectorIndex}
            activeInspectorSection={activeInspectorSection}
            navRef={navRef}
            onJumpSection={(sectionId) => void scrollToSectionAndHighlight(sectionId)}
            setInspectorControlsHost={setInspectorControlsHost}
          />
        )}
      </div>
    </PlaygroundShowcaseContext.Provider>
  )
}
