import { Button } from '@/components'
import { BenefitCard, PopularLectureCard } from '@/components/common/card'
import LandingPageImage from '@/assets/images/LandingPageImage.jpg'
import { BookOpen, Award, ArrowRight, UsersRound } from 'lucide-react'
import { useLoginStore } from '@/store/useLoginStore'
import { API_BASE_URL } from '@/constants/api-constants'
import { Link } from 'react-router'

const LandingPage = () => {
  const { isLoggedIn } = useLoginStore()

  return (
    <div className="mx-auto flex max-w-[1440px] flex-col">
      {/* 1번 섹션 */}
      <div className="bg-primary-50 flex items-center px-5 py-20 sm:px-14 md:px-21 xl:px-28">
        <div className="mx-auto flex max-w-[1280px] gap-4 sm:gap-12">
          <div>
            <div className="sm:text-heading2 text-heading3 flex flex-col pb-6 font-bold lg:text-4xl xl:text-5xl">
              <span className="text-gray-900">IT 전문 지식을</span>
              <span className="text-primary-600">함께 배워나가세요</span>
            </div>
            <div className="sm:text-heading5 lg:text-heading4 text-secondary text-md pb-4 font-semibold sm:pb-8 sm:leading-7">
              최고의 강사진과 함께하는 IT 강의와 스터디 그룹으로 실무 역량을
              키워보세요.
            </div>
            <div className="flex gap-4">
              <Button
                size="sm"
                className="sm:px-6 sm:py-3 sm:leading-6"
                onClick={() => {
                  window.location.href = `${API_BASE_URL}/lectures/list`
                }}
              >
                강의 둘러보기
              </Button>
              <Button
                variant="reverse"
                size="sm"
                className="sm:px-6 sm:py-3 sm:leading-6"
                onClick={() => {
                  window.location.href = `${API_BASE_URL}/study-group`
                }}
              >
                스터디 그룹 참여
              </Button>
            </div>
          </div>
          <img
            src={LandingPageImage}
            alt="스터디 이미지"
            className="aspect-[3/2] w-[45vw] max-w-146 rounded-lg object-contain"
          />
        </div>
      </div>
      {/* 2번 섹션 */}
      <div className="bg-white px-4 py-16 md:px-8 lg:px-20 xl:px-28">
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
          <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              iconbgcolor="bg-primary-100"
              icon={<BookOpen className="text-primary-600" />}
              title="다양한 IT 강의"
              comments={[
                '프론트엔드부터 백엔드, 데이터사이언스까지',
                '모든 분야의 전문 강의를 제공합니다.',
              ]}
            />
            <BenefitCard
              iconbgcolor="bg-green-100"
              icon={<UsersRound className="text-green-600" />}
              // icon의 green-600 색상 부여 필요
              title="스터디 그룹"
              comments={[
                '같은 목표를 가진 사람들과 함께 학습하며',
                '서로 동기부여하고 성장할 수 있습니다.',
              ]}
            />
            <BenefitCard
              iconbgcolor="bg-purple-100"
              icon={<Award className="text-purple-600" />}
              title="전문 강사진"
              comments={[
                '실무 경험이 풍부한 전문가들이 직접 제작한 ',
                '고품질의 강의 콘텐츠를 만나보세요.',
              ]}
            />
          </div>
        </div>
      </div>
      {/* 3번 섹션 */}
      <div className="flex flex-col bg-gray-50 px-4 py-16 md:px-8 lg:px-20 xl:px-28">
        <div className="flex items-center justify-between pb-8">
          <div className="flex flex-col gap-2">
            <p className="text-heading2">인기 강의</p>
            <p className="text-secondary">
              지금 가장 많은 사람들이 수강하는 강의들
            </p>
          </div>
          <button className="text-primary-600 flex whitespace-nowrap">
            <a href={`${API_BASE_URL}/lectures/list`} target="_self">
              모든 강의 보기
            </a>
            <ArrowRight className="pl-1" />
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 임시로 만든 강의목록 카드 */}
          <ImageCard imageUrl={LandingPageImage} variant="elevate">
            <CardTitle className="pb-2 text-lg font-bold">타이틀</CardTitle>
            <div>
              <p className="text-secondary pb-3">제공자</p>
              <div className="text-secondary flex pb-3">
                <span className="text-primary-500">별점 컴포넌트</span>
                <span className="pl-2">별점 텍스트 (리뷰어 수)</span>
              </div>
              <div>
                <span className="text-heading5">Final Price</span>
                <s className="text-secondary pl-2">original price</s>
              </div>
            </div>
          </ImageCard>
          <ImageCard imageUrl={LandingPageImage} variant="elevate">
            <CardTitle className="pb-2 text-lg font-bold">타이틀</CardTitle>
            <div>
              <p className="text-secondary pb-3">제공자</p>
              <div className="text-secondary flex pb-3">
                <span className="text-primary-500">별점 컴포넌트</span>
                <span className="pl-2">별점 텍스트 (리뷰어 수)</span>
              </div>
              <div>
                <span className="text-heading5">Final Price</span>
                <s className="text-secondary pl-2">original price</s>
              </div>
            </div>
          </ImageCard>
          <ImageCard imageUrl={LandingPageImage} variant="elevate">
            <CardTitle className="pb-2 text-lg font-bold">타이틀</CardTitle>
            <div>
              <p className="text-secondary pb-3">제공자</p>
              <div className="text-secondary flex pb-3">
                <span className="text-primary-500">별점 컴포넌트</span>
                <span className="pl-2">별점 텍스트 (리뷰어 수)</span>
              </div>
              <div>
                <span className="text-heading5">Final Price</span>
                <s className="text-secondary pl-2">original price</s>
              </div>
            </div>
          </ImageCard>
        </div>
      </div>
      {/* 4번 섹션 */}
      <div className="bg-primary-500 px-4 py-16 md:px-8 lg:px-20 xl:px-28">
        <div className="flex max-w-[1280px] flex-col items-center">
          <div className="text-heading3 sm:text-heading2 pb-4 text-white">
            지금 시작하여 IT 전문가가 되어보세요!
          </div>
          <div className="text-md sm:text-heading4 text-primary-100 pb-8 font-semibold">
            수백 개의 강의와 활발한 스터디 그룹이 여러분을 기다리고 있습니다.
          </div>
          <div className="flex gap-4">
            {isLoggedIn ? (
              <>
                <Button
                  variant="reverse"
                  size="lg"
                  className="bg-white"
                  onClick={() => {
                    window.location.href = `${API_BASE_URL}/lectures/list`
                  }}
                >
                  스터디 그룹 참여하기
                </Button>
                <Button
                  size="lg"
                  className="border-[2px] border-white"
                  onClick={() => {
                    window.location.href = `${API_BASE_URL}/lectures/create`
                  }}
                >
                  스터디 그룹 만들기
                </Button>
              </>
            ) : (
              <Button variant="reverse" size="lg" className="bg-white">
                <Link
                  to="/auth/login"
                  className="flex h-full w-full items-center justify-center"
                >
                  무료로 시작하기
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
