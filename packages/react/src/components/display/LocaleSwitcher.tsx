import { Languages } from 'lucide-react'
import * as React from 'react'
import { Button } from '../button/Button'
import { cn } from '../../utils/cn'

export interface LocaleSwitcherProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** 当前语言代码（如 'zh-CN' | 'zh' | 'en'） */
  locale: string
  /** 切换语言回调（toggle 模式） */
  onToggle?: () => void
  /** 直接选择指定语言回调（segmented 模式优先调用） */
  onSelectLocale?: (nextLocale: 'en' | 'zh') => void
  /** 展示模式：单按钮切换 ('toggle') 或分段双按钮组 ('segmented') */
  mode?: 'toggle' | 'segmented'
  /** 是否使用暗色外观 */
  dark?: boolean
  /** 无障碍标题 */
  label?: string
}

/**
 * 通用双语切换器组件 (LocaleSwitcher)
 */
export const LocaleSwitcher = React.forwardRef<HTMLButtonElement, LocaleSwitcherProps>(
  (
    {
      locale,
      onToggle,
      onSelectLocale,
      mode = 'toggle',
      dark = false,
      label,
      className,
      ...props
    },
    ref
  ) => {
    const isZh = locale.toLowerCase().startsWith('zh')
    const defaultLabel = isZh
      ? '切换到英文 / Switch to English'
      : 'Switch to Chinese / 切换到中文'

    if (mode === 'segmented') {
      const handleSelect = (target: 'en' | 'zh') => {
        if (onSelectLocale) {
          onSelectLocale(target)
        } else if ((target === 'zh') !== isZh) {
          onToggle?.()
        }
      }

      return (
        <div
          role="group"
          data-slot="locale-switcher"
          aria-label={label ?? (isZh ? '语言切换' : 'Language selector')}
          className={cn(
            'inline-flex items-center gap-1 rounded-lg border p-1 shadow-2xs transition-colors',
            dark
              ? 'border-slate-700/90 bg-slate-900/90'
              : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)]',
            className
          )}
        >
          <Languages
            aria-hidden="true"
            size={13}
            className={cn(
              'ml-1 shrink-0',
              dark ? 'text-slate-400' : 'text-[var(--abc-fg-muted)]'
            )}
          />
          <Button
            type="button"
            size="sm"
            variant={!isZh ? 'default' : 'ghost'}
            onClick={() => handleSelect('en')}
            aria-pressed={!isZh}
            className={cn(
              'h-6 min-w-8 rounded-md px-2 text-xs font-medium',
              dark && 'focus-visible:ring-blue-300 focus-visible:ring-offset-slate-950',
              dark && isZh && 'text-slate-300 hover:bg-white/10 hover:text-white'
            )}
          >
            EN
          </Button>
          <Button
            type="button"
            size="sm"
            variant={isZh ? 'default' : 'ghost'}
            onClick={() => handleSelect('zh')}
            aria-pressed={isZh}
            className={cn(
              'h-6 min-w-8 rounded-md px-2 text-xs font-medium',
              dark && 'focus-visible:ring-blue-300 focus-visible:ring-offset-slate-950',
              dark && !isZh && 'text-slate-300 hover:bg-white/10 hover:text-white'
            )}
          >
            中文
          </Button>
        </div>
      )
    }

    return (
      <button
        ref={ref}
        type="button"
        data-slot="locale-switcher"
        onClick={() => {
          if (onToggle) {
            onToggle()
          } else if (onSelectLocale) {
            onSelectLocale(isZh ? 'en' : 'zh')
          }
        }}
        title={label ?? defaultLabel}
        aria-label={label ?? defaultLabel}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] active:scale-[0.98] cursor-pointer',
          dark
            ? 'border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white'
            : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-2xs hover:bg-[var(--abc-bg-subtle)]',
          className
        )}
        {...props}
      >
        <Languages className="h-3.5 w-3.5 opacity-75" aria-hidden="true" />
        <span className={cn(!isZh ? 'font-semibold text-[var(--abc-primary)]' : 'opacity-50')}>
          EN
        </span>
        <span className="opacity-30" aria-hidden="true">
          /
        </span>
        <span className={cn(isZh ? 'font-semibold text-[var(--abc-primary)]' : 'opacity-50')}>
          中文
        </span>
      </button>
    )
  }
)
LocaleSwitcher.displayName = 'LocaleSwitcher'
