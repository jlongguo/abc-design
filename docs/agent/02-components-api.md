# 02. 基础与中阶组件精准契约 (`@abc-design/react`)

> **AI Agent 防幻觉与避坑准则**：
> 1. **严禁猜参数**：下文每个 Props 与联合类型均逐字核对自 `packages/react/dist/index.d.ts` 及组件源码；未列出的参数切勿凭 Ant Design / MUI 习惯杜撰（例如 `Divider` 使用 `label` 而非 `children`，`Dialog.size` 不存在 `'full'`）。
> 2. **区分同名双包符号**：`@abc-design/react` 导出的 `StatCard` 标题字段为 `label`（含 `hint`/`tone`/`mono`），而 `@abc-design/charts` 导出的 `StatCard` 标题字段为 `title`（含 `prefix`/`suffix`/`loading`）；在联动/指标页面中若同时引入两个包，请显式区分或别名导入。
> 3. **类型与组件同名警告**：`DropdownMenuItem` 在 `@abc-design/react` 中**既作为复合菜单子组件导出，又作为 `Dropdown.items` 的 TS 接口导出**；若需要显式声明 `items` 数组类型，推荐写 `DropdownProps['items']` 或在 `import type` 中隔离避免与 JSX `<DropdownMenuItem>` 冲突。

---

## 1. 通用按钮、标签与图标

### `Button`
- `Button`:
  - `variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'warning' | 'ghost' | 'text' | 'default' | 'destructive' | 'link'`
  - `size?: 'xs' | 'sm' | 'md' | 'lg' | 'default' | 'icon' | 'icon-sm'`（纯图标按钮可直接传 `size="icon"` / `size="icon-sm"` 或 `iconOnly` + `aria-label`，不要寻找不存在的 `IconButton` 或 `ButtonGroup`）
  - `loading?: boolean`、`loadingText?: ReactNode`、`block?: boolean`、`disabled?: boolean`、`motion?: AbcMotionPreset`、`asChild?: boolean`、`pressScale?: boolean`（默认 `true`，表单输入内嵌按钮与微小图标按钮可设为 `false` 禁用按压缩放防点击漂移）
  - `leftIcon?: ReactNode`、`rightIcon?: ReactNode`、`icon?: ReactNode`（`leftIcon` 兼容别名）

### `Badge` / `StatusTag` / `Tag` / `StatusBadge`
- `Badge`: `count?: number`、`maxCount?: number`、`dot?: boolean`、`tone?: 'danger' | 'primary' | 'success'`、`variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'`、`size?: AbcSize`
- `StatusTag`: `tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'teal'`、`dot?: boolean`、`size?: AbcSize`、`icon?: ReactNode`、`closable?: boolean`、`onClose?: () => void`、`variant?: 'soft' | 'solid' | 'outline'`
- `Tag`: `StatusTag` 统一别名封装；`variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info' | string`、`dot?: boolean`
- `StatusBadge`: 基于文本状态码自动推断视觉色调与动画点：
  - `status: string`（必填）
  - `label?: ReactNode`、`variant?: StatusBadgeVariant`、`dot?: boolean`（默认 `true`）、`pulse?: boolean`、`humanize?: boolean`（默认 `true`）
  - 辅助函数：`resolveStatusBadgeVariant(status: string): StatusBadgeVariant`、`STATUS_VARIANTS`

### `CheckableTag` & `CheckableTagGroup`（可勾选胶囊标签）
- `CheckableTag`: `label?: ReactNode`、`checked?: boolean`、`defaultChecked?: boolean`、`onCheckedChange?: (checked: boolean) => void`、`disabled?: boolean`、`mono?: boolean`、`size?: 'sm' | 'md'`、`labelClassName?: string`
- `CheckableTagGroup<T extends string = string>`:
  - `options: ReadonlyArray<T | CheckableTagOption<T>>`（`{ value: T; label?: ReactNode; disabled?: boolean }`）
  - `value?: ReadonlyArray<T>`、`values?: ReadonlyArray<T>`（兼容别名）
  - `onValueChange?: (next: T[]) => void`、`onValuesChange?: (next: T[]) => void`
  - `mono?: boolean`、`size?: 'sm' | 'md'`

### `Icon` / `SemanticIcon` / `RichIconText` / `IconBadge` / `BrandIcon` (`TenantIcon`)
- `Icon`: `name: string`、`size?: number | string`、`strokeWidth?: number`、`fallback?: ReactNode`
- `SemanticIcon`: 矢量语义图标：`token?: string`、`icon?: ReactNode`、`size?: number`（默认 `14`）、`strokeWidth?: number`（默认 `1.9`）、`srText?: string`
- `RichIconText`: 解析文本中嵌入的 `[icon:xxx]` 令牌或组合前置矢量图标：`text?: string`、`token?: string`、`icon?: ReactNode`、`iconSize?: number`、`size?: AbcSize`、`iconClassName?: string`、`preserveSrToken?: boolean`（默认 `true`）
- `IconBadge`: `token?: string`、`icon?: ReactNode`、`label?: ReactNode`、`variant?: 'default' | 'success' | 'warning' | 'error' | 'info'`、`tone?: IconBadgeTone`、`size?: 'xs' | 'sm' | 'md' | 'lg'`、`iconSize?: number`、`srText?: string`
- `BrandIcon`（别名 `TenantIcon`）: 多品牌/多租户前缀图标（支持图片失败回退与 CSS Mask 主题着色）：
  - `code?: string`、`tenantCode?: string`、`presets?: Record<string, BrandIconPreset>`
  - `src?: string`、`maskSrc?: string`、`maskClassName?: string`、`alt?: string`、`fallbackIcon?: ReactNode`、`className?: string`（默认 `'w-4 h-4'`）

### `CopyButton` / `CopyableText` / `CopyableCode` / `CodeBlock` / `LocaleSwitcher`
- `CopyButton`: `value: string`（必填）、`title?: string`、`copyLabel?: string`（默认 `'复制'`）、`copiedLabel?: string`（默认 `'已复制'`）、`successDuration?: number`（默认 `1800`）、`iconOnly?: boolean`（默认 `true`）、`onCopySuccess?: () => void`、`onCopyError?: () => void`
- `CopyableText`: `text: string`、`displayText?: ReactNode`、`showIcon?: boolean`、`iconOnly?: boolean`、`mono?: boolean`、`successMessage?: string`
- `CopyableCode`: `value: string`、`displayValue?: ReactNode`、`hideCopyButton?: boolean`、`codeClassName?: string`
- `CodeBlock`: 深色终端/语义表面代码展示块：
  - `code: string`（必填）、`title?: ReactNode`、`language?: string`、`variant?: 'terminal' | 'surface'`（默认 `'terminal'`；`'surface'` 跟随 `--abc-*` 亮暗语义表面）
  - `copyable?: boolean`（默认 `true`）、`copyLabel?: string`（`'Copy'`）、`copiedLabel?: string`（`'Copied'`）、`copyAriaLabel?: string`、`onCopySuccess?: () => void`、`onCopyError?: () => void`
  - `headerAction?: ReactNode`、`preClassName?: string`、`maxHeightClassName?: string`、`maxHeight?: number | string`、`collapsible?: boolean`、`defaultCollapsed?: boolean`、`emptyText?: ReactNode`、`showLineNumbers?: boolean`（默认 `false`）、`wrapLongLines?: boolean`（默认 `false`）
- `LocaleSwitcher`: `locale: string`、`onToggle?: () => void`、`onSelectLocale?: (next: 'en' | 'zh') => void`、`mode?: 'toggle' | 'segmented'`（默认 `'toggle'`）、`dark?: boolean`、`label?: string`

---

## 2. 布局辅助与通用原子样式

### `Divider` / `Separator` / `Space` / `abcUiClasses`
- **`Divider`（避坑重点）**：
  - `orientation?: 'horizontal' | 'vertical'`（默认 `'horizontal'`）
  - `label?: ReactNode`
  - **严禁写 `<Divider>或</Divider>`** —— 组件源码不渲染 `children`，**必须使用 `<Divider label="或" />`**！
- `Separator`: 无障碍分割线：`orientation?: 'horizontal' | 'vertical'`（默认 `'horizontal'`）、`decorative?: boolean`（默认 `true`）
- `Space`: 弹性间距容器：`direction?: 'horizontal' | 'vertical'`（默认 `'horizontal'`）、`size?: AbcSize`、`wrap?: boolean`（默认 `false`）、`align?: 'start' | 'center' | 'end' | 'stretch'`
- `abcUiClasses`: 只读通用 Tailwind 类名预设字典，包含 16 个键：`input`、`textarea`、`button`、`secondary`、`dangerButton`、`textButton`、`panel`、`filterCard`、`tableCard`、`tableHead`、`tableHeaderCell`、`tableCell`、`pageHeader`、`pageTitle`、`pageSubTitle`、`label`。

---

## 3. 基础与中阶表单控件

> **基础输入类（全四档尺寸 `'xs' | 'sm' | 'md' | 'lg'` 与 `AbcMotionPreset`）**：
> - `Label`: `size?: AbcSize`、`required?: boolean`（与 `FormField` 标签字体、星号规范完全一致）
> - `FormField`: `label?`、`required?`、`error?`、`helperText?`、`hint?`、`tooltip?`、`size?`、`labelExtra?`、`extra?`、`layout?: 'vertical' | 'horizontal'`
> - `Input` / `SearchInput` / `Textarea` / `InputNumber`:
>   - `Input`: 支持 `prefix`/`prefixIcon`、`suffix`/`suffixIcon`、`allowClear`/`clearable`、`type="password"` 时默认开启 `passwordToggle` 明密文切换、`maxLength`/`showCount`
>   - `SearchInput`: 固定搜索图标与一键清空，支持 `onClear?: () => void`、`containerClassName?`、`wrapperClassName?`、`onKeyDown` 回车检索
>   - `InputNumber`: `value?: number | null`、`defaultValue?: number`、`onChange?: (val: number | null) => void`、`min`/`max`/`step`、`invalid?`、`autoWidth?: boolean`、`minWidth?: number | string`、`maxWidth?: number | string`（内置隐藏浏览器原生微调按钮；`autoWidth` 开启后在 `[minWidth, maxWidth]` 区间内按数字位数动态伸缩）
> - `Checkbox` / `RadioGroup` / `Switch`:
>   - `Checkbox`: `checked` / `defaultChecked` / `indeterminate` / `onChange(checked, e)` / `onCheckedChange(checked)` / `label` / `description`
>   - `RadioGroup`: `options: RadioGroupOption[]`、`variant?: 'default' | 'segmented'`
>   - `Switch`: `checked` / `onChange(checked)` / `onCheckedChange(checked)` / `loading` / `checkedLabel` / `uncheckedLabel` / `checkedChildren` / `unCheckedChildren`
> - 业务配额/辅助控件：`ByteQuotaInput` & `DurationQuotaInput`（配合 `formatQuotaBytes` / `formatQuotaDuration`）、`TagInput`、`IconPicker`、`SliderVerify`

### `TagInput`（多标签胶囊输入框）
- 核心 Props (`TagInputProps`):
  - 受控/非受控：`value?: string[]`、`defaultValue?: string[]`、`onChange?: (tags: string[]) => void`、`onValueChange?: (tags: string[]) => void`
  - 表单语义：`id?: string`、`name?: string`、`label?: ReactNode`、`error?: ReactNode`、`helperText?: ReactNode`、`invalid?: boolean`、`required?: boolean`、`placeholder?: string`、`mono?: boolean`、`size?: ControlSize`、`motion?: AbcMotionPreset`
  - 交互与只读：`disabled?: boolean`、`readOnly?: boolean`、`separators?: ReadonlyArray<string> | RegExp`（默认 `DEFAULT_TAG_SEPARATORS` 含 `,` `，` `;` `；` `\n` `\r` `\t`）、`addOnBlur?: boolean`（默认 `true`）、`splitOnPaste?: boolean`（默认 `true`）
  - 校验与上限：`allowDuplicates?: boolean`（默认 `false`）、`maxTags?: number`（默认不设硬上限，达上限时仍可 `Backspace` 删标签）、`maxTagLength?: number`、`showCount?: boolean`、`transformTag?: (raw: string) => string`、`validateTag?: (tag: string, currentTags: ReadonlyArray<string>) => boolean | string | null | undefined`、`onReject?: (rejected: RejectedTagItem[]) => void`
  - 清空与无障碍：`allowClear?: boolean`、`clearable?: boolean`、`onClear?: () => void`、`removeTagLabel?: (tag: string) => string`、`clearLabel?: string`、`onFocus`、`onBlur`、`aria-label`、`aria-labelledby`、`aria-describedby`、`aria-invalid`、`className?: string`、`wrapperClassName`、`chipClassName`、`inputClassName`
- 纯算法内核：`@abc-design/core` 导出 `DEFAULT_TAG_SEPARATORS`、`splitTagInputText`、`splitTagDraftOnInput`、`mergeTagTokens`（执行顺序：`transformTag` -> 非空 -> 去重 -> `maxTagLength` -> `validateTag` -> `maxTags`）。

### `Select` / `SelectField` / `RadixSelect`（单/多选家族）
- `Select`: `options?: ReadonlyArray<SelectOption>`、`value`/`defaultValue`、`onChange`/`onValueChange`、`multiple?`、`searchable?`、`allowClear`/`clearable?`、`invalid?`、`size?: ControlSize | 'ghost'`、`wrapperClassName`/`containerClassName`、`dropdownClassName`/`popoverClassName`、`matchWidth?`、`placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'`、`hideChevron?`、`container?`
- `SelectField`: 面向纯字符串单选的场景快捷封装：
  - `value?: string`、`defaultValue?: string`、`onValueChange?: (val: string) => void`、`onChange?: (val: any) => void`
  - `options: ReadonlyArray<{ value: string | number; label: ReactNode; disabled?: boolean; description?: string }>`
  - `label?: ReactNode`、`error?: string`、`helperText?: ReactNode`、`placeholder?: string`、`searchable?: boolean`、`allowClear?: boolean`、`clearable?: boolean`、`triggerClassName?: string`、`contentClassName?: string`、`size?: SelectSize`
- **`RadixSelect` 复合风格组件族**（兼容 Radix UI `<Select>` 书写结构，但根标签名为 **`RadixSelect`** 而非 `Select`）：
  - `RadixSelect`: `{ value?: string; defaultValue?: string; onValueChange?: (val: string) => void; disabled?: boolean; open?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void; children: ReactNode }`
  - `SelectTrigger`: `{ className?, ...buttonProps }`
  - `SelectValue`: `{ placeholder?: ReactNode }`
  - `SelectContent`: `{ position?: 'popper' | 'item-aligned' }`
  - `SelectGroup` / `SelectLabel` / `SelectSeparator`
  - `SelectItem`: `{ value: string; disabled?: boolean; children: ReactNode }`

### `TreeSelect` & `TreeSelectField`（树选择器）
- 静态策略常量：`TreeSelect.SHOW_ALL` (`'SHOW_ALL'`)、`TreeSelect.SHOW_PARENT` (`'SHOW_PARENT'`)、`TreeSelect.SHOW_CHILD` (`'SHOW_CHILD'`)
- 核心 Props (`TreeSelectProps`):
  - 数据源与构树：`treeData?: ReadonlyArray<Record<string, any>>`、`fieldNames?: AbcTreeFieldNames` (`{ label?, value?, children? }`)、`treeDataSimpleMode?: boolean | AbcTreeSimpleModeConfig` (`{ id?, pId?, rootPId? }`)
  - 懒加载与展开：`loadData?: (node: AbcTreeSelectNode) => Promise<void>`、`treeLoadedKeys?: Array<string | number>`、`treeDefaultExpandAll?: boolean`、`treeDefaultExpandedKeys?: Array<string | number>`、`treeExpandedKeys?: Array<string | number>`、`onTreeExpand?: (keys) => void`、`showToolbar?: boolean`
  - 选择模式与策略：`value`/`defaultValue`、`onChange?: (value, labelList, extra: TreeSelectChangeExtra) => void`、`onValueChange?: (value) => void`、`multiple?: boolean`、`treeCheckable?: boolean`、`treeCheckStrictly?: boolean`、`showCheckedStrategy?: AbcCheckedStrategy`、`selectableLeafOnly?: boolean`、`maxTagCount?: number | 'responsive'`
  - 搜索与虚拟滚动：`searchable?: boolean`（别名 `showSearch`）、`searchValue?: string`、`onSearch?: (kw: string) => void`、`treeNodeFilterProp?: 'title' | 'value' | 'both'`、`virtual?: boolean`（可见行 > 40 行自动启用）、`listHeight?: number`（默认 `280`）、`itemHeight?: number`（默认 `30`）
- `TreeSelectField`: 同 `SelectField` 命名风格：`triggerClassName?: string`、`contentClassName?: string` + 其余 `Omit<TreeSelectProps, 'className' | 'dropdownClassName'>`。

```tsx
import { TreeSelect } from '@abc-design/react'

<TreeSelect
  treeCheckable
  treeDataSimpleMode={{ id: 'id', pId: 'parentId', rootPId: null }}
  fieldNames={{ label: 'deptName', value: 'id' }}
  showCheckedStrategy={TreeSelect.SHOW_PARENT}
  selectableLeafOnly={false}
  searchable
  virtual
  listHeight={280}
  treeData={[
    { id: '1', parentId: null, deptName: '基础架构部' },
    { id: '1-1', parentId: '1', deptName: '云原生网关组' },
  ]}
  onValueChange={(vals) => console.log(vals)}
/>
```

### `Cascader`（级联选择器）
- 核心 Props (`CascaderProps`):
  - `options: CascaderOption[]`（`{ value, label, disabled?, children?, isLeaf? }`）
  - `value?: CascaderValue`（单选 `Array<string|number>`，多选 `Array<Array<string|number>>`）、`defaultValue?: CascaderValue`
  - `onChange?: (value: CascaderValue, selectedOptions?: CascaderOption[] | CascaderOption[][]) => void`
  - `multiple?: boolean`、`changeOnSelect?: boolean`（单选允许选中非叶子节点，默认 `false`）、`searchable?: boolean`（支持拼音首字母路径匹配）、`clearable?: boolean`
  - `expandTrigger?: 'click' | 'hover'`、`separator?: string`、`showFullPath?: boolean`、`maxTagCount?: number`、`loadData?: (selectedOptions: CascaderOption[]) => Promise<void>`、`matchWidth?: boolean`

### `Transfer`（双栏穿梭框）
- 核心 Props (`TransferProps`):
  - `dataSource: TransferItem[]`（`{ key, title, description?, disabled? }`）
  - `targetKeys?: string[]`、`defaultTargetKeys?: string[]`
  - `onChange?: (nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => void`
  - `selectedKeys?: string[]`、`onSelectChange?: (sourceKeys: string[], targetKeys: string[]) => void`
  - `titles?: [ReactNode, ReactNode]`、`searchable?: boolean`、`showSelectAll?: boolean`
  - `virtual?: boolean`（单栏超过 `40` 条自动启用虚拟滚动窗口）、`listHeight?: number`、`itemHeight?: number`、`oneWay?: boolean`（右侧仅保留快捷移除）

### `KeyValueInput`（键值对编辑器）
- 核心 Props (`KeyValueInputProps`):
  - `value?: AbcKeyValueEntry[]`、`defaultValue?: AbcKeyValueEntry[]`、`onChange?: (next: AbcKeyValueEntry[]) => void`
  - `allowEnableToggle?: boolean`（默认 `true`）、`allowSecretMask?: boolean`（默认 `false`）
  - `allowBulkEdit?: boolean`（默认 `true`）、`defaultBulkFormat?: 'dotenv' | 'headers' | 'json'`（默认 `'dotenv'`）、`smartPaste?: boolean`（默认 `true`，Key 输入框支持粘贴多行 `.env`/Headers/JSON 自动拆行）
  - `keyPlaceholder?: string`、`valuePlaceholder?: string`、`emptyText?: ReactNode`、`labels?: KeyValueInputLabels`、`maxItems?: number`、`disabled?: boolean`、`readOnly?: boolean`、`size?: AbcSize`
- 详细与 `@abc-design/core` 解析/序列化联动的示例参见 [05-complex-linkage-and-orchestration.md](./05-complex-linkage-and-orchestration.md#35-keyvalueinput--环境变量--请求头--json-双向编辑器)。

### `FileUpload` & `ImageUpload` & `ProMultiImageUpload` & `ProFormLayout`
- `FileUpload`:
  - `value?: FileUploadItem[]`（`{ uid, name, size, type?, url?, status?: 'uploading' | 'done' | 'error', percent?, error? }`）、`defaultValue?: FileUploadItem[]`、`onChange?: (files: FileUploadItem[]) => void`
  - `customUpload?: (file: File, onProgress?: (percent: number) => void) => Promise<string | { url: string }>`（缺省回退使用 `AbcProvider.uploadAdapter` 或本地预览 URL）
  - `accept?: string`、`multiple?: boolean`、`maxCount?: number`、`maxSizeMB?: number`、`dragTitle?: ReactNode`、`dragHint?: ReactNode`
- `ImageUpload`: `value?: string`、`onChange?: (url: string) => void`、`customUpload?`、`previewShape?: 'rounded' | 'circle'`
- `ProMultiImageUpload`（别名 `MultiImageFieldControl`）:
  - `value: string | string[]`（兼容数组或逗号分隔字符串）、`onChange: (val: string) => void`（输出逗号分隔 URL 字符串）、`maxCount?: number`（默认 `9`）、`disabled?: boolean`、`customUpload?: (file: File) => Promise<{ url: string } | string | undefined>`
- `ProFormLayout`: 分组表单排版容器：`mode?: 'split' | 'grid'`（`split` 为左侧标题导览 + 右侧卡片，`grid` 为多列卡片堆叠）、`sections: ProFormSection[]`（`{ key, title, description?, columns?: 1 | 2 | 3, children }`）

### 日期与时间选择器
- `DatePicker`：`picker?: 'date' | 'week' | 'month' | 'quarter' | 'year'`（默认 `'date'`）、`showTime?: boolean | DatePickerShowTimeConfig`（`picker='date'` 生效，支持 `format`/`showSecond`/`hourStep`/`minuteStep`/`secondStep`）、`value?: string`、`defaultValue?: string`、`onChange?: (dateStr: string) => void`、`format?`、`shortcuts?: boolean | DatePickerShortcut[]`、`minDate?`、`maxDate?`、`allowClear`/`clearable?`
- `DateRangePicker`：`picker?: 'date' | 'week' | 'month' | 'quarter' | 'year'`、`showTime?: boolean | DatePickerShowTimeConfig`、`value?: DateRangeInput`（`[string, string]` 或 `{ start?, end? }`）、`defaultValue?`、`onChange?: (range: any) => void`（按输入格式自动回传对象或元组）、`shortcuts?: boolean | DateRangeShortcut[]`、`minDate?`、`maxDate?`、`allowClear`/`clearable?`
- `TimePicker`：`value?: string`、`defaultValue?: string`、`onChange?: (timeStr: string) => void`、`format?: string`（默认 `'HH:mm:ss'`，支持 `'HH:mm'`）、`hourStep`/`minuteStep`/`secondStep`、`shortcuts?: boolean | TimePickerShortcut[]`、`allowClear`/`clearable?`
- `TimeRangePicker`：`value?: TimeRangeInput`（`[string, string]` 或 `{ start?, end? }`）、`defaultValue?`、`onChange?: (range: any) => void`（确认时自动排序起止时刻）、`format?`、`hourStep`/`minuteStep`/`secondStep`、`shortcuts?: boolean | TimeRangeShortcut[]`、`allowClear`/`clearable?`

---

## 4. 数据展示与卡片家族

### 卡片套件 (`Card`, `StatCard`, `MetricCard`, `CheckCard`, `ActionCard`, `CollapsibleCard`, `PricingCard`, `BentoGrid`/`BentoCard`, `SpotlightCard`)
- `Card` + `CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter`
- `StatCard`（`@abc-design/react` 版）: `label: ReactNode`（必填）、`value: ReactNode`（必填）、`icon?`、`hint?`、`badge?`、`trend?`、`mono?: boolean`、`tone?: 'default' | 'surface' | 'primary' | 'success' | 'warning' | 'danger'`、`size?: 'sm' | 'default' | 'lg'`、`valueClassName?`
- `MetricCard`: `title: ReactNode`、`value: ReactNode`、`prefix?`、`suffix?`、`trend?: { value: string | number; direction?: 'up' | 'down' | 'flat'; label?: string }`、`sparkline?: number[]`（纯 SVG 迷你折线，零 ECharts 依赖）、`icon?`、`footer?`、`loading?: boolean`、`hoverable?: boolean`
- `CheckCardGroup` & `CheckCard`: `CheckCardGroup` 支持 `multiple?`、`value`/`defaultValue`、`onChange`、`columns?: 1 | 2 | 3 | 4`；`CheckCard` 支持 `value?`、`title`、`description?`、`avatar?`、`icon?`、`extra?`、`checked?`、`disabled?`
- `ActionCard`: 整卡主动作可点击 (`href`/`onClick`) 且右上角 `extra` 独立隔离点击：`title`、`description?`、`icon?`、`tags?: string[]`、`extra?: ReactNode`、`href?`、`target?`、`onClick?`
- `CollapsibleCard`: `title`、`subtitle?`、`icon?`、`extra?`、`defaultOpen?: boolean`、`open?`、`onOpenChange?`、`bodyClassName?`、`children`
- `PricingCard`: `tier`、`price`、`period?`（默认 `'/ 月'`）、`description?`、`features: Array<{ text: ReactNode; included?: boolean } | string>`、`recommended?: boolean`、`badge?`、`ctaText?`、`loading?: boolean`、`onSelect?`
- `BentoGrid` & `BentoCard`: `BentoGrid` (`columns?: 2 | 3 | 4`, `gap?: AbcSize`)；`BentoCard` (`colSpan?: 1 | 2 | 3`, `rowSpan?: 1 | 2`, `eyebrow?`, `title`, `description?`, `icon?`, `graphic?`, `footer?`, `hoverable?`)
- `SpotlightCard`: `spotlightColor?`、`hoverable?: boolean`、`size?`、`motion?`

### 描述列表 (`Descriptions` vs `DescriptionList`)
- **`Descriptions`**（紧凑网格）：`items: Array<{ key?: string; label: ReactNode; children: ReactNode; span?: number }>`、`column?: 1 | 2 | 3 | 4`、`bordered?: boolean`
- **`DescriptionList` & `DescriptionItem` (`DescriptionListItem`)**：
  - `items?: Array<{ key?: string; label: ReactNode; value: ReactNode; mono?: boolean; copyValue?: string; emptyText?: ReactNode; span?: 1 | 2 | 3 | 4 | 'full' }>`
  - `columns?: 1 | 2 | 3 | 4`、`variant?: 'default' | 'cards' | 'divided' | 'compact'`、`density?: 'default' | 'compact'`、`bordered?: boolean`、`emptyText?: ReactNode`（默认 `'-'`）
  - **避坑重点**：`Descriptions` 的项用 `children` 传值；`DescriptionList` 的项用 `value` 传值！

### `JsonTreeViewer`（结构化 JSON 树形检视器）
- 核心 Props (`JsonTreeViewerProps`):
  - 数据源与解析：`data: unknown`（任意值或 JSON 字符串）、`parseString?: boolean`（默认 `true`，解析失败自动显示告警与原文兜底）、`rootLabel?: string`、`emptyText?: ReactNode`
  - 展开与搜索：`defaultExpandDepth?: number`（默认 `2`）、`expandedPaths?: string[]`、`defaultExpandedPaths?: string[]`、`onExpandedPathsChange?: (paths: string[]) => void`、`showToolbar?: boolean`（默认 `true`）、`toolbarExtra?: ReactNode`、`searchable?: boolean`（默认 `true`）、`searchQuery?: string`、`defaultSearchQuery?: string`、`onSearchQueryChange?: (q: string) => void`、`filterOnSearch?: boolean`（默认 `true`）
  - 复制与防护：`pathFormat?: 'jsonpath' | 'dot'`（默认 `'jsonpath'`）、`copyable?: boolean`（默认 `true`）、`onCopy?: (info: JsonTreeCopyInfo) => void`、`maxChildren?: number`（默认 `100`，支持点击“显示更多”分批展开）、`maxStringLength?: number`（默认 `240`）、`maxDepth?: number`（默认 `20`）、`maxHeight?: number | string`、`showItemCount?: boolean`（默认 `true`）、`bordered?: boolean`（默认 `true`）、`labels?: JsonTreeViewerLabels`（含 `expandNodeLabel` / `collapseNodeLabel` / `searchTruncatedLabel` 等完整 i18n 覆盖）、`size?: AbcSize`、`motion?: AbcMotionPreset`、`ariaLabel?: string`
- 无障碍与纯算法：`role="tree"` / `role="treeitem"` Roving Focus 键盘导航（`ArrowUp/Down/Left/Right/Home/End/Enter/Space`）；`@abc-design/core` 导出 `parseJsonTreeInput`、`getJsonValueType`、`formatJsonPath`、`formatJsonCopyValue`、`collectJsonExpandablePaths`、`searchJsonTree`（返回 `AbcJsonTreeSearchResult`，含 `truncated: boolean` 截断标记，默认 `maxVisitedNodes = 20000`）。

### 交互导航与复合菜单 (`Tabs`, `Dropdown`, `DropdownMenu`, `Pagination`)
- `Tabs`: 支持声明式 `items?: TabItem<K>[]`（`activeKey`/`value`、`defaultActiveKey`、`variant?: 'line' | 'pills' | 'segmented'`、`extra?`）或复合写法 (`TabsList` / `TabsTrigger` / `TabsContent`)。
- `Dropdown`（items 模式）：`items?: DropdownMenuItem[]`（`{ key, label, icon?, danger?, disabled?, divider?, dividerAbove?, onClick? }`）、`content?: ReactNode`、`align?: 'left' | 'right'`、`placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'`、`trigger?: 'click' | 'hover'`
- `DropdownMenu`（复合组件写法）：
  - `DropdownMenu` (`open`, `defaultOpen`, `onOpenChange`)
  - `DropdownMenuTrigger` (`asChild?: boolean`)
  - `DropdownMenuContent` (`align?: 'start' | 'end'`, `sideOffset?: number`)
  - `DropdownMenuGroup`、`DropdownMenuLabel` (`inset?: boolean`)、`DropdownMenuSeparator`、`DropdownMenuShortcut`
  - `DropdownMenuItem`（`inset?: boolean` + `<button>` 属性）
- **分页器家族 (`SmartPagination`, `OffsetPagination`, `CursorPagination`)**：
  - `PaginationProps`：`mode?: 'offset' | 'cursor'`（默认 `'offset'`）
  - 偏移分页字段：`current`/`currentPage`/`page`、`pageSize`/`limit`、`total`、`onChange(page, pageSize)`、`onPageChange`、`onSizeChange`/`onPageSizeChange`/`onLimitChange`、`pageSizeOptions`/`limitOptions`、`showTotal`/`summaryText`、`showQuickJumper`
  - 游标分页字段：`hasNext?: boolean`、`hasPrev?: boolean`、`nextCursor?: string | null`、`prevCursor?: string | null`、`currentCursor?: string | null`、`loadedCount?: number`、`onNext?: () => void`、`onPrev`/`onPrevious?: () => void`、`onResetCursor?: () => void`
  - **避坑重点**：若需设置分页器控件视觉大小而非每页条数，使用 `controlSize?: AbcSize`（因 `size` 兼容历史数字 `pageSize`）。

---

## 5. 反馈、错误态、确认与浮层

### 警告与诊断横幅 (`Alert`, `NotificationBanner`, `ReadErrorBanner`, `AsyncInlineError`, `ToastCard`, `LoadingStateCard`, `ProgressBar`)
- `Alert`: `tone?: 'info' | 'success' | 'warning' | 'danger'`、`title?`、`description?`、`showIcon?: boolean`、`closable?: boolean`、`onClose?`、`action?: ReactNode`
- `NotificationBanner`: `variant?: 'error' | 'warning' | 'success' | 'info'`、`title?`、`message?`、`description?`、`code?: string`、`status?: number`、`requestId?: string`、`actionHint?: ReactNode`、`action?: ReactNode`、`onDismiss?`、`dismissLabel?`、`hideIcon?: boolean`
- `ReadErrorBanner`: 专用数据读取失败横幅（带重试防重复状态）：`message?`、`code?`、`status?`、`requestId?`、`onRetry?: () => void`、`retryLabel?: string`（默认 `'重试读取'`）、`pendingLabel?: string`、`retryAriaLabel?: string`、`pending?: boolean`、`action?: ReactNode`
- `AsyncInlineError`: 自动从 `unknown` 异常提取消息，当 `error` 为空时返回 `null`：`error: unknown`、`fallbackTitle?: ReactNode`（默认 `'加载失败'`）、`fallbackMessage?: ReactNode`、`action?: ReactNode`、`retry?: () => void`、`retryLabel?: ReactNode`（默认 `'重试'`）、`isRetrying?: boolean`
- `ToastCard`: 结构化诊断 Toast 卡片：`id: string`、`variant: NotificationVariant`、`title?: ReactNode`、`message?: ReactNode`、`code?: string`、`status?: number`、`requestId?: string`、`actionHint?: ReactNode`、`durationMs: number | null`、`paused?: boolean`、`onDismiss: (id: string) => void`
- `LoadingStateCard`: `message: ReactNode`、`paused?: boolean`、`size?: 'sm' | 'md'`
- `ProgressBar`: 带自动阈值变色与 ARIA progressbar 语义的进度条：`value?: number | null`、`max?: number`（默认 `100`）、`size?: 'sm' | 'md' | 'lg'`、`variant?: 'default' | 'success' | 'warning' | 'danger' | 'auto'`、`dangerThreshold?: number`（默认 `90`）、`warningThreshold?: number`（默认 `100`）、`fillClassName?: string`
- 骨架与空状态：`Skeleton`、`SkeletonTable`、`SkeletonChart`、`EmptyState`（支持 `title` / `message` / `description` / `icon` / `action` / `onReset` / `resetText`）、`Result`、`ErrorBoundary`

### 确认对话框与命令式 API (`useConfirm`, `abcConfirm`, `ConfirmDialog`, `OneTimeSecretDialog`)
- `useConfirm()` Hook：返回与 `abcConfirm` 等价的命令式 Promise 确认函数：
  ```tsx
  const confirm = useConfirm()
  const ok = await confirm({
    title: '确认下线节点？',
    message: '下线后流量将自动漂移至同可用区其余实例',
    tone: 'danger',
  })
  ```
- `ConfirmDialog`：声明式受控确认框；`OneTimeSecretDialog`：一次性密钥（API Key / Token）弹窗。

### 弹窗与抽屉交互铁律 (`Dialog` vs `Drawer`)
1. **小表单 / 轻量确认用 `Dialog`**：支持多层叠加，默认居中。`Dialog.size` 类型 `DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'`；**注意没有 `'full'` 尺寸**，全屏最大化通过 `fullscreenable`（默认 `true`）与受控 `fullscreen` / `onFullscreenChange` 控制。
2. **大表单 / 复杂详情用 `Drawer`**：全高贴合右侧、带吸附 Header/Footer、支持边缘拖拽调宽 (`resizable`, `storageKey`)。二级抽屉优先设 `cascadeMode="adjacent"`（平级并排对比展开）。
3. **非阻塞列表联动详情优先用 `SplitDetailLayout` + `SplitDetailPanel`**：见 [03-layout-and-pro-suite.md](./03-layout-and-pro-suite.md)。
