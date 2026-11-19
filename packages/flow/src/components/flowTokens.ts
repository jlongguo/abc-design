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
 * 5 套柔和低饱和语义色板（柔和蓝/浅薄荷绿/暖杏琥珀/浅粉玫瑰/清灰石板）
 * 全部通过 --abc-flow-* CSS 变量在亮暗双主题及局部覆盖子树下自动切换，免疫宿主 Tailwind 层叠冲突。
 */
export const FLOW_TONE_STYLES: Record<FlowTone, FlowToneStyleTokens> = {
  blue: {
    cardShell:
      'border-[var(--abc-flow-blue-shell-border)] bg-[var(--abc-flow-blue-shell-bg)]',
    headerText: 'text-[var(--abc-flow-blue-header-fg)]',
    headerBadgeBg:
      'bg-[var(--abc-flow-blue-badge-bg)] text-[var(--abc-flow-blue-badge-fg)]',
    selectedRing:
      'ring-2 ring-[var(--abc-flow-blue-ring)] border-[var(--abc-flow-blue-ring)]',
    sectionFrame:
      'border-[var(--abc-flow-blue-section-border)] bg-[var(--abc-flow-blue-section-bg)]',
    sectionTitle: 'text-[var(--abc-flow-blue-section-title)]',
  },
  green: {
    cardShell:
      'border-[var(--abc-flow-green-shell-border)] bg-[var(--abc-flow-green-shell-bg)]',
    headerText: 'text-[var(--abc-flow-green-header-fg)]',
    headerBadgeBg:
      'bg-[var(--abc-flow-green-badge-bg)] text-[var(--abc-flow-green-badge-fg)]',
    selectedRing:
      'ring-2 ring-[var(--abc-flow-green-ring)] border-[var(--abc-flow-green-ring)]',
    sectionFrame:
      'border-[var(--abc-flow-green-section-border)] bg-[var(--abc-flow-green-section-bg)]',
    sectionTitle: 'text-[var(--abc-flow-green-section-title)]',
  },
  amber: {
    cardShell:
      'border-[var(--abc-flow-amber-shell-border)] bg-[var(--abc-flow-amber-shell-bg)]',
    headerText: 'text-[var(--abc-flow-amber-header-fg)]',
    headerBadgeBg:
      'bg-[var(--abc-flow-amber-badge-bg)] text-[var(--abc-flow-amber-badge-fg)]',
    selectedRing:
      'ring-2 ring-[var(--abc-flow-amber-ring)] border-[var(--abc-flow-amber-ring)]',
    sectionFrame:
      'border-[var(--abc-flow-amber-section-border)] bg-[var(--abc-flow-amber-section-bg)]',
    sectionTitle: 'text-[var(--abc-flow-amber-section-title)]',
  },
  rose: {
    cardShell:
      'border-[var(--abc-flow-rose-shell-border)] bg-[var(--abc-flow-rose-shell-bg)]',
    headerText: 'text-[var(--abc-flow-rose-header-fg)]',
    headerBadgeBg:
      'bg-[var(--abc-flow-rose-badge-bg)] text-[var(--abc-flow-rose-badge-fg)]',
    selectedRing:
      'ring-2 ring-[var(--abc-flow-rose-ring)] border-[var(--abc-flow-rose-ring)]',
    sectionFrame:
      'border-[var(--abc-flow-rose-section-border)] bg-[var(--abc-flow-rose-section-bg)]',
    sectionTitle: 'text-[var(--abc-flow-rose-section-title)]',
  },
  slate: {
    cardShell:
      'border-[var(--abc-flow-slate-shell-border)] bg-[var(--abc-flow-slate-shell-bg)]',
    headerText: 'text-[var(--abc-flow-slate-header-fg)]',
    headerBadgeBg:
      'bg-[var(--abc-flow-slate-badge-bg)] text-[var(--abc-flow-slate-badge-fg)]',
    selectedRing:
      'ring-2 ring-[var(--abc-flow-slate-ring)] border-[var(--abc-flow-slate-ring)]',
    sectionFrame:
      'border-[var(--abc-flow-slate-section-border)] bg-[var(--abc-flow-slate-section-bg)]',
    sectionTitle: 'text-[var(--abc-flow-slate-section-title)]',
  },
}

/** 节点出口状态圆点与文字语义样式 */
export const FLOW_PORT_TONE_STYLES: Record<
  FlowPortTone,
  { dot: string; text: string }
> = {
  success: {
    dot: 'bg-[var(--abc-flow-port-success-dot)]',
    text: 'text-[var(--abc-flow-port-success-fg)]',
  },
  danger: {
    dot: 'bg-[var(--abc-flow-port-danger-dot)]',
    text: 'text-[var(--abc-flow-port-danger-fg)]',
  },
  warning: {
    dot: 'bg-[var(--abc-flow-port-warning-dot)]',
    text: 'text-[var(--abc-flow-port-warning-fg)]',
  },
  info: {
    dot: 'bg-[var(--abc-flow-port-info-dot)]',
    text: 'text-[var(--abc-flow-port-info-fg)]',
  },
  neutral: {
    dot: 'bg-[var(--abc-flow-port-neutral-dot)]',
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
