import { MSW_BASE_URL } from '@/constants/url-constants'
import api from '@/utils/axios'
import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

export default function useToggleLectureBookmark(
  options?: UseMutationOptions<
    void,
    Error,
    { lectureId: string; newStatus: 'add' | 'delete' }
  >
) {
  return useMutation({
    mutationFn: async ({ lectureId, newStatus }) => {
      if (newStatus === 'add') {
        await api.post(`${MSW_BASE_URL}/lectures/${lectureId}/bookmark`)
      } else {
        await api.delete(`${MSW_BASE_URL}/lectures/${lectureId}/bookmark`)
      }
    },
    ...options,
  })
}
