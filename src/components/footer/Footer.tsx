import type { ReactNode } from 'react'
import { Logo } from '../common/Logo'
import { FooterNavComponent } from './FooterNavComponent'

export function Footer(): ReactNode {
  return (
    <footer className="flex flex-col items-center bg-gray-900 px-28 py-12">
      {/* 상부 섹션 */}
      <div className="grid max-w-[1280px] grid-cols-1 gap-12 pb-8 text-gray-300 md:grid-cols-[8fr_1fr_1fr]">
        <div className="flex flex-col items-start">
          <div className="pb-4">
            <Logo />
          </div>
<<<<<<< HEAD
          <p>
            IT 전문가로 성장하는 여정에 함께합니다. 최고의 강의와 스터디
            그룹으로 실무 역량을 키워보세요.
          </p>
=======
          <div>
            IT 전문가로 성장하는 여정에 함께합니다. 최고의 강의와 스터디
            그룹으로 실무 역량을 키워보세요.
          </div>
>>>>>>> 052c3b7 (✨ Feature: 루트 레이아웃에 푸터 추가 (#68))
        </div>
        <FooterNavComponent
          category="서비스"
          NavButtons={[
            { label: '강의 목록' },
            { label: '스터디 그룹' },
            { label: '구인 공고' },
          ]}
        />
<<<<<<< HEAD
=======

        {/* 지원 */}
>>>>>>> 052c3b7 (✨ Feature: 루트 레이아웃에 푸터 추가 (#68))
        <FooterNavComponent
          category="지원"
          NavButtons={[
            { label: '고객센터' },
            { label: 'FAQ' },
            { label: '개인정보처리방침' },
          ]}
        />
      </div>
      {/* 하부 섹션 */}
      <div className="flex w-full justify-center border-t border-t-gray-800 pt-8 text-gray-400">
        © 2025 StudyHub. All rights reserved.
      </div>
    </footer>
  )
}
