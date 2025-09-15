import type { InputProps } from '@/types'
import { cn } from '@/utils'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import {
  IconBase,
  IconPosition,
  InputBase,
  InputError,
  InputIconPosition,
} from './input.styles'
import { cva } from 'class-variance-authority'

const inputVariants = cva(InputBase, {
  variants: {
    isError: InputError,
    iconPosition: InputIconPosition,
  },
  defaultVariants: {
    isError: false,
    iconPosition: 'none',
  },
})

const iconVariants = cva(IconBase, {
  variants: {
    iconPosition: IconPosition,
  },
  defaultVariants: {
    iconPosition: 'none',
  },
})

function PasswordInput({ isError = false, className, ...props }: InputProps) {
  const [isClicked, setIsClicked] = useState(false)
  const inputType = isClicked ? 'text' : 'password'

  const handleIconClick = () => {
    setIsClicked((prev) => !prev)
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
        {isClicked && (
          <EyeOff
            className={cn(iconVariants({ iconPosition: 'end' }), 'h-5')}
          />
        )}
        {!isClicked && (
          <Eye className={cn(iconVariants({ iconPosition: 'end' }), 'h-5')} />
        )}
      </button>
    </div>
  )
}

export default PasswordInput
