import BaseState from './BaseState'

function LoadingState() {
  return (
    <BaseState
      title="데이터를 불러오고 있습니다"
      description="잠시만 기다려주세요..."
    />
  )
}

export default LoadingState
