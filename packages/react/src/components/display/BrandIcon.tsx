import React, { useEffect, useState } from 'react'
import { Building2, Layers } from 'lucide-react'
import { cn } from '../../utils/cn'

export interface BrandIconPreset {
  /** 渲染方式：常规图片（支持失败自动降级）或 CSS Mask 矢量主题着色 */
  mode?: 'image' | 'mask'
  /** 图片或 SVG 资源地址 */
  src: string
  /** 无障碍替代文本（image 模式） */
  alt?: string
  /** 图片加载失败时的降级图标节点 */
  fallbackIcon?: React.ReactNode
  /** mask 模式下的着色类名（默认跟随主题品牌色 bg-[var(--abc-primary)]） */
  maskClassName?: string
}

export interface BrandIconProps {
  /** 品牌或租户编码（匹配 presets 字典，大小写不敏感） */
  code?: string
  /** 兼容业务侧 tenantCode 属性命名 */
  tenantCode?: string
  /** 多租户/多品牌图标预设映射表 */
  presets?: Record<string, BrandIconPreset>
  /** 单品牌直接指定图片 URL */
  src?: string
  /** 单品牌直接指定 CSS Mask 矢量图标 URL */
  maskSrc?: string
  /** mask 模式下的着色类名 */
  maskClassName?: string
  /** 图片替代文字 */
  alt?: string
  /** 未命中预设或图片加载失败时的兜底图标 */
  fallbackIcon?: React.ReactNode
  /** 尺寸与自定义样式类名（默认 'w-4 h-4'） */
  className?: string
}

export type TenantIconProps = BrandIconProps

/**
 * 多品牌 / 多租户自适应前缀图标组件 (BrandIcon / TenantIcon)
 * 支持远程图片加载失败优雅回退矢量图标，以及基于 CSS mask-image 的 SVG 主题色动态着色。
 */
export const BrandIcon: React.FC<BrandIconProps> = ({
  code,
  tenantCode,
  presets,
  src,
  maskSrc,
  maskClassName,
  alt,
  fallbackIcon,
  className = 'w-4 h-4',
}) => {
  const normalizedCode = (code ?? tenantCode ?? '').toLowerCase().trim()
  const matchedPreset = normalizedCode && presets ? presets[normalizedCode] : undefined

  const effectiveMode = maskSrc
    ? 'mask'
    : src
      ? 'image'
      : matchedPreset?.mode ?? (matchedPreset?.src ? 'image' : undefined)
  const effectiveSrc = maskSrc ?? src ?? matchedPreset?.src
  const effectiveAlt = alt ?? matchedPreset?.alt ?? (normalizedCode || 'Brand')
  const effectiveMaskClass =
    maskClassName ?? matchedPreset?.maskClassName ?? 'bg-[var(--abc-primary)]'

  const [loadError, setLoadError] = useState(false)

  // 当租户编码或图片地址切换时重置错误状态，避免前序失败污染新租户图标展示
  useEffect(() => {
    setLoadError(false)
  }, [normalizedCode, effectiveSrc])

  if (effectiveMode === 'mask' && effectiveSrc) {
    return (
      <span
        className={cn('block shrink-0', effectiveMaskClass, className)}
        style={{
          maskImage: `url(${effectiveSrc})`,
          WebkitMaskImage: `url(${effectiveSrc})`,
          maskPosition: 'center',
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
        }}
        aria-hidden="true"
      />
    )
  }

  if (effectiveMode === 'image' && effectiveSrc) {
    if (loadError) {
      if (matchedPreset?.fallbackIcon) return <>{matchedPreset.fallbackIcon}</>
      if (fallbackIcon) return <>{fallbackIcon}</>
      return <Layers className={cn('shrink-0 text-[var(--abc-primary)]', className)} />
    }
    return (
      <img
        src={effectiveSrc}
        alt={effectiveAlt}
        className={cn('shrink-0 object-contain', className)}
        onError={() => setLoadError(true)}
        loading="lazy"
      />
    )
  }

  if (fallbackIcon) return <>{fallbackIcon}</>
  return <Building2 className={cn('shrink-0 text-[var(--abc-fg-placeholder)]', className)} />
}

export const TenantIcon = BrandIcon

export default BrandIcon
