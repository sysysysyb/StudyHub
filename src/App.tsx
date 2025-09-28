import useAxiosInterceptor from '@/hooks/api/useAxiosInterceptor'
import { useEffect } from 'react'
import { getAccessToken } from './utils'
import useTokenRefresh from './hooks/api/auth/useTokenRefresh'
import MainRoutes from './routes/MainRoutes'

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

  return <MainRoutes />
}

export default App
