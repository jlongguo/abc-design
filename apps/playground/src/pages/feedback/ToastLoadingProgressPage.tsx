import React, { useState } from 'react'
import {
  Button,
  Loading,
  LoadingStateCard,
  PageContainer,
  Progress,
  ProgressBar,
  StatusTag,
  ToastCard,
  abcProgress,
  abcToast,
  type NotificationVariant,
  type ProgressBarProps,
} from '@abc-design/react'
import { BellRing, Play, RotateCcw } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSelect, KnobSwitch, KnobText } from '../../components/PropKnobs'

export const ToastLoadingProgressPage: React.FC = () => {
  // 卡片 1: abcToast & ToastCard
  const [variant, setVariant] = useState<NotificationVariant>('warning')
  const [toastTitle, setToastTitle] = useState('网关配额水位预警')
  const [withDescription, setWithDescription] = useState(true)
  const [withAction, setWithAction] = useState(true)
  const [withDiagnostics, setWithDiagnostics] = useState(true)
  const [cardVisible, setCardVisible] = useState(true)

  // 卡片 2: Loading / LoadingStateCard / abcProgress
  const [spinning, setSpinning] = useState(false)
  const [tip, setTip] = useState('正在同步集群运行快照…')
  const [paused, setPaused] = useState(false)
  const [progressActive, setProgressActive] = useState(false)

  // 卡片 3: Progress & ProgressBar
  const [percent, setPercent] = useState(78)
  const [progressType, setProgressType] = useState<'line' | 'circle'>('line')
  const [progressTone, setProgressTone] = useState<'primary' | 'success' | 'warning' | 'danger'>('primary')
  const [showInfo, setShowInfo] = useState(true)
  const [barVariant, setBarVariant] = useState<NonNullable<ProgressBarProps['variant']>>('auto')
  const [warningThreshold, setWarningThreshold] = useState(75)
  const [dangerThreshold, setDangerThreshold] = useState(90)

  const resolvedTitle = toastTitle.trim() || '系统运行通知'
  const resolvedDesc = withDescription
    ? '组织 Acme Corp 本月网关并发额度已使用 85%，请及时核查自动扩容策略。'
    : '单行紧凑通知摘要（未展开辅助说明）。'

  const fireGlobalToast = () => {
    abcToast[variant]({
      title: withDescription ? resolvedTitle : undefined,
      message: withDescription ? resolvedDesc : resolvedTitle,
      action: withAction ? (
        <Button size="xs" variant="outline" onClick={() => abcToast.info('已打开诊断详情面板')}>
          查看详情
        </Button>
      ) : undefined,
    })
  }

  const card1Code = `import { Button, ToastCard, abcToast } from '@abc-design/react'

// 1. 命令式全局浮层通知
abcToast.${variant}({
  ${withDescription ? `title: '${resolvedTitle}',\n  ` : ''}message: '${withDescription ? resolvedDesc : resolvedTitle}',${withAction ? `\n  action: <Button size="xs" variant="outline">查看详情</Button>,` : ''}
})

// 2. 静态结构化诊断通知卡片 (ToastCard)
<ToastCard
  id="toast-preview"
  variant="${variant}"
  title="${resolvedTitle}"
  message="${resolvedDesc}"${withDiagnostics ? `\n  status={${variant === 'error' ? 503 : 200}}\n  code="QUOTA_THRESHOLD_WARN"\n  requestId="req_01JX9T4M8A"` : ''}${withAction ? `\n  actionHint="建议操作：进入配额策略页调高弹性阈值"` : ''}
  durationMs={null}
  onDismiss={() => setVisible(false)}
/>`

  const card2Code = `import { Button, Loading, LoadingStateCard, abcProgress } from '@abc-design/react'

<Loading spinning={${spinning}} tip="${tip}">
  <div className="p-4">受遮罩保护的数据面板</div>
</Loading>

<LoadingStateCard
  paused={${paused}}
  message="${paused ? '网络连接暂时中断，恢复连接后自动续传…' : '正在从控制平面拉取实例运行态指标…'}"
/>

<Button onClick={() => abcProgress.start()}>启动顶部进度条</Button>
<Button onClick={() => abcProgress.done()}>完成顶部进度条</Button>`

  const card3Code = `import { Progress, ProgressBar } from '@abc-design/react'

<Progress
  percent={${percent}}
  type="${progressType}"
  tone="${progressTone}"
  showInfo={${showInfo}}
/>

<ProgressBar
  value={${percent}}
  max={100}
  size="md"
  variant="${barVariant}"
  warningThreshold={${warningThreshold}}
  dangerThreshold={${dangerThreshold}}
/>`

  return (
    <PageContainer
      title="Toast 通知、加载态与进度条"
      subtitle="涵盖命令式全局消息 (abcToast)、结构化诊断卡 (ToastCard)、局部遮罩/弱网暂停态 (Loading / LoadingStateCard)、顶部进度控制器 (abcProgress) 与双形态进度条"
    >
      <div className="space-y-5">
        {/* 卡片 1: abcToast & ToastCard */}
        <ComponentDocPreview
          title="abcToast & ToastCard 结构化诊断卡片与全局浮层通知"
          components={['abcToast', 'ToastCard']}
          description="ToastCard 支持 HTTP 状态码、错误码与 Request ID 一键复制；abcToast 提供 info / success / warning / error 全局队列推送与悬停暂停倒计时。"
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
              <KnobText label="toastTitle" value={toastTitle} onChange={setToastTitle} placeholder="输入通知标题" />
              <KnobSwitch label="withDescription" checked={withDescription} onChange={setWithDescription} />
              <KnobSwitch label="withAction" checked={withAction} onChange={setWithAction} />
              <KnobSwitch label="withDiagnostics" checked={withDiagnostics} onChange={setWithDiagnostics} />
            </>
          }
          onResetKnobs={() => {
            setVariant('warning')
            setToastTitle('网关配额水位预警')
            setWithDescription(true)
            setWithAction(true)
            setWithDiagnostics(true)
            setCardVisible(true)
          }}
          code={card1Code}
          apiRows={[
            { prop: 'ToastCard.variant', type: "'info' | 'success' | 'warning' | 'error'", required: true, description: '卡片语义配色与图标样式' },
            { prop: 'ToastCard.durationMs', type: 'number | null', required: true, description: '自动消失毫秒数，传 null 表示常驻不自动关闭' },
            { prop: 'ToastCard.code / status / requestId', type: 'string / number / string', description: '可选错误码、HTTP 状态与支持一键复制的请求 ID' },
            { prop: 'ToastCard.actionHint', type: 'string', description: '卡片底部的排查建议动作提示' },
            { prop: 'abcToast[variant](opts)', type: '(ToastOptions | ReactNode) => string', description: '向全局 ToastContainer 推送通知并返回消息 ID' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Button size="sm" variant="primary" leftIcon={<BellRing className="h-3.5 w-3.5" />} onClick={fireGlobalToast}>
                弹出全局浮层通知 (abcToast.{variant})
              </Button>
              {!cardVisible && (
                <Button size="xs" variant="outline" leftIcon={<RotateCcw className="h-3 w-3" />} onClick={() => setCardVisible(true)}>
                  恢复 ToastCard 静态预览
                </Button>
              )}
            </div>
            {cardVisible && (
              <ToastCard
                id="playground-toast-card-preview"
                variant={variant}
                title={resolvedTitle}
                message={resolvedDesc}
                status={withDiagnostics ? (variant === 'error' ? 503 : 200) : undefined}
                code={withDiagnostics ? 'QUOTA_THRESHOLD_WARN' : undefined}
                requestId={withDiagnostics ? 'req_01JX9T4M8A' : undefined}
                actionHint={withAction ? '建议操作：前往配额管理页调高弹性阈值或开启限流' : undefined}
                durationMs={null}
                onDismiss={() => setCardVisible(false)}
              />
            )}
          </div>
        </ComponentDocPreview>

        {/* 卡片 2: Loading / LoadingStateCard / abcProgress */}
        <ComponentDocPreview
          title="Loading / LoadingStateCard / abcProgress 加载遮罩与弱网暂停态"
          components={['Loading', 'LoadingStateCard', 'TopProgressBar', 'abcProgress']}
          description="Loading 支持作为局部容器的半透明毛玻璃遮罩；LoadingStateCard 展示弱网暂停态提示；abcProgress 驱动页面顶部全局路由加载进度条。"
          controls={
            <>
              <KnobSwitch label="Loading.spinning" checked={spinning} onChange={setSpinning} />
              <KnobText label="tip" value={tip} onChange={setTip} placeholder="加载提示文案" />
              <KnobSwitch label="paused (弱网暂停态)" checked={paused} onChange={setPaused} />
            </>
          }
          onResetKnobs={() => {
            setSpinning(false)
            setTip('正在同步集群运行快照…')
            setPaused(false)
            abcProgress.done()
            setProgressActive(false)
          }}
          code={card2Code}
          apiRows={[
            { prop: 'Loading.spinning', type: 'boolean', defaultValue: 'true', description: '包裹 children 时切换半透明模糊遮罩显隐' },
            { prop: 'Loading.tip', type: 'string', description: '旋转指示器下方提示文字（别名 text）' },
            { prop: 'LoadingStateCard.paused', type: 'boolean', defaultValue: 'false', description: '弱网/断网时切为琥珀色提示与断网图标' },
            { prop: 'abcProgress.start / set / done', type: '() => void', description: '命令式控制顶部 TopProgressBar 启动、设值与收尾完成' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="xs"
                variant="primary"
                leftIcon={<Play className="h-3 w-3" />}
                onClick={() => {
                  abcProgress.start()
                  setProgressActive(true)
                }}
              >
                abcProgress.start()
              </Button>
              <Button
                size="xs"
                variant="outline"
                onClick={() => {
                  abcProgress.set(68)
                  setProgressActive(true)
                }}
              >
                abcProgress.set(68)
              </Button>
              <Button
                size="xs"
                variant="secondary"
                onClick={() => {
                  abcProgress.done()
                  setProgressActive(false)
                }}
              >
                abcProgress.done()
              </Button>
              <StatusTag tone={progressActive ? 'primary' : 'neutral'}>
                顶部路由进度条: {progressActive ? '加载中 (观察页面最顶端)' : '空闲'}
              </StatusTag>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Loading spinning={spinning} tip={tip.trim() || undefined}>
                <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 text-xs space-y-1.5">
                  <div className="font-semibold text-[var(--abc-fg)]">受 Loading 遮罩保护的业务区块</div>
                  <p className="text-[var(--abc-fg-muted)] leading-relaxed">
                    切换上方 <code className="font-mono">Loading.spinning</code> 开关，可在保留当前内容布局的前提下覆盖半透明模糊加载层，避免抖动。
                  </p>
                </div>
              </Loading>
              <LoadingStateCard
                paused={paused}
                message={
                  paused
                    ? '检测到弱网/离线状态，已暂停轮询并等待连接恢复…'
                    : '正在从控制平面拉取最新 Runner 节点状态…'
                }
              />
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3: Progress & ProgressBar */}
        <ComponentDocPreview
          title="Progress & ProgressBar 线性/环形进度与阈值语义条"
          components={['Progress', 'ProgressBar']}
          description="Progress 覆盖常规线性与 SVG 环形进度展示；ProgressBar 专用于配额水位监控，支持 auto 模式下按 warningThreshold / dangerThreshold 自动变色。"
          controls={
            <>
              <KnobNumber label="percent" value={percent} onChange={setPercent} min={0} max={100} step={5} />
              <KnobSegmented
                label="type"
                value={progressType}
                onChange={setProgressType}
                options={[
                  { label: 'line', value: 'line' },
                  { label: 'circle', value: 'circle' },
                ]}
              />
              <KnobSegmented
                label="tone"
                value={progressTone}
                onChange={setProgressTone}
                options={[
                  { label: 'primary', value: 'primary' },
                  { label: 'success', value: 'success' },
                  { label: 'warning', value: 'warning' },
                  { label: 'danger', value: 'danger' },
                ]}
              />
              <KnobSwitch label="showInfo" checked={showInfo} onChange={setShowInfo} />
              <KnobSelect
                label="bar.variant"
                value={barVariant}
                onChange={(v) => setBarVariant(v as NonNullable<ProgressBarProps['variant']>)}
                options={[
                  { label: 'auto (阈值变色)', value: 'auto' },
                  { label: 'default', value: 'default' },
                  { label: 'success', value: 'success' },
                  { label: 'warning', value: 'warning' },
                  { label: 'danger', value: 'danger' },
                ]}
              />
              <KnobNumber label="warnThreshold" value={warningThreshold} onChange={setWarningThreshold} min={10} max={95} step={5} />
              <KnobNumber label="dangerThreshold" value={dangerThreshold} onChange={setDangerThreshold} min={20} max={100} step={5} />
            </>
          }
          onResetKnobs={() => {
            setPercent(78)
            setProgressType('line')
            setProgressTone('primary')
            setShowInfo(true)
            setBarVariant('auto')
            setWarningThreshold(75)
            setDangerThreshold(90)
          }}
          code={card3Code}
          apiRows={[
            { prop: 'Progress.percent', type: 'number', required: true, description: '0 ~ 100 进度百分比（内部自动 Clamp）' },
            { prop: 'Progress.type', type: "'line' | 'circle'", defaultValue: "'line'", description: '线性条形或 SVG 环形进度' },
            { prop: 'Progress.tone', type: "'primary' | 'success' | 'warning' | 'danger'", defaultValue: "'primary'", description: '手动指定进度填充色' },
            { prop: 'Progress.showInfo', type: 'boolean', defaultValue: 'true', description: '是否展示右侧或中心百分比读数' },
            { prop: 'ProgressBar.variant', type: "'auto' | 'default' | 'success' | 'warning' | 'danger'", defaultValue: "'auto'", description: 'auto 模式根据阈值自动切换警报色' },
            { prop: 'ProgressBar.warningThreshold / dangerThreshold', type: 'number / number', defaultValue: '100 / 90', description: '触发 warning / danger 变色的百分比临界值' },
          ]}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 items-center">
            <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/50 p-4 space-y-3">
              <div className="text-xs font-semibold text-[var(--abc-fg)]">
                Progress ({progressType} · {progressTone})
              </div>
              <div className="flex items-center justify-center py-2">
                <Progress percent={percent} type={progressType} tone={progressTone} showInfo={showInfo} />
              </div>
            </div>
            <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/50 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--abc-fg)]">ProgressBar 配额水位 ({percent}%)</span>
                <span className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
                  warn ≥ {warningThreshold}% / danger ≥ {dangerThreshold}%
                </span>
              </div>
              <ProgressBar
                value={percent}
                max={100}
                size="md"
                variant={barVariant}
                warningThreshold={warningThreshold}
                dangerThreshold={dangerThreshold}
              />
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
