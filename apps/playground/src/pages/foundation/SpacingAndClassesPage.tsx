import React, { useState } from 'react'
import {
  Button,
  Divider,
  PageContainer,
  Separator,
  Space,
  StatusTag,
  abcToast,
  abcUiClasses,
  buttonClass,
  dangerButtonClass,
  inputClass,
  labelClass,
  pageHeaderClass,
  pageSubTitleClass,
  pageTitleClass,
  panelClass,
  secondaryClass,
  tableCardClass,
  tableCellClass,
  tableHeadClass,
  tableHeaderCellClass,
  textButtonClass,
  textareaClass,
  type AbcSize,
} from '@abc-design/react'
import { Layers, Sparkles } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobNumber, KnobSegmented, KnobSwitch, KnobText } from '../../components/PropKnobs'

type UiClassCategory = 'forms' | 'containers' | 'table'

const SPACE_DEMO_ITEMS = [
  { key: 'deploy', label: '发布版本', variant: 'primary' as const },
  { key: 'rollback', label: '回滚快照', variant: 'secondary' as const },
  { key: 'inspect', label: '节点体检', variant: 'outline' as const },
  { key: 'tag-ok', label: 'SLA 99.99%', isTag: true, tone: 'success' as const },
  { key: 'tag-region', label: 'ap-southeast-1', isTag: true, tone: 'info' as const },
  { key: 'drain', label: '摘除流量', variant: 'ghost' as const },
]

export const SpacingAndClassesPage: React.FC = () => {
  // 1. Space Knobs
  const [spaceDir, setSpaceDir] = useState<'horizontal' | 'vertical'>('horizontal')
  const [spaceSize, setSpaceSize] = useState<AbcSize>('md')
  const [spaceWrap, setSpaceWrap] = useState(true)
  const [itemCount, setItemCount] = useState(4)

  // 2. Divider & Separator Knobs
  const [sepOrientation, setSepOrientation] = useState<'horizontal' | 'vertical'>('horizontal')
  const [dividerLabel, setDividerLabel] = useState('节点拓扑分界')
  const [decorative, setDecorative] = useState(true)

  // 3. abcUiClasses Knobs
  const [uiCategory, setUiCategory] = useState<UiClassCategory>('forms')
  const [hostDraft, setHostDraft] = useState('edge-gw-shanghai-01')
  const [remarkDraft, setRemarkDraft] = useState('BGP 多线接入，自动同步全局圆角与亮暗色板')
  const [nativeDisabled, setNativeDisabled] = useState(false)

  const categoryCodeMap: Record<UiClassCategory, string> = {
    forms: `import { buttonClass, secondaryClass, dangerButtonClass, textButtonClass, inputClass, textareaClass, labelClass } from '@abc-design/react'

<label className={labelClass}>边缘网关标识</label>
<input className={inputClass} disabled={${nativeDisabled}} value={host} onChange={...} />
<textarea className={textareaClass} disabled={${nativeDisabled}} rows={2} value={remark} onChange={...} />
<button className={buttonClass}>主操作</button>
<button className={secondaryClass}>次要操作</button>
<button className={dangerButtonClass}>熔断下线</button>
<button className={textButtonClass}>文本按钮</button>`,
    containers: `import { panelClass, pageHeaderClass, pageTitleClass, pageSubTitleClass, abcUiClasses } from '@abc-design/react'

<div className={panelClass}>
  <div className={pageHeaderClass}>
    <div>
      <h4 className={pageTitleClass}>边缘集群控制面板</h4>
      <p className={pageSubTitleClass}>零 JS 开销响应全局品牌色与圆角</p>
    </div>
  </div>
</div>
<div className={abcUiClasses.filterCard}>筛选容器</div>`,
    table: `import { tableCardClass, tableHeadClass, tableHeaderCellClass, tableCellClass } from '@abc-design/react'

<div className={tableCardClass}>
  <table className="w-full border-collapse text-left">
    <thead>
      <tr className={tableHeadClass}>
        <th className={tableHeaderCellClass}>语义类名</th>
        <th className={tableHeaderCellClass}>绑定核心 Token</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className={tableCellClass}>panelClass</td><td className={tableCellClass}>--abc-bg-surface</td></tr>
    </tbody>
  </table>
</div>`,
  }

  return (
    <PageContainer
      title="间距分隔与令牌样式类"
      subtitle="统一响应组件库节奏规范的弹性间距容器 Space、无障碍分割线 Divider / Separator，以及零运行时开销的语义化样式常量集 abcUiClasses。"
    >
      <div className="space-y-5">
        {/* 卡片 1: Space */}
        <ComponentDocPreview
          title="Space 弹性间距编排容器"
          components={['Space']}
          description="对标设计系统的四档间距标尺，支持水平/垂直排布与自动折行，用于按钮组、标签组与工具栏原子元素排列。"
          controls={
            <>
              <KnobSegmented
                label="direction"
                value={spaceDir}
                onChange={setSpaceDir}
                options={[
                  { label: 'horizontal', value: 'horizontal' },
                  { label: 'vertical', value: 'vertical' },
                ]}
              />
              <KnobSegmented
                label="size"
                value={spaceSize}
                onChange={setSpaceSize}
                options={[
                  { label: 'xs', value: 'xs' },
                  { label: 'sm', value: 'sm' },
                  { label: 'md', value: 'md' },
                  { label: 'lg', value: 'lg' },
                ]}
              />
              <KnobNumber label="元素数量" value={itemCount} onChange={setItemCount} min={3} max={6} />
              <KnobSwitch label="wrap" checked={spaceWrap} onChange={setSpaceWrap} />
            </>
          }
          onResetKnobs={() => {
            setSpaceDir('horizontal')
            setSpaceSize('md')
            setSpaceWrap(true)
            setItemCount(4)
          }}
          code={`import { Space, Button, StatusTag } from '@abc-design/react'

<Space direction="${spaceDir}" size="${spaceSize}" wrap={${spaceWrap}}>
${SPACE_DEMO_ITEMS.slice(0, itemCount)
  .map((item) => (item.isTag ? `  <StatusTag tone="${item.tone}">${item.label}</StatusTag>` : `  <Button variant="${item.variant}">${item.label}</Button>`))
  .join('\n')}
</Space>`}
          apiRows={[
            { prop: 'direction', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: '主轴排列方向' },
            { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '分别映射 gap-1.5 / gap-2 / gap-3 / gap-4' },
            { prop: 'wrap', type: 'boolean', defaultValue: 'false', description: '水平模式下空间不足时是否自动换行' },
            { prop: 'align', type: "'start' | 'center' | 'end' | 'stretch'", defaultValue: "'center'", description: '交叉轴对齐方式' },
          ]}
        >
          <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4">
            <Space direction={spaceDir} size={spaceSize} wrap={spaceWrap}>
              {SPACE_DEMO_ITEMS.slice(0, itemCount).map((item) =>
                item.isTag ? (
                  <StatusTag key={item.key} tone={item.tone}>
                    {item.label}
                  </StatusTag>
                ) : (
                  <Button key={item.key} size="sm" variant={item.variant}>
                    {item.label}
                  </Button>
                )
              )}
            </Space>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2: Divider & Separator */}
        <ComponentDocPreview
          title="Divider & Separator 语义分隔线"
          components={['Divider', 'Separator']}
          description="Divider 支持水平带居中标签文本（label 属性）及行内垂直分割线；Separator 提供严格区分装饰性与语义化的 decorative 无障碍开关。"
          controls={
            <>
              <KnobSegmented
                label="orientation"
                value={sepOrientation}
                onChange={setSepOrientation}
                options={[
                  { label: 'horizontal', value: 'horizontal' },
                  { label: 'vertical', value: 'vertical' },
                ]}
              />
              <KnobText label="Divider.label" value={dividerLabel} onChange={setDividerLabel} widthClass="w-36" />
              <KnobSwitch label="Separator.decorative" checked={decorative} onChange={setDecorative} />
            </>
          }
          onResetKnobs={() => {
            setSepOrientation('horizontal')
            setDividerLabel('节点拓扑分界')
            setDecorative(true)
          }}
          code={`import { Divider, Separator } from '@abc-design/react'

${
  sepOrientation === 'horizontal'
    ? `<Divider${dividerLabel ? ` label="${dividerLabel}"` : ''} />\n<Separator orientation="horizontal" decorative={${decorative}} />`
    : `<div className="flex items-center gap-2">\n  <span>Control Plane</span>\n  <Divider orientation="vertical" />\n  <span>Runner Pool</span>\n  <Separator orientation="vertical" decorative={${decorative}} className="h-4" />\n  <span>Egress Gateway</span>\n</div>`
}`}
          apiRows={[
            { prop: 'Divider.orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: '水平分隔线或行内垂直短竖线' },
            { prop: 'Divider.label', type: 'ReactNode', description: '水平分隔线正中插入的说明标题（注意非 children）' },
            { prop: 'Separator.orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: '分隔线延展方向' },
            { prop: 'Separator.decorative', type: 'boolean', defaultValue: 'true', description: '设为 false 时渲染 role="separator" 与 aria-orientation 属性供读屏器识别' },
          ]}
        >
          <div className="space-y-4 text-xs">
            {sepOrientation === 'horizontal' ? (
              <div className="space-y-4 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4">
                <div className="text-[var(--abc-fg-secondary)]">上方区域：控制平面路由规则</div>
                <Divider label={dividerLabel || undefined} />
                <div className="text-[var(--abc-fg-secondary)]">下方区域：以下为纯线条 Separator (decorative={String(decorative)})</div>
                <Separator orientation="horizontal" decorative={decorative} />
                <div className="text-[11px] text-[var(--abc-fg-muted)]">
                  当前 DOM 无障碍属性：<code className="font-mono">role=&quot;{decorative ? 'none' : 'separator'}&quot;</code>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 text-[var(--abc-fg-secondary)]">
                <span>Control Plane</span>
                <Divider orientation="vertical" />
                <span>Runner Pool</span>
                <Separator orientation="vertical" decorative={decorative} className="mx-1.5 h-4" />
                <span>Egress Gateway</span>
                <span className="ml-auto font-mono text-[11px] text-[var(--abc-fg-muted)]">
                  role=&quot;{decorative ? 'none' : 'separator'}&quot;
                </span>
              </div>
            )}
          </div>
        </ComponentDocPreview>

        {/* 卡片 3: abcUiClasses 原子样式类 */}
        <ComponentDocPreview
          title="abcUiClasses 设计令牌原子样式类"
          components={[
            'abcUiClasses',
            'buttonClass',
            'dangerButtonClass',
            'secondaryClass',
            'textButtonClass',
            'inputClass',
            'textareaClass',
            'labelClass',
            'panelClass',
            'pageHeaderClass',
            'pageTitleClass',
            'pageSubTitleClass',
            'tableCardClass',
            'tableHeadClass',
            'tableHeaderCellClass',
            'tableCellClass',
          ]}
          description="面向上层原生 HTML 表单、大盘自定义面板与轻量化数据表格提供直接绑定 --abc-* 变量的工具类名常量，不引入组件封装层级即可跟随全站主题实时换肤。"
          controls={
            <>
              <KnobSegmented
                label="预设分组"
                value={uiCategory}
                onChange={setUiCategory}
                options={[
                  { label: '按钮与表单类', value: 'forms' },
                  { label: '页头与容器类', value: 'containers' },
                  { label: '表格骨架类', value: 'table' },
                ]}
              />
              {uiCategory === 'forms' && (
                <KnobSwitch label="disabled 禁用态" checked={nativeDisabled} onChange={setNativeDisabled} />
              )}
            </>
          }
          onResetKnobs={() => {
            setUiCategory('forms')
            setHostDraft('edge-gw-shanghai-01')
            setRemarkDraft('BGP 多线接入，自动同步全局圆角与亮暗色板')
            setNativeDisabled(false)
          }}
          code={categoryCodeMap[uiCategory]}
          apiRows={[
            { prop: 'buttonClass / secondaryClass / dangerButtonClass / textButtonClass', type: 'string', description: '主操作、次要描边、危险警告与轻量文本按钮原生样式类' },
            { prop: 'inputClass / textareaClass / labelClass', type: 'string', description: '与系统控件高度、聚焦光环及禁用态严格对齐的表单原生类名' },
            { prop: 'panelClass / pageHeaderClass / pageTitleClass / pageSubTitleClass', type: 'string', description: '通用卡片面板及页头排版层级语义类名' },
            { prop: 'tableCardClass / tableHeadClass / tableHeaderCellClass / tableCellClass', type: 'string', description: '原生 HTML <table> 卡片外框、表头与单元格标准化样式类' },
            { prop: 'abcUiClasses', type: 'Readonly<Record<string, string>>', description: '聚合全部 16 项语义类名的命名空间导出对象' },
          ]}
        >
          <div className="space-y-4">
            {uiCategory === 'forms' && (
              <div className={panelClass}>
                <div className="space-y-3">
                  <div>
                    <label className={labelClass}>边缘网关标识 (labelClass + inputClass)</label>
                    <input className={inputClass} disabled={nativeDisabled} value={hostDraft} onChange={(e) => setHostDraft(e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>路由策略说明 (textareaClass)</label>
                    <textarea rows={2} className={textareaClass} disabled={nativeDisabled} value={remarkDraft} onChange={(e) => setRemarkDraft(e.target.value)} />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button type="button" disabled={nativeDisabled} className={buttonClass} onClick={() => abcToast.success(`已保存 ${hostDraft}`)}>
                      <Sparkles className="h-3.5 w-3.5" />
                      主操作 (buttonClass)
                    </button>
                    <button type="button" disabled={nativeDisabled} className={secondaryClass} onClick={() => setHostDraft('edge-gw-shanghai-01')}>
                      次要重置 (secondaryClass)
                    </button>
                    <button type="button" disabled={nativeDisabled} className={dangerButtonClass} onClick={() => abcToast.warning('已触发危险按钮样式')}>
                      熔断下线 (dangerButtonClass)
                    </button>
                    <button type="button" className={textButtonClass} onClick={() => abcToast.info('轻量文本动作')}>
                      文本动作 (textButtonClass)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {uiCategory === 'containers' && (
              <div className={abcUiClasses.panel}>
                <div className={pageHeaderClass}>
                  <div>
                    <h4 className={pageTitleClass}>容器与页头语义类 (pageHeaderClass / pageTitleClass)</h4>
                    <p className={pageSubTitleClass}>直接绑定 --abc-radius-lg、--abc-border 与 --abc-shadow-card，支持明暗模式无缝切换。</p>
                  </div>
                  <Layers className="h-4 w-4 text-[var(--abc-primary)]" />
                </div>
              </div>
            )}

            {uiCategory === 'table' && (
              <div className={tableCardClass}>
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className={tableHeadClass}>
                      <th className={tableHeaderCellClass}>语义类名常量</th>
                      <th className={tableHeaderCellClass}>绑定核心 Token</th>
                      <th className={tableHeaderCellClass}>适用场景</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--abc-border)]">
                    {[
                      { name: 'tableCardClass', token: '--abc-bg-surface / --abc-radius-lg', usage: '表格外层圆角溢出裁剪容器' },
                      { name: 'tableHeadClass', token: '--abc-bg-muted / --abc-border', usage: '表头行浅灰底衬与底部细边框' },
                      { name: 'tableHeaderCellClass', token: '--abc-fg-secondary / whitespace-nowrap', usage: '表头字段单元格统一内边距' },
                      { name: 'tableCellClass', token: '--abc-fg-secondary / text-xs', usage: '表体数据行规范排版与对比度' },
                    ].map((row) => (
                      <tr key={row.name}>
                        <td className={`${tableCellClass} font-mono font-semibold text-[var(--abc-primary)]`}>{row.name}</td>
                        <td className={`${tableCellClass} font-mono text-[11px]`}>{row.token}</td>
                        <td className={tableCellClass}>{row.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
export default SpacingAndClassesPage
