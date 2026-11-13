import React from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '../utils/cn'

export interface BreadcrumbEntry {
  label: React.ReactNode
  onClick?: () => void
}

export interface PageContainerProps {
  /** 页面主标题 */
  title?: React.ReactNode
  /** 页面副标题说明 */
  subtitle?: React.ReactNode
  /** 标题旁状态徽标插槽 */
  tags?: React.ReactNode
  /** 面包屑路径项 */
  breadcrumbs?: BreadcrumbEntry[]
  /** 右上角主操作按钮区 */
  extra?: React.ReactNode
  /** 页头下方的数据指标/概览插槽 */
  headerContent?: React.ReactNode
  /** 底部吸底固定操作栏（适合长表单保存/提交） */
  footer?: React.ReactNode
  className?: string
  children: React.ReactNode
}

/**
 * 标准业务页面布局容器
 * 统一封装企业后台页面的标题栏、面包屑、右上角动作按钮、KPI 摘要区与底部吸底提交栏
 */
export const PageContainer: React.FC<PageContainerProps> = ({
  title,
  subtitle,
  tags,
  breadcrumbs,
  extra,
  headerContent,
  footer,
  className,
  children,
}) => {
  return (
    <div className={cn('flex min-h-full flex-col gap-4', footer && 'pb-16', className)}>
      {(breadcrumbs?.length || title || extra || headerContent) && (
        <div className="flex flex-col gap-2.5">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="页面路径面包屑" className="flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]">
              {breadcrumbs.map((bc, idx) => {
                const isLast = idx === breadcrumbs.length - 1
                return (
                  <React.Fragment key={idx}>
                    {idx > 0 && <ChevronRight className="h-3 w-3 opacity-60" />}
                    {bc.onClick && !isLast ? (
                      <button
                        type="button"
                        onClick={bc.onClick}
                        className="hover:text-[var(--abc-primary)] cursor-pointer"
                      >
                        {bc.label}
                      </button>
                    ) : (
                      <span className={cn(isLast && 'font-medium text-[var(--abc-fg-secondary)]')}>
                        {bc.label}
                      </span>
                    )}
                  </React.Fragment>
                )
              })}
            </nav>
          )}

          {(title || extra) && (
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  {title && (
                    <h1 className="text-base font-bold tracking-tight text-[var(--abc-fg)]">
                      {title}
                    </h1>
                  )}
                  {tags}
                </div>
                {subtitle && (
                  <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">{subtitle}</p>
                )}
              </div>
              {extra && <div className="flex shrink-0 flex-wrap items-center gap-2">{extra}</div>}
            </div>
          )}

          {headerContent && <div>{headerContent}</div>}
        </div>
      )}

      <div className="flex-1">{children}</div>

      {footer && (
        <div className="sticky bottom-0 z-30 -mx-4 mt-4 flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-6 py-3 backdrop-blur-md">
          {footer}
        </div>
      )}
    </div>
  )
}

export default PageContainer
