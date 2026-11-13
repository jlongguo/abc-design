import React, { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
  AbcProvider,
  Alert,
  Breadcrumb,
  Button,
  Collapse,
  CommandPalette,
  DEFAULT_ABC_LAYOUT_SETTINGS,
  Descriptions,
  Dialog,
  DictTag,
  Drawer,
  ErrorBoundary,
  IconPicker,
  ImagePreview,
  Input,
  Permission,
  PermissionGuard,
  ProConfigForm,
  ProLayout,
  ProTable,
  Progress,
  Result,
  Select,
  Steps,
  TagInput,
  ThemeCustomizer,
  Tooltip,
  Tree,
  buildCalendarMonthGrid,
  buildCsvContent,
  computeTreeCheckState,
  matchKeywordWithPinyin,
  readQueryFromUrlSearch,
  useAbcConfig,
  writeQueryToUrlSearch,
  type AbcLayoutMode,
  type AbcMenuItem,
} from '../index'

describe('ABC Design System — 全栈四层架构单元测试', () => {
  it('1. 拼音首字母匹配工具支持中文原文与首字母检索', () => {
    expect(matchKeywordWithPinyin('用户权限管理', 'yhqx')).toBe(true)
    expect(matchKeywordWithPinyin('上海金融节点', 'shjr')).toBe(true)
    expect(matchKeywordWithPinyin('上海金融节点', 'bj')).toBe(false)
  })

  it('2. AbcProvider 正确同步 Design Tokens 属性与 <meta name="color-scheme">', async () => {
    const ThemeProbe: React.FC = () => {
      const { theme, setBrand, setDensity, setRadius, setThemeMode } = useAbcConfig()
      return (
        <div>
          <span data-testid="brand">{theme.brand}</span>
          <button onClick={() => setBrand('violet')}>切紫色</button>
          <button onClick={() => setDensity('compact')}>切紧凑</button>
          <button onClick={() => setRadius('lg')}>切大圆角</button>
          <button onClick={() => setThemeMode('dark')}>切暗色</button>
        </div>
      )
    }

    render(
      <AbcProvider persist={false}>
        <ThemeProbe />
      </AbcProvider>
    )

    fireEvent.click(screen.getByText('切紫色'))
    fireEvent.click(screen.getByText('切紧凑'))
    fireEvent.click(screen.getByText('切大圆角'))
    fireEvent.click(screen.getByText('切暗色'))

    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-abc-brand')).toBe('violet')
      expect(document.documentElement.getAttribute('data-abc-density')).toBe('compact')
      expect(document.documentElement.getAttribute('data-abc-radius')).toBe('lg')
      expect(document.documentElement.getAttribute('data-abc-theme')).toBe('dark')
      expect(
        document.querySelector('meta[name="color-scheme"]')?.getAttribute('content')
      ).toBe('dark')
    })
  })

  it('3. 核心原子组件：Button 加载禁用、Select 拼音检索、ImagePreview SVG 渲染与多级 Drawer 栈', async () => {
    const onSelect = vi.fn()
    render(
      <div>
        <Button loading>正在保存</Button>
        <Select
          searchable
          onChange={onSelect}
          options={[
            { label: '北京核心区', value: 'bj' },
            { label: '深圳边缘区', value: 'sz' },
          ]}
        />
        <ImagePreview
          src='<svg data-testid="inline-svg" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg>'
          alt="矢量Logo"
        />
        <Drawer open onClose={() => {}} title="一级抽屉">
          <div>L1 内容</div>
        </Drawer>
        <Drawer open onClose={() => {}} title="二级抽屉">
          <div>L2 内容</div>
        </Drawer>
      </div>
    )

    expect(screen.getByRole('button', { name: /正在保存/ })).toBeDisabled()
    expect(screen.getByAltText('矢量Logo').getAttribute('src')).toContain('data:image/svg+xml;utf8')

    // 验证多级抽屉自动生成 L1 / L2 层级角标
    expect(screen.getByText('L1')).toBeInTheDocument()
    expect(screen.getByText('L2')).toBeInTheDocument()

    // 验证 Select 打开并支持拼音首字母过滤选择
    fireEvent.click(screen.getByRole('combobox'))
    const searchInput = screen.getByPlaceholderText(/拼音/)
    fireEvent.change(searchInput, { target: { value: 'szby' } })
    fireEvent.click(screen.getByRole('option', { name: '深圳边缘区' }))
    expect(onSelect).toHaveBeenCalledWith('sz')
  })

  it('4. Dialog 原生模态框支持开启与关闭回调', () => {
    const onClose = vi.fn()
    render(
      <Dialog open onClose={onClose} title="系统公告">
        <p>模态框正文</p>
      </Dialog>
    )
    expect(screen.getByText('系统公告')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('关闭'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('5. PermissionGuard 与 DictTag 通过 AbcProvider Adapter 解耦工作', () => {
    render(
      <AbcProvider
        persist={false}
        permissionAdapter={(code) => code === 'order:approve'}
        dictAdapter={() => [{ label: '已激活', value: 1, tone: 'success' }]}
      >
        <PermissionGuard permission="order:approve">
          <span>审批通过按钮</span>
        </PermissionGuard>
        <PermissionGuard permission="order:delete" fallback={<span>无权删除</span>}>
          <span>高危删除按钮</span>
        </PermissionGuard>
        <DictTag dictCode="status" value={1} />
      </AbcProvider>
    )

    expect(screen.getByText('审批通过按钮')).toBeInTheDocument()
    expect(screen.queryByText('高危删除按钮')).not.toBeInTheDocument()
    expect(screen.getByText('无权删除')).toBeInTheDocument()
    expect(screen.getByText('已激活')).toBeInTheDocument()
  })

  it('6. ProLayout 完整支持 5 种布局拓扑切换与 KeepAlive 多页签状态保持', async () => {
    const menus: AbcMenuItem[] = [
      {
        key: 'ops',
        label: '运维中心',
        children: [
          { key: 'nodes', label: '节点列表', path: '/ops/nodes' },
          { key: 'logs', label: '审计日志', path: '/ops/logs' },
        ],
      },
    ]

    const StatefulCounter: React.FC<{ label: string }> = ({ label }) => {
      const [count, setCount] = useState(0)
      return (
        <button onClick={() => setCount((c) => c + 1)}>
          {label}:{count}
        </button>
      )
    }

    const Host: React.FC = () => {
      const [path, setPath] = useState('/ops/nodes')
      const [mode, setMode] = useState<AbcLayoutMode>('sidebar')
      return (
        <AbcProvider persist={false}>
          <div>
            {(['sidebar', 'top', 'mix', 'dual-column', 'auth'] as AbcLayoutMode[]).map((m) => (
              <button key={m} onClick={() => setMode(m)}>
                mode-{m}
              </button>
            ))}
          </div>
          <ProLayout
            menuItems={menus}
            pathname={path}
            onNavigate={setPath}
            settings={{
              mode,
              sidebarTone: 'dark',
              sidebarCollapsed: false,
              sidebarAccordion: true,
              showTabs: true,
              keepAlive: true,
              contentWidth: 'fluid',
            }}
            authRender={<div>认证专属卡片视图</div>}
          >
            {path === '/ops/nodes' ? (
              <div>
                <StatefulCounter label="节点计数" />
                <button onClick={() => setPath('/ops/logs')}>去日志页</button>
              </div>
            ) : (
              <div>
                <span>当前为日志页</span>
                <button onClick={() => setPath('/ops/nodes')}>回节点页</button>
              </div>
            )}
          </ProLayout>
        </AbcProvider>
      )
    }

    render(<Host />)

    // 在 /ops/nodes 递增状态后跳转到 /ops/logs 再返回，验证 KeepAlive 保活未丢失计数
    fireEvent.click(screen.getByText('节点计数:0'))
    expect(screen.getByText('节点计数:1')).toBeInTheDocument()

    fireEvent.click(screen.getByText('去日志页'))
    expect(screen.getByText('当前为日志页')).toBeInTheDocument()

    fireEvent.click(screen.getByText('回节点页'))
    expect(screen.getByText('节点计数:1')).toBeInTheDocument()

    // 依次切换 top / mix / dual-column / auth 验证全模态无异常渲染
    fireEvent.click(screen.getByText('mode-top'))
    expect(screen.getByLabelText('顶部主导航')).toBeInTheDocument()

    fireEvent.click(screen.getByText('mode-mix'))
    expect(screen.getByLabelText('顶部主导航')).toBeInTheDocument()

    fireEvent.click(screen.getByText('mode-dual-column'))
    expect(screen.getByText('节点计数:1')).toBeInTheDocument()

    fireEvent.click(screen.getByText('mode-auth'))
    expect(screen.getByText('认证专属卡片视图')).toBeInTheDocument()
  })

  it('7. ProTable 支持前端本地过滤 (clientFilter) 与拼音即时检索', async () => {
    render(
      <AbcProvider persist={false}>
        <ProTable
          columns={[
            { key: 'name', title: '网关名称' },
            { key: 'ip', title: '节点 IP' },
          ]}
          dataSource={[
            { id: 1, name: '华东核心网关', ip: '10.0.1.1' },
            { id: 2, name: '硅谷跨境节点', ip: '10.0.9.8' },
          ]}
          clientFilter
          showClientFilterSwitch
        />
      </AbcProvider>
    )

    expect(screen.getByText('华东核心网关')).toBeInTheDocument()
    expect(screen.getByText('硅谷跨境节点')).toBeInTheDocument()

    const quickInput = screen.getByPlaceholderText(/即时检索/)
    fireEvent.change(quickInput, { target: { value: 'ggkj' } })

    await waitFor(() => {
      expect(screen.queryByText('华东核心网关')).not.toBeInTheDocument()
      expect(screen.getByText('硅谷跨境节点')).toBeInTheDocument()
    })
  })

  it('8. ProConfigForm 支持必填项校验与提交回调', async () => {
    const onSubmit = vi.fn()
    render(
      <AbcProvider persist={false}>
        <ProConfigForm
          initialValues={{ siteTitle: 'ABC Admin', siteLogo: '<svg viewBox="0 0 8 8"></svg>' }}
          groups={[
            {
              key: 'basic',
              title: '基础设置',
              fields: [
                { name: 'siteTitle', label: '站点名称', required: true },
                { name: 'siteLogo', label: '站点Logo', type: 'image' },
              ],
            },
          ]}
          onSubmit={onSubmit}
        />
      </AbcProvider>
    )

    fireEvent.click(screen.getByRole('button', { name: '保存配置' }))
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        siteTitle: 'ABC Admin',
        siteLogo: '<svg viewBox="0 0 8 8"></svg>',
      })
    })
  })

  it('9. @abc-design/core 无头算法：树半选推导、URL Query 双向同步与 42 格月历矩阵', () => {
    const tree = [
      {
        key: 'root',
        title: '系统治理',
        children: [
          { key: 'u1', title: '账号管理' },
          { key: 'u2', title: '角色管理' },
        ],
      },
    ]
    const state = computeTreeCheckState(tree, ['u1'])
    expect(state.checkedKeys).toContain('u1')
    expect(state.checkedKeys).not.toContain('root')
    expect(state.halfCheckedKeys).toContain('root')

    const mergedQuery = writeQueryToUrlSearch('?tenant=t1&old=1', ['old', 'status', 'page'], {
      status: 'active',
      page: 2,
    })
    expect(mergedQuery).toBe('?tenant=t1&status=active&page=2')
    expect(readQueryFromUrlSearch(mergedQuery, ['status', 'page'])).toEqual({
      status: 'active',
      page: '2',
    })

    const grid = buildCalendarMonthGrid(2026, 10)
    expect(grid).toHaveLength(42)
  })

  it('10. 增强表单控件：Input 清空/密码显隐/计数、Select 多选与跳过禁用项、Tree 级联勾选、TagInput、IconPicker', () => {
    const onMultiChange = vi.fn()
    const onTreeCheck = vi.fn()
    const onTagChange = vi.fn()
    const onIconChange = vi.fn()

    render(
      <div>
        <Input
          label="API 密钥"
          type="password"
          defaultValue="secret123"
          clearable
          showCount
          maxLength={20}
        />
        <Select
          multiple
          options={[
            { label: '管理员', value: 'admin' },
            { label: '冻结项', value: 'disabled_role', disabled: true },
            { label: '审计员', value: 'auditor' },
          ]}
          value={['admin']}
          onChange={onMultiChange}
        />
        <Tree
          checkable
          treeData={[
            {
              key: 'p1',
              title: '订单中心',
              children: [
                { key: 'c1', title: '查看订单' },
                { key: 'c2', title: '导出订单' },
              ],
            },
          ]}
          checkedKeys={[]}
          onCheck={onTreeCheck}
        />
        <TagInput value={['SaaS']} onChange={onTagChange} />
        <IconPicker value="Users" onChange={onIconChange} />
      </div>
    )

    // 密码显隐切换与字数统计
    expect(screen.getByText('9/20')).toBeInTheDocument()
    const pwdInput = screen.getByLabelText('API 密钥') as HTMLInputElement
    expect(pwdInput.type).toBe('password')
    fireEvent.click(screen.getByLabelText('显示密码'))
    expect(pwdInput.type).toBe('text')

    // Select 多选追加
    fireEvent.click(screen.getByRole('combobox'))
    fireEvent.click(screen.getByRole('option', { name: '审计员' }))
    expect(onMultiChange).toHaveBeenCalledWith(['admin', 'auditor'])

    // Tree 父节点级联全选子节点
    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[0])
    expect(onTreeCheck).toHaveBeenCalled()

    // TagInput 回车分词添加
    const tagInput = screen.getByLabelText('添加标签输入')
    fireEvent.change(tagInput, { target: { value: 'RBAC' } })
    fireEvent.keyDown(tagInput, { key: 'Enter' })
    expect(onTagChange).toHaveBeenCalledWith(['SaaS', 'RBAC'])

    // IconPicker 内联触发器渲染已选图标文案
    expect(screen.getByText(/用户管理 \(Users\)/)).toBeInTheDocument()
  })

  it('11. 导航、结构化展示、异常反馈与 Permission 禁用降级策略', () => {
    const Boom: React.FC = () => {
      throw new Error('模块渲染故障')
    }
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(
      <AbcProvider persist={false} permissionAdapter={() => false}>
        <Breadcrumb items={[{ key: '1', label: '控制台' }, { key: '2', label: '权限页' }]} />
        <Steps current={1} items={[{ title: '第一步' }, { title: '第二步' }]} />
        <Collapse
          defaultActiveKeys={['k1']}
          items={[{ key: 'k1', label: '折叠项标题', children: '折叠项正文' }]}
        />
        <Descriptions items={[{ label: '集群地域', children: '华东1' }]} />
        <Alert tone="warning" title="连接池告警" />
        <Progress percent={75} />
        <Result status="403" title="无访问权限" subTitle="请联系管理员" />
        <Permission code="sys:root" fallbackStrategy="disable">
          <Button>受限操作</Button>
        </Permission>
        <ErrorBoundary>
          <Boom />
        </ErrorBoundary>
      </AbcProvider>
    )

    expect(screen.getByText('权限页')).toBeInTheDocument()
    expect(screen.getByText('第二步')).toBeInTheDocument()
    expect(screen.getByText('折叠项正文')).toBeInTheDocument()
    expect(screen.getByText('华东1')).toBeInTheDocument()
    expect(screen.getByText('连接池告警')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByText('无访问权限')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '受限操作' })).toBeDisabled()
    expect(screen.getByText(/模块渲染故障/)).toBeInTheDocument()

    spy.mockRestore()
  })

  it('12. Button 多节点水平对齐与 Input/Select 单层外观类名覆盖无嵌套双壳残留', () => {
    const { container } = render(
      <div>
        <Button>
          <span data-testid="btn-text">验证并进入</span>
          <svg data-testid="btn-svg" viewBox="0 0 12 12" />
        </Button>
        <Input
          placeholder="深色登录输入"
          prefixIcon={<span>@</span>}
          className="h-10.5 bg-slate-950/80 border-slate-800 text-slate-100 rounded-xl"
        />
        <Select
          options={[{ label: '全部', value: 'all' }]}
          className="h-8"
        />
      </div>
    )

    const btn = screen.getByRole('button', { name: '验证并进入' })
    expect(screen.getByTestId('btn-text').parentElement).toBe(btn)
    expect(screen.getByTestId('btn-svg').parentElement).toBe(btn)

    const input = screen.getByPlaceholderText('深色登录输入')
    expect(input.className).toContain('bg-slate-950/80')
    expect(input.className).not.toContain('bg-[var(--abc-bg-surface)]')
    expect(input.parentElement?.className).not.toContain('bg-[var(--abc-bg-surface)]')

    const combobox = container.querySelector('[role="combobox"]')
    expect(combobox?.className).toContain('h-8')
    expect(combobox?.className).not.toContain('h-[var(--abc-control-h-sm)]')
  })

  it('13. 浮层脱离裁剪与 Top-Layer 宿主兼容：Tooltip 脱离 overflow-hidden，Dialog 内 Select 挂载于 <dialog> 内部且点击不误关弹窗', () => {
    const onDialogClose = vi.fn()
    const onSelect = vi.fn()

    render(
      <div>
        <div data-testid="clip-box" className="overflow-hidden">
          <Tooltip content="表格密度提示">
            <button type="button">密度触发器</button>
          </Tooltip>
        </div>

        <Dialog open onClose={onDialogClose} title="表单编辑弹窗">
          <Select
            options={[
              { label: '正常履约', value: 'active' },
              { label: '欠费冻结', value: 'frozen' },
            ]}
            onChange={onSelect}
          />
        </Dialog>
      </div>
    )

    // 1. Tooltip 通过 Portal 脱离 overflow-hidden 容器，且按下时自动收起防止双浮层重叠
    const tipTrigger = screen.getByRole('button', { name: '密度触发器' })
    fireEvent.mouseEnter(tipTrigger)
    const tipEl = screen.getByRole('tooltip')
    expect(tipEl).toHaveAttribute('data-abc-floating', '')
    expect(screen.getByTestId('clip-box').contains(tipEl)).toBe(false)
    fireEvent.pointerDown(tipTrigger)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

    // 2. Dialog 内 Select 下拉框挂载在原生 <dialog> 内部（突破 body 滚动区裁剪且不被 #top-layer 遮挡）
    const combobox = screen.getByRole('combobox')
    fireEvent.click(combobox)
    const listbox = screen.getByRole('listbox')
    const dialogEl = listbox.closest('dialog')
    expect(dialogEl).not.toBeNull()
    expect(listbox).toHaveAttribute('data-abc-floating', '')

    // 点击浮层选项时正常选中，且不会触发 Dialog 外部点击误关闭
    fireEvent.mouseDown(screen.getByRole('option', { name: '正常履约' }))
    fireEvent.click(screen.getByRole('option', { name: '正常履约' }))
    expect(onSelect).toHaveBeenCalledWith('active')
    expect(onDialogClose).not.toHaveBeenCalled()
  })

  it('14. 顶部水平导航 (TopHorizontalNav) 子菜单通过 Portal 脱离横向滚动条裁剪并支持点击跳转', () => {
    const onNav = vi.fn()
    render(
      <AbcProvider persist={false}>
        <ProLayout
          menuItems={[
            {
              key: 'customer',
              label: '客户管理',
              children: [
                { key: 'user-list', label: '客户列表', path: '/data/user' },
                { key: 'vip-list', label: '大客户池', path: '/data/vip' },
              ],
            },
          ]}
          pathname="/overview"
          onNavigate={onNav}
          settings={{
            ...DEFAULT_ABC_LAYOUT_SETTINGS,
            mode: 'top',
          }}
        >
          <div>主工作区</div>
        </ProLayout>
      </AbcProvider>
    )

    const topNav = screen.getByLabelText('顶部主导航')
    fireEvent.click(screen.getByRole('button', { name: /客户管理/ }))

    const submenu = screen.getByRole('menu')
    expect(submenu).toHaveAttribute('data-abc-floating', '')
    expect(topNav.contains(submenu)).toBe(false)

    fireEvent.click(screen.getByRole('menuitem', { name: /客户列表/ }))
    expect(onNav).toHaveBeenCalledWith(
      '/data/user',
      expect.objectContaining({ key: 'user-list', path: '/data/user' })
    )
  })

  it('15. Spotlight 级 CommandPalette 采用 720px 宽幅面板，支持分类胶囊筛选与最近访问历史记录', () => {
    window.localStorage.removeItem('abc_cmd_recent_v1')
    const onClose = vi.fn()
    const onNav = vi.fn()
    const onAction = vi.fn()

    const { rerender } = render(
      <AbcProvider persist={false}>
        <CommandPalette
          open
          onClose={onClose}
          menuItems={[{ key: 'orders', label: '订单总览', path: '/orders' }]}
          extraActions={[
            {
              id: 'toggle-dark',
              title: '切换暗黑主题',
              group: '偏好指令',
              onTrigger: onAction,
            },
          ]}
          onNavigate={onNav}
        />
      </AbcProvider>
    )

    const panel = document.querySelector('[data-dialog-panel]') as HTMLElement | null
    expect(panel?.style.width).toBe('min(720px, 92vw)')

    // 切换分类胶囊至“偏好指令”，页面导航项应被过滤隐藏
    fireEvent.click(screen.getByRole('button', { name: '偏好指令' }))
    expect(screen.queryByText('订单总览')).not.toBeInTheDocument()
    expect(screen.getByText('切换暗黑主题')).toBeInTheDocument()

    // 触发指令后写入最近访问记录
    fireEvent.click(screen.getByText('切换暗黑主题'))
    expect(onAction).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveBeenCalledTimes(1)

    // 重新打开后应出现“最近访问”胶囊与分组
    rerender(
      <AbcProvider persist={false}>
        <CommandPalette
          open={false}
          onClose={onClose}
          menuItems={[{ key: 'orders', label: '订单总览', path: '/orders' }]}
          extraActions={[
            {
              id: 'toggle-dark',
              title: '切换暗黑主题',
              group: '偏好指令',
              onTrigger: onAction,
            },
          ]}
          onNavigate={onNav}
        />
      </AbcProvider>
    )
    rerender(
      <AbcProvider persist={false}>
        <CommandPalette
          open
          onClose={onClose}
          menuItems={[{ key: 'orders', label: '订单总览', path: '/orders' }]}
          extraActions={[
            {
              id: 'toggle-dark',
              title: '切换暗黑主题',
              group: '偏好指令',
              onTrigger: onAction,
            },
          ]}
          onNavigate={onNav}
        />
      </AbcProvider>
    )

    expect(screen.getAllByText('最近访问').length).toBeGreaterThanOrEqual(1)
  })

  it('16. ThemeCustomizer 支持自定义 HEX 品牌色合成、色弱无障碍滤镜与一键场景预设联动', async () => {
    const onLayoutChange = vi.fn()

    render(
      <AbcProvider persist={false}>
        <ThemeCustomizer
          open
          onClose={() => {}}
          layoutSettings={DEFAULT_ABC_LAYOUT_SETTINGS}
          onLayoutChange={onLayoutChange}
        />
      </AbcProvider>
    )

    // 自定义 HEX 品牌色实时注入 --abc-brand-50 ~ 950 动态色阶变量
    const colorInput = screen.getByLabelText('拾取自定义品牌色')
    fireEvent.change(colorInput, { target: { value: '#0284c7' } })
    await waitFor(() => {
      expect(document.documentElement.style.getPropertyValue('--abc-brand-600')).toBe('#0284c7')
      expect(document.documentElement.style.getPropertyValue('--abc-brand-50')).toContain(
        'color-mix'
      )
    })

    // 切换无障碍色弱增强滤镜
    fireEvent.click(screen.getByText('色弱增强'))
    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-abc-visual')).toBe('color-weak')
    })

    // 点击一键工作台场景预设联动布局参数
    fireEvent.click(screen.getByText('大屏数据驾驶舱'))
    expect(onLayoutChange).toHaveBeenCalledWith(
      expect.objectContaining({ mode: 'top', tabStyle: 'pill' })
    )
  })

  it('17. ProTable 全量企业级交互：搜索栏超 3 项折叠、右键表头菜单、行展开子面板、批量悬浮栏与 CSV 导出', async () => {
    const onBatchExportSelected = vi.fn()

    render(
      <AbcProvider persist={false}>
        <ProTable
          title="节点资产台账"
          columns={[
            { key: 'name', title: '节点名称', sortable: true },
            {
              key: 'status',
              title: '状态',
              options: [
                { label: '在线运行', value: 'online' },
                { label: '维护离线', value: 'offline' },
              ],
            },
          ]}
          dataSource={[
            { id: 101, name: '东京核心网关,A区', status: 'online', detail: 'BGP 专线双活' },
            { id: 102, name: '法兰克福节点', status: 'offline', detail: '例行割接维护' },
          ]}
          fields={[
            { name: 'name', label: '节点名称' },
            { name: 'region', label: '所属大区' },
            { name: 'isp', label: '运营商' },
            { name: 'owner', label: '负责人' },
          ]}
          expandable={{
            expandedRowRender: (row) => <div>拓扑详情：{row.detail}</div>,
          }}
          rowActions={[
            { key: 'ping', label: '拨测', onClick: () => {} },
            { key: 'restart', label: '重启', onClick: () => {} },
            { key: 'drain', label: '摘流', onClick: () => {} },
            { key: 'audit', label: '审计', onClick: () => {} },
          ]}
          batchActions={[
            {
              key: 'batch-check',
              label: '批量巡检',
              onClick: onBatchExportSelected,
            },
          ]}
        />
      </AbcProvider>
    )

    // 1. 搜索字段超过 3 项时默认折叠第 4 项，点击“展开 (1)”后显现
    expect(screen.queryByPlaceholderText('搜索负责人')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /展开 \(1\)/ }))
    expect(screen.getByPlaceholderText('搜索负责人')).toBeInTheDocument()

    // 2. 右键点击表头弹出列快捷控制菜单
    const nameHeader = screen
      .getAllByText('节点名称')
      .map((el) => el.closest('th'))
      .find(Boolean)!
    fireEvent.contextMenu(nameHeader, { clientX: 120, clientY: 80 })
    const ctxMenu = screen.getByRole('menu', { name: '节点名称 列操作菜单' })
    expect(ctxMenu).toHaveAttribute('data-abc-floating', '')
    expect(screen.getByRole('menuitem', { name: /固定到左侧/ })).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })

    // 3. 点击展开详情行按钮渲染子面板
    const expandBtns = screen.getAllByLabelText('展开详情行')
    fireEvent.click(expandBtns[0])
    expect(screen.getByText('拓扑详情：BGP 专线双活')).toBeInTheDocument()

    // 4. 行内自定义动作超出阈值自动折叠至“更多操作”下拉菜单
    expect(screen.getAllByLabelText('更多操作').length).toBe(2)

    // 5. 勾选首行触发底部悬浮毛玻璃批量操作胶囊栏
    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[1])
    const batchBar = screen.getByRole('region', { name: '批量操作栏' })
    expect(batchBar).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '批量巡检' }))
    expect(onBatchExportSelected).toHaveBeenCalledWith(
      [101],
      [expect.objectContaining({ id: 101, name: '东京核心网关,A区' })]
    )

    // 6. UTF-8 BOM CSV 构建工具正确转义逗号并映射枚举选项标签
    const csv = buildCsvContent(
      [
        { key: 'name', title: '节点名称' },
        {
          key: 'status',
          title: '状态',
          options: [{ label: '在线运行', value: 'online' }],
        },
      ],
      [{ name: '东京核心网关,A区', status: 'online' }]
    )
    expect(csv.startsWith('\uFEFF')).toBe(true)
    expect(csv).toContain('"东京核心网关,A区",在线运行')
  })
})
