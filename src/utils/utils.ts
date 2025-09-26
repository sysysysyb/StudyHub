import { WS_API_BASE_URL, WS_MSW_BASE_URL } from '@/constants/url-constants'
import { getAccessToken } from '@/utils/manage-token'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getChatRoomWebSocketUrl = (
  studyGroupId: string,
  isMsw = false
) => {
  const token = getAccessToken()

  if (!token) {
    return undefined
  }

  if (isMsw) {
    return `${WS_MSW_BASE_URL}/${studyGroupId}/?token=${token}`
  } else {
    return `${WS_API_BASE_URL}/${studyGroupId}/?token=${token}`
  }
}
