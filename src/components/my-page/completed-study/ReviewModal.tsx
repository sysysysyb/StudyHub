import {
  Modal,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalMain,
  ModalTrigger,
  ModalContent,
  ModalClose,
} from '@/components/common/Modal'
import { Button } from '@/components'
import type { CompletedStudy } from '@/types/api-response-types/completed-study-type'
import { formattedEndDate } from '@/utils'
import { useState } from 'react'
interface ReviewModalProps {
  children: React.ReactNode
  completedStudy: CompletedStudy
}

export const ReviewModal = ({ children, completedStudy }: ReviewModalProps) => {
  const { title, period, endDate } = completedStudy
  const [isRated, setIsRated] = useState(false)
  const [isCommented, setIsCommented] = useState(false)
  const [comment, setComment] = useState('')

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setComment(value)
    setIsCommented(value.trim().length >= 5) // 5자 이상이면 true
  }

  const resetForm = () => {
    setComment('')
    setIsRated(false)
    setIsCommented(false)
  }

  return (
    <Modal>
      <ModalTrigger>{children}</ModalTrigger>
      <ModalContent className="w-90">
        <ModalHeader className="border-none pb-0">
          <ModalTitle>스터디 리뷰</ModalTitle>
        </ModalHeader>
        <ModalMain className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3>{title}</h3>
            <p className="text-sm text-gray-600">
              {period} · {formattedEndDate(endDate)} 종료
            </p>
          </div>
          <div className="flex flex-col gap-3">
            평점
            <button
              onClick={() => {
                setIsRated(true)
              }}
              className="flex cursor-pointer justify-start"
            >
              별 별 별 별 별{/* RatingStarsInput 컴포넌트 새로 제작 후 추가 */}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            리뷰 내용
            <textarea
              className="overflow-y: auto h-40 resize-none rounded-md border border-gray-600 px-3 py-2"
              value={comment}
              placeholder="스터디에 대한 솔직한 후기를 남겨주세요...... (5글자 이상)"
              onChange={handleCommentChange}
              maxLength={500}
            />
          </div>
          <p className="text-sm text-gray-600">{comment.length}/500자</p>
        </ModalMain>
        <ModalFooter className="gap-2 border-none">
          <ModalClose className="w-full">
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={resetForm}
            >
              취소
            </Button>
          </ModalClose>

          <Button
            variant={isRated && isCommented ? 'primary' : 'secondary'}
            disabled={!isRated || !isCommented}
            size="lg"
            className="w-full"
          >
            리뷰 등록
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
