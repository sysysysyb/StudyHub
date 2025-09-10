import { Input } from '@/components/common/input'

export default function BookmarkedLecture() {
  return (
    <div>
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-heading3 text-gray-900">북마크한 강의</h1>
          <span className="font-medium text-gray-600">
            나중에 수강할 강의들을 모아두었습니다
          </span>
        </div>
        <Input
          className="max-w-80 flex-1"
          placeholder="강의명이나 강사명으로 검색..."
        />
      </header>
    </div>
  )
}
