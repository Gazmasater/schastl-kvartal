import { TChooseHouse } from '@localTypes/chooseHouse'

/*
imgUrl: 1280x922
thumb imgUrl: 539x337
*/

export const ChooseHouseMock: TChooseHouse = {
  imgUrl: '/img/mappedImage/image.jpg',
  housesCoords: {
    name: 'my-map',
    areas: [
      {
        id: 'house-1',
        shape: 'poly',
        fillColor: '#ff000061',
        preFillColor: '#ff000061',
        strokeColor: 'black',
        coords: [354, 552, 402, 511, 438, 526, 388, 573],
      },
      {
        id: 'house-2',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [296, 520, 343, 477, 370, 491, 320, 533],
      },
      {
        id: 'house-3',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [243, 495, 293, 450, 318, 462, 265, 506],
      },
    ],
  },
  housesMetadata: {
    'house-1': {
      type: 'sold',
      linkUrl: '/houses/house1',
      statusText: 'Продано',
      text: 'УПС, этот коттедж уже продан! Наведи курсор на зеленый коттедж и выбери свободный',
    },
    'house-2': {
      type: 'available',
      linkUrl: '/houses/house2',
      statusText: 'Доступно',
      houseId: 'Коттедж №96',
      imgUrl: '/img/mappedImage/house1thumb.jpg',
      imgAlt: '',
      title: 'BRILLIANTE',
      features: {
        first: {
          title: 'Площадь участка',
          value: '132.05 m2',
        },
        second: {
          title: 'Размер чего-то',
          value: '6.86 a',
        },
      },
    },
    'house-3': {
      type: 'available',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №96',
      imgUrl: '/img/mappedImage/house1thumb.jpg',
      imgAlt: '',
      title: 'BRILLIANTE',
      features: {
        first: {
          title: 'Площадь участка',
          value: '132.05 m2',
        },
        second: {
          title: 'Размер чего-то',
          value: '6.86 a',
        },
      },
    },
  },
}
