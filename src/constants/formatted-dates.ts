export const CloseAt = (closeAtString: Date) => {
  const closeAt = new Date(closeAtString)
  const closeAtYear = closeAt.getFullYear()
  const closeAtMonth = closeAt.getMonth()
  const closeAtDate = closeAt.getDate()
  return `마감일: ${closeAtYear}.${closeAtMonth}.${closeAtDate}.`
}

export const AppliedAt = (appliedAtString: Date) => {
  const appliedAt = new Date(appliedAtString)
  // 연/월/일
  const appliedAtYear = appliedAt.getFullYear()
  // padStart(targetLength, padString)은 문자열 앞쪽을 채워서 지정한 길이가 되도록 만들어 줍니다.
  // 1 ~ 12 대신 01 ~ 12
  const appliedAtMonth = String(appliedAt.getMonth() + 1).padStart(2, '0')
  const appliedAtDate = String(appliedAt.getDate()).padStart(2, '0')
  // 시/분
  const appliedAtRawHours = appliedAt.getHours() //24시로 표현
  const appliedAtHours = String(appliedAtRawHours % 12 || 12).padStart(2, '0') // 12시까지 표현
  const appliedAtMinutes = String(appliedAt.getMinutes()).padStart(2, '0')
  // 오전/오후
  const appliedAtHoursSplit = appliedAtRawHours >= 12 ? '오후' : '오전'
  // 최종 지원시기 전달양식
  return `${appliedAtYear}.${appliedAtMonth}.${appliedAtDate}. ${appliedAtHoursSplit} ${appliedAtHours}:${appliedAtMinutes}`
}
