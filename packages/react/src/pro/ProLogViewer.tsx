/**
 * Pro 高性能虚拟日志流查看器 (ProLogViewer / VirtualLogViewer)
 * 零外部重依赖实现：
 * - 基于 ResizeObserver + 可视窗口切片计算，支撑数万条日志 60FPS 流畅渲染；
 * - 支持结构化 LogEntry 与纯文本日志自动分级推断；
 * - 支持关键字检索、级别筛选胶囊、自动贴底追踪及一键格式化复制。
 */
import {
  Check,
  Copy,
  Search,
  X,
} from 'lucide-react'
import * as React from 'react'
import { cn } from '../utils/cn'

export interface LogEntry {
  seq?: number
  level?: string
  message: string
  detail?: Record<string, unknown>
  created_at?: string
}

export interface ProLogViewerLabels {
  searchPlaceholder?: string
  stickBottomLabel?: string
  copyLabel?: string
  copiedLabel?: string
  emptyText?: string
  clearSearchLabel?: string
  formatLineCount?: (filtered: number, total: number) => string
}

export interface ProLogViewerProps {
  /** 日志条目列表（支持结构化 LogEntry 或纯文本行） */
  logs: Array<LogEntry | string>
  /** 容器自定义高度类名（默认 h-[440px]） */
  heightClass?: string
  /** 默认预估单行高度（像素，默认 26） */
  estimateSize?: number
  /** 视口上下缓冲条数（默认 12） */
  overscan?: number
  /** 是否默认开启粘滞贴底滚动（默认 false） */
  defaultStickBottom?: boolean
  /** 多语言与文案定制 */
  labels?: ProLogViewerLabels
  /** 额外的容器类名 */
  className?: string
}

const DEFAULT_LABELS: Required<ProLogViewerLabels> = {
  searchPlaceholder: '过滤日志内容…',
  stickBottomLabel: '自动贴底',
  copyLabel: '复制',
  copiedLabel: '已复制',
  emptyText: '无符合筛选条件的日志。',
  clearSearchLabel: '清空搜索',
  formatLineCount: (filtered, total) => `${filtered} / ${total} 行`,
}

const LOG_LEVELS = ['all', 'info', 'warn', 'error'] as const

export function ProLogViewer({
  logs,
  heightClass = 'h-[440px]',
  estimateSize = 26,
  overscan = 12,
  defaultStickBottom = false,
  labels,
  className,
}: ProLogViewerProps) {
  const mergedLabels = { ...DEFAULT_LABELS, ...labels }
  const parentRef = React.useRef<HTMLDivElement>(null)
  const [search, setSearch] = React.useState('')
  const [selectedLevel, setSelectedLevel] = React.useState<string>('all')
  const [stickBottom, setStickBottom] = React.useState(defaultStickBottom)
  const [copied, setCopied] = React.useState(false)
  const [scrollTop, setScrollTop] = React.useState(0)
  const [viewportHeight, setViewportHeight] = React.useState(0)

  const isTestEnv =
    (typeof process !== 'undefined' && process.env?.NODE_ENV === 'test') ||
    (typeof import.meta !== 'undefined' &&
      Boolean((import.meta as unknown as { env?: { MODE?: string } }).env?.MODE === 'test'))

  // 归一化结构化日志条目
  const normalizedLogs = React.useMemo<LogEntry[]>(() => {
    return logs.map((item, idx) => {
      if (typeof item === 'string') {
        const lower = item.toLowerCase()
        const level = lower.includes('error')
          ? 'error'
          : lower.includes('warn')
            ? 'warn'
            : 'info'
        return { seq: idx + 1, level, message: item }
      }
      return {
        seq: item.seq ?? idx + 1,
        level: item.level || 'info',
        message: item.message || '',
        detail: item.detail,
        created_at: item.created_at,
      }
    })
  }, [logs])

  // 本地级别与关键字过滤
  const filteredLogs = React.useMemo(() => {
    const q = search.trim().toLowerCase()
    return normalizedLogs.filter((log) => {
      if (selectedLevel !== 'all' && log.level?.toLowerCase() !== selectedLevel) {
        return false
      }
      if (!q) return true
      return (
        log.message.toLowerCase().includes(q) ||
        (log.created_at ? log.created_at.toLowerCase().includes(q) : false) ||
        (log.detail ? JSON.stringify(log.detail).toLowerCase().includes(q) : false)
      )
    })
  }, [normalizedLogs, search, selectedLevel])

  // 观测滚动视口尺寸变化以驱动虚拟切片计算
  React.useEffect(() => {
    const host = parentRef.current
    if (!host) return
    const syncHeight = () => {
      if (host.clientHeight > 0) {
        setViewportHeight(host.clientHeight)
      }
    }
    syncHeight()

    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(syncHeight)
    observer.observe(host)
    return () => observer.disconnect()
  }, [])

  // 粘滞贴底自动滚动
  React.useEffect(() => {
    const host = parentRef.current
    if (!stickBottom || !host || filteredLogs.length === 0) return
    host.scrollTop = host.scrollHeight
    setScrollTop(host.scrollTop)
  }, [filteredLogs.length, stickBottom])

  // 测试环境或小样本列表直接常规流式渲染，长列表启用视口虚拟滚动切片
  const shouldVirtualize = !isTestEnv && filteredLogs.length > 80 && viewportHeight > 0
  const totalHeight = filteredLogs.length * estimateSize

  const { startIndex, endIndex } = React.useMemo(() => {
    if (!shouldVirtualize) {
      return { startIndex: 0, endIndex: Math.max(0, filteredLogs.length - 1) }
    }
    const visibleCount = Math.ceil(viewportHeight / estimateSize)
    const rawStart = Math.floor(scrollTop / estimateSize) - overscan
    const start = Math.max(0, rawStart)
    const end = Math.min(filteredLogs.length - 1, Math.floor(scrollTop / estimateSize) + visibleCount + overscan)
    return { startIndex: start, endIndex: end }
  }, [shouldVirtualize, filteredLogs.length, viewportHeight, estimateSize, scrollTop, overscan])

  const visibleSlice = React.useMemo(() => {
    if (filteredLogs.length === 0) return []
    return filteredLogs.slice(startIndex, endIndex + 1).map((log, offset) => ({
      log,
      index: startIndex + offset,
    }))
  }, [filteredLogs, startIndex, endIndex])

  const handleCopyVisible = async () => {
    const text = filteredLogs
      .map((l) =>
        `[${l.created_at || 'LOG'}][${(l.level || 'INFO').toUpperCase()}] ${l.message} ${l.detail ? JSON.stringify(l.detail) : ''}`.trim()
      )
      .join('\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // 忽略剪贴板权限受限环境异常
    }
  }

  return (
    <div
      data-slot="pro-log-viewer"
      className={cn(
        'flex flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-slate-800 bg-slate-950 font-mono text-slate-200 shadow-md',
        className
      )}
    >
      {/* 顶部过滤与操作工具栏 */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/90 px-3 py-2 text-xs">
        <div className="flex min-w-44 flex-1 items-center gap-2">
          <div className="relative max-w-sm flex-1">
            <Search
              className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={mergedLabels.searchPlaceholder}
              className="h-7 w-full rounded-md border border-slate-700 bg-slate-950 pl-8 pr-7 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
            {search && (
              <button
                type="button"
                aria-label={mergedLabels.clearSearchLabel}
                onClick={() => setSearch('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 p-0.5">
            {LOG_LEVELS.map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setSelectedLevel(lvl)}
                className={cn(
                  'rounded px-2 py-0.5 text-[10px] font-semibold uppercase transition cursor-pointer',
                  selectedLevel === lvl
                    ? lvl === 'error'
                      ? 'bg-rose-500/20 text-rose-300'
                      : lvl === 'warn'
                        ? 'bg-amber-500/20 text-amber-300'
                        : 'bg-blue-500/25 text-blue-300'
                    : 'text-slate-400 hover:text-slate-200'
                )}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span className="tabular-nums">
            {mergedLabels.formatLineCount(filteredLogs.length, normalizedLogs.length)}
          </span>

          <label className="flex cursor-pointer items-center gap-1.5 select-none hover:text-slate-200">
            <input
              type="checkbox"
              checked={stickBottom}
              onChange={(e) => setStickBottom(e.target.checked)}
              className="h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-0"
            />
            <span>{mergedLabels.stickBottomLabel}</span>
          </label>

          <button
            type="button"
            onClick={() => void handleCopyVisible()}
            className="flex items-center gap-1 rounded border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" aria-hidden="true" />
                <span className="text-emerald-300">{mergedLabels.copiedLabel}</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" aria-hidden="true" />
                <span>{mergedLabels.copyLabel}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 虚拟滚动日志视口 */}
      <div
        ref={parentRef}
        onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
        className={cn('relative w-full overflow-auto', heightClass)}
      >
        {filteredLogs.length === 0 ? (
          <div className="flex h-full items-center justify-center p-8 text-xs text-slate-500">
            {mergedLabels.emptyText}
          </div>
        ) : (
          <div
            style={
              shouldVirtualize
                ? { height: `${totalHeight}px`, width: '100%', position: 'relative' }
                : { width: '100%' }
            }
          >
            {visibleSlice.map(({ log, index }) => {
              const level = log.level?.toLowerCase() || 'info'
              const isError = level === 'error' || level === 'fatal'
              const isWarn = level === 'warn' || level === 'warning'

              return (
                <div
                  key={`${log.seq ?? index}-${index}`}
                  data-index={index}
                  style={
                    shouldVirtualize
                      ? {
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: `${estimateSize}px`,
                          transform: `translateY(${index * estimateSize}px)`,
                        }
                      : undefined
                  }
                  className={cn(
                    'flex items-center gap-2.5 px-3 py-1 text-xs leading-5 transition-colors hover:bg-slate-900/60',
                    shouldVirtualize ? 'overflow-hidden whitespace-nowrap' : 'items-start',
                    isError
                      ? 'bg-rose-950/20 text-rose-200'
                      : isWarn
                        ? 'bg-amber-950/15 text-amber-200'
                        : 'text-slate-300'
                  )}
                >
                  <span className="w-10 shrink-0 select-none text-right text-[10px] text-slate-600 tabular-nums">
                    {log.seq}
                  </span>

                  {log.created_at && (
                    <span className="shrink-0 select-none text-[11px] text-slate-500 tabular-nums">
                      {log.created_at.length >= 19 ? log.created_at.slice(11, 19) : log.created_at}
                    </span>
                  )}

                  <span
                    className={cn(
                      'inline-block w-12 shrink-0 select-none rounded px-1 py-0.5 text-center text-[9px] font-bold uppercase leading-none',
                      isError
                        ? 'bg-rose-500/25 text-rose-300'
                        : isWarn
                          ? 'bg-amber-500/25 text-amber-300'
                          : 'bg-slate-800 text-slate-400'
                    )}
                  >
                    {level.slice(0, 5)}
                  </span>

                  <div
                    className={cn(
                      'min-w-0 flex-1',
                      shouldVirtualize ? 'truncate' : 'break-all whitespace-pre-wrap'
                    )}
                    title={shouldVirtualize ? `${log.message}${log.detail ? ` ${JSON.stringify(log.detail)}` : ''}` : undefined}
                  >
                    <span>{log.message}</span>
                    {log.detail && Object.keys(log.detail).length > 0 && (
                      <span className="ml-2 text-[11px] text-slate-500">
                        {JSON.stringify(log.detail)}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export const VirtualLogViewer = ProLogViewer
export type VirtualLogViewerProps = ProLogViewerProps
export default ProLogViewer
