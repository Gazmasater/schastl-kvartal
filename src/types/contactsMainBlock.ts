export type TContactsMainBlock = {
  mainHeading: string
  addr?: string
  phoneHeading: string
  telegramLink: string
  phone: {
    url: string
    tel: string
  }[]
  workHours: string
  mailtoLink: string
  mailtoText: string
  mapProviderLink: string
  mapProviderText: string
  imgUrl: string
  imgAlt: string
}
