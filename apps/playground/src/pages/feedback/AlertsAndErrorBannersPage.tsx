import React, { useState } from 'react'
import {
  Alert,
  AsyncInlineError,
  AttentionList,
  Button,
  NotificationBanner,
  PageContainer,
  ReadErrorBanner,
  Result,
  StatusTag,
  abcToast,
  type AbcSize,
  type AlertTone,
  type AttentionEntry,
  type NotificationVariant,
  type ResultStatus,
} from '@abc-design/react'
import { RotateCcw } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSelect, KnobSwitch, KnobText } from '../../components/PropKnobs'

const ATTENTION_SEEDS: AttentionEntry[] = [
  {
    kind: 'quota_overload',
    severity: 'critical',
    count: 2,
    label: '华东金融区 Sandbox 集群并发水位超过 95%（已触发队列保护）',
    onClick: () => abcToast.warning('已定位华东金融区高负载节点'),
  },
  {
    kind: 'approval_pending',
    severity: 'high',
    count: 5,
    label: '待复核的高危配额调整与导出审计单据',
    onClick: () => abcToast.info('打开待审批工单列表'),
  },
  {
    kind: 'tls_cert_notice',
    severity: 'medium',
    count: 1,
    label: '边缘节点泛域名 TLS 证书将在 14 天后到期',
    onClick: () => abcToast.info('跳转证书续签控制台'),
  },
]

const RESULT_META: Record<ResultStatus, { title: string; subTitle: string }> = {
  success: { title: '网关配置下发成功', subTitle: '全网 16 个边缘接入节点已完成热更新同步。' },
  info: { title: '正在等待人工审批确认', subTitle: '变更申请已送达安全管理员队列，预计 5 分钟内处理。' },
  warning: { title: '部分区域同步存在延迟', subTitle: '亚太新加坡可用区正在重连，其余区域运行正常。' },
  error: { title: '集群扩容任务执行失败', subTitle: '底层配额校验未通过，请核对账单余额后重试。' },
  '403': { title: '403 · 当前账号无权访问该资源', subTitle: '缺少 ops:cluster:write 权限，请联系组织管理员授权。' },
  '404': { title: '404 · 目标实例或日志已归档', subTitle: '请检查 URL 路径参数或切换至历史审计仓库检索。' },
  '500': { title: '500 · 控制平面内部异常', subTitle: '上游聚合服务暂不可用，请携带 Request ID 联系值班工程团队。' },
}

export const AlertsAndErrorBannersPage: React.FC = () => {
  // 卡片 1: Alert & NotificationBanner
  const [variant, setVariant] = useState<NotificationVariant>('warning')
  const [alertSize, setAlertSize] = useState<AbcSize>('sm')
  const [closable, setClosable] = useState(true)
  const [showDiagnostics, setShowDiagnostics] = useState(true)
  const [withAction, setWithAction] = useState(true)
  const [alertClosed, setAlertClosed] = useState(false)
  const [alertKey, setAlertKey] = useState(0)
  const [bannerOpen, setBannerOpen] = useState(true)

  // 卡片 2: ReadErrorBanner & AsyncInlineError
  const [httpStatus, setHttpStatus] = useState<'403' | '429' | '500' | '503' | '504'>('503')
  const [errorCode, setErrorCode] = useState('RUNNER_POOL_EXHAUSTED')
  const [pendingKnob, setPendingKnob] = useState(false)
  const [retryBusy, setRetryBusy] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  // 卡片 3: AttentionList & Result
  const [resultStatus, setResultStatus] = useState<ResultStatus>('403')
  const [resultSize, setResultSize] = useState<AbcSize>('sm')
  const [severityFilter, setSeverityFilter] = useState<'all' | 'critical' | 'high' | 'medium'>('all')

  // Alert 语义色调将 'error' 映射为组件真实支持的 'danger'
  const alertTone: AlertTone = variant === 'error' ? 'danger' : variant
  const isRetrying = pendingKnob || retryBusy
  const filteredAttention =
    severityFilter === 'all'
      ? ATTENTION_SEEDS
      : ATTENTION_SEEDS.filter((item) => item.severity === severityFilter)

  const restoreClosedBanners = () => {
    setAlertClosed(false)
    setAlertKey((k) => k + 1)
    setBannerOpen(true)
  }

  const triggerRetryDemo = (source: string) => {
    setRetryBusy(true)
    setRetryCount((n) => n + 1)
    window.setTimeout(() => {
      setRetryBusy(false)
      abcToast.info(`${source} 重试完成 (HTTP ${httpStatus})`)
    }, 750)
  }

  const card1Code = `import { Alert, Button, NotificationBanner } from '@abc-design/react'

<Alert
  tone="${alertTone}"
  size="${alertSize}"
  closable={${closable}}
  title="网关流量调度提醒"
  description="当前灰度策略正在将 15% 请求路由至新版本节点池。"${withAction ? '\n  action={<Button size="xs" variant="outline">查看规则</Button>}' : ''}
/>

<NotificationBanner
  variant="${variant}"
  title="边缘网关策略同步通告"${showDiagnostics ? `\n  status={${variant === 'error' ? 502 : 200}}\n  code="TLS_CERT_WARN_72H"\n  requestId="req_01JX9M2K8A"` : ''}
  message="请在窗口期内确认证书链配置，避免接入端 TLS 握手失败。"${withAction ? '\n  action={<Button size="xs" variant="primary">立即核查</Button>}' : ''}${closable ? '\n  onDismiss={() => setOpen(false)}' : ''}
/>`

  const card2Code = `import { AsyncInlineError, ReadErrorBanner } from '@abc-design/react'

<ReadErrorBanner
  status={${Number(httpStatus)}}
  code="${errorCode}"
  requestId="req_01JX8M4P7K"
  pending={${isRetrying}}
  message="无法读取运行时节点池列表，请稍后重试。"
  onRetry={refetch}
/>

<AsyncInlineError
  fallbackTitle="账单汇总读取失败"
  error={{ status: ${Number(httpStatus)}, code: "${errorCode}", requestId: "req_01JX8M8Z1N", message: "Upstream service timeout" }}
  isRetrying={${isRetrying}}
  retry={refetch}
/>`

  const card3Code = `import { AttentionList, Button, Result } from '@abc-design/react'

<AttentionList
  items={items.filter((i) => ${severityFilter === 'all' ? 'true' : `i.severity === '${severityFilter}'`})}
  emptyMessage="当前风险等级下暂无待处理告警信号。"
/>

<Result
  status="${resultStatus}"
  size="${resultSize}"
  title="${RESULT_META[resultStatus].title}"
  subTitle="${RESULT_META[resultStatus].subTitle}"
  extra={<Button size="sm" variant="primary">返回概览</Button>}
/>`

  return (
    <PageContainer
      title="通知横幅、错误恢复与结果页"
      subtitle="统一收敛页内提示横幅 (Alert / NotificationBanner)、带链路诊断的重试恢复条 (ReadErrorBanner / AsyncInlineError) 与状态反馈页 (Result / AttentionList)"
    >
      <div className="space-y-5">
        {/* 卡片 1: Alert & NotificationBanner */}
        <ComponentDocPreview
          title="Alert & NotificationBanner 页内提示与诊断通告横幅"
          components={['Alert', 'NotificationBanner']}
          description="Alert 提供四档紧凑尺寸与内置关闭状态；NotificationBanner 专用于中后台携带 HTTP 状态码、错误码与 Request ID 的结构化通告。"
          controls={
            <>
              <KnobSegmented
                label="variant"
                value={variant}
                onChange={setVariant}
                options={[
                  { label: 'info', value: 'info' },
                  { label: 'success', value: 'success' },
                  { label: 'warning', value: 'warning' },
                  { label: 'error', value: 'error' },
                ]}
              />
              <KnobSegmented
                label="size"
                value={alertSize}
                onChange={setAlertSize}
                options={[
                  { label: 'xs', value: 'xs' },
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                ]}
              />
              <KnobSwitch label="closable" checked={closable} onChange={setClosable} />
              <KnobSwitch label="showDiagnostics" checked={showDiagnostics} onChange={setShowDiagnostics} />
              <KnobSwitch label="withAction" checked={withAction} onChange={setWithAction} />
            </>
          }
          onResetKnobs={() => {
            setVariant('warning')
            setAlertSize('sm')
            setClosable(true)
            setShowDiagnostics(true)
            setWithAction(true)
            restoreClosedBanners()
          }}
          code={card1Code}
          apiRows={[
            { prop: 'Alert.tone', type: "'info' | 'success' | 'warning' | 'danger'", defaultValue: "'info'", description: '语义色调（注意危险态使用 danger 而非 error）' },
            { prop: 'Alert.size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '横幅内边距与字号尺寸规格' },
            { prop: 'NotificationBanner.variant', type: "'info' | 'success' | 'warning' | 'error'", defaultValue: "'error'", description: '通告语义变体，自动切换图标与 ARIA role' },
            { prop: 'NotificationBanner.code / requestId', type: 'string', description: '展示系统业务错误码与分布式链路追踪 ID' },
            { prop: 'NotificationBanner.onDismiss', type: '() => void', description: '传入后在右侧渲染关闭按钮并触发受控销毁' },
          ]}
        >
          <div className="space-y-3">
            {(alertClosed || !bannerOpen) && (
              <div className="flex items-center justify-between rounded-lg border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs">
                <span className="text-[var(--abc-fg-muted)]">
                  已有横幅被关闭（Alert: {alertClosed ? '已关闭' : '显示'} / Banner: {bannerOpen ? '显示' : '已关闭'}）
                </span>
                <Button size="xs" variant="outline" leftIcon={<RotateCcw className="h-3 w-3" />} onClick={restoreClosedBanners}>
                  恢复关闭横幅
                </Button>
              </div>
            )}
            <Alert
              key={alertKey}
              tone={alertTone}
              size={alertSize}
              closable={closable}
              onClose={() => setAlertClosed(true)}
              title={`Alert 提示横幅 (tone="${alertTone}", size="${alertSize}")`}
              description="当需要向用户展示不打断当前操作流的区域级说明或策略提醒时，使用 Alert 组件。"
              action={
                withAction ? (
                  <Button size="xs" variant="outline" onClick={() => abcToast.info('点击 Alert 附属动作')}>
                    查看规则
                  </Button>
                ) : undefined
              }
            />
            {bannerOpen && (
              <NotificationBanner
                variant={variant}
                title="NotificationBanner 结构化通告"
                status={showDiagnostics ? (variant === 'error' ? 502 : 200) : undefined}
                code={showDiagnostics ? 'TLS_CERT_WARN_72H' : undefined}
                requestId={showDiagnostics ? 'req_01JX9M2K8A' : undefined}
                message="边缘接入网关证书即将进入续签窗口，请核验泛域名链配置以确保平滑切换。"
                description={showDiagnostics ? '诊断上下文已挂载，复制 Request ID 可直达日志链路检索。' : undefined}
                action={
                  withAction ? (
                    <Button size="xs" variant="primary" onClick={() => abcToast.success('触发横幅操作按钮')}>
                      立即核查
                    </Button>
                  ) : undefined
                }
                onDismiss={closable ? () => setBannerOpen(false) : undefined}
              />
            )}
          </div>
        </ComponentDocPreview>

        {/* 卡片 2: ReadErrorBanner & AsyncInlineError */}
        <ComponentDocPreview
          title="ReadErrorBanner & AsyncInlineError 接口故障诊断与重试恢复"
          components={['ReadErrorBanner', 'AsyncInlineError']}
          description="专用于列表读取失败与局部面板异步异常，自动解析 status / code / requestId 并提供带加载旋转反馈的重试按钮。"
          controls={
            <>
              <KnobSegmented
                label="httpStatus"
                value={httpStatus}
                onChange={setHttpStatus}
                options={[
                  { label: '403', value: '403' },
                  { label: '429', value: '429' },
                  { label: '500', value: '500' },
                  { label: '503', value: '503' },
                  { label: '504', value: '504' },
                ]}
              />
              <KnobText label="errorCode" value={errorCode} onChange={setErrorCode} placeholder="输入错误码" />
              <KnobSwitch label="pending (重试中)" checked={pendingKnob} onChange={setPendingKnob} />
            </>
          }
          onResetKnobs={() => {
            setHttpStatus('503')
            setErrorCode('RUNNER_POOL_EXHAUSTED')
            setPendingKnob(false)
            setRetryCount(0)
          }}
          code={card2Code}
          apiRows={[
            { prop: 'ReadErrorBanner.status / code', type: 'number / string', description: '透传至 NotificationBanner 的 HTTP 状态码与业务错误码' },
            { prop: 'ReadErrorBanner.pending', type: 'boolean', defaultValue: 'false', description: '重试请求进行中时禁用按钮并激活旋转图标' },
            { prop: 'ReadErrorBanner.onRetry', type: '() => void', description: '点击重试按钮回调，未传时不渲染重试控件' },
            { prop: 'AsyncInlineError.error', type: 'unknown', required: true, description: '任意异常对象，自动提取 message / status / code / requestId' },
            { prop: 'AsyncInlineError.isRetrying', type: 'boolean', defaultValue: 'false', description: '控制内置重试按钮的禁用与加载中转圈态' },
          ]}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-[var(--abc-fg-muted)]">
              <span>点击任意横幅右侧按钮即可演练异步重试回执：</span>
              <StatusTag tone="info">已触发重试次数: {retryCount}</StatusTag>
            </div>
            <ReadErrorBanner
              status={Number(httpStatus)}
              code={errorCode.trim() || undefined}
              requestId="req_01JX8M4P7K"
              message="无法从控制平面读取当前区域的节点池健康状态，请稍后重试。"
              pending={isRetrying}
              pendingLabel="正在重试…"
              onRetry={() => triggerRetryDemo('ReadErrorBanner')}
            />
            <AsyncInlineError
              fallbackTitle="计费账单明细查询异常"
              error={{
                message: `Upstream billing service responded with HTTP ${httpStatus}`,
                status: Number(httpStatus),
                code: errorCode.trim() || undefined,
                requestId: 'req_01JX8M8Z1N',
              }}
              isRetrying={isRetrying}
              retry={() => triggerRetryDemo('AsyncInlineError')}
            />
          </div>
        </ComponentDocPreview>

        {/* 卡片 3: AttentionList & Result */}
        <ComponentDocPreview
          title="AttentionList & Result 告警待办聚合清单与页面状态反馈"
          components={['AttentionList', 'Result']}
          description="AttentionList 在仪表盘顶部按风险严重度聚合运营信号（空数组自动退化为绿色健康提示）；Result 覆盖 403/404/500 与操作结果落地页。"
          controls={
            <>
              <KnobSelect
                label="Result.status"
                value={resultStatus}
                onChange={setResultStatus}
                options={[
                  { label: 'success', value: 'success' },
                  { label: 'info', value: 'info' },
                  { label: 'warning', value: 'warning' },
                  { label: 'error', value: 'error' },
                  { label: '403', value: '403' },
                  { label: '404', value: '404' },
                  { label: '500', value: '500' },
                ]}
              />
              <KnobSegmented
                label="Result.size"
                value={resultSize}
                onChange={setResultSize}
                options={[
                  { label: 'xs', value: 'xs' },
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                ]}
              />
              <KnobSegmented
                label="风险等级过滤"
                value={severityFilter}
                onChange={setSeverityFilter}
                options={[
                  { label: 'all', value: 'all' },
                  { label: 'critical', value: 'critical' },
                  { label: 'high', value: 'high' },
                  { label: 'medium', value: 'medium' },
                ]}
              />
            </>
          }
          onResetKnobs={() => {
            setResultStatus('403')
            setResultSize('sm')
            setSeverityFilter('all')
          }}
          code={card3Code}
          apiRows={[
            { prop: 'AttentionList.items', type: 'AttentionEntry[]', required: true, description: '告警条目数组，支持 severity (critical/high/medium/low)、count 与点击回调' },
            { prop: 'AttentionList.emptyMessage', type: 'string', description: 'items 为空时展示的绿色健康状态横幅文案' },
            { prop: 'Result.status', type: "'success' | 'info' | 'warning' | 'error' | '403' | '404' | '500'", defaultValue: "'info'", description: '结果页语义状态码，自动匹配大图标与底色容器' },
            { prop: 'Result.size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: '纵向留白密度规格' },
            { prop: 'Result.extra', type: 'ReactNode', description: '主结果区下方的返回/重试操作按钮组' },
          ]}
        >
          <div className="space-y-4">
            <AttentionList
              items={filteredAttention}
              emptyMessage="当前筛选风险等级下无异常运营信号。"
            />
            <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/40">
              <Result
                status={resultStatus}
                size={resultSize}
                title={RESULT_META[resultStatus].title}
                subTitle={RESULT_META[resultStatus].subTitle}
                extra={
                  <>
                    <Button size="sm" variant="primary" onClick={() => abcToast.info('返回控制台首页')}>
                      返回概览
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => abcToast.success('已复制排查摘要')}>
                      复制诊断信息
                    </Button>
                  </>
                }
              />
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
