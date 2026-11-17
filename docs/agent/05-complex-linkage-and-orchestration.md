# 05. 复杂组件联动与状态编排契约 (`@abc-design/core` + `@abc-design/react`)

> **文档定位**：本文档面向 AI Coding Agent，用于指导多组件协同、表单依赖链、主从工作台、可编辑表格、规则筛选树、分步向导、配置 Diff 审阅及批量队列追踪的**标准化零胶水开发**。
>
> **核心铁律**：凡下述 7 类场景能用 `@abc-design/react` 与 `@abc-design/core` 组合完成的，**严禁手写原生 `onMouseMove` 分栏、手写异步竞态锁、手写数组 `index` 增删列表或手写规则递归树**。

---

## 第一章：7 大复杂组件联动场景选型决策表

| 场景类别 | 典型业务需求 | 推荐标准组件与内核组合 | 严禁 AI Agent 手写的重复代码/胶水逻辑 |
| :--- | :--- | :--- | :--- |
| **1. 三栏主从联动工作台** | 左侧组织树/状态分组 + 中栏主表/列表 + 右侧可拖拽挤压详情与 Diff | `ProSplitWorkbench` + `ResizableSplitPane` + `DataTable` / `ProTable` + `SplitDetailPanel` + `ConfigDiffViewer` | ❌ 手写 `mousedown`/`mousemove` 拖拽宽度与 `localStorage` 记忆；❌ 用悬浮 `Drawer` 遮挡主表；❌ 自建树节点计数角标 |
| **2. 动态表单字段联动与异步防竞态** | 上游字段变更清空下游并拉取新选项、防抖取消过期请求、动态规则行增删、环境变量批量粘贴 | `useProForm` + `ProFormProvider` + `ProFormDependency` + `ProFormList` + `KeyValueInput` + `parseKeyValueText` | ❌ 用多个 `useEffect` + `watch` 手写拉取逻辑导致死循环或后发先至脏数据；❌ 用 `map((item, idx) => ... key={idx})` 手写动态增删排序行 |
| **3. 可编辑表格行/整表校验与配额联动** | 单元格即时编辑或整行保存校验、自动统计行配额并与外侧 KPI 卡/进度条实时联动 | `EditableProTable` (`mode="row" \| "table"`) + `summaryRender` + `ProgressBar` + `StatCard` | ❌ 在 `DataTable` 内维护复杂的 `editingKey` + `draftRows` 状态机；❌ 手写行内 `<Input>` 失焦同步与跨列校验提示条 |
| **4. 多条件规则构建 × 视图 × 统一清除栏** | AND/OR/NOT 嵌套规则筛选、内建/自定义视图本地持久化与脏改检测、多源筛选胶囊汇总清除 | `FilterBuilder` (别名 `RuleBuilder`) + `SavedFilterViews` + `ActiveFilterBar` + `evaluateRuleGroup` / `formatRuleGroupSummary` | ❌ 手写递归 AND/OR 条件组 UI；❌ 手写 `localStorage` 视图读写及深对比 `isDirty`；❌ 图表/工具栏/表格各自散落一套“清空条件”按钮 |
| **5. 分步向导表单 × 跨步骤校验 × 提交审阅** | 多步骤表单状态保留、异步校验阻断、防双击提交锁、末步汇总前后差异对比 | `ProStepsForm` + `ConfigDiffViewer` + `computeObjectDiff` | ❌ 拆成多个组件局部 `useState` 导致点击“上一步”丢失草稿；❌ 手写 `submitting` 防重锁和步进错误提示条 |
| **6. 配置差异审阅与密钥自动脱敏** | 结构化对象字段对比 + 代码/YAML/JSON 逐行 LCS 对比 + 密钥自动打码 | `ConfigDiffViewer` + `computeObjectDiff` + `computeLineDiff` (`@abc-design/core`) | ❌ 扁平化 `Object.keys` 对比导致漏检嵌套变更；❌ 将 `apiKey` / `secret` / `token` 明文直接渲染到审阅 Diff 面板 |
| **7. 异步批量任务队列追踪与失败重试** | 批量下发任务进度条、排队/运行/成功/失败筛选、单条或批量失败项一键重试 | `BatchActionTracker` (`variant="inline" \| "floating"`) | ❌ 页面右下角手写固定浮窗、`queued/running/succeeded/failed` 状态计数器和批处理进度统计 |

---

## 第二章：`@abc-design/core` 联动算法内核完整签名

> 所有以下符号均从 `@abc-design/core` 导出，同时已通过 `@abc-design/react` 全量重导出（可直接 `import { evaluateRuleGroup, computeObjectDiff, parseKeyValueText } from '@abc-design/react'`）。

### 2.1 规则构建与求值引擎 (`queryBuilder.ts`)

```ts
export type AbcRuleFieldType = 'string' | 'number' | 'boolean' | 'enum' | 'date';

export type AbcRuleOperator =
  | 'eq' | 'neq'
  | 'contains' | 'not_contains' | 'starts_with' | 'ends_with'
  | 'gt' | 'gte' | 'lt' | 'lte' | 'between'
  | 'in' | 'not_in'
  | 'is_empty' | 'is_not_empty';

export interface AbcRuleOperatorOption {
  value: AbcRuleOperator;
  label: string;
  /** 操作数个数：0=无需值(is_empty)，1=单值，2=区间双值(between) */
  arity: 0 | 1 | 2;
}

export interface AbcRuleFieldSchema {
  name: string;
  label: string;
  type: AbcRuleFieldType;
  options?: Array<{ label: string; value: string | number }>;
  unit?: string;
  placeholder?: string;
}

export interface AbcRuleCondition {
  id: string;
  type: 'condition';
  field: string;
  operator: AbcRuleOperator;
  value?: any;
  valueTo?: any;
  disabled?: boolean;
}

export interface AbcRuleGroup {
  id: string;
  type: 'group';
  combinator: 'AND' | 'OR';
  not?: boolean;
  disabled?: boolean;
  children: Array<AbcRuleCondition | AbcRuleGroup>;
}

export function getOperatorsForFieldType(fieldType: AbcRuleFieldType): AbcRuleOperatorOption[];
export function getRuleOperatorMeta(operator: AbcRuleOperator): AbcRuleOperatorOption;
export function createDefaultCondition(fields: AbcRuleFieldSchema[], id?: string): AbcRuleCondition;
export function createDefaultRuleGroup(fields: AbcRuleFieldSchema[], id?: string): AbcRuleGroup;

/** 对单条记录执行嵌套规则组求值：支持点路径取值（如 'meta.region'）；disabled=true 节点视为放行 (true) */
export function evaluateRuleGroup(
  record: Record<string, any>,
  group: AbcRuleGroup,
  fields?: AbcRuleFieldSchema[]
): boolean;

/** 生成人类可读的中文规则摘要文本 */
export function formatRuleGroupSummary(
  group: AbcRuleGroup,
  fields: AbcRuleFieldSchema[]
): string;
```

### 2.2 结构化对象与源码行级 Diff 引擎 (`diff.ts`)

```ts
export type AbcDiffKind = 'added' | 'removed' | 'modified' | 'unchanged';

export interface AbcFieldDiffEntry {
  key: string;
  label: string;
  kind: AbcDiffKind;
  beforeValue: any;
  afterValue: any;
  beforeText: string;
  afterText: string;
  masked?: boolean;
}

export interface AbcLineDiffEntry {
  type: 'context' | 'add' | 'remove';
  content: string;
  oldLineNumber?: number;
  newLineNumber?: number;
}

export interface ComputeObjectDiffOptions {
  /** 字段键名 -> 中文展示标签映射 */
  labels?: Record<string, string>;
  /** 是否对敏感键名自动脱敏（默认 true） */
  maskSecrets?: boolean;
  /** 自定义敏感键正则（默认 /(password|passwd|secret|token|apikey|api_key|private_key|access_key)/i） */
  secretPattern?: RegExp;
  /** 是否包含未变更字段（默认 false） */
  includeUnchanged?: boolean;
}

/** 递归/语义化对象字段对比：自动掩码敏感凭据、格式化嵌套对象与数组 */
export function computeObjectDiff(
  before?: Record<string, any> | null,
  after?: Record<string, any> | null,
  options?: ComputeObjectDiffOptions
): AbcFieldDiffEntry[];

/** 基于 LCS 的文本逐行对比：当 oldLines * newLines > 250_000 时自动降级防卡死 */
export function computeLineDiff(beforeText: string, afterText: string): AbcLineDiffEntry[];
```

### 2.3 环境变量 / 请求头 / JSON 双向解析引擎 (`keyValue.ts`)

```ts
export interface AbcKeyValueEntry {
  id: string;
  key: string;
  value: string;
  enabled?: boolean;
  secret?: boolean;
  description?: string;
}

export type AbcKeyValueFormat = 'dotenv' | 'headers' | 'json';

/** 解析 .env（支持注释与 export 前缀）、HTTP Headers（Key: Value）或扁平 JSON 对象，format='auto' 自动识别 */
export function parseKeyValueText(
  raw: string,
  format?: 'auto' | AbcKeyValueFormat
): AbcKeyValueEntry[];

/** 序列化为目标文本格式，默认过滤未启用条目（onlyEnabled=true） */
export function serializeKeyValueEntries(
  entries: ReadonlyArray<AbcKeyValueEntry>,
  format: AbcKeyValueFormat,
  options?: { onlyEnabled?: boolean }
): string;

/** 返回去重后的重复非空 Key 列表（保留首次出现重复的顺序） */
export function findDuplicateKeys(entries: ReadonlyArray<AbcKeyValueEntry>): string[];
```

---

## 第三章：12 大高阶联动组件精准 API 与端到端 TSX 范例

> **AI Agent 防幻觉与避坑总则（本章必读）**：
> 1. 所有表单联动组件（`ProFormDependency`、`ProFormList`）若使用全局上下文注入，**必须包裹在 `<ProFormProvider form={form}>` 内**，或显式传入 `form={form}` prop；未提供时 `meta.form` 为 `null`。
> 2. `ProFormDependency` 的 `asyncLoader(depValues, signal)` **必须将 `signal` 透传给 `fetch` 等异步底层**，否则仅依赖内部序列号虽能丢弃旧结果，却无法真正取消底层网络请求。
> 3. `EditableProTable` 有 `'row'`（行草稿编辑，点击“保存”才触发 `validator` 与 `onSaveRow`）和 `'table'`（整表即时变更，`onChange` 随输入触发，若提供 `onSaveRow` 则展示脏改徽标与整表保存按钮）两种完全不同的提交语义，不可混用。
> 4. `ResizableSplitPane` 在折叠首栏时采用 `display: none` 保持子树挂载（不会卸载左侧表单或树搜索状态）；`ProSplitWorkbench` 点击“全部视图”节点时回调 `onSelectKey(null, undefined)`。

---

### 3.1 `ResizableSplitPane` — 可拖拽折叠双栏容器

- **Props 核心字段**：
  - `direction?: 'horizontal' | 'vertical'`（默认 `'horizontal'`）
  - `defaultSize?: number`（默认 `260`）、`size?: number`、`onSizeChange?: (size: number) => void`
  - `minSize?: number`（默认 `180`）、`maxSize?: number`（默认 `560`）
  - `collapsible?: boolean`（默认 `true`）、`collapsed?: boolean`、`defaultCollapsed?: boolean`、`onCollapsedChange?: (collapsed: boolean) => void`
  - `storageKey?: string`（以 `abc_resizable_split_size_${storageKey}` 持久化到 `localStorage`）
  - `firstPane: ReactNode`、`secondPane: ReactNode`
  - `collapseLabel?: string`、`expandLabel?: string`、`firstPaneClassName?: string`、`secondPaneClassName?: string`

```tsx
import { ResizableSplitPane } from '@abc-design/react'

export function LogSplitWorkbench() {
  return (
    <ResizableSplitPane
      direction="horizontal"
      defaultSize={280}
      minSize={200}
      maxSize={460}
      storageKey="node-log-split"
      firstPane={<div className="p-3 text-sm">左侧集群与节点目录</div>}
      secondPane={<div className="p-4 text-sm">右侧实时任务与日志主区</div>}
    />
  )
}
```

> **避坑提示**：`ResizableSplitPane` 折叠后通过 `hidden` / `display: none` 保留 `firstPane` 实例，内部滚动位置与搜索关键词不会丢失。

---

### 3.2 `ProSplitWorkbench` — 左树 × 中表 × 右侧可挤压详情三栏工作台

- **Props 核心字段**：
  - 左侧树：`treeData?: AbcTreeNode[]`、`counts?: Record<string, number>`、`allLabel?: string`（默认 `'全部视图'`）、`allCount?: number`
  - 选中态：`selectedKey?: string | number | null`、`defaultSelectedKey?: string | number | null`、`onSelectKey?: (key: string | number | null, node?: AbcTreeNode) => void`
  - 侧栏定制：`sidebarTitle?: ReactNode`、`sidebarExtra?: ReactNode`、`sidebarRender?: (ctx) => ReactNode`、`sidebarWidth?: number`（默认 `260`）、`minSidebarWidth?: number`（`200`）、`maxSidebarWidth?: number`（`440`）、`storageKey?: string`
  - 右侧详情：`detailPanel?: ReactNode`、`detailOpen?: boolean`、`detailWidth?: number | string`、`detailExpanded?: boolean`、`children: ReactNode`

```tsx
import React, { useMemo, useState } from 'react'
import {
  DataTable,
  ProSplitWorkbench,
  SplitDetailPanel,
  StatusBadge,
  type AbcTreeNode,
} from '@abc-design/react'

interface ClusterRow {
  id: string
  name: string
  env: 'prod' | 'staging'
  status: string
}

const TREE_DATA: AbcTreeNode[] = [
  { key: 'env:prod', title: '生产环境 (prod)' },
  { key: 'env:staging', title: '预发环境 (staging)' },
]

const ROWS: ClusterRow[] = [
  { id: 'CL-01', name: '核心支付网关', env: 'prod', status: 'running' },
  { id: 'CL-02', name: '灰度特征集群', env: 'staging', status: 'warning' },
]

export function ClusterWorkbenchDemo() {
  const [selectedKey, setSelectedKey] = useState<string | number | null>(null)
  const [activeRow, setActiveRow] = useState<ClusterRow | null>(null)

  const filtered = useMemo(() => {
    if (!selectedKey) return ROWS
    return ROWS.filter((r) => `env:${r.env}` === String(selectedKey))
  }, [selectedKey])

  return (
    <ProSplitWorkbench
      sidebarTitle="环境目录"
      treeData={TREE_DATA}
      counts={{ 'env:prod': 1, 'env:staging': 1 }}
      allCount={ROWS.length}
      selectedKey={selectedKey}
      onSelectKey={(key) => {
        setSelectedKey(key)
        setActiveRow(null) // 切换分组时同步收起或重置右侧详情
      }}
      storageKey="cluster-workbench-sidebar"
      detailOpen={Boolean(activeRow)}
      detailPanel={
        activeRow ? (
          <SplitDetailPanel
            title={activeRow.name}
            subtitle={activeRow.id}
            badge={<StatusBadge status={activeRow.status} />}
            onClose={() => setActiveRow(null)}
          >
            <div className="text-xs text-[var(--abc-fg-muted)]">
              所属环境：{activeRow.env}
            </div>
          </SplitDetailPanel>
        ) : null
      }
    >
      <DataTable
        rows={filtered}
        keyExtractor={(r) => r.id}
        selectedRowKey={activeRow?.id ?? null}
        onRowClick={(r) => setActiveRow(r)}
        columns={[
          { key: 'id', header: '集群 ID', mono: true },
          { key: 'name', header: '集群名称' },
          { key: 'status', header: '状态', render: (r) => <StatusBadge status={r.status} /> },
        ]}
      />
    </ProSplitWorkbench>
  )
}
```

> **避坑提示**：点击顶部 `allLabel`（默认“全部视图”）时，`onSelectKey` 的第一个参数固定返回 `null`；切勿假设 `key` 一定是字符串 `'all'`。

---

### 3.3 `useProForm` + `ProFormProvider` + `ProFormDependency` — 表单级联与异步防竞态

- **核心类型与 Props**：
  - `useProForm<T>({ defaultValues?, schema?, fields?, onValuesChange? }): ProFormInstance<T>`
  - `ProFormProvider`: `{ form: ProFormInstance<any>; children: ReactNode }`
  - `ProFormDependency<TData>`:
    - `form?: ProFormInstance<any>`（未传时自动读取 `useProFormContext()`）
    - `deps: string[]`（监听字段列表）
    - `resetFieldsOnChange?: string[]`（任一依赖变更时自动清空为 `undefined`）
    - `asyncLoader?: (depValues: Record<string, any>, signal: AbortSignal) => Promise<TData>`
    - `debounceMs?: number`（默认 `0`）
    - `children: (depValues, meta: { loading, data, error, reload, form }) => ReactNode`

```tsx
import React from 'react'
import {
  Alert,
  Button,
  ProFormDependency,
  ProFormProvider,
  Select,
  useProForm,
} from '@abc-design/react'

interface DeployForm {
  provider: 'aws' | 'aliyun'
  region?: string
}

export function CloudRegionCascadeForm() {
  const form = useProForm<DeployForm>({
    defaultValues: { provider: 'aws', region: 'us-east-1' },
  })
  const provider = form.watch('provider')
  const region = form.watch('region')

  return (
    <ProFormProvider form={form}>
      <form
        onSubmit={form.handleSubmit((vals) => console.log('提交部署参数:', vals))}
        className="space-y-4"
      >
        <Select
          label="云厂商"
          value={provider}
          onChange={(v) => form.setValue('provider', v as DeployForm['provider'])}
          options={[
            { label: 'AWS', value: 'aws' },
            { label: '阿里云', value: 'aliyun' },
          ]}
        />

        <ProFormDependency<Array<{ label: string; value: string }>>
          deps={['provider']}
          resetFieldsOnChange={['region']}
          debounceMs={150}
          asyncLoader={async (depValues, signal) => {
            // 必须将 signal 传递给异步请求；切勿忽略 signal 导致旧响应覆盖新选项
            await new Promise<void>((resolve, reject) => {
              const timer = setTimeout(resolve, 120)
              signal.addEventListener('abort', () => {
                clearTimeout(timer)
                reject(new DOMException('Aborted', 'AbortError'))
              })
            })
            return depValues.provider === 'aws'
              ? [{ label: '美东 (us-east-1)', value: 'us-east-1' }]
              : [{ label: '上海 (cn-shanghai)', value: 'cn-shanghai' }]
          }}
        >
          {(_deps, { loading, data, error, reload }) => (
            <div className="space-y-2">
              {error && (
                <Alert
                  tone="danger"
                  title="拉取可用区失败"
                  description={error.message}
                  action={
                    <Button type="button" size="xs" variant="outline" onClick={reload}>
                      重试
                    </Button>
                  }
                />
              )}
              <Select
                label={loading ? '目标地域 (加载中...)' : '目标地域'}
                disabled={loading}
                value={region ?? ''}
                onChange={(v) => form.setValue('region', String(v))}
                options={data ?? []}
              />
            </div>
          )}
        </ProFormDependency>

        <Button type="submit">提交</Button>
      </form>
    </ProFormProvider>
  )
}
```

> **避坑提示**：如果 `<ProFormDependency>` 没有被 `<ProFormProvider form={form}>` 包裹且未显式传入 `form={form}`，它将无法订阅字段变化（`meta.form === null`）。

---

### 3.4 `ProFormList` — 动态结构化增删、复制与上下排序列表

- **Props 核心字段**：
  - 绑定二选一：`name?: string` + `form?: ProFormInstance<any>`（或依赖上层 `ProFormProvider`），或独立受控/非受控 `value?: T[]` / `defaultValue?: T[]` / `onChange?: (next: T[]) => void`
  - 约束与外观：`label?: ReactNode`、`initialItem?: T | (() => T)`、`minItems?: number`（默认 `0`）、`maxItems?: number`、`variant?: 'inline' | 'card'`（默认 `'inline'`）
  - 行为开关：`copyable?: boolean`（默认 `true`）、`sortable?: boolean`（默认 `false`）、`addLabel?: ReactNode`（默认 `'添加一行'`）、`disabled?: boolean`
  - 校验与汇总：`rowValidator?: (item: T, index: number, allItems: T[]) => string | undefined`、`summaryRender?: (items: T[]) => ReactNode`
  - Render Prop 辅助参数 `helpers: { update, remove, duplicate, moveUp, moveDown, error?, canRemove, canAdd, canMoveUp, canMoveDown }`

```tsx
import React, { useState } from 'react'
import { FormField, Input, InputNumber, ProFormList, Select } from '@abc-design/react'

interface RouteRule {
  path: string
  method: 'GET' | 'POST'
  timeoutMs: number
}

export function RouteRulesList() {
  const [rules, setRules] = useState<RouteRule[]>([
    { path: '/api/v1/orders', method: 'GET', timeoutMs: 3000 },
  ])

  return (
    <ProFormList<RouteRule>
      label="网关转发规则"
      variant="card"
      sortable
      copyable
      minItems={1}
      maxItems={8}
      value={rules}
      onChange={setRules}
      initialItem={() => ({ path: '/api/v1/', method: 'GET', timeoutMs: 2000 })}
      rowValidator={(item) => (!item.path.startsWith('/') ? '路径必须以 / 开头' : undefined)}
      summaryRender={(items) => `共配置 ${items.length} 条规则`}
    >
      {(item, _index, { update }) => (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Input
            label="路径"
            value={item.path}
            onChange={(e) => update({ path: e.target.value })}
          />
          <Select
            label="方法"
            value={item.method}
            onChange={(v) => update({ method: v as 'GET' | 'POST' })}
            options={[
              { label: 'GET', value: 'GET' },
              { label: 'POST', value: 'POST' },
            ]}
          />
          <FormField label="超时 (ms)">
            <InputNumber
              min={100}
              value={item.timeoutMs}
              onChange={(v) => update({ timeoutMs: Number(v ?? 1000) })}
            />
          </FormField>
        </div>
      )}
    </ProFormList>
  )
}
```

> **避坑提示**：`ProFormList` 内部已为每条记录维护稳定隐藏 React Key，即使频繁上下移动（`moveUp`/`moveDown`）或中间删除，子输入框也不会错位或丢失焦点。

---

### 3.5 `KeyValueInput` — 环境变量 / 请求头 / JSON 双向编辑器

- **Props 核心字段**：
  - `value?: AbcKeyValueEntry[]`、`defaultValue?: AbcKeyValueEntry[]`、`onChange?: (next: AbcKeyValueEntry[]) => void`
  - `allowEnableToggle?: boolean`（默认 `true`）、`allowSecretMask?: boolean`（默认 `false`）
  - `allowBulkEdit?: boolean`（默认 `true`）、`defaultBulkFormat?: 'dotenv' | 'headers' | 'json'`（默认 `'dotenv'`）
  - `keyPlaceholder?: string`、`valuePlaceholder?: string`、`maxItems?: number`、`disabled?: boolean`、`size?: AbcSize`

```tsx
import React, { useState } from 'react'
import { KeyValueInput, type AbcKeyValueEntry } from '@abc-design/react'

export function EnvVarsEditor() {
  const [entries, setEntries] = useState<AbcKeyValueEntry[]>([
    { id: 'kv-1', key: 'NODE_ENV', value: 'production', enabled: true },
    { id: 'kv-2', key: 'API_SECRET', value: 'sk-live-9981', enabled: true, secret: true },
  ])

  return (
    <KeyValueInput
      value={entries}
      onChange={setEntries}
      allowSecretMask
      allowEnableToggle
      allowBulkEdit
      defaultBulkFormat="dotenv"
    />
  )
}
```

> **避坑提示**：开启 `allowBulkEdit` 并在弹窗切换 `json` 格式编辑回写时，组件要求输入为扁平 JSON 对象（如 `{"KEY":"VAL"}`），非对象或含非法语法会被校验拦截并保留原文本不覆写条目。

---

### 3.6 `EditableProTable<T>` — 行级草稿编辑 / 整表实时联动编辑

- **Props 核心字段**：
  - `value?: T[]`、`defaultValue?: T[]`、`onChange?: (rows: T[]) => void`
  - `columns: EditableProColumn<T>[]`（列 `valueType` 支持 `'text' | 'number' | 'select' | 'switch' | 'date'`；支持 `validator?: (value, row, rows) => string | undefined` 与 `editable?: boolean | ((row, index) => boolean)`）
  - `rowKey?: keyof T & string`（默认 `'id'`）
  - `mode?: 'row' | 'table'`（默认 `'row'`）
  - `recordCreatorProps?: false | { position?: 'top' | 'bottom'; record: () => T; label?: ReactNode; maxRows?: number }`
  - `deletable?: boolean`（默认 `true`）
  - `summaryRender?: (rows: T[]) => ReactNode`
  - `onSaveRow?: (row: T, index: number) => void | Promise<void>`

```tsx
import React, { useState } from 'react'
import { EditableProTable, ProgressBar, type EditableProColumn } from '@abc-design/react'

interface QuotaRow {
  id: string
  service: string
  enabled: boolean
  maxQps: number
}

export function ServiceQuotaEditableTable() {
  const [rows, setRows] = useState<QuotaRow[]>([
    { id: 'GW-1', service: 'checkout-api', enabled: true, maxQps: 4000 },
  ])
  const totalQps = rows.reduce((sum, r) => sum + (r.enabled ? r.maxQps : 0), 0)

  const columns: EditableProColumn<QuotaRow>[] = [
    { key: 'service', title: '服务名', valueType: 'text', validator: (v) => (!v ? '必填' : undefined) },
    { key: 'enabled', title: '启用', valueType: 'switch' },
    { key: 'maxQps', title: 'QPS 上限', valueType: 'number', min: 100, max: 20000 },
  ]

  return (
    <div className="space-y-3">
      <ProgressBar value={Math.min(100, Math.round((totalQps / 10000) * 100))} variant="auto" />
      <EditableProTable<QuotaRow>
        mode="table"
        value={rows}
        onChange={setRows}
        columns={columns}
        recordCreatorProps={{
          position: 'bottom',
          label: '新增限流服务',
          record: () => ({ id: `GW-${Date.now()}`, service: 'new-svc', enabled: true, maxQps: 1000 }),
        }}
        summaryRender={(list) => `已启用 ${list.filter((r) => r.enabled).length} 项 · 合计 ${totalQps} QPS`}
      />
    </div>
  )
}
```

> **避坑提示**：在 `mode="row"` 下，修改单元格先写入行草稿，必须点击操作列“保存”才会触发 `onChange` 和 `onSaveRow`；若需要滑块/输入框随改随算外侧汇总面板，请使用 `mode="table"`。

---

### 3.7 `FilterBuilder` (别名 `RuleBuilder`) — 递归 AND/OR/NOT 规则树

- **Props 核心字段**：
  - `fields: AbcRuleFieldSchema[]`（必填）
  - `value?: AbcRuleGroup`、`defaultValue?: AbcRuleGroup`、`onChange?: (next: AbcRuleGroup) => void`
  - `maxDepth?: number`（默认 `2`）、`showSummary?: boolean`（默认 `true`）、`disabled?: boolean`、`ariaLabel?: string`

```tsx
import React, { useMemo, useState } from 'react'
import {
  FilterBuilder,
  createDefaultRuleGroup,
  evaluateRuleGroup,
  type AbcRuleFieldSchema,
  type AbcRuleGroup,
} from '@abc-design/react'

const FIELDS: AbcRuleFieldSchema[] = [
  { name: 'region', label: '地域', type: 'enum', options: [{ label: '上海', value: 'cn-shanghai' }, { label: '北京', value: 'cn-beijing' }] },
  { name: 'latencyMs', label: '延迟', type: 'number', unit: 'ms' },
  { name: 'healthy', label: '健康', type: 'boolean' },
]

export function NodeRuleFilterDemo() {
  const [ruleGroup, setRuleGroup] = useState<AbcRuleGroup>(() => createDefaultRuleGroup(FIELDS))
  const nodes = [
    { id: 'n1', region: 'cn-shanghai', latencyMs: 42, healthy: true },
    { id: 'n2', region: 'cn-beijing', latencyMs: 280, healthy: false },
  ]
  const matched = useMemo(
    () => nodes.filter((row) => evaluateRuleGroup(row, ruleGroup, FIELDS)),
    [ruleGroup]
  )

  return (
    <div className="space-y-3">
      <FilterBuilder fields={FIELDS} value={ruleGroup} onChange={setRuleGroup} maxDepth={2} />
      <div className="text-xs text-[var(--abc-fg-muted)]">命中节点数：{matched.length}</div>
    </div>
  )
}
```

> **避坑提示**：新增动态规则时请用 `createDefaultRuleGroup(FIELDS)` 初始化根节点，切勿手拼缺少 `id` 或 `type: 'group'` 的残缺对象；且单条件/分组勾选停用 (`disabled: true`) 后，`evaluateRuleGroup` 会将其按放行 (`true`) 处理。

---

### 3.8 `SavedFilterViews<TFilter>` — 常见筛选视图与持久化管理栏

- **Props 核心字段**：
  - `views?: SavedFilterViewItem<TFilter>[]`、`defaultViews?: SavedFilterViewItem<TFilter>[]`、`onViewsChange?: (views) => void`
  - `activeViewId?: string`、`onSelectView?: (view: SavedFilterViewItem<TFilter>) => void`
  - `currentFilter: TFilter`（必填，用于自动深度比对是否产生未保存修改）
  - `isDirty?: boolean`（可选外部覆盖）、`storageKey?: string`（仅持久化非 `builtIn` 视图）
  - `onSaveAsView?: (name: string, filter: TFilter) => void`、`onUpdateView?: (viewId: string, filter: TFilter) => void`、`onDeleteView?: (viewId: string) => void`

```tsx
import React, { useState } from 'react'
import { SavedFilterViews, type SavedFilterViewItem } from '@abc-design/react'

interface OrderFilter {
  status: string
  onlyVip: boolean
}

const BUILTIN_VIEWS: SavedFilterViewItem<OrderFilter>[] = [
  { id: 'all', name: '全部订单', builtIn: true, filter: { status: 'all', onlyVip: false } },
  { id: 'vip-err', name: 'VIP 异常单', builtIn: true, filter: { status: 'failed', onlyVip: true } },
]

export function OrderSavedViewsBar() {
  const [activeId, setActiveId] = useState('all')
  const [filter, setFilter] = useState<OrderFilter>({ status: 'all', onlyVip: false })

  return (
    <SavedFilterViews<OrderFilter>
      defaultViews={BUILTIN_VIEWS}
      activeViewId={activeId}
      currentFilter={filter}
      storageKey="order-saved-views"
      onSelectView={(view) => {
        setActiveId(view.id)
        setFilter(view.filter)
      }}
    />
  )
}
```

> **避坑提示**：标记 `builtIn: true` 的系统视图不允许直接覆盖或删除，仅支持点击“另存为新视图”；自定义视图在配置 `storageKey` 后会自动写入 `localStorage`。

---

### 3.9 `ActiveFilterBar` — 多源联动筛选摘要胶囊栏

- **Props 核心字段**：
  - `chips: ReadonlyArray<ActiveFilterChip>`（`ActiveFilterChip`: `{ key, label, valueText, source?: 'chart' | 'toolbar' | 'table' | 'tree' | 'rule' | 'custom', onRemove? }`）
  - `totalCount?: number`、`filteredCount?: number`
  - `onRemove?: (key: string) => void`、`onClearAll?: () => void`、`clearAllLabel?: string`、`hideWhenEmpty?: boolean`（默认 `true`）、`extra?: ReactNode`

```tsx
import React, { useState } from 'react'
import { ActiveFilterBar, type ActiveFilterChip } from '@abc-design/react'

export function MultiSourceFilterBarDemo() {
  const [chartEnv, setChartEnv] = useState<string | null>('prod')
  const [keyword, setKeyword] = useState('gateway')

  const chips: ActiveFilterChip[] = [
    ...(chartEnv ? [{ key: 'env', label: '环境', valueText: chartEnv, source: 'chart' as const, onRemove: () => setChartEnv(null) }] : []),
    ...(keyword ? [{ key: 'kw', label: '关键词', valueText: keyword, source: 'toolbar' as const, onRemove: () => setKeyword('') }] : []),
  ]

  return (
    <ActiveFilterBar
      chips={chips}
      totalCount={120}
      filteredCount={18}
      onClearAll={() => {
        setChartEnv(null)
        setKeyword('')
      }}
    />
  )
}
```

> **避坑提示**：当 `hideWhenEmpty={true}`（默认值）且 `chips.length === 0` 时组件返回 `null` 不占空间；每个 `chip` 的 `onRemove` 会优先于外层 `onRemove(key)` 执行。

---

### 3.10 `ProStepsForm<T>` — 跨步骤草稿保留 × 异步校验 × 防重提交向导

- **Props 核心字段**：
  - `steps: ReadonlyArray<ProWizardStepConfig<T>>`（每步含 `{ key, title, description?, validate?: (values) => boolean | string | undefined | Promise<...>, render: ({ values, setValues, setValue, error }) => ReactNode }`）
  - `initialValues: T`、`values?: T`、`onValuesChange?: (next: T) => void`
  - `current?: number`、`onCurrentChange?: (stepIndex: number) => void`
  - `onFinish: (values: T) => void | Promise<void>`
  - `prevLabel?: string`、`nextLabel?: string`、`submitLabel?: string`、`stepsDirection?: 'horizontal' | 'vertical'`

```tsx
import React from 'react'
import { Input, ProStepsForm, type ProWizardStepConfig } from '@abc-design/react'

interface TenantDraft {
  name: string
  ownerEmail: string
}

export function TenantOnboardingWizard() {
  const steps: ProWizardStepConfig<TenantDraft>[] = [
    {
      key: 'base',
      title: '租户信息',
      validate: (v) => (!v.name.trim() ? '请输入租户名称' : true),
      render: ({ values, setValue }) => (
        <Input
          label="租户名称"
          value={values.name}
          onChange={(e) => setValue('name', e.target.value)}
        />
      ),
    },
    {
      key: 'owner',
      title: '管理员邮箱',
      validate: async (v) => (!v.ownerEmail.includes('@') ? '邮箱格式不正确' : true),
      render: ({ values, setValue }) => (
        <Input
          label="负责人邮箱"
          value={values.ownerEmail}
          onChange={(e) => setValue('ownerEmail', e.target.value)}
        />
      ),
    },
  ]

  return (
    <ProStepsForm<TenantDraft>
      initialValues={{ name: '', ownerEmail: '' }}
      steps={steps}
      onFinish={async (finalValues) => {
        console.log('向导最终提交:', finalValues)
      }}
    />
  )
}
```

> **避坑提示**：`validate` 返回 `false` 或非空字符串均会阻断翻页/提交并在当前步顶部自动展示 `Alert (tone="danger")`；若需同步更新多个字段请使用 `setValues({ a: 1, b: 2 })` 避免多次零散赋值。

---

### 3.11 `ConfigDiffViewer` — 对象字段差异与逐行 LCS 代码对比

- **Props 核心字段**：
  - `before?: Record<string, any> | null`、`after?: Record<string, any> | null`
  - `beforeCode?: string`、`afterCode?: string`
  - `labels?: Record<string, string>`
  - `mode?: 'fields' | 'code' | 'tabs'`、`codeLayout?: 'unified' | 'split'`（默认 `'unified'`）
  - `onlyChanges?: boolean`（默认 `true`）、`maskSecrets?: boolean`（默认 `true`）
  - `title?: ReactNode`、`emptyText?: ReactNode`

```tsx
import { ConfigDiffViewer } from '@abc-design/react'

export function ReleaseConfigReviewDiff() {
  const before = { replicas: 2, timeoutMs: 3000, apiKey: 'sk-old-111' }
  const after = { replicas: 6, timeoutMs: 5000, apiKey: 'sk-new-222' }

  return (
    <ConfigDiffViewer
      title="生产网关变更审阅"
      before={before}
      after={after}
      labels={{ replicas: '副本数', timeoutMs: '超时(ms)', apiKey: 'API 密钥' }}
      mode="tabs"
      maskSecrets
      onlyChanges
    />
  )
}
```

> **避坑提示**：`maskSecrets` 默认为 `true`，对字段名命中 `secret` / `token` / `password` / `apiKey` 的字段会自动遮罩打码（`••••••••`），即使用户切换到 `code` 视图也会使用脱敏后的 JSON 文本，切勿在业务安全审阅页随意传 `maskSecrets={false}`。

---

### 3.12 `BatchActionTracker` — 批量任务进度、状态筛选与失败重试追踪器

- **Props 核心字段**：
  - `title?: ReactNode`（默认 `'批量执行队列'`）
  - `items: ReadonlyArray<BatchTaskItem>`（`BatchTaskItem`: `{ id, title, subtitle?, status: 'queued' | 'running' | 'succeeded' | 'failed', error?, durationMs? }`）
  - `variant?: 'inline' | 'floating'`（默认 `'inline'`）
  - `open?: boolean`（默认 `true`）、`onClose?: () => void`
  - `onRetryFailed?: (failedIds: string[]) => void`、`onRetryItem?: (id: string) => void`、`onClearSucceeded?: () => void`

```tsx
import React, { useState } from 'react'
import { BatchActionTracker, type BatchTaskItem } from '@abc-design/react'

export function BatchUpgradeTracker() {
  const [items, setItems] = useState<BatchTaskItem[]>([
    { id: 't1', title: '升级节点 SH-01', status: 'succeeded', durationMs: 420 },
    { id: 't2', title: '升级节点 BJ-02', status: 'failed', error: 'HTTP 504 网关超时' },
    { id: 't3', title: '升级节点 SZ-03', status: 'running' },
  ])

  return (
    <BatchActionTracker
      title="灰度发布队列"
      variant="inline"
      items={items}
      onRetryItem={(id) =>
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, status: 'running', error: undefined } : it)))
      }
      onRetryFailed={(failedIds) =>
        setItems((prev) => prev.map((it) => (failedIds.includes(it.id) ? { ...it, status: 'queued', error: undefined } : it)))
      }
      onClearSucceeded={() => setItems((prev) => prev.filter((it) => it.status !== 'succeeded'))}
    />
  )
}
```

> **避坑提示**：状态筛选标签中的 `'active'` 分组会自动聚合 `'queued'` 和 `'running'` 两类任务；`variant="floating"` 会挂载右下角固定悬浮条，通常需配合 `open` 与 `onClose` 控制关闭收起。

---

## 第四章：Playground 联动示范页源码索引

在编写复杂联动页面前，推荐直接参考仓库内第 10 大领域「复杂联动」的 **6 套端到端联动演练实现**（对应路由 `/linkage/*`）：

- `/linkage/master-detail` — 主从三栏联动工作台（`ProSplitWorkbench` + `ResizableSplitPane` + `SplitDetailPanel` + `ConfigDiffViewer` + `ReasonedActionDrawer`）：
  `apps/playground/src/pages/linkage/MasterDetailWorkbenchPage.tsx`
- `/linkage/dynamic-form` — 动态表单编排与键值对（`useProForm` + `ProFormProvider` + `ProFormDependency` + `ProFormList` + `KeyValueInput`）：
  `apps/playground/src/pages/linkage/DynamicFormOrchestrationPage.tsx`
- `/linkage/editable-table` — 可编辑表格双模式与外侧配额实时联动（`EditableProTable` + `ProgressBar` + `StatCard`）：
  `apps/playground/src/pages/linkage/EditableTableLinkagePage.tsx`
- `/linkage/query-builder` — 嵌套规则构建器 × 视图收藏 × 客户端求值（`FilterBuilder` / `RuleBuilder` + `SavedFilterViews` + `evaluateRuleGroup` + `DataTable`）：
  `apps/playground/src/pages/linkage/QueryBuilderAndViewsPage.tsx`
- `/linkage/cross-filter` — 图表点击下钻 × 多源激活筛选栏 × 明细联动（`AbcChart` + `ActiveFilterBar` + `StatCard` + `DataTable`）：
  `apps/playground/src/pages/linkage/CrossFilterDashboardPage.tsx`
- `/linkage/wizard-batch` — 分步校验向导、配置 Diff 审阅与批量队列失败重试（`ProStepsForm` + `ConfigDiffViewer` + `TableCore` + `BatchActionTracker`）：
  `apps/playground/src/pages/linkage/WizardDiffAndBatchPage.tsx`
