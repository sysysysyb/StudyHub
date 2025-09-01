import Button from '@/components/common/Button'
import LandingPageImage from '@/assets/images/LandingPageImage.jpg'
import StudyGroupIcon from '@/assets/images/StudyGroupIcon.png'
import { BookOpen, Award } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className="flex max-w-[1440px] flex-col">
      {/* 1번 섹션 */}
      <div className="bg-primary-50 flex items-center px-28 py-20">
        <div className="mx-auto flex max-w-[1280px] gap-12">
          <div>
            <div className="flex flex-col pb-6 text-5xl font-bold">
              <span className="text-gray-900">IT 전문 지식을</span>
              <span className="text-primary-600">함께 배워나가세요</span>
            </div>
            <div className="text-heading4 text-secondary pb-8 leading-7">
              최고의 강사진과 함께하는 IT 강의와 스터디 그룹으로 실무 역량을
              키워보세요.
            </div>
            <div className="flex gap-4">
              <Button variant="primary" size="lg">
                강의 둘러보기
              </Button>
              <button className="border-primary-500 text-primary-600 rounded-lg border px-6 py-3 leading-6">
                스터디 그룹 참여
              </button>
            </div>
          </div>
          <img
            src={LandingPageImage}
            alt="스터디 이미지"
            className="w-146 rounded-lg"
          />
        </div>
      </div>
      {/* 2번 섹션 */}
      <div className="bg-white px-28 py-16">
        <div className="flex max-w-[1280px] flex-col">
          <div className="pb-12">
            <div className="text-heading2 flex justify-center pb-4 text-gray-900">
              왜 StudyHub을 선택해야 할까요?
            </div>
            <span className="text-heading5 text-secondary flex justify-center">
              체계적인 학습과 실무경험을 동시에 얻을 수 있는 최적의
              플랫폼입니다.
            </span>
          </div>
          <div className="flex gap-8">
            <BenefitCard
              iconbgcolor="bg-primary-100"
              icon={<BookOpen className="text-primary-600" />}
              title="다양한 IT 강의"
              comment1="프론트엔드부터 백엔드, 데이터사이언스까지"
              comment2="모든 분야의 전문 강의를 제공합니다."
            />
            <BenefitCard
              iconbgcolor="bg-green-100"
              // 스터디그룹 아이콘은 lucide에서 찾지 못하여 다운받아 첨부
              icon={<img src={StudyGroupIcon} />}
              title="스터디 그룹"
              comment1="같은 목표를 가진 사람들과 함께 학습하며"
              comment2="서로 동기부여하고 성장할 수 있습니다."
            />
            <BenefitCard
              iconbgcolor="bg-purple-100"
              icon={<Award className="text-purple-600" />}
              title="전문 강사진"
              comment1="실무 경험이 풍부한 전문가들이 직접 제작한 "
              comment2="고품질의 강의 콘텐츠를 만나보세요."
            />
          </div>
        </div>
      </div>
      {/* 3번 섹션 */}
      <div className="bg-gray-50"></div>
      {/* 4번 섹션 */}
      <div className="bg-primary-500"></div>
    </div>
  )
}

export default LandingPage

interface BenefitCardProps {
  iconbgcolor: string
  icon: React.ReactNode
  title: string
  comment1: string
  comment2?: string
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  iconbgcolor,
  icon,
  title,
  comment1,
  comment2,
}) => {
  return (
    <div className="flex h-54 w-96 flex-col items-center p-6">
      <div
        className={`${iconbgcolor} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full`}
      >
        {icon}
      </div>
      <div className="text-heading4 pb-3 text-gray-900">{title}</div>
      <div className="text-secondary">{comment1}</div>
      <div className="text-secondary">{comment2}</div>
    </div>
  )
}
