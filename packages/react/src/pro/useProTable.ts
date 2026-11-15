import React, { useCallback, useMemo, useRef, useState } from 'react'

export interface ProCrudApiConfig<T = any, Q = any, F = any> {
  list: (query: Q) => Promise<any>
  get?: (id: number | string) => Promise<any>
  view?: (id: number | string) => Promise<any>
  add?: (data: F) => Promise<any>
  create?: (data: F) => Promise<any>
  update?: (data: F) => Promise<any>
  edit?: (data: F) => Promise<any>
  delete?: (ids: (string | number)[]) => Promise<any>
  export?: (query: Q) => Promise<any>
  children?: (row: T) => Promise<any>
  [key: string]: any
}

export type CrudApiConfig<T = any, Q = any, F = any> = ProCrudApiConfig<T, Q, F>

export interface ProTableApiOptions<T = any> {
  /** 分页列表请求函数 */
  list: (params: any) => Promise<any>
  /** 导出数据接口 */
  export?: (params: any) => Promise<any>
  /** 导出文件名前缀（默认“数据导出”） */
  exportFileName?: string
  /** 删除接口 */
  delete?: (params: any) => Promise<any>
  /** 获取详情接口 */
  get?: (id: number | string) => Promise<any>
  /** 查看详情接口 */
  view?: (id: number | string) => Promise<any>
  /** 树形/子项异步加载接口 */
  children?: (row: T) => Promise<any>
  /** 新增接口 */
  create?: (data: any) => Promise<any>
  /** 新增接口别名 */
  add?: (data: any) => Promise<any>
  /** 修改接口 */
  update?: (data: any) => Promise<any>
  /** 修改接口别名 */
  edit?: (data: any) => Promise<any>
  /** 查询参数额外处理钩子 */
  transformQuery?: (params: Record<string, any>) => Record<string, any>
  /** 单行数据额外转换钩子 */
  transformRecord?: (row: any) => T
  /** 外部绑定的固定查询参数 */
  defaultParams?: Record<string, any>
}

export type TableApiOptions<T = any> = ProTableApiOptions<T>

export type ProTableApiInput<T = any> =
  | ((params: any) => Promise<any>)
  | ProTableApiOptions<T>

export type TableApiInput<T = any> = ProTableApiInput<T>

export interface UseProTableOptions<T = any> extends ProTableApiOptions<T> {
  /** 外部联动筛选参数（可选） */
  params?: Record<string, any>
}

export type UseCrudTableOptions<T = any> = UseProTableOptions<T>

/**
 * 判断后端响应信封是否为业务错误码（兼容 code: 0 / 200 / '0' / '200' 成功约定）
 */
export function isProApiFailure(res: any): boolean {
  if (!res || typeof res !== 'object' || !('code' in res)) return false
  const code = res.code
  if (code === undefined || code === null) return false
  return code !== 200 && code !== 0 && code !== '200' && code !== '0'
}

/**
 * 统一解析常见后端分页/数组响应结构（data.records / data.list / records / list / 数组直出）
 */
export function normalizeProListResponse<T = any>(
  res: any,
  transformRecord?: (row: any) => T
): { list: T[]; total: number; raw: any } {
  const payload = res?.data ?? res
  const rawRecords: any[] = Array.isArray(payload?.records)
    ? payload.records
    : Array.isArray(payload?.list)
      ? payload.list
      : Array.isArray(res?.list)
        ? res.list
        : Array.isArray(res?.records)
          ? res.records
          : Array.isArray(payload)
            ? payload
            : []

  const list: T[] = transformRecord ? rawRecords.map(transformRecord) : rawRecords
  const total =
    typeof payload?.total === 'number'
      ? payload.total
      : typeof res?.total === 'number'
        ? res.total
        : rawRecords.length

  return { list, total, raw: res }
}

function cleanQueryObject(source: Record<string, any>): Record<string, any> {
  const cleaned: Record<string, any> = { ...source }
  Object.keys(cleaned).forEach((key) => {
    const val = cleaned[key]
    if (typeof val === 'string') {
      const trimmed = val.trim()
      if (trimmed === '') {
        delete cleaned[key]
      } else {
        cleaned[key] = trimmed
      }
      return
    }
    if (val === null || val === undefined || (Array.isArray(val) && val.length === 0)) {
      delete cleaned[key]
    }
  })
  return cleaned
}

/**
 * 纯函数表格 API 规范化工厂：消除分页字段名差异、空参污染与二进制导出样板代码
 */
export function createProTableApi<T = any>(
  input: ProTableApiInput<T>,
  options?: Omit<ProTableApiOptions<T>, 'list'>
): ProCrudApiConfig<T> {
  const config: ProTableApiOptions<T> & { params?: Record<string, any> } =
    typeof input === 'function' ? { list: input, ...options } : input

  return {
    list: async (params: any) => {
      const { pageNum, page, pageSize, ...rest } = params || {}
      const resolvedPage = pageNum ?? page
      const defaultQuery = config.defaultParams || config.params
      let query: Record<string, any> = {
        ...(resolvedPage !== undefined ? { pageNo: resolvedPage, pageNum: resolvedPage } : {}),
        ...(pageSize !== undefined ? { pageSize } : {}),
        ...defaultQuery,
        ...rest,
      }

      // 保持向后兼容：若上游只认 pageNo 则两者并存，若 transformQuery 自定义映射可直接覆盖
      if (resolvedPage !== undefined && !('pageNum' in (params || {}))) {
        delete query.pageNum
      } else if (resolvedPage !== undefined) {
        delete query.pageNum
      }

      if (config.transformQuery) {
        query = config.transformQuery(query)
      }

      query = cleanQueryObject(query)
      const res: any = await config.list(query)

      if (isProApiFailure(res)) {
        return res
      }

      const normalized = normalizeProListResponse<T>(res, config.transformRecord)
      return {
        ...(res && typeof res === 'object' && !Array.isArray(res) ? res : {}),
        list: normalized.list,
        total: normalized.total,
      }
    },

    delete: config.delete
      ? async (ids: (string | number)[]) => {
          try {
            return await config.delete!({ ids })
          } catch {
            return await config.delete!(ids)
          }
        }
      : undefined,

    export: config.export
      ? async (params: any) => {
          const { pageNum: _pn, page: _p, pageSize: _ps, ...rest } = params || {}
          const defaultExportQuery = config.defaultParams || config.params
          const exportParams = cleanQueryObject({
            ...defaultExportQuery,
            ...rest,
          })

          const data: any = await config.export!(exportParams)
          if (typeof window === 'undefined' || typeof document === 'undefined') {
            return data
          }
          const blob =
            data instanceof Blob
              ? data
              : new Blob([data], {
                  type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                })
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          const now = new Date()
          const pad = (n: number) => String(n).padStart(2, '0')
          const timestamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(
            now.getHours()
          )}${pad(now.getMinutes())}${pad(now.getSeconds())}`
          link.href = url
          link.download = `${config.exportFileName || '数据导出'}_${timestamp}.xlsx`
          document.body.appendChild(link)
          link.click()
          link.remove()
          window.URL.revokeObjectURL(url)
          return data
        }
      : undefined,

    get: config.get,
    view: config.view,
    children: config.children,
    create: config.create || config.add,
    add: config.add || config.create,
    update: config.update || config.edit,
    edit: config.edit || config.update,
  }
}

export const createTableApi = createProTableApi

/**
 * 响应式记忆化表格 API 钩子
 */
export function useProTableApi<T = any>(
  input: ProTableApiInput<T>,
  deps: React.DependencyList = []
): ProCrudApiConfig<T> {
  const inputRef = useRef(input)
  inputRef.current = input
  const depSignature = deps
  return useMemo(() => {
    void depSignature
    return createProTableApi(inputRef.current)
  }, [depSignature])
}

export const useTableApi = useProTableApi

/**
 * 声明式表格状态控制钩子：返回可直接透传给 ProTable / CrudTable 的 tableProps、无感刷新与多选控制句柄
 */
export function useProTable<T = any>(
  input: ProTableApiInput<T> | UseProTableOptions<T>,
  deps: React.DependencyList = []
) {
  const [refreshKey, setRefreshKey] = useState(0)
  const refreshRef = useRef<((resetToFirstPage?: boolean) => void) | null>(null)
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([])
  const clearSelection = useCallback(() => setSelectedRowKeys([]), [])

  const inputRef = useRef(input)
  inputRef.current = input

  const refresh = useCallback(() => {
    if (refreshRef.current) {
      refreshRef.current(false)
    } else {
      setRefreshKey((k) => k + 1)
    }
  }, [])

  const reload = useCallback(() => {
    setSelectedRowKeys([])
    if (refreshRef.current) {
      refreshRef.current(true)
    } else {
      setRefreshKey((k) => k + 1)
    }
  }, [])

  const api = useMemo(() => {
    void refreshKey
    void deps
    return createProTableApi(inputRef.current)
    // 通过展开外部显式传入的依赖项实现精确重算
  }, [refreshKey, ...deps])

  const tableProps = useMemo(
    () => ({
      api,
      onRefreshRef: refreshRef,
      selectedRowKeys,
      onRowSelectionChange: setSelectedRowKeys,
    }),
    [api, selectedRowKeys]
  )

  return {
    tableProps,
    api,
    refresh,
    reload,
    refreshKey,
    selectedRowKeys,
    setSelectedRowKeys,
    clearSelection,
  }
}

export const useCrudTable = useProTable
