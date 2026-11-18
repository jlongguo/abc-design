import React, { useState } from 'react'
import {
  Button,
  ConfirmDialog,
  OneTimeSecretDialog,
  ReasonedActionDialog,
  ReasonedActionDrawer,
  abcConfirm,
  abcToast,
  useConfirm,
} from '@abc-design/react'
import { KeyRound, ShieldAlert } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch, KnobText } from '../../components/PropKnobs'

export const AuditAndConfirmOverlaysSection: React.FC = () => {
  const confirmHook = useConfirm()

  // Card 04: ConfirmDialog / useConfirm / abcConfirm
  const [confirmDestructive, setConfirmDestructive] = useState(true)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmReceipt, setConfirmReceipt] = useState('点击按钮体验受控 ConfirmDialog 或命令式 Promise 确认')

  // Card 05: ReasonedActionDialog / ReasonedActionDrawer & OneTimeSecretDialog
  const [destructive, setDestructive] = useState(true)
  const [minReasonLength, setMinReasonLength] = useState<4 | 8 | 16>(8)
  const [simulatePending, setSimulatePending] = useState(false)
  const [simulateError, setSimulateError] = useState(false)
  const [secretValue, setSecretValue] = useState('sk_live_abc_9812736450abcdef')
  const [reasonDialogOpen, setReasonDialogOpen] = useState(false)
  const [reasonDrawerOpen, setReasonDrawerOpen] = useState(false)
  const [secretOpen, setSecretOpen] = useState(false)
  const [auditReceipt, setAuditReceipt] = useState('尚未执行强制审计或一次性密钥签发')

  const auditError = simulateError ? '风控拦截：当前集群尚有 3 个活跃会话，请先完成排空。' : null

  return (
    <>
      {/* 卡片 04：ConfirmDialog / useConfirm / abcConfirm */}
      <ComponentDocPreview
        title="ConfirmDialog / useConfirm / abcConfirm 二次确认对话框"
        components={['ConfirmDialog', 'ConfirmProvider', 'AbcConfirmHost']}
        description="彻底替代浏览器原生 window.confirm()：既支持受控组件写法 <ConfirmDialog>，也支持零样板 Promise 命令式 await abcConfirm(...) 与 useConfirm() Hook。"
        onResetKnobs={() => {
          setConfirmDestructive(true)
          setConfirmLoading(false)
        }}
        controls={
          <>
            <KnobSwitch label="destructive" checked={confirmDestructive} onChange={setConfirmDestructive} />
            <KnobSwitch label="loading" checked={confirmLoading} onChange={setConfirmLoading} />
          </>
        }
        code={`import { ConfirmDialog, abcConfirm, useConfirm } from '@abc-design/react'

const confirm = useConfirm()
const ok = await confirm({ title: '确认执行变更？', tone: '${confirmDestructive ? 'danger' : 'primary'}' })

<ConfirmDialog
  open={open}
  variant="${confirmDestructive ? 'destructive' : 'default'}"
  loading={${confirmLoading}}
  title="确认下线目标执行节点？"
  onCancel={() => setOpen(false)}
  onConfirm={handleConfirm}
/>`}
        apiRows={[
          { prop: 'ConfirmDialog.variant', type: "'default' | 'destructive'", defaultValue: "'default'", description: '破坏性操作切换红色告警样式与危险主按钮' },
          { prop: 'useConfirm / abcConfirm', type: '(opts: ConfirmOptions) => Promise<boolean>', description: '由 AbcProvider 内置宿主承载的异步确认函数' },
        ]}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              size="sm"
              variant={confirmDestructive ? 'danger' : 'primary'}
              onClick={() => setConfirmOpen(true)}
            >
              唤起 ConfirmDialog
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={async () => {
                const ok = await confirmHook({
                  title: 'useConfirm() Hook 确认执行',
                  message: '无需在页面维护额外 open 状态即可异步等待用户决策。',
                  tone: confirmDestructive ? 'danger' : 'primary',
                })
                setConfirmReceipt(`useConfirm 返回: ${ok ? 'true (已确认)' : 'false (已取消)'}`)
              }}
            >
              测试 useConfirm()
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={async () => {
                const ok = await abcConfirm({
                  title: 'abcConfirm 命令式确认',
                  message: '确认立即触发边缘网关配置热重载吗？',
                  tone: confirmDestructive ? 'danger' : 'primary',
                })
                setConfirmReceipt(`abcConfirm 返回: ${ok ? 'true (已确认)' : 'false (已取消)'}`)
              }}
            >
              测试 abcConfirm()
            </Button>
          </div>
          <div className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs text-[var(--abc-fg-secondary)]">
            确认回执：<strong className="font-mono text-[var(--abc-fg)]">{confirmReceipt}</strong>
          </div>

          <ConfirmDialog
            open={confirmOpen}
            title="确认下线目标执行节点？"
            description="下线后将拒绝新任务调度并释放关联弹性公网 IP。"
            variant={confirmDestructive ? 'destructive' : 'default'}
            loading={confirmLoading}
            confirmLabel="确认执行"
            onCancel={() => {
              setConfirmOpen(false)
              setConfirmReceipt('ConfirmDialog 已取消')
            }}
            onConfirm={() => {
              setConfirmOpen(false)
              setConfirmReceipt('ConfirmDialog 已确认提交')
              abcToast.success('ConfirmDialog 操作已执行')
            }}
          />
        </div>
      </ComponentDocPreview>

      {/* 卡片 05：ReasonedActionDialog / ReasonedActionDrawer & OneTimeSecretDialog */}
      <ComponentDocPreview
        title="ReasonedActionDialog / ReasonedActionDrawer & OneTimeSecretDialog 强制审计与一次性密钥"
        components={['ReasonedActionDialog', 'ReasonedActionDrawer', 'OneTimeSecretDialog']}
        description="面向金融与生产控制面治理：ReasonedAction* 强制拦截未满最小有效字数的审计原因；OneTimeSecretDialog 提供关闭即焚的一次性密钥安全签发体验。"
        onResetKnobs={() => {
          setDestructive(true)
          setMinReasonLength(8)
          setSimulatePending(false)
          setSimulateError(false)
          setSecretValue('sk_live_abc_9812736450abcdef')
        }}
        controls={
          <>
            <KnobSwitch label="destructive" checked={destructive} onChange={setDestructive} />
            <KnobSegmented
              label="minReasonLength"
              value={minReasonLength}
              onChange={setMinReasonLength}
              options={[
                { label: '4 字', value: 4 },
                { label: '8 字', value: 8 },
                { label: '16 字', value: 16 },
              ]}
            />
            <KnobSwitch label="pending" checked={simulatePending} onChange={setSimulatePending} />
            <KnobSwitch label="simulateError" checked={simulateError} onChange={setSimulateError} />
            <KnobText label="secretValue" value={secretValue} onChange={setSecretValue} placeholder="一次性密钥" />
          </>
        }
        code={`import { OneTimeSecretDialog, ReasonedActionDialog, ReasonedActionDrawer } from '@abc-design/react'

<ReasonedActionDialog open={open} onOpenChange={setOpen} destructive={${destructive}} minReasonLength={${minReasonLength}} title="强制审计确认" confirmLabel="提交审批" onConfirm={submit} />
<ReasonedActionDrawer open={dOpen} onClose={close} destructive={${destructive}} minReasonLength={${minReasonLength}} title="批量配额调整审计" confirmLabel="下发变更" onConfirm={submit} />
<OneTimeSecretDialog open={sOpen} title="专网访问密钥已签发" secretValue="${secretValue}" onClose={close} />`}
        apiRows={[
          { prop: 'ReasonedAction*.minReasonLength', type: 'number', defaultValue: '8', description: '审计原因最小有效字符门槛，未达标时自动锁定确认按钮' },
          { prop: 'ReasonedAction*.pending / error', type: 'boolean / string | null', description: '异步提交加载锁定态与内置顶部错误横幅' },
          { prop: 'OneTimeSecretDialog.secretValue', type: 'string | null', description: '一次性明文凭证内容，内置一键复制与备份警示提示' },
        ]}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              size="sm"
              variant="secondary"
              leftIcon={<ShieldAlert className="h-3.5 w-3.5" />}
              onClick={() => setReasonDialogOpen(true)}
            >
              打开 ReasonedActionDialog
            </Button>
            <Button size="sm" variant="secondary" onClick={() => setReasonDrawerOpen(true)}>
              打开 ReasonedActionDrawer
            </Button>
            <Button
              size="sm"
              variant="outline"
              leftIcon={<KeyRound className="h-3.5 w-3.5" />}
              onClick={() => setSecretOpen(true)}
            >
              签发 OneTimeSecretDialog
            </Button>
          </div>
          <div className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs text-[var(--abc-fg-secondary)]">
            审计回执：<strong className="font-mono text-[var(--abc-fg)]">{auditReceipt}</strong>
          </div>
        </div>

        <ReasonedActionDialog
          open={reasonDialogOpen}
          onOpenChange={setReasonDialogOpen}
          title="强制审计：吊销专网访问令牌"
          description="高危控制面变更必须填写审计理由，系统将永久留存操作人与原因摘要。"
          confirmLabel="确认吊销"
          destructive={destructive}
          minReasonLength={minReasonLength}
          reasonLabel="审计原因"
          reasonHint={`至少 ${minReasonLength} 个字符`}
          pending={simulatePending}
          error={auditError}
          onConfirm={(reason) => {
            setReasonDialogOpen(false)
            setAuditReceipt(`ReasonedActionDialog 提交成功 · 理由: "${reason}"`)
            abcToast.success('审计操作已提交')
          }}
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
          reasonHint={`至少 ${minReasonLength} 个字符`}
          pending={simulatePending}
          error={auditError}
          cascadeMode="adjacent"
          onConfirm={(reason) => {
            setReasonDrawerOpen(false)
            setAuditReceipt(`ReasonedActionDrawer 提交成功 · 理由: "${reason}"`)
            abcToast.success('抽屉审计已提交')
          }}
        />
        <OneTimeSecretDialog
          open={secretOpen}
          title="专网 API 访问密钥已生成"
          secretValue={secretValue || 'sk_live_abc_fallback'}
          metadata={[
            { label: '所属项目', value: 'ABC Design Control Plane' },
            { label: '作用域', value: 'cluster:admin' },
          ]}
          onClose={() => {
            setSecretOpen(false)
            setAuditReceipt('OneTimeSecretDialog 已关闭并确认备份')
          }}
        />
      </ComponentDocPreview>
    </>
  )
}
