import { arrayMove, isOrderDirty, reconcileStagedOrder } from '@abc-design/core'
import { act, fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../components/button/Button'
import { Input } from '../components/form/Input'
import { SortableList, SortableSplitEditor } from '../pro/SortableList'
import { AbcProvider } from '../provider/AbcProvider'

const mockToast = {
  success: vi.fn(),
  error: vi.fn(),
  info: vi.fn(),
  warning: vi.fn(),
}

function wrap(ui: React.ReactElement) {
  return render(
    <AbcProvider persist={false} toastAdapter={mockToast}>
      {ui}
    </AbcProvider>
  )
}

interface GatewayItem {
  id: string
  provider: string
  title: string
  enabled: boolean
}

const INITIAL_ITEMS: GatewayItem[] = [
  { id: 'stripe', provider: 'stripe', title: '银行卡支付', enabled: true },
  { id: 'paddle', provider: 'paddle', title: 'Paddle 支付', enabled: true },
  { id: 'offline', provider: 'offline', title: '线下付款', enabled: false },
]

describe('SortableList & SortableSplitEditor 紧凑拖拽与主从挤压编辑测试', () => {
  it('1. @abc-design/core sortable 纯函数：arrayMove、isOrderDirty 与 reconcileStagedOrder', () => {
    const moved = arrayMove(INITIAL_ITEMS, 0, 2)
    expect(moved.map((it) => it.id)).toEqual(['paddle', 'offline', 'stripe'])
    expect(isOrderDirty(INITIAL_ITEMS, moved, (it) => it.id)).toBe(true)
    expect(isOrderDirty(INITIAL_ITEMS, INITIAL_ITEMS.slice(), (it) => it.id)).toBe(false)

    // 当服务端更新了某项字段、删除 offline 并新增 crypto 时，保留既有暂存先后顺序并将新增项置于末尾
    const updatedServer: GatewayItem[] = [
      { id: 'stripe', provider: 'stripe', title: '信用卡支付（已改名）', enabled: true },
      { id: 'paddle', provider: 'paddle', title: 'Paddle 支付', enabled: true },
      { id: 'crypto', provider: 'crypto', title: '虚拟币支付', enabled: true },
    ]
    const reconciled = reconcileStagedOrder(updatedServer, ['paddle', 'offline', 'stripe'], (it) => it.id)
    expect(reconciled.map((it) => `${it.id}:${it.title}`)).toEqual([
      'paddle:Paddle 支付',
      'stripe:信用卡支付（已改名）',
      'crypto:虚拟币支付',
    ])
  })

  it('2. SortableList 支持键盘 Space 抓取 / ArrowDown 移动 / Esc 取消回滚及指针拖拽重排', () => {
    const onReorder = vi.fn()
    function Harness() {
      const [list, setList] = React.useState(INITIAL_ITEMS)
      return (
        <SortableList
          items={list}
          getItemLabel={(it) => it.title}
          onReorder={(next, meta) => {
            setList(next)
            onReorder(next.map((x) => x.id), meta)
          }}
          renderItem={(it) => <span>{it.title}</span>}
        />
      )
    }

    wrap(<Harness />)
    const handles = screen.getAllByRole('button', { name: /拖拽或按空格键调整/ })
    expect(handles).toHaveLength(3)

    // 键盘抓取第一项并向下移动一位，随后按 Escape 撤销回滚到抓取前顺序
    fireEvent.keyDown(handles[0], { key: ' ' })
    expect(handles[0]).toHaveAttribute('aria-pressed', 'true')

    fireEvent.keyDown(handles[0], { key: 'ArrowDown' })
    expect(onReorder).toHaveBeenLastCalledWith(
      ['paddle', 'stripe', 'offline'],
      expect.objectContaining({ fromIndex: 0, toIndex: 1, trigger: 'keyboard' })
    )

    const updatedHandles = screen.getAllByRole('button', { name: /拖拽或按空格键调整/ })
    fireEvent.keyDown(updatedHandles[1], { key: 'Escape' })
    expect(onReorder).toHaveBeenLastCalledWith(
      ['stripe', 'paddle', 'offline'],
      expect.objectContaining({ trigger: 'keyboard' })
    )

    // 指针拖拽第一项向下跨越两行（deltaY = 95px -> 移动至末尾）
    const freshHandles = screen.getAllByRole('button', { name: /拖拽或按空格键调整/ })
    act(() => {
      freshHandles[0].dispatchEvent(new MouseEvent('pointerdown', { bubbles: true, button: 0, clientY: 10 }))
      window.dispatchEvent(new MouseEvent('pointermove', { bubbles: true, clientY: 105 }))
      window.dispatchEvent(new MouseEvent('pointerup', { bubbles: true, clientY: 105 }))
    })
    expect(onReorder).toHaveBeenLastCalledWith(
      ['paddle', 'offline', 'stripe'],
      expect.objectContaining({ fromIndex: 0, toIndex: 2, trigger: 'pointer' })
    )
  })

  it('3. SortableSplitEditor 暂存新顺序显示“保存排序/重置顺序”，并联动右侧 SplitDetailPanel 编辑与新建', async () => {
    const onSaveOrder = vi.fn().mockResolvedValue(undefined)

    function WorkbenchHarness() {
      const [items, setItems] = React.useState(INITIAL_ITEMS)
      return (
        <SortableSplitEditor
          title="付款方式"
          description="每张卡片分别保存英文和中文"
          items={items}
          allowCreate
          showMoveButtons
          getItemLabel={(it) => it.title}
          onSaveOrder={async (ordered) => {
            await onSaveOrder(ordered.map((x) => x.id))
            setItems(ordered)
          }}
          renderItem={(it) => (
            <div>
              <span>{it.provider}</span> · <span>{it.title}</span>
            </div>
          )}
          renderEditor={({ mode, item, close }) =>
            mode === 'create' ? (
              <div>
                <Input aria-label="新建渠道名称" defaultValue="" />
                <Button onClick={close}>取消新建</Button>
              </div>
            ) : (
              <div>
                <Input aria-label="编辑渠道名称" defaultValue={item?.title ?? ''} />
              </div>
            )
          }
        />
      )
    }

    wrap(<WorkbenchHarness />)

    // 初始未选中任何卡片时，右侧详情面板不打开，且没有“保存排序”按钮
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: '保存排序' })).not.toBeInTheDocument()

    // 点击“下移 银行卡支付”后仅前端暂存顺序，顶栏出现“顺序未保存”、“重置顺序”与“保存排序”
    fireEvent.click(screen.getByRole('button', { name: '下移 银行卡支付' }))
    expect(onSaveOrder).not.toHaveBeenCalled()
    expect(screen.getByText('顺序未保存')).toBeInTheDocument()

    // 点击“重置顺序”恢复原状，待保存按钮消失
    fireEvent.click(screen.getByRole('button', { name: '重置顺序' }))
    expect(screen.queryByText('顺序未保存')).not.toBeInTheDocument()

    // 再次调整顺序并点击“保存排序”，统一提交持久化
    fireEvent.click(screen.getByRole('button', { name: '下移 银行卡支付' }))
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: '保存排序' }))
    })
    expect(onSaveOrder).toHaveBeenCalledWith(['paddle', 'stripe', 'offline'])
    expect(screen.queryByText('顺序未保存')).not.toBeInTheDocument()

    // 点击列表项在右侧挤出 SplitDetailPanel 编辑面板，并支持切换至“新建条目”模式
    fireEvent.click(screen.getByText('Paddle 支付'))
    expect(screen.getByLabelText('编辑渠道名称')).toHaveValue('Paddle 支付')

    fireEvent.click(screen.getByRole('button', { name: '新建条目' }))
    expect(screen.getByLabelText('新建渠道名称')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: '关闭编辑面板' }))
    expect(screen.queryByLabelText('新建渠道名称')).not.toBeInTheDocument()
  })
})
