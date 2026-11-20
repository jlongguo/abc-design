import React, { useState } from 'react'
import { ConfigDiffViewer, JsonCodeEditor, Button } from '@abc-design/react'
import { GitCompareArrows, RotateCcw } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

const INITIAL_JSON = JSON.stringify(
  {
    engine: 'chromium-slim',
    url: 'https://example.com/pricing',
    viewport: { width: 1440, height: 900 },
    steps: [
      { action: 'goto', url: 'https://example.com/pricing' },
      { action: 'wait_for_selector', selector: '[data-testid="plan-card"]' },
      { action: 'extract_list', selector: '.plan-card', fields: { name: 'h3', price: '.price' } },
    ],
  },
  null,
  2
)

const BASELINE_SPEC = JSON.parse(INITIAL_JSON) as Record<string, unknown>

export const JsonCodeEditorDemoSection: React.FC = () => {
  const [jsonText, setJsonText] = useState(INITIAL_JSON)
  const [defaultViewMode, setDefaultViewMode] = useState<'code' | 'split' | 'tree'>('split')
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [readOnly, setReadOnly] = useState(false)

  return (
    <ComponentDocPreview
      title="JsonCodeEditor IDE 级 JSON 源码与结构树一体化编辑器"
      components={['JsonCodeEditor']}
      description="零重型编辑器依赖：内置行号槽、错误行精准高亮、Tab 缩进、格式化/压缩、文件导入导出、实时 Split/Tree 结构树同步，以及可扩展 Diff 对比视图。"
      controls={
        <>
          <KnobSegmented
            label="defaultViewMode"
            value={defaultViewMode}
            onChange={setDefaultViewMode}
            options={[
              { label: 'code', value: 'code' },
              { label: 'split', value: 'split' },
              { label: 'tree', value: 'tree' },
            ]}
          />
          <KnobSwitch label="showLineNumbers" checked={showLineNumbers} onChange={setShowLineNumbers} />
          <KnobSwitch label="readOnly" checked={readOnly} onChange={setReadOnly} />
        </>
      }
      onResetKnobs={() => {
        setJsonText(INITIAL_JSON)
        setDefaultViewMode('split')
        setShowLineNumbers(true)
        setReadOnly(false)
      }}
      code={`<JsonCodeEditor
  title="workflow-spec.json"
  value={jsonText}
  onChange={setJsonText}
  defaultViewMode="${defaultViewMode}"
  showLineNumbers={${showLineNumbers}}
  readOnly={${readOnly}}
/>`}
      apiRows={[
        { prop: 'value / onChange', type: 'string / (next: string) => void', required: true, description: '受控 JSON 文本值与变更回调' },
        { prop: 'defaultViewMode', type: "'code' | 'split' | 'tree' | string", defaultValue: "'code'", description: '默认工作区模式：纯源码、双栏源码+树视图、或纯树视图' },
        { prop: 'extraViews', type: 'JsonCodeEditorExtraView[]', description: '扩展视图标签页插槽（例如接入 ConfigDiffViewer 与基线对比）' },
        { prop: 'externalError / errorAction', type: 'string | null / ReactNode', description: '外部 Schema 校验错误展示及一键恢复按钮插槽' },
      ]}
    >
      <JsonCodeEditor
        key={defaultViewMode}
        title="workflow-spec.json"
        value={jsonText}
        onChange={setJsonText}
        defaultViewMode={defaultViewMode}
        showLineNumbers={showLineNumbers}
        readOnly={readOnly}
        minHeight={260}
        maxHeight={420}
        ariaLabel="工作流 JSON 编辑器"
        errorAction={
          <Button
            size="xs"
            variant="outline"
            pressScale={false}
            leftIcon={<RotateCcw className="h-3 w-3" />}
            onClick={() => setJsonText(INITIAL_JSON)}
          >
            恢复默认示例
          </Button>
        }
        extraViews={[
          {
            key: 'diff',
            label: '基线对比',
            icon: <GitCompareArrows className="h-3 w-3" aria-hidden="true" />,
            render: (parsed) =>
              parsed && typeof parsed === 'object' ? (
                <ConfigDiffViewer
                  mode="code"
                  before={BASELINE_SPEC}
                  after={parsed as Record<string, unknown>}
                  title="当前草稿 vs 初始基线"
                />
              ) : (
                <div className="py-8 text-center text-xs text-[var(--abc-fg-muted)]">
                  请先修复 JSON 语法错误再进行基线对比。
                </div>
              ),
          },
        ]}
      />
    </ComponentDocPreview>
  )
}
