import React, { useState } from 'react'
import { StatusTag, copyToClipboard, useAbcConfig } from '@abc-design/react'
import { Check, SlidersHorizontal, Sparkles } from 'lucide-react'
import type { RegisteredSectionMeta } from './PlaygroundShowcaseContext'

export interface PlaygroundInspectorAsideProps {
  sections: RegisteredSectionMeta[]
  showTocNav: boolean
  activeInspectorSectionId: string | null
  activeInspectorIndex: number
  activeInspectorSection: RegisteredSectionMeta | null
  navRef: React.RefObject<HTMLElement | null>
  onJumpSection: (sectionId: string) => void
  setInspectorControlsHost: (el: HTMLDivElement | null) => void
}

/**
 * Playground 宽屏右侧常驻粘性区：
 * - 上半区（多组组件分段全览态）：紧凑本页组件目录（与视口首个可见组件同步高亮）
 * - 下半区（填满原空白区域）：动态展示当前视口首个组件的说明、包名、可复制符号与全部实时 Props 操作项
 */
export const PlaygroundInspectorAside: React.FC<PlaygroundInspectorAsideProps> = ({
  sections,
  showTocNav,
  activeInspectorSectionId,
  activeInspectorIndex,
  activeInspectorSection,
  navRef,
  onJumpSection,
  setInspectorControlsHost,
}) => {
  const { toast } = useAbcConfig()
  const [copiedSym, setCopiedSym] = useState<string | null>(null)

  const handleCopyImport = async (sym: string, pkg: string) => {
    const stmt = `import { ${sym} } from '${pkg}'`
    const ok = await copyToClipboard(stmt)
    if (ok) {
      setCopiedSym(sym)
      toast.success(`已复制导入语句：${stmt}`)
      window.setTimeout(() => setCopiedSym((cur) => (cur === sym ? null : cur)), 1400)
    }
  }

  return (
    <aside className="sticky top-14 hidden max-h-[calc(100vh-4.5rem)] flex-col gap-3 xl:flex">
      {showTocNav && (
        <div className="flex max-h-48 shrink-0 flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-2xs">
          <div className="mb-2 flex shrink-0 items-center justify-between border-b border-[var(--abc-border)] pb-1.5">
            <span className="text-xs font-bold text-[var(--abc-fg)]">本页组件目录</span>
            <StatusTag tone="neutral" size="xs" dot={false}>
              {sections.length} 组
            </StatusTag>
          </div>

          <nav
            ref={navRef}
            aria-label="本页组件目录"
            className="abc-pg-scrollspy-nav min-h-0 flex-1 space-y-1 overflow-y-auto pr-0.5 [scrollbar-width:thin]"
          >
            {sections.map((sec, idx) => {
              const isActive = activeInspectorSectionId === sec.sectionId
              const num = String(idx + 1).padStart(2, '0')
              return (
                <a
                  key={sec.sectionId}
                  href={`#${sec.sectionId}`}
                  aria-current={isActive ? 'true' : 'false'}
                  onClick={(e) => {
                    e.preventDefault()
                    onJumpSection(sec.sectionId)
                  }}
                  className={`block rounded-r-[var(--abc-radius-sm)] border-l-2 px-2.5 py-1.5 text-xs transition-colors ${
                    isActive
                      ? 'target-current border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]'
                      : 'border-transparent text-[var(--abc-fg-secondary)] hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] opacity-70">{num}</span>
                    <span className="truncate">{sec.shortLabel}</span>
                  </div>
                </a>
              )
            })}
          </nav>
        </div>
      )}

      {/* 动态组件说明 + 全部组件属性操作项面板 */}
      {activeInspectorSection && (
        <div
          role="region"
          aria-label="当前组件说明与属性面板"
          data-active-section={activeInspectorSection.sectionId}
          className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs"
        >
          <div className="shrink-0 space-y-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/35 px-3.5 py-3">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 rounded bg-[var(--abc-primary-soft)] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[var(--abc-primary)]">
                <Sparkles className="h-2.5 w-2.5" />
                <span>
                  {String(activeInspectorIndex + 1).padStart(2, '0')} · 当前视口组件
                </span>
              </span>
              <StatusTag tone="info" size="xs" dot={false} className="font-mono">
                {activeInspectorSection.pkg}
              </StatusTag>
            </div>

            <h3 className="text-xs font-bold leading-snug text-[var(--abc-fg)]">
              {activeInspectorSection.title}
            </h3>

            {activeInspectorSection.components.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {activeInspectorSection.components.map((sym) => {
                  const justCopied = copiedSym === sym
                  const isPascal = /^[A-Z]/.test(sym)
                  return (
                    <button
                      key={sym}
                      type="button"
                      onClick={() => void handleCopyImport(sym, activeInspectorSection.pkg)}
                      title={`点击复制 import { ${sym} } from '${activeInspectorSection.pkg}'`}
                      className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium transition-colors cursor-pointer ${
                        justCopied
                          ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]/50 hover:text-[var(--abc-primary)]'
                      }`}
                    >
                      <span>{isPascal ? `<${sym} />` : sym}</span>
                      {justCopied && <Check className="h-2.5 w-2.5" />}
                    </button>
                  )
                })}
              </div>
            )}

            <p className="text-[11px] leading-relaxed text-[var(--abc-fg-muted)]">
              {activeInspectorSection.description}
            </p>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <div className="flex shrink-0 items-center justify-between border-b border-[var(--abc-border)] px-3.5 py-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--abc-fg-secondary)]">
                <SlidersHorizontal className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                <span>全部属性操作项</span>
              </span>
              <span className="font-mono text-[10px] text-[var(--abc-fg-muted)]">
                API {activeInspectorSection.apiCount}
              </span>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-3.5 py-3 [scrollbar-width:thin]">
              <div
                ref={setInspectorControlsHost}
                data-slot="playground-inspector-controls"
                className="abc-pg-inspector-knobs"
              />
              {!activeInspectorSection.hasControls && (
                <p className="text-[11px] leading-relaxed text-[var(--abc-fg-muted)]">
                  当前组件展示无额外可调属性，可直接在左侧画布进行交互体验。
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
