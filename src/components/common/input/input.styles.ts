import {
  IconBase,
  IconPosition,
  InputBase,
  InputError,
  InputIconPosition,
} from '@/constants/input-variants'
import { cva } from 'class-variance-authority'

export const inputVariants = cva(InputBase, {
  variants: {
    isError: InputError,
    iconPosition: InputIconPosition,
  },
  defaultVariants: {
    isError: false,
    iconPosition: 'none',
  },
})

export const iconVariants = cva(IconBase, {
  variants: {
    iconPosition: IconPosition,
  },
  defaultVariants: {
    iconPosition: 'none',
  },
})
