import React from 'react'
import { Check, Pencil, Trash2, X } from 'lucide-react'
import { Button } from '../../components/button/Button'
import { StatusTag } from '../../components/display/StatusTag'

export interface EditableRowActionsProps {
  mode: 'row' | 'table'
  isEditing: boolean
  isDirty: boolean
  isSaving: boolean
  deletable: boolean
  hasSaveHook: boolean
  saveError?: string
  onStartEdit: () => void
  onSave: () => void
  onCancel: () => void
  onDelete: () => void
}

/**
 * 可编辑表格行操作单元格：集中承载“未保存”脏徽标、编辑/保存/取消与删除动作
 */
export const EditableRowActions: React.FC<EditableRowActionsProps> = ({
  mode,
  isEditing,
  isDirty,
  isSaving,
  deletable,
  hasSaveHook,
  saveError,
  onStartEdit,
  onSave,
  onCancel,
  onDelete,
}) => {
  return (
    <>
      <div className="inline-flex flex-wrap items-center justify-end gap-1.5">
        {isDirty && (
          <StatusTag tone="warning" size="xs" dot>
            未保存
          </StatusTag>
        )}

        {mode === 'row' ? (
          isEditing ? (
            <>
              <Button
                type="button"
                variant="primary"
                size="xs"
                loading={isSaving}
                disabled={isSaving}
                icon={<Check className="h-3 w-3" />}
                onClick={onSave}
              >
                保存
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="xs"
                disabled={isSaving}
                icon={<X className="h-3 w-3" />}
                onClick={onCancel}
              >
                取消
              </Button>
            </>
          ) : (
            <Button
              type="button"
              variant="ghost"
              size="xs"
              icon={<Pencil className="h-3 w-3" />}
              onClick={onStartEdit}
            >
              编辑
            </Button>
          )
        ) : (
          hasSaveHook &&
          isDirty && (
            <Button
              type="button"
              variant="primary"
              size="xs"
              loading={isSaving}
              disabled={isSaving}
              icon={<Check className="h-3 w-3" />}
              onClick={onSave}
            >
              保存
            </Button>
          )
        )}

        {deletable && (
          <Button
            type="button"
            variant="ghost"
            size="xs"
            disabled={isSaving}
            icon={<Trash2 className="h-3 w-3" />}
            onClick={onDelete}
            className="hover:text-[var(--abc-danger)]"
          >
            删除
          </Button>
        )}
      </div>
      {saveError && (
        <p role="alert" className="mt-1 text-right text-[11px] text-[var(--abc-danger)]">
          {saveError}
        </p>
      )}
    </>
  )
}
