import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  FormField,
  Input,
  InputNumber,
  PageContainer,
  ProConfigForm,
  ProConfigPage,
  ProFormLayout,
  Select,
  Switch,
  type AbcBrandInfo,
} from '@abc-design/react'
import { Globe, ShieldCheck } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented } from '../../components/PropKnobs'

/**
 * 声明式分组排版与系统配置中心文档页
 * 涵盖 ProFormLayout、ProConfigForm 与 ProConfigPage
 */
export const ProConfigSuitePage: React.FC<{
  brand: AbcBrandInfo
  onUpdateBrand: (next: AbcBrandInfo) => void
}> = ({ brand, onUpdateBrand }) => {
  // Card 1: ProFormLayout Knobs
  const [formMode, setFormMode] = useState<'split' | 'grid'>('split')
  const [formColumns, setFormColumns] = useState<1 | 2 | 3>(2)
  const [clusterName, setClusterName] = useState('prod-apac-sg-01')
  const [region, setRegion] = useState('ap-sg')
  const [maxWorkers, setMaxWorkers] = useState<number>(64)
  const [autoScale, setAutoScale] = useState(true)

  // Card 2: ProConfigForm & ProConfigPage Knobs
  const [configVariant, setConfigVariant] = useState<'form' | 'tabs'>('form')
  const [configLayoutMode, setConfigLayoutMode] = useState<'split' | 'grid'>('split')

  // 稳定引用防止切换 Knob 时反复触发 ProConfigPage 远程加载钩子
  const brandRef = useRef(brand)
  brandRef.current = brand
  const onUpdateBrandRef = useRef(onUpdateBrand)
  onUpdateBrandRef.current = onUpdateBrand

  const initialBrandLogo = typeof brand.logo === 'string' ? brand.logo : ''

  const configFormInitialValues = useMemo(
    () => ({
      siteName: brand.name,
      siteSubtitle: brand.subtitle ?? '',
      siteLogo: initialBrandLogo,
      sessionTimeout: 120,
      enableSso: true,
      securityMode: 'strict',
      maintenanceNotice: '每周日凌晨 02:00 - 03:00 进行例行灰度巡检。',
    }),
    [brand.name, brand.subtitle, initialBrandLogo]
  )

  const configPageDefaultValues = useMemo(
    () => ({
      siteName: brand.name,
      siteSubtitle: brand.subtitle ?? '',
      siteLogo: initialBrandLogo,
      loginMethods: 'password,sso',
      auditLevel: 'strict',
      maintenanceNotice: '每周日凌晨 02:00 - 03:00 进行例行灰度巡检。',
    }),
    [brand.name, brand.subtitle, initialBrandLogo]
  )

  const fetchConfig = useCallback(async () => {
    const b = brandRef.current
    return {
      code: 200,
      data: {
        siteName: b.name,
        siteSubtitle: b.subtitle ?? '',
        siteLogo: typeof b.logo === 'string' ? b.logo : '',
        loginMethods: 'password,sso',
        auditLevel: 'strict',
      },
    }
  }, [])

  const saveConfig = useCallback(async (payload: Record<string, any>) => {
    const b = brandRef.current
    onUpdateBrandRef.current({
      ...b,
      name: String(payload.siteName ?? b.name),
      subtitle: String(payload.siteSubtitle ?? ''),
      logo: payload.siteLogo,
    })
    return { code: 200 }
  }, [])

  return (
    <PageContainer
      title="ProFormLayout & ProConfig 声明式配置套件"
      subtitle="涵盖左侧导览分栏/多列卡片排版引擎 ProFormLayout，以及开箱即用的配置表单 ProConfigForm 与多选项卡远程配置框架 ProConfigPage。"
      breadcrumbs={[{ label: 'Pro 企业套件与模板' }, { label: '配置中心套件' }]}
    >
      <div className="space-y-6">
        {/* Card 1: ProFormLayout */}
        <ComponentDocPreview
          title="ProFormLayout 企业级分组表单排版引擎"
          components={['ProFormLayout']}
          description="一键在左右说明导览分栏 ('split') 与卡片堆叠网格 ('grid') 之间切换，同时支持各分组自由设定 1 / 2 / 3 栅格列数。"
          onResetKnobs={() => {
            setFormMode('split')
            setFormColumns(2)
          }}
          controls={
            <>
              <KnobSegmented
                label="mode"
                value={formMode}
                onChange={setFormMode}
                options={[
                  { label: 'split (左右导览)', value: 'split' },
                  { label: 'grid (卡片网格)', value: 'grid' },
                ]}
              />
              <KnobSegmented
                label="columns"
                value={formColumns}
                onChange={(v) => setFormColumns(v as 1 | 2 | 3)}
                options={[
                  { label: '1 列', value: 1 },
                  { label: '2 列', value: 2 },
                  { label: '3 列', value: 3 },
                ]}
              />
            </>
          }
          code={`import { ProFormLayout, FormField, Input, Select, Switch } from '@abc-design/react'

<ProFormLayout
  mode="${formMode}"
  sections={[
    {
      key: 'cluster',
      title: '调度集群基础配置',
      description: '定义节点标识、部署地域与运行时调度池规格。',
      columns: ${formColumns},
      children: (
        <>
          <FormField label="集群标识"><Input value={clusterName} /></FormField>
          <FormField label="目标地域"><Select value={region} options={...} /></FormField>
          <FormField label="最大并发节点"><InputNumber value={maxWorkers} /></FormField>
        </>
      ),
    },
  ]}
/>`}
          apiRows={[
            { prop: 'mode', type: "'split' | 'grid'", defaultValue: "'split'", description: '左侧标题描述导览+右侧卡片分栏，或垂直堆叠多列卡片网格' },
            { prop: 'sections', type: 'ProFormSection[]', required: true, description: '分组列表，每组含 key / title / description / columns / children' },
            { prop: 'sections[].columns', type: '1 | 2 | 3', defaultValue: 'split 下为 1 / grid 下为 2', description: '单分组内部表单字段的响应式网格列数' },
          ]}
        >
          <ProFormLayout
            mode={formMode}
            sections={[
              {
                key: 'cluster',
                title: '调度集群基础配置',
                description: '定义执行器集群标识、默认可用区及并发扩容水位线。',
                columns: formColumns,
                children: (
                  <>
                    <FormField label="集群标识" required>
                      <Input value={clusterName} onChange={(e) => setClusterName(e.target.value)} />
                    </FormField>
                    <FormField label="默认可用区">
                      <Select
                        value={region}
                        onChange={(v) => setRegion(String(v))}
                        options={[
                          { label: '新加坡亚太核心区 (ap-sg)', value: 'ap-sg' },
                          { label: '华东上海金融区 (cn-sh)', value: 'cn-sh' },
                          { label: '华北北京政企区 (cn-bj)', value: 'cn-bj' },
                        ]}
                      />
                    </FormField>
                    <FormField label="最大并发实例数">
                      <InputNumber
                        value={maxWorkers}
                        min={8}
                        max={512}
                        onChange={(v) => setMaxWorkers(Number(v ?? 64))}
                      />
                    </FormField>
                  </>
                ),
              },
              {
                key: 'policy',
                title: '弹性与安全守卫',
                description: '控制自动弹缩策略及出网代理安全基线。',
                columns: formColumns,
                children: (
                  <>
                    <FormField label="启用弹性 HPA 扩缩容">
                      <Switch checked={autoScale} onChange={setAutoScale} />
                    </FormField>
                    <FormField label="出网默认策略">
                      <Input defaultValue="egress-strict-allowlist" />
                    </FormField>
                  </>
                ),
              },
            ]}
          />
        </ComponentDocPreview>

        {/* Card 2: ProConfigForm & ProConfigPage */}
        <ComponentDocPreview
          title="ProConfigForm & ProConfigPage 声明式配置中心"
          components={['ProConfigForm', 'ProConfigPage']}
          description="同时支持紧凑分组 Schema 表单 (ProConfigForm) 与带垂直 Tab 导航、远程异步拉取及权限锁定的配置页框架 (ProConfigPage)；提交保存后将实时同步更新控制台顶部品牌 Logo 与名称。"
          onResetKnobs={() => {
            setConfigVariant('form')
            setConfigLayoutMode('split')
          }}
          controls={
            <>
              <KnobSegmented
                label="形态切换"
                value={configVariant}
                onChange={setConfigVariant}
                options={[
                  { label: 'ProConfigForm', value: 'form' },
                  { label: 'ProConfigPage', value: 'tabs' },
                ]}
              />
              <KnobSegmented
                label="layoutMode"
                value={configLayoutMode}
                onChange={setConfigLayoutMode}
                options={[
                  { label: 'split', value: 'split' },
                  { label: 'grid', value: 'grid' },
                ]}
              />
            </>
          }
          code={
            configVariant === 'form'
              ? `import { ProConfigForm } from '@abc-design/react'

<ProConfigForm
  layoutMode="${configLayoutMode}"
  initialValues={{ siteName: '${brand.name}', siteSubtitle: '${brand.subtitle ?? ''}', sessionTimeout: 120 }}
  groups={[
    {
      key: 'brand',
      title: '租户级品牌视觉配置',
      columns: 1,
      fields: [
        { name: 'siteName', label: '项目品牌名称', required: true },
        { name: 'siteLogo', label: '网站 LOGO 直链或 SVG', type: 'image' },
      ],
    },
  ]}
  onSubmit={(vals) => onUpdateBrand({ ...brand, name: vals.siteName, logo: vals.siteLogo })}
/>`
              : `import { ProConfigPage } from '@abc-design/react'

<ProConfigPage
  title="系统全局运行参数"
  defaultValues={defaultValues}
  fetchConfig={fetchConfig}
  saveConfig={saveConfig}
  tabs={[
    {
      key: 'brand',
      label: '品牌与门户视觉',
      columns: ${configLayoutMode === 'grid' ? 2 : 1},
      fields: [
        { key: 'siteName', label: '项目品牌名称', type: 'input' },
        { key: 'siteLogo', label: '网站 LOGO 直链或 SVG', type: 'image-url', span: 2 },
      ],
    },
  ]}
/>`
          }
          apiRows={[
            { prop: 'ProConfigForm.layoutMode', type: "'split' | 'grid'", defaultValue: "'split'", description: '复用 ProFormLayout 的分栏或网格排版形态' },
            { prop: 'ProConfigForm.groups / onSubmit', type: 'ProConfigGroupSchema[] / (values) => void', required: true, description: '分组 Schema 与内置校验、重置、保存生命周期' },
            { prop: 'ProConfigPage.fetchConfig / saveConfig', type: '() => Promise<any>', required: true, description: '异步远程配置拉取与保存接口适配器' },
            { prop: 'ProConfigPage.tabs', type: 'ProConfigTabSchema[]', required: true, description: '左侧垂直导航选项卡及字段声明（支持 checkbox-csv / image-url 等）' },
          ]}
        >
          {configVariant === 'tabs' ? (
            <ProConfigPage
              title="系统全局运行参数"
              subTitle="基于 ProConfigPage 构建：支持远程配置拉取、垂直导航、checkbox-csv 锁定项与保存后实时同步顶部品牌"
              defaultValues={configPageDefaultValues}
              fetchConfig={fetchConfig}
              saveConfig={saveConfig}
              tabs={[
                {
                  key: 'brand',
                  label: '品牌与门户视觉',
                  icon: Globe,
                  sectionTitle: '门户基础与品牌视觉',
                  sectionDescription: '修改后点击保存将实时同步至顶部与侧边栏品牌区。',
                  columns: configLayoutMode === 'grid' ? 2 : 1,
                  fields: [
                    { key: 'siteName', label: '项目品牌名称', type: 'input' },
                    { key: 'siteSubtitle', label: '副标题说明', type: 'input' },
                    { key: 'siteLogo', label: '网站 LOGO 直链或 SVG', type: 'image-url', span: 2, previewShape: 'rounded' },
                    { key: 'maintenanceNotice', label: '全局维护通告', type: 'textarea', span: 2 },
                  ],
                },
                {
                  key: 'auth',
                  label: '认证与合规策略',
                  icon: ShieldCheck,
                  sectionTitle: '统一身份认证渠道',
                  sectionDescription: '支持逗号分隔多选 (checkbox-csv) 与必选锁定项保护。',
                  columns: configLayoutMode === 'grid' ? 2 : 1,
                  fields: [
                    {
                      key: 'loginMethods',
                      label: '启用的登录方式',
                      type: 'checkbox-csv',
                      span: 2,
                      options: [
                        { label: '账号密码（默认锁定必选）', value: 'password', locked: true },
                        { label: '企业 OIDC 单点登录', value: 'sso' },
                        { label: 'GitHub OAuth', value: 'github' },
                        { label: '硬件 Passkey 密钥', value: 'passkey' },
                      ],
                    },
                    {
                      key: 'auditLevel',
                      label: '敏感操作审计级别',
                      type: 'radio',
                      options: [
                        { label: '严格强制审计', value: 'strict' },
                        { label: '常规留痕', value: 'standard' },
                      ],
                    },
                  ],
                },
              ]}
            />
          ) : (
            <ProConfigForm
              layoutMode={configLayoutMode}
              initialValues={configFormInitialValues}
              groups={[
                {
                  key: 'brand',
                  title: '租户级品牌视觉配置',
                  description: '管理当前控制台显示的项目名称与矢量 Logo，保存后实时更新顶部品牌区。',
                  columns: 1,
                  fields: [
                    { name: 'siteName', label: '项目品牌名称', required: true },
                    { name: 'siteSubtitle', label: '副标题说明' },
                    { name: 'siteLogo', label: '网站 LOGO 直链或内联 SVG', type: 'image', helperText: '可直接输入图片 URL 或粘贴 <svg ...>...</svg> 源码' },
                  ],
                },
                {
                  key: 'security',
                  title: '安全与会话访问策略',
                  description: '配置控制台会话超时阈值、单点登录开关与安全审计等级。',
                  columns: 2,
                  fields: [
                    { name: 'sessionTimeout', label: '会话超时时间 (分钟)', type: 'number', required: true },
                    {
                      name: 'securityMode',
                      label: '风控拦截策略',
                      type: 'select',
                      options: [
                        { label: '严格零信任模式 (Strict)', value: 'strict' },
                        { label: '标准均衡模式 (Balanced)', value: 'balanced' },
                      ],
                    },
                    { name: 'enableSso', label: '启用企业 OIDC 单点登录', type: 'switch' },
                    { name: 'maintenanceNotice', label: '系统维护公告文案', type: 'textarea' },
                  ],
                },
              ]}
              onSubmit={(vals) => {
                onUpdateBrand({
                  ...brand,
                  name: vals.siteName,
                  subtitle: vals.siteSubtitle,
                  logo: vals.siteLogo,
                })
              }}
            />
          )}
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}
export default ProConfigSuitePage
