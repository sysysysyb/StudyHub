import type { ComponentProps } from 'react'
import Button from '@/components/common/Button'
import { cn } from '@/utils'
import { cva } from 'class-variance-authority'
import KakaoIcon from '@/assets/images/KakaoIcon.svg'
import NaverIcon from '@/assets/images/NaverIcon.svg'

const AuthSocialLoginButtonVariants = cva(
  'flex w-full items-center justify-center gap-1 p-4',
  {
    variants: {
      social: {
        kakao:
          'bg-[#FEE500] text-[#391c1a] hover:bg-[#FEE500] active:bg-[#FEE500]',
        naver: 'bg-[#03C75A] hover:bg-[#03C75A] active:bg-[#03C75A]',
      },
    },
  }
)

interface AuthSocialLoginButtonProps extends ComponentProps<typeof Button> {
  socialType: 'kakao' | 'naver'
}

const BUTTON_TEXT = {
  kakao: '카카오',
  naver: '네이버',
}
const BUTTON_IMAGE = {
  kakao: KakaoIcon,
  naver: NaverIcon,
}

export function AuthSocialLoginButton({
  socialType,
  className,
  ...props
}: AuthSocialLoginButtonProps) {
  return (
    <Button
      type="button"
      className={cn(
        AuthSocialLoginButtonVariants({ social: socialType }),
        className
      )}
      {...props}
    >
      <img src={BUTTON_IMAGE[socialType]} alt={`${socialType} login`} />
      {BUTTON_TEXT[socialType]} 간편 로그인 / 가입
    </Button>
  )
}
