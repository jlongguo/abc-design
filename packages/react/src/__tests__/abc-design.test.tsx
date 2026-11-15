import React, { useRef, useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import {
  AbcProvider,
  ActionCard,
  Alert,
  BentoCard,
  BentoGrid,
  Breadcrumb,
  Button,
  Card,
  CheckCard,
  CheckCardGroup,
  Checkbox,
  Collapse,
  CollapsibleCard,
  CommandPalette,
  DEFAULT_ABC_LAYOUT_SETTINGS,
  Descriptions,
  Dialog,
  DictTag,
  Drawer,
  Dropdown,
  ErrorBoundary,
  IconPicker,
  ImagePreview,
  Input,
  MetricCard,
  Pagination,
  CursorPagination,
  SmartPagination,
  Permission,
  PermissionGuard,
  PricingCard,
  ProCommandPalette,
  ProConfigForm,
  ProFormContainer,
  ProLayout,
  ProLogViewer,
  ProTable,
  Progress,
  RadioGroup,
  Result,
  Select,
  SelectField,
  SidebarNav,
  StatusTag,
  Steps,
  Switch,
  Tabs,
  TagInput,
  ThemeCustomizer,
  ThemeSwitcher,
  Tooltip,
  Tree,
  Watermark,
  buildCalendarMonthGrid,
  buildCsvContent,
  computeTreeCheckState,
  matchKeywordWithPinyin,
  readQueryFromUrlSearch,
  useAbcConfig,
  useFloatingPosition,
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

  it('18. 全域 xs/sm/md/lg 四档规格继承 AbcProvider.componentSize 并支持局部覆写', () => {
    function Matrix() {
      const { theme, setComponentSize } = useAbcConfig()
      const current = theme.componentSize ?? 'sm'
      return (
        <div>
          <Button data-testid="switch-lg-btn" onClick={() => setComponentSize('lg')}>
            切换全域LG
          </Button>
          <Button data-testid="inherited-btn">默认继承按钮</Button>
          <Button data-testid="override-xs-btn" size="xs">
            超小覆写
          </Button>
          <Input data-testid="inherited-input" aria-label="inherited-input" />
          <Select
            aria-label="inherited-select"
            defaultValue="a"
            options={[{ label: '选项A', value: 'a' }]}
          />
          <Switch aria-label="inherited-switch" defaultChecked />
          <Checkbox aria-label="inherited-checkbox" label="复选框" />
          <RadioGroup
            aria-label="inherited-radio"
            defaultValue="r1"
            options={[{ label: '单选1', value: 'r1' }]}
          />
          <StatusTag>运行状态标签</StatusTag>
          <Tabs
            items={[
              { key: 't1', label: '页签1' },
              { key: 't2', label: '页签2' },
            ]}
          />
          <Pagination total={40} pageSize={10} page={1} controlSize="xs" onChange={() => {}} />
          <Progress percent={60} size={current} />
          <Card data-testid="card-size" title="尺寸卡片">
            内容
          </Card>
        </div>
      )
    }

    render(
      <AbcProvider persist={false} defaultTheme={{ componentSize: 'sm' }}>
        <Matrix />
      </AbcProvider>
    )

    const smBtnClass = screen.getByTestId('inherited-btn').className
    const smTagClass = screen.getByText('运行状态标签').closest('span[data-motion]')!.className
    expect(screen.getByTestId('card-size').getAttribute('data-size')).toBe('sm')

    fireEvent.click(screen.getByTestId('switch-lg-btn'))

    const lgBtnClass = screen.getByTestId('inherited-btn').className
    const xsOverrideBtnClass = screen.getByTestId('override-xs-btn').className
    const lgTagClass = screen.getByText('运行状态标签').closest('span[data-motion]')!.className

    expect(lgBtnClass).not.toBe(smBtnClass)
    expect(xsOverrideBtnClass).not.toBe(lgBtnClass)
    expect(lgTagClass).not.toBe(smTagClass)
    expect(screen.getByTestId('card-size').getAttribute('data-size')).toBe('lg')
  })

  it('19. 多规格动效体系 (none/subtle/smooth/spring) 透传 data-motion 且 none 模式零延迟卸载', () => {
    function MotionSwitchDemo() {
      const { theme, setMotion } = useAbcConfig()
      const [open, setOpen] = useState(true)
      return (
        <div>
          <span data-testid="motion-state">{theme.motion}</span>
          <Button data-testid="motion-btn" onClick={() => setMotion('spring')}>
            切换弹簧
          </Button>
          <Button variant="outline" onClick={() => setMotion('none')}>
            关闭动效
          </Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            关闭弹窗
          </Button>
          <Dropdown
            trigger="click"
            items={[{ key: 'edit', label: '编辑配置' }]}
            motion="none"
          >
            <Button>打开菜单</Button>
          </Dropdown>
          <Dialog open={open} onClose={() => setOpen(false)} title="零延迟弹窗" motion="none">
            <span>弹窗正文</span>
          </Dialog>
        </div>
      )
    }

    render(
      <AbcProvider persist={false} defaultTheme={{ motion: 'smooth' }}>
        <MotionSwitchDemo />
      </AbcProvider>
    )

    expect(document.documentElement.dataset.abcMotion).toBe('smooth')
    expect(screen.getByTestId('motion-btn').getAttribute('data-motion')).toBe('smooth')

    fireEvent.click(screen.getByTestId('motion-btn'))
    expect(document.documentElement.dataset.abcMotion).toBe('spring')
    expect(screen.getByTestId('motion-btn').getAttribute('data-motion')).toBe('spring')

    // Dialog 使用 motion="none" 时，关闭应同步即时卸载
    expect(screen.getByText('弹窗正文')).toBeTruthy()
    fireEvent.click(screen.getByText('关闭弹窗'))
    expect(screen.queryByText('弹窗正文')).toBeNull()
  })

  it('20. ProTable 操作列支持左边缘拖拽调宽、列设置数值修改及表头实时嵌入重排与 Esc 回滚', async () => {
    const rows = [{ id: '1', name: '上海网关', region: '华东区', qps: 5000 }]

    render(
      <AbcProvider persist={false}>
        <ProTable
          rowKey="id"
          dataSource={rows}
          columns={[
            { key: 'name', title: '实例名称', dataIndex: 'name', width: 160 },
            { key: 'region', title: '可用区', dataIndex: 'region', width: 140 },
            { key: 'qps', title: '峰值QPS', dataIndex: 'qps', width: 120 },
          ]}
          viewable
        />
      </AbcProvider>
    )

    // 1) 操作列左边缘拖拽调宽与 <col> 锁定
    const actionCol = document.querySelector<HTMLTableColElement>('col[data-col-width-key="__abc_actions__"]')
    expect(actionCol).not.toBeNull()
    const initialActionWidth = parseInt(actionCol?.style.width || '0', 10)
    expect(initialActionWidth).toBeGreaterThanOrEqual(80)

    const actionHeader = screen.getByText('操作').closest('th') as HTMLTableCellElement
    const actionSeparator = actionHeader.querySelector('[role="separator"]') as HTMLElement
    expect(actionSeparator).not.toBeNull()

    // 向左拖拽 40px 应增宽右侧固定操作列
    fireEvent.mouseDown(actionSeparator, { clientX: 500 })
    fireEvent.mouseMove(window, { clientX: 460 })
    fireEvent.mouseUp(window, { clientX: 460 })
    const resizedWidth = parseInt(actionCol?.style.width || '0', 10)
    expect(resizedWidth).toBeGreaterThan(initialActionWidth)

    // 2) 通过 ProColumnSettingsPopover 中的 "操作 列宽" 输入框调节列宽
    const settingsBtn = screen.getByLabelText('列与密度设置')
    fireEvent.click(settingsBtn)
    const widthInput = await screen.findByLabelText('操作 列宽')
    fireEvent.change(widthInput, { target: { value: '240' } })
    fireEvent.blur(widthInput)
    expect(actionCol?.style.width).toBe('240px')

    // 3) 表头实时 dragOver 重排 + data-dragging + Escape 回滚
    const nameTh = document.querySelector('th[data-col-key="name"]') as HTMLTableCellElement
    const regionTh = document.querySelector('th[data-col-key="region"]') as HTMLTableCellElement
    const qpsTh = document.querySelector('th[data-col-key="qps"]') as HTMLTableCellElement

    nameTh.getBoundingClientRect = () => ({ left: 0, right: 160, width: 160, top: 0, bottom: 40, height: 40, x: 0, y: 0, toJSON: () => ({}) })
    regionTh.getBoundingClientRect = () => ({ left: 160, right: 300, width: 140, top: 0, bottom: 40, height: 40, x: 160, y: 0, toJSON: () => ({}) })
    qpsTh.getBoundingClientRect = () => ({ left: 300, right: 420, width: 120, top: 0, bottom: 40, height: 40, x: 300, y: 0, toJSON: () => ({}) })

    const headerLabels = () =>
      Array.from(document.querySelectorAll('thead th')).map((th) => th.textContent?.trim() ?? '')

    const initialOrder = headerLabels()
    const nameIdxBefore = initialOrder.findIndex((t) => t.includes('实例名称'))
    const regionIdxBefore = initialOrder.findIndex((t) => t.includes('可用区'))
    expect(nameIdxBefore).toBeLessThan(regionIdxBefore)

    const dt = { setData: vi.fn(), effectAllowed: 'move' }
    fireEvent.dragStart(nameTh, { dataTransfer: dt, clientX: 80 })
    expect(nameTh.getAttribute('data-dragging')).toBe('true')

    // 拖入目标右半区 (left=160, width=140 -> 65%+ 处 clientX=270) 在未 drop 时即应完成实时换位
    fireEvent.dragOver(regionTh, { dataTransfer: dt, clientX: 270 })
    const swappedOrder = headerLabels()
    expect(swappedOrder.findIndex((t) => t.includes('实例名称'))).toBeGreaterThan(
      swappedOrder.findIndex((t) => t.includes('可用区'))
    )

    // 按 Escape 取消拖拽应回滚到拖拽前顺序
    fireEvent.keyDown(document, { key: 'Escape' })
    const rolledBackOrder = headerLabels()
    expect(rolledBackOrder.findIndex((t) => t.includes('实例名称'))).toBeLessThan(
      rolledBackOrder.findIndex((t) => t.includes('可用区'))
    )
    expect(nameTh.getAttribute('data-dragging')).not.toBe('true')
  })

  it('21. 全新企业级卡片矩阵 (MetricCard/CheckCard/ActionCard/CollapsibleCard/PricingCard/BentoGrid) 交互正确', () => {
    const onSingleChange = vi.fn()
    const onMultiChange = vi.fn()
    const onCardClick = vi.fn()
    const onExtraClick = vi.fn()
    const onPricingSelect = vi.fn()

    render(
      <AbcProvider persist={false}>
        <div>
          <MetricCard
            title="核心吞吐量"
            prefix="$"
            value="98,400"
            suffix="/h"
            trend={{ value: '+12%', direction: 'up', label: '环比' }}
            sparkline={[10, 20, 15, 30]}
          />

          <CheckCardGroup value="a" onChange={onSingleChange} columns={2}>
            <CheckCard value="a" title="单选卡A" description="说明A" />
            <CheckCard value="b" title="单选卡B" description="说明B" />
            <CheckCard value="c" title="禁用卡C" description="说明C" disabled />
          </CheckCardGroup>

          <CheckCardGroup multiple value={['m1']} onChange={onMultiChange} columns={2}>
            <CheckCard value="m1" title="多选模块1" />
            <CheckCard value="m2" title="多选模块2" />
          </CheckCardGroup>

          <ActionCard
            title="策略动作卡"
            description="主热区与独立操作隔离"
            tags={['高可用']}
            onClick={onCardClick}
            extra={
              <Button size="xs" onClick={onExtraClick}>
                右上独立按钮
              </Button>
            }
          />

          <CollapsibleCard title="可折叠详情" defaultOpen={false}>
            <span>折叠内部正文</span>
          </CollapsibleCard>

          <PricingCard
            tier="旗舰版"
            price="¥999"
            period="/月"
            badge="主推"
            recommended
            features={['全功能权限', { text: '私有部署', included: false }]}
            ctaText="立即订阅"
            onSelect={onPricingSelect}
          />

          <BentoGrid columns={3} gap="md">
            <BentoCard colSpan={2} rowSpan={2} eyebrow="网格块" title="非对称卡片" description="跨行跨列" />
            <BentoCard title="伴随卡片" description="标准单格" />
          </BentoGrid>
        </div>
      </AbcProvider>
    )

    // MetricCard SVG 微趋势图与数值
    expect(screen.getByText('核心吞吐量')).toBeTruthy()
    expect(screen.getByText('98,400')).toBeTruthy()
    expect(document.querySelector('svg polyline, svg path')).not.toBeNull()

    // CheckCardGroup 单选与禁用校验
    fireEvent.click(screen.getByText('单选卡B'))
    expect(onSingleChange).toHaveBeenCalledWith('b')
    fireEvent.click(screen.getByText('禁用卡C'))
    expect(onSingleChange).toHaveBeenCalledTimes(1)

    // CheckCardGroup 多选校验
    fireEvent.click(screen.getByText('多选模块2'))
    expect(onMultiChange).toHaveBeenCalledWith(['m1', 'm2'])

    // ActionCard 点击热区 vs extra 按钮隔离
    fireEvent.click(screen.getByText('右上独立按钮'))
    expect(onExtraClick).toHaveBeenCalledTimes(1)
    expect(onCardClick).not.toHaveBeenCalled()
    fireEvent.click(screen.getByText('策略动作卡'))
    expect(onCardClick).toHaveBeenCalledTimes(1)

    // CollapsibleCard 折叠切换
    const collapseToggle = screen.getByRole('button', { name: /可折叠详情/ })
    expect(collapseToggle.getAttribute('aria-expanded')).toBe('false')
    fireEvent.click(collapseToggle)
    expect(collapseToggle.getAttribute('aria-expanded')).toBe('true')

    // PricingCard & BentoGrid
    expect(screen.getByText('主推')).toBeTruthy()
    fireEvent.click(screen.getByText('立即订阅'))
    expect(onPricingSelect).toHaveBeenCalledTimes(1)
    expect(screen.getByText('非对称卡片')).toBeTruthy()
  })

  it('22. ProLayout 侧边栏与双栏导航完整响应全局 componentSize (xs/sm/md/lg) 及局部 size 覆写', () => {
    const menus: AbcMenuItem[] = [
      {
        key: 'ops',
        label: '运维治理',
        icon: 'settings',
        children: [
          { key: 'nodes', label: '网关节点', path: '/ops/nodes', icon: 'dashboard' },
          { key: 'audit', label: '操作审计', path: '/ops/audit', icon: 'shield' },
        ],
      },
    ]

    function SidebarSizeHost() {
      const { setComponentSize } = useAbcConfig()
      const [mode, setMode] = useState<AbcLayoutMode>('sidebar')
      return (
        <div>
          <button type="button" onClick={() => setComponentSize('xs')}>
            size-xs
          </button>
          <button type="button" onClick={() => setComponentSize('sm')}>
            size-sm
          </button>
          <button type="button" onClick={() => setComponentSize('lg')}>
            size-lg
          </button>
          <button type="button" onClick={() => setMode('dual-column')}>
            mode-dual
          </button>
          <ProLayout
            brand={{ name: 'ABC Cloud', subtitle: 'Console' }}
            menuItems={menus}
            pathname="/ops/nodes"
            onNavigate={() => {}}
            settings={{ mode }}
          >
            <div>内容区</div>
          </ProLayout>
          <SidebarNav
            items={menus}
            pathname="/ops/nodes"
            size="xs"
            onNavigate={() => {}}
            className="override-xs-sidebar"
          />
        </div>
      )
    }

    render(
      <AbcProvider persist={false} defaultTheme={{ componentSize: 'sm' }}>
        <SidebarSizeHost />
      </AbcProvider>
    )

    const sidebars = screen.getAllByLabelText('侧边主导航')
    const primaryAside = sidebars.find((el) => !el.classList.contains('override-xs-sidebar'))!
    const overrideAside = sidebars.find((el) => el.classList.contains('override-xs-sidebar'))!

    // 1) 默认 sm 态断言：data-size="sm"、无写死内联 --abc-sidebar-w、一级/二级菜单尺寸类名与图标像素值正确
    expect(document.documentElement.getAttribute('data-abc-size')).toBe('sm')
    expect(primaryAside.getAttribute('data-size')).toBe('sm')
    expect(overrideAside.getAttribute('data-size')).toBe('xs')
    const layoutRoot = primaryAside.closest('[data-motion]') as HTMLElement
    expect(layoutRoot.style.getPropertyValue('--abc-sidebar-w')).toBe('')

    const groupBtnSm = primaryAside.querySelector('nav button[aria-expanded]') as HTMLButtonElement
    expect(groupBtnSm.className).toContain('min-h-[var(--abc-control-h-sm)]')
    expect(groupBtnSm.querySelector('svg')?.getAttribute('width')).toBe('16')
    const subBtnSm = Array.from(primaryAside.querySelectorAll('nav button')).find((b) =>
      b.textContent?.includes('网关节点')
    )!
    expect(subBtnSm.className).toContain('min-h-7.5')
    expect(subBtnSm.querySelector('svg')?.getAttribute('width')).toBe('14')

    // 2) 切换全域 xs：BrandLogoBlock / 侧栏 / 一级与二级菜单项与图标均缩至 xs
    fireEvent.click(screen.getByRole('button', { name: 'size-xs' }))
    expect(document.documentElement.getAttribute('data-abc-size')).toBe('xs')
    expect(primaryAside.getAttribute('data-size')).toBe('xs')
    expect(primaryAside.querySelector('[data-size]')?.getAttribute('data-size')).toBe('xs')
    expect(groupBtnSm.className).toContain('min-h-[var(--abc-control-h-xs)]')
    expect(groupBtnSm.querySelector('svg')?.getAttribute('width')).toBe('14')
    expect(subBtnSm.className).toContain('min-h-6.5')
    expect(subBtnSm.querySelector('svg')?.getAttribute('width')).toBe('12')

    // 3) 切换全域 lg：主侧栏放至 lg（图标 20 / 二级图标 16），独立覆写 size="xs" 的侧栏保持 xs
    fireEvent.click(screen.getByRole('button', { name: 'size-lg' }))
    expect(document.documentElement.getAttribute('data-abc-size')).toBe('lg')
    expect(primaryAside.getAttribute('data-size')).toBe('lg')
    expect(primaryAside.querySelector('[data-size]')?.getAttribute('data-size')).toBe('lg')
    expect(groupBtnSm.className).toContain('min-h-[var(--abc-control-h-lg)]')
    expect(groupBtnSm.querySelector('svg')?.getAttribute('width')).toBe('20')
    expect(subBtnSm.className).toContain('min-h-9.5')
    expect(subBtnSm.querySelector('svg')?.getAttribute('width')).toBe('16')
    expect(overrideAside.getAttribute('data-size')).toBe('xs')

    // 4) 切换 dual-column 双栏模式：双栏根容器与二级面板同样响应 lg 尺寸
    fireEvent.click(screen.getByRole('button', { name: 'mode-dual' }))
    const dualNav = screen.getByLabelText('双栏侧边导航')
    expect(dualNav.getAttribute('data-size')).toBe('lg')
    const dualSubBtn = Array.from(dualNav.querySelectorAll('button')).find((b) =>
      b.textContent?.includes('网关节点')
    )!
    expect(dualSubBtn.className).toContain('min-h-[var(--abc-control-h-lg)]')
  })

  it('23. Tooltip 与折叠侧边栏悬停首帧无退场类闪现、擦边重入防抖稳定且缩放期间坐标零跳动', () => {
    vi.useFakeTimers()
    try {
      const collapsedMenus: AbcMenuItem[] = [
        { key: 'dash', label: '态势大盘', path: '/dash', icon: 'dashboard' },
        {
          key: 'sys',
          label: '系统设置',
          icon: 'settings',
          children: [{ key: 'menu', label: '菜单配置', path: '/sys/menu' }],
        },
      ]

      function PositionStabilityProbe() {
        const triggerRef = useRef<HTMLButtonElement>(null)
        const floatRef = useRef<HTMLDivElement>(null)
        const { style, update } = useFloatingPosition({
          open: true,
          triggerRef,
          floatingRef: floatRef,
          placement: 'right',
          offset: 8,
        })

        return (
          <div>
            <button
              ref={(el) => {
                triggerRef.current = el
                if (el) {
                  el.getBoundingClientRect = () => ({
                    left: 8,
                    right: 56,
                    top: 120,
                    bottom: 160,
                    width: 48,
                    height: 40,
                    x: 8,
                    y: 120,
                    toJSON: () => ({}),
                  })
                }
              }}
              type="button"
              data-testid="pos-trigger"
              onClick={update}
            >
              触发器
            </button>
            <div
              ref={(el) => {
                floatRef.current = el
                if (el) {
                  Object.defineProperty(el, 'offsetWidth', { configurable: true, value: 120 })
                  Object.defineProperty(el, 'offsetHeight', { configurable: true, value: 36 })
                  // 模拟入场缩放 scale(0.92) 期间的收缩 getBoundingClientRect 矩形
                  el.getBoundingClientRect = () => ({
                    left: 64,
                    right: 174.4,
                    top: 122,
                    bottom: 155.12,
                    width: 110.4,
                    height: 33.12,
                    x: 64,
                    y: 122,
                    toJSON: () => ({}),
                  })
                }
              }}
              data-testid="pos-float"
              style={style}
            >
              浮动提示
            </div>
          </div>
        )
      }

      render(
        <AbcProvider persist={false} defaultTheme={{ motion: 'smooth' }}>
          <div>
            <Tooltip content="普通气泡提示" placement="top">
              <button type="button">普通触发按钮</button>
            </Tooltip>
            <SidebarNav
              items={collapsedMenus}
              pathname="/dash"
              collapsed
              onNavigate={() => {}}
            />
            <PositionStabilityProbe />
          </div>
        </AbcProvider>
      )

      // 1) Tooltip 悬停移入首帧必须直接挂载 abc-animate-tooltip-in，绝不先挂载退场类
      const plainBtn = screen.getByRole('button', { name: '普通触发按钮' })
      fireEvent.mouseEnter(plainBtn)
      const tipEl = screen.getByRole('tooltip')
      expect(tipEl.className).toContain('abc-animate-tooltip-in')
      expect(tipEl.className).not.toContain('abc-animate-tooltip-out')
      expect(tipEl.className).not.toContain('abc-animate-popover-out')

      // 光标短暂擦边移出后在 20ms 内重入，保持同一节点与入场状态不闪烁退场
      fireEvent.mouseLeave(plainBtn)
      act(() => {
        vi.advanceTimersByTime(20)
      })
      fireEvent.mouseEnter(plainBtn)
      expect(screen.getByRole('tooltip')).toBe(tipEl)
      expect(tipEl.className).toContain('abc-animate-tooltip-in')
      expect(tipEl.className).not.toContain('abc-animate-tooltip-out')

      // 指针按下立即收起，不阻塞点击菜单
      fireEvent.pointerDown(plainBtn)
      expect(screen.queryByRole('tooltip')).toBeNull()

      // 2) 折叠态侧边栏叶子项 Tooltip(placement="right") 与带子菜单的 CollapsedSidebarBranch 首帧均无 *-out 闪现
      const dashBtn = screen.getByRole('button', { name: '态势大盘' })
      fireEvent.mouseEnter(dashBtn)
      const sidebarTip = screen.getByRole('tooltip')
      expect(sidebarTip).toHaveTextContent('态势大盘')
      expect(sidebarTip.className).toContain('abc-animate-tooltip-in')
      expect(sidebarTip.className).not.toContain('abc-animate-tooltip-out')
      fireEvent.pointerDown(dashBtn)

      const sysBranchBtn = screen.getByRole('button', { name: '系统设置' })
      fireEvent.mouseEnter(sysBranchBtn)
      const flyoutMenu = screen.getByRole('menu', { name: '系统设置' })
      expect(flyoutMenu.className).toContain('abc-animate-popover-in')
      expect(flyoutMenu.className).not.toContain('abc-animate-popover-out')
      expect(flyoutMenu.className).toContain('before:-left-3')

      // 3) useFloatingPosition 优先读取不受 CSS scale 影响的 offsetWidth/offsetHeight，保持坐标恒定
      const floatEl = screen.getByTestId('pos-float')
      fireEvent.click(screen.getByTestId('pos-trigger'))
      const topBeforeScaleDone = floatEl.style.top
      const leftBeforeScaleDone = floatEl.style.left
      // triggerRect.top(120) + triggerRect.height(40)/2 - offsetHeight(36)/2 = 122px; right(56) + offset(8) = 64px
      expect(topBeforeScaleDone).toBe('122px')
      expect(leftBeforeScaleDone).toBe('64px')

      // 模拟动画结束时 getBoundingClientRect 与真实尺寸一致，再次触发 update 坐标零跳变
      floatEl.getBoundingClientRect = () => ({
        left: 64,
        right: 184,
        top: 122,
        bottom: 158,
        width: 120,
        height: 36,
        x: 64,
        y: 122,
        toJSON: () => ({}),
      })
      fireEvent.click(screen.getByTestId('pos-trigger'))
      expect(floatEl.style.top).toBe(topBeforeScaleDone)
      expect(floatEl.style.left).toBe(leftBeforeScaleDone)
    } finally {
      vi.useRealTimers()
    }
  })

  it('24. ProTable 受控 selectedRowKey 高亮与 onRowClick 联动、searchVariant="toolbar" 紧凑模式及双模 SmartPagination/CursorPagination', () => {
    // 1) 游标模式分页器测试
    const onNext = vi.fn()
    const onPrev = vi.fn()
    const onReset = vi.fn()

    const { rerender } = render(
      <CursorPagination
        hasNext={true}
        hasPrev={false}
        loadedCount={50}
        onNext={onNext}
        onPrev={onPrev}
        onResetCursor={onReset}
      />
    )

    expect(screen.getByTestId('pagination-cursor')).toBeTruthy()
    expect(screen.getByText('50')).toBeTruthy()
    expect(screen.getByText(/已连续加载/)).toBeTruthy()

    // 上一页应禁用，下一页可点击
    const prevBtn = screen.getByLabelText('上一页') as HTMLButtonElement
    const nextBtn = screen.getByLabelText('下一页') as HTMLButtonElement
    expect(prevBtn.disabled).toBe(true)
    expect(nextBtn.disabled).toBe(false)

    fireEvent.click(nextBtn)
    expect(onNext).toHaveBeenCalledTimes(1)

    // 重新渲染为有上一页
    rerender(
      <SmartPagination
        mode="cursor"
        hasNext={false}
        hasPrev={true}
        loadedCount={100}
        onNext={onNext}
        onPrev={onPrev}
        onResetCursor={onReset}
      />
    )
    expect(screen.getByText('100')).toBeTruthy()
    const updatedPrevBtn = screen.getByLabelText('上一页') as HTMLButtonElement
    const updatedNextBtn = screen.getByLabelText('下一页') as HTMLButtonElement
    expect(updatedPrevBtn.disabled).toBe(false)
    expect(updatedNextBtn.disabled).toBe(true)
    fireEvent.click(updatedPrevBtn)
    expect(onPrev).toHaveBeenCalledTimes(1)

    // 2) ProTable searchVariant="toolbar" + selectedRowKey + onRowClick
    const rows = [
      { id: 'job-1', title: '作业 A', status: 'running' },
      { id: 'job-2', title: '作业 B', status: 'completed' },
    ]
    const onRowClick = vi.fn()

    render(
      <AbcProvider persist={false}>
        <ProTable
          rowKey="id"
          title="作业审查"
          dataSource={rows}
          searchVariant="toolbar"
          fields={[
            { name: 'search', label: '作业名称', placeholder: '按名称搜索' },
            {
              name: 'status',
              label: '状态',
              type: 'select',
              options: [
                { label: '运行中', value: 'running' },
                { label: '已完成', value: 'completed' },
              ],
            },
          ]}
          columns={[
            { key: 'title', title: '作业', dataIndex: 'title' },
            { key: 'status', title: '状态', dataIndex: 'status' },
          ]}
          selectedRowKey="job-2"
          onRowClick={onRowClick}
          pagination={{
            mode: 'cursor',
            hasNext: true,
            hasPrev: false,
            loadedCount: 2,
            onNext,
          }}
        />
      </AbcProvider>
    )

    // 验证搜索栏为 toolbar 紧凑形态（非大卡片）
    expect(screen.getByPlaceholderText('按名称搜索')).toBeTruthy()
    expect(screen.getByText('搜索')).toBeTruthy()
    expect(screen.getByText('重置')).toBeTruthy()

    // 验证行选中高亮与 data-state="selected"
    const row2Cell = screen.getByText('作业 B')
    const row2Tr = row2Cell.closest('tr')
    expect(row2Tr).not.toBeNull()
    expect(row2Tr?.getAttribute('data-state')).toBe('selected')
    expect(row2Tr?.className).toContain('bg-[var(--abc-primary-soft)]')

    // 验证行点击回调
    if (row2Tr) {
      fireEvent.click(row2Tr)
      expect(onRowClick).toHaveBeenCalledWith(
        expect.objectContaining({ id: 'job-2', title: '作业 B' }),
        expect.anything()
      )
    }

    // 验证底栏游标分页渲染
    expect(screen.getAllByText(/已连续加载/).length).toBe(2)
  })

  it('25. 组件收口增强：Button.iconOnly、Select 双模兼容（含 Top-Layer <dialog> 挂载）、SelectField、ThemeSwitcher 与 Watermark opacity', async () => {
    // 1. Button iconOnly 正方形类名且不透传 icononly DOM 属性
    render(
      <Button iconOnly aria-label="纯图标操作">
        <span>+</span>
      </Button>
    )
    const iconBtn = screen.getByRole('button', { name: '纯图标操作' })
    expect(iconBtn.className).toContain('w-[var(--abc-control-h-sm)]')
    expect(iconBtn).not.toHaveAttribute('icononly')

    // 2. Select 原生 <option>/<optgroup> 在 Dialog 内就地挂载于 <dialog> 并派生真实 ChangeEvent
    const receivedNativeValues: string[] = []
    render(
      <Dialog open onClose={vi.fn()} title="Top-Layer 协议选择">
        <Select
          aria-label="传输协议"
          defaultValue="http"
          onChange={(e) => receivedNativeValues.push(e.target.value)}
        >
          <optgroup label="常规协议">
            <option value="http">HTTP</option>
            <option value="socks5">SOCKS5</option>
          </optgroup>
        </Select>
      </Dialog>
    )
    fireEvent.click(screen.getByRole('combobox', { name: '传输协议' }))
    const popover = document.querySelector('[data-slot="select-popover"]')
    expect(popover).not.toBeNull()
    expect(popover?.closest('dialog')).not.toBeNull()
    fireEvent.click(within(popover as HTMLElement).getByRole('option', { name: 'SOCKS5' }))
    expect(receivedNativeValues).toEqual(['socks5'])

    // 3. SelectField 声明式字符串回调
    const onFieldChange = vi.fn()
    render(
      <SelectField
        aria-label="部署目标环境"
        defaultValue="prod"
        onValueChange={onFieldChange}
        options={[
          { label: '生产环境', value: 'prod' },
          { label: '预发环境', value: 'staging' },
        ]}
      />
    )
    fireEvent.click(screen.getByRole('combobox', { name: '部署目标环境' }))
    fireEvent.click(screen.getByRole('option', { name: '预发环境' }))
    expect(onFieldChange).toHaveBeenCalledWith('staging')

    // 4. ThemeSwitcher segmented 与 AbcProvider 双向同步
    render(
      <AbcProvider persist={false}>
        <ThemeSwitcher mode="segmented" />
      </AbcProvider>
    )
    fireEvent.click(screen.getByRole('button', { name: '深色' }))
    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-abc-theme')).toBe('dark')
    })
    fireEvent.click(screen.getByRole('button', { name: '浅色' }))
    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-abc-theme')).toBe('light')
    })

    // 5. Watermark 支持自定义 opacity 渲染
    const recordedFillStyles: string[] = []
    const ctxSpy = vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(
      () =>
        ({
          scale: vi.fn(),
          translate: vi.fn(),
          rotate: vi.fn(),
          fillText: vi.fn(),
          set fillStyle(val: string) {
            recordedFillStyles.push(val)
          },
          get fillStyle() {
            return recordedFillStyles[recordedFillStyles.length - 1] ?? ''
          },
        }) as unknown as CanvasRenderingContext2D
    )
    const dataUrlSpy = vi
      .spyOn(HTMLCanvasElement.prototype, 'toDataURL')
      .mockReturnValue('data:image/png;base64,opacityMock')

    const { container: wmContainer } = render(
      <Watermark content="CONFIDENTIAL" opacity={0.18}>
        <div>安全水印内容区</div>
      </Watermark>
    )
    expect(wmContainer.querySelector('[data-watermark-overlay="true"]')).not.toBeNull()
    expect(recordedFillStyles.some((s) => s.includes('0.18'))).toBe(true)

    ctxSpy.mockRestore()
    dataUrlSpy.mockRestore()
  })

  it('26. Pro 套件收口：ProFormContainer、ProLogViewer 日志过滤及 ProCommandPalette 实体直达', () => {
    // 1. ProFormContainer（测试环境下默认就地内联渲染并展示 summarySlot 与表单字段）
    render(
      <ProFormContainer
        title="集群并发策略"
        triggerLabel="编辑策略"
        summarySlot={<div data-testid="pro-form-summary">当前并发 64 路</div>}
      >
        <div data-testid="pro-form-body">并发上限表单内容</div>
      </ProFormContainer>
    )
    expect(screen.getByTestId('pro-form-summary')).toHaveTextContent('当前并发 64 路')
    expect(screen.getByTestId('pro-form-body')).toHaveTextContent('并发上限表单内容')

    // 2. ProLogViewer 结构化/纯文本日志渲染与关键词筛选
    render(
      <ProLogViewer
        logs={[
          { seq: 1, level: 'info', message: 'Worker node booted' },
          { seq: 2, level: 'error', message: 'Browser navigation timeout on #login' },
          'plain text trace line',
        ]}
      />
    )
    expect(screen.getByText('3 / 3 行')).toBeInTheDocument()
    const filterInput = screen.getByPlaceholderText('过滤日志内容…')
    fireEvent.change(filterInput, { target: { value: 'timeout' } })
    expect(screen.getByText('1 / 3 行')).toBeInTheDocument()
    expect(screen.getByText('Browser navigation timeout on #login')).toBeInTheDocument()
    expect(screen.queryByText('Worker node booted')).not.toBeInTheDocument()

    // 3. ProCommandPalette 实体前缀直达规则匹配
    const onEntitySelect = vi.fn()
    render(
      <ProCommandPalette
        open
        searchQuery="job_123"
        entityMatchers={[
          {
            id: 'job',
            prefix: 'job_',
            labelPrefix: '直达作业诊断: ',
            tone: 'blue',
            onSelect: onEntitySelect,
          },
        ]}
      />
    )
    fireEvent.click(screen.getByText('job_123'))
    expect(onEntitySelect).toHaveBeenCalledWith('job_123')
  })
})
