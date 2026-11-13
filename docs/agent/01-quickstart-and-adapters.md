# 01. 快速接入、样式体系与 5 大适配器规范

## 1. 环境前置要求
- **React**：`>= 18.2.0` 或 `React 19`
- **TypeScript**：`>= 5.0`（完整携带 `.d.ts` 类型声明）
- **图标依赖**：`lucide-react`

```bash
pnpm add @abc-design/tokens @abc-design/core @abc-design/react lucide-react
# 如需数据大盘图表与经营指标卡：
pnpm add @abc-design/charts echarts
```

---

## 2. 样式系统接入（两种标准模式）

### 模式 A：预编译独立 CSS（零 Tailwind 配置侵入）
适合未启用 Tailwind CSS v4 或使用 Webpack / Rspack / Next.js 默认 CSS Pipeline 的项目：

```tsx
// src/main.tsx
import '@abc-design/react/styles.css'
```

### 模式 B：Tailwind CSS v4 源码级融合（最优体积）
适合宿主工程已配置 `@tailwindcss/vite` 或 `@tailwindcss/postcss` 的场景，共用同一份 Tailwind 构建上下文并支持在业务页直接使用语义变量：

```css
/* src/styles/index.css */
@import "tailwindcss";
@import "@abc-design/tokens/styles/index.css";

/* 必须显式扫描组件库产物，防止 Tailwind Tree-shaking 误裁组件类名 */
@source "../../node_modules/@abc-design/react/dist/**/*.js";
@source "../../node_modules/@abc-design/charts/dist/**/*.js";
```

---

## 3. 语义化 CSS 变量速查表 (`@abc-design/tokens`)

在编写自定义业务区块时，请直接使用以下语义 Token，从而零成本获得 **6 套品牌主色** 与 **明暗双模式** 自动适配能力：

| 类别 | CSS 变量名 | 用途说明 |
| :--- | :--- | :--- |
| 画布与表面 | `--abc-bg-canvas` | 主工作区底层画布背景 |
| 画布与表面 | `--abc-bg-surface` | 卡片、侧栏、顶栏、输入框表面背景 |
| 画布与表面 | `--abc-bg-muted` | 表头、次要灰底块、分段胶囊底槽 |
| 画布与表面 | `--abc-bg-elevated` | 弹窗、抽屉、下拉菜单浮层高阶背景 |
| 文本层级 | `--abc-fg` | 一级标题与正文主色 |
| 文本层级 | `--abc-fg-secondary` | 表单标签与二级说明文字 |
| 文本层级 | `--abc-fg-muted` | 辅助提示、时间戳与图标默认色 |
| 边框分割 | `--abc-border` / `--abc-border-subtle` | 卡片外框、表格分割线 |
| 品牌与状态 | `--abc-primary` / `--abc-primary-soft` | 当前激活的品牌主色（随 `brand` 切换）及其浅色高亮底 |
| 语义反馈 | `--abc-success` / `--abc-warning` / `--abc-danger` / `--abc-info` | 成功、警告、高危错误与提示主色 |
| 尺寸密度 | `--abc-control-h-xs` / `sm` / `md` / `lg` | 随 `compact` / `default` / `comfortable` 动态缩放的控件高度 |
| 圆角规格 | `--abc-radius-xs` / `sm` / `md` / `lg` | 随 `none` / `sm` / `md` / `lg` 全局联动的圆角半径 |

---

## 4. `<AbcProvider>` 完整 Props 与 5 大适配器类型契约

```ts
export interface AbcProviderProps {
  children: React.ReactNode
  /** 初始主题：{ mode: 'light'|'dark'|'system', brand: 'blue'|'indigo'|'violet'|'emerald'|'amber'|'rose', density: 'compact'|'default'|'comfortable', radius: 'none'|'sm'|'md'|'lg' } */
  defaultTheme?: Partial<AbcThemeConfig>
  /** 页面切换过渡：'fade-slide' | 'fade' | 'zoom' | 'slide-left' | 'none' */
  defaultPageTransition?: AbcPageTransition
  /** 防截图水印文案（支持单行字符串或多行数组） */
  watermarkText?: string | string[]
  defaultWatermarkEnabled?: boolean
  /** 是否将用户主题偏好持久化至 localStorage（默认 true） */
  persist?: boolean
  /** 1. Toast 消息适配器（不传则自动挂载内置零依赖 AbcToastViewport） */
  toastAdapter?: {
    success: (message: string) => void
    error: (message: string) => void
    info: (message: string) => void
    warning: (message: string) => void
  }
  /** 2. 文件上传适配器：接收 File，返回线上 URL 字符串 */
  uploadAdapter?: (file: File) => Promise<string>
  /** 3. 数据字典适配器：按编码同步或异步返回 [{ label, value, tone?, disabled? }] */
  dictAdapter?: (dictCode: string) => AbcDictOption[] | Promise<AbcDictOption[]>
  /** 4. 权限校验适配器：供 <Permission> / <PermissionGuard> 判定按钮权限 */
  permissionAdapter?: (permission: string | string[], mode?: 'any' | 'all') => boolean
  /** 5. 滑块拼图验证码适配器：不传时 <SliderVerify> 自动降级为内置离线拼图挑战 */
  captchaAdapter?: () => Promise<{
    nonceStr: string
    blockSrc: string
    blockY: number
    canvasSrc: string
  }>
  /** 按需扩展自定义图标组件映射表 */
  iconRegistry?: Record<string, AbcIconComponent>
}
```

### 在任意子组件读取与控制全局状态 (`useAbcConfig`)
```tsx
import { useAbcConfig } from '@abc-design/react'

function ThemeToolbar() {
  const {
    theme,           // { mode, brand, density, radius }
    resolvedTheme,   // 'light' | 'dark'（实际解析后的明暗态）
    toggleTheme,     // (origin?: { clientX, clientY }) => void（带圆形扩散动画）
    setBrand,        // (brand) => void
    setDensity,      // (density) => void
    setRadius,       // (radius) => void
    toast,           // { success, error, info, warning }
  } = useAbcConfig()
  // ...
}
```
