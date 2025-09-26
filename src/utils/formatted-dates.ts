export const formattedCloseAt = (closeAtString: Date) => {
  const closeAt = new Date(closeAtString)
  const closeAtYear = closeAt.getFullYear()
  const closeAtMonth = closeAt.getMonth() + 1
  const closeAtDate = closeAt.getDate()
  return `마감일: ${closeAtYear}.${closeAtMonth}.${closeAtDate}.`
}

export const formattedAppliedAt = (appliedAtString: Date) => {
  const appliedAt = new Date(appliedAtString)
  const appliedAtYear = appliedAt.getFullYear()
  // padStart(targetLength, padString)은 지정된 길이가 충족되지 않아 생긴 빈 공간에 지정된 문자(padString)를 채워서 지정한 길이가 되도록 만들어 줍니다.
  // 1 ~ 9 대신 01 ~ 09
  const appliedAtMonth = String(appliedAt.getMonth() + 1).padStart(2, '0')
  const appliedAtDate = String(appliedAt.getDate()).padStart(2, '0')
  const appliedAtRawHours = appliedAt.getHours() // 기본 24시로 표현
  const appliedAtSplittedHours = String(appliedAtRawHours % 12 || 12).padStart(
    2,
    '0'
  ) // 12시간씩 나누어 표현하고, 0은 falsy 값이라 출력되지 않으며 12가 출력됨.
  const appliedAtMinutes = String(appliedAt.getMinutes()).padStart(2, '0')
  const appliedAtAmPM = appliedAtRawHours >= 12 ? '오후' : '오전'
  // 최종 지원시기 전달양식
  return `${appliedAtYear}.${appliedAtMonth}.${appliedAtDate}. ${appliedAtAmPM} ${appliedAtSplittedHours}:${appliedAtMinutes}`
}

export const formattedEndDate = (endDateString: Date) => {
  const endDate = new Date(endDateString)
  const endDateYear = endDate.getFullYear()
  const endDateMonth = endDate.getMonth() + 1
  return `${endDateYear}년 ${endDateMonth}월`
}

export const formattedDateWithDots = (date: string) => {
  const dateWithNumber = date.replace(/\D/g, '')
  const yyyy = dateWithNumber.substring(0, 4)
  const mm = dateWithNumber.substring(4, 6)
  const dd = dateWithNumber.substring(6, 8)

  return `${yyyy}. ${mm}. ${dd}.`
}

export const formattedDateWithHyphen = (date: string) => {
  const dateWithNumber = date.replace(/\D/g, '')
  const yyyy = dateWithNumber.substring(0, 4)
  const mm = dateWithNumber.substring(4, 6)
  const dd = dateWithNumber.substring(6, 8)

  return `${yyyy}-${mm}-${dd}`
}

export const formattedDateWithKorean = (date: string) => {
  const dateWithNumber = date.replace(/\D/g, '')
  const yyyy = dateWithNumber.substring(0, 4)
  const mm = dateWithNumber.substring(4, 6)
  const dd = dateWithNumber.substring(6, 8)

  return `${yyyy}년 ${mm}월 ${dd}일`
}
