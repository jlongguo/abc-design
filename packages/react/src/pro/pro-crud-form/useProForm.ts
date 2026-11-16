import { useCallback,useRef,useState } from 'react'
import { getNestedValue } from '../../components/table/TableCore'
import {
resolveFieldKey,
type ProCrudFormField,
type ProFieldError,
type ProFormErrors,
type ProFormInstance,
type ProSchemaLike,
} from './types'

export interface UseProFormOptions<T extends Record<string, any> = Record<string, any>> {
  defaultValues?: Partial<T>
  schema?: ProSchemaLike<T>
  fields?: ProCrudFormField<T>[]
  onValuesChange?: (values: T, changedName?: string) => void
}

/**
 * 轻量级响应式表单状态引擎：完整对齐 getValues / setValue / watch / reset / formState 交互契约
 */
export function useProForm<T extends Record<string, any> = Record<string, any>>({
  defaultValues,
  schema,
  fields = [],
  onValuesChange,
}: UseProFormOptions<T> = {}): ProFormInstance<T> {
  const defaultRef = useRef<Partial<T>>(defaultValues ?? {})
  defaultRef.current = defaultValues ?? {}

  const fieldsRef = useRef(fields)
  fieldsRef.current = fields

  const schemaRef = useRef(schema)
  schemaRef.current = schema

  const onValuesChangeRef = useRef(onValuesChange)
  onValuesChangeRef.current = onValuesChange

  const valuesRef = useRef<T>({ ...(defaultValues ?? {}) } as T)
  const errorsRef = useRef<ProFormErrors>({})
  const dirtyRef = useRef(false)
  const [, bumpVersion] = useState(0)
  const watchersRef = useRef<Set<(values: T, info: { name?: string }) => void>>(new Set())

  const notify = useCallback((changedName?: string) => {
    bumpVersion((v) => v + 1)
    const snapshot = { ...valuesRef.current }
    onValuesChangeRef.current?.(snapshot, changedName)
    watchersRef.current.forEach((cb) => cb(snapshot, { name: changedName }))
  }, [])

  const getValues = useCallback((name?: string): any => {
    if (name === undefined) {
      return { ...valuesRef.current }
    }
    if (name.includes('.')) {
      return getNestedValue(valuesRef.current, name)
    }
    return valuesRef.current[name]
  }, []) as ProFormInstance<T>['getValues']

  const setValue = useCallback(
    (name: string, value: any) => {
      valuesRef.current = {
        ...valuesRef.current,
        [name]: value,
      }
      dirtyRef.current = true
      if (errorsRef.current[name]) {
        const nextErr = { ...errorsRef.current }
        delete nextErr[name]
        errorsRef.current = nextErr
      }
      notify(name)
    },
    [notify]
  )

  const watch = useCallback((arg?: any): any => {
    if (typeof arg === 'function') {
      watchersRef.current.add(arg)
      return {
        unsubscribe: () => {
          watchersRef.current.delete(arg)
        },
      }
    }
    if (arg === undefined) {
      return { ...valuesRef.current }
    }
    if (Array.isArray(arg)) {
      return arg.map((k) => valuesRef.current[k])
    }
    return valuesRef.current[arg]
  }, []) as ProFormInstance<T>['watch']

  const reset = useCallback((nextValues?: Partial<T>) => {
    valuesRef.current = {
      ...(defaultRef.current ?? {}),
      ...(nextValues ?? {}),
    } as T
    errorsRef.current = {}
    dirtyRef.current = false
    bumpVersion((v) => v + 1)
  }, [])

  const setError = useCallback((name: string, error: ProFieldError) => {
    errorsRef.current = {
      ...errorsRef.current,
      [name]: error,
    }
    bumpVersion((v) => v + 1)
  }, [])

  const clearErrors = useCallback((name?: string | string[]) => {
    if (!name) {
      errorsRef.current = {}
    } else if (Array.isArray(name)) {
      const next = { ...errorsRef.current }
      name.forEach((k) => delete next[k])
      errorsRef.current = next
    } else {
      const next = { ...errorsRef.current }
      delete next[name]
      errorsRef.current = next
    }
    bumpVersion((v) => v + 1)
  }, [])

  const runValidation = useCallback((): { valid: boolean; data: T } => {
    const currentVals = { ...valuesRef.current }
    const nextErrors: ProFormErrors = {}

    for (const f of fieldsRef.current) {
      const fk = resolveFieldKey(f)
      if (!fk) continue
      const v = currentVals[fk]
      const isEmpty =
        v === undefined ||
        v === null ||
        (typeof v === 'string' && v.trim() === '') ||
        (Array.isArray(v) && v.length === 0)

      if (f.required && isEmpty) {
        nextErrors[fk] = { type: 'required', message: `请填写${f.label}` }
        continue
      }
      if (f.validator) {
        const msg = f.validator(v, currentVals)
        if (msg) {
          nextErrors[fk] = { type: 'validate', message: msg }
        }
      }
    }

    let finalData: T = currentVals
    const activeSchema = schemaRef.current
    if (activeSchema && typeof activeSchema.safeParse === 'function') {
      const parsed = activeSchema.safeParse(currentVals)
      if (!parsed.success) {
        const issues = parsed.error?.issues ?? parsed.error?.errors ?? []
        for (const issue of issues) {
          const pathKey =
            Array.isArray(issue.path) && issue.path.length > 0 ? String(issue.path[0]) : ''
          if (pathKey && !nextErrors[pathKey]) {
            nextErrors[pathKey] = {
              type: 'schema',
              message: issue.message || '字段格式不正确',
            }
          }
        }
      } else if (parsed.data && typeof parsed.data === 'object') {
        finalData = { ...currentVals, ...(parsed.data as Record<string, any>) } as T
      }
    }

    errorsRef.current = nextErrors
    bumpVersion((v) => v + 1)
    return {
      valid: Object.keys(nextErrors).length === 0,
      data: finalData,
    }
  }, [])

  const trigger = useCallback(async (): Promise<boolean> => {
    return runValidation().valid
  }, [runValidation])

  const handleSubmit = useCallback(
    (onValid: (values: T) => void | Promise<void>) => {
      return async (e?: React.FormEvent) => {
        e?.preventDefault?.()
        const { valid, data } = runValidation()
        if (!valid) return
        await onValid(data)
      }
    },
    [runValidation]
  )

  return {
    getValues,
    setValue,
    watch,
    reset,
    setError,
    clearErrors,
    trigger,
    handleSubmit,
    formState: {
      errors: errorsRef.current,
      isDirty: dirtyRef.current,
    },
  }
}

/* ==================== 3. 多图上传与图标快捷选择增强控件 ==================== */

