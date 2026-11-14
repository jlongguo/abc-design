# 03. 5 模态 `ProLayout` 壳层与 Pro 业务套件指南

---

## 一、`ProLayout` — 5 模态企业级完整布局系统

### 1. 支持的 5 种布局拓扑 (`settings.mode`)
1. `'sidebar'`：经典左侧树形菜单（支持深色 `dark` / 浅色 `light` 侧栏独立色调、折叠图标态悬浮二级菜单、手风琴模式）。
2. `'top'`：顶部水平导航栏，最大化横向表格视野。
3. `'mix'`：混合导航（顶栏渲染一级业务域，侧边栏自动联动当前域下的二三级菜单）。
4. `'dual-column'`：双栏侧边导航（左侧极窄一级图标轨 + 右侧二级平铺面板，适合超大型 ERP/SaaS）。
5. `'auth'`：登录认证独立壳层（支持左右分屏极光叙事屏 `split` 与居中卡片 `centered`）。

> 说明：`ProLayout`、`SidebarNav`、`DualColumnNav`、`TopHorizontalNav`、`BrandLogoBlock` 与 `MultiTabBar` 均原生继承 `AbcProvider.theme.componentSize`（`xs | sm | md | lg`）与 `theme.motion`（也支持局部传入 `size` / `motion` prop 覆写）；未显式指定 `sidebarWidth` / `headerHeight` 时，侧边栏宽度（`208 / 232 / 248 / 268`）与顶栏高度（`48 / 54 / 58 / 62`）将自动随四档尺寸联动。

### 2. 核心类型定义

```ts
export interface AbcBrandInfo {
  name: string
  subtitle?: string
  /** 支持图片 URL、内联 <svg>...</svg> 字符串或自定义 ReactNode */
  logo?: React.ReactNode | string
  onClick?: () => void
  /** 传入此回调时，品牌区右侧自动显示编辑铅笔按钮（常用于多租户动态配置 Logo 与项目名称） */
  onEditBrand?: () => void
}

export interface AbcMenuItem {
  key: string
  label: string
  path?: string
  /** 支持 Lucide 名称（如 'Users'）、语义键（如 'dashboard'）或自定义节点 */
  icon?: string | React.ReactNode
  badge?: string | number
  hidden?: boolean
  disabled?: boolean
  externalUrl?: string
  children?: AbcMenuItem[]
}

export interface AbcLayoutSettings {
  mode: 'sidebar' | 'top' | 'mix' | 'dual-column' | 'auth'
  sidebarTone: 'light' | 'dark'
  sidebarCollapsed: boolean
  sidebarAccordion: boolean
  showTabs: boolean
  keepAlive: boolean
  contentWidth: 'fluid' | 'fixed'
  /** 展开态侧边栏宽度（不指定时随 componentSize 自动联动 208/232/248/268，自定义范围 196 ~ 288） */
  sidebarWidth?: number
  /** 顶部导航栏高度（不指定时随 componentSize 自动联动 48/54/58/62，自定义范围 46 ~ 66） */
  headerHeight?: number
  /** 多页签栏视觉风格 */
  tabStyle?: 'card' | 'pill' | 'underline'
  /** 顶部栏毛玻璃透射效果 */
  headerBlur?: boolean
  /** 是否显示面包屑与页脚 */
  showBreadcrumb?: boolean
  showFooter?: boolean
}
```

### 3. 对接不同路由框架示例

#### React Router v6 / v7
```tsx
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ProLayout } from '@abc-design/react'

export function DefaultLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <ProLayout
      brand={{ name: 'BytesFlows Admin', logo: tenantLogo }}
      menuItems={menuTree}
      pathname={location.pathname}
      onNavigate={(path) => navigate(path)}
    >
      <Outlet />
    </ProLayout>
  )
}
```

#### Next.js App Router (`'use client'`)
```tsx
'use client'
import { usePathname, useRouter } from 'next/navigation'
import { ProLayout } from '@abc-design/react'

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <ProLayout
      brand={{ name: 'Next Enterprise' }}
      menuItems={menuTree}
      pathname={pathname}
      onNavigate={(path) => router.push(path)}
    >
      {children}
    </ProLayout>
  )
}
```

---

## 二、`PageContainer` — 标准业务页面容器

每个路由页面顶层统一包裹 `<PageContainer>`，保证标题字阶、右上角操作区、头部统计卡插槽与底部吸底提交栏全站一致：

```tsx
<PageContainer
  title="订单清结算管理"
  subtitle="支持按账期核对商户分账流水与异常退汇单"
  tags={<StatusTag tone="success" dot>T+1 自动出账</StatusTag>}
  extra={<Button variant="primary">导出月度对账单</Button>}
  footerBar={<Button variant="primary">批量确认核销</Button>} // 可选吸底工具栏
>
  {/* 页面主体 */}
</PageContainer>
```

---

## 三、`ProTable` — Schema 驱动全功能 CRUD 表格

一套配置覆盖：**可折叠多维搜索卡片（支持文本、数值、多选、日期区间） + 表头单列气泡筛选与内联筛选行 + 表头右键快捷菜单 + 服务端异步分页 / 本地拼音即时过滤双引擎 + 自动定时轮询 + UTF-8 CSV 导出 + 沉浸全屏展示 + 列宽/列序/左右冻结/筛选项本地记忆 + 展开详情行与树形子行 + 行操作自动溢出折叠 + 毛玻璃悬浮批量胶囊栏 + 带草稿防丢失与双列自适应的新建/编辑容器**。

```tsx
import { ProTable, StatusTag, type AbcColumn, type ProTableFieldSchema } from '@abc-design/react'

interface RoleItem {
  id: number
  roleName: string
  roleKey: string
  status: '0' | '1'
}

const columns: AbcColumn<RoleItem>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', width: 80 },
  { key: 'roleName', title: '角色名称', dataIndex: 'roleName', sortable: true },
  { key: 'roleKey', title: '权限字符', dataIndex: 'roleKey' },
  {
    key: 'status',
    title: '状态',
    dataIndex: 'status',
    render: (v) => (
      <StatusTag tone={v === '0' ? 'success' : 'danger'}>
        {v === '0' ? '正常' : '停用'}
      </StatusTag>
    ),
  },
]

const fields: ProTableFieldSchema[] = [
  { name: 'roleName', label: '角色名称', required: true },
  { name: 'roleKey', label: '权限字符', required: true },
  {
    name: 'status',
    label: '状态',
    type: 'select', // 'text' | 'number' | 'select' | 'textarea' | 'switch' | 'date' | 'tags' | 'icon'
    options: [
      { label: '正常', value: '0' },
      { label: '停用', value: '1' },
    ],
  },
]

export function RoleManagePage() {
  return (
    <ProTable<RoleItem>
      storageKey="sys_role_table"
      title="系统角色列表"
      columns={columns}
      fields={fields}
      showClientFilterSwitch // 后端不支持搜索时可一键切换当前页拼音检索
      syncToUrl              // 页码与筛选条件自动同步至浏览器地址栏
      viewable               // 自动附加“详情”只读查看弹窗
      formContainer="drawer" // 'dialog' | 'drawer'
      request={async ({ current, pageSize, filters, sortField, sortOrder }) => {
        const res = await apiFetchRoles({ page: current, size: pageSize, ...filters })
        return { data: res.list, total: res.count }
      }}
      onSaveRecord={async (values, editingRecord) => {
        if (editingRecord) await apiUpdateRole(editingRecord.id, values)
        else await apiCreateRole(values)
      }}
      onDeleteRecords={async (ids) => {
        await apiBatchDeleteRoles(ids)
      }}
    />
  )
}
```

---

## 四、`ProConfigForm` — 分组系统参数与多租户配置表单

专用于站点设置、租户品牌配置、支付密钥配置等分组长表单场景；`type: 'image'` 且开启 `allowDirectUrlInput` 时，左侧自动渲染支持 **SVG 源码与图片直链双兼容** 的 `<ImagePreview>` 实时放大缩略框：

```tsx
import { ProConfigForm } from '@abc-design/react'

<ProConfigForm
  layoutMode="split" // 'split'（左导览右表单） | 'grid'
  initialValues={{ siteName: 'BytesFlows', siteLogo: 'https://example.com/logo.svg', openRegister: true }}
  groups={[
    {
      key: 'brand',
      title: '租户品牌标识',
      description: '配置控制台左上角与登录页展示的品牌名称及矢量图标',
      columns: 2,
      fields: [
        { name: 'siteName', label: '系统名称', required: true },
        { name: 'siteLogo', label: '品牌 Logo（支持 SVG 或直链）', type: 'image', allowDirectUrlInput: true },
        { name: 'openRegister', label: '开放自助注册', type: 'switch' },
      ],
    },
  ]}
  onSubmit={async (values) => {
    await saveTenantConfig(values)
  }}
/>
```
