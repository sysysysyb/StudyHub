import {
  BookmarkedContent,
  BookmarkedLecture,
  BookmarkedRecruitment,
} from '@/components/my-page/bookmarked-pages'
import { MD_WIDTH_PIXEL } from '@/constants/break-points'
import {
  useBookmarkedLectures,
  useBookmarkedRecruitment,
  useInfiniteBookmarkedLecture,
} from '@/hooks/api'
import { useDebounce } from '@/hooks/useDebounce'
import useWindowWidth from '@/hooks/useWindowWidth'
import type { lectureSearchParams, recruitmentSearchParams } from '@/types'
import { useState } from 'react'
import { useParams } from 'react-router'

const DEBOUNCE_TIME_MS = 250

export default function Bookmark() {
  const windowWidth = useWindowWidth()
  const { content } = useParams()

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, DEBOUNCE_TIME_MS)

  const recruitmentSearchParams: recruitmentSearchParams = {
    title: debouncedSearch,
  }

  const lectureSearchParams: lectureSearchParams = {
    search: debouncedSearch,
  }

  const bookmarkedRecruitmentQueryResult = useBookmarkedRecruitment(
    recruitmentSearchParams
  )

  const bookmarkedLecturesQueryResult =
    useBookmarkedLectures(lectureSearchParams)

  const bookmarkedLecturesInfinityQueryResult =
    useInfiniteBookmarkedLecture(lectureSearchParams)

  if (windowWidth < MD_WIDTH_PIXEL) {
    const option =
      content === 'recruitment'
        ? 'recruitment'
        : content === 'lecture'
          ? 'lecture'
          : 'entire'

    return (
      <BookmarkedContent
        initialOption={option}
        bookmarkedLecturesQueryResult={bookmarkedLecturesQueryResult}
        bookmarkedRecruitmentQueryResult={bookmarkedRecruitmentQueryResult}
        searchState={search}
        setSearchState={setSearch}
      />
    )
  } else {
    if (content === 'recruitment') {
      return (
        <BookmarkedRecruitment
          bookmarkedRecruitmentQueryResult={bookmarkedRecruitmentQueryResult}
          searchState={search}
          setSearchState={setSearch}
        />
      )
    } else {
      return (
        <BookmarkedLecture
          bookmarkedLecturesInfiniteQueryResult={
            bookmarkedLecturesInfinityQueryResult
          }
          searchState={search}
          setSearchState={setSearch}
        />
      )
    }
  }
}
