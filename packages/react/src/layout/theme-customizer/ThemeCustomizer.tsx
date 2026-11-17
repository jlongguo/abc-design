import React, { useState } from 'react'
import { ABC_BRAND_PRESETS, type AbcPageTransition, type AbcSize } from '@abc-design/tokens'
import { Code2, Copy, RotateCcw, Upload } from 'lucide-react'
import Button from '../../components/button/Button'
import Drawer from '../../components/feedback/Drawer'
import { useAbcConfig } from '../../provider/AbcProvider'
import { ABC_HEADER_HEIGHT_BY_SIZE, ABC_SIDEBAR_WIDTH_BY_SIZE } from '../types'
import { type QuickScenePreset, type ThemeCustomizerProps } from './presets'
import { ThemeColorAndPresetSections } from './ThemeColorAndPresetSections'
import { ThemeGeometryAndVisualSections } from './ThemeGeometryAndVisualSections'
import { ThemeSandboxSection } from './ThemeSandboxSection'

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
        <ThemeSandboxSection
          showImportPanel={showImportPanel}
          onCloseImportPanel={() => setShowImportPanel(false)}
          importJsonText={importJsonText}
          onImportJsonTextChange={setImportJsonText}
          onImportJson={handleImportJson}
          sandboxCount={sandboxCount}
          onIncrementSandboxCount={() => setSandboxCount((c) => c + 1)}
          sandboxSwitch={sandboxSwitch}
          onToggleSandboxSwitch={(next) =>
            setSandboxSwitch((prev) => (typeof next === 'boolean' ? next : !prev))
          }
          sandboxInput={sandboxInput}
          onSandboxInputChange={setSandboxInput}
          motionReplaySeed={motionReplaySeed}
          onReplayMotion={() => setMotionReplaySeed((s) => s + 1)}
          pageTransition={pageTransition}
          activeSwatch={activeSwatch}
        />

        <ThemeColorAndPresetSections
          theme={theme}
          layoutSettings={layoutSettings}
          customHexDraft={customHexDraft}
          onCustomHexDraftChange={setCustomHexDraft}
          onApplyPreset={handleApplyPreset}
          onLayoutChange={onLayoutChange}
          onSetThemeMode={(mode) => setThemeMode(mode)}
          onSetBrand={setBrand}
          onSetCustomBrandColor={setCustomBrandColor}
        />

        <ThemeGeometryAndVisualSections
          theme={theme}
          layoutSettings={layoutSettings}
          pageTransition={pageTransition}
          watermarkEnabled={watermarkEnabled}
          effectiveSidebarWidth={effectiveSidebarWidth}
          effectiveHeaderHeight={effectiveHeaderHeight}
          onLayoutChange={onLayoutChange}
          onSetDensity={setDensity}
          onSetRadius={setRadius}
          onSetFontScale={setFontScale}
          onSetComponentSize={setComponentSize}
          onSetMotion={setMotion}
          onSetPageTransition={setPageTransition}
          onSetWatermarkEnabled={setWatermarkEnabled}
          onSetVisualMode={setVisualMode}
          onReplayMotion={() => setMotionReplaySeed((s) => s + 1)}
        />
      </div>
    </Drawer>
  )
}

export default ThemeCustomizer
