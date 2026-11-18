import React, { useState } from 'react'
import {
  Button,
  CommandPalette,
  StatusTag,
  abcToast,
  type AbcMenuItem,
  type CommandActionItem,
} from '@abc-design/react'
import { Search } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobText } from '../../components/PropKnobs'

const DEMO_MENUS: AbcMenuItem[] = [
  {
    key: 'display',
    label: '数据展示',
    children: [
      { key: 'json', label: '描述、JSON 树与时间轴', path: '/display/structured', icon: 'articleList', keywords: 'JsonTreeViewer Collapse Timeline' },
    ],
  },
  {
    key: 'pro',
    label: '表格套件',
    children: [
      { key: 'table', label: 'ProTable 与行操作折叠', path: '/pro/table', icon: 'table', keywords: 'ProRowActionsOverflow ProAdaptiveActionCell' },
    ],
  },
]

export const CommandPaletteSection: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [placeholder, setPlaceholder] = useState('搜索菜单、组件符号或输入拼音首字母...')
  const [lastSelected, setLastSelected] = useState('点击按钮唤起 Spotlight 级 CommandPalette')

  const extraActions: CommandActionItem[] = [
    {
      id: 'comp_json_tree',
      title: '<JsonTreeViewer /> — 结构化 JSON 树形检视器',
      subtitle: '数据展示 / 描述与 JSON 树 · 支持 JSONPath 复制与关键字展开',
      badge: 'NEW · @abc-design/react',
      group: '组件直达',
      icon: 'code',
      keywords: 'JsonTreeViewer jsonpath payload 报文树',
      priority: 20,
      onTrigger: () => {
        setLastSelected('组件直达命中：<JsonTreeViewer />')
        abcToast.success('已触发 <JsonTreeViewer /> 直达动作')
      },
    },
    {
      id: 'comp_row_overflow',
      title: '<ProRowActionsOverflow /> — 表格操作列自适应缩略',
      subtitle: '表格套件 / ProTable · ResizeObserver 列宽测量折入三个点菜单',
      badge: '@abc-design/react',
      group: '组件直达',
      icon: 'table',
      keywords: 'ProRowActionsOverflow ProAdaptiveActionCell 更多操作 三个点',
      priority: 18,
      onTrigger: () => {
        setLastSelected('组件直达命中：<ProRowActionsOverflow />')
        abcToast.success('已触发 <ProRowActionsOverflow /> 直达动作')
      },
    },
  ]

  return (
    <ComponentDocPreview
      title="CommandPalette Spotlight 多分组组件与菜单检索面板"
      components={['CommandPalette']}
      description="ProLayout 顶栏 ⌘K 内置同款全局检索面板：原生支持多分词组合匹配（如 'json tree'）、精确/前缀相关度自动提权、分组命中计数胶囊、Tab 键切组与 localStorage 最近访问历史。"
      onResetKnobs={() => {
        setPlaceholder('搜索菜单、组件符号或输入拼音首字母...')
      }}
      controls={
        <KnobText label="placeholder" value={placeholder} onChange={setPlaceholder} widthClass="w-64" />
      }
      code={`import { CommandPalette } from '@abc-design/react'

<CommandPalette
  open={open}
  onClose={() => setOpen(false)}
  placeholder="${placeholder}"
  menuItems={menuItems}
  extraActions={[
    {
      id: 'comp_json_tree',
      title: '<JsonTreeViewer /> — 结构化 JSON 树',
      badge: '@abc-design/react',
      group: '组件直达',
      keywords: 'json tree jsonpath',
      onTrigger: () => jumpTo('/display/structured', 'comp-JsonTreeViewer'),
    },
  ]}
  onNavigate={(path) => navigate(path)}
/>`}
      apiRows={[
        { prop: 'menuItems', type: 'AbcMenuItem[]', description: '自动扁平化树形菜单并继承节点 keywords 参与检索' },
        { prop: 'extraActions', type: 'CommandActionItem[]', description: '注入组件直达索引、系统动作等自定义分组条目（支持 badge 与 priority）' },
        { prop: 'placeholder', type: 'string', description: '顶部宽幅搜索输入框提示文案' },
      ]}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button
          size="sm"
          variant="primary"
          leftIcon={<Search className="h-3.5 w-3.5" />}
          onClick={() => setOpen(true)}
        >
          打开独立 CommandPalette 演练框（或直接按全站 ⌘K）
        </Button>
        <StatusTag tone="info" dot={false} className="font-mono">
          {lastSelected}
        </StatusTag>

        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          placeholder={placeholder}
          menuItems={DEMO_MENUS}
          extraActions={extraActions}
          onNavigate={(path, item) => {
            setLastSelected(`路由导航命中：${item.label} (${path})`)
            abcToast.info(`模拟导航至 ${path}`)
          }}
        />
      </div>
    </ComponentDocPreview>
  )
}
