/**
 * Flow 画布通用原语视觉令牌与纯函数辅助工具
 * 严格零业务耦合，统一消费 @abc-design/tokens CSS 变量并兼顾亮暗双主题可读性。
 */

/** Flow 画布通用语义色调 */
export type FlowTone = 'blue' | 'green' | 'amber' | 'rose' | 'slate'

/** Flow 节点行内出口状态色调 */
export type FlowPortTone = 'success' | 'danger' | 'warning' | 'info' | 'neutral'

export interface FlowToneStyleTokens {
  /** 卡片柔和浅色外框（壳层背景 + 边框） */
  cardShell: string
  /** 卡头文本与图标强调色 */
  headerText: string
  /** 卡头副操作图标柔和底色 */
  headerBadgeBg: string
  /** 选中态光环颜色 */
  selectedRing: string
  /** 虚线分组框边框与浅色填充 */
  sectionFrame: string
  /** 虚线分组框标题文本色 */
  sectionTitle: string
}

/**
 * 5 套柔和低饱和语义色板（参考柔和蓝/浅薄荷绿/暖杏琥珀/浅粉玫瑰/清灰石板）
 * 亮色保持清透浅底高对比，暗色回退为通透低饱和半透明表面，避免刺眼荧光色块。
 */
export const FLOW_TONE_STYLES: Record<FlowTone, FlowToneStyleTokens> = {
  blue: {
    cardShell:
      'border-blue-300/90 bg-blue-100/85 dark:border-blue-500/45 dark:bg-blue-950/60',
    headerText: 'text-blue-900 dark:text-blue-100',
    headerBadgeBg: 'bg-white/65 text-blue-700 dark:bg-blue-900/60 dark:text-blue-200',
    selectedRing: 'ring-2 ring-blue-500/85 border-blue-500 dark:ring-blue-400/80 dark:border-blue-400',
    sectionFrame:
      'border-blue-300/85 bg-blue-50/35 dark:border-blue-500/45 dark:bg-blue-950/20',
    sectionTitle: 'text-blue-900/85 dark:text-blue-200',
  },
  green: {
    cardShell:
      'border-emerald-300/90 bg-emerald-100/80 dark:border-emerald-500/45 dark:bg-emerald-950/55',
    headerText: 'text-emerald-900 dark:text-emerald-100',
    headerBadgeBg: 'bg-white/65 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200',
    selectedRing:
      'ring-2 ring-emerald-500/85 border-emerald-500 dark:ring-emerald-400/80 dark:border-emerald-400',
    sectionFrame:
      'border-emerald-300/85 bg-emerald-50/35 dark:border-emerald-500/45 dark:bg-emerald-950/20',
    sectionTitle: 'text-emerald-900/85 dark:text-emerald-200',
  },
  amber: {
    cardShell:
      'border-amber-300/90 bg-amber-100/85 dark:border-amber-500/45 dark:bg-amber-950/55',
    headerText: 'text-amber-950 dark:text-amber-100',
    headerBadgeBg: 'bg-white/65 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200',
    selectedRing:
      'ring-2 ring-amber-500/85 border-amber-500 dark:ring-amber-400/80 dark:border-amber-400',
    sectionFrame:
      'border-amber-300/85 bg-amber-50/35 dark:border-amber-500/45 dark:bg-amber-950/20',
    sectionTitle: 'text-amber-950/85 dark:text-amber-200',
  },
  rose: {
    cardShell:
      'border-rose-300/90 bg-rose-100/85 dark:border-rose-500/45 dark:bg-rose-950/55',
    headerText: 'text-rose-950 dark:text-rose-100',
    headerBadgeBg: 'bg-white/65 text-rose-700 dark:bg-rose-900/60 dark:text-rose-200',
    selectedRing:
      'ring-2 ring-rose-500/85 border-rose-500 dark:ring-rose-400/80 dark:border-rose-400',
    sectionFrame:
      'border-rose-300/85 bg-rose-50/35 dark:border-rose-500/45 dark:bg-rose-950/20',
    sectionTitle: 'text-rose-950/85 dark:text-rose-200',
  },
  slate: {
    cardShell:
      'border-slate-300/95 bg-slate-200/75 dark:border-slate-600/70 dark:bg-slate-800/75',
    headerText: 'text-slate-800 dark:text-slate-100',
    headerBadgeBg: 'bg-white/70 text-slate-700 dark:bg-slate-700/75 dark:text-slate-200',
    selectedRing:
      'ring-2 ring-[var(--abc-primary)] border-[var(--abc-primary)]',
    sectionFrame:
      'border-slate-400/80 bg-slate-100/35 dark:border-slate-500/60 dark:bg-slate-900/35',
    sectionTitle: 'text-slate-700 dark:text-slate-200',
  },
}

/** 节点出口状态圆点与文字语义样式 */
export const FLOW_PORT_TONE_STYLES: Record<
  FlowPortTone,
  { dot: string; text: string }
> = {
  success: {
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    text: 'text-emerald-700 dark:text-emerald-300',
  },
  danger: {
    dot: 'bg-rose-500 dark:bg-rose-400',
    text: 'text-rose-700 dark:text-rose-300',
  },
  warning: {
    dot: 'bg-amber-500 dark:bg-amber-400',
    text: 'text-amber-700 dark:text-amber-300',
  },
  info: {
    dot: 'bg-blue-500 dark:bg-blue-400',
    text: 'text-blue-700 dark:text-blue-300',
  },
  neutral: {
    dot: 'bg-slate-400 dark:bg-slate-500',
    text: 'text-[var(--abc-fg-secondary)]',
  },
}

/** 解析出的 {{variable}} 模板变量位置与内容 */
export interface TemplateVariableToken {
  /** 完整匹配片段（如 "{{lastUserText}}"） */
  raw: string
  /** 去除花括号与首尾空白后的变量键（如 "lastUserText"） */
  key: string
  /** 在原字符串中的起始偏移 */
  start: number
  /** 在原字符串中的结束偏移（开区间） */
  end: number
  /** 出现序号（便于同一变量多次出现时精确区分 key 与定向移除） */
  occurrenceIndex: number
}

const TEMPLATE_VARIABLE_PATTERN = /\{\{\s*([^{}]+?)\s*\}\}/g

/** 从模板字符串中提取所有 {{variable}} 占位符列表 */
export function extractTemplateVariables(text: string): TemplateVariableToken[] {
  if (!text) return []
  const tokens: TemplateVariableToken[] = []
  TEMPLATE_VARIABLE_PATTERN.lastIndex = 0
  let match: RegExpExecArray | null = TEMPLATE_VARIABLE_PATTERN.exec(text)
  let occurrenceIndex = 0
  while (match !== null) {
    const raw = match[0]
    const key = match[1]?.trim() ?? ''
    if (key) {
      tokens.push({
        raw,
        key,
        start: match.index,
        end: match.index + raw.length,
        occurrenceIndex,
      })
      occurrenceIndex += 1
    }
    match = TEMPLATE_VARIABLE_PATTERN.exec(text)
  }
  return tokens
}

/** 从模板字符串中按偏移精确移除指定 {{variable}} 片段，并清理多余相邻空白 */
export function removeTemplateVariableToken(
  text: string,
  token: Pick<TemplateVariableToken, 'start' | 'end'>
): string {
  const before = text.slice(0, token.start)
  const after = text.slice(token.end)
  // 若变量两端各有一个空格，合并为单空格避免残留双空格
  if (before.endsWith(' ') && after.startsWith(' ')) {
    return `${before}${after.slice(1)}`
  }
  const merged = `${before}${after}`
  return merged.trim().length === 0 ? '' : merged
}

/** 在指定选区（start..end）处插入变量表达式并返回新文本与新光标位置 */
export function insertTemplateVariableAt(
  text: string,
  expression: string,
  selectionStart: number | null | undefined,
  selectionEnd: number | null | undefined,
  replaceAll = false
): { nextValue: string; nextCaret: number } {
  if (replaceAll) {
    return { nextValue: expression, nextCaret: expression.length }
  }
  const len = text.length
  const safeStart =
    typeof selectionStart === 'number' && selectionStart >= 0
      ? Math.min(selectionStart, len)
      : len
  const safeEnd =
    typeof selectionEnd === 'number' && selectionEnd >= safeStart
      ? Math.min(selectionEnd, len)
      : safeStart
  const nextValue = `${text.slice(0, safeStart)}${expression}${text.slice(safeEnd)}`
  return {
    nextValue,
    nextCaret: safeStart + expression.length,
  }
}
