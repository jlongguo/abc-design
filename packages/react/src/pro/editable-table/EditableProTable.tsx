import React, { useMemo, useRef, useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '../../components/button/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/table/TablePrimitives'
import { useControllableState } from '../../hooks/useControllableState'
import { cn } from '../../utils/cn'
import { EditableCell } from './CellEditor'
import { EditableRowActions } from './RowActions'
import {
  areRowSnapshotsEqual,
  cloneEditableRow,
  resolveColumnField,
  resolveRowKeyValue,
  type EditableProColumn,
  type EditableProTableProps,
} from './types'

const ALIGN_CLASS: Record<'left' | 'center' | 'right', string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

function validateSingleRow<T>(
  columns: EditableProColumn<T>[],
  row: T,
  rows: T[]
): Record<string, string> {
  const errors: Record<string, string> = {}
  for (const col of columns) {
    if (!col.validator) continue
    const fieldKey = resolveColumnField(col)
    const msg = col.validator((row as Record<string, any>)[fieldKey], row, rows)
    if (msg) {
      errors[col.key] = msg
    }
  }
  return errors
}

function omitKey<V>(record: Record<string, V>, targetKey: string): Record<string, V> {
  if (!(targetKey in record)) return record
  const next = { ...record }
  delete next[targetKey]
  return next
}

/**
 * 企业级行内/整表可编辑表格 (EditableProTable)
 * 支持 'row'（逐行编辑/校验拦截/取消回滚）与 'table'（整表实时编辑与校验）双模式，内置脏数据检测与行增删
 */
export function EditableProTable<T = Record<string, any>>({
  value,
  defaultValue,
  onChange,
  columns,
  rowKey = 'id' as keyof T & string,
  mode = 'row',
  recordCreatorProps,
  deletable = true,
  summaryRender,
  onSaveRow,
  className,
}: EditableProTableProps<T>): React.ReactElement {
  const [rows, setRows] = useControllableState<T[]>({
    value,
    defaultValue: defaultValue ?? [],
    onChange,
  })

  const [editingKeys, setEditingKeys] = useState<Record<string, boolean>>({})
  const [draftRows, setDraftRows] = useState<Record<string, T>>({})
  const [rowErrors, setRowErrors] = useState<Record<string, Record<string, string>>>({})
  const [rowSaveError, setRowSaveError] = useState<Record<string, string>>({})
  const [savingKeys, setSavingKeys] = useState<Record<string, boolean>>({})
  const [, bumpSnapshot] = useState(0)

  const snapshotMapRef = useRef<Map<string, T>>(new Map())
  const createdKeysRef = useRef<Set<string>>(new Set())

  // 对非“新建未保存”行建立初始基线快照，兼顾受控异步回填与初始默认数据
  rows.forEach((row, idx) => {
    const rKey = resolveRowKeyValue(row, idx, String(rowKey))
    if (!snapshotMapRef.current.has(rKey) && !createdKeysRef.current.has(rKey)) {
      snapshotMapRef.current.set(rKey, cloneEditableRow(row))
    }
  })

  const tableModeErrors = useMemo(() => {
    if (mode !== 'table') return {} as Record<string, Record<string, string>>
    const result: Record<string, Record<string, string>> = {}
    rows.forEach((row, idx) => {
      const rKey = resolveRowKeyValue(row, idx, String(rowKey))
      const errs = validateSingleRow(columns, row, rows)
      if (Object.keys(errs).length > 0) {
        result[rKey] = errs
      }
    })
    return result
  }, [mode, rows, columns, rowKey])

  const rowDirtyFlags = rows.map((row, idx) => {
    const rKey = resolveRowKeyValue(row, idx, String(rowKey))
    const isEditing = mode === 'table' || Boolean(editingKeys[rKey])
    const activeRow = mode === 'row' && isEditing && draftRows[rKey] ? draftRows[rKey] : row
    const snapshot = snapshotMapRef.current.get(rKey)
    if (!snapshot) return true
    return !areRowSnapshotsEqual(snapshot, activeRow)
  })

  const hasAnyDirty = rowDirtyFlags.some(Boolean)
  const showActionCol =
    mode === 'row' || deletable !== false || Boolean(onSaveRow) || hasAnyDirty
  const totalColSpan = columns.length + (showActionCol ? 1 : 0)

  const startEditRow = (rKey: string, row: T) => {
    setDraftRows((prev) => ({ ...prev, [rKey]: cloneEditableRow(row) }))
    setEditingKeys((prev) => ({ ...prev, [rKey]: true }))
    setRowErrors((prev) => omitKey(prev, rKey))
    setRowSaveError((prev) => omitKey(prev, rKey))
  }

  const cancelEditRow = (rKey: string) => {
    setEditingKeys((prev) => omitKey(prev, rKey))
    setDraftRows((prev) => omitKey(prev, rKey))
    setRowErrors((prev) => omitKey(prev, rKey))
    setRowSaveError((prev) => omitKey(prev, rKey))
  }

  const handleSaveRow = async (rKey: string, index: number) => {
    const candidateRow = mode === 'row' ? (draftRows[rKey] ?? rows[index]) : rows[index]
    const nextRows = rows.map((r, i) => (i === index ? candidateRow : r))
    const errors = validateSingleRow(columns, candidateRow, nextRows)
    if (Object.keys(errors).length > 0) {
      setRowErrors((prev) => ({ ...prev, [rKey]: errors }))
      return
    }

    if (onSaveRow) {
      setSavingKeys((prev) => ({ ...prev, [rKey]: true }))
      setRowSaveError((prev) => omitKey(prev, rKey))
      try {
        await onSaveRow(candidateRow, index)
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err)
        setRowSaveError((prev) => ({ ...prev, [rKey]: msg || '保存失败' }))
        setSavingKeys((prev) => ({ ...prev, [rKey]: false }))
        return
      }
      setSavingKeys((prev) => ({ ...prev, [rKey]: false }))
    }

    snapshotMapRef.current.set(rKey, cloneEditableRow(candidateRow))
    createdKeysRef.current.delete(rKey)
    bumpSnapshot((v) => v + 1)

    if (mode === 'row') {
      setRows(nextRows)
      cancelEditRow(rKey)
    }
  }

  const handleDeleteRow = (rKey: string, index: number) => {
    snapshotMapRef.current.delete(rKey)
    createdKeysRef.current.delete(rKey)
    cancelEditRow(rKey)
    setRows(rows.filter((_, idx) => idx !== index))
  }

  const handleCellChange = (rKey: string, index: number, col: EditableProColumn<T>, nextVal: any) => {
    const fieldKey = resolveColumnField(col)
    if (mode === 'row') {
      const baseRow = draftRows[rKey] ?? rows[index]
      const updatedDraft = { ...baseRow, [fieldKey]: nextVal } as T
      setDraftRows((prev) => ({ ...prev, [rKey]: updatedDraft }))
      if (rowErrors[rKey]?.[col.key]) {
        setRowErrors((prev) => ({ ...prev, [rKey]: omitKey(prev[rKey] ?? {}, col.key) }))
      }
      return
    }

    const updatedRow = { ...rows[index], [fieldKey]: nextVal } as T
    setRows(rows.map((r, i) => (i === index ? updatedRow : r)))
  }

  const creatorConfig =
    recordCreatorProps && typeof recordCreatorProps === 'object' ? recordCreatorProps : null

  const handleCreateRecord = () => {
    if (!creatorConfig) return
    if (creatorConfig.maxRows !== undefined && rows.length >= creatorConfig.maxRows) {
      return
    }
    const newRecord = creatorConfig.record()
    const rKey = resolveRowKeyValue(newRecord, rows.length, String(rowKey))
    createdKeysRef.current.add(rKey)
    setRows([...rows, newRecord])

    if (mode === 'row') {
      setDraftRows((prev) => ({ ...prev, [rKey]: cloneEditableRow(newRecord) }))
      setEditingKeys((prev) => ({ ...prev, [rKey]: true }))
    }
  }

  const creatorDisabled = Boolean(
    creatorConfig && creatorConfig.maxRows !== undefined && rows.length >= creatorConfig.maxRows
  )

  const creatorButton = creatorConfig ? (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      disabled={creatorDisabled}
      icon={<Plus className="h-3.5 w-3.5" />}
      onClick={handleCreateRecord}
    >
      {creatorConfig.label ?? '添加一行'}
    </Button>
  ) : null

  const creatorPosition = creatorConfig?.position ?? 'bottom'

  return (
    <div data-slot="editable-pro-table" className={cn('w-full space-y-2.5', className)}>
      {creatorButton && creatorPosition === 'top' && (
        <div className="flex justify-end">{creatorButton}</div>
      )}

      <div className="overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]">
        <Table scrollLabel="可编辑数据表格">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  style={col.width !== undefined ? { width: col.width } : undefined}
                  className={cn(ALIGN_CLASS[col.align ?? 'left'])}
                >
                  {col.title}
                </TableHead>
              ))}
              {showActionCol && <TableHead className="w-[180px] text-right">操作</TableHead>}
            </TableRow>
          </TableHeader>

          <TableBody>
            {rows.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={totalColSpan}
                  className="py-8 text-center text-xs text-[var(--abc-fg-muted)]"
                >
                  暂无数据
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row, index) => {
                const rKey = resolveRowKeyValue(row, index, String(rowKey))
                const isRowEditing = mode === 'table' || Boolean(editingKeys[rKey])
                const activeRow =
                  mode === 'row' && isRowEditing ? (draftRows[rKey] ?? row) : row
                const cellErrors =
                  mode === 'table' ? tableModeErrors[rKey] ?? {} : rowErrors[rKey] ?? {}
                const isDirty = rowDirtyFlags[index]

                return (
                  <TableRow
                    key={rKey}
                    data-dirty={isDirty ? 'true' : undefined}
                    className={cn(isDirty && 'bg-[var(--abc-warning-soft)]/35')}
                  >
                    {columns.map((col) => (
                      <TableCell
                        key={col.key}
                        style={col.width !== undefined ? { width: col.width } : undefined}
                        className={cn(ALIGN_CLASS[col.align ?? 'left'])}
                      >
                        <EditableCell
                          column={col}
                          row={activeRow}
                          rowIndex={index}
                          isEditing={isRowEditing}
                          error={cellErrors[col.key]}
                          onChange={(nextVal) => handleCellChange(rKey, index, col, nextVal)}
                        />
                      </TableCell>
                    ))}

                    {showActionCol && (
                      <TableCell className="text-right align-middle">
                        <EditableRowActions
                          mode={mode}
                          isEditing={isRowEditing}
                          isDirty={isDirty}
                          isSaving={Boolean(savingKeys[rKey])}
                          deletable={deletable !== false}
                          hasSaveHook={Boolean(onSaveRow)}
                          saveError={rowSaveError[rKey]}
                          onStartEdit={() => startEditRow(rKey, row)}
                          onSave={() => void handleSaveRow(rKey, index)}
                          onCancel={() => cancelEditRow(rKey)}
                          onDelete={() => handleDeleteRow(rKey, index)}
                        />
                      </TableCell>
                    )}
                  </TableRow>
                )
              })
            )}
          </TableBody>

          {summaryRender && (
            <TableFooter>
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={totalColSpan} className="text-xs">
                  {summaryRender(rows)}
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>

      {creatorButton && creatorPosition === 'bottom' && <div>{creatorButton}</div>}
    </div>
  )
}

export default EditableProTable
