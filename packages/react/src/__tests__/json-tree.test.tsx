import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import {
  collectJsonExpandablePaths,
  formatJsonCopyValue,
  formatJsonPath,
  getJsonValueType,
  parseJsonTreeInput,
  searchJsonTree,
} from '@abc-design/core'
import { JsonTreeViewer } from '../index'

const originalClipboard = navigator.clipboard

afterEach(() => {
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: originalClipboard,
  })
})

function mockClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText },
  })
  return writeText
}

describe('JsonTreeViewer 无头算法与交互测试', () => {
  it('1. Core 算法正确处理解析兜底、值类型判定、路径格式化、循环引用与路径搜索', () => {
    expect(parseJsonTreeInput('{"ok":true}')).toEqual({
      ok: true,
      value: { ok: true },
      isEmptyInput: false,
    })
    expect(parseJsonTreeInput('   ')).toEqual({
      ok: true,
      value: undefined,
      isEmptyInput: true,
    })
    const invalidRes = parseJsonTreeInput('{bad json')
    expect(invalidRes.ok).toBe(false)
    if (!invalidRes.ok) {
      expect(invalidRes.raw).toBe('{bad json')
    }

    expect(getJsonValueType({})).toBe('object')
    expect(getJsonValueType([])).toBe('array')
    expect(getJsonValueType('abc')).toBe('string')
    expect(getJsonValueType(42)).toBe('number')
    expect(getJsonValueType(false)).toBe('boolean')
    expect(getJsonValueType(null)).toBe('null')

    expect(formatJsonPath([])).toBe('$')
    expect(formatJsonPath(['user', 'items', 0, 'a.b'], 'jsonpath')).toBe('$.user.items[0]["a.b"]')
    expect(formatJsonPath(['user', 'items', 0, 'a.b'], 'dot')).toBe('user.items[0]["a.b"]')

    const circular: Record<string, unknown> = { name: 'loop' }
    circular.self = circular
    const copiedCircular = formatJsonCopyValue(circular)
    expect(copiedCircular).toContain('[Circular]')

    const sample = { a: { b: { c: 'needle' } }, d: 'other' }
    expect(collectJsonExpandablePaths(sample, { maxDepth: 1 })).toEqual(['$'])
    expect(collectJsonExpandablePaths(sample, { maxDepth: 2 })).toEqual(['$', '$.a'])

    const searchRes = searchJsonTree(sample, 'NEEDLE')
    expect(searchRes.matchCount).toBe(1)
    expect(searchRes.matchedPaths.has('$.a.b.c')).toBe(true)
    expect(searchRes.autoExpandedPaths.has('$')).toBe(true)
    expect(searchRes.autoExpandedPaths.has('$.a')).toBe(true)
    expect(searchRes.autoExpandedPaths.has('$.a.b')).toBe(true)
  })

  it('2. 渲染 6 种数据类型、支持默认展开深度、点击折叠与全部展开/收起', () => {
    const data = {
      name: 'crawler',
      count: 12,
      active: true,
      extra: null,
      tags: ['fast', 'stealth'],
      nested: { deep: { leaf: 'hidden-by-depth-2' } },
    }

    render(<JsonTreeViewer data={data} defaultExpandDepth={2} />)

    expect(screen.getByText('"crawler"')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('true')).toBeInTheDocument()
    expect(screen.getByText('null')).toBeInTheDocument()
    expect(screen.getByText('"fast"')).toBeInTheDocument()
    // 第 3 层嵌套在 defaultExpandDepth=2 下默认折叠
    expect(screen.queryByText('"hidden-by-depth-2"')).toBeNull()

    // 全部展开后可见深层节点
    fireEvent.click(screen.getByRole('button', { name: '全部展开' }))
    expect(screen.getByText('"hidden-by-depth-2"')).toBeInTheDocument()

    // 全部收起后仅剩根节点
    fireEvent.click(screen.getByRole('button', { name: '全部收起' }))
    expect(screen.queryByText('"crawler"')).toBeNull()
  })

  it('3. 搜索过滤高亮 <mark>、自动展开命中分支并在清空搜索后恢复手动折叠态', () => {
    const data = {
      meta: { region: 'ap-southeast-1', deep: { targetKey: 'bingo' } },
      status: 'ok',
    }

    render(<JsonTreeViewer data={data} defaultExpandDepth={1} />)
    expect(screen.queryByText('"bingo"')).toBeNull()

    const searchInput = screen.getByPlaceholderText('搜索键名或字段值…')
    fireEvent.change(searchInput, { target: { value: 'bingo' } })

    expect(screen.getByTestId('json-tree-match-count')).toHaveTextContent('1 处匹配')
    const mark = document.querySelector('mark')
    expect(mark).not.toBeNull()
    expect(mark?.textContent).toBe('bingo')
    // 命中节点外部非匹配分支被过滤隐藏
    expect(screen.queryByText('"ok"')).toBeNull()

    // 清空搜索后恢复 defaultExpandDepth=1 的折叠状态，深层节点重新折叠
    fireEvent.click(screen.getByRole('button', { name: '清空搜索' }))
    expect(screen.queryByText('"bingo"')).toBeNull()
    expect(screen.getByText('"ok"')).toBeInTheDocument()
  })

  it('4. 支持复制 JSONPath、节点值与整段 JSON 并触发 onCopy 回调', async () => {
    const writeText = mockClipboard()
    const onCopy = vi.fn()
    const data = { user: { tags: ['alpha', 'beta'] } }

    render(<JsonTreeViewer data={data} defaultExpandDepth={3} onCopy={onCopy} />)

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: '复制路径: $.user.tags[1]' }))
      await Promise.resolve()
    })
    expect(writeText).toHaveBeenCalledWith('$.user.tags[1]')
    expect(onCopy).toHaveBeenCalledWith({
      kind: 'path',
      text: '$.user.tags[1]',
      path: '$.user.tags[1]',
    })

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: '复制值: $.user.tags[1]' }))
      await Promise.resolve()
    })
    expect(writeText).toHaveBeenCalledWith('beta')
    expect(onCopy).toHaveBeenCalledWith({
      kind: 'value',
      text: 'beta',
      path: '$.user.tags[1]',
    })

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: '复制 JSON' }))
      await Promise.resolve()
    })
    expect(onCopy).toHaveBeenCalledWith(expect.objectContaining({ kind: 'root', path: '$' }))
  })

  it('5. 大数组分页截断（显示更多）、超长字符串展开/收起、深层保护与异常/空态兜底', () => {
    const hugeList = Array.from({ length: 125 }, (_, i) => `item_${i}`)
    const longText = 'x'.repeat(280)
    const { rerender } = render(
      <JsonTreeViewer
        data={{ list: hugeList, longText }}
        maxChildren={50}
        maxStringLength={100}
        defaultExpandDepth={2}
      />
    )

    expect(screen.getByText('"item_0"')).toBeInTheDocument()
    expect(screen.queryByText('"item_50"')).toBeNull()

    const showMoreBtn = screen.getByRole('button', { name: '显示更多 (+75 项)' })
    fireEvent.click(showMoreBtn)
    expect(screen.getByText('"item_50"')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '显示更多 (+25 项)' })).toBeInTheDocument()

    // 超长字符串展开全文与收起
    fireEvent.click(screen.getByRole('button', { name: '展开全文' }))
    expect(screen.getByText(`"${longText}"`)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '收起' }))
    expect(screen.queryByText(`"${longText}"`)).toBeNull()

    // 非法 JSON 字符串展示告警与原文回退
    rerender(<JsonTreeViewer data="{invalid: true" />)
    expect(screen.getByRole('alert')).toHaveTextContent('JSON 解析失败，已回退原文展示')
    expect(screen.getByText('{invalid: true')).toBeInTheDocument()

    // 空串 / undefined 展示空态
    rerender(<JsonTreeViewer data="" emptyText="暂无载荷" />)
    expect(screen.getByText('暂无载荷')).toBeInTheDocument()
  })

  it('6. 键盘无障碍树导航（ArrowDown / ArrowRight / ArrowLeft / Home / End / Enter）', () => {
    const data = { first: { inner: 1 }, second: 2 }
    render(<JsonTreeViewer data={data} defaultExpandDepth={1} />)

    const rootItem = document.querySelector('[data-path="$"]') as HTMLElement
    const firstItem = document.querySelector('[data-path="$.first"]') as HTMLElement

    act(() => {
      rootItem.focus()
    })
    expect(document.activeElement).toBe(rootItem)

    fireEvent.keyDown(rootItem, { key: 'ArrowDown' })
    expect(document.activeElement).toBe(firstItem)
    expect(firstItem).toHaveAttribute('aria-expanded', 'false')

    // ArrowRight 展开折叠容器
    fireEvent.keyDown(firstItem, { key: 'ArrowRight' })
    expect(firstItem).toHaveAttribute('aria-expanded', 'true')
    const innerItem = document.querySelector('[data-path="$.first.inner"]') as HTMLElement
    expect(innerItem).toBeInTheDocument()

    // 再次 ArrowRight 移入首子节点
    fireEvent.keyDown(firstItem, { key: 'ArrowRight' })
    expect(document.activeElement).toBe(innerItem)

    // ArrowLeft 从叶子节点跳回父容器
    fireEvent.keyDown(innerItem, { key: 'ArrowLeft' })
    expect(document.activeElement).toBe(firstItem)

    // End 跳到末尾节点，Home 跳回根节点
    fireEvent.keyDown(firstItem, { key: 'End' })
    expect(document.activeElement).toBe(document.querySelector('[data-path="$.second"]'))
    fireEvent.keyDown(document.activeElement as Element, { key: 'Home' })
    expect(document.activeElement).toBe(rootItem)
  })

  it('7. 动态切换 data prop 时非受控按 defaultExpandDepth 自动重新展开，且覆盖 undefined -> job1 -> job2', () => {
    const { rerender } = render(<JsonTreeViewer data={{ x: 1 }} defaultExpandDepth={2} />)
    expect(screen.getByText('1')).toBeInTheDocument()

    rerender(
      <JsonTreeViewer
        data={{ nextGroup: { leaf: 'expanded-at-depth-2' } }}
        defaultExpandDepth={2}
      />
    )
    expect(screen.getByText('"expanded-at-depth-2"')).toBeInTheDocument()

    // 模拟详情抽屉从空数据切换到连续两条不同记录
    rerender(<JsonTreeViewer data={undefined} defaultExpandDepth={2} />)
    expect(screen.getByText('暂无 JSON 数据')).toBeInTheDocument()

    rerender(<JsonTreeViewer data={{ job1: { status: 'done' } }} defaultExpandDepth={2} />)
    expect(screen.getByText('"done"')).toBeInTheDocument()

    rerender(<JsonTreeViewer data={{ job2: { status: 'running' } }} defaultExpandDepth={2} />)
    expect(screen.getByText('"running"')).toBeInTheDocument()
  })

  it('8. 含 __more__ / __depth_limit__ 键名大对象不碰撞 React key，且支持展开/折叠按钮 i18n', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    try {
      const trapObj: Record<string, unknown> = {
        __more__: 'trap',
        __depth_limit__: 'trap',
      }
      for (let i = 0; i < 120; i++) {
        trapObj[`k_${i}`] = i
      }

      const { rerender } = render(
        <JsonTreeViewer
          data={trapObj}
          maxChildren={50}
          defaultExpandDepth={2}
          labels={{ expandNodeLabel: 'Expand node', collapseNodeLabel: 'Collapse node' }}
        />
      )

      const duplicateKeyCalls = errorSpy.mock.calls.filter((args) =>
        args.some((arg) => String(arg).includes('Encountered two children with the same key'))
      )
      expect(duplicateKeyCalls).toHaveLength(0)

      expect(screen.getByRole('button', { name: 'Collapse node' })).toBeInTheDocument()
      fireEvent.click(screen.getByRole('button', { name: 'Collapse node' }))
      expect(screen.getByRole('button', { name: 'Expand node' })).toBeInTheDocument()

      // 深度超限场景下含 __depth_limit__ 键也不产生 key 碰撞
      rerender(
        <JsonTreeViewer
          data={{ __depth_limit__: 'trap', nested: { a: 1 } }}
          maxDepth={0}
          defaultExpandDepth={1}
        />
      )
      const duplicateAfterDepthLimit = errorSpy.mock.calls.filter((args) =>
        args.some((arg) => String(arg).includes('Encountered two children with the same key'))
      )
      expect(duplicateAfterDepthLimit).toHaveLength(0)
    } finally {
      errorSpy.mockRestore()
    }
  })

  it('9. searchJsonTree 在 5,000 项数组下可完整命中末尾 elem_4999，超限时返回 truncated: true 并展示截断提示', () => {
    const arr5000 = Array.from({ length: 5000 }, (_, i) => `elem_${i}`)

    const fullRes = searchJsonTree(arr5000, 'elem_4999')
    expect(fullRes.matchCount).toBe(1)
    expect(fullRes.truncated).toBe(false)
    expect(fullRes.matchedPaths.has('$[4999]')).toBe(true)

    const exactBoundaryRes = searchJsonTree(arr5000, 'elem_4999', { maxVisitedNodes: 5000 })
    expect(exactBoundaryRes.matchCount).toBe(1)
    expect(exactBoundaryRes.truncated).toBe(false)

    const limitedRes = searchJsonTree(arr5000, 'elem_4999', { maxVisitedNodes: 100 })
    expect(limitedRes.matchCount).toBe(0)
    expect(limitedRes.truncated).toBe(true)

    // 超过默认 20,000 节点上限时，工具栏展示截断告警标签
    const hugeArr = Array.from({ length: 20005 }, (_, i) => `row_${i}`)
    render(
      <JsonTreeViewer
        data={hugeArr}
        maxChildren={20}
        defaultExpandDepth={1}
        labels={{ searchTruncatedLabel: 'Partial scan limit reached' }}
      />
    )
    fireEvent.change(screen.getByPlaceholderText('搜索键名或字段值…'), {
      target: { value: 'row_20004' },
    })
    expect(screen.getByTestId('json-tree-search-truncated')).toHaveTextContent(
      'Partial scan limit reached'
    )
  })
})
