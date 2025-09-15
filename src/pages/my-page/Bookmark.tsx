import {
  BookmarkedContent,
  BookmarkedLecture,
  BookmarkedRecruitment,
} from '@/components/my-page/bookmarked-pages'
import { MD_WIDTH_PIXEL } from '@/constants/break-points'
import { useBookmarkedLectures, useBookmarkedRecruitment } from '@/hooks/api'
import { useDebounce } from '@/hooks/useDebounce'
import useWindowWidth from '@/hooks/useWindowWidth'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router'

export default function Bookmark() {
  const windowWidth = useWindowWidth()
  const { content } = useParams()

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 250)

  const searchParams = useMemo(() => {
    const params = new URLSearchParams()
    if (debouncedSearch) {
      params.set('search', debouncedSearch)
    }

    return params
  }, [debouncedSearch])

  const bookmarkedRecruitmentQueryResult =
    useBookmarkedRecruitment(searchParams)

  const bookmarkedLecturesQueryResult = useBookmarkedLectures(searchParams)

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
