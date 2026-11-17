# 04. 图表主题联动、交叉下钻与整页模板指南 (`@abc-design/charts` + `@abc-design/react`)

> **AI Agent 防幻觉与避坑准则**：
> 1. **严禁裸写 `import * as echarts from 'echarts'`**，也不需要手写 `ResizeObserver` 或暗色模式重建逻辑——一律使用 `@abc-design/charts` 导出的按需注册实例与 `<AbcChart />`。
> 2. **区分双包同名 `StatCard`**：
>    - 来自 **`@abc-design/charts`** 的 `StatCard` 标题属性是 **`title`**（带 `prefix`、`suffix`、`trend`、`footer`、`loading`、`icon`、`variant`）；
>    - 来自 **`@abc-design/react`** 的 `StatCard` 标题属性是 **`label`**（带 `hint`、`badge`、`tone`、`mono`）。
>    在同一页同时使用时请通过别名区分（如 `import { StatCard as ChartStatCard } from '@abc-design/charts'`）。
> 3. **图表骨架屏必须使用 `SkeletonChart`（来自 `@abc-design/react`）**，或在初始化阶段先以 `SkeletonChart` 占位后再挂载 `AbcChart` 防 CLS 布局抖动。

---

## 1. `@abc-design/charts` 核心导出与主题辅助签名

### 主题配置消费：`useAbcConfig().resolvedTheme`
来自 `@abc-design/react` 的 `useAbcConfig(): AbcContextValue` 暴露全局运行时解析态主题（即使 `theme.mode === 'system'`，也会解析为明确字面量）：

```ts
const { theme, resolvedTheme } = useAbcConfig();
// theme: AbcThemeConfig（含 theme.brand: AbcBrandColor）
// resolvedTheme: 'light' | 'dark'（AbcResolvedTheme）
const isDark = resolvedTheme === 'dark';
```

### 主题色板与基础 Option 构建器
```ts
import type { AbcBrandColor } from '@abc-design/tokens';
import type { EChartsOption } from '@abc-design/charts';

/** 根据品牌色与明暗模式生成语义调和的 6~8 色系列调色盘 */
export function getAbcChartPalette(
  brand?: AbcBrandColor,
  isDark?: boolean
): string[];

/**
 * 为原始 EChartsOption 自动注入：
 * 1) 匹配品牌与暗黑主题的调色盘；
 * 2) 坐标轴文字/分割线/Tooltip 语义 CSS 变量风格；
 * 3) 标准 Grid 留白与抗裁切约束
 */
export function buildAbcBaseChartOption(
  option: EChartsOption | Record<string, any>,
  brand: AbcBrandColor,
  isDark: boolean
): EChartsOption;
```

### `<AbcChart />` 与 `<SkeletonChart />` 契约
- `AbcChart`（来自 `@abc-design/charts`）：
  - `option: EChartsOption`（必填）
  - `height?: number | string`（默认 `320`）
  - `loading?: boolean`、`empty?: boolean`、`emptyText?: string`
  - `onEvents?: Record<string, (params: any) => void>`（用于下钻点击、legend 切换等事件绑定）
  - `onChartReady?: (instance: EChartsType) => void`
  - `renderer?: 'canvas' | 'svg'`、`className?: string`
- `SkeletonChart`（来自 `@abc-design/react`）：
  - `height?: number | string`（默认 `288`）、`animation?: 'wave' | 'pulse' | 'none'`

```tsx
import React, { useMemo } from 'react';
import { SkeletonChart, useAbcConfig } from '@abc-design/react';
import { AbcChart, buildAbcBaseChartOption, getAbcChartPalette } from '@abc-design/charts';

export function TrafficTrendChart({ loading, rows }: { loading: boolean; rows: Array<{ day: string; qps: number }> }) {
  const { theme, resolvedTheme } = useAbcConfig();
  const isDark = resolvedTheme === 'dark';

  const option = useMemo(() => {
    const palette = getAbcChartPalette(theme.brand, isDark);
    return buildAbcBaseChartOption(
      {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: rows.map((r) => r.day) },
        yAxis: { type: 'value' },
        series: [
          {
            name: '网关 QPS',
            type: 'line',
            smooth: true,
            itemStyle: { color: palette[0] },
            data: rows.map((r) => r.qps),
          },
        ],
      },
      theme.brand,
      isDark
    );
  }, [rows, theme.brand, isDark]);

  if (loading) return <SkeletonChart height={300} animation="wave" />;

  return <AbcChart height={300} option={option} empty={rows.length === 0} />;
}
```

### `<StatCard />`（`@abc-design/charts` 指标卡）
- `title: ReactNode`、`value: ReactNode`
- `prefix?: ReactNode`、`suffix?: ReactNode`
- `trend?: { value: number | string; label?: string; direction?: 'up' | 'down' | 'flat'; tone?: 'success' | 'danger' | 'neutral' }`
- `icon?: ReactNode`、`footer?: ReactNode`、`loading?: boolean`、`variant?: 'default' | 'bordered' | 'gradient'`

---

## 2. 黄金模板：图表 × `ActiveFilterBar` × `DataTable` 交叉下钻

在运维监控、计费分析与风控大盘场景下，推荐采用**「图表系列点击 → 写入筛选状态 → `ActiveFilterBar` (`source="chart"`) 统一摘要与一键清除 → `DataTable` / `SplitDetailPanel` 联动过滤与详情下钻」**架构：

```tsx
import React, { useMemo, useState } from 'react';
import {
  ActiveFilterBar,
  DataTable,
  PageContainer,
  StatusBadge,
  useAbcConfig,
  type ActiveFilterChip,
} from '@abc-design/react';
import { AbcChart, buildAbcBaseChartOption, getAbcChartPalette } from '@abc-design/charts';

interface IncidentRecord {
  id: string;
  region: string;
  service: string;
  status: 'failed' | 'warning';
  latencyMs: number;
}

const REGION_SERIES = [
  { region: 'cn-shanghai', count: 14 },
  { region: 'cn-beijing', count: 8 },
  { region: 'ap-southeast-1', count: 5 },
];

const INCIDENTS: IncidentRecord[] = [
  { id: 'INC-901', region: 'cn-shanghai', service: 'pay-core', status: 'failed', latencyMs: 840 },
  { id: 'INC-902', region: 'cn-beijing', service: 'auth-sso', status: 'warning', latencyMs: 390 },
  { id: 'INC-903', region: 'ap-southeast-1', service: 'edge-proxy', status: 'failed', latencyMs: 910 },
];

export function ChartCrossDrilldownDashboard() {
  const { theme, resolvedTheme } = useAbcConfig();
  const isDark = resolvedTheme === 'dark';
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const chartOption = useMemo(() => {
    const palette = getAbcChartPalette(theme.brand, isDark);
    return buildAbcBaseChartOption(
      {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: REGION_SERIES.map((d) => d.region) },
        yAxis: { type: 'value' },
        series: [
          {
            name: '异常次数',
            type: 'bar',
            data: REGION_SERIES.map((d) => ({
              value: d.count,
              itemStyle: {
                color: !selectedRegion || selectedRegion === d.region ? palette[0] : palette[3],
                opacity: !selectedRegion || selectedRegion === d.region ? 1 : 0.35,
              },
            })),
          },
        ],
      },
      theme.brand,
      isDark
    );
  }, [selectedRegion, theme.brand, isDark]);

  const filteredRows = useMemo(
    () => (selectedRegion ? INCIDENTS.filter((row) => row.region === selectedRegion) : INCIDENTS),
    [selectedRegion]
  );

  const chips: ActiveFilterChip[] = selectedRegion
    ? [
        {
          key: 'region',
          label: '图表下钻地域',
          valueText: selectedRegion,
          source: 'chart',
          onRemove: () => setSelectedRegion(null),
        },
      ]
    : [];

  return (
    <PageContainer title="区域异常交叉下钻分析" subtitle="点击柱状图柱条实时联动下方明细表">
      <div className="space-y-4">
        <AbcChart
          height={260}
          option={chartOption}
          onEvents={{
            click: (params: { name?: string }) => {
              if (!params?.name) return;
              setSelectedRegion((prev) => (prev === params.name ? null : params.name!));
            },
          }}
        />

        <ActiveFilterBar
          chips={chips}
          totalCount={INCIDENTS.length}
          filteredCount={filteredRows.length}
          onClearAll={() => setSelectedRegion(null)}
        />

        <DataTable<IncidentRecord>
          rows={filteredRows}
          keyExtractor={(r) => r.id}
          columns={[
            { key: 'id', header: '事件 ID', mono: true },
            { key: 'region', header: '地域', mono: true },
            { key: 'service', header: '受影响服务' },
            { key: 'status', header: '级别', render: (r) => <StatusBadge status={r.status} /> },
            { key: 'latencyMs', header: '耗时(ms)', align: 'right', mono: true },
          ]}
        />
      </div>
    </PageContainer>
  );
}
```

---

## 3. Playground 完整页面与整页模板源码索引

所有整页级行业范式、图表分析与多组件复杂联动示范代码均位于 `apps/playground/src/pages/` 目录下：

| 类别 | 源码文件路径 | 核心演示内容与复用套件 |
| :--- | :--- | :--- |
| **图表示范总览** | `apps/playground/src/pages/charts/ChartsAndMetricsPage.tsx` | `AbcChart`、`StatCard`、`getAbcChartPalette`、`buildAbcBaseChartOption`、`SkeletonChart`、主题明暗切换联动 |
| **综合运营模板入口** | `apps/playground/src/pages/TemplatesPage.tsx` | SaaS 总览大盘、审计流、分步向导与异常页统一模板调度入口 |
| **审计与异常页模板** | `apps/playground/src/pages/templates/AuditAndExceptionTemplates.tsx` | 审计日志检索、`ProLogViewer` / `Result` / `NotificationBanner` 异常恢复模板 |
| **分步向导表单模板** | `apps/playground/src/pages/templates/WizardFormTemplate.tsx` | 多步骤配置流转与表单校验模板 |
| **模板静态数据集** | `apps/playground/src/pages/templates/templatesData.ts` | 企业级租户、工单与指标演示数据工厂 |
| **联动：三栏主从工作台** | `apps/playground/src/pages/linkage/MasterDetailWorkbenchPage.tsx` | `ProSplitWorkbench` + `ResizableSplitPane` + `SplitDetailPanel` + `ConfigDiffViewer` + `ReasonedActionDrawer` |
| **联动：动态表单与 KV** | `apps/playground/src/pages/linkage/DynamicFormOrchestrationPage.tsx` | `useProForm` + `ProFormProvider` + `ProFormDependency` + `ProFormList` + `KeyValueInput` |
| **联动：可编辑表格配额** | `apps/playground/src/pages/linkage/EditableTableLinkagePage.tsx` | `EditableProTable` (`row`/`table` 双模式) + `summaryRender` + `ProgressBar` + `StatCard` |
| **联动：规则与视图栏** | `apps/playground/src/pages/linkage/QueryBuilderAndViewsPage.tsx` | `FilterBuilder` (`RuleBuilder`) + `SavedFilterViews` + `evaluateRuleGroup` + `DataTable` |
| **联动：图表交叉过滤** | `apps/playground/src/pages/linkage/CrossFilterDashboardPage.tsx` | `AbcChart` (`onEvents.click`) + `ActiveFilterBar` + `StatCard` + `DataTable` |
| **联动：向导Diff批处理** | `apps/playground/src/pages/linkage/WizardDiffAndBatchPage.tsx` | `ProStepsForm` + `ConfigDiffViewer` + `TableCore` + `BatchActionTracker` |
