import { matchKeywordWithPinyin } from './pinyin.js'

export type AbcSortOrder = 'asc' | 'desc' | null

export interface AbcClientFilterOptions<T extends Record<string, any>> {
  rows: T[]
  searchableKeys?: string[]
  quickKeyword?: string
  fieldFilters?: Record<string, any>
  sortField?: string
  sortOrder?: AbcSortOrder
}

function isRangeFilterObject(val: unknown): val is { start?: string; end?: string } {
  return (
    typeof val === 'object' &&
    val !== null &&
    !Array.isArray(val) &&
    ('start' in val || 'end' in val)
  )
}

/**
 * 纯函数客户端表格过滤与排序管道
 * 支持全局关键字（含拼音首字母）、单值/多选数组/日期区间组合筛选与中英文自然排序
 */
export function filterAndSortClientRows<T extends Record<string, any>>({
  rows,
  searchableKeys,
  quickKeyword = '',
  fieldFilters = {},
  sortField,
  sortOrder,
}: AbcClientFilterOptions<T>): T[] {
  let list = [...rows]

  const trimmedKw = quickKeyword.trim()
  if (trimmedKw) {
    list = list.filter((row) => {
      const keys = searchableKeys && searchableKeys.length > 0 ? searchableKeys : Object.keys(row)
      return keys.some((k) => {
        const val = row[k]
        return val !== undefined && val !== null && matchKeywordWithPinyin(String(val), trimmedKw)
      })
    })
  }

  for (const [k, filterVal] of Object.entries(fieldFilters)) {
    if (filterVal === undefined || filterVal === null) continue

    if (Array.isArray(filterVal)) {
      if (filterVal.length === 0) continue
      list = list.filter((row) => {
        const cellVal = row[k]
        if (cellVal === undefined || cellVal === null) return false
        return filterVal.some(
          (v) => String(cellVal) === String(v) || matchKeywordWithPinyin(String(cellVal), String(v))
        )
      })
      continue
    }

    if (isRangeFilterObject(filterVal)) {
      const start = (filterVal.start ?? '').trim()
      const end = (filterVal.end ?? '').trim()
      if (!start && !end) continue
      list = list.filter((row) => {
        const cellVal = row[k]
        if (cellVal === undefined || cellVal === null) return false
        const datePart = String(cellVal).slice(0, 10)
        if (start && datePart < start) return false
        if (end && datePart > end) return false
        return true
      })
      continue
    }

    if (String(filterVal).trim() === '') continue

    list = list.filter((row) => {
      const cellVal = row[k]
      if (cellVal === undefined || cellVal === null) return false
      return matchKeywordWithPinyin(String(cellVal), String(filterVal))
    })
  }

  if (sortField && sortOrder) {
    const dir = sortOrder === 'asc' ? 1 : -1
    list.sort((a, b) => {
      const va = a[sortField]
      const vb = b[sortField]
      if (typeof va === 'number' && typeof vb === 'number') return (va - vb) * dir
      return String(va ?? '').localeCompare(String(vb ?? ''), 'zh-CN') * dir
    })
  }

  return list
}

/** 清理查询参数中的空字符串、空数组、null 与 undefined */
export function cleanQueryObject<T extends Record<string, any>>(raw: T): Partial<T> {
  const out: Partial<T> = {}
  for (const [k, v] of Object.entries(raw)) {
    if (v === undefined || v === null || v === '') continue
    if (Array.isArray(v) && v.length === 0) continue
    if (isRangeFilterObject(v) && !v.start && !v.end) continue
    out[k as keyof T] = v
  }
  return out
}

/** 从 URL search 字符串安全提取允许同步的查询字段 */
export function readQueryFromUrlSearch(
  search: string,
  allowedKeys?: ReadonlyArray<string>
): Record<string, string> {
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
  const result: Record<string, string> = {}
  const allowSet = allowedKeys ? new Set(allowedKeys) : null
  params.forEach((val, key) => {
    if (!val) return
    if (allowSet && !allowSet.has(key)) return
    result[key] = val
  })
  return result
}

/** 将查询参数序列化回 URLSearchParams 字符串（保留无关历史参数） */
export function writeQueryToUrlSearch(
  currentSearch: string,
  managedKeys: ReadonlyArray<string>,
  values: Record<string, any>
): string {
  const params = new URLSearchParams(
    currentSearch.startsWith('?') ? currentSearch.slice(1) : currentSearch
  )
  for (const key of managedKeys) {
    params.delete(key)
  }
  for (const [k, v] of Object.entries(values)) {
    if (v === undefined || v === null || Array.isArray(v) || typeof v === 'object') continue
    if (String(v).trim() !== '') {
      params.set(k, String(v))
    }
  }
  const str = params.toString()
  return str ? `?${str}` : ''
}
