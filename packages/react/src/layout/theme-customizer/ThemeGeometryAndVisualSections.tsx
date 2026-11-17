import React from 'react'
import {
  ABC_DENSITY_PRESETS,
  ABC_MOTION_PRESETS,
  ABC_RADIUS_PRESETS,
  type AbcDensity,
  type AbcFontScale,
  type AbcMotionPreset,
  type AbcPageTransition,
  type AbcRadius,
  type AbcSize,
  type AbcThemeConfig,
  type AbcVisualMode,
} from '@abc-design/tokens'
import { Eye } from 'lucide-react'
import { RadioGroup, Switch } from '../../components/form/Controls'
import { Select } from '../../components/form/Select'
import type { AbcLayoutSettings, AbcTabStyle } from '../types'

export interface ThemeGeometryAndVisualSectionsProps {
  theme: AbcThemeConfig
  layoutSettings: AbcLayoutSettings
  pageTransition: AbcPageTransition
  watermarkEnabled: boolean
  effectiveSidebarWidth: number
  effectiveHeaderHeight: number
  onLayoutChange: (patch: Partial<AbcLayoutSettings>) => void
  onSetDensity: (density: AbcDensity) => void
  onSetRadius: (radius: AbcRadius) => void
  onSetFontScale: (fontScale: AbcFontScale) => void
  onSetComponentSize: (size: AbcSize | undefined) => void
  onSetMotion: (motion: AbcMotionPreset) => void
  onSetPageTransition: (transition: AbcPageTransition) => void
  onSetWatermarkEnabled: (enabled: boolean) => void
  onSetVisualMode: (mode: AbcVisualMode) => void
  onReplayMotion: () => void
}

/** 主题定制器：4. 密度与圆角排版 + 5. 壳层几何尺寸与页签风格 + 6. 视觉辅助模式 */
export const ThemeGeometryAndVisualSections: React.FC<ThemeGeometryAndVisualSectionsProps> = ({
  theme,
  layoutSettings,
  pageTransition,
  watermarkEnabled,
  effectiveSidebarWidth,
  effectiveHeaderHeight,
  onLayoutChange,
  onSetDensity,
  onSetRadius,
  onSetFontScale,
  onSetComponentSize,
  onSetMotion,
  onSetPageTransition,
  onSetWatermarkEnabled,
  onSetVisualMode,
  onReplayMotion,
}) => {
  return (
    <>
      {/* 4. 控件密度、圆角与字号比例 */}
      <section className="space-y-3 border-t border-[var(--abc-border)] pt-4">
        <h3 className="text-xs font-bold text-[var(--abc-fg)]">4. 密度、圆角与排版规格</h3>
        <div className="space-y-1.5">
          <span className="text-xs text-[var(--abc-fg-muted)]">表单与按钮高度密度</span>
          <RadioGroup
            variant="segmented"
            value={theme.density}
            onChange={(val) => onSetDensity(val as AbcDensity)}
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
            onChange={(val) => onSetRadius(val as AbcRadius)}
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
            onChange={(val) => onSetFontScale(val as AbcFontScale)}
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
              onSetComponentSize(val === 'auto' ? undefined : (val as AbcSize))
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
              onSetMotion(val as AbcMotionPreset)
              onReplayMotion()
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
            onChange={(v) => onSetWatermarkEnabled(v)}
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
              onSetPageTransition(v as AbcPageTransition)
              onReplayMotion()
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
          onChange={(v) => onSetVisualMode(v as AbcVisualMode)}
          options={[
            { value: 'default', label: '标准原色' },
            { value: 'color-weak', label: '色弱增强' },
            { value: 'gray', label: '全站灰阶' },
          ]}
          className="w-full justify-between"
        />
      </section>
    </>
  )
}
