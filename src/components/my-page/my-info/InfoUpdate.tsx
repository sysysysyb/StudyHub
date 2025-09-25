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
import { Avatar, Button } from '@/components'
import { Input, InputLabel, InputErrorMessage } from '@/components/common/input'
import { useUserInformation } from '@/hooks/api'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { formattedPhoneToE164KR } from '@/utils/formatted-phone'
import usePhoneSendCode from '@/hooks/api/auth/usePhoneSendCode'
import usePhoneVerify from '@/hooks/api/auth/usePhoneVerify'

// ✅ form schema
const InfoUpdateSchema = z.object({
  nickname: z.string().min(1, '닉네임을 입력해주세요'),
  phoneNumber: z.string().min(10, '휴대폰 번호를 입력해주세요'),
  authCode: z.string().min(6, '인증번호 6자리를 입력해주세요'),
})

type InfoUpdateType = z.infer<typeof InfoUpdateSchema>

export const InfoUpdate = () => {
  const { data: userInfo } = useUserInformation()
  const phoneSendCode = usePhoneSendCode()
  const phoneVerify = usePhoneVerify()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm<InfoUpdateType>({
    mode: 'onChange',
    resolver: zodResolver(InfoUpdateSchema),
    defaultValues: {
      nickname: userInfo?.nickname ?? '',
      phoneNumber: userInfo?.phoneNumber ?? '',
      authCode: '',
    },
  })

  // 인증 완료 여부
  const isVerified = phoneVerify.isSuccess

  // ✅ 인증코드 전송
  const handleCodeSend = () => {
    const phoneNumber = getValues('phoneNumber')
    if (!phoneNumber) {
      setError('phoneNumber', { message: '휴대폰 번호를 입력해주세요' })
      return
    }

    phoneSendCode.mutate({
      phoneNumber: formattedPhoneToE164KR(phoneNumber),
    })
  }

  // ✅ 인증코드 확인
  const handleCodeVerify = () => {
    const phoneNumber = getValues('phoneNumber')
    const authCode = getValues('authCode')
    if (!authCode) {
      setError('authCode', { message: '인증번호를 입력해주세요' })
      return
    }

    phoneVerify.mutate({
      phoneNumber: formattedPhoneToE164KR(phoneNumber),
      verificationCode: authCode,
    })
  }

  // ✅ 최종 제출
  const onSubmit = (values: InfoUpdateType) => {
    if (!isVerified) {
      alert('휴대폰 인증을 완료해주세요.')
      return
    }

    const payload = {
      nickname: values.nickname,
      phoneNumber: formattedPhoneToE164KR(values.phoneNumber),
    }
  }

  if (!userInfo) return null

  return (
    <Modal>
      <ModalTrigger>
        <Button size="lg">수정하기</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>프로필 수정</ModalTitle>
        </ModalHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalMain className="flex flex-col gap-6">
            {/* 프로필 이미지 */}
            <label className="flex cursor-pointer flex-col items-center gap-4">
              <Avatar
                size="3xl"
                state="none"
                src={userInfo.profileImageUrl ?? undefined}
              />
              <span className="text-primary-600 text-sm">프로필 사진 변경</span>
            </label>

            {/* 닉네임 */}
            <div className="flex flex-col gap-2">
              <InputLabel isRequired>닉네임</InputLabel>
              <Input id="nickname" {...register('nickname')} />
              {errors.nickname && (
                <InputErrorMessage>{errors.nickname.message}</InputErrorMessage>
              )}
            </div>

            {/* 휴대폰 번호 + 인증하기 */}
            <div className="flex flex-col gap-2">
              <InputLabel isRequired>휴대폰 번호</InputLabel>
              <div className="flex gap-2">
                <Input id="phoneNumber" {...register('phoneNumber')} />
                <Button
                  variant="secondary"
                  type="button"
                  onClick={handleCodeSend}
                  disabled={phoneSendCode.isPending}
                >
                  {phoneSendCode.isSuccess ? '재전송' : '인증하기'}
                </Button>
              </div>
              {errors.phoneNumber && (
                <InputErrorMessage>
                  {errors.phoneNumber.message}
                </InputErrorMessage>
              )}
            </div>

            {/* 인증번호 입력 */}
            {phoneSendCode.isSuccess && (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Input
                    id="authCode"
                    {...register('authCode')}
                    placeholder="인증코드 6자리 입력"
                  />
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={handleCodeVerify}
                    disabled={isVerified || phoneVerify.isPending}
                  >
                    {isVerified ? '인증완료' : '확인'}
                  </Button>
                </div>
                {errors.authCode && (
                  <InputErrorMessage>
                    {errors.authCode.message}
                  </InputErrorMessage>
                )}
              </div>
            )}
          </ModalMain>

          <ModalFooter className="flex justify-end gap-1">
            <ModalClose>
              <Button variant="outline">취소</Button>
            </ModalClose>
            <Button
              variant="primary"
              type="submit"
              disabled={!isValid || !isVerified}
            >
              변경하기
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
