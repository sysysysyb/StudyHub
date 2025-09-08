import type { Recruitment } from '@/types/api-response-types/recruitment-response-types'
import { BookmarkIcon, CalendarIcon, EyeIcon, UsersIcon } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components'

interface BookmarkedRecruitmentCardProps {
  recruitment: Recruitment
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
  const closeAt = new Date(closeAtString)

  const closeAtYear = closeAt.getFullYear()
  const closeAtMonth = closeAt.getMonth()
  const closeAtDate = closeAt.getDate()

  return (
    <div
      key={uuid}
      className="flex items-center justify-center gap-6 rounded-xl border border-gray-200 p-6"
    >
      <img src={thumbnailImageUrl} className="w-full max-w-40 rounded-lg" />
      <div className="flex h-full w-full flex-1 items-start">
        <div className="flex flex-1 flex-col">
          <span className="text-heading5 mb-2 text-gray-900 hover:underline">
            {title}
          </span>

          <div className="mb-3 flex flex-wrap items-center justify-start gap-2">
            <span className="flex flex-nowrap items-center text-sm text-gray-600">
              <UsersIcon className="h-3.5" />
              {`모집 인원: ${expectedHeadCount}명`}
            </span>
            <span className="flex flex-nowrap items-center text-sm text-gray-600">
              <CalendarIcon className="h-3.5" />
              {`마감일: ${closeAtYear}.${closeAtMonth}.${closeAtDate}.`}
            </span>
            <span className="flex flex-nowrap items-center text-sm text-gray-600">
              <EyeIcon className="h-3.5" />
              {`조회 ${viewsCount}`}
            </span>
            <span className="flex flex-nowrap items-center text-sm text-gray-600">
              <BookmarkIcon className="h-3.5" />
              {`북마크 ${bookmarkCount}`}
            </span>
          </div>

          {lectures.length > 0 ? (
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

          {tags.length > 0 ? (
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
        <div className="flex items-center justify-center gap-2">
          <BookmarkIcon className="text-primary-500 h-4" fill="#eab308" />
          <Link to={`/recruitment/${uuid}`}>
            <Button>공고 보기</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
