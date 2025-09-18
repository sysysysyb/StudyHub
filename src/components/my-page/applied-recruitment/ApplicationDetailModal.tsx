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
import { useApplicationDetail } from '@/hooks/api'
import { ListItemSkeleton } from '@/components'

interface ApplicationDetailModalProps {
  uuid: string
  children: React.ReactNode
}

export const ApplicationDetailModal = ({
  uuid,
  children,
}: ApplicationDetailModalProps) => {
  const { data: application, isPending } = useApplicationDetail(uuid)
  return (
    <Modal>
      <ModalTrigger>{children}</ModalTrigger>
      {/* 모달 내용 */}
      <ModalContent className="max-w-md min-w-xs">
        {isPending
          ? [...Array(5)].map((_, i) => <ListItemSkeleton key={i} />)
          : application && (
              <>
                <ModalHeader className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <ModalTitle>지원 상세 정보</ModalTitle>
                    <ModalDescription>{application.title}</ModalDescription>
                  </div>
                </ModalHeader>

                <ModalMain className="flex flex-col gap-6">
                  <DescriptionComponent className="justify-between">
                    <div className="flex flex-col items-start gap-1">
                      <span>지원 상태</span>
                      {AppliedStatusBadge(application.status)}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span>지원 일시</span>
                      {FormattedAppliedAt(application.applied_at)}
                    </div>
                  </DescriptionComponent>
                  <DescriptionComponent label="자기소개">
                    {application.self_introduction}
                  </DescriptionComponent>
                  <DescriptionComponent label="지원동기">
                    {application.motivation}
                  </DescriptionComponent>
                  <DescriptionComponent label="스터디 목표">
                    {application.objective}
                  </DescriptionComponent>
                  <DescriptionComponent label="가능한 시간대">
                    {application.available_time}
                  </DescriptionComponent>
                  <DescriptionComponent
                    label="스터디 경험"
                    className="flex-col items-start"
                  >
                    {StudyExperienceBadge(application.has_study_experience)}
                    {application.study_experience}
                  </DescriptionComponent>
                </ModalMain>
              </>
            )}
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
