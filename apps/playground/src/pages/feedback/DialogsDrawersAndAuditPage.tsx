import React, { useState } from 'react'
import {
  Button,
  ConfirmDialog,
  DescriptionList,
  Dialog,
  Drawer,
  FormField,
  Input,
  OneTimeSecretDialog,
  PageContainer,
  Popover,
  ProFormContainer,
  ReasonedActionDialog,
  ReasonedActionDrawer,
  StatusTag,
  Tooltip,
  abcConfirm,
  abcToast,
  useConfirm,
  type AbcMotionPreset,
} from '@abc-design/react'
import { KeyRound, Layers, ShieldAlert } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSelect, KnobSwitch, KnobText } from '../../components/PropKnobs'

export const DialogsDrawersAndAuditPage: React.FC = () => {
  const confirmHook = useConfirm()

  // 卡片 1: Dialog + Tooltip + Popover
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogSize, setDialogSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')
  const [draggable, setDraggable] = useState(true)
  const [fullscreenable, setFullscreenable] = useState(true)
  const [dialogMotion, setDialogMotion] = useState<AbcMotionPreset>('smooth')
  const [tooltipPlacement, setTooltipPlacement] = useState<'top' | 'bottom' | 'left' | 'right'>('top')
  const [popoverAlign, setPopoverAlign] = useState<'start' | 'end'>('start')

  // 卡片 2: Drawer (L1 -> L2) & ProFormContainer
  const [drawerL1, setDrawerL1] = useState(false)
  const [drawerL2, setDrawerL2] = useState(false)
  const [drawerSize, setDrawerSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg')
  const [cascadeMode, setCascadeMode] = useState<'adjacent' | 'stack'>('adjacent')
  const [resizable, setResizable] = useState(true)
  const [formMode, setFormMode] = useState<'drawer' | 'modal'>('drawer')
  const [proFormOpen, setProFormOpen] = useState(false)
  const [poolName, setPoolName] = useState('prod-chromium-pool')

  // 卡片 3: 安全二次确认、强制审计原因与一次性密钥
  const [destructive, setDestructive] = useState(true)
  const [minReasonLength, setMinReasonLength] = useState<4 | 8 | 16>(8)
  const [simulatePending, setSimulatePending] = useState(false)
  const [simulateError, setSimulateError] = useState(false)
  const [secretValue, setSecretValue] = useState('sk_live_abc_9812736450abcdef')
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [reasonDialogOpen, setReasonDialogOpen] = useState(false)
  const [reasonDrawerOpen, setReasonDrawerOpen] = useState(false)
  const [secretOpen, setSecretOpen] = useState(false)
  const [auditReceipt, setAuditReceipt] = useState('尚未执行确认或审计提交')

  const auditError = simulateError ? '风控拦截：当前集群尚有 3 个活跃会话，请先完成排空。' : null
  const resolvedDialogSize = dialogSize === 'full' ? 'max-w-[96vw]' : dialogSize

  const card1Code = `import { Button, Dialog, Popover, Tooltip } from '@abc-design/react'

<Tooltip placement="${tooltipPlacement}" content="视口边缘自适应提示">
  <Button variant="outline">Tooltip (${tooltipPlacement})</Button>
</Tooltip>
<Popover align="${popoverAlign}" title="配额说明" content="支持富交互浮层内容。">
  <Button variant="secondary">Popover (${popoverAlign})</Button>
</Popover>
<Dialog open={open} onClose={() => setOpen(false)} size="${resolvedDialogSize}" draggable={${draggable}} fullscreenable={${fullscreenable}} motion="${dialogMotion}" title="快捷配置">
  <FormField label="集群别名"><Input defaultValue="华东金融专线" /></FormField>
</Dialog>`

  const card2Code = `import { Drawer, ProFormContainer } from '@abc-design/react'

<Drawer open={l1} onClose={() => setL1(false)} size="${drawerSize}" cascadeMode="${cascadeMode}" resizable={${resizable}} title="一级大表单 (L1)">
  <Button onClick={() => setL2(true)}>展开二级抽屉 (L2) →</Button>
</Drawer>
<Drawer open={l2} onClose={() => setL2(false)} size="sm" cascadeMode="${cascadeMode}" resizable={${resizable}} title="二级关联凭证 (L2)" />
<ProFormContainer mode="${formMode}" size="${drawerSize}" title="资源池策略" triggerLabel="打开 ProFormContainer" open={open} onOpenChange={setOpen}>
  <Input label="资源池标识" value="${poolName}" />
</ProFormContainer>`

  const card3Code = `import { ConfirmDialog, OneTimeSecretDialog, ReasonedActionDialog, ReasonedActionDrawer, abcConfirm, useConfirm } from '@abc-design/react'

const confirm = useConfirm()
await abcConfirm({ title: '确认操作', tone: '${destructive ? 'danger' : 'primary'}' })

<ConfirmDialog open={cOpen} variant="${destructive ? 'destructive' : 'default'}" loading={${simulatePending}} title="确认吊销证书？" onCancel={close} onConfirm={submit} />
<ReasonedActionDialog open={rOpen} destructive={${destructive}} minReasonLength={${minReasonLength}} pending={${simulatePending}} error={${simulateError ? `'${auditError}'` : 'null'}} title="强制审计确认" description="变更将写入审计日志" confirmLabel="提交审批" onOpenChange={setROpen} onConfirm={submit} />
<ReasonedActionDrawer open={dOpen} onClose={close} destructive={${destructive}} minReasonLength={${minReasonLength}} pending={${simulatePending}} error={${simulateError ? `'${auditError}'` : 'null'}} title="批量配额调整审计" confirmLabel="下发变更" onConfirm={submit} />
<OneTimeSecretDialog open={sOpen} title="专网访问密钥已签发" secretValue="${secretValue}" onClose={close} />`

  return (
    <PageContainer
      title="抽屉、模态框、密钥与强制审计"
      subtitle="遵循《大小表单容器分流规范》：小表单使用居中 Dialog，大表单与多级嵌套使用可调宽 Drawer，高危操作接入强制审计与一次性密钥弹窗"
    >
      <div className="space-y-5">
        {/* 卡片 1: Dialog + Tooltip + Popover */}
        <ComponentDocPreview
          title="Dialog + Tooltip + Popover 顶层模态框与视口感知浮层"
          components={['Dialog', 'Tooltip', 'Popover']}
          description="原生 HTML <dialog> showModal() 实现焦点锁定与惰性背景隔离，支持标题栏拖拽、全屏切换及嵌套顶层 Tooltip / Popover。"
          controls={
            <>
              <KnobSegmented
                label="Dialog.size"
                value={dialogSize}
                onChange={setDialogSize}
                options={[{ label: 'sm', value: 'sm' }, { label: 'md', value: 'md' }, { label: 'lg', value: 'lg' }, { label: 'xl', value: 'xl' }, { label: 'full', value: 'full' }]}
              />
              <KnobSwitch label="draggable" checked={draggable} onChange={setDraggable} />
              <KnobSwitch label="fullscreenable" checked={fullscreenable} onChange={setFullscreenable} />
              <KnobSelect
                label="motion"
                value={dialogMotion}
                onChange={(v) => setDialogMotion(v as AbcMotionPreset)}
                options={[{ label: 'none', value: 'none' }, { label: 'subtle', value: 'subtle' }, { label: 'smooth', value: 'smooth' }, { label: 'spring', value: 'spring' }]}
              />
              <KnobSegmented
                label="Tooltip.placement"
                value={tooltipPlacement}
                onChange={setTooltipPlacement}
                options={[{ label: 'top', value: 'top' }, { label: 'bottom', value: 'bottom' }, { label: 'left', value: 'left' }, { label: 'right', value: 'right' }]}
              />
              <KnobSegmented
                label="Popover.align"
                value={popoverAlign}
                onChange={setPopoverAlign}
                options={[{ label: 'start', value: 'start' }, { label: 'end', value: 'end' }]}
              />
            </>
          }
          onResetKnobs={() => {
            setDialogSize('md'); setDraggable(true); setFullscreenable(true)
            setDialogMotion('smooth'); setTooltipPlacement('top'); setPopoverAlign('start')
          }}
          code={card1Code}
          apiRows={[
            { prop: 'Dialog.size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'...'5xl' | string", defaultValue: "'md'", description: '预设弹窗宽度或自定义最大宽度类名' },
            { prop: 'Dialog.draggable / fullscreenable', type: 'boolean', defaultValue: 'true / true', description: '按住标题栏拖拽位移与右上角全屏切换' },
            { prop: 'Dialog.motion', type: "'none' | 'subtle' | 'smooth' | 'spring'", defaultValue: "'smooth'", description: '面板缩放淡入物理动效预设' },
            { prop: 'Tooltip.placement', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'top'", description: '首选弹出方位，遇视口边缘自动翻转' },
            { prop: 'Popover.align', type: "'left' | 'right' | 'start' | 'end'", defaultValue: "'start'", description: '气泡面板相对触发器的水平对齐基准' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm" variant="primary" onClick={() => setDialogOpen(true)}>打开 Dialog ({dialogSize})</Button>
            <Tooltip placement={tooltipPlacement} content={`Tooltip 提示方向: ${tooltipPlacement}`}>
              <Button size="sm" variant="outline">悬停 / 聚焦 Tooltip ({tooltipPlacement})</Button>
            </Tooltip>
            <Popover
              align={popoverAlign}
              title="气泡卡片 (Popover)"
              content={<p className="text-xs text-[var(--abc-fg-secondary)]">当前水平对齐策略：<code className="font-mono">{popoverAlign}</code>，支持逃逸 overflow 裁切。</p>}
            >
              <Button size="sm" variant="secondary">点击展开 Popover ({popoverAlign})</Button>
            </Popover>
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
        </ComponentDocPreview>

        {/* 卡片 2: Drawer (L1 -> L2) & ProFormContainer */}
        <ComponentDocPreview
          title="Drawer (L1 → L2 多级抽屉) & ProFormContainer 表单容器"
          components={['Drawer', 'ProFormContainer']}
          description="Drawer 支持平级并排展开 (adjacent) 或层叠推挤 (stack) 与边缘拖拽调宽；ProFormContainer 在抽屉与居中弹窗间一键切换。"
          controls={
            <>
              <KnobSegmented
                label="Drawer.size"
                value={drawerSize}
                onChange={setDrawerSize}
                options={[{ label: 'sm', value: 'sm' }, { label: 'md', value: 'md' }, { label: 'lg', value: 'lg' }, { label: 'xl', value: 'xl' }]}
              />
              <KnobSegmented
                label="cascadeMode"
                value={cascadeMode}
                onChange={setCascadeMode}
                options={[{ label: 'adjacent (并排)', value: 'adjacent' }, { label: 'stack (层叠)', value: 'stack' }]}
              />
              <KnobSwitch label="resizable" checked={resizable} onChange={setResizable} />
              <KnobSegmented
                label="ProFormContainer.mode"
                value={formMode}
                onChange={setFormMode}
                options={[{ label: 'drawer', value: 'drawer' }, { label: 'modal', value: 'modal' }]}
              />
            </>
          }
          onResetKnobs={() => { setDrawerSize('lg'); setCascadeMode('adjacent'); setResizable(true); setFormMode('drawer') }}
          code={card2Code}
          apiRows={[
            { prop: 'Drawer.size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", defaultValue: "'md'", description: '抽屉默认像素宽度档位' },
            { prop: 'Drawer.cascadeMode', type: "'adjacent' | 'stack'", defaultValue: "'adjacent'", description: '多级子抽屉打开时平级并排比对或向左层叠缩放' },
            { prop: 'Drawer.resizable', type: 'boolean', defaultValue: 'true', description: '是否启用边缘无级拖拽调宽手柄' },
            { prop: 'ProFormContainer.mode', type: "'drawer' | 'modal'", defaultValue: "'modal'", description: '切换表单承载容器为全高抽屉或居中弹窗' },
          ]}
        >
          <div className="space-y-4">
            <Button size="sm" variant="primary" leftIcon={<Layers className="h-3.5 w-3.5" />} onClick={() => setDrawerL1(true)}>
              打开一级抽屉 L1 ({drawerSize} · {cascadeMode})
            </Button>
            <ProFormContainer
              title="资源池弹性调度配置"
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
              <FormField label="资源池标识" required><Input value={poolName} onChange={(e) => setPoolName(e.target.value)} /></FormField>
            </ProFormContainer>
          </div>
          <Drawer
            open={drawerL1}
            onClose={() => setDrawerL1(false)}
            size={drawerSize}
            cascadeMode={cascadeMode}
            resizable={resizable}
            title="集群配额配置 (一级抽屉 L1)"
            description={`级联模式: ${cascadeMode} · 边缘调宽: ${resizable ? '开启' : '关闭'}`}
            footer={
              <div className="flex w-full justify-between">
                <Button size="sm" variant="outline" onClick={() => setDrawerL2(true)}>打开二级抽屉 (L2) →</Button>
                <Button size="sm" variant="primary" onClick={() => { setDrawerL1(false); setDrawerL2(false) }}>完成关闭</Button>
              </div>
            }
          >
            <div className="space-y-3">
              <FormField label="并发上限 (QPS)"><Input defaultValue="12,000" /></FormField>
              <Button size="sm" variant="outline" block leftIcon={<KeyRound className="h-3.5 w-3.5" />} onClick={() => setDrawerL2(true)}>
                打开关联安全凭证 (L2 子抽屉) →
              </Button>
            </div>
          </Drawer>
          <Drawer
            open={drawerL2}
            onClose={() => setDrawerL2(false)}
            size="sm"
            cascadeMode={cascadeMode}
            resizable={resizable}
            title="关联安全凭证详情 (L2)"
            description="在 adjacent 模式下可与 L1 表单并排同屏比对。"
            footer={<Button size="sm" variant="primary" block onClick={() => setDrawerL2(false)}>返回 L1</Button>}
          >
            <DescriptionList
              columns={1}
              variant="cards"
              items={[{ label: '密钥指纹', value: 'SHA256:9f2c...81ab', copyValue: 'SHA256:9f2c4e1081ab' }, { label: '签发主体', value: 'CN=gateway-prod.internal' }]}
            />
          </Drawer>
        </ComponentDocPreview>

        {/* 卡片 3: ConfirmDialog / useConfirm / abcConfirm / ReasonedAction* / OneTimeSecretDialog */}
        <ComponentDocPreview
          title="安全确认、强制审计原因与一次性密钥弹窗"
          components={['ConfirmDialog', 'useConfirm', 'abcConfirm', 'ReasonedActionDialog', 'ReasonedActionDrawer', 'OneTimeSecretDialog']}
          description="覆盖结构化二次确认、Promise 命令式确认、强制填写最小字数审计理由的弹窗/抽屉，以及防二次查阅的一次性密钥下发弹窗。"
          controls={
            <>
              <KnobSwitch label="destructive" checked={destructive} onChange={setDestructive} />
              <KnobSegmented label="minReasonLength" value={minReasonLength} onChange={setMinReasonLength} options={[{ label: '4', value: 4 }, { label: '8', value: 8 }, { label: '16', value: 16 }]} />
              <KnobSwitch label="simulatePending" checked={simulatePending} onChange={setSimulatePending} />
              <KnobSwitch label="simulateError" checked={simulateError} onChange={setSimulateError} />
              <KnobText label="secretValue" value={secretValue} onChange={setSecretValue} placeholder="一次性密钥文本" />
            </>
          }
          onResetKnobs={() => {
            setDestructive(true); setMinReasonLength(8); setSimulatePending(false); setSimulateError(false)
            setSecretValue('sk_live_abc_9812736450abcdef'); setAuditReceipt('尚未执行确认或审计提交')
          }}
          code={card3Code}
          apiRows={[
            { prop: 'ConfirmDialog.variant', type: "'default' | 'destructive'", defaultValue: "'default'", description: '破坏性操作切换红色告警样式与按钮' },
            { prop: 'useConfirm / abcConfirm', type: '(opts: ConfirmOptions) => Promise<boolean>', description: 'Promise 异步命令式二次确认框' },
            { prop: 'ReasonedAction*.minReasonLength', type: 'number', defaultValue: '8', description: '审计原因最小有效字符门槛，未达标禁用提交' },
            { prop: 'ReasonedAction*.pending / error', type: 'boolean / string | null', description: '提交加载锁定态与内置顶部错误横幅' },
            { prop: 'OneTimeSecretDialog.secretValue', type: 'string | null', description: '一次性明文凭证内容，内置一键复制与备份警示' },
          ]}
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm" variant={destructive ? 'danger' : 'primary'} onClick={() => setConfirmOpen(true)}>ConfirmDialog</Button>
              <Button size="sm" variant="outline" onClick={async () => { const ok = await confirmHook({ title: 'useConfirm 确认执行', message: '通过 Hook 唤起全局确认框。', tone: destructive ? 'danger' : 'primary' }); setAuditReceipt(`useConfirm 返回: ${ok ? '已确认' : '已取消'}`) }}>
                useConfirm()
              </Button>
              <Button size="sm" variant="outline" onClick={async () => { const ok = await abcConfirm({ title: 'abcConfirm 命令式确认', message: '确认立即触发网关热重载吗？', tone: destructive ? 'danger' : 'primary' }); setAuditReceipt(`abcConfirm 返回: ${ok ? '已确认' : '已取消'}`) }}>
                abcConfirm()
              </Button>
              <Button size="sm" variant="secondary" leftIcon={<ShieldAlert className="h-3.5 w-3.5" />} onClick={() => setReasonDialogOpen(true)}>ReasonedActionDialog</Button>
              <Button size="sm" variant="secondary" onClick={() => setReasonDrawerOpen(true)}>ReasonedActionDrawer</Button>
              <Button size="sm" variant="outline" leftIcon={<KeyRound className="h-3.5 w-3.5" />} onClick={() => setSecretOpen(true)}>OneTimeSecretDialog</Button>
            </div>
            <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs text-[var(--abc-fg-secondary)]">
              演练回执：<strong className="font-mono text-[var(--abc-fg)]">{auditReceipt}</strong>
            </div>
          </div>

          <ConfirmDialog
            open={confirmOpen}
            title="确认下线目标执行节点？"
            description="下线后将拒绝新任务调度并释放关联弹性公网 IP。"
            variant={destructive ? 'destructive' : 'default'}
            loading={simulatePending}
            confirmLabel="确认执行"
            onCancel={() => { setConfirmOpen(false); setAuditReceipt('ConfirmDialog 已取消') }}
            onConfirm={() => { setConfirmOpen(false); setAuditReceipt('ConfirmDialog 已确认执行'); abcToast.success('ConfirmDialog 操作已提交') }}
          />
          <ReasonedActionDialog
            open={reasonDialogOpen}
            onOpenChange={setReasonDialogOpen}
            title="强制审计：吊销专网访问令牌"
            description="高危控制面变更必须填写审计理由，系统将永久留存操作人与原因摘要。"
            confirmLabel="确认吊销"
            destructive={destructive}
            minReasonLength={minReasonLength}
            reasonLabel="审计原因"
            reasonHint={`至少 ${minReasonLength} 个字符（当前门槛: ${minReasonLength}）`}
            pending={simulatePending}
            error={auditError}
            onConfirm={(reason) => { setReasonDialogOpen(false); setAuditReceipt(`ReasonedActionDialog 提交成功 · 理由: "${reason}"`); abcToast.success('审计操作已提交') }}
          />
          <ReasonedActionDrawer
            open={reasonDrawerOpen}
            onClose={() => setReasonDrawerOpen(false)}
            title="强制审计抽屉：批量调整租户配额"
            description="适用于附带较多变更说明或上下文清单的高安全级别操作。"
            confirmLabel="确认下发变更"
            destructive={destructive}
            minReasonLength={minReasonLength}
            reasonLabel="审批审计备注"
            reasonHint={`至少 ${minReasonLength} 个字符，记录将写入操作审计表。`}
            pending={simulatePending}
            error={auditError}
            cascadeMode="adjacent"
            onConfirm={(reason) => { setReasonDrawerOpen(false); setAuditReceipt(`ReasonedActionDrawer 提交成功 · 理由: "${reason}"`); abcToast.success('抽屉审计已提交') }}
          />
          <OneTimeSecretDialog
            open={secretOpen}
            title="专网 API 访问密钥已生成"
            secretValue={secretValue || 'sk_live_abc_fallback'}
            metadata={[{ label: '所属项目', value: 'ABC Design Control Plane' }, { label: '作用域', value: 'cluster:admin' }]}
            onClose={() => { setSecretOpen(false); setAuditReceipt('OneTimeSecretDialog 已关闭确认备份') }}
          />
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
