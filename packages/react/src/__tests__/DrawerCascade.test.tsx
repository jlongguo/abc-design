import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Drawer } from '../components/feedback/Drawer'

describe('Drawer Cascade Adjacent Mode', () => {
  it('correctly shifts L1 drawer when L2 is opened in adjacent mode', async () => {
    const { rerender } = render(
      <div>
        <Drawer open onClose={() => {}} title="L1 抽屉" size="2xl" cascadeMode="adjacent">
          <div>L1 Content</div>
        </Drawer>
      </div>
    )

    const l1Panel = screen.getByText('L1 Content').closest('.relative.z-10') as HTMLElement
    expect(l1Panel).toBeInTheDocument()
    // L1 单独打开时，应该停留在原位无向左推移
    expect(l1Panel.style.transform).toBe('translate3d(0, 0, 0)')

    // 现在打开 L2
    rerender(
      <div>
        <Drawer open onClose={() => {}} title="L1 抽屉" size="2xl" cascadeMode="adjacent">
          <div>L1 Content</div>
        </Drawer>
        <Drawer open onClose={() => {}} title="L2 抽屉" width={640} cascadeMode="adjacent">
          <div>L2 Content</div>
        </Drawer>
      </div>
    )

    const l2Panel = screen.getByText('L2 Content').closest('.relative.z-10') as HTMLElement
    expect(l2Panel).toBeInTheDocument()

    // 打印当前的 style
    console.log('L1 panel style.transform:', l1Panel.style.transform)
    console.log('L1 panel style.width:', l1Panel.style.width)
    console.log('L2 panel style.transform:', l2Panel.style.transform)
    console.log('L2 panel style.width:', l2Panel.style.width)

    expect(l1Panel.style.transform).toContain('translate3d(-')
  })
})
