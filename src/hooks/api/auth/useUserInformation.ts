import { API_BASE_URL } from '@/constants/url-constants'
import { useLoginStore } from '@/store/useLoginStore'
import type { UserInformation } from '@/types/api-response-types/auth-response-types'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export default function useUserInformation(
  options?: UseQueryOptions<UserInformation>
) {
  const { isLoggedIn } = useLoginStore()

  return useQuery<UserInformation>({
    ...options,
    queryKey: ['users', 'me'],
    queryFn: async () => {
      const response = await api.get(`${API_BASE_URL}/users/me`)
      const data = response.data

      return {
        ...data,
        phoneNumber: data.phone_number,
        profileImageUrl: data.profile_image_url,
      }
    },
    enabled: isLoggedIn,
  })
}
