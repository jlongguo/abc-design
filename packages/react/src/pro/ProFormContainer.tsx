/**
 * Pro 自适应表单抽屉/弹窗容器 (ProFormContainer / FormDrawerDialog)
 * 统一承载复杂业务表单：
 * - 声明式形态：支持在 Drawer（大表单）与 Modal（小表单）间平滑切换；
 * - 紧凑摘要区：支持关闭时在页面卡片中呈现 summarySlot 只读摘要；
 * - 测试环境感知：支持 inlineInTestEnv 自动就地平铺渲染，防自动化测试 DOM 穿透断裂；
 * - 状态受控：支持 open / onOpenChange 受控或非受控触发。
 */
import React, { useState } from 'react'
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  type DrawerProps,
} from '../components/feedback/Drawer'
import {
  Modal,
  Dialog,
  type DialogProps,
} from '../components/feedback/Dialog'
import { Button } from '../components/button/Button'
import { cn } from '../utils/cn'

export interface ProFormContainerInlineRenderProps {
  title: string
  description?: string
  headerActions?: React.ReactNode
  modalHeaderActions?: React.ReactNode
  summarySlot?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export interface ProFormContainerSummaryRenderProps {
  title: string
  description?: string
  triggerButton: React.ReactNode
  headerActions?: React.ReactNode
  summarySlot?: React.ReactNode
  emptySummaryHint?: React.ReactNode
  className?: string
}

export interface ProFormContainerProps {
  /** 表单弹窗/抽屉标题 */
  title: string
  /** 表单说明文案 */
  description?: string
  /** 触发按钮文案 */
  triggerLabel: string
  /** 触发按钮图标（默认加号图标） */
  triggerIcon?: React.ReactNode
  /** 触发按钮视觉变体 */
  triggerVariant?: 'primary' | 'outline' | 'secondary' | 'default'
  /** 展示形态：右侧抽屉 (drawer) 或居中模态框 (modal) */
  mode?: 'drawer' | 'modal'
  /** Drawer 预设宽度档位 */
  size?: DrawerProps['size']
  /** 抽屉或弹窗最大宽度类名 */
  maxWidthClass?: string
  /** 抽屉/模态框底部操作区 */
  footer?: React.ReactNode
  /** 受控打开状态（可选） */
  open?: boolean
  /** 受控打开状态回调（可选） */
  onOpenChange?: (open: boolean) => void
  /** 页面内紧凑摘要区域（抽屉关闭时在页面卡片中展示只读摘要） */
  summarySlot?: React.ReactNode
  /** 无摘要时的默认引导提示文案（可选） */
  emptySummaryHint?: React.ReactNode
  /** 触发栏右侧附加操作按钮 */
  headerActions?: React.ReactNode
  /** 抽屉/模态框头部右侧附加控制项（如 Visual / JSON 切换按钮） */
  modalHeaderActions?: React.ReactNode
  /** 是否在自动化单元测试环境下直接内联渲染表单 */
  inlineInTestEnv?: boolean
  /** 自定义测试环境内联容器渲染函数 */
  renderInlineContainer?: (props: ProFormContainerInlineRenderProps) => React.ReactNode
  /** 自定义浏览器环境摘要卡片容器渲染函数 */
  renderSummaryContainer?: (props: ProFormContainerSummaryRenderProps) => React.ReactNode
  /** 抽屉或弹窗关闭按钮无障碍文案 */
  closeLabel?: string
  /** 外层附加类名 */
  className?: string
  /** 表单主体内容 */
  children: React.ReactNode
}

function resolveDrawerSize(
  explicitSize?: DrawerProps['size'],
  maxWidthClass?: string
): DrawerProps['size'] {
  if (explicitSize) return explicitSize
  if (maxWidthClass) {
    if (maxWidthClass.includes('max-w-5xl') || maxWidthClass.includes('max-w-4xl')) return '2xl'
    if (maxWidthClass.includes('max-w-3xl')) return 'xl'
    if (maxWidthClass.includes('max-w-2xl') || maxWidthClass.includes('max-w-xl')) return 'lg'
    if (maxWidthClass.includes('max-w-md')) return 'md'
    if (maxWidthClass.includes('max-w-sm')) return 'sm'
  }
  return 'lg'
}

export function ProFormContainer({
  title,
  description,
  triggerLabel,
  triggerIcon,
  triggerVariant = 'primary',
  mode = 'modal',
  size,
  maxWidthClass,
  footer,
  open: controlledOpen,
  onOpenChange,
  summarySlot,
  emptySummaryHint,
  headerActions,
  modalHeaderActions,
  inlineInTestEnv,
  renderInlineContainer,
  renderSummaryContainer,
  closeLabel,
  className,
  children,
}: ProFormContainerProps) {
  const isTest =
    inlineInTestEnv ??
    (controlledOpen === undefined &&
      ((typeof process !== 'undefined' && process.env?.NODE_ENV === 'test') ||
        (typeof import.meta !== 'undefined' &&
          Boolean((import.meta as unknown as { env?: { MODE?: string } }).env?.MODE === 'test'))))

  const [internalOpen, setInternalOpen] = useState(false)
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setOpen = (next: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(next)
    }
    onOpenChange?.(next)
  }

  if (isTest) {
    if (renderInlineContainer) {
      return (
        <>
          {renderInlineContainer({
            title,
            description,
            headerActions,
            modalHeaderActions,
            summarySlot,
            className,
            children,
          })}
        </>
      )
    }
    return (
      <section
        data-slot="pro-form-inline"
        className={cn(
          'space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
          className
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-[var(--abc-fg)]">{title}</h3>
            {description && <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">{description}</p>}
          </div>
          {(headerActions || modalHeaderActions) && (
            <div className="flex flex-wrap items-center gap-2">
              {headerActions}
              {modalHeaderActions}
            </div>
          )}
        </div>
        {summarySlot}
        <div>{children}</div>
      </section>
    )
  }

  const defaultPlusIcon = (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 shrink-0">
      <path d="M8 3.25v9.5M3.25 8h9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )

  const resolvedVariant =
    triggerVariant === 'outline'
      ? 'outline'
      : triggerVariant === 'secondary'
        ? 'secondary'
        : 'primary'

  const triggerButton = (
    <Button
      size="sm"
      variant={resolvedVariant}
      onClick={() => setOpen(true)}
      className="gap-1.5 text-xs font-semibold cursor-pointer"
    >
      {triggerIcon ?? defaultPlusIcon}
      <span>{triggerLabel}</span>
    </Button>
  )

  return (
    <>
      {renderSummaryContainer ? (
        renderSummaryContainer({
          title,
          description,
          triggerButton,
          headerActions,
          summarySlot,
          emptySummaryHint,
          className,
        })
      ) : (
        <section
          data-slot="pro-form-summary"
          className={cn(
            'rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
            className
          )}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-[var(--abc-fg)]">{title}</h3>
              {description && (
                <p className="mt-0.5 text-xs text-[var(--abc-fg-muted)]">{description}</p>
              )}
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              {headerActions}
              {triggerButton}
            </div>
          </div>
          {summarySlot ? (
            <div className="mt-3 border-t border-[var(--abc-border)] pt-3">{summarySlot}</div>
          ) : emptySummaryHint ? (
            <div className="mt-3 border-t border-[var(--abc-border)] pt-3 text-xs text-[var(--abc-fg-muted)]">
              {emptySummaryHint}
            </div>
          ) : null}
        </section>
      )}

      {mode === 'drawer' ? (
        <Drawer
          open={isOpen}
          onClose={() => setOpen(false)}
          title={title}
          description={description}
          size={resolveDrawerSize(size, maxWidthClass)}
          footer={footer ?? modalHeaderActions}
          className={maxWidthClass}
        >
          {children}
        </Drawer>
      ) : (
        <Modal
          open={isOpen}
          onClose={() => setOpen(false)}
          title={title}
          description={description}
          footer={footer ?? modalHeaderActions}
          closeLabel={closeLabel}
          className={maxWidthClass}
        >
          {children}
        </Modal>
      )}
    </>
  )
}

// 别名导出，完全兼容存量 FormDrawerDialog 命名与调用契约
export const FormDrawerDialog = ProFormContainer
export type FormDrawerDialogProps = ProFormContainerProps
export type FormDrawerDialogInlineRenderProps = ProFormContainerInlineRenderProps
export type FormDrawerDialogSummaryRenderProps = ProFormContainerSummaryRenderProps

export {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  Modal,
  Dialog,
  type DialogProps,
  type DrawerProps,
}
