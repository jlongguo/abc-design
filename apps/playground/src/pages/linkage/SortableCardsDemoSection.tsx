import React, { useEffect, useState } from 'react'
import {
  Button,
  FormField,
  Input,
  Select,
  SortableSplitEditor,
  StatusTag,
  abcToast,
} from '@abc-design/react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

interface PaymentGatewayItem {
  method_id: string
  provider: 'stripe' | 'paddle' | 'offline' | 'crypto'
  title_en: string
  title_zh: string
  description_zh: string
  marks: string[]
  account_value: string
  enabled: boolean
}

const INITIAL_GATEWAYS: PaymentGatewayItem[] = [
  {
    method_id: 'stripe',
    provider: 'stripe',
    title_en: 'Card payment',
    title_zh: '银行卡支付',
    description_zh: '在本页填写卡信息完成付款。',
    marks: ['Visa', 'Mastercard', 'Apple Pay', 'Google Pay'],
    account_value: 'acct_live_stripe_01',
    enabled: true,
  },
  {
    method_id: 'paddle',
    provider: 'paddle',
    title_en: 'Paddle payment',
    title_zh: 'Paddle 支付',
    description_zh: '打开安全支付页完成付款。',
    marks: ['Visa', 'Mastercard', 'PayPal'],
    account_value: 'pri_01jk_paddle',
    enabled: true,
  },
  {
    method_id: 'offline',
    provider: 'offline',
    title_en: 'Offline payment',
    title_zh: '线下对公汇款',
    description_zh: '付款后提交水单金额，财务审核后入账。',
    marks: ['UnionPay'],
    account_value: '6222-8800-9911-0001',
    enabled: true,
  },
  {
    method_id: 'crypto',
    provider: 'crypto',
    title_en: 'Crypto USDT',
    title_zh: '虚拟币支付',
    description_zh: '支持 TRC20 / ERC20 链上自动到账确认。',
    marks: ['USDT', 'USDC'],
    account_value: 'TX9k8DemoWalletAddress',
    enabled: false,
  },
]

export const SortableCardsDemoSection: React.FC = () => {
  const [items, setItems] = useState<PaymentGatewayItem[]>(INITIAL_GATEWAYS)
  const [selectedKey, setSelectedKey] = useState<string | number | null>(null)
  const [creating, setCreating] = useState(false)
  const [showMoveButtons, setShowMoveButtons] = useState(true)
  const [showIndexBadge, setShowIndexBadge] = useState(true)
  const [disabled, setDisabled] = useState(false)
  const [panelWidth, setPanelWidth] = useState<'420' | '480' | '540'>('460' as '480')

  const [draftZh, setDraftZh] = useState('')
  const [draftEn, setDraftEn] = useState('')
  const [draftDesc, setDraftDesc] = useState('')
  const [draftProvider, setDraftProvider] = useState<PaymentGatewayItem['provider']>('crypto')
  const [draftAccount, setDraftAccount] = useState('')

  const activeItem =
    !creating && selectedKey !== null
      ? items.find((it) => it.method_id === String(selectedKey)) ?? null
      : null

  useEffect(() => {
    if (creating) {
      setDraftProvider('crypto')
      setDraftZh('')
      setDraftEn('')
      setDraftDesc('')
      setDraftAccount('')
    } else if (activeItem) {
      setDraftProvider(activeItem.provider)
      setDraftZh(activeItem.title_zh)
      setDraftEn(activeItem.title_en)
      setDraftDesc(activeItem.description_zh)
      setDraftAccount(activeItem.account_value)
    }
  }, [creating, activeItem])

  const code = `import { SortableSplitEditor } from '@abc-design/react'

<SortableSplitEditor<PaymentGatewayItem>
  title="付款方式"
  description="拖拽左侧手柄暂存新顺序并点击顶栏「保存排序」提交；点击卡片在右侧挤压面板编辑。"
  items={items}
  rowKey="method_id"
  allowCreate
  showMoveButtons={${showMoveButtons}}
  showIndexBadge={${showIndexBadge}}
  disabled={${disabled}}
  panelWidth={${Number(panelWidth) || 480}}
  onSaveOrder={async (ordered) => {
    await saveOrderToServer(ordered)
    setItems(ordered)
  }}
  renderItem={(item) => <div>{item.title_zh} · {item.title_en}</div>}
  renderEditor={({ mode, item, close }) => <GatewayDetailForm mode={mode} item={item} onClose={close} />}
/>`

  return (
    <ComponentDocPreview
      title="SortableSplitEditor × 紧凑可拖拽暂存排序 × 右侧挤压表单"
      components={['SortableSplitEditor', 'SortableList', 'SplitDetailPanel', 'StatusTag']}
      description="替代全量平铺占屏的多卡片大表单：左侧以单行紧凑卡片支持鼠标拖拽（带落点指示线）与键盘 Space 抓取方向键调序，前端暂存新顺序后由顶栏「保存排序」统一提交；点击任意卡片在右侧内联挤出 SplitDetailPanel 编辑详情。"
      controls={
        <>
          <KnobSwitch label="showMoveButtons" checked={showMoveButtons} onChange={setShowMoveButtons} />
          <KnobSwitch label="showIndexBadge" checked={showIndexBadge} onChange={setShowIndexBadge} />
          <KnobSwitch label="disabled" checked={disabled} onChange={setDisabled} />
          <KnobSegmented
            label="panelWidth"
            value={panelWidth === ('460' as '480') ? '480' : panelWidth}
            onChange={setPanelWidth}
            options={[
              { label: '420px', value: '420' },
              { label: '480px', value: '480' },
              { label: '540px', value: '540' },
            ]}
          />
        </>
      }
      onResetKnobs={() => {
        setItems(INITIAL_GATEWAYS)
        setSelectedKey(null)
        setCreating(false)
        setShowMoveButtons(true)
        setShowIndexBadge(true)
        setDisabled(false)
        setPanelWidth('480')
      }}
      code={code}
      apiRows={[
        { prop: 'items', type: 'ReadonlyArray<T>', description: '服务端已持久化的基准条目列表' },
        { prop: 'onSaveOrder', type: '(orderedItems: T[]) => void | Promise<void>', description: '拖拽暂存顺序变更后，点击顶栏「保存排序」统一提交回调' },
        { prop: 'renderItem', type: '(item, meta) => ReactNode', description: '左侧紧凑单行摘要渲染函数' },
        { prop: 'renderEditor', type: '({ mode, item, index, close }) => ReactNode', description: '右侧 SplitDetailPanel 内联挤压面板编辑/新建表单渲染函数' },
        { prop: 'allowCreate', type: 'boolean', defaultValue: 'false', description: '是否在顶栏显示新建按钮并复用右侧挤压面板完成新建' },
      ]}
    >
      <SortableSplitEditor<PaymentGatewayItem>
        title="付款方式渠道编排"
        description="拖拽左侧手柄（或聚焦手柄按 Space 键 + 上下方向键）调整展示顺序，点击顶栏「保存排序」生效；点击卡片打开右侧面板编辑。"
        items={items}
        rowKey="method_id"
        allowCreate
        showMoveButtons={showMoveButtons}
        showIndexBadge={showIndexBadge}
        disabled={disabled}
        panelWidth={Number(panelWidth) || 480}
        selectedKey={selectedKey}
        onSelectedKeyChange={setSelectedKey}
        creating={creating}
        onCreatingChange={setCreating}
        getItemLabel={(it) => it.title_zh}
        labels={{ addButton: '添加付款方式', createPanelTitle: '添加付款方式' }}
        onSaveOrder={async (ordered) => {
          await new Promise((r) => window.setTimeout(r, 200))
          setItems(ordered)
          abcToast.success(`已保存最新排序：${ordered.map((x) => x.title_zh).join(' → ')}`)
        }}
        renderItem={(it) => (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase text-[var(--abc-fg-secondary)]">
                  {it.provider}
                </span>
                <span className="truncate font-semibold text-[var(--abc-fg)]">{it.title_zh}</span>
                <span className="truncate text-[11px] text-[var(--abc-fg-muted)]">· {it.title_en}</span>
              </div>
              <p className="mt-0.5 truncate text-[11px] text-[var(--abc-fg-muted)]">{it.description_zh}</p>
            </div>
            <div className="hidden items-center gap-1 sm:flex">
              {it.marks.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-secondary)]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}
        renderItemActions={(it) => (
          <StatusTag
            tone={it.enabled ? 'success' : 'neutral'}
            size="xs"
            dot
            className="cursor-pointer"
            onClick={() =>
              setItems((prev) =>
                prev.map((row) =>
                  row.method_id === it.method_id ? { ...row, enabled: !row.enabled } : row
                )
              )
            }
          >
            {it.enabled ? '显示中' : '已隐藏'}
          </StatusTag>
        )}
        renderEditor={({ mode }) => (
          <div className="space-y-3">
            {mode === 'create' && (
              <FormField label="渠道类型" size="sm">
                <Select
                  size="sm"
                  value={draftProvider}
                  onChange={(v) => setDraftProvider(v as PaymentGatewayItem['provider'])}
                  options={[
                    { label: 'Stripe', value: 'stripe' },
                    { label: 'Paddle', value: 'paddle' },
                    { label: '线下付款 (offline)', value: 'offline' },
                    { label: '虚拟币 (crypto)', value: 'crypto' },
                  ]}
                />
              </FormField>
            )}
            <div className="grid gap-2.5 sm:grid-cols-2">
              <FormField label="中文名称" required size="sm">
                <Input size="sm" value={draftZh} onChange={(e) => setDraftZh(e.target.value)} />
              </FormField>
              <FormField label="英文名称" required size="sm">
                <Input size="sm" value={draftEn} onChange={(e) => setDraftEn(e.target.value)} />
              </FormField>
            </div>
            <FormField label="中文说明" size="sm">
              <Input size="sm" value={draftDesc} onChange={(e) => setDraftDesc(e.target.value)} />
            </FormField>
            <FormField label="收款账户 / 地址" size="sm">
              <Input size="sm" value={draftAccount} onChange={(e) => setDraftAccount(e.target.value)} />
            </FormField>
          </div>
        )}
        renderPanelFooter={({ mode, item, close }) =>
          mode === 'create' ? (
            <div className="flex w-full justify-end gap-2">
              <Button size="sm" variant="secondary" onClick={close}>
                取消
              </Button>
              <Button
                size="sm"
                variant="primary"
                onClick={() => {
                  if (!draftZh.trim() || !draftEn.trim()) {
                    abcToast.warning('请填写中英文名称')
                    return
                  }
                  const nextId = `${draftProvider}_${Date.now().toString().slice(-4)}`
                  setItems((prev) => [
                    ...prev,
                    {
                      method_id: nextId,
                      provider: draftProvider,
                      title_zh: draftZh.trim(),
                      title_en: draftEn.trim(),
                      description_zh: draftDesc.trim() || '新建支付方式',
                      marks: ['USDT'],
                      account_value: draftAccount.trim(),
                      enabled: true,
                    },
                  ])
                  close()
                  setSelectedKey(nextId)
                  abcToast.success('已添加新付款方式')
                }}
              >
                创建付款方式
              </Button>
            </div>
          ) : item ? (
            <div className="flex w-full justify-between gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setItems((prev) => prev.filter((x) => x.method_id !== item.method_id))
                  close()
                  abcToast.info(`已移除 ${item.title_zh}`)
                }}
              >
                删除
              </Button>
              <Button
                size="sm"
                variant="primary"
                onClick={() => {
                  setItems((prev) =>
                    prev.map((x) =>
                      x.method_id === item.method_id
                        ? {
                            ...x,
                            title_zh: draftZh.trim() || x.title_zh,
                            title_en: draftEn.trim() || x.title_en,
                            description_zh: draftDesc.trim(),
                            account_value: draftAccount.trim(),
                          }
                        : x
                    )
                  )
                  abcToast.success(`已保存 ${draftZh || item.title_zh}`)
                }}
              >
                保存修改
              </Button>
            </div>
          ) : null
        }
      />
    </ComponentDocPreview>
  )
}
