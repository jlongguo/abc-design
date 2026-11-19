import fs from 'node:fs'
import path from 'node:path'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { ChevronDown } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../components/button/Button'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/display/Overlays'
import {
  DatePicker,
  DateRangePicker,
  TimePicker,
  TimeRangePicker,
} from '../components/form/DatePicker'
import { InputNumber } from '../components/form/Input'
import { ByteQuotaInput, DurationQuotaInput } from '../components/form/QuotaUnitInput'

describe('UI/UX 细节修复与多维度时间组件回归测试', () => {
  it('1. Dropdown 与 DropdownMenu 展开时正确切换触发器状态属性，且 tokens CSS 包含旋转动画规则', () => {
    const { container } = render(
      <div>
        <Dropdown items={[{ key: 'a', label: '操作 A' }]}>
          <Button size="sm">
            声明式菜单
            <ChevronDown className="abc-chevron h-3.5 w-3.5" />
          </Button>
        </Dropdown>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm">
              复合菜单
              <ChevronDown className="abc-chevron h-3.5 w-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>子项 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )

    const ddTrigger = container.querySelector('[data-slot="dropdown-trigger"]') as HTMLElement
    expect(ddTrigger).not.toBeNull()
    expect(ddTrigger).toHaveAttribute('data-state', 'closed')
    expect(ddTrigger).toHaveAttribute('data-open', 'false')

    fireEvent.click(ddTrigger)
    expect(ddTrigger).toHaveAttribute('data-state', 'open')
    expect(ddTrigger).toHaveAttribute('data-open', 'true')
    expect(ddTrigger).toHaveAttribute('aria-expanded', 'true')

    const ddmTrigger = container.querySelector('[data-slot="dropdown-menu-trigger"]') as HTMLElement
    expect(ddmTrigger).not.toBeNull()
    expect(ddmTrigger).toHaveAttribute('data-state', 'closed')
    fireEvent.click(ddmTrigger)
    expect(ddmTrigger).toHaveAttribute('data-state', 'open')
    expect(ddmTrigger).toHaveAttribute('data-open', 'true')

    const cssPath = path.resolve(
      process.cwd(),
      '../tokens/src/styles/animations.css'
    )
    const css = fs.readFileSync(cssPath, 'utf8')
    expect(css).toContain('[data-slot="dropdown-trigger"]')
    expect(css).toContain('[data-slot="dropdown-menu-trigger"]')
    expect(css).toContain('transform: rotate(180deg) !important')
  })

  it('2. InputNumber 隐藏浏览器原生上下箭头，并在 autoWidth 开启时随数字位数动态伸缩且受 minWidth/maxWidth 约束', () => {
    const { container, rerender } = render(
      <InputNumber autoWidth minWidth={88} maxWidth={180} value={9} onChange={() => {}} />
    )

    const root = container.querySelector('[data-slot="input-number"]') as HTMLElement
    const input = root.querySelector('input[type="number"]') as HTMLInputElement

    expect(root).toHaveAttribute('data-auto-width', 'true')
    const rootTokens = root.className.split(/\s+/)
    expect(rootTokens).toContain('w-auto')
    expect(rootTokens).not.toContain('w-full')
    expect(root.style.minInlineSize).toBe('88px')
    expect(root.style.maxInlineSize).toBe('180px')

    // 原生 spin button 隐藏类与内联样式均应存在
    expect(input.className).toContain('[appearance:textfield]')
    expect(input.className).toContain('[&::-webkit-inner-spin-button]:appearance-none')
    expect(input.className).toContain('[&::-webkit-outer-spin-button]:appearance-none')
    expect(input.style.getPropertyValue('--abc-input-ch')).toBe('2')

    // 数字位数增大时，动态内容字符计数同步增长
    rerender(
      <InputNumber autoWidth minWidth={88} maxWidth={180} value={98765432} onChange={() => {}} />
    )
    expect(input.style.getPropertyValue('--abc-input-ch')).toBe('8')
  })

  it('3. ByteQuotaInput / DurationQuotaInput 右侧单位区全高铺满 hover 且下拉浮层右对齐不超出组件外框', async () => {
    const { container } = render(
      <div>
        <ByteQuotaInput
          locale="zh"
          aria-label="容量配额"
          unitAriaLabel="容量单位"
          value={512 * 1024 * 1024}
          onChange={() => {}}
        />
        <DurationQuotaInput
          locale="zh"
          aria-label="时长配额"
          unitAriaLabel="时长单位"
          value={3600}
          onChange={() => {}}
        />
      </div>
    )

    const quotaInputs = container.querySelectorAll('[data-slot="quota-unit-input"]')
    const byteBox = quotaInputs[0] as HTMLElement
    const selectWrapper = byteBox.querySelector('[data-slot="select-wrapper"]') as HTMLElement
    const selectTrigger = byteBox.querySelector('[data-slot="select-trigger"]') as HTMLElement

    // ghost 模式必须保留 wrapperClassName 的 h-full 与 items-stretch，使 hover 背景铺满整高
    expect(selectWrapper.className).toContain('h-full')
    expect(selectWrapper.className).toContain('items-stretch')
    expect(selectTrigger.className).toContain('h-full')
    expect(selectTrigger.className).toContain('rounded-none')

    // 模拟触发器位于 [400, 474] 宽 74px，浮层宽度 104px：右对齐后 left 应为 474 - 104 = 370（不向右溢出 474）
    const origGetRect = selectTrigger.getBoundingClientRect.bind(selectTrigger)
    selectTrigger.getBoundingClientRect = () => ({
      x: 400,
      y: 120,
      top: 120,
      left: 400,
      right: 474,
      bottom: 152,
      width: 74,
      height: 32,
      toJSON: () => ({}),
    })

    fireEvent.click(selectTrigger)
    const listbox = await screen.findByRole('listbox')
    const popover = listbox.closest('[data-slot="select-popover"]') as HTMLElement
    expect(popover).not.toBeNull()
    expect(popover.style.transformOrigin).toContain('right')
    const parsedLeft = Number.parseFloat(popover.style.left)
    expect(parsedLeft).toBeLessThanOrEqual(400)

    selectTrigger.getBoundingClientRect = origGetRect
  })

  it('4. DatePicker 支持 year / quarter / month / week / date+showTime 多维度选择', () => {
    const onYear = vi.fn()
    const { container: yearBox } = render(
      <DatePicker picker="year" defaultValue="2026" onChange={onYear} />
    )
    fireEvent.click(yearBox.querySelector('[data-datepicker-trigger]') as HTMLElement)
    fireEvent.click(screen.getByRole('button', { name: '2025' }))
    expect(onYear).toHaveBeenCalledWith('2025')

    const onQuarter = vi.fn()
    const { container: quarterBox } = render(
      <DatePicker picker="quarter" defaultValue="2026-Q1" onChange={onQuarter} />
    )
    fireEvent.click(quarterBox.querySelector('[data-datepicker-trigger]') as HTMLElement)
    fireEvent.click(screen.getByRole('button', { name: '2026-Q3' }))
    expect(onQuarter).toHaveBeenCalledWith('2026-Q3')

    const onMonth = vi.fn()
    const { container: monthBox } = render(
      <DatePicker picker="month" defaultValue="2026-01" onChange={onMonth} />
    )
    fireEvent.click(monthBox.querySelector('[data-datepicker-trigger]') as HTMLElement)
    fireEvent.click(screen.getByRole('button', { name: '2026-06' }))
    expect(onMonth).toHaveBeenCalledWith('2026-06')

    const onWeek = vi.fn()
    const { container: weekBox } = render(
      <DatePicker picker="week" defaultValue="2026-W47" onChange={onWeek} />
    )
    fireEvent.click(weekBox.querySelector('[data-datepicker-trigger]') as HTMLElement)
    fireEvent.click(screen.getByRole('button', { name: '2026-W46' }))
    expect(onWeek).toHaveBeenCalledWith('2026-W46')

    const onDateTime = vi.fn()
    const { container: dtBox } = render(
      <DatePicker
        picker="date"
        showTime
        defaultValue="2026-11-18 09:15:00"
        onChange={onDateTime}
      />
    )
    fireEvent.click(dtBox.querySelector('[data-datepicker-trigger]') as HTMLElement)
    const dialog = screen.getByRole('dialog', { name: '日期选择面板' })
    fireEvent.click(within(dialog).getByRole('button', { name: '2026-11-20' }))
    const hourList = within(dialog).getByRole('listbox', { name: '时' })
    fireEvent.click(within(hourList).getByRole('option', { name: '14' }))
    fireEvent.click(within(dialog).getByRole('button', { name: '确定' }))
    expect(onDateTime).toHaveBeenCalledWith('2026-11-20 14:15:00')
  })

  it('5. DateRangePicker 支持多维度区间选择，且 TimePicker / TimeRangePicker 支持独立时刻与时段选择（无 active scale）', () => {
    const onMonthRange = vi.fn()
    const { container: mrBox } = render(
      <DateRangePicker
        picker="month"
        defaultValue={['2026-01', '2026-02']}
        onChange={onMonthRange}
      />
    )
    fireEvent.click(mrBox.querySelector('[data-daterangepicker-trigger]') as HTMLElement)
    fireEvent.click(screen.getByRole('button', { name: '2026-08' }))
    fireEvent.click(screen.getByRole('button', { name: '2026-03' }))
    // 反向点击自动排序
    expect(onMonthRange).toHaveBeenCalledWith(['2026-03', '2026-08'])

    const onTime = vi.fn()
    const { container: tBox } = render(
      <TimePicker format="HH:mm" minuteStep={15} defaultValue="09:00" onChange={onTime} />
    )
    fireEvent.click(tBox.querySelector('[data-timepicker-trigger]') as HTMLElement)
    const timeDialog = screen.getByRole('dialog', { name: '时间选择面板' })
    expect(within(timeDialog).queryByRole('listbox', { name: '秒' })).toBeNull()
    const minList = within(timeDialog).getByRole('listbox', { name: '分' })
    expect(within(minList).getAllByRole('option')).toHaveLength(4)
    fireEvent.click(within(minList).getByRole('option', { name: '30' }))
    expect(onTime).toHaveBeenCalledWith('09:30')
    expect(timeDialog.querySelectorAll('.abc-motion-control').length).toBe(0)
    fireEvent.click(within(timeDialog).getByRole('button', { name: '确定' }))

    const onTimeRange = vi.fn()
    const { container: trBox } = render(
      <TimeRangePicker
        format="HH:mm"
        defaultValue={['18:00', '09:00']}
        onChange={onTimeRange}
      />
    )
    fireEvent.click(trBox.querySelector('[data-timerangepicker-trigger]') as HTMLElement)
    const rangeDialog = screen.getByRole('dialog', { name: '时间范围选择面板' })
    fireEvent.click(within(rangeDialog).getByRole('button', { name: '确定' }))
    // 确认时自动纠正起止时刻顺序
    expect(onTimeRange).toHaveBeenCalledWith(['09:00', '18:00'])
  })

  it('6. @abc-design/flow 样式不得二次生成 @layer utilities，确保 PC 端 md:block / md:flex / md:hidden 导航规则不被后置基础类覆盖', () => {
    const flowSrcCss = fs.readFileSync(
      path.resolve(process.cwd(), '../flow/src/styles.css'),
      'utf8'
    )
    expect(flowSrcCss).not.toContain('tailwindcss/utilities.css')

    const reactSrcCss = fs.readFileSync(
      path.resolve(process.cwd(), 'src/styles.css'),
      'utf8'
    )
    expect(reactSrcCss).toContain('../../flow/src/')

    const flowDistCssPath = path.resolve(process.cwd(), '../flow/dist/abc-flow.css')
    if (fs.existsSync(flowDistCssPath)) {
      const flowDistCss = fs.readFileSync(flowDistCssPath, 'utf8')
      expect(flowDistCss).not.toContain('@layer utilities')
      expect(flowDistCss).not.toContain('.hidden{')
      expect(flowDistCss).not.toContain('.inline-flex{')
    }

    const reactDistCssPath = path.resolve(process.cwd(), 'dist/abc-design.css')
    if (fs.existsSync(reactDistCssPath)) {
      const reactDistCss = fs.readFileSync(reactDistCssPath, 'utf8')
      const lastHiddenIdx = reactDistCss.lastIndexOf('.hidden{')
      const lastInlineFlexIdx = reactDistCss.lastIndexOf('.inline-flex{')
      const mdBlockIdx = reactDistCss.indexOf('.md\\:block{')
      const mdFlexIdx = reactDistCss.indexOf('.md\\:flex{')
      const mdHiddenIdx = reactDistCss.indexOf('.md\\:hidden{')
      expect(mdBlockIdx).toBeGreaterThan(lastHiddenIdx)
      expect(mdFlexIdx).toBeGreaterThan(lastHiddenIdx)
      expect(mdHiddenIdx).toBeGreaterThan(lastInlineFlexIdx)
    }
  })
})
