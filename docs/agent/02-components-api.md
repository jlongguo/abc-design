# 02. `@abc-design/react` 45+ 组件精确 API 字典

> 所有组件均支持直接从 `@abc-design/react` 具名导入。

---

## 一、通用、图标与导航

### 1. `Button`
```tsx
<Button
  variant="primary" // 'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'warning' | 'ghost' | 'text' | 'link'
  size="sm"         // 'xs' | 'sm' | 'md' | 'lg'
  loading={false}
  loadingText="提交中…"
  disabled={false}
  block={false}
  leftIcon={<Plus className="h-3.5 w-3.5" />}
  rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
  iconOnly={false}
  onClick={handleClick}
>
  新建租户
</Button>
```

### 2. `SegmentedControl`
分段选择器控件，用于在多个互斥选项之间进行快捷切换，支持图标、角标、等宽/流式自适应布局与物理动效：
```tsx
<SegmentedControl
  value={scope}
  onChange={setScope}
  size="sm"
  options={[
    { value: 'all', label: '全部' },
    { value: 'active', label: '运行中', badge: 12 },
    { value: 'frozen', label: '已冻结' },
  ]}
/>
```

### 3. `Icon` & `IconPicker`
- `Icon`：按需具名映射 120+ 高频中后台 Lucide 图标，兼容历史 `el-icon-*` 类名与中文菜单标题智能推断（`text` 属性）。
- `IconPicker`：同时支持两种模式：
  1. **内联表单字段模式**：`<IconPicker value={icon} onChange={setIcon} clearable />`
  2. **受控弹窗模式**：`<IconPicker open={open} current={icon} onClose={() => setOpen(false)} onSelect={setIcon} />`

### 3. `CopyableText` & `copyToClipboard` & `Kbd`
```tsx
<CopyableText
  text="sk-live-9812379182"
  displayText="sk-live-****9182" // 可选脱敏展示文案
  iconOnly={false}
  onCopy={(copied) => console.log(copied)}
/>
```

### 4. `Breadcrumb` & `Steps`
```tsx
<Breadcrumb
  items={[
    { key: 'home', label: '首页', onClick: () => navigate('/') },
    { key: 'roles', label: '角色管理' },
  ]}
/>

<Steps
  current={1} // 0-based 当前步骤索引
  direction="horizontal" // 'horizontal' | 'vertical'
  onChange={(stepIndex) => setStep(stepIndex)}
  items={[
    { title: '填写主体', description: '基础工商信息' },
    { title: '分配配额', description: '设定并发上限' },
    { title: '开通完成' },
  ]}
/>
```

---

## 二、高密度表单控件

### 1. `FormField`
```tsx
<FormField label="企业名称" required error={errors.name} helperText="将展示在控制台左上角" layout="vertical">
  <Input value={name} onChange={(e) => setName(e.target.value)} clearable />
</FormField>
```

### 2. `Input` / `InputNumber` / `Textarea` / `SearchInput` / `QuotaUnitInput`
- `Input`：支持 `size` (`'xs'|'sm'|'md'|'lg'`)、`prefix` / `prefixIcon`、`suffix` / `suffixIcon`、`allowClear` / `clearable`（清空后自动回焦）、`passwordToggle`（`type="password"` 默认开启明密文眼睛按钮）、`showCount`、内联 `label` / `error` / `helperText`。
- `SearchInput`：统一定制搜索框组件，内置搜索图标居中、一键清空与回车提交监听（`<SearchInput placeholder="检索规则或拼音首字母..." onClear={handleClear} />`）。
- `QuotaUnitInput`（含 `ByteQuotaInput` / `DurationQuotaInput`）：容量/时长配额与单位联动输入，支持自动换算（B/KB/MB/GB/TB 或 s/m/h/d）、自适应单位匹配与范围保护：
  ```tsx
  <ByteQuotaInput
    value={quotaBytes}
    onChange={setQuotaBytes}
    allowedUnits={['MB', 'GB', 'TB']}
    ariaLabel="磁盘配额"
  />
  ```
- `InputNumber`：`value: number | null`，`onChange: (value: number | null) => void`，支持 `min`、`max`、`step`、键盘上下键步进。
- `Textarea`：支持 `showCount`、`maxLength`、内联 `label` / `error` / `helperText`。

### 3. `Select` & `DictSelect`
- **注意：`onChange` 直接返回选中值（单选为 `string | number`，多选 `multiple` 为 `Array<string | number>`）**。
```tsx
<Select
  label="所属角色"
  options={[
    { label: '系统管理员', value: 'admin', description: '全量权限' },
    { label: '财务复核员', value: 'finance' },
    { label: '已停用角色', value: 'legacy', disabled: true },
  ]}
  value={selected}
  onChange={(val) => setSelected(val)}
  searchable   // 支持汉字拼音首字母匹配（如输入 xtgl 命中“系统管理员”）
  multiple     // 开启多选胶囊模式
  clearable    // 一键清空
/>

<DictSelect
  dictCode="order_status" // 亦兼容 dictKey 别名，自动调用 AbcProvider.dictAdapter
  prependOptions={[{ label: '全部状态', value: '' }]}
  value={status}
  onChange={setStatus}
/>
```

### 4. `Checkbox` / `RadioGroup` / `Switch`
```tsx
<Checkbox checked={checked} indeterminate={isHalf} onChange={(next: boolean) => setChecked(next)} label="全选" />
<RadioGroup variant="segmented" value={tab} onChange={setTab} options={[{ label: '按日', value: 'day' }, { label: '按月', value: 'month' }]} />
<Switch checked={enabled} loading={saving} size="default" onChange={(next: boolean) => setEnabled(next)} />
```

### 5. `DatePicker` / `DateRangePicker` / `ImageUpload` / `Tree` / `TagInput` / `SliderVerify`
- `DatePicker`：`value?: string` (`YYYY-MM-DD`)，`onChange?: (dateStr: string) => void`。
- `DateRangePicker`：`value?: [string, string] | { start?: string; end?: string }`，`onChange?: (range: [string, string]) => void`（内置今日/近7天/本月快捷按钮）。
- `ImageUpload`：`value?: string`，`onChange?: (url: string) => void`，自动复用 `AbcProvider.uploadAdapter` 或单组件传入 `customUpload`。
- `Tree`：`treeData: AbcTreeNode[]`，支持 `checkable`、`checkStrictly`、`searchable`（拼音检索 + 一键全展开/全收起）、`checkedKeys`、`onCheck={(keys, info) => ...}`。
- `TagInput`：`value?: string[]`，`onChange?: (tags: string[]) => void`，`maxTags?: number`。
- `SliderVerify`：`onSuccess: (payload: { nonceStr: string; value: number }) => void`，自动消费 `AbcProvider.captchaAdapter`。

---

## 三、表面容器与数据展示

- **`Card` / `CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter` / `SpotlightCard` / `BorderBeam` / `AuroraBackground` / `Divider` / `Space`**：
  `<Card as="article" title="标题" subtitle="副标题" extra={<Button>操作</Button>} size="md" variant="default" cover={...} statusRibbon={{ text: '推荐', tone: 'primary' }} loading={false} hoverable motion="smooth">`
  - 新增复合插槽子组件（`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`），支持更精细的模块化卡片排版。
  - 新增 `variant?: 'default' | 'bordered' | 'ghost' | 'elevated' | 'glass'`、`size?: AbcSize`（`xs | sm | md | lg`）、`loading`、`cover`、`statusRibbon` 与 `@container` 容器查询上下文。
- **`TablePrimitives` 复合基础表格骨架**：
  - 提供轻量、复合无业务绑定的表格原语：`Table`（内置水平滚动视口与无障碍 role）、`TableHeader`（支持 `sticky` 吸顶）、`TableBody`、`TableFooter`、`TableRow`、`TableHead`、`TableCell`、`TableCaption`。
- **`DescriptionList` / `DescriptionListItem` / `CopyableCode`**：
  - 基于语义化 `<dl>`/`<dt>`/`<dd>`，支持 `columns`（1~4 列）、`variant`（`'default' | 'cards' | 'divided' | 'compact'`）与一键内联复制组件 `CopyableCode`。
- **`IconBadge` & `RichIconText`**：
  - 图标与文字组合徽标（`<IconBadge icon={<Shield className="h-3 w-3" />} label="BGP 专线" variant="success" size="sm" />`）。
- **`AttentionList`**：
  - 重点待办与聚合运营告警清单，展示高危/中危风险信号及直达处理链接。
- **企业级卡片矩阵（`Cards` 模块）**：
  - `MetricCard`：`title`, `value`, `prefix`, `suffix`, `trend?: { value, direction?: 'up' | 'down' | 'flat', label? }`, `sparkline?: number[]`, `icon`, `footer`, `loading`, `hoverable`, `size`, `motion`
  - `CheckCardGroup` / `CheckCard`：`multiple`, `value`, `defaultValue`, `onChange`, `columns?: 1 | 2 | 3 | 4`, `disabled`, `size`, `motion`（`CheckCard`：`value`, `title`, `description`, `avatar`, `icon`, `extra`, `checked`, `disabled`）
  - `ActionCard`：`title`, `description`, `icon`, `tags`, `extra`, `href`, `target`, `disabled`, `onClick`, `size`, `motion`（主卡片点击热区与右上角 `extra` 操作互斥隔离）
  - `CollapsibleCard`：`title`, `subtitle`, `icon`, `extra`, `defaultOpen`, `open`, `onOpenChange`, `size`, `motion`
  - `PricingCard`：`tier`, `price`, `period`, `description`, `features: Array<{ text; included? } | string>`, `recommended`, `badge`, `ctaText`, `disabled`, `loading`, `onSelect`, `size`, `motion`
  - `BentoGrid` (`columns?: 2 | 3 | 4`, `gap?: AbcSize`) & `BentoCard` (`colSpan?: 1 | 2 | 3`, `rowSpan?: 1 | 2`, `eyebrow`, `title`, `description`, `icon`, `graphic`, `footer`, `hoverable`, `size`, `motion`)
- **`TableCore<T>`**：支持 `columns: AbcColumn<T>[]`（`fixed: 'left' | 'right'` 多列累加粘性偏移、`sortable`、`filterable`、`tooltip`、`valueType` 语义自动格式化、`options` 状态标签映射、`linkToView`、`copyable`）、表头右键快捷菜单（排序/左右固定/隐藏列/重置）、`expandable` 子面板展开与树形 `children` 缩进、列宽拖拽 `onColumnResize`（含右侧固定列与 `__abc_actions__` 操作列左边缘拖拽调宽 + `<colgroup>`/`tableLayout: 'fixed'` 宽度锁定、`resizable` 控制与 `ProColumnSettingsPopover` 数值输入调宽）、表头实时 `onDragOver` 列序嵌入高亮与 FLIP 滑移动画（支持 `Escape` 取消回滚，`onColumnReorder`）、多选 `selectedKeys` / `onSelectionChange`、三种密度 `density` 与 `motion?: AbcMotionPreset`。
- **`Descriptions`**：`<Descriptions title="详情" bordered column={2} items={[{ label: '订单号', children: 'ORD-1', span: 2 }]} />`
- **`Collapse`**：基于原生 `<details>` 的无障碍折叠面板，`<Collapse accordion items={[{ key: '1', label: '标题', children: '内容' }]} />`
- **`Timeline`**：`<Timeline items={[{ title: '节点标题', time: '10:00', description: '说明', tone: 'success' }]} />`
- **`Tabs`**：`<Tabs variant="line" activeKey={key} onChange={setKey} items={[{ key: 'a', label: '概览', badge: 5, children: <div /> }]} />`（亦支持 `variant="pills"`）。
- **`StatusTag` & `DictTag`**：支持 `tone` (`'neutral'|'primary'|'success'|'warning'|'danger'|'info'`)，以及兼容属性 `status` / `color` (`'purple'|'cyan'|'orange'|'teal'|'pink'`) 和 `dot` / `pulse`。
- **`ImagePreview`**：`<ImagePreview src={logoUrlOrSvgMarkup} width={40} height={40} zoomable />`，原生支持位图 URL 与 `<svg>...</svg>` 字符串的缩略图及全屏缩放/旋转灯箱。
- **`Tooltip` / `Popover` / `Dropdown`**：基于 `useFloatingPosition` 与 `getOverlayPortalContainer` 的视口感知顶层 Portal 浮层体系，自动逃逸 `overflow: hidden` 卡片裁剪并兼容原生 `<dialog>` `#top-layer` 模态栈，边缘自动翻转且支持完整键盘无障碍导航。
- **`EmptyState` / `Pagination` / `Skeleton` / `SkeletonCard` / `SkeletonTable` / `SkeletonChart`**：完整空状态、分页器（含每页条数与页码快跳）与骨架屏。

---

## 四、反馈、安全浮层与权限守卫

- **`Dialog`**：`<Dialog open={open} onClose={handleClose} title="快捷操作" size="md" footer={...}>`（支持标题栏拖拽移动与双击最大化，`size` 支持 `'sm'|'md'|'lg'|'xl'|'full'`，亦兼容 `isOpen` 与 `maxWidth`）。
  - **定位与使用场景**：专用于**小表单操作与轻量确认**（如修改名称、停用、快速输入操作原因等少字段场景），居中弹出且天然支持多级 Modal 遮罩堆叠。
- **`Drawer`**：`<Drawer open={open} onClose={handleClose} title="配额与能力配置" placement="right" size="lg" resizable push cascadeMode="adjacent">`（支持侧边拖拽调宽，以及多级抽屉自动左移层叠 `stack` 或并排平级展开 `adjacent`）。
  - **定位与使用场景**：专用于**大表单交互操作展示**（多指标、长录入、多分类卡片与复杂校验），全高贴合无视口裁切风险；**若大表单内部需要再打开另一个大表单，必须使用子级抽屉（二级抽屉 L1 -> L2）**，严禁使用 Modal。
- **`ConfirmDialog`**：
  - 结构化二次确认对话框，相比简易命令式 `abcConfirm`，支持嵌入自定义表单内容、破坏性警示样式、异步加载中与无障碍焦点锁定：
  ```tsx
  <ConfirmDialog
    open={confirmOpen}
    title="确认删除该网关节点？"
    description="删除后将立即剔除路由转发池并释放弹性 IP，此操作不可撤销。"
    variant="destructive"
    loading={deleting}
    onCancel={() => setConfirmOpen(false)}
    onConfirm={handleDelete}
  />
  ```
- **`OneTimeSecretDialog`**：
  - 一次性敏感密钥/凭证展示弹窗，专用于仅下发一次的 API Key、Token 或临时密码，提供强安全提醒与一键复制确认：
  ```tsx
  <OneTimeSecretDialog
    open={Boolean(newSecret)}
    title="已生成只读访问凭证"
    secret={newSecret}
    metadata={[{ label: '权限范围', value: 'read:billing, read:nodes' }]}
    onClose={() => setNewSecret(null)}
  />
  ```
- **`NotificationBanner`**：
  - 局部与全局通知横幅（支持 `'error' | 'warning' | 'success' | 'info'` 四种状态），支持标题、错误码、RequestId、操作按钮及可关闭态。
- **`abcConfirm`（别名 `confirm` / `useConfirm`）**：
  ```ts
  const ok = await abcConfirm({
    title: '确认删除？',
    message: '此操作不可撤销',
    tone: 'danger',
  })
  ```
- **`Alert` / `Progress` / `Result` / `Loading` / `Watermark` / `ErrorBoundary` / `TabErrorBoundary`**：
  - `<Result status="403" title="无权限" subTitle="说明" extra={<Button>返回</Button>} />`
  - `<TabErrorBoundary resetKey={location.pathname}>{children}</TabErrorBoundary>`
- **`ToastContainer`（别名 `AbcToastViewport`）**：
  - `<ToastContainer position="top-right" maxCount={5} pauseOnHover newestOnTop={false} closable />`
  - 支持 6 种视口定位（`top-right`、`top-left`、`top-center`、`bottom-right`、`bottom-left`、`bottom-center`）、鼠标悬停暂停倒计时（`pauseOnHover`）、`newestOnTop` 排序、Portal 挂载目标节点定制、多容器 `containerId` 隔离及单条富文本卡片（`title` + `description` + `action`）。
  - 命令式调用（亦导出 `toast` 简写）：`abcToast.success('保存成功')`、`abcToast.error('异常')`、`abcToast.warning('警告')`、`abcToast.info('提示')`、`abcToast.loading('加载中')`、`abcToast.dismiss(id)`、`abcToast.clear()`。
- **`PermissionGuard`（别名 `Permission`）**：
  ```tsx
  <Permission code="sys:user:delete" fallbackStrategy="disable">
    <Button variant="danger">删除账号</Button>
  </Permission>
  ```

## 全域规格 (`AbcSize`) 与统一动效体系 (`AbcMotionPreset`)

- **四档通用规格 `AbcSize = 'xs' | 'sm' | 'md' | 'lg'`**：
  - `AbcProvider` 支持全局 `defaultTheme={{ ..., componentSize: 'sm', motion: 'smooth' }}` 与运行时 `setComponentSize` / `setMotion`（均暴露在 `ThemeCustomizer` 主题配置器中）。
  - 全部基础输入与展示组件（`Button`、`Input`、`InputNumber`、`Textarea`、`Select`、`DatePicker`、`DateRangePicker`、`Checkbox`、`RadioGroup`、`Switch`、`TagInput`、`IconPicker`、`ImageUpload`、`StatusTag`、`Badge`、`Avatar`、`Tabs`、`Descriptions`、`Collapse`、`Timeline`、`Breadcrumb`、`Steps`、`EmptyState`、`Loading`、`AbcToastViewport`、`Dialog`、`Drawer`、`Card` 等）均可自动通过 `useAbcSize` / `useAbcMotion` 继承全局配置并允许局部 `size` / `motion` 覆盖。
  - 向后兼容注意：`Pagination` 保留 `size?: number | AbcSize` 与新增 `controlSize?: AbcSize`；`Switch` 兼容 `'small' | 'default'`；`Progress` 保留 `size?: number | AbcSize`。
- **四档动效预设 `AbcMotionPreset = 'none' | 'subtle' | 'smooth' | 'spring'`**：
  - 自动写入 `document.documentElement.dataset.abcMotion`，并向下游每个组件注入 `data-motion` 与 `@abc-design/tokens` 物理缓动变量（`--abc-ease-active` 过冲曲线仅用于位移/缩放，不用于 `opacity` 或颜色）。
  - `motion="none"` 或系统开启 `prefers-reduced-motion: reduce` 时，自动关闭动画位移并令 `Dialog` / `Drawer` / `Dropdown` / `Popover` / `Tooltip` 零延迟即时卸载。
