import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  collectAllExpandableKeys,
  computeTreeCheckState,
  filterTreeNodes,
  toggleTreeNodeChecked,
  type AbcTreeNode,
} from '@abc-design/core'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ChevronsDownUp,
  ChevronsUpDown,
  RotateCw,
  Search,
  X,
} from 'lucide-react'
import { useAbcConfig } from '../../provider/AbcProvider'
import type { AbcCaptchaAdapter, AbcCaptchaData } from '../../provider/types'
import { cn } from '../../utils/cn'
import Icon from '../icon/Icon'
import { Checkbox } from './Controls'
import { Input, baseFieldControlClass } from './Input'

export type { AbcTreeNode }

/* ==================== 1. Tree 级联勾选与拼音搜索树 ==================== */

export interface TreeProps {
  treeData: AbcTreeNode[]
  /** 是否显示节点复选框（如角色菜单权限分配） */
  checkable?: boolean
  /** 父子节点勾选状态是否完全独立不级联（默认 false，即默认开启父子级联） */
  checkStrictly?: boolean
  /** 受控选中节点 key 集合 */
  checkedKeys?: Array<string | number>
  /** 非受控初始选中节点 key 集合 */
  defaultCheckedKeys?: Array<string | number>
  /** 勾选状态变更回调（第二个参数附带半选祖先节点集合 halfCheckedKeys，方便后端权限保存） */
  onCheck?: (
    checkedKeys: Array<string | number>,
    info: { halfCheckedKeys: Array<string | number>; node: AbcTreeNode; checked: boolean }
  ) => void
  /** 受控点击高亮节点 */
  selectedKeys?: Array<string | number>
  onSelect?: (selectedKeys: Array<string | number>, node: AbcTreeNode) => void
  /** 默认是否全部展开（默认 true） */
  defaultExpandAll?: boolean
  /** 是否内置顶部搜索框（支持中文与拼音首字母过滤） */
  searchable?: boolean
  searchPlaceholder?: string
  /** 是否显示展开全部/收起全部快捷栏 */
  showToolbar?: boolean
  /** 自定义节点右侧扩展渲染区 */
  renderExtra?: (node: AbcTreeNode) => React.ReactNode
  className?: string
}

/**
 * 企业级层级树形控件 (Tree)
 * 内置 @abc-design/core 父子级联全选/半选计算引擎、拼音首字母搜索自动展开与全部展开/折叠工具条
 */
export const Tree: React.FC<TreeProps> = ({
  treeData,
  checkable = false,
  checkStrictly = false,
  checkedKeys: controlledChecked,
  defaultCheckedKeys = [],
  onCheck,
  selectedKeys: controlledSelected,
  onSelect,
  defaultExpandAll = true,
  searchable = false,
  searchPlaceholder = '搜索节点名称（支持拼音首字母）...',
  showToolbar = false,
  renderExtra,
  className,
}) => {
  const [keyword, setKeyword] = useState('')
  const [expandedSet, setExpandedSet] = useState<Set<string | number>>(() =>
    defaultExpandAll ? new Set(collectAllExpandableKeys(treeData)) : new Set()
  )
  const [internalChecked, setInternalChecked] = useState<Array<string | number>>(defaultCheckedKeys)
  const [internalSelected, setInternalSelected] = useState<Array<string | number>>([])

  // 当异步加载的 treeData 首次到达且开启 defaultExpandAll 时自动展开
  useEffect(() => {
    if (defaultExpandAll && treeData.length > 0 && expandedSet.size === 0) {
      setExpandedSet(new Set(collectAllExpandableKeys(treeData)))
    }
  }, [treeData, defaultExpandAll])

  const rawChecked = controlledChecked !== undefined ? controlledChecked : internalChecked
  const activeSelected = controlledSelected !== undefined ? controlledSelected : internalSelected

  const { checkedKeys, halfCheckedKeys } = useMemo(
    () => computeTreeCheckState(treeData, rawChecked, checkStrictly),
    [treeData, rawChecked, checkStrictly]
  )
  const checkedSet = useMemo(() => new Set(checkedKeys), [checkedKeys])
  const halfSet = useMemo(() => new Set(halfCheckedKeys), [halfCheckedKeys])

  const { filteredNodes, autoExpandedKeys } = useMemo(
    () => filterTreeNodes(treeData, keyword),
    [treeData, keyword]
  )

  const effectiveExpanded = useMemo(() => {
    if (!keyword.trim()) return expandedSet
    return new Set([...expandedSet, ...autoExpandedKeys])
  }, [expandedSet, autoExpandedKeys, keyword])

  const toggleExpand = (key: string | number) => {
    setExpandedSet((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const handleCheck = (node: AbcTreeNode, nextChecked: boolean) => {
    const res = toggleTreeNodeChecked(treeData, checkedKeys, node, nextChecked, checkStrictly)
    if (controlledChecked === undefined) {
      setInternalChecked(res.checkedKeys)
    }
    onCheck?.(res.checkedKeys, {
      halfCheckedKeys: res.halfCheckedKeys,
      node,
      checked: nextChecked,
    })
  }

  const handleSelectNode = (node: AbcTreeNode) => {
    if (node.disabled) return
    const next = [node.key]
    if (controlledSelected === undefined) {
      setInternalSelected(next)
    }
    onSelect?.(next, node)
  }

  const renderNodeList = (nodes: AbcTreeNode[], depth = 0): React.ReactNode => {
    return (
      <ul role={depth === 0 ? 'tree' : 'group'} className="m-0 list-none space-y-0.5 p-0">
        {nodes.map((node) => {
          const hasChildren = Boolean(node.children && node.children.length > 0)
          const isExpanded = effectiveExpanded.has(node.key)
          const isChecked = checkedSet.has(node.key)
          const isHalf = halfSet.has(node.key)
          const isSelected = activeSelected.includes(node.key)

          return (
            <li key={node.key} role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined}>
              <div
                style={{ paddingInlineStart: `${depth * 18 + 6}px` }}
                className={cn(
                  'group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] py-1 pr-2 text-xs transition-colors',
                  isSelected
                    ? 'bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]'
                    : 'text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]',
                  node.disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                <div className="flex min-w-0 flex-1 items-center gap-1.5">
                  {hasChildren ? (
                    <button
                      type="button"
                      aria-label={isExpanded ? `收起 ${node.title}` : `展开 ${node.title}`}
                      onClick={() => toggleExpand(node.key)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                    >
                      <ChevronRight
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-150',
                          isExpanded && 'rotate-90'
                        )}
                      />
                    </button>
                  ) : (
                    <span className="inline-block h-5 w-5 shrink-0" />
                  )}

                  {checkable && (
                    <Checkbox
                      checked={isChecked}
                      indeterminate={isHalf}
                      disabled={node.disabled}
                      onChange={(checked) => handleCheck(node, checked)}
                    />
                  )}

                  <button
                    type="button"
                    disabled={node.disabled}
                    onClick={() => {
                      if (checkable && !onSelect) {
                        handleCheck(node, !isChecked)
                      } else {
                        handleSelectNode(node)
                      }
                    }}
                    className="inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed"
                  >
                    {node.icon && <Icon name={node.icon} size={14} className="text-[var(--abc-fg-muted)]" />}
                    <span className="truncate">{node.title}</span>
                  </button>
                </div>

                {renderExtra && <div className="shrink-0">{renderExtra(node)}</div>}
              </div>

              {hasChildren && isExpanded && renderNodeList(node.children!, depth + 1)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className={cn('space-y-2', className)}>
      {(searchable || showToolbar) && (
        <div className="flex flex-wrap items-center gap-2">
          {searchable && (
            <div className="min-w-[180px] flex-1">
              <Input
                size="xs"
                allowClear
                prefix={<Search className="h-3.5 w-3.5" />}
                placeholder={searchPlaceholder}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          )}
          {showToolbar && (
            <div className="inline-flex items-center gap-1">
              <button
                type="button"
                onClick={() => setExpandedSet(new Set(collectAllExpandableKeys(treeData)))}
                className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer"
              >
                <ChevronsUpDown className="h-3 w-3" />
                全部展开
              </button>
              <button
                type="button"
                onClick={() => setExpandedSet(new Set())}
                className="inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer"
              >
                <ChevronsDownUp className="h-3 w-3" />
                全部折叠
              </button>
            </div>
          )}
        </div>
      )}

      <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2">
        {filteredNodes.length > 0 ? (
          renderNodeList(filteredNodes)
        ) : (
          <div className="py-6 text-center text-xs text-[var(--abc-fg-muted)]">暂无匹配的节点</div>
        )}
      </div>
    </div>
  )
}

/* ==================== 2. TagInput 多标签回车输入器 ==================== */

export interface TagInputProps {
  value?: string[]
  defaultValue?: string[]
  onChange?: (tags: string[]) => void
  placeholder?: string
  maxTags?: number
  disabled?: boolean
  className?: string
}

/**
 * 多标签胶囊输入框 (TagInput)
 * 支持回车或英文逗号生成标签、自动去重与退格删除末尾项
 */
export const TagInput: React.FC<TagInputProps> = ({
  value: controlledValue,
  defaultValue = [],
  onChange,
  placeholder = '输入后按回车添加标签...',
  maxTags = 20,
  disabled = false,
  className,
}) => {
  const [internalTags, setInternalTags] = useState<string[]>(defaultValue)
  const [draft, setDraft] = useState('')
  const tags = controlledValue !== undefined ? controlledValue : internalTags

  const commitTags = (next: string[]) => {
    if (controlledValue === undefined) setInternalTags(next)
    onChange?.(next)
  }

  const addDraft = () => {
    const clean = draft.trim()
    if (!clean || disabled) return
    if (tags.includes(clean) || tags.length >= maxTags) {
      setDraft('')
      return
    }
    commitTags([...tags, clean])
    setDraft('')
  }

  const removeAt = (idx: number) => {
    if (disabled) return
    commitTags(tags.filter((_, i) => i !== idx))
  }

  return (
    <div
      className={cn(
        'flex min-h-[var(--abc-control-h-sm)] flex-wrap items-center gap-1.5 px-2 py-1',
        baseFieldControlClass,
        disabled && 'opacity-65 cursor-not-allowed',
        className
      )}
    >
      {tags.map((tag, idx) => (
        <span
          key={`${tag}_${idx}`}
          className="inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-2 py-0.5 text-xs font-medium text-[var(--abc-primary)]"
        >
          <span>{tag}</span>
          {!disabled && (
            <button
              type="button"
              aria-label={`移除标签 ${tag}`}
              onClick={() => removeAt(idx)}
              className="rounded-full hover:opacity-75 cursor-pointer"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </span>
      ))}
      <input
        type="text"
        aria-label="添加标签输入"
        disabled={disabled || tags.length >= maxTags}
        value={draft}
        placeholder={tags.length === 0 ? placeholder : ''}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={addDraft}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault()
            addDraft()
          } else if (e.key === 'Backspace' && !draft && tags.length > 0) {
            removeAt(tags.length - 1)
          }
        }}
        className="min-w-[110px] flex-1 bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
      />
    </div>
  )
}

/* ==================== 3. SliderVerify 滑块拼图安全验证组件 ==================== */

export interface SliderVerifyProps {
  canvasWidth?: number
  canvasHeight?: number
  /** 验证通过回调，携带服务端 nonceStr 与滑块横向偏移像素值 */
  onSuccess: (data: { nonceStr: string; value: number }) => void
  onFail?: () => void
  /** 局部自定义验证码拉取函数（优先级高于 AbcProvider.captchaAdapter；均未传时启用内置离线 SVG 拼图挑战） */
  captchaFetcher?: AbcCaptchaAdapter
}

/** 生成纯前端演示用 SVG 拼图底图与滑块（保证组件库在无后端环境下亦可完整交互演示） */
function createStandaloneSvgCaptcha(width: number, height: number): AbcCaptchaData & { targetX: number } {
  const targetX = Math.floor(95 + Math.random() * Math.max(40, width - 165))
  const blockY = Math.floor(24 + Math.random() * Math.max(20, height - 80))
  const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1e3a8a"/>
        <stop offset="55%" stop-color="#2563eb"/>
        <stop offset="100%" stop-color="#0f766e"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#g)"/>
    <circle cx="${Math.round(width * 0.22)}" cy="${Math.round(height * 0.32)}" r="46" fill="rgba(255,255,255,0.08)"/>
    <circle cx="${Math.round(width * 0.78)}" cy="${Math.round(height * 0.7)}" r="58" fill="rgba(255,255,255,0.07)"/>
    <rect x="${targetX}" y="${blockY}" width="44" height="44" rx="8" fill="rgba(15,23,42,0.58)" stroke="rgba(255,255,255,0.65)" stroke-width="1.5"/>
  </svg>`
  const blockSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
    <rect x="1" y="1" width="42" height="42" rx="8" fill="#38bdf8" fill-opacity="0.88" stroke="#ffffff" stroke-width="2"/>
  </svg>`
  return {
    nonceStr: `local_${Date.now().toString(36)}`,
    canvasSrc: `data:image/svg+xml;utf8,${encodeURIComponent(bgSvg)}`,
    blockSrc: `data:image/svg+xml;utf8,${encodeURIComponent(blockSvg)}`,
    blockY,
    targetX,
  }
}

/**
 * 滑块拼图行为安全验证器 (SliderVerify)
 * 通过 AbcProvider.captchaAdapter 或 captchaFetcher 对接真实后端接口；未配置时自动回退离线矢量拼图校验
 */
export const SliderVerify: React.FC<SliderVerifyProps> = ({
  canvasWidth = 320,
  canvasHeight = 155,
  onSuccess,
  onFail,
  captchaFetcher,
}) => {
  const { captchaAdapter } = useAbcConfig()
  const activeFetcher = captchaFetcher ?? captchaAdapter

  const [captcha, setCaptcha] = useState<(AbcCaptchaData & { targetX?: number }) | null>(null)
  const [loading, setLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isFail, setIsFail] = useState(false)
  const [sliderLeft, setSliderLeft] = useState(0)
  const [blockLeft, setBlockLeft] = useState(0)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const startTime = useRef(0)

  const loadCaptcha = useCallback(async () => {
    setLoading(true)
    setIsSuccess(false)
    setIsFail(false)
    setSliderLeft(0)
    setBlockLeft(0)
    try {
      if (activeFetcher) {
        const data = await activeFetcher()
        setCaptcha(data)
      } else {
        setCaptcha(createStandaloneSvgCaptcha(canvasWidth, canvasHeight))
      }
    } catch {
      setCaptcha(createStandaloneSvgCaptcha(canvasWidth, canvasHeight))
    } finally {
      setLoading(false)
    }
  }, [activeFetcher, canvasWidth, canvasHeight])

  useEffect(() => {
    loadCaptcha()
  }, [loadCaptcha])

  const handleStart = (clientX: number) => {
    if (loading || isSuccess) return
    isDragging.current = true
    startX.current = clientX
    startTime.current = Date.now()
  }

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging.current || loading || isSuccess) return
      const deltaX = clientX - startX.current
      const maxMove = canvasWidth - 40
      const clamped = Math.max(0, Math.min(maxMove, deltaX))
      setSliderLeft(clamped)
      setBlockLeft(((canvasWidth - 60) / maxMove) * clamped)
    },
    [canvasWidth, loading, isSuccess]
  )

  const handleEnd = useCallback(() => {
    if (!isDragging.current || loading || isSuccess) return
    isDragging.current = false

    const duration = Date.now() - startTime.current
    if (duration > 10000 || !captcha) {
      setIsFail(true)
      onFail?.()
      setTimeout(loadCaptcha, 600)
      return
    }

    const moveLength = Math.round(blockLeft)
    // 若为纯前端内置拼图模式，校验与目标槽位的像素误差不超过 10px
    if (typeof captcha.targetX === 'number' && Math.abs(moveLength - captcha.targetX) > 10) {
      setIsFail(true)
      onFail?.()
      setTimeout(loadCaptcha, 550)
      return
    }

    setIsSuccess(true)
    onSuccess({
      nonceStr: captcha.nonceStr,
      value: moveLength,
    })
  }, [blockLeft, captcha, loading, isSuccess, onFail, onSuccess, loadCaptcha])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX)
    const onMouseUp = () => handleEnd()
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX)
    }
    const onTouchEnd = () => handleEnd()

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [handleMove, handleEnd])

  return (
    <div className="relative flex flex-col items-center select-none">
      <div
        className="relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
        style={{ width: canvasWidth, height: canvasHeight }}
      >
        {loading ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-[var(--abc-fg-muted)]">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--abc-primary)] border-t-transparent" />
            <span>加载安全拼图中...</span>
          </div>
        ) : (
          captcha && (
            <>
              <img
                src={captcha.canvasSrc}
                alt="安全验证背景"
                className="pointer-events-none h-full w-full object-cover"
              />
              <img
                src={captcha.blockSrc}
                alt="安全验证滑块"
                className="pointer-events-none absolute drop-shadow-md"
                style={{ top: captcha.blockY, left: blockLeft }}
              />
            </>
          )
        )}

        <button
          type="button"
          aria-label="刷新拼图"
          title="刷新拼图"
          onClick={loadCaptcha}
          className="absolute top-2 right-2 rounded-[var(--abc-radius-sm)] bg-black/45 p-1.5 text-white backdrop-blur-xs transition-colors hover:bg-black/65 cursor-pointer"
        >
          <RotateCw className={cn('h-3.5 w-3.5', loading && 'animate-spin')} />
        </button>

        {isSuccess && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-[var(--abc-success)]/90 text-sm font-medium text-white backdrop-blur-xs abc-animate-fade-in">
            <CheckCircle2 className="h-5 w-5" />
            <span>验证通过</span>
          </div>
        )}
      </div>

      <div
        className={cn(
          'relative mt-3.5 flex h-10 items-center overflow-hidden rounded-[var(--abc-radius-md)] border transition-colors',
          isSuccess
            ? 'border-[var(--abc-success)] bg-[var(--abc-success-soft)]'
            : isFail
              ? 'border-[var(--abc-danger)] bg-[var(--abc-danger-soft)]'
              : 'border-[var(--abc-border)] bg-[var(--abc-bg-muted)]'
        )}
        style={{ width: canvasWidth }}
      >
        <div
          className={cn(
            'absolute inset-y-0 left-0',
            isSuccess ? 'bg-[var(--abc-success)]/20' : 'bg-[var(--abc-primary)]/20'
          )}
          style={{ width: sliderLeft + 40 }}
        />

        <div className="pointer-events-none w-full text-center text-xs font-medium text-[var(--abc-fg-muted)]">
          {isSuccess ? '验证成功' : isFail ? '对齐偏差较大，请重试' : '向右拖动滑块对齐缺口'}
        </div>

        <div
          role="slider"
          aria-label="向右拖动滑块完成验证"
          aria-valuenow={Math.round(sliderLeft)}
          aria-valuemin={0}
          aria-valuemax={canvasWidth - 40}
          tabIndex={0}
          onMouseDown={(e) => handleStart(e.clientX)}
          onTouchStart={(e) => {
            if (e.touches[0]) handleStart(e.touches[0].clientX)
          }}
          className={cn(
            'absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing',
            isSuccess
              ? 'bg-[var(--abc-success)] text-white'
              : 'bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]'
          )}
          style={{ left: sliderLeft }}
        >
          {isSuccess ? <CheckCircle2 className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        </div>
      </div>
    </div>
  )
}

export default SliderVerify
