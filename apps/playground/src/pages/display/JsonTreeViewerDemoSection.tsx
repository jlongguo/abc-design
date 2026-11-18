import React, { useState } from 'react'
import {
  Button,
  JsonTreeViewer,
  StatusTag,
  abcToast,
  type AbcSize,
  type JsonTreeCopyInfo,
} from '@abc-design/react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

const SAMPLE_JSON_PAYLOAD = {
  job_id: 'job_01JX9T8K2V',
  engine: 'chromium-slim',
  status: 'succeeded',
  duration_ms: 1842,
  egress: {
    region: 'ap-southeast-1',
    proxy_pool: 'datacenter-clean',
    bytes_up: 48210,
    bytes_down: 912640,
    tls_verified: true,
  },
  steps: [
    { seq: 1, action: 'goto', url: 'https://console.abc-design.dev', elapsed_ms: 620 },
    { seq: 2, action: 'extract_axtree', nodes: 148, elapsed_ms: 310 },
    { seq: 3, action: 'capture_page_bundle', artifact_id: 'art_99201', elapsed_ms: 912 },
  ],
  warnings: null,
}

const BROKEN_JSON_RAW = `{"job_id": "job_broken_01", "steps": [1, 2, INVALID_TOKEN}`

const SIZE_OPTIONS: Array<{ label: AbcSize; value: AbcSize }> = [
  { label: 'xs', value: 'xs' },
  { label: 'sm', value: 'sm' },
  { label: 'md', value: 'md' },
  { label: 'lg', value: 'lg' },
]

export const JsonTreeViewerDemoSection: React.FC = () => {
  const [size, setSize] = useState<AbcSize>('sm')
  const [pathFormat, setPathFormat] = useState<'jsonpath' | 'dot'>('jsonpath')
  const [expandDepth, setExpandDepth] = useState<1 | 2 | 4>(2)
  const [filterOnSearch, setFilterOnSearch] = useState(true)
  const [bordered, setBordered] = useState(true)
  const [copyable, setCopyable] = useState(true)
  const [simulateMalformed, setSimulateMalformed] = useState(false)
  const [lastCopy, setLastCopy] = useState<string>('点击树节点右侧复制路径或值查看回执')

  const handleCopy = (info: JsonTreeCopyInfo) => {
    setLastCopy(`[${info.kind}] path=${info.path} -> ${info.text.slice(0, 48)}`)
    abcToast.success(`已复制 ${info.kind === 'path' ? 'JSON 路径' : '节点内容'}: ${info.path}`)
  }

  const activeData: unknown = simulateMalformed ? BROKEN_JSON_RAW : SAMPLE_JSON_PAYLOAD

  return (
    <ComponentDocPreview
      title="JsonTreeViewer 结构化 JSON 树形检视与路径复制器"
      components={['JsonTreeViewer']}
      description="面向 API 响应报文、审计快照与任务产物检视：支持 JSON 字符串自动解析与语法错误原文兜底、关键字检索高亮并自动展开命中祖先分支、JSONPath / Dot 双格式路径复制、大数组分批加载及 WAI-ARIA Tree 键盘导航。"
      onResetKnobs={() => {
        setSize('sm')
        setPathFormat('jsonpath')
        setExpandDepth(2)
        setFilterOnSearch(true)
        setBordered(true)
        setCopyable(true)
        setSimulateMalformed(false)
      }}
      controls={
        <>
          <KnobSegmented label="size" value={size} options={SIZE_OPTIONS} onChange={setSize} />
          <KnobSegmented
            label="pathFormat"
            value={pathFormat}
            options={[
              { label: 'jsonpath ($.a[0])', value: 'jsonpath' },
              { label: 'dot (a.0)', value: 'dot' },
            ]}
            onChange={setPathFormat}
          />
          <KnobSegmented
            label="defaultExpandDepth"
            value={expandDepth}
            options={[
              { label: '1 层', value: 1 },
              { label: '2 层', value: 2 },
              { label: '4 层', value: 4 },
            ]}
            onChange={setExpandDepth}
          />
          <KnobSwitch label="filterOnSearch" checked={filterOnSearch} onChange={setFilterOnSearch} />
          <KnobSwitch label="copyable" checked={copyable} onChange={setCopyable} />
          <KnobSwitch label="bordered" checked={bordered} onChange={setBordered} />
          <KnobSwitch
            label="模拟非法 JSON 字符串兜底"
            checked={simulateMalformed}
            onChange={setSimulateMalformed}
          />
        </>
      }
      code={`import { JsonTreeViewer } from '@abc-design/react'

<JsonTreeViewer
  data={payload}
  size="${size}"
  pathFormat="${pathFormat}"
  defaultExpandDepth={${expandDepth}}
  filterOnSearch={${filterOnSearch}}
  copyable={${copyable}}
  bordered={${bordered}}
  maxHeight={320}
  onCopy={({ kind, path }) => console.log(kind, path)}
/>`}
      apiRows={[
        { prop: 'data', type: 'unknown', required: true, description: '任意对象/数组/原始值或待自动解析的 JSON 字符串' },
        { prop: 'parseString', type: 'boolean', defaultValue: 'true', description: '当 data 为字符串时自动尝试 JSON.parse，解析失败展示告警横幅与原文兜底' },
        { prop: 'defaultExpandDepth', type: 'number', defaultValue: '2', description: '初始自动展开层级深度；支持受控 expandedPaths' },
        { prop: 'searchable / filterOnSearch', type: 'boolean / boolean', defaultValue: 'true / true', description: '顶部搜索框高亮匹配项并仅保留命中祖先链路' },
        { prop: 'pathFormat', type: "'jsonpath' | 'dot'", defaultValue: "'jsonpath'", description: '复制路径时生成 $.steps[0].action 或 steps.0.action 格式' },
        { prop: 'maxChildren / maxDepth', type: 'number / number', defaultValue: '100 / 20', description: '超大数组分批“显示更多”保护阈值与最大递归深度保护' },
      ]}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <StatusTag tone={simulateMalformed ? 'warning' : 'info'} dot={false} className="font-mono">
            {lastCopy}
          </StatusTag>
          {simulateMalformed && (
            <Button size="xs" variant="secondary" onClick={() => setSimulateMalformed(false)}>
              切回合法结构化报文
            </Button>
          )}
        </div>

        <JsonTreeViewer
          key={`${expandDepth}_${simulateMalformed ? 'bad' : 'ok'}`}
          data={activeData}
          rootLabel="jobResult"
          size={size}
          pathFormat={pathFormat}
          defaultExpandDepth={expandDepth}
          filterOnSearch={filterOnSearch}
          copyable={copyable}
          bordered={bordered}
          maxHeight={320}
          onCopy={handleCopy}
        />
      </div>
    </ComponentDocPreview>
  )
}
