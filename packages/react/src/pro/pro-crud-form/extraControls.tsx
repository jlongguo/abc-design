import { Loader2,Plus,Trash2 } from 'lucide-react'
import React,{ useMemo,useState } from 'react'
import Button from '../../components/button/Button'
import { ImagePreview } from '../../components/display/ImagePreview'
import { Input } from '../../components/form/Input'
import Icon from '../../components/icon/Icon'
import { IconPicker } from '../../components/icon/IconPicker'
import { useAbcConfig } from '../../provider/AbcProvider'
import { cn } from '../../utils/cn'

/* ==================== 1. 零外部依赖响应式表单控制器 (ProFormInstance) ==================== */
function readFileAsDataUrlFallback(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(new Error('文件读取失败'))
    reader.readAsDataURL(file)
  })
}

export interface ProMultiImageUploadProps {
  /** 图片 URL 列表（兼容逗号分隔字符串或字符串数组） */
  value: string | string[]
  disabled?: boolean
  maxCount?: number
  customUpload?: (file: File) => Promise<{ url: string } | string | undefined>
  onChange: (val: string) => void
}

/**
 * 零业务耦合多图上传控件：通过 customUpload 或 AbcProvider.uploadAdapter 完成上传，支持灯箱预览与移除
 */
export const ProMultiImageUpload: React.FC<ProMultiImageUploadProps> = ({
  value,
  disabled = false,
  maxCount = 9,
  customUpload,
  onChange,
}) => {
  const { uploadAdapter, toast } = useAbcConfig()
  const [uploading, setUploading] = useState(false)

  const list = useMemo(() => {
    if (Array.isArray(value)) return value.filter(Boolean)
    return String(value || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  }, [value])

  const handleUploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0 || disabled || uploading) return
    const nextList = [...list]
    setUploading(true)
    try {
      for (let i = 0; i < files.length; i++) {
        if (nextList.length >= maxCount) {
          toast.error(`最多支持上传 ${maxCount} 张图片`)
          break
        }
        const file = files[i]
        let url = ''
        if (customUpload) {
          const res = await customUpload(file)
          url = typeof res === 'string' ? res : res?.url || ''
        } else if (uploadAdapter) {
          url = await uploadAdapter(file)
        } else {
          url = await readFileAsDataUrlFallback(file)
        }
        if (url) nextList.push(url)
      }
      onChange(nextList.join(','))
    } catch (err: any) {
      toast.error(err?.message || '上传图片失败')
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  const handleRemove = (index: number) => {
    if (disabled) return
    const nextList = list.filter((_, i) => i !== index)
    onChange(nextList.join(','))
  }

  return (
    <div className="flex flex-wrap gap-3">
      {list.map((url, idx) => (
        <div
          key={`${url}-${idx}`}
          className="group relative h-24 w-24 overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
        >
          <ImagePreview src={url} width={96} height={96} className="h-full w-full object-cover" />
          {!disabled && (
            <button
              type="button"
              onClick={() => handleRemove(idx)}
              aria-label="移除图片"
              title="移除图片"
              className="absolute top-1 right-1 rounded-full bg-[var(--abc-danger)]/90 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          )}
        </div>
      ))}
      {list.length < maxCount && !disabled && (
        <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-[var(--abc-radius-lg)] border-2 border-dashed border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)]/40 text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]">
          {uploading ? (
            <Loader2 className="h-5 w-5 animate-spin text-[var(--abc-primary)]" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
          <span className="text-[11px]">
            {uploading ? '上传中...' : `上传(${list.length}/${maxCount})`}
          </span>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            disabled={uploading}
            onChange={handleUploadFiles}
          />
        </label>
      )}
    </div>
  )
}

export const MultiImageFieldControl = ProMultiImageUpload

export interface ProIconFieldControlProps {
  value: string
  disabled?: boolean
  placeholder?: string
  presetIcons?: string[]
  onChange: (val: string) => void
}

/**
 * 表单图标选择器增强控件：同时支持手动输入图标名、常用预设胶囊点选与唤起可视化图标库
 */
export const ProIconFieldControl: React.FC<ProIconFieldControlProps> = ({
  value,
  disabled = false,
  placeholder,
  presetIcons,
  onChange,
}) => {
  const [pickerOpen, setPickerOpen] = useState(false)

  if (!presetIcons || presetIcons.length === 0) {
    return (
      <IconPicker
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
      />
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]">
          <Icon name={value || 'Sparkles'} size={16} />
        </div>
        <div className="flex-1">
          <Input
            placeholder={placeholder || '输入或从右侧选择图标'}
            disabled={disabled}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          pressScale={false}
          disabled={disabled}
          onClick={() => setPickerOpen(true)}
        >
          打开图标库
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[11px] text-[var(--abc-fg-muted)]">常用推荐:</span>
        {presetIcons.map((preset) => (
          <button
            key={preset}
            type="button"
            disabled={disabled}
            onClick={() => onChange(preset)}
            className={cn(
              'inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border px-2 py-1 text-[11px] transition-colors cursor-pointer',
              value === preset
                ? 'border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]'
                : 'border-[var(--abc-border)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]'
            )}
          >
            <Icon name={preset} size={12} />
            <span>{preset}</span>
          </button>
        ))}
      </div>
      <IconPicker
        open={pickerOpen}
        current={value}
        onClose={() => setPickerOpen(false)}
        onSelect={onChange}
      />
    </div>
  )
}

/* ==================== 4. ProCrudFormField 单字段渲染器 ==================== */

