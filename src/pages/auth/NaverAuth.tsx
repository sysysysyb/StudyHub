import useNaverCallback from '@/hooks/api/auth/useNaverCallback'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router'

function NaverAuth() {
  const naverCallback = useNaverCallback()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if (!code) return

    naverCallback.mutate({ code })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])

  return <div>네이버 로그인 중...</div>
}

export default NaverAuth
