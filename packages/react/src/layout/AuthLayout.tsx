import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { AuroraBackground, BorderBeam } from '../components/surface/Card'
import { cn } from '../utils/cn'
import { BrandLogoBlock } from './NavRenderers'
import type { AbcBrandInfo } from './types'

export interface AuthLayoutProps {
  brand?: AbcBrandInfo
  /** 分屏双栏 ('split') 或极简居中卡片 ('centered') */
  variant?: 'split' | 'centered'
  /** 左侧品牌大标题 */
  headline?: React.ReactNode
  /** 左侧副标题描述 */
  subheadline?: React.ReactNode
  /** 左侧企业特性卖点列表 */
  highlights?: string[]
  /** 右上角附加插槽（如语言/主题切换按钮） */
  topRightExtra?: React.ReactNode
  /** 页脚版权说明 */
  copyright?: React.ReactNode
  children: React.ReactNode
  className?: string
}

/**
 * 登录 / SSO / 租户入驻独立认证页布局框架
 * 支持分屏品牌视觉展示与极简居中卡片两种主流企业范式
 */
export const AuthLayout: React.FC<AuthLayoutProps> = ({
  brand = { name: 'ABC Enterprise', subtitle: 'Design System & Console' },
  variant = 'split',
  headline = '高密度、高可靠的企业级数字工作台',
  subheadline = '基于 ABC Design 统一语义化 Token 与多模态布局架构构建，助力多业务线高效协同。',
  highlights = [
    '三层语义化 Design Tokens，支持多品牌色与暗黑模式秒级切换',
    '5 大企业级自适应布局拓扑，一套组件无缝适配全终端业务',
    '零业务 API 耦合，Adapter 协议驱动安全接入任意后端架构',
  ],
  topRightExtra,
  copyright = `© ${new Date().getFullYear()} ABC Design System. All rights reserved.`,
  children,
  className,
}) => {
  if (variant === 'centered') {
    return (
      <div
        className={cn(
          'relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6',
          className
        )}
      >
        <AuroraBackground />
        {topRightExtra && <div className="fixed top-4 right-5 z-20">{topRightExtra}</div>}
        <div className="relative z-10 mb-6">
          <BrandLogoBlock brand={brand} />
        </div>
        <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-dialog)]">
          <BorderBeam />
          {children}
        </div>
        <footer className="relative z-10 mt-8 text-xs text-[var(--abc-fg-muted)]">
          {copyright}
        </footer>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative grid min-h-dvh w-full grid-cols-1 bg-[var(--abc-bg-canvas)] lg:grid-cols-12',
        className
      )}
    >
      {/* 左侧深色品牌视觉叙事屏 */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7">
        <AuroraBackground />
        <div className="relative z-10">
          <BrandLogoBlock brand={brand} tone="dark" className="px-0" />
        </div>

        <div className="relative z-10 my-auto max-w-lg space-y-6">
          <h1 className="text-3xl font-bold tracking-tight leading-tight text-white">
            {headline}
          </h1>
          <p className="text-sm leading-relaxed text-slate-300">{subheadline}</p>
          <ul className="space-y-3 pt-2">
            {highlights.map((text, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--abc-brand-400)]" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 text-xs text-slate-400">{copyright}</div>
      </div>

      {/* 右侧认证表单交互区 */}
      <div className="relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-6 xl:col-span-5">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <BrandLogoBlock brand={brand} className="px-0" />
          </div>
          <div className="ml-auto">{topRightExtra}</div>
        </div>

        <div className="mx-auto my-auto w-full max-w-md overflow-hidden relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-card)]">
          <BorderBeam />
          {children}
        </div>

        <div className="text-center text-xs text-[var(--abc-fg-muted)] lg:hidden">{copyright}</div>
      </div>
    </div>
  )
}

export default AuthLayout
