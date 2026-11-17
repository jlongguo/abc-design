import type { AbcTreeNode } from '@abc-design/core'
import { Layers } from 'lucide-react'
import * as React from 'react'
import { Tree } from '../components/form/AdvancedControls'
import { ResizableSplitPane } from '../components/layout/ResizableSplitPane'
import { SplitDetailLayout } from '../components/layout/SplitDetailPanel'
import { useControllableState } from '../hooks/useControllableState'
import { cn } from '../utils/cn'

export interface ProSplitWorkbenchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 左侧分类树数据；传入时自动渲染带拼音搜索框的分类树与顶部“全部”快捷节点 */
  treeData?: AbcTreeNode[]
  /** 各树节点对应的统计数量映射（按 String(node.key) 匹配） */
  counts?: Record<string, number>
  /** 顶部“全部”快捷节点文案（默认 '全部视图'） */
  allLabel?: React.ReactNode
  /** 顶部“全部”快捷节点数量徽标 */
  allCount?: number
  /** 受控当前选中节点 key（null 表示选中“全部”） */
  selectedKey?: string | number | null
  /** 非受控初始选中节点 key（默认 null） */
  defaultSelectedKey?: string | number | null
  /** 节点切换回调；点击“全部”时固定返回 null */
  onSelectKey?: (key: string | number | null, node?: AbcTreeNode) => void
  /** 左侧边栏头部标题 */
  sidebarTitle?: React.ReactNode
  /** 左侧边栏头部右侧扩展区域 */
  sidebarExtra?: React.ReactNode
  /** 自定义左侧栏内容（传入时完整覆盖内置“全部”+ Tree 视图） */
  sidebarRender?: React.ReactNode
  /** 左侧边栏初始宽度（px，默认 260） */
  sidebarWidth?: number
  /** 左侧边栏最小拖拽宽度（px，默认 200） */
  minSidebarWidth?: number
  /** 左侧边栏最大拖拽宽度（px，默认 440） */
  maxSidebarWidth?: number
  /** 本地持久化记忆侧栏与详情宽度的存储键 */
  storageKey?: string
  /** 右侧按需内联挤压详情面板节点 */
  detailPanel?: React.ReactNode
  /** 是否打开右侧详情区（默认 false） */
  detailOpen?: boolean
  /** 右侧详情区初始宽度 */
  detailWidth?: number | string
  /** 右侧详情区是否处于沉浸全宽展开模式（默认 false） */
  detailExpanded?: boolean
  /** 主工作区内容 */
  children: React.ReactNode
}

/**
 * 通用主从分栏工作台 (ProSplitWorkbench)
 *
 * 整合左侧可拖拽/可折叠导航树、中间主工作区与右侧按需内联挤压详情区（SplitDetailLayout），
 * 适用于分类树筛选列表、资产目录检视与主从联动审批等典型中后台高频工作台场景。
 */
export const ProSplitWorkbench = React.forwardRef<HTMLDivElement, ProSplitWorkbenchProps>(
  (
    {
      treeData,
      counts,
      allLabel = '全部视图',
      allCount,
      selectedKey,
      defaultSelectedKey = null,
      onSelectKey,
      sidebarTitle,
      sidebarExtra,
      sidebarRender,
      sidebarWidth = 260,
      minSidebarWidth = 200,
      maxSidebarWidth = 440,
      storageKey,
      detailPanel,
      detailOpen = false,
      detailWidth,
      detailExpanded = false,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const [currentKey, setCurrentKey] = useControllableState<string | number | null>({
      value: selectedKey,
      defaultValue: defaultSelectedKey,
    })

    const handleSelect = React.useCallback(
      (nextKey: string | number | null, node?: AbcTreeNode) => {
        setCurrentKey(nextKey)
        onSelectKey?.(nextKey, node)
      },
      [setCurrentKey, onSelectKey]
    )

    const isAllSelected = currentKey === null || currentKey === undefined
    const treeSelectedKeys = React.useMemo(
      () => (isAllSelected ? [] : [currentKey]),
      [isAllSelected, currentKey]
    )

    const renderTreeExtra = React.useMemo(() => {
      if (!counts) return undefined
      return (node: AbcTreeNode) => {
        const value = counts[String(node.key)]
        if (value === undefined) return null
        const isNodeSelected = !isAllSelected && String(currentKey) === String(node.key)
        return (
          <span
            className={cn(
              'inline-flex min-w-5 items-center justify-center rounded-full px-1.5 py-0.5 font-mono text-[10px] font-medium tabular-nums',
              isNodeSelected
                ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                : 'bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]'
            )}
          >
            {value}
          </span>
        )
      }
    }, [counts, isAllSelected, currentKey])

    const hasSidebarHeader = Boolean(sidebarTitle || sidebarExtra)

    const sidebarContent = (
      <aside
        data-slot="pro-split-workbench-sidebar"
        className="flex h-full flex-col rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]"
      >
        {hasSidebarHeader && (
          <header className="flex shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] px-3 py-2.5">
            {sidebarTitle ? (
              <div className="min-w-0 truncate text-xs font-semibold text-[var(--abc-fg)]">
                {sidebarTitle}
              </div>
            ) : (
              <span />
            )}
            {sidebarExtra && <div className="flex shrink-0 items-center gap-1">{sidebarExtra}</div>}
          </header>
        )}

        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
          {sidebarRender !== undefined ? (
            sidebarRender
          ) : (
            <>
              <button
                type="button"
                aria-pressed={isAllSelected}
                onClick={() => handleSelect(null)}
                className={cn(
                  'flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]',
                  isAllSelected
                    ? 'bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]'
                    : 'text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]'
                )}
              >
                <span className="inline-flex min-w-0 items-center gap-1.5 truncate">
                  <Layers className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="truncate">{allLabel}</span>
                </span>
                {typeof allCount === 'number' && (
                  <span
                    className={cn(
                      'inline-flex min-w-5 shrink-0 items-center justify-center rounded-full px-1.5 py-0.5 font-mono text-[10px] font-medium tabular-nums',
                      isAllSelected
                        ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                        : 'bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]'
                    )}
                  >
                    {allCount}
                  </span>
                )}
              </button>

              <Tree
                treeData={treeData ?? []}
                searchable
                defaultExpandAll
                size="sm"
                selectedKeys={treeSelectedKeys}
                onSelect={(_keys, node) => handleSelect(node.key, node)}
                renderExtra={renderTreeExtra}
              />
            </>
          )}
        </div>
      </aside>
    )

    // 当调用方显式指定超出 SplitDetailLayout 默认区间 [360, 760] 的宽度时放宽夹紧边界，避免宽度被静默覆盖
    const minDetailWidth =
      typeof detailWidth === 'number' ? Math.min(360, detailWidth) : undefined
    const maxDetailWidth =
      typeof detailWidth === 'number' ? Math.max(760, detailWidth) : undefined

    return (
      <div
        ref={ref}
        data-slot="pro-split-workbench"
        className={cn('min-h-0 min-w-0', className)}
        {...rest}
      >
        <ResizableSplitPane
          direction="horizontal"
          defaultSize={sidebarWidth}
          minSize={minSidebarWidth}
          maxSize={maxSidebarWidth}
          collapsible
          storageKey={storageKey}
          collapseLabel="折叠侧栏"
          expandLabel="展开侧栏"
          firstPane={sidebarContent}
          secondPane={
            <SplitDetailLayout
              open={Boolean(detailOpen && detailPanel)}
              expanded={detailExpanded}
              panel={detailPanel}
              panelWidth={detailWidth}
              minPanelWidth={minDetailWidth}
              maxPanelWidth={maxDetailWidth}
              storageKey={storageKey ? `${storageKey}_detail` : undefined}
              className="min-w-0"
            >
              {children}
            </SplitDetailLayout>
          }
        />
      </div>
    )
  }
)

ProSplitWorkbench.displayName = 'ProSplitWorkbench'

export default ProSplitWorkbench
