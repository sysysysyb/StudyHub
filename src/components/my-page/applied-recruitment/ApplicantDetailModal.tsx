import {
  Modal,
  ModalContent,
  ModalClose,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalMain,
  ModalDescription,
  ModalTrigger,
} from '@/components/common/Modal'
import Button from '@/components/common/Button'
import { DescriptionComponent } from './ApplicantDescription'
import { AppliedStatusBadge } from './AppliedStatusBadge'
import { FormattedAppliedAt } from '@/utils'
import { StudyExperienceBadge } from './StudyExperienceBadge'
import type { ApplicantDetail } from '@/types/api-response-types/recruitment-response-types'

interface ApplicantDetailModalProps {
  applicant: ApplicantDetail
  title: string
  trigger: React.ReactNode
}

export const ApplicantDetailModal = ({
  applicant,
  title,
  trigger,
}: ApplicantDetailModalProps) => {
  const {
    applied_at: appliedAtString,
    status: appliedStatus,
    introduction,
    motivation,
    goal,
    available_time,
    has_study_experience: StudyExperience,
    study_experience_description,
  } = applicant

  return (
    <Modal>
      <ModalTrigger>{trigger}</ModalTrigger>
      {/* 모달 내용 */}
      <ModalContent className="max-w-md min-w-xs">
        <ModalHeader className="flex justify-between">
          <div className="flex flex-col gap-1">
            <ModalTitle>지원 상세 정보</ModalTitle>
            <ModalDescription>{title}</ModalDescription>
          </div>
        </ModalHeader>

        <ModalMain className="flex flex-col gap-6">
          <DescriptionComponent className="justify-between">
            <div className="flex flex-col items-start gap-1">
              <span>지원 상태</span>
              {AppliedStatusBadge(appliedStatus)}
            </div>
            <div className="flex flex-col items-end gap-1">
              <span>지원 일시</span>
              {FormattedAppliedAt(appliedAtString)}
            </div>
          </DescriptionComponent>
          <DescriptionComponent label="자기소개">
            {introduction}
          </DescriptionComponent>
          <DescriptionComponent label="지원동기">
            {motivation}
          </DescriptionComponent>
          <DescriptionComponent label="스터디 목표">
            {goal}
          </DescriptionComponent>
          <DescriptionComponent label="가능한 시간대">
            {available_time}
          </DescriptionComponent>
          <DescriptionComponent
            label="스터디 경험"
            className="flex-col items-start"
          >
            {StudyExperienceBadge(StudyExperience)}
            {study_experience_description}
          </DescriptionComponent>
        </ModalMain>

        <ModalFooter className="flex justify-end gap-2">
          <ModalClose>
            <Button variant="outline">닫기</Button>
          </ModalClose>
          <Button variant="danger">지원 취소</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
