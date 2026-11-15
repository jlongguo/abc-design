import { Check, Copy, KeyRound } from 'lucide-react'
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
import { NotificationBanner } from './NotificationBanner'
import { DescriptionList } from '../display/DescriptionList'
import { copyToClipboard } from '../typography/CopyableText'
import { cn } from '../../utils/cn'

export interface OneTimeSecretMetadataItem {
  label: string
  value: string
}

export interface OneTimeSecretDialogProps {
  title: string
  secret?: string | null
  open?: boolean
  secretValue?: string | null
  description?: string
  secretLabel?: string
  metadata?: OneTimeSecretMetadataItem[]
  closeLabel?: string
  acknowledgeLabel?: string
  copyLabel?: string
  copiedLabel?: string
  copyErrorMessage?: string
  className?: string
  onClose: () => void
}

/**
 * 一次性敏感密钥/凭证展示弹窗 (OneTimeSecretDialog)
 * 专用于只下发一次的 API Key、Token、临时密码，强制提醒管理员及时安全保存
 */
export function OneTimeSecretDialog({
  title,
  secret,
  open,
  secretValue,
  description = '此密钥仅显示一次。请在关闭前复制并安全存储。',
  secretLabel,
  metadata = [],
  closeLabel = '关闭',
  acknowledgeLabel = '我已妥善保存此密钥',
  copyLabel = '复制密钥',
  copiedLabel = '已复制',
  copyErrorMessage = '剪贴板写入失败，请手动选择复制。',
  className,
  onClose,
}: OneTimeSecretDialogProps) {
  const resolvedSecret = secret ?? secretValue ?? null
  const isOpen = open !== undefined ? open : Boolean(resolvedSecret)
  const [copied, setCopied] = React.useState(false)
  const [acknowledged, setAcknowledged] = React.useState(false)
  const [copyError, setCopyError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!isOpen) {
      setCopied(false)
      setAcknowledged(false)
      setCopyError(null)
    }
  }, [isOpen])

  if (!isOpen || !resolvedSecret) {
    return null
  }

  const handleCopy = async () => {
    setCopyError(null)
    const success = await copyToClipboard(resolvedSecret)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } else {
      setCopyError(copyErrorMessage)
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      onCancel={onClose}
      onOpenChange={(next) => !next && onClose()}
      fullscreenable={false}
      draggable={false}
    >
      <DialogContent
        data-slot="one-time-secret-dialog"
        className={cn('w-full max-w-lg', className)}
        closeLabel={closeLabel}
      >
        <DialogHeader>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">
              <KeyRound className="h-4 w-4" aria-hidden="true" />
            </span>
            <DialogTitle className="text-base font-semibold leading-tight">{title}</DialogTitle>
          </div>
          <DialogDescription className="pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2 text-xs">
          <NotificationBanner
            variant="warning"
            title="请立即备份"
            message="关闭此窗口后将无法再次检索该明文内容，丢失将需要重新生成。"
          />

          {secretLabel && (
            <span className="block font-medium text-[var(--abc-fg)]">{secretLabel}</span>
          )}

          {/* 密钥展示与复制框 */}
          <div className="relative rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3 pr-12">
            <code className="block select-all break-all font-mono text-xs text-[var(--abc-fg)]">
              {resolvedSecret}
            </code>
            <Button
              type="button"
              variant="outline"
              size="xs"
              onClick={handleCopy}
              className="absolute right-2 top-2 h-7 w-7 p-0"
              title={copied ? copiedLabel : copyLabel}
              aria-label={copied ? copiedLabel : copyLabel}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
              ) : (
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </Button>
          </div>

          {copyError && (
            <p className="text-[11px] text-red-600 dark:text-red-400">{copyError}</p>
          )}

          {metadata.length > 0 && (
            <div className="mt-3 border-t border-[var(--abc-border)] pt-3">
              <DescriptionList
                items={metadata.map((item) => ({
                  label: item.label,
                  value: item.value,
                  mono: true,
                }))}
                variant="compact"
                columns={1}
              />
            </div>
          )}

          {/* 强制勾选确认备份 */}
          <label className="flex cursor-pointer items-start gap-2 pt-1 select-none">
            <input
              type="checkbox"
              checked={acknowledged}
              onChange={(e) => setAcknowledged(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-[var(--abc-border)] text-[var(--abc-primary)] focus:ring-[var(--abc-primary)] cursor-pointer"
            />
            <span className="text-xs text-[var(--abc-fg)] font-medium leading-tight">
              {acknowledgeLabel}
            </span>
          </label>
        </div>

        <DialogFooter className="pt-2">
          <Button
            type="button"
            variant="primary"
            size="sm"
            disabled={!acknowledged}
            onClick={onClose}
          >
            {closeLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
