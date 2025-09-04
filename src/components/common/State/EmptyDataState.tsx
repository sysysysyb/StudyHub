import { Inbox, Plus } from 'lucide-react'
import BaseState from './BaseState'

function EmptyDataState({ onClick }: { onClick?: () => void }) {
  return (
    <BaseState
      icon={Inbox}
      iconColor="text-primary-500"
      iconBg="bg-primary-50"
      title="아직 데이터가 없습니다"
      description="첫 번째 항목을 추가해보세요"
      buttonValue={
        <span className="flex items-center gap-2">
          <Plus className="size-4" />
          새로 만들기
        </span>
      }
      buttonType="primary"
      buttonClassName="px-6 py-3"
      onClick={onClick}
    />
  )
}

export default EmptyDataState
