import React, { useCallback, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Button } from '../components/button/Button'
import { Alert } from '../components/feedback/FeedbackExtras'
import { Steps, type StepItem } from '../components/navigation/Navigation'
import { useControllableState } from '../hooks/useControllableState'
import { cn } from '../utils/cn'

export interface ProWizardStepRenderContext<T = Record<string, any>> {
  values: T
  setValues: (patch: Partial<T>) => void
  setValue: <K extends keyof T>(key: K, val: T[K]) => void
  error?: string | null
}

export interface ProWizardStepConfig<T = Record<string, any>> {
  key: string
  title: React.ReactNode
  description?: React.ReactNode
  validate?: (values: T) => boolean | string | undefined | Promise<boolean | string | undefined>
  render: (ctx: ProWizardStepRenderContext<T>) => React.ReactNode
}

export interface ProStepsFormProps<T = Record<string, any>> {
  /** 分步向导步骤配置数组 */
  steps: ReadonlyArray<ProWizardStepConfig<T>>
  /** 初始表单草稿值 */
  initialValues: T
  /** 受控表单值 */
  values?: T
  /** 表单值变更回调 */
  onValuesChange?: (values: T) => void
  /** 受控当前步骤下标（从 0 开始） */
  current?: number
  /** 当前步骤变化回调 */
  onCurrentChange?: (step: number) => void
  /** 全部步骤校验通过并点击提交时触发 */
  onFinish: (values: T) => void | Promise<void>
  /** 上一步按钮文案（默认 "上一步"） */
  prevLabel?: React.ReactNode
  /** 下一步按钮文案（默认 "下一步"） */
  nextLabel?: React.ReactNode
  /** 末步提交按钮文案（默认 "提交"） */
  submitLabel?: React.ReactNode
  /** 步骤条排版方向（默认 horizontal） */
  stepsDirection?: 'horizontal' | 'vertical'
  /** 无障碍区域标签 */
  ariaLabel?: string
  className?: string
}

/**
 * 跨步向导表单容器 (ProStepsForm)
 * 集成 Steps 分步引导条、同步/异步分步校验阻断、Alert 危险提示、提交防连点及跨步草稿无损保留。
 */
export function ProStepsForm<T = Record<string, any>>({
  steps,
  initialValues,
  values,
  onValuesChange,
  current,
  onCurrentChange,
  onFinish,
  prevLabel = '上一步',
  nextLabel = '下一步',
  submitLabel = '提交',
  stepsDirection = 'horizontal',
  ariaLabel = '分步表单向导',
  className,
}: ProStepsFormProps<T>) {
  const [currentValues, setCurrentValues] = useControllableState<T>({
    value: values,
    defaultValue: initialValues,
    onChange: onValuesChange,
  })

  const [currentStep, setCurrentStep] = useControllableState<number>({
    value: current,
    defaultValue: 0,
    onChange: onCurrentChange,
  })

  const [stepError, setStepError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  // 同步引用保障同 Tick 内多次 setValue / setValues 连续调用不丢失补丁，同时防异步连点重入
  const latestValuesRef = useRef<T>(currentValues)
  latestValuesRef.current = currentValues
  const submittingRef = useRef(false)

  const commitValues = useCallback(
    (updater: (prev: T) => T) => {
      const next = updater(latestValuesRef.current)
      latestValuesRef.current = next
      setCurrentValues(next)
      setStepError((prevErr) => (prevErr ? null : prevErr))
    },
    [setCurrentValues]
  )

  const setValues = useCallback(
    (patch: Partial<T>) => {
      commitValues((prev) => ({ ...prev, ...patch }))
    },
    [commitValues]
  )

  const setValue = useCallback(
    <K extends keyof T>(key: K, val: T[K]) => {
      commitValues((prev) => ({ ...prev, [key]: val }))
    },
    [commitValues]
  )

  const safeCurrent = steps.length > 0 ? Math.max(0, Math.min(steps.length - 1, currentStep)) : 0
  const activeStep = steps[safeCurrent]
  const isFirstStep = safeCurrent === 0
  const isLastStep = safeCurrent === steps.length - 1

  const stepItems = useMemo<StepItem[]>(
    () =>
      steps.map((s, idx) => ({
        key: s.key,
        title: s.title,
        description: s.description,
        disabled: submitting || idx > safeCurrent,
      })),
    [steps, submitting, safeCurrent]
  )

  if (!activeStep) return null

  const handlePrev = () => {
    if (submitting || isFirstStep) return
    setStepError(null)
    setCurrentStep(safeCurrent - 1)
  }

  const handleStepHeaderClick = (nextIdx: number) => {
    if (submitting || nextIdx >= safeCurrent || nextIdx < 0) return
    setStepError(null)
    setCurrentStep(nextIdx)
  }

  const handleNextOrFinish = async () => {
    if (submittingRef.current) return
    submittingRef.current = true
    setSubmitting(true)
    setStepError(null)

    try {
      const snapshot = latestValuesRef.current
      if (activeStep.validate) {
        const validResult = await activeStep.validate(snapshot)
        if (validResult === false) {
          setStepError('请完善当前步骤的必填内容后再继续')
          return
        }
        if (typeof validResult === 'string' && validResult.trim().length > 0) {
          setStepError(validResult)
          return
        }
      }

      if (!isLastStep) {
        setCurrentStep(safeCurrent + 1)
      } else {
        await onFinish(snapshot)
      }
    } catch (err) {
      setStepError(err instanceof Error ? err.message : '校验或提交失败，请重试')
    } finally {
      submittingRef.current = false
      setSubmitting(false)
    }
  }

  const isVertical = stepsDirection === 'vertical'

  const formContent = (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        void handleNextOrFinish()
      }}
      className="min-w-0 flex-1 space-y-4"
    >
      {stepError && (
        <div data-slot="pro-steps-form-error">
          <Alert tone="danger" description={stepError} />
        </div>
      )}

      <div
        key={activeStep.key}
        data-slot="pro-steps-form-body"
        className="min-w-0"
      >
        {activeStep.render({
          values: currentValues,
          setValues,
          setValue,
          error: stepError,
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] pt-4">
        <span className="font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums">
          步骤 {safeCurrent + 1} / {steps.length}
        </span>

        <div className="flex items-center gap-2">
          {!isFirstStep && (
            <Button
              type="button"
              variant="secondary"
              size="sm"
              disabled={submitting}
              icon={<ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />}
              onClick={handlePrev}
            >
              {prevLabel}
            </Button>
          )}

          <Button
            type="submit"
            variant="primary"
            size="sm"
            loading={submitting}
            rightIcon={
              isLastStep ? (
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              )
            }
          >
            {isLastStep ? submitLabel : nextLabel}
          </Button>
        </div>
      </div>
    </form>
  )

  return (
    <section
      aria-label={ariaLabel}
      data-slot="pro-steps-form"
      className={cn(
        'rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]',
        className
      )}
    >
      {isVertical ? (
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="shrink-0 border-b border-[var(--abc-border)] pb-4 md:w-60 md:border-r md:border-b-0 md:pr-5 md:pb-0">
            <Steps
              items={stepItems}
              current={safeCurrent}
              status={stepError ? 'error' : 'process'}
              direction="vertical"
              onChange={handleStepHeaderClick}
            />
          </div>
          {formContent}
        </div>
      ) : (
        <div className="space-y-5">
          <div className="border-b border-[var(--abc-border)] pb-4">
            <Steps
              items={stepItems}
              current={safeCurrent}
              status={stepError ? 'error' : 'process'}
              direction="horizontal"
              onChange={handleStepHeaderClick}
            />
          </div>
          {formContent}
        </div>
      )}
    </section>
  )
}

ProStepsForm.displayName = 'ProStepsForm'
