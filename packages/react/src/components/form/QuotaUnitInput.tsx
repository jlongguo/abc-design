import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

export type ByteUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB'
export type DurationUnit = 's' | 'm' | 'h' | 'd'

export const BYTE_UNITS: readonly ByteUnit[] = ['B', 'KB', 'MB', 'GB', 'TB']
export const DURATION_UNITS: readonly DurationUnit[] = ['s', 'm', 'h', 'd']

export const BYTE_UNIT_FACTORS: Record<ByteUnit, number> = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4,
}

export const DURATION_UNIT_FACTORS: Record<DurationUnit, number> = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400,
}

const BYTE_CHECK_ORDER: readonly ByteUnit[] = ['TB', 'GB', 'MB', 'KB', 'B']
const DURATION_CHECK_ORDER: readonly DurationUnit[] = ['h', 'm', 'd', 's']

function formatDecimalTrimmed(value: number, maxDecimals = 2): string {
  if (!Number.isFinite(value)) return '0'
  return value.toFixed(maxDecimals).replace(/\.?0+$/, '')
}

function getDurationUnitLabel(unit: DurationUnit, locale: 'en' | 'zh'): string {
  if (locale === 'zh') {
    switch (unit) {
      case 's':
        return '秒'
      case 'm':
        return '分钟'
      case 'h':
        return '小时'
      case 'd':
        return '天'
    }
  }
  switch (unit) {
    case 's':
      return 'Sec'
    case 'm':
      return 'Min'
    case 'h':
      return 'Hour'
    case 'd':
      return 'Day'
  }
}

function pickBestUnitByOrder<U extends string>(
  rawValue: number,
  zeroUnit: U,
  fallbackUnit: U,
  allowedUnits: readonly U[],
  checkOrder: readonly U[],
  factors: Record<U, number>,
  fallbackDecimals: number,
): { unit: U; amount: string } {
  const safe = Number.isFinite(rawValue) && rawValue >= 0 ? Math.round(rawValue) : 0
  if (safe === 0) {
    const unit = allowedUnits.includes(zeroUnit) ? zeroUnit : allowedUnits[allowedUnits.length - 1]!
    return { unit, amount: '0' }
  }
  for (const candidate of checkOrder) {
    if (!allowedUnits.includes(candidate)) continue
    const factor = factors[candidate]
    if (safe >= factor && safe % factor === 0) {
      return { unit: candidate, amount: String(safe / factor) }
    }
  }
  const resolvedFallback = allowedUnits.includes(fallbackUnit) ? fallbackUnit : allowedUnits[0]!
  return {
    unit: resolvedFallback,
    amount: formatDecimalTrimmed(safe / factors[resolvedFallback], fallbackDecimals),
  }
}

export function pickBestByteUnit(
  bytes: number,
  zeroUnit: ByteUnit = 'GB',
  allowedUnits: readonly ByteUnit[] = BYTE_UNITS,
): { unit: ByteUnit; amount: string } {
  const safeUnits = allowedUnits.length > 0 ? allowedUnits : BYTE_UNITS
  return pickBestUnitByOrder(bytes, zeroUnit, 'B', safeUnits, BYTE_CHECK_ORDER, BYTE_UNIT_FACTORS, 4)
}

export function pickBestDurationUnit(
  seconds: number,
  zeroUnit: DurationUnit = 'h',
  allowedUnits: readonly DurationUnit[] = DURATION_UNITS,
): { unit: DurationUnit; amount: string } {
  const safeUnits = allowedUnits.length > 0 ? allowedUnits : DURATION_UNITS
  return pickBestUnitByOrder(
    seconds,
    zeroUnit,
    's',
    safeUnits,
    DURATION_CHECK_ORDER,
    DURATION_UNIT_FACTORS,
    2,
  )
}

export function formatQuotaBytes(
  bytes: number,
  _locale: 'en' | 'zh' = 'en',
  zeroLabel?: string,
): string {
  const safe = Number.isFinite(bytes) && bytes >= 0 ? Math.round(bytes) : 0
  if (safe === 0 && zeroLabel) return zeroLabel
  const { unit, amount } = pickBestByteUnit(safe)
  return `${amount} ${unit}`
}

export function formatQuotaDuration(
  seconds: number,
  locale: 'en' | 'zh' = 'en',
  zeroLabel?: string,
): string {
  const safe = Number.isFinite(seconds) && seconds >= 0 ? Math.round(seconds) : 0
  if (safe === 0 && zeroLabel) return zeroLabel
  const { unit, amount } = pickBestDurationUnit(safe)
  return `${amount} ${getDurationUnitLabel(unit, locale)}`
}

export interface QuotaUnitInputBaseProps {
  id?: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  size?: 'default' | 'sm'
  disabled?: boolean
  hideHint?: boolean
  className?: string
  'aria-label'?: string
  'aria-describedby'?: string
  placeholder?: string
}

function clampRawInteger(raw: number, min: number, max?: number): number {
  let clamped = Math.max(min, Math.round(raw))
  if (typeof max === 'number' && Number.isFinite(max)) {
    clamped = Math.min(max, clamped)
  }
  return clamped
}

interface QuotaUnitControlProps<U extends string> extends QuotaUnitInputBaseProps {
  fallbackIdSuffix: string
  factors: Record<U, number>
  allowedUnits: readonly U[]
  resolvedUnitLabel: string
  pickBest: (raw: number) => { unit: U; amount: string }
  formatUnitLabel: (unit: U) => string
  buildHintText: (safeValue: number, unit: U) => string
}

function QuotaUnitControl<U extends string>({
  id,
  fallbackIdSuffix,
  value,
  onChange,
  min = 0,
  max,
  size = 'default',
  disabled = false,
  hideHint = false,
  className,
  resolvedUnitLabel,
  factors,
  allowedUnits,
  pickBest,
  formatUnitLabel,
  buildHintText,
  'aria-label': ariaLabel,
  'aria-describedby': externalDescribedBy,
  placeholder,
}: QuotaUnitControlProps<U>) {
  const autoId = React.useId()
  const inputId = id ?? `${autoId}-${fallbackIdSuffix}`
  const hintId = `${inputId}-hint`
  const safeValue = Number.isFinite(value) && value >= 0 ? Math.round(value) : 0

  const initial = React.useMemo(
    () => pickBest(safeValue),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  const [unit, setUnit] = React.useState<U>(initial.unit)
  const [draft, setDraft] = React.useState<string>(initial.amount)
  const lastEmittedRef = React.useRef<number>(safeValue)

  React.useEffect(() => {
    if (safeValue === lastEmittedRef.current) return
    lastEmittedRef.current = safeValue
    const best = pickBest(safeValue)
    setUnit(best.unit)
    setDraft(best.amount)
  }, [safeValue, pickBest])

  const factor = factors[unit]

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    // 允许空值、合法正浮点数/整数输入
    if (text !== '' && !/^\d*\.?\d*$/.test(text)) return
    setDraft(text)
    if (text.trim() === '') return
    const parsed = Number(text)
    if (!Number.isFinite(parsed) || parsed < 0) return
    const nextRaw = clampRawInteger(parsed * factor, min, max)
    lastEmittedRef.current = nextRaw
    onChange(nextRaw)
  }

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextUnit = event.target.value as U
    if (!allowedUnits.includes(nextUnit)) return
    setUnit(nextUnit)
    const nextFactor = factors[nextUnit]
    setDraft(safeValue === 0 ? '0' : formatDecimalTrimmed(safeValue / nextFactor, 2))
  }

  const handleBlur = () => {
    if (draft.trim() === '' || !Number.isFinite(Number(draft)) || Number(draft) < 0) {
      setDraft(safeValue === 0 ? '0' : formatDecimalTrimmed(safeValue / factor, 2))
    }
  }

  const describedBy =
    [externalDescribedBy, !hideHint ? hintId : undefined].filter(Boolean).join(' ') || undefined

  return (
    <div className={cn('space-y-1', className)}>
      <div
        className={cn(
          'flex items-stretch rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-surface,#ffffff)] shadow-2xs transition-colors focus-within:border-[var(--abc-primary,#2563eb)] focus-within:ring-1 focus-within:ring-[var(--abc-primary,#2563eb)] overflow-hidden w-full',
          disabled && 'opacity-50 cursor-not-allowed',
          size === 'sm' ? 'h-8' : 'h-9',
        )}
      >
        {/* 输入框：采用 number + step + css 隐藏微调按钮，既兼容 jest-dom 的 toHaveValue(number) 断言，又杜绝视觉错位 */}
        <input
          id={inputId}
          type="number"
          step={factor === 1 ? 1 : 'any'}
          min={0}
          autoComplete="off"
          disabled={disabled}
          value={draft}
          aria-label={ariaLabel}
          aria-describedby={describedBy}
          placeholder={placeholder}
          onChange={handleTextChange}
          onBlur={handleBlur}
          style={{
            appearance: 'textfield',
            MozAppearance: 'textfield',
            WebkitAppearance: 'none',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            background: 'transparent',
          }}
          className="min-w-0 flex-1 border-0 bg-transparent px-3 text-xs text-[var(--abc-fg,#0f172a)] font-mono tabular-nums outline-none focus:outline-none focus:ring-0 placeholder:text-[var(--abc-fg-muted,#94a3b8)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {/* 分割线：高度贴合 */}
        <div className="w-[1px] bg-[var(--abc-border,#e2e8f0)] shrink-0 self-stretch my-1.5" />
        {/* 单位选择下拉框：右侧内嵌，固定宽度，文字精准居中，配独立下拉箭头 */}
        <div className="relative flex items-center shrink-0">
          <select
            aria-label={resolvedUnitLabel}
            disabled={disabled}
            value={unit}
            onChange={handleUnitChange}
            style={{
              appearance: 'none',
              MozAppearance: 'none',
              WebkitAppearance: 'none',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              background: 'transparent',
            }}
            className="w-20 min-w-[76px] shrink-0 border-0 bg-transparent pl-2.5 pr-6 text-center text-xs font-mono font-semibold text-[var(--abc-fg-secondary,#334155)] outline-none focus:outline-none cursor-pointer hover:text-[var(--abc-fg,#0f172a)] [appearance:none] [&::-ms-expand]:hidden"
          >
            {allowedUnits.map((item) => (
              <option key={item} value={item} className="bg-[var(--abc-bg-surface,#ffffff)] text-[var(--abc-fg,#0f172a)]">
                {formatUnitLabel(item)}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 h-3 w-3 text-[var(--abc-fg-muted,#94a3b8)] opacity-70" />
        </div>
      </div>
      {!hideHint && (
        <div id={hintId} className="pt-0.5">
          <span className="inline-block rounded-[var(--abc-radius-xs,4px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted,#64748b)]">
            {buildHintText(safeValue, unit)}
          </span>
        </div>
      )}
    </div>
  )
}

export interface ByteQuotaInputProps extends QuotaUnitInputBaseProps {
  locale?: 'en' | 'zh'
  zeroMeansUnlimited?: boolean
  defaultZeroUnit?: ByteUnit
  allowedUnits?: readonly ByteUnit[]
  unitAriaLabel?: string
}

export function ByteQuotaInput({
  locale = 'en',
  zeroMeansUnlimited = true,
  defaultZeroUnit = 'GB',
  allowedUnits = BYTE_UNITS,
  unitAriaLabel,
  ...rest
}: ByteQuotaInputProps) {
  const safeUnits = allowedUnits.length > 0 ? allowedUnits : BYTE_UNITS
  const pickBest = React.useCallback(
    (raw: number) => pickBestByteUnit(raw, defaultZeroUnit, safeUnits),
    [defaultZeroUnit, safeUnits],
  )
  const formatUnitLabel = React.useCallback((u: ByteUnit) => u, [])
  const buildHintText = React.useCallback(
    (safeValue: number) => {
      if (safeValue === 0 && zeroMeansUnlimited) {
        return locale === 'zh' ? '= 0 (无上限)' : '= 0 (Unlimited)'
      }
      return `= ${safeValue.toLocaleString()} Bytes`
    },
    [locale, zeroMeansUnlimited],
  )

  return (
    <QuotaUnitControl<ByteUnit>
      {...rest}
      fallbackIdSuffix="bytes"
      factors={BYTE_UNIT_FACTORS}
      allowedUnits={safeUnits}
      resolvedUnitLabel={unitAriaLabel ?? (locale === 'zh' ? '字节单位' : 'Byte unit')}
      pickBest={pickBest}
      formatUnitLabel={formatUnitLabel}
      buildHintText={buildHintText}
    />
  )
}

export interface DurationQuotaInputProps extends QuotaUnitInputBaseProps {
  locale?: 'en' | 'zh'
  zeroMeansUnlimited?: boolean
  defaultZeroUnit?: DurationUnit
  allowedUnits?: readonly DurationUnit[]
  unitAriaLabel?: string
}

export function DurationQuotaInput({
  locale = 'en',
  zeroMeansUnlimited = true,
  defaultZeroUnit = 'h',
  allowedUnits = DURATION_UNITS,
  unitAriaLabel,
  ...rest
}: DurationQuotaInputProps) {
  const safeUnits = allowedUnits.length > 0 ? allowedUnits : DURATION_UNITS
  const pickBest = React.useCallback(
    (raw: number) => pickBestDurationUnit(raw, defaultZeroUnit, safeUnits),
    [defaultZeroUnit, safeUnits],
  )
  const formatUnitLabel = React.useCallback(
    (u: DurationUnit) => getDurationUnitLabel(u, locale),
    [locale],
  )
  const buildHintText = React.useCallback(
    (safeValue: number, currentUnit: DurationUnit) => {
      if (safeValue === 0 && zeroMeansUnlimited) {
        return locale === 'zh' ? '= 0 秒 (无上限)' : '= 0s (Unlimited)'
      }
      if (currentUnit === 's') {
        const hours = formatDecimalTrimmed(safeValue / 3600, 2)
        return locale === 'zh'
          ? `≈ ${hours} 小时 (${safeValue.toLocaleString()} 秒)`
          : `≈ ${hours} hr (${safeValue.toLocaleString()}s)`
      }
      return `= ${safeValue.toLocaleString()} ${locale === 'zh' ? '秒' : 'Seconds'}`
    },
    [locale, zeroMeansUnlimited],
  )

  return (
    <QuotaUnitControl<DurationUnit>
      {...rest}
      fallbackIdSuffix="duration"
      factors={DURATION_UNIT_FACTORS}
      allowedUnits={safeUnits}
      resolvedUnitLabel={unitAriaLabel ?? (locale === 'zh' ? '时长单位' : 'Duration unit')}
      pickBest={pickBest}
      formatUnitLabel={formatUnitLabel}
      buildHintText={buildHintText}
    />
  )
}
