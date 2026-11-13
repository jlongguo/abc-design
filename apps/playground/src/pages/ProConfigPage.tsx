import React, { useState } from 'react'
import {
  PageContainer,
  ProConfigForm,
  RadioGroup,
  type AbcBrandInfo,
} from '@abc-design/react'

export const ProConfigPage: React.FC<{
  brand: AbcBrandInfo
  onUpdateBrand: (next: AbcBrandInfo) => void
}> = ({ brand, onUpdateBrand }) => {
  const [formLayoutMode, setFormLayoutMode] = useState<'split' | 'grid'>('split')

  return (
    <PageContainer
      title="ProConfigForm 分组动态配置页"
      subtitle="修改品牌名称或 Logo（支持粘贴 SVG 源码或图片直链），保存后将实时同步至整个应用的导航栏品牌区"
      extra={
        <RadioGroup
          variant="segmented"
          value={formLayoutMode}
          onChange={(v) => setFormLayoutMode(v as 'split' | 'grid')}
          options={[
            { value: 'split', label: '左右分栏导览 (Split)' },
            { value: 'grid', label: '双列卡片网格 (Grid)' },
          ]}
        />
      }
    >
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
    </PageContainer>
  )
}
