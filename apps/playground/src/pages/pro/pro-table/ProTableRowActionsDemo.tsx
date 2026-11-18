import React, { useState } from 'react'
import {
  Button,
  ProAdaptiveActionCell,
  ProRowActionsOverflow,
  StatusTag,
  abcToast,
  type ResolvedRowActionItem,
} from '@abc-design/react'
import { Eye, KeyRound, Lock, RefreshCw } from 'lucide-react'
import { ComponentDocPreview } from '../../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../../components/PropKnobs'

const WIDTH_PRESETS = [
  { label: '360px (宽列全展)', value: 360 },
  { label: '210px (展示前2项 + ...)', value: 210 },
  { label: '128px (展示首项 + ...)', value: 128 },
  { label: '52px (极限仅三个点)', value: 52 },
]

export const ProTableRowActionsDemo: React.FC = () => {
  const [cellWidth, setCellWidth] = useState<number>(210)
  const [maxInline, setMaxInline] = useState<number>(4)
  const [autoFit, setAutoFit] = useState<boolean>(true)
  const [lastTriggered, setLastTriggered] = useState<string>('调整列宽观察按钮自动折入三个点下拉菜单')

  const fire = (actionName: string) => {
    setLastTriggered(`已触发行操作：${actionName}`)
    abcToast.info(`执行操作：${actionName}`)
  }

  const declarativeActions: ResolvedRowActionItem[] = [
    { key: 'view', label: '检视', icon: <Eye className="h-3 w-3" />, onClick: () => fire('声明式 · 检视') },
    { key: 'rotate', label: '轮换密钥', icon: <KeyRound className="h-3 w-3" />, onClick: () => fire('声明式 · 轮换密钥') },
    { key: 'sync', label: '重同步', icon: <RefreshCw className="h-3 w-3" />, onClick: () => fire('声明式 · 重同步') },
    { key: 'freeze', label: '冻结节点', icon: <Lock className="h-3 w-3" />, danger: true, onClick: () => fire('声明式 · 冻结节点') },
  ]

  return (
    <ComponentDocPreview
      title="ProRowActionsOverflow & ProAdaptiveActionCell 操作列宽度自适应折叠"
      components={['ProRowActionsOverflow', 'ProAdaptiveActionCell']}
      description="基于 ResizeObserver 实时测量操作单元格可用像素与每个子按钮真实宽度：列宽充足时全量平铺内联展示（不渲染多余三个点），收窄时逐一收纳进 `...` 下拉菜单，极限窄列仅保留三个点触发器。"
      onResetKnobs={() => {
        setCellWidth(210)
        setMaxInline(4)
        setAutoFit(true)
      }}
      controls={
        <>
          <KnobSegmented label="模拟操作列像素宽度" value={cellWidth} options={WIDTH_PRESETS} onChange={setCellWidth} />
          <KnobSegmented
            label="maxInline"
            value={maxInline}
            options={[
              { label: '2', value: 2 },
              { label: '3', value: 3 },
              { label: '4', value: 4 },
            ]}
            onChange={setMaxInline}
          />
          <KnobSwitch label="autoFit (动态测宽)" checked={autoFit} onChange={setAutoFit} />
        </>
      }
      code={`import { Button, ProAdaptiveActionCell, ProRowActionsOverflow } from '@abc-design/react'

// 方式 A：配置式动作数组
<ProRowActionsOverflow
  actions={actions}
  maxInline={${maxInline}}
  autoFit={${autoFit}}
/>

// 方式 B：自动包裹自定义 JSX <Button> 子元素（ProTable 的 key="actions" 列已内置）
<ProAdaptiveActionCell maxInline={${maxInline}} autoFit={${autoFit}} align="right">
  <Button size="xs" variant="ghost">配额</Button>
  <Button size="xs" variant="ghost">吊销会话</Button>
  <Button size="xs" variant="ghost" className="text-red-600">强制下线</Button>
</ProAdaptiveActionCell>`}
      apiRows={[
        { prop: 'ProRowActionsOverflow.actions', type: 'ResolvedRowActionItem[]', required: true, description: '配置式操作按钮数组（支持 label、icon、danger、disabled、onClick）' },
        { prop: 'ProAdaptiveActionCell.children', type: 'ReactNode', required: true, description: '直接传入一组 <Button> 元素，自动拆包测宽并将溢出项转为 DropdownMenuItem' },
        { prop: 'autoFit / maxInline', type: 'boolean / number', defaultValue: 'true / N', description: '开启列宽实时探测及最多内联按钮上限' },
      ]}
    >
      <div className="space-y-4">
        <StatusTag tone="info" dot={false} className="font-mono">
          当前模拟列宽: {cellWidth}px · {lastTriggered}
        </StatusTag>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/50 p-3.5">
            <div className="text-xs font-semibold text-[var(--abc-fg)]">
              方式 A：ProRowActionsOverflow（配置式数组）
            </div>
            <div
              style={{ width: `${cellWidth}px`, maxWidth: '100%' }}
              className="rounded border border-dashed border-[var(--abc-primary)]/45 bg-[var(--abc-bg-surface)] px-2.5 py-2 transition-[width] duration-200"
            >
              <ProRowActionsOverflow
                actions={declarativeActions}
                maxInline={maxInline}
                autoFit={autoFit}
              />
            </div>
          </div>

          <div className="space-y-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/50 p-3.5">
            <div className="text-xs font-semibold text-[var(--abc-fg)]">
              方式 B：ProAdaptiveActionCell（自动拆包 JSX 按钮组）
            </div>
            <div
              style={{ width: `${cellWidth}px`, maxWidth: '100%' }}
              className="rounded border border-dashed border-[var(--abc-primary)]/45 bg-[var(--abc-bg-surface)] px-2.5 py-2 transition-[width] duration-200"
            >
              <ProAdaptiveActionCell maxInline={maxInline} align="left">
                <Button key="quota" size="xs" variant="ghost" onClick={() => fire('JSX · 配额调优')}>
                  配额调优
                </Button>
                <Button key="revoke" size="xs" variant="ghost" onClick={() => fire('JSX · 吊销登录态')}>
                  吊销登录态
                </Button>
                <Button
                  key="drop"
                  size="xs"
                  variant="ghost"
                  className="text-[var(--abc-danger)]"
                  onClick={() => fire('JSX · 强制下线')}
                >
                  强制下线
                </Button>
              </ProAdaptiveActionCell>
            </div>
          </div>
        </div>
      </div>
    </ComponentDocPreview>
  )
}
