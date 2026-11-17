import React, { useState } from 'react'
import {
  ByteQuotaInput,
  DurationQuotaInput,
  FormField,
  Input,
  InputNumber,
  Label,
  PageContainer,
  SearchInput,
  StatusTag,
  Textarea,
  type AbcSize,
  type ByteUnit,
  type DurationUnit,
} from '@abc-design/react'
import { Globe, KeyRound } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

const SIZE_OPTIONS = [
  { label: 'xs', value: 'xs' as const },
  { label: 'sm', value: 'sm' as const },
  { label: 'md', value: 'md' as const },
  { label: 'lg', value: 'lg' as const },
]
const TYPE_OPTIONS = [{ label: 'text', value: 'text' as const }, { label: 'password', value: 'password' as const }]
const MAX_LEN_OPTIONS = [{ label: '20', value: 20 }, { label: '40', value: 40 }, { label: '80', value: 80 }]
const STEP_OPTIONS = [{ label: '1', value: 1 }, { label: '5', value: 5 }, { label: '15', value: 15 }]
const ROWS_OPTIONS = [{ label: '2', value: 2 }, { label: '4', value: 4 }, { label: '6', value: 6 }]
const BYTE_SET_OPTIONS = [{ label: 'MB/GB/TB', value: 'mgt' as const }, { label: 'KB/MB/GB', value: 'kmg' as const }]
const DURATION_SET_OPTIONS = [{ label: 'm/h/d', value: 'mhd' as const }, { label: 's/m/h', value: 'smh' as const }]

export const TextAndNumberInputsPage: React.FC = () => {
  // Card 1: Input + FormField + Label
  const [inputSize, setInputSize] = useState<AbcSize>('sm')
  const [inputType, setInputType] = useState<'text' | 'password'>('text')
  const [clearable, setClearable] = useState(true)
  const [showCount, setShowCount] = useState(true)
  const [maxLength, setMaxLength] = useState<number>(40)
  const [inputDisabled, setInputDisabled] = useState(false)
  const [readOnly, setReadOnly] = useState(false)
  const [required, setRequired] = useState(true)
  const [simulateError, setSimulateError] = useState(false)
  const [withPrefixIcon, setWithPrefixIcon] = useState(true)
  const [tenantName, setTenantName] = useState('BytesFlows Enterprise')
  const [endpointVal, setEndpointVal] = useState('api.prod.abc-design.dev')

  // Card 2: InputNumber & Textarea
  const [numSize, setNumSize] = useState<AbcSize>('sm')
  const [step, setStep] = useState<number>(5)
  const [minVal, setMinVal] = useState<number>(0)
  const [maxVal, setMaxVal] = useState<number>(120)
  const [rows, setRows] = useState<number>(4)
  const [areaShowCount, setAreaShowCount] = useState(true)
  const [numDisabled, setNumDisabled] = useState(false)
  const [numError, setNumError] = useState(false)
  const [concurrency, setConcurrency] = useState<number | null>(30)
  const [releaseNote, setReleaseNote] = useState('系统将于周日凌晨 02:00 执行无感滚动升级，请保持长连接重连机制。')

  // Card 3: SearchInput + ByteQuotaInput + DurationQuotaInput
  const [quotaSize, setQuotaSize] = useState<AbcSize>('sm')
  const [quotaDisabled, setQuotaDisabled] = useState(false)
  const [byteUnitPreset, setByteUnitPreset] = useState<'mgt' | 'kmg'>('mgt')
  const [durationUnitPreset, setDurationUnitPreset] = useState<'mhd' | 'smh'>('mhd')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [byteQuota, setByteQuota] = useState<number>(512 * 1024 * 1024) // 512 MB
  const [durationQuota, setDurationQuota] = useState<number>(3600 * 6) // 6 小时

  const byteUnits: readonly ByteUnit[] =
    byteUnitPreset === 'mgt' ? ['MB', 'GB', 'TB'] : ['KB', 'MB', 'GB']
  const durationUnits: readonly DurationUnit[] =
    durationUnitPreset === 'mhd' ? ['m', 'h', 'd'] : ['s', 'm', 'h']
  // QuotaUnitInputBaseProps.size 仅接受 'default' | 'sm'，按当前规格映射紧凑度
  const resolvedQuotaSize: 'default' | 'sm' =
    quotaSize === 'xs' || quotaSize === 'sm' ? 'sm' : 'default'

  return (
    <PageContainer
      title="文本、数值、搜索与配额输入"
      subtitle="涵盖基础输入框 Input、表单域包装器 FormField、Label、步进数值 InputNumber、多行文本域 Textarea、搜索框 SearchInput 及存储/时长配额联动输入。"
    >
      <div className="space-y-5">
        {/* 卡片 1：Input + FormField + Label */}
        <ComponentDocPreview
          title="Input / FormField / Label 基础文本与密码输入"
          components={['Input', 'FormField', 'Label']}
          description="支持四档规格、一键清空并自动回焦、密码明密文切换、前置/后置图标插槽、实时字数统计及 FormField / Label 语义化表单校验。"
          onResetKnobs={() => {
            setInputSize('sm')
            setInputType('text')
            setClearable(true)
            setShowCount(true)
            setMaxLength(40)
            setInputDisabled(false)
            setReadOnly(false)
            setRequired(true)
            setSimulateError(false)
            setWithPrefixIcon(true)
          }}
          controls={
            <>
              <KnobSegmented label="size" value={inputSize} options={SIZE_OPTIONS} onChange={setInputSize} />
              <KnobSegmented label="type" value={inputType} options={TYPE_OPTIONS} onChange={setInputType} />
              <KnobSegmented label="maxLength" value={maxLength} options={MAX_LEN_OPTIONS} onChange={setMaxLength} />
              <KnobSwitch label="clearable" checked={clearable} onChange={setClearable} />
              <KnobSwitch label="showCount" checked={showCount} onChange={setShowCount} />
              <KnobSwitch label="prefixIcon" checked={withPrefixIcon} onChange={setWithPrefixIcon} />
              <KnobSwitch label="required" checked={required} onChange={setRequired} />
              <KnobSwitch label="readOnly" checked={readOnly} onChange={setReadOnly} />
              <KnobSwitch label="disabled" checked={inputDisabled} onChange={setInputDisabled} />
              <KnobSwitch label="simulateError" checked={simulateError} onChange={setSimulateError} />
            </>
          }
          code={`import { FormField, Input, Label } from '@abc-design/react'
import { KeyRound } from 'lucide-react'

<FormField
  label="租户工作空间名称"
  size="${inputSize}"
  required={${required}}${simulateError ? '\n  error="名称已被占用或不符合格式规范"' : ''}
  helperText="支持一键清空自动回焦"
>
  <Input
    size="${inputSize}"
    type="${inputType}"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    clearable={${clearable}}
    showCount={${showCount}}
    maxLength={${maxLength}}
    readOnly={${readOnly}}
    disabled={${inputDisabled}}
    invalid={${simulateError}}${withPrefixIcon ? '\n    prefixIcon={<KeyRound className="h-3.5 w-3.5" />}' : ''}
  />
</FormField>

<Label htmlFor="gateway" size="${inputSize}" required={${required}}>独立语义标签</Label>
<Input id="gateway" size="${inputSize}" value={endpoint} onChange={...} />`}
          apiRows={[
            { prop: 'Input.size', type: "'xs' | 'sm' | 'md' | 'lg' | 'default'", defaultValue: "'sm'", description: '控件高度与字号规格，同步对齐 --abc-control-h-*' },
            { prop: 'Input.type', type: 'HTMLInputTypeAttribute', defaultValue: "'text'", description: "为 'password' 且 passwordToggle!==false 时渲染明密文切换按钮" },
            { prop: 'Input.clearable / allowClear', type: 'boolean', defaultValue: 'false', description: '非禁用非只读且有值时渲染清空按钮，清空后自动回焦' },
            { prop: 'Input.showCount / maxLength', type: 'boolean / number', defaultValue: 'false', description: '底部显示当前字符数或 count/maxLength 计数' },
            { prop: 'Input.prefixIcon / prefix', type: 'ReactNode', description: '左侧内嵌图标或文本插槽' },
            { prop: 'FormField.required / tooltip / error', type: 'boolean / ReactNode', description: '包装标签星号、悬浮提示 Tooltip 及错误态 alert 文案' },
            { prop: 'Label.size / required', type: "'xs' | 'sm' | 'md' | 'lg' / boolean", defaultValue: "'sm'", description: '独立语义 <label>，与 FormField 标签样式一致' },
          ]}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormField
              label="租户工作空间名称 (FormField + Input)"
              size={inputSize}
              required={required}
              tooltip="通过 FormField 统一承接必填星号、提示气泡与错误态广播"
              error={simulateError ? '工作空间名称已被占用或格式不合法' : undefined}
              helperText="切换 password 模式可测试明密文眼形切换器"
            >
              <Input
                size={inputSize}
                type={inputType}
                value={tenantName}
                onChange={(e) => setTenantName(e.target.value)}
                clearable={clearable}
                showCount={showCount}
                maxLength={maxLength}
                disabled={inputDisabled}
                readOnly={readOnly}
                invalid={simulateError}
                prefixIcon={withPrefixIcon ? <KeyRound className="h-3.5 w-3.5" /> : undefined}
                placeholder="请输入租户名称或安全口令..."
              />
            </FormField>

            <div className="space-y-1.5">
              <Label htmlFor="standalone-endpoint-input" size={inputSize} required={required}>
                独立语义标签 + 网关域名 (Label + Input)
              </Label>
              <Input
                id="standalone-endpoint-input"
                size={inputSize}
                type={inputType}
                value={endpointVal}
                onChange={(e) => setEndpointVal(e.target.value)}
                clearable={clearable}
                showCount={showCount}
                maxLength={maxLength}
                disabled={inputDisabled}
                readOnly={readOnly}
                error={simulateError ? '接入域名解析校验失败' : undefined}
                helperText="Label 可脱离 FormField 单独通过 htmlFor 绑定原生控件"
                prefixIcon={withPrefixIcon ? <Globe className="h-3.5 w-3.5" /> : undefined}
              />
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2：InputNumber & Textarea */}
        <ComponentDocPreview
          title="InputNumber & Textarea 步进数值与多行文本域"
          components={['InputNumber', 'Textarea']}
          description="等宽数字对齐的步进加减器（内置边界锁定与范围钳制）以及支持行数调节、等宽字体与字数统计的多行文本域。"
          onResetKnobs={() => {
            setNumSize('sm')
            setStep(5)
            setMinVal(0)
            setMaxVal(120)
            setRows(4)
            setAreaShowCount(true)
            setNumDisabled(false)
            setNumError(false)
          }}
          controls={
            <>
              <KnobSegmented label="size" value={numSize} options={SIZE_OPTIONS} onChange={setNumSize} />
              <KnobSegmented label="step" value={step} options={STEP_OPTIONS} onChange={setStep} />
              <KnobNumber label="min" value={minVal} min={-100} max={50} step={5} onChange={setMinVal} />
              <KnobNumber label="max" value={maxVal} min={10} max={1000} step={10} onChange={setMaxVal} />
              <KnobSegmented label="Textarea.rows" value={rows} options={ROWS_OPTIONS} onChange={setRows} />
              <KnobSwitch label="showCount" checked={areaShowCount} onChange={setAreaShowCount} />
              <KnobSwitch label="disabled" checked={numDisabled} onChange={setNumDisabled} />
              <KnobSwitch label="simulateError" checked={numError} onChange={setNumError} />
            </>
          }
          code={`import { FormField, InputNumber, Textarea } from '@abc-design/react'

<FormField label="最大并发实例数" size="${numSize}"${numError ? ' error="并发数超出配额上限"' : ''}>
  <InputNumber
    size="${numSize}"
    value={concurrency}
    onChange={setConcurrency}
    min={${minVal}}
    max={${maxVal}}
    step={${step}}
    disabled={${numDisabled}}
    invalid={${numError}}
  />
</FormField>

<Textarea
  label="灰度发布说明"
  size="${numSize}"
  rows={${rows}}
  showCount={${areaShowCount}}
  maxLength={160}
  disabled={${numDisabled}}${numError ? '\n  error="公告内容不符合合规要求"' : ''}
  value={note}
  onChange={(e) => setNote(e.target.value)}
/>`}
          apiRows={[
            { prop: 'InputNumber.value / onChange', type: 'number | null / (val: number | null) => void', description: '支持清空返回 null，提交时自动按 [min, max] 边界钳制' },
            { prop: 'InputNumber.min / max / step', type: 'number', defaultValue: 'step: 1', description: '步进粒度与上下限，触达边界时自动禁用对应加减按钮' },
            { prop: 'InputNumber.invalid', type: 'boolean', defaultValue: 'false', description: '触发危险态红框高亮（可配合 FormField 展示错误提示）' },
            { prop: 'Textarea.rows', type: 'number', defaultValue: '3', description: '初始可见文本行数，支持垂直拖拽调整' },
            { prop: 'Textarea.showCount / maxLength', type: 'boolean / number', defaultValue: 'false', description: '底部显示当前字符统计' },
            { prop: 'Textarea.mono', type: 'boolean', defaultValue: 'false', description: '开启等宽字体渲染（适合 JSON / 脚本 / 表达式输入）' },
          ]}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormField
              label="节点最大并发数 (InputNumber)"
              size={numSize}
              error={numError ? `并发配额需控制在 ${minVal} ~ ${maxVal} 之间` : undefined}
              helperText={`当前受控值：${concurrency === null ? 'null (空)' : concurrency} · 步长 ${step}`}
            >
              <InputNumber
                size={numSize}
                value={concurrency}
                onChange={setConcurrency}
                min={minVal}
                max={maxVal}
                step={step}
                disabled={numDisabled}
                invalid={numError}
                placeholder="输入整数"
              />
            </FormField>

            <Textarea
              label="灰度维护公告 (Textarea)"
              size={numSize}
              rows={rows}
              showCount={areaShowCount}
              maxLength={160}
              disabled={numDisabled}
              error={numError ? '维护说明不可包含未脱敏密钥或空内容' : undefined}
              helperText="修改 rows Knobs 可即时调节默认展示高度"
              value={releaseNote}
              onChange={(e) => setReleaseNote(e.target.value)}
            />
          </div>
        </ComponentDocPreview>

        {/* 卡片 3：SearchInput + ByteQuotaInput + DurationQuotaInput */}
        <ComponentDocPreview
          title="SearchInput / ByteQuotaInput / DurationQuotaInput 搜索与配额输入"
          components={['SearchInput', 'ByteQuotaInput', 'DurationQuotaInput']}
          description="标准搜索输入框与企业级存储字节/时长配额联动输入器。ByteQuotaInput 与 DurationQuotaInput 的 size 签名支持 'sm' | 'default'，底层分别以字节整数和秒整数双向同步。"
          onResetKnobs={() => {
            setQuotaSize('sm')
            setQuotaDisabled(false)
            setByteUnitPreset('mgt')
            setDurationUnitPreset('mhd')
          }}
          controls={
            <>
              <KnobSegmented label="size" value={quotaSize} options={SIZE_OPTIONS} onChange={setQuotaSize} />
              <KnobSegmented label="Byte 单位集" value={byteUnitPreset} options={BYTE_SET_OPTIONS} onChange={setByteUnitPreset} />
              <KnobSegmented label="Duration 单位集" value={durationUnitPreset} options={DURATION_SET_OPTIONS} onChange={setDurationUnitPreset} />
              <KnobSwitch label="disabled" checked={quotaDisabled} onChange={setQuotaDisabled} />
            </>
          }
          code={`import { SearchInput, ByteQuotaInput, DurationQuotaInput } from '@abc-design/react'

<SearchInput
  size="${quotaSize}"
  disabled={${quotaDisabled}}
  value={keyword}
  onChange={(e) => setKeyword(e.target.value)}
  onClear={() => setKeyword('')}
  placeholder="搜索集群节点或规则..."
/>

<ByteQuotaInput
  size="${resolvedQuotaSize}"
  disabled={${quotaDisabled}}
  allowedUnits={${JSON.stringify(byteUnits)}}
  value={${byteQuota}}
  onChange={setByteQuota}
/>

<DurationQuotaInput
  size="${resolvedQuotaSize}"
  disabled={${quotaDisabled}}
  allowedUnits={${JSON.stringify(durationUnits)}}
  value={${durationQuota}}
  onChange={setDurationQuota}
/>`}
          apiRows={[
            { prop: 'SearchInput.onClear', type: '() => void', description: '传入回调时自动启用 allowClear 清空按钮并回焦' },
            { prop: 'SearchInput.size', type: "'xs' | 'sm' | 'md' | 'lg' | 'default'", defaultValue: "'sm'", description: '继承 Input 四档尺寸规格' },
            { prop: 'ByteQuotaInput.value / onChange', type: 'number / (bytes: number) => void', required: true, description: '底层始终绑定非负整数 Bytes，输入与单位切换实时无损折算' },
            { prop: 'ByteQuotaInput.allowedUnits', type: "readonly ('B' | 'KB' | 'MB' | 'GB' | 'TB')[]", defaultValue: "['B','KB','MB','GB','TB']", description: '限定右侧可选容量单位子集' },
            { prop: 'DurationQuotaInput.value / onChange', type: 'number / (seconds: number) => void', required: true, description: '底层始终绑定非负整数 Seconds，自动优选最佳展示单位' },
            { prop: 'ByteQuotaInput / DurationQuotaInput.size', type: "'default' | 'sm'", defaultValue: "'default'", description: '配额控件提供标准 (h-9) 与紧凑 (h-8) 两档高度' },
          ]}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="space-y-1.5">
                <Label size={quotaSize}>快捷搜索 (SearchInput)</Label>
                <SearchInput
                  size={quotaSize}
                  disabled={quotaDisabled}
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onClear={() => setSearchKeyword('')}
                  placeholder="搜索服务节点、IP 或关键字..."
                />
              </div>

              <div className="space-y-1.5">
                <Label size={quotaSize}>存储容量配额 (ByteQuotaInput)</Label>
                <ByteQuotaInput
                  key={byteUnitPreset}
                  size={resolvedQuotaSize}
                  disabled={quotaDisabled}
                  locale="zh"
                  allowedUnits={byteUnits}
                  value={byteQuota}
                  onChange={setByteQuota}
                  aria-label="存储容量配额"
                />
              </div>

              <div className="space-y-1.5">
                <Label size={quotaSize}>任务超时阈值 (DurationQuotaInput)</Label>
                <DurationQuotaInput
                  key={durationUnitPreset}
                  size={resolvedQuotaSize}
                  disabled={quotaDisabled}
                  locale="zh"
                  allowedUnits={durationUnits}
                  value={durationQuota}
                  onChange={setDurationQuota}
                  aria-label="任务超时时长"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3.5 py-2.5 text-xs">
              <StatusTag tone="info" dot={false}>
                Search: {searchKeyword || '(空)'}
              </StatusTag>
              <StatusTag tone="primary" dot={false} className="font-mono">
                底层字节整数: {byteQuota} ({byteQuota.toLocaleString()} Bytes)
              </StatusTag>
              <StatusTag tone="success" dot={false} className="font-mono">
                底层秒整数: {durationQuota} ({durationQuota.toLocaleString()} s)
              </StatusTag>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default TextAndNumberInputsPage
