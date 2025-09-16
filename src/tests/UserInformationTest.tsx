import { Avatar, Button } from '@/components'
import { useUserInformation } from '@/hooks/api'
import useLogin from '@/hooks/api/auth/useLogin'
import useLogout from '@/hooks/api/auth/useLogout'

function UserInformationTest() {
  const login = useLogin()
  const logout = useLogout()
  const { data: user } = useUserInformation({
    enabled: login.isSuccess,
    retry: false,
    queryKey: ['users', 'me'],
  })

  const handleLogin = () => {
    login.mutate({ email: 'qwerty@test.com', password: 'Qwer1234!!' })
  }

  const handleLogout = () => {
    logout.mutate()
  }

  const formatDateWithDots = (date: string) => {
    const yyyy = date?.substring(0, 4)
    const mm = date?.substring(5, 7)
    const dd = date?.substring(8, 10)

    return `${yyyy}. ${mm}. ${dd}.`
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <h3 className="text-center text-xl font-semibold">
        사용자 정보 가져오기 Test
      </h3>
      {user ? (
        <Button onClick={handleLogout}>로그아웃</Button>
      ) : (
        <Button onClick={handleLogin}>로그인</Button>
      )}

      <div className="flex w-fit flex-col gap-4">
        <span>유저 ID: {user?.id}</span>
        <span>이름: {user?.name}</span>
        <span>닉네임: {user?.nickname}</span>
        <span>성별: {user?.gender}</span>
        <span>이메일: {user?.email}</span>
        <span>
          생년월일: {user?.birthday && formatDateWithDots(user.birthday)}
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
