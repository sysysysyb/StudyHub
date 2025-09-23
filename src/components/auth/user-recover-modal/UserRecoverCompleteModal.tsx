import {
  Modal,
  ModalContent,
  ModalMain,
  type ModalContextValue,
} from '@/components/common/Modal'
import { RotateCwIcon } from 'lucide-react'

interface UserRecoverCompleteModalProps {
  userRecoverCompleteModalControl: ModalContextValue
}

export default function UserRecoverCompleteModal({
  userRecoverCompleteModalControl,
}: UserRecoverCompleteModalProps) {
  return (
    <Modal externalModalControl={userRecoverCompleteModalControl}>
      <ModalContent className="flex w-[90%] max-w-sm flex-col items-center">
        <ModalMain className="flex flex-col items-center gap-2">
          <div className="bg-success-500 flex size-7 items-center justify-center rounded-full text-gray-100">
            <RotateCwIcon className="h-5" />
          </div>
          <h1 className="text-center text-xl font-bold text-gray-900">
            계정 복구 완료!
          </h1>
          <p className="text-center text-gray-600">지금 바로 로그인해 보세요</p>
        </ModalMain>
      </ModalContent>
    </Modal>
  )
}
