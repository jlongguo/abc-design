import React, { useState } from 'react'
import {
  Cascader,
  FileUpload,
  StatusTag,
  Transfer,
  type CascaderOption,
  type CascaderValue,
  type FileUploadItem,
  type TransferItem,
} from '@abc-design/react'
import { ComponentDocPreview } from './ComponentDocPreview'

const REGION_TREE: CascaderOption[] = [
  {
    value: 'cn-east',
    label: '华东集群区',
    children: [
      {
        value: 'shanghai',
        label: '上海核心区',
        children: [
          { value: 'sh-1', label: '上海浦东可用区 A' },
          { value: 'sh-2', label: '上海张江可用区 B' },
        ],
      },
      {
        value: 'hangzhou',
        label: '杭州华东节点',
        children: [
          { value: 'hz-1', label: '杭州西湖节点' },
          { value: 'hz-2', label: '杭州余杭节点（维护中）', disabled: true },
        ],
      },
    ],
  },
  {
    value: 'ap-sg',
    label: '亚太新加坡区',
    children: [
      {
        value: 'sg-main',
        label: '新加坡主城区',
        children: [{ value: 'sg-a', label: 'SG-Zone-A' }],
      },
    ],
  },
]

const ROLE_POOL: TransferItem[] = Array.from({ length: 48 }, (_, idx) => ({
  key: `perm_${idx + 1}`,
  title:
    idx === 0
      ? '平台架构审批权'
      : idx === 1
        ? '浏览器会话接管权'
        : `细粒度租户能力 #${idx + 1}`,
  description: idx < 3 ? '高敏权限，需双人复核' : undefined,
  disabled: idx === 2,
}))

export const EnterpriseFormWidgetsDocs: React.FC = () => {
  const [singleRegion, setSingleRegion] = useState<CascaderValue>(['cn-east', 'shanghai', 'sh-1'])
  const [multiRegion, setMultiRegion] = useState<CascaderValue>([['cn-east', 'shanghai', 'sh-1']])
  const [targetPerms, setTargetPerms] = useState<string[]>(['perm_1', 'perm_4'])
  const [uploadedFiles, setUploadedFiles] = useState<FileUploadItem[]>([
    {
      uid: 'demo-1',
      name: 'enterprise-compliance-audit.json',
      size: 24576,
      status: 'done',
      percent: 100,
    },
  ])

  return (
    <>
      <ComponentDocPreview
        title="Cascader 多列级联选择器"
        description="支持单选/多选胶囊标签、changeOnSelect 逐级直选、悬停或点击展开、pinyin 拼音全路径检索与方向键多列游走。"
        code={`import { Cascader } from '@abc-design/react'

<Cascader
  label="调度地域可用区"
  options={REGION_TREE}
  value={singleRegion}
  onChange={setSingleRegion}
  searchable
  clearable
/>`}
        apiRows={[
          { prop: 'options', type: 'CascaderOption[]', required: true, description: '树形级联选项数组' },
          { prop: 'multiple', type: 'boolean', defaultValue: 'false', description: '开启多选复选框与胶囊标签回显' },
          { prop: 'changeOnSelect', type: 'boolean', defaultValue: 'false', description: '单选时允许选中任意非叶子中间节点' },
          { prop: 'searchable', type: 'boolean', defaultValue: 'false', description: '开启全路径文本与拼音首字母检索' },
        ]}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Cascader
            label="单选可用区（支持拼音搜索如 pd）"
            options={REGION_TREE}
            value={singleRegion}
            onChange={setSingleRegion}
            searchable
            clearable
          />
          <Cascader
            label="多选调度节点"
            options={REGION_TREE}
            value={multiRegion}
            onChange={setMultiRegion}
            multiple
            searchable
            clearable
          />
        </div>
      </ComponentDocPreview>

      <ComponentDocPreview
        title="Transfer 双栏权限穿梭框（含虚拟滚动）"
        description="适用于角色授权、配额模板分发：内置拼音首字母筛选、40+ 条自动虚拟滚动、全选/反选与禁用项保护。"
        controls={
          <StatusTag tone="info">右侧已授予 {targetPerms.length} 项能力</StatusTag>
        }
        code={`import { Transfer } from '@abc-design/react'

<Transfer
  label="分配租户权限项"
  dataSource={ROLE_POOL}
  targetKeys={targetPerms}
  onChange={(nextKeys) => setTargetPerms(nextKeys)}
  searchable
  virtual
/>`}
        apiRows={[
          { prop: 'dataSource', type: 'TransferItem[]', required: true, description: '全量候选项列表' },
          { prop: 'targetKeys', type: 'string[]', description: '已迁移至右侧的 key 数组' },
          { prop: 'searchable', type: 'boolean', defaultValue: 'true', description: '开启左右独立汉字及拼音首字母搜索' },
          { prop: 'virtual', type: 'boolean', defaultValue: 'true', description: '单侧超过 40 条时自动启用固定行高虚拟滚动' },
        ]}
      >
        <Transfer
          label="多租户能力授权（共 48 项，自动启用虚拟滚动）"
          dataSource={ROLE_POOL}
          targetKeys={targetPerms}
          onChange={(nextKeys) => setTargetPerms(nextKeys)}
          searchable
          virtual
        />
      </ComponentDocPreview>

      <ComponentDocPreview
        title="FileUpload 多文件拖拽上传与校验列表"
        description="严格采用原生 <button> 焦点唤醒文件选择器，支持拖拽上传、格式/体积/数量前置校验、进度条与 AbcProvider.uploadAdapter / ProCrudForm 集成。"
        code={`import { FileUpload } from '@abc-design/react'

<FileUpload
  label="合规声明与策略附件"
  accept=".json,.pdf,.txt"
  maxSizeMB={5}
  maxCount={4}
  value={uploadedFiles}
  onChange={setUploadedFiles}
/>`}
        apiRows={[
          { prop: 'accept', type: 'string', description: '允许上传的扩展名或 MIME 通配符（如 .pdf,.json,image/*）' },
          { prop: 'maxSizeMB', type: 'number', defaultValue: '20', description: '单文件大小上限（MB）' },
          { prop: 'maxCount', type: 'number', description: '多文件模式下允许上传的最大数量' },
          { prop: 'customUpload', type: '(file, onProgress) => Promise<string | { url }>', description: '自定义上传执行器（缺省回退 AbcProvider.uploadAdapter）' },
        ]}
      >
        <FileUpload
          label="策略配置与审计附件"
          accept=".json,.pdf,.txt"
          maxSizeMB={5}
          maxCount={4}
          value={uploadedFiles}
          onChange={setUploadedFiles}
        />
      </ComponentDocPreview>
    </>
  )
}
