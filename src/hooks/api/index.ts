import useUserInformation from '@/hooks/api/auth/useUserInformation'
import useChatMessages from '@/hooks/api/chat/useChatMessages'
import useAppliedRecruitment from '@/hooks/api/useAppliedRecruitment'
import useCompletedStudy from '@/hooks/api/useCompletedStudy'
import useApplicationDetail from '@/hooks/api/useApplicationDetail'
import useBookmarkedLectures from '@/hooks/api/bookmarked/useBookmarkedLecture'
import useInfiniteBookmarkedRecruitment from '@/hooks/api/bookmarked/useInfiniteBookmarkedRecruitment'
import useInfiniteBookmarkedLecture from '@/hooks/api/bookmarked/useInfiniteBookmarkedLecture'
import useLogin from '@/hooks/api/auth/useLogin'

export {
  useUserInformation,
  useChatMessages,
  useAppliedRecruitment,
  useBookmarkedLectures,
  useCompletedStudy,
  useApplicationDetail,
  useInfiniteBookmarkedRecruitment,
  useInfiniteBookmarkedLecture,
  useLogin,
}
