import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  DatePicker,
  DateRangePicker,
  DictSelect,
  Icon,
  IconPicker,
  ImageUpload,
  Input,
  InputNumber,
  PageContainer,
  RadioGroup,
  Select,
  SliderVerify,
  Switch,
  TagInput,
  Textarea,
  Tree,
  type AbcTreeNode,
  type ButtonSize,
  type ButtonVariant,
} from '@abc-design/react'
import { Download, Search } from 'lucide-react'
import { ComponentDocPreview } from '../components/ComponentDocPreview'

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

export const GeneralAndFormDocsPage: React.FC = () => {
  // Button Knobs
  const [btnVariant, setBtnVariant] = useState<ButtonVariant>('primary')
  const [btnSize, setBtnSize] = useState<ButtonSize>('sm')
  const [btnLoading, setBtnLoading] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(false)

  // IconPicker
  const [pickedIcon, setPickedIcon] = useState('shield')

  // Input Knobs
  const [inputVal, setInputVal] = useState('BytesFlows Enterprise')
  const [inputClearable, setInputClearable] = useState(true)
  const [inputShowCount, setInputShowCount] = useState(true)
  const [inputError, setInputError] = useState(false)
  const [numVal, setNumVal] = useState<number | null>(120)

  // Select Knobs
  const [selectMulti, setSelectMulti] = useState(true)
  const [selectSearchable, setSelectSearchable] = useState(true)
  const [singleRole, setSingleRole] = useState<string | number>('arch')
  const [multiRoles, setMultiRoles] = useState<Array<string | number>>(['arch', 'ops'])

  // Tree
  const [checkedMenuKeys, setCheckedMenuKeys] = useState<Array<string | number>>([
    'sys:user',
    'sys:role',
  ])

  // Advanced Controls
  const [dateVal, setDateVal] = useState('2026-11-14')
  const [rangeVal, setRangeVal] = useState<[string, string]>(['2026-11-01', '2026-11-14'])
  const [tags, setTags] = useState(['多租户', 'RBAC', '零耦合'])
  const [uploadedLogo, setUploadedLogo] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')

  return (
    <PageContainer
      title="通用与表单控件交互式文档"
      subtitle="每个组件均支持实时调节 Props (Knobs)、查看动态生成的 TSX 代码并查阅完整类型签名"
    >
      <div className="space-y-5">
        {/* 1. Button */}
        <ComponentDocPreview
          title="Button 按钮"
          description="语义化 Token 驱动的通用触发按钮，支持 8 种视觉变体、4 档紧凑高度规格与防重入加载态。"
          controls={
            <>
              <RadioGroup
                variant="segmented"
                value={btnVariant}
                onChange={(v) => setBtnVariant(v as ButtonVariant)}
                options={[
                  { label: 'primary', value: 'primary' },
                  { label: 'secondary', value: 'secondary' },
                  { label: 'outline', value: 'outline' },
                  { label: 'danger', value: 'danger' },
                  { label: 'success', value: 'success' },
                  { label: 'ghost', value: 'ghost' },
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
              <Checkbox label="loading" checked={btnLoading} onChange={setBtnLoading} />
              <Checkbox label="disabled" checked={btnDisabled} onChange={setBtnDisabled} />
            </>
          }
          code={`import { Button } from '@abc-design/react'
import { Download } from 'lucide-react'

export function Demo() {
  return (
    <Button
      variant="${btnVariant}"
      size="${btnSize}"${btnLoading ? '\n      loading' : ''}${btnDisabled ? '\n      disabled' : ''}
      icon={<Download className="h-3.5 w-3.5" />}
    >
      导出财务报表
    </Button>
  )
}`}
          apiRows={[
            { prop: 'variant', type: "'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'warning' | 'ghost' | 'text'", defaultValue: "'primary'", description: '按钮语义色调变体' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '对齐 --abc-control-h-* 的高度规格' },
            { prop: 'loading', type: 'boolean', defaultValue: 'false', description: '加载态自动渲染旋转指示器并禁用重复点击' },
            { prop: 'icon', type: 'ReactNode', description: '前置图标插槽' },
            { prop: 'block', type: 'boolean', defaultValue: 'false', description: '是否撑满父容器 100% 宽度' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant={btnVariant}
              size={btnSize}
              loading={btnLoading}
              disabled={btnDisabled}
              icon={<Download className="h-3.5 w-3.5" />}
            >
              导出财务报表
            </Button>
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

        {/* 4. Select & DictSelect */}
        <ComponentDocPreview
          title="Select & DictSelect 选择器与字典下拉"
          description="内置中文拼音首字母检索（如输入 xts 匹配“系统审计员”）、跳过禁用项的键盘上下键导航、多选胶囊标签与字典适配器联动。"
          controls={
            <>
              <Checkbox label="multiple (多选胶囊)" checked={selectMulti} onChange={setSelectMulti} />
              <Checkbox label="searchable (拼音检索)" checked={selectSearchable} onChange={setSelectSearchable} />
            </>
          }
          code={`import { Select, DictSelect } from '@abc-design/react'

<Select
  label="分配职能角色"
  multiple={${selectMulti}}
  searchable={${selectSearchable}}
  clearable
  options={[
    { label: '平台架构师', value: 'arch' },
    { label: '站点可靠性工程师', value: 'ops' },
    { label: '系统审计员', value: 'auditor' },
  ]}
/>`}
          apiRows={[
            { prop: 'options', type: 'SelectOption[]', required: true, description: '选项集合（支持 label、value、disabled、description）' },
            { prop: 'multiple', type: 'boolean', defaultValue: 'false', description: '多选数组模式，选中后保持弹层展开并以胶囊标签呈现' },
            { prop: 'searchable', type: 'boolean', defaultValue: 'false', description: '开启本地关键字 + 汉字拼音首字母即时检索' },
            { prop: 'clearable / allowClear', type: 'boolean', defaultValue: 'false', description: '一键清空已选项' },
            { prop: 'dictCode / dictKey', type: 'string', description: 'DictSelect 专用：通过 AbcProvider.dictAdapter 自动拉取远程字典项' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Select
              label="分配职能角色（支持输入拼音如 ptjgs）"
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
              label="租户状态筛选 (DictSelect 自动读取 tenant_status 字典)"
              dictCode="tenant_status"
              prependOptions={[{ label: '全部状态', value: '' }]}
              clearable
            />
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
      </div>
    </PageContainer>
  )
}
