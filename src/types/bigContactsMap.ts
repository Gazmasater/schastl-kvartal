/* eslint-disable @typescript-eslint/no-explicit-any */

export type TBigContactsMap = {
  heading: string
  config: {
    behaviors?: string[] | undefined
    bounds?: number[][] | undefined
    center?: number[] | undefined
    controls?: any
    margin?: number[][] | number[] | undefined
    type?: 'yandex#map' | 'yandex#satellite' | 'yandex#hybrid' | undefined
    zoom?: number | undefined
  }
  mapPlaceMarkCoords: number[]
}
