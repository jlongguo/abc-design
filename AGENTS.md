# ABC Design — AI Agent 权威对接手册 (AGENTS.md)

本文档面向编码 AI Agent（Antigravity / Claude Code / Cursor / Codex 等），定义在新项目或存量项目中集成并使用 `@abc-design/*` 设计系统时的**唯一真实架构契约、API 签名与防幻觉铁律**。

> **扩展文档索引**：
> - 单文件全量机器可读上下文：[llms-full.txt](./llms-full.txt)
> - 快速接入、样式模式与 5 大适配器：[docs/agent/01-quickstart-and-adapters.md](./docs/agent/01-quickstart-and-adapters.md)
> - 45+ 原子与高阶组件精确 Props 字典：[docs/agent/02-components-api.md](./docs/agent/02-components-api.md)
> - 5 模态 `ProLayout`、`ProTable` 与 `ProConfigForm`：[docs/agent/03-layout-and-pro-suite.md](./docs/agent/03-layout-and-pro-suite.md)
> - 自适应图表 `@abc-design/charts` 与 5 套标准页面蓝图：[docs/agent/04-charts-and-templates.md](./docs/agent/04-charts-and-templates.md)
> - 可直接挂载的 Agent Skill 技能包：[skills/abc-design/SKILL.md](./skills/abc-design/SKILL.md)

---

## 1. 四包架构职责边界

| 包名 | 职责定位 | 何时直接导入 |
| :--- | :--- | :--- |
| `@abc-design/tokens` | 三层语义 CSS 变量（`--abc-*`）、6 套品牌色板（`blue` / `indigo` / `violet` / `emerald` / `amber` / `rose`）、3 档信息密度（`compact` / `default` / `comfortable`）、4 档圆角、View Transitions 主题切换引擎 | 自定义 Tailwind CSS v4 样式表引入 `@abc-design/tokens/styles/index.css`（TS 类型与函数已由 `@abc-design/react` 透传导出） |
| `@abc-design/core` | 零框架依赖纯 TypeScript 无头算法内核：中文拼音首字母匹配 (`matchKeywordWithPinyin`)、树形父子级联与半选 (`computeTreeCheckState` / `toggleTreeNodeCheck`)、客户端表格过滤排序与 URL Query 同步 (`filterAndSortClientRows` / `readQueryFromUrlSearch` / `writeQueryToUrlSearch`)、42 格月历矩阵 (`buildCalendarMonthGrid`) | 非 React 环境或自定义纯逻辑 Hook 时直接导入（`@abc-design/react` 已完整透传导出） |
| `@abc-design/react` | 45+ 零业务耦合企业级 UI 组件、`<AbcProvider>` 适配器容器、5 模态 `<ProLayout>` 壳层、`<ProTable>`、`<ProConfigForm>`、`<PermissionGuard>` / `<DictSelect>` | **所有业务页面与布局壳层的主入口** |
| `@abc-design/charts` | 基于 ECharts 5 按需 Tree-shaking 的主题/容器双自适应图表 `<AbcChart>`（别名 `<Chart>`）与经营指标卡 `<StatCard>` | 仪表盘、数据报表、监控大盘页面（需同时安装 `echarts@^5.6.0`） |

---

## 2. 安装与两种样式接入模式（必选其一）

### 2.1 安装依赖

```bash
# 基础 UI + 布局 + Pro 套件
pnpm add @abc-design/tokens @abc-design/core @abc-design/react lucide-react

# 如需图表与经营指标卡，额外安装
pnpm add @abc-design/charts echarts
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

---

## 3. 顶层 `<AbcProvider>` 适配器契约（零业务耦合核心）

`@abc-design/react` 内部**绝不硬编码任何 HTTP 请求、路由库或权限 Store**。新项目对接时，只需在根组件挂载一次 `<AbcProvider>` 注入业务适配器：

```tsx
import React from 'react'
import { AbcProvider } from '@abc-design/react'

export function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <AbcProvider
      defaultTheme={{ mode: 'system', brand: 'blue', density: 'default', radius: 'md' }}
      watermarkText={['企业内网环境', '严禁外传']}
      defaultWatermarkEnabled={false}
      // 1. 文件上传适配器：供 ImageUpload、ProConfigForm 自动调用
      uploadAdapter={async (file: File): Promise<string> => {
        const formData = new FormData()
        formData.append('file', file)
        const res = await fetch('/api/upload', { method: 'POST', body: formData })
        const json = await res.json()
        return json.url
      }}
      // 2. 数据字典适配器：供 DictSelect、DictTag 自动按编码拉取枚举
      dictAdapter={async (dictCode: string) => {
        const res = await fetch(`/api/dicts/${dictCode}`)
        return res.json() // 返回 [{ label, value, tone }]
      }}
      // 3. 权限判定适配器：供 Permission / PermissionGuard 按钮级鉴权使用
      permissionAdapter={(perm, mode = 'any') => {
        const userPerms = new Set(['sys:user:add', 'sys:user:edit'])
        const list = Array.isArray(perm) ? perm : [perm]
        return mode === 'all'
          ? list.every((code) => userPerms.has(code))
          : list.some((code) => userPerms.has(code))
      }}
      // 4. 滑块行为验证码适配器（可选，不传则使用内置本地拼图演练）
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

`<ProLayout>` 通过受控的 `pathname` + `onNavigate` + `menuItems` 与任意路由框架解耦，一键解锁 `sidebar` / `top` / `mix` / `dual-column` / `auth` 5 种布局模式、多页签 `KeepAlive`、`⌘K` 拼音命令面板、动态租户品牌编辑与主题定制抽屉：

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
      brand={{
        name: 'Acme Cloud',
        subtitle: 'Multi-Tenant Console',
        logo: 'https://example.com/logo.svg', // 同时支持图片 URL 与内联 <svg> 字符串
      }}
      menuItems={MENUS}
      pathname={location.pathname}
      onNavigate={(path) => navigate(path)}
      user={{
        name: 'Admin',
        role: '超级管理员',
        menuItems: [
          { key: 'logout', label: '退出登录', danger: true, onClick: () => navigate('/login') },
        ],
      }}
    >
      <Outlet />
    </ProLayout>
  )
}
```

---

## 5. AI Agent 防幻觉与高频签名核对表 (CRITICAL DO & DON'T)

编码 Agent 在生成代码前必须严格遵守以下真实组件契约，**严禁混用 Ant Design 或原生 HTML 事件签名**：

1. **`Select` / `DictSelect` 的 `onChange` 直接返回选中值，而非 `ChangeEvent`**：
   - 正确：`<Select value={role} onChange={(val) => setRole(val)} options={...} />`（单选返回 `string | number`，`multiple` 多选返回 `Array<string | number>`）。
   - 错误：~~`onChange={(e) => setRole(e.target.value)}`~~。
2. **`Input` 与 `Textarea` 的 `onChange` 返回标准 React `ChangeEvent`，而 `InputNumber` 直接返回 `number | null`**：
   - `Input`: `<Input value={name} onChange={(e) => setName(e.target.value)} clearable />`
   - `InputNumber`: `<InputNumber value={count} onChange={(val) => setCount(val)} min={0} />`
3. **`Checkbox` 与 `Switch` 的 `onChange` 直接返回 `boolean`**：
   - 正确：`<Switch checked={enabled} onChange={(checked) => setEnabled(checked)} />`
   - 正确：`<Checkbox checked={agreed} onChange={(checked) => setAgreed(checked)} label="同意协议" />`
4. **大表单与小表单浮层容器选型准则（严禁大表单进 Modal，大小表单分流规范）**：
   - **大表单交互操作展示必须使用抽屉（Drawer）**：凡包含多字段、复杂输入组合、网格对比、折叠面板或长数据录入的大表单（高度易超视口或字段较多），必须使用右侧全高抽屉 `<Drawer placement="right" size="lg|xl|2xl">`。抽屉具备吸附 Header、原生垂直滚动 Body 与吸附 Footer，天然避免居中弹窗因绝对居中 `translate(-50%, -50%)` 被挤出视口顶部（负坐标）导致标题被裁切的硬伤。
   - **大表单嵌套大表单必须使用子级抽屉（二级/多级抽屉，L1 -> L2 -> L3）**：当打开一层是大表单，在表单中需要进一步打开另一个表单也是大表单的情况，**严禁弹窗套弹窗或直接盖死当前表单**，必须使用子级抽屉（二级抽屉）；系统已提供 `cascadeMode="adjacent"`（并排平级展开，支持两级大表单数据同时观测与比对）与 `cascadeMode="stack"`（向左层叠推挤与 L1/L2 标识），确保多级大表单的上下文连续性。
   - **小表单与轻量确认操作使用 Modal（Dialog），可支持多级堆叠**：对于字段很少、操作项轻量的即时交互（如单输入框修改、重命名、状态流转、危险操作二次确认、8–512 字符审计原因输入等），必须使用居中 `<Dialog>`；聚焦当前单一操作任务，且支持多级遮罩堆叠（通过多层 Dialog 依次弹出与关闭）。
   - 统一通过 `open: boolean` 与 `onClose: () => void` 控制（`Dialog` 亦兼容 `isOpen` 别名）。底层已采用原生 `<dialog>` Top Layer 与 `overscroll-behavior: contain`，**严禁**在业务代码中手动向 `document.body` 注入 `overflow: hidden` 或 `position: fixed`。
5. **后端接口不支持搜索时的表格处理**：
   - 使用 `<ProTable>` 时，若后端列表接口无搜索/过滤参数，直接开启 `clientFilter` 或 `showClientFilterSwitch`，即可零后端改动获得当前数据集的中文+拼音首字母即时检索与多列排序。
6. **命令式确认框与轻提示**：
   - 删除/高危确认统一调用 `const ok = await abcConfirm({ title: '确认删除', message: '...', tone: 'danger' })`（亦导出兼容别名 `confirm` 与 `useConfirm`）。
   - 消息通知优先使用 `const { toast } = useAbcConfig()` 或直接调用 `abcToast.success('保存成功')`。
7. **禁止硬编码写死亮暗背景色**：
   - 自定义局部容器时优先使用语义变量：`bg-[var(--abc-bg-surface)]`、`bg-[var(--abc-bg-muted)]`、`text-[var(--abc-fg)]`、`text-[var(--abc-fg-muted)]`、`border-[var(--abc-border)]`、`text-[var(--abc-primary)]`，确保 6 套品牌色与暗黑模式自动适配。
