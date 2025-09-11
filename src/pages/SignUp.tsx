import {
  AuthBadge,
  AuthContainer,
  AuthDescription,
  AuthLink,
  AuthLogo,
  AuthSubmitButton,
  AuthTitle,
  AuthVerifyButton,
} from '@/components/auth'
import { Input, InputDescription, InputLabel } from '@/components/common/input'

const flexRowStyle = 'flex gap-3'
const flexColStyle = 'flex flex-col gap-3'

function Signup() {
  return (
    <AuthContainer className="flex flex-col gap-10">
      <div className={flexColStyle}>
        <AuthLogo />
        <AuthTitle>회원가입</AuthTitle>
        <div className="flex justify-center gap-1">
          <AuthDescription>이미 계정이 있으신가요?</AuthDescription>
          <AuthLink to="/auth/login">로그인하기</AuthLink>
        </div>
      </div>
      <form className="flex flex-col gap-10">
        <div className={flexColStyle}>
          <InputLabel isRequired>이름</InputLabel>
          <Input placeholder="이름을 입력해주세요" />
        </div>
        <div className={flexColStyle}>
          <InputLabel isRequired>닉네임</InputLabel>
          <div className={flexRowStyle}>
            <Input placeholder="닉네임을 입력해주세요" />
            <AuthVerifyButton>중복확인</AuthVerifyButton>
          </div>
        </div>
        <div className={flexColStyle}>
          <InputLabel isRequired>생년월일</InputLabel>
          <Input placeholder="생년월일을 입력해주세요 (ex. 20001004)" />
        </div>
        <div className={flexColStyle}>
          <InputLabel isRequired>성별</InputLabel>
          <div className={flexRowStyle}>
            <label htmlFor="gender-male">
              <AuthBadge isSelected>남</AuthBadge>
            </label>
            <input
              id="gender-male"
              type="radio"
              value="male"
              className="hidden"
            />
            <label htmlFor="gender-female">
              <AuthBadge>여</AuthBadge>
            </label>
            <input
              id="gender-female"
              type="radio"
              value="female"
              className="hidden"
            />
          </div>
        </div>
        <div className={flexColStyle}>
          <div className="flex gap-3">
            <InputLabel isRequired>이메일</InputLabel>
            <InputDescription>로그인 시 아이디로 사용합니다.</InputDescription>
          </div>
          <div className={flexRowStyle}>
            <Input placeholder="이메일을 입력해주세요" />
            <AuthVerifyButton>인증코드전송</AuthVerifyButton>
          </div>
          <div className={flexRowStyle}>
            <Input placeholder="인증코드 6자리를 입력해주세요" />
            <AuthVerifyButton disabled>인증코드확인</AuthVerifyButton>
          </div>
        </div>
        <div className={flexColStyle}>
          <InputLabel isRequired>휴대전화</InputLabel>
          <div className="flex gap-3">
            <Input placeholder="휴대전화 번호를 입력해주세요 (ex. 01012345678)" />
            <AuthVerifyButton>인증코드전송</AuthVerifyButton>
          </div>
          <div className={flexRowStyle}>
            <Input placeholder="인증코드 6자리를 입력해주세요" />
            <AuthVerifyButton disabled>인증코드확인</AuthVerifyButton>
          </div>
        </div>
        <div className={flexColStyle}>
          <div className={flexRowStyle}>
            <InputLabel isRequired>비밀번호</InputLabel>
            <InputDescription>
              8~15자의 영문 대소문자, 숫자, 특수문자 포함
            </InputDescription>
          </div>
          <Input placeholder="비밀번호를 입력해주세요" />
          <Input placeholder="비밀번호를 다시 입력해주세요" />
        </div>
        <AuthSubmitButton>가입하기</AuthSubmitButton>
      </form>
    </AuthContainer>
  )
}

export default Signup
