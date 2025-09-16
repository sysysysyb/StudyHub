import { cn } from '@/utils'

const isStepReached = (stepIndex, currentIndex) => stepIndex <= currentIndex

function AuthStepDot({ stepIndex, currentIndex }) {
  return (
    <div
      className={cn(
        'flex size-8 items-center justify-center rounded-full transition-colors duration-200 ease-out',
        isStepReached(stepIndex, currentIndex)
          ? 'bg-primary-500'
          : 'bg-gray-200'
      )}
    >
      {stepIndex}
    </div>
  )
}

function AuthStepLine({ stepIndex, currentIndex }) {
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

function AuthStep({ currentIndex }) {
  return (
    <div className="flex items-center gap-2">
      <AuthStepDot stepIndex="1" currentIndex={currentIndex} />
      <AuthStepLine stepIndex="2" currentIndex={currentIndex} />
      <AuthStepDot stepIndex="2" currentIndex={currentIndex} />
      <AuthStepLine stepIndex="3" currentIndex={currentIndex} />
      <AuthStepDot stepIndex="3" currentIndex={currentIndex} />
    </div>
  )
}

export default AuthStep
