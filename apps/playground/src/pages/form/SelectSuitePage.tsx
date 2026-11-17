import React, { useState } from 'react'
import {
  DictSelect,
  DictTag,
  Label,
  PageContainer,
  RadixSelect,
  Select,
  SelectContent,
  SelectField,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  StatusTag,
  useAbcDict,
  type AbcSize,
  type SelectSize,
  type StatusTone,
} from '@abc-design/react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSelect, KnobSwitch } from '../../components/PropKnobs'

const SELECT_SIZE_OPTIONS = [
  { label: 'xs', value: 'xs' as const },
  { label: 'sm', value: 'sm' as const },
  { label: 'md', value: 'md' as const },
  { label: 'lg', value: 'lg' as const },
  { label: 'ghost', value: 'ghost' as const },
]

const SIZE_OPTIONS = [
  { label: 'xs', value: 'xs' as const },
  { label: 'sm', value: 'sm' as const },
  { label: 'md', value: 'md' as const },
  { label: 'lg', value: 'lg' as const },
]

const TONE_OPTIONS = [
  { label: 'neutral', value: 'neutral' },
  { label: 'primary', value: 'primary' },
  { label: 'success', value: 'success' },
  { label: 'warning', value: 'warning' },
  { label: 'danger', value: 'danger' },
  { label: 'info', value: 'info' },
]

const ROLE_OPTIONS = [
  { label: '平台架构师', value: 'arch', description: '拥有全量核心架构配置权限' },
  { label: '站点可靠性工程师', value: 'ops', description: '负责集群监控与弹性扩缩容' },
  { label: '系统审计员', value: 'auditor', description: '只读查阅全链路操作日志' },
  { label: '冻结访客角色', value: 'guest', disabled: true },
]

export const SelectSuitePage: React.FC = () => {
  // Card 1: Select & SelectField
  const [selectSize, setSelectSize] = useState<SelectSize>('sm')
  const [multiple, setMultiple] = useState(true)
  const [searchable, setSearchable] = useState(true)
  const [clearable, setClearable] = useState(true)
  const [selectDisabled, setSelectDisabled] = useState(false)
  const [hideChevron, setHideChevron] = useState(false)
  const [simulateError, setSimulateError] = useState(false)
  const [singleRole, setSingleRole] = useState<string | number>('arch')
  const [multiRoles, setMultiRoles] = useState<Array<string | number>>(['arch', 'ops'])
  const [envFieldVal, setEnvFieldVal] = useState('staging')
  const [legacyProtocol, setLegacyProtocol] = useState('socks5')

  // Card 2: DictSelect & DictTag
  const [dictCode, setDictCode] = useState<'tenant_status' | 'env_tier'>('tenant_status')
  const [dictSize, setDictSize] = useState<AbcSize>('sm')
  const [dictClearable, setDictClearable] = useState(true)
  const [withPrependAll, setWithPrependAll] = useState(true)
  const [tagDot, setTagDot] = useState(true)
  const [fallbackTone, setFallbackTone] = useState<StatusTone>('warning')
  const [dictVal, setDictVal] = useState<string>('active')

  const { options: liveDictOptions } = useAbcDict(dictCode)
  const sampleTagValues =
    liveDictOptions.length > 0
      ? [...liveDictOptions.map((o) => String(o.value)), 'unmapped_tier']
      : dictCode === 'tenant_status'
        ? ['active', 'pending', 'suspended', 'unmapped_status']
        : ['prod', 'staging', 'dev', 'unmapped_tier']

  // Card 3: RadixSelect
  const [radixDisabled, setRadixDisabled] = useState(false)
  const [withDividerGroup, setWithDividerGroup] = useState(true)
  const [regionVal, setRegionVal] = useState('ap-southeast-1')

  return (
    <PageContainer
      title="Select、字典与复合选择器"
      subtitle="涵盖声明式及 <option>/<optgroup> 兼容双模 Select、SelectField、字典联动 DictSelect / DictTag 及 Radix 复合选择器。"
    >
      <div className="space-y-5">
        {/* 卡片 1：Select & SelectField */}
        <ComponentDocPreview
          title="Select & SelectField 双模与兼容选择器"
          components={['Select', 'SelectField']}
          description="融合声明式 options（支持拼音首字母检索、多选胶囊、禁用跳过、ghost 隐形触发器）与原生 <option>/<optgroup> 子节点平滑迁移模式。"
          onResetKnobs={() => {
            setSelectSize('sm')
            setMultiple(true)
            setSearchable(true)
            setClearable(true)
            setSelectDisabled(false)
            setHideChevron(false)
            setSimulateError(false)
          }}
          controls={
            <>
              <KnobSegmented label="size" value={selectSize} options={SELECT_SIZE_OPTIONS} onChange={setSelectSize} />
              <KnobSwitch label="multiple" checked={multiple} onChange={setMultiple} />
              <KnobSwitch label="searchable" checked={searchable} onChange={setSearchable} />
              <KnobSwitch label="clearable" checked={clearable} onChange={setClearable} />
              <KnobSwitch label="hideChevron" checked={hideChevron} onChange={setHideChevron} />
              <KnobSwitch label="disabled" checked={selectDisabled} onChange={setSelectDisabled} />
              <KnobSwitch label="simulateError" checked={simulateError} onChange={setSimulateError} />
            </>
          }
          code={`import { Select, SelectField } from '@abc-design/react'

<Select
  label="分配职能角色"
  size="${selectSize}"
  multiple={${multiple}}
  searchable={${searchable}}
  clearable={${clearable}}
  hideChevron={${hideChevron}}
  disabled={${selectDisabled}}${simulateError ? '\n  error="请至少保留一个有效角色"' : ''}
  value={roleValue}
  onChange={setRoleValue}
  options={ROLE_OPTIONS}
/>

<SelectField
  label="部署环境 (SelectField)"
  size="${selectSize}"
  searchable={${searchable}}
  clearable={${clearable}}
  disabled={${selectDisabled}}
  value={env}
  onValueChange={setEnv}
  options={ENV_OPTIONS}
/>

<Select size="${selectSize}" hideChevron={${hideChevron}} disabled={${selectDisabled}} value={protocol} onChange={(e) => setProtocol(e.target.value)}>
  <optgroup label="代理传输协议">
    <option value="socks5">SOCKS5</option>
    <option value="https">HTTPS CONNECT</option>
  </optgroup>
</Select>`}
          apiRows={[
            { prop: 'Select.size', type: "'xs' | 'sm' | 'md' | 'lg' | 'default' | 'ghost'", defaultValue: "'sm'", description: '触发器尺寸规格；ghost 适合内嵌表格标题或轻量筛选' },
            { prop: 'Select.multiple', type: 'boolean', defaultValue: 'false', description: '多选数组模式，触发器以胶囊列表展示且点击选项不关闭弹层' },
            { prop: 'Select.searchable', type: 'boolean', defaultValue: 'false', description: '开启本地关键字及汉字拼音首字母即时检索' },
            { prop: 'Select.clearable / hideChevron', type: 'boolean', defaultValue: 'false', description: '一键清空按钮 / 隐藏右侧下拉指示箭头' },
            { prop: 'Select.children', type: '<option> / <optgroup>', description: '兼容原生 <select> 子节点模式，自动派发 ChangeEvent' },
            { prop: 'SelectField.onValueChange', type: '(val: string) => void', description: '面向单选字符串的快捷回调封装，支持 triggerClassName / contentClassName' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Select
              label="1. Select 声明式（试输 ptjgs 拼音检索）"
              size={selectSize}
              multiple={multiple}
              searchable={searchable}
              clearable={clearable}
              hideChevron={hideChevron}
              disabled={selectDisabled}
              error={simulateError ? '请至少分配一个可用职能角色' : undefined}
              value={multiple ? multiRoles : singleRole}
              onChange={(val) => (multiple ? setMultiRoles(val) : setSingleRole(val))}
              options={ROLE_OPTIONS}
            />

            <SelectField
              label="2. SelectField 字符串快捷单选"
              size={selectSize}
              searchable={searchable}
              clearable={clearable}
              disabled={selectDisabled}
              error={simulateError ? '当前目标环境处于只读冻结期' : undefined}
              value={envFieldVal}
              onValueChange={setEnvFieldVal}
              helperText={`onValueChange 当前值: ${envFieldVal || '(空)'}`}
              options={[
                { label: '生产环境 (Production)', value: 'prod', description: 'SLA 99.99% 核心链路' },
                { label: '预发灰度 (Staging)', value: 'staging', description: '全量回归验证集群' },
                { label: '沙箱测试 (Sandbox)', value: 'sandbox' },
              ]}
            />

            <Select
              label="3. <option>/<optgroup> 兼容模式"
              size={selectSize}
              hideChevron={hideChevron}
              disabled={selectDisabled}
              error={simulateError ? '该传输协议暂不支持当前区域' : undefined}
              value={legacyProtocol}
              onChange={(e) => setLegacyProtocol(e.target.value)}
              helperText={`ChangeEvent.target.value: ${legacyProtocol}`}
            >
              <optgroup label="代理传输协议">
                <option value="socks5">SOCKS5 (隧道优先)</option>
                <option value="https">HTTPS CONNECT</option>
                <option value="http">HTTP 内网明文</option>
              </optgroup>
              <optgroup label="受限协议">
                <option value="ftp" disabled>
                  FTP（安全基线已禁用）
                </option>
              </optgroup>
            </Select>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2：DictSelect & DictTag */}
        <ComponentDocPreview
          title="DictSelect & DictTag 数据字典驱动下拉与状态徽标"
          components={['DictSelect', 'DictTag']}
          description="通过 AbcProvider.dictAdapter 解耦业务字典接口，支持同步/异步加载、前置静态选项合并，以及基于字典 tone 自动着色的状态标签。"
          onResetKnobs={() => {
            setDictCode('tenant_status')
            setDictSize('sm')
            setDictClearable(true)
            setWithPrependAll(true)
            setTagDot(true)
            setFallbackTone('warning')
          }}
          controls={
            <>
              <KnobSegmented
                label="dictCode"
                value={dictCode}
                options={[
                  { label: 'tenant_status', value: 'tenant_status' },
                  { label: 'env_tier', value: 'env_tier' },
                ]}
                onChange={(next) => {
                  setDictCode(next)
                  setDictVal('')
                }}
              />
              <KnobSegmented label="size" value={dictSize} options={SIZE_OPTIONS} onChange={setDictSize} />
              <KnobSelect
                label="fallbackTone"
                value={fallbackTone}
                options={TONE_OPTIONS}
                onChange={(v) => setFallbackTone(v as StatusTone)}
                widthClass="w-28"
              />
              <KnobSwitch label="clearable" checked={dictClearable} onChange={setDictClearable} />
              <KnobSwitch label="withPrependAll" checked={withPrependAll} onChange={setWithPrependAll} />
              <KnobSwitch label="DictTag.dot" checked={tagDot} onChange={setTagDot} />
            </>
          }
          code={`import { DictSelect, DictTag } from '@abc-design/react'

<DictSelect
  dictCode="${dictCode}"
  size="${dictSize}"
  clearable={${dictClearable}}${withPrependAll ? "\n  prependOptions={[{ label: '全部状态', value: '' }]}" : ''}
  value={val}
  onChange={(v) => setVal(String(v ?? ''))}
/>

<DictTag
  dictCode="${dictCode}"
  value={val || 'unmapped_code'}
  size="${dictSize}"
  dot={${tagDot}}
  fallbackTone="${fallbackTone}"
/>`}
          apiRows={[
            { prop: 'dictCode / dictKey', type: 'string', description: '字典编码，触发 AbcProvider.dictAdapter 读取选项' },
            { prop: 'DictSelect.prependOptions / appendOptions', type: 'SelectOption[]', defaultValue: '[]', description: '前置/后置合并静态选项（如“全部”）' },
            { prop: 'DictTag.value', type: 'string | number | null | undefined', required: true, description: '待翻译的字典值；空值渲染 emptyText' },
            { prop: 'DictTag.dot', type: 'boolean', defaultValue: 'true', description: '是否展示标签前置圆点指示器' },
            { prop: 'DictTag.fallbackTone', type: 'StatusTone', defaultValue: "'neutral'", description: '当字典未命中或该项未配置 tone 时的兜底色调' },
          ]}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <DictSelect
              key={dictCode}
              label={`字典选择器 (dictCode="${dictCode}")`}
              dictCode={dictCode}
              size={dictSize}
              clearable={dictClearable}
              prependOptions={withPrependAll ? [{ label: '全部状态', value: '' }] : []}
              value={dictVal}
              onChange={(v) => setDictVal(String(v ?? ''))}
              helperText={
                liveDictOptions.length === 0
                  ? `当前 dictAdapter 暂未注册 "${dictCode}" 字典项，可在下方体验 DictTag fallbackTone 降级效果`
                  : `已从 dictAdapter 加载 ${liveDictOptions.length} 条字典项`
              }
            />

            <div className="space-y-2.5">
              <Label size={dictSize}>字典状态标签映射对照 (DictTag)</Label>
              <div className="flex flex-wrap items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 p-3">
                {sampleTagValues.map((codeVal) => (
                  <DictTag
                    key={codeVal}
                    dictCode={dictCode}
                    value={codeVal}
                    dot={tagDot}
                    size={dictSize}
                    fallbackTone={fallbackTone}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--abc-fg-muted)]">
                <span>当前下拉值对应标签：</span>
                <DictTag
                  dictCode={dictCode}
                  value={dictVal || undefined}
                  dot={tagDot}
                  size={dictSize}
                  fallbackTone={fallbackTone}
                  emptyText="(全部 / 未选)"
                />
              </div>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3：RadixSelect 复合选择器 */}
        <ComponentDocPreview
          title="RadixSelect 零依赖复合选择器"
          components={[
            'RadixSelect',
            'SelectTrigger',
            'SelectValue',
            'SelectContent',
            'SelectGroup',
            'SelectLabel',
            'SelectItem',
            'SelectSeparator',
          ]}
          description="1:1 兼容 Shadcn / Radix Select 组合子组件树写法，零第三方 Radix 运行时依赖，内置浮层定位与受控/非受控状态管理。"
          onResetKnobs={() => {
            setRadixDisabled(false)
            setWithDividerGroup(true)
          }}
          controls={
            <>
              <KnobSwitch label="disabled" checked={radixDisabled} onChange={setRadixDisabled} />
              <KnobSwitch
                label="withDividerGroup"
                checked={withDividerGroup}
                onChange={setWithDividerGroup}
              />
            </>
          }
          code={`import {
  RadixSelect, SelectTrigger, SelectValue, SelectContent,
  SelectGroup, SelectLabel, SelectItem, SelectSeparator,
} from '@abc-design/react'

<RadixSelect value={region} onValueChange={setRegion} disabled={${radixDisabled}}>
  <SelectTrigger>
    <SelectValue placeholder="请选择目标可用区" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>亚太地区</SelectLabel>
      <SelectItem value="ap-southeast-1">新加坡 ap-southeast-1</SelectItem>
      <SelectItem value="ap-northeast-1">东京 ap-northeast-1</SelectItem>
    </SelectGroup>${withDividerGroup ? '\n    <SelectSeparator />\n    <SelectGroup>\n      <SelectLabel>欧美地区</SelectLabel>\n      <SelectItem value="us-west-2">俄勒冈 us-west-2</SelectItem>\n      <SelectItem value="eu-central-1" disabled>法兰克福 eu-central-1 (维护中)</SelectItem>\n    </SelectGroup>' : ''}
  </SelectContent>
</RadixSelect>`}
          apiRows={[
            { prop: 'RadixSelect.value / onValueChange', type: 'string / (value: string) => void', description: '受控选中值及变更回调' },
            { prop: 'RadixSelect.disabled', type: 'boolean', defaultValue: 'false', description: '禁用整个复合触发器与弹层交互' },
            { prop: 'SelectTrigger / SelectValue', type: 'Compound', description: '触发按钮与自动回填已选选项标签的占位视图' },
            { prop: 'SelectContent / SelectGroup / SelectLabel', type: 'Compound', description: 'Portal 浮层菜单容器及分组标题' },
            { prop: 'SelectItem / SelectSeparator', type: 'Compound', description: '具体可选项（支持 disabled）与组间分割线' },
          ]}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="w-full max-w-sm space-y-1.5">
              <Label htmlFor="radix-region-trigger" required>
                调度集群可用区
              </Label>
              <RadixSelect value={regionVal} onValueChange={setRegionVal} disabled={radixDisabled}>
                <SelectTrigger id="radix-region-trigger">
                  <SelectValue placeholder="请选择目标可用区" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>亚太地区</SelectLabel>
                    <SelectItem value="ap-southeast-1">新加坡 ap-southeast-1</SelectItem>
                    <SelectItem value="ap-northeast-1">东京 ap-northeast-1</SelectItem>
                  </SelectGroup>
                  {withDividerGroup && (
                    <>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>欧美地区</SelectLabel>
                        <SelectItem value="us-west-2">俄勒冈 us-west-2</SelectItem>
                        <SelectItem value="eu-central-1" disabled>
                          法兰克福 eu-central-1 (维护中)
                        </SelectItem>
                      </SelectGroup>
                    </>
                  )}
                </SelectContent>
              </RadixSelect>
            </div>
            <StatusTag tone="info" dot={false} className="font-mono">
              已选节点：{regionVal}
            </StatusTag>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default SelectSuitePage
