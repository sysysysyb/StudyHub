import type { AppliedRecruitment } from '@/types/api-response-types/recruitment-response-types'
import { CloseAt, AppliedAt } from '@/constants/formatted-dates'

interface AppliedRecruitmentCardProps {
  recruitment: AppliedRecruitment
}

export default function AppliedRecruitmentCard({
  recruitment,
}: AppliedRecruitmentCardProps) {
  const {
    uuid,
    thumbnail_image_url: thumbnailImageUrl,
    title,
    applied_at: appliedAtString,
    expected_headcount: expectedHeadCount,
    close_at: closeAtString,
    lectures,
    tags,
  } = recruitment

  return (
    <div
      key={uuid}
      className="flex items-center justify-center gap-6 rounded-xl border border-gray-200 p-6"
    >
      <img src={thumbnailImageUrl} className="w-full max-w-40 rounded-lg" />
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex justify-between pb-2">
          <span className="text-heading5 text-gray-900 hover:underline">
            {title}
          </span>
          <div className="flex gap-3 pl-4">
            {AppliedAt(appliedAtString)}
            {/* 뱃지 컴포넌트 추가필요 */}
          </div>
        </div>
        <div className="text-secondary flex justify-between text-sm">
          <span>{`모집 인원: ${expectedHeadCount}명`}</span>
          {CloseAt(closeAtString)}
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
                  className="text-secondary text-sm"
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
    </div>
  )
}
