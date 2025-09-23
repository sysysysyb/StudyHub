import { Button } from '@/components'
import { ImageCard } from '@/components/common/card'
import {
  Clock,
  Calendar,
  SquarePen as EditButton,
  UsersRound,
} from 'lucide-react'
import { formattedEndDate } from '@/utils'
import { RatingStars } from './RatingStars'
import type { CompletedStudy } from '@/types/api-response-types/completed-study-type'
import { ReviewInputModal } from '@/components/my-page'

interface CompletedStudyImageCardProps {
  completedStudy: CompletedStudy
}

export const CompletedStudyImageCard = ({
  completedStudy,
}: CompletedStudyImageCardProps) => {
  const {
    imageUrl,
    title,
    period,
    endDate,
    participants,
    isReviewed = false,
    rating,
    comment,
  } = completedStudy
  const paragraphCn = 'flex items-center gap-2'
  const iconSize = 14
  return (
    <ImageCard imageUrl={imageUrl}>
      <h3 className="text-heading5 mb-3 text-gray-900">{title}</h3>
      <div className="mb-4 flex flex-col gap-2 text-sm text-gray-600">
        <p className={paragraphCn}>
          <Clock size={iconSize} /> 기간: {period}
        </p>
        <p className={paragraphCn}>
          <Calendar size={iconSize} /> 종료: {formattedEndDate(endDate)}
        </p>
        <p className={paragraphCn}>
          <UsersRound size={iconSize} />
          참여자: {participants}명
        </p>
      </div>

      {isReviewed ? (
        <div className="flex flex-col gap-2 bg-gray-50 p-4 text-gray-600">
          <div className="flex items-center justify-between">
            <RatingStars rating={rating} size={iconSize} includeMax />
            <ReviewInputModal completedStudy={completedStudy}>
              <EditButton size={iconSize} className="cursor-pointer" />
            </ReviewInputModal>
            {/* 리뷰작성 모달에 기존 데이터가 이미 존재하는 수정버전으로 로직 구현 후 onClick으로 연동 필요 */}
          </div>
          <p className="text-sm">{comment}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="bg-primary-50 text-primary-800 flex w-full justify-center rounded-md p-4">
            아직 리뷰를 작성하지 않았습니다.
          </div>
          <ReviewInputModal completedStudy={completedStudy}>
            <Button className="w-full">리뷰 작성</Button>
          </ReviewInputModal>
        </div>
      )}
    </ImageCard>
  )
}
