import {
  Activity,
  AlignHorizontalSpaceAround,
  AlertTriangle,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  Bot,
  Box,
  Braces,
  Briefcase,
  Building2,
  Calendar,
  Camera,
  Check,
  CheckCircle2,
  CheckSquare,
  Circle,
  CircleDot,
  ClipboardList,
  Clock,
  Cloud,
  Code2,
  Compass,
  Cookie,
  CornerDownLeft,
  CreditCard,
  Crosshair,
  Database,
  Download,
  Eraser,
  Eye,
  FileCode2,
  FileSpreadsheet,
  FileText,
  Film,
  Fingerprint,
  FlaskConical,
  Folder,
  FolderOpen,
  FolderTree,
  GitBranch,
  GitMerge,
  Globe,
  Globe2,
  Hand,
  HardDrive,
  Home,
  Hourglass,
  Image,
  Infinity as InfinityIcon,
  Keyboard,
  KeyRound,
  Laptop,
  Layers,
  Lightbulb,
  Link2,
  ListChecks,
  ListTree,
  Lock,
  Map as MapIcon,
  MessageSquare,
  Monitor,
  MousePointerClick,
  Network,
  Newspaper,
  Package,
  Pause,
  Pin,
  Play,
  Plug,
  Plus,
  Radio,
  RefreshCw,
  Repeat,
  Rocket,
  RotateCcw,
  Ruler,
  Scissors,
  ScrollText,
  Search,
  Send,
  Settings2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Sliders,
  Smartphone,
  Sparkles,
  Sprout,
  Square,
  Star,
  Table2,
  Tag,
  Terminal,
  Timer,
  Trash2,
  TrendingUp,
  Type,
  User,
  UserCheck,
  Wrench,
  XCircle,
  Zap,
  type LucideIcon,
} from 'lucide-react'

const SEMANTIC_ICON_MAP: Record<string, LucideIcon> = {
  goto: Globe,
  reload: RefreshCw,
  go_back: ArrowLeft,
  go_forward: ArrowRight,
  wait_for_selector: Hourglass,
  wait_for_network_idle: Radio,
  wait_for_navigation: Compass,
  wait_for_url: Link2,
  wait_for_text: Type,
  wait_for_load_state: Rocket,
  wait_for_timeout: Timer,
  click: MousePointerClick,
  type_text: Keyboard,
  press: CornerDownLeft,
  hover: Hand,
  select: ListChecks,
  check: CheckSquare,
  uncheck: Square,
  scroll: ScrollText,
  evaluate_js: Terminal,
  if_selector: GitBranch,
  repeat_until: Repeat,
  assert_visible: Eye,
  assert_not_visible: Shield,
  assert_text: CheckCircle2,
  assert_url: Lock,
  assert_status: Radio,
  extract_list: ListTree,
  extract_markdown: Bot,
  extract_table: Table2,
  extract_text: FileText,
  extract_attribute: Type,
  extract_links: Link2,
  extract_images: Image,
  extract_meta: Tag,
  extract_json_ld: Braces,
  extract_html: Code2,
  screenshot: Camera,
  element_screenshot: Crosshair,
  capture_pdf: FileSpreadsheet,
  capture_har: Network,
  capture_trace: Film,
  capture_page_bundle: Package,
  pause_for_human: Pause,
  vault_fill: KeyRound,
  vault_totp: ShieldCheck,
  html_snapshot: HardDrive,
  dom_snapshot: FolderTree,
  console_log: Monitor,
  network_log: Activity,
  human_delay: Timer,
  infinite_scroll: InfinityIcon,
  page_reload: RefreshCw,
  eval_js: Terminal,
  table_to_json: Table2,
  extract_all_links: Link2,
  trigger: Rocket,
  proxy: Globe2,
  fingerprint: Fingerprint,
  viewport: Monitor,
  network: ShieldCheck,
  runtime: Zap,
  substep: Layers,
  navigation: Compass,
  interaction: MousePointerClick,
  control: GitBranch,
  extraction: ListTree,
  artifact: Camera,
  scenario: Zap,
  preset: Globe,
  custom: Code2,
  '🌐': Globe,
  '🌍': Globe2,
  '🎭': Fingerprint,
  '🖥': Monitor,
  '🖥️': Monitor,
  '💻': Laptop,
  '📱': Smartphone,
  '🛡': ShieldCheck,
  '🛡️': ShieldCheck,
  '🔐': KeyRound,
  '🔑': KeyRound,
  '🔒': Lock,
  '⚡': Zap,
  '🚀': Rocket,
  '⏰': Clock,
  '🕒': Clock,
  '📅': Calendar,
  '📦': Package,
  '🔔': Bell,
  '👁': Eye,
  '🔁': Repeat,
  '🔄': RefreshCw,
  '↻': RotateCcw,
  '↺': RotateCcw,
  '🔀': GitBranch,
  '📸': Camera,
  '🎯': Crosshair,
  '📑': ListTree,
  '🤖': Bot,
  '📊': Table2,
  '📈': TrendingUp,
  '📝': FileText,
  '🔤': Type,
  '🔗': Link2,
  '🖼': Image,
  '🏷': Tag,
  '🧬': Braces,
  '🧩': Code2,
  '📄': FileCode2,
  '🕸': Network,
  '🎞': Film,
  '💾': HardDrive,
  '🌳': FolderTree,
  '📶': Activity,
  '⏳': Hourglass,
  '📡': Radio,
  '🧭': Compass,
  '⏱': Timer,
  '♾️': InfinityIcon,
  '♾': InfinityIcon,
  '∞': InfinityIcon,
  '🖱': MousePointerClick,
  '⌨️': Keyboard,
  '⌨': Keyboard,
  '⏎': CornerDownLeft,
  '👆': Hand,
  '🖐️': Hand,
  '📋': ClipboardList,
  '☑️': CheckSquare,
  '☑': CheckSquare,
  '⬜': Square,
  '📜': ScrollText,
  '✅': CheckCircle2,
  '✓': Check,
  '✗': XCircle,
  '🔴': CircleDot,
  '🟢': CircleDot,
  '●': Circle,
  '⏸': Pause,
  '⏯': Play,
  '▶': Play,
  '⏹': Square,
  '🔳': MousePointerClick,
  '〰': Activity,
  '⇄': Repeat,
  '🇺🇸': Globe2,
  '🇯🇵': Globe2,
  '🇬🇧': Globe2,
  '🇩🇪': Globe2,
  '🇸🇬': Globe2,
  '🇭🇰': Globe2,
  '🇰🇷': Globe2,
  '🇫🇷': Globe2,
  '✂️': Scissors,
  '✂': Scissors,
  '⚠️': AlertTriangle,
  '⚠': AlertTriangle,
  '🚨': ShieldAlert,
  '✨': Sparkles,
  '⭐': Star,
  '📁': Folder,
  '📂': FolderOpen,
  '🗂': Database,
  '🗑': Trash2,
  '🧹': Eraser,
  '📏': AlignHorizontalSpaceAround,
  '📐': Ruler,
  '🔌': Plug,
  '📥': Download,
  '🍪': Cookie,
  '💬': MessageSquare,
  '🔧': Wrench,
  '⚙️': Settings2,
  '⚙': Settings2,
  '🎛': Sliders,
  '💡': Lightbulb,
  '🏠': Home,
  '🏢': Building2,
  '🍎': Laptop,
  '🪟': Monitor,
  '🐧': Terminal,
  '➕': Plus,
  '🚫': XCircle,
  '🔍': Search,
  '🧑': UserCheck,
  '👤': User,
  '📌': Pin,
  '➡️': ArrowRight,
  '⬅️': ArrowLeft,
  '➡': ArrowRight,
  '⬅': ArrowLeft,
  '⤴': ArrowUpRight,
  '⤵': ArrowDownRight,
  '↷': GitMerge,
  '🐦': Send,
  '💼': Briefcase,
  '🧪': FlaskConical,
  '🗺': MapIcon,
  '🛒': ShoppingCart,
  '📰': Newspaper,
  '💳': CreditCard,
  '📘': BookOpen,
  '🌿': Sprout,
  '☁️': Cloud,
  '☁': Cloud,
  '➔': ArrowRight,
}

export function resolveSemanticLucideIcon(token?: string | null): LucideIcon {
  if (!token) return Box
  const trimmed = token.trim()
  if (SEMANTIC_ICON_MAP[trimmed]) return SEMANTIC_ICON_MAP[trimmed]
  const normalized = trimmed.replace(/\uFE0F/g, '')
  if (SEMANTIC_ICON_MAP[normalized]) return SEMANTIC_ICON_MAP[normalized]
  if (/^(?:\uD83C[\uDDE6-\uDDFF]){2}$/.test(normalized)) return Globe2
  return Box
}

const KNOWN_EMOJI_KEYS = Object.keys(SEMANTIC_ICON_MAP)
  .filter((k) => !/^[a-z0-9_]+$/i.test(k))
  .sort((a, b) => b.length - a.length)

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const INLINE_EMOJI_PATTERN = new RegExp(
  `(${KNOWN_EMOJI_KEYS.map((k) => `${escapeRegExp(k)}\\uFE0F?`).join('|')}|(?:\\uD83C[\\uDDE6-\\uDDFF]){2})`,
  'g'
)

export interface EmojiTextSegment {
  type: 'text' | 'emoji'
  value: string
  srText?: string
}

export function tokenizeEmojiSegments(input: string, preserveSrToken = true): EmojiTextSegment[] {
  if (!input) return []
  const matches = Array.from(input.matchAll(INLINE_EMOJI_PATTERN))
  if (matches.length === 0) return [{ type: 'text', value: input }]

  const segments: EmojiTextSegment[] = []
  let cursor = 0
  for (let i = 0; i < matches.length; i += 1) {
    const match = matches[i]!
    const matchIndex = match.index ?? 0
    const emojiToken = match[0]
    const rawBefore = input.slice(cursor, matchIndex)
    const hadLeadingSpace = rawBefore.endsWith(' ') && rawBefore.trim().length > 0
    const cleanBefore = hadLeadingSpace ? rawBefore.slice(0, -1) : rawBefore
    if (cleanBefore) segments.push({ type: 'text', value: cleanBefore })

    const afterIndex = matchIndex + emojiToken.length
    const nextChar = input[afterIndex]
    const hadTrailingSpace = nextChar === ' '
    cursor = hadTrailingSpace ? afterIndex + 1 : afterIndex

    const srToken = preserveSrToken
      ? `${hadLeadingSpace ? ' ' : ''}${emojiToken}${hadTrailingSpace ? ' ' : ''}`
      : undefined
    segments.push({ type: 'emoji', value: emojiToken, srText: srToken })
  }

  const tail = input.slice(cursor)
  if (tail) segments.push({ type: 'text', value: tail })
  return segments
}

export function extractLeadingEmojiToken(text: string): {
  prefix: string
  token: string | null
  rest: string
} {
  const trimmedStart = text.trimStart()
  let prefix = ''
  let working = trimmedStart
  if (working.startsWith('+ ')) {
    prefix = '+ '
    working = working.slice(2).trimStart()
  }
  for (const emoji of KNOWN_EMOJI_KEYS) {
    if (working.startsWith(emoji)) {
      const after = working.slice(emoji.length).replace(/^\uFE0F/, '')
      return { prefix, token: emoji, rest: after.replace(/^\s+/, '') }
    }
  }
  const flagMatch = working.match(/^((?:\uD83C[\uDDE6-\uDDFF]){2})\s*(.*)$/)
  if (flagMatch) {
    return { prefix, token: flagMatch[1]!, rest: flagMatch[2] ?? '' }
  }
  return { prefix: '', token: null, rest: text }
}

export function stripLeadingEmoji(text: string): string {
  const parsed = extractLeadingEmojiToken(text)
  if (!parsed.token) return text
  return `${parsed.prefix}${parsed.rest}`.trim()
}
