import { Search } from 'lucide-react'
import BaseState from './BaseState'

function EmptyResultState({ onClick }: { onClick?: () => void }) {
  return (
    <BaseState
      icon={Search}
      iconColor="text-gray-400"
      iconBg="bg-gray-100"
      title="검색 결과가 없습니다"
      description="다른 키워드로 검색해보세요"
      buttonValue="새로운 검색"
      buttonType="outline"
      buttonClassName="bg-gray-50 text-gray-700 transition-colors duration-300 ease-out hover:bg-gray-200"
      onClick={onClick}
    />
  )
}

export default EmptyResultState
