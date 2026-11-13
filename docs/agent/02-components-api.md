# 02. `@abc-design/react` 45+ 组件精确 API 字典

> 所有组件均支持直接从 `@abc-design/react` 具名导入。

---

## 一、通用、图标与导航

### 1. `Button`
```tsx
<Button
  variant="primary" // 'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'warning' | 'ghost' | 'text'
  size="sm"         // 'xs' | 'sm' | 'md' | 'lg'
  loading={false}
  disabled={false}
  block={false}
  icon={<Plus className="h-3.5 w-3.5" />}
  onClick={handleClick}
>
  新建租户
</Button>
```

### 2. `Icon` & `IconPicker`
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

### 2. `Input` / `InputNumber` / `Textarea`
- `Input`：支持 `size` (`'xs'|'sm'|'md'|'lg'`)、`prefix` / `prefixIcon`、`suffix` / `suffixIcon`、`allowClear` / `clearable`（清空后自动回焦）、`passwordToggle`（`type="password"` 默认开启明密文眼睛按钮）、`showCount`、内联 `label` / `error` / `helperText`。
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

- **`Card` / `SpotlightCard` / `BorderBeam` / `AuroraBackground` / `Divider` / `Space`**：
  `<Card title="标题" subtitle="副标题" extra={<Button>操作</Button>} padding="md" hoverable>`
- **`TableCore<T>`**：支持 `columns: AbcColumn<T>[]`（`fixed: 'left' | 'right'` 多列累加粘性偏移、`sortable`、`filterable`、`tooltip`、`valueType` 语义自动格式化、`options` 状态标签映射、`linkToView`、`copyable`）、表头右键快捷菜单（排序/左右固定/隐藏列/重置）、`expandable` 子面板展开与树形 `children` 缩进、列宽拖拽 `onColumnResize`、列序拖拽 `onColumnReorder`、多选 `selectedKeys` / `onSelectionChange`、三种密度 `density`。
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

- **`Dialog`**：`<Dialog open={open} onClose={handleClose} title="编辑" size="md" footer={...}>`（支持标题栏拖拽移动与双击最大化，`size` 支持 `'sm'|'md'|'lg'|'xl'|'full'`，亦兼容 `isOpen` 与 `maxWidth`）。
- **`Drawer`**：`<Drawer open={open} onClose={handleClose} title="详情" placement="right" size="lg" resizable push>`（支持多层 `L1/L2` 抽屉自动左移层叠与侧边拖拽调宽）。
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
- **`PermissionGuard`（别名 `Permission`）**：
  ```tsx
  <Permission code="sys:user:delete" fallbackStrategy="disable">
    <Button variant="danger">删除账号</Button>
  </Permission>
  ```
