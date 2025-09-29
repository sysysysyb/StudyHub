import RootLayout from '@/components/layout/RootLayout'
import { Route, Routes } from 'react-router'
import { lazy, Suspense } from 'react'
import LandingPage from '@/pages/LandingPage'

// layouts
const AuthLayout = lazy(() => import('@/components/layout/AuthLayout'))
const MyPageLayout = lazy(() => import('@/components/layout/MyPageLayout'))

// routes
const TestRoutes = lazy(() => import('@/routes/TestRoutes'))

// pages
const AppliedRecruitment = lazy(
  () => import('@/pages/my-page/AppliedRecruitment')
)
const Login = lazy(() => import('@/pages/auth/Login'))
const MyInfo = lazy(() => import('@/pages/my-page/MyInfo'))
const Signup = lazy(() => import('@/pages/auth/SignUp'))
const CompletedStudy = lazy(() => import('@/pages/my-page/CompletedStudy'))
const Bookmark = lazy(() => import('@/pages/my-page/Bookmark'))
const FindEmail = lazy(() => import('@/pages/auth/FindEmail'))
const FindPassword = lazy(() => import('@/pages/auth/FindPassword'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const KakaoAuth = lazy(() => import('@/pages/auth/KakaoAuth'))

function MainRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />

          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="find-email" element={<FindEmail />} />
            <Route path="find-password" element={<FindPassword />} />
            <Route path="restore-user" element={<div>restore-user</div>} />
          </Route>

          <Route path="my-page" element={<MyPageLayout />}>
            <Route index element={<MyInfo />} />
            <Route path="applications" element={<AppliedRecruitment />} />
            <Route path="completed-study" element={<CompletedStudy />} />
            <Route path="bookmarked/" element={<Bookmark />} />
            <Route path="bookmarked/:content" element={<Bookmark />} />
          </Route>

          {/* 404 페이지 */}
          <Route path="*" element={<NotFound />} />

          {/* 소셜 로그인 */}
          <Route path="/oauth/kakao" element={<KakaoAuth />} />
          {/* <Route path="/oauth/naver" element={<NaverAuth />} /> */}
        </Route>

        {/* 테스트 허브 */}
        <Route path="/test/*" element={<TestRoutes />} />
      </Routes>
    </Suspense>
  )
}

export default MainRoutes
