import React, { useEffect, useMemo, useRef } from 'react'
import { ABC_BRAND_PRESETS, type AbcBrandColor } from '@abc-design/tokens'
import { EmptyState, Skeleton, useAbcConfig } from '@abc-design/react'
import clsx from 'clsx'
import { echarts, type EChartsOption, type EChartsType } from './echarts'

/** 根据当前品牌色与明暗模式生成和谐的多序列图表色盘 */
export function getAbcChartPalette(brand: AbcBrandColor = 'blue', isDark = false): string[] {
  const primary = ABC_BRAND_PRESETS[brand]?.scale[isDark ? 400 : 600] ?? '#2563eb'
  const secondary = ABC_BRAND_PRESETS[brand]?.scale[isDark ? 300 : 400] ?? '#60a5fa'
  return [
    primary,
    '#10b981',
    '#f59e0b',
    '#8b5cf6',
    '#06b6d4',
    '#f43f5e',
    secondary,
  ]
}

/** 构造跟随明暗模式的默认坐标轴、网格线与浮层视觉基线 */
export function buildAbcBaseChartOption(
  option: EChartsOption | Record<string, any>,
  brand: AbcBrandColor,
  isDark: boolean
): EChartsOption {
  const axisColor = isDark ? '#334155' : '#e2e8f0'
  const labelColor = isDark ? '#94a3b8' : '#64748b'
  const splitColor = isDark ? 'rgba(51, 65, 85, 0.55)' : 'rgba(226, 232, 240, 0.75)'

  const defaultAxis = {
    axisLine: { lineStyle: { color: axisColor } },
    axisLabel: { color: labelColor, fontSize: 11 },
    splitLine: { lineStyle: { color: splitColor, type: 'dashed' as const } },
    nameTextStyle: { color: labelColor },
  }

  const mergeAxis = (rawAxis: any) => {
    if (!rawAxis) return undefined
    if (Array.isArray(rawAxis)) {
      return rawAxis.map((item) => ({
        ...defaultAxis,
        ...item,
        axisLine: { ...defaultAxis.axisLine, ...item?.axisLine },
        axisLabel: { ...defaultAxis.axisLabel, ...item?.axisLabel },
        splitLine: { ...defaultAxis.splitLine, ...item?.splitLine },
      }))
    }
    return {
      ...defaultAxis,
      ...rawAxis,
      axisLine: { ...defaultAxis.axisLine, ...rawAxis?.axisLine },
      axisLabel: { ...defaultAxis.axisLabel, ...rawAxis?.axisLabel },
      splitLine: { ...defaultAxis.splitLine, ...rawAxis?.splitLine },
    }
  }

  return {
    color: option.color ?? getAbcChartPalette(brand, isDark),
    backgroundColor: 'transparent',
    textStyle: {
      fontFamily:
        "Inter, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif",
      color: isDark ? '#e2e8f0' : '#0f172a',
      ...(option.textStyle as object),
    },
    tooltip: {
      backgroundColor: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.97)',
      borderColor: isDark ? '#334155' : '#e2e8f0',
      borderWidth: 1,
      textStyle: {
        color: isDark ? '#f8fafc' : '#0f172a',
        fontSize: 12,
      },
      ...(Array.isArray(option.tooltip) ? option.tooltip[0] : (option.tooltip as object)),
    },
    legend: option.legend
      ? {
          textStyle: { color: isDark ? '#cbd5e1' : '#475569', fontSize: 12 },
          ...(Array.isArray(option.legend) ? option.legend[0] : (option.legend as object)),
        }
      : undefined,
    ...option,
    xAxis: mergeAxis(option.xAxis) as any,
    yAxis: mergeAxis(option.yAxis) as any,
  }
}

export interface AbcChartProps {
  /** ECharts 配置项（同时支持严格 EChartsOption 与业务 useMemo 推断字典对象） */
  option: EChartsOption | Record<string, any>
  /** 容器高度（数值默认转 px，默认 300px；若在 style.height 中传入则优先使用 style.height） */
  height?: number | string
  /** 自定义内联样式（兼容原 echarts-for-react style={{ height }} 用法） */
  style?: React.CSSProperties
  /** 自定义类名 */
  className?: string
  /** 是否以不合并模式刷新 option */
  notMerge?: boolean
  /** 是否延迟更新 */
  lazyUpdate?: boolean
  /** 加载骨架状态 */
  loading?: boolean
  /** 空数据态开关 */
  empty?: boolean
  /** 空数据文案 */
  emptyDescription?: string
  /** 图表事件绑定映射（兼容原 echarts-for-react onEvents） */
  onEvents?: Record<string, (params: any, instance: EChartsType) => void>
  /** 获取底层 ECharts 实例回调 */
  onChartReady?: (instance: EChartsType) => void
}

/**
 * 主题与容器尺寸双自适应的企业级图表容器 (AbcChart / Chart)
 * 1. 自动读取 AbcProvider 的明暗主题与品牌色阶，无需业务页面手动判断 isDark
 * 2. 内置 ResizeObserver 监听侧边栏折叠、抽屉拖拽调宽等局部容器尺寸变化，自动平滑重绘
 */
export const AbcChart: React.FC<AbcChartProps> = ({
  option,
  height = 300,
  style,
  className,
  notMerge = false,
  lazyUpdate = false,
  loading = false,
  empty = false,
  emptyDescription = '暂无图表统计数据',
  onEvents,
  onChartReady,
}) => {
  const { resolvedTheme, theme } = useAbcConfig()
  const isDark = resolvedTheme === 'dark'
  const containerRef = useRef<HTMLDivElement | null>(null)
  const chartRef = useRef<EChartsType | null>(null)

  const mergedOption = useMemo(
    () => buildAbcBaseChartOption(option, theme.brand, isDark),
    [option, theme.brand, isDark]
  )

  // 初始化与销毁实例
  useEffect(() => {
    const el = containerRef.current
    if (!el || loading || empty) return

    const instance = echarts.init(el)
    chartRef.current = instance
    onChartReady?.(instance)

    let ro: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        instance.resize()
      })
      ro.observe(el)
    } else {
      const onWinResize = () => instance.resize()
      window.addEventListener('resize', onWinResize)
      return () => {
        window.removeEventListener('resize', onWinResize)
        instance.dispose()
        chartRef.current = null
      }
    }

    return () => {
      ro?.disconnect()
      instance.dispose()
      chartRef.current = null
    }
  }, [loading, empty])

  // 同步更新图表配置
  useEffect(() => {
    const instance = chartRef.current
    if (!instance || loading || empty) return
    instance.setOption(mergedOption, { notMerge, lazyUpdate })
  }, [mergedOption, notMerge, lazyUpdate, loading, empty])

  // 绑定交互事件
  useEffect(() => {
    const instance = chartRef.current
    if (!instance || !onEvents) return
    const entries = Object.entries(onEvents)
    for (const [eventName, handler] of entries) {
      instance.on(eventName, (params: any) => handler(params, instance))
    }
    return () => {
      for (const [eventName] of entries) {
        instance.off(eventName)
      }
    }
  }, [onEvents])

  const resolvedStyle: React.CSSProperties = {
    width: '100%',
    height: style?.height ?? (typeof height === 'number' ? `${height}px` : height),
    ...style,
  }

  if (loading) {
    return (
      <div className={clsx('flex items-center justify-center p-4', className)} style={resolvedStyle}>
        <Skeleton className="h-full w-full rounded-[var(--abc-radius-md)]" />
      </div>
    )
  }

  if (empty) {
    return (
      <div className={clsx('flex items-center justify-center', className)} style={resolvedStyle}>
        <EmptyState title="暂无图表数据" description={emptyDescription} />
      </div>
    )
  }

  return <div ref={containerRef} className={clsx('min-w-0', className)} style={resolvedStyle} />
}

/** 兼容旧版默认/具名 Chart 导入别名 */
export const Chart = AbcChart

export default AbcChart
