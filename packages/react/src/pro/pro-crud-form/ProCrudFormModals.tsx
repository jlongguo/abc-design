import { Loader2 } from 'lucide-react'
import React from 'react'
import Button from '../../components/button/Button'
import { ImagePreview } from '../../components/display/ImagePreview'
import Dialog,{ type DialogSize } from '../../components/feedback/Dialog'
import Drawer,{ type DrawerSize } from '../../components/feedback/Drawer'
import { FormField } from '../../components/form/FormField'
import { getNestedValue,renderBuiltInValue,type AbcColumn } from '../../components/table/TableCore'
import { cn } from '../../utils/cn'

/* ==================== 1. 零外部依赖响应式表单控制器 (ProFormInstance) ==================== */
import { ProFormProvider } from '../ProFormDependency'
import { ProCrudFormFieldControl } from './fieldControls'
import {
isSchemaFieldRequired,
resolveFieldKey,
type ProCrudFormField,
type ProFormErrors,
type ProFormInstance,
type ProSchemaLike
} from './types'

export interface ProCrudFormLayoutProps<F = any> {
  layout?: 'grid' | 'split'
  columnsCount?: 1 | 2
  fields: ProCrudFormField<any>[]
  isEdit: boolean
  form?: ProFormInstance<any>
  errors?: ProFormErrors
  formSchema?: ProSchemaLike<F>
  columns?: AbcColumn<any>[]
  isFieldRequired?: (schema: ProSchemaLike | undefined, fieldKey: string) => boolean
  renderFormField: (field: ProCrudFormField<any>) => React.ReactNode
}

/**
 * 声明式 CRUD 表单布局器：支持自适应网格 (grid) 与五区左右分栏 (split: top/left/right/bottom/extra)
 */
export function ProCrudFormLayout<F = any>({
  layout = 'grid',
  columnsCount = 2,
  fields,
  isEdit,
  form,
  errors = {},
  formSchema,
  columns = [],
  isFieldRequired: checkSchemaRequired = isSchemaFieldRequired,
  renderFormField,
}: ProCrudFormLayoutProps<F>) {
  const checkHidden = (field: ProCrudFormField<any>) => {
    if (field.formGroup === 'hidden') return true
    if (typeof field.hidden === 'function' && form) {
      return Boolean(field.hidden(isEdit, form))
    }
    return Boolean(field.hidden)
  }

  const renderField = (field: ProCrudFormField<any>) => {
    const fk = resolveFieldKey(field)
    const isReq = Boolean(field.required || checkSchemaRequired(formSchema, fk))
    const errObj = errors[fk]
    const errorMessage = typeof errObj === 'string' ? errObj : errObj?.message
    const matchedCol = columns.find((col) => {
      const colDataIdx = Array.isArray(col.dataIndex)
        ? col.dataIndex[0]
        : (col.dataIndex ?? col.key)
      return String(colDataIdx) === fk
    })
    const tooltip = field.tooltip ?? matchedCol?.tooltip

    return (
      <FormField
        key={fk}
        label={field.label}
        required={isReq}
        tooltip={tooltip}
        helperText={field.helperText}
        error={errorMessage}
      >
        {renderFormField(field)}
      </FormField>
    )
  }

  if (layout === 'split') {
    const visible = fields.filter((f) => !checkHidden(f))
    const topFields = visible.filter((f) => f.formGroup === 'top')
    const leftFields = visible.filter((f) => {
      const g = f.formGroup || 'left'
      return g === 'left' || g === 'full'
    })
    const rightFields = visible.filter((f) => f.formGroup === 'right')
    const bottomFields = visible.filter((f) => f.formGroup === 'bottom')
    const extraFields = visible.filter((f) => f.formGroup === 'extra')

    const splitContent = (
      <div className="space-y-4">
        {topFields.length > 0 && (
          <div className="space-y-3.5">{topFields.map((f) => renderField(f))}</div>
        )}
        <div
          className={cn(
            'grid grid-cols-1 gap-5',
            rightFields.length > 0 && 'md:grid-cols-2'
          )}
        >
          <div className="space-y-3.5">{leftFields.map((f) => renderField(f))}</div>
          {rightFields.length > 0 && (
            <div className="space-y-3.5">{rightFields.map((f) => renderField(f))}</div>
          )}
        </div>
        {bottomFields.length > 0 && (
          <div className="space-y-3.5">{bottomFields.map((f) => renderField(f))}</div>
        )}
        {extraFields.length > 0 && (
          <div className="mt-4 space-y-3.5 border-t border-[var(--abc-border)] pt-4">
            {extraFields.map((f) => renderField(f))}
          </div>
        )}
      </div>
    )
    return form ? <ProFormProvider form={form}>{splitContent}</ProFormProvider> : splitContent
  }

  const gridContent = (
    <div
      className={cn(
        'grid gap-3.5',
        columnsCount === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
      )}
    >
      {fields.map((field) => {
        if (checkHidden(field)) return null
        const fk = resolveFieldKey(field)
        const isFullSpan =
          columnsCount === 2 &&
          (field.span === 2 ||
            field.formGroup === 'full' ||
            (field.__fromFieldSchema && field.type === 'textarea'))
        return (
          <div key={fk} className={isFullSpan ? 'col-span-1 sm:col-span-2' : 'col-span-1'}>
            {renderField(field)}
          </div>
        )
      })}
    </div>
  )
  return form ? <ProFormProvider form={form}>{gridContent}</ProFormProvider> : gridContent
}

export const CrudFormLayout = ProCrudFormLayout

/* ==================== 6. ProCrudFormModal 弹窗/抽屉双模态表单容器 ==================== */

export interface ProCrudFormModalProps<T extends Record<string, any> = Record<string, any>> {
  open: boolean
  onClose: () => void
  isEdit: boolean
  currentRecord: T | null
  container?: 'dialog' | 'drawer'
  dialogTitle?: { add?: string; edit?: string }
  dialogSize?: DialogSize | string
  formLayout?: 'grid' | 'split'
  formColumns?: 1 | 2
  formFields: ProCrudFormField<T>[]
  form: ProFormInstance<any>
  formSchema?: ProSchemaLike<any>
  columns: AbcColumn<T>[]
  formSubmitting: boolean
  formDetailLoading?: boolean
  formError?: string | null
  onSubmit: (e?: React.FormEvent) => void
  draftEnabled?: boolean
  showDraftButton?: boolean
  showDraftBanner?: boolean
  draftBannerMode?: 'auto-restored' | 'prompt'
  onSaveDraft?: () => void
  onRestoreDraft?: () => void
  onDiscardDraft?: () => void
  submitButtonText?: string
  renderFormExtra?: (form: ProFormInstance<any>, isEdit: boolean) => React.ReactNode
  renderCustomForm?: (props: {
    open: boolean
    onClose: () => void
    record: T | null
    isEdit: boolean
    onSuccess: () => void
  }) => React.ReactNode
  onSuccessFetch?: () => void
}

export function ProCrudFormModal<T extends Record<string, any> = Record<string, any>>({
  open,
  onClose,
  isEdit,
  currentRecord,
  container = 'dialog',
  dialogTitle,
  dialogSize,
  formLayout = 'grid',
  formColumns = 2,
  formFields,
  form,
  formSchema,
  columns,
  formSubmitting,
  formDetailLoading,
  formError,
  onSubmit,
  draftEnabled = false,
  showDraftButton = false,
  showDraftBanner = false,
  draftBannerMode = 'prompt',
  onSaveDraft,
  onRestoreDraft,
  onDiscardDraft,
  submitButtonText = '保存',
  renderFormExtra,
  renderCustomForm,
  onSuccessFetch,
}: ProCrudFormModalProps<T>) {
  if (renderCustomForm) {
    return (
      <>
        {renderCustomForm({
          open,
          onClose,
          record: currentRecord,
          isEdit,
          onSuccess: () => {
            onClose()
            onSuccessFetch?.()
          },
        })}
      </>
    )
  }

  const resolvedTitle = isEdit
    ? dialogTitle?.edit || '编辑'
    : dialogTitle?.add || '新增'

  const resolvedDialogSize = dialogSize ?? (formColumns === 2 ? 'lg' : 'md')

  const footerNode = (
    <div className="flex items-center justify-end gap-2.5">
      {draftEnabled && showDraftButton && onSaveDraft && (
        <Button variant="secondary" size="sm" type="button" onClick={onSaveDraft}>
          保存草稿
        </Button>
      )}
      {!isEdit && showDraftBanner && draftBannerMode === 'auto-restored' && onDiscardDraft && (
        <Button variant="ghost" size="sm" type="button" onClick={onDiscardDraft}>
          清空草稿
        </Button>
      )}
      <Button variant="secondary" size="sm" type="button" onClick={onClose} disabled={formSubmitting}>
        取消
      </Button>
      <Button variant="primary" size="sm" type="button" loading={formSubmitting} onClick={onSubmit}>
        {submitButtonText}
      </Button>
    </div>
  )

  const bodyNode = (
    <form onSubmit={onSubmit} className="space-y-3.5 py-1">
      {formDetailLoading && (
        <div className="flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]">
          <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin" />
          <span>正在同步最新完整数据...</span>
        </div>
      )}
      {formError && (
        <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-danger)]/30 bg-[var(--abc-danger-soft)] px-3 py-2 text-xs text-[var(--abc-danger)]">
          {formError}
        </div>
      )}
      {showDraftBanner && (
        <div className="flex items-center justify-between gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-warning)]/30 bg-[var(--abc-warning-soft)] px-3 py-2 text-xs text-[var(--abc-fg)]">
          <span>
            {draftBannerMode === 'auto-restored'
              ? '已自动为您恢复上次未提交的本地表单草稿'
              : '检测到未提交的草稿'}
          </span>
          <span className="inline-flex shrink-0 items-center gap-2.5">
            {draftBannerMode === 'prompt' && onRestoreDraft && (
              <button
                type="button"
                onClick={onRestoreDraft}
                className="font-medium text-[var(--abc-primary)] hover:underline cursor-pointer"
              >
                恢复
              </button>
            )}
            {onDiscardDraft && (
              <button
                type="button"
                onClick={onDiscardDraft}
                className="font-medium text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] hover:underline cursor-pointer"
              >
                {draftBannerMode === 'auto-restored' ? '丢弃草稿' : '丢弃'}
              </button>
            )}
          </span>
        </div>
      )}

      <ProCrudFormLayout
        layout={formLayout}
        columnsCount={formColumns}
        fields={formFields}
        isEdit={isEdit}
        form={form}
        errors={form.formState.errors}
        formSchema={formSchema}
        columns={columns}
        renderFormField={(field) => (
          <ProCrudFormFieldControl
            field={field}
            form={form}
            isEdit={isEdit}
            editingRecord={currentRecord}
          />
        )}
      />

      {renderFormExtra?.(form, isEdit)}
    </form>
  )

  if (container === 'drawer') {
    const drawerSizes: DrawerSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    const validDrawerSize: DrawerSize = drawerSizes.includes(resolvedDialogSize as DrawerSize)
      ? (resolvedDialogSize as DrawerSize)
      : 'lg'
    return (
      <Drawer
        open={open}
        onClose={onClose}
        title={resolvedTitle}
        size={validDrawerSize}
        footer={footerNode}
      >
        {bodyNode}
      </Drawer>
    )
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={resolvedTitle}
      size={resolvedDialogSize}
      footer={footerNode}
    >
      {bodyNode}
    </Dialog>
  )
}

/* ==================== 7. ProCrudViewModal 只读详情查看弹窗 ==================== */

export interface ProCrudViewModalProps<T extends Record<string, any> = Record<string, any>> {
  open: boolean
  onClose: () => void
  record: T | null
  columns: AbcColumn<T>[]
  viewTitle?: string | ((record: T) => React.ReactNode)
  viewSize?: DialogSize | string
  viewLoading?: boolean
  canEdit?: boolean
  onEditRecord?: (record: T) => void
  renderViewExtra?: (record: T) => React.ReactNode
  renderViewFooter?: (record: T, close: () => void) => React.ReactNode
}

export function ProCrudViewModal<T extends Record<string, any> = Record<string, any>>({
  open,
  onClose,
  record,
  columns,
  viewTitle = '详情',
  viewSize = 'lg',
  viewLoading = false,
  canEdit = false,
  onEditRecord,
  renderViewExtra,
  renderViewFooter,
}: ProCrudViewModalProps<T>) {
  const titleNode =
    typeof viewTitle === 'function' ? (record ? viewTitle(record) : '详情') : viewTitle

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={titleNode}
      size={viewSize}
      footer={
        renderViewFooter && record ? (
          renderViewFooter(record, onClose)
        ) : (
          <div className="flex items-center justify-end gap-2">
            {record && canEdit && onEditRecord && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  const target = record
                  onClose()
                  onEditRecord(target)
                }}
              >
                编辑此记录
              </Button>
            )}
            <Button variant="primary" size="sm" onClick={onClose}>
              关闭
            </Button>
          </div>
        )
      }
    >
      {viewLoading && (
        <div className="mb-3 flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]">
          <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin" />
          <span>正在更新详细数据...</span>
        </div>
      )}
      {record && (
        <div className="space-y-4 py-1">
          <div className="grid grid-cols-1 gap-3 text-xs md:grid-cols-2">
            {columns.map((col) => {
              if (
                col.view === false ||
                col.key === 'actions' ||
                col.key === '__actions__' ||
                col.key === '__abc_actions__' ||
                col.key === '__drag_handle__'
              ) {
                return null
              }
              const val = getNestedValue(record, (col.dataIndex ?? col.key) as string | string[])
              const typeCfg = typeof col.type === 'object' ? col.type : undefined
              const searchOpts =
                typeof col.search === 'object' &&
                col.search !== null &&
                Array.isArray((col.search as any).options)
                  ? (col.search as any).options.filter((o: any) => o.value !== '')
                  : undefined
              const enrichedCol =
                !col.options && !typeCfg?.options && searchOpts
                  ? ({ ...col, options: searchOpts, __autoOptionsFromSearch: true } as AbcColumn<T>)
                  : col

              let renderedValue: React.ReactNode
              if (col.viewRender) {
                renderedValue = col.viewRender(val, record)
              } else if (col.render) {
                renderedValue = col.render(val, record, 0)
              } else if (
                (col.type === 'image' || typeCfg?.type === 'image' || col.valueType === 'image') &&
                val
              ) {
                renderedValue = <ImagePreview src={String(val)} width={56} height={56} />
              } else {
                renderedValue = renderBuiltInValue(val, record, enrichedCol)
              }

              return (
                <div
                  key={col.key}
                  className={cn(
                    'flex flex-col gap-1 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 p-3',
                    col.viewSpan === 2 && 'md:col-span-2'
                  )}
                >
                  <span className="font-semibold text-[var(--abc-fg-muted)]">{col.title}</span>
                  <div className="font-medium break-all text-[var(--abc-fg)]">{renderedValue}</div>
                </div>
              )
            })}
          </div>
          {renderViewExtra?.(record)}
        </div>
      )}
    </Dialog>
  )
}
