import { TreeSelect } from './TreeSelect'
import type { TreeSelectProps } from './types'

export interface TreeSelectFieldProps
  extends Omit<TreeSelectProps, 'className' | 'dropdownClassName'> {
  triggerClassName?: string
  contentClassName?: string
}

/**
 * 声明式快捷表单字段封装 (TreeSelectField)
 * 对齐 SelectField 参数风格，支持触发器与弹层类名分离透传
 */
export function TreeSelectField({
  triggerClassName,
  contentClassName,
  ...props
}: TreeSelectFieldProps) {
  return (
    <TreeSelect
      {...props}
      className={triggerClassName}
      dropdownClassName={contentClassName}
    />
  )
}

