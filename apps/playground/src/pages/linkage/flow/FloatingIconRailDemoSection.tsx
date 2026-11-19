import React, { useMemo, useState } from 'react'
import {
  FloatingIconRail,
  type FloatingIconRailItem,
  type FloatingIconRailSide,
  type FloatingIconRailSize,
} from '@abc-design/flow'
import { StatusTag, abcToast } from '@abc-design/react'
import { Boxes, Cpu, GitBranch, Plug, Sparkles, Star } from 'lucide-react'
import { ComponentDocPreview } from '../../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../../components/PropKnobs'

const CATEGORY_CATALOG: Record<string, Array<{ id: string; name: string; desc: string }>> = {
  popular: [
    { id: 'trigger', name: 'Trigger Entry', desc: '流程入口与参数接收节点' },
    { id: 'http', name: 'HTTP Request', desc: '发送标准 REST 请求并捕获响应' },
    { id: 'branch', name: 'Condition Branch', desc: '按布尔表达式分流下游路径' },
  ],
  ai: [
    { id: 'llm', name: 'Model Prompt', desc: '构造系统提示词与模板变量插值' },
    { id: 'kb', name: 'Knowledge Lookup', desc: '检索文档库并输出命中/回退双出口' },
  ],
  flow: [
    { id: 'parallel', name: 'Parallel Fan-out', desc: '并发展开多个子分支任务' },
    { id: 'wait', name: 'Delay / Wait', desc: '按固定时长或外部事件恢复执行' },
  ],
  integrations: [
    { id: 'webhook', name: 'Webhook Notify', desc: '向外部协作或回调端点推送结果' },
    { id: 'storage', name: 'Artifact Sink', desc: '将结构化结果写入对象存储' },
  ],
  special: [
    { id: 'note', name: 'Section Frame', desc: '在画布中添加虚线视觉分组注释' },
  ],
}

export const FloatingIconRailDemoSection: React.FC = () => {
  const [side, setSide] = useState<FloatingIconRailSide>('left')
  const [size, setSize] = useState<FloatingIconRailSize>('md')
  const [showFlyoutHeader, setShowFlyoutHeader] = useState(true)
  const [closeOnOutsideClick, setCloseOnOutsideClick] = useState(true)
  const [activeKey, setActiveKey] = useState<string | null>('popular')
  const [lastPicked, setLastPicked] = useState<string>('点击左侧类目图标展开 Flyout 并选择节点')

  const railItems = useMemo<FloatingIconRailItem[]>(
    () => [
      { key: 'popular', label: 'Most used', icon: <Star className="h-4 w-4" /> },
      { key: 'ai', label: 'AI', icon: <Cpu className="h-4 w-4" />, badge: 2 },
      { key: 'flow', label: 'Flow', icon: <GitBranch className="h-4 w-4" /> },
      { key: 'integrations', label: 'Connect', icon: <Plug className="h-4 w-4" /> },
      { key: 'special', label: 'Special', icon: <Sparkles className="h-4 w-4" /> },
    ],
    []
  )

  return (
    <ComponentDocPreview
      title="FloatingIconRail 悬浮图标细条与按需 Flyout 浮层"
      components={['FloatingIconRail']}
      description="面向可视化画布与低代码编排器的极简圆角白底垂直类目细条：点击类目按需滑出轻量 Flyout 面板，再次点击、按 Esc 或点击外部自动收起，支持左右停靠与自定义头部/底栏插槽。"
      onResetKnobs={() => {
        setSide('left')
        setSize('md')
        setShowFlyoutHeader(true)
        setCloseOnOutsideClick(true)
        setActiveKey('popular')
      }}
      controls={
        <>
          <KnobSegmented
            label="side"
            value={side}
            options={[
              { label: 'left', value: 'left' },
              { label: 'right', value: 'right' },
            ]}
            onChange={setSide}
          />
          <KnobSegmented
            label="size"
            value={size}
            options={[
              { label: 'sm', value: 'sm' },
              { label: 'md', value: 'md' },
            ]}
            onChange={setSize}
          />
          <KnobSwitch
            label="showFlyoutHeader"
            checked={showFlyoutHeader}
            onChange={setShowFlyoutHeader}
          />
          <KnobSwitch
            label="closeOnOutsideClick"
            checked={closeOnOutsideClick}
            onChange={setCloseOnOutsideClick}
          />
        </>
      }
      code={`import { FloatingIconRail } from '@abc-design/flow'

<FloatingIconRail
  items={railItems}
  side="${side}"
  size="${size}"
  activeKey={activeKey}
  onActiveKeyChange={setActiveKey}
  showFlyoutHeader={${showFlyoutHeader}}
  closeOnOutsideClick={${closeOnOutsideClick}}
  flyoutWidth={256}
  renderFlyout={(item, { close }) => (
    <MyPaletteList category={item.key} onPick={() => close()} />
  )}
/>`}
      apiRows={[
        { prop: 'items', type: 'ReadonlyArray<FloatingIconRailItem>', required: true, description: '垂直类目项列表（key / label / icon / badge / disabled / content）' },
        { prop: 'activeKey / defaultActiveKey', type: 'string | null', defaultValue: 'null', description: '受控或非受控当前展开类目 key，null 表示收起 Flyout' },
        { prop: 'onActiveKeyChange', type: '(key: string | null) => void', description: '切换或收起类目时的受控回调' },
        { prop: 'renderFlyout', type: '(item, { close }) => ReactNode', description: '按需渲染当前激活类目的 Flyout 内容插槽（优先于 item.content）' },
        { prop: 'side / size', type: "'left' | 'right' / 'sm' | 'md'", defaultValue: "'left' / 'md'", description: '停靠方位（决定 Flyout 滑出方向）与图标细条紧凑档位' },
        { prop: 'showFlyoutHeader / flyoutWidth', type: 'boolean / number | string', defaultValue: 'true / 264', description: '是否展示内置标题关闭头及 Flyout 浮层宽度' },
        { prop: 'closeOnOutsideClick / closeOnEscape', type: 'boolean / boolean', defaultValue: 'true / true', description: '点击外部区域或按 Escape 键自动收起 Flyout' },
      ]}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <StatusTag tone="info" dot={false}>
            {lastPicked}
          </StatusTag>
          <span className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
            activeKey: {activeKey ?? 'null'}
          </span>
        </div>

        <div
          className={`relative flex min-h-[290px] w-full items-start rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[radial-gradient(var(--abc-border)_1px,transparent_1px)] [background-size:14px_14px] bg-[var(--abc-bg-muted)]/45 p-4 ${
            side === 'right' ? 'justify-end' : 'justify-start'
          }`}
        >
          <FloatingIconRail
            items={railItems}
            side={side}
            size={size}
            activeKey={activeKey}
            onActiveKeyChange={setActiveKey}
            showFlyoutHeader={showFlyoutHeader}
            closeOnOutsideClick={closeOnOutsideClick}
            flyoutWidth={256}
            renderFlyout={(item, { close }) => {
              const entries = CATEGORY_CATALOG[item.key] ?? []
              return (
                <div className="space-y-1.5">
                  {entries.map((entry) => (
                    <button
                      key={entry.id}
                      type="button"
                      onClick={() => {
                        setLastPicked(`已从 [${String(item.label)}] 选中：${entry.name}`)
                        abcToast.info(`已选择画布原语：${entry.name}`)
                        close()
                      }}
                      className="flex w-full cursor-pointer items-start gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-2 text-left transition-colors hover:border-[var(--abc-primary)]/60 hover:bg-[var(--abc-primary-soft)]/40"
                    >
                      <Boxes className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-primary)]" />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-xs font-medium text-[var(--abc-fg)]">
                          {entry.name}
                        </div>
                        <div className="truncate text-[11px] text-[var(--abc-fg-muted)]">
                          {entry.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )
            }}
          />
        </div>
      </div>
    </ComponentDocPreview>
  )
}
