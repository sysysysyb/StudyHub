import TestRoutes from '@/routes/TestRoutes'
import useAxiosInterceptor from './hooks/api/useAxiosInterceptor'

function App() {
  useAxiosInterceptor()
  return <TestRoutes />
}

export default App
