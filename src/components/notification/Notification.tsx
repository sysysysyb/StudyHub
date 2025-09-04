import { Bell as BellIcon } from 'lucide-react'
import { useState } from 'react'
import { Card } from '@/components/common/Card/Card'

export default function Notification() {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        <BellIcon />
      </button>
      {isShow ? <Card>알림</Card> : null}
    </div>
  )
}
