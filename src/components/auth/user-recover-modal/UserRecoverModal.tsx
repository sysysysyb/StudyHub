import {
  UserRecoverCompleteModal,
  UserRecoverFormModal,
  UserRecoverNoticeModal,
} from '@/components/auth/user-recover-modal'
import type { ModalContextValue } from '@/components/common/Modal'

import { useState } from 'react'

interface UserRecoverModalProps {
  userRecoverModalControl: ModalContextValue
}

/**
 * 회원 복구 모달
 * 사용하기 위해서는 ModalContextValue 값을 가지는 객체를 한 개 만든 후 prop으로 전달
 * UserRecoverModalTest 페이지 참고
 */
export default function UserRecoverModal({
  userRecoverModalControl,
}: UserRecoverModalProps) {
  const [isUserRecoverFormModalOpen, setIsUserRecoverFormModalOpen] =
    useState(false)

  const userRecoverFormModalControl: ModalContextValue = {
    isOpen: isUserRecoverFormModalOpen,
    open: () => {
      setIsUserRecoverFormModalOpen(true)
    },
    close: () => {
      setIsUserRecoverFormModalOpen(false)
    },
    toggle: () => {
      setIsUserRecoverFormModalOpen((prev) => !prev)
    },
  }

  const [isUserRecoverCompleteModalOpen, setIsUserRecoverCompleteModalOpen] =
    useState(false)

  const userRecoverCompleteModalControl: ModalContextValue = {
    isOpen: isUserRecoverCompleteModalOpen,
    open: () => {
      setIsUserRecoverCompleteModalOpen(true)
    },
    close: () => {
      setIsUserRecoverCompleteModalOpen(false)
    },
    toggle: () => {
      setIsUserRecoverCompleteModalOpen((prev) => !prev)
    },
  }

  return (
    <div className="flex flex-col gap-2">
      <UserRecoverNoticeModal
        userRecoverNoticeModalControl={userRecoverModalControl}
        userRecoverFormOpen={userRecoverFormModalControl.open}
      />

      <UserRecoverFormModal
        userRecoverFormModalControl={userRecoverFormModalControl}
        userRecoverCompleteModalOpen={userRecoverCompleteModalControl.open}
      />

      <UserRecoverCompleteModal
        userRecoverCompleteModalControl={userRecoverCompleteModalControl}
      />
    </div>
  )
}
