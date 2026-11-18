import React, { useMemo, useState } from 'react'
import {
  Card,
  FilterPillGroup,
  FilterToolbar,
  SearchInput,
  StatusTag,
  Switch,
  matchKeywordWithPinyin,
} from '@abc-design/react'
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react'
import {
  ALL_PLAYGROUND_ROUTES,
  PLAYGROUND_CATEGORIES,
  TOTAL_PRIMARY_COMPONENTS,
  TOTAL_REGISTERED_SYMBOLS,
  buildSectionDomId,
} from '../../registry'

export interface OverviewComponentExplorerProps {
  onJump: (path: string) => void
  onJumpToComponent: (routePath: string, anchorId: string, symbol: string) => void
}

export const OverviewComponentExplorer: React.FC<OverviewComponentExplorerProps> = ({
  onJump,
  onJumpToComponent,
}) => {
  const [keyword, setKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [onlyNew, setOnlyNew] = useState(false)

  const trimmed = keyword.trim()

  const filteredCategories = useMemo(() => {
    const tokens = trimmed.split(/\s+/).filter(Boolean)
    return PLAYGROUND_CATEGORIES.filter(
      (cat) => selectedCategory === 'all' || cat.key === selectedCategory
    )
      .map((cat) => {
        const matchedRoutes = cat.routes
          .map((route) => {
            const matchedComps = route.components.filter((comp) => {
              if (onlyNew && !comp.isNew) return false
              if (tokens.length === 0) return true
              const hay = [
                comp.symbol,
                ...(comp.subSymbols ?? []),
                comp.zhName,
                comp.summary,
                comp.keywords ?? '',
                route.label,
              ].join(' ')
              return tokens.every((tok) => matchKeywordWithPinyin(hay, tok))
            })

            const routeSelfMatches =
              !onlyNew &&
              tokens.length > 0 &&
              tokens.every((tok) =>
                matchKeywordWithPinyin(`${route.label} ${route.title} ${route.path}`, tok)
              )

            if (tokens.length === 0 && !onlyNew) {
              return { route, matchedComps: route.components }
            }
            if (matchedComps.length > 0) {
              return { route, matchedComps }
            }
            if (routeSelfMatches) {
              return { route, matchedComps: route.components }
            }
            return null
          })
          .filter((x): x is NonNullable<typeof x> => x !== null)

        return { category: cat, matchedRoutes }
      })
      .filter((entry) => entry.matchedRoutes.length > 0)
  }, [trimmed, selectedCategory, onlyNew])

  return (
    <Card
      title={`7 大领域 × ${ALL_PLAYGROUND_ROUTES.length} 路由 × ${TOTAL_REGISTERED_SYMBOLS} 导出组件符号全景索引`}
      subtitle={`共覆盖 ${TOTAL_PRIMARY_COMPONENTS} 组核心组件族与全部复合子组件/别名 · 点击任意组件标签可精准直达对应演练卡片（亦支持随时按 ⌘K 全局搜索）`}
      extra={<Compass className="h-4 w-4 text-[var(--abc-primary)]" />}
    >
      <div className="space-y-4">
        <FilterToolbar
          surface
          hasActiveFilters={Boolean(trimmed) || selectedCategory !== 'all' || onlyNew}
          onReset={() => {
            setKeyword('')
            setSelectedCategory('all')
            setOnlyNew(false)
          }}
          search={
            <SearchInput
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onClear={() => setKeyword('')}
              placeholder="输入组件名 (如 JsonTreeViewer / ProRowActionsOverflow / TagInput) 或中文..."
              className="w-full sm:w-80"
            />
          }
          filters={
            <FilterPillGroup
              size="xs"
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              options={[
                { value: 'all', label: '全部领域', count: ALL_PLAYGROUND_ROUTES.length },
                ...PLAYGROUND_CATEGORIES.map((c) => ({
                  value: c.key,
                  label: c.label,
                  count: c.routes.length,
                })),
              ]}
            />
          }
          trailing={
            <label className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--abc-fg-secondary)] cursor-pointer">
              <Switch size="xs" checked={onlyNew} onChange={setOnlyNew} />
              <Sparkles className="h-3 w-3 text-[var(--abc-primary)]" />
              <span>仅看近期新增/增强</span>
            </label>
          }
        />

        {filteredCategories.length === 0 ? (
          <div className="rounded-[var(--abc-radius-lg)] border border-dashed border-[var(--abc-border)] py-10 text-center text-xs text-[var(--abc-fg-muted)]">
            未找到与 “{keyword}” 匹配的组件或分类，请尝试其他英文符号或拼音首字母。
          </div>
        ) : (
          <div className="space-y-5">
            {filteredCategories.map(({ category, matchedRoutes }, catIdx) => (
              <div key={category.key} className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--abc-border)] pb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 items-center justify-center rounded bg-[var(--abc-primary-soft)] px-1.5 font-mono text-[11px] font-bold text-[var(--abc-primary)]">
                      0{catIdx + 1}
                    </span>
                    <span className="text-xs font-bold text-[var(--abc-fg)]">{category.label}</span>
                    <span className="hidden text-[11px] text-[var(--abc-fg-muted)] sm:inline">
                      · {category.description}
                    </span>
                  </div>
                  <StatusTag tone="neutral" size="xs" dot={false}>
                    {matchedRoutes.length} 页
                  </StatusTag>
                </div>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {matchedRoutes.map(({ route, matchedComps }) => (
                    <div
                      key={route.path}
                      className="flex flex-col justify-between rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/45 p-3 transition-colors hover:border-[var(--abc-primary)]/50"
                    >
                      <div>
                        <button
                          type="button"
                          onClick={() => onJump(route.path)}
                          className="group flex w-full items-center justify-between gap-2 text-left cursor-pointer"
                        >
                          <span className="text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]">
                            {route.label}
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-primary)]">
                            <span>{route.path}</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </span>
                        </button>
                        <p className="mt-1 line-clamp-1 text-[11px] text-[var(--abc-fg-muted)]">
                          {route.description}
                        </p>
                      </div>

                      {matchedComps.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {matchedComps.map((comp) => (
                            <button
                              key={comp.symbol}
                              type="button"
                              title={`${comp.zhName}：${comp.summary}（点击直达演练卡片）`}
                              onClick={() =>
                                onJumpToComponent(
                                  route.path,
                                  buildSectionDomId(comp.anchorSymbol),
                                  comp.symbol
                                )
                              }
                              className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium transition-colors cursor-pointer ${
                                comp.isNew
                                  ? 'border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/60 text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)]'
                                  : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]'
                              }`}
                            >
                              <span>{comp.symbol}</span>
                              {comp.subSymbols && comp.subSymbols.length > 0 && (
                                <span className="opacity-65">+{comp.subSymbols.length}</span>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}
