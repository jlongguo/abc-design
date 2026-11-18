import { isOrderDirty, reconcileStagedOrder } from '@abc-design/core'
import { Check, Plus, RotateCcw } from 'lucide-react'
import * as React from 'react'
import { Button } from '../../components/button/Button'
import { StatusTag } from '../../components/display/StatusTag'
import { SkeletonTable } from '../../components/display/FeedbackStates'
import { SplitDetailLayout, SplitDetailPanel } from '../../components/layout/SplitDetailPanel'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'
import { resolveSortableKey, SortableList } from './SortableList'
import type {
  SortableSplitEditorLabels,
  SortableSplitEditorProps,
  SortableSplitEditorRenderContext,
} from './types'

const DEFAULT_EDITOR_LABELS: Required<
  Pick<
    SortableSplitEditorLabels,
    | 'unsavedOrderBadge'
    | 'saveOrderButton'
    | 'resetOrderButton'
    | 'addButton'
    | 'createPanelTitle'
    | 'editPanelTitle'
    | 'closePanelLabel'
    | 'prevItemLabel'
    | 'nextItemLabel'
    | 'expandPanelLabel'
    | 'restorePanelLabel'
  >
> = {
  unsavedOrderBadge: '顺序未保存',
  saveOrderButton: '保存排序',
  resetOrderButton: '重置顺序',
  addButton: '新建条目',
  createPanelTitle: '新建配置',
  editPanelTitle: (label) => `编辑 · ${label}`,
  closePanelLabel: '关闭编辑面板',
  prevItemLabel: '上一项',
  nextItemLabel: '下一项',
  expandPanelLabel: '沉浸展开',
  restorePanelLabel: '还原分栏',
}

/**
 * 紧凑可拖拽排序列表 × 右侧内联挤压编辑工作台 (SortableSplitEditor)
 *
 * 专为多卡片表单（如支付渠道配置、路由策略、通知钩子等）的空间压缩与顺序编排设计：
 * - 左侧仅展示单行高密度摘要卡片并支持拖拽/键盘重排；
 * - 拖拽后在前端暂存新顺序，顶栏自动浮现“顺序未保存”徽标与“重置顺序 / 保存排序”按钮统一提交；
 * - 点击任意条目或顶栏“新建”按钮时，在右侧平滑挤出非阻塞式 SplitDetailPanel（支持上下条快捷切换与一键收起释放全宽）。
 */
export function SortableSplitEditor<T>({
  items,
  rowKey,
  title,
  description,
  headerExtra,
  getItemLabel,
  renderItem,
  renderItemActions,
  renderEditor,
  renderPanelFooter,
  renderPanelTitle,
  renderPanelSubtitle,
  renderPanelBadge,
  onSaveOrder,
  onStagedOrderChange,
  selectedKey: controlledSelectedKey,
  defaultSelectedKey = null,
  onSelectedKeyChange,
  allowCreate = false,
  creating: controlledCreating,
  onCreatingChange,
  showMoveButtons = false,
  showIndexBadge = true,
  disabled = false,
  loading = false,
  errorNode,
  emptyNode,
  panelWidth = 460,
  storageKey,
  labels: customLabels,
  className,
  ...rest
}: SortableSplitEditorProps<T>) {
  const mergedLabels = React.useMemo(
    () => ({ ...DEFAULT_EDITOR_LABELS, ...customLabels }),
    [customLabels]
  )

  const getKey = React.useCallback(
    (item: T) => resolveSortableKey(item, rowKey),
    [rowKey]
  )

  const [stagedKeys, setStagedKeys] = React.useState<Array<string | number>>([])
  const [savingOrder, setSavingOrder] = React.useState(false)
  const [panelExpanded, setPanelExpanded] = React.useState(false)

  const [activeKey, setActiveKey] = useControllableState<string | number | null>({
    value: controlledSelectedKey,
    defaultValue: defaultSelectedKey,
    onChange: onSelectedKeyChange,
  })

  const [isCreating, setIsCreating] = useControllableState<boolean>({
    value: controlledCreating,
    defaultValue: false,
    onChange: onCreatingChange,
  })

  // 将服务端 items 与本地暂存顺序安全合并（单卡字段修改/新增/删除均不丢失未保存的拖拽顺序）
  const stagedItems = React.useMemo(
    () => reconcileStagedOrder(items, stagedKeys, getKey),
    [items, stagedKeys, getKey]
  )

  const orderDirty = React.useMemo(
    () => stagedKeys.length > 0 && isOrderDirty(items, stagedItems, getKey),
    [stagedKeys.length, items, stagedItems, getKey]
  )

  // 当已持久化 items 已经与暂存顺序一致时，自动清空暂存 key 缓存
  React.useEffect(() => {
    if (stagedKeys.length > 0 && !isOrderDirty(items, stagedItems, getKey)) {
      setStagedKeys([])
    }
  }, [items, stagedItems, stagedKeys.length, getKey])

  // 若当前选中的条目已被删除，自动收起右侧编辑态
  React.useEffect(() => {
    if (activeKey === null || activeKey === undefined) return
    const exists = stagedItems.some((it) => String(getKey(it)) === String(activeKey))
    if (!exists) {
      setActiveKey(null)
    }
  }, [activeKey, stagedItems, getKey, setActiveKey])

  const handleReorder = React.useCallback(
    (nextItems: T[]) => {
      const nextKeys = nextItems.map(getKey)
      const dirty = isOrderDirty(items, nextItems, getKey)
      setStagedKeys(dirty ? nextKeys : [])
      onStagedOrderChange?.(nextItems, dirty)
    },
    [getKey, items, onStagedOrderChange]
  )

  const handleResetOrder = React.useCallback(() => {
    setStagedKeys([])
    onStagedOrderChange?.(items.slice(), false)
  }, [items, onStagedOrderChange])

  const handleSaveOrder = React.useCallback(async () => {
    if (!onSaveOrder || !orderDirty || savingOrder) return
    setSavingOrder(true)
    try {
      await onSaveOrder(stagedItems)
    } finally {
      setSavingOrder(false)
    }
  }, [onSaveOrder, orderDirty, savingOrder, stagedItems])

  const activeIndex = React.useMemo(() => {
    if (isCreating || activeKey === null || activeKey === undefined) return -1
    return stagedItems.findIndex((it) => String(getKey(it)) === String(activeKey))
  }, [activeKey, getKey, isCreating, stagedItems])

  const activeItem = activeIndex >= 0 ? stagedItems[activeIndex] : null
  const panelOpen = Boolean(isCreating || activeItem)

  const closePanel = React.useCallback(() => {
    setIsCreating(false)
    setActiveKey(null)
    setPanelExpanded(false)
  }, [setActiveKey, setIsCreating])

  const editorCtx: SortableSplitEditorRenderContext<T> = React.useMemo(
    () => ({
      mode: isCreating ? 'create' : 'edit',
      item: isCreating ? null : activeItem,
      index: activeIndex,
      total: stagedItems.length,
      close: closePanel,
    }),
    [activeIndex, activeItem, closePanel, isCreating, stagedItems.length]
  )

  const resolvedItemLabel = React.useMemo(() => {
    if (!activeItem) return ''
    return getItemLabel ? getItemLabel(activeItem, activeIndex) : String(getKey(activeItem))
  }, [activeIndex, activeItem, getItemLabel, getKey])

  const panelTitle = renderPanelTitle
    ? renderPanelTitle(editorCtx)
    : isCreating
      ? mergedLabels.createPanelTitle
      : mergedLabels.editPanelTitle(resolvedItemLabel)

  return (
    <section
      data-slot="sortable-split-editor"
      className={cn(
        'space-y-3 rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        className
      )}
      {...rest}
    >
      {/* 顶栏：标题说明 + 暂存排序操作区 + 新建入口 */}
      {(title || description || orderDirty || allowCreate || headerExtra) && (
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            {title && <h2 className="text-sm font-semibold text-[var(--abc-fg)]">{title}</h2>}
            {description && (
              <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">{description}</p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {orderDirty && (
              <>
                <StatusTag tone="warning" size="xs" dot>
                  {mergedLabels.unsavedOrderBadge}
                </StatusTag>
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  disabled={savingOrder}
                  leftIcon={<RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />}
                  onClick={handleResetOrder}
                >
                  {mergedLabels.resetOrderButton}
                </Button>
                {onSaveOrder && (
                  <Button
                    type="button"
                    size="sm"
                    variant="primary"
                    loading={savingOrder}
                    leftIcon={<Check className="h-3.5 w-3.5" aria-hidden="true" />}
                    onClick={() => void handleSaveOrder()}
                  >
                    {mergedLabels.saveOrderButton}
                  </Button>
                )}
              </>
            )}

            {headerExtra}

            {allowCreate && (
              <Button
                type="button"
                size="sm"
                variant={isCreating ? 'secondary' : 'outline'}
                leftIcon={<Plus className="h-3.5 w-3.5" aria-hidden="true" />}
                onClick={() => {
                  setActiveKey(null)
                  setIsCreating(true)
                }}
              >
                {mergedLabels.addButton}
              </Button>
            )}
          </div>
        </header>
      )}

      {errorNode}

      {/* 主从内联挤压布局：左侧紧凑可拖拽列表 + 右侧 SplitDetailPanel 详情表单 */}
      <SplitDetailLayout
        open={panelOpen}
        expanded={panelExpanded}
        panelWidth={panelWidth}
        storageKey={storageKey}
        panel={
          panelOpen ? (
            <SplitDetailPanel
              title={panelTitle}
              subtitle={renderPanelSubtitle?.(editorCtx)}
              badge={renderPanelBadge?.(editorCtx)}
              expandable
              expanded={panelExpanded}
              onExpandedChange={setPanelExpanded}
              expandLabel={mergedLabels.expandPanelLabel}
              restoreLabel={mergedLabels.restorePanelLabel}
              closeLabel={mergedLabels.closePanelLabel}
              onClose={closePanel}
              navigation={
                !isCreating && stagedItems.length > 1 && activeIndex >= 0
                  ? {
                      current: activeIndex + 1,
                      total: stagedItems.length,
                      prevLabel: mergedLabels.prevItemLabel,
                      nextLabel: mergedLabels.nextItemLabel,
                      onPrev: () => {
                        const prevIdx =
                          (activeIndex - 1 + stagedItems.length) % stagedItems.length
                        setActiveKey(getKey(stagedItems[prevIdx]))
                      },
                      onNext: () => {
                        const nextIdx = (activeIndex + 1) % stagedItems.length
                        setActiveKey(getKey(stagedItems[nextIdx]))
                      },
                    }
                  : undefined
              }
              footer={renderPanelFooter?.(editorCtx)}
            >
              {renderEditor(editorCtx)}
            </SplitDetailPanel>
          ) : null
        }
      >
        {loading ? (
          <SkeletonTable rows={3} columns={3} />
        ) : (
          <SortableList<T>
            items={stagedItems}
            rowKey={rowKey}
            disabled={disabled || savingOrder}
            getItemLabel={getItemLabel}
            selectedKey={isCreating ? null : activeKey}
            onSelect={(item) => {
              const key = getKey(item)
              if (!isCreating && activeKey !== null && String(activeKey) === String(key)) {
                closePanel()
              } else {
                setIsCreating(false)
                setActiveKey(key)
              }
            }}
            onReorder={handleReorder}
            renderItem={renderItem}
            renderActions={renderItemActions}
            showMoveButtons={showMoveButtons}
            showIndexBadge={showIndexBadge}
            emptyNode={emptyNode}
            labels={mergedLabels}
          />
        )}
      </SplitDetailLayout>
    </section>
  )
}

SortableSplitEditor.displayName = 'SortableSplitEditor'
export default SortableSplitEditor
