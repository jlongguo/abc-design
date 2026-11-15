import { ShieldAlert, ShieldCheck } from 'lucide-react'
import * as React from 'react'
import { Button } from '../components/button/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../components/feedback/Dialog'
import {
  Drawer,
  DrawerBody,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '../components/feedback/Drawer'
import { Input } from '../components/form/Input'
import { NotificationBanner } from '../components/feedback/NotificationBanner'
import { cn } from '../utils/cn'

export interface ReasonedActionDialogProps {
  open: boolean
  title: React.ReactNode
  description: React.ReactNode
  confirmLabel: React.ReactNode
  cancelLabel?: React.ReactNode
  onCancel?: () => void
  workingLabel?: React.ReactNode
  reasonLabel?: React.ReactNode
  reasonPlaceholder?: string
  reasonHint?: React.ReactNode
  reasonTooLongMessage?: React.ReactNode
  closeLabel?: string
  minReasonLength?: number
  maxReasonLength?: number
  destructive?: boolean
  variant?: 'default' | 'destructive'
  pending?: boolean
  confirmDisabled?: boolean
  error?: string | null
  maxWidthClass?: string
  className?: string
  children?: React.ReactNode
  onOpenChange: (open: boolean) => void
  onConfirm: (reason: string) => void
}

/**
 * 必填审计原因确认弹窗 (ReasonedActionDialog)
 * 专用于高安全等级操作（如删除租户、切换环境、强制变更配额、重置密钥等），强制要求填入审计说明
 */
export function ReasonedActionDialog({
  open,
  title,
  description,
  confirmLabel,
  cancelLabel = '取消',
  onCancel,
  workingLabel = '正在处理…',
  reasonLabel = '操作原因',
  reasonPlaceholder = '请详细填写本次变更的业务原因或工单号',
  reasonHint = '需输入 8–512 字符，作为运维审计依据留痕',
  reasonTooLongMessage = '操作原因不能超过 512 字符',
  closeLabel = '关闭',
  minReasonLength = 8,
  maxReasonLength = 512,
  destructive = false,
  variant,
  pending = false,
  confirmDisabled = false,
  error = null,
  maxWidthClass = 'sm:max-w-lg',
  className,
  children,
  onOpenChange,
  onConfirm,
}: ReasonedActionDialogProps) {
  const [reason, setReason] = React.useState('')
  const inputId = React.useId()
  const isDestructive = destructive || variant === 'destructive'

  React.useEffect(() => {
    if (!open) {
      setReason('')
    }
  }, [open])

  const trimmed = reason.trim()
  const isTooShort = trimmed.length < minReasonLength
  const isTooLong = trimmed.length > maxReasonLength
  const canConfirm = !pending && !confirmDisabled && !isTooShort && !isTooLong

  const handleConfirm = () => {
    if (!canConfirm) return
    onConfirm(trimmed)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && canConfirm) {
      event.preventDefault()
      handleConfirm()
    }
  }

  const handleClose = () => {
    onCancel?.()
    onOpenChange?.(false)
  }

  return (
    <Dialog
      open={open}
      closeLabel={closeLabel}
      onClose={handleClose}
      onCancel={handleClose}
      onOpenChange={onOpenChange}
      closeDisabled={false}
      fullscreenable={false}
      draggable={false}
    >
      <DialogContent
        data-slot="reasoned-action-dialog"
        className={cn('w-full max-w-lg', maxWidthClass, className)}
        closeLabel={closeLabel}
        closeDisabled={false}
        closable={true}
      >
        <DialogHeader>
          <div className="flex items-center gap-2">
            {isDestructive ? (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400">
                <ShieldAlert className="h-4 w-4" aria-hidden="true" />
              </span>
            ) : (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
            <DialogTitle className="text-base font-semibold leading-tight">{title}</DialogTitle>
          </div>
          <DialogDescription className="pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>

        {children && <div className="py-2 text-xs">{children}</div>}

        {error && (
          <NotificationBanner
            variant="error"
            title="操作失败"
            message={error}
            className="my-1 text-xs"
          />
        )}

        <div className="space-y-1.5 py-1">
          <div className="flex items-center justify-between text-xs">
            <label htmlFor={inputId} className="font-medium text-[var(--abc-fg)]">
              {reasonLabel} <span className="text-red-500">*</span>
            </label>
            <span
              className={cn(
                'font-mono text-[11px] tabular-nums',
                isTooLong
                  ? 'text-red-600 dark:text-red-400 font-semibold'
                  : 'text-[var(--abc-fg-muted)]'
              )}
            >
              {reason.length}/{maxReasonLength}
            </span>
          </div>
          <Input
            id={inputId}
            aria-label="Reason"
            value={reason}
            disabled={pending}
            placeholder={reasonPlaceholder}
            onChange={(e) => setReason(e.target.value)}
            onKeyDown={handleKeyDown}
            className={cn(
              'w-full text-xs',
              isTooLong && 'border-red-500 focus-visible:ring-red-500/20'
            )}
          />
          <p
            className={cn(
              'text-[11px]',
              isTooLong ? 'text-red-600 dark:text-red-400' : 'text-[var(--abc-fg-muted)]'
            )}
          >
            {isTooLong ? reasonTooLongMessage : reasonHint}
          </p>
        </div>

        <DialogFooter className="gap-2 pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={pending}
            onClick={() => onOpenChange(false)}
          >
            {cancelLabel}
          </Button>
          <Button
            type="button"
            variant={isDestructive ? 'danger' : 'primary'}
            size="sm"
            disabled={!canConfirm}
            loading={pending}
            onClick={handleConfirm}
          >
            {pending ? workingLabel : confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export interface ReasonedActionDrawerProps {
  open: boolean
  onClose: () => void
  title: React.ReactNode
  description?: React.ReactNode
  confirmLabel: React.ReactNode
  cancelLabel?: React.ReactNode
  workingLabel?: React.ReactNode
  reasonLabel?: React.ReactNode
  reasonPlaceholder?: string
  reasonHint?: React.ReactNode
  reasonTooLongMessage?: React.ReactNode
  minReasonLength?: number
  maxReasonLength?: number
  destructive?: boolean
  pending?: boolean
  confirmDisabled?: boolean
  error?: string | null
  width?: number | string
  cascadeMode?: 'stack' | 'adjacent'
  children?: React.ReactNode
  onConfirm: (reason: string) => void
}

/**
 * 必填审计原因侧边抽屉 (ReasonedActionDrawer)
 * 专用于承载复杂大表单（如配额上限配置、权限清单）且需要强制填写审计原因的场景，支持与主抽屉平级并排展开
 */
export function ReasonedActionDrawer({
  open,
  onClose,
  title,
  description,
  confirmLabel,
  cancelLabel = 'Cancel',
  workingLabel = 'Working…',
  reasonLabel = 'Reason',
  reasonPlaceholder = 'Record why this change is required',
  reasonHint = '8–512 characters. Stored in the operation audit.',
  reasonTooLongMessage = 'Shorten the reason to 512 characters or fewer.',
  minReasonLength = 8,
  maxReasonLength = 512,
  destructive = false,
  pending = false,
  confirmDisabled = false,
  error = null,
  width = 560,
  cascadeMode = 'adjacent',
  children,
  onConfirm,
}: ReasonedActionDrawerProps) {
  const [reason, setReason] = React.useState('')
  const inputId = React.useId()

  React.useEffect(() => {
    if (!open) {
      setReason('')
    }
  }, [open])

  const trimmed = reason.trim()
  const isTooShort = trimmed.length < minReasonLength
  const isTooLong = trimmed.length > maxReasonLength
  const canConfirm = !pending && !confirmDisabled && !isTooShort && !isTooLong

  const handleConfirm = () => {
    if (!canConfirm) return
    onConfirm(trimmed)
  }

  return (
    <Drawer
      open={open}
      onClose={onClose}
      width={width}
      cascadeMode={cascadeMode}
      role="dialog"
    >
      <DrawerHeader>
        <div className="flex items-center gap-2">
          {destructive ? (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400">
              <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          ) : (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          )}
          <DrawerTitle className="text-base font-semibold">{title}</DrawerTitle>
        </div>
        {description && (
          <DrawerDescription className="pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed">
            {description}
          </DrawerDescription>
        )}
      </DrawerHeader>

      <DrawerBody className="space-y-4">
        {error && (
          <NotificationBanner
            variant="error"
            title="操作失败"
            message={error}
            className="text-xs"
          />
        )}

        {children}

        {/* 必填审计原因输入区块 */}
        <div className="rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3.5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <label htmlFor={inputId} className="font-semibold text-[var(--abc-fg)]">
              {reasonLabel} <span className="text-red-500">*</span>
            </label>
            <span
              className={cn(
                'font-mono text-[11px] tabular-nums',
                isTooLong
                  ? 'text-red-600 dark:text-red-400 font-semibold'
                  : 'text-[var(--abc-fg-muted)]'
              )}
            >
              {reason.length}/{maxReasonLength}
            </span>
          </div>
          <Input
            id={inputId}
            aria-label="Reason"
            value={reason}
            disabled={pending}
            placeholder={reasonPlaceholder}
            onChange={(e) => setReason(e.target.value)}
            className={cn(
              'w-full bg-[var(--abc-bg-surface,#ffffff)] text-xs',
              isTooLong && 'border-red-500 focus-visible:ring-red-500/20'
            )}
          />
          <p
            className={cn(
              'text-[11px]',
              isTooLong ? 'text-red-600 dark:text-red-400' : 'text-[var(--abc-fg-muted)]'
            )}
          >
            {isTooLong ? reasonTooLongMessage : reasonHint}
          </p>
        </div>
      </DrawerBody>

      <DrawerFooter>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={pending}
          onClick={onClose}
        >
          {cancelLabel}
        </Button>
        <Button
          type="button"
          variant={destructive ? 'danger' : 'primary'}
          size="sm"
          disabled={!canConfirm}
          loading={pending}
          onClick={handleConfirm}
        >
          {pending ? workingLabel : confirmLabel}
        </Button>
      </DrawerFooter>
    </Drawer>
  )
}
