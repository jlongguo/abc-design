import * as React from 'react'
import { matchKeywordWithPinyin } from '@abc-design/core'
import { Check, Sparkles, Trash2 } from 'lucide-react'
import { cn } from '../utils/cn'
import { Drawer, type DrawerSize } from '../components/feedback/Drawer'
import { SearchInput } from '../components/form/SearchInput'
import { EmptyState } from '../components/display/FeedbackStates'
import { Badge } from '../components/display/StatusTag'

export interface TemplateGalleryItem {
  /** 唯一标识 */
  id: string
  /** 模板展示名称 */
  title: string
  /** 详细用途描述 */
  description?: string
  /** 分类键 */
  category: string
  /** 分类展示文案（未传则回退 category） */
  categoryLabel?: string
  /** 卡片前置图标 */
  icon?: React.ReactNode
  /** 检索与展示标签 */
  tags?: ReadonlyArray<string>
  /** 右上角/底部元信息列表（如步骤数、引擎模式、难度等） */
  meta?: ReadonlyArray<string>
  /** 是否为用户/项目自定义模板 */
  isCustom?: boolean
  /** 附加拼音/关键字检索词 */
  keywords?: string
}

export interface TemplateGalleryCategory {
  key: string
  label: React.ReactNode
}

export interface TemplateGalleryDrawerLabels {
  searchPlaceholder?: string
  categoryFilterAriaLabel?: string
  allCategory?: string
  customBadge?: string
  activeBadge?: string
  applyButton?: string
  deleteAriaLabel?: string
  emptyTitle?: string
  emptyDescription?: string
  resetFilter?: string
  countSummary?: (matched: number, total: number) => string
}

export interface TemplateGalleryDrawerProps {
  /** 允许透传 data-*（如局部暗/亮主题 data-abc-theme）至 Drawer Portal 节点 */
  [dataAttr: `data-${string}`]: string | number | boolean | undefined
  open: boolean
  onClose: () => void
  title?: React.ReactNode
  description?: React.ReactNode
  /** 全部可浏览模板项 */
  items: ReadonlyArray<TemplateGalleryItem>
  /** 显式分类顺序（未传时自动从 items 聚合） */
  categories?: ReadonlyArray<TemplateGalleryCategory>
  /** 当前已选中的模板 ID（高亮边框与徽标） */
  activeId?: string | null
  /** 应用模板回调 */
  onSelect: (item: TemplateGalleryItem) => void
  /** 可选删除回调（仅对 isCustom 为真的项渲染删除按钮） */
  onDelete?: (item: TemplateGalleryItem) => void
  /** 抽屉顶栏右侧附加动作（如“新建空白”或“保存当前”） */
  headerActions?: React.ReactNode
  /** 抽屉尺寸（默认 'lg'） */
  size?: DrawerSize
  /** 本地持久化宽度键 */
  storageKey?: string
  /** 卡片列数（默认 2 列） */
  columns?: 1 | 2
  /** 多语言文案覆盖 */
  labels?: TemplateGalleryDrawerLabels
}

const DEFAULT_LABELS: Required<TemplateGalleryDrawerLabels> = {
  searchPlaceholder: '按名称、描述、标签或拼音搜索模板…',
  categoryFilterAriaLabel: '模板分类筛选',
  allCategory: '全部',
  customBadge: '自定义',
  activeBadge: '当前使用',
  applyButton: '使用模板',
  deleteAriaLabel: '删除模板',
  emptyTitle: '未找到匹配的模板',
  emptyDescription: '可尝试清空搜索词或切换其他分类查看全部模板。',
  resetFilter: '重置筛选',
  countSummary: (matched, total) => `共 ${matched} / ${total} 个模板`,
}

/**
 * 模板与预设画廊抽屉 (TemplateGalleryDrawer)
 *
 * 为什么抽离为 Pro 通用组件：
 * 下拉框仅适合 <10 项的短列表，当预设模板达到数十个且包含分类、描述、步骤数与自定义管理时，
 * 需要可调宽 Drawer + 拼音即时搜索 + 分类计数胶囊 + 卡片化网格预览，让用户一眼挑中目标模板。
 */
export const TemplateGalleryDrawer: React.FC<TemplateGalleryDrawerProps> = ({
  open,
  onClose,
  title = '模板库',
  description,
  items,
  categories,
  activeId,
  onSelect,
  onDelete,
  headerActions,
  size = 'lg',
  storageKey = 'abc_template_gallery',
  columns = 2,
  labels: customLabels,
  ...restProps
}) => {
  const labels = React.useMemo(() => ({ ...DEFAULT_LABELS, ...customLabels }), [customLabels])
  const [query, setQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all')

  React.useEffect(() => {
    if (!open) {
      setQuery('')
    }
  }, [open])

  // 透传 data-* 属性给底层 Drawer（兼容局部暗/亮主题子树）
  const dataProps: Record<string, string | number | boolean | undefined> = {}
  for (const [key, val] of Object.entries(restProps)) {
    if (key.startsWith('data-')) {
      dataProps[key] = val
    }
  }

  const resolvedCategories = React.useMemo<TemplateGalleryCategory[]>(() => {
    if (categories && categories.length > 0) return [...categories]
    const seen = new Map<string, React.ReactNode>()
    for (const item of items) {
      if (!seen.has(item.category)) {
        seen.set(item.category, item.categoryLabel ?? item.category)
      }
    }
    return Array.from(seen.entries()).map(([key, label]) => ({ key, label }))
  }, [categories, items])

  // 当选中分类被清空或删除（如删光最后一个自定义模板）时自动回退至“全部”，避免滞留空屏
  const effectiveCategory =
    selectedCategory === 'all' || resolvedCategories.some((cat) => cat.key === selectedCategory)
      ? selectedCategory
      : 'all'

  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = { all: items.length }
    for (const item of items) {
      counts[item.category] = (counts[item.category] ?? 0) + 1
    }
    return counts
  }, [items])

  const filteredItems = React.useMemo(() => {
    const cleanQuery = query.trim()
    return items.filter((item) => {
      if (effectiveCategory !== 'all' && item.category !== effectiveCategory) {
        return false
      }
      if (!cleanQuery) return true
      const haystack = [
        item.title,
        item.description ?? '',
        item.categoryLabel ?? item.category,
        ...(item.tags ?? []),
        ...(item.meta ?? []),
        item.keywords ?? '',
      ].join(' ')
      return matchKeywordWithPinyin(haystack, cleanQuery)
    })
  }, [effectiveCategory, items, query])

  return (
    <Drawer
      {...dataProps}
      open={open}
      onClose={onClose}
      title={title}
      description={description}
      size={size}
      storageKey={storageKey}
      headerActions={headerActions}
      badge={
        <Badge variant="outline" size="xs" className="tabular-nums">
          {labels.countSummary(filteredItems.length, items.length)}
        </Badge>
      }
    >
      <div className="space-y-4">
        {/* 搜索框与分类筛选栏 */}
        <div className="space-y-2.5">
          <SearchInput
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onClear={query ? () => setQuery('') : undefined}
            placeholder={labels.searchPlaceholder}
            containerClassName="w-full"
          />

          {resolvedCategories.length > 0 && (
            <div
              className="flex flex-wrap items-center gap-1.5"
              role="group"
              aria-label={labels.categoryFilterAriaLabel}
            >
              <button
                type="button"
                data-abc-no-press-scale="true"
                aria-pressed={effectiveCategory === 'all'}
                onClick={() => setSelectedCategory('all')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer',
                  effectiveCategory === 'all'
                    ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                    : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                )}
              >
                <span>{labels.allCategory}</span>
                <span className="text-[10px] opacity-75 tabular-nums">{categoryCounts.all ?? 0}</span>
              </button>
              {resolvedCategories.map((cat) => {
                const active = effectiveCategory === cat.key
                return (
                  <button
                    key={cat.key}
                    type="button"
                    data-abc-no-press-scale="true"
                    aria-pressed={active}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer',
                      active
                        ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                        : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]'
                    )}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] opacity-75 tabular-nums">
                      {categoryCounts[cat.key] ?? 0}
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* 模板卡片网格 */}
        {filteredItems.length === 0 ? (
          <EmptyState
            size="sm"
            title={labels.emptyTitle}
            description={labels.emptyDescription}
            onReset={() => {
              setQuery('')
              setSelectedCategory('all')
            }}
            resetText={labels.resetFilter}
          />
        ) : (
          <div
            className={cn(
              'grid gap-3',
              columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
            )}
          >
            {filteredItems.map((item) => {
              const isActive = Boolean(activeId && item.id === activeId)
              return (
                <div
                  key={item.id}
                  data-slot="template-gallery-card"
                  data-selected={isActive ? 'true' : 'false'}
                  onClick={() => onSelect(item)}
                  className={cn(
                    'group relative flex cursor-pointer flex-col justify-between gap-3 rounded-[var(--abc-radius-lg,12px)] border p-3.5 transition-all',
                    isActive
                      ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]/35'
                      : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/35'
                  )}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]">
                          {item.icon ?? <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />}
                        </span>
                        <div className="min-w-0">
                          <h3 className="truncate text-xs font-semibold text-[var(--abc-fg)]">
                            {item.title}
                          </h3>
                          {item.categoryLabel && (
                            <p className="truncate text-[10px] text-[var(--abc-fg-muted)]">
                              {item.categoryLabel}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-1">
                        {item.isCustom && (
                          <Badge variant="info" size="xs">
                            {labels.customBadge}
                          </Badge>
                        )}
                        {isActive && (
                          <Badge variant="success" size="xs">
                            <Check className="mr-0.5 h-2.5 w-2.5" aria-hidden="true" />
                            {labels.activeBadge}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {item.description && (
                      <p className="line-clamp-2 text-[11px] leading-relaxed text-[var(--abc-fg-secondary)]">
                        {item.description}
                      </p>
                    )}

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/70 px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 border-t border-[var(--abc-border)]/70 pt-2.5">
                    <div className="flex min-w-0 flex-wrap items-center gap-2 text-[10px] text-[var(--abc-fg-muted)] tabular-nums">
                      {(item.meta ?? []).map((entry, idx) => (
                        <span key={`${entry}-${idx}`} className="truncate">
                          {entry}
                        </span>
                      ))}
                    </div>

                    <div className="flex shrink-0 items-center gap-1.5">
                      {item.isCustom && onDelete && (
                        <button
                          type="button"
                          data-abc-no-press-scale="true"
                          aria-label={`${labels.deleteAriaLabel}: ${item.title}`}
                          onClick={(event) => {
                            event.stopPropagation()
                            onDelete(item)
                          }}
                          className="inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-sm,6px)] border border-transparent text-[var(--abc-fg-muted)] transition-colors hover:border-rose-500/35 hover:bg-rose-500/10 hover:text-rose-500 cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      )}
                      <button
                        type="button"
                        data-abc-no-press-scale="true"
                        onClick={(event) => {
                          event.stopPropagation()
                          onSelect(item)
                        }}
                        className={cn(
                          'inline-flex h-6 items-center gap-1 rounded-[var(--abc-radius-sm,6px)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer',
                          isActive
                            ? 'border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white hover:opacity-90'
                            : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]'
                        )}
                      >
                        {labels.applyButton}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </Drawer>
  )
}

export default TemplateGalleryDrawer
