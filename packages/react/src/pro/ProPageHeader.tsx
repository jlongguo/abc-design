import React from 'react'
import { BookOpen } from 'lucide-react'
import { useControllableState } from '../hooks/useControllableState'
import { Button } from '../components/button/Button'
import { StatusTag } from '../components/display/StatusTag'
import { Drawer } from '../components/feedback/Drawer'
import { cn } from '../utils/cn'

export interface ProPageGuideStep {
  /** 步骤编号标签（省略时自动按 1, 2, 3... 递增） */
  step?: string | number
  /** 步骤标题 */
  title: React.ReactNode
  /** 步骤详细说明 */
  description?: React.ReactNode
}

export interface ProPageGuide {
  /** 抽屉头部徽章文案（如 "工作流指南" / "Guide"） */
  badge?: React.ReactNode
  /** 指南主标题 */
  title: React.ReactNode
  /** 指南副标题 */
  subtitle?: React.ReactNode
  /** 分步说明列表 */
  steps: ProPageGuideStep[]
  /** 底部总结提示或注意事项 */
  summary?: React.ReactNode
  /** 自定义扩展区 */
  extra?: React.ReactNode
}

export interface ProPageHeaderProps {
  /** 页面主标题 */
  title?: React.ReactNode
  /** 副标题或简要描述 */
  description?: React.ReactNode
  /** 可选面包屑导航栏 */
  breadcrumb?: React.ReactNode
  /** 标题旁辅助状态标签 */
  tags?: React.ReactNode
  /** 右侧主操作按钮区 */
  actions?: React.ReactNode
  /** 页面操作说明指南配置，开启后提供右侧滑出说明抽屉与屏幕阅读器语义摘要 */
  guide?: ProPageGuide
  /** 操作说明入口按钮文案（默认 "操作说明"） */
  guideButtonLabel?: React.ReactNode
  /** 操作说明抽屉标题（省略时使用 guide.title 或 "操作说明"） */
  guideDrawerTitle?: React.ReactNode
  /** 操作说明抽屉关闭按钮文案（默认 "关闭"） */
  guideCloseLabel?: React.ReactNode
  /** 操作说明抽屉宽度（默认 480） */
  guideDrawerWidth?: number | string
  /** 受控打开状态 */
  guideOpen?: boolean
  /** 默认打开状态 */
  defaultGuideOpen?: boolean
  /** 抽屉开关回调 */
  onGuideOpenChange?: (open: boolean) => void
  /** 是否隐藏操作说明入口 */
  hideGuide?: boolean
  /** 头部下方扩展槽位（常用于 Tab 切换条或指标汇总带） */
  children?: React.ReactNode
  className?: string
}

/**
 * 企业级页面头部组件 (ProPageHeader)
 * 集成语义化标题区、面包屑/状态徽标、右侧操作栏，以及标准化的右侧滑出“页面操作说明”抽屉与无障碍折叠摘要。
 */
export const ProPageHeader: React.FC<ProPageHeaderProps> = ({
  title,
  description,
  breadcrumb,
  tags,
  actions,
  guide,
  guideButtonLabel = '操作说明',
  guideDrawerTitle,
  guideCloseLabel = '关闭',
  guideDrawerWidth = 480,
  guideOpen,
  defaultGuideOpen = false,
  onGuideOpenChange,
  hideGuide = false,
  children,
  className,
}) => {
  const [drawerOpen, setDrawerOpen] = useControllableState<boolean>({
    value: guideOpen,
    defaultValue: defaultGuideOpen,
    onChange: onGuideOpenChange,
  })

  const showGuide = Boolean(guide && !hideGuide)
  const guideLabelText = typeof guideButtonLabel === 'string' ? guideButtonLabel : '操作说明'

  return (
    <header className={cn('mb-5 border-b border-[var(--abc-border)] pb-4', className)}>
      {breadcrumb ? <div className="mb-2">{breadcrumb}</div> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1 space-y-1">
          {(title || tags) ? (
            <div className="flex flex-wrap items-center gap-2">
              {title ? (
                <h1 className="text-xl font-semibold tracking-tight text-[var(--abc-fg-primary)]">
                  {title}
                </h1>
              ) : null}
              {tags}
            </div>
          ) : null}
          {description ? (
            <p className="text-sm leading-relaxed text-[var(--abc-fg-secondary)]">{description}</p>
          ) : null}
        </div>

        {(actions || showGuide) ? (
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            {actions}
            {showGuide && guide ? (
              <Button
                type="button"
                variant="secondary"
                size="sm"
                icon={<BookOpen className="h-3.5 w-3.5" />}
                aria-expanded={drawerOpen}
                onClick={() => setDrawerOpen(true)}
              >
                {guideButtonLabel}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>

      {showGuide && guide ? (
        <>
          {/* 语义化无障碍降级摘要：保证屏幕阅读器及测试环境无需打开抽屉即可读取完整指南 */}
          <details className="sr-only" aria-label={guideLabelText}>
            <summary>{guide.title}</summary>
            <ol>
              {guide.steps.map((step, index) => (
                <li key={index}>
                  <span>{step.step ?? index + 1}. </span>
                  <strong>{step.title}</strong>
                  {step.description ? (
                    <>
                      {': '}
                      <span>{step.description}</span>
                    </>
                  ) : null}
                </li>
              ))}
            </ol>
          </details>

          <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            placement="right"
            width={guideDrawerWidth}
            title={guideDrawerTitle ?? guide.title}
            description={guide.subtitle}
            footer={
              <div className="flex justify-end">
                <Button type="button" variant="secondary" size="sm" onClick={() => setDrawerOpen(false)}>
                  {guideCloseLabel}
                </Button>
              </div>
            }
          >
            <div className="space-y-4">
              {guide.badge ? (
                <div>
                  <StatusTag tone="info">{guide.badge}</StatusTag>
                </div>
              ) : null}

              <ol className="space-y-3" aria-label={guideLabelText}>
                {guide.steps.map((step, index) => (
                  <li
                    key={index}
                    className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/60 p-3.5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] px-1.5 font-mono text-xs font-semibold text-[var(--abc-primary)]">
                        {step.step ?? index + 1}
                      </span>
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="text-sm font-medium text-[var(--abc-fg-primary)]">
                          {step.title}
                        </div>
                        {step.description ? (
                          <p className="text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
                            {step.description}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              {guide.summary ? (
                <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-xs leading-relaxed text-[var(--abc-fg-secondary)]">
                  {guide.summary}
                </div>
              ) : null}

              {guide.extra}
            </div>
          </Drawer>
        </>
      ) : null}

      {children ? <div className="mt-4">{children}</div> : null}
    </header>
  )
}

ProPageHeader.displayName = 'ProPageHeader'
