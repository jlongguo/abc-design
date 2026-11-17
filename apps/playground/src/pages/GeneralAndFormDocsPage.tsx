import React, { useState } from 'react'
import {
  ByteQuotaInput,
  Button,
  Card,
  Checkbox,
  DatePicker,
  DateRangePicker,
  DictSelect,
  DurationQuotaInput,
  Icon,
  IconPicker,
  ImageUpload,
  Input,
  InputNumber,
  PageContainer,
  Pagination,
  Progress,
  RadioGroup,
  SearchInput,
  SegmentedControl,
  Select,
  SelectField,
  SliderVerify,
  StatusTag,
  Switch,
  Tabs,
  TagInput,
  Textarea,
  ThemeSwitcher,
  Tree,
  TreeSelect,
  TreeSelectField,
  useAbcConfig,
  useColorScheme,
  type AbcCheckedStrategy,
  type AbcMotionPreset,
  type AbcSize,
  type AbcTreeNode,
  type AbcTreeSelectNode,
  type ButtonSize,
  type ButtonVariant,
} from '@abc-design/react'
import { ArrowRight, Download, RefreshCw, Search, Sparkles } from 'lucide-react'
import { ComponentDocPreview } from '../components/ComponentDocPreview'
import { FormAndTypographyExtrasDocs } from '../components/FormAndTypographyExtrasDocs'
import { EnterpriseFormWidgetsDocs } from '../components/EnterpriseFormWidgetsDocs'

const ORG_TREE: AbcTreeNode[] = [
  {
    key: 'sys',
    title: '系统与权限中心',
    children: [
      { key: 'sys:user', title: '管理员账号管理' },
      { key: 'sys:role', title: '角色与菜单授权' },
      { key: 'sys:dict', title: '全局数据字典' },
    ],
  },
  {
    key: 'order',
    title: '交易与结算管理',
    children: [
      { key: 'order:list', title: '订单履约中心' },
      { key: 'order:withdraw', title: '提现风控审批' },
    ],
  },
]

const FLAT_SIMPLE_ORG = [
  { deptId: 'hq', parentId: null, deptName: '集团总部', deptCode: 'HQ' },
  { deptId: 'cloud', parentId: 'hq', deptName: '云原生基础架构部', deptCode: 'CLOUD' },
  { deptId: 'edge', parentId: 'cloud', deptName: '边缘沙箱网关组', deptCode: 'EDGE' },
  { deptId: 'sec', parentId: 'hq', deptName: '安全与合规委员会', deptCode: 'SEC' },
]

const LARGE_VIRTUAL_TREE: AbcTreeNode[] = Array.from({ length: 3000 }, (_, i) => ({
  key: `vnode-${i + 1}`,
  title: `高规模节点 #${String(i + 1).padStart(4, '0')} (${i % 3 === 0 ? '华东集群' : i % 3 === 1 ? '华北集群' : '新加坡节点'})`,
}))

export const GeneralAndFormDocsPage: React.FC = () => {
  // Button Knobs
  const [btnVariant, setBtnVariant] = useState<ButtonVariant>('primary')
  const [btnSize, setBtnSize] = useState<ButtonSize>('sm')
  const [btnLoading, setBtnLoading] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [btnWithIcons, setBtnWithIcons] = useState(true)
  const [btnIconOnly, setBtnIconOnly] = useState(false)

  // SegmentedControl & Search & Quota
  const [segmentedChoice, setSegmentedChoice] = useState<'day' | 'week' | 'month'>('week')
  const [searchQuery, setSearchQuery] = useState('')
  const [byteQuota, setByteQuota] = useState(1024 * 1024 * 512) // 512 MB
  const [durationQuota, setDurationQuota] = useState(3600 * 24 * 7) // 7 days

  // IconPicker
  const [pickedIcon, setPickedIcon] = useState('shield')

  // Input Knobs
  const [inputVal, setInputVal] = useState('BytesFlows Enterprise')
  const [inputClearable, setInputClearable] = useState(true)
  const [inputShowCount, setInputShowCount] = useState(true)
  const [inputError, setInputError] = useState(false)
  const [numVal, setNumVal] = useState<number | null>(120)

  // Select & ThemeSwitcher Knobs
  const [selectMulti, setSelectMulti] = useState(true)
  const [selectSearchable, setSelectSearchable] = useState(true)
  const [singleRole, setSingleRole] = useState<string | number>('arch')
  const [multiRoles, setMultiRoles] = useState<Array<string | number>>(['arch', 'ops'])
  const [selectFieldVal, setSelectFieldVal] = useState<string>('staging')
  const [legacyProtocol, setLegacyProtocol] = useState<string>('socks5')
  const {
    preference: colorPreference,
    resolvedScheme,
    setPreference: setColorPreference,
  } = useColorScheme()

  // Tree
  const [checkedMenuKeys, setCheckedMenuKeys] = useState<Array<string | number>>([
    'sys:user',
    'sys:role',
  ])

  // TreeSelect 演练状态
  const [treeSelectSingle, setTreeSelectSingle] = useState<string | number>('sys:user')
  const [leafOnlyMode, setLeafOnlyMode] = useState(true)
  const [checkedStrategy, setCheckedStrategy] = useState<AbcCheckedStrategy>(TreeSelect.SHOW_PARENT)
  const [strictCheckMode, setStrictCheckMode] = useState(false)
  const [treeSelectMulti, setTreeSelectMulti] = useState<Array<string | number>>(['sys'])
  const [simpleOrgVal, setSimpleOrgVal] = useState<string | number>('EDGE')
  const [lazyTreeData, setLazyTreeData] = useState<AbcTreeNode[]>([
    { key: 'cn', title: '中国大区（点击展开异步加载节点）', isLeaf: false },
    { key: 'sg', title: '新加坡可用区（点击展开异步加载节点）', isLeaf: false },
    { key: 'global', title: '全局兜底节点（静态叶子）', isLeaf: true },
  ])
  const [lazyRegionVal, setLazyRegionVal] = useState<string | number>('')
  const [virtualVal, setVirtualVal] = useState<string | number>('vnode-1')

  const handleLoadLazyRegion = async (node: AbcTreeSelectNode) => {
    await new Promise((r) => setTimeout(r, 320))
    setLazyTreeData((prev) =>
      prev.map((item) =>
        item.key === node.key
          ? {
              ...item,
              children: [
                { key: `${node.key}-zone-a`, title: `${node.key.toString().toUpperCase()} 可用区 A`, isLeaf: true },
                { key: `${node.key}-zone-b`, title: `${node.key.toString().toUpperCase()} 可用区 B`, isLeaf: true },
              ],
            }
          : item
      )
    )
  }

  // Advanced Controls
  const [dateVal, setDateVal] = useState('2026-11-14')
  const [rangeVal, setRangeVal] = useState<[string, string]>(['2026-11-01', '2026-11-14'])
  const [tags, setTags] = useState(['多租户', 'RBAC', '零耦合'])
  const [uploadedLogo, setUploadedLogo] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')

  const { theme, setComponentSize, setMotion } = useAbcConfig()
  const [matrixSize, setMatrixSize] = useState<AbcSize>('sm')
  const [matrixMotion, setMatrixMotion] = useState<AbcMotionPreset>('smooth')
  const [matrixPage, setMatrixPage] = useState(1)
  const [matrixRadio, setMatrixRadio] = useState('sh')

  return (
    <PageContainer
      title="通用与表单控件交互式文档"
      subtitle="每个组件均支持实时调节 Props (Knobs)、查看动态生成的 TSX 代码并查阅完整类型签名"
    >
      <div className="space-y-5">
        {/* 0. 全域 xs/sm/md/lg 四档规格与动效统一对照矩阵 */}
        <Card
          title="通用四档规格 (xs / sm / md / lg) 与动效预设联动沙箱"
          subtitle="所有基础输入、选择、开关、标签、页签、分页与进度组件均原生响应本地 size/motion 或 AbcProvider 全局主题配置。"
          size="md"
          motion={matrixMotion}
          extra={
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="xs"
                variant="outline"
                onClick={() => {
                  setComponentSize(matrixSize)
                  setMotion(matrixMotion)
                }}
              >
                同步为全局默认
              </Button>
              <Button
                size="xs"
                variant="ghost"
                onClick={() => {
                  setComponentSize(undefined)
                  setMotion('smooth')
                }}
              >
                重置全局
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[var(--abc-fg-secondary)]">本地 Size:</span>
                <div className="inline-flex rounded-lg border border-[var(--abc-border)] bg-[var(--abc-surface-subtle)] p-0.5">
                  {(['xs', 'sm', 'md', 'lg'] as const).map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setMatrixSize(sz)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                        matrixSize === sz
                          ? 'bg-[var(--abc-bg-elevated)] text-[var(--abc-primary)] shadow-sm'
                          : 'text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium text-[var(--abc-fg-secondary)]">动效 Motion:</span>
                <div className="inline-flex rounded-lg border border-[var(--abc-border)] bg-[var(--abc-surface-subtle)] p-0.5">
                  {(['none', 'subtle', 'smooth', 'spring'] as const).map((mt) => (
                    <button
                      key={mt}
                      type="button"
                      onClick={() => setMatrixMotion(mt)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                        matrixMotion === mt
                          ? 'bg-[var(--abc-bg-elevated)] text-[var(--abc-primary)] shadow-sm'
                          : 'text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]'
                      }`}
                    >
                      {mt}
                    </button>
                  ))}
                </div>
              </div>

              <StatusTag tone="primary" size={matrixSize} motion={matrixMotion}>
                当前全局：componentSize={theme.componentSize ?? 'default'} · motion={theme.motion ?? 'smooth'}
              </StatusTag>
            </div>

            <div className="grid gap-3 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-surface-subtle)]/50 p-3.5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-wrap items-center gap-2">
                <Button size={matrixSize} motion={matrixMotion}>
                  主要操作
                </Button>
                <Input size={matrixSize} motion={matrixMotion} placeholder={`Input (${matrixSize})`} className="w-36" />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Select
                  size={matrixSize}
                  motion={matrixMotion}
                  defaultValue="prod"
                  options={[
                    { label: '生产环境', value: 'prod' },
                    { label: '预发环境', value: 'staging' },
                  ]}
                />
                <DatePicker size={matrixSize} motion={matrixMotion} />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Switch size={matrixSize} motion={matrixMotion} defaultChecked />
                <Checkbox size={matrixSize} motion={matrixMotion} label="启用灰度" defaultChecked />
                <RadioGroup
                  size={matrixSize}
                  motion={matrixMotion}
                  value={matrixRadio}
                  onChange={(val) => setMatrixRadio(String(val))}
                  options={[
                    { label: '上海', value: 'sh' },
                    { label: '北京', value: 'bj' },
                  ]}
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Tabs
                  size={matrixSize}
                  motion={matrixMotion}
                  items={[
                    { key: 'a', label: '概览' },
                    { key: 'b', label: '规格参数' },
                  ]}
                />
              </div>

              <div className="flex items-center">
                <Pagination
                  controlSize={matrixSize}
                  motion={matrixMotion}
                  page={matrixPage}
                  total={80}
                  pageSize={10}
                  onChange={setMatrixPage}
                />
              </div>

              <div className="flex items-center">
                <Progress percent={76} size={matrixSize} motion={matrixMotion} className="w-full" />
              </div>
            </div>
          </div>
        </Card>

        {/* 1. Button */}
        <ComponentDocPreview
          title="Button 按钮"
          description="语义化 Token 驱动的通用触发按钮，全面支持 9 种视觉变体、4 档紧凑规格、前置/后置图标、加载中状态文案与纯图标形态。"
          controls={
            <>
              <div className="flex flex-wrap items-center gap-2">
                <RadioGroup
                  variant="segmented"
                  value={btnVariant}
                  onChange={(v) => setBtnVariant(v as ButtonVariant)}
                  options={[
                    { label: 'primary', value: 'primary' },
                    { label: 'secondary', value: 'secondary' },
                    { label: 'outline', value: 'outline' },
                    { label: 'danger', value: 'danger' },
                    { label: 'warning', value: 'warning' },
                    { label: 'success', value: 'success' },
                    { label: 'ghost', value: 'ghost' },
                    { label: 'text', value: 'text' },
                    { label: 'link', value: 'link' },
                  ]}
                />
                <RadioGroup
                  variant="segmented"
                  value={btnSize}
                  onChange={(v) => setBtnSize(v as ButtonSize)}
                  options={[
                    { label: 'xs', value: 'xs' },
                    { label: 'sm', value: 'sm' },
                    { label: 'md', value: 'md' },
                    { label: 'lg', value: 'lg' },
                  ]}
                />
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Checkbox label="loading (加载中)" checked={btnLoading} onChange={setBtnLoading} />
                <Checkbox label="disabled (禁用)" checked={btnDisabled} onChange={setBtnDisabled} />
                <Checkbox label="双侧图标" checked={btnWithIcons} onChange={setBtnWithIcons} />
                <Checkbox label="iconOnly (纯图标)" checked={btnIconOnly} onChange={setBtnIconOnly} />
              </div>
            </>
          }
          code={`import { Button } from '@abc-design/react'
import { Download, ArrowRight, RefreshCw } from 'lucide-react'

<Button
  variant="${btnVariant}"
  size="${btnSize}"${btnLoading ? '\n  loading\n  loadingText="导出处理中…"' : ''}${btnDisabled ? '\n  disabled' : ''}${btnIconOnly ? '\n  iconOnly\n  aria-label="下载报表"' : ''}${btnWithIcons && !btnIconOnly ? '\n  leftIcon={<Download className="h-3.5 w-3.5" />}\n  rightIcon={<ArrowRight className="h-3.5 w-3.5" />}' : ''}
>
  ${btnIconOnly ? '<Download className="h-3.5 w-3.5" />' : '导出财务对账报表'}
</Button>`}
          apiRows={[
            { prop: 'variant', type: "'primary' | 'secondary' | 'outline' | 'danger' | 'warning' | 'success' | 'ghost' | 'text' | 'link'", defaultValue: "'secondary'", description: '按钮语义色调变体' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '对齐 --abc-control-h-* 的四档高度规格' },
            { prop: 'loading', type: 'boolean', defaultValue: 'false', description: '加载态自动渲染旋转指示器并禁用重复点击' },
            { prop: 'loadingText', type: 'ReactNode', description: '加载中的替代文案（如“提交中…”）' },
            { prop: 'leftIcon / rightIcon', type: 'ReactNode', description: '前置或后置图标插槽' },
            { prop: 'iconOnly', type: 'boolean', defaultValue: 'false', description: '正方形纯图标按钮，必须配合 aria-label' },
            { prop: 'block', type: 'boolean', defaultValue: 'false', description: '是否撑满父容器 100% 宽度' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant={btnVariant}
              size={btnSize}
              iconOnly={btnIconOnly}
              loading={btnLoading}
              loadingText="处理中…"
              disabled={btnDisabled}
              leftIcon={btnWithIcons && !btnIconOnly ? <Download className="h-3.5 w-3.5" /> : undefined}
              rightIcon={btnWithIcons && !btnIconOnly ? <ArrowRight className="h-3.5 w-3.5" /> : undefined}
              aria-label={btnIconOnly ? '下载' : undefined}
            >
              {btnIconOnly ? <Download className="h-3.5 w-3.5" /> : '导出财务对账报表'}
            </Button>
            <Button variant="outline" size={btnSize} leftIcon={<RefreshCw className="h-3.5 w-3.5" />}>
              辅助轮询
            </Button>
            <Button variant="ghost" size={btnSize}>
              取消返回
            </Button>
            <Button variant="link" size={btnSize}>
              查看结算规则文档 →
            </Button>
          </div>
        </ComponentDocPreview>

        {/* 1.1 SegmentedControl / SearchInput / QuotaUnitInput */}
        <ComponentDocPreview
          title="SegmentedControl / SearchInput / QuotaUnitInput 敏捷输入组合"
          description="中后台高频表单与筛选套件：分段选择器（支持角标与平滑滑块）、统一定制搜索框（一键清空与回车监听）以及企业级容量/时长配额联动输入框（内置单位自适应换算）。"
          controls={
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="text-[var(--abc-fg-secondary)]">分段当前选值:</span>
              <span className="font-mono font-semibold text-[var(--abc-primary)]">{segmentedChoice}</span>
              <span className="ml-3 text-[var(--abc-fg-secondary)]">当前搜索词:</span>
              <span className="font-mono font-semibold text-[var(--abc-primary)]">{searchQuery || '(空)'}</span>
            </div>
          }
          code={`import { SegmentedControl, SearchInput, ByteQuotaInput, DurationQuotaInput } from '@abc-design/react'

// 1. 分段选择器
<SegmentedControl
  value={choice}
  onChange={setChoice}
  size="sm"
  options={[
    { value: 'day', label: '按日统计' },
    { value: 'week', label: '按周归档', badge: '本周' },
    { value: 'month', label: '月度汇总' },
  ]}
/>

// 2. 定制搜索框
<SearchInput
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onClear={() => setQuery('')}
  placeholder="输入服务名称、IP 或拼音首字母..."
/>

// 3. 存储容量配额联动输入
<ByteQuotaInput
  value={bytes}
  onChange={setBytes}
  allowedUnits={['MB', 'GB', 'TB']}
  ariaLabel="集群磁盘配额"
/>`}
          apiRows={[
            { prop: 'SegmentedControl.options', type: "Array<{ value, label, icon?, badge?, disabled? }>", description: '分段选项数组，支持角标与图标' },
            { prop: 'SearchInput.onClear', type: "() => void", description: '传入清空回调时自动提供右侧一键清空按钮与回焦机制' },
            { prop: 'ByteQuotaInput.value / onChange', type: "number, (val: number) => void", description: '底层以 byte 为原子单位双向绑定，界面智能折算为 MB/GB/TB' },
            { prop: 'DurationQuotaInput.value / onChange', type: "number, (val: number) => void", description: '底层以秒(s)为原子单位，界面智能折算为分钟/小时/天' },
          ]}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">
                分段选择器 (SegmentedControl)
              </div>
              <SegmentedControl
                value={segmentedChoice}
                onChange={setSegmentedChoice}
                size="sm"
                block
                options={[
                  { value: 'day', label: '按日统计', icon: <Sparkles className="h-3.5 w-3.5" /> },
                  { value: 'week', label: '按周归档', badge: 12 },
                  { value: 'month', label: '月度汇总' },
                ]}
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">
                统一定制搜索框 (SearchInput)
              </div>
              <SearchInput
                placeholder="搜索服务节点、网关或拼音..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClear={() => setSearchQuery('')}
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">
                存储容量配额 (ByteQuotaInput)
              </div>
              <ByteQuotaInput
                value={byteQuota}
                onChange={setByteQuota}
                allowedUnits={['MB', 'GB', 'TB']}
                aria-label="存储配额"
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">
                任务超时时长 (DurationQuotaInput)
              </div>
              <DurationQuotaInput
                value={durationQuota}
                onChange={setDurationQuota}
                allowedUnits={['m', 'h', 'd']}
                aria-label="超时时间"
              />
            </div>
          </div>
        </ComponentDocPreview>

        {/* 2. Icon & IconPicker */}
        <ComponentDocPreview
          title="Icon & IconPicker 语义图标与选择器"
          description="按需具名导入 120+ 高频中后台 Lucide 图标（零全量打包开销），原生兼容 Element UI 遗留类名与中文菜单名智能推断。"
          code={`import { useState } from 'react'
import { Icon, IconPicker } from '@abc-design/react'

export function IconDemo() {
  const [iconName, setIconName] = useState('${pickedIcon}')
  return (
    <div className="max-w-xs space-y-2">
      <Icon name={iconName} size={20} />
      <IconPicker value={iconName} onChange={setIconName} />
    </div>
  )
}`}
          apiRows={[
            { prop: 'name', type: 'string', description: '图标名称（支持如 "shield"、"el-icon-s-tools" 或空值回退）' },
            { prop: 'text', type: 'string', description: '未指定 name 时根据中文菜单标题智能匹配对应语义图标' },
            { prop: 'value / onChange', type: 'string / (icon: string) => void', description: 'IconPicker 受控图标值与选择回调' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-72">
              <IconPicker value={pickedIcon} onChange={setPickedIcon} />
            </div>
            <div className="flex items-center gap-3 text-xs text-[var(--abc-fg-secondary)]">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--abc-border)] px-2.5 py-1.5">
                <Icon name="el-icon-s-custom" size={16} /> 兼容 el-icon-s-custom
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--abc-border)] px-2.5 py-1.5">
                <Icon text="财务提现审计" size={16} /> 智能语义推断“财务”
              </span>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 3. Input / InputNumber / Textarea */}
        <ComponentDocPreview
          title="Input / InputNumber / Textarea 文本与数值输入"
          description="支持前后置图标、一键清空自动回焦、密码明密文切换、实时字数统计与等宽步进数值输入。"
          controls={
            <>
              <Checkbox label="clearable" checked={inputClearable} onChange={setInputClearable} />
              <Checkbox label="showCount" checked={inputShowCount} onChange={setInputShowCount} />
              <Checkbox label="模拟错误态 (error)" checked={inputError} onChange={setInputError} />
            </>
          }
          code={`import { Input, InputNumber, Textarea } from '@abc-design/react'

<Input
  label="租户系统名称"
  value="${inputVal}"
  clearable={${inputClearable}}
  showCount={${inputShowCount}}
  maxLength={40}${inputError ? '\n  error="租户名称已被占用"' : ''}
/>`}
          apiRows={[
            { prop: 'label / error / helperText', type: 'ReactNode / string / ReactNode', description: '内联表单标签、错误高亮文案与底部辅助说明' },
            { prop: 'clearable / allowClear', type: 'boolean', defaultValue: 'false', description: '一键清空按钮，点击后自动将焦点归还输入框' },
            { prop: 'passwordToggle', type: 'boolean', defaultValue: 'true', description: 'type="password" 时自动渲染眼睛明密文切换器' },
            { prop: 'showCount', type: 'boolean', defaultValue: 'false', description: '底部显示当前字数或 count/maxLength' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              label="租户系统名称"
              prefixIcon={<Search className="h-3.5 w-3.5" />}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              clearable={inputClearable}
              showCount={inputShowCount}
              maxLength={40}
              error={inputError ? '租户名称已被占用，请更换' : undefined}
              helperText="支持中英文与企业简称"
            />
            <div>
              <div className="mb-1.5 text-xs font-medium text-[var(--abc-fg-secondary)]">
                会话超时分钟数 (InputNumber)
              </div>
              <InputNumber value={numVal} min={5} max={1440} step={15} onChange={setNumVal} />
              <div className="mt-3">
                <Input label="安全口令" type="password" defaultValue="AbcDesign@2026" />
              </div>
            </div>
            <Textarea
              label="灰度维护公告 (Textarea)"
              defaultValue="系统将于周日凌晨 02:00 执行无感滚动升级。"
              showCount={inputShowCount}
              maxLength={120}
            />
          </div>
        </ComponentDocPreview>

        {/* 4. Select & DictSelect & SelectField */}
        <ComponentDocPreview
          title="Select / DictSelect / SelectField 双模选择器"
          description="完整融合声明式 options 模式（内置拼音首字母检索、多选胶囊标签、禁用项跳过、原生 Top-Layer 穿透）与原生 <option>/<optgroup> 子节点兼容模式（派生 ChangeEvent 与 SelectField 字符串快捷封装）。"
          controls={
            <>
              <Checkbox label="multiple (多选胶囊)" checked={selectMulti} onChange={setSelectMulti} />
              <Checkbox label="searchable (拼音检索)" checked={selectSearchable} onChange={setSelectSearchable} />
            </>
          }
          code={`import { Select, SelectField, DictSelect } from '@abc-design/react'

{/* 1. 声明式 options（onChange 直接返回值/数组） */}
<Select
  label="分配职能角色"
  multiple={${selectMulti}}
  searchable={${selectSearchable}}
  clearable
  options={[{ label: '平台架构师', value: 'arch' }]}
/>

{/* 2. SelectField 字符串快捷封装 */}
<SelectField
  label="部署环境"
  value={env}
  onValueChange={setEnv}
  options={[{ label: '预发环境 (Staging)', value: 'staging' }]}
/>

{/* 3. 原生 <option>/<optgroup> 迁移兼容模式 */}
<Select value={protocol} onChange={(e) => setProtocol(e.target.value)}>
  <optgroup label="常规加密">
    <option value="socks5">SOCKS5</option>
  </optgroup>
</Select>`}
          apiRows={[
            { prop: 'options', type: 'SelectOption[]', description: '声明式选项集合（未传时自动降级解析 <option>/<optgroup> 子节点并派生 ChangeEvent）' },
            { prop: 'multiple', type: 'boolean', defaultValue: 'false', description: '多选数组模式，选中后保持弹层展开并以胶囊标签呈现' },
            { prop: 'searchable', type: 'boolean', defaultValue: 'false', description: '开启本地关键字 + 汉字拼音首字母即时检索' },
            { prop: 'SelectField.onValueChange', type: '(val: string) => void', description: 'SelectField 专用字符串回调与 triggerClassName / contentClassName 类名透传' },
            { prop: 'dictCode / dictKey', type: 'string', description: 'DictSelect 专用：通过 AbcProvider.dictAdapter 自动拉取远程字典项' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Select
              label="1. 分配职能角色（支持拼音如 ptjgs）"
              multiple={selectMulti}
              searchable={selectSearchable}
              clearable
              value={selectMulti ? multiRoles : singleRole}
              onChange={(val) => (selectMulti ? setMultiRoles(val) : setSingleRole(val))}
              options={[
                { label: '平台架构师', value: 'arch', description: '拥有全量核心架构配置权限' },
                { label: '站点可靠性工程师', value: 'ops', description: '负责集群监控与弹性扩缩容' },
                { label: '系统审计员', value: 'auditor', description: '只读查阅全链路操作日志' },
                { label: '冻结访客角色', value: 'guest', disabled: true },
              ]}
            />
            <DictSelect
              label="2. 租户状态筛选 (DictSelect 字典驱动)"
              dictCode="tenant_status"
              prependOptions={[{ label: '全部状态', value: '' }]}
              clearable
            />
            <SelectField
              label="3. SelectField 快捷单选封装"
              value={selectFieldVal}
              onValueChange={setSelectFieldVal}
              searchable
              clearable
              helperText={`onValueChange 当前返回值: ${selectFieldVal || '(已清空)'}`}
              options={[
                { label: '生产主环境 (Production)', value: 'prod', description: 'SLA 99.99% 核心链路' },
                { label: '预发灰度环境 (Staging)', value: 'staging', description: '全量回归与灰度验证集群' },
                { label: '沙箱测试环境 (Sandbox)', value: 'sandbox' },
              ]}
            />
            <Select
              label="4. 原生 <option>/<optgroup> 子节点模式"
              value={legacyProtocol}
              onChange={(e) => setLegacyProtocol(e.target.value)}
              helperText={`ChangeEvent.target.value: ${legacyProtocol}`}
            >
              <optgroup label="代理传输协议">
                <option value="socks5">SOCKS5 (隧道优先)</option>
                <option value="https">HTTPS CONNECT</option>
                <option value="http">HTTP 明文内网</option>
              </optgroup>
              <optgroup label="受限协议">
                <option value="ftp" disabled>
                  FTP（安全策略已禁用）
                </option>
              </optgroup>
            </Select>
          </div>
        </ComponentDocPreview>

        {/* 5. Tree */}
        <ComponentDocPreview
          title="Tree 树形级联选择器（基于 @abc-design/core）"
          pkg="@abc-design/react"
          description="专治角色菜单授权、部门架构与权限点分配：内置父子级联勾选、半选态 (indeterminate) 自动推导、一键全展开与拼音检索。"
          code={`import { Tree } from '@abc-design/react'

<Tree
  treeData={ORG_TREE}
  checkable
  searchable
  checkedKeys={checkedKeys}
  onCheck={(keys, info) => setCheckedKeys(keys)}
/>`}
          apiRows={[
            { prop: 'treeData', type: 'AbcTreeNode[]', required: true, description: '树形节点数组（key, title, children, disabled）' },
            { prop: 'checkable', type: 'boolean', defaultValue: 'false', description: '是否启用复选框及父子级联半选计算' },
            { prop: 'checkStrictly', type: 'boolean', defaultValue: 'false', description: '开启后父子节点勾选状态完全独立不联动' },
            { prop: 'searchable', type: 'boolean', defaultValue: 'false', description: '显示顶部拼音搜索框与全部展开/收起工具栏' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Tree
              treeData={ORG_TREE}
              checkable
              searchable
              checkedKeys={checkedMenuKeys}
              onCheck={(keys) => setCheckedMenuKeys(keys)}
            />
            <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-3.5 text-xs">
              <div className="font-semibold text-[var(--abc-fg)]">当前已勾选叶子/父级 Key：</div>
              <pre className="mt-2 font-mono text-[11px] text-[var(--abc-primary)]">
                {JSON.stringify(checkedMenuKeys, null, 2)}
              </pre>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 5.5 TreeSelect */}
        <ComponentDocPreview
          title="TreeSelect 树形下拉与级联选择器"
          pkg="@abc-design/react"
          description="零外部依赖的企业级树形下拉选择器：原生融合单选限叶子、父子复选级联/独立 (SHOW_PARENT / SHOW_CHILD / SHOW_ALL)、maxTagCount 胶囊折叠、扁平 id/pId 构树、自定义 fieldNames、拼音检索、异步 loadData 及 3,000 节点窗口虚拟滚动。"
          code={`import { TreeSelect } from '@abc-design/react'

<TreeSelect
  treeData={ORG_TREE}
  treeCheckable
  searchable
  showCheckedStrategy={TreeSelect.SHOW_PARENT}
  maxTagCount={2}
  value={value}
  onChange={(val) => setValue(val)}
/>`}
          apiRows={[
            { prop: 'treeData / fieldNames', type: 'Record<string, any>[] / AbcTreeFieldNames', required: true, description: '支持标准树节点或通过 fieldNames({ label, value, children }) 适配后端字段' },
            { prop: 'treeDataSimpleMode', type: 'boolean | { id, pId, rootPId }', defaultValue: 'false', description: '扁平数组自动依据 id / pId 构建完整层级树' },
            { prop: 'treeCheckable / showCheckedStrategy', type: 'boolean / SHOW_PARENT | SHOW_CHILD | SHOW_ALL', defaultValue: 'SHOW_PARENT', description: '启用复选框级联计算并按策略收敛回填值与胶囊数量' },
            { prop: 'treeCheckStrictly / selectableLeafOnly', type: 'boolean', defaultValue: 'false', description: '父子勾选独立解耦 / 单选限制仅允许选中叶子节点' },
            { prop: 'loadData / virtual', type: '(node) => Promise<void> / boolean', defaultValue: 'virtual: true', description: '支持异步懒加载子节点及可见行 >40 时自动启用固定行高虚拟窗口' },
          ]}
        >
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[var(--abc-fg)]">
                    1. 单选限叶子与拼音快速定位
                  </span>
                  <label className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-[var(--abc-fg-secondary)]">
                    <Checkbox
                      size="xs"
                      checked={leafOnlyMode}
                      onChange={setLeafOnlyMode}
                    />
                    <span>仅选叶子节点 (selectableLeafOnly)</span>
                  </label>
                </div>
                <TreeSelectField
                  label="归属业务模块"
                  treeData={ORG_TREE}
                  value={treeSelectSingle}
                  onValueChange={setTreeSelectSingle}
                  selectableLeafOnly={leafOnlyMode}
                  searchable
                  allowClear
                  treeDefaultExpandAll
                  helperText={`当前选中节点值：${String(treeSelectSingle || '未选择')}`}
                />
              </div>

              <div className="space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[var(--abc-fg)]">
                    2. 多选级联授权策略 (SHOW_PARENT / CHILD / ALL)
                  </span>
                  <div className="flex items-center gap-2">
                    <SegmentedControl
                      size="xs"
                      value={checkedStrategy}
                      onValueChange={(v) => setCheckedStrategy(v as AbcCheckedStrategy)}
                      options={[
                        { value: TreeSelect.SHOW_PARENT, label: 'SHOW_PARENT' },
                        { value: TreeSelect.SHOW_CHILD, label: 'SHOW_CHILD' },
                        { value: TreeSelect.SHOW_ALL, label: 'SHOW_ALL' },
                      ]}
                    />
                    <label className="inline-flex cursor-pointer items-center gap-1 text-[11px] text-[var(--abc-fg-secondary)]">
                      <Checkbox
                        size="xs"
                        checked={strictCheckMode}
                        onChange={setStrictCheckMode}
                      />
                      <span>独立勾选</span>
                    </label>
                  </div>
                </div>
                <TreeSelect
                  label="角色权限范围（超出 2 项折叠为 +N）"
                  treeData={ORG_TREE}
                  treeCheckable
                  treeCheckStrictly={strictCheckMode}
                  showCheckedStrategy={checkedStrategy}
                  maxTagCount={2}
                  searchable
                  allowClear
                  treeDefaultExpandAll
                  value={treeSelectMulti}
                  onChange={(val) => setTreeSelectMulti(val)}
                  helperText={`回传策略数组：${JSON.stringify(treeSelectMulti)}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] p-4">
                <div className="text-xs font-semibold text-[var(--abc-fg)]">
                  3. 扁平 id/pId 自动构树 + 自定义 fieldNames
                </div>
                <TreeSelect
                  label="组织架构（扁平数据直接绑定）"
                  treeData={FLAT_SIMPLE_ORG}
                  treeDataSimpleMode={{ id: 'deptId', pId: 'parentId', rootPId: null }}
                  fieldNames={{ label: 'deptName', value: 'deptCode' }}
                  searchable
                  allowClear
                  treeDefaultExpandAll
                  value={simpleOrgVal}
                  onChange={(val) => setSimpleOrgVal(val)}
                  helperText={`自定义 fieldNames 回传 deptCode：${String(simpleOrgVal || '空')}`}
                />
              </div>

              <div className="space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] p-4">
                <div className="text-xs font-semibold text-[var(--abc-fg)]">
                  4. 异步懒加载 loadData + 3,000 节点虚拟滚动压测
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <TreeSelect
                    label="异步懒加载可用区"
                    treeData={lazyTreeData}
                    loadData={handleLoadLazyRegion}
                    value={lazyRegionVal}
                    onChange={(val) => setLazyRegionVal(val)}
                    placeholder="点击大区左侧箭头加载子节点"
                    allowClear
                  />
                  <TreeSelect
                    label="3,000 节点虚拟滚动（仅渲染窗口行）"
                    treeData={LARGE_VIRTUAL_TREE}
                    value={virtualVal}
                    onChange={(val) => setVirtualVal(val)}
                    searchable
                    virtual
                    listHeight={240}
                    itemHeight={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 6. DatePicker / TagInput / SliderVerify / ImageUpload */}
        <ComponentDocPreview
          title="高阶表单控件组合（日期区间 / 标签输入 / 行为验证码 / 凭证上传）"
          description="覆盖中后台筛选栏快捷日期预设、回车分词标签录入、零耦合拼图滑块安全校验以及支持 SVG 与位图的拖拽上传。"
          code={`import { DatePicker, DateRangePicker, TagInput, SliderVerify, ImageUpload } from '@abc-design/react'

<DateRangePicker value={range} onChange={setRange} />
<TagInput value={tags} onChange={setTags} />
<ImageUpload label="打款水单或品牌 SVG" value={url} onChange={setUrl} />`}
          apiRows={[
            { prop: 'DatePicker / DateRangePicker', type: 'value, onChange, clearable', description: '内置今日 / 近7天 / 本月快捷预设，基于 @abc-design/core 月历网格' },
            { prop: 'TagInput', type: 'value: string[], maxTags?: number', description: '支持回车或逗号快速分词生成胶囊，退格键删除末尾标签' },
            { prop: 'SliderVerify', type: 'fetchCaptcha / AbcProvider.captchaAdapter', description: '未注入后端接口时内置本地离线拼图演练，支持生产接入拼图验证' },
            { prop: 'ImageUpload', type: 'customUpload / AbcProvider.uploadAdapter', description: '支持拖拽/点击上传图片或 SVG，内置大图预览与替换动作' },
          ]}
        >
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="space-y-4">
              <div>
                <div className="mb-1.5 text-xs font-medium text-[var(--abc-fg-secondary)]">
                  单日选择与快捷日期区间
                </div>
                <div className="space-y-2.5">
                  <DatePicker value={dateVal} onChange={setDateVal} />
                  <DateRangePicker value={rangeVal} onChange={setRangeVal} />
                </div>
              </div>
              <div>
                <div className="mb-1.5 text-xs font-medium text-[var(--abc-fg-secondary)]">
                  业务标签输入 (TagInput，按 Enter 添加)
                </div>
                <TagInput value={tags} onChange={setTags} maxTags={8} />
              </div>
              <div className="flex items-center gap-4 pt-1">
                <Switch defaultChecked />
                <span className="text-xs text-[var(--abc-fg-secondary)]">启用风控行为滑块校验</span>
              </div>
              <SliderVerify
                onSuccess={(payload) => setCaptchaToken(`${payload.nonceStr}:${payload.value}`)}
              />
              {captchaToken && (
                <p className="font-mono text-[11px] text-[var(--abc-success)]">
                  验证通过回执：{captchaToken}
                </p>
              )}
            </div>

            <div>
              <ImageUpload
                label="上传品牌图形或打款凭证（无后端适配器时自动本地 DataURL 预览）"
                value={uploadedLogo}
                onChange={setUploadedLogo}
                helperText="支持拖拽任意 PNG / JPG / SVG 文件至此区域体验"
              />
            </div>
          </div>
        </ComponentDocPreview>

        {/* 7. ThemeSwitcher & useColorScheme */}
        <ComponentDocPreview
          title="ThemeSwitcher 主题切换器 & useColorScheme"
          description="支持单键切换 (toggle) 与浅色/深色/跟随系统三态切换器 (segmented)，与顶层 AbcProvider、DOM data-abc-theme / .dark 属性及跨标签页状态自动双向同步。"
          controls={
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[var(--abc-fg-muted)]">快捷切换:</span>
              {(['light', 'dark', 'system'] as const).map((pref) => (
                <Button
                  key={pref}
                  size="xs"
                  variant={colorPreference === pref ? 'primary' : 'outline'}
                  onClick={() => setColorPreference(pref)}
                >
                  {pref === 'light' ? '浅色 Light' : pref === 'dark' ? '深色 Dark' : '跟随系统'}
                </Button>
              ))}
              <StatusTag tone={resolvedScheme === 'dark' ? 'info' : 'neutral'}>
                实际渲染：{resolvedScheme}（偏好：{colorPreference}）
              </StatusTag>
            </div>
          }
          code={`import { ThemeSwitcher, useColorScheme } from '@abc-design/react'

const { preference, resolvedScheme, toggleScheme } = useColorScheme()

{/* 顶部导航常用快捷按钮 */}
<ThemeSwitcher mode="toggle" />

{/* 设置页/命令中心用三态分段切换器 */}
<ThemeSwitcher mode="segmented" />`}
          apiRows={[
            { prop: 'mode', type: "'toggle' | 'segmented'", defaultValue: "'toggle'", description: '快捷图标单键切换或浅色/深色/跟随系统三态分段切换' },
            { prop: 'dark', type: 'boolean', defaultValue: 'false', description: '适配深色顶栏或暗黑底色容器的对比度预设' },
            { prop: 'locale', type: 'string', defaultValue: "'zh-CN'", description: '按钮无障碍标签及三态切换提示语种' },
            { prop: 'useColorScheme()', type: '{ preference, resolvedScheme, systemScheme, setPreference, toggleScheme }', description: '读写全局颜色偏好并自动执行圆形扩散视口过渡动画' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/70 p-4 space-y-2.5">
              <div className="text-xs font-semibold text-[var(--abc-fg)]">浅色表面 Toggle 形态</div>
              <div className="flex items-center gap-3">
                <ThemeSwitcher mode="toggle" />
                <span className="text-xs text-[var(--abc-fg-muted)]">单击在浅色/深色间平滑切换</span>
              </div>
            </div>

            <div className="rounded-lg border border-slate-700/80 bg-slate-900 p-4 space-y-2.5 text-slate-100">
              <div className="text-xs font-semibold text-slate-200">深色 Header 适配 (dark=true)</div>
              <div className="flex items-center gap-3">
                <ThemeSwitcher mode="toggle" dark />
                <span className="text-xs text-slate-400">高对比度暗黑导航底座预览</span>
              </div>
            </div>

            <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/70 p-4 space-y-2.5">
              <div className="text-xs font-semibold text-[var(--abc-fg)]">三态分段切换 (segmented)</div>
              <div>
                <ThemeSwitcher mode="segmented" />
              </div>
            </div>
          </div>
        </ComponentDocPreview>

        <EnterpriseFormWidgetsDocs />
        <FormAndTypographyExtrasDocs />
      </div>
    </PageContainer>
  )
}
