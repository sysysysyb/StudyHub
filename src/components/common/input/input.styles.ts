export const InputBase =
  'w-full focus:ring-primary-500 rounded-lg py-[13px] text-sm ring ring-gray-300 outline-none placeholder:text-gray-400 focus:border-none focus:ring-2' as const

export const InputError = {
  true: 'ring-danger-100',
  false: 'ring-gray-300 focus:ring-primary-500 focus:border-none focus:ring-2',
} as const

export const InputIconPosition = {
  none: 'px-4',
  start: 'pl-10 pr-4',
  end: 'pl-4 pr-10',
} as const

export const IconBase = 'absolute inset-y-0 my-auto h-4 text-gray-400' as const

export const IconPosition = {
  none: '',
  start: 'left-2',
  end: 'right-2',
} as const
