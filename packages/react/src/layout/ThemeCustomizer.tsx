import React, { useState } from 'react'
import {
  ABC_BRAND_PRESETS,
  ABC_DENSITY_PRESETS,
  ABC_MOTION_PRESETS,
  ABC_RADIUS_PRESETS,
  type AbcBrandColor,
  type AbcDensity,
  type AbcFontScale,
  type AbcMotionPreset,
  type AbcPageTransition,
  type AbcRadius,
  type AbcSize,
  type AbcThemeConfig,
  type AbcThemeMode,
  type AbcVisualMode,
} from '@abc-design/tokens'
import {
  Check,
  Code2,
  Copy,
  Eye,
  Monitor,
  Moon,
  Palette,
  Play,
  RotateCcw,
  Sparkles,
  Sun,
  Upload,
} from 'lucide-react'
import Button from '../components/button/Button'
import { StatusTag } from '../components/display/StatusTag'
import Drawer from '../components/feedback/Drawer'
import { RadioGroup, Switch } from '../components/form/Controls'
import { Input, Textarea } from '../components/form/Input'
import { Select } from '../components/form/Select'
import { useAbcConfig } from '../provider/AbcProvider'
import { cn } from '../utils/cn'
import {
  ABC_HEADER_HEIGHT_BY_SIZE,
  ABC_SIDEBAR_WIDTH_BY_SIZE,
  type AbcLayoutMode,
  type AbcLayoutSettings,
  type AbcTabStyle,
} from './types'

export interface ThemeCustomizerProps {
  open: boolean
  onClose: () => void
  layoutSettings: AbcLayoutSettings
  onLayoutChange: (patch: Partial<AbcLayoutSettings>) => void
  onResetAll?: () => void
}

const LAYOUT_MODE_CARDS: Array<{
  mode: AbcLayoutMode
  title: string
  desc: string
}> = [
  { mode: 'sidebar', title: '经典侧边栏', desc: '左侧树形导航 + 右侧工作区' },
  { mode: 'top', title: '顶部水平导航', desc: '全宽视野，含顶层子菜单' },
  { mode: 'mix', title: '混合分栏导航', desc: '顶栏一级域 + 侧栏子菜单' },
  { mode: 'dual-column', title: '双栏紧凑侧栏', desc: '窄主轨 + 二级菜单面板' },
  { mode: 'auth', title: '认证分屏页', desc: '登录 / SSO 品牌分屏模式' },
]

interface QuickScenePreset {
  id: string
  name: string
  badge: string
  swatch: string
  theme: Partial<AbcThemeConfig>
  layout: Partial<AbcLayoutSettings>
  transition: AbcPageTransition
}

const QUICK_SCENE_PRESETS: QuickScenePreset[] = [
  {
    id: 'enterprise',
    name: '标准企业工作台',
    badge: '默认推荐',
    swatch: '#2563eb',
    theme: {
      mode: 'light',
      brand: 'blue',
      customBrandColor: undefined,
      density: 'default',
      radius: 'md',
      fontScale: 'md',
      visualMode: 'default',
    },
    layout: {
      mode: 'sidebar',
      sidebarTone: 'dark',
      tabStyle: 'card',
      contentWidth: 'fluid',
      sidebarWidth: undefined,
      headerHeight: undefined,
      headerBlur: true,
    },
    transition: 'fade-slide',
  },
  {
    id: 'devops-dark',
    name: '高密运维监控台',
    badge: '高信息密度',
    swatch: '#4f46e5',
    theme: {
      mode: 'dark',
      brand: 'indigo',
      customBrandColor: undefined,
      density: 'compact',
      radius: 'sm',
      fontScale: 'sm',
      visualMode: 'default',
    },
    layout: {
      mode: 'dual-column',
      sidebarTone: 'dark',
      tabStyle: 'underline',
      contentWidth: 'fluid',
      headerHeight: 48,
      headerBlur: true,
    },
    transition: 'fade',
  },
  {
    id: 'analytics-top',
    name: '大屏数据驾驶舱',
    badge: '宽屏沉浸',
    swatch: '#059669',
    theme: {
      mode: 'light',
      brand: 'emerald',
      customBrandColor: undefined,
      density: 'comfortable',
      radius: 'lg',
      fontScale: 'md',
      visualMode: 'default',
    },
    layout: {
      mode: 'top',
      tabStyle: 'pill',
      contentWidth: 'fluid',
      headerHeight: 58,
      headerBlur: true,
    },
    transition: 'zoom',
  },
  {
    id: 'airy-violet',
    name: '极简通透白昼',
    badge: '柔和呼吸感',
    swatch: '#7c3aed',
    theme: {
      mode: 'light',
      brand: 'violet',
      customBrandColor: undefined,
      density: 'default',
      radius: 'lg',
      fontScale: 'md',
      visualMode: 'default',
    },
    layout: {
      mode: 'sidebar',
      sidebarTone: 'light',
      tabStyle: 'pill',
      contentWidth: 'fixed',
      sidebarWidth: 244,
      headerHeight: 56,
      headerBlur: true,
    },
    transition: 'slide-left',
  },
]

const TRANSITION_ANIM_MAP: Record<AbcPageTransition, string> = {
  'fade-slide': 'abc-page-fade-slide',
  fade: 'abc-page-fade',
  zoom: 'abc-page-zoom',
  'slide-left': 'abc-page-slide-left',
  none: '',
}

/**
 * 实时主题、微交互沙盒与多布局可视化定制中心 (ThemeCustomizer)
 * 支持一键场景预设、实时控件交互沙盒、自定义 HEX 品牌色阶合成、无级几何滑块、无障碍视觉滤镜及 JSON/JSX 双向流转
 */
export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  open,
  onClose,
  layoutSettings,
  onLayoutChange,
  onResetAll,
}) => {
  const {
    theme,
    pageTransition,
    watermarkEnabled,
    setThemeMode,
    setBrand,
    setCustomBrandColor,
    setDensity,
    setRadius,
    setFontScale,
    setVisualMode,
    setComponentSize,
    setMotion,
    updateTheme,
    setPageTransition,
    setWatermarkEnabled,
    resetTheme,
    toast,
  } = useAbcConfig()

  const [sandboxCount, setSandboxCount] = useState(1)
  const [sandboxSwitch, setSandboxSwitch] = useState(true)
  const [sandboxInput, setSandboxInput] = useState('实时 Token 响应预览')
  const [motionReplaySeed, setMotionReplaySeed] = useState(0)
  const [showImportPanel, setShowImportPanel] = useState(false)
  const [importJsonText, setImportJsonText] = useState('')
  const [customHexDraft, setCustomHexDraft] = useState(theme.customBrandColor ?? '#0ea5e9')

  const effectiveComponentSize: AbcSize = theme.componentSize ?? 'sm'
  const effectiveSidebarWidth =
    layoutSettings.sidebarWidth ?? ABC_SIDEBAR_WIDTH_BY_SIZE[effectiveComponentSize]
  const effectiveHeaderHeight =
    layoutSettings.headerHeight ?? ABC_HEADER_HEIGHT_BY_SIZE[effectiveComponentSize]

  const activeSwatch =
    theme.customBrandColor || ABC_BRAND_PRESETS[theme.brand]?.swatch || '#2563eb'

  const handleApplyPreset = (preset: QuickScenePreset, e: React.MouseEvent) => {
    if (preset.theme.mode && preset.theme.mode !== theme.mode) {
      setThemeMode(preset.theme.mode, { clientX: e.clientX, clientY: e.clientY })
    }
    updateTheme(preset.theme)
    onLayoutChange(preset.layout)
    setPageTransition(preset.transition)
    setMotionReplaySeed((s) => s + 1)
    toast.success(`已切换至「${preset.name}」场景预设`)
  }

  const handleCopyConfig = async () => {
    const payload = {
      theme,
      layout: layoutSettings,
      pageTransition,
      watermarkEnabled,
    }
    try {
      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2))
      toast.success('已复制完整设计系统与布局 JSON 配置')
    } catch {
      toast.error('复制失败')
    }
  }

  const handleCopyJsxCode = async () => {
    const themeLiteral = JSON.stringify(theme, null, 2)
    const layoutLiteral = JSON.stringify(layoutSettings, null, 2)
    const snippet = `<AbcProvider
  defaultTheme={${themeLiteral}}
  defaultPageTransition="${pageTransition}"
  defaultWatermarkEnabled={${watermarkEnabled}}
>
  <ProLayout
    defaultSettings={${layoutLiteral}}
    menuItems={menuItems}
    pathname={pathname}
    onNavigate={navigate}
  >
    {children}
  </ProLayout>
</AbcProvider>`
    try {
      await navigator.clipboard.writeText(snippet)
      toast.success('已复制 <AbcProvider> + <ProLayout> 工程接入代码')
    } catch {
      toast.error('复制代码失败')
    }
  }

  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(importJsonText)
      if (parsed.theme && typeof parsed.theme === 'object') {
        updateTheme(parsed.theme)
      }
      if (parsed.layout && typeof parsed.layout === 'object') {
        onLayoutChange(parsed.layout)
      }
      if (typeof parsed.pageTransition === 'string') {
        setPageTransition(parsed.pageTransition as AbcPageTransition)
      }
      if (typeof parsed.watermarkEnabled === 'boolean') {
        setWatermarkEnabled(parsed.watermarkEnabled)
      }
      setShowImportPanel(false)
      setImportJsonText('')
      toast.success('已成功导入并应用自定义配置')
    } catch {
      toast.error('JSON 格式解析失败，请检查粘贴内容')
    }
  }

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title="设计系统与布局实时定制"
      description="所有 Token、色阶、尺寸与过渡动画实时生效，支持一键预设切换与工程代码生成"
      width={440}
      footer={
        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Button
              variant="secondary"
              size="xs"
              icon={<RotateCcw className="h-3.5 w-3.5" />}
              onClick={() => {
                resetTheme()
                onResetAll?.()
                toast.info('已恢复默认主题与布局设置')
              }}
            >
              重置
            </Button>
            <Button
              variant="ghost"
              size="xs"
              icon={<Upload className="h-3.5 w-3.5" />}
              onClick={() => setShowImportPanel((v) => !v)}
            >
              导入 JSON
            </Button>
          </div>

          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="xs"
              icon={<Code2 className="h-3.5 w-3.5" />}
              onClick={handleCopyJsxCode}
            >
              复制 JSX
            </Button>
            <Button
              variant="primary"
              size="xs"
              icon={<Copy className="h-3.5 w-3.5" />}
              onClick={handleCopyConfig}
            >
              复制 JSON
            </Button>
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        {/* 可选展开的 JSON 导入面板 */}
        {showImportPanel && (
          <section className="space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in">
            <div className="flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]">
              <span>粘贴团队共享的 JSON 配置</span>
              <button
                type="button"
                onClick={() => setShowImportPanel(false)}
                className="text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                收起
              </button>
            </div>
            <Textarea
              rows={4}
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder='{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}'
              className="font-mono text-[11px]"
            />
            <div className="flex justify-end gap-2">
              <Button size="xs" variant="primary" onClick={handleImportJson}>
                立即应用配置
              </Button>
            </div>
          </section>
        )}

        {/* 0. 实时交互微沙盒预览区 */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
              <span>实时交互体验沙盒</span>
            </h3>
            <button
              type="button"
              onClick={() => setMotionReplaySeed((s) => s + 1)}
              className="inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer"
            >
              <Play className="h-3 w-3" />
              <span>重播过渡动效</span>
            </button>
          </div>

          <div
            key={motionReplaySeed}
            className={cn(
              'space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 p-3.5 shadow-[var(--abc-shadow-card)]',
              TRANSITION_ANIM_MAP[pageTransition]
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Button variant="primary" onClick={() => setSandboxCount((c) => c + 1)}>
                  按压回弹 #{sandboxCount}
                </Button>
                <Button variant="outline" onClick={() => setSandboxSwitch((v) => !v)}>
                  次级操作
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <StatusTag status={sandboxSwitch ? 'success' : 'warning'} dot>
                  {sandboxSwitch ? '服务在线' : '维护挂起'}
                </StatusTag>
                <Switch
                  checked={sandboxSwitch}
                  onChange={setSandboxSwitch}
                  ariaLabel="切换沙盒状态"
                />
              </div>
            </div>

            <Input
              allowClear
              value={sandboxInput}
              onChange={(e) => setSandboxInput(e.target.value)}
              placeholder="在此输入测试圆角、聚焦环与全局尺寸/动效..."
            />

            {/* 动态合成的 50-950 色阶条直观检视 */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]">
                <span>当前主色阶梯 (50 → 950)</span>
                <span className="font-mono uppercase">{activeSwatch}</span>
              </div>
              <div className="grid grid-cols-11 overflow-hidden rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)]">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((stop) => (
                  <span
                    key={stop}
                    title={`--abc-brand-${stop}`}
                    className="h-3.5"
                    style={{ backgroundColor: `var(--abc-brand-${stop})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 1. 一键工作台场景预设 */}
        <section className="space-y-2.5">
          <h3 className="text-xs font-bold text-[var(--abc-fg)]">1. 一键场景风格预设</h3>
          <div className="grid grid-cols-2 gap-2">
            {QUICK_SCENE_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={(e) => handleApplyPreset(preset, e)}
                className="group flex flex-col items-start gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2.5 text-left transition-all hover:border-[var(--abc-primary)] hover:shadow-2xs motion-safe:active:scale-[0.98] cursor-pointer"
              >
                <div className="flex w-full items-center justify-between gap-1.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: preset.swatch }}
                    />
                    <span className="truncate">{preset.name}</span>
                  </span>
                </div>
                <span className="rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.2 text-[10px] text-[var(--abc-fg-muted)]">
                  {preset.badge}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* 2. 布局拓扑模式 */}
        <section className="space-y-2.5 border-t border-[var(--abc-border)] pt-4">
          <h3 className="text-xs font-bold text-[var(--abc-fg)]">2. 导航布局模式 (5 种企业拓扑)</h3>
          <div className="grid grid-cols-2 gap-2.5">
            {LAYOUT_MODE_CARDS.map((item) => {
              const selected = layoutSettings.mode === item.mode
              return (
                <button
                  key={item.mode}
                  type="button"
                  onClick={() => onLayoutChange({ mode: item.mode })}
                  className={cn(
                    'flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer',
                    selected
                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]'
                  )}
                >
                  {/* 微缩布局结构示意框 */}
                  <div className="flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]">
                    {item.mode === 'sidebar' && (
                      <>
                        <span className="h-full w-4 bg-slate-800" />
                        <span className="flex flex-1 flex-col">
                          <span className="h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" />
                        </span>
                      </>
                    )}
                    {item.mode === 'top' && (
                      <span className="flex w-full flex-col">
                        <span className="h-3 w-full bg-slate-800" />
                      </span>
                    )}
                    {item.mode === 'mix' && (
                      <span className="flex w-full flex-col">
                        <span className="h-2.5 w-full bg-slate-800" />
                        <span className="flex flex-1">
                          <span className="h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" />
                        </span>
                      </span>
                    )}
                    {item.mode === 'dual-column' && (
                      <>
                        <span className="h-full w-2.5 bg-slate-900" />
                        <span className="h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" />
                      </>
                    )}
                    {item.mode === 'auth' && (
                      <>
                        <span className="h-full w-1/2 bg-slate-900" />
                        <span className="flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]">
                          <span className="h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" />
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--abc-fg)]">{item.title}</span>
                    {selected && <Check className="h-3.5 w-3.5 text-[var(--abc-primary)]" />}
                  </div>
                  <span className="text-[10px] text-[var(--abc-fg-muted)]">{item.desc}</span>
                </button>
              )
            })}
          </div>
        </section>

        {/* 3. 明暗外观与品牌色彩系统 */}
        <section className="space-y-3 border-t border-[var(--abc-border)] pt-4">
          <h3 className="text-xs font-bold text-[var(--abc-fg)]">3. 明暗外观与动态品牌色引擎</h3>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">色彩模式</span>
            <RadioGroup
              variant="segmented"
              value={theme.mode}
              onChange={(val) => setThemeMode(val as AbcThemeMode)}
              options={[
                {
                  value: 'light',
                  label: (
                    <span className="inline-flex items-center gap-1">
                      <Sun className="h-3 w-3" /> 亮色
                    </span>
                  ),
                },
                {
                  value: 'dark',
                  label: (
                    <span className="inline-flex items-center gap-1">
                      <Moon className="h-3 w-3" /> 暗黑
                    </span>
                  ),
                },
                {
                  value: 'system',
                  label: (
                    <span className="inline-flex items-center gap-1">
                      <Monitor className="h-3 w-3" /> 系统
                    </span>
                  ),
                },
              ]}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">侧边栏视觉色调</span>
            <RadioGroup
              variant="segmented"
              value={layoutSettings.sidebarTone}
              onChange={(val) => onLayoutChange({ sidebarTone: val as 'dark' | 'light' })}
              options={[
                { value: 'dark', label: '经典深色' },
                { value: 'light', label: '通透浅色' },
              ]}
            />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1">
            {(Object.keys(ABC_BRAND_PRESETS) as AbcBrandColor[]).map((brandKey) => {
              const item = ABC_BRAND_PRESETS[brandKey]
              const active = !theme.customBrandColor && theme.brand === brandKey
              return (
                <button
                  key={brandKey}
                  type="button"
                  onClick={() => setBrand(brandKey)}
                  className={cn(
                    'flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer',
                    active
                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]'
                  )}
                >
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full"
                    style={{ backgroundColor: item.swatch }}
                  />
                  <span className="truncate">{item.label.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>

          {/* 任意自定义品牌色取色器 */}
          <div className="flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-2">
            <div className="flex items-center gap-2">
              <Palette className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
              <span className="text-xs font-medium text-[var(--abc-fg-secondary)]">
                自定义品牌 HEX
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <input
                type="color"
                aria-label="拾取自定义品牌色"
                value={theme.customBrandColor || customHexDraft}
                onChange={(e) => {
                  const hex = e.target.value
                  setCustomHexDraft(hex)
                  setCustomBrandColor(hex)
                }}
                className="h-6 w-7 cursor-pointer rounded border-0 bg-transparent p-0"
              />
              <input
                type="text"
                maxLength={7}
                value={theme.customBrandColor ?? customHexDraft}
                onChange={(e) => {
                  const val = e.target.value
                  setCustomHexDraft(val)
                  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
                    setCustomBrandColor(val)
                  }
                }}
                className="w-20 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 font-mono text-xs uppercase text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
              />
              {theme.customBrandColor && (
                <button
                  type="button"
                  onClick={() => setCustomBrandColor(undefined)}
                  className="text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer"
                >
                  清除
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 4. 控件密度、圆角与字号比例 */}
        <section className="space-y-3 border-t border-[var(--abc-border)] pt-4">
          <h3 className="text-xs font-bold text-[var(--abc-fg)]">4. 密度、圆角与排版规格</h3>
          <div className="space-y-1.5">
            <span className="text-xs text-[var(--abc-fg-muted)]">表单与按钮高度密度</span>
            <RadioGroup
              variant="segmented"
              value={theme.density}
              onChange={(val) => setDensity(val as AbcDensity)}
              options={(Object.keys(ABC_DENSITY_PRESETS) as AbcDensity[]).map((k) => ({
                value: k,
                label: ABC_DENSITY_PRESETS[k].label,
              }))}
              className="w-full justify-between"
            />
          </div>

          <div className="space-y-1.5">
            <span className="text-xs text-[var(--abc-fg-muted)]">全局控件与卡片圆角</span>
            <RadioGroup
              variant="segmented"
              value={theme.radius}
              onChange={(val) => setRadius(val as AbcRadius)}
              options={(Object.keys(ABC_RADIUS_PRESETS) as AbcRadius[]).map((k) => ({
                value: k,
                label: ABC_RADIUS_PRESETS[k].label.split(' ')[0],
              }))}
              className="w-full justify-between"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">全局字号缩放比例</span>
            <RadioGroup
              variant="segmented"
              value={theme.fontScale ?? 'md'}
              onChange={(val) => setFontScale(val as AbcFontScale)}
              options={[
                { value: 'sm', label: '紧凑 94%' },
                { value: 'md', label: '标准 100%' },
                { value: 'lg', label: '舒适 106%' },
              ]}
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--abc-fg-muted)]">全局组件与导航尺寸</span>
              <span className="font-mono text-[10px] text-[var(--abc-fg-muted)]">
                {theme.componentSize ?? '自动 (随组件)'}
              </span>
            </div>
            <RadioGroup
              variant="segmented"
              value={theme.componentSize ?? 'auto'}
              onChange={(val) =>
                setComponentSize(val === 'auto' ? undefined : (val as AbcSize))
              }
              options={[
                { value: 'auto', label: '自动' },
                { value: 'xs', label: 'xs' },
                { value: 'sm', label: 'sm' },
                { value: 'md', label: 'md' },
                { value: 'lg', label: 'lg' },
              ]}
              className="w-full justify-between"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--abc-fg-muted)]">全局组件微交互动效</span>
              <span className="font-mono text-[10px] text-[var(--abc-primary)]">
                {ABC_MOTION_PRESETS[theme.motion ?? 'smooth'].durationBase}
              </span>
            </div>
            <RadioGroup
              variant="segmented"
              value={theme.motion ?? 'smooth'}
              onChange={(val) => {
                setMotion(val as AbcMotionPreset)
                setMotionReplaySeed((s) => s + 1)
              }}
              options={(Object.keys(ABC_MOTION_PRESETS) as AbcMotionPreset[]).map((m) => ({
                value: m,
                label: ABC_MOTION_PRESETS[m].label.slice(0, 2),
              }))}
              className="w-full justify-between"
            />
            <p className="text-[10px] text-[var(--abc-fg-muted)]">
              {ABC_MOTION_PRESETS[theme.motion ?? 'smooth'].label}：
              {ABC_MOTION_PRESETS[theme.motion ?? 'smooth'].description}
            </p>
          </div>
        </section>

        {/* 5. 壳层几何尺寸与页签交互 */}
        <section className="space-y-3 border-t border-[var(--abc-border)] pt-4">
          <h3 className="text-xs font-bold text-[var(--abc-fg)]">5. 壳层几何尺寸与页签风格</h3>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[var(--abc-fg-secondary)]">侧边栏展开宽度</span>
              <div className="flex items-center gap-2">
                {layoutSettings.sidebarWidth !== undefined && (
                  <button
                    type="button"
                    onClick={() => onLayoutChange({ sidebarWidth: undefined })}
                    className="rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer"
                  >
                    跟随尺寸
                  </button>
                )}
                <span className="font-mono text-[11px] font-semibold text-[var(--abc-primary)]">
                  {effectiveSidebarWidth}px
                </span>
              </div>
            </div>
            <input
              type="range"
              min={196}
              max={288}
              step={4}
              value={effectiveSidebarWidth}
              onChange={(e) => onLayoutChange({ sidebarWidth: Number(e.target.value) })}
              className="w-full cursor-pointer accent-[var(--abc-primary)]"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[var(--abc-fg-secondary)]">顶部导航栏高度</span>
              <div className="flex items-center gap-2">
                {layoutSettings.headerHeight !== undefined && (
                  <button
                    type="button"
                    onClick={() => onLayoutChange({ headerHeight: undefined })}
                    className="rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer"
                  >
                    跟随尺寸
                  </button>
                )}
                <span className="font-mono text-[11px] font-semibold text-[var(--abc-primary)]">
                  {effectiveHeaderHeight}px
                </span>
              </div>
            </div>
            <input
              type="range"
              min={46}
              max={66}
              step={2}
              value={effectiveHeaderHeight}
              onChange={(e) => onLayoutChange({ headerHeight: Number(e.target.value) })}
              className="w-full cursor-pointer accent-[var(--abc-primary)]"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">多页签视觉形态</span>
            <RadioGroup
              variant="segmented"
              value={layoutSettings.tabStyle ?? 'card'}
              onChange={(v) => onLayoutChange({ tabStyle: v as AbcTabStyle })}
              options={[
                { value: 'card', label: '卡片式' },
                { value: 'pill', label: '胶囊式' },
                { value: 'underline', label: '下划线' },
              ]}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">显示多页签栏 (MultiTabBar)</span>
            <Switch
              checked={layoutSettings.showTabs}
              onChange={(v) => onLayoutChange({ showTabs: v })}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">开启多页签 DOM 保活 (KeepAlive)</span>
            <Switch
              checked={layoutSettings.keepAlive}
              onChange={(v) => onLayoutChange({ keepAlive: v })}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">顶栏毛玻璃半透明模糊</span>
            <Switch
              checked={layoutSettings.headerBlur !== false}
              onChange={(v) => onLayoutChange({ headerBlur: v })}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">顶栏显示面包屑路径</span>
            <Switch
              checked={layoutSettings.showBreadcrumb !== false}
              onChange={(v) => onLayoutChange({ showBreadcrumb: v })}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">侧边栏手风琴互斥展开</span>
            <Switch
              checked={layoutSettings.sidebarAccordion}
              onChange={(v) => onLayoutChange({ sidebarAccordion: v })}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">显示底部版权页脚</span>
            <Switch
              checked={Boolean(layoutSettings.showFooter)}
              onChange={(v) => onLayoutChange({ showFooter: v })}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">防篡改全局安全水印</span>
            <Switch
              checked={watermarkEnabled}
              onChange={(v) => setWatermarkEnabled(v)}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--abc-fg-secondary)]">内容区域宽度策略</span>
            <RadioGroup
              variant="segmented"
              value={layoutSettings.contentWidth}
              onChange={(v) => onLayoutChange({ contentWidth: v as 'fluid' | 'fixed' })}
              options={[
                { value: 'fluid', label: '流式铺满' },
                { value: 'fixed', label: '定宽居中' },
              ]}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="shrink-0 text-xs text-[var(--abc-fg-secondary)]">页面切换动效</span>
            <Select
              size="xs"
              className="w-44"
              value={pageTransition}
              onChange={(v) => {
                setPageTransition(v as AbcPageTransition)
                setMotionReplaySeed((s) => s + 1)
              }}
              options={[
                { value: 'fade-slide', label: '平滑微滑 (推荐)' },
                { value: 'fade', label: '极简淡入' },
                { value: 'zoom', label: '沉浸缩放' },
                { value: 'slide-left', label: '横向滑入' },
                { value: 'none', label: '关闭动效' },
              ]}
            />
          </div>
        </section>

        {/* 6. 无障碍视觉辅助模式 */}
        <section className="space-y-2.5 border-t border-[var(--abc-border)] pt-4">
          <h3 className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]">
            <Eye className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
            <span>6. 视觉辅助与特殊色彩滤镜</span>
          </h3>
          <RadioGroup
            variant="segmented"
            value={theme.visualMode ?? 'default'}
            onChange={(v) => setVisualMode(v as AbcVisualMode)}
            options={[
              { value: 'default', label: '标准原色' },
              { value: 'color-weak', label: '色弱增强' },
              { value: 'gray', label: '全站灰阶' },
            ]}
            className="w-full justify-between"
          />
        </section>
      </div>
    </Drawer>
  )
}

export default ThemeCustomizer
