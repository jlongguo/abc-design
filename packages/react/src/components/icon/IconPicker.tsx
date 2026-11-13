import React, { useMemo, useState } from 'react'
import { matchKeywordWithPinyin } from '@abc-design/core'
import { Check, ChevronDown, Search, X } from 'lucide-react'
import { cn } from '../../utils/cn'
import Dialog from '../feedback/Dialog'
import { baseFieldControlClass, Input } from '../form/Input'
import Icon from './Icon'

export interface IconItem {
  name: string
  label: string
  category: string
}

export const ICON_CATALOG: IconItem[] = [
  { name: 'LayoutDashboard', label: '控制大盘', category: 'nav' },
  { name: 'Home', label: '首页门户', category: 'nav' },
  { name: 'Menu', label: '菜单管理', category: 'nav' },
  { name: 'Compass', label: '业务导航', category: 'nav' },
  { name: 'Layers', label: '多级节点', category: 'nav' },
  { name: 'Globe', label: '全球站点', category: 'nav' },
  { name: 'Radio', label: '广播信号', category: 'nav' },
  { name: 'Activity', label: '实时监控', category: 'nav' },

  { name: 'Users', label: '用户管理', category: 'user' },
  { name: 'User', label: '个人中心', category: 'user' },
  { name: 'UserCheck', label: '实名认证', category: 'user' },
  { name: 'UserCog', label: '用户配置', category: 'user' },
  { name: 'ShieldCheck', label: '角色权限', category: 'user' },
  { name: 'Shield', label: '安全白名单', category: 'user' },
  { name: 'KeyRound', label: '接口鉴权', category: 'user' },
  { name: 'Building2', label: '租户与供应商', category: 'user' },
  { name: 'Network', label: '代理分销', category: 'user' },

  { name: 'ShoppingBag', label: '订单管理', category: 'order' },
  { name: 'ShoppingCart', label: '购物车', category: 'order' },
  { name: 'Store', label: '商城中心', category: 'order' },
  { name: 'Receipt', label: '账单票据', category: 'order' },
  { name: 'Wallet', label: '客户钱包', category: 'order' },
  { name: 'CircleDollarSign', label: '资金变动', category: 'order' },
  { name: 'Coins', label: '提现结算', category: 'order' },
  { name: 'TrendingUp', label: '营收增长', category: 'order' },
  { name: 'CreditCard', label: '支付充值', category: 'order' },
  { name: 'Ticket', label: '优惠折扣', category: 'order' },

  { name: 'BarChart3', label: '数据报表', category: 'data' },
  { name: 'BarChart2', label: '图表分析', category: 'data' },
  { name: 'LineChart', label: '趋势统计', category: 'data' },
  { name: 'PieChart', label: '占比分布', category: 'data' },
  { name: 'Database', label: '数据源', category: 'data' },
  { name: 'FileSpreadsheet', label: '报表明细', category: 'data' },
  { name: 'HardDrive', label: '实例资产', category: 'data' },

  { name: 'FileText', label: '文章管理', category: 'content' },
  { name: 'FolderTree', label: '分类目录', category: 'content' },
  { name: 'Tags', label: '标签库', category: 'content' },
  { name: 'Tag', label: '单标签', category: 'content' },
  { name: 'MessageSquare', label: '留言评论', category: 'content' },
  { name: 'MessageSquareQuote', label: '动态说说', category: 'content' },
  { name: 'Image', label: '图片媒体', category: 'content' },
  { name: 'Link2', label: '友情链接', category: 'content' },
  { name: 'BookMarked', label: '字典常量', category: 'content' },
  { name: 'Folder', label: '文件夹', category: 'content' },

  { name: 'Settings', label: '系统设置', category: 'system' },
  { name: 'SlidersHorizontal', label: '系统参数', category: 'system' },
  { name: 'Sliders', label: '配置中心', category: 'system' },
  { name: 'ScrollText', label: '系统日志', category: 'system' },
  { name: 'Clock', label: '定时调度', category: 'system' },
  { name: 'Server', label: '服务集群', category: 'system' },
  { name: 'Cpu', label: '系统监控', category: 'system' },
  { name: 'Flame', label: '营销活动', category: 'system' },
  { name: 'CheckSquare', label: '计划任务', category: 'system' },
  { name: 'Bell', label: '消息通知', category: 'system' },
  { name: 'Lock', label: '安全锁定', category: 'system' },

  { name: 'Search', label: '快速搜索', category: 'tool' },
  { name: 'Edit3', label: '编辑修改', category: 'tool' },
  { name: 'Trash2', label: '回收废弃', category: 'tool' },
  { name: 'Plus', label: '新增创建', category: 'tool' },
  { name: 'RefreshCw', label: '同步刷新', category: 'tool' },
  { name: 'Upload', label: '数据上传', category: 'tool' },
  { name: 'Download', label: '导出下载', category: 'tool' },
  { name: 'Eye', label: '浏览查看', category: 'tool' },
  { name: 'HelpCircle', label: '帮助支持', category: 'tool' },
  { name: 'Send', label: '消息推送', category: 'tool' },
]

const CATEGORIES = [
  { id: 'all', label: '全部图标' },
  { id: 'nav', label: '导航大盘' },
  { id: 'user', label: '用户组织' },
  { id: 'order', label: '业务交易' },
  { id: 'data', label: '数据报表' },
  { id: 'content', label: '内容资讯' },
  { id: 'system', label: '系统运维' },
  { id: 'tool', label: '通用工具' },
]

export interface IconPickerProps {
  /** 受控模态窗打开状态；若省略则自动渲染为带触发器的表单选择控件 */
  open?: boolean
  /** 当前图标值（兼容旧版受控模态属性名） */
  current?: string
  /** 受控表单图标值 */
  value?: string
  /** 关闭模态回调 */
  onClose?: () => void
  /** 选择图标回调（兼容旧版受控模态属性名） */
  onSelect?: (iconName: string) => void
  /** 表单值变更回调 */
  onChange?: (iconName: string) => void
  /** 内联触发器占位提示 */
  placeholder?: string
  /** 是否允许一键清空 */
  clearable?: boolean
  /** 是否禁用 */
  disabled?: boolean
  className?: string
}

/**
 * 企业级可视化菜单图标选择器 (IconPicker)
 * 同时支持两种调用模式：
 * 1. 受控弹窗模式：<IconPicker open={open} current={val} onClose={...} onSelect={...} />
 * 2. 内联表单控件模式：<IconPicker value={val} onChange={setVal} />
 */
export const IconPicker: React.FC<IconPickerProps> = ({
  open,
  current,
  value,
  onClose,
  onSelect,
  onChange,
  placeholder = '点击选择菜单图标',
  clearable = true,
  disabled = false,
  className,
}) => {
  const [innerOpen, setInnerOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const isControlledModal = typeof open === 'boolean'
  const isModalOpen = isControlledModal ? open : innerOpen
  const selectedIcon = value ?? current ?? ''

  const handleCloseModal = () => {
    if (isControlledModal) {
      onClose?.()
    } else {
      setInnerOpen(false)
    }
  }

  const handlePick = (iconName: string) => {
    onSelect?.(iconName)
    onChange?.(iconName)
    handleCloseModal()
  }

  const filteredList = useMemo(() => {
    const key = keyword.trim()
    return ICON_CATALOG.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false
      }
      if (!key) return true
      return matchKeywordWithPinyin(`${item.label} ${item.name}`, key)
    })
  }, [keyword, activeCategory])

  const selectedMeta = useMemo(
    () => ICON_CATALOG.find((i) => i.name.toLowerCase() === selectedIcon.toLowerCase()),
    [selectedIcon]
  )

  const modalNode = (
    <Dialog open={isModalOpen} onClose={handleCloseModal} title="选择系统图标" size="xl">
      <div className="space-y-3.5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-[200px] flex-1">
            <Input
              allowClear
              placeholder="搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）..."
              value={keyword}
              prefix={<Search className="h-3.5 w-3.5" />}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          {selectedIcon && (
            <div className="flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs">
              <span className="text-[var(--abc-fg-muted)]">当前选择:</span>
              <Icon name={selectedIcon} size={15} className="text-[var(--abc-primary)]" />
              <span className="font-mono font-medium text-[var(--abc-fg)]">{selectedIcon}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer',
                activeCategory === cat.id
                  ? 'bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]'
                  : 'text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="max-h-[360px] overflow-y-auto pr-1">
          {filteredList.length > 0 ? (
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5">
              {filteredList.map((item) => {
                const isSelected = selectedIcon === item.name
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handlePick(item.name)}
                    className={cn(
                      'group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer',
                      isSelected
                        ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]'
                        : 'border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]'
                    )}
                  >
                    {isSelected && (
                      <span className="absolute top-1.5 right-1.5 text-[var(--abc-primary)]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                    )}
                    <div className="mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]">
                      <Icon
                        name={item.name}
                        size={20}
                        className={cn(
                          'transition-transform group-hover:scale-110',
                          isSelected
                            ? 'text-[var(--abc-primary)]'
                            : 'text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]'
                        )}
                      />
                    </div>
                    <span className="w-full truncate text-xs font-medium text-[var(--abc-fg)]">
                      {item.label}
                    </span>
                    <span className="mt-0.5 w-full truncate font-mono text-[10px] text-[var(--abc-fg-muted)]">
                      {item.name}
                    </span>
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="py-10 text-center text-xs text-[var(--abc-fg-muted)]">
              <p>未找到匹配 “{keyword}” 的预设图标</p>
              {keyword.trim() && (
                <button
                  type="button"
                  onClick={() => handlePick(keyword.trim())}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] px-3 py-1.5 font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer"
                >
                  <span>使用自定义图标名:</span>
                  <span className="font-mono font-semibold">{keyword.trim()}</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Dialog>
  )

  if (isControlledModal) {
    return modalNode
  }

  return (
    <>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setInnerOpen(true)}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            setInnerOpen(true)
          }
        }}
        className={cn(
          'flex h-[var(--abc-control-h-sm)] w-full items-center justify-between gap-2 px-2.5 text-xs cursor-pointer select-none',
          baseFieldControlClass,
          disabled && 'opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]',
          className
        )}
      >
        {selectedIcon ? (
          <span className="flex min-w-0 items-center gap-2">
            <Icon name={selectedIcon} size={15} className="shrink-0 text-[var(--abc-primary)]" />
            <span className="truncate font-medium text-[var(--abc-fg)]">
              {selectedMeta ? `${selectedMeta.label} (${selectedIcon})` : selectedIcon}
            </span>
          </span>
        ) : (
          <span className="truncate text-[var(--abc-fg-placeholder)]">{placeholder}</span>
        )}
        <span className="flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]">
          {clearable && selectedIcon && !disabled && (
            <button
              type="button"
              aria-label="清空图标"
              onClick={(e) => {
                e.stopPropagation()
                onSelect?.('')
                onChange?.('')
              }}
              className="rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer"
            >
              <X className="h-3 w-3" />
            </button>
          )}
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      </div>
      {modalNode}
    </>
  )
}

export default IconPicker
