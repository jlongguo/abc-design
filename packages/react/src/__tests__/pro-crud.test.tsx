import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
  AbcProvider,
  CrudSearchForm,
  ProConfigPage,
  ProTable,
  TableCore,
  createProTableApi,
  useProTable,
  type AbcColumn,
  type ProConfigTabSchema,
} from '../index'

describe('Pro CRUD 全家桶抽象与双生态兼容契约', () => {
  it('1. TableCore 支持 dataSource、rowSelection 半选/全选/清空、嵌套 dataIndex、treeData 深度透传与交互式 switch 列', async () => {
    const onSelectionChange = vi.fn()
    const onSwitchChange = vi.fn()

    const treeRows = [
      {
        id: 1,
        meta: { title: '系统治理' },
        enabled: 1,
        children: [
          {
            id: 2,
            meta: { title: '菜单管理' },
            enabled: 0,
          },
        ],
      },
    ]

    const latestDepthById = new Map<number, number>()
    const columns: AbcColumn<any>[] = [
      {
        key: 'title',
        title: '模块名称',
        dataIndex: ['meta', 'title'],
        render: (val, record, depth) => {
          latestDepthById.set(record.id, depth)
          return <span>{val}</span>
        },
      },
      {
        key: 'enabled',
        title: '启用状态',
        type: {
          type: 'switch',
          checkedValue: 1,
          checkedChildren: '已启用',
          unCheckedChildren: '已停用',
          onChange: onSwitchChange,
        },
      },
    ]

    const { container, rerender } = render(
      <TableCore
        rowKey="id"
        treeData
        columns={columns}
        dataSource={[
          { id: 10, meta: { title: '节点A' }, enabled: 1 },
          { id: 20, meta: { title: '节点B' }, enabled: 0 },
        ]}
        rowSelection={{
          selectedRowKeys: [10],
          onChange: onSelectionChange,
        }}
      />
    )

    // 验证半选状态与全选触发
    const headerCheckbox = container.querySelector(
      'thead input[type="checkbox"]'
    ) as HTMLInputElement
    expect(headerCheckbox.checked).toBe(false)
    expect(headerCheckbox.indeterminate).toBe(true)

    fireEvent.click(headerCheckbox)
    expect(onSelectionChange).toHaveBeenCalledWith(
      [10, 20],
      [
        expect.objectContaining({ id: 10 }),
        expect.objectContaining({ id: 20 }),
      ]
    )

    // 验证交互式 switch 列乐观切换与回调
    const rowSwitches = screen.getAllByRole('switch')
    expect(rowSwitches.length).toBe(2)
    fireEvent.click(rowSwitches[0])
    expect(onSwitchChange).toHaveBeenCalledWith(
      false,
      expect.objectContaining({ id: 10 })
    )

    // 验证 treeData 展开后第 3 参数传递层级深度 depth
    latestDepthById.clear()
    rerender(
      <TableCore
        rowKey="id"
        treeData
        columns={columns}
        dataSource={treeRows}
        expandable={{
          defaultExpandAllRows: true,
        }}
      />
    )
    expect(screen.getByText('系统治理')).toBeInTheDocument()
    expect(screen.getByText('菜单管理')).toBeInTheDocument()
    expect(latestDepthById.get(1)).toBe(0)
    expect(latestDepthById.get(2)).toBe(1)
  })

  it('2. createProTableApi 与 useProTable 规范化分页参数、响应信封、{ids}->ids 删除回退及 refresh/reload 控制', async () => {
    const rawList = vi.fn().mockResolvedValue({
      code: 200,
      data: {
        records: [{ id: 1, rawName: 'Gateway-01' }],
        total: 1,
      },
    })
    const rawDelete = vi
      .fn()
      .mockRejectedValueOnce(new Error('Unsupported { ids } payload'))
      .mockResolvedValueOnce({ code: 200 })

    const api = createProTableApi({
      list: rawList,
      delete: rawDelete,
      defaultParams: { tenantId: 't_1' },
      transformRecord: (r) => ({ ...r, displayName: `[已映射] ${r.rawName}` }),
    })

    const res = await api.list({ pageNum: 2, pageSize: 20, keyword: '  abc  ', empty: '   ' })
    expect(rawList).toHaveBeenCalledWith({
      pageNo: 2,
      pageSize: 20,
      tenantId: 't_1',
      keyword: 'abc',
    })
    expect(res.list[0].displayName).toBe('[已映射] Gateway-01')
    expect(res.total).toBe(1)

    // 首次传 { ids: [1] } 抛错后自动回退直接传 [1]
    await api.delete!([1])
    expect(rawDelete).toHaveBeenCalledTimes(2)
    expect(rawDelete).toHaveBeenNthCalledWith(1, { ids: [1] })
    expect(rawDelete).toHaveBeenNthCalledWith(2, [1])

    // 验证 useProTable 返回可直接展开到 ProTable 的 tableProps（不含 ref 保留键）
    function HookHost() {
      const table = useProTable({
        list: rawList,
        params: { region: 'ap-east' },
      })
      return (
        <div>
          <button type="button" onClick={() => table.reload()}>
            重置刷新
          </button>
          <ProTable
            {...table.tableProps}
            columns={[{ key: 'rawName', title: '实例名', dataIndex: 'rawName' }]}
          />
        </div>
      )
    }

    render(
      <AbcProvider persist={false}>
        <HookHost />
      </AbcProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('Gateway-01')).toBeInTheDocument()
    })
  })

  it('3. ProTable 完整支持 api 驱动、列内 search/form 派生、Schema safeParse 校验、表单联动与自定义 actionButtons', async () => {
    const mockCreate = vi.fn().mockResolvedValue({ code: 200 })
    const mockActionLocate = vi.fn()
    const mockApi = {
      list: vi.fn().mockResolvedValue({
        code: 200,
        data: {
          records: [
            { id: 1, name: 'Alice', role: 'admin' },
            { id: 2, name: 'Bob', role: 'editor' },
          ],
          total: 2,
        },
      }),
      create: mockCreate,
    }

    // 鸭子类型模拟 Zod Schema（带 shape.isOptional 与 safeParse）
    const mockSchema = {
      shape: {
        name: { isOptional: () => false },
        role: { isOptional: () => true },
      },
      safeParse: (vals: Record<string, any>) => {
        if (!vals.name || String(vals.name).trim().length < 2) {
          return {
            success: false,
            error: {
              issues: [{ path: ['name'], message: '姓名至少需要 2 个字符' }],
            },
          }
        }
        return { success: true, data: vals }
      },
    }

    render(
      <AbcProvider persist={false}>
        <ProTable
          tableId="unit_pro_crud"
          title="成员管理"
          api={mockApi}
          clientFilter
          defaultSearchCollapsed={false}
          formSchema={mockSchema}
          columns={[
            { key: 'name', title: '姓名', dataIndex: 'name', search: true, form: true },
            {
              key: 'role',
              title: '角色',
              dataIndex: 'role',
              form: {
                type: 'select',
                options: [
                  { label: '管理员', value: 'admin' },
                  { label: '编辑员', value: 'editor' },
                ],
                onChange: (val, form) => {
                  if (val === 'admin' && !form.getValues('remark')) {
                    form.setValue('remark', '拥有最高权限')
                  }
                },
              },
            },
          ]}
          formFields={[
            {
              key: 'remark',
              label: '权限备注',
              type: 'input',
              hidden: (_isEdit, form) => form.watch('role') !== 'admin',
            },
          ]}
          actionButtons={[
            {
              key: 'locate',
              label: '定位',
              onClick: (row) => mockActionLocate(row.id),
            },
          ]}
        />
      </AbcProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument()
      expect(screen.getByText('Bob')).toBeInTheDocument()
    })

    // 1) 列级 search: true 默认派生 "请输入姓名" 占位符并支持客户端筛选
    const searchInput = screen.getByPlaceholderText('请输入姓名')
    fireEvent.change(searchInput, { target: { value: 'Alice' } })
    fireEvent.click(screen.getAllByRole('button', { name: /搜索/ })[0])
    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument()
      expect(screen.queryByText('Bob')).not.toBeInTheDocument()
    })

    // 2) 自定义行级 actionButtons 直接平铺触发
    fireEvent.click(screen.getByText('定位'))
    expect(mockActionLocate).toHaveBeenCalledWith(1)

    // 3) 打开新增弹窗，测试 Schema 拦截与动态字段联动
    fireEvent.click(screen.getByRole('button', { name: '新增' }))
    fireEvent.click(screen.getByRole('button', { name: '保存' }))
    await waitFor(() => {
      expect(screen.getByText('姓名至少需要 2 个字符')).toBeInTheDocument()
    })
    expect(mockCreate).not.toHaveBeenCalled()

    // 在弹窗内填入合法姓名并切换角色为 admin，验证联动显示 remark 字段并自动填充值
    const dialogEl = document.querySelector('dialog')!
    const modalNameInput = dialogEl.querySelector(
      'input[placeholder="请输入姓名"]'
    ) as HTMLInputElement
    fireEvent.change(modalNameInput, { target: { value: 'Charlie' } })

    const roleCombo = dialogEl.querySelector('[role="combobox"]') as HTMLElement
    fireEvent.click(roleCombo)
    fireEvent.click(screen.getByRole('option', { name: '管理员' }))

    await waitFor(() => {
      const remarkInput = dialogEl.querySelector(
        'input[placeholder="请输入权限备注"]'
      ) as HTMLInputElement
      expect(remarkInput).not.toBeNull()
      expect(remarkInput.value).toBe('拥有最高权限')
    })

    fireEvent.click(screen.getByRole('button', { name: '保存' }))
    await waitFor(() => {
      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Charlie',
          role: 'admin',
          remark: '拥有最高权限',
        })
      )
    })
  })

  it('4. ProConfigPage 支持多选项卡切换、远程配置拉取、checkbox-csv 锁定项与 transformBeforeSave 提交', async () => {
    const fetchConfig = vi.fn().mockResolvedValue({
      code: 200,
      data: {
        siteName: 'BytesFlows Cloud',
        loginTypes: 'password,github',
      },
    })
    const saveConfig = vi.fn().mockResolvedValue({ code: 200 })

    const tabs: ProConfigTabSchema<{ siteName: string; loginTypes: string }>[] = [
      {
        key: 'base',
        label: '基础信息',
        sectionTitle: '站点基础参数',
        fields: [{ key: 'siteName', label: '站点名称', type: 'input' }],
      },
      {
        key: 'auth',
        label: '登录认证',
        sectionTitle: '认证渠道配置',
        fields: [
          {
            key: 'loginTypes',
            label: '允许登录方式',
            type: 'checkbox-csv',
            options: [
              { label: '账号密码', value: 'password', locked: true },
              { label: 'GitHub', value: 'github' },
              { label: 'Google', value: 'google' },
            ],
          },
        ],
      },
    ]

    render(
      <AbcProvider persist={false}>
        <ProConfigPage
          title="系统全局配置"
          defaultValues={{ siteName: '', loginTypes: 'password' }}
          fetchConfig={fetchConfig}
          saveConfig={saveConfig}
          transformBeforeSave={(vals) => ({ ...vals, synced: true })}
          tabs={tabs}
        />
      </AbcProvider>
    )

    await waitFor(() => {
      expect(screen.getByDisplayValue('BytesFlows Cloud')).toBeInTheDocument()
    })

    // 切换到第二个选项卡并勾选 Google
    fireEvent.click(screen.getByRole('button', { name: '登录认证' }))
    const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[]
    expect(checkboxes[0].disabled).toBe(true)
    expect(checkboxes[0].checked).toBe(true)

    fireEvent.click(checkboxes[2]) // 勾选 Google
    fireEvent.click(screen.getByRole('button', { name: '保存当前配置' }))

    await waitFor(() => {
      expect(saveConfig).toHaveBeenCalledWith({
        siteName: 'BytesFlows Cloud',
        loginTypes: 'password,github,google',
        synced: true,
      })
    })
  })

  it('5. CrudSearchForm (ProCrudSearchForm) 独立使用支持 DatePicker / DateRangePicker 展示与清空回写', () => {
    const onQueryChange = vi.fn()
    const onSearch = vi.fn()
    const onReset = vi.fn()

    render(
      <CrudSearchForm
        searchFields={[
          { key: 'createdAt', label: '创建日期', type: 'date' },
          { key: 'timeRange', label: '统计周期', type: 'dateRange' },
        ]}
        query={{
          createdAt: '2026-10-20',
          timeRange: { start: '2026-10-01', end: '2026-10-07' },
        }}
        onQueryChange={onQueryChange}
        onSearch={onSearch}
        onReset={onReset}
      />
    )

    expect(screen.getByDisplayValue('2026-10-20')).toBeInTheDocument()
    expect(screen.getByDisplayValue('2026-10-01')).toBeInTheDocument()
    expect(screen.getByDisplayValue('2026-10-07')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: '清空日期' }))
    expect(onQueryChange).toHaveBeenCalledWith('createdAt', '')

    fireEvent.click(screen.getByRole('button', { name: '清空日期范围' }))
    expect(onQueryChange).toHaveBeenCalledWith('timeRange', { start: '', end: '' })
  })
})
