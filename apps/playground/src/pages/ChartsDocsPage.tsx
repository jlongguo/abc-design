import React, { useMemo, useState } from 'react'
import {
  AbcChart,
  StatCard,
  buildAbcBaseChartOption,
  getAbcChartPalette,
  type EChartsOption,
} from '@abc-design/charts'
import {
  Checkbox,
  PageContainer,
  RadioGroup,
  SkeletonChart,
  useAbcConfig,
} from '@abc-design/react'
import { Activity, Coins, Server, Users } from 'lucide-react'
import { ComponentDocPreview } from '../components/ComponentDocPreview'

type DemoChartKind = 'line' | 'bar' | 'pie' | 'gauge'

export const ChartsDocsPage: React.FC = () => {
  const { theme, resolvedTheme } = useAbcConfig()
  const [chartKind, setChartKind] = useState<DemoChartKind>('line')
  const [chartLoading, setChartLoading] = useState(false)
  const [chartEmpty, setChartEmpty] = useState(false)
  const [statLoading, setStatLoading] = useState(false)
  const [skeletonAnim, setSkeletonAnim] = useState<'wave' | 'pulse'>('wave')
  const activePalette = useMemo(
    () => getAbcChartPalette(theme.brand, resolvedTheme === 'dark'),
    [theme.brand, resolvedTheme]
  )

  const chartOption = useMemo<EChartsOption>(() => {
    if (chartKind === 'bar') {
      return {
        tooltip: { trigger: 'axis' },
        legend: { top: 0 },
        grid: { left: 16, right: 16, top: 36, bottom: 12, containLabel: true },
        xAxis: {
          type: 'category',
          data: ['华东集群', '华北集群', '华南集群', '亚太新加坡', '法兰克福'],
        },
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
            radius: ['45%', '72%'],
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
            detail: {
              valueAnimation: true,
              formatter: '{value}%',
              fontSize: 22,
              offsetCenter: [0, '68%'],
            },
            data: [{ value: 99.94, name: '核心网关 SLA 可用率' }],
          },
        ],
      }
    }

    return {
      tooltip: { trigger: 'axis' },
      legend: { top: 0 },
      grid: { left: 16, right: 16, top: 36, bottom: 12, containLabel: true },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
      },
      yAxis: { type: 'value', name: '结算额 (万元)' },
      series: [
        {
          name: '实时清分净额',
          type: 'line',
          smooth: true,
          areaStyle: { opacity: 0.16 },
          data: [32, 24, 68, 146, 132, 189, 164],
        },
        {
          name: '上周同期均值',
          type: 'line',
          smooth: true,
          data: [28, 19, 54, 112, 108, 145, 129],
        },
      ],
    }
  }, [chartKind])

  return (
    <PageContainer
      title="图表与经营指标卡文档 (@abc-design/charts)"
      subtitle="基于 ECharts 5 按需 Tree-shaking 构建：自动跟随明暗主题与 6 大品牌色板切换，内置 ResizeObserver 容器自适应"
    >
      <div className="space-y-5">
        {/* 1. StatCard */}
        <ComponentDocPreview
          title="StatCard 大盘核心经营指标卡"
          pkg="@abc-design/charts"
          description="内置等宽数字对齐 (tabular-nums) 防止动态刷新抖动，原生支持同环比涨跌语义徽标、加载骨架屏与底部补充说明。"
          controls={
            <Checkbox label="loading (骨架屏态)" checked={statLoading} onChange={setStatLoading} />
          }
          code={`import { StatCard } from '@abc-design/charts'
import { Coins } from 'lucide-react'

<StatCard
  title="本月总清结算净额"
  prefix="¥"
  value="4,829,510.00"
  trend={14.8}
  trendLabel="较上月同期"
  footer="日均处理 32.4 万笔"
  loading={${statLoading}}
  icon={<Coins className="h-4 w-4" />}
/>`}
          apiRows={[
            { prop: 'title', type: 'ReactNode', required: true, description: '指标卡标题' },
            { prop: 'value', type: 'ReactNode', required: true, description: '主指标数值（自动启用 font-mono tabular-nums）' },
            { prop: 'prefix / suffix', type: 'ReactNode', description: '数值前后缀符号（如 ¥、%、ms）' },
            { prop: 'trend', type: 'number', description: '涨跌百分比：正数渲染绿标、负数渲染红标、0 渲染中性灰标' },
            { prop: 'loading', type: 'boolean', defaultValue: 'false', description: '加载骨架屏占位' },
          ]}
        >
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="本月总清结算净额"
              prefix="¥"
              value="4,829,510"
              trend={14.8}
              trendLabel="较上月同期"
              footer="日均 32.4 万笔"
              loading={statLoading}
              icon={<Coins className="h-4 w-4" />}
            />
            <StatCard
              title="活跃企业租户数"
              value="1,284"
              suffix="家"
              trend={6.2}
              footer="本周新增签约 19 家"
              loading={statLoading}
              icon={<Users className="h-4 w-4" />}
            />
            <StatCard
              title="核心网关 P99 延迟"
              value="18.4"
              suffix="ms"
              trend={-9.5}
              trendLabel="响应提速"
              footer="SLA 99.98%"
              loading={statLoading}
              icon={<Activity className="h-4 w-4" />}
            />
            <StatCard
              title="在线计算节点"
              value="96 / 96"
              trend={0}
              trendLabel="健康零告警"
              footer="CPU 均值 41.2%"
              loading={statLoading}
              icon={<Server className="h-4 w-4" />}
            />
          </div>
        </ComponentDocPreview>

        {/* 2. AbcChart */}
        <ComponentDocPreview
          title="AbcChart / Chart 自适应 ECharts 容器"
          pkg="@abc-design/charts"
          description="告别业务页手写 isDark 判断与 window.resize 监听：自动读取 AbcProvider 的当前品牌色与暗黑模式注入色盘，并通过 ResizeObserver 响应侧边栏折叠与抽屉伸缩。"
          controls={
            <>
              <RadioGroup
                variant="segmented"
                value={chartKind}
                onChange={(v) => setChartKind(v as DemoChartKind)}
                options={[
                  { label: '面积折线图 (Line)', value: 'line' },
                  { label: '分组柱状图 (Bar)', value: 'bar' },
                  { label: '环形占比图 (Pie)', value: 'pie' },
                  { label: 'SLA 仪表盘 (Gauge)', value: 'gauge' },
                ]}
              />
              <Checkbox label="loading" checked={chartLoading} onChange={setChartLoading} />
              <Checkbox label="empty (空状态)" checked={chartEmpty} onChange={setChartEmpty} />
            </>
          }
          code={`import { AbcChart, type EChartsOption } from '@abc-design/charts'

const option: EChartsOption = ${JSON.stringify(chartOption, null, 2)}

export function RevenueTrendChart() {
  return (
    <AbcChart
      option={option}
      height={320}
      loading={${chartLoading}}
      empty={${chartEmpty}}
    />
  )
}`}
          apiRows={[
            { prop: 'option', type: 'EChartsOption', required: true, description: '标准 ECharts 配置对象（无需手动指定暗色坐标轴或品牌色盘）' },
            { prop: 'height', type: 'number | string', defaultValue: '300', description: '图表高度（亦兼容 style={{ height }} 写法）' },
            { prop: 'loading', type: 'boolean', defaultValue: 'false', description: '加载态自动渲染同高度 Skeleton 骨架' },
            { prop: 'empty', type: 'boolean', defaultValue: 'false', description: '空数据态自动销毁画布并展示语义化 EmptyState' },
            { prop: 'onEvents', type: 'Record<string, Function>', description: '兼容原 echarts-for-react 的图表点击/下钻事件映射' },
          ]}
        >
          <AbcChart
            option={chartOption}
            height={320}
            loading={chartLoading}
            empty={chartEmpty}
            emptyDescription="当前筛选时段内暂无监控指标上报"
          />
        </ComponentDocPreview>

        {/* 3. SkeletonChart + getAbcChartPalette / buildAbcBaseChartOption */}
        <ComponentDocPreview
          title="SkeletonChart / getAbcChartPalette / buildAbcBaseChartOption 图表骨架与主题调色板"
          pkg="@abc-design/charts"
          description="展示独立可用的报表占位骨架 SkeletonChart，以及跟随 AbcProvider 品牌主色与明暗方案实时合成的 7 序列图表色盘与坐标轴基准配置。"
          controls={
            <RadioGroup
              variant="segmented"
              value={skeletonAnim}
              onChange={(v) => setSkeletonAnim(v as 'wave' | 'pulse')}
              options={[
                { label: 'wave 流光波纹', value: 'wave' },
                { label: 'pulse 呼吸闪烁', value: 'pulse' },
              ]}
            />
          }
          code={`import { SkeletonChart } from '@abc-design/react'
import { getAbcChartPalette, buildAbcBaseChartOption } from '@abc-design/charts'

const palette = getAbcChartPalette('${theme.brand}', ${resolvedTheme === 'dark'})
const mergedOption = buildAbcBaseChartOption(rawOption, '${theme.brand}', ${resolvedTheme === 'dark'})
<SkeletonChart height={220} animation="${skeletonAnim}" />`}
          apiRows={[
            { prop: 'SkeletonChart.animation', type: "'wave' | 'pulse' | 'none'", defaultValue: "'wave'", description: '骨架屏流光扫描动画风格' },
            { prop: 'getAbcChartPalette(brand, isDark)', type: 'string[]', description: '返回随品牌强调色自动协调的 7 色系列调色板' },
            { prop: 'buildAbcBaseChartOption(option, brand, isDark)', type: 'EChartsOption', description: '为自定义 ECharts 实例注入一致的暗黑坐标轴与浮层基线' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[var(--abc-fg-secondary)]">
                当前品牌 ({theme.brand} · {resolvedTheme}) 实时色盘：
              </span>
              {activePalette.map((hex, i) => (
                <span
                  key={`${hex}-${i}`}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-2 py-0.5 font-mono text-[11px]"
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: hex }} />
                  {hex}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <SkeletonChart height={210} animation={skeletonAnim} />
              <pre className="max-h-[210px] overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 font-mono text-[11px] leading-relaxed text-[var(--abc-fg-secondary)]">
                {JSON.stringify(
                  buildAbcBaseChartOption(
                    { xAxis: { type: 'category', data: ['Mon', 'Tue'] }, yAxis: { type: 'value' } },
                    theme.brand,
                    resolvedTheme === 'dark'
                  ),
                  null,
                  2
                )}
              </pre>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
