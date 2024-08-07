import { Map } from 'react-img-mapper'

export type THouseMetadata =
  | {
      type: 'sold'
      linkUrl: string
      statusText: string
      text: string
    }
  | {
      type: 'available'
      linkUrl: string
      statusText: string
      houseId: string
      imgUrl: string
      imgAlt: string
      title: string
      features: {
        first: {
          title: string
          value: string
        }
        second: {
          title: string
          value: string
        }
      }
    }

export type THousesMetadata = { [key: string]: THouseMetadata }

export type TChooseHouse = {
  imgUrl: string
  housesCoords: Map
  housesMetadata: THousesMetadata
}
