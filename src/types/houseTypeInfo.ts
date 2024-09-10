export type THouseTypeInfoTab = {
  imageUrl: string
  imageUrlBig?: string
  subtitle: string
  features: {
    textInSpan: string
    middleText: string
    supText?: string
  }[]
  firstLinkText: string
  firstLinkUrl: string
  secondLinkText: string
  secondLinkUrl: string
}

export type THouseTypeInfo = {
  heading: string
  firstTabTitle: string
  secondTabTitle: string
  firstTab: THouseTypeInfoTab
  secondTab: THouseTypeInfoTab
}
