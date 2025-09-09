import {
  Modal,
  ModalContent,
  ModalTrigger,
  ModalClose,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalMain,
} from '@/components/common/Modal'
import { Button } from '@/components'
import { CircleAlert } from 'lucide-react'

export const Withdrawal = () => {
  return (
    <Modal>
      {/* 모달 열기 버튼 */}
      <ModalTrigger>
        <Button variant="danger" size="lg">
          회원 탈퇴
        </Button>
      </ModalTrigger>
      {/* 모달 내용 */}
      <ModalContent>
        <ModalHeader>
          <ModalTitle className="flex items-center gap-3">
            <div className="flex justify-center rounded-full bg-[#FEE2E2] px-3 py-3">
              <CircleAlert className="text-danger-600" size="16" />
            </div>
            <span>회원 탈퇴</span>
          </ModalTitle>
        </ModalHeader>

        <ModalMain className="p-6">
          <div className="border border-[#FECACA] bg-[#FEF2F2] px-8 py-4">
            <p className="flex items-center gap-2 pb-2">
              <CircleAlert className="text-danger-600" size="14" />
              <span className="text-danger-800 text-sm">회원 탈퇴 안내</span>
            </p>
            <ul className="flex list-disc flex-col gap-1 pb-4 text-xs text-[#B91C1C]">
              <li>탈퇴 즉시 서비스 이용이 중단됩니다</li>
              <li>
                <strong>2주간 계정 복구가 가능</strong>합니다
              </li>
              <li>2주 후 모든 개인정보가 완전히 삭제됩니다</li>
            </ul>
          </div>
        </ModalMain>

        <ModalFooter className="flex justify-end gap-1">
          <ModalClose>
            <Button variant="outline">취소</Button>
          </ModalClose>
          <Button variant="danger">회원 탈퇴</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
