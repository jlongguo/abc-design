import React, { useState } from 'react'
import {
  FlowNodeCard,
  FlowSectionFrame,
  StatusTag,
  TemplateVariableInput,
  type FlowTone,
  type TemplateVariableOption,
} from '@abc-design/react'
import { Layers } from 'lucide-react'
import { ComponentDocPreview } from '../../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../../components/PropKnobs'

const DEMO_VARIABLES: TemplateVariableOption[] = [
  {
    key: 'lastUserText',
    label: '最近用户输入',
    group: 'Context',
    type: 'string',
    description: '当前上下文捕获的最新文本输入',
    sampleValue: 'Pricing tiers',
  },
  {
    key: 'kb_reply',
    label: '检索答复正文',
    group: 'Step Outputs',
    type: 'string',
    description: '上游节点输出的检索答复内容',
  },
  {
    key: 'kb_source',
    label: '来源文档链接',
    group: 'Step Outputs',
    type: 'url',
    sampleValue: 'https://docs.abc.dev',
  },
  {
    key: 'kb_chunks',
    label: '命中片段数组',
    group: 'Step Outputs',
    type: 'json',
    description: '结构化段落列表，供后续编排引用',
  },
  {
    key: 'flowError',
    label: '异常错误对象',
    group: 'Runtime',
    type: 'object',
    description: '节点执行失败时自动写入的错误信息',
  },
]

const FRAME_TONES: Array<{ label: FlowTone; value: FlowTone }> = [
  { label: 'slate', value: 'slate' },
  { label: 'blue', value: 'blue' },
  { label: 'green', value: 'green' },
  { label: 'amber', value: 'amber' },
  { label: 'rose', value: 'rose' },
]

export const TemplateVariableAndSectionDemoSection: React.FC = () => {
  const [multiline, setMultiline] = useState(true)
  const [chipDisplay, setChipDisplay] = useState<'auto' | 'always' | 'none'>('auto')
  const [removableChips, setRemovableChips] = useState(true)
  const [showPreviewLabel, setShowPreviewLabel] = useState(true)
  const [replaceOnSelect, setReplaceOnSelect] = useState(false)
  const [mono, setMono] = useState(false)

  const [promptValue, setPromptValue] = useState('Answer {{lastUserText}} using {{kb_source}}')
  const [assignReply, setAssignReply] = useState('{{kb_reply}}')
  const [assignSource, setAssignSource] = useState('{{kb_source}}')

  const [frameTone, setFrameTone] = useState<FlowTone>('slate')
  const [frameDashed, setFrameDashed] = useState(true)
  const [frameSelected, setFrameSelected] = useState(false)

  return (
    <>
      <ComponentDocPreview
        title="TemplateVariableInput 模板变量输入器与 {} 变量选择器"
        components={['TemplateVariableInput']}
        description="面向右侧属性检查器（Inspector）的通用模板变量输入原语：支持单行/多行切换、自动将 {{variable}} 渲染为可移除深色胶囊芯片与预览标签，并在右下角提供防裁切 Portal {} 快捷变量选择器。"
        onResetKnobs={() => {
          setMultiline(true)
          setChipDisplay('auto')
          setRemovableChips(true)
          setShowPreviewLabel(true)
          setReplaceOnSelect(false)
          setMono(false)
          setPromptValue('Answer {{lastUserText}} using {{kb_source}}')
          setAssignReply('{{kb_reply}}')
          setAssignSource('{{kb_source}}')
        }}
        controls={
          <>
            <KnobSwitch label="multiline" checked={multiline} onChange={setMultiline} />
            <KnobSegmented
              label="chipDisplay"
              value={chipDisplay}
              options={[
                { label: 'auto', value: 'auto' },
                { label: 'always', value: 'always' },
                { label: 'none', value: 'none' },
              ]}
              onChange={setChipDisplay}
            />
            <KnobSwitch
              label="removableChips"
              checked={removableChips}
              onChange={setRemovableChips}
            />
            <KnobSwitch
              label="showPreviewLabel"
              checked={showPreviewLabel}
              onChange={setShowPreviewLabel}
            />
            <KnobSwitch
              label="replaceOnSelect"
              checked={replaceOnSelect}
              onChange={setReplaceOnSelect}
            />
            <KnobSwitch label="mono" checked={mono} onChange={setMono} />
          </>
        }
        code={`import { TemplateVariableInput } from '@abc-design/react'

<TemplateVariableInput
  label="User question"
  multiline={${multiline}}
  chipDisplay="${chipDisplay}"
  removableChips={${removableChips}}
  showPreviewLabel={${showPreviewLabel}}
  replaceOnSelect={${replaceOnSelect}}
  mono={${mono}}
  value={value}
  onChange={setValue}
  variables={variables}
/>`}
        apiRows={[
          { prop: 'value / defaultValue / onChange', type: 'string / (next: string) => void', description: '受控或非受控模板文本值，支持任意数量 {{variable}} 占位符' },
          { prop: 'multiline / rows', type: 'boolean / number', defaultValue: 'false / 3', description: '切换单行输入或可拖拽调整高度的多行文本域' },
          { prop: 'variables', type: 'ReadonlyArray<TemplateVariableOption>', defaultValue: '[]', description: '右下角 {} 浮层可选变量字典（支持 group 分组、type 徽标、description 与 sampleValue）' },
          { prop: 'chipDisplay / removableChips / showPreviewLabel', type: "'auto' | 'always' | 'none' / boolean / boolean", defaultValue: "'auto' / true / true", description: '控制 {{variable}} 深色胶囊芯片展示、× 移除按钮及匹配预览标签' },
          { prop: 'replaceOnSelect', type: 'boolean', defaultValue: 'false', description: '选中变量时替换整段值（适合输出变量绑定框）或按光标选区插入' },
          { prop: 'searchable / showPickerButton', type: 'boolean / boolean', defaultValue: 'true / true', description: '开启 {} 变量浮层关键字检索与触发按钮显隐控制' },
        ]}
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4">
            <TemplateVariableInput
              label="User question（点击右下角 {} 插入变量）"
              multiline={multiline}
              rows={3}
              chipDisplay={chipDisplay}
              removableChips={removableChips}
              showPreviewLabel={showPreviewLabel}
              replaceOnSelect={replaceOnSelect}
              mono={mono}
              allowClear
              value={promptValue}
              onChange={setPromptValue}
              variables={DEMO_VARIABLES}
              helperText="支持点击深色胶囊 × 精准移除单个变量，或将光标移至任意位置通过 {} 插值。"
            />
            <div className="rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--abc-fg-secondary)]">
              Raw value: {promptValue || '(empty)'}
            </div>
          </div>

          <div className="space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4">
            <TemplateVariableInput
              label="Assign Reply to（单行 replaceOnSelect 模式）"
              multiline={false}
              replaceOnSelect
              value={assignReply}
              onChange={setAssignReply}
              variables={DEMO_VARIABLES}
            />
            <TemplateVariableInput
              label="Assign Source to"
              multiline={false}
              replaceOnSelect
              value={assignSource}
              onChange={setAssignSource}
              variables={DEMO_VARIABLES}
            />
          </div>
        </div>
      </ComponentDocPreview>

      <ComponentDocPreview
        title="FlowSectionFrame 圆角虚线视觉分组注释框"
        components={['FlowSectionFrame']}
        description="用于在画布中圈定逻辑分组或放置低干扰视觉注释卡片：无子节点时默认居中呈现注释标题（如画布左下角分组标语），传入子节点时自动切换为左上角标题栏包裹容器。"
        onResetKnobs={() => {
          setFrameTone('slate')
          setFrameDashed(true)
          setFrameSelected(false)
        }}
        controls={
          <>
            <KnobSegmented
              label="tone"
              value={frameTone}
              options={FRAME_TONES}
              onChange={setFrameTone}
            />
            <KnobSwitch label="dashed" checked={frameDashed} onChange={setFrameDashed} />
            <KnobSwitch label="selected" checked={frameSelected} onChange={setFrameSelected} />
          </>
        }
        code={`import { FlowSectionFrame } from '@abc-design/react'

<FlowSectionFrame
  tone="${frameTone}"
  dashed={${frameDashed}}
  selected={${frameSelected}}
  title="Knowledge Base chain with fallbacks"
  description="按优先级依次检索并回退至默认回复分支"
  width={280}
  height={176}
/>`}
        apiRows={[
          { prop: 'title / description', type: 'ReactNode / ReactNode', description: '分组框主标题与可选辅助说明文案' },
          { prop: 'tone', type: "'blue' | 'green' | 'amber' | 'rose' | 'slate'", defaultValue: "'slate'", description: '虚线框边框与柔和填充语义色板' },
          { prop: 'align', type: "'center' | 'top-left'", defaultValue: "无 children 时 'center'，否则 'top-left'", description: '标题排版位置（居中注释卡或左上角分组容器）' },
          { prop: 'dashed / selected', type: 'boolean / boolean', defaultValue: 'true / false', description: '是否启用虚线描边与画布选中态高亮外圈' },
          { prop: 'width / height / minWidth / minHeight', type: 'number | string', defaultValue: 'minWidth=220, minHeight=148', description: '自定义几何尺寸（支持 px 数值或 CSS 百分比）' },
          { prop: 'icon / badge / headerExtra', type: 'ReactNode', description: '标题前置图标、状态徽标与右上角扩展操作插槽' },
        ]}
      >
        <div className="flex flex-wrap items-stretch gap-5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[radial-gradient(var(--abc-border)_1px,transparent_1px)] [background-size:14px_14px] bg-[var(--abc-bg-muted)]/40 p-5">
          <FlowSectionFrame
            tone={frameTone}
            dashed={frameDashed}
            selected={frameSelected}
            title="Knowledge Base chain with fallbacks"
            description="无子节点时居中展示画布区域注释"
            width={276}
            height={178}
          />

          <FlowSectionFrame
            tone={frameTone}
            dashed={frameDashed}
            selected={frameSelected}
            icon={<Layers className="h-3.5 w-3.5" />}
            title="Fallback Execution Group"
            badge={<StatusTag tone="neutral" size="xs">2 Nodes</StatusTag>}
            description="传入 children 时自动切换为左上角标题包裹模式"
            minWidth={300}
          >
            <FlowNodeCard
              tone="blue"
              width="100%"
              title="Primary Lookup"
              metaRows={[{ key: 'mode', value: 'Sequential fallback' }]}
            />
          </FlowSectionFrame>
        </div>
      </ComponentDocPreview>
    </>
  )
}
