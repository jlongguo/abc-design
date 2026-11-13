import React, { useState } from 'react'
import {
  AbcProvider,
  Button,
  DEFAULT_ABC_LAYOUT_SETTINGS,
  Dialog,
  FormField,
  ImagePreview,
  Input,
  ProLayout,
  StatusTag,
  type AbcBrandInfo,
  type AbcDictOption,
  type AbcLayoutSettings,
  type AbcMenuItem,
} from '@abc-design/react'
import { Building2, LogOut, Sparkles } from 'lucide-react'
import { ChartsDocsPage } from './pages/ChartsDocsPage'
import { DataAndFeedbackDocsPage } from './pages/DataAndFeedbackDocsPage'
import { GeneralAndFormDocsPage } from './pages/GeneralAndFormDocsPage'
import { LayoutsPage } from './pages/LayoutsPage'
import { OverviewPage } from './pages/OverviewPage'
import { ProConfigPage } from './pages/ProConfigPage'
import { ProTablePage } from './pages/ProTablePage'
import { TemplatesPage } from './pages/TemplatesPage'

const INITIAL_BRAND_SVG = `<svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="#2563eb"/><path d="M12 28L20 11L28 28H23.8L20 19.6L16.2 28H12Z" fill="#ffffff"/></svg>`

const MENU_TREE: AbcMenuItem[] = [
  {
    key: 'design',
    label: '设计系统与组件文档',
    icon: 'palette',
    children: [
      { key: 'overview', label: 'Design Tokens 总览', path: '/overview', icon: 'dashboard' },
      { key: 'docs-form', label: '通用与表单控件文档', path: '/docs/form', icon: 'components' },
      { key: 'docs-display', label: '数据展示与反馈文档', path: '/docs/display', icon: 'layers' },
      { key: 'docs-charts', label: '自适应图表与指标卡', path: '/docs/charts', icon: 'chart' },
    ],
  },
  {
    key: 'layout-suite',
    label: '完整布局方案',
    icon: 'layout',
    children: [
      { key: 'layouts', label: '5 模态布局工作台', path: '/layouts', icon: 'sidebar' },
    ],
  },
  {
    key: 'pro-suite',
    label: 'Pro 企业套件与模板',
    icon: 'table',
    children: [
      { key: 'pro-table', label: 'ProTable 数据表格', path: '/pro/table', icon: 'table' },
      { key: 'pro-config', label: 'ProConfigForm 配置页', path: '/pro/config', icon: 'config' },
      { key: 'templates', label: '5 套开箱业务页模板', path: '/templates', icon: 'sparkles', badge: '5' },
    ],
  },
]

const MOCK_DICTS: Record<string, AbcDictOption[]> = {
  tenant_status: [
    { label: '运行中', value: 'active', tone: 'success' },
    { label: '待开通', value: 'pending', tone: 'warning' },
    { label: '已冻结', value: 'suspended', tone: 'danger' },
  ],
}

export const App: React.FC = () => {
  const [pathname, setPathname] = useState('/overview')
  const [layoutSettings, setLayoutSettings] = useState<AbcLayoutSettings>(
    DEFAULT_ABC_LAYOUT_SETTINGS
  )
  const [brandModalOpen, setBrandModalOpen] = useState(false)
  const [brand, setBrand] = useState<AbcBrandInfo>({
    name: 'ABC Design',
    subtitle: 'Enterprise UI System',
    logo: INITIAL_BRAND_SVG,
  })
  const [draftBrand, setDraftBrand] = useState(brand)

  const brandWithAction: AbcBrandInfo = {
    ...brand,
    onClick: () => setPathname('/overview'),
    onEditBrand: () => {
      setDraftBrand(brand)
      setBrandModalOpen(true)
    },
  }

  return (
    <AbcProvider
      defaultWatermarkEnabled={false}
      watermarkText={['ABC Design Preview', 'Enterprise Internal']}
      dictAdapter={(code) => MOCK_DICTS[code] ?? []}
      permissionAdapter={(perm) => perm !== 'sys:forbidden'}
    >
      <ProLayout
        brand={brandWithAction}
        menuItems={MENU_TREE}
        pathname={pathname}
        onNavigate={(nextPath) => setPathname(nextPath)}
        settings={layoutSettings}
        onSettingsChange={setLayoutSettings}
        headerExtra={
          <StatusTag tone="neutral" className="hidden sm:inline-flex">
            <Building2 className="mr-1 inline h-3 w-3 text-[var(--abc-primary)]" />
            旗舰演示租户
          </StatusTag>
        }
        user={{
          name: 'Architect',
          role: 'Design System Lead',
          menuItems: [
            {
              key: 'edit_brand',
              label: '修改租户品牌 Logo / 名称',
              icon: <Sparkles className="h-3.5 w-3.5" />,
              onClick: () => {
                setDraftBrand(brand)
                setBrandModalOpen(true)
              },
            },
            {
              key: 'switch_auth_mode',
              label: '预览 Auth 登录分屏布局',
              dividerAbove: true,
              icon: <LogOut className="h-3.5 w-3.5" />,
              onClick: () => setLayoutSettings((s) => ({ ...s, mode: 'auth' })),
            },
          ],
        }}
        authRender={
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold text-[var(--abc-fg)]">欢迎体验 Auth 认证分屏模式</h2>
              <p className="mt-1 text-xs text-[var(--abc-fg-muted)]">
                当前正处于 ProLayout 的第 5 种拓扑模式 (<code>mode=&quot;auth&quot;</code>)。
              </p>
            </div>
            <FormField label="企业邮箱" required>
              <Input defaultValue="architect@abc-design.dev" />
            </FormField>
            <FormField label="访问口令" required>
              <Input type="password" defaultValue="AbcDesign#2026" />
            </FormField>
            <Button
              variant="primary"
              block
              onClick={() => setLayoutSettings((s) => ({ ...s, mode: 'sidebar' }))}
            >
              登录并返回控制台布局
            </Button>
          </div>
        }
      >
        {pathname === '/overview' && <OverviewPage onJump={setPathname} />}
        {pathname === '/docs/form' && <GeneralAndFormDocsPage />}
        {pathname === '/docs/display' && <DataAndFeedbackDocsPage />}
        {pathname === '/docs/charts' && <ChartsDocsPage />}
        {pathname === '/layouts' && (
          <LayoutsPage
            layoutSettings={layoutSettings}
            onChangeLayout={(patch) => setLayoutSettings((prev) => ({ ...prev, ...patch }))}
          />
        )}
        {pathname === '/pro/table' && <ProTablePage />}
        {pathname === '/pro/config' && (
          <ProConfigPage brand={brand} onUpdateBrand={setBrand} />
        )}
        {pathname === '/templates' && <TemplatesPage />}
      </ProLayout>

      {/* 导航栏快捷编辑租户级品牌弹窗 */}
      <Dialog
        open={brandModalOpen}
        onClose={() => setBrandModalOpen(false)}
        title="编辑租户品牌标识"
        size="sm"
        footer={
          <>
            <Button variant="secondary" onClick={() => setBrandModalOpen(false)}>
              取消
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setBrand(draftBrand)
                setBrandModalOpen(false)
              }}
            >
              保存生效
            </Button>
          </>
        }
      >
        <div className="space-y-3.5">
          <FormField label="项目名称" required>
            <Input
              value={draftBrand.name}
              onChange={(e) => setDraftBrand((p) => ({ ...p, name: e.target.value }))}
            />
          </FormField>
          <FormField label="副标题">
            <Input
              value={draftBrand.subtitle ?? ''}
              onChange={(e) => setDraftBrand((p) => ({ ...p, subtitle: e.target.value }))}
            />
          </FormField>
          <FormField label="Logo 图片直链或 SVG 矢量源码">
            <div className="flex items-center gap-2.5">
              <ImagePreview
                src={typeof draftBrand.logo === 'string' ? draftBrand.logo : ''}
                width={38}
                height={38}
              />
              <Input
                value={typeof draftBrand.logo === 'string' ? draftBrand.logo : ''}
                onChange={(e) => setDraftBrand((p) => ({ ...p, logo: e.target.value }))}
              />
            </div>
          </FormField>
        </div>
      </Dialog>
    </AbcProvider>
  )
}

export default App
