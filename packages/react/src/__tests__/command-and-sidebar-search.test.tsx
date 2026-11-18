import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  AbcProvider,
  CommandPalette,
  ProLayout,
  SidebarNav,
  type AbcMenuItem,
  type CommandActionItem,
} from '../index'

const TEST_MENUS: AbcMenuItem[] = [
  {
    key: 'display',
    label: '数据展示与卡片动效',
    icon: 'layers',
    badge: 2,
    children: [
      {
        key: 'structured',
        label: '描述、JSON 树与时间轴',
        path: '/display/structured',
        icon: 'articleList',
        keywords: ['JsonTreeViewer', 'DescriptionList', 'Collapse', 'Timeline'],
      },
      {
        key: 'badges',
        label: '徽标、头像与灯箱',
        path: '/display/badges-media',
        icon: 'tag',
        keywords: 'StatusTag Avatar ImagePreview',
      },
      {
        key: 'select-route',
        label: 'Select 与字典选择器',
        path: '/form/select',
        icon: 'ListChecks',
        keywords: 'Select DictSelect',
      },
    ],
  },
  {
    key: 'tables',
    label: '表格、Pro 套件与图表',
    icon: 'table',
    badge: 1,
    children: [
      {
        key: 'pro-table',
        label: 'ProTable 与行操作折叠',
        path: '/pro/table',
        icon: 'table',
        keywords: 'ProTable ProRowActionsOverflow ProAdaptiveActionCell',
      },
    ],
  },
]

describe('CommandPalette 与 SidebarNav 组件级搜索与相关度排序测试', () => {
  it('1. CommandPalette 在 <Comp /> 标题格式下支持精确符号置顶（击败同名路由与前后缀干扰项）、多分词匹配及 keywords 穿透', () => {
    window.localStorage.removeItem('abc_cmd_recent_v1')
    const onClose = vi.fn()
    const onNav = vi.fn()
    const onJumpSelect = vi.fn()
    const onJumpTreeSelect = vi.fn()
    const onJumpIcon = vi.fn()
    const onJumpRichIcon = vi.fn()
    const onJumpJsonTree = vi.fn()

    const componentActions: CommandActionItem[] = [
      {
        id: 'comp_rich_icon',
        symbol: 'RichIconText',
        title: '<RichIconText /> — 智能语义图标混排文本',
        subtitle: '设计基座与通用 / 排版与代码',
        badge: '@abc-design/react',
        group: '组件直达',
        keywords: 'emoji icon text',
        priority: 18,
        onTrigger: onJumpRichIcon,
      },
      {
        id: 'comp_icon',
        symbol: 'Icon',
        title: '<Icon /> — 统一矢量图标',
        subtitle: '设计基座与通用 / 图标与主题',
        badge: '@abc-design/react',
        group: '组件直达',
        keywords: 'Icon SemanticIcon',
        priority: 8,
        onTrigger: onJumpIcon,
      },
      {
        id: 'comp_tree_select',
        symbol: 'TreeSelect',
        title: '<TreeSelect /> — 树形下拉选择器',
        subtitle: '表单录入与选择器 / 树形与级联',
        badge: '@abc-design/react',
        group: '组件直达',
        keywords: 'TreeSelect tree dropdown',
        priority: 18,
        onTrigger: onJumpTreeSelect,
      },
      {
        id: 'comp_select',
        symbol: 'Select',
        title: '<Select /> — 单选/多选可搜索下拉框',
        subtitle: '表单录入与选择器 / Select 与字典',
        badge: '@abc-design/react',
        group: '组件直达',
        keywords: 'Select SelectField combobox',
        priority: 18,
        onTrigger: onJumpSelect,
      },
      {
        id: 'comp_json_tree',
        symbol: 'JsonTreeViewer',
        title: '<JsonTreeViewer /> — 结构化 JSON 树形检视器',
        subtitle: '数据展示与卡片动效 / 描述、JSON 树与时间轴',
        badge: 'NEW · @abc-design/react',
        group: '组件直达',
        keywords: 'JsonTreeViewer jsonpath payload 报文树',
        priority: 18,
        onTrigger: onJumpJsonTree,
      },
    ]

    render(
      <AbcProvider persist={false}>
        <CommandPalette
          open
          onClose={onClose}
          placeholder="搜索组件或路由..."
          menuItems={TEST_MENUS}
          extraActions={componentActions}
          onNavigate={onNav}
        />
      </AbcProvider>
    )

    const input = screen.getByPlaceholderText('搜索组件或路由...')

    // (a) 输入精确符号 "Select"：<Select /> 必须排在 TreeSelect 与同名路由 "Select 与字典选择器" 之前（索引 0）
    fireEvent.change(input, { target: { value: 'Select' } })
    const firstHit = document.querySelector('[data-cmd-idx="0"]') as HTMLElement | null
    expect(firstHit).not.toBeNull()
    expect(firstHit?.textContent).toContain('<Select /> — 单选/多选可搜索下拉框')

    // (a2) 输入低优先级精确子符号 "Icon"：<Icon /> 必须击败排在前面的高优先级 <RichIconText />
    fireEvent.change(input, { target: { value: 'Icon' } })
    const firstIconHit = document.querySelector('[data-cmd-idx="0"]') as HTMLElement | null
    expect(firstIconHit?.textContent).toContain('<Icon /> — 统一矢量图标')
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onJumpIcon).toHaveBeenCalledTimes(1)

    // (b) 空格多分词检索 "json 报文"：同时命中 title 与 keywords，且展示 NEW 包角标
    fireEvent.change(input, { target: { value: 'json 报文' } })
    expect(screen.getByText('NEW · @abc-design/react')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '组件直达' }))
    expect(document.querySelectorAll('[data-cmd-idx]').length).toBe(1)

    // (c) 切回“页面导航”分组并输入路由内包含的组件符号 "ProAdaptiveActionCell"（验证 AbcMenuItem.keywords 生效）
    fireEvent.click(screen.getByRole('button', { name: '页面导航' }))
    fireEvent.change(input, { target: { value: 'ProAdaptiveActionCell' } })
    const routeBtn = document.querySelector('[data-cmd-idx="0"]') as HTMLElement | null
    expect(routeBtn?.textContent).toContain('ProTable 与行操作折叠')
    fireEvent.click(routeBtn!)
    expect(onNav).toHaveBeenCalledWith(
      '/pro/table',
      expect.objectContaining({ key: 'pro-table', path: '/pro/table' })
    )
  })

  it('2. SidebarNav 开启 searchable 时直接展示「匹配组件直达」结果、过滤路由树并向 ⌘K 透传当前检索词', () => {
    const onNav = vi.fn()
    const onOpenCmd = vi.fn()
    const onJumpRowOverflow = vi.fn()

    render(
      <AbcProvider persist={false}>
        <SidebarNav
          items={TEST_MENUS}
          pathname="/display/badges-media"
          searchable
          searchPlaceholder="筛选分类或输入组件名..."
          commandActions={[
            {
              id: 'comp_row_overflow',
              symbol: 'ProRowActionsOverflow',
              title: '<ProRowActionsOverflow /> — 操作列宽度自适应折叠',
              group: '组件直达',
              keywords: 'ProRowActionsOverflow ProAdaptiveActionCell',
              priority: 18,
              onTrigger: onJumpRowOverflow,
            },
          ]}
          onOpenCommandPalette={onOpenCmd}
          onNavigate={onNav}
        />
      </AbcProvider>
    )

    const sideInput = screen.getByPlaceholderText('筛选分类或输入组件名...')

    // 输入组件符号 "ProRowActionsOverflow"：侧边栏内直接出现「匹配组件直达」卡片，回车或点击可直达组件
    fireEvent.change(sideInput, { target: { value: 'ProRowActionsOverflow' } })
    expect(screen.getByRole('region', { name: '匹配组件直达' })).toBeInTheDocument()
    expect(screen.queryByText('数据展示与卡片动效')).not.toBeInTheDocument()
    expect(screen.getByText('表格、Pro 套件与图表')).toBeInTheDocument()
    expect(screen.getByText('ProTable 与行操作折叠')).toBeInTheDocument()
    fireEvent.keyDown(sideInput, { key: 'Enter' })
    expect(onJumpRowOverflow).toHaveBeenCalledTimes(1)

    // 跨父子层级多分词组合查询（父分类 "表格" + 子项关键词 "Overflow"）可协同命中
    fireEvent.change(sideInput, { target: { value: '表格 Overflow' } })
    expect(screen.getByText('ProTable 与行操作折叠')).toBeInTheDocument()

    // 空白字符串视为未筛选，完整展示全部分组
    fireEvent.change(sideInput, { target: { value: '   ' } })
    expect(screen.getByText('数据展示与卡片动效')).toBeInTheDocument()
    expect(screen.getByText('表格、Pro 套件与图表')).toBeInTheDocument()

    // 点击侧栏筛选底部的快捷入口可唤起 ⌘K 并原样透传已输入的搜索词 "Json"
    fireEvent.change(sideInput, { target: { value: 'Json' } })
    fireEvent.click(screen.getByRole('button', { name: /打开精准组件搜索/ }))
    expect(onOpenCmd).toHaveBeenCalledWith('Json')

    // 输入包含正则特殊元字符的字符串（如 "[(*?\\"）不抛异常且安全展示空提示
    fireEvent.change(sideInput, { target: { value: '[(*?\\' } })
    expect(screen.getByText(/未找到与 “\[\(\*\?\\” 匹配的分类或组件/)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: '清空侧栏筛选' }))
    expect(screen.getByText('数据展示与卡片动效')).toBeInTheDocument()
    expect(screen.getByText('表格、Pro 套件与图表')).toBeInTheDocument()
  })

  it('3. ProLayout 透传 searchPlaceholder / commandPlaceholder / sidebarSearch 与 commandActions 闭环联动', () => {
    const onJumpComp = vi.fn()

    render(
      <AbcProvider persist={false}>
        <ProLayout
          menuItems={TEST_MENUS}
          pathname="/display/structured"
          onNavigate={vi.fn()}
          searchPlaceholder="搜索组件 / 菜单..."
          commandPlaceholder="输入组件符号直达演练卡..."
          sidebarSearch
          commandActions={[
            {
              id: 'jump_json_tree',
              title: '<JsonTreeViewer /> — 结构化 JSON 树',
              group: '组件直达',
              keywords: 'JsonTreeViewer',
              onTrigger: onJumpComp,
            },
          ]}
        >
          <div>画布主体</div>
        </ProLayout>
      </AbcProvider>
    )

    const headerTrigger = screen.getByRole('button', { name: /搜索组件 \/ 菜单/ })
    fireEvent.click(headerTrigger)

    const dialog = screen.getByRole('dialog')
    const cmdInput = within(dialog).getByPlaceholderText('输入组件符号直达演练卡...')
    fireEvent.change(cmdInput, { target: { value: 'JsonTreeViewer' } })
    fireEvent.keyDown(cmdInput, { key: 'Enter' })

    expect(onJumpComp).toHaveBeenCalledTimes(1)
  })
})
