import React, { useMemo, useState } from 'react'
import {
  DatePicker,
  DateRangePicker,
  Icon,
  IconPicker,
  Label,
  PageContainer,
  StatusTag,
  TagInput,
  Transfer,
  type AbcMotionPreset,
  type AbcSize,
  type TransferItem,
} from '@abc-design/react'
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
  // Card 1: DatePicker & DateRangePicker
  const [dateSize, setDateSize] = useState<AbcSize>('sm')
  const [dateMotion, setDateMotion] = useState<AbcMotionPreset>('smooth')
  const [dateClearable, setDateClearable] = useState(true)
  const [dateDisabled, setDateDisabled] = useState(false)
  const [singleDate, setSingleDate] = useState('2026-11-17')
  const [rangeDate, setRangeDate] = useState<[string, string]>(['2026-11-01', '2026-11-17'])

  // Card 2: TagInput & IconPicker
  const [maxTags, setMaxTags] = useState<number>(6)
  const [pickerDisabled, setPickerDisabled] = useState(false)
  const [tags, setTags] = useState<string[]>(['多租户', 'RBAC', '零耦合'])
  const [pickedIcon, setPickedIcon] = useState<string>('ShieldCheck')

  // Card 3: Transfer
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

  return (
    <PageContainer
      title="日期区间、标签、图标与穿梭框"
      subtitle="涵盖单日/双月区间选择器 DatePicker / DateRangePicker、回车标签输入 TagInput、可视化图标选择器 IconPicker 与虚拟滚动穿梭框 Transfer。"
    >
      <div className="space-y-5">
        {/* 卡片 1：DatePicker & DateRangePicker */}
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

<DatePicker
  size="${dateSize}"
  motion="${dateMotion}"
  clearable={${dateClearable}}
  disabled={${dateDisabled}}
  value={date}
  onChange={setDate}
/>

<DateRangePicker
  size="${dateSize}"
  motion="${dateMotion}"
  clearable={${dateClearable}}
  disabled={${dateDisabled}}
  value={range}
  onChange={setRange}
/>`}
          apiRows={[
            { prop: 'DatePicker.value / onChange', type: 'string / (dateStr: string) => void', description: '默认 YYYY-MM-DD 格式字符串受控值与变更回调' },
            { prop: 'DateRangePicker.value / onChange', type: '[string, string] | { start?, end? }', description: '自动按传入形态回传元组或对象' },
            { prop: 'shortcuts', type: 'boolean | Shortcut[]', defaultValue: 'true', description: '内置今天/近7天/近30天/本月等快捷预设，传入 false 隐藏' },
            { prop: 'clearable / allowClear', type: 'boolean', defaultValue: 'true', description: '悬停或有值时显示右侧一键清空图标' },
            { prop: 'size / motion / disabled', type: 'ControlSize / AbcMotionPreset / boolean', description: '统一响应四档尺寸、动效预设与禁用态' },
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
              <p className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
                当前值：{singleDate || '(未选)'}
              </p>
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
              <p className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
                当前区间：{JSON.stringify(rangeDate)}
              </p>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2：TagInput & IconPicker */}
        <ComponentDocPreview
          title="TagInput & IconPicker 多标签输入与菜单图标选择器"
          components={['TagInput', 'IconPicker']}
          description="TagInput 支持回车或英文逗号分词、自动去重与退格删除；IconPicker 内置分类检索与拼音首字母筛选，支持受控切换。"
          onResetKnobs={() => {
            setMaxTags(6)
            setPickerDisabled(false)
            setPickedIcon('ShieldCheck')
          }}
          controls={
            <>
              <KnobSegmented
                label="TagInput.maxTags"
                value={maxTags}
                options={[
                  { label: '3', value: 3 },
                  { label: '6', value: 6 },
                  { label: '10', value: 10 },
                ]}
                onChange={setMaxTags}
              />
              <KnobSelect
                label="IconPicker.value"
                value={pickedIcon}
                options={ICON_PRESET_OPTIONS}
                onChange={setPickedIcon}
                widthClass="w-48"
              />
              <KnobSwitch label="disabled" checked={pickerDisabled} onChange={setPickerDisabled} />
            </>
          }
          code={`import { IconPicker, TagInput } from '@abc-design/react'

<TagInput
  value={tags}
  onChange={setTags}
  maxTags={${maxTags}}
  disabled={${pickerDisabled}}
/>

<IconPicker
  value="${pickedIcon}"
  onChange={setIcon}
  disabled={${pickerDisabled}}
  clearable
/>`}
          apiRows={[
            { prop: 'TagInput.value / onChange', type: 'string[] / (tags: string[]) => void', description: '标签数组受控绑定，自动忽略空串与重复项' },
            { prop: 'TagInput.maxTags', type: 'number', defaultValue: '20', description: '最大标签数限制，达到上限后自动锁定输入框' },
            { prop: 'IconPicker.value / onChange', type: 'string / (iconName: string) => void', description: '内联选择框模式的受控图标名与变更回调' },
            { prop: 'IconPicker.open / current / onSelect', type: 'boolean / string / (iconName) => void', description: '兼容器受控弹窗模式：传入 open 后仅渲染 Dialog' },
            { prop: 'clearable / disabled', type: 'boolean', defaultValue: 'clearable: true', description: 'IconPicker 一键清空与整体禁用开关' },
          ]}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label>业务标签输入 (回车或逗号添加)</Label>
                <span className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
                  {tags.length}/{maxTags}
                </span>
              </div>
              <TagInput
                value={tags}
                onChange={setTags}
                maxTags={maxTags}
                disabled={pickerDisabled}
              />
            </div>

            <div className="space-y-1.5">
              <Label>可视化图标选择器 (IconPicker)</Label>
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]">
                  <Icon name={pickedIcon || 'ShieldCheck'} size={16} />
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
              <p className="font-mono text-[11px] text-[var(--abc-fg-muted)]">
                受控图标值：{pickedIcon || '(已清空)'}
              </p>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3：Transfer */}
        <ComponentDocPreview
          title="Transfer 双栏权限穿梭框"
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
  dataSource={dataSource} // 共 ${poolSize} 条
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
            { prop: 'searchable', type: 'boolean', defaultValue: 'true', description: '开启左右独立汉字及拼音首字母搜索框' },
            { prop: 'virtual / listHeight / itemHeight', type: 'boolean / number / number', defaultValue: 'true / 280 / 40', description: '单栏条数 >40 时自动启用虚拟滚动切片渲染' },
            { prop: 'disabled / oneWay', type: 'boolean', defaultValue: 'false', description: '禁用交互 / 单向穿梭（右侧仅保留快捷移除）' },
          ]}
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <StatusTag tone="neutral" dot={false} className="font-mono">
                左侧待选：{leftCount} 项
              </StatusTag>
              <StatusTag tone="primary" dot={false} className="font-mono">
                右侧已选：{rightCount} 项
              </StatusTag>
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
