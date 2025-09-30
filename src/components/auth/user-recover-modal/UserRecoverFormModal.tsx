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
import { useVerificationCode } from '@/hooks'
import useUserRecover from '@/hooks/api/auth/useUserRecover'
import {
  UserRecoverSchema,
  type UserRecover,
} from '@/schemas/form-schema/user-recover-schema'
import { cn } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { RotateCwIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface UserRecoverFormModalProps {
  userRecoverFormModalControl: ModalContextValue
  userRecoverCompleteModalOpen: () => void
}

export default function UserRecoverFormModal({
  userRecoverFormModalControl,
  userRecoverCompleteModalOpen,
}: UserRecoverFormModalProps) {
  const {
    isCodeSent,
    isCodeVerified,
    timer,
    handleCodeSend,
    handleCodeVerify,
  } = useVerificationCode()

  const { register, watch, getFieldState, getValues } = useForm<UserRecover>({
    resolver: zodResolver(UserRecoverSchema),
  })

  const isEmailNotValid = getFieldState('email').invalid || !watch('email')

  const handleCodeSendClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault()
    handleCodeSend('userRecover', getValues('email'))
  }

  const handleCodeVerifyClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault()
    handleCodeVerify('userRecover', {
      email: getValues('email'),
      verificationCode: getValues('verificationCode'),
    })
  }

  const { mutate } = useUserRecover()

  const handleRecoverClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault()
    mutate({
      email: getValues('email'),
      verificationCode: getValues('verificationCode'),
    })

    userRecoverCompleteModalOpen()
  }

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
            <InputLabel isRequired>이메일</InputLabel>
            <div className="flex w-full gap-2">
              <Input
                placeholder="가입한 이메일을 입력해주세요."
                className="flex-1"
                {...register('email')}
              />
              <AuthVerifyButton
                type="button"
                disabled={isEmailNotValid || timer.userRecover.isCounting}
                onClick={handleCodeSendClick}
              >
                {timer.userRecover.isCounting
                  ? `재전송 (${timer.userRecover.formatMMSS(timer.userRecover.remainSecond)})`
                  : '인증코드전송'}
              </AuthVerifyButton>
            </div>
            <div className="flex w-full gap-2">
              <Input
                disabled={!isCodeSent.userRecover}
                placeholder="인증번호를 입력해주세요."
                className={cn(
                  isCodeVerified.userRecover &&
                    'flex-1 disabled:bg-white disabled:text-black'
                )}
                {...register('verificationCode')}
              />
              <AuthVerifyButton
                type="button"
                disabled={!isCodeSent.userRecover}
                onClick={handleCodeVerifyClick}
              >
                인증코드확인
              </AuthVerifyButton>
            </div>
          </form>
        </ModalMain>
        <ModalFooter className="flex w-full justify-center border-none">
          <Button
            className="w-[90%] max-w-sm"
            onClick={handleRecoverClick}
            disabled={!isCodeVerified.userRecover}
          >
            <ModalClose className="flex w-full justify-center">확인</ModalClose>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
