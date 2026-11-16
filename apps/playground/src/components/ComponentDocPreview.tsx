import React, { useState } from 'react'
import { Button, Card, StatusTag, copyToClipboard, useAbcConfig } from '@abc-design/react'
import { Check, Code2, Copy, Eye, SlidersHorizontal, Table2 } from 'lucide-react'

export interface PropApiItem {
  prop: string
  type: string
  defaultValue?: string
  required?: boolean
  description: string
}

export interface ComponentDocPreviewProps {
  /** 组件标题（如 Button 按钮） */
  title: string
  /** 所属 npm 包名 */
  pkg?:
    | '@abc-design/react'
    | '@abc-design/charts'
    | '@abc-design/core'
    | '@abc-design/markdown'
    | '@abc-design/tokens'
  /** 核心设计说明与适用场景 */
  description: string
  /** 顶部交互式属性调节面板（Knobs） */
  controls?: React.ReactNode
  /** 实时可运行 JSX 代码片段（随 Knobs 动态生成或静态示例） */
  code: string
  /** 结构化 Props / Events API 参考表 */
  apiRows: PropApiItem[]
  /** 实时渲染的组件演练区 */
  children: React.ReactNode
}

/**
 * 官方交互式组件文档卡片容器
 * 集实时属性调节（Knobs）、画布渲染、一键复制 TSX 源码与结构化 API 表格于一体
 */
export const ComponentDocPreview: React.FC<ComponentDocPreviewProps> = ({
  title,
  pkg = '@abc-design/react',
  description,
  controls,
  code,
  apiRows,
  children,
}) => {
  const { toast } = useAbcConfig()
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'api'>('preview')
  const [copied, setCopied] = useState(false)

  const handleCopyCode = async () => {
    const ok = await copyToClipboard(code)
    if (ok) {
      setCopied(true)
      toast.success('TSX 示例代码已复制到剪贴板')
      window.setTimeout(() => setCopied(false), 1600)
    }
  }

  return (
    <Card padding="none" className="overflow-hidden">
      {/* 卡片头部：标题、包标识与视图切换器 */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3.5">
        <div className="min-w-0 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-bold text-[var(--abc-fg)]">{title}</h3>
            <StatusTag tone="info" dot={false} className="font-mono">
              {pkg}
            </StatusTag>
          </div>
          <p className="text-xs leading-relaxed text-[var(--abc-fg-muted)]">{description}</p>
        </div>

        <div className="flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-0.5">
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
                onClick={() => setActiveTab(tab.key as any)}
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

      {/* 视图 1：交互控制栏 + 实时组件舞台 */}
      {activeTab === 'preview' && (
        <div>
          {controls && (
            <div className="flex flex-wrap items-center gap-4 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-4 py-2.5 text-xs">
              <span className="inline-flex items-center gap-1 font-semibold text-[var(--abc-fg-secondary)]">
                <SlidersHorizontal className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                Props 实时调节：
              </span>
              {controls}
            </div>
          )}
          <div className="bg-[var(--abc-bg-surface)] p-5">{children}</div>
        </div>
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
        <div className="overflow-x-auto">
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
  )
}
