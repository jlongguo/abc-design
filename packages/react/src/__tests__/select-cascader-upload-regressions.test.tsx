import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
  RadixSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/form/RadixSelectCompat'
import { Select } from '../components/form/select/Select'
import { Cascader, type CascaderOption } from '../components/form/Cascader'
import { FileUpload, type FileUploadItem } from '../components/form/FileUpload'

describe('Select / RadixSelect / Cascader / FileUpload 回归用例', () => {
  it('RadixSelect 在 SelectItem 接收动态 JSX children 时不触发无限重渲染循环', () => {
    function DynamicSelectWrapper() {
      const [tick, setTick] = React.useState(0)
      const [value, setValue] = React.useState('alpha')
      return (
        <div>
          <button type="button" onClick={() => setTick((n) => n + 1)}>
            rerender-{tick}
          </button>
          <RadixSelect value={value} onValueChange={setValue}>
            <SelectTrigger aria-label="JSX 选择">
              <SelectValue placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alpha">
                <span data-testid="jsx-alpha">Alpha JSX</span>
              </SelectItem>
              <SelectItem value="beta">
                <span>Beta JSX</span>
              </SelectItem>
            </SelectContent>
          </RadixSelect>
        </div>
      )
    }

    render(<DynamicSelectWrapper />)
    expect(screen.getByRole('combobox', { name: 'JSX 选择' })).toHaveTextContent('Alpha JSX')

    // 父组件重复重渲染并生成新的 ReactElement 引用时不应崩溃或出现最大更新深度错误
    fireEvent.click(screen.getByRole('button', { name: 'rerender-0' }))
    fireEvent.click(screen.getByRole('button', { name: 'rerender-1' }))
    expect(screen.getByRole('button', { name: 'rerender-2' })).toBeInTheDocument()
  })

  it('Select 仅在传统 <option> 模式下使用 <output>，options 模式保持无障碍 span 文本', () => {
    const { container } = render(
      <div>
        <Select
          aria-label="Options 状态"
          value="active"
          onChange={() => {}}
          options={[
            { value: 'active', label: 'Active' },
            { value: 'paused', label: 'Paused' },
          ]}
        />
        <label>
          Legacy Status
          <Select defaultValue="active">
            <option value="active">active</option>
            <option value="paused">paused</option>
          </Select>
        </label>
      </div>
    )

    const optionsCombo = screen.getByRole('combobox', { name: 'Options 状态' })
    const displayedOptionSpan = optionsCombo.querySelector('span')
    expect(displayedOptionSpan).not.toBeNull()
    expect(displayedOptionSpan).toHaveTextContent('Active')
    expect(displayedOptionSpan).not.toHaveAttribute('aria-hidden', 'true')
    expect(optionsCombo.querySelector('output')).toBeNull()

    // 传统 <option> 模式保留 <output>，避免 getByLabelText 把标签和已选文本拼接
    const legacyControl = screen.getByLabelText('Legacy Status')
    expect(legacyControl.tagName.toLowerCase()).toBe('select')
    expect(container.querySelector('output[aria-hidden="true"]')).not.toBeNull()
  })

  it('Cascader 未选中项时按 ArrowUp 应定位到最后一项并支持方向键展开与回车选中', () => {
    const onChange = vi.fn()
    const options: CascaderOption[] = [
      { value: 'first', label: '第一项', children: [{ value: 'f1', label: '子项1' }] },
      { value: 'second', label: '第二项', children: [{ value: 's1', label: '子项2' }] },
      { value: 'last', label: '最后一项', children: [{ value: 'l1', label: '末子项' }] },
    ]

    render(<Cascader ariaLabel="区域级联" options={options} onChange={onChange} />)

    const trigger = screen.getByRole('combobox', { name: '区域级联' })
    fireEvent.click(trigger)

    // 当前未激活任何节点时按 ArrowUp 应直接激活“最后一项”（而非倒数第二项）
    fireEvent.keyDown(trigger, { key: 'ArrowUp' })
    fireEvent.keyDown(trigger, { key: 'ArrowRight' })
    expect(screen.getByRole('option', { name: '末子项' })).toBeInTheDocument()

    // ArrowLeft 退回第一列，再 ArrowRight + Enter 完成末级选择
    fireEvent.keyDown(trigger, { key: 'ArrowLeft' })
    fireEvent.keyDown(trigger, { key: 'ArrowRight' })
    fireEvent.keyDown(trigger, { key: 'Enter' })

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange.mock.calls[0]?.[0]).toEqual(['last', 'l1'])
  })

  it('FileUpload 并发上传期间删除文件不会因闭包陈旧状态被后续完成回调复活，且支持重试', async () => {
    const resolvers = new Map<string, (url: string) => void>()
    const rejecters = new Map<string, (err: Error) => void>()
    let attempt = 0

    const customUpload = vi.fn((file: File) => {
      attempt += 1
      const key = `${file.name}#${attempt}`
      return new Promise<string>((resolve, reject) => {
        resolvers.set(key, resolve)
        rejecters.set(key, reject)
      })
    })

    const snapshots: FileUploadItem[][] = []
    const handleChange = vi.fn((next: FileUploadItem[]) => {
      snapshots.push(next)
    })

    const { container } = render(
      <FileUpload multiple customUpload={customUpload} onChange={handleChange} />
    )

    const input = container.querySelector('input[type="file"]') as HTMLInputElement
    const fileA = new File(['aaa'], 'a.txt', { type: 'text/plain' })
    const fileB = new File(['bbb'], 'b.txt', { type: 'text/plain' })

    fireEvent.change(input, { target: { files: [fileA, fileB] } })
    expect(screen.getByText('a.txt')).toBeInTheDocument()
    expect(screen.getByText('b.txt')).toBeInTheDocument()

    // 在两个文件都处于 uploading 时先删除 a.txt，随后让 b.txt 失败、再触发重试成功
    fireEvent.click(screen.getByRole('button', { name: '删除文件 a.txt' }))
    expect(screen.queryByText('a.txt')).not.toBeInTheDocument()

    // 即使 a.txt 的异步上传延迟完成，也不应把已删除的 a.txt 重新写回文件列表
    resolvers.get('a.txt#1')?.('https://cdn.example/a.txt')
    rejecters.get('b.txt#2')?.(new Error('network timeout'))

    await waitFor(() => {
      expect(screen.getByText('network timeout')).toBeInTheDocument()
    })
    expect(screen.queryByText('a.txt')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: '重试上传 b.txt' }))
    resolvers.get('b.txt#3')?.('https://cdn.example/b.txt')

    await waitFor(() => {
      const latest = snapshots[snapshots.length - 1] ?? []
      expect(latest).toHaveLength(1)
      expect(latest[0]).toMatchObject({
        name: 'b.txt',
        status: 'done',
        url: 'https://cdn.example/b.txt',
      })
    })
  })
})
