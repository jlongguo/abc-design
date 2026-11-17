import React from 'react'
import { ABC_BRAND_PRESETS, type AbcBrandColor, type AbcThemeConfig, type AbcThemeMode } from '@abc-design/tokens'
import { Check, Monitor, Moon, Palette, Sun } from 'lucide-react'
import { RadioGroup } from '../../components/form/Controls'
import { cn } from '../../utils/cn'
import type { AbcLayoutSettings } from '../types'
import { LAYOUT_MODE_CARDS, QUICK_SCENE_PRESETS, type QuickScenePreset } from './presets'

export interface ThemeColorAndPresetSectionsProps {
  theme: AbcThemeConfig
  layoutSettings: AbcLayoutSettings
  customHexDraft: string
  onCustomHexDraftChange: (hex: string) => void
  onApplyPreset: (preset: QuickScenePreset, e: React.MouseEvent) => void
  onLayoutChange: (patch: Partial<AbcLayoutSettings>) => void
  onSetThemeMode: (mode: AbcThemeMode) => void
  onSetBrand: (brand: AbcBrandColor) => void
  onSetCustomBrandColor: (hex: string | undefined) => void
}

/** 主题定制器：1. 一键场景预设 + 2. 导航布局拓扑 + 3. 明暗外观与动态品牌色引擎 */
export const ThemeColorAndPresetSections: React.FC<ThemeColorAndPresetSectionsProps> = ({
  theme,
  layoutSettings,
  customHexDraft,
  onCustomHexDraftChange,
  onApplyPreset,
  onLayoutChange,
  onSetThemeMode,
  onSetBrand,
  onSetCustomBrandColor,
}) => {
  return (
    <>
      {/* 1. 一键工作台场景预设 */}
      <section className="space-y-2.5">
        <h3 className="text-xs font-bold text-[var(--abc-fg)]">1. 一键场景风格预设</h3>
        <div className="grid grid-cols-2 gap-2">
          {QUICK_SCENE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={(e) => onApplyPreset(preset, e)}
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
            onChange={(val) => onSetThemeMode(val as AbcThemeMode)}
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
                onClick={() => onSetBrand(brandKey)}
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
                onCustomHexDraftChange(hex)
                onSetCustomBrandColor(hex)
              }}
              className="h-6 w-7 cursor-pointer rounded border-0 bg-transparent p-0"
            />
            <input
              type="text"
              maxLength={7}
              value={theme.customBrandColor ?? customHexDraft}
              onChange={(e) => {
                const val = e.target.value
                onCustomHexDraftChange(val)
                if (/^#[0-9a-fA-F]{6}$/.test(val)) {
                  onSetCustomBrandColor(val)
                }
              }}
              className="w-20 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 font-mono text-xs uppercase text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
            />
            {theme.customBrandColor && (
              <button
                type="button"
                onClick={() => onSetCustomBrandColor(undefined)}
                className="text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer"
              >
                清除
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
