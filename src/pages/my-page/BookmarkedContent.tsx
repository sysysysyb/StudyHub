import { Dropdown, ListItemSkeleton } from '@/components'
import { Input, InputIcon } from '@/components/common/input'
import EmptyDataState from '@/components/common/State/EmptyDataState'
import { BookmarkedRecruitmentCard } from '@/components/my-page'
import BookmarkedLectureCard from '@/components/my-page/bookmarked-lecture/BookmarkedLectureCard'
import { useBookmarkedLectures, useBookmarkedRecruitment } from '@/hooks/api'
import { useDebounce } from '@/hooks/useDebounce'
import { SearchIcon } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

const INITIAL_DROPDWON_OPTION = '전체'
const ENTIRE = '전체'
const RECRUITMENT = '공고'
const LECTURE = '강의'

export default function BookmarkedContent() {
  const bookmarkedDropdownOption: { label: string }[] = useMemo(
    () => [{ label: ENTIRE }, { label: RECRUITMENT }, { label: LECTURE }],
    []
  )

  const [search, setSearch] = useState('')
  const [selectedOption, setSelectedOption] = useState(INITIAL_DROPDWON_OPTION)

  const debouncedSearch = useDebounce(search, 250)

  const searchParams = useMemo(() => {
    const params = new URLSearchParams()
    if (debouncedSearch) {
      params.set('search', debouncedSearch)
    }

    return params
  }, [debouncedSearch])

  const { data: recruitments, isPending: isRecruitmentPending } =
    useBookmarkedRecruitment(searchParams)

  const { data: lectures, isPending: isLecturePending } =
    useBookmarkedLectures(searchParams)

  useEffect(() => {
    if (recruitments) {
      bookmarkedDropdownOption[1].label = `${RECRUITMENT} (${recruitments.results.length})`
    }

    if (lectures) {
      bookmarkedDropdownOption[2].label = `${LECTURE} (${lectures.results.length})`
    }

    if (recruitments && lectures) {
      const temp = `${ENTIRE} (${lectures.results.length + recruitments.results.length})`
      bookmarkedDropdownOption[0].label = temp
      if (selectedOption === INITIAL_DROPDWON_OPTION) {
        setSelectedOption(temp)
      }
    }
  }, [recruitments, lectures, bookmarkedDropdownOption, selectedOption])

  const hasRecruitment = recruitments && recruitments.results.length > 0

  const hasLecture = lectures && lectures.results.length > 0

  const isRecruitmentSelected =
    selectedOption.startsWith(ENTIRE) || selectedOption.startsWith(RECRUITMENT)

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
              onSelect={setSelectedOption}
              options={bookmarkedDropdownOption}
            />
          </div>

          <div className="relative w-full lg:max-w-80">
            <InputIcon icon={SearchIcon} className="absolute" />
            <Input
              hasIcon
              placeholder="공고 및 강의 검색..."
              className="w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-4">
        {isRecruitmentSelected ? (
          isRecruitmentPending ? (
            [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
          ) : hasRecruitment ? (
            recruitments.results.map((recruitment) => (
              <BookmarkedRecruitmentCard
                recruitment={recruitment}
                key={recruitment.uuid}
              />
            ))
          ) : (
            <EmptyDataState />
          )
        ) : null}

        {isLectureSelected ? (
          isLecturePending ? (
            [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
          ) : hasLecture ? (
            lectures.results.map((lecture, i) => (
              <BookmarkedLectureCard lecture={lecture} key={i} />
            ))
          ) : (
            <EmptyDataState />
          )
        ) : null}
        {}
      </main>
    </div>
  )
}
