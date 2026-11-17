import React, { useRef, useState } from 'react'
import {
  Button,
  FileUpload,
  ImageUpload,
  Label,
  PageContainer,
  ProMultiImageUpload,
  SliderVerify,
  StatusTag,
  abcToast,
  type FileUploadItem,
} from '@abc-design/react'
import { MarkdownEditor, type MarkdownEditorHandle } from '@abc-design/markdown'
import { FileCode2 } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch, KnobText } from '../../components/PropKnobs'

const DEMO_SVG_A =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" rx="16" fill="#2563eb"/><circle cx="60" cy="60" r="28" fill="#ffffff" fill-opacity="0.9"/></svg>'
  )

const DEMO_SVG_B =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" rx="16" fill="#059669"/><polygon points="60,24 96,92 24,92" fill="#ffffff" fill-opacity="0.9"/></svg>'
  )

const INITIAL_MARKDOWN = `## ABC Design 发版与安全核验说明

> 独立子包 \`@abc-design/markdown\` 将编辑器重依赖隔离在核心组件包之外。

- **三态预览**：支持 \`live\`、\`edit\` 与 \`preview\` 视图即时切换
- **主题联动**：支持 \`auto\` 自动订阅 \`AbcProvider\` 深浅色切换
- **命令插值**：点击上方按钮调用 \`ref.current?.insertText(...)\`
`

export const UploadsVerifyAndMarkdownPage: React.FC = () => {
  // Card 1: ImageUpload & ProMultiImageUpload
  const [multiMaxCount, setMultiMaxCount] = useState<number>(4)
  const [imgDisabled, setImgDisabled] = useState(false)
  const [helperText, setHelperText] = useState('支持 JPG / PNG / WEBP / SVG，本地自动生成 DataURL 预览')
  const [singleImg, setSingleImg] = useState(DEMO_SVG_A)
  const [multiImgs, setMultiImgs] = useState(`${DEMO_SVG_A},${DEMO_SVG_B}`)

  // Card 2: FileUpload & SliderVerify
  const [accept, setAccept] = useState<'.json,.pdf,.txt' | 'image/*'>('.json,.pdf,.txt')
  const [maxSizeMB, setMaxSizeMB] = useState<number>(5)
  const [fileMaxCount, setFileMaxCount] = useState<number>(2)
  const [fileDisabled, setFileDisabled] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<FileUploadItem[]>([
    {
      uid: 'init-1',
      name: 'sandbox-policy-schema.json',
      size: 18432,
      status: 'done',
      percent: 100,
    },
  ])
  const [captchaToken, setCaptchaToken] = useState('')

  // Card 3: MarkdownEditor
  const mdRef = useRef<MarkdownEditorHandle>(null)
  const [mdPreview, setMdPreview] = useState<'live' | 'edit' | 'preview'>('live')
  const [mdColorMode, setMdColorMode] = useState<'auto' | 'light' | 'dark'>('auto')
  const [mdHeight, setMdHeight] = useState<number>(280)
  const [mdContent, setMdContent] = useState(INITIAL_MARKDOWN)

  return (
    <PageContainer
      title="文件图片上传、验证码与 Markdown"
      subtitle="涵盖单图/SVG 上传 ImageUpload、多图灯箱上传 ProMultiImageUpload、多文件校验列表 FileUpload、拼图滑块 SliderVerify 与 MarkdownEditor。"
    >
      <div className="space-y-5">
        {/* 卡片 1：ImageUpload & ProMultiImageUpload */}
        <ComponentDocPreview
          title="ImageUpload & ProMultiImageUpload 单图与多图上传"
          components={['ImageUpload', 'ProMultiImageUpload']}
          description="零后端硬编码的图片/SVG 上传套件：默认集成 AbcProvider.uploadAdapter，缺省时自动转本地 DataURL 预览，支持放大灯箱与替换删除。"
          onResetKnobs={() => {
            setMultiMaxCount(4)
            setImgDisabled(false)
            setHelperText('支持 JPG / PNG / WEBP / SVG，本地自动生成 DataURL 预览')
          }}
          controls={
            <>
              <KnobSegmented
                label="ProMultiImageUpload.maxCount"
                value={multiMaxCount}
                options={[
                  { label: '2', value: 2 },
                  { label: '4', value: 4 },
                  { label: '8', value: 8 },
                ]}
                onChange={setMultiMaxCount}
              />
              <KnobText
                label="helperText"
                value={helperText}
                onChange={setHelperText}
                widthClass="w-56"
              />
              <KnobSwitch label="disabled" checked={imgDisabled} onChange={setImgDisabled} />
            </>
          }
          code={`import { ImageUpload, ProMultiImageUpload } from '@abc-design/react'

<ImageUpload
  label="租户品牌 Logo"
  value={singleUrl}
  onChange={setSingleUrl}
  disabled={${imgDisabled}}
  helperText="${helperText}"
/>

<ProMultiImageUpload
  value={multiUrls}
  onChange={setMultiUrls}
  maxCount={${multiMaxCount}}
  disabled={${imgDisabled}}
/>`}
          apiRows={[
            { prop: 'ImageUpload.value / onChange', type: 'string / (nextUrl: string) => void', description: '图片 URL 或内联 <svg> 字符串' },
            { prop: 'ImageUpload.helperText / error', type: 'ReactNode / string', description: '底部辅助说明或错误态高亮文案' },
            { prop: 'ImageUpload.customUpload', type: '(file: File) => Promise<string>', description: '局部上传执行器，优先于 AbcProvider.uploadAdapter' },
            { prop: 'ProMultiImageUpload.value / onChange', type: 'string | string[] / (val: string) => void', required: true, description: '支持逗号分隔 URL 串或数组，回传逗号拼接字符串' },
            { prop: 'ProMultiImageUpload.maxCount', type: 'number', defaultValue: '9', description: '最大可上传图片数，达上限后隐藏添加按钮' },
          ]}
        >
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <ImageUpload
              label="单图 / SVG 品牌凭证 (ImageUpload)"
              value={singleImg}
              onChange={setSingleImg}
              disabled={imgDisabled}
              helperText={helperText}
            />
            <div className="space-y-2">
              <Label>多图灯箱矩阵 (ProMultiImageUpload, maxCount={multiMaxCount})</Label>
              <ProMultiImageUpload
                value={multiImgs}
                onChange={setMultiImgs}
                maxCount={multiMaxCount}
                disabled={imgDisabled}
              />
              <p className="text-[11px] text-[var(--abc-fg-muted)]">{helperText}</p>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2：FileUpload & SliderVerify */}
        <ComponentDocPreview
          title="FileUpload & SliderVerify 文件校验上传与行为验证"
          components={['FileUpload', 'SliderVerify']}
          description="FileUpload 提供原生按钮焦点触发、类型/体积/数量前置拦截与进度条；SliderVerify 未配置远程 captchaAdapter 时启用离线 SVG 拼图挑战。"
          onResetKnobs={() => {
            setAccept('.json,.pdf,.txt')
            setMaxSizeMB(5)
            setFileMaxCount(2)
            setFileDisabled(false)
          }}
          controls={
            <>
              <KnobSegmented
                label="accept"
                value={accept}
                options={[
                  { label: '.json,.pdf,.txt', value: '.json,.pdf,.txt' },
                  { label: 'image/*', value: 'image/*' },
                ]}
                onChange={setAccept}
              />
              <KnobSegmented
                label="maxSizeMB"
                value={maxSizeMB}
                options={[
                  { label: '2', value: 2 },
                  { label: '5', value: 5 },
                  { label: '20', value: 20 },
                ]}
                onChange={setMaxSizeMB}
              />
              <KnobSegmented
                label="maxCount"
                value={fileMaxCount}
                options={[
                  { label: '2', value: 2 },
                  { label: '5', value: 5 },
                ]}
                onChange={setFileMaxCount}
              />
              <KnobSwitch label="disabled" checked={fileDisabled} onChange={setFileDisabled} />
            </>
          }
          code={`import { FileUpload, SliderVerify } from '@abc-design/react'

<FileUpload
  label="策略与合规附件"
  accept="${accept}"
  maxSizeMB={${maxSizeMB}}
  maxCount={${fileMaxCount}}
  disabled={${fileDisabled}}
  value={files}
  onChange={setFiles}
/>

<SliderVerify
  onSuccess={({ nonceStr, value }) => setToken(\`\${nonceStr}:\${value}\`)}
/>`}
          apiRows={[
            { prop: 'FileUpload.accept', type: 'string', description: '允许的扩展名或 MIME 通配符（如 .json,.pdf,.txt 或 image/*）' },
            { prop: 'FileUpload.maxSizeMB / maxCount', type: 'number', defaultValue: 'maxSizeMB: 20', description: '单文件大小上限与多文件最大数量前置校验' },
            { prop: 'FileUpload.value / onChange', type: 'FileUploadItem[] / (files) => void', description: '受控文件状态列表（uploading / done / error）' },
            { prop: 'SliderVerify.onSuccess', type: '(data: { nonceStr: string; value: number }) => void', required: true, description: '对齐缺口校验通过后返回令牌与横向偏移像素' },
            { prop: 'SliderVerify.captchaFetcher', type: '() => Promise<AbcCaptchaData>', description: '局部验证码拉取函数（缺省依次回退 AbcProvider.captchaAdapter 与内置 SVG 拼图）' },
          ]}
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <FileUpload
              label="多文件拖拽校验队列 (FileUpload)"
              accept={accept}
              maxSizeMB={maxSizeMB}
              maxCount={fileMaxCount}
              disabled={fileDisabled}
              value={uploadedFiles}
              onChange={setUploadedFiles}
            />
            <div className="flex flex-col items-start space-y-3">
              <Label>安全拼图滑块校验 (SliderVerify)</Label>
              <SliderVerify
                onSuccess={(payload) => setCaptchaToken(`${payload.nonceStr}:${payload.value}px`)}
                onFail={() => setCaptchaToken('')}
              />
              {captchaToken ? (
                <StatusTag tone="success" dot className="font-mono">
                  验证通过 Token 回执：{captchaToken}
                </StatusTag>
              ) : (
                <StatusTag tone="neutral" dot={false}>
                  向右拖动滑块对齐蓝色缺口以获取验证 Token
                </StatusTag>
              )}
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3：MarkdownEditor (@abc-design/markdown) */}
        <ComponentDocPreview
          title="MarkdownEditor 企业级双栏编辑器"
          pkg="@abc-design/markdown"
          components={['MarkdownEditor']}
          description="独立子包封装 @uiw/react-md-editor，不污染 @abc-design/react 核心体积；支持三态布局、主题自动同步及 ref.insertText 光标插值。"
          onResetKnobs={() => {
            setMdPreview('live')
            setMdColorMode('auto')
            setMdHeight(280)
          }}
          controls={
            <>
              <KnobSegmented
                label="preview"
                value={mdPreview}
                options={[
                  { label: 'live', value: 'live' },
                  { label: 'edit', value: 'edit' },
                  { label: 'preview', value: 'preview' },
                ]}
                onChange={setMdPreview}
              />
              <KnobSegmented
                label="colorMode"
                value={mdColorMode}
                options={[
                  { label: 'auto', value: 'auto' },
                  { label: 'light', value: 'light' },
                  { label: 'dark', value: 'dark' },
                ]}
                onChange={setMdColorMode}
              />
              <KnobSegmented
                label="height"
                value={mdHeight}
                options={[
                  { label: '200', value: 200 },
                  { label: '280', value: 280 },
                  { label: '360', value: 360 },
                ]}
                onChange={setMdHeight}
              />
              <Button
                size="xs"
                variant="secondary"
                leftIcon={<FileCode2 className="h-3 w-3" />}
                onClick={() => {
                  mdRef.current?.insertText(
                    '\n| 节点集群 | 状态 | 延迟 |\n| :--- | :--- | :--- |\n| 华东上海 | 健康 | 12ms |\n'
                  )
                  abcToast.success('已通过 ref.current.insertText 插入表格片段')
                }}
              >
                insertText 插入表格
              </Button>
            </>
          }
          code={`import { useRef, useState } from 'react'
import { MarkdownEditor, type MarkdownEditorHandle } from '@abc-design/markdown'

const editorRef = useRef<MarkdownEditorHandle>(null)
<MarkdownEditor
  ref={editorRef}
  value={content}
  onChange={(val) => setContent(val ?? '')}
  preview="${mdPreview}"
  colorMode="${mdColorMode}"
  height={${mdHeight}}
/>`}
          apiRows={[
            { prop: 'value / onChange', type: 'string / (val?: string) => void', description: '受控 Markdown 文本内容与变更回调' },
            { prop: 'preview', type: "'live' | 'edit' | 'preview'", defaultValue: "'live'", description: '双栏同步分屏、仅源码编辑或仅渲染预览' },
            { prop: 'colorMode', type: "'auto' | 'light' | 'dark'", defaultValue: "'auto'", description: 'auto 模式下自动订阅 AbcProvider 及根元素亮暗色状态' },
            { prop: 'height', type: 'number', defaultValue: '450', description: '编辑器画布高度（像素）' },
            { prop: 'ref.insertText / focus', type: '(text: string) => void / () => void', description: '命令式向光标选区插入文本或聚焦编辑区' },
          ]}
        >
          <MarkdownEditor
            ref={mdRef}
            value={mdContent}
            onChange={(val) => setMdContent(val ?? '')}
            preview={mdPreview}
            colorMode={mdColorMode}
            height={mdHeight}
          />
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default UploadsVerifyAndMarkdownPage
