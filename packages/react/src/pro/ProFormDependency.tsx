import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { ProFormInstance } from './pro-crud-form/types'

const ProFormContext = createContext<ProFormInstance<any> | null>(null)

export interface ProFormProviderProps {
  /** 需要向下透传的响应式表单实例 */
  form: ProFormInstance<any>
  children: React.ReactNode
}

/**
 * 表单实例上下文提供者：允许深层嵌套的联动区块或列表组件无需逐层透传 form prop
 */
export const ProFormProvider: React.FC<ProFormProviderProps> = ({ form, children }) => {
  return <ProFormContext.Provider value={form}>{children}</ProFormContext.Provider>
}

/** 获取当前上下文注入的 ProFormInstance（未包裹 ProFormProvider 时返回 null） */
export function useProFormContext(): ProFormInstance<any> | null {
  return useContext(ProFormContext)
}

export interface ProFormDependencyAsyncState<TData = any> {
  loading: boolean
  data: TData | undefined
  error: Error | null
  reload: () => void
  form: ProFormInstance<any> | null
}

export interface ProFormDependencyProps<TData = any> {
  /** 显式传入的表单实例（未传时自动回退读取 useProFormContext()） */
  form?: ProFormInstance<any>
  /** 声明监听的依赖字段名集合 */
  deps: string[]
  /** 任一依赖值发生变更时自动清空的下游字段名集合 */
  resetFieldsOnChange?: string[]
  /** 依赖值变化时触发的异步数据源加载器（支持 AbortSignal 竞态取消） */
  asyncLoader?: (depValues: Record<string, any>, signal: AbortSignal) => Promise<TData>
  /** 异步加载防抖毫秒数（默认 0，> 0 时防抖触发并在新变化到来时中止旧请求） */
  debounceMs?: number
  /** 渲染函数，接收当前依赖字段值快照及异步加载元信息 */
  children: (
    depValues: Record<string, any>,
    meta: ProFormDependencyAsyncState<TData>
  ) => React.ReactNode
}

function readPathValue(source: Record<string, any> | undefined | null, key: string): any {
  if (!source || typeof source !== 'object') return undefined
  if (Object.prototype.hasOwnProperty.call(source, key)) {
    return source[key]
  }
  if (key.includes('.')) {
    return key.split('.').reduce<any>(
      (curr, part) => (curr != null && typeof curr === 'object' ? curr[part] : undefined),
      source
    )
  }
  return source[key]
}

function extractDepValues(
  source: Record<string, any> | undefined | null,
  deps: readonly string[]
): Record<string, any> {
  const result: Record<string, any> = {}
  for (const key of deps) {
    result[key] = readPathValue(source, key)
  }
  return result
}

function extractDepValuesFromForm(
  form: ProFormInstance<any> | null,
  deps: readonly string[]
): Record<string, any> {
  if (!form) return extractDepValues(null, deps)
  const allValues = form.getValues()
  if (allValues && typeof allValues === 'object') {
    return extractDepValues(allValues, deps)
  }
  const result: Record<string, any> = {}
  for (const key of deps) {
    result[key] = form.getValues(key)
  }
  return result
}

function areValuesEqual(a: any, b: any): boolean {
  if (Object.is(a, b)) return true
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    if (a.every((item, idx) => Object.is(item, b[idx]))) return true
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch {
      return false
    }
  }
  return false
}

function areDepRecordsEqual(
  prev: Record<string, any>,
  next: Record<string, any>,
  deps: readonly string[]
): boolean {
  if (Object.keys(prev).length !== Object.keys(next).length) return false
  for (const key of deps) {
    if (!areValuesEqual(prev[key], next[key])) return false
  }
  return true
}

/**
 * 声明式表单字段联动容器 (ProFormDependency)
 * 通过精细化字段对比避免无关重渲染与死循环，支持下游字段自动清空及防抖/竞态安全的异步加载
 */
export function ProFormDependency<TData = any>({
  form: formProp,
  deps,
  resetFieldsOnChange,
  asyncLoader,
  debounceMs = 0,
  children,
}: ProFormDependencyProps<TData>): React.ReactElement {
  const contextForm = useProFormContext()
  const resolvedForm = formProp ?? contextForm

  const depsKey = deps.join('\0')
  const stableDeps = useMemo(() => [...deps], [depsKey])

  const [depValues, setDepValues] = useState<Record<string, any>>(() =>
    extractDepValuesFromForm(resolvedForm, stableDeps)
  )
  const [depVersion, setDepVersion] = useState(0)

  const prevDepsRef = useRef<Record<string, any>>(depValues)
  const depValuesRef = useRef<Record<string, any>>(depValues)
  depValuesRef.current = depValues
  const lastGetValuesSnapRef = useRef<Record<string, any>>(depValues)

  const formRef = useRef<ProFormInstance<any> | null>(resolvedForm)
  formRef.current = resolvedForm
  const resetFieldsRef = useRef(resetFieldsOnChange)
  resetFieldsRef.current = resetFieldsOnChange
  const asyncLoaderRef = useRef(asyncLoader)
  asyncLoaderRef.current = asyncLoader

  // 同步外部 form.reset() 或 deps 集合自身变化导致的快照漂移，同时保留 watch 回调推送的瞬时态
  useEffect(() => {
    const activeForm = formRef.current
    const fromGetValues = extractDepValuesFromForm(activeForm, stableDeps)
    const prevSnapshot = lastGetValuesSnapRef.current
    const depsKeyChanged = Object.keys(prevSnapshot).length !== stableDeps.length ||
      stableDeps.some((k) => !Object.prototype.hasOwnProperty.call(prevSnapshot, k))

    if (depsKeyChanged || !areDepRecordsEqual(prevSnapshot, fromGetValues, stableDeps)) {
      lastGetValuesSnapRef.current = fromGetValues
      if (!areDepRecordsEqual(prevDepsRef.current, fromGetValues, stableDeps)) {
        prevDepsRef.current = fromGetValues
        setDepValues(fromGetValues)
        setDepVersion((v) => v + 1)
      }
    }
  }, [resolvedForm, stableDeps])

  // 订阅 form.watch 回调并做精确浅/数组比对，避免触发无关字段刷新与递归死循环
  useEffect(() => {
    const watchFn = resolvedForm?.watch
    if (typeof watchFn !== 'function') return

    const subscription = watchFn((values) => {
      const next = extractDepValues(values, stableDeps)
      if (areDepRecordsEqual(prevDepsRef.current, next, stableDeps)) {
        return
      }
      // 必须在清空下游字段前更新 prevDepsRef，防止同步触发的 watch 回调重入死循环
      prevDepsRef.current = next
      const fieldsToReset = resetFieldsRef.current
      const activeForm = formRef.current
      if (fieldsToReset && fieldsToReset.length > 0 && activeForm) {
        for (const targetKey of fieldsToReset) {
          activeForm.setValue(targetKey, undefined)
        }
      }
      setDepValues(next)
      setDepVersion((v) => v + 1)
    })

    return () => {
      subscription?.unsubscribe?.()
    }
  }, [resolvedForm?.watch, stableDeps])

  const hasAsyncLoader = Boolean(asyncLoader)
  const [asyncState, setAsyncState] = useState<{
    loading: boolean
    data: TData | undefined
    error: Error | null
  }>(() => ({
    loading: hasAsyncLoader,
    data: undefined,
    error: null,
  }))

  const abortControllerRef = useRef<AbortController | null>(null)
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const requestSeqRef = useRef(0)

  const triggerAsyncLoad = useCallback(
    (immediate: boolean) => {
      if (debounceTimerRef.current !== undefined) {
        clearTimeout(debounceTimerRef.current)
        debounceTimerRef.current = undefined
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
        abortControllerRef.current = null
      }

      const loader = asyncLoaderRef.current
      if (!loader) {
        setAsyncState({ loading: false, data: undefined, error: null })
        return
      }

      requestSeqRef.current += 1
      const seq = requestSeqRef.current
      const controller = new AbortController()
      abortControllerRef.current = controller
      const snapshot = depValuesRef.current

      setAsyncState((prev) => ({ ...prev, loading: true, error: null }))

      const execute = async () => {
        try {
          const result = await loader(snapshot, controller.signal)
          if (controller.signal.aborted || seq !== requestSeqRef.current) return
          setAsyncState({ loading: false, data: result, error: null })
        } catch (err) {
          if (controller.signal.aborted || seq !== requestSeqRef.current) return
          if (
            (err instanceof DOMException && err.name === 'AbortError') ||
            (err && typeof err === 'object' && (err as { name?: string }).name === 'AbortError')
          ) {
            return
          }
          const normalized = err instanceof Error ? err : new Error(String(err))
          setAsyncState((prev) => ({ ...prev, loading: false, error: normalized }))
        }
      }

      if (!immediate && debounceMs > 0) {
        debounceTimerRef.current = setTimeout(() => {
          debounceTimerRef.current = undefined
          void execute()
        }, debounceMs)
      } else {
        void execute()
      }
    },
    [debounceMs]
  )

  useEffect(() => {
    if (!hasAsyncLoader) {
      if (debounceTimerRef.current !== undefined) {
        clearTimeout(debounceTimerRef.current)
        debounceTimerRef.current = undefined
      }
      abortControllerRef.current?.abort()
      abortControllerRef.current = null
      setAsyncState({ loading: false, data: undefined, error: null })
      return
    }

    triggerAsyncLoad(false)

    return () => {
      if (debounceTimerRef.current !== undefined) {
        clearTimeout(debounceTimerRef.current)
        debounceTimerRef.current = undefined
      }
      abortControllerRef.current?.abort()
      abortControllerRef.current = null
    }
  }, [hasAsyncLoader, depVersion, triggerAsyncLoad])

  const reload = useCallback(() => {
    triggerAsyncLoad(true)
  }, [triggerAsyncLoad])

  const meta = useMemo<ProFormDependencyAsyncState<TData>>(
    () => ({
      loading: asyncState.loading,
      data: asyncState.data,
      error: asyncState.error,
      reload,
      form: resolvedForm,
    }),
    [asyncState.loading, asyncState.data, asyncState.error, reload, resolvedForm]
  )

  return <>{children(depValues, meta)}</>
}

export default ProFormDependency
