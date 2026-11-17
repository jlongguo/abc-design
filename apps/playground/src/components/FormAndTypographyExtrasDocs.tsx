import React, { useState } from 'react'
import {
  CheckableTag,
  CheckableTagGroup,
  CodeBlock,
  CopyButton,
  Input,
  Kbd,
  Label,
  LocaleSwitcher,
  ProFormLayout,
  ProMultiImageUpload,
  RadixSelect,
  RichIconText,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SemanticIcon,
  Switch,
} from '@abc-design/react'
import { ComponentDocPreview } from './ComponentDocPreview'

const SAMPLE_TS_CODE = `import { createProTableApi, ProTable } from '@abc-design/react'

const api = createProTableApi({
  list: '/api/v1/tenants',
  remove: '/api/v1/tenants/:id',
})

export function TenantLedger() {
  return <ProTable api={api} rowKey="id" searchVariant="card" />
}`

const DEMO_SVG_A =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" rx="16" fill="#2563eb"/><circle cx="60" cy="60" r="28" fill="#ffffff" fill-opacity="0.9"/></svg>'
  )

const DEMO_SVG_B =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" rx="16" fill="#059669"/><polygon points="60,24 96,92 24,92" fill="#ffffff" fill-opacity="0.9"/></svg>'
  )

/**
 * 表单与排版扩展组件文档集合
 * 集成 LocaleSwitcher、CodeBlock、CopyButton、Kbd、SemanticIcon、RichIconText、
 * CheckableTag / CheckableTagGroup、Label、RadixSelect 复合选择器、ProFormLayout 与 ProMultiImageUpload
 */
export const FormAndTypographyExtrasDocs: React.FC = () => {
  const [demoLocale, setDemoLocale] = useState<'zh' | 'en'>('zh')
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [wrapLongLines, setWrapLongLines] = useState(false)
  const [singleChecked, setSingleChecked] = useState(true)
  const [selectedScopes, setSelectedScopes] = useState<string[]>(['jobs:read', 'artifacts:read'])
  const [regionVal, setRegionVal] = useState('ap-southeast-1')
  const [formLayoutMode, setFormLayoutMode] = useState<'split' | 'grid'>('split')
  const [multiImages, setMultiImages] = useState(`${DEMO_SVG_A},${DEMO_SVG_B}`)

  return (
    <div className="space-y-5">
      {/* 1. CodeBlock / CopyButton / Kbd / LocaleSwitcher */}
      <ComponentDocPreview
        title="CodeBlock / CopyButton / Kbd / LocaleSwitcher 排版与国际化原语"
        description="深色终端代码块（支持行号与一键复制）、独立复制按钮、快捷键键盘徽标，以及双语切换器（单键与分段双模式）。"
        controls={
          <>
            <Switch
              size="xs"
              label="显示行号 (showLineNumbers)"
              checked={showLineNumbers}
              onChange={setShowLineNumbers}
            />
            <Switch
              size="xs"
              label="长行折行 (wrapLongLines)"
              checked={wrapLongLines}
              onChange={setWrapLongLines}
            />
          </>
        }
        code={`import { CodeBlock, CopyButton, Kbd, LocaleSwitcher } from '@abc-design/react'

<LocaleSwitcher mode="segmented" locale={locale} onSelectLocale={setLocale} />
<CopyButton value="prj_01JXYZ..." copyLabel="复制 ID" copiedLabel="已复制" iconOnly={false} />
<Kbd size="sm">⌘ K</Kbd>
<CodeBlock title="TenantLedger.tsx" language="tsx" showLineNumbers={${showLineNumbers}} code={code} />`}
        apiRows={[
          { prop: 'CodeBlock.showLineNumbers', type: 'boolean', defaultValue: 'false', description: '是否在代码左侧展示等宽行号' },
          { prop: 'CopyButton.iconOnly', type: 'boolean', defaultValue: 'true', description: '仅图标紧凑按钮或图文并排按钮' },
          { prop: 'Kbd.size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '快捷键徽标尺寸档位' },
          { prop: 'LocaleSwitcher.mode', type: "'toggle' | 'segmented'", defaultValue: "'toggle'", description: '单按钮轮换或 EN/中文分段双按钮' },
        ]}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <LocaleSwitcher
                mode="toggle"
                locale={demoLocale}
                onToggle={() => setDemoLocale((v) => (v === 'zh' ? 'en' : 'zh'))}
              />
              <LocaleSwitcher
                mode="segmented"
                locale={demoLocale}
                onSelectLocale={setDemoLocale}
              />
              <div className="rounded-md bg-slate-900 p-1">
                <LocaleSwitcher
                  mode="toggle"
                  dark
                  locale={demoLocale}
                  onToggle={() => setDemoLocale((v) => (v === 'zh' ? 'en' : 'zh'))}
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <CopyButton value="prj_01JXYZ9988" title="复制项目 ID" />
              <CopyButton
                value="sk_live_abc_design_demo_key"
                iconOnly={false}
                copyLabel="复制密钥"
                copiedLabel="已复制"
              />
              <Kbd size="xs">Esc</Kbd>
              <Kbd size="sm">⌘ K</Kbd>
              <Kbd size="md">Shift + ↵</Kbd>
            </div>
          </div>

          <CodeBlock
            title="src/pages/TenantLedger.tsx"
            language="tsx"
            showLineNumbers={showLineNumbers}
            wrapLongLines={wrapLongLines}
            copyLabel="复制源码"
            copiedLabel="已复制"
            code={SAMPLE_TS_CODE}
          />
        </div>
      </ComponentDocPreview>

      {/* 2. SemanticIcon / RichIconText */}
      <ComponentDocPreview
        title="SemanticIcon / RichIconText 矢量语义图标与混排解析"
        description="将语义动作标识（如 vault_fill / screenshot / capture_page_bundle）及文本中的 Emoji Token 自动升级为统一线宽矢量 Lucide 图标，消除跨系统 Emoji 字形差异。"
        code={`import { SemanticIcon, RichIconText } from '@abc-design/react'

<SemanticIcon token="vault_fill" size={16} />
<RichIconText text="🚀 启动云端沙箱 · 🔒 零信任凭据 Vault · 📊 导出结构化表格" />`}
        apiRows={[
          { prop: 'SemanticIcon.token', type: 'string', description: '内置动作/领域语义 Token 或 Emoji 字符' },
          { prop: 'SemanticIcon.srText', type: 'string', description: '为屏幕阅读器提供隐藏语义说明' },
          { prop: 'RichIconText.text', type: 'string', description: '含语义 Emoji 的文本，将原地替换为无障碍矢量图标' },
        ]}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {(['trigger', 'network', 'screenshot', 'capture_page_bundle', 'vault_fill', 'extract_table'] as const).map(
              (tk) => (
                <span
                  key={tk}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-2.5 py-1 text-xs"
                >
                  <SemanticIcon token={tk} size={14} className="text-[var(--abc-primary)]" />
                  <code className="font-mono text-[11px]">{tk}</code>
                </span>
              )
            )}
          </div>
          <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3.5 py-2.5 text-xs text-[var(--abc-fg)]">
            <RichIconText text="🚀 启动云端沙箱 · 🔒 零信任凭据 Vault · 📸 页面全景快照 · 📊 结构化提取结果" />
          </div>
        </div>
      </ComponentDocPreview>

      {/* 3. CheckableTag / CheckableTagGroup / Label / RadixSelect 复合写法 */}
      <ComponentDocPreview
        title="CheckableTagGroup / CheckableTag / Label / RadixSelect 复合组件"
        description="支持按权限标签多选过滤的胶囊开关组、独立语义 Label，以及与 @radix-ui/react-select 写法 1:1 兼容的组合式下拉选择器。"
        code={`import { CheckableTag, CheckableTagGroup, Label, RadixSelect, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '@abc-design/react'

<Label htmlFor="region-select" required>部署区域 (RadixSelect)</Label>
<RadixSelect value={region} onValueChange={setRegion}>
  <SelectTrigger id="region-select"><SelectValue placeholder="请选择区域" /></SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>亚太可用区</SelectLabel>
      <SelectItem value="ap-southeast-1">新加坡 ap-southeast-1</SelectItem>
      <SelectItem value="ap-northeast-1">东京 ap-northeast-1</SelectItem>
    </SelectGroup>
  </SelectContent>
</RadixSelect>
<CheckableTagGroup value={scopes} onValueChange={setScopes} options={['jobs:read', 'jobs:write', 'artifacts:read']} />`}
        apiRows={[
          { prop: 'CheckableTag.checked / onCheckedChange', type: 'boolean / (checked: boolean) => void', description: '受控单选胶囊开关态' },
          { prop: 'CheckableTagGroup.options', type: 'Array<string | { value, label, disabled }>', required: true, description: '多选胶囊列表配置' },
          { prop: 'Label.required', type: 'boolean', defaultValue: 'false', description: '自动在标签文本右侧附加红色必填星号' },
          { prop: 'RadixSelect / SelectItem', type: 'Compound', description: '兼容 Shadcn / Radix 组合子组件树写法' },
        ]}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label size="sm" required>
                API 权限作用域 (CheckableTagGroup)
              </Label>
              <CheckableTag
                size="sm"
                checked={singleChecked}
                onCheckedChange={setSingleChecked}
                label="启用审计签名"
              />
            </div>
            <CheckableTagGroup
              size="md"
              value={selectedScopes}
              onValueChange={setSelectedScopes}
              options={[
                { value: 'jobs:read', label: 'jobs:read' },
                { value: 'jobs:write', label: 'jobs:write' },
                { value: 'artifacts:read', label: 'artifacts:read' },
                { value: 'billing:admin', label: 'billing:admin (受限)', disabled: true },
              ]}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="pg-radix-select" size="sm" required>
              调度集群可用区 (RadixSelect 复合结构)
            </Label>
            <RadixSelect value={regionVal} onValueChange={setRegionVal}>
              <SelectTrigger id="pg-radix-select">
                <SelectValue placeholder="请选择目标可用区" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>亚太地区</SelectLabel>
                  <SelectItem value="ap-southeast-1">新加坡 ap-southeast-1</SelectItem>
                  <SelectItem value="ap-northeast-1">东京 ap-northeast-1</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>欧美地区</SelectLabel>
                  <SelectItem value="us-west-2">俄勒冈 us-west-2</SelectItem>
                  <SelectItem value="eu-central-1">法兰克福 eu-central-1</SelectItem>
                </SelectGroup>
              </SelectContent>
            </RadixSelect>
          </div>
        </div>
      </ComponentDocPreview>

      {/* 4. ProFormLayout & ProMultiImageUpload */}
      <ComponentDocPreview
        title="ProFormLayout / ProMultiImageUpload 分组表单排版与多图上传"
        pkg="@abc-design/react"
        description="支持左侧说明导览 + 右侧卡片 ('split') 与多列卡片网格 ('grid') 一键切换的分组表单排版引擎，以及零耦合多图上传预览控件。"
        controls={
          <div className="inline-flex items-center gap-2">
            <span>排版模式 (mode):</span>
            {(['split', 'grid'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setFormLayoutMode(m)}
                className={`rounded px-2 py-0.5 text-xs cursor-pointer ${
                  formLayoutMode === m
                    ? 'bg-[var(--abc-primary)] text-white'
                    : 'border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        }
        code={`import { ProFormLayout, ProMultiImageUpload, Input } from '@abc-design/react'

<ProFormLayout
  mode="${formLayoutMode}"
  sections={[
    { key: 'base', title: '基础标识', description: '项目名称与素材资源', children: <Input label="项目名称" /> },
  ]}
/>
<ProMultiImageUpload value={urls} onChange={setUrls} maxCount={6} />`}
        apiRows={[
          { prop: 'ProFormLayout.mode', type: "'split' | 'grid'", defaultValue: "'split'", description: '左右导览分栏或网格卡片排版模式' },
          { prop: 'ProFormLayout.sections', type: 'ProFormSection[]', required: true, description: '分区标题、说明与表单子控件' },
          { prop: 'ProMultiImageUpload.value', type: 'string | string[]', required: true, description: '逗号分隔 URL 字符串或字符串数组' },
          { prop: 'ProMultiImageUpload.maxCount', type: 'number', defaultValue: '9', description: '最大可上传图片数量' },
        ]}
      >
        <ProFormLayout
          mode={formLayoutMode}
          sections={[
            {
              key: 'identity',
              title: '租户身份信息',
              description: '配置工作空间基础展示信息，用于控制台顶栏与审计回执。',
              columns: 2,
              children: (
                <>
                  <Input label="工作空间名称" defaultValue="Browser Production Cloud" />
                  <Input label="联系邮箱" defaultValue="ops@browser-platform.dev" />
                </>
              ),
            },
            {
              key: 'assets',
              title: '品牌图标与预览素材 (ProMultiImageUpload)',
              description: '支持本地预览、点击灯箱放大与移除重排。',
              columns: 1,
              children: (
                <ProMultiImageUpload value={multiImages} onChange={setMultiImages} maxCount={6} />
              ),
            },
          ]}
        />
      </ComponentDocPreview>
    </div>
  )
}
