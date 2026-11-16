import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
  AbcProvider,
  Cascader,
  DataTable,
  FileUpload,
  ProCrudFormModal,
  ProPageHeader,
  Steps,
  Timeline,
  Transfer,
  useCursorStack,
  useProForm,
  type CascaderOption,
} from '../index'

const REGION_OPTIONS: CascaderOption[] = [
  {
    value: 'zj',
    label: '浙江省',
    children: [
      {
        value: 'hz',
        label: '杭州市',
        children: [
          { value: 'xh', label: '西湖区' },
          { value: 'yh', label: '余杭区', disabled: true },
        ],
      },
      {
        value: 'nb',
        label: '宁波市',
        children: [{ value: 'yz', label: '鄞州区' }],
      },
    ],
  },
  {
    value: 'sh',
    label: '上海市',
    children: [{ value: 'pd', label: '浦东新区' }],
  },
]

describe('Phase 3 Enterprise Widgets & ProPageHeader / DataTable / Timeline', () => {
  it('1. Cascader: 多级展开单选、changeOnSelect、拼音检索与多选标签清理', async () => {
    const onSingleChange = vi.fn()
    const onMultiChange = vi.fn()

    const { rerender } = render(
      <AbcProvider persist={false}>
        <Cascader
          label="部署地域"
          options={REGION_OPTIONS}
          searchable
          clearable
          onChange={onSingleChange}
        />
      </AbcProvider>
    )

    const trigger = screen.getByRole('combobox', { name: '部署地域' })
    fireEvent.click(trigger)

    // 逐列点击 浙江省 -> 杭州市 -> 西湖区
    fireEvent.click(screen.getByRole('option', { name: '浙江省' }))
    fireEvent.click(screen.getByRole('option', { name: '杭州市' }))
    fireEvent.click(screen.getByRole('option', { name: '西湖区' }))

    expect(onSingleChange).toHaveBeenCalledWith(
      ['zj', 'hz', 'xh'],
      expect.arrayContaining([
        expect.objectContaining({ value: 'zj' }),
        expect.objectContaining({ value: 'hz' }),
        expect.objectContaining({ value: 'xh' }),
      ])
    )
    expect(trigger).toHaveTextContent('浙江省 / 杭州市 / 西湖区')

    // 清空按钮重置
    fireEvent.click(screen.getByRole('button', { name: '清空级联选择' }))
    expect(onSingleChange).toHaveBeenLastCalledWith([], [])

    // 拼音检索 "pd" -> 上海市 / 浦东新区
    fireEvent.click(trigger)
    const searchInput = screen.getByLabelText('搜索级联选项')
    fireEvent.change(searchInput, { target: { value: 'pd' } })
    fireEvent.click(screen.getByRole('option', { name: '上海市 / 浦东新区' }))
    expect(onSingleChange).toHaveBeenLastCalledWith(['sh', 'pd'], expect.any(Array))

    // 多选模式与禁用项保持不可选
    rerender(
      <AbcProvider persist={false}>
        <Cascader
          label="多选区域"
          options={REGION_OPTIONS}
          multiple
          onChange={onMultiChange}
        />
      </AbcProvider>
    )
    fireEvent.click(screen.getByRole('combobox', { name: '多选区域' }))
    fireEvent.click(screen.getByRole('option', { name: '浙江省' }))
    fireEvent.click(screen.getByRole('option', { name: '杭州市' }))
    expect(screen.getByRole('option', { name: '余杭区' })).toBeDisabled()
    fireEvent.click(screen.getByRole('option', { name: '西湖区' }))
    expect(onMultiChange).toHaveBeenCalledWith([['zj', 'hz', 'xh']], expect.any(Array))
  })

  it('2. Transfer: 双栏穿梭、拼音检索、全选反选（跳过禁用项）与 60+ 虚拟滚动', () => {
    const onChange = vi.fn()
    const items = Array.from({ length: 60 }, (_, idx) => ({
      key: `role_${idx + 1}`,
      title: idx === 0 ? '平台管理员' : `运营角色_${idx + 1}`,
      description: idx === 0 ? '全局超级权限' : undefined,
      disabled: idx === 1,
    }))

    render(
      <AbcProvider persist={false}>
        <Transfer
          label="角色授权穿梭"
          dataSource={items}
          defaultTargetKeys={['role_3']}
          searchable
          virtual
          onChange={onChange}
        />
      </AbcProvider>
    )

    // 虚拟滚动开启：60 条不会全部铺满 DOM
    expect(screen.getByText('平台管理员')).toBeInTheDocument()
    expect(screen.queryByText('运营角色_58')).not.toBeInTheDocument()

    // 拼音检索 "ptgly" 命中 "平台管理员"
    const leftSearch = screen.getByLabelText('待选列表搜索')
    fireEvent.change(leftSearch, { target: { value: 'ptgly' } })
    expect(screen.getByText('平台管理员')).toBeInTheDocument()
    fireEvent.change(leftSearch, { target: { value: '' } })

    // 全选待选列表（跳过 disabled=role_2），点击右移
    fireEvent.click(screen.getByLabelText('全选 待选列表'))
    fireEvent.click(screen.getByRole('button', { name: '移至右侧已选列表' }))
    expect(onChange).toHaveBeenCalled()
    const [nextTargets, dir, moved] = onChange.mock.calls[0]
    expect(dir).toBe('right')
    expect(moved).toContain('role_1')
    expect(moved).not.toContain('role_2')
    expect(nextTargets).toContain('role_3')
    expect(nextTargets).toContain('role_1')

    // 反选已选列表
    fireEvent.click(screen.getByRole('button', { name: '反选' }))
    fireEvent.click(screen.getByRole('button', { name: '移回左侧待选列表' }))
    expect(onChange.mock.calls[1][1]).toBe('left')
  })

  it('3. FileUpload & ProCrudForm 集成：格式/大小拦截、customUpload 上传完成与删除', async () => {
    const onFilesChange = vi.fn()
    const customUpload = vi.fn(async (file: File, onProgress?: (p: number) => void) => {
      onProgress?.(60)
      return { url: `https://cdn.example.com/${file.name}` }
    })

    const { container } = render(
      <AbcProvider persist={false}>
        <FileUpload
          label="合规凭证附件"
          accept=".json,.txt"
          maxSizeMB={1}
          maxCount={2}
          customUpload={customUpload}
          onChange={onFilesChange}
        />
      </AbcProvider>
    )

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement

    // 上传不允许的格式 -> 触发 role="alert"
    const badFile = new File(['abc'], 'script.exe', { type: 'application/octet-stream' })
    fireEvent.change(fileInput, { target: { files: [badFile] } })
    expect(screen.getByRole('alert')).toHaveTextContent('script.exe')
    expect(customUpload).not.toHaveBeenCalled()

    // 上传超大文件 (> 1MB) -> 触发 role="alert"
    const bigFile = new File([new Uint8Array(1024 * 1024 + 10)], 'huge.json', {
      type: 'application/json',
    })
    fireEvent.change(fileInput, { target: { files: [bigFile] } })
    expect(screen.getByRole('alert')).toHaveTextContent('huge.json')

    // 上传合法文件 -> customUpload 成功
    const okFile = new File(['{"ok":true}'], 'policy.json', { type: 'application/json' })
    fireEvent.change(fileInput, { target: { files: [okFile] } })
    await waitFor(() => {
      expect(screen.getByText('policy.json')).toBeInTheDocument()
      expect(customUpload).toHaveBeenCalledTimes(1)
    })

    const lastCall = onFilesChange.mock.calls[onFilesChange.mock.calls.length - 1][0]
    expect(lastCall[0]).toMatchObject({
      name: 'policy.json',
      status: 'done',
      url: 'https://cdn.example.com/policy.json',
    })

    // 删除文件
    fireEvent.click(screen.getByRole('button', { name: '删除文件 policy.json' }))
    expect(screen.queryByText('policy.json')).not.toBeInTheDocument()
  })

  it('4. ProCrudFormModal 原生渲染 file / cascader / transfer 字段类型', () => {
    const Wrapper: React.FC = () => {
      const form = useProForm<{
        attachment: unknown[]
        region: string[]
        members: string[]
      }>({
        defaultValues: { attachment: [], region: [], members: [] },
      })
      return (
        <AbcProvider persist={false}>
          <ProCrudFormModal
            open
            isEdit={false}
            currentRecord={null}
            columns={[]}
            formSubmitting={false}
            onClose={() => {}}
            onSubmit={async () => {}}
            dialogTitle={{ add: '新建合规工单' }}
            form={form}
            formFields={[
              { key: 'attachment', label: '佐证附件', type: 'file', accept: '.pdf,.json' },
              {
                key: 'region',
                label: '归属区域',
                type: 'cascader',
                cascaderOptions: REGION_OPTIONS,
              },
              {
                key: 'members',
                label: '审批成员',
                type: 'transfer',
                transferItems: [{ key: 'u1', title: '张三' }, { key: 'u2', title: '李四' }],
              },
            ]}
          />
        </AbcProvider>
      )
    }

    render(<Wrapper />)
    expect(screen.getByText('佐证附件')).toBeInTheDocument()
    expect(screen.getByText('点击或拖拽文件至此处上传')).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: '归属区域' })).toBeInTheDocument()
    expect(screen.getByText('张三')).toBeInTheDocument()
  })

  it('5. ProPageHeader、DataTable 骨架态/键盘行激活与 useCursorStack 游标栈', () => {
    const onRowClick = vi.fn()
    const CursorHarness: React.FC = () => {
      const stack = useCursorStack()
      return (
        <div>
          <span data-testid="cursor">{stack.currentCursor ?? 'ROOT'}</span>
          <span data-testid="has-prev">{String(stack.hasPrev)}</span>
          <button type="button" onClick={() => stack.pushCursor('c2')}>
            下一页
          </button>
          <button type="button" onClick={() => stack.popCursor()}>
            上一页
          </button>
          <button type="button" onClick={() => stack.resetCursor()}>
            重置游标
          </button>
        </div>
      )
    }

    const { rerender } = render(
      <AbcProvider persist={false}>
        <ProPageHeader
          title="Webhook 投递监控"
          description="查看所有事件投递详情"
          guide={{
            badge: '操作指南',
            title: '排障步骤',
            steps: [{ title: '核对签章', description: '校验 HMAC-SHA256 头部' }],
          }}
        />
        <DataTable<{ id: string; name: string }>
          columns={[{ key: 'name', header: '名称', render: (r) => r.name }]}
          data={[]}
          keyExtractor={(r) => r.id}
          loading
          skeletonRows={3}
          loadingStatusText="正在加载表格"
          keepHeaderWhenEmpty
        />
        <CursorHarness />
      </AbcProvider>
    )

    // ProPageHeader: 无障碍摘要与点击打开抽屉
    expect(screen.getByText('校验 HMAC-SHA256 头部')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '操作说明' }))
    expect(screen.getByText('操作指南')).toBeInTheDocument()

    // DataTable loading 广播与 3 行骨架
    expect(screen.getByRole('status')).toHaveTextContent('正在加载表格')

    // DataTable 行点击键盘 Enter 激活
    rerender(
      <AbcProvider persist={false}>
        <DataTable<{ id: string; name: string }>
          columns={[{ key: 'name', header: '名称', render: (r) => r.name }]}
          data={[{ id: '1', name: 'Endpoint Alpha' }]}
          keyExtractor={(r) => r.id}
          onRowClick={onRowClick}
          selectedRowKey="1"
        />
        <CursorHarness />
      </AbcProvider>
    )
    const cell = screen.getByText('Endpoint Alpha')
    const row = cell.closest('tr') as HTMLElement
    fireEvent.keyDown(row, { key: 'Enter' })
    expect(onRowClick).toHaveBeenCalledWith({ id: '1', name: 'Endpoint Alpha' })

    // useCursorStack 前进 -> 后退 -> 重置
    expect(screen.getByTestId('cursor')).toHaveTextContent('ROOT')
    expect(screen.getByTestId('has-prev')).toHaveTextContent('false')
    fireEvent.click(screen.getByRole('button', { name: '下一页' }))
    expect(screen.getByTestId('cursor')).toHaveTextContent('c2')
    expect(screen.getByTestId('has-prev')).toHaveTextContent('true')
    fireEvent.click(screen.getByRole('button', { name: '上一页' }))
    expect(screen.getByTestId('cursor')).toHaveTextContent('ROOT')
    expect(screen.getByTestId('has-prev')).toHaveTextContent('false')
    fireEvent.click(screen.getByRole('button', { name: '下一页' }))
    fireEvent.click(screen.getByRole('button', { name: '重置游标' }))
    expect(screen.getByTestId('cursor')).toHaveTextContent('ROOT')
  })

  it('6. Steps & Timeline 交互步骤与多状态时间轴渲染', () => {
    const onStepChange = vi.fn()
    render(
      <AbcProvider persist={false}>
        <Steps
          current={1}
          status="error"
          onChange={onStepChange}
          items={[
            { title: '提交申请', description: '租户发起配额变更' },
            { title: '风控复核', description: '配额超限告警' },
            { title: '执行生效' },
          ]}
        />
        <Timeline
          items={[
            {
              key: 't1',
              title: '任务入队',
              time: '2026-11-16 10:00:00',
              description: '已投递至调度队列',
              tone: 'primary',
            },
            {
              key: 't2',
              title: '回调成功 (200 OK)',
              time: '2026-11-16 10:00:02',
              tone: 'success',
            },
          ]}
        />
      </AbcProvider>
    )

    expect(screen.getByText('提交申请')).toBeInTheDocument()
    expect(screen.getByText('配额超限告警')).toBeInTheDocument()
    fireEvent.click(screen.getByText('执行生效'))
    expect(onStepChange).toHaveBeenCalledWith(2)

    expect(screen.getByText('任务入队')).toBeInTheDocument()
    expect(screen.getByText('已投递至调度队列')).toBeInTheDocument()
    expect(screen.getByText('回调成功 (200 OK)')).toBeInTheDocument()
  })
})
