import {
  Modal,
  ModalContent,
  ModalTrigger,
  ModalClose,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalMain,
} from '@/components/common/Modal'
import { Button } from '@/components'
import { CircleAlert } from 'lucide-react'
import { InputLabel, CustomSelectBox } from '@/components/common/input'
import { InputBase } from '@/constants/input-variants'
import { cn } from '@/utils'

export const Withdrawal = () => {
  return (
    <Modal>
      {/* 모달 열기 버튼 */}
      <ModalTrigger>
        <Button variant="danger" size="lg" className="whitespace-nowrap">
          회원 탈퇴
        </Button>
      </ModalTrigger>
      {/* 모달 내용 */}
      <ModalContent>
        <ModalHeader>
          <ModalTitle className="flex items-center gap-3">
            <div className="flex justify-center rounded-full bg-[#FEE2E2] px-2 py-2">
              <CircleAlert className="text-danger-600" size="16" />
            </div>
            <span>회원 탈퇴</span>
          </ModalTitle>
        </ModalHeader>

        <ModalMain className="flex flex-col gap-4 p-6">
          <section className="border border-[#FECACA] bg-[#FEF2F2] px-6 py-4">
            <p className="flex items-center gap-2 pb-2">
              <CircleAlert className="text-danger-600" size="14" />
              <span className="text-danger-800 text-sm">회원 탈퇴 안내</span>
            </p>
            <ul className="flex list-disc flex-col gap-1 px-4 pb-4 text-xs text-[#B91C1C]">
              <li>탈퇴 즉시 서비스 이용이 중단됩니다</li>
              <li>
                <strong>2주간 계정 복구가 가능</strong>합니다
              </li>
              <li>2주 후 모든 개인정보가 완전히 삭제됩니다</li>
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <InputLabel isRequired>탈퇴 사유</InputLabel>
            <CustomSelectBox
              defaultLabel="탈퇴 사유를 선택해주세요"
              options={[
                {
                  label: '서비스 이용할 시간이 없음',
                  value: 'NO_LONGER_NEEDED',
                },
                { label: '관심이 사라짐', value: 'LACK_OF_INTEREST' },
                {
                  label: '서비스를 이용하기가 너무 어려움',
                  value: 'TOO_DIFFICULT',
                },
                { label: '더 좋은 대안을 찾음', value: 'FOUND_BETTER_SERVICE' },
                { label: '개인정보/보안 우려', value: 'PRIVACY_CONCERNS' },
                { label: '서비스 품질 불만', value: 'POOR_SERVICE_QUALITY' },
                { label: '기술적 문제(버그 등)', value: 'TECHNICAL_ISSUES' },
                {
                  label: '원하는 콘텐츠나 기능의 부족',
                  value: 'LACK_OF_CONTENT',
                },
                { label: '기타', value: 'OTHER' },
              ]}
            />
            <InputLabel isRequired>탈퇴 상세 사유</InputLabel>
            <textarea
              className={cn(InputBase, 'h-20 resize-none px-3 text-gray-800')}
              placeholder="탈퇴 사유를 입력해주세요."
            />
            <div className="flex gap-2">
              <input type="checkbox" />
              <InputLabel isRequired>회원 탈퇴에 동의합니다</InputLabel>
            </div>
          </section>
        </ModalMain>

        <ModalFooter className="flex justify-end gap-1">
          <ModalClose>
            <Button variant="outline">취소</Button>
          </ModalClose>
          <Button variant="danger">회원 탈퇴</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
