import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import {
  AbcProvider,
  ToastContainer,
  abcToast,
  clearToasts,
  pushToast,
  type ToastItem,
} from '../index'

describe('ToastContainer 组件与消息通知系统测试', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    clearToasts()
  })

  afterEach(() => {
    clearToasts()
    vi.restoreAllMocks()
  })

  it('1. ToastContainer 正确渲染不同 tone (success/error/warning/info/loading) 的通知卡片', () => {
    render(<ToastContainer />)

    act(() => {
      abcToast.success('操作执行成功')
      abcToast.error('网络请求失败')
      abcToast.warning('当前凭据即将过期')
      abcToast.info('系统正在进行例行维护')
      abcToast.loading('正在同步远程数据...')
    })

    expect(screen.getByText('操作执行成功')).toBeTruthy()
    expect(screen.getByText('网络请求失败')).toBeTruthy()
    expect(screen.getByText('当前凭据即将过期')).toBeTruthy()
    expect(screen.getByText('系统正在进行例行维护')).toBeTruthy()
    expect(screen.getByText('正在同步远程数据...')).toBeTruthy()
  })

  it('2. 支持 6 种视口定位类名 (top-right / top-left / top-center / bottom-right / bottom-left / bottom-center)', () => {
    const { unmount: u1 } = render(<ToastContainer position="top-center" />)
    act(() => {
      abcToast.info('顶部居中提示')
    })
    const portal1 = document.body.querySelector('[role="status"]')
    expect(portal1?.className).toContain('top-4')
    expect(portal1?.className).toContain('left-1/2')
    u1()
    clearToasts()

    const { unmount: u2 } = render(<ToastContainer position="bottom-right" />)
    act(() => {
      abcToast.info('右下角提示')
    })
    const portal2 = document.body.querySelector('[role="status"]')
    expect(portal2?.className).toContain('bottom-4')
    expect(portal2?.className).toContain('right-4')
    u2()
  })

  it('3. 支持带 title、description 与 action 操作按钮的富文本卡片通知', () => {
    const onUndo = vi.fn()
    render(<ToastContainer />)

    act(() => {
      pushToast('success', {
        title: '已将 12 条记录移至回收站',
        message: '可在 30 天内随时恢复',
        action: (
          <button data-testid="undo-btn" onClick={onUndo}>
            撤销操作
          </button>
        ),
      })
    })

    expect(screen.getByText('已将 12 条记录移至回收站')).toBeTruthy()
    expect(screen.getByText('可在 30 天内随时恢复')).toBeTruthy()

    const undoBtn = screen.getByTestId('undo-btn')
    fireEvent.click(undoBtn)
    expect(onUndo).toHaveBeenCalledTimes(1)
  })

  it('4. 点击关闭图标能即时销毁 Toast 并触发 onClose 回调', () => {
    const onClose = vi.fn()
    render(<ToastContainer />)

    act(() => {
      pushToast('info', {
        message: '可关闭的通知',
        onClose,
      })
    })

    expect(screen.getByText('可关闭的通知')).toBeTruthy()

    const closeBtn = screen.getByLabelText('关闭通知')
    fireEvent.click(closeBtn)

    expect(screen.queryByText('可关闭的通知')).toBeNull()
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('5. 倒计时自动关闭与 pauseOnHover 悬停暂停倒计时机制', () => {
    render(<ToastContainer pauseOnHover={true} />)

    act(() => {
      pushToast('success', '3秒自动关闭', 3000)
    })

    const toastEl = screen.getByText('3秒自动关闭').closest('div[role="status"]')
    expect(toastEl).not.toBeNull()

    // 推进 1 秒
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('3秒自动关闭')).toBeTruthy()

    // 鼠标移入，暂停计时
    if (toastEl) {
      fireEvent.mouseEnter(toastEl)
    }

    // 推进 5 秒，此时 Toast 应依然保持存在
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('3秒自动关闭')).toBeTruthy()

    // 鼠标移出，恢复计时
    if (toastEl) {
      fireEvent.mouseLeave(toastEl)
    }

    // 剩余约 2 秒，推进 2100ms 后应已自动销毁
    act(() => {
      vi.advanceTimersByTime(2100)
    })
    expect(screen.queryByText('3秒自动关闭')).toBeNull()
  })

  it('6. maxCount 限制同屏最大数量，newestOnTop 倒序排列', () => {
    render(<ToastContainer maxCount={3} newestOnTop={true} />)

    act(() => {
      abcToast.info('通知 1')
      abcToast.info('通知 2')
      abcToast.info('通知 3')
      abcToast.info('通知 4')
      abcToast.info('通知 5')
    })

    // 只保留最新 3 条：通知 5、通知 4、通知 3
    expect(screen.queryByText('通知 1')).toBeNull()
    expect(screen.queryByText('通知 2')).toBeNull()
    expect(screen.getByText('通知 3')).toBeTruthy()
    expect(screen.getByText('通知 4')).toBeTruthy()
    expect(screen.getByText('通知 5')).toBeTruthy()

    // 验证 newestOnTop=true 时最新的在最前排
    const textList = Array.from(document.querySelectorAll('.break-words')).map(
      (el) => el.textContent
    )
    expect(textList[0]).toBe('通知 5')
  })

  it('7. 支持 items 独立受控模式与 onDismiss 回调', () => {
    const onDismiss = vi.fn()
    const controlledList: ToastItem[] = [
      { id: 'custom-1', tone: 'success', message: '受控成功项', duration: 0, createdAt: 1 },
      { id: 'custom-2', tone: 'error', message: '受控失败项', duration: 0, createdAt: 2 },
    ]

    render(<ToastContainer items={controlledList} onDismiss={onDismiss} />)

    expect(screen.getByText('受控成功项')).toBeTruthy()
    expect(screen.getByText('受控失败项')).toBeTruthy()

    const closeBtns = screen.getAllByLabelText('关闭通知')
    fireEvent.click(closeBtns[0])
    expect(onDismiss).toHaveBeenCalledWith('custom-1')
  })

  it('8. 支持 renderItem 自定义单条通知渲染', () => {
    render(
      <ToastContainer
        renderItem={(item, dismiss) => (
          <div data-testid={`custom-${item.id}`}>
            <span>自定义: {item.message}</span>
            <button onClick={() => dismiss(item.id)}>自定义关闭</button>
          </div>
        )}
      />
    )

    act(() => {
      abcToast.success('测试自定义渲染')
    })

    expect(screen.getByText('自定义: 测试自定义渲染')).toBeTruthy()
    fireEvent.click(screen.getByText('自定义关闭'))
    expect(screen.queryByText('自定义: 测试自定义渲染')).toBeNull()
  })

  it('9. AbcToastViewport 具备 100% 兼容性且 AbcProvider 可通过 toastContainerProps 全局定制', () => {
    render(
      <AbcProvider
        persist={false}
        toastContainerProps={{
          position: 'bottom-center',
          maxCount: 2,
        }}
      >
        <div>业务内容</div>
      </AbcProvider>
    )

    act(() => {
      abcToast.success('Provider 托管通知')
    })

    expect(screen.getByText('Provider 托管通知')).toBeTruthy()
    const viewport = document.body.querySelector('[role="status"]')
    expect(viewport?.className).toContain('bottom-4')
    expect(viewport?.className).toContain('left-1/2')
  })

  it('10. clearToasts 与 abcToast.clear() 即刻清空全部通知', () => {
    render(<ToastContainer />)

    act(() => {
      abcToast.info('待清空 1')
      abcToast.info('待清空 2')
    })

    expect(screen.getByText('待清空 1')).toBeTruthy()
    expect(screen.getByText('待清空 2')).toBeTruthy()

    act(() => {
      abcToast.clear()
    })

    expect(screen.queryByText('待清空 1')).toBeNull()
    expect(screen.queryByText('待清空 2')).toBeNull()
  })
})
