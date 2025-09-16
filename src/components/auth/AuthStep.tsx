import { cn } from '@/utils'
import { Fragment } from 'react/jsx-runtime'

const isStepReached = (stepIndex: number, currentIndex: number) =>
  stepIndex <= currentIndex

function AuthStepDot({
  stepIndex,
  currentIndex,
}: {
  stepIndex: number
  currentIndex: number
}) {
  return (
    <div
      className={cn(
        'flex size-8 items-center justify-center rounded-full transition-colors duration-200 ease-out',
        isStepReached(stepIndex, currentIndex)
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
  currentIndex,
}: {
  stepIndex: number
  currentIndex: number
}) {
  return (
    <div
      className={cn(
        'h-1 flex-1 rounded-sm transition-colors duration-200 ease-out',
        isStepReached(stepIndex, currentIndex)
          ? 'bg-primary-500'
          : 'bg-gray-200'
      )}
    />
  )
}

function AuthStep({
  totalIndex,
  currentIndex,
}: {
  totalIndex: number
  currentIndex: number
}) {
  const steps = Array.from({ length: totalIndex }, (_, idx) => idx + 1)

  return (
    <div className="flex items-center gap-2">
      {steps.map((step) => (
        <Fragment key={step}>
          {step > 1 && (
            <AuthStepLine stepIndex={step} currentIndex={currentIndex} />
          )}
          <AuthStepDot stepIndex={step} currentIndex={currentIndex} />
        </Fragment>
      ))}
    </div>
  )
}

export default AuthStep
