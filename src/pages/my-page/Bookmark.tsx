import {
  BookmarkedContent,
  BookmarkedLecture,
  BookmarkedRecruitment,
} from '@/components/my-page/bookmarked-pages'
import { MD_WIDTH_PIXEL } from '@/constants/break-points'
import { useBookmarkedLectures, useBookmarkedRecruitment } from '@/hooks/api'
import { useDebounce } from '@/hooks/useDebounce'
import useWindowWidth from '@/hooks/useWindowWidth'
import type { lectureSearchParams, recruitmentSearchParams } from '@/types'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router'

const DEBOUNCE_TIME_MS = 250

export default function Bookmark() {
  const windowWidth = useWindowWidth()
  const { content } = useParams()

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, DEBOUNCE_TIME_MS)

  const recruitmentSearchParams = useMemo(() => {
    const params: recruitmentSearchParams = {}

    if (debouncedSearch) {
      params.title = debouncedSearch
    }

    return params
  }, [debouncedSearch])

  const lectureSearchParams = useMemo(() => {
    const params: lectureSearchParams = {}

    if (debouncedSearch) {
      params.search = debouncedSearch
    }

    return params
  }, [debouncedSearch])

  const bookmarkedRecruitmentQueryResult = useBookmarkedRecruitment(
    recruitmentSearchParams
  )

  const bookmarkedLecturesQueryResult =
    useBookmarkedLectures(lectureSearchParams)

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
          bookmarkedLecturesQueryResult={bookmarkedLecturesQueryResult}
          searchState={search}
          setSearchState={setSearch}
        />
      )
    }
  }
}
