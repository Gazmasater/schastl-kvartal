export type TGalleryImgUrls = {
  full: string
  thumb: string
}[]

export type TGallery = {
  title: string
  gallery: {
    date: string
    text?: string[]
    altDescription?: string
    imgUrls: TGalleryImgUrls
  }[]
}
