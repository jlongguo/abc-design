import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import {
  CodeBlock,
  DataTable,
  DescriptionItem,
  DescriptionList,
  EmptyState,
  KeyValueInput,
  ProTable,
  Skeleton,
} from '../index'

const originalClipboard = navigator.clipboard

afterEach(() => {
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: originalClipboard,
  })
})

describe('通用展示与输入组件补强回归测试 (CodeBlock / DescriptionList / KeyValueInput / DataTable / ProTable / FeedbackStates)', () => {
  it('1. CodeBlock 支持 variant="surface" 语义表面、collapsible 折叠、maxHeight、emptyText 与复制回调', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
    const onCopySuccess = vi.fn()

    const { rerender } = render(
      <CodeBlock
        title="response.json"
        language="json"
        variant="surface"
        code='{"ok": true}'
        maxHeight={240}
        collapsible
        onCopySuccess={onCopySuccess}
      />
    )

    const block = document.querySelector('[data-slot="code-block"]') as HTMLElement
    expect(block).toHaveAttribute('data-variant', 'surface')
    expect(block.className).toContain('bg-[var(--abc-bg-surface)]')

    const pre = block.querySelector('pre') as HTMLElement
    expect(pre.style.maxHeight).toBe('240px')

    // 复制成功回调透传
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Copy' }))
      await Promise.resolve()
    })
    expect(onCopySuccess).toHaveBeenCalledTimes(1)

    // 折叠与展开切换
    fireEvent.click(screen.getByRole('button', { name: '收起代码' }))
    expect(block.querySelector('pre')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: '展开代码' }))
    expect(block.querySelector('pre')).not.toBeNull()

    // 空代码兜底文案
    rerender(<CodeBlock code="" emptyText="暂无日志输出" />)
    expect(screen.getByText('暂无日志输出')).toBeInTheDocument()
  })

  it('2. DescriptionList 支持 emptyText 空值兜底、0/boolean 值渲染、span 夹紧与 columns={1} 防撑破护栏', () => {
    render(
      <>
        <DescriptionList
          columns={4}
          emptyText="未设置"
          items={[
            { label: '名称', value: '' },
            { label: '说明', value: null, span: 4 },
            { label: '计数', value: 0 },
            { label: '已停用', value: false },
            { label: '已启用', value: true },
          ]}
        />
        <DescriptionList columns={2}>
          <DescriptionItem label="两列夹紧" value="clamped" span={4} />
          <DescriptionItem label="布尔复制" value={false} copyValue="false" />
          <DescriptionItem label="条件子节点">{false && <span>never</span>}</DescriptionItem>
        </DescriptionList>
        <DescriptionList columns={1}>
          <DescriptionItem label="单列项" value="normal" span={2} />
        </DescriptionList>
      </>
    )

    expect(screen.getAllByText('未设置')).toHaveLength(2)
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('true')).toBeInTheDocument()
    // 普通 false 项与 copyValue="false" + value={false} 项均渲染文本 'false'
    expect(screen.getAllByText('false')).toHaveLength(2)
    const copyCode = document.querySelector('[data-slot="copyable-code"] code')
    expect(copyCode?.textContent).toBe('false')
    expect(screen.queryByText('never')).toBeNull()

    const items = document.querySelectorAll('[data-slot="description-item"]')
    expect(items[1].className).toContain('lg:col-span-4')
    // columns=2 时 span=4 夹紧为 2，不输出 lg:col-span-4
    expect(items[5].className).toContain('sm:col-span-2')
    expect(items[5].className).not.toContain('lg:col-span-4')
    // columns=1 时忽略 span=2，避免出现 sm:col-span-2 隐式多列
    expect(items[8].className).not.toContain('sm:col-span-2')
  })

  it('3. KeyValueInput 支持 readOnly、disabled 锁定模式切换、自定义 labels/emptyText 与 Key 粘贴自动拆行', () => {
    const onChange = vi.fn()
    const { rerender } = render(
      <KeyValueInput
        defaultValue={[{ id: 'r1', key: '', value: '', enabled: true }]}
        smartPaste
        onChange={onChange}
      />
    )

    const keyInput = screen.getByLabelText('键 1')
    fireEvent.paste(keyInput, {
      clipboardData: {
        getData: () => 'HOST=127.0.0.1\nPORT=8080',
      },
    })

    expect(onChange).toHaveBeenCalledWith([
      expect.objectContaining({ key: 'HOST', value: '127.0.0.1', enabled: true }),
      expect.objectContaining({ key: 'PORT', value: '8080', enabled: true }),
    ])

    // disabled 时禁用模式切换按钮
    rerender(<KeyValueInput value={[]} disabled emptyText="Nothing here" labels={{ addLabel: 'Add Row' }} />)
    expect(screen.getByText('Nothing here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '批量文本' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Add Row' })).toBeDisabled()

    // readOnly 时隐藏新增/删除按钮，输入框设为只读
    rerender(<KeyValueInput value={[{ id: 'k1', key: 'ENV', value: 'prod', enabled: true }]} readOnly />)
    expect(screen.getByLabelText('键 1')).toHaveAttribute('readonly')
    expect(screen.queryByRole('button', { name: '添加键值对' })).toBeNull()
    expect(screen.queryByLabelText('删除第 1 项')).toBeNull()

    // 进入批量模式后切换为 disabled=true，“取消”按钮同步禁用
    rerender(<KeyValueInput value={[{ id: 'k1', key: 'ENV', value: 'prod', enabled: true }]} />)
    fireEvent.click(screen.getByRole('button', { name: '批量文本' }))
    expect(screen.getByRole('button', { name: '取消' })).not.toBeDisabled()
    rerender(<KeyValueInput value={[{ id: 'k1', key: 'ENV', value: 'prod', enabled: true }]} disabled />)
    expect(screen.getByRole('button', { name: '取消' })).toBeDisabled()
  })

  it('4. DataTable 支持 JSX ReactNode 空态标题与描述、自定义 emptyTitle 不泄漏默认副标题，ProTable 空态保留搜索栏', () => {
    const { rerender } = render(
      <DataTable
        columns={[{ key: 'name', header: '名称' }]}
        data={[]}
        emptyTitle={<span data-testid="custom-empty-title">Custom Empty JSX</span>}
        emptyDescription={<span data-testid="custom-empty-desc">Custom Desc JSX</span>}
      />
    )

    expect(screen.getByTestId('custom-empty-title')).toHaveTextContent('Custom Empty JSX')
    expect(screen.getByTestId('custom-empty-desc')).toHaveTextContent('Custom Desc JSX')

    // 仅传自定义 emptyTitle 且未传 emptyDescription 时，不泄漏中文默认副标题
    rerender(<DataTable columns={[{ key: 'name', header: 'Name' }]} data={[]} emptyTitle="No rows" />)
    expect(screen.getByText('No rows')).toBeInTheDocument()
    expect(screen.queryByText(/未检索到符合条件的数据记录/)).toBeNull()

    rerender(
      <ProTable
        columns={[{ key: 'name', title: 'Name', dataIndex: 'name', search: true }]}
        dataSource={[]}
        emptyText="No data yet"
      />
    )

    // 保留搜索栏与表头，且传自定义 emptyText 未传 emptyDescription 时不泄漏默认中文副标题
    expect(screen.getByText('筛选条件')).toBeInTheDocument()
    expect(screen.getByText('No data yet')).toBeInTheDocument()
    expect(screen.queryByText(/未检索到符合条件的数据记录/)).toBeNull()

    rerender(
      <ProTable
        columns={[{ key: 'name', title: 'Name', dataIndex: 'name', search: true }]}
        dataSource={[]}
        emptyNode={<div data-testid="pro-empty-node">Custom Empty Node</div>}
      />
    )
    expect(screen.getByTestId('pro-empty-node')).toHaveTextContent('Custom Empty Node')
  })

  it('5. Skeleton 移除覆盖 Token 的硬编码 slate 类，EmptyState 支持 message 别名', () => {
    render(
      <>
        <Skeleton data-testid="token-skeleton" />
        <EmptyState message="Empty Alias Title" description={null} />
      </>
    )

    const sk = screen.getByTestId('token-skeleton')
    expect(sk.className).toContain('bg-[var(--abc-bg-subtle)]')
    expect(sk.className).not.toContain('bg-slate-200')
    expect(screen.getByText('Empty Alias Title')).toBeInTheDocument()
  })
})
