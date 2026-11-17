import React, { useMemo } from 'react'
import type { AbcSize } from '@abc-design/tokens'
import { Pencil } from 'lucide-react'
import { isSvgSource } from '../../components/display/ImagePreview'
import { useAbcSize } from '../../hooks/useAbcDefaults'
import { cn } from '../../utils/cn'
import type { AbcBrandInfo } from '../types'
import { NAV_SIZE_METRICS } from './shared'

/** 品牌 Logo 与项目名展示块（支持直链图片、内联 SVG、四档尺寸联动及多租户品牌快捷编辑按钮） */
export const BrandLogoBlock: React.FC<{
  brand: AbcBrandInfo
  collapsed?: boolean
  tone?: 'dark' | 'light'
  size?: AbcSize
  className?: string
}> = ({ brand, collapsed = false, tone = 'light', size, className }) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const m = NAV_SIZE_METRICS[resolvedSize]
  const isDark = tone === 'dark'

  const logoNode = useMemo(() => {
    if (!brand.logo) {
      return (
        <div
          className={cn(
            'flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)] font-bold text-[var(--abc-primary-fg)] shadow-xs transition-transform duration-[var(--abc-motion-fast)] group-hover:scale-[1.03]',
            m.brandLogoBox
          )}
        >
          {brand.name.slice(0, 1).toUpperCase()}
        </div>
      )
    }
    if (typeof brand.logo === 'string') {
      if (isSvgSource(brand.logo)) {
        return (
          <div
            className={cn(
              'flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)]/15 p-1 text-[var(--abc-primary)] [&>svg]:max-h-full [&>svg]:max-w-full',
              m.brandLogoBox
            )}
            dangerouslySetInnerHTML={{ __html: brand.logo }}
          />
        )
      }
      return (
        <img
          src={brand.logo}
          alt={brand.name}
          className={cn('shrink-0 rounded-[var(--abc-radius-md)] object-contain', m.brandLogoBox)}
        />
      )
    }
    return <div className="shrink-0">{brand.logo}</div>
  }, [brand.logo, brand.name, m.brandLogoBox])

  return (
    <div
      data-size={resolvedSize}
      className={cn(
        'group flex items-center select-none',
        m.brandGap,
        collapsed ? cn('justify-center', m.brandWrapCollapsed) : m.brandWrapExpanded,
        className
      )}
    >
      <div
        onClick={brand.onClick}
        className={cn(
          'flex min-w-0 flex-1 items-center',
          m.brandGap,
          brand.onClick && 'cursor-pointer'
        )}
      >
        {logoNode}
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <div
              className={cn(
                'truncate font-bold tracking-tight',
                m.brandTitle,
                isDark ? 'text-white' : 'text-[var(--abc-fg)]'
              )}
            >
              {brand.name}
            </div>
            {brand.subtitle && (
              <div
                className={cn(
                  'truncate',
                  m.brandSubtitle,
                  isDark ? 'text-slate-400' : 'text-[var(--abc-fg-muted)]'
                )}
              >
                {brand.subtitle}
              </div>
            )}
          </div>
        )}
      </div>

      {!collapsed && brand.onEditBrand && (
        <button
          type="button"
          aria-label="编辑品牌信息"
          title="修改品牌 Logo 与名称"
          onClick={(e) => {
            e.stopPropagation()
            brand.onEditBrand?.()
          }}
          className={cn(
            'rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer',
            isDark
              ? 'text-slate-400 hover:bg-white/10 hover:text-white'
              : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
          )}
        >
          <Pencil className={m.brandEditIcon} />
        </button>
      )}
    </div>
  )
}
