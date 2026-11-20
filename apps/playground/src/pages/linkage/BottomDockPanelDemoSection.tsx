import React, { useState } from 'react'
import { BottomDockPanel, Badge, JsonTreeViewer, ProLogViewer, StatusTag } from '@abc-design/react'
import { Terminal, Database, Activity } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSwitch } from '../../components/PropKnobs'

const DEMO_LOGS = [
  { seq: 1, level: 'info', message: 'Step #1 goto https://example.com -> 200 OK (312ms)' },
  { seq: 2, level: 'info', message: 'Step #2 wait_for_selector [data-ready] matched in 48ms' },
  { seq: 3, level: 'warn', message: '3rd-party font request blocked by egress policy' },
  { seq: 4, level: 'info', message: 'Step #3 extract_list captured 12 structured records' },
]

const DEMO_RESULT = {
  job_id: 'job_01j9x7demo',
  status: 'completed',
  records: [
    { name: 'Starter', price: '$19/mo', concurrency: 5 },
    { name: 'Pro', price: '$79/mo', concurrency: 25 },
  ],
}

export const BottomDockPanelDemoSection: React.FC = () => {
  const [open, setOpen] = useState(true)
  const [tab, setTab] = useState<'logs' | 'data'>('logs')
  const [defaultHeight, setDefaultHeight] = useState(240)
  const [allowTallToggle, setAllowTallToggle] = useState(true)

  return (
    <ComponentDocPreview
      title="BottomDockPanel DevTools 风格底部可拖拽停靠坞"
      components={['BottomDockPanel']}
      description="支持顶部手柄鼠标拖拽与键盘 ArrowUp/ArrowDown/Enter 调高、高视图/标准高度一键切换、单行吸底折叠与内置选项卡。"
      controls={
        <>
          <KnobSwitch label="open" checked={open} onChange={setOpen} />
          <KnobNumber label="defaultHeight" value={defaultHeight} onChange={setDefaultHeight} min={180} max={360} step={20} />
          <KnobSwitch label="allowTallToggle" checked={allowTallToggle} onChange={setAllowTallToggle} />
        </>
      }
      onResetKnobs={() => {
        setOpen(true)
        setTab('logs')
        setDefaultHeight(240)
        setAllowTallToggle(true)
      }}
      code={`<BottomDockPanel
  open={${open}}
  onOpenChange={setOpen}
  defaultHeight={${defaultHeight}}
  allowTallToggle={${allowTallToggle}}
  title="执行调试坞"
  activeTab="${tab}"
  onTabChange={setTab}
  tabs={[
    { value: 'logs', label: '运行日志' },
    { value: 'data', label: '结构化结果' },
  ]}
>
  {/* Tab 内容 */}
</BottomDockPanel>`}
      apiRows={[
        { prop: 'open / onOpenChange', type: 'boolean / (open: boolean) => void', description: '受控展开与收起状态' },
        { prop: 'defaultHeight / minHeight / maxHeight', type: 'number', defaultValue: '320 / 160 / 680', description: '默认高度与拖拽限幅范围（px）' },
        { prop: 'tabs / activeTab / onTabChange', type: 'BottomDockTab[] / T / (tab: T) => void', description: '内置顶栏 SegmentedControl 选项卡切换（折叠态点击自动展开）' },
        { prop: 'storageKey', type: 'string', description: '可选 localStorage 持久化记忆高度键' },
      ]}
    >
      <div className="flex h-[360px] flex-col overflow-hidden rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]">
        <div className="flex flex-1 items-center justify-center p-4 text-xs text-[var(--abc-fg-muted)]">
          主工作区舞台（尝试拖动下方停靠坞顶边、按方向键或点击“高视图 / 收起面板”）
        </div>
        <BottomDockPanel
          key={defaultHeight}
          open={open}
          onOpenChange={setOpen}
          defaultHeight={defaultHeight}
          minHeight={150}
          maxHeight={300}
          tallHeight={290}
          allowTallToggle={allowTallToggle}
          title={
            <span className="inline-flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-[var(--abc-primary)]" aria-hidden="true" />
              <span>执行调试坞</span>
            </span>
          }
          statusSlot={<StatusTag tone="success" size="xs">Completed · 412ms</StatusTag>}
          activeTab={tab}
          onTabChange={setTab}
          tabs={[
            {
              value: 'logs',
              label: '运行日志',
              icon: <Terminal className="h-3 w-3" aria-hidden="true" />,
              badge: <Badge size="xs" variant="neutral">{DEMO_LOGS.length}</Badge>,
            },
            {
              value: 'data',
              label: '结构化结果',
              icon: <Database className="h-3 w-3" aria-hidden="true" />,
            },
          ]}
        >
          <div className="p-3">
            {tab === 'logs' ? (
              <ProLogViewer variant="surface" logs={DEMO_LOGS} heightClass="h-[150px]" />
            ) : (
              <JsonTreeViewer data={DEMO_RESULT} size="xs" defaultExpandDepth={3} />
            )}
          </div>
        </BottomDockPanel>
      </div>
    </ComponentDocPreview>
  )
}
