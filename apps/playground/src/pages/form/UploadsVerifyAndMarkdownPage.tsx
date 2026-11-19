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
  type AbcSize,
  type FileUploadItem,
  type FileUploadListType,
  type FileUploadVariant,
  type ImageUploadShape,
  type ImageUploadVariant,
  type ProMultiImageUploadVariant,
} from '@abc-design/react'
import { MarkdownEditor, type MarkdownEditorHandle } from '@abc-design/markdown'
import { FileCode2 } from 'lucide-react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'

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

const IMAGE_VARIANT_OPTIONS: ReadonlyArray<{ label: string; value: ImageUploadVariant }> = [
  { label: 'dropzone (拖拽)', value: 'dropzone' },
  { label: 'avatar (头像)', value: 'avatar' },
  { label: 'card (照片卡)', value: 'card' },
  { label: 'button (按钮)', value: 'button' },
]

const MULTI_VARIANT_OPTIONS: ReadonlyArray<{ label: string; value: ProMultiImageUploadVariant }> = [
  { label: 'picture-card', value: 'picture-card' },
  { label: 'picture-list', value: 'picture-list' },
  { label: 'compact-grid', value: 'compact-grid' },
]

const FILE_VARIANT_OPTIONS: ReadonlyArray<{ label: string; value: FileUploadVariant }> = [
  { label: 'dragger (拖拽)', value: 'dragger' },
  { label: 'button (按钮)', value: 'button' },
  { label: 'card (卡片网格)', value: 'card' },
  { label: 'compact (紧凑条)', value: 'compact' },
]

export const UploadsVerifyAndMarkdownPage: React.FC = () => {
  // Card 1: ImageUpload & ProMultiImageUpload 多模式交互
  const [imgVariant, setImgVariant] = useState<ImageUploadVariant>('dropzone')
  const [imgShape, setImgShape] = useState<ImageUploadShape>('rounded')
  const [imgSize, setImgSize] = useState<AbcSize>('sm')
  const [multiVariant, setMultiVariant] = useState<ProMultiImageUploadVariant>('picture-card')
  const [multiMaxCount, setMultiMaxCount] = useState<number>(4)
  const [multiReorderable, setMultiReorderable] = useState<boolean>(true)
  const [showCoverBadge, setShowCoverBadge] = useState<boolean>(true)
  const [imgDisabled, setImgDisabled] = useState(false)
  const [singleImg, setSingleImg] = useState(DEMO_SVG_A)
  const [avatarImg, setAvatarImg] = useState(DEMO_SVG_A)
  const [cardImg, setCardImg] = useState(DEMO_SVG_B)
  const [btnImg, setBtnImg] = useState(DEMO_SVG_A)
  const [multiImgs, setMultiImgs] = useState(`${DEMO_SVG_A},${DEMO_SVG_B}`)

  // Card 2: FileUpload & SliderVerify 多模式交互
  const [fileVariant, setFileVariant] = useState<FileUploadVariant>('dragger')
  const [fileListType, setFileListType] = useState<FileUploadListType>('picture')
  const [accept, setAccept] = useState<string>('.json,.pdf,.txt,image/*')
  const [maxSizeMB, setMaxSizeMB] = useState<number>(5)
  const [fileMaxCount, setFileMaxCount] = useState<number>(4)
  const [simulateFail, setSimulateFail] = useState<boolean>(false)
  const [fileDisabled, setFileDisabled] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<FileUploadItem[]>([
    {
      uid: 'init-1',
      name: 'sandbox-policy-schema.json',
      size: 18432,
      status: 'done',
      percent: 100,
    },
    {
      uid: 'init-2',
      name: 'brand-badge-preview.svg',
      size: 4096,
      type: 'image/svg+xml',
      url: DEMO_SVG_A,
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

  const handleSimulatedUpload = async (file: File, onProgress?: (percent: number) => void) => {
    onProgress?.(45)
    await new Promise((r) => window.setTimeout(r, 260))
    if (simulateFail) {
      throw new Error('模拟网络超时：点击右侧重试图标即可重新上传')
    }
    onProgress?.(100)
    if (file.type.startsWith('image/')) {
      return await new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onload = () => resolve(String(reader.result || ''))
        reader.readAsDataURL(file)
      })
    }
    return `https://cdn.abc-design.dev/uploads/${encodeURIComponent(file.name)}`
  }

  return (
    <PageContainer
      title="文件图片上传、验证码与 Markdown"
      subtitle="涵盖四态单图上传 ImageUpload、三态多图上传 ProMultiImageUpload、四态多文件校验上传 FileUpload、拼图滑块 SliderVerify 与 MarkdownEditor。"
    >
      <div className="space-y-5">
        {/* 卡片 1：ImageUpload & ProMultiImageUpload */}
        <ComponentDocPreview
          title="ImageUpload & ProMultiImageUpload 多模式单图与多图上传"
          components={['ImageUpload', 'ProMultiImageUpload']}
          description="零后端硬编码的图片/SVG 上传套件：ImageUpload 支持 dropzone / avatar / card / button 四种交互模式；ProMultiImageUpload 安全兼容含逗号的 DataURL 预览，支持照片墙 / 图文列表 / 紧凑网格三态、拖拽上传、前后调序与封面角标。"
          onResetKnobs={() => {
            setImgVariant('dropzone')
            setImgShape('rounded')
            setImgSize('sm')
            setMultiVariant('picture-card')
            setMultiMaxCount(4)
            setMultiReorderable(true)
            setShowCoverBadge(true)
            setImgDisabled(false)
            setSingleImg(DEMO_SVG_A)
            setMultiImgs(`${DEMO_SVG_A},${DEMO_SVG_B}`)
          }}
          controls={
            <>
              <KnobSegmented label="Image.variant" value={imgVariant} options={IMAGE_VARIANT_OPTIONS} onChange={setImgVariant} />
              <KnobSegmented
                label="Image.shape"
                value={imgShape}
                options={[
                  { label: 'rounded', value: 'rounded' as const },
                  { label: 'circle', value: 'circle' as const },
                ]}
                onChange={setImgShape}
              />
              <KnobSegmented
                label="size"
                value={imgSize}
                options={[
                  { label: 'xs', value: 'xs' as const },
                  { label: 'sm', value: 'sm' as const },
                  { label: 'md', value: 'md' as const },
                  { label: 'lg', value: 'lg' as const },
                ]}
                onChange={setImgSize}
              />
              <KnobSegmented label="Multi.variant" value={multiVariant} options={MULTI_VARIANT_OPTIONS} onChange={setMultiVariant} />
              <KnobSegmented
                label="maxCount"
                value={multiMaxCount}
                options={[
                  { label: '3', value: 3 },
                  { label: '4', value: 4 },
                  { label: '8', value: 8 },
                ]}
                onChange={setMultiMaxCount}
              />
              <KnobSwitch label="reorderable" checked={multiReorderable} onChange={setMultiReorderable} />
              <KnobSwitch label="showCoverBadge" checked={showCoverBadge} onChange={setShowCoverBadge} />
              <KnobSwitch label="disabled" checked={imgDisabled} onChange={setImgDisabled} />
            </>
          }
          code={`import { ImageUpload, ProMultiImageUpload } from '@abc-design/react'

<ImageUpload
  variant="${imgVariant}"
  shape="${imgShape}"
  size="${imgSize}"
  label="租户品牌 Logo"
  value={singleUrl}
  onChange={setSingleUrl}
  disabled={${imgDisabled}}
/>

<ProMultiImageUpload
  variant="${multiVariant}"
  value={multiUrls}
  onChange={setMultiUrls}
  maxCount={${multiMaxCount}}
  reorderable={${multiReorderable}}
  showCoverBadge={${showCoverBadge}}
  disabled={${imgDisabled}}
/>`}
          apiRows={[
            { prop: 'ImageUpload.variant', type: "'dropzone' | 'avatar' | 'card' | 'button'", defaultValue: "'dropzone'", description: '四态交互模式：拖拽大面板、头像、照片卡片、紧凑按钮' },
            { prop: 'ImageUpload.shape / size', type: "'rounded' | 'circle' / AbcSize", defaultValue: "avatar 默认 'circle'", description: '预览区圆角形态与四档尺寸规格' },
            { prop: 'ProMultiImageUpload.variant', type: "'picture-card' | 'picture-list' | 'compact-grid'", defaultValue: "'picture-card'", description: '照片墙、图文列表或高密度紧凑网格三态展示' },
            { prop: 'ProMultiImageUpload.reorderable / showCoverBadge', type: 'boolean', defaultValue: 'false', description: '开启图片前后调序按钮及首图「封面」角标' },
            { prop: 'ProMultiImageUpload.value / onChange', type: 'string | string[] / (val: string) => void', required: true, description: '安全解析逗号分隔 URL 与含逗号 DataURL，零截断乱码' },
          ]}
        >
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <ImageUpload
                label={`主控单图上传 (ImageUpload · variant="${imgVariant}")`}
                variant={imgVariant}
                shape={imgShape}
                size={imgSize}
                value={singleImg}
                onChange={setSingleImg}
                disabled={imgDisabled}
                helperText="支持点击或拖拽本地图片自动生成 DataURL 预览与灯箱放大"
              />
              <div className="space-y-2">
                <Label>
                  多图上传矩阵 (ProMultiImageUpload · {multiVariant}, maxCount={multiMaxCount})
                </Label>
                <ProMultiImageUpload
                  variant={multiVariant}
                  value={multiImgs}
                  onChange={setMultiImgs}
                  maxCount={multiMaxCount}
                  reorderable={multiReorderable}
                  showCoverBadge={showCoverBadge}
                  disabled={imgDisabled}
                />
              </div>
            </div>

            {/* 四态快捷同屏对照区 */}
            <div className="grid grid-cols-1 gap-4 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/40 p-3.5 md:grid-cols-3">
              <ImageUpload
                label="头像模式 (avatar · circle)"
                variant="avatar"
                shape="circle"
                size="sm"
                value={avatarImg}
                onChange={setAvatarImg}
                disabled={imgDisabled}
              />
              <ImageUpload
                label="照片卡片模式 (card)"
                variant="card"
                size="sm"
                value={cardImg}
                onChange={setCardImg}
                disabled={imgDisabled}
              />
              <ImageUpload
                label="紧凑按钮模式 (button)"
                variant="button"
                buttonText="上传凭证图"
                value={btnImg}
                onChange={setBtnImg}
                disabled={imgDisabled}
              />
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2：FileUpload & SliderVerify */}
        <ComponentDocPreview
          title="FileUpload & SliderVerify 多模式文件上传与行为验证"
          components={['FileUpload', 'SliderVerify']}
          description="FileUpload 支持 dragger（拖拽大面板）、button（按钮触发）、card（文件卡片网格）与 compact（紧凑胶囊条）四态交互，搭配 text / picture 双列表样式、格式体积前置校验、图片灯箱与失败一键重试。"
          onResetKnobs={() => {
            setFileVariant('dragger')
            setFileListType('picture')
            setAccept('.json,.pdf,.txt,image/*')
            setMaxSizeMB(5)
            setFileMaxCount(4)
            setSimulateFail(false)
            setFileDisabled(false)
          }}
          controls={
            <>
              <KnobSegmented label="variant" value={fileVariant} options={FILE_VARIANT_OPTIONS} onChange={setFileVariant} />
              <KnobSegmented
                label="listType"
                value={fileListType}
                options={[
                  { label: 'text', value: 'text' as const },
                  { label: 'picture', value: 'picture' as const },
                ]}
                onChange={setFileListType}
              />
              <KnobSegmented
                label="accept"
                value={accept}
                options={[
                  { label: '文档+图片', value: '.json,.pdf,.txt,image/*' },
                  { label: '仅图片', value: 'image/*' },
                  { label: '全部格式', value: '' },
                ]}
                onChange={setAccept}
              />
              <KnobSegmented
                label="maxCount"
                value={fileMaxCount}
                options={[
                  { label: '2', value: 2 },
                  { label: '4', value: 4 },
                  { label: '6', value: 6 },
                ]}
                onChange={setFileMaxCount}
              />
              <KnobSwitch label="模拟上传失败(测重试)" checked={simulateFail} onChange={setSimulateFail} />
              <KnobSwitch label="disabled" checked={fileDisabled} onChange={setFileDisabled} />
            </>
          }
          code={`import { FileUpload, SliderVerify } from '@abc-design/react'

<FileUpload
  label="策略与合规附件"
  variant="${fileVariant}"
  listType="${fileListType}"${accept ? `\n  accept="${accept}"` : ''}
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
            { prop: 'FileUpload.variant', type: "'dragger' | 'button' | 'card' | 'compact'", defaultValue: "'dragger'", description: '四种上传交互形态，适配大表单、常规弹窗、媒体库与紧凑工具条' },
            { prop: 'FileUpload.listType', type: "'text' | 'picture'", defaultValue: "'text'", description: 'picture 模式下自动为图片附件展示缩略图与点击放大灯箱' },
            { prop: 'FileUpload.accept / maxSizeMB / maxCount', type: 'string / number / number', defaultValue: 'maxSizeMB: 20', description: '扩展名/MIME、单文件体积与文件总数前置校验' },
            { prop: 'FileUpload.customUpload', type: '(file, onProgress?) => Promise<string | { url }>', description: '支持进度回调与异常抛出自动触发单条目重试按钮' },
            { prop: 'SliderVerify.onSuccess', type: '(data: { nonceStr: string; value: number }) => void', required: true, description: '对齐缺口校验通过后返回令牌与横向偏移像素' },
          ]}
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <FileUpload
              label={`多模式文件上传 (FileUpload · ${fileVariant})`}
              variant={fileVariant}
              listType={fileListType}
              accept={accept || undefined}
              maxSizeMB={maxSizeMB}
              maxCount={fileMaxCount}
              disabled={fileDisabled}
              customUpload={handleSimulatedUpload}
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
