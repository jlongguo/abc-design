import React, { useMemo, useRef, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks'
import { cn } from '../../utils/cn'
import { Select, type SelectOption } from '../form/Select'

export interface PaginationCursorMeta {
  /** 游标模式：是否包含下一页数据 */
  hasNext?: boolean
  /** 游标模式：是否包含上一页数据 */
  hasPrev?: boolean
  /** 游标模式：是否有上一页（兼容别名） */
  hasPrevious?: boolean
  /** 下一页游标标识符 */
  nextCursor?: string | null
  /** 上一页游标标识符 */
  prevCursor?: string | null
  /** 当前游标标识符 */
  currentCursor?: string | null
  /** 已加载累计记录数 */
  loadedCount?: number
  /** 当前页记录数（兼容别名） */
  count?: number
  /** 当前页记录数（兼容别名） */
  currentCount?: number
  /** 点击下一页游标回调 */
  onNext?: () => void
  /** 点击上一页游标回调 */
  onPrev?: () => void
  /** 点击上一页回调（兼容别名） */
  onPrevious?: () => void
  /** 重置游标返回第一批/最新数据 */
  onResetCursor?: () => void
}

export interface PaginationProps extends Partial<PaginationCursorMeta> {
  /** 分页模式：'offset' 页码偏移模式（默认） | 'cursor' 游标时间线模式 */
  mode?: 'offset' | 'cursor'
  current?: number
  currentPage?: number
  page?: number
  pageSize?: number
  /** 每页条数（兼容别名） */
  limit?: number
  /** 每页条数（数字）或控件尺寸规格（xs/sm/md/lg） */
  size?: number | AbcSize
  /** 分页器控件尺寸规格（避免与数字型 pageSize 冲突时的显式指定入口） */
  controlSize?: AbcSize
  motion?: AbcMotionPreset
  total?: number
  pageSizeOptions?: number[]
  /** 可选每页大小列表（兼容别名） */
  limitOptions?: readonly number[]
  onChange?: (page: number, pageSize: number) => void
  onPageChange?: (page: number) => void
  onSizeChange?: (size: number) => void
  onPageSizeChange?: (size: number) => void
  /** 每页大小变更回调（兼容别名） */
  onLimitChange?: (limit: number) => void
  showTotal?: boolean | ((total: number) => React.ReactNode)
  /** 左侧汇总文案（兼容别名） */
  summaryText?: React.ReactNode
  /** 页码状态文案（兼容别名） */
  pageStatusText?: React.ReactNode
  rowsPerPageLabel?: string
  /** 自定义每页条数下拉选项文案格式化器；未传时根据 rowsPerPageLabel 语种自动渲染“10 条/页”或“10 / page” */
  formatPageSizeOption?: (size: number) => string
  prevLabel?: React.ReactNode
  nextLabel?: React.ReactNode
  showQuickJumper?: boolean
  className?: string
  loading?: boolean
}

export type CursorPaginationProps = PaginationProps
export type OffsetPaginationProps = PaginationProps

const PAGINATION_SIZE_MAP: Record<
  AbcSize,
  { wrap: string; selectWrap: string; select: string; navBtn: string; pageBtn: string; input: string }
> = {
  xs: {
    wrap: 'text-[11px]',
    selectWrap: 'w-[90px] shrink-0',
    select: 'h-6 px-1.5 text-[11px]',
    navBtn: 'h-6 w-6',
    pageBtn: 'h-6 min-w-6 px-1.5 text-[11px]',
    input: 'h-6 w-9 text-[11px]',
  },
  sm: {
    wrap: 'text-xs',
    selectWrap: 'w-[100px] shrink-0',
    select: 'h-7 px-2 text-xs',
    navBtn: 'h-7 w-7',
    pageBtn: 'h-7 min-w-7 px-2 text-xs',
    input: 'h-7 w-11 text-xs',
  },
  md: {
    wrap: 'text-sm',
    selectWrap: 'w-[108px] shrink-0',
    select: 'h-8 px-2 text-xs',
    navBtn: 'h-8 w-8',
    pageBtn: 'h-8 min-w-8 px-2 text-xs',
    input: 'h-8 w-12 text-xs',
  },
  lg: {
    wrap: 'text-sm',
    selectWrap: 'w-[116px] shrink-0',
    select: 'h-9 px-2.5 text-sm',
    navBtn: 'h-9 w-9',
    pageBtn: 'h-9 min-w-9 px-2.5 text-sm',
    input: 'h-9 w-14 text-sm',
  },
}

const CURSOR_BTN_HEIGHT: Record<AbcSize, string> = {
  xs: 'h-6 px-2',
  sm: 'h-7 px-2.5',
  md: 'h-8 px-3',
  lg: 'h-9 px-3.5',
}

/** 企业级紧凑数据分页器（支持快速页码跳转、边界自动 Clamp、双模游标流水与零数据优雅提示） */
export const Pagination: React.FC<PaginationProps> = ({
  mode,
  current,
  currentPage,
  page,
  pageSize,
  limit,
  size,
  controlSize,
  motion,
  total,
  pageSizeOptions = [10, 20, 50, 100],
  limitOptions,
  onChange,
  onPageChange,
  onSizeChange,
  onPageSizeChange,
  onLimitChange,
  showTotal = true,
  summaryText,
  pageStatusText,
  rowsPerPageLabel = '每页条数',
  formatPageSizeOption,
  prevLabel = '上一页',
  nextLabel = '下一页',
  showQuickJumper = true,
  className,
  hasNext,
  hasPrev,
  hasPrevious,
  nextCursor: _nextCursor,
  prevCursor: _prevCursor,
  currentCursor: _currentCursor,
  loadedCount,
  count,
  currentCount,
  onNext,
  onPrev,
  onPrevious,
  onResetCursor,
  loading = false,
}) => {
  const activePage = current ?? currentPage ?? page ?? 1
  const activeSize = limit ?? pageSize ?? (typeof size === 'number' ? size : undefined) ?? 10
  const resolvedSizeOptions = limitOptions ? [...limitOptions] : pageSizeOptions
  const resolvedControlSize = useAbcSize(
    controlSize ?? (typeof size === 'string' ? size : undefined),
    'sm'
  )
  const resolvedMotion = useAbcMotion(motion)
  const sizeCls = PAGINATION_SIZE_MAP[resolvedControlSize]

  const resolvedHasPrev = hasPrev ?? hasPrevious
  const resolvedOnPrev = onPrev ?? onPrevious
  const resolvedCount = loadedCount ?? count ?? currentCount

  const resolvedMode: 'offset' | 'cursor' =
    mode ??
    (total === undefined && (hasNext !== undefined || resolvedHasPrev !== undefined || onNext !== undefined)
      ? 'cursor'
      : 'offset')

  const triggerSize = (nextSize: number) => {
    onChange?.(1, nextSize)
    onSizeChange?.(nextSize)
    onPageSizeChange?.(nextSize)
    onLimitChange?.(nextSize)
  }

  const isZhLocale = /[\u4e00-\u9fff]/.test(rowsPerPageLabel)

  const selectOptions: SelectOption[] = useMemo(() => {
    return (resolvedSizeOptions || []).map((opt) => ({
      label: formatPageSizeOption
        ? formatPageSizeOption(opt)
        : isZhLocale
          ? `${opt} 条/页`
          : `${opt} / page`,
      value: opt,
    }))
  }, [formatPageSizeOption, isZhLocale, resolvedSizeOptions])

  const prevAria = typeof prevLabel === 'string' ? prevLabel : '上一页'
  const nextAria = typeof nextLabel === 'string' ? nextLabel : '下一页'

  // 游标流水模式渲染
  if (resolvedMode === 'cursor') {
    return (
      <div
        data-testid="pagination-cursor"
        data-motion={resolvedMotion}
        className={cn(
          'flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none',
          sizeCls.wrap,
          className
        )}
      >
        <div className="flex items-center gap-2 font-mono tabular-nums">
          {summaryText ? (
            summaryText
          ) : showTotal === false ? null : typeof showTotal === 'function' ? (
            showTotal(resolvedCount ?? 0)
          ) : resolvedCount !== undefined ? (
            <span>
              已连续加载 <strong className="font-semibold text-[var(--abc-fg)]">{resolvedCount}</strong> 条记录
            </span>
          ) : (
            <span className="text-xs text-[var(--abc-fg-muted)]">流水式游标分页</span>
          )}
          {onResetCursor && (
            <button
              type="button"
              onClick={onResetCursor}
              disabled={loading || !resolvedHasPrev}
              className="text-xs text-[var(--abc-primary)] hover:underline disabled:opacity-40 disabled:hover:no-underline cursor-pointer"
            >
              返回最新
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {resolvedSizeOptions.length > 0 && (onSizeChange || onPageSizeChange || onLimitChange || onChange) && (
            <Select
              aria-label={rowsPerPageLabel}
              size={resolvedControlSize}
              value={activeSize}
              disabled={loading}
              onChange={(val) => triggerSize(Number(val))}
              options={selectOptions}
              searchable={false}
              clearable={false}
              wrapperClassName={sizeCls.selectWrap}
              className={cn('cursor-pointer font-sans tabular-nums select-none', sizeCls.select)}
            />
          )}

          <button
            type="button"
            aria-label={prevAria}
            disabled={!resolvedHasPrev || loading}
            onClick={() => resolvedOnPrev?.()}
            className={cn(
              'abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer',
              CURSOR_BTN_HEIGHT[resolvedControlSize]
            )}
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="text-xs">{prevLabel}</span>
          </button>

          <button
            type="button"
            aria-label={nextAria}
            disabled={!hasNext || loading}
            onClick={onNext}
            className={cn(
              'abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer',
              CURSOR_BTN_HEIGHT[resolvedControlSize]
            )}
          >
            <span className="text-xs">{nextLabel}</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    )
  }

  // 标准 Offset 模式
  const safeTotal = total ?? 0
  const totalPages = Math.max(1, Math.ceil(safeTotal / Math.max(1, activeSize)))

  const [jumperVal, setJumperVal] = useState('')
  const lastJumpedRef = useRef<string | null>(null)

  if (safeTotal <= 0) {
    return (
      <div
        data-testid="pagination-empty"
        data-motion={resolvedMotion}
        className={cn(
          'flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none',
          sizeCls.wrap,
          className
        )}
      >
        <div>
          {summaryText ? (
            summaryText
          ) : showTotal === false ? null : typeof showTotal === 'function' ? (
            showTotal(0)
          ) : (
            <span>
              共 <strong className="font-mono font-semibold text-[var(--abc-fg)] tabular-nums">0</strong> 条记录
            </span>
          )}
        </div>
      </div>
    )
  }

  const triggerPage = (nextPage: number) => {
    const clamped = Math.min(Math.max(1, nextPage), totalPages)
    if (clamped === activePage) return
    onChange?.(clamped, activeSize)
    onPageChange?.(clamped)
  }

  const commitJump = () => {
    const raw = jumperVal.trim()
    if (!raw) {
      lastJumpedRef.current = null
      return
    }
    if (raw === lastJumpedRef.current) return
    const parsed = parseInt(raw, 10)
    if (Number.isNaN(parsed)) {
      setJumperVal('')
      lastJumpedRef.current = null
      return
    }
    const target = Math.min(Math.max(1, parsed), totalPages)
    lastJumpedRef.current = raw
    setJumperVal(String(target))
    triggerPage(target)
  }

  const pageItems: Array<number | '...'> = []
  if (totalPages <= 7) {
    for (let p = 1; p <= totalPages; p++) pageItems.push(p)
  } else {
    pageItems.push(1)
    if (activePage > 3) pageItems.push('...')
    const start = Math.max(2, activePage - 1)
    const end = Math.min(totalPages - 1, activePage + 1)
    for (let p = start; p <= end; p++) pageItems.push(p)
    if (activePage < totalPages - 2) pageItems.push('...')
    pageItems.push(totalPages)
  }

  return (
    <div
      data-motion={resolvedMotion}
      className={cn(
        'flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none',
        sizeCls.wrap,
        className
      )}
    >
      <div className="flex items-center gap-2 font-mono tabular-nums">
        {summaryText ? (
          summaryText
        ) : showTotal === false ? null : typeof showTotal === 'function' ? (
          showTotal(safeTotal)
        ) : (
          <span>
            共 <strong className="font-semibold text-[var(--abc-fg)]">{safeTotal}</strong> 条记录
          </span>
        )}
        {pageStatusText ? (
          <span className="text-xs text-[var(--abc-fg-muted)]">{pageStatusText}</span>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {resolvedSizeOptions && resolvedSizeOptions.length > 0 && (
          <Select
            aria-label={rowsPerPageLabel}
            size={resolvedControlSize}
            value={activeSize}
            disabled={loading}
            onChange={(val) => triggerSize(Number(val))}
            options={selectOptions}
            searchable={false}
            clearable={false}
            wrapperClassName={sizeCls.selectWrap}
            className={cn('cursor-pointer font-sans tabular-nums select-none', sizeCls.select)}
          />
        )}

        <button
          type="button"
          aria-label={prevAria}
          disabled={activePage <= 1}
          onClick={() => triggerPage(activePage - 1)}
          className={cn(
            'abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer',
            sizeCls.navBtn
          )}
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>

        {pageItems.map((item, idx) =>
          item === '...' ? (
            <span key={`dots-${idx}`} className="px-1 text-[var(--abc-fg-muted)]">
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => triggerPage(item)}
              className={cn(
                'abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer',
                sizeCls.pageBtn,
                item === activePage
                  ? 'bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]'
                  : 'border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]'
              )}
            >
              {item}
            </button>
          )
        )}

        <button
          type="button"
          aria-label={nextAria}
          disabled={activePage >= totalPages}
          onClick={() => triggerPage(activePage + 1)}
          className={cn(
            'abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer',
            sizeCls.navBtn
          )}
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>

        {showQuickJumper && (
          <div
            data-testid="pagination-quick-jumper"
            className="ml-1 flex items-center gap-1.5 text-[var(--abc-fg-muted)]"
          >
            <span>{isZhLocale ? '跳至' : 'Go to'}</span>
            <input
              type="text"
              inputMode="numeric"
              aria-label={isZhLocale ? '快速跳转页码' : 'Jump to page'}
              data-testid="pagination-quick-jumper-input"
              value={jumperVal}
              onChange={(e) => {
                lastJumpedRef.current = null
                setJumperVal(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  commitJump()
                }
              }}
              onBlur={commitJump}
              className={cn(
                'rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:ring-1 focus:ring-[var(--abc-ring)] focus:outline-none transition-colors',
                sizeCls.input
              )}
            />
            {isZhLocale ? <span>页</span> : null}
          </div>
        )}
      </div>
    </div>
  )
}

/** 游标流式分页器（专用于 CDP 抓包、高频作业队列等无深总数的大数据场景） */
export const CursorPagination: React.FC<PaginationProps> = ({
  prevLabel,
  nextLabel,
  ...props
}) => {
  const isEnglishCompat =
    props.limit !== undefined || props.count !== undefined || props.currentCount !== undefined
  return (
    <Pagination
      mode="cursor"
      prevLabel={prevLabel ?? (isEnglishCompat ? 'Previous' : '上一页')}
      nextLabel={nextLabel ?? (isEnglishCompat ? 'Next' : '下一页')}
      {...props}
    />
  )
}

/** 页码偏移分页器（英文默认 Prev/Next 标签兼容别名） */
export const OffsetPagination: React.FC<OffsetPaginationProps> = ({
  prevLabel = 'Previous',
  nextLabel = 'Next',
  showQuickJumper = false,
  ...props
}) => (
  <Pagination
    mode="offset"
    prevLabel={prevLabel}
    nextLabel={nextLabel}
    showQuickJumper={showQuickJumper}
    {...props}
  />
)

/** 智能双模分页器（自动根据是否提供 total 或游标属性平滑降级切换） */
export const SmartPagination: React.FC<PaginationProps> = (props) => <Pagination {...props} />
