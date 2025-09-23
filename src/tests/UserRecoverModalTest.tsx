import { Button } from '@/components'
import { UserRecoverModal } from '@/components/auth/user-recover-modal/'
import type { ModalContextValue } from '@/components/common/Modal'
import { useState } from 'react'
export default function UserRecoverModalTest() {
  const [isUserRecoverModalOpen, setIsUserRecoverModalOpen] = useState(false)

  const userRecoverFormModalControl: ModalContextValue = {
    isOpen: isUserRecoverModalOpen,
    open: () => {
      setIsUserRecoverModalOpen(true)
    },
    close: () => {
      setIsUserRecoverModalOpen(false)
    },
    toggle: () => {
      setIsUserRecoverModalOpen((prev) => !prev)
    },
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => {
          userRecoverFormModalControl.open()
        }}
      >
        유저 복구 모달
      </Button>
      <UserRecoverModal userRecoverModalControl={userRecoverFormModalControl} />
    </div>
  )
}
