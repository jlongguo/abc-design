import React, { useState } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { FileUpload, type FileUploadItem } from '../components/form/FileUpload'
import { ImageUpload } from '../components/form/ImageUpload'
import {
  MultiImageFieldControl,
  ProMultiImageUpload,
  parseMultiImageValue,
} from '../pro/ProCrudForm'

const PNG_DATA_URL_A = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='
const PNG_DATA_URL_B = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='

describe('上传组件 DataURL 逗号拆分 Bug 修复与多模式交互测试', () => {
  it('1. parseMultiImageValue 完整保留含逗号的 DataURL，不将单张图片错误拆分为两段坏链', () => {
    // 单个 base64 DataURL
    expect(parseMultiImageValue(PNG_DATA_URL_A)).toEqual([PNG_DATA_URL_A])
    // 多个 DataURL 以逗号拼接
    expect(parseMultiImageValue(`${PNG_DATA_URL_A},${PNG_DATA_URL_B}`)).toEqual([
      PNG_DATA_URL_A,
      PNG_DATA_URL_B,
    ])
    // 混合远程 URL 与 DataURL
    expect(
      parseMultiImageValue(`https://cdn.example.com/a.png,${PNG_DATA_URL_A},https://cdn.example.com/b.jpg`)
    ).toEqual(['https://cdn.example.com/a.png', PNG_DATA_URL_A, 'https://cdn.example.com/b.jpg'])
  })

  it('2. MultiImageFieldControl 上传单张本地图片（转 DataURL）只渲染 1 张预览图并显示 上传(1/3)，不出现两个错误框', async () => {
    const StatefulWrapper: React.FC = () => {
      const [val, setVal] = useState('')
      return (
        <MultiImageFieldControl
          value={val}
          onChange={setVal}
          maxCount={3}
          customUpload={async () => PNG_DATA_URL_A}
        />
      )
    }

    const { container } = render(<StatefulWrapper />)
    expect(screen.getByText('上传(0/3)')).toBeInTheDocument()

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement
    const file = new File(['mock-png'], 'avatar.png', { type: 'image/png' })
    fireEvent.change(fileInput, { target: { files: [file] } })

    await waitFor(() => {
      expect(screen.getByText('上传(1/3)')).toBeInTheDocument()
    })

    const imgs = container.querySelectorAll('img')
    expect(imgs).toHaveLength(1)
    expect(imgs[0]).toHaveAttribute('src', PNG_DATA_URL_A)

    // 再次上传第二张图片 -> 应渲染 2 张完整图片且计数为 2/3
    const file2 = new File(['mock-png-2'], 'banner.png', { type: 'image/png' })
    fireEvent.change(fileInput, { target: { files: [file2] } })

    await waitFor(() => {
      expect(screen.getByText('上传(2/3)')).toBeInTheDocument()
    })
    expect(container.querySelectorAll('img')).toHaveLength(2)
  })

  it('3. ProMultiImageUpload 支持 picture-card / picture-list / compact-grid 三态、调序、封面角标与非图片前置拦截', async () => {
    const onChange = vi.fn()
    const { container, rerender } = render(
      <ProMultiImageUpload
        variant="picture-list"
        reorderable
        showCoverBadge
        value={`${PNG_DATA_URL_A},${PNG_DATA_URL_B}`}
        onChange={onChange}
      />
    )

    expect(container.querySelector('[data-slot="pro-multi-image-upload"]')).toHaveAttribute(
      'data-variant',
      'picture-list'
    )
    expect(screen.getByText('封面')).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(2)

    // 将第 2 张图前移至第 1 位
    const movePrevBtns = screen.getAllByRole('button', { name: '前移图片' })
    fireEvent.click(movePrevBtns[1])
    expect(onChange).toHaveBeenCalledWith(`${PNG_DATA_URL_B},${PNG_DATA_URL_A}`)

    // 传入非图片文件应被前置拦截而不调用 onChange
    onChange.mockClear()
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement
    const badFile = new File(['hello'], 'notes.txt', { type: 'text/plain' })
    fireEvent.change(fileInput, { target: { files: [badFile] } })
    await waitFor(() => {
      expect(onChange).not.toHaveBeenCalled()
    })

    // 切换 compact-grid 模式
    rerender(
      <ProMultiImageUpload
        variant="compact-grid"
        value={PNG_DATA_URL_A}
        onChange={onChange}
        maxCount={5}
      />
    )
    expect(container.querySelector('[data-slot="pro-multi-image-upload"]')).toHaveAttribute(
      'data-variant',
      'compact-grid'
    )
    expect(screen.getByText('1/5')).toBeInTheDocument()
  })

  it('4. ImageUpload 支持 dropzone / avatar / card / button 四种交互模式且无 active scale', () => {
    const onChange = vi.fn()
    const { container } = render(
      <div>
        <ImageUpload variant="dropzone" value={PNG_DATA_URL_A} onChange={onChange} />
        <ImageUpload variant="avatar" shape="circle" value={PNG_DATA_URL_A} onChange={onChange} />
        <ImageUpload variant="card" value={PNG_DATA_URL_A} onChange={onChange} />
        <ImageUpload variant="button" buttonText="上传角标" value={PNG_DATA_URL_A} onChange={onChange} />
      </div>
    )

    const variants = Array.from(container.querySelectorAll('[data-slot="image-upload"]')).map(
      (el) => el.getAttribute('data-variant')
    )
    expect(variants).toEqual(['dropzone', 'avatar', 'card', 'button'])
    expect(screen.getByText('上传角标')).toBeInTheDocument()
    expect(container.querySelectorAll('.abc-motion-control')).toHaveLength(0)
  })

  it('5. FileUpload 支持 dragger / button / card / compact 四种交互模式与 picture 缩略图列表', () => {
    const items: FileUploadItem[] = [
      {
        uid: 'f1',
        name: 'preview.png',
        size: 2048,
        type: 'image/png',
        url: PNG_DATA_URL_A,
        status: 'done',
      },
      {
        uid: 'f2',
        name: 'spec.pdf',
        size: 10240,
        status: 'done',
      },
    ]

    const { container } = render(
      <div>
        <FileUpload variant="dragger" listType="picture" value={items} />
        <FileUpload variant="button" buttonText="选择附件" value={items} />
        <FileUpload variant="card" maxCount={4} value={items} />
        <FileUpload variant="compact" buttonText="添加" value={items} />
      </div>
    )

    const variants = Array.from(container.querySelectorAll('[data-slot="file-upload"]')).map(
      (el) => el.getAttribute('data-variant')
    )
    expect(variants).toEqual(['dragger', 'button', 'card', 'compact'])
    expect(screen.getByText('选择附件')).toBeInTheDocument()
    expect(screen.getByText('PDF')).toBeInTheDocument()
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(2)
    expect(container.querySelectorAll('.abc-motion-control')).toHaveLength(0)
  })
})
