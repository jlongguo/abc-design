// quota-unit-input.test.tsx: 验证 DurationQuotaInput / ByteQuotaInput 使用 ABC Design Select 浮层而非裸原生 <select>
import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ByteQuotaInput, DurationQuotaInput } from '../components/form/QuotaUnitInput'

describe('QuotaUnitInput 设计系统 Select 组件化验证', () => {
  it('DurationQuotaInput 点击单位区域应弹出 ABC Design 自定义 listbox 浮层并正确换算时长单位', async () => {
    const onChange = vi.fn()
    const { container } = render(
      <DurationQuotaInput
        id="quota-seconds"
        locale="zh"
        aria-label="月度浏览器时长上限"
        unitAriaLabel="组织月度浏览器时长单位"
        value={7200}
        onChange={onChange}
      />,
    )

    const numberInput = screen.getByLabelText('月度浏览器时长上限')
    expect(numberInput).toHaveValue(2)

    // 必须由 ABC Design Select 驱动（包含 data-slot="select-trigger"），而非裸原生可点击 <select>
    const trigger = container.querySelector('[data-slot="select-trigger"]') as HTMLElement
    expect(trigger).not.toBeNull()
    expect(trigger).toHaveTextContent('小时')

    // 点击触发器弹出 ABC Design 自定义下拉浮层
    fireEvent.click(trigger)
    const listbox = await screen.findByRole('listbox')
    expect(listbox).toBeInTheDocument()

    // 在浮层中点击切换为“分钟”：7200 秒 -> 120 分钟
    fireEvent.click(within(listbox).getByRole('option', { name: '分钟' }))
    expect(numberInput).toHaveValue(120)

    // 修改数值为 30 分钟 -> 回调精确秒数 1800
    fireEvent.change(numberInput, { target: { value: '30' } })
    expect(onChange).toHaveBeenCalledWith(1800)
  })

  it('ByteQuotaInput 兼具 ABC Design Select 浮层与无障碍表单受控兼容契约', async () => {
    const onChange = vi.fn()
    const { container } = render(
      <ByteQuotaInput
        id="quota-bytes"
        locale="zh"
        aria-label="月度网络流量上限"
        unitAriaLabel="月度网络流量单位"
        value={1073741824}
        onChange={onChange}
      />,
    )

    const numberInput = screen.getByLabelText('月度网络流量上限')
    const unitControl = screen.getByLabelText('月度网络流量单位')
    expect(numberInput).toHaveValue(1)
    expect(unitControl).toHaveValue('GB')

    // 验证浮层交互切换为 MB：1 GB -> 1024 MB
    const trigger = container.querySelector('[data-slot="select-trigger"]') as HTMLElement
    expect(trigger).not.toBeNull()
    fireEvent.click(trigger)
    const listbox = await screen.findByRole('listbox')
    fireEvent.click(within(listbox).getByRole('option', { name: 'MB' }))
    expect(numberInput).toHaveValue(1024)

    // 同时兼容 fireEvent.change 单位切换为 GB
    fireEvent.change(unitControl, { target: { value: 'GB' } })
    expect(numberInput).toHaveValue(1)
  })
})
