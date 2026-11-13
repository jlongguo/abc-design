import React from 'react'
import { Card } from '../components/surface/Card'
import { cn } from '../utils/cn'

export interface ProFormSection {
  key: string
  title: React.ReactNode
  description?: React.ReactNode
  columns?: 1 | 2 | 3
  children: React.ReactNode
}

export interface ProFormLayoutProps {
  /** 排版形态：左右导览分栏 ('split') 或卡片网格堆叠 ('grid') */
  mode?: 'split' | 'grid'
  sections: ProFormSection[]
  className?: string
}

const GRID_COLS_MAP = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
}

/**
 * 企业级分组表单排版引擎
 * 支持 Vercel/Stripe 风格的左侧说明导览 + 右侧卡片分栏 ('split') 与经典多列卡片 ('grid')
 */
export const ProFormLayout: React.FC<ProFormLayoutProps> = ({
  mode = 'split',
  sections,
  className,
}) => {
  if (mode === 'grid') {
    return (
      <div className={cn('space-y-4', className)}>
        {sections.map((sec) => (
          <Card key={sec.key} title={sec.title} subtitle={sec.description}>
            <div className={cn('grid gap-4', GRID_COLS_MAP[sec.columns ?? 2])}>
              {sec.children}
            </div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className={cn('space-y-6', className)}>
      {sections.map((sec, idx) => (
        <div
          key={sec.key}
          className={cn(
            'grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8',
            idx > 0 && 'border-t border-[var(--abc-border)] pt-6'
          )}
        >
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-[var(--abc-fg)]">{sec.title}</h3>
            {sec.description && (
              <p className="mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]">
                {sec.description}
              </p>
            )}
          </div>
          <div className="lg:col-span-8">
            <Card>
              <div className={cn('grid gap-4', GRID_COLS_MAP[sec.columns ?? 1])}>
                {sec.children}
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProFormLayout
