---
name: abc-design
description: 使用 @abc-design/*（tokens、core、react、charts）搭建或改造企业级中后台前端工程、接入 5 模态 ProLayout 布局、构建 Schema 驱动 ProTable / ProConfigForm 页面及自适应 ECharts 看板。当用户要求基于 abc-design 创建新项目、迁移旧管理后台、开发 CRUD 列表、配置表单或仪表盘时必须激活此技能。
---

# ABC Design (`@abc-design/*`) 官方集成技能指南

## 1. 适用场景与前置核查

在编写任何业务代码前，先检查目标工程的 `package.json` 与全局样式入口：
1. 确认已安装 `@abc-design/tokens`、`@abc-design/core`、`@abc-design/react`（若含图表页面则包含 `@abc-design/charts` 与 `echarts`）。
2. 检查样式加载方式（二选一，不可遗漏）：
   - **普通项目**：入口引入 `import '@abc-design/react/styles.css'`。
   - **Tailwind CSS v4 项目**：主 CSS 文件引入 `@import "@abc-design/tokens/styles/index.css";` 并通过 `@source` 扫描 `@abc-design/react` 与 `@abc-design/charts`。

## 2. 标准对接四步法

### 第一步：在根组件配置 `<AbcProvider>`
将宿主项目的上传接口、字典服务、权限码校验、滑块验证码接口与 Toast 服务通过 Adapter 注入 `<AbcProvider>`，保持 UI 组件与业务 API 零耦合：
- `uploadAdapter: (file: File) => Promise<string>`
- `dictAdapter: (dictCode: string) => AbcDictOption[] | Promise<AbcDictOption[]>`
- `permissionAdapter: (permission: string | string[], mode?: 'any' | 'all') => boolean`
- `captchaAdapter?: () => Promise<{ nonceStr, blockSrc, blockY, canvasSrc }>`
- `toastAdapter?: { success, error, info, warning }`（不传则自动启用内置 `AbcToastViewport`）

### 第二步：使用 `<ProLayout>` 构建多模态导航壳层
将路由器的 `location.pathname` 与 `navigate` 传入 `<ProLayout>`：
- `brand`: `{ name, subtitle, logo, onClick, onEditBrand }`（`logo` 原生支持图片 URL 或 `<svg>...</svg>` 字符串）。
- `menuItems`: `AbcMenuItem[]` 树形菜单（支持 `key`、`label`、`path`、`icon`、`badge`、`children`）。
- `settings` / `defaultSettings`: 支持 `mode: 'sidebar' | 'top' | 'mix' | 'dual-column' | 'auth'`、多页签 `showTabs`、状态保活 `keepAlive`。
- `headerExtra`: 挂载多租户切换器、环境标识或通知中心。

### 第三步：使用 `<PageContainer>` + Pro 套件交付业务页面
- **列表与增删改查页**：优先使用 `<ProTable>`，通过 `columns` + `fields` 一处配置同时驱动顶部检索栏、表头内联筛选、远程/本地拼音双引擎过滤（`clientFilter` / `showClientFilterSwitch`）、详情查看（`viewable`）与带草稿防丢失的弹窗/抽屉表单（`formContainer: 'dialog' | 'drawer'`）。
- **分组参数设置页**：优先使用 `<ProConfigForm>`，支持 `split`（左侧锚点描述 + 右侧表单卡片）或 `grid` 布局，内置图片/SVG 实时预览与脏数据检测。
- **经营分析看板页**：使用 `@abc-design/charts` 的 `<StatCard>`（等宽数字 + 涨跌绿红标）与 `<AbcChart>`（自动适配暗黑模式、6 大品牌色与容器 `ResizeObserver`）。

### 第四步：严格遵守高频控件调用签名（防错核对）
- `Select` / `DictSelect`：`onChange={(val) => ...}` 直接返回原始值或数组，**不是** `e.target.value`。
- `InputNumber`：`onChange={(num) => ...}` 直接返回 `number | null`。
- `Input` / `Textarea`：`onChange={(e) => ...}` 返回标准输入事件；支持 `clearable`、`showCount`、`label`、`error`。
- `Checkbox` / `Switch`：`onChange={(checked: boolean) => ...}`。
- `Tree`：`checkable` 模式下自动处理父子级联与半选态，`onCheck={(checkedKeys, { halfCheckedKeys }) => ...}`。
- `ImagePreview`：同时支持位图直链与内联 `<svg>` 源码缩略图及全屏缩放旋转预览。
