# ABC Design (`@abc-design/*`)

企业级高密度前端设计系统、纯 TypeScript 无头核心算法库、零业务耦合 React 组件库、5 模态自适应布局框架、主题感知 ECharts 图表套件与双栏 Markdown 编辑器。专为现代多租户 SaaS 管理后台与 **AI Agent 零幻觉快速对接**而设计。

---

## 一、Monorepo 五包协同架构

```text
abc-design/
├── packages/
│   ├── tokens/        # @abc-design/tokens   — 三层语义 CSS 变量、6 套品牌色、3 档密度、4 档规格与 View Transitions
│   ├── core/          # @abc-design/core     — 无头内核：拼音检索、树级联、规则 AST (queryBuilder)、对象/行级 Diff、键值转换 (keyValue)、表格与日历
│   ├── react/         # @abc-design/react    — 340+ 运行时导出符号：基础原语、5 模态 ProLayout、ProTable、12 个复杂联动编排组件
│   ├── charts/        # @abc-design/charts   — 按需 Tree-shaking ECharts 自适应容器 AbcChart、StatCard 与品牌调色板引擎
│   └── markdown/      # @abc-design/markdown — 独立双栏 Markdown 编辑器（自动联动明暗主题 + insertText 光标插值）
├── apps/
│   └── playground/    # @abc-design/playground — 7 大清晰分类 × 36 个路由 × 单卡聚焦/分段目录双视图 + ⌘K 全组件搜索直达
├── scripts/
│   ├── check-playground-sync.mjs # AST 强制门禁：确保 100% 导出组件同步挂载 Playground 演练卡与检索注册表
│   └── deploy_playground.sh      # 零停机发布与秒级回滚脚本
├── docs/
│   └── agent/         # AI Agent 专题规范（01 快速接入 / 02 组件字典 / 03 布局与 Pro / 04 图表模板 / 05 复杂联动编排）
├── skills/
│   └── abc-design/    # 标准 SKILL.md（可直接挂载至 Antigravity / Claude Code 等智能体技能目录）
├── AGENTS.md          # AI Agent 权威对接总纲与防幻觉核对清单
├── llms.txt           # llmstxt.org 标准轻量导航索引
└── llms-full.txt      # 单文件全量机器可读 API 与代码蓝图上下文
```

---

## 二、核心能力全景

### 1. `@abc-design/tokens` — 三层语义化设计令牌
- **6 套品牌色板** (`blue` / `indigo` / `violet` / `emerald` / `amber` / `rose`) 与自定义 Hex 11 阶自动生成。
- **3 档企业密度** (`compact` / `default` / `comfortable`)、**4 档通用规格** (`xs` / `sm` / `md` / `lg`) 与 **4 档物理动效预设** (`none` / `subtle` / `smooth` / `spring`)。
- **零闪烁明暗切换**：集成 `color-scheme` 与 View Transitions API 圆形扩散动画及 `prefers-reduced-motion` 自动降级。

### 2. `@abc-design/core` — 纯 TypeScript 无头算法内核
- **中文拼音引擎 (`pinyin.ts`)**：`getCharInitial` / `getPinyinInitials` / `matchKeywordWithPinyin`。
- **树形状态机 (`tree.ts`)**：`computeTreeCheckState` / `toggleTreeNodeChecked` / `normalizeTreeSelectData` / `flattenVisibleTreeNodes`。
- **规则构建与求值 (`queryBuilder.ts`)**：`getOperatorsForFieldType` / `evaluateRuleGroup` / `formatRuleGroupSummary`。
- **结构化与代码 LCS 对比 (`diff.ts`)**：`computeObjectDiff`（内置密钥脱敏） / `computeLineDiff`。
- **多格式键值解析 (`keyValue.ts`)**：`.env` / HTTP Headers / JSON 互转 (`parseKeyValueText` / `serializeKeyValueEntries` / `findDuplicateKeys`)。
- **客户端表格过滤与 URL 同步 (`table.ts`)**、**42 格月历网格 (`calendar.ts`)**。

### 3. `@abc-design/react` — 零业务耦合组件与复杂联动编排套件
- **5 大业务解耦适配器 (`<AbcProvider>`)**：`uploadAdapter`、`dictAdapter`、`permissionAdapter`、`captchaAdapter`、`toastAdapter`。
- **全覆盖原子与表单展示体系**：`Button`、`SegmentedControl`、`Icon` / `SemanticIcon` / `BrandIcon` / `IconPicker`、`Input` / `SearchInput` / `ByteQuotaInput` / `DurationQuotaInput`、`Select` / `SelectField` / `DictSelect` / `RadixSelect`、`Tree` / `TreeSelect` / `Cascader` / `Transfer` / `FileUpload` / `KeyValueInput`、`Table` / `TableCore` / `DataTable`、`Dialog` / `Drawer` / `ConfirmDialog` / `OneTimeSecretDialog` / `ReasonedActionDialog`、`Watermark` / `PermissionGuard` / `TabErrorBoundary`。
- **7 大场景 12 个高阶联动组件**：
  - 主从工作台：`ResizableSplitPane`、`ProSplitWorkbench`、`SplitDetailPanel`、`InspectorPanel`
  - 动态表单编排：`ProFormProvider`、`ProFormDependency`、`ProFormList`、`KeyValueInput`
  - 行内编辑与规则构建：`EditableProTable`、`FilterBuilder` (`RuleBuilder`)、`SavedFilterViews`、`ActiveFilterBar`
  - 向导、变更审阅与批处理：`ProStepsForm`、`ConfigDiffViewer`、`BatchActionTracker`

### 4. `@abc-design/charts` & `@abc-design/markdown`
- `@abc-design/charts`：`StatCard`、`AbcChart` (`Chart`)、`getAbcChartPalette`、`buildAbcBaseChartOption`。
- `@abc-design/markdown`：`MarkdownEditor`（主题跟随 + 三态分屏 + `insertText` 实例句柄）。

---

## 三、本地开发、测试与构建

```bash
# 安装工作区依赖
pnpm install

# 启动 7 大领域 36 个路由页的交互式 Playground 预览站（支持 ⌘K 组件直达搜索与单卡聚焦模式）
pnpm dev

# 校验全部公开导出组件是否 100% 同步至 Playground 预览卡片与搜索注册表
pnpm check:playground-sync

# 构建全部 5 个组件库产物（tokens / core / react / charts / markdown）
pnpm run build:libs

# 全量 TypeScript 严格类型检查
pnpm typecheck

# 运行全量单元测试套件
pnpm test

# 构建全部包与 Playground 静态预览站
pnpm build

# 一键构建并零停机发布 Playground 至线上预览站 (https://abc.bytesflows.com)
pnpm run deploy:playground
# 支持巡检与秒级回滚：
# pnpm run deploy:playground -- --status
# pnpm run deploy:playground -- --rollback
```
