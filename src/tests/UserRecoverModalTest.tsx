import { Button } from '@/components'
import { AuthVerifyButton } from '@/components/auth/common'
import { Input, InputLabel } from '@/components/common/input'
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalMain,
  ModalTrigger,
} from '@/components/common/Modal'
import { MehIcon, RotateCwIcon } from 'lucide-react'
export default function UserRecoverModalTest() {
  return (
    <div className="flex flex-col gap-2">
      <Modal>
        <ModalTrigger>
          <Button>탈퇴 안내 모달</Button>
        </ModalTrigger>
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
                2025년 9월 20일 이후, 계정 정보는 완전히 삭제돼요.
              </p>
              <p className="text-center text-gray-600">
                계정을 다시 사용하려면 아래 버튼을 눌러 복구를 진행해주세요.
              </p>
            </div>
            <ModalFooter className="flex w-full justify-center border-none">
              <Button className="w-[90%] max-w-sm">계정 다시 사용하기</Button>
            </ModalFooter>
          </ModalMain>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger>
          <Button>탈퇴 폼 모달</Button>
        </ModalTrigger>
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
                <AuthVerifyButton>인증코드전송</AuthVerifyButton>
              </div>
            </form>
          </ModalMain>
          <ModalFooter className="flex w-full justify-center border-none">
            <Button className="w-[90%] max-w-sm">확인</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger>
          <Button>계정 복구 완료 모달</Button>
        </ModalTrigger>
        <ModalContent className="flex w-[90%] max-w-sm flex-col items-center">
          <ModalMain className="flex flex-col items-center gap-2">
            <div className="bg-success-500 flex size-7 items-center justify-center rounded-full text-gray-100">
              <RotateCwIcon className="h-5" />
            </div>
            <h1 className="text-center text-xl font-bold text-gray-900">
              계정 복구 완료!
            </h1>
            <p className="text-center text-gray-600">
              지금 바로 로그인해 보세요
            </p>
          </ModalMain>
        </ModalContent>
      </Modal>
    </div>
  )
}
