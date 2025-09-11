import { AuthLayout, MyPageLayout, RootLayout } from '@/components'
import {
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
          <Route
            path="bookmarked-recruitment"
            element={<BookmarkedRecruitment />}
          />
          <Route
            path="bookmarked-lecture"
            element={<div>bookmarked-lecture</div>}
          />
          <Route path="applied-study" element={<div>applied-study</div>} />
          <Route path="completed-study" element={<div>completed-study</div>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default MainRoutes
