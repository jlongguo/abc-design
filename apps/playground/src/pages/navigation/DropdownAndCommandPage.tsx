import React, { useMemo, useState } from 'react'
import {
  Button,
  CommandTriggerButton,
  Dropdown,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  PageContainer,
  ProCommandPalette,
  StatusTag,
  abcToast,
  type ProCommandActionItem,
  type ProCommandEntityMatcher,
  type ProCommandPageItem,
} from '@abc-design/react'
import { Activity, ChevronDown, Copy, Download, Globe, Hash, Layers, Settings, Terminal, Trash2, UserPlus, Zap } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSelect, KnobSwitch, KnobText } from '../../components/PropKnobs'

export const DropdownAndCommandPage: React.FC = () => {
  // 1. Dropdown & DropdownMenu Knobs
  const [trigger, setTrigger] = useState<'click' | 'hover'>('click')
  const [contentAlign, setContentAlign] = useState<'start' | 'end'>('start')
  const [showDangerousItem, setShowDangerousItem] = useState(true)
  const [showShortcuts, setShowShortcuts] = useState(true)
  const [lastMenuAction, setLastMenuAction] = useState('尚未点击菜单操作')

  // 2. ProCommandPalette & CommandTriggerButton Knobs
  const [enableShortcut, setEnableShortcut] = useState(true)
  const [placeholder, setPlaceholder] = useState('快速搜索页面、实体 ID…')
  const [presetQuery, setPresetQuery] = useState<string>('job_01JX9A')
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [paletteQuery, setPaletteQuery] = useState('')
  const [receiptLogs, setReceiptLogs] = useState<string[]>([
    '等待用户唤醒命令面板并执行直达跳转或快捷指令',
  ])

  const appendReceipt = (entry: string) => {
    setReceiptLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${entry}`, ...prev].slice(0, 4))
  }

  const openWithQuery = (q: string) => {
    setPaletteQuery(q)
    setPaletteOpen(true)
  }

  const entityMatchers = useMemo<ProCommandEntityMatcher[]>(
    () => [
      {
        id: 'job-lookup',
        prefix: 'job_',
        labelPrefix: '精准定位任务日志: ',
        tone: 'blue',
        icon: <Hash className="h-4 w-4 text-blue-500" />,
        onSelect: (q) => {
          appendReceipt(`实体直达 [Job]: 已定位作业 ${q}`)
          abcToast.success(`已定位任务实体 ${q}`)
        },
      },
      {
        id: 'org-lookup',
        prefix: 'org_',
        labelPrefix: '切换至租户空间: ',
        tone: 'purple',
        icon: <Globe className="h-4 w-4 text-purple-500" />,
        onSelect: (q) => {
          appendReceipt(`实体直达 [Org]: 切换至组织 ${q} 配额视图`)
          abcToast.info(`已切换至组织 ${q}`)
        },
      },
      {
        id: 'ticket-lookup',
        match: (q) => /^tn-\d+/i.test(q),
        labelPrefix: '检视审计工单: ',
        tone: 'amber',
        icon: <Zap className="h-4 w-4 text-amber-500" />,
        onSelect: (q) => {
          appendReceipt(`正则实体匹配 [Ticket]: 打开工单 ${q.toUpperCase()}`)
          abcToast.warning(`已打开工单 ${q.toUpperCase()}`)
        },
      },
    ],
    []
  )

  const commandPages = useMemo<ProCommandPageItem[]>(
    () => [
      { to: '/overview', label: 'Design Tokens 总览与索引', group: '基础原语', keywords: 'overview zonglan token', icon: <Layers className="h-4 w-4" /> },
      { to: '/pro/table', label: 'ProTable 全生命周期表格', group: 'Pro 套件', keywords: 'table biaoge liebiao', icon: <Terminal className="h-4 w-4" /> },
      { to: '/pro/config', label: 'ProConfigForm 系统配置页', group: 'Pro 套件', keywords: 'config peizhi shezhi pz', icon: <Activity className="h-4 w-4" /> },
    ],
    []
  )

  const commandActions = useMemo<ProCommandActionItem[]>(
    () => [
      {
        id: 'flush-cache',
        label: '刷新控制面路由缓存',
        group: '快捷调试指令',
        keywords: 'shuaxin huancun cache',
        icon: <Zap className="h-4 w-4 text-amber-500" />,
        onSelect: () => {
          appendReceipt('执行系统指令: 已刷新控制面路由缓存')
          abcToast.success('路由缓存刷新完成')
        },
      },
      {
        id: 'purge-sessions',
        label: '强制清理过期沙箱租约',
        group: '快捷调试指令',
        keywords: 'qingli zuyue session',
        danger: true,
        icon: <Trash2 className="h-4 w-4" />,
        onSelect: () => {
          appendReceipt('执行高危指令: 已清理全部空闲超时租约')
          abcToast.warning('已触发租约清理')
        },
      },
    ],
    []
  )

  const dropdownItems = [
    {
      key: 'copy',
      label: '复制节点标识',
      icon: <Copy className="h-3.5 w-3.5" />,
      onClick: () => {
        setLastMenuAction('Dropdown: 复制节点标识')
        abcToast.success('已复制节点标识')
      },
    },
    {
      key: 'export',
      label: '导出巡检诊断包',
      icon: <Download className="h-3.5 w-3.5" />,
      onClick: () => {
        setLastMenuAction('Dropdown: 导出巡检诊断包')
        abcToast.info('诊断包生成中')
      },
    },
    ...(showDangerousItem
      ? [
          {
            key: 'evict',
            label: '驱逐异常节点',
            icon: <Trash2 className="h-3.5 w-3.5" />,
            danger: true,
            dividerAbove: true,
            onClick: () => {
              setLastMenuAction('Dropdown [Danger]: 驱逐异常节点')
              abcToast.warning('已触发驱逐动作')
            },
          },
        ]
      : []),
  ]

  return (
    <PageContainer
      title="下拉菜单与全局命令面板"
      subtitle="提供声明式 Dropdown 与复合式 DropdownMenu 双范式弹出菜单，以及内置拼音首字母检索与实体 ID 前缀直达的 ProCommandPalette。"
    >
      <div className="space-y-5">
        {/* 卡片 1: Dropdown & DropdownMenu */}
        <ComponentDocPreview
          title="Dropdown & DropdownMenu 声明式与复合下拉菜单"
          components={[
            'Dropdown',
            'DropdownMenu',
            'DropdownMenuTrigger',
            'DropdownMenuContent',
            'DropdownMenuGroup',
            'DropdownMenuLabel',
            'DropdownMenuItem',
            'DropdownMenuSeparator',
            'DropdownMenuShortcut',
          ]}
          description="遵循视口感知防溢出定位与 WCAG 键盘巡航规范；Dropdown 适合数据数组驱动，DropdownMenu 适合带分组标题、分割线与快捷键的复合菜单。"
          controls={
            <>
              <KnobSegmented
                label="Dropdown.trigger"
                value={trigger}
                onChange={setTrigger}
                options={[
                  { label: 'click', value: 'click' },
                  { label: 'hover', value: 'hover' },
                ]}
              />
              <KnobSegmented
                label="Content.align"
                value={contentAlign}
                onChange={setContentAlign}
                options={[
                  { label: 'start', value: 'start' },
                  { label: 'end', value: 'end' },
                ]}
              />
              <KnobSwitch label="显示危险菜单项" checked={showDangerousItem} onChange={setShowDangerousItem} />
              <KnobSwitch label="显示快捷键" checked={showShortcuts} onChange={setShowShortcuts} />
            </>
          }
          onResetKnobs={() => {
            setTrigger('click')
            setContentAlign('start')
            setShowDangerousItem(true)
            setShowShortcuts(true)
            setLastMenuAction('尚未点击菜单操作')
          }}
          code={`import {
  Dropdown, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuShortcut,
} from '@abc-design/react'

<Dropdown trigger="${trigger}" items={items}>
  <Button variant="outline">声明式 Dropdown</Button>
</Dropdown>

<DropdownMenu>
  <DropdownMenuTrigger asChild><Button>复合 DropdownMenu</Button></DropdownMenuTrigger>
  <DropdownMenuContent align="${contentAlign}">
    <DropdownMenuLabel>租户快捷治理</DropdownMenuLabel>
    <DropdownMenuGroup>
      <DropdownMenuItem>邀请成员${showShortcuts ? ' <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>' : ''}</DropdownMenuItem>
    </DropdownMenuGroup>${showDangerousItem ? '\n    <DropdownMenuSeparator />\n    <DropdownMenuItem className="text-[var(--abc-danger)]">清理过期快照</DropdownMenuItem>' : ''}
  </DropdownMenuContent>
</DropdownMenu>`}
          apiRows={[
            { prop: 'Dropdown.trigger', type: "'click' | 'hover'", defaultValue: "'click'", description: '触发菜单展开方式（hover 模式同时保留键盘与悬停安全桥接）' },
            { prop: 'Dropdown.items', type: 'DropdownMenuItem[]', description: '声明式菜单项集合，支持 icon / danger / divider / dividerAbove' },
            { prop: 'DropdownMenuContent.align', type: "'start' | 'end'", defaultValue: "'end'", description: '复合菜单面板相对于触发器的水平对齐基准' },
            { prop: 'DropdownMenuGroup / Label / Separator / Shortcut', type: 'Compound', description: '用于语义分组、小标题、分隔线与右侧快捷键提示' },
          ]}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Dropdown trigger={trigger} items={dropdownItems}>
                <Button size="sm" variant="outline">
                  声明式 Dropdown ({trigger})
                  <ChevronDown className="ml-1 h-3.5 w-3.5" />
                </Button>
              </Dropdown>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="primary">
                    复合 DropdownMenu (align={contentAlign})
                    <ChevronDown className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={contentAlign} className="w-52">
                  <DropdownMenuLabel>租户快捷治理</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={() => {
                        setLastMenuAction('DropdownMenu: 邀请成员')
                        abcToast.success('触发邀请成员弹窗')
                      }}
                    >
                      <UserPlus className="h-3.5 w-3.5" />
                      <span>邀请新成员</span>
                      {showShortcuts && <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setLastMenuAction('DropdownMenu: 配额参数设置')
                        abcToast.info('打开配额参数设置')
                      }}
                    >
                      <Settings className="h-3.5 w-3.5" />
                      <span>配额参数设置</span>
                      {showShortcuts && <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>}
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  {showDangerousItem && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-[var(--abc-danger)]"
                        onClick={() => {
                          setLastMenuAction('DropdownMenu [Danger]: 清理过期快照')
                          abcToast.error('已选择高危清理操作')
                        }}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>清理过期快照</span>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <StatusTag tone="info" size="xs" dot={false}>
              动作回执：{lastMenuAction}
            </StatusTag>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2: ProCommandPalette & CommandTriggerButton */}
        <ComponentDocPreview
          title="ProCommandPalette & CommandTriggerButton 全局命令面板"
          components={['ProCommandPalette', 'CommandTriggerButton']}
          description="零重依赖原生 Top-Layer 唤醒面板：支持 Cmd+K / Ctrl+K 全局快捷键、实体前缀精准定位（job_ / org_ / TN-）以及中文拼音首字母跨分组导航。"
          controls={
            <>
              <KnobSwitch label="enableShortcut (⌘K)" checked={enableShortcut} onChange={setEnableShortcut} />
              <KnobText label="placeholder" value={placeholder} onChange={setPlaceholder} widthClass="w-48" />
              <KnobSelect
                label="预设测试词"
                value={presetQuery}
                onChange={setPresetQuery}
                widthClass="w-40"
                options={[
                  { label: '(空查询)', value: '' },
                  { label: 'job_01JX9A (任务)', value: 'job_01JX9A' },
                  { label: 'org_acme_01 (组织)', value: 'org_acme_01' },
                  { label: 'TN-1002 (工单)', value: 'TN-1002' },
                  { label: 'pz (拼音搜配置)', value: 'pz' },
                ]}
              />
            </>
          }
          onResetKnobs={() => {
            setEnableShortcut(true)
            setPlaceholder('快速搜索页面、实体 ID…')
            setPresetQuery('job_01JX9A')
            setReceiptLogs(['等待用户唤醒命令面板并执行直达跳转或快捷指令'])
          }}
          code={`import { ProCommandPalette, CommandTriggerButton } from '@abc-design/react'

<CommandTriggerButton
  placeholder="${placeholder}"
  onClick={() => openWithQuery('${presetQuery}')}
/>

<ProCommandPalette
  open={open}
  onOpenChange={setOpen}
  enableShortcut={${enableShortcut}}
  labels={{ searchPlaceholder: '${placeholder}' }}
  entityMatchers={[
    { id: 'job', prefix: 'job_', labelPrefix: '精准定位任务: ', tone: 'blue', onSelect: handleJob },
    { id: 'org', prefix: 'org_', labelPrefix: '切换租户空间: ', tone: 'purple', onSelect: handleOrg },
  ]}
  pages={pages}
  actions={actions}
  onNavigate={(to, page) => navigate(to)}
/>`}
          apiRows={[
            { prop: 'enableShortcut', type: 'boolean', defaultValue: 'true', description: '是否自动监听全局 Cmd+K / Ctrl+K 组合键唤起面板' },
            { prop: 'entityMatchers', type: 'ProCommandEntityMatcher[]', description: '按 prefix 或自定义 match 谓词直达业务实体 ID' },
            { prop: 'pages / actions', type: 'ProCommandPageItem[] / ProCommandActionItem[]', description: '支持拼音首字母检索引擎的页面路由及系统快捷动作' },
            { prop: 'labels.searchPlaceholder', type: 'string', description: '面板顶部搜索输入框占位文案定制' },
            { prop: 'CommandTriggerButton.placeholder', type: 'string', defaultValue: "'快速搜索页面、实体 ID…'", description: '顶部唤醒按钮桌面端展示提示文本（移动端自适应收窄）' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <CommandTriggerButton placeholder={placeholder} onClick={() => openWithQuery(presetQuery)} />
              <Button size="sm" variant="outline" onClick={() => openWithQuery('job_01JX9A')}>
                直达 job_01JX9A
              </Button>
              <Button size="sm" variant="outline" onClick={() => openWithQuery('org_acme_01')}>
                直达 org_acme_01
              </Button>
              <Button size="sm" variant="outline" onClick={() => openWithQuery('TN-1002')}>
                正则工单 TN-1002
              </Button>
              <Button size="sm" variant="ghost" onClick={() => openWithQuery('')}>
                打开空白命令面板
              </Button>
            </div>

            <div className="space-y-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3.5 text-xs">
              <div className="font-semibold text-[var(--abc-fg-secondary)]">命令执行与实体直达回执日志：</div>
              <ul className="space-y-1 font-mono text-[11px] text-[var(--abc-fg-muted)]">
                {receiptLogs.map((log, i) => (
                  <li key={i} className={i === 0 ? 'font-semibold text-[var(--abc-primary)]' : undefined}>
                    {log}
                  </li>
                ))}
              </ul>
            </div>

            <ProCommandPalette
              open={paletteOpen}
              onOpenChange={setPaletteOpen}
              enableShortcut={enableShortcut}
              searchQuery={paletteQuery}
              onSearchQueryChange={setPaletteQuery}
              labels={{ searchPlaceholder: placeholder }}
              entityMatchers={entityMatchers}
              pages={commandPages}
              actions={commandActions}
              onNavigate={(to, page) => {
                appendReceipt(`页面导航命中: ${page.label} (${to})`)
                abcToast.success(`已模拟导航至「${page.label}」`)
              }}
            />
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
export default DropdownAndCommandPage
