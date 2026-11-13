# 04. 自适应图表套件 (`@abc-design/charts`) 与 5 套标准页面蓝图

---

## 一、`@abc-design/charts` 使用规范

### 1. 为什么严禁在业务页直接裸调 `echarts.init` 或 `echarts-for-react`？
- 裸用 `echarts` 需要每个页面重复编写暗黑模式坐标轴/分割线颜色判断、窗口 `resize` 监听以及侧边栏折叠时的画布重算逻辑。
- `@abc-design/charts` 内置按需 Tree-shaking 注册（折线、柱状、饼图、雷达、仪表盘、散点），自动消费 `<AbcProvider>` 的 `resolvedTheme` 与当前 6 大品牌色板生成和谐色盘，并通过 `ResizeObserver` 在侧栏伸缩或抽屉拖拽时毫秒级平滑自适应。

### 2. `StatCard` 核心经营指标卡
```tsx
import { StatCard } from '@abc-design/charts'
import { Coins } from 'lucide-react'

<StatCard
  title="今日总交易净额"
  prefix="¥"
  value="2,490,120.00" // 自动启用等宽数字 tabular-nums
  trend={12.4}         // >0 绿标上升，<0 红标下降，0 中性灰标
  trendLabel="较昨日同期"
  footer="成功清算 18,402 笔"
  loading={isLoading}
  icon={<Coins className="h-4 w-4" />}
/>
```

### 3. `AbcChart`（兼容导出名 `Chart`）
```tsx
import { AbcChart, type EChartsOption } from '@abc-design/charts'

const option: EChartsOption = {
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['01月', '02月', '03月', '04月'] },
  yAxis: { type: 'value' },
  series: [
    { name: '新增签约额', type: 'bar', data: [320, 450, 510, 680] },
    { name: '续费金额', type: 'line', smooth: true, data: [210, 290, 360, 490] },
  ],
}

<AbcChart
  option={option}
  height={320}
  loading={isFetching}
  empty={list.length === 0}
  emptyDescription="当前筛选区间暂无交易记录"
  onEvents={{
    click: (params) => console.log('点击数据项:', params.name),
  }}
/>
```

---

## 二、5 套企业级标准业务页面蓝图

AI Agent 在新项目中接到业务页面需求时，应优先选用以下 5 种标准组合模式（完整交互源码见 `apps/playground/src/pages/TemplatesPage.tsx`）：

1. **大盘分析看板页 (`Dashboard`)**：
   `PageContainer` + 顶部 4 列 `StatCard` + 中部 `2:1` 网格 `Card` 内嵌 `AbcChart`（趋势折线 + 占比环形图）+ 底部核心排行 `TableCore`。
2. **标准数据表管理页 (`Schema CRUD`)**：
   `PageContainer` + `ProTable`（开启 `viewable` + `showClientFilterSwitch` + `formContainer="drawer"`）。
3. **复杂业务分步创建向导 (`Multi-Step Wizard`)**：
   `PageContainer` + `Card` + 顶部 `Steps` + 分步 `FormField` 校验 + 末步 `Result` (`status="success"`)。
4. **主从详情与多级风控审批台 (`Master-Detail & Stacked Audit Drawers`)**：
   主列表 `TableCore` 点击行唤起一级 `Drawer` (`size="lg"`, 内置 `Descriptions` + `Timeline`)，点击核查明细无缝叠层唤起二级 `Drawer` (`size="md"`)。
5. **全局 HTTP 与权限兜底页 (`Exception Pages`)**：
   基于 `<Result status="403" | "404" | "500" />` 统一承载路由未命中、角色无权限与上游网关故障重试。
