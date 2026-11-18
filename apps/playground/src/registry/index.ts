import type { AbcMenuItem, CommandActionItem } from '@abc-design/react'
import { FEEDBACK_PRO_AND_LINKAGE_CATEGORIES } from './domains/feedbackProAndLinkage'
import { FORMS_AND_DISPLAY_CATEGORIES } from './domains/formsAndDisplay'
import { FOUNDATION_AND_LAYOUT_CATEGORIES } from './domains/foundationAndLayout'
import type {
  PlaygroundCategoryEntry,
  PlaygroundRouteEntry,
  ResolvedComponentSearchHit,
} from './types'

export * from './types'

export function buildSectionDomId(anchorSymbol: string): string {
  return `comp-${anchorSymbol.replace(/[^a-zA-Z0-9_-]/g, '-')}`
}

/**
 * ABC Design Playground 唯一权威分类与组件目录注册表 (7 大领域 × 36 个聚焦路由)
 * 所有新增导出组件必须在此处登记并在对应页面挂载 <ComponentDocPreview>，由 check:playground-sync 自动校验。
 */
export const PLAYGROUND_CATEGORIES: PlaygroundCategoryEntry[] = [
  ...FOUNDATION_AND_LAYOUT_CATEGORIES,
  ...FORMS_AND_DISPLAY_CATEGORIES,
  ...FEEDBACK_PRO_AND_LINKAGE_CATEGORIES,
]

export const ALL_PLAYGROUND_ROUTES: PlaygroundRouteEntry[] = PLAYGROUND_CATEGORIES.flatMap(
  (cat) => cat.routes
)

export const PLAYGROUND_ROUTE_MAP: ReadonlyMap<
  string,
  { category: PlaygroundCategoryEntry; route: PlaygroundRouteEntry }
> = new Map(
  PLAYGROUND_CATEGORIES.flatMap((category) =>
    category.routes.map((route) => [route.path, { category, route }] as const)
  )
)

/**
 * 展开全部主组件与复合子件/别名符号，供 ⌘K 全局搜索、全景浏览器与 AST 同步门禁统一消费
 */
export const ALL_PLAYGROUND_COMPONENT_HITS: ResolvedComponentSearchHit[] =
  PLAYGROUND_CATEGORIES.flatMap((category) =>
    category.routes.flatMap((route) =>
      route.components.flatMap((comp) => {
        const anchorId = buildSectionDomId(comp.anchorSymbol)
        const sharedKeywords = [
          comp.symbol,
          ...(comp.subSymbols ?? []),
          comp.zhName,
          comp.summary,
          comp.keywords ?? '',
          route.label,
          category.label,
        ]
          .filter(Boolean)
          .join(' ')

        const primaryHit: ResolvedComponentSearchHit = {
          symbol: comp.symbol,
          isSubSymbol: false,
          parentSymbol: comp.symbol,
          zhName: comp.zhName,
          summary: comp.summary,
          pkg: comp.pkg,
          anchorId,
          routePath: route.path,
          routeLabel: route.label,
          categoryKey: category.key,
          categoryLabel: category.label,
          icon: route.icon,
          keywords: sharedKeywords,
          isNew: comp.isNew,
        }

        const subHits: ResolvedComponentSearchHit[] = (comp.subSymbols ?? []).map((sub) => ({
          symbol: sub,
          isSubSymbol: true,
          parentSymbol: comp.symbol,
          zhName: `${comp.zhName}（关联导出）`,
          summary: `归属 ${comp.symbol} 组件族 · ${comp.summary}`,
          pkg: comp.pkg,
          anchorId,
          routePath: route.path,
          routeLabel: route.label,
          categoryKey: category.key,
          categoryLabel: category.label,
          icon: route.icon,
          keywords: `${sub} ${comp.symbol} ${comp.zhName} ${comp.keywords ?? ''}`,
          isNew: comp.isNew,
        }))

        return [primaryHit, ...subHits]
      })
    )
  )

/** 统计全部独立注册的 PascalCase 组件符号总数 */
export const TOTAL_REGISTERED_SYMBOLS: number = new Set(
  ALL_PLAYGROUND_COMPONENT_HITS.map((h) => h.symbol)
).size

export const TOTAL_PRIMARY_COMPONENTS: number = ALL_PLAYGROUND_COMPONENT_HITS.filter(
  (h) => !h.isSubSymbol
).length

/**
 * 由注册表派生 ProLayout 树形菜单：
 * - 一级分类携带该分类下的子页面数角标；
 * - 二级页面自动将页内全部组件符号与别名注入 `keywords`，使侧边栏检索和 ⌘K 路由搜索均能通过组件名命中！
 */
export const PLAYGROUND_MENU_TREE: AbcMenuItem[] = PLAYGROUND_CATEGORIES.map((category) => ({
  key: category.key,
  label: category.label,
  icon: category.icon,
  badge: category.routes.length,
  keywords: category.enLabel,
  children: category.routes.map((route) => {
    const symbolCount = route.components.reduce(
      (acc, c) => acc + 1 + (c.subSymbols?.length ?? 0),
      0
    )
    const routeKeywords = route.components
      .flatMap((c) => [c.symbol, ...(c.subSymbols ?? []), c.zhName, c.keywords ?? ''])
      .filter(Boolean)
      .join(' ')

    return {
      key: route.key,
      label: route.label,
      path: route.path,
      icon: route.icon,
      badge: route.badge ?? (symbolCount > 0 ? symbolCount : undefined),
      keywords: `${route.title} ${route.description} ${routeKeywords}`,
    }
  }),
}))

const HOOK_AND_UTIL_SHORTCUTS: Array<{
  symbol: string
  zhName: string
  summary: string
  pkg: '@abc-design/react' | '@abc-design/core' | '@abc-design/charts'
  routePath: string
  anchorSymbol: string
  keywords: string
}> = [
  {
    symbol: 'useAbcConfig',
    zhName: '读取与切换全局主题令牌 Hook',
    summary: '获取 theme / resolvedTheme / toggleTheme / dictAdapter / toast 等全局上下文',
    pkg: '@abc-design/react',
    routePath: '/overview',
    anchorSymbol: 'AbcProvider',
    keywords: 'hook config theme dark mode',
  },
  {
    symbol: 'abcToast',
    zhName: '命令式全局消息通知队列',
    summary: 'abcToast.success / error / warning / info 一行唤起全局浮层通知',
    pkg: '@abc-design/react',
    routePath: '/feedback/toast-progress',
    anchorSymbol: 'ToastCard',
    keywords: 'toast message notification alert',
  },
  {
    symbol: 'useConfirm / abcConfirm',
    zhName: '命令式 Promise 二次确认对话框',
    summary: 'await abcConfirm({ title, message, tone }) 零受控状态发起确认拦截',
    pkg: '@abc-design/react',
    routePath: '/feedback/overlays-audit',
    anchorSymbol: 'ConfirmDialog',
    keywords: 'confirm promise dialog modal',
  },
  {
    symbol: 'abcProgress',
    zhName: '顶部轻量路由/异步进度条控制器',
    summary: 'abcProgress.start() / done() 命令式驱动顶部进度指示条',
    pkg: '@abc-design/react',
    routePath: '/feedback/toast-progress',
    anchorSymbol: 'Loading',
    keywords: 'nprogress topbar loading progress',
  },
  {
    symbol: 'useProTable',
    zhName: 'ProTable 状态与分页查询无头 Hook',
    summary: '抽离分页、查询条件、选中行与刷新动作的表格控制器 Hook',
    pkg: '@abc-design/react',
    routePath: '/pro/table',
    anchorSymbol: 'ProTable',
    keywords: 'hook table query pagination',
  },
  {
    symbol: 'useCursorStack',
    zhName: '游标流水分页历史栈 Hook',
    summary: '维护单向 next_cursor 翻页的上一页/下一页/回到首页状态栈',
    pkg: '@abc-design/react',
    routePath: '/display/pagination-empty',
    anchorSymbol: 'CursorPagination',
    keywords: 'cursor pagination hook keyset',
  },
  {
    symbol: 'formatQuotaBytes / formatQuotaDuration',
    zhName: '字节与时长配额智能单位格式化函数',
    summary: '自动选取最佳 TB/GB/MB 或 天/小时/分钟/秒 展示单位，兼容无上限文案',
    pkg: '@abc-design/react',
    routePath: '/form/inputs',
    anchorSymbol: 'ByteQuotaInput',
    keywords: 'quota format bytes duration unit',
  },
  {
    symbol: 'searchJsonTree / parseJsonTreeInput',
    zhName: 'JSON 树搜索与容错解析纯算法内核',
    summary: '支持节点截断保护、祖先路径自动收集与字符串安全解析',
    pkg: '@abc-design/core',
    routePath: '/display/structured',
    anchorSymbol: 'JsonTreeViewer',
    keywords: 'core json tree search jsonpath',
  },
  {
    symbol: 'evaluateRuleGroup / formatRuleGroupSummary',
    zhName: '规则构建器 AST 求值与可读摘要引擎',
    summary: '零依赖求值嵌套 AND/OR/NOT 条件组并生成自然语言筛选摘要',
    pkg: '@abc-design/core',
    routePath: '/linkage/query-builder',
    anchorSymbol: 'FilterBuilder',
    keywords: 'core query builder rule ast',
  },
  {
    symbol: 'computeObjectDiff / computeLineDiff',
    zhName: '结构化对象与逐行 LCS 代码差异算法',
    summary: '内置敏感键掩码脱敏的对象键值对比与文本行级差异比对',
    pkg: '@abc-design/core',
    routePath: '/linkage/wizard-batch',
    anchorSymbol: 'ProStepsForm',
    keywords: 'core diff lcs compare mask',
  },
]

export function buildPlaygroundCommandActions(
  onJumpToComponent: (routePath: string, anchorId: string, symbol: string) => void
): CommandActionItem[] {
  const componentItems: CommandActionItem[] = ALL_PLAYGROUND_COMPONENT_HITS.map((hit) => ({
    id: `comp_${hit.routePath}_${hit.symbol}`,
    symbol: hit.symbol,
    title: `<${hit.symbol} /> — ${hit.zhName}`,
    subtitle: `${hit.categoryLabel} / ${hit.routeLabel} · ${hit.summary}`,
    badge: hit.isNew && !hit.isSubSymbol ? `NEW · ${hit.pkg}` : hit.pkg,
    group: '组件直达',
    icon: hit.icon,
    keywords: hit.keywords,
    priority: hit.isSubSymbol ? 8 : 18,
    onTrigger: () => onJumpToComponent(hit.routePath, hit.anchorId, hit.symbol),
  }))

  const hookItems: CommandActionItem[] = HOOK_AND_UTIL_SHORTCUTS.map((fn) => ({
    id: `fn_${fn.symbol}`,
    symbol: fn.symbol.split(/\s*\/\s*/)[0],
    title: `${fn.symbol}() — ${fn.zhName}`,
    subtitle: `Hooks & 算法内核 · ${fn.summary}`,
    badge: fn.pkg,
    group: 'Hooks 与内核 API',
    icon: 'code',
    keywords: `${fn.symbol} ${fn.zhName} ${fn.summary} ${fn.keywords}`,
    priority: 10,
    onTrigger: () =>
      onJumpToComponent(fn.routePath, buildSectionDomId(fn.anchorSymbol), fn.symbol),
  }))

  return [...componentItems, ...hookItems]
}
