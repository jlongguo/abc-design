/**
 * ABC Design 企业级控制台语义化原子类名预设 (uiClasses)
 * 供自定义业务面板、大盘卡片与原生标签快速接入设计系统 Token（圆角、主色、明暗对比度与紧凑信息密度）。
 */

/** 输入框基础样式（紧凑高度，与次要/主按钮对齐） */
export const inputClass =
  'w-full h-8.5 rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] hover:border-[var(--abc-border-strong)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none transition-all disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed'

/** 多行文本域统一样式 */
export const textareaClass =
  'w-full rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] hover:border-[var(--abc-border-strong)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none transition-all disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed'

/** 主要按钮样式 */
export const buttonClass =
  'inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] bg-[var(--abc-primary)] hover:bg-[var(--abc-primary-hover)] active:bg-[var(--abc-primary-active)] px-3.5 py-1.5 text-xs font-medium text-[var(--abc-primary-fg)] transition-all shadow-2xs active:scale-[0.99] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer select-none'

/** 次要按钮样式 */
export const secondaryClass =
  'inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:border-[var(--abc-border-strong)] px-3.5 py-1.5 text-xs font-medium transition-all disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer select-none'

/** 危险操作按钮样式 */
export const dangerButtonClass =
  'inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] bg-[var(--abc-danger)] hover:opacity-90 active:opacity-95 px-3.5 py-1.5 text-xs font-medium text-white transition-all shadow-2xs active:scale-[0.99] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer select-none'

/** 文本轻量按钮样式 */
export const textButtonClass =
  'inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-sm,0.375rem)] bg-transparent text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] px-2.5 py-1.5 text-xs font-medium transition-all cursor-pointer select-none'

/** 通用面板卡片样式 */
export const panelClass =
  'rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]'

/** 搜索筛选卡片样式 */
export const filterCardClass =
  'rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]'

/** 数据表格外层卡片样式 */
export const tableCardClass =
  'rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] overflow-hidden'

/** 数据表头行样式 */
export const tableHeadClass =
  'bg-[var(--abc-bg-muted)] border-b border-[var(--abc-border)] text-xs font-semibold text-[var(--abc-fg-secondary)]'

/** 数据表头单元格样式 */
export const tableHeaderCellClass =
  'px-4 py-3 text-xs font-semibold text-[var(--abc-fg-secondary)] whitespace-nowrap'

/** 数据表体单元格样式 */
export const tableCellClass = 'px-4 py-3 text-xs text-[var(--abc-fg-secondary)]'

/** 页面顶部标题栏容器样式 */
export const pageHeaderClass = 'flex flex-col sm:flex-row sm:items-center justify-between gap-3'

/** 页面主标题样式 */
export const pageTitleClass = 'text-base font-bold text-[var(--abc-fg)] tracking-tight'

/** 页面副标题说明样式 */
export const pageSubTitleClass = 'text-xs text-[var(--abc-fg-muted)] mt-0.5'

/** 表单字段标签统一样式 */
export const labelClass = 'block text-xs font-medium text-[var(--abc-fg-secondary)] mb-1.5'

export const abcUiClasses = {
  input: inputClass,
  textarea: textareaClass,
  button: buttonClass,
  secondary: secondaryClass,
  dangerButton: dangerButtonClass,
  textButton: textButtonClass,
  panel: panelClass,
  filterCard: filterCardClass,
  tableCard: tableCardClass,
  tableHead: tableHeadClass,
  tableHeaderCell: tableHeaderCellClass,
  tableCell: tableCellClass,
  pageHeader: pageHeaderClass,
  pageTitle: pageTitleClass,
  pageSubTitle: pageSubTitleClass,
  label: labelClass,
} as const
