import type { ReactNode } from 'react'
import { Logo } from '@/components'
import { FooterNavComponent } from '@/components/footer/FooterNavComponent'
import { LEARN_BASE_URL, STUDY_BASE_URL } from '@/constants/url-constants'

export function Footer(): ReactNode {
  return (
    <footer className="flex flex-col items-center bg-gray-900 px-28 py-12">
      {/* 상부 섹션 */}
      <section className="grid max-w-[1280px] grid-cols-1 gap-12 pb-8 text-gray-300 md:grid-cols-[6fr_1fr_1fr]">
        <div className="flex flex-col items-start">
          <div className="pb-4">
            <Logo size="lg" />
          </div>
          <p>IT 전문가로 성장하는 여정에 함께합니다.</p>
          <p>최고의 강의와 스터디 그룹으로 실무 역량을 키워보세요.</p>
        </div>
        <FooterNavComponent
          category="서비스"
          NavButtons={[
            { label: '강의 목록', url: `${LEARN_BASE_URL}/lecture` },
            { label: '스터디 그룹', url: STUDY_BASE_URL },
            { label: '구인 공고', url: `${LEARN_BASE_URL}/recruitmemt` },
          ]}
        />
        <FooterNavComponent
          category="지원"
          NavButtons={[
            { label: '고객센터', url: `${LEARN_BASE_URL}/lecture` },
            { label: 'FAQ', url: `${LEARN_BASE_URL}/lecture` },
            { label: '개인정보처리방침', url: `${LEARN_BASE_URL}/lecture` },
          ]}
        />
      </section>
      {/* 하부 섹션 */}
      <section className="flex w-full justify-center border-t border-t-gray-800 pt-8 text-gray-400">
        © 2025 StudyHub. All rights reserved.
      </section>
    </footer>
  )
}
