import TestRoutes from '@/routes/TestRoutes'
import useAxiosInterceptor from '@/hooks/api/useAxiosInterceptor'
import { useEffect } from 'react'
import { getAccessToken } from './utils'
import useTokenRefresh from './hooks/api/auth/useTokenRefresh'

function App() {
  const refreshToken = useTokenRefresh()

  useEffect(() => {
    const hasAccessToken = getAccessToken()
    if (!hasAccessToken) {
      refreshToken.mutate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useAxiosInterceptor()

  return <TestRoutes />
}

export default App
