import React, { useState } from 'react'
import {
  PageContainer,
  ProConfigForm,
  ProConfigPage as AbcProConfigPage,
  RadioGroup,
  type AbcBrandInfo,
} from '@abc-design/react'
import { Globe, ShieldCheck } from 'lucide-react'

export const ProConfigPage: React.FC<{
  brand: AbcBrandInfo
  onUpdateBrand: (next: AbcBrandInfo) => void
}> = ({ brand, onUpdateBrand }) => {
  const [showcaseMode, setShowcaseMode] = useState<'form' | 'tabs'>('form')
  const [formLayoutMode, setFormLayoutMode] = useState<'split' | 'grid'>('split')

  return (
    <PageContainer
      title="ProConfigForm & ProConfigPage 声明式配置中心"
      subtitle="同时提供分组卡片式 ProConfigForm 与多选项卡远程参数管理框架 ProConfigPage（支持 checkbox-csv 锁定项、图片直链与上传联动）"
      extra={
        <div className="flex flex-wrap items-center gap-2">
          <RadioGroup
            variant="segmented"
            value={showcaseMode}
            onChange={(v) => setShowcaseMode(v as 'form' | 'tabs')}
            options={[
              { value: 'form', label: 'ProConfigForm (分组表单)' },
              { value: 'tabs', label: 'ProConfigPage (多选项卡配置页)' },
            ]}
          />
          {showcaseMode === 'form' && (
            <RadioGroup
              variant="segmented"
              value={formLayoutMode}
              onChange={(v) => setFormLayoutMode(v as 'split' | 'grid')}
              options={[
                { value: 'split', label: '左右分栏 (Split)' },
                { value: 'grid', label: '双列网格 (Grid)' },
              ]}
            />
          )}
        </div>
      }
    >
      {showcaseMode === 'tabs' ? (
        <AbcProConfigPage
          title="系统全局运行参数"
          subTitle="基于 ProConfigPage 声明式构建：自动接管远程配置拉取、垂直选项卡导航、权限守卫与保存反馈"
          defaultValues={{
            siteName: brand.name,
            siteSubtitle: brand.subtitle ?? '',
            siteLogo: typeof brand.logo === 'string' ? brand.logo : '',
            loginMethods: 'password,sso',
            auditLevel: 'strict',
            maintenanceNotice: '每周日凌晨 02:00 - 03:00 进行例行灰度巡检。',
          }}
          fetchConfig={async () => ({
            code: 200,
            data: {
              siteName: brand.name,
              siteSubtitle: brand.subtitle ?? '',
              siteLogo: typeof brand.logo === 'string' ? brand.logo : '',
              loginMethods: 'password,sso',
              auditLevel: 'strict',
            },
          })}
          saveConfig={async (payload) => {
            onUpdateBrand({
              ...brand,
              name: payload.siteName,
              subtitle: payload.siteSubtitle,
              logo: payload.siteLogo,
            })
            return { code: 200 }
          }}
          tabs={[
            {
              key: 'brand',
              label: '品牌与门户视觉',
              icon: Globe,
              sectionTitle: '门户基础与品牌视觉',
              sectionDescription: '修改后保存将实时同步至顶部与侧边栏品牌区。',
              fields: [
                { key: 'siteName', label: '项目品牌名称', type: 'input' },
                { key: 'siteSubtitle', label: '副标题说明', type: 'input' },
                {
                  key: 'siteLogo',
                  label: '网站 LOGO 直链或 SVG',
                  type: 'image-url',
                  span: 2,
                  previewShape: 'rounded',
                },
                {
                  key: 'maintenanceNotice',
                  label: '全局维护通告',
                  type: 'textarea',
                  span: 2,
                },
              ],
            },
            {
              key: 'auth',
              label: '认证与合规策略',
              icon: ShieldCheck,
              sectionTitle: '统一身份认证渠道',
              sectionDescription: '支持逗号分隔多选 (checkbox-csv) 与必选锁定项保护。',
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
          layoutMode={formLayoutMode}
          initialValues={{
            siteName: brand.name,
            siteSubtitle: brand.subtitle ?? '',
            siteLogo: typeof brand.logo === 'string' ? brand.logo : '',
            sessionTimeout: 120,
            enableSso: true,
            securityMode: 'strict',
            maintenanceNotice: '每周日凌晨 02:00 - 03:00 进行例行灰度巡检。',
          }}
          groups={[
            {
              key: 'brand',
              title: '租户级品牌视觉配置',
              description:
                '管理当前租户工作台显示的项目名称与矢量 Logo，左侧缩略框支持 SVG 与图片直链实时灯箱预览。',
              columns: 1,
              fields: [
                { name: 'siteName', label: '项目品牌名称', required: true },
                { name: 'siteSubtitle', label: '副标题说明' },
                {
                  name: 'siteLogo',
                  label: '网站 LOGO 直链或内联 SVG',
                  type: 'image',
                  helperText: '可直接输入图片 URL 或粘贴 <svg ...>...</svg> 矢量源码',
                },
              ],
            },
            {
              key: 'security',
              title: '安全与会话访问策略',
              description: '配置控制台会话超时阈值、单点登录开关与安全审计等级。',
              columns: 2,
              fields: [
                {
                  name: 'sessionTimeout',
                  label: '会话超时时间 (分钟)',
                  type: 'number',
                  required: true,
                },
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
                {
                  name: 'maintenanceNotice',
                  label: '系统维护公告文案',
                  type: 'textarea',
                },
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
    </PageContainer>
  )
}
