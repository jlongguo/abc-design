import { getNestedValue,type AbcColumn } from '../../components/table/TableCore'

function escapeCsvCell(val: unknown): string {
  if (val === null || val === undefined) return ''
  const str = String(val)
  if (/[",\r\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

export function buildCsvContent<T extends Record<string, any>>(
  columns: AbcColumn<T>[],
  rows: T[]
): string {
  const exportCols = columns.filter(
    (c) =>
      !c.hideInTable &&
      c.key !== '__abc_actions__' &&
      c.key !== '__actions__' &&
      c.key !== '__drag_handle__'
  )
  const headerLine = exportCols.map((c) => escapeCsvCell(c.title)).join(',')
  const bodyLines = rows.map((row) =>
    exportCols
      .map((col) => {
        const raw = getNestedValue(row, (col.dataIndex ?? col.key) as string | string[])
        const typeOpts = typeof col.type === 'object' ? col.type.options : undefined
        const opts = col.options ?? typeOpts
        if (opts && opts.length > 0) {
          const hit = opts.find((o) => String(o.value) === String(raw))
          if (hit) return escapeCsvCell(hit.label)
        }
        return escapeCsvCell(raw)
      })
      .join(',')
  )
  return `\uFEFF${[headerLine, ...bodyLines].join('\r\n')}`
}

export function downloadTableCsv<T extends Record<string, any>>(
  filename: string,
  columns: AbcColumn<T>[],
  rows: T[]
): string {
  const csv = buildCsvContent(columns, rows)
  if (
    typeof window !== 'undefined' &&
    typeof Blob !== 'undefined' &&
    typeof URL !== 'undefined' &&
    typeof URL.createObjectURL === 'function'
  ) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename.endsWith('.csv') ? filename : `${filename}.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
  return csv
}

/* ==================== 2. 表头单列气泡筛选器 ==================== */

