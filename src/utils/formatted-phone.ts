export const formattedPhoneToE164KR = (phoneNumber: string) => {
  if (phoneNumber.startsWith('+8210')) return phoneNumber

  const slicedPhoneNumber = phoneNumber.substring(1)
  return `+82${slicedPhoneNumber}`
}
