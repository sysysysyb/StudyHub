import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'

import '@/index.css'
import App from '@/App.tsx'
import { ToastContainer } from '@/components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('@/mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

const root = createRoot(document.getElementById('root')!)

const queryClient = new QueryClient()

enableMocking().then(() => {
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  )
})
