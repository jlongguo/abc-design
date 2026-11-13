import React, { useEffect, useMemo, useState } from 'react'
import { Tooltip } from '../components/display/Overlays'
import { StatusTag, type StatusTone } from '../components/display/StatusTag'
import { Select, type SelectOption, type SelectProps } from '../components/form/Select'
import { useAbcConfig } from '../provider/AbcProvider'
import type { AbcDictOption } from '../provider/types'

export interface PermissionGuardProps {
  /** 所需权限码（单个或多个） */
  permission?: string | string[]
  /** permission 语义别名 */
  code?: string | string[]
  /** 多权限判定模式：满足任一 ('any') 或全部满足 ('all') */
  mode?: 'any' | 'all'
  /** 无权限时的降级策略：'hide' 隐藏或渲染 fallback，'disable' 置灰禁用并展示气泡提示 */
  fallbackStrategy?: 'hide' | 'disable'
  /** 禁用策略下的 Tooltip 提示语 */
  disabledTip?: string
  /** 无权限时的降级占位节点 */
  fallback?: React.ReactNode
  /** fallback 语义别名 */
  fallbackNode?: React.ReactNode
  children: React.ReactNode
}

/** 校验当前权限状态的通用 Hook（未配置 permissionAdapter 时默认放行以便独立开发调试） */
export function useAbcPermission() {
  const { permissionAdapter } = useAbcConfig()
  const hasPermission = (permission: string | string[], mode: 'any' | 'all' = 'any'): boolean => {
    if (!permissionAdapter) return true
    return permissionAdapter(permission, mode)
  }
  return { hasPermission }
}

/** 声明式细粒度权限守卫包装组件（支持无权限隐藏与置灰禁用双策略） */
export const PermissionGuard: React.FC<PermissionGuardProps> = ({
  permission,
  code,
  mode = 'any',
  fallbackStrategy = 'hide',
  disabledTip = '暂无操作权限',
  fallback,
  fallbackNode,
  children,
}) => {
  const { hasPermission } = useAbcPermission()
  const targetPerm = permission ?? code
  if (!targetPerm) return <>{children}</>

  const allowed = hasPermission(targetPerm, mode)
  if (allowed) return <>{children}</>

  if (fallbackStrategy === 'hide') {
    return <>{fallback ?? fallbackNode ?? null}</>
  }

  if (React.isValidElement(children)) {
    const el = children as React.ReactElement<any>
    const cloned = React.cloneElement(el, {
      disabled: true,
      'aria-disabled': true,
      onClick: undefined,
      className: `${el.props?.className || ''} opacity-50 cursor-not-allowed pointer-events-none select-none`.trim(),
    })
    return (
      <Tooltip content={disabledTip} placement="top">
        <span className="inline-block cursor-not-allowed align-middle">{cloned}</span>
      </Tooltip>
    )
  }

  return null
}

/** PermissionGuard 简短语义别名 */
export const Permission = PermissionGuard

/** 读取指定字典编码选项列表的 Hook（兼容同步或异步 dictAdapter） */
export function useAbcDict(dictCode: string): {
  options: AbcDictOption[]
  loading: boolean
} {
  const { dictAdapter } = useAbcConfig()
  const [options, setOptions] = useState<AbcDictOption[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!dictAdapter || !dictCode) {
      setOptions([])
      return
    }
    let active = true
    const res = dictAdapter(dictCode)
    if (res instanceof Promise) {
      setLoading(true)
      res
        .then((list) => {
          if (active) setOptions(list)
        })
        .finally(() => {
          if (active) setLoading(false)
        })
    } else {
      setOptions(res)
    }
    return () => {
      active = false
    }
  }, [dictAdapter, dictCode])

  return { options, loading }
}

export interface DictSelectProps extends Omit<SelectProps, 'options'> {
  dictCode?: string
  /** dictCode 语义别名 */
  dictKey?: string
  /** 前置扩展静态选项（如“全部”） */
  prependOptions?: SelectOption[]
  /** 后置扩展静态选项 */
  appendOptions?: SelectOption[]
}

/** 字典驱动下拉框（通过 AbcProvider.dictAdapter 解耦具体业务接口） */
export const DictSelect: React.FC<DictSelectProps> = ({
  dictCode,
  dictKey,
  prependOptions = [],
  appendOptions = [],
  placeholder = '请选择',
  disabled,
  ...rest
}) => {
  const code = dictCode ?? dictKey ?? ''
  const { options, loading } = useAbcDict(code)

  const mergedOptions = useMemo<SelectOption[]>(
    () => [...prependOptions, ...options, ...appendOptions],
    [prependOptions, options, appendOptions]
  )

  return (
    <Select
      options={mergedOptions}
      placeholder={loading && mergedOptions.length === 0 ? '字典加载中...' : placeholder}
      disabled={disabled || (loading && mergedOptions.length === 0)}
      {...rest}
    />
  )
}

export interface DictTagProps {
  dictCode?: string
  /** dictCode 语义别名 */
  dictKey?: string
  value: string | number | undefined | null
  dot?: boolean
  emptyText?: string
  fallbackTone?: StatusTone
  className?: string
}

/** 字典值自动映射状态标签 */
export const DictTag: React.FC<DictTagProps> = ({
  dictCode,
  dictKey,
  value,
  dot = true,
  emptyText = '-',
  fallbackTone = 'neutral',
  className,
}) => {
  const code = dictCode ?? dictKey ?? ''
  const { options } = useAbcDict(code)

  if (value === undefined || value === null || value === '') {
    return <span className="text-xs text-[var(--abc-fg-muted)]">{emptyText}</span>
  }

  const hit = options.find((item) => String(item.value) === String(value))
  return (
    <StatusTag tone={hit?.tone ?? fallbackTone} dot={dot} className={className}>
      {hit?.label ?? String(value)}
    </StatusTag>
  )
}
