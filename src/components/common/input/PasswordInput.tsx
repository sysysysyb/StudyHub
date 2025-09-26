import type { InputProps } from '@/types'
import { cn } from '@/utils'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { iconVariants, inputVariants } from './input.styles'

function PasswordInput({ isError = false, className, ...props }: InputProps) {
  const [isExposed, setIsExposed] = useState(false)
  const inputType = isExposed ? 'text' : 'password'

  const handleIconClick = () => {
    setIsExposed((prev) => !prev)
  }

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className={cn(
          inputVariants({ isError, iconPosition: 'end' }),
          className
        )}
        {...props}
      />
      <button
        type="button"
        className="cursor-pointer"
        onClick={handleIconClick}
      >
        {/* 기본 타입인 password 타입일 때 눈에 빗금이 쳐져있는 아이콘이 되도록 수정 */}
        {isExposed ? (
          <Eye className={cn(iconVariants({ iconPosition: 'end' }), 'h-5')} />
        ) : (
          <EyeOff
            className={cn(iconVariants({ iconPosition: 'end' }), 'h-5')}
          />
        )}
      </button>
    </div>
  )
}

export default PasswordInput
