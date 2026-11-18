---
name: abc-design
description: 使用 @abc-design/*（tokens、core、react、charts、markdown）搭建或改造企业级中后台前端工程、接入 5 模态 ProLayout 布局、构建 Schema 驱动 ProTable / EditableProTable / ProStepsForm / FilterBuilder / ProSplitWorkbench 复杂联动页面及自适应 ECharts 看板。当用户要求基于 abc-design 创建新项目、迁移管理后台、开发多组件联动工作台、动态表单或仪表盘时必须激活此技能。
---

# ABC Design (`@abc-design/*`) 官方集成技能指南

## 1. 适用场景与前置核查

在编写任何业务代码前，先检查目标工程的 `package.json` 与全局样式入口：
1. 确认已安装 `@abc-design/tokens`、`@abc-design/core`、`@abc-design/react`（按需含 `@abc-design/charts` + `echarts`、`@abc-design/markdown` + `@uiw/react-md-editor`）。
2. 检查样式加载方式（二选一，不可遗漏）：
   - **普通项目**：入口引入 `import '@abc-design/react/styles.css'`。
   - **Tailwind CSS v4 项目**：主 CSS 文件引入 `@import "@abc-design/tokens/styles/index.css";` 并通过 `@source` 扫描 `@abc-design/react` 与 `@abc-design/charts`。
   - **Tailwind CSS v3 宿主**：除引入 `@abc-design/react/styles.css` 并把 `@tailwind base` 包入 `@layer base` 外，**必须在 `tailwind.config.js` 的 `content` 加入 `'./node_modules/@abc-design/react/dist/**/*.js'`（与 `charts`）**，防止宿主未分层 `.hidden` 压死组件库 `@layer utilities` 里的桌面端断点导致 `ProLayout` 导航消失。

## 2. 标准对接五步法

### 第一步：在根组件配置 `<AbcProvider>`
将宿主项目的上传接口、字典服务、权限码校验、滑块验证码接口与 Toast 服务通过 Adapter 注入 `<AbcProvider>`，保持 UI 组件与业务 API 零耦合：
- `uploadAdapter: (file: File) => Promise<string>`
- `dictAdapter: (dictCode: string) => AbcDictOption[] | Promise<AbcDictOption[]>`
- `permissionAdapter: (permission: string | string[], mode?: 'any' | 'all') => boolean`
- `captchaAdapter?: () => Promise<{ nonceStr, blockSrc, blockY, canvasSrc }>`
- `toastAdapter?: { success, error, info, warning }`（不传则自动启用内置 `AbcToastViewport`）
- `defaultDrawerCascadeMode?: 'stack' | 'adjacent'`（控制多级大表单抽屉默认展开方式）

### 第二步：使用 `<ProLayout>` 构建多模态导航壳层
将路由器的 `location.pathname` 与 `navigate` 传入 `<ProLayout>`：
- `brand`: `{ name, subtitle, logo, onClick, onEditBrand }`（`logo` 原生支持图片 URL 或 `<svg>...</svg>` 字符串）。
- `menuItems`: `AbcMenuItem[]` 树形菜单（支持 `key`、`label`、`path`、`icon`、`badge`、`children`）。
- `settings` / `defaultSettings`: 支持 `mode: 'sidebar' | 'top' | 'mix' | 'dual-column' | 'auth'`、多页签 `showTabs`、状态保活 `keepAlive`。

### 第三步：按场景直接选用标准 Pro 与复杂联动组件（禁止重复造轮子）
- **常规列表与 CRUD 页**：`<PageContainer>` + `<ProTable>`（开启 `viewable` + `showClientFilterSwitch` + `formContainer="drawer"`）；内联点击行看详情用 `splitPanelOpen` / `SplitDetailPanel`。
- **左树右表 + 详情工作台**：`<ProSplitWorkbench>`（内置 `ResizableSplitPane` 可拖拽/可折叠左栏 + 拼音树 + `SplitDetailLayout`）。
- **行内批量编辑表格**：`<EditableProTable>`（支持 `mode="row" | "table"`、跨列 `validator`、`summaryRender`）。
- **动态表单级联、增删行与键值**：`<ProFormProvider>` + `<ProFormDependency>`（`AbortSignal` 防竞态 + `resetFieldsOnChange`） + `<ProFormList>` + `<KeyValueInput>`（支持 `.env`/`headers`/`json`）。
- **可视化高级筛选与视图**：`<SavedFilterViews>` + `<FilterBuilder>`（别名 `<RuleBuilder>`）配合 `@abc-design/core` 的 `evaluateRuleGroup`。
- **跨步向导、变更对比与批处理追踪**：`<ProStepsForm>` + `<ConfigDiffViewer>`（自动脱敏密钥 + 字段/代码双视图） + `<BatchActionTracker>`。
- **经营与下钻分析看板**：`<StatCard>` + `<AbcChart>`（通过 `onEvents={{ click }}` 联动 `<ActiveFilterBar>` 实现图表与表格双向交叉下钻）。

### 第四步：严格遵守高频控件调用签名（防错核对）
- `Select` / `DictSelect` / `TreeSelect` / `Cascader`：`onChange={(val) => ...}` 直接返回选中值或数组，**不是** `e.target.value`。
- `InputNumber` / `ByteQuotaInput` / `DurationQuotaInput`：`onChange={(num) => ...}` 直接返回数值；注意配额控件 `size` 仅支持 `'sm' | 'default'`。
- `Input` / `Textarea`：`onChange={(e) => ...}` 返回标准输入事件；支持 `clearable`、`showCount`、`label`、`error`。
- `Checkbox` / `Switch`：`onChange={(checked: boolean) => ...}`。
- `useAbcConfig()`：明暗态字段为 `resolvedTheme`（`'light' | 'dark'`），不要写成 `resolvedColorScheme`。
- `Divider` 中间标题用 `label`；`ProFormContainer.mode` 为 `'drawer' | 'modal'`；`HubNavBar.badgeTone` 为 `'indigo' | 'slate' | 'primary' | 'dark'`。

### 第五步：表单容器与多级交互设计准则（大小表单分流规范）
- **大表单必须使用抽屉（`Drawer`）**：多字段、分组卡片、配额或包含 `ConfigDiffViewer` 审阅的复杂表单采用右侧全高抽屉，坚决避免绝对居中 Modal 顶部裁切。
- **大表单嵌套大表单必须使用二级抽屉（`cascadeMode="adjacent" | "stack"`）**：禁止 Modal 盖死或套 Modal。
- **小表单与轻量确认使用 `Dialog`**：仅 1~3 个字段、状态修改或删除确认使用居中 `Dialog` 或 `ReasonedActionDialog`。

### 第六步：组件库扩展与 Playground 100% 同步门禁
- 凡在 `/Users/guojianlong/front/abc-design` 新增导出组件或增强核心交互属性时，**必须同步在 `apps/playground/src/pages/` 补齐独立 `<ComponentDocPreview>` 预览卡片，并在 `apps/playground/src/registry/domains/*.ts` 登记该组件（接入 7 大分类与 `⌘K` 组件直达搜索）**。
- 构建导出前必须运行 `pnpm check:playground-sync` 确保 100% 导出覆盖与锚点零悬空。
