# ABC Design — AI Agent 权威对接手册 (AGENTS.md)

本文档面向编码 AI Agent（Antigravity / Claude Code / Cursor / Codex 等），定义在新项目或存量项目中集成并使用 `@abc-design/*` 设计系统时的**唯一真实架构契约、复杂联动选型准则与防幻觉铁律**。

> **扩展文档索引**：
> - 轻量文档地图（`llmstxt` 标准）：[llms.txt](./llms.txt)
> - 单文件全量机器可读上下文：[llms-full.txt](./llms-full.txt)
> - 快速接入、样式模式与 5 大适配器：[docs/agent/01-quickstart-and-adapters.md](./docs/agent/01-quickstart-and-adapters.md)
> - 基础、表单与展示组件精确 Props 字典：[docs/agent/02-components-api.md](./docs/agent/02-components-api.md)
> - 5 模态 `ProLayout` 与 Pro 套件指南：[docs/agent/03-layout-and-pro-suite.md](./docs/agent/03-layout-and-pro-suite.md)
> - 自适应图表 `@abc-design/charts` 与标准页面蓝图：[docs/agent/04-charts-and-templates.md](./docs/agent/04-charts-and-templates.md)
> - **复杂组件联动编排与选型决策手册**：[docs/agent/05-complex-linkage-and-orchestration.md](./docs/agent/05-complex-linkage-and-orchestration.md)
> - 可直接挂载的 Agent Skill 技能包：[skills/abc-design/SKILL.md](./skills/abc-design/SKILL.md)

---

## 1. 五包架构职责边界

| 包名 | 职责定位 | 何时直接导入 |
| :--- | :--- | :--- |
| `@abc-design/tokens` | 三层语义 CSS 变量（`--abc-*`）、6 套品牌色板（`blue` / `indigo` / `violet` / `emerald` / `amber` / `rose`）、3 档信息密度（`compact` / `default` / `comfortable`）、4 档圆角、4 档规格与动效预设、View Transitions 主题切换引擎 | 自定义 Tailwind CSS v4 样式表引入 `@abc-design/tokens/styles/index.css`（TS 类型与函数已由 `@abc-design/react` 透传导出） |
| `@abc-design/core` | 零框架依赖纯 TypeScript 无头算法内核：中文拼音首字母 (`matchKeywordWithPinyin`)、树形级联与 `TreeSelect` 归一化 (`computeTreeCheckState` / `normalizeTreeSelectData`)、规则 AST 构建与求值 (`evaluateRuleGroup` / `formatRuleGroupSummary`)、配置与逐行 LCS Diff (`computeObjectDiff` / `computeLineDiff`)、`.env`/Headers/JSON 键值互转 (`parseKeyValueText` / `serializeKeyValueEntries` / `findDuplicateKeys`)、客户端表格过滤排序与 URL 同步、42 格月历矩阵 | 非 React 环境或自定义纯逻辑 Hook 时直接导入（`@abc-design/react` 已完整透传导出） |
| `@abc-design/react` | 零业务耦合企业级 UI 组件库（导出 340+ 运行时符号与 240+ 组件/子件）：含 `<AbcProvider>` 适配器容器、5 模态 `<ProLayout>` 壳层（`KeepAliveContainer` / `TabErrorBoundary` / `TopProgressBar` / `CommandPalette` / `ThemeCustomizer`）、`<PageHeader>` / `<HubNavBar>` / `<PageSection>`、`<ProTable>` / `<DataTable>` / `<EditableProTable>`、`<ProConfigForm>` / `<ProStepsForm>` / `<ProFormDependency>` / `<ProFormList>`、`<FilterBuilder>` / `<SavedFilterViews>` / `<ActiveFilterBar>`、`<ResizableSplitPane>` / `<ProSplitWorkbench>` / `<ConfigDiffViewer>` / `<BatchActionTracker>` | **所有业务页面与布局壳层的主入口** |
| `@abc-design/charts` | 基于 ECharts 5 按需 Tree-shaking 的主题/容器双自适应图表 `<AbcChart>`（别名 `<Chart>`）、核心经营指标卡 `<StatCard>` 及主题调色盘工具 (`getAbcChartPalette`, `buildAbcBaseChartOption`) | 仪表盘、交叉下钻分析看板、监控大盘页面（需同时安装 `echarts@^5.6.0`） |
| `@abc-design/markdown` | 封装 `@uiw/react-md-editor` 的独立企业级双栏 Markdown 编辑器 `<MarkdownEditor>`（自动跟随 `AbcProvider` 亮暗主题、三态预览、`ref.current.insertText()` 光标插值） | 文章发布、富文本工单、发版说明场景（需同时安装 `@uiw/react-md-editor@^4.0.0`） |

---

## 2. 安装与两种样式接入模式（必选其一）

### 2.1 安装依赖

```bash
# 基础 UI + 布局 + Pro 联动套件
pnpm add @abc-design/tokens @abc-design/core @abc-design/react lucide-react

# 按需安装图表或 Markdown 编辑器
pnpm add @abc-design/charts echarts
pnpm add @abc-design/markdown @uiw/react-md-editor
```

### 2.2 样式接入（严禁遗漏，否则无 Token 变量与布局样式）

- **模式 A：预构建独立样式包（推荐用于未接入 Tailwind v4 的任意 Vite / Next.js / Webpack 项目）**
  在应用入口 `main.tsx` 或 `layout.tsx` 顶部直接引入：
  ```tsx
  import '@abc-design/react/styles.css'
  ```

- **模式 B：Tailwind CSS v4 源码级融合（推荐用于宿主已启用 `@tailwindcss/vite` 或 `@tailwindcss/postcss` 的工程）**
  在宿主主样式文件 `src/styles/index.css` 中写入：
  ```css
  @import "tailwindcss";
  @import "@abc-design/tokens/styles/index.css";

  /* 告知 Tailwind v4 扫描组件库产物中的原子类，避免样式丢失 */
  @source "../../node_modules/@abc-design/react/dist/**/*.js";
  @source "../../node_modules/@abc-design/charts/dist/**/*.js";
  ```

- **模式 C：Tailwind CSS v3 宿主混用兼容（`apps/admin` / 存量 v3 工程必看）**
  当宿主仍使用 Tailwind CSS v3（其 `@tailwind utilities` 输出为**未分层 CSS**）并导入 `@abc-design/react/styles.css`（Tailwind v4 将工具类包在 `@layer utilities` 内）时，根据 W3C 级联规范，宿主未分层的 `.hidden { display: none }` 会**无条件压过**组件库 `@layer utilities` 中的 `md:block` / `md:flex` 等响应式类名，导致 `ProLayout` 桌面端侧栏与导航消失。因此必须同时满足两项配置：
  1. 在宿主 `tailwind.config.js` 的 `content` 中加入 `'./node_modules/@abc-design/react/dist/**/*.js'`（以及 `'./node_modules/@abc-design/charts/dist/**/*.js'`），让宿主为组件库生成同等未分层的响应式工具类（`pnpm` 的 `link:` 软链可直接穿透）；
  2. 将宿主的 `@tailwind base;` 独立拆出并在 PostCSS 中包裹进 `@layer base { ... }`，以免未分层的 Preflight 规则覆盖 `@abc-design/react/styles.css` 里的按钮与链接样式。

---

## 3. 顶层 `<AbcProvider>` 适配器契约（零业务耦合核心）

`@abc-design/react` 内部**绝不硬编码任何 HTTP 请求、路由库或权限 Store**。新项目对接时，只需在根组件挂载一次 `<AbcProvider>` 注入业务适配器，并使用 `useAbcConfig()` 读取全局上下文：

```tsx
import React from 'react'
import { AbcProvider } from '@abc-design/react'

export function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <AbcProvider
      defaultTheme={{ mode: 'system', brand: 'blue', density: 'default', radius: 'md', motion: 'smooth' }}
      defaultDrawerCascadeMode="adjacent"
      watermarkText={['企业内网环境', '严禁外传']}
      defaultWatermarkEnabled={false}
      uploadAdapter={async (file: File): Promise<string> => {
        const formData = new FormData()
        formData.append('file', file)
        const res = await fetch('/api/upload', { method: 'POST', body: formData })
        const json = await res.json()
        return json.url
      }}
      dictAdapter={async (dictCode: string) => {
        const res = await fetch(`/api/dicts/${dictCode}`)
        return res.json() // Array<{ label, value, tone?, disabled? }>
      }}
      permissionAdapter={(perm, mode = 'any') => {
        const userPerms = new Set(['sys:user:add', 'sys:user:edit'])
        const list = Array.isArray(perm) ? perm : [perm]
        return mode === 'all' ? list.every((c) => userPerms.has(c)) : list.some((c) => userPerms.has(c))
      }}
      captchaAdapter={async () => {
        const res = await fetch('/api/get-captcha')
        return res.json() // { nonceStr, blockSrc, blockY, canvasSrc }
      }}
    >
      {children}
    </AbcProvider>
  )
}
```

---

## 4. 路由无关 `<ProLayout>` 对接标准范式

`<ProLayout>` 通过受控的 `pathname` + `onNavigate` + `menuItems` 与 React Router / Next.js 等任意路由框架解耦：

```tsx
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ProLayout, type AbcMenuItem } from '@abc-design/react'

const MENUS: AbcMenuItem[] = [
  { key: 'dashboard', label: '经营概览', path: '/dashboard', icon: 'LayoutDashboard' },
  {
    key: 'system',
    label: '系统治理',
    icon: 'Settings',
    children: [
      { key: 'users', label: '账号管理', path: '/system/users', icon: 'Users' },
      { key: 'roles', label: '角色授权', path: '/system/roles', icon: 'ShieldCheck' },
    ],
  },
]

export function AdminShell() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <ProLayout
      brand={{ name: 'Acme Cloud', subtitle: 'Multi-Tenant Console', logo: 'https://example.com/logo.svg' }}
      menuItems={MENUS}
      pathname={location.pathname}
      onNavigate={(path) => navigate(path)}
    >
      <Outlet />
    </ProLayout>
  )
}
```

---

## 5. AI Agent 防幻觉与高频签名核对表 (CRITICAL DO & DON'T)

编码 Agent 在生成代码前必须严格遵守以下真实组件契约，**严禁凭臆想混用 Ant Design / Shadcn / 原生 HTML 签名**：

1. **`Select` / `DictSelect` / `TreeSelect` / `Cascader` 的 `onChange` 直接返回选中值，而非 `ChangeEvent`**：
   - `Select`：`<Select value={role} onChange={(val) => setRole(val)} options={...} />`（仅在未传 `options`、降级渲染 `<option>` 子节点时才兼容派发 `ChangeEvent`；`SelectField` 提供 `onValueChange` 强字符串回调）。
   - `TreeSelect`：`onChange={(val, labelList, extra) => ...}`，多选复选框用 `treeCheckable` + `showCheckedStrategy={TreeSelect.SHOW_PARENT | TreeSelect.SHOW_CHILD | TreeSelect.SHOW_ALL}`。
2. **`Input` / `Textarea` 返回 `ChangeEvent`，而 `InputNumber` / `ByteQuotaInput` / `DurationQuotaInput` 直接返回数值**：
   - `Input`: `onChange={(e) => setName(e.target.value)}`
   - `InputNumber`: `onChange={(val: number | null) => setCount(val)}`
   - `ByteQuotaInput` / `DurationQuotaInput`: `size` 仅支持 `'sm' | 'default'`（不是 `AbcSize` 全四档）。
3. **`Checkbox` 与 `Switch` 的 `onChange` 直接返回 `boolean`**：
   - `<Switch checked={enabled} onChange={(checked) => setEnabled(checked)} />`
   - `<Checkbox checked={agreed} onChange={(checked) => setAgreed(checked)} label="同意协议" />`
4. **`useAbcConfig()` 暴露的是 `resolvedTheme`，不是 `resolvedColorScheme`**：
   - 正确：`const { theme, resolvedTheme } = useAbcConfig()`，随后传给 `getAbcChartPalette(theme.brand, resolvedTheme === 'dark')`。
5. **容易写错的 Props 名称对照表**：
   - `Divider` 中间标题用 `label?: ReactNode`，方向用 `orientation?: 'horizontal' | 'vertical'`（不用 `children`）。
   - `ProFormContainer` 模式属性为 `mode?: 'drawer' | 'modal'`（不是 `'dialog'`）。
   - `HubNavBar` 徽标色调 `badgeTone?: 'indigo' | 'slate' | 'primary' | 'dark'`；内部页签按钮通过 `hubNavTabClassName(active, variant)` 生成类名。
   - `Alert.tone` 为 `'info' | 'success' | 'warning' | 'danger'`；`NotificationBanner.variant` 与 `ToastCardProps.variant` 为 `'info' | 'success' | 'warning' | 'error'`。
   - `PageTransition.transition` 为 `'fade-slide' | 'fade' | 'zoom' | 'slide-left' | 'none'`。
6. **大表单与小表单浮层容器选型准则（大小表单分流规范）**：
   - **大表单必须用右侧全高 `<Drawer placement="right" size="lg|xl|2xl">`**；大表单内再打开另一个大表单必须使用二级抽屉（`cascadeMode="adjacent"` 并排比对或 `"stack"` 层叠），严禁 Modal 套 Modal。
   - **小表单（1~3 字段）与轻量确认用 `<Dialog open onClose>`**（原生 `#top-layer` `<dialog>`）。
   - **表格行内不遮挡快速切换**用 `ProTable` 的 `splitPanelOpen` / `SplitDetailLayout` + `SplitDetailPanel` 右侧内联挤压容器；常驻分栏检视用 `SplitInspectorLayout` + `InspectorPanel`。
7. **禁止硬编码背景/边框颜色与手写重复 `document.body` 滚动锁**：
   - 统一消费 `--abc-bg-canvas` / `--abc-bg-surface` / `--abc-bg-muted` / `--abc-bg-elevated` / `--abc-fg` / `--abc-fg-muted` / `--abc-border` / `--abc-primary`。

---

## 6. 复杂组件联动编排选型矩阵（严禁重复造轮子）

当需求涉及跨组件状态联动时，Agent **必须优先选用**以下库内原生编排组件（详尽接口见 [docs/agent/05-complex-linkage-and-orchestration.md](./docs/agent/05-complex-linkage-and-orchestration.md)）：

| 复杂交互场景 | 必须选用的 `@abc-design` 组件与引擎组合 | 严禁自建的重复胶水代码 |
| :--- | :--- | :--- |
| **1. 左树右表 + 右侧详情 + 审计抽屉四方联动** | `ResizableSplitPane` + `ProSplitWorkbench` + `DataTable`/`ProTable` + `SplitDetailPanel` + `ReasonedActionDrawer` | 手写 `mousedown`/`mousemove` 拖拽分割条或硬编码分栏持久化 |
| **2. 多级异步级联 + 动态子表 + 键值配置** | `ProFormProvider` + `ProFormDependency`（含 `AbortSignal` 竞态取消与 `resetFieldsOnChange`） + `ProFormList` + `KeyValueInput` | 在组件内手写 `useEffect` 拉取级联忽略竞态、或手动正则解析 `.env`/Headers |
| **3. 矩阵配额 / 阶梯参数行内编辑表格** | `EditableProTable`（`'row'` 点编辑回滚 / `'table'` 整表即时编辑 + 跨列 `validator` + `summaryRender`） | 手写整套 `editingRowId` 草稿状态池与单元格内联表单切换 |
| **4. 嵌套 AND/OR/NOT 条件规则构建器与视图收藏** | `FilterBuilder`（别名 `RuleBuilder`） + `@abc-design/core/queryBuilder` (`evaluateRuleGroup`) + `SavedFilterViews` | 自己拼装多维操作符映射、右值控件变形或规则树递归求值 |
| **5. 大盘图表点击下钻与多源筛选联动** | `AbcChart` (`onEvents`) + `ActiveFilterBar` (`source: 'chart'`) + `StatCard` + `DataTable` | 每个大盘页重复手写各色过滤胶囊与统计汇总条 |
| **6. 跨步校验向导表单与变更 Diff 审阅确认** | `ProStepsForm`（含步间异步 `validate` 守卫与草稿无损保留） + `ConfigDiffViewer`（对象字段 + 代码 LCS 双视图与自动脱敏） | 手写步骤条状态同步逻辑或手写对象键值/文本差异比对算法 |
| **7. 跨分页批量操作队列监控与失败局部重试** | `ProTable` / `TableCore` 多选 + `BatchActionTracker`（`inline` / `floating` 进度追踪、错误过滤与 `onRetryFailed`） | 为每个批量操作弹窗手写一套带重试队列的状态浮窗 |
