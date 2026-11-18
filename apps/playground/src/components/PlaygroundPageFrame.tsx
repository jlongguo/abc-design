import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button, StatusTag } from '@abc-design/react'
import { ArrowLeft, ArrowRight, Compass, Focus, Layers, ListTree } from 'lucide-react'
import { PLAYGROUND_ROUTE_MAP } from '../registry'
import {
  PlaygroundShowcaseContext,
  type RegisteredSectionMeta,
  type ShowcaseViewMode,
} from './PlaygroundShowcaseContext'
import {
  findNearestScrollContainer,
  scrollIntoViewAsync,
  supportsScrollTargetGroup,
} from './scrollHelpers'

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
  const navRef = useRef<HTMLElement>(null)
  const pillStripRef = useRef<HTMLDivElement>(null)
  const scrollTokenRef = useRef(0)
  const highlightTimerRef = useRef<number | undefined>(undefined)
  const nativeSpySupported = useMemo(() => supportsScrollTargetGroup(), [])

  const routeInfo = PLAYGROUND_ROUTE_MAP.get(routePath)

  const registerSection = useCallback((meta: RegisteredSectionMeta) => {
    setSections((prev) => {
      const idx = prev.findIndex((s) => s.sectionId === meta.sectionId)
      if (idx >= 0) {
        const existing = prev[idx]
        if (
          existing.title === meta.title &&
          existing.shortLabel === meta.shortLabel &&
          existing.pkg === meta.pkg &&
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

  // 当全局浏览模式从「单卡聚焦」切回「分段全览」时，同步清空本页残留的局部聚焦锁，避免 KeepAlive 缓存页切回后仍处于隐藏态
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

  // ScrollSpy：支持原生 CSS scroll-target-group 同步 aria-current，并在不支持的浏览器降级 IntersectionObserver
  useEffect(() => {
    if (effectiveFocusedId !== null || sections.length < 2) return
    const navEl = navRef.current
    if (!navEl) return

    const firstEl = document.getElementById(sections[0].sectionId)
    const scroller = findNearestScrollContainer(firstEl)

    if (nativeSpySupported) {
      let rafId = 0
      const syncNativeAria = () => {
        rafId = 0
        const currentLink = navEl.querySelector<HTMLAnchorElement>('a:target-current')
        const href = currentLink?.getAttribute('href') ?? ''
        const matchedId = href.startsWith('#') ? href.slice(1) : null
        setActiveSpyId(matchedId ?? sections[0]?.sectionId ?? null)
      }
      const scheduleSync = () => {
        if (rafId) return
        rafId = window.requestAnimationFrame(() => {
          rafId = window.requestAnimationFrame(syncNativeAria)
        })
      }
      scheduleSync()
      scroller.addEventListener('scroll', scheduleSync, { passive: true })
      scroller.addEventListener('scrollend', syncNativeAria)
      return () => {
        if (rafId) window.cancelAnimationFrame(rafId)
        scroller.removeEventListener('scroll', scheduleSync)
        scroller.removeEventListener('scrollend', syncNativeAria)
      }
    }

    const rootNode = scroller instanceof HTMLElement ? scroller : null
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) {
          const id = visible[0].target.getAttribute('id')
          if (id) setActiveSpyId(id)
        }
      },
      { root: rootNode, rootMargin: '-18% 0px -65% 0px', threshold: 0 }
    )

    sections.forEach((sec) => {
      const el = document.getElementById(sec.sectionId)
      if (el) observer.observe(el)
    })
    setActiveSpyId((prev) => prev ?? sections[0]?.sectionId ?? null)

    return () => observer.disconnect()
  }, [sections, effectiveFocusedId, nativeSpySupported])

  // 切换单卡聚焦项（含浏览器 ⌘F beforematch 或底部步进）时，仅滚动顶部横向胶囊条自身使选中胶囊可见
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

  const ctxValue = useMemo(
    () => ({
      sections,
      viewMode,
      focusedSectionId: effectiveFocusedId,
      highlightedSectionId,
      registerSection,
      unregisterSection,
      focusSingleSection,
    }),
    [
      sections,
      viewMode,
      effectiveFocusedId,
      highlightedSectionId,
      registerSection,
      unregisterSection,
      focusSingleSection,
    ]
  )

  const showMultiToolbar = sections.length >= 2
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
                title="同屏分段展示本页全部组件，并在宽屏右侧挂载实时锚点目录"
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

      {showMultiToolbar && effectiveFocusedId === null ? (
        <div className="grid grid-cols-1 items-start gap-5 2xl:grid-cols-[minmax(0,1fr)_216px]">
          <div className="min-w-0">{children}</div>

          {/* 宽屏右侧常驻粘性组件大纲目录 (ScrollSpy) */}
          <aside className="sticky top-14 hidden 2xl:block">
            <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-2xs">
              <div className="mb-2 flex items-center justify-between border-b border-[var(--abc-border)] pb-2">
                <span className="text-xs font-bold text-[var(--abc-fg)]">本页组件目录</span>
                <StatusTag tone="neutral" size="xs" dot={false}>
                  {sections.length} 组
                </StatusTag>
              </div>

              <nav
                ref={navRef}
                aria-label="本页组件目录"
                className="abc-pg-scrollspy-nav space-y-1"
              >
                {sections.map((sec, idx) => {
                  const isActive = activeSpyId === sec.sectionId
                  const num = String(idx + 1).padStart(2, '0')
                  return (
                    <a
                      key={sec.sectionId}
                      href={`#${sec.sectionId}`}
                      aria-current={isActive ? 'true' : 'false'}
                      onClick={(e) => {
                        e.preventDefault()
                        void scrollToSectionAndHighlight(sec.sectionId)
                      }}
                      className={`block rounded-r-[var(--abc-radius-sm)] border-l-2 px-2.5 py-1.5 text-xs transition-colors ${
                        !nativeSpySupported && isActive
                          ? 'target-current border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]'
                          : 'border-transparent text-[var(--abc-fg-secondary)] hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] opacity-70">{num}</span>
                        <span className="truncate">{sec.shortLabel}</span>
                      </div>
                      {sec.components.length > 0 && (
                        <div className="mt-1 flex flex-wrap gap-1">
                          {sec.components.slice(0, 3).map((sym) => (
                            <code
                              key={sym}
                              className="rounded bg-[var(--abc-bg-subtle)] px-1 py-0.2 font-mono text-[9px] text-[var(--abc-fg-muted)]"
                            >
                              {sym}
                            </code>
                          ))}
                          {sec.components.length > 3 && (
                            <span className="font-mono text-[9px] text-[var(--abc-fg-muted)]">
                              +{sec.components.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </a>
                  )
                })}
              </nav>
            </div>
          </aside>
        </div>
      ) : (
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
      )}
    </PlaygroundShowcaseContext.Provider>
  )
}
