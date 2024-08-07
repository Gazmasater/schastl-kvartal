export type TGallery = {
  title: string
  gallery: {
    date: string
    imgUrls: {
      full: string
      thumb: string
    }[]
  }[]
}
