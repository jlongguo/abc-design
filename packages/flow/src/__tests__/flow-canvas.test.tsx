import { fireEvent, render, screen } from '@testing-library/react'
import { Position, ReactFlowProvider } from '@xyflow/react'
import { describe, expect, it, vi } from 'vitest'
import {
  FlowCanvasSurface,
  FlowLabeledEdge,
  FlowViewportControls,
  TemplateVariableInput,
  type FlowLabeledEdgeData,
} from '../index'

describe('@abc-design/flow ReactFlow 套件组件', () => {
  it('FlowViewportControls 正确响应缩放、居中、整理、MiniMap 与主按钮回调', () => {
    const onZoomOut = vi.fn()
    const onZoomReset = vi.fn()
    const onZoomIn = vi.fn()
    const onFitView = vi.fn()
    const onAutoLayout = vi.fn()
    const onToggleMiniMap = vi.fn()
    const onAdd = vi.fn()
    const onExtra = vi.fn()

    render(
      <FlowViewportControls
        zoomPercent={110}
        showMiniMap={false}
        onZoomOut={onZoomOut}
        onZoomReset={onZoomReset}
        onZoomIn={onZoomIn}
        onFitView={onFitView}
        onAutoLayout={onAutoLayout}
        onToggleMiniMap={onToggleMiniMap}
        extraActions={[
          {
            key: 'note',
            icon: <span>N</span>,
            label: '添加便签',
            onClick: onExtra,
          },
        ]}
        primaryAction={{
          label: '添加步骤',
          onClick: onAdd,
        }}
      />,
    )

    expect(screen.getByText('110%')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('缩小画布'))
    fireEvent.click(screen.getByLabelText('重置画布缩放至 100%'))
    fireEvent.click(screen.getByLabelText('放大画布'))
    fireEvent.click(screen.getByLabelText('自适应居中视口'))
    fireEvent.click(screen.getByLabelText('一键整理排版'))
    fireEvent.click(screen.getByTestId('toggle-minimap-btn'))
    fireEvent.click(screen.getByLabelText('添加便签'))
    fireEvent.click(screen.getByLabelText('添加步骤'))

    expect(onZoomOut).toHaveBeenCalledTimes(1)
    expect(onZoomReset).toHaveBeenCalledTimes(1)
    expect(onZoomIn).toHaveBeenCalledTimes(1)
    expect(onFitView).toHaveBeenCalledTimes(1)
    expect(onAutoLayout).toHaveBeenCalledTimes(1)
    expect(onToggleMiniMap).toHaveBeenCalledTimes(1)
    expect(onExtra).toHaveBeenCalledTimes(1)
    expect(onAdd).toHaveBeenCalledTimes(1)
  })

  it('FlowCanvasSurface 渲染各方位插槽、加载遮罩与按需 MiniMap', () => {
    const { rerender } = render(
      <FlowCanvasSurface
        withProvider
        nodes={[{ id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Start' } }]}
        edges={[]}
        leftRailSlot={<div data-testid="rail-slot">Rail</div>}
        topCenterSlot={<div data-testid="env-slot">Env</div>}
        bottomLeftSlot={<div data-testid="controls-slot">Controls</div>}
        loading
        loadingText="正在初始化工作流..."
      />,
    )

    expect(screen.getByTestId('abc-flow-canvas-surface')).toBeInTheDocument()
    expect(screen.getByTestId('rail-slot')).toBeInTheDocument()
    expect(screen.getByTestId('env-slot')).toBeInTheDocument()
    expect(screen.getByTestId('controls-slot')).toBeInTheDocument()
    expect(screen.getByTestId('canvas-loading-overlay')).toHaveTextContent('正在初始化工作流...')

    rerender(
      <FlowCanvasSurface
        withProvider
        nodes={[{ id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Start' } }]}
        edges={[]}
        loading={false}
        showMiniMap
      />,
    )
    expect(screen.queryByTestId('canvas-loading-overlay')).not.toBeInTheDocument()
  })

  it('FlowLabeledEdge 渲染语义标签并支持中点自定义操作菜单开关', () => {
    const onInsert = vi.fn()
    const edgeData: FlowLabeledEdgeData = {
      tone: 'success',
      label: 'Found',
      testId: 'edge-found',
      showActionTrigger: true,
      actionAriaLabel: '插入节点',
      renderActionMenu: ({ close }) => (
        <button
          type="button"
          onClick={() => {
            onInsert()
            close()
          }}
        >
          插入点击动作
        </button>
      ),
    }

    render(
      <ReactFlowProvider>
        <svg>
          <FlowLabeledEdge
            id="e-1"
            source="n1"
            target="n2"
            sourceX={0}
            sourceY={0}
            targetX={200}
            targetY={0}
            sourcePosition={Position.Right}
            targetPosition={Position.Left}
            data={edgeData}
          />
        </svg>
      </ReactFlowProvider>,
    )

    expect(screen.getByTestId('edge-found')).toBeInTheDocument()
  })

  it('TemplateVariableInput 及其展开的 {} 变量选择器浮层均不包含 active:scale / abc-motion-control', () => {
    const forbidden = /(?:^|\s)(?:abc-motion-control|(?:[\w-]+:)*active:scale(?:-|\b))/
    const assertClean = (root: ParentNode) => {
      for (const el of Array.from(root.querySelectorAll('*'))) {
        const cls = typeof el.className === 'string' ? el.className : el.getAttribute('class') ?? ''
        expect(cls).not.toMatch(forbidden)
      }
    }
    const { container } = render(
      <TemplateVariableInput
        defaultValue="Hello {{user.name}}"
        allowClear
        variables={[{ key: 'user.name', label: '用户名' }]}
      />,
    )
    assertClean(container)
    fireEvent.click(container.querySelector('[data-template-picker-trigger]') as HTMLElement)
    assertClean(document.body)
  })

  it('局部暗色子树内的 TemplateVariableInput 浮层 Portal 自动继承 data-abc-theme="dark" 且控制胶囊消费语义变量', () => {
    const { container } = render(
      <div data-abc-theme="dark" data-playground-theme="dark" className="dark">
        <FlowViewportControls
          zoomPercent={95}
          onZoomOut={vi.fn()}
          onZoomReset={vi.fn()}
          onZoomIn={vi.fn()}
        />
        <TemplateVariableInput
          defaultValue="{{ctx.url}}"
          variables={[{ key: 'ctx.url', label: '目标链接' }]}
        />
      </div>,
    )

    const controls = screen.getByTestId('abc-flow-viewport-controls')
    expect(controls.className).toContain('bg-[var(--abc-bg-surface)]')
    expect(controls.className).not.toContain('bg-white')

    fireEvent.click(container.querySelector('[data-template-picker-trigger]') as HTMLElement)
    const popover = document.body.querySelector('[data-template-picker-popover="open"]')
    expect(popover).toHaveAttribute('data-abc-theme', 'dark')
    expect(popover).toHaveAttribute('data-playground-theme', 'dark')
    expect(popover?.className).toContain('dark')
  })
})
