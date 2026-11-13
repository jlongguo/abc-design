/**
 * 零外部依赖的中文拼音首字母边界匹配引擎
 * 基于标准 GB2312 汉字编码区间提取首字母，供全局指令面板、Select、Tree 与表格本地过滤共用
 */

const PINYIN_BOUNDARIES: ReadonlyArray<{ letter: string; start: string }> = [
  { letter: 'a', start: '啊' },
  { letter: 'b', start: '芭' },
  { letter: 'c', start: '擦' },
  { letter: 'd', start: '搭' },
  { letter: 'e', start: '蛾' },
  { letter: 'f', start: '发' },
  { letter: 'g', start: '噶' },
  { letter: 'h', start: '哈' },
  { letter: 'j', start: '击' },
  { letter: 'k', start: '喀' },
  { letter: 'l', start: '垃' },
  { letter: 'm', start: '妈' },
  { letter: 'n', start: '拿' },
  { letter: 'o', start: '哦' },
  { letter: 'p', start: '啪' },
  { letter: 'q', start: '期' },
  { letter: 'r', start: '然' },
  { letter: 's', start: '撒' },
  { letter: 't', start: '塌' },
  { letter: 'w', start: '挖' },
  { letter: 'x', start: '昔' },
  { letter: 'y', start: '压' },
  { letter: 'z', start: '匝' },
]

/** 提取单个字符的拼音首字母，非中文字符原样转小写返回 */
export function getCharInitial(ch: string): string {
  if (!/[\u4e00-\u9fa5]/.test(ch)) {
    return ch.toLowerCase()
  }
  for (let i = PINYIN_BOUNDARIES.length - 1; i >= 0; i--) {
    if (ch.localeCompare(PINYIN_BOUNDARIES[i].start, 'zh-CN') >= 0) {
      return PINYIN_BOUNDARIES[i].letter
    }
  }
  return ch.toLowerCase()
}

/** 提取完整字符串的连续拼音首字母串（例如：“角色权限管理” -> “jsqxgl”） */
export function getPinyinInitials(text: string): string {
  return Array.from(text).map(getCharInitial).join('')
}

/** 判断目标文本是否命中关键字（同时支持不区分大小写的原文包含与拼音首字母包含） */
export function matchKeywordWithPinyin(target: string, keyword: string): boolean {
  const cleanKw = keyword.trim().toLowerCase()
  if (!cleanKw) return true
  const cleanTarget = target.toLowerCase()
  if (cleanTarget.includes(cleanKw)) return true
  return getPinyinInitials(target).includes(cleanKw)
}
