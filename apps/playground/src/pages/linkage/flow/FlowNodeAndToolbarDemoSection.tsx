import React, { useState } from 'react'
import {
  FlowNodeCard,
  FlowNodeToolbar,
  StatusTag,
  abcToast,
  type FlowNodeStatus,
  type FlowNodeTone,
  type FlowNodeToolbarItem,
} from '@abc-design/react'
import {
  BookOpen,
  CheckCircle2,
  Copy,
  FileText,
  Globe,
  GripVertical,
  Layers,
  Play,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Trash2,
} from 'lucide-react'
import { ComponentDocPreview } from '../../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../../components/PropKnobs'

const TONE_OPTIONS: Array<{ label: FlowNodeTone; value: FlowNodeTone }> = [
  { label: 'blue', value: 'blue' },
  { label: 'green', value: 'green' },
  { label: 'amber', value: 'amber' },
  { label: 'rose', value: 'rose' },
  { label: 'slate', value: 'slate' },
]

const STATUS_OPTIONS: Array<{ label: FlowNodeStatus; value: FlowNodeStatus }> = [
  { label: 'idle', value: 'idle' },
  { label: 'running', value: 'running' },
  { label: 'success', value: 'success' },
  { label: 'error', value: 'error' },
]

export const FlowNodeAndToolbarDemoSection: React.FC = () => {
  const [tone, setTone] = useState<FlowNodeTone>('blue')
  const [status, setStatus] = useState<FlowNodeStatus>('idle')
  const [selected, setSelected] = useState(true)
  const [maxMetaRows, setMaxMetaRows] = useState<2 | 3>(3)

  const [toolbarOrientation, setToolbarOrientation] = useState<'horizontal' | 'vertical'>('horizontal')
  const [toolbarSize, setToolbarSize] = useState<'xs' | 'sm'>('sm')
  const [toolbarVisible, setToolbarVisible] = useState(true)
  const [pinned, setPinned] = useState(false)
  const [lastToolbarAction, setLastToolbarAction] = useState('点击微操作条图标测试回调与防冒泡')

  const toolbarItems: FlowNodeToolbarItem[] = [
    {
      key: 'run',
      label: '单步试运行',
      icon: <Play className="h-3.5 w-3.5" />,
      onClick: () => {
        setLastToolbarAction('触发动作：单步试运行')
        abcToast.info('触发：单步试运行')
      },
    },
    {
      key: 'duplicate',
      label: '复制节点',
      icon: <Copy className="h-3.5 w-3.5" />,
      onClick: () => {
        setLastToolbarAction('触发动作：复制节点')
        abcToast.success('已复制节点配置')
      },
    },
    {
      key: 'pin',
      label: pinned ? '取消固定调试' : '固定调试态',
      active: pinned,
      icon: <Sparkles className="h-3.5 w-3.5" />,
      onClick: () => {
        setPinned((prev) => !prev)
        setLastToolbarAction(pinned ? '已取消固定调试态' : '已切换为固定调试态')
      },
    },
    {
      key: 'config',
      label: '打开参数配置',
      icon: <SlidersHorizontal className="h-3.5 w-3.5" />,
      onClick: () => setLastToolbarAction('触发动作：打开参数配置'),
    },
    {
      key: 'delete',
      label: '删除节点',
      danger: true,
      dividerBefore: true,
      icon: <Trash2 className="h-3.5 w-3.5" />,
      onClick: () => {
        setLastToolbarAction('触发危险动作：删除节点')
        abcToast.warning('演示触发：删除节点')
      },
    },
  ]

  return (
    <>
      <ComponentDocPreview
        title="FlowNodeCard 柔和语义卡头与行内分支出口节点卡片"
        components={['FlowNodeCard']}
        description="提供 5 套低饱和柔和浅色语义卡头（blue / green / amber / rose / slate）、紧凑副图标区、≤3 行元数据插槽、行内状态出口行（允许直接挂载 ReactFlow <Handle />）以及 selected / running / error 状态边框。"
        onResetKnobs={() => {
          setTone('blue')
          setStatus('idle')
          setSelected(true)
          setMaxMetaRows(3)
        }}
        controls={
          <>
            <KnobSegmented label="tone" value={tone} options={TONE_OPTIONS} onChange={setTone} />
            <KnobSegmented
              label="status"
              value={status}
              options={STATUS_OPTIONS}
              onChange={setStatus}
            />
            <KnobSwitch label="selected" checked={selected} onChange={setSelected} />
            <KnobSegmented
              label="maxMetaRows"
              value={maxMetaRows}
              options={[
                { label: '2 行', value: 2 },
                { label: '3 行', value: 3 },
              ]}
              onChange={setMaxMetaRows}
            />
          </>
        }
        code={`import { FlowNodeCard, FlowNodeToolbar } from '@abc-design/react'

<FlowNodeCard
  tone="${tone}"
  status="${status}"
  selected={${selected}}
  maxMetaRows={${maxMetaRows}}
  title="Website pages"
  icon={<Globe className="h-3.5 w-3.5" />}
  subIcon={<Layers className="h-3.5 w-3.5" />}
  subExtra={<GripVertical className="h-3.5 w-3.5" />}
  metaRows={[
    { key: 'source', icon: <Globe className="h-3 w-3" />, value: 'Website Pages' },
    { key: 'query', icon: <FileText className="h-3 w-3" />, value: '{{lastUserText}}', mono: true },
    { key: 'model', icon: <Settings className="h-3 w-3" />, value: 'gpt-4o', mono: true },
  ]}
  outputs={[
    { id: 'success', label: 'Success', tone: 'success' /* handle={<Handle ... />} */ },
    { id: 'else', label: 'Else', tone: 'danger' /* handle={<Handle ... />} */ },
  ]}
/>`}
        apiRows={[
          { prop: 'tone', type: "'blue' | 'green' | 'amber' | 'rose' | 'slate'", defaultValue: "'blue'", description: '5 套柔和低饱和浅色语义卡头与外框配色' },
          { prop: 'title / icon / headerExtra', type: 'ReactNode', required: true, description: '卡头标题、前置图标与右侧副图标/操作区' },
          { prop: 'metaRows / maxMetaRows', type: 'FlowNodeMetaRow[] / number', defaultValue: 'undefined / 3', description: '紧凑元数据行列表，默认上限 3 行保持画布密度' },
          { prop: 'outputs / renderOutputHandle', type: 'FlowNodeOutputPort[] / (port) => ReactNode', description: '行内右对齐状态出口行（绿点 Success / 红点 Else），支持直接挂接 ReactFlow <Handle />' },
          { prop: 'inputHandle / toolbar', type: 'ReactNode / ReactNode', description: '外部入口 Handle 与顶部悬浮微操作条挂接插槽（容器保持 overflow-visible 不裁剪）' },
          { prop: 'selected / running / error / status', type: 'boolean / FlowNodeStatus', defaultValue: 'false / idle', description: '选中态、运行脉冲态与异常错误态边框及指示点' },
        ]}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-start gap-6 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[radial-gradient(var(--abc-border)_1px,transparent_1px)] [background-size:14px_14px] bg-[var(--abc-bg-muted)]/40 p-6">
            <FlowNodeCard
              tone={tone}
              status={status}
              selected={selected}
              maxMetaRows={maxMetaRows}
              title="Website pages"
              icon={<Globe className="h-3.5 w-3.5" />}
              headerExtra={
                <>
                  <Settings className="h-3.5 w-3.5 opacity-75" />
                  <FileText className="h-3.5 w-3.5 opacity-75" />
                </>
              }
              subIcon={<Layers className="h-3.5 w-3.5" />}
              subExtra={<GripVertical className="h-3.5 w-3.5 opacity-60" />}
              metaRows={[
                { key: 'source', icon: <Globe className="h-3 w-3" />, value: 'Website Pages' },
                {
                  key: 'query',
                  icon: <FileText className="h-3 w-3" />,
                  value: '{{lastUserText}}',
                  mono: true,
                },
                {
                  key: 'model',
                  icon: <Settings className="h-3 w-3" />,
                  value: 'gpt-4o',
                  mono: true,
                },
              ]}
              outputs={[
                {
                  id: 'success',
                  label: 'Success',
                  tone: 'success',
                  icon: <CheckCircle2 className="h-3 w-3" />,
                },
                { id: 'else', label: 'Else', tone: 'danger' },
              ]}
            />

            <FlowNodeCard
              tone="green"
              title="Send reply"
              icon={<BookOpen className="h-3.5 w-3.5" />}
              metaRows={[
                { key: 'reply', value: '{{kb_reply}}', mono: true },
                { key: 'source', value: '{{kb_source}}', mono: true },
              ]}
              outputs={[{ id: 'next', label: 'Done', tone: 'success' }]}
            />

            <FlowNodeCard
              tone="amber"
              title="Blog posts"
              metaRows={[
                { key: 'col', value: 'Website Post' },
                { key: 'model', value: 'gpt-4o', mono: true },
              ]}
              outputs={[
                { id: 'success', label: 'Success', tone: 'success' },
                { id: 'else', label: 'Else', tone: 'danger' },
              ]}
            />
          </div>
        </div>
      </ComponentDocPreview>

      <ComponentDocPreview
        title="FlowNodeToolbar 节点顶部紧凑悬浮微操作条"
        components={['FlowNodeToolbar']}
        description="悬停或选中画布节点时浮现的圆角白底紧凑微操作栏：内置 Tooltip 提示、激活/危险语义态、分组分割线，并默认阻断事件冒泡与附带 nodrag nopan 防止画布误拖拽。"
        onResetKnobs={() => {
          setToolbarOrientation('horizontal')
          setToolbarSize('sm')
          setToolbarVisible(true)
          setPinned(false)
        }}
        controls={
          <>
            <KnobSegmented
              label="orientation"
              value={toolbarOrientation}
              options={[
                { label: 'horizontal', value: 'horizontal' },
                { label: 'vertical', value: 'vertical' },
              ]}
              onChange={setToolbarOrientation}
            />
            <KnobSegmented
              label="size"
              value={toolbarSize}
              options={[
                { label: 'xs', value: 'xs' },
                { label: 'sm', value: 'sm' },
              ]}
              onChange={setToolbarSize}
            />
            <KnobSwitch label="visible" checked={toolbarVisible} onChange={setToolbarVisible} />
          </>
        }
        code={`import { FlowNodeToolbar } from '@abc-design/react'

<FlowNodeToolbar
  orientation="${toolbarOrientation}"
  size="${toolbarSize}"
  visible={${toolbarVisible}}
  items={[
    { key: 'run', label: '单步试运行', icon: <Play className="h-3.5 w-3.5" />, onClick: handleRun },
    { key: 'duplicate', label: '复制节点', icon: <Copy className="h-3.5 w-3.5" />, onClick: handleDup },
    { key: 'delete', label: '删除节点', danger: true, dividerBefore: true, icon: <Trash2 className="h-3.5 w-3.5" />, onClick: handleDelete },
  ]}
/>`}
        apiRows={[
          { prop: 'items', type: 'ReadonlyArray<FlowNodeToolbarItem>', required: true, description: '微操作图标项集合（key / icon / label / tooltip / active / danger / dividerBefore / disabled）' },
          { prop: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: '水平或垂直排列方向' },
          { prop: 'size', type: "'xs' | 'sm'", defaultValue: "'sm'", description: '图标按钮紧凑几何尺寸' },
          { prop: 'visible', type: 'boolean', defaultValue: 'true', description: '控制操作条显隐，便于直接绑定节点 selected / hovered 态' },
          { prop: 'tooltipPlacement', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'top'", description: '内置 ABC Tooltip 弹出方位' },
          { prop: 'stopPropagation', type: 'boolean', defaultValue: 'true', description: '阻止按钮点击与按下事件冒泡至画布节点' },
        ]}
      >
        <div className="space-y-4">
          <StatusTag tone="info" dot={false}>
            {lastToolbarAction}
          </StatusTag>

          <div className="flex flex-wrap items-center gap-10 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[radial-gradient(var(--abc-border)_1px,transparent_1px)] [background-size:14px_14px] bg-[var(--abc-bg-muted)]/40 px-6 pb-6 pt-12">
            <FlowNodeCard
              tone="blue"
              selected
              title="Attached Node Toolbar"
              metaRows={[{ key: 'hint', value: '悬停上方微操作条查看 Tooltip' }]}
              toolbar={
                <FlowNodeToolbar
                  orientation={toolbarOrientation}
                  size={toolbarSize}
                  visible={toolbarVisible}
                  tooltipPlacement={toolbarOrientation === 'vertical' ? 'right' : 'top'}
                  items={toolbarItems}
                />
              }
            />
          </div>
        </div>
      </ComponentDocPreview>
    </>
  )
}
