import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Dialog } from '../components/feedback/Dialog'
import { ConfirmDialog } from '../components/feedback/ConfirmDialog'
import { ReasonedActionDialog } from '../pro/ReasonedAction'
import { OneTimeSecretDialog } from '../components/feedback/OneTimeSecretDialog'

describe('Dialog 与模态组件右上角 X 关闭按钮专项测试 (Reproduction)', () => {
  it('1. Dialog 使用 onOpenChange 受控时，点击右上角 X 必须触发 onOpenChange(false)', () => {
    const onOpenChange = vi.fn()
    render(
      <Dialog open onOpenChange={onOpenChange} title="受控弹窗">
        <p>正文内容</p>
      </Dialog>
    )

    const closeBtn = screen.getByLabelText('关闭')
    fireEvent.click(closeBtn)
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('2. ConfirmDialog 二次确认弹窗，点击右上角 X 必须触发 onCancel', () => {
    const onCancel = vi.fn()
    render(
      <ConfirmDialog
        open
        title="确认删除该集群？"
        description="操作不可逆"
        onCancel={onCancel}
        onConfirm={vi.fn()}
      />
    )

    const closeBtn = screen.getByLabelText('关闭')
    fireEvent.click(closeBtn)
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  it('3. ReasonedActionDialog 高危审计原因弹窗，点击右上角 X 必须触发 onOpenChange(false) 或 onCancel', () => {
    const onOpenChange = vi.fn()
    render(
      <ReasonedActionDialog
        open
        title="冻结网关节点"
        description="将立即阻断流量"
        confirmLabel="确认冻结"
        onOpenChange={onOpenChange}
        onConfirm={vi.fn()}
      />
    )

    const closeBtn = screen.getByLabelText('关闭')
    fireEvent.click(closeBtn)
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('4. OneTimeSecretDialog 一次性密钥弹窗，点击右上角 X 必须触发 onClose', () => {
    const onClose = vi.fn()
    render(
      <OneTimeSecretDialog
        open
        title="生成临时访问凭证"
        secret="sk-live-abc1234567890"
        onClose={onClose}
      />
    )

    const closeBtn = screen.getByLabelText('关闭')
    fireEvent.click(closeBtn)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('5. closeDisabled 为 true 时，点击右上角 X 禁用且不触发关闭', () => {
    const onClose = vi.fn()
    render(
      <Dialog open closeDisabled onClose={onClose} title="提交中弹窗">
        <p>正文内容</p>
      </Dialog>
    )

    const closeBtn = screen.getByLabelText('关闭')
    expect(closeBtn).toBeDisabled()
    fireEvent.click(closeBtn)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('6. closable 为 false 时，不渲染右上角 X 按钮', () => {
    render(
      <Dialog open closable={false} title="强制阅读公告">
        <p>不可关闭正文</p>
      </Dialog>
    )

    expect(screen.queryByLabelText('关闭')).not.toBeInTheDocument()
  })
})
