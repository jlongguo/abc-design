import React, { useRef, useState } from 'react'
import { cn } from '../../utils/cn'

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 卡片主标题 */
  title?: React.ReactNode
  /** 标题旁辅助说明 */
  subtitle?: React.ReactNode
  /** 右上角附加操作区 */
  extra?: React.ReactNode
  /** 卡片底部区域 */
  footer?: React.ReactNode
  /** 内容区内边距规格 */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** 鼠标悬停时是否轻微浮起高亮边框 */
  hoverable?: boolean
  /** 内容容器附加类名 */
  bodyClassName?: string
}

const PADDING_MAP = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
}

/**
 * 标准企业级表面容器卡片
 * 统一取代零散的 panelClass / filterCardClass / tableCardClass
 */
export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  extra,
  footer,
  padding = 'md',
  hoverable = false,
  className,
  bodyClassName,
  children,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        hoverable &&
          'transition-all duration-150 hover:border-[var(--abc-border-strong)] hover:shadow-sm',
        className
      )}
      {...rest}
    >
      {(title || extra) && (
        <div className="flex items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3">
          <div className="min-w-0">
            {title && (
              <h3 className="text-sm font-semibold text-[var(--abc-fg)] leading-snug">{title}</h3>
            )}
            {subtitle && (
              <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">{subtitle}</p>
            )}
          </div>
          {extra && <div className="flex shrink-0 items-center gap-2">{extra}</div>}
        </div>
      )}
      <div className={cn(PADDING_MAP[padding], bodyClassName)}>{children}</div>
      {footer && (
        <div className="border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-4 py-2.5">
          {footer}
        </div>
      )}
    </div>
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
  size?: 'xs' | 'sm' | 'md' | 'lg'
  wrap?: boolean
  align?: 'start' | 'center' | 'end' | 'stretch'
}

const GAP_MAP = {
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
  size = 'sm',
  wrap = false,
  align = 'center',
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'flex',
        direction === 'vertical' ? 'flex-col items-stretch' : ALIGN_MAP[align],
        GAP_MAP[size],
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
}

/** 聚光灯跟随交互卡片（常用于登录页、仪表盘核心指标卡与亮眼特性展示） */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  spotlightColor = 'color-mix(in srgb, var(--abc-primary) 16%, transparent)',
  className,
  children,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0, active: false })

  return (
    <div
      ref={cardRef}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true })
      }}
      onMouseLeave={() => setCoords((prev) => ({ ...prev, active: false }))}
      className={cn(
        'relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-[var(--abc-shadow-card)] transition-colors',
        className
      )}
      {...rest}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
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
  className?: string
}

/** 流光边框装饰层（放置在 relative overflow-hidden 容器内部） */
export const BorderBeam: React.FC<BorderBeamProps> = ({ duration = 8, className }) => {
  return (
    <div
      aria-hidden="true"
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
export const AuroraBackground: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div
        style={{ animation: 'abc-aurora-drift 14s ease-in-out infinite' }}
        className="absolute -top-1/4 -left-1/5 h-[65%] w-[65%] rounded-full bg-[var(--abc-brand-500)]/20 blur-[96px]"
      />
      <div
        style={{ animation: 'abc-aurora-drift 18s ease-in-out infinite reverse' }}
        className="absolute -right-1/5 -bottom-1/4 h-[60%] w-[60%] rounded-full bg-indigo-500/20 blur-[110px]"
      />
    </div>
  )
}
