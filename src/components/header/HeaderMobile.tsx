import type { ReactNode } from 'react'
import { Symbol } from '../common/Symbol'

export function MobileHeader(): ReactNode {
  return (
    <div className="flex justify-start px-4">
      <div>
        <button></button>
        <Symbol />
      </div>
    </div>
  )
}
