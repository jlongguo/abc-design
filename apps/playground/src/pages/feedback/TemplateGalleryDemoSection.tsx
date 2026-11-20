import React, { useState } from 'react'
import {
  Button,
  StatusTag,
  TemplateGalleryDrawer,
  abcToast,
  type TemplateGalleryItem,
} from '@abc-design/react'
import { Camera, FileJson, Globe, LayoutGrid, ShieldCheck } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented } from '../../components/PropKnobs'

const INITIAL_TEMPLATES: TemplateGalleryItem[] = [
  {
    id: 'tpl-screenshot',
    title: '全页高清截屏与渲染体检',
    description: '打开目标页面并等待主内容稳定，生成 1440px 全页截图与核心元数据。',
    category: 'capture',
    categoryLabel: '采集与截屏',
    icon: <Camera className="h-3.5 w-3.5" />,
    tags: ['screenshot', 'full_page', 'fast-cdp'],
    meta: ['3 步骤', '≈ 1.8s'],
  },
  {
    id: 'tpl-extract-list',
    title: '结构化商品目录分页提取',
    description: '通过 CSS 选择器批量提取卡片列表字段并自动输出标准化 JSON 表格。',
    category: 'extract',
    categoryLabel: '结构化提取',
    icon: <FileJson className="h-3.5 w-3.5" />,
    tags: ['extract_list', 'pagination', 'json'],
    meta: ['5 步骤', '结构化表'],
  },
  {
    id: 'tpl-enclave-auth',
    title: '零知识安全凭证登录巡检',
    description: '结合 vault_fill 与 vault_totp 自动完成受保护站点健康状态核验。',
    category: 'security',
    categoryLabel: '安全与认证',
    icon: <ShieldCheck className="h-3.5 w-3.5" />,
    tags: ['vault_fill', 'vault_totp', 'HITL'],
    meta: ['6 步骤', 'Enclave'],
  },
  {
    id: 'tpl-custom-monitor',
    title: '品牌官网首屏可用性巡检（自定义）',
    description: '团队保存的自定义工作流草稿，支持从画廊内一键复用或清理。',
    category: 'custom',
    categoryLabel: '团队自定义',
    icon: <Globe className="h-3.5 w-3.5" />,
    tags: ['custom', 'cron', 'sla'],
    meta: ['4 步骤', '项目预设'],
    isCustom: true,
  },
]

export const TemplateGalleryDemoSection: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [columns, setColumns] = useState<1 | 2>(2)
  const [items, setItems] = useState<TemplateGalleryItem[]>(INITIAL_TEMPLATES)
  const [activeId, setActiveId] = useState<string>('tpl-screenshot')

  const activeItem = items.find((item) => item.id === activeId)

  return (
    <ComponentDocPreview
      title="TemplateGalleryDrawer 拼音检索模板画廊抽屉"
      components={['TemplateGalleryDrawer']}
      description="面向多分类工作流/配置预设库的侧边画廊抽屉：内置中文拼音首字母搜索、分类计数筛选胶囊、卡片标签元信息与自定义模板删除管理。"
      controls={
        <KnobSegmented
          label="columns"
          value={columns}
          onChange={setColumns}
          options={[
            { label: '2 列网格', value: 2 },
            { label: '1 列清单', value: 1 },
          ]}
        />
      }
      onResetKnobs={() => {
        setColumns(2)
        setItems(INITIAL_TEMPLATES)
        setActiveId('tpl-screenshot')
        setOpen(false)
      }}
      code={`<TemplateGalleryDrawer
  open={open}
  onClose={() => setOpen(false)}
  title="工作流模板市场"
  items={items}
  activeId={activeId}
  columns={${columns}}
  onSelect={(item) => setActiveId(item.id)}
  onDelete={(item) => removeTemplate(item.id)}
/>`}
      apiRows={[
        { prop: 'items', type: 'TemplateGalleryItem[]', required: true, description: '模板项列表（支持 icon、category、tags、meta 与 isCustom）' },
        { prop: 'activeId', type: 'string | null', description: '当前激活模板 ID，自动高亮卡片边框与状态徽标' },
        { prop: 'onSelect / onDelete', type: '(item: TemplateGalleryItem) => void', description: '选用模板与删除自定义模板回调' },
        { prop: 'columns', type: '1 | 2', defaultValue: '2', description: '抽屉内卡片网格列数' },
      ]}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 p-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--abc-fg)]">
            <span>当前激活模板：</span>
            <StatusTag tone="primary" size="xs">{activeItem?.title ?? '未选择'}</StatusTag>
          </div>
          <p className="text-[11px] text-[var(--abc-fg-muted)]">
            点击右侧按钮打开抽屉，支持输入“截屏”或拼音首字母“jp / sp”瞬时检索。
          </p>
        </div>

        <Button
          size="sm"
          variant="primary"
          pressScale={false}
          leftIcon={<LayoutGrid className="h-3.5 w-3.5" />}
          onClick={() => setOpen(true)}
        >
          打开模板画廊 ({items.length})
        </Button>
      </div>

      <TemplateGalleryDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="工作流模板画廊"
        description="支持分类筛选、关键词与中文拼音首字母检索，快速应用官方模板或团队保存草稿。"
        items={items}
        activeId={activeId}
        columns={columns}
        onSelect={(item) => {
          setActiveId(item.id)
          setOpen(false)
          abcToast.success(`已应用模板：${item.title}`)
        }}
        onDelete={(item) => {
          setItems((prev) => prev.filter((t) => t.id !== item.id))
          abcToast.info(`已删除自定义模板：${item.title}`)
        }}
      />
    </ComponentDocPreview>
  )
}
