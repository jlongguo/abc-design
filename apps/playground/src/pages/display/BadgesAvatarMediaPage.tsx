import React, { useState } from 'react'
import {
  Avatar,
  Badge,
  Button,
  IconBadge,
  ImagePreview,
  PageContainer,
  StatusBadge,
  StatusTag,
  Tag,
  type AbcSize,
  type IconBadgeProps,
  type StatusTone,
} from '@abc-design/react'
import { AlertTriangle, Bell, Inbox, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import {
  KnobNumber,
  KnobSegmented,
  KnobSelect,
  KnobSwitch,
  KnobText,
} from '../../components/PropKnobs'

type CoreTone = Extract<StatusTone, 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>
type BadgeStatus =
  | 'active'
  | 'running'
  | 'queued'
  | 'waiting_human'
  | 'reconciliation_required'
  | 'suspended'
  | 'failed'
  | 'archived'
type TagVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info'
type IconBadgeVariant = NonNullable<IconBadgeProps['variant']>

const TONE_OPTIONS: { label: string; value: CoreTone }[] = [
  { label: 'neutral', value: 'neutral' },
  { label: 'primary', value: 'primary' },
  { label: 'success', value: 'success' },
  { label: 'warning', value: 'warning' },
  { label: 'danger', value: 'danger' },
  { label: 'info', value: 'info' },
]

const STATUS_OPTIONS: { label: string; value: BadgeStatus }[] = [
  { label: 'active', value: 'active' },
  { label: 'running', value: 'running' },
  { label: 'queued', value: 'queued' },
  { label: 'waiting_human', value: 'waiting_human' },
  { label: 'reconciliation_required', value: 'reconciliation_required' },
  { label: 'suspended', value: 'suspended' },
  { label: 'failed', value: 'failed' },
  { label: 'archived', value: 'archived' },
]

const TAG_VARIANT_OPTIONS: { label: string; value: TagVariant }[] = [
  { label: 'default', value: 'default' },
  { label: 'secondary', value: 'secondary' },
  { label: 'destructive', value: 'destructive' },
  { label: 'outline', value: 'outline' },
  { label: 'success', value: 'success' },
  { label: 'warning', value: 'warning' },
  { label: 'info', value: 'info' },
]

const SIZE_OPTIONS: { label: AbcSize; value: AbcSize }[] = [
  { label: 'xs', value: 'xs' },
  { label: 'sm', value: 'sm' },
  { label: 'md', value: 'md' },
  { label: 'lg', value: 'lg' },
]

const ICON_VARIANT_OPTIONS: { label: string; value: IconBadgeVariant }[] = [
  { label: 'default', value: 'default' },
  { label: 'success', value: 'success' },
  { label: 'warning', value: 'warning' },
  { label: 'error', value: 'error' },
  { label: 'info', value: 'info' },
]

// 内联 SVG 源码（演示 ImagePreview 原生 <svg> 源码直出能力）
const INLINE_BRAND_SVG =
  '<svg viewBox="0 0 80 80" width="80" height="80" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="80" rx="18" fill="#4f46e5"/><circle cx="40" cy="31" r="12" fill="#c7d2fe"/><path d="M18 64c5-12 15-17 22-17s17 5 22 17" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none"/></svg>'

// 16:9 横幅图 DataURL，用于凸显 cover 裁剪填充与 contain 留白完整展示的视觉差异
const WIDE_BANNER_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg viewBox="0 0 160 90" width="160" height="90" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#7c3aed"/></linearGradient></defs><rect width="160" height="90" fill="url(#g)"/><circle cx="34" cy="32" r="14" fill="rgba(255,255,255,0.25)"/><rect x="60" y="24" width="76" height="10" rx="5" fill="rgba(255,255,255,0.9)"/><rect x="60" y="42" width="54" height="8" rx="4" fill="rgba(255,255,255,0.55)"/><path d="M16 74l30-20 26 15 24-22 48 27H16z" fill="rgba(255,255,255,0.22)"/></svg>'
)}`

const AVATAR_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" fill="#0ea5e9"/><circle cx="32" cy="24" r="11" fill="#f8fafc"/><path d="M14 54c4-11 12-15 18-15s14 4 18 15" fill="#e0f2fe"/></svg>'
)}`

/**
 * 状态标签、徽章、头像与灯箱文档页
 */
export const BadgesAvatarMediaPage: React.FC = () => {
  // 卡片 1：StatusTag / StatusBadge / Tag
  const [tone, setTone] = useState<CoreTone>('success')
  const [tagSize, setTagSize] = useState<AbcSize>('sm')
  const [statusDot, setStatusDot] = useState(true)
  const [pulse, setPulse] = useState(true)
  const [badgeStatus, setBadgeStatus] = useState<BadgeStatus>('running')
  const [tagVariant, setTagVariant] = useState<TagVariant>('default')
  const [tagDot, setTagDot] = useState(true)

  // 卡片 2：Badge & IconBadge
  const [badgeCount, setBadgeCount] = useState(18)
  const [maxCount, setMaxCount] = useState<9 | 99>(99)
  const [badgeDot, setBadgeDot] = useState(false)
  const [badgeTone, setBadgeTone] = useState<'danger' | 'primary' | 'success'>('danger')
  const [badgeSize, setBadgeSize] = useState<AbcSize>('sm')
  const [iconVariant, setIconVariant] = useState<IconBadgeVariant>('success')
  const [iconSize, setIconSize] = useState<'xs' | 'sm' | 'md'>('sm')

  // 卡片 3：Avatar & ImagePreview
  const [avatarSize, setAvatarSize] = useState<AbcSize>('md')
  const [avatarName, setAvatarName] = useState('Architect')
  const [withImage, setWithImage] = useState(false)
  const [previewPx, setPreviewPx] = useState<48 | 72 | 96>(72)
  const [previewRounded, setPreviewRounded] = useState(false)
  const [previewFit, setPreviewFit] = useState<'cover' | 'contain'>('cover')
  const [zoomable, setZoomable] = useState(true)

  return (
    <PageContainer
      title="状态标签、徽章、头像与灯箱"
      subtitle="涵盖语义化状态标签（StatusTag / StatusBadge / Tag）、数字与图标徽章（Badge / IconBadge）以及带回退机制的头像与灯箱预览（Avatar / ImagePreview）。"
      breadcrumbs={[{ label: '数据展示' }, { label: '状态标签、徽章、头像与灯箱' }]}
    >
      <div className="space-y-5">
        {/* 卡片 1：StatusTag / StatusBadge / Tag */}
        <ComponentDocPreview
          title="StatusTag / StatusBadge / Tag 语义化状态标签"
          description="StatusTag 支持语义 tone 调色与呼吸脉冲圆点；StatusBadge 自动将 40+ 运行态/结算态枚举映射为规范色调；Tag 为轻量多变体语义标签。"
          components={['StatusTag', 'StatusBadge', 'Tag']}
          onResetKnobs={() => {
            setTone('success')
            setTagSize('sm')
            setStatusDot(true)
            setPulse(true)
            setBadgeStatus('running')
            setTagVariant('default')
            setTagDot(true)
          }}
          controls={
            <>
              <KnobSelect label="StatusTag.tone" value={tone} options={TONE_OPTIONS} onChange={setTone} widthClass="w-28" />
              <KnobSegmented label="size" value={tagSize} options={SIZE_OPTIONS} onChange={setTagSize} />
              <KnobSwitch label="StatusTag.dot" checked={statusDot} onChange={setStatusDot} />
              <KnobSwitch label="pulse" checked={pulse} onChange={setPulse} />
              <KnobSelect label="StatusBadge.status" value={badgeStatus} options={STATUS_OPTIONS} onChange={setBadgeStatus} widthClass="w-44" />
              <KnobSelect label="Tag.variant" value={tagVariant} options={TAG_VARIANT_OPTIONS} onChange={setTagVariant} widthClass="w-32" />
              <KnobSwitch label="Tag.dot" checked={tagDot} onChange={setTagDot} />
            </>
          }
          code={`import { StatusTag, StatusBadge, Tag } from '@abc-design/react'

<StatusTag tone="${tone}" size="${tagSize}" dot={${statusDot}} pulse={${pulse}}>
  集群状态: ${tone}
</StatusTag>
<StatusBadge status="${badgeStatus}" pulse={${pulse}} />
<Tag variant="${tagVariant}" dot={${tagDot}}>发布环境</Tag>`}
          apiRows={[
            { prop: 'StatusTag.tone', type: "'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | ...", defaultValue: "'neutral'", description: '预设语义色板或扩展色名' },
            { prop: 'StatusTag.size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '标签内边距与字号规格' },
            { prop: 'StatusTag.dot / pulse', type: 'boolean / boolean', defaultValue: 'true / false', description: '是否显示前置圆点及呼吸脉冲动画' },
            { prop: 'StatusBadge.status', type: 'string', required: true, description: '自动识别 active / running / queued / failed 等 40+ 状态枚举' },
            { prop: 'StatusBadge.pulse', type: 'boolean', description: '覆写默认的运行态脉冲判定逻辑' },
            { prop: 'Tag.variant / dot', type: "'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info'", defaultValue: "'default' / false", description: 'Tag 变体与前置圆点开关' },
          ]}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/60 p-4">
              <StatusTag tone={tone} size={tagSize} dot={statusDot} pulse={pulse}>
                StatusTag · {tone}
              </StatusTag>
              <StatusBadge status={badgeStatus} pulse={pulse} />
              <Tag variant={tagVariant} dot={tagDot}>
                Tag · {tagVariant}
              </Tag>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--abc-fg-muted)]">
              <span>常用语义预设对比：</span>
              <StatusTag tone="purple" dot={false}>扩展色 purple</StatusTag>
              <StatusBadge status="active" />
              <StatusBadge status="reconciliation_required" />
              <StatusBadge status="suspended" />
              <Tag variant="outline" dot>Staging</Tag>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2：Badge & IconBadge */}
        <ComponentDocPreview
          title="Badge & IconBadge 角标计数器与语义图标徽标"
          description="Badge 支持包裹锚点元素右上角叠加或独立展示计数/红点，超出 maxCount 自动截断为 N+；IconBadge 兼具带文字胶囊变体与正方形纯图标底座。"
          components={['Badge', 'IconBadge']}
          onResetKnobs={() => {
            setBadgeCount(18)
            setMaxCount(99)
            setBadgeDot(false)
            setBadgeTone('danger')
            setBadgeSize('sm')
            setIconVariant('success')
            setIconSize('sm')
          }}
          controls={
            <>
              <KnobNumber label="count" value={badgeCount} onChange={setBadgeCount} min={0} max={150} />
              <KnobSegmented label="maxCount" value={maxCount} options={[{ label: '9', value: 9 }, { label: '99', value: 99 }]} onChange={setMaxCount} />
              <KnobSwitch label="dot" checked={badgeDot} onChange={setBadgeDot} />
              <KnobSegmented label="tone" value={badgeTone} options={[{ label: 'danger', value: 'danger' }, { label: 'primary', value: 'primary' }, { label: 'success', value: 'success' }]} onChange={setBadgeTone} />
              <KnobSegmented label="Badge.size" value={badgeSize} options={SIZE_OPTIONS} onChange={setBadgeSize} />
              <KnobSelect label="IconBadge.variant" value={iconVariant} options={ICON_VARIANT_OPTIONS} onChange={setIconVariant} widthClass="w-28" />
              <KnobSegmented label="IconBadge.size" value={iconSize} options={[{ label: 'xs', value: 'xs' }, { label: 'sm', value: 'sm' }, { label: 'md', value: 'md' }]} onChange={setIconSize} />
            </>
          }
          code={`import { Badge, IconBadge, Button } from '@abc-design/react'
import { Bell, ShieldCheck } from 'lucide-react'

<Badge count={${badgeCount}} maxCount={${maxCount}} dot={${badgeDot}} tone="${badgeTone}" size="${badgeSize}">
  <Button size="sm" variant="secondary" icon={<Bell className="h-3.5 w-3.5" />}>
    消息中心
  </Button>
</Badge>
<Badge count={${badgeCount}} maxCount={${maxCount}} dot={${badgeDot}} tone="${badgeTone}" size="${badgeSize}" />
<IconBadge variant="${iconVariant}" size="${iconSize}" icon={<ShieldCheck className="h-3.5 w-3.5" />} label="WAF 防护已开启" />`}
          apiRows={[
            { prop: 'Badge.count / maxCount', type: 'number / number', defaultValue: '0 / 99', description: '角标数字及封顶值，count=0 且非 dot 时自动隐藏' },
            { prop: 'Badge.dot', type: 'boolean', defaultValue: 'false', description: '以纯圆点替代数字角标' },
            { prop: 'Badge.tone / size', type: "'danger' | 'primary' | 'success' / AbcSize", defaultValue: "'danger' / 'sm'", description: '角标背景语义色与大小档位' },
            { prop: 'IconBadge.variant', type: "'default' | 'success' | 'warning' | 'error' | 'info'", defaultValue: "'default'", description: '传入 label 时激活胶囊边框语义色变体' },
            { prop: 'IconBadge.size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: '图标徽标尺寸规格' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-6">
            <Badge count={badgeCount} maxCount={maxCount} dot={badgeDot} tone={badgeTone} size={badgeSize}>
              <Button size="sm" variant="secondary" icon={<Bell className="h-3.5 w-3.5" />}>
                待审批工单
              </Button>
            </Badge>
            <div className="flex items-center gap-2 text-xs text-[var(--abc-fg-muted)]">
              <span>独立角标：</span>
              <Badge count={badgeCount} maxCount={maxCount} dot={badgeDot} tone={badgeTone} size={badgeSize} />
            </div>
            <IconBadge
              variant={iconVariant}
              size={iconSize}
              icon={
                iconVariant === 'warning' ? (
                  <AlertTriangle className="h-3.5 w-3.5" />
                ) : iconVariant === 'info' ? (
                  <Zap className="h-3.5 w-3.5" />
                ) : (
                  <ShieldCheck className="h-3.5 w-3.5" />
                )
              }
              label={`IconBadge (${iconVariant})`}
            />
            <div className="flex items-center gap-2 border-l border-[var(--abc-border)] pl-4">
              <IconBadge token="sparkles" tone="indigo" size={iconSize} icon={<Sparkles className="h-3.5 w-3.5" />} />
              <IconBadge token="inbox" tone="teal" size={iconSize} icon={<Inbox className="h-3.5 w-3.5" />} />
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3：Avatar & ImagePreview */}
        <ComponentDocPreview
          title="Avatar & ImagePreview 头像首字母回退与图形灯箱预览"
          description="Avatar 在未传 src 或图片加载失败时自动提取 name 首字母作为头像占位；ImagePreview 原生兼容普通 URL 与内联 <svg> 源码字符串，支持点击开启缩放旋转灯箱。"
          components={['Avatar', 'ImagePreview']}
          onResetKnobs={() => {
            setAvatarSize('md')
            setAvatarName('Architect')
            setWithImage(false)
            setPreviewPx(72)
            setPreviewRounded(false)
            setPreviewFit('cover')
            setZoomable(true)
          }}
          controls={
            <>
              <KnobSegmented label="Avatar.size" value={avatarSize} options={SIZE_OPTIONS} onChange={setAvatarSize} />
              <KnobText label="name" value={avatarName} onChange={setAvatarName} placeholder="输入用户名" widthClass="w-32" />
              <KnobSwitch label="withImage" checked={withImage} onChange={setWithImage} />
              <KnobSegmented label="sizePx" value={previewPx} options={[{ label: '48', value: 48 }, { label: '72', value: 72 }, { label: '96', value: 96 }]} onChange={setPreviewPx} />
              <KnobSwitch label="rounded" checked={previewRounded} onChange={setPreviewRounded} />
              <KnobSegmented label="fit" value={previewFit} options={[{ label: 'cover', value: 'cover' }, { label: 'contain', value: 'contain' }]} onChange={setPreviewFit} />
              <KnobSwitch label="zoomable" checked={zoomable} onChange={setZoomable} />
            </>
          }
          code={`import { Avatar, ImagePreview } from '@abc-design/react'

<Avatar name="${avatarName || 'U'}" size="${avatarSize}"${withImage ? ' src="https://example.com/avatar.png"' : ''} />

<ImagePreview
  src={bannerDataUri}
  alt="节点预览图"
  width={${previewPx}}
  height={${previewPx}}
  rounded={${previewRounded}}
  fit="${previewFit}"
  zoomable={${zoomable}}
/>`}
          apiRows={[
            { prop: 'Avatar.name / src', type: 'string / string', defaultValue: "'U' / -", description: '头像图片地址，失败或未传时回退至 name 首字符' },
            { prop: 'Avatar.size', type: "'xs' | 'sm' | 'md' | 'lg'", defaultValue: "'sm'", description: '四档圆形头像尺寸' },
            { prop: 'ImagePreview.src', type: 'string | null', description: '支持 HTTP URL、DataURL 或原始内联 <svg>...</svg> 字符串' },
            { prop: 'ImagePreview.width / height', type: 'number | string', description: '显式覆盖缩略图宽高像素' },
            { prop: 'ImagePreview.rounded / fit', type: "boolean / 'cover' | 'contain'", defaultValue: "false / 'contain'", description: '圆形裁剪与图片填充裁切策略' },
            { prop: 'ImagePreview.zoomable', type: 'boolean', defaultValue: 'true', description: '点击是否弹出支持缩放和 90° 旋转的灯箱模态框' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/50 px-4 py-3">
              <Avatar
                size={avatarSize}
                name={avatarName || 'U'}
                src={withImage ? AVATAR_DATA_URI : undefined}
              />
              <div className="text-xs">
                <div className="font-semibold text-[var(--abc-fg)]">{avatarName || 'Anonymous'}</div>
                <div className="text-[var(--abc-fg-muted)]">
                  {withImage ? '图片渲染模式' : '文字首字母自动回退'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center gap-1.5">
                <ImagePreview
                  src={WIDE_BANNER_DATA_URI}
                  alt="横向海报图预览"
                  width={previewPx}
                  height={previewPx}
                  rounded={previewRounded}
                  fit={previewFit}
                  zoomable={zoomable}
                />
                <span className="text-[11px] text-[var(--abc-fg-muted)]">
                  DataURL ({previewFit})
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <ImagePreview
                  src={INLINE_BRAND_SVG}
                  alt="内联 SVG 矢量图标"
                  width={previewPx}
                  height={previewPx}
                  rounded={previewRounded}
                  fit={previewFit}
                  zoomable={zoomable}
                />
                <span className="text-[11px] text-[var(--abc-fg-muted)]">
                  内联 &lt;svg&gt; 源码
                </span>
              </div>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default BadgesAvatarMediaPage
