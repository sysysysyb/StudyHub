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

export const ApplicantDetail = () => {
  const titleDescription = '프론트엔드 DevOps 스터디'
  const appliedAtForTest = new Date('2025-09-30T23:59:59')
  return (
    <Modal>
      <ModalTrigger>
        <Button>모달 생성</Button>
        {/* 카드 클릭시 모달 생성 로직 필요 */}
      </ModalTrigger>
      {/* 모달 내용 */}
      <ModalContent className="max-w-md min-w-xs">
        <ModalHeader className="flex justify-between">
          <div className="flex flex-col gap-1">
            <ModalTitle>지원 상세 정보</ModalTitle>
            <ModalDescription>{titleDescription}</ModalDescription>
          </div>
        </ModalHeader>

        <ModalMain className="flex flex-col gap-6">
          <DescriptionComponent className="justify-between">
            <div className="flex flex-col items-start gap-1">
              <span>지원 상태</span>
              {AppliedStatusBadge('waiting')}
            </div>
            <div className="flex flex-col items-end gap-1">
              <span>지원 일시</span>
              {FormattedAppliedAt(appliedAtForTest)}
            </div>
          </DescriptionComponent>
          <DescriptionComponent label="자기소개">
            자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개
          </DescriptionComponent>
          <DescriptionComponent label="지원동기">
            지원동기지원동기지원동기지원동기지원동기지원동기지원동기지원동기
          </DescriptionComponent>
          <DescriptionComponent label="스터디 목표">
            스터디 목표스터디 목표스터디 목표스터디 목표스터디 목표스터디
            목표스터디 목표스터디 목표
          </DescriptionComponent>
          <DescriptionComponent label="가능한 시간대">
            가능한 시간대가능한 시간대가능한 시간대가능한 시간대가능한
            시간대가능한 시간대가능한 시간대가능한 시간대
          </DescriptionComponent>
          <DescriptionComponent
            label="스터디 경험"
            className="flex-col items-start"
          >
            {StudyExperienceBadge()}
            {StudyExperienceBadge(true)}
            스터디 경험스터디 경험스터디 경험스터디 경험스터디 경험스터디
            경험스터디 경험스터디 경험
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
