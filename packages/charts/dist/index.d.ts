import { AbcBrandColor } from '@abc-design/tokens';
import { default as default_2 } from 'react';
import { EChartsOption } from 'echarts';
import { EChartsType } from 'echarts/core';
import { graphic } from 'echarts/core';
import { init } from 'echarts/core';

/**
 * 主题与容器尺寸双自适应的企业级图表容器 (AbcChart / Chart)
 * 1. 自动读取 AbcProvider 的明暗主题与品牌色阶，无需业务页面手动判断 isDark
 * 2. 内置 ResizeObserver 监听侧边栏折叠、抽屉拖拽调宽等局部容器尺寸变化，自动平滑重绘
 */
declare const AbcChart: default_2.FC<AbcChartProps>;
export { AbcChart }
export default AbcChart;

export declare interface AbcChartProps {
    /** ECharts 配置项（同时支持严格 EChartsOption 与业务 useMemo 推断字典对象） */
    option: EChartsOption | Record<string, any>;
    /** 容器高度（数值默认转 px，默认 300px；若在 style.height 中传入则优先使用 style.height） */
    height?: number | string;
    /** 自定义内联样式（兼容原 echarts-for-react style={{ height }} 用法） */
    style?: default_2.CSSProperties;
    /** 自定义类名 */
    className?: string;
    /** 是否以不合并模式刷新 option */
    notMerge?: boolean;
    /** 是否延迟更新 */
    lazyUpdate?: boolean;
    /** 加载骨架状态 */
    loading?: boolean;
    /** 空数据态开关 */
    empty?: boolean;
    /** 空数据文案 */
    emptyDescription?: string;
    /** 图表事件绑定映射（兼容原 echarts-for-react onEvents） */
    onEvents?: Record<string, (params: any, instance: EChartsType) => void>;
    /** 获取底层 ECharts 实例回调 */
    onChartReady?: (instance: EChartsType) => void;
}

/** 构造跟随明暗模式的默认坐标轴、网格线与浮层视觉基线 */
export declare function buildAbcBaseChartOption(option: EChartsOption | Record<string, any>, brand: AbcBrandColor, isDark: boolean): EChartsOption;

/** 兼容旧版默认/具名 Chart 导入别名 */
export declare const Chart: default_2.FC<AbcChartProps>;

declare const echarts_2: {
    init: typeof init;
    graphic: typeof graphic;
};
export { echarts_2 as echarts }

export { EChartsOption }

export { EChartsType }

/** 根据当前品牌色与明暗模式生成和谐的多序列图表色盘 */
export declare function getAbcChartPalette(brand?: AbcBrandColor, isDark?: boolean): string[];

export { graphic }

/**
 * 企业级大盘核心经营指标卡 (StatCard)
 * 内置等宽数字对齐 (tabular-nums)、同环比涨跌徽标与底部迷你图插槽
 */
export declare const StatCard: default_2.FC<StatCardProps>;

export declare interface StatCardProps extends Omit<default_2.HTMLAttributes<HTMLDivElement>, 'title' | 'prefix'> {
    /** 指标标题 */
    title?: default_2.ReactNode;
    /** title 语义别名 */
    label?: default_2.ReactNode;
    /** 核心数值展示 */
    value: default_2.ReactNode;
    /** 数值前缀（如 ¥ / $） */
    prefix?: default_2.ReactNode;
    /** 数值后缀（如 % / 次 / GB） */
    suffix?: default_2.ReactNode;
    /** 环比/同比趋势百分比或自定义趋势节点 */
    trend?: number | default_2.ReactNode;
    /** 趋势对比说明文字（如“较昨日”） */
    trendLabel?: default_2.ReactNode;
    /** 右上角装饰图标 */
    icon?: default_2.ReactNode;
    /** 右上角状态徽章 */
    badge?: default_2.ReactNode;
    /** 底部补充信息或迷你趋势图插槽 */
    footer?: default_2.ReactNode;
    /** footer 辅助说明别名 */
    hint?: default_2.ReactNode;
    /** 视觉色调别名 */
    tone?: string;
    /** 尺寸规格别名 */
    size?: string;
    /** 数值是否使用等宽字体 */
    mono?: boolean;
    /** 数值附加样式类名 */
    valueClassName?: string;
    /** 加载骨架态 */
    loading?: boolean;
    children?: default_2.ReactNode;
    className?: string;
}

export { }
