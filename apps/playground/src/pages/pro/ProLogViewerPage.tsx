import React, { useEffect, useMemo, useState } from 'react'
import { Button, PageContainer, ProLogViewer, StatusTag, type LogEntry } from '@abc-design/react'
import { Play, RefreshCw, Search, Trash2, Zap } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

const SAMPLE_MESSAGES = [
  'CDP 会话握手成功，注入防指纹运行时策略',
  '调度器已续约节点 runner-cn-east-04 租约 (TTL 30s)',
  '代理通道 socks5://gateway-02 RTT 波动至 280ms，已切换备用线路',
  '脚本步骤 #4 extract_html 完成，产物体积 184.2 KB',
  '目标站点返回 HTTP 429 速率限制，自动退避重试 #1',
  '页面导航超时 (timeout=15000ms)，已保存现场错误截图与 DOM 快照',
]

function buildSimulationLogs(count: number): LogEntry[] {
  const levels: Array<'info' | 'warn' | 'error'> = ['info', 'info', 'info', 'info', 'warn', 'error']
  const baseTs = Date.now() - count * 1000
  return Array.from({ length: count }, (_, idx) => {
    const level = levels[idx % levels.length]
    const seq = idx + 1
    return {
      seq,
      level,
      message: `[#${String(seq).padStart(4, '0')}] ${SAMPLE_MESSAGES[idx % SAMPLE_MESSAGES.length]}`,
      created_at: new Date(baseTs + idx * 1000).toISOString(),
      detail:
        level === 'error'
          ? { runner: `runner-${(idx % 5) + 1}`, code: 'ERR_NAV_TIMEOUT', retryable: true }
          : undefined,
    }
  })
}

/**
 * ProLogViewer 高性能虚拟滚动日志查看器文档页
 */
export const ProLogViewerPage: React.FC = () => {
  const [logScale, setLogScale] = useState<number>(2000)
  const [variant, setVariant] = useState<'terminal' | 'surface'>('terminal')
  const [heightClass, setHeightClass] = useState<'h-[320px]' | 'h-[440px]'>('h-[440px]')
  const [defaultStickBottom, setDefaultStickBottom] = useState(false)
  const [estimateSize, setEstimateSize] = useState(26)
  const [overscan, setOverscan] = useState(12)
  const [streaming, setStreaming] = useState(false)
  const [logs, setLogs] = useState<LogEntry[]>(() => buildSimulationLogs(2000))

  const handleScaleChange = (nextScale: number) => {
    setLogScale(nextScale)
    setLogs(buildSimulationLogs(nextScale))
  }

  const appendLog = (level: 'info' | 'warn' | 'error', message: string) => {
    setLogs((prev) => {
      const nextSeq = (prev[prev.length - 1]?.seq ?? prev.length) + 1
      return [
        ...prev,
        {
          seq: nextSeq,
          level,
          message: `[#${String(nextSeq).padStart(4, '0')}] ${message}`,
          created_at: new Date().toISOString(),
          detail: level === 'error' ? { code: 'ERR_POOL_EXHAUSTED', worker: 'w-09' } : undefined,
        },
      ]
    })
  }

  useEffect(() => {
    if (!streaming) return
    const timer = window.setInterval(() => {
      appendLog('info', '实时流式心跳：当前并发浏览器上下文 42 个，内存占用 61%')
    }, 800)
    return () => window.clearInterval(timer)
  }, [streaming])

  const stats = useMemo(() => {
    let info = 0
    let warn = 0
    let error = 0
    for (const item of logs) {
      const lvl = (item.level ?? 'info').toLowerCase()
      if (lvl === 'error') error += 1
      else if (lvl === 'warn') warn += 1
      else info += 1
    }
    return { total: logs.length, info, warn, error }
  }, [logs])

  return (
    <PageContainer
      title="ProLogViewer 虚拟滚动日志"
      subtitle="零重依赖原生 ResizeObserver 视口切片虚拟滚动引擎，支持数万条日志 60FPS 流畅渲染、级别筛选、详情 JSON 透出与流式贴底追踪。"
      breadcrumbs={[{ label: 'Pro 企业套件与模板' }, { label: '虚拟滚动日志' }]}
    >
      <ComponentDocPreview
        title="ProLogViewer (别名 VirtualLogViewer) 高性能虚拟滚动日志查看器"
        components={['ProLogViewer', 'VirtualLogViewer']}
        description="支持结构化 LogEntry 与纯文本行混排；当过滤后行数超过 80 行时自动切换至绝对定位虚拟切片窗口，内置关键字即时检索、级别过滤胶囊、自动贴底追踪及一键格式化复制。"
        onResetKnobs={() => {
          setLogScale(2000)
          setVariant('terminal')
          setHeightClass('h-[440px]')
          setDefaultStickBottom(false)
          setEstimateSize(26)
          setOverscan(12)
          setStreaming(false)
          setLogs(buildSimulationLogs(2000))
        }}
        controls={
          <>
            <KnobSegmented
              label="日志规模"
              value={logScale}
              onChange={handleScaleChange}
              options={[
                { label: '200 行', value: 200 },
                { label: '2,000 行', value: 2000 },
                { label: '8,000 行', value: 8000 },
              ]}
            />
            <KnobSegmented
              label="variant"
              value={variant}
              onChange={setVariant}
              options={[
                { label: 'terminal', value: 'terminal' },
                { label: 'surface', value: 'surface' },
              ]}
            />
            <KnobSegmented
              label="heightClass"
              value={heightClass}
              onChange={setHeightClass}
              options={[
                { label: 'h-[320px]', value: 'h-[320px]' },
                { label: 'h-[440px]', value: 'h-[440px]' },
              ]}
            />
            <KnobSwitch label="defaultStickBottom" checked={defaultStickBottom} onChange={setDefaultStickBottom} />
            <KnobNumber label="estimateSize" value={estimateSize} onChange={setEstimateSize} min={20} max={40} step={2} />
            <KnobNumber label="overscan" value={overscan} onChange={setOverscan} min={4} max={30} step={2} />
            <KnobSwitch label="实时流式写入新日志" checked={streaming} onChange={setStreaming} />
          </>
        }
        code={`import { ProLogViewer, type LogEntry } from '@abc-design/react'

<ProLogViewer
  logs={logs} // 当前 ${stats.total.toLocaleString()} 条
  heightClass="${heightClass}"
  defaultStickBottom={${defaultStickBottom}}
  estimateSize={${estimateSize}}
  overscan={${overscan}}
/>`}
        apiRows={[
          { prop: 'logs', type: 'Array<LogEntry | string>', required: true, description: '结构化日志对象（seq/level/message/detail/created_at）或纯文本行数组' },
          { prop: 'heightClass', type: 'string', defaultValue: "'h-[440px]'", description: '控制日志视口固定高度的 Tailwind 类名' },
          { prop: 'defaultStickBottom', type: 'boolean', defaultValue: 'false', description: '初始是否开启有新日志追加时自动滚动贴底' },
          { prop: 'estimateSize', type: 'number', defaultValue: '26', description: '单行日志预估高度（px），用于计算虚拟容器总高度与切片偏移' },
          { prop: 'overscan', type: 'number', defaultValue: '12', description: '可视区域上下额外缓冲渲染的日志条数，减少快速滚动白屏' },
          { prop: 'labels', type: 'ProLogViewerLabels', description: '自定义搜索占位、行数格式化及空状态多语言文案字典' },
        ]}
      >
        <div className="space-y-3">
          {/* 自动统计条与压测注入工具栏 */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <StatusTag tone="info" className="font-mono">总计: {stats.total.toLocaleString()}</StatusTag>
              <StatusTag tone="neutral" className="font-mono">INFO: {stats.info.toLocaleString()}</StatusTag>
              <StatusTag tone="warning" className="font-mono">WARN: {stats.warn.toLocaleString()}</StatusTag>
              <StatusTag tone="danger" className="font-mono">ERROR: {stats.error.toLocaleString()}</StatusTag>
              <StatusTag tone={stats.total > 80 ? 'success' : 'neutral'}>
                {stats.total > 80 ? '虚拟切片已激活 (>80 行)' : '常规流式渲染'}
              </StatusTag>
              {streaming && <StatusTag tone="success" dot pulse>流式写入中 (800ms/条)</StatusTag>}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <Button
                size="xs"
                variant="primary"
                leftIcon={<Play className="h-3 w-3" />}
                onClick={() =>
                  setLogs((prev) => [
                    ...prev,
                    ...buildSimulationLogs(500).map((item, idx) => ({
                      ...item,
                      seq: prev.length + idx + 1,
                      message: `[#${String(prev.length + idx + 1).padStart(4, '0')}] 批量追加压测日志条目`,
                    })),
                  ])
                }
              >
                追加 500 条
              </Button>
              <Button
                size="xs"
                variant="danger"
                leftIcon={<Zap className="h-3 w-3" />}
                onClick={() => appendLog('error', 'Runner 资源池连接耗尽，等待队列超出上限 (ERR_NAV_TIMEOUT)')}
              >
                注入 Error
              </Button>
              <Button
                size="xs"
                variant="outline"
                leftIcon={<RefreshCw className="h-3 w-3" />}
                onClick={() => setLogs(buildSimulationLogs(logScale))}
              >
                重置 {logScale.toLocaleString()} 条
              </Button>
              <Button size="xs" variant="ghost" leftIcon={<Trash2 className="h-3 w-3" />} onClick={() => setLogs([])}>
                清空
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-[var(--abc-fg-muted)]">
            <Search className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
            <span>可在下方检索框输入关键词快速高亮过滤：</span>
            {['ERR_NAV_TIMEOUT', 'gateway-02', 'extract_html', '429'].map((kw) => (
              <code
                key={kw}
                className="rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-secondary)]"
              >
                {kw}
              </code>
            ))}
          </div>

          <ProLogViewer
            key={`log-viewer-${String(defaultStickBottom)}`}
            logs={logs}
            variant={variant}
            heightClass={heightClass}
            defaultStickBottom={defaultStickBottom}
            estimateSize={estimateSize}
            overscan={overscan}
          />
        </div>
      </ComponentDocPreview>
    </PageContainer>
  )
}
export default ProLogViewerPage
