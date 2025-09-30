import { cn } from '@/utils'
import { Fragment } from 'react/jsx-runtime'

const TOTAL_STEP = 3

const isStepReached = (stepIndex: number, currentStep: number) =>
  stepIndex <= currentStep

const isFinished = (currentStep: number) => currentStep === TOTAL_STEP

function AuthStepDot({
  stepIndex,
  currentStep,
}: {
  stepIndex: number
  currentStep: number
}) {
  return (
    <div
      className={cn(
        'flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors duration-300 ease-out',
        isStepReached(stepIndex, currentStep) && 'bg-primary-500 text-white',
        isFinished(currentStep) && 'bg-success-500 text-white'
      )}
    >
      {stepIndex}
    </div>
  )
}

function AuthStepLine({
  stepIndex,
  currentStep,
}: {
  stepIndex: number
  currentStep: number
}) {
  return (
    <div
      className={cn(
        'h-1 flex-1 rounded-sm bg-gray-200 transition-colors duration-300 ease-out',
        isStepReached(stepIndex, currentStep) && 'bg-primary-500',
        isFinished(currentStep) && 'bg-success-500'
      )}
    />
  )
}

function AuthStep({
  currentStep,
  stepLabelList,
}: {
  currentStep: number
  stepLabelList?: string[]
}) {
  const steps = Array.from({ length: TOTAL_STEP }, (_, idx) => idx + 1)

  return (
    <div className="flex items-center gap-2">
      {steps.map((step) => (
        <Fragment key={step}>
          {step > 1 && (
            <AuthStepLine stepIndex={step} currentStep={currentStep} />
          )}
          <div className="relative">
            <AuthStepDot stepIndex={step} currentStep={currentStep} />
            <span className="absolute top-9 left-1/2 -translate-x-1/2 text-xs font-normal whitespace-nowrap text-gray-500">
              {stepLabelList && stepLabelList[step - 1]}
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default AuthStep
