import { fireEvent, render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { flattenMenus, scoreCommandEntry } from '../../../../packages/react/src/layout/commandPaletteUtils'
import { App } from '../App'
import {
  ALL_PLAYGROUND_COMPONENT_HITS,
  ALL_PLAYGROUND_ROUTES,
  PLAYGROUND_CATEGORIES,
  PLAYGROUND_MENU_TREE,
  buildPlaygroundCommandActions,
} from '../registry'

describe('Playground 7 大分类重构、页内单卡聚焦/分段展示与组件搜索全链路测试', () => {
  beforeEach(() => {
    window.localStorage.clear()
    window.location.hash = ''
  })

  it('1. 权威目录注册表完整收敛为 7 大分类 × 37 个路由，且全部组件符号精确搜索 100% 排名第 1', () => {
    expect(PLAYGROUND_CATEGORIES).toHaveLength(7)
    expect(ALL_PLAYGROUND_ROUTES).toHaveLength(37)

    const symbols = new Set(ALL_PLAYGROUND_COMPONENT_HITS.map((h) => h.symbol))
    for (const requiredSym of [
      'JsonTreeViewer',
      'ProRowActionsOverflow',
      'ProAdaptiveActionCell',
      'SplitDetailLayout',
      'SplitInspectorLayout',
      'ResizableSplitPane',
      'ActionCard',
      'FilterPillGroup',
      'TagInput',
      'ByteQuotaInput',
      'DurationQuotaInput',
      'SortableSplitEditor',
      'SortableList',
      'CommandPalette',
      'MultiTabBar',
      'ThemeCustomizer',
      'FloatingIconRail',
      'FlowNodeCard',
      'FlowNodeToolbar',
      'TemplateVariableInput',
      'FlowSectionFrame',
    ]) {
      expect(symbols.has(requiredSym)).toBe(true)
    }

    // 校验全部 241 个组件符号在 ⌘K 混合候选池（含 36 个路由）中精确检索均排在首位 (#0)
    const navEntries = flattenMenus(PLAYGROUND_MENU_TREE).map(({ item, trail, inheritedKeywords }) => ({
      id: `nav_${item.key}`,
      title: item.label,
      subtitle: `${trail}${item.path ? ` · ${item.path}` : ''}`,
      group: '页面导航',
      keywords: inheritedKeywords,
      onTrigger: () => {},
    }))
    const allEntries = [...navEntries, ...buildPlaygroundCommandActions(() => {})]

    for (const hit of ALL_PLAYGROUND_COMPONENT_HITS) {
      const grouped = new Map<string, Array<{ id: string; score: number }>>()
      for (const entry of allEntries) {
        const s = scoreCommandEntry(entry, hit.symbol)
        if (s < 0) continue
        const g = entry.group ?? '其他'
        const list = grouped.get(g) ?? []
        list.push({ id: entry.id, score: s })
        grouped.set(g, list)
      }
      const sections = Array.from(grouped.values()).map((items) => {
        items.sort((a, b) => b.score - a.score)
        return { topScore: items[0].score, items }
      })
      sections.sort((a, b) => b.topScore - a.topScore)
      expect(sections[0]?.items[0]?.id).toBe(`comp_${hit.routePath}_${hit.symbol}`)
    }
  })

  it('2. 顶栏 ⌘K 搜索支持击败同名路由精准置顶，且在 KeepAlive 激活下支持同页二次深链跳转', () => {
    window.location.hash = '#/nav/buttons'
    render(<App />)

    // (a) 顶栏 ⌘K 搜索 "Select"（验证击败同名路由）并直达 #comp-Select
    fireEvent.click(screen.getByRole('button', { name: /搜索组件 \/ 菜单/ }))
    let dialog = screen.getByRole('dialog')
    let searchInput = within(dialog).getByRole('textbox')
    fireEvent.change(searchInput, { target: { value: 'Select' } })
    expect(dialog.querySelector('[data-cmd-idx="0"]')?.textContent).toContain('<Select />')
    fireEvent.keyDown(searchInput, { key: 'Enter' })
    expect(window.location.hash).toBe('#/form/select::comp-Select')
    expect(document.getElementById('comp-Select')).not.toBeNull()

    // (b) 切到单卡聚焦模式后，在同一路由下再次按 Ctrl+K 跳到同页第 3 组 RadixSelect（验证 KeepAlive 不冻结 pendingJump）
    fireEvent.click(screen.getByRole('button', { name: '单卡聚焦' }))
    fireEvent.keyDown(window, { key: 'k', ctrlKey: true })
    dialog = screen.getByRole('dialog')
    searchInput = within(dialog).getByRole('textbox')
    fireEvent.change(searchInput, { target: { value: 'RadixSelect' } })
    fireEvent.keyDown(searchInput, { key: 'Enter' })
    expect(window.location.hash).toBe('#/form/select::comp-RadixSelect')
    expect(screen.getByRole('button', { name: /上一组：DictSelect/ })).toBeInTheDocument()
  })

  it('3. 左侧边栏搜索菜单直接展示「匹配组件直达」并支持一键跳转至目标组件演练卡', () => {
    window.location.hash = '#/nav/buttons'
    render(<App />)

    const sideSearch = screen.getByPlaceholderText('筛选分类或输入组件名...')
    fireEvent.change(sideSearch, { target: { value: 'JsonTreeViewer' } })
    expect(screen.getByRole('region', { name: '匹配组件直达' })).toBeInTheDocument()
    fireEvent.keyDown(sideSearch, { key: 'Enter' })
    expect(window.location.hash).toBe('#/display/structured::comp-JsonTreeViewer')
    expect(document.getElementById('comp-JsonTreeViewer')).not.toBeNull()
  })

  it('4. 多组件页「分段全览 + 大纲目录」与「单卡聚焦 + until-found / beforematch」跨缓存页自由切换不锁死', () => {
    window.location.hash = '#/display/structured'
    render(<App />)

    // 默认处于分段全览模式：顶部展示“全部展示 (5)”及本页组件目录 ScrollSpy
    expect(screen.getByRole('button', { name: /全部展示 \(5\)/ })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: '本页组件目录' })).toBeInTheDocument()

    // 点击“单卡聚焦”后切回“分段全览”，验证已挂载页面不会被锁死在 focus 模式
    fireEvent.click(screen.getByRole('button', { name: '单卡聚焦' }))
    expect(screen.getByRole('button', { name: /下一组：Descriptions/ })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '分段全览' }))
    expect(screen.getByRole('navigation', { name: '本页组件目录' })).toBeInTheDocument()
  })

  it('5. ⌘K 搜索 ProRowActionsOverflow 可精准跳转至重构后的 ProTable 模块化演练页', () => {
    window.location.hash = '#/nav/buttons'
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /搜索组件 \/ 菜单/ }))
    const dialog = screen.getByRole('dialog')
    const searchInput = within(dialog).getByRole('textbox')

    fireEvent.change(searchInput, { target: { value: 'ProRowActionsOverflow' } })
    fireEvent.keyDown(searchInput, { key: 'Enter' })

    expect(window.location.hash).toBe('#/pro/table::comp-ProRowActionsOverflow')
    expect(document.getElementById('comp-ProRowActionsOverflow')).not.toBeNull()
    expect(
      screen.getByText('ProRowActionsOverflow & ProAdaptiveActionCell 操作列宽度自适应折叠')
    ).toBeInTheDocument()
  })
})
