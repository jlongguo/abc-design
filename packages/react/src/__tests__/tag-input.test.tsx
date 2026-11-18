import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import {
  DEFAULT_TAG_SEPARATORS,
  mergeTagTokens,
  splitTagDraftOnInput,
  splitTagInputText,
} from '@abc-design/core'
import { TagInput } from '../index'

describe('TagInput 无头算法与组件全量测试', () => {
  it('1. Core splitTagInputText 与 splitTagDraftOnInput 支持多分隔符、自定义正则与空白清理', () => {
    expect(DEFAULT_TAG_SEPARATORS).toContain(',')
    expect(DEFAULT_TAG_SEPARATORS).toContain('，')

    expect(
      splitTagInputText(' a.com, b.com，c.com; d.com；e.com\nf.com\tg.com  ')
    ).toEqual(['a.com', 'b.com', 'c.com', 'd.com', 'e.com', 'f.com', 'g.com'])

    expect(splitTagInputText('us jp  gb', { separators: /\s+/ })).toEqual(['us', 'jp', 'gb'])

    expect(splitTagDraftOnInput('alpha, beta')).toEqual({
      committed: ['alpha'],
      remainingDraft: ' beta',
    })
    expect(splitTagDraftOnInput('alpha,')).toEqual({
      committed: ['alpha'],
      remainingDraft: '',
    })
    expect(splitTagDraftOnInput('plain-text')).toEqual({
      committed: [],
      remainingDraft: 'plain-text',
    })
  })

  it('2. Core mergeTagTokens 严格保证归一化先于去重、长度限制、自定义校验与数量上限', () => {
    const result = mergeTagTokens(
      ['example.com'],
      [' Example.COM ', 'toolongdomain.com', 'bad!', 'ok.com', 'extra.com'],
      {
        transformTag: (raw) => raw.trim().toLowerCase(),
        maxTagLength: 14,
        maxTags: 2,
        validateTag: (tag) => (tag.includes('.') ? true : '必须包含点号'),
      }
    )

    expect(result.changed).toBe(true)
    expect(result.added).toEqual(['ok.com'])
    expect(result.nextTags).toEqual(['example.com', 'ok.com'])
    expect(result.rejected).toEqual([
      { tag: 'example.com', reason: 'duplicate', message: '标签「example.com」已存在' },
      {
        tag: 'toolongdomain.com',
        reason: 'maxTagLength',
        message: '标签长度不能超过 14 个字符',
      },
      { tag: 'bad!', reason: 'invalid', message: '必须包含点号' },
      { tag: 'extra.com', reason: 'maxTags', message: '最多只能添加 2 个标签' },
    ])

    // allowDuplicates: true 时允许同值重复提交
    const dupAllowed = mergeTagTokens(['dup'], ['dup'], { allowDuplicates: true })
    expect(dupAllowed.nextTags).toEqual(['dup', 'dup'])
    expect(dupAllowed.rejected).toEqual([])
  })

  it('3. 受控与非受控模式联动、onValueChange 双回调与默认 aria-label 兼容性', () => {
    const onChange = vi.fn()
    const onValueChange = vi.fn()

    render(
      <TagInput value={['SaaS']} onChange={onChange} onValueChange={onValueChange} />
    )

    const input = screen.getByLabelText('添加标签输入')
    fireEvent.change(input, { target: { value: 'RBAC' } })
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(onChange).toHaveBeenCalledWith(['SaaS', 'RBAC'])
    expect(onValueChange).toHaveBeenCalledWith(['SaaS', 'RBAC'])

    // 非受控模式独立维护标签列表（全新挂载）
    const onUncontrolledChange = vi.fn()
    render(<TagInput defaultValue={['init']} onChange={onUncontrolledChange} />)
    const uncontrolledInputs = screen.getAllByLabelText('添加标签输入')
    const uncontrolledInput = uncontrolledInputs[uncontrolledInputs.length - 1]
    fireEvent.change(uncontrolledInput, { target: { value: 'next' } })
    fireEvent.keyDown(uncontrolledInput, { key: ',' })
    expect(screen.getByText('next')).toBeInTheDocument()
    expect(onUncontrolledChange).toHaveBeenCalledWith(['init', 'next'])
  })

  it('4. 保护 IME 组合输入态不误提交，支持中文分号/输入时切分与批量粘贴导入', () => {
    const onChange = vi.fn()
    render(<TagInput defaultValue={[]} onChange={onChange} />)
    const input = screen.getByLabelText('添加标签输入') as HTMLInputElement

    // IME 组合期间按 Enter 不触发添加
    fireEvent.change(input, { target: { value: 'zh' } })
    fireEvent.keyDown(input, { key: 'Enter', isComposing: true, keyCode: 229 })
    expect(onChange).not.toHaveBeenCalled()
    expect(input.value).toBe('zh')

    // 输入过程含分隔符时实时提交前置闭合片段，保留末尾草稿
    fireEvent.change(input, { target: { value: 'one；two,thr' } })
    expect(onChange).toHaveBeenLastCalledWith(['one', 'two'])
    expect(input.value).toBe('thr')

    // 粘贴混合分隔符多行文本一次性批量拆解并接续当前草稿
    fireEvent.paste(input, {
      clipboardData: {
        getData: () => 'ee.com, four.com\nfive.com',
      },
    })
    expect(onChange).toHaveBeenLastCalledWith(['one', 'two', 'three.com', 'four.com', 'five.com'])
    expect(input.value).toBe('')
  })

  it('5. 达到 maxTags 后阻止继续新增但仍允许按 Backspace 删除末尾标签', () => {
    const onReject = vi.fn()
    const onChange = vi.fn()
    render(<TagInput defaultValue={['a', 'b']} maxTags={2} showCount onChange={onChange} onReject={onReject} />)

    expect(screen.getByTestId('tag-input-count')).toHaveTextContent('2/2')

    const input = screen.getByLabelText('添加标签输入') as HTMLInputElement
    expect(input).not.toBeDisabled()

    fireEvent.change(input, { target: { value: 'c' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onReject).toHaveBeenCalledWith([
      { tag: 'c', reason: 'maxTags', message: '最多只能添加 2 个标签' },
    ])
    expect(screen.queryByText('c')).toBeNull()

    // 空草稿下按 Backspace 可正常删去最后一个标签
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.keyDown(input, { key: 'Backspace' })
    expect(onChange).toHaveBeenLastCalledWith(['a'])
    expect(screen.getByTestId('tag-input-count')).toHaveTextContent('1/2')
  })

  it('6. 失焦自动提交 (addOnBlur)、容器点击聚焦与校验失败保留草稿', () => {
    const onChange = vi.fn()
    const onReject = vi.fn()
    const { rerender } = render(
      <TagInput
        id="domains-field"
        label="允许域名"
        helperText="输入域名后按回车"
        addOnBlur={true}
        validateTag={(tag) => (tag.includes('.') ? true : '域名格式不合法')}
        onChange={onChange}
        onReject={onReject}
      />
    )

    const input = screen.getByLabelText('允许域名') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'invalid-domain' } })
    fireEvent.blur(input)

    // 校验失败时展示内联 alert 错误并保留用户草稿
    expect(screen.getByRole('alert')).toHaveTextContent('域名格式不合法')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input.value).toBe('invalid-domain')
    expect(onReject).toHaveBeenCalled()
    expect(onChange).not.toHaveBeenCalled()

    // 继续编辑时清除临时错误
    fireEvent.change(input, { target: { value: 'api.example.com' } })
    expect(screen.queryByRole('alert')).toBeNull()
    fireEvent.blur(input)
    expect(onChange).toHaveBeenCalledWith(['api.example.com'])

    // addOnBlur=false 时失焦不提交草稿
    const onNoBlurChange = vi.fn()
    rerender(<TagInput label="关闭失焦提交" addOnBlur={false} onChange={onNoBlurChange} />)
    const noBlurInput = screen.getByLabelText('关闭失焦提交') as HTMLInputElement
    fireEvent.change(noBlurInput, { target: { value: 'draft-kept' } })
    fireEvent.blur(noBlurInput)
    expect(onNoBlurChange).not.toHaveBeenCalled()
    expect(noBlurInput.value).toBe('draft-kept')

    // 点击容器空白区域自动聚焦内部 input
    const container = noBlurInput.closest('[data-slot="tag-input"]') as HTMLElement
    noBlurInput.blur()
    fireEvent.click(container)
    expect(document.activeElement).toBe(noBlurInput)
  })

  it('7. 一键清空 (clearable)、只读态 (readOnly)、禁用态 (disabled) 与 mono/size 样式', () => {
    const onClear = vi.fn()
    const onChange = vi.fn()
    const { rerender } = render(
      <TagInput
        defaultValue={['eth0', 'eth1']}
        mono
        size="lg"
        clearable
        onClear={onClear}
        onChange={onChange}
      />
    )

    const clearBtn = screen.getByTestId('tag-input-clear')
    fireEvent.click(clearBtn)
    expect(onClear).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith([])

    // readOnly 隐藏删除与清空按钮且不可修改
    rerender(<TagInput value={['locked']} readOnly clearable mono onChange={onChange} />)
    const roInput = screen.getByLabelText('添加标签输入') as HTMLInputElement
    expect(roInput).toHaveAttribute('readonly')
    expect(screen.queryByTestId('tag-input-clear')).toBeNull()
    expect(screen.queryByLabelText('移除标签 locked')).toBeNull()
    fireEvent.keyDown(roInput, { key: 'Backspace' })
    expect(onChange).toHaveBeenCalledTimes(1)

    // disabled 禁用态不可输入或清空
    rerender(<TagInput value={['disabled-tag']} disabled clearable />)
    const disInput = screen.getByLabelText('添加标签输入') as HTMLInputElement
    expect(disInput).toBeDisabled()
    expect(screen.queryByTestId('tag-input-clear')).toBeNull()
  })

  it('8. 无 label/helperText/showCount/wrapperClassName 时校验报错与清错保持 input 稳定挂载与焦点', () => {
    render(
      <TagInput validateTag={(tag) => (tag.includes('.') ? true : '必须包含点号')} />
    )

    const inputBefore = screen.getByLabelText('添加标签输入') as HTMLInputElement
    inputBefore.focus()
    expect(document.activeElement).toBe(inputBefore)

    // 输入非法标签按 Enter 触发校验错误，alert 出现且 input 未被卸载重建或失焦
    fireEvent.change(inputBefore, { target: { value: 'invalid-tag' } })
    fireEvent.keyDown(inputBefore, { key: 'Enter' })

    expect(screen.getByRole('alert')).toHaveTextContent('必须包含点号')
    const inputAfterError = screen.getByLabelText('添加标签输入') as HTMLInputElement
    expect(inputAfterError).toBe(inputBefore)
    expect(document.activeElement).toBe(inputAfterError)

    // 继续编辑使错误消失，alert 卸载且仍为同一 input DOM 节点并保持焦点
    fireEvent.change(inputAfterError, { target: { value: 'valid.tag' } })
    expect(screen.queryByRole('alert')).toBeNull()
    const inputAfterClear = screen.getByLabelText('添加标签输入') as HTMLInputElement
    expect(inputAfterClear).toBe(inputBefore)
    expect(document.activeElement).toBe(inputAfterClear)
  })
})
