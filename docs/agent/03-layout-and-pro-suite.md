# 03. 企业级布局、Chrome、高阶 Pro 套件与路由保活

> **AI Agent 防幻觉与避坑准则**：
> 1. **`PageContainer` 底部栏字段名为 `footer`，严禁写成 `footerBar`**。
> 2. **`ReasonedActionDialog` 必填 `description`、`confirmLabel` 与 `onOpenChange(open)`；`ReasonedActionDrawer` 必填 `confirmLabel` 与 `onClose()`**。
> 3. **`InspectorPanel` 默认不显示清除按钮**：必须显式传入 `showClear={true}`（配合 `onClear`）才会渲染顶部“清除选择”按钮。
> 4. **需要多组件实时联动、表单依赖异步防竞态、三栏拖拽工作台或可编辑表格时**，直接跳转阅读 [05-complex-linkage-and-orchestration.md](./05-complex-linkage-and-orchestration.md)（含 `ProSplitWorkbench`、`ResizableSplitPane`、`EditableProTable`、`FilterBuilder`、`SavedFilterViews`、`ActiveFilterBar`、`ProStepsForm`、`ConfigDiffViewer`、`BatchActionTracker`、`ProFormProvider` / `ProFormDependency` / `ProFormList`）。

---

## 1. 应用外壳与路由过渡 (`ProLayout`, `PageContainer`, `AuthLayout`, `KeepAliveContainer`, `PageTransition`)

### `ProLayout`（多布局统一应用外壳）
- **核心 Props**：
  - `brand?: AbcBrandInfo`、`menuItems: AbcMenuItem[]`、`pathname: string`、`onNavigate: (path: string, item?: AbcMenuItem) => void`
  - `settings?: Partial<AbcLayoutSettings>`、`defaultSettings?: Partial<AbcLayoutSettings>`、`onSettingsChange?: (next: AbcLayoutSettings) => void`
  - `user?: AbcUserInfo`、`headerExtra?: ReactNode`、`commandActions?: CommandActionItem[]`
  - `tabs?: AbcTabItem[]`、`onTabsChange?: (tabs: AbcTabItem[]) => void`
  - `authRender?: ReactNode`、`authProps?: Partial<AuthLayoutProps>`、`showCustomizerTrigger?: boolean`
  - `isolateTabError?: boolean`（默认 `true`，为多页签注入 `TabErrorBoundary`）、`homePath?: string`（默认 `'/'`）
  - `size?: AbcSize`、`motion?: AbcMotionPreset`
- **布局模式 (`AbcLayoutSettings.mode` / `AbcLayoutMode`)**：支持 5 种标准拓扑 `'sidebar' | 'top' | 'mix' | 'dual-column' | 'auth'`（默认 `'sidebar'`）。

### `PageContainer`
- **核心 Props (`PageContainerProps`)**：
  - `title?: ReactNode`、`subtitle?: ReactNode`、`tags?: ReactNode`、`breadcrumbs?: BreadcrumbEntry[]`
  - `extra?: ReactNode`、`headerContent?: ReactNode`、`footer?: ReactNode`（底部吸底栏）、`className?: string`

```tsx
<PageContainer
  title="算力集群管理"
  subtitle="统一配置多可用区网关、配额策略与审批流"
  extra={<Button variant="primary">新建集群</Button>}
  footer={<Button variant="primary">保存全页配置</Button>}
>
  {children}
</PageContainer>
```

### `AuthLayout`
- `brand?: AbcBrandInfo`、`variant?: 'split' | 'centered'`、`headline?: ReactNode`、`subheadline?: ReactNode`、`highlights?: string[]`、`topRightExtra?: ReactNode`、`copyright?: ReactNode`

### `KeepAliveContainer` & `PageTransition`
- `AbcPageTransition`: `'fade-slide' | 'fade' | 'zoom' | 'slide-left' | 'none'`
- `KeepAliveContainer`:
  - `activeKey: string`（必填，通常为 `location.pathname`）
  - `enabled?: boolean`（默认 `true`）、`maxCached?: number`（默认 `12`，LRU 淘汰）、`aliveKeys?: string[]`
  - `scrollContainerRef?: RefObject<HTMLElement | null>`（切回页签恢复滚动高度）、`refreshSeed?: number`、`refreshKeys?: Record<string, number>`
  - `activeClassName?: string`、`isolateError?: boolean`（默认 `false`）、`onTabReload?: (key) => void`、`onTabClose?: (key) => void`、`onNavigateHome?: () => void`
- `PageTransition`:
  - `activeKey?: string`、`transition?: AbcPageTransition`、`showProgress?: boolean`（默认 `true`，切换 `activeKey` 时联动 `TopProgressBar`）

---

## 2. 页面 Chrome、导航带与引导头

### `PageHeader` & `PageSection` (`Section`)
- `PageHeader`: `backLink?: ReactNode`、`eyebrow?: ReactNode`、`title: ReactNode`（必填）、`badge?: ReactNode`、`description?: ReactNode`、`action?: ReactNode`、`actions?: ReactNode`
- `PageSection`（导出别名 `Section`）：`title?: ReactNode`、`badge?: ReactNode`、`description?: ReactNode`、`action?: ReactNode`、`contentClassName?: string`、`noPadding?: boolean`（默认 `false`）、`children: ReactNode`

### `HubNavBar` & `hubNavTabClassName`
- `HubNavBar`: 多层/多模块汇总导航条：
  - `badge?: ReactNode`、`layerBadge?: ReactNode`
  - `badgeTone?: 'indigo' | 'slate' | 'primary' | 'dark'`、`layerTone?: 'indigo' | 'slate' | 'primary' | 'dark'`
  - `title?: ReactNode`、`meta?: ReactNode`、`navLabel?: string`
  - `variant?: 'compact' | 'layered' | 'pill'`、`children: ReactNode`
- `hubNavTabClassName(active: boolean, variant?: 'compact' | 'layered' | 'pill'): string`：用于快速渲染与 `HubNavBar` 视觉对齐的 Tab 按钮或 `<Link>`。

### `ProPageHeader`（含右侧操作说明抽屉与无障碍摘要）
- **核心 Props (`ProPageHeaderProps`)**：
  - `title?: ReactNode`、`description?: ReactNode`、`breadcrumb?: ReactNode`、`tags?: ReactNode`、`actions?: ReactNode`
  - `guide?: ProPageGuide`（配置后自动提供右侧滑出“操作说明” `Drawer` 与供屏幕阅读器读取的 `<details className="sr-only">` 结构化摘要）
    - `ProPageGuide`: `{ badge?: ReactNode; title: ReactNode; subtitle?: ReactNode; steps: ProPageGuideStep[]; summary?: ReactNode; extra?: ReactNode }`
    - `ProPageGuideStep`: `{ step?: string | number; title: ReactNode; description?: ReactNode }`
  - `guideButtonLabel?: ReactNode`（默认 `'操作说明'`）、`guideDrawerTitle?: ReactNode`、`guideCloseLabel?: ReactNode`、`guideDrawerWidth?: number | string`（默认 `480`）
  - `guideOpen?: boolean`、`defaultGuideOpen?: boolean`、`onGuideOpenChange?: (open: boolean) => void`、`hideGuide?: boolean`

```tsx
<ProPageHeader
  title="租户密钥轮换中心"
  description="支持灰度双密钥并行过渡与审计追踪"
  actions={<Button variant="primary">签发新密钥</Button>}
  guide={{
    badge: '操作指南',
    title: '安全轮换流程',
    steps: [
      { title: '生成新密钥', description: '系统会保持旧密钥 24 小时宽限期' },
      { title: '吊销旧密钥', description: '观测流量切换完成后再执行吊销' },
    ],
    summary: '建议在业务低峰期执行轮换。',
  }}
/>
```

### `WorkflowStepBanner` / `ContextQuickBar` / `QuickSelectBar`
- `WorkflowStepBanner`: 横向步骤指引条：
  - `badge: ReactNode`、`title: ReactNode`、`extra?: ReactNode`
  - `steps: Array<{ step: string | number; title: ReactNode; description: ReactNode }>`
  - `collapsible?: boolean`、`defaultCollapsed?: boolean`
- `ContextQuickBar`: 上下文关联快捷跳转条：
  - `badge: ReactNode`、`title: ReactNode`、`contextTags?: Array<{ key?: string; text?: ReactNode; label?: ReactNode; value?: ReactNode }>`
  - `actions: Array<{ key?: string; href: string; label: ReactNode }>`
- `QuickSelectBar`: 列表上方快速分组筛选胶囊栏：
  - `label: string`、`items: Array<{ id?: string; key?: string; label: ReactNode; code?: string; active?: boolean; count?: number; onSelect?: () => void }>`
  - `selectedId?: string | null`、`headerAction?: ReactNode`、`onSelect?: (id: string | null) => void`、`onClear?: () => void`、`allLabel?: string`

---

## 3. 数据表格 (`DataTable`, `ProTable`, `FilterToolbar`)

### `DataTable<T>`（轻量确定性桌面/移动端双模数据表）
- **核心 Props (`DataTableProps<T>`)**：
  - `columns: DataTableColumn<T>[]`（列含 `{ key, header?, title?, render?, cell?, align?, mono?, width?, minWidth?, className?, cellClassName?, headerClassName? }`）
  - `data?: T[]` / `rows?: T[]`（等价别名）
  - `keyExtractor?: (item: T, index: number) => string | number` / `rowKey?: ...`
  - 空状态：`emptyNode?`、`emptyTitle?`、`emptyDescription?`、`emptyAction?`
  - 状态与外观：`loading?: boolean`、`skeletonRows?: number`（默认 `5`）、`loadingStatusText?: string`、`keepHeaderWhenEmpty?: boolean`、`framed?: boolean`（默认 `true`）、`stickyHeader?: boolean`、`density?: 'compact' | 'comfortable' | 'relaxed' | AbcSize`
  - 行选中：`onRowClick?: (item: T) => void`（自动带键盘 Enter/Space 激活）、`selectedRowKey?: string | number | null`
  - 分页集成：`pagination?: PaginationProps`（内联渲染 `SmartPagination`，支持 `offset` 与 `cursor` 双模）

### `ProTable<T, Q, F>`（全功能 CRUD 表格，兼容 `CrudTable` 别名）
- **核心 Props**：
  - `storageKey?: string`（别名 `tableId`，本地记住列宽、列序、固定列、显隐与表单草稿）
  - `columns: AbcColumn<T>[]`、`searchFields?: ProSearchFieldConfig[]`、`formFields?: ProCrudFormField<T>[]`、`formSchema?: ProSchemaLike<F>`
  - `request?: (params: ProTableRequestParams) => Promise<ProTableRequestResult<T>>` 或 `api?: ProCrudApiConfig<T, Q, F> | ProTableApiInput<T>` 或 `dataSource?: T[]`
  - 搜索与工具栏：`searchVariant?: 'card' | 'toolbar' | 'none'`、`headerFilterMode?`、`showHeaderFilterToggle?`、`clientFilter?`、`autoRefresh?`、`exportable?`/`showExport?`、`syncToUrl?`
  - 表单与详情：`formContainer?: 'dialog' | 'drawer'`、`formColumns?: 1 | 2`、`viewable?`/`showView?`、`selectedRowKey?`、`onRowClick?`
  - 行操作：`rowActions?: ProTableRowAction<T>[]`、`actionButtons?: ProActionButtonConfig<T>[]`、`maxInlineActions?: number`、`showBatchDelete?`

### `FilterToolbar`
- 紧凑表格上方检索工具条：`surface?: boolean`、`hasActiveFilters?: boolean`、`onReset?: () => void`、`resetLabel?: ReactNode`、`search?: ReactNode`、`filters?: ReactNode`、`trailing?: ReactNode`

---

## 4. 主从分栏检视容器 (`SplitDetailLayout` / `SplitDetailPanel` / `SplitInspectorLayout` / `InspectorPanel`)

> **交互选型**：需要在表格/列表右侧**非阻塞式挤压**展开详情与编辑时，使用 `SplitDetailLayout` + `SplitDetailPanel`；若还包含左侧分组导航树与可拖拽双栏底座，使用 [05 中的 `ProSplitWorkbench`](./05-complex-linkage-and-orchestration.md#32-prosplitworkbench--左树--中表--右侧可挤压详情三栏工作台)。

### `SplitDetailLayout` & `SplitDetailPanel`
- `SplitDetailLayoutProps`:
  - `open: boolean`（`false` 时主区占满 100% 宽度）
  - `expanded?: boolean`（沉浸全宽：隐藏主区并让 `panel` 占满 100%）
  - `panel?: ReactNode`、`panelWidth?: number | string`（默认 `480`）、`minPanelWidth?: number`（`360`）、`maxPanelWidth?: number`（`760`）
  - `resizable?: boolean`（默认 `true`）、`storageKey?: string`、`stickyPanel?: boolean`（默认 `true`）、`gap?: 'sm' | 'md' | 'lg'`
- `SplitDetailPanelProps`:
  - `title?: ReactNode`、`subtitle?: ReactNode`、`badge?: ReactNode`
  - `navigation?: { current: number; total: number; onPrev: () => void; onNext: () => void; prevLabel?: string; nextLabel?: string }`
  - `expandable?: boolean`、`expanded?: boolean`、`onExpandedChange?: (expanded: boolean) => void`
  - `headerActions?: ReactNode`、`closable?: boolean`（默认 `true`）、`onClose?: () => void`、`loading?: boolean`、`footer?: ReactNode`
  - 细粒度子原语：`SplitDetailHeader`、`SplitDetailTitle`、`SplitDetailBody`、`SplitDetailFooter`

```tsx
<SplitDetailLayout
  open={Boolean(selected)}
  expanded={expanded}
  storageKey="orders-split-detail"
  panel={
    selected ? (
      <SplitDetailPanel
        title={selected.orderNo}
        badge={<StatusBadge status={selected.status} />}
        expandable
        expanded={expanded}
        onExpandedChange={setExpanded}
        onClose={() => setSelected(null)}
        footer={<Button variant="primary" onClick={handleApprove}>通过审核</Button>}
      >
        <DescriptionList items={[{ label: '金额', value: selected.amount, mono: true }]} />
      </SplitDetailPanel>
    ) : null
  }
>
  <DataTable rows={orders} selectedRowKey={selected?.id ?? null} onRowClick={setSelected} columns={cols} />
</SplitDetailLayout>
```

### `SplitInspectorLayout` & `InspectorPanel`
- `SplitInspectorLayout`: `ratio?: 'default' | 'balanced' | 'wide-master'`、`stickyInspector?: boolean`、`inspector?: ReactNode`
- `InspectorPanel`: `title?`、`subtitle?`、`badge?`、`headerActions?`、`showClear?: boolean`（**必须传 `true` 才渲染清除按钮**）、`onClear?: () => void`、`hasSelection?`、`isEmpty?`、`emptyMessage?`、`loading?`、`error?`、`footer?`

---

## 5. Pro 表单容器、多选项卡配置页、日志与指令面板

### `ProFormContainer`（别名 `FormDrawerDialog`）
- 将触发按钮 + 摘要预览卡片 + 弹窗/抽屉载体一体化：
  - `title: string`、`triggerLabel: string`（均为必填）、`description?: string`
  - `mode?: 'drawer' | 'modal'`（默认 `'modal'`；大表单请传 `'drawer'`）
  - `size?: DrawerProps['size']`、`maxWidthClass?: string`、`footer?: ReactNode`
  - `open?: boolean`、`onOpenChange?: (open: boolean) => void`
  - `summarySlot?: ReactNode`、`emptySummaryHint?: ReactNode`、`headerActions?: ReactNode`、`modalHeaderActions?: ReactNode`、`inlineInTestEnv?: boolean`

### `ProConfigPage`（别名 `CrudConfigPage`）与 `ProConfigForm`
- `ProConfigPage<T>`: 左侧垂直选项卡导航 + 远程拉取 (`fetchConfig`) + 权限控制 (`permission` / `hasPermission`) + 全类型配置控件 + 保存反馈：
  - `title: string`、`subTitle?: string`、`permission?: string`、`hasPermission?: (code?: string) => boolean`
  - `customUpload?: (file: File) => Promise<{ url: string } | string | undefined>`
  - `defaultValues: T`、`fetchConfig: () => Promise<any>`、`saveConfig: (payload: any) => Promise<any>`、`transformBeforeSave?: (values: T) => any`
  - `tabs: ProConfigTabSchema<T>[]`（字段 `type` 支持 `'input' | 'password' | 'number' | 'textarea' | 'select' | 'switch' | 'radio' | 'checkbox-csv' | 'image-url' | 'custom'`）
- `ProConfigForm<T>`: Schema 驱动分组配置页：`groups: ProConfigGroupSchema[]`、`initialValues: T`、`layoutMode?: 'split' | 'grid'`、`onSubmit: (values: T) => void | Promise<void>`、`submitText?: string`（字段 `type`: `'text' | 'password' | 'number' | 'textarea' | 'switch' | 'select' | 'treeSelect' | 'image'`）

### `ProLogViewer`（别名 `VirtualLogViewer`）
- 虚拟滚动日志流检视器，内置级别过滤（ALL/INFO/WARN/ERROR）、关键词搜索、自动贴底开关与一键复制：
  - `logs: Array<LogEntry | string>`（`LogEntry`: `{ seq?, level?, message, detail?, created_at? }`）
  - `heightClass?: string`（默认 `'h-[440px]'`）、`estimateSize?: number`（默认 `26`）、`overscan?: number`（默认 `12`）
  - `defaultStickBottom?: boolean`、`labels?: ProLogViewerLabels`

### `ProCommandPalette` & `CommandTriggerButton`
- 全局 `Cmd+K` / `Ctrl+K` 指令面板与顶部触发按钮：
  - `ProCommandPalette`: `open?: boolean`、`onOpenChange?: (open: boolean) => void`、`enableShortcut?: boolean`（默认 `true`）、`entityMatchers?: ProCommandEntityMatcher[]`（前缀如 `job_` / `org_` 直达跳转）、`pages?: ProCommandPageItem[]`、`onNavigate?: (to, page) => void`、`actions?: ProCommandActionItem[]`、`labels?: ProCommandPaletteLabels`、`searchQuery?`、`onSearchQueryChange?`
  - `CommandTriggerButton`: `{ onClick: () => void; placeholder?: string; mobilePlaceholder?: string; ariaLabel?: string }`

---

## 6. 高安全审计与权限字典组件

### `ReasonedActionDialog` & `ReasonedActionDrawer`
- **`ReasonedActionDialog`**（小范围高危操作强制填审计原因）：
  - **必填字段**：`open: boolean`、`title: ReactNode`、`description: ReactNode`、`confirmLabel: ReactNode`、`onOpenChange: (open: boolean) => void`、`onConfirm: (reason: string) => void`
  - 可选字段：`destructive?: boolean`、`variant?: 'default' | 'destructive'`、`minReasonLength?: number`（默认 `8`）、`maxReasonLength?: number`（默认 `512`）、`pending?: boolean`、`confirmDisabled?: boolean`、`error?: string | null`、`reasonLabel?`、`reasonPlaceholder?`、`children?`
- **`ReasonedActionDrawer`**（复杂大表单 + 强制审计原因，默认支持二级抽屉平级并排展开）：
  - **必填字段**：`open: boolean`、`onClose: () => void`、`title: ReactNode`、`confirmLabel: ReactNode`、`onConfirm: (reason: string) => void`
  - 可选字段：`description?: ReactNode`、`cascadeMode?: 'stack' | 'adjacent'`（默认 `'adjacent'`）、`width?: number | string`（默认 `560`）、`destructive?`、`minReasonLength?`、`maxReasonLength?`、`pending?`、`error?`

```tsx
<ReasonedActionDialog
  open={open}
  title="强制吊销租户凭证"
  description="吊销后正在运行中的推理请求将在 5 秒内收到 401。"
  confirmLabel="确认吊销"
  destructive
  onOpenChange={setOpen}
  onConfirm={async (reason) => {
    await api.revokeKey(keyId, reason)
    setOpen(false)
  }}
/>
```

### `PermissionGuard` (`Permission`) / `DictSelect` / `DictTag`
- `PermissionGuard`（别名 `Permission`）：`code?: string | string[]`、`mode?: 'any' | 'all'`、`fallback?: ReactNode`（依赖 `AbcProvider.permissionAdapter`）
- `DictSelect` / `DictTag`：通过 `dictCode`（别名 `dictKey`）自动接入 `AbcProvider.dictAdapter`

---

## 7. 复杂联动与编排组件索引（详见 `05`）

以下组件专门用于跨组件、跨状态、异步防竞态与多阶段流转，完整 API 与端到端可运行 TSX 代码见 [05-complex-linkage-and-orchestration.md](./05-complex-linkage-and-orchestration.md)：
- 工作台与分栏：`ProSplitWorkbench`、`ResizableSplitPane`
- 表单编排与动态数组：`useProForm`、`ProFormProvider`、`ProFormDependency`、`ProFormList`、`KeyValueInput`、`ProStepsForm`
- 表格编辑与规则筛选：`EditableProTable`、`FilterBuilder`（`RuleBuilder`）、`SavedFilterViews`、`ActiveFilterBar`
- 审阅与批处理追踪：`ConfigDiffViewer`、`BatchActionTracker`
