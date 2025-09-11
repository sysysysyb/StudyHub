import { AuthLayout, MyPageLayout, RootLayout } from '@/components'
import {
  AppliedRecruitment,
  BookmarkedLecture,
  BookmarkedRecruitment,
  LandingPage,
  Login,
  MyInfo,
  Signup,
} from '@/pages'
import { Route, Routes } from 'react-router'

function MainRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* TODO: /landing -> index로 수정 */}
        <Route path="landing" element={<LandingPage />} />

        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="find-email" element={<div>find-email</div>} />
          <Route path="find-password" element={<div>find-password</div>} />
          <Route path="restore-user" element={<div>restore-user</div>} />
        </Route>

        <Route path="my-page" element={<MyPageLayout />}>
          <Route index element={<MyInfo />} />
          <Route path="applied-study" element={<AppliedRecruitment />} />
          <Route path="completed-study" element={<div>completed-study</div>} />
          <Route path="bookmarked">
            <Route index element={<div>Bookmarked</div>} />
            <Route path="recruitment" element={<BookmarkedRecruitment />} />
            <Route path="lecture" element={<BookmarkedLecture />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default MainRoutes
