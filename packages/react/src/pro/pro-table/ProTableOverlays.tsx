import {
ProCrudFormModal,
ProCrudViewModal
} from '../ProCrudForm'
import {
ProFloatingBatchBar
} from '../ProTableExtras'

/* ==================== 1. 搜索、表单、操作与工具栏模型定义 ==================== */

import type { ProTableFullCtx } from './ProTableSearchHeader'

export function ProTableOverlays<
  T extends Record<string, any> = Record<string, any>,
  Q extends Record<string, any> = Record<string, any>,
  F extends Record<string, any> = Record<string, any>,
>({ ctx }: { ctx: ProTableFullCtx<T, Q, F> }) {
  const {
    columns,
    formSchema,
    dialogTitle,
    dialogSize,
    formLayout,
    draftConfig,
    apiProp,
    viewTitle,
    viewSize,
    renderViewExtra,
    renderViewFooter,
    formContainer,
    renderBatchActions,
    renderFormExtra,
    renderCustomForm,
    onDeleteRecords,
    toast,
    resolvedMotion,
    resolvedApi,
    hasRemoteSource,
    permittedBatchActions,
    selectedKeys,
    viewingRecord,
    setViewingRecord,
    viewLoading,
    resolvedFormFields,
    buildDefaultFormValues,
    form,
    draftEnabled,
    autoRestoreDraft,
    draft,
    modalOpen,
    setModalOpen,
    isEdit,
    editingRecord,
    formSubmitting,
    formDetailLoading,
    formError,
    showDraftBanner,
    setShowDraftBanner,
    canBatchDelete,
    canOpenEdit,
    fetchServerData,
    updateSelectedState,
    selectedRows,
    openEditModal,
    handleFormSubmit,
    handleBatchDelete,
    selectionEnabled,
    effectiveFormColumns,
  } = ctx

  return (
    <>
      {/* 悬浮底部毛玻璃批量操作栏 */}
      {selectionEnabled && selectedKeys.length > 0 && (
        <ProFloatingBatchBar<T>
          selectedKeys={selectedKeys}
          selectedRows={selectedRows}
          batchActions={permittedBatchActions}
          extraContent={renderBatchActions?.(selectedKeys, selectedRows)}
          motion={resolvedMotion}
          onBatchDelete={
            canBatchDelete && (onDeleteRecords || resolvedApi?.delete)
              ? () => void handleBatchDelete(selectedKeys)
              : undefined
          }
          onClear={() => updateSelectedState([], [])}
        />
      )}

      {/* 详情只读查看弹窗 */}
      <ProCrudViewModal<T>
        open={Boolean(viewingRecord)}
        onClose={() => setViewingRecord(null)}
        record={viewingRecord}
        columns={columns}
        viewTitle={viewTitle ?? (apiProp ? '详情' : '记录详情')}
        viewSize={viewSize}
        viewLoading={viewLoading}
        canEdit={canOpenEdit}
        onEditRecord={(rec) => void openEditModal(rec)}
        renderViewExtra={renderViewExtra}
        renderViewFooter={renderViewFooter}
      />

      {/* 新建 / 编辑弹窗与侧滑抽屉容器 */}
      <ProCrudFormModal<T>
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        isEdit={isEdit}
        currentRecord={editingRecord}
        container={formContainer}
        dialogTitle={
          dialogTitle ??
          (apiProp ? { add: '新增', edit: '编辑' } : { add: '新建记录', edit: '编辑记录' })
        }
        dialogSize={dialogSize}
        formLayout={formLayout}
        formColumns={effectiveFormColumns}
        formFields={resolvedFormFields}
        form={form}
        formSchema={formSchema}
        columns={columns}
        formSubmitting={formSubmitting}
        formDetailLoading={formDetailLoading}
        formError={formError}
        onSubmit={handleFormSubmit}
        draftEnabled={draftEnabled}
        showDraftButton={Boolean(draftConfig?.showDraftButton && draftEnabled)}
        showDraftBanner={showDraftBanner}
        draftBannerMode={autoRestoreDraft ? 'auto-restored' : 'prompt'}
        onSaveDraft={
          draftEnabled
            ? () => {
                draft.saveDraft(form.getValues())
                toast.success('草稿已保存')
              }
            : undefined
        }
        onRestoreDraft={() => {
          const cached = draft.readDraft()
          if (cached) form.reset({ ...buildDefaultFormValues(), ...cached })
          setShowDraftBanner(false)
        }}
        onDiscardDraft={() => {
          draft.clearDraft()
          if (autoRestoreDraft) {
            form.reset(buildDefaultFormValues())
          }
          setShowDraftBanner(false)
        }}
        submitButtonText={apiProp ? '保存' : '确认提交'}
        renderFormExtra={renderFormExtra}
        renderCustomForm={renderCustomForm}
        onSuccessFetch={() => {
          if (hasRemoteSource) void fetchServerData()
        }}
      />
    </>
  )
}
