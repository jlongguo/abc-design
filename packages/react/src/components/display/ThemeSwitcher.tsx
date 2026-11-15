/**
 * 统一主题模式切换组件与深浅状态同步 Hook (ThemeSwitcher / useColorScheme)
 * 支持 system / light / dark 三态无缝切换、系统 prefers-color-scheme 监听、
 * 跨 Tab 状态广播与 documentElement .dark / meta[color-scheme] DOM 属性自动同步。
 */
import { Monitor, Moon, Sun } from 'lucide-react'
import * as React from 'react'
import { useOptionalAbcConfig } from '../../provider/AbcProvider'
import { Button } from '../button/Button'
import { cn } from '../../utils/cn'

export type ColorSchemePreference = 'system' | 'light' | 'dark'
export type ResolvedColorScheme = 'light' | 'dark'

const STORAGE_KEY = 'color-scheme'
const SYNC_EVENT = 'abc:color-scheme-change'
const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)'

function getSystemScheme(): ResolvedColorScheme {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light'
  }
  return window.matchMedia(DARK_MEDIA_QUERY).matches ? 'dark' : 'light'
}

function readStoredPreference(): ColorSchemePreference {
  if (typeof window === 'undefined') return 'system'
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === 'light' || raw === 'dark') return raw
  } catch {
    // 忽略异常
  }
  return 'system'
}

function applySchemeToDom(preference: ColorSchemePreference) {
  if (typeof document === 'undefined') return
  const metaValue = preference === 'system' ? 'light dark' : preference
  let meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]')
  if (!meta && document.head) {
    meta = document.createElement('meta')
    meta.name = 'color-scheme'
    document.head.prepend(meta)
  }
  if (meta) {
    meta.content = metaValue
  }

  const resolved: ResolvedColorScheme =
    preference === 'system' ? getSystemScheme() : preference
  const root = document.documentElement
  root.setAttribute('data-abc-theme', resolved)
  root.setAttribute('data-abc-theme-mode', preference)
  root.classList.toggle('dark', resolved === 'dark')
  root.classList.toggle('light', resolved === 'light')
}

export function useColorScheme() {
  const abcCtx = useOptionalAbcConfig()
  const [preference, setPreferenceState] = React.useState<ColorSchemePreference>(() =>
    readStoredPreference(),
  )
  const [systemScheme, setSystemScheme] = React.useState<ResolvedColorScheme>(() =>
    getSystemScheme(),
  )

  React.useEffect(() => {
    if (!abcCtx) {
      applySchemeToDom(readStoredPreference())
    }

    const media =
      typeof window.matchMedia === 'function' ? window.matchMedia(DARK_MEDIA_QUERY) : null
    const handleMediaChange = () => {
      setSystemScheme(getSystemScheme())
      if (!abcCtx && readStoredPreference() === 'system') {
        applySchemeToDom('system')
      }
    }

    const handleStorageOrSync = () => {
      const next = readStoredPreference()
      setPreferenceState(next)
      setSystemScheme(getSystemScheme())
      if (!abcCtx) {
        applySchemeToDom(next)
      }
    }

    media?.addEventListener?.('change', handleMediaChange)
    window.addEventListener('storage', handleStorageOrSync)
    window.addEventListener(SYNC_EVENT, handleStorageOrSync)
    return () => {
      media?.removeEventListener?.('change', handleMediaChange)
      window.removeEventListener('storage', handleStorageOrSync)
      window.removeEventListener(SYNC_EVENT, handleStorageOrSync)
    }
  }, [abcCtx])

  const effectivePreference: ColorSchemePreference = abcCtx ? abcCtx.theme.mode : preference
  const effectiveResolved: ResolvedColorScheme = abcCtx
    ? abcCtx.resolvedTheme
    : effectivePreference === 'system'
      ? systemScheme
      : effectivePreference

  const setPreference = React.useCallback(
    (next: ColorSchemePreference, origin?: { clientX: number; clientY: number }) => {
      try {
        if (next === 'system') {
          window.localStorage.removeItem(STORAGE_KEY)
        } else {
          window.localStorage.setItem(STORAGE_KEY, next)
        }
      } catch {
        // 忽略异常
      }
      setPreferenceState(next)
      if (abcCtx) {
        abcCtx.setThemeMode(next, origin)
      } else {
        applySchemeToDom(next)
      }
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event(SYNC_EVENT))
      }
    },
    [abcCtx],
  )

  const toggleScheme = React.useCallback(
    (origin?: { clientX: number; clientY: number } | React.SyntheticEvent) => {
      const coords =
        origin && 'clientX' in origin && typeof origin.clientX === 'number'
          ? { clientX: origin.clientX, clientY: origin.clientY }
          : undefined
      if (abcCtx) {
        abcCtx.toggleTheme(coords)
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event(SYNC_EVENT))
        }
        return
      }
      const currentSystem = getSystemScheme()
      const currentRendered: ResolvedColorScheme =
        effectivePreference === 'system' ? currentSystem : effectivePreference
      const target: ResolvedColorScheme = currentRendered === 'dark' ? 'light' : 'dark'
      if (target === currentSystem) {
        setPreference('system')
      } else {
        setPreference(target)
      }
    },
    [abcCtx, effectivePreference, setPreference],
  )

  return {
    preference: effectivePreference,
    resolvedScheme: effectiveResolved,
    systemScheme,
    setPreference,
    toggleScheme,
  }
}

export interface ThemeSwitcherProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  locale?: string
  mode?: 'toggle' | 'segmented'
  dark?: boolean
  label?: string
}

export const ThemeSwitcher = React.forwardRef<HTMLButtonElement, ThemeSwitcherProps>(
  ({ locale = 'zh-CN', mode = 'toggle', dark = false, label, className, ...props }, ref) => {
    const isZh = locale.toLowerCase().startsWith('zh')
    const { preference, resolvedScheme, systemScheme, setPreference, toggleScheme } =
      useColorScheme()

    if (mode === 'segmented') {
      const systemHint =
        systemScheme === 'dark'
          ? isZh
            ? '当前深色'
            : 'Currently dark'
          : isZh
            ? '当前浅色'
            : 'Currently light'

      return (
        <div
          role="group"
          data-slot="theme-switcher"
          aria-label={label ?? (isZh ? '颜色主题偏好' : 'Color theme preference')}
          className={cn(
            'inline-flex flex-wrap items-center gap-1 rounded-lg border p-1 shadow-2xs transition-colors',
            dark ? 'border-slate-700/90 bg-slate-900/90' : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)]',
            className,
          )}
        >
          <Button
            size="xs"
            variant={preference === 'light' ? 'default' : 'ghost'}
            onClick={(e) => setPreference('light', { clientX: e.clientX, clientY: e.clientY })}
            aria-pressed={preference === 'light'}
            className="h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer"
          >
            <Sun size={13} aria-hidden="true" />
            <span>{isZh ? '浅色' : 'Light'}</span>
          </Button>
          <Button
            size="xs"
            variant={preference === 'dark' ? 'default' : 'ghost'}
            onClick={(e) => setPreference('dark', { clientX: e.clientX, clientY: e.clientY })}
            aria-pressed={preference === 'dark'}
            className="h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer"
          >
            <Moon size={13} aria-hidden="true" />
            <span>{isZh ? '深色' : 'Dark'}</span>
          </Button>
          <Button
            size="xs"
            variant={preference === 'system' ? 'default' : 'ghost'}
            onClick={(e) => setPreference('system', { clientX: e.clientX, clientY: e.clientY })}
            aria-pressed={preference === 'system'}
            title={`${isZh ? '跟随系统' : 'System'} (${systemHint})`}
            className="h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer"
          >
            <Monitor size={13} aria-hidden="true" />
            <span>
              {isZh ? '跟随系统' : 'System'}
              <span className="ml-1 opacity-75">({systemHint})</span>
            </span>
          </Button>
        </div>
      )
    }

    const actionText =
      resolvedScheme === 'dark'
        ? isZh
          ? '切换到浅色主题'
          : 'Switch to light theme'
        : isZh
          ? '切换到深色主题'
          : 'Switch to dark theme'

    return (
      <button
        ref={ref}
        type="button"
        data-slot="theme-switcher"
        data-color-scheme={resolvedScheme}
        data-color-preference={preference}
        onClick={toggleScheme}
        title={label ?? actionText}
        aria-label={label ?? actionText}
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer',
          dark
            ? 'border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white'
            : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-2xs hover:bg-[var(--abc-bg-subtle)]',
          className,
        )}
        {...props}
      >
        {resolvedScheme === 'dark' ? (
          <Sun className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
        ) : (
          <Moon className="h-3.5 w-3.5 text-[var(--abc-fg-muted)]" aria-hidden="true" />
        )}
        <span className="sr-only">{actionText}</span>
      </button>
    )
  },
)

ThemeSwitcher.displayName = 'ThemeSwitcher'
export default ThemeSwitcher
