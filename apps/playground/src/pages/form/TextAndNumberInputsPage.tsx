import React, { useState } from 'react'
import {
  Button,
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
  formatQuotaBytes,
  formatQuotaDuration,
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
  // Card 01: Input + FormField + Label
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

  // Card 02: InputNumber & Textarea
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

  // Card 03: SearchInput
  const [searchSize, setSearchSize] = useState<AbcSize>('sm')
  const [searchDisabled, setSearchDisabled] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('prod-apac-sg')

  // Card 04: ByteQuotaInput & DurationQuotaInput
  const [quotaSize, setQuotaSize] = useState<'sm' | 'default'>('sm')
  const [quotaLocale, setQuotaLocale] = useState<'zh' | 'en'>('zh')
  const [zeroUnlimited, setZeroUnlimited] = useState(true)
  const [quotaDisabled, setQuotaDisabled] = useState(false)
  const [byteUnitPreset, setByteUnitPreset] = useState<'mgt' | 'kmg'>('mgt')
  const [durationUnitPreset, setDurationUnitPreset] = useState<'mhd' | 'smh'>('mhd')
  const [byteQuota, setByteQuota] = useState<number>(512 * 1024 * 1024) // 512 MB
  const [durationQuota, setDurationQuota] = useState<number>(3600 * 6) // 6 小时

  const byteUnits: readonly ByteUnit[] =
    byteUnitPreset === 'mgt' ? ['MB', 'GB', 'TB'] : ['KB', 'MB', 'GB']
  const durationUnits: readonly DurationUnit[] =
    durationUnitPreset === 'mhd' ? ['m', 'h', 'd'] : ['s', 'm', 'h']

  return (
    <PageContainer
      title="文本、数值、搜索与配额输入"
      subtitle="按职责拆分为 4 组独立组件画布：基础文本 Input/FormField、步进数值 InputNumber/Textarea、快捷检索 SearchInput 与字节/时长配额折算器。"
      breadcrumbs={[{ label: '表单录入与选择器' }, { label: '文本、数值与配额输入' }]}
    >
      <div className="space-y-6">
        {/* 卡片 01：Input + FormField + Label */}
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

<FormField
  label="租户工作空间名称"
  size="${inputSize}"
  required={${required}}${simulateError ? '\n  error="名称已被占用或不符合格式规范"' : ''}
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
  />
</FormField>`}
          apiRows={[
            { prop: 'Input.size', type: "'xs' | 'sm' | 'md' | 'lg' | 'default'", defaultValue: "'sm'", description: '控件高度与字号规格，同步对齐 --abc-control-h-*' },
            { prop: 'Input.type', type: 'HTMLInputTypeAttribute', defaultValue: "'text'", description: "为 'password' 且 passwordToggle!==false 时渲染明密文切换按钮" },
            { prop: 'Input.clearable / allowClear', type: 'boolean', defaultValue: 'false', description: '非禁用非只读且有值时渲染清空按钮，清空后自动回焦' },
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
                helperText="Label 可脱离 FormField 单独通过 htmlFor 绑定控件"
                prefixIcon={withPrefixIcon ? <Globe className="h-3.5 w-3.5" /> : undefined}
              />
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 02：InputNumber & Textarea */}
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

<FormField label="最大并发实例数" size="${numSize}">
  <InputNumber size="${numSize}" value={concurrency} onChange={setConcurrency} min={${minVal}} max={${maxVal}} step={${step}} />
</FormField>

<Textarea label="灰度发布说明" size="${numSize}" rows={${rows}} showCount={${areaShowCount}} maxLength={160} value={note} onChange={(e) => setNote(e.target.value)} />`}
          apiRows={[
            { prop: 'InputNumber.value / onChange', type: 'number | null / (val: number | null) => void', description: '支持清空返回 null，提交时自动按 [min, max] 边界钳制' },
            { prop: 'InputNumber.min / max / step', type: 'number', defaultValue: 'step: 1', description: '步进粒度与上下限，触达边界时自动禁用对应加减按钮' },
            { prop: 'Textarea.rows / mono', type: 'number / boolean', defaultValue: '3 / false', description: '初始可见行数及等宽代码字体开关' },
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
              value={releaseNote}
              onChange={(e) => setReleaseNote(e.target.value)}
            />
          </div>
        </ComponentDocPreview>

        {/* 卡片 03：SearchInput（独立卡片） */}
        <ComponentDocPreview
          title="SearchInput 标准快捷检索输入框"
          components={['SearchInput']}
          description="内置前置放大镜图标与一键清空回焦回调的紧凑检索框，常用于 FilterToolbar、侧栏目录与列表工具栏。"
          onResetKnobs={() => {
            setSearchSize('sm')
            setSearchDisabled(false)
            setSearchKeyword('prod-apac-sg')
          }}
          controls={
            <>
              <KnobSegmented label="size" value={searchSize} options={SIZE_OPTIONS} onChange={setSearchSize} />
              <KnobSwitch label="disabled" checked={searchDisabled} onChange={setSearchDisabled} />
            </>
          }
          code={`import { SearchInput } from '@abc-design/react'

<SearchInput
  size="${searchSize}"
  disabled={${searchDisabled}}
  value={keyword}
  onChange={(e) => setKeyword(e.target.value)}
  onClear={() => setKeyword('')}
  placeholder="搜索服务节点、IP 或任务标识..."
/>`}
          apiRows={[
            { prop: 'value / onChange', type: 'string / ChangeEventHandler<HTMLInputElement>', description: '标准输入事件受控绑定' },
            { prop: 'onClear', type: '() => void', description: '传入回调时自动启用右侧一键清空按钮并自动回焦输入框' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'default'", defaultValue: "'sm'", description: '继承 Input 四档尺寸规格' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="w-full max-w-sm">
              <SearchInput
                size={searchSize}
                disabled={searchDisabled}
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onClear={() => setSearchKeyword('')}
                placeholder="搜索服务节点、IP 或关键字..."
              />
            </div>
            <StatusTag tone="info" dot={false} className="font-mono">
              当前关键词：{searchKeyword || '(已清空)'}
            </StatusTag>
          </div>
        </ComponentDocPreview>

        {/* 卡片 04：ByteQuotaInput & DurationQuotaInput（独立强化卡片） */}
        <ComponentDocPreview
          title="ByteQuotaInput & DurationQuotaInput 存储字节与时长配额折算器"
          components={['ByteQuotaInput', 'DurationQuotaInput']}
          description="右侧单位选择器底层复用设计系统 Select 定制浮层，分别以非负整数 Bytes 与 Seconds 无损双向折算，支持 zeroMeansUnlimited（0 表示无上限）与 formatQuotaBytes / formatQuotaDuration 格式化工具。"
          onResetKnobs={() => {
            setQuotaSize('sm')
            setQuotaLocale('zh')
            setZeroUnlimited(true)
            setQuotaDisabled(false)
            setByteUnitPreset('mgt')
            setDurationUnitPreset('mhd')
            setByteQuota(512 * 1024 * 1024)
            setDurationQuota(3600 * 6)
          }}
          controls={
            <>
              <KnobSegmented
                label="size"
                value={quotaSize}
                options={[
                  { label: 'sm', value: 'sm' },
                  { label: 'default', value: 'default' },
                ]}
                onChange={setQuotaSize}
              />
              <KnobSegmented
                label="locale"
                value={quotaLocale}
                options={[
                  { label: 'zh (中文单位)', value: 'zh' },
                  { label: 'en (English)', value: 'en' },
                ]}
                onChange={setQuotaLocale}
              />
              <KnobSegmented label="Byte 单位集" value={byteUnitPreset} options={BYTE_SET_OPTIONS} onChange={setByteUnitPreset} />
              <KnobSegmented label="Duration 单位集" value={durationUnitPreset} options={DURATION_SET_OPTIONS} onChange={setDurationUnitPreset} />
              <KnobSwitch label="zeroMeansUnlimited" checked={zeroUnlimited} onChange={setZeroUnlimited} />
              <KnobSwitch label="disabled" checked={quotaDisabled} onChange={setQuotaDisabled} />
            </>
          }
          code={`import { ByteQuotaInput, DurationQuotaInput, formatQuotaBytes, formatQuotaDuration } from '@abc-design/react'

<ByteQuotaInput
  size="${quotaSize}"
  locale="${quotaLocale}"
  zeroMeansUnlimited={${zeroUnlimited}}
  allowedUnits={${JSON.stringify(byteUnits)}}
  value={${byteQuota}}
  onChange={setByteQuota}
/>

<DurationQuotaInput
  size="${quotaSize}"
  locale="${quotaLocale}"
  zeroMeansUnlimited={${zeroUnlimited}}
  allowedUnits={${JSON.stringify(durationUnits)}}
  value={${durationQuota}}
  onChange={setDurationQuota}
/>`}
          apiRows={[
            { prop: 'ByteQuotaInput.value / onChange', type: 'number / (bytes: number) => void', required: true, description: '底层绑定非负整数 Bytes，切换单位自动按 1024 幂次无损折算' },
            { prop: 'DurationQuotaInput.value / onChange', type: 'number / (seconds: number) => void', required: true, description: '底层绑定非负整数 Seconds，自动优选最佳时分天单位' },
            { prop: 'zeroMeansUnlimited', type: 'boolean', defaultValue: 'true', description: '为 true 且值为 0 时底部提示显示“无上限 / Unlimited”' },
            { prop: 'size', type: "'default' | 'sm'", defaultValue: "'default'", description: '注意配额控件仅支持标准 (default) 与紧凑 (sm) 两档高度' },
            { prop: 'formatQuotaBytes / formatQuotaDuration', type: '(val, locale?, zeroLabel?) => string', description: '表格/详情只读回显配套智能格式化工具函数' },
          ]}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label size="sm">存储容量配额 (ByteQuotaInput)</Label>
                  <Button size="xs" variant="ghost" onClick={() => setByteQuota(0)}>
                    设为 0 测试无上限
                  </Button>
                </div>
                <ByteQuotaInput
                  key={`${byteUnitPreset}_${quotaLocale}`}
                  size={quotaSize}
                  disabled={quotaDisabled}
                  locale={quotaLocale}
                  zeroMeansUnlimited={zeroUnlimited}
                  allowedUnits={byteUnits}
                  value={byteQuota}
                  onChange={setByteQuota}
                  aria-label="存储容量配额"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label size="sm">任务超时阈值 (DurationQuotaInput)</Label>
                  <Button size="xs" variant="ghost" onClick={() => setDurationQuota(0)}>
                    设为 0 测试无上限
                  </Button>
                </div>
                <DurationQuotaInput
                  key={`${durationUnitPreset}_${quotaLocale}`}
                  size={quotaSize}
                  disabled={quotaDisabled}
                  locale={quotaLocale}
                  zeroMeansUnlimited={zeroUnlimited}
                  allowedUnits={durationUnits}
                  value={durationQuota}
                  onChange={setDurationQuota}
                  aria-label="任务超时时长"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3.5 py-2.5 text-xs">
              <StatusTag tone="primary" dot={false} className="font-mono">
                Bytes: {byteQuota.toLocaleString()} ({formatQuotaBytes(byteQuota, quotaLocale, zeroUnlimited ? '无上限' : undefined)})
              </StatusTag>
              <StatusTag tone="success" dot={false} className="font-mono">
                Seconds: {durationQuota.toLocaleString()} ({formatQuotaDuration(durationQuota, quotaLocale, zeroUnlimited ? '无上限' : undefined)})
              </StatusTag>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default TextAndNumberInputsPage
