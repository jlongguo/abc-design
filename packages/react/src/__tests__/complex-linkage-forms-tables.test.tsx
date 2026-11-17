import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
  AbcProvider,
  EditableProTable,
  Input,
  KeyValueInput,
  ProFormDependency,
  ProFormList,
  ProFormProvider,
  useProForm,
  type AbcKeyValueEntry,
  type EditableProColumn,
  type ProFormInstance,
} from '../index'

const mockToastAdapter = {
  success: vi.fn(),
  error: vi.fn(),
  info: vi.fn(),
  warning: vi.fn(),
}

function renderWithAbc(ui: React.ReactElement) {
  return render(
    <AbcProvider persist={false} toastAdapter={mockToastAdapter}>
      {ui}
    </AbcProvider>
  )
}

interface Deferred<T> {
  promise: Promise<T>
  resolve: (value: T) => void
  reject: (err: unknown) => void
}

function createDeferred<T>(): Deferred<T> {
  let resolve!: (value: T) => void
  let reject!: (err: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

describe('高阶表单与可编辑表格联动测试 (Phase 3)', () => {
  it('1. ProFormDependency + ProFormProvider + useProForm 支持依赖重置下游字段与 AbortSignal 竞态防护', async () => {
    const requests: Array<{
      provider: string
      signal: AbortSignal
      deferred: Deferred<string[]>
    }> = []

    const asyncLoader = vi.fn((depValues: Record<string, any>, signal: AbortSignal) => {
      const deferred = createDeferred<string[]>()
      requests.push({ provider: String(depValues.provider), signal, deferred })
      return deferred.promise
    })

    const capturedForm: { current: ProFormInstance<any> | null } = { current: null }

    function DependencyDemo() {
      const form = useProForm({
        defaultValues: { provider: 'aws', region: 'us-east-1' },
      })
      capturedForm.current = form

      return (
        <ProFormProvider form={form}>
          <div>
            <button type="button" onClick={() => form.setValue('provider', 'gcp')}>
              切到GCP
            </button>
            <button type="button" onClick={() => form.setValue('provider', 'azure')}>
              切到Azure
            </button>
            <ProFormDependency<string[]>
              deps={['provider']}
              resetFieldsOnChange={['region']}
              asyncLoader={asyncLoader}
            >
              {(depValues, meta) => (
                <div>
                  <span data-testid="dep-provider">{depValues.provider}</span>
                  <span data-testid="dep-region">{String(meta.form?.getValues('region'))}</span>
                  <span data-testid="dep-loading">{meta.loading ? 'loading' : 'idle'}</span>
                  <span data-testid="dep-data">{(meta.data ?? []).join(',')}</span>
                </div>
              )}
            </ProFormDependency>
          </div>
        </ProFormProvider>
      )
    }

    renderWithAbc(<DependencyDemo />)

    // 初始加载完成
    expect(screen.getByTestId('dep-provider')).toHaveTextContent('aws')
    expect(screen.getByTestId('dep-region')).toHaveTextContent('us-east-1')
    expect(requests).toHaveLength(1)
    requests[0].deferred.resolve(['aws-us-east-1'])
    await waitFor(() => {
      expect(screen.getByTestId('dep-data')).toHaveTextContent('aws-us-east-1')
    })

    // 首次切换 provider='gcp'：触发重绘并清空下游 region 为 undefined，发起第 2 个请求
    fireEvent.click(screen.getByRole('button', { name: '切到GCP' }))
    expect(screen.getByTestId('dep-provider')).toHaveTextContent('gcp')
    expect(screen.getByTestId('dep-region')).toHaveTextContent('undefined')
    expect(capturedForm.current?.getValues('region')).toBeUndefined()
    expect(requests).toHaveLength(2)
    expect(requests[1].signal.aborted).toBe(false)

    // 第 1 次切换尚未返回时立即连续切换第二次：前一次 AbortSignal 立即变为 aborted=true
    fireEvent.click(screen.getByRole('button', { name: '切到Azure' }))
    expect(screen.getByTestId('dep-provider')).toHaveTextContent('azure')
    expect(requests).toHaveLength(3)
    expect(requests[1].signal.aborted).toBe(true)
    expect(requests[2].signal.aborted).toBe(false)

    // 先返回过期的第一次切换响应，不应覆盖视图；随后返回第二次请求结果并正常渲染
    requests[1].deferred.resolve(['gcp-stale-zone'])
    requests[2].deferred.resolve(['azure-eastasia'])

    await waitFor(() => {
      expect(screen.getByTestId('dep-loading')).toHaveTextContent('idle')
      expect(screen.getByTestId('dep-data')).toHaveTextContent('azure-eastasia')
    })
    expect(screen.getByTestId('dep-data')).not.toHaveTextContent('gcp-stale-zone')
  })

  it('2. ProFormList 绑定 form+name 支持添加、复制、rowValidator 错误提示、minItems 删除限制与 summaryRender 实时汇总', () => {
    interface RouteItem {
      host: string
      weight: number
    }

    const formRef: { current: ProFormInstance<{ routes: RouteItem[] }> | null } = { current: null }

    function ListDemo() {
      const form = useProForm<{ routes: RouteItem[] }>({
        defaultValues: { routes: [{ host: 'api.alpha.dev', weight: 10 }] },
      })
      formRef.current = form

      return (
        <ProFormList<RouteItem>
          form={form}
          name="routes"
          label="路由规则"
          minItems={1}
          initialItem={() => ({ host: 'api.new.dev', weight: 20 })}
          rowValidator={(item) => (!item.host.trim() ? '域名不能为空' : undefined)}
          summaryRender={(items) => (
            <span data-testid="list-summary">
              总条数:{items.length};总权重:{items.reduce((acc, it) => acc + Number(it.weight || 0), 0)}
            </span>
          )}
        >
          {(item, idx, helpers) => (
            <div className="flex gap-2">
              <Input
                aria-label={`域名-${idx + 1}`}
                value={item.host}
                onChange={(e) => helpers.update({ host: e.target.value })}
              />
              <Input
                aria-label={`权重-${idx + 1}`}
                type="number"
                value={String(item.weight)}
                onChange={(e) => helpers.update({ weight: Number(e.target.value || 0) })}
              />
            </div>
          )}
        </ProFormList>
      )
    }

    renderWithAbc(<ListDemo />)

    // 仅剩 1 项时受 minItems=1 约束禁用删除
    expect(screen.getByRole('button', { name: '删除第 1 项' })).toBeDisabled()
    expect(screen.getByTestId('list-summary')).toHaveTextContent('总条数:1;总权重:10')

    // 添加一行
    fireEvent.click(screen.getByRole('button', { name: '添加一行' }))
    expect(screen.getByLabelText('域名-2')).toHaveValue('api.new.dev')
    expect(screen.getByTestId('list-summary')).toHaveTextContent('总条数:2;总权重:30')
    expect(screen.getByRole('button', { name: '删除第 1 项' })).not.toBeDisabled()

    // 复制第 1 项插入第 2 位
    fireEvent.click(screen.getByRole('button', { name: '复制第 1 项' }))
    expect(screen.getByLabelText('域名-2')).toHaveValue('api.alpha.dev')
    expect(screen.getByLabelText('域名-3')).toHaveValue('api.new.dev')
    expect(screen.getByTestId('list-summary')).toHaveTextContent('总条数:3;总权重:40')

    // 清空第 2 项域名触发 rowValidator 错误，修改权重触发 summaryRender 实时计算
    fireEvent.change(screen.getByLabelText('域名-2'), { target: { value: '' } })
    expect(screen.getByRole('alert')).toHaveTextContent('域名不能为空')

    fireEvent.change(screen.getByLabelText('权重-2'), { target: { value: '35' } })
    expect(screen.getByTestId('list-summary')).toHaveTextContent('总条数:3;总权重:65')
    expect(formRef.current?.getValues('routes')).toHaveLength(3)

    // 删除回剩 1 项后重新触发 minItems 保护
    fireEvent.click(screen.getByRole('button', { name: '删除第 2 项' }))
    fireEvent.click(screen.getByRole('button', { name: '删除第 2 项' }))
    expect(screen.getByRole('button', { name: '删除第 1 项' })).toBeDisabled()
    expect(screen.getByTestId('list-summary')).toHaveTextContent('总条数:1;总权重:10')
  })

  it('3. KeyValueInput 支持增改行、重复 Key 告警以及切换批量文本格式编辑并应用回写结构化列表', () => {
    const onChange = vi.fn()
    const initial: AbcKeyValueEntry[] = [{ id: 'kv_1', key: 'API_KEY', value: 'v1', enabled: true }]

    renderWithAbc(<KeyValueInput defaultValue={initial} onChange={onChange} />)

    // 添加第二行并输入重复 Key 触发告警
    fireEvent.click(screen.getByRole('button', { name: '添加键值对' }))
    fireEvent.change(screen.getByLabelText('键 2'), { target: { value: 'API_KEY' } })
    fireEvent.change(screen.getByLabelText('值 2'), { target: { value: 'v2' } })

    expect(screen.getByText('1 个重复 Key')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent('存在重复 Key：API_KEY')

    // 切换至批量文本模式并切到 json 格式，编辑后点击应用反向更新结构化行
    fireEvent.click(screen.getByRole('button', { name: '批量文本' }))
    fireEvent.click(screen.getByRole('button', { name: 'json' }))

    const bulkEditor = screen.getByLabelText('批量文本编辑器')
    fireEvent.change(bulkEditor, {
      target: { value: JSON.stringify({ BASE_URL: 'https://api.abc.dev', RETRY_COUNT: '3' }) },
    })
    fireEvent.click(screen.getByRole('button', { name: '应用' }))

    expect(screen.queryByRole('alert')).toBeNull()
    expect(screen.getByLabelText('键 1')).toHaveValue('BASE_URL')
    expect(screen.getByLabelText('值 1')).toHaveValue('https://api.abc.dev')
    expect(screen.getByLabelText('键 2')).toHaveValue('RETRY_COUNT')
    expect(screen.getByLabelText('值 2')).toHaveValue('3')
    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({ key: 'BASE_URL', value: 'https://api.abc.dev', enabled: true }),
      expect.objectContaining({ key: 'RETRY_COUNT', value: '3', enabled: true }),
    ])
  })

  it("4. EditableProTable 'row' 模式支持行内编辑校验拦截、保存提交以及取消回滚", async () => {
    interface NodeRow {
      id: string
      name: string
      weight: number
    }

    const onSaveRow = vi.fn()
    const columns: EditableProColumn<NodeRow>[] = [
      {
        key: 'name',
        title: '节点名称',
        dataIndex: 'name',
        validator: (val) => (!String(val ?? '').trim() ? '节点名称必填' : undefined),
      },
      {
        key: 'weight',
        title: '权重',
        dataIndex: 'weight',
        valueType: 'number',
      },
    ]

    renderWithAbc(
      <EditableProTable<NodeRow>
        mode="row"
        defaultValue={[{ id: 'n1', name: 'worker-01', weight: 10 }]}
        columns={columns}
        onSaveRow={onSaveRow}
      />
    )

    // 点击编辑并触发校验失败，应阻断保存并展示错误提示
    fireEvent.click(screen.getByRole('button', { name: '编辑' }))
    fireEvent.change(screen.getByLabelText('节点名称'), { target: { value: '' } })
    fireEvent.click(screen.getByRole('button', { name: '保存' }))

    expect(onSaveRow).not.toHaveBeenCalled()
    expect(screen.getByRole('alert')).toHaveTextContent('节点名称必填')
    expect(screen.getByRole('button', { name: '保存' })).toBeInTheDocument()

    // 修正后点击保存：调用 onSaveRow 并退出编辑态
    fireEvent.change(screen.getByLabelText('节点名称'), { target: { value: 'worker-01-ready' } })
    fireEvent.click(screen.getByRole('button', { name: '保存' }))

    await waitFor(() => {
      expect(onSaveRow).toHaveBeenCalledWith({ id: 'n1', name: 'worker-01-ready', weight: 10 }, 0)
    })
    expect(screen.getByText('worker-01-ready')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '编辑' })).toBeInTheDocument()

    // 再次进入编辑后修改并点击取消：回滚修改且不触发保存
    fireEvent.click(screen.getByRole('button', { name: '编辑' }))
    fireEvent.change(screen.getByLabelText('节点名称'), { target: { value: 'discarded-name' } })
    fireEvent.click(screen.getByRole('button', { name: '取消' }))

    expect(screen.getByText('worker-01-ready')).toBeInTheDocument()
    expect(screen.queryByText('discarded-name')).toBeNull()
    expect(onSaveRow).toHaveBeenCalledTimes(1)
  })

  it("5. EditableProTable 'table' 模式支持整表即时变更 onChange、recordCreatorProps 新增行与 summaryRender 汇总", () => {
    interface QuotaRow {
      id: string
      name: string
      quota: number
    }

    const onChange = vi.fn()
    let seq = 1
    const columns: EditableProColumn<QuotaRow>[] = [
      { key: 'name', title: '配额项', dataIndex: 'name' },
      { key: 'quota', title: '上限', dataIndex: 'quota', valueType: 'number', placeholder: '输入上限' },
    ]

    renderWithAbc(
      <EditableProTable<QuotaRow>
        mode="table"
        defaultValue={[{ id: 'q1', name: 'CPU', quota: 8 }]}
        columns={columns}
        onChange={onChange}
        recordCreatorProps={{
          label: '新增配额',
          record: () => {
            seq += 1
            return { id: `q${seq}`, name: `MEM-${seq}`, quota: 16 }
          },
        }}
        summaryRender={(rows) => (
          <span data-testid="table-summary">
            合计配额:{rows.reduce((sum, r) => sum + Number(r.quota || 0), 0)}
          </span>
        )}
      />
    )

    expect(screen.getByTestId('table-summary')).toHaveTextContent('合计配额:8')

    // table 模式无需点编辑，直接修改单元格即触发 onChange 与底部重算
    fireEvent.change(screen.getByPlaceholderText('输入上限'), { target: { value: '12' } })
    expect(onChange).toHaveBeenLastCalledWith([{ id: 'q1', name: 'CPU', quota: 12 }])
    expect(screen.getByTestId('table-summary')).toHaveTextContent('合计配额:12')

    // 点击 recordCreatorProps 按钮新增行，汇总实时重算
    fireEvent.click(screen.getByRole('button', { name: '新增配额' }))
    expect(onChange).toHaveBeenLastCalledWith([
      { id: 'q1', name: 'CPU', quota: 12 },
      { id: 'q2', name: 'MEM-2', quota: 16 },
    ])
    expect(screen.getByTestId('table-summary')).toHaveTextContent('合计配额:28')
  })
})
