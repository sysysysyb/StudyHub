import {
  Avatar,
  Modal,
  ModalContent,
  ModalTrigger,
  ModalClose,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalMain,
  Button,
} from '@/components'
import { Input, InputLabel, InputErrorMessage } from '@/components/common/input'
import { useState } from 'react'

export const InfoUpdate = () => {
  const [challengeAuthentication, setChallengeAuthentication] = useState(false)

  return (
    <Modal>
      {/* 모달 열기 버튼 */}
      <Button size="lg">
        <ModalTrigger>수정하기</ModalTrigger>
      </Button>

      {/* 모달 내용 */}
      <ModalContent>
        <ModalHeader>
          <ModalTitle>프로필 수정</ModalTitle>
        </ModalHeader>

        <ModalMain className="flex flex-col gap-6">
          <label className="flex cursor-pointer flex-col items-center gap-4">
            <Avatar size="3xl" state="none" />
            {/* <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0]
                  console.log('선택된 파일:', file)
                  // TODO: 파일 미리보기 or 업로드 API 호출
                }
              }}
            /> */}
            <span className="text-primary-600 text-sm">프로필 사진 변경</span>
          </label>
          <div className="flex flex-col gap-2">
            <InputLabel htmlFor="nickname" isRequired>
              닉네임
            </InputLabel>
            <Input id="nickname" aria-describedby="nickname-error" />
            {/* <InputErrorMessage id="nickname-error">
              닉네임은 필수 입력값입니다.
            </InputErrorMessage> */}
          </div>

          <div className="flex items-end gap-2">
            <div className="flex flex-col gap-2">
              <InputLabel htmlFor="phonenumber">휴대폰 번호</InputLabel>
              <Input id="phonenumber" aria-describedby="phonenumber-error" />
              {/* <InputErrorMessage id="phonenumber-error">
              올바른 휴대폰 번호를 입력해주세요.
            </InputErrorMessage> */}
            </div>

            {/* 테스트용 임시로직 구현 */}
            {challengeAuthentication ? (
              <Button
                variant="secondary"
                className="py-3.5"
                onClick={() => setChallengeAuthentication(false)}
              >
                재인증
              </Button>
            ) : (
              <Button
                variant="secondary"
                className="py-3.5"
                onClick={() => setChallengeAuthentication(true)}
              >
                인증하기
              </Button>
            )}
          </div>
          {challengeAuthentication && (
            <div className="flex items-end gap-2">
              <div className="flex flex-col gap-2">
                <InputLabel htmlFor="authenticationnumber">
                  인증 번호
                </InputLabel>
                <Input
                  id="authenticationnumber"
                  aria-describedby="authenticationnumber-error"
                />
                {/* <InputErrorMessage id="authenticationnumber-error">
              올바른 휴대폰 번호를 입력해주세요.
            </InputErrorMessage> */}
              </div>
              <Button className="py-3.5">확인</Button>
            </div>
          )}
        </ModalMain>

        <ModalFooter className="flex justify-end gap-1">
          <ModalClose>
            <Button
              variant="outline"
              onClick={() => setChallengeAuthentication(false)}
            >
              취소
            </Button>
          </ModalClose>
          <Button>변경하기</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
