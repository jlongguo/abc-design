import React, { useMemo, useState } from 'react'
import {
  Button,
  CursorPagination,
  EmptyState,
  OffsetPagination,
  PageContainer,
  Pagination,
  Skeleton,
  SkeletonCard,
  SkeletonTable,
  SmartPagination,
  StatusTag,
  abcToast,
  useCursorStack,
  type AbcSize,
  type SkeletonAnimation,
} from '@abc-design/react'
import { RotateCcw } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

const SIZE_OPTIONS: { label: AbcSize; value: AbcSize }[] = [
  { label: 'xs', value: 'xs' },
  { label: 'sm', value: 'sm' },
  { label: 'md', value: 'md' },
  { label: 'lg', value: 'lg' },
]

const TOTAL_OPTIONS: { label: string; value: 0 | 48 | 128 | 320 }[] = [
  { label: '0', value: 0 },
  { label: '48', value: 48 },
  { label: '128', value: 128 },
  { label: '320', value: 320 },
]

const PAGE_SIZE_OPTIONS: { label: string; value: 10 | 20 | 50 }[] = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
]

const ANIM_OPTIONS: { label: SkeletonAnimation; value: SkeletonAnimation }[] = [
  { label: 'wave', value: 'wave' },
  { label: 'pulse', value: 'pulse' },
  { label: 'none', value: 'none' },
]

const CURSOR_CHAIN: Array<string | null> = [null, 'cur_02_b9f1', 'cur_03_c4e2', 'cur_04_d8a0']

/**
 * 双模分页、空状态与骨架屏文档页
 */
export const PaginationAndEmptyPage: React.FC = () => {
  // 卡片 1：Pagination / OffsetPagination / SmartPagination
  const [controlSize, setControlSize] = useState<AbcSize>('sm')
  const [total, setTotal] = useState<0 | 48 | 128 | 320>(128)
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10)
  const [page, setPage] = useState(2)
  const [showQuickJumper, setShowQuickJumper] = useState(true)
  const [offsetLoading, setOffsetLoading] = useState(false)

  // 卡片 2：CursorPagination & useCursorStack
  const [cursorPageSize, setCursorPageSize] = useState<10 | 20 | 50>(20)
  const [cursorLoading, setCursorLoading] = useState(false)
  const { currentCursor, hasPrev, pushCursor, popCursor, resetCursor } = useCursorStack(null)

  // 卡片 3：EmptyState & Skeleton / SkeletonCard / SkeletonTable
  const [emptySize, setEmptySize] = useState<AbcSize>('md')
  const [compact, setCompact] = useState(false)
  const [showResetBtn, setShowResetBtn] = useState(true)
  const [skelAnim, setSkelAnim] = useState<SkeletonAnimation>('wave')
  const [tableRows, setTableRows] = useState<2 | 4>(2)
  const [tableCols, setTableCols] = useState<3 | 5>(3)

  const maxPage = Math.max(1, Math.ceil(total / pageSize))
  const safePage = Math.min(page, maxPage)

  const batchIndex = useMemo(() => {
    const idx = CURSOR_CHAIN.indexOf(currentCursor)
    return idx >= 0 ? idx : 0
  }, [currentCursor])

  const nextCursor = batchIndex < CURSOR_CHAIN.length - 1 ? CURSOR_CHAIN[batchIndex + 1] : null
  const hasNext = Boolean(nextCursor)

  return (
    <PageContainer
      title="双模分页、空状态与骨架屏"
      subtitle="涵盖 Offset 页码偏移分页与 Cursor 游标流水栈（Pagination / OffsetPagination / SmartPagination / CursorPagination / useCursorStack），以及空态占位与骨架屏体系。"
      breadcrumbs={[{ label: '数据展示' }, { label: '双模分页、空状态与骨架屏' }]}
    >
      <div className="space-y-5">
        {/* 卡片 1：Pagination / OffsetPagination / SmartPagination */}
        <ComponentDocPreview
          title="Pagination / OffsetPagination / SmartPagination 偏移分页与智能分发"
          description="Pagination 支持页码省略自动折叠、边界值 Clamp 校验与 total=0 零数据优雅降级；OffsetPagination 提供英文导航默认值；SmartPagination 可统一中后台双模调用契约。"
          components={['Pagination', 'OffsetPagination', 'SmartPagination']}
          onResetKnobs={() => {
            setControlSize('sm')
            setTotal(128)
            setPageSize(10)
            setPage(2)
            setShowQuickJumper(true)
            setOffsetLoading(false)
          }}
          controls={
            <>
              <KnobSegmented label="controlSize" value={controlSize} options={SIZE_OPTIONS} onChange={setControlSize} />
              <KnobSegmented
                label="total"
                value={total}
                options={TOTAL_OPTIONS}
                onChange={(nextTotal) => {
                  setTotal(nextTotal)
                  setPage(1)
                }}
              />
              <KnobSegmented
                label="pageSize"
                value={pageSize}
                options={PAGE_SIZE_OPTIONS}
                onChange={(nextSize) => {
                  setPageSize(nextSize)
                  setPage(1)
                }}
              />
              <KnobSwitch label="showQuickJumper" checked={showQuickJumper} onChange={setShowQuickJumper} />
              <KnobSwitch label="loading" checked={offsetLoading} onChange={setOffsetLoading} />
            </>
          }
          code={`import { Pagination, OffsetPagination, SmartPagination } from '@abc-design/react'

<Pagination
  controlSize="${controlSize}"
  current={${safePage}}
  pageSize={${pageSize}}
  total={${total}}
  showQuickJumper={${showQuickJumper}}
  loading={${offsetLoading}}
  onChange={(p, s) => { setPage(p); setPageSize(s) }}
/>
<OffsetPagination controlSize="${controlSize}" current={${safePage}} pageSize={${pageSize}} total={${total}} onChange={onChange} />
<SmartPagination controlSize="${controlSize}" current={${safePage}} pageSize={${pageSize}} total={${total}} showQuickJumper={${showQuickJumper}} onChange={onChange} />`}
          apiRows={[
            { prop: 'controlSize', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '显式控制分页控件尺寸（避免与数字型 size 页大小冲突）' },
            { prop: 'total / current / pageSize', type: 'number', defaultValue: '0 / 1 / 10', description: '数据总条数、当前页码与每页条数；total=0 自动退化为空计数行' },
            { prop: 'showQuickJumper', type: 'boolean', defaultValue: 'true', description: '是否启用右侧输入页码回车/失焦快速跳页' },
            { prop: 'loading', type: 'boolean', defaultValue: 'false', description: '加载态时禁用页大小切换器' },
            { prop: 'OffsetPagination / SmartPagination', type: 'PaginationProps', description: '英文默认标签别名与自动模式识别封装' },
          ]}
        >
          <div className="space-y-3">
            <div className="rounded-lg border border-[var(--abc-border)] p-3.5 space-y-2">
              <div className="text-[11px] font-medium text-[var(--abc-fg-muted)]">Pagination（中文默认 + 跳页框受控）</div>
              <Pagination
                controlSize={controlSize}
                current={safePage}
                pageSize={pageSize}
                pageSizeOptions={[10, 20, 50]}
                total={total}
                showQuickJumper={showQuickJumper}
                loading={offsetLoading}
                onChange={(p, s) => {
                  setPage(p)
                  setPageSize(s as 10 | 20 | 50)
                }}
              />
            </div>

            <div className="rounded-lg border border-[var(--abc-border)] p-3.5 space-y-2">
              <div className="text-[11px] font-medium text-[var(--abc-fg-muted)]">OffsetPagination（英文 Previous / Next 默认别名）</div>
              <OffsetPagination
                controlSize={controlSize}
                current={safePage}
                pageSize={pageSize}
                pageSizeOptions={[10, 20, 50]}
                total={total}
                loading={offsetLoading}
                onChange={(p, s) => {
                  setPage(p)
                  setPageSize(s as 10 | 20 | 50)
                }}
              />
            </div>

            <div className="rounded-lg border border-[var(--abc-border)] p-3.5 space-y-2">
              <div className="text-[11px] font-medium text-[var(--abc-fg-muted)]">SmartPagination（自动识别 total 与游标契约）</div>
              <SmartPagination
                controlSize={controlSize}
                current={safePage}
                pageSize={pageSize}
                pageSizeOptions={[10, 20, 50]}
                total={total}
                showQuickJumper={showQuickJumper}
                loading={offsetLoading}
                onChange={(p, s) => {
                  setPage(p)
                  setPageSize(s as 10 | 20 | 50)
                }}
              />
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2：CursorPagination & useCursorStack */}
        <ComponentDocPreview
          title="CursorPagination & useCursorStack 游标流水分页与历史栈 Hook"
          description="面向大表深分页、审计日志与 CDP 抓包流水场景；搭配 useCursorStack Hook，只需后端返回 next_cursor / has_more 即可零依赖实现上一批、下一批与重置回首页。"
          components={['CursorPagination', 'useCursorStack']}
          onResetKnobs={() => {
            setCursorPageSize(20)
            setCursorLoading(false)
            resetCursor()
          }}
          controls={
            <>
              <KnobSegmented
                label="pageSize"
                value={cursorPageSize}
                options={PAGE_SIZE_OPTIONS}
                onChange={(nextSize) => {
                  setCursorPageSize(nextSize)
                  resetCursor()
                }}
              />
              <KnobSwitch label="loading" checked={cursorLoading} onChange={setCursorLoading} />
            </>
          }
          code={`import { CursorPagination, useCursorStack } from '@abc-design/react'

const { currentCursor, hasPrev, pushCursor, popCursor, resetCursor } = useCursorStack(null)

<CursorPagination
  pageSize={${cursorPageSize}}
  pageSizeOptions={[10, 20, 50]}
  loadedCount={${(batchIndex + 1) * cursorPageSize}}
  hasPrev={${hasPrev}}
  hasNext={${hasNext}}
  loading={${cursorLoading}}
  onPrev={popCursor}
  onNext={() => nextCursor && pushCursor(nextCursor)}
  onResetCursor={resetCursor}
  onSizeChange={(s) => { setPageSize(s); resetCursor() }}
/>`}
          apiRows={[
            { prop: 'useCursorStack(initial)', type: '() => UseCursorStackReturn', description: '返回 currentCursor、hasPrev、pushCursor、popCursor、resetCursor' },
            { prop: 'CursorPagination.hasNext / hasPrev', type: 'boolean', description: '控制下一页/上一页按钮禁用边界' },
            { prop: 'CursorPagination.loadedCount', type: 'number', description: '累计已加载条数汇总展示' },
            { prop: 'CursorPagination.onNext / onPrev / onResetCursor', type: '() => void', description: '游标压栈、出栈与清空返回最新批次回调' },
            { prop: 'CursorPagination.loading', type: 'boolean', defaultValue: 'false', description: '请求锁定态，阻止并发翻页造成游标栈错乱' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/60 p-3.5 text-xs">
              <div className="flex flex-wrap items-center gap-2.5">
                <StatusTag tone="info" dot={false}>
                  批次 {batchIndex + 1} / {CURSOR_CHAIN.length}
                </StatusTag>
                <span className="font-mono text-[var(--abc-fg-secondary)]">
                  currentCursor: <strong className="text-[var(--abc-fg)]">{currentCursor ?? 'null (首页)'}</strong>
                </span>
                <span className="font-mono text-[var(--abc-fg-muted)]">
                  hasPrev={String(hasPrev)} · hasNext={String(hasNext)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="xs"
                  variant="outline"
                  disabled={!hasPrev || cursorLoading}
                  onClick={popCursor}
                >
                  popCursor (上一批)
                </Button>
                <Button
                  size="xs"
                  variant="primary"
                  disabled={!hasNext || cursorLoading}
                  onClick={() => nextCursor && pushCursor(nextCursor)}
                >
                  pushCursor (下一批)
                </Button>
                <Button
                  size="xs"
                  variant="ghost"
                  leftIcon={<RotateCcw className="h-3 w-3" />}
                  disabled={!hasPrev || cursorLoading}
                  onClick={resetCursor}
                >
                  resetCursor
                </Button>
              </div>
            </div>

            <CursorPagination
              pageSize={cursorPageSize}
              pageSizeOptions={[10, 20, 50]}
              loadedCount={(batchIndex + 1) * cursorPageSize}
              hasPrev={hasPrev}
              hasNext={hasNext}
              loading={cursorLoading}
              onPrev={popCursor}
              onNext={() => nextCursor && pushCursor(nextCursor)}
              onResetCursor={resetCursor}
              onSizeChange={(nextSize) => {
                setCursorPageSize(nextSize as 10 | 20 | 50)
                resetCursor()
              }}
            />
          </div>
        </ComponentDocPreview>

        {/* 卡片 3：EmptyState & Skeleton / SkeletonCard / SkeletonTable */}
        <ComponentDocPreview
          title="EmptyState & Skeleton / SkeletonCard / SkeletonTable 空状态与骨架屏"
          description="EmptyState 根据数据空白与筛选无果提供四档尺度占位与一键重置触发；Skeleton 系列基于 @abc-design/tokens 声明的流光波纹防 CLS 布局偏移。"
          components={['EmptyState', 'Skeleton', 'SkeletonCard', 'SkeletonTable']}
          onResetKnobs={() => {
            setEmptySize('md')
            setCompact(false)
            setShowResetBtn(true)
            setSkelAnim('wave')
            setTableRows(2)
            setTableCols(3)
          }}
          controls={
            <>
              <KnobSegmented label="EmptyState.size" value={emptySize} options={SIZE_OPTIONS} onChange={setEmptySize} />
              <KnobSwitch label="compact" checked={compact} onChange={setCompact} />
              <KnobSwitch label="showResetBtn" checked={showResetBtn} onChange={setShowResetBtn} />
              <KnobSegmented label="Skeleton.animation" value={skelAnim} options={ANIM_OPTIONS} onChange={setSkelAnim} />
              <KnobSegmented label="rows" value={tableRows} options={[{ label: '2', value: 2 }, { label: '4', value: 4 }]} onChange={setTableRows} />
              <KnobSegmented label="columns" value={tableCols} options={[{ label: '3', value: 3 }, { label: '5', value: 5 }]} onChange={setTableCols} />
            </>
          }
          code={`import { EmptyState, Skeleton, SkeletonCard, SkeletonTable } from '@abc-design/react'

<EmptyState
  size="${emptySize}"
  compact={${compact}}${showResetBtn ? '\n  onReset={() => resetFilters()}' : ''}
/>
<Skeleton variant="circular" width={36} height={36} animation="${skelAnim}" />
<SkeletonCard animation="${skelAnim}" />
<SkeletonTable rows={${tableRows}} columns={${tableCols}} animation="${skelAnim}" />`}
          apiRows={[
            { prop: 'EmptyState.size / compact', type: 'AbcSize / boolean', defaultValue: "'md' / false", description: '图标与留白尺度；compact=true 时自动收缩至 sm 紧凑规格' },
            { prop: 'EmptyState.onReset / resetText', type: '() => void / string', defaultValue: "- / '重置筛选条件'", description: '传入回调后自动渲染重置按钮' },
            { prop: 'Skeleton.variant / animation', type: "'text' | 'circular' | 'rectangular' | 'rounded' / 'wave' | 'pulse' | 'none'", defaultValue: "'text' / 'pulse'", description: '基础骨架图形变体与动画模式' },
            { prop: 'SkeletonCard.animation', type: "'wave' | 'pulse' | 'none'", defaultValue: "'wave'", description: 'KPI 卡片骨架屏动画风格' },
            { prop: 'SkeletonTable.rows / columns / animation', type: 'number / number / SkeletonAnimation', defaultValue: "5 / 4 / 'wave'", description: '表格骨架占位行列数与动效' },
          ]}
        >
          <div className="space-y-4">
            <div className="rounded-lg border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/30">
              <EmptyState
                size={emptySize}
                compact={compact}
                onReset={showResetBtn ? () => abcToast.info('已触发 EmptyState.onReset 重置筛选') : undefined}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] p-4">
                <div className="text-xs font-medium text-[var(--abc-fg-muted)]">Skeleton 原子占位组合</div>
                <div className="flex items-center gap-3">
                  <Skeleton variant="circular" width={36} height={36} animation={skelAnim} />
                  <div className="flex-1 space-y-2">
                    <Skeleton variant="text" width="60%" height={12} animation={skelAnim} />
                    <Skeleton variant="text" width="90%" height={10} animation={skelAnim} />
                  </div>
                </div>
                <Skeleton variant="rounded" width="100%" height={36} animation={skelAnim} />
              </div>

              <SkeletonCard animation={skelAnim} />
              <SkeletonTable rows={tableRows} columns={tableCols} animation={skelAnim} />
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default PaginationAndEmptyPage
