import { AuthLayout, MyPageLayout, RootLayout } from '@/components'
import {
  AppliedRecruitment,
  LandingPage,
  Login,
  MyInfo,
  Signup,
  CompletedStudy,
  Bookmark,
  FindEmail,
  FindPassword,
  NotFound,
} from '@/pages'
import KakaoAuth from '@/pages/auth/KakaoAuth'
import { Route, Routes } from 'react-router'
import TestRoutes from './TestRoutes'

function MainRoutes() {
  return (
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
  )
}

export default MainRoutes
