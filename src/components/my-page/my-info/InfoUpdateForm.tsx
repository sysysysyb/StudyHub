import {
  ModalMain,
  ModalFooter,
  ModalClose,
  useModalContext,
} from '@/components/common/Modal'
import { Avatar, Button } from '@/components'
import { Input, InputLabel, InputErrorMessage } from '@/components/common/input'
import { useUserInformation, useUpdateUserInfo } from '@/hooks/api'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formattedPhoneToE164KR } from '@/utils/formatted-phone'
import usePhoneSendCode from '@/hooks/api/auth/usePhoneSendCode'
import usePhoneVerify from '@/hooks/api/auth/usePhoneVerify'
import {
  InfoUpdateSchema,
  type InfoUpdateType,
} from '@/schemas/form-schema/info-update-schema'
import { useTimer } from '@/hooks'

export const InfoUpdateForm = () => {
  const { data: userInfo } = useUserInformation()
  const phoneSendCode = usePhoneSendCode()
  const phoneVerify = usePhoneVerify()
  const isVerified = phoneVerify.isSuccess
  const { close } = useModalContext()
  const { remainSecond, isCounting, startTimer, formatMMSS } = useTimer(
    180000,
    () => {}
  )

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
    },
  })

  const handleCodeSend = () => {
    const phoneNumber = getValues('phoneNumber')
    if (!phoneNumber) {
      setError('phoneNumber', { message: '휴대폰 번호를 입력해주세요' })
      return
    }

    phoneSendCode.mutate(
      {
        phoneNumber: formattedPhoneToE164KR(phoneNumber),
      },
      {
        onSuccess: () => {
          startTimer()
        },
      }
    )
  }

  // ✅ 인증코드 확인
  const handleCodeVerify = () => {
    const phoneNumber = getValues('phoneNumber')
    const infoUpdateVerificationCode = getValues('infoUpdateVerificationCode')
    if (!infoUpdateVerificationCode) {
      setError('infoUpdateVerificationCode', {
        message: '인증번호를 입력해주세요',
      })
      return
    }

    phoneVerify.mutate({
      phoneNumber: formattedPhoneToE164KR(phoneNumber),
      verificationCode: infoUpdateVerificationCode,
    })
  }

  const updateUserInfo = useUpdateUserInfo({
    onSuccess: () => {
      close()
    },
  })

  // ✅ 최종 제출
  const onSubmit = (values: InfoUpdateType) => {
    if (!isVerified) {
      return
    }

    updateUserInfo.mutate({
      nickname: values.nickname,
      phoneNumber: formattedPhoneToE164KR(values.phoneNumber),
    })
  }

  if (!userInfo) return null

  return (
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

        {/* 휴대폰 번호 입력 + 인증하기 버튼 클릭 */}
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>휴대폰 번호</InputLabel>
          <div className="flex gap-2">
            <Input
              id="phoneNumber"
              {...register('phoneNumber')}
              readOnly={isVerified}
            />
            <Button
              variant="secondary"
              type="button"
              onClick={handleCodeSend}
              disabled={phoneSendCode.isPending}
              className="min-w-[110px]"
            >
              {phoneSendCode.isSuccess
                ? isCounting && (
                    <span className="ml-2 text-sm whitespace-nowrap text-gray-900">
                      재전송 {formatMMSS(remainSecond)}
                    </span>
                  )
                : '인증하기'}
            </Button>
          </div>
          {errors.phoneNumber && (
            <InputErrorMessage>{errors.phoneNumber.message}</InputErrorMessage>
          )}
        </div>

        {/* 인증번호 입력 */}
        {phoneSendCode.isSuccess && (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Input
                id="infoUpdateVerificationCode"
                {...register('infoUpdateVerificationCode')}
                placeholder="인증코드 6자리 입력"
                readOnly={isVerified}
              />
              <Button
                variant={isVerified ? 'secondary' : 'primary'}
                type="button"
                onClick={handleCodeVerify}
                disabled={isVerified || phoneVerify.isPending}
                className="whitespace-nowrap"
              >
                {isVerified ? '인증완료' : '확인'}
              </Button>
            </div>
            {errors.infoUpdateVerificationCode && (
              <InputErrorMessage>
                {errors.infoUpdateVerificationCode.message}
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
  )
}
