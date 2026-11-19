import React, { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button, Card, StatusTag, copyToClipboard, useAbcConfig } from '@abc-design/react'
import {
  Check,
  Code2,
  Copy,
  Eye,
  Focus,
  Layers,
  RotateCcw,
  SlidersHorizontal,
  Table2,
} from 'lucide-react'
import { buildSectionDomId } from '../registry'
import { usePlaygroundShowcase } from './PlaygroundShowcaseContext'
import { supportsHiddenUntilFound } from './scrollHelpers'

export interface PropApiItem {
  prop: string
  type: string
  defaultValue?: string
  required?: boolean
  description: string
}

export interface ComponentDocPreviewProps {
  /** 可选自定义锚点标识（默认由 components[0] 自动推导为 comp-<Symbol>） */
  id?: string
  /** 组件标题（如 Button 按钮） */
  title: string
  /** 所属 npm 包名 */
  pkg?:
    | '@abc-design/react'
    | '@abc-design/charts'
    | '@abc-design/core'
    | '@abc-design/markdown'
    | '@abc-design/tokens'
  /** 覆盖展示的导出组件/API 精确符号列表 */
  components?: string[]
  /** 核心设计说明与适用场景 */
  description: string
  /** 顶部交互式属性调节面板（Knobs） */
  controls?: React.ReactNode
  /** 传入后在控制栏最右侧渲染“重置默认”按钮 */
  onResetKnobs?: () => void
  /** 实时可运行 JSX 代码片段（随 Knobs 动态生成或静态示例） */
  code: string
  /** 结构化 Props / Events API 参考表 */
  apiRows: PropApiItem[]
  /** 实时渲染的组件演练区 */
  children: React.ReactNode
}

function deriveShortLabel(title: string, components?: string[]): string {
  if (components && components.length > 0) {
    if (components.length === 1) return components[0]
    return `${components[0]} +${components.length - 1}`
  }
  return title.split(/\s+/)[0] ?? title
}

/**
 * 官方交互式组件文档卡片容器（升级版）
 * - 自动向 PlaygroundPageFrame 注册本页大纲索引、序号徽标与单卡聚焦联动；
 * - 点击任意导出符号徽标一键复制标准 import 语句；
 * - 采用点阵画布底板区分组件真实边界与文档外框；
 * - 聚焦其他卡片时通过 hidden="until-found" 保持浏览器 ⌘F 页内查找自动唤醒。
 */
export const ComponentDocPreview: React.FC<ComponentDocPreviewProps> = ({
  id,
  title,
  pkg = '@abc-design/react',
  components,
  description,
  controls,
  onResetKnobs,
  code,
  apiRows,
  children,
}) => {
  const { toast } = useAbcConfig()
  const showcase = usePlaygroundShowcase()
  const fallbackReactId = useId()
  const sectionRef = useRef<HTMLElement>(null)

  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'api'>('preview')
  const [copied, setCopied] = useState(false)
  const [copiedSym, setCopiedSym] = useState<string | null>(null)

  const sectionId = useMemo(() => {
    if (id) return id.startsWith('comp-') ? id : buildSectionDomId(id)
    if (components && components.length > 0) return buildSectionDomId(components[0])
    return buildSectionDomId(title || fallbackReactId)
  }, [id, components, title, fallbackReactId])

  const shortLabel = useMemo(() => deriveShortLabel(title, components), [title, components])
  const stableComponentsKey = components ? components.join(',') : ''

  const hasControls = Boolean(controls)
  const apiCount = apiRows.length

  useLayoutEffect(() => {
    if (!showcase) return
    showcase.registerSection({
      sectionId,
      title,
      shortLabel,
      pkg,
      description,
      components: components ?? [],
      hasControls,
      apiCount,
    })
    return () => showcase.unregisterSection(sectionId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    showcase?.registerSection,
    showcase?.unregisterSection,
    sectionId,
    title,
    shortLabel,
    pkg,
    description,
    stableComponentsKey,
    hasControls,
    apiCount,
  ])

  const isMultiPage = (showcase?.sections.length ?? 0) >= 2
  const isFocusedSelf = showcase?.focusedSectionId === sectionId
  const isHiddenByFocus =
    showcase !== null && showcase.focusedSectionId !== null && !isFocusedSelf
  const isHighlighted = showcase?.highlightedSectionId === sectionId
  const isInspectorDockedMode = Boolean(
    showcase?.isWideInspector && showcase?.inspectorControlsHost
  )
  const isActiveInInspector =
    isInspectorDockedMode && showcase?.activeInspectorSectionId === sectionId

  const sectionIndex = useMemo(() => {
    if (!showcase) return -1
    return showcase.sections.findIndex((s) => s.sectionId === sectionId)
  }, [showcase, sectionId])

  const canUseUntilFound = supportsHiddenUntilFound()

  // React 19 会将 JSX 属性 hidden="until-found" 强制转为布尔空串 hidden=""（等价 display:none，破坏页内查找），
  // 因此通过原生 DOM setAttribute 在布局阶段精确写入 until-found 枚举值
  useLayoutEffect(() => {
    const el = sectionRef.current
    if (!el || !canUseUntilFound) return
    if (isHiddenByFocus) {
      if (el.getAttribute('hidden') !== 'until-found') {
        el.setAttribute('hidden', 'until-found')
      }
    } else if (el.hasAttribute('hidden')) {
      el.removeAttribute('hidden')
    }
  }, [isHiddenByFocus, canUseUntilFound])

  // 当浏览器原生 Ctrl+F / Cmd+F 在隐藏卡片中命中文本时，自动切换聚焦至当前卡片
  useEffect(() => {
    const el = sectionRef.current
    if (!el || !showcase || !canUseUntilFound) return
    const onBeforeMatch = () => {
      showcase.focusSingleSection(sectionId)
    }
    el.addEventListener('beforematch', onBeforeMatch)
    return () => el.removeEventListener('beforematch', onBeforeMatch)
  }, [showcase, sectionId, canUseUntilFound])

  const handleCopyCode = async () => {
    const ok = await copyToClipboard(code)
    if (ok) {
      setCopied(true)
      toast.success('TSX 示例代码已复制到剪贴板')
      window.setTimeout(() => setCopied(false), 1600)
    }
  }

  const handleCopyImport = async (sym: string) => {
    const stmt = `import { ${sym} } from '${pkg}'`
    const ok = await copyToClipboard(stmt)
    if (ok) {
      setCopiedSym(sym)
      toast.success(`已复制导入语句：${stmt}`)
      window.setTimeout(() => setCopiedSym((cur) => (cur === sym ? null : cur)), 1400)
    }
  }

  // Safari 等不支持 hidden="until-found" 的环境在单卡聚焦态下直接条件隐藏非当前卡片
  if (isHiddenByFocus && !canUseUntilFound) {
    return <section ref={sectionRef} id={sectionId} className="hidden" aria-hidden="true" />
  }

  const indexLabel = sectionIndex >= 0 ? String(sectionIndex + 1).padStart(2, '0') : null

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      tabIndex={-1}
      className="scroll-mt-16 focus:outline-none"
    >
      <Card
        padding="none"
        className={`overflow-hidden transition-shadow duration-300 ${
          isHighlighted
            ? 'border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/35 shadow-md'
            : ''
        }`}
      >
        {/* 卡片头部：序号锚点、标题、可复制导出符号胶囊与视图切换器 */}
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-4 py-3.5">
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              {indexLabel && (
                <span
                  aria-label={`第 ${indexLabel} 组组件`}
                  className="inline-flex h-5 items-center justify-center rounded bg-[var(--abc-primary-soft)] px-1.5 font-mono text-[11px] font-bold text-[var(--abc-primary)]"
                >
                  {indexLabel}
                </span>
              )}
              <h2 className="text-sm font-bold text-[var(--abc-fg)]">{title}</h2>
              <StatusTag tone="info" dot={false} className="font-mono">
                {pkg}
              </StatusTag>
            </div>

            {components && components.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] text-[var(--abc-fg-muted)]">导出组件 (点击复制 import)：</span>
                {components.map((sym) => {
                  const justCopied = copiedSym === sym
                  const isPascalComponent = /^[A-Z]/.test(sym)
                  return (
                    <button
                      key={sym}
                      type="button"
                      onClick={() => void handleCopyImport(sym)}
                      title={`点击复制 import { ${sym} } from '${pkg}'`}
                      className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[11px] font-medium transition-colors cursor-pointer ${
                        justCopied
                          ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]/50 hover:text-[var(--abc-primary)]'
                      }`}
                    >
                      <span>{isPascalComponent ? `<${sym} />` : sym}</span>
                      {justCopied && <Check className="h-2.5 w-2.5" />}
                    </button>
                  )
                })}
              </div>
            )}

            <p className="text-xs leading-relaxed text-[var(--abc-fg-muted)]">{description}</p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2">
            {isMultiPage && showcase && (
              <button
                type="button"
                onClick={() =>
                  showcase.focusSingleSection(isFocusedSelf ? null : sectionId)
                }
                className={`inline-flex items-center gap-1 rounded-[var(--abc-radius-md)] border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                  isFocusedSelf
                    ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                    : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] hover:border-[var(--abc-primary)]/40 hover:text-[var(--abc-fg)]'
                }`}
                title={isFocusedSelf ? '退出单卡聚焦，返回本页全部组件' : '仅聚焦查看当前组件卡片'}
              >
                {isFocusedSelf ? (
                  <>
                    <Layers className="h-3 w-3" />
                    <span>退出聚焦</span>
                  </>
                ) : (
                  <>
                    <Focus className="h-3 w-3" />
                    <span>独立聚焦</span>
                  </>
                )}
              </button>
            )}

            <div className="flex items-center gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-0.5">
              {[
                { key: 'preview', label: '交互预览', icon: <Eye className="h-3 w-3" /> },
                { key: 'code', label: 'TSX 源码', icon: <Code2 className="h-3 w-3" /> },
                { key: 'api', label: `API (${apiRows.length})`, icon: <Table2 className="h-3 w-3" /> },
              ].map((tab) => {
                const selected = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key as 'preview' | 'code' | 'api')}
                    className={`inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${
                      selected
                        ? 'bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs'
                        : 'text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* 视图 1：交互控制栏 + 点阵边界独立组件画布 */}
        {activeTab === 'preview' && (
          <div>
            {controls && !isInspectorDockedMode && (
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-4 py-2.5 text-xs">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-[var(--abc-fg-secondary)]">
                    <SlidersHorizontal className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                    Props 实时调节：
                  </span>
                  {controls}
                </div>
                {onResetKnobs && (
                  <Button
                    size="xs"
                    variant="ghost"
                    leftIcon={<RotateCcw className="h-3 w-3" />}
                    onClick={onResetKnobs}
                  >
                    重置默认
                  </Button>
                )}
              </div>
            )}
            {controls && isInspectorDockedMode && (
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 px-4 py-1.5 text-[11px]">
                <span className="inline-flex items-center gap-1.5 text-[var(--abc-fg-muted)]">
                  <SlidersHorizontal className="h-3 w-3 text-[var(--abc-primary)]" />
                  <span>
                    {isActiveInInspector
                      ? '当前为视口首卡：组件说明与全部属性操作项已同步至右侧面板'
                      : '滑动至视口顶部或点击右侧按钮，在右侧面板实时调节全部属性'}
                  </span>
                </span>
                <div className="flex items-center gap-1.5">
                  {!isActiveInInspector && showcase && (
                    <button
                      type="button"
                      onClick={() => showcase.selectInspectorSection(sectionId)}
                      className="rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:border-[var(--abc-primary)]/50 hover:bg-[var(--abc-primary-soft)] cursor-pointer"
                    >
                      在右侧调参
                    </button>
                  )}
                  {onResetKnobs && (
                    <Button
                      size="xs"
                      variant="ghost"
                      leftIcon={<RotateCcw className="h-3 w-3" />}
                      onClick={onResetKnobs}
                    >
                      重置默认
                    </Button>
                  )}
                </div>
              </div>
            )}
            <div className="bg-[radial-gradient(var(--abc-border)_1px,transparent_1px)] [background-size:16px_16px] bg-[var(--abc-bg-subtle)]/35 p-3.5 sm:p-4">
              <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]/80 bg-[var(--abc-bg-surface)] p-4 sm:p-5 shadow-2xs">
                {children}
              </div>
            </div>
          </div>
        )}

        {/* 宽屏右侧动态检视面板：将当前视口首个组件的全部实时 Props 操作项 Portal 挂载至右侧空白区 */}
        {controls &&
          isActiveInInspector &&
          showcase?.inspectorControlsHost &&
          createPortal(
            <div className="space-y-3">
              <div className="abc-pg-inspector-knobs-list">{controls}</div>
              {onResetKnobs && (
                <div className="border-t border-[var(--abc-border)] pt-2.5">
                  <Button
                    size="xs"
                    variant="secondary"
                    block
                    leftIcon={<RotateCcw className="h-3 w-3" />}
                    onClick={onResetKnobs}
                  >
                    重置全部默认属性
                  </Button>
                </div>
              )}
            </div>,
            showcase.inspectorControlsHost
          )}

        {/* 视图 2：可直接粘贴的 TSX 源码 */}
        {activeTab === 'code' && (
          <div className="relative bg-slate-950 p-4 text-slate-100">
            <div className="mb-2 flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-mono text-[11px] text-slate-400">TypeScript React (.tsx)</span>
              <Button
                size="xs"
                variant="secondary"
                icon={copied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                onClick={handleCopyCode}
              >
                {copied ? '已复制' : '复制代码'}
              </Button>
            </div>
            <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-sky-200">
              <code>{code}</code>
            </pre>
          </div>
        )}

        {/* 视图 3：Props / Events API 文档矩阵 */}
        {activeTab === 'api' && (
          <div className="overflow-x-auto bg-[var(--abc-bg-surface)]">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]">
                  <th className="px-4 py-2.5 font-semibold">属性名 (Prop)</th>
                  <th className="px-4 py-2.5 font-semibold">类型签名 (Type)</th>
                  <th className="px-4 py-2.5 font-semibold">默认值</th>
                  <th className="px-4 py-2.5 font-semibold">说明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--abc-border)]">
                {apiRows.map((row) => (
                  <tr key={row.prop} className="hover:bg-[var(--abc-bg-muted)]/40">
                    <td className="px-4 py-2.5 font-mono font-semibold text-[var(--abc-primary)] whitespace-nowrap">
                      {row.prop}
                      {row.required && (
                        <span className="ml-1 text-[var(--abc-danger)]" title="必填属性">
                          *
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-[11px] text-[var(--abc-fg-secondary)]">
                      {row.type}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-[11px] text-[var(--abc-fg-muted)] whitespace-nowrap">
                      {row.defaultValue ?? '-'}
                    </td>
                    <td className="px-4 py-2.5 text-[var(--abc-fg-secondary)]">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </section>
  )
}
