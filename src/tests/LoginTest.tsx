import { Avatar, Button } from '@/components'
import { AuthSocialLoginButton } from '@/components/auth'
import { Input, InputLabel } from '@/components/common/input'
import { useUserInformation } from '@/hooks/api'
import useLogin from '@/hooks/api/auth/useLogin'
import useLogout from '@/hooks/api/auth/useLogout'
import { FormattedDateWithDots } from '@/utils/formatted-dates'
import { useState } from 'react'

function UserInformationTest() {
  const [emailValue, setEmailValue] = useState('qwerty@test.com')
  const [passwordValue, setPasswordValue] = useState('Qwer1234!!')
  const login = useLogin()
  const logout = useLogout()
  const { data: user, isError: isUserInformationError } = useUserInformation()

  const handleLogin = () => {
    login.mutate({ email: emailValue, password: passwordValue })
  }

  const handleLogout = () => {
    logout.mutate()
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <h3 className="text-center text-xl font-semibold">로그인 Test</h3>
      {!isUserInformationError ? (
        <Button onClick={handleLogout}>로그아웃</Button>
      ) : (
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col gap-2">
            <InputLabel>이메일</InputLabel>
            <Input
              placeholder="이메일을 입력하세요"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <InputLabel>비밀번호</InputLabel>
            <Input
              placeholder="비밀번호를 입력하세요"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <Button onClick={handleLogin}>로그인</Button>
          </div>

          <AuthSocialLoginButton socialType="kakao" />

          <AuthSocialLoginButton socialType="naver" />
        </div>
      )}

      <div className="flex w-fit flex-col gap-4">
        <span>유저 ID: {user?.id}</span>
        <span>이름: {user?.name}</span>
        <span>닉네임: {user?.nickname}</span>
        <span>성별: {user?.gender}</span>
        <span>이메일: {user?.email}</span>
        <span>
          생년월일: {user?.birthday && FormattedDateWithDots(user.birthday)}
        </span>
        <span>휴대전화 번호: {user?.phoneNumber}</span>
        <div className="flex items-center gap-3">
          프로필 사진:
          {user?.profileImageUrl ? (
            <Avatar
              src={user?.profileImageUrl}
              alt="profile-image"
              state="none"
            />
          ) : (
            ' 없음'
          )}
        </div>
      </div>
    </div>
  )
}

export default UserInformationTest
