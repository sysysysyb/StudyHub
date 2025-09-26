import useKakaoCallback from '@/hooks/api/auth/useKakaoCallback'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router'

function KakaoAuth() {
  const kakaoCallback = useKakaoCallback()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if (!code) return

    kakaoCallback.mutate({ code })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])

  return <div>카카오 로그인 중...</div>
}

export default KakaoAuth
