import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import {
  AbcProvider,
  BrandIcon,
  ErrorBoundary,
  KeepAliveContainer,
  PageTransition,
  TabErrorBoundary,
  TenantIcon,
  TopProgressBar,
  abcProgress,
  abcUiClasses,
  buttonClass,
  panelClass,
} from '../index'

const CrashChild: React.FC<{ shouldThrow?: boolean; label?: string }> = ({
  shouldThrow,
  label = '正常业务页面',
}) => {
  if (shouldThrow) {
    throw new Error('模拟渲染期异常')
  }
  return <div>{label}</div>
}

describe('ABC Design 通用高阶交互组件集 (ErrorBoundary / BrandIcon / KeepAlive / Progress / uiClasses)', () => {
  it('1. TabErrorBoundary 与 ErrorBoundary 精准捕获异常、支持折叠堆栈排查、原地重载与关闭页签', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const onReload = vi.fn()
    const onClose = vi.fn()
    const onNavigateHome = vi.fn()

    render(
      <TabErrorBoundary
        path="/system/menu"
        onReload={onReload}
        onClose={onClose}
        onNavigateHome={onNavigateHome}
      >
        <CrashChild shouldThrow />
      </TabErrorBoundary>
    )

    expect(screen.getByText('当前页面渲染发生异常')).toBeInTheDocument()
    expect(screen.getByText('/system/menu')).toBeInTheDocument()

    // 展开技术排查详情可见错误消息
    fireEvent.click(screen.getByText('展开技术排查详情'))
    expect(screen.getByText(/模拟渲染期异常/)).toBeInTheDocument()

    fireEvent.click(screen.getByText('关闭此页签'))
    expect(onClose).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('返回仪表盘'))
    expect(onNavigateHome).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('重新加载本页'))
    expect(onReload).toHaveBeenCalledTimes(1)

    // 全局 ErrorBoundary 支持自定义 fallback 渲染函数与 reset
    const globalReload = vi.fn()
    render(
      <ErrorBoundary variant="panel" onReload={globalReload}>
        <CrashChild shouldThrow />
      </ErrorBoundary>
    )
    expect(screen.getByText('页面运行遇到异常')).toBeInTheDocument()
    fireEvent.click(screen.getByText('刷新页面'))
    expect(globalReload).toHaveBeenCalledTimes(1)

    spy.mockRestore()
  })

  it('2. BrandIcon / TenantIcon 支持图片模式加载失败自动降级、编码切换重置错误态与 CSS Mask 矢量着色', () => {
    const presets = {
      bytesflows: {
        mode: 'image' as const,
        src: 'https://bytesflows.com/icon.png',
        alt: 'BytesFlows',
      },
      ipapex: {
        mode: 'mask' as const,
        src: 'https://ipapex.com/icons/icon.svg',
      },
    }

    const { container, rerender } = render(
      <TenantIcon tenantCode="bytesflows" presets={presets} className="h-5 w-5" />
    )

    const img = screen.getByAltText('BytesFlows') as HTMLImageElement
    expect(img).toBeInTheDocument()

    // 模拟图片加载失败后优雅回退到 SVG 图标
    fireEvent.error(img)
    expect(screen.queryByAltText('BytesFlows')).toBeNull()
    expect(container.querySelector('svg')).not.toBeNull()

    // 切换到 mask 模式预设
    rerender(<BrandIcon code="ipapex" presets={presets} className="h-5 w-5" />)
    const maskSpan = container.querySelector('span[aria-hidden="true"]') as HTMLElement
    expect(maskSpan).not.toBeNull()
    expect(maskSpan.style.maskImage).toContain('https://ipapex.com/icons/icon.svg')

    // 未命中预设时渲染通用兜底图标
    rerender(<BrandIcon code="unknown-tenant" presets={presets} />)
    expect(container.querySelector('svg')).not.toBeNull()
  })

  it('3. KeepAliveContainer 支持实时滚动位置记忆还原与单页签独立异常隔离', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const scroller = document.createElement('div')
    const scrollRef = { current: scroller }

    const { rerender } = render(
      <KeepAliveContainer
        activeKey="/tab-a"
        scrollContainerRef={scrollRef}
        isolateError
      >
        <CrashChild shouldThrow={false} label="页签A正常内容" />
      </KeepAliveContainer>
    )

    // 在 /tab-a 滚动到 240px 并派发实时 scroll 事件
    scroller.scrollTop = 240
    fireEvent.scroll(scroller)

    // 切换到 /tab-b（模拟该页签内部抛错），验证不会击穿已缓存的 /tab-a
    rerender(
      <KeepAliveContainer
        activeKey="/tab-b"
        scrollContainerRef={scrollRef}
        isolateError
      >
        <CrashChild shouldThrow label="页签B崩溃" />
      </KeepAliveContainer>
    )
    expect(scroller.scrollTop).toBe(0)
    expect(screen.getByText('当前页面渲染发生异常')).toBeInTheDocument()
    expect(screen.getByText('页签A正常内容')).toBeInTheDocument()

    // 切回 /tab-a 时，scrollTop 精准复原为 240，且同一 activeKey 的最新受控 props 实时同步不冻结
    rerender(
      <KeepAliveContainer
        activeKey="/tab-a"
        scrollContainerRef={scrollRef}
        isolateError
      >
        <CrashChild shouldThrow={false} label="页签A受控属性已实时刷新" />
      </KeepAliveContainer>
    )
    expect(scroller.scrollTop).toBe(240)
    expect(screen.getByText('页签A受控属性已实时刷新')).toBeInTheDocument()

    spy.mockRestore()
  })

  it('4. TopProgressBar / abcProgress / PageTransition 与 uiClasses 语义类名工作正常', () => {
    vi.useFakeTimers()

    const { rerender } = render(
      <AbcProvider persist={false}>
        <TopProgressBar />
        <PageTransition activeKey="/p1" showProgress={false}>
          <div className={panelClass}>
            <button type="button" className={buttonClass}>
              动作按钮
            </button>
          </div>
        </PageTransition>
      </AbcProvider>
    )

    expect(abcUiClasses.panel).toBe(panelClass)
    expect(screen.queryByRole('progressbar')).toBeNull()

    // 命令式启动与完成进度条
    act(() => {
      abcProgress.start()
    })
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    act(() => {
      abcProgress.done()
      vi.advanceTimersByTime(300)
    })
    expect(screen.queryByRole('progressbar')).toBeNull()

    // 路由 activeKey 变化触发进度条（首屏跳过，二次切换显示）
    rerender(
      <AbcProvider persist={false}>
        <PageTransition activeKey="/p1">
          <div>P1</div>
        </PageTransition>
      </AbcProvider>
    )
    rerender(
      <AbcProvider persist={false}>
        <PageTransition activeKey="/p2">
          <div>P2</div>
        </PageTransition>
      </AbcProvider>
    )
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(500)
    })
    vi.useRealTimers()
  })
})
