import React, { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
  AbcProvider,
  ActiveFilterBar,
  BatchActionTracker,
  ConfigDiffViewer,
  Input,
  ProSplitWorkbench,
  ProStepsForm,
  ResizableSplitPane,
  RuleBuilder,
  SavedFilterViews,
  type AbcRuleFieldSchema,
  type AbcTreeNode,
  type BatchTaskItem,
  type SavedFilterViewItem,
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

describe('高阶工作台、规则筛选器与向导组件联动测试 (Phase 3)', () => {
  it('1. ResizableSplitPane 支持键盘 ArrowRight 调节、双击复位与折叠恢复切换', () => {
    const { container } = renderWithAbc(
      <ResizableSplitPane
        defaultSize={260}
        minSize={180}
        maxSize={420}
        firstPane={<div>左侧导航</div>}
        secondPane={<div>右侧内容</div>}
      />
    )

    const root = container.querySelector('[data-slot="resizable-split-pane"]') as HTMLElement
    const firstPane = container.querySelector('[data-slot="resizable-split-first-pane"]') as HTMLElement
    const separator = screen.getByRole('separator')

    expect(separator).toHaveAttribute('aria-valuenow', '260')

    // 键盘 ArrowRight 步进增大 16px
    fireEvent.keyDown(separator, { key: 'ArrowRight' })
    expect(separator).toHaveAttribute('aria-valuenow', '276')

    // 双击分隔条复位回 defaultSize
    fireEvent.doubleClick(separator)
    expect(separator).toHaveAttribute('aria-valuenow', '260')

    // 折叠面板隐藏第一分栏并移除分隔条，再展开恢复
    fireEvent.click(screen.getByRole('button', { name: '折叠面板' }))
    expect(root).toHaveAttribute('data-collapsed', 'true')
    expect(firstPane).toHaveAttribute('aria-hidden', 'true')
    expect(firstPane.style.display).toBe('none')
    expect(screen.queryByRole('separator')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: '展开面板' }))
    expect(root).toHaveAttribute('data-collapsed', 'false')
    expect(firstPane.style.display).toBe('')
    expect(screen.getByRole('separator')).toHaveAttribute('aria-valuenow', '260')
  })

  it('2. ProSplitWorkbench 渲染树节点与 counts 徽标、detailPanel，并支持节点切换与“全部”返回 null', () => {
    const onSelectKey = vi.fn()
    const treeData: AbcTreeNode[] = [
      {
        key: 'cluster',
        title: '集群资产',
        children: [{ key: 'worker', title: '执行节点' }],
      },
    ]

    renderWithAbc(
      <ProSplitWorkbench
        treeData={treeData}
        counts={{ cluster: 8, worker: 5 }}
        allCount={13}
        onSelectKey={onSelectKey}
        detailOpen
        detailPanel={<div data-testid="split-detail">节点详情面板</div>}
      >
        <div>主工作区列表</div>
      </ProSplitWorkbench>
    )

    expect(screen.getByText('13')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByTestId('split-detail')).toBeInTheDocument()

    // 点击树节点联动触发 onSelectKey
    fireEvent.click(screen.getByRole('button', { name: '执行节点' }))
    expect(onSelectKey).toHaveBeenCalledWith(
      'worker',
      expect.objectContaining({ key: 'worker', title: '执行节点' })
    )

    // 点击“全部视图”返回 null
    fireEvent.click(screen.getByRole('button', { name: /全部视图/ }))
    expect(onSelectKey).toHaveBeenLastCalledWith(null, undefined)
  })

  it('3. FilterBuilder (RuleBuilder) 切换字段自动重置运算符与右值控件，is_empty 隐藏右值，支持添加子条件组', () => {
    const fields: AbcRuleFieldSchema[] = [
      { name: 'service', label: '服务名', type: 'string' },
      { name: 'latency', label: '延迟', type: 'number', unit: 'ms' },
      {
        name: 'status',
        label: '状态',
        type: 'enum',
        options: [
          { label: '运行中', value: 'running' },
          { label: '已停止', value: 'stopped' },
        ],
      },
    ]

    const { container } = renderWithAbc(<RuleBuilder fields={fields} />)

    // 初始为 string 字段（默认运算符 contains），右侧为文本输入框
    expect(screen.getByLabelText('服务名输入值')).toBeInTheDocument()

    // 从 string 切换为 enum 字段：contains 不支持，运算符自动重置为 enum 默认 'in'（属于任一）
    fireEvent.click(screen.getByRole('combobox', { name: '条件字段' }))
    fireEvent.click(screen.getByRole('option', { name: '状态' }))

    expect(screen.getByRole('combobox', { name: '条件运算符' })).toHaveTextContent('属于任一')
    expect(screen.queryByLabelText('服务名输入值')).toBeNull()
    expect(screen.getByRole('combobox', { name: '状态选项值' })).toBeInTheDocument()

    // 从 enum 切换为 number 字段：in 不支持，运算符自动重置为 number 默认 'eq'（等于 (=)），右侧变为数值输入框
    fireEvent.click(screen.getByRole('combobox', { name: '条件字段' }))
    fireEvent.click(screen.getByRole('option', { name: '延迟' }))

    expect(screen.getByRole('combobox', { name: '条件运算符' })).toHaveTextContent('等于 (=)')
    expect(screen.queryByRole('combobox', { name: '状态选项值' })).toBeNull()
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
    expect(screen.getByText('ms')).toBeInTheDocument()

    // 切换为 is_empty：隐藏右值输入控件，展示无需输入参数徽标
    fireEvent.click(screen.getByRole('combobox', { name: '条件运算符' }))
    fireEvent.click(screen.getByRole('option', { name: '为空' }))
    expect(screen.queryByRole('spinbutton')).toBeNull()
    expect(container.querySelector('[data-slot="rule-no-value-badge"]')).toHaveTextContent(
      '无需输入参数'
    )

    // 添加嵌套子条件组
    fireEvent.click(screen.getByRole('button', { name: '添加子条件组' }))
    expect(container.querySelector('[data-slot="rule-group-node"][data-depth="1"]')).toBeInTheDocument()
  })

  it('4. SavedFilterViews 锁定 builtIn 视图不可删、在 isDirty 时支持另存为新视图，ActiveFilterBar 精确分发移除与清空事件', () => {
    const onSaveAsView = vi.fn()
    const onRemove = vi.fn()
    const onClearAll = vi.fn()

    const defaultViews: SavedFilterViewItem<{ env: string }>[] = [
      { id: 'builtin_all', name: '系统内置', filter: { env: 'all' }, builtIn: true, count: 12 },
      { id: 'custom_1', name: '我的视图', filter: { env: 'staging' } },
    ]

    renderWithAbc(
      <div>
        <SavedFilterViews
          defaultViews={defaultViews}
          activeViewId="builtin_all"
          currentFilter={{ env: 'prod' }}
          isDirty
          onSaveAsView={onSaveAsView}
        />
        <ActiveFilterBar
          totalCount={20}
          filteredCount={4}
          chips={[
            { key: 'env', label: '环境', valueText: 'prod', source: 'rule' },
            { key: 'region', label: '区域', valueText: 'cn-hz', source: 'toolbar' },
          ]}
          onRemove={onRemove}
          onClearAll={onClearAll}
        />
      </div>
    )

    // builtIn 视图不渲染删除按钮，自定义视图存在删除按钮
    expect(screen.queryByRole('button', { name: '删除视图 系统内置' })).toBeNull()
    expect(screen.getByRole('button', { name: '删除视图 我的视图' })).toBeInTheDocument()
    expect(screen.getByText('已修改')).toBeInTheDocument()

    // 另存为新视图
    fireEvent.click(screen.getByRole('button', { name: '另存为视图' }))
    fireEvent.change(screen.getByLabelText('新视图名称'), { target: { value: '生产精选' } })
    fireEvent.click(screen.getByRole('button', { name: '保存' }))

    expect(onSaveAsView).toHaveBeenCalledWith('生产精选', { env: 'prod' })
    expect(screen.getByRole('tab', { name: '生产精选' })).toBeInTheDocument()

    // ActiveFilterBar 单个移除与全局清空
    fireEvent.click(screen.getByRole('button', { name: '移除筛选 环境' }))
    expect(onRemove).toHaveBeenCalledWith('env')

    fireEvent.click(screen.getByRole('button', { name: '清空筛选' }))
    expect(onClearAll).toHaveBeenCalledTimes(1)
  })

  it('5. ProStepsForm 支持同步/异步校验阻断并展示 Alert、跨步草稿保留及末步汇总提交', async () => {
    interface WizardValues {
      name: string
      endpoint: string
    }

    const onFinish = vi.fn()

    function WizardDemo() {
      const [externalStep, setExternalStep] = useState(0)
      return (
        <ProStepsForm<WizardValues>
          initialValues={{ name: '', endpoint: '' }}
          current={externalStep}
          onCurrentChange={setExternalStep}
          onFinish={onFinish}
          steps={[
            {
              key: 'base',
              title: '基本信息',
              validate: async (vals) => {
                if (!vals.name.trim()) return '请先填写任务名称'
                await Promise.resolve()
                return undefined
              },
              render: ({ values, setValue }) => (
                <Input
                  aria-label="任务名称"
                  value={values.name}
                  onChange={(e) => setValue('name', e.target.value)}
                />
              ),
            },
            {
              key: 'target',
              title: '目标配置',
              render: ({ values, setValue }) => (
                <Input
                  aria-label="目标地址"
                  value={values.endpoint}
                  onChange={(e) => setValue('endpoint', e.target.value)}
                />
              ),
            },
          ]}
        />
      )
    }

    renderWithAbc(<WizardDemo />)

    // 第 1 步校验失败：阻断停留第 1 步并展示 Alert 错误
    fireEvent.click(screen.getByRole('button', { name: '下一步' }))
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('请先填写任务名称')
    })
    expect(screen.getByText('步骤 1 / 2')).toBeInTheDocument()

    // 修正后异步校验通过进入第 2 步
    fireEvent.change(screen.getByLabelText('任务名称'), { target: { value: 'daily-sync' } })
    fireEvent.click(screen.getByRole('button', { name: '下一步' }))
    await waitFor(() => {
      expect(screen.getByText('步骤 2 / 2')).toBeInTheDocument()
    })

    // 填写第 2 步后回退第 1 步，验证原草稿完整保留
    fireEvent.change(screen.getByLabelText('目标地址'), { target: { value: 'https://edge.io' } })
    fireEvent.click(screen.getByRole('button', { name: '上一步' }))
    expect(screen.getByText('步骤 1 / 2')).toBeInTheDocument()
    expect(screen.getByLabelText('任务名称')).toHaveValue('daily-sync')

    // 再前进到末步并提交，验证 onFinish 携带完整汇总字段
    fireEvent.click(screen.getByRole('button', { name: '下一步' }))
    await waitFor(() => {
      expect(screen.getByText('步骤 2 / 2')).toBeInTheDocument()
    })
    expect(screen.getByLabelText('目标地址')).toHaveValue('https://edge.io')
    fireEvent.click(screen.getByRole('button', { name: '提交' }))

    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledWith({
        name: 'daily-sync',
        endpoint: 'https://edge.io',
      })
    })
  })

  it('6. ConfigDiffViewer 展示结构化字段对比统计与脱敏显示，BatchActionTracker 过滤失败条目并透传 failedIds 重试', () => {
    const onRetryFailed = vi.fn()
    const batchItems: BatchTaskItem[] = [
      { id: 't1', title: '节点-1 同步', status: 'succeeded', durationMs: 120 },
      { id: 't2', title: '节点-2 同步', status: 'failed', error: '连接超时' },
      { id: 't3', title: '节点-3 同步', status: 'running' },
      { id: 't4', title: '节点-4 同步', status: 'failed', error: '鉴权失效' },
    ]

    renderWithAbc(
      <div>
        <ConfigDiffViewer
          before={{ timeout: 1000, deprecatedKey: 'old', apiToken: 'raw_secret_before' }}
          after={{ timeout: 3000, maxRetries: 5, apiToken: 'raw_secret_after' }}
          labels={{ timeout: '超时时间', apiToken: '接口令牌' }}
        />
        <BatchActionTracker items={batchItems} onRetryFailed={onRetryFailed} />
      </div>
    )

    // ConfigDiffViewer 计数统计（timeout 与 apiToken 两项修改）与脱敏展示（原始密钥不泄漏）
    expect(screen.getByText('+1 新增')).toBeInTheDocument()
    expect(screen.getByText('~2 修改')).toBeInTheDocument()
    expect(screen.getByText('-1 删除')).toBeInTheDocument()
    expect(screen.getByText('敏感字段已脱敏')).toBeInTheDocument()
    expect(screen.getAllByText('••••••••').length).toBeGreaterThanOrEqual(2)
    expect(screen.queryByText('raw_secret_before')).toBeNull()
    expect(screen.queryByText('raw_secret_after')).toBeNull()

    // BatchActionTracker 点击“失败”胶囊过滤，并点击“重试失败项”透传 failedIds
    fireEvent.click(screen.getByRole('button', { name: /失败 2/ }))
    expect(screen.queryByText('节点-1 同步')).toBeNull()
    expect(screen.queryByText('节点-3 同步')).toBeNull()
    expect(screen.getByText('节点-2 同步')).toBeInTheDocument()
    expect(screen.getByText('节点-4 同步')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /重试失败项/ }))
    expect(onRetryFailed).toHaveBeenCalledWith(['t2', 't4'])
  })
})
