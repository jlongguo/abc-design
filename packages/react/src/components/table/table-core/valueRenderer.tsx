import dayjs from 'dayjs'
import React,{ useEffect,useState } from 'react'
import { useAbcConfig } from '../../../provider/AbcProvider'
import { ImagePreview } from '../../display/ImagePreview'
import { StatusTag,type StatusTone } from '../../display/StatusTag'
import { Progress } from '../../feedback/FeedbackExtras'
import { Switch } from '../../form/Controls'
import { CopyableText } from '../../typography/CopyableText'

import {
  AUTO_OPTION_TONES,
  COLOR_ALIAS_TO_TONE,
  type AbcColumn,
  type AbcColumnTypeConfig,
} from './types'

function parseDayjsValue(rawVal: any) {
  if (typeof rawVal === 'number') {
    return dayjs(rawVal < 1e11 ? rawVal * 1000 : rawVal)
  }
  const str = String(rawVal).trim()
  if (/^\d{10}$/.test(str)) return dayjs(Number(str) * 1000)
  if (/^\d{13}$/.test(str)) return dayjs(Number(str))
  return dayjs(rawVal)
}

/**
 * 行内交互式拨动开关单元格（支持乐观响应、异步防重入与报错自动回滚）
 */
function AbcSwitchCell<T extends Record<string, any>>({
  value,
  record,
  config,
}: {
  value: any
  record: T
  config: AbcColumnTypeConfig<T>
}) {
  const { toast } = useAbcConfig()
  const deriveChecked = (v: any) =>
    config.checkedValue !== undefined
      ? String(v) === String(config.checkedValue)
      : v === true || v === 1 || v === '1'
  const [optimistic, setOptimistic] = useState(() => deriveChecked(value))
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setOptimistic(deriveChecked(value))
  }, [value, config.checkedValue])

  const handleToggle = async (next: boolean) => {
    if (!config.onChange || loading) return
    const prev = optimistic
    setOptimistic(next)
    setLoading(true)
    try {
      await config.onChange(next, record)
    } catch (err: any) {
      setOptimistic(prev)
      toast.error(err?.message || '更新状态失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <span className="inline-flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
      <Switch
        size="sm"
        checked={optimistic}
        loading={loading}
        disabled={!config.onChange}
        onChange={handleToggle}
      />
      {(config.checkedChildren || config.unCheckedChildren) && (
        <span className="text-xs text-[var(--abc-fg-secondary)]">
          {optimistic ? config.checkedChildren : config.unCheckedChildren}
        </span>
      )}
    </span>
  )
}

export function renderBuiltInValue<T extends Record<string, any>>(
  rawVal: any,
  record: T,
  col: AbcColumn<T>,
  onRowView?: (record: T, linkTarget?: string) => void
): React.ReactNode {
  const hasExplicitSwitchType =
    col.type === 'switch' ||
    (typeof col.type === 'object' && col.type !== null && col.type.type === 'switch')

  const typeCfg: AbcColumnTypeConfig<T> | undefined =
    typeof col.type === 'object' && col.type !== null
      ? col.type
      : col.type
        ? { type: col.type }
        : col.valueType
          ? { type: col.valueType }
          : undefined

  // 交互式行内开关即使值为 0 / false 也必须正常渲染，不可落入空值占位
  if (
    typeCfg?.type === 'switch' &&
    (hasExplicitSwitchType || typeCfg.onChange || typeCfg.checkedValue !== undefined)
  ) {
    return <AbcSwitchCell value={rawVal} record={record} config={typeCfg} />
  }

  if (rawVal === undefined || rawVal === null || rawVal === '') {
    return <span className="text-[var(--abc-fg-placeholder)]">-</span>
  }

  const effectiveOptions = typeCfg?.options ?? col.options
  // 枚举 / 状态标签映射（兼容大小写无关匹配与无显式配色时的 9 色板自动轮换）
  if (effectiveOptions && effectiveOptions.length > 0) {
    const rawStr = String(rawVal)
    let matchedIdx = effectiveOptions.findIndex((opt) => String(opt.value) === rawStr)
    if (matchedIdx < 0) {
      const lower = rawStr.toLowerCase()
      matchedIdx = effectiveOptions.findIndex((opt) => String(opt.value).toLowerCase() === lower)
    }
    if (matchedIdx >= 0) {
      const matched = effectiveOptions[matchedIdx]
      const statusKey = matched.status ? String(matched.status).toLowerCase() : ''
      const colorKey = matched.color ? String(matched.color).toLowerCase() : ''
      const resolvedTone: StatusTone | undefined =
        (statusKey ? COLOR_ALIAS_TO_TONE[statusKey] : undefined) ??
        (colorKey ? COLOR_ALIAS_TO_TONE[colorKey] : undefined) ??
        (!matched.status && !matched.color
          ? AUTO_OPTION_TONES[matchedIdx % AUTO_OPTION_TONES.length]
          : undefined)
      const showDot = (col as any).__autoOptionsFromSearch ? false : true
      return (
        <StatusTag
          tone={resolvedTone}
          status={matched.status}
          color={matched.color}
          dot={showDot}
        >
          {matched.label}
        </StatusTag>
      )
    }
  }

  const effectiveType = typeCfg?.type
  let formatted: React.ReactNode
  switch (effectiveType) {
    case 'money': {
      const num = Number(rawVal)
      formatted = Number.isNaN(num) ? (
        String(rawVal)
      ) : (
        <span className="font-mono font-semibold text-[var(--abc-fg)] tabular-nums">
          ¥{num.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      )
      break
    }
    case 'number': {
      const num = Number(rawVal)
      formatted = Number.isNaN(num) ? (
        String(rawVal)
      ) : (
        <span className="font-mono tabular-nums">{num.toLocaleString('zh-CN')}</span>
      )
      break
    }
    case 'date': {
      const parsed = parseDayjsValue(rawVal)
      const fmt = typeCfg?.format || 'YYYY-MM-DD'
      formatted = (
        <span className="font-mono text-[var(--abc-fg-muted)] tabular-nums">
          {parsed.isValid() ? parsed.format(fmt) : String(rawVal)}
        </span>
      )
      break
    }
    case 'datetime': {
      const parsed = parseDayjsValue(rawVal)
      const fmt = typeCfg?.format || 'YYYY-MM-DD HH:mm:ss'
      formatted = (
        <span className="font-mono text-[var(--abc-fg-muted)] tabular-nums">
          {parsed.isValid() ? parsed.format(fmt) : String(rawVal)}
        </span>
      )
      break
    }
    case 'image':
      return (
        <ImagePreview
          src={String(rawVal)}
          width={typeCfg?.imageWidth ?? 32}
          height={typeCfg?.imageHeight ?? 32}
        />
      )
    case 'progress':
      return (
        <Progress
          percent={Number(rawVal) || 0}
          strokeColor={typeCfg?.progressColor}
          className="min-w-[92px]"
        />
      )
    case 'code':
      formatted = (
        <code className="rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg)]">
          {String(rawVal)}
        </code>
      )
      break
    case 'copy':
      return <CopyableText text={String(rawVal)} />
    case 'link':
      return (
        <a
          href={String(rawVal)}
          target={typeCfg?.target ?? '_blank'}
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-[var(--abc-primary)] hover:underline"
        >
          {String(rawVal)}
        </a>
      )
    case 'switch':
      return (
        <StatusTag tone={rawVal ? 'success' : 'neutral'} dot>
          {rawVal ? '已启用' : '已停用'}
        </StatusTag>
      )
    case 'status':
    case 'tag':
    case 'badge':
      return <StatusTag dot>{String(rawVal)}</StatusTag>
    default:
      formatted = String(rawVal)
  }

  if (col.linkToView && onRowView) {
    const linkTarget = typeof col.linkToView === 'string' ? col.linkToView : undefined
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onRowView(record, linkTarget)
        }}
        className="max-w-full truncate text-left font-medium text-[var(--abc-primary)] hover:underline cursor-pointer"
      >
        {formatted}
      </button>
    )
  }

  if (col.copyable) {
    return <CopyableText text={String(rawVal)} displayText={formatted} />
  }

  if (col.ellipsis) {
    return (
      <span title={String(rawVal)} className="block max-w-full truncate">
        {formatted}
      </span>
    )
  }

  return formatted
}

/**
 * 企业级核心数据表格引擎 (TableCore)
 * 支持多列累加粘性左/右固定列、表头右键快捷菜单、拖拽调节列宽、拖拽交换列序、
 * 排序、表头气泡/内联双模筛选、可展开子面板与树形数据、语义化 valueType 渲染及键盘可访问滚动区
 */
