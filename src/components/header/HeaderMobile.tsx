import type { ReactNode } from 'react'
import { Symbol } from '../common/Symbol'
import { AlignJustify } from 'lucide-react'

export function MobileHeader(): ReactNode {
  return (
    <div className="flex items-center justify-start gap-4 px-6">
      <button className="cursor-pointer">
        <AlignJustify />
      </button>
      <Symbol />
    </div>
  )
}
