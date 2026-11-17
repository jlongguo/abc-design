import React, { useState } from 'react'
import {
  AuthLayout,
  Button,
  Card,
  FormField,
  Input,
  PageContainer,
  RadioGroup,
  StatusTag,
  Switch,
  type AbcLayoutMode,
  type AbcLayoutSettings,
} from '@abc-design/react'
import { Check, Lock, User } from 'lucide-react'
import { SplitDetailShowcase } from './SplitDetailShowcase'

const MODES: Array<{
  mode: AbcLayoutMode
  name: string
  scene: string
}> = [
  {
    mode: 'sidebar',
    name: '1. 经典侧边栏布局 (Sidebar)',
    scene: '适合 2~3 级菜单较多的综合管理后台，支持深色/浅色侧栏与折叠悬浮菜单。',
  },
  {
    mode: 'top',
    name: '2. 顶部水平导航布局 (Top)',
    scene: '释放全部横向宽度，适合数据分析看板、监控大屏与中轻量级 SaaS 应用。',
  },
  {
    mode: 'mix',
    name: '3. 混合分栏导航布局 (Mix)',
    scene: '顶栏承载一级业务子系统切换，侧栏自动联动当前业务域的二三级菜单。',
  },
  {
    mode: 'dual-column',
    name: '4. 双栏紧凑侧栏布局 (Dual-Column)',
    scene: '左侧 64px 图标主轨 + 右侧二级面板，兼顾超高模块密度与零折叠跳转效率。',
  },
  {
    mode: 'auth',
    name: '5. 登录认证独立分屏布局 (Auth)',
    scene: '支持左侧极光品牌叙事屏 + 右侧流光表单卡片，或极简居中认证卡片。',
  },
]

export const LayoutsPage: React.FC<{
  layoutSettings: AbcLayoutSettings
  onChangeLayout: (patch: Partial<AbcLayoutSettings>) => void
}> = ({ layoutSettings, onChangeLayout }) => {
  const [authPreviewVariant, setAuthPreviewVariant] = useState<'split' | 'centered'>('split')
  const [stickyFooterDemo, setStickyFooterDemo] = useState(true)

  return (
    <PageContainer
      title="5 模态企业级完整布局方案演练台"
      subtitle="点击下方任意卡片即可实时切换当前整个应用的壳层布局结构"
      breadcrumbs={[{ label: '设计系统' }, { label: '完整布局方案' }]}
      footer={
        stickyFooterDemo ? (
          <>
            <span className="mr-auto text-xs text-[var(--abc-fg-muted)]">
              PageContainer 底部吸底固定操作栏演示（可随时关闭）
            </span>
            <Button variant="secondary" onClick={() => setStickyFooterDemo(false)}>
              隐藏吸底栏
            </Button>
            <Button variant="primary" onClick={() => onChangeLayout({ mode: 'sidebar' })}>
              切回经典侧边栏
            </Button>
          </>
        ) : undefined
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {MODES.map((m) => {
            const active = layoutSettings.mode === m.mode
            return (
              <Card
                key={m.mode}
                hoverable
                onClick={() => onChangeLayout({ mode: m.mode })}
                className={`cursor-pointer ${
                  active ? 'border-[var(--abc-primary)] ring-1 ring-[var(--abc-primary)]' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="text-xs font-bold text-[var(--abc-fg)]">{m.name}</div>
                  {active ? (
                    <StatusTag tone="primary">当前生效</StatusTag>
                  ) : (
                    <span className="text-[11px] text-[var(--abc-primary)]">点击切换 →</span>
                  )}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[var(--abc-fg-muted)]">{m.scene}</p>
              </Card>
            )
          })}
        </div>

        <Card title="壳层细节参数实时调节">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2.5">
              <span className="text-xs text-[var(--abc-fg-secondary)]">侧边栏色调：</span>
              <RadioGroup
                variant="segmented"
                value={layoutSettings.sidebarTone}
                onChange={(v) => onChangeLayout({ sidebarTone: v as 'dark' | 'light' })}
                options={[
                  { value: 'dark', label: '深色侧栏' },
                  { value: 'light', label: '浅色侧栏' },
                ]}
              />
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-xs text-[var(--abc-fg-secondary)]">内容区宽度：</span>
              <RadioGroup
                variant="segmented"
                value={layoutSettings.contentWidth}
                onChange={(v) => onChangeLayout({ contentWidth: v as 'fluid' | 'fixed' })}
                options={[
                  { value: 'fluid', label: '流式自适应' },
                  { value: 'fixed', label: '1280px 定宽居中' },
                ]}
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--abc-fg-secondary)]">多页签栏：</span>
              <Switch
                checked={layoutSettings.showTabs}
                onChange={(v) => onChangeLayout({ showTabs: v })}
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--abc-fg-secondary)]">吸底操作栏：</span>
              <Switch checked={stickyFooterDemo} onChange={setStickyFooterDemo} />
            </div>
          </div>
        </Card>

        {/* 内嵌预览 AuthLayout 双变体 */}
        <Card
          title="AuthLayout 独立认证页容器沙盒预览"
          subtitle="无需离开当前页面即可预览分屏模式 ('split') 与极简居中卡片 ('centered')"
          extra={
            <RadioGroup
              variant="segmented"
              value={authPreviewVariant}
              onChange={(v) => setAuthPreviewVariant(v as 'split' | 'centered')}
              options={[
                { value: 'split', label: '分屏双栏 (Split)' },
                { value: 'centered', label: '居中卡片 (Centered)' },
              ]}
            />
          }
          padding="none"
        >
          <div className="overflow-hidden rounded-b-[var(--abc-radius-lg)] border-t border-[var(--abc-border)]">
            <AuthLayout variant={authPreviewVariant} className="!min-h-[460px]">
              <div className="space-y-4">
                <div>
                  <h2 className="text-base font-bold text-[var(--abc-fg)]">登录企业控制台</h2>
                  <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">
                    请输入您的组织域账号与安全口令
                  </p>
                </div>
                <FormField label="管理员账号" required>
                  <Input prefix={<User className="h-3.5 w-3.5" />} defaultValue="admin@abc-design.io" />
                </FormField>
                <FormField label="登录密码" required>
                  <Input
                    type="password"
                    prefix={<Lock className="h-3.5 w-3.5" />}
                    defaultValue="Enterprise#2026"
                  />
                </FormField>
                <Button variant="primary" block icon={<Check className="h-3.5 w-3.5" />}>
                  安全登录
                </Button>
              </div>
            </AuthLayout>
          </div>
        </Card>

        <SplitDetailShowcase />
      </div>
    </PageContainer>
  )
}
