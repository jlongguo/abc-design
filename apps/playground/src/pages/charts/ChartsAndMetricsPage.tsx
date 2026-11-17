import React, { useMemo, useState } from 'react'
import {
  AbcChart,
  StatCard,
  buildAbcBaseChartOption,
  getAbcChartPalette,
  type EChartsOption,
} from '@abc-design/charts'
import {
  PageContainer,
  SkeletonChart,
  StatusTag,
  useAbcConfig,
  type SkeletonAnimation,
} from '@abc-design/react'
import { Activity, Coins, Server, Users } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch, KnobText } from '../../components/PropKnobs'

type DemoChartKind = 'line' | 'bar' | 'pie' | 'gauge'

export const ChartsAndMetricsPage: React.FC = () => {
  const { theme, resolvedTheme } = useAbcConfig()
  const isDark = resolvedTheme === 'dark'

  // 卡片 1: StatCard
  const [statLoading, setStatLoading] = useState(false)
  const [trendUp, setTrendUp] = useState(true)

  // 卡片 2: AbcChart
  const [chartKind, setChartKind] = useState<DemoChartKind>('line')
  const [chartHeight, setChartHeight] = useState<240 | 320 | 400>(320)
  const [chartLoading, setChartLoading] = useState(false)
  const [chartEmpty, setChartEmpty] = useState(false)
  const [emptyDescription, setEmptyDescription] = useState('当前筛选时段内暂无监控指标上报')
  const [clickedEvent, setClickedEvent] = useState('尚未点击图表数据项（可点击折线/柱子/饼块测试下钻）')

  // 卡片 3: SkeletonChart + Palette + BaseOption
  const [skeletonAnim, setSkeletonAnim] = useState<SkeletonAnimation>('wave')
  const [skeletonHeight, setSkeletonHeight] = useState<180 | 240>(240)

  const activePalette = useMemo(
    () => getAbcChartPalette(theme.brand, isDark),
    [theme.brand, isDark]
  )

  const chartOption = useMemo<EChartsOption>(() => {
    if (chartKind === 'bar') {
      return {
        tooltip: { trigger: 'axis' },
        legend: { top: 0 },
        grid: { left: 16, right: 16, top: 36, bottom: 12, containLabel: true },
        xAxis: { type: 'category', data: ['华东集群', '华北集群', '华南集群', '新加坡', '法兰克福'] },
        yAxis: { type: 'value', name: 'QPS (千次/秒)' },
        series: [
          { name: '峰值流量', type: 'bar', barMaxWidth: 26, data: [142, 118, 96, 84, 63] },
          { name: '日常基线', type: 'bar', barMaxWidth: 26, data: [88, 76, 61, 52, 39] },
        ],
      }
    }
    if (chartKind === 'pie') {
      return {
        tooltip: { trigger: 'item' },
        legend: { bottom: 0 },
        series: [
          {
            name: '租户行业分布',
            type: 'pie',
            radius: ['44%', '70%'],
            center: ['50%', '45%'],
            itemStyle: { borderRadius: 6, borderWidth: 2 },
            data: [
              { value: 420, name: '跨境电商 SaaS' },
              { value: 310, name: '智能制造 MES' },
              { value: 235, name: '金融清结算' },
              { value: 165, name: '医疗影像云' },
            ],
          },
        ],
      }
    }
    if (chartKind === 'gauge') {
      return {
        series: [
          {
            type: 'gauge',
            progress: { show: true, width: 12 },
            axisLine: { lineStyle: { width: 12 } },
            axisTick: { show: false },
            splitLine: { length: 8, lineStyle: { width: 2 } },
            detail: { valueAnimation: true, formatter: '{value}%', fontSize: 22, offsetCenter: [0, '68%'] },
            data: [{ value: 99.94, name: '核心网关 SLA 可用率' }],
          },
        ],
      }
    }
    return {
      tooltip: { trigger: 'axis' },
      legend: { top: 0 },
      grid: { left: 16, right: 16, top: 36, bottom: 12, containLabel: true },
      xAxis: { type: 'category', boundaryGap: false, data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'] },
      yAxis: { type: 'value', name: '结算额 (万元)' },
      series: [
        { name: '实时清分净额', type: 'line', smooth: true, areaStyle: { opacity: 0.16 }, data: [32, 24, 68, 146, 132, 189, 164] },
        { name: '上周同期均值', type: 'line', smooth: true, data: [28, 19, 54, 112, 108, 145, 129] },
      ],
    }
  }, [chartKind])

  // 依赖项包含 chartLoading / chartEmpty 确保状态恢复后重新挂载点击事件监听器
  const chartEvents = useMemo(
    () => ({
      click: (params: any) => {
        const seriesName = params?.seriesName ?? chartKind
        const label = params?.name ?? '未知项'
        const val = typeof params?.value === 'object' ? JSON.stringify(params.value) : params?.value
        setClickedEvent(`系列: ${seriesName} · 类目: ${label} · 数值: ${val ?? '-'}`)
      },
    }),
    [chartKind, chartLoading, chartEmpty]
  )

  const mergedOptionPreview = useMemo(
    () =>
      buildAbcBaseChartOption(
        {
          legend: { top: 0 },
          xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed'] },
          yAxis: { type: 'value' },
        },
        theme.brand,
        isDark
      ),
    [theme.brand, isDark]
  )

  const sign = trendUp ? 1 : -1

  const card1Code = `import { StatCard } from '@abc-design/charts'
import { Coins } from 'lucide-react'

<StatCard
  title="本月总清结算净额"
  prefix="¥"
  value="4,829,510"
  trend={${(sign * 14.8).toFixed(1)}}
  trendLabel="${trendUp ? '较上月同期增长' : '较上月同期回落'}"
  footer="日均 32.4 万笔"
  loading={${statLoading}}
  icon={<Coins className="h-4 w-4" />}
/>`

  const card2Code = `import { AbcChart, type EChartsOption } from '@abc-design/charts'

const option: EChartsOption = ${JSON.stringify(chartOption, null, 2)}

<AbcChart
  option={option}
  height={${chartHeight}}
  loading={${chartLoading}}
  empty={${chartEmpty}}
  emptyDescription="${emptyDescription}"
  onEvents={{ click: (params) => console.log(params.name, params.value) }}
/>`

  const card3Code = `import { SkeletonChart, useAbcConfig } from '@abc-design/react'
import { buildAbcBaseChartOption, getAbcChartPalette } from '@abc-design/charts'

const { theme, resolvedTheme } = useAbcConfig()
const palette = getAbcChartPalette('${theme.brand}', ${isDark})
const option = buildAbcBaseChartOption(rawOption, '${theme.brand}', ${isDark})

<SkeletonChart height={${skeletonHeight}} animation="${skeletonAnim}" />`

  return (
    <PageContainer
      title="自适应图表、指标卡与色盘"
      subtitle="基于 ECharts 5 按需构建：自动感知 AbcProvider 品牌主色与 resolvedTheme 明暗模式，内置 ResizeObserver 局部容器自适应与空/骨架态切换"
    >
      <div className="space-y-5">
        {/* 卡片 1: StatCard */}
        <ComponentDocPreview
          title="StatCard 企业级核心经营指标卡"
          pkg="@abc-design/charts"
          components={['StatCard']}
          description="内置 font-mono tabular-nums 等宽数字防抖动排版、正负零趋势语义徽标与加载骨架屏切换。"
          controls={
            <>
              <KnobSwitch label="loading" checked={statLoading} onChange={setStatLoading} />
              <KnobSwitch label="trendUp (正负趋势)" checked={trendUp} onChange={setTrendUp} />
            </>
          }
          onResetKnobs={() => {
            setStatLoading(false)
            setTrendUp(true)
          }}
          code={card1Code}
          apiRows={[
            { prop: 'title / label', type: 'ReactNode', description: '指标卡顶部标题' },
            { prop: 'value', type: 'ReactNode', required: true, description: '核心指标数值（默认开启等宽数字对齐）' },
            { prop: 'prefix / suffix', type: 'ReactNode', description: '数值单位前后缀（如 ¥、%、ms）' },
            { prop: 'trend', type: 'number | ReactNode', description: '正数渲染绿标、负数渲染红标、0 渲染中性灰标' },
            { prop: 'loading', type: 'boolean', defaultValue: 'false', description: '加载中切换等高骨架占位态' },
          ]}
        >
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="本月总清结算净额"
              prefix="¥"
              value="4,829,510"
              trend={sign * 14.8}
              trendLabel={trendUp ? '环比增长' : '环比回落'}
              footer="日均 32.4 万笔"
              loading={statLoading}
              icon={<Coins className="h-4 w-4" />}
            />
            <StatCard
              title="活跃企业租户数"
              value="1,284"
              suffix="家"
              trend={sign * 6.2}
              trendLabel={trendUp ? '净增签约' : '净流失'}
              footer="续约率 96.4%"
              loading={statLoading}
              icon={<Users className="h-4 w-4" />}
            />
            <StatCard
              title="核心网关 P99 延迟"
              value="18.4"
              suffix="ms"
              trend={trendUp ? -9.5 : 12.3}
              trendLabel={trendUp ? '耗时下降' : '延迟上升'}
              footer="SLA 99.98%"
              loading={statLoading}
              icon={<Activity className="h-4 w-4" />}
            />
            <StatCard
              title="在线计算节点"
              value="96 / 96"
              trend={0}
              trendLabel="稳态运行"
              footer="CPU 均值 41.2%"
              loading={statLoading}
              icon={<Server className="h-4 w-4" />}
            />
          </div>
        </ComponentDocPreview>

        {/* 卡片 2: AbcChart */}
        <ComponentDocPreview
          title="AbcChart / Chart 自适应 ECharts 容器与下钻事件"
          pkg="@abc-design/charts"
          components={['AbcChart', 'Chart']}
          description="自动注入当前品牌色板与明暗坐标轴基线，通过 ResizeObserver 响应抽屉调宽/侧边栏折叠，并支持 loading、empty 与 onEvents 交互回执。"
          controls={
            <>
              <KnobSegmented
                label="图表类型"
                value={chartKind}
                onChange={setChartKind}
                options={[
                  { label: 'line', value: 'line' },
                  { label: 'bar', value: 'bar' },
                  { label: 'pie', value: 'pie' },
                  { label: 'gauge', value: 'gauge' },
                ]}
              />
              <KnobSegmented
                label="height"
                value={chartHeight}
                onChange={setChartHeight}
                options={[
                  { label: '240px', value: 240 },
                  { label: '320px', value: 320 },
                  { label: '400px', value: 400 },
                ]}
              />
              <KnobSwitch label="loading" checked={chartLoading} onChange={setChartLoading} />
              <KnobSwitch label="empty" checked={chartEmpty} onChange={setChartEmpty} />
              <KnobText label="emptyDescription" value={emptyDescription} onChange={setEmptyDescription} placeholder="空态描述文案" widthClass="w-52" />
            </>
          }
          onResetKnobs={() => {
            setChartKind('line')
            setChartHeight(320)
            setChartLoading(false)
            setChartEmpty(false)
            setEmptyDescription('当前筛选时段内暂无监控指标上报')
            setClickedEvent('尚未点击图表数据项（可点击折线/柱子/饼块测试下钻）')
          }}
          code={card2Code}
          apiRows={[
            { prop: 'option', type: 'EChartsOption | Record<string, any>', required: true, description: 'ECharts 标准配置，自动合并主题坐标轴与浮层颜色' },
            { prop: 'height', type: 'number | string', defaultValue: '300', description: '图表容器高度，数值自动拼接 px' },
            { prop: 'loading / empty', type: 'boolean', defaultValue: 'false', description: '分别渲染等高 Skeleton 与 EmptyState 占位' },
            { prop: 'emptyDescription', type: 'string', defaultValue: "'暂无图表统计数据'", description: 'empty=true 时展示的辅助说明文字' },
            { prop: 'onEvents', type: 'Record<string, (params, instance) => void>', description: '图表交互事件映射（如 click / legendselectchanged）' },
          ]}
        >
          <div className="space-y-3">
            <AbcChart
              option={chartOption}
              height={chartHeight}
              loading={chartLoading}
              empty={chartEmpty}
              emptyDescription={emptyDescription}
              onEvents={chartEvents}
            />
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs">
              <span className="text-[var(--abc-fg-secondary)]">
                onEvents.click 实时回执：<strong className="font-mono text-[var(--abc-fg)]">{clickedEvent}</strong>
              </span>
              <StatusTag tone="info">{theme.brand} · {resolvedTheme}</StatusTag>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3: SkeletonChart + getAbcChartPalette + buildAbcBaseChartOption */}
        <ComponentDocPreview
          title="SkeletonChart + getAbcChartPalette + buildAbcBaseChartOption"
          pkg="@abc-design/charts"
          components={['SkeletonChart', 'getAbcChartPalette', 'buildAbcBaseChartOption']}
          description="实时读取 useAbcConfig() 中的 theme.brand 与 resolvedTheme === 'dark' 生成 7 色调色板胶囊，并预览坐标轴与浮层选项合并结果。"
          controls={
            <>
              <KnobSegmented
                label="animation"
                value={skeletonAnim}
                onChange={setSkeletonAnim}
                options={[
                  { label: 'wave', value: 'wave' },
                  { label: 'pulse', value: 'pulse' },
                  { label: 'none', value: 'none' },
                ]}
              />
              <KnobSegmented
                label="skeletonHeight"
                value={skeletonHeight}
                onChange={setSkeletonHeight}
                options={[
                  { label: '180px', value: 180 },
                  { label: '240px', value: 240 },
                ]}
              />
            </>
          }
          onResetKnobs={() => {
            setSkeletonAnim('wave')
            setSkeletonHeight(240)
          }}
          code={card3Code}
          apiRows={[
            { prop: 'SkeletonChart.animation', type: "'wave' | 'pulse' | 'none'", defaultValue: "'wave'", description: '报表占位骨架动画模式' },
            { prop: 'SkeletonChart.height', type: 'number | string', defaultValue: '288', description: '骨架屏容器高度，防止异步渲染 CLS 偏移' },
            { prop: 'getAbcChartPalette(brand, isDark)', type: 'string[]', description: '结合品牌主色阶与语义辅色返回 7 色数组' },
            { prop: 'buildAbcBaseChartOption(opt, brand, isDark)', type: 'EChartsOption', description: '自动注入明暗自适应坐标轴线、虚线网格、Legend 与 Tooltip 样式' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[var(--abc-fg-secondary)]">
                实时 7 色调色板 (brand=<code className="font-mono">{theme.brand}</code>, isDark=<code className="font-mono">{String(isDark)}</code>)：
              </span>
              {activePalette.map((hex, idx) => (
                <span
                  key={`${hex}-${idx}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-2.5 py-0.5 font-mono text-[11px]"
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: hex }} />
                  {hex}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <SkeletonChart height={skeletonHeight} animation={skeletonAnim} />
              <pre
                style={{ maxHeight: skeletonHeight }}
                className="overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 font-mono text-[11px] leading-relaxed text-[var(--abc-fg-secondary)]"
              >
                {JSON.stringify(mergedOptionPreview, null, 2)}
              </pre>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
