import { CardTitle, CardContent, ImageCard } from '@/components/common/card'
import { RatingStars } from '@/components/my-page'

export interface PopularLectureCardProps {
  imgUrl: string
  title: string
  provider: string
  rating: number
  originalPrice: number
  reviewers: number
  finalPrice: number
}

export const PopularLectureCard = ({
  imgUrl,
  title,
  provider,
  rating,
  originalPrice,
  reviewers,
  finalPrice,
}: PopularLectureCardProps) => {
  return (
    <ImageCard imageUrl={imgUrl} variant="elevate">
      <CardTitle className="pb-2 text-lg font-bold">{title}</CardTitle>
      <CardContent>
        <p className="text-secondary pb-3">{provider}</p>
        <div className="text-secondary flex pb-3">
          <span className="text-primary-500">
            <RatingStars rating={rating} />
          </span>
          <span className="pl-2">{reviewers}명</span>
        </div>
        <div>
          <span className="text-heading5">{finalPrice}</span>
          <s className="text-secondary pl-2">{originalPrice}</s>
        </div>
      </CardContent>
    </ImageCard>
  )
}
