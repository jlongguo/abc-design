import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
} from '@abc-design/react'
import { Building2, LogOut, Sparkles } from 'lucide-react'
import {
  PlaygroundPageFrame,
  type PendingComponentJump,
} from './components/PlaygroundPageFrame'
import type { ShowcaseViewMode } from './components/PlaygroundShowcaseContext'
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
import { CrossFilterDashboardPage } from './pages/linkage/CrossFilterDashboardPage'
import { DynamicFormOrchestrationPage } from './pages/linkage/DynamicFormOrchestrationPage'
import { EditableTableLinkagePage } from './pages/linkage/EditableTableLinkagePage'
import { MasterDetailWorkbenchPage } from './pages/linkage/MasterDetailWorkbenchPage'
import { QueryBuilderAndViewsPage } from './pages/linkage/QueryBuilderAndViewsPage'
import { WizardDiffAndBatchPage } from './pages/linkage/WizardDiffAndBatchPage'
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
import {
  PLAYGROUND_MENU_TREE,
  PLAYGROUND_ROUTE_MAP,
  TOTAL_REGISTERED_SYMBOLS,
  buildPlaygroundCommandActions,
} from './registry'

const INITIAL_BRAND_SVG = `<svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="#2563eb"/><path d="M12 28L20 11L28 28H23.8L20 19.6L16.2 28H12Z" fill="#ffffff"/></svg>`

const VIEW_MODE_STORAGE_KEY = 'abc_pg_view_mode_v1'

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

function readInitialViewMode(): ShowcaseViewMode {
  if (typeof window === 'undefined') return 'segmented'
  try {
    const raw = window.localStorage.getItem(VIEW_MODE_STORAGE_KEY)
    return raw === 'focus' ? 'focus' : 'segmented'
  } catch {
    return 'segmented'
  }
}

function parseUrlRoute(): { path: string; anchorId?: string } {
  if (typeof window === 'undefined') return { path: '/overview' }
  const rawHash = window.location.hash.replace(/^#/, '')
  if (!rawHash) return { path: '/overview' }
  const [routePart, anchorPart] = rawHash.split('::')
  if (routePart && PLAYGROUND_ROUTE_MAP.has(routePart)) {
    return { path: routePart, anchorId: anchorPart || undefined }
  }
  return { path: '/overview' }
}

export const App: React.FC = () => {
  const initialRoute = useMemo(() => parseUrlRoute(), [])
  const [pathname, setPathname] = useState(initialRoute.path)
  const [viewMode, setViewMode] = useState<ShowcaseViewMode>(() => readInitialViewMode())
  const jumpSeqRef = useRef(1)
  const [pendingJump, setPendingJump] = useState<PendingComponentJump | null>(() =>
    initialRoute.anchorId
      ? {
          routePath: initialRoute.path,
          anchorId: initialRoute.anchorId,
          symbol: '',
          nonce: 1,
        }
      : null
  )

  const [layoutSettings, setLayoutSettings] = useState<AbcLayoutSettings>(() => ({
    ...DEFAULT_ABC_LAYOUT_SETTINGS,
    sidebarSearch: true,
  }))
  const [brandModalOpen, setBrandModalOpen] = useState(false)
  const [brand, setBrand] = useState<AbcBrandInfo>({
    name: 'ABC Design',
    subtitle: 'Enterprise UI System',
    logo: INITIAL_BRAND_SVG,
  })
  const [draftBrand, setDraftBrand] = useState(brand)

  const handleViewModeChange = useCallback((next: ShowcaseViewMode) => {
    setViewMode(next)
    try {
      window.localStorage.setItem(VIEW_MODE_STORAGE_KEY, next)
    } catch {
      // 忽略无痕窗口限制
    }
  }, [])

  const navigateRoute = useCallback((nextPath: string, anchorId?: string) => {
    setPathname(nextPath)
    if (typeof window !== 'undefined') {
      const nextHash = anchorId ? `#${nextPath}::${anchorId}` : `#${nextPath}`
      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, '', nextHash)
      }
    }
  }, [])

  const handleJumpToComponent = useCallback(
    (routePath: string, anchorId: string, symbol: string) => {
      jumpSeqRef.current += 1
      setPendingJump({
        routePath,
        anchorId,
        symbol,
        nonce: jumpSeqRef.current,
      })
      navigateRoute(routePath, anchorId)
    },
    [navigateRoute]
  )

  const handleConsumeJump = useCallback((nonce: number) => {
    setPendingJump((cur) => (cur && cur.nonce === nonce ? null : cur))
  }, [])

  // 支持浏览器前进后退或外部 Hash 变更联动
  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseUrlRoute()
      setPathname(parsed.path)
      if (parsed.anchorId) {
        jumpSeqRef.current += 1
        setPendingJump({
          routePath: parsed.path,
          anchorId: parsed.anchorId,
          symbol: '',
          nonce: jumpSeqRef.current,
        })
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const commandActions = useMemo(
    () => buildPlaygroundCommandActions(handleJumpToComponent),
    [handleJumpToComponent]
  )

  const brandWithAction: AbcBrandInfo = {
    ...brand,
    onClick: () => navigateRoute('/overview'),
    onEditBrand: () => {
      setDraftBrand(brand)
      setBrandModalOpen(true)
    },
  }

  const updateLayoutPatch = (patch: Partial<AbcLayoutSettings>) => {
    setLayoutSettings((prev) => ({ ...prev, ...patch }))
  }

  const renderPageContent = () => {
    switch (pathname) {
      case '/overview':
        return (
          <OverviewPage
            onJump={(p) => navigateRoute(p)}
            onJumpToComponent={handleJumpToComponent}
          />
        )
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
        return <PageChromeAndFilterPage onJump={(p) => navigateRoute(p)} />
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
      case '/linkage/master-detail':
        return <MasterDetailWorkbenchPage />
      case '/linkage/dynamic-form':
        return <DynamicFormOrchestrationPage />
      case '/linkage/editable-table':
        return <EditableTableLinkagePage />
      case '/linkage/query-builder':
        return <QueryBuilderAndViewsPage />
      case '/linkage/cross-filter':
        return <CrossFilterDashboardPage />
      case '/linkage/wizard-batch':
        return <WizardDiffAndBatchPage />
      default:
        return (
          <OverviewPage
            onJump={(p) => navigateRoute(p)}
            onJumpToComponent={handleJumpToComponent}
          />
        )
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
        menuItems={PLAYGROUND_MENU_TREE}
        pathname={pathname}
        onNavigate={(nextPath) => navigateRoute(nextPath)}
        settings={layoutSettings}
        onSettingsChange={setLayoutSettings}
        commandActions={commandActions}
        searchPlaceholder="搜索组件 / 菜单..."
        commandPlaceholder={`搜索全部 ${TOTAL_REGISTERED_SYMBOLS} 个组件符号（如 JsonTreeViewer、ProRowActionsOverflow、TagInput）、中文名、拼音或路由...`}
        sidebarSearch
        sidebarSearchPlaceholder="筛选分类或输入组件名..."
        headerExtra={
          <StatusTag tone="neutral" className="hidden sm:inline-flex">
            <Building2 className="mr-1 inline h-3 w-3 text-[var(--abc-primary)]" />
            {TOTAL_REGISTERED_SYMBOLS} 组件已同步
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
        <PlaygroundPageFrame
          key={pathname}
          routePath={pathname}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
          pendingJump={pendingJump}
          onConsumeJump={handleConsumeJump}
        >
          {renderPageContent()}
        </PlaygroundPageFrame>
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
