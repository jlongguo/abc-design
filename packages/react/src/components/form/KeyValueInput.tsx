import React, { useMemo, useState } from 'react'
import {
  findDuplicateKeys,
  parseKeyValueText,
  serializeKeyValueEntries,
  type AbcKeyValueEntry,
  type AbcKeyValueFormat,
} from '@abc-design/core'
import type { AbcSize } from '@abc-design/tokens'
import { AlertTriangle, Eye, EyeOff, FileText, List, Plus, Trash2 } from 'lucide-react'
import { useAbcSize } from '../../hooks/useAbcDefaults'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'
import { Button } from '../button/Button'
import { Switch } from './Controls'
import { Input, Textarea } from './Input'

export type { AbcKeyValueEntry, AbcKeyValueFormat }

export interface KeyValueInputProps {
  /** 受控键值对列表 */
  value?: AbcKeyValueEntry[]
  /** 非受控初始键值对列表 */
  defaultValue?: AbcKeyValueEntry[]
  /** 列表变更回调 */
  onChange?: (next: AbcKeyValueEntry[]) => void
  /** 是否在每行左侧展示启用/停用开关（默认 true） */
  allowEnableToggle?: boolean
  /** 是否允许每行切换明文/密文遮罩查看（默认 false） */
  allowSecretMask?: boolean
  /** 是否在右上角提供“结构化行 / 批量文本”编辑器切换（默认 true） */
  allowBulkEdit?: boolean
  /** 批量文本编辑器默认格式（默认 'dotenv'） */
  defaultBulkFormat?: AbcKeyValueFormat
  /** Key 输入框占位符 */
  keyPlaceholder?: string
  /** Value 输入框占位符 */
  valuePlaceholder?: string
  /** 最大允许条目数 */
  maxItems?: number
  /** 是否禁用全部输入与操作 */
  disabled?: boolean
  /** 控件尺寸规格 */
  size?: AbcSize
  className?: string
}

const BULK_FORMATS: Array<{ value: AbcKeyValueFormat; label: string; placeholder: string }> = [
  { value: 'dotenv', label: 'dotenv', placeholder: 'API_KEY=sk-xxxx\nNODE_ENV=production' },
  { value: 'headers', label: 'headers', placeholder: 'Authorization: Bearer token\nX-Env: prod' },
  { value: 'json', label: 'json', placeholder: '{\n  "API_KEY": "sk-xxxx"\n}' },
]

let kvUiSeq = 0
function nextEntryId(): string {
  kvUiSeq += 1
  return `kv_item_${kvUiSeq}`
}

function validateBulkText(raw: string, format: AbcKeyValueFormat): string | null {
  const trimmed = raw.trim()
  if (!trimmed || format !== 'json') return null
  try {
    const parsed = JSON.parse(trimmed)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return 'JSON 批量内容必须是扁平键值对对象，例如 {"KEY": "VALUE"}'
    }
    return null
  } catch {
    return 'JSON 格式解析失败，请检查括号、引号或逗号语法'
  }
}

/**
 * 企业级环境变量与请求头键值对编辑器 (KeyValueInput)
 * 内置重复 Key 实时告警、单行启用开关、密文遮罩切换及 .env / Headers / JSON 双向批量编辑
 */
export const KeyValueInput: React.FC<KeyValueInputProps> = ({
  value,
  defaultValue,
  onChange,
  allowEnableToggle = true,
  allowSecretMask = false,
  allowBulkEdit = true,
  defaultBulkFormat = 'dotenv',
  keyPlaceholder = 'KEY',
  valuePlaceholder = 'VALUE',
  maxItems,
  disabled = false,
  size,
  className,
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const [entries, setEntries] = useControllableState<AbcKeyValueEntry[]>({
    value,
    defaultValue: defaultValue ?? [],
    onChange,
  })

  const [isBulkMode, setIsBulkMode] = useState(false)
  const [bulkFormat, setBulkFormat] = useState<AbcKeyValueFormat>(defaultBulkFormat)
  const [bulkText, setBulkText] = useState('')
  const [bulkDirty, setBulkDirty] = useState(false)
  const [bulkError, setBulkError] = useState<string | null>(null)
  const [revealedMap, setRevealedMap] = useState<Record<string, boolean>>({})

  const duplicateKeys = useMemo(() => findDuplicateKeys(entries), [entries])
  const duplicateSet = useMemo(() => new Set(duplicateKeys), [duplicateKeys])
  const canAdd = !disabled && (maxItems === undefined || entries.length < maxItems)

  const updateEntry = (index: number, patch: Partial<AbcKeyValueEntry>) => {
    if (disabled) return
    setEntries(entries.map((item, idx) => (idx === index ? { ...item, ...patch } : item)))
  }

  const removeEntry = (index: number) => {
    if (disabled) return
    setEntries(entries.filter((_, idx) => idx !== index))
  }

  const addEntry = () => {
    if (!canAdd) return
    const newId = nextEntryId()
    if (allowSecretMask) {
      setRevealedMap((prev) => ({ ...prev, [newId]: true }))
    }
    setEntries([
      ...entries,
      { id: newId, key: '', value: '', enabled: true, ...(allowSecretMask ? { secret: false } : {}) },
    ])
  }

  const enterBulkMode = () => {
    setBulkText(serializeKeyValueEntries(entries, bulkFormat))
    setBulkDirty(false)
    setBulkError(null)
    setIsBulkMode(true)
  }

  const switchBulkFormat = (nextFormat: AbcKeyValueFormat) => {
    if (nextFormat === bulkFormat) return
    if (bulkDirty) {
      const err = validateBulkText(bulkText, bulkFormat)
      if (err) {
        setBulkError(err)
        return
      }
      setBulkText(serializeKeyValueEntries(parseKeyValueText(bulkText, bulkFormat), nextFormat))
    } else {
      setBulkText(serializeKeyValueEntries(entries, nextFormat))
    }
    setBulkFormat(nextFormat)
    setBulkError(null)
  }

  const applyBulkChanges = () => {
    if (disabled) {
      setIsBulkMode(false)
      return
    }
    const err = validateBulkText(bulkText, bulkFormat)
    if (err) {
      setBulkError(err)
      return
    }

    const prevMetaByKey = new Map<string, Pick<AbcKeyValueEntry, 'secret' | 'description'>>()
    for (const item of entries) {
      const k = item.key.trim()
      if (k && !prevMetaByKey.has(k)) {
        prevMetaByKey.set(k, { secret: item.secret, description: item.description })
      }
    }

    const parsed = parseKeyValueText(bulkText, bulkFormat).map((item) => {
      const prevMeta = prevMetaByKey.get(item.key.trim())
      return prevMeta
        ? {
            ...item,
            ...(prevMeta.secret !== undefined ? { secret: prevMeta.secret } : {}),
            ...(prevMeta.description !== undefined ? { description: prevMeta.description } : {}),
          }
        : item
    })

    setEntries(maxItems !== undefined ? parsed.slice(0, maxItems) : parsed)
    setIsBulkMode(false)
    setBulkDirty(false)
    setBulkError(null)
  }

  const cancelBulkChanges = () => {
    setIsBulkMode(false)
    setBulkDirty(false)
    setBulkError(null)
  }

  const activeFormatMeta = BULK_FORMATS.find((f) => f.value === bulkFormat) ?? BULK_FORMATS[0]

  return (
    <div
      data-slot="key-value-input"
      className={cn(
        'w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)]',
        className
      )}
    >
      <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs text-[var(--abc-fg-muted)]">
          <span className="font-mono tabular-nums">
            {maxItems !== undefined ? `${entries.length}/${maxItems} 项` : `共 ${entries.length} 项`}
          </span>
          {duplicateKeys.length > 0 && !isBulkMode && (
            <span className="inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-danger-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-danger)]">
              <AlertTriangle className="h-3 w-3" />
              {duplicateKeys.length} 个重复 Key
            </span>
          )}
        </div>

        {allowBulkEdit && (
          <div
            role="group"
            aria-label="编辑模式切换"
            className="inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-0.5"
          >
            <button
              type="button"
              onClick={() => {
                if (!isBulkMode) return
                if (bulkDirty) applyBulkChanges()
                else cancelBulkChanges()
              }}
              className={cn(
                'inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] px-2 py-1 text-xs font-medium transition-colors cursor-pointer',
                !isBulkMode
                  ? 'bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs'
                  : 'text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]'
              )}
            >
              <List className="h-3.5 w-3.5" />
              <span>结构化行</span>
            </button>
            <button
              type="button"
              onClick={() => { if (!isBulkMode) enterBulkMode() }}
              className={cn(
                'inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] px-2 py-1 text-xs font-medium transition-colors cursor-pointer',
                isBulkMode
                  ? 'bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs'
                  : 'text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]'
              )}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>批量文本</span>
            </button>
          </div>
        )}
      </div>

      {isBulkMode ? (
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-0.5">
              {BULK_FORMATS.map((fmt) => (
                <button
                  key={fmt.value}
                  type="button"
                  disabled={disabled}
                  onClick={() => switchBulkFormat(fmt.value)}
                  className={cn(
                    'rounded-[var(--abc-radius-xs)] px-2 py-0.5 font-mono text-[11px] font-medium transition-colors cursor-pointer disabled:opacity-50',
                    bulkFormat === fmt.value
                      ? 'bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs'
                      : 'text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]'
                  )}
                >
                  {fmt.label}
                </button>
              ))}
            </div>
            <span className="text-[11px] text-[var(--abc-fg-muted)]">
              支持 .env / HTTP Headers / JSON 对象格式导入
            </span>
          </div>

          <Textarea
            mono
            rows={6}
            size={resolvedSize}
            disabled={disabled}
            value={bulkText}
            placeholder={activeFormatMeta.placeholder}
            aria-label="批量文本编辑器"
            invalid={Boolean(bulkError)}
            error={bulkError ?? undefined}
            onChange={(e) => {
              setBulkText(e.target.value)
              setBulkDirty(true)
              if (bulkError) setBulkError(null)
            }}
          />

          <div className="flex items-center justify-end gap-2">
            <Button type="button" variant="secondary" size="xs" onClick={cancelBulkChanges}>
              取消
            </Button>
            <Button type="button" variant="primary" size="xs" disabled={disabled} onClick={applyBulkChanges}>
              应用
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {duplicateKeys.length > 0 && (
            <div
              role="alert"
              className="flex items-center gap-2 rounded-[var(--abc-radius-sm)] border border-[var(--abc-danger)]/35 bg-[var(--abc-danger-soft)] px-2.5 py-1.5 text-xs text-[var(--abc-danger)]"
            >
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              <span>存在重复 Key：{duplicateKeys.join('、')}</span>
            </div>
          )}

          {entries.length === 0 ? (
            <div className="rounded-[var(--abc-radius-sm)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 py-4 text-center text-xs text-[var(--abc-fg-muted)]">
              暂无配置项，可点击下方按钮添加或切换至批量文本导入
            </div>
          ) : (
            <div className="space-y-1.5">
              {entries.map((entry, idx) => {
                const rowId = entry.id || `kv_row_${idx}`
                const isDup = entry.key.trim() !== '' && duplicateSet.has(entry.key.trim())
                const isEnabled = entry.enabled !== false
                const isRevealed = revealedMap[rowId] ?? (entry.secret === false)
                const isMasked = allowSecretMask && !isRevealed

                const secretToggleBtn = allowSecretMask ? (
                  <button
                    type="button"
                    disabled={disabled}
                    aria-label={isRevealed ? `隐藏第 ${idx + 1} 项明文` : `显示第 ${idx + 1} 项明文`}
                    aria-pressed={isRevealed}
                    title={isRevealed ? '隐藏明文' : '显示明文'}
                    onClick={() => setRevealedMap((prev) => ({ ...prev, [rowId]: !isRevealed }))}
                    className="inline-flex items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer disabled:opacity-50"
                  >
                    {isRevealed ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                  </button>
                ) : undefined

                return (
                  <div
                    key={rowId}
                    data-slot="key-value-row"
                    className={cn('flex items-center gap-2 transition-opacity', !isEnabled && 'opacity-60')}
                  >
                    {allowEnableToggle && (
                      <Switch
                        size="xs"
                        checked={isEnabled}
                        disabled={disabled}
                        aria-label={`启用第 ${idx + 1} 项`}
                        onChange={(checked) => updateEntry(idx, { enabled: checked })}
                      />
                    )}
                    <div className="w-[38%] min-w-[110px]">
                      <Input
                        size={resolvedSize}
                        disabled={disabled}
                        value={entry.key}
                        invalid={isDup}
                        placeholder={keyPlaceholder}
                        aria-label={`键 ${idx + 1}`}
                        className="font-mono"
                        onChange={(e) => updateEntry(idx, { key: e.target.value })}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Input
                        size={resolvedSize}
                        type={isMasked ? 'password' : 'text'}
                        passwordToggle={false}
                        disabled={disabled}
                        value={entry.value}
                        placeholder={valuePlaceholder}
                        aria-label={`值 ${idx + 1}`}
                        className="font-mono"
                        suffix={secretToggleBtn}
                        onChange={(e) => updateEntry(idx, { value: e.target.value })}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="xs"
                      iconOnly
                      disabled={disabled}
                      aria-label={`删除第 ${idx + 1} 项`}
                      title="删除该行"
                      onClick={() => removeEntry(idx)}
                      className="hover:text-[var(--abc-danger)]"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                )
              })}
            </div>
          )}

          <div className="pt-1">
            <Button
              type="button"
              variant="secondary"
              size="xs"
              disabled={!canAdd}
              icon={<Plus className="h-3.5 w-3.5" />}
              onClick={addEntry}
            >
              添加键值对
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default KeyValueInput
