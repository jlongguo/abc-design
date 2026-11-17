import type React from 'react'

export type EditableProEditorType = 'text' | 'number' | 'select' | 'switch' | 'date'

export interface EditableProColumn<T = Record<string, any>> {
  key: string
  title: React.ReactNode
  dataIndex?: keyof T & string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  /** 当前单元格是否允许编辑（默认 true） */
  editable?: boolean | ((row: T, index: number) => boolean)
  /** 内置编辑器类型（默认 'text'） */
  valueType?: EditableProEditorType
  /** select 类型选项列表 */
  options?: Array<{ label: React.ReactNode; value: string | number; disabled?: boolean }>
  min?: number
  max?: number
  step?: number
  placeholder?: string
  /** 列级校验函数，返回错误文案字符串表示校验失败 */
  validator?: (value: any, row: T, rows: T[]) => string | undefined
  /** 只读展示态自定义渲染 */
  render?: (value: any, row: T, index: number) => React.ReactNode
  /** 编辑态自定义控件渲染 */
  renderEditor?: (
    value: any,
    row: T,
    onChange: (val: any) => void,
    index: number
  ) => React.ReactNode
}

export interface EditableProRecordCreatorProps<T = Record<string, any>> {
  position?: 'top' | 'bottom'
  record: () => T
  label?: React.ReactNode
  maxRows?: number
}

export interface EditableProTableProps<T = Record<string, any>> {
  /** 受控行数据列表 */
  value?: T[]
  /** 非受控初始行数据列表 */
  defaultValue?: T[]
  /** 数据变更回调 */
  onChange?: (next: T[]) => void
  /** 可编辑列配置 */
  columns: EditableProColumn<T>[]
  /** 主键字段名（默认 'id'） */
  rowKey?: keyof T & string
  /** 编辑模式：'row' 单行点击编辑保存/取消回滚 | 'table' 整表实时编辑（默认 'row'） */
  mode?: 'row' | 'table'
  /** 新增行配置；传入 false 关闭新增按钮 */
  recordCreatorProps?: false | EditableProRecordCreatorProps<T>
  /** 是否允许删除行（默认 true） */
  deletable?: boolean
  /** 表格底部汇总行自定义渲染 */
  summaryRender?: (rows: T[]) => React.ReactNode
  /** 单行保存钩子（返回 Promise 时自动呈现加载态） */
  onSaveRow?: (row: T, index: number) => void | Promise<void>
  className?: string
}

export function resolveColumnField<T>(col: EditableProColumn<T>): string {
  return String(col.dataIndex ?? col.key)
}

export function resolveRowKeyValue<T>(row: T, index: number, rowKey: string): string {
  const raw = (row as Record<string, any>)?.[rowKey]
  if (raw !== undefined && raw !== null && raw !== '') {
    return String(raw)
  }
  return `__row_${index}__`
}

export function cloneEditableRow<T>(row: T): T {
  if (!row || typeof row !== 'object') return row
  if (typeof structuredClone === 'function') {
    try {
      return structuredClone(row)
    } catch {
      // 回退浅拷贝
    }
  }
  return { ...row }
}

export function areRowSnapshotsEqual(a: any, b: any): boolean {
  if (Object.is(a, b)) return true
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false
  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  if (keysA.length !== keysB.length) return false
  for (const k of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, k)) return false
    const va = a[k]
    const vb = b[k]
    if (Object.is(va, vb)) continue
    if (typeof va === 'object' && typeof vb === 'object' && va !== null && vb !== null) {
      try {
        if (JSON.stringify(va) === JSON.stringify(vb)) continue
      } catch {
        return false
      }
    }
    return false
  }
  return true
}
