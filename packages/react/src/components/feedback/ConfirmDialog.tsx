import { AlertTriangle, HelpCircle } from 'lucide-react'
import * as React from 'react'
import { Button } from '../button/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './Dialog'
import { cn } from '../../utils/cn'

export interface ConfirmDialogProps {
  open: boolean
  title: React.ReactNode
  description?: React.ReactNode
  cancelLabel?: React.ReactNode
  confirmLabel?: React.ReactNode
  workingLabel?: React.ReactNode
  variant?: 'default' | 'destructive'
  loading?: boolean
  closeLabel?: string
  className?: string
  onCancel: () => void
  onConfirm: () => void
  children?: React.ReactNode
}

/**
 * 结构化二次确认对话框 (ConfirmDialog)
 * 相比命令式 confirm()，支持自定义表单内容、破坏性警示样式、异步加载中与完全无障碍支持
 */
export function ConfirmDialog({
  open,
  title,
  description,
  cancelLabel = '取消',
  confirmLabel = '确认',
  workingLabel = '正在处理…',
  variant = 'default',
  loading = false,
  closeLabel = '关闭',
  className,
  onCancel,
  onConfirm,
  children,
}: ConfirmDialogProps) {
  const isDestructive = variant === 'destructive'

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onCancel()}>
      <DialogContent
        data-slot="confirm-dialog"
        className={cn('w-full max-w-md', className)}
        closeLabel={closeLabel}
        closeDisabled={loading}
      >
        <DialogHeader>
          <div className="flex items-center gap-2.5">
            {isDestructive ? (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400">
                <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              </span>
            ) : (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]">
                <HelpCircle className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
            <DialogTitle className="text-base font-semibold leading-tight">{title}</DialogTitle>
          </div>
          {description && (
            <DialogDescription className="pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        {children && <div className="py-2 text-xs">{children}</div>}

        <DialogFooter className="gap-2 pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={loading}
            onClick={onCancel}
          >
            {cancelLabel}
          </Button>
          <Button
            type="button"
            variant={isDestructive ? 'danger' : 'primary'}
            size="sm"
            loading={loading}
            onClick={onConfirm}
          >
            {loading ? workingLabel : confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
