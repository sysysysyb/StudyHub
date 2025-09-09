import { API_BASE_URL } from '@/constants/api-constants'
import type { UserInformation } from '@/types/user-information'
import api from '@/utils/axios'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export default function useUserInformation(
  options?: UseQueryOptions<UserInformation>
) {
  return useQuery<UserInformation>({
    queryKey: ['userInformation', 'me'],
    queryFn: async () => {
      const response = await api.get(`${API_BASE_URL}/api/users/me`)
      const data = response.data

      return {
        ...data,
        phoneNumber: data.phone_number,
        profileImageUrl: data.profile_image_url,
      }
    },
    ...options,
  })
}
