import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FilterPillGroup } from '../pro/FilterToolbar'

describe('FilterPillGroup', () => {
  it('supports single-select and xs size variant', () => {
    function Harness() {
      const [status, setStatus] = React.useState<'all' | 'active' | 'disabled'>('all')
      return (
        <FilterPillGroup
          size="xs"
          aria-label="状态筛选"
          value={status}
          onValueChange={setStatus}
          options={[
            { value: 'all', label: '全部', count: 5 },
            { value: 'active', label: '启用中', count: 3 },
            { value: 'disabled', label: '已停用', count: 2 },
          ]}
        />
      )
    }

    render(<Harness />)
    const allBtn = screen.getByRole('button', { name: /全部/ })
    const activeBtn = screen.getByRole('button', { name: /启用中/ })
    expect(allBtn).toHaveAttribute('aria-pressed', 'true')
    expect(activeBtn).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(activeBtn)
    expect(allBtn).toHaveAttribute('aria-pressed', 'false')
    expect(activeBtn).toHaveAttribute('aria-pressed', 'true')
  })

  it('supports multiple selection mode for tag/mark toggles', () => {
    function MultiHarness() {
      const [marks, setMarks] = React.useState<string[]>(['visa'])
      return (
        <FilterPillGroup
          multiple
          size="xs"
          aria-label="支付图标标识"
          value={marks}
          onValueChange={setMarks}
          options={[
            { value: 'visa', label: 'Visa' },
            { value: 'mastercard', label: 'Mastercard' },
            { value: 'usdt', label: 'USDT' },
          ]}
        />
      )
    }

    render(<MultiHarness />)
    const visaBtn = screen.getByRole('button', { name: 'Visa' })
    const mcBtn = screen.getByRole('button', { name: 'Mastercard' })
    expect(visaBtn).toHaveAttribute('aria-pressed', 'true')
    expect(mcBtn).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(mcBtn)
    expect(visaBtn).toHaveAttribute('aria-pressed', 'true')
    expect(mcBtn).toHaveAttribute('aria-pressed', 'true')

    fireEvent.click(visaBtn)
    expect(visaBtn).toHaveAttribute('aria-pressed', 'false')
    expect(mcBtn).toHaveAttribute('aria-pressed', 'true')
  })
})
