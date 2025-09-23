import { AuthVerifyButton } from '@/components/auth/common'
import Button from '@/components/common/Button'
import { InputLabel, Input } from '@/components/common/input'
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalMain,
  type ModalContextValue,
} from '@/components/common/Modal'
import { RotateCwIcon } from 'lucide-react'

interface UserRecoverFormModalProps {
  userRecoverFormModalControl: ModalContextValue
  userRecoverCompleteModalOpen: () => void
}

export default function UserRecoverFormModal({
  userRecoverFormModalControl,
  userRecoverCompleteModalOpen,
}: UserRecoverFormModalProps) {
  return (
    <Modal externalModalControl={userRecoverFormModalControl}>
      <ModalContent className="flex w-[90%] max-w-lg flex-col items-center">
        <ModalHeader className="w-full border-none" />
        <ModalMain className="flex w-full flex-col gap-5">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-primary-100 text-primary-500 flex size-7 items-center justify-center rounded-full">
              <RotateCwIcon className="h-5" />
            </div>
            <h1 className="text-center text-xl font-bold text-gray-900">
              계정 다시 사용하기
            </h1>
            <p className="text-center text-gray-600">
              입력하신 이메일로 인증번호를 보내드릴게요.
            </p>
          </div>
          <form className="flex w-full flex-col items-start gap-5">
            <InputLabel>
              이메일 <span className="text-danger-500">*</span>
            </InputLabel>
            <div className="flex w-full gap-2">
              <Input
                placeholder="가입한 이메일을 입력해주세요."
                className="flex-1"
              />
              <AuthVerifyButton>인증코드전송</AuthVerifyButton>
            </div>
            <div className="flex w-full gap-2">
              <Input
                placeholder="인증번호를 입력해주세요."
                className="flex-1"
              />
              <AuthVerifyButton>인증코드확인</AuthVerifyButton>
            </div>
          </form>
        </ModalMain>
        <ModalFooter className="flex w-full justify-center border-none">
          <ModalClose className="flex w-full justify-center">
            <Button
              className="w-[90%] max-w-sm"
              onClick={() => {
                userRecoverCompleteModalOpen()
              }}
            >
              확인
            </Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
