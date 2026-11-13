import React, { useEffect, useState } from 'react'
import { AlertTriangle, CheckCircle2, HelpCircle, Trash2 } from 'lucide-react'
import Button from '../button/Button'
import Dialog from './Dialog'

export interface ConfirmOptions {
  title?: string
  message?: React.ReactNode
  /** message 语义别名 */
  content?: React.ReactNode
  confirmText?: string
  cancelText?: string
  tone?: 'danger' | 'warning' | 'primary' | 'success'
  /** tone 语义别名 */
  type?: 'warning' | 'info' | 'success' | 'error' | 'danger'
  onConfirm?: () => void | Promise<void>
  onCancel?: () => void
}

interface ActiveConfirmState extends ConfirmOptions {
  resolvedTone: 'danger' | 'warning' | 'primary' | 'success'
  resolve: (confirmed: boolean) => void
}

type ConfirmSubscriber = (state: ActiveConfirmState | null) => void

const confirmSubscribers = new Set<ConfirmSubscriber>()
let currentConfirm: ActiveConfirmState | null = null
let mountedHostCount = 0

function emitConfirm(state: ActiveConfirmState | null) {
  currentConfirm = state
  confirmSubscribers.forEach((fn) => fn(state))
}

function mapTypeToTone(
  tone?: ConfirmOptions['tone'],
  type?: ConfirmOptions['type']
): 'danger' | 'warning' | 'primary' | 'success' {
  if (tone) return tone
  if (type === 'error' || type === 'danger') return 'danger'
  if (type === 'warning') return 'warning'
  if (type === 'success') return 'success'
  return 'primary'
}

/**
 * 命令式 Promise 确认框 API
 * 用法：const ok = await abcConfirm({ title: '确认删除', message: '删除后不可恢复', tone: 'danger' })
 */
export function abcConfirm(options: ConfirmOptions | string): Promise<boolean> {
  const normalized: ConfirmOptions =
    typeof options === 'string' ? { message: options } : options

  // 若当前环境未挂载任何 Host（如极简单元测试），回退至原生 confirm
  if (mountedHostCount === 0 && typeof window !== 'undefined' && confirmSubscribers.size === 0) {
    const rawMsg = normalized.content ?? normalized.message
    const fallbackText =
      typeof rawMsg === 'string' ? rawMsg : normalized.title || '确认执行该操作？'
    const accepted = window.confirm(fallbackText)
    if (accepted) {
      return Promise.resolve(normalized.onConfirm?.()).then(() => true)
    }
    normalized.onCancel?.()
    return Promise.resolve(false)
  }

  return new Promise<boolean>((resolve) => {
    emitConfirm({
      ...normalized,
      title: normalized.title ?? '操作确认',
      confirmText: normalized.confirmText ?? '确认',
      cancelText: normalized.cancelText ?? '取消',
      resolvedTone: mapTypeToTone(normalized.tone, normalized.type),
      message: normalized.content ?? normalized.message,
      resolve,
    })
  })
}

/** abcConfirm 简短别名 */
export const confirm = abcConfirm

/** 返回命令式确认函数的 Hook */
export function useConfirm() {
  return abcConfirm
}

/** 全局命令式确认弹窗挂载器（由 AbcProvider 默认自动挂载，自动防重复渲染） */
export const AbcConfirmHost: React.FC = () => {
  const [isPrimaryHost, setIsPrimaryHost] = useState(false)
  const [state, setState] = useState<ActiveConfirmState | null>(() => currentConfirm)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    mountedHostCount += 1
    const primary = mountedHostCount === 1
    setIsPrimaryHost(primary)
    const sub: ConfirmSubscriber = (next) => setState(next)
    confirmSubscribers.add(sub)
    return () => {
      mountedHostCount = Math.max(0, mountedHostCount - 1)
      confirmSubscribers.delete(sub)
    }
  }, [])

  if (!isPrimaryHost || !state) return null

  const handleDecision = async (result: boolean) => {
    if (!state || submitting) return
    if (result && state.onConfirm) {
      try {
        setSubmitting(true)
        await state.onConfirm()
      } finally {
        setSubmitting(false)
      }
    } else if (!result) {
      state.onCancel?.()
    }
    state.resolve(result)
    emitConfirm(null)
  }

  const iconNode =
    state.resolvedTone === 'danger' ? (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]">
        <Trash2 className="h-4 w-4" />
      </div>
    ) : state.resolvedTone === 'warning' ? (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-warning-soft)] text-[var(--abc-warning)]">
        <AlertTriangle className="h-4 w-4" />
      </div>
    ) : state.resolvedTone === 'success' ? (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-success-soft)] text-[var(--abc-success)]">
        <CheckCircle2 className="h-4 w-4" />
      </div>
    ) : (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]">
        <HelpCircle className="h-4 w-4" />
      </div>
    )

  return (
    <Dialog
      open={Boolean(state)}
      onClose={() => handleDecision(false)}
      title={state.title}
      size="sm"
      fullscreenable={false}
      footer={
        <>
          {/* 破坏性确认默认聚焦安全按钮（取消），防止误触回车删除数据 */}
          <Button
            variant="secondary"
            disabled={submitting}
            autoFocus={state.resolvedTone === 'danger'}
            onClick={() => handleDecision(false)}
          >
            {state.cancelText}
          </Button>
          <Button
            variant={
              state.resolvedTone === 'danger'
                ? 'danger'
                : state.resolvedTone === 'warning'
                  ? 'warning'
                  : state.resolvedTone === 'success'
                    ? 'success'
                    : 'primary'
            }
            loading={submitting}
            autoFocus={state.resolvedTone !== 'danger'}
            onClick={() => handleDecision(true)}
          >
            {state.confirmText}
          </Button>
        </>
      }
    >
      <div className="flex items-start gap-3.5 py-1">
        {iconNode}
        <div className="pt-1 text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
          {state.message}
        </div>
      </div>
    </Dialog>
  )
}

/** 兼容包裹容器（若外层已存在 AbcProvider，内部自动去重不会重复挂载弹窗） */
export const ConfirmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    {children}
    <AbcConfirmHost />
  </>
)

export default abcConfirm
