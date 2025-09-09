import { Input, InputLabel, InputErrorMessage } from '@/components/common/input'
import { Button } from '@/components'
import type { ComponentProps } from 'react'
import { ButtonVariants } from '@/constants/button-variants'

interface MyPageInputProps extends ComponentProps<'button'> {
  label: string
  isRequired?: boolean
  id: string
  errormessage?: string
  buttonvariant?: keyof typeof ButtonVariants
  buttonlabel?: string
}

export const MypageInputField = ({
  label,
  isRequired,
  id,
  errormessage,
  buttonvariant,
  buttonlabel,
  onClick,
}: MyPageInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <InputLabel htmlFor={id} isRequired={isRequired}>
        {label}
      </InputLabel>
      <div className="flex gap-2">
        <Input id={id} aria-describedby={id} />
        {buttonlabel && (
          <Button
            variant={buttonvariant}
            onClick={onClick}
            className="whitespace-nowrap"
          >
            {buttonlabel}
          </Button>
        )}
      </div>
      {errormessage && (
        <InputErrorMessage id={id}>{errormessage}</InputErrorMessage>
      )}
    </div>
  )
}
