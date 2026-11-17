import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUp, Copy, Plus, Trash2 } from 'lucide-react'
import { Button } from '../components/button/Button'
import { useControllableState } from '../hooks/useControllableState'
import { cn } from '../utils/cn'
import { useProFormContext } from './ProFormDependency'
import type { ProFormInstance } from './pro-crud-form/types'

export interface ProFormListItemHelpers<T = Record<string, any>> {
  /** 局部合并或函数式更新当前行数据 */
  update: (patchOrNext: Partial<T> | ((prev: T) => T)) => void
  /** 删除当前行（受 minItems 约束） */
  remove: () => void
  /** 复制当前行并插入到下一位置（受 maxItems 约束） */
  duplicate: () => void
  /** 上移当前行 */
  moveUp: () => void
  /** 下移当前行 */
  moveDown: () => void
  /** 行级校验错误文本 */
  error?: string
  canRemove: boolean
  canAdd: boolean
  canMoveUp: boolean
  canMoveDown: boolean
}

export interface ProFormListProps<T = Record<string, any>> {
  /** 绑定 ProFormInstance 的字段路径（与 form 或 ProFormProvider 配合使用） */
  name?: string
  /** 显式传入的表单实例（未传时自动读取 useProFormContext()） */
  form?: ProFormInstance<any>
  /** 列表顶部标题 */
  label?: React.ReactNode
  /** 受控列表值 */
  value?: T[]
  /** 非受控默认列表值 */
  defaultValue?: T[]
  /** 列表变更回调 */
  onChange?: (next: T[]) => void
  /** 新增空白行默认对象或工厂函数 */
  initialItem?: T | (() => T)
  /** 最少保留条目数（默认 0） */
  minItems?: number
  /** 最多允许条目数 */
  maxItems?: number
  /** 渲染形态：'card' 独立卡片行 | 'inline' 紧凑行内布局（默认 'card'） */
  variant?: 'inline' | 'card'
  /** 是否允许复制单行插入下一位（默认 true） */
  copyable?: boolean
  /** 是否允许上移/下移重排（默认 false） */
  sortable?: boolean
  /** 新增按钮文案（默认 '添加一行'） */
  addLabel?: React.ReactNode
  /** 单行校验函数 */
  rowValidator?: (item: T, index: number, all: T[]) => string | undefined
  /** 列表底部汇总区域自定义渲染 */
  summaryRender?: (items: T[]) => React.ReactNode
  /** 是否禁用全部操作 */
  disabled?: boolean
  className?: string
  /** 行内容渲染函数 */
  children: (item: T, index: number, helpers: ProFormListItemHelpers<T>) => React.ReactNode
}

let listKeySeq = 0
function nextRowKey(): string {
  listKeySeq += 1
  return `pro_list_${listKeySeq}`
}

function cloneListItem<T>(item: T): T {
  if (item === null || typeof item !== 'object') return item
  if (Array.isArray(item)) return [...item] as unknown as T
  if (typeof structuredClone === 'function') {
    try {
      return structuredClone(item)
    } catch {
      // 含函数或 ReactNode 时退回浅拷贝
    }
  }
  return { ...item }
}

function readFormPath(obj: Record<string, any> | undefined | null, name: string): any {
  if (!obj || typeof obj !== 'object') return undefined
  if (Object.prototype.hasOwnProperty.call(obj, name)) return obj[name]
  if (name.includes('.')) {
    return name.split('.').reduce<any>(
      (curr, part) => (curr != null && typeof curr === 'object' ? curr[part] : undefined),
      obj
    )
  }
  return obj[name]
}

/**
 * 动态结构化表单列表 (ProFormList)
 * 同时支持独立受控/非受控模式与 ProFormInstance 双向绑定，提供增删改、行复制、排序与行级校验
 */
export function ProFormList<T = Record<string, any>>({
  name,
  form: formProp,
  label,
  value,
  defaultValue,
  onChange,
  initialItem,
  minItems = 0,
  maxItems,
  variant = 'card',
  copyable = true,
  sortable = false,
  addLabel = '添加一行',
  rowValidator,
  summaryRender,
  disabled = false,
  className,
  children,
}: ProFormListProps<T>): React.ReactElement {
  const contextForm = useProFormContext()
  const resolvedForm = formProp ?? contextForm
  const isFormBound = value === undefined && Boolean(resolvedForm && name)

  const [controllableItems, setControllableItems] = useControllableState<T[]>({
    value,
    defaultValue: defaultValue ?? [],
    onChange,
  })

  const [, bumpFormSync] = useState(0)

  const formBoundValue = isFormBound ? resolvedForm!.getValues(name!) : undefined
  const items: T[] = isFormBound
    ? Array.isArray(formBoundValue)
      ? formBoundValue
      : defaultValue ?? []
    : controllableItems

  const itemsRef = useRef<T[]>(items)
  itemsRef.current = items

  const formRef = useRef(resolvedForm)
  formRef.current = resolvedForm
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  // 订阅表单外部变更，确保直接调用 form.setValue(name, ...) 时列表视图保持同步
  useEffect(() => {
    if (!isFormBound || !resolvedForm?.watch || !name) return
    let prevRaw = resolvedForm.getValues(name)
    const sub = resolvedForm.watch((values) => {
      const nextRaw = readFormPath(values, name)
      if (!Object.is(prevRaw, nextRaw)) {
        prevRaw = nextRaw
        bumpFormSync((v) => v + 1)
      }
    })
    return () => {
      sub?.unsubscribe?.()
    }
  }, [isFormBound, resolvedForm?.watch, name])

  // 维护与数组索引分离的稳定 React key，避免增删/排序引起子控件非受控状态串位
  const rowKeysRef = useRef<string[]>([])
  while (rowKeysRef.current.length < items.length) {
    rowKeysRef.current.push(nextRowKey())
  }
  if (rowKeysRef.current.length > items.length) {
    rowKeysRef.current = rowKeysRef.current.slice(0, items.length)
  }

  const commitItems = useCallback(
    (next: T[]) => {
      itemsRef.current = next
      if (isFormBound && formRef.current && name) {
        formRef.current.setValue(name, next)
        onChangeRef.current?.(next)
      } else {
        setControllableItems(next)
      }
    },
    [isFormBound, name, setControllableItems]
  )

  const canAdd = !disabled && (maxItems === undefined || items.length < maxItems)
  const canRemoveGlobal = !disabled && items.length > minItems

  const createInitialItem = (): T => {
    if (typeof initialItem === 'function') {
      return (initialItem as () => T)()
    }
    if (initialItem !== undefined) {
      return cloneListItem(initialItem)
    }
    return {} as T
  }

  const handleAdd = () => {
    if (!canAdd) return
    const nextItem = createInitialItem()
    rowKeysRef.current = [...rowKeysRef.current, nextRowKey()]
    commitItems([...itemsRef.current, nextItem])
  }

  const buildHelpers = (index: number, error?: string): ProFormListItemHelpers<T> => {
    const canMoveUp = !disabled && index > 0
    const canMoveDown = !disabled && index < itemsRef.current.length - 1

    return {
      update: (patchOrNext) => {
        if (disabled) return
        const current = itemsRef.current
        const prevItem = current[index]
        if (prevItem === undefined && index >= current.length) return
        let nextItem: T
        if (typeof patchOrNext === 'function') {
          nextItem = (patchOrNext as (prev: T) => T)(prevItem)
        } else if (
          prevItem !== null &&
          typeof prevItem === 'object' &&
          !Array.isArray(prevItem) &&
          patchOrNext !== null &&
          typeof patchOrNext === 'object'
        ) {
          nextItem = { ...prevItem, ...patchOrNext }
        } else {
          nextItem = patchOrNext as T
        }
        const next = current.map((it, i) => (i === index ? nextItem : it))
        commitItems(next)
      },
      remove: () => {
        if (disabled || itemsRef.current.length <= minItems) return
        const nextKeys = [...rowKeysRef.current]
        nextKeys.splice(index, 1)
        rowKeysRef.current = nextKeys
        commitItems(itemsRef.current.filter((_, i) => i !== index))
      },
      duplicate: () => {
        const current = itemsRef.current
        if (disabled || (maxItems !== undefined && current.length >= maxItems)) return
        const source = current[index]
        const cloned = cloneListItem(source)
        const nextKeys = [...rowKeysRef.current]
        nextKeys.splice(index + 1, 0, nextRowKey())
        rowKeysRef.current = nextKeys
        const next = [...current.slice(0, index + 1), cloned, ...current.slice(index + 1)]
        commitItems(next)
      },
      moveUp: () => {
        if (disabled || index <= 0) return
        const current = [...itemsRef.current]
        const nextKeys = [...rowKeysRef.current]
        ;[current[index - 1], current[index]] = [current[index], current[index - 1]]
        ;[nextKeys[index - 1], nextKeys[index]] = [nextKeys[index], nextKeys[index - 1]]
        rowKeysRef.current = nextKeys
        commitItems(current)
      },
      moveDown: () => {
        const current = [...itemsRef.current]
        if (disabled || index >= current.length - 1) return
        const nextKeys = [...rowKeysRef.current]
        ;[current[index], current[index + 1]] = [current[index + 1], current[index]]
        ;[nextKeys[index], nextKeys[index + 1]] = [nextKeys[index + 1], nextKeys[index]]
        rowKeysRef.current = nextKeys
        commitItems(current)
      },
      error,
      canRemove: canRemoveGlobal,
      canAdd,
      canMoveUp,
      canMoveDown,
    }
  }

  return (
    <div data-slot="pro-form-list" className={cn('w-full space-y-2.5', className)}>
      {(label || maxItems !== undefined) && (
        <div className="flex items-center justify-between gap-2">
          {label ? (
            <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">{label}</div>
          ) : (
            <span />
          )}
          <span className="font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums">
            {maxItems !== undefined ? `${items.length} / ${maxItems}` : `${items.length} 项`}
          </span>
        </div>
      )}

      {items.length === 0 ? (
        <div className="rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-4 text-center text-xs text-[var(--abc-fg-muted)]">
          暂无条目，点击下方按钮添加
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item, index) => {
            const error = rowValidator?.(item, index, items)
            const helpers = buildHelpers(index, error)
            const rowKey = rowKeysRef.current[index] ?? String(index)

            const actionButtons = (
              <div className="flex shrink-0 items-center gap-1">
                {sortable && (
                  <>
                    <Button
                      type="button"
                      variant="ghost"
                      size="xs"
                      iconOnly
                      disabled={!helpers.canMoveUp}
                      aria-label={`上移第 ${index + 1} 项`}
                      title="上移"
                      onClick={helpers.moveUp}
                    >
                      <ArrowUp className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="xs"
                      iconOnly
                      disabled={!helpers.canMoveDown}
                      aria-label={`下移第 ${index + 1} 项`}
                      title="下移"
                      onClick={helpers.moveDown}
                    >
                      <ArrowDown className="h-3.5 w-3.5" />
                    </Button>
                  </>
                )}
                {copyable && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="xs"
                    iconOnly
                    disabled={!helpers.canAdd}
                    aria-label={`复制第 ${index + 1} 项`}
                    title="复制当前行"
                    onClick={helpers.duplicate}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                )}
                <Button
                  type="button"
                  variant="ghost"
                  size="xs"
                  iconOnly
                  disabled={!helpers.canRemove}
                  aria-label={`删除第 ${index + 1} 项`}
                  title="删除"
                  onClick={helpers.remove}
                  className="hover:text-[var(--abc-danger)]"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            )

            if (variant === 'inline') {
              return (
                <div
                  key={rowKey}
                  data-slot="pro-form-list-item"
                  className={cn(
                    'rounded-[var(--abc-radius-md)] border bg-[var(--abc-bg-surface)] px-3 py-2 transition-colors',
                    error ? 'border-[var(--abc-danger)]' : 'border-[var(--abc-border)]'
                  )}
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums">
                      #{index + 1}
                    </span>
                    <div className="min-w-0 flex-1">{children(item, index, helpers)}</div>
                    {actionButtons}
                  </div>
                  {error && (
                    <p role="alert" className="mt-1 text-[11px] font-medium text-[var(--abc-danger)]">
                      {error}
                    </p>
                  )}
                </div>
              )
            }

            return (
              <div
                key={rowKey}
                data-slot="pro-form-list-item"
                className={cn(
                  'rounded-[var(--abc-radius-md)] border bg-[var(--abc-bg-surface)] p-3 shadow-[var(--abc-shadow-card)] transition-colors',
                  error ? 'border-[var(--abc-danger)]' : 'border-[var(--abc-border)]'
                )}
              >
                <div className="mb-2 flex items-center justify-between gap-2 border-b border-[var(--abc-border)] pb-2">
                  <span className="inline-flex items-center rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[11px] font-medium text-[var(--abc-fg-secondary)] tabular-nums">
                    #{index + 1}
                  </span>
                  {actionButtons}
                </div>
                <div className="min-w-0">{children(item, index, helpers)}</div>
                {error && (
                  <p role="alert" className="mt-2 text-[11px] font-medium text-[var(--abc-danger)]">
                    {error}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          disabled={!canAdd}
          icon={<Plus className="h-3.5 w-3.5" />}
          onClick={handleAdd}
        >
          {addLabel}
        </Button>
      </div>

      {summaryRender && (
        <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2 text-xs text-[var(--abc-fg-secondary)]">
          {summaryRender(items)}
        </div>
      )}
    </div>
  )
}

export default ProFormList
