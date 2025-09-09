import { Input, InputLabel, InputErrorMessage } from '@/components/common/input'
import { Button } from '@/components'
import type { ComponentProps } from 'react'
import { ButtonVariants } from '@/constants/button-variants'

interface MyPageInputProps extends ComponentProps<'button'> {
  label: string
  isRequired?: boolean
  id: string
  errorMessage?: string
  buttonVariant?: keyof typeof ButtonVariants
  buttonLabel?: string
}

export const MypageInputField = ({
  label,
  isRequired,
  id,
  errorMessage,
  buttonVariant,
  buttonLabel,
  onClick,
}: MyPageInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <InputLabel htmlFor={id} isRequired={isRequired}>
        {label}
      </InputLabel>
      <div className="flex gap-2">
        <Input id={id} aria-describedby={id} />
        {buttonLabel && (
          <Button
            variant={buttonVariant}
            onClick={onClick}
            className="whitespace-nowrap"
          >
            {buttonLabel}
          </Button>
        )}
      </div>
      {errorMessage && (
        <InputErrorMessage id={id}>{errorMessage}</InputErrorMessage>
      )}
    </div>
  )
}
