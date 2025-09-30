import {
  BookmarkedContent,
  BookmarkedLecture,
  BookmarkedRecruitment,
} from '@/components/my-page/bookmarked-pages'
import { MD_WIDTH_PIXEL } from '@/constants/break-points'
import {
  useInfiniteBookmarkedLecture,
  useInfiniteBookmarkedRecruitment,
} from '@/hooks/api'
import { useDebounce } from '@/hooks/useDebounce'
import useWindowWidth from '@/hooks/useWindowWidth'
import { useState } from 'react'
import { useParams } from 'react-router'

const DEBOUNCE_TIME_MS = 250

export default function Bookmark() {
  const windowWidth = useWindowWidth()
  const { content } = useParams()

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, DEBOUNCE_TIME_MS)

  const bookmarkedLecturesInfinityQueryResult =
    useInfiniteBookmarkedLecture(debouncedSearch)

  const bookmarkedRecruitmentInfiniteQueryResult =
    useInfiniteBookmarkedRecruitment(debouncedSearch)

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
        bookmarkedRecruitmentInfinteQueryResult={
          bookmarkedRecruitmentInfiniteQueryResult
        }
        bookmarkedLecturesInfiniteQueryResult={
          bookmarkedLecturesInfinityQueryResult
        }
        searchState={search}
        setSearchState={setSearch}
      />
    )
  } else {
    if (content === 'recruitment') {
      return (
        <BookmarkedRecruitment
          bookmarkedRecruitmentInfinteQueryResult={
            bookmarkedRecruitmentInfiniteQueryResult
          }
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
