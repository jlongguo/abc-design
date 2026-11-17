import React, { useState } from 'react'
import {
  BrandIcon,
  Icon,
  LocaleSwitcher,
  PageContainer,
  SemanticIcon,
  StatusTag,
  ThemeSwitcher,
  useColorScheme,
  type BrandIconPreset,
} from '@abc-design/react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSelect, KnobSwitch, KnobText } from '../../components/PropKnobs'

const VECTOR_LOGO_A = `<svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="16" fill="#2563eb"/><path d="M18 44L32 16L46 44H38.5L32 30L25.5 44H18Z" fill="#ffffff"/></svg>`
const VECTOR_MASK_GLYPH = `<svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 6L56 18V46L32 58L8 46V18L32 6ZM32 18L20 24V40L32 46L44 40V24L32 18Z" fill="#000000"/></svg>`

function buildBrandPresets(maskColorClass: string): Record<string, BrandIconPreset> {
  return {
    bytesflows: {
      mode: 'image',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(VECTOR_LOGO_A)}`,
      alt: 'BytesFlows',
    },
    ipapex: {
      mode: 'mask',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(VECTOR_MASK_GLYPH)}`,
      maskClassName: maskColorClass,
    },
    'broken-cdn': {
      mode: 'image',
      src: 'https://invalid.abc-design.local/non-existent-logo.png',
      alt: 'Broken CDN Logo',
    },
  }
}

export const IconsThemeAndLocalePage: React.FC = () => {
  // 1. Icon & SemanticIcon Knobs
  const [iconName, setIconName] = useState<string>('shield')
  const [semanticText, setSemanticText] = useState('财务提现审计')
  const [semanticToken, setSemanticToken] = useState<string>('vault_fill')
  const [iconSize, setIconSize] = useState(20)
  const [strokeWidthStr, setStrokeWidthStr] = useState<'1.5' | '2' | '2.5'>('2')

  // 2. BrandIcon Knobs
  const [brandCode, setBrandCode] = useState<string>('ipapex')
  const [brandSizeClass, setBrandSizeClass] = useState<'h-5 w-5' | 'h-7 w-7' | 'h-10 w-10'>('h-7 w-7')
  const [maskColorClass, setMaskColorClass] = useState<string>('bg-[var(--abc-primary)]')

  // 3. ThemeSwitcher / LocaleSwitcher / useColorScheme Knobs
  const [switcherMode, setSwitcherMode] = useState<'toggle' | 'segmented'>('segmented')
  const [darkSurface, setDarkSurface] = useState(false)
  const [demoLocale, setDemoLocale] = useState<'zh' | 'en'>('zh')
  const { preference, resolvedScheme, systemScheme } = useColorScheme()

  const strokeNum = Number(strokeWidthStr)
  const presets = buildBrandPresets(maskColorClass)

  return (
    <PageContainer
      title="图标引擎、主题与多语言"
      subtitle="按需具名导入的 Lucide 图标与中文菜单词语义推导、工作流 SemanticIcon、多租户 BrandIcon，以及无闪烁的主题与双语切换原语。"
    >
      <div className="space-y-5">
        {/* 卡片 1: Icon & SemanticIcon */}
        <ComponentDocPreview
          title="Icon & SemanticIcon 具名图标与语义推理引擎"
          components={['Icon', 'SemanticIcon']}
          description="Icon 兼容现代 Lucide 名称、语义短名、Element UI (el-icon-*) 历史别名及中文菜单关键字自动推导；SemanticIcon 专为浏览器工作流动作 Token 提供一致矢量图标。"
          controls={
            <>
              <KnobSelect
                label="Icon.name"
                value={iconName}
                onChange={setIconName}
                widthClass="w-40"
                options={[
                  { label: 'shield', value: 'shield' },
                  { label: 'cpu', value: 'cpu' },
                  { label: 'el-icon-s-custom', value: 'el-icon-s-custom' },
                  { label: 'el-icon-s-tools', value: 'el-icon-s-tools' },
                ]}
              />
              <KnobText label="Icon.text" value={semanticText} onChange={setSemanticText} widthClass="w-36" />
              <KnobSelect
                label="SemanticIcon.token"
                value={semanticToken}
                onChange={setSemanticToken}
                widthClass="w-44"
                options={[
                  { label: 'trigger', value: 'trigger' },
                  { label: 'network', value: 'network' },
                  { label: 'vault_fill', value: 'vault_fill' },
                  { label: 'screenshot', value: 'screenshot' },
                  { label: 'capture_page_bundle', value: 'capture_page_bundle' },
                  { label: 'extract_table', value: 'extract_table' },
                ]}
              />
              <KnobNumber label="size" value={iconSize} onChange={setIconSize} min={14} max={28} step={2} />
              <KnobSegmented
                label="strokeWidth"
                value={strokeWidthStr}
                onChange={setStrokeWidthStr}
                options={[
                  { label: '1.5', value: '1.5' },
                  { label: '2', value: '2' },
                  { label: '2.5', value: '2.5' },
                ]}
              />
            </>
          }
          onResetKnobs={() => {
            setIconName('shield')
            setSemanticText('财务提现审计')
            setSemanticToken('vault_fill')
            setIconSize(20)
            setStrokeWidthStr('2')
          }}
          code={`import { Icon, SemanticIcon } from '@abc-design/react'

<Icon name="${iconName}" size={${iconSize}} strokeWidth={${strokeNum}} />
<Icon text="${semanticText}" size={${iconSize}} strokeWidth={${strokeNum}} />
<SemanticIcon token="${semanticToken}" size={${iconSize}} strokeWidth={${strokeNum}} />`}
          apiRows={[
            { prop: 'Icon.name', type: 'string', description: 'Lucide 图标名、语义短名或 el-icon-* 兼容别名' },
            { prop: 'Icon.text', type: 'string', description: '未指定固定图标时，依据中文业务关键词自动推导最佳图标' },
            { prop: 'SemanticIcon.token', type: 'string', description: '工作流步骤动作或语义标识（如 vault_fill / capture_page_bundle）' },
            { prop: 'size / strokeWidth', type: 'number', defaultValue: '16/14 · 1.85/1.9', description: '统一控制矢量 SVG 的尺寸及描边粗细' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-xs">
            <div className="flex items-center gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-primary)]">
                <Icon name={iconName} size={iconSize} strokeWidth={strokeNum} />
              </div>
              <div>
                <div className="font-semibold text-[var(--abc-fg)]">按 name 精确解析</div>
                <code className="font-mono text-[11px] text-[var(--abc-fg-muted)]">{iconName}</code>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-emerald-600 dark:text-emerald-400">
                <Icon text={semanticText} size={iconSize} strokeWidth={strokeNum} />
              </div>
              <div>
                <div className="font-semibold text-[var(--abc-fg)]">中文语义智能推断</div>
                <div className="text-[11px] text-[var(--abc-fg-muted)]">输入：{semanticText || '(空)'}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-primary)]">
                <SemanticIcon token={semanticToken} size={iconSize} strokeWidth={strokeNum} />
              </div>
              <div>
                <div className="font-semibold text-[var(--abc-fg)]">工作流 SemanticIcon</div>
                <code className="font-mono text-[11px] text-[var(--abc-fg-muted)]">{semanticToken}</code>
              </div>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2: BrandIcon */}
        <ComponentDocPreview
          title="BrandIcon 多租户品牌前缀图标"
          components={['BrandIcon', 'TenantIcon']}
          description="支持 image 常规图片（onError 自动降级且切换 code 自动复位状态）与 CSS mask-image 矢量蒙版动态着色，未命中预设时自动渲染兜底建筑图标。"
          controls={
            <>
              <KnobSelect
                label="code"
                value={brandCode}
                onChange={setBrandCode}
                widthClass="w-44"
                options={[
                  { label: 'ipapex (mask 着色)', value: 'ipapex' },
                  { label: 'bytesflows (image 原色)', value: 'bytesflows' },
                  { label: 'broken-cdn (断链降级)', value: 'broken-cdn' },
                  { label: 'unknown-tenant (默认兜底)', value: 'unknown-tenant' },
                ]}
              />
              <KnobSegmented
                label="className"
                value={brandSizeClass}
                onChange={setBrandSizeClass}
                options={[
                  { label: '20px', value: 'h-5 w-5' },
                  { label: '28px', value: 'h-7 w-7' },
                  { label: '40px', value: 'h-10 w-10' },
                ]}
              />
              <KnobSelect
                label="maskClassName"
                value={maskColorClass}
                onChange={setMaskColorClass}
                widthClass="w-44"
                options={[
                  { label: '跟随主题 (--abc-primary)', value: 'bg-[var(--abc-primary)]' },
                  { label: '翡翠绿 (emerald-500)', value: 'bg-emerald-500' },
                  { label: '琥珀金 (amber-500)', value: 'bg-amber-500' },
                  { label: '绯红 (rose-500)', value: 'bg-rose-500' },
                ]}
              />
            </>
          }
          onResetKnobs={() => {
            setBrandCode('ipapex')
            setBrandSizeClass('h-7 w-7')
            setMaskColorClass('bg-[var(--abc-primary)]')
          }}
          code={`import { BrandIcon, type BrandIconPreset } from '@abc-design/react'

const PRESETS: Record<string, BrandIconPreset> = {
  bytesflows: { mode: 'image', src: '/logos/bytesflows.svg' },
  ipapex: { mode: 'mask', src: '/logos/ipapex.svg', maskClassName: '${maskColorClass}' },
  'broken-cdn': { mode: 'image', src: 'https://invalid.local/404.png' },
}

<BrandIcon code="${brandCode}" presets={PRESETS} className="${brandSizeClass}" />`}
          apiRows={[
            { prop: 'code / tenantCode', type: 'string', description: '品牌或租户编码（大小写不敏感匹配 presets）' },
            { prop: 'presets', type: 'Record<string, BrandIconPreset>', description: '多租户图标预设配置映射表（image / mask 模式）' },
            { prop: 'maskClassName', type: 'string', defaultValue: "'bg-[var(--abc-primary)]'", description: 'mask 模式下注入矢量蒙版的 Tailwind 着色类' },
            { prop: 'fallbackIcon', type: 'ReactNode', description: '自定义兜底图标；不传时图片失败降级 Layers，未命中降级 Building2' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-xs">
            <div className="flex items-center gap-4 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]">
                <BrandIcon code={brandCode} presets={presets} className={brandSizeClass} />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-[var(--abc-fg)]">
                  激活租户：<code className="font-mono text-[var(--abc-primary)]">{brandCode}</code>
                </div>
                <p className="text-[11px] text-[var(--abc-fg-muted)]">
                  Mask 模式通过 CSS <code className="font-mono">mask-image</code> 着色，可随时随主题或 <code className="font-mono">maskClassName</code> 变色。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { key: 'ipapex', label: 'Mask 动态着色' },
                { key: 'bytesflows', label: 'Image 原色直出' },
                { key: 'broken-cdn', label: '断链自动降级' },
                { key: 'unknown-tenant', label: '未注册默认兜底' },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setBrandCode(item.key)}
                  className={`flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-3 py-2 text-left transition-colors cursor-pointer ${
                    brandCode === item.key
                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] font-semibold'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]'
                  }`}
                >
                  <BrandIcon code={item.key} presets={presets} className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3: ThemeSwitcher / LocaleSwitcher / useColorScheme */}
        <ComponentDocPreview
          title="ThemeSwitcher / LocaleSwitcher / useColorScheme 主题与多语言控制"
          components={['ThemeSwitcher', 'LocaleSwitcher', 'useColorScheme']}
          description="ThemeSwitcher 与 useColorScheme 协同同步系统 prefers-color-scheme、localStorage 与跨标签页事件；LocaleSwitcher 提供单按钮与分段式双语切换。"
          controls={
            <>
              <KnobSegmented
                label="mode"
                value={switcherMode}
                onChange={setSwitcherMode}
                options={[
                  { label: 'toggle', value: 'toggle' },
                  { label: 'segmented', value: 'segmented' },
                ]}
              />
              <KnobSegmented
                label="locale"
                value={demoLocale}
                onChange={setDemoLocale}
                options={[
                  { label: 'zh (中文)', value: 'zh' },
                  { label: 'en (English)', value: 'en' },
                ]}
              />
              <KnobSwitch label="dark (深色顶栏)" checked={darkSurface} onChange={setDarkSurface} />
            </>
          }
          onResetKnobs={() => {
            setSwitcherMode('segmented')
            setDarkSurface(false)
            setDemoLocale('zh')
          }}
          code={`import { ThemeSwitcher, LocaleSwitcher, useColorScheme } from '@abc-design/react'

const { preference, resolvedScheme } = useColorScheme()

<ThemeSwitcher mode="${switcherMode}" dark={${darkSurface}} locale="${demoLocale}" />
<LocaleSwitcher mode="${switcherMode}" dark={${darkSurface}} locale="${demoLocale}" onSelectLocale={setLocale} />`}
          apiRows={[
            { prop: 'mode', type: "'toggle' | 'segmented'", defaultValue: "'toggle'", description: '单按钮快捷轮换或三态/双态分段组展示' },
            { prop: 'dark', type: 'boolean', defaultValue: 'false', description: '适配深色顶部导航栏的半透明描边高对比风格' },
            { prop: 'locale / onSelectLocale', type: 'string / (next: "en" | "zh") => void', description: 'LocaleSwitcher 受控语言编码与直接选择回调' },
            { prop: 'useColorScheme()', type: '{ preference, resolvedScheme, systemScheme, setPreference, toggleScheme }', description: '读写三态主题偏好及实时解析后明暗值' },
          ]}
        >
          <div className="space-y-4">
            <div
              className={`flex flex-wrap items-center justify-between gap-4 rounded-[var(--abc-radius-lg)] border p-4 transition-colors ${
                darkSurface
                  ? 'border-slate-700 bg-slate-900 text-slate-100'
                  : 'border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]'
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <ThemeSwitcher mode={switcherMode} dark={darkSurface} locale={demoLocale} />
                <LocaleSwitcher
                  mode={switcherMode}
                  dark={darkSurface}
                  locale={demoLocale}
                  onToggle={() => setDemoLocale((v) => (v === 'zh' ? 'en' : 'zh'))}
                  onSelectLocale={setDemoLocale}
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <StatusTag tone="info" size="xs" dot={false}>
                  preference: {preference}
                </StatusTag>
                <StatusTag tone={resolvedScheme === 'dark' ? 'primary' : 'success'} size="xs">
                  resolvedScheme: {resolvedScheme}
                </StatusTag>
                <StatusTag tone="neutral" size="xs" dot={false}>
                  system: {systemScheme}
                </StatusTag>
              </div>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
export default IconsThemeAndLocalePage
