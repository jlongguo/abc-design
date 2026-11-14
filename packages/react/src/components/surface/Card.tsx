import React, { useRef, useState } from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { useAbcMotion, useAbcSize } from '../../hooks'
import { Skeleton } from '../display/FeedbackStates'
import { StatusTag, type StatusTone } from '../display/StatusTag'
import { cn } from '../../utils/cn'

export type CardVariant = 'default' | 'bordered' | 'ghost' | 'elevated' | 'glass'

export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** 语义容器标签（默认 'div'，推荐在列表/仪表盘网格中设为 'article'） */
  as?: 'div' | 'article' | 'section'
  /** 卡片主标题 */
  title?: React.ReactNode
  /** 标题旁辅助说明 */
  subtitle?: React.ReactNode
  /** 右上角附加操作区 */
  extra?: React.ReactNode
  /** 卡片底部区域 */
  footer?: React.ReactNode
  /** 通用四档密度尺寸 */
  size?: AbcSize
  /** 内容区内边距规格（未指定时默认跟随 size） */
  padding?: 'none' | AbcSize
  /** 视觉表面变体 */
  variant?: CardVariant
  /** 顶部固定比例封面图插槽（防布局偏移 CLS） */
  cover?: React.ReactNode
  /** 右上角状态角标 */
  statusRibbon?: { text: string; tone?: StatusTone }
  /** 加载态骨架占位 */
  loading?: boolean
  /** 动效预设 */
  motion?: AbcMotionPreset
  /** 鼠标悬停时是否轻微浮起高亮边框 */
  hoverable?: boolean
  /** 内容容器附加类名 */
  bodyClassName?: string
}

const PADDING_MAP: Record<'none' | AbcSize, string> = {
  none: 'p-0',
  xs: 'p-2.5',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
}

const HEADER_PAD_MAP: Record<AbcSize, string> = {
  xs: 'px-3 py-2',
  sm: 'px-3.5 py-2.5',
  md: 'px-4 py-3',
  lg: 'px-6 py-4',
}

const FOOTER_PAD_MAP: Record<AbcSize, string> = {
  xs: 'px-3 py-2',
  sm: 'px-3.5 py-2',
  md: 'px-4 py-2.5',
  lg: 'px-6 py-3',
}

const VARIANT_MAP: Record<CardVariant, string> = {
  default:
    'border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]',
  bordered: 'border border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] shadow-none',
  ghost: 'border border-transparent bg-transparent shadow-none',
  elevated: 'border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-md',
  glass:
    'border border-[var(--abc-border)]/75 bg-[var(--abc-bg-surface)]/80 backdrop-blur-md shadow-[var(--abc-shadow-card)]',
}

/**
 * 标准企业级表面容器卡片
 * 统一取代零散的 panelClass / filterCardClass / tableCardClass，支持四档尺寸、五种视觉表面、封面图与容器查询
 */
export const Card: React.FC<CardProps> = ({
  as = 'div',
  title,
  subtitle,
  extra,
  footer,
  size,
  padding,
  variant = 'default',
  cover,
  statusRibbon,
  loading = false,
  motion,
  hoverable = false,
  className,
  bodyClassName,
  children,
  ...rest
}) => {
  const Tag = as
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const effectivePadding = padding ?? resolvedSize

  return (
    <Tag
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      className={cn(
        '@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]',
        VARIANT_MAP[variant],
        hoverable &&
          'abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm',
        className
      )}
      {...rest}
    >
      {cover && (
        <div className="aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]">
          {cover}
        </div>
      )}
      {(title || extra || statusRibbon) && (
        <div
          className={cn(
            'flex items-center justify-between gap-3 border-b border-[var(--abc-border)]',
            HEADER_PAD_MAP[resolvedSize]
          )}
        >
          <div className="min-w-0">
            {title && (
              <h3
                className={cn(
                  'font-semibold text-[var(--abc-fg)] leading-snug',
                  resolvedSize === 'xs'
                    ? 'text-xs'
                    : resolvedSize === 'lg'
                      ? 'text-base'
                      : 'text-sm'
                )}
              >
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">{subtitle}</p>
            )}
          </div>
          {(extra || statusRibbon) && (
            <div className="flex shrink-0 items-center gap-2">
              {statusRibbon && (
                <StatusTag tone={statusRibbon.tone ?? 'primary'} size="xs" dot={false}>
                  {statusRibbon.text}
                </StatusTag>
              )}
              {extra}
            </div>
          )}
        </div>
      )}
      <div className={cn(PADDING_MAP[effectivePadding], bodyClassName)}>
        {loading ? (
          <div className="space-y-2.5" aria-busy="true">
            <Skeleton width="45%" height={14} motion={resolvedMotion} />
            <Skeleton width="90%" height={12} motion={resolvedMotion} />
            <Skeleton width="70%" height={12} motion={resolvedMotion} />
          </div>
        ) : (
          children
        )}
      </div>
      {footer && (
        <div
          className={cn(
            'border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50',
            FOOTER_PAD_MAP[resolvedSize]
          )}
        >
          {footer}
        </div>
      )}
    </Tag>
  )
}

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  label?: React.ReactNode
}

/** 分割线组件 */
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  className,
  ...rest
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('mx-1.5 inline-block h-4 w-px shrink-0 bg-[var(--abc-border)] align-middle', className)}
        {...rest}
      />
    )
  }

  if (label) {
    return (
      <div
        role="separator"
        className={cn('my-4 flex items-center gap-3 text-xs text-[var(--abc-fg-muted)]', className)}
        {...rest}
      >
        <span className="h-px flex-1 bg-[var(--abc-border)]" />
        <span className="shrink-0">{label}</span>
        <span className="h-px flex-1 bg-[var(--abc-border)]" />
      </div>
    )
  }

  return (
    <div
      role="separator"
      className={cn('my-3 h-px w-full bg-[var(--abc-border)]', className)}
      {...rest}
    />
  )
}

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical'
  size?: AbcSize
  wrap?: boolean
  align?: 'start' | 'center' | 'end' | 'stretch'
}

const GAP_MAP: Record<AbcSize, string> = {
  xs: 'gap-1.5',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
}

const ALIGN_MAP = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

/** 弹性间距编排容器 */
export const Space: React.FC<SpaceProps> = ({
  direction = 'horizontal',
  size,
  wrap = false,
  align = 'center',
  className,
  children,
  ...rest
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  return (
    <div
      className={cn(
        'flex',
        direction === 'vertical' ? 'flex-col items-stretch' : ALIGN_MAP[align],
        GAP_MAP[resolvedSize],
        wrap && 'flex-wrap',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string
  size?: AbcSize
  motion?: AbcMotionPreset
  hoverable?: boolean
}

const SPOTLIGHT_PAD_MAP: Record<AbcSize, string> = {
  xs: 'p-3',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
}

/** 聚光灯跟随交互卡片（常用于登录页、仪表盘核心指标卡与亮眼特性展示） */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  spotlightColor = 'color-mix(in srgb, var(--abc-primary) 16%, transparent)',
  size,
  motion,
  hoverable = false,
  className,
  children,
  ...rest
}) => {
  const resolvedSize = useAbcSize(size, 'md')
  const resolvedMotion = useAbcMotion(motion)
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0, active: false })

  return (
    <div
      ref={cardRef}
      data-motion={resolvedMotion}
      data-size={resolvedSize}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true })
      }}
      onMouseLeave={() => setCoords((prev) => ({ ...prev, active: false }))}
      className={cn(
        '@container relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] transition-colors',
        SPOTLIGHT_PAD_MAP[resolvedSize],
        hoverable && 'abc-motion-surface hover:border-[var(--abc-border-strong)] hover:shadow-md',
        className
      )}
      {...rest}
    >
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -inset-px',
          resolvedMotion !== 'none' && 'transition-opacity duration-[var(--abc-motion-base)]'
        )}
        style={{
          opacity: coords.active ? 1 : 0,
          background: `radial-gradient(360px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export interface BorderBeamProps {
  duration?: number
  motion?: AbcMotionPreset
  className?: string
}

/** 流光边框装饰层（放置在 relative overflow-hidden 容器内部） */
export const BorderBeam: React.FC<BorderBeamProps> = ({ duration = 8, motion, className }) => {
  const resolvedMotion = useAbcMotion(motion)
  if (resolvedMotion === 'none') return null
  return (
    <div
      aria-hidden="true"
      data-motion={resolvedMotion}
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]',
        className
      )}
    >
      <div
        style={{
          offsetPath: 'rect(0 auto auto 0 round 16px)',
          animation: `abc-border-beam ${duration}s linear infinite`,
        }}
        className="absolute aspect-square w-24 bg-gradient-to-l from-[var(--abc-primary)] via-[var(--abc-brand-400)] to-transparent opacity-80"
      />
    </div>
  )
}

/** 柔和极光背景装饰层（适配 Auth 登录布局及大屏视觉头部） */
export const AuroraBackground: React.FC<{ motion?: AbcMotionPreset; className?: string }> = ({
  motion,
  className,
}) => {
  const resolvedMotion = useAbcMotion(motion)
  const animateStyle = resolvedMotion === 'none'
  return (
    <div
      aria-hidden="true"
      data-motion={resolvedMotion}
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div
        style={animateStyle ? undefined : { animation: 'abc-aurora-drift 14s ease-in-out infinite' }}
        className="absolute -top-1/4 -left-1/5 h-[65%] w-[65%] rounded-full bg-[var(--abc-brand-500)]/20 blur-[96px]"
      />
      <div
        style={
          animateStyle
            ? undefined
            : { animation: 'abc-aurora-drift 18s ease-in-out infinite reverse' }
        }
        className="absolute -right-1/5 -bottom-1/4 h-[60%] w-[60%] rounded-full bg-indigo-500/20 blur-[110px]"
      />
    </div>
  )
}
