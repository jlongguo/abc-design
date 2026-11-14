import React from 'react'
import type { AbcMotionPreset, AbcSize } from '@abc-design/tokens'
import { HelpCircle } from 'lucide-react'
import { useAbcMotion, useAbcSize } from '../../hooks/useAbcDefaults'
import { Tooltip } from '../display/Overlays'
import { cn } from '../../utils/cn'

export interface FormFieldProps {
  /** 字段名称标签 */
  label?: React.ReactNode
  /** 关联表单控件的 htmlFor ID */
  htmlFor?: string
  /** 是否必填标识 */
  required?: boolean
  /** 标签右侧悬浮说明提示 */
  tooltip?: React.ReactNode
  /** 校验错误提示文本 */
  error?: string
  /** 底部辅助说明信息 */
  helperText?: React.ReactNode
  /** 右上角附加信息（如字数统计、快捷填充链接） */
  extra?: React.ReactNode
  /** 排版方向 */
  layout?: 'vertical' | 'horizontal'
  /** 控件标签与间距规格（xs | sm | md | lg） */
  size?: AbcSize
  /** 组件交互动效规格 */
  motion?: AbcMotionPreset
  className?: string
  children: React.ReactNode
}

const LABEL_SIZE_CLASS: Record<AbcSize, string> = {
  xs: 'text-[11px]',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
}

/**
 * 标准表单项包装容器
 * 统一标签字重、必填星号、错误提示与辅助说明间距
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  required = false,
  tooltip,
  error,
  helperText,
  extra,
  layout = 'vertical',
  size,
  motion,
  className,
  children,
}) => {
  const resolvedSize = useAbcSize(size, 'sm')
  const resolvedMotion = useAbcMotion(motion)

  return (
    <div
      data-motion={resolvedMotion}
      className={cn(
        layout === 'horizontal'
          ? 'grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4'
          : 'flex flex-col gap-1.5',
        className
      )}
    >
      {(label || extra) && (
        <div
          className={cn(
            'flex items-center justify-between gap-2',
            layout === 'horizontal' && 'sm:pt-2'
          )}
        >
          {label && (
            <label
              htmlFor={htmlFor}
              className={cn(
                'inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none',
                LABEL_SIZE_CLASS[resolvedSize]
              )}
            >
              <span>{label}</span>
              {required && (
                <span aria-hidden="true" className="text-[var(--abc-danger)]">
                  *
                </span>
              )}
              {tooltip && (
                <Tooltip content={tooltip}>
                  <HelpCircle className="h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" />
                </Tooltip>
              )}
            </label>
          )}
          {extra && <div className="text-[11px] text-[var(--abc-fg-muted)]">{extra}</div>}
        </div>
      )}

      <div className="min-w-0 flex-1">
        {children}
        {error ? (
          <p role="alert" className="mt-1 text-[11px] font-medium text-[var(--abc-danger)]">
            {error}
          </p>
        ) : (
          helperText && (
            <p className="mt-1 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]">
              {helperText}
            </p>
          )
        )}
      </div>
    </div>
  )
}

export default FormField
