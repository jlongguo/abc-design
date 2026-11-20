import { render, screen, fireEvent, within } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Pagination, CursorPagination } from '../components/display/FeedbackStates'

describe('Pagination 分页组件选择框组件化测试 (Reproduction-First)', () => {
  it('1. Pagination 应使用 ABC Design 的 Select 组件而非原生 HTML <select>', async () => {
    const handleSizeChange = vi.fn()
    const handleChange = vi.fn()

    const { container } = render(
      <Pagination
        total={100}
        pageSize={10}
        current={1}
        pageSizeOptions={[10, 20, 50, 100]}
        onSizeChange={handleSizeChange}
        onChange={handleChange}
      />
    )

    // 原生 <select> 标签不应存在
    const nativeSelect = container.querySelector('select')
    expect(nativeSelect).toBeNull()

    // 应该渲染带有 aria-label="每页条数" 的 ABC Design Select combobox 触发器
    const trigger = screen.getByRole('combobox', { name: '每页条数' })
    expect(trigger).toBeInTheDocument()
    expect(within(trigger).getByText('10 条/页')).toBeInTheDocument()

    // 点击触发器打开设计系统的下拉浮层
    fireEvent.click(trigger)
    const listbox = await screen.findByRole('listbox')
    expect(listbox).toBeInTheDocument()

    // 点击 20 条/页
    const option20 = within(listbox).getByText('20 条/页')
    fireEvent.click(option20)

    expect(handleSizeChange).toHaveBeenCalledWith(20)
    expect(handleChange).toHaveBeenCalledWith(1, 20)
  })

  it('2. CursorPagination 游标模式也应使用 ABC Design 的 Select 组件', async () => {
    const handleSizeChange = vi.fn()

    const { container } = render(
      <CursorPagination
        hasNext={true}
        hasPrev={false}
        loadedCount={30}
        pageSize={10}
        pageSizeOptions={[10, 20, 50]}
        onSizeChange={handleSizeChange}
      />
    )

    expect(container.querySelector('select')).toBeNull()
    const trigger = screen.getByRole('combobox', { name: '每页条数' })
    expect(trigger).toBeInTheDocument()

    fireEvent.click(trigger)
    const listbox = await screen.findByRole('listbox')
    const option50 = within(listbox).getByText('50 条/页')
    fireEvent.click(option50)

    expect(handleSizeChange).toHaveBeenCalledWith(50)
  })

  it('3. 英文语境下传入 rowsPerPageLabel="Rows per page" 自动渲染 "10 / page" 与英文快捷跳转', async () => {
    const handleSizeChange = vi.fn()

    render(
      <Pagination
        total={100}
        pageSize={10}
        current={1}
        rowsPerPageLabel="Rows per page"
        prevLabel="Previous"
        nextLabel="Next"
        pageSizeOptions={[10, 25, 50]}
        onSizeChange={handleSizeChange}
      />
    )

    const trigger = screen.getByRole('combobox', { name: 'Rows per page' })
    expect(within(trigger).getByText('10 / page')).toBeInTheDocument()
    expect(screen.getByText('Go to')).toBeInTheDocument()
    expect(screen.queryByText('跳至')).toBeNull()

    fireEvent.click(trigger)
    const listbox = await screen.findByRole('listbox')
    fireEvent.click(within(listbox).getByText('25 / page'))
    expect(handleSizeChange).toHaveBeenCalledWith(25)
  })
})
