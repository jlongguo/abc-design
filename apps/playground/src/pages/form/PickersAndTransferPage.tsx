import React, { useMemo, useState } from 'react'
import {
  Button,
  DatePicker,
  DateRangePicker,
  Icon,
  IconPicker,
  Label,
  PageContainer,
  StatusTag,
  TagInput,
  Transfer,
  abcToast,
  mergeTagTokens,
  type AbcMotionPreset,
  type AbcSize,
  type RejectedTagItem,
  type TransferItem,
} from '@abc-design/react'
import { ClipboardPaste, Sparkles } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSelect, KnobSwitch } from '../../components/PropKnobs'

const SIZE_OPTIONS = [
  { label: 'xs', value: 'xs' as const },
  { label: 'sm', value: 'sm' as const },
  { label: 'md', value: 'md' as const },
  { label: 'lg', value: 'lg' as const },
]

const MOTION_OPTIONS = [
  { label: 'none', value: 'none' as const },
  { label: 'subtle', value: 'subtle' as const },
  { label: 'smooth', value: 'smooth' as const },
  { label: 'spring', value: 'spring' as const },
]

const ICON_PRESET_OPTIONS = [
  { label: 'ShieldCheck (角色权限)', value: 'ShieldCheck' },
  { label: 'LayoutDashboard (控制大盘)', value: 'LayoutDashboard' },
  { label: 'Server (服务集群)', value: 'Server' },
  { label: 'Database (数据源)', value: 'Database' },
  { label: 'Settings (系统设置)', value: 'Settings' },
  { label: 'KeyRound (接口鉴权)', value: 'KeyRound' },
]

function buildTransferPool(count: number): TransferItem[] {
  return Array.from({ length: count }, (_, idx) => ({
    key: `perm_${idx + 1}`,
    title:
      idx === 0
        ? '平台架构审批权'
        : idx === 1
          ? '浏览器会话接管权'
          : `细粒度租户能力 #${String(idx + 1).padStart(2, '0')}`,
    description: idx < 3 ? '高敏权限，需双人复核' : undefined,
    disabled: idx === 2,
  }))
}

export const PickersAndTransferPage: React.FC = () => {
  // Card 01: DatePicker & DateRangePicker
  const [dateSize, setDateSize] = useState<AbcSize>('sm')
  const [dateMotion, setDateMotion] = useState<AbcMotionPreset>('smooth')
  const [dateClearable, setDateClearable] = useState(true)
  const [dateDisabled, setDateDisabled] = useState(false)
  const [singleDate, setSingleDate] = useState('2026-11-18')
  const [rangeDate, setRangeDate] = useState<[string, string]>(['2026-11-01', '2026-11-18'])

  // Card 02: TagInput (Enterprise enhanced)
  const [tagSize, setTagSize] = useState<AbcSize>('sm')
  const [maxTags, setMaxTags] = useState<number>(6)
  const [tagShowCount, setTagShowCount] = useState(true)
  const [tagClearable, setTagClearable] = useState(true)
  const [tagMono, setTagMono] = useState(false)
  const [tagReadOnly, setTagReadOnly] = useState(false)
  const [tagDisabled, setTagDisabled] = useState(false)
  const [tags, setTags] = useState<string[]>(['multi-tenant', 'rbac-v2', 'egress-gate'])
  const [rejectNotice, setRejectNotice] = useState<string>('支持粘贴含中英文逗号/分号/换行的多标签文本')

  // Card 03: IconPicker
  const [pickerDisabled, setPickerDisabled] = useState(false)
  const [pickedIcon, setPickedIcon] = useState<string>('ShieldCheck')
  const [modalIconOpen, setModalIconOpen] = useState(false)

  // Card 04: Transfer
  const [trSearchable, setTrSearchable] = useState(true)
  const [trVirtual, setTrVirtual] = useState(true)
  const [trDisabled, setTrDisabled] = useState(false)
  const [poolSize, setPoolSize] = useState<number>(64)
  const [targetKeys, setTargetKeys] = useState<string[]>(['perm_1', 'perm_4', 'perm_7'])

  const dataSource = useMemo(() => buildTransferPool(poolSize), [poolSize])
  const dataKeySet = useMemo(() => new Set(dataSource.map((item) => item.key)), [dataSource])
  const rightCount = useMemo(
    () => targetKeys.filter((k) => dataKeySet.has(k)).length,
    [targetKeys, dataKeySet]
  )
  const leftCount = dataSource.length - rightCount

  const handleRejectedTags = (rejected: RejectedTagItem[]) => {
    const summary = rejected.map((r) => `"${r.tag}" (${r.reason})`).join(', ')
    setRejectNotice(`已拦截不合规或超限标签：${summary}`)
    abcToast.warning(`部分标签被拦截：${summary}`)
  }

  const simulateBulkPaste = () => {
    const res = mergeTagTokens(
      tags,
      ['canary-pool', 'sg-zone-a', 'multi-tenant', 'bad tag with space'],
      {
        maxTags,
        allowDuplicates: false,
        validateTag: (tok) => (/\s/.test(tok) ? '标签内不允许包含空白字符' : true),
      }
    )
    setTags(res.nextTags)
    if (res.rejected.length > 0) {
      handleRejectedTags(res.rejected)
    } else {
      setRejectNotice('批量合并成功，无冲突项')
    }
  }

  return (
    <PageContainer
      title="日期区间、多标签分词、图标选择与穿梭框"
      subtitle="按职责拆分为 4 组独立组件画布：双月日历 DatePicker、批量分词校验 TagInput、图标检索 IconPicker 与虚拟滚动 Transfer。"
      breadcrumbs={[{ label: '表单录入与选择器' }, { label: '日期、多标签、图标与穿梭框' }]}
    >
      <div className="space-y-6">
        {/* 卡片 01：DatePicker & DateRangePicker */}
        <ComponentDocPreview
          title="DatePicker & DateRangePicker 单日与双月区间选择器"
          components={['DatePicker', 'DateRangePicker']}
          description="基于 @abc-design/core 42 格月历算法与 Portal 定位，支持快捷预设胶囊、双面板悬停预览与反向点击自动排序。"
          onResetKnobs={() => {
            setDateSize('sm')
            setDateMotion('smooth')
            setDateClearable(true)
            setDateDisabled(false)
          }}
          controls={
            <>
              <KnobSegmented label="size" value={dateSize} options={SIZE_OPTIONS} onChange={setDateSize} />
              <KnobSegmented label="motion" value={dateMotion} options={MOTION_OPTIONS} onChange={setDateMotion} />
              <KnobSwitch label="clearable" checked={dateClearable} onChange={setDateClearable} />
              <KnobSwitch label="disabled" checked={dateDisabled} onChange={setDateDisabled} />
            </>
          }
          code={`import { DatePicker, DateRangePicker } from '@abc-design/react'

<DatePicker size="${dateSize}" motion="${dateMotion}" clearable={${dateClearable}} disabled={${dateDisabled}} value={date} onChange={setDate} />
<DateRangePicker size="${dateSize}" motion="${dateMotion}" clearable={${dateClearable}} disabled={${dateDisabled}} value={range} onChange={setRange} />`}
          apiRows={[
            { prop: 'DatePicker.value / onChange', type: 'string / (dateStr: string) => void', description: '默认 YYYY-MM-DD 格式字符串受控值与变更回调' },
            { prop: 'DateRangePicker.value / onChange', type: '[string, string] | { start?, end? }', description: '自动按传入形态回传元组或对象' },
            { prop: 'shortcuts', type: 'boolean | Shortcut[]', defaultValue: 'true', description: '内置今天/近7天/近30天/本月等快捷预设，传入 false 隐藏' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label size={dateSize}>单日选择 (DatePicker)</Label>
              <DatePicker
                size={dateSize}
                motion={dateMotion}
                clearable={dateClearable}
                disabled={dateDisabled}
                value={singleDate}
                onChange={setSingleDate}
              />
              <p className="font-mono text-[11px] text-[var(--abc-fg-muted)]">当前值：{singleDate || '(未选)'}</p>
            </div>
            <div className="space-y-1.5">
              <Label size={dateSize}>双月日期区间 (DateRangePicker)</Label>
              <DateRangePicker
                size={dateSize}
                motion={dateMotion}
                clearable={dateClearable}
                disabled={dateDisabled}
                value={rangeDate}
                onChange={setRangeDate}
              />
              <p className="font-mono text-[11px] text-[var(--abc-fg-muted)]">当前区间：{JSON.stringify(rangeDate)}</p>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 02：TagInput（独立增强卡片） */}
        <ComponentDocPreview
          title="TagInput 多分隔符粘贴分词与校验胶囊输入框"
          components={['TagInput']}
          description="基于 @abc-design/core 纯算法分词内核：默认支持中英文逗号、分号、换行粘贴自动拆词 (splitOnPaste)、去重、自定义正则校验 (validateTag) 与拒绝明细回调 (onReject)，达上限时仍允许 Backspace 删除。"
          onResetKnobs={() => {
            setTagSize('sm')
            setMaxTags(6)
            setTagShowCount(true)
            setTagClearable(true)
            setTagMono(false)
            setTagReadOnly(false)
            setTagDisabled(false)
            setTags(['multi-tenant', 'rbac-v2', 'egress-gate'])
          }}
          controls={
            <>
              <KnobSegmented label="size" value={tagSize} options={SIZE_OPTIONS} onChange={setTagSize} />
              <KnobSegmented
                label="maxTags"
                value={maxTags}
                options={[
                  { label: '4', value: 4 },
                  { label: '6', value: 6 },
                  { label: '10', value: 10 },
                ]}
                onChange={setMaxTags}
              />
              <KnobSwitch label="showCount" checked={tagShowCount} onChange={setTagShowCount} />
              <KnobSwitch label="allowClear" checked={tagClearable} onChange={setTagClearable} />
              <KnobSwitch label="mono" checked={tagMono} onChange={setTagMono} />
              <KnobSwitch label="readOnly" checked={tagReadOnly} onChange={setTagReadOnly} />
              <KnobSwitch label="disabled" checked={tagDisabled} onChange={setTagDisabled} />
            </>
          }
          code={`import { TagInput } from '@abc-design/react'

<TagInput
  label="路由准入标签白名单"
  size="${tagSize}"
  value={tags}
  onChange={setTags}
  maxTags={${maxTags}}
  maxTagLength={24}
  showCount={${tagShowCount}}
  allowClear={${tagClearable}}
  mono={${tagMono}}
  readOnly={${tagReadOnly}}
  disabled={${tagDisabled}}
  validateTag={(tok) => (/\\s/.test(tok) ? '标签禁止包含空格' : true)}
  onReject={(rejected) => console.warn(rejected)}
/>`}
          apiRows={[
            { prop: 'value / onChange', type: 'string[] / (tags: string[]) => void', description: '受控标签数组绑定（等价支持 onValueChange）' },
            { prop: 'separators / splitOnPaste', type: 'ReadonlyArray<string> | RegExp / boolean', defaultValue: 'DEFAULT_TAG_SEPARATORS / true', description: '支持逗号、中文逗号、分号、制表符与换行实时拆词及整段粘贴拆分' },
            { prop: 'maxTags / maxTagLength / showCount', type: 'number / number / boolean', description: '最大标签数、单标签字符上限及底部计数器开关' },
            { prop: 'validateTag / onReject', type: '(tag, current) => boolean | string / (rejected) => void', description: '自定义校验钩子及被去重/超限/校验拒绝条目的回执通知' },
          ]}
        >
          <div className="space-y-3">
            <TagInput
              label="路由准入标签白名单（禁止空格，回车或逗号确认）"
              size={tagSize}
              value={tags}
              onChange={setTags}
              maxTags={maxTags}
              maxTagLength={24}
              showCount={tagShowCount}
              allowClear={tagClearable}
              mono={tagMono}
              readOnly={tagReadOnly}
              disabled={tagDisabled}
              placeholder="输入标签后按 Enter 或粘贴逗号分隔文本..."
              validateTag={(tok) => (/\s/.test(tok) ? '标签内不允许包含空白字符' : true)}
              onReject={handleRejectedTags}
              helperText={rejectNotice}
            />
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="xs"
                variant="secondary"
                leftIcon={<ClipboardPaste className="h-3.5 w-3.5" />}
                disabled={tagDisabled || tagReadOnly}
                onClick={simulateBulkPaste}
              >
                模拟粘贴混合标签（含重复项与带空格非法项）
              </Button>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 03：IconPicker（独立卡片） */}
        <ComponentDocPreview
          title="IconPicker 可视化菜单图标选择器"
          components={['IconPicker']}
          description="内置图标分类切换与拼音首字母检索，同时支持表单内联下拉框模式与独立受控模态框模式 (open / onSelect)。"
          onResetKnobs={() => {
            setPickerDisabled(false)
            setPickedIcon('ShieldCheck')
          }}
          controls={
            <>
              <KnobSelect
                label="预设图标"
                value={pickedIcon}
                options={ICON_PRESET_OPTIONS}
                onChange={setPickedIcon}
                widthClass="w-48"
              />
              <KnobSwitch label="disabled" checked={pickerDisabled} onChange={setPickerDisabled} />
            </>
          }
          code={`import { IconPicker } from '@abc-design/react'

// 1. 表单内联选择框模式
<IconPicker value="${pickedIcon}" onChange={setIcon} disabled={${pickerDisabled}} clearable />

// 2. 受控独立弹窗模式
<IconPicker open={modalOpen} current="${pickedIcon}" onClose={() => setModalOpen(false)} onSelect={setIcon} />`}
          apiRows={[
            { prop: 'value / onChange', type: 'string / (iconName: string) => void', description: '内联选择框模式的受控图标名与变更回调' },
            { prop: 'open / current / onSelect', type: 'boolean / string / (iconName) => void', description: '受控弹窗模式：传入 open 后仅渲染图标库选择 Dialog' },
            { prop: 'clearable / disabled', type: 'boolean', defaultValue: 'clearable: true', description: '一键清空与整体禁用开关' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex min-w-64 flex-1 items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]">
                <Icon name={pickedIcon || 'ShieldCheck'} size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <IconPicker
                  value={pickedIcon}
                  onChange={setPickedIcon}
                  disabled={pickerDisabled}
                  clearable
                />
              </div>
            </div>

            <Button
              size="sm"
              variant="outline"
              leftIcon={<Sparkles className="h-3.5 w-3.5" />}
              disabled={pickerDisabled}
              onClick={() => setModalIconOpen(true)}
            >
              以受控弹窗模式唤起图标库
            </Button>

            <IconPicker
              open={modalIconOpen}
              current={pickedIcon}
              onClose={() => setModalIconOpen(false)}
              onSelect={(next) => {
                setPickedIcon(next)
                setModalIconOpen(false)
              }}
            />
          </div>
        </ComponentDocPreview>

        {/* 卡片 04：Transfer */}
        <ComponentDocPreview
          title="Transfer 双栏权限虚拟滚动穿梭框"
          components={['Transfer']}
          description="支持拼音首字母检索、全选/反选、禁用项保护，当单栏列表超过 40 条且 virtual=true 时自动开启固定行高虚拟滚动。"
          onResetKnobs={() => {
            setTrSearchable(true)
            setTrVirtual(true)
            setTrDisabled(false)
            setPoolSize(64)
          }}
          controls={
            <>
              <KnobSegmented
                label="候选项规模"
                value={poolSize}
                options={[
                  { label: '12 条标准', value: 12 },
                  { label: '64 条压测', value: 64 },
                ]}
                onChange={setPoolSize}
              />
              <KnobSwitch label="searchable" checked={trSearchable} onChange={setTrSearchable} />
              <KnobSwitch label="virtual" checked={trVirtual} onChange={setTrVirtual} />
              <KnobSwitch label="disabled" checked={trDisabled} onChange={setTrDisabled} />
            </>
          }
          code={`import { Transfer } from '@abc-design/react'

<Transfer
  label="分配租户权限项"
  dataSource={dataSource}
  targetKeys={targetKeys}
  onChange={(nextKeys) => setTargetKeys(nextKeys)}
  searchable={${trSearchable}}
  virtual={${trVirtual}}
  disabled={${trDisabled}}
  titles={['待分配能力', '已授权能力']}
/>`}
          apiRows={[
            { prop: 'dataSource', type: 'TransferItem[]', required: true, description: '全量候选项列表（key, title, description?, disabled?）' },
            { prop: 'targetKeys / onChange', type: 'string[] / (nextTargetKeys, direction, moveKeys) => void', description: '右侧已选键集合及穿梭变更回调' },
            { prop: 'virtual / listHeight / itemHeight', type: 'boolean / number / number', defaultValue: 'true / 280 / 40', description: '单栏条数 >40 时自动启用虚拟滚动切片渲染' },
          ]}
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <StatusTag tone="neutral" dot={false} className="font-mono">左侧待选：{leftCount} 项</StatusTag>
              <StatusTag tone="primary" dot={false} className="font-mono">右侧已选：{rightCount} 项</StatusTag>
              <StatusTag tone={trVirtual && leftCount > 40 ? 'success' : 'info'} dot={false}>
                {trVirtual && leftCount > 40 ? '虚拟滚动窗口已激活 (>40)' : '常规列表渲染'}
              </StatusTag>
            </div>
            <Transfer
              dataSource={dataSource}
              targetKeys={targetKeys}
              onChange={(nextKeys) => setTargetKeys(nextKeys)}
              searchable={trSearchable}
              virtual={trVirtual}
              disabled={trDisabled}
              titles={['待分配能力', '已授权能力']}
            />
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default PickersAndTransferPage
