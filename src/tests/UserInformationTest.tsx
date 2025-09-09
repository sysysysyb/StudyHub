import { Avatar } from '@/components'
import { useUserInformation } from '@/hooks/api'

function UserInformationTest() {
  const { data: user } = useUserInformation()

  const birthday = () => {
    const date = user?.birthday
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
      <div className="flex w-fit flex-col gap-4">
        <span>유저 ID: {user?.id}</span>
        <span>이름: {user?.name}</span>
        <span>닉네임: {user?.nickname}</span>
        <span>성별: {user?.gender}</span>
        <span>이메일: {user?.email}</span>
        <span>생년월일: {birthday()}</span>
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
