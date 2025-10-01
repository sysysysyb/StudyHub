import useNaverCallback from '@/hooks/api/auth/useNaverCallback'
import { getNaverState } from '@/utils/manage-naver-state'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router'

function NaverAuth() {
  const naverCallback = useNaverCallback()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const state = getNaverState()

  useEffect(() => {
    if (!code || !state) return

    naverCallback.mutate({ code, state })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, state])

  return <div>네이버 로그인 중...</div>
}

export default NaverAuth
