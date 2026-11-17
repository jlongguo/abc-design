import React, { useState } from 'react'
import {
  AsyncInlineError,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  InputNumber,
  Loading,
  LoadingStateCard,
  OffsetPagination,
  ProgressBar,
  ReadErrorBanner,
  SmartPagination,
  StatusBadge,
  Switch,
  Tag,
  ToastCard,
  abcToast,
  useConfirm,
} from '@abc-design/react'
import { ChevronDown, Copy, Download, Settings, Trash2, UserPlus } from 'lucide-react'
import { ComponentDocPreview } from './ComponentDocPreview'

/**
 * 数据展示、反馈状态与浮层菜单补充文档模块
 * 集成 StatusBadge、Tag、Dropdown、DropdownMenu 复合菜单、Loading / LoadingStateCard、
 * ProgressBar、ReadErrorBanner / AsyncInlineError、ToastCard、abcConfirm / useConfirm、OffsetPagination / SmartPagination
 */
export const DisplayAndFeedbackExtrasDocs: React.FC = () => {
  const confirm = useConfirm()
  const [dropdownTrigger, setDropdownTrigger] = useState<'click' | 'hover'>('click')
  const [loadingOverlay, setLoadingOverlay] = useState(false)
  const [loadingPaused, setLoadingPaused] = useState(false)
  const [quotaPercent, setQuotaPercent] = useState(68)
  const [retrying, setRetrying] = useState(false)
  const [showToastCard, setShowToastCard] = useState(true)
  const [offsetPage, setOffsetPage] = useState(2)
  const [offsetSize, setOffsetSize] = useState(10)

  const handleConfirmDemo = async (tone: 'danger' | 'warning' | 'primary' | 'success') => {
    const ok = await confirm({
      title: tone === 'danger' ? '确认注销执行节点？' : '确认下发灰度策略？',
      message:
        tone === 'danger'
          ? '该操作将清空运行中租约并在 3 秒后摘除节点流量。'
          : '确认后立即向控制面提交操作确认请求。',
      tone,
      confirmText: tone === 'danger' ? '确认注销' : '立即执行',
      cancelText: '取消',
    })
    if (ok) abcToast.success('useConfirm 已确认执行')
    else abcToast.info('useConfirm 已取消')
  }

  return (
    <div className="space-y-5">
      {/* 1. StatusBadge & Tag */}
      <ComponentDocPreview
        title="StatusBadge / Tag 自动状态徽标与语义标签"
        description="StatusBadge 内置 30+ 常见运维/计费状态枚举（active / running / reconciliation_required / suspended / archived 等），自动推导颜色与脉冲呼吸圆点；Tag 提供轻量语义兼容变体。"
        code={`import { StatusBadge, Tag } from '@abc-design/react'

<StatusBadge status="active" />
<StatusBadge status="running" />
<StatusBadge status="reconciliation_required" />
<StatusBadge status="suspended" />
<Tag variant="outline" dot>Staging 集群</Tag>`}
        apiRows={[
          { prop: 'StatusBadge.status', type: 'string', required: true, description: '业务状态枚举字符串（自动规范化大小写与下划线）' },
          { prop: 'StatusBadge.pulse', type: 'boolean', description: '是否在左侧圆点上叠加脉冲动画（进行态默认开启）' },
          { prop: 'Tag.variant', type: "'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info'", description: '预设语义色板变体' },
        ]}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status="active" />
            <StatusBadge status="running" />
            <StatusBadge status="queued" />
            <StatusBadge status="reconciliation_required" />
            <StatusBadge status="failed" />
            <StatusBadge status="archived" />
          </div>
          <div className="flex flex-wrap items-center gap-2 border-t border-[var(--abc-border)] pt-3">
            <Tag variant="default" dot>Default Primary</Tag>
            <Tag variant="success" dot>Success Ready</Tag>
            <Tag variant="warning" dot>Warning Quota</Tag>
            <Tag variant="destructive" dot>Destructive Alert</Tag>
            <Tag variant="info">Info Badge</Tag>
            <Tag variant="outline">Outline Minimal</Tag>
          </div>
        </div>
      </ComponentDocPreview>

      {/* 2. Dropdown & DropdownMenu */}
      <ComponentDocPreview
        title="Dropdown / DropdownMenu 视口感知声明式与复合下拉菜单"
        description="支持 Click/Hover 双触发器、自动视口边缘防溢出翻转、Home/End/Arrow 上下焦点巡航以及 Shadcn 风格复合菜单标签与快捷键右对齐。"
        controls={
          <div className="inline-flex items-center gap-2">
            <span>Dropdown 触发方式:</span>
            {(['click', 'hover'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setDropdownTrigger(t)}
                className={`rounded px-2 py-0.5 text-xs cursor-pointer ${
                  dropdownTrigger === t
                    ? 'bg-[var(--abc-primary)] text-white'
                    : 'border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        }
        code={`import { Dropdown, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut } from '@abc-design/react'

<Dropdown trigger="${dropdownTrigger}" items={[{ key: 'copy', label: '复制租户 ID' }, { key: 'del', label: '删除', danger: true }]} />

<DropdownMenu>
  <DropdownMenuTrigger asChild><Button>更多操作</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>导出诊断包 <DropdownMenuShortcut>⌘E</DropdownMenuShortcut></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        apiRows={[
          { prop: 'Dropdown.trigger', type: "'click' | 'hover'", defaultValue: "'click'", description: '触发打开菜单的交互方式' },
          { prop: 'Dropdown.items', type: 'DropdownMenuItem[]', description: '声明式菜单项配置，支持 divider/danger/icon' },
          { prop: 'DropdownMenuContent.align', type: "'start' | 'end'", defaultValue: "'end'", description: '菜单浮层相对于触发器的水平对齐基准' },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Dropdown
            trigger={dropdownTrigger}
            items={[
              {
                key: 'copy',
                label: '复制节点标识',
                icon: <Copy className="h-3.5 w-3.5" />,
                onClick: () => abcToast.success('已触发声明式 Dropdown 动作：复制节点标识'),
              },
              {
                key: 'export',
                label: '导出巡检报告',
                icon: <Download className="h-3.5 w-3.5" />,
                onClick: () => abcToast.info('正在导出巡检报告'),
              },
              {
                key: 'danger',
                label: '驱逐异常节点',
                icon: <Trash2 className="h-3.5 w-3.5" />,
                danger: true,
                dividerAbove: true,
                onClick: () => abcToast.warning('已触发危险菜单项'),
              },
            ]}
          >
            <Button size="sm" variant="outline">
              声明式 Dropdown ({dropdownTrigger})
              <ChevronDown className="ml-1 h-3.5 w-3.5" />
            </Button>
          </Dropdown>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="primary">
                复合 DropdownMenu
                <ChevronDown className="ml-1 h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-52">
              <DropdownMenuLabel>租户快捷治理</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => abcToast.success('触发邀请成员')}>
                  <UserPlus className="h-3.5 w-3.5" />
                  <span>邀请成员</span>
                  <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => abcToast.info('打开高级设置')}>
                  <Settings className="h-3.5 w-3.5" />
                  <span>配额参数</span>
                  <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-[var(--abc-danger)]"
                onClick={() => abcToast.error('已选择高危清理菜单项')}
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>清理过期快照</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ComponentDocPreview>

      {/* 3. Loading / LoadingStateCard / ProgressBar */}
      <ComponentDocPreview
        title="Loading / LoadingStateCard / ProgressBar 加载态与语义配额进度条"
        description="支持局部容器半透明模糊加载遮罩、弱网暂停态提示卡，以及随阈值自动切换语义颜色的 ProgressBar。"
        controls={
          <>
            <Switch
              size="xs"
              label="容器遮罩 Loading"
              checked={loadingOverlay}
              onChange={setLoadingOverlay}
            />
            <Switch
              size="xs"
              label="LoadingStateCard.paused (弱网等待)"
              checked={loadingPaused}
              onChange={setLoadingPaused}
            />
            <div className="inline-flex items-center gap-2">
              <span>用量百分比:</span>
              <InputNumber
                size="xs"
                min={0}
                max={100}
                value={quotaPercent}
                onChange={(v) => setQuotaPercent(Number(v ?? 0))}
              />
            </div>
          </>
        }
        code={`import { Loading, LoadingStateCard, ProgressBar } from '@abc-design/react'

<Loading spinning={loading} tip="正在同步租户集群状态…">
  <div>受保护业务区域</div>
</Loading>
<LoadingStateCard paused={paused} message="正在等待后端调度服务响应…" />
<ProgressBar value={quotaPercent} max={100} variant="auto" warningThreshold={75} dangerThreshold={90} />`}
        apiRows={[
          { prop: 'Loading.spinning', type: 'boolean', defaultValue: 'true', description: '包裹 children 时作为局部加载遮罩开关' },
          { prop: 'LoadingStateCard.paused', type: 'boolean', defaultValue: 'false', description: '离线/网络中断时切换至琥珀色警示条与断网图标' },
          { prop: 'ProgressBar.variant', type: "'default' | 'success' | 'warning' | 'danger' | 'auto'", defaultValue: "'auto'", description: 'auto 模式按 warningThreshold / dangerThreshold 自动变色' },
        ]}
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Loading spinning={loadingOverlay} tip="正在拉取最新指标快照…">
              <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 text-xs">
                <div className="font-semibold text-[var(--abc-fg)]">月度算力配额消耗水位 ({quotaPercent}%)</div>
                <p className="mt-1 text-[var(--abc-fg-muted)]">超过 75% 转为预警琥珀色，超过 90% 触发熔断红色。</p>
                <div className="mt-3">
                  <ProgressBar
                    value={quotaPercent}
                    max={100}
                    size="md"
                    variant="auto"
                    warningThreshold={75}
                    dangerThreshold={90}
                  />
                </div>
              </div>
            </Loading>

            <LoadingStateCard
              paused={loadingPaused}
              message={
                loadingPaused
                  ? '网络连接暂时断开，等待重连后自动恢复同步…'
                  : '正在从控制平面拉取客户运行态数据…'
              }
            />
          </div>
        </div>
      </ComponentDocPreview>

      {/* 4. ReadErrorBanner / AsyncInlineError / ToastCard / useConfirm */}
      <ComponentDocPreview
        title="ReadErrorBanner / AsyncInlineError / ToastCard / useConfirm 错误恢复与命令式确认"
        description="携带 HTTP 状态码、错误码与 Request ID 追踪的标准异步错误横幅、结构化诊断通知卡，以及 Promise 风格的 useConfirm / abcConfirm 快捷确认 API。"
        code={`import { ReadErrorBanner, AsyncInlineError, ToastCard, useConfirm } from '@abc-design/react'

const confirm = useConfirm()
const ok = await confirm({ title: '确认操作', tone: 'danger' })

<ReadErrorBanner status={503} code="UPSTREAM_TIMEOUT" requestId="req_01JX92" message="调度控制面暂时不可用" onRetry={refetch} />
<AsyncInlineError error={{ message: '明细查询超时', status: 504 }} retry={refetch} />`}
        apiRows={[
          { prop: 'ReadErrorBanner.onRetry', type: '() => void', description: '在横幅右侧生成可禁用的带转圈状态重试按钮' },
          { prop: 'AsyncInlineError.error', type: 'unknown', required: true, description: '自动解析错误对象中的 message / status / code / requestId' },
          { prop: 'useConfirm() / abcConfirm()', type: '(opts: ConfirmOptions) => Promise<boolean>', description: '基于 AbcProvider 内置 AbcConfirmHost 的 Promise 命令式确认框' },
        ]}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Button size="xs" variant="primary" onClick={() => void handleConfirmDemo('primary')}>
              abcConfirm (Primary)
            </Button>
            <Button size="xs" variant="warning" onClick={() => void handleConfirmDemo('warning')}>
              useConfirm (Warning)
            </Button>
            <Button size="xs" variant="danger" onClick={() => void handleConfirmDemo('danger')}>
              useConfirm (Danger)
            </Button>
            {!showToastCard && (
              <Button size="xs" variant="outline" onClick={() => setShowToastCard(true)}>
                恢复 ToastCard 预览
              </Button>
            )}
          </div>

          <ReadErrorBanner
            status={503}
            code="RUNNER_POOL_EXHAUSTED"
            requestId="req_01JX8M4P7K"
            message="边缘区域暂无空闲 Chromium Sandbox 节点，请稍后重试或切换可用区。"
            pending={retrying}
            onRetry={() => {
              setRetrying(true)
              window.setTimeout(() => {
                setRetrying(false)
                abcToast.info('已触发 ReadErrorBanner 重试回放')
              }, 700)
            }}
          />

          <AsyncInlineError
            fallbackTitle="计费账单明细读取失败"
            error={{
              message: 'Upstream billing ledger returned HTTP 504 Gateway Timeout',
              status: 504,
              code: 'BILLING_TIMEOUT',
              requestId: 'req_01JX8M8Z1N',
            }}
            retry={() => abcToast.success('触发 AsyncInlineError 重试')}
          />

          {showToastCard && (
            <ToastCard
              id="demo-toast-card"
              variant="warning"
              title="预算水位预警通知"
              message="组织 Acme Corp 本月预算消耗已达 85%，请及时核对并发限额策略。"
              status={200}
              code="BUDGET_ALERT_80PCT"
              requestId="req_01JX8MA30W"
              durationMs={null}
              onDismiss={() => setShowToastCard(false)}
            />
          )}
        </div>
      </ComponentDocPreview>

      {/* 5. OffsetPagination & SmartPagination */}
      <ComponentDocPreview
        title="OffsetPagination / SmartPagination 兼容别名与智能双模分页"
        description="OffsetPagination 为标准页码分页提供英文默认 Previous/Next 别名封装；SmartPagination 根据入参自动适配 Offset 分页或游标分页。"
        code={`import { OffsetPagination, SmartPagination } from '@abc-design/react'

<OffsetPagination current={page} pageSize={10} total={120} onChange={(p, s) => setState(p, s)} />
<SmartPagination current={page} pageSize={10} total={120} showQuickJumper onChange={setState} />`}
        apiRows={[
          { prop: 'OffsetPagination', type: 'PaginationProps', description: 'Offset 分页模式快捷封装，默认提供英文上一页/下一页标签' },
          { prop: 'SmartPagination', type: 'PaginationProps', description: '双模自动识别封装，统一下游中后台分页调用契约' },
        ]}
      >
        <div className="space-y-4">
          <div className="rounded-lg border border-[var(--abc-border)] p-3">
            <div className="mb-2 text-xs font-medium text-[var(--abc-fg-muted)]">OffsetPagination</div>
            <OffsetPagination
              current={offsetPage}
              pageSize={offsetSize}
              total={120}
              onChange={(p, s) => {
                setOffsetPage(p)
                setOffsetSize(s)
              }}
            />
          </div>
          <div className="rounded-lg border border-[var(--abc-border)] p-3">
            <div className="mb-2 text-xs font-medium text-[var(--abc-fg-muted)]">SmartPagination (带快捷跳页)</div>
            <SmartPagination
              current={offsetPage}
              pageSize={offsetSize}
              total={120}
              showQuickJumper
              onChange={(p, s) => {
                setOffsetPage(p)
                setOffsetSize(s)
              }}
            />
          </div>
        </div>
      </ComponentDocPreview>
    </div>
  )
}
