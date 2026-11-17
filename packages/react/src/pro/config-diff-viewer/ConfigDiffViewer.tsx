import React, { useEffect, useId, useMemo, useState } from 'react'
import { computeLineDiff, computeObjectDiff } from '@abc-design/core'
import { CheckCircle2, Code2, Columns2, ListFilter, Rows2, ShieldAlert } from 'lucide-react'
import { Button } from '../../components/button/Button'
import { Tooltip } from '../../components/display/Overlays'
import { Switch } from '../../components/form/Controls'
import { SegmentedControl } from '../../components/navigation/SegmentedControl'
import { cn } from '../../utils/cn'
import { CodeDiffView } from './CodeDiffView'
import { FieldDiffTable } from './FieldDiffTable'
import type { ConfigDiffViewerProps } from './types'

const SECRET_KEY_PATTERN = /(password|passwd|secret|token|apikey|api_key|private_key|access_key)/i

function maskObjectForJson(
  obj: Record<string, any> | null | undefined,
  maskSecrets: boolean
): Record<string, any> | null {
  if (!obj) return null
  if (!maskSecrets) return obj
  const out: Record<string, any> = {}
  for (const [k, v] of Object.entries(obj)) {
    out[k] = SECRET_KEY_PATTERN.test(k) && v !== undefined && v !== null ? '••••••••' : v
  }
  return out
}

function serializeCodeFallback(
  obj: Record<string, any> | null | undefined,
  maskSecrets: boolean
): string {
  if (obj === undefined || obj === null) return ''
  try {
    return JSON.stringify(maskObjectForJson(obj, maskSecrets), null, 2)
  } catch {
    return String(obj)
  }
}

/**
 * 配置变更差异审阅面板 (ConfigDiffViewer)
 * 支持结构化对象字段语义对比与 LCS 逐行源码对比，内置敏感字段脱敏提示与实时变更筛选开关。
 */
export const ConfigDiffViewer: React.FC<ConfigDiffViewerProps> = ({
  before,
  after,
  beforeCode,
  afterCode,
  labels,
  mode,
  codeLayout = 'unified',
  onlyChanges = true,
  maskSecrets = true,
  title,
  emptyText = '当前配置无任何变更',
  ariaLabel = '配置差异对比视图',
  className,
}) => {
  const onlyChangesSwitchId = useId()
  const hasObjects = before !== undefined || after !== undefined
  const hasCode = beforeCode !== undefined || afterCode !== undefined
  const showModeTabs = mode === 'tabs' || (mode === undefined && hasObjects && hasCode)

  const resolveInitialTab = (): 'fields' | 'code' => {
    if (mode === 'code') return 'code'
    if (mode === 'fields') return 'fields'
    if (!hasObjects && hasCode) return 'code'
    return 'fields'
  }

  const [activeTab, setActiveTab] = useState<'fields' | 'code'>(resolveInitialTab)
  const [activeCodeLayout, setActiveCodeLayout] = useState<'unified' | 'split'>(codeLayout)
  const [showOnlyChanges, setShowOnlyChanges] = useState<boolean>(onlyChanges)

  useEffect(() => {
    if (mode === 'fields' || mode === 'code') {
      setActiveTab(mode)
    } else if (mode === undefined && !hasObjects && hasCode) {
      setActiveTab('code')
    }
  }, [mode, hasObjects, hasCode])

  useEffect(() => {
    setActiveCodeLayout(codeLayout)
  }, [codeLayout])

  useEffect(() => {
    setShowOnlyChanges(onlyChanges)
  }, [onlyChanges])

  // 计算完整字段对比清单（包含未变更字段以支持实时开关切换与精确计数）
  const allFieldEntries = useMemo(
    () =>
      computeObjectDiff(before, after, {
        labels,
        maskSecrets,
        includeUnchanged: true,
      }),
    [before, after, labels, maskSecrets]
  )

  const visibleFieldEntries = useMemo(
    () => (showOnlyChanges ? allFieldEntries.filter((e) => e.kind !== 'unchanged') : allFieldEntries),
    [allFieldEntries, showOnlyChanges]
  )

  const fieldStats = useMemo(() => {
    let added = 0
    let modified = 0
    let removed = 0
    let maskedCount = 0
    for (const entry of allFieldEntries) {
      if (entry.kind === 'added') added += 1
      else if (entry.kind === 'modified') modified += 1
      else if (entry.kind === 'removed') removed += 1
      if (entry.masked) maskedCount += 1
    }
    return { added, modified, removed, maskedCount }
  }, [allFieldEntries])

  const resolvedBeforeCode = useMemo(
    () => (beforeCode !== undefined ? beforeCode : serializeCodeFallback(before, maskSecrets)),
    [beforeCode, before, maskSecrets]
  )
  const resolvedAfterCode = useMemo(
    () => (afterCode !== undefined ? afterCode : serializeCodeFallback(after, maskSecrets)),
    [afterCode, after, maskSecrets]
  )

  const allCodeLines = useMemo(
    () => computeLineDiff(resolvedBeforeCode, resolvedAfterCode),
    [resolvedBeforeCode, resolvedAfterCode]
  )

  const visibleCodeLines = useMemo(
    () => (showOnlyChanges ? allCodeLines.filter((l) => l.type !== 'context') : allCodeLines),
    [allCodeLines, showOnlyChanges]
  )

  const codeStats = useMemo(() => {
    let added = 0
    let removed = 0
    for (const line of allCodeLines) {
      if (line.type === 'add') added += 1
      else if (line.type === 'remove') removed += 1
    }
    return { added, removed }
  }, [allCodeLines])

  const isCodeView = activeTab === 'code'
  const addedBadgeCount = isCodeView ? codeStats.added : fieldStats.added
  const removedBadgeCount = isCodeView ? codeStats.removed : fieldStats.removed
  const modifiedBadgeCount = isCodeView ? 0 : fieldStats.modified

  const hasHiddenUnchanged = isCodeView
    ? showOnlyChanges && visibleCodeLines.length === 0 && allCodeLines.length > 0
    : showOnlyChanges && visibleFieldEntries.length === 0 && allFieldEntries.length > 0

  const isEmpty = isCodeView ? visibleCodeLines.length === 0 : visibleFieldEntries.length === 0

  return (
    <section
      aria-label={ariaLabel}
      data-slot="config-diff-viewer"
      className={cn(
        'overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        className
      )}
    >
      {/* 顶部统计与工具栏 */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3.5 py-2.5">
        <div className="flex flex-wrap items-center gap-2">
          {title && <h3 className="mr-1 text-xs font-semibold text-[var(--abc-fg)]">{title}</h3>}

          <div
            role="group"
            aria-label="变更计数统计"
            className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] font-semibold tabular-nums"
          >
            <span className="inline-flex items-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-success)]/30 bg-[var(--abc-success-soft)] px-2 py-0.5 text-[var(--abc-success)]">
              +{addedBadgeCount} 新增
            </span>
            {!isCodeView && (
              <span className="inline-flex items-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-warning)]/30 bg-[var(--abc-warning-soft)] px-2 py-0.5 text-[var(--abc-warning)]">
                ~{modifiedBadgeCount} 修改
              </span>
            )}
            <span className="inline-flex items-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-danger)]/30 bg-[var(--abc-danger-soft)] px-2 py-0.5 text-[var(--abc-danger)]">
              -{removedBadgeCount} 删除
            </span>
          </div>

          {maskSecrets && fieldStats.maskedCount > 0 && (
            <Tooltip content="已自动对 password、secret、token、api_key 等敏感字段脱敏展示">
              <span
                role="note"
                data-slot="config-diff-secret-notice"
                className="inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] border border-[var(--abc-info)]/30 bg-[var(--abc-info-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-info)]"
              >
                <ShieldAlert className="h-3 w-3 shrink-0" aria-hidden="true" />
                敏感字段已脱敏
              </span>
            </Tooltip>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {showModeTabs && (
            <SegmentedControl<'fields' | 'code'>
              size="xs"
              aria-label="对比视图模式"
              value={activeTab}
              onChange={setActiveTab}
              options={[
                {
                  value: 'fields',
                  label: '字段语义对比',
                  icon: <ListFilter className="h-3 w-3" aria-hidden="true" />,
                },
                {
                  value: 'code',
                  label: '源码逐行对比',
                  icon: <Code2 className="h-3 w-3" aria-hidden="true" />,
                },
              ]}
            />
          )}

          {isCodeView && (
            <SegmentedControl<'unified' | 'split'>
              size="xs"
              aria-label="代码对比布局"
              value={activeCodeLayout}
              onChange={setActiveCodeLayout}
              options={[
                {
                  value: 'unified',
                  label: '单栏',
                  icon: <Rows2 className="h-3 w-3" aria-hidden="true" />,
                },
                {
                  value: 'split',
                  label: '双栏',
                  icon: <Columns2 className="h-3 w-3" aria-hidden="true" />,
                },
              ]}
            />
          )}

          <div className="inline-flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1">
            <Switch
              id={onlyChangesSwitchId}
              size="xs"
              checked={showOnlyChanges}
              ariaLabel="仅看变更或显示全部"
              onChange={setShowOnlyChanges}
            />
            <label
              htmlFor={onlyChangesSwitchId}
              className="cursor-pointer text-xs text-[var(--abc-fg-secondary)] select-none"
            >
              {showOnlyChanges ? '仅看变更' : '显示全部'}
            </label>
          </div>
        </div>
      </div>

      {/* 主体内容区 */}
      {isEmpty ? (
        <div
          data-slot="config-diff-empty"
          className="flex flex-col items-center justify-center gap-2 px-4 py-10 text-center"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--abc-success-soft)] text-[var(--abc-success)]">
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="text-xs font-medium text-[var(--abc-fg-secondary)]">{emptyText}</p>
          {hasHiddenUnchanged && (
            <Button
              type="button"
              variant="ghost"
              size="xs"
              onClick={() => setShowOnlyChanges(false)}
            >
              显示全部未变更内容
            </Button>
          )}
        </div>
      ) : isCodeView ? (
        <CodeDiffView lines={visibleCodeLines} layout={activeCodeLayout} />
      ) : (
        <FieldDiffTable entries={visibleFieldEntries} />
      )}
    </section>
  )
}

ConfigDiffViewer.displayName = 'ConfigDiffViewer'
