import Button from '@/components/common/Button'
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalMain,
  type ModalContextValue,
} from '@/components/common/Modal'
import { useWithdrawalDateStore } from '@/store'
import { MehIcon } from 'lucide-react'

interface UserRecoverNoticeModalProps {
  userRecoverNoticeModalControl: ModalContextValue
  userRecoverFormOpen: () => void
}

export default function UserRecoverNoticeModal({
  userRecoverNoticeModalControl,
  userRecoverFormOpen,
}: UserRecoverNoticeModalProps) {
  const { withdrawalDate } = useWithdrawalDateStore()

  return (
    <Modal externalModalControl={userRecoverNoticeModalControl}>
      <ModalContent className="w-[90%] max-w-lg">
        <ModalHeader className="border-none" />
        <ModalMain className="flex flex-col items-center gap-5">
          <div className="bg-primary-100 text-primary-500 flex size-7 items-center justify-center rounded-full">
            <MehIcon className="h-5" />
          </div>
          <h1 className="text-center text-xl font-bold text-gray-900">
            해당 계정은 탈퇴된 상태예요
          </h1>
          <div>
            <p className="text-center text-gray-600">
              {withdrawalDate} 이후, 계정 정보는 완전히 삭제돼요.
            </p>
            <p className="text-center text-gray-600">
              계정을 다시 사용하려면 아래 버튼을 눌러 복구를 진행해주세요.
            </p>
          </div>
          <ModalFooter className="flex w-full justify-center border-none">
            <ModalClose className="flex w-full justify-center">
              <Button
                onClick={() => {
                  userRecoverFormOpen()
                }}
                className="w-[90%] max-w-sm"
              >
                계정 다시 사용하기
              </Button>
            </ModalClose>
          </ModalFooter>
        </ModalMain>
      </ModalContent>
    </Modal>
  )
}
