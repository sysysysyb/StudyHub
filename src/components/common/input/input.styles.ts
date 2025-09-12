import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  'w-full focus:ring-primary-500 rounded-lg py-[13px] text-sm ring ring-gray-300 outline-none placeholder:text-gray-400 focus:border-none focus:ring-2',
  {
    variants: {
      isError: {
        true: 'ring-danger-100',
        false:
          'ring-gray-300 focus:ring-primary-500 focus:border-none focus:ring-2',
      },
      iconPosition: {
        none: 'px-[17px]',
        start: 'pl-10 pr-[17px]',
        end: 'pl-[17px] pr-10',
      },
    },
    defaultVariants: {
      isError: false,
      iconPosition: 'none',
    },
  }
)

export const iconVariants = cva(
  'absolute inset-y-0 my-auto h-4 text-gray-400',
  {
    variants: {
      iconPosition: {
        none: '',
        start: 'left-2',
        end: 'right-2',
      },
    },
    defaultVariants: {
      iconPosition: 'none',
    },
  }
)
