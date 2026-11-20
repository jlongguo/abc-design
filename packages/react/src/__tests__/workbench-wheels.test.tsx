import React from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import {
  ActionCard,
  Alert,
  BottomDockPanel,
  Button,
  CollapsibleCard,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ImagePreview,
  InputNumber,
  JsonCodeEditor,
  ProLogViewer,
  SegmentedControl,
  TemplateGalleryDrawer,
  type TemplateGalleryItem,
} from '../index'

const originalClipboard = navigator.clipboard

afterEach(() => {
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: originalClipboard,
  })
  window.localStorage.clear()
})

describe('Workbench 通用组件套件测试 (JsonCodeEditor / BottomDockPanel / TemplateGalleryDrawer)', () => {
  it('JsonCodeEditor: 实时校验、格式化/压缩、视图切换与 ref/aria-label 透传', () => {
    const ref = React.createRef<HTMLTextAreaElement>()
    const Harness = () => {
      const [val, setVal] = React.useState('{"a":1,"b":[2,3]}')
      return (
        <JsonCodeEditor
          ref={ref}
          value={val}
          onChange={setVal}
          title="Job Spec"
          ariaLabel="Browser Job JSON"
          extraViews={[
            {
              key: 'diff',
              label: '对比',
              render: (parsed) => (
                <div data-testid="extra-diff-view">{parsed ? 'parsed-ok' : 'invalid'}</div>
              ),
            },
          ]}
        />
      )
    }

    render(<Harness />)

    const textarea = screen.getByRole('textbox', { name: 'Browser Job JSON' })
    expect(ref.current).toBe(textarea)
    expect(screen.getByText('JSON 有效')).toBeTruthy()

    // 格式化（2 空格美化）
    fireEvent.click(screen.getByRole('button', { name: '格式化' }))
    expect((textarea as HTMLTextAreaElement).value).toContain('\n  "a": 1')

    // 压缩
    fireEvent.click(screen.getByRole('button', { name: '压缩' }))
    expect((textarea as HTMLTextAreaElement).value).toBe('{"a":1,"b":[2,3]}')

    // 切换至树视图
    fireEvent.click(screen.getByRole('button', { name: '树视图' }))
    expect(screen.queryByRole('textbox', { name: 'Browser Job JSON' })).toBeNull()
    expect(screen.getByRole('tree')).toBeTruthy()

    // 切换至扩展 Diff 视图
    fireEvent.click(screen.getByRole('button', { name: '对比' }))
    expect(screen.getByTestId('extra-diff-view').textContent).toBe('parsed-ok')

    // 切回源码并输入非法 JSON 触发告警条
    fireEvent.click(screen.getByRole('button', { name: '源码' }))
    const editor = screen.getByRole('textbox', { name: 'Browser Job JSON' })
    fireEvent.change(editor, { target: { value: '{broken' } })
    expect(screen.getByRole('alert')).toBeTruthy()
    expect(screen.getByRole('button', { name: '格式化' })).toHaveProperty('disabled', true)
  })

  it('BottomDockPanel: 折叠展开、高视图切换、键盘调高与选项卡自动展开', () => {
    const onTabChange = vi.fn()
    const Harness = () => {
      const [open, setOpen] = React.useState(true)
      const [tab, setTab] = React.useState<'logs' | 'data'>('logs')
      return (
        <BottomDockPanel
          open={open}
          onOpenChange={setOpen}
          defaultHeight={280}
          minHeight={160}
          maxHeight={600}
          tallHeight={520}
          storageKey="test_dock"
          ariaLabel="调试停靠坞"
          activeTab={tab}
          onTabChange={(next) => {
            setTab(next)
            onTabChange(next)
          }}
          tabs={[
            { value: 'logs', label: '步骤日志' },
            { value: 'data', label: '提取数据' },
          ]}
        >
          <div data-testid="dock-body">{tab}</div>
        </BottomDockPanel>
      )
    }

    render(<Harness />)

    const region = screen.getByRole('region', { name: '调试停靠坞' })
    expect(region.style.height).toBe('280px')

    // 键盘 ArrowUp 调高 +24px
    const separator = screen.getByRole('separator')
    fireEvent.keyDown(separator, { key: 'ArrowUp' })
    expect(region.style.height).toBe('304px')
    expect(window.localStorage.getItem('abc_bottom_dock_h_test_dock')).toBe('304')

    // 键盘 Enter 复位默认高度
    fireEvent.keyDown(separator, { key: 'Enter' })
    expect(region.style.height).toBe('280px')

    // 切换高视图
    fireEvent.click(screen.getByRole('button', { name: '高视图' }))
    expect(region.style.height).toBe('520px')

    // 收起后主体卸载，点击标签自动重新展开
    fireEvent.click(screen.getByRole('button', { name: '收起面板' }))
    expect(screen.queryByTestId('dock-body')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: '提取数据' }))
    expect(onTabChange).toHaveBeenCalledWith('data')
    expect(screen.getByTestId('dock-body').textContent).toBe('data')
  })

  it('BottomDockPanel keepMounted: 折叠时以 hidden 保活子树并支持 bodyId 关联', () => {
    render(
      <BottomDockPanel
        open={false}
        keepMounted
        bodyId="dock-preserved-body"
        ariaLabel="保活停靠坞"
      >
        <div data-testid="preserved-child">alive</div>
      </BottomDockPanel>
    )
    const body = document.getElementById('dock-preserved-body')
    expect(body).toBeTruthy()
    expect(body?.hidden).toBe(true)
    expect(screen.getByTestId('preserved-child').textContent).toBe('alive')
  })

  it('TemplateGalleryDrawer: 支持拼音检索、分类过滤、高亮选中与暗色主题透传', () => {
    const onSelect = vi.fn()
    const onDelete = vi.fn()
    const items: TemplateGalleryItem[] = [
      {
        id: 't1',
        title: '网页高清截屏',
        description: '全页截图与视口检查',
        category: 'capture',
        categoryLabel: '采集与截屏',
        tags: ['screenshot', 'full_page'],
        meta: ['3 步骤'],
      },
      {
        id: 't2',
        title: '电商价格巡检',
        description: '定期抓取价格并输出结构化列表',
        category: 'extract',
        categoryLabel: '结构化提取',
        isCustom: true,
        tags: ['extract_list'],
        meta: ['5 步骤'],
      },
    ]

    render(
      <TemplateGalleryDrawer
        open
        onClose={() => undefined}
        items={items}
        activeId="t1"
        onSelect={onSelect}
        onDelete={onDelete}
        data-abc-theme="dark"
      />
    )

    // 校验 Drawer Portal 继承局部暗色主题
    const dialog = screen.getByRole('dialog')
    expect(dialog.getAttribute('data-abc-theme')).toBe('dark')
    expect(dialog.className).toContain('dark')

    // 拼音首字母检索 "dsjg" -> 命中 "电商价格巡检"
    const searchInput = screen.getByPlaceholderText(/拼音搜索模板/)
    fireEvent.change(searchInput, { target: { value: 'dsjg' } })
    expect(screen.getByText('电商价格巡检')).toBeTruthy()
    expect(screen.queryByText('网页高清截屏')).toBeNull()

    // 删除自定义模板
    fireEvent.click(screen.getByRole('button', { name: '删除模板: 电商价格巡检' }))
    expect(onDelete).toHaveBeenCalledWith(items[1])

    // 应用模板
    fireEvent.click(screen.getByRole('button', { name: '使用模板' }))
    expect(onSelect).toHaveBeenCalledWith(items[1])
  })

  it('SegmentedControl 透传 ariaLabel/testId 且 ProLogViewer 支持 surface 变体', () => {
    const onChange = vi.fn()
    render(
      <div>
        <SegmentedControl
          value="canvas"
          onChange={onChange}
          options={[
            { value: 'canvas', label: '画布', ariaLabel: '画布编排模式', testId: 'seg-canvas' },
            { value: 'json', label: 'JSON', ariaLabel: 'JSON 源码', testId: 'seg-json' },
          ]}
        />
        <ProLogViewer variant="surface" logs={[{ seq: 1, level: 'info', message: 'ready' }]} />
      </div>
    )

    const jsonBtn = screen.getByRole('button', { name: 'JSON 源码' })
    expect(jsonBtn.getAttribute('data-testid')).toBe('seg-json')
    fireEvent.click(jsonBtn)
    expect(onChange).toHaveBeenCalledWith('json')

    const logViewer = document.querySelector('[data-slot="pro-log-viewer"]')
    expect(logViewer?.getAttribute('data-variant')).toBe('surface')
    expect(screen.getByText('ready')).toBeTruthy()
  })

  it('JsonCodeEditor 边界回归：行号对齐、多行缩进、扩展视图消失回退与外部校验徽标', () => {
    const onChange = vi.fn()
    const { rerender } = render(
      <JsonCodeEditor
        value={'{\n"a": 1,\n"b": 2\n}'}
        onChange={onChange}
        ariaLabel="Spec JSON"
        externalError="Missing url field"
        extraViews={[
          {
            key: 'diff',
            label: '基线对比',
            render: () => <div data-testid="custom-diff">diff-body</div>,
          },
        ]}
      />
    )

    // JSON 语法合法但存在外部 Schema 校验错时应展示“校验异常”而非“语法错误”
    expect(screen.getByText('校验异常')).toBeTruthy()

    // 行号槽与 textarea 共用完全一致的 text-xs leading-5 字号行高，避免长文本行号漂移
    const gutter = document.querySelector('[data-slot="json-code-gutter"]')
    const textarea = screen.getByRole('textbox', { name: 'Spec JSON' }) as HTMLTextAreaElement
    expect(gutter?.className).toContain('text-xs')
    expect(gutter?.className).toContain('leading-5')
    expect(textarea.className).toContain('text-xs')
    expect(textarea.className).toContain('leading-5')

    // 多行选中后按 Tab 应逐行增加 2 空格缩进，而不是覆盖删除所选内容
    textarea.setSelectionRange(2, 16)
    fireEvent.keyDown(textarea, { key: 'Tab' })
    expect(onChange).toHaveBeenCalledWith('{\n  "a": 1,\n  "b": 2\n}')

    // 切换到扩展 Diff 视图后，若父级移除了 extraViews，自动回退源码视图而非白屏
    fireEvent.click(screen.getByRole('button', { name: '基线对比' }))
    expect(screen.getByTestId('custom-diff')).toBeTruthy()
    rerender(
      <JsonCodeEditor
        value={'{\n  "a": 1\n}'}
        onChange={onChange}
        ariaLabel="Spec JSON"
        extraViews={[]}
      />
    )
    expect(screen.getByRole('textbox', { name: 'Spec JSON' })).toBeTruthy()
  })

  it('BottomDockPanel 边界回归：bodyHidden 不撑出空白高度，拖拽中卸载自动清理全局锁', () => {
    const { rerender, unmount } = render(
      <BottomDockPanel open bodyHidden defaultHeight={320} ariaLabel="空态停靠坞">
        <div>waiting</div>
      </BottomDockPanel>
    )
    const region = screen.getByRole('region', { name: '空态停靠坞' })
    expect(region.style.height).toBe('')
    expect(screen.queryByRole('separator')).toBeNull()

    // 恢复可见后开始拖拽并中途卸载，校验 document.body 样式被彻底清理
    rerender(
      <BottomDockPanel open bodyHidden={false} defaultHeight={320} ariaLabel="空态停靠坞">
        <div>loaded</div>
      </BottomDockPanel>
    )
    const sep = screen.getByRole('separator')
    fireEvent.mouseDown(sep, { clientY: 500 })
    expect(document.body.style.userSelect).toBe('none')
    expect(document.body.style.cursor).toBe('row-resize')

    unmount()
    expect(document.body.style.userSelect).toBe('')
    expect(document.body.style.cursor).toBe('')
  })

  it('TemplateGalleryDrawer 边界回归：删空选中分类自动回退全部，卡片整块可点击', () => {
    const onSelect = vi.fn()
    const items: TemplateGalleryItem[] = [
      { id: 'c1', title: '自定义模板', category: 'custom', categoryLabel: '自定义', isCustom: true },
      { id: 'o1', title: '官方模板', category: 'official', categoryLabel: '官方' },
    ]
    const { rerender } = render(
      <TemplateGalleryDrawer
        open
        onClose={() => undefined}
        items={items}
        onSelect={onSelect}
        labels={{ categoryFilterAriaLabel: 'Template category filter' }}
      />
    )
    expect(screen.getByRole('group', { name: 'Template category filter' })).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /自定义/ }))
    expect(screen.queryByText('官方模板')).toBeNull()

    // 删除最后一个自定义项后自动回退到“全部”，展示剩余官方模板
    rerender(
      <TemplateGalleryDrawer
        open
        onClose={() => undefined}
        items={[items[1]]}
        onSelect={onSelect}
        labels={{ categoryFilterAriaLabel: 'Template category filter' }}
      />
    )
    const officialCard = screen.getByText('官方模板')
    expect(officialCard).toBeTruthy()
    fireEvent.click(officialCard)
    expect(onSelect).toHaveBeenCalledWith(items[1])
  })

  it('ImagePreview 与 DropdownMenuContent 均自动继承局部暗色子树主题至 Portal', () => {
    render(
      <div data-abc-theme="dark">
        <ImagePreview src="data:image/png;base64,iVBORw0KGgo=" alt="暗色截图" />
        <DropdownMenu defaultOpen>
          <DropdownMenuTrigger>更多</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>复制链接</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )

    const menu = screen.getByRole('menu')
    expect(menu.getAttribute('data-abc-theme')).toBe('dark')
    expect(menu.className).toContain('dark')

    fireEvent.click(screen.getByRole('button', { name: '预览 暗色截图' }))
    const lightbox = document.querySelector('dialog[data-abc-theme="dark"]')
    expect(lightbox).toBeTruthy()
    expect(lightbox?.className).toContain('dark')
  })

  it('ImagePreview lightboxOnly 模式支持受控开关、缩放/旋转/重置/下载与暗色主题继承', () => {
    const onOpenChange = vi.fn()
    render(
      <div data-abc-theme="dark">
        <ImagePreview
          lightboxOnly
          open
          onOpenChange={onOpenChange}
          src="data:image/png;base64,iVBORw0KGgo="
          alt="全景截图"
          lightboxTitle="全景截图预览"
          lightboxSize="3xl"
          downloadable
          downloadFileName="viewport.png"
          downloadLabel="下载原图"
        />
      </div>
    )

    const lightbox = document.querySelector('dialog[data-abc-theme="dark"]')
    expect(lightbox).toBeTruthy()
    expect(screen.getByText('全景截图预览')).toBeTruthy()
    expect(screen.getByText('100%')).toBeTruthy()

    const resetBtn = screen.getByRole('button', { name: '重置视图' })
    expect(resetBtn).toHaveProperty('disabled', true)

    fireEvent.click(screen.getByRole('button', { name: '放大' }))
    expect(screen.getByText('120%')).toBeTruthy()
    expect(resetBtn).toHaveProperty('disabled', false)

    fireEvent.click(screen.getByRole('button', { name: '旋转' }))
    fireEvent.click(resetBtn)
    expect(screen.getByText('100%')).toBeTruthy()
    expect(resetBtn).toHaveProperty('disabled', true)

    const dlLink = screen.getByRole('link', { name: '下载原图' })
    expect(dlLink.getAttribute('download')).toBe('viewport.png')
  })

  it('ActionCard / Alert / CollapsibleCard / InputNumber 透传语义属性并隔离次要交互', () => {
    const onCardClick = vi.fn()
    const onExtraClick = vi.fn()
    const onNumChange = vi.fn()

    render(
      <div>
        <ActionCard
          data-testid="card-root"
          title="代理模块"
          onClick={onCardClick}
          extra={
            <Button type="button" size="xs" onClick={onExtraClick}>
              展开
            </Button>
          }
        >
          <span>US Residential</span>
        </ActionCard>
        <Alert data-testid="status-alert" role="status" tone="info" title="编排提示">
          已同步至运行中心
        </Alert>
        <CollapsibleCard title="高级选项" defaultOpen={false} toggleTestId="adv-toggle">
          <span>内部参数</span>
        </CollapsibleCard>
        <InputNumber
          aria-label="等待时长"
          data-draft-field="milliseconds"
          value={500}
          step={100}
          min={0}
          suffix="ms"
          onChange={onNumChange}
        />
      </div>
    )

    // 直接点击 article（jsdom 测试场景）应触发一次 onCardClick
    fireEvent.click(screen.getByTestId('card-root'))
    expect(onCardClick).toHaveBeenCalledTimes(1)

    // 点击 title 按钮仍只触发一次，不重复冒泡
    fireEvent.click(screen.getByRole('button', { name: '代理模块' }))
    expect(onCardClick).toHaveBeenCalledTimes(2)

    // 点击 extra 按钮不应触发整卡点击
    fireEvent.click(screen.getByRole('button', { name: '展开' }))
    expect(onExtraClick).toHaveBeenCalledTimes(1)
    expect(onCardClick).toHaveBeenCalledTimes(2)

    // Alert 支持 data-testid 与自定义 role
    const alert = screen.getByTestId('status-alert')
    expect(alert.getAttribute('role')).toBe('status')

    // CollapsibleCard 支持 toggleTestId
    const toggle = screen.getByTestId('adv-toggle')
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')

    // InputNumber 支持 aria-label / data-draft-field / suffix 与步进
    const numInput = screen.getByLabelText('等待时长')
    expect(numInput.getAttribute('data-draft-field')).toBe('milliseconds')
    expect(screen.getByText('ms')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: '增加数值' }))
    expect(onNumChange).toHaveBeenCalledWith(600)
  })

  it('InputNumber 聚焦逐字输入时不提前截断或强制回弹 min，失焦时再归位且保留高精小数', () => {
    function ControlledWidthHarness() {
      const [width, setWidth] = React.useState(1280)
      const [lat, setLat] = React.useState(37.7749)
      return (
        <div>
          <InputNumber
            aria-label="视口宽度"
            min={320}
            max={3840}
            step={10}
            suffix="px"
            value={width}
            onChange={(v) => setWidth(Math.max(320, Math.min(3840, v ?? 1280)))}
          />
          <InputNumber
            aria-label="地理纬度"
            min={-90}
            max={90}
            step={0.0001}
            value={lat}
            onChange={(v) => setLat(v ?? 0)}
          />
        </div>
      )
    }

    render(<ControlledWidthHarness />)
    const widthInput = screen.getByLabelText('视口宽度') as HTMLInputElement
    fireEvent.focus(widthInput)

    // 清空后聚焦态不应被父级 fallback 立即强制回弹为 1280
    fireEvent.change(widthInput, { target: { value: '' } })
    expect(widthInput.value).toBe('')

    // 输入首字符 "1"（小于 min=320）不应在输入中被强行改写为 "320"
    fireEvent.change(widthInput, { target: { value: '1' } })
    expect(widthInput.value).toBe('1')

    // 继续输入 "1440" 后应正常落入合法区间并同步状态
    fireEvent.change(widthInput, { target: { value: '1440' } })
    expect(widthInput.value).toBe('1440')

    // 输入越界值 "99" 后失焦，才应钳制归位为 min=320
    fireEvent.change(widthInput, { target: { value: '99' } })
    expect(widthInput.value).toBe('99')
    fireEvent.blur(widthInput)
    expect(widthInput.value).toBe('320')

    // 直接键入比 step(0.0001) 更高精度的小数不应被 toFixed(4) 截断
    const latInput = screen.getByLabelText('地理纬度') as HTMLInputElement
    fireEvent.focus(latInput)
    fireEvent.change(latInput, { target: { value: '37.774929' } })
    fireEvent.blur(latInput)
    expect(latInput.value).toBe('37.774929')
  })

  it('ActionCard extra 区域仅隔离交互元素，点击非交互装饰图标仍可触发整卡点击', () => {
    const onCardClick = vi.fn()
    render(
      <ActionCard
        data-testid="env-card"
        title="IP 代理"
        onClick={onCardClick}
        extra={<span data-testid="decorative-chevron">▼</span>}
      />
    )
    fireEvent.click(screen.getByTestId('decorative-chevron'))
    expect(onCardClick).toHaveBeenCalledTimes(1)
  })

  it('ImagePreview 支持 preserveTransformOnSrcChange 实时帧缩放保持与自定义多语言工具栏文案', () => {
    const { rerender } = render(
      <ImagePreview
        lightboxOnly
        open
        preserveTransformOnSrcChange
        src="data:image/png;base64,FRAME_1"
        alt="Live frame"
        labels={{
          zoomOut: 'Zoom out',
          zoomIn: 'Zoom in',
          rotate: 'Rotate',
          reset: 'Reset',
          resetAriaLabel: 'Reset view',
        }}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Zoom in' }))
    expect(screen.getByText('120%')).toBeTruthy()

    // 实时流推送新帧 src 变更时，保留用户当前缩放比例不重置回 100%
    rerender(
      <ImagePreview
        lightboxOnly
        open
        preserveTransformOnSrcChange
        src="data:image/png;base64,FRAME_2"
        alt="Live frame"
        labels={{
          zoomOut: 'Zoom out',
          zoomIn: 'Zoom in',
          rotate: 'Rotate',
          reset: 'Reset',
          resetAriaLabel: 'Reset view',
        }}
      />
    )
    expect(screen.getByText('120%')).toBeTruthy()
  })
})
