# ABC Design (`@abc-design/*`)

企业级高密度前端设计系统、无头核心算法库、零业务耦合 React 组件库、5 模态自适应布局框架与主题感知图表套件。专为现代多租户 SaaS 管理后台与 **AI Agent 零幻觉快速对接**而设计。

---

## 一、Monorepo 四包协同架构

```text
abc-design/
├── packages/
│   ├── tokens/        # @abc-design/tokens — 三层语义 CSS 变量、6 套品牌色、3 档密度、4 档圆角与 View Transitions
│   ├── core/          # @abc-design/core   — 零依赖纯 TS 无头内核：拼音检索、树级联半选、表格过滤与 URL 同步、月历矩阵
│   ├── react/         # @abc-design/react  — 45+ 生产级组件、AbcProvider 适配器、5 模态 ProLayout、ProTable、ProConfigForm
│   └── charts/        # @abc-design/charts — 按需 Tree-shaking ECharts 自适应容器 AbcChart 与核心指标卡 StatCard
├── apps/
│   └── playground/    # @abc-design/playground — 交互式组件文档（实时 Knobs + 代码复制 + API 表）与 5 套业务页模板预览站
├── docs/
│   └── agent/         # 分层 AI Agent 集成规范文档（快速接入 / 组件字典 / 布局与 Pro 套件 / 图表与模板）
├── skills/
│   └── abc-design/    # 标准 SKILL.md，可直接挂载至 Antigravity / Claude Code 等智能体技能目录
├── AGENTS.md          # AI Agent 权威对接总纲与防幻觉检查清单
└── llms-full.txt      # 单文件全量机器可读 API 与代码蓝图上下文
```

---

## 二、核心能力全景

### 1. `@abc-design/tokens` — 三层语义化设计令牌
- **6 套高对比度品牌色板**：`blue`（科技蓝）、`indigo`（深邃靛）、`violet`（极光紫）、`emerald`（翡翠绿）、`amber`（琥珀金）、`rose`（绯红）。
- **3 档企业信息密度**：`compact` (`30px`)、`default` (`34px`)、`comfortable` (`38px`)，一键全局联动控件高度与表格行距。
- **零闪烁明暗切换**：遵循现代 `color-scheme: light dark` 与 `<meta name="color-scheme">` 规范，内置 View Transitions API 圆形扩散动画及 `prefers-reduced-motion` 无障碍降级。

### 2. `@abc-design/core` — 纯 TypeScript 无头算法内核
- **中文拼音首字母引擎 (`matchKeywordWithPinyin`)**：零第三方词典体积，原生支持如输入 `yhgl` 匹配“用户管理”。
- **树形级联与半选状态机 (`computeTreeCheckState` / `toggleTreeNodeCheck`)**：精准计算角色菜单授权树的全选、半选 (`indeterminate`) 与禁用节点边界。
- **客户端过滤与 URL Query 双向同步 (`filterAndSortClientRows` / `writeQueryToUrlSearch`)**：纯函数无副作用，轻松赋能老旧无搜索后端接口。

### 3. `@abc-design/react` — 45+ 企业级组件与 5 模态 `ProLayout`
- **5 大业务解耦适配器 (`<AbcProvider>`)**：`uploadAdapter`、`dictAdapter`、`permissionAdapter`、`captchaAdapter`、`toastAdapter`。
- **完整组件矩阵**：
  - **通用与导航**：`Button`、`Icon`（120+ 按需图标 + `el-icon-*` 兼容 + 中文语义推断）、`IconPicker`、`CopyableText`、`Kbd`、`Breadcrumb`、`Steps`
  - **高密度表单**：`FormField`、`Input`（一键清空回焦 / 密码切换 / 字数统计）、`InputNumber`、`Textarea`、`Select`（多选胶囊 / 拼音搜索 / 跳过禁用项键盘导航）、`Checkbox`、`RadioGroup`、`Switch`、`DatePicker`、`DateRangePicker`、`ImageUpload`、`Tree`、`TagInput`、`SliderVerify`
  - **数据展示**：`TableCore`（粘性表头与固定列、列宽拖拽、列序拖拽、内联筛选）、`Descriptions`、`Collapse`（原生 `<details>` 无障碍实现）、`Timeline`、`Popover`、`Tabs`、`StatusTag`、`Badge`、`Avatar`、`Tooltip`、`Dropdown`、`ImagePreview`（兼容位图直链与内联 `<svg>` 源码放大旋转）、`EmptyState`、`Pagination`、`Skeleton` / `SkeletonCard` / `SkeletonTable` / `SkeletonChart`
  - **反馈与安全防护**：原生 Top Layer `Dialog`（拖拽移动 + 双击全屏 + 防外部拖选误关）、多级叠层 `Drawer`（`L1/L2` 层叠 + 边缘拖拽调宽）、`Alert`、`Progress`、`Result` (`403`/`404`/`500`)、`ErrorBoundary`、`TabErrorBoundary`、`abcConfirm`、`abcToast`、`Loading`、`Watermark`（`MutationObserver` 防篡改自愈）
- **5 模态 `ProLayout` 壳层**：一套统一配置动态切换 `sidebar`、`top`、`mix`、`dual-column`、`auth`，内置 `MultiTabBar`、`KeepAliveContainer`、`CommandPalette` (`⌘K`) 与 `ThemeCustomizer`。
- **Pro 高阶业务套件**：`ProTable`、`ProConfigForm`、`ProFormLayout`、`PermissionGuard` (`Permission`)、`DictSelect`、`DictTag`。

### 4. `@abc-design/charts` — 主题与尺寸双自适应图表
- **`AbcChart` (`Chart`)**：按需引入 ECharts 核心模块，自动感知当前明暗模式与品牌主色刷新配色，内置 `ResizeObserver` 顺滑响应侧边栏折叠与抽屉拖拽。
- **`StatCard`**：等宽数字 (`tabular-nums`) 大盘经营指标卡，支持同环比绿升红降语义徽标与加载骨架态。

---

## 三、30 秒快速接入

```bash
pnpm add @abc-design/tokens @abc-design/core @abc-design/react @abc-design/charts echarts lucide-react
```

```tsx
import '@abc-design/react/styles.css'
import { AbcProvider, ProLayout, PageContainer, ProTable } from '@abc-design/react'
import { StatCard } from '@abc-design/charts'

export function App() {
  return (
    <AbcProvider
      defaultTheme={{ mode: 'system', brand: 'blue', density: 'default', radius: 'md' }}
      uploadAdapter={async (file) => uploadFileToServer(file)}
      dictAdapter={(code) => fetchDictOptions(code)}
      permissionAdapter={(perm) => checkUserPermission(perm)}
    >
      <ProLayout
        brand={{ name: 'Enterprise Console', subtitle: 'Powered by ABC Design' }}
        menuItems={[
          { key: 'home', label: '经营总览', path: '/', icon: 'LayoutDashboard' },
        ]}
        pathname="/"
        onNavigate={(path) => console.log('navigate:', path)}
      >
        <PageContainer title="经营总览">
          <StatCard title="今日实时交易额" prefix="¥" value="1,284,900" trend={12.6} />
        </PageContainer>
      </ProLayout>
    </AbcProvider>
  )
}
```

---

## 四、AI Agent 自动对接支持

新项目使用 AI Agent 对接本组件库时，可直接将以下文件提供给智能体作为上下文：
- 根目录总纲：[AGENTS.md](./AGENTS.md)
- 单文件完整 API 参考：[llms-full.txt](./llms-full.txt)
- Agent 技能包：[skills/abc-design/SKILL.md](./skills/abc-design/SKILL.md)
- 分层专题指南：[docs/agent/](./docs/agent/)

---

## 五、本地开发、测试与构建

```bash
# 安装工作区依赖
pnpm install

# 启动官方交互式文档与 5 套业务模板预览站
pnpm dev

# 构建全部 4 个组件库产物（含 .d.ts 类型声明与预编译样式）
pnpm run build:libs

# 全量 TypeScript 严格类型检查
pnpm typecheck

# 运行单元测试套件
pnpm test

# 构建全部包与静态预览站点
pnpm build
```
