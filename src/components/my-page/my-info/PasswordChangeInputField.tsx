import {
  PasswordInput,
  InputLabel,
  InputErrorMessage,
} from '@/components/common/input'
import { Button } from '@/components'
import type { ComponentProps } from 'react'
import { ButtonVariants } from '@/constants/button-variants'

interface PasswordChangeInputProps extends ComponentProps<'input'> {
  label: string
  isRequired?: boolean
  id: string
  errorMessage?: string
  buttonVariant?: keyof typeof ButtonVariants
  buttonLabel?: string
  onButtonClick?: () => void
}

export const PasswordChangeInputField = ({
  label,
  isRequired,
  id,
  errorMessage,
  buttonVariant = 'primary',
  buttonLabel,
  onButtonClick,
  ...props
}: PasswordChangeInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <InputLabel htmlFor={id} isRequired={isRequired}>
        {label}
      </InputLabel>
      <div className="flex gap-2">
        <PasswordInput id={id} aria-describedby={id} {...props} />
        {buttonLabel && (
          <Button
            variant={buttonVariant}
            onClick={onButtonClick}
            className="w-22 whitespace-nowrap"
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
