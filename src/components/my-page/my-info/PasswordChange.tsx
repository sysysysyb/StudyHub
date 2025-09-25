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
import { PasswordChangeInputField } from '@/components/my-page/my-info/PasswordChangeInputField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  type PasswordChangeFormType,
  passwordChangeSchema,
} from '@/schemas/form-schema/password-change-schema'
import useChangePassword from '@/hooks/api/auth/useChangePassword'

export const PasswordChange = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PasswordChangeFormType>({
    resolver: zodResolver(passwordChangeSchema),
  })

  // ✅ 비밀번호 변경 API 요청
  const mutation = useChangePassword({
    onSuccess: () => {
      reset()
    },
    onError: (error) => {
      console.error(error) // 필요 시 추가 로깅
    },
  })

  const onSubmit = (data: PasswordChangeFormType) => {
    mutation.mutate(data)
  }

  return (
    <Modal>
      {/* 모달 열기 버튼 */}
      <ModalTrigger>
        <Button
          size="lg"
          className="bg-gray-500 whitespace-nowrap hover:bg-gray-400 active:bg-gray-600"
        >
          비밀번호 변경
        </Button>
      </ModalTrigger>
      {/* 모달 내용 */}
      <ModalContent>
        <ModalHeader>
          <ModalTitle>비밀번호 변경</ModalTitle>
        </ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalMain className="flex flex-col gap-4">
            <PasswordChangeInputField
              label="현재 비밀번호"
              id="currentPassword"
              isRequired
              errorMessage={errors.currentPassword?.message}
              {...register('currentPassword')}
            />
            <PasswordChangeInputField
              label="새 비밀번호"
              id="newPassword"
              isRequired
              errorMessage={errors.newPassword?.message}
              {...register('newPassword')}
            />
            <PasswordChangeInputField
              label="새 비밀번호 확인"
              id="passwordConfirm"
              isRequired
              errorMessage={errors.newPasswordConfirm?.message}
              {...register('newPasswordConfirm')}
            />
          </ModalMain>

          <ModalFooter className="flex justify-end gap-1">
            <ModalClose>
              <Button variant="outline">취소</Button>
            </ModalClose>
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? '변경 중...' : '변경하기'}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
