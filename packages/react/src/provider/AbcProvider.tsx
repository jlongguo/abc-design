import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  DEFAULT_ABC_THEME,
  applyAbcThemeToDocument,
  resolveAbcThemeMode,
  transitionAbcTheme,
  type AbcBrandColor,
  type AbcDensity,
  type AbcFontScale,
  type AbcPageTransition,
  type AbcRadius,
  type AbcResolvedTheme,
  type AbcThemeConfig,
  type AbcThemeMode,
  type AbcVisualMode,
} from '@abc-design/tokens'
import { AbcConfirmHost } from '../components/feedback/Confirm'
import { AbcToastViewport, abcToast } from '../components/feedback/Toast'
import type {
  AbcCaptchaAdapter,
  AbcContextValue,
  AbcDictAdapter,
  AbcIconComponent,
  AbcPermissionAdapter,
  AbcToastAdapter,
  AbcUploadAdapter,
} from './types'

const STORAGE_THEME_KEY = 'abc_design_theme_v1'
const STORAGE_SCHEME_KEY = 'color-scheme'

const AbcContext = createContext<AbcContextValue | null>(null)

export interface AbcProviderProps {
  children: React.ReactNode
  /** 初始主题配置 */
  defaultTheme?: Partial<AbcThemeConfig>
  /** 默认页面切换动画 */
  defaultPageTransition?: AbcPageTransition
  /** 全局水印文案 */
  watermarkText?: string | string[]
  /** 默认是否开启水印 */
  defaultWatermarkEnabled?: boolean
  /** 是否持久化用户主题偏好到 localStorage（默认开启） */
  persist?: boolean
  /** 自定义 Toast 适配器（不传则使用内置零依赖 AbcToastViewport） */
  toastAdapter?: AbcToastAdapter
  /** 注入全局文件上传实现（供 ImageUpload / ProConfigForm 使用） */
  uploadAdapter?: AbcUploadAdapter
  /** 注入数据字典查询实现（供 DictSelect / DictTag / ProTable 使用） */
  dictAdapter?: AbcDictAdapter
  /** 注入权限码判定实现（供 PermissionGuard / ProTable 操作按钮使用） */
  permissionAdapter?: AbcPermissionAdapter
  /** 注入滑块拼图验证码拉取实现（供 SliderVerify 使用） */
  captchaAdapter?: AbcCaptchaAdapter
  /** 按需注入扩展图标注册表 */
  iconRegistry?: Record<string, AbcIconComponent>
}

function readStoredTheme(fallback: AbcThemeConfig, persist: boolean): AbcThemeConfig {
  if (!persist || typeof window === 'undefined') return fallback
  try {
    const rawScheme = window.localStorage.getItem(STORAGE_SCHEME_KEY)
    const rawJson = window.localStorage.getItem(STORAGE_THEME_KEY)
    const parsed = rawJson ? (JSON.parse(rawJson) as Partial<AbcThemeConfig>) : {}
    const mode: AbcThemeMode =
      rawScheme === 'light' || rawScheme === 'dark'
        ? rawScheme
        : parsed.mode === 'light' || parsed.mode === 'dark' || parsed.mode === 'system'
          ? parsed.mode
          : fallback.mode

    return {
      mode,
      brand: parsed.brand ?? fallback.brand,
      customBrandColor: parsed.customBrandColor ?? fallback.customBrandColor,
      density: parsed.density ?? fallback.density,
      radius: parsed.radius ?? fallback.radius,
      fontScale: parsed.fontScale ?? fallback.fontScale ?? 'md',
      visualMode: parsed.visualMode ?? fallback.visualMode ?? 'default',
    }
  } catch {
    return fallback
  }
}

function persistThemeConfig(config: AbcThemeConfig, persist: boolean) {
  if (!persist || typeof window === 'undefined') return
  try {
    // 遵循 dark-mode-toggle 规范：回到 system 默认时移除 color-scheme 键，手动指定时写入字面量
    if (config.mode === 'system') {
      window.localStorage.removeItem(STORAGE_SCHEME_KEY)
    } else {
      window.localStorage.setItem(STORAGE_SCHEME_KEY, config.mode)
    }
    window.localStorage.setItem(STORAGE_THEME_KEY, JSON.stringify(config))
  } catch {
    // 忽略隐私模式限制
  }
}

/**
 * ABC Design 顶层全局配置与主题适配器容器
 */
export const AbcProvider: React.FC<AbcProviderProps> = ({
  children,
  defaultTheme,
  defaultPageTransition = 'fade-slide',
  watermarkText,
  defaultWatermarkEnabled = false,
  persist = true,
  toastAdapter,
  uploadAdapter,
  dictAdapter,
  permissionAdapter,
  captchaAdapter,
  iconRegistry = {},
}) => {
  const mergedInitial = useMemo<AbcThemeConfig>(
    () => ({ ...DEFAULT_ABC_THEME, ...defaultTheme }),
    [defaultTheme]
  )

  const [theme, setTheme] = useState<AbcThemeConfig>(() => readStoredTheme(mergedInitial, persist))
  const [resolvedTheme, setResolvedTheme] = useState<AbcResolvedTheme>(() =>
    resolveAbcThemeMode(theme.mode)
  )
  const [pageTransition, setPageTransition] = useState<AbcPageTransition>(defaultPageTransition)
  const [watermarkEnabled, setWatermarkEnabled] = useState<boolean>(defaultWatermarkEnabled)

  // 将 Token 状态同步应用到根文档与 <meta name="color-scheme">
  useEffect(() => {
    const resolved = applyAbcThemeToDocument(theme)
    setResolvedTheme(resolved)
    persistThemeConfig(theme, persist)
  }, [theme, persist])

  // 监听操作系统明暗变化（仅在 mode === 'system' 时跟随变化，绝不回溯清除用户已锁定的手动覆盖）
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme.mode === 'system') {
        const nextResolved = applyAbcThemeToDocument(theme)
        setResolvedTheme(nextResolved)
      }
    }
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [theme])

  // 跨浏览器标签页同步主题状态
  useEffect(() => {
    if (!persist || typeof window === 'undefined') return
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_THEME_KEY || e.key === STORAGE_SCHEME_KEY) {
        setTheme(readStoredTheme(mergedInitial, true))
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [persist, mergedInitial])

  const setThemeMode = useCallback(
    (mode: AbcThemeMode, origin?: { clientX: number; clientY: number }) => {
      transitionAbcTheme(() => {
        setTheme((prev) => {
          const next = { ...prev, mode }
          applyAbcThemeToDocument(next)
          return next
        })
      }, origin)
    },
    []
  )

  // 双态快捷切换：若目标模式恰好与当前系统偏好一致，则回退为 'system'（撤销临时覆盖而非永久死锁）
  const toggleTheme = useCallback(
    (origin?: { clientX: number; clientY: number }) => {
      const currentRendered = resolveAbcThemeMode(theme.mode)
      const targetRendered: AbcResolvedTheme = currentRendered === 'dark' ? 'light' : 'dark'
      const systemNow: AbcResolvedTheme = resolveAbcThemeMode('system')
      const nextMode: AbcThemeMode = targetRendered === systemNow ? 'system' : targetRendered
      setThemeMode(nextMode, origin)
    },
    [theme.mode, setThemeMode]
  )

  const setBrand = useCallback((brand: AbcBrandColor) => {
    setTheme((prev) => ({ ...prev, brand, customBrandColor: undefined }))
  }, [])

  const setCustomBrandColor = useCallback((customBrandColor?: string) => {
    setTheme((prev) => ({ ...prev, customBrandColor }))
  }, [])

  const setDensity = useCallback((density: AbcDensity) => {
    setTheme((prev) => ({ ...prev, density }))
  }, [])

  const setRadius = useCallback((radius: AbcRadius) => {
    setTheme((prev) => ({ ...prev, radius }))
  }, [])

  const setFontScale = useCallback((fontScale: AbcFontScale) => {
    setTheme((prev) => ({ ...prev, fontScale }))
  }, [])

  const setVisualMode = useCallback((visualMode: AbcVisualMode) => {
    setTheme((prev) => ({ ...prev, visualMode }))
  }, [])

  const updateTheme = useCallback((patch: Partial<AbcThemeConfig>) => {
    setTheme((prev) => ({ ...prev, ...patch }))
  }, [])

  const resetTheme = useCallback(() => {
    setTheme(mergedInitial)
    setPageTransition(defaultPageTransition)
    setWatermarkEnabled(defaultWatermarkEnabled)
  }, [mergedInitial, defaultPageTransition, defaultWatermarkEnabled])

  const contextValue = useMemo<AbcContextValue>(
    () => ({
      theme,
      resolvedTheme,
      pageTransition,
      watermarkText,
      watermarkEnabled,
      setThemeMode,
      toggleTheme,
      setBrand,
      setCustomBrandColor,
      setDensity,
      setRadius,
      setFontScale,
      setVisualMode,
      updateTheme,
      setPageTransition,
      setWatermarkEnabled,
      resetTheme,
      toast: toastAdapter ?? abcToast,
      uploadAdapter,
      dictAdapter,
      permissionAdapter,
      captchaAdapter,
      iconRegistry,
    }),
    [
      theme,
      resolvedTheme,
      pageTransition,
      watermarkText,
      watermarkEnabled,
      setThemeMode,
      toggleTheme,
      setBrand,
      setCustomBrandColor,
      setDensity,
      setRadius,
      setFontScale,
      setVisualMode,
      updateTheme,
      resetTheme,
      toastAdapter,
      uploadAdapter,
      dictAdapter,
      permissionAdapter,
      captchaAdapter,
      iconRegistry,
    ]
  )

  return (
    <AbcContext.Provider value={contextValue}>
      {children}
      {!toastAdapter && <AbcToastViewport />}
      <AbcConfirmHost />
    </AbcContext.Provider>
  )
}

/** 读取 ABC Design 上下文（若未包裹 AbcProvider，提供安全兜底实例以保证单组件独立渲染与单测可用） */
export function useAbcConfig(): AbcContextValue {
  const ctx = useContext(AbcContext)
  if (ctx) return ctx

  return {
    theme: DEFAULT_ABC_THEME,
    resolvedTheme: resolveAbcThemeMode(DEFAULT_ABC_THEME.mode),
    pageTransition: 'fade-slide',
    watermarkEnabled: false,
    setThemeMode: (mode) => {
      applyAbcThemeToDocument({ ...DEFAULT_ABC_THEME, mode })
    },
    toggleTheme: () => {
      const next = resolveAbcThemeMode(DEFAULT_ABC_THEME.mode) === 'dark' ? 'light' : 'dark'
      applyAbcThemeToDocument({ ...DEFAULT_ABC_THEME, mode: next })
    },
    setBrand: (brand) => {
      applyAbcThemeToDocument({ ...DEFAULT_ABC_THEME, brand })
    },
    setCustomBrandColor: (customBrandColor) => {
      applyAbcThemeToDocument({ ...DEFAULT_ABC_THEME, customBrandColor })
    },
    setDensity: (density) => {
      applyAbcThemeToDocument({ ...DEFAULT_ABC_THEME, density })
    },
    setRadius: (radius) => {
      applyAbcThemeToDocument({ ...DEFAULT_ABC_THEME, radius })
    },
    setFontScale: (fontScale) => {
      applyAbcThemeToDocument({ ...DEFAULT_ABC_THEME, fontScale })
    },
    setVisualMode: (visualMode) => {
      applyAbcThemeToDocument({ ...DEFAULT_ABC_THEME, visualMode })
    },
    updateTheme: (patch) => {
      applyAbcThemeToDocument({ ...DEFAULT_ABC_THEME, ...patch })
    },
    setPageTransition: () => {},
    setWatermarkEnabled: () => {},
    resetTheme: () => {
      applyAbcThemeToDocument(DEFAULT_ABC_THEME)
    },
    toast: abcToast,
    iconRegistry: {},
  }
}
