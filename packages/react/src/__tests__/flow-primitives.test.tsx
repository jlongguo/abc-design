import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  FloatingIconRail,
  FlowNodeCard,
  FlowNodeToolbar,
  FlowSectionFrame,
  TemplateVariableInput,
  extractTemplateVariables,
  insertTemplateVariableAt,
  removeTemplateVariableToken,
  type FloatingIconRailItem,
  type TemplateVariableOption,
} from '../index'

const RAIL_ITEMS: FloatingIconRailItem[] = [
  {
    key: 'popular',
    label: 'Most used',
    icon: <span data-testid="icon-star">★</span>,
    content: <div data-testid="flyout-popular">常用组件列表</div>,
  },
  {
    key: 'flow',
    label: 'Flow',
    icon: <span data-testid="icon-flow">⇄</span>,
    badge: 3,
    content: <div data-testid="flyout-flow">流程分支组件</div>,
  },
  {
    key: 'disabled-cat',
    label: 'Disabled',
    icon: <span>⊘</span>,
    disabled: true,
    content: <div>不可访问</div>,
  },
]

const SAMPLE_VARIABLES: TemplateVariableOption[] = [
  {
    key: 'lastUserText',
    label: '最近用户输入',
    group: 'Context',
    type: 'string',
    description: '用户最后一条消息文本',
    sampleValue: 'How to reset?',
  },
  {
    key: 'kb_reply',
    label: '知识库回复',
    group: 'Step Outputs',
    type: 'string',
    description: '检索命中后的回复正文',
  },
  {
    key: 'kb_source',
    label: '来源链接',
    group: 'Step Outputs',
    type: 'url',
    sampleValue: 'https://docs.example.com',
  },
  {
    key: 'locked_secret',
    label: '受限凭据',
    group: 'Secrets',
    disabled: true,
  },
]

describe('Flow 画布通用原语套件 (Wave 3.1)', () => {
  it('1. 模板变量纯函数正确解析多变量、按偏移定向移除与光标处插值', () => {
    const tokens = extractTemplateVariables('Hello {{ user.name }} - {{kb_reply}} - {{kb_reply}}')
    expect(tokens).toHaveLength(3)
    expect(tokens[0]).toMatchObject({ key: 'user.name', raw: '{{ user.name }}', occurrenceIndex: 0 })
    expect(tokens[1]).toMatchObject({ key: 'kb_reply', occurrenceIndex: 1 })
    expect(tokens[2]).toMatchObject({ key: 'kb_reply', occurrenceIndex: 2 })

    // 移除第 2 个 {{kb_reply}} 不影响第 1 个
    const afterRemove = removeTemplateVariableToken(
      'Hello {{ user.name }} - {{kb_reply}} - {{kb_reply}}',
      tokens[2]
    )
    expect(afterRemove).toBe('Hello {{ user.name }} - {{kb_reply}} - ')

    // 在选区中间插值
    const inserted = insertTemplateVariableAt('Query:  now', '{{lastUserText}}', 7, 7)
    expect(inserted).toEqual({
      nextValue: 'Query: {{lastUserText}} now',
      nextCaret: 23,
    })

    // 替换整段值
    const replaced = insertTemplateVariableAt('old', '{{kb_source}}', 0, 3, true)
    expect(replaced).toEqual({
      nextValue: '{{kb_source}}',
      nextCaret: 13,
    })
  })

  it('2. FloatingIconRail 支持点击展开/切换/收起 Flyout、外部点击与 Esc 收起及禁用项拦截', () => {
    const onActiveKeyChange = vi.fn()
    render(
      <div>
        <button type="button" data-testid="outside-btn">
          外部区域
        </button>
        <FloatingIconRail
          items={RAIL_ITEMS}
          onActiveKeyChange={onActiveKeyChange}
          side="left"
          footer={<div data-testid="rail-footer">设置</div>}
        />
      </div>
    )

    expect(screen.getByTestId('rail-footer')).toBeInTheDocument()
    expect(screen.queryByTestId('flyout-popular')).toBeNull()

    // 点击第一项展开 Flyout
    fireEvent.click(screen.getByRole('button', { name: /Most used/ }))
    expect(onActiveKeyChange).toHaveBeenLastCalledWith('popular')
    expect(screen.getByTestId('flyout-popular')).toBeInTheDocument()

    // 直接切换到第二项
    fireEvent.click(screen.getByRole('button', { name: /Flow/ }))
    expect(onActiveKeyChange).toHaveBeenLastCalledWith('flow')
    expect(screen.getByTestId('flyout-flow')).toBeInTheDocument()
    expect(screen.queryByTestId('flyout-popular')).toBeNull()

    // 禁用项不触发切换
    fireEvent.click(screen.getByRole('button', { name: /Disabled/ }))
    expect(screen.getByTestId('flyout-flow')).toBeInTheDocument()

    // 按 Escape 收起
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onActiveKeyChange).toHaveBeenLastCalledWith(null)
    expect(screen.queryByTestId('flyout-flow')).toBeNull()

    // 再次展开后点击外部区域收起
    fireEvent.click(screen.getByRole('button', { name: /Most used/ }))
    expect(screen.getByTestId('flyout-popular')).toBeInTheDocument()
    fireEvent.mouseDown(screen.getByTestId('outside-btn'))
    expect(screen.queryByTestId('flyout-popular')).toBeNull()

    // 展开后点击关闭按钮收起
    fireEvent.click(screen.getByRole('button', { name: /Most used/ }))
    fireEvent.click(screen.getByRole('button', { name: '收起面板' }))
    expect(screen.queryByTestId('flyout-popular')).toBeNull()
  })

  it('3. FlowNodeCard 渲染 5 种浅色语义卡头、<=3 行元数据截断、行内出口 Handle 挂接与状态边框', () => {
    const tones = ['blue', 'green', 'amber', 'rose', 'slate'] as const
    const { rerender } = render(
      <FlowNodeCard
        data-testid="node-card"
        tone="blue"
        title="Website pages"
        subtitle="Knowledge Retrieval"
        headerExtra={<span data-testid="hdr-extra">⚙</span>}
        subIcon={<span data-testid="sub-icon">◫</span>}
        subTitle="Vector Search"
        subExtra={<span>||</span>}
        inputHandle={<div data-testid="custom-input-handle" />}
        toolbar={<div data-testid="attached-toolbar">toolbar</div>}
        metaRows={[
          { key: 'src', value: 'Website Pages' },
          { key: 'query', value: '{{lastUserText}}', mono: true },
          { key: 'model', value: 'gpt-4o' },
          { key: 'overflow', value: '第 4 行默认被裁剪' },
        ]}
        outputs={[
          { id: 'success', label: 'Success', tone: 'success' },
          {
            id: 'else',
            label: 'Else',
            tone: 'danger',
            handle: <span data-testid="rf-handle-else" />,
          },
        ]}
        selected
      />
    )

    const card = screen.getByTestId('node-card')
    expect(card).toHaveAttribute('data-tone', 'blue')
    expect(card).toHaveAttribute('data-selected', 'true')
    expect(card).toHaveAttribute('data-status', 'idle')
    expect(screen.getByTestId('custom-input-handle')).toBeInTheDocument()
    expect(screen.getByTestId('attached-toolbar')).toBeInTheDocument()

    // 默认最多渲染 3 行元数据
    expect(screen.getByText('Website Pages')).toBeInTheDocument()
    expect(screen.getByText('{{lastUserText}}')).toBeInTheDocument()
    expect(screen.getByText('gpt-4o')).toBeInTheDocument()
    expect(screen.queryByText('第 4 行默认被裁剪')).toBeNull()

    // Success 无自定义 Handle 时展示内置绿点；Else 传入自定义 Handle 时挂载该元素
    const successRow = card.querySelector('[data-port-id="success"]') as HTMLElement
    expect(successRow.querySelector('[data-port-dot="success"]')).not.toBeNull()
    expect(screen.getByTestId('rf-handle-else')).toBeInTheDocument()

    // 遍历所有 5 种 tone 与 running / error 状态边框
    for (const tone of tones) {
      rerender(<FlowNodeCard data-testid="node-card" tone={tone} title={`Node ${tone}`} running />)
      expect(screen.getByTestId('node-card')).toHaveAttribute('data-tone', tone)
      expect(screen.getByTestId('node-card')).toHaveAttribute('data-status', 'running')
      expect(screen.getByLabelText('运行中')).toBeInTheDocument()
    }

    // error 优先级高于 running
    rerender(<FlowNodeCard data-testid="node-card" tone="rose" title="Failed Node" running error />)
    expect(screen.getByTestId('node-card')).toHaveAttribute('data-status', 'error')
    expect(screen.getByLabelText('执行异常')).toBeInTheDocument()
  })

  it('4. FlowNodeToolbar 渲染图标微操作按钮、Tooltip 提示、事件防冒泡与显隐开关', () => {
    const onParentClick = vi.fn()
    const onRun = vi.fn()
    const onDelete = vi.fn()
    const onDisabled = vi.fn()

    const { rerender } = render(
      <div onClick={onParentClick}>
        <FlowNodeToolbar
          items={[
            { key: 'run', label: '运行节点', icon: <span>▶</span>, onClick: onRun, active: true },
            {
              key: 'dup',
              label: '禁用动作',
              icon: <span>⧉</span>,
              disabled: true,
              onClick: onDisabled,
            },
            {
              key: 'del',
              label: '删除节点',
              icon: <span>✕</span>,
              danger: true,
              dividerBefore: true,
              onClick: onDelete,
            },
          ]}
        />
      </div>
    )

    const toolbar = screen.getByRole('toolbar', { name: '节点快捷操作条' })
    expect(toolbar).toHaveAttribute('aria-orientation', 'horizontal')

    const runBtn = screen.getByRole('button', { name: '运行节点' })
    expect(runBtn).toHaveAttribute('aria-pressed', 'true')
    fireEvent.click(runBtn)
    expect(onRun).toHaveBeenCalledTimes(1)
    // 默认阻止冒泡，不误触外层画布节点点击
    expect(onParentClick).not.toHaveBeenCalled()

    // 聚焦按钮触发 ABC Tooltip
    fireEvent.focus(runBtn)
    expect(screen.getByRole('tooltip')).toHaveTextContent('运行节点')

    fireEvent.click(screen.getByRole('button', { name: '禁用动作' }))
    expect(onDisabled).not.toHaveBeenCalled()

    fireEvent.click(screen.getByRole('button', { name: '删除节点' }))
    expect(onDelete).toHaveBeenCalledTimes(1)

    // visible=false 不渲染
    rerender(<FlowNodeToolbar visible={false} items={[]} />)
    expect(screen.queryByRole('toolbar')).toBeNull()
  })

  it('5. TemplateVariableInput 支持单/多行输入、{{var}} 深色芯片移除与 {} 浮层搜索插值', () => {
    const onChange = vi.fn()
    const onSelectVariable = vi.fn()
    const onRemoveVariable = vi.fn()

    const { rerender } = render(
      <TemplateVariableInput
        label="User question"
        multiline
        rows={3}
        defaultValue="Ask {{lastUserText}} from {{kb_source}}"
        variables={SAMPLE_VARIABLES}
        onChange={onChange}
        onSelectVariable={onSelectVariable}
        onRemoveVariable={onRemoveVariable}
      />
    )

    const textarea = screen.getByLabelText('User question')
    expect(textarea.tagName).toBe('TEXTAREA')

    // 自动解析展示两个深色胶囊芯片与预览标签
    expect(document.querySelector('[data-template-chip="lastUserText"]')).toBeInTheDocument()
    expect(document.querySelector('[data-template-chip="kb_source"]')).toBeInTheDocument()
    expect(screen.getByText('How to reset?')).toBeInTheDocument()

    // 点击移除 kb_source 芯片
    fireEvent.click(screen.getByRole('button', { name: '移除变量 kb_source' }))
    expect(onRemoveVariable).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith('Ask {{lastUserText}} from ')
    expect(document.querySelector('[data-template-chip="kb_source"]')).toBeNull()

    // 点击右下角 {} 打开变量选择器浮层
    fireEvent.click(screen.getByRole('button', { name: '插入变量' }))
    const dialog = screen.getByRole('dialog', { name: '插入模板变量' })
    expect(dialog).toBeInTheDocument()

    // 浮层内关键字过滤
    const searchInput = within(dialog).getByPlaceholderText('搜索变量名、分组或说明...')
    fireEvent.change(searchInput, { target: { value: 'kb_reply' } })
    expect(within(dialog).getByText('{{kb_reply}}')).toBeInTheDocument()
    expect(within(dialog).queryByText('{{lastUserText}}')).toBeNull()

    // 选中变量并自动关闭浮层
    fireEvent.click(within(dialog).getByRole('button', { name: /kb_reply/ }))
    expect(onSelectVariable).toHaveBeenCalledWith(
      expect.objectContaining({ key: 'kb_reply' }),
      expect.stringContaining('{{kb_reply}}')
    )
    expect(screen.queryByRole('dialog', { name: '插入模板变量' })).toBeNull()

    // 单行 replaceOnSelect 模式（类似 Assign KB Reply to 变量绑定框）
    const onAssignChange = vi.fn()
    rerender(
      <TemplateVariableInput
        label="Assign KB Reply to"
        multiline={false}
        replaceOnSelect
        value="{{kb_reply}}"
        variables={SAMPLE_VARIABLES}
        onChange={onAssignChange}
      />
    )
    expect(screen.getByLabelText('Assign KB Reply to').tagName).toBe('INPUT')
    fireEvent.click(screen.getByRole('button', { name: '插入变量' }))
    fireEvent.click(screen.getByRole('button', { name: /kb_source/ }))
    expect(onAssignChange).toHaveBeenCalledWith('{{kb_source}}')
  })

  it('6. FlowSectionFrame 支持居中注释框与左上角分组容器双形态、5 种色调与自定义尺寸', () => {
    const { rerender } = render(
      <FlowSectionFrame
        data-testid="section-frame"
        title="Knowledge Base chain with fallbacks"
        description="按优先级依次检索多个知识源"
        width={300}
        height={180}
        tone="slate"
      />
    )

    const frame = screen.getByTestId('section-frame')
    expect(frame).toHaveAttribute('data-align', 'center')
    expect(frame).toHaveAttribute('data-tone', 'slate')
    expect(frame.style.width).toBe('300px')
    expect(frame.style.height).toBe('180px')
    expect(screen.getByText('Knowledge Base chain with fallbacks')).toBeInTheDocument()
    expect(screen.getByText('按优先级依次检索多个知识源')).toBeInTheDocument()

    // 传入 children 时默认切换为 top-left 分组容器，并支持 selected 状态
    rerender(
      <FlowSectionFrame
        data-testid="section-frame"
        title="Fallback Group"
        tone="blue"
        selected
        headerExtra={<button type="button">编辑</button>}
      >
        <div data-testid="inner-child">内部画布内容</div>
      </FlowSectionFrame>
    )

    expect(screen.getByTestId('section-frame')).toHaveAttribute('data-align', 'top-left')
    expect(screen.getByTestId('section-frame')).toHaveAttribute('data-selected', 'true')
    expect(screen.getByTestId('inner-child')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '编辑' })).toBeInTheDocument()
  })
})
