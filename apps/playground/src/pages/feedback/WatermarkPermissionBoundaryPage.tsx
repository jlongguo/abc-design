import React, { useState } from 'react'
import {
  Button,
  ErrorBoundary,
  Permission,
  PermissionGuard,
  PageContainer,
  StatusTag,
  TabErrorBoundary,
  Watermark,
  abcToast,
  useAbcPermission,
} from '@abc-design/react'
import { KeyRound, Shield, ShieldAlert, Zap } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch, KnobText } from '../../components/PropKnobs'

const FaultyWidget: React.FC<{ shouldCrash: boolean; name: string }> = ({ shouldCrash, name }) => {
  if (shouldCrash) {
    throw new Error(`[${name}] 模拟渲染期空引用异常 (Cannot read properties of undefined)`)
  }
  return (
    <div className="rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 text-xs space-y-1">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[var(--abc-success)]">{name} · 运行健康</span>
        <StatusTag tone="success">Healthy</StatusTag>
      </div>
      <p className="text-[var(--abc-fg-muted)]">
        当前组件处于正常渲染周期；触发崩溃后将被边界安全拦截而不会白屏波及整页。
      </p>
    </div>
  )
}

export const WatermarkPermissionBoundaryPage: React.FC = () => {
  const { hasPermission } = useAbcPermission()

  // 卡片 1: Watermark
  const [wmEnabled, setWmEnabled] = useState(true)
  const [wmContent, setWmContent] = useState('ABC Design · 合规审计')
  const [multiLine, setMultiLine] = useState(true)
  const [wmOpacity, setWmOpacity] = useState<'auto' | '0.08' | '0.14' | '0.24'>('0.14')
  const [wmRotate, setWmRotate] = useState<-30 | -22 | -15 | 0>(-22)

  // 卡片 2: PermissionGuard & Permission
  const [permCode, setPermCode] = useState<'sys:deploy' | 'sys:forbidden'>('sys:forbidden')
  const [fallbackStrategy, setFallbackStrategy] = useState<'disable' | 'hide'>('disable')
  const [permMode, setPermMode] = useState<'any' | 'all'>('any')
  const [disabledTip, setDisabledTip] = useState('当前角色缺少该高危权限，请联系管理员授权')

  // 卡片 3: ErrorBoundary & TabErrorBoundary
  const [moduleCrash, setModuleCrash] = useState(false)
  const [tabCrash, setTabCrash] = useState(false)
  const [recoveryReceipt, setRecoveryReceipt] = useState('尚未触发异常拦截与自愈回执')

  const baseText = wmContent.trim() || 'ABC Design'
  const resolvedWmContent: string | string[] = multiLine
    ? [baseText, 'Internal Audit · 严禁外泄']
    : baseText
  const resolvedOpacity = wmOpacity === 'auto' ? undefined : Number(wmOpacity)
  const isAllowed = hasPermission(permCode, permMode)

  const card1Code = `import { Watermark } from '@abc-design/react'

<Watermark
  enabled={${wmEnabled}}
  content={${multiLine ? `['${baseText}', 'Internal Audit · 严禁外泄']` : `'${baseText}'`}}${resolvedOpacity !== undefined ? `\n  opacity={${resolvedOpacity}}` : ''}
  rotate={${wmRotate}}
>
  <div className="p-6">受防篡改数字水印保护的敏感控制台区块</div>
</Watermark>`

  const card2Code = `import { Button, Permission, PermissionGuard, StatusTag } from '@abc-design/react'

<PermissionGuard
  code="${permCode}"
  mode="${permMode}"
  fallbackStrategy="${fallbackStrategy}"
  disabledTip="${disabledTip}"
  fallback={<StatusTag tone="warning">无权限占位节点</StatusTag>}
>
  <Button variant="primary">执行高危变更</Button>
</PermissionGuard>

<Permission permission="${permCode}" mode="${permMode}" fallbackStrategy="${fallbackStrategy}">
  <Button variant="danger">销毁集群</Button>
</Permission>`

  const card3Code = `import { ErrorBoundary, TabErrorBoundary } from '@abc-design/react'

<ErrorBoundary
  variant="panel"
  tabTitle="指标看板模块"
  resetKey={String(moduleCrash)}
  onReset={() => setModuleCrash(false)}
>
  <DashboardPanel />
</ErrorBoundary>

<TabErrorBoundary
  path="/ops/clusters/prod"
  resetKey={String(tabCrash)}
  onReload={() => setTabCrash(false)}
  onClose={() => setTabCrash(false)}
>
  <ClusterTabView />
</TabErrorBoundary>`

  return (
    <PageContainer
      title="数字水印、权限守卫与异常边界"
      subtitle="涵盖高清防篡改 Canvas 水印 (Watermark)、声明式 RBAC 权限守卫 (PermissionGuard / Permission) 与局部/单页签错误隔离边界 (ErrorBoundary / TabErrorBoundary)"
    >
      <div className="space-y-5">
        {/* 卡片 1: Watermark */}
        <ComponentDocPreview
          title="Watermark Retina 高清防篡改数字水印"
          components={['Watermark']}
          description="基于 devicePixelRatio 自适应绘制 Canvas 平铺水印，内置精准范围 MutationObserver 守护，删除节点或修改 style 隐藏时自动重绘。"
          controls={
            <>
              <KnobSwitch label="enabled" checked={wmEnabled} onChange={setWmEnabled} />
              <KnobText label="content" value={wmContent} onChange={setWmContent} placeholder="输入水印文案" />
              <KnobSwitch label="multiLine" checked={multiLine} onChange={setMultiLine} />
              <KnobSegmented
                label="opacity"
                value={wmOpacity}
                onChange={setWmOpacity}
                options={[
                  { label: 'auto', value: 'auto' },
                  { label: '0.08', value: '0.08' },
                  { label: '0.14', value: '0.14' },
                  { label: '0.24', value: '0.24' },
                ]}
              />
              <KnobSegmented
                label="rotate"
                value={wmRotate}
                onChange={setWmRotate}
                options={[
                  { label: '-30°', value: -30 },
                  { label: '-22°', value: -22 },
                  { label: '-15°', value: -15 },
                  { label: '0°', value: 0 },
                ]}
              />
            </>
          }
          onResetKnobs={() => {
            setWmEnabled(true)
            setWmContent('ABC Design · 合规审计')
            setMultiLine(true)
            setWmOpacity('0.14')
            setWmRotate(-22)
          }}
          code={card1Code}
          apiRows={[
            { prop: 'enabled', type: 'boolean', defaultValue: 'true', description: '是否启用并挂载防篡改水印层' },
            { prop: 'content', type: 'string | string[]', description: '单行字符串或多行数组水印文案' },
            { prop: 'opacity', type: 'number', description: '0 ~ 1 自定义不透明度，缺省按明暗主题自适应' },
            { prop: 'rotate', type: 'number', defaultValue: '-22', description: '水印平铺倾斜角度（度）' },
            { prop: 'gap', type: '[number, number]', defaultValue: '[110, 96]', description: '横纵向平铺像素间距' },
          ]}
        >
          <Watermark
            enabled={wmEnabled}
            content={resolvedWmContent}
            opacity={resolvedOpacity}
            rotate={wmRotate}
            className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5"
          >
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2 font-semibold text-[var(--abc-fg)]">
                <Shield className="h-4 w-4 text-[var(--abc-primary)]" />
                <span>敏感运营数据沙箱容器</span>
                <StatusTag tone={wmEnabled ? 'success' : 'neutral'}>
                  {wmEnabled ? `已保护 · opacity=${wmOpacity} · rotate=${wmRotate}°` : '水印已关闭'}
                </StatusTag>
              </div>
              <p className="text-[var(--abc-fg-secondary)] leading-relaxed">
                在浏览器 DevTools 中尝试删除 <code className="font-mono">[data-watermark-overlay=&quot;true&quot;]</code> 节点或修改其样式，MutationObserver 会立即自愈恢复。
              </p>
              <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3">
                <div className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3">
                  <div className="text-[var(--abc-fg-muted)]">清结算核销总额</div>
                  <div className="mt-1 font-mono text-sm font-semibold text-[var(--abc-fg)]">¥ 4,829,510.00</div>
                </div>
                <div className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3">
                  <div className="text-[var(--abc-fg-muted)]">排版模式</div>
                  <div className="mt-1 font-mono text-sm font-semibold text-[var(--abc-fg)]">{multiLine ? '双行多列平铺' : '单行平铺'}</div>
                </div>
                <div className="rounded-md border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3">
                  <div className="text-[var(--abc-fg-muted)]">高分屏倍率</div>
                  <div className="mt-1 font-mono text-sm font-semibold text-[var(--abc-fg)]">Auto DPR</div>
                </div>
              </div>
            </div>
          </Watermark>
        </ComponentDocPreview>

        {/* 卡片 2: PermissionGuard & Permission */}
        <ComponentDocPreview
          title="PermissionGuard & Permission 细粒度权限守卫"
          components={['PermissionGuard', 'Permission', 'useAbcPermission']}
          description="对接 AbcProvider.permissionAdapter（当前 Playground 仅拒绝 sys:forbidden），支持 disable 置灰带气泡与 hide 折叠/fallback 占位两种降级策略。"
          controls={
            <>
              <KnobSegmented
                label="permCode"
                value={permCode}
                onChange={setPermCode}
                options={[
                  { label: 'sys:deploy (放行)', value: 'sys:deploy' },
                  { label: 'sys:forbidden (拦截)', value: 'sys:forbidden' },
                ]}
              />
              <KnobSegmented
                label="fallbackStrategy"
                value={fallbackStrategy}
                onChange={setFallbackStrategy}
                options={[
                  { label: 'disable', value: 'disable' },
                  { label: 'hide', value: 'hide' },
                ]}
              />
              <KnobSegmented
                label="mode"
                value={permMode}
                onChange={setPermMode}
                options={[
                  { label: 'any', value: 'any' },
                  { label: 'all', value: 'all' },
                ]}
              />
              <KnobText label="disabledTip" value={disabledTip} onChange={setDisabledTip} placeholder="禁用提示语" widthClass="w-52" />
            </>
          }
          onResetKnobs={() => {
            setPermCode('sys:forbidden')
            setFallbackStrategy('disable')
            setPermMode('any')
            setDisabledTip('当前角色缺少该高危权限，请联系管理员授权')
          }}
          code={card2Code}
          apiRows={[
            { prop: 'permission / code', type: 'string | string[]', description: '待校验权限标识码或权限码集合' },
            { prop: 'mode', type: "'any' | 'all'", defaultValue: "'any'", description: '多权限码校验逻辑，透传给 permissionAdapter' },
            { prop: 'fallbackStrategy', type: "'hide' | 'disable'", defaultValue: "'hide'", description: '无权限时隐藏/渲染 fallback，或克隆节点置灰并包裹 Tooltip' },
            { prop: 'disabledTip', type: 'string', defaultValue: "'暂无操作权限'", description: 'disable 策略下悬停时展示的 Tooltip 提示文本' },
            { prop: 'fallback', type: 'ReactNode', description: 'hide 策略下无权限时替代渲染的提示节点' },
          ]}
        >
          <div className="space-y-4 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3.5 py-2.5">
              <span>
                实时校验结果 (<code className="font-mono">{permCode}</code> · mode=<code className="font-mono">{permMode}</code>)：
              </span>
              <StatusTag tone={isAllowed ? 'success' : 'danger'}>
                {isAllowed ? '已放行 (hasPermission = true)' : `已拦截 (strategy = ${fallbackStrategy})`}
              </StatusTag>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[var(--abc-border)] p-4 space-y-2.5">
                <div className="flex items-center gap-1.5 font-semibold text-[var(--abc-fg)]">
                  <KeyRound className="h-3.5 w-3.5 text-[var(--abc-primary)]" />
                  <span>PermissionGuard（带 fallback 节点）</span>
                </div>
                <PermissionGuard
                  code={permCode}
                  mode={permMode}
                  fallbackStrategy={fallbackStrategy}
                  disabledTip={disabledTip}
                  fallback={<StatusTag tone="warning">无 {permCode} 权限：按钮已隐藏并切换为 fallback</StatusTag>}
                >
                  <Button size="sm" variant="primary" onClick={() => abcToast.success(`权限校验通过：执行 ${permCode}`)}>
                    触发核心发布操作 ({permCode})
                  </Button>
                </PermissionGuard>
              </div>

              <div className="rounded-lg border border-[var(--abc-border)] p-4 space-y-2.5">
                <div className="flex items-center gap-1.5 font-semibold text-[var(--abc-fg)]">
                  <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
                  <span>Permission（无 fallback，纯隐藏/禁用）</span>
                </div>
                <div className="min-h-[32px] flex items-center">
                  <Permission
                    permission={permCode}
                    mode={permMode}
                    fallbackStrategy={fallbackStrategy}
                    disabledTip={disabledTip}
                  >
                    <Button size="sm" variant="danger" onClick={() => abcToast.warning(`执行受保护动作 (${permCode})`)}>
                      销毁生产节点池 ({permCode})
                    </Button>
                  </Permission>
                  {!isAllowed && fallbackStrategy === 'hide' && (
                    <span className="text-[var(--abc-fg-muted)] italic">（节点已被 hide 策略静默移除）</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3: ErrorBoundary & TabErrorBoundary */}
        <ComponentDocPreview
          title="ErrorBoundary & TabErrorBoundary 局部与单页签异常隔离边界"
          components={['ErrorBoundary', 'TabErrorBoundary']}
          description="将渲染期未捕获异常封闭在局部卡片或单页签内，提供组件堆栈折叠查看、局部重挂载恢复与关闭故障页签自愈回执。"
          controls={
            <>
              <KnobSwitch label="模拟组件崩溃" checked={moduleCrash} onChange={setModuleCrash} />
              <KnobSwitch label="模拟页签崩溃" checked={tabCrash} onChange={setTabCrash} />
              <Button size="xs" variant={moduleCrash ? 'outline' : 'danger'} leftIcon={<Zap className="h-3 w-3" />} onClick={() => setModuleCrash((v) => !v)}>
                {moduleCrash ? '恢复组件' : '触发组件崩溃'}
              </Button>
              <Button size="xs" variant={tabCrash ? 'outline' : 'danger'} leftIcon={<Zap className="h-3 w-3" />} onClick={() => setTabCrash((v) => !v)}>
                {tabCrash ? '恢复页签' : '触发页签崩溃'}
              </Button>
            </>
          }
          onResetKnobs={() => {
            setModuleCrash(false)
            setTabCrash(false)
            setRecoveryReceipt('尚未触发异常拦截与自愈回执')
          }}
          code={card3Code}
          apiRows={[
            { prop: 'ErrorBoundary.variant', type: "'fullscreen' | 'panel'", defaultValue: "'panel' (有 onReset/resetKey 时)", description: '全屏或局部容器兜底形态' },
            { prop: 'ErrorBoundary.resetKey / onReset', type: 'string | number / () => void', description: '变化时自动清除错误态，或通过重试按钮局部重挂载' },
            { prop: 'TabErrorBoundary.path', type: 'string', description: '显示在异常卡片上的故障页签路由路径' },
            { prop: 'TabErrorBoundary.onReload / onClose', type: '() => void', description: '重载当前故障页签或关闭页签的回调钩子' },
          ]}
        >
          <div className="space-y-4">
            <div className="rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3.5 py-2 text-xs text-[var(--abc-fg-secondary)]">
              自愈回执：<strong className="font-mono text-[var(--abc-fg)]">{recoveryReceipt}</strong>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <ErrorBoundary
                variant="panel"
                tabTitle="实时监控看板模块"
                resetKey={String(moduleCrash)}
                onReset={() => {
                  setModuleCrash(false)
                  setRecoveryReceipt('ErrorBoundary 已执行局部重挂载自愈')
                  abcToast.success('ErrorBoundary 局部模块已自愈恢复')
                }}
              >
                <FaultyWidget shouldCrash={moduleCrash} name="ErrorBoundary 子模块" />
              </ErrorBoundary>

              <TabErrorBoundary
                path="/ops/clusters/shanghai-fin"
                resetKey={String(tabCrash)}
                onReload={() => {
                  setTabCrash(false)
                  setRecoveryReceipt('TabErrorBoundary 已重新加载故障页签')
                  abcToast.success('故障页签已重载恢复')
                }}
                onClose={() => {
                  setTabCrash(false)
                  setRecoveryReceipt('TabErrorBoundary 已触发关闭页签并复位')
                  abcToast.info('已关闭并复位故障页签')
                }}
                className="min-h-[260px] p-0"
              >
                <FaultyWidget shouldCrash={tabCrash} name="TabErrorBoundary 单页签" />
              </TabErrorBoundary>
            </div>
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
