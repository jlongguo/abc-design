import React, { useState } from 'react'
import {
  Button,
  PageContainer,
  SegmentedControl,
  StatusTag,
  abcToast,
  buttonVariants,
  type AbcMotionPreset,
  type AbcSize,
  type ButtonVariant,
} from '@abc-design/react'
import { Activity, ArrowRight, Calendar, Clock, Download, Sparkles } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSelect, KnobSwitch, KnobText } from '../../components/PropKnobs'

const ALL_VARIANTS: ReadonlyArray<{ label: string; value: ButtonVariant }> = [
  { label: 'primary', value: 'primary' },
  { label: 'secondary', value: 'secondary' },
  { label: 'outline', value: 'outline' },
  { label: 'danger', value: 'danger' },
  { label: 'warning', value: 'warning' },
  { label: 'success', value: 'success' },
  { label: 'ghost', value: 'ghost' },
  { label: 'text', value: 'text' },
  { label: 'link', value: 'link' },
]

export const ButtonsAndSegmentedPage: React.FC = () => {
  // 1. Button Knobs
  const [variant, setVariant] = useState<ButtonVariant>('primary')
  const [btnSize, setBtnSize] = useState<AbcSize>('sm')
  const [btnMotion, setBtnMotion] = useState<AbcMotionPreset>('smooth')
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('导出处理中…')
  const [disabled, setDisabled] = useState(false)
  const [block, setBlock] = useState(false)
  const [iconOnly, setIconOnly] = useState(false)
  const [hasLeftIcon, setHasLeftIcon] = useState(true)
  const [hasRightIcon, setHasRightIcon] = useState(false)

  // 2. SegmentedControl Knobs
  const [segValue, setSegValue] = useState<'realtime' | 'hourly' | 'daily' | 'weekly'>('hourly')
  const [segSize, setSegSize] = useState<AbcSize>('sm')
  const [segMotion, setSegMotion] = useState<AbcMotionPreset>('smooth')
  const [segBlock, setSegBlock] = useState(false)
  const [segDisabled, setSegDisabled] = useState(false)
  const [showIcons, setShowIcons] = useState(true)
  const [showBadges, setShowBadges] = useState(true)

  return (
    <PageContainer
      title="按钮与分段控制器"
      subtitle="基于语义 Token 驱动的通用按钮 Button（9 种语义变体 + buttonVariants 工具类）与互斥分段选择器 SegmentedControl。"
    >
      <div className="space-y-5">
        {/* 卡片 1: Button */}
        <ComponentDocPreview
          title="Button 语义操作按钮"
          components={['Button', 'buttonVariants']}
          description="对齐全局控制高度与微交互动效规格，支持 9 种语义色板、加载替代文案、前后置图标、纯图标方形形态及通栏铺满布局。"
          controls={
            <>
              <KnobSelect label="variant" value={variant} onChange={setVariant} options={ALL_VARIANTS} widthClass="w-32" />
              <KnobSegmented
                label="size"
                value={btnSize}
                onChange={setBtnSize}
                options={[
                  { label: 'xs', value: 'xs' },
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                ]}
              />
              <KnobSegmented
                label="motion"
                value={btnMotion}
                onChange={setBtnMotion}
                options={[
                  { label: 'none', value: 'none' },
                  { label: 'subtle', value: 'subtle' },
                  { label: 'smooth', value: 'smooth' },
                  { label: 'spring', value: 'spring' },
                ]}
              />
              <KnobSwitch label="loading" checked={loading} onChange={setLoading} />
              <KnobText label="loadingText" value={loadingText} onChange={setLoadingText} widthClass="w-32" />
              <KnobSwitch label="disabled" checked={disabled} onChange={setDisabled} />
              <KnobSwitch label="block" checked={block} onChange={setBlock} />
              <KnobSwitch label="iconOnly" checked={iconOnly} onChange={setIconOnly} />
              <KnobSwitch label="leftIcon" checked={hasLeftIcon} onChange={setHasLeftIcon} />
              <KnobSwitch label="rightIcon" checked={hasRightIcon} onChange={setHasRightIcon} />
            </>
          }
          onResetKnobs={() => {
            setVariant('primary')
            setBtnSize('sm')
            setBtnMotion('smooth')
            setLoading(false)
            setLoadingText('导出处理中…')
            setDisabled(false)
            setBlock(false)
            setIconOnly(false)
            setHasLeftIcon(true)
            setHasRightIcon(false)
          }}
          code={`import { Button, buttonVariants } from '@abc-design/react'
import { Download, ArrowRight } from 'lucide-react'

<Button
  variant="${variant}"
  size="${btnSize}"
  motion="${btnMotion}"${loading ? `\n  loading\n  loadingText="${loadingText}"` : ''}${disabled ? '\n  disabled' : ''}${block ? '\n  block' : ''}${iconOnly ? '\n  iconOnly\n  aria-label="导出财务报表"' : ''}${!iconOnly && hasLeftIcon ? '\n  leftIcon={<Download className="h-3.5 w-3.5" />}' : ''}${!iconOnly && hasRightIcon ? '\n  rightIcon={<ArrowRight className="h-3.5 w-3.5" />}' : ''}
>
  ${iconOnly ? '<Download className="h-3.5 w-3.5" />' : '导出财务对账报表'}
</Button>

{/* buttonVariants 可直接用于原生 <a> 链接 */}
<a href="#top" className={buttonVariants({ variant: '${variant}', size: '${btnSize}' })}>原生链接复用样式</a>`}
          apiRows={[
            { prop: 'variant', type: "'primary' | 'secondary' | 'outline' | 'danger' | 'warning' | 'success' | 'ghost' | 'text' | 'link'", defaultValue: "'primary'", description: '9 种核心视觉语义变体（并兼容 default / destructive）' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'default' | 'icon' | 'icon-sm'", defaultValue: "'sm'", description: '绑定 --abc-control-h-*，支持继承全局 componentSize' },
            { prop: 'motion', type: "'none' | 'subtle' | 'smooth' | 'spring'", defaultValue: "'smooth'", description: '按压微缩与过渡阻尼动效预设' },
            { prop: 'loading / loadingText', type: 'boolean / ReactNode', defaultValue: 'false', description: '加载态自动渲染转圈图标并禁用交互，可选替换展示文案' },
            { prop: 'disabled / block / iconOnly', type: 'boolean', defaultValue: 'false', description: '禁用状态、宽度 100% 撑满、正方形纯图标按钮（需配合 aria-label）' },
            { prop: 'leftIcon / rightIcon', type: 'ReactNode', description: '按钮前后置图标插槽（iconOnly 模式下忽略）' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4">
              <Button
                variant={variant}
                size={btnSize}
                motion={btnMotion}
                loading={loading}
                loadingText={loadingText || undefined}
                disabled={disabled}
                block={block}
                iconOnly={iconOnly}
                leftIcon={!iconOnly && hasLeftIcon ? <Download className="h-3.5 w-3.5" /> : undefined}
                rightIcon={!iconOnly && hasRightIcon ? <ArrowRight className="h-3.5 w-3.5" /> : undefined}
                aria-label={iconOnly ? '导出财务对账报表' : undefined}
                onClick={() => abcToast.info(`点击了 ${variant} 按钮`)}
              >
                {iconOnly ? <Download className="h-3.5 w-3.5" /> : '导出财务对账报表'}
              </Button>

              {!block && (
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault()
                    abcToast.success('触发 buttonVariants 复用链接')
                  }}
                  className={buttonVariants({ variant: 'outline', size: btnSize })}
                >
                  buttonVariants 链接复用
                </a>
              )}
            </div>

            <div className="space-y-2">
              <div className="text-[11px] font-medium text-[var(--abc-fg-muted)]">全量 9 种语义变体速览（点击可切换当前 Knobs）：</div>
              <div className="flex flex-wrap items-center gap-2">
                {ALL_VARIANTS.map((v) => (
                  <Button key={v.value} variant={v.value} size="xs" motion={btnMotion} onClick={() => setVariant(v.value)}>
                    {v.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2: SegmentedControl */}
        <ComponentDocPreview
          title="SegmentedControl 分段选择器"
          components={['SegmentedControl']}
          description="用于在多个互斥维度（如统计周期、视图模式、计算引擎）之间进行高频一键切换，原生支持选项图标、数值角标与等宽自适应。"
          controls={
            <>
              <KnobSegmented
                label="size"
                value={segSize}
                onChange={setSegSize}
                options={[
                  { label: 'xs', value: 'xs' },
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                ]}
              />
              <KnobSegmented
                label="motion"
                value={segMotion}
                onChange={setSegMotion}
                options={[
                  { label: 'none', value: 'none' },
                  { label: 'subtle', value: 'subtle' },
                  { label: 'smooth', value: 'smooth' },
                  { label: 'spring', value: 'spring' },
                ]}
              />
              <KnobSwitch label="block" checked={segBlock} onChange={setSegBlock} />
              <KnobSwitch label="disabled" checked={segDisabled} onChange={setSegDisabled} />
              <KnobSwitch label="显示选项图标" checked={showIcons} onChange={setShowIcons} />
              <KnobSwitch label="显示角标" checked={showBadges} onChange={setShowBadges} />
            </>
          }
          onResetKnobs={() => {
            setSegValue('hourly')
            setSegSize('sm')
            setSegMotion('smooth')
            setSegBlock(false)
            setSegDisabled(false)
            setShowIcons(true)
            setShowBadges(true)
          }}
          code={`import { SegmentedControl } from '@abc-design/react'

<SegmentedControl
  value="${segValue}"
  onChange={setPeriod}
  size="${segSize}"
  motion="${segMotion}"
  block={${segBlock}}
  disabled={${segDisabled}}
  options={[
    { value: 'realtime', label: '实时流'${showIcons ? ', icon: <Activity className="h-3.5 w-3.5" />' : ''}${showBadges ? ', badge: "Live"' : ''} },
    { value: 'hourly', label: '按小时'${showIcons ? ', icon: <Clock className="h-3.5 w-3.5" />' : ''}${showBadges ? ', badge: 24' : ''} },
    { value: 'daily', label: '按天汇总'${showIcons ? ', icon: <Calendar className="h-3.5 w-3.5" />' : ''} },
    { value: 'weekly', label: '周度趋势'${showIcons ? ', icon: <Layers className="h-3.5 w-3.5" />' : ''} },
  ]}
/>`}
          apiRows={[
            { prop: 'options', type: 'SegmentedOption<T>[]', required: true, description: '选项列表，支持 value, label, icon, badge, disabled' },
            { prop: 'value / onChange', type: 'T / (val: T) => void', required: true, description: '受控选值及切换回调（兼容 onValueChange 别名）' },
            { prop: 'size / motion', type: 'AbcSize / AbcMotionPreset', defaultValue: "'sm' / 'smooth'", description: '四档高度规范与动效阻尼档位' },
            { prop: 'block / disabled', type: 'boolean', defaultValue: 'false', description: '是否均分铺满容器宽度 / 整体禁用状态' },
          ]}
        >
          <div className="space-y-3">
            <SegmentedControl
              value={segValue}
              onChange={setSegValue}
              size={segSize}
              motion={segMotion}
              block={segBlock}
              disabled={segDisabled}
              options={[
                {
                  value: 'realtime',
                  label: '实时监控流',
                  icon: showIcons ? <Activity className="h-3.5 w-3.5" /> : undefined,
                  badge: showBadges ? (
                    <StatusTag tone="success" size="xs" dot={false}>
                      Live
                    </StatusTag>
                  ) : undefined,
                },
                {
                  value: 'hourly',
                  label: '按小时聚合',
                  icon: showIcons ? <Clock className="h-3.5 w-3.5" /> : undefined,
                  badge: showBadges ? (
                    <span className="rounded-full bg-[var(--abc-primary-soft)] px-1.5 font-mono text-[10px] text-[var(--abc-primary)]">
                      24
                    </span>
                  ) : undefined,
                },
                {
                  value: 'daily',
                  label: '按天归档',
                  icon: showIcons ? <Calendar className="h-3.5 w-3.5" /> : undefined,
                },
                {
                  value: 'weekly',
                  label: '周度对比',
                  icon: showIcons ? <Sparkles className="h-3.5 w-3.5" /> : undefined,
                },
              ]}
            />

            <div className="text-xs text-[var(--abc-fg-muted)]">
              当前激活分段值：<code className="font-mono font-semibold text-[var(--abc-primary)]">{segValue}</code>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
export default ButtonsAndSegmentedPage
