import React from 'react'
import type { AbcPageTransition } from '@abc-design/tokens'
import { Play, Sparkles } from 'lucide-react'
import Button from '../../components/button/Button'
import { StatusTag } from '../../components/display/StatusTag'
import { Switch } from '../../components/form/Controls'
import { Input, Textarea } from '../../components/form/Input'
import { cn } from '../../utils/cn'
import { TRANSITION_ANIM_MAP } from './presets'

export interface ThemeSandboxSectionProps {
  showImportPanel: boolean
  onCloseImportPanel: () => void
  importJsonText: string
  onImportJsonTextChange: (text: string) => void
  onImportJson: () => void
  sandboxCount: number
  onIncrementSandboxCount: () => void
  sandboxSwitch: boolean
  onToggleSandboxSwitch: (next?: boolean) => void
  sandboxInput: string
  onSandboxInputChange: (val: string) => void
  motionReplaySeed: number
  onReplayMotion: () => void
  pageTransition: AbcPageTransition
  activeSwatch: string
}

/** 实时交互微沙盒预览区与 JSON 导入面板 */
export const ThemeSandboxSection: React.FC<ThemeSandboxSectionProps> = ({
  showImportPanel,
  onCloseImportPanel,
  importJsonText,
  onImportJsonTextChange,
  onImportJson,
  sandboxCount,
  onIncrementSandboxCount,
  sandboxSwitch,
  onToggleSandboxSwitch,
  sandboxInput,
  onSandboxInputChange,
  motionReplaySeed,
  onReplayMotion,
  pageTransition,
  activeSwatch,
}) => {
  return (
    <>
      {/* 可选展开的 JSON 导入面板 */}
      {showImportPanel && (
        <section className="space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in">
          <div className="flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]">
            <span>粘贴团队共享的 JSON 配置</span>
            <button
              type="button"
              onClick={onCloseImportPanel}
              className="text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer"
            >
              收起
            </button>
          </div>
          <Textarea
            rows={4}
            value={importJsonText}
            onChange={(e) => onImportJsonTextChange(e.target.value)}
            placeholder='{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}'
            className="font-mono text-[11px]"
          />
          <div className="flex justify-end gap-2">
            <Button size="xs" variant="primary" onClick={onImportJson}>
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
            onClick={onReplayMotion}
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
              <Button variant="primary" onClick={onIncrementSandboxCount}>
                按压回弹 #{sandboxCount}
              </Button>
              <Button variant="outline" onClick={() => onToggleSandboxSwitch()}>
                次级操作
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <StatusTag status={sandboxSwitch ? 'success' : 'warning'} dot>
                {sandboxSwitch ? '服务在线' : '维护挂起'}
              </StatusTag>
              <Switch
                checked={sandboxSwitch}
                onChange={(checked) => onToggleSandboxSwitch(checked)}
                ariaLabel="切换沙盒状态"
              />
            </div>
          </div>

          <Input
            allowClear
            value={sandboxInput}
            onChange={(e) => onSandboxInputChange(e.target.value)}
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
    </>
  )
}
