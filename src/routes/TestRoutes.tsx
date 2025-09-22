import { Button } from '@/components'
import TestHub from '@/pages/TestHub'
import { testPages } from '@/utils'
import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router'
import MainRoutes from './MainRoutes'

function Root() {
  return (
    <div className="flex h-screen items-center justify-center gap-10">
      <Button className="px-10 py-6 text-2xl">
        <Link to="/landing">사이트 메인</Link>
      </Button>
      <Button className="px-10 py-6 text-2xl">
        <Link to="/my-page">마이 페이지</Link>
      </Button>
      <Button className="px-10 py-6 text-2xl">
        <Link to="/test-hub">테스트 허브</Link>
      </Button>
    </div>
  )
}

function TestRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/*" element={<MainRoutes />} />
      <Route path="/test-hub/*" element={<TestHub />}>
        {testPages.map((p) => {
          const Page = lazy(p.loader)
          return (
            <Route
              key={p.key}
              path={p.route}
              element={
                <Suspense
                  fallback={
                    <div className="flex h-full items-center justify-center">
                      Loading...
                    </div>
                  }
                >
                  <Page />
                </Suspense>
              }
            />
          )
        })}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default TestRoutes
