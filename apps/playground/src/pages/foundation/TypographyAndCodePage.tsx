import React, { useState } from 'react'
import {
  Button,
  CodeBlock,
  CopyButton,
  CopyableCode,
  CopyableText,
  Kbd,
  PageContainer,
  RichIconText,
  StatusTag,
  type AbcSize,
} from '@abc-design/react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSwitch, KnobText } from '../../components/PropKnobs'

type CodeLang = 'tsx' | 'rust' | 'json' | 'bash'

const CODE_SAMPLES: Record<CodeLang, { defaultTitle: string; snippet: string }> = {
  tsx: {
    defaultTitle: 'src/pages/TenantLedger.tsx',
    snippet: `import { createProTableApi, ProTable } from '@abc-design/react'

const api = createProTableApi({ list: '/api/v1/tenants', remove: '/api/v1/tenants/:id' })

export function TenantLedger() {
  return <ProTable api={api} rowKey="id" searchVariant="card" />
}`,
  },
  rust: {
    defaultTitle: 'crates/api/src/routes/jobs.rs',
    snippet: `pub async fn create_browser_job(State(ctx): State<AppState>, Json(spec): Json<JobSpec>) -> ApiResult<JobHandle> {
    let lease = ctx.scheduler.admit_job(spec).await?;
    Ok(Json(JobHandle { job_id: lease.job_id, status: "queued" }))
}`,
  },
  json: {
    defaultTitle: 'examples/job-spec.json',
    snippet: `{
  "job_id": "job_01JX9A8B7C",
  "engine": "chromium-slim",
  "steps": [{ "action": "goto", "url": "https://example.com" }, { "action": "capture_page_bundle" }]
}`,
  },
  bash: {
    defaultTitle: 'scripts/deploy-runner.sh',
    snippet: `curl -X POST https://api.browser.dev/v1/browser/jobs -H "Authorization: Bearer sk_live_demo" -d '{"url":"https://abc-design.dev"}'`,
  },
}

const DEFAULT_VALUE_TEXT = 'job_01JX9A8B7C_prod'
const DEFAULT_RICH_TEXT = '🚀 启动云端沙箱 · 🔒 零信任凭据 Vault · 📸 页面全景快照 · 📊 结构化提取结果'

export const TypographyAndCodePage: React.FC = () => {
  // 1. CodeBlock Knobs
  const [lang, setLang] = useState<CodeLang>('tsx')
  const [codeVariant, setCodeVariant] = useState<'terminal' | 'surface'>('terminal')
  const [codeCollapsible, setCodeCollapsible] = useState(false)
  const [codeTitle, setCodeTitle] = useState(CODE_SAMPLES.tsx.defaultTitle)
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [wrapLongLines, setWrapLongLines] = useState(false)
  const [codeCopyLabel, setCodeCopyLabel] = useState('复制源码')

  const handleLangChange = (nextLang: CodeLang) => {
    setLang(nextLang)
    setCodeTitle(CODE_SAMPLES[nextLang].defaultTitle)
  }

  // 2. CopyableText / CopyableCode / CopyButton Knobs
  const [valueText, setValueText] = useState(DEFAULT_VALUE_TEXT)
  const [iconOnly, setIconOnly] = useState(false)
  const [btnCopyLabel, setBtnCopyLabel] = useState('复制 ID')
  const [btnCopiedLabel, setBtnCopiedLabel] = useState('已复制')
  const [showCopyIcon, setShowCopyIcon] = useState(true)

  // 3. Kbd & RichIconText Knobs
  const [kbdSize, setKbdSize] = useState<AbcSize>('sm')
  const [richText, setRichText] = useState(DEFAULT_RICH_TEXT)
  const [richIconSize, setRichIconSize] = useState(14)
  const [preserveSrToken, setPreserveSrToken] = useState(true)

  const appendEmojiToken = (emoji: string, label: string) => {
    setRichText((prev) => `${prev.trim()} · ${emoji} ${label}`)
  }

  return (
    <PageContainer
      title="排版代码与复制原语"
      subtitle="涵盖深色终端代码块 CodeBlock、一键复制家族（CopyableText / CopyableCode / CopyButton）、快捷键徽标 Kbd 与矢量语义文本解析 RichIconText。"
    >
      <div className="space-y-5">
        {/* 卡片 1: CodeBlock */}
        <ComponentDocPreview
          title="CodeBlock 终端与语义表面代码块"
          components={['CodeBlock']}
          description="支持深色终端 (terminal) 与随主题切换的语义表面 (surface) 双外观、可折叠限高、等宽行号列、长行折行与一键复制交互。"
          controls={
            <>
              <KnobSegmented
                label="variant"
                value={codeVariant}
                onChange={setCodeVariant}
                options={[
                  { label: 'terminal (深色终端)', value: 'terminal' },
                  { label: 'surface (亮暗自适应)', value: 'surface' },
                ]}
              />
              <KnobSegmented
                label="language"
                value={lang}
                onChange={handleLangChange}
                options={[
                  { label: 'tsx', value: 'tsx' },
                  { label: 'rust', value: 'rust' },
                  { label: 'json', value: 'json' },
                  { label: 'bash', value: 'bash' },
                ]}
              />
              <KnobText label="title" value={codeTitle} onChange={setCodeTitle} widthClass="w-44" />
              <KnobSwitch label="collapsible" checked={codeCollapsible} onChange={setCodeCollapsible} />
              <KnobSwitch label="showLineNumbers" checked={showLineNumbers} onChange={setShowLineNumbers} />
              <KnobSwitch label="wrapLongLines" checked={wrapLongLines} onChange={setWrapLongLines} />
            </>
          }
          onResetKnobs={() => {
            setLang('tsx')
            setCodeVariant('terminal')
            setCodeCollapsible(false)
            setCodeTitle(CODE_SAMPLES.tsx.defaultTitle)
            setShowLineNumbers(true)
            setWrapLongLines(false)
            setCodeCopyLabel('复制源码')
          }}
          code={`import { CodeBlock } from '@abc-design/react'

<CodeBlock
  variant="${codeVariant}"
  title="${codeTitle}"
  language="${lang}"
  collapsible={${codeCollapsible}}
  showLineNumbers={${showLineNumbers}}
  wrapLongLines={${wrapLongLines}}
  code={snippet}
/>`}
          apiRows={[
            { prop: 'code', type: 'string', required: true, description: '代码字符串内容，同时作为右上角复制数据源' },
            { prop: 'variant', type: "'terminal' | 'surface'", defaultValue: "'terminal'", description: '深色 Mac 终端外观或跟随 --abc-* 语义变量的表面外观' },
            { prop: 'collapsible / maxHeight', type: 'boolean / number | string', defaultValue: 'false', description: '支持展开/收起切换与最大滚动高度限制' },
            { prop: 'showLineNumbers / wrapLongLines', type: 'boolean / boolean', defaultValue: 'false / false', description: '左侧等宽行号列与长行自动折行开关' },
          ]}
        >
          <CodeBlock
            variant={codeVariant}
            title={codeTitle || undefined}
            language={lang}
            collapsible={codeCollapsible}
            copyLabel={codeCopyLabel || 'Copy'}
            copiedLabel="已复制"
            showLineNumbers={showLineNumbers}
            wrapLongLines={wrapLongLines}
            code={CODE_SAMPLES[lang].snippet}
          />
        </ComponentDocPreview>

        {/* 卡片 2: CopyableText / CopyableCode / CopyButton */}
        <ComponentDocPreview
          title="CopyableText / CopyableCode / CopyButton 剪贴板复制原语"
          components={['CopyableText', 'CopyableCode', 'CopyButton']}
          description="针对表格 ID、API 密钥、配置命令等高频复制场景优化：自动兼容非 HTTPS 环境的剪贴板降级，并阻止点击冒泡避免误触整行跳转。"
          controls={
            <>
              <KnobText label="value/text" value={valueText} onChange={setValueText} widthClass="w-44" />
              <KnobText label="copyLabel" value={btnCopyLabel} onChange={setBtnCopyLabel} widthClass="w-24" />
              <KnobText label="copiedLabel" value={btnCopiedLabel} onChange={setBtnCopiedLabel} widthClass="w-24" />
              <KnobSwitch label="CopyButton.iconOnly" checked={iconOnly} onChange={setIconOnly} />
              <KnobSwitch label="CopyableText.showIcon" checked={showCopyIcon} onChange={setShowCopyIcon} />
            </>
          }
          onResetKnobs={() => {
            setValueText(DEFAULT_VALUE_TEXT)
            setIconOnly(false)
            setBtnCopyLabel('复制 ID')
            setBtnCopiedLabel('已复制')
            setShowCopyIcon(true)
          }}
          code={`import { CopyableText, CopyableCode, CopyButton } from '@abc-design/react'

<CopyableText
  text="${valueText}"
  showIcon={${showCopyIcon}}
  successText="已复制任务标识"
  tooltip="点击复制完整 ID"
/>

<CopyableCode
  value="${valueText}"
  displayValue="任务凭据：${valueText.slice(0, 8)}••••"
  copyLabel="${btnCopyLabel}"
  copiedLabel="${btnCopiedLabel}"
/>

<CopyButton
  value="${valueText}"
  iconOnly={${iconOnly}}
  copyLabel="${btnCopyLabel}"
  copiedLabel="${btnCopiedLabel}"
/>`}
          apiRows={[
            { prop: 'CopyableText.text / displayText', type: 'string / ReactNode', required: true, description: '实际写入剪贴板的明文及可选脱敏/前缀展示内容' },
            { prop: 'CopyableText.showIcon / iconOnly', type: 'boolean', defaultValue: 'true / false', description: '控制是否显示右侧图标或退化为纯图标按钮' },
            { prop: 'CopyableCode.value / displayValue', type: 'string / ReactNode', required: true, description: '行内等宽代码块与独立微按钮组合，适合详情描述页' },
            { prop: 'CopyButton.iconOnly', type: 'boolean', defaultValue: 'true', description: '纯图标按钮模式或带 copyLabel/copiedLabel 文字的胶囊按钮' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-xs">
            <div className="space-y-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[var(--abc-fg)]">CopyableText (带提示)</span>
                <StatusTag tone="info" size="xs" dot={false}>
                  Toast 反馈
                </StatusTag>
              </div>
              <div className="pt-1">
                <CopyableText
                  text={valueText}
                  showIcon={showCopyIcon}
                  successText={`已复制：${valueText}`}
                  tooltip="点击复制到剪贴板"
                />
              </div>
              <p className="text-[11px] text-[var(--abc-fg-muted)]">支持点击或空格/回车键触发，自动调用 AbcProvider Toast。</p>
            </div>

            <div className="space-y-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3.5">
              <div className="font-semibold text-[var(--abc-fg)]">CopyableCode (脱敏展示联动)</div>
              <div className="pt-1">
                <CopyableCode
                  value={valueText}
                  displayValue={`[Prod] ${valueText.slice(0, 10)}${valueText.length > 10 ? '…' : ''}`}
                  copyLabel={btnCopyLabel}
                  copiedLabel={btnCopiedLabel}
                />
              </div>
              <p className="text-[11px] text-[var(--abc-fg-muted)]">界面仅展示脱敏截断前缀，点击复制时写入完整明文。</p>
            </div>

            <div className="space-y-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3.5">
              <div className="font-semibold text-[var(--abc-fg)]">CopyButton (独立动作按钮)</div>
              <div className="flex items-center gap-2 pt-1">
                <CopyButton
                  value={valueText}
                  iconOnly={iconOnly}
                  copyLabel={btnCopyLabel}
                  copiedLabel={btnCopiedLabel}
                />
                <span className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
                  {iconOnly ? 'iconOnly=true' : '图文并排模式'}
                </span>
              </div>
              <p className="text-[11px] text-[var(--abc-fg-muted)]">带独立成功态高亮边框与自定义 copyLabel / copiedLabel。</p>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3: Kbd & RichIconText */}
        <ComponentDocPreview
          title="Kbd & RichIconText 键盘快捷键与智能语义图标混排"
          components={['Kbd', 'RichIconText']}
          description="Kbd 统一键盘按键徽标样式；RichIconText 自动扫描文本中的 Emoji Token（如 🚀 / 🔒 / 📸 / 📊）并在原地替换为统一线宽的 Lucide 矢量图标。"
          controls={
            <>
              <KnobSegmented
                label="Kbd.size"
                value={kbdSize}
                onChange={setKbdSize}
                options={[
                  { label: 'xs', value: 'xs' },
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                ]}
              />
              <KnobNumber label="iconSize" value={richIconSize} onChange={setRichIconSize} min={12} max={24} step={1} />
              <KnobText label="richText" value={richText} onChange={setRichText} widthClass="w-72" />
              <KnobSwitch label="preserveSrToken" checked={preserveSrToken} onChange={setPreserveSrToken} />
            </>
          }
          onResetKnobs={() => {
            setKbdSize('sm')
            setRichText(DEFAULT_RICH_TEXT)
            setRichIconSize(14)
            setPreserveSrToken(true)
          }}
          code={`import { Kbd, RichIconText } from '@abc-design/react'

<div className="flex items-center gap-1.5">
  <Kbd size="${kbdSize}">⌘</Kbd>
  <Kbd size="${kbdSize}">K</Kbd>
  <Kbd size="${kbdSize}">Shift + ↵</Kbd>
</div>

<RichIconText
  text="${richText}"
  iconSize={${richIconSize}}
  preserveSrToken={${preserveSrToken}}
/>`}
          apiRows={[
            { prop: 'Kbd.size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '键盘按键徽标的尺寸档位，跟随或覆盖全局尺寸' },
            { prop: 'RichIconText.text', type: 'string', description: '包含语义 Emoji 或常规文字的原始字符串' },
            { prop: 'RichIconText.token / icon', type: 'string', description: '当文本不含 Emoji 时显式前置渲染的语义图标 Token' },
            { prop: 'RichIconText.iconSize / size', type: 'number', defaultValue: '13', description: '替换后的矢量 Lucide 图标像素大小' },
            { prop: 'RichIconText.preserveSrToken', type: 'boolean', defaultValue: 'true', description: '是否为屏幕阅读器保留隐藏的原始语义文本（sr-only）' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3.5 text-xs">
              <span className="font-semibold text-[var(--abc-fg-secondary)]">Kbd 快捷键组合：</span>
              <span className="inline-flex items-center gap-1">
                <Kbd size={kbdSize}>⌘</Kbd>
                <span className="text-[var(--abc-fg-muted)]">+</span>
                <Kbd size={kbdSize}>K</Kbd>
              </span>
              <span className="inline-flex items-center gap-1">
                <Kbd size={kbdSize}>Shift</Kbd>
                <span className="text-[var(--abc-fg-muted)]">+</span>
                <Kbd size={kbdSize}>↵</Kbd>
              </span>
              <Kbd size={kbdSize}>Esc</Kbd>
            </div>

            <div className="space-y-2.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-[var(--abc-fg-secondary)]">快捷插入语义 Emoji Token：</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  <Button size="xs" variant="secondary" onClick={() => appendEmojiToken('🚀', '并发调度')}>
                    + 🚀 启动
                  </Button>
                  <Button size="xs" variant="secondary" onClick={() => appendEmojiToken('🔒', '鉴权隔离')}>
                    + 🔒 加密
                  </Button>
                  <Button size="xs" variant="secondary" onClick={() => appendEmojiToken('📸', '快照留存')}>
                    + 📸 快照
                  </Button>
                  <Button size="xs" variant="secondary" onClick={() => appendEmojiToken('📊', '数据洞察')}>
                    + 📊 报表
                  </Button>
                </div>
              </div>

              <div className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3.5 py-2.5 text-xs text-[var(--abc-fg)]">
                <RichIconText text={richText} iconSize={richIconSize} preserveSrToken={preserveSrToken} />
              </div>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
export default TypographyAndCodePage
