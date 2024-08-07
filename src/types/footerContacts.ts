/* eslint-disable @typescript-eslint/no-explicit-any */

export type TFooterContacts = {
  heading: string
  addrSubheading: string
  addr: string
  phonesSubheading: string
  phones: {
    url: string
    text: string
  }[]
  mapProviderLink: string
  mapProviderLinkText: string
  mapConfig: {
    behaviors?: string[] | undefined
    bounds?: number[][] | undefined
    center?: number[] | undefined
    controls?: any
    margin?: number[][] | number[] | undefined
    type?: 'yandex#map' | 'yandex#satellite' | 'yandex#hybrid' | undefined
    zoom?: number | undefined
  }
}
