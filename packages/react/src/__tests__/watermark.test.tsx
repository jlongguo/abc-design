import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Watermark } from '../components/feedback/Watermark'

describe('Watermark 防篡改水印与死循环防御测试', () => {
  beforeEach(() => {
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      scale: vi.fn(),
      translate: vi.fn(),
      rotate: vi.fn(),
      fillText: vi.fn(),
    }) as any
    HTMLCanvasElement.prototype.toDataURL = vi
      .fn()
      .mockReturnValue('data:image/png;base64,mockWatermarkTile')
  })

  it('1. 正常启用时在容器根节点挂载水印 overlay', () => {
    const { container } = render(
      <Watermark content="ABC Design Security">
        <div data-testid="content">受保护的业务内容</div>
      </Watermark>
    )

    const overlay = container.querySelector('[data-watermark-overlay="true"]') as HTMLDivElement
    expect(overlay).toBeInTheDocument()
    expect(overlay.style.pointerEvents).toBe('none')
    expect(overlay.style.backgroundImage).toContain('data:image/png;base64,mockWatermarkTile')
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  it('2. 当 enabled=false 时不渲染水印 overlay 节点', () => {
    const { container } = render(
      <Watermark content="ABC Design Security" enabled={false}>
        <div data-testid="content">普通内容</div>
      </Watermark>
    )

    const overlay = container.querySelector('[data-watermark-overlay="true"]')
    expect(overlay).toBeNull()
  })

  it('3. 子节点内部频繁发生 style/class 变更时不会引起 MutationObserver 微任务风暴或死循环', async () => {
    const { container } = render(
      <Watermark content="ABC Design Security">
        <button id="test-btn" style={{ color: 'red' }}>
          内部交互按钮
        </button>
      </Watermark>
    )

    const btn = container.querySelector('#test-btn') as HTMLButtonElement
    expect(btn).toBeInTheDocument()

    // 模拟子组件高频样式变更（如动画、Hover、Popover、表单等）
    act(() => {
      for (let i = 0; i < 50; i++) {
        btn.setAttribute('style', `color: ${i % 2 === 0 ? 'blue' : 'green'}; font-size: ${12 + i}px;`)
        btn.className = `btn-state-${i}`
      }
    })

    // 等待微任务处理完毕
    await new Promise((resolve) => setTimeout(resolve, 50))

    const overlay = container.querySelector('[data-watermark-overlay="true"]')
    expect(overlay).toBeInTheDocument()
    // 水印 overlay 依然完好，未被无限重建
    expect(overlay?.getAttribute('style')).toContain('background-image')
  })

  it('4. 当水印节点被外部恶意篡改隐藏或移除时能自愈恢复', async () => {
    const { container } = render(
      <Watermark content="ABC Design Security">
        <div>受保护区域</div>
      </Watermark>
    )

    let overlay = container.querySelector('[data-watermark-overlay="true"]') as HTMLDivElement
    expect(overlay).toBeInTheDocument()

    // 场景 A: 恶意修改 style 试图隐藏
    act(() => {
      overlay.setAttribute('style', 'display: none !important;')
    })

    await new Promise((resolve) => setTimeout(resolve, 50))
    overlay = container.querySelector('[data-watermark-overlay="true"]') as HTMLDivElement
    // 自愈恢复为正常样式，display: none 被覆盖纠正
    expect(overlay.getAttribute('style')).toContain('position: absolute')
    expect(overlay.getAttribute('style')).toContain('background-image')

    // 场景 B: 恶意从 DOM 树移除
    act(() => {
      overlay.remove()
    })

    await new Promise((resolve) => setTimeout(resolve, 50))
    const restoredOverlay = container.querySelector('[data-watermark-overlay="true"]')
    expect(restoredOverlay).toBeInTheDocument()
  })
})
