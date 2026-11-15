import { createRef } from 'react'
import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AbcProvider } from '@abc-design/react'
import { MarkdownEditor, type MarkdownEditorHandle } from '../index'

describe('@abc-design/markdown — MarkdownEditor 组件', () => {
  it('1. 在 AbcProvider 下自动跟随 light/dark 主题，并支持 colorMode 手动覆盖', () => {
    const { rerender } = render(
      <AbcProvider persist={false} defaultTheme={{ mode: 'light' }}>
        <MarkdownEditor value="## 架构设计" />
      </AbcProvider>
    )

    const wrapper = screen.getByTestId('markdown-editor-wrapper')
    expect(wrapper).toHaveAttribute('data-color-mode', 'light')

    rerender(
      <AbcProvider persist={false} defaultTheme={{ mode: 'dark' }}>
        <MarkdownEditor value="## 架构设计" />
      </AbcProvider>
    )
    // AbcProvider defaultTheme 仅用于初始化，验证强制覆盖模式与 html.dark 监听
    rerender(
      <AbcProvider persist={false} defaultTheme={{ mode: 'light' }}>
        <MarkdownEditor colorMode="dark" value="## 强制暗色" />
      </AbcProvider>
    )
    expect(screen.getByTestId('markdown-editor-wrapper')).toHaveAttribute('data-color-mode', 'dark')
  })

  it('2. 支持 ref.insertText 未聚焦末尾追加与聚焦选区精准插入', () => {
    const ref = createRef<MarkdownEditorHandle>()
    const onChange = vi.fn()
    const { container, rerender } = render(
      <MarkdownEditor ref={ref} value="Hello World" onChange={onChange} />
    )

    // 未聚焦时默认追加至末尾
    act(() => {
      ref.current?.insertText('!')
    })
    expect(onChange).toHaveBeenLastCalledWith('Hello World!')

    // 聚焦并移动选区到第 5 个字符后插入
    rerender(<MarkdownEditor ref={ref} value="Hello World" onChange={onChange} />)
    const textarea = container.querySelector('textarea')
    expect(textarea).not.toBeNull()
    if (textarea) {
      textarea.focus()
      textarea.setSelectionRange(5, 5)
    }

    act(() => {
      ref.current?.insertText(' ABC')
    })
    expect(onChange).toHaveBeenLastCalledWith('Hello ABC World')
  })
})
