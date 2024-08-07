export type TMainPageHeader = {
  mainPageLink: string
  mainPageLabel: string
  separator: string
  subitemText: string
  headingFirst: string
  headingSecond?: string
  mainPageImageXs: string
  mainPageImageMd: string
  mainPageImageLg: string
  blackHeadings?: boolean
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
}
