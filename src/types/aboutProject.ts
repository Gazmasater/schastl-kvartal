export type TAboutProject = {
  heading: string
  smallText: string[]
  features: {
    first: {
      label: string
      subtext: string
    }
    second: {
      label: string
      subtext: string
    }
  }[]
  linkToMapProvider: string
  mapText: string
  videoUrl: string
}
