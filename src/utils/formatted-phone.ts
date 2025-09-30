export const formattedPhoneToE164KR = (phoneNumber: string) => {
  if (phoneNumber.startsWith('+8210')) return phoneNumber

  const slicedPhoneNumber = phoneNumber.substring(1)
  return `+82${slicedPhoneNumber}`
}

export const formattedPhoneWithHyphen = (phoneNumber: string) => {
  if (!phoneNumber || phoneNumber.startsWith('010')) return phoneNumber

  const frontNumber = phoneNumber.substring(5, 9)
  const backNumber = phoneNumber.substring(9, 13)
  return `010-${frontNumber}-${backNumber}`
}
