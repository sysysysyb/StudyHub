import { Dropdown, ListItemSkeleton } from '@/components'
import { Input } from '@/components/common/input'
import EmptyDataState from '@/components/common/stateTemp/EmptyDataState'
import { BookmarkedRecruitmentCard } from '@/components/my-page'
import BookmarkedLectureCard from '@/components/my-page/bookmarked-lecture/BookmarkedLectureCard'
import type { BookmarkedLectures } from '@/types/api-response-types/lecture-response-type'
import type { BookmarkedRecruitments } from '@/types/api-response-types/recruitment-response-types'
import type { UseQueryResult } from '@tanstack/react-query'
import { SearchIcon } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'

const ENTIRE = '전체'
const RECRUITMENT = '공고'
const LECTURE = '강의'

type optionKey = 'entire' | 'lecture' | 'recruitment'
type optionValue = typeof ENTIRE | typeof RECRUITMENT | typeof LECTURE

const OPTION_MAP: Record<optionKey, optionValue> = {
  entire: ENTIRE,
  lecture: LECTURE,
  recruitment: RECRUITMENT,
}

interface BookmarkedContentProps {
  initialOption?: optionKey

  bookmarkedRecruitmentQueryResult: UseQueryResult<
    BookmarkedRecruitments,
    Error
  >
  bookmarkedLecturesQueryResult: UseQueryResult<BookmarkedLectures, Error>

  searchState: string
  setSearchState: React.Dispatch<React.SetStateAction<string>>
}

export default function BookmarkedContent({
  initialOption = 'entire',
  bookmarkedLecturesQueryResult,
  bookmarkedRecruitmentQueryResult,
  searchState,
  setSearchState,
}: BookmarkedContentProps) {
  const bookmarkedDropdownOption: { label: string }[] = useMemo(
    () => [{ label: ENTIRE }, { label: RECRUITMENT }, { label: LECTURE }],
    []
  )

  const [selectedOption, setSelectedOption] = useState<string>(
    OPTION_MAP[initialOption]
  )

  const { data: recruitments, isPending: isRecruitmentPending } =
    bookmarkedRecruitmentQueryResult

  const { data: lectures, isPending: isLecturePending } =
    bookmarkedLecturesQueryResult

  //북마크한 공고와 강의 개수를 메뉴에 표시
  useEffect(() => {
    if (recruitments) {
      const temp = `${RECRUITMENT} (${recruitments.results.length})`
      bookmarkedDropdownOption[1].label = temp

      if (selectedOption === RECRUITMENT) {
        setSelectedOption(temp)
      }
    }

    if (lectures) {
      const temp = `${LECTURE} (${lectures.results.length})`
      bookmarkedDropdownOption[2].label = temp
    }

    if (recruitments && lectures) {
      const temp = `${ENTIRE} (${lectures.results.length + recruitments.results.length})`
      bookmarkedDropdownOption[0].label = temp

      if (selectedOption === ENTIRE) {
        setSelectedOption(temp)
      }
    }
  }, [recruitments, lectures, bookmarkedDropdownOption, selectedOption])

  const navigate = useNavigate()

  const handleDropdownSelect = (label: string) => {
    setSelectedOption(label)

    if (label.startsWith(RECRUITMENT)) {
      navigate('/my-page/bookmarked/recruitment')
    } else if (label.startsWith(LECTURE)) {
      navigate('/my-page/bookmarked/lecture')
    } else {
      navigate('/my-page/bookmarked')
    }
  }

  //공고 데이터 여부
  const hasRecruitment = recruitments && recruitments.results.length > 0
  //강의 데이터 여부
  const hasLecture = lectures && lectures.results.length > 0
  //공고를 선택했는지 여부
  const isRecruitmentSelected =
    selectedOption.startsWith(ENTIRE) || selectedOption.startsWith(RECRUITMENT)
  //강의를 선택했는지 여부
  const isLectureSelected =
    selectedOption.startsWith(ENTIRE) || selectedOption.startsWith(LECTURE)

  return (
    <div>
      <header className="mb-6 flex w-full flex-col items-center justify-between gap-2 lg:flex-row">
        <div className="w-full flex-col items-start justify-center gap-2">
          <h1 className="text-heading5 text-gray-900">북마크한 공고</h1>
          <span className="text-sm text-gray-600">
            저장한 스터디 공고 및 강의
          </span>
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="w-full lg:max-w-80">
            <Dropdown
              value={selectedOption}
              onSelect={handleDropdownSelect}
              options={bookmarkedDropdownOption}
            />
          </div>

          <div className="w-full lg:max-w-80">
            <Input
              icon={SearchIcon}
              iconPosition="start"
              placeholder="공고 및 강의 검색..."
              className="w-full"
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
            />
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-4">
        {/* 공고 렌더링 */}
        {(() => {
          if (!isRecruitmentSelected) return null

          if (isRecruitmentPending) {
            return [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
          }

          if (hasRecruitment) {
            return recruitments.results.map((recruitment) => (
              <BookmarkedRecruitmentCard
                recruitment={recruitment}
                key={recruitment.uuid}
              />
            ))
          } else {
            return <EmptyDataState />
          }
        })()}
        {/* 강의 렌더링 */}
        {(() => {
          if (!isLectureSelected) return null

          if (isLecturePending) {
            return [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
          }

          if (hasLecture) {
            return lectures.results.map((lecture, i) => (
              <BookmarkedLectureCard lecture={lecture} key={i} />
            ))
          } else {
            return <EmptyDataState />
          }
        })()}
      </main>
    </div>
  )
}
