import React, { useState } from 'react'
import {
  Button,
  CheckableTag,
  CheckableTagGroup,
  Checkbox,
  PageContainer,
  RadioGroup,
  StatusTag,
  Switch,
  type AbcMotionPreset,
  type AbcSize,
  type CheckableTagOption,
} from '@abc-design/react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

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

const SCOPE_OPTIONS = [
  { value: 'jobs:read', label: 'jobs:read' },
  { value: 'jobs:write', label: 'jobs:write' },
  { value: 'artifacts:read', label: 'artifacts:read' },
  { value: 'secrets:use', label: 'secrets:use' },
]

export const SelectionControlsPage: React.FC = () => {
  // Card 1: Switch
  const [swSize, setSwSize] = useState<AbcSize>('md')
  const [swMotion, setSwMotion] = useState<AbcMotionPreset>('smooth')
  const [swLoading, setSwLoading] = useState(false)
  const [swDisabled, setSwDisabled] = useState(false)
  const [withLabelDesc, setWithLabelDesc] = useState(true)
  const [withStateLabels, setWithStateLabels] = useState(true)
  const [swChecked, setSwChecked] = useState(true)

  // Card 2: Checkbox & RadioGroup
  const [selSize, setSelSize] = useState<AbcSize>('sm')
  const [selMotion, setSelMotion] = useState<AbcMotionPreset>('smooth')
  const [selDisabled, setSelDisabled] = useState(false)
  const [indeterminate, setIndeterminate] = useState(true)
  const [withDescription, setWithDescription] = useState(true)
  const [radioVariant, setRadioVariant] = useState<'default' | 'segmented'>('default')
  const [parentChecked, setParentChecked] = useState(false)
  const [subChecks, setSubChecks] = useState({ read: true, write: false })
  const [clusterTier, setClusterTier] = useState<string>('standard')

  // Card 3: CheckableTag & CheckableTagGroup
  const [tagSize, setTagSize] = useState<'sm' | 'md'>('md')
  const [disableBillingTag, setDisableBillingTag] = useState(true)
  const [auditSigned, setAuditSigned] = useState(true)
  const [selectedScopes, setSelectedScopes] = useState<string[]>(['jobs:read', 'artifacts:read'])

  const groupOptions: Array<CheckableTagOption<string>> = [
    ...SCOPE_OPTIONS,
    {
      value: 'billing:admin',
      label: disableBillingTag ? 'billing:admin (受限)' : 'billing:admin',
      disabled: disableBillingTag,
    },
  ]

  const handleSelectAllTags = () => {
    setSelectedScopes(groupOptions.filter((o) => !o.disabled).map((o) => o.value))
  }

  return (
    <PageContainer
      title="开关、单复选与可选标签"
      subtitle="涵盖拨动开关 Switch、复选框 Checkbox（含半选态）、双模式单选组 RadioGroup 及可勾选胶囊标签 CheckableTag / CheckableTagGroup。"
    >
      <div className="space-y-5">
        {/* 卡片 1：Switch 独立卡片 */}
        <ComponentDocPreview
          title="Switch 拨动开关"
          components={['Switch']}
          description="支持四档高度尺寸、动效预设、异步 loading 防重入锁、标签与描述双行布局以及无障碍 checkedLabel / uncheckedLabel 状态读屏。"
          onResetKnobs={() => {
            setSwSize('md')
            setSwMotion('smooth')
            setSwLoading(false)
            setSwDisabled(false)
            setWithLabelDesc(true)
            setWithStateLabels(true)
          }}
          controls={
            <>
              <KnobSegmented label="size" value={swSize} options={SIZE_OPTIONS} onChange={setSwSize} />
              <KnobSegmented label="motion" value={swMotion} options={MOTION_OPTIONS} onChange={setSwMotion} />
              <KnobSwitch label="loading" checked={swLoading} onChange={setSwLoading} />
              <KnobSwitch label="disabled" checked={swDisabled} onChange={setSwDisabled} />
              <KnobSwitch label="withLabelDesc" checked={withLabelDesc} onChange={setWithLabelDesc} />
              <KnobSwitch
                label="checkedLabel/uncheckedLabel"
                checked={withStateLabels}
                onChange={setWithStateLabels}
              />
            </>
          }
          code={`import { Switch } from '@abc-design/react'

<Switch
  size="${swSize}"
  motion="${swMotion}"
  checked={checked}
  onChange={setChecked}
  loading={${swLoading}}
  disabled={${swDisabled}}${withLabelDesc ? '\n  label="启用沙箱 WebP 会话录像"\n  description="开启后自动采集会话关键帧并写入加密归档桶"' : ''}${withStateLabels ? '\n  checkedLabel="已开启"\n  uncheckedLabel="已关闭"' : ''}
/>`}
          apiRows={[
            { prop: 'checked / onChange', type: 'boolean / (checked: boolean) => void', description: '受控开关状态与变更回调（兼容 onCheckedChange）' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'small' | 'default'", defaultValue: "'md'", description: '轨道与滑块尺寸，兼容旧版 small / default 别名' },
            { prop: 'motion', type: "'none' | 'subtle' | 'smooth' | 'spring'", defaultValue: "'smooth'", description: '滑块位移动效预设' },
            { prop: 'loading', type: 'boolean', defaultValue: 'false', description: '异步提交中显示旋转指示器并自动阻塞重复点击' },
            { prop: 'label / description', type: 'ReactNode', description: '右侧主标题与辅助说明文本，自动关联 aria-labelledby' },
            { prop: 'checkedLabel / uncheckedLabel', type: 'ReactNode', description: '注入无障碍 sr-only 语义文案（兼容 checkedChildren / unCheckedChildren）' },
          ]}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Switch
              size={swSize}
              motion={swMotion}
              loading={swLoading}
              disabled={swDisabled}
              checked={swChecked}
              onChange={setSwChecked}
              label={withLabelDesc ? '启用沙箱 WebP 会话录像' : undefined}
              description={withLabelDesc ? '开启后自动采集关键操作帧并同步归档至对象存储' : undefined}
              checkedLabel={withStateLabels ? '已开启' : undefined}
              uncheckedLabel={withStateLabels ? '已关闭' : undefined}
              ariaLabel={!withLabelDesc ? '启用沙箱录像' : undefined}
            />
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <StatusTag tone={swChecked ? 'success' : 'neutral'} dot>
                当前状态：{swChecked ? (withStateLabels ? '已开启 (true)' : 'true') : (withStateLabels ? '已关闭 (false)' : 'false')}
              </StatusTag>
              {swLoading && <StatusTag tone="warning">异步锁保护中</StatusTag>}
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2：Checkbox & RadioGroup 独立卡片 */}
        <ComponentDocPreview
          title="Checkbox & RadioGroup 复选框与单选组"
          components={['Checkbox', 'RadioGroup']}
          description="Checkbox 原生同步 DOM indeterminate 半选态并支持描述副标题；RadioGroup 支持传统圆点与分段胶囊 (segmented) 双外观。"
          onResetKnobs={() => {
            setSelSize('sm')
            setSelMotion('smooth')
            setSelDisabled(false)
            setIndeterminate(true)
            setWithDescription(true)
            setRadioVariant('default')
          }}
          controls={
            <>
              <KnobSegmented label="size" value={selSize} options={SIZE_OPTIONS} onChange={setSelSize} />
              <KnobSegmented label="motion" value={selMotion} options={MOTION_OPTIONS} onChange={setSelMotion} />
              <KnobSegmented
                label="RadioGroup.variant"
                value={radioVariant}
                options={[
                  { label: 'default', value: 'default' },
                  { label: 'segmented', value: 'segmented' },
                ]}
                onChange={setRadioVariant}
              />
              <KnobSwitch label="indeterminate" checked={indeterminate} onChange={setIndeterminate} />
              <KnobSwitch label="withDescription" checked={withDescription} onChange={setWithDescription} />
              <KnobSwitch label="disabled" checked={selDisabled} onChange={setSelDisabled} />
            </>
          }
          code={`import { Checkbox, RadioGroup } from '@abc-design/react'

<Checkbox
  size="${selSize}"
  motion="${selMotion}"
  checked={checked}
  indeterminate={${indeterminate}}
  disabled={${selDisabled}}
  onChange={setChecked}
  label="全选沙箱能力矩阵"${withDescription ? '\n  description="支持半选态 indeterminate 自动计算与键盘无障碍操作"' : ''}
/>

<RadioGroup
  variant="${radioVariant}"
  size="${selSize}"
  motion="${selMotion}"
  disabled={${selDisabled}}
  value={tier}
  onChange={(val) => setTier(String(val))}
  options={[
    { label: '轻量 fast-cdp', value: 'fast' },
    { label: '标准 chromium', value: 'standard' },
    { label: '专享物理集群 (维护中)', value: 'dedicated', disabled: true },
  ]}
/>`}
          apiRows={[
            { prop: 'Checkbox.checked / indeterminate', type: 'boolean', defaultValue: 'false', description: '受控勾选态及独立半选横杠状态（同步至 input.indeterminate）' },
            { prop: 'Checkbox.onChange', type: '(checked: boolean, e: ChangeEvent) => void', description: '状态变更回调（同时支持 onCheckedChange）' },
            { prop: 'Checkbox.label / description', type: 'ReactNode', description: '主标签与下方辅助说明文本' },
            { prop: 'RadioGroup.variant', type: "'default' | 'segmented'", defaultValue: "'default'", description: '标准单选圆点列表或分段胶囊选择器' },
            { prop: 'RadioGroup.options', type: 'Array<{ label, value, disabled? }>', required: true, description: '选项定义，单项可独立设置 disabled' },
            { prop: 'size / motion / disabled', type: 'AbcSize / AbcMotionPreset / boolean', description: '两者统一响应四档尺寸、动效预设与全局禁用' },
          ]}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] p-3.5">
              <Checkbox
                size={selSize}
                motion={selMotion}
                disabled={selDisabled}
                checked={parentChecked}
                indeterminate={indeterminate}
                onChange={(next) => {
                  setParentChecked(next)
                  setIndeterminate(false)
                  setSubChecks({ read: next, write: next })
                }}
                label="全选策略能力 (主控复选框)"
                description={
                  withDescription ? '点击主项或下方子项，实时联动切换全选与半选状态' : undefined
                }
              />
              <div className="ml-6 flex flex-wrap gap-4 border-l border-[var(--abc-border)] pl-3">
                <Checkbox
                  size={selSize}
                  motion={selMotion}
                  disabled={selDisabled}
                  checked={subChecks.read}
                  label="只读审计"
                  onChange={(next) => {
                    const updated = { ...subChecks, read: next }
                    setSubChecks(updated)
                    setParentChecked(updated.read && updated.write)
                    setIndeterminate(updated.read !== updated.write)
                  }}
                />
                <Checkbox
                  size={selSize}
                  motion={selMotion}
                  disabled={selDisabled}
                  checked={subChecks.write}
                  label="执行下推"
                  onChange={(next) => {
                    const updated = { ...subChecks, write: next }
                    setSubChecks(updated)
                    setParentChecked(updated.read && updated.write)
                    setIndeterminate(updated.read !== updated.write)
                  }}
                />
              </div>
            </div>

            <div className="space-y-2.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] p-3.5">
              <div className="text-xs font-medium text-[var(--abc-fg-secondary)]">
                沙箱引擎规格 ({radioVariant})
              </div>
              <RadioGroup
                variant={radioVariant}
                size={selSize}
                motion={selMotion}
                disabled={selDisabled}
                value={clusterTier}
                onChange={(val) => setClusterTier(String(val))}
                options={[
                  { label: '轻量 fast-cdp', value: 'fast' },
                  { label: '标准 chromium', value: 'standard' },
                  { label: '专享物理集群', value: 'dedicated', disabled: true },
                ]}
              />
              <div className="text-[11px] text-[var(--abc-fg-muted)]">
                当前选中档位：<code className="font-mono text-[var(--abc-primary)]">{clusterTier}</code>
              </div>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3：CheckableTag & CheckableTagGroup */}
        <ComponentDocPreview
          title="CheckableTag & CheckableTagGroup 可选胶囊标签"
          components={['CheckableTag', 'CheckableTagGroup']}
          description="适合 API 作用域、过滤器多选或快捷状态开关的胶囊标签体系，内置等宽字体切换与单项禁用隔离。"
          onResetKnobs={() => {
            setTagSize('md')
            setDisableBillingTag(true)
          }}
          controls={
            <>
              <KnobSegmented
                label="size"
                value={tagSize}
                options={[
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                ]}
                onChange={setTagSize}
              />
              <KnobSwitch
                label="disableBillingTag"
                checked={disableBillingTag}
                onChange={setDisableBillingTag}
              />
            </>
          }
          code={`import { CheckableTag, CheckableTagGroup } from '@abc-design/react'

<CheckableTag
  size="${tagSize}"
  checked={auditSigned}
  onCheckedChange={setAuditSigned}
  label="启用审计签名"
/>

<CheckableTagGroup
  size="${tagSize}"
  value={selectedScopes}
  onValueChange={setSelectedScopes}
  options={[
    { value: 'jobs:read', label: 'jobs:read' },
    { value: 'jobs:write', label: 'jobs:write' },
    { value: 'artifacts:read', label: 'artifacts:read' },
    { value: 'secrets:use', label: 'secrets:use' },
    { value: 'billing:admin', label: 'billing:admin', disabled: ${disableBillingTag} },
  ]}
/>`}
          apiRows={[
            { prop: 'CheckableTag.checked / onCheckedChange', type: 'boolean / (checked: boolean) => void', defaultValue: 'false', description: '受控勾选态及变更回调（兼容原生 onChange）' },
            { prop: 'CheckableTag.label / children', type: 'ReactNode', description: '标签显示文本，优先渲染 children' },
            { prop: 'CheckableTagGroup.options', type: 'ReadonlyArray<T | CheckableTagOption<T>>', required: true, description: '支持字符串简写或 { value, label, disabled } 对象数组' },
            { prop: 'CheckableTagGroup.value / onValueChange', type: 'ReadonlyArray<T> / (next: T[]) => void', description: '受控多选值数组与更新回调（兼容 values / onValuesChange）' },
            { prop: 'size / mono', type: "'sm' | 'md' / boolean", defaultValue: "size: 'md', mono: true", description: '胶囊大小档位及是否应用等宽字体' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CheckableTag
                size={tagSize}
                checked={auditSigned}
                onCheckedChange={setAuditSigned}
                label="独立开关：启用请求体审计签名"
              />
              <div className="flex items-center gap-2">
                <Button size="xs" variant="secondary" onClick={handleSelectAllTags}>
                  全选可用权限
                </Button>
                <Button size="xs" variant="ghost" onClick={() => setSelectedScopes([])}>
                  清空已选
                </Button>
              </div>
            </div>

            <CheckableTagGroup
              size={tagSize}
              value={selectedScopes}
              onValueChange={setSelectedScopes}
              options={groupOptions}
            />

            <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2 font-mono text-[11px] text-[var(--abc-fg-secondary)]">
              已选作用域 ({selectedScopes.length})：{JSON.stringify(selectedScopes)}
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default SelectionControlsPage
