import type { BookmarkedRecruitment } from '@/types/api-response-types/recruitment-response-types'
import { BookmarkIcon, CalendarIcon, EyeIcon, UsersIcon } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components'
import { formattedCloseAt } from '@/utils'
import useWindowWidth from '@/hooks/useWindowWidth'
import { LG_WIDTH_PIXEL } from '@/constants/break-points'
import RecruitmentBookmarkIcon from '@/components/my-page/bookmarked-recruitment/RecruitmentBookmarkIcon'

interface BookmarkedRecruitmentCardProps {
  recruitment: BookmarkedRecruitment
}

export default function BookmarkedRecruitmentCard({
  recruitment,
}: BookmarkedRecruitmentCardProps) {
  const {
    uuid,
    thumbnail_image_url: thumbnailImageUrl,
    title,
    expected_headcount: expectedHeadCount,
    close_at: closeAtString,
    views_count: viewsCount,
    bookmark_count: bookmarkCount,
    lectures,
    tags,
  } = recruitment

  const width = useWindowWidth()

  return (
    <div
      key={uuid}
      className="flex items-center justify-center gap-6 rounded-xl border border-gray-200 p-6"
    >
      <img
        src={thumbnailImageUrl}
        className="max-w-16 rounded-lg sm:max-w-32 lg:max-w-40"
      />
      <div className="flex h-full w-full flex-1 flex-col lg:flex-row lg:items-start">
        <div className="flex flex-1 flex-col">
          <span className="lg:text-heading5 mb-2 text-sm font-bold text-gray-900">
            {title}
          </span>

          <div className="mb-3 flex flex-wrap items-center justify-start gap-2">
            <span className="flex flex-nowrap items-center text-xs text-gray-600 lg:text-sm">
              <UsersIcon className="h-3 lg:h-3.5" />
              {`모집 인원: ${expectedHeadCount}명`}
            </span>
            {width > LG_WIDTH_PIXEL && (
              <span className="flex flex-nowrap items-center text-sm text-gray-600">
                <CalendarIcon className="h-3.5" />
                {formattedCloseAt(closeAtString)}
              </span>
            )}
            <span className="flex flex-nowrap items-center text-xs text-gray-600 lg:text-sm">
              <EyeIcon className="h-3 lg:h-3.5" />
              {`조회 ${viewsCount}`}
            </span>
            {width > LG_WIDTH_PIXEL && (
              <span className="flex flex-nowrap items-center text-sm text-gray-600">
                <BookmarkIcon className="h-3.5" />
                {`북마크 ${bookmarkCount}`}
              </span>
            )}
          </div>

          {lectures.length > 0 && width > LG_WIDTH_PIXEL ? (
            <div className="mb-3">
              <span className="text-sm font-medium text-gray-700">
                강의 목록:
              </span>
              <ul className="list-inside list-disc">
                {lectures.map(({ name, instructor }, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600"
                  >{`${name} - ${instructor}`}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {tags.length > 0 && width > LG_WIDTH_PIXEL ? (
            <div className="flex items-center gap-2">
              {tags.map(({ name }, i) => (
                <span
                  key={i}
                  className="bg-primary-100 text-primary-800 rounded-sm px-2 py-1 text-xs"
                >
                  {name}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex items-center justify-end gap-2">
          <RecruitmentBookmarkIcon recruitmentId={uuid} />
          <Link to={`/recruitment/${uuid}`}>
            <Button
              size={width > LG_WIDTH_PIXEL ? 'md' : 'sm'}
              className="text-xs text-nowrap lg:text-sm"
            >
              {width > LG_WIDTH_PIXEL ? '공고 보기' : '보기'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
