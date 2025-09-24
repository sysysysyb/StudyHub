import { MSW_BASE_URL } from '@/constants/url-constants'
import type { NotificationList } from '@/types/api-response-types/notification-response-types'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export default function useNotification(
  options?: UseQueryOptions<NotificationList>
) {
  return useQuery<NotificationList>({
    queryKey: ['notifications'],
    queryFn: async () => {
      const res = await api.get(`${MSW_BASE_URL}/notifications`)

      return res.data
    },
    ...options,
  })
}
