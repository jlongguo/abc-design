import React, { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
  AbcProvider,
  ProCrudFormFieldControl,
  ProCrudFormLayout,
  TreeSelect,
  useProForm,
  type AbcCheckedStrategy,
  type ProCrudFormField,
} from '../index'

const SAMPLE_TREE = [
  {
    key: 'sys',
    title: '系统与权限中心',
    children: [
      { key: 'sys:user', title: '管理员账号管理' },
      { key: 'sys:role', title: '角色与菜单授权' },
    ],
  },
  {
    key: 'order',
    title: '交易与结算中心',
    children: [
      { key: 'order:list', title: '订单履约中心' },
      { key: 'order:risk', title: '风控拦截规则', disabled: true },
    ],
  },
]

describe('TreeSelect 企业级树形下拉选择器全链路测试', () => {
  it('1. 单选模式支持 selectableLeafOnly 仅选叶子节点，并在原生 <dialog open> 内就地挂载到 Top-Layer', async () => {
    const onChange = vi.fn()

    render(
      <AbcProvider>
        <dialog open data-testid="host-modal">
          <TreeSelect
            label="归属部门"
            treeData={SAMPLE_TREE}
            selectableLeafOnly
            allowClear
            onChange={onChange}
          />
        </dialog>
      </AbcProvider>
    )

    // 显式 label htmlFor -> combobox id 关联（无障碍铁律）
    const trigger = screen.getByRole('combobox', { name: '归属部门' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).not.toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(trigger)
    const tree = await screen.findByRole('tree')
    expect(tree).toBeInTheDocument()

    // 浮层应挂载在 <dialog open> 内部而非逃逸到外部，防模态 backdrop 拦截点击
    const popover = document.querySelector('[data-slot="tree-select-popover"]') as HTMLElement
    const modal = screen.getByTestId('host-modal')
    expect(popover).not.toBeNull()
    expect(modal.contains(popover)).toBe(true)

    // 在 selectableLeafOnly=true 时点击父节点应仅切换展开，不触发选中、不关闭弹窗
    fireEvent.click(screen.getByTestId('tree-select-node-sys'))
    expect(onChange).not.toHaveBeenCalled()
    expect(await screen.findByTestId('tree-select-node-sys:user')).toBeInTheDocument()

    // 点击末级叶子节点则选中、回填并自动关闭下拉
    fireEvent.click(screen.getByTestId('tree-select-node-sys:user'))
    expect(onChange).toHaveBeenCalledWith(
      'sys:user',
      ['管理员账号管理'],
      expect.objectContaining({ checked: true })
    )
    expect(trigger).toHaveTextContent('管理员账号管理')
    await waitFor(() => {
      expect(screen.queryByRole('tree')).toBeNull()
    })

    // 一键清空
    fireEvent.click(screen.getByTestId('tree-select-clear'))
    expect(onChange).toHaveBeenLastCalledWith('', [], {})
  })

  it('2. 复选级联模式支持半选态、受控父级 Key 自动下推及 SHOW_PARENT / SHOW_CHILD / SHOW_ALL / strictly / maxTagCount', async () => {
    const ControlledDemo: React.FC = () => {
      const [strategy, setStrategy] = useState<AbcCheckedStrategy>(TreeSelect.SHOW_PARENT)
      const [strict, setStrict] = useState(false)
      // 测试受控父级 Key ('sys') 在 SHOW_PARENT 模式下能够向下展开勾选全部子节点
      const [val, setVal] = useState<Array<string | number>>(['sys'])

      return (
        <AbcProvider>
          <button
            type="button"
            data-testid="switch-show-child"
            onClick={() => setStrategy(TreeSelect.SHOW_CHILD)}
          >
            切至 SHOW_CHILD
          </button>
          <button
            type="button"
            data-testid="switch-show-all"
            onClick={() => setStrategy(TreeSelect.SHOW_ALL)}
          >
            切至 SHOW_ALL
          </button>
          <button
            type="button"
            data-testid="toggle-strict"
            onClick={() => setStrict((s) => !s)}
          >
            切换独立模式
          </button>

          <TreeSelect
            aria-label="权限树"
            treeData={SAMPLE_TREE}
            treeCheckable
            treeDefaultExpandAll
            treeCheckStrictly={strict}
            showCheckedStrategy={strategy}
            maxTagCount={1}
            value={val}
            onChange={(nextVal) => setVal(nextVal)}
          />
          <div data-testid="value-json">{JSON.stringify(val)}</div>
        </AbcProvider>
      )
    }

    render(<ControlledDemo />)
    // 初始受控 ['sys'] 在 SHOW_PARENT 下展示 1 个父胶囊
    expect(screen.getAllByTestId('tree-select-tag')).toHaveLength(1)
    expect(screen.getByTestId('tree-select-tag')).toHaveTextContent('系统与权限中心')

    // 打开面板，验证受控 ['sys'] 使两个子节点同时呈现已勾选状态
    fireEvent.click(screen.getByRole('combobox', { name: '权限树' }))
    expect(screen.getByTestId('tree-select-node-sys')).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByTestId('tree-select-node-sys:user')).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByTestId('tree-select-node-sys:role')).toHaveAttribute('aria-checked', 'true')

    // 取消勾选其中 1 个叶子节点 -> 父节点应自动进入半选态 aria-checked="mixed"，且触发器回填剩余 1 个子项
    fireEvent.click(screen.getByTestId('tree-select-node-sys:role'))
    expect(screen.getByTestId('tree-select-node-sys')).toHaveAttribute('aria-checked', 'mixed')
    expect(screen.getByTestId('value-json')).toHaveTextContent('["sys:user"]')

    // 重新勾全并切至 SHOW_CHILD -> 触发器展示 +1 折叠胶囊（maxTagCount=1）
    fireEvent.click(screen.getByTestId('switch-show-child'))
    fireEvent.click(screen.getByTestId('tree-select-node-sys:role'))
    expect(screen.getByTestId('value-json')).toHaveTextContent('["sys:user","sys:role"]')
    expect(screen.getAllByTestId('tree-select-tag')).toHaveLength(1)
    expect(screen.getByTestId('tree-select-max-tag')).toHaveTextContent('+1')

    // 切至 SHOW_ALL -> 输出包含父节点和叶子节点全部 3 项（跳过禁用项 order:risk）
    fireEvent.click(screen.getByTestId('switch-show-all'))
    fireEvent.click(screen.getByTestId('tree-select-node-order'))
    expect(screen.getByTestId('value-json')).toHaveTextContent(
      '["sys","sys:user","sys:role","order","order:list"]'
    )

    // 开启严格独立模式后，取消子级不会影响父级勾选
    fireEvent.click(screen.getByTestId('toggle-strict'))
    fireEvent.click(screen.getByTestId('tree-select-node-sys:role'))
    expect(screen.getByTestId('tree-select-node-sys')).toHaveAttribute('aria-checked', 'true')
  })

  it('3. 支持自定义 fieldNames、treeDataSimpleMode 扁平数组构树及中文拼音首字母检索自动展开祖先', async () => {
    const flatDepts = [
      { deptId: 'd-root', parentId: null, deptName: '总部集团', deptCode: 'HQ' },
      { deptId: 'd-rd', parentId: 'd-root', deptName: '研发中心', deptCode: 'RD' },
      { deptId: 'd-fe', parentId: 'd-rd', deptName: '前端架构组', deptCode: 'FE' },
    ]
    const onChange = vi.fn()

    render(
      <AbcProvider>
        <TreeSelect
          aria-label="扁平组织树"
          treeData={flatDepts}
          treeDataSimpleMode={{ id: 'deptId', pId: 'parentId', rootPId: null }}
          fieldNames={{ label: 'deptName', value: 'deptCode' }}
          searchable
          onChange={onChange}
        />
      </AbcProvider>
    )

    fireEvent.click(screen.getByRole('combobox', { name: '扁平组织树' }))
    // 初始仅根节点可见
    expect(screen.getByTestId('tree-select-node-HQ')).toBeInTheDocument()
    expect(screen.queryByTestId('tree-select-node-FE')).toBeNull()

    // 输入拼音首字母 'qd' 命中“前端架构组”并自动展开祖先 HQ -> RD -> FE
    const searchInput = screen.getByTestId('tree-select-search-input')
    fireEvent.change(searchInput, { target: { value: 'qd' } })

    expect(screen.getByTestId('tree-select-node-FE')).toBeInTheDocument()
    expect(screen.getByTestId('tree-select-node-HQ')).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByTestId('tree-select-node-RD')).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(screen.getByTestId('tree-select-node-FE'))
    expect(onChange).toHaveBeenCalledWith(
      'FE',
      ['前端架构组'],
      expect.objectContaining({ checked: true })
    )
  })

  it('4. 支持异步 loadData 懒加载子节点与 2,000 节点零依赖虚拟滚动窗口切片', async () => {
    // 4.1 异步懒加载
    const LazyDemo: React.FC = () => {
      const [treeData, setTreeData] = useState([
        { key: 'cn', title: '中国大区', isLeaf: false },
        { key: 'us', title: '北美大区', isLeaf: true },
      ])
      const [val, setVal] = useState('')

      const handleLoad = async (node: { key: string | number }) => {
        await Promise.resolve()
        setTreeData((prev) =>
          prev.map((item) =>
            item.key === node.key
              ? {
                  ...item,
                  children: [
                    { key: 'cn-hz', title: '华东杭州节点', isLeaf: true },
                    { key: 'cn-bj', title: '华北北京节点', isLeaf: true },
                  ],
                }
              : item
          )
        )
      }

      return (
        <AbcProvider>
          <TreeSelect
            aria-label="异步区域树"
            treeData={treeData}
            value={val}
            loadData={handleLoad}
            onChange={(nextVal) => setVal(nextVal)}
          />
          <div data-testid="lazy-val">{val}</div>
        </AbcProvider>
      )
    }

    render(<LazyDemo />)
    fireEvent.click(screen.getByRole('combobox', { name: '异步区域树' }))
    fireEvent.click(screen.getByTestId('tree-select-expand-cn'))

    const hzNode = await screen.findByTestId('tree-select-node-cn-hz')
    expect(hzNode).toBeInTheDocument()
    fireEvent.click(hzNode)
    expect(screen.getByTestId('lazy-val')).toHaveTextContent('cn-hz')

    // 4.2 2,000 节点虚拟滚动窗口压测
    const bigNodes = Array.from({ length: 2000 }, (_, i) => ({
      key: `n-${i}`,
      title: `超大规模节点-${i}`,
    }))

    render(
      <AbcProvider>
        <TreeSelect
          aria-label="虚拟滚动万级树"
          treeData={bigNodes}
          listHeight={240}
          itemHeight={30}
          virtual
        />
      </AbcProvider>
    )

    fireEvent.click(screen.getByRole('combobox', { name: '虚拟滚动万级树' }))
    const spacer = await screen.findByTestId('tree-select-virtual-spacer')
    expect(spacer).toHaveStyle({ height: '60000px' })

    // 初始仅渲染可视窗口 + overscan（远少于 2000 个 DOM 节点）
    const renderedInitial = spacer.querySelectorAll('[role="treeitem"]')
    expect(renderedInitial.length).toBeGreaterThan(5)
    expect(renderedInitial.length).toBeLessThan(35)
    expect(screen.getByTestId('tree-select-node-n-0')).toBeInTheDocument()
    expect(screen.queryByTestId('tree-select-node-n-1500')).toBeNull()

    // 滚动到第 1500 个节点附近，DOM 窗口自动平移
    const scrollHost = spacer.parentElement as HTMLElement
    fireEvent.scroll(scrollHost, { target: { scrollTop: 1500 * 30 } })

    expect(await screen.findByTestId('tree-select-node-n-1500')).toBeInTheDocument()
    expect(screen.queryByTestId('tree-select-node-n-0')).toBeNull()
  })

  it('5. 支持键盘无障碍导航（方向键展开/收起/回车选择/ESC 关闭）与 ProCrudForm 声明式表单接入', async () => {
    const onSubmit = vi.fn()

    const FormDemo: React.FC = () => {
      const form = useProForm<{ scopes: string[] }>({
        defaultValues: { scopes: [] },
      })
      const fields: ProCrudFormField[] = [
        {
          name: 'scopes',
          label: '数据权限域',
          type: 'treeSelect',
          treeCheckable: true,
          showCheckedStrategy: 'SHOW_CHILD',
          required: true,
          treeData: SAMPLE_TREE,
        },
      ]

      return (
        <AbcProvider>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ProCrudFormLayout
              fields={fields}
              form={form}
              isEdit={false}
              renderFormField={(field) => (
                <ProCrudFormFieldControl
                  field={field}
                  form={form}
                  isEdit={false}
                  editingRecord={null}
                />
              )}
            />
            <button type="submit">保存表单</button>
          </form>
        </AbcProvider>
      )
    }

    render(<FormDemo />)
    const trigger = screen.getByRole('combobox', { name: '数据权限域' })

    // 键盘 ArrowDown 打开 -> ArrowRight 展开第一行 -> ArrowDown 移动到 sys:user -> Enter 勾选
    fireEvent.keyDown(trigger, { key: 'ArrowDown' })
    expect(await screen.findByRole('tree')).toBeInTheDocument()

    fireEvent.keyDown(trigger, { key: 'ArrowRight' })
    expect(await screen.findByTestId('tree-select-node-sys:user')).toBeInTheDocument()

    fireEvent.keyDown(trigger, { key: 'ArrowDown' })
    fireEvent.keyDown(trigger, { key: 'Enter' })

    // Escape 关闭并恢复触发器聚焦契约
    fireEvent.keyDown(trigger, { key: 'Escape' })
    await waitFor(() => {
      expect(screen.queryByRole('tree')).toBeNull()
    })

    fireEvent.click(screen.getByRole('button', { name: '保存表单' }))
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ scopes: ['sys:user'] })
    })
  })
})
