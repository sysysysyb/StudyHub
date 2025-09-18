import { cn } from '@/utils'
import { Fragment } from 'react/jsx-runtime'

const isStepReached = (stepIndex: number, currentStep: number) =>
  stepIndex <= currentStep

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
        'flex size-8 items-center justify-center rounded-full transition-colors duration-200 ease-out',
        isStepReached(stepIndex, currentStep)
          ? 'bg-primary-500 text-white'
          : 'bg-gray-200 text-gray-500'
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
        'h-1 flex-1 rounded-sm transition-colors duration-200 ease-out',
        isStepReached(stepIndex, currentStep) ? 'bg-primary-500' : 'bg-gray-200'
      )}
    />
  )
}

function AuthStep({
  totalStep,
  currentStep,
}: {
  totalStep: number
  currentStep: number
}) {
  const steps = Array.from({ length: totalStep }, (_, idx) => idx + 1)

  return (
    <div className="flex items-center gap-2">
      {steps.map((step) => (
        <Fragment key={step}>
          {step > 1 && (
            <AuthStepLine stepIndex={step} currentStep={currentStep} />
          )}
          <AuthStepDot stepIndex={step} currentStep={currentStep} />
        </Fragment>
      ))}
    </div>
  )
}

export default AuthStep
