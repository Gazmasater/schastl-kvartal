import { ReactElement } from 'react'

export type THouseTypeInfoTab = {
  imageUrl: string
  subtitle: string
  features: ReactElement[]
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
