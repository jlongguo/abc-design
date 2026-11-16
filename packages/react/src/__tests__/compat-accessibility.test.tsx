import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/feedback/Dialog'
import { OneTimeSecretDialog } from '../components/feedback/OneTimeSecretDialog'
import { Select } from '../components/form/select/Select'

describe('下游控制台/管理端兼容与无障碍回归测试', () => {
  it('1. Select 在单选箭头模式下不保留冲突 px-* 类名，且放在 <label> 内不影响标签查询', () => {
    const { container } = render(
      <div>
        <label className="text-xs">
          Status
          <Select className="h-8 px-2.5 text-xs" value="active" onChange={() => {}}>
            <option value="active">active</option>
            <option value="suspended">suspended</option>
          </Select>
        </label>
        <Select
          aria-label="Tier"
          className="h-8 px-2.5 text-xs"
          value="pro"
          onChange={() => {}}
          options={[
            { label: 'Pro', value: 'pro' },
            { label: 'Free', value: 'free' },
          ]}
        />
      </div>
    )

    const nativeSelect = screen.getByLabelText('Status') as HTMLSelectElement
    expect(nativeSelect.tagName).toBe('SELECT')
    expect(nativeSelect.value).toBe('active')

    const trigger = screen.getByRole('combobox', { name: 'Tier' })
    expect(trigger.className).not.toContain('px-2.5')
    expect(trigger.className).toContain('pl-2.5')
    const legacyTrigger = container.querySelector('[data-slot="select-trigger"]')!
    expect(legacyTrigger.className).not.toContain('px-2.5')
    expect(legacyTrigger.className).toContain('pl-2.5')
  })

  it('2. Dialog 支持将 data-* 自定义属性透传到原生 <dialog> 根节点', () => {
    render(
      <Dialog open={true} onOpenChange={() => {}} data-playground-theme="dark">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>导出代码</DialogTitle>
          </DialogHeader>
          <p>内容</p>
        </DialogContent>
      </Dialog>
    )

    expect(screen.getByRole('dialog')).toHaveAttribute('data-playground-theme', 'dark')
  })

  it('3. OneTimeSecretDialog 支持确认按钮直接关闭，并在打开/Escape 关闭时正确管理与归还焦点', () => {
    function Demo() {
      const [secret, setSecret] = useState<string | null>(null)
      return (
        <div>
          <button type="button" onClick={() => setSecret('bp_secret_once')}>
            Reveal
          </button>
          <OneTimeSecretDialog
            title="One time"
            secret={secret}
            acknowledgeLabel="I have saved this secret"
            closeLabel="Close"
            onClose={() => setSecret(null)}
          />
        </div>
      )
    }

    render(<Demo />)
    const trigger = screen.getByRole('button', { name: 'Reveal' })
    trigger.focus()
    fireEvent.click(trigger)

    expect(screen.getByText('bp_secret_once')).toBeInTheDocument()
    expect(screen.getByLabelText('Close')).toHaveFocus()

    // Escape 关闭后立即销毁密钥并归还焦点给触发按钮
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByText('bp_secret_once')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()

    // 再次打开后点击确认按钮应直接关闭并触发 onClose
    const onAckClose = vi.fn()
    render(
      <OneTimeSecretDialog
        title="Once again"
        secret="bp_secret_twice"
        acknowledgeLabel="I have saved this secret"
        onClose={onAckClose}
      />
    )
    fireEvent.click(screen.getByRole('button', { name: 'I have saved this secret' }))
    expect(onAckClose).toHaveBeenCalledTimes(1)
  })
})
