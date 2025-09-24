import { MSW_BASE_URL } from '@/constants/url-constants'
import api from '@/utils/axios'
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

export default function useToggleRecruitmentBookmark(
  options: UseMutationOptions<
    void,
    Error,
    { recruitmentId: string; newStatus: 'add' | 'delete' }
  >
) {
  return useMutation({
    mutationFn: async ({ recruitmentId, newStatus }) => {
      if (newStatus === 'add') {
        await api.post(
          `${MSW_BASE_URL}/recruitments/${recruitmentId}/bookmarks/add`
        )
      } else {
        await api.delete(
          `${MSW_BASE_URL}/recruitments/${recruitmentId}/bookmarks/remove`
        )
      }
    },
    ...options,
  })
}
