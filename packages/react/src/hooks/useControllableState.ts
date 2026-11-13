import { useCallback, useRef, useState } from 'react'

export interface UseControllableStateParams<T> {
  value?: T
  defaultValue: T
  onChange?: (next: T) => void
}

/**
 * 统一处理组件受控 (value) 与非受控 (defaultValue) 双模式状态
 */
export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: UseControllableStateParams<T>): [T, (updater: T | ((prev: T) => T)) => void] {
  const [internalValue, setInternalValue] = useState<T>(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const valueRef = useRef(currentValue)
  valueRef.current = currentValue
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  const setValue = useCallback(
    (updater: T | ((prev: T) => T)) => {
      const nextValue =
        typeof updater === 'function' ? (updater as (prev: T) => T)(valueRef.current) : updater
      if (!isControlled) {
        setInternalValue(nextValue)
      }
      onChangeRef.current?.(nextValue)
    },
    [isControlled]
  )

  return [currentValue, setValue]
}
