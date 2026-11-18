import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Button from '../components/button/Button'
import { ProTable } from '../pro/ProTable'

describe('ProTable 操作列随宽度自适应缩略（最小仅展示三个点，随宽度逐一展开）', () => {
  let resizeCallbacks: Array<(entries: ResizeObserverEntry[]) => void> = []
  let currentContainerWidth = 240
  const OriginalResizeObserver = globalThis.ResizeObserver

  beforeEach(() => {
    resizeCallbacks = []
    currentContainerWidth = 240

    vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockImplementation(function (
      this: HTMLElement
    ) {
      if (this.hasAttribute('data-slot') && this.getAttribute('data-slot') === 'row-actions-overflow') {
        return currentContainerWidth
      }
      return 0
    })

    vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockImplementation(function (
      this: HTMLElement
    ) {
      if (this.hasAttribute('data-action-item')) {
        const text = this.textContent ?? ''
        if (text.includes('吊销登录态')) return 76
        return 44
      }
      return 0
    })

    globalThis.ResizeObserver = class MockResizeObserver {
      private cb: (entries: ResizeObserverEntry[]) => void
      constructor(cb: (entries: ResizeObserverEntry[]) => void) {
        this.cb = cb
        resizeCallbacks.push(cb)
      }
      observe() {}
      unobserve() {}
      disconnect() {
        resizeCallbacks = resizeCallbacks.filter((fn) => fn !== this.cb)
      }
    } as unknown as typeof ResizeObserver
  })

  afterEach(() => {
    globalThis.ResizeObserver = OriginalResizeObserver
    vi.restoreAllMocks()
  })

  const triggerWidthChange = (nextWidth: number) => {
    currentContainerWidth = nextWidth
    act(() => {
      resizeCallbacks.forEach((cb) => cb([]))
    })
  }

  it('1. 自定义 key="actions" 渲染多按钮时：宽列全量展示 -> 随列宽收窄逐一收纳至三个点 -> 最小宽度仅展示三个点且下拉点击正常触发', () => {
    const onLimit = vi.fn()
    const onRevoke = vi.fn()
    const onSuspend = vi.fn()

    currentContainerWidth = 240
    render(
      <ProTable
        rowKey="id"
        hidePagination
        columnSettingsEnabled={false}
        dataSource={[{ id: 'u1', name: 'Alice' }]}
        columns={[
          { key: 'name', title: '客户', dataIndex: 'name' },
          {
            key: 'actions',
            title: '操作',
            align: 'right',
            render: () => (
              <div className="flex justify-end gap-1">
                <Button size="sm" variant="ghost" onClick={onLimit}>
                  配额
                </Button>
                <Button size="sm" variant="ghost" onClick={onRevoke}>
                  吊销登录态
                </Button>
                <Button size="sm" variant="ghost" className="text-destructive" onClick={onSuspend}>
                  冻结
                </Button>
              </div>
            ),
          },
        ]}
      />
    )

    // 宽度充足 (240px >= 44 + 4 + 76 + 4 + 44 = 172px)：3 个按钮全部内联展示，不显示三个点
    expect(screen.getByRole('button', { name: '配额' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '吊销登录态' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '冻结' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: '更多操作' })).toBeNull()

    // 收窄至 160px（可容纳前 2 项 44 + 4 + 76 + 4 + 28 = 156px）：展示“配额 + 吊销登录态 + ...”
    triggerWidthChange(160)
    expect(screen.getByRole('button', { name: '配额' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '吊销登录态' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: '冻结' })).toBeNull()
    expect(screen.getByRole('button', { name: '更多操作' })).toBeInTheDocument()

    // 继续收窄至 90px（仅容纳第 1 项 44 + 4 + 28 = 76px）：展示“配额 + ...”
    triggerWidthChange(90)
    expect(screen.getByRole('button', { name: '配额' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: '吊销登录态' })).toBeNull()
    expect(screen.queryByRole('button', { name: '冻结' })).toBeNull()
    expect(screen.getByRole('button', { name: '更多操作' })).toBeInTheDocument()

    // 最小宽度 48px（连 1 项 + 三个点 76px 都放不下）：仅展示三个点按钮，点击下拉可触发全部动作
    triggerWidthChange(48)
    expect(screen.queryByRole('button', { name: '配额' })).toBeNull()
    expect(screen.queryByRole('button', { name: '吊销登录态' })).toBeNull()
    expect(screen.queryByRole('button', { name: '冻结' })).toBeNull()
    const moreBtn = screen.getByRole('button', { name: '更多操作' })
    expect(moreBtn).toBeInTheDocument()

    fireEvent.click(moreBtn)
    const suspendMenuItem = screen.getByRole('menuitem', { name: '冻结' })
    fireEvent.click(suspendMenuItem)
    expect(onSuspend).toHaveBeenCalledTimes(1)

    // 重新拉宽回 240px：自动逐一恢复为全量展示且隐藏三个点
    triggerWidthChange(240)
    expect(screen.getByRole('button', { name: '配额' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '吊销登录态' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '冻结' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: '更多操作' })).toBeNull()
  })

  it('2. 声明式 rowActions（4 个操作项）在列宽充裕时可全量展示，极限窄宽时缩略为仅三个点', () => {
    currentContainerWidth = 48
    render(
      <ProTable
        rowKey="id"
        hidePagination
        columnSettingsEnabled={false}
        dataSource={[{ id: 'n1', name: 'Node-1' }]}
        columns={[{ key: 'name', title: '节点', dataIndex: 'name' }]}
        rowActions={[
          { key: 'view', label: '侧边检视', onClick: () => {} },
          { key: 'quota', label: '配额', onClick: () => {} },
          { key: 'revoke', label: '吊销登录态', onClick: () => {} },
          { key: 'freeze', label: '冻结', danger: true, onClick: () => {} },
        ]}
      />
    )

    // 48px 极限窄宽：仅展示三个点
    expect(screen.queryByRole('button', { name: '侧边检视' })).toBeNull()
    expect(screen.getByRole('button', { name: '更多操作' })).toBeInTheDocument()

    // 拉宽至 300px：4 个 rowActions 全部展开内联展示
    triggerWidthChange(300)
    expect(screen.getByRole('button', { name: '侧边检视' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '配额' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '吊销登录态' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '冻结' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: '更多操作' })).toBeNull()
  })
})
