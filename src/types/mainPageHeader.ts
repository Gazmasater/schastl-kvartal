export type TMainPageHeader = {
  mainPageLink: string
  mainPageLabel: string
  separator: string
  subitemText: string
  headingFirst: string
  headingSecond?: string
  headingSecondProps?: {
    fontSizeDefault?: string
    fontWeightDefault?: string
    lineHeightDefault?: string
    fontSizeMiddleViewPort?: string
    fontWeightMiddleViewPort?: string
    lineHeightMiddleViewPort?: string
    fontSizeBigViewPort?: string
    fontWeightBigViewPort?: string
    lineHeightBigViewPort?: string
  }
  mainPageImageXs: string
  mainPageImageMd: string
  mainPageImageLg: string
  features?: {
    first: {
      label: string
      value: string
    }
    second: {
      label: string
      value: string
    }
  }
  blackHeadings?: boolean
  customHeadingHexColor?: string
  customFeaturesBaseColor?: string
  customFeaturesPrimaryColor?: string
  breadcrumbsColor?: string
  darkenBgColor?: string
}
