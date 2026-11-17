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
import { ChartsAndMetricsPage } from './pages/charts/ChartsAndMetricsPage'
import { BadgesAvatarMediaPage } from './pages/display/BadgesAvatarMediaPage'
import { PaginationAndEmptyPage } from './pages/display/PaginationAndEmptyPage'
import { StructuredDisplayPage } from './pages/display/StructuredDisplayPage'
import { AlertsAndErrorBannersPage } from './pages/feedback/AlertsAndErrorBannersPage'
import { DialogsDrawersAndAuditPage } from './pages/feedback/DialogsDrawersAndAuditPage'
import { ToastLoadingProgressPage } from './pages/feedback/ToastLoadingProgressPage'
import { WatermarkPermissionBoundaryPage } from './pages/feedback/WatermarkPermissionBoundaryPage'
import { PickersAndTransferPage } from './pages/form/PickersAndTransferPage'
import { SelectSuitePage } from './pages/form/SelectSuitePage'
import { SelectionControlsPage } from './pages/form/SelectionControlsPage'
import { TextAndNumberInputsPage } from './pages/form/TextAndNumberInputsPage'
import { TreeAndCascaderPage } from './pages/form/TreeAndCascaderPage'
import { UploadsVerifyAndMarkdownPage } from './pages/form/UploadsVerifyAndMarkdownPage'
import { IconsThemeAndLocalePage } from './pages/foundation/IconsThemeAndLocalePage'
import { OverviewPage } from './pages/foundation/OverviewPage'
import { SpacingAndClassesPage } from './pages/foundation/SpacingAndClassesPage'
import { TypographyAndCodePage } from './pages/foundation/TypographyAndCodePage'
import { ButtonsAndSegmentedPage } from './pages/navigation/ButtonsAndSegmentedPage'
import { DropdownAndCommandPage } from './pages/navigation/DropdownAndCommandPage'
import { TabsStepsBreadcrumbPage } from './pages/navigation/TabsStepsBreadcrumbPage'
import { PageChromeAndFilterPage } from './pages/pro/PageChromeAndFilterPage'
import { ProConfigSuitePage } from './pages/pro/ProConfigSuitePage'
import { ProLogViewerPage } from './pages/pro/ProLogViewerPage'
import { ShellLayoutsPage } from './pages/pro/ShellLayoutsPage'
import { TablesAndSplitDetailPage } from './pages/pro/TablesAndSplitDetailPage'
import { ProTablePage } from './pages/ProTablePage'
import { BaseAndEffectsCardsPage } from './pages/surfaces/BaseAndEffectsCardsPage'
import { BusinessCardsAndBentoPage } from './pages/surfaces/BusinessCardsAndBentoPage'
import { TemplatesPage } from './pages/TemplatesPage'

const INITIAL_BRAND_SVG = `<svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="#2563eb"/><path d="M12 28L20 11L28 28H23.8L20 19.6L16.2 28H12Z" fill="#ffffff"/></svg>`

/** 9 大领域分组 × 30 个聚焦展示路由 */
const MENU_TREE: AbcMenuItem[] = [
  {
    key: 'foundation',
    label: '基础原语',
    icon: 'palette',
    children: [
      { key: 'overview', label: 'Design Tokens 总览', path: '/overview', icon: 'dashboard' },
      { key: 'typography', label: '排版代码与复制', path: '/foundation/typography', icon: 'document' },
      { key: 'icons-locale', label: '图标主题与语言', path: '/foundation/icons-locale', icon: 'sparkles' },
      { key: 'spacing-classes', label: '间距分隔与令牌类', path: '/foundation/spacing-classes', icon: 'layers' },
    ],
  },
  {
    key: 'navigation',
    label: '通用导航',
    icon: 'Compass',
    children: [
      { key: 'nav-buttons', label: '按钮与分段控制', path: '/nav/buttons', icon: 'task' },
      { key: 'nav-tabs-steps', label: '页签步骤与子导航', path: '/nav/tabs-steps', icon: 'layout' },
      { key: 'nav-dropdown-cmd', label: '下拉菜单与命令板', path: '/nav/dropdown-command', icon: 'search' },
    ],
  },
  {
    key: 'form-basic',
    label: '表单录入',
    icon: 'edit',
    children: [
      { key: 'form-inputs', label: '文本数值搜索配额', path: '/form/inputs', icon: 'edit' },
      { key: 'form-controls', label: '开关单复选与标签', path: '/form/controls', icon: 's-operation' },
      { key: 'form-select', label: 'Select与字典选择', path: '/form/select', icon: 'ListChecks' },
    ],
  },
  {
    key: 'form-advanced',
    label: '树与上传',
    icon: 'FolderTree',
    children: [
      { key: 'form-tree-cascader', label: '树与TreeSelect级联', path: '/form/tree-cascader', icon: 'FolderTree' },
      { key: 'form-pickers-transfer', label: '日期图标与穿梭框', path: '/form/pickers-transfer', icon: 'Calendar' },
      { key: 'form-uploads-md', label: '上传校验与Markdown', path: '/form/uploads-markdown', icon: 'picture' },
    ],
  },
  {
    key: 'data-display',
    label: '数据展示',
    icon: 'layers',
    children: [
      { key: 'display-badges', label: '徽标头像与灯箱', path: '/display/badges-media', icon: 'tag' },
      { key: 'display-structured', label: '描述折叠与时间轴', path: '/display/structured', icon: 'articleList' },
      { key: 'display-pagination', label: '双模分页空态骨架', path: '/display/pagination-empty', icon: 'data' },
    ],
  },
  {
    key: 'surfaces',
    label: '卡片动效',
    icon: 'sparkles',
    children: [
      { key: 'surfaces-base', label: '基础卡片流光极光', path: '/surfaces/base-cards', icon: 'sparkles' },
      { key: 'surfaces-pro', label: '指标选择定价网格', path: '/surfaces/pro-cards', icon: 'components' },
    ],
  },
  {
    key: 'feedback',
    label: '反馈审计',
    icon: 'BellRing',
    children: [
      { key: 'feedback-banners', label: '横幅报错与结果页', path: '/feedback/banners-errors', icon: 'alert' },
      { key: 'feedback-toast', label: 'Toast加载与进度条', path: '/feedback/toast-progress', icon: 'bell' },
      { key: 'feedback-overlays', label: '弹窗抽屉与审计流', path: '/feedback/overlays-audit', icon: 'key' },
      { key: 'feedback-security', label: '水印权限与隔离界', path: '/feedback/security-resilience', icon: 'role' },
    ],
  },
  {
    key: 'charts',
    label: '图表大盘',
    icon: 'chart',
    children: [
      { key: 'charts-echarts', label: 'ECharts自适应大盘', path: '/charts/echarts', icon: 'chart' },
    ],
  },
  {
    key: 'pro-suite',
    label: '壳层套件',
    icon: 'table',
    children: [
      { key: 'layouts-shell', label: '5模态布局与保活', path: '/layouts/shell', icon: 'sidebar' },
      { key: 'pro-page-chrome', label: '页头筛选与工作流', path: '/pro/page-chrome', icon: 'layout' },
      { key: 'pro-tables-split', label: 'DataTable主从检视', path: '/pro/tables-split', icon: 'table', badge: 'New' },
      { key: 'pro-table', label: 'ProTable全量CRUD', path: '/pro/table', icon: 'table', badge: 'Updated' },
      { key: 'pro-config', label: 'Schema配置中心', path: '/pro/config', icon: 'config' },
      { key: 'pro-logs', label: '虚拟滚动日志查看', path: '/pro/logs', icon: 'log' },
      { key: 'templates', label: '5套企业业务模板', path: '/templates', icon: 'sparkles', badge: '5' },
    ],
  },
]

const MOCK_DICTS: Record<string, AbcDictOption[]> = {
  tenant_status: [
    { label: '运行中', value: 'active', tone: 'success' },
    { label: '待开通', value: 'pending', tone: 'warning' },
    { label: '已冻结', value: 'suspended', tone: 'danger' },
  ],
  env_tier: [
    { label: '生产主环境 (Production)', value: 'prod', tone: 'danger' },
    { label: '预发灰度 (Staging)', value: 'staging', tone: 'warning' },
    { label: '集成测试 (QA)', value: 'qa', tone: 'info' },
    { label: '本地沙箱 (Sandbox)', value: 'sandbox', tone: 'neutral' },
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

  const updateLayoutPatch = (patch: Partial<AbcLayoutSettings>) => {
    setLayoutSettings((prev) => ({ ...prev, ...patch }))
  }

  const renderPage = () => {
    switch (pathname) {
      case '/overview':
        return <OverviewPage onJump={setPathname} />
      case '/foundation/typography':
        return <TypographyAndCodePage />
      case '/foundation/icons-locale':
        return <IconsThemeAndLocalePage />
      case '/foundation/spacing-classes':
        return <SpacingAndClassesPage />
      case '/nav/buttons':
        return <ButtonsAndSegmentedPage />
      case '/nav/tabs-steps':
        return <TabsStepsBreadcrumbPage />
      case '/nav/dropdown-command':
        return <DropdownAndCommandPage />
      case '/form/inputs':
        return <TextAndNumberInputsPage />
      case '/form/controls':
        return <SelectionControlsPage />
      case '/form/select':
        return <SelectSuitePage />
      case '/form/tree-cascader':
        return <TreeAndCascaderPage />
      case '/form/pickers-transfer':
        return <PickersAndTransferPage />
      case '/form/uploads-markdown':
        return <UploadsVerifyAndMarkdownPage />
      case '/display/badges-media':
        return <BadgesAvatarMediaPage />
      case '/display/structured':
        return <StructuredDisplayPage />
      case '/display/pagination-empty':
        return <PaginationAndEmptyPage />
      case '/surfaces/base-cards':
        return <BaseAndEffectsCardsPage />
      case '/surfaces/pro-cards':
        return <BusinessCardsAndBentoPage />
      case '/feedback/banners-errors':
        return <AlertsAndErrorBannersPage />
      case '/feedback/toast-progress':
        return <ToastLoadingProgressPage />
      case '/feedback/overlays-audit':
        return <DialogsDrawersAndAuditPage />
      case '/feedback/security-resilience':
        return <WatermarkPermissionBoundaryPage />
      case '/charts/echarts':
        return <ChartsAndMetricsPage />
      case '/layouts/shell':
        return <ShellLayoutsPage layoutSettings={layoutSettings} onChangeLayout={updateLayoutPatch} />
      case '/pro/page-chrome':
        return <PageChromeAndFilterPage onJump={setPathname} />
      case '/pro/tables-split':
        return <TablesAndSplitDetailPage />
      case '/pro/table':
        return <ProTablePage />
      case '/pro/config':
        return <ProConfigSuitePage brand={brand} onUpdateBrand={setBrand} />
      case '/pro/logs':
        return <ProLogViewerPage />
      case '/templates':
        return <TemplatesPage />
      default:
        return <OverviewPage onJump={setPathname} />
    }
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
        {renderPage()}
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
