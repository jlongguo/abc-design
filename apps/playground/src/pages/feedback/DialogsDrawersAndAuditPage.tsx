import React, { useState } from 'react'
import {
  Button,
  DescriptionList,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Drawer,
  DrawerBody,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  FormField,
  Input,
  PageContainer,
  Popover,
  ProFormContainer,
  StatusTag,
  Tooltip,
  abcToast,
  type AbcMotionPreset,
} from '@abc-design/react'
import { KeyRound, Layers } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSelect, KnobSwitch } from '../../components/PropKnobs'
import { AuditAndConfirmOverlaysSection } from './AuditAndConfirmOverlaysSection'
import { TemplateGalleryDemoSection } from './TemplateGalleryDemoSection'

const DRAWER_RECORDS = [
  { id: 'ORG-101', name: '星河跨境云', quota: '12,000 QPS', region: '上海金融区', tier: 'Enterprise' },
  { id: 'ORG-102', name: '深海智算中心', quota: '28,000 QPS', region: '北京核心区', tier: 'Dedicated' },
  { id: 'ORG-103', name: '极光零售数科', quota: '6,500 QPS', region: '新加坡可用区', tier: 'Pro' },
]

export const DialogsDrawersAndAuditPage: React.FC = () => {
  // 卡片 01: Dialog / Modal
  const [dialogOpen, setDialogOpen] = useState(false)
  const [compoundDialogOpen, setCompoundDialogOpen] = useState(false)
  const [dialogSize, setDialogSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')
  const [draggable, setDraggable] = useState(true)
  const [fullscreenable, setFullscreenable] = useState(true)
  const [dialogMotion, setDialogMotion] = useState<AbcMotionPreset>('smooth')

  // 卡片 02: Tooltip & Popover
  const [tooltipPlacement, setTooltipPlacement] = useState<'top' | 'bottom' | 'left' | 'right'>('top')
  const [popoverAlign, setPopoverAlign] = useState<'start' | 'end'>('start')

  // 卡片 03: Drawer (含新增 navigation 行切换 + L1->L2 cascade) & ProFormContainer
  const [drawerL1, setDrawerL1] = useState(false)
  const [drawerL2, setDrawerL2] = useState(false)
  const [drawerRowIdx, setDrawerRowIdx] = useState(0)
  const [enableDrawerNav, setEnableDrawerNav] = useState(true)
  const [drawerSize, setDrawerSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg')
  const [cascadeMode, setCascadeMode] = useState<'adjacent' | 'stack'>('adjacent')
  const [resizable, setResizable] = useState(true)
  const [formMode, setFormMode] = useState<'drawer' | 'modal'>('drawer')
  const [proFormOpen, setProFormOpen] = useState(false)
  const [poolName, setPoolName] = useState('prod-chromium-pool')

  const resolvedDialogSize = dialogSize === 'full' ? 'max-w-[96vw]' : dialogSize
  const activeDrawerRecord = DRAWER_RECORDS[drawerRowIdx] ?? DRAWER_RECORDS[0]

  return (
    <PageContainer
      title="模态框、浮层气泡、多级导航抽屉与强制审计"
      subtitle="按容器职责拆分为 5 组独立演练画布：Dialog 顶层模态框、Tooltip/Popover 气泡、带上下条切换的多级并排 Drawer、ConfirmDialog 与高危审计组件。"
      breadcrumbs={[{ label: '反馈、弹窗与安全审计' }, { label: '模态框、多级抽屉与审计' }]}
    >
      <div className="space-y-6">
        {/* 卡片 01: Dialog / Modal */}
        <ComponentDocPreview
          title="Dialog (别名 Modal) 原生 Top-Layer 可拖拽模态框"
          components={[
            'Dialog',
            'Modal',
            'DialogHeader',
            'DialogTitle',
            'DialogDescription',
            'DialogContent',
            'DialogFooter',
            'DialogContext',
          ]}
          description="基于原生 HTML <dialog> showModal() 实现焦点锁定与背景惰性隔离，遵循大小表单分流规范承载 1~3 个字段的轻量配置弹窗，同时兼容复合子组件组装。"
          controls={
            <>
              <KnobSegmented
                label="size"
                value={dialogSize}
                onChange={setDialogSize}
                options={[
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                  { label: 'xl', value: 'xl' },
                  { label: 'full', value: 'full' },
                ]}
              />
              <KnobSwitch label="draggable" checked={draggable} onChange={setDraggable} />
              <KnobSwitch label="fullscreenable" checked={fullscreenable} onChange={setFullscreenable} />
              <KnobSelect
                label="motion"
                value={dialogMotion}
                onChange={(v) => setDialogMotion(v as AbcMotionPreset)}
                options={[
                  { label: 'none', value: 'none' },
                  { label: 'subtle', value: 'subtle' },
                  { label: 'smooth', value: 'smooth' },
                  { label: 'spring', value: 'spring' },
                ]}
              />
            </>
          }
          onResetKnobs={() => {
            setDialogSize('md')
            setDraggable(true)
            setFullscreenable(true)
            setDialogMotion('smooth')
          }}
          code={`import { Button, Dialog, FormField, Input } from '@abc-design/react'

<Dialog
  open={open}
  onClose={() => setOpen(false)}
  size="${resolvedDialogSize}"
  draggable={${draggable}}
  fullscreenable={${fullscreenable}}
  motion="${dialogMotion}"
  title="快捷重命名配置"
>
  <FormField label="集群别名"><Input defaultValue="华东金融核心网关" /></FormField>
</Dialog>`}
          apiRows={[
            { prop: 'open / onClose / onOpenChange', type: 'boolean / () => void / (open) => void', description: '兼容 onClose 与 onOpenChange 双受控关闭协议' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'...'5xl' | string", defaultValue: "'md'", description: '预设弹窗宽度或自定义最大宽度类名' },
            { prop: 'draggable / fullscreenable', type: 'boolean', defaultValue: 'true / true', description: '按住标题栏拖拽位移与右上角全屏切换' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm" variant="primary" onClick={() => setDialogOpen(true)}>
              打开声明式 Dialog ({dialogSize})
            </Button>
            <Button size="sm" variant="secondary" onClick={() => setCompoundDialogOpen(true)}>
              打开复合子组件组装 Dialog
            </Button>
          </div>
          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            size={resolvedDialogSize}
            draggable={draggable}
            fullscreenable={fullscreenable}
            motion={dialogMotion}
            title={`快捷配置 Dialog (${dialogSize})`}
            description="支持标题栏拖拽与 ESC 安全关闭；内含 1~2 个轻量字段。"
            footer={
              <>
                <Button size="sm" variant="secondary" onClick={() => setDialogOpen(false)}>取消</Button>
                <Button size="sm" variant="primary" onClick={() => { setDialogOpen(false); abcToast.success('Dialog 表单已保存') }}>确认保存</Button>
              </>
            }
          >
            <div className="space-y-3">
              <FormField label="租户展示别名" required><Input defaultValue="华东金融核心网关" /></FormField>
              <FormField label="备注标签"><Input defaultValue="TLS 1.3 · 高可用专线" /></FormField>
            </div>
          </Dialog>

          <Dialog
            open={compoundDialogOpen}
            onClose={() => setCompoundDialogOpen(false)}
            size="sm"
            motion={dialogMotion}
          >
            <DialogContent onClose={() => setCompoundDialogOpen(false)} className="space-y-3">
              <DialogHeader>
                <DialogTitle>复合子组件组装模式 (Compound JSX)</DialogTitle>
                <DialogDescription>
                  通过 DialogHeader / DialogTitle / DialogDescription / DialogContent / DialogFooter 自定义内部骨架。
                </DialogDescription>
              </DialogHeader>
              <FormField label="Webhook 回调令牌备注">
                <Input defaultValue="prod-hmac-v2" />
              </FormField>
              <DialogFooter>
                <Button size="sm" variant="secondary" onClick={() => setCompoundDialogOpen(false)}>关闭</Button>
                <Button size="sm" variant="primary" onClick={() => { setCompoundDialogOpen(false); abcToast.info('复合 Dialog 已确认') }}>完成</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentDocPreview>

        {/* 卡片 02: Tooltip & Popover（独立卡片） */}
        <ComponentDocPreview
          title="Tooltip & Popover 视口边缘自适应提示与富交互气泡"
          components={['Tooltip', 'Popover']}
          description="Portal 顶层定位逃逸一切表格/卡片 overflow:hidden 裁切，遇视口边界自动翻转方位。"
          onResetKnobs={() => {
            setTooltipPlacement('top')
            setPopoverAlign('start')
          }}
          controls={
            <>
              <KnobSegmented
                label="Tooltip.placement"
                value={tooltipPlacement}
                onChange={setTooltipPlacement}
                options={[
                  { label: 'top', value: 'top' },
                  { label: 'bottom', value: 'bottom' },
                  { label: 'left', value: 'left' },
                  { label: 'right', value: 'right' },
                ]}
              />
              <KnobSegmented
                label="Popover.align"
                value={popoverAlign}
                onChange={setPopoverAlign}
                options={[
                  { label: 'start', value: 'start' },
                  { label: 'end', value: 'end' },
                ]}
              />
            </>
          }
          code={`import { Button, Popover, Tooltip } from '@abc-design/react'

<Tooltip placement="${tooltipPlacement}" content="视口边缘自适应提示">
  <Button variant="outline">悬停 Tooltip (${tooltipPlacement})</Button>
</Tooltip>

<Popover align="${popoverAlign}" title="配额说明" content="支持承载表单、链接或操作按钮。">
  <Button variant="secondary">点击展开 Popover (${popoverAlign})</Button>
</Popover>`}
          apiRows={[
            { prop: 'Tooltip.placement', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'top'", description: '首选弹出方位，遇视口边缘自动翻转' },
            { prop: 'Popover.align / title / content', type: "'start' | 'end' / ReactNode / ReactNode", description: '点击唤起的可交互气泡面板' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Tooltip placement={tooltipPlacement} content={`Tooltip 提示方向: ${tooltipPlacement}`}>
              <Button size="sm" variant="outline">悬停 / 聚焦 Tooltip ({tooltipPlacement})</Button>
            </Tooltip>
            <Popover
              align={popoverAlign}
              title="气泡卡片 (Popover)"
              content={
                <p className="text-xs text-[var(--abc-fg-secondary)]">
                  当前水平对齐策略：<code className="font-mono">{popoverAlign}</code>，支持嵌套在 Dialog 与 Drawer 内部正常浮出。
                </p>
              }
            >
              <Button size="sm" variant="secondary">点击展开 Popover ({popoverAlign})</Button>
            </Popover>
          </div>
        </ComponentDocPreview>

        {/* 卡片 03: Drawer (含新增顶栏 navigation 行切换 + L1 -> L2 并排级联) & ProFormContainer */}
        <ComponentDocPreview
          title="Drawer (多级并排级联 + 顶栏上下行切换) & ProFormContainer"
          components={[
            'Drawer',
            'DrawerHeader',
            'DrawerTitle',
            'DrawerDescription',
            'DrawerBody',
            'DrawerFooter',
            'ProFormContainer',
            'FormDrawerDialog',
          ]}
          description="大表单与台账详情首选容器：支持 cascadeMode='adjacent' 二级抽屉平级并排同屏比对、顶栏 navigation 上一条/下一条记录快速切换、badge 状态徽章及左边缘无级拖拽调宽。"
          controls={
            <>
              <KnobSegmented
                label="Drawer.size"
                value={drawerSize}
                onChange={setDrawerSize}
                options={[
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                  { label: 'xl', value: 'xl' },
                ]}
              />
              <KnobSegmented
                label="cascadeMode"
                value={cascadeMode}
                onChange={setCascadeMode}
                options={[
                  { label: 'adjacent (并排推荐)', value: 'adjacent' },
                  { label: 'stack (层叠)', value: 'stack' },
                ]}
              />
              <KnobSwitch label="navigation (上下条切换)" checked={enableDrawerNav} onChange={setEnableDrawerNav} />
              <KnobSwitch label="resizable" checked={resizable} onChange={setResizable} />
              <KnobSegmented
                label="ProFormContainer.mode"
                value={formMode}
                onChange={setFormMode}
                options={[
                  { label: 'drawer', value: 'drawer' },
                  { label: 'modal', value: 'modal' },
                ]}
              />
            </>
          }
          onResetKnobs={() => {
            setDrawerSize('lg')
            setCascadeMode('adjacent')
            setEnableDrawerNav(true)
            setResizable(true)
            setFormMode('drawer')
          }}
          code={`import { Drawer, ProFormContainer } from '@abc-design/react'

<Drawer
  open={l1}
  onClose={() => setL1(false)}
  size="${drawerSize}"
  cascadeMode="${cascadeMode}"
  resizable={${resizable}}
  title="组织详情与配额治理"
  badge={<StatusTag tone="primary">Enterprise</StatusTag>}${enableDrawerNav ? `\n  navigation={{ current: idx + 1, total: rows.length, onPrev, onNext }}` : ''}
>
  <Button onClick={() => setL2(true)}>展开二级抽屉 (L2) →</Button>
</Drawer>`}
          apiRows={[
            { prop: 'Drawer.cascadeMode', type: "'adjacent' | 'stack'", defaultValue: "'adjacent'", description: '打开 L2 子抽屉时平级向左并排展开或传统缩放堆叠' },
            { prop: 'Drawer.navigation', type: '{ current, total, onPrev, onNext }', description: '顶栏右侧渲染“1 / N”计数器与上一条/下一条切换按钮，免关抽屉翻阅台账' },
            { prop: 'Drawer.badge / headerActions', type: 'ReactNode / ReactNode', description: '标题旁状态徽标与顶栏扩展动作区' },
            { prop: 'ProFormContainer (FormDrawerDialog)', type: "mode?: 'drawer' | 'modal'", description: '常态渲染摘要条，点击按钮按 mode 唤起抽屉或弹窗表单' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                size="sm"
                variant="primary"
                leftIcon={<Layers className="h-3.5 w-3.5" />}
                onClick={() => setDrawerL1(true)}
              >
                打开一级详情抽屉 L1（体验顶栏上下条切换 + L2 并排展开）
              </Button>
            </div>

            <ProFormContainer
              title="资源池弹性调度配置 (ProFormContainer)"
              description="关闭状态下在页面展示只读摘要，点击右侧按钮按当前 mode 唤起表单。"
              triggerLabel={`打开 ProFormContainer (${formMode})`}
              mode={formMode}
              size={drawerSize}
              open={proFormOpen}
              onOpenChange={setProFormOpen}
              inlineInTestEnv={false}
              summarySlot={
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span>当前资源池：<code className="font-mono font-semibold">{poolName}</code></span>
                  <StatusTag tone="info">mode={formMode} · size={drawerSize}</StatusTag>
                </div>
              }
              footer={
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="outline" onClick={() => setProFormOpen(false)}>取消</Button>
                  <Button size="sm" variant="primary" onClick={() => { setProFormOpen(false); abcToast.success(`已保存 ${poolName}`) }}>保存配置</Button>
                </div>
              }
            >
              <FormField label="资源池标识" required>
                <Input value={poolName} onChange={(e) => setPoolName(e.target.value)} />
              </FormField>
            </ProFormContainer>
          </div>

          <Drawer
            open={drawerL1}
            onClose={() => {
              setDrawerL1(false)
              setDrawerL2(false)
            }}
            size={drawerSize}
            cascadeMode={cascadeMode}
            resizable={resizable}
            title={`${activeDrawerRecord.name} (一级抽屉 L1)`}
            badge={<StatusTag tone="primary" size="xs">{activeDrawerRecord.tier}</StatusTag>}
            description={`组织编号: ${activeDrawerRecord.id} · 级联模式: ${cascadeMode}`}
            navigation={
              enableDrawerNav
                ? {
                    current: drawerRowIdx + 1,
                    total: DRAWER_RECORDS.length,
                    onPrev: () => setDrawerRowIdx((i) => Math.max(0, i - 1)),
                    onNext: () => setDrawerRowIdx((i) => Math.min(DRAWER_RECORDS.length - 1, i + 1)),
                  }
                : undefined
            }
            footer={
              <div className="flex w-full justify-between">
                <Button size="sm" variant="outline" onClick={() => setDrawerL2(true)}>
                  打开二级关联凭证抽屉 (L2) →
                </Button>
                <Button size="sm" variant="primary" onClick={() => { setDrawerL1(false); setDrawerL2(false) }}>
                  完成关闭
                </Button>
              </div>
            }
          >
            <div className="space-y-4">
              <DescriptionList
                columns={2}
                variant="cards"
                items={[
                  { label: '组织 ID', value: activeDrawerRecord.id, mono: true },
                  { label: '归属可用区', value: activeDrawerRecord.region },
                  { label: '当前并发配额', value: activeDrawerRecord.quota },
                  { label: '套餐等级', value: activeDrawerRecord.tier },
                ]}
              />
              <FormField label="定制并发上限覆写">
                <Input key={activeDrawerRecord.id} defaultValue={activeDrawerRecord.quota} />
              </FormField>
              <Button
                size="sm"
                variant="secondary"
                block
                leftIcon={<KeyRound className="h-3.5 w-3.5" />}
                onClick={() => setDrawerL2(true)}
              >
                展开二级抽屉核对 Enclave 安全凭证 (L2) →
              </Button>
            </div>
          </Drawer>

          <Drawer
            open={drawerL2}
            onClose={() => setDrawerL2(false)}
            size="sm"
            cascadeMode={cascadeMode}
            resizable={resizable}
            aria-label="关联安全凭证详情"
            bodyClassName="flex flex-col p-0"
          >
            <DrawerHeader>
              <div>
                <DrawerTitle>关联安全凭证详情 (L2 · 复合槽位)</DrawerTitle>
                <DrawerDescription>
                  在 {cascadeMode} 模式下采用 DrawerHeader / DrawerBody / DrawerFooter 复合组装展开。
                </DrawerDescription>
              </div>
            </DrawerHeader>
            <DrawerBody>
              <DescriptionList
                columns={1}
                variant="cards"
                items={[
                  { label: '归属租户', value: activeDrawerRecord.name },
                  { label: '密钥指纹', value: 'SHA256:9f2c...81ab', copyValue: 'SHA256:9f2c4e1081ab' },
                  { label: '签发主体', value: 'CN=gateway-prod.internal' },
                ]}
              />
            </DrawerBody>
            <DrawerFooter>
              <Button size="sm" variant="primary" block onClick={() => setDrawerL2(false)}>
                返回 L1 主抽屉
              </Button>
            </DrawerFooter>
          </Drawer>
        </ComponentDocPreview>

        {/* 卡片 04 & 05: ConfirmDialog 与强制审计/一次性密钥 */}
        <AuditAndConfirmOverlaysSection />

        {/* 卡片 06: TemplateGalleryDrawer 拼音检索模板画廊抽屉 */}
        <TemplateGalleryDemoSection />
      </div>
    </PageContainer>
  )
}

export default DialogsDrawersAndAuditPage
