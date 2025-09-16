import { ImageCard, Button } from '@/components'
import { Clock, Calendar, Star, SquarePen as EditButton } from 'lucide-react'
import { FormattedEndDate } from '@/utils'

interface CompletedStudyImageCardProps {
  imageUrl: string
  title: string
  peroid: string
  endDate: Date
  participants: number
  isReviewed: boolean
  Rating: number
  Comment: string
}

export const CompletedStudyImageCard = ({
  imageUrl,
  title,
  peroid,
  endDate,
  participants,
  isReviewed,
  Rating,
  Comment,
}: CompletedStudyImageCardProps) => {
  return (
    <ImageCard imageUrl={imageUrl}>
      <h3>{title}</h3>
      <p>
        <Clock /> 기간: {peroid}
      </p>
      <p>
        <Calendar /> 종료: {FormattedEndDate(endDate)}
      </p>
      <p>{participants}</p>

      {isReviewed ? (
        <>
          <div className="flex justify-between">
            <div className="flex">
              <Star />
              {Rating}
            </div>
            <EditButton />
          </div>
          <p>{Comment}</p>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="bg-primary-50 text-primary-800 rounded-md p-4">
            아직 리뷰를 작성하지 않았습니다.
          </div>
          <Button className="w-full">리뷰 작성</Button>
        </div>
      )}
    </ImageCard>
  )
}
